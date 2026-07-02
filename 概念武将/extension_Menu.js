'use strict';
window.zyile_content.push(function (lib, game, ui, get, ai, _status, config) {
    let closeback = function (node, callback) {
        while (node.parentElement) {
            node = node.parentElement;
            if (node.classList.contains('layui-layer')) break;
        }
        node.close && node.close();
        if (ui.menuContainer.classList.contains('hidden')) ui.click.configMenu();
        ui.click.menuTab('扩展'), ui.click.extensionTab('概念武将');
        window.requestAnimationFrame(() => {
            setTimeout(function () {
                if (_status.zyile_open_Menu_div) {
                    menu.dispatchEvent(new Event('endDang'));
                }
            }, 500);
            'function' === typeof callback && callback();
        });
    };
    window.zyile_download_plug_in_unit_material = function (node) {
        closeback(node, function () {
            var node = ui.create.div();
            var div = Array.from(document.querySelector('.right.pane').querySelectorAll('span'));
            for (var i of div)
                if (i.innerText.indexOf('素材') > -1) {
                    node = i;
                    break;
                }
            lib.extensionMenu.extension_概念武将.download_plug_in_unit_material.onclick.call(node);
        });
    };
    window.zyile_Menu_YC_TS_Fn = function (node) {
        closeback(node, function () {
            lib.zyile_layer.msg('向下滑点击<插件菜单>', {
                protype: 1,
                time: 25e2,
                icon: 0,
            });
        });
    };
    window.zyile_zyile_layer_msgBtn = function () {
        lib.zyile_layer.msgBtn('新的会话框');
    };
    window.zyile_Ajax_JsonP = function () {
        lib.zyile_layer.openFull(
            `<ul>
				<li>
					//此为百度翻译实例接口<br>
					window.xhr({<br>
						type:'get',<br>
						url:'http://api.fanyi.baidu.com/api/trans/vip/translate',<br>
						jsonp:'callbackName',<br>
						data:{<br>
							q: 'apple',<br>
							appid: 2015063000000001,//(请替换为您的appid)<br>
							salt: 1435660288,<br>
							from: 'en',<br>
							to: 'zh',<br>
							sign: MD5('2015063000000001apple143566028812345678')<br>
						},<br>
						time:5000,<br>
					}).then(value=>console.log(value,value.trans_result[0].src/*原文*/,value.trans_result[0].dst/*译文*/))
				</li>
				<li>参数可以只写路径window.xhr('https://zyile.coding.net/p/noname/d/noname/git/raw/master/concept/update.js')<li/>
				<li>
					type:请求类型
				</li>
				<li>
					url:请求路径
				</li>
				<li>
					jsonp:是否以jsonp跨域请求 设置函数名
				</li>
				<li>
					data:请求参数
				</li>
				<li>
					time:设置超时时间
				</li>
				<li>
					success:function(json){} //请求成功后返回的回调函数
				</li>
				<li>
					error:function(status){} //请求失败后的回调函数
				</li>
				<li>
					返回的是一个Promise,状态为padding类型,可用.then(value=>{}).catche(error=>{}) 来接受
				</li>
			</ul>`,
            {
                title: 'xhr',
            }
        );
    };
    ['', '_before', '_after'].map((value) => {
        let style = document.createElement('style');
        style.innerHTML = `@keyframes span_clip_path${value}{`;
        for (let i = 1; i <= 20; i++) {
            let rand1 = Math.floor(Math.random() * 255),
                rand2 = Math.floor(Math.random() * 255),
                rand3 = Math.floor(Math.random() * 255);
            style.innerHTML += i * 5 + '%{text-shadow: black 0 0 1px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 2px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 5px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 10px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 10px;color: rgb(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ')}';
            //style.innerHTML+=`${i*5}%{color: rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
        }
        style.innerHTML += '}';
        document.head.appendChild(style);
    });
    var VERSION = '10.1',
        menu,
        zyile_CJ_update = false,
        zyile_extension_update = false,
        zyile_CJ,
        zyile_extension,
        zyile_change_updates = {
            10.1: {
                info: ['修复本次加载插件失败问题'],
                character: [],
                card: [],
            },
            '10.0': {
                info: ['使用弹性布局重构布局武将资料详细界面.', '替换<a style="color:blue" href="#" onclick="zyile_download_plug_in_unit_material(this)">武将详细资料素材</a>', '新增PC端自动全屏', '添加扩展导入可以使用拼音检索扩展', '修复bug'],
                character: [],
                card: [],
            },
            9.9: {
                info: ['感谢【<div style="position:relative;animation:span_clip_path 20s infinite;" data-clip-path-att="一条咸鱼"><span>一条咸鱼</span></div>】修复部分bug', '感谢【<div style="position:relative;animation:span_clip_path 20s infinite;" data-clip-path-att="大熊小猫"><span>大熊小猫</span></div>】提供的手杀UI武将详细框素材', '新增手杀武将详细框,需<a style="color:blue" href="#" onclick="zyile_download_plug_in_unit_material(this)">更新素材</a>', '手杀武将详细框支持换肤换音配置', '修复技能有group不会进行换肤换音的bug'],
                character: [],
                card: [],
            },
            9.8: {
                info: ['换肤换音支持derivation(一般为觉醒或者限定添加的技能)', '支持扩展换肤换音', '重构皮肤解锁模式,可实现不同前缀同一货币不同价格', '优化检索扩展皮肤的显示', '换肤换音仅支持文件夹读取,移除原来 以下划线 _id 读取方式'],
                character: [],
                card: [],
            },
            9.7: {
                info: [`感谢 【<div style="position:relative;animation:span_clip_path 20s infinite;" data-clip-path-att="沐言秋辞"><span>沐言秋辞</span></div>】提供部分皮肤素材`, '修复开启换肤换音部分扩展没有判断当前死亡角色是否本扩展人物直接播放死亡音效,且该武将进行了换肤换音会播放N次阵亡语音的bug', '优化 扩展导入->指定路径 扩展导入完后自动删除对应的压缩包', '添加 皮肤->修改方式->按钮 开启了 皮肤->本地修改 对应的文件名进行重命名', '修复 防更新崩溃策略->失败策略->手动选择 若第一次不选择失败文件,第二次将不会进行提示', '添加 防更新崩溃策略 素材 下载失败后自动重新下载', '添加 用户界面->显示滚动条 PE端默认不开启,因为不太好拖拽,可以点击空白处进行移动'],
                character: [],
                card: [],
            },
            9.6: {
                info: ['修复ajax响应时若来源未设置响应头报错', '可在线下载资源包,目前仅<span style="color: red">无名杀全皮肤包</span>', 'bug修复'],
                character: [],
                card: [],
            },
            9.5: {
                info: ['<b>新增<span style="color: #ff0000;">防更新崩溃策略</span></b>', 'bug修复'],
                character: [],
                card: [],
            },
            9.4: {
                info: ['优化显示【整理手牌】显示', '添加换音提示框取消时间', '再再次修复未开始游戏时换身份残留换肤按钮', '修复单按钮非流畅模式下检索不到皮肤bug', '修复多次短时间内进行百度翻译时报错,出现异常码没有解析问题'],
                character: [],
                card: [],
            },
            9.3: {
                info: ['修复无法更新extension', '修复第二次打开输入框时弹窗问题', '修复扩展菜单下载/更新完毕后点击重启弹窗问题'],
                character: [],
                card: [],
            },
            9.2: {
                info: ['修复同一技能不同武将触发不同语音无法进行换肤换音问题  例如:界郭嘉的天妒', '添加菜单可选位置(左侧、右侧、居中)', '封装ajax请求(可跨域)<a href="#" onclick="window.zyile_Ajax_JsonP()">window.xhr</a>', '添加百度翻译API', `添加卡牌${'【魔法之书】'.fontcolor('blue')}开关(关闭后${'【纸上魔法】'.fontcolor('red')}会弹窗报错,无法正常获取魔法之书卡牌)`, `修复武将${'【虚妄之境】'.fontcolor('red')}幻千显示重复武将,${'【纸上魔法】'.fontcolor('red')}显示技能为true`, '修复取消等按钮强制为<img src=extension/概念武将/game_btn_cancel.png alt="请更新素材"/>bug,更换按钮立即生效', '皮肤按钮移动后就会保存位置'],
                character: [],
                card: [],
            },
            9.1: {
                info: ['优化换肤换音提示框', 'bug修复'],
                character: [],
                card: [],
            },
            '9.0': {
                info: ['添加换肤换音提示更改的语音及其路径.'],
                character: [],
                card: [],
            },
            8.9: {
                info: ['会话框新加样式(<a href="#" onclick="window.zyile_zyile_layer_msgBtn()">lib.zyile_layer.msgBtn()</a>)', '修复手机端【拖拽手牌】定位卡牌不准问题', '添加按钮:<img src="extension/概念武将/game_btn_ok.png" style="zoom:.7" alt="btn按钮,下载素材可显示"></img><img src="extension/概念武将/game_btn_cancel.png" style="zoom:.7" alt="btn按钮,下载素材可显示"></img><a style="color: #0000ff" href="#" onclick="zyile_download_plug_in_unit_material(this)">下载插件素材</a>'],
                character: [],
                card: [],
            },
            8.8: {
                info: ['优化渐变换肤(需要<a style="color:blue" href="#" onclick="zyile_download_plug_in_unit_material(this)">下载插件素材</a>,预加载图片)', '手机端弹出输入框时自动隐藏状态栏(layui-prompt)'],
                character: [],
                card: [],
            },
            8.7: {
                info: ['更改猜疑身份按钮的背景图'],
                character: [],
                card: [],
            },
            8.6: {
                info: ['优化扩展导入', '添加【扩展导入】的‘万能导入’用于导入有extensionJS文件,但是某些原因执行报错的扩展(会给该扩展标为非扩展!!!)', '修复1.8版本<指定路径>检索时若扩展名相同则只会显示第一个bug', '添加【消息提示】‘缩放框’显示,开启后‘缩放框’会有一定变大'],
                character: [],
                card: [],
            },
            8.5: {
                info: ['‘菜单按钮’改为只要保存过一次就会自动移动到指定位置', '再再再次修复bug'],
                character: [],
                card: [],
            },
            8.4: {
                info: ['添加‘自动更新’(需重启) =>【菜单选项】', '添加‘未找到的语音’ => 【皮肤】,为帮助换肤没有播放指定语音的玩家,详细长按【皮肤】内的‘未找到的语音’', '修复bug'],
                character: [],
                card: [],
            },
            8.3: {
                info: ['将【拖拽排序,按钮】改名为【界面UI】', '添加按钮两个样式,需<a style="color:blue" href="#" onclick="zyile_download_plug_in_unit_material(this)">更新素材</a>', '添加dialog框两个样式,移除以前的样式,配置后需重启', '添加<翻面>时的图片'],
                character: [],
                card: [],
            },
            8.2: {
                info: ['完善部分菜单的描述', '长按菜单的选项将不会在上面弹出介绍了', '添加换肤换音的教程(在【皮肤】内)', '修复3D按钮丢失点击动画(PC效果更佳)', 'BUG修复'],
                character: [],
                card: [],
            },
            8.1: {
                info: ['本次更新内容均在【消息提示】内:', '新增修改游戏弹窗(Alert)', '更改dialog(可拖拽,方法跟之前一样双指)', '优化弹窗的最小化', '窗口改变大小时弹窗将会自动定位到中间'],
                character: [],
                card: [],
            },
            '8.0': {
                info: ['指定位置导入扩展改为异步(手机仅限1.9版本1.8还是同步)<b>读取</b>', '导入扩展可以预先进行扩展配置了', '修改菜单选项弹出介绍的UI(tips', '修复3D按钮在非简约主题下丢失背景bug', '修改提示框的Esc每次只会关闭最前面的的提示框'],
                character: [],
                card: [],
            },
            7.9: {
                info: ['修复菜单长按不显示该功能的介绍bug', '修改msg提示框的位置,新增加载条', '添加将游戏的按钮改为3D按钮选项'],
                character: [],
                card: [],
            },
            7.8: {
                info: ['修复bug'],
                character: [],
                card: [],
            },
            7.7: {
                info: ['若更新后未自动显示更新内容则到更新日志中点确认会同步', '修复换肤换音武将死亡后若没有对应的语音会无无休止的去加载资源变的非常卡bug', '提示框点击框外即可关闭,增大字体', '增加‘皮肤解锁’的介绍'],
                character: [],
                card: [],
            },
            7.6: {
                info: ['修复game.animationofgif函数播放时有时不是从第一帧开始的bug,在十周年UI下全屏不准', '修复国战下强制读取国战皮肤的bug', '修复菜单内子菜单无法打开bug', '添加换音读取路径'],
                character: [],
                card: [],
            },
            7.5: {
                info: ['修复导入本地扩展输入字段会弹窗的bug', '添加了反选按钮(仅限扩展,不操作开启关闭)', '添加导入本地扩展提示新增什么扩展,失去什么扩展', '添加换肤换语音时若该皮肤没有对应皮肤的语音时会播放原来的语音'],
                character: [],
                card: [],
            },
            7.4: {
                info: ['修复‘皮肤解锁’功能并将其添加到菜单中', '添加‘换肤换音’目前还在测试阶段若有bug请@告知或私聊以便及时修复,素材需要玩家自己弄,名称规则:长按菜单里面的<皮肤>下的‘换肤换音’查看.', '修复导入扩展里面的重置按钮不会重置最底下选项的bug,最底下选项再次点击则会重置', '更改对话框在移动端下会自动上移到最上方方便玩家操作'],
                character: [],
                card: [],
            },
            7.3: {
                info: ['更改【整理手牌】按钮换为3D按钮', '【整理手牌】可以/拖拽了和保存位置了', '移动端按钮更改皮肤名称时会话框会自动移动到最上方方便玩家看见', '导入指定位扩展可以显示文件的大小', '添加导入的搜索和重置按钮', '修复皮肤【多按钮】下丢失文本阴影的bug', '添加修改皮肤时会话框的字体阴影跟换肤框显示一致', '更改菜单部分UI(重写'],
                character: [],
                card: [],
            },
            7.2: {
                info: ['新增【整理手牌】开启关闭(需要重启)', '回复自定义皮肤名称、本地更改,若皮肤命名有问题请联系‘废城’进行修改', '修改消息提示,新增提示框', '取消移动端的双指缩放、双击缩放,改为移动更加准却的函数', '更改导入扩展UI,修复删除扩展时该行不消失,最后一行消失bug', '新增指定文件导入,需要配置路径.'],
                character: [],
                card: [],
            },
        };
    if (!lib.config.zyile_extension_Menu_version) lib.config.zyile_extension_Menu_version = 5.0;
    if (Number(lib.config.zyile_extension_Menu_version) < Number(VERSION)) {
        lib.zyileReadContentLoaded.push(function () {
            game.saveConfig('zyile_extension_Menu_version', VERSION);
            lib.zyile_layer.alert([''].concat(zyile_change_updates[VERSION].info).join('<li>'), {
                title: '更新内容:' + VERSION,
                btn: ['知道了', '关闭'],
                maxmin: !0,
                icon: 0,
                area: ['80%', '80%'],
            });
        });
    }
    window.zyile_extension_Menu.zyile_Menu = {
        info: '菜单选项',
        zyile_Menu_align: {
            name: '菜单定位',
            init: 'left',
            item: {
                left: '左侧',
                center: '居中',
                right: '右侧',
            },
            onclick(item) {
                document.body.dataset.zyileMenuAlign = item;
            },
        },
        zyile_Menu_YC: {
            name: '隐藏菜单按钮',
            intro: '隐藏菜单按钮,仍可以从扩展界面打开菜单.',
            onclick(item) {
                document.body.dataset['zyile_menu'] = item ? 'off' : 'no';
                if (item && !game.getExtensionConfig('概念武将', 'zyile_Menu_YC_TS')) {
                    lib.zyile_layer.alert("菜单按钮将不会再显示,仍可以从扩展界面打开菜单.<<a href='#' onclick='window.zyile_Menu_YC_TS_Fn(this)'>点击此处</a>>", {
                        title: '概念武将菜单提示',
                        icon: 0,
                        closeBtn: false,
                        btn: ['知道了'],
                        yes(layer) {
                            game.saveExtensionConfig('概念武将', 'zyile_Menu_YC_TS', true);
                            layer.close();
                        },
                    });
                }
            },
            init: false,
        },
        zyile_auto_Menu_save_position: {
            name: '自动保存菜单按钮位置',
            init: false,
            intro: '每次移动完毕后将会自动保存按钮位置.',
        },
        zyile_Menu_save: {
            name: '保存按钮位置',
            clear: true,
            intro: '保存菜单按钮位置',
            onclick() {
                var translate = menu._translate.slice(0);
                lib.config.zyile_Menu_position = translate;
                game.saveConfig('zyile_Menu_position', translate);
                lib.zyile_layer.msg('保存成功', {
                    icon: 1,
                    protype: 2,
                    item: 2e3,
                });
            },
        },
        zyile_zhongchi: {
            name: '重置按钮',
            clear: true,
            intro: '在开启了菜单按钮却找不到菜单时点击重置其位置.(憨憨作者',
            onclick() {
                menu.style.transform = '';
                menu._translate = [0, 0];
                lib.config.zyile_Menu_position = [0, 0];
                game.saveConfig('zyile_Menu_position', lib.config.zyile_Menu_position);
                lib.zyile_layer.msg('重置完毕', {
                    protype: 2,
                    time: 1e3,
                    icon: 1,
                });
            },
        },
        zyile_background_video: {
            name: '视频壁纸',
            init: true,
            intro: '将壁纸改为视频',
        },
    };
    for (var i in window.zyile_extension_Menu) {
        for (var j in window.zyile_extension_Menu[i]) {
            var info = window.zyile_extension_Menu[i];
            if (lib.config['extension_概念武将_' + j] === undefined && info[j] && info[j].hasOwn('init')) {
                lib.config['extension_概念武将_' + j] = info[j].init;
                game.saveConfig('extension_概念武将_' + j, lib.config['extension_概念武将_' + j]);
            }
        }
    }
    var zyile_Menu_align = game.getExtensionConfig('概念武将', 'zyile_Menu_align');
    document.body.dataset.zyileMenuAlign = zyile_Menu_align;
    window.zyile_openMenu = function (node, parentNode) {
        var pc = parentNode.getBoundingClientRect();
        var dc = node.getBoundingClientRect();
        var zoom = game.documentZoom / game.deviceZoom;
        if ('ontouchstart' in document || get.is.phoneLayout()) {
            if (lib.extensionPack['十周年UI']) {
                var zoom1 = zoom;
                zoom = game.documentZoom;
                node.style.top = Math.round(((pc.top + 15) / zoom1) * game.documentZoom) + 'px';
                node.style.left = Math.round(((pc.right + 70) / zoom1) * game.documentZoom) + 'px';
            } else {
                node.style.top = Math.round(pc.top / zoom) + 'px';
                node.style.left = Math.round((pc.right + pc.height * 2) / zoom) + 'px';
            }
        } else {
            if (lib.extensionPack['十周年UI']) zoom = 1;
            node.style.top = Math.round((pc.top - pc.height + pc.height / 2) / zoom) + 'px';
            node.style.left = Math.round((pc.left + pc.width) / zoom) + 'px';
        }
    };
    lib.extensionMenu.extension_概念武将.zyile_skin_Menu = {
        name: '插件菜单',
        onclick() {
            if (_status.zyile_open_Menu_div_dragged) return undefined;
            if (_status.zyile_open_Menu_div) {
                var direction = 'zyile-menu-bounceOut';
                switch (document.body.dataset.zyileMenuAlign) {
                    case 'left':
                        direction = 'bounceOutLeft';
                        break;
                    case 'right':
                        direction = 'bounceOutRight';
                        break;
                }
                _status.zyile_open_Menu_div.style.animation = `${direction} 1.6s`;
                _status.zyile_open_Menu_div.style['-webkit-animation'] = `${direction} 1.6s`;
                _status.zyile_open_Menu_div.delete();
                delete _status.zyile_open_Menu_div;
                return false;
            }
            let clickToggle = function (e) {
                if (this.classList.contains('disabled')) return;
                e.stopPropagation();
                this.classList.toggle('zyile_menu_skin_on');
                if (this.classList.contains('zyile_menu_skin_on')) {
                    if (_status.zyile_open_Menu_div) {
                        for (var i of Array.from(_status.zyile_open_Menu_div.querySelectorAll('.zyile_nav>li'))) {
                            if (i != this && !i.contains(this)) i.classList.remove('zyile_Menu_ul_li', 'zyile_menu_skin_on');
                        }
                    }
                }
                let config = this._link.config;
                if (config.configName && !config.nosave) {
                    game.saveConfig(config.configName, this.classList.contains('zyile_menu_skin_on'));
                    lib.config[config.configName] = this.classList.contains('zyile_menu_skin_on');
                }
                if (config.onclick) {
                    if (config.onclick.call(this, this.classList.contains('zyile_menu_skin_on')) === false) {
                        this.classList.toggle('zyile_menu_skin_on');
                        lib.config[config.configName] = this.classList.contains('zyile_menu_skin_on');
                    }
                }
                if (config.update) {
                    config.update();
                }
            };
            let clickSwitcher = function (e) {
                if (this.classList.contains('disabled')) return;
                e.stopPropagation();
                this.classList.toggle('zyile_Menu_ul_li');
                let config = this._link.config;
                if (config.onclickx) config.onclickx.call(this, config);
            };
            var createConfig = function (config, position, configName, Before) {
                var node = ui.create.node('li.zyile_Menu_config.zyile_Menu_config_ul', '<a>' + config.name + '</a>');
                config.configName = configName;
                node._link = { config: config };
                if (!(config.clear || config.clearAll)) {
                    if (!config.intro) {
                        config.intro = '设置' + config.name;
                    }
                } else {
                    node.innerHTML = '<a>' + config.name + '</a>';
                    var fontsize = 25;
                    if (config.name.length > 8) fontsize = 16;
                    node.style.cssText = 'font-size: ' + fontsize + 'px;'; //text-align: center !important;
                }
                if (config.intro && lib.zyile_common.isNotEmpty(config.intro)) {
                    node.oncontextmenu = function (event) {
                        event.stopPropagation();
                        var str = config.intro;
                        if (typeof str == 'function') {
                            str = str();
                        }
                        var tips = document.body.dataset.zyileMenuAlign === 'right' ? 4 : 2;
                        var layer = lib.zyile_layer.tips(str, node, { time: -1, tips: tips });
                        layer.parent.classList.remove('zyile_hidden');
                        layer.parent.style.background = 'transparent';
                        layer.css({
                            border: '2px solid rgb(255, 255, 255)',
                        });
                        layer.addEventListener('mouseleave', layer.close);
                        layer.addEventListener('click', layer.close);
                    };
                    lib.setHover(node, node.oncontextmenu);
                    node.addEventListener(
                        'touchstart',
                        function (e) {
                            if (this._longpresstimeout) {
                                clearTimeout(this._longpresstimeout);
                            }
                            if (lib.config.longpress_info) {
                                this._longpresstimeout = setTimeout(() => node.oncontextmenu, 500);
                            }
                            this._longpressevent = e;
                            if (_status.longpressing && _status.longpressing != this) {
                                ui.click.longpresscancel.call(_status.longpressing);
                            }
                            _status.longpressing = this;
                        },
                        { passive: true }
                    );
                    node.addEventListener('touchend', ui.click.longpresscancel);
                } else {
                    node.oncontextmenu = function (event) {
                        event.stopPropagation();
                    };
                }
                if (config.sgx) {
                    node.onclick = function () {
                        node.classList.toggle('zyile_Menu_ul_li');
                    };
                    ui.create.zyile_node('div.zyile_Menu_ul_li_div', node.querySelector('a'));
                }
                if (config.item) {
                    if (typeof config.item == 'function') {
                        config.item = config.item();
                    }
                    let ItemTag = config.ItemTag || 'div';
                    node.classList.add('switcher');
                    node.addEventListener('click', clickSwitcher);
                    ui.create.zyile_node(
                        ItemTag,
                        {
                            right: '5px',
                            transitionProperty: 'none',
                            paddingLeft: '10px',
                        },
                        config.item[lib.config[config.configName] || config.init || ''],
                        node.querySelector('a')
                    );
                    node._link.menu = ui.create.zyile_node('ul.zyile_Menu_select', node);
                    for (var i in config.item) {
                        var textMenu = ui.create.zyile_node('li.zyile_Menu_option', config.item[i], node._link.menu, (typeof config[i + 'click'] === 'function' && config[i + 'click']) || clickMenuItem);
                        textMenu.oncontextmenu = function (event) {
                            event.stopPropagation();
                        };
                        lib.setHover(textMenu, textMenu.oncontextmenu);
                        textMenu.addEventListener('touchstart', textMenu.oncontextmenu, { passive: true });
                        textMenu.addEventListener('touchend', textMenu.oncontextmenu);
                        var nodeStr,
                            strs = config.item[i].toString();
                        if (strs.includes('.node')) {
                            textMenu.innerHTML = strs.slice(0, strs.indexOf('.node'));
                            nodeStr = strs.slice(strs.indexOf('.node') + 5, (strs.includes('/') && strs.indexOf('/')) || strs.length);
                            var zyile_node = ui.create.zyile_node(nodeStr, textMenu);
                            for (var i = 0; i < nodeStr.length; i++) {
                                if (nodeStr[i] == '.') {
                                    if (zyile_node.className.length != 0) {
                                        zyile_node.className += ' ';
                                    }
                                    while (nodeStr[i + 1] != '.' && nodeStr[i + 1] != '#' && i + 1 < nodeStr.length) {
                                        zyile_node.className += nodeStr[i + 1];
                                        i++;
                                    }
                                } else if (nodeStr[i] == '#') {
                                    while (nodeStr[i + 1] != '.' && nodeStr[i + 1] != '#' && i + 1 < nodeStr.length) {
                                        zyile_node.id += nodeStr[i + 1];
                                        i++;
                                    }
                                }
                            }
                            if (strs.includes('~')) {
                                var attributeList = strs.slice(strs.indexOf('~') + 1, strs.indexOf('@')).split('~');
                                for (var i of attributeList) {
                                    zyile_node.setAttribute(i.slice(0, i.indexOf('=')), i.slice(i.indexOf('=') + 1));
                                }
                            }
                            if (strs.includes('@')) {
                                var Event = strs.slice(strs.indexOf('@') + 1).split('@');
                                for (var i of Event) {
                                    zyile_node.addEventListener(i.slice(0, i.indexOf('=')), eval('(' + i.slice(i.indexOf('=') + 1) + ')'));
                                }
                            }
                        }
                        textMenu._link = i;
                        if (config.textMenu) {
                            config.textMenu(textMenu, i, config.item[i], config);
                        }
                    }
                    node._link.menu._link = node;
                    node._link.current = config.init;
                } else if (config.clear) {
                    node.addEventListener('click', clickToggle);
                } else {
                    node.onclick = clickToggle;
                    ui.create.zyile_node('span.#zyile_button_div2', ui.create.zyile_node(node.querySelector('a'), 'span.#zyile_button_div1'));
                    if (config.init == true || lib.config[config.configName] == true) {
                        node.classList.add('zyile_menu_skin_on');
                    }
                    if (lib.config[config.configName] !== undefined && lib.config[config.configName] != true) {
                        node.classList.remove('zyile_menu_skin_on');
                    }
                }
                if (position) {
                    if (Before) position.insertBefore(node, position.childNodes[0]);
                    else position.appendChild(node);
                }
                return node;
            };
            var clickMenuItem = function (e) {
                e.stopPropagation();
                var node = this.parentNode._link;
                var config = node._link.config;
                node._link.current = this.link;
                var tmpName = node.lastChild.innerHTML;
                let tag = config.ItemTag || 'div';
                node.firstElementChild.querySelector(tag).innerHTML = config.item[this._link];
                this.parentNode.parentNode.classList.toggle('zyile_Menu_ul_li');
                if (config.click) {
                    config.onclick.call(node, this._link, this);
                } else if (config.configName) {
                    game.saveConfig(config.configName, this._link);
                    lib.config[config.configName] = this._link;
                }
                if (config.onclick) {
                    if (config.onclick.call(node, this._link, this) === false) {
                        node.firstElementChild.querySelector(tag).innerHTML = tmpName;
                        lib.config[config.configName] = this._link;
                        game.saveConfig(config.configName, lib.config[config.configName]);
                    }
                }
                if (config.update) {
                    config.update();
                }
            };
            var div_Menu = ui.create.div('.zyile_bounceInLeft.zyile_div_Menu.zyile-Menu-sidebar-collappse'),
                nav_ul = ui.create.zyile_node('ul.zyile_nav', div_Menu);
            lib.setScroll(div_Menu);
            document.body.appendChild(div_Menu);
            _status.zyile_open_Menu_div = div_Menu;
            zyile_CJ = createConfig(
                {
                    name: '插件:正在检测',
                    onclick() {
                        if (!zyile_CJ_update) return false;
                        if (!lib.zyile_onLine) return lib.zyile_layer.alert('暂无网络链接', { icon: 7 });
                        if (this.updates) return lib.zyile_layer.alert('请等待更新', { icon: 7 });
                        if (this.updates === false) return undefined;
                        let ReDownloadFile = [];
                        let download = (DownloadFile) => {
                            this.updates = true;
                            this.firstChild.innerHTML = DownloadFile[0];
                            let updates = DownloadFile.map((value) => {
                                return 'https://zyile.coding.net/p/noname/d/noname/git/raw/master/concept/' + value;
                            });
                            game.multiDownload(
                                updates,
                                /**下载成功执行的回调函数*/
                                (length, fileName, fileLocation) => {
                                    fileName = fileName.replace('https://zyile.coding.net/p/noname/d/noname/git/raw/master/concept/', '');
                                    this.firstChild.innerHTML = fileName;
                                    xhr('extension/概念武将/' + fileName)
                                        .then((value) => {
                                            if (value === 'Too Many Requests') ReDownloadFile.add(fileName);
                                        })
                                        .catch((reason) => ReDownloadFile.add(fileName));
                                } /**下载失败执行的回调函数*/,
                                function onerror(length, fileName, fileLocation) {
                                    fileName = fileName.replace('https://zyile.coding.net/p/noname/d/noname/git/raw/master/concept/', '');
                                    ReDownloadFile.add(fileName);
                                } /**下载完毕执的回调函数*/,
                                () => {
                                    if (ReDownloadFile.length > 0) {
                                        download(ReDownloadFile.slice(0));
                                        ReDownloadFile = [];
                                        return;
                                    }
                                    setTimeout(() => {
                                        this.firstChild.innerHTML = '';
                                        lib.config.zyile_extension_Menu_version = window.zyile_extension_Menu_version;
                                        ui.create.zyile_node('span', this.firstChild, '下载完毕,点击重启', function () {
                                            game.reload();
                                        });
                                        this.updates = false;
                                    }, 500);
                                    delete window.概念武将_updates;
                                } /**更改下载到本地的地址*/,
                                (current) => {
                                    return current.replace('https://zyile.coding.net/p/noname/d/noname/git/raw/master/concept/', 'extension/概念武将/');
                                }
                            );
                        };
                        if (window.概念武将_updates && window.概念武将_updates.length) {
                            download(window.概念武将_updates);
                        } else {
                            window
                                .xhr('https://zyile.coding.net/p/noname/d/noname/git/raw/master/concept/update.js')
                                .then((value) => {
                                    window.eval(value);
                                    if (window.概念武将_updates.length > 0) download(window.概念武将_updates);
                                })
                                .catch((reason) => {
                                    delete this.updates;
                                    window.alert('连接失败');
                                    this.firstChild.innerHTML = '';
                                    ui.create.zyile_node('span', this.firstChild, '下载插件', function () {
                                        this.onclick();
                                    });
                                    console.warn(reason);
                                    throw reason;
                                });
                        }
                    },
                    clear: true,
                },
                nav_ul,
                null,
                true
            );
            zyile_extension = createConfig(
                {
                    name: '概念武将:正在检测',
                    onclick() {
                        if (!zyile_extension_update) return undefined;
                        if (!lib.zyile_onLine) return lib.zyile_layer.alert('暂无网络链接', { icon: 7 });
                        if (this.updates) return lib.zyile_layer.alert('请等待更新', { icon: 7 });
                        if (this.updates === false) return undefined;
                        this.firstChild.innerHTML = '正在更新...';
                        this.updates = true;
                        game.download(
                            'https://zyile.coding.net/p/noname/d/noname/git/raw/master/concept/extension.js',
                            'extension/概念武将/extension.js',
                            () => {
                                this.firstChild.innerHTML = '';
                                lib.config.概念武将_version = window.概念武将_version;
                                xhr('extension/概念武将/extension.js')
                                    .then((value) => {
                                        if (value !== 'Too Many Requests') {
                                            this.updates = false;
                                            ui.create.zyile_node('span', this.firstChild, '下载完毕,点击重启', function () {
                                                game.reload();
                                            });
                                        } else {
                                            this.firstChild.innerHTML = '';
                                            ui.create.zyile_node('span', this.firstChild, '下载失败,点击重新下载', function () {
                                                this.onclick();
                                            });
                                            delete this.updates;
                                        }
                                    })
                                    .catch((reason) => {
                                        console.warn('概念武将extension.js下载失败', reason);
                                        this.firstChild.innerHTML = '';
                                        ui.create.zyile_node('span', this.firstChild, '下载失败,点击重新下载', function () {
                                            this.onclick();
                                        });
                                        delete this.updates;
                                    });
                            },
                            () => {
                                this.firstChild.innerHTML = '';
                                ui.create.zyile_node('span', this.firstChild, '下载失败,点击重新下载', function () {
                                    this.onclick();
                                });
                                delete this.updates;
                            }
                        );
                    },
                    clear: true,
                },
                nav_ul,
                null,
                true
            );
            for (var i in window.zyile_extension_Menu) {
                var ul = createConfig(
                    {
                        name: window.zyile_extension_Menu[i].info || '分离区',
                        clear: true,
                        sgx: true,
                    },
                    nav_ul
                );
                var ul_ul = ui.create.zyile_node('ul.zyile_Menu_ul', ul);
                for (var j in window.zyile_extension_Menu[i]) {
                    var info = window.zyile_extension_Menu[i];
                    typeof info[j] == 'object' && createConfig(info[j], ul_ul, 'extension_概念武将_' + j);
                }
            }
            createConfig(
                {
                    name: '更新日志',
                    onclick() {
                        _status.zyile_open_Menu_div.style.animation = 'bounceOutLeft 1.6s';
                        _status.zyile_open_Menu_div.style['-webkit-animation'] = 'bounceOutLeft 1.6s';
                        _status.zyile_open_Menu_div.delete();
                        delete _status.zyile_open_Menu_div;
                        var layer = lib.zyile_layer.openFull('', {
                            title: '更新日志(双指移动)',
                            icon: 0,
                            clickfocus: !1,
                            success(layer) {
                                ui.arena.classList.add('zyile_hidden');
                                ui.system.classList.add('zyile_hidden');
                                ui.system2.classList.add('zyile_hidden');
                                ui.menuContainer.classList.add('zyile_hidden');
                                layer.classList.add('dialog'), (layer.parent.style.zIndex = 9), (layer.style.zIndex = 10);
                            },
                            end() {
                                ui.arena.classList.remove('zyile_hidden');
                                ui.system.classList.remove('zyile_hidden');
                                ui.system2.classList.remove('zyile_hidden');
                                ui.menuContainer.classList.remove('zyile_hidden');
                                lib.extensionMenu.extension_概念武将.zyile_skin_Menu.onclick();
                                ui.update();
                            },
                            yes(layer) {
                                layer.close();
                                game.saveConfig('zyile_extension_Menu_version', VERSION);
                            },
                            minWidth: '40%',
                            minHeight: '40%',
                        }),
                            layer_content = layer.content,
                            i,
                            j,
                            close = layer.close;
                        layer_content.innerHTML = '<i class="layui-layer-ico layui-layer-ico0"></i>';
                        layer.buttons = [];
                        Object.setPrototypeOf(layer, lib.element.Dialog.prototype); //QQQ
                        for (i in zyile_change_updates) {
                            layer.addText('版本:' + i, false);
                            j = zyile_change_updates[i];
                            layer.addText([''].concat(j.info).join('<li>'), false);
                            var charaList = [],
                                cardList = [];
                            for (var x of j.character) if (lib.character[x]) charaList.unshift(x);
                            for (var x of j.card) if (lib.card[x]) cardList.unshift(x);
                            charaList.length > 0 && layer.addSmall([charaList, 'character']);
                            cardList.length > 0 && layer.addSmall([cardList, 'vcard']);
                            layer.addText('<br/>');
                        }
                        layer.close = close;
                    },
                    clear: true,
                },
                nav_ul
            );
            createConfig(
                {
                    name: '反馈BUG、建议、武将投稿:<br><img border="0" src="https://pub.idqqimg.com/wpa/images/counseling_style_52.png" alt="QQ聊天" title="QQ聊天"/>',
                    onclick() {
                        lib.zyile_layer.iframe({
                            title: 'QQ聊天',
                            url: 'http://wpa.qq.com/msgrd?v=3&uin=2107221550&site=qq&menu=yes',
                        });
                    },
                    clear: true,
                    clearAll: true,
                },
                nav_ul
            );
            createConfig(
                {
                    name: '关闭',
                    onclick() {
                        menu.dispatchEvent(new Event('endDang'));
                    },
                    clear: true,
                },
                nav_ul
            );
        },
        clear: true,
    };
    menu = ui.create.div('#zyile_menu.btn.btn-primary.dim', { top: '100px' }, document.body);
    for (var i = 0; i < 6; i++) ui.create.div(menu, { pointerEvents: 'none' });
    document.body.dataset['zyile_menu'] = game.getExtensionConfig('概念武将', 'zyile_Menu_YC') ? 'off' : 'no';
    menu.addEventListener(lib.config.touchscreen ? 'touchstart' : 'mousedown', function (e) {
        var top = parseInt(menu.style.top),
            endup = function (e) {
                top = parseInt(menu.style.top);
                menu.style.top = top - 3 + 'px';
                window.removeEventListener(e.type, endup, true);
            };
        menu.style.top = top + 3 + 'px';
        window.addEventListener(lib.config.touchscreen ? 'touchend' : 'mouseup', endup, true);
    });
    window.zyile_dragZoom(menu);
    if (get.objtype(lib.config.zyile_Menu_position) == 'array') {
        var translate = lib.config.zyile_Menu_position || [0, 0];
        menu._translate = translate;
        menu.style.transform = 'translate(' + translate[0] + 'px,' + translate[1] + 'px)';
    }
    menu.addEventListener('endDang', lib.extensionMenu.extension_概念武将.zyile_skin_Menu.onclick, true);
    if (game.getExtensionConfig('概念武将', 'zyile_background_video')) {
        let Video = ui.create.zyile_node(
            'Video',
            ui.create.div(document.body, {
                zIndex: -1,
                pointerEvents: 'none',
            }),
            {
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: '50% 50%',
                position: 'fixed',
            }
        );
        if (Math.random() > 0.5) {
            Video.src = 'extension/概念武将/猫羽雫1.mp4';
        }
        else {
            Video.src = 'extension/概念武将/猫羽雫2.mp4';
        }
        Video.setAttribute('autoplay', '');
        Video.setAttribute('loop', '');
        Video.setAttribute('loop', '');
        Video.setAttribute('loop', 'muted');
    }
    menu.addEventListener(
        'moveStop',
        function () {
            if (game.getExtensionConfig('概念武将', 'zyile_auto_Menu_save_position')) {
                var translate = this._translate.slice(0);
                lib.config.zyile_Menu_position = translate;
                game.saveConfig('zyile_Menu_position', translate);
            }
        },
        true
    );
});
