@echo off
title RiceChain Web3 Server
echo --------------------------------------------------
echo Dang khoi tao Server cho RiceChain...
echo Vui long KHONG tat cua so nay khi dang dung Web.
echo --------------------------------------------------
echo.
echo Thu mo bang Python (Neu may co Python)...
start "" http://localhost:8000
python -m http.server 8000
if %errorlevel% neq 0 (
    echo.
    echo Python khong tim thay, thu mo bang Node.js (npx)...
    start "" http://localhost:8080
    npx http-server -p 8080
)
pause
