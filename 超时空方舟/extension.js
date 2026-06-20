import { gelinPack } from './gelin/gelin.js';
import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '超时空方舟',
        content(config, pack) {
            //暗置角色
            lib.element.player.$hideCharacter = function () {
                const player = this;
                player.storage.rawHp = player.hp;
                player.storage.rawMaxHp = player.maxHp;
                if (player.skills.length) {
                    if (!player.hiddenSkills) {
                        player.hiddenSkills = [];
                    }
                    for (const i of player.skills.slice()) {
                        player.removeSkill(i);
                        player.hiddenSkills.add(i);
                    }
                }
                player.classList.add('unseen');
                player.name = 'unknown';
                player.sex = 'male';
                player.storage.nohp = true;
                player.node.hp.hide();
                player.addSkill('g_hidden_ai');
                player.hp = 1;
                player.maxHp = 1;
                player.update();
                return player;
            };
            if (!lib.config.ark_introimage) {
                lib.config.ark_introimage = `<img style=width:250px src=extension/超时空方舟/image/${['intro', 'intro1', 'intro2'].randomGet()}.jpg><br></img>我们要启动钟楼!--阿扎尔<br><br>准备好了吗,露西？我们动身去找时光之影吧？`;
                game.saveConfig('ark_introimage', lib.config.ark_introimage);
            }
            lib.extensionMenu['extension_超时空方舟'].intro = {
                name: lib.config.ark_introimage,
                clear: true,
                onclick() {
                    var a = [1, 2].randomGet();
                    if (a == 1) {
                        lib.config.ark_introimage = `<span><img style=width:250px src=extension/超时空方舟/image/${['intro', 'intro1', 'intro2'].randomGet()}.jpg><br></img>我们要启动钟楼!--阿扎尔<br><br>准备好了吗,露西？我们动身去找时光之影吧？</span>`;
                        game.saveConfig('ark_introimage', lib.config.ark_introimage);
                        this.parentNode.children[2].innerHTML = lib.config.ark_introimage;
                    } else {
                        lib.config.ark_introimage = `<span><img style=width:250px src=extension/超时空方舟/image/${['kessoku', 'kessoku1'].randomGet()}.jpg><br></img>只要这世间仍有年轻与孤独,摇滚就会永远存在.</span>`;
                        game.saveConfig('ark_introimage', lib.config.ark_introimage);
                        this.parentNode.children[2].innerHTML = lib.config.ark_introimage;
                    }
                },
            };
            var obj = {
                被遗忘的王: [
                    { avatar: 'ark_King_0', text: '只是拖延时间而已...', background: '超时空方舟/image/ark_king_story.jpg' },
                    { avatar: 'qw_fenghuang', text: '本场战斗受伤时将失去已损生命值的体力上限.' },
                ],
                多尔希爵士: [
                    { avatar: 'qw_Dorchi', text: '吱吱! (我一直在等着这一天的到来!)' },
                    { avatar: 'qw_Dorchi', text: '吱吱!! (父亲...我一定会替你报仇雪恨...!)' },
                ],
                多尔希爵士1: [
                    { avatar: 'qw_Dorchi', text: '吱吱! (让你见识一下父亲传授给我的...技术!)' },
                    { avatar: 'qw_Dorchi', text: '吱! (刺猬奥义!)' },
                ],
                多尔希爵士2: [{ avatar: 'qw_Dorchi', text: '吱吱! (准备战斗!)' }],
                多尔希爵士3: [
                    { avatar: 'qw_Dorchi', text: '吱... (咳...咳...我...还)' },
                    { avatar: 'qw_Dorchi', text: '吱... (还...还早着呢!)' },
                ],
                多尔希爵士4: [{ avatar: 'qw_Dorchi', text: '吱吱! (绝不退缩 !!)' }],
            };
            for (var i in obj) {
                galgame.text[i] = obj[i];
            }
        },
        precontent(ps) {
            gelinPack(lib, game, ui, get, ai, _status, this.name);
            lib.gl_custom.mp.push(function (player) {
                if (player.name == 'ark_King_0') return { gl_mp: 20, gl_maxMp: 20, type: 'fakehp', color: 'linear-gradient(#00FF00, #32CD32)', color2: 'linear-gradient(#ff0000, #cc00ff)' };
            });
            lib.init.css('extension/超时空方舟', 'extension');
            Reflect.defineProperty(HTMLDivElement.prototype, 'setBackground', {
                value(name, type, ext, subfolder) {
                    if (!name) return;
                    let src;
                    if (ext == 'noskin') ext = '.jpg';
                    ext = ext || '.jpg';
                    subfolder = subfolder || 'default';
                    if (type) {
                        let dbimage = null,
                            extimage = null,
                            modeimage = null,
                            nameinfo,
                            gzbool = false;
                        const mode = get.mode();
                        if (type == 'character') {
                            if (lib.characterPack[`mode_${mode}`] && lib.characterPack[`mode_${mode}`][name]) {
                                if (mode == 'guozhan') {
                                    nameinfo = lib.character[name];
                                    if (name.startsWith('gz_shibing')) name = name.slice(3, 11);
                                    else {
                                        if (lib.config.mode_config.guozhan.guozhanSkin && lib.character[name] && lib.character[name][4].includes('gzskin')) gzbool = true;
                                        name = name.slice(3);
                                    }
                                } else modeimage = mode;
                            } else if (name.includes('::')) {
                                name = name.split('::');
                                modeimage = name[0];
                                name = name[1];
                            } else {
                                nameinfo = get.character(name);
                            }
                        }
                        if (!modeimage && nameinfo && nameinfo[4])
                            for (const value of nameinfo[4]) {
                                if (!value) alert(nameinfo[4]);
                                if (value.startsWith('ext:')) {
                                    extimage = value;
                                    break;
                                } else if (value.startsWith('db:')) {
                                    dbimage = value;
                                    break;
                                } else if (value.startsWith('mode:')) {
                                    modeimage = value.slice(5);
                                    break;
                                } else if (value.startsWith('character:')) {
                                    name = value.slice(10);
                                    break;
                                }
                            }
                        if (extimage) src = extimage.replace(/^ext:/, 'extension/');
                        else if (dbimage) {
                            this.setBackgroundDB(dbimage.slice(3));
                            return this;
                        } else if (modeimage) src = `image/mode/${modeimage}/character/${name}${ext}`;
                        else if (type == 'character' && lib.config.skin[name] && arguments[2] != 'noskin') src = `image/skin/${name}/${lib.config.skin[name]}${ext}`;
                        else if (type == 'character') {
                            src = `image/character/${gzbool ? 'gz_' : ''}${name}${ext}`;
                        } else src = `image/${type}/${subfolder}/${name}${ext}`;
                    } else src = `image/${name}${ext}`;
                    this.setBackgroundImage(src);
                    this.style.backgroundPositionX = 'center';
                    this.style.backgroundSize = 'cover';
                    return this;
                },
            });
            //技能标签介绍 抄圣杯战争
            game.ark_daskillTips = function (tipname, id) {
                var dibeijing = ui.create.div('.ark_dibeijing', document.body);
                dibeijing.style.zIndex = 75;
                var skilltip = ui.create.div('.ark_skilltip', dibeijing); //另外写了个skilltip2格式,可自行替换,十周年样式不知道怎么写,先鸽着
                skilltip.innerHTML = tipname;
                var herf = document.getElementById(id);
                if (herf) {
                    var left = herf.getBoundingClientRect().left;
                    if (game.getFoolPhone()) left += herf.offsetParent.offsetLeft;
                    left += document.body.offsetWidth * 0.15;
                    skilltip.style.left = left + 'px';
                    skilltip.style.top = herf.getBoundingClientRect().top + 30 + 'px';
                }
                dibeijing.listen(function (e) {
                    e.stopPropagation();
                    this.remove();
                });
            };
            game.ark_skillTips = function (tipname, id) {
                var dibeijing = ui.create.div('.ark_dibeijing', document.body);
                dibeijing.style.zIndex = 75;
                var skilltip = ui.create.div('.ark_skilltip', dibeijing); //另外写了个skilltip2格式,可自行替换,十周年样式不知道怎么写,先鸽着
                skilltip.innerHTML = tipname;
                var herf = document.getElementById(id);
                if (herf) {
                    var left = herf.getBoundingClientRect().left;
                    if (game.getFoolPhone()) left += herf.offsetParent.offsetLeft;
                    left += document.body.offsetWidth * 0.15;
                    skilltip.style.left = left + 'px';
                    skilltip.style.top = herf.getBoundingClientRect().top + 30 + 'px';
                }
                dibeijing.listen(function (e) {
                    e.stopPropagation();
                    this.remove();
                });
            };
            //播片
            game.arkcg = function (name, time, bool) {
                if (game.getFileList) {
                    if (game.me && game.me.name) var gameOn = true;
                    if (gameOn) game.pause();
                    ui.arena.hide();
                    if (!bool) ui.backgroundMusic.pause();
                    let video = document.createElement('video');
                    video.setAttribute('autoplay', 'autoplay');
                    video.src = 'extension/超时空方舟/' + name + '.mp4?t=' + Date.now();
                    document.body.appendChild(video);
                    video.style.margin = '0';
                    video.style.width = '100%';
                    video.style.height = '100%';
                    video.style.left = '0px';
                    video.style.top = '0px';
                    video.style.position = 'absolute';
                    video.style.zIndex = 0;
                    video.style.backgroundSize = 'cover';
                    video.style.objectFit = 'fill';
                    let time1 = setTimeout(function () {
                        if (time) {
                            document.body.removeChild(video);
                            if (gameOn) game.resume();
                            ui.arena.show();
                            ui.backgroundMusic.play();
                        }
                    }, time + 300);
                    video.onended = () => {
                        if (typeof time1 != 'undefined') clearInterval(time1);
                        document.body.removeChild(video);
                        ui.arena.show();
                        game.resume();
                    };
                    video.addEventListener('loadedmetadata', function () {
                        this.onclick = function () {
                            this.currentTime = this.duration;
                            if (typeof time1 != 'undefined') clearInterval(time1);
                        };
                    });
                    return video;
                }
            };
            lib.dynamicTranslate['qw_hezou'] = function (player) {
                switch (player.name) {
                    case 'qw_htd':
                        return '你可以将一张♠️️手牌当作未以此法使用过的任意牌使用或打出,回合开始时,你刷新使用过的牌名';
                        break;
                    case 'qw_stl':
                        return '你可以将一张♣️️手牌当作未以此法使用过的任意牌使用或打出,回合开始时,你刷新使用过的牌名';
                        break;
                    case 'qw_ydzhx':
                        return '你可以将一张♦️️手牌当作未以此法使用过的任意牌使用或打出,回合开始时,你刷新使用过的牌名';
                        break;
                    case 'qw_xdyd':
                        return '你可以将一张♥️️手牌当作未以此法使用过的任意牌使用或打出,回合开始时,你刷新使用过的牌名';
                        break;
                    default:
                        return '你可以将一张♠️️手牌当作未以此法使用过的任意牌使用或打出,回合开始时,你刷新使用过的牌名';
                }
            };
            lib.element.player.xgzhiling = function (a, b, c) {
                var next = game.createEvent('xgzhiling');
                next.player = this;
                game.log(a);
                next.a = a;
                next.b = b;
                next.c = c;
                next.setContent('xgzhiling');
                next._args = Array.from(arguments);
                return next;
            };
            lib.element.content.xgzhiling = function () {
                'step 0';
                var chooseButton = function (event, player) {
                    var index = 0;
                    event.result = { nums: [], bool: false };
                    event.dialog = ui.create.dialog('forcebutton');
                    var str = '指令<br><br>至' + event.a + ': 对' + event.b + '使用一张' + event.c + '';
                    event.dialog.add(str);
                    event.control1 = ui.create.control('使用者', function (link) {
                        if (link) {
                            event.result.bool = true;
                            event.result.num = 1;
                            game.resume();
                            _status.imchoosing = false;
                        }
                    });
                    event.control2 = ui.create.control('目标', function (link) {
                        if (link) {
                            event.result.bool = true;
                            event.result.num = 2;
                            game.resume();
                            _status.imchoosing = false;
                        }
                    });
                    event.control3 = ui.create.control('卡牌', function (link) {
                        if (link) {
                            event.result.bool = true;
                            event.result.num = 3;
                            game.resume();
                            _status.imchoosing = false;
                        }
                    });
                    event.control = ui.create.control('ok', function (link) {
                        if (link == 'cancel2') {
                            event.result.bool = false;
                        } else {
                            event.result.bool = true;
                            event.result.num = index;
                        }
                        game.resume();
                        _status.imchoosing = false;
                    });
                    game.pause();
                    game.countChoose();
                };
                if (event.isMine()) {
                    chooseButton(event, player);
                } else {
                    if (event.isOnline()) {
                        event.send();
                    } else {
                        if (event.control) event.control.remove();
                        if (event.control1) event.control1.remove();
                        if (event.control2) event.control2.remove();
                        if (event.control3) event.control3.remove();
                        event.result = event.processAI(event.parent, player);
                        game.resume();
                        _status.imchoosing = false;
                        event.finish();
                    }
                }
                ('step 1');
                if (event.control) {
                    event.dialog.parentNode.removeChild(event.dialog);
                    event.control.remove();
                    event.control1.remove();
                    event.control2.remove();
                    event.control3.remove();
                }
            };
            game.import('character', function (lib, game, ui, get, ai, _status) {
                var chronoark = {
                    name: '超时空方舟', //武将包命名
                    connect: true, //该武将包是否可以联机:是
                    character: {
                        qw_an: ['female', 'wu', '4/4', ['qw_ss', 'qw_sushi'], ['des:<font><i>再等一等......只要再等一等就好.</i></font>']],
                        qw_Binahmax: ['female', 'qun', '4/4', ['qw_sjdl', 'qw_yl', 'qw_z', 'qw_s', 'qw_l', 'qw_zj'], ['des:<font><i>直面恐惧,斩断循环.</i></font>']],
                        qw_Binah: ['female', 'qun', '4/4', ['qw_bwzdl', 'qw_lhzz', 'qw_lhzs', 'qw_lhzj'], ['des:<font><i>直面恐惧,斩断循环.</i></font>']],
                        qw_zero: ['female', 'qun', '4/4', ['qw_lzzn', 'qw_smzl', 'qw_swcm'], ['des:你好呀,我叫零.']],
                        qw_enkidu: ['none', 'wu', '4/4', ['qw_bianrong', 'qw_tzs', 'qw_mzrz', 'qw_mzrz_wuzhuang'], ['des:虽是经众神之手制造而出的人偶,但同时亦是和自然协调/一体化的大地分身.尽管作为英雄王唯一的朋友经历了诸多的冒险,却仍还是在得到心灵之后,以人偶之身重归大地.']],
                        qw_altriac: ['female', 'wei', '3/3', ['qw_yyzz', 'qw_AroundCaliburnc'], ['des:<第一口钟将黑暗,第二口钟将谎言,第三口钟将勋章,第四口种将真实,第五口钟将保证,第六口钟将光辉钟声响彻希望的大地.未来的王终将苏醒.在终将迎来真正明日的那一刻.>']],
                        qw_fcjx: ['male', 'shu', '4/4', ['qw_niren', 'qw_langke', 'qw_badao'], ['des:过去被称为<刽子手拔刀斋>.脱落组织后成为流浪人,流浪世间,结识神谷薰后定居神谷道场.']],
                        qw_wuheqinli: ['female', 'shu', '3/3', ['qw_jiangui', 'qw_yanmo'], ['des:五河琴里,轻小说作品<约会大作战>及其衍生作品中的女主角之一.既是男主角五河士道的义妹,也是精灵组织<Ratatoskr>的司令官,同时还是拥有精灵之力的人类,识别代号〈炎魔(Efreet)〉.能够通过变换黑白两色的发带来改变性格,白色发带为粘人爱哭的<妹妹模式>;黑色发带为抖S、毒舌的<司令官模式>.从小与哥哥士道一同长大,因此彼此之间培养了良好的感情,在士道眼中是一个粘人的妹妹.喜欢士道,对士道的好感值一直都处最高状态.']],
                        qw_yln: ['female', 'qun', '3/3', ['qw_lvxing', 'qw_mofa', 'qw_zilian'], ['des:伊蕾娜,轻小说<魔女之旅>及其衍生作品中的主角.俏皮可爱的美少女,心地善良,富有爱心.留有一头灰白长发、深蓝紫色的眼瞳、身披黑色长袍、随身带着一把会飞的扫帚,头戴一顶魔女帽,胸口系着一个黄色蝴蝶结、戴着象征魔女的胸针.']],
                        qw_hope: ['female', 'wei', '4/4', ['qw_xiangdao', 'qw_hpzuzhou', 'qw_AroundCaliburn'], []],
                        qw_morse: ['none', 'jin', '1/1', ['qw_hunluan'], []],
                        qw_gmyd: ['female', 'jin', '3/3', ['ceshi'], []],
                        qw_xdyd: ['female', 'shu', '3/3', ['qw_shanyao', 'qw_guidui'], ['des:开朗又有名望的高中一年生.<br>担当结束乐队的吉他主唱.<br>喜欢与人交谈,即使是初次见面也不会胆怯、笑着与对方搭话的阳角.<br>对凉抱有着憧憬,但这份感情或许有点过.<br>经常在Ins上传照片']],
                        qw_ydzhx: ['female', 'wu', '3/3', ['qw_tianshi', 'qw_zhumeng', 'qw_hezou'], ['des:元气满满又开朗的高中二年级生.担任结束乐队的鼓手.<br>对加入到结束乐队中的小波奇给予了很多照顾、担任着乐队总管的角色.<br>姐姐伊地知星歌是Livehouse「STARRY」的店长,<br>对Livehouse有着特殊的感情']],
                        qw_stl: ['female', 'wei', '3/3', ['qw_guao', 'qw_qichao', 'qw_hezou'], ['des:冷酷而孤高的高中二年生.<br>担任结束乐队的贝斯手.是虹夏的好友.<br>有着远离尘世的兴趣,被称作怪人的话会感到高兴.<br>虽然家庭富裕,但对乐器经常缺钱.<br>偶尔吃草来解饿']],
                        qw_htd: ['female', 'jin', '3/3', ['qw_shekong', 'qw_hezou', 'qw_hero'], ['zhu', 'hiddenSkill', 'des:人活着哪有不喜欢波奇的,硬撑罢了,妈的,忍不了,一拳把下北泽打爆!人活着哪有不喜欢波奇的,硬撑罢了,妈的,忍不了,一拳把下北泽打爆!人活着哪有不喜欢波奇的,硬撑罢了,妈的,忍不了,一拳把下北泽打爆!人活着哪有不喜欢波奇的,硬撑罢了,妈的,忍不了,一拳把下北泽打爆!人活着哪有不喜欢波奇的,硬撑罢了,妈的,忍不了,一拳把下北泽打爆!人活着哪有不喜欢波奇的,硬撑罢了,妈的,忍不了,一拳把下北泽打爆!']],
                        qw_cibei: ['female', 'shen', '3/3', ['qw_beimin', 'qw_jiushu'], []],
                        qw_ylmt: ['female', 'qun', '3/3', ['qw_qhmyg', 'qw_fxzms', 'qw_fzsh', 'qw_hmty'], ['des:尤莉米特,是游戏<赛尔号>中的精灵.盖伦星系前守护者萨特的女儿,盖伦星系的现任守护者.<br><br>芳花不散,群星不熄,弥馨殷红,缀满她誓约守护的净土,天际星屑,落向他不曾触及的和平']],
                        qw_ruanyu: ['female', 'qun', '4/4', ['qw_ljj', 'qw_huiyue', 'qw_tgfs', '被充电'], ['des:武门弟子,双胞胎中的无节操妹妹.<br>直来直去,口无遮拦,与姐姐的内敛传统相反,思想格外的奔放.<br>暂时没有遇到什么坏事,除了被某个古董店奸商搭讪之外.<br>与姐姐想要回到山上不同,她希望能见到更多山下的风景,到更远的地方,看更多的东西']],
                        qw_ruanyan: ['female', 'qun', '3/3', ['qw_yjj', 'qw_lsj', 'qw_jltx', '被充电'], ['des:武门弟子,双胞胎剑客中的姐姐.<br>姐妹俩还在襁褓之中就被师父捡上了山,随着时间推移,她们慢慢长大,大家发现变成了两个截然不同的人.但是让人意外的是她们的关系并没有因此而变差,反而因为互补变得更好了.<br>非常溺爱自己的妹妹,小羽的要求都会尽可能的满足.<br>这是她第一次下山游历,内心非常的不安,时刻想着不能堕了师门的威名,是显得有些高冷,但其实只是紧张而已.<br>不过确实不太喜欢交界都市,总想着赶紧完成任务回山上去.<br>有着非常理想化的爱情观,憧憬着一生一世一双人的爱情,想要找到一个真心喜欢的人度过后半生']],
                        qw_yisake: ['male', 'qun', '4/4', ['qw_knzh', 'qw_zzql', 'qw_zhdxj', '被充电'], ['des:一部分记忆错乱的少年,无知的戴罪者.曾希望能摆脱自己的神器与猎犬,却无法如愿.<br>从不轻易在别人面前摘下兜帽.虽然看起来很难接近,实际是个相当单纯的少年.对大多数人保持警戒,但对神职人员却充满无条件的信任,非常地虔诚.<br>因为无法很好的控制自己的神器,伊萨克不能上学或与人过多接触,只能在教会中寄宿.伊萨克的监护人是格雷穆,其他神官与修女也经常照顾他.<br>在战斗中的伊萨克会冒险解放自己神器的力量,但如果过急进,反而会把自己烧得很惨.只是他本人对各种各样的伤疤已经习以为常了']],
                        qw_sihuang: ['female', 'qun', '4/5', ['qw_wd', 'qw_stfx', 'qw_wyzx', 'qw_wwhs', '被充电'], ['des:司篁不知道那是否就是使世间起死回生的钥匙.<br>只是,这双眼看到了.这双耳听到了.<br>即便无人回答她的疑问,即便无路通往天道.她仍要试']],
                        qw_Yan: ['male', 'qun', '4/4', ['qw_dszy', 'qw_dszz', 'qw_nqzr'], ['des:阳·比斯莫克是食指的传令员,就任不到一个月.<br><br>阳一直深受过去痛苦记忆的折磨,极度憎恨指令,渴望不被指令束缚的人生.成为传令员后,阳对指令的受害者充满同情,也产生了反抗指令的想法.他伪造指令,试图证明个人的自由意志,却发现永远无法脱离指令的束缚.<br><br>在了解指令的诞生与原理后,阳到达了崩溃的边缘,失去了找回自由意志的勇气与信心,无力面对自己的选择造就的绝望,最终扭曲']],
                        qw_azar: ['male', 'wei', '4/4', ['qw_hyj', 'qw_hysdys', 'qw_xymy', 'qw_jianmu'], ['des:阿扎尔拥有冷静的头脑和稳健的作战能力,能够熟练应对战场中的各种局势变化,也因此备受调查团的器重,拥有众多追随者']],
                        qw_qiaoyi: ['male', 'wu', 4, ['qw_zzys'], ['des:天才化学家乔伊曾在研究所制作特殊装备,由情况恶化,决定亲自前往扭曲之地']],
                        qw_gtzx: ['male', 'qun', '4/5/1', ['qw_xzpz', 'qw_juedou', 'qw_cjzd', 'qw_hdcn', 'qw_gtzxxy'], ['des:钢铁之心是私立佣兵部队的队长,他和他的队员通过出借兵力收取佣金.佣兵部队是中立派,他们受雇调查团,协助团队寻找时光之影']],
                        'qw_hl&sln': ['female', 'wei', 3, ['qw_tyby', 'qw_ttdl', 'qw_sun', 'qw_mygy', 'qw_guance', 'qw_moon'], ['des:海拉和赛琳娜是一对双胞胎姐妹,小时候背着大人偷偷跑下来,在扭曲之地捡到了神秘魔石,并因此而获得了太阳和月亮之力.为了查明这难以承受的魔力来自何处,她们自愿加入了调查团']],
                        qw_xefst: ['male', 'qun', '4/4', ['qw_jihuo', 'qw_qxjt'], ['des:西尔弗斯坦是方舟的防卫队员,擅长使用各种武器和装备.但他似乎不太喜欢离开方舟到外面去']],
                        qw_liuzhen: ['female', 'qun', '4/4', ['qw_gdhx', 'qw_xszy', 'qw_szzq', 'qw_zmyd', 'qw_ssjx'], ['des:……是,我深知し协会已经腐败到骨子里了……近期连续发来的各种委托已经堆积如山,2科的大家为了应付公务已经疲惫不堪……我很清楚塞尔玛那个小人正在做的事情是多么的自私而卑劣.但我要瞅准时机,只要我再忍耐一些时日,定有机会剔除这些烂肉,让し协会再度振作……只要解决这次事件,我相信一切都能好起来.我定要亲手改变现状……付出多大的牺牲都在所不辞.            ']],
                        qw_prst: ['female', 'wu', 3, ['qw_xyfb', 'qw_sdcf', 'qw_yujian', 'qw_sdqs', 'qw_snjsd'], ['des:身为虔诚的祭司,普瑞斯特拥有非常坚定的信念,为了净化扭曲之地,毅然加入了调查团']],
                        qw_kalun: ['female', 'wei', 3, ['qw_lhcs', 'qw_hamy', 'qw_hapz'], ['des:自称<卡伦>的少女.在她所展现出来的行为表象之下,似乎还存在着不为人知的一面']],
                        qw_sanhua: ['female', 'wei', '3/3', ['qw_mlh', 'qw_nby', 'qw_sxyd'], []],
                        qw_luxi: ['female', 'shen', '4/4', ['qw_choupai', 'qw_yy', 'qw_shijian', 'qw_luxixy'], ['zhu', 'des:露西是超时空方舟游戏的主角,在每一次冒险中跟随各个调查员一同行动,没有血条也不会被攻击,技能主要是协助队伍过牌和提供额外费用']],
                        qw_huizi: ['female', 'qun', 3, ['qw_zuzhi', 'qw_hlbybz', 'qw_zybh', 'qw_aizb'], ['des:卉子擅长使用特殊的鞭子治疗友军,在渡过了一段长时间的隐居生活后,重新回到了调查团']],
                        qw_tls: ['female', 'jin', 3, ['qw_ys', 'qw_ym', 'qw_cx'], ['des:特丽莎为了调查法洛斯教团的情报,曾独自潜伏在法洛斯教团内部,是行踪隐秘且实力超群的刺客']],
                        qw_yiliya: ['male', 'wei', 4, ['qw_nadao', 'qw_ydzcx', 'qw_bxntd', 'qw_fxyhy', 'qw_lmzbd', 'qw_sxlds', 'qw_yiliyaxy'], ['des:伊利亚曾是调查团中无人能够超越的存在,但自从那件事发生以后,便陷入了自我怀疑的漩涡,对自己的能力失去了信心.作为一名优秀的剑士,他的实力毋庸置疑,唯有他自己怀疑自己的能力,遇事总是悲观消极']],
                        qw_haila: ['female', 'wei', 3, ['qw_shuangzi', 'qw_tyby', 'qw_ttdl', 'qw_sun'], ['des:海拉和赛琳娜是一对双胞胎姐妹,小时候背着大人偷偷跑下来,在扭曲之地捡到了神秘魔石,并因此而获得了太阳和月亮之力.为了查明这难以承受的魔力来自何处,她们自愿加入了调查团']],
                        qw_sailinna: ['female', 'wei', 3, ['qw_shuangzi', 'qw_mygy', 'qw_guance', 'qw_moon'], ['des:海拉和赛琳娜是一对双胞胎姐妹,小时候背着大人偷偷跑下来,在扭曲之地捡到了神秘魔石,并因此而获得了太阳和月亮之力.为了查明这难以承受的魔力来自何处,她们自愿加入了调查团']],
                        qw_fenghuang: ['none', 'shu', 4, ['qw_bsn', 'qw_xknl', 'qw_zhizhao', 'qw_mbxhj', 'qw_xxyx', 'qw_fenghuangxy'], ['des:我就是传说中的百鸟之王,神兽凤凰!<br>怎么？没见过会说话的鸟嘛？<br>想把我抓走？<br><br>门都没有!<br><br>除非你请我吃好吃的...我就跟你走!<br>不过说好了,你得走在前头!']],
                        qw_luxi1: ['female', 'shen', 3, ['qw_dd', 'qw_yysn', 'qw_xjwy', 'qw_ffz'], ['zhu', 'des:在漫长的时间里,世界被黑暗的雾气笼罩,逐渐开始扭曲.从黑色迷雾中涌现出的未知生物开始肆意攻击人类,人类面临前所未有的大灾难.在这个混沌的世界,空中岛<方舟>是人类唯一的安全之地.正在此时,主人公露西在方舟下的扭曲之地苏醒过来,她脑中仅存的记忆告诉她,去启动<方舟>的钟楼…']],
                        qw_haiyin: ['male', 'wei', 4, ['qw_tljx', 'qw_kq', 'qw_wjdfn', 'qw_xzxc', 'qw_xfxy'], ['des:战士海因对法洛斯教团心怀强烈的恨意,能够在战斗中爆发出强大的潜能,但因浸染了狂气而不太容易受控制']],
                        qw_leilin: ['female', 'wei', 3, ['qw_mbwszh', 'qw_zhuangbei', 'qw_lxqx', 'qw_zyzh'], ['des:研究所的所长雷琳有着聪慧的头脑,是方舟内最顶尖的高智商人才之一.<br>常年守着研究所的她,偶尔也会去扭曲之地协助调查.另外,她与其他调查员不同,她保持着有关过去的记忆']],
                        qw_xisi: ['female', 'qun', 3, ['qw_royf', 'qw_smzx', 'qw_yfzz', 'qw_qiege', 'qw_hsyf', 'qw_mydxt', 'qw_xisixy'], ['des:傀儡师西斯拥有随意操纵人偶的能力,是刚加入调查团的新人.目前主要负责方舟内的事务,因展现出极强的潜力而受到周围人的高度评价']],
                        qw_lian: ['female', 'shu', 5, ['qw_gedang', 'qw_fangong', 'qw_sbkd'], ['des:精剑术的莉安,主要使用大剑作为武器,具备相当高的资质和实力,担任着调查团的教官职务']],
                        qw_npro: ['female', 'shen', 4, ['qw_jqddf', 'qw_roqh'], []],
                        qw_zsro: ['male', 'shen', 7, ['qw_chaofeng', 'qw_roqh'], []],
                        Dorchi_Sword: ['male', 'shen', 7, ['qw_pihu'], []],
                        qw_flsjz: ['female', 'shen', 60, ['ark_flsjz', 'ark_zhipei', 'ark_kbsw', 'ark_jdfc', '傻逼孙策'], ['boss', 'bossallowed']],
                        qw_Dorchi: ['none', 'shen', 25, ['qw_dorchi', 'qw_dorchi1', 'qw_dorchi2', 'qw_wddcy', 'qw_jjkj', 'qw_hsmw', 'qw_bhcy2', 'qw_dorchidie'], ['boss', 'bossallowed']],
                        qw_monv: ['female', 'shen', 40, ['qw_yddro', 'qw_tkdzz'], ['boss', 'bossallowed']],
                        qw_argalia: ['male', 'wei', 4, ['qw_clcx', 'qw_Allegro', 'qw_Largo', 'qw_xlgz'], ['des:阿尔加利亚是被赋予了特色<苍蓝残响>的1阶收尾人,是残响乐团的创建者与领导者,也是安吉丽卡的兄长']],
                        ark_greenguard: ['none', 'shen', 8, ['ark_shengyu', 'ark_qlzj'], ['boss', 'bossallowed']],
                        ark_yellowguard: ['none', 'shen', 8, ['ark_shengyu', 'ark_qlzj'], []],
                        ark_firewarlock: ['male', 'shen', 7, ['ark_shengyu', 'ark_qzhy'], []],
                        ark_icewarlock: ['female', 'shen', 7, ['ark_shengyu', 'ark_hbjg'], []],
                        ark_thunderwarlock: ['female', 'shen', 7, ['ark_shengyu', 'ark_qzld'], []],
                        ark_firedochi: ['none', 'shen', 6, ['ark_shengyu', 'ark_huoqiu'], []],
                        ark_thunderdochi: ['none', 'shen', 4, ['ark_shengyu', 'ark_dghs'], []],
                        ark_sleepdochi: ['none', 'shen', 10, ['ark_shengyu', 'ark_sleep'], []],
                        ark_jianshi: ['none', 'shen', 6, ['ark_shengyu', 'ark_js'], []],
                        ark_summoner: ['female', 'shen', 5, ['ark_shengyu', 'ark_zhaohuan'], []],
                        ark_King_0: ['male', 'shen', 40, ['ark_king', 'ark_liren', 'ark_chengjie', 'ark_zh', 'ark_skillshow'], []],
                        ark_sfzl: ['none', 'shen', 10, [], []],
                        ark_shzz: ['none', 'shen', 5, [], []],
                    },
                    characterIntro: {},
                    characterTitle: {
                        qw_yln: '<span class="bluetext" style="color: #C0C0C0">灰之魔女</span>',
                        qw_Yan: '<span class="bluetext" style="color: #C0C0C0">都市之子</span>',
                        qw_argalia: '<span class="bluetext" style="color: #0000FF">苍蓝残响</span>',
                        qw_fcjx: '<span class="bluetext" style="color:orange">浪客剑心</span>',
                        qw_fenghuang: '<span class="bluetext" style="color: #FF0000">(自称)传说中的凤凰</span>',
                    },
                    characterSort: {
                        超时空方舟: {
                            qw_cskfz: ['qw_xefst', 'qw_prst', 'qw_kalun', 'qw_luxi', 'qw_huizi', 'qw_tls', 'qw_yiliya', 'qw_haila', 'qw_sailinna', 'qw_fenghuang', 'qw_luxi1', 'qw_haiyin', 'qw_leilin', 'qw_xisi', 'qw_lian', 'qw_gtzx', 'qw_qiaoyi', 'qw_azar'],
                            qw_lunwai: ['qw_sanhua'],
                            qw_yq: ['qw_sihuang', 'qw_yisake', 'qw_ruanyan', 'qw_ruanyu', 'qw_zero', 'qw_an'],
                            qw_fxtsg: ['qw_liuzhen', 'qw_argalia', 'qw_Yan', 'qw_Binah'],
                            qw_seer: ['qw_ylmt', 'qw_gmyd'],
                            qw_qysj: ['qw_cibei'],
                            qw_gdyg: ['qw_htd', 'qw_stl', 'qw_ydzhx', 'qw_xdyd'],
                        },
                    },
                    characterReplace: {
                        /*————————————————角色切换————————————————*/
                        //阿尔托莉雅·潘德拉贡(剑)=阿尔托莉雅·潘德拉贡(术)
                        qw_Binah: ['qw_Binah', 'qw_Binahmax'],
                        qw_luxi: ['qw_luxi', 'qw_luxi1'],
                    },
                    skill: {
                        qw_ss: {
                            mark: true,
                            marktext: '☯',
                            init(player) {
                                player.storage.qw_ssdelay = {
                                    card: [],
                                    player: [],
                                };
                            },
                            intro: {
                                content(storage, player, skill) {
                                    var str = player.storage.qw_ss ? '你可取消之并令使用者回复一点体力.' : '你可令此牌无法响应并获得此牌.';
                                    return str;
                                },
                            },
                            trigger: {
                                player: 'useCardToPlayered',
                                target: 'useCardToTarget',
                            },
                            usable: 1,
                            filter(event, player) {
                                if (event.name == 'useCardToTarget') return event.player != player && event.targets.includes(player);
                                else return true;
                            },
                            content() {
                                function ssgain() {
                                    var storage = player.storage.qw_ssgain;
                                    player.unmarkSkill('qw_ssgain');
                                    player.gain(storage.card);
                                }
                                if (!player.storage.qw_ss) {
                                    player.storage.qw_ssgain = {
                                        card: trigger.cards,
                                    };
                                    player.gl_eventAfter('qw_ssgain', ssgain, trigger);
                                    trigger.directHit.addArray(game.players);
                                } else {
                                    trigger.targets.removeArray(trigger.targets);
                                    trigger.parent.triggeredTargets2.removeArray(trigger.targets);
                                    trigger.untrigger();
                                    var target = event.triggername == 'useCardToPlayered' ? player : trigger.player;
                                    target.recover();
                                }
                                player.changeZhuanhuanji('qw_ss');
                            },
                        },
                        qw_sushi: {
                            trigger: {
                                global: 'phaseBefore',
                            },
                            forced: true,
                            contentx() {
                                if (player.name == 'qw_an' && player.hasSkill('qw_sushi')) player.loseMaxHp();
                                var storage = player.storage.qw_sushi;
                                player.unmarkSkill('qw_sushi');
                                if (storage) {
                                    var num = storage.hp - player.hp;
                                    if (num != 0) {
                                        player.changeHp(storage.hp - player.hp);
                                        player.dying();
                                    }
                                    num = storage.hs - player.countCards('h');
                                    if (num > 0) {
                                        player.draw(num);
                                    } else if (num < 0) {
                                        player.chooseToDiscard(-num, true);
                                    }
                                }
                            },
                            content() {
                                'step 0';
                                var select = 1;
                                player.chooseTarget(get.prompt(event.name), select, function (card, player, target) {
                                    return true;
                                });
                                ('step 1');
                                if (result.bool) {
                                    for (var target of result.targets) {
                                        target.gl_eventAfter('qw_yindao', lib.skill.qw_sushi.contentx, trigger);
                                        target.storage.qw_sushi = {
                                            hp: target.hp,
                                            hs: target.countCards('h'),
                                        };
                                    }
                                }
                            },
                        },
                        qw_yl: {
                            forced: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                for (var i of game.players) {
                                    if (i == player) continue;
                                    for (var skill of i.skills) {
                                        if (lib.skill[skill].forced == true) {
                                            lib.skill[skill].locked = false;
                                            lib.skill[skill].forced = false;
                                            i.storage['qw' + skill] = true;
                                        }
                                    }
                                }
                            },
                            group: 'qw_yl_recover',
                            subSkill: {
                                recover: {
                                    trigger: {
                                        player: 'phaseAfter',
                                    },
                                    forced: true,
                                    content() {
                                        for (var i of game.players) {
                                            if (i == player) continue;
                                            for (var skill of i.skills) {
                                                if (i.storage['qw' + skill]) {
                                                    lib.skill[skill].locked = true;
                                                    lib.skill[skill].forced = true;
                                                }
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        qw_l: {
                            trigger: {
                                global: ['recoverBegin', 'damageBegin', 'gainBegin', 'drawBegin', 'useCard1'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.player && event.player == player) return false;
                                if (event.source && event.source == player) return false;
                                if (event.name == 'useCard') {
                                    if (event.cards) {
                                        for (var i of event.cards) {
                                            if (i.name == event.card.name) return false;
                                        }
                                    }
                                    return true;
                                }
                                if (event.name == 'damage' && (!event.source || !event.source.isAlive())) return false;
                                var parent = event.parent;
                                if (parent.name && parent.name.indexOf('phase') == 0) return false;
                                if (event.name == 'gain') {
                                    if (parent.card && parent.card.name && lib.card[parent.card.name]) return false;
                                    parent = parent.parent;
                                }
                                return parent.name != '_lianhuan' && (!parent.card || !parent.card.name || !lib.card[parent.card.name]);
                            },
                            content() {
                                if (trigger.player != player) trigger.cancel();
                            },
                        },
                        qw_zj: {
                            forced: true,
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                player.chooseButton(['劣化震击:选择一种牌名', [lib.inpile, 'vcard']]);
                                ('step 1');
                                if (result.bool) {
                                    for (var i of game.players) {
                                        var cards = [];
                                        if (i == player) continue;
                                        else {
                                            for (var card of i.getCards('hesj')) {
                                                if (card.name == result.links[0][2]) {
                                                    cards.push(card);
                                                }
                                            }
                                            if (cards.length) {
                                                i.lose(cards, ui.discardPile);
                                                i.$throw(cards);
                                                i.damage(cards.length);
                                            }
                                        }
                                    }
                                    for (var card of ui.cardPile.childNodes) {
                                        if (card.name == result.links[0][2]) {
                                            game.cardsDiscard(card);
                                        }
                                    }
                                }
                            },
                        },
                        qw_s: {
                            trigger: {
                                source: 'damageAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                'step 0';
                                if (trigger.player && trigger.player.isAlive()) {
                                    if (!trigger.player.isLinked()) trigger.player.link();
                                } else event.finish();
                                ('step 1');
                                player.line(trigger.player, { color: [0, 0, 0] });
                                trigger.player.addTempSkill('fengyin', { player: 'linkAfter' });
                            },
                        },
                        qw_z: {
                            trigger: {
                                player: 'damageAfter',
                            },
                            _priority: 1,
                            forced: true,
                            content() {
                                player.chooseToUse({ prompt: '「劣化之柱」:你可以使用一张牌' });
                            },
                        },
                        qw_sjdl: {
                            forced: true,
                            popup: false,
                            init(player) {
                                player.addTempSkill = function () {
                                    player.recover();
                                    player.gainMaxHp();
                                };
                                player.addskill = function () {
                                    player.recover();
                                    player.gainMaxHp();
                                };
                                player.removeskill = function () {
                                    player.recover();
                                    player.gainMaxHp();
                                };
                                player.clearSkills = function () {
                                    player.recover();
                                    player.gainMaxHp();
                                };
                                if (!player.qw_bwzdl) {
                                    var num = 4;
                                    var list = [];
                                    for (var i = 0; i < num; i++) {
                                        list.push(game.createCard(ui.special));
                                    }
                                    var reupdate = function () {
                                        var cards = player.qw_bwzdl[1];
                                        var currentChild = [];
                                        if (cards.length < 4) {
                                            var card1 = game.createCard({ name: 'ying' });
                                            player.directgains([card1], null, 'qw_bwzdl1');
                                            player.qw_bwzdl[1].push(card1);
                                        }
                                        for (var i = 0; i < cards.length; i++) {
                                            if (ui.cardPile.childNodes[i]) {
                                                currentChild = ui.create.card();
                                                currentChild.init([ui.cardPile.childNodes[i].suit, ui.cardPile.childNodes[i].number, ui.cardPile.childNodes[i].name, ui.cardPile.childNodes[i].nature]);
                                            } else currentChild = game.createCard({ name: 'ying', suit: 'spade', number: '1' });
                                            if (ui.cardPile.childNodes[i]) {
                                                cards[i].init(currentChild);
                                                (cards[i].cardid = ui.cardPile.childNodes[i].cardid), (cards[i].wunature = ui.cardPile.childNodes[i].wunature), (cards[i].storage = ui.cardPile.childNodes[i].storage), (cards[i].relatedCard = ui.cardPile.childNodes[i]);
                                            } else {
                                                cards[i].init(game.createCard({ name: 'ying', suit: 'spade', number: '1' }));
                                            }
                                        }
                                    };
                                    player.qw_bwzdl = [setInterval(reupdate, 500), list];
                                    setTimeout(function () {
                                        for (var num = 0; num < list.length; num++) {
                                            player.directgains([list[num]], null, 'qw_bwzdl1');
                                        }
                                        ui.updatehl();
                                    }, 750);
                                }
                            },
                            onremove(player) {
                                if (player.qw_bwzdl) {
                                    clearInterval(player.qw_bwzdl[0]);
                                    delete player.qw_bwzdl;
                                }
                            },
                            mod: {
                                targetInRange: () => true,
                                cardUsable: () => Infinity,
                                aiOrder(player, card, num) {
                                    if (get.itemtype(card) == 'card' && card.hasGaintag('qw_bwzdl1')) return num + 4;
                                },
                                aiValue(player, card, num) {
                                    if (card.hasGaintag('qw_bwzdl1')) return 2;
                                },
                                aiUseful(player, card, num) {
                                    if (get.itemtype(card) == 'card' && card.hasGaintag('qw_bwzdl1')) return num + 10;
                                },
                            },
                            group: 'qw_bwzdl_use',
                            subSkill: {
                                use: {
                                    trigger: {
                                        player: ['useCardBegin', 'respondBegin'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        for (var card of event.cards) {
                                            if (card.relatedCard) return true;
                                        }
                                    },
                                    content() {
                                        var mark = 0;
                                        for (var num = 0; num < player.qw_bwzdl[1].length; num++) {
                                            for (var card of trigger.cards) {
                                                if (card == player.qw_bwzdl[1][num]) {
                                                    player.qw_bwzdl[1].splice(num, 1);
                                                    card.relatedCard.fix();
                                                    card.relatedCard.remove();
                                                    card.relatedCard.destroyed = true;
                                                    mark = 1;
                                                    break;
                                                }
                                            }
                                            if (mark) {
                                                num--;
                                                mark = 0;
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        qw_lhzz: {
                            trigger: {
                                player: 'damageAfter',
                            },
                            _priority: 1,
                            forced: true,
                            content() {
                                player.chooseToUse({ prompt: '「劣化之柱」:你可以使用一张牌' });
                            },
                        },
                        qw_lhzj: {
                            forced: true,
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                player.chooseButton(['劣化震击:选择一种牌名', [lib.inpile, 'vcard']]);
                                ('step 1');
                                if (result.bool) {
                                    for (var i of game.players) {
                                        if (i == player) continue;
                                        else {
                                            for (var card of i.getCards('hesj')) {
                                                if (card.name == result.links[0][2]) {
                                                    i.lose(card, ui.discardPile);
                                                    i.$throw(card);
                                                }
                                            }
                                        }
                                    }
                                    for (var card of ui.cardPile.childNodes) {
                                        if (card.name == result.links[0][2]) {
                                            game.cardsDiscard(card);
                                        }
                                    }
                                }
                            },
                        },
                        qw_lhzs: {
                            trigger: {
                                source: 'damageAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                'step 0';
                                if (trigger.player && trigger.player.isAlive()) {
                                    if (!trigger.player.isLinked()) trigger.player.link();
                                } else event.finish();
                                ('step 1');
                                player.line(trigger.player, { color: [0, 0, 0] });
                                trigger.player.addTempSkill('fengyin', { player: 'linkAfter' });
                            },
                        },
                        qw_bwzdl: {
                            forced: true,
                            popup: false,
                            init(player) {
                                if (!player.qw_bwzdl) {
                                    var num = 2;
                                    var list = [];
                                    for (var i = 0; i < num; i++) {
                                        list.push(game.createCard(ui.special));
                                    }
                                    var reupdate = function () {
                                        var cards = player.qw_bwzdl[1];
                                        var suit;
                                        var num;
                                        var name;
                                        var nature;
                                        var currentChild = [];
                                        if (cards.length < 2) {
                                            var card1 = game.createCard({ name: 'ying' });
                                            player.directgains([card1], null, 'qw_bwzdl1');
                                            player.qw_bwzdl[1].push(card1);
                                        }
                                        for (var i = 0; i < cards.length; i++) {
                                            suit = ui.cardPile.childNodes[i].suit;
                                            num = ui.cardPile.childNodes[i].number;
                                            name = ui.cardPile.childNodes[i].name;
                                            nature = ui.cardPile.childNodes[i].nature;
                                            if (ui.cardPile.childNodes[i]) {
                                                currentChild = ui.create.card();
                                                // game.broadcastAll(function (currentChild, i, suit, num, name, nature) {
                                                currentChild.init([suit, num, name, nature]);
                                                //  }, currentChild, i, suit, num, name, nature)
                                            } else currentChild = game.createCard({ name: 'ying', suit: 'spade', number: '1' });
                                            if (ui.cardPile.childNodes[i]) {
                                                //game.broadcastAll(function (cards, currentChild, i) {
                                                cards[i].init(currentChild);
                                                //}, cards, currentChild, i)
                                                (cards[i].cardid = ui.cardPile.childNodes[i].cardid), (cards[i].wunature = ui.cardPile.childNodes[i].wunature), (cards[i].storage = ui.cardPile.childNodes[i].storage), (cards[i].relatedCard = ui.cardPile.childNodes[i]);
                                            } else {
                                                //   game.broadcastAll(function (cards, i) {
                                                cards[i].init(game.createCard({ name: 'ying', suit: 'spade', number: '1' }));
                                                //  }, cards, i)
                                            }
                                        }
                                    };
                                    player.qw_bwzdl = [setInterval(reupdate, 500), list];
                                    setTimeout(function () {
                                        for (var num = 0; num < list.length; num++) {
                                            player.directgains([list[num]], null, 'qw_bwzdl1');
                                        }
                                        ui.updatehl();
                                    }, 750);
                                }
                            },
                            onremove(player) {
                                if (player.qw_bwzdl) {
                                    clearInterval(player.qw_bwzdl[0]);
                                    delete player.qw_bwzdl;
                                }
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha' || card.name == 'jiu') return num + player.hp;
                                },
                                aiOrder(player, card, num) {
                                    if (get.itemtype(card) == 'card' && card.hasGaintag('qw_bwzdl1')) return num + 4;
                                },
                                aiValue(player, card, num) {
                                    if (card.hasGaintag('qw_bwzdl1')) return 2;
                                },
                                aiUseful(player, card, num) {
                                    if (get.itemtype(card) == 'card' && card.hasGaintag('qw_bwzdl1')) return num + 10;
                                },
                            },
                            group: 'qw_bwzdl_use',
                            subSkill: {
                                use: {
                                    trigger: {
                                        player: ['useCardBegin', 'respondBegin'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        for (var card of event.cards) {
                                            if (card.relatedCard) return true;
                                        }
                                    },
                                    content() {
                                        var mark = 0;
                                        for (var num = 0; num < player.qw_bwzdl[1].length; num++) {
                                            for (var card of trigger.cards) {
                                                if (card == player.qw_bwzdl[1][num]) {
                                                    player.qw_bwzdl[1].splice(num, 1);
                                                    card.relatedCard.fix();
                                                    card.relatedCard.remove();
                                                    card.relatedCard.destroyed = true;
                                                    mark = 1;
                                                    break;
                                                }
                                            }
                                            if (mark) {
                                                num--;
                                                mark = 0;
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        qw_swcm: {
                            forced: true,
                            trigger: {
                                player: 'useCardToPlayer',
                            },
                            filter(event, player) {
                                return player.hp < event.player.hp;
                            },
                            content() {
                                trigger.directHit.addArray(
                                    game.filterPlayer(function (current) {
                                        return current == player;
                                    })
                                );
                            },
                            group: 'qw_swcm_vampire',
                            subSkill: {
                                vampire: {
                                    trigger: {
                                        source: 'damageBefore',
                                    },
                                    forced: true,
                                    content() {
                                        trigger.cancel();
                                        player.vampire(trigger.player, trigger.num);
                                    },
                                },
                            },
                        },
                        qw_smzl: {
                            enable: 'chooseToUse',
                            hiddenCard(player, name) {
                                if (name == 'taoyuan') return true;
                            },
                            multitarget: true,
                            multiline: true,
                            line: 'fire',
                            content() {
                                player.loseHp();
                                var targets = game.filterPlayer(function (current) {
                                    return (
                                        lib.filter.filterTarget(
                                            {
                                                name: 'taoyuan',
                                            },
                                            player,
                                            current
                                        ) &&
                                        !event.targets.includes(current) &&
                                        current != player
                                    );
                                });
                                player.useCard(
                                    {
                                        name: 'taoyuan',
                                    },
                                    targets
                                );
                                player.addTempSkill('gl_qingshu_lose');
                            },
                            filterCard(card, player) {
                                var mod = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                if (mod != 'unchanged') return mod;
                                return true;
                            },
                            filterTarget(card, player, target) {
                                if (!_status.event.player.storage.smzl) return false;
                                return (
                                    lib.filter.filterTarget(
                                        {
                                            name: 'taoyuan',
                                        },
                                        player,
                                        target
                                    ) && target != player
                                );
                            },
                            complexSelect: true,
                            selectTarget() {
                                if (!_status.event.player.storage.smzl) return 0;
                                return [0, _status.event.player.maxHp - _status.event.player.hp];
                            },
                            selectCard: [1],
                            filter(event, player) {
                                if (player.hasSkill('gl_qingshu_lose')) return false;
                                var bool = event.filterCard(
                                    {
                                        name: 'taoyuan',
                                    },
                                    player,
                                    event
                                );
                                return event.type == 'dying' || bool;
                            },
                            prompt() {
                                var player = _status.event.player;
                                if (!player.storage.smzl) return '请将一张牌当【桃园结义】对其他角色使用';
                                return `请将一张牌当【桃园结义】对其他角色使用并令此【桃园结义】对至多${_status.event.player.maxHp - _status.event.player.hp}名角色无效.`;
                            },
                            ai: {
                                save: true,
                            },
                            subSkill: {
                                lose: {
                                    charlotte: true,
                                },
                            },
                        },
                        qw_lzzn: {
                            trigger: {
                                player: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                return event.target != player && event.targets.length > 1;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                trigger.target.chooseCard('交给' + get.translation(player) + '一张手牌令此牌增加或减少一个目标').set('ai', function (card) {
                                    if (get.attitude(_status.event.player, _status.event.parent.player) > 0) {
                                        return 12 - get.value(card);
                                    } else {
                                        return false;
                                    }
                                });
                                ('step 1');
                                if (result.bool) {
                                    trigger.target.give(result.cards, player);
                                    var list = [];
                                    if (trigger.targets.length != game.filterPlayer().length) list.push('增加一个目标');
                                    if (trigger.targets.length != 0) list.push('减少一个目标');
                                    trigger.target.chooseControl(list).set('ai', function () {
                                        if (get.effect(trigger.target, trigger.card) >= 0) return '增加一个目标';
                                        else return '减少一个目标';
                                    });
                                } else event.finish();
                                ('step 2');
                                if (result.control == '增加一个目标') {
                                    event.type = 'add';
                                    trigger.target
                                        .chooseTarget(function (card, player, target) {
                                            return !trigger.targets.includes(target);
                                        })
                                        .set('ai', function (target) {
                                            return get.attitude(trigger.target, target) > 0;
                                        });
                                } else if (result.control == '减少一个目标') {
                                    event.type = 'remove';
                                    trigger.target
                                        .chooseTarget(function (card, player, target) {
                                            return trigger.targets.includes(target);
                                        })
                                        .set('ai', function (target) {
                                            return get.attitude(trigger.target, target) > 0;
                                        });
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (result.bool) {
                                    if (event.type == 'add') {
                                        player.storage.qw_lzzn_begin = false;
                                        game.log(get.translation(result.targets[0]) + '额外成为了【' + get.translation(trigger.card) + '】的目标');
                                        trigger.targets.push(result.targets[0]);
                                    }
                                    if (event.type == 'remove') {
                                        player.storage.qw_lzzn_begin = false;
                                        game.log(get.translation(result.targets[0]) + '从【' + get.translation(trigger.card) + '】的目标中移除了');
                                        trigger.targets.remove(result.targets[0]);
                                    }
                                }
                            },
                            group: ['qw_lzzn_begin', 'qw_lzzn_after'],
                            subSkill: {
                                begin: {
                                    trigger: {
                                        player: 'useCardBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.targets.length > 1;
                                    },
                                    content() {
                                        player.storage.qw_lzzn_begin = trigger.card;
                                    },
                                },
                                after: {
                                    trigger: {
                                        player: 'useCardEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.qw_lzzn_begin;
                                    },
                                    content() {
                                        player.removeSkill('qw_lzzn');
                                        player.storage.smzl = true;
                                        lib.translate.qw_smzl_info = '每回合限一次,出牌阶段或有人濒死时,你可以流失一点体力视为对所有其他角色使用一张桃园结义.此牌可对至多x名角色失效,x为你已损体力值.';
                                    },
                                },
                            },
                        },
                        ark_bhzbd: {}, //QQQ
                        ark_wudi: {
                            trigger: {
                                player: ['changeHpBefore', 'dieBefore', 'damageBefore', 'loseHpBefore'],
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                        },
                        ark_skillshow: {
                            trigger: {
                                player: ['ark_lirenBegin', 'ark_chengjieBegin'],
                            },
                            forced: true,
                            content() {
                                if (!player.storage[trigger.name]) {
                                    player.storage[trigger.name] = ui.create.div('.arkskillshow', document.body);
                                    player.storage[trigger.name].innerHTML = get.translation(trigger.name);
                                }
                                player.storage[trigger.name].show();
                                setTimeout(function () {
                                    player.storage[trigger.name].classList.add('arkout');
                                }, 1500);
                                setTimeout(function () {
                                    player.storage[trigger.name].hide();
                                    player.storage[trigger.name].classList.remove('arkout');
                                }, 2500);
                            },
                        },
                        ark_chengjie: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.roundNumber % 2 != 0;
                            },
                            content() {
                                var players = game.filterPlayer((i) => i.identity == 'cai');
                                if (players.length) {
                                    var targets = players.randomGet();
                                    targets.damage(3);
                                    targets.addMark('ark_king_recover');
                                } //QQQ
                            },
                        },
                        ark_liren: {
                            group: ['ark_qlzj_sha', 'ark_qlzj_juedou'],
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.roundNumber % 2 == 0;
                            },
                            content() {
                                var players = game.filterPlayer((i) => i.identity == 'cai');
                                player.useCard({ name: 'sha' }, players.length > 2 ? players.randomGets(2) : players);
                            },
                        },
                        ark_zh: {
                            mode: ['boss'], //QQQ
                            subSkill: {
                                sfzl: {
                                    trigger: {
                                        player: 'changeHpAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.hp < 31;
                                    },
                                    content() {
                                        var fellow = game.addFellow(7, 'ark_sfzl');
                                        fellow.directgain(get.cards(4));
                                        fellow.side = player.side;
                                        fellow.identity = 'zhong';
                                        fellow.setIdentity('zhong');
                                        game.addVideo('setIdentity', fellow, 'zhong');
                                        fellow.addSkill('ark_zhaohuan_remove');
                                        player.removeSkill('ark_zh_sfzl');
                                    },
                                },
                                shzz: {
                                    trigger: {
                                        player: ['changeHpAfter', 'dieBefore'],
                                    },
                                    forced: true,
                                    firstDo: true,
                                    mode: ['boss'], //QQQ
                                    content() {
                                        if (event.triggername == 'dieBefore' || player.hp <= 20) {
                                            for (var i of game.players) {
                                                if (i.identity == 'zhong') i.die();
                                            }
                                            game.pause();
                                            player.hp = 20;
                                            player.update();
                                            var fj = document.createElement('img');
                                            fj.src = 'extension/超时空方舟/image/ark_bhz.jpg';
                                            fj.style.cssText = 'pointer-events:none';
                                            fj.style.display = 'block';
                                            fj.style.position = 'absolute';
                                            fj.style.top = '-30px';
                                            fj.style.left = '30px';
                                            fj.style.height = '240px';
                                            fj.style.width = '240px';
                                            fj.style.zIndex = '98';
                                            player.appendChild(fj);
                                            player.addSkill('ark_wudi');
                                            player.addSkill('ark_bhzbd');
                                            game.boss.style.left = 'calc(67%)';
                                            setTimeout(function () {
                                                var fellow = game.addFellow(5, 'ark_shzz');
                                                fellow.directgain(get.cards(4));
                                                fellow.side = player.side;
                                                fellow.identity = 'zhong';
                                                fellow.setIdentity('zhong');
                                                game.addVideo('setIdentity', fellow, 'zhong');
                                                fellow.addSkill('ark_zhaohuan_remove');
                                                fellow.style.top = 'calc(5% )';
                                                fellow.style.left = 'calc(5%)';
                                            }, 250);
                                            setTimeout(function () {
                                                var fellow1 = game.addFellow(5, 'ark_shzz');
                                                fellow1.directgain(get.cards(4));
                                                fellow1.side = player.side;
                                                fellow1.identity = 'zhong';
                                                fellow1.setIdentity('zhong');
                                                game.addVideo('setIdentity', fellow1, 'zhong');
                                                fellow1.addSkill('ark_zhaohuan_remove');
                                                fellow1.style.top = 'calc(5% )';
                                                fellow1.style.left = 'calc(25%)';
                                            }, 500);
                                            setTimeout(function () {
                                                var fellow2 = game.addFellow(5, 'ark_shzz');
                                                fellow2.directgain(get.cards(4));
                                                fellow2.side = player.side;
                                                fellow2.identity = 'zhong';
                                                fellow2.setIdentity('zhong');
                                                game.addVideo('setIdentity', fellow2, 'zhong');
                                                fellow2.addSkill('ark_zhaohuan_remove');
                                                fellow2.style.top = 'calc(5% )';
                                                fellow2.style.left = 'calc(45%)';
                                                game.resume();
                                            }, 750);
                                            trigger.cancel();
                                            player.node.avatar.setBackgroundImage('extension/超时空方舟/image/ark_King_1.jpg');
                                            player.removeSkill('ark_liren');
                                            player.removeSkill('ark_zh_shzz');
                                            player.removeSkill('ark_zh_sfzl');
                                        }
                                    },
                                },
                            },
                        },
                        ark_king: {
                            global: ['ark_king_recover', 'ark_king_global'],
                            mode: ['boss'], //QQQ
                            init(player) {
                                game.boss = player;
                                player.addSkill('ark_zh_sfzl');
                                player.addSkill('ark_zh_shzz');
                                player.update = function () {
                                    if (_status.video && arguments.length == 0) return;
                                    if (this.hp >= this.maxHp) this.hp = this.maxHp;
                                    this.hp = this.hp;
                                    this.gl_mp = this.hp;
                                    this.maxHp = this.maxHp;
                                    this.gl_maxMp = this.maxHp;
                                    this.gl_update();
                                    this.hujia = this.hujia;
                                    this.$update();
                                    this.$update(...arguments);
                                };
                            },
                            subSkill: {
                                global: {
                                    trigger: {
                                        player: 'damageBefore',
                                    },
                                    filter(event, player) {
                                        return game.mode && game.mode == 'ark' && event.player != game.boss;
                                    },
                                    forced: true,
                                    content() {
                                        player.loseMaxHp(player.maxHp - player.hp);
                                    },
                                },
                                recover: {
                                    marktext: '禁疗',
                                    intro: {
                                        name: '禁疗',
                                        content: '剩余#次',
                                    },
                                    trigger: {
                                        player: 'recoverBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.hasMark('ark_king_recover') && event.player.countMark('ark_king_recover') > 0;
                                    },
                                    content() {
                                        trigger.cancel();
                                        event.player.removeMark('ark_king_recover');
                                    },
                                },
                            },
                        },
                        ark_hbjg: {
                            trigger: {
                                player: 'phaseAfter',
                            },
                            forced: true,
                            content() {
                                player.turnOver();
                                var Q = game.filterPlayer((i) => i.identity == 'cai').randomGet();
                                if (Q) Q.turnOver();
                            },
                        }, //QQQ
                        ark_qzld: {
                            trigger: {
                                global: 'phaseBefore',
                            },
                            filter(event, player) {
                                return event.player.identity == 'cai';
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.player1 = trigger.player;
                                event.num = 1;
                                ('step 1');
                                event.player1.judge(function (card) {
                                    if (card.suit == 'spade') return 1;
                                    return -1;
                                });
                                ('step 2');
                                if (result.judge == 1) {
                                    event.player1.damage(event.num++, 'thunder');
                                } else if (event.player1.next.identity == 'cai') {
                                    event.player1 = event.player1.next;
                                    event.num++;
                                    event.goto(1);
                                }
                            },
                            group: 'ark_qzld_skill',
                            subSkill: {
                                skill: {
                                    trigger: {
                                        player: 'useCardToTargeted',
                                    },
                                    filter(event, player) {
                                        return event.target.identity == 'cai';
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        event.player1 = trigger.target;
                                        event.num = 1;
                                        ('step 1');
                                        event.player1.judge(function (card) {
                                            if (card.suit == 'spade') return 1;
                                            return -1;
                                        });
                                        ('step 2');
                                        if (result.judge == 1) {
                                            event.player1.damage(event.num++, 'thunder');
                                        } else if (event.player1.next.identity == 'cai') {
                                            event.player1 == player.next;
                                            event.num++;
                                            event.goto(1);
                                        }
                                    },
                                },
                            },
                        },
                        ark_qzhy: {
                            init(player) {
                                player.useCard(
                                    { name: 'sha', nature: 'fire' },
                                    game.filterPlayer((i) => i.identity == 'cai')
                                );
                            },
                            trigger: {
                                player: 'phaseBefore',
                            },
                            forced: true,
                            content() {
                                player.useCard(
                                    { name: 'sha', nature: 'fire' },
                                    game.filterPlayer((i) => i.identity == 'cai')
                                );
                            },
                            group: ['ark_qzhy_damage'],
                            subSkill: {
                                damage: {
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    forced: true,
                                    content() {
                                        trigger.player.addTempSkill('ark_qzhy_effect', { global: 'roundStart' });
                                    },
                                },
                                effect: {
                                    mark: true,
                                    marktext: '灼伤',
                                    intro: {
                                        name: '灼伤',
                                        content: '无法回复体力',
                                    },
                                    trigger: {
                                        player: 'recoverBefore',
                                    },
                                    forced: true,
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                            },
                        },
                        ark_zhaohuan: {
                            trigger: {
                                player: 'phaseBefore',
                            },
                            forced: true,
                            content() {
                                if (!player.storage.ark_zhaohuan1) {
                                    player.storage.ark_zhaohuan1 = true;
                                    var fellow = game.addFellow(7, ['ark_jianshi', 'ark_firedochi', 'ark_thunderdochi'].randomGet());
                                    fellow.directgain(get.cards(4));
                                    fellow.side = player.side;
                                    fellow.identity = 'zhong';
                                    fellow.setIdentity('zhong');
                                    game.addVideo('setIdentity', fellow, 'zhong');
                                    fellow.addSkill('ark_zhaohuan_remove');
                                    fellow.storage.ark_zhaohuan1 = true;
                                } else if (!player.storage.ark_zhaohuan2) {
                                    player.storage.ark_zhaohuan2 = true;
                                    var fellow = game.addFellow(4, ['ark_jianshi', 'ark_firedochi', 'ark_thunderdochi'].randomGet());
                                    fellow.directgain(get.cards(4));
                                    fellow.side = player.side;
                                    fellow.identity = 'zhong';
                                    fellow.setIdentity('zhong');
                                    game.addVideo('setIdentity', fellow, 'zhong');
                                    fellow.addSkill('ark_zhaohuan_remove');
                                    fellow.storage.ark_zhaohuan2 = true;
                                }
                            },
                            subSkill: {
                                remove: {
                                    trigger: {
                                        player: 'dieAfter',
                                    },
                                    forced: true,
                                    forceDie: true,
                                    content() {
                                        if (player.storage.ark_zhaohuan1) {
                                            for (var i of game.players) {
                                                if (i.name == 'ark_summoner') i.storage.ark_zhaohuan1 = false;
                                            }
                                        }
                                        if (player.storage.ark_zhaohuan2) {
                                            for (var i of game.players) {
                                                if (i.name == 'ark_summoner') i.storage.ark_zhaohuan2 = false;
                                            }
                                        }
                                        player.maxHp = 0;
                                        player.remove();
                                    },
                                },
                            },
                        },
                        ark_sleep: {
                            trigger: {
                                global: ['damageBefore', 'loseHpBefore'],
                            },
                            filter(event, player) {
                                return event.player.name == 'ark_summoner';
                            },
                            content() {
                                trigger.cancel();
                                player.damage(trigger.num);
                            },
                        },
                        ark_js: {
                            trigger: {
                                player: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.target.identity == 'cai';
                            },
                            content() {
                                trigger.target.addTempSkill('fengyin', { player: 'phaseAfter' });
                            },
                        },
                        ark_dghs: {
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            mod: {
                                cardnature(card, player) {
                                    if (card.name == 'sha') return 'thunder';
                                },
                                targetInRange(card, player, target, now) {
                                    return true;
                                },
                            },
                            content() {
                                trigger.effectCount += 3;
                            },
                        },
                        ark_huoqiu: {
                            trigger: {
                                global: 'useCardAfter',
                            },
                            filter(event, player) {
                                return event.player.identity == 'cai';
                            },
                            content() {
                                player.loseHp(1);
                                trigger.player.damage('fire');
                            },
                        },
                        ark_qlzj: {
                            group: ['ark_qlzj_sha', 'ark_qlzj_juedou'],
                            forced: true,
                            subSkill: {
                                sha: {
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card.name == 'sha' && !event.parent.directHit.includes(event.target);
                                    },
                                    logTarget: 'target',
                                    content() {
                                        var id = trigger.target.playerid;
                                        var map = trigger.parent.customArgs;
                                        if (!map[id]) map[id] = {};
                                        if (typeof map[id].shanRequired == 'number') {
                                            map[id].shanRequired++;
                                        } else {
                                            map[id].shanRequired = 2;
                                        }
                                    },
                                    ai: {
                                        directHit_ai: true,
                                        skillTagFilter(player, tag, arg) {
                                            if ((arg && arg.card.name != 'sha') || arg.target.countCards('h', 'shan') > 1) return false;
                                        },
                                    },
                                },
                                juedou: {
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
                                        var id = (player == trigger.player ? trigger.target : trigger.player)['playerid'];
                                        var idt = trigger.target.playerid;
                                        var map = trigger.parent.customArgs;
                                        if (!map[idt]) map[idt] = {};
                                        if (!map[idt].shaReq) map[idt].shaReq = {};
                                        if (!map[idt].shaReq[id]) map[idt].shaReq[id] = 1;
                                        map[idt].shaReq[id]++;
                                    },
                                    ai: {
                                        directHit_ai: true,
                                        skillTagFilter(player, tag, arg) {
                                            if ((arg && arg.card.name != 'juedou') || Math.floor(arg.target.countCards('h', 'sha') / 2) > player.countCards('h', 'sha')) return false;
                                        },
                                    },
                                },
                            },
                        },
                        ark_shengyu: {
                            init(player) {
                                /*player.classList.add('ark_player')
                                player.node.avatar.classList.add('ark_avatar')
                                if (player.name == 'arK_firedochi') {
                                    player.style.setProperty('width', '120px', 'important')
                                }
                                else if (player.name == 'ark_greenguard' || player.name == 'ark_yellowguard') {
                                    player.style.setProperty('width', '200px', 'important')
                                    player.style.top = "calc(5% )"
                                    if (player.name == 'ark_greenguard')
                                        player.style.left = "calc(10% )"
                                    if (player.name == 'ark_yellowguard')
                                        player.style.left = "calc(70% )"
                                }
                                else if (player.name == 'ark_jianshi') {
                                    player.style.setProperty('width', '160px', 'important')
                                }
                                player.querySelector('.hp').hide()
                                player.node.avatar.style.backgroundImage = player.node.avatar.style.backgroundImage.split(',')[0]*/
                            },
                            popup: false,
                            fixed: true,
                            mode: ['boss'],
                            charlotte: true,
                            trigger: {
                                global: 'roundStart',
                                player: ['dieAfter'],
                            },
                            forceDie: true,
                            forced: true,
                            content() {
                                'step 0';
                                game.checkResult = function () {
                                    if (game.boss == game.me) {
                                        game.over(game.boss.isAlive());
                                    } else {
                                        if (game.boss == 'ark') game.over(false);
                                        else game.over(!game.boss.isAlive());
                                    }
                                };
                                /*for (var i = 0; i < game.players.length; i++) {
                                    if (game.players[i].identity == 'cai') {
                                        game.players[i].style.top = "calc(50% )"
                                        game.players[i].maxHp = game.players[i].maxHp * 4
                                        game.players[i].hp = game.players[i].maxHp
                                        game.players[i].update()
                                    }
                                }
                                game.players[0].style.left = "calc(0% )"
                                game.players[1].style.left = "calc(45% )"
                                game.players[2].style.left = "calc(90% )"*/
                                if (!game.arknum) {
                                    game.arknum = 1;
                                }
                                if (player.name == 'ark_greenguard' && player == game.boss) {
                                    game.addBossFellow(game.me == game.boss ? 6 : 5, 'ark_yellowguard');
                                    game.boss = 'ark';
                                    game.mode = 'ark';
                                    player.setIdentity('zhong');
                                    player.identity = 'zhong';
                                    for (var player of game.players) {
                                        if (player.identity == 'cai') {
                                            player.maxHp = player.maxHp * 2;
                                            player.hp = player.hp * 2;
                                            player.update();
                                        }
                                    }
                                }
                                if (trigger.name == 'die' && !game.filterPlayer((i) => i.identity == 'zhong').length) {
                                    switch (game.arknum) {
                                        case 1:
                                            for (var i of game.dead) {
                                                i.maxHp = 0;
                                                i.remove();
                                            }
                                            game.arknum++;
                                            game.addBossFellow(game.me == game.boss ? 6 : 5, 'ark_jianshi');
                                            game.addBossFellow(game.me == game.boss ? 6 : 6, 'ark_firedochi');
                                            game.addBossFellow(game.me == game.boss ? 6 : 7, 'ark_thunderdochi');
                                            break;
                                        case 2:
                                            for (var i of game.dead) {
                                                i.maxHp = 0;
                                                i.remove();
                                            }
                                            game.arknum++;
                                            game.addBossFellow(game.me == game.boss ? 6 : 5, 'ark_sleepdochi');
                                            game.addBossFellow(game.me == game.boss ? 6 : 6, 'ark_summoner');
                                            break;
                                        case 3:
                                            for (var i of game.dead) {
                                                i.maxHp = 0;
                                                i.remove();
                                            }
                                            game.arknum++;
                                            game.addBossFellow(game.me == game.boss ? 6 : 5, 'ark_icewarlock');
                                            game.addBossFellow(game.me == game.boss ? 6 : 6, 'ark_firewarlock');
                                            game.addBossFellow(game.me == game.boss ? 6 : 7, 'ark_thunderwarlock');
                                            break;
                                        case 4: {
                                            for (var i of game.dead) {
                                                i.maxHp = 0;
                                                i.remove();
                                            }
                                            for (var i = 0; i < game.players.length; i++) {
                                                if (game.players[i].identity == 'cai') {
                                                    game.players[i].style.top = 'calc(50% )';
                                                    game.players[i].style.left = `calc(${i * 45}% )`;
                                                }
                                            }
                                            game.arknum++;
                                            ui.background.setBackgroundImage('extension/超时空方舟/image/ark_king_background.jpg');
                                            lib.config.image_background = '被遗忘的王';
                                            lib.config.background_music = 'music_custom';
                                            lib.config.background_music_src = 'extension/超时空方舟/audio/ark_king_music.mp3';
                                            game.playBackgroundMusic();
                                            var boss = game.addFellow(1, 'ark_King_0');
                                            boss.directgain(get.cards(4));
                                            boss.side = true;
                                            boss.identity = 'shen';
                                            boss.setIdentity('shen');
                                            boss.style.setProperty('width', '330px', 'important');
                                            boss.style.setProperty('height', '220px ', 'important');
                                            boss.style.top = 'calc(5% )';
                                            boss.querySelector('.hp').hide();
                                            boss.style.left = 'calc(34% )';
                                            galgame.sce('被遗忘的王');
                                        }
                                    }
                                }
                            },
                        },
                        qw_mzrz_wuzhuang: {
                            charlotte: true,
                            trigger: {
                                global: ['cardsDiscardAfter', 'loseAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.cards && event.cards.length) {
                                    //QQQ
                                    for (var i = 0; i < event.cards.length; i++) {
                                        if (get.type(event.cards[i]) != 'equip') continue;
                                        if (get.position(event.cards[i], true) == 'd') return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                var list = [];
                                var b = 0;
                                for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
                                    if (get.type(ui.discardPile.childNodes[i]) == 'equip') {
                                        if (list.length) {
                                            for (var a of list) {
                                                if (a.name == ui.discardPile.childNodes[i].name) b = 1;
                                            }
                                            if (b != 1) {
                                                list.push({ name: ui.discardPile.childNodes[i].name, number: ui.discardPile.childNodes[i].number, suit: ui.discardPile.childNodes[i].suit });
                                            }
                                        } else {
                                            list.push({ name: ui.discardPile.childNodes[i].name, number: ui.discardPile.childNodes[i].number, suit: ui.discardPile.childNodes[i].suit });
                                        }
                                    }
                                }
                                for (var i of trigger.cards) {
                                    if (i.storage.gl_wuzhuang) {
                                        continue;
                                    }
                                    if (get.type(i) == 'equip') {
                                        if (list.length) {
                                            for (var a of list) {
                                                if (a.name == i.name) b = 1;
                                            }
                                            if (b != 1) {
                                                list.push({ name: i.name, number: i.number, suit: i.suit });
                                            }
                                        } else {
                                            list.push({ name: i.name, number: i.number, suit: i.suit });
                                        }
                                    }
                                }
                                if (_status.connectMode) {
                                    game.broadcast(function (list) {
                                        lib.skill['qw_mzrz'].gl_wuzhuang = list;
                                    }, list);
                                } else lib.skill['qw_mzrz'].gl_wuzhuang = list;
                            },
                        },
                        qw_mzrz: {
                            gl_wuzhuang: [],
                            enable: ['chooseToUse', 'chooseToRespond'],
                            hiddenCard(player, name) {
                                if (!['sha', 'shan'].includes(name)) return false;
                                return player.getCards('hes').filter(function (card) {
                                    return get.type(card) == 'equip';
                                }).length;
                            },
                            filter(event, player) {
                                if (
                                    !player.getCards('hes').filter(function (card) {
                                        return get.type(card) == 'equip';
                                    }).length
                                )
                                    return false;
                                if (
                                    (event.filterCard &&
                                        event.filterCard(
                                            {
                                                name: 'sha',
                                            },
                                            player,
                                            event
                                        )) ||
                                    event.filterCard(
                                        {
                                            name: 'shan',
                                        },
                                        player,
                                        event
                                    )
                                ) {
                                    return true;
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    if (
                                        event.filterCard &&
                                        event.filterCard(
                                            {
                                                name: 'sha',
                                            },
                                            player,
                                            event
                                        )
                                    ) {
                                        list.push(['基本', '', 'sha']);
                                        for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
                                    }
                                    if (
                                        event.filterCard &&
                                        event.filterCard(
                                            {
                                                name: 'shan',
                                            },
                                            player,
                                            event
                                        )
                                    ) {
                                        list.push(['基本', '', 'shan']);
                                    }
                                    return ui.create.dialog('民之睿智', [list, 'vcard'], 'hidden');
                                },
                                backup(links, player) {
                                    return {
                                        filterCard(card) {
                                            return get.type(card) == 'equip';
                                        },
                                        viewAs: {
                                            name: links[0][2],
                                            nature: links[0][3],
                                        },
                                        position: 'hes',
                                    };
                                },
                                prompt(links, player) {
                                    return '将1张装备牌当做' + get.translation(links[0][2]) + '使用或打出';
                                },
                            },
                        },
                        qw_tzs: {
                            global: 'qw_tzs_recover',
                            trigger: {
                                source: 'damageAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                if (!trigger.player.isLinked()) {
                                    game.broadcastAll(function () {
                                        game.playAudio('../extension/超时空方舟/audio', ['qw_tzs1', 'qw_tzs2', 'qw_tzs3/qw_tzs4'].randomGet() + '.mp3');
                                    });
                                    trigger.player.link();
                                }
                            },
                            subSkill: {
                                recover: {
                                    trigger: {
                                        player: 'useCardToTargeted',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !player.hasSkill('qw_tzs') && player.isLinked() && event.target.hasSkill('qw_tzs');
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseToDiscard('弃置一张牌并解除横置或令此牌对' + get.translation(trigger.target) + '无效', 'he').set('ai', function (card) {
                                            var player = _status.event.player;
                                            if (get.attitude(player, trigger.target) < 0) return 10 - get.value(card);
                                            return -1;
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            player.link();
                                        } else trigger.parent.excluded.addArray([trigger.target]);
                                    },
                                },
                            },
                        },
                        qw_bianrong: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            init(player) {
                                player.gl_permanent('use', -1);
                            },
                            content() {
                                'step 0';
                                if (player.storage.gl_permanent && player.storage.gl_permanent.handcard && player.storage.gl_permanent.handcard > 0) {
                                    player.storage.gl_permanent.handcard = 0;
                                }
                                if (player.storage.gl_permanent && player.storage.gl_permanent.draw && player.storage.gl_permanent.draw > 0) {
                                    player.storage.gl_permanent.draw = 0;
                                }
                                if (player.storage.gl_permanent && player.storage.gl_permanent.use && player.storage.gl_permanent.use >= 0) {
                                    player.storage.gl_permanent.use = -1;
                                }
                                event.nums = 12;
                                ('step 1');
                                var list = ['手牌上限'];
                                if (event.nums >= 2) list.push('出杀数');
                                if (event.nums >= 3) list.push('摸牌数');
                                if (event.nums >= 4) list.push('重铸');
                                if (event.nums >= 5) list.push('回复');
                                list.push('取消');
                                if (event.nums == 0) {
                                    if (player.storage.gl_permanent.use && player.storage.gl_permanent.use >= 2) {
                                        game.broadcastAll(function (player) {
                                            player.say('好了,该斩落哪个部位呢!');
                                            game.playAudio('../extension/超时空方舟/audio/qw_bianrong2.mp3');
                                        }, player);
                                    } else if (player.storage.gl_permanent.draw && player.storage.gl_permanent.draw >= 2) {
                                        game.broadcastAll(function (player) {
                                            player.say('真不错.是要较量性能吧？');
                                            game.playAudio('../extension/超时空方舟/audio/qw_bianrong3.mp3');
                                        }, player);
                                    } else if (player.storage.gl_permanent.handcard && player.storage.gl_permanent.handcard >= 6) {
                                        game.broadcastAll(function (player) {
                                            player.say('要战斗吗？生物真是难以理解.');
                                            game.playAudio('../extension/超时空方舟/audio/qw_bianrong6.mp3');
                                        }, player);
                                    } else {
                                        game.broadcastAll(function () {
                                            game.playAudio('../extension/超时空方舟/audio/qw_bianrong4.mp3');
                                        });
                                    }
                                    event.finish();
                                } else
                                    player.chooseControl(list).set('ai', function () {
                                        var player = _status.event.player;
                                        var enemies = game.filterPlayer((i) => get.effect(player, { name: 'sha' }, i) > 0);
                                        var use = false;
                                        for (var enemy of enemies) {
                                            if (player.inRange(enemy)) use = true;
                                        }
                                        if (player.hasJudge('lebu')) use = false;
                                        if (
                                            player.countCards('e') &&
                                            player.getCards('e').filter(function (card) {
                                                return card.storage.gl_wuzhuang;
                                            }).length
                                        ) {
                                            if (
                                                player.getCards('hs').filter(function (card) {
                                                    return card.name == 'sha';
                                                }).length >= 3
                                            ) {
                                                if (
                                                    event.nums >
                                                    player.getCards('h').filter(function (card) {
                                                        return card.name == 'sha';
                                                    }).length *
                                                    2 &&
                                                    use
                                                )
                                                    return '出杀数';
                                                else if (player.countCards('h') >= 5) return '手牌上限';
                                                else if (list.includes('摸牌数')) return '摸牌数';
                                                else return '手牌上限';
                                            } else return '重铸';
                                        }
                                        if (player.hp <= 1 && list.includes('回复')) {
                                            return '回复';
                                        }
                                        if (player.hp >= 2 && player.countCards('hs') < 5) {
                                            if (
                                                player.getCards('hs').filter(function (card) {
                                                    return card.name == 'sha';
                                                }).length >= 3 &&
                                                event.nums >
                                                player.getCards('h').filter(function (card) {
                                                    return card.name == 'sha';
                                                }).length *
                                                2 &&
                                                use
                                            )
                                                return '出杀数';
                                            if (list.includes('摸牌数') && event.nums > 6) {
                                                return '摸牌数';
                                            } else if (
                                                player.getCards('hs').filter(function (card) {
                                                    return card.name == 'sha';
                                                }).length >= 2 &&
                                                list.includes('出杀数') &&
                                                use
                                            )
                                                return '出杀数';
                                            else return '手牌上限';
                                        } else if (player.hp >= 2 && player.countCards('hs') >= 5) {
                                            if (
                                                player.getCards('hs').filter(function (card) {
                                                    return card.name == 'sha';
                                                }).length > 2 &&
                                                use
                                            ) {
                                                return '出杀数';
                                            } else {
                                                if (event.nums > 6) {
                                                    return '摸牌数';
                                                } else {
                                                    return '手牌上限';
                                                }
                                            }
                                        } else {
                                            return '手牌上限';
                                        }
                                    });
                                ('step 2');
                                switch (result.control) {
                                    case '手牌上限':
                                        event.control = 1;
                                        player
                                            .chooseCount([0, event.nums], 0, function (num) {
                                                return num % 1 == 0;
                                            })
                                            .set('ai', function (event, player) {
                                                return 1;
                                            });
                                        break;
                                    case '出杀数':
                                        event.control = 2;
                                        player
                                            .chooseCount([0, event.nums], 0, function (num) {
                                                return num % 2 == 0;
                                            })
                                            .set('ai', function (event, player) {
                                                return 2;
                                            });
                                        break;
                                    case '摸牌数':
                                        event.control = 3;
                                        player
                                            .chooseCount([0, event.nums], 0, function (num) {
                                                return num % 3 == 0;
                                            })
                                            .set('ai', function (event, player) {
                                                return 3;
                                            });
                                        break;
                                    case '重铸':
                                        event.control = 4;
                                        player.recast(player.getCards('he'));
                                        game.broadcastAll(function () {
                                            game.playAudio('../extension/超时空方舟/audio/qw_bianrong1.mp3');
                                        });
                                        event.nums -= 4;
                                        event.goto(1);
                                        break;
                                    case '回复':
                                        event.control = 5;
                                        player
                                            .chooseCount([0, event.nums], function (num) {
                                                return num % 5 == 0;
                                            })
                                            .set('ai', function (event, player) {
                                                return 5;
                                            });
                                        break;
                                    case '取消':
                                        event.finish();
                                }
                                ('step 3');
                                if (result.num) {
                                    switch (event.control) {
                                        case 1:
                                            player.gl_permanent('handcard', result.num);
                                            event.nums -= result.num;
                                            event.goto(1);
                                            break;
                                        case 2:
                                            player.gl_permanent('use', result.num / 2);
                                            event.nums -= result.num;
                                            event.goto(1);
                                            break;
                                        case 3:
                                            player.gl_permanent('draw', result.num / 3);
                                            event.nums -= result.num;
                                            event.goto(1);
                                            break;
                                        case 5:
                                            player.recover(result.num / 5);
                                            event.nums -= result.num;
                                            event.goto(1);
                                            break;
                                    }
                                } else if (result.num === 0) {
                                    event.goto(1);
                                }
                            },
                            ai: {
                                unequip1: true,
                                threaten: 1.6,
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return 0;
                                },
                            },
                        },
                        qw_AroundCaliburnc: {
                            init(player) {
                                player.storage.qw_AroundCaliburnc = [];
                                player.storage.qw_AroundCaliburnc1 = 0;
                            },
                            nobracket: true,
                            trigger: {
                                player: ['useCardAfter', 'respondAfter'],
                            },
                            filter(event, player) {
                                var list = [];
                                for (var i of player.getCards('h')) {
                                    list.push(i.suit);
                                }
                                if (!list.includes(event.card.suit)) return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseCard('he', '你可以重铸一张牌并令一名角色回复一点体力,本回合手牌上限+1');
                                ('step 1');
                                if (result.bool) {
                                    player.recast(result.cards);
                                    player.storage.qw_AroundCaliburnc1++;
                                    player.chooseTarget();
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    result.targets[0].recover();
                                }
                            },
                            mod: {
                                maxHandcardBase(player, num) {
                                    return player.hp + player.storage.qw_AroundCaliburnc1;
                                },
                            },
                            group: 'qw_AroundCaliburnc_remove',
                            subSkill: {
                                remove: {
                                    trigger: {
                                        player: 'phaseAfter',
                                    },
                                    forced: true,
                                    content() {
                                        player.storage.qw_AroundCaliburnc = [];
                                        player.storage.qw_AroundCaliburnc1 = 0;
                                    },
                                },
                            },
                        },
                        qw_yyzz: {
                            trigger: {
                                player: ['drawAfter', 'gainAfter', 'loseAfter'],
                            },
                            usable: 1,
                            forced: true,
                            filter(event, player) {
                                var list = [];
                                return (
                                    player.getCards('h').filter(function (card) {
                                        if (!list.includes(card.suit)) {
                                            list.push(card.suit);
                                            return true;
                                        }
                                    }).length == 4 && player.countCards('h') == 4
                                );
                            },
                            content() {
                                if (!player.storage.yyzz) {
                                    player.storage.yyzz = 1;
                                    player.recast(player.getCards('h'));
                                    player.draw(player.storage.yyzz);
                                } else if (player.storage.yyzz < 6) {
                                    player.storage.yyzz++;
                                    player.recast(player.getCards('h'));
                                    player.draw(player.storage.yyzz);
                                } else {
                                    player.draw(player.storage.yyzz);
                                }
                            },
                        },
                        qw_niren: {
                            init(player) {
                                player.storage.qw_niren = [];
                            },
                            trigger: {
                                source: 'damageBegin',
                            },
                            prompt: '是否取消此伤害并令其选择将一张武器牌交给你或跳过下个出牌阶段.',
                            content() {
                                'step 0';
                                trigger.cancel();
                                player.storage.qw_niren.push(trigger.player);
                                game.log(
                                    trigger.player.getCards('he').filter(function (card) {
                                        return get.subtype(card) == 'equip1';
                                    }).length
                                );
                                if (
                                    trigger.player.getCards('he').filter(function (card) {
                                        return get.subtype(card) == 'equip1';
                                    }).length
                                ) {
                                    trigger.player.chooseCard('he', 1, function (card, player) {
                                        return get.subtype(card) == 'equip1';
                                    });
                                }
                                ('step 1');
                                if (result.bool) trigger.player.give(result.cards, player);
                                else {
                                    trigger.player.skip('phaseUse');
                                }
                            },
                            mod: {
                                playerEnabled(card, player, target) {
                                    if (player.storage.qw_niren.includes(target)) return false;
                                },
                            },
                            group: 'qw_niren_remove',
                            subSkill: {
                                remove: {
                                    trigger: {
                                        global: 'phaseAfter',
                                    },
                                    forced: true,
                                    content() {
                                        player.storage.qw_niren = [];
                                    },
                                },
                            },
                        },
                        qw_badao: {
                            trigger: {
                                player: 'loseAfter',
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            filter(event, player) {
                                var evt = event.getl(player);
                                if (evt && evt.player == player && evt.es && evt.es.length) {
                                    for (var i of evt.es) {
                                        if (get.subtype(i) == 'equip1') return true;
                                    }
                                }
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget('###视为使用一张【杀】', false, function (card, player, target) {
                                    return player.canUse({ name: 'sha' }, target);
                                });
                                ('step 1');
                                if (result.bool) {
                                    game.log(1);
                                    player.useCard({ name: 'sha' }, result.targets[0]);
                                    //player.addTempSkill('qw_badao_fengyin', { player: 'phaseBegin' })
                                }
                            },
                            /* subSkill: {
                                 fengyin: {
                                     init (player, skill) {
                                         player.addSkillBlocker(skill);
                                     },
                                     onremove (player, skill) {
                                         player.removeSkillBlocker(skill);
                                     },
                                     charlotte: true,
                                     skillBlocker (skill, player) {
                                         return skill == 'qw_niren'
                                     },
                                                                         }
                             }*/
                        },
                        qw_langke: {
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                for (var i of event.player.getHistory('sourceDamage')) {
                                    if (player.inRange(i['player']) || player == i['player']) return true;
                                }
                            },
                            content() {
                                'step 0';
                                game.broadcastAll(
                                    function (player, player1) {
                                        player.chooseToUse({
                                            filterTarget(card, player, target) {
                                                if (target != player && target != player1) return false;
                                                if (!card) return false;
                                                return true;
                                            },
                                            prompt: '你可以使用一张牌',
                                        });
                                    },
                                    player,
                                    trigger.player
                                );
                                ('step 1');
                                if (result.bool) {
                                    player.draw(1);
                                }
                            },
                        },
                        qw_xinsheng: {
                            trigger: {
                                player: 'die',
                            },
                            forced: true,
                            forceDie: true,
                            content() {
                                game.playAudio('../extension/超时空方舟/audio', ['death_1/death_2'].randomGet() + '.mp3');
                            },
                            mod: {
                                cardname(card, player) {
                                    if (lib.card[card.name].type != 'equip') return 'shan';
                                },
                            },
                        },
                        qw_jiexi: {
                            init(player) {
                                player.storage.qw_jiexi = {};
                                player.storage.qw_jiexiskill = [];
                            },
                            mark: true,
                            intro: {
                                markcount(storage) {
                                    return;
                                },
                                mark(dialog, storage, player) {
                                    var list = [];
                                    for (var i of Object.keys(player.storage.qw_jiexi)) {
                                        list.push([player.storage.qw_jiexi[i], '', i]);
                                    }
                                    dialog.add([list, 'vcard']);
                                    dialog.addText('解析的技能');
                                    dialog.add(get.translation(player.storage.qw_jiexiskill));
                                    player.storage.qw_jiexi_dialog = dialog;
                                },
                            },
                            trigger: {
                                global: 'useCardBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                'step 0';
                                if (get.type(trigger.card) != 'equip') {
                                    if (!player.storage.qw_jiexi[trigger.card.name]) player.storage.qw_jiexi[trigger.card.name] = 1;
                                    else player.storage.qw_jiexi[trigger.card.name]++;
                                    if (trigger.targets.includes(player)) {
                                        player.storage.qw_jiexi[trigger.card.name]++;
                                    }
                                }
                                event.list = lib.character[trigger.player.name][3];
                                for (var i of player.storage.qw_jiexiskill) {
                                    if (event.list.includes(i)) {
                                        event.list = event.list.filter(function (a) {
                                            return a != i;
                                        });
                                    }
                                }
                                if ((get.type(trigger.card) == 'trick' || trigger.card.name == 'sha') && trigger.targets.includes(player)) {
                                    player.chooseControl(event.list).set('prompt', '请选择要解析的技能');
                                }
                                ('step 1');
                                if (result.control) player.storage.qw_jiexiskill.push(result.control);
                            },
                        },
                        qw_fuxian: {
                            enable: ['chooseToUse', 'chooseToRespond'],
                            hiddenCard(player, name) {
                                return player.countCards('h') && Object.keys(player.storage.qw_jiexi).includes(name) && player.storage.qw_jiexi[name] > 1;
                            },
                            filter(event, player) {
                                for (var a of Object.keys(player.storage.qw_jiexi)) {
                                    if (player.storage.qw_jiexi[a] > 1 && player.countCards('h') > 0) return true;
                                }
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    for (var name of Object.keys(player.storage.qw_jiexi)) {
                                        if (get.type(name) != 'equip') {
                                            if (player.storage.qw_jiexi[name] > 1) {
                                                list.push([player.storage.qw_jiexi[name], '', name]);
                                                if (name == 'sha') {
                                                    for (var j of lib.inpile_nature) list.push([player.storage.qw_jiexi[name], '', 'sha', j]);
                                                }
                                            }
                                        }
                                    }
                                    return ui.create.dialog('复现', [list, 'vcard']);
                                },
                                filter(button, player) {
                                    return _status.event.parent.filterCard(
                                        {
                                            name: button.link[2],
                                        },
                                        player,
                                        _status.event.parent
                                    );
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    if (player.countCards('hs', button.link[2]) > 0) return 0;
                                    var effect = player.getUseValue(button.link[2]);
                                    if (effect > 0) return effect;
                                    return 0;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard: true,
                                        selectCard: 1,
                                        popname: true,
                                        complexCard: true,
                                        check(card) {
                                            return 6 - get.value(card);
                                        },
                                        position: 'h',
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        onuse(result, player) {
                                            player.storage.qw_jiexi[result.card.name] -= 2;
                                            game.playAudio('../extension/超时空方舟/audio', ['xb_1', 'xb_2/xb_3'].randomGet() + '.mp3');
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张牌当做' + get.translation(links[0][2]) + '使用';
                                },
                            },
                            ai: {
                                order: 4,
                                result: {
                                    player: 1,
                                },
                                threaten: 1.9,
                            },
                        },
                        qw_yanmo: {
                            trigger: {
                                source: 'damageBegin',
                                player: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('he') && event.nature != 'fire';
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard('he').set('ai', function (card) {
                                    if (card.name == 'qw_zljg_f' && card.name == 'qw_zljg_p') return card;
                                    return 8 - get.value(card);
                                });
                                ('step 1');
                                if (result.bool) {
                                    trigger.nature = 'fire';
                                }
                            },
                            group: 'qw_yanmo_draw',
                            subSkill: {
                                draw: {
                                    trigger: {
                                        source: 'damageAfter',
                                        player: 'damageAfter',
                                    },
                                    filter(event, player) {
                                        return event.nature == 'fire';
                                    },
                                    lastDo: true,
                                    forced: true,
                                    content() {
                                        player.draw();
                                    },
                                },
                            },
                        },
                        qw_zljg_f_skill: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                            },
                            trigger: {
                                player: 'shaMiss',
                            },
                            filter(event, player) {
                                return event.responded.cards;
                            },
                            content() {
                                lib.card.qw_zljg_f.distance.attackFrom++;
                                player.gain(trigger.responded.cards);
                                for (var a of player.getCards('e')) {
                                    if (a.name == 'qw_zljg_f') {
                                        game.broadcastAll(function (a) {
                                            a.storage.qw_zljg--;
                                        }, a);
                                    }
                                }
                            },
                        },
                        qw_zljg_p_skill: {
                            enable: 'chooseToUse',
                            filterCard: true,
                            selectCard: -1,
                            position: 'h',
                            filter(event, player) {
                                var hs = player.getCards('h');
                                if (!hs.length) return false;
                                for (var i = 0; i < hs.length; i++) {
                                    var mod2 = game.checkMod(hs[i], player, 'unchanged', 'cardEnabled2', player);
                                    if (mod2 === false) return false;
                                }
                                return true;
                            },
                            viewAs: { name: 'sha', qw_effect: 'jiangui' },
                            group: 'qw_zljg_p_skill_skill',
                            subSkill: {
                                skill: {
                                    trigger: {
                                        player: 'useCard1',
                                    },
                                    filter(event, player) {
                                        return event.card.qw_effect == 'jiangui';
                                    },
                                    forced: true,
                                    content() {
                                        const num = Math.floor(
                                            trigger.cards.filter(function (card) {
                                                return get.color(card) == 'red';
                                            }).length / 2
                                        );
                                        if (num > 0) {
                                            player.discardPlayerCard(trigger.targets[0], num, 'he', true);
                                            trigger.baseDamage += num;
                                        }
                                    },
                                },
                            },
                        },
                        qw_jiangui: {
                            gl_wuzhuang: [
                                {
                                    name: 'qw_zljg_f',
                                    number: 5,
                                    suit: 'heart',
                                },
                                {
                                    name: 'qw_zljg_p',
                                    number: 5,
                                    suit: 'heart',
                                },
                            ],
                            derivation: ['qw_zljg_f', 'qw_zljg_p'],
                            trigger: {
                                source: 'damageAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.nature && event.nature == 'fire';
                            },
                            content() {
                                player.recover(trigger.num);
                            },
                        },
                        _ark_image: {
                            trigger: {
                                global: 'gameDrawBefore',
                            },
                            forced: true,
                            content() {
                                if (player.name.slice(0, 3) == 'qw_') player.node.avatar.style.backgroundImage = player.node.avatar.style.backgroundImage.split(',')[0];
                            },
                        },
                        qw_zilian: {
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (target == player) {
                                        return true;
                                    }
                                },
                                targetInRange(card, player, target, now) {
                                    if (target == player) {
                                        return true;
                                    }
                                },
                            },
                            trigger: {
                                player: 'useCardEnd',
                            },
                            filter(event, player) {
                                return event.targets.includes(player) && player.countCards('h') <= player.maxHp;
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                        },
                        qw_mofa: {
                            init(player) {
                                player.storage.qw_mofa = 0;
                            },
                            enable: 'chooseToUse',
                            hiddenCard(player, name) {
                                return player.storage.qw_mofa == 1 && !player.getStorage('mofa').includes(name) && lib.inpile.includes(name);
                            },
                            filter(event, player) {
                                return player.storage.qw_mofa == 1 && player.countCards('hs') > 0;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    for (var name of lib.inpile) {
                                        if (get.type(name) == 'basic' || get.type(name) == 'trick') {
                                            if (player.getStorage('mofa').includes(name)) continue;
                                            list.push([get.translation(get.type(name)), '', name]);
                                            if (name == 'sha') {
                                                for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
                                            }
                                        }
                                    }
                                    return ui.create.dialog('魔法', [list, 'vcard']);
                                },
                                filter(button, player) {
                                    return _status.event.parent.filterCard(
                                        {
                                            name: button.link[2],
                                        },
                                        player,
                                        _status.event.parent
                                    );
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    if (player.countCards('hs', button.link[2]) > 0) return 0;
                                    var effect = player.getUseValue(button.link[2]);
                                    if (effect > 0) return effect;
                                    return 0;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard: true,
                                        selectCard() {
                                            var num = 0;
                                            if (ui.selected.cards)
                                                for (var a of ui.selected.cards) {
                                                    num = num + get.translation(a.name).length;
                                                }
                                            if (num < get.translation(links[0][2]).length) return 999;
                                            return [1, Infinity];
                                        },
                                        popname: true,
                                        complexCard: true,
                                        check(card) {
                                            return 6 - get.value(card);
                                        },
                                        position: 'hs',
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        onuse(result, player) {
                                            player.storage.qw_mofa = 0;
                                            player.markAuto('mofa', [result.card.name]);
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '将任意张字数和不少' + get.translation(links[0][2]).length + '的牌当做' + get.translation(links[0][2]) + '使用';
                                },
                            },
                            ai: {
                                order: 4,
                                result: {
                                    player: 1,
                                },
                                threaten: 1.9,
                            },
                            group: ['qw_mofa_use', 'qw_mofa_num', 'qw_mofa_update'],
                            subSkill: {
                                update: {
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    forced: true,
                                    content() {
                                        player.storage['mofa'] = [];
                                    },
                                },
                                num: {
                                    init(player) {
                                        player.storage.qw_mofa_use = 0;
                                    },
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    forced: true,
                                    content() {
                                        if (player.storage.qw_mofa == 0) {
                                            player.storage.qw_mofa_use++;
                                            if (player.storage.qw_mofa_use % 4 == 0) player.storage.qw_mofa = 1;
                                        }
                                    },
                                },
                                use: {
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.skill && event.skill == 'qw_mofa_backup' && event.target == event.targets[0];
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseCardButton('你可以将此牌对至多' + trigger.cards.length + '名角色的效果改为构成此牌的一张牌.', trigger.cards, 1);
                                        game.log(trigger.skill, trigger.card, trigger.cards);
                                        ('step 1');
                                        if (result.bool) {
                                            event.cards = result.links;
                                            game.broadcastAll(
                                                function (player, cards, card, links, targets) {
                                                    player
                                                        .chooseTarget([0, cards.length], '魔法:选择一名目标角色,令' + get.translation(card) + '对其的效果变为' + get.translation(links[0]), function (card, player, target) {
                                                            return targets.includes(target);
                                                        })
                                                        .set('ai', function (target) {
                                                            var value = get.effect(target, links[0], player, player) - get.effect(target, card, player, player);
                                                            if (value > 0) return value;
                                                            return 0;
                                                        });
                                                },
                                                player,
                                                trigger.cards,
                                                trigger.card,
                                                result.links,
                                                trigger.targets
                                            );
                                        }
                                        ('step 2');
                                        if (result.bool) {
                                            trigger.card.huanxiang = {
                                                players: result.targets.slice(0),
                                                name: event.cards[0].name,
                                            };
                                        }
                                    },
                                },
                            },
                        },
                        qw_lvxing: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            content() {
                                player.recast(player.getCards('he'));
                            },
                        },
                        qw_AroundCaliburn: {
                            trigger: {
                                player: 'die',
                            },
                            forced: true,
                            forceDie: true,
                            init(player) {
                                player.storage.qw_xiangdaoc = [];
                                player.storage.qw_hpzuzhou = 0;
                                player.storage.qw_zuzhounum = 0;
                                if (!player.node.handcards1.cardMod) {
                                    player.node.handcards1.cardMod = {};
                                }
                                if (!player.node.handcards2.cardMod) {
                                    player.node.handcards2.cardMod = {};
                                }
                                var cardMod = function (card) {
                                    for (var a = 0; a < player.storage.qw_hpzuzhou; a++) {
                                        if (card == player.getCards('h')[a]) {
                                            return ['诅咒', '不可见'];
                                        }
                                    }
                                };
                                player.node.handcards1.cardMod.nsanruo = cardMod;
                                player.node.handcards2.cardMod.nsanruo = cardMod;
                            },
                            content() {
                                'step 0';
                                game.broadcastAll(function (player) {
                                    player
                                        .chooseTarget(1, '令一名角色免疫下次受到的致命伤害.', function (card, player, target) {
                                            return player.storage.qw_xiangdaoc.includes(target);
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            return get.attitude(player, target) > 0;
                                        })
                                        .set('forceDie', true);
                                }, player);
                                ('step 1');
                                if (result.bool && result.targets && result.targets.length) {
                                    var target = result.targets[0];
                                    target.addSkill('qw_AroundCaliburn_skill');
                                    player.line(target, { color: [65, 105, 225] });
                                }
                            },
                            subSkill: {
                                skill: {
                                    trigger: {
                                        player: 'damageBegin',
                                    },
                                    filter(event, player) {
                                        return event.num >= player.hp;
                                    },
                                    forced: true,
                                    content() {
                                        trigger.cancel();
                                        player.removeSkill('qw_AroundCaliburn_skill');
                                    },
                                },
                            },
                        },
                        qw_hunluan: {
                            init(player) {
                                player.goMad();
                            },
                        },
                        qw_hpzuzhou: {
                            init(player) {
                                player.storage.qw_xiangdaoc = [];
                                player.storage.qw_hpzuzhou = 0;
                                player.storage.qw_zuzhounum = 0;
                                if (!player.node.handcards1.cardMod) {
                                    player.node.handcards1.cardMod = {};
                                }
                                if (!player.node.handcards2.cardMod) {
                                    player.node.handcards2.cardMod = {};
                                }
                                var cardMod = function (card) {
                                    for (var a = 0; a < player.storage.qw_hpzuzhou; a++) {
                                        if (card == player.getCards('h')[a]) {
                                            return ['诅咒', '不可见'];
                                        }
                                    }
                                };
                                player.node.handcards1.cardMod.nsanruo = cardMod;
                                player.node.handcards2.cardMod.nsanruo = cardMod;
                            },
                            trigger: {
                                player: 'drawAfter',
                            },
                            forced: true,
                            firstDo: true,
                            content() {
                                'step 0';
                                player.storage.qw_zuzhounum += trigger.num;
                                if (player.storage.qw_zuzhounum >= player.maxHp) {
                                    player.storage.qw_zuzhounum = 0;
                                    player.storage.qw_hpzuzhou++;
                                    if (player.storage.qw_hpzuzhou == 2) {
                                        game.broadcastAll(function (player) {
                                            player.node.avatar.setBackgroundImage('extension/超时空方舟/image/qw_hope1.jpg');
                                        }, player);
                                    }
                                    if (player.storage.qw_hpzuzhou >= player.maxHp) {
                                        player
                                            .chooseTarget(1, '令一名角色免疫下次受到的致命伤害.', function (card, player, target) {
                                                return player.storage.qw_xiangdaoc.includes(target);
                                            })
                                            .set('ai', function (target) {
                                                var player = _status.event.player;
                                                return get.attitude(player, target) > 0;
                                            });
                                    } else event.finish();
                                } else event.finish();
                                ('step 1');
                                if (result.bool && result.targets && result.targets.length) {
                                    var target = result.targets[0];
                                    target.addSkill('qw_AroundCaliburn_skill');
                                    player.line(target, { color: [65, 105, 225] });
                                }
                                game.broadcastAll(function (player) {
                                    player.reinit(player.name, 'qw_morse');
                                }, player);
                                for (var a of player.getCards('h')) {
                                    game.broadcastAll(function (a) {
                                        a.querySelector('.image').style.display = 'block';
                                        a.querySelector('.name').style.display = 'block';
                                        a.querySelector('.info').style.display = 'block';
                                        a.querySelector('.range').style.display = 'block';
                                    }, a);
                                }
                            },
                            group: ['qw_hpzuzhou_hide', 'qw_hpzuzhou_hide1', 'qw_hpzuzhou_block'],
                            subSkill: {
                                block: {
                                    trigger: {
                                        player: 'loseBegin',
                                    },
                                    forced: true,
                                    firstDo: true,
                                    content() {
                                        for (var a of trigger.cards) {
                                            game.broadcastAll(function (a) {
                                                a.querySelector('.image').style.display = 'block';
                                                a.querySelector('.name').style.display = 'block';
                                                a.querySelector('.info').style.display = 'block';
                                                a.querySelector('.range').style.display = 'block';
                                            }, a);
                                        }
                                    },
                                },
                                hide1: {
                                    trigger: {
                                        player: ['gainBegin'],
                                    },
                                    forced: true,
                                    lastDo: true,
                                    filter: (event) => event.cards && event.cards.length, //QQQ
                                    content() {
                                        for (var a of trigger.cards) {
                                            game.broadcastAll(function (a) {
                                                a.querySelector('.image').style.display = 'none';
                                                a.querySelector('.name').style.display = 'none';
                                                a.querySelector('.info').style.display = 'none';
                                                a.querySelector('.range').style.display = 'none';
                                            }, a);
                                        }
                                    },
                                },
                                hide: {
                                    trigger: {
                                        player: ['drawAfter', 'gainAfter', 'loseAfter'],
                                    },
                                    forced: true,
                                    content() {
                                        for (var a = 0; a < player.getCards('h').length; a++) {
                                            if (a < player.storage.qw_hpzuzhou) {
                                                game.broadcastAll(
                                                    function (a, player) {
                                                        player.getCards('h')[a].querySelector('.image').style.display = 'none';
                                                        player.getCards('h')[a].querySelector('.name').style.display = 'none';
                                                        player.getCards('h')[a].querySelector('.info').style.display = 'none';
                                                        player.getCards('h')[a].querySelector('.range').style.display = 'none';
                                                    },
                                                    a,
                                                    player
                                                );
                                            } else {
                                                game.broadcastAll(
                                                    function (a, player) {
                                                        player.getCards('h')[a].querySelector('.image').style.display = 'block';
                                                        player.getCards('h')[a].querySelector('.name').style.display = 'block';
                                                        player.getCards('h')[a].querySelector('.info').style.display = 'block';
                                                        player.getCards('h')[a].querySelector('.range').style.display = 'block';
                                                    },
                                                    a,
                                                    player
                                                );
                                            }
                                        }
                                        player.update();
                                    },
                                },
                            },
                        },
                        qw_xiangdao: {
                            init(player) {
                                player.storage.qw_xiangdaoc = [];
                            },
                            onremove(player, skill) {
                                for (var a of game.players) {
                                    if (a.hasSkill('qw_xiangdao_skill')) {
                                        a.removeSkill('qw_xiangdao_skill');
                                    }
                                }
                            },
                            trigger: {
                                global: 'roundStart',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    for (var c of game.players) {
                                        if (c.hasSkill('qw_xiangdao_skill')) {
                                            c.removeSkill('qw_xiangdao_skill');
                                        }
                                    }
                                    result.targets[0].addSkill('qw_xiangdao_skill');
                                    if (!player.storage.qw_xiangdaoc.includes(result.targets[0])) player.storage.qw_xiangdaoc.push(result.targets[0]);
                                }
                            },
                            group: ['qw_xiangdao_die', 'qw_xiangdao_onuse'],
                            subSkill: {
                                onuse: {
                                    trigger: {
                                        global: 'useCardAfter',
                                    },
                                    filter(event, player) {
                                        return event.skill == 'qw_xiangdao_skill_backup';
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        trigger.player.draw();
                                        for (var i of player.getCards('h')) {
                                            if (i.name == trigger.card.name && i.suit == trigger.card.suit && i.number == trigger.card.number) {
                                                event.card = i;
                                                break;
                                            }
                                        }
                                        if (event.card && player.hasUseTarget(event.card)) player.chooseToUse(event.card, '使用或取消并重铸' + get.translation(event.card) + '');
                                        else {
                                            player.recast(event.card);
                                            event.finish();
                                        }
                                        ('step 1');
                                        if (result.bool) {
                                        } else player.recast(event.card);
                                    },
                                },
                                die: {
                                    trigger: {
                                        player: 'die',
                                    },
                                    forced: true,
                                    forceDie: true,
                                    content() {
                                        for (var c of game.players) {
                                            if (c.hasSkill('qw_xiangdao_skill')) {
                                                c.removeSkill('qw_xiangdao_skill');
                                            }
                                        }
                                    },
                                },
                                skill: {
                                    enable: ['chooseToUse', 'chooseToRespond'],
                                    hiddenCard(player, name) {
                                        var list = [];
                                        for (var c of game.players) {
                                            if (c.hasSkill('qw_xiangdao')) {
                                                var cards = c.getCards('h').filter(function (card) {
                                                    return get.type(card) != 'equip' && card.querySelector('.image').style.display != 'none';
                                                });
                                                break;
                                            }
                                        }
                                        if (cards.length) {
                                            for (var i = 0; i < cards.length; i++) {
                                                list.push(cards[i].name);
                                            }
                                        }
                                        return cards.length && list.includes(name) && player.countCards('h') > 0;
                                    },
                                    filter(event, player) {
                                        for (var c of game.players) {
                                            if (c.hasSkill('qw_xiangdao')) {
                                                return (
                                                    c.getCards('h').filter(function (card) {
                                                        return get.type(card) != 'equip' && card.querySelector('.image').style.display != 'none';
                                                    }).length && player.countCards('he') > 0
                                                );
                                                break;
                                            }
                                        }
                                        return false;
                                    },
                                    chooseButton: {
                                        dialog(event, player) {
                                            for (var c of game.players) {
                                                if (c.hasSkill('qw_xiangdao')) {
                                                    var cards = c.getCards('h').filter(function (card) {
                                                        return get.type(card) != 'equip' && card.querySelector('.image').style.display != 'none';
                                                    });
                                                    break;
                                                }
                                            }
                                            if (cards) return ui.create.dialog('向导', cards);
                                        },
                                        filter(button, player) {
                                            return _status.event.parent.filterCard(button.link, player, _status.event.parent);
                                        },
                                        check(button) {
                                            return true;
                                        },
                                        backup(links, player) {
                                            return {
                                                filterCard: true,
                                                selectCard: 1,
                                                check(card) {
                                                    return 12 - get.value(card);
                                                },
                                                position: 'hes',
                                                viewAs: links[0],
                                            };
                                        },
                                        prompt(links, player) {
                                            return '将一张牌当做' + get.translation(links[0]) + '使用';
                                        },
                                    },
                                    ai: {
                                        order: 10,
                                        save: true,
                                        respondSha: true,
                                        respondShan: true,
                                        result: {
                                            player: 3,
                                        },
                                        threaten: 1.9,
                                    },
                                },
                            },
                        },
                        //扎师傅
                        ceshi: {
                            trigger: {
                                global: 'roundStart',
                            },
                            forced: true,
                            content() {
                                var ark_djs = document.createElement('div');
                                ark_djs.style.position = 'absolute';
                                ark_djs.classList.add('ark_djs');
                                document.body.appendChild(ark_djs);
                                var fj2 = document.createElement('div');
                                fj2.style.position = 'absolute';
                                fj2.classList.add('azar');
                                fj2.style.backgroundImage = 'url("extension/超时空方舟/image/azar_1.jpg' + '")';
                                fj2.style.backgroundSize = 'cover';
                                fj2.style.zIndex = 3;
                                ark_djs.appendChild(fj2);
                                var p = document.createElement('p');
                                p.innerHTML = '升天斩';
                                p.classList.add('azar_ziti');
                                p.style.zIndex = 4;
                                document.body.querySelector('.azar').appendChild(p);
                                var fj = document.createElement('div');
                                fj.style.position = 'absolute';
                                fj.classList.add('azar');
                                fj.style.backgroundImage = 'url("extension/超时空方舟/image/azar_1.jpg' + '")';
                                fj.style.backgroundSize = 'cover';
                                fj.style.zIndex = 4;
                                const a = fj2.getBoundingClientRect();
                                const b = fj.getBoundingClientRect();
                                fj.style.top = a.bottom + 'px';
                                fj.style.left = '10px';
                                var ark_info = document.createElement('div');
                                ark_info.classList.add('azar_info');
                                document.body.appendChild(ark_info);
                                fj2.onclick = function (event) {
                                    delete this._waitingfordrag;
                                    if (_status.dragged) return;
                                    if (_status.clicked) return;
                                    if (ui.intro) return;
                                    _status.clicked = true;
                                    if (this.parentNode && (this.parentNode.classList.contains('judges') || this.parentNode.classList.contains('marks'))) {
                                        var rect = this.getBoundingClientRect();
                                        ui.click.touchpop();
                                        ui.click.intro.call(this, {
                                            clientX: rect.left + 18,
                                            clientY: rect.top + 12,
                                        });
                                        _status.clicked = false;
                                        return;
                                    }
                                    var custom = _status.event.custom;
                                    if (custom && custom.replace.card) {
                                        custom.replace.card(this);
                                        return;
                                    }
                                    if (this.classList.contains('selectable') == false) return;
                                    if (this.classList.contains('selected')) {
                                        ui.selected.cards.remove(this);
                                        if (_status.multitarget || _status.event.complexSelect) {
                                            game.uncheck();
                                            game.check();
                                        } else {
                                            this.classList.remove('selected');
                                            this.updateTransform();
                                        }
                                    } else {
                                        ui.selected.cards.add(this);
                                        this.classList.add('selected');
                                        this.updateTransform(true);
                                    }
                                    if (game.chess && get.config('show_range') && !_status.event.skill && this.classList.contains('selected') && _status.event.isMine() && _status.event.name == 'chooseToUse') {
                                        var player = _status.event.player;
                                        var range = get.info(this).range;
                                        if (range) {
                                            if (typeof range.attack === 'number') {
                                                player.createRangeShadow(Math.min(8, player.getAttackRange(true) + range.attack - 1));
                                            } else if (typeof range.global === 'number') {
                                                player.createRangeShadow(Math.min(8, player.getGlobalFrom() + range.global));
                                            }
                                        }
                                    }
                                    if (custom.add.card) {
                                        custom.add.card();
                                    }
                                    game.check();
                                    if (lib.config.popequip && get.is.phoneLayout() && arguments[0] != 'popequip' && ui.arena && ui.arena.classList.contains('selecting') && this.parentNode && this.parentNode.classList.contains('popequip')) {
                                        var rect = this.getBoundingClientRect();
                                        ui.click.touchpop();
                                        ui.click.intro.call(this.parentNode, {
                                            clientX: rect.left + 18,
                                            clientY: rect.top + 12,
                                        });
                                    }
                                };
                                fj2.onmouseenter = function (event) {
                                    ark_info.style.visibility = 'visible';
                                    event = event || window.event;
                                    var left = ark_djs.offsetLeft + event.offsetX;
                                    var top = ark_djs.offsetTop + event.offsetY;
                                    ark_info.style.left = left + 'px';
                                    ark_info.style.top = top + 'px';
                                };
                                fj2.onmousemove = function (event) {
                                    ark_info.style.visibility = 'visible';
                                    event = event || window.event;
                                    var left = ark_djs.offsetLeft + event.offsetX;
                                    var top = ark_djs.offsetTop + event.offsetY;
                                    ark_info.style.left = left + 1 + 'px';
                                    ark_info.style.top = top + 1 + 'px';
                                };
                                fj2.onmouseleave = function (event) {
                                    ark_info.style.visibility = 'hidden';
                                };
                                fj2.onmouseenter = function (event) {
                                    ark_info.style.visibility = 'visible';
                                };
                            },
                        },
                        qw_guidui: {
                            trigger: {
                                player: 'loseAfter',
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            filter(event, player) {
                                if (
                                    player.getCards('h').filter(function (card) {
                                        if (player.getShownCards().includes(card)) return false;
                                        return true;
                                    }).length >=
                                    player.getCards('h').length -
                                    player.getCards('h').filter(function (card) {
                                        if (player.getShownCards().includes(card)) return false;
                                        return true;
                                    }).length
                                )
                                    return false;
                                var evt = event.getl(player);
                                return evt && evt.player == player && evt.hs && evt.hs.length;
                            },
                            forced: true,
                            content() {
                                player.addSkill('qw_hezou');
                                player.removeSkill('qw_guidui');
                            },
                        },
                        qw_shanyao: {
                            mod: {
                                cardDiscardable(card, player, name) {
                                    if (
                                        name == 'phaseDiscard' &&
                                        player.getShownCards().includes(card) &&
                                        player.getCards('h').filter(function (card) {
                                            if (player.getShownCards().includes(card)) return false;
                                            return true;
                                        }).length >=
                                        player.getCards('h').length -
                                        player.getCards('h').filter(function (card) {
                                            if (player.getShownCards().includes(card)) return false;
                                            return true;
                                        }).length
                                    )
                                        return false;
                                },
                                ignoredHandcard(card, player) {
                                    if (
                                        player.getShownCards().includes(card) &&
                                        player.getCards('h').filter(function (card) {
                                            if (player.getShownCards().includes(card)) return false;
                                            return true;
                                        }).length >=
                                        player.getCards('h').length -
                                        player.getCards('h').filter(function (card) {
                                            if (player.getShownCards().includes(card)) return false;
                                            return true;
                                        }).length
                                    ) {
                                        return true;
                                    }
                                },
                            },
                            trigger: {
                                player: ['drawAfter', 'gainAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                return (
                                    event.cards &&
                                    event.cards.filter(function (card) {
                                        return get.color(card) == 'red';
                                    }).length
                                );
                            },
                            content() {
                                for (var i of trigger.cards.filter(function (card) {
                                    return get.color(card) == 'red';
                                })) {
                                    player.addShownCards(i, 'visible_shanyao');
                                    if (
                                        player.getCards('h').filter(function (card) {
                                            if (player.getShownCards().includes(card)) return false;
                                            return true;
                                        }).length <
                                        player.getCards('h').length -
                                        player.getCards('h').filter(function (card) {
                                            if (player.getShownCards().includes(card)) return false;
                                            return true;
                                        }).length
                                    ) {
                                        player.addSkill('qw_hezou');
                                        player.removeSkill('qw_guidui');
                                    }
                                }
                            },
                            group: ['qw_shanyao_draw', 'qw_shanyao_die'],
                            subSkill: {
                                die: {
                                    trigger: {
                                        player: 'die',
                                    },
                                    forced: true,
                                    forceDie: true,
                                    content() {
                                        game.broadcastAll(function (player) {
                                            player.node.avatar.setBackgroundImage('extension/超时空方舟/image/qw_xdyz.jpg');
                                        }, player);
                                    },
                                },
                                draw: {
                                    trigger: {
                                        player: 'useCardBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return (
                                            event.cards.length == 1 &&
                                            player.getShownCards().includes(event.cards[0]) &&
                                            player.getCards('h').filter(function (card) {
                                                if (player.getShownCards().includes(card)) return false;
                                                return true;
                                            }).length <
                                            player.getCards('h').length -
                                            player.getCards('h').filter(function (card) {
                                                if (player.getShownCards().includes(card)) return false;
                                                return true;
                                            }).length
                                        );
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                            },
                        },
                        qw_zhumeng: {
                            trigger: {
                                global: 'phaseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h') < player.maxHp;
                            },
                            content() {
                                if (player.getHistory('damage') && player.getHistory('damage').length) player.drawTo(player.maxHp);
                            },
                        },
                        qw_tianshi: {
                            trigger: {
                                global: 'loseAfter',
                            },
                            filter(event, player) {
                                if (event.parent.parent.name == 'phaseDiscard') return false;
                                if (event.type != 'discard') return false;
                                if (event.player == player) return false;
                                if (event.cards && event.cards.length) {
                                    //QQQ
                                    for (var i = 0; i < event.cards.length; i++) {
                                        if (get.position(event.cards[i], true) == 'd') {
                                            return player.countCards('h');
                                        }
                                    }
                                }
                                return false;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (player.countCards('h'))
                                    player.chooseCard('h', '你可以交给' + get.translation(trigger.player) + '一张牌').set('ai', function (card) {
                                        var player = _status.event.player;
                                        if (get.attitude(player, trigger.player) > 0) return 8 - get.value(card) && card.suit != 'diamond';
                                        return -1;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    game.broadcastAll(function () {
                                        game.playAudio('../extension/超时空方舟/audio', ['qw_tianshi1/qw_tianshi3'].randomGet() + '.mp3');
                                    });
                                    player.give(result.cards, trigger.player);
                                    trigger.player.draw();
                                } else event.finish();
                                ('step 2');
                                if (player.countCards('h') == 0) player.damage(1);
                            },
                        },
                        qw_myps: {
                            enable: ['chooseToUse', 'chooseToRespond'],
                            viewAs: {
                                name: 'shan',
                            },
                            usable: 1,
                            filterCard() {
                                return false;
                            },
                            filter(event, player) {
                                return _status.event.player.hp > player && _status.event.player.countCards('h') > player.countCards('h');
                            },
                            viewAsFilter(player) {
                                return true;
                            },
                            selectCard: -1,
                            prompt: '视为使用一张闪',
                            ai: {
                                order() {
                                    return 11;
                                },
                                respondShan: true,
                                basic: {
                                    useful: [7, 5.1, 2],
                                    value: [7, 5.1, 2],
                                },
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        qw_qichao: {
                            trigger: {
                                player: 'loseAfter',
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.countCards('h')) return false;
                                var evt = event.getl(player);
                                return evt && evt.player == player && evt.hs && evt.hs.length;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('向一名角色要钱', function (card, player, target) {
                                        return target.countCards('he') && target != player;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return -get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.targets) {
                                    event.target = result.targets[0];
                                    var name = [
                                        ['真的太对不起了 我下个月就还你钱', 'qw_stl1'],
                                        ['拜托了 请我一次吧', 'qw_stl2'],
                                        ['抱歉 我现在没钱 你请客吧', 'qw_stl3'],
                                    ].randomGet();
                                    result.targets[0].chooseCard(1, 'he', true).set('prompt', name[0]);
                                    game.broadcastAll(function (name) {
                                        game.playAudio('../extension/超时空方舟/audio', name[1] + '.mp3');
                                    }, name);
                                } else event.finish();
                                ('step 2');
                                if (result.bool) event.target.give(result.cards, player);
                            },
                        },
                        qw_guao: {
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                return event.targets.length > 1 && event.player != player && event.targets.includes(player);
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard('h');
                                ('step 1');
                                if (result.bool) {
                                    trigger.parent.excluded.addArray([player]);
                                }
                            },
                        },
                        qw_hero: {
                            trigger: {
                                global: 'showCharacterAfter',
                            },
                            hiddenSkill: true,
                            filter(event, player) {
                                return event.toShow.includes('qw_htd') && player == _status.currentPhase;
                            },
                            forced: true,
                            content() {
                                var num = 0;
                                for (var i of game.players) {
                                    if (i.storage['hezou1'] && i.storage['hezou1'].length) {
                                        num = num + i.storage['hezou1'].length;
                                    }
                                }
                                game.broadcastAll(function () {
                                    game.playAudio('../extension/超时空方舟/audio', ['qw_hero1/qw_hero2'].randomGet() + '.mp3');
                                });
                                player.addTempSkill('qw_hero_kong', { player: 'phaseAfter' });
                            },
                            group: ['qw_hero_update'],
                            subSkill: {
                                update: {
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    forced: true,
                                    lastDo: true,
                                    content() {
                                        if (player.storage.qw_hero && game.roundNumber != 1) {
                                            for (var i of game.players) {
                                                if (i.storage['hezou1'] && i.storage['hezou1'].length) {
                                                    i.storage['hezou1'] = [];
                                                }
                                            }
                                        }
                                    },
                                },
                                kong: {
                                    init(player, skill) {
                                        player.addSkillBlocker(skill);
                                    },
                                    onremove(player, skill) {
                                        player.removeSkillBlocker(skill);
                                    },
                                    charlotte: true,
                                    skillBlocker(skill, player) {
                                        return skill == 'qw_shekong';
                                    },
                                },
                            },
                        },
                        qw_shekong: {
                            /*mod: {
                                globalTo (from, to, distance) {
                                    return distance + 1
                                },
                            },*/
                            trigger: {
                                player: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.target != player;
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard('弃置一张牌或令此牌对' + get.translation(trigger.target) + '无效', 'h');
                                ('step 1');
                                if (result.bool) {
                                    game.log(trigger.target);
                                } else trigger.parent.excluded.addArray([trigger.target]);
                            },
                            group: 'qw_shekong_hidden',
                            subSkill: {
                                hidden: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !player.getStat('damage');
                                    },
                                    content() {
                                        player.$hideCharacter();
                                    },
                                },
                            },
                        },
                        qw_hezou: {
                            hiddenCard(player, name) {
                                var list1 = [];
                                if (player.name == 'qw_htd') list1.push('spade');
                                if (player.name == 'qw_stl') list1.push('club');
                                if (player.name == 'qw_ydzhx') list1.push('diamond');
                                if (player.name == 'qw_xdyd') list1.push('heart');
                                var a = 0;
                                for (var i of player.getCards('h')) {
                                    if (list1.includes(i.suit)) a = true;
                                }
                                return !player.getStorage('hezou').includes(name) && a && lib.inpile.includes(name);
                            },
                            check(button) {
                                var player = _status.event.player;
                                var card = { name: button.link[2], nature: button.link[3] };
                                if (player.countCards('hes', (cardx) => cardx.name == card.name)) return 0;
                                return _status.event.parent.type == 'phase' ? player.getUseValue(card) : 1;
                            },
                            enable: 'chooseToUse',
                            filter(event, player) {
                                var list1 = [];
                                if (player.name == 'qw_htd') list1.push('spade');
                                if (player.name == 'qw_stl') list1.push('club');
                                if (player.name == 'qw_ydzhx') list1.push('diamond');
                                if (player.name == 'qw_xdyd') list1.push('heart');
                                if (
                                    !player.hasSkill('qw_hero_kong') &&
                                    !player.getCards('h').filter(function (card) {
                                        return list1.includes(card.suit);
                                    }).length
                                )
                                    return false;
                                return (
                                    player.countCards('h', (card) =>
                                        lib.inpile.some((name) => {
                                            if (player.getStorage('hezou') && player.getStorage('hezou').includes(name)) return false;
                                            if (get.type(name) != 'basic' && get.type(name) != 'trick') return false;
                                            if (event.filterCard && event.filterCard({ name: name, cards: [card] }, player)) return true;
                                            if (name == 'sha') {
                                                for (var nature of lib.inpile_nature) {
                                                    if (event.filterCard && event.filterCard({ name: name, nature: nature, cards: [card] }, player)) return true;
                                                }
                                            }
                                            return false;
                                        })
                                    ) > 0
                                );
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    for (var name of lib.inpile) {
                                        if (get.type(name) == 'basic' || get.type(name) == 'trick') {
                                            if (player.getStorage('hezou').includes(name)) continue;
                                            list.push([get.translation(get.type(name)), '', name]);
                                            if (name == 'sha') {
                                                for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
                                            }
                                        }
                                    }
                                    return ui.create.dialog('合奏', [list, 'vcard']);
                                },
                                filter(button, player) {
                                    return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    var card = { name: button.link[2], nature: button.link[3] };
                                    if (player.countCards('hes', (cardx) => cardx.name == card.name)) return 0;
                                    return _status.event.parent.type == 'phase' ? player.getUseValue(card) : 1;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard: true,
                                        popname: true,
                                        check(card) {
                                            return 7 - get.value(card);
                                        },
                                        position: 'hs',
                                        filterCard(card) {
                                            var list = [];
                                            if (player.name == 'qw_htd') list.push('spade');
                                            if (player.name == 'qw_stl') list.push('club');
                                            if (player.name == 'qw_ydzhx') list.push('diamond');
                                            if (player.name == 'qw_xdyd') list.push('heart');
                                            if (player.hasSkill('qw_hero_kong')) return true;
                                            return list.includes(card.suit);
                                        },
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        onuse(result, player) {
                                            player.markAuto('hezou', [result.card.name]);
                                            player.markAuto('hezou1', [result.card.name]);
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                                },
                            },
                            ai: {
                                save: true,
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player, tag, arg) {
                                    if (!player.countCards('hes') || player.hasSkill('taoluan3')) return false;
                                    if (tag == 'respondSha' || tag == 'respondShan') {
                                        if (arg == 'respond') return false;
                                        return !player.getStorage('taoluan').includes(tag == 'respondSha' ? 'sha' : 'shan');
                                    }
                                    return !player.getStorage('taoluan').includes('tao') || (!player.getStorage('taoluan').includes('jiu') && arg == player);
                                },
                                order: 4,
                                result: {
                                    player(player) {
                                        var allshown = true,
                                            players = game.filterPlayer();
                                        for (var i = 0; i < players.length; i++) {
                                            if (players[i].ai.shown == 0) {
                                                allshown = false;
                                            }
                                            if (players[i] != player && players[i].countCards('h') && get.attitude(player, players[i]) > 0) {
                                                return 1;
                                            }
                                        }
                                        if (allshown) return 1;
                                        return 0;
                                    },
                                },
                            },
                            group: 'qw_hezou_update',
                            subSkill: {
                                update: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    content() {
                                        player.storage['hezou'] = [];
                                    },
                                },
                            },
                        },
                        qw_dengjie: {
                            //技能名:Excalibur
                            //技能类型:宝具
                            //持有角色:阿尔托莉雅·潘德拉贡(剑)
                            //技能效果:限定技,出牌阶段,你可以令除你以外的所有角色依次弃置三张牌,并受到你造成的一点火属性伤害
                            limited: true,
                            enable: 'phaseUse',
                            prompt: '是否发动「登阶」',
                            content() {
                                'step 0';
                                player.gainMaxHp();
                                player.recover();
                                if (player.storage.dengjie.length) player.chooseControl(player.storage.dengjie);
                                else event.goto(2);
                                ('step 1');
                                if (result.control) player.addSkill(result.control);
                                ('step 2');
                                player.awakenSkill(event.name);
                            },
                            ai: {
                                result: {
                                    player: 1,
                                },//QQQ
                            },
                        },
                        qw_jiushu: {
                            init(player) {
                                player.storage.dengjie = ['hongyan', 'yinghun', 'xinjuejing'];
                                player.storage.dengjie_jishu = 0;
                            },
                            trigger: {
                                global: 'dyingBegin',
                            },
                            filter(event, player) {
                                return !player.hasSkill('qw_jiushu_recover');
                            },
                            prompt: '你可以摸一张牌并立即执行一个出牌阶段',
                            content() {
                                player.draw();
                                var next = game.createEvent('phaseUse');
                                next.player = player;
                                next.jiushu = trigger.player;
                                next.setContent('phaseUse');
                                player.addTempSkill('qw_jiushu_recover', { player: 'phaseUseAfter' });
                                player.storage.dengjie_jishu = 1;
                            },
                            group: ['qw_jiushu_fanmian'],
                            subSkill: {
                                fanmian: {
                                    trigger: {
                                        player: 'phaseUseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.parent.name == 'qw_jiushu' && event.jiushu.hp <= 0;
                                    },
                                    content() {
                                        player.turnOver();
                                    },
                                },
                                recover: {
                                    trigger: {
                                        global: 'recoverAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.parent.parent.parent.parent.jiushu && event.parent.parent.parent.parent.jiushu == event.player && event.parent.parent.parent.parent.jiushu.hp > 0 && player.storage.dengjie_jishu == 1;
                                    },
                                    content() {
                                        if (!player.hasSkill('qw_dengjie')) player.addSkill('qw_dengjie');
                                        if (player.awakenedSkills.includes('qw_dengjie')) player.restoreSkill('qw_dengjie');
                                        player.storage.dengjie_jishu = 0;
                                    },
                                },
                            },
                        },
                        qw_beimin: {
                            mod: {
                                cardname(card, player, name) {
                                    if (card.suit == 'heart') return 'taoyuan';
                                },
                            },
                        },
                        qw_hmty: {
                            trigger: {
                                player: 'die',
                            },
                            forced: true,
                            forceDie: true,
                            content() {
                                'step 0';
                                var num = 0;
                                player.chooseTarget(1, '令一名角色获得技能「' + get.translation(player.skills[0]) + '」').set('forceDie', true);
                                ('step 1');
                                game.log(result.targets[0]);
                                if (result.bool && result.targets && result.targets.length) {
                                    game.log(result.targets[0]);
                                    var target = result.targets[0];
                                    target.addSkill(player.skills[0]);
                                    player.line(target, { color: [255, 192, 203] });
                                }
                            },
                        },
                        qw_fzsh: {
                            init(player) {
                                player.storage.qw_fzsh = 0;
                            },
                            filterCard() {
                                return false;
                            },
                            viewAsFilter(player) {
                                if (player == _status.currentPhase) return false;
                                return player.storage.qw_fzsh == 0;
                            },
                            selectCard: -1,
                            enable: 'chooseToUse',
                            viewAs: {
                                name: 'wuxie',
                            },
                            position: 'he',
                            threaten: 1.2,
                            ai: {
                                basic: {
                                    useful: [6, 4, 3],
                                    value: [6, 4, 3],
                                },
                                result: {
                                    player: 1,
                                },
                                expose: 0.2,
                            },
                            group: ['qw_fzsh_after', 'qw_fzsh_update', 'qw_fzsh_shan', 'qw_fzsh_remove2'],
                            subSkill: {
                                remove2: {
                                    trigger: {
                                        player: 'damageAfter',
                                    },
                                    filter(event, player) {
                                        return event.source != player;
                                    },
                                    forced: true,
                                    content() {
                                        for (var i of game.filterPlayer()) {
                                            i.recover();
                                        }
                                        player.removeSkill('qw_fzsh');
                                    },
                                },
                                shan: {
                                    enable: ['chooseToUse', 'chooseToRespond'],
                                    viewAs: {
                                        name: 'shan',
                                    },
                                    filterCard() {
                                        return false;
                                    },
                                    viewAsFilter(player) {
                                        if (player == _status.currentPhase) return false;
                                        return player.storage.qw_fzsh == 0;
                                    },
                                    selectCard: -1,
                                    prompt: '视为使用一张闪',
                                    ai: {
                                        order() {
                                            return 11;
                                        },
                                        respondShan: true,
                                        basic: {
                                            useful: [7, 5.1, 2],
                                            value: [7, 5.1, 2],
                                        },
                                        result: {
                                            player: 1,
                                        },
                                    },
                                },
                                update: {
                                    trigger: {
                                        global: ['phaseAfter'],
                                    },
                                    forced: true,
                                    content() {
                                        player.storage.qw_fzsh = 0;
                                    },
                                },
                                after: {
                                    trigger: {
                                        player: ['useCardBegin', 'respondBegin'],
                                    },
                                    firstDo: true,
                                    forced: true,
                                    filter(event, player) {
                                        return event.skill == 'qw_fzsh' || event.skill == 'qw_fzsh_shan';
                                    },
                                    content() {
                                        player.storage.qw_fzsh = 1;
                                    },
                                },
                            },
                        },
                        qw_fxzms: {
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return event.card.name != 'sha' && event.target == event.targets[0];
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('「繁星赞美诗」<br>' + lib.translate['qw_fxzms_info'], [1, trigger.targets.length], function (card, player, target) {
                                        return _status.event.targets.includes(target);
                                    })
                                    .set('ai', function (target) {
                                        var trigger = _status.event.getTrigger();
                                        if (game.phaseNumber > game.players.length * 2 && trigger.targets.length >= game.players.length - 1 && !trigger.excluded.includes(target)) {
                                            return get.effect(target, trigger.card, trigger.player, _status.event.player);
                                        }
                                        return get.attitude(_status.event.player, target);
                                    })
                                    .set('targets', trigger.targets);
                                ('step 1');
                                if (result.bool) {
                                    trigger.parent.excluded.addArray(result.targets);
                                    player.storage.qw_fxzmscard = trigger.card;
                                    player.storage.qw_fxzms = result.targets;
                                }
                            },
                            group: 'qw_fxzms_use',
                            subSkill: {
                                use: {
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    filter(event, player) {
                                        return player.storage.qw_fxzms && player.storage.qw_fxzmscard && player.storage.qw_fxzmscard == event.card;
                                    },
                                    forced: true,
                                    content() {
                                        player.useCard({ name: 'sha' }, player.storage.qw_fxzms, false);
                                        if (player.storage.qw_fxzms && player.storage.qw_fxzms.length && player.storage.qw_fxzms.length > 1) player.removeSkill('qw_fxzms');
                                        player.storage.qw_fxzms = 0;
                                        player.storage.qw_fxzmscard = 0;
                                    },
                                },
                            },
                        },
                        qw_qhmyg: {
                            trigger: {
                                source: 'damageBefore',
                            },
                            firstDo: true,
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha'; //QQQ
                            },
                            check: (event, player) => get.attitude(player, event.player) > 0, //QQQ
                            content() {
                                'step 0';
                                player
                                    .chooseControl()
                                    .set('prompt', '「千华觅月歌」:取消此伤害并选择一项')
                                    .set('choiceList', ['弃置目标两张牌', '摸一张牌并交给其一至两张牌', '不取消本次伤害'])
                                    .set('ai', function () {
                                        var player = _status.event.player;
                                        if (get.attitude(player, trigger.player) > 0) return 1;
                                        if (get.attitude(player, trigger.player) <= 0) {
                                            if (trigger.player.countCards('he') >= 2) return 0;
                                            else return 2;
                                        }
                                    });
                                ('step 1');
                                if (result.index == 0) {
                                    trigger.cancel();
                                    player.discardPlayerCard(trigger.player, 2, 'he', true);
                                    event.finish();
                                } else if (result.index == 1) {
                                    trigger.cancel();
                                    player.draw(1);
                                    if (trigger.player != player) player.chooseCard([1, 2], 'he', true).set('prompt', '「千华觅月歌」:交给' + get.translation(trigger.player) + '一至两张牌');
                                    else event.finish();
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.give(result.cards, trigger.player);
                                }
                            },
                            group: ['qw_qhmyg_lose'],
                            subSkill: {
                                lose: {
                                    trigger: {
                                        player: 'shaMiss',
                                    },
                                    forced: true,
                                    content() {
                                        player.removeSkill('qw_qhmyg');
                                        if (trigger.parent.targets)
                                            for (var i of trigger.parent.targets) {
                                                i.addTempSkill('qw_qhmyg_fengyin', { player: 'phaseAfter' });
                                            }
                                        for (var i of game.players) {
                                            i.loseHp();
                                        }
                                    },
                                },
                                fengyin: {
                                    init(player, skill) {
                                        player.addSkillBlocker(skill);
                                    },
                                    onremove(player, skill) {
                                        player.removeSkillBlocker(skill);
                                    },
                                    charlotte: true,
                                    skillBlocker(skill, player) {
                                        return true;
                                    },
                                },
                            },
                        },
                        qw_tgfs: {
                            trigger: {
                                player: 'damageAfter',
                            },
                            filter(event, player) {
                                return player.getExpansions('qw_ljmark').length && event.source;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseCardButton('将任意张牌当作杀对伤害来源使用', player.getExpansions('qw_ljmark'), [1, Infinity]);
                                ('step 1');
                                if (result.bool) player.useCard({ name: 'sha' }, result.links, trigger.source, false);
                            },
                            group: 'qw_tgfs_damage',
                            subSkill: {
                                damage: {
                                    trigger: {
                                        player: 'useCard1',
                                    },
                                    filter(event, player) {
                                        return event.card.name == 'sha' && event.cards.length > 1;
                                    },
                                    forced: true,
                                    content() {
                                        trigger.baseDamage = trigger.cards.length;
                                    },
                                },
                            },
                        },
                        qw_huiyue: {
                            trigger: {
                                source: 'damageAfter',
                            },
                            init(player) {
                                player.storage.qw_huiyue = 0;
                            },
                            filter(event, player) {
                                return player.storage.qw_huiyue == 0;
                            },
                            prompt: '是否获得此次伤害量的护甲',
                            content() {
                                player.storage.qw_huiyue = 1;
                                player.changeHujia(trigger.num);
                            },
                            group: 'qw_huiyue_js',
                            subSkill: {
                                js: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    content() {
                                        player.storage.qw_huiyue = 0;
                                    },
                                },
                            },
                        },
                        qw_ljj: {
                            trigger: {
                                player: 'useCardAfter',
                            },
                            filter(event, player) {
                                if (event.parent.name == 'qw_tgfs') return false;
                                return event.card.name == 'sha' && event.cards.length == 1;
                            },
                            forced: true,
                            content() {
                                game.broadcastAll(function () {
                                    game.playAudio('../extension/超时空方舟/audio', ['qw_ruanyua.mp3', 'qw_ruanyub.mp3'].randomGet());
                                });
                                player.addToExpansion(trigger.cards[0], 'gain2').gaintag.add('qw_ljmark');
                            },
                            mod: {
                                attackRange(player, distance) {
                                    if (player.getExpansions('qw_ljmark').length) return distance + player.getExpansions('qw_ljmark').length;
                                },
                            },
                            group: ['qw_ljj_use', 'qw_ljj_draw'],
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: 'phaseDrawBefore',
                                    },
                                    prompt: '是否取消摸牌改为摸两张杀',
                                    content() {
                                        trigger.cancel();
                                        player.gain([game.createCard('sha'), game.createCard('sha')]);
                                    },
                                },
                                use: {
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    _priority: -26945,
                                    forced: true,
                                    filter(event, player) {
                                        return event.card.name == 'sha' && !event.parent.directHit.includes(event.target);
                                    },
                                    logTarget: 'target',
                                    content() {
                                        if (player.getExpansions('qw_ljmark').length) {
                                            var id = trigger.target.playerid;
                                            var map = trigger.parent.customArgs;
                                            if (!map[id]) map[id] = {};
                                            if (typeof map[id].shanRequired == 'number') {
                                                map[id].shanRequired = player.getExpansions('qw_ljmark').length + 1;
                                            } else {
                                                map[id].shanRequired = player.getExpansions('qw_ljmark').length + 1;
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        qw_ljmark: {
                            markimage: 'extension/超时空方舟/image/qw_ljmark.jpg',
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                        },
                        qw_yjmark: {
                            markimage: 'extension/超时空方舟/image/qw_yjmark.jpg',
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                        },
                        qw_jltx: {
                            limited: true,
                            enable: 'phaseUse',
                            selectTarget: [0, 1],
                            filterTarget(event, player, target) {
                                return target != player;
                            },
                            content() {
                                player.awakenSkill('qw_jltx');
                                if (target)
                                    game.broadcastAll(
                                        function (target1, target2) {
                                            game.swapSeat(target1, target2);
                                        },
                                        player,
                                        target
                                    );
                                game.broadcastAll(function () {
                                    game.playAudio('../extension/超时空方舟/audio', ['qw_ruanyane.mp3', 'qw_ruanyanb.mp3'].randomGet());
                                });
                                player.chooseUseTarget({ name: 'sha' }, true, false);
                                player.addSkill('qw_jltx_use');
                                player.addSkill('qw_jltx_update');
                            },
                            subSkill: {
                                update: {
                                    trigger: {
                                        global: 'dieAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.source == player;
                                    },
                                    content() {
                                        player.restoreSkill('qw_dengjie');
                                    },
                                },
                                use: {
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    forced: true,
                                    lastDo: true,
                                    filter(event, player) {
                                        if (event.parent.parent.name != 'qw_jltx' && event.parent.name != 'qw_jltx_use') return false;
                                        var list = [];
                                        for (var i of game.players) {
                                            if (get.distance(event.targets[0], i) == 1) list.push(i);
                                        }
                                        list.push(event.targets[0]);
                                        for (var i of list) {
                                            if (i.getExpansions('qw_yjmark').length) return true;
                                        }
                                    },
                                    content() {
                                        'step 0';
                                        var list = [];
                                        for (var i of game.players) {
                                            if (get.distance(trigger.targets[0], i) == 1 && i.getExpansions('qw_yjmark').length) list.push(i);
                                        }
                                        game.log(trigger.targets[0]);
                                        if (trigger.targets[0].getExpansions('qw_yjmark').length) list.push(trigger.targets[0]);
                                        game.broadcastAll(
                                            function (player, list) {
                                                player.chooseTarget('请选择与该角色距离为一的一名角色并使用其剑', function (card, player, target) {
                                                    return list.includes(target);
                                                });
                                            },
                                            player,
                                            list
                                        );
                                        ('step 1');
                                        if (result.targets) {
                                            player.useCard(result.targets[0].getExpansions('qw_yjmark')[0], trigger.targets[0]);
                                        }
                                    },
                                },
                            },
                        },
                        qw_lsj: {
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            init(player) {
                                player.storage.qw_lsj = 0;
                            },
                            filter(event, player) {
                                return player != event.player && player.storage.qw_lsj == 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseToDiscard('h');
                                ('step 1');
                                if (result.bool) {
                                    trigger.parent.excluded.add(player);
                                    player.storage.qw_lsj = 1;
                                }
                            },
                            group: 'qw_lsj_js',
                            subSkill: {
                                js: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    content() {
                                        player.storage.qw_lsj = 0;
                                    },
                                },
                            },
                        },
                        qw_yjj: {
                            trigger: {
                                player: 'loseAfter',
                            },
                            global: 'qw_yjmark',
                            filter(event, player) {
                                game.log(event.type);
                                var a = 0;
                                for (var i of event.cards) {
                                    if (i.name == 'sha') a++;
                                }
                                return event.type == 'discard' && a > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseButton(['「御剑诀」<br>你可以使用其中的一张杀', trigger.cards]).set('filterButton', (button) => {
                                    var card = button.link;
                                    return card.name == 'sha';
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.chooseUseTarget(result.links[0], true, false, 'nodistance');
                                }
                            },
                            group: ['qw_yjj_push', 'qw_yjj_recycle'],
                            subSkill: {
                                recycle: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    filter(event, player) {
                                        var a = 0;
                                        for (var i of game.players) {
                                            if (i.getExpansions('qw_yjmark').length) a++;
                                        }
                                        return a > 0;
                                    },
                                    firstDo: true,
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var list = [];
                                        for (var i of game.players) {
                                            if (i.getExpansions('qw_yjmark').length) list.push(i);
                                        }
                                        game.broadcastAll(
                                            function (player, list) {
                                                player.chooseTarget([0, list.length], '你可以回收任意名角色的剑', function (card, player, target) {
                                                    return list.includes(target);
                                                });
                                            },
                                            player,
                                            list
                                        );
                                        ('step 1');
                                        if (result.targets) {
                                            game.broadcastAll(function () {
                                                game.playAudio('../extension/超时空方舟/audio/qw_ruanyanc.mp3');
                                            });
                                            for (var i of result.targets) {
                                                player.gain(i.getExpansions('qw_yjmark'));
                                            }
                                        }
                                    },
                                },
                                push: {
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    filter(event, player) {
                                        if (event.targets[0].getExpansions('qw_yjmark').length) return false;
                                        return event.card.name == 'sha' && event.cards.length == 1 && event.parent.name != 'qw_jltx_use';
                                    },
                                    forced: true,
                                    content() {
                                        trigger.targets[0].addToExpansion(trigger.cards[0], 'gain2').gaintag.add('qw_yjmark');
                                    },
                                },
                            },
                        },
                        qw_zhdxj: {
                            trigger: {
                                player: 'damageAfter',
                            },
                            forced: true,
                            _priority: -999,
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                player.chooseTarget([1, Math.ceil(Math.max(player.maxHp - player.hp, 1))]);
                                ('step 2');
                                if (result.targets)
                                    for (var i of result.targets) {
                                        i.link();
                                    }
                            },
                        },
                        qw_zzql: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                if (!_status.currentPhase.getStat('damage')) {
                                    game.broadcastAll(function () {
                                        game.playAudio('../extension/超时空方舟/audio/qw_yska.mp3');
                                    });
                                    player.draw(2);
                                } else {
                                    game.broadcastAll(function () {
                                        game.playAudio('../extension/超时空方舟/audio/qw_yskb.mp3');
                                    });
                                    if (_status.currentPhase.getStat('damage') > 0) player.skip('phaseUse');
                                    if (_status.currentPhase.getStat('damage') > 1) player.skip('phaseDraw');
                                }
                            },
                        },
                        qw_knzh: {
                            trigger: {
                                source: 'damageAfter',
                            },
                            lastDo: true,
                            forced: true,
                            filter(event, player) {
                                return event.player.countCards('h');
                            },
                            mod: {
                                cardname(card, player) {
                                    if (get.color(card) == 'red' && card.storage.qw_knzh) return 'huogong';
                                },
                            },
                            content() {
                                'step 0';
                                player.choosePlayerCard('获得该角色一张手牌', trigger.player, 'h', 1, trigger.player == player ? false : true);
                                ('step 1');
                                if (result.links) {
                                    player.gain(result.links, trigger.player);
                                    game.broadcastAll(function (card) {
                                        card.storage.qw_knzh = 1;
                                    }, result.links[0]);
                                }
                                ('step 2');
                                if (player.canUse(result.links[0], trigger.player, true, true)) {
                                    player.useCard(result.links[0], trigger.player);
                                    game.broadcastAll(function () {
                                        game.playAudio('../extension/超时空方舟/audio', ['qw_yskc.mp3'].randomGet());
                                    });
                                }
                            },
                        },
                        被充电: {
                            trigger: {
                                player: 'loseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (
                                    !game.hasPlayer(function (current) {
                                        return current.hasSkill('指挥使电池');
                                    })
                                ) {
                                    return false;
                                }
                                return player.countCards('h') < Math.min(player.maxHp);
                            },
                            content() {
                                if (Math.min(player.maxHp) < 7) {
                                    player.draw(Math.min(player.maxHp) - player.countCards('h'));
                                } else {
                                    player.draw(7 - player.countCards('h'));
                                }
                            },
                            derivation: [],
                        },
                        qw_wwhs: {
                            trigger: {
                                player: 'phaseAfter',
                            },
                            forced: true,
                            init(player) {
                                player.storage.qw_wd = ['判定阶段', '摸牌阶段', '出牌阶段', '弃牌阶段'];
                            }, //QQQ
                            content() {
                                'step 0';
                                player.chooseTarget('「万物化生」<br>选择至多两名角色', [1, 2]);
                                ('step 1');
                                if (result.targets) {
                                    game.broadcastAll(function (player, target) {
                                        game.arkcg('qw_wwhs', 3000, true);
                                        setTimeout(function () {
                                            ui.background.setBackgroundImage('extension/超时空方舟/image/qw_wwhs.jpg');
                                        }, 1000);
                                    }, player);
                                    player.hp = 1;
                                    player.update();
                                    player.addSkill('qw_wwhs_sub');
                                    var num = 4 - player.storage.qw_wd.length;
                                    if (!player.storage.qw_wd.length) num++;
                                    for (var i of result.targets) {
                                        i.addMark('qw_wwhs_sub', num);
                                    }
                                    player.removeSkill('qw_wwhs');
                                }
                            },
                            subSkill: {
                                sub: {
                                    onremove(player, skill) {
                                        game.broadcastAll(function (player, target) {
                                            ui.background.setBackgroundImage('image/background/' + lib.config.image_background + '.jpg');
                                        }, player);
                                    },
                                    marktext: '生',
                                    forced: true,
                                    intro: {
                                        name: '万物化生',
                                        content: '不会受到致命伤害,持续#轮',
                                    },
                                    trigger: {
                                        global: ['damageBefore', 'loseHpBefore'],
                                    },
                                    filter(event, player) {
                                        if (event.player.hasMark('qw_wwhs_sub') && event.num >= event.player.hp) return true;
                                    },
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                            },
                        },
                        qw_wyzx: {
                            mod: {
                                globalTo(from, to, distance) {
                                    if (to.storage.qw_wd.length == 0) return distance + 5;
                                    return distance + 4 - to.storage.qw_wd.length;
                                },
                            },
                        },
                        qw_stfx: {
                            trigger: {
                                global: 'judge',
                            },
                            forced: true,
                            init(player) {
                                player.storage.qw_wd = ['判定阶段', '摸牌阶段', '出牌阶段', '弃牌阶段'];
                            }, //QQQ
                            content() {
                                'step 0';
                                var list = [];
                                var num = 1 + 4 - player.storage.qw_wd.length;
                                if (player.storage.qw_wd.length == 0) num++;
                                for (var a = 0; a < Math.min(num, ui.cardPile.childNodes.length); a++) {
                                    list.push(ui.cardPile.childNodes[a]);
                                }
                                event.list = list;
                                ('step 1');
                                player.chooseButton(['「司天伏邪」<br>将判定牌改为', event.list]).set('judging', trigger.player.judging[0]);
                                ('step 2');
                                if (result.bool) {
                                    player.respond(result.links, 'qw_stfx', 'highlight', 'noOrdering');
                                }
                                ('step 3');
                                if (result.bool) {
                                    if (trigger.player.judging[0].clone) {
                                        trigger.player.judging[0].clone.classList.remove('thrownhighlight');
                                        game.broadcast(function (card) {
                                            if (card.clone) {
                                                card.clone.classList.remove('thrownhighlight');
                                            }
                                        }, trigger.player.judging[0]);
                                        game.addVideo('deletenode', player, get.cardsInfo([trigger.player.judging[0].clone]));
                                    }
                                    game.cardsDiscard(trigger.player.judging[0]);
                                    trigger.player.judging[0] = result.links[0];
                                    trigger.orderingCards.addArray(result.links);
                                    game.log(trigger.player, '的判定牌改为', result.links[0]);
                                    player.gain(
                                        event.list.filter((card) => {
                                            return card != result.links[0];
                                        })
                                    );
                                    player.loseHp(1);
                                }
                            },
                            ai: {
                                rejudge: true,
                                tag: {
                                    rejudge: 1,
                                },
                            },
                            group: 'qw_stfx_use',
                            subSkill: {
                                use: {
                                    trigger: {
                                        global: 'phaseBegin',
                                    },
                                    filter(event, player) {
                                        return player.countCards('h') && event.player != player;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var num = 4 - player.storage.qw_wd.length;
                                        if (!player.storage.qw_wd.length) num++;
                                        var b = '「司天伏邪」<br>你可以弃置至多「' + num + '」张花色相同的牌并进行判定,若判定牌花色与选择的牌花色相同,你对其使用x张随机伤害牌(x为你选择的牌数)';
                                        player
                                            .chooseToDiscard([1, num], 'h', b, function (card) {
                                                if (!ui.selected.cards.length) return true;
                                                return ui.selected.cards[0].suit == card.suit;
                                            })
                                            .set('ai', function (card) {
                                                return 9 - get.value(card);
                                            })
                                            .set('complexCard', true);
                                        ('step 1');
                                        if (result.bool) {
                                            game.broadcastAll(function () {
                                                game.playAudio('../extension/超时空方舟/audio', ['qw_stfx1.mp3', 'qw_stfx2.mp3', 'qw_stfx3.mp3'].randomGet());
                                            });
                                            event.card = result.cards;
                                            event.num = result.cards.length;
                                            if (result.bool) {
                                                player.judge(function (card) {
                                                    if (card.suit == event.card[0].suit) return 2;
                                                    return 0;
                                                }).judge2 = function (result) {
                                                    return result.bool ? true : false;
                                                };
                                            }
                                        } else event.finish();
                                        ('step 2');
                                        if (result.bool) {
                                            event.list = [];
                                            for (var i of lib.inpile) {
                                                if (get.tag({ name: i }, 'damage')) event.list.push(i);
                                            }
                                        } else event.finish();
                                        ('step 3');
                                        if (event.num > 0) {
                                            player.useCard({ name: event.list.randomGet() }, trigger.player);
                                            event.num--;
                                            event.redo();
                                        }
                                    },
                                },
                            },
                        },
                        qw_wd: {
                            init(player) {
                                player.storage.qw_wd = ['判定阶段', '摸牌阶段', '出牌阶段', '弃牌阶段'];
                            },
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.qw_wd.length;
                            },
                            content() {
                                'step 0';
                                player.chooseControl(player.storage.qw_wd);
                                ('step 1');
                                if (result.control == '判定阶段') {
                                    player.storage.qw_wd_pd = 1;
                                    player.storage.qw_wd = player.storage.qw_wd.filter((a) => {
                                        return a != '判定阶段';
                                    });
                                    player.loseMaxHp();
                                } else if (result.control == '摸牌阶段') {
                                    player.storage.qw_wd_mp = 1;
                                    player.storage.qw_wd = player.storage.qw_wd.filter((a) => {
                                        return a != '摸牌阶段';
                                    });
                                    player.loseMaxHp();
                                } else if (result.control == '出牌阶段') {
                                    player.storage.qw_wd_cp = 1;
                                    player.storage.qw_wd = player.storage.qw_wd.filter((a) => {
                                        return a != '出牌阶段';
                                    });
                                    player.loseMaxHp();
                                } else if (result.control == '弃牌阶段') {
                                    player.storage.qw_wd_qp = 1;
                                    player.storage.qw_wd = player.storage.qw_wd.filter((a) => {
                                        return a != '弃牌阶段';
                                    });
                                    game.log(player.storage.qw_wd.length);
                                    player.loseMaxHp();
                                }
                            },
                            group: ['qw_wd_sub', 'qw_wd_js'],
                            subSkill: {
                                js: {
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !player.hasSkill('qw_wwhs');
                                    },
                                    content() {
                                        var num = 0;
                                        for (var i of game.players) {
                                            if (i.hasMark('qw_wwhs_sub')) {
                                                i.removeMark('qw_wwhs_sub');
                                                if (!i.hasMark('qw_wwhs_sub')) i.removeSkill('qw_wwhs_sub');
                                                num++;
                                            }
                                        }
                                        if (num == 0) {
                                            player.removeSkill('qw_wwhs_sub');
                                        }
                                    },
                                },
                                sub: {
                                    trigger: {
                                        player: ['phaseJudgeBefore', 'phaseDrawBefore', 'phaseUseBefore', 'phaseDiscardBefore'],
                                    },
                                    forced: true,
                                    content() {
                                        if (event.triggername == 'phaseJudgeBefore' && player.storage.qw_wd_pd) trigger.cancel();
                                        if (event.triggername == 'phaseDrawBefore' && player.storage.qw_wd_mp) trigger.cancel();
                                        if (event.triggername == 'phaseUseBefore' && player.storage.qw_wd_cp) trigger.cancel();
                                        if (event.triggername == 'phaseDiscardBefore' && player.storage.qw_wd_qp) trigger.cancel();
                                    },
                                },
                            },
                        },
                        qw_nqzr: {
                            marktext: '扭',
                            mod: {
                                selectTarget(card, player, range) {
                                    if (range[1] == -1) return;
                                    if (card.name == 'sha' && player.hasMark('qw_nqzr')) range[1] += player.countMark('qw_nqzr');
                                },
                            },
                            intro: {
                                name: '扭曲',
                                content: '你的杀回闪量+#',
                            },
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            _priority: -26945,
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'sha' && !event.parent.directHit.includes(event.target);
                            },
                            logTarget: 'target',
                            content() {
                                if (player.hasMark('qw_nqzr')) {
                                    var id = trigger.target.playerid;
                                    var map = trigger.parent.customArgs;
                                    if (!map[id]) map[id] = {};
                                    if (typeof map[id].shanRequired == 'number') {
                                        map[id].shanRequired = player.countMark('qw_nqzr') + 1;
                                    } else {
                                        map[id].shanRequired = player.countMark('qw_nqzr') + 1;
                                    }
                                }
                            },
                        },
                        qw_dszz: {
                            global: 'qw_zluse',
                            init(player) {
                                player.storage.biaoshi = 0;
                                player.storage.zhiling = [];
                            },
                            trigger: {
                                global: 'roundStart',
                            },
                            forced: true,
                            lastDo: true,
                            content() {
                                'step 0';
                                var next = player.xgzhiling(get.translation(player.storage.zhiling[0].name), get.translation(player.storage.zhiling[2].name), get.translation(player.storage.zhiling[1]));
                                var num;
                                next.set('processAI', function () {
                                    var player = _status.event.player;
                                    return {
                                        bool: true,
                                        num: 0,
                                    };
                                });
                                next.set('goon', num);
                                ('step 1');
                                event.num = result.num;
                                if (result.num == 1 || result.num == 2) {
                                    player.chooseTarget('请选择一名其他角色', function (card, player, target) {
                                        if (event.num == 1) return target != player;
                                        else return true;
                                    });
                                    event.goto(2);
                                }
                                if (result.num == 3) {
                                    var list = [];
                                    var dialog = [];
                                    for (var i of lib.inpile) {
                                        if (lib.card[i].enable && lib.card[i].enable == true && get.type(i) != 'equip') list.push(i);
                                    }
                                    dialog.push([list, 'vcard']);
                                    player.chooseButton(dialog, 1, true);
                                    event.goto(3);
                                }
                                if (event.num == 0) event.finish();
                                ('step 2');
                                if (result.targets && event.num == 1) {
                                    player.storage.zhiling[0] = result.targets[0];
                                    event.goto(0);
                                } else {
                                    player.storage.zhiling[2] = result.targets[0];
                                    event.goto(0);
                                }
                                ('step 3');
                                if (event.num == 2 || event.num == 1) event.finish();
                                if (result.bool) {
                                    player.storage.zhiling[1] = result.links[0][2];
                                    event.goto(0);
                                }
                            },
                        },
                        qw_zlzx: {
                            usable: 1,
                            enable: 'phaseUse',
                            prompt(links, player) {
                                var yan = game.players.filter((i) => {
                                    return i.name == 'qw_Yan';
                                })[0];
                                return '弃置' + get.translation(yan.storage.zhiling[1]).length + '张牌对' + get.translation(yan.storage.zhiling[2].name) + '使用' + get.translation(yan.storage.zhiling[1]);
                            },
                            filter(event, player) {
                                return (
                                    game.players.filter((i) => {
                                        return i.name == 'qw_Yan';
                                    }).length &&
                                    player ==
                                    game.players.filter((i) => {
                                        return i.name == 'qw_Yan';
                                    })[0].storage.zhiling[0]
                                );
                            },
                            selectCard() {
                                return get.translation(
                                    game.players.filter((i) => {
                                        return i.name == 'qw_Yan';
                                    })[0].storage.zhiling[1]
                                ).length;
                            },
                            filterCard: true,
                            content() {
                                player.useCard(
                                    {
                                        name: game.players.filter((i) => {
                                            return i.name == 'qw_Yan';
                                        })[0].storage.zhiling[1],
                                    },
                                    game.players.filter((i) => {
                                        return i.name == 'qw_Yan';
                                    })[0].storage.zhiling[2],
                                    false
                                );
                                player.storage.zhilinglose = 1;
                                for (var i of game.players) {
                                    if (i.hasSkill('qw_dszz')) {
                                        i.draw(2);
                                        i.addMark('qw_nqzr', 1);
                                    }
                                }
                            },
                        },
                        qw_zluse: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                var yan = game.players.find((i) => i.name == 'qw_Yan');
                                if (yan && player == yan.storage.zhiling[0] && yan.storage.zhiling[0] == yan.storage.zhilinga && yan.storage.zhiling[1] == yan.storage.zhilingb && yan.storage.zhiling[2] == yan.storage.zhilingc) {
                                    if (player.storage.zhilinglose != 1) {
                                        player.loseHp(3); //QQQ
                                    }
                                }
                                player.storage.zhilinglose = 0;
                            },
                        },
                        qw_dszy: {
                            init(player) {
                                player.storage.zhiling = [];
                            },
                            global: 'qw_zlzx',
                            trigger: {
                                global: 'roundStart',
                            },
                            forced: true,
                            content() {
                                var list = [];
                                for (var i of lib.inpile) {
                                    if (lib.card[i].enable && lib.card[i].enable == true && get.type(i) != 'equip') list.push(i);
                                }
                                player.storage.zhiling = [];
                                player.storage.zhiling.push(
                                    game.players
                                        .filter((i) => {
                                            return player != i;
                                        })
                                        .randomGet()
                                );
                                player.storage.zhiling.push(list.randomGet());
                                player.storage.zhiling.push(game.players.randomGet());
                                player.storage.zhilinga = player.storage.zhiling[0];
                                player.storage.zhilingb = player.storage.zhiling[1];
                                player.storage.zhilingc = player.storage.zhiling[2];
                            },
                        },
                        qw_Allegro: {
                            init(player) {
                                player.storage.qw_Allegro = 0;
                                player.storage.qw_use = [[], []];
                            },
                            trigger: {
                                player: 'useCardToTargeted',
                            },
                            prompt: '是否发动「Allegro」',
                            prompt(event) {
                                return '是否对' + get.translation(event.target) + '发动「Allegro」';
                            },
                            filter(event, player) {
                                if (event.parent.parent.name == 'qw_xlgz') return false;
                                if (player.storage.qw_Allegro >= game.players.length) return false;
                                return event.target != player && event.card.suit;
                            },
                            content() {
                                var x = trigger.target.getCards('h').filter(function (card) {
                                    return card.suit == trigger.card.suit;
                                }).length;
                                trigger.target.addMark('qw_xlgz', x ? x : 1);
                                player.draw(x ? x : 1);
                                trigger.target.draw(x ? x : 1);
                                player.storage.qw_Allegro++;
                            },
                            group: 'qw_Allegro_clear',
                            subSkill: {
                                clear: {
                                    trigger: {
                                        global: 'phaseBegin',
                                    },
                                    lastDo: true,
                                    forced: true,
                                    content() {
                                        player.storage.qw_Allegro = 0;
                                    },
                                },
                            },
                        },
                        qw_Largo: {
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            init(player) {
                                player.storage.qw_Largo = 0;
                            },
                            prompt(event) {
                                return '是否对' + get.translation(event.player) + '发动「Largo」';
                            },
                            filter(event, player) {
                                if (player.storage.qw_Largo >= game.players.length) return false;
                                return event.player != player && event.card.suit;
                            },
                            content() {
                                var x = player.getCards('h').filter(function (card) {
                                    return card.suit == trigger.card.suit;
                                }).length;
                                trigger.player.addMark('qw_xlgz', x ? x : 1);
                                player.draw(x ? x : 1);
                                trigger.player.draw(x ? x : 1);
                                player.storage.qw_Largo++;
                            },
                            group: 'qw_Largo_clear',
                            subSkill: {
                                clear: {
                                    trigger: {
                                        global: 'phaseBegin',
                                    },
                                    forced: true,
                                    content() {
                                        player.storage.qw_Largo = 0;
                                    },
                                },
                            },
                        },
                        qw_xlgz: {
                            init(player) {
                                player.storage.qw_Allegro = 0;
                                player.storage.qw_use = [[], []]; //QQQ
                            },
                            marktext: '震',
                            intro: {
                                name: '震颤',
                            },
                            trigger: {
                                player: 'useCardAfter',
                            },
                            filter(event, player) {
                                if (player.storage.qw_use[0].length && !player.storage.qw_use[1][0].isAlive()) return false;
                                return player.storage.qw_use[0].length && player.storage.qw_use[1][0].hasMark('qw_xlgz');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseControl(['确定', '取消']).set('prompt', '是否对' + get.translation(trigger.targets) + '再次使用此牌？');
                                ('step 1');
                                if (result.control == '确定') {
                                    trigger.targets[0].removeMark('qw_xlgz');
                                    player.useCard(trigger.card, trigger.targets, false);
                                    player.storage.qw_use[0].splice(0, 1);
                                    player.storage.qw_use[1].splice(0, 1);
                                }
                            },
                            group: ['qw_xlgz_use1', 'qw_xlgz_clear'],
                            subSkill: {
                                clear: {
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    filter(event, player) {
                                        return player.storage.qw_use[0].length;
                                    },
                                    lastDo: true,
                                    forced: true,
                                    content() {
                                        player.storage.qw_use[0] = [];
                                        player.storage.qw_use[1] = [];
                                    },
                                },
                                use1: {
                                    trigger: {
                                        player: 'useCardToTargeted',
                                    },
                                    forced: true,
                                    lastDo: true,
                                    filter(event, player) {
                                        return (
                                            event.target != player &&
                                            event.target.getCards('h').filter(function (card) {
                                                return card.number - (event.target.hasMark('qw_xlgz') ? event.target.countMark('qw_xlgz') : 0) <= event.card.number && event.card.number <= card.number + (event.target.hasMark('qw_xlgz') ? event.target.countMark('qw_xlgz') : 0);
                                            }).length
                                        );
                                    },
                                    content() {
                                        var card = game.createCard(trigger.card.name, null, null, trigger.card.nature);
                                        player.storage.qw_use[0].push(card);
                                        player.storage.qw_use[1].push(trigger.target);
                                    },
                                },
                            },
                        },
                        qw_clcx: {
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.source) return !player.inRange(event.source);
                            },
                            content() {
                                trigger.num--;
                            },
                        },
                        傻逼孙策: {
                            trigger: {
                                global: ['phaseBegin', 'phaseAfter'],
                            },
                            forced: true,
                            content() {
                                for (var i of game.players) {
                                    if (i.name == 'sunce') {
                                        game.players.remove(i);
                                        i.die();
                                        i.delete();
                                    }
                                }
                            },
                        },
                        ark_jdfc: {
                            trigger: {
                                player: 'phaseAfter',
                            },
                            marktext: '从',
                            intro: {
                                name: '绝对服从',
                                content: '层数归零时解除控制',
                            },
                            filter(event, player) {
                                return player.hp <= 40 && game.roundNumber % 2 == 0;
                            },
                            forced: true,
                            content() {
                                var list = game.players.filter((player) => {
                                    return player.identity != 'zhu' && player.identity != 'zhong' && player != game.me;
                                });
                                if (list.length) {
                                    var neigui = list.randomGet();
                                    player.say('跪在我面前求饶吧!');
                                    setTimeout(function () {
                                        neigui.say(['你是我的主人..', '...请您下达指令吧,教主大人', '你是我唯一的神,教主大人.', '我是守护法洛斯教团的盾牌...放马过来吧'].randomGet());
                                    }, 700);
                                    neigui.identity = 'zhong';
                                    neigui.side = true;
                                    neigui.setIdentity('zhong');
                                    neigui.addMark('ark_jdfc', 3);
                                    neigui.addSkill('ark_jdfc_chaofeng');
                                    if (neigui.hasMark('ark_zhipei')) {
                                        neigui.removeMark('ark_zhipei');
                                        neigui.removeSkill('ark_zhipei_fengyin');
                                        neigui.removeSkill('ark_zhipei_use');
                                    }
                                }
                            },
                            group: 'ark_jdfc_jiechu',
                            subSkill: {
                                chaofeng: {
                                    ai: {
                                        threaten: 100,
                                    },
                                },
                                jiechu: {
                                    trigger: {
                                        global: 'damageAfter',
                                    },
                                    filter(event, player) {
                                        return event.player.hasMark('ark_jdfc');
                                    },
                                    content() {
                                        trigger.player.removeMark('ark_jdfc');
                                        if (trigger.player.countMark('ark_jdfc') == 0) {
                                            trigger.player.identity = 'cai';
                                            trigger.player.node.identity.innerText = '盟';
                                            trigger.player.node.identity.dataset.color = 'cai';
                                            trigger.player.removeSkill('ark_jdfc_chaofeng');
                                            trigger.player.side = false;
                                        }
                                    },
                                },
                            },
                        },
                        ark_kbsw: {
                            trigger: {
                                global: 'phaseAfter',
                            },
                            forced: true,
                            mode: ['boss'], //QQQ
                            filter(event, player) {
                                return event.player != game.boss;
                            },
                            content() {
                                trigger.player.loseHp(Math.floor(trigger.player.countCards('h') / 3));
                            },
                        },
                        ark_zhipei: {
                            trigger: {
                                player: 'phaseAfter',
                            },
                            marktext: '支',
                            intro: {
                                name: '支配',
                                content: '无法使用技能,无法使用手牌指定敌方,对友方造成伤害后解除',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hp <= 40 || game.roundNumber % 2 == 1 || player.hp > 40;
                            },
                            content() {
                                var list = game.players.filter((player) => {
                                    return player.identity != 'zhu' && player.identity != 'zhong' && !player.hasMark('ark_zhipei');
                                });
                                if (list.length) {
                                    var a = list.randomGet();
                                    a.addMark('ark_zhipei');
                                    a.addSkill('ark_zhipei_use');
                                    a.addSkill('ark_zhipei_fengyin');
                                }
                            },
                            subSkill: {
                                jiechu: {
                                    trigger: {
                                        global: 'damageAfter',
                                    },
                                    filter(event, player) {
                                        if (event.player.identity == 'zhu' || event.player.identity == 'zhong') return false;
                                        return event.source && event.source.hasMark('ark_zhipei');
                                    },
                                    content() {
                                        trigger.source.removeMark('ark_zhipei');
                                        trigger.source.removeSkill('ark_zhipei_fengyin');
                                        trigger.source.removeSkill('ark_zhipei_use');
                                    },
                                },
                                use: {
                                    mod: {
                                        targetEnabled(card, player, target, now) {
                                            if (
                                                target == player &&
                                                game.filterPlayer(function (target) {
                                                    return target.identity == 'cai';
                                                }).length == 1
                                            ) {
                                                return true;
                                            }
                                        },
                                    },
                                    ai: {
                                        effect: {
                                            player(card, player, target) {
                                                if ((get.tag(card, 'damage') && get.attitude(player, target) > 0) || player == target) {
                                                    return [0, 0, 0, 3];
                                                }
                                            },
                                        },
                                    },
                                    mod: {
                                        playerEnabled(card, player, target) {
                                            if (target.identity == 'zhu' || target.identity == 'zhong') return false;
                                        },
                                    },
                                },
                                fengyin: {
                                    init(player, skill) {
                                        player.addSkillBlocker(skill);
                                    },
                                    onremove(player, skill) {
                                        player.removeSkillBlocker(skill);
                                    },
                                    charlotte: true,
                                    skillBlocker(skill, player) {
                                        return skill != 'ark_zhipei_use' && skill != 'ark_zhipei_fengyin';
                                    },
                                },
                            },
                        },
                        ark_flsjz: {
                            popup: false,
                            mode: ['boss'],
                            trigger: {
                                global: ['phaseBegin'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                ui.background.setBackgroundImage('extension/超时空方舟/image/ark_sl.jpg');
                                lib.config.image_background = '法洛斯教主';
                                ('step 1');
                                lib.config.background_music = 'music_custom';
                                lib.config.background_music_src = 'extension/超时空方舟/audio/ark_bsmd.mp3';
                                game.playBackgroundMusic();
                                ('step 2');
                                for (var i = 0; i < game.players.length; i++) {
                                    if (game.players[i] != game.boss) {
                                        game.players[i].style.top = 'calc(50% )';
                                        game.players[i].maxHp = game.players[i].maxHp * 4;
                                        game.players[i].hp = game.players[i].maxHp;
                                        game.players[i].update();
                                    }
                                }
                                game.players[0].style.left = 'calc(0% )';
                                game.players[1].style.left = 'calc(45% )';
                                game.players[2].style.left = 'calc(90% )';
                                player.addSkill('ark_zhipei_jiechu');
                                player.addSkill('ark_flsjz_suoxue');
                                player.removeSkill('ark_flsjz');
                            },
                            subSkill: {
                                suoxue1: {
                                    trigger: {
                                        player: ['changeHpBefore', 'dieBefore', 'damageBefore', 'loseHpBefore'],
                                    },
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                                suoxue: {
                                    trigger: {
                                        player: ['changeHpBefore', 'dieBefore', 'damageBefore', 'loseHpBefore'],
                                    },
                                    content() {
                                        if ((event.triggername == 'damageBefore' && trigger.num > player.hp - 40) || event.triggername == 'dieBefore') {
                                            player.hp = 40;
                                            player.update();
                                            player.addTempSkill('ark_flsjz_suoxue1');
                                            player.removeSkill('ark_flsjz_suoxue');
                                        }
                                    },
                                },
                            },
                        },
                        qw_hyj: {
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filterCard(card) {
                                return card.hasGaintag && card.hasGaintag('幻影剑');
                            },
                            selectCard: 1,
                            audio: 'ext:超时空方舟/audio:1',
                            position: 's',
                            complexCard: true,
                            viewAs: {
                                name: 'sha',
                            },
                            filter(event, player) {
                                return player.countCards('s') >= 1;
                            },
                            prompt: '将「幻影剑」当杀使用或打出',
                            check(card) {
                                if (card.name == 'sha') return 0;
                                return 5 - get.value(card);
                            },
                            ai: {
                                respondSha: true,
                                skillTagFilter(player) {
                                    return player.countCards('hs') >= 2;
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
                                    if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                    return true;
                                },
                                basic: {
                                    useful: [5, 3, 1],
                                    value: [5, 3, 1],
                                },
                                order(item, player) {
                                    return 3.05;
                                },
                                result: {
                                    target(player, target, card, isLink) {
                                        var eff = (function () {
                                            if (!isLink && player.hasSkill('jiu')) {
                                                if (
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
                                                return -0.5;
                                            }
                                            return -1.5;
                                        })();
                                        if (
                                            !isLink &&
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
                                            return eff / 1.2;
                                        return eff;
                                    },
                                },
                                tag: {
                                    respond: 1,
                                    respondShan: 1,
                                    damage(card) {
                                        if (card.hasNature('poison')) return;
                                        return 1;
                                    },
                                    natureDamage(card) {
                                        if (card.hasNature()) return 1;
                                    },
                                    fireDamage(card, nature) {
                                        if (card.hasNature('fire')) return 1;
                                    },
                                    thunderDamage(card, nature) {
                                        if (card.hasNature('thunder')) return 1;
                                    },
                                    poisonDamage(card, nature) {
                                        if (card.hasNature('poison')) return 1;
                                    },
                                },
                            },
                            init(player) {
                                player.expandEquip(1);
                                player.storage.ark_azar1 = 0;
                            },
                            mod: {
                                cardEnabled(card) {
                                    if (get.itemtype(card) == 'card') {
                                        if (card.hasGaintag('幻影剑') && get.subtype(card) != 'equip1') return false;
                                    } else if (card.cards) {
                                        if (card.cards.some((card) => card.hasGaintag('幻影剑')) && get.subtype(card) != 'equip1') return false;
                                    }
                                },
                                cardSavable(card) {
                                    if (get.itemtype(card) == 'card') {
                                        if (card.hasGaintag('幻影剑')) return false;
                                    } else if (card.cards) {
                                        if (card.cards.some((card) => card.hasGaintag('幻影剑'))) return false;
                                    }
                                },
                                cardRespondable(card, player) {
                                    if (get.itemtype(card) == 'card') {
                                        if (!_status.event.skill && _status.event.skill != 'qw_hyj_sha' && card.hasGaintag('幻影剑')) return false;
                                    } else if (card.cards) {
                                        if (!_status.event.skill && _status.event.skill != 'qw_hyj_sha' && card.cards.some((card) => card.hasGaintag('幻影剑'))) return false;
                                    }
                                },
                            },
                            group: ['qw_hyj_sha'],
                            subSkill: {
                                sha: {
                                    trigger: {
                                        global: ['loseAfter', 'cardsDiscardAfter', 'loseAsyncAfter', 'equipAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.parent.relatedEvent && event.parent.relatedEvent.skill) {
                                            if (event.parent.relatedEvent.skill == 'qw_hyj') return false;
                                        }
                                        var cards = event.getd();
                                        if (!cards.length) return false;
                                        for (var card of cards) {
                                            if (get.position(card, true) == 'd' && (get.subtype(card, null, false) == 'equip1' || card.hasGaintag('qw_hyj'))) return true;
                                        }
                                        return false;
                                    },
                                    content() {
                                        var list = [];
                                        for (var a of trigger.getd()) {
                                            if (get.subtype(a) == 'equip1') {
                                                list.push(a);
                                            }
                                        }
                                        player.gain(list);
                                        player.loseToSpecial(list, '幻影剑', player);
                                        if (player.storage.ark_azar1 == 0 && player.countCards('s') >= 6) {
                                            player.storage.ark_azar1 = 1;
                                            game.broadcastAll(function (player, target) {
                                                player.node.avatar.setBackgroundImage('extension/超时空方舟/image/ark_azar1.jpg');
                                                lib.config.background_music = 'music_custom';
                                                lib.config.background_music_src = 'extension/超时空方舟/audio/Challenge.mp3';
                                                game.playBackgroundMusic();
                                            }, player);
                                        }
                                    },
                                },
                                equip: {
                                    trigger: {
                                        player: 'equipBegin',
                                    },
                                    silent: true,
                                    forced: true,
                                    ai: {
                                        effect: {
                                            player_use(card, player) {
                                                if (card.name == 'zhuge') return [0, 100];
                                            },
                                        },
                                    },
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
                                    popup: false,
                                    _priority: 1,
                                },
                            },
                        },
                        qw_hysdys: {
                            trigger: {
                                player: 'useCardBefore',
                            },
                            usable: 1,
                            forced: true,
                            filter(event, player) {
                                for (var a of event.cards) {
                                    if (a.hasGaintag && (a.hasGaintag('唤影') || a.hasGaintag('幻影剑'))) return false;
                                }
                                return event.cards.length == 1 && player.countCards('h') > 1;
                            },
                            content() {
                                for (var i = 0; i < player.countCards('h'); i++) {
                                    game.log(trigger.cards[0]);
                                    if (trigger.cards[0] == player.getCards('h')[i] && player.getCards('h')[i - 1]) player.addGaintag(player.getCards('h')[i - 1], '唤影');
                                    if (trigger.cards[0] == player.getCards('h')[i] && player.getCards('h')[i + 1]) player.addGaintag(player.getCards('h')[i + 1], '唤影');
                                }
                            },
                            group: ['qw_hysdys_sub'],
                            subSkill: {
                                sub: {
                                    trigger: {
                                        player: ['useCardBefore', 'respondBefore'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.cards && event.cards.length) {
                                            //QQQ
                                            for (var i = 0; i < event.cards.length; i++) {
                                                if (event.cards[i].hasGaintag('唤影')) return true;
                                            }
                                        }
                                    },
                                    content() {
                                        'step 0';
                                        event.card = game.createCard('azar_sword');
                                        player.gain(event.card);
                                        ('step 1');
                                        player.loseToSpecial([event.card], '幻影剑', player);
                                        if (player.storage.ark_azar1 == 0 && player.countCards('s') >= 6) {
                                            player.storage.ark_azar1 = 1;
                                            game.broadcastAll(function (player, target) {
                                                player.node.avatar.setBackgroundImage('extension/超时空方舟/image/ark_azar1.jpg');
                                                lib.config.background_music = 'music_custom';
                                                lib.config.background_music_src = 'extension/超时空方舟/audio/Challenge.mp3';
                                                game.playBackgroundMusic();
                                            }, player);
                                        }
                                    },
                                },
                            },
                        },
                        qw_xymy: {
                            init(player) {
                                player.storage.xymy = 0;
                            },
                            trigger: {
                                player: 'useCard1',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            forced: true,
                            charlotte: true,
                            firstDo: true,
                            mark: true,
                            marktext: '新月',
                            intro: {
                                name(storage, player) {
                                    if (player.storage.xymy == 0) return '新月斩';
                                    return '满月斩';
                                },
                                content(storage, player) {
                                    if (player.storage.xymy == 0) return '你的杀不计入次数且使用时获得一张「幻影剑」';
                                    return '你的杀的伤害+1且使用时弃置目标一张牌';
                                },
                            },
                            content() {
                                if (player.storage.xymy == 0) {
                                    if (trigger.addCount !== false) {
                                        trigger.addCount = false;
                                        player.getStat().card.sha--;
                                    }
                                    player.storage.xymy = 1;
                                    var card = game.createCard('azar_sword');
                                    player.gain(event.card);
                                    player.loseToSpecial([card], '幻影剑', player);
                                    game.broadcastAll(
                                        function (player, target) {
                                            player.marks['qw_xymy'].firstChild.innerHTML = '满月';
                                        },
                                        player,
                                        target
                                    );
                                } else {
                                    trigger.baseDamage++;
                                    player.storage.xymy = 0;
                                    if (trigger.targets) {
                                        for (var i of trigger.targets) {
                                            player.discardPlayerCard('he', i, true).set('ai', function (button) {
                                                var card = button.link;
                                                var player = _status.event.player;
                                                if (card.name == 'zhuge') return 100;
                                                if (get.subtype(card) == 'equip1') return 9;
                                                if (get.subtype(card) == 'equip2') return 4 + get.value(card);
                                                return 4 + player.needsToDiscard() - get.value(card);
                                            });
                                        }
                                    }
                                    game.broadcastAll(
                                        function (player, target) {
                                            player.marks['qw_xymy'].firstChild.innerHTML = '新月';
                                        },
                                        player,
                                        target
                                    );
                                }
                            },
                        },
                        qw_jianmu: {
                            trigger: {
                                player: 'damageAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!player.countCards('h', { name: 'sha' }) && !player.countCards('s')) return false;
                                return event.source;
                            },
                            content() {
                                player.chooseToUse({ name: 'sha' }, '剑幕:是否对' + get.translation(trigger.source) + '使用一张杀', trigger.source, -1);
                            },
                        },
                        qw_zytc: {
                            trigger: {
                                player: ['shaBegin'],
                            },
                            forced: true,
                            content() {
                                trigger.baseDamage++;
                            },
                            group: 'qw_zytc_draw',
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: 'phaseDrawBegin',
                                    },
                                    forced: true,
                                    content() {
                                        trigger.num += 2;
                                    },
                                },
                            },
                        },
                        qw_pihu: {
                            trigger: {
                                global: ['changeHpBefore', 'dieBefore', 'damageBefore', 'loseHpBefore'],
                            },
                            filter(event, player) {
                                if (event.player.name == 'qw_Dorchi') return true;
                            },
                            content() {
                                trigger.cancel();
                            },
                            mode: ['boss'],
                            group: 'qw_pihu_phase',
                            subSkill: {
                                phase: {
                                    trigger: {
                                        player: 'phaseBefore',
                                    },
                                    forced: true,
                                    mode: ['boss'],
                                    content() {
                                        trigger.cancel();
                                        player.line(target, 'fire');
                                        if (game.boss.name == 'qw_Dorchi') {
                                            game.boss.phase('nodelay');
                                        }
                                    },
                                },
                            },
                        },
                        qw_dorchidie: {
                            popup: false,
                            trigger: {
                                player: 'dieBefore',
                            },
                            forced: true,
                            mode: ['boss'],
                            content() {
                                'step 0';
                                trigger.cancel();
                                player.hp = 1;
                                galgame.sce('多尔希爵士3');
                                ('step 1');
                                game.addBossFellow(game.me == game.boss ? 6 : 5, 'Dorchi_Sword');
                                game.addBossFellow(game.me == game.boss ? 1 : 7, 'Dorchi_Sword');
                                var fellow = game.addFellow(1, 'Dorchi_Sword');
                                fellow.directgain(get.cards(4));
                                fellow.style.left = 'calc(50% - 480px)';
                                fellow.style.top = 'calc(50% )';
                                fellow.side = player.side;
                                fellow.identity = 'zhong';
                                fellow.setIdentity('zhong');
                                game.addVideo('setIdentity', fellow, 'zhong');
                                var fellow1 = game.addFellow(1, 'Dorchi_Sword');
                                fellow1.directgain(get.cards(4));
                                fellow1.style.left = 'calc(50% - 80px)';
                                fellow1.style.top = 'calc(40% )';
                                fellow1.side = player.side;
                                fellow1.identity = 'zhong';
                                fellow1.setIdentity('zhong');
                                game.addVideo('setIdentity', fellow1, 'zhong');
                                player.update();
                                ('step 2');
                                galgame.sce('多尔希爵士4');
                                ('step 3');
                                player.addSkill('qw_zytc');
                                player.removeSkill('qw_dorchidie');
                                player.removeSkill('qw_jjkj');
                                var fl = player.getElementsByClassName('荆棘铠甲');
                                if (fl[0]) {
                                    fl[0].parentNode.removeChild(fl[0]);
                                }
                            },
                        },
                        qw_bhcy1: {
                            markimage: 'extension/超时空方舟/image/ark_bhcy.jpg',
                            intro: {
                                name: '保护舞动的草叶',
                                content: '触发舞动的草叶时改为摸一张牌',
                            },
                        },
                        qw_bhcy2: {
                            trigger: {
                                player: 'phaseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.roundNumber == 2;
                            },
                            content() {
                                for (var a of game.players) {
                                    if (a.identity != 'zhu' && a.identity != 'zhong') {
                                        a.gain(game.createCard('qw_bhcy'));
                                        break;
                                    }
                                }
                                player.removeSkill('qw_bhcy2');
                            },
                        },
                        qw_hsmw: {
                            trigger: {
                                global: 'recoverBefore',
                            },
                            filter(event, player) {
                                return game.roundNumber >= 9;
                            },
                            content() {
                                trigger.cancel();
                            },
                        },
                        qw_jjkj: {
                            trigger: {
                                global: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                var n = 0;
                                var fl = player.getElementsByClassName('荆棘铠甲');
                                if (fl[0]) {
                                    n++;
                                }
                                if (n == 0) {
                                    var fj = document.createElement('img');
                                    fj.src = 'extension/超时空方舟/image/ark_jjkj.jpg';
                                    fj.style.cssText = 'pointer-events:none';
                                    fj.style.display = 'block';
                                    fj.style.position = 'absolute';
                                    fj.classList.add('荆棘铠甲');
                                    fj.style.top = '60px';
                                    fj.style.left = '10px';
                                    fj.style.height = '100px';
                                    fj.style.width = '100px';
                                    fj.style.zIndex = '98';
                                    player.appendChild(fj);
                                }
                            },
                            group: 'qw_jjkj_damage',
                            subSkill: {
                                damage: {
                                    trigger: {
                                        player: 'damageBefore',
                                    },
                                    filter(event, player) {
                                        var fl = player.getElementsByClassName('荆棘铠甲');
                                        return fl[0];
                                    },
                                    forced: true,
                                    content() {
                                        var fl = player.getElementsByClassName('荆棘铠甲');
                                        if (fl[0]) {
                                            fl[0].parentNode.removeChild(fl[0]);
                                            if (trigger.source) trigger.source.damage(trigger.num);
                                        }
                                    },
                                },
                            },
                        },
                        qw_wddcy: {},
                        _qw_wddcy: {
                            markimage: 'extension/超时空方舟/image/_qw_wddcy.jpg',
                            intro: {
                                name: '舞动的草叶',
                                content: '使用或打出牌时受到两点伤害',
                            },
                            trigger: {
                                player: ['useCardAfter'],
                            },
                            mode: ['boss'],
                            filter(event, player) {
                                return (
                                    game.hasPlayer(function (current) {
                                        return current.name == 'qw_Dorchi' && current == game.boss;
                                    }) &&
                                    event.player.identity != 'zhu' &&
                                    event.player.identity != 'zhong'
                                );
                            },
                            forced: true,
                            content() {
                                if (trigger.player.hasMark('_qw_wddcy')) {
                                    if (!trigger.player.hasMark('qw_bhcy1')) trigger.player.damage(2, game.boss);
                                    else {
                                        trigger.player.draw();
                                        trigger.player.removeMark('qw_bhcy1', 1);
                                    }
                                }
                                var list = [];
                                for (var a = 0; a < game.players.length; a++) {
                                    if (game.players[a].identity != 'zhu' && game.players[a].identity != 'zhong') {
                                        list.push(game.players[a]);
                                    }
                                }
                                for (var a = 0; a < game.players.length; a++) {
                                    if (game.players[a].identity != 'zhu' && game.players[a].identity != 'zhong') {
                                        if (game.players[a].hasMark('_qw_wddcy')) {
                                            for (var b = 0; b < list.length; b++) {
                                                if (list[b] == game.players[a]) break;
                                            }
                                            game.players[a].removeMark('_qw_wddcy', 1);
                                            var x = 1;
                                        }
                                    }
                                }
                                if (!x) trigger.player.addMark('_qw_wddcy');
                                else list[(1 + b) % list.length].addMark('_qw_wddcy');
                            },
                        },
                        qw_dorchi2: {
                            popup: false,
                            mode: ['boss'],
                            trigger: {
                                player: ['phaseUseBegin'],
                            },
                            forced: true,
                            content() {
                                galgame.sce('多尔希爵士2', true);
                                player.removeSkill('qw_dorchi2');
                            },
                        },
                        qw_dorchi1: {
                            popup: false,
                            mode: ['boss'],
                            trigger: {
                                player: ['phaseDrawAfter'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                galgame.sce('多尔希爵士1', true);
                                ('step 1');
                                game.arkcg('ark_cyz', null, true);
                                ('step 2');
                                for (var a of game.players) {
                                    if (a != player) {
                                        a.damage(2);
                                    }
                                }
                                player.removeSkill('qw_dorchi1');
                            },
                        },
                        qw_dorchi: {
                            popup: false,
                            mode: ['boss'],
                            trigger: {
                                global: ['phaseBegin'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                ui.background.setBackgroundImage('extension/超时空方舟/image/ark_sl.jpg');
                                lib.config.image_background = '多尔希爵士';
                                galgame.sce('多尔希爵士');
                                ('step 1');
                                lib.config.background_music = 'music_custom';
                                lib.config.background_music_src = 'extension/超时空方舟/audio/ark_Dorchi.mp3';
                                game.playBackgroundMusic();
                                ('step 2');
                                player.removeSkill('qw_dorchi');
                                player.addSkill('qw_dorchi_lose');
                            },
                            group: 'qw_dorchi_hp',
                            subSkill: {
                                lose: {
                                    trigger: {
                                        global: 'loseAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        for (var a of event.cards) {
                                            if (a.name == 'qw_bhcy') return true;
                                        }
                                    },
                                    content() {
                                        for (var a of trigger.cards) {
                                            a.fix();
                                            a.remove();
                                            a.destroyed = true;
                                            game.log(a, '被销毁了');
                                        }
                                    },
                                },
                                hp: {
                                    trigger: {
                                        global: 'gameStart',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return game.hasPlayer(function (current) {
                                            return current.name == 'qw_Dorchi' && current == game.boss;
                                        });
                                    },
                                    content() {
                                        for (var a of game.players) {
                                            if (a.name != 'qw_Dorchi') {
                                                a.maxHp = a.maxHp * 3;
                                                a.hp = a.hp * 3;
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        qw_tkdzz: {},
                        _qw_lxdyy: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                if (game.mode && game.mode == 'ark' && player.identity != 'zhu' && player.identity != 'zhong') return true;
                                return (
                                    game.hasPlayer(function (current) {
                                        return (current.name == 'qw_monv' || current.name == 'qw_Dorchi' || current.name == 'qw_flsjz') && current == game.boss;
                                    }) &&
                                    player.identity != 'zhu' &&
                                    player.identity != 'zhong'
                                );
                            },
                            mode: ['boss'],
                            content() {
                                'step 0';
                                player.popup('露西的应援', null, false);
                                var list = ['qw_diaoyu', 'qw_reshen', 'qw_zrfwmf', 'qw_shualai', 'qw_zonggong', 'qw_jiasu', 'qw_tiyi', 'qw_ahxt', 'qw_jsmfz', 'qw_knx', 'qw_czdbb', 'qw_szzdb', 'qw_zsgb', 'qw_mingxiang'];
                                // 'qw_diaoyu','qw_reshen','qw_zrfwmf','qw_shualai','qw_zonggong','qw_jiasu','qw_tiyi','qw_ahxt','qw_jsmfz','qw_knx','qw_czdbb','qw_szzdb'
                                if (game.mode == 'ark') {
                                    player.chooseButton(['露西的应援:请选择一张牌', [list, 'vcard']]);
                                }
                            },
                        },
                        qw_zuzhou4: {
                            trigger: {
                                global: 'phaseDiscardAfter',
                            },
                            mode: ['boss'], //QQQ
                            filter(event, player) {
                                var a = 0;
                                for (var card of event.player.getCards('h')) {
                                    if (card.name == 'qw_tkzz') a++;
                                }
                                return (
                                    game.hasPlayer(function (current) {
                                        return current.name == 'qw_monv' && current == game.boss;
                                    }) && a > 0
                                );
                            },
                            forced: true,
                            content() {
                                var cards = [];
                                for (var card of trigger.player.getCards('h')) {
                                    if (card.name == 'qw_tkzz') cards.push(card);
                                }
                                trigger.player.loseToDiscardpile(cards);
                            },
                        },
                        qw_zuzhou3: {
                            trigger: {
                                global: 'useCardAfter',
                            },
                            forced: true,
                            mode: ['boss'], //QQQ
                            filter(event, player) {
                                var b = 0;
                                for (var a of event.cards) {
                                    if (a.name == 'qw_tkzz') b = 1;
                                }
                                for (var carda of event.cards) {
                                    if (carda.name != 'qw_tkzz' && b == 1)
                                        return game.hasPlayer(function (current) {
                                            return current.name == 'qw_monv' && current == game.boss;
                                        });
                                }
                                return false;
                            },
                            content() {
                                for (var a of game.players) {
                                    if (a.name != 'qw_monv' && a.name != 'qw_zsro' && a.name != 'qw_npro') a.addMark('qw_zuzhou');
                                }
                            },
                        },
                        qw_zuzhou2: {
                            trigger: {
                                global: 'loseAfter',
                            },
                            forced: true,
                            mode: ['boss'], //QQQ
                            filter(event, player) {
                                for (var carda of event.cards) {
                                    if (carda.name == 'qw_tkzz')
                                        return (
                                            game.hasPlayer(function (current) {
                                                return current.name == 'qw_monv' && current == game.boss;
                                            }) && event.parent.name != 'useCard'
                                        );
                                }
                                return false;
                            },
                            content() {
                                for (var a of game.players) {
                                    if (a.name != 'qw_monv' && a.name != 'qw_zsro' && a.name != 'qw_npro') a.addMark('qw_zuzhou');
                                }
                            },
                        },
                        qw_zuzhou1: {
                            trigger: {
                                global: 'phaseAfter',
                            },
                            mode: ['boss'], //QQQ
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current.name == 'qw_monv' && current == game.boss;
                                });
                            },
                            forced: true,
                            content() {
                                if (trigger.player.hasMark('qw_zuzhou')) trigger.player.loseHp(trigger.player.countMark('qw_zuzhou'));
                            },
                        },
                        qw_zuzhou: {
                            marktext: '咒',
                            intro: {
                                name: '诅咒',
                                content: '回合结束流失#点体力',
                            },
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return player.name == 'qw_monv';
                            },
                            forced: true,
                            content() {
                                for (var a of game.players) {
                                    if (a.name != 'qw_monv' && a.name != 'qw_zsro' && a.name != 'qw_npro') {
                                        a.gain(game.createCard('qw_tkzz'));
                                        break;
                                    }
                                }
                            },
                        },
                        qw_jqddf: {
                            mod: {
                                cardUsable(card, player, num) {
                                    return Infinity;
                                },
                                trigger: {
                                    player: ['phaseJudgeBefore'],
                                },
                                forced: true,
                                content() {
                                    trigger.cancel();
                                },
                            },
                        },
                        qw_chaofeng: {
                            global: 'qw_chaofeng_disable',
                            trigger: {
                                global: 'useCard1',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.targets.includes(player) && player != event.player;
                            },
                            content() { },
                            gainable: true,
                            subSkill: {
                                disable: {
                                    mod: {
                                        targetEnabled(card, player, target) {
                                            if (player.hasSkill('qw_chaofeng')) return;
                                            if (target.hasSkill('qw_chaofeng')) return;
                                            if (
                                                game.hasPlayer(function (current) {
                                                    return current.hasSkill('qw_chaofeng') && current.isEnemiesOf(player) && card.name != 'qw_tkzz' && target != player;
                                                })
                                            ) {
                                                return false;
                                            }
                                        },
                                    },
                                },
                            },
                        },
                        qw_roqh: {
                            trigger: {
                                player: 'phaseDrawBegin',
                                source: 'damageBegin',
                            },
                            marktext: '强化',
                            intro: {
                                name: '强化',
                                content: '已强化#次',
                            },
                            filter(event, player) {
                                return player.hasMark('qw_roqh');
                            },
                            forced: true,
                            content() {
                                if (event.triggername == 'phaseDrawBegin') {
                                    trigger.num += player.countMark('qw_roqh');
                                    if (player.name == 'qw_npro') trigger.num += player.countMark('qw_roqh');
                                    if (player.name == 'qw_zsro') player.changeHujia(Math.ceil(player.countMark('qw_roqh') / 2));
                                } else if (player.name == 'qw_npro') trigger.num += player.countMark('qw_roqh');
                            },
                        },
                        qw_yddro: {
                            popup: false,
                            mode: ['boss'],
                            trigger: {
                                player: ['phaseBegin'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                ('step 1');
                                var a = [];
                                for (var b of game.players) {
                                    if (b.name == 'qw_npro' || b.name == 'qw_zsro') a.push(b);
                                }
                                if (a.length == 0) {
                                    game.addBossFellow(game.me == game.boss ? 6 : 5, 'qw_zsro');
                                    game.addBossFellow(game.me == game.boss ? 1 : 7, 'qw_npro');
                                } else a.randomGet().addMark('qw_roqh');
                            },
                            group: ['qw_yddro_hp', 'qw_yddro_bgm', 'qw_zuzhou', 'qw_zuzhou1', 'qw_zuzhou2', 'qw_zuzhou3', 'qw_zuzhou4'],
                            subSkill: {
                                bgm: {
                                    trigger: {
                                        global: 'gameStart',
                                    },
                                    firstDo: true,
                                    forced: true,
                                    content() {
                                        lib.config.background_music = 'music_custom';
                                        lib.config.background_music_src = 'extension/超时空方舟/audio/ark_monv.mp3';
                                        game.playBackgroundMusic();
                                        ui.background.setBackgroundImage('extension/超时空方舟/image/ark_sl.jpg');
                                        lib.config.image_background = '魔女';
                                        player.removeSkill('qw_yddro_bgm');
                                    },
                                },
                                hp: {
                                    trigger: {
                                        global: 'gameStart',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return game.hasPlayer(function (current) {
                                            return current.name == 'qw_monv' && current == game.boss;
                                        });
                                    },
                                    content() {
                                        for (var a of game.players) {
                                            if (a.name != 'qw_monv' && a.name != 'qw_zsro' && a.name != 'qw_npro') {
                                                a.maxHp = a.maxHp * 2;
                                                a.hp = a.hp * 2;
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        qw_zzys: {
                            enable: 'phaseUse',
                            selectCard: [2, 3],
                            filterCard(card) {
                                return get.type(card) == 'qw_fm';
                            },
                            ai: {
                                order: 11,
                                result: {
                                    player: 1,
                                },
                                effect: {
                                    player(card, player) {
                                        if (card.name == 'qw_yaoshui') {
                                            if (card.storage.qw_hffm > 0 || card.storage.qw_ryh > 0 || card.storage.qw_gangzhen > 0) {
                                                return 1;
                                            }
                                        }
                                    },
                                    target(card, player) {
                                        if (card.name == 'qw_yaoshui') {
                                            if (card.storage.qw_hffm > 0 || card.storage.qw_ryh > 0 || card.storage.qw_gangzhen > 0) {
                                                return 1;
                                            }
                                        }
                                        if (card.name == 'qw_yaoshui') {
                                            if (card.storage.qw_hyfm > 0 || card.storage.qw_jdmg > 0 || card.storage.qw_sgfm > 0) {
                                                return -1;
                                            }
                                        }
                                    },
                                },
                            },
                            check(card) {
                                if (_status.event.player.countCards('he', { type: 'qw_fm' }) <= 3) return false;
                                if (get.subtype(ui.selected.card) == 'qw_player') return get.subtype(card) != 'qw_player';
                                else return get.subtype(card) != 'qw_target';
                            },
                            mod: {
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && get.type(card) == 'qw_fm') return false;
                                },
                                ignoredHandcard(card, player) {
                                    if (get.type(card) == 'qw_fm') {
                                        return true;
                                    }
                                },
                            },
                            content() {
                                var ys = game.createCard({ name: 'qw_yaoshui' });
                                var tag = '';
                                var b = '';
                                game.broadcastAll(function (card) {
                                    card.storage.qw_hffm = 0;
                                    card.storage.qw_jlfm = 0;
                                    card.storage.qw_jlfmnum = 0;
                                    card.storage.qw_ylsp = 0;
                                    card.storage.qw_jdmg = 0;
                                    card.storage.qw_ryh = 0;
                                    card.storage.qw_hyfm = 0;
                                    card.storage.qw_sgfm = 0;
                                    card.storage.qw_gangzhen = 0;
                                    card.storage.qw_tszy = 0;
                                }, ys);
                                for (var a = 0; a < cards.length; a++) {
                                    if (a < cards.length - 1) b = '<br>';
                                    else b = '';
                                    if (cards[a].name == 'qw_hffm') {
                                        tag += '回复粉末' + b;
                                        game.broadcastAll(function (card) {
                                            card.storage.qw_hffm++;
                                        }, ys);
                                    }
                                    if (cards[a].name == 'qw_jlfm') {
                                        tag += '精灵粉末' + b;
                                        game.broadcastAll(function (card) {
                                            card.storage.qw_jlfm++;
                                        }, ys);
                                    }
                                    if (cards[a].name == 'qw_ylsp') {
                                        tag += '月亮碎片' + b;
                                        game.broadcastAll(function (card) {
                                            card.storage.qw_ylsp++;
                                        }, ys);
                                    }
                                    if (cards[a].name == 'qw_jdmg') {
                                        tag += '剧毒蘑菇' + b;
                                        game.broadcastAll(function (card) {
                                            card.storage.qw_jdmg++;
                                        }, ys);
                                    }
                                    if (cards[a].name == 'qw_ryh') {
                                        tag += '熔岩花' + b;
                                        game.broadcastAll(function (card) {
                                            card.storage.qw_ryh++;
                                        }, ys);
                                    }
                                    if (cards[a].name == 'qw_hyfm') {
                                        tag += '火焰粉末' + b;
                                        game.broadcastAll(function (card) {
                                            card.storage.qw_hyfm++;
                                        }, ys);
                                    }
                                    if (cards[a].name == 'qw_sgfm') {
                                        tag += '闪光粉末' + b;
                                        game.broadcastAll(function (card) {
                                            card.storage.qw_sgfm++;
                                        }, ys);
                                    }
                                    if (cards[a].name == 'qw_gangzhen') {
                                        tag += '钢针' + b;
                                        game.broadcastAll(function (card) {
                                            card.storage.qw_gangzhen++;
                                        }, ys);
                                    }
                                    if (cards[a].name == 'qw_tszy') {
                                        tag += '天使之羽' + b;
                                        game.broadcastAll(function (card) {
                                            card.storage.qw_tszy++;
                                        }, ys);
                                    }
                                }
                                player.gain(ys).gaintag.add(tag);
                            },
                            group: 'qw_zzys_skill',
                            subSkill: {
                                skill: {
                                    trigger: {
                                        player: 'phaseDrawAfter',
                                    },
                                    forced: true,
                                    content() {
                                        for (var a = 0; a < 2; a++) {
                                            player.gain(game.createCard(['qw_ryh', 'qw_sgfm', 'qw_tszy', 'qw_hyfm', 'qw_jdmg', 'qw_jlfm', 'qw_ylsp', 'qw_gangzhen', 'qw_hffm'].randomGet()));
                                        }
                                    },
                                },
                            },
                        },
                        qw_xzpz: {
                            trigger: {
                                player: 'recoverBegin',
                            },
                            filter(event, player) {
                                return player.hp > 0;
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                                player.changeHujia(trigger.num);
                            },
                            mod: {
                                maxHandcardBase(player, num) {
                                    return player.hp + player.hujia;
                                },
                            },
                        },
                        qw_juedou: {
                            enable: ['chooseToUse'],
                            viewAs: {
                                name: 'juedou',
                            },
                            usable: 1,
                            filterCard() {
                                return true;
                            },
                            viewAsFilter(player) {
                                return true;
                            },
                            selectCard: 1,
                            prompt: '将一张牌视为决斗使用',
                            ai: {
                                order() {
                                    return 11;
                                },
                                result: {
                                    player: 1,
                                    target: -1,
                                },
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
                                tag: {
                                    respond: 2,
                                    respondSha: 2,
                                    damage: 1,
                                },
                            },
                            group: ['qw_juedou_update'],
                            subSkill: {
                                update: {
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card.name == 'juedou' && event.skill == 'qw_juedou' && (event.targets[0].hp == event.targets[0].maxHp || event.targets[0].hp == 1);
                                    },
                                    content() {
                                        player.getStat().skill.qw_juedou--;
                                    },
                                },
                            },
                        },
                        qw_cjzd: {
                            trigger: {
                                source: 'damageBefore',
                            },
                            check(event, player) {
                                return player.hujia % 2 == 1 || player.hujia == 1;
                            },
                            prompt() {
                                var player = _status.event.player;
                                return '「惩戒之盾」:是否失去所有护甲令此伤害+' + Math.ceil(player.hujia / 2) + '.';
                            },
                            filter(event, player) {
                                return player.hujia > 0;
                            },
                            content() {
                                trigger.num += Math.ceil(player.hujia / 2);
                                player.changeHujia(-player.hujia);
                            },
                        },
                        qw_hdcn: {
                            init(player) {
                                player.storage.qw_hdcn = 0;
                            },
                            enable: 'phaseUse',
                            ai: {
                                order: 11,
                                result: {
                                    player: 1,
                                },
                            },
                            prompt: '是否发动「护盾充能」',
                            content() {
                                player.addSkill('qw_hdcn_skill');
                                player.removeSkill('qw_hdcn');
                            },
                            subSkill: {
                                skill: {
                                    trigger: {
                                        global: ['recoverAfter'],
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.name == 'recover') return event.player != player;
                                        return true;
                                    },
                                    content() {
                                        if (event.triggername == 'recoverAfter') player.changeHujia();
                                        else player.storage.qw_hdcn++;
                                        if (player.storage.qw_hdcn == 2) player.removeSkill('qw_hdcn_skill');
                                    },
                                },
                            },
                        },
                        qw_jihuo: {
                            trigger: {
                                player: 'useCardToTargeted',
                            },
                            markimage: 'extension/超时空方舟/image/qw_jihuo.jpg',
                            forced: true,
                            intro: {
                                name: '集火',
                                content: '<div style="color:red;">已成为集火目标</div><br>受到除西尔弗斯坦以外角色的伤害后,西尔弗斯坦将对其使用一张杀',
                            },
                            filter(event, player) {
                                return event.targets.length == 1 && event.targets[0] != player && !event.target.hasMark('qw_jihuo');
                            },
                            content() {
                                'step 0';
                                event.num = 0;
                                ('step 1');
                                for (var i of game.filterPlayer()) {
                                    if (i.hasMark('qw_jihuo')) {
                                        event.num = i.countMark('qw_jihuo');
                                        i.removeMark('qw_jihuo', event.num);
                                    }
                                }
                                ('step 2');
                                trigger.target.addMark('qw_jihuo', 1);
                            },
                            group: 'qw_jihuo_skill',
                            subSkill: {
                                skill: {
                                    trigger: {
                                        global: 'damageAfter',
                                    },
                                    prompt: '是否对集火目标使用一张杀',
                                    filter(event, player) {
                                        return event.player.hasMark('qw_jihuo') && event.source != player;
                                    },
                                    content() {
                                        player.useCard({ name: 'sha' }, trigger.player, false);
                                    },
                                },
                            },
                        },
                        _jihuo: {
                            mod: {
                                targetInRange(card, player, target, now) {
                                    if (target && target.hasMark('qw_jihuo')) return true;
                                },
                            },
                        },
                        qw_qxjt: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.storage.qw_qxjt_jssj = 0;
                                player.chooseControl('霰弹枪射击', '狙击', '急速射击').set('ai', function () {
                                    return 0;
                                });
                                ('step 1');
                                if (result.control == '霰弹枪射击') player.addTempSkill('qw_qxjt_xdqsj', { player: 'phaseBegin' });
                                if (result.control == '狙击') player.addTempSkill('qw_qxjt_juji', { player: 'phaseBegin' });
                                if (result.control == '急速射击') player.addTempSkill('qw_qxjt_jssj', { player: 'phaseBegin' });
                            },
                            subSkill: {
                                xdqsj: {
                                    trigger: {
                                        player: ['shaBegin'],
                                    },
                                    filter(event, player) {
                                        return event.parent.parent.name != 'qw_qxjt_xdqsj' && event.target == event.targets[0];
                                    },
                                    content() {
                                        for (var a of game.filterPlayer()) {
                                            if (get.distance(trigger.targets[0], a) == 1) {
                                                if (a != player) {
                                                    trigger.parent.targets.add(a)._triggered = null;
                                                    trigger.parent.triggeredTargets3.add(a)._triggered = null;
                                                }
                                            }
                                        }
                                    },
                                },
                                juji: {
                                    trigger: {
                                        player: ['shaBegin'],
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.chooseToDiscard('h').set('ai', function (card) {
                                            return 8 - get.value(card);
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            trigger.directHit = true;
                                            trigger.baseDamage++;
                                        }
                                    },
                                },
                                jssj: {
                                    init(player) {
                                        player.storage.qw_qxjt_jssj = 0;
                                    },
                                    trigger: {
                                        player: ['shaBegin'],
                                    },
                                    prompt() {
                                        var player = _status.event.player;
                                        return '是否发动「急速射击」<br>弃置' + player.storage.qw_qxjt_jssj + '张牌,对目标使用一张杀.';
                                    },
                                    content() {
                                        'step 0';
                                        if (player.storage.qw_qxjt_jssj != 0) player.chooseToDiscard(player.storage.qw_qxjt_jssj, 'h');
                                        ('step 1');
                                        if (result.bool || player.storage.qw_qxjt_jssj == 0) {
                                            player.storage.qw_qxjt_jssj++;
                                            player.useCard(trigger.card, trigger.target);
                                        }
                                    },
                                },
                            },
                        },
                        qw_shijian: {
                            group: 'qw_shijian_skill1',
                            subSkill: {
                                skill1: {
                                    trigger: {
                                        player: 'phaseBefore',
                                    },
                                    filter(event, player) {
                                        return player.hp == 1;
                                    },
                                    content() {
                                        'step 0';
                                        if (!_status.characterlist) {
                                            lib.skill.pingjian.initList();
                                        }
                                        event.hp = 1 - player.hp;
                                        if (_status.characterlist.includes('qw_luxi1')) {
                                            if (player.name1 == 'qw_luxi' || player.name2 == 'qw_luxi') event._result = { control: 'qw_luxi' };
                                            else if (player.name2 != undefined) {
                                                player.chooseControl(player.name1, player.name2).set('prompt', '请选择要更换的武将牌');
                                            } else event._result = { control: player.name1 };
                                            hp += 2;
                                            _status.characterlist.remove('qw_luxi1');
                                            _status.characterlist.add('qw_luxi');
                                            player.reinit('qw_luxi', 'qw_luxi1', false);
                                        } else {
                                            player.say('嗯？');
                                            event.goto(2);
                                        }
                                        ('step 1');
                                        event.hp += 3;
                                        var name = result.control;
                                        _status.characterlist.remove('qw_luxi1');
                                        _status.characterlist.add(name);
                                        player.reinit(name, 'qw_luxi1', false);
                                        ('step 2');
                                        var hp = event.hp;
                                        if (hp > 0) player.recover(hp);
                                        player.removeSkill('qw_shijian');
                                    },
                                },
                            },
                        },
                        _czdbb: {
                            trigger: {
                                global: 'gainAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                for (var a of event.player.getCards('h')) {
                                    if (a.name == 'qw_czdbb') {
                                        var c = 0;
                                        for (var b of event.getg(player)) {
                                            if (b.name == 'qw_czdbb') c++;
                                        }
                                        return c == 0;
                                    }
                                }
                            },
                            content() {
                                player.lose(trigger.cards, ui.discardPile)._triggered = null;
                            },
                        },
                        qw_gdhx: {
                            init(player) {
                                player.storage.qw_gdhx = 0;
                                player.storage.qw_gdhx1 = 0;
                            },
                            trigger: {
                                player: 'loseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                var evt = event.getl(player);
                                return evt && evt.cards2 && evt.cards2.length;
                            },
                            content() {
                                var a = player.storage.qw_gdhx;
                                player.storage.qw_gdhx = a + trigger.num;
                                var c = player.storage.qw_gdhx1;
                                for (var b = 0; b < Math.floor(player.storage.qw_gdhx / 4) - Math.floor(a / 4); b++) {
                                    player.draw(2);
                                    player.storage.qw_gdhx1++;
                                }
                                if (player.storage.qw_gdhx1 % 2 == 0 && c != player.storage.qw_gdhx1 && !player.isTurnedOver()) player.turnOver();
                            },
                        },
                        qw_xszy: {
                            trigger: {
                                source: 'damageBefore',
                            },
                            forced: true,
                            content() {
                                trigger.num = trigger.num + 4;
                            },
                            group: 'qw_xszy_xljc',
                            subSkill: {
                                xljc: {
                                    trigger: {
                                        source: 'damageBefore',
                                    },
                                    forced: true,
                                    lastDo: true,
                                    forced: true,
                                    content() {
                                        trigger.num = trigger.num - 3;
                                    },
                                },
                            },
                        },
                        qw_szzq: {
                            trigger: {
                                player: ['damageAfter', 'loseHpAfter'],
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                            group: 'qw_szzq_jplj',
                            subSkill: {
                                jplj: {
                                    trigger: {
                                        global: 'gameStart',
                                    },
                                    forced: true,
                                    content() {
                                        player.loseHp(Math.floor((player.hp * 3) / 4));
                                    },
                                },
                            },
                        },
                        qw_zmyd: {
                            enable: ['chooseToUse', 'chooseToRespond'],
                            viewAs: {
                                name: 'shan',
                            },
                            usable: 1,
                            filterCard() {
                                return false;
                            },
                            viewAsFilter(player) {
                                return true;
                            },
                            selectCard: -1,
                            prompt: '视为使用一张闪',
                            ai: {
                                order() {
                                    return 11;
                                },
                                respondShan: true,
                                basic: {
                                    useful: [7, 5.1, 2],
                                    value: [7, 5.1, 2],
                                },
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        qw_ssjx: {
                            nobracket: true,
                            init(player) {
                                player.storage.qw_ssjx = 0;
                                player.storage.位置1 = player.style.transform;
                                player.storage.位置2 = player.style.zIndex;
                                player.storage.位置3 = player.node.avatar.offsetWidth;
                                player.storage.位置4 = player.node.avatar.offsetHeight;
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            selectCard: 4,
                            selectTarget: 1,
                            filterCard: true,
                            ai: {
                                order: 2,
                                result: {
                                    player: 1,
                                    target: -3,
                                },
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            prompt: '<div style="display:inline; font-family: xingkai, xinwei;margin: auto;text-align: left;left: 130px"data-nature="thunder">「生死就在一瞬间」</div>',
                            content() {
                                player.useCard({ name: 'sha' }, target, false);
                            },
                            group: ['qw_ssjx_num', 'qw_ssjx_add'],
                            subSkill: {
                                num: {
                                    forced: true,
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return player != event.player && event.getParent(3).name == 'qw_ssjx';
                                    },
                                    content() {
                                        'step 0';
                                        game.broadcastAll(
                                            function (player, target, trigger) {
                                                var a = [1, 2, 3, 4].randomGet();
                                                if (!_status.connectMode && a <= 1 + player.storage.qw_ssjx) {
                                                    game.pause(); // 暂停游戏
                                                    // 获取相关元素的位置和大小信息
                                                    trigger.num = 4;
                                                    var b = target.offsetTop; // 被攻击目标的上边缘到文档顶部的距离
                                                    var c = player.offsetTop; // 攻击者的上边缘到文档顶部的距离
                                                    var d = player.offsetHeight; // 攻击者的高度
                                                    var e = target.offsetLeft; // 被攻击目标的左边缘到文档左侧的距离
                                                    var f = player.offsetLeft; // 攻击者的左边缘到文档左侧的距离
                                                    var g = target.offsetWidth; // 被攻击者的宽度
                                                    var a = null;
                                                    //var z = player.style.zIndex; // 攻击者的层级管理属性
                                                    // 计算并设置攻击者的位置和方向
                                                    player.node.avatar.style.zIndex = 99;
                                                    player.node.avatar.style.width = '150px';
                                                    player.node.avatar.style.height = '150px';
                                                    if (window.innerWidth - e - g > g && e > g) {
                                                        a = ['左', '右'].randomGet();
                                                        if (a == '左') {
                                                            player.node.avatar.setBackgroundImage('extension/超时空方舟/image/lz_ssjx3.jpg');
                                                            player.node.avatar.style.transform = 'translateY(' + (b - c) + 'px)';
                                                            player.node.avatar.style.transform += 'translateX(' + (e - f - g - 5) + 'px)';
                                                        }
                                                        if (a == '右') {
                                                            player.node.avatar.setBackgroundImage('extension/超时空方舟/image/lz_ssjx1.jpg');
                                                            player.node.avatar.style.transform = 'translateY(' + (b - c) + 'px)';
                                                            player.node.avatar.style.transform += 'translateX(' + (e - f + g + 5) + 'px)';
                                                        }
                                                    } else {
                                                        if (window.innerHeight / 2 - b - d / 2 > 0) {
                                                            // 距离大300或小300
                                                            player.node.avatar.setBackgroundImage('extension/超时空方舟/image/lz_ssjx3.jpg');
                                                            player.node.avatar.style.transform = 'translateY(' + (b - c - d) + 'px)';
                                                            player.node.avatar.style.transform += 'translateX(' + (e - f) + 'px)';
                                                            a = '上';
                                                        } else {
                                                            a = '下';
                                                            player.node.avatar.setBackgroundImage('extension/超时空方舟/image/lz_ssjx3.jpg');
                                                            player.node.avatar.style.transform = 'translateY(' + (b - c + d) + 'px)';
                                                            player.node.avatar.style.transform += 'translateX(' + (e - f) + 'px)';
                                                        }
                                                    }
                                                    // 设置一连串动作
                                                    var n = 0;
                                                    var fl = target.getElementsByClassName('生死界限');
                                                    if (fl[0]) {
                                                        n++;
                                                    }
                                                    if (n == 0) {
                                                        var fj = document.createElement('img');
                                                        fj.src = 'extension/超时空方舟/image/qw_ssjx.jpg';
                                                        fj.style.cssText = 'pointer-events:none';
                                                        fj.style.display = 'block';
                                                        fj.style.position = 'absolute';
                                                        fj.classList.add('生死界限');
                                                        fj.style.top = '20px';
                                                        fj.style.height = '${g}px';
                                                        fj.style.width = '${g}px';
                                                        fj.style.zIndex = '98';
                                                        target.appendChild(fj);
                                                    }
                                                    setTimeout(function () {
                                                        game.playAudio('../extension/超时空方舟/audio/lz_ssjx.mp3');
                                                        if (a == '左') {
                                                            player.node.avatar.setBackgroundImage('extension/超时空方舟/image/lz_ssjx4.jpg');
                                                            player.node.avatar.style.transform = 'translateY(' + (b - c) + 'px)';
                                                            player.node.avatar.style.transform += 'translateX(' + (e - f + g + 10) + 'px)';
                                                        }
                                                        if (a == '右') {
                                                            player.node.avatar.setBackgroundImage('extension/超时空方舟/image/lz_ssjx2.jpg');
                                                            player.node.avatar.style.transform = 'translateY(' + (b - c) + 'px)';
                                                            player.node.avatar.style.transform += 'translateX(' + (e - f - g - 10) + 'px)';
                                                        }
                                                        if (a == '上') {
                                                            player.node.avatar.setBackgroundImage('extension/超时空方舟/image/lz_ssjx4.jpg');
                                                            player.node.avatar.style.transform = 'translateY(' + (b - c + d) + 'px)';
                                                            player.node.avatar.style.transform += 'translateX(' + (e - f) + 'px)';
                                                        }
                                                        if (a == '下') {
                                                            player.node.avatar.setBackgroundImage('extension/超时空方舟/image/lz_ssjx4.jpg');
                                                            player.node.avatar.style.transform = 'translateY(' + (b - c - d) + 'px)';
                                                            player.node.avatar.style.transform += 'translateX(' + (e - f) + 'px)';
                                                        }
                                                        setTimeout(function () {
                                                            var fl1 = target.getElementsByClassName('生死界限');
                                                            if (fl1[0]) {
                                                                fl1[0].parentNode.removeChild(fl1[0]);
                                                            }
                                                            var fj2 = document.createElement('img');
                                                            fj2.src = 'extension/超时空方舟/image/qw_ssjx1.jpg';
                                                            fj2.style.cssText = 'pointer-events:none';
                                                            fj2.style.display = 'block';
                                                            fj2.style.position = 'absolute';
                                                            fj2.classList.add('生死界限1');
                                                            fj2.style.top = '20px';
                                                            fj2.style.height = '${g}px';
                                                            fj2.style.width = '${g}px';
                                                            fj2.style.zIndex = '98';
                                                            target.appendChild(fj2);
                                                        }, 100);
                                                        setTimeout(function () {
                                                            var fl3 = target.getElementsByClassName('生死界限1');
                                                            if (fl3[0]) {
                                                                fl3[0].parentNode.removeChild(fl3[0]);
                                                            }
                                                            game.resume(); // 回复游戏
                                                        }, 1200);
                                                        setTimeout(function () {
                                                            player.node.avatar.style.transform = player.storage.位置1;
                                                            player.node.avatar.style.zIndex = player.storage.位置2;
                                                            player.node.avatar.setBackgroundImage('extension/超时空方舟/image/qw_liuzhen.jpg');
                                                            player.node.avatar.style.width = '${player.storage.位置3}px';
                                                            player.node.avatar.style.height = '${player.storage.位置4}px';
                                                        }, 1600);
                                                    }, 1200);
                                                } else if (a <= 1 + player.storage.qw_ssjx) {
                                                    trigger.num = 4;
                                                }
                                            },
                                            player,
                                            trigger.player,
                                            trigger
                                        );
                                    },
                                },
                                add: {
                                    trigger: {
                                        player: 'dyingAfter',
                                    },
                                    forced: true,
                                    content() {
                                        player.storage.qw_ssjx++;
                                    },
                                },
                            },
                        },
                        qw_mf: {
                            trigger: {
                                player: 'useCard1',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.cards.length == 1 && get.subtype(event.cards[0]) != 'lucy' && get.subtype(event.cards[0]) != 'qw_zuzhou' && event.cards[0].name != 'qw_szzdb';
                            },
                            content() {
                                trigger.card.yingbian = true;
                                var list = [];
                                lib.yingbian.effect.forEach((value) => {
                                    list.push(value);
                                });
                                list.pop();
                                for (var a = 0; a < 2; a++) {
                                    var b = list.randomGet();
                                    list.splice(list.indexOf(b), 1);
                                    game.yingbianEffect(trigger, b);
                                }
                                player.addTempSkill('yingbian_changeTarget');
                            },
                        },
                        qw_choupai: {
                            trigger: {
                                player: ['phaseDrawAfter', 'damageAfter'],
                            },
                            forced: true,
                            content() {
                                var list = ['qw_diaoyu', 'qw_reshen', 'qw_zrfwmf', 'qw_shualai', 'qw_zonggong', 'qw_jiasu', 'qw_tiyi', 'qw_ahxt', 'qw_jsmfz', 'qw_knx', 'qw_czdbb', 'qw_szzdb', 'qw_zsgb', 'qw_mingxiang'];
                                // 'qw_diaoyu', 'qw_reshen', 'qw_zrfwmf', 'qw_shualai', 'qw_zonggong', 'qw_jiasu', 'qw_tiyi', 'qw_ahxt', 'qw_jsmfz', 'qw_knx', 'qw_czdbb', 'qw_szzdb','qw_zsgb','qw_mingxiang'
                                var card = game.createCard(list.randomGet());
                                player.gain(card);
                            },
                        },
                        watch: {
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                for (var a of event.player.getCards('e')) {
                                    if (a.name == 'qw_szzdb') return true;
                                }
                            },
                            forced: true,
                            content() {
                                _status.currentPhase.storage.ark_watch1 = 1;
                                _status.currentPhase.storage.ark_watch2 = 2;
                                _status.currentPhase.storage.ark_watch = setInterval(function () {
                                    if (_status.currentPhase.storage.ark_watch1) {
                                        _status.currentPhase.storage.ark_watch1++;
                                        if (_status.currentPhase.storage.ark_watch1 >= 25) {
                                            var n = _status.currentPhase;
                                            for (var a of _status.currentPhase.getCards('e')) {
                                                if (a.name == 'qw_szzdb') {
                                                    var evt = _status.event.getParent('phaseUse');
                                                    if (evt && evt.name == 'phaseUse') {
                                                        evt.skipped = true;
                                                        event.finish();
                                                    }
                                                }
                                            }
                                            delete n.storage.ark_watch1;
                                            clearInterval(n.storage.ark_watch);
                                            delete n.storage.ark_watch;
                                            delete n.storage.ark_watch2;
                                        }
                                    } else {
                                        for (var i of game.players) {
                                            if (i.storage.ark_watch1) {
                                                delete i.storage.ark_watch1;
                                                clearInterval(i.storage.ark_watch);
                                                delete i.storage.ark_watch;
                                                delete i.storage.ark_watch2;
                                            }
                                        }
                                    }
                                }, 200);
                            },
                        },
                        watch1: {
                            trigger: {
                                global: ['chooseToUseBegin', 'chooseToRespondBegin'],
                            },
                            filter(event, player) {
                                if (!_status.currentPhase || player != _status.currentPhase) return false;
                                for (var a of event.player.getCards('e')) {
                                    if (a.name == 'qw_szzdb' && event.player == _status.currentPhase) return false;
                                }
                                for (var a of _status.currentPhase.getCards('e')) {
                                    if (a.name == 'qw_szzdb') {
                                        return true;
                                    }
                                }
                            },
                            forced: true,
                            content() {
                                if (!player.storage.ark_watch2 || player.storage.ark_watch2 == 2) {
                                    clearInterval(player.storage.ark_watch);
                                    player.storage.ark_watch2 = 1;
                                }
                            },
                        },
                        watch2: {
                            trigger: {
                                player: ['chooseToUseBegin', 'chooseToRespondBegin'],
                            },
                            filter(event, player) {
                                if (!_status.currentPhase || player != _status.currentPhase) return false;
                                for (var a of event.player.getCards('e')) {
                                    if (a.name == 'qw_szzdb' && event.player == _status.currentPhase) return true;
                                }
                            },
                            forced: true,
                            content() {
                                if (player.storage.ark_watch2 && player.storage.ark_watch2 == 1) {
                                    player.storage.ark_watch2 = 2;
                                    _status.currentPhase.storage.ark_watch = setInterval(function () {
                                        if (_status.currentPhase.storage.ark_watch1) {
                                            _status.currentPhase.storage.ark_watch1++;
                                            if (_status.currentPhase.storage.ark_watch1 >= 25) {
                                                var n = _status.currentPhase;
                                                for (var a of _status.currentPhase.getCards('e')) {
                                                    if (a.name == 'qw_szzdb') {
                                                        var evt = _status.event.getParent('phaseUse');
                                                        if (evt && evt.name == 'phaseUse') {
                                                            evt.skipped = true;
                                                            event.finish();
                                                        }
                                                    }
                                                }
                                                delete n.storage.ark_watch1;
                                                clearInterval(n.storage.ark_watch);
                                                delete n.storage.ark_watch;
                                                delete n.storage.ark_watch2;
                                            }
                                        } else {
                                            for (var i of game.players) {
                                                if (i.storage.ark_watch1) {
                                                    delete i.storage.ark_watch1;
                                                    clearInterval(i.storage.ark_watch);
                                                    delete i.storage.ark_watch;
                                                    delete i.storage.ark_watch2;
                                                }
                                            }
                                        }
                                    }, 200);
                                }
                            },
                        },
                        _speed: {
                            trigger: {
                                player: 'useCardBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                var c = 0;
                                for (var b of event.player.getCards('h')) {
                                    if (b.name == 'qw_jsmfz') c = 1;
                                }
                                for (var a = 0; a < event.player.getCards('h').length; a++) {
                                    if (event.player.getCards('h')[a] == event.cards[0] && c == 1) {
                                        if (a == event.player.getCards('h').length - 1 && event.player.getCards('h')[a - 1].name == 'qw_jsmfz') {
                                            return true;
                                        } else if (a == 0 && event.player.getCards('h')[1].name == 'qw_jsmfz') {
                                            return true;
                                        } else if (event.player.getCards('h')[a - 1] && event.player.getCards('h')[a + 1]) {
                                            if (event.player.getCards('h')[a - 1].name == 'qw_jsmfz' || event.player.getCards('h')[a + 1].name == 'qw_jsmfz') {
                                                return true;
                                            }
                                        }
                                    }
                                }
                            },
                            content() {
                                /*game.log(1)
                                for(var a=0;a<target.getCards('h').length;a++){
                                    if(trigger.player.getCards('h')[a]==trigger.cards[0]){
                                         if(a==trigger.player.getCards('h').length-1){
                                            game.log(trigger.player.getCards('h')[a-1].name)
                                        }
                                        else if(a==0){
                                            game.log(trigger.player.getCards('h')[1].name)
                                        }
                                  }
                              }*/
                                trigger.addCount = false;
                            },
                            mod: {
                                targetInRange(card, player, target, now) {
                                    var c = 0;
                                    for (var b of player.getCards('h')) {
                                        if (b.name == 'qw_jsmfz') c = 1;
                                    }
                                    for (var a = 0; a < player.getCards('h').length; a++) {
                                        if (player.getCards('h')[a] == card && c == 1) {
                                            if (a == player.getCards('h').length - 1 && player.getCards('h')[a - 1].name == 'qw_jsmfz') {
                                                return true;
                                            } else if (a == 0 && player.getCards('h')[1].name == 'qw_jsmfz') {
                                                return true;
                                            } else if (player.getCards('h')[a - 1] && player.getCards('h')[a + 1]) {
                                                if (player.getCards('h')[a - 1].name == 'qw_jsmfz' || player.getCards('h')[a + 1].name == 'qw_jsmfz') {
                                                    return true;
                                                }
                                            }
                                        }
                                    }
                                },
                            },
                        },
                        qw_jiasuSkill: {
                            mod: {
                                cardUsable(card, player, num) {
                                    return Infinity;
                                },
                            },
                        },
                        qw_yy: {
                            enable: 'phaseUse',
                            filterCard: true,
                            selectCard: [1, 2],
                            discard: false,
                            lose: false,
                            delay: 0,
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            check(card) {
                                if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') return 0;
                                if (!ui.selected.cards.length && card.name == 'du') return 20;
                                var player = get.owner(card);
                                var num = 0;
                                var evt2 = _status.event.parent;
                                var num = 0;
                                player.getHistory('lose', function (evt) {
                                    if (evt.parent.skill == 'rende' && evt.getParent(3) == evt2) num += evt.cards.length;
                                });
                                if (player.hp == player.maxHp || num > 1 || player.countCards('h') <= 1) {
                                    if (ui.selected.cards.length) {
                                        return -1;
                                    }
                                    var players = game.filterPlayer();
                                    for (var i = 0; i < players.length; i++) {
                                        if (players[i].hasSkill('haoshi') && !players[i].isTurnedOver() && !players[i].hasJudge('lebu') && get.attitude(player, players[i]) >= 3 && get.attitude(players[i], player) >= 3) {
                                            return get.value(card);
                                        }
                                    }
                                    if (player.countCards('h') > player.hp) return get.value(card);
                                    if (player.countCards('h') > 2) return get.value(card);
                                    return -1;
                                }
                                if (get.subtype(card) == 'lucy') return 20;
                                return get.value(card);
                            },
                            content() {
                                player.give(cards, target);
                            },
                            ai: {
                                order(skill, player) {
                                    return 20;
                                },
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('nogain')) return 0;
                                        if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                                            if (target.hasSkillTag('nodu')) return 0;
                                            return -10;
                                        }
                                        if (target.hasJudge('lebu')) return 0;
                                        var nh = target.countCards('h');
                                        var np = player.countCards('h');
                                        if (player.hp == player.maxHp || player.storage.rende < 0 || player.countCards('h') <= 1) {
                                            if (nh >= np - 1 && np <= player.hp && !target.hasSkill('haoshi')) return 0;
                                        }
                                        return Math.max(1, 5 - nh);
                                    },
                                },
                                effect: {
                                    target(card, player, target) {
                                        if (player == target && get.type(card) == 'equip') {
                                            if (player.countCards('e', { subtype: get.subtype(card) })) {
                                                var players = game.filterPlayer();
                                                for (var i = 0; i < players.length; i++) {
                                                    if (players[i] != player && get.attitude(player, players[i]) > 0) {
                                                        return 0;
                                                    }
                                                }
                                            }
                                        }
                                    },
                                },
                                threaten: 0.8,
                            },
                        },
                        qw_ahxtSkill: {
                            trigger: {
                                source: 'damageAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.parent.name != 'qw_ahxtSkill';
                            },
                            content() {
                                for (var a of game.filterPlayer()) {
                                    a.damage(1);
                                }
                            },
                        },
                        qw_jiasuSkill: {
                            mod: {
                                cardUsable(card, player, num) {
                                    return Infinity;
                                },
                                targetInRange(card, player, target, now) {
                                    return true;
                                },
                            },
                        },
                        qw_xyfb: {
                            trigger: {
                                global: 'recoverBefore',
                            },
                            filter(event, player) {
                                return event.source == player && event.player != player && player.getEquip(1);
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) < 0;
                            },
                            prompt: '是否取消回复改为造成等量伤害',
                            content() {
                                trigger.cancel();
                                trigger.player.damage(trigger.num, player);
                            },
                            group: 'qw_xyfb_sub',
                            subSkill: {
                                sub: {
                                    trigger: {
                                        source: 'damageBefore',
                                    },
                                    filter(event, player) {
                                        return !player.getEquip(1);
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) > 0; //QQQ
                                    },
                                    prompt: '是否取消此伤害改为令其回复等量体力',
                                    content() {
                                        trigger.cancel();
                                        trigger.player.recover(trigger.num);
                                    },
                                },
                            },
                        },
                        qw_sdcf: {
                            filterTarget(card, player, target) {
                                if (player.hasSkill('qw_sdcf') && target.hp < target.maxHp) return true;
                                else return target == player && target.hp < target.maxHp;
                            },
                            init(player) {
                                lib.card['tao'].filterTarget = lib.skill['qw_sdcf'].filterTarget;
                            },
                            mod: {
                                cardname(card, player, name) {
                                    if (card.suit == 'heart') return 'tao';
                                },
                                selectTarget(card, player, range) {
                                    if (player.hasSkill('qw_sdcf') && card.name == 'tao') range[1] = [1, 1];
                                },
                                cardEnabled(card, player, targer) {
                                    if (player.hasSkill('qw_sdcf') && card.name == 'tao') return true;
                                },
                                targetEnabled(card, player, target, now) {
                                    if (player.hasSkill('qw_sdcf') && target != player && card.name == 'tao') {
                                        return true;
                                    }
                                },
                            },
                        },
                        qw_ceshi: {
                            filterTarget(card, player, target) {
                                if (player.hasSkill('qw_sdcf') && target.hp < target.maxHp) return true;
                            },
                            init(player) {
                                lib.card['tao'].filterTarget = lib.skill['qw_ceshi'].filterTarget;
                            },
                        },
                        qw_yujian: {
                            trigger: {
                                player: 'drawBefore',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (trigger.num <= 1) trigger.cancel();
                                else {
                                    trigger.num = trigger.num - 1;
                                    event.finish();
                                }
                                ('step 1');
                                var list = [];
                                for (var a = 0; a < Math.min(3, ui.cardPile.childNodes.length); a++) {
                                    list.push(ui.cardPile.childNodes[a]);
                                }
                                event.list = list;
                                ('step 2');
                                if (!event.list.length) {
                                    event.finish();
                                }
                                if (event.list.length)
                                    player.chooseButton(['【预见】<br>请选择要获得的牌', event.list]).set('ai', function (button) {
                                        var card = button.link;
                                        if (get.type(card) == 'equip' && card.suit != 'heart') return 12;
                                        else if (card.suit == 'heart') return 10;
                                    });
                                ('step 3');
                                if (result.bool) {
                                    player.gain(result.links[0]).gaintag.add('qw_yujian');
                                }
                            },
                            group: ['qw_yujian_sub', 'qw_yujian_use'],
                            subSkill: {
                                use: {
                                    trigger: {
                                        global: 'useCardBegin',
                                    },
                                    filter(event, player) {
                                        var b = 0;
                                        for (var a = 0; a < event.cards.length; a++) {
                                            if (event.cards[a].hasGaintag('qw_yujian')) b++;
                                        }
                                        return b > 0;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        if (get.type(trigger.card) == 'basic') {
                                            trigger.player
                                                .chooseTarget(event.unchosen ? get.prompt('sheyan') : null, '为' + get.translation(trigger.card) + '增加一个目标', function (card, player, target) {
                                                    var trigger = _status.event.getTrigger();
                                                    return !trigger.targets.includes(target) && lib.filter.targetEnabled2(trigger.card, trigger.player, target);
                                                })
                                                .set('ai', function (target) {
                                                    var trigger = _status.event.getTrigger();
                                                    return get.effect(target, trigger.card, trigger.player, _status.event.player);
                                                });
                                        } else if (get.type(trigger.card) == 'trick') {
                                            var card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number, trigger.card.nature);
                                            trigger.player.useCard(card, (trigger._targets || trigger.targets).slice(0));
                                        } else trigger.player.draw();
                                        ('step 1');
                                        if (result.bool) {
                                            if (!event.isMine() && !event.isOnline()) game.delayx();
                                            event.target = result.targets[0];
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        trigger.targets.push(event.target);
                                    },
                                },
                                sub: {
                                    trigger: {
                                        player: 'drawAfter',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var list = [];
                                        for (var a = 0; a < Math.min(3, ui.cardPile.childNodes.length); a++) {
                                            list.push(ui.cardPile.childNodes[a]);
                                        }
                                        event.list = list;
                                        ('step 1');
                                        if (!event.list.length) {
                                            event.finish();
                                        }
                                        if (event.list.length) player.chooseButton(['【预见】<br>请选择要获得的牌', event.list]);
                                        ('step 2');
                                        if (result.bool) {
                                            player.gain(result.links[0]).gaintag.add('qw_yujian');
                                        }
                                    },
                                },
                            },
                        },
                        qw_sdqs: {
                            trigger: {
                                global: 'dyingAfter',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (trigger.player.isAlive())
                                    player
                                        .chooseControl(['是', '取消'])
                                        .set('prompt', '是否令其查看牌堆顶的三张牌并获得其中一张')
                                        .set('ai', function () {
                                            if (get.attitude(player, trigger.player) > 0) return 0;
                                            return 1;
                                        });
                                ('step 1');
                                if (result.control == '是') {
                                    var list = [];
                                    for (var a = 0; a < Math.min(3, ui.cardPile.childNodes.length); a++) {
                                        list.push(ui.cardPile.childNodes[a]);
                                    }
                                    event.list = list;
                                } else event.finish();
                                ('step 2');
                                if (!event.list.length) {
                                    event.finish();
                                }
                                if (event.list.length) trigger.player.chooseButton(['【预见】<br>请选择要获得的牌', event.list]);
                                ('step 3');
                                if (result.bool) {
                                    trigger.player.gain(result.links[0]).gaintag.add('qw_yujian');
                                }
                            },
                        },
                        qw_snjsd: {
                            init(player) {
                                if (_status.connectMode) player.removeSkill('qw_snjsd');
                            },
                            trigger: {
                                source: 'damageAfter',
                            },
                            filter(event, player) {
                                return player.getEquip(1);
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard('e', function (card, player, target) {
                                    return get.subtype(card) == 'equip1';
                                });
                                ('step 1');
                                if (result.bool) {
                                    trigger.player.damage(2, player);
                                    player.removeSkill('qw_snjsd');
                                }
                            },
                        },
                        qw_lhcs: {
                            init(player) {
                                player.storage.qw_lhcs_cishu = 0;
                            },
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('「灵魂蚕食」:请选择一到两名角色', [1, 2], function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    });
                                event.num = 0;
                                event.list = [];
                                ('step 1');
                                if (result.targets) {
                                    for (var a = 0; a < result.targets.length; a++) {
                                        event.list.push(result.targets[a]);
                                    }
                                }
                                ('step 2');
                                if (event.list.length) {
                                    if (event.list[event.num].countCards('he')) event.list[event.num].chooseCard('he', true).set('prompt', '将一张手牌或装备牌至武将牌上称之为<蚕食>');
                                    else {
                                        event.list[event.num].addToExpansion([ui.cardPile.childNodes[0], ui.cardPile.childNodes[1]], 'gain2').gaintag.add('qw_cs1');
                                        event.list[event.num].addSkill('qw_cs1');
                                    }
                                }
                                ('step 3');
                                if (event.list.length) {
                                    if (result.bool) {
                                        event.list[event.num].addSkill('qw_cs1');
                                        event.list[event.num].addToExpansion(result.cards[0], 'gain2').gaintag.add('qw_cs1');
                                    }
                                    if (event.num < event.list.length - 1) {
                                        event.num++;
                                        event.goto(2);
                                    }
                                }
                                ('step 4');
                                if (event.list.length) {
                                    var list = [];
                                    var list1 = [];
                                    var num = 0;
                                    for (var x = 0; x < event.num + 1; x++) {
                                        for (var c = 0; c < event.list[x].getExpansions('qw_cs1').length; c++) {
                                            if (!list.includes(get.suit(event.list[x].getExpansions('qw_cs1')[c]))) {
                                                list.push(get.suit(event.list[x].getExpansions('qw_cs1')[c]));
                                            }
                                        }
                                        if (list.length >= event.list[x].hp) {
                                            event.list[x].loseMaxHp();
                                            for (var b = 0; b < event.list[x].getExpansions('qw_cs1').length; b++) {
                                                if (get.suit(event.list[x].getExpansions('qw_cs1')[b]) == list[num]) {
                                                    list1.push(event.list[x].getExpansions('qw_cs1')[b]);
                                                    num++;
                                                    b = 0;
                                                    if (num == list.length) break;
                                                }
                                            }
                                            player.gain(list1);
                                            player.storage.qw_lhcs_cishu++;
                                            if (player.storage.qw_lhcs_cishu % 2 == 0) {
                                                var card = game.createCard('linghunxianglu', 'spade', 1);
                                                player.gain(card);
                                            }
                                        }
                                        list = [];
                                        list1 = [];
                                        num = 0;
                                    }
                                }
                            },
                        },
                        qw_cs1: {
                            intro: {
                                markcount: 'expansion',
                                mark(dialog, storage, player) {
                                    var cards = player.getExpansions('qw_cs1');
                                    dialog.addAuto(cards);
                                },
                            },
                        },
                        qw_hamy: {
                            trigger: {
                                global: 'die',
                            },
                            preHidden: true,
                            filter(event, player) {
                                return event.player.getExpansions('qw_cs1').length;
                            },
                            content() {
                                'step 0';
                                event.togain = trigger.player.getExpansions('qw_cs1');
                                event.list = [];
                                for (var a of game.filterPlayer()) {
                                    if (get.distance(trigger.player, a) == 1) event.list.push(a);
                                }
                                event.num = 0;
                                ('step 1');
                                game.broadcastAll(
                                    function (player, list) {
                                        player
                                            .chooseTarget('黑暗蔓延:请选择一名角色距离为1以内的一名角色继承该角色的<灵魂蚕食>', function (card, player, target) {
                                                return list.includes(target);
                                            })
                                            .set('ai', function (target) {
                                                return -get.attitude(_status.event.player, target);
                                            });
                                    },
                                    player,
                                    event.list
                                );
                                ('step 2');
                                if (result.bool) {
                                    result.targets[0].addToExpansion(event.togain, 'gain2').gaintag.add('qw_cs1');
                                }
                            },
                        },
                        qw_hapz: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            prompt: '是否失去一点体力上限并获得一点护甲',
                            content() {
                                player.loseMaxHp();
                                player.changeHujia();
                            },
                            check(event, player) {
                                if (player.maxHp > player.hp) return true;
                                else return false;
                            },
                            group: 'qw_hapz_damage',
                            subSkill: {
                                damage: {
                                    forced: true,
                                    trigger: {
                                        player: 'damageBegin',
                                    },
                                    filter(event, player) {
                                        return player.hujia > 0;
                                    },
                                    content() {
                                        trigger.source.addSkill('qw_cs1');
                                        if (trigger.source.getCards('he').length) trigger.source.addToExpansion(trigger.source.getCards('he').randomGet(), 'gain2').gaintag.add('qw_cs1');
                                    },
                                },
                            },
                        },
                        qw_lhxl: {},
                        qw_mlh: {
                            init(player) {
                                player.storage.suo = 0;
                            },
                            marktext: '冰',
                            intro: {
                                name: '冰棘',
                                content: '已有#层冰棘',
                            },
                            audio: 'ext:超时空方舟/audio:3',
                            trigger: {
                                player: 'useCardBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.suit == 'spade';
                            },
                            content() { },
                            mod: {
                                cardname(card, player) {
                                    if (card.suit == 'spade') return 'sha';
                                },
                                cardnature(card, player) {
                                    if (card.suit == 'spade') return 'ice';
                                },
                                targetInRange(card, player, target, now) {
                                    if (card.name == 'sha' && card.suit == 'spade') return true;
                                },
                            },
                            group: ['qw_mlh_use', 'qw_mlh_bj', 'qw_mlh_after'],
                            subSkill: {
                                after: {
                                    trigger: {
                                        player: 'phaseAfter',
                                    },
                                    forced: true,
                                    content() {
                                        for (var a of game.filterPlayer()) {
                                            if (a.hasMark('qw_mlh')) {
                                                a.removeMark('qw_mlh', a.countMark('qw_mlh'));
                                                player.draw();
                                            }
                                        }
                                    },
                                },
                                bj: {
                                    multitarget: true,
                                    trigger: {
                                        player: 'useCardToTarget',
                                    },
                                    filter(event, player) {
                                        return player.storage.suo == 0 && event.cards[0].suit == 'spade' && event.card.name == 'sha';
                                    },
                                    forced: true,
                                    content() {
                                        for (var a = 0; a < trigger.targets.length; a++) {
                                            trigger.targets[a].addMark('qw_mlh');
                                        }
                                        player.storage.suo = 1;
                                    },
                                },
                                use: {
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    firstDo: true,
                                    filter(event, player) {
                                        return event.cards[0].suit == 'spade' && event.card.name == 'sha';
                                    },
                                    forced: true,
                                    content() {
                                        player.storage.suo = 0;
                                    },
                                },
                            },
                        },
                        qw_nby: {
                            init(player) {
                                player.storage.qw_nby = [0, 0];
                            },
                            mark: true,
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            intro: {
                                markcount(storage) {
                                    return 0;
                                },
                                mark(dialog, content, player) {
                                    dialog.addText('使用点数为 ' + player.storage.qw_nby[0] + ' 到 ' + player.storage.qw_nby[1] + ' 的牌无次数限制且造成伤害后会引爆冰棘');
                                },
                            },
                            content() {
                                player.storage.qw_nby.push(trigger.cards[0].number);
                                if (player.storage.qw_nby.length > 2) {
                                    player.storage.qw_nby = [player.storage.qw_nby[1], player.storage.qw_nby[2]];
                                }
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    var a = player.storage.qw_nby[0];
                                    var b = player.storage.qw_nby[1];
                                    if ((a >= card.number && card.number >= b) || (b >= card.number && card.number >= a)) return Infinity;
                                },
                            },
                            group: ['qw_nby_boom'],
                            subSkill: {
                                boom: {
                                    trigger: {
                                        source: 'damageAfter',
                                    },
                                    filter(event, player) {
                                        var a = player.storage.qw_nby[0];
                                        var b = player.storage.qw_nby[1];
                                        return event.card && ((a >= event.card.number && event.card.number >= b) || (b >= event.card.number && event.card.number >= a)) && event.player.hasMark('qw_mlh') && event.player.countMark('qw_mlh') > 0; //QQQ
                                    },
                                    forced: true,
                                    content() {
                                        var a = trigger.player.countMark('qw_mlh');
                                        trigger.player.damage(a, 'ice', 'nosource');
                                        if (player.hasSkill('qw_sxyd_mark')) {
                                        } else trigger.player.removeMark('qw_mlh', a);
                                        game.playAudio('../extension/超时空方舟/audio/qw_nby1.mp3');
                                        player.draw();
                                    },
                                },
                            },
                        },
                        qw_sxyd: {
                            init(player) {
                                player.storage.die = 0;
                                player.storage.sxyd = 0;
                            },
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.die == 1;
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard([1, Infinity], 'he').set('prompt', '「朔雪永冻」<br>限定技,你可以重铸任意张牌,本回合<凝冰意>的点数最大值+2,最小值-2.且引爆<冰棘>时不会减少层数');
                                ('step 1');
                                if (result.bool) {
                                    var a = [1, 2].randomGet();
                                    if (a == 1) game.playAudio('../extension/超时空方舟/audio/qw_sxyd1.mp3');
                                    else game.playAudio('../extension/超时空方舟/audio/qw_sxyd2.mp3');
                                    player.draw(result.cards.length);
                                    player.addTempSkill('qw_sxyd_mark');
                                    player.removeSkill('qw_sxyd');
                                }
                            },
                            group: 'qw_sxyd_die',
                            subSkill: {
                                mark: {},
                                die: {
                                    trigger: {
                                        player: 'dyingAfter',
                                    },
                                    forced: true,
                                    content() {
                                        player.storage.die = 1;
                                    },
                                },
                            },
                        },
                        qw_zuzhi: {
                            nobracket: true,
                            trigger: {
                                global: 'useCardToTarget',
                            },
                            filter(event, player) {
                                return event.targets.length == 1 && event.cards.length == 1 && event.targets[0] != event.player && event.player != player && player.countCards('h') > 0 && player.countMark('阻止') < 2;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseCard('h').set('prompt', '是否将一张手牌置武将牌上令此牌延迟结算');
                                ('step 1');
                                if (result.bool) {
                                    player.addMark('阻止');
                                    player.addToExpansion(result.cards[0], 'gain2').gaintag.add('qw_aizb');
                                    var card = trigger.cards[0];
                                    if (!trigger.player.storage.qw_zuzhi) trigger.player.storage.qw_zuzhi = [[], []];
                                    trigger.player.storage.qw_zuzhi[0].push(card);
                                    trigger.player.storage.qw_zuzhi[1].push(trigger.targets[0]);
                                    trigger.targets.remove(trigger.targets[0]);
                                    trigger.parent.triggeredTargets2.remove(trigger.targets[0]);
                                    trigger.untrigger();
                                }
                            },
                            group: ['qw_zuzhi_use', 'qw_zuzhi_jishu', 'qw_zuzhi_add'],
                            subSkill: {
                                add: {
                                    onremove(player, skill) {
                                        var cards = player.getExpansions(skill);
                                        if (cards.length) player.loseToDiscardpile(cards);
                                        delete player.storage[skill];
                                    },
                                    intro: {
                                        markcount(storage) {
                                            if (!storage) return 0;
                                            return storage[0].length;
                                        },
                                        mark(dialog, storage, player) {
                                            if (!storage) return;
                                            dialog.addText('下回合开始时使用的牌');
                                            dialog.addAuto(storage[0]);
                                            dialog.addText(get.translation(storage[1]));
                                        },
                                        onunmark(storage, player) {
                                            player.storage.qw_zuzhi_add = [[], []];
                                        },
                                    },
                                    forced: true,
                                    trigger: {
                                        global: 'phaseUseEnd',
                                    },
                                    filter(event, player) {
                                        return event.player.storage.qw_zuzhi && event.player.storage.qw_zuzhi[0].length;
                                    },
                                    content() {
                                        'step 0';
                                        var a = trigger.player;
                                        if (!a.storage.qw_zuzhi_add) a.storage.qw_zuzhi_add = [[], []];
                                        if (a.storage.qw_zuzhi && a.storage.qw_zuzhi[0].length) {
                                            a.addToExpansion(a.storage.qw_zuzhi[0][0], 'gain2').gaintag.add('qw_zuzhi_add');
                                            a.storage.qw_zuzhi_add[0].push(a.storage.qw_zuzhi[0][0]);
                                            a.storage.qw_zuzhi_add[1].push(a.storage.qw_zuzhi[1][0]);
                                            a.storage.qw_zuzhi[0].splice(0, 1);
                                            a.storage.qw_zuzhi[1].splice(0, 1);
                                        }
                                        ('step 1');
                                        if (trigger.player.storage.qw_zuzhi && trigger.player.storage.qw_zuzhi[0].length) event.goto(0);
                                    },
                                },
                                jishu: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    firstDo: true,
                                    filter(event, player) {
                                        return player.hasMark('阻止');
                                    },
                                    content() {
                                        player.removeMark('阻止', player.countMark('阻止'));
                                    },
                                },
                                use: {
                                    trigger: {
                                        global: 'phaseBegin',
                                    },
                                    filter(event, player) {
                                        return event.player.storage.qw_zuzhi_add && event.player.storage.qw_zuzhi_add[0].length;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        trigger.player.useCard(trigger.player.getExpansions('qw_zuzhi_add')[0], trigger.player.storage.qw_zuzhi_add[1][trigger.player.getExpansions('qw_zuzhi_add').length - 1], false);
                                        trigger.player.storage.qw_zuzhi_add[0].splice(player.getExpansions('qw_zuzhi_add').length - 1, 1);
                                        trigger.player.storage.qw_zuzhi_add[1].splice(player.getExpansions('qw_zuzhi_add').length - 1, 1);
                                        ('step 1');
                                        if (trigger.player.storage.qw_zuzhi_add && trigger.player.storage.qw_zuzhi_add[0].length) event.goto(0);
                                    },
                                },
                            },
                        },
                        qw_aizb: {
                            marktext: '鞭',
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            trigger: {
                                global: 'dying',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player && player.getExpansions('qw_aizb') && player.getExpansions('qw_aizb').length;
                            },
                            content() {
                                'step 0';
                                player.chooseButton(1, ['「爱之鞭」:弃置一张红色牌为其回复一点体力或弃置一张黑色牌令其流失一点体力', player.getExpansions('qw_aizb')]);
                                ('step 1');
                                if (result.bool) {
                                    player.loseToDiscardpile(result.links[0]);
                                    if (get.color(result.links[0]) == 'red') trigger.player.recover();
                                    if (get.color(result.links[0]) == 'black') trigger.player.loseHp();
                                }
                            },
                        },
                        qw_zybh: {
                            trigger: {
                                source: 'damageAfter',
                            },
                            forced: true,
                            firstDo: true,
                            intro: {
                                name: '治愈鞭痕',
                                content: '回复体力时回复量翻倍,回合结束时流失一点体力<br><center>剩余#回合</center>',
                            },
                            marktext: '痕',
                            content() {
                                if (trigger.player.hasMark('qw_zybh') && trigger.player.countMark('qw_zybh') < 2) trigger.player.addMark('qw_zybh');
                                if (!trigger.player.hasMark('qw_zybh')) trigger.player.addMark('qw_zybh', 2);
                            },
                            group: ['qw_zybh_lose', 'qw_zybh_recover', 'qw_zybh_die'],
                            subSkill: {
                                die: {
                                    trigger: {
                                        player: 'dieAfter',
                                    },
                                    forceDie: true,
                                    forced: true,
                                    content() {
                                        for (var j of game.players) {
                                            var cards = j.getExpansions('qw_zuzhi_add');
                                            if (cards.length) j.loseToDiscardpile(cards);
                                        }
                                    },
                                },
                                recover: {
                                    trigger: {
                                        global: 'recoverBegin',
                                    },
                                    filter(event, player) {
                                        return event.player.hasMark('qw_zybh') && event.player.countMark('qw_zybh') > 0;
                                    },
                                    forced: true,
                                    content() {
                                        trigger.num = trigger.num * 2;
                                    },
                                },
                                lose: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.hasMark('qw_zybh') && event.player.countMark('qw_zybh') > 0;
                                    },
                                    content() {
                                        trigger.player.removeMark('qw_zybh');
                                        trigger.player.loseHp();
                                    },
                                },
                            },
                        },
                        qw_hlbybz: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.getExpansions('qw_aizb') && player.getExpansions('qw_aizb').length;
                            },
                            content() {
                                'step 0';
                                player.chooseButton(['「胡萝卜与鞭子」:选择一名角色对另一名角色使用一张杀和决斗', player.getExpansions('qw_aizb')]);
                                ('step 1');
                                if (result.bool) {
                                    player.loseToDiscardpile(result.links[0]);
                                } else event.finish();
                                ('step 2');
                                player.chooseCardTarget({
                                    prompt: '选择一名角色对另一名角色使用一张杀和决斗',
                                    filterTarget(card, player, target) {
                                        if (ui.selected.targets.length) return ui.selected.targets[0].canUse({ name: 'sha' }, target, false) && ui.selected.targets[0].inRange(target);
                                        return target != player;
                                    },
                                    selectTarget: 2,
                                    filterCard: () => false,
                                    selectCard: -1,
                                    targetprompt: ['施暴者', '给我揍他!'],
                                    ai2(target) {
                                        var player = _status.event.player;
                                        if (ui.selected.targets.length == 0) {
                                            if (get.attitude(player, target) <= 0) return 0;
                                            var card = { name: 'sha' };
                                            return target.getUseValue(card, false);
                                        }
                                        return -get.attitude(player, target);
                                    },
                                });
                                ('step 3');
                                if (result.bool) {
                                    player.line2(result.targets);
                                    result.targets[0].damage(1, player);
                                    result.targets[0].useCard({ name: 'sha' }, result.targets[1], false, 'noai');
                                    result.targets[0].useCard({ name: 'juedou' }, result.targets[1], false, 'noai');
                                }
                            },
                            group: 'qw_hlbybz_recover',
                            subSkill: {
                                recover: {
                                    trigger: {
                                        global: 'damageAfter',
                                    },
                                    lastDo: true,
                                    forced: true,
                                    filter(event, player) {
                                        return event.getParent(3).name == 'qw_hlbybz';
                                    },
                                    prompt: '是否令其回复一点体力',
                                    content() {
                                        trigger.source.recover();
                                        player.draw();
                                    },
                                },
                            },
                        },
                        qw_yingzfs: {
                            init(player) {
                                player.storage.qw_yingzfs = 0;
                            },
                            trigger: {
                                player: 'useCardBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.parent.name != 'qw_yingzfs_mark';
                            },
                            content() {
                                if (player.storage.qw_yingzfs < 5 && !player.hasMark('qw_yingzfs_mark')) player.storage.qw_yingzfs++;
                                if (player.storage.qw_yingzfs == 5 && !player.hasMark('qw_yingzfs_mark')) {
                                    player.addMark('qw_yingzfs_mark');
                                }
                            },
                            group: 'qw_yingzfs_mark',
                            subSkill: {
                                mark: {
                                    intro: {
                                        name: '影子分身',
                                        content: '不会成为杀的目标',
                                    },
                                    marktext: '影',
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    check(event, player) {
                                        return player.hp > 2 || (player.hp == 2 && player.countCards('he', 'shan') > 0);
                                    },
                                    filter(event, player) {
                                        var card = game.createCard(event.card.name, event.card.suit, event.card.number, event.card.nature);
                                        var targets = event.targets;
                                        for (var i = 0; i < targets.length; i++) {
                                            if (!targets[i].isIn()) return false;
                                            if (!player.canUse({ name: event.card.name }, targets[i], false, false)) {
                                                return false;
                                            }
                                        }
                                        return player.hasMark('qw_yingzfs_mark') && player.countMark('qw_yingzfs_mark') > 0 && event.card.name != 'wuxie' && get.type(event.card) != 'delay' && get.type(event.card) != 'equip' && event.card.name != 'shan';
                                    },
                                    content() {
                                        'step 0';
                                        player.removeMark('qw_yingzfs_mark', 1);
                                        player.storage.qw_yingzfs = 0;
                                        var card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number, trigger.card.nature);
                                        player.useCard(card, (trigger._targets || trigger.targets).slice(0));
                                    },
                                },
                            },
                        },
                        qw_ys: {
                            usable: 1,
                            trigger: {
                                player: 'useCardAfter',
                            },
                            firstDo: true,
                            filter(event, player) {
                                return event.cards.length == 1 && event.card.suit;
                            },
                            forced: true,
                            content() {
                                player.gain(game.createCard('ying', trigger.card.suit));
                            },
                        },
                        qw_anycx: {
                            trigger: {
                                global: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return (
                                    player.countCards('h') > 0 &&
                                    event.player != player &&
                                    event.player.getHistory('useCard', function (evt) {
                                        return (
                                            evt.isPhaseUsing() &&
                                            ['basic', 'trick'].includes(get.type(evt.card)) &&
                                            player.hasUseTarget({
                                                name: evt.card.name,
                                                nature: evt.card.nature,
                                            })
                                        );
                                    }).length
                                );
                            },
                            content() {
                                'step 0';
                                event.list = [];
                                trigger.player.getHistory('useCard', function (evt) {
                                    if (!evt.isPhaseUsing() || !['basic', 'trick'].includes(get.type(evt.card))) return;
                                    if (evt.card.name == 'sha' && evt.card.nature) event.list.add('sha:' + evt.card.nature);
                                    else event.list.add(evt.card.name);
                                });
                                for (var i = 0; i < event.list.length; i++) {
                                    if (event.list[i].indexOf('sha:') == 0) event.list[i] = ['基本', '', 'sha', event.list[i].slice(4)];
                                    else event.list[i] = [get.type(event.list[i]), '', event.list[i]];
                                }
                                event.list1 = [];
                                for (var a = 0; a < event.list.length; a++) {
                                    if (player.hasUseTarget({ name: event.list[a][2] })) event.list1.push(event.list[a][2]);
                                }
                                if (event.list && event.list.length)
                                    player.chooseToDiscard('h').set('ai', function (card) {
                                        return 8 - get.value(card);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.chooseControl(event.list1).set('ai', function () {
                                        return 0;
                                    });
                                } else event.finish();
                                ('step 2');
                                if (result.control) {
                                    player.chooseUseTarget(true, { name: result.control });
                                }
                            },
                        },
                        qw_cx: {
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                player.chooseToUse({ prompt: '「重现」:你可以使用一张牌' });
                            },
                            group: ['qw_cx_mark', 'qw_cx_update', 'qw_cx_use'],
                            subSkill: {
                                mark: {
                                    init(player) {
                                        player.storage.qw_cs = [];
                                    },
                                    forced: true,
                                    popup: false,
                                    trigger: {
                                        global: 'useCardAfter',
                                    },
                                    content() {
                                        player.storage.qw_cs.push(trigger.card.name);
                                    },
                                },
                                update: {
                                    trigger: {
                                        global: ['phaseAfter', 'phaseBefore'],
                                    },
                                    dierct: true,
                                    popup: false,
                                    forced: true,
                                    content() {
                                        player.storage.qw_cs = [];
                                    },
                                },
                                use: {
                                    hiddenCard(player, name) {
                                        let list = [];
                                        for (var card of player.getCards('h')) {
                                            list.push(card.name);
                                        }
                                        return player.getStorage('qw_cx').includes(name) && list.includes('ying');
                                    },
                                    check(button) {
                                        var player = _status.event.player;
                                        var card = { name: button.link[2], nature: button.link[3] };
                                        if (player.countCards('hes', (cardx) => cardx.name == card.name)) return 0;
                                        return _status.event.parent.type == 'phase' ? player.getUseValue(card) : 1;
                                    },
                                    enable: 'chooseToUse',
                                    filter(event, player) {
                                        if (_status.phase == player) return false;
                                        let list = [];
                                        for (var card of player.getCards('h')) {
                                            list.push(card.name);
                                        }
                                        if (!list.includes('ying')) {
                                            return false;
                                        }
                                        return (
                                            player.countCards('h', (card) =>
                                                lib.inpile.some((name) => {
                                                    if (!player.getStorage('qw_cs') || !player.getStorage('qw_cs').includes(name)) return false;
                                                    if (get.type(name) != 'basic' && get.type(name) != 'trick') return false;
                                                    if (event.filterCard && event.filterCard({ name: name, cards: [card] }, player)) return true;
                                                    if (name == 'sha') {
                                                        for (var nature of lib.inpile_nature) {
                                                            if (event.filterCard && event.filterCard({ name: name, nature: nature, cards: [card] }, player)) return true;
                                                        }
                                                    }
                                                    return false;
                                                })
                                            ) > 0
                                        );
                                    },
                                    chooseButton: {
                                        dialog(event, player) {
                                            var list = [];
                                            for (var name of lib.inpile) {
                                                if (get.type(name) == 'basic' || get.type(name) == 'trick') {
                                                    if (player.getStorage('qw_cs').includes(name)) {
                                                        list.push([get.translation(get.type(name)), '', name]);
                                                        if (name == 'sha') {
                                                            for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
                                                        }
                                                    }
                                                }
                                            }
                                            return ui.create.dialog('重现', [list, 'vcard']);
                                        },
                                        filter(button, player) {
                                            return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                        },
                                        check(button) {
                                            var player = _status.event.player;
                                            var card = { name: button.link[2], nature: button.link[3] };
                                            if (player.countCards('hes', (cardx) => cardx.name == card.name)) return 0;
                                            return _status.event.parent.type == 'phase' ? player.getUseValue(card) : 1;
                                        },
                                        backup(links, player) {
                                            return {
                                                filterCard: true,
                                                popname: true,
                                                check(card) {
                                                    return 7 - get.value(card);
                                                },
                                                position: 'hs',
                                                filterCard(card) {
                                                    return card.name == 'ying';
                                                },
                                                viewAs: { name: links[0][2], nature: links[0][3] },
                                            };
                                        },
                                        prompt(links, player) {
                                            return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                                        },
                                    },
                                    ai: {
                                        save: true,
                                        respondSha: true,
                                        respondShan: true,
                                        skillTagFilter(player, tag, arg) {
                                            if (!player.countCards('hes') || player.hasSkill('taoluan3')) return false;
                                            if (tag == 'respondSha' || tag == 'respondShan') {
                                                if (arg == 'respond') return false;
                                                return !player.getStorage('taoluan').includes(tag == 'respondSha' ? 'sha' : 'shan');
                                            }
                                            return !player.getStorage('taoluan').includes('tao') || (!player.getStorage('taoluan').includes('jiu') && arg == player);
                                        },
                                        order: 4,
                                        result: {
                                            player(player) {
                                                var allshown = true,
                                                    players = game.filterPlayer();
                                                for (var i = 0; i < players.length; i++) {
                                                    if (players[i].ai.shown == 0) {
                                                        allshown = false;
                                                    }
                                                    if (players[i] != player && players[i].countCards('h') && get.attitude(player, players[i]) > 0) {
                                                        return 1;
                                                    }
                                                }
                                                if (allshown) return 1;
                                                return 0;
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        qw_anyz: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.player.isHealthy() && event.getParent(3).name != 'qw_anyz_use'; //QQQ
                            },
                            content() {
                                player.storage.qw_anyz = 1;
                            },
                            group: 'qw_anyz_use',
                            subSkill: {
                                use: {
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    filter(event, player) {
                                        return player.storage.qw_anyz == 1 && event.card.name == 'sha';
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.storage.qw_anyz = 0;
                                        ('step 1');
                                        player
                                            .chooseTarget('请选择一名角色是为对其使用一张无距离限制的杀', function (card, player, target) {
                                                return target != player;
                                            })
                                            .set('ai', function (target) {
                                                var player = _status.event.player;
                                                return -get.attitude(_status.event.player, target);
                                            });
                                        ('step 2');
                                        if (result.targets) player.useCard(trigger.card, result.targets[0], false);
                                    },
                                },
                            },
                        },
                        qw_yzwm: {
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (card.name == 'sha' && target.hasMark('qw_yingzfs_mark')) return false;
                                },
                            },
                        },
                        qw_ym: {
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                var suits = [];
                                for (let card of player.getCards('h')) {
                                    if (card.name == 'ying') suits.push(card.suit);
                                }
                                return event.targets.includes(player) && event.card.name == 'sha' && suits.includes(event.card.suit);
                            },
                            forced: true,
                            content() {
                                trigger.parent.excluded.addArray([player]);
                            },
                        },
                        qw_nadao: {
                            audio: 'ext:超时空方舟/audio:2',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.getEquip('qw_xueyuedao') || !player.getEquip('qw_leimingdao');
                            },
                            content() {
                                'step 0';
                                var list = [];
                                if (!player.getEquip('qw_xueyuedao')) list.push('雪月刀');
                                if (!player.getEquip('qw_leimingdao')) {
                                    list.push('雷鸣刀');
                                }
                                player.chooseControl(list).set('ai', function () {
                                    return 0;
                                });
                                ('step 1');
                                if (result.control == '雷鸣刀') player.equip(game.createCard('qw_leimingdao'));
                                if (result.control == '雪月刀') player.equip(game.createCard('qw_xueyuedao'));
                            },
                            mod: {
                                cardname(card, player) {
                                    if (lib.card[card.name].subtype == 'equip1' && card.name != 'qw_xueyuedao' && card.name != 'qw_leimingdao') return 'sha';
                                },
                            },
                            group: ['qw_nadao_wuqi', 'qw_nadao_use', 'qw_bingshuang'],
                            subSkill: {
                                use: {
                                    usable: 2,
                                    trigger: {
                                        player: ['useCardAfter'],
                                    },
                                    check(event, player) {
                                        if (player.getEquip('qw_leimingdao') && player.getEquip('qw_xueyuedao')) return true;
                                        else return false;
                                    },
                                    filter(event, player) {
                                        return player.getCards('he').length && event.parent.name != 'qw_lmzbd' && event.parent.name != 'qw_ydzcx' && player.countCards('h') > 0;
                                    },
                                    content() {
                                        player.chooseToDiscard(player.getCards('he')).set('ai', function (card) {
                                            return 8 - get.value(card);
                                        });
                                    },
                                },
                                wuqi: {
                                    trigger: {
                                        player: 'equipBefore',
                                    },
                                    popup: false,
                                    _priority: 15,
                                    forced: true,
                                    filter(event, player) {
                                        return event.cards[0].name != 'qw_leimingdao' && event.cards[0].name != 'qw_xueyuedao' && get.subtype(event.card) == 'equip1';
                                    },
                                    content() {
                                        trigger.finish();
                                        trigger.untrigger();
                                    },
                                },
                            },
                        },
                        qw_leimingdao_skill: {
                            equipSkill: true,
                            trigger: {
                                source: 'damageAfter',
                            },
                            forced: true,
                            audio: 'ext:超时空方舟/audio:true',
                            filter(event, player) {
                                return event.nature == 'thunder';
                            },
                            content() {
                                player.draw();
                            },
                        },
                        qw_xueyuedao_skill: {
                            equipSkill: true,
                            trigger: {
                                global: 'loseHpEnd',
                            },
                            audio: 'ext:超时空方舟/audio:true',
                            filter(event, player) {
                                return event.player != player;
                            },
                            prompt: '是否使用【雪月刀】弃置其一张牌',
                            content() {
                                player.discardPlayerCard(trigger.player, true);
                            },
                        },
                        qw_sxlds: {
                            enable: 'phaseUse',
                            usable: 1,
                            ai: {
                                order: 11,
                                result: {
                                    player: 1,
                                    target: -99,
                                },
                            },
                            targetprompt: ['可立即击杀'],
                            selectTarget: 1,
                            filterTarget(card, player, target) {
                                if (target.hp <= 1) target.prompt('可立即击杀', 'thunder');
                                return target.hp <= 1 && target != player;
                            },
                            filter(event, player) {
                                var a = 0;
                                for (var b of game.filterPlayer()) {
                                    if (b.hp <= 1) a++;
                                }
                                if (player.getEquip('qw_leimingdao') && player.getEquip('qw_xueyuedao') && a > 0) return true;
                            },
                            content() {
                                game.broadcastAll(
                                    function (player, target) {
                                        game.playAudio('../extension/超时空方舟/audio/Ilya_0.mp3');
                                        setTimeout(function () {
                                            game.playAudio('../extension/超时空方舟/audio/Ilya_1.mp3');
                                        }, 2000);
                                    },
                                    player,
                                    target
                                );
                                target.damage(99, 'thunder');
                                target.die();
                                player.removeSkill('qw_sxlds');
                            },
                        },
                        qw_lmzbd: {
                            trigger: {
                                player: 'loseAfter',
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            filter(event, player) {
                                if (player.countCards('h')) return false;
                                var evt = event.getl(player);
                                return evt && evt.player == player && evt.hs && evt.hs.length && player.getEquip('qw_leimingdao');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('qw_lmzbd'), function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.targets) player.useCard({ name: 'sha', nature: 'thunder' }, result.targets[0], false);
                            },
                        },
                        qw_fljlw: {},
                        qw_bingshuang: {
                            marktext: '冰',
                            intro: {
                                name: '冰霜',
                                content: '已有#层冰霜',
                            },
                            trigger: {
                                global: ['phaseEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.countMark('qw_bingshuang') > 0 && event.player.hasMark('qw_bingshuang') && event.player != player;
                            },
                            content() {
                                trigger.player.loseHp(1);
                                trigger.player.removeMark('qw_bingshuang');
                            },
                        },
                        qw_ydzcx: {
                            trigger: {
                                global: 'useCardToTarget',
                            },
                            filter(event, player) {
                                return player.getEquip('qw_xueyuedao') && event.player != player && event.targets.length == 1 && event.targets[0] == player;
                            },
                            check(event, player) {
                                return get.attitude(event.player, player) < 0;
                            },
                            usable: 1,
                            content() {
                                player.useCard({ name: 'sha', nature: 'ice' }, trigger.player, false);
                            },
                            group: ['qw_ydzcx_hit', 'qw_ydzcx_cancel'],
                            subSkill: {
                                cancel: {
                                    trigger: {
                                        global: 'useCardToPlayered',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.getEquip('qw_xueyuedao') && event.player != player && event.targets.length == 1 && event.targets[0] == player && player.storage.qw_ydzcx_hit && player.storage.qw_ydzcx_hit > 0;
                                    },
                                    content() {
                                        player.storage.qw_ydzcx_hit = 0;
                                        trigger.targets.remove(trigger.targets[0]);
                                    },
                                },
                                hit: {
                                    trigger: {
                                        player: 'shaHit',
                                    },
                                    filter(event, player) {
                                        return event.getParent(2).name == 'qw_ydzcx';
                                    },
                                    forced: true,
                                    content() {
                                        if (!trigger.target.hasMark('qw_bingshuang')) trigger.target.addMark('qw_bingshuang');
                                        else player.storage.qw_ydzcx_hit = 1;
                                    },
                                },
                            },
                        },
                        qw_bxntd: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                for (var a of game.filterPlayer()) {
                                    if (a.hasMark('qw_bingshuang') && a.countMark('qw_bingshuang') >= 2) {
                                        return true;
                                    }
                                }
                            },
                            content() {
                                for (var a of game.filterPlayer()) {
                                    if (a.hasMark('qw_bingshuang') && a.countMark('qw_bingshuang') >= 2) {
                                        a.turnOver();
                                        a.removeMark('qw_bingshuang', a.countMark('qw_bingshuang'));
                                    }
                                }
                                player.removeSkill('qw_bxntd');
                            },
                        },
                        qw_fxyhy: {
                            trigger: {
                                player: 'loseAfter',
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            filter(event, player) {
                                if (player.countCards('h')) return false;
                                var evt = event.getl(player);
                                return evt && evt.player == player && evt.hs && evt.hs.length && player.getEquip('qw_xueyuedao');
                            },
                            firstDo: true,
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget('选择至多两名角色赋予一层冰霜', [1, 2]).set('ai', function (target) {
                                    var player = _status.event.player;
                                    return get.damageEffect(target, player, player);
                                });
                                ('step 1');
                                if (result.targets) {
                                    for (var a = 0; a < result.targets.length; a++) {
                                        result.targets[a].addMark('qw_bingshuang', 1);
                                    }
                                }
                            },
                        },
                        qw_shuangzi: {
                            nobracket: true,
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            content() {
                                if (!_status.connectMode) {
                                    if ('url(extension/超时空方舟/image/qw_haila.jpg)' == player.node.avatar.style.backgroundImage || 'url(extension/超时空方舟/image/qw_sailinna.jpg)' == player.node.avatar.style.backgroundImage) {
                                        player.init('qw_haila', 'qw_sailinna');
                                    } else {
                                        player.reinit(player.name, 'qw_hl&sln');
                                    }
                                } else {
                                    game.broadcastAll(function (player) {
                                        player.reinit(player.name, 'qw_hl&sln');
                                    }, player);
                                }
                            },
                        },
                        qw_tyby: {
                            init(player) {
                                player.storage.qw_tyby = 0;
                            },
                            mark: true,
                            marktext: '日',
                            intro: {
                                name: '太阳暴雨',
                                content: '已使用#张红色牌',
                            },
                            trigger: {
                                player: ['useCardAfter', 'respondAfter'],
                            },
                            filter(event, player) {
                                return get.color(event.card) == 'red';
                            },
                            forced: true,
                            firstDo: true,
                            content() {
                                player.storage.qw_tyby++;
                                player.update();
                            },
                            group: 'qw_tyby_skill',
                            subSkill: {
                                skill: {
                                    trigger: {
                                        player: ['useCardAfter', 'respondAfter'],
                                    },
                                    check(event, player) {
                                        return player.storage.qw_tyby >= 4;
                                    },
                                    filter(event, player) {
                                        return get.color(event.card) == 'red' && player.storage.qw_tyby && player.storage.qw_tyby >= 3;
                                    },
                                    content() {
                                        'step 0';
                                        var a = 0;
                                        if (ui.cardPile.hasChildNodes() && ui.cardPile.childNodes.length >= 3) {
                                            var list = [];
                                            for (var x = 0; x < player.storage.qw_tyby; x++) {
                                                if (ui.cardPile.childNodes.length > x) list.push(ui.cardPile.childNodes[x]);
                                            }
                                            if (player.storage.qw_tyby >= 3) {
                                                player.showCards(list);
                                                player.storage.qw_tyby = 0;
                                                for (var b = 0; b < list.length; b++) {
                                                    if (get.color(list[b]) == 'red') a = a + list[b].number;
                                                }
                                                event.num = Math.floor(a / 10);
                                            } else event.finish();
                                        }
                                        ('step 1');
                                        if (event.num > 0) {
                                            player.chooseTarget('令一名角色受到' + event.num + '次火焰伤害', 1).set('ai', function (target) {
                                                var player = _status.event.player;
                                                return get.damageEffect(target, player, player, 'fire');
                                            });
                                        } else event.finish();
                                        ('step 2');
                                        if (result.targets) {
                                            event.num--;
                                            result.targets[0].damage(1, 'fire', player);
                                        } else event.finish();
                                        ('step 3');
                                        if (event.num > 0) event.goto(2);
                                    },
                                },
                            },
                        },
                        qw_mygy: {
                            init(player) {
                                player.storage.qw_mygy = 0;
                            },
                            mark: true,
                            marktext: '月',
                            intro: {
                                name: '满月光晕',
                                content: '已使用#张黑色牌',
                            },
                            trigger: {
                                player: ['useCardAfter', 'respondAfter'],
                            },
                            filter(event, player) {
                                return get.color(event.card) == 'black';
                            },
                            forced: true,
                            firstDo: true,
                            content() {
                                player.storage.qw_mygy++;
                                player.update();
                            },
                            group: 'qw_mygy_skill',
                            subSkill: {
                                skill: {
                                    trigger: {
                                        player: ['useCardAfter', 'respondAfter'],
                                    },
                                    check(event, player) {
                                        return player.storage.qw_mygy >= 4;
                                    },
                                    filter(event, player) {
                                        return get.color(event.card) == 'black' && player.storage.qw_mygy && player.storage.qw_mygy >= 3;
                                    },
                                    content() {
                                        'step 0';
                                        var a = 0;
                                        if (ui.discardPile.hasChildNodes() && ui.discardPile.childNodes.length >= 3) {
                                            var list = [];
                                            for (var x = 0; x < player.storage.qw_mygy; x++) {
                                                if (ui.discardPile.childNodes.length > x) list.push(ui.discardPile.childNodes[x]);
                                            }
                                            if (player.storage.qw_mygy >= 3) {
                                                player.showCards(list);
                                                player.storage.qw_mygy = 0;
                                                for (var b = 0; b < list.length; b++) {
                                                    if (get.color(list[b]) == 'black') a = a + list[b].number;
                                                }
                                                event.num = Math.floor(a / 10);
                                            } else event.finish();
                                        }
                                        ('step 1');
                                        if (event.num > 0) {
                                            player.chooseTarget('令一名角色回复' + event.num + '次体力', 1).set('ai', function (target) {
                                                var player = _status.event.player;
                                                if (get.recoverEffect(target, player, player) > 0) return get.recoverEffect(target, player, player);
                                                return player == target;
                                            });
                                        } else event.finish();
                                        ('step 2');
                                        if (result.targets) {
                                            event.num--;
                                            result.targets[0].recover(1);
                                        } else event.finish();
                                        ('step 3');
                                        if (event.num > 0) event.goto(2);
                                    },
                                },
                            },
                        },
                        qw_guance: {
                            mark: true,
                            marktext: '观',
                            intro: {
                                mark(dialog, content, player) {
                                    if (player != game.me) return '不可见';
                                    var list = [];
                                    list.push(ui.cardPile.childNodes[2]);
                                    dialog.addAuto(list);
                                },
                            },
                            nobracket: true,
                        },
                        qw_moon: {
                            trigger: {
                                global: 'recoverAfter',
                            },
                            filter(event, player) {
                                return event.source == player;
                            },
                            forced: true,
                            markimage: 'extension/超时空方舟/image/qw_moon.jpg',
                            intro: {
                                name: '月光帷幕',
                                content: '受到伤害时获得一点护盾,剩余#次',
                            },
                            content() {
                                trigger.player.addMark('qw_moon');
                            },
                            group: 'qw_moon_skill',
                            subSkill: {
                                skill: {
                                    trigger: {
                                        global: 'damageBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.hasMark('qw_moon');
                                    },
                                    content() {
                                        trigger.player.changeHujia(1);
                                        trigger.player.removeMark('qw_moon');
                                    },
                                },
                            },
                        },
                        qw_sun: {
                            trigger: {
                                source: 'damageAfter',
                            },
                            filter(event, player) {
                                return event.nature == 'fire';
                            },
                            forced: true,
                            markimage: 'extension/超时空方舟/image/qw_sun.jpg',
                            intro: {
                                name: '日炎',
                                content: '受到的火焰伤害+1,剩余#次',
                            },
                            content() {
                                trigger.player.addMark('qw_sun');
                            },
                            group: 'qw_sun_skill',
                            subSkill: {
                                skill: {
                                    trigger: {
                                        global: 'damageBegin',
                                    },
                                    filter(event, player) {
                                        return event.player.hasMark('qw_sun') && event.nature == 'fire';
                                    },
                                    forced: true,
                                    content() {
                                        trigger.num++;
                                        trigger.player.removeMark('qw_sun');
                                    },
                                },
                            },
                        },
                        qw_ttdl: {
                            audio: 'ext:超时空方舟/audio:2',
                            enable: 'phaseUse',
                            ai: {
                                order: 2,
                                result: {
                                    player: 1,
                                },
                            },
                            content() {
                                'step 0';
                                var list = [];
                                player.removeSkill('qw_ttdl');
                                for (var a = 0; a < Math.min(3, ui.cardPile.childNodes.length); a++) {
                                    if (player.hasUseTarget(ui.cardPile.childNodes[a])) list.push(ui.cardPile.childNodes[a]);
                                }
                                event.list = list;
                                ('step 1');
                                if (!event.list.length) {
                                    event.finish();
                                }
                                if (event.list.length) player.chooseButton(['【天体队列】<br>请选择要使用的牌', event.list]);
                                ('step 2');
                                if (result.bool) {
                                    player.chooseUseTarget(result.links[0], true);
                                    event.list = event.list.filter((x) => x !== result.links[0]);
                                    event.goto(1);
                                }
                            },
                        },
                        qw_gedang: {
                            audio: 'ext:超时空方舟/audio:2',
                            usable: 2,
                            trigger: {
                                player: 'useCardToTarget',
                            },
                            filter(event, player) {
                                return event.targets.length == 1 && event.cards.length == 1 && event.getParent(2).name != 'qw_gedang_timeout' && event.targets[0] != player && event.getParent(2).name != 'qw_gedang_fanji';
                            },
                            content() {
                                var card = trigger.cards[0];
                                player.addToExpansion(card, 'gain2').gaintag.add('qw_gedang');
                                card.storage.qw_gedang = Math.ceil((card.number * game.players.length) / 2) + 1;
                                if (!player.storage.qw_gedang) player.storage.qw_gedang = [[], [], []];
                                player.storage.qw_gedang[0].push(card);
                                player.storage.qw_gedang[1].push(trigger.targets[0]);
                                player.storage.qw_gedang[2].push(card.storage.qw_gedang);
                                trigger.targets.remove(trigger.targets[0]);
                                trigger.parent.triggeredTargets2.remove(trigger.targets[0]);
                                trigger.untrigger();
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                                delete player.storage[skill];
                            },
                            intro: {
                                markcount(storage) {
                                    if (!storage) return 1;
                                    return storage[0].length;
                                },
                                mark(dialog, storage, player) {
                                    if (!storage) return;
                                    dialog.addAuto(storage[0]);
                                    dialog.addText(get.translation(storage[1]));
                                    var list = [];
                                    for (var a = 0; a < player.storage.qw_gedang[1].length; a++) {
                                        list.push(get.translation(storage[0][a].name) + ',倒计时:' + player.getExpansions('qw_gedang')[player.getExpansions('qw_gedang').length - a - 1].storage.qw_gedang);
                                    }
                                    for (var x of list) {
                                        dialog.addText(x);
                                    }
                                },
                                onunmark(storage, player) {
                                    player.storage.qw_gedang = [[], [], []];
                                },
                            },
                            group: ['qw_gedang_timeout', 'qw_gedang_fanji'],
                            subSkill: {
                                fanji: {
                                    trigger: {
                                        global: 'damageBegin',
                                    },
                                    filter(event, player) {
                                        var b = 0;
                                        if (player.storage.qw_gedang) {
                                            for (var a = 0; a < player.storage.qw_gedang[1].length; a++) {
                                                if (player.storage.qw_gedang[1][a] == event.source) b++;
                                            }
                                        }
                                        return event.parent.name != 'qw_gedang_fanji' && b > 0;
                                    },
                                    content() {
                                        player.changeHujia(1);
                                        player.damage(trigger.num, trigger.source, trigger.nature);
                                        trigger.cancel();
                                        for (var a = 0; a < player.storage.qw_gedang[1].length; a++) {
                                            if (trigger.source == player.storage.qw_gedang[1][a]) {
                                                player.useCard(player.getExpansions('qw_gedang')[player.getExpansions('qw_gedang').length - 1 - a], player.storage.qw_gedang[1][a]);
                                                player.storage.qw_gedang[0].splice(a, 1);
                                                player.storage.qw_gedang[1].splice(a, 1);
                                                player.storage.qw_gedang[2].splice(a, 1);
                                            }
                                        }
                                    },
                                },
                                timeout: {
                                    audio: 'qw_gedang',
                                    trigger: {
                                        global: 'useCardAfter',
                                    },
                                    forced: true,
                                    content() {
                                        for (var i = 0; i < player.getExpansions('qw_gedang').length; i++) {
                                            player.getExpansions('qw_gedang')[i].storage.qw_gedang--;
                                            if (player.getExpansions('qw_gedang')[i].storage.qw_gedang == 0) {
                                                player.useCard(player.getExpansions('qw_gedang')[i], player.storage.qw_gedang[1][player.getExpansions('qw_gedang').length - 1 - i], false);
                                                player.storage.qw_gedang[0].splice(player.getExpansions('qw_gedang').length - 1 - i, 1);
                                                player.storage.qw_gedang[1].splice(player.getExpansions('qw_gedang').length - 1 - i, 1);
                                                player.storage.qw_gedang[2].splice(player.getExpansions('qw_gedang').length - 1 - i, 1);
                                                player.draw(2);
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        qw_fangong: {
                            usable: 1,
                            trigger: {
                                player: 'damageAfter',
                            },
                            filter(event, player) {
                                return event.source && event.source.countCards('h') >= player.countCards('h');
                            },
                            content() {
                                player.useCard({ name: 'sha' }, trigger.source, false);
                            },
                        },
                        qw_sbkd: {
                            nobracket: true,
                            shaRelated: true,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return event.card.name == 'sha' && player.countCards('h') > 0;
                            },
                            logTarget: 'target',
                            prompt: '是否弃置一张牌令此杀无法相应',
                            preHidden: true,
                            content() {
                                'step 0';
                                player.chooseToDiscard(player.getCards('h'));
                                ('step 1');
                                if (result.bool) trigger.parent.directHit.add(trigger.target);
                            },
                        },
                        qw_mbwszh: {
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarfet: 1,
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player: 1,
                                    target: 1,
                                },
                            },
                            content() {
                                if (target.countCards('h') < 5) target.draw(5 - target.countCards('h'));
                                if (player.countCards('h') < 5) player.draw(5 - player.countCards('h'));
                                player.addTempSkill('qw_mbwszh_skill', { player: 'phaseAfter' });
                                target.addTempSkill('qw_mbwszh_skill', { player: 'phaseAfter' });
                                player.removeSkill('qw_mbwszh');
                            },
                            subSkill: {
                                skill: {
                                    trigger: {
                                        player: 'loseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countCards('h') < 5;
                                    },
                                    content() {
                                        player.draw(5 - player.countCards('h'));
                                    },
                                },
                            },
                        },
                        qw_zhuangbei: {
                            enable: 'phaseUse',
                            usable: 1,
                            selectCard: 1,
                            filterCard: true,
                            ai: {
                                order: 10,
                                result: {
                                    player: 1,
                                },
                            },
                            content() {
                                'step 0';
                                player.chooseControl('武器牌', '防具牌', '+1马', '-1马', '宝物').set('ai', function () {
                                    var b = 0;
                                    var c = 0;
                                    for (var a of _status.event.player.getCards('he')) {
                                        if (a.type == 'equip2') b++;
                                        if (a.type == 'equip3') c++;
                                    }
                                    if (b == 0) return 1;
                                    else if (c == 0) return 2;
                                    else return 3;
                                });
                                ('step 1');
                                var a;
                                if (result.control == '武器牌') a = 'equip1';
                                if (result.control == '防具牌') a = 'equip2';
                                if (result.control == '+1马') a = 'equip3';
                                if (result.control == '-1马') a = 'equip4';
                                if (result.control == '宝物') a = 'equip5';
                                event.card1 = get.cardPile2(function (card) {
                                    return get.subtype(card) == a;
                                });
                                player.gain(event.card1);
                                player.chooseTarget().set('prompt', '请选择一名角色装备此牌');
                                ('step 2');
                                if (result.targets[0]) {
                                    result.targets[0].$give(event.card1, result.targets[0], false);
                                    result.targets[0].equip(event.card1);
                                }
                            },
                        },
                        qw_lxqx: {
                            trigger: {
                                source: 'damageAfter',
                            },
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('h') > 3;
                            },
                            prompt: '是否将自己的手牌弃至三张并弃置一名角色等量张牌',
                            content() {
                                'step 0';
                                event.num = player.countCards('h') - 3;
                                player.chooseToDiscard(event.num, player.getCards('h'));
                                ('step 1');
                                player.chooseTarget().set('prompt', '请选择一名角色弃置其' + event.num + '张牌');
                                ('step 2');
                                if (result.targets[0]) {
                                    event.target = result.targets[0];
                                }
                                ('step 3');
                                player.discardPlayerCard(event.target, true);
                                ('step 4');
                                event.num--;
                                if (event.num > 0) event.goto(3);
                            },
                        },
                        qw_zyzh: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            content() {
                                'step 0';
                                player.chooseTarget().set('ai', function (target) {
                                    var player = _status.event.player;
                                    if (get.recoverEffect(target, player, player) > 0) return get.recoverEffect(target, player, player);
                                    return player == target;
                                });
                                ('step 1');
                                if (result.targets) {
                                    if (result.targets[0].hp == result.targets[0].maxHp) player.draw();
                                    result.targets[0].recover();
                                }
                            },
                        },
                        qw_royf: {
                            init(player) {
                                player.addMark('qw_royf');
                            },
                            markimage: 'extension/超时空方舟/image/renouyifu2.jpg',
                            trigger: {
                                global: 'useCardAfter',
                            },
                            prompt: '另伊芙移动至该角色并获得一次攻击次数',
                            intro: {
                                name: '人偶伊芙',
                                content: '当前伊芙可攻击#次',
                            },
                            trigger: {
                                global: 'useCardAfter',
                            },
                            filter(event, player) {
                                for (var i = 0; i < event.targets.length; i++) {
                                    if (event.targets[i] == event.player) return true;
                                }
                                return false;
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) > 0) return true;
                                else return false;
                            },
                            content() {
                                'step 0';
                                event.num = 0;
                                ('step 1');
                                for (var i of game.filterPlayer()) {
                                    if (i.hasMark('qw_royf')) {
                                        event.num = i.countMark('qw_royf');
                                        i.removeMark('qw_royf', event.num);
                                    }
                                }
                                ('step 2');
                                if (event.num + 1 > 3) event.num = 2;
                                trigger.player.addMark('qw_royf', event.num + 1);
                            },
                            group: ['qw_royf_use', 'qw_royf_damage'],
                            subSkill: {
                                damage: {
                                    forced: true,
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    filter(event, player) {
                                        return player != event.player && event.getParent(3).name == 'qw_royf_use';
                                    },
                                    content() {
                                        trigger.num = 0.5;
                                    },
                                },
                                use: {
                                    trigger: {
                                        global: 'useCardEnd',
                                    },
                                    prompt: '是否消耗伊芙的攻击次数视为对此牌目标打出一张杀',
                                    check(event, player) {
                                        if (get.attitude(player, event.player) > 0) return true;
                                        else return false;
                                    },
                                    filter(event, player) {
                                        return event.player.hasMark('qw_royf') && event.targets[0] != event.player && event.targets.length == 1 && event.targets[0] != player && event.parent.name != 'qw_royf_use';
                                    },
                                    content() {
                                        trigger.player.removeMark('qw_royf', 1);
                                        player.useCard({ name: 'sha' }, trigger.targets[0], false);
                                    },
                                },
                            },
                        },
                        qw_smzx: {
                            trigger: {
                                global: 'phaseEnd',
                            },
                            firstDo: true,
                            forced: true,
                            filter(event, player) {
                                return event.player.hasMark('qw_royf');
                            },
                            content() {
                                trigger.player.recover();
                            },
                        },
                        qw_yfzz: {
                            enable: 'phaseUse',
                            selectCard() {
                                return _status.event.player.getStat('skill').qw_yfzz || 0;
                            },
                            filterCard(card) {
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            ai: {
                                order: 11,
                                result: {
                                    player(player, target, card) {
                                        return -1 - (player.getStat('skill').qw_yfzz || 0);
                                    },
                                    target: 1,
                                },
                            },
                            filter(event, player) {
                                if (player.getStat().skill.qw_yfzz) return player.getStat().skill.qw_yfzz <= player.getCards('h').length;
                                return true;
                            },
                            content() {
                                'step 0';
                                target.draw();
                                event.num = 0;
                                ('step 1');
                                for (var i of game.filterPlayer()) {
                                    if (i.hasMark('qw_royf')) {
                                        event.num = i.countMark('qw_royf');
                                        i.removeMark('qw_royf', event.num);
                                    }
                                }
                                ('step 2');
                                if (event.num > 3) event.num = 3;
                                target.addMark('qw_royf', event.num);
                            },
                        },
                        qw_qiege: {
                            usable: 1,
                            trigger: {
                                source: 'damageEnd',
                            },
                            prompt: '切割:是否弃置一张牌另其流失一点体力',
                            filter(event, player) {
                                return player != event.player && event.getParent(3).name == 'qw_royf_use';
                            },
                            filterCard(card) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard(player.getCards('h')).set('ai', function (card) {
                                    return 7 - get.value(card);
                                });
                                ('step 1');
                                if (result.bool) {
                                    trigger.player.loseHp();
                                }
                            },
                        },
                        qw_hsyf: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            filter(event, player) {
                                for (var a of game.filterPlayer()) {
                                    if (a.hasMark('qw_royf') && a.countMark('qw_royf') > 0) return true;
                                }
                            },
                            content() {
                                'step 0';
                                event.num = 0;
                                for (var i of game.filterPlayer()) {
                                    if (i.hasMark('qw_royf')) {
                                        event.num = i.countMark('qw_royf');
                                        i.removeMark('qw_royf', i.countMark('qw_royf'));
                                    }
                                }
                                ('step 1');
                                if (event.num > 0) player.draw(event.num);
                            },
                            group: 'qw_hsyf_use',
                            subSkill: {
                                use: {
                                    trigger: {
                                        global: 'useCardBefore',
                                    },
                                    prompt: '是否另伊芙回到自己身边？',
                                    filter(event, player) {
                                        return event.player.hasMark('qw_royf') && event.targets[0] == player && event.player != player;
                                    },
                                    content() {
                                        var a = trigger.player.countMark('qw_royf');
                                        trigger.player.removeMark('qw_royf', a);
                                        player.addMark('qw_royf', a);
                                    },
                                },
                            },
                        },
                        qw_mydxt: {
                            trigger: {
                                player: 'dying',
                            },
                            content() {
                                'step 0';
                                event.num = 0;
                                ('step 1');
                                player.removeSkill('qw_mydxt');
                                for (var i of game.filterPlayer()) {
                                    if (i.hasMark('qw_royf')) {
                                        event.num = i.countMark('qw_royf');
                                        i.removeMark('qw_royf', event.num);
                                    }
                                }
                                player.recover(event.num + 1);
                                ('step 2');
                                var evt = _status.event.getParent('phaseUse');
                                if (evt && evt.name == 'phaseUse') {
                                    evt.skipped = true;
                                    event.finish();
                                }
                            },
                        },
                        qw_zhizhao: {
                            enable: 'phaseUse',
                            usable: 1,
                            init(player) {
                                player.storage.qw_zhizhao = 0;
                            },
                            filter(event, player) {
                                return player.storage.qw_zhizhao == 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.storage.qw_zhizhao = 3;
                                player.storage.qw_xknl_fx = 1;
                                player.chooseTarget(get.prompt('qw_zhizhao'), '请选择一名角色', function (card, player, target) {
                                    return player != target;
                                });
                                ('step 1');
                                if (result.targets[0]) {
                                    var skills;
                                    skills = result.targets[0].getStockSkills(false, true);
                                    if (skills.length) {
                                        player
                                            .chooseControl(skills)
                                            .set('ai', () => Math.floor(Math.random() * skills.length))
                                            .set('prompt', `选择${get.translation(result.targets[0])}的一个技能另一名角色获得之,直到其回合结束`);
                                    } else {
                                    }
                                }
                                ('step 2');
                                if (result.control) {
                                    event.skill = result.control;
                                    player.chooseTarget(get.prompt('qw_zhizhao'), '请选择一名角色另其获得此技能', function (card, player, target) {
                                        return true;
                                    });
                                }
                                ('step 3');
                                if (result.targets[0]) result.targets[0].addTempSkill(event.skill, { player: 'phaseAfter' });
                            },
                            group: 'qw_zhizhao_jishu',
                            subSkill: {
                                jishu: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    firstDo: true,
                                    forced: true,
                                    content() {
                                        if (player.storage.qw_zhizhao > 0) player.storage.qw_zhizhao--;
                                    },
                                },
                            },
                        },
                        qw_tljx: {
                            init(player) {
                                player.storage.qw_tljx = 0;
                            },
                            mark: true,
                            marktext: '体',
                            intro: {
                                name: '体力极限',
                                content(storage) {
                                    return '当前有' + storage + '点体力极限';
                                },
                            },
                            trigger: {
                                player: 'loseHpEnd',
                            },
                            firstDo: true,
                            forced: true,
                            content() {
                                player.storage.qw_tljx += trigger.num;
                                player.update();
                            },
                            group: 'qw_tljx_recover',
                            subSkill: {
                                recover: {
                                    forced: true,
                                    trigger: {
                                        player: 'recoverBegin',
                                    },
                                    filter(event, player) {
                                        return player.storage.qw_tljx && player.storage.qw_tljx > 0;
                                    },
                                    content() {
                                        var a = trigger.num;
                                        var b = a * 2;
                                        if (a >= player.storage.qw_tljx) {
                                            trigger.num = player.storage.qw_tljx;
                                            player.storage.qw_tljx = 0;
                                        }
                                        if (b > player.storage.qw_tljx && a < player.storage.qw_tljx) {
                                            trigger.num = player.storage.qw_tljx;
                                            player.storage.qw_tljx = 0;
                                        }
                                        if (b <= player.storage.qw_tljx) {
                                            trigger.num = b;
                                            player.storage.qw_tljx = player.storage.qw_tljx - b;
                                        }
                                        player.update();
                                    },
                                },
                            },
                        },
                        qw_kq: {
                            forced: true,
                            trigger: {
                                source: 'dying',
                            },
                            content() {
                                if (trigger.source == player) {
                                    for (var i of game.filterPlayer()) {
                                        if (i != trigger.source) i.damage(Math.ceil(trigger.parent.num / 2), player);
                                    }
                                }
                            },
                        },
                        qw_wjdfn: {
                            enable: 'phaseUse',
                            ai: {
                                order: 11,
                                result: {
                                    player(player, target) {
                                        return player.hp - 1.1;
                                    },
                                },
                            },
                            filter(event, player) {
                                return player.getCards('h').length;
                            },
                            content() {
                                'step 0';
                                player.loseHp();
                                player.chooseCardTarget({
                                    prompt: '请弃置一张牌并选择一名角色',
                                    filterCard(card) {
                                        return true;
                                    },
                                    filterTarget(card, player, target) {
                                        var card = { name: 'lebu' };
                                        return player.canUse(card, target);
                                    },
                                    ai1(card) {
                                        return 7 - get.value(card);
                                    },
                                    ai2(target) {
                                        var player = _status.event.player,
                                            card = { name: 'lebu' };
                                        return get.effect(target, { name: 'lebu' }, player, player);
                                    },
                                });
                                ('step 1');
                                if (result.targets) {
                                    player.lose(result.cards[0]);
                                    result.targets[0].damage(1, player);
                                }
                            },
                        },
                        qw_xzxc: {
                            enable: 'phaseUse',
                            usable: 1,
                            ai: {
                                order: 10,
                                result: {
                                    player: 1,
                                },
                            },
                            init(player) {
                                player.storage.qw_xzxc = 0;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('血债血偿'), '对一名其他角色使用一张无距离限制的杀', function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.targets) player.useCard({ name: 'sha' }, result.targets[0], false);
                                else player.getStat().skill.qw_xzxc--;
                            },
                            group: ['qw_xzxc_num', 'qw_xzxc_add'],
                            subSkill: {
                                add: {
                                    trigger: {
                                        player: ['damageAfter', 'loseHpAfter'],
                                    },
                                    forced: true,
                                    content() {
                                        player.storage.qw_xzxc++;
                                    },
                                },
                                num: {
                                    forced: true,
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return player != event.player && event.getParent(3).name == 'qw_xzxc';
                                    },
                                    content() {
                                        trigger.num = trigger.num + player.storage.qw_xzxc;
                                        player.removeSkill('qw_xzxc');
                                    },
                                },
                            },
                        },
                        qw_xfxy: {
                            trigger: {
                                global: 'dieAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.source == player;
                            },
                            content() {
                                player.storage.qw_tljx++;
                                player.gainMaxHp();
                                player.recover();
                            },
                        },
                        qw_bsn: {
                            trigger: {
                                player: 'recoverBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.parent == 'qw_mbxhj_skill' || (event.card && event.card.name == 'mianbao')); //QQQ
                                return false;
                                return true;
                            },
                            content() {
                                trigger.cancel();
                            },
                            group: ['qw_bsn_die', 'qw_bsn_die1', 'qw_bsn_dying', 'qw_bsn_mianbao', 'qw_bsn_mianbao1', 'qw_bsn_jie', 'qw_bsn_jie2', 'qw_bsn_tuoli', 'qw_bsn_jie3'],
                            subSkill: {
                                jie: {
                                    mark: true,
                                    marktext: '饿',
                                    intro: {
                                        name: '饥饿',
                                        content: '我饿了,快给我吃的!<br>饥饿状态已持续#轮',
                                    },
                                    forced: true,
                                    trigger: {
                                        player: ['damageEnd', 'loseHpEnd'],
                                    },
                                    filter(event, player) {
                                        return player.hp <= 0 && !player.hasSkill('qw_bsn_jie1');
                                    },
                                    content() {
                                        player.addSkill('qw_bsn_jie1');
                                    },
                                },
                                jie1: {
                                    mod: {
                                        playerEnabled(card, player, target) {
                                            if (player != target) return false;
                                        },
                                    },
                                },
                                jie2: {
                                    forced: true,
                                    trigger: {
                                        player: ['phaseBegin', 'phaseEnd'],
                                    },
                                    filter(event, player) {
                                        return player.hp <= 0 && player.hasSkill('qw_bsn_jie1');
                                    },
                                    forced: true,
                                    content() {
                                        if (event.triggername == 'phaseBegin') player.addMark('qw_bsn_jie');
                                        if (event.triggername == 'phaseEnd' && player.countMark('qw_bsn_jie') >= 2) {
                                            const next = game.createEvent('diex', false);
                                            next.source = player;
                                            next.player = player;
                                            next._triggered = null;
                                            next.restMap = { type: null, count: null, audio: null };
                                            next.excludeMark = [];
                                            next.setContent('die');
                                            player.delete();
                                            player.remove();
                                        }
                                    },
                                },
                                jie3: {
                                    trigger: {
                                        player: 'damageAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.hp <= 0 && player.hasSkill('qw_bsn_jie1');
                                    },
                                    content() {
                                        player.say(['为什么我要挨打？', '等等...等一下!我已经挨了不少打了!'].randomGet());
                                    },
                                },
                                tuoli: {
                                    forced: true,
                                    trigger: {
                                        player: 'recoverEnd',
                                    },
                                    filter(event, player) {
                                        return player.hp > 0 && player.hasSkill('qw_bsn_jie1');
                                    },
                                    forced: true,
                                    content() {
                                        player.removeSkill('qw_bsn_jie1');
                                        player.removeMark('qw_bsn_jie', 2);
                                        player.say('真香!');
                                    },
                                },
                                mianbao1: {
                                    forced: true,
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    filter(event, player) {
                                        return event.card.name == 'mianbao' && player.hp < 0;
                                    },
                                    content() {
                                        player.hp = 0;
                                    },
                                },
                                mianbao: {
                                    trigger: {
                                        global: 'phaseBefore',
                                        player: 'enterGame',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return (event.name != 'phase' || game.phaseNumber == 0) && !lib.inpile.includes('mianbao');
                                    },
                                    content() {
                                        for (var i = 2; i < 10; i++) {
                                            var card = game.createCard2('mianbao', i % 2 ? 'club' : 'spade', i);
                                            ui.cardPile.insertBefore(card, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
                                        }
                                        game.broadcastAll(function () {
                                            lib.inpile.add('mianbao');
                                        });
                                        game.updateRoundNumber();
                                    },
                                },
                                dying: {
                                    forced: true,
                                    trigger: {
                                        player: 'dyingBefore',
                                    },
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                                die: {
                                    trigger: {
                                        player: 'dieBefore',
                                    },
                                    forced: true,
                                    content() {
                                        trigger.untrigger();
                                        trigger.finish();
                                    },
                                },
                                die1: {
                                    forced: true,
                                    trigger: {
                                        global: 'dieAfter',
                                    },
                                    content() {
                                        player.gain(get.cardPile('mianbao'));
                                    },
                                },
                            },
                        },
                        qw_xknl: {
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                var list = ['盯', '啄'];
                                if (player.storage.qw_xknl_fx == 1) list.push('飞翔');
                                if (!player.hasSkill('qw_mbxhj')) {
                                    list.push('找面包');
                                    for (var i = 0; i < player.getCards('h').length; i++) {
                                        if (player.getCards('h')[i].name == 'mianbao') {
                                            list.push('扔面包');
                                            break;
                                        }
                                    }
                                }
                                player.chooseControl(list);
                                ('step 1');
                                if (result.control == '盯') {
                                    player.chooseTarget(get.prompt('qw_xknl'), '选择一名角色,其使用牌只能指定你为目标,且造成的所有伤害+1', function (card, player, target) {
                                        return player != target;
                                    });
                                    event.goto(2);
                                }
                                if (result.control == '啄') {
                                    player.chooseTarget(get.prompt('qw_xknl'), '选择一名角色,对其造成一点伤害', function (card, player, target) {
                                        return player != target;
                                    });
                                    event.goto(3);
                                }
                                if (result.control == '飞翔') {
                                    player.addSkill('qw_xknl_fx1');
                                    player.storage.qw_xknl_fx = 0;
                                    player.storage.qw_xknl_fx2 = 3;
                                    event.finish();
                                }
                                if (result.control == '找面包') {
                                    event.goto(4);
                                }
                                if (result.control == '扔面包') {
                                    event.goto(5);
                                }
                                ('step 2');
                                if (result.bool) {
                                    result.targets[0].addSkill('看什么看!');
                                    event.finish();
                                }
                                ('step 3');
                                if (result.bool) {
                                    result.targets[0].damage(1, player);
                                    event.finish();
                                }
                                ('step 4');
                                var a = [1, 2, 3, 4, 5].randomGet();
                                var b = 1 + game.players.length;
                                if (b >= a) {
                                    player.gain(get.cardPile('mianbao'));
                                }
                                event.finish();
                                ('step 5');
                                player.chooseCardTarget({
                                    filterCard(card) {
                                        return card.name == 'mianbao';
                                    },
                                    filterTarget: lib.filter.notMe,
                                    selectCard: 1,
                                    prompt: '请选择一张面包并指定一名角色',
                                });
                                ('step 6');
                                if (result.targets[0]) {
                                    player.lose(result.cards[0]);
                                    player.draw();
                                    result.targets[0].damage(1, player);
                                    player.storage.qw_xknl_reng = 1;
                                }
                            },
                            group: ['qw_xknl_fx', 'qw_xknl_fx2', 'qw_xknl_reng'],
                            subSkill: {
                                reng: {
                                    init(player) {
                                        player.storage.qw_xknl_reng = 0;
                                    },
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.qw_xknl_reng == 1;
                                    },
                                    content() {
                                        player.gain(get.cardPile('mianbao'));
                                        player.storage.qw_xknl_reng = 0;
                                    },
                                },
                                fx2: {
                                    init(player) {
                                        player.storage.qw_xknl_fx2 = 0;
                                    },
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.hasSkill('qw_xknl_fx1');
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.qw_xknl_fx2--;
                                        ('step 1');
                                        if (player.storage.qw_xknl_fx2 == 0) player.removeSkill('qw_xknl_fx1');
                                    },
                                },
                                fx1: {
                                    mod: {
                                        globalTo(from, to, distance) {
                                            return distance + 2;
                                        },
                                        attackFrom(from, to, current) {
                                            return current - 2;
                                        },
                                    },
                                },
                                fx: {
                                    init(player) {
                                        player.storage.qw_xknl_fx = 0;
                                    },
                                },
                            },
                        },
                        qw_mbxhj: {
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                player.removeSkill('qw_mbxhj');
                            },
                            group: 'qw_mbxhj_skill',
                            subSkill: {
                                skill: {
                                    trigger: {
                                        player: 'useCardBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card.name == 'mianbao';
                                    },
                                    content() {
                                        player.recover();
                                        player.draw();
                                    },
                                },
                            },
                        },
                        qw_xxyx: {
                            init(player) {
                                player.storage.qw_xxyx = 0;
                            },
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return player.storage.qw_xxyx >= 3;
                            },
                            content() {
                                player.removeSkill('qw_xknl');
                                player.removeSkill('qw_mbxhj');
                                player.removeSkill('qw_zhizhao');
                                player.removeSkill('qw_xxyx');
                                player.addSkill('不灭的火花');
                            },
                            group: 'qw_xxyx_a',
                            subSkill: {
                                a: {
                                    lastDo: true,
                                    trigger: {
                                        player: ['phaseEnd', 'phaseBefore'],
                                    },
                                    forced: true,
                                    content() {
                                        if (event.triggername == 'phaseBefore') {
                                            player.storage.qw_xxyx++;
                                        }
                                        if (event.triggername == 'phaseEnd' && player.storage.qw_xxyx >= 3) {
                                            player.removeSkill('qw_xxyx');
                                            player.removeSkill('qw_xxyx_a');
                                        }
                                    },
                                },
                            },
                        },
                        '看什么看!': {
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                trigger.num++;
                                ('step 1');
                                if (trigger.player.name == 'qw_fenghuang') player.removeSkill('看什么看!');
                            },
                            mod: {
                                playerEnabled(card, player, target) {
                                    var a;
                                    for (var o of game.filterPlayer()) {
                                        if (o.name == 'qw_fenghuang') a = o;
                                    }
                                    if (a != target) return false;
                                },
                            },
                        },
                        不灭的火花: {
                            init(player) {
                                player.storage.不灭的火花 = 0;
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                event.num = 0;
                                ('step 1');
                                event.play = game.players.randomGet();
                                ('step 2');
                                event.play.damage(1, 'fire');
                                event.num++;
                                ('step 3');
                                ('step 4');
                                if (player.storage.不灭的火花 == 0 || event.num > 50) event.goto(1);
                                else player.removeSkill('不灭的火花');
                            },
                            group: '不灭的火花_停止',
                            subSkill: {
                                停止: {
                                    firstDo: true,
                                    trigger: {
                                        global: 'dyingBefore',
                                    },
                                    forced: true,
                                    content() {
                                        if (trigger.getParent(2).name == '不灭的火花') {
                                            player.storage.不灭的火花 = 1;
                                        }
                                    },
                                },
                            },
                        },
                        qw_dd: {
                            mod: {
                                aiOrder(player, card, num) {
                                    if (get.itemtype(card) == 'card') {
                                        if (card.hasGaintag('qw_wy')) {
                                            return num + 11;
                                        }
                                    }
                                },
                            },
                            mark: true,
                            marktext: '等',
                            ai: {
                                order: 10,
                                result: {
                                    player: 1,
                                },
                            },
                            intro: {
                                name: '等待',
                                content: '本回合已发动#次等待',
                            },
                            init(player) {
                                player.storage.qw_dd = 0;
                            },
                            enable: 'phaseUse',
                            filter(event, player) {
                                return (player.getStat().skill.qw_dd || 0) <= (player.storage.wyjs || 0);
                            },
                            content() {
                                for (var cha of game.filterPlayer()) {
                                    if (cha != player) {
                                        cha.chooseToUse({ prompt: '【等待】:你可以立即使用一张牌' });
                                    }
                                }
                                player.storage.qw_dd++;
                                player.storage.qw_dd_sha++;
                                player.update();
                                if (player.getCards('h').length) {
                                    player.chooseToDiscard(1, player.getCards('h')).set('ai', function (card) {
                                        if (card.name == 'sha') {
                                            return 7 - get.value(card);
                                        } else if (card.name == 'shan') {
                                            return 10;
                                        } else {
                                            return 10 - get.value(card);
                                        }
                                    });
                                }
                            },
                            group: ['qw_dd_sha', 'qw_dd_draw'],
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: 'phaseAfter',
                                    },
                                    forced: true,
                                    content() {
                                        player.update();
                                        player.drawTo(Math.min(player.storage.qw_dd + player.countCards('h'), player.maxHp));
                                    },
                                },
                                sha: {
                                    init(player) {
                                        player.storage.qw_dd_sha = 0;
                                    },
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    content() {
                                        player.storage.qw_dd_sha = 0;
                                        player.storage.qw_dd = 0;
                                    },
                                },
                            },
                        },
                        qw_yysn: {
                            forced: true,
                            trigger: {
                                player: 'gainEnd',
                            },
                            filter: (event) => event.cards && event.cards.length, //QQQ
                            content() {
                                player.removeGaintag('qw_wy');
                                player.addGaintag(trigger.cards[trigger.cards.length - 1], 'qw_wy');
                            },
                            init(player) {
                                player.storage.wyjs = 0;
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return (num += player.storage.qw_dd_sha < 4 ? player.storage.qw_dd_sha : 4);
                                },
                            },
                            group: ['qw_yysn_use', 'qw_yysn_js'],
                            subSkill: {
                                js: {
                                    forced: true,
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    content() {
                                        player.storage.wyjs = 0;
                                    },
                                },
                                use: {
                                    forced: true,
                                    trigger: {
                                        player: ['useCardBefore', 'respondBefore'],
                                    },
                                    filter(event, player) {
                                        return event.cards[0].hasGaintag('qw_wy') && event.parent != 'qw_xjwy';
                                    },
                                    content() {
                                        player.removeGaintag('qw_wy');
                                        player.storage.wyjs++;
                                    },
                                },
                            },
                        },
                        qw_xjwy: {
                            forced: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            content() {
                                'step 0';
                                event.num1 = 0;
                                event.num = player.storage.qw_dd_sha;
                                ('step 1');
                                if (event.num > 0) {
                                    player
                                        .chooseTarget(get.prompt('qw_xjwy'), '对一名其他角色使用一张无距离限制的杀', function (card, player, target) {
                                            return player != target;
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            return -get.attitude(target, player);
                                        });
                                }
                                ('step 2');
                                if (event.num > 0 && result.targets) {
                                    player.useCard({ name: 'sha' }, result.targets[0], false);
                                }
                                ('step 3');
                                if (event.num > 0) {
                                    event.goto(1);
                                    event.num--;
                                } else {
                                    player.storage.qw_dd_sha = 0;
                                    setTimeout(function () {
                                        for (var i of game.filterPlayer()) {
                                            i.damage(Math.ceil(i.storage.qw_xjwy_jishu * 0.5, player));
                                        }
                                    }, 1000);
                                }
                            },
                            group: ['qw_xjwy_num', 'qw_xjwy_hit', 'qw_xjwy_jishu'],
                            subSkill: {
                                jishu: {
                                    firstDo: true,
                                    forced: true,
                                    init(player) {
                                        for (var i of game.filterPlayer()) {
                                            i.storage.qw_xjwy_jishu = 0;
                                        }
                                    },
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    content() {
                                        for (var i of game.filterPlayer()) {
                                            i.storage.qw_xjwy_jishu = 0;
                                        }
                                    },
                                },
                                hit: {
                                    forced: true,
                                    trigger: {
                                        player: 'shaHit',
                                    },
                                    filter(event, player) {
                                        return event.getParent(2).name == 'qw_xjwy';
                                    },
                                    content() {
                                        trigger.target.storage.qw_xjwy_jishu++;
                                    },
                                },
                                num: {
                                    forced: true,
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return player != event.player && event.getParent(3).name == 'qw_xjwy';
                                    },
                                    content() {
                                        trigger.num = 0;
                                    },
                                },
                            },
                        },
                        qw_ffz: {
                            trigger: {
                                player: ['loseAfter', 'cardsDiscardAfter', 'loseAsyncAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.name.indexOf('lose') == 0) {
                                    if (event.getlx === false || event.position != ui.discardPile) return false;
                                } else {
                                    var evt = event.parent;
                                    if (evt.relatedEvent && evt.relatedEvent.name == 'useCard') return false;
                                }
                                if (player != _status.currentPhase) return false;
                                return true;
                            },
                            content() {
                                player.draw();
                            },
                            group: 'qw_ffz_use',
                            subSkill: {
                                use: {
                                    trigger: {
                                        player: ['useCardAfter', 'respondAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (player == _status.currentPhase) return false;
                                        return true;
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                            },
                        },
                        qw_luxixy: {
                            trigger: {
                                global: 'gameStart',
                            },
                            filter(event, player) {
                                for (var a of game.filterPlayer()) {
                                    if (a != player && lib.characterSort.超时空方舟.qw_cskfz.includes(a.name)) return true;
                                }
                            },
                            prompt: '是否查看相遇对话',
                            check(event, player) {
                                return false;
                            },
                            content() {
                                var namelist = [];
                                for (var a of game.filterPlayer()) {
                                    namelist.push(a.name);
                                }
                                if (namelist.includes('qw_haiyin')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_haiyin') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        c.say('我们什么时候走？');
                                    }, 1000);
                                    setTimeout(function () {
                                        d.say('我得赶快把他们全灭掉…');
                                    }, 3000);
                                    setTimeout(function () {
                                        player.say('…你要灭谁？');
                                    }, 5000);
                                    setTimeout(function () {
                                        d.say('还能是谁？');
                                    }, 7000);
                                    setTimeout(function () {
                                        d.say('当然是法洛斯教团的人.');
                                    }, 9000);
                                    setTimeout(function () {
                                        d.say('我才不关心什么钟楼,我唯一的目标就是把法洛斯教团的人杀光!');
                                    }, 11000);
                                    setTimeout(function () {
                                        player.say('你们有什么过节吗？');
                                    }, 14000);
                                    setTimeout(function () {
                                        d.say('…');
                                    }, 16000);
                                    setTimeout(function () {
                                        d.say('我为什么要告诉你？');
                                    }, 17500);
                                    setTimeout(function () {
                                        d.say('这跟你有什么关系.');
                                    }, 19500);
                                    setTimeout(function () {
                                        d.say('…算了,少说废话,赶紧出发吧.');
                                    }, 22500);
                                } else if (namelist.includes('qw_xisi')) {
                                    var xisi = ['好可爱.', '好可怕'].randomGet();
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_xisi') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        d.say('您好!我是西斯.');
                                    }, 1000);
                                    setTimeout(function () {
                                        d.say('我也刚加入调查团没多久,我们新人之间可以互相照应!');
                                    }, 2800);
                                    setTimeout(function () {
                                        player.say('那个玩偶是什么？');
                                    }, 5500);
                                    setTimeout(function () {
                                        d.say('她叫伊芙.是我最好的朋友!');
                                    }, 8000);
                                    setTimeout(function () {
                                        player.say('' + xisi + '');
                                    }, 10000);
                                    if (xisi == '好可爱.') {
                                        setTimeout(function () {
                                            d.say('嘿嘿,是吧？');
                                        }, 12000);
                                        setTimeout(function () {
                                            d.say('以后请多多关照!');
                                        }, 14500);
                                    } else {
                                        setTimeout(function () {
                                            d.say('什么!？不,不是这样的...');
                                        }, 12000);
                                        setTimeout(function () {
                                            d.say('明明很可爱呀...');
                                        }, 15000);
                                    }
                                } else if (namelist.includes('qw_leilin')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_leilin') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        d.say('露西,你怎么又来钟楼了？');
                                    }, 1000);
                                    setTimeout(function () {
                                        d.say('你也知道,钟楼并不是让时光倒转的装置,而是让世界重新开始循环的触发器.');
                                    }, 3000);
                                    setTimeout(function () {
                                        d.say('这个世界的人坚信只要启动钟楼,就能回到那个和平的年代,我曾经也是这样认为的.');
                                    }, 6000);
                                    setTimeout(function () {
                                        d.say('然而事实上,我们只不过是永远循环着相同的时间而已…这真的很残忍.');
                                    }, 9000);
                                    setTimeout(function () {
                                        d.say('但即便如此,就算这一切只是虚假的幻想,人类还是会为了这一个目标而团结在一起.');
                                    }, 11500);
                                    setTimeout(function () {
                                        d.say('说不定设计这个世界的人,也是这么希望的…');
                                    }, 14500);
                                    setTimeout(function () {
                                        d.say('…话说回来,我们没必要再来这里了.');
                                    }, 17000);
                                    setTimeout(function () {
                                        d.say('不过既然已经来了,就赶紧启动钟楼,回到方舟吧.');
                                    }, 19000);
                                    setTimeout(function () {
                                        d.say('这不是我们该待的地方.');
                                    }, 21500);
                                } else if (namelist.includes('qw_lian')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_lian') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        d.say('我不仅仅是调查队员,同时还担任着教官的职责.');
                                    }, 1000);
                                    setTimeout(function () {
                                        d.say('只要你愿意,我可以把你训练成能够独当一面的战斗员');
                                    }, 3500);
                                    setTimeout(function () {
                                        d.say('只不过会很辛苦,想要变强必须要付出努力.');
                                    }, 6500);
                                    setTimeout(function () {
                                        d.say('怎么样,做好觉悟了吗？那就从今天开始...');
                                    }, 9000);
                                    setTimeout(function () {
                                        player.say('不,还是算了.');
                                    }, 11000);
                                    setTimeout(function () {
                                        d.say('..............');
                                    }, 13500);
                                    setTimeout(function () {
                                        d.say('我可以用初学者教程去教你...');
                                    }, 16000);
                                    setTimeout(function () {
                                        player.say('算了.');
                                    }, 18000);
                                    setTimeout(function () {
                                        d.say('....................');
                                    }, 20000);
                                    setTimeout(function () {
                                        d.say('好吧');
                                    }, 22000);
                                } else if (namelist.includes('qw_xefst')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_xefst') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        d.say('你就是传闻中的那个小鬼吧.');
                                    }, 1000);
                                    setTimeout(function () {
                                        d.say('组了一个调查团是吗？');
                                    }, 3500);
                                    setTimeout(function () {
                                        d.say('调查有了进展确实是好事...如果你要去,可别带上我.');
                                    }, 6000);
                                    setTimeout(function () {
                                        player.say('为什么？');
                                    }, 9000);
                                    setTimeout(function () {
                                        d.say('打死我也不想去下面...你去过几次就知道了.');
                                    }, 11000);
                                    setTimeout(function () {
                                        d.say('那边有很多很强的家伙,把他们带上吧.');
                                    }, 14000);
                                    setTimeout(function () {
                                        d.say('我在这里做做防御训练就可以了.');
                                    }, 16500);
                                } else if (namelist.includes('qw_prst')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_prst') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        d.say('啊,你就是露西吧.');
                                    }, 1000);
                                    setTimeout(function () {
                                        d.say('你信仰神吗？');
                                    }, 3500);
                                    setTimeout(function () {
                                        player.say('嗯');
                                    }, 6000);
                                    setTimeout(function () {
                                        d.say('噢…');
                                    }, 8000);
                                    setTimeout(function () {
                                        d.say('那我们先不要去扭曲之地了,趁着这个机会,做个祭司怎么样？');
                                    }, 10000);
                                    setTimeout(function () {
                                        d.say('跟我来,我会好好照顾你的.');
                                    }, 12500);
                                    setTimeout(function () {
                                        player.say('(摇头)');
                                    }, 15000);
                                    setTimeout(function () {
                                        d.say('…真可惜.');
                                    }, 17200);
                                } else if (namelist.includes('qw_kalun')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_kalun') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        d.say('喂!你对暗黑之力感兴趣吗？');
                                    }, 1000);
                                    setTimeout(function () {
                                        player.say('....................');
                                    }, 3500);
                                    setTimeout(function () {
                                        d.say('为什么无视我!');
                                    }, 6500);
                                    setTimeout(function () {
                                        d.say('嗯？对暗黑之力没有兴趣么？');
                                    }, 9000);
                                    setTimeout(function () {
                                        player.say('没有');
                                    }, 11500);
                                    setTimeout(function () {
                                        d.say('哈...');
                                    }, 14000);
                                    setTimeout(function () {
                                        d.say('多酷呀...');
                                    }, 16500);
                                    setTimeout(function () {
                                        player.say('..............');
                                    }, 19000);
                                    setTimeout(function () {
                                        d.say('不要无视我好嘛...');
                                    }, 21500);
                                } else if (namelist.includes('qw_huizi')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_huizi') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        d.say('...隔了这么长时间回到调查团,好像一点变化也没有嘛.');
                                    }, 1000);
                                    setTimeout(function () {
                                        player.say('是谁？');
                                    }, 3500);
                                    setTimeout(function () {
                                        d.say('妈呀!');
                                    }, 6000);
                                    setTimeout(function () {
                                        d.say('吓我一跳...你是谁？');
                                    }, 8500);
                                    setTimeout(function () {
                                        player.say('我是露西.');
                                    }, 11000);
                                    setTimeout(function () {
                                        d.say('露西？');
                                    }, 13500);
                                    setTimeout(function () {
                                        d.say('啊哈,是你啊？据说可以找到时光之影的那个…');
                                    }, 16000);
                                    setTimeout(function () {
                                        d.say('看着这么小,想不到还挺有本事的嘛.');
                                    }, 19000);
                                    setTimeout(function () {
                                        player.say('你是谁？');
                                    }, 21500);
                                    setTimeout(function () {
                                        d.say('我是卉子,别看我这样,我可是调查队员哦,虽然我刚归队没多久.');
                                    }, 24000);
                                    setTimeout(function () {
                                        d.say('如果需要帮助就跟我说,我一定会助你一臂之力的.');
                                    }, 27000);
                                } else if (namelist.includes('qw_tls')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_tls') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        d.say('.......................');
                                    }, 1000);
                                    setTimeout(function () {
                                        d.say('...你来训练场做什么？');
                                    }, 3500);
                                    setTimeout(function () {
                                        d.say('这里不是小孩子待的地方.');
                                    }, 6000);
                                    setTimeout(function () {
                                        player.say('我不是小孩子.');
                                    }, 8500);
                                    setTimeout(function () {
                                        d.say('好...那就好好努力吧.');
                                    }, 11000);
                                    setTimeout(function () {
                                        d.say('像你这么嚣张的人,一般都死得很快.');
                                    }, 13500);
                                } else if (namelist.includes('qw_yiliya')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_yiliya') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        d.say('原来你就是传闻中找到时光之影的人…');
                                    }, 1000);
                                    setTimeout(function () {
                                        d.say('听说你在招募队友？');
                                    }, 3500);
                                    setTimeout(function () {
                                        d.say('我也是调查团的人…不过最好不要带上我.');
                                    }, 6000);
                                    setTimeout(function () {
                                        player.say('为什么？');
                                    }, 8500);
                                    setTimeout(function () {
                                        d.say('因为我很弱…');
                                    }, 11000);
                                    setTimeout(function () {
                                        d.say('而且运气也很差…我总是会给别人带来厄运.');
                                    }, 13500);
                                    setTimeout(function () {
                                        d.say('明白了吗？我已经警告过你了.');
                                    }, 16500);
                                    setTimeout(function () {
                                        player.say('一起去吧');
                                    }, 19000);
                                    setTimeout(function () {
                                        d.say('…你有没有在听我说话？');
                                    }, 21500);
                                    setTimeout(function () {
                                        d.say('不要相信我,我自己都不相信自己.');
                                    }, 24000);
                                } else if (namelist.includes('qw_fenghuang')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_fenghuang') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        d.say('哈欠~这个世界好无聊啊.以前还挺有意思的…');
                                    }, 1000);
                                    setTimeout(function () {
                                        player.say('…以前？');
                                    }, 3500);
                                    setTimeout(function () {
                                        d.say('在过去的<那个>年代…');
                                    }, 6000);
                                    setTimeout(function () {
                                        d.say('也就是本尊!伟大的凤凰诞生的时候!');
                                    }, 8500);
                                    setTimeout(function () {
                                        d.say('那个时候真的…发生过很多有意思的事情.');
                                    }, 11000);
                                    setTimeout(function () {
                                        d.say('如果你能启动钟楼,或许就可以知道了.哈哈!');
                                    }, 14000);
                                    setTimeout(function () {
                                        d.say('所以努力找出时光之影吧!');
                                    }, 16500);
                                } else if (namelist.includes('qw_gtzx')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_gtzx') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        d.say('你来这里有什么事吗？');
                                    }, 1000);
                                    setTimeout(function () {
                                        d.say('抱歉我要守着这个门,请你到别处去.');
                                    }, 3500);
                                    setTimeout(function () {
                                        player.say('这是什么门？');
                                    }, 6000);
                                    setTimeout(function () {
                                        d.say('听说是80年前的遗迹.');
                                    }, 8500);
                                    setTimeout(function () {
                                        d.say('虽然现在已经无法使用了.');
                                    }, 11000);
                                    setTimeout(function () {
                                        player.say('不能用了还要守着？');
                                    }, 14000);
                                    setTimeout(function () {
                                        d.say('这是我接到的任务.');
                                    }, 16500);
                                    setTimeout(function () {
                                        d.say('我们佣兵的铁律就是不要质疑任务.');
                                    }, 19000);
                                } else if (namelist.includes('qw_qiaoyi')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_qiaoyi') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        d.say('我会一直盯着你的.');
                                    }, 1000);
                                } else if (namelist.includes('qw_haila') || namelist.includes('qw_hl&sln')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_haila' || c.name == 'qw_hl&sln') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    var hlsln = ['海拉', '赛琳娜'].randomGet();
                                    setTimeout(function () {
                                        d.say('<font color=#FF7F00>海拉</font>:你好!你就是露西吧？');
                                    }, 1000);
                                    setTimeout(function () {
                                        d.say('<font color=#00FFFF>赛琳娜</font>:你好,露西…');
                                    }, 2800);
                                    setTimeout(function () {
                                        player.say('长的一模一样…');
                                    }, 5500);
                                    setTimeout(function () {
                                        d.say('<font color=#00FFFF>赛琳娜</font>:当然了,我们是双胞胎嘛…');
                                    }, 8000);
                                    setTimeout(function () {
                                        d.say('<font color=#FF7F00>海拉</font>:不对!并不是一模一样.');
                                    }, 11000);
                                    setTimeout(function () {
                                        d.say('<font color=#FF7F00>海拉</font>:我比她更漂亮一些!');
                                    }, 13500);
                                    setTimeout(function () {
                                        d.say('<font color=#00FFFF>赛琳娜</font>:没有吧…');
                                    }, 16000);
                                    setTimeout(function () {
                                        d.say('<font color=#FF7F00>海拉</font>:你觉得呢？谁更漂亮？');
                                    }, 18300);
                                    setTimeout(function () {
                                        player.say('' + hlsln + '');
                                    }, 21300);
                                    if (hlsln == '海拉') {
                                        setTimeout(function () {
                                            d.say('<font color=#FF7F00>海拉</font>:你看!');
                                        }, 23900);
                                        setTimeout(function () {
                                            d.say('<font color=#00FFFF>赛琳娜</font>:............');
                                        }, 26300);
                                        setTimeout(function () {
                                            d.say('<font color=#FF7F00>海拉</font>:哈哈,我开玩笑的!赛琳娜也好看.');
                                        }, 29100);
                                    } else {
                                        setTimeout(function () {
                                            d.say('<font color=#00FFFF>赛琳娜</font>:嘿嘿嘿…');
                                        }, 23700);
                                        setTimeout(function () {
                                            d.say('<font color=#FF7F00>海拉</font>:什么？你要不要戴个眼镜？');
                                        }, 26300);
                                        setTimeout(function () {
                                            d.say('<font color=#00FFFF>赛琳娜</font>:............');
                                        }, 29200);
                                    }
                                }
                            },
                        },
                        qw_gtzxxy: {
                            trigger: {
                                global: 'gameStart',
                            },
                            filter(event, player) {
                                for (var a of game.filterPlayer()) {
                                    if (a != player && a.name.indexOf('qw_') == 0 && a.name != 'qw_sanhua' && a.name != 'liuzhen' && a.name != 'qw_luxi1' && a.name != 'qw_luxi') return true;
                                }
                            },
                            prompt: '是否查看相遇对话',
                            check(event, player) {
                                return false;
                            },
                            content() {
                                var namelist = [];
                                for (var a of game.filterPlayer()) {
                                    namelist.push(a.name);
                                }
                                if (namelist.includes('qw_haiyin')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_haiyin') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        d.say('就这种程度的盾牌,可挡不住我的刀刃.');
                                    }, 1000);
                                    setTimeout(function () {
                                        player.say('你想试试吗？');
                                    }, 3500);
                                } else if (namelist.includes('qw_xisi')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_xisi') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        d.say('铠甲可没有办法用针线缝补呀…');
                                    }, 1000);
                                    setTimeout(function () {
                                        player.say('别担心,这个铠甲绝对不会破的.');
                                    }, 3500);
                                } else if (namelist.includes('qw_leilin')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_leilin') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        d.say('这个人…把我套上的保护罩全部用来攻击了.');
                                    }, 1000);
                                    setTimeout(function () {
                                        player.say('哈哈!');
                                    }, 3500);
                                } else if (namelist.includes('qw_lian')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_lian') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        player.say('用你的大剑用力砍一下我的铠甲.');
                                    }, 1000);
                                    setTimeout(function () {
                                        d.say('...你认真的吗？');
                                    }, 3500);
                                    setTimeout(function () {
                                        player.say('我有信心.');
                                    }, 6000);
                                } else if (namelist.includes('qw_xefst')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_xefst') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        player.say('我负责前方,你负责后方…');
                                    }, 1000);
                                    setTimeout(function () {
                                        player.say('你不觉得这是绝佳的组合吗？');
                                    }, 3500);
                                    setTimeout(function () {
                                        d.say('虽然我并不需要谁的保护.');
                                    }, 6000);
                                } else if (namelist.includes('qw_prst')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_prst') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        player.say('普瑞斯特,别想着输出,你那点伤害根本没用,好好给我治疗.');
                                    }, 1000);
                                    setTimeout(function () {
                                        d.say('真是个有趣的人,呵呵.');
                                    }, 3500);
                                } else if (namelist.includes('qw_kalun')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_kalun') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        d.say('你知道吗？就算是再坚固的铠甲和盾牌,也无法守护住灵魂…');
                                    }, 1000);
                                    setTimeout(function () {
                                        player.say('有意思,我倒想试试是不是真的如此.');
                                    }, 4000);
                                    setTimeout(function () {
                                        d.say('我开玩笑的,别当真!');
                                    }, 6500);
                                } else if (namelist.includes('qw_huizi')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_huizi') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        player.say('为什么鞭子打在铠甲上也能回复?');
                                    }, 1000);
                                    setTimeout(function () {
                                        d.say('这个装备的设计就是这样的~');
                                    }, 3500);
                                } else if (namelist.includes('qw_qiaoyi')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_qiaoyi') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        d.say('大叔,我给你装的空调怎么样？?');
                                    }, 1000);
                                    setTimeout(function () {
                                        player.say('多亏了你的空调,我感觉特别凉爽,谢谢你.');
                                    }, 3500);
                                    setTimeout(function () {
                                        player.say('不过,这个要怎么关？我现在觉得有点冷.');
                                    }, 6000);
                                    setTimeout(function () {
                                        d.say('...哎呀,我给忘记了.');
                                    }, 8500);
                                } else if (namelist.includes('qw_tls')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_tls') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        player.say('速度再快,没有力量也是不行的.');
                                    }, 1000);
                                    setTimeout(function () {
                                        d.say('...钢铁之心,你知道动能吗？');
                                    }, 3500);
                                } else if (namelist.includes('qw_yiliya')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_yiliya') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        player.say('我记得你以前是个很傲慢的人.');
                                    }, 1000);
                                    setTimeout(function () {
                                        d.say('那时候的我已经死了.');
                                    }, 3500);
                                } else if (namelist.includes('qw_fenghuang')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_fenghuang') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        player.say('这里怎么会有一只鸟？');
                                    }, 1000);
                                    setTimeout(function () {
                                        d.say('怎么还有一个罐头在这里？');
                                    }, 3500);
                                } else if (namelist.includes('qw_haila') || namelist.includes('qw_hl&sln')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_haila' || c.name == 'qw_hl&sln') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    var hlsln = ['海拉', '赛琳娜'].randomGet();
                                    if (hlsln == '海拉') {
                                        setTimeout(function () {
                                            d.say('<font color=#FF7F00>海拉</font>:大叔,我的太阳光是不是把你弄热了？');
                                        }, 1000);
                                        setTimeout(function () {
                                            player.say('哈哈,没关系,我这里面有空调设备.');
                                        }, 3500);
                                        setTimeout(function () {
                                            d.say('太假了吧…');
                                        }, 6000);
                                    } else {
                                        setTimeout(function () {
                                            d.say('月亮之力吗？看起来好像很弱的样子.');
                                        }, 1000);
                                        setTimeout(function () {
                                            d.say('<font color=#00FFFF>赛琳娜</font>:确,确实…毕竟不是用来攻击的…');
                                        }, 3500);
                                    }
                                }
                            },
                        },
                        qw_yiliyaxy: {
                            trigger: {
                                global: 'gameStart',
                            },
                            filter(event, player) {
                                for (var a of game.filterPlayer()) {
                                    if (a != player && a.name.indexOf('qw_') == 0 && a.name != 'qw_sanhua' && a.name != 'liuzhen' && a.name != 'qw_luxi1' && a.name != 'qw_luxi') return true;
                                }
                            },
                            prompt: '是否查看相遇对话',
                            check(event, player) {
                                return false;
                            },
                            content() {
                                var namelist = [];
                                for (var a of game.filterPlayer()) {
                                    namelist.push(a.name);
                                }
                                if (namelist.includes('qw_haiyin')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_haiyin') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        d.say('伊利亚,我现在比你强多了.');
                                    }, 1000);
                                    setTimeout(function () {
                                        player.say('确实…你说的没错…');
                                    }, 3500);
                                    setTimeout(function () {
                                        player.say('海因的确很强…很帅.');
                                    }, 6000);
                                    setTimeout(function () {
                                        d.say('什,什么…？');
                                    }, 8500);
                                } else if (namelist.includes('qw_xisi')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_xisi') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        d.say('我是西斯,现在还是新人,请多关照.');
                                    }, 1000);
                                    setTimeout(function () {
                                        player.say('新人？我能给你一个忠告吗？');
                                    }, 3500);
                                    setTimeout(function () {
                                        player.say('最好不要太过相信自己…');
                                    }, 6000);
                                    setTimeout(function () {
                                        d.say('没关系,因为我有伊芙!');
                                    }, 8500);
                                } else if (namelist.includes('qw_leilin')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_leilin') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        player.say('蕾琳的药水很棒,有人生的苦味…');
                                    }, 1000);
                                    setTimeout(function () {
                                        d.say('你当它是咖啡吗？');
                                    }, 3400);
                                } else if (namelist.includes('qw_lian')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_lian') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        d.say('喂,现在可以回到以前的你了吧？');
                                    }, 1000);
                                    setTimeout(function () {
                                        d.say('你是调查团非常宝贵的战斗力,自信一点.');
                                    }, 3500);
                                    setTimeout(function () {
                                        player.say('不…我不想重蹈覆辙…');
                                    }, 6500);
                                } else if (namelist.includes('qw_xefst')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_xefst') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        player.say('果然还是和平的生活最棒吧…？');
                                    }, 1000);
                                    setTimeout(function () {
                                        d.say('完全同意.');
                                    }, 3500);
                                } else if (namelist.includes('qw_prst')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_prst') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        d.say('如果你有什么事,我一定帮你.');
                                    }, 1000);
                                    setTimeout(function () {
                                        player.say('嗯…!');
                                    }, 3500);
                                } else if (namelist.includes('qw_prst')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_prst') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        d.say('如果你有什么事,我一定帮你.');
                                    }, 1000);
                                    setTimeout(function () {
                                        player.say('嗯…!');
                                    }, 3500);
                                } else if (namelist.includes('qw_kalun')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_kalun') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        d.say('呜哇哇!完了!我们死定了!');
                                    }, 1000);
                                    setTimeout(function () {
                                        player.say('你在干嘛…？');
                                    }, 3500);
                                    setTimeout(function () {
                                        d.say('我在模仿伊利亚.');
                                    }, 6000);
                                    setTimeout(function () {
                                        player.say('..........');
                                    }, 8500);
                                } else if (namelist.includes('qw_huizi')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_huizi') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        d.say('不要躲着鞭子,我不会害自己人的.');
                                    }, 1000);
                                    setTimeout(function () {
                                        player.say('疼…!好疼…!');
                                    }, 3500);
                                } else if (namelist.includes('qw_gtzx')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_gtzx') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        d.say('我记得你以前是个很傲慢的人.');
                                    }, 1000);
                                    setTimeout(function () {
                                        player.say('那时候的我已经死了.');
                                    }, 3500);
                                } else if (namelist.includes('qw_qiaoyi')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_qiaoyi') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        d.say('能不能不要哭哭啼啼的？吵死了.');
                                    }, 1000);
                                    setTimeout(function () {
                                        player.say('我知道了…对不起…');
                                    }, 3500);
                                } else if (namelist.includes('qw_tls')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_tls') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        player.say('你这样总是单独行动,迟早会遇上麻烦的.');
                                    }, 1000);
                                    setTimeout(function () {
                                        d.say('不要紧,我不是一个自负的人.');
                                    }, 3500);
                                } else if (namelist.includes('qw_fenghuang')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_fenghuang') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        d.say('伊利亚君,给我烤个面包吧~');
                                    }, 1000);
                                    setTimeout(function () {
                                        player.say('啊,突然好想吃炸鸡…');
                                    }, 3500);
                                } else if (namelist.includes('qw_haila') || namelist.includes('qw_hl&sln')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_haila' || c.name == 'qw_hl&sln') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    var hlsln = ['海拉', '赛琳娜'].randomGet();
                                    if (hlsln == '海拉') {
                                        setTimeout(function () {
                                            d.say('<font color=#FF7F00>海拉</font>:你能操纵两种属性？有点过分吧!');
                                        }, 1000);
                                        setTimeout(function () {
                                            d.say('<font color=#FF7F00>海拉</font>:我也想同时操纵太阳和月亮!');
                                        }, 3500);
                                        setTimeout(function () {
                                            player.say('我倒是觉得专注一种的人更有魅力…');
                                        }, 6000);
                                    } else {
                                        setTimeout(function () {
                                            d.say('<font color=#00FFFF>赛琳娜</font>:雷和冰…你居然能同时操纵两种属性.');
                                        }, 1000);
                                        setTimeout(function () {
                                            d.say('<font color=#00FFFF>赛琳娜</font>:好厉害…');
                                        }, 3500);
                                        setTimeout(function () {
                                            player.say('准确的说,应该是雪,不是冰.');
                                        }, 6000);
                                    }
                                }
                            },
                        },
                        qw_xisixy: {
                            trigger: {
                                global: 'gameStart',
                            },
                            filter(event, player) {
                                for (var a of game.filterPlayer()) {
                                    if (a != player && a.name.indexOf('qw_') == 0 && a.name != 'qw_sanhua' && a.name != 'liuzhen' && a.name != 'qw_luxi1' && a.name != 'qw_luxi') return true;
                                }
                            },
                            prompt: '是否查看相遇对话',
                            check(event, player) {
                                return false;
                            },
                            content() {
                                var namelist = [];
                                for (var a of game.filterPlayer()) {
                                    namelist.push(a.name);
                                }
                                if (namelist.includes('qw_haiyin')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_haiyin') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        d.say('...我可以撕碎那个人偶吗？');
                                    }, 1000);
                                    setTimeout(function () {
                                        player.say('不,不可以 !');
                                    }, 3500);
                                } else if (namelist.includes('qw_leilin')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_leilin') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        player.say('其实在加入调查团之前,我也想过做一个研究员的…');
                                    }, 1000);
                                    setTimeout(function () {
                                        player.say('不过感觉不太适合我这种白痴,就放弃了,嘿嘿.');
                                    }, 3500);
                                    setTimeout(function () {
                                        d.say('才不是!我会随时欢迎你过来.');
                                    }, 6000);
                                } else if (namelist.includes('qw_gtzx')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_gtzx') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        player.say('铠甲可没有办法用针线缝补呀…');
                                    }, 1000);
                                    setTimeout(function () {
                                        d.say('别担心,这个铠甲绝对不会破的.');
                                    }, 3500);
                                } else if (namelist.includes('qw_qiaoyi')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_qiaoyi') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        d.say('我可以帮你把伊芙改造的更加强大.');
                                    }, 1000);
                                    setTimeout(function () {
                                        player.say('不,不用了,谢谢…');
                                    }, 3500);
                                } else if (namelist.includes('qw_lian')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_lian') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        d.say('我知道你很努力,不过有时也需要仔细看看周围.');
                                    }, 1000);
                                    setTimeout(function () {
                                        player.say('好的,我记住了.');
                                    }, 3500);
                                } else if (namelist.includes('qw_xefst')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_xefst') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        d.say('让你的伊芙做诱饵去引诱敌人,我来把他们射下来.');
                                    }, 1000);
                                    setTimeout(function () {
                                        player.say('不,不要拿伊芙当诱饵…');
                                    }, 3500);
                                } else if (namelist.includes('qw_prst')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_prst') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        player.say('普瑞斯特,这世界上真的有神吗？');
                                    }, 1000);
                                    setTimeout(function () {
                                        d.say('当然了,神永远在注视着我们.');
                                    }, 3500);
                                    setTimeout(function () {
                                        d.say('就像现在,你看,在西斯的背后…');
                                    }, 6000);
                                    setTimeout(function () {
                                        player.say('这,怎么回事,怎么突然变成恐怖片了!？');
                                    }, 8500);
                                } else if (namelist.includes('qw_huizi')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_huizi') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        d.say('好可爱的人偶.');
                                    }, 1000);
                                    setTimeout(function () {
                                        player.say('嘿嘿…谢谢你.');
                                    }, 3500);
                                    setTimeout(function () {
                                        d.say('西斯也很可爱呢!');
                                    }, 6000);
                                    setTimeout(function () {
                                        player.say('嗯？额…谢,谢谢你…');
                                    }, 8500);
                                } else if (namelist.includes('qw_tls')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_tls') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        player.say('特丽莎,你是怎么潜入法洛斯教团的？');
                                    }, 1000);
                                    setTimeout(function () {
                                        d.say('...这是商业机密.');
                                    }, 3500);
                                } else if (namelist.includes('qw_yiliya')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_yiliya') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        player.say('我是西斯,现在还是新人,请多关照.~');
                                    }, 1000);
                                    setTimeout(function () {
                                        d.say('新人？我能给你一个忠告吗？');
                                    }, 3500);
                                    setTimeout(function () {
                                        d.say('最好不要太过相信自己…');
                                    }, 6000);
                                    setTimeout(function () {
                                        player.say('没关系,因为我有伊芙!');
                                    }, 8500);
                                } else if (namelist.includes('qw_fenghuang')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_fenghuang') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        d.say('好想再吃一个面包啊…');
                                    }, 1000);
                                    setTimeout(function () {
                                        player.say('凤凰哥哥!我把我的面包分给你吧.');
                                    }, 2800);
                                    setTimeout(function () {
                                        d.say('哇哦!谢谢你!');
                                    }, 5500);
                                    setTimeout(function () {
                                        d.say('西斯真是太善良了,好感动…');
                                    }, 8000);
                                } else if (namelist.includes('qw_kalun')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_kalun') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        d.say('这个人偶是你做的吗？好可爱啊!');
                                    }, 1000);
                                    setTimeout(function () {
                                        player.say('等我们回到方舟,也帮你做一个吧？');
                                    }, 2800);
                                    setTimeout(function () {
                                        d.say('太好了!');
                                    }, 5500);
                                } else if (namelist.includes('qw_haila') || namelist.includes('qw_hl&sln')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_haila' || c.name == 'qw_hl&sln') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    var hlsln = ['海拉', '赛琳娜'].randomGet();
                                    if (hlsln == '海拉') {
                                        setTimeout(function () {
                                            d.say('<font color=#FF7F00>海拉</font>:能把伊芙借给我吗？嗨呀,好可爱.');
                                        }, 1000);
                                        setTimeout(function () {
                                            player.say('别,别太粗暴…');
                                        }, 3500);
                                        setTimeout(function () {
                                            d.say('<font color=#FF7F00>海拉</font>:啊,对不起…烧掉了一点点.');
                                        }, 7000);
                                        setTimeout(function () {
                                            player.say('呜呜呜!不可以~!');
                                        }, 9500);
                                    } else {
                                        setTimeout(function () {
                                            d.say('<font color=#00FFFF>赛琳娜</font>:伊芙…好可爱…是我喜欢的类型…嘿嘿嘿.');
                                        }, 1000);
                                        setTimeout(function () {
                                            player.say('需要我给你做一个吗…？');
                                        }, 3500);
                                    }
                                }
                            },
                        },
                        qw_fenghuangxy: {
                            trigger: {
                                global: 'gameStart',
                            },
                            filter(event, player) {
                                for (var a of game.filterPlayer()) {
                                    if (a != player && a.name.indexOf('qw_') == 0 && a.name != 'qw_sanhua' && a.name != 'qw_liuzhen' && a.name != 'qw_luxi1' && a.name != 'qw_luxi') return true;
                                }
                            },
                            prompt: '是否查看相遇对话',
                            check(event, player) {
                                return false;
                            },
                            content() {
                                var namelist = [];
                                for (var a of game.filterPlayer()) {
                                    namelist.push(a.name);
                                }
                                if (namelist.includes('qw_haiyin')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_haiyin') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        d.say('要是到了危急关头,就把那个鸟烤了吃!嘿嘿嘿…');
                                    }, 1000);
                                    setTimeout(function () {
                                        player.say('噗哈哈,每次看到他变成这样都好想笑.');
                                    }, 4000);
                                } else if (namelist.includes('qw_xisi')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_xisi') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        player.say('好想再吃一个面包啊…');
                                    }, 1000);
                                    setTimeout(function () {
                                        d.say('凤凰哥哥!我把我的面包分给你吧.');
                                    }, 2800);
                                    setTimeout(function () {
                                        player.say('哇哦!谢谢你!');
                                    }, 5500);
                                    setTimeout(function () {
                                        player.say('西斯真是太善良了,好感动…');
                                    }, 8000);
                                } else if (namelist.includes('qw_leilin')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_leilin') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        d.say('谢谢你,凤凰.');
                                    }, 1000);
                                    setTimeout(function () {
                                        player.say('哪里哪里,应该是我谢谢你才对!');
                                    }, 3500);
                                } else if (namelist.includes('qw_lian')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_lian') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        player.say('莉安总是给我很多帮助~!');
                                    }, 1000);
                                    setTimeout(function () {
                                        player.say('有你在真是太好了,嘿嘿.');
                                    }, 3500);
                                    setTimeout(function () {
                                        d.say('我好像并没有做什么吧.');
                                    }, 6000);
                                } else if (namelist.includes('qw_xefst')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_xefst') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        d.say('凤凰,我以前是不是见过你？');
                                    }, 1000);
                                    setTimeout(function () {
                                        player.say('怎么了？');
                                    }, 3500);
                                    setTimeout(function () {
                                        d.say('我好像在哪儿见过你,真是怪事.');
                                    }, 6000);
                                    setTimeout(function () {
                                        player.say('…那应该是你的错觉.');
                                    }, 9000);
                                } else if (namelist.includes('qw_prst')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_prst') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        player.say('嘿,普瑞斯特!别信仰什么神了,信仰我如何？');
                                    }, 1000);
                                    setTimeout(function () {
                                        d.say('听说…凤凰被打的时候好像也会疼唉…');
                                    }, 3500);
                                    setTimeout(function () {
                                        d.say('(拿出手杖)');
                                    }, 6000);
                                    setTimeout(function () {
                                        player.say('啊…救命啊!');
                                    }, 8000);
                                } else if (namelist.includes('qw_huizi')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_huizi') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        player.say('给我一块面包我就不吃你.');
                                    }, 1000);
                                    setTimeout(function () {
                                        d.say('信不信我把你做成炸鸡？');
                                    }, 3500);
                                } else if (namelist.includes('qw_tls')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_tls') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        player.say('我是伟大的凤凰,快来赞颂我吧!');
                                    }, 1000);
                                    setTimeout(function () {
                                        d.say('喂,小鸡,给我安静点.');
                                    }, 3500);
                                } else if (namelist.includes('qw_yiliya')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_yiliya') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        player.say('伊利亚君,给我烤个面包吧~');
                                    }, 1000);
                                    setTimeout(function () {
                                        d.say('啊,突然好想吃炸鸡…');
                                    }, 3500);
                                } else if (namelist.includes('qw_gtzx')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_gtzx') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        d.say('这里怎么会有一只鸟？');
                                    }, 1000);
                                    setTimeout(function () {
                                        player.say('怎么还有一个罐头在这里？');
                                    }, 3500);
                                } else if (namelist.includes('qw_qiaoyi')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_qiaoyi') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    setTimeout(function () {
                                        d.say('凤凰,你究竟是什么来历？');
                                    }, 1000);
                                    setTimeout(function () {
                                        player.say('无知的家伙,我就是传说中的百鸟之王,凤!凰!');
                                    }, 3500);
                                    setTimeout(function () {
                                        d.say('唉…我就不该搭理你.');
                                    }, 6000);
                                } else if (namelist.includes('qw_haila') || namelist.includes('qw_hl&sln')) {
                                    for (var c of game.filterPlayer()) {
                                        if (c.name == 'qw_haila' || c.name == 'qw_hl&sln') {
                                            var d = c;
                                            break;
                                        }
                                    }
                                    var hlsln = ['海拉', '赛琳娜'].randomGet();
                                    if (hlsln == '海拉') {
                                        setTimeout(function () {
                                            player.say('原来你也用火啊!');
                                        }, 1000);
                                        setTimeout(function () {
                                            d.say('<font color=#FF7F00>海拉</font>:这不是一般的火,是太阳的火!');
                                        }, 3500);
                                        setTimeout(function () {
                                            player.say('我就是传说中的百鸟之王,凤凰!');
                                        }, 6000);
                                        setTimeout(function () {
                                            d.say('<font color=#FF7F00>海拉</font>:这个对话是不是有点跳跃？');
                                        }, 8500);
                                    } else {
                                        setTimeout(function () {
                                            player.say('这个月光…我快撑不下去了…');
                                        }, 1000);
                                        setTimeout(function () {
                                            d.say('<font color=#00FFFF>赛琳娜</font>:怎,怎么了…？');
                                        }, 3500);
                                        setTimeout(function () {
                                            player.say('浑身乏力,感觉要睡着了… ZZZ…');
                                        }, 6000);
                                        setTimeout(function () {
                                            d.say('<font color=#00FFFF>赛琳娜</font>:这,不是催眠魔法…!');
                                        }, 8500);
                                    }
                                }
                            },
                        },
                    },
                    translate: {
                        //角色
                        ark_King_0: '被遗忘的王',
                        ark_sfzl: '束缚之链',
                        ark_shzz: '守护之柱',
                        qw_an: '安',
                        qw_Binahmax: '加里翁',
                        qw_Binah: 'Binah',
                        qw_zero: '零',
                        qw_enkidu: '恩奇都',
                        qw_altriac: '阿尔托莉雅·卡斯特',
                        qw_altriac_ab: '阿尔托莉雅',
                        qw_fcjx: '绯村剑心',
                        qw_wuheqinli: '五河琴里',
                        qw_yln: '伊蕾娜',
                        qw_hope: '霍普',
                        qw_morse: '摩耳斯',
                        qw_hope_ab: '无名妖精',
                        qw_gmyd: '鬼面幽蝶',
                        qw_xdyd: '喜多郁代',
                        qw_ydzhx: '伊地知虹夏',
                        qw_stl: '山田凉',
                        qw_htd: '后藤独',
                        qw_cibei: '慈悲',
                        qw_ylmt: '尤莉米特',
                        qw_ruanyu: '阮羽',
                        qw_ruanyan: '阮颜',
                        qw_yisake: '伊萨克',
                        qw_sihuang: '司篁',
                        qw_Yan: '阳·比斯莫克',
                        qw_Yan_ab: '阳',
                        qw_argalia: '阿尔加利亚',
                        ark_firedochi: '火刺猬',
                        ark_thunderdochi: '电刺猬',
                        ark_firewarlock: '火焰术士',
                        ark_icewarlock: '寒冰术士',
                        ark_thunderwarlock: '雷电术士',
                        ark_jianshi: '监视者',
                        ark_sleepdochi: '睡刺猬',
                        ark_summoner: '召唤者',
                        ark_greenguard: '绿色守卫',
                        ark_yellowguard: '黄色守卫',
                        qw_flsjz: '法洛斯教主',
                        qw_Dorchi: '多尔希爵士',
                        Dorchi_Sword: '森林之剑',
                        qw_npro: '女仆人偶',
                        qw_zsro: '执事人偶',
                        qw_monv: '魔女',
                        qw_qiaoyi: '乔伊',
                        qw_gtzx: '钢铁之心',
                        'qw_hl&sln': '海拉&赛琳娜',
                        qw_xefst: '西尔弗斯坦',
                        qw_liuzhen: '柳真',
                        qw_luxi: '露西',
                        qw_prst: '普瑞斯特',
                        qw_kalun: '卡伦',
                        qw_sanhua: '散华',
                        qw_huizi: '卉子',
                        qw_tls: '特丽莎',
                        qw_yiliya: '伊利亚',
                        qw_haila: '海拉',
                        qw_sailinna: '赛琳娜',
                        qw_sailinna: '赛琳娜',
                        qw_haila: '海拉',
                        xs: '迅速',
                        qw: '普通',
                        qw_wy: '位移',
                        qw_luxi1: '露西(剑圣)',
                        qw_luxi1_ab: '露西',
                        qw_fenghuang: '凤凰',
                        qw_haiyin: '海因',
                        qw_xisi: '西斯',
                        qw_leilin: '蕾琳',
                        qw_lian: '莉安',
                        qw_azar: '阿扎尔',
                        //技能
                        ark_chengjie: '惩戒',
                        ark_liren: '利刃突进',
                        ark_king: '被遗忘的王',
                        ark_king_info: 'C¾ð¾î ¼Ò°³.¾ð¾î¶ó°Ë°í ÀÖÁö¤ÈÈ÷´°¡ ¸¸µé¾ú´ Áö´ ÀúµÎ Àß ¸ð¸¨´Ï´Ù.C¾ð¾î¶õ °ÍÀº ¾ÆÁÖ °­· ÇÑ ±â´ÉÀ» °¡Áø ÇÁ·Î±×·¡¹Ö ¾ð¾î ÀÔ´Ï´ÙC¾ð¾î°¡ Unix¿î¿µÃ¼Á¦ ÇÏ¿¡¼­ ½Ã½ºÅÛ ÇÁ·Î±×·¡¹ÖÀ» ÇÏ±â À§ÇØ °³¹ßµÈ',
                        qw_ss: '时逝',
                        qw_ss_info: '回合技,转换技:当你使用牌指定目标或成为牌的目标时.<br>阳:你可令此牌无法响应并获得此牌.<br>阴:你可取消之并令使用者回复一点体力.',
                        qw_sushi: '回溯',
                        qw_sushi_info: '一名角色回合开始时,你可选择任意一名角色,该角色回合结束时将体力值与手牌数调整至回合开始时;若该角色为你,则你于此回合结束时失去一点体力上限.',
                        qw_yl: '妖灵',
                        qw_yl_info: '锁定技,你的回合内,其他角色的锁定技改为非锁定技',
                        qw_sjdl: '世界的调律者',
                        qw_sjdl_info: '锁定技,牌堆顶的前四牌对你可见,你可将其如手牌般使用或打出,你使用牌无距离与次数限制.你获得技能改为获得一点体力与体力上限.',
                        qw_z: '柱',
                        qw_z_info: '锁定技,你受到伤害后可以立即使用一张牌.',
                        qw_zj: '震击',
                        qw_zj_info: '锁定技,出牌阶段限一次,你可以选择一种牌名,将除你外的场上所有角色与牌堆中的所有同名牌置入弃牌堆,因此失去牌的角色受到其失去牌数的伤害.',
                        qw_l: '链',
                        qw_l_info: '锁定技,其他角色不因主要阶段或卡牌的效果回复体力、造成伤害、获得牌,或使用没有对应同名实体牌的卡牌时.该结算无效之.',
                        qw_s: '锁',
                        qw_s_info: '锁定技,当你对其他角色造成伤害后,你令伤害来源非锁定技失效并横置直至其解除横置.',
                        qw_lhzz: '劣化之柱',
                        qw_lhzz_info: '锁定技,你受到伤害后可以立即使用一张牌.',
                        qw_lhzj: '劣化震击',
                        qw_lhzj_info: '锁定技,出牌阶段限一次,你可以选择一种牌名,将除你外的场上所有角色与牌堆中的所有同名牌置入弃牌堆.',
                        qw_lhzs: '劣化之锁',
                        qw_lhzs_info: '锁定技,当你对其他角色造成伤害后,你令伤害来源非锁定技失效并横置直至其解除横置.',
                        qw_bwzdl: '不完整的调律者',
                        qw_bwzdl_info: '锁定技,牌堆顶的前两牌对你可见,你可将其如手牌般使用或打出.你的出牌次数+你的体力值.',
                        qw_bwzdl1: '调律',
                        qw_bwzdl2: '牌堆底',
                        qw_lzzn: '笼中之鸟',
                        qw_lzzn_info: '你使用牌指定目标时,若此牌指定了多个目标,其可以交给你一张牌令此牌增加/取消一个目标.此牌结算后若你没有因此获得牌,你失去此技能并修改<生命赞礼>',
                        qw_smzl: '生命赞礼',
                        qw_smzl_info: '每回合限一次,出牌阶段或有人濒死时,你可以流失一点体力视为对所有其他角色使用一张桃园结义.',
                        qw_swcm: '死亡触摸',
                        qw_swcm_info: '生命值高你的角色无法响应你的牌,你造成的伤害视为吸血.',
                        ark_qzld: '球状雷电',
                        ark_qlhy: '球状火焰',
                        ark_huoqiu: '火球',
                        ark_dghs: '电光火石',
                        ark_sleep: '睡刺猬',
                        ark_zhaohuan: '召唤',
                        ark_js: '监视',
                        qw_bianrong: '变容',
                        qw_bianrong_info: '准备阶段 你可以将12点数值分配给本轮的以下几项(消耗值为对应序号) ①手牌上限 ②出杀数 ③摸牌阶段额外摸牌数 ④重铸所有牌 ⑤回复生命值',
                        qw_tzs: '天之锁',
                        qw_tzs_info: '你对其他角色造成伤害时令其横置,横置的角色对你使用牌时可弃置一张并解除横置,否则此牌对你失效.',
                        qw_mzrz: '民之睿智',
                        qw_mzrz_info: "<a class='ark_wuzhuang' href=\"javascript:game.ark_daskillTips('出牌阶段仅一次可以主动武装化,武装化的情况下武装技失效,武装进入弃牌堆时移除游戏并回复武装技.','0');\">武装技</a> 「弃牌堆中的任意装备牌」;你可以将一张装备牌当做杀或闪使用或打出",
                        qw_yyzz: '预言之子',
                        qw_yyzz_info: '每回合限一次,你的手牌变动至四张时,若你的手牌的花色均不相同,你摸1张牌并令本技能摸牌数+1(至多+5)',
                        qw_AroundCaliburnc: '希望之星',
                        qw_AroundCaliburnc_info: '你使用或打出一张牌后,若你没有此花色的手牌,你可以重铸一张牌并令一名本轮未选择过的角色回复一点体力,你本轮手牌上限+1.',
                        qw_badao: '拔刀',
                        qw_badao_info: '你失去武器后,可以视为使用一张杀.',
                        qw_langke: '浪客',
                        qw_langke_info: '当前角色回合结束时,若其对你或你攻击范围内的角色造成过伤害,你可以使用一张只能指定自己或该角色的牌.',
                        qw_niren: '逆刃',
                        qw_niren_info: '你造成伤害时,可以取消之并令其选择一项 ①跳过下个出牌阶段 ②将一张武器牌交给你.<br>你本回合不能再对其使用牌.',
                        xb_xinsheng: '新生',
                        xb_xinsheng_info: '锁定技,你的所有手牌均视为【闪】 ',
                        xb_jiexi: '解析',
                        xb_jiexi_info: '锁定技,其他角色打出或使用牌时,你记录此牌名,若此牌的目标中有你,则此牌名的记录次数+1.当你成为其他角色【杀】或锦囊牌的目标时,你记录其一个技能. ',
                        xb_fuxian: '复现',
                        xb_fuxian_info: '当你需要使用或打出牌时,若该牌被记录次数不小2,你可以将你的手牌视为这张牌使用或打出,将该牌名记录次数-2 . ',
                        xb_weidian: '伪典',
                        xb_weidian_info: '出牌阶段限一次,若你记录了其他角色的技能,你可以选择其中一个,直到你的下回合开始时,你获得之.',
                        xb_quandian: '全典',
                        xb_quandian_info: '限定技,出牌阶段或当你处濒死阶段时,你可以将体力回复至3点,获得你记录的所有技能,你的下一个回合结束阶段失去这些技能并流失两点体力. ',
                        qw_yanmo: '炎魔',
                        qw_yanmo_info: '你造成或受到伤害时,可以弃置一张牌将其改为火焰伤害,你受到或造成火焰伤害时,摸一张牌.',
                        qw_jiangui: '歼鬼',
                        qw_jiangui_info: "<a class='ark_wuzhuang' href=\"javascript:game.ark_daskillTips('出牌阶段仅一次可以主动武装化,武装化的情况下武装技失效,武装进入弃牌堆时移除游戏并回复武装技.','0');\">武装技</a>,「灼烂歼鬼 斧」 「灼烂歼鬼 炮」,你造成火焰伤害后回复等量体力",
                        qw_zilian: '自恋',
                        qw_zilian_info: '你的牌可以指定自己为目标,你使用以自己为目标的牌后,若你的手牌不多体力上限,你摸一张牌.',
                        qw_zilian_append: '<font color=gray><i>那么,请回答,漫步在层崖峭壁的山岳地带,有着沉鱼落雁般美貌的魔女究竟是谁呢？<p align="right">——没错,就是十八岁的我</p></i></font>',
                        qw_mofa: '魔法',
                        qw_mofa_info: '你每使用四张牌后,可以将任意张牌当做字数不少这些牌字数和的任意牌使用,以此法使用牌时,你可以将此牌对至多x名角色的效果改为构成此牌的一张牌.(x为转化的牌数)',
                        qw_lvxing: '旅行',
                        qw_lvxing_info: '回合开始时,你可以重铸所有牌.',
                        qw_AroundCaliburn: '环抱着你的希望之星',
                        qw_AroundCaliburn_info: '你死亡或更换武将牌后,你选择一名‘向导’选择过的角色,该角色免疫下一次受到的致命伤害.',
                        qw_hunluan: '混乱',
                        qw_hunluan_info: '你始终处混乱状态',
                        qw_hpzuzhou: '诅咒',
                        qw_hpzuzhou_info: '你的前【0】张牌对你不可见,当你累计摸牌不小你的体力上限时,你令【】中的数字+1并重置你此技能的摸牌数.<br>你的不可见牌等你的体力上限时,你将武将牌替换为‘摩耳斯’',
                        qw_xiangdao: '向导',
                        qw_xiangdao_info: '每轮开始时,你选择一名其他角色并清除以此法选择过的角色,该角色需要使用一张牌时,可以将一张牌当做你手牌中未隐藏的一张非装备牌使用并摸一张牌,你须使用或重铸此牌.',
                        qw_guidui: '归队',
                        qw_guidui_info: '当你的明置牌多暗置牌时,你失去此技能获得「合奏」',
                        qw_shanyao: '闪耀',
                        qw_shanyao_info: '你除初始手牌外的红色牌牌均明置之<br>若你的明置牌多暗置牌,你使用明置牌时摸一张牌<br>当你的明置牌不多暗置牌时,你的明置牌不计入手牌上限.',
                        visible_shanyao: '闪耀',
                        qw_zhumeng: '逐梦',
                        qw_zhumeng_info: '你受到过伤害的回合结束时,你将手牌数补至体力上限',
                        qw_tianshi: '天使',
                        qw_tianshi_info: '其他角色因弃置而失去牌时,你可以交给其一张手牌并令其摸一张牌;若你此法失去最后一张手牌,你受到一点伤害.',
                        qw_myps: '魅影婆娑',
                        qw_myps_info: '当你需要使用或打出闪时,若你的体力值与手牌数均小当前回合角色,你可以视为使用或打出之',
                        qw_guao: '孤僻',
                        qw_guao_info: '当你成为卡牌的目标时,若此牌指定了多个目标,你可以弃置一张牌取消之',
                        qw_qichao: '乞钞',
                        qw_qichao_info: '当你失去最后一张手牌时,可以令一名角色交给你一张牌',
                        qw_hero: '英雄',
                        qw_hero_info: '你回合内登场时,令本回合「社恐」失效且「合奏」🃏限制',
                        qw_shekong: '社恐',
                        qw_shekong_info: '隐匿技,你使用牌指定目标时,需要弃置一张牌,否则对其失效;你未造成伤害的回合结束时,你隐匿',
                        qw_hezou: '合奏',
                        qw_hezou_info: '你可以将一张对应花色的牌当作未以此法使用过的任意牌使用或打出,回合开始时,你刷新使用过的牌名.<br>后藤独:♠️️<br>山田凉:♣️️<br>伊地知虹夏:♦️️<br>喜多郁代:♥️️',
                        qw_dengjie: '登阶',
                        qw_dengjie_info: '限定技,你增加一点体力上限并回复一点体力,从「红颜」,「英姿」,「绝境」中选择一个技能获得.',
                        qw_beimin: '悲悯',
                        qw_beimin_info: '你的♥️️牌均视为桃园结义',
                        qw_jiushu: '救赎',
                        qw_jiushu_info: '一名角色进入濒死阶段时,你可以立即摸一张牌并进行一个出牌阶段,若该角色在本回复体力后体力值不小0,你获得或重置登阶.<br><li>此阶段结束时,若该角色体力值不大0,你翻面',
                        qw_jqddf: '精巧的刀法',
                        qw_jqddf_info: '你没有判定阶段,你的牌无次数限制',
                        qw_chaofeng: '嘲讽',
                        qw_chaofeng_info: '敌方角色只能指定你为目标',
                        qw_yddro: '移动的人偶',
                        qw_yddro_info: '回合开始时,若无人偶存活,你召唤「执事人偶」与「女仆人偶」,否则你随机强化一个人偶',
                        qw_tkdzz: '痛苦的诅咒',
                        qw_tkdzz_info: '第一名玩家回合开始时,获得一张「痛苦诅咒」',
                        qw_xzpz: '血之屏障',
                        qw_xzpz_info: '你除濒死外回复体力时,改为获得一点护盾,你的手牌上限+你的护盾数',
                        qw_juedou: '决斗',
                        qw_juedou_info: '出牌阶段限一次,你可以将任意一张牌视为决斗使用.以此法使用的决斗结算后,若目标体力值为满或为1.你刷新此技能使用次数',
                        qw_cjzd: '惩戒之盾',
                        qw_cjzd_info: '当你造成伤害时,可以失去所有护盾令此次伤害+你的护盾数/2.(向上取整)',
                        qw_hdcn: '护盾充能',
                        qw_hdcn_info: '限定技,持续两回合,其他角色回复体力时,你获得一点护盾',
                        qw_gdhx: '过度呼吸/疲惫不堪',
                        qw_gdhx_info: '①每当你失去四张牌时,你摸两张牌<br>②当你因①中的效果累计获得4张牌时,你翻面<br>(若你已翻面则不会触发此效果)',
                        qw_xszy: '现死之眼/心力交悴',
                        qw_xszy_info: '①你造成的伤害+4<br>②你造成的伤害-3',
                        qw_szzq: '手足之情/精疲力尽',
                        qw_szzq_info: '①你受到伤害或体力流失时,你摸一张牌<br>②游戏开始时,你流失3/4的体力值(向下取整)',
                        qw_zmyd: '正面迎敌',
                        qw_zmyd_info: '每回合限一次,当你需要使用或打出一张闪时,你可以使用或打出之',
                        qw_ssjx: '生死界限',
                        qw_ssjx_info: '出牌阶段限一次,你可以弃置四张牌视为使用一张无距离限制的杀,此杀伤害有1/4的概率为4,你每次脱离濒死都会使这个概率+1/4',
                        qw_zghs1_info: '',
                        qw_mf: '魔法',
                        qw_mf_info: '',
                        qw_choupai: '抽牌',
                        qw_choupai_info: '你的摸牌阶段结束以及受到伤害后,你抽「一张牌」</font>',
                        qw_jiasuSkill: '加速',
                        qw_jiasuSkill_info: '',
                        qw_yy: '应援',
                        qw_yy_info: '出牌阶段限一次,你可以将一到两张手牌交给其他角色',
                        qw_ahxtSkill: '暗黑形态',
                        qw_ahxtSkill_info: '',
                        qw_xyfb: '信仰法棒',
                        qw_xyfb_info: '当你为其他角色回复体力时,若你装备了武器,你可以改为造成等量伤害;当你造成伤害时,若你没有武器,你可以改为令其回复等量体力',
                        qw_sdcf: '神的赐福',
                        qw_sdcf_info: '你的♥️️牌均视为桃,你的桃可对其他角色使用',
                        qw_ceshi: '测试',
                        qw_ceshi_info: '',
                        qw_yujian: '预见',
                        qw_yujian_info: '你摸牌时<br>①少摸一张牌<br>②查看牌堆顶的三张牌并选择其中一张获得之,此牌获得「预见」增益.<br>「预见」:若此牌为<br>基本牌:此牌可额外指定一个目标<br>锦囊牌:此牌使用前额外结算一次<br>装备牌:此牌使用时摸一张牌',
                        qw_sdqs: '神的启示',
                        qw_sdqs_info: '当其他角色脱离濒死时,你可以令其执行一次预见②',
                        qw_snjsd: '送你见上帝',
                        qw_snjsd_info: '当你造成伤害后,若你装备了武器牌,你可以弃置此牌对其造成两点伤害',
                        qw_lhcs: '灵魂蚕食',
                        qw_lhcs_info: '回合开始时,你可以选择一至两名角色,令这些角色将一张牌至其武将牌上称之为<灵魂蚕食>(目标无牌则置入牌堆顶的两张牌),若此时该角色<灵魂蚕食>中的花色数>=其体力值,你获得该角色<灵魂蚕食>中所有花色牌各一张,其失去一点体力上限.<br>你已此法令其他角色累计失去两点体力上限时,获得一张「灵魂香炉」',
                        qw_cs1: '灵魂蚕食',
                        qw_cs1_info: '',
                        qw_hamy: '黑暗蔓延',
                        qw_hamy_info: '一名角色死亡时,若该角色有<灵魂蚕食>,你令一名与该角色距离为1的角色继承其剩余的所有<灵魂蚕食>',
                        qw_hapz: '黑暗屏障',
                        qw_hapz_info: '回合结束时,你可以失去一点体力上限并获得一点护盾,当你受到伤害时,若你拥有护盾,你令伤害来源将一张手牌至<灵魂蚕食>牌中',
                        qw_hszs: '荒时之锁',
                        qw_hszs_info: '荒时之锁',
                        qw_xszs: '序时之匙',
                        qw_xszs_info: '序时之匙',
                        qw_zghs: '主观缓时',
                        qw_zghs_info: '',
                        qw_zghs1: '主观缓时',
                        qw_zghs1_info: '',
                        qw_mlh: '曼莲华',
                        qw_mlh_info: '你的♠️️牌均视为冰杀,你的♠️️杀无距离限制且命中目标时会为目标添加一层<冰棘>.<br> 「冰棘」:回合结束或被引爆时失去所有层数',
                        qw_nby: '凝冰意',
                        qw_nby_info: '当你使用或打出一张牌时,你记录此牌点数并清除你记录的第一个点数. 你使用点数在［x,y］之内的牌无次数限制,且此牌造成伤害时会引爆目标的<冰棘>,造成等同目标「冰棘」数的冰属性伤害.<br> 「冰棘」在消失或引爆时,你摸一张牌<br> (x,y为本技能的记录点数,技能初始记录为［0,0］)',
                        qw_sxyd: '朔雪永冻',
                        qw_sxyd_info: '限定技,当你脱离濒死后才可以使用,出牌阶段开始时,你可以重铸任意张牌,令本回合引爆<冰棘>时不会减少层数',
                        qw_zhizhao: '支招',
                        qw_zhizhao_info: '三回合限一次<br> ①你选择一名角色,选择该角色的一个技能,另一名角色获得此技能直到其回合结束<br> ②在凤凰的炫酷能力中添加‘飞翔’<br> ‘飞翔‘:使用后你的攻击距离和防御距离+2,持续三轮',
                        qw_dd: '等待',
                        qw_dd_info: '出牌阶段限一次,使用此技能后场上其他角色可依次使用一张牌并令你使用杀的次数+1(至多+4),你可以弃置自己的一张牌.回合结束时,你摸本回合使用此技能的次数的牌(最多将手牌摸至体力上限)',
                        qw_yysn: '预言少女',
                        qw_yysn_info: '当你获得手牌时,你清除你手牌中的「位移」增益并为你获得的最后一张牌赋予「位移」增益;当你使用带有「位移」增益的牌时,本回合使用「等待」的次数+1',
                        qw_xjwy: '迅捷位移',
                        qw_xjwy_info: '回合结束时,你可以使用x张无距离限制的<杀>(x为本回合使用「等待」的次数),以此法使用的杀伤害为0.5且不会立即结算伤害.此技能结束时结算所有伤害(造成的伤害向上取整)',
                        qw_ffz: '放风筝',
                        qw_ffz_info: '你的回合内不因使用或打出而失去牌时,你摸一张牌;你的回合外,你每使用或打出一张牌时,你摸一张牌',
                        qw_bsn: '不死鸟',
                        qw_bsn_info: '对伟大的凤凰来说,根本不存在无法战斗状态好嘛.<br> ①锁定技,凤凰不会死亡,当凤凰血量不大0时会处饥饿状态,饥饿状态下使用手牌无法指定其他角色为目标,若饥饿状态持续了两轮或以上,你在回合结束时将自己移出游戏<br> ②凤凰无法通过面包和自身技能以外的方式回复体力<br>③游戏开始时,你在牌堆中加入8张‘面包’,当你处饥饿状态时,你使用面包后将体力回复至0<br> ④其他角色死亡时,你获得一张‘面包’  ‘面包’:使用后为自己回复一点体力',
                        qw_xknl: '凤凰的炫酷能力',
                        qw_xknl_info: '每回合限一次,你可以使用一种炫酷能力(固定能力:‘盯’‘啄’)<br> ‘盯’:选择一名角色,另其获得技能‘看什么看’ ,你受到该角色的伤害时解除所有效果<br> ‘啄’:选择一名角色对其造成一点伤害<br>‘看什么看!’造成的伤害+1且使用牌只能指定你为目标',
                        qw_mbxhj: '面包消化剂',
                        qw_mbxhj_info: '限定技,若你拥有此技能,你使用面包后回复一点体力并摸一张牌,使用此技能后在凤凰的炫酷能力中添加‘找面包’和‘扔面包’并移除此技能 <br> ‘找面包’:基础20%+场上存活玩家数量*20概率获得一个面包<br> ‘扔面包’:弃置一张面包,摸一张牌并对选择一名角色造成一点伤害,你的下回合开始时获得此面包',
                        qw_xxyx: '休息一下!',
                        qw_xxyx_info: '限定技,回合结束时你失去此技能.你的第三个回合开始时,你可以使用此技能,使用后后失去除‘不死鸟‘以外的所有技能,并获得技能‘不灭的火花’<br> ‘不灭的火花’:随机对场上的一名角色造成一点伤害,重复此操作直到一名角色因此伤害进入濒死状态',
                        '看什么看!': '看什么看!',
                        '看什么看!_info': '使用牌只能指定凤凰为目标,造成的所有伤害+1,造成伤害时移除此技能',
                        不灭的火花: '不灭的火花',
                        不灭的火花_info: '限定技,对随机一名角色造成一点火焰伤害,直到有角色因此伤害进入濒死状态',
                        qw_tljx: '体力极限',
                        qw_tljx_info: '当你流失体力时,你获得对应值的体力极限,当你有体力极限时,你的回复量翻倍并失去等同回复值的体力极限,你的回复量不大你的体力极限',
                        qw_kq: '狂气',
                        qw_kq_info: '当你造成伤害令角色进入濒死阶段时,你对所有其他角色造成此次伤害一半的伤害(向上取整)',
                        qw_wjdfn: '无尽的愤怒',
                        qw_wjdfn_info: '出牌阶段不限次数,你可以流失一点体力,弃置一张牌,对一名角色造成一点伤害',
                        qw_xzxc: '血债血偿',
                        qw_xzxc_info: '每回合限一次,你可以对一名角色使用一张杀,此杀的伤害为1+你本局流失体力和受到伤害的和,当此杀造成伤害时,你失去此技能',
                        qw_xfxy: '腥风血雨',
                        qw_xfxy_info: '你每击杀一名角色,获得一点体力极限和体力上限,回复一点体力',
                        qw_royf: '人偶伊芙',
                        qw_royf_info: '战斗开始时,西斯携带着伊芙.一名角色使用牌后,若此牌目标包括该角色,你可以另伊芙移动至该角色并增加一次攻击次数.当带有伊芙的角色使用牌指定除你和该角色以外的单一目标后,此牌结算后,你可以对该目标使用一张杀.以此法使用的杀伤害为0.5',
                        qw_smzx: '生命之线',
                        qw_smzx_info: '拥有伊芙的角色回合结束时回复一点体力',
                        qw_yfzz: '伊芙助战!',
                        qw_yfzz_info: '出牌阶段,你可以弃置x张牌,选择一名角色,另伊芙移动至该角色,若此时伊芙的攻击次数为0,伊芙的攻击次数+1,该角色摸一张牌.(x为你本回合发动此技能的次数)',
                        qw_qiege: '切割',
                        qw_qiege_info: '每回合限一次,当你的伊芙造成伤害时,你可以弃置一张牌另受到此伤害的角色流失一点体力',
                        qw_hsyf: '回收伊芙',
                        qw_hsyf_info: '回合结束时,你可以回收场上的伊芙并获得等同伊芙攻击次数的牌;当其他带有伊芙的角色使用牌指定你为目标前,你可以令伊芙回到自己身上',
                        qw_mydxt: '命运的线团',
                        qw_mydxt_info: '限定技,当你进入濒死阶段时,你可以回收场上的伊芙并回复等同伊芙攻击次数+1的体力值,立即结束当前角色的出牌阶段',
                        qw_mbwszh: '莫比乌斯之环',
                        qw_mbwszh_info: '限定技,出牌阶段,你可以选择一名角色,你与其获得效果:当手牌小5时,将手牌补充至5张,持续至各自的回合结束',
                        qw_zhuangbei: '装备制作',
                        qw_zhuangbei_info: '出牌阶段限一次,你可以弃置一张牌并获得一张牌堆中的指定类型的装备牌,你可以另一名角色装备此牌',
                        qw_lxqx: '龙型曲线',
                        qw_lxqx_info: '每回合限一次,当你造成伤害后,你可以将手牌弃置至三张,弃置一名角色等量的牌',
                        qw_zyzh: '治愈之弧',
                        qw_zyzh_info: '回合结束时,你可以选择一名其他角色,其回复一点体力,若其未受伤你摸一张牌',
                        qw_gedang: '格挡',
                        qw_gedang_info: '格挡:每回合限两次,当你使用牌指定其他单一角色时,你可以赋予此牌‘格挡’增益,并为此牌附加x点倒计时(x为此牌点数*存活人数/2)<br>倒计时:你使用带有倒计时的牌时不会立即结算,每当有角色使用牌时,倒计时-1.<br>‘格挡’:当你带有格挡增益的牌处倒计时时,若此牌目标对其他角色造成伤害,你将该伤害转移至你并获得一点护盾,你立即对该角色使用此牌,倒计时结束时,你使用此牌并摸两张牌',
                        qw_fangong: '反攻',
                        qw_fangong_info: '每回合限一次,当你受到伤害后,若你的手牌数不大伤害来源的手牌数,你可以对其使用一张杀',
                        qw_sbkd: '势不可挡',
                        qw_sbkd_info: '当你使用杀时,你可以弃置一张牌令此杀无法响应',
                        qw_nadao: '纳刀',
                        qw_nadao_info: '回合开始时,你选择装备雷鸣刀或雪月刀(可同时装备),你无法装备其他武器<br>每回合限两次,当你不以自己的技能使用牌后可以弃置自己一张牌',
                        qw_leimingdao_skill: '雷鸣刀',
                        qw_leimingdao_skill_info: '',
                        qw_xueyuedao_skill: '雪月刀',
                        qw_xueyuedao_skill_info: '',
                        qw_lmzbd: '雷鸣斩-拔刀',
                        qw_lmzbd_info: '当你装备雷鸣刀时才可使用.当你失去最后一张牌时,你可以使用一张雷杀',
                        qw_fljlw: '飞雷剑-乱舞',
                        qw_fljlw_info: '',
                        qw_bingshuang: '冰霜',
                        qw_bingshuang_info: '',
                        qw_ydzcx: '月刀斩初雪',
                        qw_ydzcx_info: '当你装备雪月刀才时可使用.<br>每回合限一次,其他角色使用牌指定你为单一目标时,你可以对其使用一张冰杀<br>若此杀命中<br>①其拥有冰霜,你令其使用的牌无效<br>②若其没有冰霜,其获得一层冰霜',
                        qw_bxntd: '冰雪凝天地',
                        qw_bxntd_info: '限定技,出牌阶段,你可令所有‘冰霜’层数>=2的角色清空冰霜层数并翻面',
                        qw_fxyhy: '飞雪映寒夜',
                        qw_fxyhy_info: '当你失去最后一张手牌时,你可以令至多两名角色获得一层冰霜<br>「冰霜」:回合结束时带有冰霜的角色流失一点体力并减少一层冰霜',
                        qw_sxlds: '霜雪雷电闪',
                        qw_sxlds_info: '限定技,同时装备「雷鸣刀」和「雪月刀」才可以发动,选择一名血量<=1的角色,该角色立即死亡',
                        qw_shuangzi: '双子',
                        qw_shuangzi_info: '游戏开始时,若你为海拉,你召唤副将赛琳娜,若你为赛琳娜,你召唤主将海拉',
                        qw_tyby: '太阳暴雨',
                        qw_tyby_info: "你每使用或打出红色牌时会增加一个'日'标记,当日标记>=3时,你可以亮出牌堆顶的x张牌并选择一名角色,根据其中红色牌的点数之和除以10(向下取整)重复对其造成1点火焰伤害<br>x为'日'标记的数量",
                        qw_mygy: '满月光晕',
                        qw_mygy_info: "你每使用或打出黑色牌时会增加一个'月'标记,当月标记>=3时,你可以亮出牌堆顶的x张牌并选择一名角色,根据其中黑色牌的点数之和除以10(向下取整)重复为其回复1点体力<br>x为'月'标记的数量",
                        qw_guance: '观测',
                        qw_guance_info: '出牌阶段,你可以展示牌堆顶的第三张牌',
                        qw_moon: '月光帷幕',
                        qw_moon_info: '当你为角色回复体力时,为目标添加一层「月光帷幕」.<br>「月光帷幕」:受到伤害时,获得一点护盾并移除一层标记',
                        qw_ttdl: '天体队列',
                        qw_ttdl_info: '限定技,出牌阶段,你可以查看牌堆顶的三张牌并使用之',
                        qw_sun: '日炎',
                        qw_sun_info: '当你造成火焰伤害时,为目标添加一层「日炎」.<br>「日炎」:受到火焰伤害时,伤害+1并移除一层此标记',
                        qw_zuzhi: '阻止',
                        qw_zuzhi_info: '每回合限两次,其他角色使用牌指定单一目标且不为该角色本身为目标时,你可以将一张牌至武将牌上称之为鞭,令此牌延迟到该角色下回合开始时结算',
                        qw_aizb: '爱之鞭',
                        qw_aizb_info: '当一名角色进入濒死时,你可以移去一张‘鞭’,若此牌为红色,其回复一点体力,若为黑色,其流失一点体力',
                        qw_zybh: '治愈鞭痕',
                        qw_zybh_info: '锁定技,当你对一名角色造成伤害时,为其附加持续两回合的‘治愈鞭痕’<br>治愈鞭痕:回合结束时流失一点体力,回复体力的回复量翻倍',
                        qw_hlbybz: '胡萝卜与鞭子',
                        qw_hlbybz_info: '出牌阶段限一次,你可以移去一张‘鞭’并选择施暴者与受害者,施暴者受到你的一点伤害,施暴者对受害者使用一张杀和决斗,若以此使用的牌造成伤害,使用者回复一点体力,你摸一张牌',
                        qw_yingzfs: '影子分身',
                        qw_yingzfs_info: '你每使用五张牌时,进入影子分身状态<br>"影子分身":你可令你的下一张基本或锦囊牌可额外结算一次,并退出此状态(你以此技能使用的牌不会叠加影子分身)',
                        qw_anycx: '暗影重现',
                        qw_anycx_info: '锁定技,其他角色的结束阶段开始时,你可以弃置一张手牌视为使用一张该角色本回合出牌阶段内使用过的基本牌或普通锦囊牌',
                        qw_anyz: '暗影斩',
                        qw_anyz_info: '当你使用杀造成伤害前,若该角色未受伤,你在此杀结束后可再次使用一张无距离限制的杀.(以此法使用的杀不会触发此技能)',
                        qw_yzwm: '影子帷幕',
                        qw_yzwm_info: '当你处影子分身状态时,其他人无法使用杀指定你为目标',
                        qw_ys: '影身',
                        qw_ys_info: '每回合限一次,当你使用一张牌后,你获得一张同花色的影.',
                        qw_ym: '影幕',
                        qw_ym_info: '你不会成为与你手牌中<影>花色相同的<杀>的目标.',
                        qw_cx: '重现',
                        qw_cx_info: '你可将一张影当做本回合使用过的牌使用或打出;除你外的角色回合结束时,你可以使用一张牌.',
                        qw_cskfz: '超时空方舟',
                        qw_lunwai: '鸣潮',
                        qw_fm: '粉末',
                        qw_player: '粉末',
                        qw_target: '粉末',
                        qw_fxtsg: '废墟图书馆',
                        qw_yq: '永远的7日之都',
                        qw_seer: '赛尔号',
                        qw_qysj: '群友设计',
                        qw_gdyg: '<img style=height:25px src=extension/超时空方舟/image/gdyg.jpg>',
                        qw_zuzhou: '诅咒',
                        qw_luxixy: '相遇',
                        qw_qita: '粉末',
                        qw_yiliyaxy: '相遇',
                        qw_fenghuangxy: '相遇',
                        qw_xisixy: '相遇',
                        qw_shijian: '拾剑',
                        qw_shijian_info: '回合开始时,若你的血量为1,你可以拾起一把木剑',
                        qw_jihuo: '集火',
                        qw_jihuo_info: '当你使用牌指定单一目标时,会赋予目标<集火>状态.<br> <集火>:其他角色对集火目标使用牌无距离限制,当集火目标受到伤害时,你对该目标追加一张杀(场上只能有一个集火目标)',
                        _jihuo: '集火',
                        _jihuo_info: 'undefined',
                        qw_qxjt: '枪械精通',
                        qw_qxjt_info: '回合开始时,你从【狙击】,【霰弹枪射击】,【极速射击】中选择一种效果持续至下回合开始<br> 狙击:<br> 当你使用杀指定目标时,你可以弃置一张牌令此杀强制命中且伤害+1<br>霰弹枪射击:<br> 你使用杀指定目标时,对所有与目标距离为1的角色追加一张杀<br>极速射击:<br> 你使用杀指定目标时,可以弃置x张牌追一张杀(x为此技能本轮的使用次数)',
                        qw_zzys: '制作药水',
                        qw_zzys_info: '出牌阶段,你随机获得两种粉末,你可以用两到三个粉末合成一瓶药水.你的粉末不计入你的手牌上限',
                        qw_wddcy: '舞动的草叶',
                        qw_wddcy_info: '玩家使用牌会使舞动的草叶移动一位',
                        qw_jjkj: '荆棘铠甲',
                        qw_jjkj_info: '每回合限一次,受到伤害时对伤害来源造成等量伤害',
                        qw_pihu: '森林之剑的庇护',
                        qw_pihu_info: '你的回合改为多尔希爵士执行',
                        qw_zytc: '正义突刺',
                        qw_zytc_info: '杀伤害+1,摸牌阶段额外摸两张牌',
                        qw_hyj: '幻影剑',
                        qw_hyj_info: '当有武器牌进入弃牌堆时,你将此牌置入你的s区中,称之为「幻影剑」,你无法直接使用或打出「幻影剑」中的非武器牌,你可以装备两张武器牌.<br>你可将「幻影剑」中的牌视为<杀>使用或打出',
                        qw_hysdys: '唤影术第一式',
                        qw_hysdys_info: '你每回合使用的第一张非「唤影」牌会为与此牌相邻的牌赋予「唤影」增益;当你使用或打出「唤影」牌时,你获得一张「幻影剑」',
                        qw_xymy: '新月斩/满月斩',
                        qw_xymy_info: '锁定技,转换技:<br>新月:你使用杀时获得一张「幻影剑」且此杀不计入次数<br>满月:你使用杀时弃置目标一张牌且伤害+1',
                        qw_jianmu: '剑幕',
                        qw_jianmu_info: '当你受到伤害后,你可以对伤害来源使用一张杀',
                        ark_zhipei: '支配',
                        ark_zhipei_info: '回合结束时随机支配一名角色,受支配的角色技能被封印且无法使用手牌指定你和你的随从为目标,对友方角色造成伤害时解除此效果',
                        ark_kbsw: '恐怖思维',
                        ark_kbsw_info: '除你外的角色回合结束时,流失等同该角色手牌数/3的体力值(向下取整)',
                        ark_jdfc: '服从命令!',
                        ark_jdfc_info: '你体力<=40时,回合结束时将交替使用<支配>与<服从命令!>(奇数轮次使用<支配>,偶数轮次使用<服从命令!>)<br>回合结束时随机将一名角色改为你的随从,并令其获得三层<绝对服从>,每次受到伤害减少一层,层数归零时回到玩家阵营',
                        qw_clcx: '苍蓝残响',
                        qw_clcx_info: '你受到来自你攻击范围外的角色的伤害-1',
                        qw_Allegro: 'Allegro',
                        qw_Allegro_info: '每回合限x次,当你使用牌指定目标时,你可以令目标获得y层<震颤>,你与其各摸y张牌.<br>(x为场上角色数,y为目标手牌与你使用的牌花色相同的牌的数量且至少为1)',
                        qw_Largo: 'Largo',
                        qw_Largo_info: '每回合限x次,当你成为其他角色使用牌的目标时,你令此牌的使用者获得y层<震颤>,你与其各摸y张牌.<br>(x场上角色数,y为你手牌与该角色使用的牌花色相同的牌的数量且至少为1)',
                        qw_xlgz: '心灵共振',
                        qw_xlgz_info: '当你使用牌指定其他角色时,若目标的手牌中存在与此牌点数差值不大x的牌,此牌结算后,你可以令目标震颤层数-1并再次对该角色使用此牌.<br>(x为目标的震颤层数,再次使用的牌为实体牌,花色点数随机.)',
                        qw_xlgz_append: '「<font color=blue><i>这座都市的乐章行将落幕……你们该捍卫自己的传说,不是么？</i></font>」',
                        qw_dszy: '都市之意',
                        qw_dszy_info: '每轮游戏开始时,生成一个指令(a对b使用用c,a、b均为随机角色且a不为自己,c为随机可用的非装备牌)<br>a的回合结束时,若其未完成指令且指令未被修改a流失三点体力.<br>a的出牌阶段可弃置x张牌以完成指令.(x为c的牌名字数)',
                        qw_zlzx: '执行指令',
                        qw_dszz: '都市之子',
                        qw_dszz_info: '当有指令被执行时,你获得一层扭曲并摸两张牌.<br>每轮游戏开始时,你可以修改指令内容',
                        qw_dszz_append: '「<font color=gray><i>所以我编造了虚假的指令,以为第一次展现了自己的意志.</i></font>」',
                        qw_nqzr: '扭曲之刃',
                        qw_nqzr_info: '你的杀回闪量+x且可多指定x名目标,x为你的扭曲层数',
                        qw_wd: '问道',
                        qw_wd_info: '锁定技:回合开始时,你减少一点体力上限并选择永久跳过你的 判定/摸牌/出牌/弃牌 中的一个阶段,令你所有技能「」中的数字+1;若你因此跳过所有阶段,「」中的数字额外+1',
                        qw_wd_append: '「<font><i>朝闻道,夕可死矣.</i></font>」',
                        qw_stfx: '司天伏邪',
                        qw_stfx_info: '一名角色进行判定时,你可以亮出牌堆顶「1」张牌并选择一张作为判定牌,你流失一点体力并获得剩余的牌.<br>一名角色的回合开始时,你可以弃置至多「0」张相同花色的牌并进行判定,若判定结果与弃置的牌花色相同,你视为对该角色使用以此法弃置的牌数量张随机伤害牌',
                        qw_wyzx: '五岳真形',
                        qw_wyzx_info: '你的防御距离+「0」',
                        qw_wwhs: '万物化生',
                        qw_wwhs_info: '限定技,出牌阶段,你可以选择至多一名角色并将体力值至为1,你与其免疫受到的致命伤害(包括流血),持续「0」轮',
                        qw_knzh: '狂怒之火',
                        qw_knzh_info: '当你造成伤害时,你获得目标一张牌,并尽可能对目标使用此牌;你以此法获得的红色牌视为火攻',
                        qw_zzql: '罪之囚笼',
                        qw_zzql_info: '回合结束时,根据你造成伤害的点数执行对应效果<br>=0:摸两张牌<br>>1:跳过下个出牌阶段<br>>2:跳过下个摸牌阶段',
                        qw_zhdxj: '拙火的献祭',
                        qw_zhdxj_info: '当你受到伤害时,你可以摸一张牌并横置至多x名角色(x为你已损失体力值且至少为1)',
                        qw_yjj: '御剑诀',
                        qw_yjj_info: '你弃牌时可无限制的使用弃牌中的一张杀.<br>你的杀结算后至目标的武将牌上称之为<剑>,每名角色至多放置一枚<剑>.<br>回合开始时,你可以收回任意角色上的<剑>',
                        qw_lsj: '落松诀',
                        qw_lsj_info: '每轮限一次,其他角色使用牌指定你为目标时,你可以弃置一张牌取消之',
                        qw_jltx: '剑翎天翔',
                        qw_jltx_info: '限定技,你可以与任意一名角色交换座次并使用一张杀,以此技能使用的牌结算后,若目标和与目标距离为1的角色武将牌上有「剑」,你可以对目标使用之.<br>你击杀角色后重置此技能',
                        qw_yjmark: '古剑・画影',
                        qw_ljj: '砺剑诀',
                        qw_ljj_info: '你的杀结算后至自己的武将牌上,称之为<剑>,你的攻击距离与杀的回闪量+x(x为你<剑>中的牌数)<br>摸牌阶段,你可以取消摸牌改为摸两张杀',
                        qw_ljmark: '名剑・腾空',
                        qw_huiyue: '挥月诀',
                        qw_huiyue_info: '每轮限一次,当你造成伤害后,你可以获得等量护甲',
                        qw_tgfs: '铁骨分山',
                        qw_tgfs_info: '当你受到伤害后,你可以将任意张「剑」当作杀对伤害来源使用<br>你的转化杀伤害等转化的牌数',
                        qw_qhmyg: '千华觅月歌',
                        qw_qhmyg_info: '当你的杀造成伤害时,你可以取消之并选择弃置目标两张牌或摸一张牌并交给其一至两张牌.<br><li>你的杀被闪避后失去此技能,令所有角色流失一点体力且此杀所有目标技能失效直到其回合结束',
                        qw_fxzms: '繁星赞美诗',
                        qw_fxzms_info: '你使用牌指定目标时,你可以取消任意目标并视为对他们使用一张杀.<br><li>若此杀指定了多个目标,你失去此技能',
                        qw_fzsh: '芳缀山河',
                        qw_fzsh_info: '每回合限一次,你的回合外,可以视为使用或打出一张闪或无懈可击.<br><li>当你受到其他角色的伤害后,你失去此技能并令所有角色回复一点体力',
                        qw_hmty: '辉弥天野',
                        qw_hmty_info: '你死亡后可令一名角色获得你武将牌上的第一个技能',
                        qw_zljg_f_skill: '歼鬼·斧',
                        qw_zljg_f_skill_info: '',
                        qw_zljg_p_skill: '歼鬼·炮',
                        qw_zljg_p_skill_info: '',
                    },
                    perfectPair: {}, //珠联璧合武将(选填)
                };
                //兼容问题
                if (!lib.config.extensions || !lib.config.extensions.includes('闪刀姬') || !lib.config['extension_闪刀姬_enable']) {
                    //搬闪刀坤换肤
                    //设置鼠标滚轮控制
                    window.mousewheel1 = ui.click.mousewheel;
                    //点击皮肤后执行换肤代码
                    window.replaceSkin = function () {
                        //获取角色名称
                        var name = this.dataset.name;
                        //获取当前皮肤数字ID
                        var num = parseInt(this.dataset.num);
                        if (num == NaN) num = this.dataset.num;
                        //如果皮肤数字ID与登记ID相同则终止结算以减少代码计算量增加流畅度
                        if ((lib.config.skin[name] || 0) == num) {
                            return;
                        }
                        //登记皮肤数字ID
                        if (num == 0) {
                            delete lib.config.skin[name];
                        } else {
                            lib.config.skin[name] = num;
                        }
                        //删除数据中原本的皮肤信息
                        for (var i = 0; i < lib.character[name][4].length; i++) {
                            if (lib.character[name][4][i].indexOf('ext:') == 0) {
                                lib.character[name][4].splice(i--, 1);
                            }
                        }
                        //根据新登记的数字ID生成皮肤信息
                        var src = 'ext:' + this.parentNode.dataset.pack + '/';
                        if (lib.config.skin[name]) {
                            src += 'skin/standard/' + name + '/' + lib.config.skin[name] + '.jpg';
                        } else {
                            src += name + '.jpg';
                        }
                        //预留接口没啥鸟用,但别动也别删
                        if (Array.isArray(lib.sg_skinInit)) {
                            for (var i = 0; i < lib.sg_skinInit.length; i++) lib.kp_skinInit[i]();
                        }
                        //将生成的皮肤信息推入数据中
                        lib.character[name][4].push(src);
                        //保存皮肤信息
                        game.saveConfig('skin', lib.config.skin);
                        //获取所有玩家与按钮
                        var nodes = [];
                        nodes.addArray(ui.window.querySelectorAll('.player'));
                        nodes.addArray(ui.window.querySelectorAll('.character'));
                        //更新所有玩家与按钮的皮肤信息
                        for (var i of nodes) {
                            if (i.name == name || i.name1 == name) {
                                i.node.avatar.setBackground(name, 'character');
                            }
                            if (i.name2 == name) {
                                i.node.avatar2.setBackground(name, 'character');
                            }
                            if (i.link == name) {
                                i.setBackground(name, 'character');
                            }
                        }
                    };
                    //增加皮肤函数必要参数为增加角色的ID与扩展名称
                    var addSkin = function (name, packname, callback) {
                        //设置皮肤信息
                        if (lib.config.skin[name]) {
                            var src = 'ext:' + packname + '/';
                            if (lib.config.skin[name]) {
                                src += 'skin/standard/' + name + '/' + lib.config.skin[name] + '.jpg';
                            } else {
                                src += name + '.jpg';
                            }
                            chronoark.character[name][4].push(src);
                        }
                        //初始化一个变量
                        var num = 1;
                        var createButtons = function (num) {
                            //一个皮肤也没有则终止函数以减少计算量并提高执行效率
                            if (num == 0) return;
                            //根据获取的皮肤列表生成元素
                            var src = '<div class="text center">更改皮肤</div><div class="buttons smallzoom scrollbuttons" data-pack="' + packname + '" onmousewheel="window.mousewheel1.apply(this,arguments)">';
                            for (var i = 0; i <= num; i++) {
                                src += '<div class="button character pointerdiv" onclick="window.replaceSkin.apply(this,arguments)" data-name="' + name + '" data-num="' + i + '" style="background-image:';
                                if (i) {
                                    src += "url('" + ('extension/' + packname + '/skin/standard/' + name + '/' + i + '.jpg') + "')";
                                } else {
                                    src += "url('" + ('extension/' + packname + '/image/' + name + '.jpg') + "')";
                                }
                                src += ';"></div>';
                            }
                            //回调函数没啥鸟用,但别动也别删
                            if (callback) callback(src, name, packname);
                            src += '</div>';
                            //将元素与武将称号合并
                            if (!lib.characterTitle[name]) {
                                lib.characterTitle[name] = '';
                            }
                            lib.characterTitle[name] += src;
                        };
                        //获取皮肤列表
                        var loadImage = function () {
                            var img = new Image();
                            img.onload = function () {
                                num++;
                                loadImage();
                            };
                            img.onerror = function () {
                                num--;
                                createButtons(num);
                            };
                            img.src = 'extension/' + packname + '/skin/standard/' + name + '/' + num + '.jpg';
                        };
                        loadImage();
                    };
                    //自动获取扩展名称
                    var packname = '超时空方舟';
                    //游戏开始前执行增加皮肤的函数
                    for (var i in chronoark.character) {
                        addSkin(i, packname);
                    }
                }
                for (var i in chronoark.character) {
                    chronoark.character[i][4].push('ext:超时空方舟/image/' + i + '.jpg');
                }
                lib.config.all.characters.add('超时空方舟');
                lib.config.characters.add('超时空方舟');
                lib.translate.超时空方舟_character_config = '超时空方舟';
                return chronoark;
            });
            game.import('card', function () {
                var 超时空方舟 = {
                    name: '超时空方舟',
                    connect: true,
                    card: {
                        qw_zljg_f: {
                            fullskin: true,
                            type: 'equip',
                            image: 'ext:超时空方舟/image/qw_zljg_f.jpg',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -1,
                                attackRange(card, player) {
                                    if (card.storage.qw_zljg === undefined) card.storage.qw_zljg = 2;
                                    return card.storage.qw_zljg;
                                },
                            },
                            skills: ['qw_zljg_f_skill'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                            },
                            toself: true,
                        },
                        qw_zljg_p: {
                            fullskin: true,
                            type: 'equip',
                            image: 'ext:超时空方舟/image/qw_zljg_p.jpg',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -5,
                            },
                            skills: ['qw_zljg_p_skill'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                            },
                            toself: true,
                        },
                        azar_sword: {
                            image: 'ext:超时空方舟/image/azar_sword.jpg',
                            fullborder: 'silver',
                            ai: {
                                basic: {
                                    value: 3,
                                },
                                result: {
                                    target: 2,
                                },
                            },
                        },
                        qw_bhcy: {
                            fullborder: 'bronze',
                            image: 'ext:超时空方舟/image/qw_bhcy.jpg',
                            enable: true,
                            type: 'trick',//QQQ
                            subtype: 'lucy',
                            selectTarget: [1, 3],
                            filterTarget(card, player, target) {
                                return target.name != 'qw_Dorchi' && target.name != 'qw_slzj';
                            },
                            content() {
                                target.addMark('qw_bhcy1', 2);
                            },
                        },
                        qw_tkzz: {
                            fullborder: 'bronze',
                            image: 'ext:超时空方舟/image/qw_tkzz.jpg',
                            enable: true,
                            subtype: 'qw_zuzhou',
                            type: 'trick',//QQQ
                            selectTarget: 1,
                            filterTarget(card, player, target) {
                                return target.name != 'qw_monv' && target.name != 'qw_npro' && target.name != 'qw_zsro';
                            },
                            content() {
                                target.addMark('qw_zuzhou');
                            },
                        },
                        qw_mingxiang: {
                            fullborder: 'bronze',
                            image: 'ext:超时空方舟/image/qw_mingxiang.jpg',
                            type: 'trick',
                            subtype: 'lucy',
                            enable: true,
                            toself: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            content() {
                                'step 0';
                                target.chooseCard('h', [1, Infinity]);
                                ('step 1');
                                if (result.bool) {
                                    event.cards = result.cards;
                                    target.chooseControl().set('prompt', '将这些牌').set('choiceList', ['与牌堆顶等量的牌交换(先选择的在上)', '置牌堆顶获得这些牌的复制(先选择的在上)']);
                                } else event.finish();
                                ('step 2');
                                if (result.index == 0) {
                                    target.draw(event.cards.length);
                                    target.$throw(event.cards, 1000);
                                    game.log(target, '将', event.cards, '置了牌堆顶');
                                    target.lose(event.cards, ui.cardPile, 'insert');
                                }
                                if (result.index == 1) {
                                    var list = [];
                                    for (var i of event.cards) {
                                        list.push(game.createCard(i.name, i.suit, i.number, i.nature));
                                    }
                                    target.gain(list);
                                    target.$throw(event.cards, 1000);
                                    game.log(target, '将', event.cards, '置了牌堆顶');
                                    target.lose(event.cards, ui.cardPile, 'insert');
                                }
                            },
                            ai: {
                                basic: {
                                    value: 10,
                                    useful: 17000000,
                                    order: 20,
                                },
                                result: {
                                    target: 2,
                                },
                            },
                        },
                        qw_zsgb: {
                            fullborder: 'bronze',
                            image: 'ext:超时空方舟/image/qw_zsgb.jpg',
                            type: 'trick',
                            subtype: 'lucy',
                            enable: true,
                            toself: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            prompt: '重铸任意张技能牌或其他牌',
                            content() {
                                'step 0';
                                target
                                    .chooseCard('h', [1, Infinity], function (card, player) {
                                        if (ui.selected.cards[0] != undefined) {
                                            if (get.subtype(ui.selected.cards[0]) == 'lucy') return get.subtype(card) == 'lucy';
                                            else return get.subtype(card) != 'lucy';
                                        } else return true;
                                    })
                                    .set('complexCard', true);
                                ('step 1');
                                if (result.bool) {
                                    var length = result.cards.length;
                                    if (get.subtype(result.cards[0]) == 'lucy') {
                                        if (
                                            result.cards.length ==
                                            target.getCards('h').filter(function (card) {
                                                return get.subtype(card) == 'lucy';
                                            }).length
                                        )
                                            length++;
                                        target.loseToDiscardpile(result.cards);
                                        var list = ['qw_diaoyu', 'qw_reshen', 'qw_zrfwmf', 'qw_shualai', 'qw_zonggong', 'qw_jiasu', 'qw_tiyi', 'qw_ahxt', 'qw_jsmfz', 'qw_knx', 'qw_zsgb', 'qw_mingxiang'];
                                        for (var a = 0; a < length; a++) {
                                            var card = game.createCard(list.randomGet());
                                            player.gain(card);
                                        }
                                    } else {
                                        if (
                                            result.cards.length ==
                                            target.getCards('h').filter(function (card) {
                                                return get.subtype(card) != 'lucy';
                                            }).length
                                        )
                                            length++;
                                        target.loseToDiscardpile(result.cards);
                                        player.draw(length);
                                    }
                                }
                            },
                            ai: {
                                basic: {
                                    value: 10,
                                    useful: 17000000,
                                    order: 20,
                                },
                                result: {
                                    target: 2,
                                },
                            },
                        },
                        qw_zrfwmf: {
                            fullborder: 'bronze',
                            image: 'ext:超时空方舟/image/qw_zrfwmf.jpg',
                            type: 'trick',
                            subtype: 'lucy',
                            enable: true,
                            toself: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            content() {
                                target.addTempSkill('qw_mf', { player: 'phaseBegin' });
                            },
                            ai: {
                                basic: {
                                    value: 10,
                                    useful: 17000000,
                                    order: 20,
                                },
                                result: {
                                    target: 2,
                                },
                            },
                        },
                        qw_shualai: {
                            fullborder: 'bronze',
                            image: 'ext:超时空方舟/image/qw_shualai.jpg',
                            type: 'trick',
                            subtype: 'lucy',
                            enable: true,
                            toself: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            content() {
                                'step 0';
                                event.num = 15;
                                ('step 1');
                                event.num--;
                                ('step 2');
                                if (target.countCards('h') < 6 && event.num > 0) {
                                    target.draw();
                                    event.goto(1);
                                }
                            },
                            ai: {
                                basic: {
                                    order(card, player) {
                                        if (player.getCards('h').length < 3) return 7;
                                        else if (player.getCards('h').length < 5) return 4;
                                        else return 1;
                                    },
                                    useful(card, player) {
                                        return 7;
                                    },
                                    value() {
                                        return get.order({ name: 'tao' }) - 0.1;
                                    },
                                },
                                result: {
                                    target: 2,
                                },
                            },
                        },
                        qw_zonggong: {
                            fullborder: 'bronze',
                            image: 'ext:超时空方舟/image/qw_zonggong.jpg',
                            type: 'trick',
                            subtype: 'lucy',
                            enable: true,
                            toself: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            async content(event, trigger, player) {
                                event.target.draw(2);
                                if (event.target.countCards('h')) {
                                    for (var a of event.target.getCards('h')) {
                                        if (event.target.hasUseTarget(a)) {
                                            await event.target.chooseUseTarget(a, true);
                                        }
                                    }
                                }
                            },
                            ai: {
                                basic: {
                                    value() {
                                        return get.order({ name: 'tao' }) - 0.1;
                                    },
                                    useful: 10006,
                                    order: 15,
                                },
                                result: {
                                    target: 2,
                                },
                            },
                        },
                        qw_szzdb: {
                            fullborder: 'bronze',
                            image: 'ext:超时空方舟/image/qw_szzdb.jpg',
                            type: 'equip',
                            subtype: 'equip5',
                            skills: ['watch', 'watch1', 'watch2'],
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                return target.canEquip(card, true);
                            },
                            selectTarget: 1,
                            toself: false,
                            content() {
                                if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                            },
                            ai: {
                                order: 9,
                                equipValue(card, player) {
                                    if (get.position(card) == 'e') return -2;
                                    return 2;
                                },
                                value(card, player) {
                                    if (player.getEquips(1).includes(card)) return -1.5;
                                    return 1.5;
                                },
                                basic: {
                                    equipValue: 5,
                                    order: 5,
                                    useful: 2,
                                    value: 5,
                                },
                                result: {
                                    keepAI: true,
                                    target(player, target) {
                                        var val = 2;
                                        var val2 = 0;
                                        var card = target.getEquip(5);
                                        if (card) {
                                            val2 = get.value(card, target);
                                            if (val2 < 0) return 0;
                                        }
                                        return -val - val2;
                                    },
                                },
                            },
                        },
                        qw_reshen: {
                            fullborder: 'bronze',
                            image: 'ext:超时空方舟/image/qw_reshen.jpg',
                            subtype: 'lucy',
                            type: 'trick',
                            enable: true,
                            toself: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            content() {
                                target.draw(5);
                                target.skip('phaseDraw');
                            },
                            ai: {
                                basic: {
                                    value() {
                                        return get.order({ name: 'tao' }) - 0.1;
                                    },
                                    useful() {
                                        return 10;
                                    },
                                    order: 10,
                                },
                                result: {
                                    target: 2,
                                },
                            },
                        },
                        qw_jiasu: {
                            fullborder: 'bronze',
                            image: 'ext:超时空方舟/image/qw_jiasu.jpg',
                            subtype: 'lucy',
                            type: 'trick',
                            enable: true,
                            toself: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            content() {
                                target.addTempSkill('qw_jiasuSkill');
                            },
                            ai: {
                                basic: {
                                    value(card, player) {
                                        var result = (function () {
                                            if (
                                                !game.hasPlayer(function (current) {
                                                    return get.distance(player, current) <= 1 && player.canUse('sha', current) && get.effect(current, { name: 'sha' }, player, player) > 0;
                                                })
                                            ) {
                                                return 1;
                                            }
                                            if (player.hasSha() && _status.currentPhase == player) {
                                                if ((player.getEquip('zhuge') && player.countUsed('sha')) || player.getCardUsable('sha') == 0) {
                                                    return 10;
                                                }
                                            }
                                            var num = player.countCards('h', 'sha');
                                            if (num > 1) return 6 + num;
                                            return 3 + num;
                                        })();
                                        return result;
                                    },
                                    useful(card, player) {
                                        var result = (function () {
                                            if (
                                                !game.hasPlayer(function (current) {
                                                    return get.distance(player, current) <= 1 && player.canUse('sha', current) && get.effect(current, { name: 'sha' }, player, player) > 0;
                                                })
                                            ) {
                                                return 1;
                                            }
                                            if (player.hasSha() && _status.currentPhase == player) {
                                                if ((player.getEquip('zhuge') && player.countUsed('sha')) || player.getCardUsable('sha') == 0) {
                                                    return 10;
                                                }
                                            }
                                            var num = player.countCards('h', 'sha');
                                            if (num > 1) return 6 + num;
                                            return 3 + num;
                                        })();
                                        return result;
                                    },
                                    order: 15,
                                },
                                result: {
                                    target: 2,
                                },
                            },
                        },
                        qw_knx: {
                            fullborder: 'bronze',
                            image: 'ext:超时空方舟/image/qw_knx.jpg',
                            type: 'trick',
                            subtype: 'lucy',
                            enable: true,
                            toself: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            content() {
                                var list = ['qw_diaoyu', 'qw_reshen', 'qw_zrfwmf', 'qw_shualai', 'qw_zonggong', 'qw_jiasu', 'qw_tiyi', 'qw_ahxt', 'qw_jsmfz', 'qw_knx', 'qw_czdbb', 'qw_szzdb', 'qw_zsgb', 'qw_mingxiang'];
                                for (var a = 0; a < 2; a++) {
                                    var card = game.createCard(list.randomGet());
                                    player.gain(card);
                                }
                            },
                            ai: {
                                basic: {
                                    value: 7,
                                    useful: 200000,
                                    order: 20,
                                },
                                result: {
                                    target: 2,
                                },
                            },
                        },
                        qw_diaoyu: {
                            fullborder: 'bronze',
                            image: 'ext:超时空方舟/image/qw_diaoyu.jpg',
                            type: 'trick',
                            subtype: 'lucy',
                            enable: true,
                            toself: true,
                            selectTarget: -1,
                            enable(event, player) {
                                if (!_status.connectMode) return ui.discardPile.childNodes.length;
                                else return true;
                            },
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            content() {
                                'step 0';
                                var source = ui.discardPile.childNodes;
                                var list = [];
                                for (var i = 0; i < source.length; i++) list.push(source[i]);
                                list = list.filter(function (card) {
                                    return card.name != 'qw_diaoyu';
                                });
                                target.chooseButton(['请选择要获得的牌', list], true).set('ai', function (button) {
                                    return get.value(button.link);
                                });
                                ('step 1');
                                if (result.bool) {
                                    target.gain(result.links[0]);
                                }
                            },
                            ai: {
                                basic: {
                                    value: 8,
                                    useful: 1600000,
                                    result: {
                                        player(player, target) {
                                            if (player.hasSkillTag('usedu')) return 5;
                                            return -1;
                                        },
                                    },
                                    order: 18.5,
                                },
                                result: {
                                    target: 2,
                                    player: 1,
                                },
                            },
                        },
                        qw_tiyi: {
                            fullborder: 'bronze',
                            image: 'ext:超时空方舟/image/qw_tiyi.jpg',
                            type: 'trick',
                            subtype: 'lucy',
                            enable: true,
                            toself: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            content() {
                                'step 0';
                                var source = ui.cardPile.childNodes;
                                var list = [];
                                for (var i = 0; i < source.length; i++) list.push(source[i]);
                                target.chooseButton(['请选择要置牌堆顶的牌', list], true).set('ai', function (button) {
                                    return get.value(button.link);
                                });
                                ('step 1');
                                if (result.bool) {
                                    var card = result.links[0];
                                    ui.cardPile.removeChild(card);
                                    ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
                                }
                                ('step 2');
                                target.draw();
                            },
                            ai: {
                                basic: {
                                    value: 6,
                                    useful: 1600000,
                                    result: {
                                        player(player, target) {
                                            if (player.hasSkillTag('usedu')) return 5;
                                            return -1;
                                        },
                                    },
                                    order: 18.5,
                                },
                                result: {
                                    target: 2,
                                    player: 2,
                                },
                            },
                        },
                        qw_ahxt: {
                            fullborder: 'bronze',
                            image: 'ext:超时空方舟/image/qw_ahxt.jpg',
                            subtype: 'lucy',
                            type: 'trick',
                            enable: true,
                            toself: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            content() {
                                target.addTempSkill('qw_ahxtSkill');
                            },
                            ai: {
                                basic: {
                                    value: 7,
                                    useful: 10000000,
                                    order: 17.5,
                                },
                                result: {
                                    target: 2,
                                },
                            },
                        },
                        qw_jsmfz: {
                            fullborder: 'bronze',
                            image: 'ext:超时空方舟/image/qw_jsmfz.jpg',
                            subtype: 'lucy',
                            ai: {
                                basic: {
                                    value(card, player) {
                                        if (player._zhuge_temp) return 1;
                                        player._zhuge_temp = true;
                                        var result = (function () {
                                            if (
                                                !game.hasPlayer(function (current) {
                                                    return get.distance(player, current) <= 1 && player.canUse('sha', current) && get.effect(current, { name: 'sha' }, player, player) > 0;
                                                })
                                            ) {
                                                return 6;
                                            }
                                            if (player.hasSha() && _status.currentPhase == player) {
                                                if ((player.getEquip('zhuge') && player.countUsed('sha')) || player.getCardUsable('sha') == 0) {
                                                    return 10;
                                                }
                                            }
                                            var num = player.countCards('h', 'sha');
                                            if (num > 1) return 7 + num;
                                            return 4 + num;
                                        })();
                                        delete player._zhuge_temp;
                                        return result;
                                    },
                                    useful: 6,
                                    order: 7.5,
                                },
                            },
                        },
                        qw_czdbb: {
                            fullborder: 'bronze',
                            image: 'ext:超时空方舟/image/qw_czdbb.jpg',
                            subtype: 'qw_zuzhou',
                            type: 'trick',
                            enable: true,
                            toself: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            content() {
                                target.draw(2);
                            },
                            ai: {
                                basic: {
                                    value: -4,
                                    useful: 10,
                                    order: 7.5,
                                },
                                result: {
                                    target: 2,
                                },
                            },
                        },
                        qw_leimingdao: {
                            fullborder: 'gold',
                            type: 'equip',
                            subtype: 'equip1',
                            image: 'ext:超时空方舟/image/qw_leimingdao.jpg',
                            distance: {
                                attackFrom: -1,
                            },
                            onLose() {
                                var next = game.createEvent('qw_leimingdao_recover');
                                event.next.remove(next);
                                var evt = event.parent;
                                if (evt.getlx === false) evt = evt.parent;
                                evt.after.push(next);
                                next.player = player;
                                next.setContent(function () {
                                    player.draw(2);
                                });
                            },
                            skills: ['qw_leimingdao_skill'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                            },
                            toself: true,
                        },
                        qw_xueyuedao: {
                            fullborder: 'silver',
                            image: 'ext:超时空方舟/image/qw_xueyuedao.jpg',
                            type: 'equip',
                            subtype: 'equip1',
                            onLose() {
                                var next = game.createEvent('qw_xueyuedao_recover');
                                event.next.remove(next);
                                var evt = event.parent;
                                if (evt.getlx === false) evt = evt.parent;
                                evt.after.push(next);
                                next.player = player;
                                next.setContent(function () {
                                    player.draw(2);
                                });
                            },
                            distance: {
                                attackFrom: -1,
                            },
                            skills: ['qw_xueyuedao_skill'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                            },
                            toself: true,
                            mod: {
                                cardnature(card, player) {
                                    if (get.color(card) == 'black' && card.name == 'sha') return 'ice';
                                },
                            },
                        },
                        linghunxianglu: {
                            image: 'ext:超时空方舟/image/linghunxianglu.jpg',
                            fullborder: 'bronze',
                            type: 'basic',
                            enable: true,
                            toself: true,
                            selectTarget: 1,
                            filterTarget(card, player, target) {
                                return true;
                            },
                            content() {
                                target.gainMaxHp();
                                target.recover(1);
                            },
                        },
                        mianbao: {
                            image: 'ext:超时空方舟/image/mianbao.jpg',
                            fullborder: 'bronze',
                            type: 'basic',
                            enable: true,
                            toself: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            content() {
                                target.recover(1);
                            },
                        },
                        qw_yaoshui: {
                            image: 'ext:超时空方舟/image/qw_yaoshui.jpg',
                            filterTarget: true,
                            enable: true,
                            fullborder: 'bronze',
                            type: 'special',//QQQ
                            ai: {
                                order: 11,
                                result: {
                                    player(card, player) {
                                        if (card.name == 'qw_yaoshui') {
                                            if (card.storage.qw_hffm > 0 || card.storage.qw_ryh > 0 || card.storage.qw_gangzhen > 0) {
                                                return 1;
                                            }
                                        }
                                    },
                                    target(card, player) {
                                        if (card.name == 'qw_yaoshui') {
                                            if (card.storage.qw_hffm > 0 || card.storage.qw_ryh > 0 || card.storage.qw_gangzhen > 0) {
                                                return 1;
                                            }
                                        }
                                        if (card.name == 'qw_yaoshui') {
                                            if (card.storage.qw_hyfm > 0 || card.storage.qw_jdmg > 0 || card.storage.qw_sgfm > 0) {
                                                return -1;
                                            }
                                        }
                                    },
                                },
                            },
                            selectTarget(card) {
                                if (card && card.storage && card.storage.qw_ylsp) return [1, 1 + card.storage.qw_ylsp * 2];
                                return [1, 1]; //QQQ
                            }, //如果chooseusetarget使用卡牌,卡牌的selecttaget参数都是undefined
                            content() {
                                'step 0';
                                if (card.storage.qw_tszy > 0 && target == targets[0]) {
                                    var a = 0;
                                    while (a != card.storage.qw_hffm) {
                                        a++;
                                        player.gain(game.createCard('qw_hffm'));
                                    }
                                    a = 0;
                                    while (a != card.storage.qw_jlfm + card.storage.qw_jlfmnum) {
                                        a++;
                                        player.gain(game.createCard('qw_jlfm'));
                                    }
                                    a = 0;
                                    while (a != card.storage.qw_jdmg) {
                                        a++;
                                        player.gain(game.createCard('qw_jdmg'));
                                    }
                                    a = 0;
                                    while (a != card.storage.qw_ryh) {
                                        a++;
                                        player.gain(game.createCard('qw_ryh'));
                                    }
                                    a = 0;
                                    while (a != card.storage.qw_hyfm) {
                                        a++;
                                        player.gain(game.createCard('qw_jdmg'));
                                    }
                                    a = 0;
                                    while (a != card.storage.qw_sgfm) {
                                        a++;
                                        player.gain(game.createCard('qw_sgfm'));
                                    }
                                    a = 0;
                                    while (a != card.storage.qw_gangzhen) {
                                        a++;
                                        player.gain(game.createCard('qw_gangzhen'));
                                    }
                                    a = 0;
                                    while (a != card.storage.qw_ylsp) {
                                        a++;
                                        player.gain(game.createCard('qw_ylsp'));
                                    }
                                }
                                ('step 1');
                                if (card.storage.qw_hffm > 0) target.recover(card.storage.qw_hffm);
                                ('step 2');
                                if (card.storage.qw_jlfm > 0) {
                                    card.storage.qw_jlfm--;
                                    card.storage.qw_jlfmnum++;
                                    player.useCard(card, targets, true);
                                }
                                ('step 3');
                                if (card.storage.qw_jdmg > 0) {
                                    target.loseHp(card.storage.qw_jdmg);
                                }
                                ('step 4');
                                if (card.storage.qw_ryh > 0) {
                                    target.draw(2 * card.storage.qw_ryh);
                                }
                                ('step 5');
                                if (card.storage.qw_hyfm > 0) {
                                    target.damage(card.storage.qw_hyfm, 'fire');
                                }
                                ('step 6');
                                if (card.storage.qw_sgfm > 0) player.discardPlayerCard(2 * card.storage.qw_sgfm, target, true);
                                ('step 7');
                                if (card.storage.qw_gangzhen > 0) target.changeHujia(card.storage.qw_gangzhen);
                            },
                            ai: {
                                order: 10,
                            },
                        },
                        qw_ryh: {
                            image: 'ext:超时空方舟/image/qw_ryh.jpg',
                            type: 'qw_fm',
                            fullborder: 'bronze',
                            subtype: 'qw_player',
                        },
                        qw_sgfm: {
                            image: 'ext:超时空方舟/image/qw_sgfm.jpg',
                            type: 'qw_fm',
                            fullborder: 'bronze',
                            subtype: 'qw_target',
                        },
                        qw_tszy: {
                            image: 'ext:超时空方舟/image/qw_tszy.jpg',
                            type: 'qw_fm',
                            subtype: 'qw_qita',
                            fullborder: 'bronze',
                        },
                        qw_hyfm: {
                            image: 'ext:超时空方舟/image/qw_hyfm.jpg',
                            type: 'qw_fm',
                            fullborder: 'bronze',
                            subtype: 'qw_target',
                        },
                        qw_jdmg: {
                            image: 'ext:超时空方舟/image/qw_jdmg.jpg',
                            type: 'qw_fm',
                            fullborder: 'bronze',
                            subtype: 'qw_target',
                        },
                        qw_jlfm: {
                            image: 'ext:超时空方舟/image/qw_jlfm.jpg',
                            type: 'qw_fm',
                            fullborder: 'bronze',
                            subtype: 'qw_qita',
                        },
                        qw_ylsp: {
                            image: 'ext:超时空方舟/image/qw_ylsp.jpg',
                            type: 'qw_fm',
                            fullborder: 'bronze',
                            subtype: 'qw_qita',
                        },
                        qw_gangzhen: {
                            image: 'ext:超时空方舟/image/qw_gangzhen.jpg',
                            fullborder: 'bronze',
                            type: 'qw_fm',
                            subtype: 'qw_player',
                        },
                        qw_hffm: {
                            fullborder: 'bronze',
                            image: 'ext:超时空方舟/image/qw_hffm.jpg',
                            type: 'qw_fm',
                            subtype: 'qw_player',
                        },
                    },
                    translate: {
                        qw_tyld: '太阳雷电',
                        qw_tyld_info: '迅速<br>出牌阶段对一名角色使用,对其造成1点火焰伤害,查看你的牌库中最上方的牌并根据该牌的点数回复行动点数(最多为4点)',
                        qw_hypf: '火焰喷发',
                        qw_hypf_info: '迅速,非固定能力<br>出牌阶段选择一名角色,对其造成0.5点火焰伤害,你的牌库最下面的三张牌中选择一张牌,将其置入牌库的最上方,所选牌在被抽取前点数增加两点',
                        qw_tyf: '太阳风',
                        qw_tyf_info: '迅速,非固定能力<br>出牌阶段,若有角色流失过体力则可以使用此牌,你选择一名角色对其造成一点火焰伤害并为其叠加一层‘日炎’',
                        qw_tyzl: '太阳之泪',
                        qw_tyzl_info: '稀有技能,迅速<br>出牌阶段,对一名其他角色使用.对其造成0.5点火焰伤害<br>当此牌在你的手牌中且与月亮之泪相临时,你将‘太阳之泪’与‘月亮之类’移除游戏,并获得三张‘带食月落’',
                        qw_rs: '燃烧',
                        qw_rs_info: '出牌阶段,对一名其他角色使用.对其造成一点火焰伤害并附加一层‘日炎’',
                        qw_rgzh: '日光之环',
                        qw_rgzh_info: '',
                        qw_hsty: '黑色太阳',
                        qw_hsty_info: '迅速<br>出牌阶段,对一名其他角色使用.对其造成0.5+x点伤害(x为0.3×你的牌堆的第一张牌的点数)',
                        qw_hhj: '火花箭',
                        qw_hhj_info: '出牌阶段选择一名角色,对其造成0.3点火焰伤害,查看你的武将牌上的前三张牌并选择其中一张,根据选择的牌的点数对其重复造成0.3点火焰伤害',
                        qw_hy: '红炎',
                        qw_hy_info: '',
                        qw_xf: '星风',
                        qw_xf_info: '迅速<br>①出牌阶段对一名角色使用,目标角色回复一点体力并获得一层月光帷幕②当有角色处濒死阶段时,对该角色使用,目标角色回复一点体力并获得一层月光帷幕',
                        qw_lxy: '流星雨',
                        qw_lxy_info: '',
                        qw_heiyue: '黑月',
                        qw_heiyue_info: '',
                        qw_ygzh: '月光之环',
                        qw_ygzh_info: '',
                        qw_xy: '血月',
                        qw_xy_info: '',
                        qw_ccyg: '璀璨月光',
                        qw_ccyg_info: '',
                        qw_yzzf: '月之祝福',
                        qw_yzzf_info: '此牌在手中时消耗的费用为0(仍会计算过载与月至祝福添加的费用)<br>出牌阶段对自己使用,查看你的牌堆顶的前三张牌并选择一张,此牌在本局游戏内点数增加两点,且使用此牌时会额外结算一次.(可多次叠加)',
                        qw_xzzy: '星之治愈',
                        qw_xzzy_info: '',
                        qw_rishi: '日食',
                        qw_rishi_info: '稀有技能,迅速<br>出牌阶段使用,你可以立即使用一张你手牌中点数最高的技能牌,将此牌放在你的‘牌堆’的顶部',
                        qw_ylzl: '月亮之泪',
                        qw_ylzl_info: '稀有技能,迅速<br>出牌阶段,对一名角色使用.为其回复0.5点体力<br>当此牌与太阳之泪相邻时,你将此牌与太阳之泪移除游戏并获得三张带食月落',
                        qw_mrzx: '明日之星',
                        qw_mrzx_info: '①出牌阶段,对自己使用,目标角色回复一点体力②查看牌库底部的三张牌,选择一张将其置入牌堆顶,该牌在抽取前点数增加一点',
                        qw_xzzf: '星之祝福',
                        qw_xzzf_info: '一次性,迅速<br>当此牌在你的手牌中时,此牌消耗行动点数为0 <br>查看你的牌库中最上方的三张牌并选择一张牌,所选牌在本场游戏中位你的牌库或弃牌库时点数增加两点',
                        qw_dsyl: '带食月落',
                        qw_dsyl_info: '迅速,无视距离,放逐<br>当此牌为你手中的第一张牌时,此牌消耗变为1,出牌阶段对一名角色使用对其造成两点伤害',
                        mianbao: '面包',
                        mianbao_info: '出牌阶段使用,为自己回复一点体力',
                        linghunxianglu: '灵魂香炉',
                        linghunxianglu_info: '令目标增加一点体力上限并回复一点体力',//QQQ
                        qw_leimingdao: '雷鸣刀',
                        qw_leimingdao_info: '当你造成雷属性伤害后,你摸一张牌.当你失去此牌时,摸两张牌',
                        qw_xueyuedao: '雪月刀',
                        qw_xueyuedao_info: '其他角色流失体力后,你可以弃置其一张牌.当你失去此牌时,摸两张牌',
                        qw_zrfwmf: '注入范围魔法',
                        qw_zrfwmf_info: '出牌阶段,对自己使用,使用后本轮所有牌均可触发随机两条应变效果',
                        qw_shualai: '耍赖',
                        qw_shualai_info: '出牌阶段,对自己使用,重复摸牌,直到手牌有六张为止',
                        qw_zonggong: '总攻',
                        qw_zonggong_info: '出牌阶段,对自己使用,摸两张牌,立即使用手中所有可以使用的牌',
                        qw_szzdb: '受诅咒的表',
                        qw_szzdb_info: '此牌目标为其他角色<br><font color=#FF0000>出牌阶段开始时,若你装备此牌,你的出牌阶段时间限制为5秒.</font>',
                        qw_reshen: '热身',
                        qw_reshen_info: '出牌阶段,对自己使用,摸五张牌,并跳过下一个摸牌阶段',
                        qw_jiasu: '加速',
                        qw_jiasu_info: '出牌阶段,对自己使用,使用后本回合使用牌无距离和次数限制',
                        qw_knx: '可能性',
                        qw_knx_info: '出牌阶段,对自己使用,摸两张牌',
                        qw_tiyi: '提议',
                        qw_tiyi_info: '出牌阶段,对自己使用,查看牌堆并将一张牌至牌堆顶,摸一张牌',
                        qw_ahxt: '暗黑形态',
                        qw_ahxt_info: '出牌阶段,对自己使用,本回合造成伤害时对所有角色造成一点伤害',
                        qw_jsmfz: '加速魔法阵',
                        qw_jsmfz_info: '此牌无法使用<br>你使用与此牌相邻的牌不计入次数',
                        qw_czdbb: '沉重的背包',
                        qw_czdbb_info: '出牌阶段,对自己使用,摸两张牌<br><font color=#FF0000>若此牌被握在手中,你不会获得卡牌</font>',
                        qw_diaoyu: '钓鱼',
                        qw_diaoyu_info: '出牌阶段,对自己使用,查看弃牌堆并获得其中的一张牌',
                        qw_zsgb: '战术改变',
                        qw_zsgb_info: '出牌阶段,对自己使用,重铸任意张技能牌或其他牌,若你重铸了其中一种的所有牌,你额外获得一张牌',
                        qw_mingxiang: '冥想',
                        qw_mingxiang_info: '出牌阶段,对自己使用,目标选择任意张手牌并选择一项<br><li>与牌堆顶等量的牌置换<br><li>将这些牌至牌堆顶并获得这些牌的复制',
                        qw_hffm: '回复粉末',
                        qw_hffm_info: '回复一点体力',
                        qw_jlfm: '精灵粉末',
                        qw_jlfm_info: '额外结算一次',
                        qw_ylsp: '月亮碎片',
                        qw_ylsp_info: '额外指定两个目标',
                        qw_jdmg: '剧毒蘑菇',
                        qw_jdmg_info: '流失一点体力',
                        qw_ryh: '熔岩花',
                        qw_ryh_info: '摸两张牌',
                        qw_hyfm: '火焰粉末',
                        qw_hyfm_info: '造成一点火焰伤害',
                        qw_sgfm: '闪光粉末',
                        qw_sgfm_info: '弃置两张牌',
                        qw_gangzhen: '钢针',
                        qw_gangzhen_info: '获得一点护盾',
                        qw_tszy: '天使之羽',
                        qw_tszy_info: '使用药水时返还其他合成粉末',
                        qw_yaoshui: '药水',
                        qw_yaoshui_info: '乔伊的特制药水',
                        qw_tkzz: '痛苦诅咒',
                        qw_tkzz_info: '<font color=#FF0000>这次要把诅咒上给谁呢？',
                        qw_bhcy: '保护草叶',
                        qw_bhcy_info: '保护舞动的草叶',
                        azar_sword: '幻影剑',
                        azar_sword_info: '',
                        qw_zljg_f: '灼烂歼鬼 斧',
                        qw_zljg_f_info: '你的杀被响应后,你可令此牌攻击范围-1并获得响应牌,你的杀无次数限制',
                        qw_zljg_p: '灼烂歼鬼 炮',
                        qw_zljg_p_info: '你可以将所有手牌当做一张可弃置目标x张牌且伤害+x的杀使用(x为转化的红牌数/2,向下取整)',
                    },
                };
                lib.config.all.cards.add('超时空方舟');
                lib.config.cards.add('超时空方舟');
                lib.translate['超时空方舟_card_config'] = '超时空方舟';
                return 超时空方舟;
            });
        },
        package: {
            version: '1.0',
        },
    };
});
