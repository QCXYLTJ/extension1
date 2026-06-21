import { lib, game, ui, get, ai, _status } from '../../noname.js';
const extensionInfo = await lib.init.promises.json(`extension/EX神将/info.json`);
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        //完毕
        name: 'EX神将',
        content(config, pack) {
            lib.group.push('exy');
            lib.translate.exy = '阴';
            lib.translate.exyColor = '#FFFF00';
        },
        precontent() {
            game.extexiao = function (str) {
                str = str.replace(/##assetURL##/g, lib.assetURL);
                const dialog = ui.create.dialog('hidden');
                dialog.classList.add('static');
                dialog.add('<div class="text" style="word-break:break-all;display:inline">' + str + '</div>');
                ui.window.appendChild(dialog);
                setTimeout(function () {
                    dialog.delete();
                }, 2000);
            };
            game.extexiao2 = function (str) {
                str = str.replace(/##assetURL##/g, lib.assetURL);
                const dialog = ui.create.dialog('hidden');
                dialog.classList.add('static');
                dialog.add('<div class="text" style="word-break:break-all;display:inline">' + str + '</div>');
                ui.window.appendChild(dialog);
                setTimeout(function () {
                    dialog.delete();
                }, 7000);
            };
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: 'EX神将',
                    connect: true,
                    characterSort: {},
                    dynamicTranslate: {},
                    character: {
                        EX吕布: ['male', 'qun', 6, ['exshenwei', 'exshennu'], ['des:地表无双']],
                        EX董卓: ['male', 'qun', 18, ['exbaolian', 'exhuanbeng', 'extianfa'], ['des:我儿奉先何在?']],
                        EX左慈: ['male', 'qun', 3, ['exxuandao', 'exhuanhua'], []],
                        EX刘协: ['male', 'qun', 1, ['exlongmai', 'exzuoshuai', 'exanzhao'], ['des:为什么会将复兴汉室的任务交给我.....']],
                        EX颜良: ['male', 'qun', 4, ['excuxia', 'exduyong', 'exxieyongwenchou'], []],
                        EX文丑: ['male', 'qun', 4, ['exhanmang', 'exduyong', 'exxieyongyanliang'], []],
                        EX邢道荣: ['male', 'qun', 4, ['exkuibai', 'exkuakou'], []],
                        EX周瑜: ['male', 'wu', 4, ['exxiongzi', 'exfengshi'], ['des:既生瑜何生亮,既生瑜何生亮,既生瑜何.......']],
                        EX孙策: ['male', 'wu', 4, ['exjiang', 'exzhiba', 'exxionghun'], ['des:吾乃江东小霸王孙笨笨.']],
                        EX孙权: ['male', 'wu', 4, ['exzhiheng', 'exshehu', 'exxiongju'], ['des:孙十万']],
                        EX大乔: ['female', 'wu', 3, ['exguose', 'exjiarendaqiao'], []],
                        EX小乔: ['female', 'wu', 3, ['exbanjun', 'exjiarenxiaoqiao'], []],
                        EX周泰: ['male', 'wu', 4, ['exbuqu', 'exsizhan', 'exhuzhu'], []],
                        EX张昭: ['male', 'wu', 3, ['exzhijian', 'exzhongwang'], ['des:吴国太抢我饭碗?!?!']],
                        EX诸葛恪: ['male', 'wu', '3/5', ['exshicai', 'exaowu'], ['des:吾岂能有败绩?必须胜!']],
                        EX吴国太: ['female', 'wu', 3, ['exxibing', 'exyanjia', 'exzexu'], ['des:吾乃吴国之母,和人敢造次?']],
                        EX典韦: ['male', 'wei', 7, ['exsuji', 'exfenming', 'exzhiji'], ['des:操你妈']],
                        EX曹丕: ['male', 'wei', 3, ['exliufang', 'exweiwei'], ['des:子健,子健,子健......']],
                        EX蔡文姬: ['female', 'wei', 3, ['exlishang', 'exzhaohun'], ['des:陈生死离别之苦,悲乱世之跌宕.']],
                        EX曹操: ['male', 'wei', 4, ['exjianxiong', 'exhuibian', 'exweiwu'], ['des:天下之人皆错看我曹孟德矣.']],
                        EX张辽: ['male', 'wei', 4, ['exjixie', 'excuorui'], []],
                        EX郭嘉: ['male', 'wei', 3, ['exjinnang', 'exyunying'], ['des:星星评三国:有些郭嘉吹认为>郭嘉不死,卧龙不出<,我认为此番言论将其拔高太多.郭嘉虽然是曹操早期最重要的五个谋士之一,也有诸多亮眼的表现和言论,但无论是从<三国演义>中的文学形象看,还是从<三国志><后汉书>等历史文献来考察,较之于诸葛亮,其始终难以望其项背.若非要将郭嘉之死和卧龙出山联系在一起的话,应该为<卧龙既出,郭嘉暴毙>.(开个玩笑)']],
                        EX曹植: ['male', 'wei', 3, ['exqibuall', 'exxinqiai'], ['des:明月照高楼,流光正徘徊.  上有愁思妇,悲叹有余哀.  ']],
                        EX文鸳: ['male', 'wei', 1, ['extuilangall'], ['des:若我早50年出生,想必也能和关张赵马之流齐名吧.']],
                        EX司马懿: ['male', 'wei', 4, ['extunshixxx'], ['des:司马氏,天命之所加也.']],
                        EX庞统: ['male', 'shu', 3, ['extiesuo', 'exyuhuopt', 'exchongsheng'], ['des:若有天下太平时,必讨四海之内才.']],
                        EX诸葛亮: ['male', 'shu', 3, ['exzhanxing', 'exzhijue', 'exjingcui'], ['des:北伐,北伐,北伐.....']],
                        EX赵襄: ['female', 'shu', '3/4', ['exmeiluo'], []],
                        EX孙尚香: ['female', 'shu', 3, ['exjianxin', 'exsashuang', 'exzhujun'], ['des:夫君之忧,妾身所虑.']],
                        EX姜维: ['male', 'shu', 3, ['exfuqing', 'exqilin', 'exbeishui'], ['des:我愿意尽力而为,奈何大汉国运衰微.']],
                        EX刘备: ['male', 'shu', 4, ['exrende', 'exqiuxian', 'exzhaolie'], ['des:勿以恶小而为之,勿以善小而不为.']],
                        EX张飞: ['male', 'shu', 4, ['expaoxiao', 'exnumu', 'exshijiu'], ['des:啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊']],
                        EX关羽: ['male', 'shu', 4, ['exwusheng', 'extuodao', 'exzhongyi'], ['des:关某向来恩怨分明']],
                        EX黄忠: ['male', 'shu', '4/6', ['exliegong', 'exsheying', 'exzhuangmu', 'expd'], ['des:老汉射箭']],
                        EX马超: ['male', 'shu', 4, ['extieji', 'exzhenqiang', 'exzhuixiong'], ['des:蜀汉吉祥物']],
                        EX赵云: ['male', 'shu', 3, ['exchangsheng', 'exleiting', 'exyinqiang'], ['des:子龙一身胆也!']],
                        EX五虎上将: ['male', 'shu', 5, ['exwuhu'], []],
                        EX孔融: ['male', 'wei', 3, ['exmingshi', 'exqianrang'], ['des:吃梨吗?']],
                        EX刘表: ['male', 'qun', '3/4', ['exshouchengb', 'exgubu'], []],
                        EX司马昭: ['male', 'wei', 4, ['exguiming', 'exzhaoxin'], ['des:你是?黑暗大法师?']],
                        EX王朗: ['male', 'wei', 3, ['exraoshe', 'exyongwei'], []],
                        EX祢衡: ['male', 'qun', 4, ['exkuangcaiall', 'exjigu'], []],
                        EX王璨: ['male', 'wei', 3, ['exzhoushi', 'exzhoushitrue'], ['des:我认为王璨的势力应该是【魏】']],
                        EX马岱: ['male', 'shu', 4, ['expingbei', 'exjianfu'], []],
                        EX步练师: ['female', 'wu', 3, ['exyueheng', 'exzhuisi'], ['des:和鸾雍雍,万福攸同.']],
                        EX张角: ['male', 'qun', 3, ['exhuangtuanb', 'exhuangtian', 'exluanshizhangjiao'], ['des:天气之子']],
                        EX雷张角: ['male', 'qun', 3, ['exleimingx', 'exguidao'], ['des:雷属性的张角']],
                        EX风张角: ['male', 'qun', 3, ['exxiaofeng', 'exchuixi'], ['des:风属性张角']],
                        EX刘封: ['male', 'shu', '3/6', ['exxiansi', 'exliwei'], ['des:恨不用孟子杜之言,悔时晚矣!']],
                        EX戏志才: ['male', 'wei', 3, ['exxianfuaa'], ['des:\'<img src="extension/EX神将/extexiao/jq.png"+\' width="210" height="120">\'']],
                        EX葛玄: ['male', 'wu', 2, ['exliandan', 'exhuaxian'], []],
                        EX镜左慈: ['male', 'qun', 3, ['exshenguangx'], ['des:神光不灭,仙力不绝.']],
                        EX何进: ['male', 'qun', 69, ['exhuoshi', 'exxingluan'], ['des:手机卡慎用!']],
                        'EX☆曹操': ['male', 'wei', '4/6', ['exjianxionga', 'exxionglue'], ['des:亚古兽究极进化....不好意思串戏了.']],
                        'EX☆曹丕': ['male', 'wei', 4, ['exfangzhuxx', 'exjuejue'], ['des:文以气为主,气之清浊有体,不可力强而致.譬如音乐,曲度虽均,节奏同检,至于引气不齐,巧拙有素,虽在父兄,不能以移子弟.——曹丕<典论·论文>']],
                        EX吕蒙: ['male', 'wu', 3, ['exshelie', 'exkeji'], ['des:玩三国杀,牌多才是王道.']],
                        EX高顺: ['male', 'qun', '4/6', ['exxianzhena', 'exzhanluan'], ['des:特种部队大队长']],
                        EX孙亮: ['male', 'wu', 2, ['exzhiyun', 'exkuizhu'], ['des:星星评三国:孙权死后,权臣诸葛恪拥孙亮继承嗣位.年轻的孙亮继位后并没有掌控权利的手段,常常对权臣诸葛恪不安,于是以孙峻为首的一党用计诛杀诸葛恪,之后孙峻又掌军政大权,孙峻病亡,从弟孙綝辅政,同样掌控朝政,权倾人主.孙亮无法忍受孙綝专横,想要谋划诛杀孙綝,不料计划失败,反被其废黜为会稽王.可见孙亮是十分缺乏政治经验的,没有足够的城府和强力的手腕,无法在暗流汹涌的政权中立足,相比之下其后继者孙休比他高明很多.']],
                        EX邓艾: ['male', 'wei', 4, ['extuntianx', 'exzaoxian'], []],
                        EX王基: ['male', 'wei', 3, ['exqizhi', 'exjinqu'], ['des:天下之势,必归大魏,可恨不能得见.']],
                        EX华佗: ['male', 'qun', 3, ['exshengshou'], []],
                        EX曹纯: ['male', 'wei', 4, ['exshanjia'], []],
                        EX八废: ['male', 'exy', 6, ['exbafeia'], ['des:一废:草原的不死青蛇,无限连陆逊 二废:赤色的夺魂蝙蝠,追命泪马谡 三废:蛰伏深渊的大蝎,白兽公孙瓒 四废:堕入地狱之番王,红血魔魏延 五废:保卫宇宙之战士,蓝高达曹仁 六废:深海的蓄爆大龟,人亡盾于禁 七废:盘据大地之霸主,绿巨蜥周泰 八废:极地的雷电蜗牛,劈你妹张角']],
                        EX究极孙笨: ['male', 'exy', 4, ['exsscsunben', 'exsschunzi'], ['des:孙策军八数第一,四血五级无人敌.  红杀决斗摸牌技,关羽华雄把头低.  制霸一轮七张牌,完胜袁术不费力.  激昂第一防御技,魂姿觉醒谁能敌.  进能英姿摸三张,退能英魂给摸弃.  单挑不怕血线低,一挑四都没毛病.  决斗连弩十七杀,陆逊春哥掩面泣.  袁叡卖血才一张,孙策英魂还得弃.  刘备仁德空城技,放逐给牌尽垃圾.  放权尽是丢牌技,制衡掩面把牌弃.  急袭观星加若愚,不如魂姿给三技.  爆防攻拆卖血将,二血魂姿高防御.  魂姿黄天加毅重,七将技能合为一.  五血五技扫全场,最强主公最牛逼.  吾乃江东小霸王,谁诬五四三二零.  劝君不要黑孙笨,黝黑孙笨会觉醒.  黝黑孙笨银两购,元宝才是完整技.  如此神将谁不服,全扩最强谁质疑!']],
                        EX贾逵: ['male', 'wei', 3, ['extongqu', 'exwanlan'], ['des:狗卡凉企虽然圈到了钱,但没了妈.狗策划拿命来!']],
                        EX卑弥呼: ['female', 'wei', '3/4', ['exyunhun'], []],
                        EX孙鲁育: ['female', 'wu', '3/4', ['exmeibu', 'exmumu'], []],
                        EX岑昏: ['male', 'wu', '3/5', ['exjishe', 'exzibao'], []],
                        EX张济: ['male', 'qun', '4/5', ['exjielue', 'extunjun'], ['des:人财皆掠之,嘿嘿.']],
                        EX许褚: ['male', 'wei', 4, ['exluoyidamage'], []],
                        EX马忠: ['male', 'shu', 4, ['exfuman', 'exzhuli'], []],
                        EX华雄: ['male', 'qun', '4/6', ['exmojiang', 'exxianjihuaxiong'], ['des:这次没发挥好,你等着.']],
                        EX宇宙兄弟: ['male', 'exy', 3, ['exyuzhou', 'exbaiban'], ['des:宇宙之力,昭于世间.']],
                        EX鲁肃: ['male', 'wu', 3, ['exdimenga', 'exduhou'], ['des:玩法思路:EX鲁肃可以说是目前本系列最强的辅助武将,虽然自身缺少输出,却拥有高额的补牌技能.自动补牌机制,和EX周瑜、EX刘备等赤壁人物有着很好的配合,其补牌能力毫不逊色于张春华和旧版神赵云.但<联盟>关系是可以破裂的,游戏时一定要注意保护好盟友呦.']],
                        'EX☆左慈': ['male', 'qun', 3, ['exhuanhuanew'], []],
                        'EX☆周泰': ['male', 'wu', Infinity, [], ['des:一个没有技能的白板']],
                        EX钟会: ['male', 'wei', '4/5', ['exquanbian', 'exanjian'], []],
                        EX徐盛: ['male', 'exy', 4, ['expojuna'], ['des:闹够了没有?']],
                        'EX☆诸葛': ['male', 'shu', '2/4', ['exqixingaa'], []],
                    },
                    characterTitle: {},
                    characterIntro: {},
                    skill: {
                        a: {
                            mod: {
                                targetInRange(card, player, target, now) {
                                    if (card.name == 'sha') {
                                        return true;
                                    }
                                },
                                selectTarget(card, player, range) {
                                    if (card.name == 'sha' && Array.isArray(range) && range[1] != -1) {
                                        range[1]++;
                                    }
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') {
                                        return num - 1;
                                    }
                                },
                            },
                        },
                        b: {
                            mod: {
                                targetInRange(card, player, target, now) {
                                    if (card.name == 'sha') {
                                        return true;
                                    }
                                },
                                selectTarget(card, player, range) {
                                    if (card.name == 'sha' && Array.isArray(range) && range[1] != -1) {
                                        range[1]++;
                                    }
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') {
                                        return num + 1;
                                    }
                                },
                            },
                        },
                        c: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && get.color(event.card) == 'red' && event.notLink();
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                        },
                        d: {
                            mod: {
                                suit(card, suit) {
                                    if (suit == 'heart') {
                                        return 'spade';
                                    }
                                    if (suit == 'club') {
                                        return 'spade';
                                    }
                                    if (suit == 'diamond') {
                                        return 'spade';
                                    }
                                },
                            },
                        },
                        e: {
                            audio: 'wusheng',
                            trigger: {
                                player: 'useCardToBegin',
                            },
                            filter(event, player) {
                                return event.target && event.target != player && event.target.countCards('h') && get.color(event.card) == 'red';
                            },
                            init(player) {
                                player.storage.kuanglie = 0;
                            },
                            forced: true,
                            content() {
                                trigger.target.randomDiscard();
                            },
                        },
                        i: {
                            mod: {
                                globalTo(from, to, distance) {
                                    return distance + 999;
                                },
                            },
                        },
                        exwuhu: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'phaseUseBefore',
                            },
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseControl('关羽', '张飞', '赵云', '马超', '黄忠');
                                ('step 1');
                                if (result.control == '关羽') {
                                    player.addTempSkill('wusheng', { player: 'phaseBefore' });
                                    let list = ['qinglong'];
                                    player.equip(game.createCard(list.randomGet()));
                                }
                                if (result.control == '张飞') {
                                    player.addTempSkill('paoxiao', { player: 'phaseBefore' });
                                    let list = ['zhangba'];
                                    player.equip(game.createCard(list.randomGet()));
                                }
                                if (result.control == '赵云') {
                                    player.addTempSkill('longdan', { player: 'phaseBefore' });
                                    let list = ['yinyueqiang'];
                                    player.equip(game.createCard(list.randomGet()));
                                }
                                if (result.control == '马超') {
                                    player.addTempSkill('tieji', { player: 'phaseBefore' });
                                    let list = ['baiyin'];
                                    player.equip(game.createCard(list.randomGet()));
                                }
                                if (result.control == '黄忠') {
                                    player.addTempSkill('liegong', { player: 'phaseBefore' });
                                    let list = ['qilin'];
                                    player.equip(game.createCard(list.randomGet()));
                                }
                                ('step 2');
                                let list = ['sha'];
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                            },
                            ai: {
                                order: 9.8,
                                threaten: 1.8,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        exleiting: {
                            audio: 'ext:EX神将/audio:2',
                            group: ['expd'],
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player.canCompare(target);
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseToCompare(target).set('preserve', 'win');
                                ('step 1');
                                if (result.bool && result.target) {
                                    event.type = true;
                                    event.card = result.target;
                                    player.addTempSkill('longdan', { player: 'phaseUseBefore' });
                                    player.addTempSkill('chongzhen', { player: 'phaseUseBefore' });
                                } else {
                                    event.type = false;
                                    if (player.countCards('h')) {
                                        player.addTempSkill('longdan', { player: 'phaseUseBefore' });
                                    }
                                }
                            },
                            ai: {
                                result: {
                                    target(player, target) {
                                        const hs = player.getCards('h');
                                        if (hs.length < 3) {
                                            return 0;
                                        }
                                        let bool = false;
                                        for (let i = 0; i < hs.length; i++) {
                                            if (hs[i].number >= 9 && get.value(hs[i]) < 7) {
                                                bool = true;
                                                break;
                                            }
                                        }
                                        if (!bool) {
                                            return 0;
                                        }
                                        if (player.canUse('sha', target) && player.countCards('h', 'sha')) {
                                            return -2;
                                        }
                                        return -0.5;
                                    },
                                },
                                order: 9,
                            },
                        },
                        exyinqiang: {
                            audio: 'ext:EX神将/audio:2',
                            audioname: ['longdan_sp_zhaoyun2'],
                            trigger: {
                                player: 'phaseBegin',
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard(999, 'h', true);
                                ('step 1');
                                let list = ['yinyueqiang'];
                                player.equip(game.createCard(list.randomGet()));
                                ('step 2');
                                let list1 = ['sha', 'shan', 'tao', 'jiu'];
                                player.gain(game.createCard(list1.randomGet()));
                                player.$draw();
                                ('step 3');
                                let list2 = ['sha', 'shan', 'tao', 'jiu'];
                                player.gain(game.createCard(list2.randomGet()));
                                player.$draw();
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        exchangsheng: {
                            audio: 'ext:EX神将/audio:2',
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filter(event, player) {
                                if ((event.filterCard && event.filterCard({ name: 'jiu' }, player, event)) || event.filterCard({ name: 'tao' }, player, event)) {
                                    return player.hasCard(function (card) {
                                        return get.type(card) == 'basic';
                                    });
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    let list = [];
                                    for (let i = 0; i < lib.inpile.length; i++) {
                                        if (lib.inpile[i] != 'sha' && lib.card[lib.inpile[i]].type == 'basic' && event.filterCard({ name: lib.inpile[i] }, player, event)) {
                                            list.push(['基本', '', lib.inpile[i]]);
                                        }
                                    }
                                    return ui.create.dialog('常胜', [list, 'vcard'], 'hidden');
                                },
                                check(button) {
                                    const player = _status.event.player;
                                    const card = { name: button.link[2], nature: button.link[3] };
                                    if (
                                        game.hasPlayer(function (current) {
                                            return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
                                        })
                                    ) {
                                        switch (button.link[2]) {
                                            case 'tao':
                                                return 5;
                                            case 'xuejibingbao':
                                                return 4;
                                            case 'jiu':
                                                return 3.01;
                                            case 'sha':
                                                if (button.link[3] == 'fire') {
                                                    return 2.95;
                                                }
                                                return 2.9;
                                            default:
                                                return 2 + _status.event.getRand() * 2;
                                        }
                                    }
                                    return 0;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard(card) {
                                            return get.type(card) == 'basic';
                                        },
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        popname: true,
                                        ai1(card) {
                                            return 6 - get.value(card);
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张基本牌当作' + get.translation(links[0][3] || '') + get.translation(links[0][2]) + '使用';
                                },
                            },
                            ai: {
                                order() {
                                    const player = _status.event.player;
                                    const event = _status.event;
                                    if (event.filterCard && event.filterCard({ name: 'jiu' }, player, event) && get.effect(player, { name: 'jiu' }) > 0) {
                                        return 3.1;
                                    }
                                    return 2.9;
                                },
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        exzhuixiong: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            content() {
                                'step 0';
                                player.link(true);
                                ('step 1');
                                let list = ['dawan', 'chitu', 'zixin'];
                                player.equip(game.createCard(list.randomGet()));
                                ('step 2');
                                let list1 = ['sha'];
                                player.gain(game.createCard(list1.randomGet()));
                                player.$draw();
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        exzhenqiang: {
                            audio: 'ext:EX神将/audio:1',
                            audioname: ['exzhenqiang'],
                            group: ['expd'],
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player.canCompare(target);
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseToCompare(target).set('preserve', 'win');
                                ('step 1');
                                if (result.bool && result.target) {
                                    event.type = true;
                                    event.card = result.target;
                                    target.addTempSkill('fengyin', { player: 'phaseUseBefore' });
                                } else {
                                    event.type = false;
                                    if (player.countCards('h')) {
                                        player.addTempSkill('fengyin');
                                    }
                                }
                            },
                            ai: {
                                result: {
                                    target(player, target) {
                                        const hs = player.getCards('h');
                                        if (hs.length < 3) {
                                            return 0;
                                        }
                                        let bool = false;
                                        for (let i = 0; i < hs.length; i++) {
                                            if (hs[i].number >= 9 && get.value(hs[i]) < 7) {
                                                bool = true;
                                                break;
                                            }
                                        }
                                        if (!bool) {
                                            return 0;
                                        }
                                        if (player.canUse('sha', target) && player.countCards('h', 'sha')) {
                                            return -2;
                                        }
                                        return -0.5;
                                    },
                                },
                                order: 9,
                            },
                        },
                        extieji: {
                            audio: 'ext:EX神将/audio:2',
                            audioname: ['tieji'],
                            trigger: {
                                player: 'shaBegin',
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) < 0;
                            },
                            logTarget: 'target',
                            content() {
                                trigger.directHit = true;
                                player.draw(1);
                            },
                        },
                        exliegong: {
                            mod: {
                                targetInRange(card, player, target) {
                                    if (card.name == 'sha' && card.number) {
                                        if (get.distance(player, target) <= 999) {
                                            return true;
                                        }
                                    }
                                },
                            },
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            logTarget: 'target',
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            filter(event, player) {
                                if (event.target.countCards('h') < 999) {
                                    return true;
                                }
                                return false;
                            },
                            content() {
                                if (trigger.target.countCards('h') < 999) {
                                    trigger.directHit = true;
                                }
                                trigger.target.chooseToDiscard(1, 'e', true);
                            },
                            ai: {
                                threaten: 0.5,
                            },
                        },
                        exsheying: {
                            audio: 'ext:EX神将/audio:2',
                            enable: 'phaseUse',
                            group: ['expd'],
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player.canCompare(target);
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseToCompare(target).set('preserve', 'win');
                                ('step 1');
                                if (result.bool && result.target) {
                                    event.type = true;
                                    event.card = result.target;
                                    player.recover(1);
                                } else {
                                    event.type = false;
                                    if (player.countCards('h')) {
                                        target.addTempSkill('i');
                                    }
                                }
                            },
                            ai: {
                                result: {
                                    target(player, target) {
                                        const hs = player.getCards('h');
                                        if (hs.length < 3) {
                                            return 0;
                                        }
                                        let bool = false;
                                        for (let i = 0; i < hs.length; i++) {
                                            if (hs[i].number >= 9 && get.value(hs[i]) < 7) {
                                                bool = true;
                                                break;
                                            }
                                        }
                                        if (!bool) {
                                            return 0;
                                        }
                                        if (player.canUse('sha', target) && player.countCards('h', 'sha')) {
                                            return -2;
                                        }
                                        return -0.5;
                                    },
                                },
                                order: 9,
                            },
                        },
                        exzhuangmu: {
                            audio: 'ext:EX神将/audio:2',
                            audioname: ['liegong'],
                            trigger: {
                                player: 'phaseBegin',
                            },
                            content() {
                                'step 0';
                                player.loseHp(1);
                                ('step 1');
                                let list = ['qilin'];
                                player.equip(game.createCard(list.randomGet()));
                                ('step 2');
                                let list1 = ['sha'];
                                player.gain(game.createCard(list1.randomGet()));
                                player.$draw();
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        exwusheng: {
                            audio: 'ext:EX神将/audio:2',
                            group: ['e', 'wusheng'],
                        },
                        extuodao: {
                            audio: 'ext:EX神将/audio:2',
                            enable: 'phaseUse',
                            group: ['expd'],
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player.canCompare(target);
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseToCompare(target).set('preserve', 'win');
                                ('step 1');
                                if (result.bool && result.target) {
                                    event.type = true;
                                    event.card = result.target;
                                    player.addTempSkill('c');
                                } else {
                                    event.type = false;
                                    if (player.countCards('h')) {
                                        player.addTempSkill('d');
                                    }
                                }
                            },
                            ai: {
                                result: {
                                    target(player, target) {
                                        const hs = player.getCards('h');
                                        if (hs.length < 3) {
                                            return 0;
                                        }
                                        let bool = false;
                                        for (let i = 0; i < hs.length; i++) {
                                            if (hs[i].number >= 9 && get.value(hs[i]) < 7) {
                                                bool = true;
                                                break;
                                            }
                                        }
                                        if (!bool) {
                                            return 0;
                                        }
                                        if (player.canUse('sha', target) && player.countCards('h', 'sha')) {
                                            return -2;
                                        }
                                        return -0.5;
                                    },
                                },
                                order: 9,
                            },
                        },
                        exnumu: {
                            audio: 'ext:EX神将/audio:2',
                            enable: 'phaseUse',
                            group: ['expd'],
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player.canCompare(target);
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseToCompare(target).set('preserve', 'win');
                                ('step 1');
                                if (result.bool && result.target) {
                                    event.type = true;
                                    event.card = result.target;
                                    player.addTempSkill('b');
                                } else {
                                    event.type = false;
                                    if (player.countCards('h')) {
                                        player.addTempSkill('a');
                                    }
                                }
                            },
                            ai: {
                                result: {
                                    target(player, target) {
                                        const hs = player.getCards('h');
                                        if (hs.length < 3) {
                                            return 0;
                                        }
                                        let bool = false;
                                        for (let i = 0; i < hs.length; i++) {
                                            if (hs[i].number >= 9 && get.value(hs[i]) < 7) {
                                                bool = true;
                                                break;
                                            }
                                        }
                                        if (!bool) {
                                            return 0;
                                        }
                                        if (player.canUse('sha', target) && player.countCards('h', 'sha')) {
                                            return -2;
                                        }
                                        return -0.5;
                                    },
                                },
                                order: 9,
                            },
                        },
                        exzhongyi: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard(999, 'j', true);
                                ('step 1');
                                let list = ['qinglong'];
                                player.equip(game.createCard(list.randomGet()));
                                ('step 2');
                                player.draw(1);
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        exshijiu: {
                            audio: 'ext:EX神将/audio:2',
                            audioname: ['dahe'],
                            trigger: {
                                player: 'phaseBegin',
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard(999, 'e', true);
                                ('step 1');
                                let list = ['jiu'];
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                                ('step 2');
                                let list1 = ['zhangba'];
                                player.equip(game.createCard(list1.randomGet()));
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        expaoxiao: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && player.getStat().card.sha > 2 && event.parent.type == 'phase';
                            },
                            content() {
                                player.draw(1);
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') {
                                        return 3;
                                    }
                                },
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (!get.zhu(player, 'shouyue')) {
                                        return false;
                                    }
                                    if (arg && arg.name == 'sha') {
                                        return true;
                                    }
                                    return false;
                                },
                            },
                        },
                        exzhaolie: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'phaseDrawBefore',
                            },
                            forced: true,
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player && current.group == 'shu') {
                                        current.draw(1);
                                        player.draw(num == current.draw);
                                    }
                                });
                            },
                        },
                        exqiuxian: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'recoverEnd',
                            },
                            usable: 1,
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('exqiuxian'), function (card, player, target) {
                                        return target;
                                    })
                                    .set('ai', function (target) {
                                        const player = _status.event.player;
                                        return get.recoverEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool && result.targets && result.targets.length) {
                                    let num = [2, 2, 2, 2, 2, 2, 2, 2, 2, 6].randomGet();
                                    player.line(result.targets[0], 'green');
                                    result.targets[0].draw(2);
                                }
                            },
                        },
                        exrende: {
                            audio: 'ext:EX神将/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            filterCard: true,
                            selectCard: [1, Infinity],
                            discard: false,
                            lose: true,
                            content() {
                                'step 0';
                                player.$give(cards.length, target);
                                target.gain(cards, player);
                                ('step 1');
                                player.chooseControl('获得【杀】', '获得【闪】', '获得【桃】', '获得【酒】');
                                ('step 2');
                                if (result.control == '获得【杀】') {
                                    let list = ['sha'];
                                    player.gain(game.createCard(list.randomGet()));
                                    player.$draw();
                                }
                                if (result.control == '获得【闪】') {
                                    let list = ['shan'];
                                    player.gain(game.createCard(list.randomGet()));
                                    player.$draw();
                                }
                                if (result.control == '获得【桃】') {
                                    let list = ['tao'];
                                    player.gain(game.createCard(list.randomGet()));
                                    player.$draw();
                                }
                                if (result.control == '获得【酒】') {
                                    let list = ['jiu'];
                                    player.gain(game.createCard(list.randomGet()));
                                    player.$draw();
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('nogain')) {
                                            return 0;
                                        }
                                        if (player.countCards('h') == 1 && player.countCards('h', 'du')) {
                                            return -1;
                                        }
                                        if (player.hp <= 2 && player.countCards('h', 'shan')) {
                                            return 0;
                                        }
                                        if (target.countCards('h') + player.countCards('h') > target.hp + 2) {
                                            return 0;
                                        }
                                        if (get.attitude(player, target) > 3) {
                                            return 1;
                                        }
                                        return 0;
                                    },
                                },
                            },
                        },
                        exbeishui: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'phaseDiscardEnd',
                            },
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            postion: true,
                            filterCard: {
                                type: ['basic', 'equip', 'delay', 'trick'],
                            },
                            selectCard: 2,
                            content() {
                                'step 0';
                                player.chooseToDiscard(1, 'he', true);
                                ('step 0');
                                player.chooseControl('获取技能【八卦】', '获取技能【空城】', '获取技能【看破】');
                                ('step 1');
                                if (result.control == '获取技能【八卦】') {
                                    player.addTempSkill('bagua_skill', { player: 'phaseUseBefore' });
                                }
                                if (result.control == '获取技能【空城】') {
                                    player.addTempSkill('kongcheng', { player: 'phaseUseBefore' });
                                }
                                if (result.control == '获取技能【看破】') {
                                    player.addTempSkill('kanpo', { player: 'phaseUseBefore' });
                                }
                            },
                            ai: {
                                order: 9.8,
                                threaten: 1.8,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        exfuqing: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'phaseBeginStart',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.storage.zhiji) {
                                    return false;
                                }
                                return player.countCards('he') <= 999;
                            },
                            content() {
                                if (player.countCards('h') == 0) {
                                    player.draw(1);
                                }
                                if (player.countCards('e') == 0) {
                                    player.draw(1);
                                }
                                if (player.hp == 1) {
                                    player.draw(1);
                                }
                                if (player.countCards('h') < player.hp) {
                                    player.draw(1);
                                }
                            },
                        },
                        exqilin: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'phaseUseBefore',
                            },
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            filterCard: {
                                type: ['basic', 'equip', 'delay', 'trick'],
                            },
                            selectCard: 1,
                            check(event, player) {
                                return player.hasCard((c) => get.value(c) < 8, 'he');
                            },//QQQ
                            content() {
                                'step 0';
                                player.chooseToDiscard(1, 'he', true);
                                ('step 1');
                                player.chooseControl('获取一张基本牌', '获取一张锦囊牌', '获取一张防具牌', '获取一张延时锦囊牌');
                                ('step 2');
                                if (result.control == '获取一张基本牌') {
                                    let list = get.inpile('basic');
                                    const list2 = [];
                                    for (let i = 0; i < 1; i++) {
                                        list2.push(game.createCard(list.randomGet()));
                                    }
                                    player.gain(list2, 'draw');
                                    player.addTempSkill('rende', 'phaseEnd');
                                }
                                if (result.control == '获取一张锦囊牌') {
                                    let list = get.inpile('trick');
                                    const list2 = [];
                                    for (let i = 0; i < 1; i++) {
                                        list2.push(game.createCard(list.randomGet()));
                                    }
                                    player.gain(list2, 'draw');
                                    player.addTempSkill('sheyan', 'phaseEnd');
                                }
                                if (result.control == '获取一张防具牌') {
                                    let list = get.inpile('equip2');
                                    const list2 = [];
                                    for (let i = 0; i < 1; i++) {
                                        list2.push(game.createCard(list.randomGet()));
                                    }
                                    player.gain(list2, 'draw');
                                    player.addTempSkill('tiaoxin', { player: 'phaseUseBefore' });
                                }
                                if (result.control == '获取一张延时锦囊牌') {
                                    let list = get.inpile('delay');
                                    const list2 = [];
                                    for (let i = 0; i < 1; i++) {
                                        list2.push(game.createCard(list.randomGet()));
                                    }
                                    player.gain(list2, 'draw');
                                    player.addTempSkill('guanxing', { player: 'phaseUseBefore' });
                                }
                            },
                            ai: {
                                order: 9.8,
                                threaten: 1.8,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        exzhujun: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                global: 'recoverAfter',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('liangzhu'), function (card, player, target) {
                                        return target;
                                    })
                                    .set('ai', function (target) {
                                        const player = _status.event.player;
                                        return get.recoverEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool && result.targets && result.targets.length) {
                                    const num1 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 3].randomGet();
                                    player.line(result.targets[0], 'green');
                                    result.targets[0].draw(num);
                                }
                            },
                        },
                        exsashuang: {
                            audio: 'ext:EX神将/audio:2',
                            audioname: ['exsashuang'],
                            trigger: {
                                player: 'loseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (Array.isArray(event.cards)) {
                                    for (const i of event.cards) {
                                        //QQQ
                                        if (i.original == 'e') {
                                            return true;
                                        }
                                    }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.chooseControl('摸两张牌', '回复一点体力');
                                ('step 1');
                                if (result.control == '摸两张牌') {
                                    player.draw(2);
                                } else {
                                    player.recover(1);
                                }
                            },
                            ai: {
                                noe: true,
                                reverseEquip: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.type(card) == 'equip') {
                                            return [1, 3];
                                        }
                                    },
                                },
                            },
                        },
                        exjianxin: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            check(event, player) {
                                return player.countCards('h') <= player.maxHp || player.skipList.includes('phaseUse');
                            },
                            content() {
                                'step 1';
                                trigger.num -= 2;
                                ('step 2');
                                let list = ['cixiong', 'fangtian', 'guanshi', 'hanbing', 'qilin', 'qinggang', 'qinglong', 'zhangba', 'zhuge', 'guding', 'zhuque'];
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        exmeiluo: {
                            group: ['exzhaoxiangbuqiang'],
                            audio: 'ext:EX神将/audio:4',
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.draw(0);
                                let list = [];
                                if (!player.hasSkill('zxlongdan')) {
                                    list.push('zxlongdan');
                                }
                                if (!player.hasSkill('zxfengpo')) {
                                    list.push('zxfengpo');
                                }
                                if (!player.hasSkill('zxyajiao')) {
                                    list.push('zxyajiao');
                                }
                                if (!player.hasSkill('zxjuejing')) {
                                    list.push('zxjuejing');
                                }
                                if (!player.hasSkill('mashu')) {
                                    list.push('mashu');
                                }
                                if (player.hasSkill('zxlongdan')) {
                                    if (player.hasSkill('zxfengpo')) {
                                        if (player.hasSkill('zxyajiao')) {
                                            if (player.hasSkill('mashu')) {
                                                if (player.hasSkill('mashu')) {
                                                    player.draw(1);
                                                }
                                            }
                                        }
                                    }
                                }
                                if (list.length) {
                                    player.chooseControl(list).set('prompt', '选择获得一项技能');
                                }
                                ('step 1');
                                player.addSkill(result.control);
                                player.popup(result.control);
                                game.log(player, '获得技能', '【' + get.translation(result.control) + '】');
                            },
                            ai: {
                                threaten: 1.4,
                            },
                        },
                        exyuhuo: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'loseAfter',
                            },
                            usable: 1,
                            forced: true,
                            filter(event, player) {
                                if (player.countCards('h')) {
                                    return false;
                                }
                                if (Array.isArray(event.cards)) {
                                    for (const i of event.cards) {
                                        //QQQ
                                        if (i.original == 'h') {
                                            return true;
                                        }
                                    }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('exyuhuo'), function (card, player, target) {
                                        return target;
                                    })
                                    .set('ai', function (target) {
                                        const player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool && result.targets && result.targets.length) {
                                    let num = [1, 1, 1].randomGet();
                                    player.line(result.targets[0], 'green');
                                    result.targets[0].damage(num, 'fire');
                                }
                            },
                        },
                        exzhanxing: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'phaseBefore',
                            },
                            forced: true,
                            check(event, player) {
                                return !player.hasSkill('reyiji2');
                            },
                            content() {
                                'step 0';
                                event.cards = get.cards(7);
                                player.chooseCardButton(event.cards, 3, '选择三张牌置于牌堆顶').set('ai', ai.get.buttonValue);
                                ('step 1');
                                if (result.bool) {
                                    const choice = [];
                                    for (const i of result.links) {
                                        choice.push(i);
                                        cards.remove(i);
                                    }
                                    for (let i = 0; i < cards.length; i++) {
                                        ui.cardPile.appendChild(cards[i]);
                                    }
                                    while (choice.length) {
                                        ui.cardPile.insertBefore(choice.pop(), ui.cardPile.firstChild);
                                    }
                                }
                            },
                        },
                        exjingcui: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'useCard',
                            },
                            usable: 1,
                            filter(event, player) {
                                return (
                                    event.card &&
                                    (get.type(event.card) == 'trick' || (get.type(event.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(event.card.name))) &&
                                    game.hasPlayer(function (current) {
                                        return current != player && player.countCards('h') > 0;
                                    })
                                );
                            },
                            content() {
                                player.chooseToDiscard(1, true);
                                trigger.directHit.addArray(
                                    game.filterPlayer(function (current) {
                                        return current != player;
                                    })
                                );
                            },
                        },
                        exzhijue: {
                            group: ['exyuhuo'],
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (target.countCards('h') == 0) {
                                        if (card.name == 'sha' || (card.name == 'juedou') | (card.name == 'jiedao') | (card.name == 'nanman') | (card.name == 'wuzhong') | (card.name == 'taoyuan') | (card.name == 'wanjian') | (card.name == 'lebu') | (card.name == 'bingliang') | (card.name == 'tiesuo') | (card.name == 'shandian') | (card.name == 'shunshou') | (card.name == 'guohe') | (card.name == 'wugu')) {
                                            return false;
                                        }
                                    }
                                },
                            },
                            ai: {
                                noh: true,
                                skillTagFilter(player, tag) {
                                    if (tag == 'noh') {
                                        if (player.countCards('h') != 1) {
                                            return false;
                                        }
                                    }
                                },
                            },
                        },
                        exyuhuopt: {
                            audio: 'ext:EX神将/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player.canCompare(target);
                            },
                            filter(event, player) {
                                return player.countCards('h') >= 0;
                            },
                            content() {
                                'step 0';
                                player.chooseToCompare(target).set('preserve', 'win');
                                ('step 1');
                                if (result.bool && result.target) {
                                    event.type = true;
                                    event.card = result.target;
                                    target.damage(1, 'fire', true);
                                } else {
                                    event.type = false;
                                    if (player.countCards('h') >= 0) {
                                        player.gainMaxHp(1);
                                    }
                                }
                            },
                        },
                        exchongsheng: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'dyingBegin',
                            },
                            content() {
                                'step 0';
                                let num = player.maxHp;
                                player.recover(num);
                                ('step 1');
                                player.draw(Math.min(player.hp) - player.countCards('h'));
                                ('step 2');
                                player.removeSkill('exchongsheng');
                            },
                        },
                        extiesuo: {
                            audio: 'ext:EX神将/audio:3',
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: true,
                            selectTarget: [1, 1],
                            selectCard: 1,
                            check(card) {
                                const player = get.owner(card);
                                if (player.countCards('h') > player.hp) {
                                    return 8 - get.value(card);
                                }
                                if (player.hp < player.maxHp) {
                                    return 6 - get.value(card);
                                }
                                return 4 - get.value(card);
                            },
                            filterTarget(card, player, target) {
                                if (target.sex != 'male') {
                                    return true;
                                }
                                if (target.hp >= target.maxHp) {
                                    return true;
                                }
                                if (target == player) {
                                    return true;
                                }
                                return true;
                            },
                            content() {
                                target.link();
                                target.addSkill('exruohuo');
                            },
                        },
                        exwumou: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'useCardToBefore',
                            },
                            forced: true,
                            _priority: 15,
                            check(event, player) {
                                return get.effect(event.target, event.card, event.player, player) < 0;
                            },
                            filter(event, player) {
                                if (!event.target) {
                                    return false;
                                }
                                if (event.player == player && event.target == player) {
                                    return false;
                                }
                                return get.type(event.card) == 'trick';
                            },
                            content() {
                                player.removeSkill('wushuang', { player: 'phaseUseEnd' });
                                player.removeSkill('mashu', { player: 'phaseUseEnd' });
                                player.removeSkill('exshenji', { player: 'phaseUseEnd' });
                                player.removeSkill('exwuqian', { player: 'phaseUseEnd' });
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.type(card) == 'trick' && player != target) {
                                            return 'zeroplayertarget';
                                        }
                                    },
                                    player(card, player, target, current) {
                                        if (get.type(card) == 'trick' && player != target) {
                                            return 'zeroplayertarget';
                                        }
                                    },
                                },
                            },
                        },
                        exshenji: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                'step 0';
                                let num = 2;
                                player.chooseTarget('是否发动【神无我】,令其他角色也成为此【杀】的目标?', [1, num], function (card, player, target) {
                                    return target != player && !trigger.targets.includes(target) && player.canUse({ name: 'sha' }, target);
                                }).ai = function (target) {
                                    return get.effect(target, { name: 'sha' }, _status.event.player);
                                };
                                ('step 1');
                                if (result.bool && result.targets && result.targets.length) {
                                    const targets = result.targets;
                                    player.line(targets, trigger.card.nature);
                                    trigger.targets.addArray(targets);
                                }
                            },
                        },
                        exshennu: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'damageEnd',
                            },
                            content() {
                                'step 0';
                                event.targets = game.filterPlayer();
                                event.targets.remove(player);
                                event.targets.sort(lib.sort.seat);
                                player.line(event.targets, 'green');
                                ('step 1');
                                if (event.targets.length) {
                                    event.current = event.targets.shift();
                                    event.current.discard(event.current.getCards('e')).delay = true;
                                }
                                if (event.current.countCards('e') <= 0) {
                                    event.current.loseHp().delay = true;
                                }
                                ('step 1');
                                event.current.chooseToDiscard('e', true, 5).delay = false;
                                ('step 2');
                                event.current.draw(1);
                                if (event.targets.length) {
                                    event.goto(1);
                                }
                            },
                            ai: {
                                combo: 'baonu',
                                order: 10,
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
                        exshenwei: {
                            derivation: ['wushuang', 'exwumou', 'exshenji', 'exwuqian'],
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player && !current.hasSkill('fengyin')) {
                                        player.line(current, 'green');
                                        current.addTempSkill('fengyin');
                                        player.addTempSkill('wushuang');
                                        player.addTempSkill('exwumou');
                                        player.addTempSkill('exshenji');
                                        player.addTempSkill('exwuqian');
                                    }
                                });
                            },
                        },
                        exxuandao: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            check(event, player) {
                                return player.countCards('h') <= player.maxHp || player.skipList.includes('phaseUse');
                            },
                            content() {
                                'step 0';
                                trigger.num -= 2;
                                ('step 0');
                                player.throwDice();
                                ('step 1');
                                event.cards = get.cards(event.num);
                                player.draw(num);
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        exhuanhua: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'damageAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.source != undefined && event.num > 0;
                            },
                            content() {
                                'step 0';
                                let list = get.gainableSkills();
                                list.remove(player.getSkills());
                                list = list.randomGets(3);
                                event.skillai = function () {
                                    return get.max(list, get.skillRank, 'item');
                                };
                                if (event.isMine()) {
                                    const dialog = ui.create.dialog('forcebutton');
                                    dialog.add('选择获得一项技能');
                                    const clickItem = function () {
                                        _status.event._result = this.link;
                                        dialog.close();
                                        game.resume();
                                    };
                                    for (let i = 0; i < list.length; i++) {
                                        if (lib.translate[list[i] + '_info']) {
                                            let translation = get.translation(list[i]);
                                            if (translation[0] == '新' && translation.length == 3) {
                                                translation = translation.slice(1, 3);
                                            } else {
                                                translation = translation.slice(0, 2);
                                            }
                                            const item = dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + translation + '】</div><div>' + lib.translate[list[i] + '_info'] + '</div></div>');
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
                                const link = result;
                                player.addSkill(link, true);
                                player.popup(link);
                                game.log(player, '获得了技能', '【' + get.translation(link) + '】');
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (get.type(card, 'trick') == 'trick' && player == target) {
                                            return [1, 1];
                                        }
                                    },
                                },
                            },
                        },
                        exlongmai: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: ['damageBefore', 'loseHpBefore', 'loseMaxHpBefore'],
                                source: ['damageBefore', 'loseHpBefore'],
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return (num += game.countPlayer(function (current) {
                                        return current.group == 'qun';
                                    }));
                                },
                            },
                            ai: {
                                nofire: true,
                                nothunder: true,
                                nodamage: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'damage')) {
                                            return [0, 0];
                                        }
                                    },
                                },
                            },
                        },
                        exzuoshuai: {
                            audio: 'ext:EX神将/audio:1',
                            forced: true,
                            trigger: {
                                player: 'phaseBefore',
                            },
                            filter(event, player) {
                                return game.roundNumber < 999;
                            },
                            content() {
                                if (game.roundNumber == 5) {
                                    let list = ['shandian'];
                                    player.gain(game.createCard(list.randomGet()));
                                    player.$draw();
                                }
                                if (game.roundNumber == 10) {
                                    let list = ['shandian'];
                                    player.gain(game.createCard(list.randomGet()));
                                    player.$draw();
                                }
                                if (game.roundNumber == 15) {
                                    let list = ['shandian'];
                                    player.gain(game.createCard(list.randomGet()));
                                    player.$draw();
                                }
                                if (game.roundNumber == 20) {
                                    let list = ['shandian'];
                                    player.gain(game.createCard(list.randomGet()));
                                    player.$draw();
                                }
                                if (game.roundNumber == 25) {
                                    let list = ['shandian'];
                                    player.gain(game.createCard(list.randomGet()));
                                    player.$draw();
                                }
                                if (game.roundNumber == 30) {
                                    let list = ['shandian'];
                                    player.gain(game.createCard(list.randomGet()));
                                    player.$draw();
                                }
                                if (game.roundNumber == 31) {
                                    player.die();
                                }
                            },
                        },
                        exanzhao: {
                            audio: 'ext:EX神将/audio:1',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            filter(event, player) {
                                return player.countCards('h') > 1;
                            },
                            filterCard: true,
                            selectCard: 1,
                            discard: false,
                            lose: true,
                            content() {
                                'step 0';
                                player.$give(cards.length, target);
                                target.gain(cards, player);
                                ('step 1');
                                player.chooseControl('目标摸牌并获得【谋溃】至其回合结束', '目标弃牌并获得【崩坏】至其回合结束');
                                ('step 2');
                                if (result.control == '目标摸牌并获得【谋溃】至其回合结束') {
                                    let num = target.maxHp - target.hp;
                                    target.draw(num);
                                    target.addTempSkill('moukui', { player: 'phaseAfter' });
                                } else {
                                    let num = target.hp;
                                    target.chooseToDiscard('he', true, num);
                                    target.addTempSkill('benghuai', { player: 'phaseAfter' });
                                }
                                ('step 3');
                                if (game.roundNumber == 10) {
                                    player.addSkill('mizhao');
                                }
                            },
                        },
                        exhuoyi: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player && !current.hasSkill('fengyi')) {
                                        player.line(current, 'green');
                                        current.addSkill('benghuai');
                                    }
                                });
                            },
                        },
                        extianfa: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.judge();
                                ('step 1');
                                switch (result.card.suit) {
                                    case 'heart':
                                        player.recover(1);
                                        break;
                                    case 'diamond':
                                        player.damage(0, 'thunder');
                                        break;
                                    case 'club':
                                        player.damage(1, 'thunder');
                                        break;
                                    case 'spade':
                                        player.damage(2, 'thunder');
                                        break;
                                }
                            },
                        },
                        exhuanbeng: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'damageEnd',
                                source: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                player.chooseToDiscard('hej', 999, true);
                                player.draw(2);
                            },
                        },
                        exbaolian: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'phaseDrawBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hp <= 999 || player.countCards('h') <= 999;
                            },
                            check(event, player) {
                                let num = game.countPlayer(function (current) {
                                    if (current.countCards('he') && current != player && get.attitude(player, current) <= 0) {
                                        return true;
                                    }
                                    if (current.countCards('j') && current != player && get.attitude(player, current) > 0) {
                                        return true;
                                    }
                                });
                                return num >= 2;
                            },
                            content() {
                                'step 0';
                                const targets = game.filterPlayer();
                                targets.remove(player);
                                targets.sort(lib.sort.seat);
                                event.targets = targets;
                                event.num = 0;
                                trigger.cancel();
                                player.line(targets, 'green');
                                ('step 1');
                                if (num < event.targets.length) {
                                    if (event.targets[num].countCards('hej')) {
                                        player.gainPlayerCard(event.targets[num], 'hej', true);
                                    }
                                    event.num++;
                                    event.redo();
                                }
                            },
                        },
                        exduyong: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'phaseDrawAfter',
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('exduyong'), function (card, player, target) {
                                        return lib.filter.targetEnabled({ name: 'juedou' }, player, target);
                                    })
                                    .set('ai', function (target) {
                                        return get.effect(target, { name: 'juedou' }, _status.event.player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.useCard({ name: 'juedou' }, result.targets, false);
                                }
                            },
                            ai: {
                                threaten(player, target) {
                                    return 1.6;
                                },
                            },
                        },
                        exxieyongyanliang: {
                            audio: 'ext:EX神将/audio:1',
                            usable: 1,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return player.hp <= 2;
                            },
                            content() {
                                'step 0';
                                player.uninit;
                                player.init(player.name, 'EX颜良');
                                ('step 1');
                                player.removeSkill('exduyong');
                                player.removeSkill('exxieyongwenchou');
                                player.removeSkill('exxieyongyanliang');
                                ('step 2');
                                player.gainMaxHp(1);
                                let num = player.maxHp;
                                player.recover(num);
                            },
                        },
                        exxieyongwenchou: {
                            audio: 'ext:EX神将/audio:1',
                            usable: 1,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return player.hp <= 2;
                            },
                            content() {
                                'step 0';
                                player.uninit;
                                player.init(player.name, 'EX文丑');
                                ('step 1');
                                player.removeSkill('exduyong');
                                player.removeSkill('exxieyongwenchou');
                                player.removeSkill('exxieyongyanliang');
                                ('step 2');
                                player.gainMaxHp(1);
                                let num = player.maxHp;
                                player.recover(num);
                            },
                        },
                        exhanmang: {
                            audio: 'ext:EX神将/audio:1',
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                player.loseHp(1);
                                ('step 1');
                                let list = ['juedou'];
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                                ('step 2');
                                let list1 = ['sha'];
                                player.gain(game.createCard(list1.randomGet()));
                                player.$draw();
                            },
                        },
                        excuxia: {
                            audio: 'ext:EX神将/audio:1',
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                player.chooseToDiscard(2, 'h', true);
                                ('step 1');
                                let list = ['juedou'];
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                                ('step 2');
                                let list1 = ['sha'];
                                player.gain(game.createCard(list1.randomGet()));
                                player.$draw();
                            },
                        },
                        exkuibai: {
                            audio: 'ext:EX神将/audio:2',
                            round: 1,
                            trigger: {
                                player: 'damageBefore',
                            },
                            usable: 1,
                            content() {
                                'step 0';
                                trigger.cancel();
                                ('step 1');
                                player.chooseToDiscard(999, 'he', true);
                            },
                            group: ['exkuibai_roundcount'],
                        },
                        exkuakou: {
                            audio: 'ext:EX神将/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            filterCard: true,
                            selectCard() {
                                if (ui.selected.targets.length) {
                                    return [1, ui.selected.targets[0].countCards('he')];
                                }
                                return [1, Infinity];
                            },
                            filterTarget(event, player, target) {
                                return target != player && target.countCards('he') >= Math.max(1, ui.selected.cards.length);
                            },
                            check(card) {
                                if (
                                    !game.hasPlayer(function (current) {
                                        return current != _status.event.player && get.attitude(_status.event.player, current) < 0 && current.countCards('he') > ui.selected.cards.length;
                                    })
                                ) {
                                    return 0;
                                }
                                return 6 - get.value(card);
                            },
                            content() {
                                target.chooseToDiscard(cards.length, 'he', true);
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target: -1,
                                },
                            },
                        },
                        exex: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            usable: 1,
                            content() {
                                'step 0';
                                event.targets = game.filterPlayer();
                                event.targets.remove(player);
                                event.targets.sort(lib.sort.seat);
                                player.line(event.targets, 'green');
                                ('step 1');
                                if (event.targets.length) {
                                    event.current = event.targets.shift();
                                    event.current.clearSkills();
                                }
                                ('step 2');
                                event.current.discard(event.current.getCards('hej', true, 999)).delay = false;
                                ('step 3');
                                event.current.popup('ext:EX神将:wan.gif');
                                ('step 4');
                                event.current.die();
                                event.current.revive();
                                event.current.die();
                                if (event.targets.length) {
                                    event.goto(1);
                                }
                            },
                        },
                        exxiongju: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'loseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (Array.isArray(event.cards)) {
                                    for (const i of event.cards) {
                                        //QQQ
                                        if (i.original == 'e') {
                                            return true;
                                        }
                                    }
                                }
                                return false;
                            },
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player && current.group == 'wu') {
                                        current.draw(1);
                                        player.draw(num == current.draw);
                                    }
                                });
                            },
                        },
                        exshehu: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(function (card, player, target) {
                                        return target;
                                    })
                                    .set('ai', function (target) {
                                        const player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool && result.targets && result.targets.length) {
                                    let num = [1, 1, 1, 1, 1, 1, 1, 1, 1, 3].randomGet();
                                    player.line(result.targets[0], 'green');
                                    result.targets[0].chooseToDiscard(1, 'e', true);
                                }
                            },
                        },
                        exzhiheng: {
                            audio: 'ext:EX神将/audio:2',
                            enable: 'phaseUse',
                            usable: 2,
                            position: 'he',
                            selectCard: 2,
                            filterCard: true,
                            check(card) {
                                if (get.type(card) != 'aaaaaaaa') {
                                    return 0;
                                }
                                const player = _status.currentPhase;
                                if (player.countCards('he', { subtype: get.subtype(card) }) > 2) {
                                    return 11 - get.equipValue(card);
                                }
                                return 6 - get.equipValue(card);
                            },
                            content() {
                                'step 0';
                                if (get.type(cards[0]) != 'aaaaaaaa') {
                                    player
                                        .chooseTarget('是否弃置一名角色的一张牌?', function (card, player, target) {
                                            return player != target && target.countCards('he') > 0;
                                        })
                                        .set('ai', function (target) {
                                            const player = _status.event.player;
                                            if (get.attitude(player, target) < 0) {
                                                return Math.max(0.5, get.effect(target, { name: 'sha' }, player, player));
                                            }
                                            return 0;
                                        });
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets, 'green');
                                    event.target = result.targets[0];
                                    player.discardPlayerCard(event.target, 'h', true).ai = get.buttonValue;
                                }
                                ('step 2');
                                player.draw(2);
                            },
                            ai: {
                                order: 9,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        exzhiba: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                global: 'phaseDrawBegin',
                            },
                            content() {
                                trigger.player.chooseToDiscard(2, 'he', true);
                                player.loseHp(1);
                            },
                            ai: {
                                expose: 0.3,
                                threaten: 1.3,
                            },
                        },
                        exxionghun: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'phaseBeginStart',
                            },
                            filter(event, player) {
                                return player.hp < player.maxHp - player.hp;
                            },
                            forced: true,
                            _priority: 3,
                            content() {
                                let num = player.maxHp - player.hp - player.hp;
                                player.draw(num);
                                player.recover(1);
                            },
                            ai: {
                                threaten: 1.4,
                            },
                        },
                        exjiang: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                global: ['useCard'],
                            },
                            filter(event, player) {
                                if (!(event.card.name == 'juedo' || (event.card.name == 'sha' && get.color(event.card) == 'red') || (event.card.name == 'guohe' && get.color(event.card) == 'red') || (event.card.name == 'shunshou' && get.color(event.card) == 'red') || (event.card.name == 'wanjian' && get.color(event.card) == 'red') || (event.card.name == 'nanman' && get.color(event.card) == 'red') || (event.card.name == 'sha' && get.color(event.card) == 'wugu') || (event.card.name == 'jiedao' && get.color(event.card) == 'red') || (event.card.name == 'tiesuo' && get.color(event.card) == 'red') || (event.card.name == 'huogong' && get.color(event.card) == 'red') || (event.card.name == 'wuzhong' && get.color(event.card) == 'red') || (event.card.name == 'shan' && get.color(event.card) == 'red') || (event.card.name == 'tao' && get.color(event.card) == 'red') || (event.card.name == 'jiu' && get.color(event.card) == 'red') || (event.card.name == 'sha' && get.color(event.card) == 'taoyuan') || (event.card.name == 'wuxie' && get.color(event.card) == 'red') || (event.card.name == 'juedou' && get.color(event.card) == 'red'))) {
                                    return false;
                                }
                                return player == event.player || event.targets.includes(player);
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (card.name == 'sha' && get.color(card) == 'red') {
                                            return [1, 0.6];
                                        }
                                    },
                                    player(card, player, target) {
                                        if (card.name == 'sha' && get.color(card) == 'red') {
                                            return [1, 1];
                                        }
                                    },
                                },
                            },
                        },
                        exjiandi: {
                            audio: 'ext:EX神将/audio:2',
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
                                game.log(target, '选择了' + get.translation(result.control));
                                event.choice = result.control;
                                target.popup(event.choice);
                                event.card = player.getCards('h').randomGet();
                                target.gain(event.card, player);
                                player.$give(event.card, target);
                                ('step 2');
                                target.chooseToDiscard('he', true, 3);
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        const eff = get.damageEffect(target, player);
                                        if (eff >= 0) {
                                            return 1 + eff;
                                        }
                                        let value = 0,
                                            i;
                                        const cards = player.getCards('h');
                                        for (let i = 0; i < cards.length; i++) {
                                            value += get.value(cards[i]);
                                        }
                                        value /= player.countCards('h');
                                        if (target.hp == 1) {
                                            return Math.min(0, value - 7);
                                        }
                                        return Math.min(0, value - 5);
                                    },
                                },
                            },
                        },
                        exxiongzi: {
                            audio: 'ext:EX神将/audio:2',
                            audioname: ['exxiongzi'],
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            check(event, player) {
                                return player.countCards('h') <= player.maxHp || player.skipList.includes('phaseUse');
                            },
                            content() {
                                trigger.num -= 2;
                                trigger.num += game.countPlayer();
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        exfengshi: {
                            audio: 'ext:EX神将/audio:2',
                            enable: 'phaseUse',
                            filterCard: true,
                            usable: 1,
                            selectTarget() {
                                return ui.selected.cards.length;
                            },
                            selectCard() {
                                const player = _status.event.player;
                                return [1, Infinity];
                            },
                            check(card) {
                                const player = get.owner(card);
                                if (player.countCards('h') > player.hp) {
                                    return 8 - get.value(card);
                                }
                                if (player.hp < player.maxHp) {
                                    return 6 - get.value(card);
                                }
                                return 4 - get.value(card);
                            },
                            filterTarget(card, player, target) {
                                if (target.sex != 'male') {
                                    return true;
                                }
                                if (target.hp >= target.maxHp) {
                                    return true;
                                }
                                if (target == player) {
                                    return true;
                                }
                                return true;
                            },
                            content() {
                                let num = [1, 1, 1, 1, 1, 1, 1, 1, 1, 3].randomGet();
                                target.damage(num, 'fire');
                            },
                        },
                        exguosed: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            forced: true,
                            content() {
                                player.skip('phaseDiscard');
                            },
                        },
                        exguosec: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                player.skip('phaseUse');
                            },
                        },
                        exguoseb: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                player.skip('phaseDraw');
                            },
                        },
                        exguosea: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                player.skip('phaseJudge');
                            },
                        },
                        exguose: {
                            audio: 'ext:EX神将/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard(card) {
                                const player = _status.event.player;
                                return card.suit == 'diamond';
                            },
                            position: 'he',
                            filterTarget(card, player, target) {
                                return target;
                            },
                            check(card) {
                                let num = get.value(card);
                                if (get.color(card) == 'red') {
                                    if (num >= 6) {
                                        return 0;
                                    }
                                    return 20 - num;
                                } else {
                                    if (_status.event.player.needsToDiscard()) {
                                        return 7 - num;
                                    }
                                }
                                return 0;
                            },
                            selectCard: 1,
                            content() {
                                'step 0';
                                player.chooseControl('跳过判定阶段', '跳过摸牌阶段', '跳过出牌阶段', '跳过弃牌阶段');
                                ('step 1');
                                if (result.control == '跳过判定阶段') {
                                    target.addSkill('exguosea');
                                    target.addSkill('exguosee');
                                }
                                if (result.control == '跳过摸牌阶段') {
                                    target.addSkill('exguoseb');
                                    target.addSkill('exguosee');
                                }
                                if (result.control == '跳过出牌阶段') {
                                    target.addSkill('exguosec');
                                    target.addSkill('exguosee');
                                }
                                if (result.control == '跳过弃牌阶段') {
                                    target.addSkill('exguosed');
                                    target.addSkill('exguosee');
                                }
                            },
                        },
                        exguosee: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                player.removeSkill('exguosea');
                                player.removeSkill('exguoseb');
                                player.removeSkill('exguosec');
                                player.removeSkill('exguosed');
                                player.removeSkill('exguosee');
                            },
                        },
                        exbanjun: {
                            audio: 'ext:EX神将/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard(card) {
                                const player = _status.event.player;
                                return card.suit == 'heart';
                            },
                            position: 'he',
                            filterTarget(card, player, target) {
                                return target;
                            },
                            check(card) {
                                let num = get.value(card);
                                if (get.color(card) == 'red') {
                                    if (num >= 6) {
                                        return 0;
                                    }
                                    return 20 - num;
                                } else {
                                    if (_status.event.player.needsToDiscard()) {
                                        return 7 - num;
                                    }
                                }
                                return 0;
                            },
                            selectCard: 1,
                            content() {
                                'step 0';
                                player.chooseControl('目标直至回合开始不受伤害', '目标直至回合结束无法回血');
                                ('step 1');
                                if (result.control == '目标直至回合开始不受伤害') {
                                    target.addSkill('exbanjuna');
                                    target.addSkill('exbanjunc');
                                }
                                if (result.control == '目标直至回合结束无法回血') {
                                    target.addSkill('exbanjunb');
                                    target.addSkill('exbanjund');
                                }
                            },
                        },
                        exbanjuna: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: ['damageBefore', 'loseHpBefore'],
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                        },
                        exbanjunb: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: ['recoverBefore'],
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                        },
                        exbanjunc: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'phaseBefore',
                            },
                            forced: true,
                            content() {
                                player.removeSkill('exbanjuna');
                            },
                        },
                        exbanjund: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                player.removeSkill('exbanjunb');
                            },
                        },
                        exjiarendaqiao: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                global: 'loseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (Array.isArray(event.cards)) {
                                    for (const i of event.cards) {
                                        //QQQ
                                        if (i.original == 'e') {
                                            return true;
                                        }
                                    }
                                }
                                return false;
                            },
                            content() {
                                const fang = get.cardPile2(function (card) {
                                    return card.suit == 'diamond';
                                });
                                if (fang) {
                                    player.gain(fang, 'gain2');
                                }
                            },
                        },
                        exjiarenxiaoqiao: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                global: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card) == 'equip';
                            },
                            content() {
                                const tao = get.cardPile2(function (card) {
                                    return card.suit == 'heart';
                                });
                                if (tao) {
                                    player.gain(tao, 'gain2');
                                }
                            },
                        },
                        exbuqu: {
                            audio: 'ext:EX神将/audio:2',
                            usable: 1,
                            trigger: {
                                player: 'dying',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.recover(1);
                                ('step 1');
                                player.draw(2);
                            },
                        },
                        exsizhan: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            check(event, player) {
                                return player.countCards('h') <= player.maxHp || player.skipList.includes('phaseUse');
                            },
                            content() {
                                'step 0';
                                trigger.num -= 2;
                                ('step 1');
                                event.cards = get.cards(event.num);
                                player.draw(player.maxHp - player.hp);
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return (num = player.maxHp - player.hp);
                                },
                            },
                        },
                        exhuzhu: {
                            audio: 'ext:EX神将/audio:2',
                            usable: 1,
                            trigger: {
                                global: 'shaBefore',
                            },
                            check(event, player) {
                                return get.attitude(player, event[event.name == 'gain' ? 'source' : 'player']) < 0;
                            },
                            logTarget(event) {
                                return event[event.name == 'gain' ? 'source' : 'player'];
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                                ('step 1');
                                player.loseHp(1);
                            },
                            ai: {
                                result: {
                                    player(player) {
                                        if (player.hp > 0) {
                                            return -1;
                                        }
                                    },
                                },
                            }, //QQQ
                        },
                        exzhongwang: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'damageBegin',
                            },
                            content() {
                                const num1 = trigger.source.countCards('e');
                                const num2 = num1 + num1;
                                trigger.source.chooseToDiscard('he', true, num2);
                            },
                            ai: {
                                maixie_defend: true,
                                threaten: 0.9,
                            },
                        },
                        exaowu: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.getStat('damage');
                            },
                            content() {
                                'step 0';
                                player.loseHp(1);
                                ('step 1');
                                let num = player.maxHp - player.hp;
                                player.draw(num);
                            },
                        },
                        exshicai: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.removeSkill('aocai');
                                ('step 1');
                                let list = get.gainableSkills(function (info) {
                                    if (typeof info.enable == 'string') {
                                        return info.enable == 'phaseUse';
                                    }
                                    if (Array.isArray(info.enable)) {
                                        return info.enable.includes('phaseUse');
                                    }
                                }, player);
                                list.remove(player.getSkills());
                                list = list.randomGets(1);
                                event.skillai = function () {
                                    return get.max(list, get.skillRank, 'item');
                                };
                                if (event.isMine()) {
                                    const dialog = ui.create.dialog('forcebutton');
                                    dialog.add('选择获得一项技能');
                                    const clickItem = function () {
                                        _status.event._result = this.link;
                                        dialog.close();
                                        game.resume();
                                    };
                                    for (let i = 0; i < list.length; i++) {
                                        if (lib.translate[list[i] + '_info']) {
                                            let translation = get.translation(list[i]);
                                            if (translation[0] == '新' && translation.length == 3) {
                                                translation = translation.slice(1, 3);
                                            } else {
                                                translation = translation.slice(0, 2);
                                            }
                                            const item = dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + translation + '】</div><div>' + lib.translate[list[i] + '_info'] + '</div></div>');
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
                                ('step 2');
                                _status.imchoosing = false;
                                const link = result;
                                player.addTempSkill(link, 'phaseUseAfter');
                                player.popup(link);
                                player.flashAvatar('gwfengchi', link);
                                game.log(player, '获得了技能', '【' + get.translation(link) + '】');
                                ('step 3');
                                let list1 = get.gainableSkills(function (info) {
                                    if (typeof info.enable == 'string') {
                                        return info.enable == 'phaseUse';
                                    }
                                    if (Array.isArray(info.enable)) {
                                        return info.enable.includes('phaseUse');
                                    }
                                }, player);
                                list1.remove(player.getSkills());
                                list1 = list1.randomGets(1);
                                event.skillai = function () {
                                    return get.max(list1, get.skillRank, 'item');
                                };
                                if (event.isMine()) {
                                    const dialog = ui.create.dialog('forcebutton');
                                    dialog.add('选择获得一项技能');
                                    const clickItem = function () {
                                        _status.event._result = this.link;
                                        dialog.close();
                                        game.resume();
                                    };
                                    for (let i = 0; i < list1.length; i++) {
                                        if (lib.translate[list1[i] + '_info']) {
                                            let translation = get.translation(list1[i]);
                                            if (translation[0] == '新' && translation.length == 3) {
                                                translation = translation.slice(1, 3);
                                            } else {
                                                translation = translation.slice(0, 2);
                                            }
                                            const item = dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + translation + '】</div><div>' + lib.translate[list1[i] + '_info'] + '</div></div>');
                                            item.firstChild.addEventListener('click', clickItem);
                                            item.firstChild.link = list1[i];
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
                                ('step 4');
                                _status.imchoosing = false;
                                const link1 = result;
                                player.addTempSkill(link1, 'phaseUseAfter');
                                player.popup(link1);
                                player.flashAvatar('gwfengchi', link1);
                                game.log(player, '获得了技能', '【' + get.translation(link1) + '】');
                                ('step 5');
                                let list2 = get.gainableSkills(function (info) {
                                    if (typeof info.enable == 'string') {
                                        return info.enable == 'phaseUse';
                                    }
                                    if (Array.isArray(info.enable)) {
                                        return info.enable.includes('phaseUse');
                                    }
                                }, player);
                                list2.remove(player.getSkills());
                                list2 = list2.randomGets(1);
                                event.skillai = function () {
                                    return get.max(list2, get.skillRank, 'item');
                                };
                                if (event.isMine()) {
                                    const dialog = ui.create.dialog('forcebutton');
                                    dialog.add('选择获得一项技能');
                                    const clickItem = function () {
                                        _status.event._result = this.link;
                                        dialog.close();
                                        game.resume();
                                    };
                                    for (let i = 0; i < list2.length; i++) {
                                        if (lib.translate[list2[i] + '_info']) {
                                            let translation = get.translation(list2[i]);
                                            if (translation[0] == '新' && translation.length == 3) {
                                                translation = translation.slice(1, 3);
                                            } else {
                                                translation = translation.slice(0, 2);
                                            }
                                            const item = dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + translation + '】</div><div>' + lib.translate[list2[i] + '_info'] + '</div></div>');
                                            item.firstChild.addEventListener('click', clickItem);
                                            item.firstChild.link = list2[i];
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
                                ('step 6');
                                _status.imchoosing = false;
                                const link2 = result;
                                player.addTempSkill(link2, 'phaseUseAfter');
                                player.popup(link2);
                                player.flashAvatar('gwfengchi', link2);
                                game.log(player, '获得了技能', '【' + get.translation(link2) + '】');
                            },
                        },
                        exyanjia: {
                            audio: 'ext:EX神将/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                const he = player.getCards('he');
                                let num = 0;
                                for (let i = 0; i < he.length; i++) {
                                    const info = lib.card[he[i].name];
                                    if (info.type == 'equip' && !info.nomod && !info.unique && lib.inpile.includes(he[i].name)) {
                                        num++;
                                        if (num >= 2) {
                                            return true;
                                        }
                                    }
                                }
                            },
                            filterCard(card) {
                                if (ui.selected.cards.length && card.name == ui.selected.cards[0].name) {
                                    return false;
                                }
                                const info = get.info(card);
                                return info.type == 'equip' && !info.nomod && !info.unique && lib.inpile.includes(card.name);
                            },
                            selectCard: 2,
                            position: 'he',
                            check(card) {
                                return get.value(card);
                            },
                            content() {
                                const name = cards[0].name + '_' + cards[1].name;
                                const info1 = get.info(cards[0]),
                                    info2 = get.info(cards[1]);
                                if (!lib.card[name]) {
                                    const info = {
                                        enable: true,
                                        type: 'equip',
                                        subtype: get.subtype(cards[0]),
                                        cardimage: info1.cardimage || cards[0].name,
                                        filterTarget(card, player, target) {
                                            return target == player;
                                        },
                                        selectTarget: -1,
                                        modTarget: true,
                                        content: lib.element.content.equipCard,
                                        legend: true,
                                        source: [cards[0].name, cards[1].name],
                                        onEquip: [],
                                        onLose: [],
                                        skills: [],
                                        distance: {},
                                        ai: {
                                            order: 8.9,
                                            equipValue: 10,
                                            useful: 2.5,
                                            value: 1,
                                            result: {
                                                target(player, target) {
                                                    return get.equipResult(player, target, name);
                                                },
                                            },
                                        },
                                    };
                                    for (let i in info1.distance) {
                                        info.distance[i] = info1.distance[i];
                                    }
                                    for (let i in info2.distance) {
                                        if (typeof info.distance[i] == 'number') {
                                            info.distance[i] += info2.distance[i];
                                        } else {
                                            info.distance[i] = info2.distance[i];
                                        }
                                    }
                                    if (info1.skills) {
                                        info.skills = info.skills.concat(info1.skills);
                                    }
                                    if (info2.skills) {
                                        info.skills = info.skills.concat(info2.skills);
                                    }
                                    if (info1.onEquip) {
                                        if (Array.isArray(info1.onEquip)) {
                                            info.onEquip = info.onEquip.concat(info1.onEquip);
                                        } else {
                                            info.onEquip.push(info1.onEquip);
                                        }
                                    }
                                    if (info2.onEquip) {
                                        if (Array.isArray(info2.onEquip)) {
                                            info.onEquip = info.onEquip.concat(info2.onEquip);
                                        } else {
                                            info.onEquip.push(info2.onEquip);
                                        }
                                    }
                                    if (info1.onLose) {
                                        if (Array.isArray(info1.onLose)) {
                                            info.onLose = info.onLose.concat(info1.onLose);
                                        } else {
                                            info.onLose.push(info1.onLose);
                                        }
                                    }
                                    if (info2.onLose) {
                                        if (Array.isArray(info2.onLose)) {
                                            info.onLose = info.onLose.concat(info2.onLose);
                                        } else {
                                            info.onLose.push(info2.onLose);
                                        }
                                    }
                                    if (info.onEquip.length == 0) {
                                        delete info.onEquip;
                                    }
                                    if (info.onLose.length == 0) {
                                        delete info.onLose;
                                    }
                                    lib.card[name] = info;
                                    lib.translate[name] = get.translation(cards[0].name, 'skill') + get.translation(cards[1].name, 'skill');
                                    let str = lib.translate[cards[0].name + '_info'];
                                    if (str[str.length - 1] == '.' || str[str.length - 1] == '.') {
                                        str = str.slice(0, str.length - 1);
                                    }
                                    lib.translate[name + '_info'] = str + ';' + lib.translate[cards[1].name + '_info'];
                                    game.addVideo('newcard', null, {
                                        name: name,
                                        translate: lib.translate[name],
                                        info: lib.translate[name + '_info'],
                                        card: cards[0].name,
                                        legend: true,
                                    });
                                }
                                player.gain(game.createCard({ name: name, suit: cards[0].suit, number: cards[0].number }), 'gain2');
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        exxibing: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current != player && current.countGainableCards(player, 'e') > 0;
                                });
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('exxibing'), function (card, player, current) {
                                    return current != player && current.countGainableCards(player, 'e') > 0;
                                }).ai = function (target) {
                                    return -num;
                                };
                                ('step 1');
                                if (result.bool) {
                                    event.target1 = result.targets[0];
                                    player.line(event.target1, 'exxibing');
                                    player.gainPlayerCard(event.target1, 99, 'e', true);
                                }
                            },
                        },
                        exzhijian: {
                            audio: 'ext:EX神将/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target;
                            },
                            delay: false,
                            content() {
                                let list = [];
                                for (let i = 1; i <= 5; i++) {
                                    if (!target.getEquip(i)) {
                                        const name = get.inpile('equip' + i).randomGet();
                                        if (name) {
                                            const card = game.createCard(name);
                                            list.push(card);
                                            target.equip(card);
                                        }
                                    }
                                }
                                if (list.length) {
                                    target.$draw(list);
                                }
                            },
                            ai: {
                                order: 11,
                                result: {
                                    player: 1,
                                    target(player, target) {
                                        if (target.getEquip(1)) {
                                            return 0;
                                        }
                                        return 1;
                                    },
                                },
                            },
                        },
                        exzexu: {
                            audio: 'ext:EX神将/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('h', { type: 'equip' }) > 0;
                            },
                            filterCard(card) {
                                return get.type(card) == 'equip';
                            },
                            check(card) {
                                const player = _status.currentPhase;
                                if (player.countCards('he', { subtype: get.subtype(card) }) > 1) {
                                    return 11 - get.equipValue(card);
                                }
                                return 6 - get.value(card);
                            },
                            filterTarget(card, player, target) {
                                if (target.isMin()) {
                                    return true;
                                }
                                const type = get.subtype(card);
                                return player != target;
                            },
                            content() {
                                target.equip(cards[0]);
                                if (target.maxHp - target.hp > target.hp) {
                                    target.recover(1);
                                }
                                if (target.maxHp - target.hp <= target.hp) {
                                    target.draw(1);
                                }
                                if (player.maxHp - player.hp > player.hp) {
                                    player.recover(1);
                                }
                                if (player.maxHp - player.hp <= player.hp) {
                                    player.draw(1);
                                }
                            },
                            discard: false,
                            prepare(cards, player, targets) {
                                player.$give(cards, targets[0], false);
                            },
                        },
                        exjixie: {
                            audio: 'ext:EX神将/audio:1',
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: true,
                            position: 'he',
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            check(card) {
                                return 8 - get.value(card); //QQQ
                            },
                            selectCard: 1,
                            discard: false,
                            prepare: 'give',
                            content() {
                                'step 0';
                                target.gain(cards, player);
                                ('step 1');
                                player.chooseControl('失去体力', '废除武器栏', '废除防具栏', '废除进攻马', '废除防御马', '废除宝物栏');
                                ('step 2');
                                if (result.control == '失去体力') {
                                    target.loseHp(1);
                                }
                                if (result.control == '废除武器栏') {
                                    target.disableEquip(1);
                                }
                                if (result.control == '废除防具栏') {
                                    target.disableEquip(2);
                                }
                                if (result.control == '废除进攻马') {
                                    target.disableEquip(4);
                                }
                                if (result.control == '废除防御马') {
                                    target.disableEquip(3);
                                }
                                if (result.control == '废除宝物栏') {
                                    target.disableEquip(5);
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        const eff = get.damageEffect(target, player);
                                        if (eff >= 0) {
                                            return 1 + eff;
                                        }
                                        let value = 0,
                                            i;
                                        const cards = player.getCards('h');
                                        for (let i = 0; i < cards.length; i++) {
                                            value += get.value(cards[i]);
                                        }
                                        value /= player.countCards('h');
                                        if (target.hp == 1) {
                                            return Math.min(0, value - 7);
                                        }
                                        return Math.min(0, value - 5);
                                    },
                                },
                            },
                        },
                        excuorui: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'phaseDrawBefore',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                let check;
                                let i,
                                    num = game.countPlayer(function (current) {
                                        return current != player && current.countCards('h') && get.attitude(player, current) <= 0;
                                    });
                                check = num >= 2;
                                player
                                    .chooseTarget(
                                        get.prompt('excuorui'),
                                        [1],
                                        function (card, player, target) {
                                            return target.countCards('h') > 0 && player != target;
                                        },
                                        function (target) {
                                            if (!_status.event.aicheck) {
                                                return 0;
                                            }
                                            let att = get.attitude(_status.event.player, target);
                                            if (target.hasSkill('tuntian')) {
                                                return att / 10;
                                            }
                                            return 1 - att;
                                        }
                                    )
                                    .set('aicheck', check);
                                ('step 1');
                                if (result.bool) {
                                    player.gainMultiple(result.targets);
                                    player.gainMultiple(result.targets);
                                    player.gainMultiple(result.targets);
                                    trigger.cancel();
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                            },
                            ai: {
                                threaten: 2,
                                expose: 0.3,
                            },
                        },
                        exweiwu: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'damageBefore',
                            },
                            forced: true,
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player && current.group == 'wei') {
                                        current.draw(1);
                                        player.draw(num == current.draw);
                                    }
                                });
                            },
                        },
                        exhuibian: {
                            audio: 'ext:EX神将/audio:2',
                            enable: 'phaseUse',
                            filterCard: true,
                            usable: 1,
                            selectTarget: [1, 3],
                            selectCard: 2,
                            check(card) {
                                const player = get.owner(card);
                                if (player.countCards('h') > player.hp) {
                                    return 8 - get.value(card);
                                }
                                if (player.hp < player.maxHp) {
                                    return 6 - get.value(card);
                                }
                                return 4 - get.value(card);
                            },
                            filterTarget(card, player, target) {
                                if (target == player) {
                                    return false;
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                player.chooseControl('受到一点伤害并摸一张牌', '失去一点体力并弃置一张牌');
                                ('step 1');
                                if (result.control == '受到一点伤害并摸一张牌') {
                                    target.damage(1);
                                    target.draw(1);
                                }
                                ('step 2');
                                if (result.control == '失去一点体力并弃置一张牌') {
                                    target.loseHp(1);
                                    target.chooseToDiscard(1, 'he', true);
                                }
                            },
                        },
                        exjianxiong: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return get.itemtype(event.cards) == 'cards' && get.position(event.cards[0]) == 'd';
                            },
                            content() {
                                'step 0';
                                player.chooseControl('获得这张牌', '摸两张牌', '伤害来源弃置两张牌');
                                ('step 1');
                                if (result.control == '获得这张牌') {
                                    player.gain(trigger.cards);
                                    player.$gain2(trigger.cards);
                                }
                                if (result.control == '摸两张牌') {
                                    player.draw(2);
                                }
                                if (result.control == '伤害来源弃置两张牌') {
                                    trigger.source.chooseToDiscard(2, 'he', true);
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (player.hasSkillTag('jueqing', false, target)) {
                                            return [1, -1];
                                        }
                                        if (get.tag(card, 'damage')) {
                                            return [1, 0.55];
                                        }
                                    },
                                },
                            },
                        },
                        exlanxin: {
                            usable: 1,
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'useCardAfter',
                            },
                            check(event, player) {
                                return 18 - get.value(event.card) - player.maxHp * 2;
                            },
                            filter(event, player) {
                                if (!player.isPhaseUsing()) {
                                    return false;
                                }
                                if (event.cards) {
                                    if (get.type(event.card) != 'trick') {
                                        return true;
                                    }
                                    if (Array.isArray(event.cards)) {
                                        for (const i of event.cards) {
                                            //QQQ
                                            if (i.isInPile()) {
                                                return true;
                                            }
                                        }
                                    }
                                }
                                return false;
                            },
                            content() {
                                let list = [];
                                if (Array.isArray(trigger.cards)) {
                                    for (const i of trigger.cards) {
                                        if (i.isInPile()) {
                                            list.push(i);
                                        }
                                    }
                                }
                                player.gain(list, 'gain2');
                            },
                        },
                        exzhaohun: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                global: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.card && event.card.name != 'sh' && event.source && event.player.classList.contains('dead') == false && player.countCards('he');
                            },
                            forced: true,
                            checkx(event, player) {
                                const att1 = get.attitude(player, event.player);
                                const att2 = get.attitude(player, event.source);
                                return att1 > 0 && att2 <= 0;
                            },
                            content() {
                                'step 0';
                                const next = player.chooseToDiscard('he', get.prompt('exzhaohun'));
                                let check = lib.skill.beige.checkx(trigger, player);
                                next.set('ai', function (card) {
                                    if (_status.event.goon) {
                                        return 8 - get.value(card);
                                    }
                                    return 0;
                                });
                                next.set('goon', check);
                                ('step 1');
                                if (result.bool) {
                                    trigger.player.judge();
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                switch (result.card.suit) {
                                    case 'heart':
                                        trigger.player.draw(2);
                                        break;
                                    case 'diamond':
                                        trigger.player.draw(2);
                                        break;
                                    case 'club':
                                        trigger.source.chooseToDiscard('he', 2, true);
                                        break;
                                    case 'spade':
                                        trigger.source.chooseToDiscard('he', 2, true);
                                        break;
                                }
                                ('step 3');
                                player.draw(1);
                            },
                            ai: {
                                expose: 0.3,
                            },
                        },
                        exlishang: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                global: 'dyingBefore',
                            },
                            check(event, player) {
                                return get.attitude(player, event[event.name == 'gain' ? 'source' : 'player']) > 0;
                            },
                            logTarget(event) {
                                return event[event.name == 'gain' ? 'source' : 'player'];
                            },
                            content() {
                                player.draw(3);
                                trigger.player.draw(3);
                                trigger.source?.clearSkills();
                                player.removeSkill('exlishang');
                            },//QQQ
                            ai: {
                                maixie_defend: true,
                                threaten: 0.9,
                            },
                        },
                        exliufang: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                source: 'damageAfter',
                                player: 'damageAfter',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('exliufang'), '令一名其他角色将武将牌翻面并摸' + get.cnNumber(player.getDamagedHp()) + '张牌', function (card, player, target) {
                                    return target;
                                }).ai = function (target) {
                                    if (target.hasSkillTag('noturn')) {
                                        return 0;
                                    }
                                    const player = _status.event.player;
                                    if (get.attitude(_status.event.player, target) == 0) {
                                        return 0;
                                    }
                                    if (get.attitude(_status.event.player, target) > 0) {
                                        if (target.classList.contains('turnedover')) {
                                            return 1000 - target.countCards('h');
                                        }
                                        if (player.getDamagedHp() < 3) {
                                            return -1;
                                        }
                                        return 100 - target.countCards('h');
                                    } else {
                                        if (target.classList.contains('turnedover')) {
                                            return -1;
                                        }
                                        if (player.getDamagedHp() >= 3) {
                                            return -1;
                                        }
                                        return 1 + target.countCards('h');
                                    }
                                };
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].turnOver();
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) {
                                                return [1, -2];
                                            }
                                            if (target.hp <= 1) {
                                                return;
                                            }
                                            if (!target.hasFriend()) {
                                                return;
                                            }
                                            let hastarget = false;
                                            let turnfriend = false;
                                            const players = game.filterPlayer();
                                            for (let i = 0; i < players.length; i++) {
                                                if (get.attitude(target, players[i]) < 0 && !players[i].isTurnedOver()) {
                                                    hastarget = true;
                                                }
                                                if (get.attitude(target, players[i]) > 0 && players[i].isTurnedOver()) {
                                                    hastarget = true;
                                                    turnfriend = true;
                                                }
                                            }
                                            if (get.attitude(player, target) > 0 && !hastarget) {
                                                return;
                                            }
                                            if (turnfriend || target.hp == target.maxHp) {
                                                return [0.5, 1];
                                            }
                                            if (target.hp > 1) {
                                                return [1, 0.5];
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        exshangxing: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                global: 'die',
                            },
                            filter(event, player) {
                                return event.player.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                event.togain = trigger.player.getCards('he');
                                player.gain(event.togain, trigger.player, 'giveAuto');
                                player.draw(3);
                            },
                        },
                        exweiwei: {
                            group: ['exweiweia'],
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                global: ['turnOverAfter'],
                            },
                            filter(event, player) {
                                if (event.name == 'link') {
                                    return event.player.isLinked();
                                }
                                return !event.player.isTurnedOver();
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) > 0;
                            },
                            forced: true,
                            logTarget: 'player',
                            content() {
                                trigger.player.draw(1);
                                player.draw(1);
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        exjinnang: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'phaseDiscardEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                event.cards = get.cards(trigger.num);
                                ('step 1');
                                if (event.cards.length > 1) {
                                    player.chooseCardButton('将牌分配给任意角色', true, event.cards, [1, event.cards.length]).set('ai', function (button) {
                                        if (ui.selected.buttons.length == 0) {
                                            return 1;
                                        }
                                        return 0;
                                    });
                                } else if (event.cards.length == 1) {
                                    event._result = { links: event.cards.slice(0), bool: true };
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    for (const i of result.links) {
                                        event.cards.remove(i);
                                    }
                                    event.togive = result.links.slice(0);
                                    player
                                        .chooseTarget('将' + get.translation(result.links) + '交给一名角色', true)
                                        .set('ai', function (target) {
                                            let att = get.attitude(_status.event.player, target);
                                            if (_status.event.enemy) {
                                                return -att;
                                            } else if (att > 0) {
                                                return att / (1 + target.countCards('h'));
                                            } else {
                                                return att / 100;
                                            }
                                        })
                                        .set('enemy', get.value(event.togive[0]) < 0);
                                }
                                ('step 3');
                                if (result.targets.length) {
                                    result.targets[0].gain(event.togive, 'draw');
                                    player.line(result.targets[0], 'green');
                                    game.log(result.targets[0], '获得了' + get.cnNumber(event.togive.length) + '张牌');
                                    event.goto(1);
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) {
                                                return [1, -2];
                                            }
                                            if (!target.hasFriend()) {
                                                return;
                                            }
                                            let num = 1;
                                            if (get.attitude(player, target) > 0) {
                                                if (player.needsToDiscard()) {
                                                    num = 0.7;
                                                } else {
                                                    num = 0.5;
                                                }
                                            }
                                            if (target.hp >= 4) {
                                                return [1, num * 2];
                                            }
                                            if (target.hp == 3) {
                                                return [1, num * 1.5];
                                            }
                                            if (target.hp == 2) {
                                                return [1, num * 0.5];
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        exyice: {
                            audio: 'ext:武将拓展:2',
                            trigger: {
                                player: 'damageAfter',
                            },
                            forced: true,
                            content() {
                                let num = [0, 1].randomGet();
                                player.recover(num);
                            },
                        },
                        exsuji: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.gainMaxHp(1);
                                ('step 1');
                                player.loseHp(1);
                                ('step 2');
                                trigger.num += 1;
                            },
                            ai: {
                                threaten: 1.3,
                            },
                        },
                        exfenming: {
                            audio: 'ext:武将拓展:1',
                            trigger: {
                                player: 'shaBefore',
                            },
                            content() {
                                player.loseMaxHp(1);
                                let num = [1, 1, 1, 1, 1, 1, 1, 1, 1, 3].randomGet();
                                trigger.target.damage(num);
                            },
                        },
                        exzhiji: {
                            audio: 'ext:EX神将/audio:1',
                            enable: 'phaseUse',
                            filterCard: true,
                            usable: 1,
                            selectCard: -1,
                            check(card) {
                                const player = get.owner(card);
                                if (player.countCards('h') > player.hp) {
                                    return 8 - get.value(card);
                                }
                                if (player.hp < player.maxHp) {
                                    return 6 - get.value(card);
                                }
                                return 4 - get.value(card);
                            },
                            filterTarget(card, player, target) {
                                if (target.sex != 'male') {
                                    return true;
                                }
                                if (target.hp >= target.maxHp) {
                                    return true;
                                }
                                if (target == player) {
                                    return true;
                                }
                                return true;
                            },
                            content() {
                                player.chooseToDiscard(999, 'hej', true);
                                player.removeSkill('exsuji');
                                player.removeSkill('exfenming');
                                player.removeSkill('exzhiji');
                                let num = target.hp;
                                target.loseHp(num);
                                player.loseHp(num);
                            },
                        },
                        exqibu: {
                            audio: 'ext:EX神将/audio:2',
                            mark: true,
                            marktext: '步',
                            init(player) {
                                player.storage.exqibu = 0;
                                player.markSkill('exqibu');
                            },
                            trigger: {
                                player: 'phaseBefore',
                            },
                            forced: true,
                            content() {
                                player.storage.exqibu += 1;
                                player.markSkill('exqibu');
                                player.draw(1);
                            },
                            intro: {
                                content: 'mark',
                            },
                        },
                        exqibuc: {
                            audio: 'ext:EX神将/audio:2',
                            mark: true,
                            marktext: '步',
                            init(player) {
                                player.storage.exqibu = 0;
                                player.markSkill('exqibu');
                            },
                            trigger: {
                                player: ['damageAfter', 'turnOverAfter'],
                            },
                            forced: true,
                            content() {
                                player.storage.exqibu -= 1;
                                player.markSkill('exqibu');
                                player.draw(1);
                                player.removeSkill('exqiai2');
                            },
                            intro: {
                                content: 'mark',
                            },
                        },
                        exqibuall: {
                            group: ['exqibu', 'exqibub', 'exqibuc', 'exqibup', 'exqibuabcd'],
                        },
                        exqibub: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.exqibu > 7;
                            },
                            content() {
                                player.die();
                            },
                        },
                        exqiai: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                source: 'damageEnd',
                                player: 'damageEnd',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            filter(event, player) {
                                return event.player != player && event.player.isIn() && !event.player.hasSkill('exqiai2');
                            },
                            logTarget: 'player',
                            content() {
                                trigger.player.addSkill('exqiai2');
                                trigger.player.addSkill('exqiai3');
                                trigger.player.addSkill('exqiai33');
                            },
                        },
                        exqiai2: {
                            audio: 'ext:EX神将/audio:2',
                            mark: true,
                            marktext: '哀',
                            intro: {
                                content: '【七哀】标记',
                            },
                            init(player) {
                                player.storage.exqiai2 = 1;
                            },
                            trigger: {
                                player: 'phaseBefore',
                            },
                            silent: true,
                            content() {
                                player.storage.exqiai2++;
                                if (player.storage.exqiai2 <= 0) {
                                    // player.loseHp();
                                    player.removeSkill('exqiai2');
                                }
                            },
                            forced: true,
                            popup: false,
                        },
                        exqiai3: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.exqiai2 >= 7;
                            },
                            content() {
                                player.die();
                            },
                        },
                        exqiai33: {
                            audio: 'ext:EX神将/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.storage.exqiai2 >= 1;
                            },
                            usable: 1,
                            content() {
                                'step 0';
                                player.turnOver();
                                ('step 1');
                                player.storage.exqiai2--;
                            },
                            ai: {
                                basic: {
                                    order: 2,
                                },
                                result: {
                                    player(player) {
                                        if (player.storage.exqiai2 < 8) {
                                            return -1;
                                        }
                                        return 1;
                                    },
                                },
                            },
                        },
                        extuilang: {
                            audio: 'ext:EX神将/audio:2',
                            mark: true,
                            marktext: '轮',
                            init(player) {
                                player.storage.extuilang = 0;
                                player.markSkill('extuilang');
                            },
                            trigger: {
                                player: 'phaseBefore',
                            },
                            forced: true,
                            content() {
                                player.storage.extuilang += 1;
                                player.markSkill('extuilang');
                            },
                            intro: {
                                content: 'mark',
                            },
                        },
                        ex222: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            check(event, player) {
                                return player.storage.extuilang > 1;
                            },
                            content() {
                                player.gainMaxHp(1);
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        ex111: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            check(event, player) {
                                return player.storage.extuilang >= 0;
                            },
                            content() {
                                'step 0';
                                trigger.num -= 2;
                                ('step 1');
                                player.draw(player.storage.extuilang);
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        extuilangall: {
                            audio: 'ext:EX神将/audio:1',
                            group: ['ex111', 'ex222', 'extuilang'],
                        },
                        exfanshi2: {
                            marktext: '噬',
                            intro: {
                                content: '当你受到伤害后,$受到等量的伤害,当你回复体力后,$回复等量的体力',
                            },
                            nopop: true,
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                if (!(player.storage.extunshimark && player.storage.extunshimark.isIn() && event.num > 0)) {
                                    return false;
                                }
                                if (event.name == 'damage') {
                                    return true;
                                }
                                return player.storage.extunshimark.isDamaged();
                            },
                            content() {
                                'step 0';
                                'step 1';
                                player.markSkill('extunshimark');
                                const target = player.storage.extunshimark;
                                player.line(target, 'green');
                                target[trigger.name](trigger.num, 'nosource');
                            },
                        },
                        extunshimark: {
                            audio: 'ext:EX神将/audio:2',
                            mark: true,
                            marktext: '噬',
                            intro: {
                                content: '倒计时开始',
                            },
                            init(player) {
                                player.storage.extunshimark = 45;
                            },
                            trigger: {
                                player: ['useCardBefore', 'gainBefore', 'drawBefore'],
                            },
                            silent: true,
                            content() {
                                player.storage.extunshimark--;
                                player.markSkill('extunshimark');
                            },
                            forced: true,
                            popup: false,
                        },
                        buyongqipai: {
                            audio: 'ext:EX神将/audio:2',
                            audioname: ['re_lvmeng', 'sp_lvmeng'],
                            trigger: {
                                player: 'phaseDiscardBefore',
                            },
                            forced: true,
                            frequent(event, player) {
                                return player.needsToDiscard();
                            },
                            filter(event, player) {
                                return player;
                            },
                            content() {
                                trigger.cancel();
                            },
                        },
                        exxinqiai: {
                            audio: 'ext:EX神将/audio:2',
                            enable: 'phaseUse',
                            round: 1,
                            content() {
                                'step 0';
                                player.chooseControl('自己翻面', '开始新回合');
                                ('step 1');
                                if (result.control == '自己翻面') {
                                    player.recover(1);
                                    player.turnOver();
                                }
                                ('step 2');
                                if (result.control == '开始新回合') {
                                    player.loseHp(1);
                                    player.phase('nodelay');
                                }
                            },
                            group: ['exxinqiai_roundcount'],
                        },
                        exqibup: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.exqibu < -7;
                            },
                            content() {
                                player.die();
                            },
                        },
                        extunshidie: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: ['useCardEnd', 'gainEnd', 'drawEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.extunshimark <= 0;
                            },
                            content() {
                                player.die();
                            },
                        },
                        extunshi: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                let num = player.maxHp - player.hp;
                                trigger.source.chooseToDiscard(num, 'he', true);
                                trigger.source.addSkill('extunshidie');
                            },
                        },
                        extunshiaaa: {
                            audio: 'ext:EX神将/audio:2',
                            mark: true,
                            marktext: '吞',
                            init(player) {
                                player.storage.extunshiaaa = 0;
                                player.markSkill('extunshiaaa');
                            },
                            trigger: {
                                player: 'damageAfter',
                            },
                            forced: true,
                            content() {
                                player.storage.extunshiaaa += 1;
                                player.markSkill('extunshiaaa');
                            },
                            intro: {
                                content: 'mark',
                            },
                            group: ['extunshibbb'],
                        },
                        extunshibbb: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return player.storage.extunshiaaa >= 3;
                            },
                            content() {
                                'step 0';
                                player.storage.extunshiaaa -= 3;
                                player.markSkill('extunshiaaa');
                                player.recover(1);
                                let num = player.maxHp - player.hp;
                                player.draw(num);
                                ('step 1');
                                player
                                    .chooseTarget(function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        const player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 2');
                                result.targets[0].addSkill('extunshimark');
                            },
                        },
                        extunshixxx: {
                            group: ['extunshiaaa', 'extunshibbb', 'extunshi'],
                        },
                        exmingshi: {
                            audio: 'ext:EX神将/audio:2',
                            forced: true,
                            trigger: {
                                player: 'damageAfter',
                            },
                            content() {
                                'step 0';
                                player.chooseControl('弃一张牌', '摸一张牌');
                                ('step 1');
                                if (result.control == '弃一张牌') {
                                    player.chooseToDiscard(1);
                                } else {
                                    player.draw(1);
                                }
                                ('step 2');
                                player.phase('nodelay');
                            },
                        },
                        exqianrang: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'phaseBefore',
                            },
                            async content(event, trigger, player) {
                                //QQQ
                                const { result } = await player
                                    .chooseTarget((card, player, target) => target != player)
                                    .set('ai', (t) => {
                                        if (t.isFriendsOf(player)) {
                                            return Math.abs(t.countCards('h') - player.countCards('h')) > 1;
                                        }
                                        return t.countCards('h') - player.countCards('h') > 1;
                                    });
                                if (result.targets && result.targets[0]) {
                                    const num1 = result.targets[0].countCards('h');
                                    const num2 = player.countCards('h');
                                    if (num1 > num2) {
                                        player.drawTo(num1);
                                    } else {
                                        result.targets[0].drawTo(num2);
                                    }
                                    trigger.cancel();
                                }
                            },
                        },
                        exshoucheng: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            forced: true,
                            content() {
                                let num = player.hp;
                                player.draw(num);
                            },
                        },
                        exshouchengb: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'phaseBefore',
                            },
                            forced: true,
                            content() {
                                let num = player.maxHp - player.hp;
                                if (num > 0) {
                                    player.chooseToDiscard(num, 'he', true);
                                }
                            },
                            group: ['exshoucheng'],
                        },
                        exgubu: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return player.hp <= player.maxHp - player.hp;
                            },
                            forced: true,
                            content() {
                                if (player.hp <= player.maxHp - player.hp) {
                                    player.loseMaxHp(1);
                                    let num = player.maxHp - player.hp;
                                    player.recover(num);
                                }
                            },
                        },
                        exsu: {
                            audio: 'ext:EX神将/audio:',
                            mark: true,
                            marktext: '肃',
                            init(player) {
                                player.storage.exsu = 0;
                                player.markSkill('exsu');
                            },
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            content() {
                                player.storage.exsu += 0;
                                player.markSkill('exsu');
                            },
                            intro: {
                                content: 'mark',
                            },
                        },
                        exqing: {
                            audio: 'ext:EX神将/audio:',
                            mark: true,
                            marktext: '清',
                            init(player) {
                                player.storage.exqing = 0;
                                player.markSkill('exqing');
                            },
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            content() {
                                player.storage.exqing += 0;
                                player.markSkill('exqing');
                            },
                            intro: {
                                content: 'mark',
                            },
                        },
                        exba: {
                            audio: 'ext:EX神将/audio:',
                            mark: true,
                            marktext: '八',
                            init(player) {
                                player.storage.exba = 0;
                                player.markSkill('exba');
                            },
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            content() {
                                player.storage.exba += 0;
                                player.markSkill('exba');
                            },
                            intro: {
                                content: 'mark',
                            },
                        },
                        exhuang: {
                            audio: 'ext:EX神将/audio:',
                            mark: true,
                            marktext: '荒',
                            init(player) {
                                player.storage.exhuang = 0;
                                player.markSkill('exhuang');
                            },
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            content() {
                                player.storage.exhuang += 0;
                                player.markSkill('exhuang');
                            },
                            intro: {
                                content: 'mark',
                            },
                        },
                        exguimingb: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'phaseBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.exsu >= 0 && player.storage.exqing >= 0 && player.storage.exba >= 0 && player.storage.exhuang >= 0;
                            },
                            content() {
                                let bool;
                                if (player == game.me) {
                                    bool = true;
                                }
                                game.over(bool);
                            },
                        },
                        exguiming: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'loseHpAfter',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.judge();
                                ('step 1');
                                switch (result.card.suit) {
                                    case 'heart':
                                        player.addSkill('exsu');
                                        break;
                                    case 'diamond':
                                        player.addSkill('exqing');
                                        break;
                                    case 'club':
                                        player.addSkill('exba');
                                        break;
                                    case 'spade':
                                        player.addSkill('exhuang');
                                        break;
                                }
                            },
                            group: ['exguimingb'],
                        },
                        exzhaoxin: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'damageBefore',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                trigger.cancel();
                                ('step 1');
                                player.loseHp(1);
                                ('step 2');
                                let num = player.maxHp - player.hp;
                                player.draw(num);
                            },
                        },
                        exraoshe: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'phaseBefore',
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        const player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                result.targets[0].addTempSkill('exraosheb');
                            },
                        },
                        exraosheb: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                global: 'useCardBefore',
                            },
                            forced: true,
                            content() {
                                player.chooseToDiscard(1, 'hej', true);
                            },
                        },
                        exyongwei: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                global: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                trigger.player.draw(1);
                            },
                        },
                        exkuangcaia: {
                            audio: 'ext:EX神将/audio:5',
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.draw(1);
                            },
                        },
                        exkuangcaib: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'loseEnd',
                            },
                            filter(event, player) {
                                if (Array.isArray(event.cards)) {
                                    for (const i of event.cards) {
                                        //QQQ
                                        if (i.original == 'h') {
                                            return true;
                                        }
                                    }
                                }
                                return false;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.loseHp(1);
                            },
                        },
                        exkuangcaic: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'phaseBefore',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.addTempSkill('exkuangcaia');
                                player.removeSkill('exkuangcaib');
                                player.removeSkill('exjigu');
                            },
                        },
                        exkuangcaid: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.addSkill('exkuangcaib');
                                player.addSkill('exjigu');
                            },
                        },
                        exkuangcaiall: {
                            group: ['exkuangcaic', 'exkuangcaid', 'exkuangcaix'],
                        },
                        exjigu: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                global: 'damageBefore',
                            },
                            check(event, player) {
                                return get.attitude(player, event[event.name == 'gain' ? 'source' : 'player']) < 0;
                            },
                            logTarget(event) {
                                return event[event.name == 'gain' ? 'source' : 'player'];
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard(1, 'he', true);
                                ('step 1');
                                trigger.cancel();
                                trigger.player.loseHp(trigger.num + 1);
                            },
                        },
                        exkuangcaix: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                global: 'gameDrawBefore',
                            },
                            forced: true,
                            content() {
                                player.addSkill('exkuangcaib', 'exjigu');
                            },
                        },
                        exzhoushi: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'phaseUseBefore',
                            },
                            content() {
                                'step 0';
                                let num = player.countCards('h', { type: 'basic' });
                                player.chooseToDiscard(num, ('h', { type: 'basic' }), true);
                                player.draw(num * 2);
                            },
                        },
                        exzhoushitrue: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            content() {
                                player.draw(3);
                                player.chooseToDiscard(3, 'hej', true);
                            },
                        },
                        exjianfu: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                global: ['loseHpBefore', 'recoverBefore'],
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                                trigger.player.chooseToDiscard(999, 'he', true);
                                trigger.player.loseMaxHp(trigger.num);
                                ('step 1');
                                player.removeSkill('exjianfu');
                                player.addSkill('mashu');
                            },
                        },
                        expingbei: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'shaBegin',
                            },
                            check(event, player) {
                                if (get.attitude(player, event.target) > 0) {
                                    return true;
                                }
                                return;
                            },
                            logTarget: 'target',
                            content() {
                                trigger.cancel();
                                trigger.target.loseMaxHp(1);
                            },
                        },
                        exshu: {
                            audio: 'ext:EX神将/audio:1',
                            enable: 'phaseUse',
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(function (card, player, target) {
                                        return _status.event.sourcex != target;
                                    })
                                    .set('ai', function (target) {
                                        const player = _status.event.player;
                                        return get.recoverEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    const target = result.targets[0];
                                    player.line(target, 'green');
                                    let num = target.maxHp - target.hp;
                                    target.recover(num);
                                }
                                ('step 2');
                                player.removeSkill('exshu');
                            },
                        },
                        exhui: {
                            audio: 'ext:EX神将/audio:1',
                            enable: 'phaseUse',
                            check(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current != player && get.attitude(player, current) > 0;
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(function (card, player, target) {
                                        return target.maxHp > 3;
                                    })
                                    .set('ai', function (target) {
                                        const player = _status.event.player;
                                        return get.recoverEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    const target = result.targets[0];
                                    player.line(target, 'green');
                                    target.draw(Math.min(target.maxHp));
                                }
                                ('step 2');
                                player.removeSkill('exhui');
                            },
                        },
                        exxian: {
                            audio: 'ext:EX神将/audio:1',
                            enable: 'phaseUse',
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(function (card, player, target) {
                                        return _status.event.sourcex != target;
                                    })
                                    .set('ai', function (target) {
                                        const player = _status.event.player;
                                        return get.recoverEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    const target = result.targets[0];
                                    player.line(target, 'green');
                                    let num = target.maxHp - target.hp;
                                    target.gainMaxHp(2);
                                }
                                ('step 2');
                                player.removeSkill('exxian');
                            },
                        },
                        exwan: {
                            audio: 'ext:EX神将/audio:1',
                            enable: 'phaseUse',
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(function (card, player, target) {
                                        return _status.event.sourcex != target;
                                    })
                                    .set('ai', function (target) {
                                        const player = _status.event.player;
                                        return get.recoverEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    const target = result.targets[0];
                                    player.line(target, 'green');
                                    target.chooseToDiscard(3, 'j', true);
                                    if (target.isTurnedOver()) {
                                        target.turnOver();
                                    }
                                    if (target.isLinked()) {
                                        target.link();
                                    }
                                }
                                ('step 2');
                                player.removeSkill('exwan');
                            },
                        },
                        exyueheng: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(function (card, player, target) {
                                    return target != player && _status.event.sourcex != target;
                                });
                                ('step 1');
                                if (result.bool) {
                                    const target = result.targets[0];
                                    player.line(target, 'green');
                                    let num = Math.floor(target.countCards('e'));
                                    target.chooseToDiscard(num, 'he', true);
                                    target.draw(num);
                                    player.draw(num);
                                }
                            },
                        },
                        exhuanyu: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'useCardAfter',
                            },
                            filter(event, player) {
                                if (event.name != 'useCard' && player.hp >= 2 && event.player == event.target) {
                                    return false;
                                }
                                return event.card && event.card.suit == 'heart';
                            },
                            intro: {
                                content: 'cards',
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(function (card, player, target) {
                                        return target;
                                    })
                                    .set('ai', function (target) {
                                        const player = _status.event.player;
                                        return get.recoverEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    const target = result.targets[0];
                                    player.line(target, 'green');
                                    target.draw(1);
                                }
                                ('step 2');
                                player.loseHp(1);
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                },
                                result: {
                                    player(player) {
                                        if (player.hp < 2) {
                                            return -1;
                                        }
                                        return 1;
                                    },
                                },
                            },
                        },
                        exhufeng: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'useCardAfter',
                            },
                            filter(event, player) {
                                if (event.name != 'useCard' && player.hp >= 2 && event.player == event.target) {
                                    return false;
                                }
                                return event.card && event.card.suit == 'diamond';
                            },
                            intro: {
                                content: 'cards',
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(function (card, player, target) {
                                        return target;
                                    })
                                    .set('ai', function (target) {
                                        const player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    const target = result.targets[0];
                                    player.line(target, 'green');
                                    target.chooseToDiscard(1, 'he', true);
                                }
                                ('step 2');
                                player.loseHp(1);
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                },
                                result: {
                                    player(player) {
                                        if (player.hp < 2) {
                                            return -1;
                                        }
                                        return 1;
                                    },
                                },
                            },
                        },
                        exzhaolei: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'useCardAfter',
                            },
                            filter(event, player) {
                                if (event.name != 'useCard' && player.hp >= 2 && event.player == event.target) {
                                    return false;
                                }
                                return event.card && event.card.suit == 'spade';
                            },
                            intro: {
                                content: 'cards',
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(function (card, player, target) {
                                        return target;
                                    })
                                    .set('ai', function (target) {
                                        const player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    const target = result.targets[0];
                                    player.line(target, 'green');
                                    target.damage(1, 'thunder', true);
                                }
                                ('step 2');
                                player.loseHp(1);
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                },
                                result: {
                                    player(player) {
                                        if (player.hp < 2) {
                                            return -1;
                                        }
                                        return 1;
                                    },
                                },
                            },
                        },
                        exxianxue: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'useCardAfter',
                            },
                            filter(event, player) {
                                if (event.name != 'useCard' && player.hp >= 2 && event.player == event.target) {
                                    return false;
                                }
                                return event.card && event.card.suit == 'club';
                            },
                            intro: {
                                content: 'cards',
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(function (card, player, target) {
                                        return target;
                                    })
                                    .set('ai', function (target) {
                                        const player = _status.event.player;
                                        return get.recoverEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    const target = result.targets[0];
                                    player.line(target, 'green');
                                    target.recover(1);
                                }
                                ('step 2');
                                player.loseHp(1);
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                },
                                result: {
                                    player(player) {
                                        if (player.hp < 2) {
                                            return -1;
                                        }
                                        return 1;
                                    },
                                },
                            },
                        },
                        exhuangtuanb: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        const player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                let num = player.storage.exhuangtian;
                                result.targets[0].loseHp(Math.ceil(num / 2));
                                player.recover(Math.ceil(num / 2));
                                player.storage.exhuangtian -= num;
                                player.markSkill('exhuangtian');
                            },
                        },
                        exhuangtian: {
                            audio: 'ext:EX神将/audio:2',
                            mark: true,
                            marktext: '黄',
                            init(player) {
                                player.storage.exhuangtian = 0;
                                player.markSkill('exhuangtian');
                            },
                            trigger: {
                                player: 'loseHpAfter',
                            },
                            forced: true,
                            content() {
                                player.storage.exhuangtian += 1;
                                player.markSkill('exhuangtian');
                            },
                            intro: {
                                content: 'mark',
                            },
                        },
                        exluanshizhangjiao: {
                            group: ['exhufeng', 'exhuanyu', 'exzhaolei', 'exxianxue'],
                        },
                        exzhuisi: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            content() {
                                player.addSkill('exshu');
                                player.addSkill('exhui');
                                player.addSkill('exxian');
                                player.addSkill('exwan');
                            },
                        },
                        exleiming: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'phaseBefore',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                trigger.player.judge();
                                ('step 1');
                                switch (result.card.suit) {
                                    case 'heart':
                                        trigger.player.draw(0);
                                        break;
                                    case 'diamond':
                                        trigger.player.draw(0);
                                        break;
                                    case 'club':
                                        trigger.player.draw(0);
                                        break;
                                    case 'spade':
                                        trigger.player.damage(1, 'thunder', true);
                                        break;
                                }
                            },
                        },
                        exleimingx: {
                            group: ['exleimingxx'],
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player && !current.hasSkill('exleiming')) {
                                        player.line(current, 'green');
                                        current.addSkill('exleiming');
                                    }
                                });
                            },
                        },
                        exguidao: {
                            audio: 'ext:EX神将/audio:4',
                            trigger: {
                                global: 'judge',
                            },
                            filter(event, player) {
                                return player.countCards('hej') > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.draw(1);
                                player
                                    .chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('exguidao'), 'hej')
                                    .set('ai', function (card) {
                                        const trigger = _status.event.getTrigger();
                                        const player = _status.event.player;
                                        const judging = _status.event.judging;
                                        let result = trigger.judge(card) - trigger.judge(judging);
                                        const attitude = get.attitude(player, trigger.player);
                                        if (attitude == 0 || result == 0) {
                                            return 0;
                                        }
                                        if (attitude > 0) {
                                            return result - get.value(card) / 2;
                                        } else {
                                            return -result - get.value(card) / 2;
                                        }
                                    })
                                    .set('judging', trigger.player.judging[0]);
                                ('step 1');
                                if (result.bool) {
                                    player.respond(result.cards, 'exguidao', 'highlight', 'noOrdering');
                                }
                                ('step 2');
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
                                    trigger.player.judging[0] = result.cards[0];
                                    trigger.orderingCards.addArray(result.cards);
                                    game.log(trigger.player, '的判定牌改为', result.cards[0]);
                                    player.draw(1);
                                }
                            },
                            ai: {
                                tag: {
                                    rejudge: 1,
                                },
                            },
                        },
                        exxiaofeng: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'useCardAfter',
                            },
                            filter(event, player) {
                                if (event.name != 'useCard' && event.player == event.target) {
                                    return false;
                                }
                                return event.card && event.card.suit == 'diamond';
                            },
                            intro: {
                                content: 'cards',
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(function (card, player, target) {
                                        return target;
                                    })
                                    .set('ai', function (target) {
                                        const player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    const target = result.targets[0];
                                    player.line(target, 'green');
                                    target.addSkill('exxiaofengx');
                                }
                            },
                        },
                        exxiaofengx: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'gainAfter',
                            },
                            mark: true,
                            marktext: '风',
                            forced: true,
                            content() {
                                player.randomDiscard(1, 'he', true);
                            },
                            intro: {
                                content: 'mark',
                            },
                        },
                        exchuixi: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'damageEnd',
                            },
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player && current.hasSkill('exxiaofengx')) {
                                        player.line(current, 'green');
                                        current.randomDiscard(2, 'he', true);
                                        current.removeSkill('exxiaofengx');
                                        player.draw(1);
                                    }
                                });
                            },
                        },
                        exxiansi: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(
                                    get.prompt2('exxiansi'),
                                    [1, Infinity],
                                    function (card, player, target) {
                                        return target.countCards('hej') > 1;
                                    },
                                    function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    }
                                );
                                ('step 1');
                                if (result.bool) {
                                    event.targets = result.targets;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.targets.length) {
                                    const target = event.targets.shift();
                                    event.current = target;
                                    player.choosePlayerCard(target, 2, 'hej', true);
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (result.bool) {
                                    event.current.lose(result.links, ui.special);
                                    let list = ['exxiansip'];
                                    event.current.gain(game.createCard(list.randomGet()));
                                    event.current.$draw();
                                    event.goto(2);
                                }
                            },
                        },
                        exliwei: {
                            group: ['exxiansiview'],
                            trigger: {
                                global: 'useCardAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'exxiansip';
                            },
                            content() {
                                if (player.countCards('h') == 1) {
                                    player.chooseToDiscard(1, true);
                                    player.loseMaxHp(1);
                                    player.draw(3);
                                }
                                if (player.countCards('h') > 1) {
                                    player.chooseToDiscard(1, true);
                                }
                            },
                        },
                        exxianfua: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        const player = _status.event.player;
                                        return get.recoverEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    const target = result.targets[0];
                                    player.line(target, 'green');
                                    target.addSkill('exxianfub');
                                    target.addSkill('exxianfud');
                                    target.addSkill('exxianfue');
                                    player.addSkill('exxianfux');
                                    player.addSkill('exxianfuy');
                                    player.addSkill('extianjiaguojia');
                                }
                                ('step 2');
                                player.removeSkill('exxianfua');
                            },
                        },
                        exxianfub: {
                            mark: true,
                            marktext: '辅',
                            forced: true,
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'damageAfter',
                            },
                            content() {
                                'step 0';
                                game.countPlayer(function (current) {
                                    if (current != player && current.hasSkill('exxianfux')) {
                                        player.line(current);
                                        current.removeSkill('exxianfuc');
                                        current.damage(trigger.num);
                                        current.addSkill('exyingyun');
                                    }
                                });
                                ('step 1');
                                game.countPlayer(function (current) {
                                    if (current != player && current.hasSkill('exxianfux')) {
                                        player.line(current);
                                        current.addSkill('exxianfuc');
                                    }
                                });
                            },
                            intro: {
                                content: 'mark',
                            },
                        },
                        exxianfuc: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                game.countPlayer(function (current) {
                                    if (current != player && current.hasSkill('exxianfud')) {
                                        player.line(current);
                                        current.removeSkill('exxianfub');
                                        current.damage(trigger.num);
                                        current.addSkill('exyingyun');
                                    }
                                });
                                ('step 1');
                                game.countPlayer(function (current) {
                                    if (current != player && current.hasSkill('exxianfud')) {
                                        player.line(current);
                                        current.addSkill('exxianfub');
                                    }
                                });
                            },
                        },
                        exxianfud: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'dieBefore',
                            },
                            forced: true,
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player && current.hasSkill('extianjiaguojia')) {
                                        player.line(current, 'green');
                                        current.addSkill('exxianfua');
                                    }
                                });
                            },
                        },
                        exxianfuaa: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            content() {
                                player.addSkill('exxianfuc');
                                player.addSkill('exxianfua');
                            },
                        },
                        exxianfue: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'recoverAfter',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                game.countPlayer(function (current) {
                                    if (current != player && current.hasSkill('exxianfux')) {
                                        player.line(current, 'green');
                                        current.removeSkill('exxianfuy');
                                        current.recover(trigger.num);
                                        current.draw(2);
                                    }
                                });
                                ('step 1');
                                game.countPlayer(function (current) {
                                    if (current != player && current.hasSkill('exxianfux')) {
                                        player.line(current, 'green');
                                        current.addSkill('exxianfuy');
                                    }
                                });
                            },
                        },
                        exyingyun: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'damageAfter',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.targets = [];
                                event.goto(player.countCards('h') % 2 == 1 ? 4 : 4);
                                ('step 1');
                                player.chooseTarget(get.prompt('exyingyun'), '对一名其他角色造成1点雷属性伤害', lib.filter.notMe).set('ai', function (target) {
                                    const player = _status.event.player;
                                    return get.damageEffect(target, player, player, 'thunder') * (target.hp == 1 ? 2 : 1);
                                });
                                ('step 2');
                                if (result.bool) {
                                    const target = result.targets[0];
                                    event.target = target;
                                    player.line(target, 'thunder');
                                    target.damage('thunder');
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (target.isDead()) {
                                    event.goto(1);
                                } else {
                                    event.finish();
                                }
                                ('step 4');
                                player
                                    .chooseTarget(get.prompt('exyingyun'), '令一名角色弃置其1~2张牌', function (card, player, target) {
                                        return !_status.event.parent.targets.includes(target);
                                    })
                                    .set('ai', function (target) {
                                        let att = get.attitude(_status.event.player, target);
                                        const delta = target.hp - target.countCards('h');
                                        if (Math.abs(delta) == 1 && get.sgn(delta) == get.sgn(att)) {
                                            return 3 * Math.abs(att);
                                        }
                                        if (att > 0 || target.countCards('h') > 0) {
                                            return Math.abs(att);
                                        }
                                        return 0;
                                    });
                                ('step 5');
                                if (result.bool) {
                                    const target = result.targets[0];
                                    event.target = target;
                                    player.line(target, 'green');
                                    targets.push(target);
                                    if (!target.countCards('h')) {
                                        event._result = { bool: true };
                                    } else {
                                        player.discardPlayerCard(target, [1, 2], 'hej', '弃置' + get.translation(target) + '两张手牌.');
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 6');
                                player.removeSkill('exyingyun');
                            },
                            ai: {
                                expose: 0.25,
                            },
                        },
                        exhuaxian: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (game.roundNumber == 1) {
                                    let num = [0, 1, 2, 3].randomGet();
                                    player.draw(num);
                                    player.$fullscreenpop('距离渡劫还有9轮', 'fire');
                                }
                                ('step 1');
                                if (game.roundNumber == 2) {
                                    let num = [0, 1, 2, 3].randomGet();
                                    player.draw(num);
                                    player.$fullscreenpop('距离渡劫还有8轮', 'fire');
                                }
                                ('step 2');
                                if (game.roundNumber == 3) {
                                    let num = [0, 1, 2, 3].randomGet();
                                    player.draw(num);
                                    player.$fullscreenpop('距离渡劫还有7轮', 'fire');
                                }
                                ('step 3');
                                if (game.roundNumber == 4) {
                                    let num = [0, 1, 2, 3].randomGet();
                                    player.draw(num);
                                    player.$fullscreenpop('距离渡劫还有6轮', 'fire');
                                }
                                ('step 4');
                                if (game.roundNumber == 5) {
                                    let num = [0, 1, 2, 3].randomGet();
                                    player.draw(num);
                                    player.$fullscreenpop('距离渡劫还有5轮', 'fire');
                                }
                                ('step 5');
                                if (game.roundNumber == 6) {
                                    let num = [0, 1, 2, 3].randomGet();
                                    player.draw(num);
                                    player.$fullscreenpop('距离渡劫还有4轮', 'fire');
                                }
                                ('step 6');
                                if (game.roundNumber == 7) {
                                    let num = [0, 1, 2, 3].randomGet();
                                    player.draw(num);
                                    player.$fullscreenpop('距离渡劫还有3轮', 'fire');
                                }
                                ('step 7');
                                if (game.roundNumber == 8) {
                                    let num = [0, 1, 2, 3].randomGet();
                                    player.draw(num);
                                    player.$fullscreenpop('距离渡劫还有2轮', 'fire');
                                }
                                ('step 8');
                                if (game.roundNumber == 9) {
                                    let num = [0, 1, 2, 3].randomGet();
                                    player.draw(num);
                                    player.$fullscreenpop('距离渡劫还有1轮', 'fire');
                                }
                                ('step 9');
                                if (game.roundNumber == 10) {
                                    let num = [0, 1, 2, 3].randomGet();
                                    player.draw(num);
                                    player.storage.exdanyao--;
                                    player.storage.exdanyao++;
                                    player.$fullscreenpop('开始渡劫', 'fire');
                                    if (player.storage.exdanyao <= 5) {
                                        player.die();
                                    }
                                    if (player.storage.exdanyao > 6 && player.storage.exdanyao <= 10) {
                                        player.die() && Math.random() <= 0.5;
                                    }
                                    if (player.storage.exdanyao > 10 && player.storage.exdanyao <= 15) {
                                        let bool;
                                        if (player == game.me) {
                                            bool = true;
                                        }
                                        game.over(bool) && Math.random() <= 0.5;
                                    }
                                    if (player.storage.exdanyao > 15) {
                                        let bool;
                                        if (player == game.me) {
                                            bool = true;
                                        }
                                        game.over(bool);
                                    }
                                }
                            },
                        },
                        exliandan: {
                            audio: 'ext:EX神将/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            derivation: ['exdanyao', 'exhuoyao'],
                            content() {
                                'step 0';
                                player.chooseControl('弃一张炼丹', '弃两张炼丹', '弃三张炼丹');
                                ('step 1');
                                if (result.control == '弃一张炼丹') {
                                    player.chooseToDiscard(1, 'hej', true);
                                    let list = ['exhuoyao', 'exchujidanyao', 'exchujidanyao', 'exchujidanyao', 'exchujidanyao', 'exchujidanyao', 'exchujidanyao', 'exzhongjidanyao'];
                                    player.gain(game.createCard(list.randomGet()));
                                    player.$draw();
                                }
                                if (result.control == '弃两张炼丹') {
                                    player.chooseToDiscard(2, 'hej', true);
                                    let list = ['exhuoyao', 'exzhongjidanyao', 'exzhongjidanyao', 'exzhongjidanyao', 'exzhongjidanyao', 'exzhongjidanyao', 'exzhongjidanyao', 'exgaojidanyao'];
                                    player.gain(game.createCard(list.randomGet()));
                                    player.$draw();
                                }
                                if (result.control == '弃三张炼丹') {
                                    player.chooseToDiscard(3, 'hej', true);
                                    let list = ['exhuoyao', 'exgaojidanyao', 'exgaojidanyao', 'exgaojidanyao', 'exgaojidanyao', 'exgaojidanyao', 'exgaojidanyao', 'exgaojidanyao', 'exgaojidanyao'];
                                    player.gain(game.createCard(list.randomGet()));
                                    player.$draw();
                                }
                            },
                        },
                        exdanyao: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'damageBefore',
                                source: 'damageBefore',
                            },
                            init(player) {
                                player.storage.exdanyao = 0;
                            },
                            forced: true,
                            mark: true,
                            marktext: '炁',
                            temp: true,
                            intro: {
                                content: '炁',
                            },
                            nopop: true,
                            filter(event, player) {
                                return player.storage.exdanyao > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseControl('不消耗炁', '使用炁减伤', '使用炁加伤');
                                ('step 1');
                                if (result.control == '不消耗炁') {
                                    player.draw(0);
                                }
                                ('step 2');
                                if (result.control == '使用炁减伤') {
                                    trigger.num--;
                                    player.storage.exdanyao--;
                                    if (player.storage.exchujidanyao <= 0) {
                                        player.removeSkill('exdanyao');
                                        delete player.storage.exdanyao;
                                    }
                                }
                                ('step 3');
                                if (result.control == '使用炁加伤') {
                                    trigger.num++;
                                    player.storage.exdanyao--;
                                    if (player.storage.exchujidanyao <= 0) {
                                        player.removeSkill('exdanyao');
                                        delete player.storage.exdanyao;
                                    }
                                }
                            },
                        },
                        exzuoci: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            content() {
                                let list = ['exbaojing', 'exyupei', 'exfuzhou'];
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                            },
                        },
                        exfuzhoux: {
                            audio: 'ext:EX神将/audio:1',
                            enable: 'phaseUse',
                            usable: 3,
                            filter(event, player) {
                                const hs = player.getCards('h');
                                if (!hs.length) {
                                    return false;
                                }
                                for (let i = 0; i < hs.length; i++) {
                                    const mod2 = game.checkMod(hs[i], player, 'unchanged', 'cardEnabled2', player);
                                    if (mod2 === false) {
                                        return false;
                                    }
                                }
                                return true;
                            },
                            chooseButton: {
                                dialog(player) {
                                    let list = [];
                                    for (let i = 0; i < lib.inpile.length; i++) {
                                        if (get.type(lib.inpile[i]) == 'trick') {
                                            list.push(['锦囊牌', '', lib.inpile[i]]);
                                        }
                                    }
                                    return ui.create.dialog(get.translation('qice'), [list, 'vcard']);
                                },
                                filter(button, player) {
                                    return lib.filter.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                },
                                check(button) {
                                    const player = _status.event.player;
                                    let recover = 0,
                                        lose = 1,
                                        players = game.filterPlayer();
                                    for (let i = 0; i < players.length; i++) {
                                        if (players[i].hp == 1 && get.damageEffect(players[i], player, player) > 0 && !players[i].hasSha()) {
                                            return button.link[2] == 'juedou' ? 2 : -1;
                                        }
                                        if (!players[i].isOut()) {
                                            if (players[i].hp < players[i].maxHp) {
                                                if (get.attitude(player, players[i]) > 0) {
                                                    if (players[i].hp < 2) {
                                                        lose--;
                                                        recover += 0.5;
                                                    }
                                                    lose--;
                                                    recover++;
                                                } else if (get.attitude(player, players[i]) < 0) {
                                                    if (players[i].hp < 2) {
                                                        lose++;
                                                        recover -= 0.5;
                                                    }
                                                    lose++;
                                                    recover--;
                                                }
                                            } else {
                                                if (get.attitude(player, players[i]) > 0) {
                                                    lose--;
                                                } else if (get.attitude(player, players[i]) < 0) {
                                                    lose++;
                                                }
                                            }
                                        }
                                    }
                                    if (lose > recover && lose > 0) {
                                        return button.link[2] == 'nanman' ? 1 : -1;
                                    }
                                    if (lose < recover && recover > 0) {
                                        return button.link[2] == 'taoyuan' ? 1 : -1;
                                    }
                                    return button.link[2] == 'wuzhong' ? 1 : -1;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard: true,
                                        selectCard: 1,
                                        audio: 2,
                                        popname: true,
                                        viewAs: { name: links[0][2] },
                                    };
                                },
                                prompt(links, player) {
                                    return '将全部手牌当作' + get.translation(links[0][2]) + '使用';
                                },
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player) {
                                        let num = 0;
                                        const cards = player.getCards('h');
                                        if (cards.length >= 3 && player.hp >= 3) {
                                            return 0;
                                        }
                                        for (let i = 0; i < cards.length; i++) {
                                            num += Math.max(0, get.value(cards[i], player, 'raw'));
                                        }
                                        num /= cards.length;
                                        num *= Math.min(cards.length, player.hp);
                                        return 12 - num;
                                    },
                                },
                                threaten: 1.6,
                            },
                        },
                        exshenguangx: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            content() {
                                for (const i of game.players) {
                                    //QQQ
                                    if (!i.name || !lib.character[i.name]) {
                                        continue;
                                    }
                                    const skills = lib.character[i.name][3];
                                    for (let j = 0; j < skills.length; j++) {
                                        if (!lib.skill[skills[j]].forceunique) {
                                            player.addSkill(skills[j]);
                                        }
                                    }
                                }
                                player.update();
                            },
                        },
                        exhuo: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                source: 'damageAfter',
                                player: 'damageAfter',
                            },
                            init(player) {
                                player.storage.exhuo = 0;
                            },
                            forced: true,
                            mark: true,
                            marktext: '祸',
                            intro: {
                                content: '祸',
                            },
                            content() {
                                const num1 = trigger.num;
                                player.storage.exhuo += num1;
                                player.markSkill('exhuo');
                            },
                        },
                        exxingluan: {},
                        exhuoshi: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player && player.hp > 0) {
                                        player.line(current, 'green');
                                        current.addSkill('exhuo');
                                        current.addSkill('exhuoa');
                                        player.addSkill('exhuo');
                                        player.addSkill('exhuoa');
                                        const num1 = current.maxHp;
                                        const num2 = current.hp;
                                        current.gainMaxHp(num1 + num1 + num1 + num1 + num1 + num1 + num1 + num1 + num1);
                                        current.recover(num2 + num2 + num2 + num2 + num2 + num2 + num2 + num2 + num2);
                                    }
                                });
                            },
                        },
                        exhuoa: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                source: 'damageBefore',
                                player: 'damageBefore',
                            },
                            forced: true,
                            content() {
                                trigger.num += player.storage.exhuo;
                            },
                        },
                        exjianxionga: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return get.itemtype(event.cards) == 'cards' && get.position(event.cards[0], true) == 'o';
                            },
                            content() {
                                player.gain(trigger.cards, 'gain2');
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (player.hasSkillTag('jueqing', false, target)) {
                                            return [1, -1];
                                        }
                                        if (get.tag(card, 'damage')) {
                                            return [1, 0.55];
                                        }
                                    },
                                },
                            },
                        },
                        exjianxiongb: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return get.itemtype(event.cards) == 'cards' && get.position(event.cards[0], true) == 'o';
                            },
                            content() {
                                player.gain(trigger.cards, 'gain2');
                                player.draw(1);
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (player.hasSkillTag('jueqing', false, target)) {
                                            return [1, -1];
                                        }
                                        if (get.tag(card, 'damage')) {
                                            return [1, 0.55];
                                        }
                                    },
                                },
                            },
                        },
                        exjianxiongc: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return get.itemtype(event.cards) == 'cards' && get.position(event.cards[0], true) == 'o';
                            },
                            content() {
                                player.gain(trigger.cards, 'gain2');
                                player.draw(1);
                                trigger.source.randomDiscard(1, 'he', true);
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (player.hasSkillTag('jueqing', false, target)) {
                                            return [1, -1];
                                        }
                                        if (get.tag(card, 'damage')) {
                                            return [1, 0.55];
                                        }
                                    },
                                },
                            },
                        },
                        exjianxiongd: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return get.itemtype(event.cards) == 'cards' && get.position(event.cards[0], true) == 'o';
                            },
                            content() {
                                player.gain(trigger.cards, 'gain2');
                                player.draw(1);
                                trigger.source.randomDiscard(1, 'he', true);
                                trigger.source.loseHp(1);
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (player.hasSkillTag('jueqing', false, target)) {
                                            return [1, -1];
                                        }
                                        if (get.tag(card, 'damage')) {
                                            return [1, 0.55];
                                        }
                                    },
                                },
                            },
                        },
                        exjianxionge: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return get.itemtype(event.cards) == 'cards' && get.position(event.cards[0], true) == 'o';
                            },
                            content() {
                                player.gain(trigger.cards, 'gain2');
                                player.draw(1);
                                trigger.source.randomDiscard(1, 'he', true);
                                trigger.source.loseHp(1, true);
                                player.recover(1);
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (player.hasSkillTag('jueqing', false, target)) {
                                            return [1, -1];
                                        }
                                        if (get.tag(card, 'damage')) {
                                            return [1, 0.55];
                                        }
                                    },
                                },
                            },
                        },
                        exxionglue: {
                            group: ['exbbbbb'],
                            audio: 'ext:EX神将/audio:1',
                            mark: true,
                            marktext: '略',
                            init(player) {
                                player.storage.exxionglue = 0;
                                player.markSkill('exxionglue');
                            },
                            trigger: {
                                global: 'useCardAfter',
                            },
                            filter(event, player) {
                                return get.type(event.card) == 'trick';
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.storage.exxionglue += 1;
                                player.markSkill('exxionglue');
                                ('step 1');
                                if (player.storage.exxionglue == 10) {
                                    const num1 = player.maxHp - player.hp;
                                    player.recover(1);
                                    player.removeSkill('exjianxionga');
                                    player.addSkill('exjianxiongb');
                                    player.loseMaxHp(1);
                                    game.broadcastAll(function (player) {
                                        const img = document.createElement('div');
                                        img.setBackgroundImage('extension/EX神将/image/cc2.jpg');
                                        img.style.width = '100%';
                                        img.style.height = '100%';
                                        img.style.backgroundSize = 'cover';
                                        img.style.transform = 'translateY(-200px)';
                                        player.node.avatar.appendChild(img);
                                        ui.refresh(img);
                                        img.style.transform = '';
                                    }, player);
                                }
                                if (player.storage.exxionglue == 20) {
                                    const num2 = player.maxHp - player.hp;
                                    player.recover(1);
                                    player.removeSkill('exjianxiongb');
                                    player.addSkill('exjianxiongc');
                                    player.loseMaxHp(1);
                                    game.broadcastAll(function (player) {
                                        const img = document.createElement('div');
                                        img.setBackgroundImage('extension/EX神将/image/cc3.jpg');
                                        img.style.width = '100%';
                                        img.style.height = '100%';
                                        img.style.backgroundSize = 'cover';
                                        img.style.transform = 'translateY(-200px)';
                                        player.node.avatar.appendChild(img);
                                        ui.refresh(img);
                                        img.style.transform = '';
                                    }, player);
                                }
                                if (player.storage.exxionglue == 30) {
                                    const num3 = player.maxHp - player.hp;
                                    player.recover(1);
                                    player.removeSkill('exjianxiongc');
                                    player.addSkill('exjianxiongd');
                                    player.loseMaxHp(1);
                                    game.broadcastAll(function (player) {
                                        const img = document.createElement('div');
                                        img.setBackgroundImage('extension/EX神将/image/cc4.jpg');
                                        img.style.width = '100%';
                                        img.style.height = '100%';
                                        img.style.backgroundSize = 'cover';
                                        img.style.transform = 'translateY(-200px)';
                                        player.node.avatar.appendChild(img);
                                        ui.refresh(img);
                                        img.style.transform = '';
                                    }, player);
                                }
                                if (player.storage.exxionglue == 40) {
                                    const num4 = player.maxHp - player.hp;
                                    player.recover(1);
                                    player.removeSkill('exjianxiongd');
                                    player.removeSkill('exxionglue');
                                    player.loseMaxHp(1);
                                    player.addSkill('exjianxionge');
                                    game.broadcastAll(function (player) {
                                        const img = document.createElement('div');
                                        img.setBackgroundImage('extension/EX神将/image/cc5.jpg');
                                        img.style.width = '100%';
                                        img.style.height = '100%';
                                        img.style.backgroundSize = 'cover';
                                        img.style.transform = 'translateY(-200px)';
                                        player.node.avatar.appendChild(img);
                                        ui.refresh(img);
                                        img.style.transform = '';
                                    }, player);
                                }
                            },
                            intro: {
                                content: 'mark',
                            },
                        },
                        exxieling: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                source: 'damageBefore',
                            },
                            filter(event, player) {
                                return player.isMinHp();
                            },
                            content() {
                                trigger.num++;
                                player.removeSkill('exxieling');
                            },
                        },
                        exbbbbb: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            content() {
                                player.addSkill('exjijiao');
                            },
                        },
                        exleimingxx: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'dieBegin',
                            },
                            forced: true,
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player && !current.hasSkill('xxxxxx')) {
                                        current.removeSkill('exleiming');
                                    }
                                });
                            },
                        },
                        exfangzhux: {
                            trigger: {
                                player: 'turnOverAfter',
                            },
                            forced: true,
                            content() {
                                if (player.isTurnedOver()) {
                                    player.addSkill('fengyin');
                                }
                                if (!player.isTurnedOver()) {
                                    player.removeSkill('fengyin');
                                }
                            },
                        },
                        exfangzhuxx: {
                            group: ['exfangzhux', 'exfangzhuxxx'],
                            audio: 'ext:EX神将/audio:1',
                            mark: true,
                            init(player) {
                                player.storage.exfangzhuxx = 0;
                                player.markSkill('exfangzhuxx');
                            },
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                let num = player.maxHp - player.hp;
                                player.storage.exfangzhuxx += num;
                                player.markSkill('exfangzhuxx');
                            },
                            intro: {
                                content: 'mark',
                            },
                        },
                        exfangzhuxxx: {
                            audio: 'ext:EX神将/audio:1',
                            enable: 'phaseUse',
                            usable: 999,
                            filter(event, player) {
                                return player.storage.exfangzhuxx > 0;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(function (card, player, target) {
                                        return target;
                                    })
                                    .set('ai', function (target) {
                                        const player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    const target = result.targets[0];
                                    player.line(target, 'green');
                                    target.addSkill('exfangzhux');
                                    target.turnOver();
                                }
                                ('step 2');
                                player.storage.exfangzhuxx -= 1;
                                player.markSkill('exfangzhuxx');
                            },
                        },
                        exjuejue: {
                            audio: 'ext:EX神将/audio:2',
                            forced: true,
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return (
                                    event.card &&
                                    (get.type(event.card) == 'trick' || (get.type(event.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(event.card.name))) &&
                                    game.hasPlayer(function (current) {
                                        return current != player && current.isTurnedOver();
                                    })
                                );
                            },
                            content() {
                                trigger.directHit.addArray(
                                    game.filterPlayer(function (current) {
                                        return current != player && current.isTurnedOver();
                                    })
                                );
                            },
                        },
                        exjiangjiang: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'useCardBefore',
                            },
                            forced: true,
                            content() { },
                        },
                        exhunzihunzi: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                if (player.hp < 2) {
                                    let num = player.maxHp - player.hp;
                                    player.recover(num);
                                    player.removeSkill('exjiangjiang');
                                    player.removeSkill('exzhibazhiba');
                                    player.removeSkill('exhunzihunzi');
                                    player.addSkill('exsunben');
                                }
                            },
                        },
                        exzhibazhiba: {},
                        expd: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'compare',
                            },
                            forced: true,
                            content() {
                                let num = player.countCards('h', { name: 'sha' });
                                trigger.num1 += num;
                            },
                        },
                        exshelie: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'phaseDrawBefore',
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                                const tao = get.cardPile2(function (card) {
                                    return card.suit == 'heart';
                                });
                                if (tao) {
                                    player.gain(tao, 'gain2');
                                }
                                const hei = get.cardPile2(function (card) {
                                    return card.suit == 'spade';
                                });
                                if (hei) {
                                    player.gain(hei, 'gain2');
                                }
                                const fang = get.cardPile2(function (card) {
                                    return card.suit == 'diamond';
                                });
                                if (fang) {
                                    player.gain(fang, 'gain2');
                                }
                                const hua = get.cardPile2(function (card) {
                                    return card.suit == 'club';
                                });
                                if (hua) {
                                    player.gain(hua, 'gain2');
                                }
                            },
                        },
                        exkeji: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'phaseDiscardBefore',
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                                if (player.countCards('h') < player.hp) {
                                    const tao = get.cardPile2(function (card) {
                                        return card.suit == 'heart';
                                    });
                                    if (tao) {
                                        player.gain(tao, 'gain2');
                                    }
                                    const hei = get.cardPile2(function (card) {
                                        return card.suit == 'spade';
                                    });
                                    if (hei) {
                                        player.gain(hei, 'gain2');
                                    }
                                    const fang = get.cardPile2(function (card) {
                                        return card.suit == 'diamond';
                                    });
                                    if (fang) {
                                        player.gain(fang, 'gain2');
                                    }
                                    const hua = get.cardPile2(function (card) {
                                        return card.suit == 'club';
                                    });
                                    if (hua) {
                                        player.gain(hua, 'gain2');
                                    }
                                }
                            },
                        },
                        zxlongdan: {
                            group: ['zxlongdan_sha', 'zxlongdan_shan', 'zxlongdan_draw'],
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: ['useCard', 'respond'],
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        if (!get.zhu(player, 'shouyue')) {
                                            return false;
                                        }
                                        return event.skill == 'longdan_sha' || event.skill == 'longdan_shan';
                                    },
                                    content() {
                                        player.draw();
                                        player.storage.fanghun2++;
                                    },
                                },
                                sha: {
                                    audio: 1,
                                    enable: ['chooseToUse', 'chooseToRespond'],
                                    filterCard: {
                                        name: 'shan',
                                    },
                                    viewAs: {
                                        name: 'sha',
                                    },
                                    viewAsFilter(player) {
                                        if (!player.countCards('h', 'shan')) {
                                            return false;
                                        }
                                    },
                                    prompt: '将一张闪当杀使用或打出',
                                    check() {
                                        return 1;
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.tag(card, 'respondSha') && current < 0) {
                                                    return 0.6;
                                                }
                                            },
                                        },
                                        respondSha: true,
                                        skillTagFilter(player) {
                                            if (!player.countCards('h', 'shan')) {
                                                return false;
                                            }
                                        },
                                        order() {
                                            return get.order({ name: 'sha' }) + 0.1;
                                        },
                                        useful: -1,
                                        value: -1,
                                        basic: {
                                            useful: [5, 1],
                                            value: [5, 1],
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
                                                if (card.nature == 'poison') {
                                                    return;
                                                }
                                                return 1;
                                            },
                                            natureDamage(card) {
                                                if (card.nature) {
                                                    return 1;
                                                }
                                            },
                                            fireDamage(card, nature) {
                                                if (card.nature == 'fire') {
                                                    return 1;
                                                }
                                            },
                                            thunderDamage(card, nature) {
                                                if (card.nature == 'thunder') {
                                                    return 1;
                                                }
                                            },
                                            poisonDamage(card, nature) {
                                                if (card.nature == 'poison') {
                                                    return 1;
                                                }
                                            },
                                        },
                                        canLink(player, target, card) {
                                            if (!target.isLinked() && !player.hasSkill('wutiesuolian_skill')) {
                                                return false;
                                            }
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
                                            ) {
                                                return false;
                                            }
                                            if (player.hasSkill('jueqing') || target.hasSkill('gangzhi') || target.hasSkill('gangzhi')) {
                                                return false;
                                            }
                                            return true;
                                        },
                                        yingbian(card, player, targets, viewer) {
                                            if (get.attitude(viewer, player) <= 0) {
                                                return 0;
                                            }
                                            let base = 0,
                                                hit = false;
                                            if (get.cardtag(card, 'yingbian_hit')) {
                                                hit = true;
                                                if (
                                                    targets.filter(function (target) {
                                                        return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
                                                    })
                                                ) {
                                                    base += 5;
                                                }
                                            }
                                            if (get.cardtag(card, 'yingbian_all')) {
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                                                    })
                                                ) {
                                                    base += 5;
                                                }
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
                                                ) {
                                                    base += 5;
                                                }
                                            }
                                            return base;
                                        },
                                    },
                                },
                                shan: {
                                    audio: 1,
                                    enable: ['chooseToRespond', 'chooseToUse'],
                                    filterCard: {
                                        name: 'sha',
                                    },
                                    viewAs: {
                                        name: 'shan',
                                    },
                                    prompt: '将一张杀当闪使用或打出',
                                    check() {
                                        return 1;
                                    },
                                    viewAsFilter(player) {
                                        if (!player.countCards('h', 'sha')) {
                                            return false;
                                        }
                                    },
                                    ai: {
                                        respondShan: true,
                                        skillTagFilter(player) {
                                            if (!player.countCards('h', 'sha')) {
                                                return false;
                                            }
                                        },
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.tag(card, 'respondShan') && current < 0) {
                                                    return 0.6;
                                                }
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
                            },
                        },
                        zxyajiao: {
                            trigger: {
                                player: ['respond', 'useCard'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player != _status.currentPhase && get.itemtype(event.cards) == 'cards';
                            },
                            content() {
                                'step 0';
                                event.card = get.cards();
                                player.showCards(event.card);
                                event.same = false;
                                if (get.type(event.card[0], 'trick') == get.type(trigger.card, 'trick')) {
                                    event.same = true;
                                }
                                player
                                    .chooseTarget('选择获得此牌的角色', true)
                                    .set('ai', function (target) {
                                        let att = get.attitude(_status.event.player, target);
                                        if (_status.event.du) {
                                            if (target.hasSkillTag('nodu')) {
                                                return 0;
                                            }
                                            return -att;
                                        }
                                        if (!_status.event.same) {
                                            att += target == _status.event.player ? 1 : 0;
                                        }
                                        if (att > 0) {
                                            return att + Math.max(0, 5 - target.countCards('h'));
                                        }
                                        return att;
                                    })
                                    .set('du', event.card.name == 'du')
                                    .set('same', event.same);
                                ('step 1');
                                if (result.targets) {
                                    player.line(result.targets, 'green');
                                    result.targets[0].gain(event.card, 'gain2');
                                    if (!event.same) {
                                        player.chooseToDiscard(true, 'he');
                                    }
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player) {
                                        if (get.tag(card, 'respond') && player.countCards('h') > 1) {
                                            return [1, 0.2];
                                        }
                                    },
                                },
                            },
                        },
                        zxfengpo: {
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                if (event.targets.length != 1 || !['sha', 'juedou'].includes(event.card.name)) {
                                    return false;
                                }
                                const evt2 = event.getParent('phaseUse');
                                if (evt2.player != player) {
                                    return false;
                                }
                                return (
                                    player
                                        .getHistory('useCard', function (evt) {
                                            return ['sha', 'juedou'].includes(evt.card.name) && evt.getParent('phaseUse') == evt2;
                                        })
                                        .indexOf(event.parent) == 0
                                );
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseControl('draw_card', '加伤害', 'cancel2').set('prompt', get.prompt2('zxfengpo'));
                                ('step 1');
                                if (result.control && result.control != 'cancel2') {
                                    const nd = trigger.target.countCards('h', { suit: 'diamond' });
                                    if (result.control == 'draw_card') {
                                        player.draw(nd);
                                    } else {
                                        const trigger2 = trigger.parent;
                                        if (typeof trigger2.baseDamage != 'number') {
                                            trigger2.baseDamage = 1;
                                        }
                                        trigger2.baseDamage += nd;
                                    }
                                }
                            },
                        },
                        zxdmp: {
                            audio: 'ext:EX神将/audio:4',
                            forced: true,
                            content() { },
                        },
                        dwyy: {
                            audio: 'ext:EX神将/audio:1',
                            forced: true,
                            content() { },
                        },
                        zxjuejing: {
                            mod: {
                                maxHandcard(player, num) {
                                    return 2 + num;
                                },
                            },
                            trigger: {
                                player: ['dyingBegin', 'dyingAfter'],
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                        },
                        exxianzhena: {
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (arg && arg.name == 'sha') {
                                        return true;
                                    }
                                    if (arg && arg.name == 'wanjian') {
                                        return true;
                                    }
                                    if (arg && arg.name == 'nanman') {
                                        return true;
                                    }
                                    return false;
                                },
                            },
                            mod: {
                                targetInRange(card, player, target) {
                                    if (card.name == 'sha' && card.number) {
                                        if (get.distance(player, target) <= 999) {
                                            return true;
                                        }
                                    }
                                },
                            },
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'useCardToBegin',
                            },
                            logTarget: 'target',
                            forced: true,
                            content() { },
                            group: ['exxianzhenb'],
                        },
                        exxianzhenb: {
                            audio: 'ext:EX神将/audio:4',
                            forced: true,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                if (event.parent.triggeredTargets3.length > 1) {
                                    return false;
                                }
                                if (!player.isPhaseUsing()) {
                                    return false;
                                }
                                if (!['basic', 'trick'].includes(get.type(event.card))) {
                                    return false;
                                }
                                if (get.tag(event.card, 'damage')) {
                                    return true;
                                }
                                return false;
                            },
                            content() {
                                trigger.directHit.addArray(
                                    game.filterPlayer(function (current) {
                                        return current != player;
                                    })
                                );
                            },
                        },
                        exzhanluan: {
                            trigger: {
                                source: 'damageBegin2',
                            },
                            filter(event, player) {
                                return event.card && get.distance(player, event.player) >= 0;
                            },
                            forced: true,
                            logTarget: 'player',
                            content() {
                                if (player.hp > trigger.player.hp) {
                                    let num = player.hp - trigger.player.hp;
                                    trigger.num = num;
                                }
                            },
                        },
                        exyunying: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'damageBefore',
                            },
                            forced: true,
                            content() {
                                player.draw(2);
                                let num = player.maxHp - player.hp;
                                if (player.hp < player.maxHp) {
                                    player.draw(num);
                                }
                            },
                        },
                        exzhiyun: {
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            filter(event, player) {
                                return get.type(event.card) != 'equip' && player.countCards('he') > 0;
                            },
                            content() {
                                player.chooseToDiscard(1, 'he', true);
                                game.log(player, '发动了掣政,', trigger.card, '对', trigger.target, '失效');
                                trigger.cancel();
                            },
                        },
                        sl: {
                            audio: 'ext:EX神将/audio:2',
                            forced: true,
                            content() { },
                        },
                        exkuizhu: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            filter(event, player) {
                                return player.countCards('e') >= 0;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('exkuizhu'), function (card, player, target) {
                                        return target.countCards('e') > player.countCards('e');
                                    })
                                    .set('ai', function (target) {
                                        const player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool && result.targets && result.targets.length) {
                                    player.line(result.targets[0], 'green');
                                    result.targets[0].damage(1);
                                }
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return (num += 5 - player.countCards('e'));
                                },
                            },
                        },
                        exjixi: {
                            audio: 'ext:EX神将/audio:2',
                            enable: 'phaseUse',
                            selectTarget: 1,
                            filterTarget(card, player, target) {
                                if (player == target) {
                                    return false;
                                }
                                return target.countGainableCards(player, get.is.single() ? 'he' : 'hej') > 0;
                            },
                            content() {
                                if (player.storage.extuntianx > 1) {
                                    player.storage.extuntianx -= 2;
                                    player.markSkill('extuntianx');
                                    const position = get.is.single() ? 'he' : 'hej';
                                    if (target.countGainableCards(player, position)) {
                                        player.gainPlayerCard(position, target, true);
                                    }
                                }
                            },
                        },
                        extuntian: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'useCardBefore',
                            },
                            forced: true,
                            content() {
                                player.storage.extuntianx += 1;
                                player.markSkill('extuntianx');
                            },
                        },
                        exzaoxian: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: ['phaseBegin', 'damageAfter'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseControl('屯田形态', '急袭形态');
                                ('step 1');
                                if (result.control == '屯田形态') {
                                    player.removeSkill('exjixi');
                                    player.addSkill('extuntian');
                                    game.broadcastAll(function (player) {
                                        const img = document.createElement('div');
                                        img.setBackgroundImage('extension/EX神将/image/tuntiandengai.jpg');
                                        img.style.width = '100%';
                                        img.style.height = '100%';
                                        img.style.backgroundSize = 'cover';
                                        img.style.transform = 'translateY(-200px)';
                                        player.node.avatar.appendChild(img);
                                        ui.refresh(img);
                                        img.style.transform = '';
                                    }, player);
                                }
                                ('step 2');
                                if (result.control == '急袭形态') {
                                    player.removeSkill('extuntian');
                                    player.addSkill('exjixi');
                                    game.broadcastAll(function (player) {
                                        const img = document.createElement('div');
                                        img.setBackgroundImage('extension/EX神将/image/jixidengai.jpg');
                                        img.style.width = '100%';
                                        img.style.height = '100%';
                                        img.style.backgroundSize = 'cover';
                                        img.style.transform = 'translateY(-200px)';
                                        player.node.avatar.appendChild(img);
                                        ui.refresh(img);
                                        img.style.transform = '';
                                    }, player);
                                }
                            },
                        },
                        extuntianx: {
                            audio: 'ext:EX神将/audio:',
                            mark: true,
                            marktext: '田',
                            init(player) {
                                player.storage.extuntianx = 0;
                                player.markSkill('extuntianx');
                            },
                            forced: true,
                            content() {
                                player.storage.extuntianx += 0;
                                player.markSkill('extuntianx');
                            },
                            intro: {
                                content: 'mark',
                            },
                        },
                        exweiweia: {
                            trigger: {
                                player: ['turnOverEnd'],
                            },
                            filter(event, player) {
                                if (event.name == 'link') {
                                    return event.player.isLinked();
                                }
                                return !event.player.isTurnedOver();
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) > 0;
                            },
                            forced: true,
                            logTarget: 'player',
                            content() {
                                player.draw(1);
                            },
                        },
                        exfengyin: {
                            firstDo: true,
                            trigger: {
                                player: ['phaseBefore', 'changeHp'],
                            },
                            _priority: 99,
                            forced: true,
                            popup: false,
                            content() {
                                if (player.hp < 999) {
                                    const skills = player.getSkills(true, false);
                                    for (let i = 0; i < skills.length; i++) {
                                        const info = get.info(skills[i]);
                                        if (skills[i] == 'chanyuan' || skills[i] == 'rechanyuan' || info.charlotte) {
                                            skills.splice(i--, 1);
                                        }
                                    }
                                    player.disableSkill('rechanyuan', skills);
                                } else {
                                    player.enableSkill('rechanyuan');
                                }
                            },
                            mark: true,
                            intro: {
                                content(storage, player, skill) {
                                    let str = '<li>锁定技,你的技能全部失效.';
                                    let list = Object.keys(player.disabledSkills);
                                    if (list.length) {
                                        str += '<br><li>失效技能:';
                                        for (let i = 0; i < list.length; i++) {
                                            if (lib.translate[list[i] + '_info']) {
                                                str += get.translation(list[i]) + '、';
                                            }
                                        }
                                        return str.slice(0, str.length - 1);
                                    }
                                    return str;
                                },
                            },
                            init(player, skill) {
                                if (player.hp <= 1) {
                                    const skills = player.getSkills(true, false);
                                    for (let i = 0; i < skills.length; i++) {
                                        const info = get.info(skills[i]);
                                        if (skills[i] == 'chanyuan' || skills[i] == 'rechanyuan' || info.charlotte) {
                                            skills.splice(i--, 1);
                                        }
                                    }
                                    player.disableSkill(skill, skills);
                                }
                            },
                            onremove(player, skill) {
                                player.enableSkill(skill);
                            },
                        },
                        exqizhi: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('exqizhi'), '弃置一名角色的一张牌,其摸一张牌', function (card, player, target) {
                                        return !_status.event.targets.includes(target) && target.countCards('he') > 0;
                                    })
                                    .set('ai', function (target) {
                                        const player = _status.event.player;
                                        if (target == player) {
                                            return 2;
                                        }
                                        if (get.attitude(player, target) <= 0) {
                                            return 1;
                                        }
                                        return 0.5;
                                    })
                                    .set('targets', trigger.targets);
                                ('step 1');
                                if (result.bool) {
                                    player.getHistory('custom').push({ exqizhi: true });
                                    if (!event.isMine() && !_status.connectMode) {
                                        game.delay();
                                    }
                                    player.discardPlayerCard(result.targets[0], true, 'he');
                                    event.target = result.targets[0];
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                event.target.draw();
                            },
                        },
                        exjinqu: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            check(event, player) {
                                return (
                                    player.getHistory('custom', function (evt) {
                                        return evt.exqizhi == true;
                                    }).length >= player.countCards('h')
                                );
                            },
                            prompt(event, player) {
                                let num = player.getHistory('custom', function (evt) {
                                    return evt.exqizhi == true;
                                }).length;
                                return '进趋:摸' + get.cnNumber(num) + '张牌';
                            },
                            content() {
                                'step 0';
                                let num = player.getHistory('custom', function (evt) {
                                    return evt.exqizhi == true;
                                }).length;
                                player.draw(num);
                                ('step 1');
                                const num1 = player.getHistory('custom', function (evt) {
                                    return evt.exqizhi == true;
                                }).length;
                                if (player.hp < num1) {
                                    player.addTempSkill('fengyin', { player: 'phaseUseEnd' });
                                }
                            },
                        },
                        exzengyi: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'recoverBegin',
                            },
                            forced: true,
                            mark: true,
                            marktext: '益',
                            content() {
                                'step 0';
                                player.removeSkill('exzengyi');
                                ('step 1');
                                let num = player.maxHp - player.hp;
                                player.draw(num);
                            },
                        },
                        exshengshoua: {
                            audio: 'ext:EX神将/audio:4',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getStat('damage') > 0;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('exshengshou'), '选择一名角色获得损益效果', function (card, player, target) {
                                        return target;
                                    })
                                    .set('ai', function (target) {
                                        const player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool && result.targets && result.targets.length) {
                                    player.line(result.targets[0], 'green');
                                    result.targets[0].addSkill('exsunyi');
                                    if (result.targets[0].hasSkill('exsunyi')) {
                                        player.line(result.targets[0], 'green'); //QQQ
                                        result.targets[0].loseHp(1);
                                    }
                                }
                            },
                        },
                        exsunyi: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'recoverBegin',
                            },
                            forced: true,
                            mark: true,
                            marktext: '益',
                            content() {
                                'step 0';
                                player.removeSkill('exsunyi');
                                ('step 1');
                                let num = player.maxHp - player.hp;
                                player.randomDiscard(num, 'he', true);
                            },
                        },
                        exshengshou: {
                            derivation: ['exzengyi', 'exsunyi'],
                            group: ['exshengshoua', 'exqinxi'],
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.getStat('damage');
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('exshengshou'), '选择一名角色获得增益效果', function (card, player, target) {
                                        return target;
                                    })
                                    .set('ai', function (target) {
                                        const player = _status.event.player;
                                        return get.recoverEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool && result.targets && result.targets.length) {
                                    player.line(result.targets[0], 'green');
                                    result.targets[0].addSkill('exzengyi');
                                }
                            },
                        },
                        exqinxi: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(
                                    get.prompt2('exshengshou'),
                                    1,
                                    function (card, player, target) {
                                        return target.countCards('hej') > 0;
                                    },
                                    function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    }
                                );
                                ('step 1');
                                if (result.bool) {
                                    event.targets = result.targets;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.targets.length) {
                                    const target = event.targets.shift();
                                    event.current = target;
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (result.bool) {
                                    event.current.recover(1);
                                }
                            },
                        },
                        exshanjia: {
                            mod: {
                                canBeDiscarded(card) {
                                    if (get.position(card) == 'e' && ['equip1', 'equip2', 'equip3', 'equip4', 'equip5'].includes(get.subtype(card))) {
                                        return false;
                                    }
                                },
                                canBeGained(card) {
                                    if (get.position(card) == 'e' && ['equip1', 'equip2', 'equip3', 'equip4', 'equip5'].includes(get.subtype(card))) {
                                        return false;
                                    }
                                },
                            },
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            content() {
                                if (player.countCards('e') > 4) {
                                    player.draw(5);
                                    player.addTempSkill('guanshi_skill');
                                    player.addTempSkill('qinggang_skill');
                                    player.addTempSkill('qinglong_skill');
                                    player.addTempSkill('cixiong_skill');
                                    player.addTempSkill('zhuque_skill');
                                    player.addTempSkill('zhangba_skill');
                                    player.addTempSkill('qilin_skill');
                                    player.addTempSkill('hanbing_skill');
                                    player.addTempSkill('guding_skill');
                                    player.addTempSkill('zhuge_skill');
                                    player.addTempSkill('fangtian_skill');
                                }
                                if ((player.countCards('e') > 0) & (player.countCards('e') < 5)) {
                                    let num = player.countCards('e');
                                    player.draw(num);
                                    player.chooseToDiscard(num, 'h', true);
                                }
                                if (player.countCards('e') < 1) {
                                    let list = ['bagua', 'renwang', 'tengjia', 'baiyin'];
                                    player.gain(game.createCard(list.randomGet()));
                                    player.$draw();
                                }
                            },
                        },
                        exbafeia: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            content() {
                                player.addSkill('qianxun');
                                player.addSkill('exbflianying');
                                player.addSkill('exbfxinzhan');
                                player.addSkill('huilei');
                                player.addSkill('exbfyicong');
                                player.addSkill('exbfkuanggu');
                                player.addSkill('ecbfjushou');
                                player.addSkill('exbfyizhong');
                                player.addSkill('exbfbuqu');
                                player.addSkill('exbfleiji');
                                player.addSkill('exbfhuangtian');
                                player.addSkill('exbfguidao');
                            },
                        },
                        exbflianying: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'loseAfter',
                            },
                            filter(event, player) {
                                if (player.countCards('h')) {
                                    return false;
                                }
                                return event.hs && event.hs.length;
                            },
                            content() {
                                player.loseHp();
                                player.draw();
                                player.draw();
                            },
                            ai: {
                                threaten: 0.8,
                                effect: {
                                    target(card) {
                                        if (card.name == 'guohe' || card.name == 'liuxinghuoyu') {
                                            return 0.5;
                                        }
                                    },
                                },
                                noh: true,
                                skillTagFilter(player, tag) {
                                    if (tag == 'noh') {
                                        if (player.countCards('h') != 1) {
                                            return false;
                                        }
                                    }
                                },
                            },
                        },
                        exbfxinzhan: {
                            audio: 'ext:EX神将/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return true; //player.countCards('h')>player.maxHp;
                            },
                            usable: 1,
                            content() {
                                'step 0';
                                player.loseHp();
                                player.draw();
                                const cards = get.cards(3);
                                event.cards = cards;
                                const next = player.chooseCardButton(cards, '选择获得的♥️️️牌', [1, Infinity]).set('filterButton', function (button) {
                                    return button.link.suit == 'heart';
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.gain(result.links);
                                    player.$draw(result.links);
                                }
                                if (Array.isArray(event.cards)) {
                                    for (const i of event.cards) {
                                        //QQQ
                                        if (!result.bool || !result.links.includes(i)) {
                                            ui.cardPile.insertBefore(i, ui.cardPile.firstChild);
                                        }
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
                        exbfyicong: {
                            trigger: {
                                player: ['changeHp'],
                            },
                            audio: 'ext:EX神将/audio:2',
                            audioname: ['re_gongsunzan'],
                            filter(event, player) {
                                return get.sgn(player.hp - 2.5) != get.sgn(player.hp - 2.5 - event.num);
                            },
                            content() {
                                player.loseHp();
                                player.draw();
                            },
                            mod: {
                                globalFrom(from, to, current) {
                                    if (from.hp > 2) {
                                        return current - 1;
                                    }
                                },
                                globalTo(from, to, current) {
                                    if (to.hp <= 2) {
                                        return current + 1;
                                    }
                                },
                            },
                            ai: {
                                threaten: 0.8,
                            },
                        },
                        exbfkuanggu: {
                            audio: 'ext:EX神将/audio:2',
                            audioname: ['re_weiyan', 'ol_weiyan'],
                            trigger: {
                                source: 'damageSource',
                            },
                            filter(event, player) {
                                return get.distance(player, event.player) <= 1 && player.isDamaged();
                            },
                            content() {
                                player.recover(trigger.num);
                                player.loseHp();
                                player.draw();
                            },
                        },
                        ecbfjushou: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            content() {
                                player.draw(3);
                                player.turnOver();
                                player.loseHp(1);
                                player.draw();
                            },
                        },
                        exbfyizhong: {
                            trigger: {
                                target: 'shaBefore',
                            },
                            audio: 'ext:EX神将/audio:2',
                            filter(event, player) {
                                if (player.getEquip(2)) {
                                    return false;
                                }
                                return event.card && event.card.name == 'sha' && get.color(event.card) == 'black';
                            },
                            content() {
                                trigger.cancel();
                                player.loseHp();
                                player.draw();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (player == target && get.subtype(card) == 'equip2') {
                                            if (get.equipValue(card) <= 8) {
                                                return 0;
                                            }
                                        }
                                        if (target.getEquip(2)) {
                                            return;
                                        }
                                        if (card.name == 'sha' && get.color(card) == 'black') {
                                            return 'zerotarget';
                                        }
                                    },
                                },
                            },
                        },
                        exbfbuqu: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'changeHp',
                            },
                            filter(event, player) {
                                return player.hp <= 0 && event.num < 0;
                            },
                            forced: true,
                            init(player) {
                                if (!player.storage.gzbuqu) {
                                    player.storage.gzbuqu = [];
                                }
                            },
                            intro: {
                                content: 'cards',
                            },
                            group: 'gzbuqu_recover',
                            onremove(player) {
                                if (player.storage.gzbuqu.length) {
                                    delete player.nodying;
                                    player.hp = 1 - player.storage.gzbuqu.length;
                                    game.log(player, '移去了不屈牌', player.storage.gzbuqu);
                                    game.cardsDiscard(player.storage.gzbuqu);
                                    player.storage.gzbuqu = [];
                                    player.unmarkSkill('gzbuqu');
                                    player.dying({});
                                }
                            },
                            process(player) {
                                delete player.nodying;
                                player.markSkill('gzbuqu');
                                const nums = [];
                                const cards = player.storage.gzbuqu;
                                for (let i = 0; i < cards.length; i++) {
                                    if (nums.includes(cards[i].number)) {
                                        return;
                                    } else {
                                        nums.push(cards[i].number);
                                    }
                                }
                                player.nodying = true;
                            },
                            subSkill: {
                                recover: {
                                    trigger: {
                                        player: 'changeHp',
                                    },
                                    filter(event, player) {
                                        return player.storage.gzbuqu.length && event.num > 0;
                                    },
                                    forced: true,
                                    popup: false,
                                    content() {
                                        'step 0';
                                        event.count = Math.min(trigger.num, 9);
                                        ('step 1');
                                        event.count--;
                                        if (player.hp + player.storage.gzbuqu.length > 1) {
                                            player.chooseCardButton('移去一张不屈牌', true, player.storage.gzbuqu).set('ai', function (button) {
                                                const buttons = get.selectableButtons();
                                                for (let i = 0; i < buttons.length; i++) {
                                                    if (buttons[i] != button && buttons[i].link.number == button.link.number && !ui.selected.buttons.includes(buttons[i])) {
                                                        return 1;
                                                    }
                                                }
                                                return 0;
                                            });
                                        }
                                        ('step 2');
                                        for (const i of result.links) {
                                            i.discard();
                                            player.storage.gzbuqu.remove(i);
                                        }
                                        player.$throw(result.links);
                                        game.log(player, '移去了不屈牌', result.links);
                                        if (event.count) {
                                            event.goto(1);
                                        }
                                        ('step 3');
                                        lib.skill.gzbuqu.process(player);
                                    },
                                },
                            },
                            content() {
                                'step 0';
                                player.loseMaxHp(1);
                                let num = -trigger.num - Math.max(player.hp - trigger.num, 1) + 1;
                                const cards = get.cards(num);
                                game.cardsGotoSpecial(cards);
                                player.storage.gzbuqu.addArray(cards);
                                //event.trigger("addCardToStorage");
                                player.showCards(get.translation(player) + '的不屈牌', player.storage.gzbuqu);
                                ('step 1');
                                lib.skill.gzbuqu.process(player);
                            },
                            ai: {
                                mingzhi: true,
                            },
                        },
                        exbfleiji: {
                            audio: 'ext:EX神将/audio:2',
                            audioname: ['boss_qinglong'],
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'shan';
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('releiji'), function (card, player, target) {
                                    return target != player;
                                }).ai = function (target) {
                                    if (target.hasSkill('hongyan')) {
                                        return 0;
                                    }
                                    return get.damageEffect(target, _status.event.player, _status.event.player, 'thunder');
                                };
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    event.target.judge(function (card) {
                                        const suit = card.suit;
                                        if (suit == 'spade') {
                                            return -4;
                                        }
                                        if (suit == 'club') {
                                            return -2;
                                        }
                                        return 0;
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.suit == 'club') {
                                    event.target.damage(0, 'thunder');
                                    player.recover(0);
                                } else if (result.suit == 'spade') {
                                    event.target.damage(2, 'thunder');
                                }
                                player.loseHp();
                                player.draw();
                            },
                            ai: {
                                useShan: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'respondShan')) {
                                            let hastarget = game.hasPlayer(function (current) {
                                                return get.attitude(target, current) < 0;
                                            });
                                            const be = target.countCards('e', { color: 'black' });
                                            if (target.countCards('h', 'shan') && be) {
                                                if (!target.hasSkill('guidao')) {
                                                    return 0;
                                                }
                                                return [0, hastarget ? target.countCards('he') / 2 : 0];
                                            }
                                            if (target.countCards('h', 'shan') && target.countCards('h') > 2) {
                                                if (!target.hasSkill('guidao')) {
                                                    return 0;
                                                }
                                                return [0, hastarget ? target.countCards('h') / 4 : 0];
                                            }
                                            if (target.countCards('h') > 3 || (be && target.countCards('h') >= 2)) {
                                                return [0, 0];
                                            }
                                            if (target.countCards('h') == 0) {
                                                return [1.5, 0];
                                            }
                                            if (target.countCards('h') == 1 && !be) {
                                                return [1.2, 0];
                                            }
                                            if (!target.hasSkill('guidao')) {
                                                return [1, 0.05];
                                            }
                                            return [1, Math.min(0.5, (target.countCards('h') + be) / 4)];
                                        }
                                    },
                                },
                            },
                        },
                        exbfguidao: {
                            audio: 'ext:EX神将/audio:2',
                            audioname: ['sp_zhangjiao'],
                            trigger: {
                                global: 'judge',
                            },
                            filter(event, player) {
                                return player.countCards('he', { color: 'black' }) > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('guidao'), 'he', function (card) {
                                        if (get.color(card) != 'black') {
                                            return false;
                                        }
                                        const player = _status.event.player;
                                        const mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                        if (mod2 != 'unchanged') {
                                            return mod2;
                                        }
                                        const mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
                                        if (mod != 'unchanged') {
                                            return mod;
                                        }
                                        return true;
                                    })
                                    .set('ai', function (card) {
                                        const trigger = _status.event.getTrigger();
                                        const player = _status.event.player;
                                        const judging = _status.event.judging;
                                        let result = trigger.judge(card) - trigger.judge(judging);
                                        const attitude = get.attitude(player, trigger.player);
                                        if (attitude == 0 || result == 0) {
                                            return 0;
                                        }
                                        if (attitude > 0) {
                                            return result;
                                        } else {
                                            return -result;
                                        }
                                    })
                                    .set('judging', trigger.player.judging[0]);
                                ('step 1');
                                if (result.bool) {
                                    player.respond(result.cards, 'highlight', 'guidao', 'noOrdering');
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.$gain2(trigger.player.judging[0]);
                                    player.gain(trigger.player.judging[0]);
                                    trigger.player.judging[0] = result.cards[0];
                                    trigger.orderingCards.addArray(result.cards);
                                    game.log(trigger.player, '的判定牌改为', result.cards[0]);
                                }
                                ('step 3');
                                player.loseHp();
                                player.draw();
                            },
                            ai: {
                                rejudge: true,
                                tag: {
                                    rejudge: 1,
                                },
                            },
                        },
                        exbafeihuangtian2: {
                            audio: 'ext:EX神将/audio:2',
                            enable: 'phaseUse',
                            discard: false,
                            lose: false,
                            delay: false,
                            line: true,
                            forced: true,
                            clearTime: true,
                            prepare(cards, player, targets) { },
                            prompt() {
                                const player = _status.event.player;
                                let list = game.filterPlayer(function (target) {
                                    return target != player && target.hasZhuSkill('huangtian', player);
                                });
                                let str = '将一张【闪】或【闪电】交给' + get.translation(list);
                                if (list.length > 1) {
                                    str += '中的一人';
                                }
                                return str;
                            },
                            filter(event, player) {
                                if (player.group != 'qun') {
                                    return false;
                                }
                                if (player.countCards('h', 'shan') + player.countCards('h', 'shandian') == 0) {
                                    return 0;
                                }
                                return game.hasPlayer(function (target) {
                                    return target != player && target.hasZhuSkill('huangtian', player) && !target.hasSkill('huangtian3');
                                });
                            },
                            filterCard(card) {
                                return card.name == 'shan' || card.name == 'shandian';
                            },
                            visible: true,
                            filterTarget(card, player, target) {
                                return target != player && target.hasZhuSkill('huangtian', player) && !target.hasSkill('huangtian3');
                            },
                            content() {
                                target.gain(cards, player, 'giveAuto');
                                target.loseHp();
                                target.draw();
                                target.addTempSkill('huangtian3', 'phaseUseEnd');
                            },
                            ai: {
                                expose: 0.3,
                                order: 10,
                                result: {
                                    target: 5,
                                },
                            },
                        },
                        exbfhuangtian: {
                            audio: 'huangtian2',
                            audioname: ['zhangjiao', 're_zhangjiao'],
                            global: 'exbfhuangtian2',
                            zhuSkill: true,
                        },
                        exbfqianxunx: {
                            trigger: {
                                target: 'useCardToTarget',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.card.name != 'lebu') {
                                    return false;
                                }
                                if (event.card.name != 'shunshou') {
                                    return false;
                                }
                                return game.hasPlayer(function (current) {
                                    return player.inRange(current) && current != event.player && current != player && lib.filter.targetEnabled(event.card, event.player, current);
                                });
                            },
                            content() {
                                trigger.cancel();
                            },
                        },
                        exsscbenghuai: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            check() {
                                return false;
                            },
                            filter(event, player) {
                                return !player.isMinHp();
                            },
                            content() {
                                'step 0';
                                player.storage.exsscsunben++;
                                player.markSkill('exsscsunben');
                                player
                                    .chooseControl('baonue_hp', 'baonue_maxHp', function (event, player) {
                                        if (player.hp == player.maxHp) {
                                            return 'baonue_hp';
                                        }
                                        if (player.hp < player.maxHp - 1 || player.hp <= 2) {
                                            return 'baonue_maxHp';
                                        }
                                        return 'baonue_hp';
                                    })
                                    .set('prompt', '崩坏:失去1点体力或减1点体力上限');
                                ('step 1');
                                if (result.control == 'baonue_hp') {
                                    player.loseHp();
                                } else {
                                    player.loseMaxHp(true);
                                }
                            },
                            ai: {
                                threaten: 0.5,
                                neg: true,
                            },
                        },
                        exsscchouhai: {
                            trigger: {
                                player: 'damageBegin3',
                            },
                            forced: true,
                            check() {
                                return false;
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && player.countCards('h') == 0;
                            },
                            content() {
                                player.storage.exsscsunben++;
                                player.markSkill('exsscsunben');
                                trigger.num++;
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (card.name == 'sha' && target.countCards('h') == 0) {
                                            return [1, -2];
                                        }
                                    },
                                },
                            },
                        },
                        exsscranshang: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.nature == 'fire';
                            },
                            forced: true,
                            check() {
                                return false;
                            },
                            content() {
                                player.storage.exsscsunben++;
                                player.markSkill('exsscsunben');
                                player.addMark('ranshang', trigger.num);
                            },
                            intro: {
                                name2: '燃',
                                content: 'mark',
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (card.name == 'sha') {
                                            if (card.nature == 'fire' || player.hasSkill('zhuque_skill')) {
                                                return 2;
                                            }
                                        }
                                        if (get.tag(card, 'fireDamage') && current < 0) {
                                            return 2;
                                        }
                                    },
                                },
                            },
                            group: 'ranshang2',
                        },
                        exsscshiyong: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            check() {
                                return false;
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && (get.color(event.card) == 'red' || event.getParent(2).jiu == true);
                            },
                            content() {
                                player.storage.exsscsunben++;
                                player.markSkill('exsscsunben');
                                player.loseMaxHp();
                            },
                        },
                        exssclianhuo: {
                            trigger: {
                                player: 'damageBegin3',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.isLinked() && event.notLink() && event.nature == 'fire';
                            },
                            content() {
                                player.storage.exsscsunben++;
                                player.markSkill('exsscsunben');
                                trigger.num++;
                            },
                        },
                        exsscyaowu: {
                            trigger: {
                                player: 'damageBegin3',
                            },
                            filter(event, player) {
                                if (event.card && event.card.name == 'sha') {
                                    if (get.color(event.card) == 'red') {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            forced: true,
                            check() {
                                return false;
                            },
                            content() {
                                player.storage.exsscsunben++;
                                player.markSkill('exsscsunben');
                                trigger.source.chooseDrawRecover(true);
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (card.name == 'sha' && get.color(card) == 'red') {
                                            return [1, -2];
                                        }
                                    },
                                },
                            },
                        },
                        exssctongji: {
                            global: 'tongji_disable',
                            trigger: {
                                global: 'useCard1',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.targets.includes(player) && player != event.player && event.card.name == 'sha' && player.hp < player.countCards('h');
                            },
                            content() {
                                player.storage.exsscsunben++;
                                player.markSkill('exsscsunben');
                            },
                            gainable: true,
                            subSkill: {
                                disable: {
                                    mod: {
                                        targetEnabled(card, player, target) {
                                            if (card.name == 'sha') {
                                                if (player.hasSkill('tongji')) {
                                                    return;
                                                }
                                                if (target.hasSkill('tongji')) {
                                                    return;
                                                }
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        return current.hasSkill('tongji') && current.hp < current.countCards('h') && player.inRange(current);
                                                    })
                                                ) {
                                                    return false;
                                                }
                                            }
                                        },
                                    },
                                },
                            },
                        },
                        exssckurong: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: true,
                            check(card) {
                                return 8 - get.value(card);
                            },
                            position: 'he',
                            content() {
                                player.storage.exsscsunben++;
                                player.markSkill('exsscsunben');
                                player.loseHp();
                            },
                            ai: {
                                order: 8,
                                result: {
                                    player(player) {
                                        if (player.hp <= 2) {
                                            return player.countCards('h') == 0 ? 1 : 0;
                                        }
                                        if (player.countCards('h', { name: 'sha', color: 'red' })) {
                                            return 1;
                                        }
                                        return player.countCards('h') <= player.hp ? 1 : 0;
                                    },
                                },
                                effect(card, player, target) {
                                    if (get.tag(card, 'damage')) {
                                        if (player.hasSkillTag('jueqing', false, target)) {
                                            return [1, 1];
                                        }
                                        return 1.2;
                                    }
                                    if (get.tag(card, 'loseHp')) {
                                        if (player.hp <= 1) {
                                            return;
                                        }
                                        return [0, 0];
                                    }
                                },
                            },
                        },
                        exsscsshouju: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            content() {
                                player.storage.exsscsunben++;
                                player.markSkill('exsscsunben');
                                player.draw();
                                player.turnOver();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (card.name == 'guiyoujie') {
                                            return [0, 1];
                                        }
                                    },
                                },
                            },
                        },
                        exsscfuli: {
                            limited: true,
                            enable: 'chooseToUse',
                            init(player) {
                                player.storage.fuli = false;
                            },
                            mark: true,
                            filter(event, player) {
                                if (event.type != 'dying') {
                                    return false;
                                }
                                if (player != event.dying) {
                                    return false;
                                }
                                if (player.storage.fuli) {
                                    return false;
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                player.storage.exsscsunben++;
                                player.markSkill('exsscsunben');
                                player.awakenSkill('fuli');
                                player.recover(game.countGroup() - player.hp);
                                ('step 1');
                                player.turnOver();
                                player.storage.fuli = true;
                            },
                            ai: {
                                save: true,
                                skillTagFilter(player) {
                                    return player.hp <= 0 && player.storage.fuli != true;
                                },
                                result: {
                                    player: 10,
                                },
                                threaten(player, target) {
                                    if (!target.storage.fuli) {
                                        return 0.9;
                                    }
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        exsscsunben: {
                            group: ['exsscsunbena'],
                            audio: 'ext:EX神将/audio:',
                            mark: true,
                            marktext: '笨',
                            init(player) {
                                player.storage.exsscsunben = 0;
                                player.markSkill('exsscsunben');
                            },
                            forced: true,
                            content() {
                                player.storage.exsscsunben += 0;
                                player.markSkill('exsscsunben');
                            },
                            intro: {
                                content: 'mark',
                            },
                        },
                        exsschunzi: {
                            derivation: ['exsscjiang', 'exsscyinghun', 'exsscyingzi'],
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return (player.storage.exsscsunben > 0) & (player.hp < 2);
                            },
                            content() {
                                'step 0';
                                let num = player.storage.exsscsunben;
                                player.gainMaxHp(num);
                                player.recover(num);
                                ('step 1');
                                player.removeSkill('exsscfuli');
                                player.removeSkill('exsscsshouju');
                                player.removeSkill('exssckurong');
                                player.removeSkill('exssctongji');
                                player.removeSkill('exsscyaowu');
                                player.removeSkill('exssclianhuo');
                                player.removeSkill('exsscshiyong');
                                player.removeSkill('exsscranshang');
                                player.removeSkill('exsscchouhai');
                                player.removeSkill('exsscbenghuai');
                                player.removeSkill('exsscsunben');
                                player.addSkill('exsscyingzi');
                                player.addSkill('exsscyinghun');
                                player.addSkill('exsscjiang');
                            },
                            intro: {
                                content: 'mark',
                            },
                        },
                        exsscsunbena: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                global: 'phaseDrawBegin',
                            },
                            forced: true,
                            content() {
                                player.addSkill('exsscfuli');
                                player.addSkill('exsscsshouju');
                                player.addSkill('exssckurong');
                                player.addSkill('exssctongji');
                                player.addSkill('exsscyaowu');
                                player.addSkill('exssclianhuo');
                                player.addSkill('exsscshiyong');
                                player.addSkill('exsscranshang');
                                player.addSkill('exsscchouhai');
                                player.addSkill('exsscbenghuai');
                            },
                        },
                        exsscjiang: {
                            shaRelated: true,
                            trigger: {
                                player: 'useCardToPlayered',
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                if (!(event.card.name == 'juedou' || (event.card.name == 'sha' && get.color(event.card) == 'red'))) {
                                    return false;
                                }
                                return player == event.target || event.parent.triggeredTargets3.length == 1;
                            },
                            forced: true,
                            content() {
                                let num = player.storage.exsscsunben;
                                player.draw(num);
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (card.name == 'sha' && get.color(card) == 'red') {
                                            return [1, 0.6];
                                        }
                                    },
                                    player(card, player, target) {
                                        if (card.name == 'sha' && get.color(card) == 'red') {
                                            return [1, 1];
                                        }
                                    },
                                },
                            },
                        },
                        exsscyingzi: {
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            content() {
                                'step 0';
                                trigger.num -= 2;
                                ('step 1');
                                let num = player.storage.exsscsunben;
                                player.draw(num + 1);
                            },
                            ai: {
                                threaten: 1.3,
                            },
                        },
                        exsscyinghun: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return player.getDamagedHp() > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('exsscyinghun'), function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        const player = _status.event.player;
                                        if (player.getDamagedHp() == 1 && target.countCards('he') == 0) {
                                            return 0;
                                        }
                                        if (get.attitude(_status.event.player, target) > 0) {
                                            return 10 + get.attitude(_status.event.player, target);
                                        }
                                        if (player.getDamagedHp() == 1) {
                                            return -1;
                                        }
                                        return 1;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    event.num = player.storage.exsscsunben;
                                    event.target = result.targets[0];
                                    if (event.num == 1) {
                                        event.directcontrol = true;
                                    } else {
                                        const str1 = '摸' + get.cnNumber(event.num, true) + '弃一';
                                        const str2 = '摸一弃' + get.cnNumber(event.num, true);
                                        player
                                            .chooseControl(str1, str2, function (event, player) {
                                                return _status.event.choice;
                                            })
                                            .set('choice', get.attitude(player, event.target) > 0 ? str1 : str2);
                                        event.str = str1;
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                const num1 = player.storage.exsscsunben;
                                if (event.directcontrol || result.control == event.str) {
                                    event.target.draw(num1);
                                    event.target.chooseToDiscard(true, 'he');
                                } else {
                                    event.target.draw();
                                    event.target.chooseToDiscard(num1, true, 'he');
                                }
                            },
                            ai: {
                                threaten(player, target) {
                                    if (target.hp == target.maxHp) {
                                        return 0.5;
                                    }
                                    if (target.hp == 1) {
                                        return 2;
                                    }
                                    if (target.hp == 2) {
                                        return 1.5;
                                    }
                                    return 0.5;
                                },
                                maixie: true,
                            },
                        },
                        exsscyhyy: {
                            audio: 'ext:EX神将/audio:2',
                            content() { },
                        },
                        exsscyzyy: {
                            audio: 'ext:EX神将/audio:2',
                            content() { },
                        },
                        extongqu: {
                            group: ['extongqumark', 'extongqudamage'],
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('extongqu', '选择一名角色获得【渠】标记'), function (card, player, target) {
                                        return target;
                                    })
                                    .set('ai', function (target) {
                                        const player = _status.event.player;
                                        return get.recoverEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool && result.targets && result.targets.length) {
                                    result.targets[0].addSkill('extongqumark');
                                    result.targets[0].storage.extongqumark++;
                                    result.targets[0].markSkill('extongqumark');
                                }
                                ('step 2');
                                if (result.targets[0].storage.extongqumark < 2) {
                                    result.targets[0].storage.extongqumark++;
                                    result.targets[0].markSkill('extongqumark');
                                }
                            },
                        },
                        extongqumark: {
                            mark: true,
                            marktext: '渠',
                            init(player) {
                                player.storage.extongqumark = 0;
                                player.markSkill('extongqumark');
                            },
                            trigger: {
                                player: 'damageAfter',
                            },
                            filter(event, player) {
                                return player.storage.extongqumark > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.storage.extongqumark -= 1;
                                player.markSkill('extongqumark');
                                ('step 1');
                                if (player.storage.extongqumark < 1) {
                                    player.removeSkill('extongqumark');
                                }
                            },
                            intro: {
                                content: 'mark',
                            },
                        },
                        extongqudamage: {
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getHistory('damage').length || player.getHistory('sourceDamage').length;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('extongqu'), '令一名角色摸一张牌.若其有【渠】,则再摸【渠】数量的牌.').set('ai', function (target) {
                                    if (target.hasSkillTag('nogain') && target != _status.currentPhase) {
                                        return target.isDamaged() ? 0 : 1;
                                    }
                                    let att = get.attitude(_status.event.player, target);
                                    if (target.isDamaged()) {
                                        att = att * 1.2;
                                    }
                                    return att;
                                });
                                ('step 1');
                                if (result.bool) {
                                    const target = result.targets[0];
                                    target.draw(1);
                                    let num = target.storage.extongqumark;
                                    if (target.storage.extongqumark > 0) {
                                        target.draw(num);
                                    }
                                }
                            },
                        },
                        exwanlan: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                global: 'dyingBefore',
                            },
                            check(event, player) {
                                return get.attitude(player, event[event.name == 'gain' ? 'source' : 'player']) > 0;
                            },
                            logTarget(event) {
                                return event[event.name == 'gain' ? 'source' : 'player'];
                            },
                            content() {
                                game.countPlayer(function (current) {
                                    if (current.storage.extongqumark > 0) {
                                        let num = current.storage.extongqumark;
                                        trigger.player.draw(num);
                                        trigger.player.recover(1);
                                        current.storage.extongqumark -= num;
                                        current.markSkill('extongqumark');
                                    }
                                    current.removeSkill('extongqumark');
                                });
                                player.removeSkill('exwanlan');
                            },
                            ai: {
                                maixie_defend: true,
                                threaten: 0.9,
                            },
                        },
                        exposhi: {
                            trigger: {
                                source: 'damageBegin2',
                            },
                            filter(event, player) {
                                return event.card && get.distance(player, event.player) >= 0;
                            },
                            forced: true,
                            logTarget: 'player',
                            content() {
                                if (trigger.player.hp > trigger.player.maxHp / 2) {
                                    let num = player.hp - trigger.player.hp;
                                    trigger.num++;
                                }
                            },
                        },
                        exxinyan: {
                            trigger: {
                                source: 'damageBegin2',
                            },
                            filter(event, player) {
                                return event.card && get.distance(player, event.player) >= 0;
                            },
                            forced: true,
                            logTarget: 'player',
                            content() {
                                if (trigger.player.hp < trigger.player.maxHp / 2) {
                                    let num = player.hp - trigger.player.hp;
                                    trigger.num++;
                                }
                            },
                        },
                        exfuyi: {
                            trigger: {
                                source: 'damageSource',
                            },
                            filter(event, player) {
                                return get.distance(player, event.player) >= 0;
                            },
                            forced: true,
                            content() {
                                player.recover(trigger.num);
                            },
                        },
                        exzhennv: {
                            trigger: {
                                source: 'damageSource',
                            },
                            filter(event, player) {
                                return get.distance(player, event.player) >= 0;
                            },
                            forced: true,
                            content() {
                                let num = [1, 0].randomGet();
                                trigger.player.loseHp(num);
                            },
                        },
                        exjingji: {
                            trigger: {
                                player: 'damageAfter',
                            },
                            forced: true,
                            content() {
                                let num = [1, 0].randomGet();
                                trigger.source.loseHp(num);
                            },
                        },
                        exbeifu: {
                            trigger: {
                                player: 'damageBegin2',
                            },
                            filter(event, player) {
                                return event.card && get.distance(player, event.player) >= 0;
                            },
                            forced: true,
                            logTarget: 'player',
                            content() {
                                if (trigger.num >= 2) {
                                    trigger.num -= 1;
                                }
                            },
                        },
                        exdizangdun: {
                            mark: true,
                            marktext: '盾',
                            trigger: {
                                player: 'damageBefore',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                trigger.cancel();
                                ('step 1');
                                player.removeSkill('exdizangdun');
                            },
                            intro: {
                                content: 'mark',
                            },
                        },
                        exdizang: {
                            trigger: {
                                player: 'damageAfter',
                            },
                            forced: true,
                            content() {
                                player.addSkill('exdizangdun');
                            },
                        },
                        exshuyao: {
                            trigger: {
                                player: 'recoverBefore',
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                        },
                        exyunhun: {
                            derivation: ['exposhi', 'exxinyan', 'exzhennv', 'exfuyi', 'exdizang', 'exbeifu', 'exshuyao', 'exjingji'],
                            group: ['exyunhuna'],
                            audio: 'ext:EX神将/audio:6',
                            trigger: {
                                player: 'phaseBefore',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseControl('【破势】', '【心眼】', '【针女】', '【蝠翼】');
                                ('step 1');
                                if (result.control == '【破势】') {
                                    player.addTempSkill('exposhi', { player: 'phaseEnd' });
                                }
                                if (result.control == '【心眼】') {
                                    player.addTempSkill('exxinyan', { player: 'phaseEnd' });
                                }
                                if (result.control == '【针女】') {
                                    player.addTempSkill('exzhennv', { player: 'phaseEnd' });
                                }
                                if (result.control == '【蝠翼】') {
                                    player.addTempSkill('exfuyi', { player: 'phaseEnd' });
                                }
                            },
                            ai: {
                                order: 9.8,
                                threaten: 1.8,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        exyunhuna: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseControl('【被服】', '【地藏】', '【树妖】', '【镜姬】');
                                ('step 1');
                                if (result.control == '【被服】') {
                                    player.addTempSkill('exbeifu', { player: 'phaseBegin' });
                                }
                                if (result.control == '【地藏】') {
                                    player.addTempSkill('exdizang', { player: 'phaseBegin' });
                                }
                                if (result.control == '【树妖】') {
                                    player.addTempSkill('exshuyao', { player: 'phaseBegin' });
                                }
                                if (result.control == '【镜姬】') {
                                    player.addTempSkill('exjingji', { player: 'phaseBegin' });
                                }
                            },
                            ai: {
                                order: 9.8,
                                threaten: 1.8,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        exzhixi: {
                            mod: {
                                cardEnabled(card, player) {
                                    if (player.storage.new_zhixi2 || player.countMark('new_zhixi') >= 1) {
                                        return false;
                                    }
                                },
                                cardUsable(card, player) {
                                    if (player.storage.new_zhixi2 || player.countMark('new_zhixi') >= 1) {
                                        return false;
                                    }
                                },
                                cardRespondable(card, player) {
                                    if (player.storage.new_zhixi2 || player.countMark('new_zhixi') >= 1) {
                                        return false;
                                    }
                                },
                            },
                            trigger: {
                                player: 'useCard1',
                            },
                            forced: true,
                            popup: false,
                            onremove(player) {
                                player.unmarkSkill('new_meibu');
                                delete player.storage.new_zhixi;
                                delete player.storage.new_zhixi2;
                            },
                            firstDo: true,
                            content() {
                                player.addMark('new_zhixi', 1, false);
                                if (get.type2(trigger.card) == 'trick') {
                                    player.storage.new_zhixi2 = true;
                                }
                            },
                            ai: {
                                presha: true,
                                pretao: true,
                                nokeep: true,
                            },
                        },
                        exmeibu: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return event.player != player && event.player.isAlive() && player.countCards('h') > 0;
                            },
                            forced: true,
                            derivation: ['exzhixi'],
                            checkx(event, player) {
                                if (get.attitude(player, event.player) >= 0) {
                                    return false;
                                }
                                const e2 = player.getEquip(2);
                                if (e2) {
                                    if (e2.name == 'tengjia') {
                                        return true;
                                    }
                                    if (e2.name == 'bagua') {
                                        return true;
                                    }
                                }
                                return event.player.countCards('h') > event.player.hp;
                            },
                            content() {
                                'step 0';
                                let check = lib.skill.new_meibu.checkx(trigger, player);
                                player
                                    .chooseToDiscard(get.prompt2('exmeibu', trigger.player), 'h', 1)
                                    .set('ai', function (card) {
                                        if (_status.event.check) {
                                            return 6 - get.value(card);
                                        }
                                        return 0;
                                    })
                                    .set(
                                        'check',
                                        check
                                    )('step 1');
                                if (result.bool) {
                                    const target = trigger.player;
                                    const card = result.cards[0];
                                    player.line(target, 'green');
                                    target.addTempSkill('exzhixi', 'phaseEnd');
                                    target.addTempSkill('fengyin', 'phaseEnd');
                                }
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        exmumu: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'damageBegin',
                            },
                            content() {
                                if (trigger.source.hasSkill('exzhixi')) {
                                    trigger.cancel();
                                }
                                if (!trigger.source.hasSkill('exzhixi') && player.hp > 1) {
                                    let num = trigger.source.countCards('e');
                                    player.gainPlayerCard(get.prompt('exmumu', trigger.source), trigger.source, get.buttonValue, 'e', num);
                                }
                                if (player.hp <= 1 && player.countCards('he', { type: 'equip' }) > 1 && !trigger.source.hasSkill('exzhixi')) {
                                    player.chooseToDiscard(2, true, 'he', { type: 'equip' });
                                    trigger.cancel();
                                }
                            },
                        },
                        exjishe: {
                            group: ['jishe2', 'exjishea'],
                            audio: 'ext:EX神将/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.getHandcardLimit() > 0;
                            },
                            init(player) {
                                player.storage.jishe = 0;
                                player.storage.exbao = 0;
                            },
                            content() {
                                'step 0';
                                player.addSkill('exbao');
                                player.addSkill('exbaodaojishi');
                                player.addSkill('exzibao');
                                ('step 1');
                                player.draw();
                                player.storage.jishe++;
                                player.storage.exbao++;
                                player.markSkill('exbao');
                                player.storage.exbaodaojishi++;
                                player.markSkill('exbaodaojishi');
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player(player) {
                                        if (!player.needsToDiscard(1)) {
                                            return 1;
                                        }
                                        return 0;
                                    },
                                },
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num - player.storage.jishe;
                                },
                            },
                        },
                        exbao: {
                            mark: true,
                            marktext: '爆',
                            init(player) {
                                player.storage.exbao = 0;
                                player.markSkill('exbao');
                            },
                            trigger: {
                                player: 'phaseEnd',
                            },
                            filter(event, player) {
                                return player.storage.extongqumark > 0;
                            },
                            forced: true,
                            content() {
                                player.storage.exbao -= 1;
                                player.markSkill('exbao');
                            },
                            intro: {
                                content: 'mark',
                            },
                        },
                        exzibao: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'dying',
                            },
                            filter(event, player) {
                                return player.storage.exbao > 0 && player.storage.exbaodaojishi > 0;
                            },
                            forced: true,
                            content() {
                                let num = player.storage.exbao;
                                player.damage(num, true, 'fire');
                                player.removeSkill('exbao');
                                player.removeSkill('exbaodaojishi');
                                player.removeSkill('exzibao');
                            },
                        },
                        exbaodaojishi: {
                            mark: true,
                            marktext: '轮',
                            init(player) {
                                player.storage.exbaodaojishi = 0;
                                player.markSkill('exbaodaojishi');
                            },
                            trigger: {
                                player: 'phaseEnd',
                            },
                            filter(event, player) {
                                return player.storage.exbaodaojishi > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.storage.exbaodaojishi -= 1;
                                player.markSkill('exbaodaojishi');
                                ('step 1');
                                if (player.storage.exbaodaojishi <= 0) {
                                    let num = player.storage.exbao;
                                    player.damage(num, true, 'fire');
                                    player.removeSkill('exbao');
                                    player.removeSkill('exbaodaojishi');
                                }
                            },
                            intro: {
                                content: 'mark',
                            },
                        },
                        exjishea: {
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                const num1 = player.storage.exbao;
                                let num = game.countPlayer(function (current) {
                                    return !current.isLinked();
                                });
                                player
                                    .chooseTarget(get.prompt('jishe'), '横置至多' + get.cnNumber(Math.min(num1)) + '名角色', [1, Math.min(num1)], function (card, player, target) {
                                        return target.maxHp > 0;
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    event.targets = result.targets;
                                    event.num = 0;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.num < event.targets.length) {
                                    event.targets[event.num].link();
                                    event.num++;
                                    event.redo();
                                }
                            },
                        },
                        exjielue: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                source: 'dyingBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.togain = trigger.player.getCards('hej');
                                player.gain(event.togain, trigger.player, 'giveAuto');
                                ('step 1');
                                const target = trigger.player;
                                const num1 = target.maxHp;
                                player.gainMaxHp(num1);
                                let list = [];
                                if (lib.character[target.name]) {
                                    list.addArray(lib.character[target.name][3]);
                                }
                                if (lib.character[target.name1]) {
                                    list.addArray(lib.character[target.name1][3]);
                                }
                                if (lib.character[target.name2]) {
                                    list.addArray(lib.character[target.name2][3]);
                                }
                                player.addSkill(list);
                            },
                        },
                        extunjun: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            check() {
                                return false;
                            },
                            filter(event, player) {
                                return !game.countPlayer((q) => q.maxHp >= player.maxHp); //QQQ
                            },
                            content() {
                                player.loseMaxHp(1);
                                player.draw(2);
                            },
                        },
                        exluoyidamage: {
                            audio: 'ext:EX神将/audio:1',
                            group: ['exluoyimark'],
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return player.storage.exluoyimark > 0;
                            },
                            content() {
                                'step 0';
                                let num = player.storage.exluoyimark;
                                trigger.num += num;
                                player.storage.exluoyimark -= num;
                                player.markSkill('exluoyimark');
                            },
                        },
                        exluoyimark: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'damageEnd',
                            },
                            mark: true,
                            marktext: '怒',
                            init(player) {
                                player.storage.exluoyimark = 2;
                                player.markSkill('exluoyimark');
                            },
                            forced: true,
                            content() {
                                const num1 = trigger.num;
                                player.storage.exluoyimark += num1;
                                player.markSkill('exluoyimark');
                            },
                            intro: {
                                content: 'mark',
                            },
                        },
                        exqibuabcd: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                if (player.isTurnedOver()) {
                                    player.turnOver();
                                }
                            },
                        },
                        exxiansiview: {
                            mod: {
                                cardname(card, player) {
                                    if (card.name == 'sha') {
                                        return 'exxiansip';
                                    }
                                },
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (!player.countCards('h', 'sha')) {
                                        return false;
                                    }
                                },
                                respondSha: true,
                            },
                            trigger: {
                                player: ['useCard1', 'respond'],
                            },
                            firstDo: true,
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'exxiansip' && !event.skill && event.cards.length == 1 && event.cards[0].name == 'sha';
                            },
                            content() { },
                        },
                        exxianfuy: {
                            forced: true,
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'recoverAfter',
                            },
                            content() {
                                'step 0';
                                game.countPlayer(function (current) {
                                    if (current != player && current.hasSkill('exxianfud')) {
                                        player.line(current);
                                        current.removeSkill('exxianfue');
                                        current.recover(trigger.num);
                                        current.draw(2);
                                    }
                                });
                                ('step 1');
                                game.countPlayer(function (current) {
                                    if (current != player && current.hasSkill('exxianfud')) {
                                        player.line(current);
                                        current.sddSkill('exxianfue');
                                    }
                                });
                            },
                            intro: {
                                content: 'mark',
                            },
                        },
                        exxianfux: {
                            trigger: {
                                global: 'phaseBgein',
                            },
                            forced: true,
                            content() { },
                        },
                        extianjiaguojia: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'dieBefore',
                            },
                            forced: true,
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player && current.hasSkill('exxianfub')) {
                                        player.line(current, 'green');
                                        current.init(current.name, 'EX郭嘉');
                                    }
                                });
                            },
                        },
                        exfuman: {
                            group: ['exfumanend', 'exfumanthree', 'exfumanstart'],
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'loseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.countCards('h', 'sha')) {
                                    return false;
                                }
                                if (Array.isArray(event.cards)) {
                                    for (const i of event.cards) {
                                        //QQQ
                                        if (i.original == 'h') {
                                            return true;
                                        }
                                    }
                                }
                                return false;
                            },
                            content() {
                                let list = ['sha'];
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                            },
                        },
                        exfumannosha: {
                            mod: {
                                cardEnabled(card) {
                                    if (card.name == 'sha') {
                                        return false;
                                    }
                                },
                            },
                        },
                        exfumanstart: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                global: 'gameDrawAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.countCards('h', 'sha')) {
                                    return false;
                                }
                                if (Array.isArray(event.cards)) {
                                    for (const i of event.cards) {
                                        //QQQ
                                        if (i.original == 'h') {
                                            return true;
                                        }
                                    }
                                }
                                return false;
                            },
                            content() {
                                let list = ['sha'];
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                            },
                        },
                        exfumanthree: {
                            audio: 'ext:EX神将/audio:2',
                            mark: true,
                            marktext: '抚蛮',
                            init(player) {
                                player.storage.exfumanthree = 0;
                                player.markSkill('exfumanthree');
                            },
                            shaRelated: true,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            logTarget: 'target',
                            content() {
                                'step 0';
                                player.storage.exfumanthree++;
                                player.markSkill('exfumanthree');
                                ('step 1');
                                if (player.storage.exfumanthree >= 3) {
                                    player.addTempSkill('exfumannosha', { player: 'phaseEnd' });
                                }
                            },
                            intro: {
                                content: 'mark',
                            },
                        },
                        exfumanend: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                global: 'phaseEnd',
                            },
                            filter(event, player) {
                                return player.storage.exfumanthree >= 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.removeSkill('exfumannosha');
                                ('step 1');
                                let num = player.storage.exfumanthree;
                                player.storage.exfumanthree -= num;
                                player.markSkill('exfumanthree');
                            },
                        },
                        exzhuli: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('exzhuli'), '令一名角色获得【抚蛮】直至回合结束', function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        const player = _status.event.player;
                                        return get.recoverEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool && result.targets && result.targets.length) {
                                    player.line(result.targets[0], 'green');
                                    if (result.targets[0].countCards('h', 'sha') <= 0) {
                                        let list = ['sha'];
                                        result.targets[0].gain(game.createCard(list.randomGet()));
                                        result.targets[0].$draw();
                                    }
                                    result.targets[0].addSkill('exfumanthree');
                                    result.targets[0].addSkill('exfumanend');
                                    result.targets[0].addSkill('exfumanstart');
                                    result.targets[0].addSkill('exfuman');
                                    result.targets[0].addSkill('exfumannosha');
                                    result.targets[0].addSkill('exfumannosha');
                                    result.targets[0].addSkill('exzhulimiss');
                                }
                            },
                        },
                        exzhulimiss: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                player.removeSkill('exfumanthree');
                                player.removeSkill('exfumanend');
                                player.removeSkill('exfumanstart');
                                player.removeSkill('exfuman');
                                player.removeSkill('exfumannosha');
                            },
                        },
                        exmojiang: {
                            trigger: {
                                source: 'damageBefore',
                            },
                            forced: true,
                            group: ['exmojiangx'],
                            content() {
                                const num1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 8].randomGet();
                                trigger.num += num1;
                            },
                        },
                        exmojianga: {
                            audio: 'ext:EX神将/audio:2',
                            forced: true,
                            content() { },
                        },
                        exyuzhou: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'damageAfter',
                            },
                            content() {
                                let num = [1, 2, 3, 4, 5, 6, 7, 8, 9].randomGet();
                                player.draw(num);
                            },
                            ai: {
                                maixie_defend: true,
                                effect: {
                                    target(card, player, target) {
                                        if (player.countCards('he') > 1 && get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) {
                                                return [1, -1.5];
                                            }
                                            if (get.attitude(target, player) < 0) {
                                                return [1, 1];
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        exxianjihuaxiong: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                global: 'gameStart',
                            },
                            content() {
                                'step 0';
                                game.countPlayer(function (current) {
                                    if (current != player) {
                                        player.line(current, 'green');
                                        let num = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1].randomGet();
                                        current.damage(1, true);
                                    }
                                });
                                ('step 1');
                                player.addSkill('exxianjihuaxiongb');
                            },
                        },
                        exbaiban: {
                            audio: 'ext:EX神将/audio:1',
                            init(player) {
                                player.storage.exbaiban = 0;
                            },
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.exbaiban >= 5;
                            },
                            juexingji: true,
                            content() {
                                player.die();
                            },
                            group: ['exbaiban_count1', 'exbaiban_count2'],
                            subSkill: {
                                count1: {
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    silent: true,
                                    content() {
                                        player.storage.exbaiban++;
                                    },
                                    forced: true,
                                    popup: false,
                                },
                                count2: {
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    silent: true,
                                    content() {
                                        player.storage.exbaiban = 0;
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                        },
                        exdimenga: {
                            audio: 'ext:EX神将/audio:1',
                            usable: 1,
                            forced: true,
                            enable: 'phaseUse',
                            limit: true,
                            check(event, player) {
                                return game.hasPlayer(function (current) {
                                    return get.attitude(player, current) > 0;
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('exdimenga'), 2, true, function (card, player, target) {
                                        return target.hp >= 0;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target) > 0;
                                    });
                                ('step 1');
                                if (result.bool && result.targets && result.targets.length) {
                                    player.line(result.targets[0], 'green');
                                    result.targets[0].addSkill('exdimengb');
                                    result.targets[0].addSkill('exdimengc');
                                    player.line(result.targets[1], 'green');
                                    result.targets[1].addSkill('exdimengb');
                                    result.targets[1].addSkill('exdimengc');
                                    result.targets[0].draw(0);
                                    result.targets[1].draw(0);
                                }
                                ('step 2');
                                player.removeSkill('exdimenga');
                            },
                        },
                        exdimengb: {
                            mark: true,
                            marktext: '盟',
                            forced: true,
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: ['loseAfter', 'gainAfter'],
                            },
                            popup: false,
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player && current.hasSkill('exdimengb')) {
                                        const num1 = current.countCards('h');
                                        const num2 = player.countCards('h');
                                        const num3 = player.maxHp;
                                        const num4 = current.maxHp;
                                        if (num1 > num2) {
                                            player.drawTo(Math.min(num3, num1));
                                        }
                                        if (num1 < num2) {
                                            current.drawTo(Math.min(num4, num2));
                                        }
                                    }
                                });
                            },
                            intro: {
                                content: 'mark',
                            },
                        },
                        exdimengc: {
                            forced: true,
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'damageAfter',
                            },
                            filter(event, player) {
                                return event.source && event.source.hasSkill('exdimengb');
                            },
                            content() {
                                if (trigger.source.hasSkill('exdimengb')) {
                                    player.removeSkill('exdimengb');
                                    trigger.source.removeSkill('exdimengb');
                                }
                            },
                        },
                        exduhou: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'phaseDrawBefore',
                            },
                            check(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current != player && get.attitude(player, current) > 0;
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('exduhou'), 1, function (card, player, target) {
                                        return target != player && target.hp >= 0;
                                    })
                                    .set('ai', function (target) {
                                        let att = get.attitude(_status.event.player, target);
                                        if (_status.event.du) {
                                            if (target.hasSkillTag('nodu')) {
                                                return 0.5;
                                            }
                                            return -att;
                                        }
                                        if (att > 0) {
                                            if (_status.event.player != target) {
                                                att += 2;
                                            }
                                            return att + Math.max(0, 5 - target.countCards('h'));
                                        }
                                        return att;
                                    });
                                ('step 1');
                                if (result.bool && result.targets && result.targets.length) {
                                    player.line(result.targets[0], 'green');
                                    result.targets[0].draw(3);
                                    player.addSkill('exduhoub');
                                }
                                ('step 2');
                                trigger.cancel();
                            },
                        },
                        exduhoub: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (player.countCards('h') <= 1) {
                                    player.draw(3);
                                }
                                ('step 1');
                                player.removeSkill('exduhoub');
                            },
                        },
                        exhuanhuanew: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                let list = get.gainableSkills();
                                list.remove(player.getSkills());
                                list = list.randomGets(1);
                                event.skillai = function () {
                                    return get.max(list, get.skillRank, 'item');
                                };
                                if (event.isMine()) {
                                    const dialog = ui.create.dialog('forcebutton');
                                    dialog.add('选择获得一项技能');
                                    const clickItem = function () {
                                        _status.event._result = this.link;
                                        dialog.close();
                                        game.resume();
                                    };
                                    for (let i = 0; i < list.length; i++) {
                                        if (lib.translate[list[i] + '_info']) {
                                            let translation = get.translation(list[i]);
                                            if (translation[0] == '新' && translation.length == 3) {
                                                translation = translation.slice(1, 3);
                                            } else {
                                                translation = translation.slice(0, 2);
                                            }
                                            const item = dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + translation + '】</div><div>' + lib.translate[list[i] + '_info'] + '</div></div>');
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
                                const link = result;
                                player.addSkill(link, true);
                                player.popup(link);
                                game.log(player, '获得了技能', '【' + get.translation(link) + '】');
                                ('step 2');
                                let list1 = get.gainableSkills();
                                list1.remove(player.getSkills());
                                list1 = list1.randomGets(1);
                                event.skillai = function () {
                                    return get.max(list1, get.skillRank, 'item');
                                };
                                if (event.isMine()) {
                                    const dialog = ui.create.dialog('forcebutton');
                                    dialog.add('选择获得一项技能');
                                    const clickItem = function () {
                                        _status.event._result = this.link;
                                        dialog.close();
                                        game.resume();
                                    };
                                    for (let i = 0; i < list1.length; i++) {
                                        if (lib.translate[list1[i] + '_info']) {
                                            let translation = get.translation(list1[i]);
                                            if (translation[0] == '新' && translation.length == 3) {
                                                translation = translation.slice(1, 3);
                                            } else {
                                                translation = translation.slice(0, 2);
                                            }
                                            const item = dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + translation + '】</div><div>' + lib.translate[list1[i] + '_info'] + '</div></div>');
                                            item.firstChild.addEventListener('click', clickItem);
                                            item.firstChild.link = list1[i];
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
                                ('step 3');
                                _status.imchoosing = false;
                                const link1 = result;
                                player.addSkill(link1, true);
                                player.popup(link1);
                                game.log(player, '获得了技能', '【' + get.translation(link1) + '】');
                                ('step 4');
                                let list2 = get.gainableSkills();
                                list2.remove(player.getSkills());
                                list2 = list2.randomGets(1);
                                event.skillai = function () {
                                    return get.max(list2, get.skillRank, 'item');
                                };
                                if (event.isMine()) {
                                    const dialog = ui.create.dialog('forcebutton');
                                    dialog.add('选择获得一项技能');
                                    const clickItem = function () {
                                        _status.event._result = this.link;
                                        dialog.close();
                                        game.resume();
                                    };
                                    for (let i = 0; i < list2.length; i++) {
                                        if (lib.translate[list2[i] + '_info']) {
                                            let translation = get.translation(list2[i]);
                                            if (translation[0] == '新' && translation.length == 3) {
                                                translation = translation.slice(1, 3);
                                            } else {
                                                translation = translation.slice(0, 2);
                                            }
                                            const item = dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + translation + '】</div><div>' + lib.translate[list2[i] + '_info'] + '</div></div>');
                                            item.firstChild.addEventListener('click', clickItem);
                                            item.firstChild.link = list2[i];
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
                                ('step 5');
                                _status.imchoosing = false;
                                const link2 = result;
                                player.addSkill(link2, true);
                                player.popup(link2);
                                game.log(player, '获得了技能', '【' + get.translation(link2) + '】');
                                ('step 6');
                                let list3 = get.gainableSkills();
                                list3.remove(player.getSkills());
                                list3 = list3.randomGets(1);
                                event.skillai = function () {
                                    return get.max(list3, get.skillRank, 'item');
                                };
                                if (event.isMine()) {
                                    const dialog = ui.create.dialog('forcebutton');
                                    dialog.add('选择获得一项技能');
                                    const clickItem = function () {
                                        _status.event._result = this.link;
                                        dialog.close();
                                        game.resume();
                                    };
                                    for (let i = 0; i < list3.length; i++) {
                                        if (lib.translate[list3[i] + '_info']) {
                                            let translation = get.translation(list3[i]);
                                            if (translation[0] == '新' && translation.length == 3) {
                                                translation = translation.slice(1, 3);
                                            } else {
                                                translation = translation.slice(0, 2);
                                            }
                                            const item = dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + translation + '】</div><div>' + lib.translate[list3[i] + '_info'] + '</div></div>');
                                            item.firstChild.addEventListener('click', clickItem);
                                            item.firstChild.link = list3[i];
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
                                ('step 7');
                                _status.imchoosing = false;
                                const link3 = result;
                                player.addSkill(link3, true);
                                player.popup(link3);
                                game.log(player, '获得了技能', '【' + get.translation(link3) + '】');
                                ('step 8');
                                let list4 = get.gainableSkills();
                                list4.remove(player.getSkills());
                                list4 = list4.randomGets(1);
                                event.skillai = function () {
                                    return get.max(list4, get.skillRank, 'item');
                                };
                                if (event.isMine()) {
                                    const dialog = ui.create.dialog('forcebutton');
                                    dialog.add('选择获得一项技能');
                                    const clickItem = function () {
                                        _status.event._result = this.link;
                                        dialog.close();
                                        game.resume();
                                    };
                                    for (let i = 0; i < list4.length; i++) {
                                        if (lib.translate[list4[i] + '_info']) {
                                            let translation = get.translation(list4[i]);
                                            if (translation[0] == '新' && translation.length == 3) {
                                                translation = translation.slice(1, 3);
                                            } else {
                                                translation = translation.slice(0, 2);
                                            }
                                            const item = dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + translation + '】</div><div>' + lib.translate[list4[i] + '_info'] + '</div></div>');
                                            item.firstChild.addEventListener('click', clickItem);
                                            item.firstChild.link = list4[i];
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
                                ('step 9');
                                _status.imchoosing = false;
                                const link4 = result;
                                player.addSkill(link4, true);
                                player.popup(link4);
                                game.log(player, '获得了技能', '【' + get.translation(link4) + '】');
                                ('step 10');
                                let list5 = get.gainableSkills();
                                list5.remove(player.getSkills());
                                list5 = list5.randomGets(1);
                                event.skillai = function () {
                                    return get.max(list5, get.skillRank, 'item');
                                };
                                if (event.isMine()) {
                                    const dialog = ui.create.dialog('forcebutton');
                                    dialog.add('选择获得一项技能');
                                    const clickItem = function () {
                                        _status.event._result = this.link;
                                        dialog.close();
                                        game.resume();
                                    };
                                    for (let i = 0; i < list5.length; i++) {
                                        if (lib.translate[list5[i] + '_info']) {
                                            let translation = get.translation(list5[i]);
                                            if (translation[0] == '新' && translation.length == 3) {
                                                translation = translation.slice(1, 3);
                                            } else {
                                                translation = translation.slice(0, 2);
                                            }
                                            const item = dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + translation + '】</div><div>' + lib.translate[list5[i] + '_info'] + '</div></div>');
                                            item.firstChild.addEventListener('click', clickItem);
                                            item.firstChild.link = list5[i];
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
                                ('step 11');
                                _status.imchoosing = false;
                                const link5 = result;
                                player.addSkill(link5, true);
                                player.popup(link5);
                                game.log(player, '获得了技能', '【' + get.translation(link5) + '】');
                                ('step 12');
                                let list6 = get.gainableSkills();
                                list6.remove(player.getSkills());
                                list6 = list6.randomGets(1);
                                event.skillai = function () {
                                    return get.max(list6, get.skillRank, 'item');
                                };
                                if (event.isMine()) {
                                    const dialog = ui.create.dialog('forcebutton');
                                    dialog.add('选择获得一项技能');
                                    const clickItem = function () {
                                        _status.event._result = this.link;
                                        dialog.close();
                                        game.resume();
                                    };
                                    for (let i = 0; i < list6.length; i++) {
                                        if (lib.translate[list6[i] + '_info']) {
                                            let translation = get.translation(list6[i]);
                                            if (translation[0] == '新' && translation.length == 3) {
                                                translation = translation.slice(1, 3);
                                            } else {
                                                translation = translation.slice(0, 2);
                                            }
                                            const item = dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + translation + '】</div><div>' + lib.translate[list6[i] + '_info'] + '</div></div>');
                                            item.firstChild.addEventListener('click', clickItem);
                                            item.firstChild.link = list6[i];
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
                                ('step 13');
                                _status.imchoosing = false;
                                const link6 = result;
                                player.addSkill(link6, true);
                                player.popup(link6);
                                game.log(player, '获得了技能', '【' + get.translation(link6) + '】');
                                ('step 14');
                                let list7 = get.gainableSkills();
                                list7.remove(player.getSkills());
                                list7 = list7.randomGets(1);
                                event.skillai = function () {
                                    return get.max(list7, get.skillRank, 'item');
                                };
                                if (event.isMine()) {
                                    const dialog = ui.create.dialog('forcebutton');
                                    dialog.add('选择获得一项技能');
                                    const clickItem = function () {
                                        _status.event._result = this.link;
                                        dialog.close();
                                        game.resume();
                                    };
                                    for (let i = 0; i < list7.length; i++) {
                                        if (lib.translate[list7[i] + '_info']) {
                                            let translation = get.translation(list7[i]);
                                            if (translation[0] == '新' && translation.length == 3) {
                                                translation = translation.slice(1, 3);
                                            } else {
                                                translation = translation.slice(0, 2);
                                            }
                                            const item = dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + translation + '】</div><div>' + lib.translate[list7[i] + '_info'] + '</div></div>');
                                            item.firstChild.addEventListener('click', clickItem);
                                            item.firstChild.link = list7[i];
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
                                ('step 15');
                                _status.imchoosing = false;
                                const link7 = result;
                                player.addSkill(link7, true);
                                player.popup(link7);
                                game.log(player, '获得了技能', '【' + get.translation(link7) + '】');
                                ('step 16');
                                let list8 = get.gainableSkills();
                                list8.remove(player.getSkills());
                                list8 = list8.randomGets(1);
                                event.skillai = function () {
                                    return get.max(list8, get.skillRank, 'item');
                                };
                                if (event.isMine()) {
                                    const dialog = ui.create.dialog('forcebutton');
                                    dialog.add('选择获得一项技能');
                                    const clickItem = function () {
                                        _status.event._result = this.link;
                                        dialog.close();
                                        game.resume();
                                    };
                                    for (let i = 0; i < list8.length; i++) {
                                        if (lib.translate[list8[i] + '_info']) {
                                            let translation = get.translation(list8[i]);
                                            if (translation[0] == '新' && translation.length == 3) {
                                                translation = translation.slice(1, 3);
                                            } else {
                                                translation = translation.slice(0, 2);
                                            }
                                            const item = dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + translation + '】</div><div>' + lib.translate[list8[i] + '_info'] + '</div></div>');
                                            item.firstChild.addEventListener('click', clickItem);
                                            item.firstChild.link = list8[i];
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
                                ('step 17');
                                _status.imchoosing = false;
                                const link8 = result;
                                player.addSkill(link8, true);
                                player.popup(link8);
                                game.log(player, '获得了技能', '【' + get.translation(link8) + '】');
                                ('step 18');
                                let list9 = get.gainableSkills();
                                list9.remove(player.getSkills());
                                list9 = list9.randomGets(1);
                                event.skillai = function () {
                                    return get.max(list9, get.skillRank, 'item');
                                };
                                if (event.isMine()) {
                                    const dialog = ui.create.dialog('forcebutton');
                                    dialog.add('选择获得一项技能');
                                    const clickItem = function () {
                                        _status.event._result = this.link;
                                        dialog.close();
                                        game.resume();
                                    };
                                    for (let i = 0; i < list9.length; i++) {
                                        if (lib.translate[list9[i] + '_info']) {
                                            let translation = get.translation(list9[i]);
                                            if (translation[0] == '新' && translation.length == 3) {
                                                translation = translation.slice(1, 3);
                                            } else {
                                                translation = translation.slice(0, 2);
                                            }
                                            const item = dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + translation + '】</div><div>' + lib.translate[list9[i] + '_info'] + '</div></div>');
                                            item.firstChild.addEventListener('click', clickItem);
                                            item.firstChild.link = list9[i];
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
                                ('step 19');
                                _status.imchoosing = false;
                                const link9 = result;
                                player.addSkill(link9, true);
                                player.popup(link9);
                                game.log(player, '获得了技能', '【' + get.translation(link9) + '】');
                            },
                        },
                        exmojiang30: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                source: 'damageBefore',
                            },
                            forced: true,
                            content() {
                                const num2 = [0, 0, 8].randomGet();
                                trigger.num += num2;
                            },
                        },
                        exmojiangx: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'dyingBefore',
                            },
                            forced: true,
                            content() {
                                player.removeSkill('exmojiang');
                                player.addSkill('exmojiang30');
                            },
                        },
                        exxianjihuaxiongb: {
                            usable: 1,
                            enable: 'phaseUse',
                            content() {
                                'step 0';
                                const num1 = player.hp;
                                player.loseHp(num1);
                                ('step 1');
                                game.countPlayer(function (current) {
                                    if (current != player) {
                                        player.line(current, 'green');
                                        let num = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1].randomGet();
                                        current.damage(1, true);
                                    }
                                });
                                ('step 2');
                                player.removeSkill('exxianjihuaxiongb');
                            },
                        },
                        exruohuo: {
                            mark: true,
                            marktext: '火',
                            trigger: {
                                player: 'damageBegin3',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.nature == 'fire';
                            },
                            content() {
                                'step 0';
                                trigger.num++;
                                ('step 1');
                                player.removeSkill('exruohuo');
                            },
                            intro: {
                                content: 'mark',
                            },
                        },
                        exwuqian: {
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 999;
                                },
                            },
                        },
                        exceshi: {
                            enable: 'phaseUse',
                            content() {
                                'step 0';
                                game.broadcastAll(player.setIdentity(' ', true));
                                game.broadcastAll(player.identityShown);
                                const identity = ' ';
                                player.identity = identity;
                                ui.update();
                                player.update();
                                ('step 1');
                                const group = 'shu';
                                player.group = group;
                                ui.update();
                                player.update();
                                ('step 2');
                                const sex = 'female';
                                player.sex = sex;
                                ui.update();
                                player.update();
                            },
                        },
                        exquanbian: {
                            mode: ['identity'],
                            init(player) {
                                player.storage.exquanbian = 3;
                            },
                            trigger: {
                                player: 'phaseBegin',
                            },
                            mark: true,
                            marktext: '权',
                            filter(event, player) {
                                return player.storage.exquanbian >= 1 && player.storage.exquanbian <= 2 && !player.hasSkill('exmark') && !player.hasSkill('exmarkmark');
                            },
                            prompt: '【权变】:是否消耗一点标记,摸两张牌?',
                            content() {
                                'step 0';
                                player.storage.exquanbian -= 1;
                                player.markSkill('exquanbian');
                                ('step 1');
                                player.draw(2);
                            },
                            intro: {
                                content: 'mark',
                            },
                            group: ['exquanbian_count1', 'exquanbian_count2', 'exquanbian_count3', 'exquanbian_count4', 'exquanbian_count5'],
                            subSkill: {
                                count1: {
                                    audio: 'ext:EX神将/audio:2',
                                    trigger: {
                                        player: 'damageAfter',
                                        source: 'damageAfter',
                                    },
                                    silent: true,
                                    content() {
                                        player.storage.exquanbian++;
                                        player.markSkill('exquanbian');
                                    },
                                    forced: true,
                                    popup: false,
                                },
                                count2: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    mark: true,
                                    filter(event, player) {
                                        return player.storage.exquanbian >= 3 && player.storage.exquanbian < 5 && !player.hasSkill('exmarkmark');
                                    },
                                    prompt: '【权变】:是否消耗标记发动摸牌/改变阵营的效果?',
                                    content() {
                                        'step 0';
                                        player.addSkill('exmark');
                                        player.chooseControl('摸两张牌', '改变阵营');
                                        ('step 1');
                                        if (result.control == '摸两张牌') {
                                            event.goto(2);
                                        }
                                        if (result.control == '改变阵营') {
                                            event.goto(4);
                                        }
                                        ('step 2');
                                        player.storage.exquanbian -= 1;
                                        player.markSkill('exquanbian');
                                        player.draw(2);
                                        ('step 3');
                                        event.finish();
                                        ('step 4');
                                        player.chooseControl('群', '魏', '蜀', '吴', '晋');
                                        player.storage.exquanbian -= 3;
                                        player.markSkill('exquanbian');
                                        ('step 5');
                                        if (result.control == '群') {
                                            const group = 'qun';
                                            player.group = group;
                                            ui.update();
                                            player.update();
                                        }
                                        if (result.control == '魏') {
                                            const group = 'wei';
                                            player.group = group;
                                            ui.update();
                                            player.update();
                                        }
                                        if (result.control == '蜀') {
                                            const group = 'shu';
                                            player.group = group;
                                            ui.update();
                                            player.update();
                                        }
                                        if (result.control == '吴') {
                                            const group = 'wu';
                                            player.group = group;
                                            ui.update();
                                            player.update();
                                        }
                                        if (result.control == '晋') {
                                            const group = 'jin';
                                            player.group = group;
                                            ui.update();
                                            player.update();
                                        }
                                        ('step 6');
                                        event.finish();
                                    },
                                },
                                count3: {
                                    trigger: {
                                        global: 'die',
                                    },
                                    filter(event, player) {
                                        return game.countPlayer() <= 1;
                                    },
                                    silent: true,
                                    content() {
                                        let bool;
                                        if (player == game.me) {
                                            bool = true;
                                        }
                                        game.over(bool);
                                    },
                                    forced: true,
                                    popup: false,
                                },
                                count4: {
                                    trigger: {
                                        player: ['phaseEnd', 'phaseUseBefore'],
                                    },
                                    filter(event, player) {
                                        return player.hasSkill('exmark');
                                    },
                                    silent: true,
                                    content() {
                                        player.removeSkill('exmark');
                                        player.removeSkill('exmarkmark');
                                    },
                                    forced: true,
                                    popup: false,
                                },
                                count5: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    mark: true,
                                    filter(event, player) {
                                        return player.storage.exquanbian >= 5;
                                    },
                                    prompt: '【权变】:是否消耗标记发动摸牌/改变阵营/改变身份的效果?',
                                    content() {
                                        'step 0';
                                        player.addSkill('exmark');
                                        player.addSkill('exmarkmark');
                                        player.chooseControl('摸两张牌', '改变阵营', '改变身份');
                                        ('step 1');
                                        if (result.control == '摸两张牌') {
                                            event.goto(2);
                                        }
                                        if (result.control == '改变阵营') {
                                            event.goto(4);
                                        }
                                        if (result.control == '改变身份') {
                                            event.goto(7);
                                        }
                                        ('step 2');
                                        player.storage.exquanbian -= 1;
                                        player.markSkill('exquanbian');
                                        player.draw(2);
                                        ('step 3');
                                        event.finish();
                                        ('step 4');
                                        player.chooseControl('群', '魏', '蜀', '吴', '晋');
                                        player.storage.exquanbian -= 3;
                                        player.markSkill('exquanbian');
                                        ('step 5');
                                        if (result.control == '群') {
                                            const group = 'qun';
                                            player.group = group;
                                            ui.update();
                                            player.update();
                                        }
                                        if (result.control == '魏') {
                                            const group = 'wei';
                                            player.group = group;
                                            ui.update();
                                            player.update();
                                        }
                                        if (result.control == '蜀') {
                                            const group = 'shu';
                                            player.group = group;
                                            ui.update();
                                            player.update();
                                        }
                                        if (result.control == '吴') {
                                            const group = 'wu';
                                            player.group = group;
                                            ui.update();
                                            player.update();
                                        }
                                        if (result.control == '晋') {
                                            const group = 'jin';
                                            player.group = group;
                                            ui.update();
                                            player.update();
                                        }
                                        ('step 6');
                                        event.finish();
                                        ('step 7');
                                        player.chooseControl('主', '忠', '反', '内');
                                        player.storage.exquanbian -= 5;
                                        player.markSkill('exquanbian');
                                        ('step 8');
                                        if (result.control == '主') {
                                            game.broadcastAll(player.setIdentity('zhu', true));
                                            game.broadcastAll(player.identityShown);
                                            const identity = 'zhu';
                                            player.identity = identity;
                                            ui.update();
                                            player.update();
                                        }
                                        if (result.control == '忠') {
                                            game.broadcastAll(player.setIdentity('zhong', true));
                                            game.broadcastAll(player.identityShown);
                                            const identity = 'zhong';
                                            player.identity = identity;
                                            ui.update();
                                            player.update();
                                        }
                                        if (result.control == '反') {
                                            game.broadcastAll(player.setIdentity('fan', true));
                                            game.broadcastAll(player.identityShown);
                                            const identity = 'fan';
                                            player.identity = identity;
                                            ui.update();
                                            player.update();
                                        }
                                        if (result.control == '内') {
                                            game.broadcastAll(player.setIdentity('nei', true));
                                            game.broadcastAll(player.identityShown);
                                            const identity = 'nei';
                                            player.identity = identity;
                                            ui.update();
                                            player.update();
                                        }
                                        ('step 9');
                                        event.finish();
                                    },
                                },
                            },
                        },
                        exanjian: {
                            mode: ['doudizhu'],
                            audio: 'ext:EX神将/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target && target.hasSkill('exanjianmark');
                            },
                            filter(event, player) {
                                return player.identity == 'zhu' && player.countCards('h') > 0;
                            },
                            filterCard: true,
                            selectCard: 1,
                            discard: false,
                            lose: true,
                            content() {
                                'step 0';
                                if (target.storage.exanjianmark >= 4) {
                                    player.addSkill('exmark');
                                }
                                target.storage.exanjianmark++;
                                target.markSkill('exanjianmark');
                                ('step 1');
                                player.$give(cards.length, target);
                                target.gain(cards, player);
                                ('step 2');
                                if (target.storage.exanjianmark >= 5) {
                                    player.addSkill('exmark');
                                }
                            },
                            group: ['exanjian_count1', 'exanjian_count2', 'exanjian_count3'],
                            subSkill: {
                                count1: {
                                    trigger: {
                                        global: 'gameDrawAfter',
                                    },
                                    filter(event, player) {
                                        return player.identity == 'zhu';
                                    },
                                    silent: true,
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget(function (card, player, target) {
                                                return target;
                                            })
                                            .set('ai', function (target) {
                                                const player = _status.event.player;
                                                return get.damageEffect(target, player, player);
                                            });
                                        ('step 1');
                                        if (result.bool && result.targets && result.targets.length) {
                                            result.targets[0].addSkill('exanjianmark');
                                        }
                                    },
                                    forced: true,
                                    popup: false,
                                },
                                count2: {
                                    trigger: {
                                        global: 'dieBefore',
                                    },
                                    filter(event, player) {
                                        return (event.player.identity == 'fan' && player.hasSkill('exmark')) || player.storage.exanjianmark >= 10;
                                    },
                                    silent: true,
                                    content() {
                                        let bool;
                                        if (player == game.me) {
                                            bool = true;
                                        }
                                        game.over(bool);
                                    },
                                    forced: true,
                                    popup: false,
                                },
                                count3: {
                                    trigger: {
                                        player: 'damageAfter',
                                    },
                                    forced: true,
                                    content() { },
                                    popup: false,
                                },
                            },
                        },
                        exanjianmark: {
                            audio: 'ext:EX神将/audio:1',
                            filter(event, player) {
                                return player.storage.exanjianmark > 0;
                            },
                            trigger: {
                                player: 'gainBefore',
                            },
                            mark: true,
                            marktext: '间',
                            popup: false,
                            init(player) {
                                player.storage.exanjianmark = 0;
                                player.markSkill('exanjianmark');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.storage.exanjianmark += 0;
                                player.markSkill('exanjianmark');
                                ('step 1');
                                if (player.storage.exanjianmark >= 3 && player.storage.exanjianmark < 5) {
                                    game.broadcastAll(player.setIdentity('nei', true));
                                    game.broadcastAll(player.identityShown);
                                    const identity = 'nei';
                                    player.identity = identity;
                                    player.setIdentity('内', true);
                                    ui.update();
                                    player.update();
                                }
                                ('step 2');
                                player.markSkill('exanjianmark');
                                if (player.storage.exanjianmark >= 5 && player.storage.exanjianmark < 10) {
                                    game.broadcastAll(player.setIdentity('zhu', true));
                                    game.broadcastAll(player.identityShown);
                                    const identity = 'zhu';
                                    player.identity = identity;
                                    player.setIdentity('忠', true);
                                    ui.update();
                                    player.update();
                                }
                            },
                            intro: {
                                content: 'mark',
                            },
                            group: ['exanjianmark_count1', 'exanjianmark_count2'],
                            subSkill: {
                                count1: {
                                    trigger: {
                                        global: 'damageAfter',
                                    },
                                    filter(event, player) {
                                        return event.player.hasSkill('exanjian');
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.storage.exanjianmark++;
                                        player.markSkill('exanjianmark');
                                        ('step 1');
                                        if (player.storage.exanjianmark >= 3 && player.storage.exanjianmark < 5) {
                                            game.broadcastAll(player.setIdentity('nei', true));
                                            game.broadcastAll(player.identityShown);
                                            const identity = 'nei';
                                            player.identity = identity;
                                            player.setIdentity('内', true);
                                            ui.update();
                                            player.update();
                                        }
                                        ('step 2');
                                        player.markSkill('exanjianmark');
                                        if (player.storage.exanjianmark >= 5 && player.storage.exanjianmark < 10) {
                                            game.broadcastAll(player.setIdentity('zhu', true));
                                            game.broadcastAll(player.identityShown);
                                            const identity = 'zhu';
                                            player.identity = identity;
                                            player.setIdentity('忠', true);
                                            ui.update();
                                            player.update();
                                        }
                                    },
                                    popup: false,
                                },
                                count2: {
                                    trigger: {
                                        global: 'dieBefore',
                                    },
                                    filter(event, player) {
                                        return event.player.identity == 'fan' && player.storage.exanjianmark >= 10;
                                    },
                                    silent: true,
                                    content() {
                                        let bool;
                                        if (player == game.me) {
                                            bool = true;
                                        }
                                        game.over(bool);
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                        },
                        exmark: {},
                        exzhonghuia: {
                            audio: 'ext:EX神将/audio:2',
                            content() { },
                        },
                        exzhonghuib: {
                            audio: 'ext:EX神将/audio:2',
                            content() { },
                        },
                        exzhonghuic: {
                            audio: 'ext:EX神将/audio:2',
                            content() { },
                        },
                        exmarkmark: {},
                        expojun: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                source: 'damageBegin2',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha'; //QQQ
                            },
                            forced: true,
                            logTarget: 'player',
                            content() {
                                'step 0';
                                let num = trigger.player.hp;
                                const num1 = num - 1;
                                trigger.num += num1;
                                ('step 1');
                                game.broadcastAll(function (player) {
                                    const img = document.createElement('div');
                                    img.setBackgroundImage('extension/EX神将/image/exyjxs.jpg');
                                    img.style.width = '100%';
                                    img.style.height = '100%';
                                    img.style.backgroundSize = 'cover';
                                    player.node.avatar.appendChild(img);
                                    ui.refresh(img);
                                    img.style.transform = '';
                                }, player);
                            },
                        },
                        expojuna: {
                            shaRelated: true,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && player.isPhaseUsing() && event.target.hp > 0 && event.target.countCards('he') > 0;
                            },
                            audio: 'ext:EX神将/audio:2',
                            content() {
                                'step 0';
                                const num1 = trigger.target.countCards('he');
                                player.choosePlayerCard(trigger.target, 'he', num1, get.prompt('expojuna', trigger.target));
                                ('step 1');
                                if (result.bool && result.links.length) {
                                    if (trigger.target.storage.xinpojun2) {
                                        trigger.target.storage.xinpojun2 = trigger.target.storage.xinpojun2.concat(result.links);
                                    } else {
                                        trigger.target.storage.xinpojun2 = result.links.slice(0);
                                    }
                                    game.addVideo('storage', trigger.target, ['xinpojun2', get.cardsInfo(trigger.target.storage.xinpojun2), 'cards']);
                                    trigger.target.addSkill('xinpojun2');
                                    trigger.target.lose(result.links, ui.special, 'toStorage');
                                }
                            },
                            group: ['expojun', 'expojuna_count1', 'expojuna_count2'],
                            ai: {
                                unequip: true,
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if (get.attitude(player, arg.target) > 0 || !player.isPhaseUsing()) {
                                        return false;
                                    }
                                    if (tag == 'directHit_ai') {
                                        return arg.target.hp >= Math.max(1, arg.target.countCards('h') - 1);
                                    }
                                    if (arg && arg.name == 'sha' && arg.target.getEquip(2)) {
                                        return true;
                                    }
                                    return false;
                                },
                            },
                            subSkill: {
                                count1: {
                                    trigger: {
                                        global: 'gameStart',
                                    },
                                    silent: true,
                                    content() {
                                        game.broadcastAll(function (player) {
                                            const img = document.createElement('div');
                                            img.setBackgroundImage('extension/EX神将/image/exzcxs.jpg');
                                            img.style.width = '100%';
                                            img.style.height = '100%';
                                            img.style.backgroundSize = 'cover';
                                            player.node.avatar.appendChild(img);
                                            ui.refresh(img);
                                            img.style.transform = '';
                                        }, player);
                                    },
                                    forced: true,
                                    popup: false,
                                },
                                count2: {
                                    trigger: {
                                        player: 'damageAfter',
                                    },
                                    silent: true,
                                    content() {
                                        game.broadcastAll(function (player) {
                                            const img = document.createElement('div');
                                            img.setBackgroundImage('extension/EX神将/image/exzcxs.jpg');
                                            img.style.width = '100%';
                                            img.style.height = '100%';
                                            img.style.backgroundSize = 'cover';
                                            player.node.avatar.appendChild(img);
                                            ui.refresh(img);
                                            img.style.transform = '';
                                        }, player);
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                        },
                        exqixinga: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                const hs = player.getCards('h');
                                if (!hs.length) {
                                    return false;
                                }
                                for (let i = 0; i < hs.length; i++) {
                                    const mod2 = game.checkMod(hs[i], player, 'unchanged', 'cardEnabled2', player);
                                    if (mod2 === false) {
                                        return false;
                                    }
                                }
                                return true;
                            },
                            chooseButton: {
                                dialog(player) {
                                    let list = [];
                                    for (let i = 0; i < lib.inpile.length; i++) {
                                        if (get.type(lib.inpile[i]) == 'trick') {
                                            list.push(['锦囊', '', lib.inpile[i]]);
                                        }
                                    }
                                    return ui.create.dialog(get.translation('qice'), [list, 'vcard']);
                                },
                                filter(button, player) {
                                    return lib.filter.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                },
                                check(button) {
                                    const player = _status.event.player;
                                    let recover = 0,
                                        lose = 1,
                                        players = game.filterPlayer();
                                    for (let i = 0; i < players.length; i++) {
                                        if (players[i].hp == 1 && get.damageEffect(players[i], player, player) > 0 && !players[i].hasSha()) {
                                            return button.link[2] == 'juedou' ? 2 : -1;
                                        }
                                        if (!players[i].isOut()) {
                                            if (players[i].hp < players[i].maxHp) {
                                                if (get.attitude(player, players[i]) > 0) {
                                                    if (players[i].hp < 2) {
                                                        lose--;
                                                        recover += 0.5;
                                                    }
                                                    lose--;
                                                    recover++;
                                                } else if (get.attitude(player, players[i]) < 0) {
                                                    if (players[i].hp < 2) {
                                                        lose++;
                                                        recover -= 0.5;
                                                    }
                                                    lose++;
                                                    recover--;
                                                }
                                            } else {
                                                if (get.attitude(player, players[i]) > 0) {
                                                    lose--;
                                                } else if (get.attitude(player, players[i]) < 0) {
                                                    lose++;
                                                }
                                            }
                                        }
                                    }
                                    if (lose > recover && lose > 0) {
                                        return button.link[2] == 'nanman' ? 1 : -1;
                                    }
                                    if (lose < recover && recover > 0) {
                                        return button.link[2] == 'taoyuan' ? 1 : -1;
                                    }
                                    return button.link[2] == 'wuzhong' ? 1 : -1;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard: true,
                                        selectCard: 0,
                                        position: 'h',
                                        audio: 2,
                                        popname: true,
                                        viewAs: { name: links[0][2] },
                                    };
                                },
                                prompt(links, player) {
                                    return '将全部手牌当作' + get.translation(links[0][2]) + '使用';
                                },
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player) {
                                        let num = 0;
                                        const cards = player.getCards('h');
                                        if (cards.length >= 3 && player.hp >= 3) {
                                            return 0;
                                        }
                                        for (let i = 0; i < cards.length; i++) {
                                            num += Math.max(0, get.value(cards[i], player, 'raw'));
                                        }
                                        num /= cards.length;
                                        num *= Math.min(cards.length, player.hp);
                                        return 12 - num;
                                    },
                                },
                                threaten: 1.6,
                            },
                        },
                        exqixing: {
                            audio: 'ext:EX神将/audio:2',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.addTempSkill('exqixinga');
                                ('step 1');
                                setTimeout(function () {
                                    player.$fullscreenpop('大限已至', 'fire');
                                    player.addTempSkill('exfengyin2');
                                    player.removeSkill('exqixinga');
                                    player.addSkill('exnitianerwei');
                                }, 10000);
                            },
                        },
                        exfengyin2: {
                            mod: {
                                cardEnabled(card, player) {
                                    if (player.hp >= 0) {
                                        return false;
                                    }
                                },
                                cardUsable(card, player) {
                                    if (player.hp >= 0) {
                                        return false;
                                    }
                                },
                                cardRespondable(card, player) {
                                    if (player.hp >= 0) {
                                        return false;
                                    }
                                },
                            },
                        },
                        exqixingaa: {
                            audio: 'ext:EX神将/audio:1',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            popup: false,
                            silent: true,
                            content() {
                                player.addSkill('exqixing');
                            },
                            group: ['exqixingaa_count1'],
                            subSkill: {
                                count1: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    silent: true,
                                    content() {
                                        player.removeSkill('exqixing');
                                        player.removeSkill('exnitianerwei');
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                        },
                        exnitianerwei: {
                            audio: 'ext:EX神将/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '若你执意逆天而为,你失去一点体力上限后可继续使用手中的牌.',
                            content() {
                                'step 0';
                                player.removeSkill('exfengyin2');
                                ('step 1');
                                player.loseMaxHp(1);
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                },
                                result: {
                                    player(player) {
                                        if (player.countCards('h') <= player.hp - 1) {
                                            return -1;
                                        }
                                        if (player.hp < 3) {
                                            return -1;
                                        }
                                        return 1;
                                    },
                                },
                            },
                        },
                        exzhaoxiangbuqiang: {
                            audio: 'ext:EX神将/audio:4',
                            trigger: {
                                player: 'dying',
                            },
                            content() {
                                'step 0';
                                let list = [];
                                if (player.hasSkill('zxlongdan')) {
                                    list.push('zxlongdan');
                                }
                                if (player.hasSkill('zxfengpo')) {
                                    list.push('zxfengpo');
                                }
                                if (player.hasSkill('zxyajiao')) {
                                    list.push('zxyajiao');
                                }
                                if (player.hasSkill('zxjuejing')) {
                                    list.push('zxjuejing');
                                }
                                if (player.hasSkill('mashu')) {
                                    list.push('mashu');
                                }
                                if (player.hasSkill('zxlongdan')) {
                                    if (player.hasSkill('zxfengpo')) {
                                        if (player.hasSkill('zxyajiao')) {
                                            if (player.hasSkill('mashu')) {
                                                if (player.hasSkill('mashu')) {
                                                    player.draw(1);
                                                }
                                            }
                                        }
                                    }
                                }
                                if (list.length) {
                                    player.chooseControl(list).set('prompt', '选择移除一项技能');
                                }
                                ('step 1');
                                player.removeSkill(result.control);
                                player.popup(result.control);
                                game.log(player, '移除技能', '【' + get.translation(result.control) + '】');
                                ('step 2');
                                player.recover(1);
                                player.loseMaxHp(1);
                            },
                            ai: {
                                threaten: 1.4,
                            },
                        },
                    },
                    translate: {
                        EX吕布: 'EX吕布',
                        EX董卓: 'EX董卓',
                        EX左慈: 'EX左慈',
                        EX刘协: 'EX刘协',
                        EX颜良: 'EX颜良',
                        EX文丑: 'EX文丑',
                        EX邢道荣: 'EX邢道荣',
                        EX周瑜: 'EX周瑜',
                        EX孙策: 'EX孙策',
                        EX孙权: 'EX孙权',
                        EX大乔: 'EX大乔',
                        EX小乔: 'EX小乔',
                        EX周泰: 'EX周泰',
                        EX张昭: 'EX张昭',
                        EX诸葛恪: 'EX诸葛恪',
                        EX吴国太: 'EX吴国太',
                        EX典韦: 'EX典韦',
                        EX曹丕: 'EX曹丕',
                        EX蔡文姬: 'EX蔡文姬',
                        EX曹操: 'EX曹操',
                        EX张辽: 'EX张辽',
                        EX郭嘉: 'EX郭嘉',
                        EX曹植: 'EX曹植',
                        EX文鸳: 'EX文鸳',
                        EX司马懿: 'EX司马懿',
                        EX庞统: 'EX庞统',
                        EX诸葛亮: 'EX诸葛亮',
                        EX赵襄: 'EX赵襄',
                        EX孙尚香: 'EX孙尚香',
                        EX姜维: 'EX姜维',
                        EX刘备: 'EX刘备',
                        EX张飞: 'EX张飞',
                        EX关羽: 'EX关羽',
                        EX黄忠: 'EX黄忠',
                        EX马超: 'EX马超',
                        EX赵云: 'EX赵云',
                        EX五虎上将: 'EX五虎上将',
                        EX孔融: 'EX孔融',
                        EX刘表: 'EX刘表',
                        EX司马昭: 'EX司马昭',
                        EX王朗: 'EX王朗',
                        EX祢衡: 'EX祢衡',
                        EX王璨: 'EX王璨',
                        EX马岱: 'EX马岱',
                        EX步练师: 'EX步练师',
                        EX张角: 'EX张角',
                        EX雷张角: 'EX雷张角',
                        EX风张角: 'EX风张角',
                        EX刘封: 'EX刘封',
                        EX戏志才: 'EX戏志才',
                        EX葛玄: 'EX葛玄',
                        EX镜左慈: 'EX镜左慈',
                        EX何进: 'EX何进',
                        'EX☆曹操': 'EX☆曹操',
                        'EX☆曹丕': 'EX☆曹丕',
                        EX吕蒙: 'EX吕蒙',
                        EX高顺: 'EX高顺',
                        EX孙亮: 'EX孙亮',
                        EX邓艾: 'EX邓艾',
                        EX王基: 'EX王基',
                        EX华佗: 'EX华佗',
                        EX曹纯: 'EX曹纯',
                        EX八废: 'EX八废',
                        EX究极孙笨: 'EX究极孙笨',
                        EX贾逵: 'EX贾逵',
                        EX卑弥呼: 'EX卑弥呼',
                        EX孙鲁育: 'EX孙鲁育',
                        EX岑昏: 'EX岑昏',
                        EX张济: 'EX张济',
                        EX许褚: 'EX许褚',
                        EX马忠: 'EX马忠',
                        EX华雄: 'EX华雄',
                        EX宇宙兄弟: 'EX宇宙兄弟',
                        EX鲁肃: 'EX鲁肃',
                        'EX☆左慈': 'EX☆左慈',
                        'EX☆周泰': 'EX☆周泰',
                        EX钟会: 'EX钟会',
                        EX徐盛: 'EX徐盛',
                        'EX☆诸葛': 'EX☆诸葛',
                        exwumou: '无谋',
                        exwumou_info: '锁定技,若你回合内使用了锦囊牌,则本回合失去因【神威】获得的技能.',
                        exshenji: '无我',
                        exshenji_info: '你的【杀】可以指定至多三名角色.',
                        exshennu: '神怒',
                        exshennu_info: '受到伤害后,可令全场有装备的角色弃置所有装备牌,无装备的角色失去一点体力,之后这些角色摸一张牌.',
                        exshenwei: '神威',
                        exshenwei_info: '锁定技.准备阶段,你令所有其他角色的非锁定技失效,自己获得技能【无前】、【无双】、【无我】和【无谋】,直到回合结束.',
                        exxuandao: '玄道',
                        exxuandao_info: '锁定技.摸牌阶段开始前,你掷一次骰子,你的摸牌数为骰子的点数.',
                        exhuanhua: '幻化',
                        exhuanhua_info: '每当自己受到伤害后,随机获得三个武将技能其中之一.',
                        exlongmai: '龙脉',
                        exlongmai_info: '锁定技.无法受到伤害,无法造成伤害,无法失去体力.手牌上限数增加至当前场上存活的<群>势力数.',
                        exzuoshuai: '祚衰',
                        exzuoshuai_info: '锁定技.游戏每隔五轮,自己回合开始前获得一张【闪电】.当游戏进行10轮后,自己永久获得技能【密诏】.游戏进行31轮后,自己立即死亡.',
                        exanzhao: '暗诏',
                        exanzhao_info: '一回合一次.可以将一张手牌交给一名角色,自己选择一项效果发动:1、该角色摸Y张牌,获得【谋溃】直至其回合结束.2、该角色弃X张牌,获得【崩坏】直至其回合结束.(X为目标体力值,Y为目标已损失体力值)',
                        exhuoyi: '祸疫',
                        exhuoyi_info: '锁定技.游戏开始后,令全场角色获得锁定技【崩坏】.',
                        extianfa: '天罚',
                        extianfa_info: '锁定技.每回合结束后进行一次判定,判定结果为♥️️️、♦️️️、♣️️️、♠️️️,玩家受到-1、0、1、2点雷电伤害.',
                        exhuanbeng: '幻崩',
                        exhuanbeng_info: '锁定技.每当造成或受到伤害后,自己失去所有牌,之后摸两张牌.',
                        exbaolian: '暴敛',
                        exbaolian_info: '锁定技.摸牌阶段视为【获得场上每一名角色一张牌】.',
                        exduyong: '独勇',
                        exduyong_info: '每次自己的出牌阶段开始时,你可以选择一名角色,视为对其使用一张【决斗】.',
                        exxieyongyanliang: '协勇(召唤颜良)',
                        exxieyongyanliang_info: '限定技.当体力值小于等于2时,你获得一个武将(EX颜良或EX文丑),并失去技能【独勇】.',
                        exxieyongwenchou: '协勇(召唤文丑)',
                        exxieyongwenchou_info: '限定技.当体力值小于等于2时,你获得一个武将(EX颜良或EX文丑),并失去技能【独勇】.',
                        exhanmang: '悍莽',
                        exhanmang_info: '一回合一次,可以令自己失去一点体力,获得一张【决斗】和【杀】.',
                        excuxia: '促狭',
                        excuxia_info: '一回合一次,可以弃置自己两张手牌(不足则全弃),获得一张【决斗】和【杀】.',
                        exkuibai: '溃败',
                        exkuibai_info: '每轮限一次.当你受到伤害前,你可以弃置所有的牌,取消该伤害.',
                        exkuakou: '夸口',
                        exkuakou_info: '每回合限一次.你弃置X张牌,选择一名目标也弃置X张牌.',
                        exex: '???',
                        exex_info: '???',
                        exxiongju: '雄踞',
                        exxiongju_info: '锁定技.当自己失去装备后发动,【吴】势力角色依次摸一张牌.这些角色因此效果每摸一张牌,自己跟着摸一张牌.',
                        exshehu: '射虎',
                        exshehu_info: '回合开始前,你选择一名角色,令其弃置一张装备牌.',
                        exzhiheng: '制衡',
                        exzhiheng_info: '每回合限两次.弃置任意两张牌,指定一名角色弃置其一张手牌,之后自己摸两张牌.',
                        exzhiba: '制霸',
                        exzhiba_info: '每个角色摸牌阶段开始前,你可失去一点体力,令其弃置两张牌.',
                        exxionghun: '魂姿',
                        exxionghun_info: '每次自己回合开始时,若X小于Y,自己回复一点体力并摸Z张牌.(X为体力值,Y为已损失体力值,Z为Y减去X的值)',
                        exjiang: '激昂',
                        exjiang_info: '锁定技.每当你使用(指定目标)或被使用(成为目标)一张红色基本牌或锦囊牌时,你可以摸一张牌.',
                        exjiandi: '间敌',
                        exjiandi_info: '出牌阶段,你令一名角色选择随机获得你的一张手牌牌,该角色选择弃置三张牌.',
                        exxiongzi: '雄姿',
                        exxiongzi_info: '摸牌阶段,你的摸牌数等于场上的人数.',
                        exfengshi: '焚世',
                        exfengshi_info: '出牌阶段限一次,你可弃置任意数量的手牌,令等量的角色受到一点火焰伤害.(该伤害有十分之一的概率暴击,暴击后伤害为3)',
                        exguosed: '国色',
                        exguosed_info: '',
                        exguosec: '国色',
                        exguosec_info: '',
                        exguoseb: '国色',
                        exguoseb_info: '',
                        exguosea: '国色',
                        exguosea_info: '',
                        exguose: '国色',
                        exguose_info: '出牌阶段限一次.弃置一张花色为♦️️️的牌,指定一名角色,选择下面的一项效果对目标发动:1、该轮目标跳过判定阶段.2、该轮目标跳过摸牌阶段.3、该轮目标跳过出牌阶段.4、该轮目标跳过弃牌阶段.',
                        exguosee: '国色',
                        exguosee_info: '',
                        exbanjun: '天香',
                        exbanjun_info: '出牌阶段限一次.弃置一张花色为♥️️️的牌,指定一名角色,选择以下一项效果对该角色发动:1、该角色直至回合开始不会受到任何伤害.2、该角色直至回合结束无法回复体力.',
                        exbanjuna: '天香',
                        exbanjuna_info: '',
                        exbanjunb: '天香',
                        exbanjunb_info: '',
                        exbanjunc: '天香',
                        exbanjunc_info: '',
                        exbanjund: '天香',
                        exbanjund_info: '',
                        exjiarendaqiao: '佳人',
                        exjiarendaqiao_info: '锁定技.当场上有人失去装备牌后,自己摸一张♦️️️牌.',
                        exjiarenxiaoqiao: '佳人',
                        exjiarenxiaoqiao_info: '锁定技.当场上有人使用装备牌后,自己摸一张♥️️️牌.',
                        exbuqu: '不屈',
                        exbuqu_info: '每个角色的回合限一次.当你进入濒死状态后,立即回复一点体力并摸两张牌.',
                        exsizhan: '死战',
                        exsizhan_info: '你的摸牌数为Y,手牌上限为Y.(Y为你已损失的体力值)',
                        exhuzhu: '援护',
                        exhuzhu_info: '每个角色的回合限一次.当场上有人使用【杀】指定目标后,你可以失去一点体力,令此【杀】失效.',
                        exzhongwang: '重望',
                        exzhongwang_info: '当你受到伤害后,你可令伤害来源弃置X张牌.(X为伤害来源装备区牌数的2倍)',
                        exaowu: '傲物',
                        exaowu_info: '锁定技.回合结束后,若自己在这个回合未造成过伤害,自己失去一点体力并获摸X张牌(X为已损失体力值).',
                        exshicai: '恃才',
                        exshicai_info: '锁定技.回合开始前随机获得三个主动技能直至回合结束.',
                        exyanjia: '偃甲',
                        exyanjia_info: '可以将两张装备合成一件装备(保留原来两张装备的效果).',
                        exxibing: '息兵',
                        exxibing_info: '回合开始前,获得一名角色的所有装备牌.',
                        exzhijian: '直谏',
                        exzhijian_info: '出牌阶段限一次.选择场上一名角色,随机使用装备填满其装备栏.',
                        exzexu: '择婿',
                        exzexu_info: '出牌阶段,你可将一张装备牌 给任意一名角色装备.在你和选择的角色中,【残血】状态的角色回复一点体力,非【残血】的角色摸一张牌.',
                        exjixie: '击懈',
                        exjixie_info: '出牌阶段限一次,你交给一名角色一张牌,选择废除目标的一个装备栏或者失去一点体力.',
                        excuorui: '挫锐',
                        excuorui_info: '摸牌阶段,你可以改为获得一名角色三张手牌.',
                        exweiwu: '魏武',
                        exweiwu_info: '锁定技.自己受到伤害前,【魏】势力角色依次摸一张牌.这些角色因此效果每摸一张牌,自己跟着摸一张牌.',
                        exhuibian: '挥鞭',
                        exhuibian_info: '出牌阶段限一次,弃置两张手牌,选择最多三名角色(不为自己)并选择以下效果其中之一发动:1、令目标受到一点伤害后摸一张牌.2、令目标失去一点体力后弃置一张牌.',
                        exjianxiong: '奸雄',
                        exjianxiong_info: '受到伤害后,自己选择一项效果发动.1、获得这张牌.2、自己摸两张牌.3、伤害来源弃置两张牌.',
                        exlanxin: '慧心',
                        exlanxin_info: '一回合一次,自己使用在回合内使用的牌丢入弃牌堆后,可以获得之.',
                        exzhaohun: '招魂',
                        exzhaohun_info: '当场上有人受到伤害后,你可以弃一张牌,并令其进行一次判定,红色该角摸两张牌,黑色伤害来源弃两张牌.那之后,自己摸一张牌',
                        exlishang: '离殇',
                        exlishang_info: '限定技.当有人处于濒死状态时发动,你和该濒死角色各摸三张牌,之后伤害来源清空其所有技能.',
                        exliufang: '流放',
                        exliufang_info: '当你受伤或造成伤害后,选择一名角色翻面.',
                        exshangxing: '殇行',
                        exshangxing_info: '当有角色死亡后,你可以获得该角色的所有牌.',
                        exweiwei: '魏威',
                        exweiwei_info: '当一名角色翻至正面后,那名角色和自己各摸一张牌.若翻面的角色是自己,则额外摸一张牌.',
                        exjinnang: '遗策',
                        exjinnang_info: '弃牌阶段后获得X张牌,并可以交给相应的角色.(X为该阶段弃牌数)',
                        exyice: '遗策',
                        exyice_info: '受到伤害后有50%概率回复一点体力.',
                        exsuji: '速击',
                        exsuji_info: '锁定技.摸牌阶段多摸一张牌,体力值减一,体力上限加一.',
                        exfenming: '奋命',
                        exfenming_info: '当你使用杀前,可以选择减少一点体力上限,使该目标受到1点伤害.(有十分之一的概率暴击,暴击后为3点伤害)',
                        exzhiji: '掷戟',
                        exzhiji_info: '限定技.弃置所有牌,清空所有技能发动:选择一名角色令其失去全部体力,那之后自己也扣除等量的体力值.',
                        exqibu: '七步',
                        exqibu_info: '',
                        exqibuc: '七步',
                        exqibuc_info: '',
                        exqibuall: '七步',
                        exqibuall_info: '锁定技.①每次你的回合开始时【七步】标记＋1,每次受伤或翻面时【七步】标记-1.②每次【七步】标记数变化时,自己摸一张牌.③回合结束后,若【七步】标记的绝对值大于7时,自己立即死亡.',
                        exqibub: '七步',
                        exqibub_info: '',
                        exqiai: '七哀',
                        exqiai_info: '当你对目标造成伤害后,你可以令目标获得一枚【七哀】标记.之后,有【七哀】标记的角色每次回合开始增加一枚标记,目标回合内可以选择弃置一枚【七哀】标记并翻面.当目标回合结束后【七哀】标记大于等于7时立即死亡.',
                        exqiai2: '七哀',
                        exqiai2_info: '',
                        exqiai3: '七哀',
                        exqiai3_info: '',
                        exqiai33: '七哀',
                        exqiai33_info: '选择弃置一枚【七哀】标记,翻面.',
                        extuilang: '推浪',
                        extuilang_info: '',
                        ex222: '推浪',
                        ex222_info: '',
                        ex111: '推浪',
                        ex111_info: '',
                        extuilangall: '推浪',
                        extuilangall_info: '自己每开始一个回合,你摸牌阶段的摸牌数加一张,体力上限增加一点.(你的初始手牌数为0)',
                        exfanshi2: '自己',
                        exfanshi2_info: '当有人处于濒死状态时,自己摸三张牌,清空伤害来源技能.',
                        extunshimark: '吞噬',
                        extunshimark_info: '',
                        buyongqipai: '七哀',
                        buyongqipai_info: '',
                        exxinqiai: '七哀',
                        exxinqiai_info: '每一轮限一次.选择一项效果发动:1、失去一点体力,令自己回合结束后开始一个新回合.2、回复一点体力,令自己翻面,若翻面期间受伤,则回复原状.',
                        exqibup: '七步',
                        exqibup_info: '',
                        extunshidie: '吞噬',
                        extunshidie_info: '',
                        extunshi: '吞噬',
                        extunshi_info: '',
                        extunshiaaa: '吞噬',
                        extunshiaaa_info: '每次自己受到伤害,获得一枚【敛芒】标记.回合开始阶段,自己的标记数大于3时,移除三枚标记,回复一点血量,摸三张牌.',
                        extunshibbb: '吞噬',
                        extunshibbb_info: '',
                        extunshixxx: '吞噬',
                        extunshixxx_info: '每次自己受伤,伤害来源弃置X张牌,自己获得一枚【吞】标记.自己回合开始前可移除3枚【吞】标记,令自己回复一点体力摸X张牌,并选择一名角色获得45枚【噬】标记(拥有【噬】标记的角色每获得和使用一张牌,【噬】标记就减一,减至0时立即死亡).注:X为玩家已损失体力值.',
                        a: 'a',
                        a_info: '',
                        b: 'b',
                        b_info: '',
                        c: 'c',
                        c_info: '',
                        d: 'd',
                        d_info: '',
                        e: '武圣',
                        e_info: '',
                        i: 'i',
                        i_info: '',
                        exwuhu: '五虎',
                        exwuhu_info: '锁定技.回合开始前声明一个武将,获得其相应的技能、相应的装备和一张【杀】.',
                        exleiting: '雷霆',
                        exleiting_info: '出牌阶段限一次.选择一名角色拼点,若你赢获得【龙胆】【冲阵】直至自己下个回合开始阶段,若你没赢你获得【龙胆】直至自己下个回合开始阶段.(五虎上将拼点时点数＋X,X为手中持有杀的数量)',
                        exyinqiang: '银枪',
                        exyinqiang_info: '回合开始前选择发动.发动后清空所有手牌,视为装备一张【银月枪】,之后自己获得两张基本牌.',
                        exchangsheng: '常胜',
                        exchangsheng_info: '可以将任意基本牌当做【桃】或【酒】使用.',
                        exzhuixiong: '追凶',
                        exzhuixiong_info: '回合开始前选择发动.发动后让自己处于横置状态,视为装备一张【-1马】,之后自己获得一张【杀】.',
                        exzhenqiang: '镇羌',
                        exzhenqiang_info: '出牌阶段限一次.选择一名角色拼点,若你赢并封印该角色所有技能直至自己下个回合开始,若你没赢你失去技能直至自己回合结束.(五虎上将拼点时点数＋X,X为手中持有杀的数量)',
                        extieji: '铁骑',
                        extieji_info: '①你的【杀】无法被抵消.②你使用杀后摸一张牌.',
                        exliegong: '烈弓',
                        exliegong_info: '1、你的【杀】无视距离且必中.2、你的【杀】造成伤害前,目标随机丢弃一张装备牌.',
                        exsheying: '射缨',
                        exsheying_info: '出牌阶段限一次.选择一名角色拼点,若你赢你回复一点体力,若你没赢你的攻击距离无法触及该目标.(五虎上将拼点时点数＋X,X为手中持有杀的数量)',
                        exzhuangmu: '壮暮',
                        exzhuangmu_info: '回合开始前选择发动.发动后失去一点体力牌,视为装备一张【麒麟弓】,之后获得一张【杀】.',
                        exwusheng: '武圣',
                        exwusheng_info: '①你的红色牌均可以当作【杀】使用.②每当你的红色牌指定目标后,该目标随机弃置一张手牌.',
                        extuodao: '拖刀',
                        extuodao_info: '出牌阶段限一次.选择一名角色拼点,若你赢你的【红杀】的伤害＋1,若你输你所有手牌视为♠️️️.(五虎上将拼点时点数＋X,X为手中持有杀的数量)',
                        exnumu: '怒目',
                        exnumu_info: '出牌阶段限一次.选择一名角色拼点,若你赢你的【杀】使用次数＋1且可额外指定一个目标,若你输你的【杀】使用次数－1.(五虎上将拼点时点数＋X,X为手中持有杀的数量)',
                        exzhongyi: '忠义',
                        exzhongyi_info: '回合开始前选择发动.发动后清空判定区的延时锦囊牌,视为装备一张【青龙偃月刀】,之后自己摸一张牌.',
                        exshijiu: '嗜酒',
                        exshijiu_info: '回合开始前选择发动.发动后清空装备区的装备牌,视为装备一张【丈八蛇矛】,之后自己获得一张【酒】.',
                        expaoxiao: '咆哮',
                        expaoxiao_info: '你每回合可以使用至多三张【杀】,当使用大于三张【杀】时,摸一张牌.',
                        exzhaolie: '昭烈',
                        exzhaolie_info: '锁定技.自己摸牌阶段开始前发动,【蜀】势力角色依次摸一张牌.这些角色因此效果每摸一张牌,自己跟着摸一张牌.',
                        exqiuxian: '求贤',
                        exqiuxian_info: '一回合一次.当自己回血后,选择场上一名角色摸两张牌.(有十分之一的概率暴击,暴击后摸九张牌)',
                        exrende: '仁德',
                        exrende_info: '每回合限一次.将自己一张或以上的手牌给场上一名角色,从牌堆里选择获得【杀】【闪】【桃】【酒】其中一张.',
                        exbeishui: '背水',
                        exbeishui_info: '弃牌阶段结束后,你弃置任意一张牌,从三个效果中选择一个发动:1、获得技能【八卦】,直至自己下个回合开始.2、获得技能【空城】,直至自己下个回合开始.3、获得技能【看破】,直至自己下个回合开始.',
                        exfuqing: '扶倾',
                        exfuqing_info: '锁定技.自己回合开始前,根据自己的状态获得以下效果(可叠加发动):1、当自己没有手牌时,摸一张牌.2、当自己体力值为1时,摸一张牌.3、当装备区没有装备时,摸一张牌.4、当自己的手牌数小于体力值时,摸一张牌.',
                        exqilin: '麒麟',
                        exqilin_info: '回合开始前你可以弃置一张牌,从四个效果中选择一项发动;1、自己随机获得一张基本牌,并获得技能【仁德】直至回合结束.2、随机获得一张锦囊牌,并获得技能【舍宴】直至回合结束.3、随机获得一张防具牌,并获得技能【挑衅】直至回合结束.4、随机获得一张延时锦囊牌,并获得技能【观星】直至自己下个回合开始阶段.',
                        exzhujun: '助君',
                        exzhujun_info: '当场上有人回血时,可以指定一名角色摸一张牌.该效果有十分之一的概率暴击(暴击后摸3张牌)',
                        exsashuang: '飒爽',
                        exsashuang_info: '当你失去装备牌后,可以选一项效果发动:●令自己摸两张牌.●令自己回复一点体力.',
                        exjianxin: '剑心',
                        exjianxin_info: '锁定技.摸牌阶段,你视为获得一张武器牌.',
                        exmeiluo: '梅落',
                        exmeiluo_info: '①当你造成伤害后,选择以下一项技能获得之:【龙胆】、【风魄】、【涯角】、【绝境】、【马术】.若已拥有以上全部技能,则摸一张牌.②当你进入濒死状态时,可选择移除已获得的技能,减少一点体力上限并回复一点体力.',
                        exyuhuo: '驭火',
                        exyuhuo_info: '当失去最后一张牌时,可以选择一名角色,对其造成一点火焰伤害.',
                        exzhanxing: '占星',
                        exzhanxing_info: '判定开始阶段,观看牌堆顶的7张牌,将其中的3张牌置于牌堆顶,其余置于牌堆底.',
                        exjingcui: '尽瘁',
                        exjingcui_info: '一回合一次,当对其它角色使用牌时,你可以弃置一张牌,令其无法响应.',
                        exzhijue: '智绝',
                        exzhijue_info: '一回合一次,当自己没有手牌时,你可以选择一名角色对其造成一点火属性伤害.并且在无手牌状态期间不会被杀和锦囊牌的效果影响',
                        exyuhuopt: '凤火',
                        exyuhuopt_info: '一回合一次,你可以选择一名角色拼点,若你赢你对其造成一点火焰伤害,若你没赢你增加一点体力上限.',
                        exchongsheng: '重生',
                        exchongsheng_info: '限定技.濒死后你可以满体力复活,并将手牌补充至体力上限的数值.',
                        extiesuo: '铁索',
                        extiesuo_info: '一回合一次,出牌阶段,你可以弃置一张牌,令一名角色进入连环状态,并获得【弱火】标记.',
                        exmingshi: '名士',
                        exmingshi_info: '每次自己受伤,你可选择弃一张牌或者摸一张牌.那之后,在伤害来源回合结束后自己开始一个新的回合.',
                        exqianrang: '谦让',
                        exqianrang_info: '回合开始前选择一名角色发动,手牌少的一方将手牌补充到另一方等量的牌数.之后跳过自己的回合.',
                        exshoucheng: '避守',
                        exshoucheng_info: '',
                        exshouchengb: '避守',
                        exshouchengb_info: '锁定技.回合开始前弃置Y张牌,回合结束后摸X张牌.(X为你的体力值,Y为你已损失体力值)',
                        exgubu: '固步',
                        exgubu_info: '锁定技.回合开始前,若Y大于或等于X,自己减少一点体力上限,之后回复满体力.(X为你的体力值,Y为你已损失体力值)',
                        exsu: '肃',
                        exsu_info: '♥️️️已获得【肃】',
                        exqing: '清',
                        exqing_info: '♦️️️已获得【清】',
                        exba: '八',
                        exba_info: '♣️️️已获得【八】',
                        exhuang: '荒',
                        exhuang_info: '♠️️️已获得【荒】',
                        exguimingb: '归命',
                        exguimingb_info: '',
                        exguiming: '肃清',
                        exguiming_info: '自己体力流失后进行一次判定.判定为♥️️️获得【肃】标记,判定为♦️️️获得【清】标记,判定为♣️️️获得【八】标记,判定为♠️️️获得【荒】标记,回合开始前若已集齐四个标记,则获得游戏胜利.',
                        exzhaoxin: '昭心',
                        exzhaoxin_info: '锁定技.你受到的伤害均为体力流失,之后自己摸X张牌.(X为已损失体力值)',
                        exraoshe: '饶舌',
                        exraoshe_info: '回合开始前指定一名角色,自己回合内每使用一张牌,该角色就弃置一张牌.',
                        exraosheb: '饶舌',
                        exraosheb_info: '',
                        exyongwei: '拥魏',
                        exyongwei_info: '全图技、锁定技.场上有人受到伤害后,其摸一张牌.',
                        exkuangcaia: '狂才',
                        exkuangcaia_info: '',
                        exkuangcaib: '狂才',
                        exkuangcaib_info: '',
                        exkuangcaic: '狂才',
                        exkuangcaic_info: '',
                        exkuangcaid: '狂才',
                        exkuangcaid_info: '',
                        exkuangcaiall: '狂才',
                        exkuangcaiall_info: '锁定技.自己回合内每使用一张手牌,立即再摸一张.回合外每失去一张手牌时,自己失去一点体力.',
                        exjigu: '击鼓',
                        exjigu_info: '在自己的回合外,场上有人受到伤害前,你可以弃置一张牌,令此伤害变成体力流失并且数值＋1.',
                        exkuangcaix: '狂才',
                        exkuangcaix_info: '',
                        exzhoushi: '文思',
                        exzhoushi_info: '出牌阶段,你可以弃置手牌所有基本牌,摸弃牌数两倍的牌.',
                        exzhoushitrue: '远游',
                        exzhoushitrue_info: '受到伤害后,你可以摸三张牌,再弃置三张牌.',
                        exjianfu: '间伏',
                        exjianfu_info: '限定技.当场上有人体力流失或回血,你可以取消之,弃置其所有手牌,并将其改为失去体力上限.之后自己获得【马术】.',
                        expingbei: '潜袭',
                        expingbei_info: '你的杀指定目标后,可令目标失去一点体力上限.',
                        exshu: '淑',
                        exshu_info: '限定技.你选择一名角色,令其回复满血量.',
                        exhui: '惠',
                        exhui_info: '限定技.你选择一名角色,令其摸Y张牌(Y为该角色体力上限).',
                        exxian: '娴',
                        exxian_info: '限定技.你选择一名角色,令其增加2点体力上限.',
                        exwan: '婉',
                        exwan_info: '限定技.你选择一名角色,令其回复状态(取消翻面,取消横置,弃置判定区延时性锦囊牌).',
                        exyueheng: '月恒',
                        exyueheng_info: '回合结束后,选择一名不为自己的角色,令其弃置X张牌,之后自己和该角色摸等量的牌.(X为该角色装备牌数)',
                        exhuanyu: '唤雨',
                        exhuanyu_info: '每当自己使用♥️️️牌时,你选择一名角色,令其摸一张牌.',
                        exhufeng: '呼风',
                        exhufeng_info: '每当自己使用♦️️️牌时,你选择一名角色,令其弃置一张牌.',
                        exzhaolei: '召雷',
                        exzhaolei_info: '每当自己使用♠️️️牌时,你选择一名角色,令其受到一点雷电伤害.',
                        exxianxue: '霰雪',
                        exxianxue_info: '每当自己使用♣️️️牌时,你选择一名角色,令回复一点体力.',
                        exhuangtuanb: '黄天',
                        exhuangtuanb_info: '',
                        exhuangtian: '黄天',
                        exhuangtian_info: '自己每失去一点体力,便获得一枚【黄天】标记.回合结束后,清空自己的【黄天】标记,选择一名角色发动.该角色失去α点体力值,自己回复α点体力值.(α为【黄天】标记的二分之一,且向上取整数)',
                        exluanshizhangjiao: '乱世',
                        exluanshizhangjiao_info: '组合技.每使用其中技能,自己失去一点体力.<span class=yellowtext>【唤雨】</span>每当自己使用♥️️️牌时,你选择一名角色,令其摸一张牌.<span class=yellowtext>【呼风】</span>每当自己使用♦️️️牌时,你选择一名角色,令其弃置一张牌.<span class=yellowtext>【召雷】</span>每当自己使用♠️️️牌时,你选择一名角色,令其受到一点雷电伤害.<span class=yellowtext>【霰雪】</span>每当自己使用♣️️️牌时,你选择一名角色,令回复一点体力.',
                        exzhuisi: '追思',
                        exzhuisi_info: '<span class=yellowtext>组合技、限定技.</span><span class=yellowtext>【淑】</span>你选择一名角色,令其回复满血量.<span class=yellowtext>【惠】</span>你选择一名角色,令其摸Y张牌(Y为该角色体力上限).<span class=yellowtext>【娴】</span>你选择一名角色,令其增加2点体力上限.<span class=yellowtext>【婉】</span>你选择一名角色,令其回复状态(取消翻面,取消横置,弃置判定区延时性锦囊牌).',
                        exleiming: '鸣雷',
                        exleiming_info: '',
                        exleimingx: '雷鸣',
                        exleimingx_info: '锁定技.张角在场时,全场所有角色回合开始需进行判定;判定为♠️️️该角色受到一点雷电伤害.',
                        exguidao: '鬼道',
                        exguidao_info: '每当有角色判定时,你摸一张牌.你可以选择用自己的牌替换判定牌,若如此做,你再摸一张牌.',
                        exxiaofeng: '啸风',
                        exxiaofeng_info: '当自己使用♦️️️牌时,选择一名角色获得【风】.有【风】的角色每次获得手牌时,都随机弃置一张牌.',
                        exxiaofengx: '啸风',
                        exxiaofengx_info: '',
                        exchuixi: '吹息',
                        exchuixi_info: '自己受伤后可以令场上带有【风】标记的角色随机弃置两张牌,之后失去【风】标记.每已此法结算一次,自己摸一张牌.',
                        exxiansi: '陷嗣',
                        exxiansi_info: '回合开始前,可弃置场上任意角的任意两张牌,被弃置的角色获得一张【陷嗣】.(【陷嗣】:基本牌,相当于杀,且不计杀的使用次数)',
                        exliwei: '立危',
                        exliwei_info: '锁定技.①你的【杀】均视为【陷嗣】.②每当场上有人使用【陷嗣】牌后,你弃置一张牌.③若你因此技能将手牌弃置为零,你减一点体力上限,摸三张牌.',
                        exxianfua: '先辅',
                        exxianfua_info: '',
                        exxianfub: '先辅',
                        exxianfub_info: '',
                        exxianfuc: '先辅',
                        exxianfuc_info: '',
                        exxianfud: '先辅',
                        exxianfud_info: '',
                        exxianfuaa: '先辅',
                        exxianfuaa_info: '①回合开始前可绑定一名角色,你与该角色受伤和回复效果同等作用在对面身上.②你与绑定角色中有人因【先辅】而受伤时,受伤角色可弃置一名角色至多两张牌,因【先辅】技能而回血时,回血的角色摸两张牌.③若绑定的角色先于你死亡,你下个回合开始前重新绑定一名角色;若你先于绑定的角色死亡,可给绑定的角色添加一名副将【EX郭嘉】.',
                        exxianfue: '先辅',
                        exxianfue_info: '',
                        exyingyun: '先辅',
                        exyingyun_info: '',
                        exhuaxian: '化仙',
                        exhuaxian_info: '锁定技.每次自己回合结束后,随机获得0-3张牌.游戏进行第十轮该角色开始渡劫,丹药越多,渡劫成功率越大.渡劫成功则玩家单人赢得游戏,渡劫失败则该角色立即死亡.炁在0-5,100%渡劫失败;炁在6-10,50%失败;炁在11-15,50%成功;炁大于15,100%成功.既不成功又不失败,则清除技能【化仙】,游戏继续.',
                        exliandan: '炼丹',
                        exliandan_info: '一回合一次,弃置1-3张牌炼制丹药.弃置的牌越多,获得更高级的丹药概率越大.有极小概率炼制失败,失败获得【火药】.',
                        exdanyao: '丹药',
                        exdanyao_info: '服用丹药后,按丹药品相增加相应的【炁】,消耗【炁】可以用于抵挡伤害或增加自己的伤害,.',
                        exzuoci: '神光',
                        exzuoci_info: '锁定技.摸牌阶段额外获得一张宝物(【幻化宝镜】、【通灵宝玉】、【惑视司南】三样其中之一)',
                        exfuzhoux: '惑视',
                        exfuzhoux_info: '出牌阶段限一次,你可以将所有的手牌(至少一张)当做任意一张普通锦囊牌使用.',
                        exshenguangx: '神光',
                        exshenguangx_info: '锁定技.开局获得全场所有角色技能.',
                        exhuo: '祸',
                        exhuo_info: '',
                        exxingluan: '兴乱',
                        exxingluan_info: '锁定技.本局游戏中,只要有人造成或受到伤害,其获得X个【祸】标记.有【祸】的角色,每次造成或受到伤害,伤害量加Y.(X为造成伤害的数值,Y为【祸】的数值)',
                        exhuoshi: '祸始',
                        exhuoshi_info: '锁定技.游戏开局后,其它所有角色体力上限和体力值翻十倍.',
                        exhuoa: '祸',
                        exhuoa_info: '',
                        exjianxionga: '奸雄',
                        exjianxionga_info: '每次自己受伤,获得伤害造成此伤害的牌.(此技能会随着人物等级的升级而升级)',
                        exjianxiongb: '奸雄',
                        exjianxiongb_info: '二阶技能.每次自己受伤,获得伤害造成此伤害的牌,之后摸一张牌.',
                        exjianxiongc: '奸雄',
                        exjianxiongc_info: '三阶技能.每次自己受伤,获得伤害造成此伤害的牌,之后摸一张牌,之后令伤害来源弃置一张牌.',
                        exjianxiongd: '奸雄',
                        exjianxiongd_info: '四阶技能.每次自己受伤,获得伤害造成此伤害的牌,之后摸一张牌,之后令伤害来源弃置一张牌,之后令伤害来源失去一点体力.',
                        exjianxionge: '奸雄',
                        exjianxionge_info: '五阶技能.每次自己受伤,获得伤害造成此伤害的牌,之后摸一张牌,之后令伤害来源弃置一张牌,之后令伤害来源失去一点体力,之后自己回复一点体力.',
                        exxionglue: '雄略',
                        exxionglue_info: '全场每累计使用锦囊牌十次,人物角色便会向上进化一级.(每升一级,失去一点体力上限并回复一点体力,获得一个相应的技能,最高为五阶)',
                        exxieling: '挟令',
                        exxieling_info: '限定技.若自己的体力值为全场最低,自己造成的伤害＋1.(四级可获得)',
                        exbbbbb: '雄略',
                        exbbbbb_info: '',
                        exleimingxx: '雷鸣',
                        exleimingxx_info: '',
                        exfangzhux: '决绝',
                        exfangzhux_info: '',
                        exfangzhuxx: '夺嫡',
                        exfangzhuxx_info: '自己受伤后会获得X枚【放逐】标记(X为已损失体力).自己回合内,可移除一枚标记令场上一名角色翻面.',
                        exfangzhuxxx: '夺嫡',
                        exfangzhuxxx_info: '',
                        exjuejue: '决绝',
                        exjuejue_info: '锁定技.你令角色翻面后,其无法发动非锁定技.你对翻面的角色使用牌时,其不可响应.',
                        exjiangjiang: '激昂',
                        exjiangjiang_info: '你打牌时,可以表现的很激昂.',
                        exhunzihunzi: '魂姿',
                        exhunzihunzi_info: '你可以摆出一个销魂的姿势.',
                        exzhibazhiba: '制霸',
                        exzhibazhiba_info: '【吴】势力角色可以对你叫一声<霸霸>.',
                        expd: '五虎',
                        expd_info: '',
                        exshelie: '勤学',
                        exshelie_info: '锁定技.你将摸牌阶段改为【获得四张不同花色的牌】.',
                        exkeji: '克己',
                        exkeji_info: '锁定技.你跳过弃牌阶段,若你的手牌数小于体力值,则可在此时发动一次【勤学】.',
                        zxlongdan: '龙胆',
                        zxlongdan_info: '你可以将【杀】当做【闪】,或将【闪】当做【杀】使用或打出.',
                        zxyajiao: '涯角',
                        zxyajiao_info: '每当你于回合外使用或打出牌时,你可以亮出牌堆顶的一张牌,并将其交给一名角色.若此牌与你此次使用或打出的牌类别不同,则你弃置一张牌.',
                        zxfengpo: '凤魄',
                        zxfengpo_info: '当你于出牌阶段内使用第一张【杀】或【决斗】指定目标后,若目标角色数为1,你可以选择一项:1.摸X张牌;2.令此牌的伤害值基数+X.(X为其手牌中方牌的数量)',
                        zxdmp: '赵襄',
                        zxdmp_info: '',
                        dwyy: '典韦',
                        dwyy_info: '',
                        zxjuejing: '绝境',
                        zxjuejing_info: '锁定技,你的手牌上限+2;当你进入或脱离濒死状态时,你摸一张牌.',
                        exxianzhena: '陷阵',
                        exxianzhena_info: '锁定技.你对目标使用伤害类的牌时,无视距离,无视防具效果,无法被响应.',
                        exxianzhenb: '陷阵',
                        exxianzhenb_info: '',
                        exzhanluan: '斩击',
                        exzhanluan_info: '锁定技.你造成伤害时,若体力值大于目标体力值,该伤害变为固定值X.(X为你的体力值减去目标体力值)',
                        exyunying: '陨英',
                        exyunying_info: '每次受伤前,你摸两张牌,若你此时已受伤,则再摸X张牌(X为你已损失的体力值).',
                        exzhiyun: '掣政',
                        exzhiyun_info: '当你成为牌的效果目标时,你可以弃置一张牌令此效果无效.',
                        sl: '掣政',
                        sl_info: '',
                        exkuizhu: '溃诛',
                        exkuizhu_info: '你的手牌上限加X(X为你装备区域内未装备的数值);回合结束后可选择一名有装备数大于你的角色,对其造成一点伤害.',
                        exjixi: '急袭',
                        exjixi_info: '在【急袭形态】下,可以消耗两个个<田>,选择一名角色获得其一张牌.(该形态下无法屯田)',
                        extuntian: '屯田',
                        extuntian_info: '在【屯田形态】下,每使用一张牌,可以转化为一张<田>.(该形态下无法急袭)',
                        exzaoxian: '凿险',
                        exzaoxian_info: '自己的回合开始前或受伤后,选择转化为一种形态.【屯田形态】:该形态下无法<急袭>,自己每使用一张牌,可以转化为一张<田>.【急袭形态】:该形态下无法<屯田>,可以消耗两个<田>,选择一名角色获得其一张牌.',
                        extuntianx: '屯田',
                        extuntianx_info: '',
                        exweiweia: '魏威',
                        exweiweia_info: '',
                        exfengyin: '封印',
                        exfengyin_info: '锁定技.你的技能全部失效.',
                        exqizhi: '奇制',
                        exqizhi_info: '当你于回合内使用牌时,你可以弃置不是此牌目标的一名角色的一张牌.若如此做,其摸一张牌.',
                        exjinqu: '进趋',
                        exjinqu_info: '锁定技.结束阶段后你摸X张牌,若摸牌数大于自己的体力值,则封印技能一个回合.(X为此回合发动〖奇制〗的次数)',
                        exzengyi: '增益',
                        exzengyi_info: '回血时,摸已损失体力值的牌数,之后失去该效果.',
                        exshengshoua: '圣手',
                        exshengshoua_info: '',
                        exsunyi: '损益',
                        exsunyi_info: '回血时,随机失去已损失体力值的牌,之后失去该效果.',
                        exshengshou: '圣手',
                        exshengshou_info: '锁定技.自己的回合开始前,选择一名角色回复一点体力.自己的回合结束后,若自己本回合内未造成伤害,则选择一名角色获得【增益】效果;若自己回合内造成过伤害,选择一名角色获得【损益】效果.',
                        exqinxi: '圣手',
                        exqinxi_info: '',
                        exshanjia: '缮甲',
                        exshanjia_info: '每次出牌阶段前,你摸可以X张并弃X张手牌(X为当前装备牌数).若自己没有装备牌,则随机获得一张防具牌且你的装备无法被其他人弃置;若自己为满装备状态,则视为装备所有类型的武器牌且你发动【缮甲】后无需弃置牌.(注:所述装备范围限标准包和军争包)',
                        exbafeia: '八废',
                        exbafeia_info: '锁定技.开局获得八个废物武将的所有技能,且你将这些技能更改为主动技.每触发或使用八废的技能.你失去一点体力并摸一张牌.(例外:【不屈】依旧为锁定技,且使用时不失去体力,效果更改为<失去一点体力上限>)',
                        exbflianying: '连营',
                        exbflianying_info: '当你失去最后的手牌时,你可以摸一张牌,并触发八废.',
                        exbfxinzhan: '心战',
                        exbfxinzhan_info: '出牌阶段,可以观看牌堆顶三张牌并获得其中任意数量的♥️️️牌,并触发八废.',
                        exbfyicong: '义从',
                        exbfyicong_info: '当你的体力值大于2时,你计算与其他角色的距离时-1;当你的体力值不大于2时,其他角色计算与你的距离时+1,并触发八废.',
                        exbfkuanggu: '狂骨',
                        exbfkuanggu_info: '当你造成一点伤害后,若受伤角色与你的距离不大于1,你回复一点体力,并触发八废.',
                        ecbfjushou: '据守',
                        ecbfjushou_info: '结束阶段,你可以摸一张牌,并将武将牌翻面,并触发八废.',
                        exbfyizhong: '毅重',
                        exbfyizhong_info: '当你的防具栏为空时,黑色的杀对你无效,并触发八废.',
                        exbfbuqu: '不屈',
                        exbfbuqu_info: '当你扣减1点体力时,若你的体力值为0,你可以将牌堆顶的一张牌置于你的武将牌上:若此牌的点数与你武将牌上的其他牌均不同,你不会死亡;若你的武将牌上有点数相同的牌,你进入濒死状态,并触发八废.',
                        exbfleiji: '雷击',
                        exbfleiji_info: '当你使用或打出一张【闪】时,你可令一名其他角色进行一次判定:若结果为♣️️️,其受到一点雷电伤害,你回复一点体力;若结果为♠️️️,其受到两点雷电伤害,并触发八废.',
                        exbfguidao: '鬼道',
                        exbfguidao_info: '一名角色的判定牌生效前,你可以打出一张黑色牌替换之,并触发八废.',
                        exbafeihuangtian2: '黄天',
                        exbafeihuangtian2_info: '',
                        exbfhuangtian: '黄天',
                        exbfhuangtian_info: '主公技,其他群势力角色的出牌阶段限一次,其可以交给你一张【闪】或【闪电】,并触发八废.',
                        exbfqianxunx: '谦逊',
                        exbfqianxunx_info: '你成为【顺手牵羊】和【乐不思蜀】的目标后,可取消之并触发【八废】.',
                        exsscbenghuai: '崩坏',
                        exsscbenghuai_info: '结束阶段,若你的体力不是全场最少的(或之一),你须减1点体力或体力上限.',
                        exsscchouhai: '仇海',
                        exsscchouhai_info: '锁定技,当你受到渠道为【杀】的伤害时,若你没有手牌,此伤害+1.',
                        exsscranshang: '燃殇',
                        exsscranshang_info: '锁定技,当你受到1点火焰伤害后,你获得1枚<燃>标记;结束阶段开始时,你失去X点体力(X为<燃>标记的数量)',
                        exsscshiyong: '恃勇',
                        exsscshiyong_info: '锁定技,当你受到一次红色【杀】或【酒】【杀】造成的伤害后,须减1点体力上限',
                        exssclianhuo: '链祸',
                        exssclianhuo_info: '锁定技,当你受到火焰伤害时,若你的武将牌处于横置状态且此伤害不为连环伤害,则此伤害+1',
                        exsscyaowu: '耀武',
                        exsscyaowu_info: '锁定技,一名角色使用红色【杀】对你造成伤害时,该角色回复1点体力或摸一张牌.',
                        exssctongji: '同疾',
                        exssctongji_info: '锁定技.若你的手牌数大于你的体力值,则攻击范围包含你的其他角色使用【杀】时不能指定你以外的角色为目标.',
                        exssckurong: '苦肉',
                        exssckurong_info: '出牌阶段限一次,你可以弃置一张牌,失去1点体力.',
                        exsscsshouju: '据守',
                        exsscsshouju_info: '结束阶段,你可以摸一张牌,并将武将牌翻面.',
                        exsscfuli: '伏枥',
                        exsscfuli_info: '限定技,当你处于濒死状态时,你可以将体力回复至与场上势力数相同,翻面',
                        exsscsunben: '孙笨',
                        exsscsunben_info: '锁定技.游戏开始时你获得以下技能:【崩坏】【仇海】【燃殇】【恃勇】【链祸】【耀武】【同疾】【苦肉】【据守】【伏枥】.每使用以上的技能,你获得一个【笨】标记.',
                        exsschunzi: '魂姿',
                        exsschunzi_info: '觉醒技.你的准备阶段,若你拥有【笨】标记且你的体力值为1时,你可以发动此技能:增加并回复X点体力上限,获得技能【激昂】【英姿】【英魂】.(X为【笨】标记的数量,觉醒后【笨】标记不再增加)',
                        exsscsunbena: '孙笨',
                        exsscsunbena_info: '',
                        exsscjiang: '激昂',
                        exsscjiang_info: '每当你使用(指定目标后)或被使用(成为目标后)一张【决斗】或红色的【杀】时,你可以摸X张牌.(X为【笨】标记的数量)',
                        exsscyingzi: '英姿',
                        exsscyingzi_info: '摸牌阶段,你可以多摸X张牌.(X为【笨】标记的数量)',
                        exsscyinghun: '英魂',
                        exsscyinghun_info: '准备阶段开始时,若你已受伤,你可令一名其他角色执行一项:摸X张牌,弃置一张牌;或摸一张牌,弃置X张牌(X【笨】标记的数量)',
                        exsscyhyy: '英魂',
                        exsscyhyy_info: '',
                        exsscyzyy: '英姿',
                        exsscyzyy_info: '',
                        extongqu: '通渠',
                        extongqu_info: '出牌阶段你选择一名角色获得一枚【渠】,若其没有【渠】则额外获得一枚【渠】(有【渠】的角色受到伤害后会减少一枚【渠】),当你在一名角色回合内造成或受到过伤害,该回合结束后你选择一名角色摸X张牌.(X为【渠】的数量再加一的值)',
                        extongqumark: '通渠',
                        extongqumark_info: '',
                        extongqudamage: '通渠',
                        extongqudamage_info: '',
                        exwanlan: '挽澜',
                        exwanlan_info: '限定技.当有人处于濒死状态时,清空全场所有角色的【渠】发动,令该濒死角色回复一点体力并摸X张牌.(X为清空的【渠】的数量)',
                        exposhi: '破势',
                        exposhi_info: '锁定技.你对体力值高于半数的人造成伤害时,此伤害值加一.',
                        exxinyan: '心眼',
                        exxinyan_info: '锁定技.你对体力值低于半数一下的人造成伤害后,该伤害加一.',
                        exfuyi: '蝙翼',
                        exfuyi_info: '锁定技.你造成伤害后,自身回复等量数值的体力.',
                        exzhennv: '针女',
                        exzhennv_info: '锁定技.你造成伤害后,有50%的概率对敌人附加一点体力流失伤害.',
                        exjingji: '镜姬',
                        exjingji_info: '锁定技.自己受到伤害后,伤害来源有50%的概率失去一点体力.',
                        exbeifu: '被服',
                        exbeifu_info: '锁定技.防止自己受到一点以上的伤害.',
                        exdizangdun: '地藏',
                        exdizangdun_info: '',
                        exdizang: '地藏',
                        exdizang_info: '锁定技.受到伤害后,获得一个抵挡伤害的护盾.',
                        exshuyao: '树妖',
                        exshuyao_info: '锁定技.回复体力时,可以多回复一点.',
                        exyunhun: '御魂',
                        exyunhun_info: '回合开始时,你选择并获得一个相应的御魂效果直至回合结束;回合结束时,你选择并获得一个相应的御魂效果直至回合下个回合开始.',
                        exyunhuna: '御魂',
                        exyunhuna_info: '',
                        exzhixi: '止息',
                        exzhixi_info: '锁定技.你的回合内只能出一张牌.',
                        exmeibu: '魅步',
                        exmeibu_info: '其他角色的出牌阶段开始时,你可以弃置一张牌,令该角色于本阶段内拥有〖止息〗并令其所有非锁定技能失效.',
                        exmumu: '穆穆',
                        exmumu_info: '带有【止息】的角色对你的伤害无效.若受到了一名角色的非致命伤,你获得其所有装备牌;若受到了致命伤,你弃置自己两张装备牌并免疫此伤害.',
                        exjishe: '极奢',
                        exjishe_info: '你可主动令自己的手牌上限减一,每以此法发动一次,你摸一张牌,并获得一枚【爆】标记.回合结束后,你可横置至多X名角色.(X为【爆】的标记数量)',
                        exbao: '自爆',
                        exbao_info: '',
                        exzibao: '自爆',
                        exzibao_info: '锁定技.若你拥有【爆】标记,你从当前回合结束阶段起进行为期X轮的自爆倒计时,倒计时结束后你受到X点火焰伤害.你进入濒死状态,则直接引爆.(X为【爆】的标记数)',
                        exbaodaojishi: '自爆',
                        exbaodaojishi_info: '',
                        exjishea: '极奢',
                        exjishea_info: '',
                        exjielue: '劫掠',
                        exjielue_info: '锁定技.你令其它角色濒死时,获得该角色的所有牌和技能,并增加该角色的体力上限.',
                        extunjun: '屯军',
                        extunjun_info: '你的回合结束后,若你的体力上限为全场最高,你可以减少一点体力上限,之后摸两张牌.',
                        exluoyidamage: '裸衣',
                        exluoyidamage_info: '①你受到的伤害都转化为等量的【怒气值】.②当你造成伤害时,可消耗所有【怒气值】,令此伤害值增加消耗的数值.③开局你获得两点【怒气值】.',
                        exluoyimark: '裸衣',
                        exluoyimark_info: '',
                        exqibuabcd: '七步',
                        exqibuabcd_info: '',
                        exxiansiview: '陷嗣',
                        exxiansiview_info: '',
                        exxianfuy: '先辅',
                        exxianfuy_info: '',
                        exxianfux: '先辅',
                        exxianfux_info: '',
                        extianjiaguojia: '先辅',
                        extianjiaguojia_info: '',
                        exfuman: '抚蛮',
                        exfuman_info: '锁定技.①你的手牌区始终保留有一张【杀】,没有则自动补充.②你回合内使用超过三张杀后,不能再使用【杀】直至回合结束.',
                        exfumannosha: '抚蛮',
                        exfumannosha_info: '',
                        exfumanstart: '抚蛮',
                        exfumanstart_info: '',
                        exfumanthree: '抚蛮',
                        exfumanthree_info: '',
                        exfumanend: '抚蛮',
                        exfumanend_info: '',
                        exzhuli: '助力',
                        exzhuli_info: '你的出牌阶段结束后,令一名角色获得技能【抚蛮】直至其回合结束.',
                        exzhulimiss: '助力',
                        exzhulimiss_info: '',
                        exmojiang: '魔将',
                        exmojiang_info: '锁定技.①你造成伤害时有10%的概率将该伤害暴击为9.②若你进入过濒死,概率调整为30%.',
                        exmojianga: '魔将',
                        exmojianga_info: '',
                        exyuzhou: '宇宙',
                        exyuzhou_info: '你受伤后随机摸1~9张牌.<span class=yellowtext>(宇宙之力,昭于世间.)</span>',
                        exxianjihuaxiong: '先机',
                        exxianjihuaxiong_info: '限定技.①开局对全场每名角色造成一点伤害.②出牌阶段,你可将自己的扣血至濒死,再次无视条件地发动一次【先机】.',
                        exbaiban: '白板',
                        exbaiban_info: '锁定技.你连续五回合未受到伤害,立即死亡.<span class=yellowtext>(队友:你不卖血,要你何用?)</span>',
                        exdimenga: '缔盟',
                        exdimenga_info: '限定技.①出牌阶段,选择两名角色进行<缔盟>.②相互缔盟角色摸、弃或使用手牌,双方手牌数保持一致(手牌少的角色补充至对方手牌的数量,其上限不超过自身体力值).③<缔盟>角色因其它缔盟者而伤害后,<缔盟>效果消失.',
                        exdimengb: '缔盟',
                        exdimengb_info: '',
                        exdimengc: '缔盟',
                        exdimengc_info: '',
                        exduhou: '笃厚',
                        exduhou_info: '你可跳过自己的摸牌阶段,令一名角色摸三张牌.发动此技能后,若回合结束你的手牌不大于2,你摸三张牌.',
                        exduhoub: '笃厚',
                        exduhoub_info: '',
                        exhuanhuanew: '幻化',
                        exhuanhuanew_info: '锁定技.开局随机获得十个技能.',
                        exmojiang30: '魔将',
                        exmojiang30_info: '锁定技.你造成伤害时有10%的概率将该伤害暴击为9.②若你进入过濒死,概率调整为30%.<span class=yellowtext>(概率已升级)</span>',
                        exmojiangx: '魔将',
                        exmojiangx_info: '',
                        exxianjihuaxiongb: '先机',
                        exxianjihuaxiongb_info: '',
                        exruohuo: '弱火',
                        exruohuo_info: '受到的火焰伤害＋1,受到火焰伤害后该标记消失.',
                        exwuqian: '无前',
                        exwuqian_info: '锁定技,你的攻击距离视为无限.',
                        exceshi: '测试',
                        exceshi_info: '每个角色的回合限一次.当你进入濒死状态后,立即回复一点体力并摸两张牌.',
                        exquanbian: '权变',
                        exquanbian_info: '<span class=yellowtext>身份场专属技能</span>①你开局获得三枚【权变】标记,每次受到或造成伤害后可获得一枚【权变】标志.②回合开始前,消耗一枚【权变】标记,摸两张牌.消耗三枚【权变】标记,改变自己的阵营;消耗5枚【权变】标记,改变自己的身份.',
                        exanjian: '暗间',
                        exanjian_info: '<span class=yellowtext>斗地主模式</span><span class=firetext>地主</span><span class=yellowtext>专属技能</span>①开局你选择一名角色,本局游戏中你可对其使用技能【暗间】.②出牌阶段,你可将一张牌交给该角色,令其增加一枚【暗间】标记.③你每次受伤后,该角色增加一枚【暗间】标记.④标记大于3:你将其身份修改为<内奸>;标记大于5:你将其身份修改为<忠臣>;标记大于10:该角色由你操控.',
                        exanjianmark: '暗间',
                        exanjianmark_info: '',
                        exmark: '  ',
                        exmark_info: '',
                        exzhonghuia: '钟会',
                        exzhonghuia_info: '',
                        exzhonghuib: '钟会',
                        exzhonghuib_info: '',
                        exzhonghuic: '钟会',
                        exzhonghuic_info: '',
                        exmarkmark: ' ',
                        exmarkmark_info: '',
                        expojun: '破军',
                        expojun_info: '',
                        expojuna: '破军',
                        expojuna_info: '你使用【杀】指定目标后:①将目标所有牌置于其武将牌上,直至你的回合结束.②该【杀】造成伤害不低于目标当前体力值.',
                        exqixinga: '祈星',
                        exqixinga_info: '',
                        exqixing: '祈星',
                        exqixing_info: '',
                        exfengyin2: '封印',
                        exfengyin2_info: '',
                        exqixingaa: '祈星',
                        exqixingaa_info: '你的回合前10秒,可任意创造并使用锦囊牌.10秒后,你无法再使用技能或出牌,此时你可选择结束回合或【逆天而为】.选择【逆天而为】后,你失去一点体力上限,可继续使用手中的牌.',
                        exnitianerwei: '逆天而为?',
                        exnitianerwei_info: '',
                        exzhaoxiangbuqiang: '梅落',
                        exzhaoxiangbuqiang_info: '',
                    },
                };
                window.ceshiskill = Object.keys(QQQ.skill);
                lib.config.all.characters.add('EX神将');
                lib.config.characters.add('EX神将');
                for (const i in QQQ.character) {
                    const info = QQQ.character[i];
                    info[4].add(`ext:EX神将/image/${i}.jpg`);
                    info[4].push(`die:ext:EX神将/audio/${i}.mp3`);
                }
                lib.translate.EX神将_character_config = `EX神将`;
                return QQQ;
            });
            //—————————————————————————————————————————————————————————————————————————————数据操作相关自定义函数
            const numfunc = function () {
                if (!lib.number) {
                    lib.number = [];
                    for (let i = 1; i < 14; i++) {
                        lib.number.add(i);
                    }
                } //添加lib.number
                window.sgn = function (bool) {
                    if (bool) {
                        return 1;
                    }
                    return -1;
                }; //true转为1,false转为-1
                window.numberq0 = function (num) {
                    if (isNaN(Number(num))) {
                        return 0;
                    }
                    return Math.abs(Number(num));
                }; //始终返回正数(取绝对值)
                window.numberq1 = function (num) {
                    if (isNaN(Number(num))) {
                        return 1;
                    }
                    return Math.max(Math.abs(Number(num)), 1);
                }; //始终返回正数且至少为1(取绝对值)
                window.number0 = function (num) {
                    if (isNaN(Number(num))) {
                        return 0;
                    }
                    return Math.max(Number(num), 0);
                }; //始终返回正数
                window.number1 = function (num) {
                    if (isNaN(Number(num))) {
                        return 1;
                    }
                    return Math.max(Number(num), 1);
                }; //始终返回正数且至少为1
                window.deepClone = function (obj, visited = new WeakMap()) {
                    if (obj === null || typeof obj !== 'object' || obj instanceof window.Element) {
                        return obj;
                    }
                    if (visited.has(obj)) {
                        return visited.get(obj);
                    }
                    if (Array.isArray(obj)) {
                        return obj.map((item) => deepClone(item, visited));
                    }
                    const clonedObj = {};
                    visited.set(obj, clonedObj);
                    for (const key in obj) {
                        if (obj.hasOwnProperty(key)) {
                            clonedObj[key] = deepClone(obj[key], visited);
                        }
                    }
                    return clonedObj;
                }; //深拷贝对象
                window.factorial = function (num) {
                    num = Math.round(num);
                    if (num < 0) {
                        return 0;
                    }
                    if (num < 2) {
                        return 1;
                    }
                    let result = 1;
                    for (let i = 2; i <= num; i++) {
                        result *= i;
                    }
                    return result;
                }; //阶乘
                window.isPrime = function (num) {
                    if (num === 2 || num === 3) {
                        return true;
                    }
                    if (num < 2 || num % 2 === 0 || num % 3 === 0) {
                        return false;
                    }
                    for (let i = 5; i * i <= num; i += 6) {
                        if (num % i === 0 || num % (i + 2) === 0) {
                            return false;
                        }
                    }
                    return true;
                }; // 质数
            };
            numfunc();
            //—————————————————————————————————————————————————————————————————————————————卡牌包
            game.import('card', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: 'EX神将',
                    connect: true,
                    card: {
                        exxiansip: {
                            audio: true,
                            fullskin: true,
                            type: 'basic',
                            enable: true,
                            range: {
                                attack: 1,
                            },
                            selectTarget: 1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                'step 0';
                                'step 1';
                                if (typeof event.shanRequired != 'number' || !event.shanRequired || event.shanRequired < 0) {
                                    event.shanRequired = 1;
                                }
                                if (typeof event.baseDamage != 'number') {
                                    event.baseDamage = 1;
                                }
                                if (typeof event.extraDamage != 'number') {
                                    event.extraDamage = 0;
                                }
                                ('step 2');
                                if (event.directHit || (!_status.connectMode && lib.config.skip_shan && !target.hasShan())) {
                                    event._result = { bool: false };
                                } else if (event.skipShan) {
                                    event._result = { bool: true, result: 'shaned' };
                                } else {
                                    const next = target.chooseToUse('请使用一张闪响应杀');
                                    next.set('type', 'respondShan');
                                    next.set('filterCard', function (card, player) {
                                        if (card.name != 'shan') {
                                            return false;
                                        }
                                        return lib.filter.cardEnabled(card, player, 'forceEnable');
                                    });
                                    if (event.shanRequired > 1) {
                                        next.set('prompt2', '(共需使用' + event.shanRequired + '张闪)');
                                    }
                                    next.set('ai1', function (card) {
                                        const target = _status.event.player;
                                        const evt = _status.event.parent;
                                        let bool = true;
                                        if (_status.event.shanRequired > 1 && !get.is.object(card) && target.countCards('h', 'shan') < _status.event.shanRequired) {
                                            bool = false;
                                        } else if (target.hasSkillTag('useShan')) {
                                            bool = true;
                                        } else if (target.hasSkillTag('noShan')) {
                                            bool = false;
                                        } else if (get.damageEffect(target, evt.player, target, evt.card.nature) >= 0) {
                                            bool = false;
                                        }
                                        if (bool) {
                                            if (typeof card == 'string') {
                                                const info = get.info(card);
                                                if (info.ai && info.ai.order) {
                                                    if (typeof info.ai.order == 'number') {
                                                        return info.ai.order;
                                                    } else if (typeof info.ai.order == 'function') {
                                                        return info.ai.order();
                                                    }
                                                }
                                            }
                                            return 3;
                                        }
                                        return 0;
                                    }).set('shanRequired', event.shanRequired);
                                    next.set('respondTo', [player, card]);
                                    //next.autochoose=lib.filter.autoRespondShan;
                                }
                                ('step 3');
                                if (!result || !result.bool || !result.result || result.result != 'shaned') {
                                    event.trigger('shaHit');
                                } else {
                                    event.shanRequired--;
                                    if (event.shanRequired > 0) {
                                        event.goto(1);
                                    } else {
                                        event.trigger('shaMiss');
                                        event.responded = result;
                                    }
                                }
                                ('step 4');
                                if ((!result || !result.bool || !result.result || result.result != 'shaned') && !event.unhurt) {
                                    target.damage(get.nature(event.card), event.baseDamage + event.extraDamage);
                                    event.result = { bool: true };
                                    event.trigger('shaDamage');
                                } else {
                                    event.result = { bool: false };
                                    event.trigger('shaUnhirt');
                                }
                            },
                            ai: {
                                basic: {
                                    useful: [5, 1],
                                    value: [5, 1],
                                },
                                order() {
                                    if (_status.event.player.hasSkillTag('presha', true, null, true)) {
                                        return 10;
                                    }
                                    return 3;
                                },
                                result: {
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
                                tag: {
                                    respond: 1,
                                    respondShan: 1,
                                    damage(card) {
                                        if (card.nature == 'poison') {
                                            return;
                                        }
                                        return 1;
                                    },
                                    natureDamage(card) {
                                        if (card.nature) {
                                            return 1;
                                        }
                                    },
                                    fireDamage(card, nature) {
                                        if (card.nature == 'fire') {
                                            return 1;
                                        }
                                    },
                                    thunderDamage(card, nature) {
                                        if (card.nature == 'thunder') {
                                            return 1;
                                        }
                                    },
                                    poisonDamage(card, nature) {
                                        if (card.nature == 'poison') {
                                            return 1;
                                        }
                                    },
                                },
                            },
                        },
                        exchujidanyao: {
                            enable: true,
                            fullskin: true,
                            type: 'basic',
                            filterTarget(card, player, target) {
                                return !target.hasSkill('fengyin');
                            },
                            mark: true,
                            content() {
                                target.addSkill('exdanyao');
                                target.storage.exdanyao++;
                                target.markSkill('exdanyao');
                            },
                            ai: {
                                order: 2,
                                value: 6,
                                result: {
                                    target(player, target) {
                                        let num = 1;
                                        if (target.hp < 2) {
                                            num = 0.5;
                                        }
                                        return num / Math.sqrt(Math.max(1, target.countCards('h')));
                                    },
                                },
                            },
                            selectTarget: 1,
                        },
                        exzhongjidanyao: {
                            enable: true,
                            fullskin: true,
                            type: 'basic',
                            filterTarget(card, player, target) {
                                return !target.hasSkill('fengyin');
                            },
                            content() {
                                target.addSkill('exdanyao');
                                target.storage.exdanyao++;
                                target.storage.exdanyao++;
                                player.markSkill('exdanyao');
                            },
                            ai: {
                                order: 2,
                                value: 6,
                                result: {
                                    target(player, target) {
                                        let num = 1;
                                        if (target.hp < 2) {
                                            num = 0.5;
                                        }
                                        return num / Math.sqrt(Math.max(1, target.countCards('h')));
                                    },
                                },
                            },
                            selectTarget: 1,
                        },
                        exgaojidanyao: {
                            enable: true,
                            fullskin: true,
                            type: 'basic',
                            filterTarget(card, player, target) {
                                return !target.hasSkill('fengyin');
                            },
                            content() {
                                target.addSkill('exdanyao');
                                target.storage.exdanyao++;
                                target.storage.exdanyao++;
                                target.storage.exdanyao++;
                                player.markSkill('exdanyao');
                            },
                            ai: {
                                order: 2,
                                value: 6,
                                result: {
                                    target(player, target) {
                                        let num = 1;
                                        if (target.hp < 2) {
                                            num = 0.5;
                                        }
                                        return num / Math.sqrt(Math.max(1, target.countCards('h')));
                                    },
                                },
                            },
                            selectTarget: 1,
                        },
                        exhuoyao: {
                            fullskin: true,
                            type: 'basic',
                            range: {
                                global: 999,
                            },
                            enable: true,
                            filterTarget(card, player, target) {
                                return target.hp > 0;
                            },
                            content() {
                                target.damage(2, 'fire', true);
                            },
                            ai: {
                                basic: {
                                    order: 4,
                                    value: [3, 1],
                                    useful: 1,
                                },
                                result: {
                                    player(player) {
                                        const nh = player.countCards('h');
                                        if (nh <= player.hp && nh <= 4 && _status.event.name == 'chooseToUse') {
                                            if (typeof _status.event.filterCard == 'function' && _status.event.filterCard({ name: 'huogong' }, player, _status.event)) {
                                                return -10;
                                            }
                                            if (_status.event.skill) {
                                                const viewAs = get.info(_status.event.skill).viewAs;
                                                if (viewAs == 'huogong') {
                                                    return -10;
                                                }
                                                if (viewAs && viewAs.name == 'huogong') {
                                                    return -10;
                                                }
                                            }
                                        }
                                        return 0;
                                    },
                                    target(player, target) {
                                        if (target.hasSkill('huogong2') || target.countCards('h') == 0) {
                                            return 0;
                                        }
                                        if (player.countCards('h') <= 1) {
                                            return 0;
                                        }
                                        if (target == player) {
                                            if (typeof _status.event.filterCard == 'function' && _status.event.filterCard({ name: 'huogong' }, player, _status.event)) {
                                                return -1.5;
                                            }
                                            if (_status.event.skill) {
                                                const viewAs = get.info(_status.event.skill).viewAs;
                                                if (viewAs == 'huogong') {
                                                    return -1.5;
                                                }
                                                if (viewAs && viewAs.name == 'huogong') {
                                                    return -1.5;
                                                }
                                            }
                                            return 0;
                                        }
                                        return -1.5;
                                    },
                                },
                                tag: {
                                    damage: 1,
                                    fireDamage: 1,
                                    natureDamage: 1,
                                    norepeat: 1,
                                },
                            },
                            selectTarget: 1,
                        },
                        exbaojing: {
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip5',
                            onLose() {
                                for (const i of game.players) {
                                    //QQQ
                                    if (!i.name || !lib.character[i.name]) {
                                        continue;
                                    }
                                    const skills = lib.character[i.name][3];
                                    for (let j = 0; j < skills.length; j++) {
                                        if (!lib.skill[skills[j]].forceunique) {
                                            player.removeSkill(skills[j]);
                                        }
                                    }
                                }
                                player.addSkill('exzuoci');
                                player.update();
                            },
                            filterLose(card, player) {
                                if (player.hasSkillTag('unequip5')) {
                                    return false;
                                }
                                return player.hp > 0;
                            },
                            enable: true,
                            content() {
                                target.equip(cards[0]);
                                for (const i of game.players) {
                                    //QQQ
                                    if (!i.name || !lib.character[i.name]) {
                                        continue;
                                    }
                                    const skills = lib.character[i.name][3];
                                    for (let j = 0; j < skills.length; j++) {
                                        if (!lib.skill[skills[j]].forceunique) {
                                            target.addSkill(skills[j]);
                                        }
                                    }
                                }
                                player.update();
                            },
                        },
                        exyupei: {
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip5',
                            onLose() {
                                player.maxHp = 2;
                                player.update();
                            },
                            filterLose(card, player) {
                                if (player.hasSkillTag('unequip5')) {
                                    return false;
                                }
                                return player.hp > 0;
                            },
                            enable: true,
                            content() {
                                target.equip(cards[0]);
                                target.gainMaxHp(Infinity);
                                target.hp = target.maxHp;
                                player.update();
                            },
                        },
                        exfuzhou: {
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip5',
                            onLose() {
                                player.chooseToDiscard(99, 'h', true);
                                player.removeSkill('exfuzhoux');
                                player.update();
                            },
                            filterLose(card, player) {
                                if (player.hasSkillTag('unequip5')) {
                                    return false;
                                }
                                return player.hp > 0;
                            },
                            enable: true,
                            content() {
                                target.equip(cards[0]);
                                player.addSkill('exfuzhoux');
                                player.update();
                            },
                        },
                    },
                    translate: {
                        exxiansip: '陷嗣',
                        exxiansip_info: '视为【杀】,且不计次数.',
                        exchujidanyao: '初级丹药',
                        exchujidanyao_info: '服用后,可抵挡一次伤害.',
                        exzhongjidanyao: '中级丹药',
                        exzhongjidanyao_info: '服用后,可抵挡两次伤害.',
                        exgaojidanyao: '高级丹药',
                        exgaojidanyao_info: '服用后,可抵挡三次伤害.',
                        exhuoyao: '火药',
                        exhuoyao_info: '对一名角色造成2点火焰伤害.',
                        exbaojing: '幻化宝镜',
                        exbaojing_info: '装备后获得全场角色所有技能,若失去该装备则失去获得的技能.',
                        exyupei: '通灵宝玉',
                        exyupei_info: '装备后自己的血量变为无限,若失去该装备自己的血量变为2.',
                        exfuzhou: '惑视司南',
                        exfuzhou_info: '装备后自己可以把任意牌当做任意锦囊牌使用,若失去该装备自己失去所有手牌.(限三次)',
                    },
                };
                for (const i in QQQ.card) {
                    const info = QQQ.card[i];
                    if (!info.image) {
                        if (info.fullskin) {
                            info.image = `ext:EX神将/image/${i}.png`;
                        } else {
                            info.image = `ext:EX神将/image/${i}.jpg`;
                        }
                    }
                    lib.inpile.add(i);
                    if (info.mode && !info.mode.includes(lib.config.mode)) {
                        continue;
                    }
                    lib.card.list.push([lib.suits.randomGet(), lib.number.randomGet(), i]);
                }
                lib.config.all.cards.add('EX神将');
                lib.config.cards.add('EX神将');
                lib.translate.EX神将_card_config = 'EX神将';
                return QQQ;
            });
        },
        package: extensionInfo,
    };
});
