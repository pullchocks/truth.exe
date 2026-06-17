#!/usr/bin/env python3
"""SchizoBot launcher — bootstraps deps, Ollama, optional SearXNG, opens the UI."""

from __future__ import annotations

import atexit
import json
import os
import shutil
import signal
import subprocess
import sys
import time
import urllib.error
import urllib.request
import webbrowser
from dataclasses import dataclass, field
from pathlib import Path

ROOT = Path(__file__).resolve().parent
PORT = int(os.getenv("PORT", "8765"))
HOST = os.getenv("SCHIZOBOT_HOST", "127.0.0.1")
OLLAMA_URL = os.getenv("OLLAMA_URL", "http://127.0.0.1:11434").rstrip("/")
SEARXNG_URL = os.getenv("SEARXNG_URL", "http://127.0.0.1:8080").rstrip("/")
DEFAULT_MODEL = os.getenv("SCHIZOBOT_MODEL", "qwen3:4b")
APP_URL = f"http://{HOST}:{PORT}/"


@dataclass
class ServiceState:
    ollama_proc: subprocess.Popen | None = None
    ollama_we_started: bool = False
    searxng_we_started: bool = False
    uvicorn_proc: subprocess.Popen | None = None
    cleaning: bool = field(default=False)


STATE = ServiceState()


def log(msg: str) -> None:
    print(f"[SchizoBot] {msg}", flush=True)


def venv_python() -> Path:
    if sys.platform == "win32":
        return ROOT / ".venv" / "Scripts" / "python.exe"
    return ROOT / ".venv" / "bin" / "python"


def http_ok(url: str, timeout: float = 2.0) -> bool:
    try:
        with urllib.request.urlopen(url, timeout=timeout) as resp:
            return 200 <= resp.status < 400
    except (urllib.error.URLError, TimeoutError, OSError):
        return False


def stop_process(proc: subprocess.Popen | None, name: str, timeout: float = 8.0) -> None:
    if not proc or proc.poll() is not None:
        return
    log(f"Stopping {name}...")
    proc.terminate()
    try:
        proc.wait(timeout=timeout)
    except subprocess.TimeoutExpired:
        proc.kill()
        proc.wait(timeout=4)


def cleanup_services() -> None:
    if STATE.cleaning:
        return
    STATE.cleaning = True

    stop_process(STATE.uvicorn_proc, "web server")

    if STATE.searxng_we_started and shutil.which("docker"):
        compose = ROOT / "docker-compose.yml"
        if compose.is_file():
            log("Stopping index relay...")
            subprocess.run(
                ["docker", "compose", "stop", "searxng"],
                cwd=ROOT,
                check=False,
            )

    if STATE.ollama_we_started:
        stop_process(STATE.ollama_proc, "Ollama")

    log("Cleanup complete.")


def _handle_exit_signal(signum: int, _frame) -> None:
    if signum == signal.SIGINT:
        log("Shutting down...")
    cleanup_services()
    raise SystemExit(0)


def register_cleanup_handlers() -> None:
    atexit.register(cleanup_services)
    signal.signal(signal.SIGINT, _handle_exit_signal)
    if hasattr(signal, "SIGTERM"):
        signal.signal(signal.SIGTERM, _handle_exit_signal)


def try_install_linux_venv() -> bool:
    if sys.platform == "linux" and shutil.which("apt-get"):
        ver = f"{sys.version_info.major}.{sys.version_info.minor}"
        pkg = f"python{ver}-venv"
        log(f"Installing {pkg} (may ask for sudo)...")
        cmd = ["apt-get", "install", "-y", pkg]
        if shutil.which("sudo"):
            cmd = ["sudo", *cmd]
        if subprocess.run(cmd, check=False).returncode != 0:
            fallback = ["apt-get", "install", "-y", "python3-venv"]
            if shutil.which("sudo"):
                fallback = ["sudo", *fallback]
            subprocess.run(fallback, check=False)
        try:
            import ensurepip  # noqa: F401
        except ImportError:
            return False
        return True
    return False


def venv_pip_ready(py: Path) -> bool:
    try:
        subprocess.run(
            [str(py), "-m", "pip", "--version"],
            capture_output=True,
            check=True,
            timeout=20,
        )
        return True
    except (subprocess.CalledProcessError, OSError, subprocess.TimeoutExpired):
        return False


