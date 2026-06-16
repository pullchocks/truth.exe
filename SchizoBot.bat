@echo off
setlocal EnableExtensions
cd /d "%~dp0"

call :find_python
if defined PY_CMD goto :run

echo [SchizoBot] Python 3.10+ not found.

if where winget >nul 2>nul (
  echo [SchizoBot] Installing Python via winget...
  winget install -e --id Python.Python.3.12 --accept-package-agreements --accept-source-agreements
  echo.
  echo [SchizoBot] Looking for the new Python install...
  call :find_python
  if defined PY_CMD goto :run
  echo [SchizoBot] Python installed but not on PATH yet.
  echo [SchizoBot] Close this window and double-click SchizoBot.bat again.
) else (
  echo [SchizoBot] Install Python 3.10+ from https://www.python.org/downloads/windows/
  echo           Check "Add python.exe to PATH" during setup, then re-run this file.
)

pause
exit /b 1

:run
echo [SchizoBot] Using: %PY_CMD%
"%PY_CMD%" launch.py
if errorlevel 1 pause
exit /b %ERRORLEVEL%

:find_python
set "PY_CMD="

REM Prefer the Windows py launcher (avoids the Microsoft Store python stub).
where py >nul 2>nul && (
  py -3 -c "import sys; raise SystemExit(0 if sys.version_info >= (3, 10) else 1)" >nul 2>nul
  if not errorlevel 1 set "PY_CMD=py -3"
)

if not defined PY_CMD (
  where python >nul 2>nul && (
    python -c "import sys; raise SystemExit(0 if sys.version_info >= (3, 10) else 1)" >nul 2>nul
    if not errorlevel 1 set "PY_CMD=python"
  )
)

REM Fresh winget/python.org installs often land here before PATH updates.
if not defined PY_CMD (
  for %%V in (313 312 311 310) do (
    if exist "%LocalAppData%\Programs\Python\Python%%V\python.exe" (
      set "PY_CMD=%LocalAppData%\Programs\Python\Python%%V\python.exe"
      goto :find_python_done
    )
    if exist "%ProgramFiles%\Python%%V\python.exe" (
      set "PY_CMD=%ProgramFiles%\Python%%V\python.exe"
      goto :find_python_done
    )
  )
)

:find_python_done
exit /b 0
