:: 遍历当前目录及其子目录中的所有 .mp4 文件
setlocal enabledelayedexpansion
for /r %%f in (*.mp4) do (
    ffmpeg -i "%%f" ^
    -c:v libx264 -profile:v high -pix_fmt yuv420p -preset slow -crf 28 ^
    -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ^
    -c:a aac -b:a 64k ^
    -movflags +faststart ^
    "%%~dpnf_temp.mp4" -y
    move /y "%%~dpnf_temp.mp4" "%%f"
)