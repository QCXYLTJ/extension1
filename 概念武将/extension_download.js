'use strict';
window.zyile_import = function (lib, game, ui, get, ai, _status) {
  let bytesToSize = function (bytes) {
    bytes = bytes * 1;
    if (bytes === 0 || !bytes) return '0 B';
    if (bytes === -1) return '已关闭';
    var k = 1024,
      sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
      i = Math.floor(Math.log(bytes) / Math.log(k));
    return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
  };
  window.zyile_extension_Menu.downloadCollapse = {
    info: '防更新崩溃策略',
    downloadCollapseEnable: {
      name: '开启',
      intro: '需要重启',
      init: true,
    },
    autoRecoverOrReDownload: {
      name: '失败策略:',
      item: {
        Recover: '自动回复备份',
        ReDownload: '自动下载失败文件',
        none: '手动选择',
      },
      ItemTag: 'span',
      intro: '下载完毕后如果有下载失败文件将执行某种策略',
      init: 'none',
    },
    downloadSize: {
      name: '限制大小:' + bytesToSize(game.getExtensionConfig('概念武将', 'downloadSize') || 1024 * 8),
      intro: '当下载文件小于原文件的X则会加导回复列表里面(x为玩家设置的大小,默认为8kB)<li>单位1KB=1024B',
      nosave: true,
      clear: true,
      onclick() {
        lib.zyile_layer.prompt(
          {
            fromType: 1,
            title: '提示时常(毫秒)',
            value: game.getExtensionConfig('概念武将', 'downloadSize'),
            success(layer, i) {
              i.setAttribute('type', 'number');
              i.setAttribute('min', -1);
            },
          },
          (value) => {
            game.saveExtensionConfig('概念武将', 'downloadSize', value);
            this.innerHTML = '<a>限制大小:' + bytesToSize(value);
          },
        );
      },
      init: 1024 * 8,
    },
  };
  //---------------------------------   隔离   ---------------------------------//
  for (var i in window.zyile_extension_Menu) {
    for (var j in window.zyile_extension_Menu[i]) {
      var info = window.zyile_extension_Menu[i];
      if (lib.config['extension_概念武将_' + j] === undefined && info[j] && Object.hasOwn(info[j], 'init')) {
        lib.config['extension_概念武将_' + j] = info[j].init;
        game.saveConfig('extension_概念武将_' + j, lib.config['extension_概念武将_' + j]);
      }
    }
  }
  // -------------------------------------------------------------------------- //
  if (!game.getExtensionConfig('概念武将', 'downloadCollapseEnable')) return undefined;
  let downloadCollapse = function () {
    get.zip((zip) => { });
    setTimeout(function uiCommandnode() {
      if (!ui.commandnode) return setTimeout(uiCommandnode, 1e3);
      let link = ui.commandnode.previousElementSibling.previousElementSibling.link;
      let buttons = link.querySelectorAll('button');
      buttons[0].onclick = null;
      buttons[0].addEventListener(
        'click',
        function (forcecheck, dev) {
          if (this.disabled) {
            return;
          } else if (!game.download) {
            alert('此版本不支持游戏内更新,请手动更新');
            return;
          } else {
            this.innerHTML = '正在检查更新';
            this.disabled = true;
            var button1 = this;
            var RecoverFileList = [];
            var goupdate = function (files, update) {
              lib.version = update.version;
              if (update.dev && !lib.config.debug) {
                dev = 'nodev';
              }
              lib.init.req(
                'game/source.js',
                function () {
                  let versionx = lib.version;
                  try {
                    eval(this.responseText);
                    if (!window.noname_source_list) {
                      throw 'err';
                    }
                  } catch (e) {
                    lib.version = versionx;
                    if (this.responseText === 'Too Many Requests') alert('请求人数过多,链接失败,稍后再试或疯狂点更新');
                    else alert('更新地址有误');
                    delete window.noname_source_list;
                    console.warn('检查更新失败:', e);
                    button1.disabled = false;
                    button1.innerHTML = '检查游戏更新';
                    return;
                  }
                  var updates = window.noname_source_list;
                  delete window.noname_source_list;
                  if (Array.isArray(files)) {
                    files.add('game/update.js');
                    var files2 = [];
                    for (var i = 0; i < files.length; i++) {
                      var str = files[i].indexOf('*');
                      if (str != -1) {
                        str = files[i].slice(0, str);
                        files.splice(i--, 1);
                        for (var j = 0; j < updates.length; j++) {
                          if (updates[j].indexOf(str) == 0) {
                            files2.push(updates[j]);
                          }
                        }
                      }
                    }
                    updates = files.concat(files2);
                  }
                  for (var i = 0; i < updates.length; i++) {
                    if (updates[i].indexOf('theme/') === 0 && updates[i].indexOf('.css') === -1) {
                      updates.splice(i--, 1);
                    } else if (updates[i].indexOf('node_modules/') === 0 && !update.node) {
                      updates.splice(i--, 1);
                    }
                  }
                  if (!ui.arena.classList.contains('menupaused')) {
                    ui.click.configMenu();
                    ui.click.menuTab('其它');
                  }
                  let p = button1.parentNode;
                  button1.remove();
                  let span = document.createElement('span');
                  let n1 = 0;
                  let n2 = updates.length;
                  let TooManyRequestsFiles = [];
                  let sizeFiles = [];
                  let fail = 0;
                  span.innerHTML = '正在下载文件(' + n1 + '/' + n2 + ')';
                  p.appendChild(span);
                  var finish = function () {
                    span.innerHTML = '游戏更新完毕(' + n1 + '/' + n2 + ')';
                    p.appendChild(document.createElement('br'));
                    var button = document.createElement('button');
                    button.innerHTML = '重新启动';
                    button.onclick = game.reload;
                    button.style.marginTop = '8px';
                    p.appendChild(button);
                    let l = RecoverFileList.length;
                    if (l === 0) return lib.zyile_layer.msg('无文件下载失败φ(゜▽゜*)♪');
                    let autoRecoverOrReDownload = game.getExtensionConfig('概念武将', 'autoRecoverOrReDownload');
                    if (autoRecoverOrReDownload === 'Recover') {
                      //自动回复 下载失败的文件
                      console.log('要回复的文件:', RecoverFileList);
                      for (let i of RecoverFileList) {
                        let resource = fileMap[i];
                        requestAnimationFrame((item) => {
                          game.writeFile(resource.text, i.slice(0, i.lastIndexOf('/')), resource.name, () => {
                            lib.zyile_layer.msg(`还原文件:${resource.name}`);
                            l--;
                            if (l === 0) lib.zyile_layer.msg(`还原完毕<span onclick="(${game.reload})()">点击重启</span>`);
                          });
                        });
                      }
                    } else if (autoRecoverOrReDownload === 'ReDownload') {
                      //自动下载 下载失败的文件
                      let extensions = RecoverFileList.concat(sizeFiles);
                      //RecoverFileList = []
                      TooManyRequestsFiles = [];
                      sizeFiles = [];
                      loadFile -= extensions.length;
                      n1 += fail;
                      fail = 0;
                      n1 -= extensions.length;
                      p.innerHTML = '';
                      p.appendChild(span);
                      span.innerHTML = '正在下载文件(' + n1 + '/' + n2 + ')';
                      game.print('========');
                      game.print('重新下载文件');
                      multiDownload(extensions);
                    } else {
                      /**
                       * 玩家手动回复
                       */
                      let page,
                        zyile_syscn_layer = lib.zyile_layer.load();
                      /**
                       * 下载好的文件
                       * @type {*[]}
                       */
                      let list = [];
                      for (let i in fileMap) {
                        if (!RecoverFileList.includes(i)) list.add(i);
                      }
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
                          if (event.keyCode == 13) (fuzhune.input.blur(), sousuo.click());
                        },
                        div1 = ui.create.div(openImExt, {
                          width: '100%',
                          height: 'calc(80%)',
                          position: 'relative',
                          'overflow-x': 'auto',
                          display: 'block',
                        }),
                        table1 = ui.create.node('table.zyile_table.zyile_table_tr', system2),
                        table = ui.create.node('table.zyile_table', div1),
                        tr;
                      lib.setScroll(div1);
                      ui.create.zyile_node(
                        'span',
                        {
                          paddingTop: '4px',
                        },
                        '文件名称:',
                        fuzhune,
                      );
                      fuzhune.input = ui.create.zyile_node('input.layui-layer-input', { width: 'auto' }, fuzhune);
                      fuzhune.input.onfocus = function () {
                        window.addEventListener('keydown', keyFn, true);
                      };
                      fuzhune.input.onblur = function (event) {
                        window.removeEventListener('keydown', keyFn, true);
                      };
                      fuzhune.input.oninput = function () {
                        if (this.timeout) clearInterval(this.timeout);
                        this.timeout = setTimeout(() => {
                          let listx = [];
                          let TableInput = Array.from(table.querySelectorAll('tr'));
                          let value = fuzhune.input.value;
                          for (let i of TableInput) {
                            if (i.link && (i.link.includes(value) || i.link.indexOf(get.translation(value + '_character_config')))) listx.push(i.link);
                          }
                          RefreshTable(list.concat(sizeFiles).concat(RecoverFileList), true);
                          RefreshTable(listx, false);
                        }, 300);
                      };
                      sousuo = ui.create.zyile_node('a.btn.btn-primary.btn-rounded.btn-sm', fuzhune, '搜索');
                      sousuo.addEventListener('click', function () {
                        var listx = [];
                        var TableInput = Array.from(table.querySelectorAll('tr'));
                        var value = fuzhune.input.value;
                        for (var i of TableInput) {
                          if (typeof i.link === 'string' && i.link.includes(value)) listx.push(i.link);
                        }
                        RefreshTable(list.concat(sizeFiles).concat(RecoverFileList), true);
                        RefreshTable(listx, false);
                        lib.zyile_layer.msg('搜索完毕', { icon: 1, time: 1e3 });
                      });
                      ui.create.zyile_node('a.btn.btn-warning.btn-rounded.btn-sm', fuzhune, '重置').addEventListener('click', function () {
                        (RefreshTable(list, false), RefreshTable(sizeFiles, false), RefreshTable(RecoverFileList, false));
                        for (var i of Array.from(document.querySelector('.pagination.pagination-outline li'))) {
                          i.classList.remove('active');
                        }
                        fuzhune.input.value = '';
                        lib.zyile_layer.msg('重置完毕', { icon: 1, time: 1e3 });
                      });
                      ui.create.zyile_node('a.btn.btn-info.btn-rounded.btn-sm', fuzhune, '反选').addEventListener('click', function () {
                        QXFX('file');
                      });
                      tr = ui.create.node(table1, 'tr');
                      let QXFX = function (subtype, bool) {
                        let TableInput = Array.from(table.querySelectorAll('tr'));
                        for (let i of TableInput) {
                          let InputList = Array.from(i.querySelectorAll('input'));
                          InputList.forEach(function (item, index, array) {
                            if (i.classList.contains('zyile_hidden') || item.getAttribute('disabled')) return;
                            if (item.getAttribute('subtype') == subtype) {
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
                      input.type = 'checkbox';
                      input.addEventListener('click', function (event) {
                        QXFX('file', this.checked);
                        QXFX('enable', this.checked);
                      });
                      ui.create.node('td', tr).appendChild(input);
                      ui.create.node('td.zyile_table_td', tr, '文件名');
                      ui.create.node('td.zyile_table_td', tr, '是否下载成功');
                      ui.create.node('td.zyile_table_td', tr, '<span style="color: #1ab394;">下载前文件大小</span>');
                      ui.create.node('td.zyile_table_td', tr, '<span style="color: #ed5565">下载后文件大小</span>');
                      var RefreshTable = function (list, bool) {
                        var trList = Array.from(table.querySelectorAll('tr'));
                        for (var i of trList) {
                          if (list.includes(i.link)) {
                            i.classList.toggle('zyile_hidden', bool);
                          }
                        }
                      };
                      function createExtensionButton(list) {
                        for (let i of list) {
                          tr = ui.create.node('tr', table);
                          tr.link = i;
                          let input = ui.create.zyile_node('input');
                          input.setAttribute('type', 'checkbox');
                          input.setAttribute('fileName', i);
                          input.setAttribute('subtype', 'file');
                          input.tr = tr;
                          if (RecoverFileList.includes(i)) (input.setAttribute('checked', true), input.tr.classList.add('zyile_table_selected'));
                          input.onclick = function () {
                            if (this.checked) {
                              this.tr.classList.add('zyile_table_selected');
                            } else this.tr.classList.remove('zyile_table_selected');
                          };
                          ui.create.node('td', tr).appendChild(input);
                          ui.create.node('td', i, tr);
                          ui.create.node('td', tr, RecoverFileList.includes(i) ? "<span class='badge badge-danger'>下载失败</span>" : "<span class='badge badge-primary'>下载成功</span>");
                          ui.create.node('td', tr, bytesToSize(fileMap[i].file.size));
                          ui.create.node('td', tr, bytesToSize(downloadFile[i].size));
                        }
                      }
                      page = ui.create.div('.fixed-table-pagination', openImExt);
                      let pullRight = ui.create.div('.pull-right.pagination', page),
                        pullRightUlLi = ['下载失败', '小于指定大小', '下载成功'];
                      var pullRightUl = ui.create.zyile_node('ul.pagination.pagination-outline', pullRight);
                      for (let i of pullRightUlLi) {
                        let li = ui.create.zyile_node('li.page-item', pullRightUl);
                        let a = ui.create.zyile_node('a.page-link', i, li);
                        a.link = i;
                        a.onclick = function (event) {
                          if (this.parentElement.classList.contains('active')) return (RefreshTable(list.concat(sizeFiles).concat(RecoverFileList), false), this.parentElement.classList.remove('active'));
                          var preEl = Array.from(this.parentElement.parentElement.querySelectorAll('li'));
                          for (var i of preEl) i.classList.remove('active');
                          this.parentElement.classList.add('active');
                          switch (this.link) {
                            case '下载成功':
                              RefreshTable(list, false);
                              RefreshTable(sizeFiles, true);
                              RefreshTable(RecoverFileList, true);
                              break;
                            case '小于指定大小':
                              RefreshTable(list, true);
                              RefreshTable(sizeFiles, false);
                              RefreshTable(RecoverFileList, true);
                              break;
                            case '下载失败':
                              RefreshTable(list, true);
                              RefreshTable(sizeFiles, true);
                              RefreshTable(RecoverFileList, false);
                              break;
                          }
                        };
                      }
                      let layerFull = lib.zyile_layer.openFull(
                        openImExt,
                        {
                          title: '回复下载失败或重新下载文件',
                          icon: -1,
                          btn: ['还原', '取消', '重新下载选中文件'],
                          yes(layer) {
                            let TableTr = Array.from(table.querySelectorAll('tr')),
                              extensions = [];
                            for (let i of TableTr) {
                              let InputList = Array.from(i.querySelectorAll('input'));
                              for (let e of InputList) if (e.checked == true && e.getAttribute('subtype') == 'file') extensions.add(i.link);
                            }
                            console.log('进行回复的文件:', extensions);
                            layer.close();
                            for (let i of extensions) {
                              let resource = fileMap[i];
                              requestAnimationFrame((item) => {
                                game.writeFile(resource.text, i.slice(0, i.lastIndexOf('/')), resource.name, () => {
                                  lib.zyile_layer.msg(`还原文件:${resource.name}`);
                                  l--;
                                  if (l === 0) lib.zyile_layer.msg(`还原完毕<span onclick="(${game.reload})()">点击重启</span>`);
                                });
                              });
                            }
                          },
                          btn2: (layer) => {
                            let TableTr = Array.from(table.querySelectorAll('tr')),
                              extensions = [];
                            for (let i of TableTr) {
                              let InputList = Array.from(i.querySelectorAll('input'));
                              for (let e of InputList) if (e.checked == true && e.getAttribute('subtype') == 'file') extensions.add(i.link);
                            }
                            //RecoverFileList = []
                            TooManyRequestsFiles = [];
                            sizeFiles = [];
                            loadFile -= extensions.length;
                            n1 += fail;
                            fail = 0;
                            n1 -= extensions.length;
                            p.innerHTML = '';
                            p.appendChild(span);
                            span.innerHTML = '正在下载文件(' + n1 + '/' + n2 + ')';
                            game.print('========');
                            game.print('重新下载文件');
                            multiDownload(extensions);
                            layer.close();
                          },
                        },
                        '',
                        512,
                      );
                      createExtensionButton(RecoverFileList);
                      sizeFiles.length && createExtensionButton(sizeFiles);
                      createExtensionButton(list);
                      ui.create.zyile_node('span.pagination-info', ui.create.div('.pull-left.pagination-detail', page), `共检下载  ${RecoverFileList.length + sizeFiles.length + list.length}  个文件,下载失败  ${RecoverFileList.length}  个文件,下载成功  ${list.length} 个文件,小于指定数量  ${sizeFiles.length}  个文件.`);
                      layerFull.content.appendChild(zyile_syscn_layer);
                      layerFull.content.appendChild(zyile_syscn_layer.parent);
                      zyile_syscn_layer.style.position = 'absolute';
                      zyile_syscn_layer.parent.style.position = 'absolute';
                      requestAnimationFrame(zyile_syscn_layer.close);
                    }
                  };
                  /**
                   * 下载
                   */
                  let multiDownload = (downloadFiles) => {
                    game.multiDownload(
                      downloadFiles,
                      function (length, fileName, fileLocation) {
                        n1++;
                        xhr(fileLocation)
                          .then((value) => {
                            if (fileMap[fileLocation]) {
                              let file = new Blob([value], { type: 'text/plain' });
                              downloadFile[fileLocation] = file;
                              loadFile++;
                              let resource = fileMap[fileLocation];
                              if (value === 'Too Many Requests') (RecoverFileList.add(fileLocation), TooManyRequestsFiles.add(fileLocation));
                              else RecoverFileList.remove(fileLocation);
                              let num = game.getExtensionConfig('概念武将', 'downloadSize');
                              if (num !== -1) {
                                if (file.size + num < resource.file.size) {
                                  sizeFiles.add(fileLocation);
                                }
                              }
                            }
                          })
                          .catch((reason) => {
                            RecoverFileList.add(fileLocation);
                            downloadFile[fileLocation] = {
                              text: reason.toString(),
                              size: 0,
                              name: [{ byteLength: 0 }],
                            };
                            loadFile++;
                            console.warn('下载文件失败:', reason);
                          });
                        span.innerHTML = '正在下载文件(' + n1 + '/' + n2 + ')';
                      },
                      function (e, fileName, fileLocation) {
                        console.warn(`下载文件${fileName}出错:`, e.source);
                        RecoverFileList.add(fileLocation);
                        downloadFile[fileLocation] = {
                          size: 0,
                        };
                        loadFile++;
                        fail++;
                        game.print('下载失败:' + e.source, '失败文件:' + fileName);
                        console.warn(`下载${fileName}失败`, e);
                      },
                      function finishx() {
                        if (loadFile !== n2) return setTimeout(finishx, 500);
                        setTimeout(finish, 500);
                      },
                      null,
                      dev,
                    );
                  };
                  let CopyUpdates = updates.slice(0);
                  var fileMap = {};
                  var downloadFile = {};
                  var loadFile = 0;
                  let CopyUpdatesLength = 1;
                  let FinishDownload = true;
                  /**
                   * 提取原文件内容
                   */
                  for (let file of CopyUpdates) {
                    xhr({
                      url: file,
                      timeout: 3e3,
                    })
                      .then((value) => {
                        let filex = new Blob([value], { type: 'text/plain' });
                        fileMap[file] = {
                          file: filex,
                          text: value,
                          name: file.slice(file.lastIndexOf('/') + 1),
                        };
                        CopyUpdatesLength++;
                        if (CopyUpdatesLength >= updates.length && FinishDownload) {
                          FinishDownload = false;
                          multiDownload(updates);
                        }
                      })
                      .catch((err) => {
                        CopyUpdatesLength++;
                        console.warn(err);
                        if (CopyUpdates >= updates.length && FinishDownload) {
                          FinishDownload = false;
                          multiDownload(updates);
                        }
                      });
                  }
                },
                function () {
                  alert('更新地址有误');
                },
                true,
              );
            };
            /**
             * 检查更新
             */
            lib.init.req(
              'game/update.js',
              function () {
                try {
                  eval(this.responseText);
                  if (!window.noname_update) {
                    throw 'err';
                  }
                } catch (e) {
                  alert('更新地址有误');
                  console.warn(e);
                  button1.disabled = false;
                  button1.innerHTML = '检查游戏更新';
                  return;
                }
                var update = window.noname_update;
                delete window.noname_update;
                if (forcecheck === false) {
                  if (update.version === lib.config.check_version) {
                    return;
                  }
                }
                game.saveConfig('check_version', update.version);
                var goon = true;
                if (!dev) {
                  if (update.version.indexOf('beta') !== -1 || update.version === lib.version) {
                    goon = false;
                  }
                }
                if (goon) {
                  var files = null;
                  var version = lib.version;
                  if (Array.isArray(update.dev) && dev) {
                    files = update.dev;
                  } else if (Array.isArray(update.files) && update.update && !dev) {
                    var version1 = version.split('.');
                    var version2 = update.update.split('.');
                    for (var i = 0; i < version1.length && i < version2.length; i++) {
                      if (version2[i] > version1[i]) {
                        files = false;
                        break;
                      } else if (version1[i] > version2[i]) {
                        files = update.files.slice(0);
                        break;
                      }
                    }
                    if (files === null) {
                      if (version1.length >= version2.length) {
                        files = update.files.slice(0);
                      }
                    }
                  }
                  var str;
                  if (dev) {
                    str = '开发版仅供测试使用,可能存在风险,是否确定更新？';
                  } else {
                    str = '有新版本' + update.version + '可用,是否下载？';
                  }
                  if (navigator.notification && navigator.notification.confirm) {
                    let str2 = update.changeLog[0];
                    for (var i = 1; i < update.changeLog.length; i++) {
                      if (update.changeLog[i].indexOf('://') === -1) {
                        str2 += ';' + update.changeLog[i];
                      }
                    }
                    lib.zyile_layer.confirm(str2, () => goupdate(files, update), {
                      title: str,
                      icon: 7,
                      closeBtn: false,
                      keydown: false,
                      end(isYes) {
                        if ('boolean' === typeof isYes && isYes) return;
                        button1.disabled = false;
                        button1.innerHTML = '检查游戏更新';
                      },
                      cancel(layer, index) {
                        layer.close();
                        button1.disabled = false;
                        button1.innerHTML = '检查游戏更新';
                      },
                    });
                  } else {
                    lib.zyile_layer.confirm(str, () => goupdate(files, update), {
                      title: '无名杀在线更新',
                      icon: 7,
                      closeBtn: false,
                      keydown: false,
                      end(isYes) {
                        if ('boolean' === typeof isYes && isYes) return;
                        button1.disabled = false;
                        button1.innerHTML = '检查游戏更新';
                      },
                      cancel(layer, index) {
                        layer.close();
                        button1.disabled = false;
                        button1.innerHTML = '检查游戏更新';
                      },
                    });
                  }
                } else {
                  alert('当前版本已是最新');
                  button1.disabled = false;
                  button1.innerHTML = '检查游戏更新';
                }
              },
              () => {
                alert('连接失败');
                this.disabled = false;
                this.innerHTML = '检查游戏更新';
              },
              true,
            );
          }
        },
        true,
      );
      buttons[2].onclick = null;
      buttons[2].addEventListener(
        'click',
        function (event) {
          event.stopPropagation();
          if (this.disabled) {
            return;
          } else if (game.download) {
            this.innerHTML = '正在检查更新';
            this.disabled = true;
            let that = this;
            lib.init.req(
              'game/asset.js',
              function () {
                try {
                  eval(this.responseText);
                  if (!window.noname_asset_list || !window.noname_skin_list) {
                    throw 'err';
                  }
                } catch (e) {
                  alert('更新地址有误');
                  that.disabled = false;
                  that.innerText = '检查素材更新';
                  console.warn(e);
                  return;
                }
                let updates = window.noname_asset_list;
                delete window.noname_asset_list;
                let skins = window.noname_skin_list;
                delete window.noname_skin_list;
                let asset_version = updates.shift();
                let skipcharacter = [],
                  skipcard = ['tiesuo_mark'];
                if (!lib.config.asset_full) {
                  for (let i = 0; i < lib.config.all.sgscharacters.length; i++) {
                    let pack = lib.characterPack[lib.config.all.sgscharacters[i]];
                    for (var j in pack) {
                      skipcharacter.add(j);
                    }
                  }
                  for (let i = 0; i < lib.config.all.sgscards.length; i++) {
                    let pack = lib.cardPack[lib.config.all.sgscards[i]];
                    if (pack) {
                      skipcard = skipcard.concat(pack);
                    }
                  }
                }
                for (let i = 0; i < updates.length; i++) {
                  switch (updates[i].slice(0, 5)) {
                    case 'image': {
                      if (!lib.config.asset_full) {
                        if (!lib.config.asset_image) {
                          updates.splice(i--, 1);
                        } else {
                          if (updates[i].indexOf('image/character') === 0) {
                            if (updates[i].indexOf('jun_') !== 16 && updates[i].indexOf('gz_') !== 16 && !skipcharacter.includes(updates[i].slice(16, updates[i].lastIndexOf('.')))) {
                              updates.splice(i--, 1);
                            }
                          } else if (updates[i].indexOf('image/card') === 0) {
                            if (updates[i].indexOf('qiaosi_card') !== 11 && !skipcard.includes(updates[i].slice(11, updates[i].lastIndexOf('.')))) {
                              updates.splice(i--, 1);
                            }
                          } else if (updates[i].indexOf('image/mode/stone') === 0) {
                            updates.splice(i--, 1);
                          }
                        }
                      }
                      break;
                    }
                    case 'audio': {
                      if (!lib.config.asset_audio) {
                        updates.splice(i--, 1);
                      }
                      break;
                    }
                    case 'font/': {
                      if (!lib.config.asset_font) {
                        updates.splice(i--, 1);
                      }
                    }
                  }
                }
                if (lib.config.asset_skin) {
                  for (var i in skins) {
                    for (var j = 1; j <= skins[i]; j++) {
                      updates.push('image/skin/' + i + '/' + j + '.jpg');
                    }
                  }
                }
                if (!ui.arena.classList.contains('menupaused')) {
                  ui.click.configMenu();
                  ui.click.menuTab('其它');
                }
                let p = that.parentNode,
                  n1 = 0,
                  n2,
                  flag = true,
                  span = document.createElement('span');
                let proceed = () => {
                  if (updates.length === 0) {
                    game.print(updates);
                    game.saveConfig('asset_version', asset_version);
                    alert('素材已是最新');
                    that.disabled = false;
                    that.innerHTML = '检查素材更新';
                    return;
                  }
                  if (flag) {
                    n2 = updates.length;
                    span.style.whiteSpace = 'nowrap';
                    span.innerHTML = '正在下载素材(' + n1 + '/' + n2 + ')';
                    while (that.nextElementSibling) {
                      that.nextElementSibling.remove();
                    }
                    p.appendChild(span);
                    that.remove();
                    let br6 = ui.create.node('br');
                    let span7 = ui.create.div('.hrefnode', '详细信息');
                    span7.style.marginTop = '6px';
                    span7.listen(ui.click.consoleMenu);
                    p.appendChild(br6);
                    p.appendChild(span7);
                    flag = false;
                  }
                  let finish = function () {
                    if (updates.length !== 0) {
                      span.innerText = '正在下载素材(' + n1 + '/' + n2 + ')';
                      game.print('==========');
                      game.print('重新下载素材');
                      game.checkFileList(updates, proceed);
                      return void 0;
                    }
                    if (n1 === n2) {
                      game.saveConfig('asset_version', asset_version);
                    }
                    span.innerHTML = '素材更新完毕(' + n1 + '/' + n2 + ')';
                    p.appendChild(document.createElement('br'));
                    let button = document.createElement('button');
                    button.innerHTML = '重新启动';
                    button.onclick = game.reload;
                    button.style.marginTop = '8px';
                    p.appendChild(button);
                  };
                  game.multiDownload(
                    updates,
                    function (length, fileName, fileLocation) {
                      n1++;
                      updates.remove(fileName);
                      span.innerHTML = '正在下载素材(' + n1 + '/' + n2 + ')';
                    },
                    function (e, fileName, fileLocation) {
                      game.print('下载失败:' + fileName, '\t路径:' + e.source);
                      console.warn(`下载${fileName}失败`, e);
                    },
                    function () {
                      setTimeout(finish, 500);
                    },
                  );
                };
                game.checkFileList(updates, proceed);
              },
              () => {
                alert('连接失败');
                this.disabled = false;
                this.innerHTML = '检查素材更新';
              },
              true,
            );
          } else {
            alert('此版本不支持游戏内更新素材,请手动更新');
          }
        },
        true,
      );
    }, 3000);
    game.multiDownload2 = function (list, onsuccess, onerror, onfinish, process, dev) {
      list = list.slice(0);
      (function download() {
        if (list.length) {
          let current = list.shift();
          let current2;
          if (typeof process == 'function') {
            current2 = process(current);
          } else {
            current2 = current;
          }
          if (current.indexOf('theme') === 0) {
            game.print(current.slice(6));
          } else if (current.indexOf('image/skin') === 0) {
            game.print(current.slice(11));
          } else {
            game.print(current.slice(current.lastIndexOf('/') + 1));
          }
          game.download(
            current,
            current2,
            function () {
              if (onsuccess) onsuccess(list.length, current /**当前下载的路径*/, current2 /**下载到哪的路径*/);
              download();
            },
            function (e) {
              if (onerror) onerror(e, current /**当前下载的路径*/, current2 /**下载到哪的路径*/);
              download();
            },
            dev,
          );
        } else {
          if (onfinish) onfinish();
        }
      })();
    };
  };
  lib.zyileReadContentLoaded.push(downloadCollapse);
};
/*
window.FCFileList=[];
game.getFileList('image/FC',a=>{
    for(let i of a){
        game.getFileList('image/FC/'+i,(c,d)=>{
            if(!d.length) return "";
            for(let e of d){
                window.FCFileList.push(`FC/${i}/${e}`)
            }
        })
    }
})
window.姜维皮肤包=[];
var bytesToSize = function (bytes) {
    bytes = bytes * 1
    if (bytes === 0 || !bytes) return '0 B';
    if (bytes === -1) return '已关闭'
    var k = 1024,
        sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
    return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
}
game.getFileList('image/姜维皮肤包',a=>{
    for(let i of a){
        game.getFileList('image/姜维皮肤包/'+i,(c,d)=>{
            if(!d.length) return "";
            for(let e of d){
                window.姜维皮肤包.push(`姜维皮肤包/${i}/${e}`);
            }
        })
    }
})
*/
