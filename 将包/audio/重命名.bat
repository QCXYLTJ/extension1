@echo off
setlocal enabledelayedexpansion
for %%i in (*__*) do (
    set "filename=%%~ni"
    set "newname=!filename:__=_!"
    ren "%%i" "!newname!%%~xi"
)
echo 文件名更改完成!
pause