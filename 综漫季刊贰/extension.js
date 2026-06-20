import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '综漫季刊贰',
        content(config, pack) {
            //------------------------------------------------星级--------------------------------------------------//
            lib.characterTitle.zmfalujin = `<img src=extension/综漫季刊贰/四星.png width="77" height="20">`;
            lib.characterTitle.zmkuangxiaozizai = `<img src=extension/综漫季刊贰/三星.png width="59" height="22">`;
            lib.characterTitle.zmgongjiazhengliang = `<img src=extension/综漫季刊贰/三星.png width="59" height="22">`;
            lib.characterTitle.zmgongyuantao = `<img src=extension/综漫季刊贰/三星.png width="59" height="22">`;
            lib.characterTitle.zmdouzhangchulan = `<img src=extension/综漫季刊贰/三星.png width="59" height="22">`;
            lib.characterTitle.zmfawangye = `<img src=extension/综漫季刊贰/三星.png width="59" height="22">`;
            lib.characterTitle.zmshachenduo = `<img src=extension/综漫季刊贰/三星.png width="59" height="22">`;
            lib.characterTitle.zmshafengbao = `<img src=extension/综漫季刊贰/三星.png width="59" height="22">`;
            lib.characterTitle.zmjianzaomenxiongmei = `<img src=extension/综漫季刊贰/三星.png width="59" height="22">`;
            lib.characterTitle.zmjianlianyuxingshoulang = `<img src=extension/综漫季刊贰/三星.png width="59" height="22">`;
            lib.characterTitle.zmshayouaier = `<img src=extension/综漫季刊贰/三星.png width="59" height="22">`;
            lib.characterTitle.zmfaaweisibulong = `<img src=extension/综漫季刊贰/三星.png width="59" height="22">`;
            lib.characterTitle.zmhusaixili = `<img src=extension/综漫季刊贰/二星.png width="47" height="20">`;
            lib.characterTitle.zmqiangbuladamante = `<img src=extension/综漫季刊贰/三星.png width="59" height="22">`;
            lib.characterTitle.zmlinyuzhe = `<img src=extension/综漫季刊贰/五星.png width="84" height="22">`;
            lib.characterTitle.zmtidiyaboluo = `<img src=extension/综漫季刊贰/四星.png width="77" height="20">`;
            lib.characterTitle.zmfacangqiqingzi = `<img src=extension/综漫季刊贰/四星.png width="77" height="20">`;
            lib.characterTitle.zmfalanranzongyoujie = `<img src=extension/综漫季刊贰/四星.png width="77" height="20">`;
            lib.characterTitle.zmgongaertaier = `<img src=extension/综漫季刊贰/四星.png width="77" height="20">`;
            lib.characterTitle.zmlingaobolong = `<img src=extension/综漫季刊贰/四星.png width="77" height="20">`;
            lib.characterTitle.zmlingmingcanxue = `<img src=extension/综漫季刊贰/三星.png width="59" height="22">`;
            lib.characterTitle.zmdousani = `<img src=extension/综漫季刊贰/四星.png width="77" height="20">`;
            lib.characterTitle.zmlinyakedemolai = `<img src=extension/综漫季刊贰/三星.png width="59" height="22">`;
            lib.characterTitle.zmtikongzhilvzhe = `<img src=extension/综漫季刊贰/四星.png width="77" height="20">`;
            lib.characterTitle.zmtishizhilvzhe = `<img src=extension/综漫季刊贰/四星.png width="77" height="20">`;
            lib.characterTitle.zmjianleizhilvzhe = `<img src=extension/综漫季刊贰/三星.png width="59" height="22">`;
            lib.characterTitle.zmkelizhilvzhe = `<img src=extension/综漫季刊贰/四星.png width="77" height="20">`;
            lib.characterTitle.zmgongxiyeer = `<img src=extension/综漫季刊贰/三星.png width="59" height="22">`;
            lib.characterTitle.zmkexiaosi = `<img src=extension/综漫季刊贰/三星.png width="59" height="22">`;
            lib.characterTitle.zmlingaierkuite = `<img src=extension/综漫季刊贰/四星.png width="77" height="20">`;
            //------------------------------------------------------卡面查看--------------------------------------------------------//
            game.say2 = function (str) {
                var dialog = ui.create.dialog('hidden');
                dialog.classList.add('static');
                dialog.add(`<div class="text" style="word-break:break-all;display:inline">${str}</div>`);
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
                dialog.style.top = 'calc(10%)';
                setTimeout(function () {
                    dialog.delete();
                }, 3500);
            };
            //------------------------------------------------看来用不上了的分栏及势力--------------------------------------------------//
            lib.group.push('zm2dao');
            lib.translate.zm2dao = '道';
            lib.translate.zm2daoColor = '#FFFF00';
            lib.group.push('zm2ti');
            lib.translate.zm2ti = '替';
            lib.translate.zm2tiColor = '#FFFF00';
            lib.group.push('zm2yan');
            lib.translate.zm2yan = '衍';
            lib.translate.zm2yanColor = '#FFFF00';
            lib.group.push('zm2do');
            lib.translate.zm2do = '斗';
            lib.translate.zm2doColor = '#FFFF00';
            lib.group.push('zm2ke');
            lib.translate.zm2ke = '科';
            lib.translate.zm2keColor = '#FFFF00';
            lib.group.push('zm2xie');
            lib.translate.zm2xie = '谐';
            lib.translate.zm2xieColor = '#FFFF00';
            lib.group.push('zm2qiang');
            lib.translate.zm2qiang = '枪';
            lib.translate.zm2qiangColor = '#FFFF00';
            lib.group.push('zm2kuang');
            lib.translate.zm2kuang = '狂';
            lib.translate.zm2kuangColor = '#FFFF00';
            lib.group.push('zm2gong');
            lib.translate.zm2gong = '弓';
            lib.translate.zm2gongColor = '#FFFF00';
            lib.group.push('zm2fa');
            lib.translate.zm2fa = '法';
            lib.translate.zm2faColor = '#FFFF00';
            lib.group.push('zm2shen');
            lib.translate.zm2shen = '神';
            lib.translate.zm2shenColor = '#FFFF00';
            lib.group.push('zm2jian');
            lib.translate.zm2jian = '剑';
            lib.translate.zm2jianColor = '#FFFF00';
            lib.group.push('zm2ling');
            lib.translate.zm2ling = '灵';
            lib.translate.zm2lingColor = '#FFFF00';
            lib.group.push('zm2qi');
            lib.translate.zm2qi = '骑';
            lib.translate.zm2qiColor = '#FFFF00';
            lib.group.push('zm2sha');
            lib.translate.zm2hu = '护';
            lib.translate.zm2qiColor = '#FFFF00';
            lib.group.push('zm2hu');
            lib.translate.zm2sha = '杀';
            lib.translate.zm2shaColor = '#FFFF00';
            lib.group.push('zm2sha');
            lib.translate.zm2lin = '临';
            lib.translate.zm2linColor = '#FFFF00';
            lib.group.push('zm2lin');
            lib.translate.zm2chan = '禅';
            lib.translate.zm2chanColor = '#FFFF00';
            lib.group.push('zm2chan');
            lib.translate.zm2chan = `<img src=extension/综漫季刊贰/zm2chan.png width="28" height="28">`;
            lib.translate.zm2lin = `<img src=extension/综漫季刊贰/zm2lin.png width="28" height="28">`;
            lib.translate.zm2hu = `<img src=extension/综漫季刊贰/zm2hu.png width="28" height="28">`;
            lib.translate.zm2dao = `<img src=extension/综漫季刊贰/zm2dao.png width="28" height="28">`;
            lib.translate.zm2ti = `<img src=extension/综漫季刊贰/zm2ti.png width="28" height="28">`;
            lib.translate.zm2yan = `<img src=extension/综漫季刊贰/zm2yan.png width="28" height="28">`;
            lib.translate.zm2do = `<img src=extension/综漫季刊贰/zm2do.png width="28" height="28">`;
            lib.translate.zm2ke = `<img src=extension/综漫季刊贰/zm2ke.png width="28" height="28">`;
            lib.translate.zm2sha = `<img src=extension/综漫季刊贰/zm2sha.png width="28" height="28">`;
            lib.translate.zm2gong = `<img src=extension/综漫季刊贰/zm2gong.png width="28" height="28">`;
            lib.translate.zm2fa = `<img src=extension/综漫季刊贰/zm2fa.png width="28" height="28">`;
            lib.translate.zm2qiang = `<img src=extension/综漫季刊贰/zm2qiang.png width="28" height="28">`;
            lib.translate.zm2qi = `<img src=extension/综漫季刊贰/zm2qi.png width="28" height="28">`;
            lib.translate.zm2xie = `<img src=extension/综漫季刊贰/zm2xie.png width="28" height="28">`;
            lib.translate.zm2shen = `<img src=extension/综漫季刊贰/zm2shen.png width="28" height="28">`;
            lib.translate.zm2ling = `<img src=extension/综漫季刊贰/zm2ling.png width="28" height="28">`;
            lib.translate.zm2kuang = `<img src=extension/综漫季刊贰/zm2kuang.png width="28" height="28">`;
            lib.translate.zm2jian = `<img src=extension/综漫季刊贰/zm2jian.png width="28" height="28">`;
            lib.translate.zm2t_jian = `<img src=extension/综漫季刊贰/0ui分栏剑.png width="93" height="27">`;
            lib.translate.zm2t_qiang = `<img src=extension/综漫季刊贰/0ui分栏枪.png width="87" height="27">`;
            lib.translate.zm2t_dou = `<img src=extension/综漫季刊贰/0ui分栏斗.png width="87" height="27">`;
            lib.translate.zm2t_qi = `<img src=extension/综漫季刊贰/0ui分栏骑.png width="87" height="27">`;
            lib.translate.zm2t_gong = `<img src=extension/综漫季刊贰/0ui分栏弓.png width="87" height="27">`;
            lib.translate.zm2t_fa = `<img src=extension/综漫季刊贰/0ui分栏术.png width="87" height="27">`;
            lib.translate.zm2t_sha = `<img src=extension/综漫季刊贰/0ui分栏杀.png width="87" height="27">`;
            lib.translate.zm2t_ke = `<img src=extension/综漫季刊贰/0ui分栏科.png width="87" height="27">`;
            lib.translate.zm2t_hu = `<img src=extension/综漫季刊贰/0ui分栏护.png width="87" height="27">`;
            lib.translate.zm2t_kuang = `<img src=extension/综漫季刊贰/0ui分栏狂.png width="87" height="27">`;
            lib.translate.zm2t_ling = `<img src=extension/综漫季刊贰/0ui分栏灵.png width="87" height="27">`;
            lib.translate.zm2t_lin = `<img src=extension/综漫季刊贰/0ui分栏临.png width="87" height="27">`;
            lib.translate.zm2t_dao = `<img src=extension/综漫季刊贰/0ui分栏道.png width="87" height="27">`;
            lib.translate.zm2t_chan = `<img src=extension/综漫季刊贰/0ui分栏禅.png width="87" height="27">`;
            lib.translate.zm2t_ti = `<img src=extension/综漫季刊贰/0ui分栏替.png width="87" height="27">`;
            lib.translate.zm2t_xie = `<img src=extension/综漫季刊贰/0ui分栏谐.png width="87" height="27">`;
            lib.translate.zm2t_shen = `<img src=extension/综漫季刊贰/0ui分栏神.png width="87" height="27">`;
            lib.translate.zm2t_yan = `<img src=extension/综漫季刊贰/0ui分栏衍.png width="87" height="27">`;
            lib.translate.zm2t_C = `<img src=extension/综漫季刊贰/0ui5.png width="66" height="27">`;
            lib.translate.zm2t_UC = `<img src=extension/综漫季刊贰/0ui4.png width="66" height="27">`;
            lib.translate.zm2t_R = `<img src=extension/综漫季刊贰/0ui3.png width="66" height="27">`;
            lib.translate.zm2t_SR = `<img src=extension/综漫季刊贰/0ui2.png width="66" height="27">`;
            lib.translate.zm2t_SSR = `<img src=extension/综漫季刊贰/0ui1.png width="66" height="27">`;
            //------------------------------------------------特效支持--------------------------------------------------//
            game.mp422 = async function (Q) {
                return new Promise((resolve) => {
                    const video = document.createElement('video');
                    video.src = `extension/综漫季刊贰/mp4/${Q}.mp4`;
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
            lib.skill._dieAudiozmjk2 = {
                trigger: { global: 'dieBegin' },
                _priority: 2,
                forced: true,
                content() {
                    game.playAudio('../extension/综漫季刊贰/audio', trigger.player.name);
                },
            };
            game.playzm2 = function (fn, dir, sex) {
                if (lib.config.background_speak) {
                    if (dir && sex) game.playAudio(dir, sex, fn);
                    else if (dir) game.playAudio(dir, fn);
                    else game.playAudio('../extension/综漫季刊贰/audio', fn);
                }
            };
            HTMLDivElement.prototype.zm2t = function (Q) {
                const video = document.createElement('video');
                video.src = `extension/综漫季刊贰/mp4/${Q}.mp4`;
                video.style.cssText = 'z-index: 999; height: 100%; width: 100%; position: fixed; object-fit: cover; left: 0; right: 0; pointer-events: none;';
                video.autoplay = true;
                video.loop = false;
                this.appendChild(video);
                video.addEventListener('error', function () {
                    video.remove();
                });
                video.addEventListener('ended', function () {
                    video.remove();
                });
            };
            // ---------------------------------------看来用不上了的十周年ui专供------------------------------------------//
            var tenUi = document.createElement('style');
            tenUi.innerHTML += ".player>.camp-zone[data-camp='zm2jian']>.camp-name {text-shadow: 0 0 5px rgb(255,48,48), 0 0 10px rgb(255,48,48), 0 0 15px rgb(255,48,48);}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='zm2qiang']>.camp-name {text-shadow: 0 0 5px rgb(79,79,79), 0 0 10px rgb(79,79,79), 0 0 15px rgb(79,79,79);}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='zm2gong']>.camp-name {text-shadow: 0 0 5px rgb(255,215,0), 0 0 10px rgb(255,215,0), 0 0 15px rgb(255,215,0);}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='zm2qi']>.camp-name {text-shadow: 0 0 5px rgb(0,205,0), 0 0 10px rgb(0,205,0), 0 0 15px rgb(0,205,0);}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='zm2do']>.camp-name {text-shadow: 0 0 5px rgb(0,205,0), 0 0 10px rgb(0,205,0), 0 0 15px rgb(0,205,0);}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='zm2fa']>.camp-name {text-shadow: 0 0 5px rgb(0,205,0), 0 0 10px rgb(0,205,0), 0 0 15px rgb(0,205,0);}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='zm2sha']>.camp-name {text-shadow: 0 0 5px rgb(0,205,0), 0 0 10px rgb(0,205,0), 0 0 15px rgb(0,205,0);}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='zm2kuang']>.camp-name {text-shadow: 0 0 5px rgb(0,205,0), 0 0 10px rgb(0,205,0), 0 0 15px rgb(0,205,0);}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='zm2ke']>.camp-name {text-shadow: 0 0 5px rgb(0,205,0), 0 0 10px rgb(0,205,0), 0 0 15px rgb(0,205,0);}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='zm2ling']>.camp-name {text-shadow: 0 0 5px rgb(0,205,0), 0 0 10px rgb(0,205,0), 0 0 15px rgb(0,205,0);}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='zm2hu']>.camp-name {text-shadow: 0 0 5px rgb(0,205,0), 0 0 10px rgb(0,205,0), 0 0 15px rgb(0,205,0);}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='zm2dao']>.camp-name {text-shadow: 0 0 5px rgb(0,205,0), 0 0 10px rgb(0,205,0), 0 0 15px rgb(0,205,0);}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='zm2chan']>.camp-name {text-shadow: 0 0 5px rgb(0,205,0), 0 0 10px rgb(0,205,0), 0 0 15px rgb(0,205,0);}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='zm2lin']>.camp-name {text-shadow: 0 0 5px rgb(0,205,0), 0 0 10px rgb(0,205,0), 0 0 15px rgb(0,205,0);}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='zm2yan']>.camp-name {text-shadow: 0 0 5px rgb(0,205,0), 0 0 10px rgb(0,205,0), 0 0 15px rgb(0,205,0);}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='zm2shen']>.camp-name {text-shadow: 0 0 5px rgb(0,205,0), 0 0 10px rgb(0,205,0), 0 0 15px rgb(0,205,0);}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='zm2xie']>.camp-name {text-shadow: 0 0 5px rgb(0,205,0), 0 0 10px rgb(0,205,0), 0 0 15px rgb(0,205,0);}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='zm2ti']>.camp-name {text-shadow: 0 0 5px rgb(0,205,0), 0 0 10px rgb(0,205,0), 0 0 15px rgb(0,205,0);}";
            document.head.appendChild(tenUi);
        },
        precontent() {
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '综漫季刊贰',
                    connect: true,
                    character: {
                        zmfalujin: ['male', 'zm2fa', 4, ['ztongtianlu', 'zmnishengsanchong'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊贰/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊贰/属性守序善良.png width="57" height="19"> <br>\n【职阶】施法者<br>\n【宝具】通天箓<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★☆☆☆☆☆<br>\n【控制】★★★★★☆☆☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★★★★★☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】性格刚正的百岁老者,人称<一生无暇>.<br>\n陆瑾原是三一门传人,门中认为人之降生是为先天一炁化生四肢百骸,然顺天则命数有尽,故以逆生三重之法将自身躯体部分逆炼回先天一炁的状态,对强大体魄与肉身回复都有极大作用.<br>\n然三一门被灭门,年轻的陆瑾侥幸未死又得好友上清派郑子布临死前托付了他的绝学通天箓,之后陆瑾一直在等待清算当年恩怨的那一天.<br>\n通天箓为八奇技之一, 能无视符咒心法等限制绘制修持规则来凭空随意祭使天下百脉一切符法,与其余奇技一般堪称同类功法中的异数.<br>\n【评级】<b><font color=Gold>A-</font></b>\n']],
                        zmkuangxiaozizai: ['male', 'zm2kuang', 4, ['zmyishazhisha', 'zmdacidabeiqianyeshou'], ['des: 【属性】<img src=extension/综漫季刊贰/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊贰/属性守序邪恶.png width="57" height="19"> <br>\n【职阶】狂战士<br>\n【宝具】以杀制杀<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★★★☆☆<br>\n【控制】★★★★★☆☆☆☆☆<br>\n【生存】★☆☆☆☆☆☆☆☆☆<br>\n【成长】★★★★☆☆☆☆☆☆<br>\n【辅助】☆☆☆☆☆☆☆☆☆☆<br>\n【治疗】☆☆☆☆☆☆☆☆☆☆<br>\n【特质】<我不是变态,只是天生杀人狂而已.><br>\n肖自在自年轻时起就发现自己是个对杀生有莫名偏执的精神病患,一旦冲动升起眼睛就会莫名的变红.为此他放弃了工作出家少林.在少林肖自在展现出了不俗的天赋,成为十佬之一解空大师亲传弟子.然肖自在的冲动仍未平息,某次因为急于精进佛法而入障的肖自在终于本性爆发,在少林做下祸事后被迫下山.<br>\n下山后肖自在努力平息自己,但终究还是控制不住杀了人;杀人后他主动向哪都通公司自首,经过公司评估后因其实力强劲被选为华东区临时工进行一些黑吃黑式的扫除工作.<br>\n【评级】<b><font color=Silver>B</font></b>\n']],
                        zmgongjiazhengliang: ['male', 'zm2gong', 4, ['zmyuwu', 'zmzhanxian'], ['des: 【属性】<img src=extension/综漫季刊贰/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊贰/属性守序善良.png width="57" height="19"> <br>\n【职阶】弓兵<br>\n【宝具】御物斩仙<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★★★☆☆☆☆☆☆<br>\n【爆发】★★★★★★☆☆☆☆<br>\n【控制】★☆☆☆☆☆☆☆☆☆<br>\n【生存】★★★☆☆☆☆☆☆☆<br>\n【成长】★★★★★☆☆☆☆☆<br>\n【辅助】★☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】西部贾家村村草,离家出走和城里的千金小姐恋爱中.<br>\n贾正亮是西部贾家村御物一脉传人.所谓御物即使用炁来有效移动操作物体的手段.<br>\n寻常的御物者能同时操作好一两件物体已是不易,而贾正亮却能同时操控一十二柄飞刀进行各不相同的动作,因此他虽年轻但在进攻上也有了不俗的成就.<br>\n【评级】<b><font color=Silver>B-</font></b>\n']],
                        zmgongyuantao: ['male', 'zm2gong', 3, ['zmjiulongbahuan', 'zmjiulongbahuan2'], ['des: 【属性】<img src=extension/综漫季刊贰/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊贰/属性混乱邪恶.png width="57" height="19"> <br>\n【职阶】弓兵<br>\n【宝具】九龙子<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★☆☆☆☆☆<br>\n【控制】★★★☆☆☆☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★☆☆☆☆☆<br>\n【辅助】★★☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】全性元老之一,实力强劲阴狠毒辣.<br>\n苑陶是一名实力不俗的炼器大师,可以通过使用自己的炁将普通器物炼出独立的异能.他手中的法宝[九龙子]就是如此,每颗都有不同的妙用.<br>\n据他说,前半生的心血他都用在了法器[九龙子]上,而后半生他却转而拐骗培养一个有些痴呆的弟子,这名弟子才是他的最高杰作...<br>\n【评级】<b><font color=Silver>B-</font></b>\n']],
                        zmdouzhangchulan: ['male', 'zm2do', 4, ['zmjinguangzhou', 'zmshenlingming', 'zxiaobaichong'], ['des: 【属性】<img src=extension/综漫季刊贰/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊贰/属性中立善良.png width="57" height="19"> <br>\n【职阶】格斗家<br>\n【宝具】迅雷肇电<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★☆☆☆☆☆<br>\n【控制】★★★☆☆☆☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★☆☆☆☆☆☆<br>\n【辅助】★☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】哪都通公司的员工,性格理性擅隐忍藏拙.有时为了达到自己的目的甚至会做出完全不要脸的行为,所以被人起外号为<不摇碧莲>,但他本人并不在意并欣然接受.<br>\n张楚岚在爷爷张怀义的教导下从小修习天师府的金光咒和阳五雷,疑似是八奇技之一炁体源流的继承人.七岁那年爷爷张怀义去世,父亲张予德神秘失踪,从此他几乎放弃修炼以一个普通人的身份生活了十二年,后遇到冯宝宝,开始在异人界崭露头角并追查甲申之乱的真相.<br>\n【评级】<b><font color=Silver>B-</font></b>\n']],
                        zmfawangye: ['male', 'zm2fa', 4, ['ztaijijin', 'zmluanjintuo', 'zmfenghouqimen'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊贰/属性人形.png width="34" height="22"><img src=extension/综漫季刊贰/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊贰/属性中立善良.png width="57" height="19"> <br>\n【职阶】施法者<br>\n【宝具】风后奇门<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★★☆☆☆☆☆☆☆<br>\n【爆发】★★★☆☆☆☆☆☆☆<br>\n【控制】★★★★★★☆☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★★★★☆☆☆<br>\n【辅助】★★★★☆☆☆☆☆☆<br>\n【治疗】★★☆☆☆☆☆☆☆☆<br>\n【特质】不着调的下山道士,八奇技持有者.<br>\n王也本是京城巨富之家的公子,因不喜名利进入武当山学艺并成为了武当唯二能习得[风后奇门]的人.后来又因在罗天大醮上暴露了风后奇门的手段不得已与武当断绝联系,独自探寻八奇技背后的秘密.<br>\n风后奇门在超出常理的八奇技中也属于匪夷所思的一种;寻常术士顺天而为趋吉避凶,施法有方位时机生克等种种限制.而风后奇门阵的施术者能随意修改阵内五行八门生克规则甚至时空变化,无视天地规则的束缚.<br>\n【评级】<b><font color=Silver>B+</font></b>\n']],
                        zmshachenduo: ['female', 'zm2sha', 4, ['zmshenggu', 'zmminggu'], ['des: 【属性】<img src=extension/综漫季刊贰/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊贰/属性混乱善良.png width="57" height="19"> <br>\n【职阶】暗匿者<br>\n【宝具】命蛊<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★☆☆☆☆<br>\n【控制】★★★☆☆☆☆☆☆☆<br>\n【生存】★★★☆☆☆☆☆☆☆<br>\n【成长】★★★★★☆☆☆☆☆<br>\n【辅助】★☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】哪都通公司华南区临时工,半人半蛊的年轻女孩.<br>\n陈朵原本是药仙会炼制的最高杰作,被称为[蛊身圣童]的人形蛊巢.因为从小就被当做器物教育兼之受到非人折磨,她的精神性与常人大有不同,对生死的态度也看得很开.<br>\n平时陈朵身着公司特制的隔离服,在其下的皮肤因为被蛊毒侵蚀变得异常恐怖,但也可以很方便的释放各种蛊,其能力的秘密就在于可以对体内高位的原始蛊以不同行炁方式刺激,使其转化为下级的拥有不同效用的蛊毒灵活运用.<br>\n【评级】<b><font color=Silver>B-</font></b>\n']],
                        zmshafengbao: ['female', 'zm2sha', 5, ['zmaweishibashi', 'zmguizhen'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊贰/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊贰/属性守序中立.png width="57" height="19"> <br>\n【职阶】暗匿者<br>\n【宝具】归真<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★★★☆☆☆☆☆☆<br>\n【爆发】★★★★☆☆☆☆☆☆<br>\n【控制】★☆☆☆☆☆☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】脑袋有些轴的神秘高手,擅长开锁、潜入、敲闷棍等.<br>\n冯宝宝的记忆开始于甲申之乱那年1944年夏天自己被徐翔父母救下并收养时,因记忆全无而被取名<阿无>,后来才慢慢记起自己的名字<冯宝宝>.平静地生活了五年之后,逐渐懂得了喜欢与伤心,却因瞬间击杀数名打劫村子的土匪,被普通人惧怕,被赵姨抛弃在深山.后来突然想找到认识自己的人和自己的家人,于是辗转走出大山.1993年在大城市遭下药拐卖,被徐翔救出,从此一直在哪都通公司工作.<br>\n冯宝宝身手超凡,回复能力极强,体内的炁极为庞大,但实际上却不懂练炁之法,也不会术法等手段,只是本能的运行普通的周天,一切行动都只是先天一炁对外界刺激的本能反应.<br>\n【评级】<b><font color=Silver>B-</font></b>\n']],
                        zmjianzaomenxiongmei: ['none', 'zm2jian', 4, ['zmxiutanz', 'zmshuizhihuxi', 'zmxueguishubaoxue'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊贰/属性人形.png width="34" height="22"><img src=extension/综漫季刊贰/属性魔性.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊贰/属性守序善良.png width="57" height="19"> <br>\n【职阶】剑士<br>\n【宝具】水之呼吸&血鬼术•爆血<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★☆☆☆☆☆<br>\n【控制】★☆☆☆☆☆☆☆☆☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★★☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】猎鬼者兄妹,哥哥名为灶门炭治郎,妹妹叫灶门祢豆子.<br>\n曾经灶门一家是个住在山中的七人大家庭,某日,大哥炭治郎下山卖炭时灶门一家被鬼之始祖——鬼舞辻无惨袭击,祢豆子成了灶门一家灭门事件中的唯一幸存者.期间,在挺身保护弟弟六太而被无惨攻击时祢豆子意外地从伤口处沾染到了无惨的血液,最终因此变成了鬼.<br>\n变成鬼的妹妹以强大的意志力克服着食人的本能,在不能见光的白天躲在哥哥背后的箱子里,而哥哥接受训练后加入了鬼杀队,开始了对食人鬼的猎杀活动并不断锻炼自己,以期有朝一日向鬼舞辻无惨进行复仇.<br>\n【评级】<b><font color=Silver>B</font></b>\n']],
                        zmjianlianyuxingshoulang: ['male', 'zm2jian', 4, ['zmyanzhizhu', 'zmyanzhihuxi', 'zmjiuzhixing'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊贰/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊贰/属性守序善良.png width="57" height="19"> <br>\n【职阶】剑士<br>\n【宝具】炎之呼吸<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★★★☆☆☆☆☆☆<br>\n【爆发】★★★★★☆☆☆☆☆<br>\n【控制】★★★☆☆☆☆☆☆☆<br>\n【生存】★★★☆☆☆☆☆☆☆<br>\n【成长】★★★★☆☆☆☆☆☆<br>\n【辅助】★★★★★☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】鬼杀队最高战力[柱]的一员,性格耿直如火的剑士.<br>\n杏寿郎出生在传承炎之呼吸的斩鬼家族炼狱家,父亲是前代炎柱.不过他并非通过身份继承了炎柱的位置,而恰恰相反是在父亲一蹶不振放弃对他的执导后凭借自己的努力取得了炎柱的称号.<br>\n杏寿郎的剑技强大,甚至能跨越巨大的身体素质差距暂时压制十二鬼月中的上弦,不过即使是强化过的身体相对于这份破坏力而言也会成为他的掣肘.<br>\n【评级】<b><font color=Silver>B</font></b>\n']],
                        zmshayouaier: ['female', 'zm2sha', 4, ['zmyetianguang', 'zmrongyuefeiren'], ['des: 【属性】<img src=extension/综漫季刊贰/属性人形.png width="34" height="22"><img src=extension/综漫季刊贰/属性野兽.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊贰/属性守序善良.png width="57" height="19"> <br>\n【职阶】暗匿者<br>\n【宝具】融月绯刃<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★★★☆☆☆☆☆☆<br>\n【爆发】★★★★☆☆☆☆☆☆<br>\n【控制】★★★☆☆☆☆☆☆☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★★★☆☆☆☆☆<br>\n【辅助】★★★★★☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】驭使剑舞,濒临灭绝的的王室艾伦族.<br>\n极罕见的拥有尾巴的艾伦族,使用双刀与狐火圆舞进行战斗.曾经与姐妹为了寻回神器进行着艰难的旅程,如今也在为寻找九尾碎片冒险着.<br>\n【评级】<b><font color=Silver>B-</font></b>\n']],
                        zmfaaweisibulong: ['male', 'zm2fa', 3, ['zmruizhizhiguang', 'zmshumishu'], ['des: 【属性】<img src=extension/综漫季刊贰/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊贰/属性守序中立.png width="57" height="19"> <br>\n【职阶】施法者<br>\n【宝具】王冠:睿智之光<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★☆☆☆☆☆☆☆☆☆<br>\n【控制】★☆☆☆☆☆☆☆☆☆<br>\n【生存】★★★☆☆☆☆☆☆☆<br>\n【成长】★★★★★☆☆☆☆☆<br>\n【辅助】★★★★★★★★★☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】正式的名字是所罗门·本·犹大·伊本·盖比鲁勒,据说是他建立了卡巴拉的基盘.<br>\n以悲观厌世的诗人形象为人所熟知,其另一个身份则是专精于魔偶铸造魔术师.<br>\n如果要完美发挥他的力量,则需要投入足以让一般魔术师破产十次的预算来建立配套的魔偶工坊.虽然发挥数量暴力是最稳妥的战术,但为了应对多变的战况,偶尔他也会选择集中资源去培养他理想中的究极魔偶<亚当>.<br>\n【评级】<b><font color=Silver>B+</font></b>\n']],
                        zmhusaixili: ['female', 'zm2hu', 4, ['zmshenshengjili', 'zmweiyuchunde'], ['des: 【属性】<img src=extension/综漫季刊贰/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊贰/属性混乱善良.png width="57" height="19"> <br>\n【职阶】守护者<br>\n【宝具】为愚蠢的异教徒降下天罚<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★☆☆☆☆☆☆☆☆☆<br>\n【控制】★★★☆☆☆☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★☆☆☆☆☆<br>\n【辅助】★☆☆☆☆☆☆☆☆☆<br>\n【治疗】★★★★★☆☆☆☆☆<br>\n【特质】阿库西斯教司祭,非常正宗的阿库西斯教徒.<br>\n阿库西斯教是信仰水之女神阿库娅的宗教.因为阿库娅订立的教义过于自由所以教众们都是善良但很会让别人感到困扰的家伙.不知为什么这帮家伙信仰强烈且相当团结,在原世界已经是连魔王军都要退避三舍的麻烦集团了.<br>\n塞西莉是阿库西斯教核心成员,爱好是违禁食品琼脂史莱姆、漂亮的男孩子和女孩子以及对厄里斯教徒进行骚扰与恶作剧.原则上是教团派遣的暗中为女神大人服务的特派员,实际上来到阿库娅居住的城市后只是默默拔高了城市犯罪率而已.<br>\n【评级】<b><font color=Silver>C</font></b>\n']],
                        zmqiangbuladamante: ['female', 'zm2qiang', 4, ['zmkalaimengzhixun', 'zmbaiyuqishi', 'zmxuanmudemodun'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊贰/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊贰/属性守序善良.png width="57" height="19"> <br>\n【职阶】枪兵<br>\n【宝具】炫目的魔盾<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★☆☆☆☆☆☆☆<br>\n【控制】★★★★☆☆☆☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★★☆☆☆☆☆<br>\n【辅助】★★★★☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】顽强而又有些冒失的少女骑士,梅林的偷窥对象之一.<br>\n大英雄赫克托耳的子孙,查理曼十二勇士之一,纯真的白羽骑士.<br>\n布拉达曼特的传说以坚韧顽强著称,不管是建立功勋还是维系恋情,只要是为了实现愿望,无论尝试多少次,哪怕身处窘境,也绝不言弃.<br>\n布拉达曼特由于生前的遭遇而讨厌魔术师.但梅林除外.其实她与大魔术师梅林有点缘分,在她生前的冒险中,梅林曾通过巫女给她提供过一些建议.对布拉达曼特来说,梅林是崇拜的对象.<br>\n【评级】<b><font color=Silver>B</font></b>\n']],
                        zmlinyuzhe: ['male', 'zm2lin', 4, ['zmmangmuchiyu', 'zmxianshiniuqu'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊贰/属性类人.png width="34" height="22"><img src=extension/综漫季刊贰/属性混沌.png width="34" height="22"><img src=extension/综漫季刊贰/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊贰/属性混乱中立.png width="57" height="19"> <br>\n【职阶】降临者<br>\n【宝具】痴愚权能<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★☆☆☆☆☆☆<br>\n【控制】★★★★★★★☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★★★★★★★★★☆<br>\n【治疗】★★☆☆☆☆☆☆☆☆<br>\n【特质】由凡人晋升的旧日支配者,与体内前代诡秘之主不断复苏的意识持续纠缠拉锯着.<br>\n占卜家途径的真神,序列0[愚者],尊名为[不属于这个时代的愚者;灰雾之上的神秘主宰;执掌好运的黄黑之王.]<br>\n原名克莱恩,愚者既是祂的代号也是这个神位的神名.作为愚者拥有占卜家序列的所有非凡能力,但当前状态下只有作为愚者的盲目痴愚权能与从历史的缝隙中拉取真实幻影的能力可以正常使用.<br>\n克莱恩在收回<门>途径与<错误>途径的唯一性和序列一非凡特性,位格向被称为时空之王、命运道标的诡秘之主趋近后,经过十年的沉睡初步压倒前代诡秘之主的意识,为重新行走于地上准备着.<br>\n【评级】<b><font color=GoldEnrod>S-</font></b>\n']],
                        zmtidiyaboluo: ['male', 'zm2ti', 3, ['zmshuangmianren', 'zfeihongzhiwang'], ['des: 【属性】<img src=extension/综漫季刊贰/属性人形.png width="34" height="22"><img src=extension/综漫季刊贰/属性时空.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊贰/属性混乱邪恶.png width="57" height="19"> <br>\n【职阶】异能者<br>\n【宝具】绯红之王<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★★☆☆☆☆☆☆☆<br>\n【爆发】★★★★★☆☆☆☆☆<br>\n【控制】★★☆☆☆☆☆☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★★★★☆☆☆<br>\n【辅助】★★☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】高傲、机敏、不择手段的黑手党首领.<br>\n迪亚波罗追求着征服一切,而却希望能够隐藏自己的身份不为任何人所知.他一方面领导着意大利最大的黑手党组织,另一方面却无人见过他的真实面目.这种追求和自身的想法的矛盾冲突到了他在自己本来的人格外分裂出了个第二人格的地步.其认为人类只需关注自己的利益就好,因而不去体谅部下,一昧的用力量与恐惧支配着整个组织,为了利益而去贩毒,抹杀一切想要调查自己真实身份的存在甚至自己的女儿.<br>\n其替身[绯红之王]拥有预知并删除未来十几秒内时间的能力,在进行删除后也可看作在这段时间内世界上的所有存在都成为了盲目的幻影;此时迪亚波罗可以从容地无视攻击,或移动到目标视觉死角中发出致命一击等.<br>\n【评级】<b><font color=Gold>A-</font></b>\n']],
                        zmfacangqiqingzi: ['female', 'zm2fa', 4, ['zmdiwufa', 'zmshixiangshique'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊贰/属性人形.png width="34" height="22"><img src=extension/综漫季刊贰/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊贰/属性混乱善良.png width="57" height="19"> <br>\n【职阶】施法者<br>\n【宝具】第五法<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★☆☆☆☆☆☆☆<br>\n【控制】★★★★★★★☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★★★☆☆☆<br>\n【辅助】★★☆☆☆☆☆☆☆☆<br>\n【治疗】★★★★★★☆☆☆☆<br>\n【特质】第五法的到达者,被魔术师们称为「人间火箭发射器」、「Miss Blue」等.因为身为魔法使加上是破坏高手,而且还有点人格失常,所以被魔术协会看待为危险的麻烦人.现在以行李箱作为伙伴周游世界中.<br>\n在青子的原世界,魔术与魔法是不同等级的事物.简单来说,人类通过非神秘学手段所能模仿或达成的神秘被定义为魔术;而最终有五种领域是目前人类文明完全无从实现的,它们被称为[五大魔法],譬如从无到有的转化、灵魂物质化、平行世界管理等.<br>\n苍崎青子持有的第五魔法目前并没有明确定义,不过能做到的事是以自我存在为主观轴,对时间线上的事物秩序进行干涉.譬如她曾经将友人[死去的五分钟]放逐到遥远的未来,将未来自己的战斗经验叠加到现在等.正如第五法发动时吟唱的那样:「一切皆正确----秩序,于此崩溃」.<br>\n【评级】<b><font color=Gold>A</font></b>\n']],
                        zmfalanranzongyoujie: ['male', 'zm2fa', 4, ['zmjinghuashuiyue', 'zmheiguan'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊贰/属性人形.png width="34" height="22"><img src=extension/综漫季刊贰/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊贰/属性中立邪恶.png width="57" height="19"> <br>\n【职阶】施法者<br>\n【宝具】镜花水月<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★☆☆☆☆☆<br>\n【控制】★★★★★★☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★★★★★★<br>\n【辅助】★★★★☆☆☆☆☆☆<br>\n【治疗】★★★☆☆☆☆☆☆☆<br>\n【特质】曾经完成了崩玉,差一点支配尸魂界的野心家.<br>\n蓝染惣右介原本是护廷十三队五番队队长,不过他取得这个位置也只是为了方便他的非人道危险研究.通过大量的灵体实验加上窃取了浦原喜助的部分研究成果,蓝染终于制造出了可以实现存在的可能性,拥有扭曲现实性质的[崩玉].准备就绪的蓝染展现出压倒性的实力叛出了瀞灵廷,凭借一己之力收服了虚圈的所有高端战力为己所用.之后蓝染为了给自己进化的压力独战死神势力,然而最终崩玉被毁,蓝染也被封印于无间地狱服刑两万年.<br>\n其斩魄刀名为[镜花水月],只要令对方目视到解放的刀身就可以完全掌握对方的五感.一旦成为过镜花水月的俘虏,无论蓝染何时解放斩魄刀都可以自由令其产生错觉.<br>\n【评级】<b><font color=Gold>A</font></b>\n']],
                        zmgongaertaier: ['female', 'zm2gong', 4, ['zmbziwogaizao', 'zmzhaiyaoyuanyuan'], ['des: 【属性】<img src=extension/综漫季刊贰/属性人形.png width="34" height="22"><img src=extension/综漫季刊贰/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊贰/属性混乱中立.png width="57" height="19"> <br>\n【职阶】弓兵<br>\n【宝具】HoloPsychon<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★☆☆☆☆☆☆☆☆☆<br>\n【控制】★★★★★★☆☆☆☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★★★★★★★☆<br>\n【辅助】★☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】创造主世界中作为网络上的故事形象诞生,拥有无限可能性的角色.<br>\n阿尔泰尔诞生之际,画出她的创造主——岛崎刹那便已悲惨地卧轨自杀.同日显现的阿尔泰尔感应到这一事实后觉醒了穿梭世界的能力,且由于她属于二创角色,在被其他创作者进行再设定后可获得的能力无时无刻不在增加,进而让她拥有了接近无限的技能库并整合为『HoloPsychon』.<br>\n『HoloPsychon』即万有之力,从虚无中诞生一切的力量.通过后天进行<设定>就能够轻而易举获得任何能力,但其个人并不能自由的使用所有能力,否则可能会因为规则问题被当前世界所弹出.<br>\n【评级】<b><font color=Gold>A</font></b>\n']],
                        zmlingaobolong: ['male', 'zm2ling', 3, ['zmyezhiweimu', 'zmbengluo', 'zmyubifangluomudemengzhitong'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊贰/属性人形.png width="34" height="22"><img src=extension/综漫季刊贰/属性野兽.png width="34" height="22"><img src=extension/综漫季刊贰/属性时空.png width="34" height="22"><img src=extension/综漫季刊贰/属性肃正.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊贰/属性混乱邪恶.png width="57" height="19"> <br>\n【职阶】不眠者<br>\n【宝具】于彼方同坠的梦之瞳<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★☆☆☆☆☆☆<br>\n【控制】★★★★★★★★★☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★★★☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】诅咒中诞生的虫,满口谎言的伪装者,否定又渴望着纯粹的真挚感情.<br>\n真名为奥伯龙•伏提庚,是借助了奥伯龙这一幻想成型的,秉承世界想要清除妖精国的意志而诞生的终末装置.<br>\n在偏离的历史中,最初的妖精逃避使命未能铸造出肃正的神器星之圣剑,因此直接导致了不列颠被异星的巨神毁灭.在已毁的不列颠旧址上,这些妖精又谋害了选择庇护它们的惩罚者科尔努诺斯,以它的尸体为基石建立了妖精国.<br>\n已毁灭的不列颠的意志对如蛆虫般罪恶的妖精国怒不可遏,因此作为毁灭妖精的武器——伏提庚诞生了.<br>\n在与迦勒一行共同将科尔努诺斯的尸骸完全消灭后,真正的伏提庚得以显现;庞大无比无始无终的空洞之虫将妖精国化为虚无,而作为核心的奥伯龙漂亮地败给了迦勒底一行,终止崩落效应后坠落在空洞深处.<br>\n【评级】<b><font color=Gold>A</font></b>\n']],
                        zmlingmingcanxue: ['male', 'zm2ling', 4, ['zmdongxim', 'zmxuenu'], ['des: 【属性】<img src=extension/综漫季刊贰/属性人形.png width="34" height="22"><img src=extension/综漫季刊贰/属性死灵.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊贰/属性守序中立.png width="57" height="19"> <br>\n【职阶】不眠者<br>\n【宝具】血怒<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★★☆☆☆<br>\n【控制】★★★★☆☆☆☆☆☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★★☆☆☆☆☆☆<br>\n【辅助】★★★★☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】带着机械面具隐藏身份的古董吸血鬼武士,当解除面具的时候就会看到他狂暴的一面.<br>\n名残雪是哈蓖•卡奥斯为了对抗索尔从地底遗迹发掘出并强行控制的古代人.其娴熟的剑法与可以造成难以自愈的伤害这两点完全克制索尔一直以来粗旷的战斗方式.<br>\n不过其本人的意志并没有于屈从于卡奥斯,在与索尔决战时放水使自己失去战斗力;于卡奥斯消失后名残雪重新出现并使用能力洞悉了神伊诺的弱点,成为了索尔等人胜利的契机.<br>\n【评级】<b><font color=Silver>B+</font></b>\n']],
                        zmdousani: ['male', 'zm2do', 4, ['zmmowangzhifa', 'zmzuduan'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊贰/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊贰/属性守序善良.png width="57" height="19"> <br>\n【职阶】格斗家<br>\n【宝具】魔王之发<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★☆☆☆☆<br>\n【控制】★★★★★☆☆☆☆☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★☆☆☆☆☆☆☆<br>\n【辅助】★★★☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】美食四天王之一,发量惊人的美男子.<br>\n著名美食猎人,美食细胞能力为每根能承受250千克重量的,具有多种感官的可以精细操作的强韧头发.<br>\n将上百万根头发全部聚合起来的萨尼单论力量可能是四天王中最强的.即使这些头发分散开,在萨尼的有效攻击范围内也极少有猎物可以快速挣脱这些发丝的束缚.<br>\n正如他的外表,萨尼对美有偏执的追求,总是将『美』这个词挂在嘴边;但不知道为什么,组队战斗时他分配到的敌人总是最丑最怪异的,每每都会让他刺激地头发乍起.<br>\n【评级】<b><font color=Gold>A-</font></b>\n']],
                        zmlinyakedemolai: ['male', 'zm2lin', 4, ['zmduoluodexuren', 'zmheizhishenghaibu', 'zmheisexingqiwu'], ['des: 【属性】<img src=extension/综漫季刊贰/属性人形.png width="34" height="22"><img src=extension/综漫季刊贰/属性混沌.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊贰/属性中立邪恶.png width="57" height="19"> <br>\n【职阶】降临者<br>\n【宝具】黑色星期五<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★☆☆☆☆☆☆<br>\n【控制】★★★★★★☆☆☆☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★★☆☆☆☆☆☆<br>\n【辅助】★★★★★☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】圣殿骑士团团长被后世污名化的侧面,被黑暗丰饶母神莎布•尼古拉斯扭曲后的产物.<br>\n『无辜的怪物』这个技能指的是真相与生前的意志与模样无关,仅因风评而遭到扭曲之人的深度.有人说,圣殿骑士们崇拜山羊头的恶魔,耽迷于淫靡的仪式.莫莱因贬低骑士团的冤罪与流传到后世的庞大传承群而堕落,此刻的她和曾经那个立志夺还圣地的修道士相比,已经变质为完全不同的存在.<br>\n不过纠结于金钱这点还是跟真正的莫莱一脉相承.<br>\n【评级】<b><font color=Silver>B+</font></b>\n']],
                        zmtikongzhilvzhe: ['female', 'zm2ti', 4, ['zmlvkongzhe', 'zmxujiejianglin'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊贰/属性人形.png width="34" height="22"><img src=extension/综漫季刊贰/属性时空.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊贰/属性守序邪恶.png width="57" height="19"> <br>\n【职阶】异能者<br>\n【宝具】虚界降临<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★☆☆☆☆☆<br>\n【控制】★★★☆☆☆☆☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★★★★☆☆☆<br>\n【辅助】★★★★★★☆☆☆☆<br>\n【治疗】★★☆☆☆☆☆☆☆☆<br>\n【特质】第二律者,被崩坏意志眷顾的完全体律者.<br>\n2000年出现在西伯利亚的第二律者·空之律者西琳,由天命巴比伦实验室中诞生,引发第二次崩坏,给人类带来巨大伤亡.在天命讨伐战中,和时天命最强女武神塞西莉亚·沙尼亚特同归于尽.西琳在生命的最后祈祷着重新来过,祈求自己能有一个不一样的开始.愿望诞生出了琪亚娜和空之律者两个意识,象征着西琳对幸福的渴求和对人类的憎恨.<br>\n空之律者的能力是空间操作,能够创造出叠加在现实空间上的虚数空间进行攻击和防御.虚数空间指的是现实的四维空间外侧的一切其他空间,可以存在无限多个.而空之律者的能力就像是连接虚数与实数的纽带,她将虚数空间的事物投影在实数空间中,随时将它们<转化>为实际事物.<br>\n【评级】<b><font color=Gold>A</font></b>\n']],
                        zmtishizhilvzhe: ['female', 'zm2ti', 4, ['zmwuxingzhishi', 'zmmoyinwuqi'], ['des: 【属性】<img src=extension/综漫季刊贰/属性人形.png width="34" height="22"><img src=extension/综漫季刊贰/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊贰/属性混乱善良.png width="57" height="19"> <br>\n【职阶】异能者<br>\n【宝具】模因武器<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★☆☆☆☆☆☆☆☆<br>\n【控制】★★★★★★☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★★★★★☆<br>\n【辅助】★☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】司掌意识的第八律者曰:警惕电话诈骗!<br>\n曾经在某次事件中,名为符华的战士脑部即将重伤,情急之中她将自己的意识转移到了神之键羽渡尘中保存性命.一直关注此地的崩坏意志知晓这具无主躯体的强大,于是它趁机将一个全新的意识放入了这具躯体内,这就是第八律者:[识之律者]的诞生.<br>\n原本第八律者是以意识体战斗的存在,因此正面战与对现实的干涉力都有限,获得符华的身体与战斗经验正可以补全短板.但崩坏意志没有料到的是这具身体的大脑中蕴含了数千年、甚至数万年的记忆.浩瀚的记忆轻易地淹没了新生的崩坏人格,使得识之律者苏醒时反而认为自己就是记忆的主人:符华.<br>\n作为第二符华行动了许久并与人类接触后,识之律者明白自己终究没有办法以符华的身份生活下去.她将身体还给原主,以第八律者原本的意识体姿态离开,继续进行着自己对抗崩坏的道路.<br>\n【评级】<b><font color=Gold>A-</font></b>\n']],
                        zmjianleizhilvzhe: ['female', 'zm2jian', 4, ['zmyuejianjueying', 'zmhongleiyishan'], ['des: 【属性】<img src=extension/综漫季刊贰/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊贰/属性中立善良.png width="57" height="19"> <br>\n【职阶】剑士<br>\n【宝具】轰雷一闪<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★★★☆☆☆☆☆☆<br>\n【爆发】★★★★★★☆☆☆☆<br>\n【控制】★★★☆☆☆☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★☆☆☆☆☆<br>\n【辅助】★☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】植入征服之雷宝石后成为第三律者的雷电芽衣.<br>\nME社前社长雷电龙马的女儿,北辰一刀流传人.原本作为人工制造的律者难免会遇到精神分裂的情况,但因为律者人格的主动融合所以状态还算正常.<br>\n第三律者的能力为对电磁的掌握.虽然这项能力有着特殊的深入应用可以开发,但没有崩坏意识的眷顾想要发挥真正的力量就十分困难了.<br>\n【评级】<b><font color=Silver>B+</font></b>\n']],
                        zmkelizhilvzhe: ['female', 'zm2ke', 4, ['zmwanxianglantu', 'zmxukongzaowu'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊贰/属性人形.png width="34" height="22"><img src=extension/综漫季刊贰/属性机械.png width="34" height="22"><img src=extension/综漫季刊贰/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊贰/属性守序善良.png width="57" height="19"> <br>\n【职阶】机械师<br>\n【宝具】万象蓝图 虚空造物<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★★★☆☆☆☆☆☆<br>\n【爆发】★★★☆☆☆☆☆☆☆<br>\n【控制】★★★☆☆☆☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★★★☆☆☆<br>\n【辅助】★★★☆☆☆☆☆☆☆<br>\n【治疗】★★☆☆☆☆☆☆☆☆<br>\n【特质】司掌理解与诠释的第一律者,继承了理之核心的布洛妮娅·扎伊切克.<br>\n这个姿态是布洛妮娅在量子之海中与理之律者的核心融合而成的姿态,亦是瓦尔特·杨对其认可的证明.虽然布洛妮娅通过X-10实验获得了崩坏能抗性,但布洛尼亚并非真正的律者,如果过度使用理之律者的力量,她的身体终究会和瓦尔特·杨一样变得残破不堪.<br>\n[理之律者]的能力是以崩坏能构造自身能够<完全理解>的事物,且随着能力的使用这份力量也会逐渐成长.以律者而言持有的权能几乎是无限的,出力被限制的原因终究也只是容器的性能罢了.<br>\n【评级】<b><font color=Gold>A-</font></b>\n']],
                        zmgongxiyeer: ['female', 'zm2gong', 5, ['zmmaizangjiguan', 'zmdiqishengdian'], ['des: 【属性】<img src=extension/综漫季刊贰/属性人形.png width="34" height="22"><img src=extension/综漫季刊贰/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊贰/属性守序善良.png width="57" height="19"> <br>\n【职阶】弓兵<br>\n【宝具】第七圣典<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★★★★☆☆☆☆☆<br>\n【爆发】★★★★☆☆☆☆☆☆<br>\n【控制】★★★★★☆☆☆☆☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★☆☆☆☆☆☆☆<br>\n【辅助】★★☆☆☆☆☆☆☆☆<br>\n【治疗】★★☆☆☆☆☆☆☆☆<br>\n【特质】教会埋葬机关仅有的八位成员之一,三餐只吃咖喱的暴力修女.<br>\n如果说[圣堂教会]是教廷的退魔机关的话,[埋葬机关]就完全是教会的屠魔机关.这些由教会最高战力所集结的刽子手们获准不用<法>而用<力>来处理基督教的矛盾点,所肃清的对象皆是连圣堂教会都难以对抗的超自然怪物.<br>\n希耶尔是埋葬机关排位第七名的代行者,代号<弓>.所被赋予的概念武装是对转生者罗亚准备的秘宝[第七圣典],这件武器的核心使用最后的独角兽之角为材料,表面刻满了否定轮回转生概念的文字,在造成伤害时可以直接破灭灵魂,且有七种形态可以发挥效用,灵活适用于多种战况.<br>\n【评级】<b><font color=Silver>B+</font></b>\n']],
                        zmlingaierkuite: ['female', 'zm2ling', 5, ['zmyuezhixueji', 'zmkongxiangjuxianhua'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊贰/属性人形.png width="34" height="22"><img src=extension/综漫季刊贰/属性元素.png width="34" height="22"><img src=extension/综漫季刊贰/属性肃正.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊贰/属性混乱善良.png width="57" height="19"> <br>\n【职阶】不眠者<br>\n【宝具】空想具现<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★★★☆☆☆☆☆☆<br>\n【爆发】★★★★★☆☆☆☆☆<br>\n【控制】★★★☆☆☆☆☆☆☆<br>\n【生存】★★★★★★★☆☆☆<br>\n【成长】★★★★★★★☆☆☆<br>\n【辅助】★★☆☆☆☆☆☆☆☆<br>\n【治疗】★★★☆☆☆☆☆☆☆<br>\n【特质】星球意志所塑造的精灵,为了狩猎堕落真祖而生出的特别真祖.<br>\n吸血鬼源头的[真祖],虽然吸血鬼的一面很强烈,但同时也是一种宿于地球的精灵.把她当做台风、地震或自然现象的拟人化会比较容易理解.若是在原世界中战斗则可以几乎无上限的获得星球力量支援,呈现出永远比敌人强一线的规格.<br>\n宝具[空想具现]是作为世界触觉的精灵被赋予的技能,即让自己的意志与世界直接连接,使外在世界转化为与想象趋同的非常实用且强大的能力.<br>\n【评级】<b><font color=Gold>A</font></b>\n']],
                        zmkexiaosi: ['male', 'zm2ke', 4, ['zmqianjibian', 'zmxingshenqi'], ['des: 【属性】<img src=extension/综漫季刊贰/属性人形.png width="34" height="22"><img src=extension/综漫季刊贰/属性机械.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊贰/属性完全中立.png width="57" height="19"> <br>\n【职阶】机械师<br>\n【宝具】千机变<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★☆☆☆☆☆☆<br>\n【控制】★★☆☆☆☆☆☆☆☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★★☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】<组织>创立二十八年时成为冥使,是所有冥使中除了魂与左殇以外,在<组织>中资历最浅的一人.<br>\n<小厮>是一个卑微的自称,来自于加入<组织>之前的一段前尘往事.早年间在械城生活着一对夫妇,默默无闻且天性愚钝,他们的孩子却是天资聪颖独一无二.这个孩子便是小厮,他从小贪玩,痴迷于机关术,但由于家世原因只能去赢氏门下做一名扫地童子,能得到正统传授机关术的机会十分稀少.作为一个好奇心极强的男孩,小厮每天都会趁着闲暇功夫去偷看机械制造,每年的机械大会他更是会偷偷溜出来,将整个赛事一局不落地看完.<br>\n在某次偷看时,他被偶然经过的赢氏门客之女撞见.小厮央求少女不要告诉别人,少女答应了他.两人逐渐成为很好的伙伴,经常一起偷看机关大会.尔后少女获准学习机关之术,又将技术不断授予小厮.小厮的悟性极高,不到一年,他的机关术飞速进展,不仅超越了教会他的女子,还超过了女子的老师——赢氏家族某位嫡系传人.<br>\n不久,一只翱翔在械城天空的机关鸟引起了众人注意.这令赢氏家族大为惊讶且震怒,毕竟他们在飞行器上有过许多实验却无一成功,而这个机关鸟似乎永不陨落.他们很快查出了机关鸟的制作者,小厮被赢氏门客抓获,严刑拷打之后小厮吐露出所有内容,但他没有供出那位少女,只说是自己偷学来的.赢氏族长爱才,命门客将小厮驱逐出械城,此生不得再踏入械城半步.<br>\n流落江湖后,小厮以其高超的技术,并不愁钱花,但他通过详尽侦查发现了<组织>的所在地,并找到了冥主.冥主在与小厮交谈过后,明白此人是个难得的人才,允诺他会在这里找到属于自己的发挥空间.任何人加入<组织>以后,之前的人生便不复存在,从此小厮便是小厮,没有人知道这个称号是如何而来,他也乐意别人这样称呼他.<br>\n【评级】<b><font color=Silver>B</font></b>\n']],
                    },
                    translate: {
                        zmfalujin: '陆瑾',
                        zmdouzhangchulan: '张楚岚',
                        zmfawangye: '王也',
                        zmkuangxiaozizai: '肖自在',
                        zmshachenduo: '陈朵',
                        zmgongyuantao: '苑陶',
                        zmgongjiazhengliang: '贾正亮',
                        zmshafengbao: '冯宝宝',
                        zmjianzaomenxiongmei: '灶门兄妹',
                        zmjianlianyuxingshoulang: '炼狱杏寿郎',
                        zmshayouaier: '尤艾尔',
                        zmfaaweisibulong: '阿维斯布隆',
                        zmhusaixili: '塞西莉',
                        zmqiangbuladamante: '布拉达曼特',
                        zmlinyuzhe: '愚者',
                        zmtidiyaboluo: '迪亚波罗',
                        zmfacangqiqingzi: '苍崎青子',
                        zmfalanranzongyoujie: '蓝染',
                        zmgongaertaier: '阿尔泰尔',
                        zmlingaobolong: '奥伯龙',
                        zmlingmingcanxue: '名残雪',
                        zmdousani: '萨尼',
                        zmlinyakedemolai: '雅克德莫莱',
                        zmtishizhilvzhe: '识之律者',
                        zmkelizhilvzhe: '理之律者',
                        zmjianleizhilvzhe: '雷之律者',
                        zmtikongzhilvzhe: '空之律者',
                        zmgongxiyeer: '希耶尔',
                        zmkexiaosi: '小厮',
                        zmlingaierkuite: '爱尔奎特',
                        ztongtianlu: '通天箓',
                        ztongtianlu_info: '<li>当你获得或失去至少2张牌时获得1枚<b><font color=PaleTurquoise>【通天箓】</font></b>;<li><b><font color=PaleTurquoise>【通天箓】</font></b>可以当作除【增兵减灶/无中生有/桃】外的任意牌使用或打出.<li>出牌阶段限一次 <br>&nbsp你可以消耗80点能量并弃置至少2张不同花色的手牌选择一名其他角色,该角色连续进行等量次数伤害为2的拟【闪电】判定直到判定生效为止;<br>&nbsp此时你每有1枚通天箓,则移除之并使判定次数+1.',
                        ztongtianlu_2: '通天箓',
                        ztongtianlu_2_info: '',
                        ztongtianlu_3: '通天箓',
                        ztongtianlu_3_info: '',
                        ztongtianlu_4: '通天箓',
                        ztongtianlu_4_info: '',
                        ztongtianlu_5: '通天箓',
                        ztongtianlu_5_info: '',
                        ztongtianlu_1: '通天箓',
                        ztongtianlu_1_info: '',
                        zheshu: '合书之法',
                        zheshu_info: '出牌阶段限一次 <li>你可以消耗80点能量并弃置至少2张不同花色的手牌选择一名其他角色进行等量次数的拟【闪电】判定;<li>此时你每有1张通天箓,则移除之并使判定次数+1.',
                        zmnishengsanchong: '逆生三重',
                        zmnishengsanchong_info: '锁定技 <li>当你脱离濒死状态后,若你区域内总牌数不小于2则你弃置所有牌并回复1点体力.<br>&nbsp若你以此法弃置了超过2张牌,则你使用的下一张【杀】伤害基数+1.',
                        zmdacidabeiqianyeshou: '大慈大悲千叶手',
                        zmdacidabeiqianyeshou_info: '<li>每当你使用【杀】指定目标时,你可选择一名此杀目标距离1以内的角色令其弃置1张牌;<br>&nbsp若对方无牌可弃且不为原目标,则其成为此牌的额外目标.<li>选择后若你本回合内造成过伤害且能量达到40点,则你清空能量使此【杀】伤害+1.',
                        zmyishazhisha: '以杀止杀',
                        zmyishazhisha_info: '当你或你攻击范围内的其他角色受到【杀】造成的伤害后,你可将1张当前可以使用的手牌当作【杀】立即使用.',
                        zmjinguangzhou: '金光咒',
                        zmjinguangzhou_info: '当你没有手牌时,你可以将装备区里的1张牌当作【杀】【闪】使用或打出.',
                        zmshenlingming: '神灵明',
                        zmshenlingming_info: '锁定技<li>每当你使用【杀】指定目标时,若你体力为1/手牌为0/判定区内有牌,则你解除横置翻面状态并清除判定区内的牌;<br>&nbsp之后此杀伤害基数+1,且直到结算完成前目标的非锁定技失效.',
                        zmjiulongbahuan: '九龙八幻',
                        zmjiulongbahuan_info: '<li>当你使用牌时,若此牌点数与你使用的上张牌的点数之平均数不小于8,则你可将手牌补整至体力上限并获得1枚【九龙子】.<li>你持有的【九龙子】不能超过9枚,你不能被点数小于【九龙子】数量的牌指定为目标.<li>当你获得【九龙子】时,若你的能量达到50点则你清空能量获得1点护甲.',
                        zmjiulongbahuan2: '囚龙渊',
                        zmjiulongbahuan2_info: '<li>当你对其他角色造成伤害时,若你至少有6枚【九龙子】,则你可移除所有九龙子使此伤害数等于你九龙子的数量/3.',
                        zmyuwu: '御物',
                        zmyuwu_info: '<li>你手牌中的所有【杀】只占用1手牌上限.<li>每当场上有【杀】因被抵消而进入弃牌堆时,你消耗12点能量获得之.',
                        zmzhanxian: '斩仙',
                        zmzhanxian_info: '<li>你使用的【杀】无法被小于你手牌中杀数量点数的牌响应;<li>当你使用实体【杀】时若你手牌中杀的数量超过你的体力值,则你本回合使用【杀】无次数限制.',
                        zxiaobaichong: '迅雷肇电',
                        zxiaobaichong_info: '<li>你手牌中的【杀】不计入手牌上限.<li>当其他角色使用【杀】时,你可对其使用1张点数不小于此杀的【杀】并取消此杀.<li>出牌阶段限一次 <br>你可消耗50点能量对所有于上轮对你造成过伤害或你造成过伤害的角色造成1点雷电伤害.<br>&nbsp若只以此法记录了1名角色,则你改为对其造成2点雷电伤害.',
                        ztaijijin: '太极劲',
                        ztaijijin_info: '<li>你可以将【杀】当【闪】,【闪】当【杀】使用或打出.<li>你的【毒】可以当【桃园结义】使用.',
                        zmfenghouqimen: '风后奇门',
                        zmfenghouqimen_info: '<li>出牌阶段开始时,你可消耗60点能量发动并维持此技能2轮,且可选择攻击范围内的任意名其他角色令他们的判定区内随机置入1张延时锦囊牌;<li>此技能生效期间,你视为装备了【八卦阵】,且在这期间你进行的拼点必然胜利,进行的判定始终为正面结果.<li>此技能生效期间,每回合在需要时你可无消耗的使用1张【无懈可击】.',
                        zmluanjintuo: '乱金柝',
                        zmluanjintuo_info: '每当你累计使用了2张【无懈可击】后,你摸1张牌并立即开始1个额外的出牌阶段.',
                        zmminggu: '命蛊',
                        zmminggu_info: '<li>当你因其他角色使用的实体牌受到伤害时,你可消耗20点能量令伤害来源收回此牌且之后将其手牌中所有与此牌同花色的牌转化为【毒】.<li>当其他角色因【毒】流失体力时,若其在你的攻击范围内则你可弃置至多2张黑色牌令其额外流失等量的体力.',
                        zmshenggu: '生蛊',
                        zmshenggu_info: '你手牌中的【毒】均视为【无中生有】.',
                        zmaweishibashi: '阿威十八式',
                        zmaweishibashi_info: '<li>每回合当你使用第1张实体牌后本回合内你使用同颜色的牌无次数限制.<li>每当你使用【杀】【决斗】即将造成伤害时,你可消耗30点能量并弃置1张比此牌点数更大的牌令该伤害基数+1.',
                        zmguizhen: '归真',
                        zmguizhen_info: '<li>每当你被其他角色使用【杀】指定为目标时,你可保留你手牌中点数最大的牌并视为重铸了所有手牌;<br>&nbsp若如此做时你手牌中左起第1张牌即为你手牌中点数最大的牌,则你不弃牌并视为重铸了所有手牌.',
                        zmxiutanz: '嗅探',
                        zmxiutanz_info: '当你进行判定前,你可以观看牌堆顶的2张牌并调整顺序.',
                        zmshuizhihuxi: '水之呼吸',
                        zmshuizhihuxi_info: '锁定技 <li>你于回合内使用的【杀】被抵消时,此杀不计入出杀次数.<li>你于回合外可将【杀】当做【闪】使用或打出.<li>每当你使用或打出【杀/闪】时,若你的手牌数小于体力上限且已累计使用或打出了1组或多组【杀/闪】,则每有1组你摸1张牌.<br>&nbsp你每次以此法的获得的牌数最大等同于你的体力值.<li>当你于奇数轮内受到伤害时,你累计的【杀/闪】次数清零.',
                        zmxueguishubaoxue: '血鬼术•爆血',
                        zmxueguishubaoxue_info: '当你于偶数轮内受到伤害时,若伤害来源在你的攻击范围内,你可消耗至少50点能量回复1点体力并对其造成1点火焰伤害;<br>&nbsp之后若你的手牌中有【杀/闪】,则你弃置全部【杀/闪】对伤害来源追加1~2点火焰伤害,若目标为[死灵][魔性]属性则该伤害恒定为2.',
                        zmyanzhizhu: '炎之柱',
                        zmyanzhizhu_info: '每轮限一次 <br>&nbsp当其他角色需要使用【闪】响应【杀】时,若你不为此杀来源则可与此杀来源拼点:<li>若你拼点胜利则该角色视为使用了1张闪.<li>若你拼点失败,则该角色获得你的拼点牌.',
                        zmyanzhihuxi: '炎之呼吸',
                        zmyanzhihuxi_info: '<li>出牌阶段 你可以将手牌中的锦囊牌当做【火杀】使用.<li>你使用【火杀】指定目标时,若目标装备了防具牌则其弃置之且直到本回合结束前获得【藤甲】的效果.',
                        zmjiuzhixing: '玖之型·炼狱',
                        zmjiuzhixing_info: '出牌阶段限一次 <br>&nbsp若你的手牌中只有基本牌,则你可消耗至少60点能量对一名可以出杀的其他角色造成2点火焰伤害并立即结束你的回合.',
                        zmrongyuefeiren: '融月绯刃',
                        zmrongyuefeiren_info: '<li>当你使用【闪】抵消【杀】时,你可以对此杀来源使用1张【杀】.<li>你使用【杀】指定目标时可消耗15点能量并弃置1张手牌;<br>&nbsp若如此做,该【杀】造成伤害时你对目标追加1点火焰伤害且令其随机弃置2张牌.',
                        zmyetianguang: '夜天光',
                        zmyetianguang_info: '其他角色的出牌阶段开始时,你可消耗30点能量摸3张牌并可交给该角色2张牌.',
                        zmruizhizhiguang: '王冠:睿智之光',
                        zmruizhizhiguang_info: '准备阶段开始时,若你未以此法记录角色,则你可选择一名其他角色记录之.<br>&nbsp你以此法记录的角色始终跳过弃牌阶段.<li>当你使用基本牌时,以此法记录的角色摸1张牌;<li>当你使用装备牌时,以此法记录的角色获得1点护甲.',
                        zmshumishu: '数秘术',
                        zmshumishu_info: '当你或你以【王冠:睿智之光】记录的角色受到伤害后,若场上存在以【王冠:睿智之光】记录的角色,则你可消耗40点能量进入潜行状态直到回合开始;<br>&nbsp若如此做,则你以【王冠:睿智之光】记录的角色于当前回合结束后进行1个额外的回合.',
                        zmshenshengjili: '神圣祭礼',
                        zmshenshengjili_info: '当有角色失去至少2张牌或进入濒死状态时,若你有手牌,则你可消耗25点能量令其回复1点体力;<br>&nbsp若该角色不为你,之后你与其交换1张手牌;若此时该角色没有手牌,则其无需交给你手牌并使你回复1点体力.',
                        zmweiyuchunde: '为愚蠢的异教徒降下天罚',
                        zmweiyuchunde_info: '当你脱离濒死状态时,你可令伤害来源的手牌上限与你相同直到其受到伤害为止.',
                        zmkalaimengzhixun: '克莱蒙之勋',
                        zmkalaimengzhixun_info: '<li>准备阶段 你可以选择任意名判定区内有牌的其他角色,之后你以每张牌5点能量的消耗分别将他们的1张判定区内的牌置入你的判定区.<li>当你的延时锦囊牌生效后,你可获得此牌.',
                        zmbaiyuqishi: '白羽骑士',
                        zmbaiyuqishi_info: '锁定技<li>当你于弃牌阶段弃置了牌后,你为你的空装备栏内随机置入等量的装备牌;<br>&nbsp此时若你未装备防具牌则优先装备防具牌.',
                        zmxuanmudemodun: '眩目的魔盾',
                        zmxuanmudemodun_info: '当你对其他角色造成的伤害时,若你装备区内有牌,则你可消耗至少50点能量令此伤害基数+1;<br>&nbsp之后你弃置所有装备区内的牌,并令该角色弃置等量的牌.',
                        zmmangmuchiyu: '痴愚权能',
                        zmmangmuchiyu_info: '<li>出牌阶段结束时,你可选择一名其他角色令其直到下回合结束前不能使用或打出你此阶段内未使用过的类别的牌;<br>&nbsp若如此做且本回合你未使用过任何牌,则效果改为令对方进入【混乱】状态直到下回合结束.',
                        zmxianshiniuqu: '历史投影',
                        zmxianshiniuqu_info: '<li>当有角色的出牌阶段开始时,你可消耗20点能量令其该阶段内每使用牌时都会获得1张相应牌的复制牌;<br>&nbsp以此法获得的复制牌总数至多为该角色发动此效果时的手牌数;<br>&nbsp场上存在的复制牌将在此阶段结束时消失.',
                        zfeihongzhiwang: '绯红之王',
                        zfeihongzhiwang_info: '每回合限一次<li>当你受到伤害/被带有伤害标签的牌指定时可消耗20点能量取消即将结算的效果并立即开始一个额外的出牌阶段;<br>&nbsp此阶段内,其他角色的非锁定技失效且无法使用或打出牌;<br>&nbsp此阶段内当你使用【杀】【决斗】指定目标时,此牌伤害基数+1且无法被点数更小的牌响应,同时场上所有角色解除此技能带来的负面效果.',
                        zmshuangmianren: '双面人',
                        zmshuangmianren_info: '你的锦囊牌不计入手牌上限.',
                        zmdiwufa: '第五法',
                        zmdiwufa_info: '<li>准备阶段 你可以观看牌堆顶5张牌并调整其中1张牌的位置;<br>&nbsp若如此做,你可以将1张手牌当做此牌使用.<li>每轮限一次 当其他角色的回合开始时,你可逆转此回合的进行顺序.<br>&nbsp若如此做,本回合内被逆转的阶段无法成为任何技能的触发时机.',
                        zmshixiangshique: '事项失却',
                        zmshixiangshique_info: '<li>当有角色即将受到致命伤害时,你可消耗50点能量将此伤害延迟至相当于该角色体力上限的轮数后作为无来源伤害结算;<br>&nbsp若发动此技能时该角色已有延迟的伤害未结算,则当前伤害叠加至已有的时点结算.',
                        zmjinghuashuiyue: '镜花水月',
                        zmjinghuashuiyue_info: '每回合限一次<li>当其他角色使用牌指定你攻击范围内的角色为唯一目标时,你可与其拼点,若拼点胜利则你可选择:<br>&nbsp①将此牌的目标改为其攻击范围内的一名角色.<br>&nbsp②取消此牌所有目标.<li>每当你拼点胜利后,下次拼点时你的拼点牌点数累计额外+1;若未赢,则你清除以此法额外累计增加的全部点数.',
                        zmheiguan: '破道之九十•黑棺',
                        zmheiguan_info: '出牌阶段限一次 <br>你可以消耗至少70点能量对一名没有手牌的其他角色造成伤害;你每以此法消耗35点能量则伤害量+1.',
                        zmzhaiyaoyuanyuan: '摘要渊源',
                        zmzhaiyaoyuanyuan_info: '每回合限一次<li>当你对其他角色造成伤害时,你可移除自己的1个临时技能使该角色移除所有非初始技能、重置武将牌并弃置区域内的全部牌.',
                        zmbziwogaizao: '自我改造',
                        zmbziwogaizao_info: '锁定技 <li>回合开始时你清空能量并从3个随机亮出的技能中选择1个作为临时技能获得;<br>&nbsp你以此法获得的所有临时技能于你受到伤害时移除.<li>当你以此法获得临时技能后,若你已持有至少3个临时技能,则你可选择1个临时技能永久获得.',
                        zmyezhiweimu: '夜之帷幕',
                        zmyezhiweimu_info: '你的回合结束时,你获得其他角色本回合进入弃牌堆的牌.',
                        zmbengluo: '崩落之咎',
                        zmbengluo_info: '<li>每当你于回合外失去牌时,你可选择一名未进入[崩落]状态的角色进入[崩落]状态直到你发动【夜之帷幕】为止.<li>每当你于回合内使用牌时,处于[崩落]状态的角色需随机弃置1张牌.',
                        zmyubifangluomudemengzhitong: '于彼方同坠的梦之瞳',
                        zmyubifangluomudemengzhitong_info: '出牌阶段限一次 你可消耗120点能量选择任意名角色令他们翻面并弃置所有牌.',
                        zmxuenu: '血怒',
                        zmxuenu_info: '<li>每当你使用【杀】对目标造成伤害时,你获得目标5点能量.<li>你使用【杀】指定目标时,若你的能量达到60点则你进入血怒状态;<br>&nbsp在该状态下你不能使用锦囊牌且攻击范围+1,每当你使用【杀】时消耗25点能量使此杀伤害基数+1.<br>&nbsp当你于此状态下使用【杀】对目标造成伤害后,该目标于你的回合内对自己进行的回复行为无效.<li>若你使用【杀】后/即将使用【杀】时能量不足25点,则你流失1点体力并结束血怒状态.',
                        zmdongxim: '洞悉',
                        zmdongxim_info: '<li>当你抵消了其他角色对你使用的【杀】时,你可以令其直到下轮开始前进入洞悉状态;<br>&nbsp处于洞悉状态的角色因其区域内没有的花色的牌而受到伤害时,伤害基数+1.',
                        zmmowangzhifa: '魔王之发',
                        zmmowangzhifa_info: '摸牌阶段开始时你可选择:<li>少摸1张牌后你本回合内使用的【杀】伤害基数+1;<li>使你的摸牌数等同于你攻击范围,之后本回合内你的攻击范围翻倍但手牌上限-1.',
                        zmzuduan: '飞铲回击',
                        zmzuduan_info: '<li>当于你攻击范围内的其他角色使用基本牌时,你可消耗15点能量展示1张与之颜色相同的手牌令该角色收回此牌并取消效果,且该角色本回合不能使用或打出基本牌.<li>若该角色使用的牌带有伤害标签,则你改为弃置1张与此牌同颜色的手牌取消此牌效果并令此牌对该角色结算1次,之后该角色收回此牌且本回合不能使用或打出基本牌.',
                        zmzuduan2: '阻断',
                        zmzuduan2_info: '',
                        zmduoluodexuren: '堕落的叙任',
                        zmduoluodexuren_info: '出牌阶段限一次  <li>你可选择一名其他角色指定1种花色并选择你的1张手牌展示:<br>&nbsp若此牌花色与指定的花色不同,其获得展示的牌.<br>&nbsp若此牌花色与指定的花色相同,则该角色摸2张牌,之后你可查看并获得其1张手牌.',
                        zmheizhishenghaibu: '黑之圣骸布',
                        zmheizhishenghaibu_info: '当你流失体力/横置/翻面时,你可弃置至多2张手牌将此效果转移给一名其它角色,且令该角色弃置等量的牌.',
                        zmheisexingqiwu: '黑色星期五',
                        zmheisexingqiwu_info: '当你失去最后1张手牌时,你可消耗至少60点能量选择任意名角色,之后这些角色的所有手牌于本轮内视为【毒】.',
                        zmmoyinwuqi: '模因武器',
                        zmmoyinwuqi_info: '每当其他角色获得本局内你曾失去过的牌时,你可获得其全部手牌.',
                        zmwuxingzhishi: '无形之识',
                        zmwuxingzhishi_info: '当你即将受到伤害时,你可消耗相当于伤害量30倍的能量并重铸相当于伤害量3倍的牌以取消此伤害.',
                        zmwanxianglantu: '万象蓝图',
                        zmwanxianglantu_info: '出牌阶段 <br>&nbsp你可将1张可使用的手牌当做本回合内你使用过的任意基本牌或普通锦囊牌使用.',
                        zmxukongzaowu: '虚空造物',
                        zmxukongzaowu_info: '出牌阶段 <br>&nbsp若你没有可使用的手牌,则你可消耗20点能量视为使用了1张【无中生有】并重置你本回合的卡牌使用次数.',
                        zmhongleiyishan: '轰雷一闪',
                        zmhongleiyishan_info: '每回合限一次 <li>当你使用的【杀】结算后,你可指定一名本回合未被你以杀指定过的角色,并亮出牌堆顶的1张牌:<br>&nbsp若为黑色,你对该角色使用1张杀.<li>若你触发此技能的【杀】为雷杀,则你仅可指定本回合被你以杀指定过的其他角色为目标,之后你以此法使用的杀为雷属性且伤害基数+1.',
                        zmyuejianjueying: '月见绝影',
                        zmyuejianjueying_info: '<li>你可将你某一区域内的最后1张牌当做【闪】使用;<li>当你抵消了其他角色使用的【杀】后,你可消耗30点能量获得此杀并将手牌中的杀转化为雷杀.',
                        zmyuejianjueying2: '月见',
                        zmyuejianjueying2_info: '',
                        zmlvkongzhe: '律空者',
                        zmlvkongzhe_info: '锁定技 <li>当你于当前角色回合内使用或打出相当于你攻击范围数量张数的牌时,你摸等量的牌. <li>每轮限一次 当你需要因响应其他角色的牌而使用或打出【闪】时,你进行判定:<br>&nbsp若判定牌点数大于你需要响应的牌之点数,则你视为使用或打出了1张【闪】. ',
                        zmxujiejianglin: '虚界降临',
                        zmxujiejianglin_info: '出牌阶段开始时 你可消耗60点能量选择任意名其他角色:<li>若如此做,你以此法选择的角色将手牌中所有带有伤害标签的牌对自己使用;<li>若如此做,你未以此法选择的角色使用牌时无法被除使用者与你之外的角色响应直到你受到伤害为止.',
                        zmdiqishengdian: '第七圣典',
                        zmdiqishengdian_info: '<li>出牌阶段开始时 你可选择1张武器牌视为拥有此牌的装备技能直到你下个准备阶段开始.<li>当你以此法选择武器牌时,若此技能累计发动的次数大于你的手牌数,则你摸两者之差数量的牌;<br>&nbsp你以此法累计的次数至多为7次,若达到上限则你失去1点体力并将计数调整至1.<li>当你以累计发动此技能的次数为7时,你清空能量令你本回合首次使用【杀】造成的伤害+1,且造成伤害后若目标体力值为负则清除目标所有技能.',
                        zmmaizangjiguan: '埋葬机关',
                        zmmaizangjiguan_info: '你于回合内每使用1张普通锦囊牌,本回合你的攻击范围+1.',
                        zmkongxiangjuxianhua: '空想具现',
                        zmkongxiangjuxianhua_info: '每轮限一次 <li>当你使用或打出牌响应其他角色,以及其他角色使用或打出牌响应你后,你可查看双方的手牌并选择其中1张牌获得该牌的复制牌.',
                        zmyuezhixueji: '月之血姬',
                        zmyuezhixueji_info: '<li>你可以将任意手牌当做【杀】使用.<li>当你的【杀】造成伤害时,你可消耗50点能量使伤害基数+1并回复1点体力.',
                        zmqianjibian: '千机变',
                        zmqianjibian_info: '出牌阶段开始前 你可消耗15点能量选择攻击范围内任意名装备区内有牌的其他角色,令他们将装备区内的牌收回手牌;<br>&nbsp若如此做,直到你的下回合开始前你获得这些牌的装备技能.',
                        zmxingshenqi: '形神契',
                        zmxingshenqi_info: '每回合限一次 <br>&nbsp当你对其他角色造成伤害时,若你装备区内有牌,则你摸相当于你装备区内总牌数数量的牌.',
                        zmt_np: 'NP',
                        zmt_np_info: '',
                        zmt_np1: '充能',
                        zmt_np1_info: '',
                        zmt_np2: '充能',
                        zmt_np2_info: '',
                        zmtmoxing: '魔性',
                        zmtmoxing_info: '',
                        zmtsuzheng: '肃正',
                        zmtsuzheng_info: '',
                        zmtjuda: '巨大',
                        zmtjuda_info: '',
                        zmtgaodengshengming: '高等生命',
                        zmtgaodengshengming_info: '',
                        zmtlongxue: '龙血',
                        zmtlongxue_info: '',
                        zmtrenxing: '人形',
                        zmtrenxing_info: '',
                        zmtyaren: '亚人',
                        zmtyaren_info: '',
                        zmtleiren: '类人',
                        zmtleiren_info: '',
                        zmtshenzu: '神族',
                        zmtshenzu_info: '',
                        zmtshenxing: '神性',
                        zmtshenxing_info: '',
                        zmtshensheng: '神圣',
                        zmtshensheng_info: '对【魔性/死灵】造成的伤害+1.',
                        zmtsiling: '死灵',
                        zmtsiling_info: '',
                        zmtyeshou: '野兽',
                        zmtyeshou_info: '',
                        zmtmoshou: '魔兽',
                        zmtmoshou_info: '',
                        zmtzaowu: '造物',
                        zmtzaowu_info: '',
                        zmtyuansu: '元素',
                        zmtyuansu_info: '',
                        zmthundun: '混沌',
                        zmthundun_info: '',
                        zmtshikong: '时空',
                        zmtshikong_info: '',
                        zmtshangweizhe: '上位者',
                        zmtshangweizhe_info: '',
                        zmtlongzu: '龙族',
                        zmtlongzu_info: '',
                        zmtjixie: '机械',
                        zmtjixie_info: '',
                        zmtgaodengliliang: '高等力量',
                        zmtgaodengliliang_info: '',
                        zmtchaojuda: '超巨大',
                        zmtchaojuda_info: '',
                        zmjingu: '禁锢',
                        zmjingu_info: '无法使用/打出/基本牌',
                        zmzhongji: '重击',
                        zmzhongji_info: '【杀】的基础伤害加1.',
                        zzhongji: '伤害增幅',
                        zzhongji_info: '',
                        zmtdongshang: '冻伤',
                        zmtdongshang_info: '此状态下你的手牌上限减1,受到非火焰伤害时有几率使该伤害加1.',
                        zxianfengyunti: '无敌状态',
                        zxianfengyunti_info: '无法受到伤害/翻面/横置/流失体力/失去体力上限,且不能被延迟锦囊牌指定.',
                        zmmiluan: '迷乱',
                        zmmiluan_info: '锁定技 每当你使用牌有大概率指向错误的目标.',
                        zmchusha1: '出杀+1',
                        zmchusha1_info: '',
                        zmchusha0: '出杀次数无限',
                        zmchusha0_info: '',
                        zmhaoduo2: '崩落',
                        zmhaoduo2_info: '',
                        zshishan: '时',
                        zshishan_info: '',
                        zxiaobaichong2: '小白虫',
                        zxiaobaichong2_info: ' ',
                        zxiaobaichong3: '小白虫',
                        zxiaobaichong3_info: ' ',
                    },
                    skill: {
                        ztongtianlu: {
                            nobracket: true,
                            init(player) {
                                player.storage.ztongtianlu = 0;
                            },
                            mark: true,
                            marktext: '箓',
                            intro: {
                                content(storage) {
                                    return `当前有${storage}张通天箓`;
                                },
                            },
                            enable: 'phaseUse',
                            audio: 'ext:综漫季刊贰/audio:3',
                            chooseButton: {
                                dialog() {
                                    var list = ['sha', 'shan', 'jiu'];
                                    for (var i = 0; i < list.length; i++) {
                                        list[i] = ['basic', '', list[i]];
                                    }
                                    var list2 = ['taoyuan', 'juedou', 'huogong', 'jiedao', 'tiesuo', 'shunshou', 'guohe', 'wanjian', 'nanman', 'qijia'];
                                    for (var i = 0; i < list2.length; i++) {
                                        list2[i] = ['trick', '', list2[i]];
                                    }
                                    var dialog = ui.create.dialog();
                                    dialog.add('基本牌');
                                    dialog.add([list, 'vcard']);
                                    dialog.add('锦囊牌');
                                    dialog.add([list2, 'vcard']);
                                    return dialog;
                                },
                                filter(button, player) {
                                    if (!player.storage.ztongtianlu) return false;
                                    return lib.filter.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                },
                                check(button, player) {
                                    var player = _status.event.player;
                                    var recover = 0,
                                        lose = 1;
                                    for (var i of game.players) {
                                        if (!i.isOut()) {
                                            if (i.hp < i.maxHp) {
                                                if (get.attitude(player, i) > 0) {
                                                    if (i.hp < 2) {
                                                        lose--;
                                                        recover += 0.5;
                                                    }
                                                    lose--;
                                                    recover++;
                                                } else if (get.attitude(player, i) < 0) {
                                                    if (i.hp < 2) {
                                                        lose++;
                                                        recover -= 0.5;
                                                    }
                                                    lose++;
                                                    recover--;
                                                }
                                            } else {
                                                if (get.attitude(player, i) > 0) {
                                                    lose--;
                                                } else if (get.attitude(player, i) < 0) {
                                                    lose++;
                                                }
                                            }
                                        }
                                    }
                                    if (lose > recover && lose > 0 && player.storage.ztongtianlu_1 == 'trick') return button.link[2] == 'wanjian' ? 1 : -1;
                                    if (lose < recover && recover > 0 && player.storage.ztongtianlu_1 == 'trick') return button.link[2] == 'taoyuan' ? 1 : -1;
                                    if (player.storage.ztongtianlu_1 == 'basic' && player.isDamaged()) return button.link[2] == 'tao' ? 1 : -1;
                                    if (player.storage.ztongtianlu_1 == 'basic' && player.countCards('h', 'sha')) return button.link[2] == 'jiu' ? 1 : -1;
                                    if (player.storage.ztongtianlu_1 == 'basic' && !player.countCards('h', 'sha')) return button.link[2] == 'sha' ? 1 : -1;
                                    return button.link[2] == 'guohe' ? 1 : -1;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard() {
                                            return false;
                                        },
                                        selectCard: -1,
                                        popname: true,
                                        viewAs: { name: links[0][2] },
                                        viewAsFilter(player) {
                                            return player.storage.ztongtianlu;
                                        },
                                        precontent() {
                                            delete player.storage.ztongtianlu_1;
                                            player.storage.ztongtianlu--;
                                        },
                                    };
                                },
                            },
                            group: ['ztongtianlu_1', 'ztongtianlu_2', 'ztongtianlu_3', 'ztongtianlu_4', 'ztongtianlu_5', 'zheshu'],
                            ai: {
                                order: 10,
                                result: {
                                    player(player) {
                                        if (player.storage.ztongtianlu_1 != undefined) return 1;
                                        return -1;
                                    },
                                },
                                threaten: 4,
                            },
                        },
                        ztongtianlu_2: {
                            audio: 'ext:综漫季刊贰/audio:3',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filter(event, player) {
                                if (!player.storage.ztongtianlu) return false;
                                return event.parent.name != 'phaseUse';
                            },
                            filterCard() {
                                return false;
                            },
                            selectCard: -1,
                            check(card, event) {
                                var player = _status.event.player;
                                if (player.storage.ztongtianlu_1 == 'basic') return 1;
                                if (player.countCards('h', 'sha')) return 0;
                                return 1;
                            },
                            viewAs: {
                                name: 'sha',
                            },
                            viewAsFilter(player) {
                                return player.storage.ztongtianlu;
                            },
                            onuse(result, player) {
                                game.playzm2(['ztongtianlu_21', 'ztongtianlu_211'].randomGet());
                                delete player.storage.ztongtianlu_1;
                                player.storage.ztongtianlu--;
                            },
                            onrespond(result, player) {
                                delete player.storage.ztongtianlu_1;
                                player.storage.ztongtianlu--;
                            },
                            ai: {
                                skillTagFilter(player) {
                                    return _status.dying != player;
                                },
                                respondSha: true,
                                basic: {
                                    useful: [5, 1],
                                    value: [5, 1],
                                },
                                order() {
                                    if (_status.event.player.hasSkillTag('presha', true, null, true)) return 10;
                                    return 3;
                                },
                                result: {
                                    target(player, target) {
                                        if (
                                            player.hasSkill('jiu') &&
                                            !target.hasSkillTag('filterDamage', null, {
                                                player: player,
                                                card: { name: 'sha' },
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
                                canLink(player, target, card) {
                                    if (!target.isLinked() && !player.hasSkill('wutiesuolian_skill')) return false;
                                    if (
                                        target.mayHaveShan() &&
                                        !player.hasSkillTag(
                                            'directHit_ai',
                                            true,
                                            {
                                                target: target,
                                                card: card,
                                            },
                                            true
                                        )
                                    )
                                        return false;
                                    if (player.hasSkill('jueqing') || target.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                    return true;
                                },
                                yingbian(card, player, targets, viewer) {
                                    if (get.attitude(viewer, player) <= 0) return 0;
                                    var base = 0,
                                        hit = false;
                                    if (get.cardtag(card, 'yingbian_hit')) {
                                        hit = true;
                                        if (
                                            targets.filter(function (target) {
                                                return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
                                            })
                                        )
                                            base += 5;
                                    }
                                    if (get.cardtag(card, 'yingbian_all')) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                                            })
                                        )
                                            base += 5;
                                    }
                                    if (get.cardtag(card, 'yingbian_damage')) {
                                        if (
                                            targets.filter(function (target) {
                                                return (
                                                    get.attitude(player, target) < 0 &&
                                                    (hit ||
                                                        !target.mayHaveShan() ||
                                                        player.hasSkillTag(
                                                            'directHit_ai',
                                                            true,
                                                            {
                                                                target: target,
                                                                card: card,
                                                            },
                                                            true
                                                        )) &&
                                                    !target.hasSkillTag('filterDamage', null, {
                                                        player: player,
                                                        card: card,
                                                        jiu: true,
                                                    })
                                                );
                                            })
                                        )
                                            base += 5;
                                    }
                                    return base;
                                },
                            },
                        },
                        ztongtianlu_3: {
                            audio: 'ext:综漫季刊贰/audio:5',
                            enable: 'chooseToUse',
                            filter(event, player) {
                                if (!player.storage.ztongtianlu) return false;
                                return event.parent.name != 'phaseUse';
                            },
                            filterCard() {
                                return false;
                            },
                            ai2(target) {
                                var player = _status.event.player;
                                if (player.storage.ztongtianlu_1 == 'trick') return 1;
                                if (player.hp == 1 && player.storage.ztongtianlu_1 != 'trick') return 0;
                                if (get.attitude(player, _status.currentPhase) >= 2) {
                                    if (_status.currentPhase.hasJudge('lebu') || _status.currentPhase.hasJudge('bingliang')) {
                                        return 10;
                                    }
                                    return 0;
                                }
                                if (player.hp <= 2 && !player.countCards('h', 'tao')) return 0;
                                return 1;
                            },
                            selectCard: -1,
                            viewAs: {
                                name: 'wuxie',
                            },
                            viewAsFilter(player) {
                                return _status.dying != player && player.storage.ztongtianlu;
                            },
                            onuse(result, player) {
                                delete player.storage.ztongtianlu_1;
                                player.storage.ztongtianlu--;
                            },
                            ai: {
                                basic: {
                                    useful: [6, 4],
                                    value: [6, 4],
                                },
                                result: {
                                    player: 1,
                                },
                                expose: 0.2,
                            },
                        },
                        ztongtianlu_4: {
                            audio: 'ext:综漫季刊贰/audio:3',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filter(event, player) {
                                if (!player.storage.ztongtianlu) return false;
                                return event.parent.name != 'phaseUse';
                            },
                            filterCard() {
                                return false;
                            },
                            selectCard: -1,
                            check(card, event) {
                                var player = _status.event.player;
                                if (player.storage.ztongtianlu_1 == 'basic') return 1;
                                if (player.countCards('h', 'shan')) return 0;
                                return 1;
                            },
                            viewAs: {
                                name: 'shan',
                            },
                            viewAsFilter(player) {
                                return player.storage.ztongtianlu;
                            },
                            onrespond(result, player) {
                                delete player.storage.ztongtianlu_4;
                                player.storage.ztongtianlu--;
                            },
                            onuse(result, player) {
                                delete player.storage.ztongtianlu_4;
                                player.storage.ztongtianlu--;
                            },
                            ai: {
                                skillTagFilter(player) {
                                    return _status.dying != player;
                                },
                                respondShan: true,
                                basic: {
                                    useful: [7, 2],
                                    value: [7, 2],
                                },
                                result: {
                                    player: 1,
                                },
                                order: 3,
                            },
                        },
                        ztongtianlu_5: {
                            nobracket: true,
                            trigger: {
                                player: ['loseEnd', 'gainEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.cards && event.cards.length >= 2;
                            },
                            content() {
                                'step 0';
                                player.storage.ztongtianlu++;
                            },
                        },
                        ztongtianlu_1: {
                            audio: 'ext:综漫季刊贰/audio:1',
                            enable: 'chooseToUse',
                            filter(event, player) {
                                if (!player.storage.ztongtianlu) return false;
                                return event.parent.name != 'phaseUse';
                            },
                            filterCard() {
                                return false;
                            },
                            selectCard: -1,
                            viewAs: {
                                name: 'jiu',
                            },
                            viewAsFilter(player) {
                                return player.storage.ztongtianlu;
                            },
                            check(card, event) {
                                var player = _status.event.player;
                                if (player.storage.ztongtianlu_1 == 'basic') return 1;
                                if (player.countCards('h', 'jiu')) return 0;
                                return player.hp - 1;
                            },
                            onuse(result, player) {
                                delete player.storage.ztongtianlu_1;
                                player.storage.ztongtianlu--;
                            },
                            ai: {
                                result: {
                                    player(player) {
                                        if (player.storage.ztongtianlu_1 != 'basic') return -1;
                                        return -0.5;
                                    },
                                    target(player, target) {
                                        return get.effect(target, { name: 'jiu' }, player, player);
                                    },
                                },
                                skillTagFilter(player) {
                                    return _status.dying != player;
                                },
                                threaten: 1.5,
                                save: true,
                                basic: {
                                    order(card, player) {
                                        if (player.hasSkillTag('pretao')) return 5;
                                        return 2;
                                    },
                                    useful: [8, 6.5, 5, 4],
                                    value: [8, 6.5, 5, 4],
                                },
                                tag: {
                                    recover: 1,
                                    save: 1,
                                },
                                order() {
                                    return get.order({ name: 'sha' }) + 0.2;
                                },
                            },
                        },
                        zheshu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊贰/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                if (player.storage.zmt_np < 80) return false;
                                return player.num('h') > 1;
                            },
                            selectCard: [2, 99],
                            filterCard(card) {
                                if (Array.isArray(ui.selected.cards))
                                    for (var i of ui.selected.cards) {
                                        if (card.suit == i.suit) return false;
                                    }
                                return true;
                            },
                            position: 'h',
                            complexCard: true,
                            selectTarget: 1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            check(card) {
                                return 6 - get.value(card);
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np = 0;
                                game.mp422('zmtongtianlu');
                                var num0 = player.storage.ztongtianlu;
                                event.num = cards.length + num0;
                                player.storage.ztongtianlu = 0;
                                ('step 1');
                                //直接使用不执行效果 疑似阶段不符
                                target.judge(function (card) {
                                    if (card.suit != 'spade') return 2;
                                    if (card.number >= 2 && card.number <= 9) return -2;
                                    return 2;
                                });
                                ('step 2');
                                if (!result.bool) {
                                    target.damage(2, 'thunder', 'nosource');
                                    event.finish();
                                }
                                ('step 3');
                                event.num--;
                                if (event.num > 0 && target.isAlive()) event.goto(1);
                                else event.finish();
                            },
                            ai: {
                                order: 11,
                                expose: 0.2,
                                result: {
                                    player(player) {
                                        if (player.num('e') > 0) return 1;
                                        var num = player.num('h');
                                        if (num > player.hp) return 1;
                                        if (num == 1) return -1;
                                        return -0.7;
                                    },
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                            },
                        },
                        zmnishengsanchong: {
                            group: ['zmtrenxing', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            nobracket: true,
                            audio: 'ext:综漫季刊贰/audio:1',
                            trigger: {
                                player: 'dyingAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('hej') >= 2 && player.isAlive();
                            },
                            content() {
                                'step 0';
                                var num = player.countCards('hej');
                                if (num >= 3) {
                                    player.addTempSkill('zzhongji', 'shaEnd');
                                }
                                ('step 1');
                                player.discard(player.getCards('hej'));
                                player.recover();
                            },
                        },
                        zmdacidabeiqianyeshou: {
                            nobracket: true,
                            audio: 'ext:综漫季刊贰/audio:7',
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('zmdacidabeiqianyeshou'), function (card, player, target) {
                                        if (trigger.target == target && trigger.target.getCards('he').length == 0) return false;
                                        return target != player && get.distance(trigger.target, target) <= 1;
                                    })
                                    .set('ai', function (target) {
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    event.targets = result.targets[0];
                                    if (result.targets[0].getCards('he').length >= 1) {
                                        result.targets[0].chooseToDiscard(true, 'he');
                                    } else {
                                        trigger.targets.addArray(event.targets);
                                        game.log(event.targets, `额外成为了${get.translation(trigger.card)}的目标`);
                                    }
                                }
                                ('step 2');
                                if (player.storage.zmt_np >= 40 && player.getStat('damage') >= 1) {
                                    player.storage.zmt_np = 0;
                                    game.playzm2('zmxiaozizai');
                                    game.mp422('zmxiaozizai');
                                    trigger.baseDamage++;
                                } else {
                                }
                            },
                        },
                        zmyishazhisha: {
                            group: ['zmtrenxing', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            nobracket: true,
                            trigger: {
                                global: ['damageEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.countCards('h') == 0) return false;
                                return event.card && event.card.name == 'sha' && get.distance(player, event.player, 'attack') <= 1;
                            }, //QQQ
                            content() {
                                'step 0';
                                lib.skill.zmyishazhisha.viewAs = { name: trigger.card.name };
                                var next = player.chooseToUse(`是否将一张手牌当做${get.translation(trigger.card.name)}使用？`).set('ai', function (card) {
                                    return 7 - get.value(card);
                                });
                                next.set('openskilldialog', `选择${get.translation(trigger.card.name)}的目标`);
                                next.set('norestore', true);
                                next.set('_backupevent', 'zmyishazhisha');
                                next.backup('zmyishazhisha');
                                ('step 1');
                                if (ui.confirm) {
                                    ui.confirm.close();
                                }
                            },
                        },
                        zmyuwu: {
                            mod: {
                                maxHandcard(player, num) {
                                    if (player.num('h', 'sha') > 0) {
                                        return num + player.num('h', 'sha') - 1;
                                    } else {
                                        return num;
                                    }
                                },
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊贰/audio:4',
                            trigger: {
                                global: 'shaMiss',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.storage.zmt_np < 12) return false;
                                return event.cards;
                            },
                            content() {
                                player.storage.zmt_np -= 12;
                                game.log(player, '获得了', trigger.cards);
                                player.gain(trigger.cards, 'gain2');
                            },
                        },
                        zmzhanxian: {
                            group: ['zmtrenxing', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            nobracket: true,
                            trigger: {
                                player: 'shaBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.cards && event.card.name == 'sha' && player.countCards('h', 'sha');
                            },
                            content() {
                                if (player.countCards('h', 'sha') > player.hp && !player.hasSkill('zmchusha0')) {
                                    game.playzm2(['zmzhanxian21', 'zmzhanxian22'].randomGet());
                                    player.addTempSkill('zmchusha0', { player: 'phaseEnd' });
                                } else {
                                    game.playzm2(['zmzhanxian11', 'zmzhanxian12', 'zmzhanxian13', 'zmzhanxian14'].randomGet());
                                }
                                trigger.target.addTempSkill('zmzhanxian_1', 'shaAfter');
                            },
                            subSkill: {
                                1: {
                                    mod: {
                                        cardEnabled(card, player) {
                                            var event = _status.event;
                                            var jzl = game.findPlayer(function (current) {
                                                return current.name == 'zmgongjiazhengliang';
                                            });
                                            if (jzl) {
                                                var num0 = jzl.countCards('h', 'sha');
                                                if (event.parent) {
                                                    if (card.number < num0) return false;
                                                }
                                            }
                                        },
                                        cardRespondable(card, player) {
                                            var event = _status.event;
                                            var jzl = game.findPlayer(function (current) {
                                                return current.name == 'zmgongjiazhengliang';
                                            });
                                            if (jzl) {
                                                //QQQ
                                                var num0 = jzl.countCards('h', 'sha');
                                                if (event.parent) {
                                                    if (card.number < num0) return false;
                                                }
                                            }
                                        },
                                    },
                                },
                            },
                        },
                        zmjiulongbahuan: {
                            group: ['zmtrenxing', 'zmt_np', 'zmt_np1', 'zmt_np2', 'zmjiulongbahuan_3'],
                            mark: true,
                            marktext: '幻',
                            intro: {
                                content(storage) {
                                    return `上一张使用的牌点数为${storage}.`;
                                },
                            },
                            init(player) {
                                player.storage.zmjiulongbahuan = 0;
                            },
                            forced: true,
                            nobracket: true,
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                if (!event.cards || event.cards.length != 1) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                if (typeof player.storage.zmjiulongbahuan != 'number') {
                                    player.storage.zmjiulongbahuan = 0;
                                }
                                ('step 1');
                                var num = player.storage.zmjiulongbahuan + trigger.card.number;
                                if (num / 2 >= 8) {
                                    game.playzm2(['zmjiulongbahuan11', 'zmjiulongbahuan12', 'zmjiulongbahuan13', 'zmjiulongbahuan14', 'zmjiulongbahuan15', 'zmjiulongbahuan16', 'zmjiulongbahuan15', 'zmjiulongbahuan16'].randomGet());
                                    if (player.storage.zmt_np >= 50) {
                                        player.storage.zmt_np = 0;
                                        player.changeHujia();
                                    }
                                    if (player.storage.zmjiulongbahuan2 <= 8) {
                                        player.storage.zmjiulongbahuan2 += 1;
                                    }
                                    player.draw(player.maxHp - player.num('h'));
                                }
                                ('step 2');
                                player.storage.zmjiulongbahuan = trigger.card.number;
                            },
                            subSkill: {
                                3: {
                                    trigger: {
                                        player: 'damageBegin',
                                    },
                                    forced: true,
                                    silent: true,
                                    filter(event, player) {
                                        return event.num > 0 && player.hujia > 0;
                                    },
                                    content() {
                                        var num = player.hujia;
                                        if (trigger.num <= num && player.hp > 1) {
                                            game.playzm2(['zmjiulongbahuan_32'].randomGet());
                                        } else {
                                            game.playzm2(['zmjiulongbahuan_31'].randomGet());
                                        }
                                    },
                                    popup: false,
                                },
                            },
                        },
                        zmjiulongbahuan2: {
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (player != target && card.number < target.storage.zmjiulongbahuan2) return false;
                                },
                            },
                            init(player) {
                                player.storage.zmjiulongbahuan2 = 0;
                            },
                            mark: true,
                            marktext: '龙',
                            intro: {
                                content: '当前有#枚九龙子.',
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊贰/audio:3',
                            trigger: {
                                source: 'damageBegin',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) < 0 && !player.hasSkill('jiu');
                            },
                            filter(event, player) {
                                if (player.storage.zmjiulongbahuan2 < 6) return false;
                                return event.player != player;
                            },
                            _priority: 10,
                            content() {
                                'step 0';
                                'step 1';
                                var num0 = Math.floor(player.storage.zmjiulongbahuan2 / 3);
                                game.playzm2('zmjiulongbahuan24');
                                trigger.num = num0;
                                ('step 2');
                                var num1 = player.storage.zmjiulongbahuan2;
                                player.storage.zmjiulongbahuan2 = 0;
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 2,
                            },
                        },
                        zxiaobaichong2: {
                            nobracket: true,
                            trigger: {
                                player: 'damageEnd',
                            },
                            silent: true,
                            filter(event, player) {
                                return event.source && event.source != player;
                            },
                            content() {
                                if (!player.storage.zxiaobaichong) {
                                    player.storage.zxiaobaichong = [];
                                }
                                player.storage.zxiaobaichong.add(trigger.source);
                            },
                            ai: {
                                maixie_defend: true,
                            },
                            forced: true,
                            popup: false,
                        },
                        zxiaobaichong3: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            silent: true,
                            content() {
                                delete player.storage.zxiaobaichong;
                            },
                            forced: true,
                            popup: false,
                        },
                        zxiaobaichong: {
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.num('h', 'sha');
                                },
                            },
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                if (!player.storage.zxiaobaichong) return false;
                                if (player.storage.zmt_np < 50) return false;
                                for (var i = 0; i < player.storage.zxiaobaichong.length; i++) {
                                    if (player.storage.zxiaobaichong[i].isAlive()) return true;
                                }
                                return false;
                            },
                            filterTarget(card, player, target) {
                                return player.storage.zxiaobaichong.includes(target);
                            },
                            selectTarget: -1,
                            line: 'thunder',
                            contentBefore() {
                                player.storage.zmt_np -= 50;
                                if (player.storage.zxiaobaichong.length >= 2) {
                                    game.playzm2(['zxiaobaichong4', 'zxiaobaichong2', 'zxiaobaichong3'].randomGet());
                                }
                            },
                            content() {
                                if (player.storage.zxiaobaichong.length == 1) {
                                    game.playzm2('zm xiaobaichangchong');
                                    game.mp422('zxiaobaichangchong');
                                    target.damage(2, 'thunder');
                                } else {
                                    target.damage('thunder');
                                }
                            },
                            ai: {
                                order: 9,
                                threaten: 0.7,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player, target, 'thunder');
                                    },
                                },
                            },
                            group: ['zmtrenxing', 'zmt_np', 'zmt_np1', 'zmt_np2', 'zxiaobaichong2', 'zxiaobaichong3', 'zxiaobaichong_1', 'zxiaobaichong_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'shaBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.player == player) return false;
                                        if (player.num('h', 'sha') == 0) return false;
                                        return player.hasCard(function (card) {
                                            return card.number >= event.card.number && card.name == 'sha';
                                        });
                                    },
                                    content() {
                                        'step 0';
                                        var tipstr = `是否对${get.translation(trigger.player)}使用一张点数不小于${get.translation(trigger.card.number)}的杀以取消此杀？`;
                                        player
                                            .chooseCard(tipstr, 'h', function (card) {
                                                return card.number >= trigger.card.number && card.name == 'sha';
                                            })
                                            .set('ai', function (card) {
                                                return -get.attitude(player, trigger.player) - get.value(card);
                                            }); //QQQ
                                        ('step 1');
                                        if (result.bool) {
                                            game.playzm2(['zm xunlei', 'zm xunlei', 'zm xunlei3'].randomGet());
                                            game.mp422('zxunlei');
                                            player.useCard(result.card || result.cards[0], trigger.player);
                                            trigger.untrigger();
                                            trigger.finish();
                                            event.finish();
                                        } else {
                                            event.finish();
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    silent: true,
                                    forced: true,
                                    filter(event, player) {
                                        return event.player != player;
                                    },
                                    content() {
                                        if (!player.storage.zxiaobaichong) {
                                            player.storage.zxiaobaichong = [];
                                        }
                                        player.storage.zxiaobaichong.add(trigger.player);
                                    },
                                    popup: false,
                                },
                            },
                        },
                        zmjinguangzhou: {
                            nobracket: true,
                            group: ['zmjinguangzhou_sha', 'zmjinguangzhou_shan'],
                            subSkill: {
                                sha: {
                                    name: '杀',
                                    audio: 'ext:综漫季刊贰/audio:1',
                                    enable: ['chooseToRespond', 'chooseToUse'],
                                    position: 'e',
                                    filterCard: true,
                                    viewAsFilter(player) {
                                        return player.countCards('h') == 0;
                                    },
                                    viewAs: {
                                        name: 'sha',
                                    },
                                    prompt: '将一张装备区内的牌当【杀】使用或打出',
                                    ai: {
                                        skillTagFilter(player) {
                                            if (!player.countCards('e')) return false;
                                        },
                                        respondSha: true,
                                        basic: {
                                            useful: [5, 1],
                                            value: [5, 1],
                                        },
                                        order() {
                                            if (_status.event.player.hasSkillTag('presha', true, null, true)) return 10;
                                            return 3;
                                        },
                                        result: {
                                            target(player, target) {
                                                if (
                                                    player.hasSkill('jiu') &&
                                                    !target.hasSkillTag('filterDamage', null, {
                                                        player: player,
                                                        card: { name: 'sha' },
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
                                        canLink(player, target, card) {
                                            if (!target.isLinked() && !player.hasSkill('wutiesuolian_skill')) return false;
                                            if (
                                                target.mayHaveShan() &&
                                                !player.hasSkillTag(
                                                    'directHit_ai',
                                                    true,
                                                    {
                                                        target: target,
                                                        card: card,
                                                    },
                                                    true
                                                )
                                            )
                                                return false;
                                            if (player.hasSkill('jueqing') || target.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                            return true;
                                        },
                                        yingbian(card, player, targets, viewer) {
                                            if (get.attitude(viewer, player) <= 0) return 0;
                                            var base = 0,
                                                hit = false;
                                            if (get.cardtag(card, 'yingbian_hit')) {
                                                hit = true;
                                                if (
                                                    targets.filter(function (target) {
                                                        return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
                                                    })
                                                )
                                                    base += 5;
                                            }
                                            if (get.cardtag(card, 'yingbian_all')) {
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                                                    })
                                                )
                                                    base += 5;
                                            }
                                            if (get.cardtag(card, 'yingbian_damage')) {
                                                if (
                                                    targets.filter(function (target) {
                                                        return (
                                                            get.attitude(player, target) < 0 &&
                                                            (hit ||
                                                                !target.mayHaveShan() ||
                                                                player.hasSkillTag(
                                                                    'directHit_ai',
                                                                    true,
                                                                    {
                                                                        target: target,
                                                                        card: card,
                                                                    },
                                                                    true
                                                                )) &&
                                                            !target.hasSkillTag('filterDamage', null, {
                                                                player: player,
                                                                card: card,
                                                                jiu: true,
                                                            })
                                                        );
                                                    })
                                                )
                                                    base += 5;
                                            }
                                            return base;
                                        },
                                    },
                                },
                                shan: {
                                    name: '闪',
                                    audio: 'ext:综漫季刊贰/audio:3',
                                    enable: ['chooseToRespond', 'chooseToUse'],
                                    position: 'e',
                                    filterCard: true,
                                    viewAsFilter(player) {
                                        return player.countCards('h') == 0;
                                    },
                                    viewAs: {
                                        name: 'shan',
                                    },
                                    prompt: '将一张装备区内的牌当【闪】使用或打出',
                                    ai: {
                                        respondShan: true,
                                        skillTagFilter(player) {
                                            if (!player.countCards('e')) return false;
                                        },
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.tag(card, 'respondShan') && current < 0) return 0.6;
                                            },
                                        },
                                        basic: {
                                            useful: [7, 2],
                                            value: [7, 2],
                                        },
                                        result: {
                                            player: 1,
                                        },
                                        order: 3,
                                    },
                                },
                            },
                        },
                        zmshenlingming: {
                            nobracket: true,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                return (event.card && event.card.name == 'sha' && player.hp == 1) || (event.card.name == 'sha' && player.countCards('h') == 0) || (event.card.name == 'sha' && player.countCards('j') >= 1);
                            },
                            logTarget: 'target',
                            content() {
                                player.link(false);
                                player.turnOver(false);
                                player.discard(player.getCards('j'));
                                trigger.baseDamage++;
                                if (!trigger.target.hasSkill('fengyin')) {
                                    trigger.target.addTempSkill('fengyin', 'shaAfter');
                                }
                            },
                        },
                        zmfenghouqimen: {
                            group: ['zmtgaodengliliang', 'zmtrenxing', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            init(player) {
                                player.storage.zmfenghouqimen = 0;
                                player.markSkill('zmfenghouqimen');
                            },
                            nobracket: true,
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return player.storage.zmt_np >= 60;
                            },
                            check(event, player) {
                                var num0 = player.countCards('h', { name: 'sha' });
                                if (num0 == 0 && player.hp > 2) return false;
                                var num = game.countPlayer(function (current) {
                                    return player.getEnemies().includes(current) && get.distance(player, current, 'attack') <= 1;
                                });
                                if (num == 0 && player.hp > 2) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget([1, Infinity], '选择攻击范围内任意名其他角色', function (card, player, target) {
                                        return player != target && get.distance(player, target, 'attack') <= 1;
                                    })
                                    .set('ai', function (target) {
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                player.storage.zmt_np -= 60;
                                game.playzm2(['zmfenghouqimen1'].randomGet());
                                ui.backgroundMusic.src = 'extension/综漫季刊贰/audio/背景音乐风后奇门.mp3';
                                game.mp422('zmfenghouqimen');
                                player.addSkill('zmfenghouqimen_1');
                                player.addSkill('zmfenghouqimen_2');
                                player.addSkill('zmfenghouqimen_3');
                                player.addSkill('zmfenghouqimen_4');
                                player.addSkill('bagua_skill');
                                if (result.bool) {
                                    player.line(result.targets);
                                    event.targets = result.targets;
                                    event.num2 = 0;
                                }
                                ('step 2');
                                if (result.bool && event.num2 < event.targets.length) {
                                    var list = { basic: [], equip: [], trick: [], delay: [] };
                                    for (var i = 0; i < lib.inpile.length; i++) {
                                        var name = lib.inpile[i];
                                        var info = lib.card[name];
                                        if (info.autoViewAs) continue;
                                        if (!list[info.type]) {
                                            list[info.type] = [];
                                        }
                                        list[info.type].push(lib.inpile[i]);
                                    }
                                    list.delay.sort(lib.sort.name);
                                    event.card = game.createCard(list.delay.randomGet());
                                    event.targets[event.num2].addJudge(event.card);
                                    event.targets[event.num2].$draw(event.card);
                                    event.num2++;
                                    event.redo();
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    usable: 1,
                                    forced: true,
                                    silent: true,
                                    popup: false,
                                    content() {
                                        'step 0';
                                        player.storage.zmfenghouqimen += 1;
                                        player.markSkill('zmfenghouqimen');
                                        ('step 1');
                                        if (player.storage.zmfenghouqimen >= 2) {
                                            player.storage.zmfenghouqimen = 0;
                                            player.removeSkill('zmfenghouqimen_1');
                                            player.removeSkill('zmfenghouqimen_2');
                                            player.removeSkill('zmfenghouqimen_3');
                                            player.removeSkill('zmfenghouqimen_4');
                                            player.removeSkill('bagua_skill');
                                        }
                                    },
                                },
                                2: {
                                    audio: 'ext:综漫季刊贰/audio:1',
                                    trigger: {
                                        player: 'compare',
                                        target: 'compare',
                                    },
                                    forced: true,
                                    content() {
                                        if (player == trigger.player) {
                                            trigger.num1 = Infinity;
                                            trigger.num2 = 0;
                                        } else {
                                            trigger.num1 = 0;
                                            trigger.num2 = Infinity;
                                        }
                                    },
                                },
                                3: {
                                    audio: 'ext:综漫季刊贰/audio:2',
                                    trigger: {
                                        player: 'judgeBegin',
                                    },
                                    forced: true,
                                    content() {
                                        var panding = ui.cardPile.firstChild;
                                        var enumtc = panding;
                                        var getValue = trigger.judge(panding);
                                        var suitList = ['spade', 'heart', 'club', 'diamond'];
                                        var nameList = ['sha', 'tao', 'wuxie', 'shan'];
                                        for (var n = 0; n < suitList.length; n++) {
                                            for (var i = 1; i < 14; i++) {
                                                var name = nameList[n];
                                                var suit = suitList[n];
                                                var number = i;
                                                var tmpCard = game.createCard(name, suit, number, null);
                                                var keyValue = trigger.judge(tmpCard);
                                                if (keyValue > getValue) {
                                                    getValue = keyValue;
                                                    enumtc = tmpCard;
                                                }
                                            }
                                        }
                                        if (panding != enumtc) {
                                            ui.cardPile.removeChild(panding);
                                            ui.cardPile.insertBefore(enumtc, ui.cardPile.firstChild);
                                        }
                                    },
                                },
                                4: {
                                    audio: 'ext:综漫季刊贰/audio:1',
                                    enable: ['chooseToUse', 'chooseToRespond'],
                                    usable: 1,
                                    filterCard() {
                                        return true;
                                    },
                                    selectCard: 0,
                                    viewAsFilter(player) {
                                        return player.countCards('h') >= 0;
                                    },
                                    viewAs: {
                                        name: 'wuxie',
                                    },
                                    prompt: '是否视为使用一张【无懈可击】？',
                                    ai: {
                                        threaten: 0.8,
                                        basic: {
                                            useful: [6, 4],
                                            value: [6, 4],
                                        },
                                        result: {
                                            player: 1,
                                        },
                                        expose: 0.2,
                                    },
                                },
                            },
                        },
                        zmluanjintuo: {
                            nobracket: true,
                            trigger: {
                                player: 'useCardToBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'wuxie';
                            },
                            init(player) {
                                player.storage.zmluanjintuo = 0;
                            },
                            content() {
                                player.storage.zmluanjintuo++;
                                if (player.storage.zmluanjintuo % 2 == 0) {
                                    game.playzm2(['zmluanjintuo1', 'zmluanjintuo2'].randomGet());
                                    game.mp422('zluanjintuo');
                                    player.draw();
                                    player.phaseUse();
                                }
                            },
                        },
                        ztaijijin: {
                            nobracket: true,
                            group: ['ztaijijin_sha', 'ztaijijin_shan', 'ztaijijin_du'],
                            subSkill: {
                                sha: {
                                    audio: 'ext:综漫季刊贰/audio:2',
                                    enable: ['chooseToUse', 'chooseToRespond'],
                                    filterCard: {
                                        name: 'shan',
                                    },
                                    viewAs: {
                                        name: 'sha',
                                        suit: 'heart',
                                        number: 2,
                                        cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: { uncheck: [] }, suit: 'heart', number: 8, name: 'shan', original: 'h', _transform: 'translateX(1072px)', _mouseentercreated: false, clone: { name: 'shan', suit: 'heart', number: 8, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, timeout: 6282 }, timeout: 6136 }],
                                    },
                                    viewAsFilter(player) {
                                        if (!player.num('h', 'shan')) return false;
                                    },
                                    prompt: '将一张【闪】当【杀】使用或打出',
                                    check() {
                                        return 1;
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.tag(card, 'respondSha') && current < 0) return 0.6;
                                            },
                                        },
                                        respondSha: true,
                                        skillTagFilter(player) {
                                            if (!player.num('h', 'shan')) return false;
                                        },
                                        order: 3.1,
                                        useful: -1,
                                        value: -1,
                                        basic: {
                                            useful: [5, 1],
                                            value: [5, 1],
                                        },
                                        result: {
                                            target(player, target) {
                                                if (player.hasSkill('jiu') && !target.num('e', 'baiyin')) {
                                                    if (get.attitude(player, target) > 0) {
                                                        return -6;
                                                    } else {
                                                        return -3;
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
                                        canLink(player, target, card) {
                                            if (!target.isLinked() && !player.hasSkill('wutiesuolian_skill')) return false;
                                            if (
                                                target.mayHaveShan() &&
                                                !player.hasSkillTag(
                                                    'directHit_ai',
                                                    true,
                                                    {
                                                        target: target,
                                                        card: card,
                                                    },
                                                    true
                                                )
                                            )
                                                return false;
                                            if (player.hasSkill('jueqing') || target.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                            return true;
                                        },
                                        yingbian(card, player, targets, viewer) {
                                            if (get.attitude(viewer, player) <= 0) return 0;
                                            var base = 0,
                                                hit = false;
                                            if (get.cardtag(card, 'yingbian_hit')) {
                                                hit = true;
                                                if (
                                                    targets.filter(function (target) {
                                                        return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
                                                    })
                                                )
                                                    base += 5;
                                            }
                                            if (get.cardtag(card, 'yingbian_all')) {
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                                                    })
                                                )
                                                    base += 5;
                                            }
                                            if (get.cardtag(card, 'yingbian_damage')) {
                                                if (
                                                    targets.filter(function (target) {
                                                        return (
                                                            get.attitude(player, target) < 0 &&
                                                            (hit ||
                                                                !target.mayHaveShan() ||
                                                                player.hasSkillTag(
                                                                    'directHit_ai',
                                                                    true,
                                                                    {
                                                                        target: target,
                                                                        card: card,
                                                                    },
                                                                    true
                                                                )) &&
                                                            !target.hasSkillTag('filterDamage', null, {
                                                                player: player,
                                                                card: card,
                                                                jiu: true,
                                                            })
                                                        );
                                                    })
                                                )
                                                    base += 5;
                                            }
                                            return base;
                                        },
                                    },
                                },
                                shan: {
                                    audio: 'ext:综漫季刊贰/audio:2',
                                    enable: ['chooseToUse', 'chooseToRespond'],
                                    filterCard: {
                                        name: 'sha',
                                    },
                                    viewAs: {
                                        name: 'shan',
                                        suit: 'spade',
                                        number: 4,
                                    },
                                    prompt: '将一张【杀】当【闪】使用或打出',
                                    check() {
                                        return 1;
                                    },
                                    viewAsFilter(player) {
                                        if (!player.num('h', 'sha')) return false;
                                    },
                                    ai: {
                                        respondShan: true,
                                        skillTagFilter(player) {
                                            if (!player.num('h', 'sha')) return false;
                                        },
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.tag(card, 'respondShan') && current < 0) return 0.6;
                                            },
                                        },
                                        order: 4,
                                        useful: -1,
                                        value: -1,
                                        basic: {
                                            useful: [7, 2],
                                            value: [7, 2],
                                        },
                                        result: {
                                            player: 1,
                                        },
                                    },
                                },
                                du: {
                                    audio: 'ext:综漫季刊贰/audio:2',
                                    enable: 'phaseUse',
                                    filterCard: {
                                        name: 'du',
                                    },
                                    viewAs: {
                                        name: 'taoyuan',
                                    },
                                    prompt: '将一张毒当桃园结义使用',
                                    check() {
                                        return 1;
                                    },
                                    viewAsFilter(player) {
                                        if (!player.num('h', 'du')) return false;
                                    },
                                    ai: {
                                        basic: {
                                            order: 9,
                                            useful: [3, 1],
                                            value: 0,
                                        },
                                        result: {
                                            target(player, target) {
                                                return target.hp < target.maxHp ? 2 : 0;
                                            },
                                        },
                                        tag: {
                                            recover: 0.5,
                                            multitarget: 1,
                                            save: 1,
                                        },
                                        order() {
                                            return get.order({ name: 'sha' }) + 0.2;
                                        },
                                    },
                                },
                            },
                        },
                        zmminggu: {
                            group: ['zmminggu_1', 'zmtrenxing', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            nobracket: true,
                            audio: 'ext:综漫季刊贰/audio:4',
                            trigger: {
                                player: 'damageBegin',
                            },
                            filter(event, player) {
                                if (!event.source) return false;
                                if (event.source == player) return false;
                                return event.card && player.storage.zmt_np >= 20;
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 20;
                                event.suit = trigger.cards.suit;
                                trigger.source.gain(trigger.cards, 'gain2');
                                ('step 1');
                                for (var i = 0; i < trigger.source.getCards('h').length; i++) {
                                    game.broadcastAll(function (card) {
                                        if (card.suit == event.suit) card.init([card.suit, card.number, 'du']);
                                    }, trigger.source.getCards('h')[i]);
                                }
                            },
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊贰/audio:2',
                                    trigger: {
                                        global: ['loseHpBefore', 'useCardBefore'],
                                    },
                                    forced: true,
                                    filter(event, player, onrewrite) {
                                        if (event.player == player) return false;
                                        if (onrewrite == 'loseHpBefore') {
                                            return event.type == 'du' && get.distance(player, event.player, 'attack') <= 1 && player.countCards('he', { color: 'black' });
                                        }
                                    },
                                    content() {
                                        'step 0';
                                        var next = player.chooseToDiscard([1, 2], 'he', `是否弃置至多2张黑色牌令${get.translation(trigger.player)}额外流失等量的体力？`, function (card, player) {
                                            return get.color(card) == 'black';
                                        });
                                        next.ai = function (card) {
                                            var att = get.attitude(player, trigger.player);
                                            if (att < 0) {
                                                return 9 - get.value(card);
                                            }
                                            return -1;
                                        };
                                        ('step 1');
                                        if (result.bool) {
                                            var num = result.cards.length;
                                            trigger.player.loseHp(num);
                                        }
                                    },
                                },
                            },
                        },
                        zmshenggu: {
                            nobracket: true,
                            mod: {
                                cardname(card) {
                                    if (card.name == 'du') return 'wuzhong';
                                },
                            },
                        },
                        zmaweishibashi: {
                            group: ['zmaweishibashi_2', 'zmtrenxing', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            nobracket: true,
                            trigger: {
                                player: 'useCard',
                            },
                            usable: 1,
                            forced: true,
                            filter(event, player) {
                                return event.card;
                            },
                            content() {
                                'step 0';
                                player.storage.zmaweishibashi_1 = [];
                                player.storage.zmaweishibashi_1.add(get.color(trigger.card, player));
                                player.addTempSkill('zmaweishibashi_1');
                            },
                            subSkill: {
                                1: {
                                    mod: {
                                        cardUsable(card, player) {
                                            var cards = player.storage.zmaweishibashi_1;
                                            if (Array.isArray(cards))
                                                for (var i of cards) {
                                                    if (i == get.color(card)) return Infinity;
                                                }
                                        },
                                    },
                                },
                                2: {
                                    nobracket: true,
                                    audio: 'ext:综漫季刊贰/audio:5',
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (player.storage.zmt_np < 30) return false;
                                        return player.hasCard(function (card) {
                                            return card.number > event.card.number && event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && event.parent.name != '_lianhuan' && event.parent.name != '_lianhuan2' && player.countCards('h') > 0;
                                        });
                                    },
                                    content() {
                                        'step 0';
                                        var next = player.chooseToDiscard(get.prompt('zmaweishibashi_2', trigger.player), function (card, player) {
                                            return card.number > trigger.card.number;
                                        });
                                        next.ai = function (card) {
                                            if (get.attitude(player, trigger.player) < 0) {
                                                return 9 - get.value(card);
                                            }
                                            return -1;
                                        };
                                        ('step 1');
                                        if (result.bool) {
                                            player.storage.zmt_np -= 30;
                                            game.playzm2('zmfengbaobao');
                                            game.mp422('zmfengbaobao');
                                            trigger.num++;
                                        }
                                    },
                                    ai: {
                                        threaten: 1.3,
                                    },
                                },
                            },
                        },
                        zmguizhen: {
                            nobracket: true,
                            audio: 'ext:综漫季刊贰/audio:9',
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            check(event, player) {
                                var cards = player.getCards('h');
                                if (cards.length > 1) {
                                    if (Array.isArray(cards))
                                        for (var i of cards) {
                                            if (i.name == 'shan' || i.name == 'tao') return false;
                                        }
                                }
                                return true;
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                var maxArray = [];
                                for (var i = 0; i < player.getCards('h').length; i++) {
                                    if (maxArray.length == 0) {
                                        maxArray.push(player.getCards('h')[i]);
                                    } else {
                                        var h = maxArray[0];
                                        if (h.number < get.number(player.getCards('h')[i])) {
                                            maxArray = [player.getCards('h')[i]];
                                            event.num = get.number(player.getCards('h')[i]);
                                        } else if (h.number == get.number(player.getCards('h')[i])) {
                                            maxArray.push(player.getCards('h')[i]);
                                            event.num = get.number(player.getCards('h')[i]);
                                        }
                                    }
                                }
                                event.num2 = player.countCards('h');
                                ('step 1');
                                // player.discard(maxArray);
                                for (var i = 0; i < player.getCards('h').length; i++) {
                                    game.broadcastAll(function (card) {
                                        if (card.number < event.num) player.discard(card);
                                    }, player.getCards('h')[i]);
                                }
                                player.draw(event.num2);
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (card.name == 'sha') return [1, 0.5];
                                    },
                                },
                            },
                        },
                        zmxiutanz: {
                            nobracket: true,
                            audio: 'ext:综漫季刊贰/audio:1',
                            trigger: {
                                player: 'judgeBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return ui.cardPile.childNodes.length > 1;
                            },
                            check() {
                                return false;
                            },
                            content() {
                                'step 0';
                                var str = '';
                                if (trigger.card) str = get.translation(trigger.card.viewAs || trigger.card.name);
                                else if (trigger.skill) str = get.translation(trigger.skill);
                                else str = get.translation(trigger.parent.name);
                                var cards = get.cards(2);
                                event.cardss = cards;
                                var att = get.attitude(player, trigger.player);
                                var delta = trigger.judge(event.cardss[1]) - trigger.judge(event.cardss[0]);
                                player.chooseControl('调换顺序', 'cancel2', ui.create.dialog(`是否${get.translation(trigger.player)}的${str}判定`, event.cardss, 'hidden')).ai = function () {
                                    if (att * delta > 0) return '调换顺序';
                                    else return 'cancel2';
                                };
                                ('step 1');
                                if (result.control == '调换顺序') {
                                    ui.cardPile.insertBefore(event.cardss[0], ui.cardPile.firstChild);
                                    ui.cardPile.insertBefore(event.cardss[1], ui.cardPile.firstChild);
                                    game.log(player, '#y调换了牌堆顶两张牌的顺序');
                                } else {
                                    ui.cardPile.insertBefore(event.cardss[1], ui.cardPile.firstChild);
                                    ui.cardPile.insertBefore(event.cardss[0], ui.cardPile.firstChild);
                                    game.log(player, '#y观看牌堆顶两张牌');
                                }
                            },
                            ai: {
                                expose: 0.1,
                                tag: {
                                    rejudge: 0.5,
                                },
                            },
                        },
                        zmshuizhihuxi: {
                            nobracket: true,
                            trigger: {
                                player: 'shaMiss',
                            },
                            forced: true,
                            filter(event, player) {
                                return _status.currentPhase == player;
                            },
                            content() {
                                player.getStat().card.sha--;
                            },
                            group: ['zmtmoxing', 'zmshuizhihuxi_1', 'zmshuizhihuxi_2', 'zmtrenxing', 'zmt_np', 'zmt_np1', 'zmt_np2', 'zmshuizhihuxi_3', 'zmshuizhihuxi_4'],
                            subSkill: {
                                1: {
                                    enable: ['chooseToUse', 'chooseToRespond'],
                                    filterCard: {
                                        name: 'sha',
                                    },
                                    viewAs: {
                                        name: 'shan',
                                        suit: 'spade',
                                        number: 4,
                                    },
                                    prompt: '将一张【杀】当【闪】使用或打出',
                                    check() {
                                        return 1;
                                    },
                                    viewAsFilter(player) {
                                        if (_status.currentPhase == player) return false;
                                        if (!player.num('h', 'sha')) return false;
                                    },
                                    ai: {
                                        respondShan: true,
                                        skillTagFilter(player) {
                                            if (!player.num('h', 'sha')) return false;
                                        },
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.tag(card, 'respondShan') && current < 0) return 0.6;
                                            },
                                        },
                                        order: 4,
                                        useful: -1,
                                        value: -1,
                                        basic: {
                                            useful: [7, 2],
                                            value: [7, 2],
                                        },
                                        result: {
                                            player: 1,
                                        },
                                    },
                                },
                                2: {
                                    audio: 'ext:综漫季刊贰/audio:4',
                                    trigger: {
                                        player: ['useCard', 'respond'],
                                    },
                                    forced: true,
                                    init(player) {
                                        player.storage.zmshuizhihuxi_2 = 0;
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha';
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmshuizhihuxi_2++;
                                        ('step 1');
                                        var num1 = player.storage.zmshuizhihuxi_2;
                                        var num2 = player.storage.zmshuizhihuxi_3;
                                        var num = player.storage.zmshuizhihuxi_3 + player.storage.zmshuizhihuxi_2;
                                        if (num >= 2 && num1 > 0 && num2 > 0) {
                                            if (num1 > num2) {
                                                if (num2 > player.hp) {
                                                    player.draw(Math.min(player.hp, 20));
                                                } else {
                                                    player.draw(num2);
                                                }
                                            } else {
                                                if (num1 > player.hp) {
                                                    player.draw(Math.min(player.hp, 20));
                                                } else {
                                                    player.draw(num1);
                                                }
                                            }
                                        }
                                    },
                                },
                                3: {
                                    audio: 'ext:综漫季刊贰/audio:5',
                                    trigger: {
                                        player: ['useCard', 'respond'],
                                    },
                                    forced: true,
                                    init(player) {
                                        player.storage.zmshuizhihuxi_3 = 0;
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'shan';
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmshuizhihuxi_3++;
                                        ('step 1');
                                        var num1 = player.storage.zmshuizhihuxi_2;
                                        var num2 = player.storage.zmshuizhihuxi_3;
                                        var num = player.storage.zmshuizhihuxi_3 + player.storage.zmshuizhihuxi_2;
                                        if (num >= 2 && num1 > 0 && num2 > 0) {
                                            if (num1 > num2) {
                                                if (num2 > player.hp) {
                                                    player.draw(Math.min(player.hp, 20));
                                                } else {
                                                    player.draw(num2);
                                                }
                                            } else {
                                                if (num1 > player.hp) {
                                                    player.draw(Math.min(player.hp, 20));
                                                } else {
                                                    player.draw(num1);
                                                }
                                            }
                                        }
                                    },
                                },
                                4: {
                                    audio: 'ext:综漫季刊贰/audio:2',
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        return game.roundNumber % 2 != 0 && event.num > 0;
                                    },
                                    forced: true,
                                    content() {
                                        player.storage.zmshuizhihuxi_3 = 0;
                                        player.storage.zmshuizhihuxi_2 = 0;
                                    },
                                    ai: {
                                        expose: 0.4,
                                    },
                                },
                            },
                        },
                        zmxueguishubaoxue: {
                            nobracket: true,
                            trigger: {
                                player: 'damageEnd',
                            },
                            check(event, player) {
                                if (player.countCards('h', { name: 'sha' }) || player.countCards('h', { name: 'shan' }) || event.source.hp == 1 || player.hp <= 1) {
                                    return get.attitude(player, event.source) <= 0;
                                } else {
                                    return false;
                                }
                            },
                            filter(event, player) {
                                if (player.storage.zmt_np < 50) return false;
                                return game.roundNumber % 2 == 0 && event.source != undefined && event.source != player && get.distance(player, event.source) <= 1;
                            },
                            logTarget: 'source',
                            content() {
                                'step 0';
                                player.storage.zmt_np = 0;
                                player.recover();
                                game.playzm2('zmnidouzi');
                                game.mp422('zmnidouzi');
                                trigger.source.damage(1, 'fire');
                                ('step 1');
                                if (player.countCards('h', { name: 'sha' }) || player.countCards('h', { name: 'shan' })) {
                                    game.playzm2('zmnidouzi2');
                                    game.mp422('zmnidouzi2');
                                    var num9 = [1, 2].randomGet();
                                    if (trigger.source.hasSkill('zmtmoxing') || trigger.source.hasSkill('zmtsiling')) {
                                        trigger.source.damage(2, 'fire');
                                    } else {
                                        trigger.source.damage(num9, 'fire');
                                    }
                                    var sha = player.getCards('h', 'sha');
                                    player.discard(sha);
                                    var shan = player.getCards('h', 'shan');
                                    player.discard(shan);
                                }
                            },
                        },
                        zmyanzhizhu: {
                            group: ['zmtrenxing', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            nobracket: true,
                            audio: 'ext:综漫季刊贰/audio:5',
                            trigger: {
                                global: ['chooseToUseBegin'],
                            },
                            filter(event, player) {
                                if (event.player == player) return false;
                                if (event.responded) return false;
                                if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
                                if (event.name == 'chooseToRespond' && !lib.filter.cardRespondable({ name: 'shan' }, player, event)) return false;
                                var sour = event.parent.player;
                                if (!sour || sour == player) return false;
                                return player.canCompare(sour) && !player.hasSkill('zmyanzhizhu_temp');
                            },
                            check(event, player) {
                                if (event.player.hp > 3) return false;
                                var att = get.attitude(player, event.player);
                                if (att <= 0) return false;
                                var hs = player.getCards('h');
                                for (var i = 0; i < hs.length; i++) {
                                    if (hs[i].number >= 8 && get.value(hs[i]) < 8) {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            logTarget: 'player',
                            prompt2(event, player) {
                                var sp = event.parent.player;
                                return `是否与${get.translation(sp)}拼点？若你赢,则你收回拼点牌并视为${get.translation(event.player)}使用了一张【闪】.`;
                            },
                            content() {
                                'step 0';
                                if (!player.hasSkill('zmyanzhizhu_temp')) {
                                    player.addTempSkill('zmyanzhizhu_temp', 'roundStart');
                                }
                                var sp = trigger.parent.player;
                                player.chooseToCompare(sp);
                                ('step 1');
                                if (result.bool) {
                                    game.playzm2(['zmyanzhizhu01', 'zmyanzhizhu02', 'zmyanzhizhu03'].randomGet());
                                    var sp = trigger.parent.player;
                                    trigger.untrigger();
                                    trigger.responded = true;
                                    trigger.result = { bool: true, card: { name: 'shan' } };
                                } else {
                                    trigger.player.gain([result.player]);
                                    trigger.player.$gain2([result.player]);
                                }
                            },
                            ai: {
                                respondShan: true,
                            },
                            subSkill: {
                                temp: {},
                            },
                        },
                        zmyanzhihuxi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊贰/audio:6',
                            enable: 'phaseUse',
                            viewAs: {
                                name: 'sha',
                                nature: 'fire',
                            },
                            position: 'h',
                            viewAsFilter(player) {
                                return player.countCards('h', { type: ['trick', 'delay'] }) > 0;
                            },
                            filterCard(card) {
                                return get.type(card) == 'trick' || get.type(card) == 'delay';
                            },
                            check(card) {
                                return 7 - get.value(card);
                            },
                            ai: {
                                basic: {
                                    useful: [6, 4],
                                    value: [6, 4],
                                },
                                result: {
                                    player: 1,
                                    target(player, target) {
                                        if (player.hasSkill('jiu') && !target.getEquip('baiyin')) {
                                            if (get.attitude(player, target) > 0) {
                                                return -6;
                                            } else {
                                                return -3;
                                            }
                                        }
                                        return -1.5;
                                    },
                                },
                                expose: 0.2,
                                order() {
                                    if (_status.event.player.hasSkillTag('presha', true, null, true)) return 10;
                                    return 3;
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
                                canLink(player, target, card) {
                                    if (!target.isLinked() && !player.hasSkill('wutiesuolian_skill')) return false;
                                    if (
                                        target.mayHaveShan() &&
                                        !player.hasSkillTag(
                                            'directHit_ai',
                                            true,
                                            {
                                                target: target,
                                                card: card,
                                            },
                                            true
                                        )
                                    )
                                        return false;
                                    if (player.hasSkill('jueqing') || target.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                    return true;
                                },
                                yingbian(card, player, targets, viewer) {
                                    if (get.attitude(viewer, player) <= 0) return 0;
                                    var base = 0,
                                        hit = false;
                                    if (get.cardtag(card, 'yingbian_hit')) {
                                        hit = true;
                                        if (
                                            targets.filter(function (target) {
                                                return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
                                            })
                                        )
                                            base += 5;
                                    }
                                    if (get.cardtag(card, 'yingbian_all')) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                                            })
                                        )
                                            base += 5;
                                    }
                                    if (get.cardtag(card, 'yingbian_damage')) {
                                        if (
                                            targets.filter(function (target) {
                                                return (
                                                    get.attitude(player, target) < 0 &&
                                                    (hit ||
                                                        !target.mayHaveShan() ||
                                                        player.hasSkillTag(
                                                            'directHit_ai',
                                                            true,
                                                            {
                                                                target: target,
                                                                card: card,
                                                            },
                                                            true
                                                        )) &&
                                                    !target.hasSkillTag('filterDamage', null, {
                                                        player: player,
                                                        card: card,
                                                        jiu: true,
                                                    })
                                                );
                                            })
                                        )
                                            base += 5;
                                    }
                                    return base;
                                },
                            },
                            group: ['zmyanzhihuxi_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'shaBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.target != player && event.target.getEquip(2) && event.card.name == 'sha' && event.card.nature == 'fire';
                                    },
                                    content() {
                                        trigger.target.addTempSkill('zmyanzhihuxi_2', { player: 'phaseEnd' });
                                        trigger.target.addTempSkill('tengjia1', { player: 'phaseEnd' });
                                        trigger.target.addTempSkill('tengjia3', { player: 'phaseEnd' });
                                        trigger.target.addTempSkill('tengjia2', { player: 'phaseEnd' });
                                        trigger.target.discard(trigger.target.getCards('e', { subtype: 'equip2' }));
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'phaseBegin',
                                    },
                                    forced: true,
                                    content() {
                                        player.removeSkill('zmyanzhihuxi_2');
                                        player.removeSkill('tengjia1');
                                        player.removeSkill('tengjia2');
                                        player.removeSkill('tengjia3');
                                    },
                                },
                            },
                        },
                        zmjiuzhixing: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.storage.zmt_np >= 60 && player.countCards('h', { type: ['trick', 'delay', 'equip'] }) == 0 && player.countCards('h', { type: ['basic'] }) >= 1;
                            },
                            filterTarget(card, player, target) {
                                return target != player && player.canUse({ name: 'sha' }, target);
                            },
                            selectTarget() {
                                return [1, 1];
                            },
                            multitarget: true,
                            multiline: true,
                            line: 'fire',
                            content() {
                                'step 0';
                                player.storage.zmt_np = 0;
                                game.playzm2('zmlianyu');
                                game.mp422('zmlianyu');
                                target.damage(2, 'fire');
                                ('step 1');
                                var evt = _status.event.getParent('phase');
                                if (evt && evt.name == 'phase') {
                                    //QQQ
                                    evt.finish();
                                }
                            },
                            ai: {
                                expose: 0.2,
                                damage: true,
                                threaten: 1.5,
                                order: 6,
                                result: {
                                    target(player, target) {
                                        var eff = get.damageEffect(target, player, target, 'fire');
                                        if (target.isLinked()) {
                                            return eff * 2;
                                        } else {
                                            return eff / 2;
                                        }
                                    },
                                },
                            },
                        },
                        zmrongyuefeiren: {
                            nobracket: true,
                            trigger: {
                                player: 'shaBefore',
                            },
                            filter(event, player) {
                                if (player.storage.zmt_np < 15) return false;
                                return player.countCards('h');
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard(1, 'h').set('ai', function (card) {
                                    var player = _status.event.player;
                                    if (get.damageEffect(trigger.targets[0], player, player, 'fire') <= 0) return 0;
                                    return 6 - get.value(card);
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.storage.zmt_np -= 15;
                                    var t = Math.random();
                                    if (t <= 0.5) {
                                        game.playzm2('zmyouaier1');
                                        game.mp422('zmyouaier1');
                                    }
                                    if (t > 0.5) {
                                        game.playzm2('zmyouaier2');
                                        game.mp422('zmyouaier2');
                                    }
                                    player.addTempSkill('zmrongyuefeiren_1', { player: 'shaAfter' });
                                }
                            },
                            group: ['zmrongyuefeiren_2', 'zmtyeshou', 'zmtrenxing', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊贰/audio:3',
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha';
                                    },
                                    content() {
                                        player.line(trigger.player, 'fire');
                                        trigger.player.damage('fire');
                                        trigger.player.randomDiscard(2, 'he', true);
                                    },
                                },
                                2: {
                                    trigger: {
                                        target: 'shaMiss',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countCards('h', { name: 'sha' }) >= 1;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.target.chooseToUse(`是否对${get.translation(trigger.player)}使用一张【杀】？`, { name: 'sha' }, -1, trigger.player);
                                        ('step 1');
                                        if (result.bool) {
                                            game.playzm2(['zmrongyuefeiren_21', 'zmrongyuefeiren_22'].randomGet());
                                        }
                                    },
                                },
                            },
                        },
                        zmyetianguang: {
                            nobracket: true,
                            audio: 'ext:综漫季刊贰/audio:3',
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                if (player.storage.zmt_np < 30) return false;
                                return event.player != player;
                            },
                            logTarget: 'player',
                            check(event, player) {
                                if (get.attitude(player, event.player) < 4) return false;
                                if (event.player.countCards('h') >= event.player.hp + 3) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 30;
                                player.draw(3);
                                ('step 1');
                                player.chooseCard(2, 'he', true, `交给${get.translation(trigger.player)}两张牌`).set('ai', function (card) {
                                    if (ui.selected.cards.length && card.name == ui.selected.cards[0].name) return -1;
                                    if (get.tag(card, 'damage')) return 1;
                                    if (get.type(card) == 'equip') return 1;
                                    return 0;
                                });
                                ('step 2');
                                trigger.player.gain(result.cards, player, 'giveAuto');
                            },
                            ai: {
                                threaten: 1.1,
                                expose: 0.3,
                            },
                        },
                        zmruizhizhiguang: {
                            nobracket: true,
                            audio: 'ext:综漫季刊贰/audio:4',
                            trigger: {
                                player: 'phaseZhunbeiBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return !game.hasPlayer(function (current) {
                                    return current.hasSkill('zmruizhizhiguang_targeted');
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('zmruizhizhiguang'), function (card, player, target) {
                                        return target != player && !target.hasSkill('zmruizhizhiguang_target');
                                    })
                                    .set('ai', function (target) {
                                        var num = target.countCards('he') >= 2 ? 2 : 0;
                                        num += get.threaten(target);
                                        if (get.distance(_status.event.player, target) <= 2) num * 2;
                                        return get.attitude(_status.event.player, target) - num;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.line(target, { color: [0, 221, 102] });
                                    game.mp422('zmaweisibulong');
                                    player.removeSkill('zmruizhizhiguang_target');
                                    player.storage.zmruizhizhiguang_target = target;
                                    game.log(target, '被记录为〖亚当〗');
                                    target.addSkill('zmruizhizhiguang_targeted');
                                }
                            },
                            ai: {
                                threaten: 4,
                            },
                            group: ['zmruizhizhiguang_1', 'zmtrenxing', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊贰/audio:7',
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return game.hasPlayer(function (current) {
                                            return (current.hasSkill('zmruizhizhiguang_targeted') && get.type(event.card) == 'equip') || (current.hasSkill('zmruizhizhiguang_targeted') && get.type(event.card) == 'basic');
                                        });
                                    },
                                    content() {
                                        var yd = game.findPlayer(function (current) {
                                            return current.hasSkill('zmruizhizhiguang_targeted');
                                        });
                                        var mubiao = yd;
                                        if (get.type(trigger.card) == 'equip') {
                                            yd.changeHujia();
                                        } else {
                                            yd.draw();
                                        }
                                    },
                                },
                                targeted: {
                                    trigger: {
                                        global: 'phaseDiscardBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.hasSkill('zmruizhizhiguang_targeted');
                                    },
                                    content() {
                                        trigger.untrigger();
                                        trigger.finish();
                                    },
                                    charlotte: true,
                                },
                            },
                        },
                        zmshumishu: {
                            audio: 'ext:综漫季刊贰/audio:5',
                            nobracket: true,
                            trigger: {
                                global: ['damageEnd'],
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) > 0;
                            },
                            filter(event, player) {
                                if (player.storage.zmt_np < 40) return false;
                                return (event.player.hasSkill('zmruizhizhiguang_targeted') && event.player.isAlive()) || (event.player == player && player.isAlive());
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 40;
                                player.tempHide();
                                ('step 1');
                                var yd = game.findPlayer(function (current) {
                                    return current.hasSkill('zmruizhizhiguang_targeted');
                                });
                                var mubiao = yd;
                                player.line(yd, { color: [0, 221, 102] });
                                yd.phase('nodelay');
                            },
                        },
                        zmshenshengjili: {
                            group: ['zmtrenxing', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            nobracket: true,
                            trigger: {
                                global: ['loseEnd', 'dying'],
                            },
                            logTarget: 'player',
                            check(event, player) {
                                return get.attitude(player, event.player) > 0;
                            },
                            filter(event, player, onrewrite) {
                                if (player.storage.zmt_np < 25) return false;
                                if (onrewrite == 'dying') {
                                    return player.countCards('h') > 0 && event.player.maxHp > event.player.hp;
                                }
                                if (onrewrite == 'loseEnd') {
                                    return event.player.isAlive() && player.countCards('h') && event.cards && event.cards.length >= 2 && event.player.maxHp > event.player.hp;
                                }
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 25;
                                event.num = trigger.player.countCards('h');
                                if (trigger.player == player) {
                                    game.playzm2(['zmshenshengjili21', 'zmshenshengjili22', 'zmshenshengjili23', 'zmshenshengjili15'].randomGet());
                                    player.recover();
                                    event.finish();
                                } else {
                                    game.playzm2(['zmshenshengjili11', 'zmshenshengjili12', 'zmshenshengjili13', 'zmshenshengjili14', 'zmshenshengjili15', 'zmshenshengjili22'].randomGet());
                                    player.chooseCard(1, 'h', true);
                                }
                                ('step 1');
                                if (result.bool) {
                                    player.$give(result.cards[0], trigger.player);
                                    player.line(trigger.player);
                                    trigger.player.gain(result.cards[0], player);
                                    if (event.num > 0) {
                                        trigger.player.chooseCard(1, 'h', true);
                                    } else {
                                        player.recover();
                                        event.finish();
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    trigger.player.recover();
                                    trigger.player.$give(result.cards[0], player);
                                    trigger.player.line(player);
                                    player.gain(result.cards[0], trigger.player);
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        zmweiyuchunde: {
                            nobracket: true,
                            trigger: {
                                player: 'dyingAfter',
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            filter(event, player) {
                                return event.source && event.source.isIn() && event.source.hp > 0 && !event.source.hasSkill('zmweiyuchunde_1') && !event.source.hasSkill('zmazhiyu');
                            },
                            logTarget: 'source',
                            content() {
                                game.playzm2(['zmsaixili1', 'zmsaixili2'].randomGet());
                                game.mp422('zmsaixili');
                                trigger.source.addTempSkill('zmweiyuchunde_1', { player: 'damageBefore' });
                            },
                            ai: {
                                threaten(player, target) {
                                    if (target.hp == 1) return 0.6;
                                    return 1;
                                },
                                effect: {
                                    target(card, player, target, current) {
                                        if (!target.hasFriend()) return;
                                        if (target.hp <= 1 && get.tag(card, 'damage')) return [1, 0, 0, -1];
                                    },
                                },
                            },
                            subSkill: {
                                1: {
                                    mod: {
                                        maxHandcard(player, num) {
                                            var sxl = game.findPlayer(function (current) {
                                                return current.hasSkill('zmweiyuchunde');
                                            });
                                            var num2 = sxl.hp;
                                            if (num2 > 0) {
                                                return num2;
                                            } else {
                                                return num;
                                            }
                                        },
                                    },
                                },
                            },
                        },
                        zmkalaimengzhixun: {
                            nobracket: true,
                            trigger: {
                                player: 'judgeEnd',
                            },
                            check(event) {
                                if (event.card.name == 'du') return false;
                                return true;
                            },
                            filter(event, player) {
                                if (event.name == 'judge') {
                                    return event.result && event.result.bool == false && event.player == player && get.type(event.card) == 'delay';
                                }
                                return event.player == player && get.type(event.card) == 'delay';
                            },
                            content() {
                                player.gain(trigger.card);
                                player.$gain2(trigger.card);
                                // player.gain(trigger.result.card);
                                //player.$gain2(trigger.result.card);
                            },
                            group: ['zmkalaimengzhixun_1', 'zmtrenxing', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊贰/audio:6',
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmt_np >= 5;
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseTarget(
                                            get.prompt('zmkalaimengzhixun_1'),
                                            [1, player.storage.zmt_np / 5],
                                            function (card, player, target) {
                                                return target.countCards('j') > 0 && target != player;
                                            },
                                            function (target) {
                                                return get.attitude(_status.event.player, target);
                                            }
                                        );
                                        ('step 1');
                                        if (result.bool) {
                                            event.targets = result.targets;
                                            player.line(event.targets, 'thunder');
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        if (event.targets.length) {
                                            player.storage.zmt_np -= 5;
                                            var target = event.targets.shift();
                                            event.current = target;
                                            player.choosePlayerCard('j', target, true);
                                        } else {
                                            event.finish();
                                        }
                                        ('step 3');
                                        if (result.bool) {
                                            event.current.lose(result.links[0], ui.special);
                                            event.current.$give(result.links[0], player);
                                            if (result.links[0].viewAs) {
                                                player.addJudge({ name: result.links[0].viewAs }, [result.links[0]]);
                                            } else {
                                                player.addJudge(result.links[0]);
                                            }
                                            event.goto(2);
                                        }
                                    },
                                    ai: {
                                        threaten: 1.5,
                                    },
                                },
                            },
                        },
                        zmbaiyuqishi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊贰/audio:7',
                            trigger: {
                                player: 'discardAfter',
                            },
                            filter(event, player) {
                                if (player.classList.contains('dead') == false && event.cards && event.cards.length && event.getParent(2).name == 'phaseDiscard') {
                                    if (Array.isArray(event.cards))
                                        for (var i of event.cards) {
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
                        zmxuanmudemodun: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            filter(event, player) {
                                if (player.storage.zmt_np < 50) return false;
                                return event.player != player && player.num('e') > 0;
                            },
                            _priority: 10,
                            content() {
                                'step 0';
                                player.storage.zmt_np = 0;
                                game.playzm2('zmbuladamante');
                                game.mp422('zmbuladamante');
                                ('step 1');
                                trigger.num++;
                                var num0 = player.num('e');
                                player.chooseToDiscard(Infinity, 'e', '弃置所有装备牌', true);
                                trigger.player.chooseToDiscard(num0, 'he', true);
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 1,
                            },
                        },
                        zmmangmuchiyu: {
                            group: ['zmtgaodengliliang', 'zmthundun', 'zmtleiren', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            nobracket: true,
                            audio: 'ext:综漫季刊贰/audio:1',
                            trigger: {
                                player: ['phaseUseEnd', 'useCardAfter'],
                            },
                            forced: true,
                            filter(event, player, name) {
                                if (name == 'phaseUseEnd') return true;
                                if (name == 'useCardAfter') return _status.currentPhase == player && get.itemtype(event.cards[0]) == 'card';
                                return false;
                            },
                            init(player) {
                                player.storage.zmmangmuchiyu = [];
                            },
                            content() {
                                'step 0';
                                if (event.triggername == 'useCardAfter') {
                                    var type = get.type(trigger.card, 'trick');
                                    if (!player.storage.zmmangmuchiyu.includes(type)) player.storage.zmmangmuchiyu.push(type);
                                } else {
                                    player
                                        .chooseTarget('选择一名其他角色令其下回合不能使用或打出你此阶段内未使用过的类别的牌？', function (card, player, target) {
                                            return player != target;
                                        })
                                        .set('ai', function (target) {
                                            return -get.attitude(player, target);
                                        });
                                }
                                ('step 1');
                                if (result.bool) {
                                    if (player.storage.zmmangmuchiyu.length < 1) {
                                        game.playzm2('zmmangmuchiyu21');
                                        game.mp422('zmyuzhe');
                                        result.targets[0].goMad({ player: 'phaseAfter' });
                                    } else {
                                        game.playzm2(['zmmangmuchiyu11', 'zmmangmuchiyu12', 'zmmangmuchiyu15', 'zmmangmuchiyu14', 'zmmangmuchiyu13', 'zmmangmuchiyu15'].randomGet());
                                        result.targets[0].addSkill('zmmangmuchiyu_unuseable');
                                        result.targets[0].storage.zmmangmuchiyu_unuseable = [];
                                        for (var i = 0; i < player.storage.zmmangmuchiyu.length; i++) {
                                            result.targets[0].storage.zmmangmuchiyu_unuseable.push(player.storage.zmmangmuchiyu[i]);
                                        }
                                    }
                                    player.storage.zmmangmuchiyu = [];
                                } else {
                                    event.finish();
                                }
                            },
                            subSkill: {
                                unuseable: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    popup: false,
                                    content() {
                                        player.storage.zmmangmuchiyu_unuseable = [];
                                        player.removeSkill('zmmangmuchiyu_unuseable');
                                    },
                                    mark: true,
                                    marktext: '愚',
                                    intro: {
                                        content(storage, player) {
                                            var storage = player.storage.zmmangmuchiyu_unuseable;
                                            if (storage && storage.length) {
                                                var str = '可以使用或打出的牌:';
                                                for (var i = 0; i < storage.length; i++) {
                                                    str += get.translation(storage[i]) + ',';
                                                }
                                                return str.slice(0, str.length - 1);
                                            } else {
                                                return '你的回合结束前无法使用或打出牌';
                                            }
                                        },
                                    },
                                    mod: {
                                        cardEnabled(card, player, target) {
                                            if (player.storage.zmmangmuchiyu_unuseable && player.storage.zmmangmuchiyu_unuseable.length) {
                                                var storage = player.storage.zmmangmuchiyu_unuseable;
                                                for (var i = 0; i < storage.length; i++) {
                                                    if (get.type(card) == storage[i]) return true;
                                                }
                                                return false;
                                            }
                                            if (!player.storage.zmmangmuchiyu_unuseable.length) return false;
                                        },
                                        cardRespondable(card, player, target) {
                                            if (player.storage.zmmangmuchiyu_unuseable && player.storage.zmmangmuchiyu_unuseable.length) {
                                                var storage = player.storage.zmmangmuchiyu_unuseable;
                                                for (var i = 0; i < storage.length; i++) {
                                                    if (get.type(card) == storage[i]) return true;
                                                }
                                                return false;
                                            }
                                            if (!player.storage.zmmangmuchiyu_unuseable.length) return false;
                                        },
                                        cardSavable(card, player, target) {
                                            if (player.storage.zmmangmuchiyu_unuseable && player.storage.zmmangmuchiyu_unuseable.length) {
                                                var storage = player.storage.zmmangmuchiyu_unuseable;
                                                for (var i = 0; i < storage.length; i++) {
                                                    if (get.type(card) == storage[i]) return true;
                                                }
                                                return false;
                                            }
                                            if (!player.storage.zmmangmuchiyu_unuseable.length) return false;
                                        },
                                    },
                                },
                            },
                            ai: {
                                threaten: 8,
                                expose: 0.2,
                            },
                        },
                        zmxianshiniuqu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊贰/audio:6',
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                if (player.hasSkill('zmxianshiniuqu_2')) return false;
                                return player.storage.zmt_np >= 20;
                            },
                            check(event, player) {
                                var num3 = player.hp;
                                var num1 = event.player.countCards('h');
                                if ((num1 < 4 && event.player != player && event.player.hp > 2) || (num3 < 3 && event.player != player) || (num1 < 4 && event.player == player && player.countCards('h', { name: 'tao' }) == 0)) return false;
                                return get.attitude(player, event.player) > 0;
                            },
                            content() {
                                player.storage.zmt_np -= 20;
                                trigger.player.addTempSkill('zmxianshiniuqu_2');
                                var num = trigger.player.countCards('h');
                                trigger.player.storage.zmxianshiniuqu_2 += num;
                            },
                            ai: {
                                expose: 0.3,
                                threaten: 1.3,
                            },
                            group: ['zmxianshiniuqu_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'phaseUseEnd',
                                    },
                                    silent: true,
                                    content() {
                                        'step 0';
                                        event.players = get.players(player);
                                        event.num = 0;
                                        ('step 1');
                                        if (event.players.length) {
                                            var current = event.players.shift();
                                            var fk = current.getCards('hej', function (card) {
                                                return card.zmxianshiniuqu_link ? true : false;
                                            });
                                            if (fk.length) {
                                                current.lose(fk)._triggered = null;
                                            }
                                            event.redo();
                                        }
                                    },
                                    forced: true,
                                    popup: false,
                                },
                                2: {
                                    init(player) {
                                        player.storage.zmxianshiniuqu_2 = 0;
                                    },
                                    trigger: {
                                        player: ['useCard'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        //if(get.is.converted(event)) return false;
                                        //if(event.card.zmxianshiniuqu_link) return false;
                                        if (player.storage.zmxianshiniuqu_2 <= 0) return false;
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        var fake = game.createCard(trigger.card);
                                        fake.zmxianshiniuqu_link = true;
                                        player.gain(fake, 'draw')._triggered = null;
                                        player.storage.zmxianshiniuqu_2 -= 1;
                                        fake.classList.add('glow');
                                        fake._destroy = 'zmxianshiniuqu';
                                        fake._modUseful = function () {
                                            return 0.1;
                                        };
                                        fake._modValue = function () {
                                            return 0.1;
                                        };
                                    },
                                },
                            },
                        },
                        zmshuangmianren: {
                            nobracket: true,
                            mod: {
                                maxHandcard(player, num) {
                                    if (player.num('h', { type: 'trick' }) > 0 || player.num('h', { type: 'delay' }) > 0) {
                                        return num + player.num('h', { type: 'delay' }) + player.num('h', { type: 'trick' });
                                    } else {
                                        return num;
                                    }
                                },
                            },
                        },
                        zfeihongzhiwang: {
                            nobracket: true,
                            group: ['zfeihongzhiwang_1', 'zmtshikong', 'zmtrenxing', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            audio: 'ext:综漫季刊贰/audio:9',
                            trigger: {
                                target: 'useCardToBefore',
                                player: 'damageBefore',
                            },
                            usable: 1,
                            filter(event, player, onrewrite) {
                                if (onrewrite == 'damageBefore') {
                                    return player.storage.zmt_np >= 20;
                                }
                                if (onrewrite == 'useCardToBefore') {
                                    return get.tag(event.card, 'damage') && player.storage.zmt_np >= 15;
                                }
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                                player.storage.zmt_np -= 20;
                                game.playzm2(['zmfeihongzhiwang1'].randomGet());
                                game.mp422('zfeihongzhiwang2');
                                ('step 1');
                                event.players = get.players(player);
                                event.players.remove(player);
                                ('step 2');
                                if (event.players.length) {
                                    // event.players.shift().addTempSkill('fengyin','phaseUseEnd');
                                    event.players.shift().addTempSkill('zshishan', 'phaseUseEnd');
                                    event.redo();
                                }
                                ('step 3');
                                player.phaseUse();
                                ('step 4');
                            },
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊贰/audio:7',
                                    trigger: {
                                        player: ['shaBegin', 'juedouBegin'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.target.hasSkill('zshishan');
                                    },
                                    content() {
                                        'step 0';
                                        game.playzm2(['zmfeihongzhiwang1'].randomGet());
                                        game.mp422('zfeihongzhiwang2');
                                        trigger.baseDamage++;
                                        trigger.target.removeSkill('zshishan');
                                        ('step 1');
                                        if (trigger.cards && typeof trigger.cards[0].number == 'number') {
                                            trigger.target.addTempSkill('zmfeihongzhiwang_1', ['shaAfter', 'juedouAfter']);
                                        }
                                        ('step 2');
                                        event.players = get.players(player);
                                        event.players.remove(player);
                                        ('step 3');
                                        if (event.players.length) {
                                            event.players.shift().removeSkill('zshishan');
                                            event.redo();
                                        }
                                    },
                                },
                                2: {
                                    mod: {
                                        cardEnabled(card, player) {
                                            var event = _status.event;
                                            if (event.parent && event.parent.cards) {
                                                if (card.number < event.parent.cards[0].number) return false;
                                            }
                                        },
                                        cardRespondable(card, player) {
                                            var event = _status.event;
                                            if (event.parent && event.parent.cards) {
                                                if (card.number < event.parent.cards[0].number) return false;
                                            }
                                        },
                                    },
                                },
                            },
                        },
                        zshishan: {
                            mod: {
                                cardEnabled(event, player) {
                                    return false;
                                },
                                cardUsable(event, player) {
                                    return false;
                                },
                                cardRespondable(event, player) {
                                    return false;
                                },
                                cardSavable(event, player) {
                                    return false;
                                },
                            },
                            init(player, skill) {
                                var skills = player.getSkills(true, false);
                                for (var i = 0; i < skills.length; i++) {
                                    if (get.is.locked(skills[i]) || lib.skill[skills[i]].charlotte) {
                                        skills.splice(i--, 1);
                                    }
                                }
                                player.disableSkill(skill, skills);
                            },
                            onremove(player, skill) {
                                player.enableSkill(skill);
                            },
                            charlotte: true,
                            mark: true,
                            intro: {
                                content(storage, player, skill) {
                                    let list = Object.keys(player.disabledSkills);
                                    if (list.length) {
                                        var str = '失效技能:';
                                        for (var i = 0; i < list.length; i++) {
                                            if (lib.translate[list[i] + '_info']) {
                                                str += get.translation(list[i]) + '、';
                                            }
                                        }
                                        return str.slice(0, str.length - 1);
                                    }
                                },
                            },
                        },
                        zmdiwufa: {
                            nobracket: true,
                            audio: 'ext:综漫季刊贰/audio:8',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            //准备阶段 你可以观看牌堆顶5张牌并调整其中1张牌的位置;<br>&nbsp若如此做,你可以将1张手牌当做此牌使用
                            async content(event, trigger, player) {
                                //QQQ
                                const cards = get.cards(5);
                                const result = await player.chooseButton(['调整其中1张牌的位置', cards]).set('ai', function (button) {
                                    return get.value(button.link);
                                }).forResult();
                                if (result.links && result.links[0]) {
                                    cards.remove(result.links[0]);
                                    const { result: result1 } = await player.chooseControl([0, 1, 2, 3, 4]);
                                    cards.splice(result1.control, 0, result.links[0]);
                                    while (cards.length) {
                                        ui.cardPile.insertBefore(cards.pop(), ui.cardPile.firstChild);
                                    }
                                    const { result: result2 } = await player.chooseCard('h').set('ai', function (card) {
                                        return 8 - get.value(card);
                                    });
                                    if (result2.cards && result2.cards[0]) {
                                        await player.chooseUseTarget({ name: result.links[0].name }, result2.cards, true, false);
                                    }
                                } else {
                                    while (cards.length) {
                                        ui.cardPile.insertBefore(cards.pop(), ui.cardPile.firstChild);
                                    }
                                }
                            },
                            ai: {
                                guanxing: true,
                            },
                            group: ['zmtgaodengliliang', 'zmtrenxing', 'zmt_np', 'zmt_np1', 'zmt_np2', 'zmdiwufa_1'],
                            subSkill: {
                                1: {
                                    nobracket: true,
                                    audio: 'ext:综漫季刊贰/audio:4',
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    _priority: 10,
                                    logTarget: 'player',
                                    filter(event, player) {
                                        return event.player != player && !player.hasSkill('zmdiwufa_temp');
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) < 0;
                                    },
                                    async content(event, trigger, player) {
                                        //QQQ
                                        trigger.cancel();
                                        const hook = lib.hook;
                                        lib.hook = {
                                            globalskill: {},
                                        };
                                        await trigger.player.phaseJieshu();
                                        await trigger.player.phaseDiscard();
                                        await trigger.player.phaseUse();
                                        await trigger.player.phaseDraw();
                                        await trigger.player.phaseJudge();
                                        await trigger.player.phaseZhunbei();
                                        lib.hook = hook;
                                    },
                                },
                                temp: {},
                            },
                        },
                        zmshixiangshique: {
                            nobracket: true,
                            trigger: {
                                global: 'damageBefore',
                            },
                            filter(event, player) {
                                if (event.source == player) return false;
                                return player.storage.zmt_np >= 50 && event.num >= event.player.hp;
                            },
                            prompt(event, player) {
                                var str = '';
                                str += `是否将${get.translation(event.player)}即将受到的${event.num}点伤害放逐至${get.translation(event.player.maxHp)}轮后结算？`;
                                return str;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) > 1;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 50;
                                game.playzm2('zmcangqiqingzi');
                                game.mp422('zmcangqiqingzi');
                                trigger.untrigger();
                                trigger.finish();
                                event.num = Math.min(trigger.num, 9);
                                event.num1 = trigger.player.maxHp;
                                ('step 1');
                                if (!trigger.player.hasSkill('zmshixiangshique_2')) {
                                    trigger.player.addSkill('zmshixiangshique_2');
                                    trigger.player.addSkill('zmshixiangshique_1');
                                    trigger.player.storage.zmshixiangshique_2 += event.num;
                                    trigger.player.storage.zmshixiangshique_1 += event.num1;
                                } else {
                                    trigger.player.storage.zmshixiangshique_2 += event.num;
                                }
                            },
                            ai: {
                                threaten: 2,
                                expose: 0.2,
                            },
                            subSkill: {
                                1: {
                                    mark: true,
                                    marktext: '结',
                                    intro: {
                                        content: '#轮后结算所有以【事项失却】延迟的伤害',
                                    },
                                    init(player) {
                                        player.storage.zmshixiangshique_1 = 0;
                                        player.markSkill('zmshixiangshique_1');
                                    },
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    _priority: 20,
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmshixiangshique_1 -= 1;
                                        ('step 0');
                                        if (player.storage.zmshixiangshique_1 <= 0) {
                                            var num = player.storage.zmshixiangshique_2;
                                            player.damage(num, 'nosource');
                                            player.$fullscreenpop('事项归结', 'thunder');
                                            player.storage.zmshixiangshique_1 = 0;
                                            player.storage.zmshixiangshique_2 = 0;
                                            player.removeSkill('zmshixiangshique_1');
                                            player.removeSkill('zmshixiangshique_2');
                                        }
                                    },
                                },
                                2: {
                                    init(player) {
                                        player.storage.zmshixiangshique_2 = 0;
                                        player.markSkill('zmshixiangshique_2');
                                    },
                                },
                            },
                        },
                        zmjinghuashuiyue: {
                            nobracket: true,
                            audio: 'ext:综漫季刊贰/audio:7',
                            trigger: {
                                global: 'useCardToPlayered',
                            },
                            usable: 1,
                            init(player) {
                                player.storage.zmjinghuashuiyue = 0;
                            },
                            check(event, player) {
                                var num0 = player.storage.zmjinghuashuiyue;
                                var att = get.attitude(player, event.player);
                                if (att >= 0) return false;
                                var hs = player.getCards('h');
                                for (var i = 0; i < hs.length; i++) {
                                    if (hs[i].number + num0 >= 8 && get.value(hs[i]) < 8) {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            filter(event, player) {
                                return event.card && event.targets.length == 1 && player.canCompare(event.player) && event.target && event.player != player && get.distance(player, event.target, 'attack') <= 1;
                            },
                            content() {
                                'step 0';
                                player.chooseToCompare(trigger.player);
                                ('step 1');
                                if (result.bool) {
                                    event.num = 1;
                                    player
                                        .chooseTarget([1, 1], `选择${get.translation(trigger.player)}攻击范围内的一名角色成为${get.translation(trigger.card)}的目标,或不进行选择取消此牌效果.`, function (card, player, target) {
                                            return get.distance(trigger.player, target, 'attack') <= 1;
                                        })
                                        .set('ai', function (target) {
                                            var trigger = _status.event.getTrigger();
                                            //var player=_status.event.player;
                                            return get.effect(target, trigger.card, player, player);
                                        });
                                } else {
                                    game.playzm2(['zmjinghuashuiyue21', 'zmjinghuashuiyue22', 'zmjinghuashuiyue23'].randomGet());
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool && event.num > 0) {
                                    game.playzm2(['zmjinghuashuiyue11', 'zmjinghuashuiyue12', 'zmjinghuashuiyue13', 'zmjinghuashuiyue14', 'zmjinghuashuiyue15', 'zmjinghuashuiyue16', 'zmjinghuashuiyue17', 'zmjinghuashuiyue15'].randomGet());
                                    if (trigger.player != result.targets) {
                                        trigger.player.line(result.targets[0], { color: [238, 204, 255] });
                                    }
                                    var evt = trigger.parent;
                                    evt.targets.remove(trigger.target);
                                    evt.targets.push(result.targets[0]);
                                    // trigger.target = result.targets[0];
                                } else {
                                    var evt = trigger.parent;
                                    evt.targets.remove(trigger.target);
                                    game.playzm2(['zmjinghuashuiyue11', 'zmjinghuashuiyue12', 'zmjinghuashuiyue13', 'zmjinghuashuiyue14', 'zmjinghuashuiyue15', 'zmjinghuashuiyue16', 'zmjinghuashuiyue17', 'zmjinghuashuiyue15'].randomGet());
                                    event.finish();
                                }
                            },
                            group: ['zmjinghuashuiyue_3', 'zmtgaodengliliang', 'zmjinghuashuiyue_1', 'zmjinghuashuiyue_2', 'zmtrenxing', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'compare',
                                        target: 'compare',
                                    },
                                    filter(event, player) {
                                        if (event.iwhile) return false;
                                        return player.storage.zmjinghuashuiyue >= 1;
                                    },
                                    silent: true,
                                    content() {
                                        var num = player.storage.zmjinghuashuiyue;
                                        if (num >= 1) {
                                            game.log(player, '的拼点牌点数额外增加', num, '点');
                                        }
                                        if (player == trigger.player) {
                                            trigger.num1 += num;
                                        } else {
                                            trigger.num2 += num;
                                        }
                                    },
                                    forced: true,
                                    popup: false,
                                },
                                2: {
                                    trigger: {
                                        player: ['chooseToCompareAfter', 'compareMultipleAfter'],
                                        target: ['chooseToCompareAfter', 'compareMultipleAfter'],
                                    },
                                    silent: true,
                                    filter(event, player) {
                                        if (event.targets && event.targets.length) return false;
                                        if (player == event.player) {
                                            return event.num1 > event.num2;
                                        } else {
                                            return event.num1 < event.num2;
                                        }
                                    },
                                    content() {
                                        player.storage.zmjinghuashuiyue += 1;
                                    },
                                    forced: true,
                                    popup: false,
                                },
                                3: {
                                    trigger: {
                                        player: ['chooseToCompareAfter', 'compareMultipleAfter'],
                                        target: ['chooseToCompareAfter', 'compareMultipleAfter'],
                                    },
                                    silent: true,
                                    filter(event, player) {
                                        if (event.targets && event.targets.length) return false;
                                        if (player == event.player) {
                                            return event.num1 <= event.num2;
                                        } else {
                                            return event.num1 >= event.num2;
                                        }
                                    },
                                    content() {
                                        player.storage.zmjinghuashuiyue = 0;
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                        },
                        zmheiguan: {
                            nobracket: true,
                            usable: 1,
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (player.storage.zmt_np < 70) return false;
                                return (
                                    game.countPlayer(function (current) {
                                        return current.countCards('h') <= 0 && current != player;
                                    }) > 0
                                );
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(1, '选择一名没有手牌的其他角色对其造成伤害', function (card, player, target) {
                                        return player != target && target.countCards('h') == 0;
                                    })
                                    .set('ai', function (target) {
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    game.playzm2(['zmlanran'].randomGet());
                                    game.mp422('zmlanran');
                                    player.line(result.targets);
                                    event.targets = result.targets;
                                    event.num2 = 0;
                                }
                                ('step 2');
                                if (result.bool && event.num2 < event.targets.length) {
                                    var num1 = Math.floor(player.storage.zmt_np / 35);
                                    player.storage.zmt_np = 0;
                                    event.targets[event.num2].damage(num1);
                                    event.num2++;
                                    event.redo();
                                }
                            },
                            ai: {
                                order: 5,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        zmzhaiyaoyuanyuan: {
                            group: ['zmtgaodengliliang', 'zmtrenxing', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            usable: 1,
                            check(event, player) {
                                if (event.player.countCards('h') >= 2) return false;
                                if (event.player.isTurnedOver()) return false;
                                return get.attitude(player, event.player) <= 0;
                            },
                            filter(event, player) {
                                return event.player != player && player.tempSkills;
                            },
                            content() {
                                'step 0';
                                var controls = [];
                                /*  var name=player.name;  
                                  skills1=lib.character[name][3];
                                                     var skills=playe.getCards('s',false,false);     
                                  skills.remove(skills1);
                                                     for(i=0;i<skills.length;i++){
                                                         var info=lib.skill[skills[i]];   
                                                         if(!info) continue;
                                                         if(!lib.translate[skills[i]]) continue;    
                                                         if(!lib.translate[skills[i]+'_info']) continue;    
                                                         if(!controls.includes(skills[i])){
                                                             controls.push(skills[i]);
                                                         }
                                                     }*/
                                for (var i in player.tempSkills) {
                                    controls.push(i);
                                }
                                if (controls.length == 1) {
                                    event.num = 1;
                                    player.popup(controls[0]);
                                    player.removeSkill(controls[0], true);
                                    game.log(player, '移除了技能', `【${get.translation(controls)}】`);
                                } else {
                                    player
                                        .chooseControl(controls, 'cancel')
                                        .set('ai', function () {
                                            return Math.floor(Math.random() * controls.length);
                                        })
                                        .set('prompt', '选择移除的一个临时技能');
                                }
                                ('step 1');
                                if (result.control) {
                                    event.num = 1;
                                    player.popup(result.control);
                                    player.removeSkill(result.control, true);
                                    game.log(player, '移除了技能', `【${get.translation(result.control)}】`);
                                }
                                ('step 2');
                                if (event.num > 0) {
                                    game.playzm2(['zmzhaiyaoyuanyuan1', 'zmzhaiyaoyuanyuan2'].randomGet());
                                    game.mp422('zmaertaier');
                                    var name = trigger.player.name;
                                    skills1 = lib.character[name][3];
                                    var skills = trigger.player.skills.slice(0);
                                    skills.remove(skills1);
                                    if (skills.length) {
                                        trigger.player.removeSkill(skills);
                                        game.log(trigger.player, '移除了所有非初始技能');
                                    }
                                    trigger.player.link(false);
                                    trigger.player.turnOver(false);
                                    trigger.player.discard(trigger.player.getCards('hej'));
                                }
                            },
                            ai: {
                                threaten: 0.8,
                            },
                        },
                        zmbziwogaizao: {
                            nobracket: true,
                            audio: 'ext:综漫季刊贰/audio:6',
                            trigger: {
                                player: 'phaseBefore',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.storage.zmt_np = 0;
                                var list = get.gainableSkills();
                                var list1 = [],
                                    list2 = [];
                                if (typeof list != 'object') {
                                    game.log('skill list error');
                                    event.finish();
                                    return;
                                }
                                list.remove(player.getSkills());
                                for (var i = 0; i < list.length; i++) {
                                    if (player.storage[list[i]] != undefined) continue;
                                    if (list[i].indexOf('d2_') >= 0) {
                                        list1.push(list[i]);
                                    } else {
                                        list2.push(list[i]);
                                    }
                                }
                                list = [];
                                var num = list1.length > 1 ? 2 : 3;
                                if (list1.length) list = list.concat(list1.randomGets(2));
                                if (list2.length) list = list.concat(list2.randomGets(num));
                                event.skillai = function () {
                                    return get.max(list, get.skillRank, 'item');
                                };
                                if (event.isMine() || player.isUnderControl()) {
                                    var dialog = ui.create.dialog('forcebutton');
                                    dialog.add('选择获得一项技能');
                                    var clickItem = function () {
                                        _status.event._result = this.link;
                                        dialog.close();
                                        game.resume();
                                    };
                                    for (var i = 0; i < list.length; i++) {
                                        if (lib.translate[list[i] + '_info']) {
                                            var translation = get.translation(list[i]);
                                            if (translation[0] == '新' && translation.length == 3) {
                                                translation = translation.slice(1, 3);
                                            } else {
                                                translation = translation.slice(0, 2);
                                            }
                                            var item = dialog.add(`<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【${translation}】</div><div>` + lib.translate[`${list[i]}_info`] + '</div></div>');
                                            item.firstChild.addEventListener('click', clickItem);
                                            item.firstChild.link = list[i];
                                        }
                                    }
                                    dialog.add(ui.create.div('.placeholder'));
                                    event.switchToAuto = function () {
                                        event._result = event.skillai();
                                        dialog.close();
                                        game.resume();
                                    };
                                    _status.imchoosing = true;
                                    game.pause();
                                } else {
                                    event._result = event.skillai();
                                }
                                ('step 1');
                                _status.imchoosing = false;
                                var link = result;
                                player.addTempSkill(link, { player: 'damageBefore' });
                                player.popup(link);
                                game.log(player, '获得了技能', `【${get.translation(link)}】`);
                                ('step 2');
                                var controls = [];
                                for (var i in player.tempSkills) {
                                    controls.push(i);
                                }
                                if (controls.length >= 3) {
                                    player
                                        .chooseControl(controls, 'cancel')
                                        .set('ai', function () {
                                            return Math.floor(Math.random() * controls.length);
                                        })
                                        .set('prompt', '可选择一个临时技能永久固化');
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (result.control) {
                                    player.popup(result.control);
                                    player.removeSkill(result.control, true);
                                    game.log(player, '固化了技能', `【${get.translation(result.control)}】`);
                                    player.addSkill(result.control);
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        zmhaoduo2: {
                            nobracket: true,
                            trigger: {
                                global: 'loseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player != event.player && _status.currentPhase == player;
                            },
                            content() {
                                player.storage.zmhaoduo = player.storage.zmhaoduo.concat(trigger.cards);
                            },
                        },
                        zmyezhiweimu: {
                            init2(player) {
                                player.storage.zmhaoduo = [];
                            },
                            audio: 'ext:综漫季刊贰/audio:9',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            nobracket: true,
                            forced: true,
                            filter(event, player) {
                                return player.storage.zmhaoduo.length;
                            },
                            content() {
                                'step 0';
                                event.players = get.players(player);
                                event.num = 0;
                                event.players = event.players.filter((i) => i.hasSkill('zmbengluo_1'));
                                ('step 1');
                                if (event.players.length) {
                                    event.players.shift().removeSkill('zmbengluo_1');
                                    event.redo();
                                }
                                ('step 2');
                                player.gain(player.storage.zmhaoduo);
                                player.storage.zmhaoduo = [];
                            },
                            group: 'zmhaoduo2',
                        },
                        zmbengluo: {
                            group: ['zmtgaodengliliang', 'zmtsuzheng', 'zmtrenxing', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            nobracket: true,
                            audio: 'ext:综漫季刊贰/audio:11',
                            trigger: {
                                player: 'loseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return _status.currentPhase != player;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('选择一名未进入[崩落]状态的其他角色进入崩落状态', get.prompt2('zmbengluo'), function (card, player, target) {
                                        return target != player && !target.hasSkill('zmbengluo_1');
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.targets && result.targets[0]) {
                                    player.line(result.targets[0], { color: [51, 0, 153] });
                                    result.targets[0].addSkill('zmbengluo_1');
                                    result.targets[0].node.avatar.zm2t('武将牌特效崩落');
                                } //QQQ
                            },
                            subSkill: {
                                1: {
                                    name: '崩落',
                                    mark: true,
                                    markimage: 'extension/综漫季刊贰/标记负影响.png',
                                    intro: {
                                        content(storage) {
                                            return '奥伯龙于他的回合内每使用1张牌,则你随机弃置1张牌.';
                                        },
                                    },
                                    trigger: {
                                        global: 'useCardBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.hasSkill('zmbengluo') && _status.currentPhase == event.player && player.countCards('he') > 0;
                                    },
                                    content() {
                                        player.chooseToDiscard(1, 'he', true);
                                    },
                                },
                            },
                        },
                        zmyubifangluomudemengzhitong: {
                            nobracket: true,
                            audio: 'ext:综漫季刊贰/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.storage.zmt_np >= 120;
                            },
                            filterTarget: true,
                            selectTarget() {
                                return [1, Infinity];
                            },
                            multitarget: true,
                            multiline: true,
                            line: 'thunder',
                            content() {
                                'step 0';
                                'step 1';
                                player.storage.zmt_np -= 120;
                                game.mp422('zmaobolong');
                                ('step 2');
                                for (var i = 0; i < targets.length; i++) {
                                    targets[i].randomDiscard(Infinity, 'he', true);
                                }
                                ('step 3');
                                for (var i = 0; i < targets.length; i++) {
                                    targets[i].turnOver();
                                }
                            },
                            ai: {
                                expose: 0.2,
                                damage: true,
                                threaten: 1.5,
                                order: 12,
                                result: {
                                    target(player, target) {
                                        var eff = get.damageEffect(target, player, target);
                                        if (target.isLinked()) {
                                            return eff * 2;
                                        } else {
                                            return eff / 2;
                                        }
                                    },
                                },
                            },
                        },
                        zmxuenu: {
                            nobracket: true,
                            trigger: {
                                player: 'shaBefore',
                            },
                            silent: true,
                            forced: true,
                            content() {
                                'step 0';
                                if (player.storage.zmt_np >= 25 && player.hasSkill('zmxuenu_1')) {
                                    player.storage.zmt_np -= 25;
                                    var t = Math.random();
                                    if (t <= 0.4) {
                                        game.playzm2(['zmmingcanxue33', 'zmmingcanxue3', 'zmmingcanxue33'].randomGet());
                                        game.mp422('zmmingcanxue3');
                                    } else {
                                        game.playzm2('zmmingcanxue5');
                                        game.mp422('zmmingcanxue5');
                                    }
                                }
                                if (player.hasSkill('zmxuenu_1') && player.storage.zmt_np < 25) {
                                    player.removeSkill('zmxuenu_1');
                                    player.loseHp();
                                }
                                ('step 1');
                                if (player.storage.zmt_np >= 60 && !player.hasSkill('zmxuenu_1')) {
                                    player.storage.zmt_np -= 25;
                                    var t = Math.random();
                                    if (t <= 0.5) {
                                        game.playzm2(['zmmingcanxue1', 'zmmingcanxue11', 'zmmingcanxue111'].randomGet());
                                        game.mp422('zmmingcanxue1');
                                    } else {
                                        game.playzm2('zmmingcanxue4');
                                        game.mp422('zmmingcanxue4');
                                    }
                                    player.addSkill('zmxuenu_1');
                                }
                            },
                            group: ['zmxuenu_2', 'zmtyeshou', 'zmtrenxing', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            subSkill: {
                                1: {
                                    mod: {
                                        cardEnabled(card, player) {
                                            if (get.type(card, 'trick') == 'trick') return false;
                                        },
                                        cardRespondable(card, player) {
                                            if (get.type(card, 'trick') == 'trick') return false;
                                        },
                                        cardSavable(card, player) {
                                            if (get.type(card, 'trick') == 'trick') return false;
                                        },
                                        attackFrom(from, to, distance) {
                                            return distance - 1;
                                        },
                                    },
                                    mark: true,
                                    markimage: 'extension/综漫季刊贰/标记重击.png',
                                    intro: {
                                        content(storage) {
                                            return '伤害增幅状态中';
                                        },
                                    },
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha' && event.parent.name != '_lianhuan' && event.parent.name != '_lianhuan2';
                                    },
                                    content() {
                                        trigger.num++;
                                        trigger.player.addTempSkill('zmxuenu_3');
                                        //trigger.player.addTempSkill('zmxuenu_3',{player:'phaseEnd'});
                                    },
                                },
                                2: {
                                    audio: 'ext:综漫季刊贰/audio:1',
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha';
                                    },
                                    content() {
                                        trigger.player.line(player, { color: [214, 0, 0] });
                                        trigger.player.storage.zmt_np -= 5;
                                        player.storage.zmt_np += 5;
                                    },
                                },
                                3: {
                                    mark: true,
                                    markimage: 'extension/综漫季刊贰/标记负影响.png',
                                    intro: {
                                        content(storage) {
                                            return '所有你自己为来源的回复行为无效';
                                        },
                                    },
                                    name: '回复失效',
                                    nobracket: true,
                                    audio: 'ext:综漫季刊贰/audio:1',
                                    trigger: {
                                        player: ['recoverBegin'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (_status.currentPhase == player) return false;
                                        return event.source && event.source == player && event.num > 0;
                                    },
                                    content() {
                                        trigger.num = 0;
                                    },
                                },
                            },
                            popup: false,
                        },
                        zmdongxim: {
                            nobracket: true,
                            audio: 'ext:综漫季刊贰/audio:9',
                            trigger: {
                                global: 'shaMiss',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            filter(event, player) {
                                return event.player != undefined && event.target == player && event.player != player;
                            },
                            content() {
                                game.playzm2('zmmingcanxue2');
                                if (player.hasSkill('zmxuenu_1')) {
                                    game.mp422('zmmingcanxue2');
                                }
                                trigger.player.addTempSkill('zmdongxim_1', 'roundStart');
                            },
                            subSkill: {
                                1: {
                                    mark: true,
                                    markimage: 'extension/综漫季刊贰/标记破绽.png',
                                    intro: {
                                        content(storage) {
                                            return '因你区域内没有的花色的牌受到伤害时,伤害基数+1.';
                                        },
                                    },
                                    trigger: {
                                        player: 'damageBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card.suit != undefined && !player.countCards('hej', { suit: event.card.suit });
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                },
                            },
                        },
                        zmzuduan: {
                            nobracket: true,
                            trigger: {
                                global: 'useCardToBefore',
                            },
                            _priority: 12,
                            filter(event, player) {
                                if (player.storage.zmt_np < 15) return false;
                                if (event.player == player) return false;
                                //if(get.itemtype(event.card)!='card') return false;
                                if (!player.countCards('h', { color: get.color(event.card) })) return false;
                                return event.card && event.card.cards && get.type(event.card) == 'basic' && get.distance(player, event.player, 'attack') <= 1;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var val = get.value(trigger.card);
                                var color = get.color(trigger.card);
                                var eff = get.effect(trigger.target, trigger.card, trigger.player, player);
                                var next = player.chooseCard(`是否取消${get.translation(trigger.player)}使用的${get.translation(trigger.card)}并令其收回此牌？`, function (card) {
                                    return get.color(card) == color;
                                });
                                next.ai = function (card) {
                                    if (eff >= 0) return 0;
                                    return true;
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.storage.zmt_np -= 15;
                                    if (get.tag(trigger.card, 'damage')) {
                                        player.popup('飞铲回击');
                                        game.playzm2(['zmfeichanhuiji21', 'zmfeichanhuiji22', 'zmfeichanhuiji24', 'zmfeichanhuiji23'].randomGet());
                                        trigger.cancel();
                                        player.discard(result.cards);
                                        trigger.player.useCard(trigger.card, trigger.player);
                                    } else {
                                        trigger.player.popup('发锁');
                                        game.playzm2(['zmfeichanhuiji11', 'zmfeichanhuiji12', 'zmfeichanhuiji13', 'zmfeichanhuiji11'].randomGet());
                                        player.showCards(result.cards);
                                        trigger.cancel();
                                    }
                                    game.log(trigger.player, '收回了', trigger.cards);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                trigger.player.$gain2(trigger.cards);
                                trigger.player.gain(trigger.cards);
                                trigger.player.addTempSkill('zmzuduan2', 'phaseEnd');
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        zmzuduan2: {
                            mod: {
                                cardEnabled(card, player) {
                                    if (get.type(card) == 'basic') return false;
                                },
                                cardUsable(card, player) {
                                    if (get.type(card) == 'basic') return false;
                                },
                                cardRespondable(card, player) {
                                    if (get.type(card) == 'basic') return false;
                                },
                                cardSavable(card, player) {
                                    if (get.type(card) == 'basic') return false;
                                },
                                targetInRange(card) {
                                    if (get.type(card) == 'basic') return false;
                                },
                            },
                        },
                        zmmowangzhifa: {
                            group: ['zmtrenxing', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            nobracket: true,
                            audio: 'ext:综漫季刊贰/audio:4',
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            lastDo: true,
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            content() {
                                'step 0';
                                player.chooseControl('使摸牌数等于你的攻击范围', '减少摸牌数', 'cancel2').ai = function () {
                                    if (player.getAttackRange() >= 3) return 0;
                                    if (player.getAttackRange() < 3 && player.countCards('h', { name: 'sha' }) > 0) return 1;
                                    return 2;
                                };
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    if (result.control == '使摸牌数等于你的攻击范围') {
                                        trigger.num = player.getAttackRange();
                                        player.storage.zmmowangzhifa_1 = player.getAttackRange();
                                        player.addTempSkill('zmmowangzhifa_1');
                                        player.addTempSkill('zmmowangzhifa_4');
                                        event.finish();
                                    } else {
                                        player.addTempSkill('zmmowangzhifa_3');
                                        trigger.num -= 1;
                                    }
                                }
                            },
                            subSkill: {
                                1: {
                                    onremove(player) {
                                        delete player.storage.zmmowangzhifa_1;
                                        delete player.storage.zmmowangzhifa_2;
                                    },
                                    mod: {
                                        attackFrom(from, to, distance) {
                                            if (!from.storage.zmmowangzhifa_1) return Infinity;
                                            return distance - from.storage.zmmowangzhifa_1;
                                        },
                                    },
                                },
                                3: {
                                    mark: true,
                                    markimage: 'extension/综漫季刊贰/标记重击.png',
                                    intro: {
                                        content(storage) {
                                            return '伤害增幅状态中';
                                        },
                                    },
                                    nobracket: true,
                                    forced: true,
                                    trigger: {
                                        player: 'shaBefore',
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha';
                                    },
                                    content() {
                                        player.removeSkill('zmmowangzhifa_3');
                                        game.playzm2(['zmsani1', 'zmsani2'].randomGet());
                                        game.mp422('zmsani');
                                        trigger.baseDamage++;
                                        //player.addTempSkill('zmzhongji',{player:'shaEnd'});
                                    },
                                    popup: false,
                                },
                                4: {
                                    mod: {
                                        maxHandcard(player, num) {
                                            return num - 1;
                                        },
                                    },
                                },
                            },
                        },
                        zmduoluodexuren: {
                            nobracket: true,
                            audio: 'ext:综漫季刊贰/audio:9',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                'step 0';
                                target.chooseControl('heart2', 'diamond2', 'club2', 'spade2').set('ai', function (event) {
                                    switch (Math.floor(Math.random() * 6)) {
                                        case 0:
                                            return 'heart2';
                                        case 1:
                                        case 4:
                                        case 5:
                                            return 'diamond2';
                                        case 2:
                                            return 'club2';
                                        case 3:
                                            return 'spade2';
                                    }
                                });
                                ('step 1');
                                game.log(target, '猜测了' + get.translation(result.control));
                                event.choice = result.control;
                                target.popup(event.choice);
                                event.card = player.getCards('h').randomGet();
                                player.showCards(event.card);
                                ('step 2');
                                if (event.card.suit + '2' != event.choice) {
                                    target.gain(event.card);
                                    player.$give(1, target);
                                } else {
                                    target.draw(2);
                                    player.chooseCardButton(target, target.getCards('h')).set('filterButton', function (button) {
                                        return true;
                                    });
                                }
                                ('step 3');
                                if (result.bool) {
                                    player.gain(result.links[0]);
                                    target.$give(1, player);
                                }
                            },
                            ai: {
                                order: 3,
                                result: {
                                    target(player, target) {
                                        if (target.countCards('j')) return 2;
                                        switch (target.countCards('he')) {
                                            case 0:
                                                return 0;
                                            case 1:
                                                return 0.5;
                                            case 2:
                                                return 0.8;
                                            default:
                                                return 1;
                                        }
                                    },
                                },
                                threaten: 1.2,
                            },
                        },
                        zmheizhishenghaibu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊贰/audio:5',
                            trigger: {
                                player: ['loseHpBefore', 'linkBefore', 'turnOverAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h') > 1;
                            },
                            content() {
                                'step 0';
                                var next = player.chooseCardTarget({
                                    position: 'h',
                                    selectCard: [1, 2],
                                    filterTarget(card, player, target) {
                                        var trigger = _status.event.getTrigger();
                                        var player = _status.event.player;
                                        return target != player;
                                    },
                                    ai1(card) {
                                        return 6 - get.value(card);
                                    },
                                    ai2(target, onrewrite) {
                                        var att = get.attitude(_status.event.player, target);
                                        var trigger = _status.event.getTrigger();
                                        var player = _status.event.player;
                                        if (onrewrite == 'linkBefore') {
                                            if (player.isLinked() || target.isLinked()) {
                                                return false;
                                            } else {
                                                return get.effect(target, player) <= 0;
                                            }
                                        }
                                        if (onrewrite == 'turnOverAfter') {
                                            if (player.isTurnedOver() || target.isTurnedOver()) {
                                                return false;
                                            } else {
                                                return get.effect(target, player) < 0;
                                            }
                                        }
                                        return 1 - att;
                                    },
                                    prompt: get.prompt('zmheizhishenghaibu'),
                                });
                                ('step 1');
                                if (result.bool) {
                                    event.num = result.cards.length;
                                    var target = result.targets[0];
                                    player.discard(result.cards);
                                    var onrewrite = event.triggername;
                                    if (onrewrite == 'loseHpBefore') {
                                        var num = trigger.num;
                                        result.targets[0].loseHp(num);
                                        trigger.cancel();
                                    }
                                    if (onrewrite == 'turnOverAfter') {
                                        trigger.cancel();
                                        result.targets[0].turnOver();
                                    }
                                    if (onrewrite == 'linkBefore') {
                                        trigger.cancel();
                                        result.targets[0].link();
                                    }
                                    result.targets[0].chooseToDiscard(event.num, 'he', true);
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        zmheisexingqiwu: {
                            nobracket: true,
                            trigger: {
                                player: 'loseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.storage.zmt_np < 60) return false;
                                if (player.countCards('h')) return false;
                                return event.hs && event.hs.length;
                            },
                            content() {
                                'step 0';
                                var num = trigger.hs.length;
                                player
                                    .chooseTarget([1, Infinity], '可选择任意名其他角色本轮内所有手牌视为【毒】', function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.storage.zmt_np = 0;
                                    var t = Math.random();
                                    if (t <= 0.8) {
                                        game.playzm2('zmmolai');
                                    }
                                    if (t > 0.8) {
                                        ui.backgroundMusic.src = 'extension/综漫季刊贰/audio/zmmolai2.mp3';
                                    }
                                    game.mp422('zmmolai');
                                    player.line(result.targets);
                                    event.targets = result.targets;
                                    event.num2 = 0;
                                }
                                ('step 2');
                                if (result.bool && event.num2 < event.targets.length) {
                                    event.targets[event.num2].node.avatar.zm2t('武将牌特效莫莱');
                                    event.targets[event.num2].addTempSkill('zmheisexingqiwu_1', 'roundStart');
                                    event.num2++;
                                    event.redo();
                                }
                            },
                            group: ['zmthundun', 'zmtrenxing', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            subSkill: {
                                1: {
                                    mod: {
                                        cardname(card) {
                                            return 'du';
                                        },
                                    },
                                },
                            },
                        },
                        zmmoyinwuqi: {
                            init(player) {
                                player.storage.zmmoyinwuqi = [];
                            },
                            intro: {
                                content: 'cards',
                            },
                            nobracket: true,
                            trigger: {
                                player: 'loseEnd',
                            },
                            silent: true,
                            forced: true,
                            content() {
                                'step 0';
                                var card = trigger.cards;
                                for (var i = 0; i < card.length; i++) {
                                    if (!player.storage.zmmoyinwuqi.includes(card[i])) {
                                        player.storage.zmmoyinwuqi.push(card[i]);
                                        player.markSkill('zmmoyinwuqi');
                                    }
                                }
                            },
                            group: ['zmmoyinwuqi_2', 'zmmoyinwuqi_1', 'zmtgaodengliliang', 'zmtrenxing', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: ['gainEnd', 'drawEnd'],
                                    },
                                    check(event, player) {
                                        if (event.player.isTurnedOver()) return false;
                                        return get.attitude(player, event.player) <= 0;
                                    },
                                    prompt(event, player) {
                                        var str = '';
                                        str += `是否获得${get.translation(event.player)}的全部手牌？`;
                                        return str;
                                    },
                                    filter(event, player) {
                                        if (event.player == player) return false;
                                        if (!event.cards || !event.cards.length) return false;
                                        if (Array.isArray(event.cards))
                                            for (var i of event.cards) {
                                                if (player.storage.zmmoyinwuqi.includes(i)) {
                                                    return true;
                                                }
                                            }
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        player.line(trigger.player, 'fire');
                                        if (trigger.player.countCards('h') > 3) {
                                            game.playzm2('zmshizhilvzhe');
                                            game.mp422('zmshizhilvzhe');
                                        } else {
                                            game.playzm2(['zmmoyinwuqi_12', 'zmmoyinwuqi_13', 'zmmoyinwuqi_14', 'zmmoyinwuqi_12'].randomGet());
                                        }
                                        ('step 1');
                                        //      trigger.player.turnOver();
                                        player.gainPlayerCard(trigger.player, 'h', Infinity, true);
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    silent: true,
                                    forced: true,
                                    filter(event, player) {
                                        return (event.card && event.card.name == 'sha') || get.tag(event.card, 'draw');
                                    },
                                    content() {
                                        'step 0';
                                        if (!get.tag(trigger.card, 'draw')) {
                                            game.playzm2(['zmmoyinwuqi1', 'zmmoyinwuqi2', 'zmmoyinwuqi3', 'zmmoyinwuqi4', 'zmmoyinwuqi5', 'zmmoyinwuqi6'].randomGet());
                                        } else {
                                            game.playzm2(['zmmoyinwuqi21', 'zmmoyinwuqi22', 'zmmoyinwuqi23'].randomGet());
                                        }
                                    },
                                    popup: false,
                                },
                            },
                            ai: {
                                threaten: 2,
                                effect: {
                                    target(card, player, target, current) {
                                        if (card.name == 'jiedao' || card.name == 'shunshou' || card.name == 'shengdong') return [0, 0];
                                    },
                                },
                            },
                            popup: false,
                        },
                        zmwuxingzhishi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊贰/audio:5',
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                var num1 = Math.floor(event.num * 3);
                                if (num1 <= 1) num1 = 3;
                                if (player.storage.zmt_np < num1 * 30) return false;
                                return player.countCards('he') >= num1;
                            },
                            logTarget: 'source',
                            content() {
                                'step 0';
                                event.num = Math.floor(trigger.num * 3);
                                if (event.num <= 1) event.num = 3;
                                var next = player.chooseToDiscard(event.num, 'he', get.prompt('zmwuxingzhishi'));
                                next.set('ai', function (card) {
                                    return 7 - get.useful(card);
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.storage.zmt_np -= 30;
                                    player.draw(event.num);
                                    trigger.untrigger();
                                    trigger.finish();
                                }
                            },
                        },
                        zmwanxianglantu: {
                            nobracket: true,
                            enable: 'phaseUse',
                            charlotte: true,
                            onChooseToUse(event) {
                                if (game.online || event.type != 'phase') return;
                                var list = [];
                                event.player.getHistory('useCard', function (evt) {
                                    var name = evt.card.name;
                                    var type = get.type(name);
                                    if (type != 'basic' && type != 'trick') return;
                                    if (name == 'sha') {
                                        var nature = evt.card.nature;
                                        switch (nature) {
                                            case 'fire':
                                                name = 'huosha';
                                                break;
                                            case 'thunder':
                                                name = 'leisha';
                                                break;
                                            case 'kami':
                                                name = 'kamisha';
                                                break;
                                            case 'ice':
                                                name = 'icesha';
                                                break;
                                        }
                                    }
                                    list.add(type + '咕咕' + name);
                                });
                                event.set('zmwangxianglantu_list', list);
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0 && event.zmwangxianglantu_list && event.zmwangxianglantu_list.length;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    return ui.create.dialog('万象蓝图', [
                                        event.zmwangxianglantu_list.map(function (i) {
                                            return i.split('咕');
                                        }),
                                        'vcard',
                                    ]);
                                },
                                filter(button, player) {
                                    return lib.filter.cardEnabled(
                                        {
                                            name: button.link[2],
                                            nature: button.link[3],
                                        },
                                        player
                                    );
                                },
                                check(button) {
                                    return _status.event.player.getUseValue(
                                        {
                                            name: button.link[2],
                                            nature: button.link[3],
                                        },
                                        false
                                    );
                                },
                                backup(links, player) {
                                    return {
                                        popname: true,
                                        position: 'h',
                                        filterCard(card) {
                                            if (card.name == 'sha' && player.getCardUsable('sha') == 0) {
                                                return false;
                                            } else return lib.filter.cardEnabled(card);
                                        },
                                        ai1(card) {
                                            return 6 - get.value(card);
                                        },
                                        viewAs: {
                                            name: links[0][2],
                                            nature: links[0][3],
                                        },
                                        precontent() {
                                            game.playzm2(['zmwanxianglantu1', 'zmwanxianglantu2', 'zmwanxianglantu3', 'zmwanxianglantu4', 'zmwanxianglantu5', 'zmwanxianglantu6', 'zmwanxianglantu7', 'zmwanxianglantu8'].randomGet());
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张手牌当做' + get.translation(links[0][3] || '') + get.translation(links[0][2]) + '使用';
                                },
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        zmxukongzaowu: {
                            group: ['zmtjixie', 'zmtgaodengliliang', 'zmtrenxing', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            nobracket: true,
                            audio: 'ext:综漫季刊贰/audio:3',
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (player.storage.zmt_np < 20) return false;
                                var cards = player.getCards('h', function (card) {
                                    if (card.name == 'sha' && player.getCardUsable('sha') == 0) {
                                        return false;
                                    } else return lib.filter.cardEnabled(card);
                                });
                                if (!cards.length) {
                                    return true;
                                } else return false;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 20;
                                player.stat.push({ card: {}, skill: {} }); //QQQ
                                player.useCard({ name: 'wuzhong' }, player, false);
                            },
                            ai: {
                                order: 12,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        zmhongleiyishan: {
                            nobracket: true,
                            audio: 'ext:综漫季刊贰/audio:8',
                            trigger: {
                                player: 'useCardAfter',
                            },
                            filter(event, player) {
                                if (event.card && event.card.name == 'sha' && event.card.nature == 'thunder') {
                                    if (!player.storage.zmhongleiyishan) player.storage.zmhongleiyishan = [];
                                    return game.hasPlayer(function (current) {
                                        return player.storage.zmhongleiyishan.includes(current) && player.canUse('sha', current, false);
                                    });
                                } else {
                                    if (event.card && event.card.name == 'sha') {
                                        if (!player.storage.zmhongleiyishan) player.storage.zmhongleiyishan = [];
                                        return game.hasPlayer(function (current) {
                                            return !player.storage.zmhongleiyishan.includes(current) && player.canUse('sha', current, false);
                                        });
                                    }
                                }
                            },
                            usable: 1,
                            forced: true,
                            content() {
                                'step 0';
                                if (trigger.card.nature != 'thunder') {
                                    player.chooseTarget(get.prompt('zmhongleiyishan'), function (card, player, target) {
                                        return target != player && !player.storage.zmhongleiyishan.includes(target) && player.canUse('sha', target, false);
                                    }).ai = function (target) {
                                        return get.effect(target, { name: 'sha' }, player, player);
                                    };
                                } else {
                                    event.goto(3);
                                }
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    var cards = get.cards();
                                    player.showCards(cards, get.translation(player) + `对${get.translation(result.targets)}发动了【轰雷一闪】`);
                                    event.bool = get.color(cards[0]) == 'black';
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.bool) {
                                    player.useCard({ name: 'sha' }, event.target, false).animate = false;
                                    event.finish();
                                } else event.finish();
                                ('step 3');
                                player.chooseTarget(get.prompt('zmhongleiyishan'), function (card, player, target) {
                                    return player.storage.zmhongleiyishan.includes(target) && target != player && player.canUse('sha', target, false);
                                }).ai = function (target) {
                                    return get.effect(target, { name: 'sha', nature: 'thunder' }, player, player);
                                };
                                ('step 4');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    var cards = get.cards();
                                    player.showCards(cards, get.translation(player) + `对${get.translation(result.targets)}发动了【轰雷一闪】`);
                                    event.bool = get.color(cards[0]) == 'black';
                                } else {
                                    event.finish();
                                }
                                ('step 5');
                                if (event.bool) {
                                    game.playzm2('zmleizhilvzhe');
                                    game.mp422('zmleizhilvzhe');
                                    player.addTempSkill('zzhongji', { player: 'shaAfter' });
                                    player.useCard({ name: 'sha', nature: 'thunder' }, event.target, false).animate = false;
                                }
                            },
                            ai: {
                                effect: {
                                    player(card, player, target) {
                                        if (card.name == 'sha' && card.nature == 'thunder') return [1, 1];
                                    },
                                },
                            },
                            group: ['zmhongleiyishan_count1', 'zmhongleiyishan_count2'],
                            subSkill: {
                                count1: {
                                    trigger: {
                                        player: 'shaAfter',
                                    },
                                    silent: true,
                                    content() {
                                        if (!player.storage.zmhongleiyishan) player.storage.zmhongleiyishan = [];
                                        player.storage.zmhongleiyishan.add(trigger.target);
                                    },
                                    forced: true,
                                    popup: false,
                                },
                                count2: {
                                    trigger: {
                                        player: 'phaseAfter',
                                    },
                                    silent: true,
                                    content() {
                                        delete player.storage.zmhongleiyishan;
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                        },
                        zmyuejianjueying: {
                            nobracket: true,
                            audio: 'ext:综漫季刊贰/audio:3',
                            enable: 'chooseToUse',
                            position: 'h',
                            filterCard(card) {
                                return true;
                            },
                            viewAs: {
                                name: 'shan',
                            },
                            viewAsFilter(player) {
                                if (player.countCards('h') != 1) return false;
                            },
                            prompt: '可将一张手牌当做【闪】使用',
                            check() {
                                return 1;
                            },
                            ai: {
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (player.countCards('h') != 1) return false;
                                },
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'respondshan') && current < 0) return 0.6;
                                    },
                                },
                                basic: {
                                    useful: [7, 2],
                                    value: [7, 2],
                                },
                                result: {
                                    player: 1,
                                },
                                order: 3,
                            },
                            group: ['zmyuejianjueying_1', 'zmyuejianjueying_2', 'zmyuejianjueying2', 'zmtrenxing', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            subSkill: {
                                1: {
                                    enable: 'chooseToUse',
                                    viewAs: {
                                        name: 'shan',
                                    },
                                    selectCard: 0,
                                    filterCard() {
                                        return true;
                                    },
                                    precontent() {
                                        player.discard(player.getCards('j'));
                                        game.playzm2(['zmyuejianjueying1', 'zmyuejianjueying2', 'zmyuejianjueying3'].randomGet());
                                    },
                                    viewAsFilter(player) {
                                        if (player.countCards('j') != 1) return false;
                                    },
                                    prompt: '可将一张判定区内的牌当做【闪】使用',
                                    check() {
                                        return 1;
                                    },
                                    ai: {
                                        respondShan: true,
                                        skillTagFilter(player) {
                                            if (player.countCards('j') != 1) return false;
                                        },
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.tag(card, 'respondshan') && current < 0) return 0.6;
                                            },
                                        },
                                        basic: {
                                            useful: [7, 2],
                                            value: [7, 2],
                                        },
                                        result: {
                                            player: 1,
                                        },
                                        order: 3,
                                    },
                                },
                                2: {
                                    enable: 'chooseToUse',
                                    position: 'e',
                                    filterCard(card) {
                                        return true;
                                    },
                                    viewAs: {
                                        name: 'shan',
                                    },
                                    precontent() {
                                        //待改写法
                                        game.playzm2(['zmyuejianjueying1', 'zmyuejianjueying2', 'zmyuejianjueying3'].randomGet());
                                    },
                                    viewAsFilter(player) {
                                        if (player.countCards('e') != 1) return false;
                                    },
                                    prompt: '可将一张装备区内的牌当做【闪】使用',
                                    check() {
                                        return 1;
                                    },
                                    ai: {
                                        respondShan: true,
                                        skillTagFilter(player) {
                                            if (player.countCards('e') != 1) return false;
                                        },
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.tag(card, 'respondshan') && current < 0) return 0.6;
                                            },
                                        },
                                        basic: {
                                            useful: [7, 2],
                                            value: [7, 2],
                                        },
                                        result: {
                                            player: 1,
                                        },
                                        order: 3,
                                    },
                                },
                            },
                        },
                        zmyuejianjueying2: {
                            nobracket: true,
                            audio: 'ext:综漫季刊贰/audio:1',
                            trigger: {
                                global: 'shaMiss',
                            },
                            check(event, player) {
                                return true;
                            },
                            filter(event, player) {
                                if (player.storage.zmt_np < 30) return false;
                                return event.card && event.target == player && event.player != player;
                            },
                            prompt(event, player) {
                                return `是否获得${get.translation(event.card)}后将手牌中所有【杀】转化为【雷杀】？`;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 30;
                                player.gain(trigger.cards, 'gain2');
                                ('step 1');
                                for (var i = 0; i < player.getCards('h').length; i++) {
                                    game.broadcastAll(function (card) {
                                        if (card.name == 'sha') {
                                            card.init([card.suit, card.number, 'sha', 'thunder']);
                                        }
                                    }, player.getCards('h')[i]);
                                }
                            },
                        },
                        zmlvkongzhe: {
                            mod: {
                                aiOrder(player, card, num) {
                                    if (player.isPhaseUsing() && get.subtype(card) == 'equip1' && !get.cardtag(card, 'gifts')) {
                                        var range0 = player.getAttackRange();
                                        var range = 0;
                                        var info = get.info(card);
                                        if (info && info.distance && info.distance.attackFrom) {
                                            range -= info.distance.attackFrom;
                                        }
                                        if (player.getEquip(1)) {
                                            var num = 0;
                                            var info = get.info(player.getEquip(1));
                                            if (info && info.distance && info.distance.attackFrom) {
                                                num -= info.distance.attackFrom;
                                            }
                                            range0 -= num;
                                        }
                                        range0 += range;
                                        if (
                                            range0 == player.getHistory('useCard').length + player.getHistory('respond').length + 2 &&
                                            player.countCards('h', function (cardx) {
                                                return get.subtype(cardx) != 'equip1' && player.getUseValue(cardx) > 0;
                                            })
                                        )
                                            return num + 10;
                                    }
                                },
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊贰/audio:8',
                            trigger: {
                                player: ['useCardAfter', 'respondAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getHistory('useCard').length + player.getHistory('respond').length == player.getAttackRange();
                            },
                            content() {
                                player.draw(player.getHistory('useCard').length + player.getHistory('respond').length);
                            },
                            ai: {
                                threaten: 1.8,
                                effect: {
                                    target(card, player, target, current) {
                                        if (player != target || !player.isPhaseUsing()) return;
                                        if (get.subtype(card) == 'equip1' && !get.cardtag(card, 'gifts')) {
                                            var range0 = player.getAttackRange();
                                            var range = 0;
                                            var info = get.info(card);
                                            if (info && info.distance && info.distance.attackFrom) {
                                                range -= info.distance.attackFrom;
                                            }
                                            if (player.getEquip(1)) {
                                                var num = 0;
                                                var info = get.info(player.getEquip(1));
                                                if (info && info.distance && info.distance.attackFrom) {
                                                    num -= info.distance.attackFrom;
                                                }
                                                range0 -= num;
                                            }
                                            range0 += range;
                                            var delta = range0 - (player.getHistory('useCard').length + player.getHistory('respond').length);
                                            if (delta < 0) return;
                                            var num = player.countCards('h', function (card) {
                                                return (get.cardtag(card, 'gifts') || get.subtype(card) != 'equip1') && player.getUseValue(card) > 0;
                                            });
                                            if (delta == 2 && num > 0) return [1, 3];
                                            if (num >= delta) return 'zeroplayertarget';
                                        }
                                    },
                                },
                            },
                            group: ['zmlvkongzhe_1', 'zmtshikong', 'zmtrenxing', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊贰/audio:3',
                                    trigger: {
                                        player: ['chooseToUseBegin', 'chooseToRespondBegin'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.responded) return false;
                                        if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
                                        if (event.name != 'chooseToUse' && !lib.filter.cardRespondable({ name: 'shan' }, player, event)) return false;
                                        var respondTo = event.respondTo;
                                        var num = event.parent.card.number;
                                        if (num == undefined) return false;
                                        return event.parent.card.cards && !player.hasSkill('zmlvkongzhe_temp');
                                    },
                                    content() {
                                        'step 0';
                                        if (!player.hasSkill('zmlvkongzhe_temp')) {
                                            player.addTempSkill('zmlvkongzhe_temp', 'roundStart');
                                        }
                                        player.judge(function (card) {
                                            if (card.number > trigger.parent.card.number) return 2;
                                            return -2;
                                        });
                                        ('step 1');
                                        if (result.card.number > trigger.parent.card.number) {
                                            trigger.untrigger();
                                            trigger.responded = true;
                                            trigger.result = { bool: true, card: { name: 'shan' } };
                                        }
                                    },
                                    ai: {
                                        respondShan: true,
                                    },
                                },
                                temp: {},
                            },
                        },
                        zmxujiejianglin: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.storage.zmt_np < 60) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget([1, Infinity], '可选择任意名其他角色令其将手牌中带有伤害标签的牌对自己使用', function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.storage.zmt_np -= 60;
                                    game.playzm2('zmkongzhilvzhe');
                                    game.mp422('zmkongzhilvzhe');
                                    player.addSkill('zmxujiejianglin_1');
                                    player.line(result.targets);
                                    event.targets = result.targets;
                                    event.targets.sort(lib.sort.seat);
                                    event.targets2 = game.filterPlayer(function (current) {
                                        return !result.targets.includes(current);
                                    });
                                } else event.finish();
                                ('step 2');
                                if (event.targets && event.targets.length) {
                                    var target = event.targets.shift();
                                    for (var i = 0; i < target.getCards('h').length; i++) {
                                        game.broadcastAll(function (card) {
                                            if (get.tag(card, 'damage') /*&&event.targets[event.num2].canUse(card,event.targets[event.num2],false)*/) {
                                                target.useCard(card, target);
                                            }
                                        }, target.getCards('h')[i]);
                                    }
                                    event.redo();
                                }
                                ('step 3');
                                for (var i of event.targets2) i.addSkill('zmxujiejianglin_2');
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'damageBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmxujiejianglin_1');
                                        event.num = 0;
                                        event.targets = game.filterPlayer(function (current) {
                                            return current.hasSkill('zmxujiejianglin_2');
                                        });
                                        event.targets.sort(lib.sort.seat);
                                        ('step 1');
                                        if (event.num < event.targets.length) {
                                            event.targets[event.num].removeSkill('zmxujiejianglin_2');
                                            event.num++;
                                            event.goto(1);
                                        }
                                    },
                                },
                                2: {
                                    name: '时空禁断',
                                    mark: true,
                                    marktext: '空',
                                    intro: {
                                        content(storage) {
                                            return '空之律者与你之外的角色无法响应你使用的牌';
                                        },
                                    },
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return game.players.length > 1;
                                    },
                                    content() {
                                        trigger.directHit.addArray(
                                            game.filterPlayer(function (current) {
                                                return current != player && !current.hasSkill('zmxujiejianglin');
                                            })
                                        );
                                    },
                                },
                                3: {},
                            },
                        },
                        zmdiqishengdian: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            init(player) {
                                player.storage.zmdiqishengdian = [];
                            },
                            intro: {
                                content(storage) {
                                    if (storage) {
                                        return `持有【${get.translation(storage)}】的武器效果`;
                                    }
                                },
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.num1 = 0;
                                var list1 = [];
                                var list = get.inpile('equip');
                                for (var i = 0; i < list.length; i++) {
                                    var card = { name: list[i] };
                                    var info = get.info(card);
                                    if (info.subtype == 'equip1' && info.skills) {
                                        list1.push(list[i]);
                                    }
                                }
                                for (var i = 0; i < list1.length; i++) {
                                    list1[i] = ['武器牌', '', list1[i]];
                                }
                                if (list1.length) {
                                    var num0 = player.storage.zmdiqishengdian_1;
                                    var dialog = ui.create.dialog(`获得一张武器牌的技能直到下回合开始,当前累计发动次数为${get.translation(num0)}.`, [list1, 'vcard'], 'hidden');
                                    player.chooseButton(dialog).set('ai', function (button) {
                                        if (player.storage.zmdiqishengdian_1 >= 6 && player.hp <= 1 && player.countCards('h', { name: 'jiu' }) == 0 && player.countCards('h', { name: 'tao' }) == 0) return 0;
                                        if (player.storage.zmdiqishengdian_1 <= player.countCards('h') && player.storage.zmdiqishengdian_1 >= 5) return 0;
                                        var card = { name: button.link[2] };
                                        return get.equipValue(card);
                                        //  var name=button.link[2];
                                        //return Math.random();
                                        //  return get.equipValue(card);
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                if (result.bool) {
                                    event.num1 += 1;
                                    var num1 = player.countCards('h');
                                    var card = { name: result.buttons[0].link[2] };
                                    var name = result.buttons[0].link[2];
                                    player.storage.zmdiqishengdian.push(name);
                                    var info = get.info(card);
                                    if (info.skills) {
                                        game.log(player, '获得了', get.translation(name), '的技能');
                                        player.addAdditionalSkill('zmdiqishengdian', info.skills);
                                        player.markSkill('zmdiqishengdian');
                                    }
                                }
                                ('step 2');
                                if (result.bool && event.num1 >= 1) {
                                    var num1 = player.countCards('h');
                                    if (player.storage.zmdiqishengdian_1 <= 5) {
                                        player.storage.zmdiqishengdian_1 += 1;
                                        var num0 = player.storage.zmdiqishengdian_1;
                                        if (num0 >= 1 && num0 <= 3) {
                                            game.playzm2(['zmdiqishengdian11', 'zmdiqishengdian12', 'zmdiqishengdian13', 'zmdiqishengdian14', 'zmdiqishengdian15', 'zmdiqishengdian16'].randomGet());
                                        }
                                        if (num0 == 4) {
                                            game.playzm2(['zmdiqishengdian41', 'zmdiqishengdian42'].randomGet());
                                        }
                                        if (num0 == 5) {
                                            game.playzm2(['zmdiqishengdian51', 'zmdiqishengdian52'].randomGet());
                                        }
                                        if (num0 == 6) {
                                            game.playzm2(['zmdiqishengdian61', 'zmdiqishengdian62'].randomGet());
                                        }
                                        if (num0 > num1) {
                                            player.draw(num0 - num1);
                                        }
                                    } else {
                                        game.playzm2(['zmdiqishengdian71', 'zmdiqishengdian72'].randomGet());
                                        player.storage.zmt_np = 0;
                                        player.addTempSkill('zmdiqishengdian_2');
                                        if (7 > num1) {
                                            player.draw(7 - num1);
                                        }
                                        player.loseHp();
                                        player.storage.zmdiqishengdian_1 = 0;
                                    }
                                }
                            },
                            group: ['zmdiqishengdian_1'],
                            subSkill: {
                                1: {
                                    init(player) {
                                        player.storage.zmdiqishengdian_1 = 0;
                                    },
                                    trigger: {
                                        player: 'phaseBefore',
                                    },
                                    _priority: 998,
                                    forced: true,
                                    content() {
                                        player.removeAdditionalSkill('zmdiqishengdian');
                                        player.unmarkSkill('zmdiqishengdian');
                                        player.storage.zmdiqishengdian = [];
                                    },
                                },
                                2: {
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha' && event.parent.name != '_lianhuan' && event.parent.name != '_lianhuan2';
                                    },
                                    content() {
                                        'step 0';
                                        game.playzm2(['zmxiyeer1', 'zmxiyeer2'].randomGet());
                                        game.mp422('zmxiyeer');
                                        player.removeSkill('zmdiqishengdian_2');
                                        trigger.num += 1;
                                        ('step 1');
                                        if (trigger.player.hp < 0) {
                                            game.playzm2('zmxiyeer0');
                                            trigger.player.clearSkills();
                                        }
                                    },
                                    popup: false,
                                },
                            },
                        },
                        zmmaizangjiguan: {
                            mod: {
                                globalFrom(from, to, current) {
                                    if (from.storage.zmmaizangjiguan && from.storage.zmmaizangjiguan > 0 && _status.currentPhase == from) {
                                        return current - from.storage.zmmaizangjiguan;
                                    }
                                    return current;
                                },
                            },
                            nobracket: true,
                            trigger: {
                                player: 'useCardAfter',
                            },
                            init(player) {
                                player.storage.zmmaizangjiguan = 0;
                            },
                            filter(event, player) {
                                if (_status.currentPhase != player) return false;
                                return get.type(event.card) == 'trick';
                            },
                            forced: true,
                            popup: false,
                            content() {
                                player.storage.zmmaizangjiguan++;
                                player.markSkill('zmmaizangjiguan');
                            },
                            group: ['zmtgaodengliliang', 'zmmaizangjiguan_1', 'zmtrenxing', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseAfter',
                                    },
                                    forced: true,
                                    popup: false,
                                    content() {
                                        player.storage.zmmaizangjiguan = 0;
                                        player.unmarkSkill('zmmaizangjiguan');
                                    },
                                },
                            },
                        },
                        zmkongxiangjuxianhua: {
                            nobracket: true,
                            audio: 'ext:综漫季刊贰/audio:12',
                            trigger: {
                                global: ['useCard', 'respond'],
                            },
                            usable: 1,
                            forced: true,
                            filter(event, player) {
                                if (player.hasSkill('zmkongxiangjuxianhua_temp')) return false;
                                return Array.isArray(event.respondTo) && event.respondTo[0] != event.player && [event.respondTo[0], event.player].includes(player);
                            },
                            content() {
                                'step 0';
                                if (trigger.respondTo[0] == player) {
                                    //目标响应
                                    var cards = player.getCards('h'),
                                        list = [];
                                    if (Array.isArray(cards))
                                        for (var i of cards) {
                                            list.push(i);
                                        }
                                    var cards1 = trigger.player.getCards('h');
                                    for (var i = 0; i < cards1.length; i++) {
                                        list.push(cards1[i]);
                                    }
                                } else {
                                    event.mark = trigger.respondTo[0];
                                    var cards = player.getCards('h'),
                                        list = [];
                                    if (Array.isArray(cards))
                                        for (var i of cards) {
                                            list.push(i);
                                        }
                                    var cards1 = event.mark.getCards('h');
                                    for (var i = 0; i < cards1.length; i++) {
                                        list.push(cards1[i]);
                                    }
                                }
                                event.list = list;
                                ('step 1');
                                if (event.list.length) {
                                    var next = player.chooseCardButton('请选择需要复制的牌', event.list);
                                    next.set('filterButton', function (button) {
                                        return true;
                                    });
                                    next.set('ai', function (button) {
                                        return get.value(button.link);
                                        //  return get.buttonValue(button);
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    if (!player.hasSkill('zmkongxiangjuxianhua_temp')) {
                                        player.addTempSkill('zmkongxiangjuxianhua_temp', 'roundStart');
                                    }
                                    player.gain(game.createCard(result.links[0]));
                                    player.$draw();
                                } else {
                                    event.finish();
                                }
                            },
                            subSkill: {
                                temp: {},
                            },
                        },
                        zmyuezhixueji: {
                            group: ['zmtsuzheng', 'zmtyuansu', 'zmyuezhixueji_1', 'zmtrenxing', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            nobracket: true,
                            audio: 'ext:综漫季刊贰/audio:8',
                            enable: 'chooseToUse',
                            filterCard(card) {
                                return true;
                            },
                            viewAsFilter(player) {
                                return player.num('h') > 0;
                            },
                            viewAs: {
                                name: 'sha',
                            },
                            prompt: '将一张手牌当做【杀】使用',
                            check(card) {
                                return 8 - get.value(card);
                            },
                            threaten: 1.2,
                            ai: {
                                playernowuxie: true,
                                basic: {
                                    useful: [6, 4],
                                    value: [6, 4],
                                },
                                result: {
                                    player: 1,
                                    target(player, target) {
                                        if (player.hasSkill('jiu') && !target.num('e', 'baiyin')) {
                                            if (get.attitude(player, target) > 0) {
                                                return -6;
                                            } else {
                                                return -3;
                                            }
                                        }
                                        return -1.5;
                                    },
                                },
                                expose: 0.2,
                                order: 3,
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
                                canLink(player, target, card) {
                                    if (!target.isLinked() && !player.hasSkill('wutiesuolian_skill')) return false;
                                    if (
                                        target.mayHaveShan() &&
                                        !player.hasSkillTag(
                                            'directHit_ai',
                                            true,
                                            {
                                                target: target,
                                                card: card,
                                            },
                                            true
                                        )
                                    )
                                        return false;
                                    if (player.hasSkill('jueqing') || target.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                    return true;
                                },
                                yingbian(card, player, targets, viewer) {
                                    if (get.attitude(viewer, player) <= 0) return 0;
                                    var base = 0,
                                        hit = false;
                                    if (get.cardtag(card, 'yingbian_hit')) {
                                        hit = true;
                                        if (
                                            targets.filter(function (target) {
                                                return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
                                            })
                                        )
                                            base += 5;
                                    }
                                    if (get.cardtag(card, 'yingbian_all')) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                                            })
                                        )
                                            base += 5;
                                    }
                                    if (get.cardtag(card, 'yingbian_damage')) {
                                        if (
                                            targets.filter(function (target) {
                                                return (
                                                    get.attitude(player, target) < 0 &&
                                                    (hit ||
                                                        !target.mayHaveShan() ||
                                                        player.hasSkillTag(
                                                            'directHit_ai',
                                                            true,
                                                            {
                                                                target: target,
                                                                card: card,
                                                            },
                                                            true
                                                        )) &&
                                                    !target.hasSkillTag('filterDamage', null, {
                                                        player: player,
                                                        card: card,
                                                        jiu: true,
                                                    })
                                                );
                                            })
                                        )
                                            base += 5;
                                    }
                                    return base;
                                },
                            },
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊贰/audio:1',
                                    nobracket: true,
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) <= 0;
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha' && player.storage.zmt_np >= 50;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmt_np -= 50;
                                        game.mp422('zmaierkuite');
                                        trigger.num += 1;
                                        ('step 1');
                                        player.recover();
                                    },
                                },
                            },
                        },
                        zmqianjibian: {
                            group: ['zmtjixie', 'zmtrenxing', 'zmt_np', 'zmt_np1', 'zmt_np2'],
                            nobracket: true,
                            audio: 'ext:综漫季刊贰/audio:5',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                if (player.storage.zmt_np < 15) return false;
                                return game.hasPlayer(function (current) {
                                    return player != current && get.distance(player, current, 'attack') <= 1 && current.countCards('e');
                                });
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget([1, Infinity], '选择攻击范围内任意名装备区内有牌的其他角色令他们收回所有装备牌', function (card, player, target) {
                                        return player != target && get.distance(player, target, 'attack') <= 1 && target.countCards('e') > 0;
                                    })
                                    .set('ai', function (target) {
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.storage.zmt_np -= 15;
                                    player.line(result.targets);
                                    event.targets = result.targets;
                                    event.num2 = 0;
                                }
                                ('step 2');
                                if (result.bool && event.num2 < event.targets.length) {
                                    var cards = event.targets[event.num2].getCards('e');
                                    if (Array.isArray(cards))
                                        for (var i of cards) {
                                            var skills = lib.card[i.name].skills;
                                            if (skills != undefined && i.name != 'muniu') {
                                                game.log(player, '获得了', ` ${get.translation(i)} 的装备技能`);
                                                for (var j = 0; j < skills.length; j++) {
                                                    player.addTempSkill(skills[j], { player: 'phaseBefore' });
                                                }
                                            }
                                        }
                                    event.targets[event.num2].gain(cards, 'gain2');
                                    event.num2++;
                                    event.redo();
                                }
                            },
                        },
                        zmxingshenqi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊贰/audio:4',
                            trigger: {
                                source: 'damageBegin',
                            },
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('e');
                            },
                            forced: true,
                            content() {
                                var num = player.countCards('e');
                                player.draw(num);
                            },
                        },
                        zmjingu: {
                            mark: true,
                            markimage: 'extension/综漫季刊贰/标记禁锢.png',
                            intro: {
                                content: '无法使用/打出/基本牌',
                            },
                            mod: {
                                cardEnabled(card, player) {
                                    if (get.type(card, 'basic')) return false;
                                },
                                cardUsable(card, player) {
                                    if (get.type(card, 'basic')) return false;
                                },
                                cardRespondable(card, player) {
                                    if (get.type(card, 'basic')) return false;
                                },
                                cardzm2vable(card, player) {
                                    if (get.type(card, 'basic')) return false;
                                },
                            },
                        },
                        zmzhongji: {
                            mark: true,
                            markimage: 'extension/综漫季刊贰/标记重击.png',
                            intro: {
                                content(storage) {
                                    return '伤害增幅状态中';
                                },
                            },
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin1',
                            },
                            silent: true,
                            forced: true,
                            filter(event, player) {
                                return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && event.parent.name != '_lianhuan' && event.parent.name != '_lianhuan2';
                            },
                            content() {
                                player.removeSkill('zmzhongji');
                                trigger.num += 1;
                            },
                            popup: false,
                        },
                        zzhongji: {
                            mark: true,
                            markimage: 'extension/综漫季刊贰/标记重击.png',
                            intro: {
                                content(storage) {
                                    return '伤害增幅状态中';
                                },
                            },
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin1',
                            },
                            silent: true,
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.parent.name != '_lianhuan' && event.parent.name != '_lianhuan2';
                            },
                            content() {
                                player.removeSkill('zmzhongji');
                                trigger.num += 1;
                            },
                            popup: false,
                        },
                        zmtdongshang: {
                            mark: true,
                            markimage: 'extension/综漫季刊贰/标记冻伤.png',
                            intro: {
                                content(storage) {
                                    return '受到非火焰伤害时有概率使伤害量+1且手牌上限-1.';
                                },
                            },
                            audio: 'ext:综漫季刊贰/audio:1',
                            nobracket: true,
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.nature != 'fire' && Math.random() <= 0.4;
                            },
                            content() {
                                trigger.num++;
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num - 1;
                                },
                            },
                        },
                        zxianfengyunti: {
                            nobracket: true,
                            trigger: {
                                player: ['damageBefore', 'loseHpBefore', 'loseMaxHpBefore', 'turnOverBegin', 'linkBefore'],
                            },
                            filter(event, player) {
                                return true;
                            },
                            forced: true,
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                            },
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (get.type(card) == 'delay') {
                                        return false;
                                    }
                                },
                            },
                        },
                        zmmiluan: {
                            mark: true,
                            markimage: 'extension/综漫季刊贰/标记迷乱.png',
                            intro: {
                                content(storage) {
                                    return '此状态下使用的牌将指向错误目标';
                                },
                            },
                            nobracket: true,
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return (
                                    event.targets &&
                                    event.targets.length == 1 &&
                                    game.hasPlayer(function (current) {
                                        return current != event.targets[0] && lib.filter.targetEnabled2(event.card, player, current);
                                    })
                                );
                            },
                            content() {
                                'step 0';
                                'step 1';
                                var list = game.filterPlayer(function (current) {
                                    return current != trigger.targets[0] && lib.filter.targetEnabled2(trigger.card, player, current);
                                });
                                if (list.length) {
                                    var target = list.randomGet();
                                    trigger.targets[0] = target;
                                    player.line(target, 'green');
                                }
                                ('step 2');
                                var jm = game.findPlayer(function (current) {
                                    return current.name == 'zmshenjiamo';
                                });
                                if (jm.hp <= jm.maxHp) {
                                    var mubiao = jm;
                                    game.playzm2(['zmwanyuyingti1', 'zmwanyuyingti2'].randomGet());
                                }
                                var ssy = game.findPlayer(function (current) {
                                    return current.name == 'zmshenshashengyuanqihuang';
                                });
                                if (ssy.hp <= ssy.maxHp) {
                                    var mubiao = ssy;
                                    game.playzm2('zmmiluan1');
                                    player.storage.zmt_np -= 10;
                                    ssy.storage.zmt_np += 10;
                                }
                            },
                        },
                        zmchusha1: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return 2;
                                },
                            },
                        },
                        zmchusha0: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                            },
                        },
                        zmt_np: {
                            init(player) {
                                player.storage.zmt_np = 0;
                            },
                            trigger: {
                                global: ['gameStart'],
                            },
                            firstDo: true,
                            silent: true,
                            forced: true,
                            fixed: true,
                            superCharlotte: true,
                            charlotte: true,
                            content() {
                                //能量定位
                                'step 0';
                                player.storage.zmt_np2 += 1;
                                game.broadcastAll(function (player) {
                                    _status.zmt_np = {};
                                    var np = ui.create.div('');
                                    np.style.width = 'calc(5%)';
                                    np.style.height = 'calc(42.5%)';
                                    np.style.left = 'calc(35%)';
                                    np.style.top = 'calc(-25%)';
                                    np.style['background-image'] = 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2))';
                                    np.style['box-shadow'] = 'rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
                                    np.style.borderRadius = '9px';
                                    np.style.transform = 'rotate(-90deg)';
                                    player.appendChild(np);
                                    _status.zmt_np.np = np;
                                    var np1 = ui.create.div('');
                                    np1.style.width = 'calc(100%)';
                                    setInterval(function () {
                                        var p = player.storage.zmt_np;
                                        if (p > 100) p = 100;
                                        np1.style.height = `calc(${p}%)`;
                                    }, 500);
                                    np1.style.left = '0px';
                                    np1.style.top = '0px';
                                    np1.style.borderRadius = '8px';
                                    setInterval(function () {
                                        if (player.storage.zmt_np < 70) {
                                            np1.setBackgroundImage('extension/综漫季刊贰/np.png');
                                        }
                                        if (player.storage.zmt_np > 70 && player.storage.zmt_np < 100) {
                                            np1.setBackgroundImage('extension/综漫季刊贰/np0.png');
                                        }
                                        if (player.storage.zmt_np >= 100 && player.storage.zmt_np < 140) {
                                            np1.setBackgroundImage('extension/综漫季刊贰/np00.png');
                                        }
                                        if (player.storage.zmt_np >= 140) {
                                            np1.setBackgroundImage('extension/综漫季刊贰/np000.png');
                                        }
                                    }, 500);
                                    np1.style.backgroundSize = '100% 80px';
                                    np.appendChild(np1);
                                    _status.zmt_np.np1 = np1;
                                    var np2 = ui.create.div('');
                                    np2.style.width = 'calc(100%)';
                                    np2.style.height = '8px';
                                    np2.style.left = '0px';
                                    np2.style.top = 'calc(50% - 4px)';
                                    np2.style['white-space'] = 'nowrap';
                                    np2.style['font-size'] = '10px';
                                    np2.style['text-align'] = 'center';
                                    np2.style['font-family'] = "'STXinwei','xinwei'";
                                    np2.style.transform = 'rotate(90deg)';
                                    np2.style.borderRadius = '8px';
                                    np.appendChild(np2);
                                    setInterval(function () {
                                        np2.innerHTML = player.storage.zmt_np;
                                    }, 100);
                                    _status.zmt_np.np2 = np2;
                                }, player);
                            },
                            popup: false,
                        },
                        zmt_np1: {
                            trigger: {
                                player: ['gainAfter', 'phaseDrawEnd'],
                            },
                            silent: true,
                            forced: true,
                            fixed: true,
                            superCharlotte: true,
                            charlotte: true,
                            filter(event, player, name) {
                                if (name == 'phaseDrawEnd') {
                                    return player.storage.zmt_np < 120;
                                } else {
                                    return _status.currentPhase != player && event.cards && event.cards.length;
                                }
                            },
                            content() {
                                if (event.triggername == 'phaseDrawEnd') {
                                    var num1 = trigger.num;
                                    player.storage.zmt_np += num1 * 5;
                                    if (get.mode() == 'guozhan') {
                                        var num1 = trigger.num;
                                        player.storage.zmt_np += num1 * 5;
                                    }
                                }
                                if (trigger.parent.parent.name != 'phaseDraw' && _status.currentPhase != player) {
                                    player.storage.zmt_np += 5;
                                    if (get.mode() == 'guozhan') {
                                        player.storage.zmt_np += 5;
                                    }
                                }
                            },
                            popup: false,
                        },
                        zmt_np2: {
                            init(player) {
                                player.storage.zmt_np2 = 0;
                            },
                            trigger: {
                                global: ['phaseBefore'],
                            },
                            firstDo: true,
                            silent: true,
                            forced: true,
                            fixed: true,
                            superCharlotte: true,
                            charlotte: true,
                            filter(event, player) {
                                return player.storage.zmt_np2 <= 0;
                            },
                            content() {
                                'step 0';
                                if (player.storage.zmt_np2 <= 0 && !player.hasSkill('subplayer')) {
                                    player.storage.zmt_np2 += 1;
                                    game.broadcastAll(function (player) {
                                        _status.zmt_np = {};
                                        var np = ui.create.div('');
                                        np.style.width = 'calc(5%)';
                                        np.style.height = 'calc(42.5%)';
                                        np.style.left = 'calc(35%)';
                                        np.style.top = 'calc(-25%)';
                                        np.style['background-image'] = 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2))';
                                        np.style['box-shadow'] = 'rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
                                        np.style.borderRadius = '9px';
                                        np.style.transform = 'rotate(-90deg)';
                                        player.appendChild(np);
                                        _status.zmt_np.np = np;
                                        var np1 = ui.create.div('');
                                        np1.style.width = 'calc(100%)';
                                        setInterval(function () {
                                            var p = player.storage.zmt_np;
                                            if (p > 100) p = 100;
                                            np1.style.height = `calc(${p}%)`;
                                        }, 500);
                                        np1.style.left = '0px';
                                        np1.style.top = '0px';
                                        np1.style.borderRadius = '8px';
                                        setInterval(function () {
                                            if (player.storage.zmt_np < 70) {
                                                np1.setBackgroundImage('extension/综漫季刊贰/np.png');
                                            }
                                            if (player.storage.zmt_np > 70 && player.storage.zmt_np < 100) {
                                                np1.setBackgroundImage('extension/综漫季刊贰/np0.png');
                                            }
                                            if (player.storage.zmt_np >= 100 && player.storage.zmt_np < 140) {
                                                np1.setBackgroundImage('extension/综漫季刊贰/np00.png');
                                            }
                                            if (player.storage.zmt_np >= 140) {
                                                np1.setBackgroundImage('extension/综漫季刊贰/np000.png');
                                            }
                                        }, 500);
                                        np1.style.backgroundSize = '100% 80px';
                                        np.appendChild(np1);
                                        _status.zmt_np.np1 = np1;
                                        var np2 = ui.create.div('');
                                        np2.style.width = 'calc(100%)';
                                        np2.style.height = '8px';
                                        np2.style.left = '0px';
                                        np2.style.top = 'calc(50% - 4px)';
                                        np2.style['white-space'] = 'nowrap';
                                        np2.style['font-size'] = '10px';
                                        np2.style['text-align'] = 'center';
                                        np2.style['font-family'] = "'STXinwei','xinwei'";
                                        np2.style.transform = 'rotate(90deg)';
                                        np2.style.borderRadius = '8px';
                                        np.appendChild(np2);
                                        setInterval(function () {
                                            np2.innerHTML = player.storage.zmt_np;
                                        }, 100);
                                        _status.zmt_np.np2 = np2;
                                    }, player);
                                }
                            },
                            popup: false,
                        },
                        zmtmoxing: {},
                        zmtsuzheng: {},
                        zmtjuda: {
                            mod: {
                                globalTo(from, to, distance) {
                                    return distance - 1;
                                },
                            },
                        },
                        zmtgaodengshengming: {},
                        zmtlongxue: {},
                        zmtsiling: {},
                        zmtyeshou: {},
                        zmtmoshou: {},
                        zmtzaowu: {},
                        zmtyuansu: {},
                        zmthundun: {},
                        zmtshikong: {},
                        zmtshangweizhe: {},
                        zmtlongzu: {},
                        zmtjixie: {},
                        zmtgaodengliliang: {},
                        zmtchaojuda: {
                            mod: {
                                globalTo(from, to, distance) {
                                    return distance - 2;
                                },
                            },
                        },
                        zmtrenxing: {},
                        zmtyaren: {},
                        zmtleiren: {},
                        zmtshenzu: {},
                        zmtshenxing: {},
                        zmtshensheng: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            popup: false,
                            forced: true,
                            filter(event, player) {
                                return event.num >= event.player.hp;
                            },
                            content() {
                                if (trigger.player.hasSkill('zmtmoxing') || trigger.player.hasSkill('zmtsiling')) {
                                    trigger.num += 1;
                                }
                            },
                        },
                    },
                };
                lib.config.all.characters.add('综漫季刊贰');
                lib.config.characters.add('综漫季刊贰');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:综漫季刊贰/image/${i}.jpg`)
                }
                lib.translate['综漫季刊贰_character_config'] = `综漫季刊贰`;
                return QQQ;
            });
        },
        config: {
            zmthelp: {
                name: '名词释义',
                init: '1',
                item: {
                    1: '查看',
                    2: '✪关于职阶✪:是作为对众多世界观下英灵统合分类进行的规则标准.根据武将原作中的能力、经历、职业、功法等划分出不同职阶.',
                    3: '英灵根据特性被赋予适合的职阶.职阶间不存在克制.【Dominator】作为BOSS职阶强度较高.',
                    4: '✪关于宝具✪:每个英灵独有的特殊能力,可在武将信息栏查看.',
                    5: '宝具是作为英灵原有的、最独特的能力与成就的具现化,可以是武器、法术、异能、规则等等..各有不同的运行模式.',
                    6: '不同宝具与英灵之间不存在平衡.原作中过强的能力套入规则后会有限制,较弱的能力略有提升.',
                    7: '✪职阶一览✪',
                    8: '【zm2ber——剑士】 符合的英灵自然要有与剑士相称的实力与传说,亦被要求有较高的能力值与剑的理解.',
                    9: '【Archer——弓兵】 要求具有强力射击类型武器,或者与射击武器有关联的特殊能力与相应的成就事迹.',
                    10: '【Lancer——枪兵】 符合条件是枪戟类长兵器达人或是宝具能力上与有其相关概念的英雄.',
                    11: '【Fighter——格斗家】 要求是使用自身作为武器搏杀的英雄,符合的英灵自然皆是格斗高手.',
                    12: '【Rider——骑兵】 符合骑乘、御使某概念并以此成名的英雄.其对象包括并不限于宝物、坐骑、部队等等.',
                    13: '【Assassin——暗匿者】 原本是杀手刺客这样的暗匿者身份才能符合的职阶,要求具备强大刺客应有的能力与事迹.',
                    14: '【Caster——施法者】 合适条件也只有法术能力达至最高等级的大法师们.相应的符合的英灵往往近战防御能力都较低.',
                    15: '【Smability——异能者】 并非通过后天修行得来,凭借先天或外物刺激觉醒特殊能力并以此成名的强大英灵方可被授予此职阶.',
                    16: '【Mechanic——机械师】 原本是科学家或高位机械侧造物可符合该职阶,亦被要求其能力核心是机械侧并拥有相当的机械造诣.',
                    17: '【Berserker——狂战士】 有[发疯或丧失理性的故事/精神构成类似动物或机械/足以扭曲人格程度的强烈的执着]这样的强大英雄可获得该职阶.',
                    18: '【Guardian——守护者】 限定具备自我牺牲精神并拥有相应光辉事迹的英雄才可被赋予此职阶.',
                    19: '【Taoist——道门】 临时职阶 身份限定为与道教有关的英灵才能获得此职阶,要求拥有高位的道家地位/法术/修为/造诣.',
                    20: '【Buddhist——禅宗】 临时职阶 身份限定为与佛教或印度教有关的英灵才能获得此职阶,要求拥有高位的佛门地位/法术/修为/造诣.',
                    21: '【Undead——不眠者】 生前就接触死亡并取得了非人身份与不死性的英雄或是以死者身份活动并成为英雄的特殊英灵可获得该职阶.',
                    22: '【Foreigner——降临者】 与古神或外神建立联系并受到侵染,将权能的先兆寄宿在身上并加以利用成名的英灵所被赋予的职阶.',
                    23: '【Comedian——谐星】 临时职阶 限定自搞笑世界观作品被召唤的英灵,该职阶自动覆盖英灵本身能力所被赋予的职阶.',
                    24: '【Dominator——上位者】 要求最苛刻的职阶,需要英灵本身是原世界观中的上位者且具备规则级的权能.',
                    25: '【Assistant——搭档】 已存在英灵所制造/转化/召唤而来的专属衍生角色,及一些被选中的高适性角色会被赋予此职阶.',
                    26: '✪关于玉碟✪:每场战斗胜利后玩家可获得不等数量的玉碟,保底掉落1玉碟.',
                    27: '✪玉碟召唤✪:每3玉碟可进行1次玉碟召唤,或使用30玉碟进行10次召唤.根据召唤结果可获得各职阶中的隐藏英灵或解锁可升级的搭档角色.',
                    28: '✪关于卡池✪:评级越高的角色被抽到的概率越低;抽卡时可能抽到已有的角色.',
                    29: '✪隐藏英灵✪:通过玉碟召唤/兑换获得后才会出现在游戏中的特殊武将.',
                    30: '✪关于搭档✪:搭档角色只能通过玉碟召唤解锁,按强度分为1到5星,每1星代表搭档拥有1个技能或一种效果.',
                    31: '✪搭档特性✪:玩家开始游戏时可选择一名已解锁的搭档角色加入游戏;搭档不直接进行游戏,也无法被攻击.玩家可以点击桌面上的搭档图标可发动技能;搭档技冷却时间统一为三分钟.',
                    32: '✪搭档等级✪:搭档每使用一次技能都会获得100经验,随等级提升可解锁新的能力.',
                    33: '✪关于能量✪:每当角色进行摸牌阶段可根据基础摸牌数每张充能5点,在自己的回合外不因摸牌阶段获得牌时获得5点能量.',
                    34: '国战模式下能量获取翻倍.',
                    35: '某些角色可通过特有技能额外获得能量或赋予夺取能量.',
                    36: '能量的获取上限为120点,超过该数字则无法从摸牌阶段获取能量.',
                    37: '储存的能量是释放某些强力技能的必要条件.',
                },
            },
            zmthelp2: {
                name: '属性设定',
                init: '1',
                item: {
                    1: '查看',
                    2: '✪关于属性✪:英灵们根据特性具备不同的属性,这些属性有些与技能效果相关,有些则自带一些效果.',
                    3: '✪属性一览✪',
                    4: '【人形】 身体结构形态与要害接近灵掌人科,许多以此为假想敌锻炼的技术会限定对人形属性特攻.',
                    5: '【类人】 大体与人形有关,但拥有相当部分不属于人形的身体结构,因而不可与人形相并列.',
                    6: '【野兽】 用于与人形大相径庭的身体结构,涵盖众多生命形式.',
                    7: '【造物】 一般指被制造的非生命体,如物品道具等持有的属性..',
                    8: '【机械】 造物中分离出的一类,特指具备相当机械结构者持有的属性..',
                    9: '【死灵】 灵体,已死之物或与之类似的特性会被认定为此属性.',
                    10: '【龙血】 拥有龙类血脉的混血种或浅龙类概念者持有的属性.',
                    11: '【龙族】 纯血或高度纯血的龙族与概念上的龙族持有的属性.',
                    12: '【元素】 元素生命,或与自然力量深度相关者持有的属性..',
                    13: '【神性】 与神道/愿力相关,或神性者后代所持有的属性.通常与魔性不可共存.',
                    14: '【神圣】 与纯粹正愿力相关者所持有的属性.与魔性不可共存.附带效果:对魔性/死灵造成的致命伤害+1.',
                    15: '【魔性】 与魔道/负愿力相关,或魔性者后代所持有的属性.通常与神性不可共存.',
                    16: '【时空】 时间或空间深度相关者持有的属性.',
                    17: '【混沌】 高等力量之一,与世界底层要素:混沌相关联的属性.拥有最高优先级,无序扭曲的代名词,与肃正不可共存.',
                    18: '【肃正】 高等力量之一,与世界底层要素:秩序相关联的属性.为泛世界集体意志或规则相关的抑制力代名词,与混沌不可共存.',
                    19: '【巨大】 体型与智人种相比质量百倍以内的标志.附带效果:与其他角色计算距离-1.',
                    20: '【超巨大】 体型与智人种相比质量百倍以上的标志.附带效果:与其他角色计算距离-2.',
                    21: '【高等力量】 特殊类型的高位能力,具备较高优先级的属性;通常表现为概念/因果/权能等.',
                    22: '【高等生命】 存在本身即与世界底层相关的特殊生命,生命层次上的最高阶层.',
                },
            },
        },
        package: {
            intro: "<br><br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br><br></span>综漫季刊系列为完整包【综漫季刊贰】的小部分武将分离而成,使单包体积不至于过大.分包纯武将,请无视名词介绍里的其它功能.<br>&nbsp某些角色的特别大招动画演出时会自动切换bgm,故建议使用时打开背景音乐.<br>&nbsp技能动画有两种,分为全屏演出和仅覆盖背景,已根据演出效果单独配置.<br>&nbsp关于适配十周年的势力边框,解压后可将[十周年专供]文件夹内的全部图片复制到无名杀扩展文件目录即:extension\\十周年UI\\image\\decoration内,之后重启游戏就可以了.",
            author: '尧',
            version: '1.5',
        },
    };
});