def bootstrap_venv_pip(py: Path) -> None:
    if venv_pip_ready(py):
        return
    log("Bootstrapping pip in local bunker...")
    subprocess.check_call([str(py), "-m", "ensurepip", "--upgrade"])
    if not venv_pip_ready(py):
        raise RuntimeError("Could not install pip into .venv")


def create_venv() -> None:
    log("Creating local bunker (.venv)...")
    try:
        subprocess.check_call([sys.executable, "-m", "venv", str(ROOT / ".venv")])
    except subprocess.CalledProcessError as exc:
        try:
            import ensurepip  # noqa: F401
        except ImportError:
            if try_install_linux_venv():
                subprocess.check_call([sys.executable, "-m", "venv", str(ROOT / ".venv")])
            else:
                log("Python venv support is missing.")
                if sys.platform == "linux":
                    ver = f"{sys.version_info.major}.{sys.version_info.minor}"
                    log(f"On Ubuntu/Debian run: sudo apt install python{ver}-venv")
                else:
                    log("Reinstall Python with pip and venv enabled.")
                raise RuntimeError("venv setup failed") from exc
        else:
            raise


def ensure_python_deps() -> Path:
    py = venv_python()
    if not py.exists():
        create_venv()
        py = venv_python()

    if not venv_pip_ready(py):
        try:
            bootstrap_venv_pip(py)
        except (subprocess.CalledProcessError, RuntimeError):
            log("Local bunker is broken. Rebuilding...")
            shutil.rmtree(ROOT / ".venv", ignore_errors=True)
            create_venv()
            py = venv_python()
            bootstrap_venv_pip(py)

    log("Installing Python dependencies...")
    subprocess.check_call(
        [str(py), "-m", "pip", "install", "-q", "--upgrade", "pip"],
        cwd=ROOT,
    )
    subprocess.check_call(
        [str(py), "-m", "pip", "install", "-q", "-r", str(ROOT / "requirements.txt")],
        cwd=ROOT,
    )
    return py


def find_ollama_bin() -> Path | None:
    found = shutil.which("ollama")
    if found:
        return Path(found)
    if sys.platform == "win32":
        local = os.environ.get("LOCALAPPDATA", "")
        candidates = [
            Path(local) / "Programs" / "Ollama" / "ollama.exe",
            Path(os.environ.get("ProgramFiles", "")) / "Ollama" / "ollama.exe",
        ]
        for path in candidates:
            if path.is_file():
                return path
    else:
        for path in (Path("/usr/local/bin/ollama"), Path("/usr/bin/ollama")):
            if path.is_file():
                return path
    return None


def install_ollama() -> Path | None:
    log("Ollama not found — attempting install...")
    if sys.platform == "win32":
        if shutil.which("winget"):
            subprocess.run(
                [
                    "winget",
                    "install",
                    "-e",
                    "--id",
                    "Ollama.Ollama",
                    "--accept-package-agreements",
                    "--accept-source-agreements",
                ],
                check=False,
            )
            return find_ollama_bin()
        log("Install Ollama manually from https://ollama.com/download/windows")
        return None

    if shutil.which("curl"):
        log("Running Ollama install script (may ask for sudo)...")
        subprocess.run(
            ["bash", "-c", "curl -fsSL https://ollama.com/install.sh | sh"],
            check=False,
        )
        return find_ollama_bin()

    log("Install Ollama manually: https://ollama.com/download/linux")
    return None


def ollama_api_up() -> bool:
    return http_ok(f"{OLLAMA_URL}/api/tags")


def start_ollama_serve(ollama_bin: Path) -> bool:
    if ollama_api_up():
        return False
    log("Starting Ollama...")
    kwargs: dict = {
        "cwd": ROOT,
        "stdout": subprocess.DEVNULL,
        "stderr": subprocess.DEVNULL,
    }
    if sys.platform == "win32":
        kwargs["creationflags"] = subprocess.CREATE_NO_WINDOW  # type: ignore[attr-defined]
    else:
        kwargs["start_new_session"] = True
    STATE.ollama_proc = subprocess.Popen([str(ollama_bin), "serve"], **kwargs)
    STATE.ollama_we_started = True
    for _ in range(40):
        if ollama_api_up():
            log("Ollama is online.")
            return True
        time.sleep(0.5)
    raise RuntimeError("Ollama did not start in time. Try running: ollama serve")


