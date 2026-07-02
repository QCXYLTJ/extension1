import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    //daice
    return {
        name: '神魔乱舞',
        content(config, pack) {
            game.mp47 = async function (Q) {
                return new Promise((resolve) => {
                    const video = document.createElement('video');
                    video.src = `extension/神魔乱舞/mp4/${Q}.mp4`;
                    video.style.cssText = 'z-index: 999; height: 100%; width: 100%; position: fixed; object-fit: cover; left: 0; right: 0; pointer-events: none;';
                    video.autoplay = true;
                    video.loop = false;
                    const backButton = document.createElement('div');
                    backButton.innerHTML = '返回游戏'; //文字内容
                    backButton.style.cssText = 'z-index: 999; position: absolute; bottom: 10px; right: 10px; color: red; font-size: 16px; padding: 5px 10px; background: rgba(0, 0, 0, 0.3);';
                    backButton.onclick = function () {
                        backButton.remove();
                        video.remove();
                        resolve();
                    }; //设置返回按钮的点击事件
                    document.body.appendChild(video);
                    document.body.appendChild(backButton);
                    video.addEventListener('error', function () {
                        backButton.remove();
                        video.remove();
                        resolve();
                    });
                    video.addEventListener('ended', function () {
                        backButton.remove();
                        video.remove();
                        resolve();
                    });
                });
            }; //播放mp4
            var originalDie = lib.element.player.die;
            game.restoreOriginalDie = function (obj) {
                obj.die = originalDie;
            };
            //史诗武将
            lib.rank.rarity.epic.addArray(['义关羽', '周瑜', '孙策', '托尼史塔克', '斯科特朗', '项羽', '刘邦', '韩信', '真李白', '项少龙', '凜音', '两仪式', '两只小K', '洛天依']);
            //传说武将
            lib.rank.rarity.legend.addArray(['姜子牙', '灭霸', '女娲', '张衡', '紫霞', '门徒', '阿卡多', '耶稣', '盘古', '真紫霞', '玉帝', '王母', '无天', '阎王', '地藏王', '死神', '鸿钧', '孙悟空', '越女', '真周瑜', '真关羽']);
            game.showTipMessage = function (messageContent, duration) {
                // 创建提示框元素并添加样式
                var messageBox = document.createElement('div');
                messageBox.innerHTML = messageContent;
                messageBox.style.display = 'block';
                messageBox.style.position = 'fixed';
                messageBox.style.top = '50%';
                messageBox.style.left = '50%';
                messageBox.style.transform = 'translate(-50%, -50%)';
                messageBox.style.backgroundColor = 'rgba(255, 255, 255, 0)';
                messageBox.style.boxShadow = '0 0 10px #888888';
                //messageBox.style.backgroundColor = '#fff'; // 将文本框底色改为白色
                messageBox.style.padding = '10px';
                messageBox.style.borderRadius = '10px';
                messageBox.style.zIndex = '100000';
                messageBox.style.fontSize = '20px'; // 添加字体大小样式
                //messageBox.style.color = '#000'; // 添加字体颜色样式
                messageBox.style.backgroundImage = 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)';
                messageBox.style.webkitBackgroundClip = 'text';
                messageBox.style.webkitTextFillColor = 'transparent';
                document.body.appendChild(messageBox);
                // 在 duration 秒后隐藏提示框并从页面中删除 element
                setTimeout(function () {
                    messageBox.style.opacity = '0'; // 设置透明度为 0,实现全透明
                    messageBox.addEventListener('transitionend', function () {
                        messageBox.remove(); // 等待过渡结束后将元素从页面中删除
                    });
                }, duration * 1000); // 将 duration 转换为毫秒
            };
            //八神专用音效函数
            game.playeranimaudio = function (str, spg) {
                // 如果已经播放了该音效,则不再重复播放
                if (_status.skillaudio.includes(str)) return;
                // 添加该音效到播放列表中
                _status.skillaudio.add(str);
                // 添加视频事件,用于播放音效
                game.addVideo('playAudio', null, str);
                // 一段时间后从播放列表中删除该音效
                setTimeout(function () {
                    _status.skillaudio.remove(str);
                }, 1000);
                // 创建 audio 元素,用于播放音效
                var audio = document.createElement('audio');
                audio.autoplay = true; // 自动播放
                audio.volume = lib.config.volumn_audio / 8; // 设置音量
                audio.src = spg; // 设置音效文件的路径
                // 当音效播放结束后,自动删除该元素
                audio.addEventListener('ended', function () {
                    this.remove();
                });
                // 当加载音效文件失败时,重新尝试加载或者报错
                audio.onerror = function () {
                    if (this._changed) {
                        // 已经尝试过重新加载
                        this.remove();
                        if (onerror) {
                            onerror();
                        }
                    } else {
                        // 尝试重新加载文件
                        this.src = spg;
                        this._changed = true;
                    }
                };
                // 将该元素添加到游戏窗口中
                ui.window.appendChild(audio);
                return audio; // 返回该元素
            };
            if (lib.config.mode == 'guozhan') {
                lib.translate.帝威_info = '游戏开始时,你明置所有角色';
                lib.translate.召唤_info = '游戏开始后,你将其他已明置的主将记录在武将牌上,回合开始时,你可以将另一名武将替换为武将牌上的角色.';
            }
            if (lib.config.mode != 'guozhan' && lib.config.mode != 'identity') {
                lib.translate.帝威_info = '游戏开始时｜所有玩家回合开始前,你摸一张牌';
            }
            //---------------------------------------基本属性------------------------------------------\\
            //耶稣专用函数
            lib.skill._xiachongsheng = {
                trigger: {
                    player: 'dieAfter', // 触发死亡后立即执行
                },
                forced: true, // 表示是否需要玩家手动确认技能发动
                forceDie: true, // 强制死亡锁定
                forced: true, // 强制效果
                popup: false, // 是否需要在屏幕上弹出提示框
                // 是否为唯一技能(每个角色只有一个)
                filter(event, player) {
                    return player.hasSkill('xiachongsheng'); // 执行效果的角色必须拥有‘xiachongsheng’技能
                },
                content() {
                    player.markSkill('xiachongsheng'); // 标记‘xiachongsheng’技能
                },
            };
            lib.skill.xiachongsheng = {
                init(player) {
                    // 当角色第一次获得该技能时执行,用于初始化属性
                    if (!player.storage.xiachongsheng) player.storage.xiachongsheng = player.storage.复活回合;
                },
                intro: {
                    name: '重生', // 技能名称
                    content: '你将在#轮后重生',
                },
                marktext: '重生',
                mark: true, // 是否需要在角色头像上标记技能状态
                trigger: {
                    global: 'roundStart', // 每轮回合开始阶段触发
                },
                forced: true,
                forceDie: true,
                forced: true,
                popup: false,
                filter(event, player) {
                    return player.storage.复活回合 && player.isDead(); // 执行效果的条件:角色已死亡且拥有‘xiachongsheng’技能
                    return false;
                },
                content() {
                    'step 0';
                    //player.storage.xiachongsheng2++; // 已经执行了一轮‘xiachongsheng’技能,计数器 +1
                    player.storage.xiachongsheng--;
                    // 同步存储数据
                    var str = player.storage.xiachongsheng; //-player.storage.xiachongsheng2;
                    if (str > 0) {
                        game.log(player, '将在' + str + '轮游戏后重生'); // 在聊天框中输出重生信息
                    } else game.log(player, '重生倒计时结束准备重生'); // 在聊天框中输出重生信息
                    ('step 1');
                    if (player.storage.xiachongsheng > 0) {
                        event.finish();
                    } // 如果执行轮数 < 技能设定轮数,则直接结束
                    ('step 2');
                    if (player.storage.alivenum < 0)
                        player.revive(player.maxHp); // 如果生命值设定为-1,则重生时回复满血
                    else player.revive(player.storage.alivenum); // 否则回复设定的生命值
                    if (player.storage.drawnum > 0) player.draw(player.storage.drawnum); // 如果抽牌数量 > 0,则重生时抽取指定数量的牌
                    ('step 3');
                    player.unmarkSkill('xiachongsheng'); // 取消‘xiachongsheng’技能标记
                    player.removeMark('重生'); // 取消‘重生’技能标记
                    player.storage.xiachongsheng = player.storage.复活回合; // ‘xiachongsheng’技能计数器清零
                    delete player.storage.alivenum; // 删除存储的生命值
                    delete player.storage.drawnum; // 删除存储的抽牌数量
                    delete player.storage.复活回合; // 删除存储的‘xiachongsheng’技能轮数
                    // player.storage.xiachongsheng = 0; // ‘xiachongsheng’技能计数器清零
                    if (player.name == '周瑜') {
                        // 如果是周瑜角色
                        player.reinit(player.name, '真周瑜'); // 将玩家身份修改为‘真周瑜’
                    }
                },
            };
            lib.element.player.fuhuo = function (time, num, num2) {
                // 扩展到lib.element.player对象上,用于触发重生效果
                'step 0';
                // event.forceDie=true;
                if (time < 0 || num < 0 || num2 < 0) return; // 如果属性设置有误,则不进行任何操作
                //this.die();
                ('step 1');
                if (typeof time != 'number') time = 1; // 如果未设置重生回合数,则默认为 1(即下一轮游戏)
                if (typeof num != 'number') num = -1; // 如果未设置生命值,则默认为-1(即满血重生)
                if (typeof num2 != 'number') num = 0; // 如果未设置抽牌数量,则默认为 0
                game.log(this, '将在' + get.cnNumber(time) + '轮游戏后重生'); // 在聊天框中输出重生信息
                this.storage.复活回合 = time; // 存储重生回合数
                this.storage.alivenum = num; // 存储生命值
                this.storage.drawnum = num2; // 存储抽牌数量
                // 同步存储数据
                this.addSkill('xiachongsheng'); // 角色添加‘xiachongsheng’技能
                this.update(); // 更新角色的显示状态
            };
            //新建势力变色和名字变色
            // 定义样式元素
            var style2 = document.createElement('style');
            // 设置随机颜色函数
            function getRandomColor() {
                var letters = '0123456789ABCDEF';
                var color = '#';
                for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }
            // 定义更新样式函数
            function updateStyle() {
                // 生成随机颜色
                var randomColor = getRandomColor();
                // 设置样式内容
                style2.innerHTML = ".player .identity[data-color='chu'], div[data-nature='chu'], span[data-nature='chu'] {text-shadow: black 0 0 1px," + randomColor + ' 0 0 2px,' + randomColor + ' 0 0 5px,' + randomColor + ' 0 0 10px,' + randomColor + ' 0 0 10px} ' + "div[data-nature='chum'], span[data-nature='chum'] {text-shadow: black 0 0 1px," + randomColor + ' 0 0 2px,' + randomColor + ' 0 0 5px,' + randomColor + ' 0 0 5px,' + randomColor + ' 0 0 5px,black 0 0 1px} ' + "div[data-nature='chumm'], span[data-nature='chumm'] {text-shadow: black 0 0 1px," + randomColor + ' 0 0 2px,' + randomColor + ' 0 0 2px,' + randomColor + ' 0 0 2px,' + randomColor + ' 0 0 2px,black 0 0 1px} ' + ".player .identity[data-color='lun'], div[data-nature='lun'], span[data-nature='lun'] {text-shadow: black 0 0 1px," + randomColor + ' 0 0 2px,' + randomColor + ' 0 0 5px,' + randomColor + ' 0 0 10px,' + randomColor + ' 0 0 10px} ' + "div[data-nature='lunm'], span[data-nature='lunm'] {text-shadow: black 0 0 1px," + randomColor + ' 0 0 2px,' + randomColor + ' 0 0 5px,' + randomColor + ' 0 0 5px,' + randomColor + ' 0 0 5px,black 0 0 1px} ' + "div[data-nature='lunmm'], span[data-nature='lunmm'] {text-shadow: black 0 0 1px," + randomColor + ' 0 0 2px,' + randomColor + ' 0 0 2px,' + randomColor + ' 0 0 2px,' + randomColor + ' 0 0 2px,black 0 0 1px}' + ".player .identity[data-color='han'], div[data-nature='han'], span[data-nature='han'] {text-shadow: black 0 0 1px," + randomColor + ' 0 0 2px,' + randomColor + ' 0 0 5px,' + randomColor + ' 0 0 10px,' + randomColor + ' 0 0 10px} ' + "div[data-nature='hanm'], span[data-nature='hanm'] {text-shadow: black 0 0 1px," + randomColor + ' 0 0 2px,' + randomColor + ' 0 0 5px,' + randomColor + ' 0 0 5px,' + randomColor + ' 0 0 5px,black 0 0 1px} ' + "div[data-nature='hanmm'], span[data-nature='hanmm'] {text-shadow: black 0 0 1px," + randomColor + ' 0 0 2px,' + randomColor + ' 0 0 2px,' + randomColor + ' 0 0 2px,' + randomColor + ' 0 0 2px,black 0 0 1px}' + ".player .identity[data-color='联'], div[data-nature='联'], span[data-nature='联'] {text-shadow: black 0 0 1px," + randomColor + ' 0 0 2px,' + randomColor + ' 0 0 5px,' + randomColor + ' 0 0 10px,' + randomColor + ' 0 0 10px} ' + "div[data-nature='联m'], span[data-nature='联m'] {text-shadow: black 0 0 1px," + randomColor + ' 0 0 2px,' + randomColor + ' 0 0 5px,' + randomColor + ' 0 0 5px,' + randomColor + ' 0 0 5px,black 0 0 1px} ' + "div[data-nature='联mm'], span[data-nature='联mm'] {text-shadow: black 0 0 1px," + randomColor + ' 0 0 2px,' + randomColor + ' 0 0 2px,' + randomColor + ' 0 0 2px,' + randomColor + ' 0 0 2px,black 0 0 1px}' + ".player .identity[data-color='侠'], div[data-nature='侠'], span[data-nature='侠'] {text-shadow: black 0 0 1px," + randomColor + ' 0 0 2px,' + randomColor + ' 0 0 5px,' + randomColor + ' 0 0 10px,' + randomColor + ' 0 0 10px} ' + "div[data-nature='侠m'], span[data-nature='侠m'] {text-shadow: black 0 0 1px," + randomColor + ' 0 0 2px,' + randomColor + ' 0 0 5px,' + randomColor + ' 0 0 5px,' + randomColor + ' 0 0 5px,black 0 0 1px} ' + "div[data-nature='侠mm'], span[data-nature='侠mm'] {text-shadow: black 0 0 1px," + randomColor + ' 0 0 2px,' + randomColor + ' 0 0 2px,' + randomColor + ' 0 0 2px,' + randomColor + ' 0 0 2px,black 0 0 1px}' + ".player .identity[data-color='坦'], div[data-nature='坦'], span[data-nature='坦'] {text-shadow: black 0 0 1px," + randomColor + ' 0 0 2px,' + randomColor + ' 0 0 5px,' + randomColor + ' 0 0 10px,' + randomColor + ' 0 0 10px} ' + "div[data-nature='坦m'], span[data-nature='坦m'] {text-shadow: black 0 0 1px," + randomColor + ' 0 0 2px,' + randomColor + ' 0 0 5px,' + randomColor + ' 0 0 5px,' + randomColor + ' 0 0 5px,black 0 0 1px} ' + "div[data-nature='坦mm'], span[data-nature='坦mm'] {text-shadow: black 0 0 1px," + randomColor + ' 0 0 2px,' + randomColor + ' 0 0 2px,' + randomColor + ' 0 0 2px,' + randomColor + ' 0 0 2px,black 0 0 1px}' + ".player .identity[data-color='shen'], div[data-nature='shen'], span[data-nature='shen'] {text-shadow: black 0 0 1px," + randomColor + ' 0 0 2px,' + randomColor + ' 0 0 5px,' + randomColor + ' 0 0 10px,' + randomColor + ' 0 0 10px} ' + "div[data-nature='shenm'], span[data-nature='shenm'] {text-shadow: black 0 0 1px," + randomColor + ' 0 0 2px,' + randomColor + ' 0 0 5px,' + randomColor + ' 0 0 5px,' + randomColor + ' 0 0 5px,black 0 0 1px} ' + "div[data-nature='shenmm'], span[data-nature='shenmm'] {text-shadow: black 0 0 1px," + randomColor + ' 0 0 2px,' + randomColor + ' 0 0 2px,' + randomColor + ' 0 0 2px,' + randomColor + ' 0 0 2px,black 0 0 1px}';
                // 将样式元素添加到 head 中
                document.head.appendChild(style2);
            }
            // 初始调用一次更新样式函数
            updateStyle();
            // 每半秒更新一次样式
            setInterval(updateStyle, 500);
            // 将<chu>势力添加到势力库,并指定中文名称
            lib.groupnature.chu = 'chu';
            lib.group.push('chu');
            lib.translate.chu = '楚';
            // 将<lun>势力添加到势力库,并指定中文名称
            lib.groupnature.lun = 'lun';
            lib.group.push('lun');
            lib.translate.lun = '轮';
            // 将<lun>势力添加到势力库,并指定中文名称
            lib.groupnature.han = 'han';
            lib.group.push('han');
            lib.translate.han = '汉';
            // 将<lun>势力添加到势力库,并指定中文名称
            lib.groupnature.联 = '联';
            lib.group.push('联');
            lib.translate.联 = '联';
            // 将<lun>势力添加到势力库,并指定中文名称
            lib.groupnature.侠 = '侠';
            lib.group.push('侠');
            lib.translate.侠 = '侠';
            // 将<lun>势力添加到势力库,并指定中文名称
            lib.groupnature.坦 = '坦';
            lib.group.push('坦');
            lib.translate.坦 = '坦';
            // 将<lun>势力添加到势力库,并指定中文名称
            lib.groupnature.shen = 'shen';
            lib.group.push('shen');
            lib.translate.shen = '神';
            lib.groupnature.夜 = '夜';
            lib.group.push('夜');
            lib.translate.夜 = '夜';
            lib.groupnature.月 = '月';
            lib.group.push('月');
            lib.translate.月 = '月';
            lib.groupnature.血 = '血';
            lib.group.push('血');
            lib.translate.血 = '血';
            lib.groupnature.长城 = '长城';
            lib.group.push('长城');
            lib.translate.长城 = '长城';
            lib.groupnature.音 = '音';
            lib.group.push('音');
            lib.translate.音 = '音';
            var style1 = document.createElement('style');
            style1.innerHTML = ".player .identity[data-color='仙'],";
            style1.innerHTML += "div[data-nature='仙'],";
            style1.innerHTML += "span[data-nature='仙'] {text-shadow: black 0 0 1px,rgba(255, 92, 187,1) 0 0 2px,rgba(255, 92, 187,1) 0 0 5px,rgba(255, 95, 187,1) 0 0 10px,rgba(255, 92, 187,1) 0 0 10px}";
            style1.innerHTML += "div[data-nature='仙m'],";
            style1.innerHTML += "span[data-nature='仙m'] {text-shadow: black 0 0 1px,rgba(196,107,221,1) 0 0 2px,rgba(196,107,221,1) 0 0 5px,rgba(196,107,221,1) 0 0 5px,rgba(196,107,221,1) 0 0 5px,black 0 0 1px;}";
            style1.innerHTML += "div[data-nature='仙mm'],";
            style1.innerHTML += "span[data-nature='仙mm'] {text-shadow: black 0 0 1px,rgba(255,62,142,1) 0 0 2px,rgba(255,62,142,1) 0 0 2px,rgba(255,62,142,1) 0 0 2px,rgba(255,62,142,1) 0 0 2px,black 0 0 1px;}";
            style1.innerHTML += ".player .identity[data-color='唐'],";
            style1.innerHTML += "div[data-nature='唐'],";
            style1.innerHTML += "span[data-nature='唐'] {text-shadow: black 0 0 1px,rgba(255, 92, 0,1) 0 0 2px,rgba(255, 92, 0,1) 0 0 5px,rgba(255, 95, 0,1) 0 0 10px,rgba(255, 92, 0,1) 0 0 10px}";
            style1.innerHTML += "div[data-nature='唐m'],";
            style1.innerHTML += "span[data-nature='唐m'] {text-shadow: black 0 0 1px,rgba(196,107,221,1) 0 0 2px,rgba(196,107,221,1) 0 0 5px,rgba(196,107,221,1) 0 0 5px,rgba(196,107,221,1) 0 0 5px,black 0 0 1px;}";
            style1.innerHTML += "div[data-nature='唐mm'],";
            style1.innerHTML += "span[data-nature='唐mm'] {text-shadow: black 0 0 1px,rgba(255,62,142,1) 0 0 2px,rgba(255,62,142,1) 0 0 2px,rgba(255,62,142,1) 0 0 2px,rgba(255,62,142,1) 0 0 2px,black 0 0 1px;}";
            document.head.appendChild(style1);
            var tenUi = document.createElement('style');
            tenUi.innerHTML += ".camp-wrap[data-camp='仙']>.camp-name {text-shadow: 0 0 5px rgb(242, 16, 167), 0 0 10px rgb(242, 16, 167), 0 0 15px rgb(242, 16, 167);}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='仙']>.camp-name {text-shadow: 0 0 5px rgb(242, 16, 167), 0 0 10px rgb(242, 16, 167), 0 0 15px rgb(242, 16, 167);}";
            tenUi.innerHTML += ".camp-wrap[data-camp='唐']>.camp-name {text-shadow: 0 0 5px rgb(242, 16, 0), 0 0 10px rgb(242, 16, 0), 0 0 15px rgb(242, 16, 0);}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='唐']>.camp-name {text-shadow: 0 0 5px rgb(242, 16, 0), 0 0 10px rgb(242, 16, 0), 0 0 15px rgb(242, 16, 0);}";
            document.head.appendChild(tenUi);
            //css样式定义
            var style = document.createElement('style');
            style.innerHTML = `
    .player .identity[data-color='仙'],
    div[data-nature='仙'],
    span[data-nature='仙'] {
        -webkit-animation:🌱text-shadow 20s infinite;
        animation:🌱text-shadow 20s infinite;
    }
    .player .identity[data-color='仙m'],
    div[data-nature='仙m'],
    span[data-nature='仙m'] {
        -webkit-animation:🌱text-shadow 20s infinite;
        animation:🌱text-shadow 20s infinite;
    }
    .player .identity[data-color='仙mm'],
    div[data-nature='仙mm'],
    span[data-nature='仙mm'] {
        -webkit-animation:🌱text-shadow 20s infinite;
        animation:🌱text-shadow 20s infinite;
    }
    .camp-wrap[data-camp='仙']>.camp-back {
        overflow: hidden;
    }
    .camp-wrap[data-camp='仙']>.camp-back:before {
        content:"";
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: linear-gradient(45deg, rgb(255, 0, 106), rgb(0, 255, 196), rgb(255, 0, 247));
        background-size: 400%;
        animation: xian_sun 4s infinite;
    }
/* 势力颜色定义 */
.player>.camp-wrap[data-camp='wei']>.camp-name {
    color: #3c78d8;
    text-shadow: 0 0 5px rgb(69, 119, 255), 0 0 10px rgb(33, 73, 153), 0 0 15px rgb(16, 36, 76);
}
.player>.camp-wrap[data-camp='shu']>.camp-name {
    color: #ff0000;
    text-shadow: 0 0 5px rgb(255, 113, 113), 0 0 10px rgb(255, 19, 19), 0 0 15px rgb(127, 0, 0);
}
.player>.camp-wrap[data-camp='wu']>.camp-name {
    color: #50c878;
    text-shadow: 0 0 5px rgb(163, 229, 167), 0 0 10px rgb(81, 145, 83), 0 0 15px rgb(40, 72, 41);
}
.player > .camp-wrap[data-camp='qun'] > .camp-name {
    color: gold;
    text-shadow: 0 0 5px rgb(255, 215, 0), 0 0 10px rgb(218, 165, 32), 0 0 15px rgb(184, 134, 11);
}
.player > .camp-wrap[data-camp='jin'] > .camp-name {
    color: purple;
    text-shadow: 0 0 5px rgb(128, 0, 128), 0 0 10px rgb(128, 0, 128), 0 0 15px rgb(128, 0, 128);
}
.player>.camp-wrap[data-camp='shen']>.camp-name {
    animation: rainbow 2s infinite;
}
.player>.camp-wrap[data-camp='lun']>.camp-name {   
    font-size: 35px;
     font-family: 'xingkai', sans-serif;
animation: spin 2s linear infinite, rainbowShen 20s ease-in-out infinite;
}
.player > .camp-wrap[data-camp='唐'] > .camp-name {
    color: gold;
    font-size: 28px;
    text-shadow: 2px 2px black;
     font-family: 'huangcao', sans-serif;
}
/* 名字颜色定义 */
.player > .camp-wrap[data-camp='wei'] > .avatar-name {
    color: #00008B; /*深蓝*/
}
.player > .camp-wrap[data-camp='shu'] > .avatar-name {
    color: #FF4500; /*橙红*/
}
.player > .camp-wrap[data-camp='wu'] > .avatar-name {
    color: #00FF7F; /*荧光绿*/
}
.player > .camp-wrap[data-camp='qun'] > .avatar-name {
    color: gold; /*金色*/
}
.player > .camp-wrap[data-camp='jin'] > .avatar-name {
    color: #8A2BE2; /*紫罗兰*/
}
.player>.camp-wrap[data-camp='唐']>.avatar-name {
    animation: rainbow 20s infinite;
}
.player>.camp-wrap[data-camp='shen']>.avatar-name {
    animation: rainbow 20s infinite;
}
.player>.camp-wrap[data-camp='lun']>.avatar-name {
    animation: rainbowShen 30s ease-in-out infinite;
font-size: 18px;
font-family: 'xingkai', sans-serif;
//letter-spacing: 0.1em; /* 或者是 0.2em 等其他数值 */
line-height: 0.8em; /* 或者是 2em 等其他数值 */
}
.player > .camp-wrap[data-camp='chu'] > .avatar-name {
  font-size: 18px;
  animation: rainbowShen 20s ease-in-out infinite, moveUpDown 20s ease-in-out infinite;
}
.rotate-animation {
  animation: rotate 10s infinite linear;
}
@keyframes rotate {
  0% {
    transform: perspective(800px) rotateY(0deg); /*初始角度为0*/
  }
  100% {
    transform: perspective(800px) rotateY(360deg); /*最终角度为360度,即一圈*/
  }
}
@keyframes moveUpDown {
  0% {
    top: 10;
  }
  10% {
    top: 15px;
  }
  20% {
    top: 20px;
  }
  30% {
    top: 25px;
  }
  40% {
    top: 20px;
  }
  50% {
    top: 15px;
  }
  60% {
    top: 10px;
  }
  70% {
    top: 15px;
  }
  80% {
    top: 20px;
  }
  90% {
    top: 15px;
  }
  100% {
    top: 10;
  }
}
/* 势力边框颜色定义 */
    .camp-wrap[data-camp='唐']>.camp-back {
        overflow: hidden;
    }
    .camp-wrap[data-camp='唐']>.camp-back:before {
        content:"";
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: radial-gradient(circle at 30% 107%, #FF8C00, transparent 65%);
        background-size: 200%;
        animation: tang_moon 3s infinite;
    }
    .camp-wrap[data-camp='shen']>.camp-back {
        overflow: scroll;
    }
.camp-wrap[data-camp='shen'] > .camp-back:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: linear-gradient(90deg, 
  rgb(255, 0, 106), 
  rgb(232, 182, 93), 
  rgb(255, 212, 0), 
  rgb(0, 197, 108), 
  rgb(50, 141, 255), 
  rgb(255, 68, 0), 
  rgb(208, 0, 255), 
  rgb(255, 145, 162), 
  rgb(0, 147, 135), 
  rgb(255, 119, 13)
);
    background-size: 200%;
    animation: blood_red 3s infinite;
}
/* 颜色组动画组 */
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
    @keyframes xian_sun {
        100% {
            background-position: -400% 0;
        }
    }
@keyframes blood_red {
    0% {
        background-position: 0%;
    }
    100% {
        background-position: 100%;
    }
}
    @keyframes tang_moon {
        0% {
            background-position: 0 0;
        }
        50% {
            background-position: 100% 0;
        }
        100% {
            background-position: 0 0;
        }
    }
@keyframes rainbow {
    0% {
        color: red;
    }
    16.7% {
        color: orange;
    }
    33.3% {
        color: yellow;
    }
    50% {
        color: green;
    }
    66.7% {
        color: blue;
    }
    83.4% {
        color: purple;
    }
    100% {
        color: red;
    }
@keyframes rainbowShen {
    /* 关键帧 0% - 亮粉红色 */
    0% { color: #FFB6C1; }
    /* 关键帧 14.29% - 粉红色 */
    14.29% { color: #FFC0CB; }
    /* 关键帧 28.57% - 深桔黄色 */
    28.57% { color: #FFA07A; }
    /* 关键帧 42.86% - 鲜黄色 */
    42.86% { color: #FFFF00; }
    /* 关键帧 57.14% - 纯绿色 */
    57.14% { color: #00FF00; }
    /* 关键帧 71.43% - 钢蓝色 */
    71.43% { color: #1E90FF; }
    /* 关键帧 85.71% - 深洋红色 */
    85.71% { color: #8A2BE2; }
    /* 关键帧 100% - 亮粉红色 */
    100% { color: #FFB6C1; }
}
@keyframes changeColor {
    0% { filter: hue-rotate(0deg); }
    25% { filter: hue-rotate(90deg); }
    50% { filter: hue-rotate(180deg); }
    75% { filter: hue-rotate(270deg); }
    100% { filter: hue-rotate(360deg); }
}
`;
            document.head.appendChild(style);
            style = document.createElement('style');
            style.innerHTML = '@keyframes 🌱text-shadow{';
            for (var i = 1; i <= 20; i++) {
                var rand1 = Math.floor(Math.random() * 255),
                    rand2 = Math.floor(Math.random() * 255),
                    rand3 = Math.floor(Math.random() * 255),
                    rand4 = Math.random();
                style.innerHTML += i * 5 + '%{text-shadow: black 0 0 1px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 2px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 5px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 10px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 10px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 20px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 20px}';
            }
            style.innerHTML += '}';
            document.head.appendChild(style);
            lib.group.add('仙');
            lib.translate.仙 = '仙';
            lib.translate.仙2 = '仙';
            lib.groupnature.仙 = '仙';
            lib.groupnature.唐 = '唐';
            lib.group.push('唐');
            lib.group.add('唐');
            lib.translate.唐2 = '唐';
            lib.translate.唐 = '唐';
            //改变滤镜函数
            var style3 = document.createElement('style');
            style3.type = 'text/css';
            style3.innerHTML = `
  .player.lv, .player.likelv, .grayscale1 {
    z-index: 1; 
    filter: hue-rotate(90deg) !important;
    background-color: green;
  }
.player.zi, .player.likezi, .grayscale1 {
  z-index: 1;
  filter: hue-rotate(300deg) !important;
  background-color: purple;
}
`;
            document.head.appendChild(style3);
            //随机滤镜颜色
            // 用一个对象来存储每个元素对应的定时器 ID
            const timerMap = {};
            // 用来存储玩家初始滤镜
            let originalFilter, originalBackgroundColor;
            game.randomizeColor = function (player) {
                // 生成随机颜色
                const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                let color = randomColor;
                // 设置滤镜颜色
                player.style.filter = `hue-rotate(${Math.floor(Math.random() * 360)}deg)`;
                player.style.backgroundColor = color;
            };
            game.startRandomizeColor = function (player) {
                // 先停止之前的定时器(如果存在)
                clearInterval(timerMap[player.id]);
                // 保存原始的样式
                originalFilter = player.style.filter;
                originalBackgroundColor = player.style.backgroundColor;
                // 开始新的定时器,每半秒钟调用一次 randomizeColor 函数
                timerMap[player.id] = setInterval(() => {
                    game.randomizeColor(player);
                }, 500);
            };
            game.stopRandomizeColor = function (player) {
                clearInterval(timerMap[player.id]);
                // 回复原始的样式
                player.style.filter = originalFilter;
                player.style.backgroundColor = originalBackgroundColor;
            };
            //文字变色函数
            var styleSheet = document.createElement('style');
            styleSheet.type = 'text/css';
            var keyframes = `@keyframes rainbowShen {
    0% { color: #FFB6C1; }
    14.29% { color: #FFC0CB; }
    28.57% { color: #FFA07A; }
    42.86% { color: #FFFF00; }
    57.14% { color: #00FF00; }
    71.43% { color: #1E90FF; }
    85.71% { color: #8A2BE2; }
    100% { color: #FFB6C1; }
}`;
            styleSheet.innerHTML = keyframes;
            document.head.appendChild(styleSheet);
            //选将栏显示自定义势力
            /*     var 神魔乱舞_characterDialog = ui.create.characterDialog; // 将原有的选角对话框保存为变量,方便后面调用.
     ui.create.characterDialog = function() { // 重写选角对话框的创建函数
         Array.prototype.神魔乱舞_add = Array.prototype.add; // 将原有的数组add方法(如果有的话)保存为变量,避免冲突.
         Array.prototype.add = function(a) { // 重写数组的add方法
             if (a == 'shen' || a == 'key') { // 判断当前添加的角色ID是否为'shen'或'key'.
                 if (this[0] == 'wei' && this[1] == 'shu' && this[2] == 'wu') { // 如果当前选择的阵营为魏、蜀、吴三国,则添加以下角色
                     if (!this.includes("侠")) this.push("侠");
                     if (!this.includes("联")) this.push("联");
                     if (!this.includes("坦")) this.push("坦");
                     if (!this.includes("chu")) this.push("chu");
                     if (!this.includes("han")) this.push("han");
                     if (!this.includes("lun")) this.push("lun");
                     if (!this.includes("血")) this.push("血");
                     if (!this.includes("音")) this.push("音");
                     if (!this.includes("夜")) this.push("夜");
                     if (!this.includes("月")) this.push("月");
                     if (!this.includes("长城")) this.push("长城");
                     if (!this.includes("仙")) this.push("仙");
                 }
             }
             if (!this.includes(a)) this.神魔乱舞_add(a); // 如果当前选择的角色不存在于已有的选项中,则添加该角色.
         };
         var ret = 神魔乱舞_characterDialog.apply(this, arguments); // 调用原有的选角对话框函数,获取返回值
         Array.prototype.add = Array.prototype.神魔乱舞_add; // 还原数组add方法
         delete Array.prototype.神魔乱舞_add; // 删除保存的自定义add方法
         return ret; // 返回最终的选角对话框对象
     };*/
            //bgm调用函数
            game.神魔乱舞Bgm = function () {
                // 定义名为<神魔乱舞Bgm>的函数
                var bgm = lib.config.神魔乱舞_backgroundmusic; // 获取游戏设置中的背景音乐
                if (bgm && bgm !== 'origin') {
                    // 判断是否存在背景音乐,并且不等于默认值'origin'
                    ui.backgroundMusic.src = 'extension/神魔乱舞/神魔乱舞Bgm/' + bgm + '.mp3'; // 设置背景音乐文件路径
                    ui.backgroundMusic.addEventListener('ended', game.神魔乱舞Bgm); // 添加音乐播放结束后重新播放的事件监听
                } else {
                    game.playBackgroundMusic(); // 没有自定义背景音乐则播放默认的背景音乐
                    ui.backgroundMusic.addEventListener('ended', game.playBackgroundMusic); // 添加音乐播放结束后重新播放的事件监听
                }
            };
            //全局技能阵亡语音播放
            lib.skill._dieAudioyi = {
                // 定义一个名为<_dieAudioyi>的技能对象
                trigger: {
                    global: 'dieBegin', // 触发条件为全局的<dieBegin>事件
                },
                _priority: 2, // 技能优先级为2
                forced: true, // 强制发动该技能
                // 技能是唯一的
                forced: true, // 该技能会频繁触发
                content() {
                    // 技能触发时执行的操作
                    game.playAudio('../extension/神魔乱舞/audio', trigger.player.name); // 播放<神魔乱舞>扩展中与触发者同名的音频
                },
            };
            //特效语音定义
            game.playyi = function (fn, dir, sex) {
                // 定义一个名为<playyi>的函数,接收三个参数:声音文件名、声音文件所在目录和角色性别
                if (lib.config.background_speak) {
                    // 判断是否开启了语音背景
                    if (dir && sex)
                        // 如果有目录和性别,则播放目录+性别+文件名的声音
                        game.playAudio(dir, sex, fn);
                    else if (dir)
                        // 如果只有目录,则播放目录+文件名的声音
                        game.playAudio(dir, fn); // 否则播放默认目录+文件名的声音
                    else game.playAudio('../extension/神魔乱舞/audio', fn);
                }
            };
            //武将牌特效定义
            HTMLDivElement.prototype.yi = function (bg, pos, time, func) {
                var that = this;
                game.broadcastAll(function (that) {
                    // 在游戏中广播执行的函数
                    var img = document.createElement('div'); // 创建一个 div 元素用于显示图片
                    img.setBackgroundImage(bg + '?' + Math.random()); // 设置图片 url
                    if (pos && typeof pos == 'object') {
                        // 如果有指定图片位置,则设置图片位置
                        for (var i in pos) {
                            img.style[i] = pos[i];
                        }
                    }
                    img.style.backgroundSize = 'cover'; // 设置图片大小覆盖整个区域
                    that.appendChild(img); // 将图片插入到指定的元素中
                    setTimeout(function () {
                        // 在指定时间后执行操作
                        if (func)
                            func(img); // 如果有传回调函数,则调用回调函数并将图片元素传入
                        else img.delete(); // 否则直接删除图片元素
                    }, time);
                }, that);
            }; //接收四个参数:图片 url、图片位置、持续时间和回调函数
            //游戏提示函数
            game.alertsay = function (str) {
                var dialog = ui.create.dialog('hidden');
                dialog.classList.add('static');
                dialog.add('<div class="text" style="word-break:break-all;display:inline">' + str + '</div>');
                dialog.classList.add('popped');
                ui.window.appendChild(dialog);
                var width = dialog.content.firstChild.firstChild.offsetWidth;
                if (width < 190) {
                    dialog._mod_height = -16;
                } else {
                    dialog.content.firstChild.style.textAlign = 'left';
                }
                dialog.style.width = width + 16 + 'px';
                lib.placePoppedDialog(dialog, {
                    clientX: (this.offsetLeft + this.offsetWidth / 2) * game.documentZoom,
                    clientY: (this.offsetTop + this.offsetHeight / 4) * game.documentZoom,
                });
                if (dialog._mod_height) {
                    dialog.content.firstChild.style.padding = 0;
                }
                dialog.style.left = 'calc(45%)';
                dialog.style.top = 'calc(30%)';
                setTimeout(function () {
                    dialog.delete();
                }, 2250);
            };
        },
        //启动代码区,游戏启动时就加载这里的内容.建议把需要提前加载的函数和技能写在这里
        precontent() {
            game.kongfunc = function () {
                return game.kong;
            };
            game.kong = {
                set() {
                    return this;
                },
                get player() {
                    return game.me;
                }, //先声明后赋值的,后面调用会是underfined,所以用getter实时获取
                cards: [],
                result: {
                    cards: [],
                },
                gaintag: [],
                forResult() { },
            };
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '神魔乱舞',
                    connect: true,
                    character: {
                        义关羽: ['male', 'shu', 4, ['武圣', '结义', '补刀', '赴会'], []],
                        姜子牙: ['male', 'shen', 0, ['虚体', '封神'], []],
                        神姜子牙: ['male', 'shen', 0, ['虚体', '封神', '回元'], []],
                        灭霸: ['male', '坦', 4, ['宝石', '手套'], []],
                        无限灭霸: ['male', 'shen', 5, ['响指'], []],
                        越女: ['female', '侠', 1, ['剑风', '破竹', '封喉', '剑神', '剑魂'], []],
                        托尼史塔克: ['male', '联', 3, ['富豪', '发明'], []],
                        男人: ['male', '男', 0, ['男炮灰'], []],
                        女人: ['female', '女', 0, ['女战士'], []],
                        女娲: ['female', 'shen', 3, ['造人', '补天', '补天石', '主人'], []],
                        两只小K: ['none', 'qun', 3, ['摆烂', '摸鱼'], []],
                        周瑜: ['male', 'wu', 4, ['赤壁', '郎顾', '天妒'], []],
                        孙策: ['male', 'wu', 4, ['威勇', '惧箭'], []],
                        项羽: ['male', 'chu', 4, ['霸王', '万人敌', '破釜'], []],
                        项少龙: ['male', 'chu', 3, ['墨剑', '潜行', '穿越'], []],
                        韩信: ['male', 'han', 3, ['背水', '杀', '无情', '国士'], []],
                        张衡: ['double', 'lun', 3, ['毁灭', '神域', '机改'], ['des:张衡,无限流小说作者!']],
                        紫霞: ['female', 'shen', 3, ['灯芯', '金铃', '盘丝'], []],
                        青霞: ['female', 'shen', 3, ['灯芯', '神体'], []],
                        马克1号: ['male', '联', 3, ['击飞', '卸甲'], []],
                        马克3号: ['male', '联', 3, ['卸甲', '突袭', '强袭'], []],
                        马克4号: ['male', '联', 3, ['卸甲', '连锁'], []],
                        洛天依: ['female', '音', 3, ['吃货', '音韵'], []],
                        阿卡多: ['male', '血', 0, ['不死'], []],
                        凛音: ['female', '夜', 3, ['转生', '夜刀'], []],
                        两仪式: ['female', '月', 3, ['三重人格'], []],
                        式: ['female', '月', 3, ['三重人格', '冷酷'], []],
                        织: ['female', '月', 3, ['三重人格', '嗜杀'], []],
                        门徒: ['female', 'lun', 3, ['制作'], []],
                        凯: ['male', '长城', 4, ['修罗', '回旋', '极刃'], []],
                        魔凯: ['male', '长城', 4, ['修罗', '回旋', '魔躯'], []],
                        耶稣: ['male', 'shen', 3, ['重生', '神迹'], []],
                        斯科特朗: ['male', '联', 3, ['粒子', '神偷'], []],
                        蚁人: ['male', '联', 3, ['变小'], []],
                        八神庵: ['male', 'shen', 4, ['八稚女', '八酒杯', '气条'], []],
                        王母: ['female', 'shen', 4, ['复原'], []],
                        玉帝: ['male', 'shen', 4, ['召唤', '帝威'], []],
                        刘邦: ['male', 'han', 4, ['卑鄙', '无耻'], []],
                        死神: ['male', 'shen', 0, ['死亡世界'], ['boss']],
                        鸿钧: ['male', 'lun', 3, ['幻化'], []],
                        阎王: ['male', 'lun', 3, ['轮回'], []],
                        地藏王: ['female', 'lun', 3, ['单挑'], []],
                        晓美焰: ['female', 'lun', 3, ['应对'], []],
                        无天: ['male', 'lun', 3, ['无限', '灭世'], []],
                        盘古: ['male', 'lun', 5, ['混沌1'], []],
                        真紫霞: ['female', '仙', 4, ['紫青', '绝色', '嫁妆'], []],
                        真周瑜: ['male', 'lun', 3, ['镇魂', '贪狼', '无名'], []],
                        真关羽: ['male', 'lun', 4, ['红脸', '武曲'], []],
                        真李白: ['male', '唐', 4, ['诗剑', '酒剑', '青莲'], []],
                        孙悟空: ['male', 'shen', 3, ['七十二变', '火眼', '筋斗云', '如意'], []],
                        虞姬: ['female', 'chu', 3, ['同路', '自刎'], []],
                        汉韩信: ['male', 'han', 3, ['点兵', '兵仙'], []],
                        张良: ['male', 'han', 3, ['暗度', '退隐'], []],
                        龙且: ['male', 'chu', 3, ['自负', '晓勇'], []],
                        萧何: ['male', 'han', 4, ['成败'], []],
                        霍去病: ['male', 'han', 3, ['战神', '溃匈'], []],
                        真女娲: ['female', 'shen', 3, ['捏泥', '真造人'], []],
                    },
                    characterTitle: {
                        姜子牙: '一战成神',
                        义关羽: '忠义武圣',
                        灭霸: '外星霸主',
                        越女: '侠女风范',
                        托尼史塔克: '钢铁之心',
                        女娲: '众生之母',
                        周瑜: '火烧赤壁',
                        孙策: '江东小霸王',
                        项羽: '西楚霸王',
                        项少龙: '穿越者',
                        韩信: '枪出如🐉',
                        张衡: '轮回空间',
                        阿卡多: '吸血鬼之王',
                        凛音: '夜刀公主',
                        洛天依: '虚拟偶像',
                        两仪式: '直死魔眼',
                        凯: '凯皇降世',
                        耶稣: '神爱世人',
                        斯科特朗: '微观粒子',
                        刘邦: '卑鄙小人',
                        阎王: '轮回之主',
                        死神: '死亡之神',
                        八神庵: '终焉之炎',
                        盘古: '开天辟地',
                        真关羽: '武曲星君',
                        真周瑜: '贪狼星君',
                        真李白: '诗剑行',
                        玉帝: '玉皇大帝',
                        王母: '皇天之母',
                        紫霞: '佛之灯芯',
                        真紫霞: '仙履奇缘',
                        无天: '无法无天',
                        鸿钧: '幻化万千',
                        晓美焰: '魔法少女',
                        孙悟空: '齐天大圣',
                        虞姬: '虞美人',
                        汉韩信: '国士无双',
                        萧何: '成败萧何',
                        张良: '留文成候',
                        霍去病: '封狼居胥',
                        龙且: '高傲自大',
                        真女娲: '降世造人',
                    },
                    characterSort: {
                        神魔乱舞: {
                            神魔降临: ['姜子牙', '灭霸', '女娲', '张衡', '紫霞', '门徒', '阿卡多', '耶稣', '盘古', '真紫霞', '玉帝', '王母', '无天', '阎王', '地藏王', '死神', '鸿钧', '孙悟空', '真女娲'],
                            忠义三国: ['义关羽', '周瑜', '孙策'],
                            行侠壮义: ['越女', '真周瑜', '真关羽'],
                            复仇者联盟: ['托尼史塔克', '斯科特朗'],
                            楚汉争霸: ['项羽', '刘邦', '虞姬', '汉韩信', '龙且', '张良', '萧何'],
                            大汉王朝: ['霍去病'],
                            寻秦记: ['项少龙'],
                            王者荣耀: ['韩信', '凯', '真李白'],
                            月姬: ['两仪式'],
                            夜下降生: ['凛音'],
                            diy群友: ['两只小K', '洛天依'],
                            kof拳皇: ['八神庵'],
                        },
                    },
                    characterIntro: {
                        义关羽: '羽少事皇叔,誓同生死;皇天后土,实闻斯言.前者下邳失守,所请三事,已蒙恩诺.今探知故主现在袁绍军中,回思昔日之盟,岂容违反？新恩虽厚,旧义难忘.兹特奉书告辞,伏惟照察.其有余恩未报,愿以俟之异日.',
                        姜子牙: '在巅峰时刻,他却因错放九尾被贬下凡间. 失去神力,被世人唾弃. 为重回静虚宫,姜子牙踏上征途.他在北海一酒馆内遇到小九,为了帮小九去幽都山寻找父亲,从而踏上征途,在战后的废墟之上,他重新找到了自我,也发现了当年所有的真相.',
                        神姜子牙: '在巅峰时刻,他却因错放九尾被贬下凡间. 失去神力,被世人唾弃. 为重回静虚宫,姜子牙踏上征途.他在北海一酒馆内遇到小九,为了帮小九去幽都山寻找父亲,从而踏上征途,在战后的废墟之上,他重新找到了自我,也发现了当年所有的真相.',
                        盘古: '盘古是中国神话中创造世界的神灵,他在万物未形之时破开混沌,开辟了天地,创造了人类.在游戏中,盘古的<混沌>状态体现了他在创世之前所处的原始状态,他不受到外界干扰与影响,逐渐积累力量,并最终通过觉醒进入正常状态.同时,盘古手持斧子,这也成为其重要的象征之一.因此,在游戏中加入了斧标记的设定,表现出盘古使用斧子的重要性.盘古的觉醒则代表了他用斧子破开混沌来创世,开始进入正常的战斗状态.技能【开天】和【劈地】则象征着盘古创造世界的过程,为盘古赋予更强大的能力,使得盘古成为一名值得玩家期待的强力角色.最后,盘古具有化生万物的能力,这表明在游戏中即使盘古被击败,盘古也可以通过化生万物来控制其他角色起到最后的关键作用.',
                        灭霸: '灭霸(Thanos),音译萨诺斯,是美国漫威漫画旗下超级反派,初次登场于<钢铁侠>(Iron Man)第55期(1973年1月),是出生在泰坦星的永恒一族,实力极其强大,拥有无法超越的力量、持久力、回复能力和敏捷度.他的皮肤近乎无法摧毁,尤其是在对抗冷、热、电、辐射、毒、衰老和疾病的时候.在他被暗恋者死亡女神诅咒成为永生之前,他就可以不吃任何东西而生存.灭霸的精神也是近乎无敌的,这使得他对于绝大多数精神攻击都能产生免疫能力,与此同时他可以使出能量波或是通过双眼双手释放出等离子能或者宇宙能.同时,灭霸还是一位战略家,拥有远远超越地球科技的知识,有时候乘坐一个装有进攻性武器且能穿越银河的浮空王座,曾经拥有宇宙立方、无限手套、宇宙之心等装备.',
                        托尼史塔克: '托尼·史塔克(Tony Stark,1970.5.29—2023.10)即钢铁侠(Iron Man),全名安东尼·爱德华·<托尼>·史塔克(Anthony Edward ‘Tony’ Stark),是漫威电影宇宙的主要角色之一.1970年,托尼·史塔克出生在美国纽约长岛.14岁时,托尼·史塔克进入MIT学院,遇到了最好的朋友詹姆斯·罗德斯,后继承遇害的父亲霍华德·斯塔克的公司成为史塔克工业的董事长.不久被父亲的同僚奥巴代亚·斯坦尼暗算,在中东展示武器时被恐怖分子<十戒帮>绑架.在那里与科学家侯·伊森一起,制造了方舟反应堆和一套攻守兼备的钢铁装甲杀出重围.回国后,托尼成为<钢铁侠>,对抗反派的同时也参与创立了复仇者联盟.托尼·史塔克随复仇者联盟征战多年,多次对抗超级反派.于2012年对抗洛基、2015年对抗奥创、2018年及2023年对抗灭霸.2023年,托尼·史塔克在与灭霸及其齐塔瑞军团对抗中牺牲,其财产由妻子小辣椒·波兹和蜘蛛侠彼得·帕克继承..',
                        女娲: '女娲,中国上古神话中的创世女神.又称娲皇、女阴,史记女娲氏,是华夏民族人文先始,是福佑社稷之正神.相传女娲造人,一日中七十化变,以黄泥仿照自己抟土造人,创造人类社会并建立婚姻制度;因世间天塌地陷,于是熔彩石以补苍天,斩鳖足以立四极,留下了女娲补天的神话传说.女娲不但是补天救世的英雄和抟土造人的女神,还是一个创造万物的自然之神,神通广大化生万物,每天至少能创造出七十样东西.她开世造物,因此被称为大地之母,是被民间广泛而又长久崇拜的创世神和始母神.',
                        周瑜: '周瑜(175年-210年),字公瑾,庐江舒县(今安徽庐江县西南)人.东汉末年军事家、政治家、谋略家、东吴名将.出身庐江周氏,洛阳令周异之子,从祖周景、从父周忠,都官至太尉,位列三公.周瑜身材高大,容貌俊美,精音律,当时有<曲有误周郎顾>之语.周瑜少与孙策交好,兴平二年,助孙策于曲阿之战中击败刘繇.建安三年起随孙策平定江东.建安五年,孙策遇刺身亡,孙权继任,周瑜将兵赴丧,以中护军的身份与长史张昭共掌众事.建安七年,曹操责权送质,周瑜谏阻纳质,建议孙权占据江南,拥兵观变,确立了割据江东、独立建国的战略方针.建安十三年,曹军兵临江东,周瑜分析曹操兵行四患,力主抗曹,并亲率吴军,以火攻大败曹军于赤壁[.赤壁之战是中国历史上著名的以少胜多的战役之一,此役奠定了汉末<三分天下>的基础.建安十四年,周瑜又率军于南郡之战中大破曹仁、徐晃联军,成功夺取军事重镇江陵[拜偏将军领南郡太守.建安十五年提出<取蜀,并张鲁,联马超,再以襄阳为根据地蚕食曹操,北方可图>的战略.在整装取蜀途中病逝于巴丘,年仅三十六岁.正史上周瑜<性度恢廓>、<雅量高致>、<实奇才也>,他文武兼备,有雄才大略,是东吴势力取得军事成功和割据地位的主要功臣之一.被赞誉为<世间豪杰英雄士,江左风流美丈夫>.',
                        孙策: '孙策(175年—200年5月5日),字伯符,吴郡富春(今浙江省杭州市富阳区)人.破虏将军孙坚长子、吴大帝孙权长兄.东汉末年割据江东一带的军阀,汉末群雄之一,孙吴政权的奠基者之一.<三国演义>称其武勇犹如霸王项羽,绰号<小卑鄙>.孙坚在北方参与平定黄巾、董卓之乱等军事活动,年少的孙策携母迁居舒(今安徽庐江西南),与当地豪族名士周瑜等交友,收合士大夫,深得江、淮人心,颇有声誉.孙坚死后,孙策为继承父亲孙坚未完成的事业而屈事袁术.在庐江血战两年,最终破城,却遭袁术的失信.兴平二年(195年),孙策征得袁术许可,东渡长江,周瑜将兵迎之,进攻樊能、于糜,又在当利口袭击张英,并以曲阿为据点,与扬州刺史刘繇进行决战,大败刘繇.建安元年(196年),率兵进攻会稽王朗和吴郡严白虎.建安二年(197年),袁术僭越称帝后,孙策与袁术决裂;同年夏,被朝廷任命为骑都尉,袭父爵乌程侯,兼任会稽太守.建安三年(198年),朝廷任命孙策为讨逆将军,并封为吴侯.建安四年(199年),孙策击败庐江太守刘勋及刘表部将黄祖.建安五年(200年)初,孙策在夺取豫章郡后统一江东.同年四月,正当孙策准备发兵北上之际,在丹徒狩猎时为许贡三门客所伤,不久后身亡,年仅二十六岁.其弟孙权接掌孙策势力,并于称帝后追谥孙策为长沙桓王.',
                        项羽: '项羽(公元前232年―公元前202年),男,唐宋典籍记载为周王族诸侯国项国后代,姬姓,项氏,名籍,字羽,泗水郡下相县(今江苏省宿迁市)人.秦朝末年政治家、军事家,楚国名将项燕的孙子.项羽少时学书、剑皆无所成,然胸怀反秦大志.秦二世元年(前209年)九月,随项梁起兵会稽(治今江苏苏州),响应陈胜、吴广起义.陈胜死后,又领导反秦武装主力,拥立楚怀王之孙熊心为王.秦将章邯击赵时,奉怀王之命,以次将随上将军宋义率军救赵,因宋义行至安阳后按兵不动,遂于帐中斩之,亲自领兵救巨鹿,破釜沉舟,大败秦军主力.随后招降章邯,坑杀秦卒二十万,进军关中.时刘邦已先据咸阳,谋臣范增力劝项羽在鸿门宴上击杀刘邦,未能实现,与刘邦暂时达成和解,遂屠咸阳,杀秦王子婴,烧秦宫室,掳掠货宝.公元前206年二月,分封诸侯,以刘邦为汉王,自立为西楚霸王,定都彭城(今江苏徐州).不久,田荣、陈余于齐、赵等地举兵反楚,刘邦乘机平定三秦,进逼西楚,楚汉之争随之爆发.项羽虽于战争前期取得胜利,但因分封诸侯,内部矛盾重重,加以战略决策失宜,军事形势日益不利,终被围困垓下,夜闻楚歌四起,以为汉军已得楚地,遂突围至乌江,自刎而死.作为中国军事思想<兵形势>(兵家四势:兵形势、兵权谋、兵阴阳、兵技巧) 的代表人物,项羽是一位以武力出众而闻名的武将.李晚芳评价<羽之神勇,千古无二>.',
                        项少龙: '项少龙,是黄易经典武侠玄幻小说<寻秦记>主人公,二十一世纪中国精英特种部队小队长(电视剧中为香港特警).然而作为接受了二十一世纪各种军事知识及特种军人技能训练的他,在一次时光穿梭机器的实验中被传送回了春秋战国时代,其凭借在现代社会培养出的智慧、能力等优势频频化险为夷;而且最后一步步地帮助嬴政成为日后统一六国的秦始皇.项少龙亦是香港无线电视台于2001年10月15日隆重播出的台庆剧<寻秦记>中的第一男主角以及中心灵魂人物,由香港明星古天乐饰演,为古天乐带来了其个人的第二座香港视帝奖杯荣誉.<项少龙>这一角色仍被不少剧迷津津乐道并且认为是古天乐在其演艺生涯的电视剧领域塑造得最成功的经典艺术形象之一.',
                        韩信: '人可以忍受屈辱到什么时候？答案是:并不能忍受多久.对于一个余孽来说,生存太过艰难.韩信不想死.他想继续活下去.所以他并不是忍受,而是选择.他选择的也不是屈辱,而是生存.因此,当年轻的霸者举起长刀羞辱自己,他选择了从对方的胯下钻过去.当未婚妻被带走成为祭品,他选择了沉默.当更强大的权力者出现,他选择了屈从,自己为自己套上牵狗的锁链.他并非在忍受,只是在等待能够一击必杀的出手时机.还没有成为大陆有名的强者和谋者之前,他就已经开始谋划一场风暴,一场刮过大陆,能在历史上永久留下自己名字的风暴.不信天,不信命.唯一能相信的,只有自己.<必将百倍奉还.',
                        紫霞: '紫霞仙子,是20世纪90年代电影<大话西游>中的角色,由朱茵饰演.紫霞和青霞原是佛祖缠在一起的灯芯,两人前世斗争激烈,所以佛祖就把她们两个卷在一起变成一根灯芯,要她们苦练修行化解这段恩怨,可惜事与愿违,导致比以前斗得更厉害了.在电影里,她们两个用一个躯体,白天是紫霞,晚上是青霞.由于紫霞单纯执着,为爱痴狂,只羡鸳鸯不羡仙,为了寻找自己的爱情不顾一切私下凡间,发现至尊宝是自己的如意郎君后追求至尊宝,未遂,后迷失在大沙漠,被牛魔王救出并遭其逼婚.在影片最后,紫霞和青霞和好了,后来紫霞为保护变成孙悟空的至尊宝被牛魔王一叉刺死,青霞回到了如来佛祖那里当灯芯.',
                        凛音: '在数百年前,凛音和他的哥哥久远被夜刀一族施加了轮回的秘术,因此她获得了一种在肉体死亡后,意识会转移到新的身体的力量,一直重复不断的转生.由于转生的缘故,精神年龄远比外表年龄大,但是有时候喜好之类的还是会根据现有的身体年龄而变化,例如对玩具和甜食感兴趣.',
                        两仪式: 'des:两仪式是奈须蘑菇笔下人物,<空之境界>的女主角.出身于退魔四族之一的两仪家(另三家为七夜、巫浄和浅神),作为人为地生出双重人格者的两仪家的次女出生,多人格的素质得到承认,被指定成为两仪家家主的继承人,在<未来福音>时已经成为了正式家主.起源是『』(音KARA;无字、空空如也),名言是<只要是活着的东西,即使是神也杀给你看>.<式>这个名字具有公式、程式之意,意味这个躯体可如同电脑执行不同程式般执行各种事情.两仪这个姓指的就是太极,式和织分别代表着太极中的两仪,即阴和阳,这样的区分是因如此包含最多事物.式为阴性、女性的人格以及肯定之心;织为阳性,男性人格及否定之心.',
                        凯: '古老的魔道家族,流动着神秘力量的血脉传承,都是因为<罪>而获得的.当年轻人追溯着疯狂血缘的来历了解到这个事实后,变得面目全非.他抛开家乡离去……只留下可怕的传说.当一个家族获得不属于自身的力量,终究是要偿还的.而他背负起了罪恶,去终结罪恶.好些年里,令人颤栗的魔刃如同幽灵漂泊于勇士之地,引发同样身为魔道家族后人们的恐慌.可所有毫无意义的战斗都不能填补灵魂的空虚,只会令绝望与日俱增.他终究消失了,在前往东方的路途上.他想去追溯魔道根源,也许可以令自己摆脱无尽宿命的折磨.他就这样步入滚滚黄沙深处——大片统称为<西域>的土地.而那里,正经历着改变所有人命运的剧变.大漠中的绿洲,稀有珍贵的泉水,深达地下的石井……围绕它们所建立起来的诸国,在漫长的时光为了水源彼此攻讦,相互纷争不断,直到大唐铁骑的来临才有所改变.前所未有强盛的帝国建立起都护府,打开关市,从丝绸之路运来茶和布匹,调解了冲突和争夺.大漠中因此平静数十年之久.可那前往东方的剑士路过时,看到的是毁灭的迹象.王庭沦陷了;都护府沦陷了;当地平民哭号着,唐国的士兵倒于路边奄奄一息,他们都认为对方才是背叛者.冷漠的剑士没兴趣了解谁对谁错,但魔道的泛滥令他厌恶,让他想起昼夜折磨他的噩梦.于是所有人逃离沦陷的城市时,他逆行步入灾厄深处.成群结队的魔物自剑下哀嚎着倒下,可危险的气息越来越浓烈:他想,有个家伙,非常擅长魔道的家伙,在窥视着.他要找出他,他有着这样的自信和骄傲.随之四周变化为熟悉的景象:他的过去,他的宿命,他的噩梦,他的每一次战斗,那幕后邪恶的家伙无法正面与剑士对抗,就要使用幻术令他自绝于痛苦和绝望.这是魔道之刃与魔道之法的对决.他挥出了剑!剑光带着力量和意志斩破邪恶的迷雾,有什么东西发出惨叫和怒吼.幻术消散了.废墟中,剑士立刻明白为何那家伙死命阻止他:小小的少年,恐惧哭泣的魔种混血少年全身笼罩在刻印的法阵中,会被用来作为祭品唤醒某种强大的东西.<哥哥.>少年撕心裂肺的哭喊着.<哥哥.>记忆中刻意想要忘掉的声音,同样呢喃<哥哥.><哥哥.>剑士的记忆飘渺到很久以前,为强盗挟持的女孩伸手向他求援.<哥哥.><哥哥.>冰封的心瞬间瓦解.饱吸生命的恐怖魔物没有抓住它渴求的最后祭品,少年被抛往远处.反倒是踏进法阵的剑士自己遭迷雾拖入黑暗.某种有生命的物体挣扎着,牢牢包裹他,欲将他吞噬.<哥哥.><哥哥.><哥哥.>啜泣的声音越来越远,却清晰入心.身体被撕裂,意志越发清醒.濒临死亡的剑士嘴角泛起冷笑,这邪恶的生物似乎不清楚,自己才是他们中间更可怕,更恐怖的那个.他再次挥剑.穿过大漠的风吹动着高扬的旗帜,凤鸟的图案鲜明如火.它傲然的矗立着,纵使经过七日七夜不断的战斗,宣示着长城一角始终难攻不破.第八天,围困这堡垒的魔种骚动起来,那与他们作对的绯红身影,从它们的来路发起了攻击.最终的战斗从夜晚持续到黎明,数量悬殊的双方始终无法取得决定性胜利:直到一个人,一个活生生的人,旁若无物,摇摇晃晃走进伤痕累累的战场.绯红的巡守者自战场中间捡到了异乡剑士.有生命的魔铠在她眼前快速退却,露出苍白的面庞和伤痕累累的身躯,手里紧紧抓着一把剑.周围是堆砌如山的魔种尸体.<从哪里来？>也不知道他能否听懂.<忘记了.>拙劣的通用语回应.<名字呢？><忘……><铠.>女性将领利落的打断他.<就叫你铠吧.快起来,别装死.>异乡人露出无奈的苦笑.绯红的身影头也不回.<你很强,我们需要你这样的人.留下来吧.也许会后悔.反正你什么都忘了,后悔也无所谓吧.>突然被取名为铠的剑士望着手里的剑.剑上的斑斑点点,让他想起绝境中的沙地,生长的花.铠吗？似乎不错.忘掉锐利的、只会伤人的剑,从此以守护的铠之名存在.他撑起身体,慢慢跟了上去.前方,是延绵到天尽头的长城.以绝望挥剑,着逝者为铠.',
                    },
                    skill: {
                        捏泥: {
                            charlotte: true,
                            mark: true,
                            marktext: '泥',
                            intro: {
                                name: '泥',
                                content: 'cards',
                            },
                            enable: 'phaseUse',
                            //usable:1,
                            init(player) {
                                player.storage.捏泥 = [];
                            },
                            content() {
                                'step 0';
                                if (player.storage.造人成功) {
                                    player
                                        .chooseCard('h', 1, '将1张不同花色手牌置于武将牌上称为"泥"', function (card) {
                                            // 首先,检查 player.storage.捏泥 是否为空
                                            if (player.storage.捏泥.length === 0) {
                                                // 如果捏泥牌堆为空,则接受这张牌
                                                return true;
                                            }
                                            // 检查这张牌是否与捏泥牌堆中的牌类型不同
                                            let isDifferentType = true;
                                            player.storage.捏泥.forEach((捏泥Card) => {
                                                if (捏泥Card.suit === card.suit) {
                                                    isDifferentType = false; // 如果类型相同,则不接受这张牌
                                                }
                                            });
                                            return isDifferentType; // 返回是否接受这张牌的决定
                                        })
                                        .set('ai', function (card) {
                                            return 9 - get.value(card);
                                        });
                                } else {
                                    player
                                        .chooseCard('h', 1, '将1张不同类型手牌置于武将牌上称为"泥"', function (card) {
                                            // 首先,检查 player.storage.捏泥 是否为空
                                            if (player.storage.捏泥.length === 0) {
                                                // 如果捏泥牌堆为空,则接受这张牌
                                                return true;
                                            }
                                            // 检查这张牌是否与捏泥牌堆中的牌类型不同
                                            let isDifferentType = true;
                                            player.storage.捏泥.forEach((捏泥Card) => {
                                                if (get.type(捏泥Card) === get.type(card)) {
                                                    isDifferentType = false; // 如果类型相同,则不接受这张牌
                                                }
                                            });
                                            return isDifferentType; // 返回是否接受这张牌的决定
                                        })
                                        .set('ai', function (card) {
                                            return 9 - get.value(card);
                                        });
                                }
                                ('step 1');
                                if (result.cards && result.cards[0]) {
                                    //player.lose(result.cards[0],ui.special,'toStorage');
                                    player.lose(result.cards, 'toStorage', ui.special, 'visible');
                                    player.$give(result.cards[0], player, 'give');
                                    player.storage.捏泥 = player.storage.捏泥.concat(result.cards[0]);
                                    game.log(player, '将', result.cards[0], '置于武将牌上');
                                }
                            },
                            ai: {
                                threaten: 0.2,
                                order: 5,
                                result: {
                                    player(player, target) {
                                        // 检查捏泥牌堆是否为空
                                        if (player.storage.捏泥.length === 0) {
                                            // 检查玩家手中是否有与捏泥牌堆中不同类型的牌
                                            let hasDifferentTypeCard = false;
                                            player.getCards('h').forEach(function (card) {
                                                // 检查牌的类型是否与捏泥牌堆中的牌不同
                                                let isDifferentType = true;
                                                player.storage.捏泥.forEach(function (捏泥Card) {
                                                    if (get.type(card) === get.type(捏泥Card)) {
                                                        isDifferentType = false;
                                                    }
                                                });
                                                // 如果找到一张不同类型的牌,则设置标志并跳出循环
                                                if (isDifferentType) {
                                                    hasDifferentTypeCard = true;
                                                    return false; // 使用return false跳出forEach循环
                                                }
                                            });
                                            // 如果有不同类型的牌,则返回正数
                                            if (hasDifferentTypeCard) {
                                                return 1; // 返回正数,表示AI应该执行该操作
                                            }
                                        }
                                        // 如果不满足条件,则返回负数
                                        return -1; // 返回负数,表示AI不应该执行该操作
                                    },
                                },
                            },
                        },
                        真造人: {
                            charlotte: true,
                            mark: true,
                            marktext: '泥人',
                            intro: {
                                name: '泥人',
                                content(storage, player, skill) {
                                    var str = '';
                                    // 开始创建表格
                                    str += "<table style='width: 100%; text-align: center; border-collapse: collapse;'>";
                                    // 开始表格头部
                                    str += '<tr>';
                                    str += '<th>泥人</th>';
                                    str += '</tr>';
                                    // 开始表格主体
                                    str += '<tr>';
                                    str += '<td>名字</td>';
                                    str += '<td>' + player.storage.名字 + '</td>';
                                    str += '</tr>';
                                    str += '<tr>';
                                    str += '<td>性别</td>';
                                    str += '<td>' + get.translation(player.storage.性别) + '</td>';
                                    str += '</tr>';
                                    str += '<tr>';
                                    str += '<td>体力</td>';
                                    str += '<td>' + player.storage.体力 + '</td>';
                                    str += '</tr>';
                                    str += '<tr>';
                                    str += '<td>势力</td>';
                                    str += '<td>' + get.translation(player.storage.势力) + '</td>';
                                    str += '</tr>';
                                    str += '<tr>';
                                    str += '<td>技能</td>';
                                    str += '<td>' + get.translation(player.storage.技能哇) + '</td>';
                                    str += '</tr>';
                                    // 结束表格
                                    str += '</table>';
                                    return str;
                                },
                            },
                            init(player) {
                                player.storage.名字 = [];
                                player.storage.势力 = [];
                                player.storage.性别 = [];
                                player.storage.技能哇 = [];
                                player.storage.体力 = 0;
                                player.storage.座位 = 0;
                                player.storage.新势力 = false;
                            },
                            forced: true,
                            trigger: { player: 'phaseAfter' },
                            filter(event, player) {
                                var l = 0;
                                if (player.storage.造人成功) {
                                    for (var i = 0; i < game.dead.length; i++) {
                                        var player1 = game.dead[i];
                                        // 检查玩家的名字是否与当前玩家的存储中的名字相匹配
                                        if (player1.name == player.storage.名字) {
                                            l++;
                                        }
                                    }
                                }
                                if (l > 0) return false;
                                return player.storage.捏泥.length;
                            },
                            content() {
                                'step 0';
                                // 检查是否满足条件
                                if (player.storage.名字.length && player.storage.性别.length && player.storage.势力.length && player.storage.技能哇.length && !player.storage.造人成功) {
                                    event.goto(2);
                                } else {
                                    // 如果不满足条件,检查是否已经造人成功
                                    if (player.storage.造人成功) {
                                        // 如果已经造人成功,执行选择卡片的操作
                                        player.chooseCardButton('移去1-4张泥牌获得一个效果', [1, 4], player.storage.捏泥);
                                        event.goto(6);
                                    } else {
                                        // 如果没有造人成功,执行另一个选择卡片的操作
                                        player.chooseCardButton('移去一张泥牌确认一个属性', 1, player.storage.捏泥);
                                    }
                                }
                                ('step 1');
                                if (result && result.bool) {
                                    var card = result.links[0];
                                    player.storage.捏泥.remove(card);
                                    card.discard();
                                    player.$throw(card);
                                    game.log(player, '将', card, '置入弃牌堆');
                                }
                                ('step 2');
                                event.tp = [];
                                // 检查每个属性是否为空
                                if (player.storage.名字.length === 0) {
                                    event.tp.push('名字');
                                }
                                if (player.storage.性别.length === 0) {
                                    event.tp.push('性别');
                                }
                                if (player.storage.势力.length === 0) {
                                    event.tp.push('势力');
                                }
                                if (player.storage.技能哇.length === 0) {
                                    event.tp.push('技能');
                                }
                                player.chooseControl(event.tp).set('prompt', '请选择你要指定的属性');
                                ('step 3');
                                switch (result.control) {
                                    case '名字':
                                        if (event.isMine()) {
                                            event.Q = prompt('请输入角色名称:');
                                            while (event.Q === null || event.Q.trim() === '') {
                                                event.Q = prompt('请输入角色名称:');
                                            }
                                            if (lib.character.hasOwn(event.Q)) {
                                                event.Q = prompt('角色名称已存在,请重新输入一个不同的名称:');
                                            } // 如果名称已存在,提示用户重新输入
                                            var nameRegex = /^[a-zA-Z\u4e00-\u9fa5]+$/;
                                            while (!nameRegex.test(event.Q)) {
                                                event.Q = prompt('请输入只包含中文和英文字符的角色名称:');
                                            } // 如果输入不符合要求,提示用户重新输入
                                            if (player.storage.名字.length === 0) {
                                                player.storage.名字 = event.Q;
                                                player.storage.体力++;
                                            } // 只有当 player.storage.名字为空时,才将 event.Q 添加到 player.storage.名字中
                                        } else {
                                            // 碎了生成2到3个中文字符作为名字
                                            var randomChineseChars = '';
                                            for (var i = 0; i < Math.floor(Math.random() * 2) + 2; i++) {
                                                // 这里可以使用一个中文字符集来随机选择字符
                                                var randomChar = String.fromCharCode(Math.floor(Math.random() * 20902) + 19968);
                                                randomChineseChars += randomChar;
                                            }
                                            player.storage.名字 = randomChineseChars;
                                            player.storage.体力++;
                                        }
                                        break;
                                    case '性别':
                                        // 用户选择了<性别>,提示用户输入角色性别
                                        if (event.isMine()) {
                                            event.gender = prompt('请输入角色性别(男或女):');
                                            // 只有当 player.storage.性别为空时,才将 event.gender 添加到 player.storage.性别中
                                            while (event.Q === null || event.Q.trim() === '') {
                                                // 如果用户没有输入任何内容,提示用户重新输入
                                                event.gender = prompt('请输入角色性别(男或女):');
                                            }
                                            if (player.storage.性别.length === 0) {
                                                // 确保 event.gender 是小写
                                                event.gender = event.gender.toLowerCase();
                                                // 根据用户输入转换为 male 或 female
                                                if (event.gender === '男') {
                                                    player.storage.性别 = 'male';
                                                    player.storage.体力++;
                                                } else if (event.gender === '女') {
                                                    player.storage.性别 = 'female';
                                                    player.storage.体力++;
                                                } else {
                                                    // 如果输入既不是<男>也不是<女>,提示用户重新输入
                                                    alert('性别输入错误,请输入<男>或<女>');
                                                    // 使用循环重新提示用户输入
                                                    while (event.gender !== '男' && event.gender !== '女') {
                                                        event.gender = prompt('性别输入错误,请重新输入(男或女):');
                                                        event.gender = event.gender.toLowerCase();
                                                    }
                                                    // 重新设置 player.storage.性别
                                                    player.storage.性别 = event.gender;
                                                }
                                            }
                                        } else {
                                            // 随机选择性别
                                            player.storage.性别 = Math.random() < 0.5 ? 'male' : 'female';
                                        }
                                        break;
                                    case '势力':
                                        // 用户选择了<势力>,提示用户输入角色势力
                                        if (event.isMine()) {
                                            event.faction = prompt('请输入角色势力:魏,蜀,吴,晋,神,自建势力');
                                            // 只有当 player.storage.势力为空时,才将 event.faction 添加到 player.storage.势力中
                                            while (event.Q === null || event.Q.trim() === '') {
                                                // 如果用户没有输入任何内容,提示用户重新输入
                                                event.faction = prompt('请输入角色势力:魏,蜀,吴,晋,神,自建势力');
                                            }
                                            if (player.storage.势力.length === 0) {
                                                // 检查输入是否为特定势力名称之一
                                                var specificFactions = {
                                                    吴: 'wu',
                                                    蜀: 'shu',
                                                    魏: 'wei',
                                                    晋: 'jin',
                                                    神: 'shen',
                                                };
                                                if (specificFactions.hasOwn(event.faction)) {
                                                    // 如果是特定势力名称,则转换为拼音
                                                    player.storage.势力 = specificFactions[event.faction];
                                                    player.storage.体力++;
                                                } else {
                                                    // 如果输入的不是特定势力名称,则检查是否为中文字符
                                                    var isChinese = /^[\u4e00-\u9fa5]+$/.test(event.faction);
                                                    if (isChinese) {
                                                        // 如果是中文字符,则保持不变
                                                        // 检查是否为1到2个中文字符
                                                        if (event.faction.length <= 2) {
                                                            player.storage.势力 = event.faction;
                                                            player.storage.新势力 = true;
                                                            player.storage.体力++;
                                                        } else {
                                                            // 如果超过两个中文字符,则提示用户重新输入
                                                            alert('输入的势力名称不能超过2个中文字符.');
                                                            // 使用循环重新提示用户输入
                                                            while (true) {
                                                                event.faction = prompt('输入的势力名称不能超过2个中文字符,请重新输入:');
                                                                if (event.faction.length <= 2) {
                                                                    player.storage.势力 = event.faction;
                                                                    player.storage.体力++;
                                                                    player.storage.新势力 = true;
                                                                    break; // 输入正确,跳出循环
                                                                } else {
                                                                    alert('输入的势力名称不能超过2个中文字符.');
                                                                }
                                                            }
                                                        }
                                                    } else {
                                                        // 如果输入包含非中文字符,则提示用户重新输入
                                                        alert('输入的势力名称只能用中文字符.');
                                                        // 使用循环重新提示用户输入
                                                        while (true) {
                                                            event.faction = prompt('输入的势力名称只能用中文字符,请重新输入:');
                                                            if (/^[\u4e00-\u9fa5]+$/.test(event.faction)) {
                                                                if (event.faction.length <= 2) {
                                                                    player.storage.势力 = event.faction;
                                                                    player.storage.体力++;
                                                                    player.storage.新势力 = true;
                                                                    break; // 输入正确,跳出循环
                                                                } else {
                                                                    alert('输入的势力名称不能超过2个中文字符.');
                                                                }
                                                            } else {
                                                                alert('输入的势力名称只能用中文字符.');
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        } else {
                                            var specificFactions = {
                                                吴: 'wu',
                                                蜀: 'shu',
                                                魏: 'wei',
                                                晋: 'jin',
                                            };
                                            var randomFaction = Object.keys(specificFactions)[Math.floor(Math.random() * Object.keys(specificFactions).length)];
                                            player.storage.势力 = specificFactions[randomFaction];
                                            player.storage.体力++;
                                        }
                                        break;
                                    case '技能':
                                        // 用户选择了<技能>,提示用户输入角色技能
                                        if (event.isMine()) {
                                            event.skill = prompt('请输入角色技能:比如wusheng或者武圣');
                                            // 检查输入是否为空
                                            while (event.skill === null || event.skill.trim() === '') {
                                                event.skill = prompt('请输入角色技能:比如wusheng或者武圣');
                                            }
                                            // 检查输入是否为中文或英文
                                            var isChinese = /^[\u4e00-\u9fa5]+$/.test(event.skill);
                                            var isEnglish = /^[a-zA-Z]+$/.test(event.skill);
                                            if (isChinese) {
                                                // 如果输入的是中文,检查是否有相同的技能
                                                /* var foundSkill = false;
                                                for (var i in lib.character) {
                                                     for (var j = 0; j < lib.character[i][3].length; j++) {
                                                         if (lib.translate[lib.character[i][3][j]] === event.skill) {
                                                             player.storage.技能= lib.character[i][3][j];                    
                                                             player.storage.体力++
                                                             foundSkill = true;
                                                             break;
                                                         }
                                                     }
                                                     if (foundSkill) break;
                                                 }*/
                                                // 如果输入的是中文,检查是否有相同的技能
                                                var foundSkills = []; // 创建一个数组来存储所有匹配的技能
                                                for (var i in lib.character) {
                                                    for (var j = 0; j < lib.character[i][3].length; j++) {
                                                        if (lib.translate[lib.character[i][3][j]] === event.skill) {
                                                            // 如果匹配成功,将匹配的技能添加到 foundSkills 数组中
                                                            foundSkills.push(lib.character[i][3][j]);
                                                        }
                                                    }
                                                }
                                                // 如果找到了匹配的技能
                                                if (foundSkills.length) {
                                                    // 从匹配的技能数组中随机选择一个技能
                                                    var randomSkillIndex = Math.floor(Math.random() * foundSkills.length);
                                                    var randomSkill = foundSkills[randomSkillIndex];
                                                    // 更新玩家的技能和体力
                                                    player.storage.技能哇 = randomSkill;
                                                    player.storage.体力++;
                                                    // 输出或记录选择的技能
                                                    game.log('为泥人指定的技能是: ' + randomSkill);
                                                } else {
                                                    // 如果没有找到匹配的技能,提示用户
                                                    alert('没有找到匹配的技能,请重新输入.');
                                                    // 重新提示用户输入
                                                    event.skill = prompt('请输入角色技能:');
                                                }
                                                /*if (!foundSkill) {
                                                     alert("没有找到匹配的技能,请重新输入.");
                                                     // 重新提示用户输入
                                                     event.skill = prompt("请输入角色技能:");
                                                 }*/
                                            } else if (isEnglish) {
                                                // 如果输入的是英文,获取英文名称
                                                var p = get.info(event.skill);
                                                if (p) {
                                                    player.storage.技能哇 = event.skill;
                                                    player.storage.体力++;
                                                } else {
                                                    alert('输入的英文技能名称不正确,请重新输入.');
                                                    // 重新提示用户输入
                                                    event.skill = prompt('请输入角色技能:');
                                                }
                                            } else {
                                                alert('输入的技能名称只能包含中文或英文字母.');
                                                // 重新提示用户输入
                                                event.skill = prompt('请输入角色技能:');
                                            }
                                        } else {
                                            // 假设lib.character中存储了所有技能的英文名称
                                            var allSkills = Object.keys(lib.character)
                                                .map(function (key) {
                                                    return lib.character[key][3];
                                                })
                                                .flat(); // 将所有技能名称扁平化为一个数组
                                            // 从所有技能中随机选择一个
                                            var randomSkillIndex = Math.floor(Math.random() * allSkills.length);
                                            var randomSkill = allSkills[randomSkillIndex];
                                            // 更新玩家的技能和体力
                                            player.storage.技能哇 = randomSkill;
                                            player.storage.体力++;
                                        }
                                        break;
                                }
                                if (player.storage.捏泥.length && (player.storage.名字.length <= 0 || player.storage.性别.length <= 0 || player.storage.势力.length <= 0 || player.storage.技能哇.length <= 0)) {
                                    event.goto(0);
                                }
                                if (player.storage.名字.length && player.storage.性别.length && player.storage.势力.length && player.storage.技能哇.length) {
                                    // 如果所有属性都已输入,执行 player.chooseBool 函数
                                    player.chooseBool('你已集齐造人的4个要素,是否造人');
                                }
                                ('step 4');
                                if (result.bool) {
                                    var o = Array.from({ length: 8 }, (v, i) => i + 1);
                                    player.chooseControl(o).set('prompt', '请给泥人指定一个座位');
                                } else {
                                    event.finish();
                                }
                                ('step 5');
                                if (result.control) {
                                    player.storage.座位 = result.control;
                                    if (player.storage.新势力) {
                                        //var 势力 = player.storage.势力.toString(); // 将势力名称转换为字符串
                                        var 势力 = player.storage.势力;
                                        // 将势力名称添加到 lib.groupnature 对象中
                                        lib.groupnature[势力] = { 势力 }; // 创建一个空对象作为势力的属性
                                        // 将势力名称添加到 lib.group 数组中
                                        lib.group.push(势力); // 将势力名称作为数组元素添加
                                        // 将势力名称添加到 lib.translate 对象中
                                        lib.translate[势力] = 势力; // 设置势力名称对应的翻译值
                                    }
                                    var 泥人包 = {
                                        character: {},
                                        skill: {
                                            // 这里是技能
                                        },
                                        translate: {},
                                    };
                                    function AvatarList() {
                                        return new Promise((resolve, reject) => {
                                            let folderPath = `extension/神魔乱舞`;
                                            game.getFileList(folderPath, function (folders, files) {
                                                if (files.length) {
                                                    resolve(files);
                                                } // 如果找到了头像,返回头像列表
                                            });
                                        });
                                    }
                                    // 获取头像列表
                                    AvatarList()
                                        .then((avatars) => {
                                            // let avatar = avatars[Math.floor(Math.random() * avatars.length)]; // 随机选择一个头像
                                            // let avatarName = avatar.slice(0, avatar.lastIndexOf('.jpg')); // 获取图片名称
                                            let genderFolder = player.storage.性别 === 'male' ? '男人' : '女人';
                                            泥人包.character[player.storage.名字] = [player.storage.性别, player.storage.势力, player.storage.体力, [player.storage.技能哇], []];
                                            泥人包.translate[player.storage.名字] = player.storage.名字; // 添加名字到translate对象
                                            for (var i in 泥人包.character) {
                                                泥人包.character[i][4].push(`ext:神魔乱舞/image/${genderFolder}.jpg`);
                                            }
                                            // 更新游戏中的角色包
                                            game.addCharacterPack(泥人包);
                                            var players = game.addPlayer(player.storage.座位, player.storage.名字);
                                            if (players) {
                                                game.log(players);
                                                players.getId();
                                                if (!player.storage.造人成功) {
                                                    player.storage.造人成功 = true;
                                                }
                                                if (lib.config.mode == 'guozhan') {
                                                    players.addSkill('donggui2');
                                                    players.identity = player.identity;
                                                    players.setIdentity(player.identity);
                                                    players.draw(num);
                                                    players.maxHp = num;
                                                    players.recover(num);
                                                } else if (lib.config.mode == 'doudizhu') {
                                                    players.side = player.side;
                                                    players.identity = player.identity;
                                                    players.setIdentity(players.identity);
                                                } else if (lib.config.mode == 'identity') {
                                                    var identityMap = {
                                                        fan: { identity: 'fan' },
                                                        zhong: { identity: 'zhong' },
                                                        zhu: { identity: 'zhong' },
                                                    };
                                                    players.identity = identityMap[player.identity].identity;
                                                    players.side = player.side;
                                                    players.setIdentity(players.identity);
                                                    players.node.identity.dataset.color = players.identity;
                                                } else {
                                                    players.identity = player.identity;
                                                    players.side = player.side;
                                                    players.setIdentity('泥人');
                                                    players.node.identity.dataset.color = players.identity;
                                                }
                                            }
                                            lib.translate.捏泥_info = '出牌阶段:你可以将一张不同花色的牌置于武将牌上,称为泥.';
                                            lib.translate.真造人_info = `
    <div style="text-align: center; color: black;">
        <div style="text-shadow: 
            0 0 2px #FF0000, /* 红色 */
            0 0 2px #FF7F00, /* 橙色 */
            0 0 2px #FFFF00, /* 黄色 */
            0 0 2px #00FF00, /* 绿色 */
            0 0 2px #0000FF, /* 蓝色 */
            0 0 2px #4B0082, /* 靛色 */
            0 0 2px #9400D3; /* 紫色 */
        ">
            你制造的人存活获得以下效果:
        </div>
    </div>
    <ol style="text-align: left;">
        <li>弃置1张泥牌:
            <ul>
                <li>♥️️:泥人回复1点体力,若已满则获得1点护甲.</li>
                <li>♠️️:泥人抽取1张牌.</li>
                <li>♣️️:你获得泥人的所有手牌.</li>
                <li>♦️️:你与泥人交换位置.</li>
            </ul>
        </li>
        <li>弃置2张泥牌:
            <ul>
                <li>同色:泥人增加1点体力上限.</li>
                <li>不同色:其他玩家在你的下个回合开始前,对你的使用牌的目标将改为泥人.</li>
            </ul>
        </li>
        <li>弃置3张泥牌:
            <ul>
                <li>相同类型:你可以从场上其他角色的三个未被泥人所拥有的随机技能中选择一个赋予给泥人.如果无法选择或选择取消,则你将摸三张牌.</li>
                <li>不同类型:你获得泥人的回合控制权,持续1个回合.</li>
            </ul>
        </li>
        <li>弃置4张泥牌:
            <ul>
                <li>相同点数:将撤销当前泥人并重置制造流程,此后在制造过程中将不允许选择输入技能.</li>
                <li>不同点数:你抽取4张牌.</li>
            </ul>
        </li>
    </ol>
    `;
                                            event.finish();
                                        })
                                        .catch((error) => {
                                            alert(error.message);
                                        });
                                    event.finish();
                                }
                                ('step 6');
                                // - card.suit 返回卡片的花色
                                // - get.color(card) 返回卡片的颜色
                                // - get.type(card) 返回卡片的类型
                                // - get.number 返回卡片的点数
                                // 主逻辑
                                if (result && result.bool) {
                                    // 记录技能使用
                                    // 遍历result.links数组
                                    for (var i of result.links) {
                                        var card = i; // 定义当前遍历到的卡片
                                        // 从捏泥存储中移除卡片
                                        player.storage.捏泥.remove(card);
                                        // 弃置卡片
                                        card.discard();
                                        // 将卡片扔到弃牌堆
                                        player.$throw(card);
                                        // 记录游戏日志
                                        game.log(player, '将', card, '置入弃牌堆');
                                    }
                                    // 同步玩家捏泥存储
                                    // 更新玩家的标记
                                    // 根据result.links数组的长度执行不同的逻辑
                                    switch (result.links.length) {
                                        case 1:
                                            // 一张卡片,检测花色
                                            var card = result.links[0];
                                            var suit = card.suit; // 获取卡片的花色
                                            // 这里可以添加针对特定花色的逻辑
                                            if (suit === 'heart') {
                                                // 如果花色是♥️️,执行♥️️的逻辑
                                                // 遍历game.players数组
                                                for (var i of game.players) {
                                                    //QQ
                                                    var player1 = i;
                                                    // 检查玩家的名字是否与当前玩家的存储中的名字相匹配
                                                    if (player1.name == player.storage.名字) {
                                                        // 如果泥人的体力未满,则回复体力
                                                        if (player1.hp < player1.maxHp) {
                                                            player1.recover();
                                                        } else {
                                                            // 如果泥人的体力已满,则增加护甲
                                                            player1.changeHujia(1);
                                                        }
                                                    }
                                                }
                                            } else if (suit === 'spade') {
                                                // 如果花色是♠️️,执行♠️️的逻辑
                                                for (var i of game.players) {
                                                    //QQ
                                                    var player1 = i;
                                                    // 检查玩家的名字是否与当前玩家的存储中的名字相匹配
                                                    if (player1.name == player.storage.名字) {
                                                        // 泥人摸一张牌
                                                        player1.draw();
                                                    }
                                                }
                                            } else if (suit === 'club') {
                                                // 如果花色是♣️️,执行♣️️的逻辑
                                                for (var i of game.players) {
                                                    //QQ
                                                    var player1 = i;
                                                    // 检查玩家的名字是否与当前玩家的存储中的名字相匹配
                                                    if (player1.name == player.storage.名字) {
                                                        // 获得泥人的全部手牌
                                                        player.gain(player1.getCards('h'), player1, 'giveAuto');
                                                    }
                                                }
                                            } else if (suit === 'diamond') {
                                                // 如果花色是♦️️,执行♦️️的逻辑
                                                for (var i of game.players) {
                                                    //QQ
                                                    var player1 = i;
                                                    // 检查玩家的名字是否与当前玩家的存储中的名字相匹配
                                                    if (player1.name == player.storage.名字) {
                                                        // 如果玩家的体力未满,则增加体力
                                                        game.swapSeat(player, player1);
                                                    }
                                                }
                                            }
                                            break;
                                        case 2:
                                            // 两张卡片,检测颜色是否相同
                                            var card1 = result.links[0];
                                            var card2 = result.links[1];
                                            if (get.color(card1) === get.color(card2)) {
                                                // 如果颜色相同,执行相应的逻辑
                                                for (var i of game.players) {
                                                    //QQ
                                                    var player1 = i;
                                                    // 检查玩家的名字是否与当前玩家的存储中的名字相匹配
                                                    if (player1.name == player.storage.名字) {
                                                        // 获得泥人的全部手牌
                                                        player1.gainMaxHp();
                                                    }
                                                }
                                            } else {
                                                for (var i of game.players) {
                                                    //QQ
                                                    var player1 = i;
                                                    // 检查玩家的名字是否与当前玩家的存储中的名字相匹配
                                                    if (player1.name == player.storage.名字) {
                                                        // 让泥人帮你挡牌一回合
                                                        player.addTempSkill('挡牌', { player: 'phaseBefore' });
                                                    }
                                                }
                                            }
                                            break;
                                        case 3:
                                            // 三张卡片,检测类型是否相同
                                            var card1 = result.links[0];
                                            var card2 = result.links[1];
                                            var card3 = result.links[2];
                                            if (get.type(card1) === get.type(card2) && get.type(card2) === get.type(card3)) {
                                                // 如果类型相同,执行相应的逻辑
                                                var o = []; // 初始化一个空数组用于存储技能
                                                // 遍历所有玩家
                                                for (var i of game.players) {
                                                    //QQ
                                                    var player2 = i; // 获取当前遍历到的玩家对象
                                                    // 确保当前遍历到的玩家不是当前玩家,并且不是当前玩家存储中的名字所代表的玩家
                                                    if (player2 !== player && player2.name !== player.storage.名字) {
                                                        // 遍历当前玩家的技能
                                                        for (var j = 0; j < player2.skills.length; j++) {
                                                            var skill = player2.skills[j]; // 获取当前玩家的一个技能
                                                            o.push(skill); // 将技能添加到数组 o 中
                                                        }
                                                    }
                                                }
                                                for (var i of game.players) {
                                                    //QQ
                                                    var player1 = i;
                                                    // 检查玩家的名字是否与当前玩家的存储中的名字相匹配
                                                    if (player1.name == player.storage.名字) {
                                                        o = filter((q) => !player1.skills.includes(q));
                                                    } //QQQ
                                                }
                                                var skills2 = o.randomGets(3);
                                                var dialog = ui.create.dialog('forcebutton');
                                                dialog.add('选择获得一项技能令' + player.storage.名字 + '获得');
                                                for (var i = 0; i < skills2.length; i++) {
                                                    if (lib.translate[skills2[i] + '_info']) {
                                                        var translation = get.translation(skills2[i]);
                                                        if (translation[0] == '新' && translation.length == 3) {
                                                            translation = translation.slice(1, 3);
                                                        } else {
                                                            translation = translation.slice(0, 2);
                                                        }
                                                        var item = dialog.add('<div class="popup pointerdiv" style="width:100%;display:inline-block"><div class="skill">【' + translation + '】</div><div>' + lib.translate[skills2[i] + '_info'] + '</div></div>');
                                                    }
                                                }
                                                if (skills2.length) {
                                                    player.chooseControl(skills2, 'cancel2').set('dialog', dialog);
                                                } else {
                                                    event.dialog = ui.create.dialog('forcebutton');
                                                    // 创建一个简单的对话框,只显示一条消息
                                                    event.dialog.add('无法为 ' + player.storage.名字 + ' 的角色增加技能,因为没有可用的技能.返还你3张牌');
                                                    // 设置3秒后自动关闭对话框
                                                    setTimeout(function () {
                                                        event.dialog.close();
                                                    }, 3000); // 3000毫秒等于3秒
                                                    player.draw(3);
                                                    game.log('无法为 ' + player.storage.名字 + ' 的角色增加技能,因为没有可用的技能.');
                                                }
                                            }
                                            break;
                                        case 4:
                                            // 四张卡片,检测点数是否相同
                                            var card1 = result.links[0];
                                            var card2 = result.links[1];
                                            var card3 = result.links[2];
                                            var card4 = result.links[3];
                                            if (card1.number === card2.number && card2.number === card3.number && card3.number === card4.number) {
                                                // 如果点数相同,执行相应的逻辑
                                                for (var i of game.players) {
                                                    //QQ
                                                    var player1 = i;
                                                    // 检查玩家的名字是否与当前玩家的存储中的名字相匹配
                                                    if (player1.name == player.storage.名字) {
                                                        // 重置造人
                                                        // 检查player.storage.造人是否为数组类型
                                                        game.removePlayer(player1);
                                                        player.storage.名字 = [];
                                                        player.storage.技能哇 = [];
                                                        player.storage.势力 = [];
                                                        player.storage.性别 = [];
                                                        player.storage.体力 = 0;
                                                        player.storage.座位 = 0;
                                                        player.storage.新势力 = false;
                                                        delete player.storage.造人成功;
                                                    }
                                                }
                                            } else {
                                                // 如果点数不同
                                                player.draw(4);
                                            }
                                            break;
                                        default:
                                            // 如果卡片数量不在1到4之间,可以执行默认逻辑
                                            break;
                                    }
                                }
                                ('step 7');
                                if (result.control != 'cancel2') {
                                    var link = result.control;
                                    for (var i of game.players) {
                                        //QQ
                                        var player1 = i;
                                        // 检查玩家的名字是否与当前玩家的存储中的名字相匹配
                                        if (player1.name == player.storage.名字) {
                                            // 获得泥人的全部手牌
                                            player1.addSkill(link);
                                            //  link 是一个技能对象
                                            game.log(player1, '获得了技能', '【' + get.translation(link) + '】');
                                            // 首先,将 player.storage.技能 从字符串改为数组
                                            player.storage.技能哇 = [player.storage.技能哇];
                                        }
                                    }
                                    // 将 link 添加到 player.storage.技能 数组中
                                    player.storage.技能哇.push(link);
                                } else {
                                    player.draw(3);
                                }
                            },
                        },
                        挡牌: {
                            mark: true,
                            intro: {
                                content(storage, player, skill) {
                                    var str;
                                    str = '当你成为卡牌的目标时是改为' + player.storage.名字 + '为目标';
                                    return str;
                                },
                            },
                            nopop: true,
                            _priority: 15,
                            trigger: {
                                target: 'useCardToTarget',
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                var o = 0;
                                for (var i of game.players) {
                                    //QQ
                                    var player1 = i;
                                    // 检查玩家的名字是否与当前玩家的存储中的名字相匹配
                                    if (player1.name == player.storage.名字) {
                                        o++;
                                    }
                                }
                                if (o <= 0) return false;
                                return player.isAlive() && event.player != player && event.target == player;
                            },
                            content() {
                                for (var i of game.players) {
                                    //QQ
                                    var player1 = i;
                                    // 检查玩家的名字是否与当前玩家的存储中的名字相匹配
                                    if (player1.name == player.storage.名字) {
                                        player.storage.挡牌 = player1;
                                    }
                                }
                                var target = player.storage.挡牌;
                                trigger.player.line(target, 'green');
                                game.log(player, '将卡牌的目标改为了' + player.storage.挡牌);
                                trigger.targets.remove(player);
                                trigger.targets.push(target);
                                trigger.target = target;
                            },
                        },
                        成败: {
                            enable: 'phaseUse',
                            filterCard: true,
                            usable: 1,
                            selectCard: 1,
                            prompt: '①你弃置一张手牌选择一名角色,其进行一次判定,若判定牌为黑色则其获得一个成,若为红色则其获得一个败,否则其摸两张牌②若①的目标为你,则你①的判断牌视为蓝色',
                            filterTarget(card, player, target) {
                                return true;
                            },
                            content() {
                                'step 0';
                                if (!player.storage.颜色) {
                                    player.storage.颜色 = Object.assign({}, lib.color);
                                }
                                if (!player.storage.花色) {
                                    player.storage.花色 = Object.assign({}, lib.translate);
                                }
                                var target = targets[0];
                                if (target == player) {
                                    lib.color = {
                                        // ...lib.color,  // 保留原有的颜色定义
                                        blue: ['', 'club', 'heart', 'diamond', 'none'], // 新增蓝色对应♣️️和♠️️
                                    };
                                    lib.translate.blue = '蓝色';
                                    lib.translate.spade = '🔵'; // ♠️️
                                    lib.translate.club = '💠'; // ♣️️
                                    lib.translate.diamond = '🔷'; // ♦️️
                                    lib.translate.heart = '💙'; // ♥️️
                                } else {
                                    lib.color = player.storage.颜色;
                                    lib.translate = player.storage.花色;
                                }
                                target.judge(function (card) {
                                    if (get.color(card) === 'black') {
                                        target.addTempSkill('cheng', { player: 'phaseAfter' });
                                        game.log(target, '获得了成');
                                        return 1;
                                    } else if (get.color(card) === 'red') {
                                        target.addTempSkill('bai', { player: 'phaseAfter' });
                                        game.log(target, '获得了败');
                                        return 0;
                                    } else {
                                        target.draw(2);
                                        game.log(player, '本次判定牌的颜色视为', '<span style="color: blue;">' + lib.translate.blue + '</span>');
                                        return 1;
                                    }
                                });
                                ('step 1');
                                /*lib.color = {
                                black:['club','spade'],
                                red:['diamond','heart'],
                                none:['none'],
                                }*/
                                lib.color = player.storage.颜色;
                                lib.translate = player.storage.花色;
                            },
                            ai: {
                                order: 5,
                                result: {
                                    target(player, target) {
                                        return get.attitude(player, target) > 0 ? 1 : -1;
                                    },
                                },
                            },
                        },
                        cheng: {
                            mark: true,
                            marktext: '成',
                            intro: {
                                name: '成',
                                content: '造成的伤害加1',
                            },
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        bai: {
                            mark: true,
                            marktext: '败',
                            intro: {
                                name: '败',
                                content: '受到的伤害加1',
                            },
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        暗度: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: true,
                            selectCard: [1, Infinity],
                            selectTarget: 1,
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            filter(event, player) {
                                return player.countCards('h') >= 1;
                            },
                            content() {
                                'step 0';
                                player.$give(cards, target);
                                target.gain(cards, player);
                                target.addTempSkill('暗度1', { player: '暗度1After' });
                            },
                            ai: {
                                order: 5,
                                result: {
                                    target(player, target) {
                                        return get.attitude(player, target) > 0 ? 1 : 0;
                                    },
                                },
                            },
                        },
                        暗度1: {
                            trigger: { player: 'phaseBegin' },
                            forced: true,
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    if (card.suit != 'heart') {
                                        return 1;
                                    } else {
                                        return -1;
                                    }
                                });
                                ('step 1');
                                if (result.card.suit !== 'heart') {
                                    player.damage().source = null;
                                }
                            },
                        },
                        退隐: {
                            trigger: { player: '暗度After' },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h') == 0;
                            },
                            content() {
                                player.addTempSkill('退隐1', { player: 'phaseBegin' });
                            },
                        },
                        退隐1: {
                            mark: true,
                            marktext: '隐',
                            intro: {
                                name: '隐',
                                content: '免疫非属性伤害',
                            },
                            trigger: { player: 'damageBegin' },
                            forced: true,
                            _priority: 15,
                            filter(event, player) {
                                if ((event = event.nature)) return false;
                                return true;
                            },
                            content() {
                                trigger.cancel();
                                game.log(player, '免疫带属性伤害');
                            },
                        },
                        自负: {
                            trigger: { player: 'juedouAfter' },
                            forced: true,
                            filter(event, player) {
                                return event.target && event.target.isAlive() && player.isAlive();
                            },
                            content() {
                                var target = trigger.target;
                                if (target.isDead()) return;
                                // 随机选择一个技能
                                var skills = ['wusheng', 'longdan'];
                                var randomSkill = skills[Math.floor(Math.random() * skills.length)];
                                // 添加所选的技能给目标
                                target.addTempSkill(randomSkill, 'juedouAfter');
                                player.useCard({ name: 'juedou' }, target, false).throw = true;
                            },
                        },
                        晓勇: {
                            trigger: { player: 'phaseUseBegin' },
                            filter(event, player) {
                                return !player.isDisabled(1) || !player.isDisabled(2) || !player.isDisabled(3) || !player.isDisabled(4) || !player.isDisabled(5);
                            },
                            content() {
                                'step 0';
                                var equipOptions = [];
                                if (!player.isDisabled(1)) equipOptions.push('废除武器栏');
                                if (!player.isDisabled(2)) equipOptions.push('废除防具栏');
                                if (!player.isDisabled(3)) equipOptions.push('废除+1坐骑栏');
                                if (!player.isDisabled(4)) equipOptions.push('废除-1坐骑栏');
                                if (!player.isDisabled(5)) equipOptions.push('废除宝物栏');
                                player.chooseControl(equipOptions);
                                ('step 1');
                                var selectedOption = result.control;
                                if (selectedOption === '废除武器栏') {
                                    player.disableEquip(1);
                                } else if (selectedOption === '废除防具栏') {
                                    player.disableEquip(2);
                                } else if (selectedOption === '废除+1坐骑栏') {
                                    player.disableEquip(3);
                                } else if (selectedOption === '废除-1坐骑栏') {
                                    player.disableEquip(4);
                                } else if (selectedOption === '废除宝物栏') {
                                    player.disableEquip(5);
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                player.gain(game.createCard('juedou'));
                            },
                        },
                        点兵: {
                            group: '点兵1',
                            mark: true,
                            marktext: '兵',
                            intro: {
                                name: '兵',
                                content: 'cards',
                            },
                            trigger: { global: 'gameDrawAfter' },
                            enable: 'phaseUse',
                            usable: 1,
                            notemp: true,
                            init(player) {
                                player.storage.点兵 = [];
                            },
                            content() {
                                'step 0';
                                player.chooseCard('h', [1, Infinity], '将任意张手牌置于武将牌上作为<兵>');
                                ('step 1');
                                if (result.cards && result.cards.length) {
                                    player.lose(result.cards, ui.special, 'toStorage');
                                    player.$give(result.cards, player, 'give');
                                    player.storage.点兵 = player.storage.点兵.concat(result.cards);
                                    game.log(player, '将', result.cards, '置于武将牌上称为<兵>');
                                }
                            },
                        },
                        点兵1: {
                            enable: 'chooseToRespond',
                            filter(event, player) {
                                if (event.responded) return false;
                                return player.storage.点兵.length && event.filterCard({ name: 'sha' }, player);
                            },
                            chooseButton: {
                                //选择按钮
                                dialog(event, player) {
                                    //显示
                                    return ui.create.dialog('兵', player.storage.点兵, 'hidden');
                                    //显示
                                },
                                backup(links, player) {
                                    //视为技部分
                                    var card = links[0]; // 获取被选中的卡牌
                                    if (card) {
                                        game.log(card);
                                        player.storage.点兵.remove(card); // 移除点兵中的兵牌
                                        // 同步存储
                                        player.$throw(card);
                                    }
                                    return {
                                        selectCard: 0, //把0张(手牌)
                                        filterCard() {
                                            return false;
                                        }, //不用选
                                        viewAs: {
                                            //视为
                                            name: 'sha', //视为杀
                                        },
                                        prompt: '将一张兵牌当杀打出',
                                    };
                                },
                            },
                            ai: {
                                respondSha: true,
                            },
                        },
                        兵仙: {
                            trigger: {
                                target: 'useCardToPlayer',
                            },
                            logTarget: 'player',
                            check(event, player) {
                                if (get.attitude(player, event.player) > 0) {
                                    return false;
                                }
                                return player.countCards('h', { name: 'sha' }) > 0 || player.storage.点兵.length;
                            },
                            _priority: 10,
                            filter(event, player, target) {
                                if (event.targets.length > 1) return false;
                                return event.player != player && event.target == player && !player.isDying();
                            },
                            content() {
                                event.cardx = get.copy(trigger.card);
                                event.cardx.name = 'juedou';
                                trigger.parent.card = event.cardx;
                                game.log(player, '将', trigger.card, '改为了', event.cardx);
                            },
                            ai: {
                                expose: 0.1,
                            },
                        },
                        溃匈: {
                            trigger: { player: 'phaseUseBegin' },
                            forced: true,
                            filter(event, player) {
                                var players = game.filterPlayer();
                                var count = 0;
                                var groups = [];
                                for (var i of players) {
                                    if (i !== player && !groups.includes(i.group)) {
                                        groups.push(i.group);
                                        count++;
                                    }
                                }
                                return player.countCards('h') > 0 && count > 0;
                            },
                            check(card) {
                                return 6 - get.value(card);
                            },
                            content() {
                                'step 0';
                                var players = game.filterPlayer();
                                var count = 0;
                                var groups = [];
                                for (var i of players) {
                                    if (i !== player && !groups.includes(i.group)) {
                                        groups.push(i.group);
                                        count++;
                                    }
                                }
                                player
                                    .chooseCard('h', [1, count], '将至多' + count + '张牌替换为【杀】', function (card) {
                                        return true;
                                    })
                                    .set('ai', function (card) {
                                        return 6 - get.value(card);
                                    });
                                ('step 1');
                                if (result.cards) {
                                    var cards = result.cards;
                                    player.lose(cards, ui.special);
                                    for (var i = 0; i < cards.length; i++) {
                                        player.gain(game.createCard('sha'), 'draw');
                                    }
                                }
                            },
                            ai: {
                                threaten: 0.2,
                                order: 5,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        战神: {
                            group: ['战神1', '战神2'],
                            enable: 'phaseUse', //出牌阶段发动
                            usable: 1,
                            selectCard: [1, Infinity], //弃置一张以上
                            filterCard(card) {
                                //牌的限制条件
                                return card.name == 'sha';
                            },
                            position: 'h', //手牌
                            prompt: '将任意张杀当做杀使用,你以此法使用的杀伤害基数等于你本次杀的数量',
                            check(event, player, card) {
                                return true;
                            },
                            viewAs: {
                                //视为
                                name: 'sha', //杀
                            },
                            precontent() {
                                if (!player.storage.战神杀) player.storage.战神杀 = {};
                                player.storage.战神杀 = event.result.cards.length;
                            },
                            ai: {
                                order: 5,
                                result: {
                                    target: -1,
                                },
                            },
                        },
                        战神1: {
                            trigger: { player: 'useCard' },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                var evt = event;
                                return evt.card.name == 'sha' && evt.skill == '战神';
                            },
                            content() {
                                trigger.baseDamage = player.storage.战神杀;
                            },
                        },
                        战神2: {
                            trigger: { player: 'useCardToPlayered' },
                            forced: true,
                            filter(event, player) {
                                return player.storage.战神杀 > 1 && event.card.name == 'sha' && !event.parent.directHit.includes(event.target);
                            },
                            logTarget: 'target',
                            content() {
                                trigger.target.addTempSkill('战神闪', 'shaAfter');
                                var id = trigger.target.playerid;
                                var map = trigger.parent.customArgs;
                                if (!map[id]) map[id] = {};
                                var point = player.storage.战神杀;
                                if (typeof map[id].shanRequired == 'number') {
                                    map[id].shanRequired++;
                                } else {
                                    map[id].shanRequired = point; // 直接要求目标玩家打出 x张闪
                                }
                            },
                        },
                        战神闪: {
                            group: '战神闪1',
                            mark: true,
                            marktext: '闪',
                            init(player) {
                                player.storage.战神闪 = 0;
                            },
                            intro: {
                                name: '闪',
                                content: '你已打出#个闪',
                            },
                            trigger: { player: 'useCardBegin' },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'shan';
                            },
                            content() {
                                'step 0';
                                player.storage.战神闪++;
                            },
                        },
                        战神闪1: {
                            trigger: { player: 'damageBegin' },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && !player.storage.战神闪 > 0;
                            },
                            content() {
                                'step 0';
                                trigger.num -= player.storage.战神闪;
                                ('step 1');
                                player.storage.战神闪 = 0;
                            },
                        },
                        同路: {
                            trigger: { global: 'gameStart' },
                            content() {
                                'step 0';
                                var targets = game.filterPlayer(function (player) {
                                    return player.sex == 'male';
                                });
                                if (targets.length) {
                                    player.chooseTarget(true, function (card, player, target) {
                                        // 只显示男性角色供选择
                                        return target.sex == 'male';
                                    });
                                }
                                ('step 1');
                                if (result.targets && result.targets[0]) {
                                    result.targets[0].addSkill('同德');
                                    player.addSkill('同德');
                                }
                            },
                        },
                        同德: {
                            marktext: '',
                            mark: true, // 指定技能标记类型
                            intro: {
                                // 技能介绍
                                name: '绑定',
                                content(storage, player) {
                                    var str;
                                    game.countPlayer(function (current) {
                                        //场上所有玩家作用于当前玩家
                                        if (current.hasSkill('同德') && current != player) {
                                            str = '你可以将' + get.translation(current) + '的手牌当作自己的手牌使用或者打出';
                                        }
                                    });
                                    return str;
                                },
                            },
                            init(player) {
                                /*  game.countPlayer(function(current) { //场上所有玩家作用于当前玩家
                                 if(current.hasSkill('同德')&&current!=player) { 
                                lib.translate.同德="绑定"
                                }
                                })*/
                            },
                            audio: 'ext:神魔乱舞/audio:2',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            hiddenCard(player, name) {
                                if (lib.inpile.includes(name) && name != 'wuxie') return true;
                            },
                            filter(event, player) {
                                if (event.responded) return false;
                                var target1 = false;
                                var m = 0;
                                game.countPlayer(function (current) {
                                    //场上所有玩家作用于当前玩家
                                    if (current.hasSkill('同德') && current != player) {
                                        if (!current.countCards('h')) {
                                            m++;
                                        } else {
                                            target1 = current;
                                        }
                                    }
                                });
                                if (m >= 1) return false;
                                if (!target1) return false;
                                for (var i of lib.inpile) {
                                    if (i != 'wuxie' && event.filterCard({ name: i }, player, event) && target1.countCards('h', { name: i })) return true;
                                }
                                return false;
                            },
                            delay: false,
                            content() {
                                'step 0';
                                game.countPlayer(function (current) {
                                    //场上所有玩家作用于当前玩家
                                    if (current.hasSkill('同德') && current != player) {
                                        if (!player.storage.角色) {
                                            player.storage.角色 = current;
                                        }
                                    }
                                });
                                ('step 1');
                                var evt = event.getParent(2);
                                evt.set('同德', true);
                                var aozhan = player.hasSkill('aozhan');
                                var cards = player.storage.角色.getCards('h');
                                player
                                    .chooseButton(['相随:选择要' + (evt.name == 'chooseToUse' ? '使用' : '打出') + get.translation(player.storage.角色) + '的牌', cards])
                                    .set('filterButton', function (button) {
                                        return _status.event.cards.includes(button.link);
                                    })
                                    .set(
                                        'cards',
                                        cards.filter(function (card) {
                                            if (aozhan && card.name == 'tao') {
                                                return (
                                                    evt.filterCard(
                                                        {
                                                            name: 'sha',
                                                            cards: [card],
                                                        },
                                                        evt.player,
                                                        evt
                                                    ) ||
                                                    evt.filterCard(
                                                        {
                                                            name: 'shan',
                                                            cards: [card],
                                                        },
                                                        evt.player,
                                                        evt
                                                    )
                                                );
                                            }
                                            return evt.filterCard(card, evt.player, evt);
                                        })
                                    )
                                    .set('ai', function (button) {
                                        var evt = _status.event.getParent(3);
                                        if (evt && evt.ai) {
                                            var tmp = _status.event;
                                            _status.event = evt;
                                            var result = (evt.ai || event.ai1)(button.link, _status.event.player, evt);
                                            _status.event = tmp;
                                            return result;
                                        }
                                        return 1;
                                    });
                                ('step 2');
                                var evt = event.getParent(2);
                                if (result.bool && result.links && result.links.length) {
                                    var name = result.links[0].name,
                                        aozhan = player.hasSkill('aozhan') && name == 'tao';
                                    if (aozhan) {
                                        name = evt.filterCard(
                                            {
                                                name: 'sha',
                                                cards: [card],
                                            },
                                            evt.player,
                                            evt
                                        )
                                            ? 'sha'
                                            : 'shan';
                                    }
                                    if (evt.name == 'chooseToUse') {
                                        game.broadcastAll(
                                            function (result, name) {
                                                lib.skill.同德_backup.viewAs = { name: name, cards: [result] };
                                                lib.skill.同德_backup.prompt = '选择' + get.translation(result) + '的目标';
                                            },
                                            result.links[0],
                                            name
                                        );
                                        evt.set('_backupevent', '同德_backup');
                                        evt.backup('同德_backup');
                                    } else {
                                        evt.result.card = result.links[0];
                                        if (aozhan) evt.result.card.name = name;
                                        evt.result.cards = [result.links[0]];
                                        evt.redo();
                                        return;
                                    }
                                } else player.storage.角色.update();
                                evt.goto(1);
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, effect) {
                                        if (get.tag(card, 'respondShan')) return 0.7;
                                        if (get.tag(card, 'respondSha')) return 0.7;
                                    },
                                },
                                order: 11,
                                respondShan: true,
                                respondSha: true,
                                result: {
                                    player(player) {
                                        if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                        return 1;
                                    },
                                },
                            },
                        },
                        同德_backup: {
                            sourceSkill: '同德',
                            precontent() {
                                var name = event.result.card.name;
                                event.result.cards = event.result.card.cards;
                                event.result.card = event.result.cards[0];
                                event.result.card.name = name;
                            },
                            filterCard() {
                                return false;
                            },
                            selectCard: -1,
                        },
                        /*相随:{
                         trigger:{global:"gameStart"},
                         content () {
                         "step 0"
                               var targets = game.filterPlayer(function (player) {
                                 return player.sex == "male";
                               });
                         if (targets.length) {     
                         player.chooseTarget(true, function (card, player, target) {
                                     // 只显示男性角色供选择
                                     return target.sex == "male";
                                   });
                         }
                         "step 1"
                         if(result.targets&&result.targets[0]){
                         result.targets[0].addSkill("绑定")
                         player.addSkill("绑定")
                         }
                         }
                         },
                         绑定:{
                         group:["绑定1","同装"],
                         trigger:{player:'phaseUseBegin'},
                         forced:true,
                         filter(event,player) {
                               var u=false
                         game.countPlayer(function(current) { //场上所有玩家作用于当前玩家
                          if(current.hasSkill('绑定')&&current!=player&&current.countCards("h")>0) { 
                         u=true
                         }
                         })
                         return u
                          },
                         content:function(){//内容:
                             // 暂停事件,等待玩家确认后继续执
                         "step 0"
                         game.countPlayer(function(current) { //场上所有玩家作用于当前玩家
                          if(current.hasSkill('绑定')&&current!=player) { 
                         current.storage.卡牌=[]
                          var cardsInHand = current.getCards("h");
                         for(var i=0;i<cardsInHand.length;i++){
                         current.storage.卡牌.push(cardsInHand[i])
                         }
                         player.gain(current.storage.卡牌,current,'giveAuto')
                         }
                         })
                         },
                         },
                         绑定1:{
                         trigger:{player:"phaseUseAfter"},
                         forced:true,
                         content:function(){//内容:
                         game.countPlayer(function (current) {
                               if (current.hasSkill("绑定") && current != player) {
                                 var cardsToGive = [];
                                 var cardsInHand = player.getCards("h");
                         if (current.storage.卡牌 && current.storage.卡牌.length) { // 添加判断条件
                                 for (var i = 0; i < cardsInHand.length; i++) {
                                   var card = cardsInHand[i];
                                   for (var j = 0; j < current.storage.卡牌.length; j++) {
                                     var card1 = current.storage.卡牌[j];
                                     if (
                                       card.suit == card1.suit &&
                                       card.number == card1.number &&
                                       card.name==card1.name
                                     ) {
                                       cardsToGive.push(card);
                                     }
                                   }
                                 }    
                         }  
                                 current.gain(cardsToGive, player, 'giveAuto')
                               }
                             });
                         }
                         },
                         */
                        自刎: {
                            forceDie: true,
                            trigger: { global: 'dieAfter' },
                            filter(event, player) {
                                return event.player && event.player != player && game.zhu != player && event.player.hasSkill('绑定');
                            },
                            content() {
                                //内容:
                                var zs = (player.die().source = player);
                                if (zs) {
                                    var players1 = game.addPlayer(5, '项羽');
                                    players1.getId();
                                    players1.identity = player.identity;
                                    players1.showIdentity();
                                    players1.draw(4);
                                    players1.phase('nodelay');
                                }
                            },
                        },
                        同装: {
                            forced: true,
                            trigger: {
                                global: ['equipAfter', 'loseAsyncAfter', 'loseAfter', 'useSkillAfter', 'discardAfter'],
                            },
                            filter(event, player) {
                                return event.player && event.player != player && event.player.hasSkill('绑定') && event.card && get.type(event.card) == 'equip';
                            },
                            content() {
                                //内容:
                                'step 0';
                                if (!player.storage.技能) {
                                    player.storage.技能 = [];
                                }
                                ('step 1');
                                var triggerskills = trigger.player.getSkills('e');
                                var playerSkills = player.getSkills('e');
                                var players = player.getSkills();
                                // 将 trigger.player 的技能列表添加到当前玩家身上
                                for (var j = 0; j < triggerskills.length; j++) {
                                    var skillName = triggerskills[j];
                                    // 如果当前玩家没有该装备技能,则添加该技能
                                    if (!playerSkills.includes(skillName)) {
                                        player.addSkill(skillName);
                                        player.storage.技能.push(skillName);
                                    }
                                }
                                // 将超过的技能从当前玩家身上移除
                                for (var i of players) {
                                    var skillName1 = i;
                                    // 如果当前玩家拥有的技能不在 trigger.player 的技能列表中,则移除该技能
                                    if (!triggerskills.includes(skillName1) && player.storage.技能.includes(skillName1)) {
                                        player.removeSkill(skillName1);
                                        player.storage.技能.remove(skillName1);
                                    }
                                }
                            },
                        },
                        灭世: {
                            init(player) {
                                player.storage.mieShiUsed = false;
                            },
                            trigger: { global: 'damageBegin' },
                            filter(event, player) {
                                return event.num >= 4 && !player.storage.mieShiUsed;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('灭世');
                                player.storage.mieShiUsed = true;
                                // 将所有玩家的体力设为0
                                for (var i of game.players) {
                                    //QQ
                                    var target = i;
                                    if (target == player) continue;
                                    target.maxHp = 0;
                                    target.clearSkills();
                                    target.discard(target.getCards('h'));
                                    target.discard(target.getCards('e'));
                                    target.discard(target.getCards('j'));
                                    target.discard(target.getCards('s'));
                                }
                            },
                        },
                        如意杀技能: {
                            mark: true,
                            marktext: '金箍棒',
                            intro: {
                                name: '金箍棒',
                                content(storage) {
                                    // if (!storage) storage = lib.card.如意金箍棒.distance.attackFrom
                                    var o = [];
                                    var u = get.translation(lib.card.sha.nature); // 获取所有属性
                                    for (var i = 0; i < u.length; i++) {
                                        var trimmedAttr = u[i].replace(/[、]/g, ''); // 使用正则表达式替换点号和逗号
                                        if (trimmedAttr) {
                                            o.push(trimmedAttr);
                                        }
                                    }
                                    if (!storage) storage = Math.abs(lib.card.如意金箍棒.distance.attackFrom);
                                    //return '<li>攻击范围:' + storage + '<br><li>你使用杀和如意杀可以转换为【'+o+'】属性';
                                    return '<li>攻击范围:' + storage + '<br><li>你使用杀和如意杀可以转换为【' + o.join('｜') + '】属性';
                                },
                            },
                            trigger: { player: 'useCard1' },
                            //_priority:7,
                            forced: true,
                            filter(event, player) {
                                if (event.card.name == 'sha') return true;
                            },
                            audio: 'ext:神魔乱舞/audio:true',
                            content() {
                                'step 0';
                                var card = trigger.cards[0];
                                if (card && card.storage.如意 == true) {
                                    player.getStat().card.sha--;
                                    player.removeGaintag('如意', card);
                                }
                                game.log(card);
                                var t = [];
                                event.attributes = lib.card.sha.nature; // 获取所有属性
                                for (var i = 0; i < event.attributes.length; i++) {
                                    t.push(event.attributes[i]);
                                }
                                player.chooseControl(t).set('ai', function () {
                                    return Math.floor(Math.random() * event.attributes.length); // 随机选择一个属性
                                });
                                ('step 1');
                                event.attr = result.control;
                                trigger.card.nature = event.attr; // 设置触发卡牌的属性
                            },
                        },
                        如意: {
                            mod: {
                                cardname(card, player) {
                                    if (card.name != '如意金箍棒') {
                                        if (get.type(card, null, false) == 'equip' && card.hasGaintag('如意')) {
                                            return 'sha';
                                        }
                                    }
                                },
                            },
                            round: false,
                            forced: true,
                            group: '如意1',
                            trigger: {
                                global: ['gameStart'],
                            },
                            content() {
                                player.getCards = function () {
                                    return lib.element.player.getCards.apply(this, arguments).filter((q) => q.name != '如意金箍棒');
                                }; //QQQ
                            },
                        },
                        如意1: {
                            trigger: {
                                global: 'gameDrawAfter',
                                player: 'gainEnd',
                            },
                            forced: true, // 该技能为强制触发技能
                            content() {
                                // 检查是否为 gameDraw 事件
                                // 获取玩家手牌中的所有装备牌
                                var handCards = player.getCards('h'); // 确保手牌数组存在
                                // 使用 for 循环遍历手牌
                                for (var i = 0; i < handCards.length; i++) {
                                    var card = handCards[i];
                                    // 检查卡牌是否为装备牌
                                    if (get.type(card) === 'equip' && !card.hasGaintag('如意')) {
                                        // 如果是装备牌,给它添加标签
                                        player.addGaintag(card, '如意');
                                        card.storage.如意 = true;
                                    }
                                }
                                // 检查 trigger.cards 是否存在且长度大于等于1
                                if (trigger.cards && trigger.cards.length >= 1) {
                                    // 如果只有一张卡牌,直接检查是否为装备牌
                                    if (trigger.cards.length === 1 && get.type(trigger.cards[0]) == 'equip') {
                                        player.addGaintag(trigger.cards[0], '如意');
                                        trigger.cards[0].storage.如意 = true;
                                    } else {
                                        // 如果有多张卡牌,遍历检查每张卡牌是否为装备牌
                                        for (var i = 0; i < trigger.cards.length; i++) {
                                            if (get.type(trigger.cards[i]) == 'equip' && !card.hasGaintag('如意')) {
                                                player.addGaintag(trigger.cards[i], '如意');
                                                trigger.cards[i].storage.如意 = true;
                                            }
                                        }
                                    }
                                }
                            },
                        },
                        筋斗云: {
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 1;
                                },
                                globalTo(from, to, distance) {
                                    return distance + 1;
                                },
                            },
                        },
                        妖: {
                            init(player) {
                                // 初始化玩家存储的<复原>数组
                                player.storage.妖 = player.getCards('h');
                            },
                            intro: {
                                name: '妖',
                                content: 'cards', // 技能说明
                            },
                            marktext: '妖', //
                            mark: true, // 标记处于激活状态,
                            forced: true, // 该技能为强制触发技能
                            trigger: { player: ['loseEnd', 'gainEnd', 'useCardEnd', 'respondEnd', 'equipEnd'] },
                            content() {
                                player.storage.妖 = player.getCards('h');
                            },
                        },
                        火眼: {
                            forced: true, // 该技能为强制触发技能
                            trigger: { player: 'damageBegin' },
                            filter(event, player) {
                                // 过滤器函数,返回值为布尔型
                                return event.source && event.source != player && !event.source.hasSkill('妖');
                            },
                            content() {
                                //内容:
                                trigger.source.addSkill('妖');
                            },
                            ai: {
                                viewHandcard: true,
                                skillTagFilter(player, tag, arg) {
                                    if (!arg.hasSkill('妖')) return false;
                                },
                            },
                        },
                        七十二变: {
                            group: '七十二变死',
                            enable: 'phaseUse', //出牌阶段发动
                            usable: 1, //每回合一次(因为回合外没有你的出牌阶段,实际为出牌阶段限一次)
                            content() {
                                //内容:
                                'step 0';
                                var list = [];
                                for (var i in lib.character) {
                                    if (lib.character[i][1] != 'shen' && lib.character[i][1] != 'lun' && lib.character[i][1] != 'xian' && lib.character[i][1] != 'mo' && lib.character[i][1] != 'gui' && !lib.character[i][4].includes('boss')) {
                                        list.push(i);
                                    }
                                }
                                var players = game.players.concat(game.dead);
                                for (var i of players) {
                                    list.remove(i.name);
                                    list.remove(i.name1);
                                    list.remove(i.name2);
                                }
                                player
                                    .chooseButton(false)
                                    .set('ai', function (button) {
                                        return Math.random();
                                    })
                                    .set('createDialog', ['请选择变身为一名未上场的非［神魔轮仙鬼］其中一个势力角色!', [list.randomGets(72), 'character']]);
                                ('step 1');
                                if (result.links && result.links[0]) {
                                    player.reinit(player.name, result.links[0], player.maxHp);
                                    player.addSkill('七十二变死');
                                    var card = player.getCards('e', { name: '如意金箍棒' });
                                    player.lose(card);
                                } else {
                                    player.getStat('skill').七十二变--;
                                }
                            },
                        },
                        七十二变死: {
                            forced: true, // 该技能为强制触发技能
                            trigger: {
                                player: 'dieBegin',
                                source: 'dieBegin',
                            },
                            content() {
                                //内容:
                                'step 0';
                                if (player.name != '孙悟空') {
                                    player.reinit(player.name, '孙悟空');
                                }
                                ('step 1');
                                player.equip(game.createCard('如意金箍棒'));
                            },
                        },
                        青莲: {
                            // 技能名称
                            enable: 'phaseUse', // 技能类型,表示在出牌阶段可以使用
                            usable: 1, // 可以使用的次数
                            charlotte: true, //标记为夏洛特专属技能
                            superCharlotte: true, //标记为超级夏洛特专属技能
                            line: true, // 是否需要连线
                            filter(event, player) {
                                // 过滤函数,返回 true 表示可以使用该技能
                                return player.storage.诗剑 > 3; // 根据条件判断是否可以使用该技能
                            },
                            content() {
                                // 技能效果的具体实现
                                game.pause(); // 暂停游戏
                                game.saveConfig('神魔乱舞_backgroundmusic', '天忍藏锋');
                                game.神魔乱舞Bgm();
                                player.style.zIndex = 999; // 设置当前玩家的 z-index 值
                                var steps = [
                                    // 定义一个数组,每个元素表示一步的移动
                                    [0, 'calc(20% - 120px)', 'calc(50% - 60px)'],
                                    [400, 'calc(40% - 120px)', 'calc(30% - 60px)'],
                                    [600, 'calc(50% - 120px)', 'calc(20% - 60px)'],
                                    [800, 'calc(60% - 120px)', 'calc(30% - 60px)'],
                                    [1000, 'calc(80% - 120px)', 'calc(50% - 60px)'],
                                    [1200, 'calc(60% - 120px)', 'calc(70% - 60px)'],
                                    [1400, 'calc(50% - 120px)', 'calc(80% - 60px)'],
                                    [1600, 'calc(40% - 120px)', 'calc(70% - 60px)'],
                                    [1800, 'calc(20% - 120px)', 'calc(50% - 60px)'],
                                    [2000, 'calc(50% - 120px)', 'calc(20% - 60px)'],
                                    [2200, 'calc(80% - 120px)', 'calc(50% - 60px)'],
                                    [2400, 'calc(50% - 120px)', 'calc(80% - 60px)'],
                                    [2600, 'calc(20% - 120px)', 'calc(50% - 60px)'],
                                    [2800, 'calc(40% - 120px)', 'calc(30% - 60px)'],
                                    [3000, 'calc(50% - 120px)', 'calc(20% - 60px)'],
                                    [3200, 'calc(60% - 120px)', 'calc(30% - 60px)'],
                                    [3400, 'calc(80% - 120px)', 'calc(50% - 60px)'],
                                    [3600, 'calc(60% - 120px)', 'calc(70% - 60px)'],
                                    [3800, 'calc(50% - 120px)', 'calc(80% - 60px)'],
                                    [4000, 'calc(40% - 120px)', 'calc(70% - 60px)'],
                                    [4200, 'calc(20% - 120px)', 'calc(50% - 60px)'],
                                ];
                                var originalBgColor = document.body.style.backgroundColor; // 记录原始背景色
                                steps.forEach(function (step) {
                                    // 循环执行每一步
                                    setTimeout(function () {
                                        var offsetX = Math.floor(Math.random() * 10) - 5; // 随机偏移量 x
                                        var offsetY = Math.floor(Math.random() * 10) - 5; // 随机偏移量 y
                                        player.style.left = 'calc(' + step[1] + +offsetX + 'px)'; // 修改玩家的 left 值
                                        player.style.top = 'calc(' + step[2] + +offsetY + 'px)'; // 修改玩家的 top 值
                                        if (step[0] % 400 == 0) {
                                            // 每400ms一个循环,可以通过对400取模得到循环周期
                                            document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // 黑色半透明背景
                                        } else if (step[0] % 400 == 200) {
                                            document.body.style.backgroundColor = 'rgba(255, 0, 0, 0.8)'; // 红色半透明背景
                                        }
                                    }, step[0]);
                                });
                                setTimeout(function () {
                                    // 执行完成后的清理工作
                                    player.style.zIndex = player.storage.诗剑2;
                                    player.removeAttribute('style');
                                    document.body.style.backgroundColor = originalBgColor;
                                    game.resume();
                                }, 4400);
                                var list = game.filterPlayer((current) => current != player); // 过滤出不包含当前玩家的玩家列表
                                player.storage.诗剑 = 0; // 修改当前玩家的 storage
                                //同步标记
                                var num = Math.min(list.length, 4); // 确定目标个数
                                var damage = 4; // 造成的伤害值
                                var targets = []; // 目标列表
                                for (var i = 0; i < num; i++) {
                                    var target = list.randomGet(); // 随机选择一个目标
                                    if (!targets.includes(target)) {
                                        // 如果该目标之前没有选择过,则加入目标列表中
                                        targets.push(target);
                                    }
                                }
                                if ((damage / targets.length) % 2 == 0) {
                                    // 根据目标数目判断伤害类型
                                    var ave_damage = damage / targets.length;
                                    for (var i = 0; i < targets.length; i++) {
                                        targets[i].damage(ave_damage, 'fire'); // 对目标造成火属性的伤害
                                    }
                                    player.changeHujia(); // 改变护甲值
                                } else {
                                    var ave_damage = damage - targets.length;
                                    for (var i = 0; i < targets.length; i++) {
                                        targets[i].damage(ave_damage, 'thunder'); // 对目标造成雷属性的伤害
                                    }
                                    player.draw(); // 抽一张牌
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        酒剑1: {
                            // 技能名称
                            mod: {
                                // 修改游戏规则或数据
                                cardUsable(card, player, num) {
                                    // 修改卡牌可用次数
                                    if (card.name == 'jiu' || card.name == 'sha') return num + 1000; // 如果是<酒>或<杀>牌,则可用次数增加1000
                                },
                            },
                        },
                        酒剑: {
                            enable: 'phaseUse', //出牌阶段发动
                            usable: 1, //每回合一次
                            selectCard: 1, //弃置一张
                            filterCard(card, player) {
                                return get.type(card) == 'basic';
                            }, //必须是基本牌
                            prompt() {
                                return '弃置一张基本牌进入数独小游戏';
                            },
                            filter(event, player) {
                                return player.countCards('h', {
                                    type: 'basic',
                                }); //你有基本牌时才能发动
                            },
                            content() {
                                if (event.isMine()) {
                                    //QQQ
                                    ui.arena.hide();
                                    var puzzle = generatePuzzle();
                                    // 创建游戏面板
                                    game.pause(); //游戏暂停
                                    var gameBoard = document.createElement('table');
                                    gameBoard.style.borderCollapse = 'collapse';
                                    gameBoard.style.margin = '20px auto';
                                    // gameBoard.style.backgroundColor = '#f5f5f5';
                                    gameBoard.style.position = 'fixed';
                                    gameBoard.style.top = '50%';
                                    gameBoard.style.left = '50%';
                                    gameBoard.style.width = '400px';
                                    gameBoard.style.height = '400px';
                                    // 创建一个数组,存储不同颜色的值
                                    var colors = ['rgba(255,0,0,0.8)', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#d2f53c', '#fabebe', '#008080', '#e6194B'];
                                    // 定义一个计数器
                                    var counter = 0;
                                    // 使用定时器每隔一秒钟更改游戏面板的背景颜色
                                    setInterval(function () {
                                        // 使用数组中的颜色值
                                        gameBoard.style.backgroundColor = colors[counter];
                                        // 将计数器递增,这样下一次就可以显示数组中的下一个颜色
                                        counter++;
                                        // 如果计数器达到了数组大小,则将计数器重置为0
                                        if (counter >= colors.length) {
                                            counter = 0;
                                        }
                                    }, 1000);
                                    gameBoard.style.transform = 'translate(-50%, -50%)';
                                    gameBoard.style.zIndex = '999';
                                    game.log(player, '进入了数独小游戏');
                                    for (var i = 0; i < 9; i++) {
                                        var row = document.createElement('tr');
                                        for (var j = 0; j < 9; j++) {
                                            var cell = document.createElement('td');
                                            cell.style.width = '30px';
                                            cell.style.height = '30px';
                                            cell.style.border = '1px solid #bbb';
                                            cell.style.textAlign = 'center';
                                            cell.style.fontSize = '16px';
                                            cell.style.fontWeight = 'bold';
                                            if (puzzle[i][j] !== 0) {
                                                cell.innerHTML = puzzle[i][j];
                                                cell.style.color = '#ffd700';
                                                //cell.style.color = '#333';
                                            } else {
                                                var input = document.createElement('input');
                                                input.type = 'text';
                                                input.maxLength = '1';
                                                input.style.width = '28px';
                                                input.style.height = '28px';
                                                input.style.padding = '0';
                                                input.style.border = 'none';
                                                input.style.textAlign = 'center';
                                                input.style.fontSize = '16px';
                                                input.style.fontWeight = 'bold';
                                                input.dataset.row = i;
                                                input.dataset.col = j;
                                                cell.appendChild(input);
                                            }
                                            row.appendChild(cell);
                                        }
                                        gameBoard.appendChild(row);
                                    }
                                    // 创建<检查>按钮
                                    var checkButton = document.createElement('button');
                                    checkButton.innerHTML = '检查';
                                    checkButton.style.display = 'block';
                                    checkButton.style.margin = '20px auto';
                                    checkButton.style.display = 'block';
                                    checkButton.style.position = 'fixed';
                                    checkButton.style.bottom = '30%';
                                    checkButton.style.left = '30%';
                                    checkButton.style.zIndex = '10000';
                                    checkButton.addEventListener('click', function () {
                                        var flag = true;
                                        for (var i = 0; i < 9; i++) {
                                            for (var j = 0; j < 9; j++) {
                                                var cell = gameBoard.rows[i].cells[j];
                                                if (puzzle[i][j] === 0) {
                                                    var input = cell.querySelector('input');
                                                    var value = parseInt(input.value);
                                                    if (isNaN(value) || value < 1 || value > 9) {
                                                        flag = false;
                                                        alert('第 ' + (i + 1) + ' 行,第 ' + (j + 1) + ' 列,数字无效!');
                                                        break;
                                                    } else if (!check(i, j, value)) {
                                                        flag = false;
                                                        alert('第 ' + (i + 1) + ' 行,第 ' + (j + 1) + ' 列,数字冲突!');
                                                        break;
                                                    }
                                                }
                                            }
                                        }
                                        if (flag) {
                                            game.showTipMessage('恭喜你,数独完成!请点击[完成]按钮获得高级奖励', 1);
                                            //document.body.removeChild(gameDiv);
                                        }
                                    });
                                    // 创建<退出>按钮
                                    var exitButton = document.createElement('button');
                                    exitButton.innerHTML = '退出';
                                    exitButton.style.display = 'block';
                                    exitButton.style.margin = '20px auto';
                                    exitButton.style.position = 'fixed';
                                    exitButton.style.bottom = '10%';
                                    exitButton.style.left = '30%';
                                    exitButton.style.zIndex = '10000';
                                    exitButton.addEventListener('click', function () {
                                        document.body.removeChild(gameDiv);
                                        game.resume();
                                        ui.arena.show();
                                        game.showTipMessage('你这么快就放弃了？算了!送你个安慰奖.获得1张酒', 2);
                                        player.gain(game.createCard('jiu'), 'gain2');
                                        game.log(player, '退出了数独小游戏,获得安慰奖励');
                                    });
                                    // 创建<完成>按钮
                                    var finishButton = document.createElement('button');
                                    finishButton.innerHTML = '完成';
                                    finishButton.style.display = 'block';
                                    finishButton.style.margin = '20px auto';
                                    finishButton.style.position = 'fixed';
                                    finishButton.style.bottom = '10%';
                                    finishButton.style.right = '30%';
                                    finishButton.style.zIndex = '10000';
                                    finishButton.addEventListener('click', function () {
                                        var flag = true;
                                        for (var i = 0; i < 9; i++) {
                                            for (var j = 0; j < 9; j++) {
                                                var cell = gameBoard.rows[i].cells[j];
                                                if (puzzle[i][j] === 0) {
                                                    var input = cell.querySelector('input');
                                                    var value = parseInt(input.value);
                                                    if (isNaN(value) || value < 1 || value > 9) {
                                                        flag = false;
                                                        alert('第 ' + (i + 1) + ' 行,第 ' + (j + 1) + ' 列,数字无效!游戏未能完成');
                                                        break;
                                                    } else if (!check(i, j, value)) {
                                                        flag = false;
                                                        alert('第 ' + (i + 1) + ' 行,第 ' + (j + 1) + ' 列,数字冲突!还需继续努力!');
                                                        break;
                                                    }
                                                }
                                            }
                                        }
                                        if (flag) {
                                            game.showTipMessage('恭喜你,数独完成!获得两张酒一张杀,且本回合使用酒和杀无次数限制', 2);
                                            document.body.removeChild(gameDiv);
                                            game.resume();
                                            ui.arena.show();
                                            game.log(player, '数独小游戏完成,获得高级奖励');
                                            player.gain(game.createCard('sha'), 'gain2');
                                            player.gain(game.createCard('jiu'), 'gain2');
                                            player.gain(game.createCard('jiu'), 'gain2');
                                            player.addTempSkill('酒剑1', {
                                                player: 'phaseAfter',
                                            });
                                        }
                                    });
                                    var solveButton = document.createElement('button');
                                    solveButton.innerHTML = 'ai填充';
                                    solveButton.style.display = 'block';
                                    solveButton.style.margin = '20px auto';
                                    solveButton.style.position = 'fixed';
                                    solveButton.style.bottom = '50%';
                                    solveButton.style.left = '30%';
                                    solveButton.style.zIndex = '10000';
                                    solveButton.addEventListener('click', function () {
                                        var result = solve(puzzle);
                                        if (result.success) {
                                            // 填充结果到游戏面板中
                                            for (var i = 0; i < 9; i++) {
                                                for (var j = 0; j < 9; j++) {
                                                    if (puzzle[i][j] === 0) {
                                                        var input = gameBoard.rows[i].cells[j].querySelector('input');
                                                        input.value = result.puzzle[i][j];
                                                        puzzle[i][j] = result.puzzle[i][j];
                                                    }
                                                }
                                            }
                                            // 刷新游戏面板来显示解出的数字
                                            gameBoard.innerHTML = '';
                                            initGameBoard(puzzle);
                                            // game.showTipMessage('恭喜你,数独完成!失去一点体力,获得1张杀和1张酒',1);
                                            // 显示 puzzle 数组中的所有数字
                                            for (var i = 0; i < 9; i++) {
                                                var rowStr = '';
                                                for (var j = 0; j < 9; j++) {
                                                    rowStr += puzzle[i][j] + ' ';
                                                }
                                                game.log('数独填充:', rowStr);
                                            }
                                            game.resume();
                                            game.log(player, '数独小游戏由ai完成,获得低级奖励');
                                            ui.arena.show();
                                            player.loseHp();
                                            player.gain(game.createCard('sha'), 'gain2');
                                            player.gain(game.createCard('jiu'), 'gain2');
                                            //document.body.removeChild(gameDiv);
                                            setTimeout(function () {
                                                document.body.removeChild(gameDiv);
                                            }, 1000);
                                        } else {
                                            alert('无解!');
                                        }
                                    });
                                    function initGameBoard(puzzle) {
                                        gameBoard.innerHTML = '';
                                        for (var i = 0; i < 9; i++) {
                                            var row = document.createElement('tr');
                                            for (var j = 0; j < 9; j++) {
                                                var cell = document.createElement('td');
                                                cell.style.width = '30px';
                                                cell.style.height = '30px';
                                                cell.style.border = '1px solid #bbb';
                                                cell.style.textAlign = 'center';
                                                cell.style.fontSize = '16px';
                                                cell.style.fontWeight = 'bold';
                                                if (puzzle[i][j] !== 0) {
                                                    cell.innerHTML = puzzle[i][j];
                                                    cell.style.color = '#ffd700';
                                                    //cell.style.color = '#333';
                                                } else {
                                                    var input = document.createElement('input');
                                                    input.type = 'text';
                                                    input.maxLength = '1';
                                                    input.style.width = '28px';
                                                    input.style.height = '28px';
                                                    input.style.padding = '0';
                                                    input.style.border = 'none';
                                                    input.style.textAlign = 'center';
                                                    input.style.fontSize = '16px';
                                                    input.style.fontWeight = 'bold';
                                                    input.dataset.row = i;
                                                    input.dataset.col = j;
                                                    cell.appendChild(input);
                                                }
                                                row.appendChild(cell);
                                            }
                                            gameBoard.appendChild(row);
                                        }
                                    }
                                    // 将游戏面板和按钮添加到页面中
                                    var gameDiv = document.createElement('div');
                                    gameDiv.style.width = '300px';
                                    gameDiv.style.margin = '50px auto';
                                    gameDiv.appendChild(gameBoard);
                                    gameDiv.appendChild(checkButton);
                                    gameDiv.appendChild(exitButton);
                                    gameDiv.appendChild(finishButton);
                                    gameDiv.appendChild(solveButton);
                                    document.body.appendChild(gameDiv);
                                    // 数独求解函数
                                    function solve(puzzle) {
                                        // 先找到第一个空格
                                        var row = -1,
                                            col = -1;
                                        for (var i = 0; i < 9; i++) {
                                            for (var j = 0; j < 9; j++) {
                                                if (puzzle[i][j] === 0) {
                                                    row = i;
                                                    col = j;
                                                    break;
                                                }
                                            }
                                            if (row !== -1 && col !== -1) {
                                                break;
                                            }
                                        }
                                        // 如果没有空格了,说明数独已经被填满了,直接返回
                                        if (row === -1 || col === -1) {
                                            return {
                                                success: true,
                                                puzzle: puzzle,
                                            };
                                        }
                                        // 对当前空格进行尝试填入数字
                                        for (var num = 1; num <= 9; num++) {
                                            if (check(row, col, num)) {
                                                puzzle[row][col] = num;
                                                var result = solve(puzzle);
                                                if (result.success) {
                                                    return result;
                                                }
                                                puzzle[row][col] = 0;
                                            }
                                        }
                                        // 如果所有数字都尝试过了还没有找到解,说明数独无解
                                        return {
                                            success: false,
                                            puzzle: puzzle,
                                        };
                                    }
                                    // 检查某个位置放置数字是否合法,row 和 col 从 0 开始编号
                                    function check(row, col, value) {
                                        // 检查行
                                        for (var i = 0; i < 9; i++) {
                                            if (puzzle[row][i] === value) {
                                                return false;
                                            }
                                        }
                                        // 检查列
                                        for (var j = 0; j < 9; j++) {
                                            if (puzzle[j][col] === value) {
                                                return false;
                                            }
                                        }
                                        // 检查子宫格
                                        var subRow = Math.floor(row / 3) * 3,
                                            subCol = Math.floor(col / 3) * 3;
                                        for (var i = subRow; i < subRow + 3; i++) {
                                            for (var j = subCol; j < subCol + 3; j++) {
                                                if (puzzle[i][j] === value) {
                                                    return false;
                                                }
                                            }
                                        }
                                        return true;
                                    }
                                    function generatePuzzle() {
                                        var puzzle = [],
                                            blankCount = 30,
                                            row,
                                            col,
                                            rand,
                                            temp;
                                        // 初始化数组
                                        for (var i = 0; i < 9; i++) {
                                            puzzle.push([0, 0, 0, 0, 0, 0, 0, 0, 0]);
                                        }
                                        // 随机生成每行的数字顺序
                                        for (var i = 0; i < 9; i++) {
                                            var rowNumbers = [];
                                            for (var j = 0; j < 9; j++) {
                                                do {
                                                    rand = Math.floor(Math.random() * 9) + 1;
                                                } while (rowNumbers.indexOf(rand) !== -1);
                                                rowNumbers.push(rand);
                                            }
                                            for (var j = 0; j < 9; j++) {
                                                puzzle[i][j] = rowNumbers[j];
                                            }
                                        }
                                        // 随机生成每列的数字顺序
                                        for (var i = 0; i < 9; i++) {
                                            var colNumbers = [];
                                            for (var j = 0; j < 9; j++) {
                                                do {
                                                    rand = Math.floor(Math.random() * 9) + 1;
                                                } while (colNumbers.indexOf(rand) !== -1);
                                                colNumbers.push(rand);
                                            }
                                            for (var j = 0; j < 9; j++) {
                                                puzzle[j][i] = colNumbers[j];
                                            }
                                        }
                                        // 随机交换3x3小块内的数字
                                        for (var i = 0; i < 3; i++) {
                                            for (var j = 0; j < 3; j++) {
                                                for (var k = 0; k < 8; k++) {
                                                    row = i * 3 + Math.floor(k / 3);
                                                    col = j * 3 + (k % 3);
                                                    rand = Math.floor(Math.random() * (9 - k)) + k;
                                                    [puzzle[row][col], puzzle[i * 3 + Math.floor(rand / 3)][j * 3 + (rand % 3)]] = [puzzle[i * 3 + Math.floor(rand / 3)][j * 3 + (rand % 3)], puzzle[row][col]];
                                                }
                                            }
                                        }
                                        // 对生成的数独谜题进行挖空
                                        var count = 0;
                                        while (blankCount > 0 && count < 5000) {
                                            // 添加循环次数限制,防止死循环
                                            // 随机选取一个格子
                                            row = Math.floor(Math.random() * 9);
                                            col = Math.floor(Math.random() * 9);
                                            if (puzzle[row][col] !== 0) {
                                                // 首先备份当前格子中的数字
                                                temp = puzzle[row][col];
                                                puzzle[row][col] = 0; // 将当前格子的数字填为0
                                                if (hasUniqueSolution(puzzle)) {
                                                    // 判断是否存在唯一解
                                                    blankCount--;
                                                } else {
                                                    // 如果存在多个解,回复备份的数字
                                                    puzzle[row][col] = temp;
                                                }
                                            }
                                            count++; // 记录循环次数
                                        }
                                        return puzzle;
                                    }
                                    // 判断数独是否有唯一解
                                    function hasUniqueSolution(puzzle) {
                                        var solutions = [],
                                            row,
                                            col,
                                            value;
                                        solvePuzzle(puzzle, solutions); // 解出数独谜题
                                        if (solutions.length === 1) {
                                            // 检查解的数量
                                            return true;
                                        } else {
                                            return false;
                                        }
                                    }
                                    // 解数独谜题
                                    function solvePuzzle(puzzle, solutions) {
                                        var row, col, candidates;
                                        // 查找第一个未填的格子
                                        for (row = 0; row < 9; row++) {
                                            for (col = 0; col < 9; col++) {
                                                if (puzzle[row][col] === 0) {
                                                    break;
                                                }
                                            }
                                            if (puzzle[row][col] === 0) {
                                                break;
                                            }
                                        }
                                        if (row === 9 && col === 9) {
                                            // 找到解
                                            solutions.push(JSON.parse(JSON.stringify(puzzle))); // 将当前解深复制后保存
                                            return;
                                        }
                                        // 获取候选数字
                                        candidates = getCandidates(puzzle, row, col);
                                        // 尝试每个候选数字
                                        for (var i = 0; i < candidates.length; i++) {
                                            value = candidates[i];
                                            puzzle[row][col] = value;
                                            solvePuzzle(puzzle, solutions);
                                            puzzle[row][col] = 0;
                                        }
                                    }
                                    // 获取候选数字
                                    function getCandidates(puzzle, row, col) {
                                        var candidates = [],
                                            used = [];
                                        // 检查所在行和列已经填入的数字
                                        for (var i = 0; i < 9; i++) {
                                            if (puzzle[row][i] !== 0 && i !== col) {
                                                used.push(puzzle[row][i]);
                                            }
                                            if (puzzle[i][col] !== 0 && i !== row) {
                                                used.push(puzzle[i][col]);
                                            }
                                        }
                                        // 检查所在宫已经填入的数字
                                        var r = Math.floor(row / 3) * 3;
                                        var c = Math.floor(col / 3) * 3;
                                        for (var i = r; i < r + 3; i++) {
                                            for (var j = c; j < c + 3; j++) {
                                                if (puzzle[i][j] !== 0 && i !== row && j !== col) {
                                                    used.push(puzzle[i][j]);
                                                }
                                            }
                                        }
                                        // 生成候选数字
                                        for (var i = 1; i <= 9; i++) {
                                            if (used.indexOf(i) === -1) {
                                                candidates.push(i);
                                            }
                                        }
                                        return candidates;
                                    }
                                } else {
                                    game.log(player, '正在进行数独小游戏');
                                    game.showTipMessage('正在进行数独小游戏……', 5);
                                    game.log(player, '数独小游戏完成,获得高级奖励');
                                    player.say('小小数独有何难？两酒一杀归我手');
                                    player.gain(game.createCard('sha'), 'gain2');
                                    player.gain(game.createCard('jiu'), 'gain2');
                                    player.gain(game.createCard('jiu'), 'gain2');
                                    player.addTempSkill('酒剑1', {
                                        player: 'phaseAfter',
                                    });
                                }
                            },
                            ai: {
                                // AI 算法相关的配置
                                order: 10, // AI 使用该牌时的优先级
                                result: {
                                    // 使用该牌后的评估结果
                                    player: 1, // 对自己使用时评估值为 1
                                },
                            },
                        },
                        诗剑: {
                            // 技能名称
                            mark: true, // 是否显示标记
                            marktext: '剑歌', // 标记文本
                            intro: {
                                // 描述文本
                                name: '剑歌',
                                content: '你拥有#个剑歌',
                            },
                            init(player) {
                                // 初始化函数,在获得该技能时执行
                                player.storage.诗剑1 = player.style.transform; // 记录当前玩家的 transform 值
                                player.storage.诗剑2 = player.style.zIndex; // 记录当前玩家的 z-index 值
                                player.storage.诗剑 = 0; // 初始化标记值为 0
                                // 同步标记值
                            },
                            group: ['诗剑1', '诗剑2'], // 技能分组
                            audio: 'ext:神魔乱舞/audio:true', // 播放音效
                            forced: true, // 强制执行
                            _priority: 999, // 优先级设为999,表示该技能的执行顺序很高
                            trigger: {
                                // 触发条件
                                global: 'gameStart', // 在游戏开始时触发
                            },
                            content() {
                                // 技能效果的具体实现
                                game.mp47('李白');
                            },
                        },
                        诗剑1: {
                            trigger: {
                                player: 'shaHit', // 在角色使用杀时触发
                            },
                            forced: true, // 强制执行
                            _priority: null, // 优先级
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                game.pause(); // 暂停游戏
                                // 获取相关元素的位置和大小信息
                                var b = trigger.target.offsetTop; // 被攻击目标的上边缘到文档顶部的距离
                                var c = player.offsetTop; // 攻击者的上边缘到文档顶部的距离
                                var d = player.offsetHeight; // 攻击者的高度
                                var e = trigger.target.offsetLeft; // 被攻击目标的左边缘到文档左侧的距离
                                var f = player.offsetLeft; // 攻击者的左边缘到文档左侧的距离
                                var g = player.offsetWidth; // 攻击者的宽度
                                //var z = player.style.zIndex; // 攻击者的层级管理属性
                                // 计算并设置攻击者的位置和方向
                                player.style.zIndex = 99; // 将攻击者置于最上层
                                if (b - c > 300 || b - c < 300) {
                                    // 距离大于300或小于300
                                    player.style.transform = 'translateY(' + (b - c) + 'px)'; // 平移攻击者的位置
                                } else if (b - c > 300) {
                                    player.style.transform = 'translateY(' + (b - c + d) + 'px)'; // 平移攻击者的位置
                                } else {
                                    player.style.transform = 'translateY(' + (b - c - d) + 'px)'; // 平移攻击者的位置
                                }
                                if (e < f || (f <= e && e < g))
                                    player.style.transform += 'translateX(' + (e - f + g + 5) + 'px)'; // 方向朝右
                                else player.style.transform += 'translateX(' + (e - f - g - 5) + 'px)'; // 方向朝左
                                // 设置一连串动作
                                setTimeout(function () {
                                    if (e < f || (f <= e && e < g))
                                        player.style.transform += ' rotate(30deg)'; // 方向朝右旋转30度
                                    else player.style.transform += ' rotate(-30deg)'; // 方向朝左旋转30度
                                    player.storage.诗3++;
                                    setTimeout(function () {
                                        if (!(e < f || (f <= e && e < g)))
                                            player.style.transform += ' rotate(60deg)'; // 方向朝左旋转60度
                                        else player.style.transform += ' rotate(-60deg)'; // 方向朝右旋转60度
                                        player.storage.诗3++;
                                        game.resume(); // 回复游戏
                                    }, 500);
                                }, 500);
                            },
                        },
                        诗剑2: {
                            trigger: {
                                player: 'shaAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                if (trigger.card.isCard) {
                                    var chosen = false;
                                    player.chooseTarget('请在5秒内选择一名目标视为对其使用一张杀,否则无效', function (card, player, target) {
                                        return target !== player;
                                    }).ai = function (target) {
                                        return -get.attitude(trigger.player, target);
                                    };
                                    setTimeout(function () {
                                        if (!chosen) {
                                            player.style.transform = player.storage.诗剑1;
                                            player.style.zIndex = player.storage.诗剑2;
                                            event.finish();
                                        }
                                    }, 5000);
                                } else if (!trigger.card.isCard) {
                                    if (!player.storage.诗3) {
                                        player.storage.诗3 = 0;
                                    }
                                    if (player.storage.诗3 >= 1) {
                                        player.style.transform = player.storage.诗剑1;
                                        delete player.storage.诗3;
                                        setTimeout(function () {
                                            player.style.zIndex = player.storage.诗剑2;
                                        }, 2000);
                                        event.finish();
                                    }
                                }
                                ('step 1');
                                if (result.bool) {
                                    if (!player.storage.诗3) player.storage.诗3 = 0;
                                    if (player.storage.诗剑 <= 3) {
                                        player.storage.诗剑 += 1;
                                    }
                                    player.useCard(
                                        {
                                            name: 'sha',
                                        },
                                        result.targets[0]
                                    );
                                    if (player.storage.诗3 >= 1) {
                                        player.style.transform = player.storage.诗剑1;
                                        delete player.storage.诗3;
                                        setTimeout(function () {
                                            player.style.zIndex = player.storage.诗剑2;
                                        }, 2000);
                                    }
                                }
                            },
                        },
                        武曲: {
                            // 技能名称
                            audio: 'ext:神魔乱舞/audio:1',
                            forced: true, // 强制执行
                            trigger: {
                                // 触发条件
                                global: ['drawBefore', 'gainBefore'], // 全局事件,在玩家摸牌或者获得卡牌前触发
                            },
                            filter(event, player) {
                                // 过滤器,限制触发条件
                                return event.player && event.player != player; // 只有非当前玩家执行该技能
                            },
                            content() {
                                // 技能效果的具体实现
                                trigger.cancel(); // 取消原始的获得牌/摸牌操作
                                var cards = get.cards(1); // 从牌堆顶获得一张牌
                                trigger.player.$draw(cards); // 展示摸的牌
                                trigger.player.directgain(cards); // 将牌直接放入手牌
                                game.log(trigger.player, '获得牌/摸牌改为从牌堆顶获得', cards); // 在游戏日志中记录该操作
                            },
                        },
                        红脸: {
                            // 技能名称
                            audio: 'ext:神魔乱舞/audio:2',
                            mod: {
                                // 该技能对游戏规则进行了修改
                                ignoredHandcard(card, player) {
                                    // 忽略手牌中的红色牌
                                    if (get.color(card) == 'red') {
                                        // 如果该牌为红色
                                        return true; // 则忽略该牌
                                    }
                                },
                                cardDiscardable(card, player, name) {
                                    // 禁止弃置红色牌
                                    if (name == 'phaseDiscard' && get.color(card) == 'red') {
                                        // 如果是弃牌阶段并且弃置的卡牌为红色
                                        return false; // 则禁止弃牌
                                    }
                                },
                                targetInRange(card) {
                                    // 红色杀的范围变为全图
                                    if (card.name == 'sha' && get.color(card) == 'red')
                                        // 如果是红色杀
                                        return true; // 则可以攻击全图
                                },
                            },
                            enable: ['chooseToUse', 'chooseToRespond'], // 可以作为使用和响应卡牌的选项
                            group: ['红脸1', '红脸2'], // 该技能包括两个子技能,分别为<红脸1>和<红脸2>
                            prompt() {
                                // 选择该技能时的提示文本
                                return '将1张红色牌当作杀使用或打出';
                            },
                            position: 'hes', // 限制可用的牌堆
                            selectCard: 1, // 只能选择一张牌
                            viewAs: {
                                // 将所选牌视为杀
                                name: 'sha',
                            },
                            viewAsFilter(player) {
                                // <红脸>技能可用的过滤器
                                return player.countCards('hes', {
                                    color: 'red',
                                }); // 只有在手牌和装备区内有红色牌才能使用
                            },
                            filterCard(card) {
                                // 限制可选的牌
                                return get.color(card) == 'red'; // 只有红色牌才能选择
                            },
                            check(card) {
                                // 判断这张牌是否能使用
                                var val = get.value(card);
                                if (_status.event.name == 'chooseToRespond') return 1 / Math.max(0.1, val); // 如果是响应卡牌,则返回该牌的价值
                                return 5 - val; // 如果是使用卡牌,则返回5减去该牌的价值
                            },
                            ai: {
                                // AI智能
                                skillTagFilter(player) {
                                    if (get.zhu(player, 'shouyue')) {
                                        // 如果当前玩家为主帅,并且没有红色牌,则不启用该技能
                                        if (!player.countCards('hes')) return false;
                                    } else {
                                        // 如果当前玩家不是主帅,并且没有红色牌,则不启用该技能
                                        if (
                                            !player.countCards('hes', {
                                                color: 'red',
                                            })
                                        )
                                            return false;
                                    }
                                },
                            },
                        },
                        红脸1: {
                            forced: true, // 该技能为强制触发技能
                            trigger: {
                                // 触发条件
                                player: 'shaAfter', // 在使用杀之后触发
                            },
                            filter(event, player) {
                                // 过滤器函数,返回值为布尔型
                                return event.card && get.color(event.card) == 'red'; // 判断使用的杀是否存在,并且颜色是否为红色
                            },
                            content() {
                                // 技能执行的操作
                                player.getStat().card.sha--; // 减少玩家的杀使用次数(因为通过技能使用红杀不计入杀的使用次数)
                            },
                        },
                        红脸2: {
                            forced: true, // 该技能为强制触发技能
                            trigger: {
                                // 触发条件
                                source: 'damageBegin', // 在造成伤害前触发
                            },
                            filter(event, player) {
                                // 过滤器函数,返回值为布尔型
                                return event.card && event.card.name == 'sha' && get.color(event.card) == 'red'; // 判断使用的牌是否为杀,且颜色是否为红色
                            },
                            content() {
                                // 技能执行的操作
                                trigger.num++; // 增加该事件造成的伤害值
                            },
                        },
                        贪狼: {
                            group: '贪狼1', // <贪狼>主技能所属的技能组
                            forced: true, // 该技能为强制触发技能
                            audio: 'ext:神魔乱舞/audio:1',
                            trigger: {
                                // 触发条件
                                global: 'loseHpAfter', // 在一名玩家失去体力后触发
                            },
                            filter(event, player) {
                                // 过滤器函数,返回值为布尔型
                                return event.player && event.player != player && event.player.isAlive() && event.player.hp >= 0; // 判断事件中的玩家是否为其他存活状态的玩家,并且当前玩家的体力值大于 0
                            },
                            content() {
                                // 技能执行的操作
                                player.useCard({ name: 'sha', nature: 'fire' }, trigger.player); // 出一张火属性杀攻击事件中的目标玩家
                            },
                        },
                        贪狼1: {
                            forced: true, // 该技能为强制触发技能
                            trigger: {
                                // 触发条件
                                source: 'damageAfter', // 造成伤害后触发
                            },
                            filter(event, player) {
                                // 过滤器函数,返回值为布尔型
                                return event.nature && event.nature == 'fire'; // 判断造成伤害的属性是否为火属性
                            },
                            content() {
                                // 技能执行的操作
                                player.chooseDrawRecover(); // 触发该技能后,当前玩家可以选择自摸一张牌或回复 1 点体力
                            },
                        },
                        镇魂: {
                            audio: 'ext:神魔乱舞/audio:1',
                            forced: true, // 该技能为强制触发技能
                            trigger: {
                                // 触发条件
                                global: 'recoverBegin', // 在全局回复开始时触发
                            },
                            filter(event, player) {
                                // 过滤器函数,返回值为布尔型
                                return event.player && event.player != player; // 判断事件中的玩家是否为非当前玩家自己
                            },
                            content() {
                                // 技能执行的操作
                                var nun = trigger.num; // 存储事件中回复的体力值
                                trigger.cancel(); // 取消本次的回复
                                trigger.player.loseHp(nun); // 使事件中的玩家失去之前回复的体力值
                            },
                        },
                        普度: {
                            enable: 'phaseUse', // 出牌阶段发动
                            usable: 1, // 每回合限一次
                            selectCard: [1, Infinity], // 弃置 1-无穷张牌
                            filterCard: true, // 任意牌
                            position: 'h', // 手牌
                            selectTarget: 1, // 选择一名目标玩家
                            filterTarget(card, player, target) {
                                // 目标的过滤函数,返回值为布尔型
                                return target != player; // 目标不是自己
                            },
                            filter(event, player) {
                                // 技能发动的过滤函数,返回值为布尔型
                                return player.countCards('h'); // 当前玩家有手牌时才能发动该技能
                            },
                            content() {
                                // 技能执行的操作
                                var num = cards.length; // 定义变量num为弃置的牌的数量
                                target.loseHp(); // 目标失去一点体力
                                player.draw(num); // 当前玩家摸num张牌
                                if (num % 2 == 0) {
                                    // 判断弃牌数量是否为偶数
                                    player.changeHujia(num / 2); // 如果为偶数,当前玩家增加num/2点护甲
                                } else {
                                    player.changeHujia(1); // 如果为奇数,当前玩家增加1点护甲
                                }
                            },
                            ai: {
                                order: 5, // 技能的优先级为 5
                                result: {
                                    target: -1, // 该技能对目标的评分为 -1,即不利于使用该技能对目标玩家进行攻击
                                },
                            },
                        },
                        封印: {
                            init(player, skill) {
                                // 角色初始化时执行的函数
                                player.addSkillBlocker(skill); // 给当前玩家添加该技能的屏蔽器
                            },
                            onremove(player, skill) {
                                // 技能移除时执行的函数
                                player.removeSkillBlocker(skill); // 从当前玩家的屏蔽器中移除该技能
                            },
                            zhou: true, // 不等于周标签的技能
                            charlotte: true,
                            skillBlocker(skill, player) {
                                // 屏蔽器函数,返回值为布尔型
                                return !lib.skill[skill].zhou; // 返回值为 false 时表示被该技能封印,周标签的技能不被封印
                            },
                            mark: true, // 标记技能,用以显示技能的标记
                            marktext: '封印', // 标记文本
                            intro: {
                                // 该技能的介绍信息
                                content(storage, player, skill) {
                                    // 内容函数,返回值为字符串类型
                                    var list = player.getSkills(null, false, false).filter(function (i) {
                                        // 获取当前玩家失效的技能列表
                                        return lib.skill.封印.skillBlocker(i, player); // 返回值为 true 表示被封印,将其加入列表中
                                    });
                                    if (list.length) {
                                        // 如果列表非空
                                        return '封印技能:' + get.translation(list); // 返回格式化后的文本
                                    } else {
                                        return '无被封印技能'; // 否则返回无失效技能的提示信息
                                    }
                                },
                            },
                        },
                        限制: {
                            charlotte: true,
                            zhou: true, // 不等于周标签的技能
                            mod: {
                                // 该技能对游戏规则进行修改的函数集合
                                cardEnabled(card, player) {
                                    // 禁止使用卡牌
                                    return false; // 返回 false 表示不可用
                                },
                                cardUsable(card, player) {
                                    // 禁止打出卡牌
                                    return false; // 返回 false 表示不可用
                                },
                                cardRespondable(card, player) {
                                    // 禁止对卡牌进行响应
                                    return false; // 返回 false 表示不可响应
                                },
                                cardSavable(card, player) {
                                    // 禁止保存卡牌
                                    return false; // 返回 false 表示不可保存
                                },
                            },
                        },
                        嫁妆: {
                            audio: 'ext:神魔乱舞/audio:1',
                            enable: 'phaseUse', // 在出牌阶段发动
                            content() {
                                // 技能的具体效果
                                'step 0';
                                player
                                    .chooseTarget('选择【嫁妆】的目标', lib.translate.嫁妆_info, false, function (card, player, target) {
                                        return target != player && target.sex == 'male'; // 可以选择男性非自己的目标
                                    })
                                    .set('ai', function (target) {
                                        // 设置AI的决策过程
                                        if (get.attitude(player, target) > 0) return true; // 如果对方是友好的,就选择该目标
                                        return 0; // 否则随机选择
                                    });
                                ('step 1');
                                if (result.bool) {
                                    // 如果有目标
                                    var target = result.targets[0]; // 获取目标
                                    player.line(target, 'green'); // 显示连线
                                    game.log(target, '成为了', '【紫霞】', '的丈夫'); // 显示游戏日志
                                    player.storage.嫁妆2 = target; // 存储嫁妆对象
                                    player.addSkill('嫁妆2'); // 获得<嫁妆2>技能
                                    player.addSkill('嫁妆3'); // 获得<嫁妆3>技能
                                    event.goto(2); // 跳转到步骤 2
                                } else {
                                    event.finish(); // 直接结束事件
                                }
                                ('step 2');
                                player.awakenSkill('嫁妆'); // 角色的技能<嫁妆>觉醒,技能文本变灰并失去该技能相关的标记
                            },
                        },
                        嫁妆2: {
                            audio: 'ext:神魔乱舞/audio:1',
                            intro: {
                                // 技能介绍
                                content: '当你老公$受到伤害时,改为你帮其承受伤害',
                            },
                            _priority: 15, // 技能优先级
                            trigger: {
                                // 技能触发时机
                                global: 'damageBegin', // 当有角色受到伤害时
                            },
                            forced: true, // 技能是否强制执行
                            filter(event, player) {
                                // 过滤条件
                                var target = player.storage.嫁妆2;
                                return event.player && event.player == target; // 只有被攻击的角色是当前技能标记对象的时候才会触发技能效果
                            },
                            content() {
                                // 技能的具体效果
                                trigger.source.line(player, 'green');
                                trigger.player = player; // 让该角色来承担伤害
                            },
                        },
                        嫁妆3: {
                            audio: 'ext:神魔乱舞/audio:1',
                            mark: true, // 技能标记为通用标记类型
                            marktext: '嫁妆', // 标记文本
                            intro: {
                                // 技能介绍
                                content(storage, player) {
                                    var target = player.storage.嫁妆2;
                                    var str = '当你老公' + get.translation(target) + '造成伤害后,你可以摸一张牌并令其失去一点体力';
                                    return str;
                                },
                            },
                            trigger: {
                                // 技能触发时机
                                global: 'damageEnd', // 当有角色造成伤害后
                            },
                            filter(event, player) {
                                // 过滤条件
                                var target = player.storage.嫁妆2;
                                return event.source && event.source == target; // 只有当前技能标记对象造成的伤害才会触发该技能
                            },
                            content() {
                                // 技能的具体效果
                                player.draw(); // 摸一张牌
                                trigger.source.loseHp(); // 令技能标记对象失去一点体力
                            },
                        },
                        绝色: {
                            forced: true, // 技能是一个锁定技
                            trigger: {
                                // 技能触发时机
                                player: 'damageBegin', // 当该角色受到伤害前
                            },
                            filter(event, player) {
                                // 过滤条件
                                return event.source && event.source.sex == 'male' && player.countCards('h') > 0; // 只有造成伤害的角色为男性、该角色手牌数大于 0 时才会触发该技能
                            },
                            content() {
                                // 技能的具体效果
                                'step 0';
                                player.chooseToDiscard(false, 'h', 1); // 强制让该角色弃掉一张手牌
                                ('step 1');
                                if (result.bool) {
                                    // 如果弃牌动作产生了结果(即弃掉了一张手牌)
                                    trigger.num--; // 则将本次造成的伤害数目减少 1
                                    game.log(player, '发动绝色,该次伤害减少 1,目前伤害为', trigger.num);
                                }
                            },
                        },
                        紫青: {
                            audio: 'ext:神魔乱舞/audio:1', // 技能使用时播放的音效
                            forced: true, // 技能是一个锁定技
                            trigger: {
                                // 技能触发时机
                                player: 'shaMiss', // 当该角色使用杀未命中目标时
                            },
                            filter(event, player) {
                                // 过滤条件
                                return event.card; // 只有使用的牌为卡牌时才会触发该技能
                            },
                            content() {
                                // 技能的具体效果
                                'step 0';
                                player
                                    .chooseTarget([1, 2], function (card, player, target) {
                                        return target != player; // 强制让角色选择 1-2 名除自己外的目标
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target); // 设定目标的优先级,即选择敌方或友方
                                    });
                                ('step 1');
                                // 视为使用雷杀和火杀,分别对两个目标造成伤害
                                if (result.bool) {
                                    // 如果角色选择了目标
                                    if (result.targets.length > 1) {
                                        // 如果选择的目标数量大于 1
                                        player.useCard(
                                            {
                                                // 则视为连续使用两张杀,分别对两个目标造成伤害
                                                name: 'sha',
                                                nature: 'fire',
                                            },
                                            result.targets[0]
                                        );
                                        player.useCard(
                                            {
                                                name: 'sha',
                                                nature: 'thunder',
                                            },
                                            result.targets[1]
                                        );
                                    } else if (result.targets.length == 1) {
                                        // 如果选择的目标数量等于 1
                                        player.useCard(
                                            {
                                                // 则视为使用一张杀,对该目标连续造成火属性和雷属性伤害
                                                name: 'sha',
                                                nature: 'fire',
                                            },
                                            result.targets[0]
                                        );
                                        player.useCard(
                                            {
                                                name: 'sha',
                                                nature: 'thunder',
                                            },
                                            result.targets[0]
                                        );
                                    }
                                }
                            },
                        },
                        混沌: {
                            audio: 'ext:神魔乱舞/audio:true', // 技能使用时播放音效
                            forced: true, // 技能是一个强制执行的技能
                            _priority: 999, // 技能的优先级设为999,确保该技能优先于其他技能执行
                            trigger: {
                                // 技能触发的时机
                                global: 'gameStart', // 当游戏开始时
                            },
                            content() {
                                // 技能的具体效果
                                'step 0';
                                game.startRandomizeColor(player); // 使用自定义函数 game.startRandomizeColor 变更玩家颜
                                player.storage.现象 = player.style.borderRadius;
                                player.storage.头像 = player.node.avatar.style.borderRadius;
                                player.storage.图片 = player.node.avatar.style.backgroundImage;
                                //player.node.avatar.setBackgroundImage('extension/神魔乱舞/image/混沌.jpg');
                                player.storage.背景1 = player.style.background;
                                player.storage.背景2 = player.node.avatar.style.background;
                                player.style.borderRadius = '50%'; //
                                player.style.background = 'linear-gradient(45deg, red, transparent)';
                                player.node.avatar.style.borderRadius = '50%'; // 设置边框半径为50%,即将头像变成圆形
                                player.node.avatar.style.background = 'linear-gradient(45deg, red, transparent)';
                                //game.players.remove(player);
                                if (game.zhu == player) {
                                    player.skip('phase');
                                }
                            },
                        },
                        混沌1: {
                            mark: true, // 该技能带有标记
                            marktext: "<span style='animation:rainbowShen 2s infinite;-webkit-animation/audio:rainbowShen 2s infinite;'>斧</span>", // 标记的显示文本为彩虹斧头
                            intro: {
                                // 技能说明
                                name: "<span style='animation:rainbowShen 2s infinite;-webkit-animation:rainbowShen 2s infinite;'>斧</span>",
                                content: "<span style='animation:rainbowShen 2s infinite;-webkit-animation:rainbowShen 2s infinite;'>你已获得#个斧</span>",
                            },
                            init(player) {
                                // 初始化函数,当该角色获得该技能时执行
                                player.storage.混沌1 = 0; // 将该角色的<混沌1>标记数量初始化为0
                                // 同步标记
                                // 注:标记名必须和技能名相同
                            },
                            group: ['混沌', '混沌2'], // 技能组包括混沌和混沌2
                            forced: true, // 技能是一个强制执行的技能
                            trigger: {
                                // 技能触发的时机
                                global: 'phaseBegin', // 当回合开始时
                            },
                            filter(event, player) {
                                // 过滤器函数,判断本技能是否能够发动
                                if (event.player == player) return false;
                                return true;
                            },
                            async content(event, trigger, player) {
                                //QQQ
                                player.storage.混沌1 += 1; // 将该角色的<混沌1>标记数量增加1
                                // 同步标记
                            },
                        },
                        混沌2: {
                            audio: 'ext:神魔乱舞/audio:1', // 播放音效
                            forced: true, // 该技能是一个强制执行的技能
                            // 该技能是唯一的,不能重复发动
                            limited: true, // 该技能是限定技能,只能使用一次
                            trigger: {
                                // 技能触发的时机
                                global: 'phaseAfter', // 在回合开始前
                            },
                            filter(event, player) {
                                // 过滤器函数,判断本技能是否能够发动
                                if (event.player == player) return false;
                                var num = game.players.length; // 获取当前游戏中的角色数量
                                return player.storage.混沌1 >= num; // 当该角色的<混沌1>标记数量不小于角色总数时,才能发动该技能
                            },
                            async content(event, trigger, player) {
                                //QQQ
                                game.pause(); // 暂停游戏
                                player.storage.层级 = player.style.zIndex;
                                player.style.left = 'calc(55% - 120px)';
                                player.style.top = 'calc(50% - 70px)';
                                player.style.zIndex = 999;
                                setTimeout(function () {
                                    player.style.transform = 'rotate(1080deg)';
                                    setTimeout(function () {
                                        player.removeAttribute('style');
                                        player.style.zIndex = player.storage.层级;
                                        game.stopRandomizeColor(player);
                                        game.players.add(player);
                                        player.style.borderRadius = player.storage.现象;
                                        player.node.avatar.style.borderRadius = player.storage.头像;
                                        player.node.avatar.style.background = player.storage.背景2;
                                        player.style.background = player.storage.背景1;
                                        player.node.avatar.style.backgroundImage = player.storage.图片;
                                        player.addSkill('开天');
                                        player.addSkill('劈地');
                                        player.$fullscreenpop('开天辟地,万物新生!', 'fire');
                                        player.removeSkill('混沌1');
                                        game.resume(); // 回复游戏
                                    }, 1000); // 延迟1秒执行第2步
                                }, 1000); // 延迟1秒执行第1步
                            },
                        },
                        开天: {
                            audio: 'ext:神魔乱舞/audio:1', // 播放音效
                            mark: true, // 附带标记
                            marktext: "<span style='animation:rainbowShen 2s infinite;-webkit-animation/audio:rainbowShen 2s infinite;'>斧</span>", // 标记文本,为动态效果
                            intro: {
                                // 技能介绍
                                name: "<span style='animation:rainbowShen 2s infinite;-webkit-animation:rainbowShen 2s infinite;'>斧</span>", // 技能名称,为动态效果
                                content: "<span style='animation:rainbowShen 2s infinite;-webkit-animation:rainbowShen 2s infinite;'>你拥有#个斧</span>", // 技能描述,为动态效果
                            },
                            init(player) {
                                // 初始化函数,当该角色获得该技能时执行
                                player.storage.开天 = player.storage.混沌1; // 将该角色的<混沌1>标记数量初始化为0
                                // 同步标记
                                // 注:标记名必须和技能名相同
                            },
                            forced: true, // 强制执行技能
                            trigger: {
                                // 技能触发条件
                                source: 'damageBegin', // 造成伤害时触发
                            },
                            content() {
                                // 技能效果
                                'step 0';
                                if (!trigger.player.hasSkill('开天1')) {
                                    // 如果目标角色没有<开天1>技能
                                    trigger.player.addSkill('开天1'); // 新增一个<开天1>技能
                                    trigger.player.storage.开天1++; // <开天1>的标记数量加1
                                    // 同步<开天1>的标记到客户端
                                    event.finish(); // 结束事件
                                } // 如果目标角色已经拥有<开天1>技能
                                else event.goto(1); // 跳转到下一步
                                ('step 1');
                                trigger.num += trigger.player.storage.开天1; // 将目标角色的伤害值加上其拥有的<开天1>标记数量
                                trigger.player.storage.开天1++; // <开天1>的标记数量加1
                                // 同步<开天1>的标记到客户端
                            },
                        },
                        开天1: {
                            superCharlotte: true, // 将该技能设为超级触发技
                            forced: true, // 设置该技能为频率技能
                            forced: true, // 强制执行技能
                            mark: true, // 附带标记
                            marktext: '万物', // 标记文本
                            intro: {
                                // 技能介绍
                                name: '万物',
                                content: '你拥有#个万物', // 描述标记数量信息
                            },
                            init(player) {
                                // 初始化函数,获得该技能时执行的内容
                                player.storage.开天1 = 0; // 将玩家的<开天1>标记数量初始值设为0
                                // 同步<开天1>标记到客户端,每当标记变动都要写这句
                                // 注: 标记名必须和技能名相同
                            },
                        },
                        劈地: {
                            audio: 'ext:神魔乱舞/audio:1', // 播放音效
                            mark: true, // 附带标记
                            marktext: '化生', // 标记文本
                            intro: {
                                // 技能介绍
                                name: '化生',
                                content: '你拥有#个化生', // 描述标记数量信息
                            },
                            init(player) {
                                // 初始化函数,获得该技能时执行的内容
                                player.storage.劈地 = 0; // 将玩家的<劈地>标记数量初始值设为0
                                // 同步<劈地>标记到客户端,每当标记变动都要写这句
                                // 注: 标记名必须和技能名相同
                            },
                            trigger: {
                                // 技能触发条件
                                player: 'damageEnd', // 受到伤害后触发
                            },
                            filter(event, player) {
                                // 过滤器函数
                                return event.source != undefined; // 过滤掉非玩家造成的伤害
                            },
                            content() {
                                var m = trigger.num;
                                game.log(player, '发动【劈地】,对', trigger.source, '造成等同本次伤害量+其拥有万物数量的伤害');
                                trigger.source.damage(m).source = player;
                                if (trigger.source.hasSkill('开天1')) {
                                    var nnn = m + trigger.source.storage.开天1;
                                    player.storage.劈地 += nnn;
                                } else {
                                    player.storage.劈地 += m;
                                }
                                if (player.storage.劈地 >= player.storage.混沌1) {
                                    game.log(player, '化生>=斧头,立刻阵亡并获得新技能【化生】');
                                    player.die();
                                }
                            },
                        },
                        帝威: {
                            //mode:['identity'],
                            audio: 'ext:神魔乱舞/audio:true', // 播放音效
                            forced: true, // 强制执行
                            _priority: 9, // 优先级设为9
                            trigger: {
                                global: ['gameDrawBefore', 'phaseBefore'],
                            }, // 触发条件为全局游戏开始和玩家回合前
                            filter(event, player) {
                                // 过滤器函数,只有不是主公的玩家才能触发
                                return player.identity != 'zhu';
                            },
                            content() {
                                // 技能的具体实现
                                if (lib.config.mode == 'guozhan') {
                                    for (var i of game.players) {
                                        //QQ
                                        i.showCharacter(2);
                                    }
                                } else if (lib.config.mode == 'identity') {
                                    game.zhu.identity = player.identity; // 将主公的身份改为当前玩家的身份
                                    if (game.zhu.identity == 'nei') game.zhu.setIdentity('nei'); // 如果主公身份是内奸,则将身份设置为内奸
                                    if (game.zhu.identity == 'fan') game.zhu.setIdentity('fan'); // 如果主公身份是反,则将身份设置为反
                                    if (game.zhu.identity == 'zhong') game.zhu.setIdentity('zhong'); // 如果主公身份是忠,则将身份设置为忠
                                    game.log(game.zhu.name, '因帝威影响身份变成了', game.zhu.identity); // 输出主公的名字和身份
                                    player.identity = 'zhu'; // 将当前玩家的身份设置为主公
                                    game.zhu = player; // 将主公设置为当前玩家
                                    game.log(player.name, '发动帝威身份变成了', player.identity); // 输出当前玩家的名字和身份
                                    if (player.identity == 'zhu') player.setIdentity('zhu'); // 如果当前玩家的身份是主公,则将身份设置为主公
                                } else {
                                    player.draw();
                                }
                            },
                        },
                        // 时倒
                        时倒: {
                            audio: 'ext:神魔乱舞/audio:true', // 播放音效
                            forceDie: true, // 强制当前技能触发源死亡
                            trigger: {
                                global: 'dieAfter', // 技能触发时机:全局死亡结算后
                            },
                            filter(event, player) {
                                return event.player && event.player.isDead();
                            },
                            content() {
                                player.phase('nodelay'); // 将当前回合结束,并切换至下一回合的起始阶段
                            },
                        },
                        // 无限
                        无限: {
                            forceDie: true, // 强制当前技能触发源死亡
                            forced: true, // 频率技,即被动技能,在一定条件下自动触发
                            forced: true, // 强制执行
                            trigger: {
                                player: 'dieBefore', // 触发时机:玩家死亡前
                                player: 'damageBegin',
                            },
                            content() {
                                if (player == game.me) {
                                    // 如果当前玩家为本机玩家
                                    game.reloadCurrent(); // 重新加载当前游戏
                                } else {
                                    // 如果当前玩家为非本机玩家
                                    game.removePlayer(player); // 将该玩家移除出游戏
                                    game.log(player, '离开了本局游戏,穿梭到下一局游戏去了');
                                }
                            },
                        },
                        // 毁灭
                        毁灭: {
                            noAdd: true, // 不可被添加
                            fixed: true, // 触发条件固定,不受其他因素影响
                            charlotte: true, // 技能为主马甲技能,不实际产生游戏效果
                            audio: 'ext:神魔乱舞/audio:2', // 技能产生音效的编号
                            enable: 'phaseUse', // 出牌阶段发动
                            usable: 1, // 每回合一次,因为回合外没有你的出牌阶段
                            selectTarget: -1, // 选择一名目标
                            filterTarget(card, player, target) {
                                // 目标的限制条件
                                return target != player; // 目标不能为自己
                            },
                            content() {
                                'step 0';
                                /*for (var i = 0; i < targets.length; i++) {
                                     var target = targets[i];
                                     for (var j = 0; j < target.skills.length; j++) {
                                         var skill = lib.skill[target.skills[j]];
                                         if (skill.trigger && typeof skill.trigger === 'object' &&
                                             (skill.trigger.player === "dieBefore" || 
                                              (Array.isArray(skill.trigger.player) && skill.trigger.player.some(trigger => trigger.includes("die"))) ) &&
                                             skill.content && typeof skill.content === 'function' &&
                                             (skill.content.toString().includes("trigger.cancel") ||
                                              skill.content.toString().includes("trigger.finish") ||
                                              skill.content.toString().includes("trigger.untrigger")||
                                                 skill.content.toString().includes("game.over"))
                                             ) {
                                             // 在这里执行对应的操作,比如添加或修改 filter 方法
                                             if (skill.filter && typeof skill.filter === 'function') {
                                                 skill.filter = function(event, player) {
                                                     return false; // 返回false表示不允许触发该技能
                                                 };
                                             } else {
                                                 skill.filter = function(event, player) {
                                                     return false; // 返回false表示不允许触发该技能
                                                 };
                                             }
                                         }
                                     }
                                 }*/
                                for (var i = 0; i < targets.length; i++) {
                                    var target = targets[i];
                                    for (var j = 0; j < target.skills.length; j++) {
                                        var skill = lib.skill[target.skills[j]];
                                        if (skill.trigger && typeof skill.trigger === 'object' && (skill.trigger.player === 'dieBefore' || (Array.isArray(skill.trigger.player) && skill.trigger.player.some((trigger) => trigger.includes('die')))) && skill.content && (typeof skill.content === 'function' || typeof skill.content === 'object') && (skill.content.toString().includes('trigger.cancel') || skill.content.toString().includes('trigger.finish') || skill.content.toString().includes('trigger.untrigger') || skill.content.toString().includes('game.over'))) {
                                            // 在这里执行对应的操作,比如添加或修改 filter 方法
                                            if (skill.filter && (typeof skill.filter === 'function' || typeof skill.filter === 'object')) {
                                                skill.filter = function (event, player) {
                                                    return false; // 返回false表示不允许触发该技能
                                                };
                                            } else {
                                                skill.filter = function (event, player) {
                                                    return false; // 返回false表示不允许触发该技能
                                                };
                                            }
                                        }
                                    }
                                }
                                ('step 1');
                                for (var i = 0; i < targets.length; i++) {
                                    game.restoreOriginalDie(targets[i]);
                                    targets[i].die().source = player; // 将目标击杀,并将击杀者设为当前玩家
                                }
                            },
                        },
                        单挑: {
                            //技能名为<单挑>
                            forceDie: true, //强制当前事件被触发者立即死亡
                            init(player) {
                                //初始化(好习惯),获得这个技能时执行的内容
                                player.storage.单挑 = []; //初始没有牌
                            },
                            trigger: {
                                player: 'phaseBegin', //在玩家的回合开始时进行判断是否能够使用该技能
                            },
                            filter(event, player) {
                                //发动限制条件
                                return !player.storage.单挑开启; //玩家未开启单挑技能才可以发动该技能
                            },
                            content() {
                                'step 0';
                                player.storage.单挑开启 = true; //将单挑技能开启状态设为true
                                player
                                    .chooseTarget('是否跟一名玩家进入地狱单挑？', function (card, player, target) {
                                        //选择一名目标参与地狱单挑
                                        if (player == target) return false; //不能选择自己进行单挑
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        //AI智能判断
                                        return get.damageEffect(target, player, player); //根据各方面因素判断选择目标的优先级,AI选择更加有利的目标
                                    });
                                ('step 1');
                                if (result.bool) {
                                    //如果成功选择一名目标
                                    result.targets[0].addSkill('封印'); //给目标增加<封印>技能
                                    result.targets[0].addSkill('单挑2'); //给目标增加<单挑2>技能
                                    game.broadcastAll() + ui.background.setBackgroundImage('extension/神魔乱舞/image/异次元空间.jpg'); //广播所有玩家并更改游戏背景为<异次元空间>
                                    game.log(player, '将场地切换成地狱'); //记录日志,提示玩家已进入地狱
                                    player.addSkill('单挑1'); //给玩家自己增加<单挑1>技能
                                    player.addSkill('普度'); //给玩家自己增加<普度>技能
                                    var players = game.filterPlayer(function (current) {
                                        //获取游戏中除了玩家本身和选择的目标以外的所有玩家
                                        return current != player && current != result.targets[0];
                                    });
                                    var list = [];
                                    for (var i of players) {
                                        list.push(i); //将获取的玩家放置到一个列表中
                                        i.classList.add('hidden'); //玩家隐身
                                        i.addSkill('封印'); //给该玩家增加<封印>技能
                                        i.addSkill('限制'); //给该玩家增加<限制>技能
                                        game.players.remove(i); //移除该玩家,玩家不会再出现在游戏中
                                        player.storage.单挑 = list; //存储被隐身的玩家
                                    }
                                } else {
                                    event.finish(); //如果没有选择目标,直接结束该事件
                                }
                            },
                        },
                        单挑1: {
                            forceDie: true,
                            charlotte: true,
                            zhou: true,
                            trigger: {
                                global: 'dieBegin',
                            },
                            _priority: 188,
                            forced: true,
                            content() {
                                'step 0';
                                player.storage.单挑开启 = false;
                                if (player.hasSkill('普度')) {
                                    player.removeSkill('普度');
                                }
                                for (var i = 0; i < player.storage.单挑.length; i++) {
                                    player.storage.单挑[i].classList.remove('hidden'); //玩家移除隐身
                                    if (player.storage.单挑[i].hasSkill('封印')) {
                                        player.storage.单挑[i].removeSkill('封印');
                                    }
                                    if (player.storage.单挑[i].hasSkill('限制')) {
                                        player.storage.单挑[i].removeSkill('限制');
                                    }
                                    if (player.storage.单挑[i].isAlive()) {
                                        game.players.add(player.storage.单挑[i]);
                                    }
                                }
                            },
                        },
                        单挑2: {
                            charlotte: true,
                            forceDie: true,
                            zhou: true,
                            trigger: {
                                global: 'dieEnd',
                            },
                            _priority: 888,
                            forced: true,
                            content() {
                                'step 0';
                                if (player.hasSkill('封印')) {
                                    player.removeSkill('封印');
                                    game.broadcastAll() + ui.background.setBackgroundImage('image/background/' + lib.config.image_background + '.jpg');
                                    game.log(player, '脱离了地狱');
                                }
                                ('step 1');
                                if (player.hasSkill('单挑2')) {
                                    player.removeSkill('单挑2');
                                }
                            },
                        },
                        权倾: {
                            //技能名为<权倾>
                            group: ['权倾2', '权倾3'], //该技能包含的子技能
                            mark: true, //标记,获得该技能时添加一个标记
                            marktext: '花色', //标记显示的文本
                            intro: {
                                //标记介绍
                                content(suit) {
                                    return get.translation(suit) + '花色'; //显示标记对应的花色名称
                                },
                            },
                            init(player) {
                                //初始化(好习惯),获得这个技能时执行的内容
                                player.storage.权倾 = []; //初始没有牌
                            },
                            audio: 'ext:神魔乱舞/audio:2', //播放音效
                            enable: 'phaseUse', //出牌阶段发动
                            usable: 1, //每回合只能使用一次
                            selectCard: 1, //玩家选择一张手牌
                            filterCard: true, //任意手牌均可
                            position: 'h', //手牌
                            discard: false, //不需要弃置使用的手牌
                            filter(event, player) {
                                //使用限制条件
                                return player.countCards('h'); //如果玩家有手牌,则能够使用该技能
                            },
                            content() {
                                //技能的具体效果
                                player.showCards(cards); //显示选择的手牌
                                player.gain(cards); //将手牌加入到玩家的牌堆中
                                player.storage.权倾 = cards.suit; //存储添加标记的花色
                                game.addVideo('storage', player, ['权倾', player.storage.权倾]); //记录日志
                                player.markSkill('权倾'); //为该技能添加标记
                            },
                        },
                        权倾2: {
                            //子技能2
                            audio: 'ext:神魔乱舞/audio:2', //QQQ
                            trigger: {
                                //触发时机
                                player: 'useCard', //当该玩家使用一张卡牌时触发
                            },
                            forced: true, //频繁发动
                            filter(event, player) {
                                //触发条件
                                return event.card.suit != player.storage.权倾; //如果该卡牌的花色不是玩家存储的标记花色,则可以发动该技能
                            },
                            content() {
                                //技能的具体效果
                                player.draw(); //摸一张牌
                            },
                            ai: {
                                threaten: 1.4, //威胁值
                            },
                        },
                        权倾3: {
                            //子技能3
                            trigger: {
                                //触发时机
                                global: 'phaseUseEnd', //当任意一名角色出牌阶段结束时触发
                            },
                            silent: true, //不显示提示信息
                            content() {
                                //技能的具体效果
                                delete player.storage.权倾; //删除存储的标记花色
                                player.unmarkSkill('权倾'); //移除标记
                            },
                        },
                        轮回: {
                            fixed: true, //固定不变技能
                            charlotte: true, //可以受到夏洛特的卡牌指定
                            forced: true, //强制发动
                            forceDie: true, //死亡时必然发动
                            trigger: {
                                //触发时机
                                global: 'dieAfter', //任何一名角色死亡后触发
                            },
                            forced: true, //强制发动
                            forced: true, //直接执行
                            filter(event, player) {
                                //触发条件
                                if (game.players.length == 1) return true; //如果当前场上只有该玩家,则可发动
                                var alive = game.players;
                                var enemies = alive[0].getEnemies(); //获取敌方角色
                                if (enemies.length == 0) return true; //如果敌方角色已全部阵亡,则可发动
                                return false;
                            },
                            content() {
                                //技能的具体效果
                                game.broadcastAll(function (player) {
                                    var efflist = [];
                                    for (var i = 0; i < game.dead.length; i++) {
                                        //遍历所有已死亡角色
                                        efflist.push(game.dead[i]); //将该已死亡角色加入efflist列表
                                        player.line(game.dead[i], 'green'); //与该已死亡角色连线并变绿
                                    }
                                    for (var i = 0; i < efflist.length; i++) {
                                        //遍历efflist列表
                                        game.log(player, '令', efflist[i], '进入了轮回');
                                        efflist[i].revive(efflist[i].maxHp); //将已死亡角色复活,并回复满血
                                        efflist[i].identity = efflist[i].identity; //重置身份
                                        efflist[i].setIdentity();
                                        efflist[i].draw(4); //摸四张牌
                                    }
                                }, player);
                            },
                        },
                        应对: {
                            group: '应对2', // ["应对1", "应对2","应对3"], //技能分组,便于其他技能调用
                            trigger: {
                                player: ['chooseToRespondBegin', 'chooseToUseBegin'], //响应玩家使用牌的事件
                            },
                            forced: true, //强制发动
                            _priority: 10, //优先级较高,优先执行
                            filter(event, player) {
                                //过滤条件
                                if (event.responded) return false; //如果已经有其他技能响应,则不再响应
                                //判断事件中是否存在【闪】或【杀】
                                /*return event.filterCard({
                                    name: 'shan'
                                }) || event.filterCard({
                                    name: 'sha'
                                })*/
                                if (event.name == 'chooseToUse' && _status.currentPhase == player) return false;
                                return true;
                            },
                            content() {
                                //响应内容
                                /* trigger.untrigger(); //取消事件
                                  trigger.responded = true; //标记为已响应
                                  if (trigger.filterCard({
                                          name: 'shan' //如果事件中有【闪】
                                      }))
                          trigger.result = {
                                      bool: true,
                                      card: {
                                          name: 'shan'
                                      } //选择响应【闪】
                          }*/
                                trigger.untrigger();
                                if (
                                    trigger.filterCard({
                                        name: 'shan', //如果事件中有【闪】
                                    })
                                ) {
                                    trigger.set('responded', true);
                                    trigger.result = { bool: true, card: { name: 'shan' } };
                                    var card = game.createCard('shan');
                                    player.$throw(card, 1000);
                                    game.cardsGotoSpecial(card);
                                } else if (
                                    trigger.filterCard({
                                        name: 'sha', //如果事件中有杀
                                    })
                                ) {
                                    trigger.set('responded', true);
                                    trigger.result = {
                                        bool: true,
                                        card: {
                                            name: 'sha',
                                        }, //选择响应【杀】
                                    };
                                    var card = game.createCard('sha');
                                    player.$throw(card, 1000);
                                    game.cardsGotoSpecial(card);
                                }
                            },
                            ai: {
                                respondShan: true,
                                respondSha: true,
                            },
                        },
                        /*应对1: {
                             forced: true, //强制执行
                             trigger: {
                                 target: "shaBegin", //响应目标为使用【杀】时
                             },
                             content() { //响应内容
                                 'step 0'
                         if (!trigger.directHit) {  // 不是直接命中
                         player.useCard({
                                     name: 'shan', //牌名闪
                                 });
                               trigger.untrigger(); //取消事件
                                trigger.finish(); //结束事件
                         }
                             }
                         },*/
                        应对2: {
                            audio: 'ext:神魔乱舞/audio:2', //播放音效
                            enable: ['chooseToUse', 'chooseToRespond'], //该技能可用于使用和响应两种情况
                            filterCard: {
                                //过滤条件为手牌中的闪
                                name: 'shan',
                            },
                            viewAs: {
                                //视为出牌为杀
                                name: 'sha',
                            },
                            viewAsFilter(player) {
                                //使用限制,需要有【闪】才能视为【杀】
                                if (!player.countCards('h', 'shan')) return false;
                            },
                            prompt: '将一张闪当杀使用或打出', //提示文字
                            check() {
                                //AI智能判断权值
                                return 1;
                            },
                            ai: {
                                //AI分析
                                effect: {
                                    //响应效果
                                    target(card, player, target, current) {
                                        //杀对目标的效果
                                        if (get.tag(card, 'respondSha') && current < 0) return 0.6;
                                    },
                                },
                                respondSha: true, //可以响应杀使用的条件
                                skillTagFilter(player) {
                                    //技能提示
                                    if (!player.countCards('h', 'shan')) return false;
                                },
                                order: 4, //执行顺序
                                useful: -1, //实用性
                                value: -1, //价值
                            },
                        },
                        /*应对3: {
                             forced: true, //强制执行
                             trigger: {
                                 target: "nanmanBegin", //响应目标为使用【南蛮】时
                             },
                             content() { //响应内容
                                 'step 0'
                         if (!trigger.directHit) {  // 不是直接命中
                                 player.useCard({
                                     name: 'sha',
                                 });
                             trigger.untrigger();
                             trigger.finish();
                         }
                             }
                         },*/
                        死亡世界: {
                            group: ['死亡世界1', '死亡世界2'], //技能分组
                            forced: true, //强制发动
                            fixed: true, //固定在该牌上
                            charlotte: true, //标记为夏洛特专属技能
                            forceDie: true, //强制死亡
                            trigger: {
                                //触发条件:全局游戏开始和玩家回合结束后
                                global: 'gameStart',
                                player: 'phaseAfter',
                            },
                            content() {
                                //响应内容
                                player.die = function () {
                                    //自定义角色死亡方法
                                    player.$die(); //显示死亡画面
                                    player.classList.remove('likedead'); //移除角色的类
                                    player.classList.add('dead'); //添加<已死亡>的类
                                    game.players.remove(player); //从游戏中移除玩家
                                    game.dead.push(player); //将角色加入已死亡角色列表
                                    game.log(player, '死亡'); //在游戏日志中记录角色死亡
                                };
                                player.die(); //执行自定义玩家死亡方法
                            },
                        },
                        死亡世界1: {
                            mod: {
                                //技能效果:将所有出牌阶段可以使用的杀变为无限使用
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity; //如果出牌为杀,则将可用次数设置为无限
                                },
                                targetInRange(card, player, target, now) {
                                    //可以攻击任何距离的目标
                                    return true;
                                },
                                cardname(card, player) {
                                    //神杀技能
                                    return 'sha';
                                },
                                cardnature(card, player) {
                                    if (card.name == 'sha') {
                                        var cardnature = ['thunder', 'fire', 'kami', 'ice'];
                                        var randomIndex = Math.floor(Math.random() * 4);
                                        return cardnature[randomIndex];
                                    }
                                },
                                globalFrom(from, to, distance) {
                                    //距离定义为无穷远
                                    return distance - lnfinity;
                                },
                            },
                            forceDie: true, //强制死亡
                            forced: true, //必须发动
                            fixed: true, //固定在该牌上
                            charlotte: true, //标记为夏洛特专属技能
                            trigger: {
                                //触发条件:全局弃牌阶段结束后
                                global: 'phaseDiscardAfter',
                            },
                            filter(event, player) {
                                //过滤条件:只有当其他玩家弃牌后这个技能才会发动
                                return (event.player != player && event.player == player.previous) || game.players.length == 1;
                            },
                            content() {
                                //响应内容
                                player.die = game.kongfunc; //将玩家的死亡方法置空
                                player.classList.remove('dead'); //移除角色的类
                                game.players.add(player); //添加回游戏中
                                game.dead.remove(player); //从已死亡角色列表中移除
                                player.classList.add('likedead'); //添加类,表示玩家进入灵魂状态
                                game.log(player, '进入灵魂状态'); //在游戏日志中记录玩家进入灵魂状态
                            },
                        },
                        死亡世界2: {
                            forceDie: true, //强制死亡
                            trigger: {
                                //触发条件:任意角色进入濒死状态时
                                global: 'dyingBegin',
                            },
                            _priority: 10, //优先级,用于确定技能的触发顺序
                            logTarget: 'player', //在游戏日志中记录玩家
                            filter(event, player) {
                                //过滤条件:只有其他玩家进入濒死状态时该技能会发动
                                return event.player != player;
                            },
                            content() {
                                //响应内容:将进入濒死状态的其他玩家直接强制死亡
                                trigger.player.die().source = player;
                            },
                            ai: {
                                //AI评估值
                                threaten: 1.2,
                            },
                        },
                        无耻: {
                            audio: 'ext:神魔乱舞/audio:2', //音频提示
                            trigger: {
                                //触发条件:玩家使用【杀】或【决斗】开始阶段
                                player: 'useCardToBegin',
                            },
                            filter(event, player) {
                                //过滤条件:只有当场上有3个及以上的玩家并且当前玩家出牌为【杀】或【决斗】时才能发动
                                return event.player == player && game.players.length >= 3 && event.card && (event.card.name == 'sha' || event.card.name == 'juedou');
                            },
                            content() {
                                //响应内容
                                'step 0';
                                player.chooseTarget('是否发动【无耻】?', [1, Infinity], function (card, player, target) {
                                    //让玩家选择1~n个目标
                                    return player != target && trigger.target != target;
                                }).ai = function (target) {
                                    return 6 - get.attitude(player, target);
                                };
                                ('step 1');
                                if (result.bool) {
                                    //如果玩家选择了目标
                                    //在游戏日志中记录玩家发动了该技能,并且选择了哪些目标
                                    var list = [];
                                    for (var i = 0; i < result.targets.length; i++) {
                                        //循环遍历选中的目标
                                        result.targets[i].useCard(trigger.card, trigger.target); //让目标使用卡牌
                                        //trigger.target.nodying = true; //设置目标为不会死亡状态
                                        trigger.target.addSkill('无耻2'); //向目标添加技能<无耻2>
                                        game.log(result.targets[i], '成为了', player, '帮凶'); //在游戏日志中记录选中的目标成为了该玩家的帮凶
                                    }
                                }
                                ('step 2');
                                //  delete trigger.target.nodying; //删除目标的<不死状态>
                                trigger.target.removeSkill('无耻2'); //移除目标的技能<无耻2>
                            },
                        },
                        无耻2: {
                            forced: true, //触发方式为强制
                            trigger: {
                                //触发条件:当前角色进入濒死状态
                                player: 'dyingBegin',
                            },
                            content() {
                                //响应内容
                                trigger.cancel(); //取消当前角色的濒死状态
                            },
                        },
                        召唤: {
                            // 初始化阶段,对应玩家存储<召唤>技能的数组为空
                            init(player) {
                                player.storage.召唤 = [];
                                player.storage.位置 = [];
                            },
                            // 技能介绍中展示玩家拥有召唤角色的玩家列表
                            intro: {
                                content: 'players',
                            },
                            // 标记显示在玩家的武将牌上
                            marktext: '武将牌',
                            // 标记为真
                            mark: true,
                            // 子技能,包括gainMark和clearMark
                            group: ['召唤_gainMark', '召唤_clearMark'],
                            subSkill: {
                                // gainMark子技能,此技能强制触发,全局监听游戏开始,过滤条件为<召唤>数组为空
                                gainMark: {
                                    forced: true,
                                    _priority: 999, // 优先级设为999
                                    trigger: {
                                        global: 'gameStart',
                                        //global:"showCharacterAfter"
                                    },
                                    filter(event, player) {
                                        return player.storage.召唤.length <= 0;
                                    },
                                    content() {
                                        'step 0';
                                        // 获取当前游戏除该玩家外其他所有玩家
                                        var players = game.filterPlayer(function (current) {
                                            return current != player && current.name != player.name;
                                        });
                                        // 获取其他所有玩家的血量
                                        var hp = players.hp;
                                        var list = [];
                                        // 遍历所有其他玩家,将每个玩家加入<召唤>数组,并在日志中显示该玩家被记录到武将牌上
                                        for (var i of players) {
                                            list.push(i);
                                            player.storage.召唤 = list;
                                        }
                                        var playerCount = game.players.length;
                                        var playerh = player.storage.召唤.length;
                                        for (var i = 1; i <= playerh; i++) {
                                            player.storage.位置.push(playerCount + i);
                                        }
                                        game.log(player, '把', players, '记录到武将牌上');
                                    },
                                },
                                // clearMark子技能,监听玩家回合进入前,过滤条件为<召唤>数组不为空
                                clearMark: {
                                    audio: 'ext:神魔乱舞/audio:1',
                                    trigger: {
                                        player: 'phaseBefore',
                                    },
                                    prompt(event, player) {
                                        var str;
                                        if (get.mode() != 'guozhan') {
                                            str = '是否跳过回合,召唤一名武将牌上的角色上场';
                                        } else {
                                            str = '是否选择一名武将牌上的角色替换你的另一名角色';
                                        }
                                        return str;
                                    },
                                    filter(event, player) {
                                        return player.storage.召唤.length;
                                    },
                                    content() {
                                        'step 0';
                                        // 取消当前回合触发的所有效果,即清除当前回合前的所有技能响应和状态,并展示选择召唤的角色
                                        if (get.mode() != 'guozhan') {
                                            trigger.cancel();
                                        }
                                        player
                                            .chooseButton(true)
                                            .set('ai', function (button) {
                                                return Math.random();
                                            })
                                            .set('createDialog', ['请选择一名武将牌上的角色克隆!', [player.storage.召唤, 'player']]);
                                        ('step 1');
                                        // 如果选择了召唤的角色,进行下一步操作
                                        if (result.bool) {
                                            if (get.mode() == 'guozhan') {
                                                if (player.name == player.name1) {
                                                    player.reinit(player.name2, result.links[0].name);
                                                    player.storage.召唤.remove(result.links[0]);
                                                } else if (player.name == player.name2) {
                                                    player.reinit(player.name1, result.links[0].name);
                                                    player.storage.召唤.remove(result.links[0]);
                                                }
                                            } else {
                                                var pos = player.storage.位置.shift();
                                                var fellow = game.addPlayer(pos, result.links[0].name);
                                                fellow.getId();
                                                if (['tafang', 'chess'].includes(get.mode())) {
                                                    return {};
                                                }
                                                game.arrangePlayers(); // 重新排列玩家
                                                player.storage.召唤.remove(result.links[0]);
                                                game.log(fellow, '被', player, '召唤上场了');
                                                game.log(player, '武将牌记录移除了', fellow);
                                                if (lib.config.mode == 'doudizhu') {
                                                    fellow.identity = player.identity;
                                                    fellow.showIdentity();
                                                    fellow.draw(fellow.maxHp);
                                                } else {
                                                    fellow.draw(fellow.maxHp);
                                                    if (get.mode() == 'identity') {
                                                        player.identity != 'zhu' ? (fellow.identity = player.identity) : (fellow.identity = 'zhong');
                                                        fellow.showIdentity();
                                                        ui.arena.setNumber(pos);
                                                        fellow.ai.modAttitudeFrom = (from, to, att) => (to.identity == 'zhu' || to.identity == 'zhong' ? 10 : -10);
                                                    } else if (lib.config.mode == 'doudizhu') {
                                                        fellow.side = player.side;
                                                        fellow.identity = player.identity;
                                                        fellow.setIdentity(fellow.identity);
                                                    } else {
                                                        fellow.identity = player.identity;
                                                        fellow.side = player.side;
                                                        fellow.setIdentity('召唤物');
                                                        fellow.node.identity.dataset.color = fellow.identity;
                                                        if (lib.config.mode == 'boss') {
                                                            ui.arena.setNumber(pos + 1);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        卑鄙: {
                            audio: 'ext:神魔乱舞/audio:2', // 技能发动时的音效
                            trigger: {
                                target: 'useCardToBegin', // 触发条件为其他角色对你使用牌开始时
                            },
                            filter(event, player) {
                                // 过滤条件,保证只有当其他角色使用【杀】或【决斗】对你使用牌时才会触发该技能
                                return event.player != player && game.players.length >= 3 && event.card && (event.card.name == 'sha' || event.card.name == 'juedou');
                            },
                            content() {
                                'step 0';
                                // 选择额外目标,符合条件的目标可以被选择多个,范围是1到Infinity
                                player.chooseTarget('是否发动【卑鄙】?', [1, Infinity], function (card, player, target) {
                                    return player != target && trigger.player != target;
                                }).ai = function (target) {
                                    return 6 - get.attitude(player, target);
                                };
                                ('step 1');
                                if (result.bool) {
                                    // 输出技能释放日志
                                    for (var i = 0; i < result.targets.length; i++) {
                                        trigger.targets.push(result.targets[i]); // 添加额外目标至出牌目标中
                                        game.log(result.targets[i], '成为了额外目标'); // 输出目标成为额外目标的日志
                                    }
                                }
                            },
                        },
                        复原: {
                            init(player) {
                                // 初始化玩家存储的<复原>数组
                                player.storage.复原 = [];
                                player.storage.牌名 = [];
                            },
                            intro: {
                                content: 'cards', // 技能说明,展示持有的牌
                            },
                            marktext: '牌', // 标记文本显示为<牌>
                            mark: true, // 标记处于激活状态
                            group: ['复原_gainMark', '复原_clearMark'], // 技能分组,包含<复原_gainMark>和<复原_clearMark>两个子技能
                            subSkill: {
                                gainMark: {
                                    forced: true, // 该子技能是强制触发的
                                    trigger: {
                                        player: 'loseBegin', // 触发条件为你失去一张牌
                                    },
                                    /*  filter(event, player) { // 过滤条件,只有当这张失去的牌属于装备区时才会触发该技能
                                          var evt = event.getl(player);
                                          return evt && evt.player == player && !evt.es;
                                      },*/
                                    content() {
                                        'step 0';
                                        var cardsToAdd = [];
                                        var cardname = [];
                                        for (var i = 0; i < trigger.cards.length; i++) {
                                            var card = trigger.cards[i].name;
                                            if (!player.storage.牌名.includes(card)) {
                                                cardsToAdd.push(trigger.cards[i]);
                                                cardname.push(card);
                                            }
                                        }
                                        player.storage.复原 = player.storage.复原.concat(cardsToAdd); // 将未包含的牌名添加到<复原>数组中
                                        player.storage.牌名 = player.storage.牌名.concat(cardname); // 将未包含的牌名添加到<复原>数组中
                                        // 同步<复原>数组至客户
                                        //player.storage.复原 = player.storage.复原.concat(trigger.cards); // 将失去的牌添加到<复原>数组中
                                        // 同步<复原>数组至客户端
                                    },
                                },
                                clearMark: {
                                    audio: 'ext:神魔乱舞/audio:1', // 技能发动时的音效
                                    trigger: {
                                        player: 'phaseDrawBefore', // 触发条件为你摸牌阶段开始前
                                    },
                                    forced: true, // 该子技能是强制触发的
                                    filter(event, player) {
                                        // 过滤条件,只有当<复原>数组中存在牌时才会触发该技能
                                        return player.storage.复原.length;
                                    },
                                    content() {
                                        trigger.cancel(); // 取消摸牌阶段
                                        var cards = [];
                                        for (var i = 0; i < player.storage.复原.length; i++) {
                                            cards.push(game.createCard(player.storage.复原[i])); // 将<复原>数组中的牌转化为卡牌对象
                                        }
                                        player.gain(cards); // 将这些卡牌加入到手牌中
                                        player.storage.复原 = []; // 清空<复原>数组
                                        player.storage.牌名 = [];
                                        // 同步<复原>数组至客户端
                                    },
                                },
                            },
                        },
                        幻化: {
                            trigger: {
                                player: 'phaseBefore', // 触发时机:在你的回合开始前触发.
                            },
                            filter(event, player) {
                                // 筛选条件:如果你已经拥有幻化1技能,则不能触发该技能.否则满足条件.
                                if (player.hasSkill('幻化1')) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                if (player.countCards('hej') > 0) {
                                    // 判断是否有牌
                                    player.chooseToDiscard(player.countCards('hej', -1), true); // 弃置所有的牌
                                }
                                ('step 1');
                                if (player == game.me) {
                                    // 如果当前玩家是你自己
                                    var list = [];
                                    for (var i in lib.character) {
                                        list.push(i);
                                    }
                                    var players = game.replacePlayer(player, list.randomGet()); // 随机选择一个角色进行替换
                                    players.addSkill('幻化'); // 添加幻化技能
                                    players.identity = player.identity; // 身份保持不变
                                    players.showIdentity(true); // 展示身份
                                    if (players.identity == 'zhu') {
                                        // 如果替换成的角色是主公
                                        game.zhu = players; // 标记主公
                                        players.showIdentity(true); // 展示身份
                                    }
                                    players.hp = player.hp; // 生命值设为原来的生命值
                                    players.draw(4); // 抽4张牌
                                    players.phase('nodelay'); // 进入准备阶段
                                    players.addSkill('幻化1'); // 获得技能<幻化1>
                                } else if (player != game.me) {
                                    // 如果当前玩家不是你自己
                                    var list = [];
                                    for (var i in lib.character) {
                                        list.push(i);
                                    }
                                    var players = game.replacePlayer(player, list.randomGet()); // 随机选择一个角色进行替换
                                    players.getId();
                                    players.addSkill('幻化'); // 添加幻化技能
                                    players.identity = player.identity; // 身份保持不变
                                    players.showIdentity(true); // 展示身份
                                    if (players.identity == 'zhu') {
                                        // 如果替换成的角色是主公
                                        game.zhu = players; // 标记主公
                                        players.showIdentity(true); // 展示身份
                                    }
                                    players.addSkill('幻化1'); // 获得技能<幻化1>
                                    players.draw(4); // 抽4张牌
                                    players.hp = player.hp; // 生命值设为原来的生命值
                                    players.phase('nodelay'); // 进入准备阶段
                                }
                            },
                        },
                        幻化1: {
                            forced: true, // 该技能是强制触发的
                            trigger: {
                                player: 'phaseAfter', // 触发时机:在回合结束时触发
                            },
                            content() {
                                // 技能效果:移除<幻化1>技能
                                var players = game.replacePlayer(player, '鸿钧');
                                players.identity = player.identity;
                                players.showIdentity(true);
                                if (players.identity == 'zhu') {
                                    game.zhu = players;
                                    players.showIdentity(true);
                                }
                                players.hp = player.hp;
                                players.draw(4); // 抽4张牌
                            },
                        },
                        气条: {
                            // 技能名称为<气条>
                            superCharlotte: true, // 超绝杀使用时只能搭配同类技能
                            forced: true, // 频繁触发的技能
                            forced: true, // 强制触发的技能
                            trigger: {
                                // 触发技能的对象和时机
                                player: ['useCardAfter', 'respondAftter'], // 在玩家出牌或响应后触发
                            },
                            mark: true, // 界面上会显示标记
                            // 标记不可被清除
                            init(player) {
                                // 初始化函数
                                player.storage.气条 = 0; // 初始时气条数为0
                                game.addVideo('storage', player, ['气条', player.storage.气条]); // 添加<气条>标记到玩家存储区域
                            },
                            async content(event, trigger, player) {
                                //QQQ
                                if (player.storage.气条 <= 3) {
                                    // 触发条件为气条数小于等于3
                                    player.storage.气条 += 1; // 气条数+1
                                    game.addVideo('storage', player, ['气条', player.storage.气条]); // 显示更新后的气条数
                                }
                            },
                            intro: {
                                // 界面上的介绍信息
                                name: '气条', // 技能名称为<气条>
                                content: '你有#个气', // 当前气条数会被填充到#的位置
                            },
                        },
                        八酒杯: {
                            // 技能名称为<八酒杯>
                            audio: 'ext:神魔乱舞/audio:true', // 播放音频
                            trigger: {
                                // 触发技能的对象和时机
                                player: ['phaseBegin'], // 在玩家回合开始时触发
                            },
                            forced: true, // 玩家需要亲自指定目标
                            // 限定一次发动
                            filter(event, player) {
                                // 过滤函数:当气条数大于等于2时才能发动
                                return player.storage.气条 >= 2;
                            },
                            content() {
                                // 技能效果:让一名其他角色翻面,并播放特效
                                'step 0';
                                player
                                    .chooseTarget('是否发动八酒杯令一名角色翻面？', function (card, player, target) {
                                        // 让玩家选择一个其他角色作为技能的目标
                                        if (player == target) return false; // 目标不能是自己
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        // 设置电脑AI算法
                                        return get.damageEffect(target, player, player); // 根据伤害来评估目标的好坏
                                    });
                                ('step 1');
                                if (result.bool) {
                                    // 如果成功选择了目标,则进入下一步
                                    event.goto(2);
                                } else {
                                    // 否则结束技能的发动
                                    event.finish();
                                }
                                ('step 2');
                                // 隐藏所有其他玩家,并播放特效
                                var players = game.filterPlayer(function (current) {
                                    return current != result.targets[0];
                                });
                                var dead = game.dead;
                                for (var j = 0; j < dead.length; j++) {
                                    dead[j].classList.add('hidden'); // 死人隐身
                                }
                                var list = [];
                                for (var i of players) {
                                    list.push(i);
                                    i.classList.add('hidden'); // 活人隐身
                                }
                                setTimeout(function () {
                                    var list = [];
                                    for (var i of players) {
                                        list.push(i);
                                        i.classList.remove('hidden'); // 活人清除隐身
                                    }
                                    for (var j = 0; j < dead.length; j++) {
                                        dead[j].classList.remove('hidden'); //死人移除隐身
                                    }
                                }, 4000);
                                // 播放音频和动画特效
                                player.line(result.targets[0], 'watermm');
                                event.targets = result.targets[0];
                                event.targets.style.transform = 'scale(' + 0.4 + ')rotate(-840deg)';
                                event.targets.style.left = 'calc(50% - 120px)';
                                event.targets.style.top = 'calc(50% - 60px)';
                                event.targets.style.zIndex = 111;
                                game.mp47('八酒杯');
                                game.playeranimaudio('八酒杯', 'extension/神魔乱舞/audio/八酒杯.mp3', 3000);
                                setTimeout(function () {
                                    event.targets.removeAttribute('style');
                                }, 4000);
                                setTimeout(function () {
                                    event.targets.node.avatar.yi(
                                        'extension/神魔乱舞/武将牌特效生命代偿.gif',
                                        {
                                            width: '100%',
                                            height: '100%',
                                        },
                                        6000
                                    );
                                }, 3000);
                                // 让目标翻面并扣除玩家的气条
                                event.targets.turnOver();
                                player.removeMark('气条', 2);
                            },
                        },
                        八稚女: {
                            // 技能名称
                            audio: 'ext:神魔乱舞/audio:true', // 播放音频
                            trigger: {
                                player: ['phaseBegin'], // 在玩家回合开始时触发
                            },
                            forced: true, // 玩家需要亲自指定目标
                            // 限定一次发动
                            filter(event, player) {
                                // 过滤函数:只有当气条数大于等于2时才能发动
                                return player.storage.气条 >= 2;
                            },
                            content() {
                                // 技能效果:对一名其他角色造成随机1-3点火焰伤害,并播放特效
                                'step 0';
                                player
                                    .chooseTarget('是否发动八稚女对一名角色造成随机1-3点🔥伤害？', function (card, player, target) {
                                        // 让玩家选择一个其他角色作为技能的目标
                                        if (player == target) return false; // 目标不能是自己
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        // 设置电脑AI算法
                                        return get.damageEffect(target, player, player); // 根据伤害来评估目标的好坏
                                    });
                                ('step 1');
                                if (result.bool) {
                                    // 如果成功选择了目标,则进入下一步
                                    event.goto(2);
                                } else {
                                    // 否则结束技能的发动
                                    event.finish();
                                }
                                ('step 2');
                                // 隐藏所有其他玩家,并播放特效
                                var players = game.filterPlayer(function (current) {
                                    return current != result.targets[0];
                                });
                                var dead = game.dead;
                                for (var j = 0; j < dead.length; j++) {
                                    dead[j].classList.add('hidden'); // 死人隐身
                                }
                                var list = [];
                                for (var i of players) {
                                    list.push(i);
                                    i.classList.add('hidden'); // 活人隐身
                                }
                                setTimeout(function () {
                                    var list = [];
                                    for (var i of players) {
                                        list.push(i);
                                        i.classList.remove('hidden'); // 玩家清除隐身
                                    }
                                    for (var j = 0; j < dead.length; j++) {
                                        dead[j].classList.remove('hidden'); // 死人移除隐身
                                    }
                                }, 6000);
                                // 更改背景图片和打印日志
                                game.broadcastAll() + ui.background.setBackgroundImage('extension/神魔乱舞/image/97擂台.jpg');
                                game.log(player, '将场地切换成97擂台');
                                // 播放音频和动画特效
                                player.line(result.targets[0], 'watermm');
                                event.targets = result.targets[0];
                                event.targets.style.transform = 'scale(' + 0.4 + ')rotate(-840deg)';
                                event.targets.style.left = 'calc(50% - 120px)';
                                event.targets.style.top = 'calc(50% - 60px)';
                                event.targets.style.zIndex = 111;
                                game.mp47('八稚女');
                                game.playeranimaudio('八稚女', 'extension/神魔乱舞/audio/八稚女.mp3', 6000);
                                setTimeout(function () {
                                    event.targets.removeAttribute('style');
                                }, 6000);
                                var type = get.rand(1, 3);
                                event.targets.node.avatar.yi(
                                    'extension/神魔乱舞/出血动画.gif',
                                    {
                                        width: '100%',
                                        height: '100%',
                                    },
                                    6000
                                );
                                event.targets.damage(type, 'notrigger', 'nosource', 'fire')._triggered = null;
                                // 扣除玩家的气条
                                player.removeMark('气条', 2);
                            },
                            ai: {
                                nohujia: true,
                            }, //QQQ
                        },
                        食谱: {
                            // 技能名称
                            trigger: {
                                player: 'phaseUseBegin', // 在玩家使用阶段开始时触发
                            },
                            forced: true, // 玩家需要亲自指定目标
                            audio: 'ext:神魔乱舞/audio:2', // 触发时播放音效
                            content() {
                                // 技能效果:让玩家选择一名其他角色,展示该角色手牌中的1-5张牌,并让该角色选择是否摸取展示的牌数张牌
                                'step 0';
                                player
                                    .chooseTarget('是否发动【食谱】', lib.translate.食谱_info, function (card, player, target) {
                                        return target != player && target.countCards('h');
                                    })
                                    .set('ai', function (target) {
                                        // 设置电脑AI算法
                                        var player = _status.event.player;
                                        if (
                                            get.attitude(player, target) > 0 &&
                                            target.countCards('h', {
                                                name: 'sha',
                                            }) == 0
                                        )
                                            return 3; // 如果目标是友方且没有杀,则可以优先选择
                                        if (get.attitude(player, target) <= 0)
                                            return (
                                                target.countCards('h', {
                                                    name: 'sha',
                                                }) + 1
                                            ); // 如果目标是敌方,则计算它的手牌中有多少张杀
                                        return false;
                                    });
                                ('step 1');
                                if (result.targets && result.targets[0] && result.targets[0].countCards('h')) {
                                    // 如果成功选择了目标,则展示1-5张牌,并让目标选择是否摸取这些牌
                                    player.choosePlayerCard('选择你要展示的牌.', 'h', result.targets[0], [1, 5], true);
                                    event.target = result.targets[0]; // 记录选择的目标
                                }
                                ('step 2');
                                if (result.links && result.links.length) {
                                    // 如果成功选择了展示的牌,则判断是否有杀
                                    var yousha = false;
                                    player.showCards(result.links);
                                    for (var i of result.links) {
                                        if (i.name == 'sha') {
                                            yousha = true;
                                            event.target.useCard(i, player, false); // 如果展示的牌中有杀,则直接让该目标出杀
                                        }
                                    }
                                    if (yousha == false) {
                                        // 如果展示的牌中没有杀,则询问是否让该目标摸取这些牌数张牌
                                        event.drawnum = result.links.length; // 记录需要摸取的牌数
                                        player
                                            .chooseControl(['是', '否'], true)
                                            .set('prompt', '是否令' + lib.translate[event.target.name] + '摸' + result.links.length + '张牌.')
                                            .set('ai', function () {
                                                var player = _status.event.player;
                                                if (get.attitude(player, target) > 0) return '是';
                                                return '否';
                                            });
                                    }
                                }
                                ('step 3');
                                if (result.control == '是') {
                                    // 如果选择的是让该目标摸牌,则让该目标抽取所需数量的牌
                                    event.target.draw(event.drawnum);
                                }
                                ('step 4');
                                if (result.control == '否') {
                                    // 如果不让该目标摸牌,则让当前玩家抽取这些牌
                                    player.draw(event.drawnum);
                                }
                            },
                        },
                        变小: {
                            group: '缩小1', // 技能所属的技能组
                            enable: 'phaseUse', // 在出牌阶段发动
                            usable: 1, // 每回合可以使用一次
                            selectCard: [1, Infinity], // 需要弃置至少一张手牌
                            filterCard: true, // 可以选择任意牌
                            position: 'h', // 选择的牌应该是手牌中的牌
                            check(card) {
                                // AI判断选牌价值的函数,返回值越大代表这张牌越好
                                return 3 - get.value(card); // 优先选择价值为7的牌
                            },
                            filter(event, player) {
                                // 发动条件
                                return player.countCards('h'); // 手牌数大于0时才能发动
                            },
                            content() {
                                // 技能效果:缩小自己的形象
                                var num = cards.length; // 记录弃置的牌的数量
                                var n = num + 1; // 缩小的比例,与弃置的牌的数量有关
                                player.style.transform = 'scale(' + 1 / n + ')'; // 设置玩家的缩放比例
                                player.storage.变小 = num; // 记录弃置的牌的数量,方便其他技能使用
                                player.addTempSkill('变小1'); // 添加一个临时技能<变小1>,用于在回复形象时触发
                            },
                            ai: {
                                order: 10, // 触发优先级为10,表示比较高
                                result: {
                                    player: 1, // 对己方玩家的评价为1(能减少体积,提高躲避敌人的效果)
                                },
                            },
                        },
                        缩小1: {
                            forced: true, // 该技能的触发是强制的,不需要玩家选择是否触发
                            trigger: {
                                player: 'phaseAfter', // 触发时机:回合结束时
                            },
                            filter(event, player) {
                                // 发动条件:总是成立
                                return true;
                            },
                            content() {
                                // 技能效果:回复原来的形象
                                player.style.transform = 'scale(' + 1 + ')'; // 回复缩放比例
                                player.reinit(player.name, '斯科特朗'); // 更换角色
                                delete player.storage.变小; // 删除弃置牌数量的记录
                                var ee = player.getCards('e', { name: '皮姆粒子' });
                                player.lose(ee, ui.special, 'toStorage');
                            },
                        },
                        变小1: {
                            mod: {
                                cardUsable(card, player, num) {
                                    // 出杀限制
                                    if (card.name == 'sha') return num + player.storage.变小; // 出杀的使用次数增加
                                },
                                globalFrom(from, to, current) {
                                    // 攻击次数限制
                                    return current - Math.max(0, from.storage.变小); // 攻击次数减少
                                },
                            },
                        },
                        皮姆: {
                            forced: true, // 该技能的触发是强制的,不需要玩家选择是否触发
                            trigger: {
                                player: 'useSkillAfter', // 触发时机:使用卡牌后
                            },
                            content() {
                                // 技能效果:如果当前角色是<斯科特朗>,则变身成<蚁人>;否则摸一张牌
                                if (player.name != '蚁人') {
                                    player.reinit(player.name, '蚁人'); // 变身为<蚁人>
                                } else {
                                    player.draw(); // 摸一张牌
                                }
                            },
                        },
                        神偷: {
                            forced: true, // 该技能的触发是强制的,不需要玩家选择是否触发
                            trigger: {
                                global: 'phaseBegin', // 触发时机:任何一名角色回合开始时
                            },
                            filter(event, player) {
                                // 发动条件:当前角色和回合开始的角色不同,回合开始的角色拥有手牌或装备牌
                                return event.player != player && event.player.countCards('hej');
                            },
                            content() {
                                // 技能效果:根据概率随机进行以下四种行动之一:使用顺手牵羊、获得对方一张手牌、获得一张对方装备牌、放弃行动
                                var list = [];
                                for (var i = 0; i < 100; i++) {
                                    // 设定0-99中的数字序列
                                    list.push(i);
                                }
                                var num = list.randomGet(); // 随机取一个数字
                                if (num <= 19) {
                                    // 在0-19中,设置使用<顺手牵羊>的概率为20%
                                    player.useCard({ name: 'shunshou' }, trigger.player);
                                }
                                if (num >= 20 && num <= 39) {
                                    // 在20-39中,设置获得对方一张手牌的概率为20%
                                    player.gainPlayerCard(1, 'h', trigger.player, true, 'visible');
                                }
                                if (num >= 40 && num <= 59) {
                                    // 在40-59中,设置获得一张对方装备牌的概率为20%
                                    var card = get.cards()[0];
                                    event.card = card;
                                    player.showCards(card);
                                    player.gain(card, 'log', 'gain2');
                                }
                                if (num >= 60) {
                                    // 在60-99中(除去前三个范围),设置放弃行动的概率为80%
                                    event.finish();
                                    game.log(player, '因概率不足放弃本次偷盗行为');
                                }
                            },
                        },
                        粒子: {
                            enable: 'phaseUse', //技能的触发时机为出牌阶段
                            selectCard: 1, //该技能需要选择一张手牌来发动
                            filterCard(card) {
                                //手牌的限制条件为只能使用♠️️或♥️️牌
                                return card.suit == 'spade' || card.suit == 'heart';
                            },
                            check(card) {
                                //对于可用的牌,AI 会根据牌的效果和价值来决定是否使用,这里返回的数字越大,表示该牌越有价值(本技能中是 10 减去牌的基础价值)
                                return 10 - get.value(card);
                            },
                            usable: 1, //每回合可以使用一次该技能
                            audio: 'ext:神魔乱舞/audio:2', //在使用技能时会播放音效,其中 2 表示使用<装备>音效
                            position: 'h', //使用技能后,选择的手牌进入弃牌堆之前是否展示
                            filter(event, player) {
                                //发动技能的条件为当前角色没有装备<皮姆粒子>且手牌中有♠️️或♥️️牌
                                return (
                                    !player.countCards('e', {
                                        name: '皮姆粒子',
                                    }) &&
                                    (player.countCards('h', {
                                        suit: 'spade',
                                    }) > 0 ||
                                        player.countCards('h', {
                                            suit: 'heart',
                                        }) > 0)
                                );
                            },
                            toStorage: true, //选中牌是否直接进入存储区而非弃牌堆
                            discard: false, //发动技能后,是否弃置选择的手牌
                            content() {
                                //技能的具体效果是将一张名为<皮姆粒子>的装备牌加入当前角色的装备区中
                                var card = game.createCard('皮姆粒子', '💉', '🌡️'); //创造出一张牌
                                player.equip(card); //将该牌加入装备区
                            },
                            ai: {
                                //该技能的 AI 参数
                                order: 5, //表示发动该技能的优先度为 5(可自定义,通常为 1-10)
                                result: {
                                    //表示使用技能后的预期效果,这里是让当前角色的胜率 +1
                                    player: 1,
                                },
                            },
                            //主动技ai,发动优先度为5(可自改,一般为1-10),ai只会选择敌人(如果把-1改成1,则变成只会选择队友或自己) ,如果把target改成player并且-1改成1,那么就会变成只对自己使用
                        },
                        无名: {
                            audio: 'ext:神魔乱舞/audio:1',
                            nobracket: true,
                            trigger: {
                                player: 'equipBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('e', { subtype: 'equip1' }) && get.subtype(event.card) == 'equip1';
                            },
                            async content(event, trigger, player) {
                                trigger.cancel();
                                const card = trigger.cards[0];
                                if (card) {
                                    const vcard = new lib.element.VCard(card);
                                    const cardSymbol = Symbol('card');
                                    card.cardSymbol = cardSymbol;
                                    card[cardSymbol] = vcard;
                                    player.vcardsMap?.equips.push(vcard);
                                    player.node.equips.appendChild(card);
                                    card.style.transform = '';
                                    card.node.name2.innerHTML = `${get.translation(card.suit)}${card.number} ${get.translation(card.name)}`;
                                }
                                const info = get.info(card, false);
                                if (info.skills) {
                                    for (const i of info.skills) {
                                        player.addSkillTrigger(i);
                                    }
                                }
                                const cards = player.getCards('e', { subtype: get.subtype(card) });//没有trigger.card
                                const num = cards.length - 2;
                                if (num > 0) {
                                    const { links } = await player.chooseButton(['选择弃置', cards], num, true).forResult();
                                    if (links.length) {
                                        player.discard(links);
                                    }
                                }
                            },
                            ai: {
                                effect: {
                                    player(card, player, target) {
                                        if (player.countCards('e', { subtype: 'equip1' }) == 1 && get.subtype(card) == 'equip1') return [1, 10];
                                    },
                                },
                            },
                        },
                        神迹: {
                            //这个技能名叫做<神迹>
                            forced: true, //无条件触发
                            superCharlotte: true, //这个是一种特殊效果,用于和其他技能产生配合
                            trigger: {
                                //技能的触发条件:全局,当有伤害开始结算时
                                global: 'damageBegin',
                            },
                            filter(event, player) {
                                //发动技能的限制条件
                                return event.player != player && player.countCards('h') && event.source != undefined && event.source != player; //如果伤害来源不是自己,而且手牌数不为0,而且伤害来源存在,则可以发动
                            },
                            content() {
                                //技能的效果
                                'step 0'; //由于后面要让玩家选择是否要使用技能,因此先加上一个步骤0,表示这个技能的效果还没有开始结算
                                if (trigger.source != player) {
                                    //如果伤害来源不是自己,则触发技能效果
                                    player.chooseCard('h', '是否将一张手牌交给' + get.translation(trigger.source), '令伤害来源改为你？'); //让玩家从自己的手牌中选择一张牌,可以选择将这张牌交给伤害来源,使得伤害来源改为自己
                                }
                                ('step 1'); //选择手牌的步骤结束后,开始结算技能效果
                                if (result.cards) {
                                    //如果玩家选择了一张手牌
                                    trigger.source.gain(result.cards, player, 'give'); //将这张手牌交给伤害来源
                                    trigger.source = player; //将伤害来源改为自己
                                }
                            },
                        },
                        重生: {
                            //这个技能名叫做<重生>
                            superCharlotte: true, //这个是一种特殊效果,用于和其他技能产生配合
                            forced: true, //锁定技,无法被其他效果破坏
                            forceDie: true, //锁定效果,会使得该角色强制死亡
                            trigger: {
                                //技能的触发条件:当自己或他人即将死亡时触发
                                source: 'dieBegin',
                                player: 'dieBegin',
                            },
                            content() {
                                //技能的效果
                                'step 0'; //由于后面要让玩家选择是否要使用技能,因此先加上一个步骤0,表示这个技能的效果还没有开始结算
                                var players = trigger.player; //将要复活的角色保存到变量 players 中
                                players.fuhuo(players.maxHp, players.maxHp, players.maxHp); //让角色立刻复活,并且复活后的体力值、当前的体力值、和体力上限都是其初始值(即 maxHp)
                            },
                        },
                        魔躯: {
                            //技能名为<魔躯>
                            forced: true, //锁定技,无法被其他效果破坏
                            trigger: {
                                //技能的触发条件:轮到玩家使用阶段时触发
                                player: 'phaseUseBegin',
                            },
                            content() {
                                //技能的效果
                                'step 0'; //由于后面要让玩家选择是否要使用技能,因此先加上一个步骤0,表示这个技能的效果还没有开始结算
                                var num = player.maxHp - 1; //计算当前角色要失去的体力值,即当前的体力上限减1
                                player.loseMaxHp(num); //将当前的体力上限减少 num 点
                                player.draw(num); //摸 num 张牌
                                player.changeHujia(num); //增加 num 点护甲值
                                player.addTempSkill('魔躯2'); //临时获得一个名为<魔躯2>的技能
                                player.addTempSkill('unequip'); //临时获得一个名为<unequip>的技能
                                player.addTempSkill('魔躯1'); //临时获得一个名为<魔躯1>的技能
                                ('step 1'); //进入技能的第二步
                                player.storage.魔躯计时 = 39; //初始化计时器剩余时间为 38 秒
                                setInterval(function () {
                                    //定义一个每秒执行一次的计时器
                                    player.storage.魔躯计时--; //时间减1
                                    if (player.storage.魔躯计时 <= 0) {
                                        //如果时间到了,则执行技能结束时的代码
                                        ui.timer.delete(); //删除计时器
                                        //ui.timer.innerHTML="";
                                        player.reinit(player.name, '凯'); //将当前角色回复成<凯>的身份
                                        player.removeSkill('魔躯2'); //移除临时获得的技能<魔躯2>
                                        player.removeSkill('unequip'); //移除临时获得的技能<unequip>
                                        player.removeSkill('魔躯1'); //移除临时获得的技能<魔躯1>
                                        player.removeSkill('魔躯'); //移除整个<魔躯>技能
                                    } else {
                                        //生成随机颜色代码
                                        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                                        // 随机边框颜色代码
                                        const randomBorderColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                                        // 显示带有随机颜色和边框颜色的数字
                                        ui.timer.innerHTML = `
          <div style="
            width: 55px;
            height: 60px;
            border-radius: 50%;
            background-color: ${randomBorderColor};
            display: flex;
            justify-content: center;
            align-items: center;
          ">
            <font color="${randomColor}" style="font-size: 40px;">${player.storage.魔躯计时}</font>
          </div>
        `;
                                        ui.timer.show(); // 显示计时器
                                    }
                                }, 1000); //每秒执行一次计时器
                            },
                        },
                        魔躯1: {
                            //技能名为<魔躯1>
                            forced: true, //锁定技,无法被其他效果破坏
                            mod: {
                                //修改游戏规则的效果
                                cardUsable(card, player, num) {
                                    //玩家可以使用卡牌的上限
                                    if (card.name == 'sha') return Infinity; //如果是杀牌,就没有使用上限
                                },
                                targetInRange(card, player, target) {
                                    //判断指定的目标是否在当前玩家的攻击范围内
                                    if (card.name == 'sha') return true; //如果是杀牌,则目标在玩家的攻击范围内
                                },
                                cardname(card, player) {
                                    //将卡牌的名称修改为指定名称
                                    if (get.itemtype(card) == 'card') return 'sha'; //如果是普通的卡牌,则将其名称改为<杀>
                                },
                            },
                        },
                        魔躯2: {
                            //技能名为<魔躯2>
                            forced: true, //锁定技,无法被其他效果破坏
                            trigger: {
                                //技能的触发条件:玩家使用杀牌时触发
                                player: 'shaBegin',
                            },
                            content() {
                                //技能的效果
                                trigger.directHit = true; //直接命中,无视防御力的影响
                            },
                        },
                        极刃: {
                            //技能名为<极刃>
                            trigger: {
                                //技能的触发条件:使用阶段之前
                                player: 'phaseUseBefore',
                            },
                            filter(event, player) {
                                //触发技能的限制条件:当前角色的体力值低于等于1,且体力上限大于等于2
                                return player.hp <= 1 && player.maxHp >= 2;
                            },
                            content() {
                                //技能的效果
                                player.reinit(player.name, '魔凯'); //将当前角色变成<魔凯>的身份
                                player.awakenSkill('极刃'); //触发<极刃>的觉醒效果
                            },
                            ai: {
                                //AI智能部分
                                order: 8, //发动优先度为8,越大越优先发动
                                result: {
                                    //结算结果
                                    player: 1, //玩家本身可以获得1点效益
                                },
                            },
                        },
                        修罗: {
                            //技能名为<修罗>
                            forced: true, //锁定技,无法被其他效果破坏
                            trigger: {
                                //技能的触发条件:造成伤害前
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                //触发技能的限制条件:使用的卡牌名称为杀,且当前角色有手牌
                                return event.card && event.card.name == 'sha' && player.countCards('h') > 0;
                            },
                            content() {
                                //技能的效果
                                if (player.name == '魔凯') {
                                    //如果当前角色为<魔凯>
                                    trigger.num *= 2; //伤害倍数翻倍
                                } else if (trigger.num % 2 == 0) {
                                    //如果伤害倍数为偶数
                                    trigger.num *= 1.5; //伤害倍数增加50%
                                }
                            },
                        },
                        回旋: {
                            //技能名为<回旋>
                            forced: true, //锁定技,无法被其他效果破坏
                            trigger: {
                                //技能的触发条件:造成伤害后
                                source: 'damageEnd',
                            },
                            logTarget(event, player) {
                                //日志目标
                                return event.player.next; //将触发事件的下一名玩家作为目标
                            },
                            check(event, player) {
                                //AI评估
                                return get.effect(event.player.next, event.card, player, player) > 0; //如果对下一名玩家使用该卡牌有正向效果,则返回true
                            },
                            filter(event, player) {
                                //触发技能的限制条件:使用的卡牌名称为杀,且当前角色可以对下一名角色使用该卡牌(包括判定区)
                                if (player == event.player.next) return false;
                                //  if (!player.canUse(event.card, event.player.next, false)) return false;
                                return event.card && event.card.name == 'sha' && event.notLink();
                            },
                            content() {
                                //技能的效果
                                'step 0'; //技能的执行步骤
                                if (player.name == '魔凯') {
                                    //如果当前角色为<魔凯>
                                    if (trigger.getParent(2).name == 'useCard' && trigger.getParent(2).targets) {
                                        //判断该卡牌是否为使用卡牌,并且有目标
                                        var num = trigger.getParent(2).targets.length; //获得已有目标的数量
                                        trigger.getParent(2).targets[num] = trigger.player.next; //将下一名玩家添加为额外目标
                                        game.log(trigger.player.next, '额外成为了', '#y' + get.translation(trigger.card), '的目标'); //日志记录
                                    }
                                } else player.recover(); //当前角色回复一点体力
                                player.gain(trigger.cards); //当前角色获得该卡牌
                                game.log(player, '获得了', trigger.cards); //日志记录
                            },
                        },
                        突袭: {
                            enable: 'phaseUse', //出牌阶段发动
                            usable: 1, //每回合一次
                            selectCard: 1, //选择一张手牌
                            filterCard: true, //任意卡牌
                            position: 'h', //手牌中的卡牌
                            selectTarget: [1, 2], //选择1至2个目标
                            filterTarget(card, player, target) {
                                //过滤目标:目标不能是玩家自己
                                return target != player;
                            },
                            filter(event, player) {
                                //发动条件:当前角色至少有一张手牌
                                return player.countCards('h');
                            },
                            content() {
                                //技能效果
                                player.useCard(
                                    {
                                        name: 'sha', //视为对目标使用【杀】
                                    },
                                    target
                                );
                            },
                            ai: {
                                order: 7, //技能的优先级,数字越大优先级越高
                                result: {
                                    //使用该技能会带来的结果
                                    target: -1, //对敌方玩家使用,使其受到伤害
                                },
                            },
                        },
                        强袭: {
                            forced: true, //锁定技,无法被其他效果破坏
                            trigger: {
                                //触发条件:使用杀时
                                player: 'shaBegin',
                            },
                            filter(event, player) {
                                //发动限制条件:确认事件目标有手牌
                                return event.target.countCards('h');
                            },
                            content() {
                                //技能效果:玩家获得目标1张手牌
                                player.gainPlayerCard(trigger.target, 'h', 1);
                            },
                        },
                        连锁: {
                            trigger: {
                                //触发条件:造成伤害时
                                player: 'shaDamage',
                            },
                            forced: true, //锁定技,无法被其他效果破坏
                            filter(event, player) {
                                //过滤条件:必须是卡牌造成的伤害
                                if (event.card.isCard) return true;
                                return false;
                            },
                            content() {
                                //技能效果
                                'step 0';
                                //获取前后的角色
                                var ne = trigger.target.next;
                                var pr = trigger.target.previous;
                                //对前后的角色使用【杀】
                                if (ne != player) {
                                    player.useCard(
                                        {
                                            name: 'sha',
                                        },
                                        ne,
                                        1
                                    );
                                }
                                if (pr != player) {
                                    player.useCard(
                                        {
                                            name: 'sha',
                                        },
                                        pr,
                                        1
                                    );
                                }
                                //判断当前角色受到2点及以上的伤害,则进行抽牌或回复体力的选择
                                if (player.getStat('damage') >= 2) {
                                    player.chooseDrawRecover();
                                }
                            },
                        },
                        直死魔眼: {
                            enable: 'phaseUse', //出牌阶段发动
                            usable: 1, //每回合一次
                            selectCard: 1, //弃置一张手牌
                            filterCard: true, //任意
                            position: 'h', //手牌
                            selectTarget: 1, //选择一名目标
                            filterTarget: true, //过滤条件:任意目标
                            filter(event, player) {
                                //发动限制条件:当你有手牌且体力值为1时才能发动
                                return player.countCards('h') && player.hp == 1;
                            },
                            content() {
                                //技能效果:摸牌或者强制角色死亡
                                'step 0';
                                for (var j = 0; j < target.skills.length; j++) {
                                    var skill = lib.skill[target.skills[j]];
                                    if (skill.trigger && typeof skill.trigger === 'object' && (skill.trigger.player === 'dieBefore' || (Array.isArray(skill.trigger.player) && skill.trigger.player.some((trigger) => trigger.includes('die')))) && skill.content && typeof skill.content === 'function' && (skill.content.toString().includes('trigger.cancel') || skill.content.toString().includes('trigger.finish') || skill.content.toString().includes('trigger.untrigger') || skill.content.toString().includes('game.over'))) {
                                        // 在这里执行对应的操作,比如添加或修改 filter 方法
                                        if (skill.filter && typeof skill.filter === 'function') {
                                            skill.filter = function (event, player) {
                                                return false; // 返回false表示不允许触发该技能
                                            };
                                        } else {
                                            skill.filter = function (event, player) {
                                                return false; // 返回false表示不允许触发该技能
                                            };
                                        }
                                    }
                                }
                                game.restoreOriginalDie(target);
                                target.die().source = player; //强制目标死亡
                            },
                            ai: {
                                //AI智能部分
                                order: 10, //发动优先度为10
                                result: {
                                    //技能效果的结果
                                    target: -1, //对敌方目标使用
                                },
                            },
                        },
                        三重人格: {
                            audio: 'ext:神魔乱舞/audio:1', //技能音效
                            group: ['三重人格1', '三重人格2'], //技能分组
                            trigger: {
                                //触发条件:受到濒死伤害时
                                player: ['dyingBegin'],
                            },
                            forced: true, //锁定技
                            //限定技
                            limited: true, //限定技
                            //技能动画颜色
                            //技能动画效果
                            mark: true, //标记
                            intro: {
                                //介绍文本
                                content(storage, player) {
                                    var str;
                                    if (player.name == '两仪式') {
                                        str = '你濒死时,锁定主人格获得直死魔眼';
                                    }
                                    if (player.name == '式') {
                                        str = '你使用闪时,摸一张牌并获得一点护甲';
                                    }
                                    if (player.name == '织') {
                                        str = '你使用杀造成伤害前,可以继续对攻击范围内的任意角色使用杀.';
                                    }
                                    return str;
                                },
                            },
                            filter(event, player) {
                                //发动限制条件:当前未发动过这个技能
                                return player.storage.三重人格 == false;
                            },
                            content() {
                                //技能效果
                                player.storage.三重人格 = true; //标记已经发动过这个技能
                                player.awakenSkill('三重人格'); //触发觉醒技
                                if (player.name == '织' || player.name == '式') {
                                    //如果当前角色的名字是"织"或者"式"
                                    player.revive(); //复活
                                    player.reinit(player.name, '两仪式'); //更改成"两仪式"
                                    player.addSkill('直死魔眼'); //获得"直死魔眼"技能
                                } else {
                                    //否则
                                    player.revive();
                                } //直接复活
                                player.addSkill('直死魔眼'); //获得"直死魔眼"技能
                            },
                        },
                        冷酷: {
                            forced: true, //锁定技
                            trigger: {
                                //触发条件:使用【闪】时
                                player: 'useCardBegin',
                            },
                            _priority: 10, //优先级为10
                            filter(event, player) {
                                //发动限制条件:使用的牌为【闪】
                                return event.card && event.card.name == 'shan';
                            },
                            content() {
                                //技能效果:摸一张牌,失去护甲
                                player.draw(); //摸1张牌
                                player.changeHujia(); //失去护甲
                            },
                        },
                        嗜杀: {
                            forced: true, //锁定技
                            trigger: {
                                //触发条件:造成伤害前
                                source: 'damageBegin',
                            },
                            _priority: 50, //优先级为50
                            filter(event, player) {
                                //发动限制条件:使用的牌为【杀】
                                if (event.card && event.card.name == 'sha') return true;
                                return false;
                            },
                            content() {
                                //技能效果:可以使用一张【杀】
                                player
                                    .chooseToUse('嗜杀:是否使用一张【杀】？', function (card) {
                                        if (card.name != 'sha') return false; //所选卡牌不为【杀】时不能使用
                                        return lib.filter.cardEnabled.apply(this, arguments); //判断是否能使用该卡牌
                                    })
                                    .set('addCount', false); //不计入出牌次数,记录日志<嗜杀>
                            },
                        },
                        三重人格2: {
                            forced: true, //锁定技
                            trigger: {
                                //触发条件:使用【杀】时
                                player: 'useCardBegin',
                            },
                            _priority: 50, //优先级为50
                            filter(event, player) {
                                //发动限制条件:使用的牌为【杀】
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                //技能效果:更改当前角色的名字为"织"
                                if (
                                    player.getCards({
                                        name: 'sha',
                                    })
                                ) {
                                    //如果当前角色有【杀】手牌
                                    player.reinit(player.name, '织'); //更改成"织"
                                }
                            },
                        },
                        三重人格1: {
                            forced: true, //锁定技
                            trigger: {
                                //触发条件:使用【闪】时
                                player: 'useCardBegin',
                            },
                            _priority: 50, //优先级为50
                            filter(event, player) {
                                //发动限制条件:使用的牌为【闪】
                                return event.card && event.card.name == 'shan';
                            },
                            content() {
                                //技能效果:更改当前角色的名字为"式"
                                if (
                                    player.getCards({
                                        name: 'shan',
                                    })
                                ) {
                                    //如果当前角色有【闪】手牌
                                    player.reinit(player.name, '式'); //更改成"式"
                                }
                            },
                        },
                        夜刀: {
                            equipSkill: true, // 该技能为装备技
                            forced: true, // 该技能为锁定技
                            // 该技能不能被无懈可击
                            trigger: {
                                // 触发条件:造成伤害时
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                // 触发限制条件:使用的牌为【杀】
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                // 技能效果
                                // 随机1-100的整数
                                var n = Math.floor(Math.random() * 100) + 1;
                                // 目标已损失体力值
                                var hplost = trigger.player.maxHp - trigger.player.hp;
                                if (n <= 30) {
                                    // 30%几率伤害加倍
                                    trigger.num *= 2;
                                } else if (n == 31) {
                                    // 1%几率秒杀目标或清空其技能
                                    if (Math.random() < 0.5) {
                                        trigger.player.die().source = player;
                                    } else {
                                        trigger.player.clearSkills();
                                    }
                                } else if (n <= 40) {
                                    // 10%几率目标翻面或横置
                                    if (Math.random() < 0.5) {
                                        trigger.cancel();
                                        trigger.player.turnOver();
                                    } else {
                                        trigger.cancel();
                                        trigger.player.link();
                                    }
                                } else if (n <= 50) {
                                    trigger.cancel();
                                    trigger.player.loseHp(hplost);
                                }
                            },
                        },
                        转生: {
                            forceDie: true, // 设置为 true 的时候,可以强制玩家死亡.
                            forced: true, // 表示这个技能是否强制执行.
                            fixed: true, // 表示这个技能结算顺序固定.
                            trigger: {
                                // 设置触发时机,这里是玩家濒死前.
                                player: 'dieBefore',
                            },
                            content() {
                                // 这个技能的具体效果实现.
                                'step 0';
                                player
                                    .chooseTarget('请选择【转生】的目标,令自己灵魂进入目标身体', lib.translate.转生_info, true, function (card, player, target) {
                                        return target != player && (!player.storage.转生 || !player.storage.转生.includes(target));
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (att > 0) return att + 1;
                                        if (att == 0) return Math.random();
                                        return att;
                                    }).animate = false; // 让玩家选择目标.
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    game.log(player, '灵魂转入完成,获取了', target, '的身体');
                                    target.reinit(target.name, player.name);
                                }
                            },
                        },
                        制作: {
                            trigger: {
                                player: 'phaseBegin', // 触发时机为回合开始时.
                            },
                            init(player) {
                                //初始化
                                player.storage.技能 = 0;
                            },
                            forced: true, // 强制执行.
                            silent: true, // 不提示信息.
                            _priority: 300, // 优先级为 300.
                            filter(event, player) {
                                // 事件过滤器,这里只允许非狂人玩家使用该技能.
                                if (event.player.isMad()) return false;
                                return player.storage.技能 < 4;
                            },
                            content() {
                                // 技能具体效果实现.
                                'step 0';
                                if (event.isMine()) {
                                    // 在输入框中输入技能 ID
                                    var inputWrapper = document.createElement('div');
                                    // 设置输入框的容器 div 的一些基本属性
                                    inputWrapper.id = 'input-wrapper';
                                    inputWrapper.style.position = 'fixed';
                                    inputWrapper.style.top = '60%';
                                    inputWrapper.style.left = '55%';
                                    inputWrapper.style.transform = 'translate(-50%, -50%)';
                                    inputWrapper.style.zIndex = '999';
                                    inputWrapper.style.display = 'none';
                                    inputWrapper.style.width = '300px';
                                    inputWrapper.style.height = '180px';
                                    inputWrapper.style.backgroundImage = 'url(extension/神魔乱舞/image/制作.jpg)';
                                    inputWrapper.style.backgroundSize = '20% auto';
                                    inputWrapper.style.backgroundPosition = '50px 25px';
                                    inputWrapper.style.backgroundRepeat = 'no-repeat';
                                    inputWrapper.style.backgroundAttachment = 'fixed';
                                    var inputBox = document.createElement('div');
                                    // 设置输入框元素内部的样式(flex 弹性盒子)
                                    inputBox.id = 'input-box';
                                    inputBox.style.display = 'flex';
                                    inputBox.style.flexDirection = 'row';
                                    inputBox.style.justifyContent = 'space-around';
                                    inputBox.style.alignItems = 'center';
                                    inputWrapper.appendChild(inputBox);
                                    var inputField = document.createElement('input');
                                    // 设置输入框元素本身的属性和样式
                                    inputField.type = 'text';
                                    inputField.id = 'input-field';
                                    inputField.placeholder = '请输入正确的技能 ID';
                                    inputField.style.width = '300px';
                                    inputBox.appendChild(inputField);
                                    var buttonsWrapper = document.createElement('div');
                                    // 设置确定和取消按钮的容器的样式(flex 弹性盒子)
                                    buttonsWrapper.id = 'buttons-wrapper';
                                    buttonsWrapper.style.display = 'flex';
                                    buttonsWrapper.style.justifyContent = 'space-between';
                                    buttonsWrapper.style.height = '50%';
                                    inputBox.appendChild(buttonsWrapper);
                                    var inputConfirm = document.createElement('button');
                                    // 设置确定按钮的基本属性
                                    inputConfirm.id = 'input-confirm';
                                    inputConfirm.innerText = '确定';
                                    inputConfirm.style.borderRadius = '50%'; // 将按钮设置为圆形
                                    inputConfirm.style.color = 'red'; // 修改字体颜色为红色
                                    inputConfirm.style.height = '40px'; // 设置按钮高度
                                    buttonsWrapper.appendChild(inputConfirm);
                                    var inputCancel = document.createElement('button');
                                    // 设置取消按钮的基本属性
                                    inputCancel.id = 'input-cancel';
                                    inputCancel.innerText = '取消';
                                    inputCancel.style.borderRadius = '50%'; // 将按钮设置为圆形
                                    inputCancel.style.color = 'blue'; // 修改字体颜色为蓝色
                                    inputCancel.style.height = '40px'; // 设置按钮高度
                                    buttonsWrapper.appendChild(inputCancel);
                                    var inputMask = document.createElement('div');
                                    // 添加遮罩层
                                    inputMask.id = 'input-mask';
                                    inputWrapper.appendChild(inputMask);
                                    document.body.appendChild(inputWrapper);
                                    // 显示输入框容器
                                    inputWrapper.style.display = 'block';
                                    // 让输入框内的 input 元素获得焦点
                                    inputField.focus();
                                    // 调整确认和取消按钮的位置,使其分别往下移动
                                    inputConfirm.style.marginTop = '20px';
                                    inputCancel.style.marginTop = '20px';
                                    inputConfirm.onclick = function () {
                                        var skill = inputField.value;
                                        var flag = get.info(skill);
                                        if (!skill || skill == null || skill == '') {
                                            player.say('你输入为空,无法获得技能');
                                            game.log('你输入为空,无法获得技能');
                                        } else if (flag) {
                                            player.addSkill(skill);
                                            player.storage.技能++;
                                            player.say('输入技能 ID 正确,获得技能 ' + get.translation(skill));
                                            game.log('输入技能 ID 正确,获得技能', skill);
                                        } else {
                                            player.say('输入技能 ID 错误,无法获得技能');
                                            game.log('输入技能 ID 错误,无法获得技能');
                                        }
                                        inputWrapper.style.display = 'none';
                                        inputField.value = '';
                                    };
                                    inputCancel.onclick = function () {
                                        inputWrapper.style.display = 'none';
                                        inputField.value = '';
                                    };
                                    event.finish(); // 技能执行完毕.
                                } else {
                                    // 如果不是当前玩家,那么随机获取一个角色不可获得的技能.
                                    var skills = [];
                                    for (var i in lib.character) {
                                        for (var j = 0; j < lib.character[i][3].length; j++) {
                                            var info = lib.skill[lib.character[i][3][j]];
                                            if (info && !info.gainable) {
                                                skills.add(lib.character[i][3][j]);
                                            }
                                        }
                                    }
                                    var link = skills.randomGets(1); // 随机获取一个不可获得的技能.
                                    for (var i = 0; i < link.length; i++) {
                                        player.addSkill(link[i]); // 获得该技能.
                                        player.storage.技能++;
                                        var chat = '获得技能【' + get.translation(link[i]) + '】';
                                        player.say(chat);
                                        game.log(player, '获得技能', '【' + get.translation(link[i]) + '】');
                                    }
                                }
                            },
                        },
                        卸甲: {
                            forced: true, // 强制执行.
                            trigger: {
                                player: 'phaseAfter', // 触发时机为回合结束后.
                            },
                            content() {
                                // 技能具体效果实现.
                                player.reinit(player.name, '托尼史塔克'); // 将玩家的角色名变为「托尼史塔克」.
                                if (player.getEquip('反应炉')) {
                                    // 如果玩家是「托尼史塔克」并且有装备「反应炉」.
                                    player.addSkill('变身'); // 那么就获得技能「变身」.
                                }
                            },
                        },
                        击飞: {
                            // 技能名称
                            forced: true, // 这个技能强制执行
                            trigger: {
                                // 技能触发时机
                                source: 'damageBegin', // 触发时机为源角色使用「杀」造成伤害时.
                            },
                            _priority: 50, // 技能优先级为 50.
                            filter(event, player) {
                                // 过滤条件,这里只对使用「杀」造成伤害的情况生效.
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                // 技能具体效果实现.
                                // 让目标玩家飞出屏幕外
                                trigger.player.style.transform = 'translateY(-100px) rotate(-640deg)';
                                game.delay(2); // 暂停 2s.
                                trigger.player.style.opacity = '0'; // 目标玩家暂时失去行动能力.
                                // 给予目标玩家技能「击飞1」.
                                trigger.player.addTempSkill('击飞1', {
                                    player: 'phaseAfter',
                                });
                                game.log(trigger.player, '被击飞出了屏幕外');
                            },
                        },
                        击飞1: {
                            // 技能名称
                            forced: true, // 这个技能强制执行
                            trigger: {
                                // 技能触发时机
                                player: 'phaseBefore', // 玩家回合开始前触发
                            },
                            content() {
                                // 技能具体效果实现.
                                // 让目标玩家回到屏幕内
                                player.style.transform = 'translateY(0) rotate(0deg)';
                                player.style.opacity = '1';
                                // 跳过该玩家的摸牌阶段
                                player.skip('phaseDraw');
                                game.log(player, '回到了屏幕内并跳过了摸牌阶段');
                            },
                        },
                        不死: {
                            // 强制发动技能
                            forced: true,
                            // 触发条件:在濒死前
                            trigger: {
                                player: 'dyingBefore',
                            },
                            // 过滤器,判断能否进入不死状态
                            filter(event, player) {
                                return player.hp <= 0;
                            },
                            // 技能的效果
                            content() {
                                // 输出日志,标明进入不死状态以及当前体力值
                                game.log(player, '进入不死状态.当前', player, '体力值为 ', player.hp, '.');
                                // 取消当前濒死效果
                                trigger.cancel();
                                // 摸一张牌
                                player.draw();
                            },
                            // 分组技能
                            group: ['真死', '保命'],
                        },
                        真死: {
                            // 强制发动技能
                            forced: true,
                            // 触发条件:在失去卡牌、响应、使用卡牌的时候
                            trigger: {
                                player: ['loseEnd', 'respondAfter', 'useCardAfter'],
                            },
                            // 过滤器,判断能否发动技能
                            filter(event, player) {
                                return player.countCards('he') <= 0; //你有牌时才能发动
                            },
                            // 技能的效果
                            content() {
                                // 输出日志,标明没血可吸了
                                game.log(player, '已经没血可吸了!');
                                // 触发角色死亡
                                player.die();
                            },
                        },
                        保命: {
                            // 强制发动技能
                            forced: true,
                            // 触发条件:在出牌阶段结束后
                            trigger: {
                                player: 'phaseUseAfter',
                            },
                            // 过滤器,判断能否发动技能
                            filter(event, player) {
                                return player.countCards('hej') > 0; //你有牌时才能发动
                            },
                            // 技能的效果
                            content() {
                                'step 0';
                                // 计算需要弃掉的牌数
                                var num = Math.floor(game.players.length / 2);
                                // 如果手牌数大于需要弃掉的牌数
                                if (player.countCards('h') > num) {
                                    // 弹出提示框,让玩家选择弃掉一半以上的手牌
                                    player.chooseToDiscard(num, 'hej', true).set('ai', function (card) {
                                        if (player.countCards('h') > num) return 10 - get.value(card);
                                        return 9 - get.value(card);
                                    });
                                } else if (player.countCards('h') <= num) {
                                    // 否则,跳过弃牌阶段,输出日志
                                    player.skip('phaseDiscard');
                                    game.log(player, '跳过弃牌阶段');
                                }
                                ('step 1');
                                // 如果选择了弃牌,同样跳过弃牌阶段,输出日志
                                if (result.bool) {
                                    player.skip('phaseDiscard');
                                    game.log(player, '跳过弃牌阶段');
                                }
                            },
                        },
                        能量护盾: {
                            // 标明该技能为装备技能
                            equipSkill: true,
                            // 强制发动技能
                            forced: true,
                            // 锁定技,无法被取消
                            // 触发条件:在受到属性伤害前
                            trigger: {
                                player: 'damageBegin4',
                            },
                            // 过滤器,判断能否发动技能
                            filter(event, player) {
                                // 如果有<卸下>标签,则不能发动技能
                                if (player.hasSkillTag('unequip2')) return false;
                                // 如果受到非属性伤害,则不能发动技能
                                return (enent = event.nature);
                            },
                            // 技能的效果
                            content() {
                                'step 0';
                                // 取消当前伤害
                                trigger.cancel();
                                // 输出日志,标明护盾阻挡了伤害
                                game.log(player, '受到的属性伤害被能量护盾防止.');
                            },
                        },
                        武士刀: {
                            // 标明该技能为装备技能
                            equipSkill: true,
                            // 播放音效编号为1的音效
                            audio: 'ext:神魔乱舞/audio:1',
                            // 触发条件:该角色使用牌结束时
                            trigger: {
                                player: 'useCardEnd',
                            },
                            // 过滤器:过滤掉不符合条件的牌
                            filter(event, player, _name) {
                                // 如果该牌已经发动了双倍释放,则不能再次发动
                                if (event.doubleUse || !['basic', 'trick'].includes(get.type(event.card))) return false;
                                // 对所有目标进行筛选,只保留存活且可被再次出牌的目标
                                event.xtargets = event.targets.filter((current) => current.isAlive() && player.canUse(event.card, current, false));
                                return event.xtargets.length;
                            },
                            // 技能的效果
                            content() {
                                // 重置使用牌事件
                                trigger.finished = 0;
                                trigger._triggered = 2;
                                //
                                trigger.num = 0;
                                trigger.step = 0;
                                // 将目标替换为重新筛选后的目标
                                trigger.targets = trigger.xtargets;
                                //
                                trigger.addCount = false;
                                //
                                // 标记为已经释放过双倍技能
                                trigger.doubleUse = true;
                            },
                        },
                        孤单: {
                            // 播放音效编号为2的音效
                            audio: 'ext:神魔乱舞/audio:2',
                            // 触发条件:自己的回合结束时
                            trigger: {
                                player: 'phaseEnd',
                            },
                            // 强制执行该技能
                            forced: true,
                            // 只有场上除了自己以外还有其他玩家,并且该角色尚未发动过孤单技能,才会触发该技能
                            filter(event, player) {
                                return game.players.length > 1 && !player.storage.孤单;
                            },
                            // 内容是选择一名目标为量子2的其他玩家,为其添加量子2效果
                            content() {
                                'step 0';
                                // 标记为已使用孤单技能,下次不可重复使用
                                player.storage.孤单 = true;
                                // 选择目标
                                player
                                    .chooseTarget('请选择【量子】的目标', lib.translate.孤单_info, true, function (card, player, target) {
                                        // 目标不能是自己,且目标不在任何其他存活玩家的量子2列表中
                                        return target != player && (!player.storage.量子2 || !player.storage.量子2.includes(target));
                                    })
                                    .set('ai', function (target) {
                                        // AI计算目标玩家的优先级,返回一个分值
                                        var att = get.attitude(_status.event.player, target);
                                        if (att > 0) return att + 1;
                                        if (att == 0) return Math.random();
                                        return att;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    // 如果目标没有量子2效果,则为其添加一个量子2效果,并将该角色加入到其存储列表中
                                    if (!target.storage.量子2) target.storage.量子2 = [];
                                    target.storage.量子2.push(player);
                                    target.addSkill('量子2');
                                    //player.awakenSkill('孤单');
                                }
                            },
                        },
                        // 量子技能
                        量子: {
                            audio: 'ext:神魔乱舞/audio:2', // 播放音效
                            trigger: {
                                player: 'phaseUseBegin', // 当回合开始时触发
                            },
                            forced: true, // 强制发动
                            group: '孤单', // 触发孤单技能
                            filter(event, player) {
                                return game.players.length > 1 && !player.storage.量子; // 如果场上只有一个角色或该角色已经使用过本技能,则不会触发
                            },
                            content() {
                                'step 0';
                                player.storage.量子 = true; // 标记该角色已经使用过本技能
                                player
                                    .chooseTarget('请选择【量子】的目标', lib.translate.量子_info, true, function (card, player, target) {
                                        // 选择具有量子2效果、且不在其他玩家的量子2列表中的目标
                                        return target != player && (!player.storage.量子2 || !player.storage.量子2.includes(target));
                                    })
                                    .set('ai', function (target) {
                                        // 设置AI
                                        var att = get.attitude(_status.event.player, target);
                                        if (att > 0) return att + 1;
                                        if (att == 0) return Math.random();
                                        return att;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    if (!player.storage.量子2) player.storage.量子2 = [];
                                    player.storage.量子2.push(target); // 将目标添加到该角色的量子2列表中
                                    player.addSkill('量子2'); // 给该角色添加量子2技能
                                }
                            },
                        },
                        // 量子标记
                        量子_mark: {
                            marktext: '量子', // 标记文本
                            intro: {
                                name: '量子',
                                content: '当你受到伤害后,$受到等量的伤害,你回复体力后,$回复等量的体力',
                            },
                        },
                        // 量子2效果
                        量子2: {
                            audio: 'ext:神魔乱舞/audio:2', // 播放音效
                            charlotte: true, // 特殊写法,用于在玩家死亡时不弹出警告框
                            trigger: {
                                global: ['damageEnd', 'recoverEnd'], // 当有角色受到伤害或回复体力时触发
                            },
                            forced: true, // 强制发动
                            filter(event, player) {
                                if (event.player.isDead() || !player.storage.量子2 || !player.storage.量子2.includes(event.player) || event.num <= 0) return false; // 如果该角色已经死亡或没有添加量子2效果或目标受到的伤害或回复的体力值小于等于0,则不发动
                                if (event.name == 'damage' && event.source != undefined && event.num > 0) return true; // 如果是受到伤害则发动
                                return player.isDamaged(); // 如果是回复体力则发动
                            },
                            logTarget: 'player', // 记录日志目标为该角色本身
                            content() {
                                'step 0';
                                var target = trigger.player;
                                if (!target.storage.量子_mark) target.storage.量子_mark = []; // 如果没有量子标记列表,则创建
                                target.storage.量子_mark.add(player); // 给受到伤害或回复体力的角色添加量子标记
                                target.storage.量子_mark.sortBySeat(); // 根据座位号排序
                                target.markSkill('量子_mark'); // 显示量子标记
                                // 延迟操作
                                ('step 1');
                                player[trigger.name](trigger.num, 'nosource'); // 对该角色进行同量反弹或等量回复
                                ('step 2');
                                player.draw(); // 摸一张牌
                            },
                            onremove(player) {
                                if (!player.storage.量子2) return;
                                game.countPlayer(function (current) {
                                    if (player.storage.量子2.includes(current) && current.storage.量子_mark) {
                                        current.storage.量子_mark.remove(player); // 从其他角色的量子标记列表中删除该角色
                                        if (!current.storage.量子_mark.length)
                                            current.unmarkSkill('量子_mark'); // 如果该角色没有任何量子标记,则隐藏量子标记
                                        else current.markSkill('量子_mark'); // 否则显示新的量子标记列表
                                    }
                                });
                                delete player.storage.量子2; // 从该角色的存储列表中删除
                            },
                            // 触发量子3技能
                            group: '量子3',
                        },
                        // 量子3效果
                        量子3: {
                            trigger: {
                                global: 'dieBegin', // 当任意角色死亡时触发
                            },
                            silent: true, // 静默模式,不显示提示框和日志
                            filter(event, player) {
                                return event.player == player || (player.storage.量子2 && player.storage.量子2.includes(player)); // 如果该角色已经死亡或它自己有量子2效果,则发动
                            },
                            content() {
                                if (player == trigger.player)
                                    lib.skill.量子2.onremove(player); // 如果死亡的是该角色本身,则删除该角色的量子2效果
                                else player.storage.量子2.remove(event.player); // 否则从该角色的存储列表中删除对应的目标
                            },
                        },
                        // 投食
                        投食: {
                            audio: 'ext:神魔乱舞/audio:2', // 播放音效
                            enable: 'phaseUse', // 只能在出牌阶段使用
                            usable: 1, // 每回合只能使用一次
                            selectTarget: [1, Infinity], // 只能选择1到无限个目标
                            filter(event, player, target) {
                                // 过滤选择目标的条件,此处不设限制
                                return true;
                            },
                            filterTarget(card, player, target) {
                                // 过滤目标的条件
                                if (player == target) return false; // 不允许选择自己
                                if (target.countCards('h') <= 0) return false; // 目标手牌数必须大于0
                                return true;
                            },
                            content() {
                                // 使用卡牌的效果
                                'step 0';
                                target
                                    .chooseCard('h')
                                    .set('prompt', '是否选择一张牌交给' + get.translation(player))
                                    .set('ai', function (card) {
                                        //设置AI
                                        if (get.attitude(target, player) > 0) {
                                            // 如果目标对该角色有好感,则更倾向于选择价值较大的牌
                                            return get.value(card);
                                        }
                                        return 4 - get.value(card); // 否则更倾向于选择价值较小的牌
                                    });
                                ('step 1');
                                if (result && result.cards && result.cards.length) {
                                    // 如果目标选择了牌
                                    target.give(result.cards, player); // 将选择的牌交给该角色
                                    if (result.cards[0].suit == 'heart') {
                                        // 如果选择的牌花色是心,则对该角色进行一次回复或护甲增加
                                        if (player.hp != player.maxHp) {
                                            player.recover(); // 回复一点体力
                                        } else player.changeHujia(); // 护甲增加一点
                                    }
                                    if (result.cards[0].suit == 'spade') {
                                        // 如果选择的牌花色是♠️️,则对目标进行护甲增加
                                        target.changeHujia(); // 目标的护甲增加一点
                                    }
                                }
                            },
                            ai: {
                                // AI 算法相关的配置
                                order: 10, // AI 使用该牌时的优先级
                                result: {
                                    // 使用该牌后的评估结果
                                    target(player, target) {
                                        // 如果玩家拥有更多强力的手牌,则更倾向于投食
                                        if (target.countCards('h')) {
                                            return 2;
                                        }
                                        if (!target.countCards('h')) {
                                            return -1;
                                        }
                                        return 1;
                                    },
                                },
                            },
                        },
                        // 吃货
                        吃货: {
                            audio: 'ext:神魔乱舞/audio:2', // 播放音效
                            forced: true, // 强制发动
                            trigger: {
                                player: 'useCardToPlayered', // 当该角色使用卡牌时触发
                            },
                            filter(event, player) {
                                // 过滤条件
                                return event.card && event.card.name == 'tao'; // 只有使用桃时才会触发效果
                            },
                            content() {
                                // 使用卡牌的效果
                                'step 0';
                                trigger.target.recover(); // 让触发角色回复一点体力
                            },
                            group: '吃货_1', // 附带子技能
                            subSkill: {
                                1: {
                                    // 子技能1
                                    trigger: {
                                        target: 'shaBegin', // 当其他角色使用杀时触发
                                    },
                                    forced: true, // 强制发动
                                    filter(event, player) {
                                        // 过滤条件
                                        if (get.tag(event.card, 'damage')) return true; // 只有出现伤害时才会触发效果
                                        return false;
                                    },
                                    content() {
                                        // 使用卡牌的效果
                                        'step 0';
                                        player.judge(function (card) {
                                            // 进行一次判定
                                            return card.suit == 'heart' || card.suit == 'diamond' ? 1 : -1; // 如果判定牌花色是♥️️或♦️️,则返回1,否则返回-1
                                        });
                                        ('step 1');
                                        if (result.suit == 'heart') {
                                            // 如果判定牌花色是♥️️,则取消杀并弃置该角色的手牌
                                            trigger.cancel();
                                            player.gain(result.card);
                                        }
                                        if (result.suit == 'diamond') {
                                            // 如果判定牌花色是♦️️,则该角色的护甲增加1点
                                            player.changeHujia(1);
                                        }
                                    },
                                },
                            },
                        },
                        音韵: {
                            // 技能名字为 <音韵>
                            audio: 'ext:神魔乱舞/audio:2', // 播放音效的编号,这里是 2
                            trigger: {
                                // 触发时机
                                player: 'phaseZhunbeiBegin', // 当玩家进入阶段<准备阶段>时触发
                            },
                            content() {
                                // 技能效果的代码部分开始
                                'step 0'; // 不重要的标记,用于后面程序的跳转
                                var list = ['权倾天下', '洛天依投食歌', '千年食谱颂', '孤单光量子', '为了你唱下去']; // 技能提供的可选项
                                if (player.hasSkill('量子')) {
                                    // 如果玩家拥有技能<量子>
                                    list.remove('孤单光量子'); // 将<孤单光量子>从可选项中移除
                                }
                                // 玩家在可选项中选择一项作为技能效果的执行
                                player
                                    .chooseControl(list) // 玩家从可选项中选择
                                    .set('ai', function () {
                                        // 设置 AI 的决策过程
                                        var n = [1, 2, 3, 4, 5].randomGet(); // 随机生成一个数字
                                        if (n == 2) return '权倾天下'; // 如果数字为 2,选择 <权倾天下>
                                        if (n == 3) return '千年依食谱颂'; // 如果数字为 3,选择 <千年依食谱颂>
                                        if (n == 1) return '为了你唱下去'; // 如果数字为 1,选择 <为了你唱下去>
                                        if (n == 4) return '孤单量子光'; // 如果数字为 4,选择 <孤单量子光>
                                        if (n == 5) return '洛天依投食歌'; // 如果数字为 5,选择 <洛天依投食歌>
                                    })
                                    .set('choiceList', list) // 设置可选项列表
                                    .set('prompt', '选择一项'); // 提示玩家选择
                                ('step 1'); // 不重要的标记,用于后面程序的跳转
                                // 根据玩家在上一步选择的结果,执行对应的技能效果
                                if (result.control == '权倾天下') {
                                    // 如果选择的是<权倾天下>
                                    game.saveConfig('神魔乱舞_backgroundmusic', '权倾天下'); // 存储游戏配置
                                    game.神魔乱舞Bgm(); // 播放背景音乐
                                    player.addTempSkill('权倾', {
                                        // 让玩家获得临时技能<权倾>
                                        player: 'phaseAfter', // 在回合结束之后失去该技能
                                    });
                                }
                                if (result.control == '洛天依投食歌') {
                                    // 如果选择的是<洛天依投食歌>
                                    game.saveConfig('神魔乱舞_backgroundmusic', '洛天依投食歌'); // 存储游戏配置
                                    game.神魔乱舞Bgm(); // 播放背景音乐
                                    player.addTempSkill('投食', {
                                        // 让玩家获得临时技能<投食>
                                        player: 'phaseAfter', // 在回合结束之后失去该技能
                                    });
                                }
                                if (result.control == '千年食谱颂') {
                                    // 如果选择的是<千年食谱颂>
                                    game.saveConfig('神魔乱舞_backgroundmusic', '千年食谱颂'); // 存储游戏配置
                                    game.神魔乱舞Bgm(); // 播放背景音乐
                                    player.addTempSkill('食谱', {
                                        // 让玩家获得临时技能<食谱>
                                        player: 'phaseAfter', // 在回合结束之后失去该技能
                                    });
                                }
                                if (result.control == '孤单光量子') {
                                    // 如果选择的是<孤单光量子>
                                    game.saveConfig('神魔乱舞_backgroundmusic', '孤单光量子'); // 存储游戏配置
                                    game.神魔乱舞Bgm(); // 播放背景音乐
                                    player.addSkill('量子'); // 让玩家获得技能<量子>
                                }
                                if (result.control == '为了你唱下去') {
                                    // 如果选择的是<为了你唱下去>
                                    game.saveConfig('神魔乱舞_backgroundmusic', '为了你唱下去'); // 存储游戏配置
                                    game.神魔乱舞Bgm(); // 播放背景音乐
                                    player.addTempSkill('qingnang', {
                                        // 让玩家获得临时技能<青囊>
                                        player: 'phaseAfter', // 在回合结束之后失去该技能
                                    });
                                    if (!player.hasSkill('jijiu')) {
                                        // 如果玩家没有技能<急救>
                                        player.addSkill('jijiu'); // 让玩家获得技能<急救>
                                    }
                                }
                            },
                            ai: {
                                // AI 部分开始
                                order: 10, // 发动优先度为 10,表示比普通技能更优先出牌
                                result: {
                                    // 对结果的判断
                                    player: 1, // 玩家会优先选择自己使用技能
                                },
                                // 主动技能 AI,发动优先度为 5(可自改,一般为 1-10),
                                // AI 只会选择敌人(如果把 -1 改成 1,则变成只会选择队友或自己),
                                // 如果把 target 改成 player 并且 -1 改成 1,那么就会变成只对自己使用
                            },
                        },
                        追踪导弹: {
                            trigger: {
                                player: 'useCardEnd', // 当触发者使用完卡牌后
                            },
                            naturesDamage() {
                                var list = Array.from(lib.nature.keys()),
                                    str = '';
                                for (var s of list) {
                                    str += s + lib.natureSeparator;
                                }
                                str = str.slice(0, -1);
                                return str;
                            },
                            mark: true, // 在触发者头像旁显示锁定标记
                            marktext: '追踪',
                            intro: {
                                name: '追踪导弹',
                                content: '你已被追踪导弹锁定,你使用卡牌时,受到一点追踪导弹造成的多属性伤害',
                            },
                            content() {
                                game.log(player, '已被锁定,发射导弹.');
                                //player.damage("nosource", 'fire'); // 对触发者造成一点无来源的追踪导弹伤害
                                player.damage('追踪导弹', lib.skill.追踪导弹.naturesDamage());
                            },
                        },
                        反应: {
                            // 反应炉效果
                            equipSkill: true, // 该效果为装备技能效果
                            forced: true, // 该效果强制触发
                            trigger: {
                                // 触发条件
                                player: 'dyingBefore', // 玩家即将濒死前
                            },
                            filter(event, player) {
                                // 过滤器,筛选符合条件的对象
                                return player.hp <= 0; // 筛选出体力值为0以下的玩家
                            },
                            content() {
                                // 触发效果
                                game.log(player, '装备的【反应炉】防止了濒死效果.当前', player, '体力值为 ', player.hp, '.'); // 输出信息到游戏日志中
                                trigger.cancel(); // 取消濒死效果
                            },
                        },
                        发明: {
                            //技能名
                            enable: 'phaseUse', //出牌阶段发动
                            usable: 1, //每回合只能使用一次
                            content() {
                                //实现效果的函数
                                'step 0'; //步骤0
                                player.chooseToDiscard('是否弃置一张手牌发明一张牌获得', 'h', function (card) {
                                    return true; // 允许弃置任意牌
                                }).ai = function (card) {
                                    return Math.floor(Math.random() * 10); // 返回一个随机数作为决策(范围为0-9)
                                };
                                ('step 1'); //步骤1
                                if (result.bool) {
                                    //如果决定弃置一张手牌
                                    var cardType = get.type(result.cards[0]); //获取弃置的卡牌类型
                                    var newCardName = ''; //新卡牌名称
                                    var backgroundImage = ''; //背景图像
                                    //根据不同的类型创建新卡牌并设置背景图像
                                    switch (cardType) {
                                        case 'basic':
                                            newCardName = '追踪导弹';
                                            backgroundImage = 'extension/神魔乱舞/image/追踪导弹.jpg';
                                            break;
                                        case 'equip':
                                            var randomNum = Math.floor(Math.random() * 2) + 1;
                                            newCardName = randomNum === 1 ? '能盾' : '能量武士刀';
                                            backgroundImage = randomNum === 1 ? 'extension/神魔乱舞/image/能量护盾.jpg' : 'extension/神魔乱舞/image/能量武士刀.jpg';
                                            break;
                                        case 'delay':
                                            newCardName = '电弧脉冲';
                                            backgroundImage = 'extension/神魔乱舞/image/电弧脉冲.jpg';
                                            break;
                                        case 'trick':
                                            newCardName = '护甲充能';
                                            backgroundImage = 'extension/神魔乱舞/image/护甲充能.jpg';
                                            break;
                                        default:
                                            // 如果类型不是basic、equip、delay、trick,不替换卡牌属性
                                            player.draw(1);
                                            return;
                                    }
                                    //创建新卡牌并输出日志记录
                                    var newCard = game.createCard2(newCardName, '♏', 'Ⓜ️️');
                                    newCard.setBackgroundImage(backgroundImage);
                                    player.gain(newCard);
                                    game.log(player, '获得了' + newCardName);
                                }
                            },
                            ai: {
                                //AI进行决策相关的参数
                                order: 10, //使用优先级为10
                                result: {
                                    player: 1, //影响目标范围,这里表示只对敌方玩家使用
                                },
                            },
                        },
                        变身: {
                            // 在出牌阶段发动
                            enable: 'phaseUse',
                            // 每回合只能使用一次
                            usable: 1,
                            // 技能效果实现
                            content() {
                                'step 0';
                                // 定义可选项
                                var list = ['马克1号', '马克3号', '马克4号'];
                                // 玩家进行选择
                                player
                                    .chooseControl(list)
                                    .set('ai', function () {
                                        // 设定 AI 随机选择的条件
                                        var n = [1, 2, 3, 4].randomGet();
                                        if (n == 2) return '马克1号';
                                        if (n == 3) return '马克3号';
                                        if (n == 1) return '马克4号';
                                    })
                                    .set('choiceList', list)
                                    .set('prompt', '选择一项');
                                ('step 1');
                                // 判断玩家选择的项并触发对应效果
                                if (result.control == '马克1号') {
                                    player.$fullscreenpop('I am Iron Man.,!', 'fire');
                                    player.reinit(player.name, '马克1号');
                                }
                                if (result.control == '马克3号') {
                                    player.$fullscreenpop('I am Iron Man.,!', 'metal');
                                    player.reinit(player.name, '马克3号');
                                }
                                if (result.control == '马克4号') {
                                    player.$fullscreenpop('I am Iron Man.,!', 'wood');
                                    player.reinit(player.name, '马克4号');
                                }
                            },
                            // 技能 AI 设定
                            ai: {
                                // 发动优先度为 5
                                order: 5,
                                // 技能效果只对敌人使用
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        盘丝: {
                            // mod - 对卡牌进行修改,将♦️️闪替换为决斗
                            mod: {
                                cardname(card, player) {
                                    if (card.suit == 'diamond' && card.name == 'shan') return 'juedou';
                                },
                            },
                            // 播放音效
                            audio: 'ext:神魔乱舞/audio:1',
                            // 技能触发时机
                            trigger: {
                                player: 'useCardToBegin',
                            },
                            // 超级夏洛特模式,使技能可以无限使用.这个是神魔乱舞扩展包的设定.
                            // 让技能可以触发多次
                            forced: true,
                            // 强制执行该技能,不允许任何异议
                            forced: true,
                            // 设置技能的目标条件.只有玩家使用钻石花色的牌,并且目标性别为男性(sex =='male'),而且不是无性别(sex != "none"),同时性别属性不为 undefined 时,该技能才会被触发.
                            filter(event, player, target) {
                                return event.player.isAlive() && event.card.suit == 'diamond' && event.card.name != 'wuxie' && event.target.sex == 'male' && event.target.sex != 'none' && event.target.sex != undefined;
                            },
                            // 描述技能的具体执行过程
                            content() {
                                if (!trigger.target.hasSkill('章')) {
                                    // 如果目标没有<章>这个技能,则给目标添加<章>技能,并播放<给你盖个章吧!>的说话语音.
                                    trigger.target.addSkill('章');
                                    player.say('给你盖个章吧!');
                                }
                            },
                        },
                        章: {
                            // 超级夏洛特模式,使技能可以无限使用
                            // 让技能可以触发多次
                            forced: true,
                            // 强制执行该技能,不允许任何异议
                            forced: true,
                            // 标记技能,可以在角色头像上显示出来
                            mark: true,
                            // 技能标记的文本样式
                            marktext: '🛐',
                            // 技能介绍内容
                            intro: {
                                name: '🛐',
                                content: '你已被紫霞盖章,你造成伤害后令紫霞/青霞摸一张牌.',
                            },
                            // 技能触发时机
                            trigger: {
                                source: 'damageAfter',
                            },
                            // 描述技能的具体执行过程
                            content() {
                                // 遍历场上所有的玩家,作用于当前角色
                                game.countPlayer(function (current) {
                                    // 如果当前玩家是紫霞或青霞
                                    if (current.name == '紫霞' || current.name == '青霞') {
                                        // 连线提示
                                        player.line(current, 'green');
                                        // 技能日志
                                        // 对当前玩家进行摸一张牌操作
                                        current.draw();
                                    }
                                });
                            },
                        },
                        金铃: {
                            audio: 'ext:神魔乱舞/audio:1', // 触发技能时播放音效
                            superCharlotte: true, // 技能可以无限使用
                            fixed: true, // 触发该技能的时机固定不变
                            forced: true, // 触发该技能是强制执行的,不会受到异议
                            trigger: {
                                player: 'damageAfter', // 玩家受到伤害后
                                source: 'damageAfter', // 玩家造成伤害后
                            },
                            filter(event, player) {
                                // 只有受伤害的玩家存活时才可以触发该技能
                                return event.player.isAlive();
                            },
                            preHidden: true, // 该技能是预埋技能,场上其他玩家看不到
                            content() {
                                // 该技能具体的执行过程
                                'step 0';
                                player.judge(); // 玩家进行判定
                                ('step 1');
                                if (result.suit == 'spade' && trigger.source != player) {
                                    // 如果判定结果为♠️️且伤害来源不是该玩家本身,则连线并对伤害来源造成雷属性伤害
                                    trigger.source.link();
                                    trigger.source.damage('thunder');
                                } else if (result.suit == 'spade' && trigger.source == player) {
                                    // 如果判定结果为♠️️且伤害来源是该玩家本身,则连线并对自己造成雷属性伤害
                                    player.link();
                                    player.damage('thunder');
                                }
                                if (result.suit == 'heart' && player.hp < player.maxHp) {
                                    // 如果判定结果为♥️️且该玩家的体力值小于上限,则为该玩家回复一点体力
                                    player.recover();
                                } else if (result.suit == 'heart' && player.hp == player.maxHp) {
                                    // 如果判定结果为♥️️且该玩家的体力值已满,则为该玩家获得一点护甲
                                    player.changeHujia();
                                    game.log(player, '获得了一点护甲');
                                }
                                if (!player.hasSkill('神体1') && result.suit == 'club') {
                                    // 如果判定结果为♣️️且该玩家没有<神体1>技能,则在玩家的回合开始时获得<神体1>技能
                                    player.addTempSkill('神体1', {
                                        player: 'phaseBegin',
                                    });
                                    game.log(player, '获得了神体');
                                } else if (player.hasSkill('神体1') && result.suit == 'club') {
                                    // 如果判定结果为♣️️且该玩家已经拥有<神体1>技能,则在玩家的回合开始时获得<霸体>技能
                                    player.addTempSkill('霸体', {
                                        player: 'phaseBegin',
                                    });
                                }
                                if (result.suit == 'diamond' && trigger.source == player) {
                                    // 如果判定结果为♦️️且伤害来源是该玩家本身,则获得当前判定牌
                                    player.gain(result.card);
                                    game.log(player, '获得了判定牌', result.card);
                                } else if (result.suit == 'diamond' && trigger.source != player && !trigger.source.hasSkill('fengyin')) {
                                    // 如果判定结果为♦️️且伤害来源不是该玩家本身并且该伤害来源没有<封印>技能,则在其回合开始时获得<封印>技能
                                    trigger.source.addTempSkill('fengyin', {
                                        player: 'phaseBegin',
                                    });
                                    game.log(trigger.source, '被封印了');
                                } else if (result.suit == 'diamond' && trigger.source != player && trigger.source.hasSkill('fengyin')) {
                                    // 如果判定结果为♦️️且伤害来源不是该玩家本身并且该伤害来源已经拥有<封印>技能,则让其摸一张牌
                                    trigger.source.draw();
                                }
                            },
                        },
                        神体: {
                            // 技能名称为<神体>
                            forced: true, // 强制执行该技能
                            superCharlotte: true, // 技能可以无限使用
                            trigger: {
                                player: 'damageBegin3', // 触发技能的时机为玩家受到 3 点及以上伤害前
                            },
                            content() {
                                trigger.num = 1; // 将本次伤害数值改为 1
                                if (trigger.num > 0) {
                                    player.addTempSkill('神体1', {
                                        // 下个回合开始时为该玩家添加 <神体1> 技能
                                        player: 'phaseBegin',
                                    });
                                }
                            },
                        },
                        神体1: {
                            // 技能名称为<神体1>,为<神体>技能的效果之一
                            forced: true, // 强制执行该技能
                            superCharlotte: true, // 技能可以无限使用
                            trigger: {
                                player: 'damageBegin2', // 触发技能的时机为玩家受到 2 点及以下伤害前
                            },
                            unmarkSkill: true, // 该技能不会被标记
                            intro: {
                                // 介绍该技能的效果,显示在角色信息栏中
                                content: '防止你受到的所有伤害直至你下回合开始',
                            },
                            content() {
                                trigger.cancel(); // 取消本次伤害
                                game.log(player, '神体触发免疫本次伤害');
                            },
                        },
                        灯芯: {
                            // 技能名称为<灯芯>
                            audio: 'ext:神魔乱舞/audio:true', // 播放音效
                            forced: true, // 强制执行该技能
                            superCharlotte: true, // 技能可以无限使用
                            trigger: {
                                player: 'useCardAfter', // 玩家使用卡牌后触发该技能
                            },
                            filter(event, player) {
                                // 检查该技能是否会触发
                                // 如果事件为<灯芯>卡牌或者使用的卡牌为装备牌,则不触发该技能
                                if (event.parent.name == '灯芯' || get.type(event.card) === 'equip') return false;
                                var card = game.createCard(event.card.name, event.card.suit, event.card.number, event.card.nature);
                                var targets = event._targets || event.targets;
                                for (var target of targets) {
                                    // 遍历目标
                                    // 如果该目标有身份(即在游戏中),且该卡牌可以对该目标使用,则返回 true
                                    if (
                                        target.isIn() &&
                                        player.canUse(
                                            {
                                                name: event.card.name,
                                            },
                                            target,
                                            false,
                                            false
                                        )
                                    )
                                        return true;
                                }
                                // 否则返回 false
                                return false;
                            },
                            content() {
                                // 技能执行的效果
                                'step 0';
                                event.targets = trigger._targets || trigger.targets;
                                event.num = 1;
                                ('step 1');
                                event.num--;
                                // 如果使用该技能的角色为<紫霞>,则将其转化为<青霞>,反之亦然
                                if (player.name == '紫霞') {
                                    player.reinit(player.name, '青霞');
                                } else {
                                    player.reinit(player.name, '紫霞');
                                }
                                var card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number, trigger.card.nature);
                                for (var target of event.targets) {
                                    // 遍历目标
                                    if (!target.isIn() || !player.canUse(card, target, false, false)) event.targets.remove(target);
                                    // 如果目标不在游戏中或者无法使用该卡牌对该目标造成伤害,则从目标数组中移除该目标
                                }
                                if (event.targets.length) {
                                    // 如果还有目标,则继续执行
                                    player.useCard(get.copy(trigger.card), event.targets);
                                    player.$throw(card, 1000);
                                    game.cardsGotoSpecial(card);
                                    // 对目标使用该卡牌,显示投掷该卡牌的动画效果,并将该卡牌移动到弃牌堆的特殊区域中
                                } else event.finish(); // 如果没有目标可选,则结束
                                ('step 2');
                                if (event.num > 0) event.goto(1); // 如果次数还没有用完,则回到步骤 1 继续执行
                                if (player.name == '紫霞') {
                                    // 最后再一次切换角色身份
                                    player.reinit(player.name, '青霞');
                                } else {
                                    player.reinit(player.name, '紫霞');
                                }
                            },
                        },
                        神域: {
                            // 定义技能<神域>
                            mode: ['identity'],
                            group: ['神域1', '神域2'], // 技能分组
                            forced: true, // 强制发动
                            fixed: true, // 标记数不变
                            charlotte: true, // 具有夏洛特限定技效果
                            trigger: {
                                // 触发技能
                                global: 'dieBegin', // 当有角色死亡时
                            },
                            filter(event, player) {
                                // 过滤器函数
                                if (game.players.length >= 2 && event.player != player) return true; // 当游戏人数大于等于2且死亡角色不是自己时
                                return false;
                            },
                            unmarkSkill: true, // 使用时取消标记
                            marktext: '神域', // 标记文本
                            intro: {
                                // 技能简介
                                name: '神域', // 技能名称
                                content: '游戏人数记录#人', // 技能描述
                            },
                            init(player) {
                                // 初始化函数
                                var num = game.players.length; // 获取当前游戏人数
                                player.storage.神域 = num; // 初始标记数为当前游戏人数
                                // 同步标记
                            },
                            content() {
                                // 技能内容
                                'step 0';
                                game.removePlayer(trigger.player); // 移除死亡角色
                            },
                        },
                        神域1: {
                            mode: ['identity'],
                            forced: true, // 强制发动
                            fixed: true, // 固定在牌堆顶
                            charlotte: true, // 夏洛特角色专属技能
                            trigger: {
                                global: 'dieEnd', // 触发时机为任意角色死亡后
                            },
                            filter(event, player) {
                                if (game.players.length <= 1) return true; // 游戏结束,发动神域1
                                return false;
                            },
                            content() {
                                'step 0';
                                var list = [];
                                for (var i in lib.character) {
                                    list.push(i);
                                }
                                //var m = [1, 2, 3, 4, 5, 6, 7];
                                //var pos = m.randomGet();  // 随机选择一个座位号
                                //var pos=m.shift();
                                if (!player.storage.座位号列表) {
                                    player.storage.座位号列表 = Array.from({ length: player.storage.神域 - 1 }, (_, index) => index + 1);
                                }
                                var pos = player.storage.座位号列表.shift(); // 移除并返回座位号列表player.storage.座位号列表.randomGet();  // 随机选择一个座位号
                                var players = game.addPlayer(pos, list.randomGet()); // 添加一个随机角色
                                //m.remove(pos);  // 删除已有玩家的座位号
                                player.storage.座位号列表.remove(pos); // 删除已有玩家的座位号
                                game.log('<span style="color:red">' + get.translation(players.name) + '被召唤上场了</span>');
                                players.getId();
                                if (lib.config.extension_手杀ui_enable) {
                                    if (!players.node.seat) players.node.seat = decadeUI.element.create('seat', players);
                                    players.seat = pos + 1;
                                    players.node.seat.innerHTML = get.cnNumber(players.seat, true);
                                }
                                players.identity = 'nei';
                                players.setIdentity('nei'); // 设置身份为内奸
                                players.side = player.side; // 设置阵营
                                players.draw(4); // 抽4张牌
                                players.showIdentity(true); // 显示身份
                                var nm = game.players.length;
                                if (nm < player.storage.神域) {
                                    // 如果玩家数小于存储的神域次数,则继续发动神域1
                                    event.redo();
                                } else {
                                    event.finish(); // 否则结束
                                    player.storage.座位号列表 = false; // 清空座位号列表
                                }
                            },
                        },
                        神域2: {
                            // 定义技能<神域2>
                            mode: ['identity'],
                            forced: true, // 强制发动
                            fixed: true, // 标记数不变
                            charlotte: true, // 具有夏洛特限定技效果
                            trigger: {
                                // 触发技能
                                global: 'gameStart', // 当游戏开始时
                            },
                            content() {
                                // 技能内容
                                for (var i of game.players) {
                                    //QQ
                                    //   if (i.identity == "zhong") {  // 将所有角色身份设置为内奸
                                    i.identity = 'nei';
                                    i.setIdentity('nei');
                                    /*  }
                                      if (i.identity == "fan") {
                                          i.identity = "nei";
                                          i.setIdentity('nei');
                                      }
                                      if (i.identity == "nei") {
                                          i.setIdentity('nei');
                                      }*/
                                    i.showIdentity(); // 显示身份
                                }
                            },
                        },
                        机改: {
                            mode: ['identity'],
                            _priority: 999, // 该技能的优先级为最高
                            group: '机改1', // 该技能与同组技能共同组成技能事件
                            forced: true, // 该技能是强制发动的
                            fixed: true, // 该技能固定在牌堆顶
                            charlotte: true, // 该技能是夏洛特角色专属技能
                            trigger: { source: 'dieBegin' }, // 触发时间为自己击杀一名角色之前
                            mark: true, // 该技能带有一个标记
                            marktext: '击杀数', // 标记的名称为<击杀数>
                            intro: {
                                name: '击杀数',
                                content: '<span style="color:red">已杀</span><span style="color:gold">#人,当你击杀<span style="color:gold">666</span>人获得胜利</span>',
                            }, // 标记的介绍信息
                            init(player) {
                                // 技能初始化时执行的操作
                                player.storage.机改 = 0; // 初始无限标记数量为0
                                // 同步标记
                            },
                            content() {
                                // 技能触发时执行的具体效果
                                player.markSkill('机改'); // 标记玩家拥有该技能
                                // 更新标记显示
                                player.storage.机改 += 1; // 机改标记数量加1
                                // 同步标记
                                if (player.storage.机改 == 666) {
                                    // 如果机改标记数量达到666
                                    game.over(true); // 游戏结束,该玩家获胜
                                }
                            },
                        },
                        // 定义名为"机改1"的技能效果对象
                        机改1: {
                            mode: ['identity'],
                            forceDie: true, // 该技能会导致玩家死亡
                            forced: true, // 该技能是强制发动的
                            fixed: true, // 该技能固定在牌堆顶
                            charlotte: true, // 该技能是夏洛特角色专属技能
                            trigger: { player: 'dieEnd' }, // 触发时间为玩家死亡之后
                            content() {
                                // 技能触发时执行的具体效果
                                for (var i of game.players) {
                                    //QQ // 遍历所有玩家
                                    i.addSkill('机改2'); // 将"机改2"技能添加到所有玩家身上
                                }
                            },
                        },
                        // 定义名为"机改2"的技能效果对象
                        机改2: {
                            mode: ['identity'],
                            _priority: 999, // 该技能的优先级为最高
                            forceDie: true, // 该技能会导致玩家死亡
                            forced: true, // 该技能是强制发动的
                            // 该技能不能被失去
                            charlotte: true, // 该技能是夏洛特角色专属技能
                            superCharlotte: true, // 该技能是超级夏洛特角色专属技能
                            trigger: { global: 'dieAfter' }, // 触发时间为任意角色死亡之后
                            filter(event, player) {
                                // 过滤条件
                                if (game.players.length <= 1) return true; // 只有一个玩家存活时,该技能才会生效
                                return false;
                            },
                            content() {
                                // 技能触发时执行的具体效果
                                game.over(false); // 游戏结束,胜利者为上一名死亡的角色
                            },
                        },
                        国士: {
                            // 超级女娲模式下有效
                            mode: ['identity'],
                            prompt: false,
                            // 触发全局事件 "dieEnd"
                            trigger: {
                                global: 'dieEnd',
                            },
                            content() {
                                // 内容:
                                // 如果当前游戏配置中包含<仙家之魂>扩展,并且有一个名为<XWTR>的角色,且玩家不是内奸身份,则执行以下操作
                                if (lib.config.extensions && lib.config.extensions.includes('仙家之魂') && lib.config.characters.includes('XWTR') && player.identity != 'nei') {
                                    // 随机播放一段语音
                                    player.say(['出来吧,李白!', '好基友,一生一起走.'].randomGet());
                                    // 触发<李白>人物的复活和技能操作
                                    trigger.player.revive();
                                    trigger.player.clearSkills();
                                    player.awakenSkill('国士');
                                    // 将目标角色清空技能并重新设置为<李白>
                                    var name = trigger.player.name;
                                    trigger.player.reinit(name, 'xjzh_wzry_libai');
                                    // 回复目标角色的血量和手牌,将其阵营设为<唐>
                                    trigger.player.hp = trigger.player.maxHp;
                                    trigger.player.draw(trigger.player.maxHp);
                                    trigger.player.changeGroup('唐');
                                    // 根据玩家的身份,设置目标角色的身份并展示
                                    if (player.identity == 'zhu') {
                                        trigger.player.identity = 'zhong';
                                        game.zhong = trigger.player;
                                        trigger.player.showIdentity();
                                    }
                                    if (player.identity == 'zhong') {
                                        trigger.player.identity = 'zhong';
                                        game.zhong = trigger.player;
                                        trigger.player.showIdentity();
                                    }
                                    if (player.identity == 'fan') {
                                        trigger.player.identity = 'fan';
                                        game.fan = trigger.player;
                                        trigger.player.showIdentity();
                                    }
                                    // 更新目标角色的信息,并随机播放一段语音.
                                    trigger.player.update();
                                    trigger.player.say(['哈!😁!😁!,十步杀一人,千里不留行', '韩信快点去偷塔,我来GANK他们.'].randomGet());
                                }
                                // 如果不满足条件,则给当前玩家添加<霸体>技能并觉醒<国士>技能
                                else {
                                    player.addSkill('霸体');
                                    player.awakenSkill('国士');
                                }
                            },
                        },
                        霸体: {
                            equipSkill: true,
                            mod: {
                                targetEnabled(card) {
                                    if (get.type(card) == 'delay') return false;
                                },
                            },
                            trigger: {
                                player: ['turnOverBefore', 'linkBefore', 'disableEquipBefore'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.name == 'disableEquip') return true;
                                if (event.name == 'link') return !player.isLinked();
                                return !player.isTurnedOver();
                            },
                            content() {
                                trigger.cancel();
                                if (trigger.name == 'link') {
                                    game.log(player, '取消了横置');
                                } else if (trigger.name == 'disableEquip') {
                                    game.log(player, '取消了废除装备栏');
                                } else game.log(player, '取消了翻面');
                            },
                        },
                        背水: {
                            enable: 'phaseUse',
                            usable: 1,
                            selectCard: 1,
                            filterCard: true,
                            filter(event, player) {
                                //发动限制条件
                                return player.countCards('h'); //你有手牌时才能发动
                            },
                            content() {
                                //内容:
                                player.addTempSkill('背水1', 'phaseAfter');
                                player.addTempSkill('背水2', 'phaseAfter');
                            },
                            ai: {
                                order: 5,
                                result: {
                                    player: 1,
                                },
                            },
                            //主动技ai,发动优先度为5(可自改,一般为1-10),ai只会选择敌人(如果把-1改成1,则变成只会选择队友或自己) ,如果把target改成player并且-1改成1,那么就会变成只对自己使用
                        },
                        背水2: {
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance + 1;
                                },
                            },
                        },
                        背水1: {
                            trigger: {
                                player: 'useCard2',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                var targets = game.filterPlayer(function (current) {
                                    return !trigger.targets.includes(current) && current.hasSkill('无情1') && lib.filter.targetEnabled(trigger.card, player, current);
                                });
                                if (targets.length) {
                                    trigger.targets.addArray(targets.sortBySeat());
                                    game.log(targets, '也成为了', trigger.card, '的目标');
                                }
                            },
                        },
                        杀: {
                            mod: {
                                globalFrom(from, to, current) {
                                    return current - Math.max(0, from.countMark('杀'));
                                },
                            },
                            audio: 'ext:神魔乱舞/audio:1',
                            forced: true,
                            trigger: {
                                player: 'shaBegin',
                            },
                            unmark: true,
                            marktext: '杀',
                            intro: {
                                name: '杀',
                                content: 'mark',
                            },
                            init(player) {
                                //初始化(好习惯),获得这个技能时执行的内容
                                player.storage.杀 = 0; //初始
                                //同步标记(每当标记变动都要写这句)
                                //注:标记名必须和技能名相同
                            },
                            filter(event, player) {
                                return event.card;
                            },
                            async content(event, trigger, player) {
                                //QQQ
                                if (player.storage.杀 < 3) {
                                    player.storage.杀 += 1;
                                    game.addVideo('storage', player, ['杀', player.storage.杀]);
                                    if (player.name == '韩信') {
                                        var ph = [1, 2, 3, 4, 5, 6].randomGet();
                                        if (ph == 1) player.node.avatar.setBackgroundImage('extension/神魔乱舞/image/韩信1.jpg');
                                        if (ph == 2) player.node.avatar.setBackgroundImage('extension/神魔乱舞/image/韩信2.jpg');
                                        if (ph == 3) player.node.avatar.setBackgroundImage('extension/神魔乱舞/image/韩信3.jpg');
                                        if (ph == 4) player.node.avatar.setBackgroundImage('extension/神魔乱舞/image/韩信4.jpg');
                                        if (ph == 5) player.node.avatar.setBackgroundImage('extension/神魔乱舞/image/韩信5.jpg');
                                        if (ph == 6) player.node.avatar.setBackgroundImage('extension/神魔乱舞/image/韩信6.jpg');
                                        event.finish();
                                    }
                                } else {
                                    player.removeMark('杀', Infinity);
                                    player.removeSkill('杀');
                                    player.addSkill('杀意');
                                }
                            },
                        },
                        杀意: {
                            audio: 'ext:神魔乱舞/audio:1',
                            forced: true,
                            trigger: {
                                player: 'shaEnd',
                            },
                            content() {
                                player.useCard(
                                    {
                                        name: 'sha',
                                    },
                                    trigger.target
                                );
                                player.draw();
                                player.removeSkill('杀意');
                                player.addSkill('杀');
                            },
                        },
                        无情: {
                            audio: 'ext:神魔乱舞/audio:1',
                            forced: true,
                            shaRelated: true,
                            trigger: {
                                player: 'useCardToBegin',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                'step 0';
                                if (!trigger.target.hasSkill('无情1')) {
                                    trigger.target.addSkill('无情1');
                                    trigger.target.storage.无情++;
                                } else player.getStat().card.sha--;
                            },
                        },
                        无情1: {
                            forced: true,
                            mark: true,
                            marktext: '🈹',
                            intro: {
                                name: '🈹',
                                content: '其他有🈹的角色成为背水技能的目标时,你也成为此技能目标',
                            },
                        },
                        造势: {
                            mode: ['identity'],
                            enable: 'phaseUse',
                            nobracket: true,
                            usable: 1,
                            selectCard: 1,
                            filterCard: true,
                            position: 'h',
                            discard: false,
                            prepare: 'give',
                            selectTarget: 2,
                            filterTarget: true,
                            filter(event, player) {
                                return player.hp > 1 && player.countCards('h'); //你有手牌时才能发动
                            },
                            multitarget: true,
                            check(card) {
                                return 10 - get.value(card);
                            },
                            targetprompt: ['发起拼点', '被拼点'],
                            prompt: '选择一张手牌并选择两名进行拼点的目标',
                            content() {
                                //内容:
                                'step 0';
                                player.loseHp();
                                targets[0].gain(cards, player, 'give');
                                targets[1].gainMaxHp();
                                ('step 1');
                                targets[0].chooseToCompare(targets[1]);
                                targets[0].line(targets[1]);
                                ('step 2');
                                if (result.bool) {
                                    targets[0].useCard(
                                        {
                                            name: 'sha',
                                        },
                                        targets[1],
                                        false
                                    );
                                    game.log(targets[0].name, '拼点获胜');
                                    targets[0].draw();
                                    targets[0].changeHujia();
                                    game.zhu.identity = targets[0].identity;
                                    game.log(game.zhu.name, '身份变成了', game.zhu.identity);
                                    if (game.zhu.identity == 'zhong') game.zhu.setIdentity('zhong');
                                    if (game.zhu.identity == 'fan') game.zhu.setIdentity('fan');
                                    if (game.zhu.identity == 'nei') game.zhu.setIdentity('nei');
                                    if (game.zhu.identity != 'zhu') {
                                        targets[0].identity = 'zhu';
                                        game.log(targets[0].name, '身份变成了', targets[0].identity);
                                        game.zhu = targets[0];
                                    }
                                    if (targets[0].identity == 'zhu') targets[0].setIdentity('zhu');
                                } else if (result.tie) {
                                    game.log('拼点和局');
                                    targets[0].recover();
                                    targets[1].recover();
                                } else {
                                    targets[1].useCard(
                                        {
                                            name: 'sha',
                                        },
                                        targets[0],
                                        false
                                    );
                                    game.log(targets[1].name, '拼点获胜');
                                    targets[1].draw();
                                    targets[1].changeHujia();
                                    game.zhu.identity = targets[1].identity;
                                    game.log(game.zhu.name, '身份变成了', game.zhu.identity);
                                    if (game.zhu.identity == 'zhong') game.zhu.setIdentity('zhong');
                                    if (game.zhu.identity == 'fan') game.zhu.setIdentity('fan');
                                    if (game.zhu.identity == 'nei') game.zhu.setIdentity('nei');
                                    if (game.zhu.identity != 'zhu') {
                                        targets[1].identity = 'zhu';
                                        game.log(targets[1].name, '身份变成了', targets[1].identity);
                                        game.zhu = targets[1];
                                    }
                                    if (targets[1].identity == 'zhu') targets[1].setIdentity('zhu');
                                }
                                ('step 3');
                                player.draw();
                                player.changeHujia();
                                player.recover();
                            },
                        },
                        穿越: {
                            forceDie: true,
                            trigger: {
                                global: 'roundStart',
                            },
                            filter(event, player) {
                                return player.countCards('h') >= 1; //你有手牌时才能发动
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard([1, 5]).set('ai', function () {
                                    if (player.countCards('h') >= 3) return '1';
                                    if (player.countCards('h') >= 4) return '2';
                                    if (player.countCards('h') >= 5) return '3';
                                    if (player.countCards('h') >= 6) return '4';
                                    return false;
                                });
                                ('step 1');
                                if (result.cards) {
                                    var num = result.cards.length;
                                    game.mp47('穿越');
                                    game.roundNumber += num;
                                    player.removeSkill('潜行');
                                    player.addSkill('造势');
                                    game.log(player.name, '穿越到第', game.roundNumber, '轮游戏');
                                    game.saveConfig('神魔乱舞_backgroundmusic', '天命最高');
                                    game.神魔乱舞Bgm();
                                } else event.finish();
                                ('step 2');
                                if (player.name == '项少龙') {
                                    player.node.avatar.setBackgroundImage('extension/神魔乱舞/image/项少龙2.jpg');
                                }
                                game.countPlayer(function (current) {
                                    if (current.isAlive() && result.cards.length) {
                                        //  var target=game.filterPlayer().randomGet();
                                        // var num=[1,2,3].randomGet();
                                        var num = result.cards.length;
                                        var n = [1, 2, 3, 4].randomGet();
                                        if (n == 1) {
                                            var p = [1, 2].randomGet();
                                            if (p == 1) current.loseHp(num);
                                            if (p == 2) current.recover(num);
                                        }
                                        if (n == 2) {
                                            var o = [1, 2].randomGet();
                                            if (o == 1) current.draw(num);
                                            if (o == 2) current.chooseToDiscard(num, true);
                                        }
                                        if (n == 3) {
                                            var list = [];
                                            for (var i = 0; i <= num; i++) {
                                                if (!current.getEquip(i)) {
                                                    var name = get.inpile('equip' + i).randomGet();
                                                    if (name) {
                                                        var card = game.createCard(name);
                                                        current.equip(card);
                                                    }
                                                }
                                            }
                                        }
                                        if (n == 4) {
                                            var s = [1, 2].randomGet();
                                            if (s == 1) current.link();
                                            if (s == 2) current.link(false);
                                        }
                                    }
                                });
                                //主动技ai,发动优先度为5(可自改,一般为1-10),ai只会选择敌人(如果把-1改成1,则变成只会选择队友或自己) ,如果把target改成player并且-1改成1,那么就会变成只对自己使用
                            },
                            ai: {
                                order: 8,
                                result: {
                                    player: 1,
                                },
                            },
                            group: '穿越_1',
                            subSkill: {
                                1: {
                                    forced: true,
                                    trigger: {
                                        target: ['shaBefore', 'juedouBefore'],
                                    },
                                    content() {
                                        if (player.name == '项少龙') {
                                            player.node.avatar.setBackgroundImage('extension/神魔乱舞/image/项少龙.jpg');
                                        }
                                        player.removeSkill('造势');
                                        player.addSkill('潜行');
                                    },
                                },
                            },
                        },
                        潜行: {
                            forced: true,
                            trigger: {
                                player: 'damageBegin',
                            },
                            content() {
                                trigger.num = 1;
                                player.tempHide();
                                if (player.name == '项少龙') {
                                    player.node.avatar.setBackgroundImage('extension/神魔乱舞/image/黑衣人.jpg');
                                }
                            },
                            group: '潜行_1',
                            subSkill: {
                                1: {
                                    forced: true,
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    content() {
                                        if (player.name == '项少龙') {
                                            player.node.avatar.setBackgroundImage('extension/神魔乱舞/image/项少龙.jpg');
                                        }
                                        game.log(player.name, '进入了潜行状态');
                                    },
                                },
                            },
                        },
                        破釜: {
                            enable: 'phaseUse',
                            usable: 1,
                            selectCard: -1,
                            filterCard: true,
                            position: 'h',
                            viewAs: {
                                name: 'juedou',
                            },
                            viewAsFilter(player) {
                                //视为技的限制条件
                                return player.countCards('h'); //你有手牌时才能发动
                            },
                            ai: {
                                wuxie(target, card, player, viewer) {
                                    if (player == game.me && get.attitude(viewer, player) > 0) {
                                        return 0;
                                    }
                                },
                                basic: {
                                    order: 5,
                                    useful: 1,
                                    value: 5.5,
                                },
                                result: {
                                    target: -1.5,
                                    player(player, target, card) {
                                        if (
                                            player.hasSkillTag(
                                                'directHit_ai',
                                                true,
                                                {
                                                    target: target,
                                                    card: card,
                                                },
                                                true
                                            )
                                        ) {
                                            return 0;
                                        }
                                        if (get.damageEffect(target, player, target) > 0 && get.attitude(player, target) > 0 && get.attitude(target, player) > 0) {
                                            return 0;
                                        }
                                        var hs1 = target.getCards('h', 'sha');
                                        var hs2 = player.getCards('h', 'sha');
                                        if (hs1.length > hs2.length + 1) {
                                            return -2;
                                        }
                                        var hsx = target.getCards('h');
                                        if (hsx.length > 2 && hs2.length == 0 && hsx[0].number < 6) {
                                            return -2;
                                        }
                                        if (hsx.length > 3 && hs2.length == 0) {
                                            return -2;
                                        }
                                        if (hs1.length > hs2.length && (!hs2.length || hs1[0].number > hs2[0].number)) {
                                            return -2;
                                        }
                                        return -0.5;
                                    },
                                },
                                tag: {
                                    respond: 2,
                                    respondSha: 2,
                                    damage: 1,
                                },
                            },
                        },
                        霸王: {
                            forced: true,
                            trigger: {
                                player: 'juedouBegin',
                            },
                            content() {
                                //player.gain(game.createCard('sha'),true);
                                if (game.players.length >= 5) {
                                    player.say(['力拔山兮气盖世', '时不利兮骓不逝'].randomGet());
                                    player.draw();
                                } else player.say(['取你小命', '是男人就受我一击.'].randomGet());
                                trigger.nowuxie = true;
                                trigger.directHit = true;
                            },
                            group: ['霸王_1', '霸王_2'],
                            subSkill: {
                                1: {
                                    prompt: '是否弃置两张牌,令本回合出杀次数+1',
                                    filter(event, player) {
                                        return player.countCards('he') >= 2 && game.players.length >= 5;
                                    },
                                    trigger: {
                                        player: 'shaMiss',
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseToDiscard('he', 2);
                                        ('step 1');
                                        if (result.cards) {
                                            player.say(['长锋所指,四方臣服.', '捭阖天下,无人可挡.!'].randomGet());
                                            player.getStat().card.sha--;
                                        }
                                    },
                                },
                                2: {
                                    forced: true,
                                    trigger: {
                                        player: 'shaBegin',
                                    },
                                    filter(event, player) {
                                        return game.players.length < 5;
                                    },
                                    content() {
                                        player.say(['谁能挡我？', '吾力可破鼎.'].randomGet());
                                        trigger.directHit = true;
                                    },
                                },
                            },
                        },
                        万人敌: {
                            mod: {
                                selectTarget(card, player, range) {
                                    if (card.name == 'sha' || card.name == 'juedou') range[1] += 10000; //你的杀可以额外选择10000名角色
                                },
                                targetInRange(card, player, target) {
                                    if (card.name == 'sha') return true; //你使用的杀可以指定所有角色
                                },
                            },
                        },
                        惧箭: {
                            forced: true,
                            trigger: {
                                player: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'wanjian';
                            },
                            content() {
                                trigger.cancel();
                                var num = player.maxHp - 1;
                                player.loseMaxHp(num);
                            },
                        },
                        威勇: {
                            prompt: '是否视为对其使用一张决斗',
                            //forcedDie: true,
                            trigger: {
                                global: 'phaseEnd',
                            },
                            filter(event, player) {
                                return event.player.isAlive() && player != event.player;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            content() {
                                player.say(['小儿敢否与我一战😏', '尔等🐂🦄来决斗吧!'].randomGet());
                                player.useCard(
                                    {
                                        name: 'juedou',
                                    },
                                    'nowuxie',
                                    trigger.player
                                );
                            },
                            group: '威勇_1',
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'juedouEnd',
                                    },
                                    forced: true,
                                    _priority: 11,
                                    content() {
                                        var n = [1, 2, 3, 4].randomGet();
                                        if (n == 1) player.changeHujia();
                                        if (n == 2)
                                            player.useCard(
                                                {
                                                    name: 'juedou',
                                                },
                                                trigger.target
                                            );
                                        if (n == 3) player.recover();
                                        if (n == 4) player.draw();
                                    },
                                },
                            },
                        },
                        郎顾: {
                            forced: true,
                            trigger: {
                                global: 'phaseDrawEnd',
                            },
                            filter(event, player) {
                                return event.player.sex == 'female';
                            },
                            content() {
                                if (player.name == '周瑜') {
                                    player.node.avatar.setBackgroundImage('extension/神魔乱舞/image/周瑜1.jpg');
                                }
                                player.gainPlayerCard(trigger.player, 'he', 1);
                            },
                        },
                        天妒: {
                            forced: true,
                            trigger: {
                                player: ['useCardAfter', 'respondAftter'],
                            },
                            mark: true,
                            init(player) {
                                player.storage.天妒 = 0;
                                game.addVideo('storage', player, ['天妒', player.storage.天妒]);
                            },
                            async content(event, trigger, player) {
                                //QQQ
                                if (player.storage.天妒 <= 35) {
                                    player.storage.天妒 += 1;
                                    game.addVideo('storage', player, ['天妒', player.storage.天妒]);
                                }
                            },
                            intro: {
                                name: '天妒',
                                content: '你已使用/打出#张牌',
                            },
                            group: '天妒_1',
                            subSkill: {
                                1: {
                                    forced: true,
                                    forceDie: true,
                                    trigger: {
                                        player: '天妒Begin',
                                    },
                                    filter(event, player) {
                                        //发动限制条件
                                        return player.storage.天妒 == 35;
                                    },
                                    content() {
                                        player.die();
                                        game.log(player.name, '被天谴了');
                                        player.fuhuo(1, player.maxHp, player.maxHp);
                                    },
                                },
                            },
                        },
                        赤壁: {
                            forced: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            content() {
                                trigger.nature = 'fire';
                                player.node.avatar.setBackgroundImage('extension/神魔乱舞/image/周瑜.jpg');
                            },
                            group: '赤壁_2',
                            subSkill: {
                                2: {
                                    trigger: {
                                        global: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.nature == 'fire') return true;
                                        return false;
                                    },
                                    content() {
                                        trigger.player.link();
                                        if (player.hp < player.maxHp) {
                                            player.recover(trigger.num);
                                        }
                                    },
                                },
                            },
                        },
                        摆烂: {
                            trigger: {
                                player: 'dieBegin',
                            },
                            fixed: true,
                            prompt: '你是否输不起要开始摆烂？你直接获得胜利？',
                            content() {
                                player.say(['玩个毛线,老子开摆🐶', '你们这群🐮🐴,摆死你们'].randomGet());
                                if (player.isFriendsOf(game.me) || game.me == player) {
                                    game.over(true);
                                } else {
                                    game.over(false);
                                }
                            },
                        },
                        摸鱼: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            fixed: true,
                            prompt: '你是否不想玩开始摸鱼？将武将牌永久翻面并由ai全局托管？',
                            content() {
                                player.say(['我要摸鱼去了,你们继续🤓', '摸鱼真爽啊!😜'].randomGet());
                                player.discard(player.getCards('h'));
                                player.turnOver();
                            },
                            group: '摸鱼_2',
                            subSkill: {
                                2: {
                                    trigger: {
                                        player: ['turnOverBefore'],
                                    },
                                    _priority: 20,
                                    charlotte: true,
                                    firstDo: true,
                                    temp: true,
                                    silent: true,
                                    filter(event, player) {
                                        return player.isTurnedOver();
                                    },
                                    content() {
                                        trigger.cancel();
                                        if (trigger.name == 'turnOver') {
                                            game.log(player, '取消了翻回正面');
                                        }
                                    },
                                },
                            },
                        },
                        主人3: {
                            mode: ['identity'],
                            trigger: {
                                player: 'die',
                            },
                            forced: true,
                            forceDie: true,
                            filter(event, player) {
                                return player.identity == 'fan' && event.source && (event.source.identity == 'zhu' || event.source.identity == 'zhong' || event.source.identity == 'mingzhong');
                            },
                            content() {
                                game.over(game.me.identity == 'zhu' || game.me.identity == 'zhong' || game.me.identity == 'mingzhong');
                            },
                        },
                        主人: {
                            mode: ['identity'],
                            group: '主人3',
                            forced: true,
                            notarget: true,
                            charlotte: true,
                            trigger: {
                                global: 'gameStart',
                            },
                            filter(event, player) {
                                return player.identity == 'nei';
                            },
                            content() {
                                'step 0';
                                if (player.identity == 'nei') player.identity = 'fan';
                                if (player.identity == 'fan') player.setIdentity('fan');
                                ('step 1');
                                game.players.forEach((p) => {
                                    const { identity } = p;
                                    const identityMap = {
                                        zhu: 'zhu',
                                        zhong: 'zhong',
                                        fan: 'fan',
                                        nei: 'nei',
                                    };
                                    p.setIdentity(identityMap[identity]);
                                });
                            },
                        },
                        补天石: {
                            charlotte: true,
                            trigger: {
                                global: ['造人_1Begin', '造人_2Begin', 'dieBefore'],
                            },
                            forced: true,
                            mark: true,
                            init(player) {
                                player.storage.补天石 = 0;
                                game.addVideo('storage', player, ['补天石', player.storage.补天石]);
                            },
                            async content(event, trigger, player) {
                                //QQQ
                                player.storage.补天石 += 1;
                                game.addVideo('storage', player, ['补天石', player.storage.补天石]);
                            },
                            intro: {
                                name: '补天石',
                                content: '你拥有补天石#个',
                            },
                        },
                        补天: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                var list = [];
                                for (var i = 0; i < game.dead.length; i++) {
                                    list.push(game.dead[i].name);
                                }
                                return list.length && player.storage.补天石 > 1;
                            },
                            notarget: true,
                            charlotte: true,
                            //group:"补天石",
                            audio: 'ext:神魔乱舞/audio:1',
                            usable: 1,
                            content() {
                                'step 0';
                                var list = [];
                                for (var i = 0; i < game.dead.length; i++) {
                                    list.push(game.dead[i].name);
                                }
                                player.chooseButton(ui.create.dialog('选择1名角色复活', [list, 'character']), function (button) {
                                    for (var i = 0; i < game.dead.length && game.dead[i].name != button.link; i++);
                                    return get.attitude(_status.event.player, game.dead[i]);
                                });
                                ('step 1');
                                if (result.bool) {
                                    for (var i = 0; i < game.dead.length && game.dead[i].name != result.buttons[0].link; i++);
                                    var dead = game.dead[i];
                                    var num = player.countMark('补天石');
                                    player.removeMark('补天石', num);
                                    //同步标记(每当标记变动都要写这句)
                                    dead.maxHp = num;
                                    dead.revive(num);
                                    dead.draw(num);
                                    if (dead.name == '男人' && !dead.hasSkill('donggui2')) {
                                        dead.addSkill('donggui2');
                                    }
                                    if (dead.name == '女人' && !dead.hasSkill('donggui2')) {
                                        dead.addSkill('donggui2');
                                    }
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target: 1,
                                    player(player) {
                                        return 1;
                                    },
                                },
                            },
                        },
                        女战士: {
                            fixed: true,
                            charlotte: true,
                            forcedDie: true,
                            trigger: {
                                global: 'phaseBegin',
                            },
                            filter(event, player) {
                                return event.player != player && event.player.name != '女娲' && event.player.name != '男人';
                            },
                            content() {
                                player.say(['我来为女神陛下清理障碍', '巾帼不让须眉'].randomGet());
                                player.useCard(
                                    {
                                        name: 'sha',
                                    },
                                    trigger.player
                                );
                            },
                            group: ['女战士_1', '女战士_2', '女战士_3', '女战士_4', '女战士_5', '女战士_6'],
                            subSkill: {
                                1: {
                                    mod: {
                                        targetInRange(card, player, target) {
                                            return true;
                                        },
                                    },
                                },
                                2: {
                                    mod: {
                                        targetEnabled(card, player, target) {
                                            if (player != target) return false;
                                        },
                                    },
                                },
                                3: {
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    forced: true,
                                    fixed: true,
                                    charlotte: true,
                                    content() {
                                        player.loseHp();
                                    },
                                },
                                4: {
                                    trigger: {
                                        source: 'damageBefore',
                                    },
                                    forced: true,
                                    fixed: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return event.player.name == '女娲' || event.player.name == '男人';
                                    },
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                                5: {
                                    forced: true,
                                    charlotte: true,
                                    trigger: {
                                        player: 'dieBefore',
                                    },
                                    content() {
                                        game.countPlayer(function (current) {
                                            //场上所有玩家作用于当前玩家
                                            if (current.name == '女娲') {
                                                //如果当前玩家名字为女娲
                                                player.line(current, 'green'); //玩家跟当前玩家的指示线为绿色
                                                player.say(['女神陛下,我尽力了!😭', '剩下交给你了,伟大的创世女神🌹'].randomGet());
                                                current.draw(player.maxHp); //当前玩家回复一点体力
                                            }
                                        });
                                    },
                                },
                                6: {
                                    forced: true,
                                    charlotte: true,
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    content() {
                                        game.countPlayer(function (current) {
                                            //场上所有玩家作用于当前玩家
                                            if (current.name == '女娲') {
                                                //如果当前玩家名字为女娲
                                                player.line(current, 'green'); //玩家跟当前玩家的指示线为绿色
                                                // //记录显示技能替身事件目标
                                                current.changeHujia(1);
                                            }
                                        });
                                    },
                                },
                            },
                        },
                        男炮灰: {
                            trigger: {
                                global: 'damageBegin',
                            },
                            forced: true,
                            popup: false,
                            fixed: true,
                            charlotte: true,
                            filter(event, player) {
                                return event.player != player && event.player.name == '女娲';
                            },
                            content() {
                                player.say(['休伤我女神!😡', '有本事冲我来!🤬'].randomGet());
                                trigger.player = player;
                            },
                            group: ['男炮灰_1', '男炮灰_2', '男炮灰_3', '男炮灰_4'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageBefore',
                                    },
                                    forced: true,
                                    fixed: true,
                                    filter(event, player) {
                                        return event.player.name == '女娲';
                                    },
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                                2: {
                                    forced: true,
                                    charlotte: true,
                                    trigger: {
                                        player: 'dieBefore',
                                    },
                                    content() {
                                        game.countPlayer(function (current) {
                                            //场上所有玩家作用于当前玩家
                                            if (current.name == '女娲') {
                                                //如果当前玩家名字为女娲
                                                player.line(current, 'green'); //玩家跟当前玩家的指示线为绿色
                                                player.say(['女神陛下,我尽力了!😭', '剩下交给你了,伟大的创世女神🌹'].randomGet());
                                                current.gainMaxHp(player.maxHp); //当前玩家增加一点体力上限
                                                current.recover(player.maxHp); //当前玩家回复一点体力
                                            }
                                        });
                                    },
                                },
                                3: {
                                    mod: {
                                        targetInRange(card, player, target) {
                                            return true;
                                        },
                                        targetEnabled(card, player, target) {
                                            if (player != target) return false;
                                        },
                                    },
                                },
                                4: {
                                    forced: true,
                                    charlotte: true,
                                    forced: true,
                                    trigger: {
                                        player: 'damageBegin',
                                    },
                                    content() {
                                        game.countPlayer(function (current) {
                                            //场上所有玩家作用于当前玩家
                                            if (current.name == '女娲') {
                                                //如果当前玩家名字为女娲
                                                player.line(current, 'green'); //玩家跟当前玩家的指示线为绿色
                                                //记录显示技能替身事件目标
                                                current.draw();
                                            }
                                        });
                                    },
                                },
                            },
                        },
                        造人: {
                            forced: true,
                            charlotte: true,
                            audio: 'ext:神魔乱舞/audio:1',
                            group: ['造人_1', '造人_2'],
                            subSkill: {
                                1: {
                                    audio: 'ext:神魔乱舞/audio:1',
                                    enable: 'phaseUse',
                                    usable: 1,
                                    forced: true,
                                    charlotte: true,
                                    selectCard: [1, 4],
                                    filter(event, player) {
                                        //if(game.players.length>=8)return false;
                                        return !player.storage.造人_1 && player.countCards('h');
                                        return true;
                                    },
                                    filterCard(card) {
                                        for (var i = 0; i < ui.selected.cards.length; i++) {
                                            if (ui.selected.cards[i].suit == card.suit) return false;
                                        }
                                        return true;
                                    },
                                    complexSelect: true,
                                    complexCard: true,
                                    line: {
                                        color: [239, 204, 96],
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.造人_1 = true;
                                        player.say(['泥人,复活吧!我给装个❤️', '从现在起,我赋予你生命.😎'].randomGet());
                                        ('step 1');
                                        var num = cards.length;
                                        var fellow = game.addPlayer(1, '男人');
                                        fellow.getId();
                                        if (lib.config.mode == 'guozhan') {
                                            fellow.addSkill('donggui2');
                                            fellow.identity = player.identity;
                                            fellow.setIdentity(player.identity);
                                            fellow.draw(num);
                                            fellow.maxHp = num;
                                            fellow.recover(num);
                                        } else if (lib.config.mode == 'doudizhu') {
                                            fellow.side = player.side;
                                            fellow.identity = player.identity;
                                            fellow.setIdentity(fellow.identity);
                                            fellow.draw(num);
                                            fellow.maxHp = num;
                                            fellow.recover(num);
                                        } else if (lib.config.mode == 'identity') {
                                            var identityMap = {
                                                fan: { identity: 'fan' },
                                                zhong: { identity: 'zhong' },
                                                zhu: { identity: 'zhong' },
                                            };
                                            fellow.identity = identityMap[player.identity].identity;
                                            fellow.side = player.side;
                                            fellow.setIdentity(fellow.identity);
                                            fellow.draw(num);
                                            fellow.maxHp = num;
                                            fellow.recover(num);
                                            fellow.node.identity.dataset.color = fellow.identity;
                                        } else {
                                            fellow.identity = player.identity;
                                            fellow.side = player.side;
                                            fellow.setIdentity('召唤物');
                                            fellow.draw(num);
                                            fellow.maxHp = num;
                                            fellow.recover(num);
                                            fellow.node.identity.dataset.color = fellow.identity;
                                        }
                                    },
                                    ai: {
                                        order: 10,
                                        result: {
                                            player: 1,
                                        },
                                    },
                                    //主动技ai,发动优先度为5(可自改,一般为1-10),ai只会选择敌人(如果把-1改成1,则变成只会选择队友或自己) ,如果把target改成player并且-1改成1,那么就会变成只对自己使用
                                },
                                2: {
                                    audio: 'ext:神魔乱舞/audio:1',
                                    _priority: 9,
                                    charlotte: true,
                                    trigger: {
                                        global: 'dieEnd',
                                    },
                                    filter(event, player) {
                                        //if(game.players.length>=8)return false;
                                        return !player.storage.造人_2 && player.maxHp > 1;
                                        return true;
                                    },
                                    prompt2: '是否减少一半体力上限制造一个女人',
                                    content() {
                                        'step 0';
                                        player.storage.造人_2 = true;
                                        player.say(['孤独的泥人,我给造个伴!👰', '我亲爱的孩子,从现在起,你不会在孤独.🙆'].randomGet());
                                        ('step 1');
                                        var num = Math.ceil(player.maxHp / 2);
                                        player.loseMaxHp(num);
                                        var pos = 10;
                                        var fellow = game.addPlayer(pos, '女人');
                                        fellow.getId();
                                        if (lib.config.mode == 'guozhan') {
                                            fellow._group = player.identity;
                                            fellow.addSkill('donggui2');
                                            fellow.setIdentity(player.identity);
                                            fellow.draw(num);
                                            fellow.maxHp = num;
                                            fellow.recover(num);
                                        } else if (lib.config.mode == 'doudizhu') {
                                            fellow.side = player.side;
                                            fellow.identity = player.identity;
                                            fellow.setIdentity(fellow.identity);
                                            fellow.draw(num);
                                            fellow.maxHp = num;
                                            fellow.recover(num);
                                        } else if (lib.config.mode == 'identity') {
                                            var identityMap = {
                                                fan: { identity: 'fan' },
                                                zhong: { identity: 'zhong' },
                                                zhu: { identity: 'zhong' },
                                            };
                                            fellow.identity = identityMap[player.identity].identity;
                                            fellow.side = player.side;
                                            fellow.setIdentity(fellow.identity);
                                            fellow.draw(num);
                                            fellow.maxHp = num;
                                            fellow.recover(num);
                                            fellow.node.identity.dataset.color = fellow.identity;
                                        } else {
                                            fellow.identity = player.identity;
                                            fellow.side = player.side;
                                            fellow.setIdentity('召唤物');
                                            fellow.draw(num);
                                            fellow.maxHp = num;
                                            fellow.recover(num);
                                            fellow.node.identity.dataset.color = fellow.identity;
                                        }
                                    },
                                    ai: {
                                        order: 10,
                                        result: {
                                            target: 1,
                                        },
                                    },
                                    //主动技ai,发动优先度为5(可自改,一般为1-10),ai只会选择敌人(如果把-1改成1,则变成只会选择队友或自己) ,如果把target改成player并且-1改成1,那么就会变成只对自己使用
                                },
                            },
                        },
                        富豪: {
                            forced: true,
                            charlotte: true,
                            usable: true,
                            trigger: {
                                player: 'changeHp',
                            },
                            filter(event, player) {
                                return player.hp <= 0;
                            },
                            content() {
                                //内容:
                                'step 0';
                                player.awakenSkill('富豪');
                                if (player.isDisabled(2)) {
                                    player.enableEquip(2);
                                }
                                if (player.isEmpty(2) || !player.getEquip('反应炉')) {
                                    var card = game.createCard('反应炉'); //创造出一张牌
                                    player.equip(card);
                                    event.finish;
                                } else if (player.getEquip('反应炉')) {
                                    event.goto(1);
                                }
                                ('step 1'); //第0步(必须从0开始
                                player.chooseTarget('选择一名玩家摸牌——取消:回复一点体力'); //你可以选择一个目标
                                ('step 2');
                                if (result.bool) {
                                    //如果选了目标(没取消)
                                    result.targets[0].draw(Math.ceil(game.players.length)); //(选的第一个)目标摸x张牌
                                } else player.recover();
                            },
                        },
                        剑界: {
                            nobracket: true,
                            trigger: {
                                player: 'discardAfter',
                            },
                            filter(event, player) {
                                if (event.cards && event.cards.length && event.getParent(2).name == 'phaseDiscard') {
                                    if (Array.isArray(event.cards))
                                        for (var i of event.cards) {
                                            //QQ
                                            if (get.position(i) == 'd') {
                                                return true;
                                            }
                                        }
                                    return false;
                                }
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.num = trigger.cards.length;
                                ('step 1');
                                event.num--;
                                if (!player.getEquip(2)) {
                                    var equip = get.cardPile(function (card) {
                                        if (get.subtype(card) == 'equip2') {
                                            return !player.isDisabled(get.subtype(card));
                                        }
                                        return false;
                                    });
                                    if (equip) {
                                        player.chooseUseTarget(equip, true, 'nopopup');
                                    }
                                } else {
                                    var list = [];
                                    for (var i = 1; i <= 5; i++) {
                                        if (!player.getEquip(i)) {
                                            var name = get.inpile('equip' + i).randomGet();
                                            if (name) {
                                                var card = game.createCard(name);
                                                list.push(card);
                                                player.equip(card);
                                            }
                                            break;
                                        }
                                        if (list.length) {
                                            player.$draw(list);
                                        }
                                    }
                                }
                                ('step 2');
                                if (event.num > 0) {
                                    event.goto(1);
                                } else event.finish();
                            },
                        },
                        剑风: {
                            audio: 'ext:神魔乱舞/audio:2',
                            trigger: {
                                source: 'damageBegin',
                            },
                            _priority: 50,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.player.countCards('he') > 0;
                            },
                            content() {
                                trigger.unhurt = true;
                                trigger.cancel();
                                player.gainPlayerCard(trigger.player, 'he', 2, true);
                            },
                        },
                        剑魂: {
                            trigger: {
                                global: 'dieBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hp > 0;
                            },
                            content() {
                                player.gainMaxHp(1);
                                player.recover(1);
                            },
                        },
                        剑神: {
                            nobracket: true,
                            trigger: {
                                player: 'shaMiss',
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                player.addTempSkill('剑神1', {
                                    player: 'phaseBefore',
                                });
                                game.log(player, '进入无敌状态');
                            },
                            group: '剑魂',
                        },
                        剑神1: {
                            marktext: '神',
                            mark: true,
                            intro: {
                                content: '处于无敌状态',
                            },
                            nobracket: true,
                            trigger: {
                                player: ['damageBefore', 'loseHpBefore', 'loseMaxHpBefore', 'turnOverBegin', 'linkBefore'],
                                target: 'useCardToBefore',
                            },
                            filter(event, player) {
                                if (event.target && event.target == player && event.player == player) return false;
                                return true;
                            },
                            forced: true,
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                                game.log(player, '处于无敌中免疫卡牌效果/伤害/流失体力/失去体力上限/翻面/横置');
                            },
                        },
                        破竹: {
                            group: ['剑界', '封喉后'],
                            audio: 'ext:神魔乱舞/audio:2',
                            enable: 'phaseUse',
                            usable: 'true',
                            prompt: '选择一名角色令其获取一张杀并令其出杀次数永久加1且出杀距离无限',
                            filterTarget(card, player, target) {
                                return true;
                            },
                            check(card) {
                                return get.type(card) === 'equip';
                            },
                            position: 'he',
                            selectTarget: 1,
                            filterCard(card) {
                                return get.type(card) === 'equip';
                            },
                            filter(event, player) {
                                return (
                                    player.countCards('he', {
                                        type: 'equip',
                                    }) > 0
                                );
                            },
                            content() {
                                target.addSkill('yjian');
                                target.storage.yjian++;
                                target.gain(game.createCard('sha'), 'gain2');
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 1.6,
                                order: 11,
                                usable: 'true',
                                result: {
                                    target(player, target) {
                                        if (player.countCards('he') > 0) return 2;
                                    },
                                    player(player) {
                                        if (player.countCards('he') > 0) return 2;
                                    },
                                },
                            },
                        },
                        yjian: {
                            mark: true,
                            marktext: '破竹',
                            intro: {
                                name: '破竹',
                                content: '你的【杀】无视距离限制且你的出【杀】量永久+#',
                            },
                            init(player) {
                                let ckk = player.storage.yjian;
                                if (!ckk) {
                                    player.storage.yjian = 0;
                                }
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + player.storage.yjian;
                                },
                                targetInRange(card, player, target) {
                                    if (card.name == 'sha') return true;
                                },
                            },
                        },
                        封喉: {
                            shaRelated: true,
                            audio: 'ext:神魔乱舞/audio:2',
                            trigger: {
                                //player: "useCardToBegin",
                                // player: ["shaBegin","shaBefore"],
                                player: 'shaBefore',
                            },
                            filter(event, player) {
                                //  return event.card && event.card.name == 'sha'&&event.card.nature!="GXS_darkness";
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                /*for(var i=0;i<game.players.length;i++){
                                 if(i!=player){
                                 var target=i
                                 for (var j = 0; j < target.skills.length; j++) {
                                         var skill = lib.skill[target.skills[j]];
                                         if (skill.content && typeof skill.content === 'function' &&
                                             (skill.content.toString().includes("trigger.cancel") ||
                                              skill.content.toString().includes("trigger.finish") ||
                                              skill.content.toString().includes("trigger.untrigger")||
                                                 skill.content.toString().includes("game.over"))
                                             ) {
                                             // 在这里执行对应的操作,比如添加或修改 filter 方法
                                             if (skill.filter && typeof skill.filter === 'function') {
                                                 skill.filter = function(event, player) {
                                                     return false; // 返回false表示不允许触发该技能
                                                 };
                                             } else {
                                                 skill.filter = function(event, player) {
                                                     return false; // 返回false表示不允许触发该技能
                                                 };
                                             }
                                         }
                                     }
                                 }
                                 }*/
                                if (!player.storage.目标) {
                                    player.storage.目标 = trigger.target;
                                }
                                var e2 = trigger.target.getEquip(2); //定义一个变量e2代表获取玩家的装备区的防具;
                                if (trigger.target.getEquip(2) && e2.name != 'bagua') {
                                    trigger.target.addTempSkill('qinggang2');
                                }
                                if (trigger.target.hasSkill('一剑封喉')) {
                                    trigger.target.storage.一剑封喉++;
                                    player.storage.一剑封喉++;
                                } else {
                                    for (var i of game.players) {
                                        //QQ
                                        if (i.hasSkill('一剑封喉')) {
                                            i.removeSkill('一剑封喉');
                                        }
                                    }
                                    delete player.storage.一剑封喉;
                                    delete trigger.target.storage.一剑封喉;
                                    event.goto(3);
                                }
                                ('step 3');
                                if (!trigger.target.hasSkill('一剑封喉')) {
                                    trigger.target.addSkill('一剑封喉');
                                    trigger.target.storage.一剑封喉++;
                                    player.storage.一剑封喉++;
                                    event.finish();
                                }
                                ('step 1');
                                if (trigger.target.storage.一剑封喉 > 3) {
                                    var target = trigger.target;
                                    if (!player.storage.目标) {
                                        player.storage.目标 = trigger.target;
                                    }
                                    for (var j = 0; j < target.skills.length; j++) {
                                        var skill = lib.skill[target.skills[j]];
                                        if (skill.trigger && typeof skill.trigger === 'object' && (skill.trigger.player === 'dieBefore' || (Array.isArray(skill.trigger.player) && skill.trigger.player.some((trigger) => trigger.includes('die')))) && skill.content && typeof skill.content === 'function' && (skill.content.toString().includes('trigger.cancel') || skill.content.toString().includes('trigger.finish') || skill.content.toString().includes('trigger.untrigger') || skill.content.toString().includes('game.over'))) {
                                            // 在这里执行对应的操作,比如添加或修改 filter 方法
                                            if (!target.storage.状态) {
                                                target.storage.状态 = skill.filter;
                                            }
                                            game.log(target.storage.状态);
                                            if (skill.filter && typeof skill.filter === 'function') {
                                                skill.filter = function (event, player) {
                                                    return false; // 返回false表示不允许触发该技能
                                                };
                                            } else {
                                                skill.filter = function (event, player) {
                                                    return false; // 返回false表示不允许触发该技能
                                                };
                                            }
                                        }
                                    }
                                    trigger.target.removeSkill('一剑封喉');
                                    game.restoreOriginalDie(trigger.target);
                                    game.log(player.die);
                                    delete trigger.target.storage.一剑封喉;
                                    delete player.storage.一剑封喉;
                                    trigger.target.die().source = player;
                                    event.finish();
                                }
                            },
                        },
                        一剑封喉: {
                            unmarkSkill: true,
                            marktext: '一剑',
                            intro: {
                                name: '一剑封喉',
                                content: '你现在有#个标记!若标记等于4,你阵亡!',
                            },
                            init(player) {
                                let ckk = player.storage.一剑封喉;
                                if (!ckk) {
                                    player.storage.一剑封喉 = 0;
                                }
                            },
                        },
                        封喉后: {
                            trigger: {
                                player: '封喉After',
                            },
                            forced: true,
                            filter(event, player) {
                                var target = player.storage.目标;
                                return !target.storage.一剑封喉;
                            },
                            content() {
                                'step 0';
                                var target = player.storage.目标;
                                for (var j = 0; j < target.skills.length; j++) {
                                    var skill = lib.skill[target.skills[j]];
                                    if (skill.trigger && typeof skill.trigger === 'object' && (skill.trigger.player === 'dieBefore' || (Array.isArray(skill.trigger.player) && skill.trigger.player.some((trigger) => trigger.includes('die')))) && skill.content && typeof skill.content === 'function' && (skill.content.toString().includes('trigger.cancel') || skill.content.toString().includes('trigger.finish') || skill.content.toString().includes('trigger.untrigger') || skill.content.toString().includes('game.over'))) {
                                        // 在这里执行对应的操作,比如添加或修改 filter 方法
                                        if (skill.filter && typeof skill.filter === 'function') {
                                            skill.filter = target.storage.状态;
                                        } else {
                                            skill.filter = function (event, player) {
                                                return true; // 返回false表示不允许触发该技能
                                            };
                                        }
                                    }
                                }
                                ('step 1');
                                delete player.storage.目标;
                            },
                        },
                        'game.shenmo': {
                            audio: 'ext:神魔乱舞/audio:1',
                            nobracket: true,
                            usable: 1,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return (
                                    player.countCards('h', {
                                        type: 'basic',
                                    }) > 0 && player.countCards('h', 'sha') > 0
                                );
                            },
                            filterCard(card) {
                                return get.type(card) == 'basic' && card.name == 'sha';
                            },
                            check(card) {
                                return 8 - get.value(card);
                            },
                            selectCard: 1,
                            content() {
                                'step 0';
                                player.say('所有恩怨从此了段!');
                                event.current = player.next;
                                event.targets = game
                                    .filterPlayer(function (current) {
                                        return current.isAlive();
                                    })
                                    .sortBySeat();
                                ('step 1');
                                if (event.targets.length) {
                                    var target = event.targets.randomGet();
                                    event.current.line(target, 'fire');
                                    game.swapSeat(event.current, target);
                                    if (player.getEnemies().includes(target)) {
                                        target.damage(event.current);
                                    }
                                }
                                ('step 2');
                                if (event.current.next != player) {
                                    event.current = event.current.next;
                                    event.goto(1);
                                }
                            },
                            ai: {
                                order: 10,
                                threaten: 2,
                                result: {
                                    player(player) {
                                        return game.countPlayer(function (current) {
                                            if (current != player) {
                                                return get.sgn(get.damageEffect(current, player, player));
                                            }
                                        });
                                    },
                                },
                            },
                        },
                        墨剑: {
                            audio: 'ext:神魔乱舞/audio:1',
                            nobracket: true,
                            usable: 1,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return (
                                    player.countCards('h', {
                                        type: 'basic',
                                    }) > 0 && player.countCards('h', 'sha') > 0
                                );
                            },
                            filterCard(card) {
                                return get.type(card) == 'basic' && card.name == 'sha';
                            },
                            check(card) {
                                return 8 - get.value(card);
                            },
                            selectCard: 1,
                            content() {
                                'step 0';
                                player.say('所有恩怨从此了段!');
                                event.current = player.next;
                                event.targets = game
                                    .filterPlayer(function (current) {
                                        return current.isAlive();
                                    })
                                    .sortBySeat();
                                ('step 1');
                                if (event.targets.length) {
                                    var target = event.targets.randomGet();
                                    event.current.line(target, 'fire');
                                    game.swapSeat(event.current, target);
                                    if (player.getEnemies().includes(target)) {
                                        target.damage(event.current);
                                    }
                                }
                                ('step 2');
                                if (event.current.next != player) {
                                    event.current = event.current.next;
                                    event.goto(1);
                                }
                            },
                            ai: {
                                order: 10,
                                threaten: 2,
                                result: {
                                    player(player) {
                                        return game.countPlayer(function (current) {
                                            if (current != player) {
                                                return get.sgn(get.damageEffect(current, player, player));
                                            }
                                        });
                                    },
                                },
                            },
                        },
                        手套: {
                            limited: true,
                            forced: true,
                            mark: true,
                            marktext: '手套',
                            trigger: {
                                global: ['chooseToUseBefore', 'gameStart', 'chooseButtonBefore', 'chooseControlBefore'],
                            },
                            intro: {
                                name: '手套',
                                content: '当你集齐6颗无限宝石(技能)时你觉醒为无限灭霸.',
                            },
                            filter(event, player) {
                                //发动限制条件
                                return player.hasSkill('时间') && player.hasSkill('空间') && player.hasSkill('力量') && player.hasSkill('心灵') && player.hasSkill('灵魂') && player.hasSkill('现实');
                            },
                            content() {
                                //内容:
                                player.clearSkills();
                                player.reinit('灭霸', '无限灭霸');
                                player.gainMaxHp(6);
                                player.recover(6);
                                player.phase('nodelay');
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        时间: {
                            nobracket: true,
                            trigger: {
                                global: 'damageEnd',
                            },
                            //  forced: true,
                            check(event, player) {
                                return get.attitude(player, event.player) > 1;
                            },
                            filter(event, player) {
                                return event.player.isDamaged() && !event.player.isDead();
                            },
                            prompt: '是否令该角色回复到受伤前状态并令其弃置当前伤害数量相同的牌？',
                            content() {
                                'step 0';
                                /*player.chooseControl('回复', '取消').set('prompt', get.prompt('时间')).set('choiceList', [
                                     '令' + get.translation(trigger.player) + '调整体力值至受伤前', '取消'
                                 ]);
                                 'step 1'
                                 game.log(player, '选择了' + get.translation(result.control));
                                 player.popup(result.control);
                                                           'step 2'
                                 if (result.control == '回复') {*/
                                trigger.player.hp = trigger.player.hp + trigger.num;
                                trigger.player.update();
                                if (trigger.player.countCards('he') >= trigger.num) {
                                    trigger.player.chooseToDiscard(trigger.num, true);
                                } else {
                                    trigger.player.loseHp();
                                    //  event.finish();
                                }
                                // }
                            },
                            ai: {
                                order: 5,
                                result: {
                                    target: 1,
                                },
                            },
                            //主动技ai,发动优先度为5(可自改,一般为1-10),ai只会选择敌人(如果把-1改成1,则变成只会选择队友或自己) ,如果把target改成player并且-1改成1,那么就会变成只对自己使用
                        },
                        现实: {
                            nobracket: true,
                            forced: true,
                            trigger: {
                                global: 'judge',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                player.chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',是否发动【现实】？', 'he').ai = function (card) {
                                    var trigger = _status.event.parent._trigger;
                                    var player = _status.event.player;
                                    var result = trigger.judge(card) - trigger.judge(trigger.player.judging[0]);
                                    var attitude = get.attitude(player, trigger.player);
                                    if (attitude == 0 || result == 0) return 0;
                                    if (attitude > 0) {
                                        return result;
                                    } else {
                                        return -result;
                                    }
                                };
                                ('step 2');
                                if (result.bool) {
                                    player.respond(result.cards, 'highlight');
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (result.bool) {
                                    player.$gain2(trigger.player.judging[0]);
                                    player.gain(trigger.player.judging[0]);
                                    trigger.player.judging[0] = result.cards[0];
                                    trigger.position.appendChild(result.cards[0]);
                                    game.log(trigger.player, '的判定牌改为', result.cards[0]);
                                }
                                ('step 4');
                            },
                            ai: {
                                tag: {
                                    rejudge: 1,
                                },
                                threaten: 2,
                            },
                        },
                        心灵: {
                            enable: 'phaseUse',
                            forced: true,
                            usable: 1,
                            selectTarget: 1,
                            filterTarget: true,
                            check(event, player) {
                                return player.hp >= 3;
                            }, //给ai看的,选择价值7的牌
                            filter(event, player) {
                                //发动限制条件
                                return player.countCards('h'); //你有手牌时才能发动
                            },
                            content() {
                                //内容:
                                player.loseHp();
                                target.addTempSkill('mad', {
                                    player: 'phaseEnd',
                                });
                                // player.swapHandcards(target);
                            },
                            ai: {
                                order: 5,
                                result: {
                                    target: -1,
                                },
                            },
                            //主动技ai,发动优先度为5(可自改,一般为1-10),ai只会选择敌人(如果把-1改成1,则变成只会选择队友或自己) ,如果把target改成player并且-1改成1,那么就会变成只对自己使用
                        },
                        力量: {
                            forced: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            content() {
                                //内容
                                'step 0';
                                trigger.cancel();
                                if (trigger.player.hp < trigger.player.maxHp) {
                                    trigger.player.maxHp = trigger.player.hp;
                                    trigger.player.update();
                                } else {
                                    var num = trigger.num;
                                    if (trigger.player.maxHp <= 1) {
                                        num = 1;
                                    }
                                    trigger.player.loseMaxHp(num).source = player;
                                }
                            },
                        },
                        宝石: {
                            _priority: 999,
                            group: ['宝石_1', '宝石_2', '宝石_3', '宝石_4', '宝石_5', '宝石_6'],
                            subSkill: {
                                1: {
                                    imited: true,
                                    forced: true,
                                    trigger: {
                                        player: 'shaMiss',
                                    },
                                    content() {
                                        //内容:
                                        player.addSkill('力量');
                                        player.awakenSkill('宝石_1');
                                    },
                                },
                                2: {
                                    imited: true,
                                    forced: true,
                                    trigger: {
                                        global: 'dyingBegin',
                                    },
                                    content() {
                                        //内容:
                                        player.addSkill('心灵');
                                        player.awakenSkill('宝石_2');
                                    },
                                },
                                3: {
                                    imited: true,
                                    forced: true,
                                    trigger: {
                                        player: 'loseHpBegin',
                                    },
                                    content() {
                                        //内容:
                                        player.addSkill('现实');
                                        player.awakenSkill('宝石_3');
                                    },
                                },
                                4: {
                                    imited: true,
                                    forced: true,
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    content() {
                                        //内容:
                                        player.addSkill('时间');
                                        player.awakenSkill('宝石_4');
                                    },
                                },
                                5: {
                                    imited: true,
                                    forced: true,
                                    trigger: {
                                        source: 'loseMaxHpEnd',
                                    },
                                    content() {
                                        //内容:
                                        player.addSkill('空间');
                                        player.awakenSkill('宝石_5');
                                    },
                                },
                                6: {
                                    imited: true,
                                    forced: true,
                                    trigger: {
                                        source: 'dieEnd',
                                    },
                                    content() {
                                        //内容:
                                        player.addSkill('灵魂');
                                        player.awakenSkill('宝石_6');
                                    },
                                },
                            },
                        },
                        灵魂: {
                            enable: 'phaseUse',
                            usable: 1,
                            check(event, player) {
                                return player.maxHp >= 3;
                            }, //给ai看的,选择价值7的H
                            filter(event, player) {
                                var list = [];
                                for (var i = 0; i < game.dead.length; i++) {
                                    list.push(game.dead[i].name);
                                }
                                return list.length;
                            },
                            content() {
                                'step 0';
                                player.loseMaxHp();
                                var list = [];
                                for (var i = 0; i < game.dead.length; i++) {
                                    list.push(game.dead[i].name);
                                }
                                player.chooseButton(ui.create.dialog('选择一名已死亡的角色使灵魂继续存活,其摸一张牌并将其体力上限改为1.', [list, 'character']), function (button) {
                                    for (var i = 0; i < game.dead.length && game.dead[i].name != button.link; i++);
                                    return get.attitude(_status.event.player, game.dead[i]);
                                });
                                ('step 1');
                                if (result.bool) {
                                    for (var i = 0; i < game.dead.length && game.dead[i].name != result.buttons[0].link; i++);
                                    var dead = game.dead[i];
                                    dead.maxHp = 1;
                                    dead.revive(1);
                                    dead.draw(1);
                                    dead.classList.add('likedead'); //
                                }
                            },
                            ai: {
                                order: 7,
                                result: {
                                    target: 1,
                                    player(player) {
                                        return 1;
                                    },
                                },
                            },
                        },
                        空间: {
                            enable: 'phaseUse',
                            usable: 1,
                            selectCard: 1,
                            filterCard: true,
                            position: 'h',
                            selectTarget: 1,
                            filterTarget: true,
                            filter(event, player) {
                                //发动限制条件
                                return player.countCards('h'); //你有手牌时才能发动
                            },
                            content() {
                                target.out(1);
                            },
                            ai: {
                                order: 5,
                                result: {
                                    target: -1,
                                },
                            },
                            //主动技ai,发动优先度为5(可自改,一般为1-10),ai只会选择敌人(如果把-1改成1,则变成只会选择队友或自己) ,如果把target改成player并且-1改成1,那么就会变成只对自己使用
                        },
                        响指: {
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: -1,
                            line: true,
                            filter(event, player) {
                                //发动条件,返回true则可以发动此技能
                                return player.maxHp > 1; //玩家体力上限大于1时可以发动
                            },
                            content() {
                                'step 0'; //第0步
                                game.mp47('xz');
                                game.playyi('xz1');
                                player.loseMaxHp(Math.ceil(player.maxHp / 2)); //玩家减少当前体力上限÷2的体力上限,向上取整.
                                ('step 1');
                                //var list = game.players;//游戏所有玩家包括自己
                                var list = game.filterPlayer((current) => current != player); //不包括自己
                                var targets = []; //目标为？？
                                for (var i = 0; i < Math.floor(list.length / 2) /*向下取整,Math.ceil是向上取整*/;) {
                                    var target = list.randomGet(); //目标为所有玩家的随机值.
                                    if (!targets.includes(target)) {
                                        targets.push(target);
                                        i++;
                                    }
                                }
                                while (targets.length) {
                                    targets.shift().die();
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target: -1,
                                },
                            },
                            //主动技ai,发动优先度为5(可自改,一般为1-10),ai只会选择敌人(如果把-1改成1,则变成只会选择队友或自己) ,如果把target改成player并且-1改成1,那么就会变成只对自己使用
                        },
                        封神: {
                            audio: 'ext:神魔乱舞/audio:1',
                            trigger: {
                                global: ['dyingBegin'],
                            },
                            forced: true,
                            limited: true,
                            mark: true,
                            intro: {
                                content: '其他的角色进入濒死时,你随机获得1-3个随机技能,你的回合结束后清除.',
                            },
                            filter(event, player) {
                                //发动限制条件
                                return event.player != player; //事件玩家不是玩家
                            },
                            content() {
                                //内容:
                                if (player.name == '姜子牙') {
                                    game.playyi('cs1');
                                    game.mp47('cs');
                                } else {
                                    game.playyi('cs2');
                                    game.mp47('cs2');
                                }
                                var list = Object.keys(lib.character),
                                    skillsx = [];
                                for (var i = 0; i < list.length; i++) {
                                    var skills = lib.character[list[i]][3].slice(0);
                                    for (var j = 0; j < skills.length; j++) {
                                        if (!lib.translate[skills[j] + '_info']) continue;
                                        if (player.skills.includes(skills[j])) continue;
                                        skillsx.push(skills[j]);
                                    }
                                }
                                var num = Math.floor(Math.random() * 4);
                                if (num > 3) num = 3;
                                if (num < 1) num = 1;
                                var skills2 = skillsx.randomGets(num);
                                player.reinit('姜子牙', '神姜子牙');
                                if (skills2) {
                                    for (var i = 0; i < skills2.length; i++) {
                                        player.addTempSkill(skills2[i], {
                                            player: 'phaseAfter',
                                        });
                                    }
                                }
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        回元: {
                            trigger: {
                                player: 'phaseAfter',
                            },
                            limited: true,
                            forced: true,
                            mark: true,
                            intro: {
                                content: '当前回合结束后,你变回姜子牙,下回合你跳过弃牌阶段.',
                            },
                            content() {
                                player.skip('phaseDiscard');
                                player.reinit('神姜子牙', '姜子牙');
                            },
                        },
                        虚体: {
                            audio: 'ext:神魔乱舞/audio:1',
                            trigger: {
                                player: ['damageBegin'],
                                global: ['gameStart'],
                            },//QQQ
                            forced: true,
                            _priority: 50,
                            content() {
                                var num = Math.floor(Math.random() * 101); // 生成0到100之间的随机整数
                                if (Math.random() <= 0.05) {
                                    // 5%的概率
                                    if (num < 1) num = 1; // 确保num至少为1
                                    if (num > 100) num = 100; // 确保num不超过100
                                    player.maxHp = num; // 设置玩家的最大生命值
                                    player.recover(num); // 玩家回复生命值
                                    player.update(); // 更新玩家状态
                                }
                            },
                        },
                        武圣: {
                            group: '单骑',
                            audio: 'ext:神魔乱舞/audio:1',
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard(card, player) {
                                if (get.zhu(player, 'shouyue')) return true;
                                return get.color(card) == 'red';
                            },
                            position: 'hes',
                            viewAs: {
                                name: 'sha',
                            },
                            viewAsFilter(player) {
                                if (get.zhu(player, 'shouyue')) {
                                    if (!player.countCards('hes')) return false;
                                } else {
                                    if (
                                        !player.countCards('hes', {
                                            color: 'red',
                                        })
                                    )
                                        return false;
                                }
                            },
                            prompt: '将一张红色牌当杀使用或打出',
                            check(card) {
                                var val = get.value(card);
                                if (_status.event.name == 'chooseToRespond') return 1 / Math.max(0.1, val);
                                return 5 - val;
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (get.zhu(player, 'shouyue')) {
                                        if (!player.countCards('hes')) return false;
                                    } else {
                                        if (
                                            !player.countCards('hes', {
                                                color: 'red',
                                            })
                                        )
                                            return false;
                                    }
                                },
                            },
                        },
                        补刀: {
                            audio: 'ext:神魔乱舞/audio:2',
                            trigger: {
                                global: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (
                                    _status.currentPhase != player &&
                                    event.card &&
                                    event.card.name == 'sha' &&
                                    (event.player != player ||
                                        (player.inRange(event.player) &&
                                            player.canUse(
                                                {
                                                    name: 'sha',
                                                },
                                                event.player
                                            ))) &&
                                    event.player.isAlive() &&
                                    (player.countCards('h', {
                                        color: 'red',
                                    }) > 0 ||
                                        player.countCards('h', {
                                            name: 'sha',
                                        }) > 0)
                                )
                                    return true;
                                return false;
                            },
                            content() {
                                player
                                    .chooseToUse(
                                        function (card, player, event) {
                                            if (card.name != 'sha') return false;
                                            return lib.filter.filterCard.apply(this, arguments);
                                        },
                                        '补刀:是否对' + get.translation(trigger.player) + '使用一张杀？'
                                    )
                                    .set('complexSelect', true)
                                    .set('filterTarget', function (card, player, target) {
                                        if (target == player) return false;
                                        if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                                        return lib.filter.targetEnabled.apply(this, arguments);
                                    })
                                    .set('sourcex', trigger.player);
                            },
                            ai: {
                                order: 8,
                                result: {
                                    target: -1,
                                },
                            },
                            //主动技ai,发动优先度为5(可自改,一般为1-10),ai只会选择敌人(如果把-1改成1,则变成只会选择队友或自己) ,如果把target改成player并且-1改成1,那么就会变成只对自己使用
                        },
                        结义3: {
                            trigger: {
                                player: ['phaseBegin', 'dieBegin'],
                            },
                            silent: true,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current.hasSkill('结义2');
                                });
                            },
                            content() {
                                for (var i of game.players) {
                                    //QQ
                                    if (i.hasSkill('结义2')) {
                                        i.removeSkill('结义2');
                                    }
                                }
                            },
                            forced: true,
                            popup: false,
                        },
                        结义: {
                            audio: 'ext:神魔乱舞/audio:2',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            _priority: 15,
                            group: '结义3',
                            filter(event, player) {
                                return game.players.length > 1;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('选择【结义】的目标', lib.translate.结义_info, true, function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        if (get.attitude(player, target) > 0) return true;
                                        return 0;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.line(target, 'green');
                                    game.log(target, '成为了', '【结义】', '的目标');
                                    target.storage.结义2 = player;
                                    target.addSkill('结义2');
                                    if (target.countCards('h') > 0) {
                                        player.gainPlayerCard('h', true, target, target.countCards('h'));
                                    }
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                expose: 0.5,
                                threaten: 0.5,
                            },
                        },
                        结义2: {
                            audio: 'ext:神魔乱舞/audio:2',
                            intro: {
                                content: '当你成为卡牌目标时,改成$成为目标',
                            },
                            nopop: true,
                            _priority: 15,
                            trigger: {
                                target: 'useCardToTarget',
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return player.isAlive() && event.player != player && event.target == player;
                            },
                            content() {
                                var target = player.storage.结义2;
                                trigger.player.line(target, 'green');
                                trigger.targets.remove(player);
                                trigger.targets.push(target);
                                trigger.target = target;
                            },
                        },
                        赴会: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            _priority: 11,
                            filter(event, player) {
                                return (
                                    player.countCards('h', {
                                        color: 'red',
                                    }) > 0 ||
                                    player.countCards('h', {
                                        name: 'sha',
                                    }) > 0
                                );
                                //  return event.card && event.card.name=='sha'||event.card.name=='juedou';
                            },
                            content() {
                                player.addTempSkill('赴会2', 'shaAfter');
                                player.chooseToUse(
                                    {
                                        name: 'sha',
                                    },
                                    trigger.source,
                                    '赴会:是否对' + get.translation(trigger.source) + '使用一张杀？'
                                );
                            },
                        },
                        赴会2: {
                            audio: 'ext:神魔乱舞/audio:2',
                            _priority: 1,
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && get.color(event.card) == 'red';
                            },
                            content() {
                                trigger.directHit = true;
                            },
                        },
                        单骑: {
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 1; //mod锁定技你与其他玩家的攻击距离永久减-1
                                },
                            },
                            forced: true,
                            trigger: {
                                player: 'shaBegin',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && get.color(event.card) == 'red';
                            },
                            content() {
                                //内容:
                                player.draw(); //你可以摸一张牌
                            },
                        },
                    },
                    translate: {
                        kof拳皇: "<span style='animation:rainbowShen 5s infinite;-webkit-animation:rainbowShen 5s infinite;'>KOF</span>",
                        diy群友: "<span style='animation:rainbowShen 5s infinite;-webkit-animation:rainbowShen 5s infinite;'>DIY群友</span>",
                        夜下降生: "<span style='animation:rainbowShen 10s infinite;-webkit-animation:rainbowShen 10s infinite;'>月下降生</span>",
                        月姬: "<span style='animation:rainbowShen 11s infinite;-webkit-animation:rainbowShen 11s infinite;'>月姬</span>",
                        神魔降临: "<span style='animation:rainbowShen 12s infinite;-webkit-animation:rainbowShen 12s infinite;'>神魔降临</span>",
                        忠义三国: "<span style='animation:rainbowShen 13s infinite;-webkit-animation:rainbowShen 13s infinite;'>忠义三国</span>",
                        行侠壮义: "<span style='animation:rainbowShen 14s infinite;-webkit-animation:rainbowShen 14s infinite;'>行侠壮义</span>",
                        复仇者联盟: "<span style='animation:rainbowShen 15s infinite;-webkit-animation:rainbowShen 15s infinite;'>复仇者联盟</span>",
                        楚汉争霸: "<span style='animation:rainbowShen 16s infinite;-webkit-animation:rainbowShen 16s infinite;'>楚汉争霸</span>",
                        寻秦记: "<span style='animation:rainbowShen 17s infinite;-webkit-animation:rainbowShen 17s infinite;'>寻秦记</span>",
                        王者荣耀: "<span style='animation:rainbowShen 20s infinite;-webkit-animation:rainbowShen 20s infinite;'>王者荣耀</span>",
                        义关羽: '关羽',
                        姜子牙: '姜子牙',
                        神姜子牙: '姜子牙',
                        灭霸: '灭霸',
                        '权倾,灭霸': '灭霸',
                        越女: '越女',
                        托尼史塔克: '托尼史塔克',
                        男人: '男人',
                        女人: '女人',
                        女娲: '女娲',
                        两只小K: '两只小K',
                        周瑜: '周瑜',
                        孙策: '孙策',
                        项羽: '项羽',
                        项少龙: '项少龙',
                        韩信: '韩信',
                        张衡: '张衡',
                        紫霞: '紫霞',
                        青霞: '青霞',
                        马克1号: '钢铁侠',
                        马克3号: '钢铁侠',
                        马克4号: '钢铁侠',
                        洛天依: '洛天依',
                        阿卡多: '阿卡多',
                        凛音: '凛音',
                        两仪式: '两仪式',
                        式: '式',
                        织: '织',
                        门徒: '门徒',
                        凯: '凯',
                        魔凯: '魔凯',
                        耶稣: '耶稣',
                        蚁人: '蚁人',
                        斯科特朗: '斯科特朗',
                        八神庵: '八神庵',
                        王母: '王母',
                        刘邦: '刘邦',
                        死神: '死神',
                        鸿钧: '鸿钧',
                        阎王: '阎王',
                        地藏王: '地藏王',
                        晓美焰: '晓美焰',
                        玉帝: '玉帝',
                        无天: '无天',
                        盘古: '盘古',
                        真紫霞: '紫霞',
                        真周瑜: '贪狼※周瑜',
                        真关羽: '武曲ᨐ关羽',
                        真李白: '李白',
                        孙悟空: '孙悟空',
                        汉韩信: '韩信',
                        虞姬: '虞姬',
                        萧何: '萧何',
                        张良: '张良',
                        霍去病: '霍去病',
                        龙且: '龙且',
                        真女娲: '女娲',
                        捏泥: '捏泥',
                        捏泥_info: '<li>出牌阶段,你可以将一张不同类型的牌置于武将牌上,称为泥.',
                        真造人: '造人',
                        真造人_info: `
    <li>1. 造人:回合结束阶段,你可以弃置武将牌上的任意数量的<泥>,并为每个弃置的<泥>指定一个属性(名字、性别、势力、技能).每个属性只能指定一次.
        <ul>
            <li>名字:为泥人指定一个名字.</li>
            <li>性别:为泥人指定一个性别.</li>
            <li>势力:为泥人指定一个势力.</li>
            <li>技能:为泥人指定一个技能.</li>
        </ul>
    </li>
    <li>2. 泥人体力赋予:
        泥人初始体力为0点,每当你为泥人指定一个属性(名字、性别、势力、技能),该泥人的体力值增加1点.</li>
    <li>3. 激活泥人:当为泥人指定完属性后,可以把泥人激活为实体角色.激活的泥人将以你的阵营加入游戏.</li>
    `,
                        补刀: '补刀',
                        补刀_info: `
    <li>在你的回合外:<br>
    其他角色受到杀的伤害后,若其在你攻击范围内,你可以对其使用杀.</li>
    `,
                        结义: '结义',
                        结义2: '结义',
                        结义3: '结义',
                        结义_info: `
    <li>回合结束阶段:<br>
    你可获得一名角色所有手牌.直到你下回合开始前,其他角色使用指定该角色为目标的牌,改为对你使用.</li>
    `,
                        赴会: '赴会',
                        赴会_info: `
    <li>受到伤害后:<br>
    你可以对伤害来源使用一张杀.<br>
    若此杀为红色,则直接命中.</li>
    `,
                        武圣: '武圣',
                        武圣_info: `
    <li>① 你可以将红色牌当作【杀】使用或打出.</li>
    <li>② 你的攻击距离增加1.</li>
    <li>③ 使用红色【杀】时,你可以摸一张牌.</li>
    `,
                        单骑: '武圣',
                        单骑_info: '',
                        虚体: '虚体',
                        虚体_info: `
    <li>锁定技:游戏开始时 ∨ 受到伤害时:<br>
    有5%的概率随机变更体力上限(范围1至100).变更后,体力上限将更新为新的数值,并结算伤害.</li>
    `,
                        封神: '封神',
                        封神_info: `
    <li>觉醒技:其他角色进入濒死状态:<br>
    你可以随机获得1至3个技能.这些技能将在你的回合结束时自动清除.</li>
    `,
                        响指: '响指',
                        响指_info: `
    <li>出牌阶段:<br>
    你可以选择减少一半体力上限来打响指.打响指后,场上除你以外的一半角色将立即死亡.</li>
    `,
                        空间: '空间',
                        空间_info: `
    <li>出牌阶段限一次:<br>
    你可以弃置1张手牌,将1名角色移至另一个空间,直到下轮游戏开始.</li>
    `,
                        灵魂: '灵魂',
                        灵魂_info: `
    <li>出牌阶段限一次:<br>
    你可以减少1点体力上限,<br>
    选择一名已经阵亡的角色令其灵魂继续存活,<br>
    该角色摸1张牌并将体力上限改为1.</li>
    `,
                        力量: '力量',
                        力量_info: `
    <ul>
      <li>造成伤害时:<br>
        若目标体力小于上限,将其上限设为当前体力.<br>
        否则,伤害视为减少其体力上限.</li>
    </ul>
    `,
                        时间: '时间',
                        时间_info: `
    <ul>
      <li>有角色受到伤害时:<br>
        如果该角色未因本次伤害而阵亡,你可以将其体力改为受伤前的状态.<br>
        若如此做,该角色必须弃置X张牌(X等于所受伤害值).<br>
        如果不弃置牌,则该角色失去1点体力.</li>
    </ul>
    `,
                        现实: '现实',
                        现实_info: `
    <ul>
       <li>任意角色判定时:<br>
         你可以摸一张牌.<br>
         你可以选择使用一张牌替换判定牌.</li>
    </ul>
    `,
                        心灵: '心灵',
                        心灵_info: `
    <ul>
        <li>出牌阶段限1次:<br>
          你可以失去1点体力并选择一名角色.<br>
          控制其心灵,使其发疯一回合.</li>
    </ul>
    `,
                        手套: '手套',
                        手套_info: `
    <ul>
        <li>觉醒技:<br>
          当你集齐6颗宝石时,立即觉醒为【无限灭霸】.<br>
          清空所有宝石的技能,获得技能【响指】.<br>
          增加6点体力上限,回复6点体力.<br>
          立刻进入你的回合.</li>
    </ul>
    `,
                        宝石: '宝石',
                        宝石_info: `
    <ul>
        <li>锁定技:<br>
          你可以在以下时机获得6颗无限宝石中的一颗:<br>
          <ul>
            <li>【力量】:使用杀被闪避时.</li>
            <li>【时间】:受到伤害时.</li>
            <li>【空间】:令其他角色体力上限减少时.</li>
            <li>【心灵】:任意角色进入濒死时.</li>
            <li>【现实】:失去体力时.</li>
            <li>【灵魂】:令一名角色死亡时.</li>
          </ul>
        </li>
    </ul>
    `,
                        剑风: '剑风',
                        剑风_info: `
    <ul>
        <li>当你使用杀命中目标时:<br>
            你可以选择防止此杀造成伤害,<br>
            获得目标的两张牌.</li>
    </ul>
    `,
                        封喉: '封喉',
                        封喉_info: `
    <ul>
        <li>锁定技:<br>
          当你对同一个目标连续使用第4张杀时,直接秒杀该目标.<br>
          <span style="background: linear-gradient(to right, red, orange, yellow, green, cyan, blue, purple); -webkit-background-clip: text; color: transparent;">
            无视免死
          </span>.<br>
          若在此期间转换过其他目标,则重新计数.</li>
    </ul>
    `,
                        破竹: '破竹',
                        破竹_info: `
    <ul>
        <li>出牌阶段:<br>
          你可以弃掉1张装备牌,选择1名角色.令其获得1张杀,并且其回合使用杀数量永久+1,使用【杀】无视距离限制.<br>
        </li>
        <li>弃牌阶段:<br>
          弃置牌后,你的空装备栏内随机置入同等弃牌数量的装备牌.如未装备防具牌,则优先装备防具牌.<br>
        </li>
    </ul>
    `,
                        剑神: '剑神',
                        剑神_info: `
    <ul>
        <li>当你使用【杀】未命中时,进入无敌状态:<br>
          - 免疫伤害、翻面、横置、体力和体力上限变动、卡牌效果.<br>
          - 该状态持续到下个回合开始前.</li>
        <li>其他角色死亡时:<br>
          - 你增加1点体力上限.<br>
          - 你回复1点体力.</li>
    </ul>
    `,
                        剑神1: '剑神',
                        剑神1_info: '',
                        剑魂: '剑神',
                        剑魂_info: '',
                        剑界: '破竹',
                        剑界_info: '',
                        发明: '发明',
                        发明_info: `
    <ul>
         <li>出牌阶段限一次:<br>
           你可以弃置1张手牌来发明一张与弃牌相同类型的钢铁侠专属卡牌.<br>
           如果弃置的手牌类型不是<基本>、<装备>或<锦囊>,则改为摸一张牌.</li>
    </ul>
    `,
                        富豪: '富豪',
                        富豪_info: `
    <ul>
        <li>限定技:<br>
          当你的体力值≤0时:<br>
          你装备【反应炉】.<br>
          随后你选择1名角色,<br>
         令其摸X张牌或令你回复1点体力.<br>
         X的值等于场上存活的角色数.</li>
    </ul>
    `,
                        造人: '造人',
                        造人_info: `
    <ul>
      <li>限定技:<br>
        以下两个时机可使用:<br>
        <ul>
          <li>制造男人:<br>
            出牌阶段限一次:<br>
            弃置任意张花色不同的手牌制造1个男人.该男人摸X张牌,体力上限为X(X为你弃置的手牌数量).</li>
          <li>制造女人:<br>
            场上有角色阵亡时:<br>
            减少1半体力上限制造1个女人.该女人摸Y张牌,体力上限为Y(Y为你减少的体力上限数量).</li>
        </ul>
      </li>
    </ul>
    `,
                        女战士: '女人',
                        女战士_info: `
    <ul>
       <li>锁定技:<br>
         <ul>
           <li>你使用牌无距离限制.</li>
           <li>你无法成为卡牌目标.</li>
           <li>你不能对女娲和男人造成伤害.</li>
           <li>其他角色回合开始时,你视为对其使用1张杀.</li>
           <li>你造成伤害时,失去1点体力并令女娲增加1点护甲.</li>
           <li>你阵亡时,女娲摸X张牌.(X为你当前体力上限)</li>
         </ul>
       </li>
    </ul>
    `,
                        男炮灰: '男人',
                        男炮灰_info: `
    <ul>
        <li>锁定技:<br>
          <ul>
            <li>你使用牌无距离限制.</li>
            <li>你无法成为卡牌目标.</li>
            <li>你不能对女娲造成伤害,女娲受到伤害时由你承担.</li>
            <li>你受到伤害时,女娲摸1张牌.</li>
            <li>你阵亡时,女娲增加X点体力上限并回复X点体力.(X为你当前体力上限)</li>
          </ul>
        </li>
    </ul>
    `,
                        补天: '补天',
                        补天_info: `
    <ul>
      <li>当你使用造人技能V有角色阵亡时:<br>
      获得1个〖补天石〗.<br>  
      <ul>
        <li>出牌阶段限一次:<br>
        <li>如果你拥有超过1个【补天石】,你可以弃置所有【补天石】.</li>
        <li>选择1名已阵亡角色进行复活.</li>
        <li>该角色复活时,其体力上限增加S点,同时摸S张牌.</li>
        <li>S的值等于你弃置的【补天石】数量.</li>
      </ul>
      </li>
    </ul>
    `,
                        补天石: '补天石',
                        补天石_info: '',
                        主人: '始母',
                        主人_info: `
    <ul>
       <li>伪主技:<br>
         当你的身份为内奸时,你将身份改为反贼,并令所有玩家身份暴露.<br>
         <ul>
           <li>当你阵亡时:<br>
             如果伤害来源为主忠,则以主忠胜利结束本局游戏.</li>
           <li>你获得通过造人技能制作的角色的回合控制权.</li>
         </ul>
       </li>
       <li><伪主技:类似主公技,只限身份局使用></li>
    </ul>
    `,
                        摆烂: '摆烂',
                        摆烂_info: `
    <ul>
        <li>当你阵亡时:<br>
        若认为自己无法获胜,可发动<摆烂>直接获得游戏胜利.</li>
    </ul>
    `,
                        摸鱼: '摸鱼',
                        摸鱼_info: `
    <ul>
          <li>出牌阶段开始时:<br>
          你可以选择弃置所有手牌,将你的武将牌永久翻面,直至游戏结束.</li>
    </ul>
    `,
                        郎顾: '郎顾',
                        郎顾_info: '女性角色摸牌阶段结束后,你可以获得其一张牌',
                        赤壁: '赤壁',
                        赤壁_info: '锁定技:①你造成的伤害视为火属性伤害.<br>②任意角色受到火属性伤害后,你回复本次伤害量的体力并令其横置.',
                        天妒: '天妒',
                        天妒_info: '限定技:使用/打出第36张牌时立刻阵亡.若游戏未结束,下轮游戏开始时复活为贪狼※周瑜.',
                        威勇: '威勇',
                        威勇_info: '①其他角色回合结束时,你可以视为对其使用1张无法被无懈可击的【决斗】.<br>②你使用【决斗】时随机获得以下效果之一:1. 获得1点护甲.2. 视为对该目标再次使用1张【决斗】.3. 回复1点体力.4. 摸1张牌.',
                        惧箭: '惧箭',
                        惧箭_info: '锁定技:你受到万箭齐发伤害时,体力上限改为1.',
                        霸王: '霸王',
                        霸王_info: '你使用杀和决斗按场上存活人数分别获得以下不同效果.<br>①存活人数>=5,决斗:每对一名目标生效时,摸1张牌.杀:被闪后,可以弃置2张牌令本回合出杀次数加1.②存活人数<5,杀和决斗:对目标生效时直接命中.',
                        万人敌: '万人敌',
                        万人敌_info: '被动技:使用【杀】【决斗】时可以指定至多1万名角色为目标,且使用【杀】无距离限制.',
                        破釜: '破釜',
                        破釜_info: '出牌阶段限1次,你可以弃置全部手牌,视为使用1张【决斗】.',
                        潜行: '潜行',
                        潜行_info: '锁定技:受到的单次伤害最多为1,受到伤害后进入潜行状态(直至下回合开始),期间不会成为其他角色卡牌指定的目标.',
                        墨剑: '墨剑',
                        墨剑_info: '出牌阶段限1次,你可以弃置1张【杀】,令其他角色按顺时针方向与除其以外的角色交换位置.若交换位置的一方为你的敌对角色,该角色受到1点伤害.若交换位置后下家为你,则终止此技能继续结算.',
                        穿越: '穿越',
                        穿越_info: '①每轮开始时,你可以弃置最多5张手牌发动【穿越】,使游戏轮数加x.场上角色随机增减x点体力、x张手牌、x个装备,或横置/解除横置(x为你弃置的手牌数).发动后你失去【潜行】获得【造王】.②当你成为杀/决斗目标时,失去【造王】获得【潜行】.',
                        造势: '造王',
                        造势_info: '出牌阶段限1次,你可以选择1张牌并失去1点体力.选择2名角色进行拼点,先选的角色获得你选择的牌,后选的角色增加1点体力上限.拼点赢方视为对输方使用杀,并摸1张牌和增加1点护甲.若点数相同,则双方回复1点体力.结算后,你摸1张牌、增加1点护甲和回复1点体力.拼点赢方与当前主公交换身份.',
                        杀: '杀意',
                        杀_info: '锁定技:①你每使用1张实体【杀】增加1点进攻距离.当你使用第4张实体【杀】后,重新计算进攻距离,并摸1张牌和视为对该杀的目标使用1张【杀】.<br>②若你的实体【杀】指定多个目标,则每次结算后增加1点进攻距离,第4次结算后重新计算进攻距离、你摸1张牌并对该次的目标使用1张【杀】.',
                        无情: '无情',
                        无情_info: '使用【杀】时,若目标没有🈹,令其获得🈹.对有🈹的目标使用【杀】不计入本回合出杀次数.',
                        背水: '背水',
                        背水_info: '出牌阶段限1次,你可以弃置1张手牌.若如此做,本回合进攻距离减1.你使用实体【杀】指定目标时,令全部有🈹的角色也成为此【杀】的目标.',
                        国士: '国士',
                        国士_info: '限定技:其他角色死亡后.若你身份不为内奸,且安装了仙家之魂扩展及打开仙武同人武将包,你可在其位置上召唤仙家之魂扩展的李白助战.<br>否则,你获得<霸体>.',
                        霸体: '霸体',
                        霸体_info: '免疫延时锦囊,免疫横置、翻面、废除装备栏.',
                        灯芯: '灯芯',
                        灯芯_info: '锁定技:你同时拥有<紫霞>和<青霞>.使用非装备牌时,视为两人依次使用这张牌.',
                        金铃: '金铃',
                        金铃_info: '锁定技:你<受到｜造成>伤害时进行判定.<br>♦️️受到伤害:伤害来源获得<封印>至其回合结束.若其已有【封印】:则其摸一张牌.<br>造成伤害:你获得判定牌.<br>♥️️你回复一点体力,若你体力已满:你获得一点护甲.<br>♠️️受到伤害:你令伤害来源横置并对其造成1点雷属性伤害.造成伤害:你令自己横置并对自己造成1点雷属性伤害.<br>♣️️你获<神体>至你下回合开始.若你已有［神体］:则你获得<霸体>至你下回合开始.',
                        盘丝: '盘丝',
                        盘丝_info: '你的♦️️牌【闪】均视为决斗.你对男性角色使用♦️️牌成功后,令其获得🛐印章.有🛐的角色造成伤害后,你摸1张牌.',
                        神体: '神体',
                        神体_info: '每回合最多承受1点伤害.',
                        变身: '变身',
                        变身_info: '出牌阶段限1次,你可以选择3种战甲形态中的1种进行变身.',
                        吃货: '吃货',
                        吃货_info: '锁定技:你使用🍑时回复量+1,你成为杀的目标时进行1次判定,如果为♥️️免疫本次伤害并获得判定牌,如果为♦️️你获得1点护甲',
                        音韵: '音韵',
                        音韵_info: '准备阶段开始时,你可以选择一首歌曲进行播放,并获得与该歌曲相关的技能或临时技能.每回合只能选择一次歌曲.',
                        量子: '量子',
                        量子_info: '限定技:出牌阶段开始时,你可以选择一名角色,本局游戏中,其受到伤害或回复体力时,你也受到相同的伤害或回复体力并摸一张牌.回合结束时,你可以再次选择另一名角色,本局游戏中,你受到伤害或回复体力时,该角色也受到相同的伤害或回复体力并摸一张牌.',
                        孤单: '量子',
                        孤单_info: '',
                        量子2: '量子',
                        量子2_info: '',
                        量子3: '量子',
                        量子3_info: '',
                        投食: '投食',
                        投食_info: '出牌阶段限一次,选择任意名角色,令这些角色选择是否交给你一张牌.若其中有角色交给你♠️️,则其获得1点护甲,否则,若你当前体力值不满,且有角色交给你♥️️,则你回复1点体力,否则,你获得1点护甲.',
                        武士刀: '武士刀',
                        武士刀_info: '你使用基本牌或普通锦囊牌时,可再次结算该牌效果.',
                        不死: '不死',
                        不死_info: '锁定技:①每当你进入濒死状态前取消之并摸1张牌.<br>②若你本回合进入了出牌阶段,则结束后你跳过弃牌阶段.若你的手牌数大于x,则你需弃置x张牌(x为场上存活角色的一半,向下取整).<br>③当你装备区和手牌为0时你立刻阵亡.',
                        真死: '不死',
                        真死_info: '',
                        保命: '不死',
                        保命_info: '',
                        击飞: '击飞',
                        击飞_info: '你使用杀命中目标时,将其击飞出屏幕至其回合开始,令其跳过摸牌阶段.',
                        击飞1: '击飞',
                        击飞1_info: '',
                        转生: '转生',
                        转生_info: '当你阵亡时,你需选择一名场上存活角色,灵魂转移至其身上,并替换该角色.',
                        夜刀: '夜刀',
                        夜刀_info: '你使用杀造成伤害时,30%几率令伤害翻倍,1%几率秒杀目标或清空其技能.10%几率令目标翻面或横置,10%几率令目标失去x点体力.(x为目标已损体力)',
                        卸甲: '卸甲',
                        卸甲_info: '回合结束时,你变成托尼·史塔克.',
                        三重人格: '三重人格',
                        三重人格_info: '①游戏开始时,你使用源人格<两仪式>登场.<br>②你使用杀时,次人格<织>主导身体.<br>③你使用闪时,主人格<式>主导身体.<br>④当你进入濒死状态时,你将体力回复至1点,觉醒为<真两仪式>.',
                        嗜杀: '嗜杀',
                        嗜杀_info: '你使用杀造成伤害前,可以对攻击范围内的角色继续使用杀,直至无法使用或杀被闪避.依次结算所有杀的伤害.',
                        冷酷: '冷酷',
                        冷酷_info: '你使用闪时,摸一张牌并增加1点护甲.',
                        直死魔眼: '直死魔眼',
                        直死魔眼_info: '出牌阶段限一次,当你体力为1时,你可以弃置1张手牌,选择一名角色,直接击败该角色.(无视免疫死亡)',
                        制作: '制作',
                        制作_info: '回合开始时,若你以此法获得的技能小于4个,则你可以输入正确的技能ID获得你输入的技能.',
                        突袭: '突击',
                        突袭_info: '出牌阶段限一次,你可以弃置1张手牌,选择1-2名其他角色,视为对这些角色使用杀.',
                        强袭: '强袭',
                        强袭_info: '锁定技:你使用杀时可以获取目标一张手牌.',
                        连锁: '连锁',
                        连锁_info: '①锁定技:使用杀命中目标时,依次对目标上下家(不包括你)视为各使用1张杀.<br>②你的回合内,造成伤害>=2后,技能结算时摸1张牌或回复1点体力.',
                        修罗: '修罗',
                        修罗_info: '你使用杀造成伤害时,如果本次伤害可以整除2,则本次伤害×1.5倍.<br><span style="color: red">魔凯</span>:使用杀造成伤害时,本次伤害x2倍.',
                        回旋: '回旋',
                        回旋_info: '使用杀造成伤害后,回复1点体力并获得此杀.<br><span style="color: magenta">魔凯</span>:使用杀造成伤害后,令此杀继续对目标下家结算,若目标下家为你,则停止结算.',
                        极刃: '极刃',
                        极刃_info: '限定技:出牌阶段开始前,若你体力<=1,可以变身为<font color=#0000FF>魔凯</font>.',
                        魔躯: '魔躯',
                        魔躯_info: '①锁定技:出牌阶段开始时,你失去x点体力上限并摸x张牌和获得x点护甲.(x为你当前体力上限-1)<br>②38秒内,全部手牌视为杀,使用杀无距离限制且直接命中并无视防具.38秒后失去<font color=red>魔躯</font>变回<font color=cyan>凯</font>.',
                        重生: '重生',
                        重生_info: '锁定技:〈<font color=#00FFFF>你</font>/你令<font color=#00FFFF>目标</font>〉死亡后.若x轮后仍未结束游戏,〈<font color=#00FFFF>你</font>/目标〉将在x轮游戏后满血复活并摸x张牌.(x为【<font color=#00FFFF>你</font>/目标】的生命上限).',
                        神迹: '神迹',
                        神迹_info: '其他角色受到伤害时,若你不是伤害来源且有伤害来源,你可交给伤害来源1张手牌令本次伤害来源变为你.',
                        神偷: '神偷',
                        神偷_info: '锁定技:其他角色回合开始时,若其有区域内有牌,20%几率视为对其使用一张顺手牵羊;20%几率观看其1张牌并获得;20%几率展示牌堆顶1张牌并获得.',
                        粒子: '粒子',
                        粒子_info: '出牌阶段限一次,若你装备区没有<font color=#00FFFF>皮姆粒子</font>,可将1张<font color=#FF69B4>♥️️/♠️️</font>手牌视为<font color=#00FFFF>皮姆粒子</font>装备在你的装备区.',
                        皮姆: '皮姆粒子',
                        皮姆_info: '',
                        变小: '缩小',
                        变小_info: '出牌阶段限一次,弃置任意张手牌,回合内缩小x倍,攻击距离+x,出杀次数+x.(x为弃置的手牌数)<br>回合结束时解除缩小状态并将装备区的皮姆粒子移除游戏.',
                        食谱: '食谱',
                        食谱_info: '出牌阶段开始时,你可以展示一名其他角色1-5张牌.若其中有<font color=#FF0000>杀</font>,其对你依次使用展示的<font color=#FF0000>杀</font>;否则你可以令其摸等同于展示牌数的牌.否则你摸等同于展示牌数的牌.',
                        八稚女: '八稚女',
                        八稚女_info: '回合开始时,若你的<气>≥2,可消耗2个<气>选择1名角色对其释放八稚女,令其受到随机1-3点无来源的<font color=#FF4500>🔥</font>属性伤害.',
                        八酒杯: '八酒杯',
                        八酒杯_info: '回合开始时,若你的<font color=#00FFFF><气></font>≥2,可消耗2个<font color=#00FFFF><气></font>选择1名角色对其释放八酒杯,令其<font color=#FF8C00>翻面</font>.',
                        气条: '气条',
                        气条_info: '使用/打出牌可获得<font color=#00FFFF>1<气></font>,上限4个.',
                        幻化: '幻化',
                        幻化_info: '回合开始前,你可以弃置所有牌跳过本回合.若如此做,你令1名随机角色替换你上场,摸4张牌并进入一个回合.',
                        卑鄙: '卑鄙',
                        卑鄙_info: '成为<font color=#FF0000>【杀】【决斗】</font>目标前,可选择除来源外的任意名角色成为此牌的目标.',
                        无耻: '无耻',
                        无耻_info: '使用<font color=#FF0000>【杀】【决斗】</font>对目标生效前,可选择除目标外的任意名角色视为对目标使用同一张牌.',
                        召唤: '帝权',
                        召唤_info: '游戏开始时,将场上其他角色克隆在武将牌上.<br>回合开始前,可跳过回合并选择克隆武将牌上的1名角色为上场与你一同作战.',
                        召唤_gainMark: '帝权',
                        召唤_gainMark_info: '',
                        召唤_clearMark: '帝权',
                        召唤_clearMark_info: '',
                        死亡世界: '死界',
                        死亡世界_info: '①锁定技:游戏开始时|回合结束后,你阵亡.<br>②任意角色进入濒死时,你可以收割其灵魂令其直接阵亡.<br>③你上家回合结束后,你进入<font color=#A020F0>灵魂状态</font>:<br>所有手牌视为随机［杀］,使用杀无次数和距离限制.',
                        死亡世界2: '收割灵魂',
                        死亡世界2_info: '立刻将其击败',
                        应对: '应对',
                        应对_info: '回合外,当你需要<font color=#FF0000>【杀】【闪】</font>响应时,视为你打出或使用了该牌.<br>你的<font color=#00BFFF>闪</font>都可以当作<font color=#FF0000>杀</font>使用或打出.',
                        复原: '天佑',
                        复原_info: '锁定技:当你<失去>牌时,将失去的牌记录在<font color=#FFD700>【牌】</font>中(每种牌名限一张).<br>摸牌阶段改为获得你<font color=#FFD700>【牌】</font>所记录的牌.',
                        轮回: '轮回',
                        轮回_info: '锁定技:游戏开始时,你令游戏不可结算..<br>当场上只剩下1个阵营存活时,你复活所有阵营角色继续游戏并令游戏可进行结算.',
                        权倾: '权倾',
                        权倾_info: '出牌阶段限一次,你可以展示一张手牌,若如此做,本回合你使用与展示牌花色不同的牌时摸一张牌.',
                        单挑: '地狱',
                        单挑_info: '回合开始时,若你不处于<font color=#A52A2A>地狱</font>,可选择一名角色一起进入地狱单挑,直至其中一方死亡.若游戏未结算,则脱离地狱.<br>处于<font color=#A52A2A>地狱</font>时,获得技能<font color=#00BFFF>【普度】</font>,并<font color=#FF0000>封印</font>其他角色的技能.',
                        毁灭: '刀灭',
                        毁灭_info: '出牌阶段限一次,发动后场上其他角色按你<font color=#FFD700>下家</font>开始顺时针依次被你击败(无视免死技能).',
                        神域: '无限',
                        神域_info: '群体技:①游戏开始后,所有角色身份改为<font color=#00BFFF>内奸</font>.<br>②其他角色死亡时将其移出游戏.<br>③当场上只剩下你时,随机召唤<font color=#FFD700>x</font>名角色上场继续游戏(<font color=#FFD700>x</font>为游戏开始时的角色数).',
                        机改: '666',
                        机改_info: '锁定技:你的胜利条件改为击败<font color=#FFD700>666</font>名角色.',
                        时倒: '控时',
                        时倒_info: '锁定技:当有角色死亡结算后,你立刻进入一个回合.',
                        无限: '穿梭',
                        无限_info: '锁定技:死亡时直接进入下一局游戏.',
                        混沌1: '混沌',
                        混沌1_info: '苏醒技:游戏开始后,你置于混沌状态.(此状态下:化身为蛋形态,视为存在蛋中.)<br>其他角色回合开始时你获得一个<font color=#FFD700>【斧】</font>标志.其他角色回合结束后,若你的<font color=#FFD700>【斧】</font>标志数量大于其他角色数总和时,你觉醒为正常状态,清除本技能并获得技能<font color=#00BFFF>【开天】</font>和<font color=#00BFFF>【劈地】</font>.',
                        开天: '开天',
                        开天_info: '锁定技:每次造成伤害时,目标<font color=#00BFFF>获得</font>或<font color=#00BFFF>增加</font>1个<font color=#FFD700>【万物】</font>标志.<br>你造成的伤害加上目标已有<font color=#FFD700>【万物】</font>标志的数量.',
                        劈地: '劈地',
                        劈地_info: '你受到伤害时,可对伤害来源造成等同于该伤害量的伤害.若如此做,你获得x个<font color=#FFD700>【化生】</font>标志.(x为你造成伤害量)<br>当<font color=#FFD700>【化生】</font>标志数量大于等于你的<font color=#FFD700>【斧】</font>标志数量时,立刻阵亡并获得技能<font color=#00BFFF>【化生】</font>.',
                        化生: '化生',
                        化生_info: '其他角色回合开始时,若其<font color=#FFD700>【万物】</font>标志数大于0,则获得其回合控制权.结束阶段,弃置该角色所有的<font color=#FFD700>【万物】</font>标志.',
                        帝威: '帝威',
                        帝威_info: '锁定技:游戏开始时｜所有玩家回合开始前,若你不是主公,则与当前主公交换身份.',
                        紫青: '紫青',
                        紫青_info: '使用的杀被闪抵消时,可以选择1-2名目标.<br>若有两个目标,则视为分别对他们使用<font color=#FF4500>【火杀】</font>和<font color=#87CEFA>【雷杀】</font>.<br>若只有一个目标,则视为依次对其使用<font color=#FF4500>【火杀】</font>和<font color=#87CEFA>【雷杀】</font>.',
                        绝色: '绝色',
                        绝色_info: '你受到男性角色造成的伤害时,可以弃置一张手牌,令本次伤害减1.',
                        嫁妆: '嫁妆',
                        嫁妆_info: '限定技:出牌阶段,选择一名男性角色.本局游戏帮该角色承受所有伤害.该角色造成伤害时,你可以摸一张牌并让其失去1点体力.',
                        嫁妆2: '嫁妆',
                        嫁妆3: '嫁妆',
                        封印: '封印',
                        普度: '普度',
                        普度_info: '出牌阶段限一次,你可以弃置任意张手牌后选择一名其他角色,该角色失去一点体力.你摸x张牌.若x为偶数,获得<font color=#008000>x/2</font>点护甲,否则获得1点护甲.(x为你弃置的牌数量)',
                        //应对1: "应对",
                        应对2: '应对',
                        镇魂: '镇魂',
                        镇魂_info: '群体技:其他角色回复体力视为失去体力.',
                        贪狼: '贪狼',
                        贪狼_info: '其他角色失去体力后,你可以视为对其使用1张【火杀】.<br>你造成火属性伤害后,你可以选择摸一张牌或回复1点体力.',
                        无名: '武破',
                        无名_info: '锁定技:你可以装备两件武器牌.',
                        红脸: '红脸',
                        红脸_info: '你可以将一张红色牌当做【杀】来使用或打出.你使用红色【杀】①不计入出杀次数,②没有距离限制,③造成的伤害+1.<br>你的红色牌不计入手牌上限.',
                        武曲: '武曲',
                        武曲_info: '群体技:其他角色在执行【获得牌／摸牌】操作时,视为从牌堆顶以正面向上的方式摸取一张牌.',
                        诗剑: '诗剑',
                        诗剑_info: '限时技:①你使用杀结算后5秒内可以选择一名目标视为对其使用一张杀.<br>②若你成功触发①的效果则获得1个剑歌(上限4个).',
                        酒剑: '酒剑',
                        酒剑_info: '小游戏技:出牌阶段限一次,你可以弃置一张基本牌进入一个数独小游戏,小游戏中,你可以选择以下一项:【<br>①:直接退出<br>②:ai完成<br>③:手动完成.<br>】<br><br>①:获得一张酒.<br>②:你失去一点体力获得1张酒和1张杀.<br>③:获得两张酒和一张杀,本回合你使用酒和杀无次数限制.',
                        青莲: '青莲',
                        青莲_info: '封印技:你拥有4个"剑歌时解除封印",出牌阶段限一次,弃置所有剑歌.随机对场上其他角色(最多4名)共计造成4点伤害.若随机到的角色为2的倍数则各造成[伤害/角色数]的火属性伤害.你获得一点护甲.否则:各造成[总伤害-角色数]的雷属性伤害,你摸一张牌',
                        七十二变: '72变',
                        七十二变_info: '①出牌阶段限一次,你可以选择变身为未上场的随机72个角色的其中一个,若如此做你失去如意金箍棒.<随机角色不包括神,魔,轮,鬼,怪等势力角色>②当你阵亡或者令其他角色阵亡时,若你不是孙悟空变回孙悟空并装备如意金箍棒',
                        火眼: '火眼',
                        火眼_info: '当你受到伤害时,你令来源获得一个<妖>,拥有<妖>的角色所有手牌视为对你可见,且<妖>角色会把所有手牌展示在<妖>上令所有角色可见.',
                        筋斗云: '筋斗云',
                        筋斗云_info: '你计算与其他角色的距离始终减1,其他角色计算与你的距离始终加1.',
                        如意: '如意',
                        如意_info: '①你始终装备如意金箍棒.(本效果只对本扩展的孙悟空生效,其他角色获得均无效.)<br>②你手牌的装备牌视为带有如意两字的<杀>',
                        灭世: '灭世',
                        灭世_info: '限定技:当场上有角色即将受到单次>=4的伤害时,你可以令除你外的其他角色将体力上限改为0并清空其所有技能和弃置其区域内的所有牌',
                        同路: '相随',
                        同路_info: '游戏开始时,你可以选择一名男性角色与其进行绑定,绑定的双方需要使用或者打出手牌时可以将对方手牌如自己的手牌使用或打出.',
                        同德: '绑定',
                        /*相随:"相随",
                        相随_info:"游戏开始时,你可以选择一名男性角色与其进行绑定.<br>①绑定的双方出牌阶段开始时获得对方的所有手牌.出牌阶段结束后,交还对方剩余的手牌.②双方视为拥有对方装备区装备的技能效果.",*/
                        自刎: '自刎',
                        自刎_info: '当你绑定的角色阵亡后,你可以选择立刻自杀阵亡.若如此做,你召唤项羽上场游戏.其与你所属同一个阵营,上场时摸4张牌并立刻开始一个回合.',
                        点兵: '点兵',
                        点兵1: '兵',
                        点兵_info: '游戏发牌结束后｜出牌阶段限一次,你可以将任意张手牌置于武将牌上称为兵.你需要杀响应时,可以把武将牌上的兵当作杀.',
                        兵仙: '兵仙',
                        兵仙_info: '当你成为其他角色使用牌的唯一目标时,你可以将此牌视为决斗(此决斗结算伤害为视为前的牌可结算伤害).',
                        暗度: '暗度',
                        暗度_info: '出牌阶段限一次,你可以将任意张手牌交给一名其他角色.其回合开始时需进行一次判定,若不为♥️️则其受到一点火属性伤害.',
                        退隐: '退隐',
                        退隐_info: '若你因暗度交出所有手牌,则你免疫所有非属性伤害至你下回合开始.',
                        自负: '自负',
                        自负_info: '锁定技:你使用决斗结束后,你令目标随机获得<龙胆>或者<武圣>至本次决斗结束.随后你视为对目标使用一张决斗.',
                        晓勇: '晓勇',
                        晓勇_info: '出牌阶段开始时,你可以废除一个装备区获得一张决斗.',
                        战神: '战神',
                        战神_info: '出牌阶段限一次:你可以将任意张杀视为一张杀使用,你以此法使用的杀造成伤害的基数为你视为前的选择的杀数量.目标需要打出你本张杀伤害基数数量的闪才能抵消本张杀,目标每打出一张闪.令本张杀伤害基数减1.',
                        溃匈: '溃匈',
                        溃匈_info: '回合开始前,你可以将x张手牌替换为杀,x为场上除你势力外其他角色不同势力的总和.',
                        成败: '成败',
                        成败_info: '①出牌阶段限一次,你可以弃置一张手牌选择一名角色,其进行一次判定,若判定牌为黑色则其获得[成］至其回合结束,若为红色则其获得［败］至其回合结束.若为其他颜色则其摸两张牌,<br>②若①的目标为你,则你①的判定牌视为蓝色',
                    },
                };
                for (const i in QQQ.character) {
                    const info = QQQ.character[i];
                    info[4].add(`ext:神魔乱舞/image/${i}.jpg`);
                    info[4].push(`die:ext:神魔乱舞/audio/${i}.mp3`);
                }
                lib.config.all.characters.add('神魔乱舞');
                lib.config.characters.add('神魔乱舞');
                lib.translate['神魔乱舞_character_config'] = `神魔乱舞`;
                return QQQ;
            });
            game.import('card', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '神魔乱舞',
                    connect: true,
                    card: {
                        如意金箍棒: {
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip1',
                            skills: ['如意杀技能'],
                            distance: {
                                attackFrom: -1,
                            },
                        },
                        反应炉: {
                            // 定义卡牌名为<反应炉>
                            fullimage: true, // 需要显示全图,默认为 false
                            image: 'ext:神魔乱舞/image/反应炉.png', // 卡牌的图片地址
                            audio: 'ext:神魔乱舞/audio:true', // 播放的音频文件名
                            type: 'equip', // 卡牌类型为装备
                            subtype: 'equip2', // 卡牌子类型为 equip2,可能用于区分不同属性的装备牌
                            skills: ['反应'], // 装备该牌后获得的技能列表,这里只有<反应>技能
                            toself: false, // 是否对自己使用,默认为 false
                            onEquip() {
                                // 装备时触发的函数
                                player.addSkill('变身'); // 给托尼史塔克加上<变身>技能
                            },
                            fullskin: true, // 是否需要显示全身贴图,默认为 false
                            onLose() {
                                // 失去装备时触发的函数
                                if (player.hp <= 0) {
                                    // 如果玩家已经死亡,则执行 dying 函数
                                    player.dying({});
                                }
                                if (player.hasSkill('变身')) {
                                    // 如果该牌被托尼史塔克装备并且已经获得<变身>技能
                                    player.removeSkill('变身'); // 移除<变身>技能
                                }
                            },
                            ai: {
                                // AI 算法相关的配置
                                order: 5, // AI 使用该牌时的优先级
                                result: {
                                    // 使用该牌后的评估结果
                                    player: 1, // 对自己使用时评估值为 1
                                },
                            },
                        },
                        追踪导弹: {
                            // 定义卡牌名为<追踪导弹>
                            image: 'ext:神魔乱舞/image/追踪导弹.png', // 卡牌的图片地址
                            audio: 'ext:神魔乱舞/audio:true', // 播放的音频文件名
                            type: 'basic', // 卡牌类型为基本牌
                            chongzhu: true, // 是否可以重铸,默认为 false
                            enable(card, player) {
                                // 可以使用该牌的条件
                                return true; // 该牌可以随时使用
                            },
                            selectTarget: 1, // 使用该牌时需要选择一个目标
                            filterTarget(card, player, target) {
                                // 目标的过滤函数
                                return player != target && player.inRange(target); // 目标不能是自己,并且必须在攻击范围内
                            },
                            content() {
                                // 使用该牌时要执行的内容
                                'step 0';
                                var next = target.chooseToRespond({
                                    name: 'sha',
                                }); // 让目标选择是否使用杀牌响应该牌
                                next.ai = function (card) {
                                    // 目标 AI 算法
                                    if (get.damageEffect(target, player, target, 'damage') >= 0) return 0; // 如果对自己使用杀牌效果为正,则返回 0(不使用)
                                    if (target.hasSkillTag('noSha')) {
                                        // 如果目标有<无杀>标记,则返回 -1(不使用)
                                        return -1;
                                    }
                                    return 11 - get.value(card); // 返回杀牌的估价值,值越大越可能使用
                                };
                                next.autochoose = lib.filter.autoRespondSha; // 自动响应可以使用杀牌的情况
                                ('step 1');
                                if (result.bool == false) {
                                    // 如果目标没有使用杀牌打断该牌
                                    /*target.damage({ // 对目标造成伤害
                                        name: "追踪导弹", // 伤害来源为<追踪导弹>
                                        nature: "fire", // 伤害属性为火焰
                                    });*/
                                    target.damage('追踪导弹', lib.skill.追踪导弹.naturesDamage());
                                    target.addTempSkill('追踪导弹', {
                                        // 给目标添加一个持续到回合结束的<锁定>技能
                                        player: 'phaseAfter',
                                    });
                                    target.storage.追踪++; // 目标被导弹锁定计数加一
                                    game.log(target, '被导弹锁定了'); // 在日志中输出目标被导弹锁定的消息
                                }
                            },
                            ai: {
                                // AI 算法相关的配置
                                order: 5, // AI 使用该牌时的优先级
                                result: {
                                    // 使用该牌后的评估结果
                                    target: -1, // 目标受到伤害的评估值为 -1,即越小 AI 越可能使用
                                },
                            },
                        },
                        电弧脉冲: {
                            // 定义卡牌名为<电弧脉冲>
                            image: 'ext:神魔乱舞/image/电弧脉冲.png', // 卡牌的图片地址
                            audio: 'ext:神魔乱舞', // 播放的音频文件名
                            fullskin: true, // 是否采用全卡面显示,默认为 false
                            type: 'delay', // 卡牌类型为延时锦囊牌
                            filterTarget(card, player, target) {
                                // 目标的过滤函数
                                return player != target; // 目标不能是自己
                            },
                            judge(card) {
                                // 决定该牌的判定结果
                                if (card.suit == 'heart') return 0; // 如果该牌为♥️️,则返回 0
                                return -3; // 其他情况下返回 -3
                            },
                            judge2(card) {
                                // 指定该牌使用后是否生效(true 表示生效,false 表示不生效)
                                if (card.suit == 'heart') return false; // 如果该牌为♥️️,则不生效
                                return true; // 其他情况下生效
                            },
                            effect() {
                                // 该牌使用后要执行的效果
                                'step 0';
                                if (result.bool == false) {
                                    // 如果没有在限定的回合内使用
                                    player.skip('phaseUse'); // 跳过主要阶段
                                    player.damage('thunder'); // 对自己造成一点雷电伤害
                                }
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                    useful: 1,
                                    value: 8,
                                },
                                result: {
                                    ignoreStatus: true,
                                    target(player, target) {
                                        if (target === _status.currentPhase && target.skipList.includes('phaseUse')) {
                                            let evt = _status.event.getParent('phase');
                                            if (evt && evt.phaseList.indexOf('phaseJudge') <= evt.num) return -2;
                                        }
                                        let num = target.needsToDiscard(3),
                                            cf = Math.pow(get.threaten(target, player), 2);
                                        if (!num) return -0.01 * cf - 2;
                                        if (target.hp > 2) num--;
                                        let dist = Math.sqrt(1 + get.distance(player, target, 'absolute'));
                                        if (dist < 1) dist = 1;
                                        if (target.isTurnedOver()) dist++;
                                        return (Math.min(-0.1, -num) * cf) / dist - 2;
                                    },
                                },
                                tag: {
                                    skip: 'phaseUse',
                                },
                            },
                        },
                        能盾: {
                            // 定义卡牌名为<能盾>
                            image: 'ext:神魔乱舞/image/能量护盾.png', // 卡牌的图片地址
                            audio: 'ext:神魔乱舞', // 播放的音频文件名
                            type: 'equip', // 卡牌类型为装备牌
                            subtype: 'equip2', // 装备的子类型为防具类
                            skills: ['能量护盾'], // 附带技能<能量护盾>
                            toself: true, // 是否只能给自己装备,该值为 true 表示只能给自己装备
                            fullskin: true, // 是否采用全卡面显示,默认为 false
                        },
                        能量武士刀: {
                            // 定义卡牌名为<能量武士刀>
                            image: 'ext:神魔乱舞/image/能量武士刀.png', // 卡牌的图片地址
                            fullskin: true, // 是否采用全卡面显示,默认为 false
                            audio: 'ext:神魔乱舞', // 播放的音频文件名
                            type: 'equip', // 卡牌类型为装备牌
                            subtype: 'equip1', // 装备的子类型为武器类
                            skills: ['武士刀'], // 附带技能<武士刀>
                            toself: true, // 是否只能给自己装备,该值为 true 表示只能给自己装备
                            distance: {
                                // 增加攻击距离
                                attackFrom: -3,
                            },
                            ai: {
                                // AI 策略相关配置
                                basic: {
                                    // 基础的评分
                                    equipValue: 7.5,
                                },
                            },
                        },
                        护甲充能: {
                            // 定义卡牌名为<护甲充能>
                            image: 'ext:神魔乱舞/image/护甲充能.png', // 卡牌的图片地址
                            audio: 'ext:神魔乱舞/audio:true', // 是否播放音效,默认值为 false
                            fullskin: true, // 是否采用全卡面显示,默认为 false
                            type: 'trick', // 卡牌类型为锦囊牌
                            enable: true, // 是否可用,默认为 true
                            filterTarget: true, // 是否可以选择目标
                            selectTarget: [1, 2], // 可以选择的目标数量范围为 1 到 2 个
                            complexTarget: true, // 是否为复杂的目标,该值为 true 表示需要进行复杂选择
                            content() {
                                // 卡牌的效果
                                target.changeHujia(); // 目标装备区内的防具增加一点防御能力
                            },
                            chongzhu: true, // 是否可以被重铸,默认为 true
                        },
                        皮姆粒子: {
                            // 定义卡牌名为<皮姆粒子>
                            image: 'ext:神魔乱舞/image/皮姆粒子.png', // 卡牌的图片地址
                            fullskin: true, // 是否采用全卡面显示,默认为 false
                            audio: 'ext:神魔乱舞/audio:true', // 播放的音频文件名
                            chongzhu: true, // 是否可以被重铸,默认为 true
                            toself: false, // 是否可以给自己使用,默认为 true
                            skills: ['皮姆'], // 附带技能<皮姆>
                        },
                    },
                    translate: {
                        反应炉: '反应炉',
                        反应炉_info: '装备效果:你不会进入濒死状态.若你名为托尼史塔克,获得<变身>技能.<br>失去效果:若你体力值小于1,则进入濒死状态或者结算死亡,同时清除<变身>技能.',
                        追踪导弹: '追踪导弹',
                        追踪导弹_info: '你可以对攻击距离内的一名目标使用.若目标未能打出一张【杀】,则对其造成1点追踪导弹的多属性伤害并锁定,直到其回合结束.(被锁定目标在每次使用卡牌后会受到1点追踪导弹造成的多属性伤害.)',
                        电弧脉冲: '电弧脉冲',
                        电弧脉冲_info: '对一名角色使用.其回合开始时进行一次判定,若结果不为♥️️,受到1点雷属性伤害并跳过出牌阶段.',
                        能盾: '能量护盾',
                        能盾_info: '装备效果:免疫属性伤害',
                        如意金箍棒: '如意金箍棒',
                        如意金箍棒_info: '你使用杀时,选择任意一个杀的属性,赋予所选择的属性.若你使用的杀带有如意两字则不计入本回合出杀次数(此装备失去时不进入弃牌堆直接移出游戏)',
                        皮姆粒子: '皮姆粒子',
                        皮姆粒子_info: '装备效果:若你是斯科特朗将武将牌替换为蚁人.否则,摸一张牌.',
                        能量武士刀: '武士刀',
                        能量武士刀_info: '装备效果:使用基本牌和锦囊牌时,可以额外结算一次.',
                        护甲充能: '护甲充能',
                        护甲充能_info: '对1-2名角色使用,使其各获得1点护甲.',
                    },
                };
                for (const i in QQQ.card) {
                    const info = QQQ.card[i];
                    info.image = `ext:神魔乱舞/image/${i}.jpg`;
                    lib.inpile.add(i);
                    if (info.mode && !info.mode.includes(lib.config.mode)) continue;
                    lib.card.list.push([lib.suits.randomGet(), lib.number.randomGet(), i]);
                }
                lib.config.all.cards.add('神魔乱舞');
                lib.config.cards.add('神魔乱舞');
                lib.translate.神魔乱舞_card_config = '神魔乱舞';
                return QQQ;
            });
        },
        config: {
            //智能ai开关
            智能ai: {
                //id
                name: '<img style="width:60px; height:30px" src="extension/神魔乱舞/image/人工智能.jpg">',
                init: false, //初始化关闭
                intro: '开启chat gpt ai', //介绍
                onclick(result) {
                    //点击
                    if (result) {
                        //如果点击
                        game.open('https://chat18.aichatos.xyz/#/chat/1699035793416'); //打开网页
                    }
                },
            },
        },
        package: {
            intro: "<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
            author: "<span style='animation:rainbowShen 0.5s infinite;-webkit-animation:rainbowShen 0.5s infinite;'>周六</span>",
            version: '1.1',
        },
    };
});
