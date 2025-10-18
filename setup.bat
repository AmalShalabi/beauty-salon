@echo off
echo Installing Beauty Salon Booking App...
echo.

echo Installing dependencies...
call npm install

if %errorlevel% neq 0 (
    echo Error installing dependencies!
    pause
    exit /b 1
)

echo.
echo Installation completed successfully!
echo.
echo To start the development server, run:
echo npm run dev
echo.
echo The app will be available at http://localhost:5173
echo.
pause