def ensure_ollama_model(ollama_bin: Path) -> None:
    if not ollama_api_up():
        raise RuntimeError("Ollama API is not reachable.")
    try:
        with urllib.request.urlopen(f"{OLLAMA_URL}/api/tags", timeout=5) as resp:
            data = json.loads(resp.read().decode())
            names = {m.get("name", "") for m in data.get("models", [])}
            base = DEFAULT_MODEL.split(":")[0]
            if DEFAULT_MODEL in names or any(
                n == DEFAULT_MODEL or n.startswith(f"{base}:") for n in names
            ):
                log(f"Neural shard ready ({DEFAULT_MODEL}).")
                return
    except (urllib.error.URLError, TimeoutError, OSError, json.JSONDecodeError):
        pass

    log(f"Downloading prophet core ({DEFAULT_MODEL}) — first run can take a few minutes...")
    subprocess.check_call([str(ollama_bin), "pull", DEFAULT_MODEL], cwd=ROOT)


def ensure_ollama() -> Path:
    ollama_bin = find_ollama_bin()
    if not ollama_bin:
        ollama_bin = install_ollama()
    if not ollama_bin:
        raise RuntimeError("Ollama is required. Install from https://ollama.com and re-run.")
    start_ollama_serve(ollama_bin)
    ensure_ollama_model(ollama_bin)
    return ollama_bin


def searxng_up() -> bool:
    return http_ok(f"{SEARXNG_URL}/search?q=test&format=json")


def ensure_searxng() -> None:
    if os.getenv("SEARXNG_URL", "1") == "":
        log("SearXNG disabled by SEARXNG_URL=.")
        return
    if searxng_up():
        log("Forbidden index relay already online.")
        return
    if not shutil.which("docker"):
        log("Docker not found — query ghost line skipped (scraper fallback only).")
        return
    compose = ROOT / "docker-compose.yml"
    if not compose.is_file():
        return
    log("Starting forbidden index relay via Docker...")
    subprocess.run(
        ["docker", "compose", "up", "-d", "searxng"],
        cwd=ROOT,
        check=False,
    )
    STATE.searxng_we_started = True
    for _ in range(30):
        if searxng_up():
            log("Forbidden index relay online.")
            return
        time.sleep(1)
    log("Index relay slow or offline — scraper fallback will be used.")


def wait_for_app(timeout: float = 45.0) -> bool:
    deadline = time.time() + timeout
    while time.time() < deadline:
        if http_ok(f"{APP_URL}api/health"):
            return True
        time.sleep(0.4)
    return False


def open_app_window() -> None:
    log(f"Opening {APP_URL}")
    webbrowser.open(APP_URL)


def main() -> int:
    register_cleanup_handlers()
    os.chdir(ROOT)
    log("Awakening resistance node...")
    exit_code = 0
    try:
        py = ensure_python_deps()
        ensure_ollama()
        ensure_searxng()

        log(f"Starting SchizoBot on {APP_URL}")
        env = os.environ.copy()
        env.setdefault("SCHIZOBOT_MODEL", DEFAULT_MODEL)
        env["SCHIZOBOT_MANAGED_LAUNCH"] = "1"
        STATE.uvicorn_proc = subprocess.Popen(
            [str(py), "-m", "uvicorn", "app:app", "--host", HOST, "--port", str(PORT)],
            cwd=ROOT,
            env=env,
        )

        if wait_for_app():
            open_app_window()
        else:
            log("Server is slow — open the URL manually if the browser did not launch.")
            open_app_window()
        log("Press Ctrl+C to shut down SchizoBot (or close the browser tab).")
        exit_code = STATE.uvicorn_proc.wait()
    except KeyboardInterrupt:
        log("Shutting down...")
        exit_code = 0
    except Exception as exc:
        log(f"Setup failed: {exc}")
        exit_code = 1
    finally:
        cleanup_services()
    return exit_code


if __name__ == "__main__":
    if sys.version_info < (3, 10):
        print("[SchizoBot] Python 3.10+ is required.", file=sys.stderr)
        raise SystemExit(1)
    raise SystemExit(main())
