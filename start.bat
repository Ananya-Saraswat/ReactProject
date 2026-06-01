@echo off
REM React Quiz Application - Windows Quick Start Script

echo ======================================
echo React Quiz Application - Quick Start
echo ======================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo X Node.js is not installed!
    echo Visit: https://nodejs.org/ and install the LTS version
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i

echo [OK] Node.js detected: %NODE_VERSION%
echo [OK] npm detected: %NPM_VERSION%
echo.

echo [INFO] Installing dependencies...
call npm install

if %errorlevel% equ 0 (
    echo [OK] Dependencies installed successfully!
    echo.
    echo [INFO] Starting development server...
    echo The app will open at: http://localhost:5173
    echo.
    call npm run dev
) else (
    echo [ERROR] Failed to install dependencies
    pause
    exit /b 1
)
