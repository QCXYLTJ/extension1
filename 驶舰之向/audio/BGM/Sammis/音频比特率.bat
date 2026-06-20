@echo off
setlocal EnableDelayedExpansion
:: 设置输出目录
set "OUTPUT_DIR=D:\FFOutput1"
:: 设置音频比特率的最大值
set "MAX_AUDIO_BITRATE=64k"
:: 遍历目录中的所有MP3文件
for %%a in ("*.mp3") do (
    set "INPUT_FILE=%%a"
    set "OUTPUT_FILE=!OUTPUT_DIR!\%%~nxa"
    echo Compressing !INPUT_FILE!
    ffmpeg -i "%%a" -c:a libmp3lame -b:a !MAX_AUDIO_BITRATE! -y "!OUTPUT_FILE!"
)
echo All audios have been compressed.
pause