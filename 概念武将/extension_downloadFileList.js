"use strict";
window.zyile_content.push(function (lib, game, ui, get, ai, _status, config) {
    window.zyile_extension_Menu.downloadFileList = {
        info: '资源包',
        downloadFCFileList: {
            name: '下载无名杀全皮肤素材(约2.06GB)',
            clear: true,
            onclick() {
                if (_status.FCFileListLoad) return lib.zyile_layer.alert("请看下方进度条!!!", { icon: 2 })
                if (this.reqested === false) return false;
                if (this.reqested) return alert("请耐心等在请求");
                if (this.download) return alert("请等待下载");
                this.reqested = true
                this.firstChild.innerHTML = "请求中..."
                lib.zyile_layer.confirm(`约2.06GB是否继续？<br>注:下载完毕后将会将${"加载目录".fontcolor('red')}自动切换为${"FC".fontcolor('red')},${"加载方式".fontcolor('red')}改为${"检索".fontcolor('red')}`,
                    layer => {
                        layer.close();
                        xhr({
                            url: `${uri}FC/Files.js`,
                            time: 3e3,
                        }).then(value => {
                            try {
                                window.FCFileList = []
                                window.eval(value);
                                let ReDownloadFile = []
                                let dowLength = 0;
                                let download = (DownloadFile) => {
                                    delete this.reqested
                                    let num1 = DownloadFile.length;
                                    this.download = true;
                                    _status.FCFileListLoad = lib.zyile_layer.progress(1, -1)
                                    _status.FCFileListLoad.pro.css({
                                        width: "100%",
                                        zIndex: -1,
                                        transform: "translateX(-100%)",
                                        borderRadius: '16px',
                                    })
                                    _status.FCFileListLoad.span = ui.create.zyile_node(_status.FCFileListLoad, {
                                        position: 'static',
                                        padding: '0 10px',
                                        color: '#4cff36',
                                    }, 'span', '0/' + num1);
                                    this.firstChild.innerHTML = DownloadFile[0];
                                    let updates = DownloadFile.map(value => {
                                        return uri + value
                                    })
                                    let finished = () => {
                                        if (dowLength < num1) return setTimeout(finished, 300);
                                        if (ReDownloadFile.length > 0) {
                                            download(ReDownloadFile.slice(0))
                                            ReDownloadFile = []
                                            return
                                        }
                                        game.saveExtensionConfig('概念武将', 'zyile_Skin_load', 'retrieval');
                                        game.saveExtensionConfig('概念武将', 'zyile_Skin_src', 'FC');
                                        window.setTimeout(() => {
                                            delete this.download
                                            this.firstChild.innerHTML = '';
                                            lib.config.zyile_extension_Menu_version = window.zyile_extension_Menu_version;
                                            ui.create.zyile_node('span', this.firstChild, '下载完毕,点击重启', function () {
                                                game.reload();
                                            });
                                            this.reqested = false;
                                            _status.FCFileListLoad.remove();
                                            delete _status.FCFileListLoad
                                            lib.zyile_layer.msg("下载完毕");
                                        }, 200);
                                    }
                                    game.multiDownload(updates,
                                        /**下载成功执行的回调函数*/
                                        (length, fileName, fileLocation) => {
                                            fileName = fileName.replace(uri, 'image/')
                                            xhr(fileName).then(value => {
                                                if (value === 'Too Many Requests') ReDownloadFile.add(fileName)
                                                dowLength++
                                                this.firstChild.innerHTML = `${dowLength}/${num1}`
                                                _status.FCFileListLoad.span.innerHTML = `${fileName}\t${dowLength}/${num1}`
                                                _status.FCFileListLoad.pro.style.transform = `translateX(-${100 - dowLength / num1 * 100}%)`
                                            })
                                        }, /**下载失败执行的回调函数*/
                                        (length, fileName, fileLocation) => {
                                            fileName = fileName.replace(uri, 'image/')
                                            ReDownloadFile.add(fileName)
                                            dowLength++;
                                            this.firstChild.innerHTML = `下载失败:${fileName}`
                                        }, /**下载完毕执的回调函数*/
                                        finished, /**更改下载到本地的地址*/
                                        (current) => {
                                            return current.replace(uri, 'image/')
                                        })
                                };
                                let files = window.FCFileList.slice(0)
                                delete window.FCFileList
                                game.ensureDirectory('image/FC', () => {
                                    this.firstChild.innerHTML = "正在检索..."
                                    game.getFileList('image/FC', (a, b) => {
                                        if (!a.length) return download(files);
                                        let num = a.length;
                                        for (let i of a) {
                                            game.getFileList('image/FC/' + i, (c, d) => {
                                                num--
                                                this.firstChild.innerHTML = `检索文件夹${i}`
                                                d = d.map(value1 => {
                                                    return `FC/${i}/${value1}`
                                                })
                                                files.removeArray(d);
                                                if (num === 0) {
                                                    if (files.length === 0) {
                                                        this.firstChild.innerHTML = "下载无名杀全皮肤素材";
                                                        delete this.reqested;
                                                        return alert("素材已经是最新版")
                                                    }
                                                    download(files)
                                                }
                                            })
                                        }
                                    })
                                })
                            } catch (e) {
                                this.firstChild.innerHTML = "下载无名杀全皮肤素材";
                                delete this.reqested;
                                delete window.FCFileList;
                                if (value === 'Too Many Requests') return alert("请求人数过多,请稍后重试!")
                            }
                        }).catch(reason => {
                            this.firstChild.innerHTML = '下载无名杀全皮肤素材'
                            delete this.reqested
                            if (reason.status === 404)
                                lib.zyile_layer.alert("资源文件不存在")
                            else lib.zyile_layer.alert("连接失败")
                        })
                    })
                let uri = "https://zyile.coding.net/p/FCmaterial/d/image/git/raw/master/"
            },
            intro: "<li>需将皮肤加载路径改为FC<li>下载位置:image/FC",
        },
    }
    //---------------------------------   隔离   ---------------------------------//
    for (let i in window.zyile_extension_Menu) {
        for (let j in window.zyile_extension_Menu[i]) {
            let info = window.zyile_extension_Menu[i];
            if (lib.config['extension_概念武将_' + j] === undefined && info[j] && info[j].hasOwnProperty('init')) {
                lib.config['extension_概念武将_' + j] = info[j].init;
                game.saveConfig('extension_概念武将_' + j, lib.config['extension_概念武将_' + j]);
            }
        }
    }
    // -------------------------------------------------------------------------- //
})
/**
 * let download = () => {
        var l = 0
        for (let i in window.FCFileList) {
            game.ensureDirectory('image/FC/' + i, () => {
                l++
                setTimeout(() => {
                    let f = 0
                    for (let j of window.FCFileList[i]) {
                        f++
                        setTimeout(() => {
                            xhr({
                                url: `https://zyile.oss-cn-beijing.aliyuncs.com/FC/${i}/${j}`,
                                data: {
                                    "custom-cache": false,
                                },
                                ReponseType: 'arraybuffer'
                            }).then(value => {
                                game.writeFile(value, 'image/FC/' + i, j, function (e) {
                                    if (e && !lib.zyile_common.isMobile()) return console.warn(`创建失败:image/FC/${i}/${j}`, e)
                                    console.log(`${i}/${j}`)
                                    game.print(`${i}/${j}`);
                                })
                            }).catch(reason => {
                                console.warn(i, j)
                                game.print(`下载失败:${i}/${j} 链接错误嘛:${reason['status']}`);
                            })
                        }, f * 10)
                    }
                }, l * 400);
            })
        }
    }
 *
 * */
