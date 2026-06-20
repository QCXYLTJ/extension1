@echo off
setlocal enabledelayedexpansion
for %%i in (*DIY*) do (
    set "filename=%%~ni"
    set "newname=!filename:DIY=D!"
    ren "%%i" "!newname!%%~xi"
)
echo 文件名更改完成!
pause