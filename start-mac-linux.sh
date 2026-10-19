#!/usr/bin/env sh
set -eu
cd "$(dirname "$0")"
echo "Starting FORGE Gym demo at http://localhost:5500"
echo "Press Ctrl+C to stop."
exec python3 -m http.server 5500
