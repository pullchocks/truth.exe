#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

if ! command -v python3 >/dev/null 2>&1; then
  echo "[SchizoBot] Python 3 not found."
  echo "Install Python 3.10+ or run: sudo apt install python3 python3-venv"
  exit 1
fi

exec python3 launch.py "$@"
