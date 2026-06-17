#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

log() {
  echo "[SchizoBot] $*"
}

find_python() {
  local candidate
  for candidate in python3 python; do
    if command -v "$candidate" >/dev/null 2>&1 \
      && "$candidate" -c "import sys; raise SystemExit(0 if sys.version_info >= (3, 10) else 1)" 2>/dev/null; then
      command -v "$candidate"
      return 0
    fi
  done
  return 1
}

venv_ready() {
  "$1" -c "import ensurepip" >/dev/null 2>&1
}

install_venv_package() {
  local py=$1
  if ! command -v apt-get >/dev/null 2>&1; then
    return 1
  fi
  local ver
  ver=$("$py" -c 'import sys; print(f"{sys.version_info.major}.{sys.version_info.minor}")')
  local pkg="python${ver}-venv"
  log "Installing ${pkg} (may ask for sudo)..."
  if command -v sudo >/dev/null 2>&1; then
    sudo apt-get update -qq
    sudo apt-get install -y "$pkg" || sudo apt-get install -y python3-venv
  else
    apt-get update -qq
    apt-get install -y "$pkg" || apt-get install -y python3-venv
  fi
}

ensure_venv_support() {
  local py=$1
  if venv_ready "$py"; then
    return 0
  fi
  log "Python venv support missing (common on Ubuntu/Debian)."
  if install_venv_package "$py" && venv_ready "$py"; then
    log "Python venv support ready."
    return 0
  fi
  return 1
}

PY=$(find_python) || {
  log "Python 3.10+ not found."
  if command -v apt-get >/dev/null 2>&1; then
    log "Try: sudo apt install python3 python3-venv"
  elif command -v brew >/dev/null 2>&1; then
    log "Try: brew install python@3.12"
  else
    log "Install Python 3.10+ from https://www.python.org/downloads/"
  fi
  exit 1
}

if ! ensure_venv_support "$PY"; then
  log "Could not enable Python venv."
  if command -v apt-get >/dev/null 2>&1; then
    log "Run: sudo apt install python3-venv"
  else
    log "Install the venv package for your Python version, then re-run ./launch.sh"
  fi
  exit 1
fi

exec "$PY" launch.py "$@"
