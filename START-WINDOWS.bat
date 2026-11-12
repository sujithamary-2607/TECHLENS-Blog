@echo off
set ROOT=%~dp0
if not exist "%ROOT%server\.env" copy "%ROOT%server\.env.example" "%ROOT%server\.env"
if not exist "%ROOT%client\.env" copy "%ROOT%client\.env.example" "%ROOT%client\.env"
start "TECH LENS API" cmd /k "cd /d %ROOT%server && npm install && if not exist .seeded-v2 (npm run seed && echo done>.seeded-v2) && npm run dev"
timeout /t 3 >nul
start "TECH LENS Web" cmd /k "cd /d %ROOT%client && npm install && npm run dev"
echo MongoDB must be running before starting the app.
echo This build uses API port 5055. If you have an old server on 5000, it will not be used.
echo First launch seeds 12 sample articles and creates the admin login.
echo Open http://localhost:5173 when Vite is ready.
pause
