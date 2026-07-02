"use strict";
window.zyile_import = function (lib, game, ui, get, ai, _status, config) {
    "use strict";
    window.zyile_extension_Menu.import = {
        zyile_BD_extension: {
            name: '导入本地扩展',
            clear: true,
            intro: '检索本地的扩展文件并将未在游戏里面导入的扩展显示出来',
            onclick() {
                var url = 'extension', NoImportList = [], ImportList = [], NoExtension = [], page,
                    zyile_syscn_layer = lib.zyile_layer.load();
                game.getFileList(url, function (folders, files) {
                    folders.removeArray(lib.config.all.plays);
                    var NextFile = function (i) {
                        game.hasDirectory(url + '/' + i + '/extension.js', data => {
                            lib.config.extensions.includes(i) ? ImportList.add(i) : NoImportList.add(i);
                            folders.length > 0 ? NextFile(folders.shift()) : (
                                createExtensionButton(ImportList, true, true),
                                createExtensionButton(NoImportList, false, true),
                                createExtensionButton(NoExtension, false),
                                ui.create.zyile_node('span.pagination-info', ui.create.div('.pull-left.pagination-detail', page), '共检索到  ' + (ImportList.length + NoImportList.length + NoExtension.length) + "  个文件夹,共导入  " + ImportList.length + "  个扩展,未导入  " + NoImportList.length + "  个扩展,  " + NoExtension.length + " 个非扩展(缺少extension.js文件) "),
                                zyile_syscn_layer.remove()
                            );
                        }, onerror => {
                            NoExtension.add(i);
                            folders.length > 0 ? NextFile(folders.shift()) : (console.log("已导入:" + ImportList, '\n', "未导入:" + NoImportList, '\n', "非扩展(缺少extension.js文件):" + NoExtension), zyile_syscn_layer.remove());
                        });
                    };
                    folders.length > 0 ? NextFile(folders.shift()) : (zyile_syscn_layer.remove(), lib.zyile_layer.msg("无文件"));
                });
                ui.arena.classList.add('zyile_hidden');
                ui.system.classList.add('zyile_hidden');
                ui.system2.classList.add('zyile_hidden');
                ui.menuContainer.classList.add('zyile_hidden');
                var zyile_menu = _status.zyile_open_Menu_div;
                zyile_menu && (zyile_menu.style.display = "none");
                var openImExt = ui.create.div({
                    width: '100%',
                    height: 'calc(90%)',
                    'z-index': 11,
                    position: 'relative',
                }),
                    fuzhune = ui.create.div('div', openImExt, {
                        position: 'relative',
                        width: '100%',
                        display: 'flex',
                        marginBottom: '5px',
                    }),
                    system2 = ui.create.div(openImExt, {
                        width: '100%',
                        position: 'relative',
                        display: 'block',
                    }),
                    sousuo,
                    keyFn = function (event) {
                        event.stopPropagation();
                        if (event.keyCode === 13) fuzhune.input.blur(), sousuo.click();
                    },
                    div1 = ui.create.div(openImExt, {
                        width: '100%',
                        height: 'calc(80%)',
                        position: 'relative',
                        'overflow-x': 'auto',
                        display: 'block',
                    }), table1 = ui.create.node('table.zyile_table.zyile_table_tr', system2),
                    table = ui.create.node('table.zyile_table', div1), tr;
                lib.setScroll(div1);
                ui.create.zyile_node('span', {
                    paddingTop: '4px'
                }, '扩展名称:', fuzhune);
                fuzhune.input = ui.create.zyile_node('input.layui-layer-input', { width: 'auto' }, fuzhune);
                fuzhune.input.onfocus = function () {
                    window.addEventListener('keydown', keyFn, true);
                };
                fuzhune.input.onblur = function (event) {
                    window.removeEventListener('keydown', keyFn, true);
                };
                sousuo = ui.create.zyile_node('a.btn.btn-primary.btn-rounded.btn-sm', fuzhune, '搜索');
                fuzhune.input.oninput = function () {
                    let listx = [];
                    let TableInput = Array.from(table.querySelectorAll('tr'));
                    let value = fuzhune.input.value;
                    for (let i of TableInput) {
                        let link = i.link;
                        let pinyin = window.zyile_Pinyin.getFullChars(link);
                        if (typeof link === "string" && (link.indexOf(value) !== -1 || pinyin.indexOf(value.toLocaleLowerCase()) !== -1)) listx.push(i.link);
                    }
                    RefreshTable(ImportList.concat(NoImportList).concat(NoExtension), true);
                    RefreshTable(listx, false);
                };
                sousuo.addEventListener('click', function () {
                    let listx = [];
                    let TableInput = Array.from(table.querySelectorAll('tr'));
                    let value = fuzhune.input.value;
                    for (let i of TableInput) {
                        let link = i.link;
                        let pinyin = window.zyile_Pinyin.getFullChars(link);
                        if (typeof link === "string" && (link.indexOf(value) !== -1 || pinyin.indexOf(value.toLocaleLowerCase()) !== -1)) listx.push(i.link);
                    }
                    RefreshTable(ImportList.concat(NoImportList).concat(NoExtension), true);
                    RefreshTable(listx, false);
                    lib.zyile_layer.msg("搜索完毕", { icon: 1, time: 1e3 });
                });
                ui.create.zyile_node('a.btn.btn-warning.btn-rounded.btn-sm', fuzhune, '重置').addEventListener('click', function () {
                    RefreshTable(ImportList, false),
                        RefreshTable(NoImportList, false),
                        RefreshTable(NoExtension, false);
                    for (var i of Array.from(document.querySelector('.pagination.pagination-outline li'))) {
                        i.classList.remove('active');
                    }
                    fuzhune.input.value = '';
                    lib.zyile_layer.msg("重置完毕", { icon: 1, time: 1e3 });
                });
                ui.create.zyile_node('a.btn.btn-info.btn-rounded.btn-sm', fuzhune, '反选').addEventListener('click', function () {
                    QXFX("extension");
                });
                tr = ui.create.node(table1, 'tr');
                var QXFX = function (subtype, bool) {
                    var TableInput = Array.from(table.querySelectorAll('tr'));
                    for (var i of TableInput) {
                        var InputList = Array.from(i.querySelectorAll('input'));
                        InputList.forEach(function (item, index, array) {
                            if (i.classList.contains("zyile_hidden") || item.getAttribute('disabled')) return;
                            if (item.getAttribute("subtype") == subtype) {
                                if (bool) {
                                    item.checked = true;
                                } else {
                                    if (item.checked == true) {
                                        item.checked = false;
                                    } else {
                                        item.checked = true;
                                    }
                                }
                                item.onclick && item.onclick();
                            }
                        });
                    }
                };
                tr = ui.create.node(table1, 'tr');
                let input;
                input = ui.create.zyile_node('input');
                input.type = "checkbox";
                input.addEventListener('click', function (event) {
                    QXFX("extension", this.checked);
                    QXFX("enable", this.checked);
                });
                ui.create.node('td', tr).appendChild(input);
                ui.create.node('td.zyile_table_td', tr, '扩展名');
                ui.create.node('td.zyile_table_td', tr, '是否扩展');
                input = ui.create.zyile_node('input');
                input.type = "checkbox";
                input.addEventListener('click', function (event) {
                    QXFX("enable", this.checked);
                });
                ui.create.node('td.zyile_table_td', tr, '是否开启').appendChild(input);
                ui.create.node('td.zyile_table_td', tr, '操作');
                var RefreshTable = function (list, bool) {
                    var trList = Array.from(table.querySelectorAll('tr'));
                    for (var i of trList) {
                        if (list.includes(i.link)) {
                            i.classList.toggle('zyile_hidden', bool);
                        }
                    }
                };
                function createExtensionButton(list, isImp, isExt) {
                    for (var i of list) {
                        tr = ui.create.node('tr', table);
                        tr.link = i;
                        var input = ui.create.zyile_node('input');
                        input.setAttribute('type', 'checkbox');
                        input.setAttribute('ExtName', i);
                        input.setAttribute('subtype', "extension");
                        isExt == true ? null : input.setAttribute('disabled', 'disabled');
                        input.tr = tr;
                        if (isImp) input.setAttribute('checked', true), input.tr.classList.add('zyile_table_selected');
                        input.onclick = function () {
                            if (this.checked) {
                                this.tr.classList.add('zyile_table_selected');
                            } else this.tr.classList.remove('zyile_table_selected');
                        };
                        ui.create.node('td', tr).appendChild(input);
                        ui.create.node('td', i, tr);
                        ui.create.node('td', tr, isExt == true ? "<span class='badge badge-primary'>是扩展</span>" : "<span class='badge badge-danger'>不是扩展</span>");
                        ui.create.node('td', tr, '<input type=checkbox ExtName=' + i + ' subtype="enable" ' + (lib.config['extension_' + i + '_enable'] == true ? 'checked=true' : '') + (isExt ? '' : 'disabled=disabled') + '>');
                        var Delete = ui.create.node('td', '<a class="zyile_import_xs danger"><b>X</b>删除</a>', tr);
                        Delete.link = i;
                        Delete.tr = tr;
                        Delete.addEventListener('click', function () {
                            var node = this;
                            lib.zyile_layer.confirm("确认删除【" + node.link + "】？(此操作无法撤销!)", function () {
                                game.removeExtension(node.link);
                                node.tr.remove();
                                lib.zyile_layer.msg("删除完毕", { icon: 1, item: 12e2 });
                            });
                        }, true);
                    }
                    ;
                };
                page = ui.create.div('.fixed-table-pagination', openImExt);
                let pullRight = ui.create.div('.pull-right.pagination', page),
                    pullRightUlLi = ['已导入', '未导入', '非扩展',];
                var pullRightUl = ui.create.zyile_node('ul.pagination.pagination-outline', pullRight);
                for (let i of pullRightUlLi) {
                    let li = ui.create.zyile_node('li.page-item', pullRightUl);
                    let a = ui.create.zyile_node('a.page-link', i, li);
                    a.link = i;
                    a.onclick = function (event) {
                        if (this.parentElement.classList.contains('active'))
                            return RefreshTable(ImportList.concat(NoImportList).concat(NoExtension), false),
                                this.parentElement.classList.remove('active');
                        var preEl = Array.from(this.parentElement.parentElement.querySelectorAll('li'));
                        for (var i of preEl) i.classList.remove('active');
                        this.parentElement.classList.add('active');
                        switch (this.link) {
                            case '已导入':
                                RefreshTable(ImportList, false);
                                RefreshTable(NoImportList, true);
                                RefreshTable(NoExtension, true);
                                break;
                            case '未导入':
                                RefreshTable(ImportList, true);
                                RefreshTable(NoImportList, false);
                                RefreshTable(NoExtension, true);
                                break;
                            case '非扩展':
                                RefreshTable(ImportList, true);
                                RefreshTable(NoImportList, true);
                                RefreshTable(NoExtension, false);
                                break;
                        }
                    };
                }
                let layerFull = lib.zyile_layer.openFull(openImExt, {
                    title: "导入extension扩展",
                    icon: -1,
                    yes(layer) {
                        var TableTr = Array.from(table.querySelectorAll('tr')),
                            extensions = [], addExt = [], remExt = [];
                        var _enable = {};
                        for (var i of TableTr) {
                            var InputList = Array.from(i.querySelectorAll('input'));
                            for (var e of InputList) {
                                if (e.checked == true && e.getAttribute('subtype') == 'extension') {
                                    extensions.add(i.link);
                                }
                                //是否开启
                                e.getAttribute('subtype') == 'enable' && (_enable['extension_' + i.link + '_enable'] = e.checked);
                            }
                        }
                        layer.close();
                        extensions.forEach((val, i, arr) => {
                            if (!lib.config.extensions.includes(val)) addExt.add(val);
                        });
                        remExt = lib.config.extensions.slice(0).removeArray(extensions);
                        lib.zyile_layer.confirm("注:每次都是清空扩展重新导入选定扩展<br>新增<span style='color:blue'>:" + addExt.join('、') + '</span><br>移除:<span style="color:red">' + remExt.join('、') + "</span><br>总共导入:<span style='color:magenta'>" + extensions.join("、") + "</span>",
                            function (layerX) {
                                layerX.close();
                                game.saveConfig('extensions', extensions);
                                for (var i in _enable) game.saveConfig(i, _enable[i]);
                                lib.zyile_layer.msg('重启即可加载', {
                                    icon: 1,
                                    protype: 2,
                                });
                            }, {
                            minHeight: '40%',
                            minWidth: '40%',
                        });
                    },
                    end() {
                        ui.arena.classList.remove('zyile_hidden');
                        ui.system.classList.remove('zyile_hidden');
                        ui.system2.classList.remove('zyile_hidden');
                        ui.menuContainer.classList.remove('zyile_hidden');
                        zyile_syscn_layer.remove();
                        var zyile_menu = _status.zyile_open_Menu_div;
                        zyile_menu && (zyile_menu.style.display = "");
                    },
                }, '', 512);
                layerFull.content.appendChild(zyile_syscn_layer);
                layerFull.content.appendChild(zyile_syscn_layer.parent);
                zyile_syscn_layer.style.position = "absolute";
                zyile_syscn_layer.parent.style.position = "absolute";
            },
        },
        info: '扩展导入',
        zyile_TX_Zip_extensions: {
            name: '指定路径',
            clear: true,
            intro: '导入指定路径的zip文件.<br><span style="color: rgb(204 255 0)">手机上的无名杀无法读取QQ下载的文件</span>,所以建议把下载的文件放入<无名杀根目录>的files里面,将路径配置为files即可.<br>电脑可正常读取,只需要<span style="color: rgb(204 255 0)">把路径配置为QQ下载文件的路径</span>即可',
            onclick() {
                get.zip(function () {
                    let Imporclick = function () {
                        var files = [], folders = [], finishLoading = false,
                            dir = game.getExtensionConfig('概念武将', 'zyile_import_URL') || '无路径', page,
                            extObj = {}, NoImportList = [], ImportList = [], NoExtension = [];
                        if (lib.zyile_common.isMobile() && ![].includes) {
                            //同步加载文件
                            var zyile_syscn_layer = lib.zyile_layer.load(),
                                callback = function callback(folders, files) {
                                    if (finishLoading) return void 0;
                                    if (files.length === 0) {
                                        zyile_syscn_layer.remove();
                                        lib.zyile_layer.msg("无扩展", {
                                            icon: 2,
                                            protype: 4
                                        });
                                        return void 0;
                                    }
                                    for (var i of files.slice(0)) {
                                        if (!/\.zip$/i.test(i)) files.remove(i);
                                    }
                                    get.zip(function () {
                                        var fn = function () {
                                            createExtensionButton(ImportList, true, true),
                                                createExtensionButton(NoImportList, false, true),
                                                createExtensionButton(NoExtension, false),
                                                zyile_syscn_layer.close();
                                        };
                                        var NextFile = function (i) {
                                            if (finishLoading) return void 0;
                                            var impFn = function (zip, data) {
                                                if (finishLoading) return void 0;
                                                try {
                                                    zip.load(data);
                                                    var file = new File([data], dir + '/' + i);
                                                    if (lib.zyile_common.isMobile()) zip.size = file.name[0].byteLength;
                                                    else zip.size = file.size;
                                                    extObj[zip.link] = zip;
                                                    var str = zip.file('extension.js').asText();
                                                    if (lib.zyile_common.isEmpty(str)) throw new Error('不是扩展,缺少extension.js文件或者extension.js内的内容为空');
                                                    _status.importingExtension = true;
                                                    window.game = game;
                                                    eval(str);
                                                    _status.importingExtension = false;
                                                    if (!game.importedPack) throw new Error('err');
                                                    var extname = game.importedPack.name, cfg = {};
                                                    zip.config = game.importedPack.config;
                                                    for (var j in lib.extensionMenu) {
                                                        if (j === 'extension_' + extname) {
                                                            let extMenu = lib.extensionMenu[j];
                                                            for (var e in extMenu) {
                                                                cfg[e] = extMenu[e];
                                                            }
                                                        }
                                                    }
                                                    zip.config = cfg;
                                                    if (lib.config.extensions.includes(extname)) ImportList.add(zip.link), ImportList[zip.link] = zip.link;
                                                    else NoImportList.add(zip.link), NoImportList[zip.link] = zip.link;
                                                    extObj[zip.link].extname = extname;
                                                } catch (e) {
                                                    NoExtension.add(zip.link);
                                                    NoExtension[i] = zip.link;
                                                } finally {
                                                    if (!lib.config.dev) delete window.game;
                                                    if (!finishLoading) files.length > 0 ? NextFile(files.shift()) : fn();
                                                }
                                            };
                                            if (lib.zyile_common.isMobile()) {
                                                var onerror = function () {
                                                    console.warn(err);
                                                    if (!finishLoading) files.length > 0 ? NextFile(files.shift()) : fn();
                                                };
                                                window.resolveLocalFileSystemURL(lib.assetURL, function (entry) {
                                                    entry.getFile(dir + '/' + i, {}, function (fileEntry) {
                                                        fileEntry.file(function (fileToLoad) {
                                                            var zip = new JSZip();
                                                            zip.link = fileEntry.name;
                                                            if (fileToLoad && !finishLoading) {
                                                                var fileReader = new FileReader();
                                                                fileReader.onload = function (fileLoadedEvent) {
                                                                    var data = fileLoadedEvent.target.result;
                                                                    impFn(zip, data);
                                                                };
                                                                fileReader.readAsArrayBuffer(fileToLoad, "UTF-8");
                                                            }
                                                        }, onerror);
                                                    }, onerror);
                                                }, function () {
                                                    lib.zyile_layer.msg("无名杀根目录读取错误", { icon: 2, protype: 4 });
                                                });
                                            } else {
                                                lib.node.fs.readFile(dir + '/' + i, null, function (err, data) {
                                                    var zip = new JSZip();
                                                    zip.link = i;
                                                    if (err) {
                                                        console.warn(err);
                                                        files.length > 0 ? NextFile(files.shift()) : fn();
                                                    } else {
                                                        impFn(zip, data);
                                                    }
                                                });
                                            }
                                        };
                                        files.length > 0 ? NextFile(files.shift()) : (zyile_syscn_layer.close(), lib.zyile_layer.msg("无文件"));
                                    });
                                };
                            if (lib.zyile_common.isMobile()) {
                                game.hasDirectory(dir, function () {
                                    game.getFileList(dir, callback);
                                }, function () {
                                    lib.zyile_layer.msg("路径不存在", { icon: 2, protype: 4 });
                                    zyile_syscn_layer.close();
                                });
                            } else {
                                lib.node.fs.readdir(dir, function (err, filelist) {
                                    for (var i = 0; i < filelist.length; i++) {
                                        if (filelist[i][0] != '.' && filelist[i][0] != '_') {
                                            if (lib.node.fs.statSync(dir + '/' + filelist[i]).isDirectory()) {
                                                folders.push(filelist[i]);
                                            } else {
                                                files.push(filelist[i]);
                                            }
                                        }
                                    }
                                    callback(folders, files);
                                });
                            }
                        } else {
                            //异步加载文件
                            var zyile_syscn_layer = lib.zyile_layer.progress(),
                                callback = function callback(folders, files) {
                                    if (finishLoading) return void 0;
                                    for (var i of files.slice(0)) {
                                        if (/\.zip$/i.test(i)) window.setTimeout((file) => {
                                            loadFile(file)
                                        }, 60, i);
                                        else files.remove(i);
                                    }
                                    if (files.length === 0) {
                                        zyile_syscn_layer.remove();
                                        lib.zyile_layer.msg("无扩展", {
                                            icon: 2,
                                            protype: 4
                                        });
                                        return void 0;
                                    }
                                    var loadFile = function loadFile(file) {
                                        if (lib.zyile_common.isMobile()) {
                                            var onerror = function () {
                                                console.warn(err);
                                                fn(file);
                                            };
                                            window.resolveLocalFileSystemURL(lib.assetURL, function (entry) {
                                                entry.getFile(dir + '/' + file, {}, function (fileEntry) {
                                                    fileEntry.file(function (fileToLoad) {
                                                        var zip = new JSZip();
                                                        zip.link = fileEntry.name;
                                                        if (fileToLoad && !finishLoading) {
                                                            var fileReader = new FileReader();
                                                            fileReader.onload = function (fileLoadedEvent) {
                                                                var data = fileLoadedEvent.target.result;
                                                                impFn(zip, data);
                                                            };
                                                            fileReader.readAsArrayBuffer(fileToLoad, "UTF-8");
                                                        }
                                                    }, onerror);
                                                }, onerror);
                                            }, function () {
                                                lib.zyile_layer.msg("无名杀根目录读取错误", { icon: 2, protype: 4 });
                                            });
                                        } else {
                                            lib.node.fs.readFile(dir + '/' + file, null, function (err, data) {
                                                var zip = new JSZip();
                                                zip.link = file;
                                                if (err) {
                                                    console.warn(err);
                                                    fn(zip.link);
                                                } else {
                                                    impFn(zip, data);
                                                }
                                            });
                                        }
                                    }, MaxJd = files.length, Jd = 0, fn = function (fileName) {
                                        files.remove(fileName);
                                        requestAnimationFrame(() => {
                                            Jd = Jd + 100 / MaxJd;
                                            zyile_syscn_layer.pro.style.width = Jd + '%';
                                        });
                                        if (files.length == 0) zyile_syscn_layer.remove(), console.log("已导入扩展:" + ImportList, "未导入:" + NoImportList, "非扩展:" + NoExtension), zyile_syscn_layer.close();
                                    }, impFn = function (zip, data) {
                                        if (finishLoading) return void 0;
                                        try {
                                            zip.load(data);
                                            var i = zip.link, file = new File([data], dir + '/' + i), sliceList = [];
                                            if (lib.zyile_common.isMobile()) zip.size = file.name[0].byteLength;
                                            else zip.size = file.size;
                                            extObj[zip.link] = zip;
                                            var str = zip.file('extension.js').asText();
                                            if (lib.zyile_common.isEmpty(str)) throw new Error('不是扩展,缺少extension.js文件或者extension.js内的内容为空');
                                            _status.importingExtension = true;
                                            window.game = game;
                                            eval(str);
                                            _status.importingExtension = false;
                                            if (!game.importedPack) throw new Error('err');
                                            var extname = game.importedPack.name, cfg = {};
                                            zip.config = game.importedPack.config;
                                            for (var j in lib.extensionMenu) {
                                                if (j === 'extension_' + extname) {
                                                    let extMenu = lib.extensionMenu[j];
                                                    for (var e in extMenu) {
                                                        cfg[e] = extMenu[e];
                                                    }
                                                }
                                            }
                                            zip.config = cfg;
                                            if (lib.config.extensions.includes(extname)) ImportList.add(extname), ImportList[extname] = zip.link, sliceList.add(extname), sliceList[extname] = zip.link, createExtensionButton(sliceList, true, true);
                                            else NoImportList.add(extname), NoImportList[extname] = zip.link, sliceList.add(extname), sliceList[extname] = zip.link, createExtensionButton(sliceList, false, true);
                                        } catch (e) {
                                            console.warn(e);
                                            NoExtension.add(zip.link),
                                                sliceList.add(zip.link),
                                                NoExtension[i] = zip.link,
                                                sliceList[i] = zip.link,
                                                createExtensionButton(sliceList);
                                        } finally {
                                            if (!lib.config.dev) delete window.game;
                                            fn(i);
                                        }
                                    };
                                };
                            zyile_syscn_layer.pro.style.transitionProperty = "none";
                            zyile_syscn_layer.pro.style.width = '0%';
                            if (lib.zyile_common.isMobile()) {
                                game.hasDirectory(dir, function () {
                                    game.getFileList(dir, callback);
                                }, function () {
                                    lib.zyile_layer.msg("路径不存在", { icon: 2, protype: 4 });
                                    zyile_syscn_layer.remove();
                                });
                            } else {
                                lib.node.fs.readdir(dir, function (err, filelist) {
                                    for (var i = 0; i < filelist.length; i++) {
                                        if (filelist[i][0] != '.' && filelist[i][0] != '_') {
                                            if (lib.node.fs.statSync(dir + '/' + filelist[i]).isDirectory()) {
                                                folders.push(filelist[i]);
                                            } else {
                                                files.push(filelist[i]);
                                            }
                                        }
                                    }
                                    callback(folders, files);
                                });
                            }
                        }
                        ui.arena.classList.add('zyile_hidden');
                        ui.system.classList.add('zyile_hidden');
                        ui.system2.classList.add('zyile_hidden');
                        ui.menuContainer.classList.add('zyile_hidden');
                        var zyile_menu = _status.zyile_open_Menu_div;
                        zyile_menu && (zyile_menu.style.display = "none");
                        var openImExt = ui.create.div({
                            width: '100%',
                            height: 'calc(90%)',
                            'z-index': 11,
                            position: 'relative',
                        }),
                            fuzhune = ui.create.div('div', openImExt, {
                                position: 'relative',
                                width: '100%',
                                display: 'flex',
                                marginBottom: '5px',
                            }),
                            system2 = ui.create.div(openImExt, {
                                width: '100%',
                                position: 'relative',
                                display: 'block',
                            }),
                            sousuo,
                            keyFn = function (event) {
                                event.stopPropagation();
                                if (event.keyCode == 13) fuzhune.input.blur(), sousuo.click();
                            },
                            div1 = ui.create.div(openImExt, {
                                width: '100%',
                                height: 'calc(80%)',
                                position: 'relative',
                                'overflow-x': 'auto',
                                display: 'block',
                            }), table1 = ui.create.node('table.zyile_table.zyile_table_tr', system2),
                            table = ui.create.node('table.zyile_table', div1), tr;
                        lib.setScroll(div1);
                        ui.create.zyile_node('span', {
                            paddingTop: '4px'
                        }, '扩展名称:', fuzhune);
                        fuzhune.input = ui.create.zyile_node('input.layui-layer-input', { width: 'auto' }, fuzhune);
                        fuzhune.input.onfocus = function () {
                            window.addEventListener('keydown', keyFn, true);
                        };
                        fuzhune.input.onblur = function (event) {
                            window.removeEventListener('keydown', keyFn, true);
                        };
                        fuzhune.input.oninput = function (event) {
                            let listx = [];
                            let TableInput = Array.from(table.querySelectorAll('tr'));
                            let value = fuzhune.input.value;
                            for (let i of TableInput) {
                                let link = i.link;
                                let pinyin = window.zyile_Pinyin.getFullChars(link);
                                if (typeof link === "string" && (link.indexOf(value) !== -1 || pinyin.indexOf(value.toLocaleLowerCase()) !== -1)) listx.push(i.link);
                            }
                            RefreshTable(ImportList.concat(NoImportList).concat(NoExtension), true);
                            RefreshTable(listx, false);
                        };
                        sousuo = ui.create.zyile_node('a.btn.btn-primary.btn-rounded.btn-sm', fuzhune, '搜索');
                        sousuo.addEventListener('click', function () {
                            var listx = [];
                            var TableInput = Array.from(table.querySelectorAll('tr'));
                            var value = fuzhune.input.value;
                            for (var i of TableInput) {
                                let pinyin = window.zyile_Pinyin.getFullChars(i.extname);
                                if (i.extname.includes(value) || pinyin.indexOf(value.toLocaleLowerCase())) listx.push(i.extname);
                            }
                            RefreshTable(ImportList.concat(NoImportList).concat(NoExtension), true);
                            RefreshTable(listx, false);
                            lib.zyile_layer.msg("搜索完毕", { icon: 1, time: 1e3, protype: 2 });
                        });
                        ui.create.zyile_node('a.btn.btn-warning.btn-rounded.btn-sm', fuzhune, '重置').addEventListener('click', function () {
                            RefreshTable(ImportList, false),
                                RefreshTable(NoImportList, false),
                                RefreshTable(NoExtension, false);
                            for (var i of Array.from(document.querySelectorAll('.pagination.pagination-outline li'))) {
                                i.classList.remove('active');
                            }
                            fuzhune.input.value = '';
                            lib.zyile_layer.msg("重置完毕", { icon: 1, time: 1e3, protype: 2 });
                        });
                        ui.create.zyile_node('a.btn.btn-info.btn-rounded.btn-sm', fuzhune, '反选').addEventListener('click', function () {
                            QXFX("extension");
                        });
                        let AutoDelete = ui.create.zyile_node(ui.create.div(fuzhune, {
                            right: 0,
                            marginTop: '5px'
                        }, '', '导入完毕后自动删除扩展压缩包:'), 'span.#zyile_button_div1', { top: 0 })
                        ui.create.zyile_node('span.#zyile_button_div2', AutoDelete);
                        AutoDelete.enable = false;
                        AutoDelete.onclick = function (e) {
                            e.stopPropagation();
                            AutoDelete.enable = !AutoDelete.enable;
                            this.parentNode.classList.toggle('zyile_menu_skin_on');
                        };
                        tr = ui.create.node(table1, 'tr');
                        var QXFX = function (subtype, bool) {
                            var TableInput = Array.from(table.querySelectorAll('tr'));
                            for (var i of TableInput) {
                                var InputList = Array.from(i.querySelectorAll('input'));
                                for (var j of InputList) {
                                    if (i.classList.contains("zyile_hidden") || j.getAttribute('disabled')) continue;
                                    if (j.getAttribute("subtype") == subtype) {
                                        if (bool) {
                                            j.checked = true
                                        } else {
                                            if (j.checked == true) {
                                                j.checked = false;
                                            } else {
                                                j.checked = true;
                                            }
                                        }
                                        j.onclick && j.onclick();
                                    }
                                }
                            }
                        };
                        tr = ui.create.node(table1, 'tr');
                        let input = ui.create.zyile_node('input');
                        input.type = "checkbox";
                        input.addEventListener('click', function (event) {
                            QXFX("extension", this.checked);
                            QXFX("enable", this.checked);
                        });
                        ui.create.node('td', tr).appendChild(input);
                        ui.create.node('td.zyile_table_td', tr, '扩展名');
                        ui.create.node('td.zyile_table_td', tr, '是否扩展');
                        ui.create.node('td.zyile_table_td', tr, '文件大小');
                        ui.create.node('td.zyile_table_td', tr, '源文件名');
                        ui.create.node('td.zyile_table_td', tr, '操作');
                        var RefreshTable = function (list, bool) {
                            var trList = Array.from(table.querySelectorAll('tr'));
                            for (var i of trList) {
                                if (list.includes(i.link) || list.includes(i.extname)) {
                                    i.classList.toggle('zyile_hidden', bool);
                                }
                            }
                        };
                        //计算文件大小
                        var bytesToSize = function bytesToSize(bytes) {
                            if (bytes === 0 || lib.zyile_common.isEmpty(bytes)) return '0 B';
                            var k = 1024,
                                sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
                                i = Math.floor(Math.log(bytes) / Math.log(k));
                            return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
                        };
                        function createExtensionButton(list, isImp, isExt) {
                            for (var i of list) {
                                let extname = extObj[list[i]].extname || i;
                                tr = ui.create.node('tr', table);
                                tr.extname = extname;
                                tr.link = list[i];
                                var input = ui.create.zyile_node('input');
                                input.setAttribute('type', 'checkbox');
                                input.setAttribute('ExtName', extname);
                                input.setAttribute('subtype', "extension");
                                isExt == true ? null : input.setAttribute('disabled', 'disabled');
                                input.tr = tr;
                                if (isImp) input.setAttribute('checked', true), input.tr.classList.add('zyile_table_selected');
                                input.onclick = function () {
                                    if (this.checked) {
                                        this.tr.classList.add('zyile_table_selected');
                                    } else this.tr.classList.remove('zyile_table_selected');
                                };
                                ui.create.node('td', tr).appendChild(input);
                                //扩展名
                                ui.create.node('td', extname, tr);
                                //是否扩展
                                let ExtTd = ui.create.node('td', tr, isExt == true ? "<span class='badge badge-primary'>是扩展</span>" : "<span class='badge badge-danger'>不是扩展</span>");
                                //文件大小
                                ui.create.node('td', tr, bytesToSize(extObj[list[i]].size));
                                //源文件名
                                ui.create.node('td', tr, list[i]);
                                var cz = ui.create.zyile_node('td', tr);
                                var edit = ui.create.zyile_node('a.zyile_import_xs.success', "配置", cz);
                                edit.config = get.copy(extObj[list[i]].config);
                                edit.extname = extname;
                                "use strict";
                                {
                                    edit.onclick = function () {
                                        let config = this.config, self = this,
                                            Frame = document.createDocumentFragment();
                                        for (var i in config) {
                                            if (config[i].clear) continue;
                                            var node = ui.create.div({
                                                position: 'relative',
                                                width: '100%',
                                                height: '35px',
                                                borderBottom: 'solid #3c8dbc 2px',
                                                display: 'inline-block',
                                            });
                                            node.extname = config[i].name, node.configx = this.config, node.i = i;
                                            node.appendChild(ui.create.zyile_node('span', String(config[i].name) + ":", {
                                                position: 'absolute'
                                            }));
                                            if (config[i].item) {
                                                let select = ui.create.zyile_node('select.layui-layer-select.layui-layer-input', {
                                                    display: 'inline-block',
                                                    width: '50%',
                                                    right: '5px',
                                                    position: 'absolute',
                                                }), initx = true;
                                                select.node = node;
                                                select.onchange = function (e) {
                                                    e.stopPropagation();
                                                    var node = this.node;
                                                    node.configx[node.i].init = this.value;
                                                    node.configx[node.i].initx = this.value;
                                                };
                                                Frame.appendChild(select);
                                                for (var j in config[i].item) {
                                                    var option = ui.create.zyile_node('option');
                                                    option.innerHTML = config[i].item[j];
                                                    option.value = j;
                                                    if (config[i].initx == j) option.selected = 'selected', initx = false;
                                                    if (initx && (i.init == j || lib.config['extension_' + this.extname + '_' + i] == j)) option.selected = 'selected';
                                                    select.appendChild(option);
                                                }
                                                node.appendChild(select);
                                            } else {
                                                ui.create.zyile_node('span.#zyile_button_div2', ui.create.zyile_node(node, 'span.#zyile_button_div1', { top: 0 }));
                                                let initx = true;
                                                if (config[i].hasOwn('initx')) this.classList.toggle('zyile_menu_skin_on', config[i].initx), initx = false;
                                                if (initx && (lib.config['extension_' + this.extname + '_' + i] || config[i].init)) node.classList.add('zyile_menu_skin_on');
                                                node.onclick = function (e) {
                                                    if (this.classList.contains('disabled')) return;
                                                    e.stopPropagation();
                                                    this.classList.toggle('zyile_menu_skin_on');
                                                    this.configx[this.i].init = this.classList.contains('zyile_menu_skin_on');
                                                    this.configx[this.i].initx = this.classList.contains('zyile_menu_skin_on');
                                                };
                                            }
                                            node.oncontextmenu = function () {
                                                var str = config[i].intro || '设置' + this.extname;
                                                if (typeof str == 'function') str = str();
                                                var layer = lib.zyile_layer.tips(str, this, {
                                                    parentLayer: true,
                                                    time: -1,
                                                    tips: 1
                                                });
                                                layer.parent.style.background = "transparent";
                                                layer.parent.style.zIndex = 202101160;
                                                layer.style.zIndex = 202101160;
                                                layer.addEventListener('mouseleave', layer.close);
                                                layer.addEventListener('click', layer.close);
                                            };
                                            lib.setHover(node, node.oncontextmenu);
                                            node.addEventListener('touchstart', function (e) {
                                                if (this._longpresstimeout) {
                                                    clearTimeout(this._longpresstimeout);
                                                }
                                                if (lib.config.longpress_info) {
                                                    this._longpresstimeout = setTimeout(node => {
                                                        node.oncontextmenu()
                                                    }, 1500, this);
                                                }
                                                this._longpressevent = e;
                                                if (_status.longpressing && _status.longpressing != this) {
                                                    ui.click.longpresscancel.call(_status.longpressing);
                                                }
                                                _status.longpressing = this;
                                            }, { passive: true });
                                            node.addEventListener('touchend', ui.click.longpresscancel);
                                            Frame.appendChild(node);
                                        }
                                        lib.zyile_layer.openFull(this.extname + '初始化配置:<br>', {
                                            title: '更改配置',
                                            yes(layer) {
                                                layer.close();
                                                extObj[list[self.extname]].config = self.config;
                                                lib.zyile_layer.msg("更改配置成功", {
                                                    protype: 2,
                                                    time: 1e3,
                                                    icon: 1,
                                                });
                                            },
                                        }, '80%', '80%').content.appendChild(Frame);
                                    };
                                }
                                if (!isExt) {
                                    edit.remove();
                                    let Universal_Import = ui.create.zyile_node('a.zyile_import_xs.btn.btn-warning.btn-rounded.btn-sm', '万能导入', cz);
                                    Universal_Import.extname = extname;
                                    Universal_Import.addEventListener('click', function (event) {
                                        var node = this,
                                            prompt = lib.zyile_layer.prompt({
                                                title: '扩展名称',
                                                value: this.extname,
                                                area: ['425px', '165px'],
                                                resize: !0,
                                            }, function (val, index, input) {
                                                val = lib.zyile_common.trim(val);
                                                node.innerHTML = '导入中';
                                                HTMLDivElement.prototype.css.call(node, {
                                                    cursor: "wait",
                                                    opacity: 0.8,
                                                    backgroundColor: '#f9b66d',
                                                    borderColor: '#f9b66d',
                                                    fontWeight: '800',
                                                    fontSize: '18px'
                                                });
                                                let x = ui.create.zyile_node(node, 'div.zyile_Loading', { zIndex: 9e9 }),
                                                    extname = val || node.extname,
                                                    zip = node.zip,
                                                    finishLoad = function () {
                                                        lib.zyile_layer.msg("导入【" + extname + "】完成", {
                                                            icon: 1,
                                                            protype: 2
                                                        });
                                                        HTMLDivElement.prototype.css.call(node, {
                                                            cursor: "",
                                                            opacity: 1,
                                                            backgroundColor: '',
                                                            borderColor: '',
                                                            fontWeight: '',
                                                            fontSize: ''
                                                        });
                                                        node.innerHTML = "导入完成";
                                                    };
                                                for (var i = 0; i < 12; i++) ui.create.div(x);
                                                //开始导入
                                                var filelist = [], dirs = [];
                                                for (var i in zip.files) {
                                                    if (i[0] != '.' && i[0] != '_') {
                                                        filelist.push(i);
                                                    }
                                                }
                                                for (var i of filelist.slice(0)) {
                                                    if (i.indexOf('.') === -1) {
                                                        dirs.push(i);
                                                        filelist.remove(i);
                                                        if (filelist.length == 0) break;
                                                    }
                                                }
                                                lib.config.extensions.add(extname);
                                                game.saveConfig('extensions', lib.config.extensions);
                                                game.saveExtensionConfig(extname, 'enable', true);
                                                if (!lib.zyile_common.isMobile()) {
                                                    //电脑端
                                                    var makedir = function (src, callback) {
                                                        lib.node.fs.access(src, function (e) {
                                                            if (e && e.code == 'ENOENT') {
                                                                lib.node.fs.mkdir(src, function (e) {
                                                                    typeof callback == 'function' && callback();
                                                                });
                                                            } else
                                                                typeof callback == 'function' && callback();
                                                        });
                                                    };
                                                    var writeFile = function () {
                                                        if (filelist.length) {
                                                            var filename = filelist.shift();
                                                            lib.node.fs.writeFile(__dirname + '/extension/' + extname + '/' + filename, zip.files[filename].asNodeBuffer(), null, writeFile);
                                                        } else {
                                                            finishLoad();
                                                        }
                                                    };
                                                    makedir(__dirname + '/extension/' + extname, function () {
                                                        var recur = function () {
                                                            if (dirs.length) {
                                                                var src = __dirname + '/extension/' + extname + '/' + dirs.shift();
                                                                makedir(src, recur);
                                                            } else {
                                                                writeFile();
                                                            }
                                                        };
                                                        recur();
                                                    });
                                                } else {
                                                    window.resolveLocalFileSystemURL(lib.assetURL, function (entry) {
                                                        var writeFile = function () {
                                                            if (filelist.length) {
                                                                var filename = filelist.shift();
                                                                entry.getFile('extension/' + extname + '/' + filename, {
                                                                    create: true,
                                                                    exclusive: false
                                                                }, function (fileEntry) {
                                                                    fileEntry.createWriter(function (fileWriter) {
                                                                        fileWriter.write(zip.files[filename].asArrayBuffer());
                                                                    });
                                                                });
                                                                window.requestAnimationFrame(writeFile);
                                                            } else
                                                                finishLoad();
                                                        };
                                                        entry.getDirectory('extension/' + extname, { create: true }, function () {
                                                            var recur = function () {
                                                                if (dirs.length) {
                                                                    var url = 'extension/' + extname + '/' + dirs.shift();
                                                                    entry.getDirectory(url, { create: true }, recur, function (err) { });
                                                                } else
                                                                    writeFile();
                                                            };
                                                            recur();
                                                        });
                                                    });
                                                }
                                            });
                                        layerFull.appendChild(prompt);
                                        layerFull.appendChild(prompt.parent);
                                    }, true);
                                    if (extObj[list[i]].file('extension.js') == null) Universal_Import.remove();
                                    else Universal_Import.zip = extObj[list[i]], ExtTd.innerHTML = "<span class='badge badge-warning'>是扩展</span>";
                                }
                                var Delete = ui.create.zyile_node('a.zyile_import_xs.danger', '<b>X</b>删除', cz);
                                Delete.link = extname;
                                Delete.path = list[i];
                                Delete.tr = tr;
                                Delete.addEventListener('click', function () {
                                    var path = this.path,
                                        Dtr = this.tr;
                                    lib.zyile_layer.confirm("确认删除【" + path + "】？(此操作无法撤销)", function () {
                                        if (lib.node && lib.node.fs) {
                                            try {
                                                lib.node.fs.unlink(dir + "/" + path, function (error) {
                                                    if (error) {
                                                        console.warn(error);
                                                        lib.zyile_layer.msg("错误:" + error.toString(), {
                                                            icon: 2,
                                                            time: 12e2,
                                                            protype: 4
                                                        });
                                                        return false;
                                                    }
                                                    lib.zyile_layer.msg("删除完毕", { icon: 1, time: 12e2, protype: 2 });
                                                    Dtr.remove();
                                                });
                                            } catch (e) {
                                                lib.zyile_layer.msg('删除过程中出现错误<br><span style="color:red">' + e.toString() + "</span>", {
                                                    icon: 2,
                                                    time: 12e2,
                                                    protype: 4
                                                });
                                            }
                                        } else {
                                            window.resolveLocalFileSystemURL(lib.assetURL, function (entry) {
                                                entry.getFile(dir + "/" + path, {}, function (fileEntry) {
                                                    fileEntry.remove();
                                                    lib.zyile_layer.msg("删除完毕", { icon: 1, time: 12e2, protype: 2 });
                                                    Dtr.remove();
                                                });
                                            });
                                        }
                                    });
                                }, true);
                            }
                        }
                        page = ui.create.div('.fixed-table-pagination', openImExt);
                        let pullRight = ui.create.div('.pull-right.pagination', page),
                            pullRightUlLi = ['已导入', '未导入', '非扩展',],
                            pullRightUl = ui.create.zyile_node('ul.pagination.pagination-outline', pullRight);
                        for (let i of pullRightUlLi) {
                            let li = ui.create.zyile_node('li.page-item', pullRightUl);
                            let a = ui.create.zyile_node('a.page-link', i, li);
                            a.link = i;
                            a.onclick = function (event) {
                                if (this.parentElement.classList.contains('active'))
                                    return RefreshTable(ImportList.concat(NoImportList).concat(NoExtension), false),
                                        this.parentElement.classList.remove('active');
                                var preEl = Array.from(this.parentElement.parentElement.querySelectorAll('li'));
                                for (var i of preEl) i.classList.remove('active');
                                this.parentElement.classList.add('active');
                                switch (this.link) {
                                    case '已导入':
                                        RefreshTable(ImportList, false);
                                        RefreshTable(NoImportList, true);
                                        RefreshTable(NoExtension, true);
                                        break;
                                    case '未导入':
                                        RefreshTable(ImportList, true);
                                        RefreshTable(NoImportList, false);
                                        RefreshTable(NoExtension, true);
                                        break;
                                    case '非扩展':
                                        RefreshTable(ImportList, true);
                                        RefreshTable(NoImportList, true);
                                        RefreshTable(NoExtension, false);
                                        break;
                                }
                            };
                        }
                        var layerFull = lib.zyile_layer.openFull(openImExt, {
                            title: "指定路径导入zip",
                            icon: -1,
                            yes(layer) {
                                var TableTr = Array.from(table.querySelectorAll('tr')), implExtList = [];
                                for (var i of TableTr) {
                                    var InputList = Array.from(i.querySelectorAll('input'));
                                    for (var e of InputList) {
                                        if (e.checked == true && e.getAttribute('subtype') == 'extension') {
                                            implExtList.push(i.extname);
                                            implExtList[i.extname] = i.link;
                                        }
                                    }
                                }
                                layer.close();
                                setTimeout(function () {
                                    implExtList.length > 0 && lib.zyile_layer.confirm(`${AutoDelete.enable ? `${"警告:你已开启导入完后自动删除源文件".fontcolor('red')}<br>` : ""}<span style='color:red'>注:请勿在导入时刷新或离开游戏,否则将导入失败丢失素材等,后果自负!</span><br/>本次将导入以下扩展:  ${implExtList.join("、")}`,
                                        function (layerX) {
                                            layerX.close();
                                            "use strict"; {
                                                (function implNext(i) {
                                                    var zip = extObj[implExtList[i]];
                                                    if (game.importExtension(zip.generate({ type: 'arraybuffer' }), function () {
                                                        let config = zip.config;
                                                        for (var j in config) {
                                                            if (config && config[j].hasOwn('init')) {
                                                                game.saveConfig('extension_' + i + '_' + j, config[j].init);
                                                            }
                                                        }
                                                        lib.zyile_layer.msg("导入:【" + i + "】完毕", {
                                                            icon: 1,
                                                            time: 1e3,
                                                            protype: 2,
                                                        });
                                                        if (AutoDelete.enable)
                                                            if (lib.node && lib.node.fs) {
                                                                try {
                                                                    lib.node.fs.unlink(dir + "/" + implExtList[i], function (error) {
                                                                        if (error) {
                                                                            console.warn(error);
                                                                            lib.zyile_layer.msg("错误:" + error.toString(), {
                                                                                icon: 2,
                                                                                time: 12e2,
                                                                                protype: 4
                                                                            });
                                                                            return false;
                                                                        }
                                                                        lib.zyile_layer.msg("删除完毕", {
                                                                            icon: 1,
                                                                            time: 12e2,
                                                                            protype: 2
                                                                        });
                                                                    });
                                                                } catch (e) {
                                                                    lib.zyile_layer.msg('删除过程中出现错误<br><span style="color:red">' + e.toString() + "</span>", {
                                                                        icon: 2,
                                                                        time: 12e2,
                                                                        protype: 4
                                                                    });
                                                                }
                                                            } else {
                                                                window.resolveLocalFileSystemURL(lib.assetURL, function (entry) {
                                                                    entry.getFile(dir + "/" + implExtList[i], {}, function (fileEntry) {
                                                                        fileEntry.remove();
                                                                        lib.zyile_layer.msg("删除完毕", {
                                                                            icon: 1,
                                                                            time: 12e2,
                                                                            protype: 2
                                                                        });
                                                                    });
                                                                });
                                                            }
                                                        implExtList.length > 0 ? implNext(implExtList.shift()) : setTimeout(() => lib.zyile_layer.msg("导入完毕", {
                                                            icon: 1,
                                                            time: 25e2,
                                                            protype: 2
                                                        }), 1e3);
                                                    }) == false) {
                                                        lib.zyile_layer.confirm("导入:【" + i + "】失败,是否继续？", function () {
                                                            implExtList.length > 0 ? implNext(implExtList.shift()) : lib.zyile_layer.msg("导入完毕", {
                                                                icon: 1,
                                                                time: 25e2,
                                                                protype: 2
                                                            });
                                                        });
                                                    }
                                                }(implExtList.shift()));
                                            }
                                        }, {
                                        minWidth: '40%',
                                        minHeight: '40%',
                                    });
                                }, 500);
                            },
                            end() {
                                ui.arena.classList.remove('zyile_hidden');
                                ui.system.classList.remove('zyile_hidden');
                                ui.system2.classList.remove('zyile_hidden');
                                ui.menuContainer.classList.remove('zyile_hidden');
                                var zyile_menu = _status.zyile_open_Menu_div;
                                zyile_menu && (zyile_menu.style.display = "");
                                finishLoading = true;
                                zyile_syscn_layer.remove();
                            },
                        }, '', '80%');
                        layerFull.content.appendChild(zyile_syscn_layer);
                        layerFull.content.appendChild(zyile_syscn_layer.parent);
                        zyile_syscn_layer.style.position = "absolute";
                        zyile_syscn_layer.parent.style.position = "absolute";
                    };
                    if (lib.zyile_common.isEmpty(game.getExtensionConfig('概念武将', 'zyile_import_URL'))) return window.zyile_extension_Menu.import.zyile_import_URLx.onclick(Imporclick);
                    Imporclick();
                });
            },
        },
        zyile_import_URLx: {
            name: '配置指定路径:' + (game.getExtensionConfig('概念武将', 'zyile_import_URL') || '请自定义路径'),
            intro: "配置导入指定位置的zip扩展,手机只能读取noname文件夹里面的文件及文件夹<br>自定义时将文件放置无名杀根目录的files里面配置时只需要在框里面填上:files",
            onclick(...args) {
                let callback;
                for (var i of args)
                    if ('function' === typeof i) callback = i;
                var node = this;
                lib.zyile_layer.prompt({
                    title: '配置路径',
                    value: game.getExtensionConfig('概念武将', 'zyile_import_URL'),
                    resize: !0,
                }, function (val, index, input) {
                    if (lib.zyile_common.isMobile()) {
                        game.hasDirectory(val, function () {
                            lib.zyile_layer.msg("配置成功", { icon: 1, protype: 2 }),
                                game.saveExtensionConfig('概念武将', 'zyile_import_URL', val);
                            node.innerHTML = "<a>配置指定路径:" + val;
                            'function' === typeof callback && callback();
                        }, function () {
                            lib.zyile_layer.msg("配置失败,请仔细检查路径", { icon: 2, protype: 4 });
                        });
                    } else {
                        if (lib.node.fs.existsSync(val)) lib.zyile_layer.msg("配置成功", {
                            icon: 1,
                            protype: 2
                        }), game.saveExtensionConfig('概念武将', 'zyile_import_URL', val), (node.innerHTML = "<a>配置指定路径:" + val), 'function' === typeof callback && callback();
                        else lib.zyile_layer.msg("配置失败,请仔细检查路径", { icon: 2, protype: 4 });
                    }
                });
            },
            clear: true,
        },
    };
};
