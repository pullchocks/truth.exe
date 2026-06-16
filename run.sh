#!/usr/bin/env bash
# Dev server with auto-reload (requires existing venv + deps)
cd "$(dirname "$0")"
if [ ! -d .venv ]; then
  python3 launch.py
  exit $?
fi
# shellcheck disable=SC1091
source .venv/bin/activate
exec uvicorn app:app --host 0.0.0.0 --port "${PORT:-8765}" --reload
