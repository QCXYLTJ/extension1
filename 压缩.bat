@echo off
for /d %%I in (".\*") do (
    echo 色图杀 英雄外传 果包 boss cardpile coin wuxing 3D精选 欢乐卡牌 玩点论杀 杀海拾遗 拖拽读取 应用配置 全能搜索 .vscode node_modules | findstr /c:"%%~nxI" >nul || (
        rem 直接调用全局7z命令，不再写完整路径
        7z a -tzip "%%~nxI.zip" "%%I\*" -mx9
    )
)
pause