@echo off
REM XO Game - Quick Start Script for Windows
REM This script helps you get started with the XO Game quickly

echo.
echo ========================================
echo    XO Game - Quick Start
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo [OK] Node.js is installed
node -v
echo [OK] npm is installed
call npm -v
echo.

REM Install dependencies if node_modules doesn't exist
if not exist "node_modules\" (
    echo Installing dependencies...
    call npm install
    echo.
)

REM Ask user what they want to do
echo What would you like to do?
echo.
echo 1) Start development server
echo 2) Build for production
echo 3) Preview production build
echo 4) Deploy to GitHub Pages
echo 5) Exit
echo.

set /p choice="Enter your choice (1-5): "

if "%choice%"=="1" goto dev
if "%choice%"=="2" goto build
if "%choice%"=="3" goto preview
if "%choice%"=="4" goto deploy
if "%choice%"=="5" goto end
goto invalid

:dev
echo.
echo Starting development server...
echo The app will open at http://localhost:5173
echo.
call npm run dev
goto end

:build
echo.
echo Building for production...
call npm run build
echo.
echo [SUCCESS] Build complete! Files are in the 'dist' folder.
pause
goto end

:preview
echo.
echo Building and previewing production build...
call npm run build
if %ERRORLEVEL% EQU 0 (
    call npm run preview
)
goto end

:deploy
echo.
echo Deploying to GitHub Pages...
call npm list gh-pages >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Installing gh-pages...
    call npm install --save-dev gh-pages
)
call npm run deploy
pause
goto end

:invalid
echo.
echo Invalid choice. Please run the script again.
pause
goto end

:end
