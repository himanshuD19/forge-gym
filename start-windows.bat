@echo off
cd /d "%~dp0"
echo Starting FORGE Gym demo at http://localhost:5500
 echo Open http://localhost:5500 in your browser.
 echo Press Ctrl+C to stop.
py -3 -m http.server 5500
pause
