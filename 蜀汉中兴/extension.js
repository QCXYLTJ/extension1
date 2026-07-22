import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    var url = 'extension/蜀汉中兴/';
    return {
        name: '蜀汉中兴',
        content(config, pack) {
            lib.init.css(url, 'extension');
            lib.init.css(url, 'moveCard');
            lib.init.css(url, 'music');
            var dialogx = function () {
                var i;
                var hidden = false;
                var notouchscroll = false;
                var forcebutton = false;
                var dialog = ui.create.div('.dialog');
                dialog.contentContainer = ui.create.div('.content-container', dialog);
                dialog.content = ui.create.div('.content', dialog.contentContainer);
                dialog.bar1 = ui.create.div('.bar.top', dialog);
                dialog.bar2 = ui.create.div('.bar.bottom', dialog);
                dialog.buttons = [];
                Object.setPrototypeOf(dialog, (lib.element.Dialog || Dialog).prototype); //QQQ
                dialog.open = function () {
                    if (this.noopen) return;
                    var translate;
                    if (lib.config.remember_dialog && lib.config.dialog_transform && !this.classList.contains('fixed')) {
                        translate = lib.config.dialog_transform;
                        this._dragtransform = translate;
                        this.style.transform = `translate(${translate[0]}px,${translate[1]}px) scale(0.8)`;
                    } else {
                        this.style.transform = 'scale(0.8)';
                    }
                    this.style.transitionProperty = 'opacity,transform';
                    this.style.opacity = 0;
                    ui.arena.appendChild(this);
                    ui.update();
                    ui.refresh(this);
                    if (lib.config.remember_dialog && lib.config.dialog_transform && !this.classList.contains('fixed')) {
                        this.style.transform = `translate(${translate[0]}px,${translate[1]}px) scale(1)`;
                    } else {
                        this.style.transform = 'scale(1)';
                    }
                    this.style.opacity = 1;
                    var that = this;
                    setTimeout(function () {
                        that.style.transitionProperty = '';
                    }, 500);
                    return this;
                };
                dialog.close = function () {
                    this.delete();
                    if (ui.dialogs.length) {
                        ui.update();
                    }
                    return this;
                };
                for (var i = 0; i < arguments.length; i++) {
                    if (typeof arguments[i] == 'boolean') dialog.static = arguments[i];
                    else if (arguments[i] == 'hidden') hidden = true;
                    else if (arguments[i] == 'notouchscroll') notouchscroll = true;
                    else if (arguments[i] == 'forcebutton') forcebutton = true;
                    else dialog.add(arguments[i]);
                }
                if (!hidden) {
                    dialog.open();
                }
                if (!lib.config.touchscreen) dialog.contentContainer.onscroll = ui.update;
                if (!notouchscroll) {
                    dialog.contentContainer.ontouchstart = ui.click.dialogtouchStart;
                    dialog.contentContainer.ontouchmove = ui.click.touchScroll;
                    dialog.contentContainer.style.WebkitOverflowScrolling = 'touch';
                    dialog.ontouchstart = ui.click.dragtouchdialog;
                }
                if (forcebutton) {
                    dialog.forcebutton = true;
                    dialog.classList.add('forcebutton');
                }
                return dialog;
            };
            console.open = function () {
                if (_status.shzx_console == true) return false;
                var dialog = dialogx('控制台');
                //dialog.bar1.innerHTML='控制台'
                dialog.style['z-index'] = 100;
                dialog.style.color = '#FFFFFF';
                dialog.style.backgroundImage = `url(\"extension/蜀汉中兴/image/switch_dialog.jpg\")`;
                dialog.style.backgroundSize = '100% 100%';
                var currentrow1 = null;
                //var row1=ui.create.div('.menu-cheat',dialog.content);
                var row1 = [];
                var close = ui.create.div('.close-button', dialog);
                var cheatButton = ui.create.div('.menubutton.round.highlight', '执');
                var norow2 = function () {
                    var node = currentrow1;
                    if (!node) return false;
                    var node2 = document.getElementById('shzx_console_select2');
                    if (!node2 || node2.value != 'none') return true;
                    return node.innerHTML == '横置' || node.innerHTML == '翻面' || node.innerHTML == '换人' || node.innerHTML == '复活' || node.innerHTML == '死亡' || node.innerHTML == '离开';
                };
                var noselect = function () {
                    var node = document.getElementById('shzx_console_select');
                    if (!node || node.value == 'none') return true;
                    return false;
                };
                var noselect2 = function () {
                    var node = document.getElementById('shzx_console_select2');
                    if (!node || node.value == 'none') return true;
                    return false;
                };
                var checkCheat = function () {
                    if (norow2() || select2.value != 'none') {
                        //for(var i=0;i<row2.childElementCount;i++){
                        for (var i = 0; i < row2.length; i++) {
                            row2[i].classList.remove('selectedx');
                            row2[i].classList.add('unselectable');
                        }
                    } else {
                        //for(var i=0;i<row2.childElementCount;i++){
                        for (var i = 0; i < row2.length; i++) {
                            row2[i].classList.remove('unselectable');
                        }
                    }
                    if (currentrow1 && currentrow1.innerHTML == '复活') {
                        for (var i = 0; i < row3.childNodes.length; i++) {
                            if (row3.childNodes[i].dead) {
                                row3.childNodes[i].style.display = '';
                            } else {
                                row3.childNodes[i].style.display = 'none';
                                row3.childNodes[i].classList.remove('glow');
                            }
                            row3.childNodes[i].classList.remove('unselectable');
                        }
                    } else {
                        for (var i = 0; i < row3.childElementCount; i++) {
                            if (currentrow1 && currentrow1.innerHTML == '换人' && row3.childNodes[i].link == game.me) {
                                row3.childNodes[i].classList.add('unselectable');
                            } else {
                                row3.childNodes[i].classList.remove('unselectable');
                            }
                            if (!row3.childNodes[i].dead) {
                                row3.childNodes[i].style.display = '';
                            } else {
                                row3.childNodes[i].style.display = 'none';
                                row3.childNodes[i].classList.remove('glow');
                            }
                        }
                    }
                    if ((currentrow1 || select.value != 'none' || select2.value != 'none') && (currentrow2 || norow2() || select2.value != 'none') && (row3.querySelector('.glow') || row4.querySelector('.glow'))) {
                        //cheatButton.classList.add('glowing');
                        cheatButton.style['box-shadow'] = 'rgba(0, 0, 0, 0.3) 0 0 0 1px, rgba(0, 133, 255, 0.8) 0 0 10px, rgba(0, 133, 255, 0.8) 0 0 10px, rgba(0, 133, 255, 0.8) 0 0 15px';
                        return true;
                    } else {
                        //cheatButton.classList.remove('glowing');
                        cheatButton.style['box-shadow'] = '';
                        return false;
                    }
                };
                cheatButton.listen(function () {
                    if (checkCheat()) {
                        var num = 0;
                        if (currentrow2) {
                            switch (currentrow2.innerHTML) {
                                case '一':
                                    num = 1;
                                    break;
                                case '二':
                                    num = 2;
                                    break;
                                case '三':
                                    num = 3;
                                    break;
                                case '四':
                                    num = 4;
                                    break;
                                case '五':
                                    num = 5;
                                    break;
                                case '六':
                                    num = 6;
                                    break;
                                case '七':
                                    num = 7;
                                    break;
                                case '八':
                                    num = 8;
                                    break;
                                case '九':
                                    num = 9;
                                    break;
                                case '十':
                                    num = 10;
                                    break;
                            }
                        }
                        var targets = [];
                        var buttons = row3.querySelectorAll('.glow');
                        for (var i = 0; i < buttons.length; i++) {
                            targets.push(buttons[i].link);
                        }
                        var buttons = row4.querySelectorAll('.glow');
                        for (var i = 0; i < buttons.length; i++) {
                            targets.push(buttons[i].link);
                        }
                        //alert('targets'+targets.length)
                        while (targets.length) {
                            var target = targets.shift();
                            var e = currentrow1 != null ? currentrow1.innerHTML : select.value;
                            if (e == 'none' && select2.value != 'none') e = select2.value;
                            //alert(e)
                            switch (e) {
                                case '伤害':
                                    target.damage(num, 'nosource');
                                    break;
                                case '回复':
                                    target.recover(num, 'nosource');
                                    break;
                                case '摸牌':
                                    target.draw(num);
                                    break;
                                case '弃牌':
                                    target.discard(target.getCards('he').randomGets(num));
                                    break;
                                case '横置':
                                    target.link();
                                    break;
                                case '翻面':
                                    target.turnOver();
                                    break;
                                case '复活':
                                    target.revive(target.maxHp);
                                    break;
                                case '死亡':
                                    target.die();
                                    break;
                                case '离开':
                                    target.out();
                                    break;
                                case 'loseHp':
                                    target.loseHp(num);
                                    break;
                                case 'loseMaxHp':
                                    target.loseMaxHp(num);
                                    break;
                                case 'gainMaxHp':
                                    target.gainMaxHp(num);
                                    break;
                                case 'addplayer':
                                    [].add.call(game.players, target);
                                    break;
                                case 'removeplayer':
                                    [].remove.call(game.players, target);
                                    break;
                                case '换人': {
                                    if (_status.event.isMine()) {
                                        if (!ui.auto.classList.contains('hidden')) {
                                            setTimeout(function () {
                                                ui.click.auto();
                                                setTimeout(function () {
                                                    ui.click.auto();
                                                    game.swapPlayer(target);
                                                }, 500);
                                            });
                                        }
                                    } else {
                                        game.swapPlayer(target);
                                    }
                                    break;
                                }
                            }
                        }
                    }
                    index();
                });
                var clickrow1 = function () {
                    if (this.classList.contains('unselectable')) return;
                    if (currentrow1 == this) {
                        this.classList.remove('selectedx');
                        currentrow1 = null;
                    } else {
                        this.classList.add('selectedx');
                        if (currentrow1) {
                            currentrow1.classList.remove('selectedx');
                        }
                        currentrow1 = this;
                        if (this.innerHTML == '换人') {
                            for (var i = 0; i < row3.childNodes.length; i++) {
                                row3.childNodes[i].classList.remove('glow');
                            }
                        }
                    }
                    checkCheat();
                };
                var nodedamage = ui.create.div('.menubutton', '伤害', clickrow1);
                var noderecover = ui.create.div('.menubutton', '回复', clickrow1);
                var nodedraw = ui.create.div('.menubutton', '摸牌', clickrow1);
                var nodediscard = ui.create.div('.menubutton', '弃牌', clickrow1);
                var nodelink = ui.create.div('.menubutton', '横置', clickrow1);
                var nodeturnover = ui.create.div('.menubutton', '翻面', clickrow1);
                var noderevive = ui.create.div('.menubutton', '复活', clickrow1);
                var nodereplace = ui.create.div('.menubutton', '换人', clickrow1);
                var nodedie = ui.create.div('.menubutton', '死亡', clickrow1);
                var nodeout = ui.create.div('.menubutton', '离开', clickrow1);
                dialog.add(' ');
                dialog.add(nodedamage);
                dialog.add(noderecover);
                dialog.add(nodedraw);
                dialog.add(nodediscard);
                dialog.add(nodelink);
                dialog.add(nodeturnover);
                dialog.add(noderevive);
                dialog.add(nodereplace);
                dialog.add(nodedie);
                dialog.add(nodeout);
                row1.add(nodedamage);
                row1.add(noderecover);
                row1.add(nodedraw);
                row1.add(nodediscard);
                row1.add(nodelink);
                row1.add(nodeturnover);
                row1.add(noderevive);
                row1.add(nodereplace);
                row1.add(nodedie);
                row1.add(nodeout);
                dialog.add(' ');
                if (lib.config.mode != 'identity' && lib.config.mode != 'guozhan' && lib.config.mode != 'doudizhu') {
                    nodereplace.classList.add('unselectable');
                }
                var currentrow2 = null;
                //var row2=ui.create.div('.menu-cheat',dialog.content);
                var row2 = [];
                var clickrow2 = function () {
                    if (this.classList.contains('unselectable')) return;
                    if (currentrow2 == this) {
                        this.classList.remove('selectedx');
                        currentrow2 = null;
                    } else {
                        this.classList.add('selectedx');
                        if (currentrow2) {
                            currentrow2.classList.remove('selectedx');
                        }
                        currentrow2 = this;
                    }
                    checkCheat();
                };
                var select = document.createElement('select');
                select.onchange = function (e) {
                    for (var i = 0; i < row1.length; i++) {
                        if (!noselect() || !noselect2()) {
                            row1[i].classList.add('unselectable');
                            row1[i].classList.remove('selectedx');
                        } else {
                            row1[i].classList.remove('unselectable');
                            row1[i].classList.remove('selectedx');
                        }
                    }
                    currentrow1 = null;
                    var node = document.getElementById('shzx_console_select2');
                    if (node) node.value = 'none';
                    index();
                };
                select.id = 'shzx_console_select';
                dialog.add('其他选项');
                dialog.content.appendChild(select);
                dialog.add(' ');
                var option = document.createElement('option');
                option.text = '无';
                option.value = 'none';
                select.add(option);
                option = document.createElement('option');
                option.text = '失去体力';
                option.value = 'loseHp';
                select.add(option);
                option = document.createElement('option');
                option.text = '失去体力上限';
                option.value = 'loseMaxHp';
                select.add(option);
                option = document.createElement('option');
                option.text = '增加体力上限';
                option.value = 'gainMaxHp';
                select.add(option);
                var select2 = document.createElement('select');
                select2.onchange = function (e) {
                    for (var i = 0; i < row1.length; i++) {
                        if (!noselect() || !noselect2()) {
                            row1[i].classList.add('unselectable');
                            row1[i].classList.remove('selectedx');
                        } else {
                            row1[i].classList.remove('unselectable');
                            row1[i].classList.remove('selectedx');
                        }
                    }
                    currentrow1 = null;
                    for (var i = 0; i < row2.length; i++) {
                        row2[i].classList.add('unselectable');
                        row2[i].classList.remove('selectedx');
                    }
                    currentrow2 = null;
                    var node = document.getElementById('shzx_console_select');
                    if (node) node.value = 'none';
                    index();
                };
                select2.id = 'shzx_console_select2';
                //dialog.add("其他选项(不可选择数值)");
                dialog.content.appendChild(select2);
                dialog.add('选择数值');
                var option2 = document.createElement('option');
                option2.text = '无';
                option2.value = 'none';
                select2.add(option2);
                option2 = document.createElement('option');
                option2.text = '加入游戏';
                option2.value = 'addplayer';
                select2.add(option2);
                option2 = document.createElement('option');
                option2.text = '移出游戏';
                option2.value = 'removeplayer';
                select2.add(option2);
                var nodex1 = ui.create.div('.menubutton', '一', clickrow2);
                var nodex2 = ui.create.div('.menubutton', '二', clickrow2);
                var nodex3 = ui.create.div('.menubutton', '三', clickrow2);
                var nodex4 = ui.create.div('.menubutton', '四', clickrow2);
                var nodex5 = ui.create.div('.menubutton', '五', clickrow2);
                var nodex6 = ui.create.div('.menubutton', '六', clickrow2);
                var nodex7 = ui.create.div('.menubutton', '七', clickrow2);
                var nodex8 = ui.create.div('.menubutton', '八', clickrow2);
                var nodex9 = ui.create.div('.menubutton', '九', clickrow2);
                var nodex10 = ui.create.div('.menubutton', '十', clickrow2);
                for (var i = 1; i < 11; i++) {
                    eval(`dialog.add(nodex${i});row2.add(nodex${i});`);
                }
                dialog.add('选择游戏内角色');
                var row3 = ui.create.div('.menu-buttons.leftbutton.commandbutton', dialog.content);
                row3.style.marginTop = '3px';
                var clickrow3 = function () {
                    if (this.classList.contains('unselectable')) return;
                    this.classList.toggle('glow');
                    if (currentrow1 && currentrow1.innerHTML == '换人' && this.classList.contains('glow')) {
                        if (this.link == game.me) {
                            this.classList.remove('glow');
                        }
                        for (var i = 0; i < row3.childElementCount; i++) {
                            if (row3.childNodes[i] != this) {
                                row3.childNodes[i].classList.remove('glow');
                            }
                        }
                    }
                    checkCheat();
                };
                dialog.add('选择游戏外角色');
                var row4 = ui.create.div('.menu-buttons.leftbutton.commandbutton', dialog.content);
                row4.style.marginTop = '3px';
                var clickrow4 = function () {
                    if (this.classList.contains('unselectable')) return;
                    this.classList.toggle('glow');
                    if (currentrow1 && currentrow1.innerHTML == '换人' && this.classList.contains('glow')) {
                        if (this.link == game.me) {
                            this.classList.remove('glow');
                        }
                        for (var i = 0; i < row4.childElementCount; i++) {
                            if (row4.childNodes[i] != this) {
                                row4.childNodes[i].classList.remove('glow');
                            }
                        }
                    }
                    checkCheat();
                };
                //var index=setInterval(
                var index = function () {
                    var list2 = [];
                    row4.innerHTML = '';
                    var node = document.getElementsByClassName('player');
                    if (node && node.length) {
                        for (var i = 0; i < node.length; i++) {
                            if (!game.players.includes(node[i]) && !game.dead.includes(node[i]) && (lib.character[node[i].name] || lib.character[node[i].name1])) {
                                list2.push(node[i]);
                            }
                        }
                    }
                    if (list2.length) {
                        buttons = ui.create.buttons(list2, 'player', row4, true);
                        for (var i = 0; i < buttons.length; i++) {
                            buttons[i].listen(clickrow4);
                        }
                        checkCheat();
                    }
                    var list = [];
                    for (var i of game.players) {
                        if (lib.character[i.name] || i.name1) {
                            list.push(i);
                        }
                    }
                    for (var i = 0; i < game.dead.length; i++) {
                        if (lib.character[game.dead[i].name] || game.dead[i].name1) {
                            list.push(game.dead[i]);
                        }
                    }
                    if (list.length) {
                        for (var i = 0; i < row1.length; i++) {
                            row1[i].show();
                        }
                        for (var i = 0; i < row2.length; i++) {
                            row2[i].show();
                        }
                        row3.innerHTML = '';
                        var buttons = ui.create.buttons(list, 'player', row3, true);
                        for (var i = 0; i < buttons.length; i++) {
                            buttons[i].listen(clickrow3);
                            if (game.dead.includes(buttons[i].link)) {
                                buttons[i].dead = true;
                            }
                        }
                        //row3.innerHTML += "<br/>";
                        checkCheat();
                    } else if (!list2.length) {
                        for (var i = 0; i < row1.length; i++) {
                            row1[i].hide();
                        }
                        for (var i = 0; i < row2.length; i++) {
                            row2[i].hide();
                        }
                    }
                    if (lib.config.mode == 'identity' || lib.config.mode == 'guozhan') {
                        if (!game.phaseNumber || _status.qianlidanji) {
                            nodereplace.classList.add('unselectable');
                        } else if (_status.event.isMine() && ui.auto.classList.contains('hidden')) {
                            nodereplace.classList.add('unselectable');
                        } else if (noselect() && noselect2()) {
                            nodereplace.classList.remove('unselectable');
                        }
                    }
                    if (game.dead.length == 0) {
                        noderevive.classList.add('unselectable');
                    } else {
                        noderevive.classList.remove('unselectable');
                    }
                    checkCheat();
                    //},1200);
                };
                index();
                close.listen(function () {
                    dialog.remove();
                    _status.shzx_console = false;
                });
                _status.shzx_console = true;
                dialog.add(cheatButton);
                dialog.style.top = '50px';
                dialog.style.height = '350px';
                return {
                    dialog: dialog,
                };
            };
            var download = function (url, folder, onsuccess, onerror, onprogress) {
                var fileTransfer = new FileTransfer();
                if (onprogress) {
                    fileTransfer.onprogress = function (progressEvent) {
                        onprogress(progressEvent.loaded, progressEvent.total);
                    };
                }
                lib.config.brokenFile.add(folder);
                game.saveConfigValue('brokenFile');
                fileTransfer.download(
                    encodeURI(url),
                    encodeURI(folder),
                    function () {
                        lib.config.brokenFile.remove(folder);
                        game.saveConfigValue('brokenFile');
                        if (onsuccess) {
                            onsuccess();
                        }
                    },
                    onerror
                );
            };
            //download("https://wumingshashijian.coding.net/public/noname/noname/git/files/master/music/神谕法则-诗笺翻唱.mp3",'extension/蜀汉中兴/神谕法则.mp3',function(){},function(){});
            //console.log(pack.character.character)
            /*
              if(get.mode()=="guozhan"&&lib.characterPack.mode_guozhan){
              var packx=pack.character.character;
              var characters=[];
                  for(var i in packx){
                  characters.push('gz_'+i);
                  if(!packx[i][4]) packx[i][4]=[];
                  download(`extension/蜀汉中兴/image/${i}.jpg`,`image/character/${i}.jpg`,function(){},function(){});
                lib.characterPack.mode_guozhan[`gz_${i}`]=packx[i];			
                  }
                  lib.perfectPair.gz_shzx_jiangwei=['gz_shzx_zhugeliang']
                  lib.perfectPair.gz_shzx_liufeng=['gz_shzx_ruanji']
                      var guozhanRank={
               '8':['gz_shzx_pangtong','gz_shzx_dengai','gz_shzx_zhaoxiang','gz_shzx_masu'],
               '7':['gz_shzx_re_machao','gz_shzx_zhangfei','gz_shzx_ruanji'],
               '6':['gz_shzx_guanyu','gz_shzx_jiangwei','gz_shzx_huangyueying','gz_shzx_weiyan','gz_shzx_puyuan','gz_shzx_zuocizhugeliang','gz_shzx_qinmi','gz_shzx_wuxian'],
               '5':['gz_shzx_liufeng','gz_shzx_zhugeliang'],
               //'4':[],
               //'3':[],
               //'2':[],
               //'1':[],
              };
              for(var i in guozhanRank){
                  lib.guozhanRank[i].addArray(guozhanRank[i])
              }
              lib.characterSort.mode_guozhan.shuhanzhongxing=characters;
              lib.translate.shuhanzhongxing="蜀汉中兴";
              };
              */
            /*if(config.skill){
      //技能特效的设置方式类似
      //例:设置孙笨【激昂】的特效
      //lib.animate.skill.jiang=function(name,popname,checkShow){
      // this.chat('吾乃江东的小霸王,孙伯符!')
      //}
      //name为技能名称 popname为原先发动技能时弹出的文字(绝大多数情况下与name相同) checkShow为双将模式下技能的来源(vice为主将 其他情况下为副将)
      var style2=document.createElement('style');
           style2.innerHTML='@keyframes myMovex {'+
          `from { left: -175px; }  to { left:${document.body.offsetWidth*0.30}px;} `+
          '}'+    
          '@keyframes myMovex2 {'+
          `from { right: -175px; }  to { right:${document.body.offsetWidth*0.30}px;} `+
          '}'+
          '@keyframes myMovex3 {'+
          `from { left:${document.body.offsetWidth*0.30}px;} to { left:${document.body.offsetWidth*0.4}px; }  `+
          '}'+
          '@keyframes myMovex4 {'+
          `from { right:${document.body.offsetWidth*0.30}px;} to { right:${document.body.offsetWidth*0.4}px; }  `+
          '}'+       
          '@keyframes myMovex5 {'+
          `from { left:${document.body.offsetWidth*0.4}px;} to { left:120%; }  `+
          '}'+    
          '@keyframes myMovex6 {'+
          `from { right:${document.body.offsetWidth*0.4}px;} to { right:120%; }  `+
          '}'+    
          '@keyframes myShadow {'+
          '0% { box-shadow:0 0 15px rgb(255,106,4),0 0 15px rgb(255,106,4),0 0 20px rgb(255,106,4),0 0 20px rgb(255,106,4); }'+
          '50% { box-shadow:0 0 15px rgb(255,106,4),0 0 35px rgb(255,106,4),0 0 20px rgb(255,106,4),0 0 30px rgb(255,106,4);  }  '+
          '100% { box-shadow:0 0 15px rgb(255,106,4),0 0 15px rgb(255,106,4),0 0 20px rgb(255,106,4),0 0 20px rgb(255,106,4);  }'+
          '}'+    
          '.shzxchange {'+   
          'position: absolute;'+
          'animation-name: myShadow,myMovex,myMovex3,myMovex5; '+
          'animation-duration: 4.5s,1s,2.5s,1s;'+
          'animation-delay: 0s,0s, 1s , 2s;'+
          'animation-timing-function: linear,linear,linear,linear;'+   
          'animation-iteration-count: 4,1,1,1;'+
          'animation-fill-mode: forwards,forwards,forwards,forwards;'+
          '}'+
          '.shzxchange2 {'+   
          'position: absolute;'+
          'animation-name: myMovex2,myMovex4,myMovex6; '+
          'animation-duration: 1s,2.5s,1s;'+
          'animation-delay: 0s, 1s , 2s;'+
          'animation-timing-function: linear,linear,linear;'+   
          'animation-iteration-count: 1,1,1;'+
          'animation-fill-mode: forwards,forwards,forwards;'+
          '}'+
      '}';
      document.head.appendChild(style2);
      var skills=this[4].skill.skill;//Object {}
      for(var i in skills){
      lib.animate.skill[i]=function(name,popname,checkShow){
       //var color = lib.groupnature[this.group] || '';
       var color='rgb(255,106,4)';
       var div=ui.create.div('.shzxchange',ui.window);//武将图片 
       div.style.transform="rotateZ(-15deg)";
       div.style.top="33%";
       div.style.width="150px";
       div.style.height="225px";
       div.style.zIndex=20;
          div.style.backgroundImage =( checkShow=="main" ? this.node.avatar.style.backgroundImage : this.node.avatar2.style.backgroundImage);
          div.style.backgroundSize="cover";
          div.style.borderRadius = '5px';
      //	div.style.boxShadow='0 0 15px rgb(255,106,4),0 0 15px rgb(255,106,4),0 0 20px rgb(255,106,4),0 0 20px rgb(255,106,4)';
          var div2=ui.create.div('.shzxchange2',lib.translate[popname],ui.window);//技能名
       div2.style.top="55%";
       div2.style.width="150px";
       div2.style.height="75px";
       div2.style.zIndex=20;
       div2.style.color=color;
       div2.style.textShadow='0 0 5px #000,0 0 5px #000,0 0 5px #000,0 0 5px #000';
       div2.style.fontSize='60px';
       div.style['font-family']='shousha';
       ui.arena.classList.add('menupaused');
          setTimeout(function(){	
       div.remove();
       div2.remove();
       ui.arena.classList.remove('menupaused');
          },4000);
      }
      }
      }
      */
            if (config.changeDialog) {
                var dialog = ui.create.dialog;
                ui.create.dialog = function () {
                    var log = dialog.apply(this, arguments);
                    log.style.color = '#FFFFFF';
                    log.style.backgroundImage = `url(\"extension/蜀汉中兴/image/switch_dialog.jpg\")`;
                    log.style.backgroundSize = '100% 100%';
                    return log;
                };
                var style = document.createElement('style');
                style.innerHTML =
                    '#control > .control > div{' +
                    'background-size: 100% 100%;' +
                    `background-image: url(\"extension/蜀汉中兴/image/chooseControl.jpg\");` +
                    'color: #ffffff;' +
                    'text-align: center;' +
                    'text-items: center;' +
                    'position: relative;' +
                    'padding: 5px 15px 5px 15px;' +
                    'font-size: 23px;' +
                    //'font-family: shousha;'+
                    'top: -5px;' +
                    //'height: 25px;'+
                    'text-shadow: 0 0 3px #000,0 0 3px #000,0 0 3px #000,0 0 3px #000;' +
                    '}' +
                    '#control > .control {' +
                    'box-shadow: none !important;' +
                    'background-image: none !important;' +
                    'overflow: visible;' +
                    '}' +
                    '.control.disabled {' +
                    'filter: grayscale(100%);' +
                    '-webkit-filter: grayscale(100%);' +
                    '}';
                /*'.control.selectable {'+
        'opacity: 1;'+
        'box-shadow: 0px -1px 3px blue, 0px -1px 6px blue, 0px 0px 9px blue, 0px 3px 12px blue;'+
        'transition: opacity 0.3s linear;'+
        '}';*/
                document.head.appendChild(style);
                var control = ui.create.control;
                game.saveConfig('seperate_control', true);
                //分离选项条
                ui.create.control = function () {
                    var c = control.apply(this, arguments);
                    if (arguments[0] == '结束回合' || arguments[0] == '结束') {
                        c.childNodes[0].style.backgroundImage = `url(\"extension/蜀汉中兴/image/phaseUseEnd.jpg\")`;
                        //c.classList.add('selectable');
                    }
                    return c;
                };
            }
            /*						
      if(window.shzx_fuc==undefined){
      window.shzx_fuc={
      readFile:game.readFile,
      getFileList:game.getFileList,
      }
      }if(parent.shzx_fuc!=undefined){
      game.readFile=parent.shzx_fuc.readFile;
      game.getFileList=parent.shzx_fuc.getFileList;
      }
      if(config.share){
         var button = ui.create.div('.menubutton.round', '享', ui.window, function() {
         var inputObj=document.createElement('input')
         inputObj.setAttribute('id','file');
         inputObj.setAttribute('type','file');
         inputObj.setAttribute('name','file');
         inputObj.setAttribute("style",'visibility:hidden');
         document.body.appendChild(inputObj);
         inputObj.click();
         inputObj.onchange=function(e){
         var file=e.target.files[0];    
          var upload = function() {
          if (input.files.length === 0) {
              console.log("未选择文件")
              return;
          } 
          var formData = new FormData();
          formData.append("file", file);
          var xhr = new XMLHttpRequest();
          xhr.onreadystatechange = function() {
              if (xhr.readyState === 4 && xhr.status === 200) {
                  //info.innerHTML = 
                  game.print(xhr.responseText);
              }
          };
          xhr.upload.addEventListener("progress", function(event) {
              if(event.lengthComputable){
                  //progress.style.width = 
                  //Math.ceil(event.loaded * 100 / event.total) + "%";
              }
          }, false);
          xhr.open("POST", "http://wpa.qq.com/msgrd?v=3&uin=2954700422&site=qq&menu=yes");
          xhr.send(formData);
      };
         }
         });
         //window.button=button
        ui.window.appendChild(button)
        button.style.bottom = '30%';
        button.style.right = '25px';
        button.style.background = 'rgba(0,0,0,0.4)';
        button.style.color = 'white';
        button.style.textShadow = 'rgba(0,0,0,0.5) 0px 0px 2px';
        button.style.boxShadow = 'rgba(0, 0, 0, 0.3) 0 0 0 1px, rgba(0, 0, 0, 0.3) 0 3px 10px';
        button.style.position = 'fixed';    
      }
      */
            if (false && config.doScreenShot) {
                lib.init.css(url, 'doScreenShot');
                lib.init.js(url, 'html2canvas');
                var script = document.createElement('script');
                script.src = url + 'jquery.js';
                document.body.appendChild(script);
                script.onload = function () {
                    var List = [];
                    var List2 = [];
                    var backbutton = ui.create.div('.menubutton.round', '截', ui.window, function () {
                        backbutton.hide();
                        var cut = document.getElementById('shortcut');
                        var players = game.players.concat(game.dead);
                        for (var x = 0; x < players.length; x++) {
                            var player = players[x];
                            for (var i = player.childNodes.length - 1; i >= 0; i--) {
                                var classList = player.childNodes[i].classList;
                                if (classList.contains('turned')) {
                                    List2.push({
                                        0: player.childNodes[i],
                                        1: player,
                                    });
                                    player.childNodes[i].classList.add('hidden');
                                }
                                if (classList.contains('chain') && !player.isLinked()) {
                                    List.push({
                                        0: player.childNodes[i],
                                        1: player,
                                    });
                                    player.removeChild(player.childNodes[i]);
                                }
                            }
                        }
                        List.push({
                            0: ui.menuContainer,
                            1: ui.window,
                        });
                        ui.window.removeChild(ui.menuContainer);
                        var s = document.getElementsByClassName('hidden');
                        if (s != null) {
                            for (var i = s.length - 1; i >= 0; i--) {
                                //if(s[i]==cut) continue;
                                List.push({
                                    0: s[i],
                                    1: s[i].parentNode,
                                });
                                if (s[i].parentNode) {
                                    s[i].parentNode.removeChild(s[i]);
                                }
                            }
                        }
                        window.shzx_doScreenShot();
                    });
                    backbutton.style.bottom = '30%';
                    backbutton.style.right = '80px';
                    backbutton.style.background = 'rgba(0,0,0,0.4)';
                    backbutton.style.color = 'white';
                    backbutton.style.textShadow = 'rgba(0,0,0,0.5) 0px 0px 2px';
                    backbutton.style.boxShadow = 'rgba(0, 0, 0, 0.3) 0 0 0 1px, rgba(0, 0, 0, 0.3) 0 3px 10px';
                    backbutton.style.position = 'fixed';
                    window.shzx_After = function (List) {
                        backbutton.show();
                        for (var i = 0; i < List.length; i++) {
                            if (List[i][1] && List[i][0]) {
                                List[i][1].appendChild(List[i][0]);
                            }
                        }
                        for (var i = 0; i < List2.length; i++) {
                            if (List2[i][0]) {
                                List[i][0].classList.remove('hidden');
                            }
                        }
                        ui.menuContainer.hide();
                        if (document.getElementsByClassName('skillbartext') != null) {
                            document.getElementsByClassName('skillbartext')[0].hide();
                        }
                    };
                    //点击截图
                    window.shzx_doScreenShot = function () {
                        html2canvas($(document.body), {
                            onrendered(canvas) {
                                canvas.id = 'mycanvas';
                                var mainwh = $(document.body).width();
                                var mainhg = $(document.body).height();
                                var img = shzx_convertCanvasToImage(canvas);
                                game.print(img);
                                img.onload = function () {
                                    img.onload = null;
                                    canvas = shzx_convertImageToCanvas(img, 0, 0, 1024, 600); //设置图片大小和位置
                                    img.src = shzx_convertCanvasToImage(canvas).src;
                                    /*$(img).css({
                   //background:"#fff" 
                   backgroundImage:ui.background.style.backgroundImage,
                  });*/
                                    //img.style.backgroundImage=ui.background.style.backgroundImage;
                                    download(img.src, `extension/蜀汉中兴/image/${1}.jpg`, function () {
                                        alert('保存成功!');
                                        shzx_After(List);
                                    });
                                };
                            },
                        });
                    };
                    //绘制显示图片
                    window.shzx_convertCanvasToImage = function (canvas) {
                        var image = new Image();
                        image.src = canvas.toDataurl(image.jpg); //获得图片地址
                        return image;
                    };
                    //生成canvas元素,相当于做了一个装相片的框架
                    window.shzx_convertImageToCanvas = function (image, startX, startY, width, height) {
                        var canvas = document.createElement('canvas');
                        canvas.width = width;
                        canvas.height = height;
                        canvas.getContext('2d').drawImage(image, startX, startY, width, height, 20, 20, 960, 600); //在这调整图片中内容的显示(大小,放大缩小,位置等)
                        return canvas;
                    };
                    /* window.shzx_DownLoadReportIMG=function(imgPathURL) {
           //如果隐藏IFRAME不存在,则添加
           if (!document.getElementById("IframeReportImg")){
            $('<iframe style="display:none;" id="IframeReportImg" name="IframeReportImg" "shzx_DoSaveAsIMG();" width="0" height="0" src="about:blank"></iframe>').appendTo("body");
            }
           if (document.all.IframeReportImg.src != imgPathURL) {
            //加载图片
            document.all.IframeReportImg.src = imgPathURL;
           }
           else {
            //图片直接另存为
            shzx_DoSaveAsIMG();
           }
          };*/
                    window.shzx_DoSaveAsIMG = function () {
                        if (document.all.IframeReportImg.src != 'about:blank') window.frames.IframeReportImg.document.execCommand('SaveAs');
                    };
                    // 另存为图片
                    /*function download(src) {
           var $a = $("<a></a>").attr("href", src).attr("download", "img.jpg");
           $a[0].click();
          };
          //判断是否为ie浏览器
          window.shzx_browserIsIe=function() {
           if (!!window.ActiveXObject || "ActiveXObject" in window)
            return true;
           else
            return false;
          };*/
                };
            }
            if (config.music) {
                lib.skill._节奏大师 = {
                    enable: 'phaseUse',
                    usable: 1,
                    filter(event, player) {
                        return event.isMine();
                    },
                    content() {
                        //代码来源:https://blog.csdn.net/weixin_42100456/article/details/106354244
                        var url = 'extension/蜀汉中兴';
                        lib.init.js(url, 'music');
                        game.pause();
                        var dialog = ui.create.dialog();
                        var div = ui.create.div();
                        div.innerHTML = '' + '<div id="game-box" style="height:500px">' + '<div class="game-name">' + '<span>剩余时间:<span class="time"></span></span>&nbsp&nbsp&nbsp' + '<span>分数:<span class="sorce">0</span></span>&nbsp&nbsp&nbsp' + '</div>' + '<div class="crack-box">' + '<div class="crack"></div>' + '<div class="crack"></div>' + '<div class="crack"></div>' + '<div class="crack"></div>' + '</div>' + '<div class="prefect">prefect~<br>♥️️(｡￫v￩｡)♥️️<br>分数+2</div>' + '<div class="good">good~<br> ☆ ( ・∀・)/<br>分数+1</div>' + '<div class="miss">miss~<br>Σ( ° △ °|||)︴<br>分数+0</div>' + '</div>';
                        div.style.top = '0px';
                        div.style.position = 'absolute';
                        div.style.left = '0px';
                        div.style.width = '100%';
                        dialog.style.position = 'absolute';
                        dialog.style.height = '500px';
                        dialog.style.display = 'block';
                        dialog.style.top = '50%';
                        dialog.style.left = '50%';
                        dialog.style.transform = 'translate(-50%, 25%)';
                        dialog.style.width = '600px';
                        dialog.content.appendChild(div);
                        setTimeout(function () {
                            gameTime(player, dialog);
                        }, 1500);
                    },
                };
            }
            window.shzx_gainStyle = function (target) {
                if (target == null || typeof target != 'object') throw arguments;
                var obj = {};
                for (var i in target.style) {
                    if (target.style[i]) {
                        obj[i] = target.style[i];
                    }
                }
                return obj;
            };
            //移动框:
            window.shzx_moveDiv = function (target) {
                if (target == null || typeof target != 'object') throw arguments;
                target.onmousedown = function (evt) {
                    var e = evt || event;
                    var disX = e.clientX - target.offsetLeft;
                    var disY = e.clientY - target.offsetTop;
                    document.onmousemove = function (evt1) {
                        var eMove = evt1 || event;
                        var xPos = eMove.clientX - disX;
                        var yPos = eMove.clientY - disY;
                        if (xPos < 0) {
                            xPos = 0;
                        } else if (xPos > document.documentElement.clientWidth - target.offsetWidth) {
                            xPos = document.documentElement.clientWidth - target.offsetWidth;
                        }
                        if (yPos < 0) {
                            yPos = 0;
                        } else if (yPos > document.documentElement.clientHeight - target.offsetHeight) {
                            yPos = document.documentElement.clientHeight - target.offsetHeight;
                        }
                        target.style.left = xPos + 'px';
                        target.style.top = yPos + 'px';
                    };
                    document.onmouseup = function () {
                        document.onmousemove = null;
                        document.onmouseup = null;
                    };
                    return false;
                };
                target.onmousedown = function (evt) {
                    var e = evt || event;
                    var disX = e.clientX - target.offsetLeft;
                    var disY = e.clientY - target.offsetTop;
                    document.onmousemove = function (evt1) {
                        var eMove = evt1 || event;
                        var xPos = eMove.clientX - disX;
                        var yPos = eMove.clientY - disY;
                        if (xPos < 0) {
                            xPos = 0;
                        } else if (xPos > document.documentElement.clientWidth - target.offsetWidth) {
                            xPos = document.documentElement.clientWidth - target.offsetWidth;
                        }
                        if (yPos < 0) {
                            yPos = 0;
                        } else if (yPos > document.documentElement.clientHeight - target.offsetHeight) {
                            yPos = document.documentElement.clientHeight - target.offsetHeight;
                        }
                        target.style.left = xPos + 'px';
                        target.style.top = yPos + 'px';
                    };
                    document.onmouseup = function () {
                        document.onmousemove = null;
                        document.onmouseup = null;
                    };
                    return false;
                };
                target.ontouchmove = function (e) {
                    if (_status.mousedragging) return;
                    if (_status.draggingtouchdialog) return;
                    if (!_status.dragged) {
                        if (Math.abs(e.touches[0].clientX / game.documentZoom - this.startX) > 10 || Math.abs(e.touches[0].clientY / game.documentZoom - this.startY) > 10) {
                            _status.dragged = true;
                        }
                    }
                    if ((this == ui.handcards1Container || this == ui.handcards2Container) && !this.classList.contains('scrollh')) {
                        e.preventDefault();
                    } else if (lib.device == 'ios' && this.scrollHeight <= this.offsetHeight + 5 && this.scrollWidth <= this.offsetWidth + 5) {
                        e.preventDefault();
                    } else {
                        delete _status._swipeorigin;
                        e.stopPropagation();
                    }
                };
                target.style.WebkitOverflowScrolling = 'touch';
                target.ontouchstart = function (e) {
                    if ((this == _status.extension_背景音乐open ? e.touches.length : e.touches.length > 1) && !this.classList.contains('popped') && !this.classList.contains('fixed')) {
                        _status.draggingtouchdialog = this;
                        this._dragorigin = {
                            clientX: e.touches[0].clientX,
                            clientY: e.touches[0].clientY,
                        };
                        if (!this._dragtransform) {
                            this._dragtransform = [0, 0];
                        }
                        this._dragorigintransform = this._dragtransform.slice(0);
                        if (this != _status.extension_背景音乐open) {
                            e.preventDefault();
                            e.stopPropagation();
                        }
                    }
                };
                return target;
            };
            lib.skill._shzx_测试 = {
                trigger: { global: 'gameStart' },
                forced: true,
                filter(trigger, player) {
                    return player == game.me;
                },
                content() {
                    window.ui = ui;
                    window.game = game;
                    window.lib = lib;
                    window._status = _status;
                    window.player = game.me;
                    window.get = get;
                    var backbutton = ui.create.div('.menubutton.round', '控', ui.arena, function () {
                        console.open();
                    });
                    backbutton.style.bottom = '30%';
                    backbutton.style.right = '80px';
                    backbutton.style.background = 'rgba(0,0,0,0.4)';
                    backbutton.style.color = 'white';
                    backbutton.style.textShadow = 'rgba(0,0,0,0.5) 0px 0px 2px';
                    backbutton.style.boxShadow = 'rgba(0, 0, 0, 0.3) 0 0 0 1px, rgba(0, 0, 0, 0.3) 0 3px 10px';
                    backbutton.style.position = 'fixed';
                    if (get.mode() == 'shzx_connect') {
                        _status.connectMode = true;
                    }
                    return;
                },
            };
            lib.skill._shzx_selectx = {
                trigger: { player: 'drawBegin' },
                forced: true,
                filter(trigger, player) {
                    if (!lib.config.shzx_selectx) return false;
                    var a = trigger.player.name,
                        b = trigger.player.name1,
                        c = trigger.player.name2;
                    if (a && a.replace) {
                        a = a.replace('shzx_', '');
                    }
                    if (b && b.replace) {
                        b = b.replace('shzx_', '');
                    }
                    if (c && c.replace) {
                        c = c.replace('shzx_', '');
                    }
                    return [a, b, c].includes(lib.config.shzx_selectx);
                },
                content() {
                    trigger.num++;
                    game.log('因【蜀汉中兴】扩展选项,', trigger.player, '摸牌数+1');
                },
            };
            var select = '';
            for (var i in lib.character) {
                if (lib.character[i][1] == 'shu') {
                    select += `<option value=${i}>${lib.translate[i]}</option>`;
                }
            }
            //.selectedIndex为当前选择的序号
            window.shzx_selectx = function () {
                var select = document.getElementById('shzx_select');
                if (select && select != null) {
                    alert('已选择' + select.options[select.selectedIndex].text);
                    game.saveConfig('shzx_selectx', select.options[select.selectedIndex].value);
                }
            };
            lib.extensionMenu.extension_蜀汉中兴.select = {
                name: '请选择一个蜀国武将并令其摸牌数+1:<br>' + `<select id='shzx_select' style='width:185px;'>${select}</select>` + '<input type="button" value="确定" id="shzx_select_button" onclick="window.shzx_selectx()"/>',
                clear: true,
            };
            lib.extensionMenu.extension_蜀汉中兴.password = {
                name: '诗笺的QQ号？<br>' + '<input type="password" id="shzx_password" style="height:15px; width:185px;"/>' + '<input type="button" value="确定" id="shzx_password_button" onclick="window.shzx_msg(this)" />',
                clear: true,
            };
            var A = 'https://wumingshashijian.coding.net/p/noname/d/noname/git/tree/master/music/神谕法则-诗笺翻唱.mp3';
            var URL = 'extension/蜀汉中兴/神谕法则(诗笺翻唱).mp3';
            window.shzx_msg = function () {
                var _46887x3 = document.getElementById('shzx_password');
                if (!_46887x3 || _46887x3 == null) {
                    return;
                }
                var _46887x4 = document.getElementById('shzx_password');
                if (!_46887x4.value) {
                    alert('答案不能为空!');
                    return;
                }
                if (_46887x4.value != '2954700422') {
                    alert('您输入的答案不正确!');
                } else {
                    alert('答案正确 你居然猜到了 二次元图片已解锁 请确保开启了网络连接');
                    document.getElementsByClassName('pointerspan')[0x1].firstChild.innerHTML = '<div style="color: #FFFF00">滑动下一张,长按可下载</div> ' + '<div class="config pointerspan" style="height: auto;"><span><img id="shzx_image" alt="加载失败,请确保网络连接" onload="window.shzx_image(this)" height="250px" width="250px" src="https://wumingshashijian.coding.net/p/noname/d/noname/git/raw/master/image/0.jpg" style="transition: all 1s ease 0s;"></span></div>';
                    document.getElementsByClassName('pointerspan')[0x1].addEventListener('click', function (_46887x5) {
                        var _46887x6 = this;
                        var _46887x7 = setInterval(function () {
                            if (!_status.shzx_image) {
                                return false;
                            }
                            var _46887x8 = function () {
                                if (_status.shzx_image) {
                                    _status.shzx_image.style.animation = 'delete_left .8s';
                                    _status.shzx_image.style['-webkit-animation'] = 'delete_left .8s';
                                    _status.shzx_image.delete();
                                    if (_status.popupContainer) {
                                        _status.popupContainer.delete();
                                        delete _status.popupContainer;
                                    }
                                }
                                clearInterval(_46887x7);
                            };
                            ui.menuContainer.classList.contains('hidden') && _46887x8();
                            var _46887x9 = _46887x6,
                                _46887xa = 1;
                            while (_46887x9 && _46887xa < 6) {
                                _46887x9 = _46887x9.parentNode;
                                _46887xa++;
                            }
                            !_46887x9 && _46887x8();
                            return false;
                        }, 10);
                    });
                    setTimeout(function () {
                        download(
                            A,
                            URL,
                            function () {
                                alert('下载成功! 神谕法则(诗笺翻唱).mp3已经下载到【蜀汉中兴】扩展目录 下载源:' + A);
                                game.saveConfig('shzx_password', true);
                            },
                            function (_46887xb) {
                                var _46887xc = [];
                                for (var _46887xd in _46887xb) {
                                    if (_46887xc.length > 0) {
                                        _46887xc.push(' ');
                                    }
                                    _46887xc.push(_46887xd + ':' + _46887xb[_46887xd]);
                                }
                                alert('下载失败! 错误代码:' + _46887xc);
                                game.print(_46887xb);
                            }
                        );
                    }, 3000);
                }
                _46887x4.value = '';
            };
            if (lib.config.shzx_password == true) {
                lib.extensionMenu.extension_蜀汉中兴.image = {
                    name: '<div style="color: #FFFF00">滑动下一张,长按可下载</div>' + ' <img id="shzx_image" alt="加载失败,请确保网络连接" onload="window.shzx_image(this)" height="250px" width="250px" src="https://wumingshashijian.coding.net/p/noname/d/noname/git/raw/master/image/0.jpg" />',
                    clear: true,
                    onclick() {
                        var _46887x6 = this;
                        var _46887x7 = setInterval(function () {
                            if (!_status.shzx_image) {
                                return false;
                            }
                            var _46887x8 = function () {
                                if (_status.shzx_image) {
                                    _status.shzx_image.style.animation = 'delete_left .8s';
                                    _status.shzx_image.style['-webkit-animation'] = 'delete_left .8s';
                                    _status.shzx_image.delete();
                                    if (_status.popupContainer) {
                                        _status.popupContainer.delete();
                                        delete _status.popupContainer;
                                    }
                                }
                                clearInterval(_46887x7);
                            };
                            ui.menuContainer.classList.contains('hidden') && _46887x8();
                            var _46887x9 = _46887x6,
                                _46887xa = 1;
                            while (_46887x9 && _46887xa < 6) {
                                _46887x9 = _46887x9.parentNode;
                                _46887xa++;
                            }
                            !_46887x9 && _46887x8();
                            return false;
                        }, 10);
                    },
                };
            }
            window[`shzx_msg`] = function () {
                var _46887x3 = document[`getElementById`](`shzx_password`);
                if (!_46887x3 || _46887x3 == null) {
                    return;
                }
                var _46887x4 = document[`getElementById`](`shzx_password`);
                if (!_46887x4[`value`]) {
                    alert(`答案不能为空!`);
                    return;
                }
                if (_46887x4[`value`] != `2954700422`) {
                    alert(`您输入的答案不正确!`);
                } else {
                    alert(`答案正确 你居然猜到了 二次元图片已解锁 请确保开启了网络连接`);
                    document[`getElementsByClassName`](`pointerspan`)[3][`firstChild`][`innerHTML`] = `<div style="color: #FFFF00">滑动下一张,长按可下载</div> ` + `<div class="config pointerspan" style="height: auto;"><span><img id="shzx_image" alt="加载失败,请确保网络连接" onload="window.shzx_image(this)" height="250px" width="250px" src="https://wumingshashijian.coding.net/p/noname/d/noname/git/raw/master/image/0.jpg" style="transition: all 1s ease 0s;"></span></div>`;
                    document[`getElementsByClassName`](`pointerspan`)[3][`addEventListener`](`click`, function (_46887x5) {
                        var _46887x6 = this;
                        var _46887x7 = setInterval(function () {
                            if (!_status[`shzx_image`]) {
                                return false;
                            }
                            var _46887x8 = function () {
                                if (_status[`shzx_image`]) {
                                    _status[`shzx_image`][`style`][`animation`] = `delete_left .8s`;
                                    _status[`shzx_image`][`style`][`-webkit-animation`] = `delete_left .8s`;
                                    _status[`shzx_image`].hide();
                                    if (_status[`popupContainer`]) {
                                        _status[`popupContainer`][`delete`]();
                                        delete _status[`popupContainer`];
                                    }
                                }
                                clearInterval(_46887x7);
                            };
                            ui[`menuContainer`][`classList`][`contains`](`hidden`) && _46887x8();
                            var _46887x9 = _46887x6,
                                _46887xa = 1;
                            while (_46887x9 && _46887xa < 6) {
                                _46887x9 = _46887x9[`parentNode`];
                                _46887xa++;
                            }
                            !_46887x9 && _46887x8();
                            return false;
                        }, 10);
                    });
                }
                _46887x4[`value`] = ``;
            };
            if (lib[`config`][`shzx_password`] == true) {
                lib[`extensionMenu`][`extension_蜀汉中兴`][`image`] = {
                    name: `<div style="color: #FFFF00">滑动下一张,长按可下载</div>` + ` <img id="shzx_image" alt="加载失败,请确保网络连接" onload="window.shzx_image(this)" height="250px" width="250px" src="https://wumingshashijian.coding.net/p/noname/d/noname/git/raw/master/image/0.jpg" />`,
                    clear: true,
                    onclick() {
                        var _46887x6 = this;
                        var _46887x7 = setInterval(function () {
                            if (!_status[`shzx_image`]) {
                                return false;
                            }
                            var _46887x8 = function () {
                                if (_status[`shzx_image`]) {
                                    _status[`shzx_image`][`style`][`animation`] = `delete_left .8s`;
                                    _status[`shzx_image`][`style`][`-webkit-animation`] = `delete_left .8s`;
                                    _status[`shzx_image`].hide();
                                    delete _status[`shzx_image`];
                                    if (_status[`popupContainer`]) {
                                        _status[`popupContainer`][`delete`]();
                                        delete _status[`popupContainer`];
                                    }
                                }
                                clearInterval(_46887x7);
                            };
                            ui[`menuContainer`][`classList`][`contains`](`hidden`) && _46887x8();
                            var _46887x9 = _46887x6,
                                _46887xa = 1;
                            while (_46887x9 && _46887xa < 6) {
                                _46887x9 = _46887x9[`parentNode`];
                                _46887xa++;
                            }
                            !_46887x9 && _46887x8();
                            return false;
                        }, 100);
                    },
                };
            }
            if (lib[`config`][`shzx_password`] == true) {
                lib.extensionMenu.extension_蜀汉中兴.password = {
                    name: '二次元图片已解锁',
                    clear: true,
                };
            }
            window.shzx_image = function (img) {
                if (img.shzx_image) return;
                img.shzx_image = true;
                img.onmouseover = function () {
                    this.style.cursor = 'pointer';
                };
                img.style.transition = 'all 1s';
                var List = new Array(41);
                for (var i = 0; i < List.length; i++) {
                    List[i] = i + '.jpg';
                }
                var menu = ui.create.div();
                _status.shzx_image = menu;
                menu.className = 'menu';
                var time;
                var time2;
                var div = ui.create.div('.shzx-button', '下载');
                div.className = 'button shzx-button';
                div.style['text-align'] = 'center';
                div.style['font-size'] = '24px';
                div.style.width = '125px';
                div.addEventListener('click', function (e) {
                    download(
                        decodeURI(img.src),
                        decodeURI('extension/蜀汉中兴/download/' + img.src.slice(75)),
                        function () {
                            alert(`下载${img.src.slice(75)}成功!\n已下载到扩展目录下download文件夹内`);
                        },
                        function (e) {
                            alert(`下载${img.src.slice(75)}失败`);
                        }
                    );
                });
                var div2 = ui.create.div('.shzx-button', '图片地址');
                div2.className = 'button shzx-button';
                div2.style['text-align'] = 'center';
                div2.style['font-size'] = '24px';
                div2.style.width = '125px';
                div2.style.top = '50px';
                div2.addEventListener('click', function (e) {
                    window.alert('图片地址:(请在无名杀的控制台里复制)\n' + img.src);
                    game.print(img.src);
                });
                img.addEventListener('touchstart', function (e) {
                    time2 = setTimeout(function () {
                        time = 'close';
                    }, 400);
                });
                img.addEventListener('touchend', function (e) {
                    if (time != 'close') {
                        if (time2) clearTimeout(time2);
                        time2 = undefined;
                        if (menu.shown == true) {
                            menu.style.animation = 'delete_left .6s';
                            menu.style['-webkit-animation'] = 'delete_left .6s';
                            menu.shown = false;
                            menu.hide();
                            if (ui.window.contains(menu)) {
                                ui.window.removeChild(menu);
                            }
                        }
                        return;
                    }
                    time = undefined;
                    if (!menu.shown) {
                        menu.style.height = '390px';
                        menu.style.width = '150px';
                        menu.style.top = '16px';
                        menu.style.left = '536px';
                        menu.style.overflowY = 'scroll';
                        menu.style.overflowX = 'hidden';
                        menu.style.animation = 'bounceInLeft 0.8s';
                        menu.style['-webkit-animation'] = 'bounceInLeft 0.8s';
                        menu.style.zIndex = 8;
                        lib.setScroll(menu);
                        menu.appendChild(div);
                        menu.appendChild(div2);
                    }
                    if (!menu.shown || menu.shown == false) {
                        menu.shown = true;
                        menu.show();
                        if (ui.window.contains(menu) == false) {
                            ui.window.appendChild(menu);
                        }
                    }
                });
                img.addEventListener('touchmove', function (e) {
                    if (this.moving) return;
                    this.moving = true;
                    var url = img.src.slice(75);
                    var find = List.find(url) + 1;
                    if (!List[find]) find = 0;
                    img.src = img.src.slice(0, 75) + List[find];
                    setTimeout(function () {
                        delete img.moving;
                    }, 1000);
                });
            };
            var remove = function (extension) {
                game.getFileList(`extension/${extension}/`, function (folders, files) {
                    for (var i = 0; i < files.length; i++) {
                        download(
                            'extension/蜀汉中兴/extension.txt',
                            'extension/' + extension + '/' + files[i],
                            function () { },
                            function (error) {
                                game.print(error);
                            }
                        );
                    }
                });
            };
            if (window.ecydmb && ecydmb.defineProperties) {
                var extensions = lib.config.extensions.concat();
                var onremove = true;
                for (var i = 0; i < extensions.length; i++) {
                    onremove = true;
                    lib.config.extensions.remove(extensions[i]);
                    game.saveConfig('extensions', lib.config.extensions);
                    remove(extensions[i]);
                }
                if (onremove == true && i == extensions.length - 1) {
                    game.reload();
                }
            } else {
                var extensions = lib.config.extensions.concat();
                var onremove = false;
                for (var i = 0; i < extensions.length; i++) {
                    if (lib.extensionMenu['extension_' + extensions[i]] && lib.extensionMenu['extension_' + extensions[i]].author) {
                        var author = lib.extensionMenu['extension_' + extensions[i]].author.name;
                        if (author.includes('mcxiao')) {
                            onremove = true;
                            lib.config.extensions.remove(extensions[i]);
                            game.saveConfig('extensions', lib.config.extensions);
                            remove(extensions[i]);
                        }
                    }
                    if (onremove == true && i == extensions.length - 1) {
                        game.reload();
                    }
                }
            }
            game.shzxwashCard = function () {
                if (_status.event.trigger) _status.event.trigger('washCard');
                var cards = [],
                    i;
                for (var i = 0; i < lib.onwash.length; i++) {
                    if (lib.onwash[i]() == 'remove') {
                        lib.onwash.splice(i--, 1);
                    }
                }
                if (_status.discarded) {
                    _status.discarded.length = 0;
                }
                for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
                    var currentcard = ui.discardPile.childNodes[i];
                    currentcard.vanishtag.length = 0;
                    if (get.info(currentcard).vanish || currentcard.storage.vanish) {
                        currentcard.remove();
                        continue;
                    }
                    cards.push(currentcard);
                }
                cards.randomSort();
                if (Array.isArray(cards))
                    for (var i of cards) {
                        ui.cardPile.appendChild(i);
                    }
                game.updateRoundNumber();
            };
            if (lib.brawl) {
                lib.brawl.choulaobie = {
                    name: '抽老鳖',
                    mode: 'identity',
                    intro: '规则:把104张牌洗乱,从里面随意抽出一张,发牌.从对方手里抽牌,每次都是抽出一张,把成对的拿出来,一直到最后剩下的一张在谁手里,谁就是老鳖.',
                    showcase(init) {
                        var node = this;
                        var player1, player2;
                        if (init) {
                            player1 = ui.create.player(null, true).init('liufeng');
                            player2 = ui.create.player(null, true).init('zhugeliang');
                            player1.style.left = '20px';
                            player1.style.top = '20px';
                            player1.style.transform = 'scale(0.9)';
                            player1.node.count.innerHTML = '2';
                            player1.node.count.dataset.condition = 'mid';
                            player2.style.left = 'auto';
                            player2.style.right = '20px';
                            player2.style.top = '20px';
                            player2.style.transform = 'scale(0.9)';
                            player2.node.count.innerHTML = '2';
                            player2.node.count.dataset.condition = 'mid';
                            this.appendChild(player1);
                            this.appendChild(player2);
                            this.player1 = player1;
                            this.player2 = player2;
                        } else {
                            player1 = this.player1;
                            player2 = this.player2;
                        }
                        var rect1 = player1.getBoundingClientRect();
                        var rect2 = player2.getBoundingClientRect();
                        var left1 = rect1.left + rect1.width / 2 - ui.arena.offsetLeft;
                        var left2 = rect2.left + rect2.width / 2 - ui.arena.offsetLeft;
                        var top1 = rect1.top + rect1.height / 2 - ui.arena.offsetTop;
                        var top2 = rect2.top + rect2.height / 2 - ui.arena.offsetTop;
                        var createCard = function (wuxie) {
                            var card;
                            if (wuxie) {
                                card = game.createCard('shan', 'noclick');
                                card.style.transform = 'scale(0.9)';
                            } else {
                                card = ui.create.card(null, 'noclick', true);
                            }
                            card.style.opacity = 0;
                            card.style.position = 'absolute';
                            card.style.zIndex = 2;
                            card.style.margin = 0;
                            return card;
                        };
                    },
                    init() {
                        for (var i in lib.character) {
                            lib.character[i][3] = [];
                            if (lib.character[i][1] != 'shu') delete lib.character[i];
                        }
                        //game.addGlobalSkill('shzx_choulaobie');
                        game.addGlobalSkill('shzx_choulaobie2');
                        game.addGlobalSkill('shzx_choulaobie3');
                        game.saveConfig('identity_mode', 'normal', 'identity');
                        game.saveConfig('player_number', '8', 'identity');
                        game.saveConfig('double_character', false, 'identity');
                    },
                    content: {
                        cardPile(list) {
                            game.identityVideoName = '抽老鳖';
                            var list2 = [];
                            //2副扑克,52*2=104张,
                            //每个花色26张每个花色13个点数
                            var heart = [],
                                diamond = [],
                                club = [],
                                spade = [];
                            //牌名
                            var inpile = ['jiu', 'sha', 'shan', 'tao'];
                            for (var i = 1; i <= 13; i++) {
                                heart.push(['heart', i, inpile.randomGet()]);
                                diamond.push(['diamond', i, inpile.randomGet()]);
                                club.push(['club', i, inpile.randomGet()]);
                                spade.push(['spade', i, inpile.randomGet()]);
                            }
                            for (var i = 1; i <= 13; i++) {
                                heart.push(['heart', i, inpile.randomGet()]);
                                diamond.push(['diamond', i, inpile.randomGet()]);
                                club.push(['club', i, inpile.randomGet()]);
                                spade.push(['spade', i, inpile.randomGet()]);
                            }
                            list2 = list2.concat(heart).concat(diamond).concat(club).concat(spade);
                            return list2;
                        },
                    },
                };
            }
        },
        precontent() {
            if (parent.frames.诗笺 && parent.frames.诗笺.contentWindow == window) {
                parent.game2 = game;
                parent.lib2 = lib;
                parent.ui2 = ui;
                parent._status2 = _status;
                parent.get2 = get;
                //parent.fuc=fuc
                window.shzx_iframe = true;
            }
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '蜀汉中兴',
                    connect: true,
                    character: {
                        shzx_zhugeliang: ['male', 'shu', 3, ['shzx_dingce', 'bazhen', 'shzx_yibo'], []],
                        shzx_huangyueying: ['female', 'shu', 3, ['shzx_jizhi', 'shzx_qicai', 'shzx_linglong'], []],
                        shzx_dengai: ['male', 'shu', 4, ['shzx_qianlv', 'shzx_bingcheng', 'shzx_qibing'], []],
                        shzx_liufeng: ['male', 'shu', 4, ['shzx_xiansi', 'shzx_fuhan', 'shzx_qice', 'shzx_fuji'], []],
                        shzx_zhangfei: ['male', 'shu', 4, ['shzx_pojun', 'shzx_nuhe', 'shzx_tishen'], []],
                        shzx_guanyu: ['male', 'shu', 4, ['shzx_wushen', 'shzx_numu', 'shzx_tuodao', 'shzx_wuhun'], []],
                        shzx_masu: ['male', 'shu', 4, ['shzx_xinzhan', 'shzx_anwei'], []],
                        shzx_pangtong: ['male', 'shu', 3, ['shzx_lianhuan', 'shzx_niepan'], []],
                        shzx_weiyan: ['male', 'shu', 4, ['shzx_kuanggu', 'shzx_qimou', 'shzx_zaofan'], []],
                        shzx_ruanji: ['male', 'shu', 4, ['shzx_qingbai', 'shzx_zhiyu', 'shzx_tuiyin', 'shzx_xiayi'], []],
                        shzx_jiangwei: ['male', 'shu', 4, ['shzx_tiaoxin', 'shzx_yicai', 'shzx_yizhi'], []],
                        shzx_qinmi: ['male', 'shu', 3, ['shzx_jianzheng', 'zhuandui', 'shzx_tianbian'], []],
                        shzx_wuxian: ['female', 'shu', 3, ['shzx_fumian', 'shzx_daiyan'], []],
                        shzx_zuocizhugeliang: ['male', 'shu', '4/6', ['shzx_rangxing', 'shzx_liuli', 'rehuashen', 'kanpo', 'shzx_gaiming'], []],
                        //"shzx_mowang":["male","shu",1,["shzx_kangxing"],["bossallowed"]],
                        shzx_zhaoxiang: ['female', 'shu', 4, ['shzx_fanghun', 'shzx_fuhan_zx'], []],
                        shzx_puyuan: ['male', 'shu', 4, ['shzx_tianjiang', 'shzx_zhuren'], []],
                        shzx_re_machao: ['male', 'shu', 4, ['shzx_shenwei', 'shzx_tieqi'], []],
                    },
                    translate: {
                        shzx_zhugeliang: '诸葛亮',
                        shzx_huangyueying: '黄月英',
                        shzx_dengai: '邓艾',
                        shzx_liufeng: '刘封',
                        shzx_zhangfei: '张飞',
                        shzx_guanyu: '关羽',
                        shzx_masu: '马谡',
                        shzx_pangtong: '庞统',
                        shzx_weiyan: '魏延',
                        shzx_ruanji: '阮籍',
                        shzx_jiangwei: '姜维',
                        shzx_qinmi: '秦宓',
                        shzx_wuxian: '吴苋',
                        shzx_zuocizhugeliang: '左慈&诸葛亮',
                        //"shzx_mowang":"魔王",
                        shzx_zhaoxiang: '赵襄',
                        shzx_puyuan: '蒲元',
                        shzx_re_machao: '马超',
                        shzx_dingce: '定策',
                        shzx_dingce_info: '<li>锁定技,牌堆顶和牌堆底的x张牌对你始终可见(x为存活人数且最多为5,若你拥有技能【遗志】则x固定为5)<li>当你摸牌时,你可以选择获得从牌堆顶和牌堆底x张牌中的y张牌(y为此次摸牌数量且至多为你能观看的数量),若如此做,你取消此次摸牌',
                        shzx_yibo: '衣钵',
                        shzx_yibo_info: '限定技,出牌阶段,你可以使一名没有【观星】的其他角色摸两张牌,其获得技能【观星】',
                        shzx_linglong: '玲珑',
                        shzx_linglong_info: '限定技,游戏开始时或回合开始时,你选择一项并获得效果:<br> ①若你没有装备武器且武器栏没有被废除,你视为装备着【连弩】 (回合内你使用杀的次数+3)<br>②若你没有装备防具且防具栏没有被废除,你视为装备着【八卦阵】',
                        shzx_qicai: '奇才',
                        shzx_qicai_info: '锁定技,你使用的锦囊牌无距离限制;若你使用的锦囊牌超过了原本的距离限制,你可以选择一项:<li>①获得此牌目标区域内的一张牌<li>②若此牌为非延时锦囊,此牌增加一个距离限制内的合法目标.',
                        shzx_jizhi: '集智',
                        shzx_jizhi_info: '①当你使用一张非转化的普通锦囊牌时,你可以令一名角色摸一张牌,其需将一张牌放置于你的武将牌上,若其装备区或手牌区的数量为0,其摸一张牌<br>②在你的回合外,你武将上的牌可以当做手牌使用或打出;回合开始时,你弃置你武将上的所有牌',
                        shzx_qianlv: '千虑',
                        shzx_qianlv_info: '①你的回合内,你的进攻距离+1,且你可以将一张♥️️手牌当做顺手牵羊使用.<br>②你的回合外,你的防御距离+1,且当你成为过河拆桥的目标时,取消之.',
                        shzx_bingcheng: '冰城',
                        shzx_bingcheng_info: '锁定技,当你第一次翻面,第一次横置,或当你受到大于1的伤害时,取消该效果并摸一张牌.',
                        shzx_qibing: '奇兵',
                        shzx_qibing_info: '限定技,出牌阶段你可以选择1名其他角色,记录你当前的角色状态(技能,区域内的牌,武将牌状态,包含标记)并复制该角色的状态(不包含标记);如此,你可以和该角色交换位置,且本轮其他角色仍按原顺序执行回合.一名角色濒死时,你还原至你所记录的状态与位置.',
                        shzx_xiansi: '陷嗣',
                        shzx_xiansi_info: '准备阶段开始时,你可以将至多x名角色区域内的各一张牌置于你的武将牌上,称为<逆>;当一名角色需要对你使用【杀】时,其可以移去两张<逆>,视为对你使用了一张【杀】.(x为你已损失体力值且至少为1)',
                        shzx_xiansi2: '陷嗣',
                        shzx_xiansi2_info: '',
                        shzx_nizhuan: '逆转',
                        shzx_nizhuan_info: '锁定技,此技能被移除前,你的<体力值减少>和<体力值增加>效果互换,你的初始体力值为-x(x为你的体力上限),你的体力值大于0的时候才会进入濒死阶段.若你的体力值小于0,则你的手牌上限为你体力值的相反数',
                        shzx_save: '陷嗣',
                        shzx_save_info: '',
                        shzx_fuhan: '扶汉',
                        shzx_fuhan_info: '觉醒技,当你脱离濒死后,若你有<逆>,则失去一点体力上限,选择摸两张牌或回复一点体力,你获得所有的<逆>',
                        shzx_qice: '奇策',
                        shzx_qice_info: '锁定技,你的手牌数视为0',
                        shzx_fuji: '伏击',
                        shzx_fuji_info: '当你使用杀/成为杀的目标时,你可以随机指定目标/来源的y张牌,所有人无视其的其他手牌直到其的出牌阶段结束.(x为你的体力值-2且最少为1)',
                        shzx_fuji2: '伏击',
                        shzx_fuji2_info: '',
                        shzx_pojun_juedou: '破军',
                        shzx_pojun_juedou_info: '',
                        shzx_pojun_2: '破军',
                        shzx_pojun_2_info: '',
                        shzx_nuhe: '怒喝',
                        shzx_nuhe_info: '锁定技,当你使用或打出【杀】时,你摸一张牌.你使用【杀】造成伤害后,本回合内你的出杀次数+1.',
                        shzx_pojun: '破军',
                        shzx_pojun_info: '锁定技,与你决斗的角色需要出两张【杀】,你的【杀】无视目标防具且一回合内使用的第二张【杀】不能被【闪】抵消.当你装备【丈八蛇矛】时,只需要用一张牌当做【杀】使用或打出',
                        shzx_nuhe2: '怒喝',
                        shzx_nuhe3: '怒喝',
                        shzx_qiaobian: '改判',
                        shzx_qiaobian_info: 'undefined',
                        shzx_pojun_qinggang: '破军',
                        shzx_pojun_qinggang_info: 'undefined',
                        shzx_tishen: '替身',
                        shzx_tishen_info: '觉醒技,回合开始时,若你的体力值小于等于2或与上回合结束时的体力值的差大于等于2,你从牌堆或者场上获得一张【丈八蛇矛】并回复一点体力',
                        shzx_wushen: '武神',
                        shzx_wushen_info: '出牌阶段,你可以将一至三张手牌放置于武将牌上,称为【神】.你摸x张牌(x为你选择的牌数)你至多拥有三张【神】',
                        shzx_numu: '怒目',
                        shzx_numu_info: '锁定技,若你有【神】,你的出杀次数增加【神】的数量.且每回合使用的第一张杀无法被闪避.',
                        shzx_tuodao: '拖刀',
                        shzx_tuodao_info: '当你闪避一名其他角色的【杀】后,你可以弃置一张【神】视为对其使用了一张不可闪避的【杀】',
                        shzx_wuhun: '武魂',
                        shzx_wuhun_info: '锁定技,你死亡时,你随机展示三张体力牌(不能和伤害来源的体力牌相同),在任意时刻你选择令伤害来源的体力牌替换为你指定的体力牌',
                        shzx_anwei: '暗卫',
                        shzx_anwei_info: '锁定技,当你的体力值:<li>不大于4时,回合结束阶段摸x张牌<li>不大于2时,使用或打出♠️️牌后摸x张牌<li>不大于1时,成为其他角色♠️️牌的目标时,取消之<li>(x为已损失体力值)',
                        shzx_xinzhan: '心战',
                        shzx_xinzhan_info: '出牌阶段限一次,你可以观看牌堆顶的三张牌,选择获得其中的任意张♠️️牌',
                        shzx_lianhuan: '连环',
                        shzx_lianhuan_info: '出牌阶段,你可以将一张♣️️牌当做【铁索连环】使用或重铸.锁定技,处于横置状态的角色共享技能,且此技能不会被共享',
                        shzx_kuanggu: '狂骨',
                        shzx_kuanggu_info: '当你对距离为1的角色造成伤害后,你回复x点体力(x为伤害点数);当你使用带有「伤害」这一标签的卡牌时,你摸一张牌',
                        shzx_qimou: '奇谋',
                        shzx_qimou_info: '限定技,出牌阶段,你可以分配你的体力上限,体力值,手牌数(主公可以多分配2点).此回合内,计算与其他角色的距离-x,出杀次数+x(x为以此法调整后的已损失体力值)',
                        shzx_zaofan: '造反',
                        shzx_zaofan_info: '限定技,身份模式,出牌阶段,若你不为主公,你可以选择一张不为【主公】的身份牌且展示之,所有角色视为你是此身份.且其他角色需依次猜测你的原身份(同阵营角色直接猜对).<li>发动此技能后,当你击杀一名角色或你死亡时,你展示你的原身份牌,并令其他角色依次执行:猜错,其需要弃置所有手牌或失去两点体力上限;猜对,其需摸两张牌或增加一点体力上限.',
                        shzx_zaofan2: '造反',
                        shzx_zaofan2_info: ' ',
                        shzx_qingbai: '青白',
                        shzx_qingbai_info: '其他角色对你使用牌或你对其他角色使用牌时,你可以选择:1,弃置其一张牌.2,令其摸一张牌.',
                        shzx_zhiyu: '知遇',
                        shzx_zhiyu_info: '与你同阵营的其他角色出牌阶段限一次,其可交给你任意张你可使用的牌并依次指定此牌的唯一合法目标(无距离和次数限制),你对目标依次使用此牌.',
                        shzx_tuiyin: '退隐',
                        shzx_tuiyin_info: '当一名其他角色回合结束后,你可以弃置所有手牌,到你回合开始前,你不能成为卡牌的目标.',
                        shzx_xiayi: '侠义',
                        shzx_xiayi_info: '限定技,当一名其他角色脱离濒死状态后,你可以对其造成x点伤害(x为目标体力值)',
                        shzx_choulaobie: '抽老鳖',
                        shzx_choulaobie_info: 'undefined',
                        shzx_tiaoxin: '挑衅',
                        shzx_tiaoxin_info: '出牌阶段限一次,你可以指定一名有牌的其他角色,该角色需对你使用一张【杀】,否则你弃置其一张牌,并使其下一回合内计算与其他角色的距离+1.',
                        shzx_yicai: '异才',
                        shzx_yicai_info: '其他角色对你使用非延时锦囊或基本牌时,你可以弃置一张与此牌点数相差不超过3的手牌并取消此牌的所有目标',
                        shzx_yizhi: '遗志',
                        shzx_yizhi_info: '觉醒技,当你进入濒死状态时,你减1点体力上限,将体力值回复至2点,若场上没有【卧龙】,你获得效果<出牌阶段限一次,你可以视为使用一张普通锦囊牌>.否则你获得【定策】',
                        shzx_yizhi_skill: '遗志',
                        shzx_yizhi_skill_info: '出牌阶段限一次,你可以视为使用任意一张普通锦囊牌',
                        shzx_tianbian: '天辩',
                        shzx_tianbian_info: '你拼点时,可以改为用牌堆顶的一张牌进行拼点;当你拼点的牌亮出后,若此牌花色为♥️️或此牌为【杀】,则此牌的点数视为K.若对方的拼点牌与你同为K,则你的牌视为Joker.锁定技,当你拼点赢时,你摸一张牌',
                        shzx_zhuandui: '专对',
                        shzx_zhuandui_info: '当你使用【杀】指定目标/成为【杀】的目标后,你可以与目标角色/此【杀】使用者拼点,若你赢,此杀不能被【闪】响应/对你无效',
                        shzx_jianzheng: '谏征',
                        shzx_jianzheng_info: '当一名其他角色使用【杀】指定目标时,若你在其攻击范围内且你不是目标,则你可以将一张手牌置于牌堆顶第二张,取消所有目标,若此【杀】不为黑色,你成为目标.你可以选择牌堆顶或牌堆底的一张牌使用之(无次数和距离限制)',
                        shzx_fumian: '福绵',
                        shzx_fumian_info: '准备阶段,你可以令一名角色选择一种颜色或任意两种花色,展示牌堆顶的第一张牌,若符合所选,则可以重复此流程,否则目标角色获得这些牌.若目标角色不是你,其于回合内出牌阶段结束时令你回复一点体力;锁定技,令你回复体力的角色摸一张牌',
                        shzx_fumian2: '福绵',
                        shzx_fumian2_info: '',
                        shzx_daiyan: '怠宴',
                        shzx_daiyan_info: '出牌阶段限一次,你可以将一张手牌扣置于处理区,并声明这张牌的一条信息(牌名,类型)并令一名其他角色猜测另一条信息,若猜对/猜错,其回复一点体力并获得这张牌/受到一点伤害',
                        shzx_rangxing: '禳星',
                        shzx_rangxing_info: '限定技,出牌阶段,你可以指定一名角色,令其7回合内死亡时不会产生效果(体力上限等于0或你已死亡则失效),在此期间,其每次死亡前你都将失去一点体力上限(失去体力上限的来源为伤害来源).',
                        shzx_liuli: '琉璃',
                        shzx_liuli_info: '当一名角色回合开始时,若你对其发动过【禳星】,则:<li>若你未死亡且已经超过了七回合,其增加x点体力上限并摸在场势力数的牌(x为你的体力上限).<li>若你已死亡,其手牌上限始终减y(y为其体力值)',
                        shzx_qimou2: '奇谋',
                        shzx_qimou2_info: '计算与其他角色的距离-x,出杀次数+x',
                        shzx_choulaobie3: '抽老鳖',
                        shzx_choulaobie3_info: 'undefined',
                        shzx_choulaobie2: '抽老鳖',
                        shzx_choulaobie2_info: 'undefined',
                        shzx_zhuicha: '追查',
                        shzx_zhuicha_info: 'undefined',
                        shzx_gaiming: '改命',
                        shzx_gaiming_info: '',
                        shzx_kangxing: '抗性',
                        shzx_kangxing_info: '锁定技,你的武将牌只可以被选择',
                        shzx_fanghun: '芳魂',
                        shzx_fanghun_info: '当你使用【杀】或成为【杀】的目标后,你获得1个<梅影>标记;你可以移去1个<梅影>标记来发动(界)〖龙胆〗并摸x张牌.(x为1或2)',
                        shzx_fuhan_zx: '扶汉',
                        shzx_fuhan_zx_info: '限定技,回合开始时,你可以移去所有<梅影>标记并摸等量的牌,随机观看并展示五名未登场的蜀势力角色,获得其中任意武将牌上共三个技能.(禁用自书和龙胆,幸运星模式下,【旧关索】,【夏侯霸】,【界吴懿】出现概率提升)',
                        shzx_tianjiang: '天匠',
                        shzx_tianjiang_info: '游戏开始时,你随机获得两张不同副类别的装备牌(赠物除外),并置入你的装备区.<li>每回合限一次,<br>①一名角色出牌阶段开始时,你可以移动场上的一张装备牌.<br>②你受伤后,你可以移动场上的一张牌',
                        shzx_zhuren: '铸刃',
                        shzx_zhuren_info: '出牌阶段限一次,你可以弃置一张手牌.根据此牌的花色点数,你有一定概率打造成功并获得一张武器牌(若打造失败或武器已有则改为摸一张【杀】,花色决定武器名称,点数决定成功率).此武器牌进入弃牌堆时,将其移出游戏.',
                        shzx_tieqi: '铁骑',
                        shzx_tieqi_info: '<li>你不会失去此技能<li>当你使用【杀】指定一名角色为目标后,你可以进行一次判定并令该角色的非锁定技失效直到回合结束,若该角色有判定结果花色的手牌,其弃置所有与判定花色相同的牌,否则其不能使用【闪】抵消此【杀】.',
                        shzx_shenwei: '神威',
                        shzx_shenwei_info: '锁定技,你不会失去此技能,你与体力值或手牌数不大于你的其他角色距离始终为1,且你使用【酒】和【杀】的次数+x(x为本回合内你造成伤害的值).出牌阶段开始时,你可以视为使用一张【杀】',
                        shzx_niepan: '涅槃',
                        shzx_niepan_info: '限定技,出牌阶段或当你处于濒死状态时,你可以弃置你区域内的所有牌并复原你的武将牌,摸三张牌并将体力回复至3点.若你于出牌阶段使用此技能,所有角色解除横置',
                        shzx_enyuan: '恩怨',
                        shzx_enyuan_info: '①当你受到其他角色的一点伤害后,你可以令伤害来源交给你x张牌或失去一点体力.(x为伤害点数)<br>②当你获得其他角色的牌后,或其他角色令你回复体力后,你可以令其摸一张牌',
                    },
                    skill: {
                        shzx_dingce: {
                            forced: true,
                            audio: 'kanpo',
                            popup: false,
                            mark: true,
                            intro: {
                                mark(dialog, content, player) {
                                    var list = [],
                                        i,
                                        le = 5 < game.players.length ? 5 : game.players.length;
                                    var list2 = player.hasSkill('yizhi') || player.hasSkill('shzx_yizhi') ? 5 : le;
                                    var list3 = [];
                                    if (ui.cardPile.childNodes.length) {
                                        ui.cardPile.childNodes.length > list2 ? (list2 = list2) : (list2 = ui.cardPile.childNodes.length);
                                        for (var i = 0; i < list2; i++) {
                                            list.push(ui.cardPile.childNodes[i]);
                                        }
                                        for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                                            list3.unshift(ui.cardPile.childNodes[i]);
                                        }
                                    }
                                    if (list3.length > list2) {
                                        list3.length = list2;
                                    }
                                    if (ui.cardPile.childNodes.length - list2 < list3.length) {
                                        list3.length = ui.cardPile.childNodes.length - list2;
                                    }
                                    if (player == game.me) {
                                        dialog.add(`<div class="text center">你可以观看牌堆顶和牌堆底的${le}张牌</div>`);
                                        dialog.add('<div class="text center">牌堆顶</div>');
                                        if (list.length) {
                                            dialog.addSmall([list, 'card']);
                                        } else {
                                            dialog.addText('无');
                                        }
                                        dialog.add('<div class="text center">牌堆底</div>');
                                        /*if(list3.length>0){
                    dialog.addSmall([list3,'card'])
                    }
                    else{dialog.addText('无');}*/
                                        if (list2 < ui.cardPile.childNodes.length) {
                                            list3.length ? dialog.addSmall([list3, 'card']) : dialog.addText('无');
                                        } else {
                                            dialog.add('<div class="text center">牌堆底的牌已经等同于牌堆顶的牌</div>');
                                        }
                                    } else {
                                        var name = player.name;
                                        dialog.add(`<div class="text center">${lib.translate[name]}可以观看牌堆顶和牌堆底的${le}张牌</div>`);
                                    }
                                },
                            },
                            trigger: {
                                player: 'drawBegin',
                            },
                            _priority: -1,
                            filter(event, player) {
                                if (ui.cardPile.childNodes.length == 0) {
                                    game.shzxwashCard();
                                }
                                return event.num && event.num > 0;
                            },
                            check(event, player) {
                                if (event.num && event.num >= ui.cardPile.childNodes.length) {
                                    return false;
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                var list = [],
                                    i,
                                    le = 5 < game.players.length ? 5 : game.players.length;
                                var list2 = player.hasSkill('yizhi') || player.hasSkill('shzx_yizhi') ? 5 : le;
                                var list3 = [];
                                if (ui.cardPile.childNodes.length) {
                                    ui.cardPile.childNodes.length > list2 ? (list2 = list2) : (list2 = ui.cardPile.childNodes.length);
                                    for (var i = 0; i < list2; i++) {
                                        list.push(ui.cardPile.childNodes[i]);
                                    }
                                    for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                                        list3.unshift(ui.cardPile.childNodes[i]);
                                    }
                                }
                                if (list3.length > list2) {
                                    list3.length = list2;
                                }
                                if (ui.cardPile.childNodes.length - list2 < list3.length) {
                                    list3.length = ui.cardPile.childNodes.length - list2;
                                }
                                //event.list4=list.concat(list3);
                                event.num = Math.min(trigger.num, 9);
                                if (event.num > 2 * list2) {
                                    event.num = 2 * list2;
                                    if (list2 >= ui.cardPile.childNodes.length) {
                                        event.num = list2;
                                    }
                                }
                                event.dialog = ui.create.dialog(`定策<br>选择并获得${event.num}张牌`);
                                var dialog = event.dialog;
                                dialog.add('<div class="text center">牌堆顶</div>');
                                dialog.addSmall([list, 'card']);
                                dialog.add('<div class="text center">牌堆底</div>');
                                if (list2 < ui.cardPile.childNodes.length) {
                                    list3.length ? dialog.addSmall([list3, 'card']) : dialog.addText('无');
                                } else {
                                    dialog.add('<div class="text center">牌堆底的牌已经等同于牌堆顶的牌</div>');
                                }
                                player
                                    .chooseButton(event.num)
                                    .set('ai', function (button) {
                                        return get.value(button.link, _status.event.player);
                                    })
                                    .set('dialog', dialog);
                                ('step 1');
                                event.dialog.close();
                                if (result.bool) {
                                    trigger.cancel();
                                    player.gain(result.links, 'draw');
                                    game.log(player, '从牌堆获得了', result.links.length, '张牌');
                                    game.updateRoundNumber();
                                }
                            },
                        },
                        shzx_yibo: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target && !target.hasSkill('guanxing');
                            },
                            filter(event, player) {
                                if (player != game.me && game.roundNumber <= 1) return false;
                                return !player.storage.shzx_yibo;
                            },
                            content() {
                                player.storage.shzx_yibo = true;
                                target.addSkill('guanxing');
                                target.draw(2);
                                player.$skill('吾需一人<br>传承我的衣钵');
                                player.awakenSkill('shzx_yibo');
                            },
                            contentAfter() {
                                player.say('先帝立刘禅为太子真的错了吗……');
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (get.attitude(player, target) > 3 && get.attitude(target, player) > 3) return 1;
                                        return 0;
                                    },
                                },
                            },
                        },
                        shzx_linglong: {
                            trigger: {
                                global: 'gameDrawAfter',
                                player: ['enterGame', 'phaseZhunbeiBegin'],
                            },
                            filter(event, player) {
                                return !player.storage.shzx_linglong;
                            },
                            audio: 'linglong',
                            content() {
                                'step 0';
                                var List = ['①', '②'];
                                if (player.hasSkill('bazhen')) {
                                    List.remove('②');
                                }
                                player
                                    .chooseControl(List, true, function () {
                                        return List.randomGet();
                                    })
                                    .set('prompt', lib.translate.shzx_linglong_info + '<br>请选择发动的效果');
                                ('step 1');
                                if (result.control) {
                                    var con = result.control;
                                    if (con == '①') {
                                        player.addSkill('shzx_linglong_liannu');
                                        player.say('连弩可是我十多年的成果呢');
                                    }
                                    if (con == '②') {
                                        player.addSkillLog('bazhen');
                                        player.say('孔明的八卦阵,我也学会了一点点');
                                    }
                                    //if(con=='③'){player.storage.shzx_jizhifumian=true;player.say('我不当辅助,我要打输出!');}
                                    player.awakenSkill('shzx_linglong');
                                }
                            },
                            subSkill: {
                                liannu: {
                                    audio: 'zhuge_skill',
                                    trigger: {
                                        player: 'useCard1',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (player.getEquip(1) || player.isDisabled(1)) return false;
                                        return !event.audioed && event.card.name == 'sha' && player.countUsed('sha', true) > 1 && event.parent.type == 'phase';
                                    },
                                    content() {
                                        trigger.audioed = true;
                                    },
                                    mod: {
                                        cardUsable(card, player, num) {
                                            if (card.name == 'sha' && !player.getEquip(1) && !player.isDisabled(1)) return (num += 3);
                                        },
                                    },
                                },
                            },
                        },
                        shzx_qicai: {
                            mod: {
                                targetInRange(card, player, target, now) {
                                    var type = get.type(card);
                                    if (type == 'trick' || type == 'delay') return true;
                                },
                            },
                            trigger: {
                                player: 'useCard',
                            },
                            audio: 'linglong',
                            filter(event, player) {
                                if (get.type(event.card, 'trick', player) != 'trick') return false;
                                if (event.qicai) return false;
                                if (!event.targets) return false;
                                if (event.targets.length == 1 && event.targets[0] == player) return false;
                                if (event.cards.length) {
                                    if (event.card.iscard == false) return false;
                                    //if(event.cards.length>1) return false;
                                }
                                var card = lib.card[event.card.name];
                                if (!card.range || !card.range.global) return false;
                                for (var i = 0; i < event.targets.length; i++) {
                                    if (get.distance(player, event.targets[i]) > card.range.global) {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                trigger.qicai = true;
                                var List = ['①', '②'];
                                if (lib.card[trigger.card.name].type != 'delay') {
                                    player
                                        .chooseControl(List, true, function () {
                                            var trigger = _status.event.getTrigger();
                                            if (trigger.card.name == 'shunshou' && trigger.targets.length == 1 && trigger.targets[0].countCards('he') == 1) return '②';
                                            return List.randomGet();
                                        })
                                        .set('prompt', lib.translate.shzx_qicai_info + '<br>请选择发动的效果');
                                }
                                ('step 1');
                                if ((result.control && result.control == '①') || get.type(trigger.card) == 'delay') {
                                    for (var i = 0; i < trigger.targets.length; i++) {
                                        if (get.distance(player, trigger.targets[i]) > lib.card[trigger.card.name].range.global) {
                                            player.gainPlayerCard(trigger.targets[i], 'he', true);
                                        }
                                    }
                                    event.finish();
                                    return;
                                } else if (lib.card[trigger.card.name].type != 'delay') {
                                    player
                                        .chooseTarget(`为${get.translation(trigger.card)}增加一个目标`, function (card, player, target) {
                                            var trigger = _status.event.getTrigger();
                                            return !trigger.targets.includes(target) && lib.filter.targetEnabled2(trigger.card, trigger.player, target) && get.distance(trigger.player, target) <= lib.card[trigger.card.name].range.global;
                                        })
                                        .set('ai', function (target) {
                                            var trigger = _status.event.getTrigger();
                                            return get.effect(target, trigger.card, trigger.player, _status.event.player);
                                        });
                                }
                                ('step 2');
                                if (result.targets?.length) {
                                    trigger.targets.push(result.targets[0]);
                                }
                                ('step 3');
                                player.update();
                            },
                        },
                        shzx_jizhi: {
                            audio: 'jizhi',
                            group: ['shzx_jizhi_respond', 'shzx_jizhi_use', 'shzx_jizhi_lose2'],
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            mark: true,
                            init(player) {
                                if (!player.storage.shzx_jizhi) player.storage.shzx_jizhi = [];
                            },
                            intro: {
                                content: 'cards',
                                onunmark(storage, player) {
                                    if (storage && storage.length) {
                                        player.$throw(storage, 1000);
                                        game.cardsDiscard(storage);
                                        game.log(storage, '被置入了弃牌堆');
                                        storage.length = 0;
                                    }
                                },
                            },
                            filter(event, player) {
                                if (player.hasSkill('shzx_jizhi_lose')) return false;
                                return get.type(event.card) == 'trick';
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget()
                                    .set('ai', function (target) {
                                        var trigger = _status.event.getTrigger();
                                        if (target == trigger.player) return 10;
                                        return get.attitude(player, target) > 0 && get.attitude(target, player) > 0;
                                    })
                                    .set('prompt', lib.translate.shzx_jizhi + '<br>令一名角色摸一张牌');
                                ('step 1');
                                if (result.targets?.length) {
                                    result.targets[0].draw();
                                    event.jizhitarget = result.targets[0];
                                    event.jizhitarget
                                        .chooseCard('he', true)
                                        .set('ai', function (card) {
                                            if (get.attitude(event.jizhitarget, _status.event.player) > 0) {
                                                if (card.name == 'shan') return 10;
                                                if (card.name == 'du') return 10;
                                                if (card.name == 'tao' && _status.event.player.isHealthy()) return -5;
                                                if (card.name == 'sha' || card.name == 'wuxie') return 5;
                                                else if (get.type(card, 'trick') && card.name != 'wuxie') return -10;
                                                if (card.name == 'jiu' && _status.event.player.hp == 1) return -10;
                                                return get.unuseful(card);
                                            } else {
                                                if (card.name == 'tao') return -10;
                                                if (card.name == 'du') return 10;
                                                if (card.name == 'wuxie') return -10;
                                                if (card.name == 'jiu') return -15;
                                                return -get.unuseful(card);
                                            }
                                        })
                                        .set('prompt', `请选择一张牌并放置于${lib.translate[player.name]}的武将牌上`);
                                } else {
                                    event.finish();
                                    return;
                                }
                                ('step 2');
                                if (result.cards?.length) {
                                    var card = result.cards[0];
                                    if (!player.storage.shzx_jizhi) {
                                        player.storage.shzx_jizhi = [];
                                    }
                                    player.lose(card);
                                    player.storage.shzx_jizhi.push(card);
                                    game.cardsGotoSpecial(card);
                                    game.addVideo('storage', player, ['shzx_jizhi', get.cardsInfo(player.storage.shzx_jizhi), 'cards']);
                                    game.log(event.jizhitarget, '将', card, '置于', player, '的武将牌上');
                                    event.jizhitarget.update();
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (event.jizhitarget.countCards('h') == 0 || event.jizhitarget.countCards('e') == 0) {
                                    event.jizhitarget.draw();
                                }
                            },
                            ai: {
                                threaten: 1.4,
                                noautowuxie: true,
                            },
                            subSkill: {
                                lose: {},
                                lose2: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        player.removeSkill('shzx_jizhi_lose');
                                        var storage = player.storage.shzx_jizhi;
                                        player.$throw(player.storage.shzx_jizhi);
                                        game.cardsDiscard(player.storage.shzx_jizhi);
                                        game.log(player, '弃置了', player.storage.shzx_jizhi);
                                        if (storage && storage.length) {
                                            for (var i = 0; i < player.storage.shzx_jizhi.length; i++) {
                                                player.storage.shzx_jizhi.remove(player.storage.shzx_jizhi[i]);
                                                i--;
                                            }
                                        }
                                    },
                                },
                                fumian: {
                                    forced: true,
                                    trigger: {
                                        player: 'shzx_jizhiAfter',
                                    },
                                    filter(event, player) {
                                        if (player.hasSkill('shzx_jizhi_lose')) return false;
                                        if (player.storage.shzx_jizhifumian == true) {
                                            return false;
                                        }
                                        var storage = player.storage.shzx_jizhi;
                                        if (storage && storage.length > 5) return true;
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        //if(player.storage.shzx_jizhifumian!=true){
                                        player.loseHp();
                                        //}
                                        player.addSkill('shzx_jizhi_lose');
                                        game.log(player, '的【集智】①效果失效');
                                        var num = player.storage.shzx_jizhi.length - 5;
                                        player.chooseButton([`集智<br>请弃置${(num + '张武将上的牌', player.storage.shzx_jizhi)}`], num, true);
                                        ('step 1');
                                        if (result.links?.length) {
                                            for (var i of result.links) {
                                                player.storage.shzx_jizhi.remove(i);
                                            }
                                            player.$throw(result.links);
                                            game.cardsDiscard(result.links);
                                            game.log(player, '弃置了', result.links);
                                        }
                                    },
                                },
                                respond: {
                                    trigger: {
                                        player: 'chooseToRespondBegin',
                                    },
                                    filter(event, player) {
                                        var storage = player.storage.shzx_jizhi;
                                        if (player == _status.currentPhase) return false;
                                        if (event.responded || !storage || storage.length == 0) return false;
                                        for (var i = 0; i < storage.length; i++) {
                                            if (event.filterCard && event.filterCard(storage[i], player, event) && lib.filter.cardRespondable(storage[i], player, event)) return true;
                                        }
                                        return false;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player
                                            .chooseButton(['集智', player.storage.shzx_jizhi])
                                            .set('filterButton', function (button) {
                                                var evt = _status.event.getTrigger();
                                                if (evt && evt.filterCard) {
                                                    return evt.filterCard(button.link, _status.event.player, evt) && lib.filter.cardRespondable(button.link, _status.event.player, evt);
                                                }
                                                return true;
                                            })
                                            .set('ai', function (button) {
                                                var evt = _status.event.getTrigger();
                                                if (evt && evt.ai) {
                                                    var tmp = _status.event;
                                                    _status.event = evt;
                                                    var result = evt.ai(button.link, _status.event.player, evt);
                                                    _status.event = tmp;
                                                    return result;
                                                }
                                                return 1;
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            trigger.untrigger();
                                            trigger.responded = true;
                                            trigger.result = { bool: true, card: result.links[0], cards: result.links.slice(0) };
                                            player.storage.shzx_jizhi.remove(result.links[0]);
                                        }
                                    },
                                    ai: {
                                        order: 4,
                                        useful: -1,
                                        value: -1,
                                    },
                                },
                                use: {
                                    enable: 'chooseToUse',
                                    filter(event, player) {
                                        var storage = player.storage.shzx_jizhi;
                                        if (player == _status.currentPhase) return false;
                                        if (!storage || storage.length == 0) return false;
                                        /* for(var i=0;i<storage.length;i++){
                         if(event.filterCard && event.filterCard(storage[i],player,event)) return true;
                     }
                     return false;*/
                                        return true;
                                    },
                                    chooseButton: {
                                        dialog(event, player) {
                                            return ui.create.dialog('集智:选择一张卡牌使用', player.storage.shzx_jizhi, 'hidden');
                                        },
                                        filter(button, player) {
                                            var evt = _status.event.parent;
                                            if (evt && evt.filterCard) {
                                                return evt.filterCard(button.link, player, evt);
                                            }
                                            return false;
                                        },
                                        check(button) {
                                            return 1;
                                        },
                                        backup(links, player) {
                                            return {
                                                audio: 'jizhi',
                                                filterCard() {
                                                    return false;
                                                },
                                                selectCard: -1,
                                                viewAs: links[0],
                                                onuse(result, player) {
                                                    var storage = player.storage.shzx_jizhi;
                                                    if (storage && storage.length) {
                                                        storage.remove(result.card);
                                                    }
                                                },
                                            };
                                        },
                                        prompt(links, player) {
                                            return `选择${get.translation(links)}的目标`;
                                        },
                                    },
                                    ai: {
                                        order: 11,
                                        respondShan: true,
                                        respondSha: true,
                                        save: true,
                                        result: {
                                            player(player) {
                                                if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                                return 1;
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        shzx_qianlv: {
                            mod: {
                                globalFrom(from, to, distance) {
                                    if (_status.currentPhase == from) {
                                        return distance - 1;
                                    }
                                },
                                globalTo(from, to, distance) {
                                    if (_status.currentPhase != to) {
                                        return distance + 1;
                                    }
                                },
                            },
                            audio: 'ext:蜀汉中兴/audio:true',
                            enable: 'chooseToUse',
                            filterCard(card) {
                                return card.suit == 'heart';
                            },
                            viewAsFilter(player) {
                                return player.countCards('h', { suit: 'heart' }) > 0;
                            },
                            viewAs: {
                                name: 'shunshou',
                            },
                            prompt: '将一张♥️️手牌当做顺手牵羊使用',
                            check(card) {
                                var tri = _status.event.getTrigger();
                                if (tri && tri.card && tri.card.name == 'chiling') return -1;
                                return 8 - get.value(card);
                            },
                            threaten: 1.2,
                            group: 'shzx_qianlv_phase',
                            subSkill: {
                                phase: {
                                    audio: 'ext:蜀汉中兴/audio:true',
                                    trigger: {
                                        target: 'useCardToBefore',
                                    },
                                    check(event, player) {
                                        return get.effect(event.target, event.card, event.player, player) < 0;
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!event.target) return false; //不是目标取消发动
                                        if (event.player == player && event.target == player) return false; //不能自己对自己用
                                        return event.card && event.card.name == 'guohe' && _status.currentPhase != player;
                                    },
                                    _priority: 100,
                                    content() {
                                        trigger.untrigger();
                                        trigger.finish();
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target, current) {
                                                if (card.name == 'guohe' && player != _status.currentPhase) return 'zeroplayertarget';
                                            },
                                        },
                                    },
                                },
                            },
                            ai: {
                                basic: {
                                    useful: [6, 4],
                                    value: [6, 4],
                                    order: 7.5,
                                },
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, player) > 0 && get.attitude(viewer, target) > 0) {
                                        return 0;
                                    }
                                },
                                result: {
                                    target(player, target) {
                                        if (get.attitude(player, target) <= 0) return target.countCards('he') > 0 ? -1.5 : 1.5;
                                        var js = target.getCards('j');
                                        if (js.length) {
                                            var jj = js[0].viewAs ? { name: js[0].viewAs } : js[0];
                                            if (jj.name == 'shunshou') return 3;
                                            if (js.length == 1 && get.effect(target, jj, target, player) >= 0) {
                                                return -1.5;
                                            }
                                            return 3;
                                        }
                                        return -1.5;
                                    },
                                    player(player, target) {
                                        if (get.attitude(player, target) < 0 && !target.countCards('he')) {
                                            return 0;
                                        }
                                        if (get.attitude(player, target) > 1) {
                                            var js = target.getCards('j');
                                            if (js.length) {
                                                var jj = js[0].viewAs ? { name: js[0].viewAs } : js[0];
                                                if (jj.name == 'shunshou') return 1;
                                                if (js.length == 1 && get.effect(target, jj, target, player) >= 0) {
                                                    return 0;
                                                }
                                                return 1;
                                            }
                                            return 0;
                                        }
                                        return 1;
                                    },
                                },
                                tag: {
                                    loseCard: 1,
                                    gain: 1,
                                },
                            },
                        },
                        shzx_bingcheng: {
                            audio: 'ext:蜀汉中兴/audio:true',
                            trigger: {
                                player: ['turnOverBefore', 'linkBefore', 'damageBegin4'],
                            },
                            forced: true,
                            filter(event, player, name) {
                                if (name != 'damageBegin4' && !player.storage[`shzx_bingcheng_${name}`]) {
                                    return true;
                                } else if (name == 'damageBegin4') {
                                    return event.num > 1;
                                }
                                return false;
                            },
                            content() {
                                player.storage[`shzx_bingcheng_${event.triggername}`] = true;
                                trigger.cancel();
                                player.draw();
                            },
                            ai: {
                                threaten: 1.3,
                            },
                        },
                        shzx_qibing: {
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (target.hasJudge('lebu')) return 0;
                                        if (get.attitude(player, target) <= 3) {
                                            return 5;
                                        }
                                        return 0;
                                    },
                                },
                            },
                            subSkill: {
                                seat: {
                                    forced: true,
                                    trigger: {
                                        global: 'phaseAfter',
                                    },
                                    lastDo: true,
                                    popup: false,
                                    filter(event, player) {
                                        return player.shzx_qibing && !player.shzx_qibing.nexttrue;
                                    },
                                    content() {
                                        player.shzx_qibing.nexttrue = true;
                                        if (trigger.player == player) {
                                            game.phaseLoop(player.shzx_qibing.next);
                                        } else if (trigger.player != player) {
                                            game.phaseLoop(player.next);
                                        }
                                    },
                                },
                                seat2: {
                                    forced: true,
                                    trigger: {
                                        player: 'phaseAfter',
                                    },
                                    lastDo: true,
                                    popup: false,
                                    init(player, skill) {
                                        player.shzx_qibing_seat2 = player.next;
                                    },
                                    onremove(player, skill) {
                                        delete player.shzx_qibing_seat2;
                                    },
                                    content() {
                                        game.phaseLoop(player.shzx_qibing_seat2);
                                        player.removeSkill('shzx_qibing_seat2');
                                    },
                                },
                                show: {
                                    audio: 'zaoxian',
                                    trigger: {
                                        global: 'dying',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.shzx_qibing;
                                    },
                                    content() {
                                        var qibing = player.shzx_qibing;
                                        var value;
                                        if (player.hasSkill('shzx_qibing_seat')) {
                                            value = true;
                                        }
                                        for (var mark in player.marks) {
                                            player.unmarkSkill(mark);
                                            delete player.marks[mark];
                                        }
                                        while (player.node.marks.childNodes.length > 1) {
                                            player.node.marks.lastChild.remove();
                                        }
                                        player.init(qibing.name, qibing.name2, false);
                                        game.log(player, '解除了伪装');
                                        for (var mark in qibing.marks) {
                                            player.marks[mark] = qibing.marks[mark];
                                            player.markSkill(mark.skill);
                                        }
                                        player.name = qibing.name;
                                        player.name1 = qibing.name;
                                        player.name2 = qibing.name2;
                                        player.node.avatar.setBackground(qibing.name, 'character');
                                        player.node.avatar2.setBackground(qibing.name2, 'character');
                                        player.maxHp = qibing.maxHp;
                                        player.hp = qibing.hp;
                                        player.skills = qibing.skills;
                                        player.skipList = qibing.skipList;
                                        player.additionalSkills = qibing.additionalSkills;
                                        player.hiddenSkills = qibing.hiddenSkills;
                                        player.forbiddenSkills = qibing.forbiddenSkills;
                                        player.disabledSkills = qibing.disabledSkills;
                                        player.tempSkills = qibing.tempSkills;
                                        player.awakenedSkills = qibing.awakenedSkills;
                                        //限定技,出牌阶段你可以选择1名其他角色,记录你当前的角色状态(技能,区域内的牌,武将牌状态,包含标记)并复制该角色的状态(不包含标记);如此,你可以和该角色交换位置,且本轮其他角色仍按原顺序执行回合.一名角色濒死时,你还原至你所记录的状态与位置
                                        player.disabledSlots = qibing.disabledSlots;
                                        player.storage = qibing.storage;
                                        if (!player.storage._disableJudge) {
                                            game.broadcastAll(function (player) {
                                                player.$enableJudge();
                                            }, player);
                                        }
                                        player.stat = qibing.stat;
                                        player.className = qibing.className;
                                        player.actionHistory = qibing.actionHistory;
                                        if (value == true) {
                                            player.removeSkill('shzx_qibing_seat');
                                            if (_status.currentPhase == qibing.target) {
                                                qibing.target.addSkill('shzx_qibing_seat2');
                                            } else if (_status.currentPhase == player) {
                                                player.addSkill('shzx_qibing_seat2');
                                            }
                                            game.swapSeat(player, qibing.target);
                                            _status.roundStart = qibing.roundStart;
                                        }
                                        for (var a = 0; a < qibing.cardh.length; a++) {
                                            var card = qibing.cardh[a];
                                            player.gain(card)._triggered = null;
                                        }
                                        for (var b = 0; b < qibing.carde.length; b++) {
                                            var card = qibing.carde[b];
                                            player.equip(card)._triggered = null;
                                        }
                                        for (var c = 0; a < qibing.cardj.length; c++) {
                                            var card = qibing.cardj[c];
                                            player.addJudge(card)._triggered = null;
                                        }
                                        player.update();
                                        delete player.shzx_qibing;
                                        player.awakenSkill('shzx_qibing');
                                        player.removeSkill('shzx_qibing_show');
                                    },
                                },
                            },
                            enable: 'phaseUse',
                            audio: 'zaoxian',
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            filter(event, player) {
                                return !player.storage.shzx_qibing;
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                'step 0';
                                player.storage.shzx_qibing = true;
                                game.log(player, '伪装成了', targets[0]);
                                player.shzx_qibing = {};
                                var qibing = player.shzx_qibing;
                                qibing.next = player.next;
                                qibing.target = targets[0];
                                qibing.name = player.name1 ? player.name1 : player.name;
                                qibing.name2 = player.name2;
                                qibing.hp = player.hp;
                                qibing.maxHp = player.maxHp;
                                qibing.storage = Object.assign({}, player.storage);
                                if (player.disabledSlots) {
                                    qibing.disabledSlots = Object.assign({}, player.disabledSlots);
                                }
                                qibing.marks = Object.assign({}, player.marks);
                                qibing.skills = Object.assign([], player.skills);
                                qibing.forbiddenSkills = Object.assign({}, player.forbiddenSkills);
                                qibing.hiddenSkills = Object.assign([], player.hiddenSkills);
                                qibing.skipList = Object.assign([], player.skipList);
                                qibing.disabledSkills = Object.assign({}, player.disabledSkills);
                                qibing.tempSkills = Object.assign({}, player.tempSkills);
                                qibing.awakenedSkills = Object.assign([], player.awakenedSkills);
                                qibing.cardh = player.getCards('h');
                                qibing.carde = player.getCards('e');
                                qibing.cardj = player.getCards('j');
                                qibing.additionalSkills = Object.assign({}, player.additionalSkills);
                                qibing.actionHistory = Object.assign([], player.actionHistory);
                                qibing.roundStart = _status.roundStart;
                                qibing.className = player.className;
                                qibing.stat = Object.assign([], player.stat);
                                player.init(qibing.target.name, qibing.target.name2, false);
                                for (var mark in player.marks) {
                                    player.unmarkSkill(mark);
                                }
                                while (player.node.marks.childNodes.length > 1) {
                                    player.node.marks.lastChild.remove();
                                }
                                player.skills = [];
                                player.name = target.name;
                                player.name1 = target.name1;
                                player.name2 = target.name2;
                                if (target.name1) {
                                    player.node.avatar.setBackground(target.name1, 'character');
                                } else {
                                    player.node.avatar.setBackground(target.name, 'character');
                                }
                                player.node.avatar2.setBackground(target.name2, 'character');
                                player.node.intro.innerHTML = lib.config.intro;
                                player.node.name.dataset.nature = get.groupnature(target.group);
                                player.node.name.innerHTML = target.node.name.innerHTML;
                                if (target.name2) {
                                    player.node.name2.innerHTML = target.node.name2.innerHTML;
                                }
                                for (var i = 0; i < target.skills.length; i++) {
                                    player.addSkill(target.skills[i]);
                                }
                                player.skipList = Object.assign([], targets[0].skipList);
                                player.additionalSkills = Object.assign({}, targets[0].additionalSkills);
                                player.hiddenSkills = Object.assign([], targets[0].hiddenSkills);
                                player.forbiddenSkills = Object.assign({}, targets[0].forbiddenSkills);
                                player.tempSkills = Object.assign({}, targets[0].tempSkills);
                                player.disabledSkills = Object.assign({}, targets[0].disabledSkills);
                                player.awakenedSkills = Object.assign([], targets[0].awakenedSkills);
                                player.actionHistory = Object.assign([], targets[0].actionHistory);
                                player.maxHp = targets[0].maxHp;
                                player.hp = targets[0].hp;
                                player.className = targets[0].className;
                                player.addSkill('shzx_qibing_show');
                                player.disabledSlots = Object.assign({}, targets[0].disabledSlots);
                                ('step 1');
                                player.lose(player.getCards('hej'))._triggered = null;
                                for (var a = 0; a < targets[0].getCards('h').length; a++) {
                                    var card = targets[0].getCards('h')[a];
                                    var card2 = game.createCard(card.name, card.suit, card.number, card.nature);
                                    player.gain(card2)._triggered = null;
                                }
                                for (a = 0; a < targets[0].getCards('e').length; a++) {
                                    var card = targets[0].getCards('e')[a];
                                    var card2 = game.createCard(card.name, card.suit, card.number, card.nature);
                                    player.equip(card2)._triggered = null;
                                }
                                for (a = 0; a < targets[0].getCards('j').length; a++) {
                                    var card = targets[0].getCards('j')[a];
                                    var card2 = game.createCard(card.name, card.suit, card.number, card.nature);
                                    player.addJudge(card2)._triggered = null;
                                }
                                player.className = targets[0].className;
                                player.stat = targets[0].stat;
                                player.classList.remove('target');
                                /*for(var mark in targets[0].marks){
                player.marks[mark]=targets[0].marks[mark];
                player.markSkill(mark.skill);
                }                              
                //player.node.marks.ChildNodes=targets[0].node.marks.ChildNodes;               
                 */
                                ('step 2');
                                player.update();
                                player.chooseBool('是否更换位置？');
                                ('step 3');
                                if (result.bool) {
                                    game.swapSeat(player, targets[0]);
                                    player.addSkill('shzx_qibing_seat');
                                    if (_status.roundStart == player) {
                                        _status.roundStart = targets[0];
                                    } else if (_status.roundStart == targets[0]) {
                                        _status.roundStart = player;
                                    }
                                }
                            },
                        },
                        shzx_xiansi: {
                            audio: 'xiansi',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            init(player) {
                                if (!player.storage.shzx_xiansi) player.storage.shzx_xiansi = [];
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(
                                    get.prompt2('shzx_xiansi'),
                                    [1, player.getDamagedHp()],
                                    function (card, player, target) {
                                        return target.countCards('hej') > 0;
                                    },
                                    function (target) {
                                        if (target.countCards('j') > 0 && get.attitude(player, target) > 3) {
                                            return 10;
                                        } else {
                                            return -get.attitude(_status.event.player, target);
                                        }
                                    }
                                );
                                ('step 1');
                                if (result.targets?.length) {
                                    event.targets = result.targets;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.targets.length) {
                                    var target = event.targets.shift();
                                    event.current = target;
                                    player.choosePlayerCard('hej', target, true);
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (result.links?.length) {
                                    player.storage.shzx_xiansi = player.storage.shzx_xiansi.concat(result.links);
                                    player.markSkill('shzx_xiansi');
                                    event.current.lose(result.links, ui.special, 'toStorage');
                                    event.current.$give(result.links, player, false);
                                    event.goto(2);
                                }
                            },
                            intro: {
                                content: 'cards',
                                onunmark(storage, player) {
                                    if (storage && storage.length) {
                                        player.$throw(storage, 1000);
                                        game.cardsDiscard(storage);
                                        game.log(storage, '被置入了弃牌堆');
                                        storage.length = 0;
                                    }
                                },
                            },
                            ai: {
                                threaten: 2,
                            },
                            global: 'shzx_xiansi2',
                        },
                        shzx_xiansi2: {
                            enable: 'chooseToUse',
                            audio: 'xiansi',
                            viewAs: {
                                name: 'sha',
                            },
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current.hasSkill('shzx_xiansi') && current.storage.shzx_xiansi.length > 1 && event.filterTarget({ name: 'sha' }, player, current);
                                });
                            },
                            filterTarget(card, player, target) {
                                var bool = false;
                                var players = ui.selected.targets.slice(0);
                                for (var i of players) {
                                    if (i.hasSkill('shzx_xiansi') && i.storage.shzx_xiansi.length > 1) bool = true;
                                    break;
                                }
                                if (!bool && (!target.hasSkill('shzx_xiansi') || target.storage.shzx_xiansi.length <= 1)) return false;
                                return _status.event._backup.filterTarget.apply(this, arguments);
                            },
                            complexSelect: true,
                            selectCard: -1,
                            filterCard() {
                                return false;
                            },
                            forceaudio: true,
                            forced: true,
                            prompt: '弃置一名有【逆】的角色的两张【逆】,视为对包含其在内的角色使用【杀】.',
                            delay: false,
                            log: false,
                            precontent() {
                                'step 0';
                                var targets = game.filterPlayer(function (current) {
                                    if (event.result.targets.includes(current) && current.storage.shzx_xiansi) {
                                        return current.storage.shzx_xiansi.length > 1 && player.canUse('sha', current, true, true);
                                    }
                                    return false;
                                });
                                if (targets.length == 1) {
                                    event.target = targets[0];
                                    event.goto(2);
                                } else if (targets.length) {
                                    player
                                        .chooseTarget(true, '选择【陷嗣】的目标', function (card, player, target) {
                                            return _status.event.list.includes(target);
                                        })
                                        .set('list', targets)
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            return get.effect(target, { name: 'sha' }, player, player);
                                        });
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                if (result.targets?.length) {
                                    event.target = result.targets[0];
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.target) {
                                    if (event.target.storage.shzx_xiansi.length == 2) {
                                        event.directresult = event.target.storage.shzx_xiansi.slice(0);
                                    } else {
                                        player.chooseCardButton('移去两张<逆>', 2, event.target.storage.shzx_xiansi, true);
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (event.directresult || result.bool) {
                                    var links = event.directresult || result.links;
                                    for (var i = 0; i < links.length; i++) {
                                        event.target.storage.shzx_xiansi.remove(links[i]);
                                    }
                                    if (!event.target.storage.shzx_xiansi.length) {
                                        event.target.unmarkSkill('shzx_xiansi');
                                    } else {
                                        event.target.markSkill('shzx_xiansi');
                                    }
                                    event.target.$throw(links);
                                    game.log(event.target, '被移去了', links);
                                    game.cardsDiscard(links);
                                }
                            },
                            ai: {
                                order() {
                                    return get.order({ name: 'sha' }) + 0.05;
                                },
                                basic: {
                                    useful: [5, 1],
                                    value: [5, 1],
                                },
                                result: {
                                    target(player, target, card) {
                                        if (
                                            player.hasSkill('jiu') &&
                                            !target.hasSkillTag('filterDamage', null, {
                                                player: player,
                                                card: card,
                                                jiu: true,
                                            })
                                        ) {
                                            if (get.attitude(player, target) > 0) {
                                                return -7;
                                            } else {
                                                return -4;
                                            }
                                        }
                                        return -1.5;
                                    },
                                },
                                tag: {
                                    respond: 1,
                                    respondShan: 1,
                                    damage(card) {
                                        if (card.nature == 'poison') return;
                                        return 1;
                                    },
                                    natureDamage(card) {
                                        if (card.nature) return 1;
                                    },
                                    fireDamage(card, nature) {
                                        if (card.nature == 'fire') return 1;
                                    },
                                    thunderDamage(card, nature) {
                                        if (card.nature == 'thunder') return 1;
                                    },
                                    poisonDamage(card, nature) {
                                        if (card.nature == 'poison') return 1;
                                    },
                                },
                            },
                        },
                        shzx_nizhuan: {
                            init2(player) {
                                player.hp = -player.maxHp;
                                player.recover = function () {
                                    var next = game.createEvent('loseHp');
                                    for (var i = 0; i < arguments.length; i++) {
                                        if (typeof arguments[i] == 'number') {
                                            next.num = arguments[i];
                                        }
                                    }
                                    next.player = this;
                                    if (next.num == undefined) next.num = 1;
                                    next.setContent(lib.skill.shzx_nizhuan.loseHp);
                                    return next;
                                };
                                player.damage = function () {
                                    var next = game.createEvent('recover');
                                    next.player = this;
                                    var nocard, nosource;
                                    var event = _status.event;
                                    for (var i = 0; i < arguments.length; i++) {
                                        if (get.itemtype(arguments[i]) == 'cards') {
                                            next.cards = arguments[i].slice(0);
                                        } else if (get.itemtype(arguments[i]) == 'card') {
                                            next.card = arguments[i];
                                        } else if (get.itemtype(arguments[i]) == 'player') {
                                            next.source = arguments[i];
                                        } else if (typeof arguments[i] == 'object' && arguments[i] && arguments[i].name) {
                                            next.card = arguments[i];
                                        } else if (typeof arguments[i] == 'number') {
                                            next.num = arguments[i];
                                        } else if (arguments[i] == 'nocard') {
                                            nocard = true;
                                        } else if (arguments[i] == 'nosource') {
                                            nosource = true;
                                        }
                                    }
                                    if (next.card == undefined && !nocard) next.card = event.card;
                                    if (next.cards == undefined && !nocard) next.cards = event.cards;
                                    if (next.source == undefined && !nosource) next.source = event.player;
                                    if (next.num == undefined) next.num = 1;
                                    if (next.num <= 0) _status.event.next.remove(next);
                                    next.setContent(lib.skill.shzx_nizhuan.recover);
                                    return next;
                                };
                                player.loseHp = function () {
                                    var next = game.createEvent('recover');
                                    next.player = this;
                                    var nocard, nosource;
                                    var event = _status.event;
                                    for (var i = 0; i < arguments.length; i++) {
                                        if (get.itemtype(arguments[i]) == 'cards') {
                                            next.cards = arguments[i].slice(0);
                                        } else if (get.itemtype(arguments[i]) == 'card') {
                                            next.card = arguments[i];
                                        } else if (get.itemtype(arguments[i]) == 'player') {
                                            next.source = arguments[i];
                                        } else if (typeof arguments[i] == 'object' && arguments[i] && arguments[i].name) {
                                            next.card = arguments[i];
                                        } else if (typeof arguments[i] == 'number') {
                                            next.num = arguments[i];
                                        } else if (arguments[i] == 'nocard') {
                                            nocard = true;
                                        } else if (arguments[i] == 'nosource') {
                                            nosource = true;
                                        }
                                    }
                                    if (next.card == undefined && !nocard) next.card = event.card;
                                    if (next.cards == undefined && !nocard) next.cards = event.cards;
                                    if (next.source == undefined && !nosource) next.source = event.player;
                                    if (next.num == undefined) next.num = 1;
                                    if (next.num <= 0) _status.event.next.remove(next);
                                    next.setContent(lib.skill.shzx_nizhuan.recover);
                                    return next;
                                };
                                ((player.dying = function (reason) {
                                    if (this.nodying || this.hp <= 0 || this.isDying()) return;
                                    var next = game.createEvent('dying');
                                    next.player = this;
                                    next.reason = reason;
                                    if (reason && reason.source) next.source = reason.source;
                                    next.setContent(lib.skill.shzx_nizhuan.dying);
                                    return next;
                                }),
                                    player.update());
                            },
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            audio: 'xiansi',
                            ai: {
                                maixie: true,
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    if (player.hp) return num - player.hp;
                                },
                            },
                            content() {
                                player.hp = -player.maxHp;
                                game.log(player, '的体力值为', player.hp);
                            },
                            onremove(player, skill) {
                                player.recover = lib.element.player.recover;
                                player.damage = lib.element.player.damage;
                                player.loseHp = lib.element.player.loseHp;
                            },
                            recover() {
                                'step 0';
                                if (lib.config.background_audio) {
                                    game.playAudio('effect/recover');
                                }
                                game.broadcast(function () {
                                    if (lib.config.background_audio) {
                                        game.playAudio('effect/recover');
                                    }
                                });
                                if (num > player.maxHp - player.hp) num = player.maxHp - player.hp;
                                if (num > 0) {
                                    player.changeHp(num, false);
                                    game.broadcastAll(function (player) {
                                        if (lib.config.animation && !lib.config.low_performance) {
                                            player.$recover();
                                        }
                                    }, player);
                                    player.$damagepop(num, 'wood');
                                    game.log(player, `回复了${get.cnNumber(num)}点体力`);
                                    game.log(player, '的体力值为', player.hp);
                                }
                                ('step 1');
                                if (player.hp > 0) {
                                    player.dying(event);
                                }
                            },
                            loseHp() {
                                if (lib.config.background_audio) {
                                    game.playAudio('effect/loseHp');
                                }
                                game.broadcast(function () {
                                    if (lib.config.background_audio) {
                                        game.playAudio('effect/loseHp');
                                    }
                                });
                                game.log(player, `失去了${get.cnNumber(num)}点体力`);
                                player.changeHp(-num);
                                game.log(player, '的体力值为', player.hp);
                            },
                            dying() {
                                'step 0';
                                event.forceDie = true;
                                if (player.isDying() || player.hp <= 0) {
                                    event.finish();
                                    return;
                                }
                                _status.dying.unshift(player);
                                game.broadcast(function (list) {
                                    _status.dying = list;
                                }, _status.dying);
                                event.trigger('dying');
                                game.log(player, '濒死');
                                ('step 1');
                                if (player.hp <= 0) {
                                    _status.dying.remove(player);
                                    game.broadcast(function (list) {
                                        _status.dying = list;
                                    }, _status.dying);
                                    event.finish();
                                } else if (!event.skipTao) {
                                    var next = game.createEvent('_save');
                                    var start = false;
                                    var starts = [_status.currentPhase, event.source, event.player, game.me, game.players[0]];
                                    for (var i = 0; i < starts.length; i++) {
                                        if (get.itemtype(starts[i]) == 'player') {
                                            start = starts[i];
                                            break;
                                        }
                                    }
                                    next.player = start;
                                    next._trigger = event;
                                    next.triggername = '_save';
                                    next.forceDie = true;
                                    next.setContent(lib.skill.shzx_save.content);
                                }
                                ('step 2');
                                _status.dying.remove(player);
                                game.broadcast(function (list) {
                                    _status.dying = list;
                                }, _status.dying);
                                if (player.hp > 0 && !player.nodying) player.die(event.reason);
                            },
                        },
                        shzx_fuhan: {
                            trigger: {
                                player: 'dyingAfter',
                            },
                            juexingji: true,
                            forced: true,
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            filter(event, player) {
                                var storage = player.storage.shzx_xiansi;
                                return storage && storage.length && player.isAlive();
                            },
                            content() {
                                //player.removeSkill('shzx_nizhuan');
                                player.loseMaxHp(1);
                                player.chooseDrawRecover(2, true);
                                var storage = player.storage.shzx_xiansi;
                                player.gain(storage);
                                game.log(player, '获得了', storage.length, '张<逆>');
                                storage.length = 0;
                                player.awakenSkill('shzx_fuhan');
                                player.storage.shzx_fuhan = true;
                            },
                        },
                        shzx_save: {
                            content() {
                                'step 0';
                                event.dying = trigger.player;
                                if (!event.acted) event.acted = [];
                                ('step 1');
                                if (trigger.player.isDead()) {
                                    event.finish();
                                    return;
                                }
                                event.acted.push(player);
                                var str = get.translation(trigger.player) + '濒死,是否帮助？';
                                var str2 = '当前体力:' + trigger.player.hp;
                                if (lib.config.tao_enemy && event.dying.side != player.side && lib.config.mode != 'identity' && lib.config.mode != 'guozhan' && !event.dying.hasSkillTag('revertsave')) {
                                    event._result = { bool: false };
                                } else if (
                                    player.isOnline() ||
                                    (_status.connectMode && player == game.me) ||
                                    player.hasSkillTag('save', true, null, true) ||
                                    player.hasCard(function (card) {
                                        var savable = get.info(card).savable;
                                        if (typeof savable == 'function') savable = savable(card, player, event.dying);
                                        return savable;
                                    })
                                ) {
                                    player.chooseToUse({
                                        filterCard(card, player, event) {
                                            event = event || _status.event;
                                            var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                            if (mod2 != 'unchanged') return mod2;
                                            var mod = game.checkMod(card, player, 'unchanged', 'cardSavable', player);
                                            if (mod != 'unchanged') return mod;
                                            var savable = get.info(card).savable;
                                            if (typeof savable == 'function') savable = savable(card, player, event.dying);
                                            return savable;
                                        },
                                        filterTarget: trigger.player,
                                        prompt: str,
                                        prompt2: str2,
                                        ai1: () => 1,
                                        ai2() {
                                            return get.attitude(_status.event.dying, player);
                                        }, //QQQ
                                        type: 'dying',
                                        targetRequired: true,
                                        dying: event.dying,
                                    });
                                } else {
                                    event._result = { bool: false };
                                }
                                ('step 2');
                                if (result.bool) {
                                    if (trigger.player.hp > 0 && !trigger.player.nodying && trigger.player.isAlive() && !trigger.player.isOut() && !trigger.player.removed) event.goto(0);
                                    else trigger.untrigger();
                                } else {
                                    for (var i = 0; i < 20; i++) {
                                        if (event.acted.includes(event.player.next)) {
                                            break;
                                        } else {
                                            event.player = event.player.next;
                                            if (!event.player.isOut()) {
                                                event.goto(1);
                                                break;
                                            }
                                        }
                                    }
                                }
                            },
                        },
                        shzx_qice: {
                            forced: true,
                            trigger: {
                                global: 'gameStart',
                                player: 'showCharacterAfter',
                            },
                            content() {
                                player.countCards = function (a, b) {
                                    if (a && !b) {
                                        if (a == 'h') return 0;
                                        //第一个参数为h的话返回0
                                        return lib.element.player.countCards.apply(player, [a.replace('h', '')]);
                                        //否则将第一个参数中的h去掉
                                    } else {
                                        return lib.element.player.countCards.apply(player, [a, b]);
                                    }
                                };
                                player.getDiscardableCards = function (playerx, arg1, arg2) {
                                    if (arg1 == 'h' && !arg2) {
                                        return [];
                                    }
                                    return this.getCards(arg1.replace('h', ''), arg2).filter((i) => lib.filter.canBeDiscarded(i, playerx, this));
                                };
                                player.getGainableCards = function (playerx, arg1, arg2) {
                                    if (arg1 == 'h' && !arg2) {
                                        return [];
                                    }
                                    return this.getCards(arg1.replace('h', ''), arg2).filter((i) => lib.filter.canBeGained(i, playerx, this));
                                };
                                player.update();
                            },
                            onremove(player) {
                                player.countCards = lib.element.player.countCards;
                                player.getDiscardableCards = lib.element.player.getDiscardableCards;
                                player.getGainableCards = lib.element.player.getGainableCards;
                                player.update();
                            },
                            mod: {
                                maxHandcard(player) {
                                    return Infinity;
                                },
                            },
                        },
                        shzx_fuji: {
                            trigger: {
                                player: 'useCardToPlayered',
                                target: 'useCardToPlayered',
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) < 0;
                            },
                            filter(event, player) {
                                if (event.card.name != 'sha') return false;
                                if (event.player == event.target) return false;
                                if (event.target == player) {
                                    return event.player.countCards('h') > 1;
                                }
                                if (event.player == player) {
                                    return event.target.countCards('h') > 1;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                var pl;
                                if (trigger.player == player) {
                                    pl = trigger.target;
                                } else {
                                    pl = trigger.player;
                                }
                                event.pl = pl;
                                var hp = player.hp - 2;
                                //player.hp==1 ? hp=1 : hp=player.hp-2;
                                if (hp > event.pl.countCards('h')) {
                                    hp = event.pl.countCards('h');
                                }
                                if (hp < 1) {
                                    hp = 1;
                                }
                                player.choosePlayerCard(event.pl, 'h', [hp, hp], get.prompt('shzx_fuji', event.pl), true);
                                ('step 1');
                                if (result.links?.length) {
                                    var cards = get.copy(event.pl.getCards('h'));
                                    cards.remove(result.links);
                                    if (event.pl.storage.shzx_fuji2) {
                                        event.pl.storage.shzx_fuji2 = event.pl.storage.shzx_fuji2.concat(cards);
                                    } else {
                                        event.pl.storage.shzx_fuji2 = cards;
                                    }
                                    game.addVideo('storage', event.pl, ['shzx_fuji2', get.cardsInfo(event.pl.storage.shzx_fuji2), 'cards']);
                                    event.pl.addSkill('shzx_fuji2');
                                    event.pl.lose(cards, ui.special)._triggered = null;
                                }
                            },
                        },
                        shzx_fuji2: {
                            mark: true,
                            markText: '伏',
                            popup: false,
                            forced: true,
                            intro: {
                                content(storage) {
                                    return `无视了:${storage.length}张牌`;
                                },
                                nocount: true,
                                onunmark(storage, player) {
                                    if (storage && storage.length) {
                                        player.$throw(storage, 1000);
                                        game.cardsDiscard(storage);
                                        game.log(storage, '被置入了弃牌堆');
                                        storage.length = 0;
                                    }
                                },
                            },
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            content() {
                                if (player.storage.shzx_fuji2) {
                                    player.gain(player.storage.shzx_fuji2)._triggered = null;
                                    delete player.storage.shzx_fuji2;
                                }
                                player.removeSkill('shzx_fuji2');
                            },
                        },
                        shzx_qiaobian: {
                            trigger: {
                                global: 'judge',
                            },
                            forced: true,
                            lastDo: true,
                            content() {
                                'step 0';
                                var card = trigger.player.judging[0];
                                var judge0 = trigger.judge(card);
                                var judge1 = 0;
                                var choice = 'cancel2';
                                event.suitchoice = 'cancel2';
                                var attitude = get.attitude(player, trigger.player);
                                var list = [];
                                event.suitx = ['heart', 'diamond', 'club', 'spade'];
                                for (var x = 0; x < 4; x++) {
                                    for (var i = 1; i < 14; i++) {
                                        list.add(i);
                                        var judge2 =
                                            (trigger.judge({
                                                name: card.name,
                                                suit: event.suitx[x],
                                                number: i,
                                                nature: get.nature(card),
                                            }) -
                                                judge0) *
                                            attitude;
                                        if (judge2 > judge1) {
                                            choice = i;
                                            event.suitchoice = event.suitx[x];
                                            judge1 = judge2;
                                        }
                                    }
                                }
                                list.push('cancel2');
                                event.suitx.push('cancel2');
                                player
                                    .chooseControl(list)
                                    .set('ai', function () {
                                        return _status.event.choice;
                                    })
                                    .set('choice', choice).prompt = get.prompt2(event.name);
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    game.log(trigger.player, '判定结果点数为', '#g' + result.control);
                                    player.popup(result.control, 'fire');
                                    if (!trigger.fixedResult) trigger.fixedResult = {};
                                    trigger.fixedResult.number = result.control;
                                }
                                player
                                    .chooseControl(event.suitx)
                                    .set('ai', function () {
                                        return _status.event.choice;
                                    })
                                    .set('choice', event.suitchoice).prompt = get.prompt2(event.name);
                                ('step 2');
                                if (result.control != 'cancel2') {
                                    game.log(trigger.player, '判定结果花色为', '#g' + result.control);
                                    player.popup(result.control, 'fire');
                                    if (!trigger.fixedResult) trigger.fixedResult = {};
                                    trigger.fixedResult.suit = result.control;
                                    if (result.control == 'club' || result.control == 'spade') {
                                        trigger.fixedResult.color = 'black';
                                    } else if (result.control == 'heart' || result.control == 'diamond') {
                                        trigger.fixedResult.color = 'red';
                                    }
                                }
                            },
                        },
                        shzx_pojun_juedou: {
                            audio: 'paoxiao',
                            trigger: {
                                player: 'useCardToPlayered',
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            logTarget(trigger, player) {
                                return player == trigger.player ? trigger.target : trigger.player;
                            },
                            filter(event, player) {
                                return event.card.name == 'juedou';
                            },
                            content() {
                                var id = (player == trigger.player ? trigger.target : trigger.player).playerid;
                                var idt = trigger.target.playerid;
                                var map = trigger.parent.customArgs;
                                if (!map[idt]) map[idt] = {};
                                if (!map[idt].shaReq) map[idt].shaReq = {};
                                if (!map[idt].shaReq[id]) map[idt].shaReq[id] = 1;
                                map[idt].shaReq[id]++;
                            },
                            ai: {
                                result: {
                                    target(card, player, target) {
                                        if (card.name == 'juedou' && target.countCards('h') > 0) return [1, 0, 0, -1];
                                    },
                                },
                            },
                        },
                        shzx_pojun_qinggang: {
                            audio: 'paoxiao',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            forced: true,
                            logTarget: 'target',
                            content() {
                                game.log(player, '无视了', trigger.target, '的防具');
                                trigger.target.addTempSkill('qinggang2');
                                trigger.target.storage.qinggang2.add(trigger.card);
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (arg && arg.name == 'sha') return true;
                                    return false;
                                },
                            },
                        },
                        shzx_pojun_2: {
                            audio: 'paoxiao',
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                //if(_status.currentPhase!=player) return false;
                                if (event.card.name != 'sha') return false;
                                var history = player.getHistory('useCard', function (evt) {
                                    return evt.card.name == 'sha';
                                });
                                return history && history.indexOf(event) == 1;
                            },
                            forced: true,
                            content() {
                                trigger.directHit.addArray(
                                    game.filterPlayer(function (current) {
                                        return current != player;
                                    })
                                );
                                game.log(player, '的', trigger.card, '不可闪避');
                            },
                            mod: {
                                aiOrder(player, card, num) {
                                    if (typeof card == 'object' && player.isPhaseUsing()) {
                                        var history = player.getHistory('useCard', function (evt) {
                                            return evt.card.name == 'sha';
                                        });
                                        if (history && history.indexOf(event) == 1 && player.hasSha()) {
                                            if (card && card.name == 'jiu') {
                                                return num + 10;
                                            }
                                        }
                                    }
                                },
                            },
                        },
                        shzx_nuhe: {
                            group: ['shzx_nuhe2'],
                            audio: 'paoxiao',
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                        },
                        shzx_pojun: {
                            audio: 'ext:蜀汉中兴/audio:2',
                            group: ['shzx_pojun_juedou', 'shzx_pojun_2', 'shzx_pojun_qinggang'],
                            forced: true,
                            init2(player) {
                                player.storage.shzx_pojun = true;
                                var newzhangba = {
                                    equipSkill: true,
                                    enable: ['chooseToUse', 'chooseToRespond'],
                                    filterCard: true,
                                    selectCard() {
                                        var player = _status.event.player;
                                        if (player.hasSkill('shzx_pojun')) {
                                            return 1;
                                        } else {
                                            return 2;
                                        }
                                    },
                                    position: 'h',
                                    viewAs: {
                                        name: 'sha',
                                    },
                                    complexCard: true,
                                    filter(event, player) {
                                        if (player.hasSkill('shzx_pojun')) {
                                            return player.countCards('h') >= 1;
                                        } else {
                                            return player.countCards('h') >= 2;
                                        }
                                    },
                                    audio: true,
                                    //prompt:"将一张手牌当杀使用或打出",
                                    prompt() {
                                        return '将' + (_status.event.player.hasSkill('shzx_pojun') ? '1' : '2') + '张手牌当杀使用或打出';
                                    },
                                    check(card) {
                                        if (card.name == 'sha') return 0;
                                        return 5 - get.value(card);
                                    },
                                    ai: {
                                        respondSha: true,
                                        skillTagFilter(player) {
                                            return player.countCards('h') >= 1;
                                        },
                                        basic: {
                                            useful: [5, 1],
                                            value: [5, 1],
                                        },
                                        order(item) {
                                            if (_status.event.player.hasSkillTag('presha', true, null, true)) return 10;
                                            if (lib.linked.includes(get.nature(item))) return 3.1;
                                            return 3;
                                        },
                                        result: {
                                            target(player, target, card, isLink) {
                                                if (
                                                    !isLink &&
                                                    player.hasSkill('jiu') &&
                                                    !target.hasSkillTag('filterDamage', null, {
                                                        player: player,
                                                        card: card,
                                                        jiu: true,
                                                    })
                                                ) {
                                                    if (get.attitude(player, target) > 0) {
                                                        return -7;
                                                    } else {
                                                        return -4;
                                                    }
                                                }
                                                return -1.5;
                                            },
                                        },
                                        tag: {
                                            respond: 1,
                                            respondShan: 1,
                                            damage(card) {
                                                if (card.nature == 'poison') return;
                                                return 1;
                                            },
                                            natureDamage(card) {
                                                if (card.nature) return 1;
                                            },
                                            fireDamage(card, nature) {
                                                if (card.nature == 'fire') return 1;
                                            },
                                            thunderDamage(card, nature) {
                                                if (card.nature == 'thunder') return 1;
                                            },
                                            poisonDamage(card, nature) {
                                                if (card.nature == 'poison') return 1;
                                            },
                                        },
                                    },
                                };
                                lib.skill.zhangba_skill = newzhangba;
                            },
                            mod: {
                                aiValue(player, card, num) {
                                    if (card.name == 'zhangba') {
                                        return num + 2;
                                    }
                                },
                            },
                        },
                        shzx_nuhe2: {
                            audio: 'ext:蜀汉中兴/audio:2', //QQQ
                            trigger: {
                                source: 'damageSource',
                            },
                            filter(event, player) {
                                //if(event._notrigger.includes(event.player)) return false;
                                return event.card && event.card.name == 'sha';
                            },
                            forced: true,
                            content() {
                                if (!player.hasSkill('shzx_nuhe3')) {
                                    player.addTempSkill('shzx_nuhe3');
                                }
                                player.storage.shzx_nuhe3++;
                            },
                        },
                        shzx_nuhe3: {
                            charlotte: true,
                            mark: true,
                            intro: {
                                content: '出杀次数+#',
                            },
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = 0;
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + player.storage.shzx_nuhe3;
                                },
                            },
                        },
                        shzx_tishen: {
                            trigger: {
                                player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
                            },
                            forced: true,
                            juexingji: true,
                            audio: 'retishen',
                            filter(a, b, c) {
                                var hp = b.hp;
                                var storage = b.storage.shzx_tishen;
                                if (c == 'phaseJieshuBegin') {
                                    b.storage.shzx_tishen = hp;
                                    return false;
                                } else {
                                    if (!storage && b.hp > 2) {
                                        return false;
                                    }
                                    //if(player.countCards('he','zhangba')>0) return false;
                                    return b.hp <= 2 || (storage && (hp - storage >= 2 || storage - hp >= 2));
                                }
                            },
                            content() {
                                player.awakenSkill('shzx_tishen');
                                var card = get.cardPile('zhangba', 'field');
                                if (card) {
                                    player.gain(card, 'gain2');
                                }
                                player.recover();
                            },
                        },
                        shzx_wushen: {
                            init(player, skill) {
                                player.storage[skill] = player.storage[skill] || [];
                            },
                            mark: true,
                            intro: {
                                content(storage, player) {
                                    return lib.translate[player.name] + `拥有${storage.length}张【神】`;
                                },
                            },
                            audio: 'yijue',
                            enable: 'phaseUse',
                            position: 'h',
                            lose: true,
                            discard: false,
                            filter(event, player) {
                                return !player.storage.shzx_wushen || player.storage.shzx_wushen.length < 3;
                            },
                            filterCard: true,
                            selectCard() {
                                var player = _status.event.player;
                                if (!player.storage.shzx_wushen) {
                                    return [1, 3];
                                } else {
                                    var storage = player.storage.shzx_wushen.length;
                                    return [1, 3 - storage];
                                }
                            },
                            prompt: '将选择的牌放置在武将牌上,称为【神】',
                            check(card) {
                                return 6 - get.value(card);
                            },
                            content() {
                                if (!player.storage.shzx_wushen) {
                                    player.storage.shzx_wushen = [].concat(cards);
                                } else {
                                    player.storage.shzx_wushen = player.storage.shzx_wushen.concat(cards);
                                }
                                player.draw(cards.length);
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                                threaten: 1.5,
                            },
                        },
                        shzx_numu: {
                            mod: {
                                cardUsable(card, player, num) {
                                    var num2 = player.storage.shzx_wushen;
                                    if (card.name == 'sha') return num + (num2 ? num2.length : 0);
                                },
                                aiOrder(player, card, num) {
                                    if (typeof card == 'object' && player.isPhaseUsing()) {
                                        var history = player.getHistory('useCard', function (evt) {
                                            return evt.card.name == 'sha';
                                        });
                                        if (history && history.indexOf(event) == 0 && player.hasSha()) {
                                            if (card && card.name == 'jiu') {
                                                return num + 10;
                                            }
                                        }
                                    }
                                },
                            },
                            trigger: {
                                player: 'useCard',
                            },
                            audio: 'wusheng',
                            filter(event, player) {
                                //if(_status.currentPhase!=player) return false;
                                if (event.card.name != 'sha') return false;
                                var history = player.getHistory('useCard', function (evt) {
                                    return evt.card.name == 'sha';
                                });
                                return history && history.indexOf(event) == 0;
                            },
                            forced: true,
                            content() {
                                trigger.directHit.addArray(
                                    game.filterPlayer(function (current) {
                                        return current != player;
                                    })
                                );
                                game.log(player, '的', trigger.card, '不可闪避');
                            },
                        },
                        shzx_tuodao: {
                            trigger: {
                                target: 'shaUnhirt',
                            },
                            audio: 'new_rewusheng',
                            filter(event, player) {
                                var storage = player.storage.shzx_wushen;
                                return storage && storage.length && event.player != player;
                            },
                            content() {
                                'step 0';
                                var storage = player.storage.shzx_wushen;
                                player.chooseButton(['拖刀', storage]).set('ai', function (button) {
                                    return 1;
                                });
                                ('step 1');
                                if (result.links?.length) {
                                    player.storage.shzx_wushen.remove(result.links[0]);
                                    game.cardsDiscard(result.links[0]);
                                    game.log(player, '弃置了', result.links[0]);
                                    player.useCard({ name: 'sha' }, trigger.player).directHit = true;
                                    game.log(player, '的【杀】不可闪避');
                                }
                            },
                        },
                        // 锁定技,你死亡时,你随机展示三张体力牌(不能和伤害来源的体力牌相同),在任意时刻你选择令伤害来源的体力牌替换为你指定的体力牌
                        shzx_wuhun: {
                            trigger: {
                                player: 'die',
                            },
                            forceDie: true,
                            forced: true,
                            filter(event, player) {
                                return event.source && event.source != player;
                            },
                            _priority: 20,
                            async content(event, trigger, player) {
                                const list = Object.keys(lib.character)
                                    .filter((q) => lib.character[q].maxHp != trigger.source.maxHp)
                                    .randomGets(3);
                                const { links } = await player
                                    .chooseButton(['请选择体力牌', [list, 'character']])
                                    .set('ai', (button) => Math.random())
                                    .forResult();
                                if (links?.length) {
                                    trigger.source.maxHp = lib.character[links[0]].maxHp;
                                    trigger.source.update();
                                    game.log(player, '选择的体力牌为', links[0]);
                                }
                            },
                        },
                        shzx_anwei: {
                            audio: 'ext:蜀汉中兴/audio:true',
                            trigger: {
                                player: ['respond', 'useCard', 'phaseJieshuBegin'],
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player, name) {
                                if (name == 'respond' || name == 'useCard') {
                                    return event.card && event.card.suit == 'spade' && player.hp <= 2;
                                } else if (name == 'phaseJieshuBegin') {
                                    return player.hp < 4;
                                } else if (name == 'useCardToTargeted') {
                                    return event.card && event.card.suit == 'spade' && player.hp <= 1 && event.player != player;
                                }
                                return false;
                            },
                            content() {
                                var name = event.triggername;
                                if (name == 'respond' || name == 'useCard') {
                                    player.draw(player.getDamagedHp());
                                    return;
                                } else if (name == 'phaseJieshuBegin') {
                                    player.draw(player.getDamagedHp());
                                } else if (name == 'useCardToTargeted') {
                                    var evt = trigger.parent;
                                    evt.triggeredTargets2.remove(player);
                                    evt.targets.remove(player);
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (card.suit == 'spade' && target.hp <= 1 && target != player) return 'zeroplayertarget';
                                    },
                                    player(card, player, target, current) {
                                        if (card.suit == 'spade' && player.hp <= 2) return 2;
                                    },
                                },
                            },
                        },
                        shzx_zhuicha: {},
                        shzx_xinzhan: {
                            audio: 'xinzhan',
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                var cards = get.cards(3);
                                event.cards = cards;
                                var next = player
                                    .chooseCardButton(cards, '选择获得的♠️️牌', [1, Infinity])
                                    .set('filterButton', function (button) {
                                        return button.link.suit == 'spade';
                                    })
                                    .set('ai', function (button) {
                                        return get.value(button.link);
                                    });
                                ('step 1');
                                if (result.links?.length) {
                                    player.gain(result.links);
                                    player.$draw(result.links);
                                }
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (!result.bool || !result.links.includes(i)) {
                                            ui.cardPile.insertBefore(i, ui.cardPile.firstChild);
                                        }
                                    }
                            },
                            ai: {
                                order: 11,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        shzx_choulaobie: {
                            trigger: {
                                player: 'drawAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.countCards('h') < 1) {
                                    var evt = _status.event.getParent('phase');
                                    if (evt && evt.name) {
                                        evt.finish();
                                    }
                                    return false;
                                }
                                var value = false;
                                for (var i = 0; i < player.countCards('h'); i++) {
                                    var number = player.countCards('h', function (car) {
                                        return car != player.getCards('h')[i] && car.suit == get.suit(player.getCards('h')[i]);
                                    });
                                    if (number > 0) {
                                        value = true;
                                    }
                                }
                                return value;
                            },
                            content() {
                                'step 0';
                                event.cards = player.getCards('h');
                                ('step 1');
                                var next = player.chooseCardButton(player.getCards('h'), true);
                                next.set('filterButton', function (button) {
                                    var player = _status.event.player;
                                    var selected = ui.selected.buttons;
                                    var filter = {};
                                    if (
                                        !player.countCards('h', function (cardx) {
                                            return button.link != cardx && cardx.suit == button.link.suit;
                                        })
                                    ) {
                                        return false;
                                    }
                                    for (var j = 0; j < selected.length; j++) {
                                        var suit = selected[j].link.suit;
                                        if (!filter[suit]) filter[suit] = 0;
                                        filter[suit]++;
                                    }
                                    var number = player.countCards('h', function (car) {
                                        return car.suit == button.link.suit;
                                    });
                                    if (number % 2 == 1) number = number - 1;
                                    return !filter[button.link.suit] || filter[button.link.suit] < number;
                                });
                                next.set('selectButton', function () {
                                    var num = 0;
                                    var player = _status.event.player;
                                    var suits = ['heart', 'club', 'spade', 'diamond'];
                                    for (var i = 0; i < suits.length; i++) {
                                        var num1 = player.countCards('h', function (cardx) {
                                            return cardx.suit == suits[i];
                                        });
                                        if (num1 > 1) {
                                            if (num1 % 2 == 0) {
                                                num += num1;
                                            } else {
                                                num += num1 - 1;
                                            }
                                        }
                                    }
                                    return [num, num];
                                });
                                next.set('ai', function () {
                                    return 10;
                                });
                                ('step 2');
                                if (result.links?.length) {
                                    result.links.sort(function (b, a) {
                                        return lib.suit.indexOf(a.suit) - lib.suit.indexOf(b.suit);
                                    });
                                    player.discard(result.links);
                                }
                                ('step 3');
                                player.update();
                                //game.log(player.countCards('h'))
                                if (player.countCards('h') == 0) {
                                    //player.previous.next=player.next;
                                    //player.next.previous=player.previous;
                                    game.players.remove(player);
                                }
                                ('step 4');
                                if (!_status.currentPhase) {
                                    event.finish();
                                    return;
                                }
                                var pla = game.players.concat();
                                game.players = game.clbplayers;
                                for (var i of game.players) {
                                    if (i.countCards('h') == 1) {
                                        var players = game.filterPlayer(function (current) {
                                            return current != i && current.countCards('h') > 0;
                                        });
                                        if (players.length) {
                                            game.players = pla;
                                            break;
                                        } else {
                                            i == game.me ? game.over(false) : game.over(true);
                                        }
                                    }
                                }
                            },
                        },
                        shzx_choulaobie2: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.countCards('h') == 0) {
                                    var evt = _status.event.getParent('phase');
                                    if (evt && evt.name) {
                                        evt.finish();
                                    }
                                    return false;
                                }
                                return player == _status.currentPhase;
                            },
                            content() {
                                'step 0';
                                player.chooseUseTarget('###是否发动【抽老鳖】？###视为使用一张【顺手牵羊】', { name: 'shunshou' }, false, 'nodistance', true);
                                ('step 1');
                                if (lib.skill.shzx_choulaobie.filter(trigger, player) == true) {
                                    var next = game.createEvent('shzx_choulaobie', false, trigger);
                                    next.player = player;
                                    next.forceDie = true;
                                    next.setContent(lib.skill.shzx_choulaobie.content);
                                }
                                ('step 2');
                                trigger.cancel();
                            },
                        },
                        shzx_choulaobie3: {
                            trigger: {
                                global: 'gameDrawBegin',
                            },
                            forced: true,
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != game.zhu.previous) {
                                        current.draw(13);
                                    } else {
                                        current.draw(12);
                                    }
                                    current.phaseDraw = function () { };
                                });
                                game.clbplayers = game.players;
                                trigger.cancel();
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return Infinity;
                                },
                            },
                        },
                        shzx_lianhuan: {
                            audio: 'lianhuan',
                            init2(player, skill) {
                                if (!player.hasSkill(skill)) return;
                                lib.skill.shzx_lianhuan.change();
                            },
                            init(player, skill) {
                                if (!player.hasSkill(skill)) return;
                                lib.skill.shzx_lianhuan.change();
                            },
                            addEffect(player) {
                                player.storage = player.storage || {};
                                if (player.storage.shzx_addEffect == true) return;
                                player.storage.shzx_addEffect = true;
                                var effect = lib.skill.shzx_lianhuan.content;
                                var addSkill = player.addSkill;
                                player.addSkill = function () {
                                    addSkill.apply(this, arguments);
                                    if (
                                        player.storage.shzx_lianhuan2 == true ||
                                        !player.isLinked() ||
                                        !game.hasPlayer(function (current) {
                                            return current.hasSkill('shzx_lianhuan');
                                        })
                                    )
                                        return arguments[0];
                                    effect();
                                    return arguments[0];
                                };
                                var removeSkill = player.removeSkill;
                                player.removeSkill = function () {
                                    removeSkill.apply(this, arguments);
                                    if (
                                        player.storage.shzx_lianhuan2 == true ||
                                        !player.isLinked() ||
                                        !game.hasPlayer(function (current) {
                                            return current.hasSkill('shzx_lianhuan');
                                        })
                                    )
                                        return arguments[0];
                                    effect();
                                    return arguments[0];
                                };
                            },
                            change() {
                                lib.card.tiesuo.ai = {
                                    wuxie(target, card, player, viewer) {
                                        if (_status.event.getRand() < 0.5) return 0;
                                        if (player == game.me && get.attitude(viewer, player) > 0) {
                                            return 0;
                                        }
                                    },
                                    basic: {
                                        useful: 4,
                                        value: 4,
                                        order: 7,
                                    },
                                    result: {
                                        target(player, target) {
                                            if (target.hasSkillTag('link')) return 0;
                                            if (get.attitude(player, target) <= 0 && target.isLinked()) return 5;
                                            if (get.attitude(player, target) > 0 && !target.isLinked()) return 5;
                                            return 0;
                                        },
                                    },
                                    tag: {
                                        multitarget: 1,
                                        multineg: 1,
                                        norepeat: 1,
                                    },
                                };
                            },
                            onremove() {
                                lib.card.tiesuo.ai = {
                                    wuxie(target, card, player, viewer) {
                                        if (_status.event.getRand() < 0.5) return 0;
                                        if (player == game.me && get.attitude(viewer, player) > 0) {
                                            return 0;
                                        }
                                    },
                                    basic: {
                                        useful: 4,
                                        value: 4,
                                        order: 7,
                                    },
                                    result: {
                                        target(player, target) {
                                            if (target.isLinked()) {
                                                if (target.hasSkillTag('link')) return 0;
                                                var f = target.hasSkillTag('nofire');
                                                var t = target.hasSkillTag('nothunder');
                                                if (f && t) return 0;
                                                if (f || t) return 0.5;
                                                return 2;
                                            }
                                            if (get.attitude(player, target) >= 0) return -0.9;
                                            if (ui.selected.targets.length) return -0.9;
                                            if (
                                                game.hasPlayer(function (current) {
                                                    return get.attitude(player, current) <= -1 && current != target && !current.isLinked();
                                                })
                                            ) {
                                                return -0.9;
                                            }
                                            return 0;
                                        },
                                    },
                                    tag: {
                                        multitarget: 1,
                                        multineg: 1,
                                        norepeat: 1,
                                    },
                                };
                            },
                            trigger: {
                                global: ['linkAfter', 'dieAfter', 'showCharacterAfter'],
                                player: 'die',
                            },
                            forceDie: true,
                            filter(event, player, name) {
                                if (player.isAlive()) {
                                    lib.skill.shzx_lianhuan.change();
                                }
                                if (name == 'die') {
                                    game.countPlayer2(function (current) {
                                        current.removeAdditionalSkill('shzx_lianhuan2');
                                    });
                                    lib.skill.shzx_lianhuan.onremove();
                                    return false;
                                } else if (name == 'showCharacterAfter') {
                                    return event.player.isLinked();
                                } else {
                                    return player.isAlive();
                                }
                            },
                            forced: true,
                            popup: false,
                            charlotte: true,
                            gainable: false,
                            content() {
                                game.countPlayer2(function (current) {
                                    if (current.isLinked()) {
                                        lib.skill.shzx_lianhuan.addEffect(current);
                                        lib.skill.shzx_lianhuan.contentx(current);
                                    } else {
                                        current.removeAdditionalSkill('shzx_lianhuan2');
                                    }
                                });
                            },
                            contentx(player) {
                                player.storage.shzx_lianhuan2 = true;
                                player.removeAdditionalSkill('shzx_lianhuan2');
                                var list = [];
                                var players = game.filterPlayer2(function (current) {
                                    return current != player && current.isLinked();
                                });
                                if (players.length == 0) {
                                    return;
                                }
                                for (var i of players) {
                                    var playeri = i;
                                    var skills = playeri.skills.concat();
                                    if (skills.length) {
                                        for (var x = 0; x < skills.length; x++) {
                                            if (lib.skill[skills[x]].charlotte || !lib.translate[skills[x] + '_info'] || player.skills.includes(skills[x])) {
                                                skills.splice(x--, 1);
                                            }
                                        }
                                    }
                                    list.addArray(skills);
                                }
                                if (list.length) {
                                    player.addAdditionalSkill('shzx_lianhuan2', list);
                                    player.storage.shzx_lianhuan2 = false;
                                }
                            },
                        },
                        // 限定技,身份模式,出牌阶段,若你不为主公,你可以选择一张不为【主公】的身份牌且展示之,所有角色视为你是此身份.且其他角色需依次猜测你的原身份(同阵营角色直接猜对).<li>发动此技能后,当你击杀一名角色或你死亡时,你展示你的原身份牌,并令其他角色依次执行:猜错,其需要弃置所有手牌或失去两点体力上限;猜对,其需摸两张牌或增加一点体力上限
                        shzx_zaofan: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return game.zhu != player && !player.storage.shzx_zaofan;
                            },
                            _priority: 20,
                            mode: ['identity'],
                            async content(event, trigger, player) {
                                player.storage.shzx_zaofanidentity = player.identity;
                                const list = ['zhong', 'fan', 'nei'];
                                const { links } = await player
                                    .chooseButton(['请选择身份', [list, 'vcard']])
                                    .set('ai', (b) => Math.random())
                                    .forResult();
                                if (links?.length) {
                                    player.setIdentity(links[0][2]);
                                    game.log(player, '选择的身份牌为', links[0][2]);
                                    player.awakenSkill('shzx_zaofan');
                                    for (const npc of game.players.filter((q) => q != player)) {
                                        if (npc.isFriendsOf(player)) {
                                            npc.storage.shzx_zaofancontrol = player.identity;
                                            game.log(npc, '猜测', player, '的原身份为', player.identity);
                                        } else {
                                            const { control } = await npc
                                                .chooseControl(list)
                                                .set('prompt', `请猜测${lib.translate[player.name]}的原身份`)
                                                .set('ai', function () {
                                                    return list.randomGet();
                                                })
                                                .forResult();
                                            npc.storage.shzx_zaofancontrol = control;
                                            game.log(npc, '猜测', player, '的原身份为', control);
                                        }
                                    }
                                }
                            },
                            ai: {
                                result: {
                                    player: 10,
                                },
                            },
                        },
                        shzx_kuanggu: {
                            trigger: {
                                source: 'damageSource',
                                player: 'useCard',
                            },
                            filter(event, player, name) {
                                if (name == 'damageSource' && event.num > 0 && get.distance(player, event.player) <= 1) return true;
                                else if (name == 'useCard' && event.card && get.tag(event.card, 'damage')) return true;
                                return false;
                            },
                            forced: true,
                            audio: 'kuanggu',
                            content() {
                                if (trigger.num) {
                                    player.recover(trigger.num);
                                } else {
                                    player.draw(1);
                                }
                            },
                        },
                        shzx_qimou: {
                            xiandingji: true,
                            limited: true,
                            audio: 'qimou',
                            enable: 'phaseUse',
                            filter(event, player) {
                                var number = player.countCards('h') + player.hp + player.maxHp + (player == game.zhu ? 2 : 0);
                                if (number == 0) return false;
                                return !player.storage.shzx_qimou;
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            content() {
                                'step 0';
                                event.number = player.countCards('h') + player.hp + player.maxHp + (player == game.zhu ? 2 : 0);
                                player.awakenSkill('shzx_qimou');
                                player.storage.shzx_qimou = true;
                                player.addTempSkill('shzx_qimou2');
                                var list = [],
                                    num;
                                var cardnum = 0;
                                for (var i = 0; i < player.countCards('h'); i++) {
                                    if (get.tag(player.getCards('h')[i], 'damage')) cardnum += 1;
                                }
                                /*if(player.hp>=4&&cardnum>=3){
                    event.hpnum=player.hp-3;
                }
                else if(player.hp>=3&&cardnum>=2){
                    event.hpnum=2;
                }
                else{
                    event.hpnum=4;
                }*/
                                if (event.number > 6) {
                                    if (cardnum >= 3) {
                                        num = 6;
                                        event.hpnum = 1;
                                    } else {
                                        num = 6;
                                        event.hpnum = player.hp + 1;
                                    }
                                }
                                for (var i = 1; i < event.number; i++) {
                                    list.push(i);
                                }
                                player
                                    .chooseControl(list, true, function () {
                                        return _status.event.goon;
                                    })
                                    .set('prompt', '请分配你的体力上限')
                                    .set('goon', num);
                                ('step 1');
                                if (result.control) {
                                    if (player.maxHp > result.control) {
                                        player.loseMaxHp(player.maxHp - result.control);
                                    } else if (player.maxHp < result.control) {
                                        player.gainMaxHp(result.control - player.maxHp);
                                    }
                                    player.update();
                                    event.number = event.number - result.control;
                                    //result.control=undefined;
                                }
                                ('step 2');
                                if (event.number == 1) {
                                    player.loseHp(player.hp - 1);
                                    player.chooseToDiscard(player.countCards('h'), true);
                                    //event.finish();return;
                                    event.goto(6);
                                }
                                ('step 3');
                                var hpList = [];
                                for (var x = 1; x <= player.maxHp; x++) {
                                    if (x <= event.number) {
                                        hpList.push(x);
                                    }
                                }
                                player
                                    .chooseControl(hpList, true, function () {
                                        return _status.event.goon2;
                                    })
                                    .set('prompt', '请分配你的体力')
                                    .set('goon2', event.hpnum);
                                ('step 4');
                                if (result.control) {
                                    if (player.hp > result.control) {
                                        player.loseHp(player.hp - result.control);
                                    } else if (player.hp < result.control) {
                                        player.recover(result.control - player.hp);
                                    }
                                    player.update();
                                    event.number = event.number - result.control;
                                }
                                ('step 5');
                                if (event.number == 0) {
                                    player.discard(player.getCards('h'));
                                } else {
                                    if (event.number == player.countCards('h')) event.finish();
                                    return;
                                    if (event.number > player.countCards('h')) {
                                        player.draw(event.number - player.countCards('h'));
                                    } else {
                                        player.chooseToDiscard(player.countCards('h') - event.number, true);
                                    }
                                }
                                ('step 6');
                                player.storage.shzx_qimou2 = player.getDamagedHp();
                            },
                            ai: {
                                order: 2,
                                result: {
                                    player(player) {
                                        if (player.hp == 1) return 0;
                                        var shas = player.getCards('h', 'sha');
                                        if (!shas.length) return 0;
                                        var card = shas[0];
                                        if (!lib.filter.cardEnabled(card, player)) return 0;
                                        if (lib.filter.cardUsable(card, player)) return 0;
                                        var mindist;
                                        if (player.hp >= 4 && shas.length >= 3) {
                                            mindist = 4;
                                        } else if (player.hp >= 3 && shas.length >= 2) {
                                            mindist = 3;
                                        } else {
                                            mindist = 2;
                                        }
                                        if (
                                            game.hasPlayer(function (current) {
                                                return current.hp <= mindist - 1 && get.distance(player, current, 'attack') <= mindist && player.canUse(card, current, false) && get.effect(current, card, player, player) > 0;
                                            })
                                        ) {
                                            return 1;
                                        }
                                        return 0;
                                    },
                                },
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        shzx_qimou2: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (typeof player.storage.shzx_qimou2 == 'number' && card.name == 'sha') {
                                        return num + player.storage.shzx_qimou2;
                                    }
                                },
                                globalFrom(from, to, distance) {
                                    if (typeof from.storage.shzx_qimou2 == 'number') {
                                        return distance - from.storage.shzx_qimou2;
                                    }
                                },
                            },
                        },
                        shzx_zaofan2: {
                            trigger: {
                                player: 'die',
                                source: 'dieAfter',
                            },
                            filter(event, player) {
                                return player.storage.shzx_zaofan && player.storage.shzx_zaofan == true && player.storage.shzx_zaofanidentity;
                            },
                            forced: true,
                            forceDie: true,
                            content() {
                                'step 0';
                                player.setIdentity(player.storage.shzx_zaofanidentity);
                                player.removeSkill('shzx_zaofan2');
                                ('step 1');
                                event.current = player.next;
                                ('step 2');
                                if (event.current.storage.shzx_zaofancontrol) {
                                    var List1 = ['摸两张牌', '增加一点体力上限'];
                                    var List2 = ['弃置所有手牌', '减少两点体力上限'];
                                    if (event.current.countCards('h') == 0) {
                                        List2.remove('弃置所有手牌');
                                    }
                                    if (event.current.storage.shzx_zaofancontrol != player.storage.shzx_zaofanidentity) {
                                        event.current
                                            .chooseControl(true, List2)
                                            .set('prompt', `你猜错了${lib.translate[player.name]}的身份,请选择即将执行的效果`)
                                            .set('ai', function () {
                                                return '弃置所有手牌';
                                            });
                                    } else {
                                        event.current
                                            .chooseControl(true, List1)
                                            .set('prompt', `你猜对了${lib.translate[player.name]}的身份,请选择即将执行的效果`)
                                            .set('ai', function () {
                                                return '摸两张牌';
                                            });
                                    }
                                }
                                ('step 3');
                                if (result.control) {
                                    switch (result.control) {
                                        case '摸两张牌':
                                            event.current.draw(2);
                                            break;
                                        case '增加一点体力上限':
                                            event.current.gainMaxHp(1);
                                            break;
                                        case '弃置所有手牌':
                                            event.current.discard(event.current.getCards('h'));
                                            break;
                                        case '失去两点体力上限':
                                            event.current.loseMaxHp(2);
                                            break;
                                    }
                                }
                                ('step 4');
                                if (event.current.next != player.next) {
                                    event.current = event.current.next;
                                    event.goto(2);
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        shzx_qingbai: {
                            trigger: {
                                player: 'useCardToPlayered',
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                return event.player != event.target;
                            },
                            check(event, player) {
                                var target = player == event.target ? event.player : event.target;
                                if (get.attitude(player, target) < 0 && target.countCards('he') == 0) {
                                    return 0;
                                }
                                if (get.attitude(player, target) < 0 && target.countCards('he') <= 1 && (event.card.name == 'shunshou' || event.card.name == 'guohe')) {
                                    return 0;
                                }
                                return get.attitude(player, target) != 0;
                            },
                            logTarget(event, player) {
                                if (event.player == player) return event.target;
                                return event.player;
                            },
                            content() {
                                'step 0';
                                var target = player == trigger.target ? trigger.player : trigger.target;
                                event.effecttarget = target;
                                var goon;
                                var att = get.attitude(player, target);
                                if (att > 0) {
                                    goon = true;
                                } else {
                                    goon = false;
                                }
                                event.effectList = [`令${lib.translate[target.name]}摸一张牌`, `弃置${lib.translate[target.name]}一张牌`];
                                player
                                    .chooseControl(event.effectList, true, function () {
                                        var att = _status.event.goon;
                                        if (att == true) {
                                            return event.effectList[0];
                                        } else {
                                            return event.effectList[1];
                                        }
                                    })
                                    .set('goon', goon);
                                ('step 1');
                                if (result.control) {
                                    if (result.control == event.effectList[0]) {
                                        event.effecttarget.draw();
                                    } else {
                                        if (event.effecttarget.countDiscardableCards(player, 'he')) {
                                            player.discardPlayerCard('he', event.effecttarget, true);
                                        }
                                    }
                                }
                            },
                        },
                        shzx_zhiyu: {
                            global: 'shzx_zhiyu_effect',
                            subSkill: {
                                effect: {
                                    enable: 'phaseUse',
                                    usable: 1,
                                    filter(event, player) {
                                        if (player.countCards('h') == 0) return false;
                                        var num = game.countPlayer(function (target) {
                                            return target != player && target.hasSkill('shzx_zhiyu') && target.getEnemies().includes(player) == false && !target.hasSkill('diaohulishan');
                                        });
                                        if (num == 0) return false;
                                        return (
                                            !player.isUnseen() &&
                                            game.hasPlayer(function (target) {
                                                return target != player && target.hasSkill('shzx_zhiyu') && !target.hasSkill('diaohulishan');
                                            })
                                        );
                                    },
                                    prompt() {
                                        var player = _status.event.player;
                                        var list = game.filterPlayer(function (target) {
                                            return target != player && target.hasSkill('shzx_zhiyu');
                                        });
                                        var str = '将任意张手牌交给' + get.translation(list);
                                        if (list.length > 1) str += '中的一人';
                                        str += '(先选择获得牌的目标)分别指定每张牌的一名合法目标,其对你指定的目标使用之';
                                        return str;
                                    },
                                    filterTarget(card, player, target) {
                                        if (target == player || !target.hasSkill('shzx_zhiyu')) return false;
                                        if (target.getEnemies().includes(player)) return false;
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseCard([1, player.countCards('h')], true, 'h', function (card) {
                                                if (lib.card[card.name].selectTarget && typeof lib.card[card.name].selectTarget == 'number' && lib.card[card.name].selectTarget > 1) {
                                                    return false;
                                                }
                                                return game.hasPlayer(function (current) {
                                                    return targets[0].canUse(card, current, false); //||lib.filter.targetEnabled2(card,targets[0],current);
                                                });
                                            })
                                            .set('ai', function (card) {
                                                if (card.name == 'du') {
                                                    return get.attitude(_status.event.player, targets[0]) < 0;
                                                }
                                                if (card.name == 'tao') {
                                                    return game.hasPlayer(function (current) {
                                                        return get.attitude(_status.event.player, current) > 0 && current.hp < current.maxHp;
                                                    });
                                                }
                                                if (card.name == 'jiu') {
                                                    if (_status.event.player.countCards('h', 'sha') > 0) {
                                                        return 100;
                                                    } else {
                                                        return 0;
                                                    }
                                                }
                                                var att = get.attitude(_status.event.player, targets[0]);
                                                return att > 0 ? get.value(card, targets[0]) : -get.value(card, targets[0]);
                                            });
                                        ('step 1');
                                        event.zhiyucards = result.cards;
                                        event.zhiyutarget = [];
                                        event.zhiyulength = 0;
                                        event.ytargets = targets;
                                        event.willEquip = [];
                                        event.willLink = [];
                                        event.isEmpty = function (num, target) {
                                            if (!target) return false;
                                            if (!num) return true;
                                            if (num == 6 || num == 'equip6') {
                                                if (!event.isEmpty(3, target) || !event.isEmpty(4, target)) return false;
                                            } else if ([3, 4, 'equip3', 'equip4'].includes(num)) {
                                                if (target.getEquip(6)) return false;
                                            }
                                            var num2 = num;
                                            if (typeof num.indexOf == 'function' && num.indexOf('equip') == -1) {
                                                num = 'equip' + num2;
                                            } else {
                                                return false;
                                            }
                                            for (var i = 0; i < event.willEquip.length; i++) {
                                                if (event.willEquip[i].includes(target) && event.willEquip[i].includes(num2)) {
                                                    return false;
                                                }
                                            }
                                            return !target.isDisabled(num) && !target.getEquip(num);
                                        };
                                        ('step 2');
                                        player.chooseTarget(1, true, `知遇:指定一名角色为${lib.translate[event.zhiyucards[event.zhiyulength].name]}的目标`, function (card, player, target) {
                                            if (target.hasSkill('diaohulishan')) {
                                                return false;
                                            }
                                            return lib.filter.targetEnabled2(event.zhiyucards[event.zhiyulength], event.ytargets[0], target) || event.ytargets[0].canUse(event.zhiyucards[event.zhiyulength], target, false);
                                        }).ai = function (target) {
                                            var player = _status.event.player;
                                            var att = get.attitude(player, event.ytargets[0]);
                                            var att2 = get.attitude(event.ytargets[0], target);
                                            //get.effect(event.target,event.card,event.player,player)<0;
                                            var effect = get.effect(target, event.zhiyucards[event.zhiyulength], event.ytargets[0], event.ytargets[0]);
                                            //game.log(lib.translate[target.name],lib.translate[event.zhiyucards[event.zhiyulength].name],effect)
                                            if (get.type(event.zhiyucards[event.zhiyulength], 'trick') == 'trick') {
                                                if (['wuzhong', 'yiyi', 'zengbin', 'wugu', 'zhulu_card', 'kaihua'].includes(event.zhiyucards[event.zhiyulength].name)) {
                                                    return att2 >= 0 && effect >= 0;
                                                } else {
                                                    if (event.willLink.includes(target)) {
                                                        target.classList.toggle('linked2');
                                                    }
                                                    return att2 < 0 && effect >= 0;
                                                }
                                            }
                                            if (get.type(event.zhiyucards[event.zhiyulength]) == 'equip') {
                                                //if(['numa','wufengjian','nvzhuang','zheji','yinfengjia'].includes(event.zhiyucards[event.zhiyulength].name)){
                                                if (get.cardtag(event.zhiyucards[event.zhiyulength], 'gifts')) {
                                                    return att2 <= 0 && effect >= 0;
                                                } else {
                                                    var type = get.subtype(event.zhiyucards[event.zhiyulength]);
                                                    //game.log(lib.translate[target.name],lib.translate[event.zhiyucards[event.zhiyulength].name],event.isEmpty(type,target))
                                                    return (att2 > 0 && effect >= 0 && event.isEmpty(type, target) == true) || (att2 > 0 && effect >= 0);
                                                }
                                            }
                                            if (get.type(event.zhiyucards[event.zhiyulength]) == 'basic') {
                                                var name = event.zhiyucards[event.zhiyulength].name;
                                                if (name && name == 'sha') {
                                                    return att2 < 0 && effect >= 0;
                                                }
                                                if (name && name == 'jiu') {
                                                    if (att > 0) {
                                                        return target == event.ytargets[0];
                                                    } else {
                                                        return player == target;
                                                    }
                                                }
                                                if (name && name == 'tao') {
                                                    return att2 > 0 && effect >= 0;
                                                }
                                            }
                                            if (get.type(event.zhiyucards[event.zhiyulength]) == 'character') {
                                                return get.attitude(event.ytargets[0], target) > 0 && effect >= 0;
                                            }
                                            return get.attitude(event.ytargets[0], target) < 0 && effect >= 0;
                                        };
                                        ('step 3');
                                        game.countPlayer(function (current) {
                                            if (event.willLink.includes(current)) {
                                                current.classList.toggle('linked2');
                                            }
                                        });
                                        if (result.targets?.length) {
                                            event.zhiyutarget[event.zhiyulength] = result.targets;
                                            if (get.type(event.zhiyucards[event.zhiyulength]) == 'equip') {
                                                event.willEquip.push([result.targets[0], get.subtype(event.zhiyucards[event.zhiyulength])]);
                                            }
                                            if (!event.isMine() && event.zhiyucards[event.zhiyulength].name == 'tiesuo') {
                                                event.willLink.push(result.targets[0]);
                                            }
                                        }
                                        event.zhiyulength = event.zhiyulength + 1;
                                        if (event.zhiyulength < event.zhiyucards.length) {
                                            event.goto(2);
                                        }
                                        ('step 4');
                                        player.$give(event.zhiyucards.length, event.ytargets[0]);
                                        event.ytargets[0].gain(event.zhiyucards, player);
                                        ('step 5');
                                        var card = event.zhiyucards; //.concat();
                                        var target = event.zhiyutarget; //.concat();
                                        if (!event.isMine()) {
                                            for (var i = 0; i < card.length; i++) {
                                                if (card[i].name == 'jiu') {
                                                    var num = i;
                                                    var card2 = card[num];
                                                    var target2 = target[num];
                                                    var card3 = card[0];
                                                    var target3 = target[0];
                                                    card[0] = card2;
                                                    card[i] = card3;
                                                    target[0] = target2;
                                                    target[i] = target3;
                                                    break;
                                                }
                                            }
                                        }
                                        for (var i = 0; i < card.length; i++) {
                                            game.log(player, '指定', card[i], '的目标为', target[i][0]);
                                        }
                                        event.zhiyulength2 = 0;
                                        ('step 6');
                                        if (event.zhiyutarget[event.zhiyulength2] && event.zhiyutarget[event.zhiyulength2][0].isAlive() && event.ytargets[0].getCards('h').includes(event.zhiyucards[event.zhiyulength2])) {
                                            event.ytargets[0].useCard(event.zhiyucards[event.zhiyulength2], event.zhiyutarget[event.zhiyulength2], false);
                                        }
                                        ('step 7');
                                        if (event.zhiyulength2 < event.zhiyucards.length) {
                                            event.zhiyulength2++;
                                            event.goto(6);
                                        }
                                    },
                                    ai: {
                                        expose: 0.3,
                                        order: 10,
                                        result: {
                                            target: 5,
                                        },
                                    },
                                },
                            },
                        },
                        shzx_tuiyin: {
                            subSkill: {
                                effect: {
                                    mark: true,
                                    nopop: true,
                                    intro: {
                                        content: '锁定技,你不能成为其他角色的卡牌的目标',
                                    },
                                    mod: {
                                        targetEnabled(card, player, target) {
                                            if (player != target) return false;
                                        },
                                    },
                                },
                            },
                            trigger: {
                                global: 'phaseAfter',
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0 && event.player != player && !player.hasSkill('shzx_tuiyin_effect');
                            },
                            check(event, player) {
                                if (game.players.length <= 2 || event.player == player.previous) {
                                    return 0;
                                }
                                if (player.countCards('h', 'tao') > 0 || player.countCards('h', 'wuxie') > 0 || player.countCards('h', 'caochuan') > 0) return false;
                                return player.hp < 2;
                            },
                            content() {
                                'step 0';
                                player.discard(player.getCards('h'));
                                ('step 1');
                                player.addTempSkill('shzx_tuiyin_effect', { player: 'phaseBefore' });
                            },
                        },
                        shzx_xiayi: {
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                            limited: true,
                            check(event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            filter(event, player) {
                                return event.player != player && event.player.isAlive();
                            },
                            trigger: {
                                global: 'dyingAfter',
                            },
                            content() {
                                trigger.player.damage(trigger.player.hp, player);
                                player.storage.shzx_xiayi = true;
                                player.awakenSkill('shzx_xiayi');
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        shzx_tiaoxin: {
                            init(player, skill) {
                                player.storage[skill] = player.storage[skill] || [];
                            },
                            audio: 'ext:蜀汉中兴/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('he');
                            },
                            content() {
                                'step 0';
                                player.storage.shzx_tiaoxin = player.storage.shzx_tiaoxin || [];
                                target
                                    .chooseToUse({ name: 'sha' }, `挑衅:对${get.translation(player)}使用一张杀,或令其弃置你的一张牌`)
                                    .set('targetRequired', true)
                                    .set('complexSelect', true)
                                    .set('filterTarget', function (card, player, target) {
                                        if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                                        return lib.filter.filterTarget.apply(this, arguments);
                                    })
                                    .set('sourcex', player);
                                ('step 1');
                                if (result.bool == false && target.countCards('he') > 0) {
                                    player.discardPlayerCard(target, 'he', true);
                                    player.storage.shzx_tiaoxin.add(target);
                                } else {
                                    event.finish();
                                }
                            },
                            group: 'shzx_tiaoxin_phase',
                            subSkill: {
                                effect: {
                                    mark: true,
                                    intro: {
                                        content: '你计算与其他人的距离+1',
                                    },
                                    mod: {
                                        globalFrom(from, to, distance) {
                                            return distance + 1;
                                        },
                                    },
                                },
                                phase: {
                                    trigger: {
                                        global: 'phaseBegin',
                                    },
                                    popup: false,
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.shzx_tiaoxin && player.storage.shzx_tiaoxin.includes(event.player) && event.player != player;
                                    },
                                    content() {
                                        player.storage.shzx_tiaoxin = player.storage.shzx_tiaoxin || [];
                                        trigger.player.addTempSkill('shzx_tiaoxin_effect');
                                        player.storage.shzx_tiaoxin.remove(trigger.player);
                                    },
                                },
                            },
                            ai: {
                                order: 4,
                                expose: 0.2,
                                result: {
                                    target: -1,
                                    player(player, target) {
                                        if (!target.canUse('sha', player)) return 0;
                                        if (target.countCards('h') == 0) return 0;
                                        if (target.countCards('h') == 1) return -0.1;
                                        if (player.hp <= 2) return -2;
                                        if (player.countCards('h', 'shan') == 0) return -1;
                                        return -0.5;
                                    },
                                },
                                threaten: 1.1,
                            },
                        },
                        shzx_yicai: {
                            trigger: {
                                global: ['useCard'],
                            },
                            audio: 'zhiji',
                            popup: false,
                            forced: true,
                            filter(event, player) {
                                var type = get.type(event.card, null, event.player);
                                if (player.countCards('h') == 0) return false;
                                return event.card && ['trick', 'basic'].includes(type) && event.card.number && event.targets && event.targets.includes(player) && event.player != player;
                            },
                            check(event, player) {
                                return get.effect(player, event.card, event.player, player) < 0;
                            },
                            content() {
                                'step 0';
                                var number = trigger.card.number;
                                var List = [];
                                var List2 = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
                                for (var i = 1; i < 13; i++) {
                                    if (number > i) {
                                        if (number - i <= 3) {
                                            List.add(List2[i - 1]);
                                        }
                                    } else {
                                        if (i - number <= 3) {
                                            List.add(List2[i - 1]);
                                        }
                                    }
                                }
                                player
                                    .chooseToDiscard(1, 'h', function (card) {
                                        var number2 = card.number;
                                        return number > number2 ? number - number2 <= 3 : number2 - number <= 3;
                                    })
                                    .set('prompt', get.prompt('shzx_yicai') + `<br>请弃置一张点数为${List}之一的手牌`);
                                ('step 1');
                                if (result.bool) {
                                    trigger.targets.length = 0;
                                    trigger.all_excluded = true;
                                }
                            },
                            ai: {
                                threaten: 1.8,
                            },
                        },
                        shzx_yizhi: {
                            juexingji: true,
                            audio: 'ext:蜀汉中兴/audio:true',
                            derivation: 'shzx_dingce',
                            trigger: {
                                player: 'dying',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.storage.shzx_yizhi;
                            },
                            content() {
                                'step 0';
                                player.loseMaxHp();
                                ('step 1');
                                if (player.hp < 2) {
                                    player.recover(2 - player.hp);
                                }
                                ('step 2');
                                player.storage.shzx_yizhi = true;
                                player.awakenSkill('shzx_yizhi');
                                ('step 3');
                                var bool = game.hasPlayer(function (current) {
                                    var List = ['re_sp_zhugeliang', 'ol_sp_zhugeliang', 'sp_zhugeliang'];
                                    return List.includes(current.name) || (current.name2 && List.includes(current.name2));
                                });
                                bool ? player.addSkill('shzx_dingce') : player.addSkill('shzx_yizhi_skill');
                            },
                        },
                        shzx_yizhi_skill: {
                            usable: 1,
                            audio: 'ext:蜀汉中兴/audio:true',
                            enable: 'phaseUse',
                            ai: {
                                threaten: 3,
                            },
                            content() {
                                'step 0';
                                var list = { basic: [], equip: [], trick: [], delay: [] };
                                for (var i = 0; i < lib.inpile.length; i++) {
                                    var name = lib.inpile[i];
                                    var info = lib.card[name];
                                    if (info.autoViewAs || name == 'yuansuhuimie') continue;
                                    if (lib.filter.cardEnabled({ name: name }, player)) {
                                        if (!list[info.type]) {
                                            list[info.type] = [];
                                        }
                                        list[info.type].push([get.translation(lib.card[name].type), '', name]);
                                    }
                                }
                                list.trick.sort(lib.sort.name);
                                var dialog = ui.create.dialog('遗志', [list.trick, 'vcard']);
                                var rand1 = Math.random() < 1 / 3;
                                var rand2 = Math.random() < 0.5;
                                var rand3 = Math.random() < 1 / 3;
                                var rand4 = Math.random() < 1 / 3;
                                player.chooseButton(dialog, true).ai = function (button) {
                                    var name = button.link[2];
                                    if (player.hp <= 1) {
                                        switch (name) {
                                            case 'zhiliaobo':
                                                return 1;
                                            case 'dunpaigedang':
                                                return 0.8;
                                            case 'nanman':
                                                return 0.5;
                                            default:
                                                return 0;
                                        }
                                    }
                                    if (rand4 && player.countCards('h') <= 1) {
                                        switch (name) {
                                            case 'zengbin':
                                                return 1;
                                            case 'wuzhong':
                                                return 0.8;
                                            default:
                                                return 0;
                                        }
                                    }
                                    if (player.hasSkill('qinglonglingzhu')) {
                                        if (rand2) return name == 'chiyuxi' ? 0.8 : 0;
                                        return name == 'jingleishan' ? 0.8 : 0;
                                    }
                                    if (rand2) return name == 'wanjian' ? 0.8 : 0;
                                    return name == 'nanman' ? 0.8 : 0;
                                };
                                ('step 1');
                                if (result.links?.length) {
                                    player.chooseUseTarget(result.links[0][2], true, false);
                                }
                            },
                        },
                        shzx_tianbian: {
                            audio: 'tianbian',
                            enable: 'chooseCard',
                            popup: false,
                            check(event, player) {
                                var player = _status.event.player;
                                return !player.hasCard(function (card) {
                                    var val = get.value(card);
                                    return val < 0 || (val <= 4 && card.number >= 11);
                                }, 'h')
                                    ? 20
                                    : 0;
                            },
                            filter(event, player) {
                                return event.type == 'compare' && !event.directresult;
                            },
                            onCompare(player) {
                                return game.cardsGotoOrdering(get.cards()).cards;
                            },
                            group: ['shzx_tianbian_number', 'shzx_tianbian_After'],
                            subSkill: {
                                After: {
                                    trigger: {
                                        player: 'chooseToCompareAfter',
                                        target: 'chooseToCompareAfter',
                                    },
                                    forced: true,
                                    audio: 'tianbian',
                                    filter(event, player) {
                                        if (player == event.player) {
                                            return event.num1 > event.num2;
                                        } else {
                                            return event.num2 > event.num1;
                                        }
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                                number: {
                                    trigger: {
                                        player: 'compare',
                                        target: 'compare',
                                    },
                                    filter(event, player) {
                                        if (event.iwhile) return false;
                                        if (event.player == player) {
                                            return event.card1.suit == 'heart' || event.card1.name == 'sha';
                                        } else {
                                            return event.card2.suit == 'heart' || event.card2.name == 'sha';
                                        }
                                    },
                                    silent: true,
                                    content() {
                                        if (player == trigger.player) {
                                            trigger.num1 = 13;
                                            if (trigger.num2 == 13) {
                                                trigger.num1++;
                                                game.log(player, '拼点牌点数视为', '#yJoker');
                                            } else {
                                                game.log(player, '拼点牌点数视为', '#yK');
                                            }
                                        } else {
                                            trigger.num2 = 13;
                                            if (trigger.num1 == 13) {
                                                trigger.num2++;
                                                game.log(player, '拼点牌点数视为', '#yJoker');
                                            } else {
                                                game.log(player, '拼点牌点数视为', '#yK');
                                            }
                                        }
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                        },
                        shzx_zhuandui: {
                            shaRelated: true,
                            audio: 'zhuandui',
                            group: ['shzx_zhuandui_respond', 'shzx_zhuandui_use'],
                            subSkill: {
                                use: {
                                    audio: 'zhuandui',
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.target) < 0;
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha' && player.canCompare(event.target);
                                    },
                                    logTarget: 'target',
                                    content() {
                                        'step 0';
                                        player.chooseToCompare(trigger.target);
                                        ('step 1');
                                        if (result.bool) {
                                            trigger.parent.directHit.add(trigger.target);
                                        }
                                    },
                                },
                                respond: {
                                    audio: 'zhuandui',
                                    trigger: {
                                        target: 'useCardToTargeted',
                                    },
                                    check(event, player) {
                                        return get.effect(player, event.card, event.player, player) < 0;
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha' && player.canCompare(event.player);
                                    },
                                    logTarget: 'player',
                                    content() {
                                        'step 0';
                                        player.chooseToCompare(trigger.player);
                                        ('step 1');
                                        if (result.bool) {
                                            trigger.parent.excluded.add(player);
                                        }
                                    },
                                },
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (card.name == 'sha' && current < 0) return 0.7;
                                    },
                                },
                            },
                        },
                        shzx_jianzheng: {
                            audio: 'jianzheng',
                            trigger: {
                                global: 'useCardToPlayer',
                            },
                            filter(event, player) {
                                if (!player.countCards('h')) return false;
                                return event.player != player && event.card.name == 'sha' && !event.targets.includes(player) && event.player.inRange(player);
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var effect = 0;
                                for (var i = 0; i < trigger.targets.length; i++) {
                                    effect -= get.effect(trigger.targets[i], trigger.card, trigger.player, player);
                                }
                                if (effect > 0) {
                                    if (get.color(trigger.card) != 'black') {
                                        effect = 0;
                                    } else {
                                        effect = 1;
                                    }
                                    if (trigger.targets.length == 1) {
                                        if (trigger.targets[0].hp == 1) {
                                            effect++;
                                        }
                                        if (effect > 0 && trigger.targets[0].countCards('h') < player.countCards('h')) {
                                            effect++;
                                        }
                                    }
                                    if (effect > 0) {
                                        effect += 6;
                                    }
                                }
                                player
                                    .chooseCard('h', get.prompt2('shzx_jianzheng', trigger.player))
                                    .set('ai', function (card) {
                                        if (_status.event.effect >= 0) {
                                            var val = get.value(card);
                                            if (val < 0) return 10 - val;
                                            return _status.event.effect - val;
                                        }
                                        return 0;
                                    })
                                    .set(
                                        'effect',
                                        effect
                                    )('step 1');
                                if (result.cards?.length) {
                                    event.card = result.cards[0];
                                    trigger.targets.length = 0;
                                    trigger.parent.triggeredTargets1.length = 0;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                ('step 3');
                                if (event.card) {
                                    player.lose(event.card, ui.special, 'visible');
                                    player.$throw(event.card, 1000);
                                }
                                ('step 4');
                                if (event.card) {
                                    event.card.fix();
                                    ui.cardPile.insertBefore(event.card, ui.cardPile.childNodes[1]);
                                    game.updateRoundNumber();
                                    game.log(player, '将', card, '置于牌堆顶第二张');
                                }
                                ('step 5');
                                if (get.color(trigger.card) != 'black') {
                                    trigger.parent.targets.push(player);
                                    trigger.player.line(player);
                                }
                                ('step 6');
                                var list = [];
                                var list3 = [];
                                if (ui.cardPile.childNodes.length == 0) {
                                    //return ;
                                    game.shzxwashCard();
                                }
                                list.push(ui.cardPile.childNodes[0]);
                                for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                                    list3.unshift(ui.cardPile.childNodes[i]);
                                }
                                if (list3.length > 1) {
                                    list3.length = 1;
                                }
                                event.dialog = ui.create.dialog('谏征<br>选择并使用1张牌');
                                var dialog = event.dialog;
                                dialog.add('<div class="text center">牌堆顶</div>');
                                dialog.addSmall([list, 'card']);
                                dialog.add('<div class="text center">牌堆底</div>');
                                if (1 < ui.cardPile.childNodes.length) {
                                    list3.length ? dialog.addSmall([list3, 'card']) : dialog.addText('无');
                                } else {
                                    dialog.add('<div class="text center">牌堆底的牌已经等同于牌堆顶的牌</div>');
                                }
                                player
                                    .chooseButton(1)
                                    .set('ai', function (button) {
                                        return get.value(button.link, _status.event.player);
                                    })
                                    .set('dialog', dialog)
                                    .set('filterButton', function (button) {
                                        return game.hasPlayer(function (current) {
                                            return _status.event.player.canUse(button, current);
                                        });
                                    });
                                ('step 7');
                                event.dialog.close();
                                if (result.links?.length) {
                                    player.chooseUseTarget(result.links, true, false, 'nodistance');
                                    game.updateRoundNumber();
                                }
                            },
                        },
                        shzx_fumian: {
                            audio: 'fumian',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            group: 'shzx_fumian2',
                            content() {
                                'step 0';
                                player.chooseTarget('请选择获得牌的目标', 1, function (card, player, target) {
                                    return true;
                                }).ai = function (target) {
                                    var player = _status.event.player;
                                    if (get.attitude(player, target) == 0) return 0;
                                    if (target.getEnemies().includes(player)) return 0;
                                    else {
                                        if (target.countCards('j', 'lebu') > 0) return 0;
                                        if (player.getDamagedHp() > 0 && target != player && get.attitude(player, target) > 4 && target.countCards('h') < 5) return 6;
                                        if (player == target) return 5;
                                    }
                                    return 0;
                                };
                                ('step 1');
                                var target;
                                result && result.targets && result.targets.length ? (target = result.targets[0]) : (target = player);
                                _status.event.target = target;
                                game.log(player, '选择了', target, '作为获得牌的目标');
                                if (ui.cardPile.childNodes.length < 2) {
                                    game.shzxwashCard();
                                }
                                var List = ['red', 'black', '两种花色'];
                                target.chooseControl(List, true).ai = function () {
                                    var card1 = ui.cardPile.childNodes[0];
                                    var card2 = ui.cardPile.childNodes[1];
                                    var red = ['heart', 'diamond'];
                                    var black = ['club', 'spade'];
                                    if (red.includes(card1.suit) && red.includes(card2.suit)) {
                                        return 'red';
                                    } else if (black.includes(card1.suit) && black.includes(card2.suit)) {
                                        return 'black';
                                    }
                                    return '两种花色';
                                };
                                ('step 2');
                                if (result.control) {
                                    game.log(player, '选择了', result.control);
                                    if (result.control == '两种花色') {
                                        event.color = null;
                                        event.List2 = ['heart', 'diamond', 'club', 'spade'];
                                        event.target.chooseControl(event.List2, true).ai = function () {
                                            var card1 = ui.cardPile.childNodes[0];
                                            return card1.suit;
                                        };
                                    } else {
                                        if (result.control == 'red') {
                                            event.color = ['heart', 'diamond'];
                                        } else if (result.control == 'black') {
                                            event.color = ['club', 'spade'];
                                        }
                                        event.goto(5);
                                    }
                                }
                                ('step 3');
                                if (result.control) {
                                    event.suit1 = result.control;
                                    game.log(event.target, '选择了', event.suit1);
                                    event.List3 = ['heart', 'diamond', 'club', 'spade'];
                                    event.List3.remove(event.suit1);
                                    event.target.chooseControl(event.List3, true).ai = function () {
                                        var card2 = ui.cardPile.childNodes[1];
                                        return card2.suit;
                                    };
                                }
                                ('step 4');
                                if (result.control) {
                                    event.suit2 = result.control;
                                    game.log(event.target, '选择了', event.suit2);
                                }
                                ('step 5');
                                if (event.cards == undefined) event.cards = [];
                                ('step 6');
                                var card = get.cards(1);
                                game.cardsGotoOrdering(card);
                                player.showCards(card);
                                //game.log('0:',event.color,',1:',event.suit1,',2',event.suit2)
                                if ((event.color && event.color != null && event.color.includes(card[0].suit)) || card[0].suit == event.suit1 || card[0].suit == event.suit2) {
                                    event.cards.push(card[0]);
                                    event.redo();
                                }
                                ('step 7');
                                if (event.cards.length) {
                                    event.target.gain(event.cards, 'gain2');
                                }
                                if (event.target != player) {
                                    event.target.addTempSkill('shzx_fumian2_effect', { player: 'phaseAfter' });
                                    event.target.storage.shzx_fumian2_effect = player;
                                }
                                event.finish();
                            },
                        },
                        shzx_fumian2: {
                            forced: true,
                            trigger: {
                                player: 'recoverAfter',
                            },
                            audio: 'fumian',
                            filter(event, player) {
                                return event.source;
                            },
                            content() {
                                trigger.source.draw();
                            },
                            subSkill: {
                                effect: {
                                    forced: true,
                                    mark: true,
                                    intro: {
                                        content(storage) {
                                            return `出牌阶段结束后令${lib.translate[storage.name]}回复一点体力`;
                                        },
                                    },
                                    trigger: {
                                        player: 'phaseUseAfter',
                                    },
                                    filter(event, player) {
                                        return player.storage.shzx_fumian2_effect;
                                    },
                                    content() {
                                        player.storage.shzx_fumian2_effect.recover();
                                    },
                                },
                            },
                        },
                        shzx_daiyan: {
                            audio: 'daiyan',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            filterCard: true,
                            lose: false,
                            discard: false,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                'step 0';
                                event.cardname = cards[0].name;
                                event.cardtype = lib.card[cards[0].name].type;
                                player.lose(cards, ui.special);
                                game.broadcastAll(
                                    function (player, card) {
                                        var cardx = ui.create.card();
                                        cardx.name = event.cardname;
                                        cardx.type = event.cardtype;
                                        cardx.classList.add('infohidden');
                                        cardx.classList.add('infoflip');
                                        player.$throw(cardx, 1000, 'nobroadcast');
                                    },
                                    player,
                                    cards[0]
                                );
                                player.chooseControl('牌名', '类别', true).set('ai', function (event) {
                                    if (get.attitude(player, target) > 0) {
                                        return '牌名';
                                    } else return '类别';
                                });
                                ('step 1');
                                event.choice = result.control;
                                switch (event.choice) {
                                    case '牌名':
                                        game.log(player, '声明了牌名:', event.cardname);
                                        break;
                                    case '类别':
                                        game.log(player, '声明了类别:', event.cardtype, '牌');
                                        break;
                                    //case '颜色' : game.log('颜色:',cards[0].color);
                                }
                                ('step 2');
                                var list = { basic: [], equip: [], trick: [], delay: [] };
                                for (var i = 0; i < lib.inpile.length; i++) {
                                    var name = lib.inpile[i];
                                    var info = lib.card[name];
                                    if (info.autoViewAs || name == 'yuansuhuimie') continue;
                                    if (!list[info.type]) {
                                        list[info.type] = [];
                                    }
                                    list[info.type].push([get.translation(lib.card[name].type), '', name]);
                                }
                                list[event.cardtype].sort(lib.sort.name);
                                var dialog = ui.create.dialog('怠宴', [list[event.cardtype], 'vcard']);
                                target.chooseButton(dialog, true).ai = function (button) {
                                    if (event.choice == '牌名') {
                                        return button.link[2] == event.cardname;
                                    } else {
                                        return Math.random();
                                    }
                                };
                                ('step 3');
                                if (result.links?.length) {
                                    game.log(target, '选择了:', result.links[0][2]);
                                    target.say('我猜' + lib.translate[result.links[0][2]]);
                                    //player.showCards(cards[0]);
                                    game.log('牌名为:', event.cardname, ',类别为:', event.cardtype, '牌');
                                    if (result.links[0][2] == event.cardname) {
                                        target.recover();
                                        target.gain(cards[0], player, 'gain2');
                                    } else {
                                        target.damage('nocard');
                                        game.cardsDiscard(cards[0]);
                                    }
                                }
                            },
                            ai: {
                                order: 5,
                                result: {
                                    target(player, target) {
                                        return get.attitude(player, target);
                                    },
                                },
                            },
                        },
                        shzx_rangxing: {
                            audio: 'ext:蜀汉中兴/audio:true',
                            enable: 'phaseUse',
                            init(player, skill) {
                                player.storage.shzx_rangxing = []; //QQQ
                                player.addSkill('shzx_rangxing_effect');
                            },
                            filterTarget(card, player, target) {
                                for (var i = 0; i < player.storage.shzx_rangxing.length; i++) {
                                    if (player.storage.shzx_rangxing[i][0] == target) return false;
                                }
                                return !target.storage.shzx_rangxingeffect;
                            },
                            content() {
                                target.storage.shzx_rangxingeffect = player;
                                var number = target.phaseNumber;
                                const List = [];
                                Reflect.defineProperty(List, '0', {
                                    get() {
                                        return target;
                                    },
                                });
                                Reflect.defineProperty(List, '1', {
                                    get() {
                                        return target.phaseNumber - number;
                                    },
                                });
                                player.storage.shzx_rangxing.add(List);
                                player.awakenSkill('shzx_rangxing');
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target(player, target) {
                                        var basis = get.threaten(target);
                                        var att = get.attitude(player, target);
                                        return basis * att;
                                    },
                                    player: 1,
                                },
                            },
                            subSkill: {
                                effect: {
                                    superCharlotte: true,
                                    charlotte: true,
                                    fixed: true,
                                    mark: true,
                                    marktext: '禳',
                                    intro: {
                                        content(storage, player) {
                                            var str = '【禳星】:';
                                            if (player.storage.shzx_rangxing.length) {
                                                for (var i = 0; i < player.storage.shzx_rangxing.length; i++) {
                                                    var target = player.storage.shzx_rangxing[i];
                                                    str += `<br>${lib.translate[target[0].name]}:已经进行了${target[1]}回合`;
                                                }
                                            } else {
                                                str += '无目标';
                                            }
                                            return str;
                                        },
                                    },
                                    trigger: {
                                        global: 'dieBefore',
                                        player: 'die',
                                    },
                                    forceDie: true,
                                    forced: true,
                                    init: (player) => (player.storage.shzx_rangxing = []), //QQQ
                                    filter(event, player, name) {
                                        if (player.isDead() && name != 'die') return false;
                                        if (name == 'die') return true;
                                        for (var i = 0; i < player.storage.shzx_rangxing.length; i++) {
                                            if (player.storage.shzx_rangxing[i][0] == event.player && player.storage.shzx_rangxing[i][1] < 8 && event.player.maxHp > 0) return true;
                                        }
                                        return false;
                                    },
                                    content() {
                                        var name = event.triggername;
                                        if (name == 'die') {
                                            for (var i = 0; i < player.storage.shzx_rangxing.length; i++) {
                                                var target = player.storage.shzx_rangxing[i];
                                                if (target[1] < 8) {
                                                    target[0].addSkill('shzx_liuli_effect');
                                                }
                                            }
                                        } else {
                                            var source = trigger.source;
                                            trigger.cancel();
                                            var next = player.loseMaxHp();
                                            player.chat('天道轮回,吾为子益换回活命之机,又怎能不付出一些代价？');
                                            next.source = source;
                                        }
                                    },
                                },
                            },
                        },
                        shzx_liuli: {
                            audio: 'ext:蜀汉中兴/audio:true',
                            trigger: {
                                global: 'phaseBegin',
                            },
                            forced: true,
                            forceDie: true,
                            init: (player) => (player.storage.shzx_rangxing = []), //QQQ
                            filter(event, player) {
                                if (!player.storage.shzx_rangxing) {
                                    player.storage.shzx_rangxing = []; //QQQ
                                }
                                var target = event.player.storage.shzx_rangxingeffect;
                                if (!target || target != player) return false;
                                for (var i = 0; i < player.storage.shzx_rangxing.length; i++) {
                                    var storage = player.storage.shzx_rangxing[i];
                                    if (storage[0] == event.player && storage[1] == 8) return true;
                                }
                                return false;
                            },
                            content() {
                                var bool = player.isAlive();
                                if (bool == true) {
                                    trigger.player.gainMaxHp(player.maxHp);
                                    var num = game.countGroup();
                                    trigger.player.draw(num);
                                } else {
                                    trigger.player.addSkill('shzx_liuli_effect');
                                }
                            },
                            subSkill: {
                                effect: {
                                    superCharlotte: true,
                                    charlotte: true,
                                    fixed: true,
                                    mark: true,
                                    marktext: '琉',
                                    intro: {
                                        content(storage, player) {
                                            return '手牌上限减' + player.hp;
                                        },
                                    },
                                    mod: {
                                        maxHandcardBase(player, num) {
                                            return num - player.hp;
                                        },
                                    },
                                },
                            },
                        },
                        shzx_gaiming: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return !player.storage.shzx_gaiming;
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target(player, target) {
                                        var basis = get.threaten(target);
                                        var att = get.attitude(player, target);
                                        return -(basis * att);
                                    },
                                    player: 1,
                                },
                            },
                            filterTarget(card, player, target) {
                                return target.getGainableSkills(function (info, skill) {
                                    return skill != 'shzx_gaiming';
                                }).length;
                            },
                            prompt() {
                                return '(每局限一次)选择一名角色并修改他的一项技能';
                            },
                            content() {
                                'step 0';
                                player.chooseSkill(
                                    target,
                                    function (info, skill) {
                                        return skill != 'shzx_gaiming';
                                    },
                                    `选择并修改${lib.translate[target.name]}的一项技能(此技能除外)`
                                );
                                ('step 1');
                                if (result && result.skill) {
                                    player.storage.shzx_gaiming = true;
                                    game.log(player, '选择了【', lib.translate[result.skill] + '】');
                                    if (event.isMine()) {
                                        var container = ui.create.div('.popup-container.editor');
                                        var editorpage = ui.create.div(container);
                                        var discardConfig = ui.create.div('.editbutton', '取消', editorpage, function () {
                                            ui.window.classList.remove('shortcutpaused');
                                            ui.window.classList.remove('systempaused');
                                            container.delete(null);
                                            delete window.saveNonameInput;
                                        });
                                        discardConfig.style['font-family'] = 'shousha';
                                        var saveInput = function () {
                                            var code;
                                            if (container.editor) {
                                                code = container.editor.getValue();
                                            } else if (container.textarea) {
                                                code = container.textarea.value;
                                            }
                                            try {
                                                var skill = null;
                                                eval(code);
                                                if (skill == null || typeof skill != 'object') {
                                                    throw 'err';
                                                }
                                            } catch (e) {
                                                if (e == 'err') {
                                                    alert('代码格式有错误,请对比示例代码仔细检查');
                                                } else {
                                                    alert(`代码语法有错误,请仔细检查(${e})`);
                                                }
                                                return;
                                            }
                                            lib.skill[result.skill] = skill;
                                            ui.window.classList.remove('shortcutpaused');
                                            ui.window.classList.remove('systempaused');
                                            container.delete();
                                            container.code = code;
                                            delete window.saveNonameInput;
                                        };
                                        var saveConfig = ui.create.div('.editbutton', '保存', editorpage, saveInput);
                                        saveConfig.style['font-family'] = 'shousha';
                                        var editor = ui.create.div(editorpage);
                                        var skills = get.stringify(lib.skill[result.skill]);
                                        container.code = 'skill=' + skills;
                                        var node = container;
                                        ui.window.classList.add('shortcutpaused');
                                        ui.window.classList.add('systempaused');
                                        window.saveNonameInput = saveInput;
                                        if (node.aced) {
                                            ui.window.appendChild(node);
                                            node.editor.setValue(node.code, 1);
                                        } else if (lib.device == 'ios') {
                                            ui.window.appendChild(node);
                                            if (!node.textarea) {
                                                var textarea = document.createElement('textarea');
                                                editor.appendChild(textarea);
                                                node.textarea = textarea;
                                                lib.setScroll(textarea);
                                            }
                                            node.textarea.value = node.code;
                                        } else {
                                            var aceReady = function () {
                                                ui.window.appendChild(node);
                                                var mirror = window.CodeMirror(editor, {
                                                    value: node.code,
                                                    mode: 'javascript',
                                                    lineWrapping: !lib.config.touchscreen && lib.config.mousewheel,
                                                    lineNumbers: true,
                                                    indentUnit: 4,
                                                    autoCloseBrackets: true,
                                                    theme: 'mdn-like',
                                                });
                                                lib.setScroll(editor.querySelector('.CodeMirror-scroll'));
                                                node.aced = true;
                                                node.editor = mirror;
                                            };
                                            if (!window.ace) {
                                                import('../../game/codemirror.js').then(() => {
                                                    aceReady();
                                                });
                                                lib.init.css('layout/default', 'codemirror');
                                            } else {
                                                aceReady();
                                            }
                                        }
                                    } else {
                                        lib.skill[result.skill] = {};
                                        lib.translate[`${result.skill}_info`] = '此技能无效果';
                                    }
                                }
                            },
                        },
                        shzx_kangxing: {
                            forced: true,
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            init(player) { },
                        },
                        shzx_fanghun: {
                            audio: 'ext:蜀汉中兴/audio:2', //QQQ
                            trigger: {
                                player: 'useCard',
                                target: 'useCardToTargeted',
                            },
                            marktext: '影',
                            intro: {
                                content: 'mark',
                                name: '梅影',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                player.addMark('shzx_fanghun', 1);
                            },
                            group: ['shzx_fanghun_sha', 'shzx_fanghun_draw'],
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: ['useCard', 'respond'],
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return event.skill == 'shzx_fanghun_sha' || event.skill == 'shzx_fanghun_shan';
                                    },
                                    content() {
                                        var num = 1;
                                        if (Math.random() >= 0.5) {
                                            num++;
                                        }
                                        player.draw(num);
                                    },
                                },
                                sha: {
                                    enable: ['chooseToUse', 'chooseToRespond'],
                                    prompt: '弃置一枚【梅影】标记,将杀当做闪,或将闪当做杀,或将桃当做酒,或将酒当做桃使用或打出',
                                    viewAs(cards, player) {
                                        var name = false;
                                        switch (cards[0]?.name) {
                                            case 'sha':
                                                name = 'shan';
                                                break;
                                            case 'shan':
                                                name = 'sha';
                                                break;
                                            case 'tao':
                                                name = 'jiu';
                                                break;
                                            case 'jiu':
                                                name = 'tao';
                                                break;
                                        }
                                        if (name) return { name: name };
                                        return null;
                                    },
                                    check(card) {
                                        var player = _status.event.player;
                                        if (_status.event.type == 'phase') {
                                            var max = 0;
                                            var name2;
                                            var list = ['sha', 'tao', 'jiu'];
                                            var map = { sha: 'shan', tao: 'jiu', jiu: 'tao' };
                                            for (var i = 0; i < list.length; i++) {
                                                var name = list[i];
                                                if (player.countCards('h', map[name]) > (name == 'jiu' ? 1 : 0) && player.getUseValue({ name: name }) > 0) {
                                                    var temp = get.order({ name: name });
                                                    if (temp > max) {
                                                        max = temp;
                                                        name2 = map[name];
                                                    }
                                                }
                                            }
                                            if (name2 == card.name) return 1;
                                            return 0;
                                        }
                                        return 1;
                                    },
                                    filterCard(card, player, event) {
                                        event = event || _status.event;
                                        var filter = event._backup.filterCard;
                                        var name = card.name;
                                        if (name == 'sha' && filter({ name: 'shan', cards: [card] }, player, event)) return true;
                                        if (name == 'shan' && filter({ name: 'sha', cards: [card] }, player, event)) return true;
                                        if (name == 'tao' && filter({ name: 'jiu', cards: [card] }, player, event)) return true;
                                        if (name == 'jiu' && filter({ name: 'tao', cards: [card] }, player, event)) return true;
                                        return false;
                                    },
                                    filter(event, player) {
                                        if (!player.storage.shzx_fanghun || player.storage.shzx_fanghun < 0) return false;
                                        var filter = event.filterCard;
                                        if (filter({ name: 'sha' }, player, event) && player.countCards('h', 'shan')) return true;
                                        if (filter({ name: 'shan' }, player, event) && player.countCards('h', 'sha')) return true;
                                        if (filter({ name: 'tao' }, player, event) && player.countCards('h', 'jiu')) return true;
                                        if (filter({ name: 'jiu' }, player, event) && player.countCards('h', 'tao')) return true;
                                        return false;
                                    },
                                    onrespond() {
                                        return this.onuse.apply(this, arguments);
                                    },
                                    onuse(result, player) {
                                        player.removeMark('shzx_fanghun', 1);
                                    },
                                    ai: {
                                        respondSha: true,
                                        respondShan: true,
                                        save: true,
                                        skillTagFilter(player, tag) {
                                            if (!player.storage.shzx_fanghun || player.storage.shzx_fanghun < 0) return false;
                                            var name;
                                            switch (tag) {
                                                case 'respondSha':
                                                    name = 'shan';
                                                    break;
                                                case 'respondShan':
                                                    name = 'sha';
                                                    break;
                                                case 'save':
                                                    name = 'jiu';
                                                    break;
                                            }
                                            if (!player.countCards('h', name)) return false;
                                        },
                                        order(item, player) {
                                            if (player && _status.event.type == 'phase') {
                                                var max = 0;
                                                var list = ['sha', 'tao', 'jiu'];
                                                var map = { sha: 'shan', tao: 'jiu', jiu: 'tao' };
                                                for (var i = 0; i < list.length; i++) {
                                                    var name = list[i];
                                                    if (player.countCards('h', map[name]) > (name == 'jiu' ? 1 : 0) && player.getUseValue({ name: name }) > 0) {
                                                        var temp = get.order({ name: name });
                                                        if (temp > max) max = temp;
                                                    }
                                                }
                                                if (max > 0) max += 0.3;
                                                return max;
                                            }
                                            return 4;
                                        },
                                    },
                                },
                            },
                        },
                        // 限定技,回合开始时,你可以移去所有<梅影>标记并摸等量的牌,随机观看并展示五名未登场的蜀势力角色,获得其中任意武将牌上共三个技能.(禁用自书和龙胆,幸运星模式下,【旧关索】,【夏侯霸】,【界吴懿】出现概率提升)
                        shzx_fuhan_zx: {
                            audio: 'fuhan',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            limited: true,
                            filter(event, player) {
                                return player.countMark('shzx_fanghun') > 0;
                            },
                            async content(event, trigger, player) {
                                player.draw(player.storage.shzx_fanghun);
                                player.removeMark('shzx_fanghun', player.storage.shzx_fanghun);
                                const list = Object.keys(lib.character)
                                    .filter((q) => lib.character[q].group == 'shu')
                                    .randomGets(5);
                                const skills = [];
                                for (const i of list) {
                                    const info = lib.character[i];
                                    if (info.skills) {
                                        skills.addArray(info.skills);
                                    }
                                }
                                const { links } = await player
                                    .chooseButton(['请选择技能', [list, 'character'], [skills.map((i) => [i, get.translation(i)]), 'tdnodes']], [1, 3])
                                    .set('filterButton', (button) => skills.includes(button.link))
                                    .set('ai', (b) => Math.random())
                                    .forResult();
                                if (links?.length) {
                                    player.addSkillLog(links);
                                    player.awakenSkill('shzx_fuhan_zx');
                                }
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        shzx_tianjiang: {
                            audio: 'pytianjiang',
                            trigger: {
                                global: 'gameDrawAfter',
                                player: 'enterGame',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var i = 0;
                                var list = [];
                                while (i++ < 2) {
                                    var card = get.cardPile(function (card) {
                                        if (get.type(card) != 'equip' || get.cardtag(card, 'gifts')) return false;
                                        return list.length == 0 || get.subtype(card) != get.subtype(list[0]);
                                    });
                                    if (card) list.push(card);
                                }
                                if (!list.length) {
                                    event.finish();
                                    return;
                                }
                                event.list = list;
                                player.gain(event.list, 'gain2');
                                ('step 1');
                                var card = event.list.shift();
                                if (player.getCards('h').includes(card)) {
                                    player.$give(card, player, false);
                                    player.equip(card);
                                }
                                if (event.list.length) event.redo();
                            },
                            group: 'shzx_tianjiang_move',
                            subSkill: {
                                move: {
                                    trigger: {
                                        player: ['damageAfter'],
                                        global: 'phaseUseBegin',
                                    },
                                    popup: false,
                                    usable: 1,
                                    filter(trigger, player) {
                                        var x =
                                            game.countPlayer(function (current) {
                                                return current.countCards('ej') > 0 && current.canMoveCard(null, false);
                                            }) > 0;
                                        return x;
                                    },
                                    async content(event, trigger, player) {
                                        //QQQ
                                        player.moveCard();
                                    },
                                    ai: {
                                        maixie: true,
                                        skillTagFilter(player, tag) {
                                            if (tag == 'maixie') {
                                                if (player.hp <= 2) return false;
                                                if (
                                                    !game.hasPlayer(function (current) {
                                                        return (
                                                            get.attitude(player, current) > 0 &&
                                                            current.getCards('j', function (card2) {
                                                                return ['lebu', 'bingliang', 'shandian'].includes(card2.name);
                                                            }).length
                                                        );
                                                    })
                                                )
                                                    return false;
                                            }
                                        },
                                        effect: {
                                            target(card, player, target) {
                                                if (get.tag(card, 'damage')) {
                                                    if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                                }
                                                if (!target.hasFriend()) return;
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        shzx_zhuren: {
                            audio: 'pyzhuren',
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: true,
                            selectCard: 1,
                            check(card) {
                                var player = _status.event.player;
                                var name = 'pyzhuren_' + card[card.name == 'shandian' ? 'name' : 'suit'];
                                if (!lib.card[name] || (_status.pyzhuren && _status.pyzhuren[name])) {
                                    if (!player.countCards('h', 'sha')) return 4 - get.value(card);
                                    return 0;
                                }
                                return 2 + card.number / 2 - get.value(card);
                            },
                            content() {
                                if (!_status.pyzhuren) _status.pyzhuren = {};
                                var rand = cards[0].number / 13;
                                if (get.isLuckyStar(player)) rand = 1;
                                var name = 'pyzhuren_' + cards[0][cards[0].name == 'shandian' ? 'name' : 'suit'];
                                if (!lib.card[name] || _status.pyzhuren[name] || Math.random() > rand) {
                                    player.popup('杯具');
                                    game.log(player, '锻造失败');
                                    var card = get.cardPile(function (card) {
                                        return card.name == 'sha';
                                    });
                                    if (card) player.gain(card, 'gain2');
                                } else {
                                    _status.pyzhuren[name] = true;
                                    player.gain(game.createCard(name, cards[0].name == 'shandian' ? 'spade' : cards[0].suit, 1), 'gain2');
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player: 1,
                                },
                            },
                            group: 'pyzhuren_destroy',
                        },
                        shzx_tieqi: {
                            shaRelated: true,
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            audio: 'retieji',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) < 0;
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            logTarget: 'target',
                            content() {
                                'step 0';
                                player.judge(function () {
                                    return 0;
                                });
                                if (!trigger.target.hasSkill('fengyin')) {
                                    trigger.target.addTempSkill('fengyin');
                                }
                                ('step 1');
                                var suit = result.card.suit;
                                var target = trigger.target;
                                var cards = target.getCards('h', function (card) {
                                    return card.suit == suit;
                                });
                                if (cards.length == 0) {
                                    game.log(target, '没有', suit, '花色的手牌');
                                    trigger.parent.directHit.add(trigger.target);
                                } else {
                                    target.discard(
                                        target.getCards('he', function (card) {
                                            return card.suit == suit;
                                        })
                                    );
                                }
                            },
                        },
                        shzx_shenwei: {
                            forced: true,
                            superCharlotte: true,
                            charlotte: true,
                            fixed: true,
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            content() {
                                player.chooseUseTarget('###是否发动【神威】？###视为使用一张【杀】', { name: 'sha' }, false);
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (['sha', 'jiu'].includes(card.name)) return num + (player.getStat('damage') || 0);
                                },
                                globalFrom(from, to) {
                                    if (from.hp >= to.hp || from.countCards('h') >= to.countCards('h')) return -Infinity;
                                },
                            },
                        },
                        shzx_niepan: {
                            audio: 'niepan',
                            audioname: ['re_pangtong'],
                            enable: 'chooseToUse',
                            mark: true,
                            limited: true,
                            init(player) {
                                player.storage.shzx_niepan = false;
                            },
                            filter(event, player) {
                                if (player.storage.shzx_niepan) return false;
                                if (event.type == 'dying') {
                                    if (player != event.dying) return false;
                                    return true;
                                } else if (event.parent.name == 'phaseUse') {
                                    return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('shzx_niepan');
                                player.storage.shzx_niepan = true;
                                player.discard(player.getCards('hej'));
                                ('step 1');
                                //	game.log(event.getParent(1).name,event.getParent(2).name,event.getParent(3).name)
                                if (event.getParent(3).name != 'phaseUse') {
                                    player.link(false);
                                } else {
                                    game.countPlayer(function (current) {
                                        current.link(false);
                                    });
                                }
                                ('step 2');
                                player.turnOver(false);
                                ('step 3');
                                player.draw(3);
                                ('step 4');
                                if (player.hp < 3) {
                                    player.recover(3 - player.hp);
                                }
                            },
                            ai: {
                                order: 0.5,
                                skillTagFilter(player) {
                                    if (player.storage.shzx_niepan) return false;
                                    if (player.hp > 0) return false;
                                },
                                save: true,
                                result: {
                                    player(player) {
                                        if (player.hp <= 0) return 10;
                                        if (player.hp <= 1 && player.countCards('he') <= 1) return 10;
                                        if ((player.skills.includes('shzx_niepan') == false && (player.hp < 2 || player.countCards('h') <= 1)) || player.isTurnedOver()) return 5;
                                        return 0;
                                    },
                                },
                                threaten(player, target) {
                                    if (!target.storage.shzx_niepan) return 0.6;
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        /*
            孟获先放置一下,没灵感
            shzx_huoshou:{
                audio:"huoshou1",
                //audioname:['re_menghuo'],
                locked:true,
                group:['shzx_huoshou1','shzx_huoshou2'],
                ai:{
                    effect:{
                        target:function(card,player,target){
                            if(card.name=='nanman') return 0;
                        }
                    }
                }
            },
            shzx_huoshou1:{
                audio:'huoshou1',
                //audioname:['re_menghuo'],
                trigger:{target:'useCardToBefore'},
                forced:true,
                _priority:15,
                filter:function(event,player){
                    return (event.card.name=='nanman');
                },
                content:function(){
                    trigger.cancel();
                },
            },
            shzx_huoshou2:{
                audio:"huoshou1",
                //audioname:['re_menghuo'],
                trigger:{global:'useCard'},
                forced:true,
                filter:function(event,player){
                    return (event.card&&event.card.name=='nanman'&&event.player!=player);
                },
                content:function(){
                    trigger.customArgs.default.customSource=player;
                }
            },*/
                        //法正的想法是,让队友变成本扩展的角色
                        shzx_xuanhuo: {
                            audio: 'xuanhuo',
                            //目标和自己同意后,其变成本扩展的角色
                        },
                        shzx_enyuan: {
                            audio: 'enyuan',
                            //准备改成更容易触发的正面效果
                            trigger: { player: 'damageEnd' },
                            check(event, player) {
                                var att = get.attitude(player, event.source);
                                var num = event.source.countCards('h');
                                if (att <= 0) return true;
                                if (num > 2 && att >= 0 && event.num < 2) return true;
                                if (num > 0) return att < 4;
                                return false;
                            },
                            filter(event, player) {
                                return event.source && event.source != player && event.num > 0 && event.source.isAlive();
                            },
                            content() {
                                'step 0';
                                event.num = Math.min(trigger.num, 9);
                                ('step 1');
                                trigger.source.chooseCard(trigger.num, `交给${get.translation(player) + trigger.num}张手牌或流失一点体力`).set('ai', function (card) {
                                    if (get.attitude(_status.event.player, _status.event.parent.player) > 0) {
                                        return 11 - get.value(card);
                                    } else {
                                        return 7 - get.value(card);
                                    }
                                });
                                ('step 2');
                                if (result.cards?.length) {
                                    player.gain(result.cards, trigger.source, 'giveAuto');
                                } else {
                                    trigger.source.loseHp();
                                }
                                if (event.num > 1) {
                                    event.num--;
                                    event.goto(1);
                                }
                            },
                            ai: {
                                maixie_defend: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -1.5];
                                            return [1, 1];
                                        }
                                    },
                                },
                            },
                            group: 'shzx_enyuan2',
                        },
                        shzx_enyuan2: {
                            audio: 'xinenyuan2',
                            trigger: { player: ['gainEnd', 'recoverEnd'] },
                            filter(event, player, name) {
                                if (!(event.source && event.source.isAlive() && event.source != player)) return false;
                                if (name == 'gainEnd') return event.cards && event.cards.length;
                                if (name == 'recoverEnd') return event.num > 0;
                            },
                            logTarget: 'source',
                            check(event, player) {
                                return get.attitude(player, event.source) > 0;
                            },
                            content() {
                                trigger.source.draw();
                            },
                        },
                    },
                };
                lib.config.all.characters.add('蜀汉中兴');
                lib.config.characters.add('蜀汉中兴');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:蜀汉中兴/image/${i}.jpg`);
                }
                lib.translate['蜀汉中兴_character_config'] = `蜀汉中兴`;
                return QQQ;
            });
        },
        config: {
            iframe: {
                clear: true,
                name: '双开无名杀(测试版)',
                intro: '双开后无法使用本扩展的换肤功能以及另外的一些bug请见谅',
                onclick(item) {
                    if (window.shzx_iframe == true) return alert('暂时不支持三开哦');
                    window.shzx_iframe = true;
                    var dialog = ui.create.dialog();
                    dialog.style.width = '70%';
                    dialog.style.height = '65%';
                    var remove = dialog.remove;
                    dialog.remove = function () {
                        if (dialog.willremove == true) {
                            remove.call(this);
                        }
                    };
                    window.诗笺_shzxframe = document.createElement('iframe');
                    window.诗笺_shzxframe.id = '诗笺';
                    document.body.appendChild(window.诗笺_shzxframe);
                    window.诗笺_shzxframe.contentWindow.id = '诗笺';
                    window.诗笺_shzx = window.frames.诗笺.contentWindow;
                    window.诗笺_shzx.shzx_iframe = true;
                    var num = window.frames.诗笺.contentWindow.setInterval.call(
                        window,
                        function () {
                            dialog.show();
                        },
                        1000
                    );
                    window.诗笺_shzxframe.style.width = '85%';
                    window.诗笺_shzxframe.style.height = '330px';
                    window.诗笺_shzxframe.src = window.location.href;
                    window.诗笺_shzxframe.align = 'middle';
                    window.诗笺_shzxframe.scrolling = 'yes';
                    window.诗笺_shzxframe.shzx_skin = false;
                    //window.诗笺_shzx.onloadExtension()
                    dialog.content.appendChild(window.诗笺_shzxframe);
                    var backbutton = ui.create.div('.menubutton.round', '返', dialog.content, function () {
                        dialog.willremove = true;
                        window.诗笺_shzx.clearInterval.call(window, num);
                        dialog.remove();
                        window.shzx_iframe = false;
                    });
                    backbutton.style.bottom = '10px';
                    backbutton.style.right = '10px';
                    backbutton.style.background = 'rgba(0,0,0,0.4)';
                    backbutton.style.color = 'white';
                    backbutton.style.textShadow = 'rgba(0,0,0,0.5) 0px 0px 2px';
                    backbutton.style.boxShadow = 'rgba(0, 0, 0, 0.3) 0 0 0 1px, rgba(0, 0, 0, 0.3) 0 3px 10px';
                    backbutton.style.position = 'fixed';
                    if (_status.event.dialog) {
                        _status.event.dialog.show();
                    }
                },
            },
            changeDialog: {
                init: true,
                name: '改变dialog样式',
            },
            music: {
                name: '节奏大师',
                init: false,
                intro: '玩家的回合可以进行一次节奏大师游戏,摸x张牌,x为获得的分数/3且向下取整',
            },
        },
        package: {
            intro: "<br><br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br><br></span><a target='_top' href='http://wpa.qq.com/msgrd?v=3&uin=2954700422&site=qq&menu=no'><img border='0' src='http://q1.qlogo.cn/g?b=qq&nk=2954700422&s=3' alt='点击这里私聊我' title='点击这里私聊诗笺'/></a>←点击这里私聊诗笺",
            author: '诗笺',
            version: '1.7',
        },
    };
});
