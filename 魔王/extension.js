import { lib, game, ui, get, ai, _status } from '../../noname.js'
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '魔王',
        content(config, pack) {
            //更新公告
            if (pack.changeLog) game.showExtensionChangeLog(pack.changeLog);
        },
        precontent() {
            //—————————————————————————————————————————————————————————————————————————————数据操作相关自定义函数
            const numfunc = function () {
                if (!lib.number) {
                    lib.number = [];
                    for (var i = 1; i < 14; i++) {
                        lib.number.add(i);
                    }
                } //添加lib.number
                window.sgn = function (bool) {
                    if (bool) return 1;
                    return -1;
                };//true转为1,false转为-1
                window.numberq0 = function (num) {
                    if (isNaN(Number(num))) return 0;
                    return Math.abs(Number(num));
                };//始终返回正数(取绝对值)
                window.numberq1 = function (num) {
                    if (isNaN(Number(num))) return 1;
                    return Math.max(Math.abs(Number(num)), 1);
                };//始终返回正数且至少为1(取绝对值)
                window.number0 = function (num) {
                    if (isNaN(Number(num))) return 0;
                    return Math.max(Number(num), 0);
                };//始终返回正数
                window.number1 = function (num) {
                    if (isNaN(Number(num))) return 1;
                    return Math.max(Number(num), 1);
                };//始终返回正数且至少为1
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
                    for (let key in obj) {
                        if (Object.hasOwn(obj, key)) {
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
                    if (num === 2 || num === 3) return true;
                    if (num < 2 || num % 2 === 0 || num % 3 === 0) return false;
                    for (let i = 5; i * i <= num; i += 6) {
                        if (num % i === 0 || num % (i + 2) === 0) return false;
                    }
                    return true;
                }; // 质数
            };
            numfunc();
            lib.namePrefix.set('弱保软·', {
                nature: 'soilmm',
                color: '#f25aee',
                showName: '弱',
            });
            lib.dynamicTranslate.zhaozhang_chuli = function (player, storage) {
                if (player.storage.zhaozhang_chuli_zh) {
                    return '❶出牌阶段开始时,你可令【昭彰❷】中的『<font color="92FF00">+1</font>/<font color="F3FF00">-1</font>』互换;<br/>❷每回合限一次,每当你使用牌后可展示手牌并将X定为当前字数之和,若此时X与上个X相比有所<font color="F3FF00">增加</font> / <font color="92FF00">减少</font>,则你选择获得一张牌名字数为此牌字数<font color="92FF00">+1</font> / <font color="F3FF00">-1</font>的牌;<br/>若该X为本回合首次展示,则重置【昭彰❷】的使用次数.';
                }
                return '❶出牌阶段开始时,你可令【昭彰❷】中的『<font color="F3FF00">-1</font>/<font color="92FF00">+1</font>』互换;<br/>❷每回合限一次,每当你使用牌后可展示手牌并将X定为当前字数之和,若此时X与上个X相比有所<font color="F3FF00">增加</font> / <font color="92FF00">减少</font>,则你选择获得一张牌名字数为此牌字数<font color="F3FF00">-1</font> / <font color="92FF00">+1</font>的牌;<br/>若该X为本回合首次展示,则重置【昭彰❷】的使用次数.';
            };
            //—————————————————————————————————————————————————————————————————————————————视为转化虚拟牌相关自创函数
            const shiwei = function () {
                lib.element.player.filterCardx = function (card, filter) {
                    if (typeof card == 'string') {
                        card = { name: card };
                    }
                    const player = this,
                        info = get.info(card);
                    if (!lib.filter.cardEnabled(card, player)) return false; //卡牌使用限制
                    if (info.notarget) return true;
                    if (!info.filterTarget) return true;
                    if (!info.enable) return true;
                    return game.hasPlayer(function (current) {
                        if (info.multicheck && !info.multicheck(card, player)) return false;
                        if (filter) {
                            if (!lib.filter.targetInRange(card, player, current)) return false; //距离限制
                            return lib.filter.targetEnabledx(card, player, current);
                        }
                        return lib.filter.targetEnabled(card, player, current); //目标限制
                    });
                }; //适用于choosetouse的filtercard
                lib.element.player.filterCard = function (card, filter) {
                    if (typeof card == 'string') {
                        card = { name: card };
                    }
                    const player = this,
                        info = get.info(card),
                        event = _status.event;
                    const evt = event.name.startsWith('chooseTo') ? event : event.getParent((q) => q.name.startsWith('chooseTo'));
                    if (evt.filterCard2) {
                        return evt._backup.filterCard(card, player, evt);
                    } //viewAs的技能会修改chooseToUse事件的filterCard
                    else if (evt.filterCard && evt.filterCard != lib.filter.filterCard) {
                        return evt.filterCard(card, player, evt); //这里也有次数限制
                    } else {
                        if (!lib.filter.cardEnabled(card, player)) return false; //卡牌使用限制
                        if (info.notarget) return true;
                        if (!info.filterTarget) return true;
                        if (!info.enable) return true;
                        if (evt.name == 'chooseToRespond') return true; //chooseToRespond无次数距离目标限制
                        if (filter) {
                            if (!lib.filter.cardUsable(card, player, evt)) return false; //次数限制
                        }
                        if (evt.filterTarget && evt.filterTarget != lib.filter.filterTarget) {
                            return game.hasPlayer(function (current) {
                                return evt.filterTarget(card, player, current);
                            });
                        }
                        return game.hasPlayer(function (current) {
                            if (info.multicheck && !info.multicheck(card, player)) return false;
                            if (filter) {
                                if (!lib.filter.targetInRange(card, player, current)) return false; //距离限制
                                return lib.filter.targetEnabledx(card, player, current);
                            }
                            return lib.filter.targetEnabled(card, player, current); //目标限制
                        });
                    }
                }; //删除次数限制//filter决定有无次数距离限制//viewAs的技能会修改chooseToUse事件的filterCard
                lib.element.player.qcard = function (type, filter, range) {
                    const list = [];
                    for (const i in lib.card) {
                        const info = lib.card[i];
                        if (info.mode && !info.mode.includes(lib.config.mode)) {
                            continue;
                        }
                        if (!info.content) {
                            continue;
                        }
                        if (['delay', 'equip'].includes(info.type)) {
                            continue;
                        }
                        if (type && info.type != type) {
                            continue;
                        }
                        if (filter !== false) {
                            const player = this;
                            if (range !== false) {
                                range = true;
                            }
                            if (!player.filterCard(i, range)) {
                                continue;
                            }
                        }
                        list.push([lib.suits.randomGet(), lib.number.randomGet(), i]); //花色/点数/牌名/属性/应变
                        if (i == 'sha') {
                            for (const j of Array.from(lib.nature.keys())) {
                                list.push([lib.suits.randomGet(), lib.number.randomGet(), 'sha', j]);
                            }
                        }
                    }
                    return list;
                }; //可以转化为的牌//filter控制player.filterCard//range控制是否计算次数与距离限制
            };
            shiwei();
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '魔王',
                    connect: true,
                    characterSort: {
                        魔王: {
                            tianwailaike: ['chuli_boersaifunie', 'chuli_suolaka', 'chuli_gaoda', 'chuli_mali', 'chuli_tsdsj', 'chuli_weiduo', 'chuli_vva', 'chuli_laiyi', 'chuli_re_boersaifunie'],
                            yanhanliehun: ['chuli_furong', 'chuli_gaoda', 'chuli_qinmi', 'chuli_zhugeguo', 'chuli_liubei', 'chuli_jiangwei', 'chuli_liufeng', 'chuli_zhaoyun'],
                            daweishanhe: ['chuli_wangyi', 'chuli_guohuai', 'chuli_simafu', 'chuli_daweiwuwang', 'chuli_caocao', 'chuli_zhugedan', 'chuli_xiahouba'],
                            jiangdonghucheng: ['chuli_sunshangxiang', 'chuli_xushi', 'chuli_sunce', 'chuli_luojun', 'chuli_sunhuan', 'chuli_sunquan', 'chuli_daqiao', 'chuli_sunyi'],
                            qunxiongzhulu: ['chuli_lizicheng', 'chuli_liuhai', 'chuli_zhangxianzhong', 'chuli_yuankui', 'chuli_liuqi', 'chuli_jiangcai', 'chuli_xushao'],
                            ruorbaoruan: ['chulixin_zhouchu'],
                        },
                    },
                    dynamicTranslate: {
                    },
                    character: {
                        chuli_sunshangxiang: ['female', 'wu', 3, ['chuli_xiaoji', 'chuli_jiaohao', 'chuli_jianwu1'], []],
                        chuli_xiahouba: ['male', 'wei', 4, ['baobian_chuli', 'zhibi_chuli'], []],
                        chuli_jiangcai: ['female', 'qun', 4, ['jinbian_Angel_xin', 'dongdang_Angel'], ['des:本无远虑深谋,意在邀功求赏;能识进趣之功,不通道德之化']],
                        chuli_liufeng: ['male', 'shu', 4, ['chuli_xiansi', 'chuli_shoujun', 'chuli_juyuan'], []],
                        chuli_vva: ['female', 'shen', 4, ['chuli_mobing', 'chuli_chengjie', 'chuli_duoquan', 'chuli_hudong'], ['des:魔界王族<恶魔尤里乌斯>的直系子孙.她对自己的血统感到很自豪,过着宅女废人的生活.后来被火冒三丈的父亲赶出家门,来到了人类世界.抱着对父亲的愤恨,薇薇安决心要苦心修炼.当她野心勃勃地回到魔界想推翻父亲成为下一个魔王时,却发现他只留下一张<渡假中>的纸条后,消失得无影无踪了.为了发泄内心的怒气,薇薇安决定发动魔界战争.不过其他魔王已经习惯了没有战争的和平生活,所以马上就投降了,结果薇薇安就顺理成章地当上了魔王']],
                        chuli_zhugedan: ['male', 'wei', 4, ['gongao_Angel', 'juyi_Angel'], []],
                        chuli_jiangwei: ['male', 'shu', 3, ['beifa_chuli', 'mingzuo_chuli', 'moubian_chuli', 'pingxiang_chuli'], []],
                        chuli_liuqi: ['male', 'qun', 3, ['wenji_angel', 'tunjiang_Angel'], []],
                        chuli_daqiao: ['female', 'wu', 3, ['chuli_guose', 'chuli_yanxiao', 'liuli_chuli'], []],
                        chuli_caocao: ['male', 'wei', 4, ['chuli_lianhuan', 'chuli_manyan', 'chuli_duanzhou'], []],
                        chuli_liubei: ['male', 'shu', 4, ['chuli_rende', 'chuli_shengnu'], []],
                        chuli_daweiwuwang: ['male', 'wei', 4, ['Angel_gksm', 'chuli_xionglve'], ['des:曹丕称帝后,孙权便遣使请求成为魏的藩属,并将降将于禁等送回北方.十一月,曹丕赐给孙权九锡,册封其为吴王、大将军、领荆州牧,节督荆、扬、交三州诸军事']],
                        chuli_zhugeguo: ['female', 'shu', 1, ['chuli_qirang', 'chuli_yuhua', 'chuli_denxian'], []],
                        chuli_sunquan: ['female', 'wu', 3, ['chuli_zhiheng', 'chuli_xiongju'], []],
                        chuli_weiduo: ['female', 'shen', 3, ['chuli_dingzhan', 'chuli_jianqi', 'chuli_dizhan'], ['des:她是亚历山大的远房亲戚,也是<贵族骑士团>的团长.她拥有漂亮的容貌和超强的实力.但因为她是亚历山大的亲戚,所以避免不了世俗的眼光.维多利亚总是冲锋前线,所以她的裙子和盔甲都沾满了鲜血.正因为她的努力,大家开始对她刮目相看.甚至还有个传闻,只要她出马,战争必胜.即使亚历山大挽留她,但她还是离开了战场.她约定只要骑士团需要胜利,她就会回来.后来她成为了帝国骑士团的头领,所以也成为了敌人的眼中钉,但是敌人都败给了她']],
                        chuli_furong: ['male', 'shu', 4, ['chuli_duizhen', 'chuli_jieming'], []],
                        chuli_simafu: ['male', 'wei', 3, ['chuli_quanlian', 'chuli_duanxing', 'chuli_aiwei'], []],
                        chuli_xushi: ['female', 'wu', 3, ['chuli_wengua', 'chuli_fuzhu'], []],
                        chuli_yuankui: ['male', 'qun', 4, ['chuli_quansheng', 'chuli_charuo'], ['des:东汉时期的名臣,出身于四世三公的名门贵族,汉末枭雄袁绍、袁术的叔叔,袁隗比其兄逢更早登三公位,曾任后汉太尉、太傅.董卓专权后,因为袁氏兄弟起兵反卓,董卓恐其为内应而将其全家杀害']],
                        chuli_sunhuan: ['male', 'wu', 4, ['chuli_jiee', 'chuli_zhuwu'], ['des:孙桓,字叔武,吴郡富春人.孙河(孙河,字伯海.孙坚族子,本姓俞,后因孙策喜爱,赐姓孙)第三子.  　　建安二十四年(219年),参与由吕蒙指挥的袭击荆州行动.关羽兵败后招揽关羽余众,得五千人以及大量牛马器械.  　　黄武元年(222年),孙桓二十五岁,拜安东中郎将,跟随陆逊抗击进攻东吴的刘备.当时刘备率领众多兵众进攻,满山都是蜀军,孙桓奋战,与陆逊等协力击破蜀军.刘备兵败逃走,孙桓截击,差点就可生擒刘备.刘备更忿恨地感叹:<吾昔初至京城,桓尚小儿,而今迫孤至此也!>战后孙桓因功拜建武将军,封丹徒侯,督牛渚,修筑横江坞,期间逝世.  　　<吴书>载孙桓<仪容端正,器怀聪明,博学强记,能论议应对.>连孙权都称赞他为宗室中的颜渊']],
                        chuli_wangyi: ['female', 'wei', 3, ['qimou_chuli', 'yingbian_Angel', 'chuli_jiuqi'], []],
                        chuli_luojun: ['male', 'wu', 3, ['chuli_bozheng', 'chuli_chanxu'], ['des:骆俊(?-197),字孝远,东汉末年扬州会稽郡乌伤县(今浙江义乌)人.宗室陈王刘宠的国相,在任期间励精图治,深得民众爱戴.建安二年(197年),因拒绝借粮给僭号军阀袁术而遭其派遣的张闿所暗杀[1].骆俊之子骆统为三国吴国将领']],
                        chuli_zhangxianzhong: ['male', 'qun', 3, ['chuli_shehu', 'weixiang_chuli'], ['des:天生万物以养人,世人犹怨天不仁.不知蝗蠹遍天下,苦尽苍生尽王臣. 人之生矣有贵贱,贵人长为天恩眷.人生富贵总由天,草民之穷由天谴. 忽有狂徒夜磨刀,帝星飘摇荧惑高.翻天覆地从今始,杀人何须惜手劳. 不忠之人曰可杀!不孝之人曰可杀!不仁之人曰可杀!不义之人曰可杀! 不礼不智不信人,大西王曰杀杀杀!我生不为逐鹿来,都门懒筑黄金台, 状元百官都如狗,总是刀下觳觫材.传令麾下四王子,破城不须封刀匕. 山头代天树此碑,逆天之人立死跪亦死!']],
                        chuli_tsdsj: ['female', 'shen', 4, ['chuli_peifang', 'chuli_qianzhuo', 'chuli_sb_xinguoyin'], ['des:小时候,去罗曼旅行时,险些遇难而失去生命.这时,路过的一位旅行者给即将死去的拉尼送上了一份玲珑剔透的饮料,喝下一口,就瞬间觉得又甜又凉爽,就像看见天堂一样. <br/>被救回格兰西亚后,拉尼仍然无法忘记当时喝过的生命之水,为了再次品尝这种味道,她开始在市面上四处寻找所有的饮料.<br/>但是,即使喝遍了格兰西亚的所有饮料,也没找到她记忆里的那个味道,所以她开始亲自制作,尽可能味道相似的饮料.拉尼的脑海里还清晰地浮现了当时的记忆.<br/>掠过鼻尖的甜蜜香气,触碰到嘴唇的冰冷温度,掠过舌尖的甜蜜和顺着喉咙流淌的清凉感.但是,即使再怎么努力做出的饮料,也无法完美的再现当时那种终极的味道.<br/>就这样每天埋头制作的一天,来找拉尼的人们尝了一下拉尼的饮料后大吃一惊,并赞叹不已.看到喝完自己制作的饮料后的人们感到如此幸福的样子,拉尼怀着喜悦的心情全身心制作起了饮料.拉尼的饮料因口碑好而传开,越来越多的人开始寻找,传闻开始越过帝国在荷赛拉各地也传开了.对于拉尼的饮料,有人说有悲伤的味道,有人说有甜蜜的幸福的味道.<br/>大家喝完饮料,都说感觉到了起各自梦寐以求的幻影展现在自己眼前.人们称赞拉尼是<偷了神的饮料来滋润人类的天使>.<br/>有一天,听到传闻的阿尔玛尔和戴莉安来找拉尼.尝过拉尼饮料的戴莉安说有<是熟悉的故乡的味道>,说很高兴后就突然消失了.拉尼满怀希望,她苦苦寻找的饮料可能就在戴莉安的故乡,于是向荣光山脉迈出了步伐']],
                        chuli_liuhai: ['male', 'qun', 3, ['chuli_xichan', 'chuli_sancai', 'chuli_xinjihai'], ['des:吕洞宾弟子刘海喜欢周游四海,降魔伏妖,布施造福人世.金蟾是一只作孽的妖精,作妖发大水,危害乡里百姓.一次刘海周游到此地,看到百姓苦不堪言,民不聊生,便降服了金蟾,过程中金蟾受伤且被断其一脚,并将要置它于死地,金蟾苦苦哀求刘海给它一条生路,并且承诺找来财物周济百姓灾民,今后做善事将功赎罪.于是刘海就将金蟾收归门下,走到哪里带到哪里,金蟾就每日到处将富人手里的不义之财衔来献给刘海,在刘海的带领下行善事,共同周济穷苦百姓']],
                        chuli_mali: ['female', 'shen', 4, ['xinduanzou_chuli', 'xingge_chuli'], ['des:魔法学校的新生玛丽在特长比赛的最前排,亲眼目睹了明日香的偶像神话开始的瞬间.<br/>人们纷纷议论明日香的美貌,但玛丽却沉浸在明日香歌曲所留下的余韵中.<br/>此后,玛丽成为了明日香的忠实粉丝.虽然偶尔能与在偶像活动的同时上学的明日香相遇,但玛丽为了掩饰自己的害羞,故意冷淡对待明日香.<br/>即便是被周围人误会,玛丽也彻底地隐瞒了自己是粉丝的事情.<br/>有一天,明日香所在的经纪公司的制作人来到了学校.制作人因迷路乱逛的时候,发现了听着明日香的专辑并哼着歌曲的玛丽.从她身上看到可能性的制作人提议要不要作为明日香的和声登台.<br/>虽然玛丽内心非常激动,但很平常的接受了提议.不久之后,玛丽登上了出道舞台.她在紧张之中按照之前一直的练习,成功完成了舞台.但在舞台问候的时候,明日香牵着玛丽的手向歌迷介绍她是自己的同级生.<br/>但因明日香在旁边笑得很开心,使她过度紧张,就像往常一样冷淡的对待了.虽然明日香的忠实粉丝非常愤慨,但是这种形象反而被部分粉丝接受,因此玛丽能正式成为偶像出道']],
                        chuli_lizicheng: ['male', 'qun', 4, ['zicheng_chuli', 'zhuchang_chuli'], ['des:李自成(1606-1645年),原名鸿基.陕西米脂人.称帝时以李继迁为太祖.人称闯王、李闯.明末农民军领袖之一,大顺政权的建立者']],
                        chuli_sunce: ['male', 'wu', '3/5', ['yingba_chuli', 'shengjiang_chuli'], []],
                        chuli_guohuai: ['male', 'wei', 4, ['fanglve_chuli', 'jingce_chuli'], []],
                        chuli_qinmi: ['male', 'shu', 3, ['chuli_qiaobian', 'chuli_lici'], []],
                        chuli_zhaoyun: ['male', 'shu', 1, ['xin_kunjue_chuli', 'xin_xianpo_chuli'], []],
                        chuli_gaoda: ['male', 'shen', 1, ['xianjue_chuli', 'xianpo_chuli'], ['des:子龙不特浑身是胆.殆浑身是智.为三分之完人欤.<br/><b>(此武将有AI,可用作测试强度之沙包矣)</b>']],
                        chuli_suolaka: ['female', 'shen', 3, ['chuli_xingyun', 'chuli_jueze'], ['des:索拉卡是来自巨神峰彼端天界维度的流浪者.她放弃了不朽的神格,保护凡间的种族免遭他们自身暴力本能的伤害.她对自己遇见的每个人都施以同情与仁慈——即使是那些对她心存恶念的人也不例外.虽然索拉卡见证了这世上如此多的苦痛与挣扎,但她依然相信符文之地的人们依然有更多潜力尚未发现']],
                        chuli_boersaifunie: ['female', 'shen', 4, ['wanshen_chuli', 'funie_chuli'], ['des:珀耳塞福涅本身是一个种子女神,所对应的主要是古希腊常用谷物的谷种.当她在冥界时,代表沉睡于黑暗泥土的种子.当她在春天回到地面上时,代表生长女神德墨忒尔的力量唤醒了种子,种子开始苏醒萌芽,掌管季节的荷莱女神们会来迎接珀耳塞福涅回到姐妹之中']],
                        chuli_xushao: ['male', 'qun', 3, ['yaping_chuli', 'yaofu_chuli'], []],
                        chuli_laiyi: ['female', 'shen', 4, ['kuanglei_chuli', 'fuming_chuli'], ['des:当上堂主的第一件事就是庆祝宴.莱伊召集所有人一起敲锣打鼓开启庆典.但不知何时起,好几名元老开始怀疑前任堂主对于继承者的选择.不认可莱伊的他们推举之前没能成为堂主而离开的泉奈,建立了反对势力.他们制定了刺杀计划,想要推一个合适的继承人,但莱伊和大家在一起狂欢了几天几夜,一直没有机会.堂主亲自演奏的庆祝鼓声回荡在整个村庄.听闻的剑客们好奇而来,庆典的规模越来越大. <br/>莱伊出生于名门望族的剑术之家,自小跟着自由开放的老师走遍了柳国.她玩闹着学习剑术,在外的游历拓宽了她的见识.莱伊的旅程总是充满了活力、乐器、游戏以及人们开心的笑声.一天老师的老朋友找到他们,他问莱伊觉得人们行动的动力是什么.莱伊抓着他的手放在自己心上.如同鼓声一般泛起波澜.又是一天,老师说时机已到,把莱伊送回家,她成为了下任堂主 <br/>大家对于莱伊的评价和元老们所期待的不同.看到和堂员们一起击鼓跳舞的莱伊,剑客们异口同声的大喊\\"这是摈弃陈旧思想没有架子,平等对待大家的领导. 莱伊雄壮的鼓声,会使听到的人们生出莫大的勇气和力量,堂员们士气冲天,不知不觉间呼喊着莱伊的名字.很长一段时间来没有徒弟,技术几近失传的家族,一时间门庭若市.元老们一方面认为这是前堂主的计划,一方面还是希望泉奈能回来维持家族的正统.不知道对这些是否清楚的莱伊,今天仍然开心的为忙内徒弟的欢迎宴敲着鼓']],
                        chuli_re_boersaifunie: ['female', 'shen', 4, ['re_wanshen_chuli', 'zhongye_chuli', 'white_tichun', 'white_gqliangyi'], ['des:你说的对,但是<喵喵bug包>是由魔王喵自主研发的一款全新喵喵扩展.游戏发生在一个被称作「喵喵喵」的幻想世界,在这里,被喵选中的喵将被授予「喵之眼」,引导喵喵之力.你将扮演一位名为「喵喵」的神秘喵喵在自由的旅行中邂逅性格各异、能力独特的喵喵们,和他们一起击败喵喵,找回失散的喵喵——同时,逐步发掘「万神」的真相']],
                        chuli_sunyi: ['male', 'wu', 4, ['chuli_fuhai', 'duanliu_chuli'], []],
                        chuli_zhouchu: ['male', 'wu', 4, ['zhanhuo_chuli', 'zhaozhang_chuli'], []],
                        chulixin_zhouchu: ['male', 'jin', 4, ['chuli_chuhai', 'chuli_zhangming'], []],
                    },
                    characterTitle: {
                        chuli_sunshangxiang: "<font color='02FF00'>弓腰美姬</font>",
                        chuli_xiahouba: "<font color='0093FF'>棘途壮志</font>",
                        chuli_jiangcai: "<font color='FFF49B'>统将率才</font>",
                        chuli_liufeng: "<font color='FF4500'>骑虎之殇</font>",
                        chuli_vva: "<font color='F8FF00'>绝对魔王</font>",
                        chuli_zhugedan: "<font color='0093FF'>薤露蒿里</font>",
                        chuli_jiangwei: "<font color='FF4500'>天水麒麟</font>",
                        chuli_liuqi: "<font color='FFF49B'>局外而安</font>",
                        chuli_daqiao: "<font color='02FF00'>国色天香</font>",
                        chuli_sunyi: "<font color='02FF00'>地龙却行</font>",
                        chuli_caocao: "<font color='0093FF'>乱世奸雄</font>",
                        chuli_liubei: "<font color='FF4500'>汉昭烈帝</font>",
                        chuli_daweiwuwang: "<font color='0093FF'>位极人臣</font>",
                        chuli_zhugeguo: "<font color='FF4500'>禳星祈月</font>",
                        chuli_sunquan: "<font color='02FF00'>据险而守</font>",
                        chuli_weiduo: "<font color='F8FF00'>战场之约</font>",
                        chuli_furong: "<font color='FF4500'>危汉烈义</font>",
                        chuli_simafu: "<font color='0093FF'>劝敛藏锋</font>",
                        chuli_xushi: "<font color='02FF00'>暗诛伏贼</font>",
                        chuli_yuankui: "<font color='FFF49B'>权极专政</font>",
                        chuli_sunhuan: "<font color='02FF00'>断江截扼</font>",
                        chuli_wangyi: "<font color='0093FF'>贞洁烈女</font>",
                        chuli_luojun: "<font color='02FF00'>博文雅政</font>",
                        chuli_zhangxianzhong: "<font color='FFF49B'>大西王</font>",
                        chuli_tsdsj: "<font color='F8FF00'>天上的神酒</font>",
                        chuli_liuhai: "<font color='FFF49B'>金蟾道人</font>",
                        chuli_mali: "<font color='F8FF00'>星之歌</font>",
                        chuli_lizicheng: "<font color='FFF49B'>大顺永昌</font>",
                        chuli_sunce: "<font color='02FF00'>霸江横立</font>",
                        chuli_guohuai: "<font color='0093FF'>垂问秦雍</font>",
                        chuli_qinmi: "<font color='FF4500'>滔滔不绝</font>",
                        chuli_zhaoyun: "<font color='FF4500'>七进七出</font>",
                        chuli_gaoda: "<font color='F8FF00'>天龙出云</font>",
                        chuli_suolaka: "<font color='F8FF00'>众星之子</font>",
                        chuli_boersaifunie: "<font color='F8FF00'>疯狂万神殿</font>",
                        chuli_xushao: "<font color='FFF49B'>月旦雅评</font>",
                        chuli_laiyi: "<font color='F8FF00'>庆典化身</font>",
                        chuli_re_boersaifunie: "<font color='F8FF00'>喵喵猫猫</font>",
                    },
                    characterIntro: {
                    },
                    skill: {
                        zhanhuo_chuli: {
                            trigger: {
                                player: 'damageEnd',
                                source: 'damageSource',
                            },
                            forced: true,
                            filter(event, player) {
                                var target = event.player;
                                if (!event.source || event.source == event.player) return false;
                                if (target == player) target = event.source;
                                return player.hasCard((card) => lib.filter.cardDiscardable(card, player, 'zhanhuo_chuli'), 'hej') && target.isAlive();
                            },
                            content() {
                                'step 0';
                                var target = trigger.player;
                                if (target == player) target = trigger.source;
                                event.target = target;
                                var types = [];
                                if (player.hasCard((card) => lib.filter.cardDiscardable(card, player, 'zhanhuo_chuli') && get.type2(card) == 'basic', 'hej')) types.add('basic');
                                if (player.hasCard((card) => lib.filter.cardDiscardable(card, player, 'zhanhuo_chuli') && get.type2(card) == 'trick', 'hej')) types.add('trick');
                                if (player.hasCard((card) => lib.filter.cardDiscardable(card, player, 'zhanhuo_chuli') && get.type2(card) == 'equip', 'hej')) types.add('equip');
                                types.add('cancel2');
                                player
                                    .chooseControl(types)
                                    .set('prompt', get.prompt('zhanhuo_chuli'))
                                    .set('prompt2', '弃置你区域内一种类型的牌' + get.translation(target) + '也如此做');
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    var type = result.control;
                                    event.typex = type;
                                    var cards = player.getCards('hej', (card) => get.type2(card) == type && lib.filter.cardDiscardable(card, player, 'zhanhuo_chuli'));
                                    if (cards.length) player.discard(cards);
                                    event.countx = cards.length;
                                } else event.finish();
                                ('step 2');
                                var cards2 = target.getCards('hej', (card) => get.type2(card) == event.typex && lib.filter.cardDiscardable(card, target, 'zhanhuo_chuli'));
                                if (cards2.length) target.discard(cards2);
                                var source;
                                if (cards2.length != event.countx) {
                                    if (cards2.length > event.countx) source = target;
                                    else source = player;
                                    source.recover();
                                    (source == player ? target : player).damage(source);
                                }
                            },
                        },
                        zhaozhang_chuli: {
                            trigger: {
                                player: 'useCardAfter',
                            },
                            usable: 1,
                            intro: {
                                content(storage, player) {
                                    var str = '';
                                    str += '上次展示牌的牌名字数之和:' + (typeof storage == 'number' ? storage : '暂无');
                                    if (player.hasHistory('custom', (evt) => evt.name == 'zhaozhang_chuli')) {
                                        str += '<br/>本回合已展示过的牌名字数之和:';
                                        player.getHistory('custom', function (evt) {
                                            if (evt.name == 'zhaozhang_chuli') str += evt.count + '、';
                                        });
                                        str = str.slice(0, str.length - 1);
                                    }
                                    str += '<br/>加减规则:';
                                    if (player.storage.zhaozhang_chuli_zh) {
                                        str += '增/+◐减/-';
                                    } else {
                                        str += '增/-◑减/+';
                                    }
                                    return str;
                                },
                            },
                            prompt2(event, player) {
                                var count = 0;
                                player.getCards('h', (card) => (count += get.cardNameLength(card)));
                                var str = '展示手牌(当前牌名字数之和:' + count + ')';
                                var history = player.getAllHistory('custom', (evt) => evt.name == 'zhaozhang_chuli');
                                var num = get.cardNameLength(event.card);
                                if (history.length) {
                                    var evt = history[history.length - 1];
                                    if (evt.count == count) str += '无事发生';
                                    else str += '获得一张牌名字数为' + (evt.count > count ? (player.storage.zhaozhang_chuli_zh ? num + -1 : num + 1) : player.storage.zhaozhang_chuli_zh ? num + 1 : num - 1) + '的牌';
                                }
                                return str;
                            },
                            content() {
                                'step 0';
                                event.count = 0;
                                player.getCards('h', (card) => (event.count += get.cardNameLength(card)));
                                player.showHandcards();
                                player.getHistory('custom').push(event);
                                player.storage.zhaozhang_chuli = event.count;
                                player.markSkill('zhaozhang_chuli');
                                ('step 1');
                                var index = player.getAllHistory('custom', (evt) => evt.name == 'zhaozhang_chuli').indexOf(event);
                                if (index > 0) {
                                    var evt = player.getAllHistory('custom', (evt) => evt.name == 'zhaozhang_chuli')[index - 1];
                                } else {
                                    event.goto(4);
                                    return;
                                }
                                var cards = [],
                                    filter = function (card, bool) {
                                        var num = get.cardNameLength(trigger.card);
                                        if (bool) {
                                            return get.cardNameLength(card) == (player.storage.zhaozhang_chuli_zh ? num - 1 : num + 1);
                                        } else {
                                            return get.cardNameLength(card) == (player.storage.zhaozhang_chuli_zh ? num + 1 : num - 1);
                                        }
                                    },
                                    names = [];
                                if (evt.count != event.count) {
                                    while (true) {
                                        var cardx = get.cardPile(function (card2) {
                                            if (!filter(card2, evt.count > event.count)) return false;
                                            if (names.includes(card2.name) || cards.includes(card2)) return false;
                                            return true;
                                        });
                                        if (cardx) {
                                            cards.add(cardx);
                                            names.add(cardx.name);
                                        } else break;
                                    }
                                }
                                if (cards.length >= 1) {
                                    event.str = get.translation(player.name) + '发动了【昭彰】展示了..';
                                    var next = player.showCards(cards);
                                    next.setContent(function () { });
                                    event.dialog = ui.create.dialog(event.str);
                                    event.dialogid = lib.status.videoId++;
                                    event.dialog.videoId = event.dialogid;
                                    event.dialog.add(cards);
                                    game.broadcast(
                                        function (str, cards, id) {
                                            var dialog = ui.create.dialog(str);
                                            dialog.forcebutton = true;
                                            dialog.videoId = id;
                                            dialog.add(cards);
                                        },
                                        event.str,
                                        cards,
                                        event.dialogid
                                    );
                                    game.log(player, '展示了', cards);
                                    game.addVideo('showCards', player, [event.str, get.cardsInfo(cards)]);
                                } else {
                                    if (get.rand(1, 100) <= 10) player.chat('不着急拿牌,我先打个蛟先');
                                    else player.chat('未检索到符合条件的牌!');
                                    event.goto(4);
                                }
                                ('step 2');
                                var func = function (id) {
                                    var dialog = get.idDialog(id);
                                    if (dialog) dialog.content.firstChild.innerHTML = '昭彰:选择要获得的牌';
                                };
                                if (player == game.me) func(event.dialogid);
                                else if (player.isOnline()) player.send(func, event.dialogid);
                                player.chooseButton('昭彰:选择要获得的牌', true).set('dialog', event.dialog);
                                ('step 3');
                                if (event.dialogid && event.dialog) {
                                    game.broadcast('closeDialog', event.dialogid);
                                    event.dialog.close();
                                }
                                if (result.links?.length) player.gain(result.links[0], 'gain2');
                                ('step 4');
                                if (!player.hasHistory('custom', (evt) => evt.name == 'zhaozhang_chuli' && evt != event && evt.count == event.count)) player.getStat('triggerSkill').zhaozhang_chuli = 0;
                            },
                            group: 'zhaozhang_chuli_zh',
                            subSkill: {
                                zh: {
                                    trigger: {
                                        player: 'phaseUseBegin',
                                    },
                                    prompt2(event, player) {
                                        var str = '将【昭彰❶】中的[-1/+1]改为[+1/-1]';
                                        if (player.storage.zhaozhang_chuli_zh) str = '将【昭彰❶】中的[+1/-1]改为[-1/+1]';
                                        return str;
                                    },
                                    content() {
                                        player.storage.zhaozhang_chuli_zh = !player.storage.zhaozhang_chuli_zh;
                                        player.markSkill('zhaozhang_chuli');
                                    },
                                },
                            },
                        },
                        duanliu_chuli: {
                            audio: 'ext:魔王/audio:2',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return player.hp >= 1;
                            },
                            chooseToMove() {
                                'step 0';
                                if (event.chooseTime && _status.connectMode && !game.online) {
                                    event.time = lib.configOL.choose_timeout;
                                    game.broadcastAll(function (time) {
                                        lib.configOL.choose_timeout = time;
                                    }, event.chooseTime);
                                }
                                if (event.isMine()) {
                                    delete ui.selected.guanxing_button;
                                    var list = event.list,
                                        filterMove = event.filterMove,
                                        filterOk = event.filterOk;
                                    _status.imchoosing = true;
                                    var event = _status.event;
                                    event.settleed = false;
                                    event.dialog = ui.create.dialog(event.prompt || '请选择要操作的牌', 'hidden', 'forcebutton');
                                    event.switchToAuto = function () {
                                        if (!filterOk(event.moved)) {
                                            if (!event.forced) event._result = { bool: false };
                                            else event._result = 'ai';
                                        } else {
                                            event._result = {
                                                bool: true,
                                                moved: event.moved,
                                            };
                                        }
                                        event.dialog.close();
                                        if (ui.confirm) ui.confirm.close();
                                        game.resume();
                                        _status.imchoosing = false;
                                        setTimeout(function () {
                                            ui.arena.classList.remove('choose-to-move');
                                        }, 500);
                                    };
                                    event.dialog.classList.add('scroll1');
                                    event.dialog.classList.add('scroll2');
                                    event.dialog.classList.add('fullwidth');
                                    if (list.length > 1) {
                                        ui.arena.classList.add('choose-to-move');
                                        event.dialog.classList.add('fullheight');
                                    }
                                    event.moved = [];
                                    var buttonss = [];
                                    event.buttonss = buttonss;
                                    var updateButtons = function () {
                                        for (var i of buttonss) {
                                            event.moved[i._link] = get.links(Array.from(i.childNodes));
                                            if (i.textPrompt) i.previousSibling.innerHTML = '<div class="text center">' + i.textPrompt(event.moved[i._link]) + '</div>';
                                        }
                                        if (filterOk(event.moved)) {
                                            ui.create.confirm('o');
                                        } else {
                                            if (!event.forced) ui.create.confirm('c');
                                            else if (ui.confirm) ui.confirm.close();
                                        }
                                    };
                                    var clickButtons = function () {
                                        if (!ui.selected.guanxing_button) return;
                                        if (ui.selected.guanxing_button.parentNode == this) return;
                                        if (!filterMove(ui.selected.guanxing_button, this._link, event.moved)) return;
                                        ui.selected.guanxing_button.classList.remove('glow2');
                                        this.appendChild(ui.selected.guanxing_button);
                                        delete ui.selected.guanxing_button;
                                        updateButtons();
                                    };
                                    for (var i = 0; i < list.length; i++) {
                                        var tex = event.dialog.add('<div class="text center">' + list[i][0] + '</div>');
                                        tex.classList.add('choosetomove');
                                        var buttons = ui.create.div('.buttons', event.dialog.content, clickButtons);
                                        buttonss.push(buttons);
                                        buttons.classList.add('popup');
                                        buttons.classList.add('guanxing');
                                        buttons._link = i;
                                        if (list[i][1]) {
                                            if (get.itemtype(list[i][1]) == 'cards') {
                                                var cardsb = ui.create.buttons(list[i][1], 'card', buttons);
                                                if (list[i][2] && typeof list[i][2] == 'string') {
                                                    for (var ij of cardsb) ij.node.gaintag.innerHTML = get.translation(list[i][2]);
                                                }
                                            } else if (list[i][1].length == 2) {
                                                ui.create.buttons(list[i][1][0], list[i][1][1], buttons);
                                            }
                                        }
                                        if (list[i][2] && typeof list[i][2] == 'function') buttons.textPrompt = list[i][2];
                                    }
                                    //var tex=event.dialog.add('<div class="text center">点击两张牌以交换位置;点击一张牌并点击其他区域以移动卡牌</div>');
                                    //tex.classList.add('choosetomove');
                                    event.dialog.open();
                                    updateButtons();
                                    event.custom.replace.button = function (button) {
                                        var node = button.parentNode;
                                        if (!buttonss.includes(node)) return;
                                        if (!ui.selected.guanxing_button) {
                                            ui.selected.guanxing_button = button;
                                            button.classList.add('glow2');
                                            return;
                                        }
                                        if (ui.selected.guanxing_button == button) {
                                            button.classList.remove('glow2');
                                            delete ui.selected.guanxing_button;
                                            return;
                                        }
                                        if (!filterMove(button, ui.selected.guanxing_button, event.moved)) return;
                                        var par1 = ui.selected.guanxing_button.parentNode,
                                            ind1 = ui.selected.guanxing_button.nextSibling,
                                            par2 = button.parentNode,
                                            ind2 = button.nextSibling;
                                        ui.selected.guanxing_button.classList.remove('glow2');
                                        par1.insertBefore(button, ind1);
                                        par2.insertBefore(ui.selected.guanxing_button, ind2);
                                        delete ui.selected.guanxing_button;
                                        updateButtons();
                                    };
                                    event.custom.replace.confirm = function (bool) {
                                        if (bool)
                                            event._result = {
                                                bool: true,
                                                moved: event.moved,
                                            };
                                        else event._result = { bool: false };
                                        event.dialog.close();
                                        if (ui.confirm) ui.confirm.close();
                                        game.resume();
                                        _status.imchoosing = false;
                                        setTimeout(function () {
                                            ui.arena.classList.remove('choose-to-move');
                                        }, 500);
                                    };
                                    game.pause();
                                    game.countChoose();
                                    event.choosing = true;
                                } else if (event.isOnline()) {
                                    event.send();
                                } else {
                                    event.result = 'ai';
                                }
                                ('step 1');
                                if (event.time)
                                    game.broadcastAll(function (time) {
                                        lib.configOL.choose_timeout = time;
                                    }, event.time);
                                var result = event.result || result;
                                if ((!result || result == 'ai' || (event.forced && !result.bool)) && event.processAI) {
                                    var moved = event.processAI(event.list);
                                    if (moved)
                                        result = {
                                            bool: true,
                                            moved: moved,
                                        };
                                    else result = { bool: false };
                                }
                                event.result = result;
                            },
                            content() {
                                'step 0';
                                player.loseHp();
                                var cards = get.cards(player.maxHp);
                                var bottom = get.bottomCards(player.maxHp);
                                game.cardsGotoOrdering(cards.concat(bottom));
                                var next = player.chooseToMove();
                                next.set('list', [
                                    ['牌堆顶', cards],
                                    ['牌堆底', bottom],
                                ]);
                                next.set('prompt', '点击将牌移动到牌堆顶或牌堆底');
                                next.set('filterMove', function (from, to, moved) {
                                    if (typeof to == 'number') return false;
                                    return true;
                                });
                                next.setContent(lib.skill.duanliu_chuli.chooseToMove);
                                next.processAI =
                                    event.processAI ||
                                    function (list) {
                                        var cards = list[0][1],
                                            player = _status.event.player;
                                        const top = [], bottom = cards;
                                        for (const i of player.getCards('j')) {
                                            const judge = get.judge(i);
                                            bottom.sort((a, b) => (judge(b) - judge(a))); //价值高的牌放前面
                                            if (bottom.length) {
                                                top.push(bottom.shift());
                                            }
                                        }
                                        bottom.sort((a, b) => (get.value(b) - get.value(a))); //把价值高的牌放前面
                                        while (bottom.length) {
                                            top.push(bottom.shift());
                                        }
                                        return [top, bottom];
                                    };
                                ('step 1');
                                var top = result.moved[0];
                                var bottom = result.moved[1];
                                top.reverse();
                                for (var i = 0; i < top.length; i++) {
                                    ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                                }
                                while (bottom.length) {
                                    ui.cardPile.appendChild(bottom.pop());
                                }
                                player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(bottom.length) + '下');
                                game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
                                game.updateRoundNumber();
                            },
                        },
                        chuli_fuhai: {
                            audio: 'ext:魔王/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            noForceDie: true,
                            content() {
                                'step 0';
                                var cards = [],
                                    top = [],
                                    bottom = [];
                                if (player.hp >= 1) top.addArray(get.cards(player.hp));
                                if (player.getDamagedHp()) bottom.addArray(get.bottomCards(player.getDamagedHp()));
                                event.top = top.slice(0);
                                event.bottom = bottom.slice(0);
                                while (top.length) {
                                    ui.cardPile.insertBefore(top.pop(), ui.cardPile.firstChild);
                                }
                                while (bottom.length) {
                                    ui.cardPile.appendChild(bottom.pop());
                                }
                                game.updateRoundNumber();
                                cards = cards.concat(event.top).concat(event.bottom);
                                event.str = get.translation(player.name) + '发动了【覆海】展示了..';
                                var next = player.showCards(cards);
                                next.setContent(function () { });
                                event.dialog = ui.create.dialog(event.str);
                                event.dialogid = lib.status.videoId++;
                                event.dialog.videoId = event.dialogid;
                                if (event.top && event.top.length) {
                                    event.dialog.addText('牌堆顶的牌');
                                    event.dialog.add(event.top);
                                }
                                if (event.bottom && event.bottom.length) {
                                    event.dialog.addText('牌堆底的牌');
                                    event.dialog.add(event.bottom);
                                }
                                game.broadcast(
                                    function (str, top, bottom, id) {
                                        var dialog = ui.create.dialog(str);
                                        dialog.forcebutton = true;
                                        dialog.videoId = id;
                                        if (top && top.length) {
                                            dialog.addText('牌堆顶的牌');
                                            dialog.add(top);
                                        }
                                        if (bottom && bottom.length) {
                                            dialog.addText('牌堆底的牌');
                                            dialog.add(bottom);
                                        }
                                    },
                                    event.str,
                                    top,
                                    bottom,
                                    event.dialogid
                                );
                                game.log(player, '展示了', cards);
                                game.addVideo('showCards', player, [event.str, get.cardsInfo(cards)]);
                                if (
                                    cards.some(function (i) {
                                        return player.hasUseTarget(i) && lib.filter.cardUsable(i, player, event.getParent('chooseToUse'));
                                    })
                                ) {
                                    var func = function (id) {
                                        var dialog = get.idDialog(id);
                                        if (dialog) dialog.content.firstChild.innerHTML = '覆海:请选择要使用的牌';
                                    };
                                    if (player == game.me) func(event.dialogid);
                                    else if (player.isOnline()) player.send(func, event.dialogid);
                                    player
                                        .chooseButton('覆海:你可以使用其中一张牌')
                                        .set('dialog', event.dialog)
                                        .set('filterButton', function (button) {
                                            return player.hasUseTarget(button.link) && lib.filter.cardUsable(button.link, player, _status.event.getParent('chooseToUse'));
                                        });
                                } else event._result = { bool: false };
                                ('step 1');
                                game.broadcast('closeDialog', event.dialogid);
                                event.dialog.close();
                                if (result.links?.length) {
                                    event.card = result.links[0];
                                    player.chooseUseTarget(event.card, true);
                                } else event.finish();
                                ('step 2');
                                var cards = [],
                                    top = [],
                                    bottom = [];
                                if (player.hp >= 1) top.addArray(get.cards(player.hp));
                                if (player.getDamagedHp()) bottom.addArray(get.bottomCards(player.getDamagedHp()));
                                if (get.color(top) != 'none' && get.color(bottom) != 'none' && get.color(top) != get.color(bottom)) player.getStat('skill').chuli_fuhai = 0;
                                while (top.length) {
                                    ui.cardPile.insertBefore(top.pop(), ui.cardPile.firstChild);
                                }
                                while (bottom.length) {
                                    ui.cardPile.appendChild(bottom.pop());
                                }
                                game.updateRoundNumber();
                                ('step 3');
                                if (event.top.includes(event.card)) {
                                    event.discard = false;
                                } else {
                                    event.draw = false;
                                }
                                ('step 4');
                                if (event.draw !== false) {
                                    player.chooseTarget('覆海:令一名角色摸' + player.hp + '张牌', true);
                                } else event.goto(6);
                                ('step 5');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    player.line(target);
                                    target.draw(player.hp);
                                }
                                ('step 6');
                                if (event.discard !== false && game.hasPlayer((current) => current.countCards('he'))) {
                                    player.chooseTarget('覆海:令一名角色弃置' + player.getDamagedHp() + '张牌', true, function (c, p, t) {
                                        return t.countCards('he');
                                    });
                                } else event.goto(8);
                                ('step 7');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    player.line(target);
                                    target.chooseToDiscard('he', true, player.getDamagedHp());
                                }
                                ('step 8');
                                if (event.top.includes(event.card)) {
                                    player.loseHp();
                                } else {
                                    player.recover();
                                }
                            },
                        },
                        re_wanshen_chuli: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                var skills = player.getSkills(null, false, false).filter(function (i) {
                                    var info = get.info(i);
                                    if (!lib.translate[i] || !lib.translate[i + '_info']) return false;
                                    if (player.name1 && lib.character[player.name1] && lib.character[player.name1][3].includes(i)) return false;
                                    if (player.name2 && lib.character[player.name2] && lib.character[player.name2][3].includes(i)) return false;
                                    return info && !info.charlotte;
                                });
                                return skills.length >= 1;
                            },
                            marktext: '废',
                            intro: {
                                name: '废案',
                                content(storage, player) {
                                    return '『' + storage.length + '』条废案:<br/>' + (storage && storage.length >= 1 ? get.translation(storage) : '暂无');
                                },
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var dialog = ui.create.dialog('缝合:你可以将任意个技能置入<废案>中', 'hidden');
                                    var skills = player.getSkills(null, false, false).filter(function (i) {
                                        var info = get.info(i);
                                        if (!lib.translate[i] || !lib.translate[i + '_info']) return false;
                                        if (player.name1 && lib.character[player.name1] && lib.character[player.name1][3].includes(i)) return false;
                                        if (player.name2 && lib.character[player.name2] && lib.character[player.name2][3].includes(i)) return false;
                                        return info && !info.charlotte;
                                    });
                                    var list = [];
                                    for (var skill of skills) {
                                        list.push([skill, '<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">【' + get.translation(skill) + '】</div><div>' + lib.translate[skill + '_info'] + '</div></div>']);
                                    }
                                    dialog.add([list, 'textbutton']);
                                    return dialog;
                                },
                                select() {
                                    var player = _status.event.player;
                                    var skills = player.getSkills(null, false, false).filter(function (i) {
                                        var info = get.info(i);
                                        if (!lib.translate[i] || !lib.translate[i + '_info']) return false;
                                        if (player.name1 && lib.character[player.name1] && lib.character[player.name1][3].includes(i)) return false;
                                        if (player.name2 && lib.character[player.name2] && lib.character[player.name2][3].includes(i)) return false;
                                        return info && !info.charlotte;
                                    });
                                    return [1, skills.length];
                                },
                                check: () => 1 + Math.random(),
                                backup(links, player) {
                                    var next = get.copy(lib.skill.re_wanshen_chuli_contentx);
                                    next.skillsx = links;
                                    next.audio = 're_wanshen_chuli';
                                    return next;
                                },
                                prompt(links) {
                                    return '';
                                },
                            },
                            subSkill: {
                                backup: {},
                                contentx: {
                                    delay: false,
                                    content() {
                                        'step 0';
                                        var skills = lib.skill.re_wanshen_chuli_backup.skillsx;
                                        for (var i of skills) player.removeAdditionalSkill('re_wanshen_chuli', i);
                                        player.removeSkill(skills);
                                        if (!player.storage.re_wanshen_chuli) player.storage.re_wanshen_chuli = [];
                                        player.storage.re_wanshen_chuli.addArray(skills);
                                        player.markSkill('re_wanshen_chuli');
                                        event.re_wanshen_chuli_changeMark = skills.length;
                                        event.trigger('re_wanshen_chuli_changeMark');
                                        ('step 1');
                                        var skills = player.getSkills(null, false, false).filter(function (i) {
                                            var info = get.info(i);
                                            if (!lib.translate[i] || !lib.translate[i + '_info']) return false;
                                            if (player.name1 && lib.character[player.name1] && lib.character[player.name1][3].includes(i)) return false;
                                            if (player.name2 && lib.character[player.name2] && lib.character[player.name2][3].includes(i)) return false;
                                            return info && !info.charlotte;
                                        });
                                        if (typeof player.storage.zhongye_chuli == 'number' && skills.length < player.storage.zhongye_chuli) {
                                            var num = player.storage.zhongye_chuli - skills.length;
                                            event.count = num;
                                            if (player.storage.re_wanshen_chuli.length >= num) {
                                                player.chooseButton(
                                                    [
                                                        '请选择一项',
                                                        [
                                                            [
                                                                ['ramdom', '随机获得' + num + '个技能'],
                                                                ['choose', '从<废案>中选择获得' + num + '个技能'],
                                                            ],
                                                            'textbutton',
                                                        ],
                                                    ],
                                                    true
                                                );
                                            } else event._result = { bool: true, links: ['random'] };
                                        } else event.finish();
                                        ('step 2');
                                        if (result.links[0] == 'choose') {
                                            var list = [];
                                            for (var skill of player.storage.re_wanshen_chuli) {
                                                list.push([skill, '<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">【' + get.translation(skill) + '】</div><div>' + lib.translate[skill + '_info'] + '</div></div>']);
                                            }
                                            player.chooseButton(['选择从<废案>中获得' + event.count + '个技能', [list, 'textbutton']], event.count, true);
                                        } else {
                                            lib.skill.wanshen_chuli.addSKILLs(player, event.count, false, 're_wanshen_chuli');
                                            event.finish();
                                        }
                                        ('step 3');
                                        if (result.links?.length) {
                                            var skills = result.links;
                                            player.storage.re_wanshen_chuli.removeArray(skills);
                                            if (!player.storage.re_wanshen_chuli.length) player.unmarkSkill('re_wanshen_chuli');
                                            else player.markSkill('re_wanshen_chuli');
                                            player.addAdditionalSkill('re_wanshen_chuli', skills, true);
                                            for (var i of skills) {
                                                game.log(player, '获得了技能', '#g【' + get.translation(i) + '】');
                                            }
                                            event.re_wanshen_chuli_changeMark = skills.length;
                                            event.trigger('re_wanshen_chuli_changeMark');
                                        }
                                    },
                                },
                            },
                        },
                        zhongye_chuli: {
                            trigger: {
                                player: 're_wanshen_chuli_changeMark',
                            },
                            forced: true,
                            filter(event, player) {
                                return typeof event.re_wanshen_chuli_changeMark == 'number';
                            },
                            content() {
                                player.draw(trigger.re_wanshen_chuli_changeMark);
                            },
                            intro: {
                                content: '灵感#条',
                            },
                            group: 'zhongye_chuli_init',
                            subSkill: {
                                init: {
                                    trigger: {
                                        global: 'phaseBefore',
                                        player: 'enterGame',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.name != 'phase' || game.phaseNumber == 0;
                                    },
                                    async content(event, trigger, player) {
                                        var list = Object.keys(lib.character).randomGets(5);
                                        var skills = [];
                                        for (var i of list) {
                                            skills.addArray(lib.character[i][3]);
                                        }
                                        skills = skills.filter((i) => lib.skill[i]);
                                        var skill1 = skills.slice();
                                        for (var i = 0; i < skills.length; i++) {
                                            skills[i] = [skills[i], get.translation(skills[i])];
                                        }
                                        if (skills.length >= 1) {
                                            const result = await player
                                                .chooseButton(['灵感', [list, 'character'], [skills, 'tdnodes']], true, [1, skills.length])
                                                .set('skill1', skill1)
                                                .set('filterButton', (button) => _status.event.skill1.includes(button.link))
                                                .set('ai', () => Math.random())
                                                .forResult();
                                            if (result.links?.length) {
                                                for (var i of result.links) {
                                                    game.log(player, '获得了技能', '#g【' + get.translation(i) + '】');
                                                }
                                                player.addAdditionalSkill('re_wanshen_chuli', result.links, true);
                                                player.loseMaxHp(result.links.length);
                                                player.storage.zhongye_chuli = result.links.length;
                                                player.markSkill('zhongye_chuli');
                                            }
                                        }
                                    }, //QQQ
                                    _priority: 10,
                                },
                            },
                        },
                        fuming_chuli: {
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                var index = player.getHistory('useCard').indexOf(event.parent);
                                if (
                                    player.hasHistory('useCard', function (evt) {
                                        if (event.parent == evt) return false;
                                        if (player.getHistory('useCard').indexOf(event) > index) return false;
                                        return evt.targets.includes(event.target);
                                    })
                                )
                                    return false;
                                var history = player.actionHistory;
                                if (history.length <= 1 || history[history.length - 2].useCard.length <= 0) return false;
                                for (var i of history[history.length - 2].useCard) {
                                    if (i.targets.includes(event.target)) return true;
                                }
                                return false;
                            },
                            forced: true,
                            logTarget: 'target',
                            content() {
                                'step 0';
                                event.target = trigger.target;
                                trigger.target.damage('thunder');
                                ('step 1');
                                if (target.countCards('e')) {
                                    var list = [];
                                    list.add(target.next);
                                    list.add(target.previous);
                                    player.line(list, 'thunder');
                                    for (var i of list) i.damage('thunder');
                                    for (var i of list) player.discardPlayerCard('he', true, i);
                                }
                            },
                            group: 'fuming_chuli_draw',
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.skill == 'kuanglei_chuli';
                                    },
                                    content() {
                                        var num = 0;
                                        for (var i of game.players) {
                                            var count = i.countCards('h');
                                            if (num < count) num = count;
                                        }
                                        player.drawTo(num + 1);
                                    },
                                },
                            },
                        },
                        kuanglei_chuli: {
                            init(player, skill) {
                                player.addSkillBlocker(skill);
                            },
                            skillBlocker(skill, player) {
                                var evt = _status.event.getParent('phase');
                                return skill == 'kuanglei_chuli' && evt && evt.skill == 'kuanglei_chuli';
                            },
                            enable: 'phaseUse',
                            filter(event, player) {
                                var num = player.getHistory('useSkill', (evt) => evt.skill == 'kuanglei_chuli_backup').length;
                                return player.countCards('he') >= num;
                            },
                            marktext: '咚',
                            intro: {
                                name: '咚(擎擂)',
                                name2: '咚',
                                content: 'mark',
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var dialog = ui.create.dialog('擎擂:你使用的下一张牌', 'hidden');
                                    dialog.add([
                                        [
                                            [0, '无距离限制'],
                                            [1, '无次数限制'],
                                            [2, '不可被响应'],
                                        ],
                                        'textbutton',
                                    ]);
                                    return dialog;
                                },
                                filter(button, player) {
                                    return true;
                                },
                                check: () => 1 + Math.random(),
                                backup(links) {
                                    var next = get.copy(lib.skill.kuanglei_chuli_contentx);
                                    next.kuanglei_chuli_index = links[0];
                                    return next;
                                },
                                prompt(links, player) {
                                    var str = '';
                                    var num = player.getHistory('useSkill', (evt) => evt.skill == 'kuanglei_chuli_backup').length;
                                    switch (links[0]) {
                                        case 0:
                                            str = '无距离限制';
                                            break;
                                        case 1:
                                            str = '无次数限制';
                                            break;
                                        case 2:
                                            str = '不可被响应';
                                            break;
                                    }
                                    return '弃置' + num + '张牌你使用的下一张牌' + str;
                                },
                            },
                            group: 'kuanglei_chuli_mark',
                            subSkill: {
                                mark2: {
                                    mark: true,
                                    marktext: '⚡',
                                    intro: {
                                        content: '当前正处于〖雷云〗中',
                                    },
                                },
                                mark: {
                                    trigger: {
                                        player: ['useCard', 'respond'],
                                        global: 'phaseAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.name == 'phase') return player.countMark('kuanglei_chuli') >= 1;
                                        return player.countMark('kuanglei_chuli') < game.countPlayer();
                                    },
                                    content() {
                                        if (trigger.name == 'phase') {
                                            var num = player.countMark('kuanglei_chuli');
                                            player.removeMark('kuanglei_chuli', num);
                                            if (num >= game.countPlayer()) {
                                                var next = player.phase('kuanglei_chuli');
                                                var nextx = game.createEvent('kuanglei_chuli_mark2', false, next);
                                                nextx.player = player;
                                                nextx.setContent(function () {
                                                    player.addTempSkill('kuanglei_chuli_mark2', function (event, player, name) {
                                                        if (event.player != player && name == 'phaseBegin') return true;
                                                        return name == 'phaseAfter' && event.skill == 'kuanglei_chuli';
                                                    });
                                                });
                                            } else player.draw(num);
                                        } else player.addMark('kuanglei_chuli');
                                    },
                                },
                                effect: {
                                    trigger: {
                                        player: 'useCard1',
                                    },
                                    silent: true,
                                    charlotte: true,
                                    intro: {
                                        content(storage) {
                                            if (storage) {
                                                var str = '你使用的下一张牌:';
                                                for (var i of storage) {
                                                    switch (i) {
                                                        case 0:
                                                            str += '无距离限制、';
                                                            break;
                                                        case 1:
                                                            str += '无次数限制、';
                                                            break;
                                                        case 2:
                                                            str += '不可被响应、';
                                                            break;
                                                    }
                                                }
                                                str = str.slice(0, str.length - 1);
                                            }
                                            return str || '暂无';
                                        },
                                    },
                                    content() {
                                        if (player.storage.kuanglei_chuli_effect && player.storage.kuanglei_chuli_effect.includes(2)) {
                                            trigger.directHit.addArray(game.filterPlayer2());
                                        }
                                        player.removeSkill(event.name);
                                    },
                                    mod: {
                                        targetInRange(card, player, target) {
                                            if (player.storage.kuanglei_chuli_effect && player.storage.kuanglei_chuli_effect.includes(0)) {
                                                return true;
                                            }
                                        },
                                        cardUsable(card, player, num) {
                                            if (player.storage.kuanglei_chuli_effect && player.storage.kuanglei_chuli_effect.includes(1)) return Infinity;
                                        },
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: 1,
                                },
                                backup: {},
                                contentx: {
                                    delay: false,
                                    filterCard(card, player) {
                                        var num = player.getHistory('useSkill', (evt) => evt.skill == 'kuanglei_chuli_backup').length;
                                        if (num == 0) return false;
                                        return true;
                                    },
                                    selectCard() {
                                        var player = _status.event.player;
                                        var num = player.getHistory('useSkill', (evt) => evt.skill == 'kuanglei_chuli_backup').length;
                                        if (num == 0) return -1;
                                        return num;
                                    },
                                    position: 'he',
                                    content() {
                                        var index = lib.skill.kuanglei_chuli_backup.kuanglei_chuli_index;
                                        player.addSkill('kuanglei_chuli_effect');
                                        if (!player.storage.kuanglei_chuli_effect) player.storage.kuanglei_chuli_effect = [];
                                        player.storage.kuanglei_chuli_effect.add(index);
                                        player.markSkill('kuanglei_chuli_effect');
                                    },
                                },
                            },
                        },
                        yaping_chuli: {
                            trigger: {
                                global: 'phaseBegin',
                            },
                            logTarget: 'player',
                            audio: 'ext:魔王/audio:7',
                            filter(event, player) {
                                return player.storage.yaping_chuli && player.storage.yaping_chuli.includes(event.player);
                            },
                            content() {
                                'step 0';
                                if (!event.backupx) {
                                    var num = player.storage.yaping_chuli.filter((i) => i.isAlive()).slice(0).length;
                                    if (!_status.characterlist) {
                                        lib.skill.pingjian.initList();
                                    }
                                    var list = _status.characterlist
                                        .filter(function (i) {
                                            let info = lib.character[i];
                                            return (
                                                info &&
                                                info[1] == trigger.player.group &&
                                                info[3] &&
                                                info[3].filter(function (i) {
                                                    var info = get.info(i);
                                                    if (!info) return false;
                                                    if (info.charlotte || (info.unique && !info.gainable) || info.juexingji || info.limited || info.zhuSkill || info.hiddenSkill || info.dutySkill) return false;
                                                    return true;
                                                }).length >= 1
                                            );
                                        })
                                        .randomGets(num);
                                    event.list = list;
                                }
                                if (event.backupx || list.length) {
                                    if (!event.backupx) {
                                        event.videoId = lib.status.videoId++;
                                        event.dialog = ui.create.dialog('雅评:请选择一张武将牌', [list, 'character']);
                                        event.dialog.videoId = event.videoId;
                                        if (player.isOnline2()) {
                                            player.send(
                                                function (cards, id) {
                                                    var dialog = ui.create.dialog('雅评:请选择一张武将牌', [cards, 'character']);
                                                    dialog.videoId = id;
                                                },
                                                list,
                                                event.videoId
                                            );
                                        }
                                    }
                                    if (event.list.length > 1) {
                                        var next = player.chooseButton(true).set('dialog', event.videoId);
                                    } else event._result = { bool: true, links: event.list.slice(0) };
                                } else event.finish();
                                player.markSkill('yaping_chuli');
                                ('step 1');
                                if (result.links?.length) {
                                    event.card = result.links[0];
                                    var func = function (card, id) {
                                        var dialog = get.idDialog(id);
                                        if (dialog) {
                                            for (var i = 0; i < dialog.buttons.length; i++) {
                                                if (dialog.buttons[i].link == card) {
                                                    dialog.buttons[i].classList.add('selectedx');
                                                } else {
                                                    dialog.buttons[i].classList.add('unselectable');
                                                }
                                            }
                                        }
                                    };
                                    if (player.isOnline2()) {
                                        player.send(func, event.card, event.videoId);
                                    } else if (event.isMine()) {
                                        func(event.card, event.videoId);
                                    }
                                    var list = [];
                                    list.addArray(
                                        lib.character[event.card][3]
                                            .filter(function (i) {
                                                var info = get.info(i);
                                                if (!info) return false;
                                                if (info.charlotte || (info.unique && !info.gainable) || info.juexingji || info.limited || info.zhuSkill || info.hiddenSkill || info.dutySkill) return false;
                                                return true;
                                            })
                                            .slice(0)
                                    );
                                    if (game.hasPlayer((current) => current.group == trigger.player.group && player.storage.yaping_chuli.includes(current))) list.push('全部获得');
                                    if (event.list.length > 1) list.push('返回');
                                    player.chooseControl(list);
                                } else event.finish();
                                ('step 2');
                                if (result.control == '返回') {
                                    var func = function (id) {
                                        var dialog = get.idDialog(id);
                                        if (dialog) {
                                            for (var i = 0; i < dialog.buttons.length; i++) {
                                                dialog.buttons[i].classList.remove('selectedx');
                                                dialog.buttons[i].classList.remove('unselectable');
                                            }
                                        }
                                    };
                                    if (player.isOnline2()) {
                                        player.send(func, event.videoId);
                                    } else if (event.isMine()) {
                                        func(event.videoId);
                                    }
                                    event.backupx = true;
                                    event.goto(0);
                                    return;
                                }
                                if (player.isOnline2()) {
                                    player.send('closeDialog', event.videoId);
                                }
                                event.dialog.close();
                                delete _status.noclearcountdown;
                                if (!_status.noclearcountdown) {
                                    game.stopCountChoose();
                                }
                                if (result.control == '全部获得') {
                                    var targets = game.filterPlayer((current) => current.group == trigger.player.group && player.storage.yaping_chuli.includes(current));
                                    var skills = lib.character[event.card].slice(0)[3];
                                    player.storage.yaping_chuli.removeArray(targets);
                                    if (!player.storage.yaping_chuli_no) player.storage.yaping_chuli_no = [];
                                    player.storage.yaping_chuli_no.add(trigger.player.group);
                                    player.markSkill('yaping_chuli');
                                    for (var i of skills) {
                                        var info = get.info(i);
                                        if (info.zhuSkill) {
                                            if (!player.storage.zhuSkill_yaping_chuli) player.storage.zhuSkill_yaping_chuli = [];
                                            player.storage.zhuSkill_yaping_chuli.add(i);
                                        }
                                        player.addSkillLog(i);
                                    }
                                } else {
                                    var info = get.info(result.control);
                                    player.storage.yaping_chuli.remove(trigger.player);
                                    if (info.zhuSkill) {
                                        if (!player.storage.zhuSkill_yaping_chuli_temp) player.storage.zhuSkill_yaping_chuli_temp = [];
                                        player.storage.zhuSkill_yaping_chuli_temp.add(result.control);
                                    }
                                    if (!player.storage.yaping_chuli_map) player.storage.yaping_chuli_map = {};
                                    if (player.storage.yaping_chuli_map[trigger.player.group]) {
                                        var skills = player.additionalSkills.yaping_chuli,
                                            skill = player.storage.yaping_chuli_map[trigger.player.group];
                                        if (skills && skills.includes(skill)) {
                                            player.draw();
                                        }
                                        var bool = true;
                                        for (var i in player.storage.yaping_chuli_map) {
                                            if (i == trigger.player.group) continue;
                                            if (player.storage.yaping_chuli_map[i] == skill) {
                                                bool = false;
                                                break;
                                            }
                                        }
                                        if (bool) {
                                            player.removeAdditionalSkill('yaping_chuli', skill);
                                        }
                                    }
                                    game.log(player, '获得了', '#g【' + get.translation(result.control) + '】');
                                    player.addAdditionalSkill('yaping_chuli', [result.control], true);
                                    player.storage.yaping_chuli_map[trigger.player.group] = result.control;
                                }
                            },
                            intro: {
                                content(storage, player) {
                                    var str = '已邀请的客人:';
                                    if (storage.filter((i) => i.isAlive()).length >= 1) {
                                        str += get.translation(storage.filter((i) => i.isAlive()));
                                    } else str += '暂无';
                                    if (player.storage.yaping_chuli_no && game.hasPlayer((current) => player.storage.yaping_chuli_no.includes(current.group))) {
                                        str += '<br/>';
                                        str += get.translation(game.filterPlayer((current) => player.storage.yaping_chuli_no.includes(current.group)));
                                        str += '不能参加魔王的银趴!';
                                    }
                                    return str;
                                },
                                markcount(storage) {
                                    return storage.filter((i) => i.isAlive()).length;
                                },
                            },
                        },
                        yaofu_chuli: {
                            trigger: {
                                global: 'roundStart',
                            },
                            audio: 'ext:魔王/audio:3',
                            forced: true,
                            filter(event, player) {
                                return game.roundNumber > 1 && ((player.storage.yaping_chuli && player.storage.yaping_chuli.length >= 1) || game.hasPlayer((current) => !player.storage.yaping_chuli_no || !player.storage.yaping_chuli_no.includes(current.group)) || (player.additionalSkills.yaping_chuli && player.additionalSkills.yaping_chuli.length >= 1));
                            },
                            content() {
                                player.storage.yaping_chuli = game.filterPlayer((current) => !player.storage.yaping_chuli_no || !player.storage.yaping_chuli_no.includes(current.group));
                                var skills = player.additionalSkills.yaping_chuli;
                                if (player.storage.zhuSkill_yaping_chuli_temp) delete player.storage.zhuSkill_yaping_chuli_temp;
                                player.storage.yaping_chuli_map = {};
                                player.removeAdditionalSkill('yaping_chuli');
                                if (player.storage.yaping_chuli.length >= 1) player.markSkill('yaping_chuli');
                                else player.unmarkSkill('yaping_chuli');
                            },
                            group: 'yaofu_chuli_init',
                            subSkill: {
                                init: {
                                    trigger: {
                                        global: 'phaseBefore',
                                        player: 'enterGame',
                                    },
                                    forced: true,
                                    audio: 'yaofu_chuli',
                                    filter(event, player) {
                                        return event.name != 'phase' || game.phaseNumber == 0;
                                    },
                                    logTarget(event, player) {
                                        return game.filterPlayer((current) => !player.storage.yaping_chuli_no || !player.storage.yaping_chuli_no.includes(current.group));
                                    },
                                    content() {
                                        player.storage.yaping_chuli = game.filterPlayer((current) => !player.storage.yaping_chuli_no || !player.storage.yaping_chuli_no.includes(current.group));
                                        player.markSkill('yaping_chuli');
                                    },
                                },
                            },
                        },
                        funie_chuli: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            audio: 'ext:魔王/audio:3',
                            filter(event, player) {
                                return typeof player.storage.wanshen_chuli == 'number' && player.storage.wanshen_chuli != player.additionalSkills.wanshen_chuli.length;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (player.additionalSkills.wanshen_chuli.length > player.storage.wanshen_chuli) {
                                    player.chooseBool('福涅', '是否减一点体力上限令本技能的X+1？当前X为' + player.storage.wanshen_chuli + '当前拥有' + player.additionalSkills.wanshen_chuli.length + '个<殿>');
                                } else event.goto(2);
                                ('step 1');
                                if (result.bool) {
                                    player.loseMaxHp();
                                    player.storage.wanshen_chuli++;
                                }
                                ('step 2');
                                if (player.storage.wanshen_chuli != player.additionalSkills.wanshen_chuli.length) {
                                    if (player.storage.wanshen_chuli > player.additionalSkills.wanshen_chuli.length) {
                                        var num = player.storage.wanshen_chuli - player.additionalSkills.wanshen_chuli.length;
                                        lib.skill.wanshen_chuli.addSKILLs(player, num);
                                        event.finish();
                                    } else {
                                        var num = player.additionalSkills.wanshen_chuli.length - player.storage.wanshen_chuli;
                                        var list = [];
                                        for (var skill of player.additionalSkills.wanshen_chuli) {
                                            list.push([skill, '<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">【' + get.translation(skill) + '】</div><div>' + lib.translate[skill + '_info'] + '</div></div>']);
                                        }
                                        var next = player.chooseButton(['请选择失去' + num + '个技能', [list, 'textbutton']]);
                                        next.set('forced', true);
                                        next.set('selectButton', num);
                                        next.set('skills', skills);
                                    }
                                } else event.finish();
                                ('step 3');
                                if (result.links?.length) {
                                    var skills = result.links.slice(0);
                                    for (var i of skills) {
                                        player.removeAdditionalSkill('wanshen_chuli', i);
                                    }
                                    event.change_wanshen_chuli = skills.length;
                                    event.trigger('change_wanshen_chuli');
                                    game.log(player, '失去了技能', '#g' + get.translation(skills));
                                }
                            },
                            group: 'funie_chuli_draw',
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: 'change_wanshen_chuli',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.change_wanshen_chuli >= 1;
                                    },
                                    content() {
                                        player.draw(trigger.change_wanshen_chuli);
                                    },
                                },
                            },
                        },
                        wanshen_chuli: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.additionalSkills.wanshen_chuli && player.additionalSkills.wanshen_chuli.length >= 1;
                            },
                            marktext: '殿',
                            intro: {
                                markcount(storage, player) {
                                    var str = '?';
                                    var num = 0;
                                    if (typeof storage == 'number') str = storage;
                                    if (player.additionalSkills.wanshen_chuli && player.additionalSkills.wanshen_chuli.length >= 1) {
                                        num = player.additionalSkills.wanshen_chuli.length;
                                    }
                                    return num + '/' + str;
                                },
                                content(storage, player) {
                                    var str = '?';
                                    var strx = '';
                                    var num = 0;
                                    if (typeof storage == 'number') str = storage;
                                    if (player.additionalSkills.wanshen_chuli && player.additionalSkills.wanshen_chuli.length >= 1) {
                                        strx = '当前拥有的技能:' + get.translation(player.additionalSkills.wanshen_chuli);
                                        num = player.additionalSkills.wanshen_chuli.length;
                                    }
                                    return '殿:' + strx + '<br/>当前上限:' + num + '/' + str;
                                },
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var dialog = ui.create.dialog('万神:你可以失去任意个技能并获得等量的技能', 'hidden');
                                    var skills = player.additionalSkills.wanshen_chuli.slice(0);
                                    for (var i = 0; i < skills.length; i++) {
                                        skills[i] = [skills[i], get.translation(skills[i])];
                                    }
                                    dialog.add([skills, 'tdnodes']);
                                    return dialog;
                                },
                                select() {
                                    return [1, _status.event.player.additionalSkills.wanshen_chuli.length];
                                },
                                check: () => 1 + Math.random(),
                                backup(links, player) {
                                    var next = get.copy(lib.skill.wanshen_chuli_contentx);
                                    next.skillsx = links;
                                    next.audio = 'wanshen_chuli_audio';
                                    if (links.length == player.additionalSkills.wanshen_chuli.length) next.audio = 'wanshen_chuli_all';
                                    return next;
                                },
                                prompt(links) {
                                    return '';
                                },
                            },
                            addSKILLs(player, num, bool, source) {
                                var skills = [];
                                if (!_status.characterlist) {
                                    lib.skill.pingjian.initList();
                                }
                                for (var i of _status.characterlist) {
                                    var info = lib.character[i];
                                    if (info && info[3]) skills.addArray(info[3]);
                                }
                                skills = skills.filter(function (i) {
                                    var info = lib.skill[i];
                                    if (!info) return false;
                                    //if(info.charlotte||(info.unique&&!info.gainable)||info.juexingji||info.limited||info.zhuSkill||info.hiddenSkill||info.dutySkill) return false;
                                    if (info.charlotte) return false;
                                    if (player.hasSkill(i)) return false;
                                    return true;
                                });
                                if (!skills.length) return [];
                                if (typeof num != 'number') {
                                    var num = 1;
                                }
                                if (!source) {
                                    source = 'wanshen_chuli';
                                }
                                var add = skills.randomGets(num);
                                for (var i of add) {
                                    game.log(player, '获得了技能', '#g【' + get.translation(i) + '】');
                                }
                                if (bool) player.addSkill(add);
                                else player.addAdditionalSkill(source, add, true);
                                return add;
                            },
                            group: 'wanshen_chuli_init',
                            subSkill: {
                                backup: {},
                                audio: {
                                    audio: 'ext:魔王/audio:3',
                                },
                                all: {
                                    audio: 'ext:魔王/audio:4',
                                },
                                contentx: {
                                    delay: false,
                                    content() {
                                        'step 0';
                                        player.storage.wanshen_chuli = player.additionalSkills.wanshen_chuli.length;
                                        ('step 1');
                                        var skills = lib.skill.wanshen_chuli_backup.skillsx;
                                        var num = skills.length;
                                        for (var i of skills) {
                                            var info = get.info(i);
                                            if (info.zhuSkill) {
                                                if (!player.storage.zhuSkill_wanshen_chuli) player.storage.zhuSkill_wanshen_chuli = [];
                                                player.storage.zhuSkill_wanshen_chuli.remove(i);
                                            }
                                            player.removeAdditionalSkill('wanshen_chuli', i);
                                        }
                                        game.log(player, '失去了技能', '#g' + get.translation(skills));
                                        event.change_wanshen_chuli = num;
                                        event.trigger('change_wanshen_chuli');
                                        if (!player.additionalSkills.wanshen_chuli.length) num++;
                                        lib.skill.wanshen_chuli.addSKILLs(player, num);
                                        player.markSkill('wanshen_chuli');
                                    },
                                },
                                init: {
                                    trigger: {
                                        global: 'phaseBefore',
                                        player: 'enterGame',
                                    },
                                    forced: true,
                                    audio: 'ext:魔王/audio:true',
                                    filter(event, player) {
                                        return event.name != 'phase' || game.phaseNumber == 0;
                                    },
                                    content() {
                                        'step 0';
                                        lib.skill.pingjian.initList();
                                        var list = _status.characterlist
                                            .filter(function (i) {
                                                var info = lib.character[i];
                                                return info && info[3] && info[3].length >= 1;
                                            })
                                            .randomGets(5);
                                        var skills = [];
                                        for (var i of list) {
                                            skills.addArray(lib.character[i][3].slice(0));
                                        }
                                        skills = skills.filter(function (i) {
                                            var info = lib.skill[i];
                                            if (!info) return false;
                                            if (info.charlotte || (info.unique && !info.gainable) || info.juexingji || info.limited || info.zhuSkill || info.hiddenSkill || info.dutySkill) return false;
                                            return true;
                                        });
                                        var skillsx = skills.slice(0);
                                        for (var i = 0; i < skills.length; i++) {
                                            skills[i] = [skills[i], get.translation(skills[i])];
                                        }
                                        if (skills.length >= 1) {
                                            player
                                                .chooseButton(['万神', [list, 'character'], [skills, 'tdnodes']], true, 2)
                                                .set('filterButton', function (button) {
                                                    return _status.event.skillsx.includes(button.link);
                                                })
                                                .set('skillsx', skillsx);
                                        } else {
                                            player.chooseControl('ok').set('dialog', ['<万神>(哈哈哈全是废神)', [list, 'character']]);
                                            event.finish();
                                        }
                                        ('step 1');
                                        if (result.links?.length) {
                                            for (var i of result.links) {
                                                var info = get.info(i);
                                                if (info.zhuSkill) {
                                                    if (!player.storage.zhuSkill_wanshen_chuli) player.storage.zhuSkill_wanshen_chuli = [];
                                                    player.storage.zhuSkill_wanshen_chuli.add(i);
                                                }
                                                game.log(player, '获得了技能', '#g【' + get.translation(i) + '】');
                                            }
                                            player.addAdditionalSkill('wanshen_chuli', result.links, true);
                                            player.markSkill('wanshen_chuli');
                                        }
                                    },
                                },
                            },
                        },
                        xin_kunjue_chuli: {
                            trigger: {
                                player: ['phaseDrawBefore', 'loseMaxHpEnd', 'gainMaxHpEnd', 'disableEquipEnd', 'enableEquipEnd', 'damageBegin4'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.name == 'damage') return event.source == player;
                                return true;
                            },
                            content() {
                                if (trigger.name == 'phaseDraw' || trigger.name == 'damage') trigger.cancel();
                                else {
                                    player.draw();
                                    player.addMark('xin_kunjue_chuli_effect', 1, false);
                                    player.addTempSkill('xin_kunjue_chuli_effect');
                                }
                            },
                            group: 'xin_kunjue_chuli_dying',
                            subSkill: {
                                dying: {
                                    trigger: {
                                        global: '_saveEnd',
                                    },
                                    filter(event, player) {
                                        if (player.hasAllHistory('useSkill', (evt) => evt.skill == 'xin_kunjue_chuli_dying')) return false;
                                        return event.dying == player && player.isDying() && game.hasPlayer((current) => current.countDiscardableCards(player, 'e', (card) => get.subtype(card) == 'equip1'));
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.chooseTarget(get.prompt(event.name), '弃置场上的一张武器牌将体力回复至一点', function (card, player, target) {
                                            return target.countDiscardableCards(player, 'e', (card) => get.subtype(card) == 'equip1');
                                        });
                                        ('step 1');
                                        if (result.targets?.length) {
                                            var target = result.targets[0];
                                            player.discardPlayerCard(target, true, 'e').set('filterButton', function (button) {
                                                return get.subtype(button.link) == 'equip1';
                                            });
                                        } else event.finish();
                                        ('step 2');
                                        if (result.bool) {
                                            var num = 1 - player.hp;
                                            if (num >= 1) player.recover(num);
                                        }
                                    },
                                },
                                effect: {
                                    charlotte: true,
                                    intro: {
                                        content: '手牌上限+#',
                                    },
                                    mod: {
                                        maxHandcard(player, num) {
                                            return num + player.countMark('xin_kunjue_chuli_effect');
                                        },
                                    },
                                },
                            },
                        },
                        xin_xianpo_chuli: {
                            enable: ['chooseToUse', 'chooseToRespond'],
                            audio: 'ext:魔王/audio:2',
                            hiddenCard(player, name) {
                                const type = lib.card[name].type;
                                if (!['basic', 'trick'].includes(type)) return false;
                                if ((player.maxHp < 2 || player.countDisabled() < 1) && type == 'trick') {
                                    return false;
                                }
                                if (player.countDisabled() > 4 && type == 'basic') {
                                    return false;
                                }
                                return true;
                            },
                            filter(event, player) {
                                return player.qcard(false, true, false).filter((q) => {
                                    const type = lib.card[q[2]].type;
                                    if (!['basic', 'trick'].includes(type)) return false;
                                    if ((player.maxHp < 2 || player.countDisabled() < 1) && type == 'trick') {
                                        return false;
                                    }
                                    if (player.countDisabled() > 4 && type == 'basic') {
                                        return false;
                                    }
                                    return true;
                                }).length;
                            },
                            async content(event, trigger, player) {
                                var list = [];
                                var evt = event.getParent(2);
                                if (evt.name == '_wuxie') {
                                    list.push(['trick', '', 'wuxie']);
                                } else {
                                    list = player.qcard(false, true, false).filter((q) => {
                                        const type = lib.card[q[2]].type;
                                        if (!['basic', 'trick'].includes(type)) return false;
                                        if ((player.maxHp < 2 || player.countDisabled() < 1) && type == 'trick') {
                                            return false;
                                        }
                                        if (player.countDisabled() > 4 && type == 'basic') {
                                            return false;
                                        }
                                        return true;
                                    });
                                }
                                if (list.length) {
                                    const { links } = await player.chooseButton(['废除/回复一种装备栏,而后增加/减少一点体力上限;视为使用或打出对应基本牌/锦囊牌', [list, 'vcard']])
                                        .set('ai', (button) => {
                                            const num = player.getUseValue({
                                                name: button.link[2],
                                                nature: button.link[3],
                                            }, null, true);
                                            return numberq0(num) / 2 + 10;
                                        }).forResult();
                                    if (links?.length) {
                                        if (lib.card[links[0][2]].type == 'basic') {
                                            if (player.countDisabled() < 5) {
                                                await player.chooseToDisable();
                                            }
                                            player.gainMaxHp();
                                        } else {
                                            if (player.countDisabled()) {
                                                await player.chooseToEnable();
                                            }
                                            player.loseMaxHp();
                                        }
                                        if (links[0][2] == 'caochuan') {
                                            player.useCard({ name: links[0][2] }, false);
                                            event.parent._trigger = evt.parent._trigger;
                                        }
                                        if (links[0][2] == 'youdishenru') {
                                            player.useCard({ name: links[0][2] }, false);
                                            event.parent.youdiinfo = evt.parent.youdiinfo;
                                        }
                                        if (links[0][2] == 'wuxie') {
                                            player.useCard({ name: links[0][2] }, false);
                                            event._trigger = evt._trigger;
                                        }
                                        if (links[0][2] == 'chenhuodajie') {
                                            player.useCard({ name: links[0][2] }, evt.parent._trigger.player, false);
                                        } //AAA
                                        if (evt.parent.name == '_save') {
                                            await player.useCard({ name: links[0][2] }, _status.dying, false);
                                        }
                                        if (evt.name == 'chooseToUse' && links[0][2] != 'shan') {
                                            await player.chooseUseTarget(
                                                {
                                                    name: links[0][2],
                                                    nature: links[0][3],
                                                },
                                                true,
                                                false,
                                                'nodistance'
                                            ); //无距离次数限制
                                        } else {
                                            evt.untrigger();
                                            evt.set('responded', true);
                                            evt.result = { bool: true, card: { name: links[0][2] }, cards: [] };
                                            evt.redo();
                                        }
                                    }
                                }
                            },
                            ai: {
                                respondSha: true,
                                respondShan: true,
                                order: 10,
                                result: {
                                    player(player) {
                                        if (_status.event.type == 'dying') {
                                            return get.attitude(player, _status.event.dying);
                                        }
                                        return 1;
                                    },
                                },
                            },
                            _priority: 6,
                        },
                        xianpo_chuli: {
                            enable: ['chooseToUse', 'chooseToRespond'],
                            init(player) {
                                player.addSkill('xianpo_chuli_count');
                            },
                            filter(event, player) {
                                var storage = player.getStorage('xianpo_chuli');
                                var max = player.storage.xianpo_chuli_count || 0;
                                var count = player.getHistory('useSkill', (evt) => evt.skill == 'xianpo_chuli_backup').length;
                                if (count >= max) return false;
                                for (var i of lib.inpile) {
                                    var type = get.type(i);
                                    if (storage.includes(i)) continue;
                                    if ((type == 'basic' || type == 'trick') && event.filterCard({ name: i, storage: { xianpo_chuli_tag: true } }, player, event)) return true;
                                }
                                return false;
                            },
                            intro: {
                                content: '已记录的牌名:$',
                            },
                            mod: {
                                cardUsable(card, player, target) {
                                    if (card.storage && card.storage.xianpo_chuli_tag) return Infinity;
                                },
                                targetInRange(card) {
                                    if (card.storage && card.storage.xianpo_chuli_tag) return true;
                                },
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    var storage = player.getStorage('xianpo_chuli');
                                    for (var i = 0; i < lib.inpile.length; i++) {
                                        var name = lib.inpile[i];
                                        if (storage.includes(name)) continue;
                                        if (name == 'sha') {
                                            if (event.filterCard && event.filterCard({ name: name, storage: { xianpo_chuli_tag: true } }, player, event)) list.push(['基本', '', 'sha']);
                                            for (var j of lib.inpile_nature) {
                                                if (event.filterCard && event.filterCard({ name: name, nature: j, storage: { xianpo_chuli_tag: true } }, player, event)) list.push(['基本', '', 'sha', j]);
                                            }
                                        } else if (get.type(name) == 'trick' && event.filterCard({ name: name, storage: { xianpo_chuli_tag: true } }, player, event)) list.push(['锦囊', '', name]);
                                        else if (get.type(name) == 'basic' && event.filterCard({ name: name, storage: { xianpo_chuli_tag: true } }, player, event)) list.push(['基本', '', name]);
                                    }
                                    var str = '显魄';
                                    if (get.rand(1, 100) == 1) str = '显魄';
                                    return ui.create.dialog(str, [list, 'vcard']);
                                },
                                filter(button, player) {
                                    return _status.event.parent.filterCard({ name: button.link[2], storage: { xianpo_chuli_tag: true } }, player, _status.event.parent);
                                },
                                check(button) {
                                    if (_status.event.parent.type != 'phase') return 1;
                                    var player = _status.event.player;
                                    if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[2])) return 0;
                                    return player.getUseValue({
                                        name: button.link[2],
                                        nature: button.link[3],
                                    });
                                },
                                backup(links, player) {
                                    return {
                                        filterCard: () => false,
                                        popname: true,
                                        selectCard: -1,
                                        viewAs: { name: links[0][2], nature: links[0][3], storage: { xianpo_chuli_tag: true } },
                                        precontent() {
                                            player.addSkill('xianpo_chuli_count');
                                            player.addTempSkill('xianpo_chuli_effect');
                                            player.markSkill('xianpo_chuli_count');
                                            player.markAuto('xianpo_chuli', [event.result.card.name]);
                                            event.result.card.isCard = true;
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '选择' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '的目标';
                                },
                            },
                            hiddenCard(player, name) {
                                if (!lib.inpile.includes(name)) return false;
                                var type = get.type(name);
                                var storage = player.getStorage('xianpo_chuli');
                                var max = player.storage.xianpo_chuli_count || 0;
                                var count = player.getHistory('useSkill', (evt) => evt.skill == 'xianpo_chuli_backup').length;
                                if (count >= max || storage.includes(name)) return false;
                                return type == 'basic' || type == 'trick';
                            },
                            ai: {
                                fireAttack: true,
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player) {
                                    var max = player.storage.xianpo_chuli_count || 0;
                                    var count = player.getHistory('useSkill', (evt) => evt.skill == 'xianpo_chuli_backup').length;
                                    if (count >= max) return false;
                                },
                                order: 1,
                                result: {
                                    player(player) {
                                        if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                        return 1;
                                    },
                                },
                            },
                            subSkill: {
                                backup: {},
                                effect: {
                                    trigger: {
                                        player: ['useCardAfter', 'respondAfter'],
                                    },
                                    charlotte: true,
                                    silent: true,
                                    filter(event, player) {
                                        return event.skill == 'xianpo_chuli_backup';
                                    },
                                    content() {
                                        'step 0';
                                        player.markSkill('xianpo_chuli_count');
                                        player.gainMaxHp();
                                        ('step 1');
                                        player.drawTo(player.maxHp);
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: 1,
                                },
                                count: {
                                    trigger: {
                                        global: 'phaseBeginStart',
                                    },
                                    silent: true,
                                    charlotte: true,
                                    marktext: '魄',
                                    intro: {
                                        content: '当前X为#',
                                        markcount(storage, player) {
                                            var max = player.storage.xianpo_chuli_count || 0;
                                            var count = player.getHistory('useSkill', (evt) => evt.skill == 'xianpo_chuli_backup').length;
                                            return Math.max(0, max - count) + '/' + max;
                                        },
                                    },
                                    content() {
                                        player.storage.xianpo_chuli_count = player.maxHp;
                                        player.markSkill('xianpo_chuli_count');
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: 1,
                                },
                            },
                        },
                        xianjue_chuli: {
                            trigger: {
                                player: 'dyingAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                var storage = player.getStorage('xianpo_chuli');
                                return player.maxHp != 1 || storage.length >= 1;
                            },
                            content() {
                                'step 0';
                                var num = player.maxHp - 1;
                                var storage = player.getStorage('xianpo_chuli');
                                if (num != 0) {
                                    if (num >= 1) player.loseMaxHp(num);
                                    else player.gainMaxHp(Math.abs(num));
                                }
                                if (storage.length) {
                                    player.draw(storage.length);
                                    player.unmarkAuto('xianpo_chuli', storage);
                                }
                            },
                        },
                        yingba_chuli: {
                            mod: {
                                maxHandcardBase(player) {
                                    return player.getDamagedHp();
                                },
                            },
                            hiddenCard(player, namex) {
                                var name = false;
                                var num = player.getHistory('useSkill', (evt) => evt.skill == 'yingba_chuli').length + 1;
                                if (num > 3) return false;
                                switch (num) {
                                    case 1: {
                                        name = 'jiu';
                                        break;
                                    }
                                    case 2: {
                                        name = 'sha';
                                        break;
                                    }
                                    case 3: {
                                        name = 'juedou';
                                        break;
                                    }
                                }
                                return name == namex;
                            },
                            enable: ['chooseToUse', 'chooseToRespond'],
                            position: 'he',
                            prompt() {
                                var player = _status.event.player;
                                var num = player.getHistory('useSkill', (evt) => evt.skill == 'yingba_chuli').length + 1;
                                if (num == 1) return '弃置一张牌视为使用一张〖酒〗';
                                if (num == 2) return '弃置两张牌视为使用一张〖杀〗';
                                if (num == 3) return '弃置三张牌视为使用一张〖决斗〗';
                            },
                            viewAs(cards, player) {
                                var name = false;
                                var num = player.getHistory('useSkill', (evt) => evt.skill == 'yingba_chuli').length + 1;
                                if (num > 3) return null;
                                switch (num) {
                                    case 1: {
                                        name = 'jiu';
                                        break;
                                    }
                                    case 2: {
                                        name = 'sha';
                                        break;
                                    }
                                    case 3: {
                                        name = 'juedou';
                                        break;
                                    }
                                }
                                return { name: name };
                            },
                            filter(event, player) {
                                var name = false;
                                var num = player.getHistory('useSkill', (evt) => evt.skill == 'yingba_chuli').length + 1;
                                if (num > 3) return false;
                                switch (num) {
                                    case 1: {
                                        name = 'jiu';
                                        break;
                                    }
                                    case 2: {
                                        name = 'sha';
                                        break;
                                    }
                                    case 3: {
                                        name = 'juedou';
                                        break;
                                    }
                                }
                                var max = player.getDamagedHp();
                                return player.countCards('he') >= num && max >= num && event.filterCard({ name: name }, player, event);
                            },
                            filterCard(card, player, event) {
                                event = event || _status.event;
                                if (typeof event != 'string') event = event.parent.name;
                                var mod = game.checkMod(card, player, event, 'unchanged', 'cardDiscardable', player);
                                if (mod != 'unchanged') return mod;
                                return true;
                            },
                            ignoreMod: true,
                            selectCard() {
                                var player = _status.event.player;
                                var num = player.getHistory('useSkill', (evt) => evt.skill == 'yingba_chuli').length + 1;
                                return num;
                            },
                            log: false,
                            precontent() {
                                player.addTempSkill('yingba_chuli_discard');
                                event.parent.addCount = false;
                                var cards = event.result.cards,
                                    num = cards.filter((i) => get.color(i, player) == 'red').length,
                                    num2 = cards.filter((i) => get.color(i, player) == 'black').length;
                                player.discard(cards);
                                if (num >= 1) player.draw(num);
                                event.result.card = {
                                    name: event.result.card.name,
                                    nature: event.result.card.nature,
                                };
                                event.result.cards = [];
                                if (!event.result.card.storage) event.result.card.storage = {};
                                event.result.card.storage.yingba_chuli = num2;
                            },
                            subSkill: {
                                discard: {
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    forced: true,
                                    silent: true,
                                    filter(event, player) {
                                        return event.card.storage && event.card.storage.yingba_chuli >= 1 && event.target.countDiscardableCards(player, 'he') && event.target.isAlive();
                                    },
                                    content() {
                                        var num = trigger.card.storage.yingba_chuli;
                                        player.line(trigger.target);
                                        player.discardPlayerCard('he', num, true, trigger.target);
                                    },
                                    popup: false,
                                    _priority: 1,
                                },
                            },
                        },
                        shengjiang_chuli: {
                            trigger: {
                                global: 'dyingAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return (event.player == player && player.countCards('h') < player.maxHp) || (event.source && event.source == player && event.player && event.player.countGainableCards(player, event.player == player ? 'e' : 'he'));
                            },
                            content() {
                                'step 0';
                                if (trigger.player == player && player.countCards('h') < player.maxHp) player.drawTo(player.maxHp);
                                ('step 1');
                                var bool = trigger.source && trigger.source == player && trigger.player && trigger.player.countGainableCards(player, trigger.player == player ? 'e' : 'he');
                                if (!bool) event.finish();
                                ('step 2');
                                player.gainPlayerCard(trigger.player, true, trigger.player.countCards('he'), trigger.player == player ? 'e' : 'he');
                            },
                            group: ['shengjiang_chuli_draw'],
                            subSkill: {
                                draw: {
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.getDamagedHp() >= 1 && event.num > 1;
                                    },
                                    content() {
                                        player.draw(player.getDamagedHp());
                                    },
                                },
                            },
                        },
                        chuli_sb_xinguoyin: {
                            trigger: {
                                player: 'loseAfter',
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                var evt = event.getl(player),
                                    types = [];
                                if (evt.xs && evt.xs.length) {
                                    return player.hasHistory('lose', function (evt) {
                                        if ((evt == event || evt.parent == event) && evt.xs && evt.xs.length >= 1) {
                                            for (var i of evt.xs) if (evt.gaintag_map[i.cardid] && evt.gaintag_map[i.cardid].includes('chuli_peifang')) return true;
                                        }
                                    });
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                if (!player.storage.chuli_sb_xinguoyin) player.storage.chuli_sb_xinguoyin = {};
                                var evt = trigger.getl(player),
                                    cards = [];
                                if (evt.xs && evt.xs.length) {
                                    player.hasHistory('lose', function (evt) {
                                        if ((evt == trigger || evt.parent == trigger) && evt.xs && evt.xs.length >= 1) {
                                            for (var i of evt.xs) if (evt.gaintag_map[i.cardid] && evt.gaintag_map[i.cardid].includes('chuli_peifang')) cards.push(i);
                                        }
                                    });
                                }
                                for (var i of cards) {
                                    var type = get.type2(i, false);
                                    if (!player.storage.chuli_sb_xinguoyin[type]) player.storage.chuli_sb_xinguoyin[type] = 0;
                                    player.storage.chuli_sb_xinguoyin[type]++;
                                }
                                player.markSkill('chuli_sb_xinguoyin');
                                if (player.getExpansions('chuli_peifang').length >= 1 || !_status.currentPhase || !_status.currentPhase.isAlive()) event.finish();
                                ('step 1');
                                var target = _status.currentPhase;
                                event.target = _status.currentPhase;
                                player.chooseBool(get.prompt('chuli_sb_xinguoyin', target), '移除所有<醺>令其获得一些牌？');
                                ('step 2');
                                if (result.bool) {
                                    var num = player.countMark('chuli_sb_xinguoyin'),
                                        cards = [],
                                        types = [];
                                    for (var j in player.storage.chuli_sb_xinguoyin) {
                                        types.add(j);
                                        var num = player.storage.chuli_sb_xinguoyin[j];
                                        for (var i = 0; i < num; i++) {
                                            var card = get.cardPile((card) => !cards.includes(card) && get.type2(card) == j);
                                            if (card) cards.push(card);
                                            else break;
                                        }
                                    }
                                    player.storage.chuli_sb_xinguoyin = {};
                                    player.unmarkSkill('chuli_sb_xinguoyin');
                                    if (cards.length) target.gain(cards, 'gain2');
                                    if (types.length != 3) event.finish();
                                } else event.finish();
                                ('step 3');
                                var types = [],
                                    types2 = [];
                                player.getCards('he', function (card) {
                                    if (lib.filter.cardDiscardable(card, player, 'chuli_sb_xinguoyin')) types2.add(get.type2(card));
                                });
                                player.getExpansions('chuli_peifang').filter(function (i) {
                                    types.add(get.type2(i, false));
                                });
                                if (!player.hasSkill('chuli_sb_xinguoyin_give') || types.length < 3) {
                                    var next = player
                                        .chooseButton([
                                            '果饮:是否执行一项？',
                                            [
                                                [
                                                    ['give', '弃置三种类型的牌并补齐配方'],
                                                    ['gain', '获得每种类型的牌各一张'],
                                                ],
                                                'textbutton',
                                            ],
                                        ])
                                        .set('filterButton', function (button) {
                                            if (player.hasSkill('chuli_sb_xinguoyin_' + button.link)) return false;
                                            if (button.link == 'give' && _status.event.bool_give) return false;
                                            return true;
                                        });
                                    if (types.length >= 3 || types2.length < 3) next.set('bool_give', true);
                                } else {
                                    player.addTempSkill('chuli_sb_xinguoyin_banned');
                                    event.finish();
                                }
                                ('step 4');
                                if (result.bool) {
                                    var cards = [],
                                        types = [];
                                    player.addTempSkill('chuli_sb_xinguoyin_' + result.links[0]);
                                    if (result.links[0] == 'give') {
                                        player
                                            .chooseToDiscard('he', 3, true, function (card) {
                                                if (ui.selected.cards && ui.selected.cards.length) {
                                                    for (var i of ui.selected.cards) if (get.type2(card) == get.type2(i)) return false;
                                                }
                                                return true;
                                            })
                                            .set('complexCard', true);
                                    } else {
                                        while (true) {
                                            var card = get.cardPile(function (card) {
                                                return !types.includes(get.type2(card)) && !cards.includes(card);
                                            });
                                            if (card) {
                                                cards.push(card);
                                                types.add(get.type2(card));
                                            } else break;
                                        }
                                        if (cards.length) player.gain(cards, 'gain2');
                                        event.goto(6);
                                    }
                                } else event.goto(6);
                                ('step 5');
                                var cards = [];
                                for (var i = 0; i < 3; i++) {
                                    var card = get.cardPile(function (card) {
                                        return (
                                            cards.filter(function (i) {
                                                return get.type2(i) == get.type2(card);
                                            }).length == 0 &&
                                            player.getExpansions('chuli_peifang').filter(function (i) {
                                                return get.type2(i) == get.type2(card);
                                            }).length == 0
                                        );
                                    });
                                    if (card) cards.push(card);
                                    else break;
                                }
                                if (cards) player.addToExpansion(cards, 'gain2').gaintag.add('chuli_peifang');
                                ('step 6');
                                if (player.hasSkill('chuli_sb_xinguoyin_give') && player.hasSkill('chuli_sb_xinguoyin_gain')) player.addTempSkill('chuli_sb_xinguoyin_banned');
                            },
                            marktext: '醺',
                            intro: {
                                name: '醺(果饮)',
                                name2: '醺',
                                markcount(storage) {
                                    var num = 0;
                                    if (storage) {
                                        for (var j in storage) num += storage[j];
                                    }
                                    return num;
                                },
                                content(storage, player) {
                                    var str = '';
                                    if (!storage) return str;
                                    for (var j in storage) {
                                        str += get.translation(j);
                                        str += ':';
                                        str += storage[j] + '张';
                                        str += '<br/>';
                                    }
                                    return str.slice(0, str.length - 5);
                                },
                            },
                            subSkill: {
                                banned: {
                                    charlotte: true,
                                    init(player, skill) {
                                        player.addSkillBlocker(skill);
                                    },
                                    onremove(player, skill) {
                                        player.removeSkillBlocker(skill);
                                    },
                                    skillBlocker(skill, player) {
                                        return skill == 'chuli_sb_xinguoyin';
                                    },
                                },
                                give: {
                                    charlotte: true,
                                },
                                gain: {
                                    charlotte: true,
                                },
                            },
                        },
                        zhuchang_chuli: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            filter(event, player) {
                                return player.hasCard((card) => lib.filter.cardDiscardable(card, player, 'zhuchang_chuli_effect'), 'he');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.cardsx = player.getCards('e');
                                player.chooseToDiscard(get.prompt('zhuchang_chuli'), 'he', [1, player.countCards('he')])
                                    ('step 1');
                                if (result.cards?.length) {
                                    var cards = result.cards;
                                    event.cards = cards;
                                    if (get.color(cards, false) == 'none' && player.canMoveCard()) {
                                        player.moveCard();
                                    }
                                } else event.finish();
                                ('step 2');
                                var types = [];
                                for (var i of cards) types.add(get.type2(i, false));
                                if (types.length >= 3) {
                                    player.recover();
                                }
                                ('step 3');
                                var suits = [];
                                for (var i of cards) suits.add(i.suit);
                                if (suits.length >= 4) {
                                    player.chooseTarget('铸昌:对一名角色造成一点伤害', true);
                                } else event.goto(5);
                                ('step 4');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    player.line(target);
                                    target.damage();
                                }
                                ('step 5');
                                if (event.cardsx.length >= 1 && event.cards.filter((i) => event.cardsx.includes(i)).length == event.cardsx.length) player.draw(event.cards.length);
                            },
                        },
                        zicheng_chuli: {
                            mark: true,
                            intro: {
                                content(storage, player) {
                                    var str = '特殊效果:';
                                    if (storage && storage.length) {
                                        if (storage.includes('phaseDraw')) {
                                            str += '<br/><li>下个摸牌阶段额定摸牌数+' + (storage.length + player.storage.zicheng_chuli_phaseDraw_effect);
                                        }
                                        if (storage.includes('recover')) {
                                            str += '<br/><li>下次回复体力时,回复值+' + (storage.length + player.storage.zicheng_chuli_recover_effect) + '且溢出部分改为摸牌';
                                        }
                                        if (storage.includes('damage')) {
                                            str += '<br/><li>下次受到伤害时,伤害值-' + (storage.length + player.storage.zicheng_chuli_damage_effect) + '且剩余部分改为摸牌';
                                        }
                                        if (storage.includes('phaseDiscard')) {
                                            str += '<br/><li>下个弃牌阶段开始时,手牌上限+' + (storage.length + player.storage.zicheng_chuli_phaseDiscard_effect) + '且于此阶段结束后将手牌摸至手牌上限';
                                        }
                                    } else str = '暂无';
                                    return str;
                                },
                            },
                            getList(num) {
                                var list = [];
                                if (typeof num != 'number' || num < 1) {
                                    var num = 1;
                                }
                                for (var i = 1; i <= num; i++) list.push(i);
                                for (var i = 0; i < list.length; i++) {
                                    list[i] = [list[i], get.cnNumber(list[i], true)];
                                }
                                return list;
                            },
                            group: ['zicheng_chuli_phaseDraw', 'zicheng_chuli_recover', 'zicheng_chuli_damage', 'zicheng_chuli_phaseDiscard'],
                            subSkill: {
                                phaseDiscard_maxHandcard: {
                                    charlotte: true,
                                    mod: {
                                        maxHandcard(player, num) {
                                            return num + player.storage.zicheng_chuli_phaseDiscard_maxHandcard;
                                        },
                                    },
                                },
                                phaseDiscard_effect: {
                                    trigger: {
                                        player: 'phaseDiscardBefore',
                                    },
                                    silent: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return !event.zicheng_chuli_phaseDiscard;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.zicheng_chuli_phaseDiscard = true;
                                        var storage = player.getStorage('zicheng_chuli');
                                        var num = 0;
                                        num += storage.length;
                                        if (player.storage.zicheng_chuli_phaseDiscard_effect) num += player.storage.zicheng_chuli_phaseDiscard_effect;
                                        player.addTempSkill('zicheng_chuli_phaseDiscard_maxHandcard');
                                        if (!player.storage.zicheng_chuli_phaseDiscard_maxHandcard) player.storage.zicheng_chuli_phaseDiscard_maxHandcard = 0;
                                        player.storage.zicheng_chuli_phaseDiscard_maxHandcard += num;
                                        var next = game.createEvent('zicheng_chuli_phaseDiscard_draw', false);
                                        next.player = player;
                                        next.setContent(lib.skill.zicheng_chuli_phaseDiscard_effect.contentx);
                                        event.next.remove(next);
                                        trigger.after.push(next);
                                        ('step 1');
                                        player.removeSkill(event.name);
                                        if (player.storage.zicheng_chuli) player.storage.zicheng_chuli.remove('phaseDiscard');
                                    },
                                    contentx() {
                                        'step 0';
                                        player.drawTo(player.getHandcardLimit());
                                        ('step 1');
                                        player.removeSkill('zicheng_chuli_phaseDiscard_maxHandcard');
                                        player.markSkill('zicheng_chuli');
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: 1,
                                },
                                phaseDiscard: {
                                    trigger: {
                                        player: 'phaseDiscardEnd',
                                    },
                                    filter(event, player) {
                                        var storage = player.getStorage('zicheng_chuli');
                                        if (storage.includes('phaseDiscard')) return false;
                                        var cards = [];
                                        player.getHistory('lose', function (evt) {
                                            if (evt.type == 'discard' && evt.getParent(3) == event) cards.addArray(evt.cards2);
                                        });
                                        return cards.length >= 1 && !event.zicheng_chuli_phaseDiscard;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var cards = [];
                                        player.getHistory('lose', function (evt) {
                                            if (evt.type == 'discard' && evt.getParent(3) == trigger) cards.addArray(evt.cards2);
                                        });
                                        var list = lib.skill.zicheng_chuli.getList(Math.min(cards.length, player.getCards('h', (card) => lib.filter.cardDiscardable(card, player, 'zicheng_chuli_phaseDiscard')).length));
                                        var next = player.chooseButton([get.prompt('zicheng_chuli'), '弃置任意张牌且下个弃牌阶段获得增益效果', [list, 'tdnodes']]);
                                        ('step 1');
                                        if (result.links?.length) {
                                            var num = result.links[0];
                                            if (!player.storage.zicheng_chuli) player.storage.zicheng_chuli = [];
                                            player.storage.zicheng_chuli.add('phaseDiscard');
                                            if (!player.storage.zicheng_chuli_phaseDiscard_effect) player.storage.zicheng_chuli_phaseDiscard_effect = 0;
                                            player.storage.zicheng_chuli_phaseDiscard_effect += num;
                                            player.addSkill('zicheng_chuli_phaseDiscard_effect');
                                            trigger.zicheng_chuli_phaseDiscard = true;
                                            player.chooseToDiscard('h', true, num);
                                            player.markSkill('zicheng_chuli');
                                        }
                                    },
                                },
                                damage_effect: {
                                    trigger: {
                                        player: 'damageBegin4',
                                    },
                                    silent: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return !event.zicheng_chuli_damage;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.zicheng_chuli_damage = true;
                                        var storage = player.getStorage('zicheng_chuli');
                                        var num = 0;
                                        num += storage.length;
                                        if (player.storage.zicheng_chuli_damage_effect) num += player.storage.zicheng_chuli_damage_effect;
                                        var count = Math.min(trigger.num, num);
                                        trigger.num -= count;
                                        num -= count;
                                        if (num >= 1) player.draw(num);
                                        ('step 1');
                                        player.removeSkill(event.name);
                                        if (player.storage.zicheng_chuli) player.storage.zicheng_chuli.remove('damage');
                                        player.markSkill('zicheng_chuli');
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: 1,
                                },
                                damage: {
                                    trigger: {
                                        player: 'damageBegin3',
                                    },
                                    filter(event, player) {
                                        var storage = player.getStorage('zicheng_chuli');
                                        if (storage.includes('damage')) return false;
                                        return event.num >= 1 && !event.zicheng_chuli_damage;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var list = lib.skill.zicheng_chuli.getList(trigger.num);
                                        var next = player.chooseButton([get.prompt('zicheng_chuli'), '增加任意点伤害且下次受到伤害时获得增益效果', [list, 'tdnodes']]);
                                        ('step 1');
                                        if (result.links?.length) {
                                            var num = result.links[0];
                                            if (!player.storage.zicheng_chuli) player.storage.zicheng_chuli = [];
                                            player.storage.zicheng_chuli.add('damage');
                                            trigger.num += num;
                                            if (!player.storage.zicheng_chuli_damage_effect) player.storage.zicheng_chuli_damage_effect = 0;
                                            player.storage.zicheng_chuli_damage_effect += num;
                                            player.addSkill('zicheng_chuli_damage_effect');
                                            trigger.zicheng_chuli_damage = true;
                                            player.markSkill('zicheng_chuli');
                                        }
                                    },
                                },
                                recover_effect: {
                                    trigger: {
                                        player: 'recoverBegin',
                                    },
                                    silent: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return !event.zicheng_chuli_recover;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.zicheng_chuli_recover = true;
                                        var storage = player.getStorage('zicheng_chuli');
                                        var num = 0;
                                        num += storage.length;
                                        if (player.storage.zicheng_chuli_recover_effect) num += player.storage.zicheng_chuli_recover_effect;
                                        var max = player.maxHp - player.hp,
                                            count = 0;
                                        trigger.num += num;
                                        if (trigger.num > max) {
                                            count = trigger.num - max;
                                            trigger.num -= count;
                                        }
                                        if (count >= 1) player.draw(Math.min(count, num));
                                        ('step 1');
                                        player.removeSkill(event.name);
                                        if (player.storage.zicheng_chuli) player.storage.zicheng_chuli.remove('recover');
                                        player.markSkill('zicheng_chuli');
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: 1,
                                },
                                recover: {
                                    trigger: {
                                        player: 'recoverBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var storage = player.getStorage('zicheng_chuli');
                                        if (storage.includes('recover')) return false;
                                        return event.num >= 1 && !event.zicheng_chuli_recover;
                                    },
                                    content() {
                                        'step 0';
                                        var list = lib.skill.zicheng_chuli.getList(trigger.num);
                                        var next = player.chooseButton([get.prompt('zicheng_chuli'), '少回复任意点体力且下次回复体力时获得增益效果', [list, 'tdnodes']]);
                                        ('step 1');
                                        if (result.links?.length) {
                                            var num = result.links[0];
                                            if (!player.storage.zicheng_chuli) player.storage.zicheng_chuli = [];
                                            player.storage.zicheng_chuli.add('recover');
                                            trigger.num -= num;
                                            if (!player.storage.zicheng_chuli_recover_effect) player.storage.zicheng_chuli_recover_effect = 0;
                                            player.storage.zicheng_chuli_recover_effect += num;
                                            player.addSkill('zicheng_chuli_recover_effect');
                                            trigger.zicheng_chuli_recover = true;
                                            player.markSkill('zicheng_chuli');
                                        }
                                    },
                                },
                                phaseDraw_effect: {
                                    trigger: {
                                        player: 'phaseDrawBegin2',
                                    },
                                    silent: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return !event.zicheng_chuli_phaseDraw;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.zicheng_chuli_phaseDraw = true;
                                        if (!trigger.numFixed) {
                                            var storage = player.getStorage('zicheng_chuli');
                                            var num = 0;
                                            num += storage.length;
                                            if (player.storage.zicheng_chuli_phaseDraw_effect) num += player.storage.zicheng_chuli_phaseDraw_effect;
                                            trigger.num += num;
                                        }
                                        ('step 1');
                                        player.removeSkill(event.name);
                                        if (player.storage.zicheng_chuli) player.storage.zicheng_chuli.remove('phaseDraw');
                                        player.markSkill('zicheng_chuli');
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: 1,
                                },
                                phaseDraw: {
                                    trigger: {
                                        player: 'phaseDrawBegin2',
                                    },
                                    filter(event, player) {
                                        var storage = player.getStorage('zicheng_chuli');
                                        if (storage.includes('phaseDraw')) return false;
                                        return !event.numFixed && event.num >= 1 && !event.zicheng_chuli_phaseDraw;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var list = lib.skill.zicheng_chuli.getList(trigger.num);
                                        var next = player.chooseButton([get.prompt('zicheng_chuli'), '少摸任意张牌且下个摸牌阶段获得增益效果', [list, 'tdnodes']]);
                                        ('step 1');
                                        if (result.links?.length) {
                                            var num = result.links[0];
                                            if (!player.storage.zicheng_chuli) player.storage.zicheng_chuli = [];
                                            player.storage.zicheng_chuli.add('phaseDraw');
                                            trigger.num -= num;
                                            if (!player.storage.zicheng_chuli_phaseDraw_effect) player.storage.zicheng_chuli_phaseDraw_effect = 0;
                                            player.storage.zicheng_chuli_phaseDraw_effect += num;
                                            player.addSkill('zicheng_chuli_phaseDraw_effect');
                                            trigger.zicheng_chuli_phaseDraw = true;
                                            player.markSkill('zicheng_chuli');
                                        }
                                    },
                                },
                            },
                        },
                        zhibi_chuli: {
                            trigger: {
                                player: ['useCardToPlayered', 'damageEnd'],
                            },
                            filter(event, player) {
                                var evt;
                                if (event.name == 'useCardToPlayered') {
                                    if (event.target == player || !event.target.isAlive() || _status.currentPhase != player) return false;
                                    var history = player.getHistory('useCard', function (evt) {
                                        return evt.targets && evt.targets.includes(event.target);
                                    });
                                    evt = event.parent;
                                } else {
                                    if (!event.source || !event.source.isAlive() || event.source == player || _status.currentPhase != event.source) return false;
                                    var history = player.getHistory('damage', function (evt) {
                                        return evt.source && evt.source == event.source;
                                    });
                                    evt = event;
                                }
                                return history.indexOf(evt) == 1;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var target = trigger.name == 'useCardToPlayered' ? trigger.target : trigger.source;
                                event.target = target;
                                player.chooseControl('basic', 'trick', 'equip', 'cancel2').set('prompt', get.prompt('zhibi_chuli', target)).set('prompt2', '选择一种类型的牌令其本回合不能使用此类型的牌');
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    if (!target.storage.zhibi_chuli_effect) target.storage.zhibi_chuli_effect = [];
                                    target.storage.zhibi_chuli_effect.add(result.control);
                                    target.markSkill('zhibi_chuli_effect');
                                    target.addTempSkill('zhibi_chuli_effect');
                                }
                            },
                            subSkill: {
                                effect: {
                                    charlotte: true,
                                    intro: {
                                        content: '不能使用或打出$牌',
                                    },
                                    mod: {
                                        cardRespondable(card, player) {
                                            if (player.storage.zhibi_chuli_effect.includes(get.type(card, 'trick'))) {
                                                return false;
                                            }
                                        },
                                        cardEnabled(card, player) {
                                            if (player.storage.zhibi_chuli_effect.includes(get.type(card, 'trick'))) {
                                                return false;
                                            }
                                        },
                                        cardSavable(card, player) {
                                            if (player.storage.zhibi_chuli_effect.includes(get.type(card, 'trick'))) {
                                                return false;
                                            }
                                        },
                                    },
                                },
                            },
                        },
                        baobian_chuli: {
                            trigger: {
                                source: 'damageSource',
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player, name) {
                                return !event['baobian_chuli_' + name + 'ed'];
                            },
                            content() {
                                'step 0';
                                event.count = 1;
                                ('step 1');
                                event.count--;
                                player.addMark('baobian_chuli_' + event.triggername, 1, false);
                                player.addSkill('baobian_chuli_' + event.triggername);
                                if (event.triggername == 'damageSource') {
                                    player.addSkill('baobian_chuli_useed');
                                } else {
                                    trigger.baobian_chuli_damageEnd = true;
                                }
                                player.markSkill('baobian_chuli');
                                ('step 2');
                                if (event.count >= 1) {
                                    event.goto(1);
                                }
                            },
                            intro: {
                                content(storage, player) {
                                    var str = '❶你使用的下一张牌:',
                                        num1 = player.countMark('baobian_chuli_damageSource'),
                                        num2 = player.countMark('baobian_chuli_damageEnd');
                                    if (player.hasSkill('baobian_chuli_damageSource')) {
                                        if (num1 >= 1) {
                                            str += '<br/><li>①你可将一张牌当做任意基本牌使用';
                                        } else str += '无升级效果';
                                        if (num1 >= 2) {
                                            str += '<br/><li>②不计入次数限制';
                                        }
                                        if (num1 >= 3) {
                                            str += '<br/><li>③基础数值+1';
                                        }
                                        if (num1 >= 4) {
                                            str += '<br/><li>④不可响应并重置【豹变❶】';
                                        }
                                    } else str += '无升级效果';
                                    str += '<br/>❷当你受到伤害后:';
                                    if (player.hasSkill('baobian_chuli_damageEnd')) {
                                        if (num2 >= 1) {
                                            str += '<br/><li>①摸两张牌,你可将任意张牌分配给任意角色';
                                        } else str += '无特殊效果';
                                        if (num2 >= 2) {
                                            str += '<br/><li>②获得伤害来源一张牌';
                                        }
                                        if (num2 >= 3) {
                                            str += '<br/><li>③对伤害来源造成一点伤害';
                                        }
                                        if (num2 >= 4) {
                                            str += '<br/><li>④获得造成伤害牌并重置【豹变❷】';
                                        }
                                    } else str += '无升级效果';
                                    return str;
                                },
                            },
                            subSkill: {
                                tag: {
                                    name: '已分配',
                                },
                                damageEnd: {
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    silent: true,
                                    filter(event, player) {
                                        return !event.baobian_chuli_damageEnd;
                                    },
                                    content() {
                                        'step 0';
                                        event.count = player.countMark('baobian_chuli_damageEnd');
                                        player.removeSkill('baobian_chuli_damageEnd');
                                        player.markSkill('baobian_chuli');
                                        ('step 1');
                                        if (event.count >= 1) {
                                            if (_status.connectMode)
                                                game.broadcastAll(function () {
                                                    _status.noclearcountdown = true;
                                                });
                                            event.given_map = {};
                                            player.draw(2);
                                        } else event.finish();
                                        ('step 2');
                                        player.chooseCardTarget({
                                            filterCard(card) {
                                                return !card.hasGaintag('baobian_chuli_tag');
                                            },
                                            cards: cards,
                                            filterTarget: lib.filter.notMe,
                                            selectCard: [1, player.getCards('he', (card) => !card.hasGaintag('baobian_chuli_tag')).length],
                                            prompt: '豹变:是否将任意张牌分配给一名角色？',
                                            ai1(card) {
                                                return -1;
                                            },
                                            ai2(target) {
                                                return -1;
                                            },
                                        });
                                        ('step 3');
                                        if (result.cards?.length) {
                                            var res = result.cards,
                                                target = result.targets[0].playerid;
                                            player.addGaintag(res, 'baobian_chuli_tag');
                                            if (!event.given_map[target]) event.given_map[target] = [];
                                            event.given_map[target].addArray(res);
                                            if (player.hasCard((card) => !card.hasGaintag('baobian_chuli_tag'))) event.goto(2);
                                        }
                                        ('step 4');
                                        if (_status.connectMode) {
                                            game.broadcastAll(function () {
                                                delete _status.noclearcountdown;
                                                game.stopCountChoose();
                                            });
                                        }
                                        var map = [],
                                            cards = [];
                                        for (var i in event.given_map) {
                                            var source = (_status.connectMode ? lib.playerOL : game.playerMap)[i];
                                            player.line(source, 'green');
                                            map.push([source, event.given_map[i]]);
                                            cards.addArray(event.given_map[i]);
                                        }
                                        if (map.length)
                                            game.loseAsync({
                                                gain_list: map,
                                                player: player,
                                                cards: cards,
                                                giver: player,
                                                animate: 'giveAuto',
                                            }).setContent('gaincardMultiple');
                                        ('step 5');
                                        if (event.count >= 2) {
                                            if (trigger.source && trigger.source.countGainableCards(player, trigger.source == player ? 'e' : 'he')) player.gainPlayerCard(trigger.source, trigger.source == player ? 'e' : 'he', true);
                                        } else event.finish();
                                        ('step 6');
                                        if (event.count >= 3) {
                                            if (trigger.source && trigger.source.isAlive()) trigger.source.damage();
                                        } else event.finish();
                                        ('step 7');
                                        if (event.count >= 4) {
                                            player.removeMark('baobian_chuli_damageEnd', event.count, false);
                                            if (trigger.card && trigger.cards.filterInD('od').length >= 1) player.gain(trigger.cards.filterInD('od'), 'gain2');
                                            trigger.baobian_chuli_damageEnded = true;
                                            player.markSkill('baobian_chuli');
                                        }
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: 1,
                                },
                                damageSource: {
                                    enable: 'chooseToUse',
                                    charlotte: true,
                                    filter(event, player) {
                                        if (!player.hasMark('baobian_chuli_damageSource')) return false;
                                        for (var i of lib.inpile) {
                                            var type = get.type(i);
                                            if (type == 'basic' && event.filterCard({ name: i }, player, event)) return true;
                                        }
                                        return false;
                                    },
                                    chooseButton: {
                                        dialog(event, player) {
                                            var list = [];
                                            for (var i = 0; i < lib.inpile.length; i++) {
                                                var name = lib.inpile[i];
                                                if (name == 'sha') {
                                                    if (event.filterCard && event.filterCard({ name: name }, player, event)) list.push(['基本', '', 'sha']);
                                                    for (var j of lib.inpile_nature) {
                                                        if (event.filterCard && event.filterCard({ name: name, nature: j }, player, event)) list.push(['基本', '', 'sha', j]);
                                                    }
                                                } else if (get.type(name) == 'basic' && event.filterCard({ name: name }, player, event)) list.push(['基本', '', name]);
                                            }
                                            return ui.create.dialog('豹变', [list, 'vcard']);
                                        },
                                        filter(button, player) {
                                            return _status.event.parent.filterCard({ name: button.link[2], nature: button.link[3] }, player, _status.event.parent);
                                        },
                                        check(button) {
                                            if (_status.event.parent.type != 'phase') return 1;
                                            var player = _status.event.player;
                                            if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[2])) return 0;
                                            return player.getUseValue({
                                                name: button.link[2],
                                                nature: button.link[3],
                                            });
                                        },
                                        backup(links, player) {
                                            return {
                                                filterCard: true,
                                                popname: true,
                                                log: false,
                                                check(card) {
                                                    return 7 - get.value(card);
                                                },
                                                position: 'hes',
                                                viewAs: { name: links[0][2], nature: links[0][3] },
                                            };
                                        },
                                        prompt(links, player) {
                                            return '将一张牌当' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                                        },
                                    },
                                    hiddenCard(player, name) {
                                        if (!lib.inpile.includes(name)) return false;
                                        var type = get.type(name);
                                        return type == 'basic';
                                    },
                                    ai: {
                                        fireAttack: true,
                                        respondSha: true,
                                        respondShan: true,
                                        skillTagFilter(player) {
                                            if (!player.countCards('hes') || player.hasSkill('pslongyin_used')) return false;
                                        },
                                        order: 1,
                                        result: {
                                            player(player) {
                                                if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                                return 1;
                                            },
                                        },
                                    },
                                },
                                useed: {
                                    trigger: {
                                        player: 'useCard1',
                                    },
                                    charlotte: true,
                                    silent: true,
                                    content() {
                                        player.removeSkill('baobian_chuli_useed');
                                        player.removeSkill('baobian_chuli_damageSource');
                                        var num = player.countMark('baobian_chuli_damageSource');
                                        if (!trigger.card.storage) trigger.card.storage = {};
                                        trigger.card.storage.baobian_chuli_damageSource = num;
                                        if (num >= 2 && trigger.addCount !== false) {
                                            trigger.addCount = false;
                                            var stat = player.getStat('card'),
                                                name = trigger.card.name;
                                            if (stat && stat[name]) stat[name]--;
                                        }
                                        if (num >= 3) {
                                            if (typeof trigger.baseDamage != 'number') trigger.baseDamage = 1;
                                            trigger.baseDamage++;
                                        }
                                        if (num >= 4) {
                                            trigger.directHit.addArray(game.filterPlayer2());
                                            player.removeMark('baobian_chuli_damageSource', num, false);
                                        }
                                        player.markSkill('baobian_chuli');
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: 1,
                                },
                                damageSource_damage: {
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    charlotte: true,
                                    silent: true,
                                    filter(event, player) {
                                        return event.card && event.card.storage && event.card.storage.baobian_chuli_damageSource >= 2 && event.parent.name == event.card.name;
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: 1,
                                },
                                damageSource_redo: {
                                    trigger: {
                                        global: 'useCardToTargeted',
                                    },
                                    silent: true,
                                    charlotte: true,
                                    popup: false,
                                    lastDo: true,
                                    filter(event, player) {
                                        return event.targets.length == event.parent.triggeredTargets4.length && event.card.storage && event.card.storage.baobian_chuli_damageSource && event.card.storage.baobian_chuli_damageSource >= 3;
                                    },
                                    content() {
                                        trigger.parent.targets = trigger.parent.targets.concat(trigger.targets);
                                        trigger.parent.triggeredTargets4 = trigger.parent.triggeredTargets4.concat(trigger.targets);
                                    },
                                    forced: true,
                                    _priority: 1,
                                },
                            },
                        },
                        jinbian_Angel_xin: {
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                'step 0';
                                var group = lib.group.map((group) => '<b1 style="color: rgb(210,200,000)">' + get.translation(group) + '</b1>');
                                event.groups = group;
                                player.chooseButton(4, ['晋变<br><b>选择4种势力并为其分配花色</b>', [group, 'tdnodes']], true);
                                ('step 1');
                                if (result.links?.length) {
                                    event.group = result.links;
                                    var suit = lib.suit.map((suit) => get.translation(suit));
                                    event.suit = suit;
                                    player.chooseButton(4, ['晋变<br><b>选择为' + event.group + '分配花色(按选择顺序分配)</b>', [suit, 'tdnodes']], true);
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.storage.jinbian_Angel_xin = [];
                                    for (var i = 0; i < event.group.length; i++) {
                                        var o = event.groups.length;
                                        while (o--) {
                                            if (event.groups[o] === event.group[i]) {
                                                var num = o;
                                            }
                                        }
                                        var o = event.suit.length;
                                        while (o--) {
                                            if (event.suit[o] === result.links[i]) {
                                                var num1 = o;
                                            }
                                        }
                                        player.storage.jinbian_Angel_xin.add([lib.group[num], lib.suit[num1], [], []]);
                                    }
                                    player.markSkill('jinbian_Angel_xin');
                                }
                            },
                            intro: {
                                content(event, player, storage) {
                                    var skills = '';
                                    for (var i of player.storage.jinbian_Angel_xin) {
                                        skills += '' + get.translation(i[1]) + '' + get.translation(i[0]) + '技能:';
                                        skills += i[2].length == 0 ? '暂无' : '' + get.translation(i[2]) + '=>所属角色' + get.translation(i[3]) + '';
                                        skills += '<br>';
                                    }
                                    return skills;
                                },
                            },
                            group: 'jinbian_Angel_xin_1',
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var cards = get.cards(1);
                                        player.showCards(cards);
                                        player.gain(cards);
                                        event.cards = cards;
                                        ('step 1');
                                        var cards = event.cards;
                                        var num = -1;
                                        for (var i of player.storage.jinbian_Angel_xin) {
                                            if (i[1] == cards[0].suit && i[2].length == 0) {
                                                var o = player.storage.jinbian_Angel_xin.length;
                                                while (o--) {
                                                    if (player.storage.jinbian_Angel_xin[o] === i) {
                                                        var num = o;
                                                    }
                                                }
                                                event.num = num;
                                            }
                                        }
                                        if (player.storage.jinbian_Angel_xin.map((Angel) => Angel[1]).includes(cards[0].suit) && num != -1) {
                                            var list;
                                            if (_status.characterlist) {
                                                list = [];
                                                for (var i = 0; i < _status.characterlist.length; i++) {
                                                    var name = _status.characterlist[i];
                                                    if (lib.character[name][1] == player.storage.jinbian_Angel_xin[num][0]) list.push(name);
                                                }
                                            } else if (_status.connectMode) {
                                                list = get.charactersOL(function (i) {
                                                    return lib.character[i][1] != player.storage.jinbian_Angel_xin[num][0];
                                                });
                                            } else {
                                                list = get.gainableCharacters(function (info) {
                                                    return info[1] == player.storage.jinbian_Angel_xin[num][0];
                                                });
                                            }
                                            var players = game.players.concat(game.dead);
                                            for (var i = 0; i < players.length; i++) {
                                                list.remove(players[i].name);
                                                list.remove(players[i].name1);
                                                list.remove(players[i].name2);
                                            }
                                            list = list.randomGets(3);
                                            event.characterlist = list;
                                            player.chooseButton(['选择需要获得武将的角色', [list, 'character']], true);
                                        } else {
                                            var num = 0;
                                            for (var i of player.storage.jinbian_Angel_xin.map((Angel) => Angel[2])) {
                                                if (i.length == 0) event.goto(0);
                                                else num++;
                                            }
                                            if (num == 4) {
                                                var skills = [];
                                                for (var i of player.storage.jinbian_Angel_xin.map((Angel) => Angel[3])) {
                                                    skills.addArray(
                                                        (lib.character[i][3] || []).filter(function (skill) {
                                                            var info = get.info(skill);
                                                            return info && !info.zhuSkill;
                                                        })
                                                    );
                                                }
                                                for (var i of skills) {
                                                    player.addSkillLog(i);
                                                }
                                                event.finish();
                                                player.awakenSkill('jinbian_Angel_xin');
                                                player.awakenSkill('dongdang_Angel');
                                            }
                                        }
                                        ('step 2');
                                        if (result.bool) {
                                            var skills = [];
                                            for (var i of result.links) {
                                                skills.addArray(
                                                    (lib.character[i][3] || []).filter(function (skill) {
                                                        var info = get.info(skill);
                                                        return info && !info.zhuSkill;
                                                    })
                                                );
                                            }
                                            var i = skills.randomGets(1);
                                            player.addSkillLog(i);
                                            for (var o of event.characterlist) {
                                                if (lib.character[o][3].includes(i[0])) {
                                                    player.storage.jinbian_Angel_xin[event.num][3].add(o);
                                                    player.storage.jinbian_Angel_xin[event.num][2].add(i[0]);
                                                }
                                            }
                                        }
                                    },
                                },
                                jx: {
                                    juexingji: true,
                                },
                            },
                        },
                        dongdang_Angel: {
                            trigger: {
                                global: 'dieEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                for (var i of game.filterPlayer()) {
                                    if (i.group == event.player.group) return false;
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                player.chooseControl().set('choiceList', ['失去三点体力上限仅清除武将牌记录', '清除已获得技能与武将牌记录']);
                                ('step 1');
                                if (result.index == 0) {
                                    player.loseMaxHp(3);
                                    for (var i of player.storage.jinbian_Angel_xin) {
                                        i[2] = [];
                                        i[3] = [];
                                    }
                                } else {
                                    for (var i of player.storage.jinbian_Angel_xin) {
                                        for (var o of i[2]) player.removeSkill(o);
                                    }
                                    for (var i of player.storage.jinbian_Angel_xin) {
                                        i[2] = [];
                                        i[3] = [];
                                    }
                                }
                            },
                        },
                        xinduanzou_chuli: {
                            trigger: {
                                player: 'loseAfter',
                            },
                            forced: true,
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            filter(event, player) {
                                if (event.parent.name != 'useCard') return false;
                                var evt = event.getl(player);
                                var cards = [];
                                if (evt) {
                                    if (evt.cards2 && evt.cards2.length) cards.addArray(evt.cards2);
                                    if (evt.js && evt.js.length) cards.addArray(evt.js);
                                }
                                return cards.filterInD('o').length >= 1;
                            },
                            content() {
                                'step 0';
                                var evt = trigger.getl(player);
                                var cards = [];
                                if (evt) {
                                    if (evt.cards2 && evt.cards2.length) cards.addArray(evt.cards2);
                                    if (evt.js && evt.js.length) cards.addArray(evt.js);
                                }
                                cards = cards.filterInD('o');
                                player.addToExpansion(cards, 'gain2').gaintag.add('xinduanzou_chuli');
                                ('step 1');
                                var cards = player.getExpansions('xinduanzou_chuli');
                                if (cards.length >= 2) {
                                    if (get.type2(cards[0]) == get.type2(cards[1])) {
                                        player.draw(cards.length);
                                        event.goto(3);
                                    } else {
                                        event._result = { control: get.type2(cards[1]) };
                                    }
                                } else event.finish();
                                ('step 2');
                                event.finish();
                                if (result.control) {
                                    var cards = player.getExpansions('xinduanzou_chuli').filter((i) => get.type2(i) == result.control);
                                    player.loseToDiscardpile(cards);
                                    player.draw(cards.length);
                                }
                                ('step 3');
                                var list = [],
                                    choiceList = ['失去一点体力', '弃置两张牌', '本回合此技能失效'];
                                if (player.hp >= 1 && !player.hasSkill('xinduanzou_chuli_1')) list.push('选项一');
                                else choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + '</span>';
                                if (
                                    player.getCards('he', function (card) {
                                        return lib.filter.cardDiscardable(card, player, 'xinduanzou_chuli');
                                    }).length > 1 &&
                                    !player.hasSkill('xinduanzou_chuli_2')
                                )
                                    list.push('选项二');
                                else choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + '</span>';
                                if (!player.hasSkill('xinduanzou_chuli_3')) list.push('选项三');
                                else choiceList[2] = '<span style="opacity:0.5">' + choiceList[2] + '</span>';
                                if (list.length) {
                                    if (list.length > 1) {
                                        player.chooseControl(list).set('prompt', '断奏:请执行一项').set('choiceList', choiceList);
                                    } else event._result = { control: list[0] };
                                } else event.finish();
                                ('step 4');
                                if (result.control == '选项一') {
                                    player.addTempSkill('xinduanzou_chuli_1');
                                    player.loseHp();
                                }
                                if (result.control == '选项二') {
                                    player.addTempSkill('xinduanzou_chuli_2');
                                    player.chooseToDiscard('he', 2, true);
                                }
                                if (result.control == '选项三') {
                                    player.addTempSkill('xinduanzou_chuli_3');
                                }
                            },
                            group: 'xinduanzou_chuli_max',
                            subSkill: {
                                1: {
                                    charlotte: true,
                                },
                                2: {
                                    charlotte: true,
                                },
                                3: {
                                    charlotte: true,
                                    init(player, skill) {
                                        player.addSkillBlocker(skill);
                                    },
                                    onremove(player, skill) {
                                        player.removeSkillBlocker(skill);
                                    },
                                    skillBlocker(skill, player) {
                                        return skill == 'xinduanzou_chuli';
                                    },
                                },
                                max: {
                                    trigger: {
                                        player: 'addToExpansionEnd',
                                    },
                                    silent: true,
                                    filter(event, player) {
                                        var max = 2;
                                        if (player.storage.xingge_chuli_count) max += player.storage.xingge_chuli_count;
                                        return player.getExpansions('xinduanzou_chuli').length > max;
                                    },
                                    content() {
                                        var max = 2;
                                        if (player.storage.xingge_chuli_count) max += player.storage.xingge_chuli_count;
                                        player.loseToDiscardpile(player.getExpansions('xinduanzou_chuli').slice(max, player.getExpansions('xinduanzou_chuli').length));
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: 1,
                                },
                            },
                        },
                        xingge_chuli: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            juexingji: true,
                            filter(event, player) {
                                var count = 0;
                                player.getHistory('gain', function (evt) {
                                    if (evt.getParent('phaseUse') && evt.getParent('phaseUse').player == player) count += evt.cards.length;
                                });
                                return count >= 6;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('xingge_chuli');
                                ('step 1');
                                var list = [];
                                for (var i = 1; i <= player.maxHp; i++) list.push(i);
                                for (var i = 0; i < list.length; i++) {
                                    list[i] = [list[i], get.cnNumber(list[i], true)];
                                }
                                var next = player.chooseButton(['星歌:是否失去任意点体力上限？', [list, 'tdnodes']]);
                                ('step 2');
                                if (result.links?.length) {
                                    player.loseMaxHp(result.links[0]);
                                    if (!player.storage.xingge_chuli_count) player.storage.xingge_chuli_count = 0;
                                    player.storage.xingge_chuli_count += result.links[0] * 2;
                                }
                                ('step 3');
                                player.addSkillLog('heyin_chuli');
                            },
                            derivation: 'heyin_chuli',
                        },
                        heyin_chuli: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return player.getExpansions('xinduanzou_chuli').length >= 2;
                            },
                            content() {
                                var max = 0,
                                    min = Infinity;
                                var cards = player.getExpansions('xinduanzou_chuli');
                                for (var i of cards) {
                                    var num = i.number;
                                    if (num > max) max = num;
                                    if (num < min) min = num;
                                }
                                player.loseToDiscardpile(cards);
                                if (max - min >= 1) player.draw(max - min);
                                if (min >= 1) player.chooseToDiscard(min, true, 'he');
                            },
                        },
                        duanzou_chuli: {
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                var num = event.card.number;
                                return !player.hasHistory('useSkill', (evt) => evt.skill == 'duanzou_chuli' && get.type2(evt.event.getParent(2).card) == get.type2(event.card)) && typeof num == 'number' && !event.duanzou_chuli_tag;
                            },
                            content() {
                                trigger.duanzou_chuli_tag = true;
                                player.markSkill('duanzou_chuli');
                            },
                            intro: {
                                content(storage, player) {
                                    var evt = player.getAllHistory('useCard');
                                    var num = evt.length - 1;
                                    for (var i = num; i >= 0; i--) {
                                        if (evt[i].duanzou_chuli_tag) return '<li>当前记录的类型:' + get.translation(get.type2(evt[i].card)) + '<br/><li>当前记录的点数:' + evt[i].card.number;
                                    }
                                },
                                markcount(storage, player) {
                                    var evt = player.getAllHistory('useCard');
                                    var num = evt.length - 1;
                                    for (var i = num; i >= 0; i--) {
                                        if (evt[i].duanzou_chuli_tag) return evt[i].card.number;
                                    }
                                },
                            },
                            group: 'duanzou_chuli_effect',
                            subSkill: {
                                effect: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    silent: true,
                                    filter(event, player) {
                                        var index = player.getAllHistory('useCard').indexOf(event);
                                        if (index <= 0) return false;
                                        return player.getAllHistory('useCard')[index - 1].duanzou_chuli_tag;
                                    },
                                    content() {
                                        'step 0';
                                        player.unmarkSkill('duanzou_chuli');
                                        var index = player.getAllHistory('useCard').indexOf(trigger);
                                        var evt = player.getAllHistory('useCard')[index - 1];
                                        if (get.type2(trigger.card) == get.type2(evt.card)) {
                                            player.chooseBool(get.prompt(event.name));
                                        } else event._result = { bool: true };
                                        ('step 1');
                                        if (result.bool) {
                                            var index = player.getAllHistory('useCard').indexOf(trigger);
                                            var evt = player.getAllHistory('useCard')[index - 1];
                                            if (get.type2(trigger.card) == get.type2(evt.card)) {
                                                var num1 = trigger.card.number;
                                                var num2 = evt.card.number;
                                                var num = Math.abs(num1 - num2);
                                                if (typeof num == 'number' && num >= 1) {
                                                    player.draw(num);
                                                    if (num1 > 0 && num2 > 0) player.chooseToDiscard('he', true, Math.min(num1, num2));
                                                }
                                            } else {
                                                trigger.duanzou_chuli_tag = true;
                                                player.markSkill('duanzou_chuli');
                                            }
                                        }
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: 1,
                                },
                            },
                        },
                        weixiang_chuli: {
                            audio: 'ext:魔王/audio:2',
                            derivation: ['fanfu_chuli', 'chuli_chenyin'],
                            trigger: {
                                player: 'dying',
                            },
                            juexingji: true,
                            forced: true,
                            content() {
                                'step 0';
                                player.gainMaxHp();
                                player.awakenSkill('weixiang_chuli');
                                ('step 1');
                                if (player.hp != player.maxHp) player.hp = player.maxHp;
                                ('step 2');
                                if (game.hasPlayer((current) => player.canCompare(current))) {
                                    player.chooseTarget('伪降:选择一名其他角色与其随机进行拼点', true, function (card, player, target) {
                                        return player.canCompare(target);
                                    });
                                } else event.finish();
                                ('step 3');
                                var target = result.targets[0];
                                var next = player.chooseToCompare(target);
                                if (!next.fixedResult) next.set('fixedResult', {});
                                next.fixedResult[player.playerid] = player.getCards('h').randomGet();
                                next.fixedResult[target.playerid] = target.getCards('h').randomGet();
                                ('step 4');
                                if (result.bool) {
                                    player.addSkillLog('fanfu_chuli');
                                } else {
                                    player.addSkillLog('chuli_chenyin');
                                }
                            },
                        },
                        fanfu_chuli: {
                            audio: 'ext:魔王/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            zhuanhuanji: true,
                            mark: true,
                            marktext: '☯',
                            intro: {
                                content(storage, player, skill) {
                                    if (player.storage.fanfu_chuli == true) return '你可将手牌弃至全场最少';
                                    return '你可以将手牌摸至全场最多';
                                },
                            },
                            filter(event, player) {
                                if (!player.storage.fanfu_chuli) return true;
                                return player.countCards('h');
                            },
                            filterCard() {
                                if (_status.event.player.storage.fanfu_chuli == true) return true;
                                return false;
                            },
                            selectCard() {
                                var player = _status.event.player;
                                if (player.storage.fanfu_chuli == true) {
                                    var min = Infinity;
                                    for (var i of game.players) {
                                        var count = i.countCards('h');
                                        if (count < min) min = count;
                                    }
                                    return Math.min(player.countCards('h') - min + 1, player.countCards('h'));
                                }
                                return -1;
                            },
                            content() {
                                var max = 0;
                                for (var i of game.players) {
                                    var count = i.countCards('h');
                                    if (count > max) max = count;
                                }
                                if (!player.storage.fanfu_chuli) player.storage.fanfu_chuli = false;
                                if (!player.storage.fanfu_chuli_effect) player.storage.fanfu_chuli_effect = [];
                                player.storage.fanfu_chuli_effect.add(player.storage.fanfu_chuli);
                                if (!player.storage.fanfu_chuli) {
                                    player.drawTo(max + 1);
                                }
                                player.changeZhuanhuanji(event.name);
                            },
                            group: 'fanfu_chuli_effect',
                            subSkill: {
                                effect: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!player.hasHistory('useSkill', (evt) => evt.skill == 'fanfu_chuli')) return false;
                                        if (!player.storage.fanfu_chuli_effect) return false;
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        var list = player.storage.fanfu_chuli_effect.slice(0);
                                        event.list = list;
                                        delete player.storage.fanfu_chuli_effect;
                                        ('step 1');
                                        var current = event.list.shift();
                                        var max = 0,
                                            min = Infinity;
                                        for (var i of game.players) {
                                            var count = i.countCards('h');
                                            if (count > max) max = count;
                                            if (count < min) min = count;
                                        }
                                        if (current) {
                                            player.drawTo(max + 1);
                                        } else {
                                            player.chooseToDiscard('h', true, player.countCards('h') - min + 1);
                                        }
                                        ('step 2');
                                        if (event.list.length) event.goto(1);
                                    },
                                },
                            },
                        },
                        pingxiang_chuli: {
                            audio: 'ext:魔王/audio:2',
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.hasAllHistory('useSkill', function (evt) {
                                    if (evt.skill == 'pingxiang_chuli' && evt.event.getParent(2).card.name == event.card.name) return true;
                                });
                            },
                            intro: {
                                content: '已记录的牌名:$',
                            },
                            content() {
                                player.markAuto('pingxiang_chuli', [trigger.card.name]);
                                if (player.getStorage('pingxiang_chuli').length >= player.maxHp) {
                                    player.unmarkAuto('pingxiang_chuli', player.getStorage('pingxiang_chuli'));
                                    player.gainMaxHp();
                                }
                            },
                        },
                        beifa_chuli: {
                            trigger: {
                                player: 'useCardToPlayered',
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.name == 'useCardToTargeted' && event.player == player) return false;
                                return event.targets.length == 1 && player.countMark('beifa_chuli') < player.maxHp;
                            },
                            content() {
                                player.addMark('beifa_chuli');
                            },
                            marktext: '伐',
                            intro: {
                                name: '伐',
                                content: 'mark',
                            },
                        },
                        mingzuo_chuli: {
                            audio: 'ext:魔王/audio:2',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            hiddenCard(player, name) {
                                if (lib.inpile.includes(name) && player.countMark('beifa_chuli')) return true;
                            },
                            filter(event, player) {
                                if (event.responded || event.mingzuo_chuli || !player.countMark('beifa_chuli')) return false;
                                for (var i of lib.inpile) {
                                    if (player.hasHistory('custom', (evt) => evt.mingzuo_chuli && evt.name == i)) continue;
                                    if (event.filterCard && event.filterCard({ name: i }, player, event)) return true;
                                    if (i == 'sha') {
                                        for (var j of lib.inpile_nature) if (event.filterCard && event.filterCard({ name: i, nature: j }, player, event)) return true;
                                    }
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    for (var i of lib.inpile) {
                                        if (player.hasHistory('custom', (evt) => evt.mingzuo_chuli && evt.name == i)) continue;
                                        var type = get.type2(i);
                                        if (event.filterCard && event.filterCard({ name: i }, player, event)) {
                                            list.push([type, '', i]);
                                        }
                                    }
                                    return ui.create.dialog('天任', [list, 'vcard'], 'hidden');
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    if (ui.cardPile.hasChildNodes()) {
                                        var names = [];
                                        for (var i = 0; i < player.countMark('beifa_chuli'); i++) {
                                            if (_status.event.parent.filterCard(ui.cardPile.childNodes[i], player, _status.event.parent)) names.add(ui.cardPile.childNodes[i].name);
                                        }
                                        if (names.includes(button.link[2])) return 20 * Math.max(1, player.getUseValue({ name: button.link[2], nature: button.link[3] }));
                                    }
                                    return -1;
                                },
                                backup(links, player) {
                                    return {
                                        selectCard: -1,
                                        filterCard: () => false,
                                        viewAs: {
                                            name: links[0][2],
                                        },
                                        check(card) {
                                            return Math.min(0.01, 6 - get.value(card));
                                        },
                                        log: false,
                                        precontent: lib.skill.mingzuo_chuli.contentx,
                                    };
                                },
                                prompt(links, player) {
                                    var name = links[0][2];
                                    var nature = links[0][3];
                                    return '选择' + (get.translation(nature) || '') + get.translation(name) + '的目标';
                                },
                            },
                            contentx() {
                                'step 0';
                                var num = player.countMark('beifa_chuli'),
                                    cards = game.cardsGotoOrdering(get.cards(num)).cards;
                                game.log(player, '展示了', cards);
                                player.$throw(cards, 3000);
                                player.removeMark('beifa_chuli', num);
                                //player.getHistory('custom').push({ mingzuo_chuli: true, name: event.result.card.name });
                                event.mingzuo_chuli_changeMark = num;
                                event.trigger('mingzuo_chuli_changeMark');
                                event._result = cards;
                                ('step 1');
                                if (result && result[0]) {
                                    event.cardsx = result;
                                    var evt = event.parent;
                                    if (evt.name == '_wuxie')
                                        evt.filterCard = function (card, player) {
                                            if (card.name != 'wuxie') return false;
                                            return lib.filter.cardEnabled(card, player, 'forceEnable');
                                        };
                                    var cards = result.filter(function (i) {
                                        return i.name == event.result.card.name && evt.filterCard(i, player, event.parent);
                                    });
                                    if (cards.length) {
                                        event.linksx = [cards[0]];
                                        if (cards.length == 1) event._result = { bool: true, links: cards };
                                        else player.chooseButton(['选择要使用或打出的牌', cards], true);
                                    } else event.goto(3);
                                } else event.goto(5);
                                ('step 2');
                                if (result.links?.length) event.linksx = result.links;
                                event.orderingCards.removeArray(event.linksx);
                                event.cardsx = event.cardsx.filter(function (i) {
                                    return !event.linksx.includes(i);
                                });
                                if (event.cardsx.length) {
                                    for (var i of event.cardsx) ui.cardPile.appendChild(i);
                                    player.addMark('beifa_chuli', event.cardsx.length);
                                    game.updateRoundNumber();
                                }
                                event.result.card = {
                                    name: event.result.card.name,
                                    nature: event.result.card.nature,
                                    cards: event.linksx,
                                };
                                if (event.linksx[0].nature) event.result.card.nature = event.linksx[0].nature;
                                event.result.cards = event.linksx;
                                event.finish();
                                ('step 3');
                                player.addTempSkill('mingzuo_chuli_banned');
                                player.chooseBool('天任:是否失去一点体力获得' + get.translation(event.cardsx));
                                ('step 4');
                                if (result.bool) {
                                    player.loseHp();
                                    player.gain(event.cardsx, 'gain2');
                                }
                                ('step 5');
                                var evt = event.parent;
                                //if(evt.name=="_wuxie") evt=event.getParent("chooseToUse");
                                evt.set('mingzuo_chuli', true);
                                evt.goto(0);
                                return;
                            },
                            subSkill: {
                                banned: {
                                    charlotte: true,
                                    init(player, skill) {
                                        player.addSkillBlocker(skill);
                                    },
                                    onremove(player, skill) {
                                        player.removeSkillBlocker(skill);
                                    },
                                    skillBlocker(skill, player) {
                                        return skill == 'mingzuo_chuli';
                                    },
                                },
                            },
                            ai: {
                                order: 15,
                                result: {
                                    player(player, target) {
                                        if (game.me == player) return 0;
                                        if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                        return 1;
                                    },
                                },
                            },
                        },
                        moubian_chuli: {
                            trigger: {
                                player: 'mingzuo_chuli_changeMark',
                            },
                            forced: true,
                            usable: 1,
                            filter(event, player) {
                                return event.mingzuo_chuli_changeMark >= player.maxHp;
                            },
                            content() {
                                'step 0';
                                if (!player.storage.moubian_chuli_effect) player.storage.moubian_chuli_effect = {};
                                player.storage.moubian_chuli_effect.countCards = player.countCards('h');
                                player.storage.moubian_chuli_effect.hp = player.hp;
                                player.storage.moubian_chuli_effect.HandcardLimit = player.getHandcardLimit();
                                player.addTempSkill('moubian_chuli_effect');
                                player.markSkill('moubian_chuli_effect');
                                ('step 1');
                                var list = [],
                                    choiceList = ['将手牌数调整至体力上限', '将体力值回复至体力上限', '本回合手牌上限等同于体力上限'];
                                event.target = target;
                                if (player.countCards('h') != player.maxHp) list.push('选项一');
                                else choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + '</span>';
                                if (player.hp < player.maxHp) list.push('选项二');
                                else choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + '</span>';
                                list.push('选项三');
                                player.chooseControl(list).set('prompt', '谋变:请执行一项').set('choiceList', choiceList);
                                ('step 2');
                                if (result.control == '选项一') {
                                    if (player.countCards('h') > player.maxHp) {
                                        player.chooseToDiscard('h', true, player.countCards('h') - player.maxHp);
                                    } else player.drawTo(player.maxHp);
                                }
                                if (result.control == '选项二') player.hp = player.maxHp;
                                if (result.control == '选项三') player.addTempSkill('moubian_chuli_effect2');
                            },
                            subSkill: {
                                effect: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    charlotte: true,
                                    silent: true,
                                    intro: {
                                        content(storage) {
                                            var str = '记录的手牌数:' + storage.countCards;
                                            str += '<br/>记录的体力值:' + storage.hp;
                                            str += '<br/>记录的手牌上限:' + storage.HandcardLimit;
                                            return str;
                                        },
                                    },
                                    filter(event, player) {
                                        return player.storage.moubian_chuli_effect;
                                    },
                                    content() {
                                        'step 0';
                                        var num = player.storage.moubian_chuli_effect.countCards;
                                        if (player.countCards('h') != num) {
                                            if (player.countCards('h') > num) {
                                                player.chooseToDiscard('h', true, player.countCards('h') - num);
                                            } else player.drawTo(num);
                                        }
                                        ('step 1');
                                        var num = player.storage.moubian_chuli_effect.hp;
                                        if (player.hp != num) {
                                            if (player.hp > num) player.loseHp(player.hp - num);
                                            else player.recover(num - player.hp);
                                        }
                                        ('step 2');
                                        player.removeSkill('moubian_chuli_effect');
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: 1,
                                },
                                effect2: {
                                    charlotte: true,
                                    mod: {
                                        maxHandcardBase(player, num) {
                                            return player.maxHp;
                                        },
                                    },
                                },
                            },
                        },
                        liuli_chuli: {
                            trigger: {
                                target: 'useCardToTarget',
                            },
                            forced: true,
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('he') && event.card.name == 'sha' && game.hasPlayer((current) => current != event.player && current != player);
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard('he', get.prompt2('liuli_chuli'))
                                    ('step 1');
                                if (
                                    game.hasPlayer(function (current) {
                                        return current != player && current.canUse({ name: 'juedou' }, trigger.player) && trigger.player.isAlive();
                                    })
                                ) {
                                    player.chooseTarget('流离:选择一名其他角色视为其对' + get.translation(trigger.player) + '使用一张【决斗】', true, function (card, player, target) {
                                        var trigger = _status.event.getTrigger();
                                        return target != player && target.canUse({ name: 'juedou' }, trigger.player);
                                    });
                                } else event.finish();
                                ('step 2');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    player.line(target);
                                    player.addTempSkill('liuli_chuli_effect');
                                    target.useCard({ name: 'juedou' }, trigger.player, 'noai');
                                } else event.finish();
                                ('step 3');
                                if (event.liuli_chuli_effect) trigger.parent.excluded.add(player);
                            },
                            subSkill: {
                                effect: {
                                    trigger: {
                                        global: 'juedouEnd',
                                    },
                                    charlotte: true,
                                    silent: true,
                                    filter(event, player) {
                                        return event.getParent(2).name == 'liuli_chuli' && event.getParent(2).player == player && event.turn && event.turn != event.player;
                                    },
                                    content() {
                                        trigger.getParent(2).liuli_chuli_effect = true;
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: 1,
                                },
                            },
                        },
                        chuli_xinjihai: {
                            enable: ['chooseToUse', 'chooseToRespond'],
                            mark: true,
                            intro: {
                                content(storage, player) {
                                    return '当前需要弃置' + lib.skill.chuli_xinjihai.getNum(player) + '张牌';
                                },
                                markcount(storage, player) {
                                    return lib.skill.chuli_xinjihai.getNum(player);
                                },
                            },
                            getNum(player) {
                                return player.getHistory('useSkill', (evt) => evt.skill == 'chuli_xinjihai_backup').length + 1;
                            },
                            hiddenCard(player, name) {
                                var names = [];
                                player.getHistory('useCard', function (evt) {
                                    if (evt.skill && evt.skill == 'chuli_xinjihai_backup') names.add(evt.card.name);
                                });
                                player.getHistory('respond', function (evt) {
                                    if (evt.skill && evt.skill == 'chuli_xinjihai_backup') names.add(evt.card.name);
                                });
                                if (!names.includes(name) && ['basic', 'trick'].includes(get.type(name)) && lib.inpile.includes(name) && lib.skill.chuli_xinjihai.getNum(player) <= player.countCards('he')) return true;
                            },
                            filter(event, player) {
                                if (event.responded || lib.skill.chuli_xinjihai.getNum(player) > player.countCards('he')) return false;
                                var names = [];
                                player.getHistory('useCard', function (evt) {
                                    if (evt.skill && evt.skill == 'chuli_xinjihai_backup') names.add(evt.card.name);
                                });
                                player.getHistory('respond', function (evt) {
                                    if (evt.skill && evt.skill == 'chuli_xinjihai_backup') names.add(evt.card.name);
                                });
                                for (var i of lib.inpile) {
                                    if (!names.includes(i) && ['basic', 'trick'].includes(get.type(i)) && event.filterCard({ name: i }, player, event)) return true;
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    var names = [];
                                    player.getHistory('useCard', function (evt) {
                                        if (evt.skill && evt.skill == 'chuli_xinjihai_backup') names.add(evt.card.name);
                                    });
                                    player.getHistory('respond', function (evt) {
                                        if (evt.skill && evt.skill == 'chuli_xinjihai_backup') names.add(evt.card.name);
                                    });
                                    for (var i of lib.inpile) {
                                        var type = get.type(i);
                                        if (names.includes(i)) continue;
                                        if (['basic', 'trick'].includes(get.type(i)) && event.filterCard({ name: i }, player, event)) {
                                            list.push([type, '', i]);
                                            if (i == 'sha') {
                                                for (var j of lib.inpile_nature) if (event.filterCard && event.filterCard({ name: i, nature: j }, player, event)) list.push(['基本', '', 'sha', j]);
                                            }
                                        }
                                    }
                                    return ui.create.dialog('济海', [list, 'vcard'], 'hidden');
                                },
                                check(button) {
                                    if (button.link[2] == 'shan') return 3;
                                    var player = _status.event.player;
                                    if (button.link[2] == 'jiu') {
                                        if (player.getUseValue({ name: 'jiu' }) <= 0) return 0;
                                        if (player.countCards('h', 'sha')) return player.getUseValue({ name: 'jiu' });
                                    }
                                    return player.getUseValue({ name: button.link[2], nature: button.link[3] }) / 4;
                                },
                                backup(links, player) {
                                    return {
                                        selectCard: lib.skill.chuli_xinjihai.getNum(player),
                                        filterCard: lib.filter.cardDiscardable,
                                        log: false,
                                        viewAs: {
                                            name: links[0][2],
                                            nature: links[0][3],
                                            suit: 'none',
                                            number: null,
                                        },
                                        position: 'he',
                                        ignoreMod: true,
                                        check(card) {
                                            return Math.min(0.01, 6 - get.value(card));
                                        },
                                        precontent() {
                                            player.markSkill('chuli_xinjihai');
                                            var cards = event.result.cards;
                                            player.discard(cards);
                                            event.result.card = {
                                                name: event.result.card.name,
                                                nature: event.result.card.nature,
                                            };
                                            event.result.cards = [];
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    var name = links[0][2];
                                    var nature = links[0][3];
                                    return '弃置' + get.cnNumber(lib.skill.chuli_xinjihai.getNum(player)) + '张牌视为使用' + (get.translation(nature) || '') + get.translation(name);
                                },
                            },
                            ai: {
                                order(item, player) {
                                    if (_status.event.type == 'phase' && !lib.skill.chuli_xinjihai.getNum(player) && player.getUseValue({ name: 'jiu' }, null, true) > 0 && player.countCards('h', 'sha')) return get.order({ name: 'jiu' }) + 1;
                                    return 1;
                                },
                                respondShan: true,
                                respondSha: true,
                                skillTagFilter(player) {
                                    if (lib.skill.chuli_xinjihai.getNum(player) > player.countCards('he')) return false;
                                },
                                result: {
                                    player(player) {
                                        if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                        return 1;
                                    },
                                },
                            },
                            group: ['chuli_xinjihai_add', 'chuli_xinjihai_mark'],
                            subSkill: {
                                backup: {},
                                mark: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    silent: true,
                                    content() {
                                        player.markSkill('chuli_xinjihai');
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: 1,
                                },
                                add: {
                                    trigger: {
                                        player: 'useCard2',
                                    },
                                    filter(event, player) {
                                        var info = get.info(event.card);
                                        if (info.allowMultiple == false) return false;
                                        else if (event.targets && !info.multitarget) {
                                            if (
                                                !game.hasPlayer(function (current) {
                                                    return !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, player, current);
                                                })
                                            )
                                                return false;
                                        }
                                        return event.skill && event.skill == 'chuli_xinjihai_backup';
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var prompt2 = '为' + get.translation(trigger.card) + '增加一个目标';
                                        player
                                            .chooseTarget(get.prompt('chuli_xinjihai'), function (card, player, target) {
                                                var player = _status.event.player;
                                                return !_status.event.targets.includes(target) && lib.filter.targetEnabled2(_status.event.card, player, target);
                                            })
                                            .set('prompt2', prompt2)
                                            .set('ai', function (target) {
                                                var trigger = _status.event.getTrigger();
                                                var player = _status.event.player;
                                                return get.effect(target, trigger.card, player, player);
                                            })
                                            .set('card', trigger.card)
                                            .set('targets', trigger.targets);
                                        ('step 1');
                                        if (result.bool) {
                                            if (!event.isMine() && !event.isOnline()) game.delayx();
                                            event.targets = result.targets;
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        if (event.targets) {
                                            player.line(event.targets, 'fire');
                                            trigger.targets.addArray(event.targets);
                                        }
                                    },
                                },
                            },
                        },
                        chuli_xichan: {
                            trigger: {
                                player: 'phaseDrawEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('he') >= 1;
                            },
                            content() {
                                'step 0';
                                player.chooseCardTarget({
                                    filterCard(card) {
                                        for (var i of ui.selected.cards) if (i.suit == card.suit) return false;
                                        return true;
                                    },
                                    filterTarget: lib.filter.notMe,
                                    selectCard: [1, 4],
                                    complexCard: true,
                                    prompt: get.prompt('chuli_xichan'),
                                    prompt2: '若问可有仙人助,且看刘海戏蟾蜍',
                                });
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0],
                                        cards = result.cards;
                                    event.target = target;
                                    event.count = cards.length;
                                    target.gain(cards, 'giveAuto', player);
                                } else event.finish();
                                ('step 2');
                                var num = target.countCards('h') - player.countCards('h');
                                if (num >= 1) {
                                    target.chooseToDiscard('h', num, true);
                                } else event.goto(4);
                                ('step 3');
                                if (result.bool) player.draw(result.cards.length);
                                ('step 4');
                                if (player.countCards('he')) {
                                    player.chooseCard('将' + event.count + '张牌交给其', 'he', event.count);
                                } else event.finish();
                                ('step 5');
                                if (result.bool) target.gain(result.cards, 'giveAuto', player);
                            },
                        },
                        chuli_sancai: {
                            enable: 'phaseUse',
                            lose: false,
                            discard: false,
                            delay: false,
                            selectCard() {
                                return [1, _status.event.player.countCards('he')];
                            },
                            filterCard(card, player) {
                                var type = get.type2(card),
                                    evtx = _status.event.getParent('phaseUse');
                                if (ui.selected.cards) {
                                    for (var i of ui.selected.cards) if (get.type2(i) != type) return false;
                                }
                                return !player.hasHistory('lose', function (evt) {
                                    if (evt.getParent(2).name == 'chuli_sancai' && evt.getParent('phaseUse') == evtx) {
                                        for (var i of evt.cards) {
                                            if (get.type2(i) == type) return true;
                                        }
                                    }
                                });
                            },
                            filterTarget(card, player, target) {
                                return !player.hasHistory('useSkill', (evt) => evt.skill == 'chuli_sancai' && evt.targets.includes(target)) && target != player;
                            },
                            filter(event, player) {
                                return game.hasPlayer((current) => lib.skill.chuli_sancai.filterTarget(null, player, current)) && player.hasCard((card) => lib.skill.chuli_sancai.filterCard(card, player), 'he');
                            },
                            position: 'he',
                            content() {
                                'step 0';
                                target.gain(cards, 'giveAuto', player);
                                ('step 1');
                                if (!target.isMinHandcard()) {
                                    var type = get.type2(cards[0]),
                                        cards = [];
                                    for (var i = 0; i < 2; i++) {
                                        var card = get.cardPile((card) => !cards.includes(card) && get.type2(card) != type);
                                        if (card) cards.push(card);
                                        else break;
                                    }
                                    player.addMark('chuli_sancai_effect', 1, false);
                                    player.addTempSkill('chuli_sancai_effect');
                                    if (cards.length) player.gain(cards, 'gain2');
                                }
                            },
                            subSkill: {
                                effect: {
                                    charlotte: true,
                                    intro: {
                                        content: '手牌上限+#',
                                    },
                                    mod: {
                                        maxHandcard(player, num) {
                                            return num + player.countMark('chuli_sancai_effect');
                                        },
                                    },
                                },
                            },
                        },
                        chuli_jihai: {
                            init(player) {
                                if (typeof player.storage.chuli_jihai != 'number') player.storage.chuli_jihai = 1;
                                player.markSkill('chuli_jihai');
                            },
                            intro: {
                                content: '当前需要弃置#张牌',
                            },
                            enable: ['chooseToUse', 'chooseToRespond'],
                            hiddenCard(player, name) {
                                var names = [];
                                player.getHistory('useCard', function (evt) {
                                    if (evt.skill && evt.skill == 'chuli_jihai_backup') names.add(evt.card.name);
                                });
                                player.getHistory('respond', function (evt) {
                                    if (evt.skill && evt.skill == 'chuli_jihai_backup') names.add(evt.card.name);
                                });
                                if (!names.includes(name) && ['basic', 'trick'].includes(get.type(name)) && lib.inpile.includes(name) && player.countMark('chuli_jihai') <= player.countCards('he')) return true;
                            },
                            filter(event, player) {
                                if (event.responded || event.chuli_jihai || player.countMark('chuli_jihai') > player.countCards('he')) return false;
                                var names = [];
                                player.getHistory('useCard', function (evt) {
                                    if (evt.skill && evt.skill == 'chuli_jihai_backup') names.add(evt.card.name);
                                });
                                player.getHistory('respond', function (evt) {
                                    if (evt.skill && evt.skill == 'chuli_jihai_backup') names.add(evt.card.name);
                                });
                                for (var i of lib.inpile) {
                                    if (!names.includes(i) && ['basic', 'trick'].includes(get.type(i)) && event.filterCard({ name: i }, player, event)) return true;
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    var names = [];
                                    player.getHistory('useCard', function (evt) {
                                        if (evt.skill && evt.skill == 'chuli_jihai_backup') names.add(evt.card.name);
                                    });
                                    player.getHistory('respond', function (evt) {
                                        if (evt.skill && evt.skill == 'chuli_jihai_backup') names.add(evt.card.name);
                                    });
                                    for (var i of lib.inpile) {
                                        var type = get.type(i);
                                        if (names.includes(i)) continue;
                                        if (['basic', 'trick'].includes(get.type(i)) && event.filterCard({ name: i }, player, event)) {
                                            list.push([type, '', i]);
                                            if (i == 'sha') {
                                                for (var j of lib.inpile_nature) if (event.filterCard && event.filterCard({ name: i, nature: j }, player, event)) list.push(['基本', '', 'sha', j]);
                                            }
                                        }
                                    }
                                    return ui.create.dialog('济海', [list, 'vcard'], 'hidden');
                                },
                                check(button) {
                                    if (button.link[2] == 'shan') return 3;
                                    var player = _status.event.player;
                                    if (button.link[2] == 'jiu') {
                                        if (player.getUseValue({ name: 'jiu' }) <= 0) return 0;
                                        if (player.countCards('h', 'sha')) return player.getUseValue({ name: 'jiu' });
                                    }
                                    return player.getUseValue({ name: button.link[2], nature: button.link[3] }) / 4;
                                },
                                backup(links, player) {
                                    return {
                                        selectCard: player.countMark('chuli_jihai'),
                                        filterCard: lib.filter.cardDiscardable,
                                        log: false,
                                        viewAs: {
                                            name: links[0][2],
                                            nature: links[0][3],
                                            suit: 'none',
                                            number: null,
                                        },
                                        position: 'he',
                                        ignoreMod: true,
                                        check(card) {
                                            return Math.min(0.01, 6 - get.value(card));
                                        },
                                        precontent() {
                                            if (!player.storage.chuli_jihai_bool) {
                                                player.storage.chuli_jihai++;
                                                if (player.storage.chuli_jihai >= 3) player.storage.chuli_jihai_bool = true;
                                            } else {
                                                player.storage.chuli_jihai--;
                                                if (player.storage.chuli_jihai <= 1) player.storage.chuli_jihai_bool = false;
                                            }
                                            player.markSkill('chuli_jihai');
                                            var cards = event.result.cards;
                                            player.discard(cards);
                                            event.result.card = {
                                                name: event.result.card.name,
                                                nature: event.result.card.nature,
                                            };
                                            event.result.cards = [];
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    var name = links[0][2];
                                    var nature = links[0][3];
                                    return '弃置' + get.cnNumber(player.countMark('chuli_jihai')) + '张牌视为使用' + (get.translation(nature) || '') + get.translation(name);
                                },
                            },
                            ai: {
                                order(item, player) {
                                    if (_status.event.type == 'phase' && !player.countMark('chuli_jihai') && player.getUseValue({ name: 'jiu' }, null, true) > 0 && player.countCards('h', 'sha')) return get.order({ name: 'jiu' }) + 1;
                                    return 1;
                                },
                                respondShan: true,
                                respondSha: true,
                                skillTagFilter(player) {
                                    if (player.countMark('chuli_jihai') > player.countCards('he')) return false;
                                },
                                result: {
                                    player(player) {
                                        if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                        return 1;
                                    },
                                },
                            },
                            group: 'chuli_jihai_add',
                            subSkill: {
                                add: {
                                    trigger: {
                                        player: 'useCard2',
                                    },
                                    filter(event, player) {
                                        var info = get.info(event.card);
                                        if (info.allowMultiple == false) return false;
                                        else if (event.targets && !info.multitarget) {
                                            if (
                                                !game.hasPlayer(function (current) {
                                                    return !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, player, current);
                                                })
                                            )
                                                return false;
                                        }
                                        return event.skill && event.skill == 'chuli_jihai_backup';
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var prompt2 = '为' + get.translation(trigger.card) + '增加一个目标';
                                        player
                                            .chooseTarget(get.prompt('chuli_jihai'), function (card, player, target) {
                                                var player = _status.event.player;
                                                return !_status.event.targets.includes(target) && lib.filter.targetEnabled2(_status.event.card, player, target);
                                            })
                                            .set('prompt2', prompt2)
                                            .set('ai', function (target) {
                                                var trigger = _status.event.getTrigger();
                                                var player = _status.event.player;
                                                return get.effect(target, trigger.card, player, player);
                                            })
                                            .set('card', trigger.card)
                                            .set('targets', trigger.targets);
                                        ('step 1');
                                        if (result.bool) {
                                            if (!event.isMine() && !event.isOnline()) game.delayx();
                                            event.targets = result.targets;
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        if (event.targets) {
                                            player.line(event.targets, 'fire');
                                            trigger.targets.addArray(event.targets);
                                        }
                                    },
                                },
                            },
                        },
                        qimou_chuli: {
                            audio: 'ext:魔王/audio:2',
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            logTarget: 'player',
                            prompt2: '',
                            filter(event, player) {
                                return event.player != player && player.inRange(event.player) && event.player.inRange(player);
                            },
                            content() {
                                'step 0';
                                event.count = 0;
                                event.linksx = 0;
                                if (player.countCards('h') >= trigger.player.countCards('h')) event.count++;
                                if (player.hp >= trigger.player.hp) event.count++;
                                if (event.count < 2) {
                                    var str = get.translation(trigger.player);
                                    player
                                        .chooseButton(
                                            [
                                                '奇谋:你可以执行其中任意项',
                                                [
                                                    [
                                                        [0, '对' + str + '造成一点伤害且其本回合使用的第一张牌无效'],
                                                        [1, '令' + str + '弃置手牌至与你相等,而后你摸等量的牌并交出等同其手牌数的牌'],
                                                    ],
                                                    'textbutton',
                                                ],
                                            ],
                                            [1, 2]
                                        )
                                        .set('filterButton', function (button) {
                                            var target = _status.event.sourcex,
                                                player = _status.event.player;
                                            if (button.link == 0) return target.hp > player.hp;
                                            else return target.countCards('h') > player.countCards('h');
                                        })
                                        .set('sourcex', trigger.player);
                                } else event.goto(5);
                                ('step 1');
                                if (result.links?.length) {
                                    event.linksx = result.links.length;
                                    if (result.links.includes(0)) {
                                        trigger.player.damage();
                                        trigger.player.addTempSkill('qimou_chuli_effect');
                                    }
                                    if (result.links.includes(1)) {
                                        trigger.player
                                            .chooseToDiscard('h', true)
                                            .set('selectCard', function () {
                                                var num = _status.event.player.countCards('h') - _status.event.sourcex.countCards('h');
                                                if (num < 1) return ui.selected.cards.length + 1;
                                                return num;
                                            })
                                            .set('sourcex', player)
                                            .set('complexCard', true)
                                            .set('filterCard', function () {
                                                var num = _status.event.player.countCards('h') - _status.event.sourcex.countCards('h');
                                                return num >= 1;
                                            });
                                    } else event.goto(5);
                                } else event.goto(5);
                                ('step 2');
                                if (result.cards?.length) player.draw(result.cards.length);
                                ('step 3');
                                if (player.countCards('he') && trigger.player.countCards('h')) {
                                    var num = trigger.player.countCards('h');
                                    player.chooseCard('交给其' + num + '张牌', 'he', num, true);
                                } else event.goto(5);
                                ('step 4');
                                if (result.bool) trigger.player.gain(result.cards, 'giveAuto', player);
                                ('step 5');
                                if (event.count == 2) {
                                    player.chooseBool(get.prompt2('yingbian_Angel'));
                                } else event.goto(7);
                                ('step 6');
                                if (result.bool) {
                                    //event.count--;
                                    var next = game.createEvent('yingbian_Angel', false);
                                    next.player = player;
                                    next.setContent(lib.skill.yingbian_Angel.content);
                                    //if(event.count>=1) event.goto(5);
                                }
                                ('step 7');
                                if (event.linksx == 2 && player.canMoveCard()) {
                                    player.moveCard(true);
                                } else event.finish();
                                ('step 8');
                                if (result.targets?.length) {
                                    var target = result.targets[1];
                                    if (target != player) {
                                        if (!player.storage.qimou_chuli_effect2) player.storage.qimou_chuli_effect2 = [];
                                        player.storage.qimou_chuli_effect2.add(target);
                                        player.addSkill('qimou_chuli_effect2');
                                        player.markSkill('qimou_chuli_effect2');
                                    }
                                }
                            },
                            subSkill: {
                                effect: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    filter(event, player) {
                                        return player.getHistory('useCard').indexOf(event) == 0;
                                    },
                                    charlotte: true,
                                    silent: true,
                                    content() {
                                        game.log(trigger.card, '无效了');
                                        trigger.targets.length = 0;
                                        trigger.all_excluded = true;
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: 1,
                                },
                                effect2: {
                                    trigger: {
                                        global: ['phaseAfter', 'die'],
                                    },
                                    charlotte: true,
                                    silent: true,
                                    filter(event, player) {
                                        return player.storage.qimou_chuli_effect2 && player.storage.qimou_chuli_effect2.includes(event.player);
                                    },
                                    content() {
                                        player.storage.qimou_chuli_effect2.remove(trigger.player);
                                        if (!player.storage.qimou_chuli_effect2.length) player.removeSkill(event.name);
                                    },
                                    intro: {
                                        content: '$视为在你的攻击范围内且你也视为在$的攻击范围内',
                                    },
                                    mod: {
                                        inRangeOf(from, to) {
                                            if (to.storage.qimou_chuli_effect2 && to.storage.qimou_chuli_effect2.includes(from)) return true;
                                        },
                                        inRange(from, to) {
                                            if (from.storage.qimou_chuli_effect2 && from.storage.qimou_chuli_effect2.includes(to)) return true;
                                        },
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: 1,
                                },
                            },
                        },
                        chuli_peifang: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.hasCard((card) => lib.skill.chuli_peifang.filterCard(card, player), 'he');
                            },
                            position: 'he',
                            lose: false,
                            delay: false,
                            discard: false,
                            filterCard(card, player) {
                                var evtx = _status.event.getParent('phaseUse');
                                return (
                                    !player.hasHistory('lose', function (evt) {
                                        return evtx == evt.getParent('phaseUse') && evt.getParent(2).name == 'chuli_peifang' && get.type2(evt.cards[0], false) == get.type2(card, false);
                                    }) &&
                                    player.getExpansions('chuli_peifang').every(function (i) {
                                        return get.type2(i, false) != get.type2(card, false);
                                    })
                                );
                            },
                            content() {
                                player.addToExpansion(cards, 'give', player).gaintag.add('chuli_peifang');
                            },
                            intro: {
                                markcount: 'expansion',
                                content: 'expansion',
                            },
                            group: 'chuli_peifang_add',
                            subSkill: {
                                add: {
                                    trigger: {
                                        player: 'addToExpansionEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.gaintag.includes('chuli_peifang')) {
                                            var cards = player.getExpansions('chuli_peifang'),
                                                types = [];
                                            for (var i of cards) types.add(get.type2(i, false));
                                            if (types.length < 3) return false;
                                            for (var i of event.cards) types.remove(get.type2(i, false));
                                            return types.length <= 3 && (ui.cardPile.childNodes.length || ui.discardPile.childNodes.length);
                                        }
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        var cards = [];
                                        for (var i = 0; i < ui.cardPile.childNodes.length; i++) cards.add(ui.cardPile.childNodes[i].name);
                                        for (var i = 0; i < ui.discardPile.childNodes.length; i++) cards.add(ui.discardPile.childNodes[i].name);
                                        player.chooseButton(['选择要获得的牌', [cards, 'vcard']], true);
                                        ('step 1');
                                        if (result.links?.length)
                                            player.gain(
                                                get.cardPile((card) => card.name == result.links[0][2]),
                                                'gain2'
                                            );
                                    },
                                },
                            },
                        },
                        chuli_qianzhuo: {
                            trigger: {
                                global: ['useCard', 'respond'],
                            },
                            filter(event, player) {
                                if (player.hasSkill('chuli_qianzhuo_change') && event.player != player) return false;
                                return player.getExpansions('chuli_peifang').some((i) => get.type2(i, false) == get.type2(event.card));
                            },
                            content() {
                                'step 0';
                                var cards = player.getExpansions('chuli_peifang').filter((i) => get.type2(i, false) == get.type2(trigger.card));
                                if (cards.length) player.loseToDiscardpile(cards);
                                ('step 1');
                                var type = get.type2(trigger.card);
                                if (type == 'basic') trigger.player.draw(2);
                                else if (type == 'equip') {
                                    trigger.player.addTempSkill('chuli_qianzhuo_effect');
                                } else if (type == 'trick') {
                                    player.chooseTarget('浅酌:对一名角色造成一点伤害', true).set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    });
                                }
                                if (type != 'trick') event.finish();
                                ('step 2');
                                if (result.targets?.length) {
                                    player.line(result.targets[0]);
                                    result.targets[0].damage();
                                }
                            },
                            group: 'chuli_qianzhuo_phase',
                            subSkill: {
                                change: {
                                    charlotte: true,
                                },
                                phase: {
                                    trigger: {
                                        global: 'phaseBegin',
                                    },
                                    prompt2: '本回合内将【浅酌】中的[一名角色]改为[你]',
                                    filter(event, player) {
                                        return player.getExpansions('chuli_peifang').length >= 1;
                                    },
                                    content() {
                                        player.addTempSkill('chuli_qianzhuo_change');
                                    },
                                },
                                effect: {
                                    trigger: {
                                        player: 'useCard1',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    mark: true,
                                    intro: {
                                        content: '你使用的下一张牌不可被响应',
                                    },
                                    content() {
                                        player.removeSkill(event.name);
                                        trigger.directHit.addArray(game.filterPlayer2());
                                    },
                                },
                            },
                        },
                        chuli_yanxiao: {
                            trigger: {
                                global: 'damageEnd',
                            },
                            filter(event, player) {
                                if (event.parent.name != 'juedou') return false;
                                if (event.parent.player == event.player) return player.countCards('h') && player.canUse('lebu', event.parent.target) && event.parent.target.isAlive();
                                return event.parent.target == event.player && event.parent.player.isAlive();
                            },
                            forced: true,
                            usable: 1,
                            content() {
                                'step 0';
                                if (trigger.parent.target == trigger.player) {
                                    player.chooseBool(get.prompt('chuli_yanxiao', trigger.parent.player), '与其各摸两张牌');
                                } else {
                                    player
                                        .chooseCard(get.prompt('chuli_yanxiao', trigger.parent.target), '.将一张手牌当【乐不思蜀】对其使用', function (card) {
                                            return player.canUse({ name: 'lebu', cards: [card] }, _status.event.getTrigger().parent.target);
                                        })
                                        .set('ai', function (card) {
                                            if (get.value(card) >= 10) return -1;
                                            return get.effect(_status.event.getTrigger().parent.target, { name: 'lebu', cards: [card] }, _status.event.player, _status.event.player);
                                        });
                                }
                                ('step 1');
                                if (result.cards?.length) {
                                    if (result.cards && result.cards.length >= 1) {
                                        player.useCard({ name: 'lebu', cards: result.cards }, result.cards, trigger.parent.target);
                                    } else {
                                        game.asyncDraw([player, trigger.parent.player], 2);
                                    }
                                } else player.getStat('triggerSkill').chuli_yanxiao--;
                            },
                        },
                        chuli_guose: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget: true,
                            content() {
                                'step 0';
                                target.drawTo(target.maxHp);
                                ('step 1');
                                if (target.hasUseTarget('juedou')) target.chooseUseTarget('juedou', true);
                            },
                        },
                        chuli_chenyin: {
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            marktext: '银',
                            audio: 'ext:魔王/audio:2',
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            filter(event, player) {
                                return player.countCards('he') >= player.maxHp - player.hp && player.maxHp - player.hp > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseCard('he', player.maxHp - player.hp, true);
                                ('step 1');
                                if (result.cards?.length) {
                                    player.addToExpansion(result.cards, player, 'giveAuto').gaintag.add('chuli_chenyin');
                                }
                            },
                            group: ['chuli_chenyin_1', 'chuli_chenyin_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'phaseJieshuEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.getExpansions('chuli_chenyin').length && player.hujia >= 1;
                                    },
                                    content() {
                                        'step 0';
                                        if (trigger.player != player) {
                                            trigger.player.chooseCard('h', player.hujia, true);
                                        }
                                        ('step 1');
                                        if (result.cards?.length) {
                                            trigger.player.addToExpansion(result.cards, trigger.player, 'giveAuto').gaintag.add('chuli_chenyin');
                                        }
                                        ('step 2');
                                        var target = trigger.player.next;
                                        target.addToExpansion(trigger.player.getExpansions('chuli_chenyin'), trigger.player, 'giveAuto').gaintag.add('chuli_chenyin');
                                        ('step 3');
                                        delete trigger.player.storage.chuli_chenyin;
                                        trigger.player.update();
                                    },
                                },
                                2: {
                                    audio: 'ext:魔王/audio:true',
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.getExpansions('chuli_chenyin').length;
                                    },
                                    content() {
                                        player.draw(player.getExpansions('chuli_chenyin').length);
                                        player.discard(player.getExpansions('chuli_chenyin'));
                                    },
                                },
                            },
                        },
                        chuli_jiaohao: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('he', { type: 'equip' }) > 0;
                            },
                            filterTarget: true,
                            position: 'he',
                            filterCard: {
                                type: 'equip',
                            },
                            selectCard: 1,
                            selectTarget: 1,
                            check(card) {
                                return 4 - get.value(card);
                            },
                            content() {
                                'step 0';
                                if (target.isDamaged()) event.goto(2);
                                ('step 1');
                                target.damage(1);
                                event.goto(4);
                                ('step 2');
                                player.chooseControl('令' + get.translation(target) + '回复1点体力', '对' + get.translation(target) + '造成1点伤害').set('ai', function (event, player) {
                                    if (get.attitude(player, event.target) >= 0) return '令' + get.translation(target) + '回复1点体力';
                                    return '对' + get.translation(target) + '造成1点伤害';
                                });
                                ('step 3');
                                if (result.index == 0) {
                                    target.recover(1);
                                } else {
                                    target.damage(1);
                                }
                                ('step 4');
                            },
                            ai: {
                                expose: 0.4,
                                threaten: 0.4,
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (get.attitude(player, target) < 0 && target.isMinHp()) return -1;
                                        if (get.attitude(player, target) > 0 && target.isMinHp() && target.isDamaged()) return 1;
                                        return 0;
                                    },
                                },
                            },
                        },
                        chuli_xiaoji: {
                            group: ['chuli_xiaoji_use', 'chuli_xiaoji_num'],
                            audio: 'xiaoji',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card) == 'equip';
                            },
                            content() {
                                player.draw('nodelay');
                            },
                            subSkill: {
                                use: {
                                    audio: 'ext:厨力/audio:2',
                                    trigger: {
                                        player: 'loseAfter',
                                        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var evt = event.getl(player);
                                        return evt && evt.player == player && evt.cards2 && evt.cards2.filter((i) => get.type(i) == 'equip').length;
                                    },
                                    content() {
                                        'step 0';
                                        event.count = trigger.getl(player).cards2.filter((i) => get.type(i) == 'equip').length;
                                        ('step 1');
                                        event.count--;
                                        player.draw();
                                        ('step 2');
                                        if (event.count > 0) {
                                            player.chooseBool(get.prompt2(event.name)).set('frequentSkill', event.name).ai = lib.filter.all;
                                        } else event.finish();
                                        ('step 3');
                                        if (result.bool) {
                                            event.goto(1);
                                        }
                                    },
                                },
                                num: {
                                    audio: 'ext:厨力/audio:2',
                                    trigger: {
                                        player: 'changeHp',
                                    },
                                    forced: true,
                                    content() {
                                        player.draw();
                                    },
                                },
                            },
                        },
                        chuli_shoujun: {
                            trigger: {
                                player: ['phaseUseBefore', 'phaseEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getExpansions('chuli_xiansi').length;
                            },
                            content() {
                                'step 0';
                                var cards = player.getExpansions('chuli_xiansi');
                                if (!cards.length || !player.countCards('h')) {
                                    event.goto(2);
                                    return;
                                }
                                var next = player.chooseToMove('守郡:是否交换<逆>和手牌？');
                                next.set('list', [
                                    [get.translation(player) + '(你)的<逆>', cards],
                                    ['手牌区', player.getCards('h'), 'chuli_shoujun_tag'],
                                ]);
                                next.set('filterMove', function (from, to) {
                                    return typeof to != 'number';
                                });
                                next.set('processAI', function (list) {
                                    var player = _status.event.player,
                                        cards = list[0][1].concat(list[1][1]).sort(function (a, b) {
                                            return get.value(a) - get.value(b);
                                        }),
                                        cards2 = cards.splice(0, player.getExpansions('chuli_xiansi').length);
                                    return [cards2, cards];
                                });
                                ('step 1');
                                if (result.bool) {
                                    var pushs = result.moved[0],
                                        gains = result.moved[1];
                                    pushs.removeArray(player.getExpansions('chuli_xiansi'));
                                    gains.removeArray(player.getCards('h'));
                                    if (!pushs.length || pushs.length != gains.length) return;
                                    player.addToExpansion(pushs).gaintag.add('chuli_xiansi');
                                    player.gain(gains, 'gain2', 'log');
                                }
                            },
                            subSkill: {
                                tag: {
                                    name: '手牌',
                                },
                            },
                        },
                        chuli_duoquan: {
                            trigger: {
                                player: 'damageAfter',
                                source: 'damageAfter',
                            },
                            forced: true,
                            juexingji: true,
                            derivation: 'chuli_juedui',
                            filter(event, player) {
                                return player.countMark('chuli_mobing') > player.hp;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('chuli_duoquan');
                                player.addSkill('chuli_juedui');
                                ('step 1');
                                player.chooseControl('加一点体力上限', '减一点体力上限');
                                ('step 2');
                                player[result.index == 0 ? 'gainMaxHp' : 'loseMaxHp']();
                            },
                        },
                        chuli_juedui: {
                            enable: 'phaseUse',
                            usable: 1,
                            delay: false,
                            content() {
                                'step 0';
                                var hs = player.getCards('h');
                                player.discard(hs).set('delay', false);
                                player.loseHp(player.hp);
                                ('step 1');
                                event.num = 0;
                                event.togain = [];
                                ('step 2');
                                var card = get.cardPile(function (card) {
                                    for (var i = 0; i < event.togain.length; i++) {
                                        if (get.type(card, 'trick') == get.type(event.togain[i], 'trick')) return false;
                                    }
                                    return true;
                                });
                                if (card) {
                                    event.togain.push(card);
                                    event.num++;
                                    if (event.num < 3) event.redo();
                                }
                                ('step 3');
                                if (event.togain.length) {
                                    player.gain(event.togain, 'gain2');
                                }
                            },
                        },
                        chuli_chengjie1: {
                            trigger: {
                                player: 'dying',
                            },
                            _priority: 1000,
                            filter(event, player) {
                                return player.countMark('chuli_mobing') >= player.maxHp;
                            },
                            content() {
                                'step 0';
                                player.storage.diy_chengjie2 = player.maxHp;
                                player.removeMark('chuli_mobing', player.maxHp);
                                player.addMark('chuli_mobing', 1);
                                var r = Math.floor(player.maxHp / 2) - player.hp;
                                if (r > 0) {
                                    player.recover(r);
                                }
                                ('step 1');
                                if (player.hasSkill('chuli_juedui')) {
                                    player.draw(player.storage.diy_chengjie2);
                                    player.chooseTarget(get.prompt('chuli_juedui'), '令任意一名角色受到一点伤害').set('ai', function (target) {
                                        return -get.attitude(player, target);
                                    });
                                } else event.finish();
                                ('step 2');
                                if (result.targets?.length) {
                                    result.targets[0].damage();
                                }
                            },
                            _priority: 10,
                        },
                        chuli_chengjie: {
                            group: ['chuli_chengjie1'],
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                return player.maxHp > player.hp && player.countMark('chuli_mobing') >= player.getDamagedHp();
                            },
                            content() {
                                'step 0';
                                player.storage.chuli_chengjie = player.getDamagedHp();
                                player.removeMark('chuli_mobing', player.getDamagedHp());
                                player.addMark('chuli_mobing', 1); //QQQ
                                player.recover();
                                ('step 1');
                                if (player.hasSkill('chuli_juedui')) {
                                    player.draw(player.storage.chuli_chengjie);
                                    player.chooseTarget(get.prompt('chuli_juedui'), '令任意一名角色受到一点伤害 ').set('ai', function (target) {
                                        return -get.attitude(player, target);
                                    });
                                } else event.finish();
                                ('step 2');
                                if (result.targets?.length) {
                                    result.targets[0].damage();
                                }
                            },
                        },
                        chuli_mobing: {
                            mod: {
                                targetInRange(card, player, target, now) {
                                    return true;
                                },
                            },
                            trigger: {
                                player: ['loseHpBegin', 'damageBegin3'],
                                source: 'damageBegin2',
                            },
                            marktext: '罪',
                            intro: {
                                name: '罪',
                                content: 'mark',
                            },
                            forced: true,
                            content() {
                                player.addMark('chuli_mobing', trigger.num);
                            },
                        },
                        chuli_xiansi: {
                            trigger: {
                                global: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                if (event.player == player) {
                                    return game.hasPlayer(function (current) {
                                        return current != player && current.countCards('he');
                                    });
                                } else return event.player.hp < player.hp && player.getExpansions('chuli_xiansi').length > 1;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (trigger.player == player) {
                                    player.chooseTarget(get.prompt('chuli_xiansi'), lib.filter.notMe, [1, game.countPlayer() - 1]).set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                } else {
                                    var cards = player.getExpansions('chuli_xiansi').randomGets(2);
                                    player.loseToDiscardpile(cards);
                                    player.loseHp();
                                    player.draw(2);
                                    event.finish();
                                }
                                ('step 1');
                                if (result.targets?.length) {
                                    var targets = result.targets;
                                    event.targets = result.targets.sortBySeat();
                                    event.count = result.targets.length;
                                } else event.finish();
                                ('step 2');
                                var target = event.targets.shift();
                                event.target = target;
                                player.choosePlayerCard(target, 'he');
                                ('step 3');
                                if (result.links?.length) player.addToExpansion(result.links, target, 'give').gaintag.add('chuli_xiansi');
                                if (event.targets.length) event.goto(2);
                                ('step 4');
                                if (event.count >= player.maxHp) {
                                    player.loseHp();
                                    player.draw(2);
                                }
                            },
                            marktext: '逆',
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                        },
                        chuli_jianwu1: {
                            trigger: {
                                player: ['phaseUseBegin', 'phaseDrawBefore'],
                            },
                            forced: true,
                            content() {
                                if (trigger.name == 'phaseUse') {
                                    var cards = [],
                                        types = ['equip'];
                                    for (var i of types) {
                                        var card = get.cardPile(function (card) {
                                            return get.type(card, false) == i;
                                        });
                                        if (card) cards.push(card);
                                    }
                                    if (cards.length) player.gain(cards, 'gain');
                                } else trigger.cancel();
                            },
                        },
                        chuli_lianhuan: {
                            trigger: {
                                player: ['linkAfter', 'enterGame'],
                                global: 'phaseBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.name == 'link') return !player.isLinked();
                                return (event.name != 'phase' || game.phaseNumber == 0) && !player.isLinked();
                            },
                            content() {
                                player.link(true);
                            },
                            ai: {
                                effect: {
                                    target(card) {
                                        if (card.name == 'tiesuo') return 'zerotarget';
                                    },
                                },
                            },
                            global: 'chuli__lianhuan_g',
                            group: 'chuli_lianhuan_link',
                            subSkill: {
                                link: {
                                    audio: 'ext:魔王/audio:2',
                                    audioname: ['chuli_caocao'],
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    filter(event, player) {
                                        return game.hasPlayer(function (current) {
                                            return player.inRange(current) && !current.isLinked();
                                        });
                                    },
                                    forced: true,
                                    logTarget(trigger, player) {
                                        return game.filterPlayer(function (current) {
                                            return player.inRange(current) && !current.isLinked();
                                        });
                                    },
                                    content() {
                                        'step 0';
                                        event.targetsx = game
                                            .filterPlayer(function (current) {
                                                return player.inRange(current) && !current.isLinked();
                                            })
                                            .sortBySeat();
                                        ('step 1');
                                        if (event.targetsx.length) {
                                            var target = event.targetsx.shift();
                                            target.link(true);
                                            if (event.targetsx.length) event.redo();
                                        }
                                    },
                                },
                                g: {
                                    trigger: {
                                        player: 'phaseDrawBegin2',
                                    },
                                    filter(event, player) {
                                        return (
                                            player.isLinked() &&
                                            !event.numFix &&
                                            game.hasPlayer(function (current) {
                                                return current.hasSkill('chuli_lianhuan');
                                            })
                                        );
                                    },
                                    charlotte: true,
                                    forced: true,
                                    silent: true,
                                    firstDo: true,
                                    content() {
                                        trigger.num += game.countPlayer(function (current) {
                                            return current.hasSkill('chuli_lianhuan');
                                        });
                                    },
                                    mod: {
                                        maxHandcard(player, num) {
                                            if (player.isLinked())
                                                return (
                                                    num +
                                                    game.countPlayer(function (current) {
                                                        return current.hasSkill('chuli_lianhuan');
                                                    })
                                                );
                                        },
                                        globalFrom(from, to) {
                                            if (from.isLinked() && from != to && to.isLinked()) return -Infinity;
                                        },
                                    },
                                    popup: false,
                                    _priority: 1,
                                },
                            },
                        },
                        chuli_manyan: {
                            audio: 'ext:魔王/audio:2',
                            trigger: {
                                global: 'damageBegin1',
                            },
                            forced: true,
                            logTarget: 'source',
                            filter(event, player) {
                                return event.source && event.source != player && (!event.nature || event.nature != 'fire');
                            },
                            content() {
                                trigger.nature = 'fire';
                            },
                            group: ['chuli_manyan_add', 'chuli_manyan_draw'],
                            subSkill: {
                                add: {
                                    trigger: {
                                        global: 'damageBegin3',
                                    },
                                    filter(event, player) {
                                        return event.parent.name == '_lianhuan' && event.nature && event.nature == 'fire' && event.parent.getTrigger().player == player && event.player != player;
                                    },
                                    forced: true,
                                    logTarget: 'player',
                                    content() {
                                        trigger.num++;
                                    },
                                },
                                draw: {
                                    trigger: {
                                        global: 'damageBegin4',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.nature && event.nature == 'fire' && event.player.isLinked() && event.num > 0;
                                    },
                                    content() {
                                        player.draw(trigger.num);
                                    },
                                },
                            },
                        },
                        chuli_duanzhou: {
                            audio: 'ext:魔王/audio:2',
                            trigger: {
                                global: 'damageBegin4',
                            },
                            filter(event, player) {
                                return event.nature && event.player != player && event.player.isLinked();
                            },
                            logTarget(trigger, player) {
                                return game.filterPlayer(function (current) {
                                    return player != current && current.isLinked();
                                });
                            },
                            content() {
                                'step 0';
                                event.targetsx = game
                                    .filterPlayer(function (current) {
                                        return player != current && current.isLinked();
                                    })
                                    .sortBySeat();
                                event.count = event.targetsx.length;
                                ('step 1');
                                if (event.targetsx.length) {
                                    var target = event.targetsx.shift();
                                    target.link(false);
                                    if (event.targetsx.length) event.redo();
                                }
                                ('step 2');
                                player.draw(event.count);
                            },
                        },
                        chuli__lianhuan_g: {
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            filter(event, player) {
                                return (
                                    player.isLinked() &&
                                    !event.numFix &&
                                    game.hasPlayer(function (current) {
                                        return current.hasSkill('chuli_lianhuan');
                                    })
                                );
                            },
                            charlotte: true,
                            forced: true,
                            silent: true,
                            firstDo: true,
                            content() {
                                trigger.num += game.countPlayer(function (current) {
                                    return current.hasSkill('chuli_lianhuan');
                                });
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    if (player.isLinked())
                                        return (
                                            num +
                                            game.countPlayer(function (current) {
                                                return current.hasSkill('chuli_lianhuan');
                                            })
                                        );
                                },
                                globalFrom(from, to) {
                                    if (from.isLinked() && from != to && to.isLinked()) return -Infinity;
                                },
                            },
                            popup: false,
                            _priority: 1,
                        },
                        chuli_rende: {
                            audio: 'ext:魔王/audio:2',
                            enable: 'phaseUse',
                            filterCard: true,
                            selectCard: [1, Infinity],
                            discard: false,
                            lose: false,
                            delay: false,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            check(card) {
                                if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') return 0;
                                if (!ui.selected.cards.length && card.name == 'du') return 20;
                                var player = get.owner(card);
                                if (ui.selected.cards.length >= Math.max(2, player.countCards('h') - player.hp)) return 0;
                                if (player.hp == player.maxHp || player.storage.rerende < 0 || player.countCards('h') <= 1) {
                                    var players = game.filterPlayer();
                                    for (var i = 0; i < players.length; i++) {
                                        if (players[i].hasSkill('haoshi') && !players[i].isTurnedOver() && !players[i].hasJudge('lebu') && get.attitude(player, players[i]) >= 3 && get.attitude(players[i], player) >= 3) {
                                            return 11 - get.value(card);
                                        }
                                    }
                                    if (player.countCards('h') > player.hp) return 10 - get.value(card);
                                    if (player.countCards('h') > 2) return 6 - get.value(card);
                                    return -1;
                                }
                                return 10 - get.value(card);
                            },
                            content() {
                                'step 0';
                                var evtx = event.getParent('phaseUse');
                                var num = 0;
                                player.getHistory('lose', function (evt) {
                                    if (evt.getParent('phaseUse') == evtx && evt.getParent(2).name == 'chuli_rende' && evt.getParent(2) != event) num += evt.cards.length;
                                });
                                target.gain(cards, player, 'giveAuto').gaintag.add('chuli_rende');
                                if (num < 2) {
                                    if (num + cards.length >= 2) {
                                        var list = [];
                                        if (
                                            lib.filter.cardUsable({ name: 'sha' }, player, event.getParent('chooseToUse')) &&
                                            game.hasPlayer(function (current) {
                                                return player.canUse('sha', current);
                                            })
                                        ) {
                                            list.push(['基本', '', 'sha']);
                                        }
                                        for (var i of lib.inpile_nature) {
                                            if (
                                                lib.filter.cardUsable({ name: 'sha', nature: i }, player, event.getParent('chooseToUse')) &&
                                                game.hasPlayer(function (current) {
                                                    return player.canUse({ name: 'sha', nature: i }, current);
                                                })
                                            ) {
                                                list.push(['基本', '', 'sha', i]);
                                            }
                                        }
                                        if (
                                            lib.filter.cardUsable({ name: 'tao' }, player, event.getParent('chooseToUse')) &&
                                            game.hasPlayer(function (current) {
                                                return player.canUse('tao', current);
                                            })
                                        ) {
                                            list.push(['基本', '', 'tao']);
                                        }
                                        if (
                                            lib.filter.cardUsable({ name: 'jiu' }, player, event.getParent('chooseToUse')) &&
                                            game.hasPlayer(function (current) {
                                                return player.canUse('jiu', current);
                                            })
                                        ) {
                                            list.push(['基本', '', 'jiu']);
                                        }
                                        if (list.length) {
                                            player.chooseButton(['是否视为使用一张不计入次数限制的基本牌？', [list, 'vcard']]).set('ai', function (button) {
                                                var player = _status.event.player;
                                                var card = { name: button.link[2], nature: button.link[3] };
                                                if (card.name == 'tao') {
                                                    if (player.hp == 1 || (player.hp == 2 && !player.hasShan()) || player.needsToDiscard()) {
                                                        return 5;
                                                    }
                                                    return 1;
                                                }
                                                if (card.name == 'sha') {
                                                    if (
                                                        game.hasPlayer(function (current) {
                                                            return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
                                                        })
                                                    ) {
                                                        if (card.nature == 'fire') return 2.95;
                                                        if (card.nature == 'thunder' || card.nature == 'ice') return 2.92;
                                                        return 2.9;
                                                    }
                                                    return 0;
                                                }
                                                if (card.name == 'jiu') {
                                                    return 0.5;
                                                }
                                                return 0;
                                            });
                                        } else {
                                            event.finish();
                                        }
                                        player.storage.rerende = -1;
                                    } else {
                                        event.finish();
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                if (result.links?.length) {
                                    var card = { name: result.links[0][2], nature: result.links[0][3] };
                                    player.chooseUseTarget(card, true, false);
                                }
                            },
                            ai: {
                                fireAttack: true,
                                order(skill, player) {
                                    if (player.hp < player.maxHp && player.storage.rerende < 2 && player.countCards('h') > 1) {
                                        return 10;
                                    }
                                    return 4;
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
                                        if (player.hp == player.maxHp || player.storage.rerende < 0 || player.countCards('h') <= 1) {
                                            if (nh >= np - 1 && np <= player.hp && !target.hasSkill('haoshi')) return 0;
                                        }
                                        return Math.max(1, 5 - nh);
                                    },
                                },
                                effect: {
                                    target(card, player, target) {
                                        if (player == target && get.type(card) == 'equip') {
                                            if (player.countCards('e', { subtype: get.subtype(card) })) {
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        return current != player && get.attitude(player, current) > 0;
                                                    })
                                                ) {
                                                    return 0;
                                                }
                                            }
                                        }
                                    },
                                },
                                threaten: 0.8,
                            },
                            group: ['chuli_rende_draw', 'chuli_rende_gain'],
                            subSkill: {
                                draw: {
                                    trigger: {
                                        global: ['useCard', 'respond'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.hasHistory('lose', function (evt) {
                                            if (evt.parent == event) {
                                                for (var i of evt.cards) {
                                                    if (evt.gaintag_map[i.cardid] && evt.gaintag_map[i.cardid].includes('chuli_rende')) return true;
                                                }
                                            }
                                        });
                                        return false;
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                                gain: {
                                    trigger: {
                                        global: 'loseEnd',
                                    },
                                    filter(event, player) {
                                        if (event.type != 'discard') return false;
                                        for (var i of event.cards) {
                                            if (event.gaintag_map[i.cardid] && event.gaintag_map[i.cardid].includes('chuli_rende')) return true;
                                        }
                                        return false;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var cards = [];
                                        for (var i of trigger.cards) {
                                            if (trigger.gaintag_map[i.cardid] && trigger.gaintag_map[i.cardid].includes('chuli_rende')) cards.add(i);
                                        }
                                        player.chooseButton([get.prompt('chuli_rende'), cards], [1, cards.length]);
                                        ('step 1');
                                        if (result.links?.length) {
                                            player.gain(result.links, 'gain2');
                                            if (result.links.length > 1) player.loseHp();
                                        }
                                    },
                                },
                            },
                        },
                        chuli_shengnu: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return !game.hasPlayer(function (current) {
                                    return current != player && current.group == player.group;
                                });
                            },
                            juexingji: true,
                            forced: true,
                            derivation: ['chuli_shichou', 'chuli_taoyi'],
                            content() {
                                'step 0';
                                player.awakenSkill('chuli_shengnu');
                                ('step 1');
                                player.hp = player.maxHp;
                                ('step 2');
                                var cards = [];
                                for (var i = 0; i < 3; i++) {
                                    var card = get.cardPile(function (card) {
                                        return card.name == 'tao' && !cards.includes(card);
                                    });
                                    if (card) cards.add(card);
                                }
                                if (cards.length) player.addToExpansion(cards, 'gain2').gaintag.add('chuli_taoyi');
                                ('step 3');
                                var num = player.maxHp - 4;
                                if (num != 0) {
                                    if (num > 0) player.loseMaxHp(num);
                                    else player.gainMaxHp(Math.abs(num));
                                }
                                player.removeSkill('chuli_rende');
                                player.addSkill('chuli_shichou');
                                player.addSkill('chuli_taoyi');
                                player.say(['龙意怒火,汝皆不能逃脱!', '龙怒降临,岂是尔等凡人可抗!', '不报此仇,誓不罢休!'].randomGet());
                            },
                        },
                        chuli_shichou: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            forceDie: true,
                            filter(event, player) {
                                return player.isAlive();
                            },
                            content() {
                                var cards = [];
                                for (var i = 0; i < 3; i++) {
                                    var card = get.cardPile(function (card) {
                                        return !cards.filter(function (i) {
                                            return get.type2(card) == get.type2(i);
                                        }).length;
                                    });
                                    if (card) cards.add(card);
                                }
                                if (cards) player.gain(cards, 'gain2');
                            },
                            group: ['chuli_shichou_skip', 'chuli_shichou_After', 'chuli_shichou_discard', 'chuli_shichou_die'],
                            subSkill: {
                                die: {
                                    trigger: {
                                        player: 'die',
                                    },
                                    forceDie: true,
                                    forced: true,
                                    logTarget() {
                                        return game.filterPlayer().sortBySeat();
                                    },
                                    content() {
                                        'step 0';
                                        event.targetsx = game.filterPlayer().sortBySeat();
                                        ('step 1');
                                        if (event.targetsx.length) {
                                            var target = event.targetsx.shift();
                                            target.damage('fire', 'nocard');
                                            target.addTempSkill('baiban', 'roundStart');
                                            if (event.targetsx.length) event.redo();
                                        }
                                    },
                                },
                                discard: {
                                    trigger: {
                                        player: 'phaseDiscardEnd',
                                    },
                                    filter(event, player) {
                                        return player.getExpansions('chuli_taoyi').length;
                                        var cards = [];
                                        player.getHistory('lose', function (evt) {
                                            if (evt.type == 'discard' && evt.getParent('phaseDiscard') == event) cards.addArray(evt.cards2);
                                        });
                                        return player.isAlive() && cards.length;
                                    },
                                    forced: true,
                                    content() {
                                        var cards = [];
                                        player.getHistory('lose', function (evt) {
                                            if (evt.type == 'discard' && evt.getParent('phaseDiscard') == trigger) cards.addArray(evt.cards2);
                                        });
                                        var num = cards.length - player.getExpansions('chuli_taoyi').length;
                                        if (num > 0) player.damage(num, 'nosource');
                                    },
                                },
                                After: {
                                    trigger: {
                                        player: 'phaseUseAfter',
                                    },
                                    filter(event, player) {
                                        return player.isAlive() && !player.hasHistory('sourceDamage', () => true) && player.getExpansions('chuli_taoyi').length;
                                    },
                                    forced: true,
                                    usable: 3,
                                    content() {
                                        player.loseHp();
                                        var next = player.phaseUse();
                                        event.next.remove(next);
                                        trigger.parent.next.push(next);
                                    },
                                },
                                skip: {
                                    trigger: {
                                        player: ['phaseJudgeBefore', 'phaseDrawBefore'],
                                    },
                                    forced: true,
                                    silent: true,
                                    filter(event, player) {
                                        return player.isAlive();
                                    },
                                    content() {
                                        var str = trigger.name == 'phaseJudge' ? '判定阶段' : '摸牌阶段';
                                        game.log(player, '跳过了', '#y' + str);
                                        trigger.cancel();
                                    },
                                    popup: false,
                                    _priority: 1,
                                },
                            },
                            mod: {
                                globalFrom(from, to) {
                                    if (from != to) return -Infinity;
                                },
                            },
                        },
                        chuli_taoyi: {
                            trigger: {
                                player: 'dying',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getExpansions('chuli_taoyi').length;
                            },
                            content() {
                                'step 0';
                                player.say(['桃园依旧,来世再结…', '结草衔环,报兄弟大恩!', '桃园结义,营一世之交'].randomGet());
                                player.loseToDiscardpile(player.getExpansions('chuli_taoyi')[0]);
                                player.loseMaxHp();
                                ('step 1');
                                if (player.hp < 5) {
                                    player.recover(5 - player.hp);
                                }
                            },
                            marktext: '义',
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            group: ['chuli_taoyi_draw', 'chuli_taoyi2'],
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: 'phaseUseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.getExpansions('chuli_taoyi').length < 3;
                                    },
                                    content() {
                                        player.draw(3 - player.getExpansions('chuli_taoyi').length);
                                    },
                                },
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    if (player.getExpansions('chuli_taoyi').length < 3) return num + 3 - player.getExpansions('chuli_taoyi').length;
                                },
                            },
                        },
                        chuli_qirang: {
                            enable: 'phaseUse',
                            usable: 1,
                            init(player) {
                                if (!lib.dynamicTranslate.chuli_qirang) {
                                    lib.dynamicTranslate.chuli_qirang = function (player) {
                                        if (player.storage.chuli_denxian_qirang) return '<b>出牌阶段限一次:</b><br/>你可获得锦囊牌装备牌各一张';
                                        else return '<b>出牌阶段限一次:</b><br/>你可弃置两张基本牌而后获得锦囊牌装备牌各一张,以此法获得的牌在本回合内不能使用 / 打出 / 弃置';
                                    };
                                }
                            },
                            filterCard(card) {
                                return get.type(card) == 'basic';
                            },
                            selectCard() {
                                var player = _status.event.player;
                                if (player.storage.chuli_denxian_qirang) return 0;
                                else return 2;
                            },
                            filter(event, player) {
                                if (player.storage.chuli_denxian_qirang) return true;
                                else return player.countCards('h', { type: 'basic' }) > 1;
                            },
                            complexCard: true,
                            content() {
                                var cards = [];
                                for (var i = 0; i < 2; i++) {
                                    var card = get.cardPile(function (card) {
                                        return get.type(card) != 'basic' && (cards.length == 0 || get.type2(cards[0]) != get.type2(card));
                                    });
                                    if (card) cards.push(card);
                                }
                                if (cards.length) {
                                    var next = player.gain(cards, 'gain2');
                                    if (!player.storage.chuli_denxian_qirang) {
                                        next.gaintag.add('chuli_qirang');
                                        player.addTempSkill('chuli_qirang_clear');
                                    }
                                }
                            },
                            subSkill: {
                                clear: {
                                    charlotte: true,
                                    onremove(player) {
                                        player.removeGaintag('chuli_qirang');
                                    },
                                    mod: {
                                        cardDiscardable(card, player) {
                                            if (card.hasGaintag('chuli_qirang')) return false;
                                        },
                                        cardEnabled2(card, player) {
                                            if (!card.cards) {
                                                if (get.itemtype(card) == 'card' && card.hasGaintag('chuli_qirang')) return false;
                                            } else {
                                                for (var i of card.cards) {
                                                    if (i.hasGaintag('chuli_qirang')) return false;
                                                }
                                            }
                                        },
                                    },
                                },
                            },
                        },
                        chuli_yuhua: {
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filter(event, player) {
                                var cards = [];
                                var evt = event.filterCard;
                                if (!evt) evt = lib.filter.filterCard;
                                if (
                                    player.hasCard(function (card) {
                                        return get.type(card) == 'equip';
                                    }, 'hes') &&
                                    evt({ name: 'wuxie' }, player, event)
                                )
                                    cards.add('wuxie');
                                if (
                                    player.hasCard(function (card) {
                                        return get.type2(card) == 'trick';
                                    }, 'hes')
                                )
                                    cards.addArray(
                                        lib.inpile.filter(function (i) {
                                            return get.type(i) == 'basic' && evt({ name: i }, player, event);
                                        })
                                    );
                                return cards.length && _status.currentPhase != player;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    var cards = [];
                                    var evt = event.filterCard;
                                    if (
                                        player.hasCard(function (card) {
                                            return get.type(card) == 'equip';
                                        }, 'hes') &&
                                        evt({ name: 'wuxie' }, player, event)
                                    )
                                        cards.add('wuxie');
                                    if (
                                        player.hasCard(function (card) {
                                            return get.type2(card) == 'trick';
                                        }, 'hes')
                                    )
                                        cards.addArray(
                                            lib.inpile.filter(function (i) {
                                                return get.type(i) == 'basic' && evt({ name: i }, player, event);
                                            })
                                        );
                                    for (var i = 0; i < cards.length; i++) {
                                        var name = cards[i];
                                        if (name == 'sha') {
                                            list.push(['基本', '', 'sha']);
                                            for (var j of lib.inpile_nature) {
                                                if (event.filterCard && event.filterCard({ name: name, nature: j }, player, event)) list.push(['基本', '', 'sha', j]);
                                            }
                                        } else if (get.type2(name) == 'trick') list.push(['锦囊', '', name]);
                                        else if (get.type(name) == 'basic') list.push(['基本', '', name]);
                                    }
                                    return ui.create.dialog('羽化', [list, 'vcard']);
                                },
                                filter(button, player) {
                                    return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                },
                                check(button) {
                                    if (_status.event.parent.type != 'phase') return 1;
                                    var player = _status.event.player;
                                    if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[2])) return 0;
                                    return player.getUseValue({
                                        name: button.link[2],
                                        nature: button.link[3],
                                    });
                                },
                                backup(links, player) {
                                    return {
                                        filterCard(card) {
                                            var type = get.type(lib.skill.chuli_yuhua_backup.viewAs.name);
                                            if (type == 'trick') return get.type(card) == 'equip';
                                            else return get.type2(card) == 'trick';
                                        },
                                        popname: true,
                                        check(card) {
                                            return 8 - get.value(card);
                                        },
                                        position: 'hes',
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                    };
                                },
                                prompt(links, player) {
                                    var type = links[0][2] == 'wuxie' ? '装备牌' : '锦囊牌';
                                    return '将一张' + type + '当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                                },
                            },
                            hiddenCard(player, name) {
                                var cards = [];
                                if (
                                    player.hasCard(function (card) {
                                        return get.type(card) == 'equip';
                                    }, 'hes')
                                )
                                    cards.add('wuxie');
                                if (
                                    player.hasCard(function (card) {
                                        return get.type2(card) == 'trick';
                                    }, 'hes')
                                )
                                    cards.addArray(
                                        lib.inpile.filter(function (i) {
                                            return get.type(i) == 'basic';
                                        })
                                    );
                                if (cards.includes(name) && _status.currentPhase != player) return true;
                            },
                            ai: {
                                fireAttack: true,
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (
                                        !player.hasCard(function (card) {
                                            return get.type2(card) == 'trick';
                                        }, 'h') ||
                                        _status.currentPhase == player
                                    )
                                        return false;
                                },
                                order: 1,
                                result: {
                                    player(player) {
                                        if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                        return 1;
                                    },
                                },
                            },
                            group: ['chuli_yuhua_After'],
                            subSkill: {
                                backup: {},
                                draw: {
                                    trigger: {
                                        player: ['useCard', 'respond'],
                                    },
                                    filter(event, player) {
                                        return event.skill && event.skill == 'chuli_yuhua_backup';
                                    },
                                    forced: true,
                                    silent: true,
                                    content() {
                                        player.draw();
                                    },
                                    popup: false,
                                    _priority: 1,
                                },
                                After: {
                                    trigger: {
                                        player: ['useCardAfter', 'respondAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.skill && event.skill == 'chuli_yuhua_backup' && !player.hasSkill('chuli_yuhua_' + get.type(event.card));
                                    },
                                    content() {
                                        'step 0';
                                        if (get.type(trigger.card) == 'trick') {
                                            str = '令一名角色回复一点体力或摸两张牌';
                                        } else {
                                            str = '对一名角色造成一点伤害';
                                        }
                                        player
                                            .chooseTarget(get.prompt('chuli_yuhua'), str)
                                            .set('ai', function (target) {
                                                var type = _status.event.typex;
                                                var player = _status.event.player;
                                                var att = get.attitude(player, target);
                                                if (att > 3 && target.hp == 1) att += 5;
                                                if (att > 3 && !target.isDamaged()) att += 2;
                                                if (type == 'trick') return att;
                                                else return get.damageEffect(target, player, player);
                                            })
                                            .set('typex', get.type(trigger.card));
                                        ('step 1');
                                        if (result.targets?.length) {
                                            var target = result.targets[0];
                                            player.addTempSkill('chuli_yuhua_' + get.type(trigger.card));
                                            if (get.type(trigger.card) == 'trick') {
                                                target.chooseDrawRecover(2, true);
                                            } else {
                                                target.damage('nocard');
                                            }
                                        }
                                    },
                                },
                                trick: {
                                    charlotte: true,
                                },
                                basic: {
                                    charlotte: true,
                                },
                            },
                        },
                        chuli_denxian: {
                            trigger: {
                                player: ['gainMaxHpEnd', 'loseMaxHpEnd'],
                            },
                            filter(event, player) {
                                if (typeof player.storage.chuli_fuze_gain != 'number') return false;
                                return player.maxHp > player.storage.chuli_fuze_gain;
                            },
                            juexingji: true,
                            forced: true,
                            derivation: 'chuli_fuze',
                            content() {
                                'step 0';
                                player.awakenSkill('chuli_denxian');
                                player.storage.chuli_denxian_qirang = true;
                                ('step 1');
                                player.draw(player.storage.chuli_fuze_gain);
                                player.chooseBool('登仙:是否将体力上限改为1并获得【赋泽】？');
                                ('step 2');
                                if (result.bool) {
                                    if (player.maxHp > 1) player.loseMaxHp(player.maxHp - 1);
                                    player.addSkill('chuli_denxian_buff');
                                    player.addSkill('chuli_fuze');
                                }
                                if (Math.random() <= 0.1) player.say('我滴任务,完成啦!');
                                else player.say(['登仙会地府,何拘十八层'].randomGet());
                            },
                            group: ['chuli_denxian_x', 'chuli_denxian_add'],
                            subSkill: {
                                add: {
                                    trigger: {
                                        player: ['useCard', 'respond'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.cards && event.cards.length >= 1 && ['basic', 'trick'].includes(get.type2(event.card)) && !player.hasAllHistory('useSkill', (evt) => evt.skill == 'chuli_denxian_add' && evt.event.getParent(2).card.name == event.card.name);
                                    },
                                    content() {
                                        player.gainMaxHp();
                                        player.recover();
                                    },
                                },
                                x: {
                                    trigger: {
                                        global: 'phaseBefore',
                                        player: 'enterGame',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.name != 'phase' || game.phaseNumber == 0;
                                    },
                                    content() {
                                        'step 0';
                                        var card = game.cardsGotoOrdering(get.cards()).cards[0];
                                        game.log(player, '展示了', card);
                                        player.$throw([card], 1000);
                                        player.storage.chuli_fuze_gain = card.number;
                                        player.markSkill('chuli_fuze_gain');
                                    },
                                },
                                buff: {
                                    trigger: {
                                        player: ['phaseJudgeBefore', 'phaseDrawBefore'],
                                    },
                                    forced: true,
                                    silent: true,
                                    content() {
                                        var str = trigger.name == 'phaseJudge' ? '判定阶段' : '摸牌阶段';
                                        game.log(player, '跳过了', '#y' + str);
                                        trigger.cancel();
                                    },
                                    popup: false,
                                    _priority: 1,
                                },
                            },
                        },
                        chuli_zhiheng: {
                            enable: 'phaseUse',
                            position: 'he',
                            filterCard(card, player, event) {
                                event = event || _status.event;
                                if (typeof event != 'string') event = event.parent.name;
                                var mod = game.checkMod(card, player, event, 'unchanged', 'cardDiscardable', player);
                                if (mod != 'unchanged') return mod;
                                return true;
                            },
                            delay: false,
                            selectCard: [1, Infinity],
                            filter(event, player) {
                                var stat = player.getStat('skill').chuli_zhiheng || 0;
                                if (stat >= Math.max(player.getDamagedHp() + 1)) return false;
                                return player.countCards('he');
                            },
                            check(card) {
                                var player = _status.event.player;
                                if (
                                    get.position(card) == 'h' &&
                                    !player.countCards('h', 'du') &&
                                    (player.hp > 2 ||
                                        !player.countCards('h', function (card) {
                                            return get.value(card) >= 8;
                                        }))
                                ) {
                                    return 1;
                                }
                                return 6 - get.value(card);
                            },
                            content() {
                                'step 0';
                                if (cards.length >= player.getHandcardLimit()) {
                                    player.draw(cards.length);
                                } else {
                                    if (player.countCards('h') < player.getHandcardLimit()) player.drawTo(player.getHandcardLimit());
                                }
                                ('step 1');
                                var types = [];
                                for (var i of cards) types.add(get.type2(i));
                                var num = Math.min(3 - player.countMark('chuli_zhiheng'), types.length);
                                if (num > 0) player.addMark('chuli_zhiheng', num);
                            },
                            marktext: '虎',
                            intro: {
                                name: '虎',
                                content: 'mark',
                            },
                        },
                        chuli_xiongju: {
                            mod: {
                                maxHandcardBase(player, num) {
                                    return player.countMark('chuli_zhiheng') + player.maxHp;
                                },
                            },
                            trigger: {
                                global: 'phaseBegin',
                            },
                            filter(event, player) {
                                return player.hasMark('chuli_zhiheng') && event.player != player && event.player.hp < player.hp && event.player.countCards('h') < player.countCards('h') && event.player.countCards('e') < player.countCards('e');
                            },
                            forced: true,
                            logTarget: 'player',
                            content() {
                                'step 0';
                                player.removeMark('chuli_zhiheng', player.countMark('chuli_zhiheng'));
                                player.damage(trigger.player);
                                ('step 1');
                                var cards = [];
                                for (var i = 0; i < 3; i++) {
                                    var card = get.cardPile(function (card) {
                                        return (
                                            cards.filter(function (i) {
                                                return get.type2(i) == get.type2(card);
                                            }).length == 0
                                        );
                                    });
                                    if (card) cards.push(card);
                                    else break;
                                }
                                if (cards.length) player.gain(cards, 'gain2');
                            },
                        },
                        chuli_fuze: {
                            init(player) {
                                player.storage.chuli_fuze = 0;
                                if (!player.storage.chuli_fuze_record) player.storage.chuli_fuze_record = [];
                            },
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filter(event, player) {
                                if (!player.isPhaseUsing()) return false;
                                var bool1 = true;
                                var bool2 = true;
                                for (var i of player.getCards('hes')) {
                                    if (get.type2(i) == 'trick' && bool1) bool1 = false;
                                    else if (get.type(i) == 'equip' && bool2) bool2 = false;
                                }
                                if (bool1 && bool2) return false;
                                var evt = lib.filter.filterCard;
                                if (event.filterCard) evt = event.filterCard;
                                for (var i of lib.inpile) {
                                    var type = get.type2(i);
                                    if (bool2 && type == 'trick') continue;
                                    if (bool1 && type == 'basic') continue;
                                    if ((type == 'basic' || type == 'trick') && evt({ name: i }, player, event) && !player.storage.chuli_fuze_record.includes(i)) return true;
                                }
                                return false;
                            },
                            hiddenCard(player, name) {
                                var bool1 = true;
                                var bool2 = true;
                                for (var i of player.getCards('he')) {
                                    if (get.type2(i) == 'trick' && bool1) bool1 = false;
                                    else if (get.type(i) == 'equip' && bool2) bool2 = false;
                                }
                                var type = get.type(name);
                                return (type == 'basic' || type == 'trick') && (!bool1 || !bool2) && !player.storage.chuli_fuze_record.includes(name);
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    for (var i = 0; i < lib.inpile.length; i++) {
                                        var name = lib.inpile[i];
                                        if (name == 'sha') {
                                            list.push(['基本', '', 'sha']);
                                            for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
                                        } else if (get.type(name) == 'trick') list.push(['锦囊', '', name]);
                                        else if (get.type(name) == 'basic') list.push(['基本', '', name]);
                                    }
                                    if (list.length == 0) {
                                        return ui.create.dialog('无可用牌');
                                    }
                                    return ui.create.dialog('赋泽', [list, 'vcard']);
                                },
                                filter(button, player) {
                                    if (player.storage.chuli_fuze_record.includes(button.link[2])) return false;
                                    var bool1 = true;
                                    var bool2 = true;
                                    for (var i of player.getCards('hes')) {
                                        if (get.type2(i) == 'trick' && bool1) bool1 = false;
                                        else if (get.type(i) == 'equip' && bool2) bool2 = false;
                                    }
                                    if (bool1 && get.type(button.link[2]) == 'basic') return false;
                                    if (bool2 && get.type(button.link[2]) == 'trick') return false;
                                    return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                },
                                backup(links, player) {
                                    return {
                                        filterCard(card) {
                                            if (get.type(links[0][2]) == 'basic') return get.type2(card) == 'trick';
                                            return get.type(card) == 'equip';
                                        },
                                        selectCard: 1,
                                        popname: true,
                                        position: 'hes',
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        precontent() {
                                            player.storage.chuli_fuze++;
                                            player.storage.chuli_fuze_record.add(event.result.card.name);
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                                },
                            },
                            group: ['chuli_fuze_init', 'chuli_fuze_gain'],
                            subSkill: {
                                init: {
                                    trigger: {
                                        player: 'phaseUseBefore',
                                    },
                                    forced: true,
                                    popup: false,
                                    content() {
                                        player.storage.chuli_fuze = 0;
                                        player.storage.chuli_fuze_record = [];
                                    },
                                },
                                record: {
                                    init(player) {
                                        player.storage.chuli_fuze = [];
                                    },
                                },
                                gain: {
                                    trigger: {
                                        player: ['phaseBefore', 'phaseAfter'],
                                    },
                                    forced: true,
                                    intro: {
                                        content: '当前X为#',
                                    },
                                    content() {
                                        'step 0';
                                        player.discard(player.getCards('h', { type: 'basic' }));
                                        ('step 1');
                                        var cards = [];
                                        var card1 = get.cardPile(function (card) {
                                            return get.type2(card) == 'trick';
                                        });
                                        if (card1) cards.push(card1);
                                        var card2 = get.cardPile(function (card) {
                                            return get.type(card) == 'equip';
                                        });
                                        if (card2) cards.push(card2);
                                        if (cards.length) player.gain(cards, 'gain2');
                                        else event.finish();
                                        ('step 2');
                                        if (typeof player.storage.chuli_fuze_gain != 'number') player.storage.chuli_fuze_gain = 0;
                                        if (player.countCards('h') <= player.storage.chuli_fuze_gain) event.goto(0);
                                    },
                                },
                            },
                        },
                        chuli_taoyi2: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 3 - player.getExpansions('chuli_taoyi').length;
                                },
                            },
                        },
                        chuli_shehu: {
                            audio: 'ext:魔王/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return !player.storage.chuli_shehu || player.storage.chuli_shehu.length < 3;
                            },
                            async content(event, trigger, player) {
                                if (!player.storage.chuli_shehu) player.storage.chuli_shehu = [];
                                var list = ['摸两张牌', '视为使用一张杀', '获得一点护甲'];
                                for (var i of player.storage.chuli_shehu) {
                                    if (i == 0) list.remove('摸两张牌');
                                    if (i == 1) list.remove('视为使用一张杀');
                                    if (i == 2) list.remove('获得一点护甲');
                                }
                                if (list.length) {
                                    const result = await player.chooseControl(list, () => list.randomGet()).forResult();
                                    if (result.control == '摸两张牌') {
                                        player.draw(2);
                                        player.storage.chuli_shehu.add(0);
                                    }
                                    if (result.control == '视为使用一张杀') {
                                        await player.chooseUseTarget('射虎:视为使用一张【杀】', { name: 'sha' }, true, false, 'nodistance').set('oncard', function () {
                                            if (_status.event.player.hujia) _status.event.baseDamage += _status.event.player.hujia;
                                        });
                                        player.storage.chuli_shehu.add(1);
                                    }
                                    if (result.control == '获得一点护甲') {
                                        player.storage.chuli_shehu.add(2);
                                        player.changeHujia(1);
                                    }
                                    player
                                        .when('phaseEnd')
                                        .filter((event, player) => {
                                            var num = 0;
                                            player.getHistory('sourceDamage', (evt) => (num += evt.num));
                                            return player.storage.chuli_shehu && player.storage.chuli_shehu.length > num;
                                        })
                                        .then(() => {
                                            var num = 0;
                                            player.getHistory('sourceDamage', (evt) => (num += evt.num));
                                            player.loseHp(player.storage.chuli_shehu.length - num);
                                        });
                                    player.when('phaseAfter').then(() => {
                                        player.storage.chuli_shehu = [];
                                    });
                                }
                            }, //QQQ
                            ai: {
                                order: 10,
                                result: {
                                    player: 1,
                                },
                            },
                            _priority: 20,
                        },
                        chuli_juyuan: {
                            trigger: {
                                global: 'useCardAfter',
                            },
                            filter(event, player) {
                                return (
                                    event.player != player &&
                                    event.player.isPhaseUsing() &&
                                    player.getExpansions('chuli_xiansi').filter(function (i) {
                                        return get.color(event.card) == get.color(i);
                                    }).length
                                );
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var card = player
                                    .getExpansions('chuli_xiansi')
                                    .filter(function (i) {
                                        return get.color(trigger.card) == get.color(i);
                                    })
                                    .randomGet();
                                event.ext = trigger.player.gain(card, 'give', player);
                                player.draw();
                                ('step 1');
                                var num = 0;
                                trigger.player.getHistory('gain', function (evt) {
                                    if (evt.parent.name == 'chuli_juyuan' && evt.parent.player == player && evt != event.ext) num += evt.cards.length;
                                });
                                game.log(num);
                                if (num < 2 && num + event.ext.cards.length >= 2) player.recover();
                            },
                        },
                        chuli_jianqi: {
                            trigger: {
                                global: 'useCardToTarget',
                            },
                            logTarget: 'target',
                            filter(event, player) {
                                if (event.target != player && !player.inRange(event.target)) return false;
                                return event.card.name == 'sha' || get.type2(event.card) == 'trick';
                            },
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                if (player.countCards('he') && player != trigger.target) {
                                    player.chooseCard('交给' + get.translation(trigger.target) + '一张牌若为装备牌则其使用之', true).set('ai', function (card) {
                                        var valua = get.valua(card);
                                        var att = get.attitude(_status.event.player, _status.event.getTrigger().player);
                                        if (att <= 0) return 0;
                                        return 7 - valua;
                                    });
                                } else event.goto(4);
                                ('step 2');
                                if (result.cards?.length) {
                                    trigger.target.gain(result.cards[0], 'give', player);
                                    event.card = result.cards[0];
                                }
                                ('step 3');
                                if (
                                    event.card &&
                                    get.type(event.card) == 'equip' &&
                                    trigger.target.getCards('h', function (card) {
                                        return event.card == card && get.type(card) == 'equip';
                                    }).length
                                ) {
                                    trigger.target.chooseUseTarget(event.card, true);
                                }
                                ('step 4');
                                if (trigger.target.hp < player.hp && lib.filter.targetEnabled(trigger.card, trigger.player, player)) {
                                    var evt = trigger.parent;
                                    evt.triggeredTargets2.remove(trigger.target);
                                    evt.targets.remove(trigger.target);
                                    evt.targets.push(player);
                                    game.log(trigger.target, '从', trigger.card, '的目标列表中移除了');
                                    game.log(player, '成为了', trigger.card, '的额外目标');
                                }
                            },
                            mod: {
                                attackRange(player, num) {
                                    return num - 999;
                                },
                            },
                        },
                        chuli_dizhan: {
                            trigger: {
                                global: 'useCardToTargeted',
                            },
                            forced: true,
                            logTarget: 'player',
                            filter(event, player) {
                                if (event.target != player && !player.inRange(event.target)) return false;
                                if (event.player == player || !event.player.isAlive()) return false;
                                if (event.player.countMark('chuli_dizhan') >= event.player.hp) return false;
                                return event.card.name == 'sha' || get.type(event.card) == 'trick';
                            },
                            content() {
                                trigger.player.addMark('chuli_dizhan');
                            },
                            marktext: '斩',
                            intro: {
                                content: 'mark',
                            },
                            group: 'chuli_dizhan_damage',
                            subSkill: {
                                damage: {
                                    trigger: {
                                        global: ['changeHp', 'chuli_dizhanAfter'],
                                    },
                                    forced: true,
                                    logTarget(trigger, player) {
                                        if (trigger.name == 'changeHp') return trigger.player;
                                        return trigger.getTrigger().player;
                                    },
                                    filter(event, player) {
                                        var target = event.name == 'changeHp' ? event.player : event.getTrigger().player;
                                        return target.countMark('chuli_dizhan') && target.countMark('chuli_dizhan') > target.hp && target != player && target.isAlive();
                                    },
                                    content() {
                                        var target = trigger.name == 'changeHp' ? trigger.player : trigger.getTrigger().player;
                                        var num = target.countMark('chuli_dizhan');
                                        target.removeMark('chuli_dizhan', num);
                                        target.damage(num, 'nocard');
                                        player.draw(num);
                                        player.say(['此剑所斩,皆为逆臣!'].randomGet());
                                    },
                                },
                            },
                        },
                        chuli_dingzhan: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            selectTarget() {
                                return [1, _status.event.player.hp];
                            },
                            multitarget: true,
                            multiline: true,
                            content() {
                                player.storage.chuli_dingzhan_buff = [];
                                player.storage.chuli_dingzhan_buff = targets;
                                player.markSkill('chuli_dingzhan_buff');
                                player.addSkill('chuli_dingzhan_buff');
                                player.draw(targets.length);
                            },
                            subSkill: {
                                buff: {
                                    intro: {
                                        content: '已指定$为目标',
                                    },
                                    charlotte: true,
                                    mod: {
                                        inRange(player, target) {
                                            if (player.storage.chuli_dingzhan_buff && player.storage.chuli_dingzhan_buff.includes(target)) return true;
                                        },
                                    },
                                },
                            },
                        },
                        chuli_duizhen: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return game.hasPlayer((current) => lib.skill.chuli_duizhen.filterTarget(null, player, current));
                            },
                            filterTarget(card, player, target) {
                                return player.canCompare(target);
                            },
                            content() {
                                'step 0';
                                if (player.canCompare(target)) player.chooseToCompare(target);
                                else event.finish();
                                ('step 1');
                                if (result.bool) {
                                    var cards = get.cards(3 + player.getDamagedHp());
                                    event.cards = cards;
                                    game.cardsGotoOrdering(cards);
                                    player.showCards(cards, get.translation(player) + '【对阵】展示');
                                } else event.finish();
                                ('step 2');
                                if (
                                    cards.filter(function (i) {
                                        return player.hasUseTarget(i, false);
                                    }).length
                                ) {
                                    player.chooseButton(['使用其中一张牌', cards], true).set('filterButton', function (button) {
                                        return _status.event.player.hasUseTarget(button.link, false);
                                    });
                                } else event.goto(4);
                                ('step 3');
                                if (result.links?.length) {
                                    event.cards.remove(result.links[0]);
                                    player.chooseUseTarget(result.links[0], true, false, 'nodistance');
                                    if (
                                        event.cards.filter(function (i) {
                                            return player.hasUseTarget(i);
                                        }).length
                                    )
                                        event.goto(2);
                                }
                                ('step 4');
                                if (cards.length) player.gain(cards, 'gain2');
                            },
                        },
                        chuli_jieming: {
                            trigger: {
                                player: 'phaseDiscardEnd',
                            },
                            filter(event, player) {
                                return game.hasPlayer((current) => player.canCompare(current));
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('chuli_jieming'), '与一名其他角色拼点', function (card, player, target) {
                                        return player.canCompare(target);
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target) + 0.1;
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    if (player.canCompare(target)) player.chooseToCompare(target);
                                    else event.finish();
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    var list = ['选项一', '选项二'],
                                        choiceList = ['在当前回合结束后执行一个额外的回合', '令' + get.translation(target) + '跳过下一个回合'];
                                    player
                                        .chooseControl(list, 'cancel2')
                                        .set('prompt', '你可以失去一点体力并选择一项')
                                        .set('choiceList', choiceList)
                                        .set('ai', function () {
                                            var att = get.attitude(_status.event.player, _status.event.parent.target);
                                            if (_status.event.player.hp <= 1) return 'cancel2';
                                            if (_status.event.player.hp > 2) return '选项一';
                                            if (att < 0) return '选项二';
                                            return '选项一';
                                        });
                                } else event.finish();
                                ('step 3');
                                game.log(result.control);
                                if (result.control != 'cancel2') {
                                    player.loseHp();
                                    if (result.control == '选项一') {
                                        player.phase('nodelay');
                                    } else {
                                        target.skip('phase');
                                        target.addTempSkill('chuli_jieming_mark', { player: 'phaseSkipped' });
                                    }
                                }
                            },
                            group: 'chuli_jieming_add',
                            subSkill: {
                                add: {
                                    trigger: {
                                        player: 'compare',
                                        target: 'compare',
                                    },
                                    filter(event, player) {
                                        return !event.iwhile && player.getDamagedHp() > 0;
                                    },
                                    forced: true,
                                    content() {
                                        var count = player.getDamagedHp();
                                        if (player == trigger.player) {
                                            trigger.num1 += count;
                                            if (trigger.num1 > 13) trigger.num1 = 13;
                                        } else {
                                            trigger.num2 += count;
                                            if (trigger.num2 > 13) trigger.num2 = 13;
                                        }
                                        game.log(player, '的拼点牌点数+' + count);
                                    },
                                },
                                mark: {
                                    charlotte: true,
                                    mark: true,
                                    intro: {
                                        content: '跳过下一个回合',
                                    },
                                },
                            },
                        },
                        chuli_duanxing: {
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (get.tag(event.card, 'damage') || event.card.name == 'jiu' || get.subtype(event.card) == 'equip1') return player.countCards('he');
                                return true;
                            },
                            content() {
                                if (get.tag(trigger.card, 'damage') || trigger.card.name == 'jiu' || get.subtype(trigger.card) == 'equip1') {
                                    player.chooseToDiscard('he', true);
                                } else player.draw();
                            },
                        },
                        chuli_aiwei: {
                            trigger: {
                                global: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                //if(player.isDisabled("equip1")) return false;//移除此行最前面的<//>即可令此技能在武器栏废除的情况下无法发动
                                return event.player != player && event.player.countCards('j');
                            },
                            logTarget: 'player',
                            check(event, player) {
                                return get.attitude(player, event.player) > 4;
                            },
                            limited: true,
                            content() {
                                'step 0';
                                player.awakenSkill('chuli_aiwei');
                                ('step 1');
                                if (!player.isDisabled('equip1')) player.disableEquip('equip1');
                                ('step 2');
                                var cards = trigger.player.getCards('j');
                                if (cards) {
                                    trigger.player.$throw(cards, 1000);
                                    trigger.player.lose(cards, ui.discardPile, 'visible');
                                    game.log(trigger.player, '将', cards, '置入弃牌堆');
                                }
                                ('step 3');
                                player.addSkill('chuli_aiwei_buff');
                                var cards = [];
                                var list = ['shan', 'tao', 'wuxie'];
                                for (var i of list) {
                                    var card = get.cardPile(function (card) {
                                        return card.name == i;
                                    });
                                    if (card) cards.push(card);
                                }
                                if (cards) player.gain(cards, 'gain2');
                            },
                            subSkill: {
                                buff: {
                                    charlotte: true,
                                    mark: true,
                                    intro: {
                                        content: '其他角色与你计算距离时+1',
                                    },
                                    mod: {
                                        globalTo(from, to, distance) {
                                            return distance + 1;
                                        },
                                    },
                                },
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        chuli_quanlian: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return game.hasPlayer((current) => lib.skill.chuli_quanlian.filterTarget(null, player, current));
                            },
                            filterTarget(card, player, target) {
                                return target.countCards('h');
                            },
                            content() {
                                'step 0';
                                target.showHandcards(get.translation(target) + '【劝敛】展示手牌');
                                ('step 1');
                                var cards = target.getCards('h', function (card) {
                                    return lib.filter.canBeDiscarded(card, player, target) && (get.tag(card, 'damage') || card.name == 'jiu' || get.subtype(card) == 'equip1');
                                });
                                event.cards = cards;
                                if (cards.length) {
                                    var next = target.discard(cards);
                                    if (player != target) next.notBySelf = true;
                                } else {
                                    game.asyncDraw([player, target], 2);
                                    event.finish();
                                }
                                ('step 2');
                                target.draw(cards.length);
                                if (
                                    cards.filter(function (i) {
                                        return i.name == 'jiu';
                                    }).length
                                )
                                    target.draw(2);
                            },
                        },
                        chuli_fuzhu: {
                            //QQQ
                            mark: true,
                            intro: {
                                content(storage, player) {
                                    var str = '';
                                    for (var i in player.storage.chuli_fuzhu) {
                                        str += i + '类型已获得' + get.translation(player.storage.chuli_fuzhu[i]) + '<br><li>';
                                    }
                                    return str;
                                },
                            },
                            trigger: {
                                player: ['gainEnd'],
                            },
                            init(player) {
                                player.storage.chuli_fuzhu = {};
                                for (var i in lib.card) {
                                    if (!player.storage.chuli_fuzhu[lib.card[i].type]) player.storage.chuli_fuzhu[lib.card[i].type] = [];
                                } //QQQ
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.cards && event.cards.length) {
                                    for (var i of event.cards) {
                                        player.storage.chuli_fuzhu[get.type(i)].add(i);
                                        if (player.storage.chuli_fuzhu[get.type(i)].length >= player.hp) {
                                            game.chuli_fuzhu = get.type(i);
                                        }
                                    }
                                }
                                return game.chuli_fuzhu && game.hasPlayer((Q) => Q != player && Q.countCards('he'));
                            },
                            async content(event, trigger, player) {
                                player.storage.chuli_fuzhu[game.chuli_fuzhu] = [];
                                var type = game.chuli_fuzhu;
                                game.chuli_fuzhu = false;
                                const result = await player
                                    .chooseTarget(true, '选择一名其他角色,当前触发标记的伏诛类型为' + get.translation(type), (event, player, target) => target.countCards('h') && target != player)
                                    .set('ai', (target) => target.isEnemiesOf(_status.event.player))
                                    .forResult();
                                if (result.bool) {
                                    const result1 = await player.chooseControl('其牌中每有一种与『诛』类型相同的牌便对其造成一点伤害', '其弃置X张与『诛』类型相同牌并令你摸等量的牌').forResult();
                                    var num = result.targets[0].countCards('he', (Q) => get.type(Q) == type);
                                    game.log(num);
                                    if (result1.index == 0) {
                                        result.targets[0].damage(num);
                                    }
                                    if (result1.index == 1) {
                                        await result.targets[0].chooseToDiscard('he', true, num, '弃置手中所有类型为' + get.translation(type) + '的牌', (card) => get.type(card) == type);
                                        player.draw(num);
                                    }
                                }
                            },
                        },
                        chuli_wengua: {
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                var cards = [game.cardsGotoOrdering(get.cards()).cards[0], game.cardsGotoOrdering(get.bottomCards()).cards[0]];
                                event.cards = cards;
                                player.showCards(cards);
                                ('step 1');
                                if (get.type2(cards[0]) == get.type2(cards[1])) {
                                    var type = get.type2(cards[0]),
                                        vcard = [];
                                    for (var i of lib.inpile) {
                                        if (get.type2(i) != type) continue;
                                        var card = get.cardPile((card) => card.name == i);
                                        if (card) vcard.add(i);
                                    }
                                    if (vcard.length) {
                                        player.chooseButton(['问挂:是否失去一点体力获得两张牌名各不相同的' + get.translation(type) + '牌？', [vcard, 'vcard']], Math.min(vcard.length, 2));
                                    } else event.finish();
                                } else {
                                    player.gain(cards, 'gain2');
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    var cards = [];
                                    for (var i = 0; i < result.links.length; i++) {
                                        var card = get.cardPile((card) => card.name == result.links[i][2]);
                                        if (card) cards.push(card);
                                    }
                                    player.loseHp();
                                    if (cards.length) player.gain(cards, 'gain2');
                                }
                            },
                        },
                        chuli_quansheng: {
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return player.isPhaseUsing() && event.targets.length == 1 && (event.card.name == 'sha' || get.type(event.card) == 'trick');
                            },
                            usable: 1,
                            prompt2(event, player) {
                                return '令' + get.translation(event.card) + '额外结算一次';
                            },
                            content() {
                                trigger.parent.targets = trigger.parent.targets.concat(trigger.targets);
                                trigger.parent.triggeredTargets3 = trigger.parent.triggeredTargets3.concat(trigger.targets);
                            },
                            group: 'chuli_quansheng_target',
                            subSkill: {
                                target: {
                                    trigger: {
                                        global: 'useCardToTarget',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!player.inRange(event.target)) return false;
                                        if (player.getStat('triggerSkill').chuli_quansheng && player.getStat('triggerSkill').chuli_quansheng >= 1) return false;
                                        if (!event.player.isPhaseUsing() || event.targets.length != 1 || event.player == player) return false;
                                        return (
                                            (event.card.name == 'sha' || get.type2(event.card) == 'trick') &&
                                            player.countCards('he') &&
                                            game.hasPlayer(function (current) {
                                                return current != event.player && player.inRange(current) && lib.filter.targetEnabled(event.card, event.player, current);
                                            })
                                        );
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseCardTarget({
                                            position: 'he',
                                            filterCard: lib.filter.cardDiscardable,
                                            filterTarget(card, player, target) {
                                                var trigger = _status.event;
                                                if (player.inRange(target) && target != trigger.source) {
                                                    if (lib.filter.targetEnabled(trigger.card, trigger.source, target)) return true;
                                                }
                                                return false;
                                            },
                                            ai1(card) {
                                                return get.unuseful(card) + 9;
                                            },
                                            ai2(target) {
                                                var trigger = _status.event;
                                                return get.effect(target, trigger.card, trigger.source, trigger.player);
                                            },
                                            prompt: get.prompt('chuli_quansheng', trigger.target),
                                            prompt2: '弃置一张牌,将' + get.translation(trigger.card) + '转移给攻击范围内的一名其他角色(不能是此牌的使用者)',
                                            source: trigger.player,
                                            card: trigger.card,
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            if (!player.getStat('triggerSkill').chuli_quansheng) player.getStat('triggerSkill').chuli_quansheng = 0;
                                            player.getStat('triggerSkill').chuli_quansheng++;
                                            var target = result.targets[0];
                                            player.discard(result.cards[0]);
                                            var evt = trigger.parent;
                                            evt.triggeredTargets2.remove(trigger.target);
                                            evt.targets.remove(trigger.target);
                                            evt.targets.push(target);
                                        }
                                    },
                                },
                            },
                        },
                        chuli_charuo: {
                            trigger: {
                                global: ['phaseDrawEnd', 'phaseDiscardEnd', 'phaseEnd'],
                            },
                            forced: true,
                            intro: {
                                content: '记录的手牌数:#',
                            },
                            filter(event, player) {
                                if (event.player == player) return false;
                                if (event.name == 'phaseDiscard') return player.countCards('he');
                                return event.name == 'phaseDraw' || typeof player.storage.chuli_charuo == 'number';
                            },
                            logTarget(trigger, player) {
                                if (trigger.name == 'phase') return trigger.player;
                            },
                            content() {
                                if (trigger.name == 'phaseDraw') {
                                    player.storage.chuli_charuo = player.countCards('h');
                                    player.markSkill('chuli_charuo');
                                    player.draw(2);
                                }
                                if (trigger.name == 'phaseDiscard') {
                                    player.chooseToDiscard('he', true);
                                }
                                if (trigger.name == 'phase') {
                                    if (player.countCards('h') <= player.storage.chuli_charuo) trigger.player.damage('nocard');
                                    player.unmarkSkill('chuli_charuo');
                                    delete player.storage.chuli_charuo;
                                }
                            },
                        },
                        chuli_zhuwu: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            content() {
                                if (player.countCards('h') < player.maxHp) player.drawTo(player.maxHp);
                                else {
                                    var card = get.cardPile(function (card) {
                                        return get.type(card) == 'equip';
                                    });
                                    if (card) player.gain(card, 'gain2');
                                }
                            },
                        },
                        chuli_jiee: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.hp >= 1 && (game.hasPlayer((current) => lib.skill.chuli_jiee_gain.filter(null, player)) || game.hasPlayer((current) => lib.skill.chuli_jiee_sha.filter(null, player)));
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var dialog = ui.create.dialog('截扼:请选择一项', 'hidden');
                                    dialog.add([
                                        [
                                            ['gain', '获得一名其他角色的一张牌你摸一张牌'],
                                            ['sha', '视为使用一张无视防具且不可被响应的〖杀〗'],
                                        ],
                                        'textbutton',
                                    ]);
                                    return dialog;
                                },
                                filter(button, player) {
                                    if (button.link == 'gain') return game.hasPlayer((current) => lib.skill.chuli_jiee_gain.filter(null, player));
                                    return game.hasPlayer((current) => lib.skill.chuli_jiee_sha.filter(null, player));
                                },
                                check(button) {
                                    return 2;
                                },
                                backup(links) {
                                    return get.copy(lib.skill['chuli_jiee_' + links[0]]);
                                },
                                prompt(links) {
                                    if (links[0] == 'gain') return '获得一名其他角色的一张牌你摸一张牌';
                                    return '视为使用一张无视防具且不可被响应的〖杀〗';
                                },
                            },
                            group: 'chuli_jiee_gainx',
                            subSkill: {
                                backup: {},
                                gain: {
                                    filterTarget(card, player, target) {
                                        return target != player && target.countGainableCards(player, 'he');
                                    },
                                    filter(event, player) {
                                        return game.hasPlayer((current) => lib.skill.chuli_jiee_gain.filterTarget(null, player, current));
                                    },
                                    filterCard: () => false,
                                    selectCard: -1,
                                    charlotte: true,
                                    content() {
                                        'step 0';
                                        player.loseHp();
                                        ('step 1');
                                        player.gainPlayerCard(target, 'he', true);
                                        ('step 2');
                                        player.draw();
                                    },
                                    ai: {
                                        tag: {
                                            gain: 1,
                                        },
                                        result: {
                                            player: 0.1,
                                            target: -1,
                                        },
                                    },
                                },
                                sha: {
                                    filterTarget(card, player, target) {
                                        return target != player && player.canUse('sha', target, false);
                                    },
                                    filter(event, player) {
                                        return game.hasPlayer((current) => lib.skill.chuli_jiee_sha.filterTarget(null, player, current));
                                    },
                                    filterCard: () => false,
                                    selectCard: -1,
                                    charlotte: true,
                                    content() {
                                        'step 0';
                                        player.loseHp();
                                        ('step 1');
                                        if (player.canUse('sha', target, false))
                                            player.useCard({ name: 'sha' }, target, false).set('oncard', function () {
                                                _status.event.directHit.addArray(game.filterPlayer2());
                                            }).card.chuli_jiee_tag = true;
                                    },
                                },
                                gainx: {
                                    trigger: {
                                        global: 'gainEnd',
                                    },
                                    logTarget() {
                                        return _status.currentPhase;
                                    },
                                    prompt2: '失去一点体力你获得其一张牌并摸一张牌或视为对其使用一张无视防具且不可被响应的〖杀〗',
                                    filter(event, player) {
                                        return _status.currentPhase && _status.currentPhase != player; //QQQ
                                    },
                                    check: (event, player) => _status.currentPhase.isEnemiesOf(player),
                                    content() {
                                        'step 0';
                                        player.loseHp();
                                        ('step 1');
                                        var str = get.translation(_status.currentPhase);
                                        player
                                            .chooseButton([
                                                '截扼:你可以选择一项',
                                                [
                                                    [
                                                        ['gain', '获得' + str + '一张牌你摸一张牌'],
                                                        ['sha', '视为对' + str + '使用一张无视防具且不可被响应的〖杀〗'],
                                                    ],
                                                    'textbutton',
                                                ],
                                            ])
                                            .set('filterButton', function (button) {
                                                var player = _status.event.player,
                                                    source = _status.event.sourcex;
                                                if (button.link == 'gain') return source.countGainableCards(player, 'he');
                                                return player.canUse('sha', source, false);
                                            })
                                            .set('sourcex', _status.currentPhase);
                                        ('step 2');
                                        if (result.links?.length) {
                                            if (result.links[0] == 'sha') {
                                                player.useCard({ name: 'sha' }, _status.currentPhase, false).set('oncard', function () {
                                                    _status.event.directHit.addArray(game.filterPlayer2());
                                                }).card.chuli_jiee_tag = true;
                                                event.finish();
                                            } else player.gainPlayerCard(_status.currentPhase, 'he', true);
                                        } else event.finish();
                                        ('step 3');
                                        player.draw();
                                    },
                                },
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (!arg || !arg.card || !arg.card.chuli_jiee_tag) return false;
                                },
                            },
                        },
                        chuli_xionglve: {
                            audio: 'ext:魔王/audio:2',
                            audioname: ['chuli_daweiwuwang'],
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter: (e, p) => p.storage.gksmskill > 0,
                            content() {
                                'step 0';
                                player
                                    .chooseControl('cancel2')
                                    .set('choiceList', ['选择至多' + player.storage.gksmskill + '名角色摸一张牌', '选择至多' + player.storage.gksmskill + '名角色弃置一张牌', '选择一名角色摸' + player.storage.gksmskill + '张牌', '选择一名角色弃' + player.storage.gksmskill + '张牌'])
                                    .set('prompt', '你本回合内【权谋】发动次数为' + player.storage.gksmskill);
                                ('step 1');
                                if (result.control == 'cancel2') event.finish();
                                else {
                                    if (result.index == 0 || result.index == 1) {
                                        if (result.index == 0) {
                                            event.index = result.index;
                                            player.chooseTarget(true, [0, player.storage.gksmskill]);
                                        }
                                        if (result.index == 1) {
                                            event.index = result.index;
                                            player.chooseTarget(true, [0, player.storage.gksmskill], (event, player, target) => {
                                                return target.countCards('he') > 0;
                                            });
                                        }
                                    } else {
                                        if (result.index == 2) {
                                            event.index = result.index;
                                            player.chooseTarget(true, [0, 1]);
                                        }
                                        if (result.index == 3) {
                                            event.index = result.index;
                                            player.chooseTarget(true, [0, 1], (event, player, target) => {
                                                return target.countCards('he') > 0;
                                            });
                                        }
                                    }
                                }
                                ('step 2');
                                if (result.targets?.length) {
                                    if (event.index == 2) result.targets[0].draw(player.storage.gksmskill);
                                    if (event.index == 3) player.discardPlayerCard(result.targets[0], [1, player.storage.gksmskill]);
                                    if (event.index == 1) {
                                        for (var i of result.targets) player.discardPlayerCard(i, 1);
                                    }
                                    if (event.index == 0) {
                                        for (var i of result.targets) i.draw();
                                    }
                                }
                            },
                        },
                        chuli_bozheng: {
                            trigger: {
                                player: ['gainAfter', 'loseAfter'],
                            },
                            filter(event, player) {
                                var num = 0;
                                player.getAllHistory('lose', function (evt) {
                                    if (evt.type == 'discard' && evt.cards2 && evt.cards2.length) num += evt.cards2.length;
                                });
                                player.getAllHistory('gain', function (evt) {
                                    if (evt.cards && evt.cards.length) num += evt.cards.length;
                                });
                                if (event.name == 'lose' && (!event.type || event.type != 'discard')) return false;
                                return (
                                    num % 3 == 0 ||
                                    (num % 5 == 0 &&
                                        game.hasPlayer(function (current) {
                                            return game.hasPlayer((current2) => current2.inRange(current)) && current.countDiscardableCards(player, 'hej');
                                        })) ||
                                    num % 8 == 0
                                );
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var num = 0;
                                player.getAllHistory('lose', function (evt) {
                                    if (evt.type == 'discard' && evt.cards2 && evt.cards2.length) num += evt.cards2.length;
                                });
                                player.getAllHistory('gain', function (evt) {
                                    if (evt.cards && evt.cards.length) num += evt.cards.length;
                                });
                                event.count = num;
                                ('step 1');
                                if (event.count % 3 == 0) {
                                    player.draw();
                                } else event.goto(3);
                                ('step 2');
                                if (player.countCards('he')) player.chooseToDiscard('he', true);
                                event._result = {};
                                ('step 3');
                                if (event.count % 5 == 0 && game.hasPlayer((current) => current != player && current.countDiscardableCards(player, 'hej'))) {
                                    player.chooseTarget('【博政】', '弃置一名其他角色区域内各一张牌', true, function (card, player, target) {
                                        return target != player && target.countDiscardableCards(player, 'hej');
                                    });
                                } else event.goto(5);
                                ('step 4');
                                if (result.targets?.length) {
                                    var target = result.targets[0],
                                        num = 0;
                                    if (target.countDiscardableCards(player, 'h')) num++;
                                    if (target.countDiscardableCards(player, 'e')) num++;
                                    if (target.countDiscardableCards(player, 'j')) num++;
                                    player.discardPlayerCard(target, 'hej', true, num).set('filterButton', function (button) {
                                        for (var i = 0; i < ui.selected.buttons.length; i++) {
                                            if (get.position(button.link) == get.position(ui.selected.buttons[i].link)) return false;
                                        }
                                        return true;
                                    });
                                }
                                event._result = {};
                                ('step 5');
                                if (event.count % 8 == 0) {
                                    player.chooseTarget('【博政】', '令一名角色选择回复一点体力或摸两张牌', true);
                                } else event.finish();
                                ('step 6');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    target.chooseDrawRecover(2, true);
                                }
                            },
                            intro: {
                                content(num) {
                                    var str = '<li>总次数:';
                                    str += num;
                                    str += '<br><li>摸牌:';
                                    str += num % 3;
                                    str += '/3<br><li>弃牌:';
                                    str += num % 5;
                                    str += '/5<br><li>回血/摸牌:';
                                    str += num % 8;
                                    str += '/8';
                                    return str;
                                },
                            },
                            group: 'chuli_bozheng_count',
                            subSkill: {
                                count: {
                                    trigger: {
                                        player: ['gainEnd', 'loseEnd'],
                                    },
                                    silent: true,
                                    firstDo: true,
                                    noHidden: true,
                                    filter(event, player) {
                                        if (event.name == 'lose' && (!event.type || event.type != 'discard')) return false;
                                        return true;
                                    },
                                    content() {
                                        var num = 0;
                                        player.getAllHistory('lose', function (evt) {
                                            if (evt.type == 'discard' && evt.cards2 && evt.cards2.length) num += evt.cards2.length;
                                        });
                                        player.getAllHistory('gain', function (evt) {
                                            if (evt.cards && evt.cards.length) num += evt.cards.length;
                                        });
                                        player.storage.chuli_bozheng = num;
                                        player.markSkill('chuli_bozheng');
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: 1,
                                },
                            },
                        },
                        chuli_chanxu: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            content() {
                                var num = player.storage.chuli_chanxu || 0;
                                var card = get.cardPile(function (card) {
                                    return card.number > num;
                                });
                                if (card) {
                                    player.gain(card, 'gain2');
                                    player.storage.chuli_chanxu = card.number;
                                    player.markSkill('chuli_chanxu');
                                    if (player.storage.chuli_chanxu >= 13) {
                                        delete player.storage.chuli_chanxu;
                                        player.unmarkSkill('chuli_chanxu');
                                    }
                                }
                            },
                            intro: {
                                content: '当前X为:#',
                            },
                        },
                        chuli_jiuqi: {
                            audio: 'ext:魔王/audio:1',
                            trigger: {
                                player: 'dyingAfter',
                            },
                            mark: true,
                            limited: true,
                            init(player) {
                                player.storage.niepan = false;
                            },
                            intro: {
                                content: '已记录牌名:【$】',
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('chuli_jiuqi');
                                event.num = 0;
                                ('step 1');
                                player.addSkill('chuli_jiuqi_1');
                                var dialog = [get.prompt('chuli_jiuqi')];
                                list2 = lib.inpile.filter(function (i) {
                                    return get.type2(i, false) == 'trick' || get.type(i, false) == 'basic';
                                });
                                if (list2.length) {
                                    dialog.push('<div class="text center">未记录</div>');
                                    dialog.push([list2, 'vcard']);
                                }
                                player.chooseButton(dialog, 9).set('ai', function (button) {
                                    var player = _status.event.player,
                                        name = button.link[2];
                                    if (player.getStorage('dinghan').includes(name)) {
                                        return -get.effect(player, { name: name }, player, player);
                                    } else {
                                        return get.effect(player, { name: name }, player, player) * (1 + player.countCards('hs', name));
                                    }
                                });
                                ('step 2');
                                if (result.bool) {
                                    for (var i = 0; i < 9; i++) {
                                        var name = result.links[i][2];
                                        player.markAuto('chuli_jiuqi', [name]);
                                        game.log(player, '向九奇记录中添加了', '#y' + get.translation(name));
                                    }
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: ['useCardAfter', 'respond'],
                                    },
                                    filter(event, player) {
                                        return player.getStorage('chuli_jiuqi').includes(event.card.name);
                                    },
                                    content() {
                                        'step 0';
                                        var jq = ['令' + get.translation(trigger.player) + '摸一张牌'];
                                        if (trigger.player.countCards('he') > 0) jq.push('你弃置' + get.translation(trigger.player) + '一张牌');
                                        player.chooseControl('cancel2').set('choiceList', jq).set('prompt', get.prompt('chuli_jiuqi'));
                                        ('step 1');
                                        if (result.control == 'cancel2') event.finish();
                                        else {
                                            if (result.index == 0) trigger.player.draw();
                                            if (result.index == 1) player.discardPlayerCard(trigger.player, 'he', true);
                                            player.unmarkAuto('chuli_jiuqi', [trigger.card.name]);
                                        }
                                    },
                                },
                            },
                        },
                        chuli_hudong: {
                            trigger: {
                                global: 'phaseBefore',
                                player: ['enterGame', 'showCharacterAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                return (
                                    !player.isDying() &&
                                    game.hasPlayer(function (current) {
                                        return current.name1 == 'chuli_jieke' || current.name2 == 'chuli_vva';
                                    })
                                );
                            },
                            content() {
                                player.say(['你…还要继续在饭里偷偷放黑豆吗？我不喜欢豆豆!'].randomGet());
                            },
                        },
                        yingbian_Angel: {
                            audio: 'ext:魔王/audio:1',
                            trigger: {
                                player: ['phaseJieshuEnd', 'phaseZhenlie'],
                            },
                            content() {
                                'step 0';
                                var Angel = ['失去1点体力值'];
                                if (player.maxHp - player.hp > 0) Angel.push('回复1点体力值');
                                player.chooseControl('cancel2').set('choiceList', Angel).set('prompt', get.prompt('yingbian_Angel'));
                                ('step 1');
                                event.卩乴行贚の = 0;
                                if (result.index == 0) {
                                    player.loseHp();
                                    event.卩乴行贚の += player.maxHp - player.hp + 1;
                                }
                                if (result.index == 1) {
                                    player.recover();
                                }
                                ('step 2');
                                var Angel = ['摸' + get.translation(1 + event.卩乴行贚の) + '张牌', '弃置' + get.translation(1 + event.卩乴行贚の) + '张牌'];
                                player.chooseControl('cancel2').set('choiceList', Angel).set('prompt', get.prompt('yingbian_Angel'));
                                ('step 3');
                                if (result.index == 0) player.draw(1 + event.卩乴行贚の);
                                if (result.index == 1) player.chooseToDiscard(1 + event.卩乴行贚の, 'he', true);
                                var Angel = ['令其他角色与你计算距离时增加' + get.translation(1 + event.卩乴行贚の) + '点距离', '你于其他角色计算距离时减少' + get.translation(1 + event.卩乴行贚の) + '点距离'];
                                player.chooseControl('cancel2').set('choiceList', Angel).set('prompt', get.prompt('yingbian_Angel'));
                                ('step 4');
                                player.storage.yingbian = event.卩乴行贚の;
                                if (result.control == 'cancel2') {
                                } else event.trigger('Angel');
                                if (result.index == 0) player.addTempSkill('yingbian_Angel_1', 'Angel');
                                if (result.index == 1) player.addTempSkill('yingbian_Angel_2', 'Angel');
                            },
                            subSkill: {
                                1: {
                                    mark: true,
                                    marktext: '秘计',
                                    intro: {
                                        name: '秘计',
                                        content(storage, player) {
                                            var yb = '其他角色与你计算距离时距离:';
                                            yb += get.translation(player.storage.yingbian + 1);
                                            return yb;
                                        },
                                    },
                                    mod: {
                                        globalTo(from, to, current) {
                                            return current + to.storage.yingbian + 1;
                                        },
                                    },
                                },
                                2: {
                                    mark: true,
                                    marktext: '秘计',
                                    intro: {
                                        name: '秘计',
                                        content(storage, player) {
                                            var yb = '你与其他角色计算距离时距离:';
                                            yb += get.translation(-player.storage.yingbian - 1);
                                            return yb;
                                        },
                                    },
                                    mod: {
                                        globalFrom(from, to, current) {
                                            return current - from.storage.yingbian - 1;
                                        },
                                    },
                                },
                            },
                        },
                        Angel_gksm: {
                            audio: 'ext:魔王/audio:2',
                            group: ['Angel_gksm_4'],
                            init(player) {
                                player.storage.gksmnum1 = 0;
                                player.storage.gksmskill = 0;
                            },
                            enable: 'phaseUse',
                            filter(event, player) {
                                return (
                                    ((player.countCards('hej', { type: 'basic' }) && !player.hasSkill('Angel_gksm_1')) ||
                                        (player.getCards('hej', function (card) {
                                            return get.type2(card, player) == 'trick';
                                        }).length &&
                                            !player.hasSkill('Angel_gksm_2')) ||
                                        (player.countCards('hej', { type: 'equip' }) && !player.hasSkill('Angel_gksm_3'))) &&
                                    player.countCards('hej') > 0
                                );
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.addTempSkill('Angel_gksm_5');
                                var num = [];
                                if (player.countCards('hej', { type: 'basic' }) && !player.hasSkill('Angel_gksm_1')) num.push('弃置所有基本牌并摸等量的牌');
                                if (
                                    player.getCards('hej', function (card) {
                                        return get.type2(card, player) == 'trick';
                                    }).length &&
                                    !player.hasSkill('Angel_gksm_2')
                                )
                                    num.push('弃置所有锦囊牌并摸等量的牌');
                                if (player.countCards('hej', { type: 'equip' }) && !player.hasSkill('Angel_gksm_3')) num.push('弃置所有装备牌并摸等量的牌');
                                player.chooseControl('cancel2').set('choiceList', num);
                                ('step 1');
                                if (result.control == 'cancel2') event.finish();
                                else {
                                    player.storage.gksmskill++;
                                    if (result.index == 0) {
                                        if (player.countCards('hej', { type: 'basic' }) && !player.hasSkill('Angel_gksm_1')) {
                                            var cards = player.getCards('he', function (card) {
                                                return get.type2(card, player) == 'basic';
                                            });
                                            player.addTempSkill('Angel_gksm_1');
                                        } else {
                                            if (
                                                player.getCards('hej', function (card) {
                                                    return get.type2(card, player) == 'trick';
                                                }).length &&
                                                !player.hasSkill('Angel_gksm_2')
                                            ) {
                                                var cards = player.getCards('hej', function (card) {
                                                    return get.type2(card, player) == 'trick';
                                                });
                                                player.addTempSkill('Angel_gksm_2');
                                            } else {
                                                var cards = player.getCards('hej', function (card) {
                                                    return get.type2(card, player) == 'equip';
                                                });
                                                player.addTempSkill('Angel_gksm_3');
                                            }
                                        }
                                    }
                                    if (result.index == 1) {
                                        if (
                                            player.countCards('hej', { type: 'basic' }) &&
                                            player.getCards('hej', function (card) {
                                                return get.type2(card, player) == 'trick';
                                            }).length &&
                                            !player.hasSkill('Angel_gksm_2')
                                        ) {
                                            var cards = player.getCards('hej', function (card) {
                                                return get.type2(card, player) == 'trick';
                                            });
                                            player.addTempSkill('Angel_gksm_2');
                                        } else {
                                            var cards = player.getCards('hej', function (card) {
                                                return get.type2(card, player) == 'equip';
                                            });
                                            player.addTempSkill('Angel_gksm_3');
                                        }
                                    }
                                    if (result.index == 2) {
                                        var cards = player.getCards('hej', function (card) {
                                            return get.type2(card, player) == 'equip';
                                        });
                                        player.addTempSkill('Angel_gksm_3');
                                    }
                                    if (cards.length) {
                                        player.discard(cards);
                                        player.draw(cards.length);
                                    }
                                }
                            },
                            subSkill: {
                                1: {},
                                2: {},
                                3: {},
                                4: {
                                    enable: 'phaseUse',
                                    audio: 'ext:魔王/audio:1',
                                    audioname: ['chuli_daweiwuwang'],
                                    filter(event, player) {
                                        if (!player.hasSkill('Angel_gksm_3') || !player.hasSkill('Angel_gksm_2') || !player.hasSkill('Angel_gksm_1')) return false;
                                        if (
                                            !player.getCards('hej', { type: 'basic' }).length ||
                                            !player.getCards('hej', function (card) {
                                                return get.type2(card, player) == 'trick';
                                            }).length ||
                                            !player.getCards('hej', { type: 'equip' }).length
                                        )
                                            return false;
                                        return player.storage.gksmnum1 < 1;
                                    },
                                    content() {
                                        'step 0';
                                        player.addTempSkill('Angel_gksm_5');
                                        var num = ['弃置区域内所有牌并获得' + get.translation(player.countCards('hej')) + '张非基本牌', '弃置区域内所有牌并获得' + get.translation(player.countCards('hej')) + '张非锦囊牌', '弃置区域内所有牌并获得' + get.translation(player.countCards('hej')) + '张非装备牌'];
                                        player.chooseControl('cancel2').set('choiceList', num);
                                        ('step 1');
                                        if (result.control == 'cancel2') event.finish();
                                        else {
                                            player.storage.gksmnum1++;
                                            player.storage.gksmskill++;
                                            var lo = player.countCards('hej');
                                            player.discard(player.getCards('hej'));
                                            if (result.index == 0) var num = 'basic';
                                            if (result.index == 1) var num = 'trick';
                                            if (result.index == 2) var num = 'equip';
                                            var list = [],
                                                cards = [],
                                                ie = 0;
                                            for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                                                var type = get.type2(ui.cardPile.childNodes[i], false);
                                                if (type != num && ie < lo) {
                                                    ie++;
                                                    cards.push(ui.cardPile.childNodes[i]);
                                                }
                                            }
                                            player.gain(cards, 'gain2');
                                        }
                                    },
                                },
                                5: {
                                    trigger: {
                                        player: 'phaseUseBegin',
                                    },
                                    forced: true,
                                    onremove(player) {
                                        player.storage.gksmskill = 0;
                                        player.storage.gksmnum1 = 0;
                                    },
                                    content() {
                                        player.storage.gksmskill = 0;
                                        player.storage.gksmnum1 = 0;
                                    },
                                },
                            },
                        },
                        tunjiang_Angel: {
                            mod: {
                                maxHandcard(player, num) {
                                    return num + game.countGroup();
                                },
                            },
                            trigger: {
                                player: 'phaseEnd',
                            },
                            filter(event, player) {
                                return !player.getStat('damage');
                            },
                            content() {
                                'step 0';
                                player.draw(game.countGroup());
                                ('step 1');
                                player.storage.tunjuangjilu = player.countCards('h');
                                player.addTempSkill('tunjiang_Angel_1', { player: 'phaseZhunbeiBegin' });
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    marktext: '屯江',
                                    mark: true,
                                    intro: {
                                        content(storage, player) {
                                            var str = '<li>';
                                            str += '屯江记录值' + get.translation(player.storage.tunjuangjilu) + '';
                                            str += '<li>';
                                            str += '当前手牌数' + get.translation(player.countCards('h')) + '';
                                            str += '<li>';
                                            str += '目前状态:';
                                            if (player.storage.tunjuangjilu == player.countCards('h')) str += '成功';
                                            else str += '失败';
                                            return str;
                                        },
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        if (player.storage.tunjuangjilu == player.countCards('h')) {
                                            player.chooseToDiscard('你可弃置任意张牌并对至多等量名角色造成一点伤害', [1, player.countCards('he')]);
                                        } else {
                                            player.removeSkill('tunjiang_Angel_1');
                                            event.finish();
                                        }
                                        ('step 1');
                                        if (result.cards?.length) {
                                            var num = result.cards.length;
                                            player.chooseTarget('选择至多' + get.translation(num) + '名角色,对其造成一点伤害', [1, num]).set('ai', function (target) {
                                                var player = _status.event.player;
                                                return get.damageEffect(target, player, player);
                                            });
                                        }
                                        ('step 2');
                                        if (result.targets?.length) {
                                            for (var i = 0; i < result.targets.length; i++) {
                                                result.targets[i].damage();
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        wenji_angel: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.hasPlayer((current) => current != player && current.countCards('he'));
                            },
                            async content(event, trigger, player) {
                                const result = await player
                                    .chooseTarget('令一名其他角色交给你一张牌', (card, player, target) => target != player && target.countCards('he'))
                                    .set('ai', (target) => target.isEnemiesOf(_status.event.player))
                                    .forResult();
                                if (result.targets?.length) {
                                    const result1 = await result.targets[0].chooseCard('he', true, '问计:将一张牌交给' + get.translation(player)).forResult();
                                    if (result1.bool) {
                                        await result.targets[0].give(result1.cards, player, true);
                                        var type = get.type(result1.cards[0]);
                                        if (type != 'equip') {
                                            var list = [];
                                            for (var i of lib.inpile) {
                                                if (get.type(i) == type && lib.filter.filterCard({ name: i }, player)) list.push(i);
                                            }
                                            const result2 = await player
                                                .chooseButton(['问计:选择要使用的牌', [list.map((name) => [type, '', name]), 'vcard']])
                                                .set('ai', (button) => _status.event.player.getUseValue({ name: button.link[2], nature: button.link[3] }))
                                                .forResult();
                                            if (get.type(result2.links[0][2]) == 'trick') player.addTempSkill('wenji_angel_2');
                                            else player.addTempSkill('wenji_angel_3');
                                            await player.chooseUseTarget({ name: result2.links[0][2], nature: result2.links[0][3] });
                                        } else {
                                            var list = [];
                                            for (var i of lib.inpile) {
                                                if (get.subtype(i) == 'equip1' || (get.subtype(i) == 'equip2' && get.subtype(i) == 'equip5')) list.push(i);
                                            }
                                            const result2 = await player
                                                .chooseButton([1, player.hp], ['问计:选择至多' + get.translation(player.hp) + '张装备牌并获得其装备效果', [list.map((name) => [type, '', name]), 'vcard']])
                                                .set('ai', (button) => _status.event.player.getUseValue({ name: button.link[2] }))
                                                .forResult();
                                            for (var i of result2.links) {
                                                for (var a of lib.card[i[2]].skills) player.addTempSkill(a, { player: 'phaseBegin' });
                                            }
                                        } //QQQ
                                    }
                                }
                            },
                            subSkill: {
                                2: {
                                    marktext: '谋',
                                    mark: true,
                                    intro: {
                                        content(storage, player) {
                                            var str = '<li>';
                                            str += '本回合内使用锦囊牌不可被响应';
                                            return str;
                                        },
                                    },
                                    audio: 2,
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return get.type(event.card) == 'trick';
                                    },
                                    content() {
                                        trigger.directHit.addArray(game.players);
                                    },
                                },
                                3: {
                                    marktext: '谋',
                                    mark: true,
                                    intro: {
                                        content(storage, player) {
                                            var str = '<li>';
                                            str += '本回合内使用基本牌不限制次数';
                                            return str;
                                        },
                                    },
                                    mod: {
                                        cardUsable(card, player, num) {
                                            if (card.name == 'jiu' || card.name == 'sha') return Infinity;
                                        },
                                    },
                                },
                            },
                        },
                        gongao_Angel: {
                            marktext: '獒',
                            mark: true,
                            intro: {
                                content(storage, player) {
                                    if (!player.storage.gongao) player.storage.gongao = player.maxHp;
                                    if (!player.storage.gongao1) player.storage.gongao1 = 0;
                                    if (!player.storage.gongao2) player.storage.gongao2 = 0;
                                    if (!player.storage.gongao3) player.storage.gongao3 = 0;
                                    var str = '<li>';
                                    str += '选项①:体力上限+1';
                                    str += '<li>';
                                    str += '剩余次数' + get.translation(player.storage.gongao - player.storage.gongao1) + '/' + get.translation(player.storage.gongao) + '';
                                    str += '<li>';
                                    str += '目前增加体力上限:' + get.translation(player.storage.gongao1) + '';
                                    str += '<li>';
                                    str += '选项②:摸牌阶段额外摸牌+1';
                                    str += '<li>';
                                    str += '剩余次数' + get.translation(player.storage.gongao - player.storage.gongao2) + '/' + get.translation(player.storage.gongao) + '';
                                    str += '<li>';
                                    str += '目前增加摸牌阶段额摸牌数:' + get.translation(player.storage.gongao2) + '';
                                    str += '<li>';
                                    str += '选项③:手牌上限+1';
                                    str += '<li>';
                                    str += '剩余次数' + get.translation(player.storage.gongao - player.storage.gongao3) + '/' + get.translation(player.storage.gongao) + '';
                                    str += '<li>';
                                    str += '目前增加手牌上限数:' + get.translation(player.storage.gongao3) + '';
                                    return str;
                                },
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    if (!player.storage.gongao) player.storage.gongao = player.maxHp;
                                    if (!player.storage.gongao1) player.storage.gongao1 = 0;
                                    if (!player.storage.gongao2) player.storage.gongao2 = 0;
                                    if (!player.storage.gongao3) player.storage.gongao3 = 0;
                                    var m = player.storage.gongao3;
                                    return num + m;
                                },
                            },
                            group: 'gongao_Angel_1',
                            trigger: {
                                global: ['dyingBegin', 'die'],
                            },
                            filter(event, player) {
                                return player.storage.gongao - player.storage.gongao1 > 0 || player.storage.gongao - player.storage.gongao2 > 0 || player.storage.gongao - player.storage.gongao3 > 0;
                            },
                            content() {
                                'step 0';
                                var num = [];
                                if (player.storage.gongao - player.storage.gongao1 > 0) num.push('体力上限+1');
                                if (player.storage.gongao - player.storage.gongao2 > 0) num.push('摸牌阶段额外摸牌+1');
                                if (player.storage.gongao - player.storage.gongao3 > 0) num.push('手牌上限+1');
                                player.chooseControl('cancel2').set('choiceList', num);
                                ('step 1');
                                if (result.index == 0) {
                                    if (player.storage.gongao - player.storage.gongao1 > 0) {
                                        player.gainMaxHp();
                                        player.storage.gongao1++;
                                    } else {
                                        if (player.storage.gongao - player.storage.gongao2 > 0) {
                                            player.storage.gongao2++;
                                        } else {
                                            player.storage.gongao3++;
                                        }
                                    }
                                }
                                if (result.index == 1) {
                                    if (player.storage.gongao - player.storage.gongao2 > 0) {
                                        player.storage.gongao2++;
                                    } else {
                                        player.storage.gongao3++;
                                    }
                                }
                                if (result.index == 2) {
                                    iplayer.storage.gongao3++;
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseDrawBegin2',
                                    },
                                    forced: true,
                                    preHidden: true,
                                    filter(event, player) {
                                        return !event.numFixed && player.storage.gongao2 > 0;
                                    },
                                    content() {
                                        trigger.num += player.storage.gongao2;
                                    },
                                },
                            },
                        },
                        juyi_Angel: {
                            derivation: ['weizhong_Angel', 'xianxi_Angel'],
                            juexingji: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!player.storage.gongao) player.storage.gongao = player.maxHp;
                                if (!player.storage.gongao1) player.storage.gongao1 = 0;
                                if (!player.storage.gongao2) player.storage.gongao2 = 0;
                                if (!player.storage.gongao3) player.storage.gongao3 = 0;
                                if (player.storage.gongao - player.storage.gongao1 < 1 && player.storage.gongao - player.storage.gongao2 < 1 && pplayer.storage.gongao - player.storage.gongao3 < 0) return true;
                                if (game.countPlayer() <= player.storage.gongao) return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                var targets = game.filterPlayer();
                                targets.remove(player);
                                for (var i; i < targets.length; i++) {
                                    if (targets[i].group == player.group) {
                                    } else targets.remove(targets[i]);
                                }
                                if (targets.length) {
                                    for (var i of targets) {
                                        if (i.group == player.group) i.damage();
                                    }
                                }
                                player.addSkill('weizhong_Angel');
                                player.addSkill('xianxi_Angel');
                                player.awakenSkill('juyi_Angel');
                            },
                            markimage: 'extension/OLUI/image/player/marks/juexingji.png',
                        },
                        weizhong_Angel: {
                            group: 'weizhong_Angel_1',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.target && event.target.hp < player.hp;
                            },
                            logTarget: 'target',
                            content() {
                                trigger.directHit.add(trigger.target);
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player && event.player.maxHp < player.maxHp;
                                    },
                                    logTarget: 'target',
                                    content() {
                                        trigger.num++;
                                    },
                                },
                            },
                        },
                        xianxi_Angel: {
                            group: 'xianxi_Angel_1',
                            trigger: {
                                player: 'phaseDrawEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                var targets = game.filterPlayer();
                                targets.remove(player);
                                return event.num > targets.length;
                            },
                            content() {
                                'step 0';
                                var num = game.filterPlayer();
                                num.remove(player);
                                player.chooseToDiscard(num.length, true, 'he');
                                var targets = game.filterPlayer();
                                targets.remove(player);
                                for (var i of targets) i.damage();
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'dyingAfter',
                                    },
                                    forced: true,
                                    popup: false,
                                    charlotte: true,
                                    filter(event, player) {
                                        return event.reason && event.reason.parent.name == 'xianxi_Angel';
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseControl('失去体力', '失去上限', function (event, player) {
                                                if (player.hp == player.maxHp) return '失去体力';
                                                if (player.hp < player.maxHp - 1 || player.hp <= 2) return '失去上限';
                                                return '失去体力';
                                            })
                                            .set('prompt', '嫌隙:失去1点体力或减1点体力上限');
                                        ('step 1');
                                        if (result.control == '失去体力') {
                                            player.loseHp();
                                        } else {
                                            player.loseMaxHp(true);
                                        }
                                    },
                                },
                            },
                        },
                        fanglve_chuli: {
                            audio: 'yuzhang',
                            enable: 'phaseUse',
                            usable: 2,
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var dialog = ui.create.dialog('方略:选择一项执行', 'hidden');
                                    dialog.add([
                                        [
                                            ['player', '将手牌置于一名角色的武将牌上'],
                                            ['target', '观看一名角色的手牌'],
                                        ],
                                        'textbutton',
                                    ]);
                                    return dialog;
                                },
                                filter(button, player) {
                                    return !player.hasSkill('fanglve_chuli_' + button.link, null, null, false);
                                },
                                check: () => 1 + Math.random(),
                                backup(links) {
                                    return get.copy(lib.skill['fanglve_chuli_' + links[0]]);
                                },
                                prompt(links) {
                                    if (links[0] == 'player') return '将至多X张手牌置于一名角色的武将牌上称为「策」,若其中包含三种类型你将手牌摸至体力上限(X为其的体力值)';
                                    return '观看一名角色的手牌并展示牌堆顶等量的牌,你可将二者进行交换,而后你可将牌堆顶同名牌或其手牌中的同名牌置于其武将牌上称为「策」';
                                },
                            },
                            subSkill: {
                                backup: {},
                                tag: {
                                    name: '手牌',
                                },
                                player: {
                                    charlotte: true,
                                    audio: 'yuzhang',
                                    filterTarget(card, player, target) {
                                        if (!ui.selected.cards.length) return false;
                                        return ui.selected.cards.length <= target.hp;
                                    },
                                    complexTarget: true,
                                    complexSelect: true,
                                    filterCard: () => true,
                                    selectCard() {
                                        var player = _status.event.player;
                                        return [1, player.countCards('h')];
                                    },
                                    content() {
                                        'step 0';
                                        player.addTempSkill('fanglve_chuli_player');
                                        target.addToExpansion(cards, 'gain2').gaintag.add('fanglve_chuli');
                                        ('step 1');
                                        var types = [];
                                        cards.filter((i) => types.add(get.type2(i)));
                                        if (types.length >= 3) player.drawTo(player.maxHp);
                                    },
                                },
                                target: {
                                    charlotte: true,
                                    audio: 'yuzhang',
                                    filterTarget(card, player, target) {
                                        return target.countCards('h');
                                    },
                                    filterCard: () => false,
                                    selectCard: -1,
                                    content() {
                                        'step 0';
                                        player.addTempSkill('fanglve_chuli_target');
                                        var cards = target.getCards('h'),
                                            num = cards.length;
                                        var cards2 = game.cardsGotoOrdering(get.cards(num)).cards;
                                        event.cards = cards2;
                                        var next = player.chooseToMove('方略:你可以交换两者中任意张牌', true);
                                        next.set('list', [
                                            ['牌堆顶', cards2],
                                            [get.translation(target) + '的手牌', cards, 'fanglve_chuli_tag'],
                                        ]);
                                        next.set('filterMove', function (from, to, moved) {
                                            if (typeof to == 'number') return false;
                                            return true;
                                        });
                                        next.set('processAI', function (list) {
                                            var cards = list[0][1].slice(0).sort(function (a, b) {
                                                return get.value(b) - get.value(a);
                                            });
                                            return [cards, []];
                                        });
                                        ('step 1');
                                        if (result.moved) {
                                            var hs = target.getCards('h');
                                            var top = result.moved[0],
                                                topx = top.filter((i) => hs.includes(i));
                                            if (topx.length) player.lose(topx, ui.ordering);
                                            event.top = top;
                                            event.gain = result.moved[1].filter((i) => event.cards.includes(i));
                                        }
                                        ('step 2');
                                        if (event.top.length) {
                                            event.cards = event.top.slice(0);
                                            for (var i = 0; i < event.top.length; i++) {
                                                event.top[i].fix();
                                                ui.cardPile.insertBefore(event.top[i], ui.cardPile.firstChild);
                                            }
                                        } else event.cards = [];
                                        if (event.gain.length) target.gain(event.gain, 'draw');
                                        game.updateRoundNumber();
                                        ('step 3');
                                        var cards_top = event.cards.filter(function (i) {
                                            return get.position(i, true) == 'c';
                                        });
                                        var cards_hs = target.getCards('h');
                                        cards_top = cards_top.filter(function (card) {
                                            return cards_top.filter((i) => i.name == card.name).length > 1;
                                        });
                                        cards_hs = cards_hs.filter(function (card) {
                                            return cards_hs.filter((i) => i.name == card.name).length > 1;
                                        });
                                        event.cards_top = cards_top;
                                        event.cards_hs = cards_hs;
                                        var str = get.translation(target);
                                        if (cards_top.length || cards_hs.length) {
                                            var list = [],
                                                choiceList = ['将牌堆顶的' + (cards_top.length ? get.translation(cards_top) : '暂无卡牌') + '置于' + str + '的武将牌上', '将' + str + '手牌中的' + (cards_hs.length ? get.translation(cards_hs) : '暂无卡牌') + '置于其武将牌上'];
                                            if (cards_top.length) list.add('选项一');
                                            else choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + '</span>';
                                            if (cards_hs.length) list.add('选项二');
                                            else choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + '</span>';
                                            player.chooseControl(list, 'cancel2').set('choiceList', choiceList);
                                        }
                                        ('step 4');
                                        if (result.control != 'cancel2') {
                                            var to = [],
                                                str = 'give';
                                            if (result.control == '选项一') {
                                                to = event.cards_top;
                                                str = 'gain2';
                                            } else to = event.cards_hs;
                                            target.addToExpansion(to, str, target).gaintag.add('fanglve_chuli');
                                        }
                                    },
                                },
                            },
                        },
                        jingce_chuli: {
                            trigger: {
                                global: ['useCard', 'respond'],
                            },
                            audio: 'decadejingce',
                            filter(event, player) {
                                var cards = event.player.getExpansions('fanglve_chuli');
                                return cards.filter((i) => get.type2(i) == get.type2(event.card) || i.name == event.card.name).length;
                            },
                            forced: true,
                            logTarget: 'player',
                            content() {
                                'step 0';
                                var cards = trigger.player.getExpansions('fanglve_chuli');
                                var remove = cards.filter((i) => get.type2(i) == get.type2(trigger.card) || i.name == trigger.card.name);
                                var num1 = cards.filter((i) => get.type2(i) == get.type2(trigger.card)).length;
                                var num2 = cards.filter((i) => i.name == trigger.card.name).length;
                                trigger.player.loseToDiscardpile(remove);
                                event.num1 = num1;
                                event.num2 = num2;
                                event.count = 0;
                                ('step 1');
                                if (event.num1 >= 1) {
                                    var vcard = [];
                                    for (var i of lib.inpile) {
                                        var type = get.type2(i);
                                        var card = get.cardPile((card) => card.name == i);
                                        if (card && type == get.type2(trigger.card)) vcard.add(i);
                                    }
                                    if (vcard.length) {
                                        player.chooseButton(['精策:选择获得一张' + get.translation(get.type2(trigger.card)) + '牌或点击〖取消〗摸' + event.num1 + '张牌', [vcard, 'vcard']]);
                                    } else event.goto(3);
                                } else event.goto(3);
                                ('step 2');
                                if (result.links?.length) {
                                    var card = get.cardPile((card) => card.name == result.links[0][2]);
                                    if (card) player.gain(card, 'gain2');
                                    else player.chat('tnnd这里面居然没有了');
                                } else event.count += event.num1;
                                ('step 3');
                                if (event.num2 >= 1) {
                                    player.chooseBool('精策:点击〖是〗对' + get.translation(trigger.player) + '造成一点伤害或点击〖否〗摸' + event.num2 + '张牌');
                                } else event.goto(5);
                                ('step 4');
                                if (result.bool) trigger.player.damage();
                                else event.count += event.num2;
                                ('step 5');
                                if (event.count >= 1) player.draw(event.count);
                                ('step 6');
                                var cards = trigger.player.getExpansions('fanglve_chuli');
                                if (!cards.length) player.damage(trigger.player);
                                else event.finish();
                                ('step 7');
                                var num = 0;
                                if (trigger.player.countDiscardableCards(player, 'h')) num++;
                                if (trigger.player.countDiscardableCards(player, 'e')) num++;
                                if (trigger.player.countDiscardableCards(player, 'j')) num++;
                                if (num > 0) {
                                    player.discardPlayerCard(trigger.player, num, true, 'hej').set('filterButton', function (button) {
                                        for (var i of ui.selected.buttons) if (get.position(button.link) == get.position(i.link)) return false;
                                        return true;
                                    });
                                }
                            },
                            group: 'jingce_chuli_recover',
                            subSkill: {
                                recover: {
                                    trigger: {
                                        global: 'phaseAfter',
                                    },
                                    audio: 'decadejingce',
                                    filter(event, player) {
                                        return event.player.getExpansions('fanglve_chuli').length;
                                    },
                                    forced: true,
                                    content() {
                                        var cards = trigger.player.getExpansions('fanglve_chuli');
                                        trigger.player.loseToDiscardpile(cards);
                                        if (player.isDamaged()) {
                                            player.recover();
                                        } else player.draw(cards.length);
                                    },
                                },
                            },
                        },
                        chuli_lici: {
                            trigger: {
                                global: 'phaseEnd',
                            },
                            filter(event, player) {
                                var ph = player.countCards('h');
                                var th = event.player.countCards('h');
                                if (ph == th) return false;
                                else {
                                    if (ph > th) {
                                        return player.countGainableCards(event.player, 'he');
                                    } else if (th > ph) return event.player.countGainableCards(player, 'he');
                                }
                            },
                            logTarget: 'player',
                            forced: true,
                            content() {
                                'step 0';
                                if (trigger.player.countCards('h') > player.countCards('h')) player.gainPlayerCard('he', trigger.player, true);
                                else trigger.player.gainPlayerCard('he', player, true);
                                ('step 1');
                                if (trigger.player.countCards('h') == player.countCards('h')) player.draw();
                            },
                        },
                        chuli_qiaobian: {
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            forced: true,
                            filter: (e, p) => e.player.countCards('he') && p.countCards('he') && e.player != p,
                            content() {
                                'step 0';
                                player.chooseCard('是否发动【利辞】？:<br>与' + get.translation(trigger.player) + '交换至多三张手牌', [0, 3], 'he');
                                ('step 1');
                                if (result.cards?.length) {
                                    event.cards = result.cards;
                                    var num = [0, 1, 2, 3].randomGet(1);
                                    var bool = [true, false].randomGet(1);
                                    var num1 = result.cards.length;
                                    var arr1 = player;
                                    var arr2 = trigger.player;
                                    trigger.player
                                        .chooseCard('选择需要交换的手牌', [0, 3], true, 'he')
                                        .set('ai', (card) => {
                                            if (get.attitude(arr1, arr2) > 0) {
                                                if (ui.selected.cards.length < num1) {
                                                    return 10 - get.value(card);
                                                } else return -10;
                                            } else {
                                                if (arr1.countCards('he') < 3) {
                                                    var list = ['0'];
                                                    for (var i = 0; i < arr1.countCards('he'); i++) list.add(i);
                                                    var num2 = list.randomGet(1);
                                                    if (bool) {
                                                        if (ui.selected.cards.length < num1) {
                                                            return 7 - get.value(card);
                                                        } else return -10;
                                                    }
                                                    if (ui.selected.cards.length < num2) {
                                                        return 7 - get.value(card);
                                                    } else return -10;
                                                } else {
                                                    if (ui.selected.cards.length) {
                                                        if (bool) {
                                                            if (ui.selected.cards.length < num1) {
                                                                return 7 - get.value(card);
                                                            } else return -10;
                                                        }
                                                        if (ui.selected.cards.length < num) {
                                                            return 7 - get.value(card);
                                                        } else return -10;
                                                    } else {
                                                        if (bool) {
                                                            if (num1 != 0) {
                                                                return 10;
                                                            } else return -10;
                                                        }
                                                        if (num != 0) return 10;
                                                        else return -10;
                                                    }
                                                }
                                            }
                                        })
                                        .set('complexCard', true);
                                } else event.finish();
                                ('step 2');
                                if (result.cards?.length) {
                                    trigger.player.chat('我选择交换' + result.cards.length + '张牌');
                                    player.swapHandcards(trigger.player, event.cards, result.cards);
                                    if (result.cards.length < event.cards.length) {
                                        event.num = event.cards.length - result.cards.length;
                                        player.chooseControl(['获得护甲', '造成伤害']);
                                    } else event.finish();
                                }
                                ('step 3');
                                if (result.control == '获得护甲') {
                                    player.chooseTarget('是否选择一名角色,令其本回合内获得' + event.num + '点护甲');
                                } else trigger.player.damage(event.num);
                                ('step 4');
                                if (result.targets?.length) {
                                    event.targets = result.targets;
                                    event.targets[0].hujiaqianbian = event.num;
                                    event.targets[0].addTempSkill('chuli_qiaobian_1');
                                }
                            },
                            subSkill: {
                                1: {
                                    init(player) {
                                        player.changeHujia(player.hujiaqianbian, null, true);
                                    },
                                    onremove(player) {
                                        var num = Math.min(player.hujiaqianbian, player.hujia);
                                        player.changeHujia(-num);
                                    },
                                },
                            },
                        },
                        chuli_xingyun: {
                            trigger: {
                                source: 'damageBegin2',
                            },
                            forced: true,
                            audio: 'ext:魔王/audio:5',
                            filter(event, player) {
                                return event.num > 0 && event.player != player && event.player.countMark('chuli_xingyun') < event.player.hp;
                            },
                            content() {
                                'step 0';
                                trigger.player.addMark('chuli_xingyun', trigger.num);
                                trigger.cancel();
                                ('step 1');
                                player
                                    .chooseTarget('请选择一名角色令其回复一点体力或令其摸一张牌', function (card, player, target) {
                                        return target.isAlive();
                                    })
                                    .set('ai', function (target) {
                                        if (target.hp == target.maxHp) {
                                            return get.attitude(player, target) > 0 ? 1 : -1;
                                        } else {
                                            return get.recoverEffect(target, player, player) > 0 ? 1 : -1;
                                        }
                                    });
                                ('step 2');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    if (!target.isDamaged()) {
                                        event._result = { index: 1 };
                                    } else {
                                        var str = get.translation(target);
                                        player.chooseControl().set('choiceList', ['令' + str + '回复1点体力', '令' + str + '摸一张牌']);
                                    }
                                } else event.finish();
                                ('step 3');
                                if (result.index == 0) target.recover();
                                else target.draw();
                            },
                            marktext: '星',
                            intro: {
                                content: '#颗✨要落下来咯～',
                            },
                            group: 'chuli_xingyun_remove',
                            subSkill: {
                                remove: {
                                    trigger: {
                                        player: 'damageBefore',
                                    },
                                    forced: true,
                                    audio: 'ext:魔王/audio:4',
                                    filter(event, player) {
                                        return game.filterPlayer((current) => {
                                            return current.countMark('chuli_xingyun') > 0;
                                        }).length;
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseTarget(true, '请选择一名角色移除星并抵消伤害', function (card, player, target) {
                                            return player != target && target.countMark('chuli_xingyun') > 0;
                                        }).ai = function (target) {
                                            return get.attitude(player, target) > 0;
                                        };
                                        ('step 1');
                                        if (result.targets?.length) {
                                            var target = result.targets[0];
                                            var num = target.countMark('chuli_xingyun');
                                            target.removeMark('chuli_xingyun', target.countMark('chuli_xingyun'));
                                            target.loseHp(num);
                                            player.draw(num);
                                            trigger.cancel();
                                        } else {
                                            event.finish();
                                        }
                                    },
                                },
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'damage') && player.hasSkill('chuli_xingyun')) {
                                            if (target.storage.chuli_xingyun_star > 0) {
                                                return 0;
                                            } else {
                                                return Math.max(0, current - target.hp);
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        chuli_jueze: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            audio: 'ext:魔王/audio:5',
                            content() {
                                'step 0';
                                var choices = [];
                                if (player.hp > 0) choices.push('生');
                                if (player.hp < player.maxHp) choices.push('死');
                                player
                                    .chooseControl(choices)
                                    .set('prompt', '请选择一项:')
                                    .set('ai', function (event, player) {
                                        if (player.hp == 1) return '死';
                                        if (player.hp == player.maxHp) return '生';
                                        if (player.hp == 2 && player.countCards('he') >= 2) return '死';
                                        if (player.hp == 2 && player.countCards('he') == 1) return Math.random() < 0.5 ? '生' : '死';
                                        if (player.hp == 3 && player.countCards('he') >= 3) return '死';
                                        if (player.hp == 3 && player.countCards('he') == 2) return Math.random() < 0.5 ? '生' : '死';
                                        return Math.random() < 0.3 ? '生' : '死';
                                    });
                                ('step 1');
                                if (result.control) {
                                    event.control = result.control;
                                    if (result.control == '生') {
                                        player.chooseTarget('请选择至多' + player.hp + '名其他角色,令其回复一点体力值', [1, player.hp], (event, player, target) => {
                                            return target.hp < target.maxHp && target != player;
                                        });
                                    } else {
                                        player.chooseTarget('请选择至多' + (player.maxHp - player.hp) + '名其他角色,令其受到你造成的一点伤害', [1, player.maxHp - player.hp], (event, player, target) => {
                                            return target != player;
                                        });
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    if (event.control == '生') {
                                        for (var i of result.targets) i.recover();
                                        player.damage(result.targets.length);
                                    } else {
                                        for (var i of result.targets) {
                                            i.storage.slk = player;
                                            i.addTempSkill('chuli_jueze_1', { player: 'phaseEnd' });
                                            i.damage();
                                        }
                                    }
                                } else {
                                    event.finish();
                                }
                            },
                            subSkill: {
                                1: {
                                    mod: {
                                        cardEnabled(card) {
                                            if (get.type(card) == 'trick' || get.type(card) == 'delay') return false;
                                        },
                                        cardRespondable(card) {
                                            if (get.type(card) == 'trick' || get.type(card) == 'delay') return false;
                                        },
                                    },
                                    mark: true,
                                    marktext: '死',
                                    intro: {
                                        content: '只要我还在遭受苦难,就不会有人活着!',
                                    },
                                    trigger: {
                                        player: 'loseEnd',
                                    },
                                    forced: true,
                                    audio: 'ext:魔王/audio:4',
                                    filter(event, player) {
                                        return event.type == 'discard' && event.getParent(3).name == 'phaseDiscard' && event.cards.filterInD('d').length;
                                    },
                                    content() {
                                        var num = 0;
                                        for (var i of trigger.cards) {
                                            if (get.type(i) == 'trick') {
                                                num++;
                                            }
                                        }
                                        var cards = [];
                                        for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                                            if (cards.length < num && get.type(ui.cardPile.childNodes[i]) == 'trick') {
                                                cards.push(ui.cardPile.childNodes[i]);
                                            }
                                        }
                                        player.storage.slk.gain(cards, 'gain2');
                                    },
                                },
                            },
                        },
                        white_gqliangyi: {
                            trigger: {
                                global: 'die',
                                player: ['dieBegin', 'phaseDrawBegin', 'phaseDiscardBegin', 'damageEnd', 'loseHpEnd', 'recoverEnd', 'phaseJudgeSkipped', 'phaseJudgeCancelled', 'phaseDrawSkipped', 'phaseDrawCancelled', 'phaseUseSkipped', 'phaseUseCancelled', 'phaseDiscardSkipped', 'phaseDiscardCancelled'],
                                source: 'damageSource',
                            },
                            forced: true,
                            popup: false,
                            _priority: 2,
                            filter(event, player, name) {
                                if (name == 'die') return event.player != player;
                                return true;
                            },
                            content() {
                                var name = event.triggername;
                                switch (name) {
                                    case 'recoverEnd':
                                        game.playAudio('../extension/魔王/audio', '回复体力' + [1, 2, 3].randomGet());
                                        break;
                                    case 'loseHpEnd':
                                        game.playAudio('../extension/魔王/audio', '流失体力' + [1, 2, 3].randomGet());
                                        break;
                                    case 'phaseDrawBegin':
                                        game.playAudio('../extension/魔王/audio', '摸牌阶段' + [1, 2, 3, 4].randomGet());
                                        break;
                                    case 'dieBegin':
                                        game.playAudio('../extension/魔王/audio/你死亡时1.mp3');
                                        break;
                                    case 'die':
                                        game.playAudio('../extension/魔王/audio', '其他角色死亡时' + [1, 2, 3, 4, 5].randomGet());
                                        break;
                                    case 'phaseDiscardBegin':
                                        game.playAudio('../extension/魔王/audio', '弃牌阶段' + [1, 2, 3, 4, 5, 6].randomGet());
                                        break;
                                    case 'damageEnd':
                                        game.playAudio('../extension/魔王/audio', '受到伤害' + [1, 2, 3, 4].randomGet());
                                        break;
                                    case 'damageSource':
                                        game.playAudio('../extension/魔王/audio', '造成伤害' + [1, 2, 3, 4].randomGet());
                                        break;
                                    default:
                                        game.playAudio('../extension/魔王/audio', '跳过阶段' + [1, 2, 3].randomGet());
                                }
                            },
                            _priority: 200,
                        },
                        white_tichun: {
                            trigger: {
                                player: 'loseMaxHpBefore',
                            },
                            filter(event, player) {
                                if (!player.storage.white_tichun) player.storage.white_tichun = true;
                                return player.storage.white_tichun != false;
                            },
                            prompt: '是否发动【谦虚】？',
                            prompt2: '谦虚的魔王喵绝对不会在你体力上限减少时让你输入『魔王可爱喵~』增加等量的体力上限喵~<br/>也不会因为你说错话而让此技能无法发动喵~',
                            content() {
                                'step 0';
                                var dialog = ui.create.dialog(false);
                                dialog.add('【谦虚】<br>请输入魔王可爱喵~');
                                var div = document.createElement('div');
                                var input = div.appendChild(document.createElement('input'));
                                input.type = 'text';
                                input.setAttribute('maxlength', '20');
                                input.addEventListener('keydown', (e) => {
                                    e.stopPropagation();
                                });
                                input.addEventListener('keyup', (e) => {
                                    e.stopPropagation();
                                });
                                input.placeholder = '请输入喵~';
                                dialog.add(div);
                                event.dialog = dialog;
                                event.input = input;
                                ('step 1');
                                var { dialog, input } = event;
                                var clickFun = () => {
                                    /* 移除dialog */
                                    dialog.remove();
                                    var value = input.value;
                                    event.text = input.value;
                                    game.resume();
                                };
                                if (event.isMine()) {
                                    dialog.open();
                                    game.pause();
                                    var button = ui.create.control('确定', () => {
                                        if (!input.value) {
                                            return alert('输入不能为空');
                                            input.value = '';
                                        }
                                        button.remove();
                                        clickFun();
                                    });
                                } else if (event.isOnline()) {
                                    input.value = '魔王可爱喵~';
                                    clickFun();
                                } else {
                                    input.value = '魔王可爱喵~';
                                    clickFun();
                                }
                                ('step 2');
                                if (event.text == '魔王可爱喵~') {
                                    player.say(event.text);
                                    player.gainMaxHp(trigger.num || 0);
                                } else {
                                    player.say(event.text);
                                    player.storage.white_tichun = false;
                                }
                            },
                        },
                        chuli_chuhai: {
                            enable: 'phaseUse',
                            usable: 1,
                            group: 'chuli_chuhai_restore',
                            subSkill: {
                                restore: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    filter(event, player) {
                                        for (var i of lib.character[player.name][3]) {
                                            if (Object.hasOwn(player.disabledSkills, i)) return true;
                                        }
                                        return false;
                                    },
                                    forced: true,
                                    async content(event, trigger, player) {
                                        var list = [],
                                            choiceList = [];
                                        if (player.maxHp < lib.character[player.name][2]) list.add('体力上限');
                                        if (player.storage.chuli_chuhai > 0) list.add('手牌上限');
                                        if (player.countDisabledSlot()) list.add('装备栏数');
                                        if (list.length) {
                                            const result = await player.chooseControl(list).set('prompt', '回复一项').forResult();
                                            switch (result.control) {
                                                case '体力上限':
                                                    player.maxHp = lib.character[player.name][2];
                                                case '手牌上限':
                                                    player.storage.chuli_chuhai = 0;
                                                case '装备栏数':
                                                    player.enableEquip(player.countDisabledSlot());
                                            }
                                        }
                                    },
                                },
                            },
                            init: (player) => (player.storage.chuli_chuhai = 0),
                            marktext: '除害',
                            markimage: 'image/card/handcard.png',
                            mark: true,
                            intro: {
                                content(storage, player) {
                                    return '手牌上限减' + (player.storage.chuli_chuhai || 0);
                                },
                            },
                            charlotte: true,
                            mod: {
                                maxHandcard(player, num) {
                                    return num - (player.storage.chuli_chuhai || 0);
                                },
                            },
                            async content(event, trigger, player) {
                                const result = await player
                                    .chooseButton(['令①体力上限②手牌上限③装备栏数中的任意项-1并移除等量个<彰名>记录', [['体力上限', '手牌上限', '装备栏'], 'tdnodes']], [0, 3])
                                    .set('ai', () => Math.random())
                                    .forResult();
                                if (result.bool) {
                                    var num = 0;
                                    if (result.links.includes('体力上限')) {
                                        num++;
                                        player.loseMaxHp();
                                    }
                                    if (result.links.includes('手牌上限')) {
                                        num++;
                                        player.storage.chuli_chuhai++;
                                    }
                                    if (result.links.includes('装备栏')) {
                                        num++;
                                        await player.chooseToDisable();
                                    }
                                    if (player.storage.chuli_zhangming_name) {
                                        const result1 = await player
                                            .chooseButton(['你可以移除至多' + num + '个<彰名>记录', [player.storage.chuli_zhangming_name, 'tdnodes']], [1, num])
                                            .set('ai', (button) => get.effect(_status.event.player, { name: button.link[2] }, _status.event.player, _status.event.player))
                                            .forResult();
                                        if (result1.bool) {
                                            for (var i of result1.links) {
                                                player.storage.chuli_zhangming_name.remove(i);
                                                game.log(player, '从彰名记录中移除了', '#y' + i + '的牌名字数记录');
                                                player.update();
                                            }
                                        }
                                    }
                                }
                            }, //QQQ
                            _priority: 30,
                        },
                        chuli_zhangming: {
                            trigger: {
                                player: 'useCard2',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var num = get.translation(trigger.card.name).length;
                                var list1 = lib.inpile.filter((i) => get.translation(i).length + 1 == num);
                                var list2 = lib.inpile.filter((i) => get.translation(i).length - 1 == num);
                                if (list1.length || list2.length) {
                                    player.chooseButton([get.prompt2('chuli_zhangming'), [list1.concat(list2), 'vcard']]).set('ai', () => Math.random());
                                } else event.finish();
                                ('step 1');
                                if (result.links?.length) {
                                    var name = result.links[0][2];
                                    if (!player.storage.chuli_zhangming_name) player.storage.chuli_zhangming_name = [];
                                    if (player.storage.chuli_zhangming_name.includes(get.translation(name).length)) {
                                        player.disableSkill('chuli_zhangming', 'chuli_zhangming');
                                        player.addTempSkill('chuli_zhangming_restore');
                                        game.log(player, '的', '#g【彰名】', '失效了');
                                    } else player.storage.chuli_zhangming_name.push(get.translation(name).length);
                                    player.addTempSkill('chuli_zhangming_name');
                                    player.markSkill('chuli_zhangming_name');
                                    game.log(player, '向彰名记录中添加了', '#y' + get.translation(name).length);
                                    var card = get.cardPile((card) => card.name == name);
                                    player.gain(card, 'gain2');
                                }
                            },
                            subSkill: {
                                name: {
                                    charlotte: true,
                                    forced: true,
                                    popup: false,
                                    intro: {
                                        content(storage, player) {
                                            var str = '已记录牌名字数:' + player.storage.chuli_zhangming_name;
                                            if (player.hasSkill('chuli_zhangming_restore')) str += '<br>此技能已失效';
                                            return str;
                                        },
                                    },
                                },
                                restore: {
                                    charlotte: true,
                                    forced: true,
                                    popup: false,
                                    onremove(player) {
                                        player.enableSkill('chuli_zhangming');
                                        game.log(player, '回复了技能');
                                    },
                                },
                            },
                        },
                    },
                    translate: {
                        tianwailaike: '异次元来访者',
                        yanhanliehun: '炎汉烈魂',
                        daweishanhe: '大魏山河',
                        jiangdonghucheng: '江东虎臣',
                        qunxiongzhulu: '群雄逐鹿',
                        ruorbaoruan: '弱保软',
                        chuli_sunshangxiang: '孙尚香',
                        chuli_xiahouba: '夏侯霸',
                        chuli_jiangcai: '将才',
                        chuli_liufeng: '刘封',
                        chuli_vva: '薇薇安',
                        chuli_zhugedan: '诸葛诞',
                        chuli_jiangwei: '姜维',
                        chuli_liuqi: '刘琦',
                        chuli_daqiao: '大乔',
                        chuli_caocao: '曹操',
                        chuli_liubei: '刘备',
                        chuli_daweiwuwang: '大魏吴王',
                        chuli_zhugeguo: '诸葛果',
                        chuli_sunquan: '孙权',
                        chuli_weiduo: '维多利亚',
                        chuli_furong: '傅肜',
                        chuli_simafu: '司马孚',
                        chuli_xushi: '徐氏',
                        chuli_yuankui: '袁隗',
                        chuli_sunhuan: '孙桓',
                        chuli_wangyi: '王异',
                        chuli_luojun: '骆俊',
                        chuli_zhangxianzhong: '张献忠',
                        chuli_tsdsj: '拉尼',
                        chuli_liuhai: '刘海',
                        chuli_mali: '玛丽',
                        chuli_lizicheng: '李自成',
                        chuli_sunce: '孙策',
                        chuli_guohuai: '郭淮',
                        chuli_qinmi: '秦宓',
                        chuli_zhaoyun: '赵云',
                        chuli_gaoda: '赵子龙',
                        chuli_suolaka: '索拉卡',
                        chuli_boersaifunie: '珀耳塞福涅',
                        chuli_xushao: '许劭',
                        chuli_laiyi: '莱伊',
                        chuli_re_boersaifunie: '魔王喵喵',
                        chuli_sunyi: '孙翊',
                        chuli_zhouchu: '周处',
                        chulixin_zhouchu: '弱保软·周处',
                        chulixin_zhouchu_prefix: '弱保软·',
                        chuli_fuzhu: '伏诛',
                        chuli_fuzhu_info: '<b>每回合每种类型限一次:</b> <br/>当你于回合内首次获得不少于<font color="FF0000">X</font>张同类型的牌时,本回合记录此类型为『诛』,而后你可选择一名其他角色并执行一项:  <li>①观看其手牌,每有一种与『诛』类型相同的牌,便对其造成一点伤害; <li>②观看其手牌,其依次弃置与『诛』类型相同的<font color="FF0000">X</font>张牌,而后你摸等量的牌. <br/>(<font color="FF0000">X为你的体力值</font>)',
                        chuli_jiaohao: '骄豪',
                        chuli_jiaohao_info: '<b>出牌阶段限一次:</b> <br/>你可弃置一张装备牌选择一名角色:<li>①令其回复一点体力;<li>②对其造成一点伤害',
                        chuli_xiaoji: '枭姬',
                        chuli_xiaoji_info: '当你使用装备 / 失去装备 / 体力变化时,各摸一张牌',
                        chuli_shoujun: '守郡',
                        chuli_shoujun_info: '<b>出牌阶段开始前 / 回合结束后:</b> <br/>你可用任意数量的手牌交换等量的『逆』',
                        chuli_duoquan: '夺权',
                        chuli_duoquan_info: '<b>觉醒技:</b><br/>当你造成或受到伤害后『罪』大于体力值,则你选择增加或减少一点体力上限,而后获得【绝对魔王】',
                        chuli_juedui: '绝对魔王',
                        chuli_juedui_info: '❶当你消耗『罪』时摸等量的牌,且可对一名角色造成一点伤害 ; <br/>❷出牌阶段限一次,你可弃置所有手牌令自己流失体力至濒死,若脱离濒死则获得三种类型牌各一张',
                        chuli_chengjie1: '惩戒',
                        chuli_chengjie1_info: '',
                        chuli_chengjie: '惩戒',
                        chuli_chengjie_info: '<b>回合结束时:</b> <br/>❶若你已受伤且『罪』不少于已损体力值,则你可以移除等同已损体力值的『罪』回复一点体力; <br/><b>当你濒死时:</b> <br/>❷你可移除等同体力上限的『罪』回复至当前体力上限的一半. <br/>(向下取整)',
                        chuli_mobing: '魔兵',
                        chuli_mobing_info: '<b>锁定技:</b> <br/>你的攻击距离为∞;当你造成伤害 / 受到伤害 / 流失体力时,获得等量的『罪』',
                        chuli_xiansi: '陷嗣',
                        chuli_xiansi_info: '<b>准备阶段:</b> <br/>❶你可将任意名其他角色的一张牌置于你的武将牌上称为『逆』,若因此法选择的角色数不小于你的体力上限,你失去一点体力摸两张牌;<br/> <b>其他角色的准备阶段:</b> <br/>❷若你的『逆』不小于一,且其体力值小于你,则随机将两张『逆』置入弃牌堆,而后你失去一点体力摸两张牌',
                        chuli_jianwu1: '剑舞',
                        chuli_jianwu1_info: '<b>锁定技:</b> <br/>你始终跳过摸牌阶段,并于出牌阶段开始时获得一张装备牌',
                        chuli_lianhuan: '连环',
                        chuli_lianhuan_info: '<b>锁定技:</b> <br/>❶你始终为横置状态; <br/>❷准备阶段,你令攻击范围内的其他角色进入横置状态; <br/>❸横置状态的角色互相计算距离为1,且摸牌阶段额定摸牌数+1,手牌上限+1',
                        chuli_manyan: '蔓焰',
                        chuli_manyan_info: '<b>锁定技:</b> <br/>❶其他角色造成伤害时你将此伤害改为火焰伤害; <br/>❷当一名角色受到以你为起点的火属性传导伤害时,此伤害+1; <br/>❸每当有角色受到火焰伤害时,若其已横置则你摸等同于伤害值的牌',
                        chuli_duanzhou: '断舟',
                        chuli_duanzhou_info: '每当其他角色受到属性伤害时,若其已横置,你可令其他角色重置武将牌而后你摸<font color="00FF4D">X</font>张牌. <br/>(<font color="00FF4D">X为本次重置武将数量</font>)',
                        chuli__lianhuan_g: '连环',
                        chuli__lianhuan_g_info: '',
                        chuli_rende: '仁德',
                        chuli_rende_info: '【此技能处于待重做状态】①出牌阶段,你可交给一名其他角色至少一张手牌称为<德>;当你以此法首次交出第二张牌后视为你使用一张不计入次数限制的基本牌;②当一名角色使用或打出<德>时你摸一张牌;当<德>被弃置后你可获得其中任意张,若获得的<德>数量大于一,你失去一点体力',
                        chuli_shengnu: '盛怒',
                        chuli_shengnu_info: '<b>觉醒技:</b> <br/>准备阶段开始时,若你为仅存本势力角色,则将体力上限调整为4并回复体力至上限,并将三张〖桃〗置于你的武将牌上称为『义』,而后你失去【仁德】获得【誓仇】与【桃义】',
                        chuli_shichou: '誓仇',
                        chuli_shichou_info: '<b>锁定技:</b> <br/>❶你始终跳过判定阶段与摸牌阶段; <br/>❷其他角色始终存在于你的攻击距离内; <br/>❸出牌阶段开始时,你获得三种类型牌各一张; <br/>❹每回合限三次,若你有『义』,且出牌阶段结束时未造成过伤害,则失去一点体力执行一个额外的出牌阶段; <br/>❺回合结束时,你受到<font color="FFE300">X</font>点伤害; <br/>❻当你死亡时,对其他角色各造成一点火焰伤害,并于本轮结束前令其所有技能失效. <br/>(<font color="FFE300">X为你的弃牌数与『义』的差值</font>)',
                        chuli_taoyi: '桃义',
                        chuli_taoyi_info: '<b>锁定技:</b> <br/>❶当你进入濒死状态时,你弃置一张『义』而后失去一点体力上限并将体力回复至上限;<br/>❷你的手牌上限与出杀次数+<font color="38FF00">X</font>;出牌阶段开始后,你摸<font color="38FF00">X</font>张牌.<br/>(<font color="38FF00">X为你失去『义』的数量</font>)',
                        chuli_qirang: '祈禳',
                        chuli_qirang_info: '<b>出牌阶段限一次:</b><br/>你可弃置两张基本牌而后获得锦囊牌装备牌各一张,以此法获得的牌在本回合内不能使用 / 打出 / 弃置',
                        chuli_yuhua: '羽化',
                        chuli_yuhua_info: '❶回合外你可将一张<font color="38FF00">装备牌</font> / <font color="FFE900">锦囊牌</font>视为<font color="38FF00">〖无懈可击〗</font> / <font color="FFE900">基本牌</font>使用或打出; <br/>❷每回合每项限一次,当你【羽化❶】转化牌后:<li>①<font color="38FF00">令一名角色选择回复一点体力或摸两张牌</font>;<li>②<font color="FFE900">对一名角色造成一点伤害</font>',
                        chuli_denxian: '登仙',
                        chuli_denxian_info: '<b>觉醒技:</b> <br/>❶游戏开始时你展示牌堆顶的一张牌并将<font color="FF00EA">X</font>定为其点数; <br/>❷每当你使用或打出实体基本牌或锦囊牌时,体力与体力上限+1; <br/>❸当你的体力上限大于<font color="FF00EA">X</font>时,你摸等量的牌,而后你可将体力上限改为1,且失去判定与摸牌阶段并获得【赋泽】; <br/>而后修改【祈禳】.<br/>(每种牌名限一次)',
                        chuli_zhiheng: '制衡',
                        chuli_zhiheng_info: '❶出牌阶段限1+<font color="38FF00">X</font>次,你可弃置任意张牌而后将手牌摸至手牌上限,若你弃置的牌数不少于手牌上限则改为摸等量的牌;<br/>❷你因【制衡】弃置牌中每有一种类型,你便获得一枚<font color="FF00EA">『虎』</font>.<br/>(<font color="38FF00">X为你的已损体力值</font> / <font color="FF00EA">『虎』至多三枚</font>)',
                        chuli_xiongju: '雄踞',
                        chuli_xiongju_info: '<b>锁定技:</b> <br/>❶你的手牌上限等于体力上限+<font color="FF00EA">『虎』</font>的数量; <br/>❷其他角色的回合开始时,若其的体力值 / 手牌数 / 装备区内的牌数均小于你,则你失去所有<font color="FF00EA">『虎』</font>并受到其造成的一点伤害,而后你获得每种类型牌各一张',
                        chuli_xiongju2: '雄踞',
                        chuli_xiongju2_info: '',
                        chuli_fuze: '赋泽',
                        chuli_fuze_info: '<b>锁定技:</b> <br/>❶回合开始前 / 结束后,你弃置全部基本牌并获得锦囊牌装备牌各一张,若此时手牌数仍不大于<font color="FF00EA">X</font>,你重复此流程; <br/>❷出牌阶段,你可将一张<font color="38FF00">装备牌</font> / <font color="FFE900">锦囊牌</font>视为<font color="38FF00">即时锦囊牌</font> / <font color="FFE900">基本牌</font>使用或打出. <br/>(每回合每种牌名限一次)',
                        chuli_taoyi2: '桃义',
                        chuli_taoyi2_info: '',
                        chuli_shehu: '蜀祸',
                        chuli_shehu_backup: '蜀祸',
                        chuli_shehu_info: '<b>每回合每项限一次,你可于出牌阶段发动以下效果:</b><br/> <li>①获得一点<font color="28FF00">护甲</font>;<br/> <li>②视为使用一张杀并令伤害+<font color="F7FF00">X</font>;<br/> <li>③摸两张牌;<br/> <b>回合结束时:</b><br/> 若你本回合造成伤害值小于已执行项,则你失去<font color="FF0000">Y</font>点体力.<br/> (<font color="28FF00">你的护甲上限为5</font> / <font color="F7FF00">X为你的护甲值</font> / <font color="FF0000">Y为已执行项与你伤害的差值</font>)',
                        chuli_juyuan: '拒援',
                        chuli_juyuan_info: '<b>其他角色的出牌阶段内:</b><br/> ❶每当其使用牌结算后,若有『逆』与此牌颜色相同,则其随机获得一张此颜色的『逆』,而后你摸一张牌;<br/>❷当其于本回合因【拒援❶】获得第二张牌后,你回复一点体力',
                        chuli_jianqi: '剑旗',
                        chuli_jianqi_info: '<b>锁定技:</b> <br/>❶你的攻击距离为负数; <br/>❷当你或攻击范围内的角色成为〖杀 / 锦囊牌〗的目标时,你可摸一张牌并交给其一张手牌,若交出的牌为装备牌其使用之;<br/>若其体力值小于你,则将此牌目标改为你',
                        chuli_dizhan: '帝斩',
                        chuli_dizhan_info: '<b>锁定技:</b> <br/>❶当你或攻击范围内角色成为其他角色使用的〖杀 / 锦囊牌〗的目标后此牌的使用者获得一枚<font color="CE00FF">『斩』</font>;  <br/>❷当一名角色的<font color="CE00FF">『斩』</font>大于其体力值时,移去其所有<font color="CE00FF">『斩』</font>并对其造成等量伤害,而后你摸等量的牌. <br/>(<font color="CE00FF">『斩』不大于其体力值</font>)',
                        chuli_dingzhan: '定战',
                        chuli_dingzhan_info: '<b>出牌阶段限一次:</b> <br/>你可令至多<font color="FF0000">X</font>名其他角色视为在你的攻击范围内直至你下次发动【定战】,而后你摸等量的牌.<br/>(<font color="FF0000">X为你的体力值</font>)',
                        chuli_duizhen: '对阵',
                        chuli_duizhen_info: '<b>出牌阶段限一次:</b> <br/>你可与一名其他角色进行拼点,若你赢则展示牌堆顶3+<font color="17FF00">X</font>张牌,而后你使用其中的牌,获得剩余的牌. <br/>(<font color="17FF00">X为你的已损体力值</font> / 因【对阵】使用的牌无距离次数限制)',
                        chuli_jieming: '竭命',
                        chuli_jieming_info: '<b>弃牌阶段结束时:</b> <br/>你可与一名其他角色进行拼点,若你赢则可失去一点体力并执行一项:<li>①在当前回合结束后执行一个额外的回合;<li>②令其跳过下一个回合; <br/>你的拼点牌亮出时,点数+<font color="17FF00">X</font>',
                        chuli_duanxing: '端行',
                        chuli_duanxing_info: '<b>锁定技:</b> <br/>当你使用或打出牌时,若此牌满足以下条件则你弃置一张牌:<br/>〖伤害标签牌 / 武器牌 / 酒〗; <br/>反之你摸一张牌',
                        chuli_aiwei: '哀魏',
                        chuli_aiwei_info: '<b>限定技:</b> <br/>其他角色的准备阶段,若其判定区内有牌,则你可废除武器栏并令其将判定区内的牌置入弃牌堆; <br/>而后你获得〖闪 / 桃 / 无懈可击〗各一张,且本局游戏内其他角色与你计算距离时+1',
                        chuli_quanlian: '劝敛',
                        chuli_quanlian_info: '<b>出牌阶段限一次:</b> <br/>你可令一名角色展示手牌并弃置其中的:<li>〖伤害标签牌 / 武器牌 / 酒〗,而后其摸等量的牌; <br/>若弃置牌中有〖酒〗,其额外摸两张牌;<br/>若其未因此弃置牌,则你与其各摸两张牌',
                        chuli_wengua: '问卦',
                        chuli_wengua_info: '<b>出牌阶段限一次:</b> <br/>你可亮出牌堆顶与底各一张牌: <li>①若类型相同,则你可失去一点体力并从牌堆或弃牌堆中选择获得两张不同名的同类型牌; <li>②若类型不同,你获得展示牌',
                        chuli_quansheng: '权盛',
                        chuli_quansheng_info: '<b>每回合限一次:</b> <br/>❶若你于出牌阶段使用〖杀 / 普通锦囊牌〗指定唯一目标后,你可令此牌额外结算一次; <br/>❷其他角色于其出牌阶段内使用〖杀 / 普通锦囊牌〗指定你攻击范围内的角色为唯一目标时,你可弃置一张牌将此牌目标改为你攻击范围内不为二者的一名其他角色',
                        chuli_charuo: '茬弱',
                        chuli_charuo_info: '<b>锁定技:</b><br/> ❶其他角色的摸牌阶段结束时,你将手牌数定为<font color="04FF00">X</font>并摸两张牌; <br/>❷其他角色的弃牌阶段结束后,你弃置一张牌; <br/>❸其他角色的回合结束时,你依次执行以下效果:<br/><li>①若<font color="04FF00">X</font>存在且你的手牌数不大于<font color="04FF00">X</font>,则你对其造成一点伤害;<li>②重置<font color="04FF00">X</font>',
                        chuli_zhuwu: '筑坞',
                        chuli_zhuwu_info: '<b>准备阶段:</b> <br/>若你的手牌数小于体力上限则将手牌数摸至体力上限,否则你随机获得一张装备牌',
                        chuli_jiee: '截扼',
                        chuli_jiee_info: '<b>❶出牌阶段:</b> <br/>你可失去一点体力而后执行一项: <li>①获得一名其他角色的一张牌而后你摸一张牌; <li>②视为使用一张无视防具且不可被响应的〖杀〗; <br/><b>❷其他角色的回合内:</b> <br/>若其获得牌或其牌被其他角色获得时,你可失去一点体力将【截扼❶】中的目标改为其并执行一项',
                        chuli_xionglve: '雄略',
                        chuli_xionglve_info: '<b>回合结束时:</b> <br/>你可令至多<font color="00FF57">Y</font>名角色摸 / 弃一张牌,或令一名角色摸 / 弃<font color="00FF57">Y</font>张牌.<br/>(<font color="00FF57">Y为本回合【权谋】发动次数</font>)',
                        chuli_bozheng: '博政',
                        chuli_bozheng_info: '<b>锁定技:</b> <br/>当你获得或因弃置而失去牌后,若你本局游戏内获得与弃置而失去牌的总数:<li>为3的倍数:你摸一张牌并弃置一张牌;<li>为5的倍数,你弃置一名其他角色的区域内各一张牌;<li>为8的倍数,你选择一名角色,令其选择回复一点体力或摸两张牌',
                        chuli_chanxu: '产恤',
                        chuli_chanxu_info: '<b>准备阶段:</b><br/>你可获得一张点数大于<font color="F6FF00">X</font>的牌并将此牌点数定为<font color="F6FF00">X</font>;<br/>若<font color="F6FF00">X</font>不小于13,则你重置<font color="F6FF00">X</font>.<br/>(<font color="F6FF00">X初始为0</font>)',
                        chuli_jiuqi: '九奇',
                        chuli_jiuqi_info: '<b>限定技:</b> <br/>❶当你首次脱离濒死后,你可选择记录9种牌名称为『九奇』; <br/>❷当有角色使用或打出与『九奇』记录牌名相同的牌时,你可令其摸一张牌或弃置其一张牌,而后移除该记录',
                        chuli_hudong: '互动',
                        chuli_hudong_info: '游戏开始时,若场上有【杰克】,你与其互动',
                        yingbian_Angel: '秘计',
                        yingbian_Angel_info: '<b>回合结束时:</b> <br/>❶你可依次选择令①体力值 / ②手牌数 / ③防御距离或进攻距离+1或-1; <br/>❷若你因此技能减少体力,则后续选项数值额外+<font color="00FF57">X</font>或-<font color="00FF57">X</font>并复原此数值. <br/>(<font color="00FF57">X为你已损体力值</font>)',
                        Angel_gksm: '权谋',
                        Angel_gksm_info: '❶出牌阶段,你可弃置区域内每种类型牌各一次,而后摸等量的牌; <br/>❷每回合限一次,若你于本回合内因【权谋❶】失去过三种类型牌且此时你的区域内仍有三种类型牌; <br/>则你可将区域内所有牌弃置并选择一种类型作为<font color="FFEF00">X</font>并获得等量非<font color="FFEF00">X</font>类型的牌',
                        tunjiang_Angel: '屯江',
                        tunjiang_Angel_info: '❶你的手牌上限额外+Y;<br/> ❷若你于本回合未造成伤害,则回合结束时你摸<font color="04FF00">Y</font>张牌并将手牌数记录为<font color="F6FF00">A</font>; <br/>若下个回合开始时你的手牌数仍为<font color="F6FF00">A</font>,则你可弃置任意张牌并对等量角色造成一点伤害.<br/>(<font color="04FF00">Y为场上势力数</font>)',
                        wenji_angel: '问计',
                        wenji_angel_info: '<b>准备阶段:</b> <br/>你可令一名其他角色交给你一张牌,若此牌为:<li>①基本牌:视为你使用一张任意基本牌,本回合内使用此类型无次数限制;<li>②锦囊牌:视为你使用一张任意锦囊牌,本回合内使用此类型不可被响应;<li>③装备牌:你选择获得<font color="00FFBE">X</font>枚〖武器 / 防具〗的技能效果于你的下个回合开始失去.<br/>(<font color="00FFBE">X为你的体力值</font>)',
                        gongao_Angel: '功獒',
                        gongao_Angel_info: '<b>锁定技:</b> <br/>游戏开始时你将<font color="FFDF00">X</font>值定为当前体力上限; <br/>当有角色濒死或死亡时,你可选择一项:<li>①体力上限+1;<li>②摸牌阶段额定摸牌数+1;<li>③手牌上限+1.<br/>(<font color="FFDF00">每局游戏每项至多选X次,若无可用选项则此技能失效</font>)',
                        juyi_Angel: '举义',
                        juyi_Angel_info: '<b>觉醒技:</b> <br/>准备阶段若【功獒】已失效或场上角色数不大于<font color="FFDF00">X</font>时,你获得【威重】与【嫌隙】并对同势力的其他角色各造成一点伤害',
                        weizhong_Angel: '威重',
                        weizhong_Angel_info: '<b>锁定技:</b><br/>体力小于你的角色无法抵消你使用的牌;<br/>体力上限小于你的角色受到你造成伤害+1',
                        xianxi_Angel: '嫌隙',
                        xianxi_Angel_info: '<b>锁定技:</b> <br/>每当你摸牌阶段获得牌数大于<font color="00FF11">Y</font>时,你弃置<font color="00FF11">Y</font>张牌并对其他角色各造成一点伤害; <br/>每当有角色因此濒死时,你失去一点体力或体力上限. <br/>(<font color="00FF11">Y为场上存活的其他角色数</font>)',
                        chuli_chenyin: '沉银',
                        chuli_chenyin_info: '<b>锁定技:</b> <br/>❶出牌阶段结束时你可将<font color="00D9FF">A</font>张牌置于武将牌上称为『银』; <br/>❷拥有『银』的其他角色回合结束时须将<font color="F7FF00">X</font>张手牌置入『银』,而后将<银>交给下家; <br/>❸回合开始时若你有『银』,你移除之并摸等量的牌. <br/>(<font color="00D9FF">A为你的已损体力值</font> / <font color="F7FF00">X为你的护甲值</font>)',
                        chuli_yanxiao: '言笑',
                        chuli_yanxiao_info: '<b>每回合限一次:</b> <br/>一名角色使用〖决斗〗后:其造成伤害,你可与其各摸两张牌; <br/>其受到伤害,你可将一张手牌当作〖乐不思蜀〗对伤害来源使用',
                        chuli_guose: '国色',
                        chuli_guose_info: '<b>出牌阶段限一次:</b> <br/>你可令一名角色将手牌摸至体力上限,而后视为其使用一张〖决斗〗',
                        chuli_peifang: '配方',
                        chuli_peifang_info: '❶出牌阶段每种类型牌限一次;<br/>你可将一张牌置于武将牌上称为<font color="00FFEE">『配方』</font>; <br/>❷每当你补齐<font color="00FFEE">『配方』</font>时,可选择获得一张牌. <br/>(<font color="00FFEE">每种类型的『配方』限一枚</font>)',
                        chuli_qianzhuo: '浅酌',
                        chuli_qianzhuo_info: '❶每回合开始时你可令【浅酌】目标为自己; <br/>❷每当一名角色使用或打出牌时,若你拥有对应类型<font color="00FFEE">『配方』</font>则可执行对应项并移除之:<li>基本牌:其摸两张牌;<li>锦囊牌:你选择一名角色对其造成一点伤害;<li>装备牌:其下张牌无法被抵消',
                        qimou_chuli: '奇谋',
                        qimou_chuli_info: '<b>其他角色的出牌阶段开始时:</b> <br/>❶若其与你均在彼此攻击范围内且其①体力值 / ②手牌数大于你,则你可令其:<li>①受到1点伤害且本回合使用的第一张牌无效;<li>②将手牌弃至与你相同而后你摸等量的牌并交给其等同其手牌数的牌; <br/>❷若其①体力值 / ②手牌数均不大于你,你可发动【秘计】; <br/>❸若【奇谋①/②】均执行,则你移动场上一张牌,并令获得此牌的其他角色于其回合结束前视你在其攻击范围内',
                        chuli_xichan: '戏蟾',
                        chuli_xichan_info: '<b>摸牌阶段结束时:</b> <br/>你可将<font color="38FF00">A</font>张花色不同的牌交给一名其他角色并令其将手牌弃至与你相同,而后你摸等量的牌并可交给其<font color="38FF00">A</font>张牌',
                        chuli_sancai: '散财',
                        chuli_sancai_info: '❶出牌阶段每种类型的牌限一次,你可将任意张同类型牌交给一名本回合未以此法获得牌的其他角色;<br/>❷若此时其手牌数不为最少,则你本回合手牌上限+1且获得不为此类型的两张牌',
                        chuli_jihai: '济海',
                        chuli_jihai_info: '转换技,当你需要使用或打出牌时,你可弃置①一张②两张③三张牌视为使用或打出;若此牌为使用则你可选择一名角色为额外目标.(每回合每种牌名限一次,每当你执行所有选项后颠倒选项顺序)',
                        chuli_xinjihai: '济海',
                        chuli_xinjihai_info: '❶当你需要使用或打出牌时,你可弃置<font color="009AFF">X</font>张牌视为使用或打出并令<font color="009AFF">X</font>+1,且于当前回合结束时重置<font color="009AFF">X</font>;<br/>❷因【济海❶】使用的牌可指定一名其他角色为额外目标. <br/>(<font color="009AFF">X初始为1</font> / 每回合每种牌名限一次)',
                        liuli_chuli: '流离',
                        liuli_chuli_info: '<b>每回合限一次:</b> <br/>当你被〖杀〗指定为目标时,你可弃置一张牌令一名其他角色视为对此〖杀〗来源使用一张〖决斗〗,若其造成伤害则此〖杀〗对你无效',
                        beifa_chuli: '北伐',
                        beifa_chuli_info: '<b>锁定技:</b> <br/>当你使用牌指定角色或被其他角色指定时,若其或你为唯一目标,则你获得一枚<font color="17FF00">『伐』</font>. <br/>(<font color="17FF00">『伐』的数量至多等同你的体力上限</font>)',
                        mingzuo_chuli: '天任',
                        mingzuo_chuli_info: '❶当你需要使用或打出牌时,你可声明其牌名并展示牌堆顶<font color="17FF00">X</font>张牌而后失去等量的<font color="17FF00">『伐』</font>; <br/>❷若其中有同名牌则你使用或打出并将剩余牌置于牌堆底而后获得等量<font color="17FF00">『伐』</font>; <br/>否则本回合【天任】失效且你可失去一点体力获得展示牌. <br/>(<font color="17FF00">X为『伐』的数量</font> )',
                        moubian_chuli: '谋变',
                        moubian_chuli_info: '<b>锁定技:</b> <br/>每回合限一次,当你一次性失去不少于体力上限的<font color="17FF00">『伐』</font>时,你记录当前:<li>手牌数 / 体力值 / 手牌上限;<br/>而后令其中一项数值等同体力上限,于回合结束时将状态调整至与记录相同并移除记录',
                        pingxiang_chuli: '平襄',
                        pingxiang_chuli_info: '<b>锁定技:</b> <br/>当你使用或打出牌时,你记录其牌名,当记录数量不少于你的体力上限时,你增加一点体力上限并移除所有记录.<br/>(每种牌名仅记录一次)',
                        fanfu_chuli: '反复',
                        fanfu_chuli_info: '<b>转换技:</b> <br/>出牌阶段限一次,你可将手牌: <br/><li>阳:摸至全场最多,于回合结束时执行另一项; <br/><li>阴:弃置全场最少,于回合结束时执行另一项',
                        weixiang_chuli: '伪降',
                        weixiang_chuli_info: '<b>觉醒技:</b> <br/>当你进入濒死状态时增加一点体力上限并将体力调整至体力上限,而后与一名其他角色进行随机拼点: <br/><li>若你赢则获得【反复】. <br/><li>反之你获得【沉银】',
                        duanzou_chuli: '断奏',
                        duanzou_chuli_info: '每回合每种类型牌限一次,当你使用或打出牌时,记录之;若你的下一张与其类型相同,你摸X张牌(X为记录与此牌二者点数之差);否则你摸一张牌并重新记录',
                        xinduanzou_chuli: '断奏',
                        xinduanzou_chuli_info: '<b>锁定技:</b> <br/>❶当你因使用而失去区域内的牌后,将其置于武将牌上称为<font color="00FFEE">『奏』</font>; <br/>❷若下一张置入牌与其类型相同,则你摸<font color="00FFEE">X</font>张牌,而后你选择一项:<li>①失去一点体力;<li>②弃置两张牌;<li>③本回合此技能失效; <br/>❸若不同,则弃置至<font color="00FFEE">『奏』</font>中上一种类型牌并摸等量的牌. <br/>(<font color="00FFEE">『奏』至多两枚</font> / <font color="00FFEE">X为『奏』的数量</font> / 每回合每项限一次)',
                        xingge_chuli: '星歌',
                        xingge_chuli_info: '<b>觉醒技:</b> <br/>若你于一回合的出牌阶段内获得过不少于6张牌,则结束阶段你可失去任意体力上限令<font color="00FFEE">『奏』</font>的上限+此数值*2;而后你获得【合音】',
                        heyin_chuli: '合音',
                        heyin_chuli_info: '<b>当你受到伤害后:</b> <br/>若『奏』的数量不少于2,则你可弃置之而后摸<font color="FF0000">A</font>张牌并弃<font color="005FFF">B</font>张牌.(<font color="FF0000">搞A为最大与最小牌点数之差</font> / <font color="005FFF">B为其中最小的点数</font>)',
                        jinbian_Angel_xin: '晋变',
                        jinbian_Angel_xin_info: '<b>游戏开始时:</b> <br/>❶你展示已开启扩展中的全部势力,并从中选择四种为其各分配一种花色; <br/>❷你的回合开始时,展示牌堆顶的一张牌并获得,若此花色已记录则重复之; <br/>否则展示该花色对应花色势力的三张武将牌并从中选择一张获得其随机一项技能; <br/>❸若你四种花色均有对应武将牌,则获得已记录武将牌上的全部技能,而后【晋变】与【动荡】失效',
                        dongdang_Angel: '动荡',
                        dongdang_Angel_info: '<b>锁定技:</b> <br/>当一名角色死亡时,若场上无与其势力相同角色且【晋变】未失效,则你选择一项:<li>①失去三点体力上限仅清除武将牌记录;<li>②清除已获得技能与武将牌记录',
                        zhibi_chuli: '知彼',
                        zhibi_chuli_info: '当一名其他角色于你的回合内成为你的目标两次时;<br/>当一名其他角色于其的回合内令你受到伤害两次后;<br/>你可令其本回合无法使用或打出一种类型牌',
                        baobian_chuli: '豹变',
                        baobian_chuli_info: '❶每当你造成伤害后升级【豹变❶】,令下一张牌:<li>①可当做任意基本牌;<li>②不计入次数限制;<li>③基础数值+1;<li>④不可响应并重置【豹变❶】; <br/>❷每当你受到伤害后升级【豹变❷】,令下一次受伤: <br/><li>①摸两张牌,你可将任意张牌分配给任意角色;<li>②获得伤害来源一张牌;<li>③对伤害来源造成一点伤害;<li>④获得造成伤害牌并重置【豹变❷】',
                        zicheng_chuli: '自成',
                        zicheng_chuli_info: '<b>当你执行以下事件时:</b><br/> <li>①摸牌阶段开始前,你可令摸牌数减少至多<font color="00FF71">X</font>张;<br/> <li>②回复体力时,你可令回复至减少至多<font color="00FF71">X</font>点;<br/> <li>③受到伤害时,你可令伤害值增加至多<font color="00FF71">X</font>点;<br/> <li>④弃牌阶段结束时,你可额外弃置至多<font color="00FF71">X</font>张.<br/> <b>若你执行,则获得对应增益,且该项失效至其执行后:</b><br/> <li>①摸牌阶段额外摸<font color="00FF71">X</font>+<font color="FFC800">Y</font>张牌;<br/> <li>②回复体力时额外回复<font color="00FF71">X</font>+<font color="FFC800">Y</font>点,溢出值转为等量牌;<br/> <li>③受到伤害值减少<font color="00FF71">X</font>+<font color="FFC800">Y</font>,剩余值转为等量牌;<br/> <li>④弃牌阶段结束后手牌上限增加<font color="00FF71">X</font>+<font color="FFC800">Y</font>,而后将手牌补至手牌上限. <br/>(<font color="00FF71">X为该事件中的数值</font>  /  <font color="FFC800">Y为你已失效项的数量</font>)',
                        zhuchang_chuli: '铸昌',
                        zhuchang_chuli_info: '<b>回合结束时:</b> <br/>你可弃置任意张牌,若其中包含:<br/><li> ①装备区内全部牌:摸因【铸昌】弃置牌数的牌 ;<br/> <li>②两种颜色:移动场上一张牌; <br/><li>③三种类型:回复一点体力; <br/><li>④四种花色:对一名角色造成一点伤害',
                        chuli_sb_xinguoyin: '果饮',
                        chuli_sb_xinguoyin_info: '❶每当你失去<font color="00FFEE">『配方』</font>时,获得一枚<font color="00FF9F">『醺』</font>;<br/> 当你失去所有<font color="00FFEE">『配方』</font>后,你可弃置所有<font color="00FF9F">『醺』</font>令本回合角色获得等量同类型的牌; <br/>❷若你因【果饮❶】失去的<font color="00FF9F">『醺』</font>为三种类型,则你选择一项:<li>①弃置三种类型牌补齐<font color="00FFEE">『配方』</font>;<li>②获得每种类型牌各一张.<br/>(若无可用项则此技能本回合失效)',
                        yingba_chuli: '英霸',
                        yingba_chuli_info: '❶你的手牌上限为<font color="FF0000">X</font>; <br/>❷每回合限<font color="FF0000">X</font>次,你可弃置<font color="FFED00">Y</font>张牌依次视为使用: <li>〖①酒 / ②杀 / ③决斗〗; <br/>其中每有一张红色牌,你便摸一张牌; <br/>其中每有一张黑色牌,你便弃置目标一张牌. <br/>(<font color="FF0000">X为你的已损体力值</font> / <font color="FFED00">Y为1+本回合【英霸】发动次数</font> / 因【英霸❷】使用的牌不计入次数限制)',
                        shengjiang_chuli: '盛江',
                        shengjiang_chuli_info: '<b>锁定技:</b> <br/>❶每当你脱离濒死后,将手牌补至体力上限;<br/>❷每当你造成大于一点的伤害后,摸等同已损体力值的牌; <br/>❸每当你令一名角色进入濒死时,若其脱离濒死,你获得其所有牌',
                        fanglve_chuli: '方略',
                        fanglve_chuli_info: '<b>出牌阶段,你可选择一项:</b> <li>①将至多<font color="FF0000">X</font>张手牌置于一名角色的武将牌上称为『策』,若其中包含三种类型你将手牌摸至体力上限; <li>②观看一名角色的手牌并展示牌堆顶等量的牌,你可任意交换二者,而后你可将牌堆顶或其手牌中的同名牌置于其武将牌上称为『策』. <br/>(<font color="FF0000">X为其体力值</font> / 每回合每项限一次)',
                        jingce_chuli: '精策',
                        jingce_chuli_info: '<b>当有『策』的角色使用或打出牌后:</b> <br/>❶移除与之类型相同的『策』,你可选择一项: <li>①获得一张同类型牌; <li>②摸等量的牌; <br/>❷移除与之同名的『策』,你可选择一项: <li>①对其造成一点伤害; <li>②摸等量的牌; <br/>❸当其于回合内失去所有『策』时,你受到其造成的一点伤害并弃置其区域内各一张牌; <br/>其回合结束时移除所有『策』,你回复一点体力若为满血则摸等量的牌',
                        chuli_lici: '巧辩',
                        chuli_lici_info: '<b>锁定技:</b><br/>其他角色的回合结束时:<br/>若其手牌数<font color="FFAA00">大于</font> / <font color="FF0000">小于</font>你,则<font color="FFAA00">你获得其</font> / <font color="FF0000">其获得你</font>一张牌;<br/>若此时二者手牌数相等,你摸一张牌',
                        chuli_qiaobian: '利辞',
                        chuli_qiaobian_info: '<b>其他角色的出牌阶段开始时:</b>  <br/>你可与其各选择至多三张牌而后交换,若你因此获得牌数少于交出牌数,则你可:<li>①对其造成<font color="22FF00">X</font>点伤害; <li>②令一名角色于本回合获得<font color="22FF00">X</font>点护甲.<br/>(<font color="22FF00">X为你交出牌与获得牌数之差)</font>',
                        xianpo_chuli: '显魄',
                        xianpo_chuli_info: '<b>锁定技:</b> <br/>每回合限<font color="22FF00">X</font>次,当你需使用或打出基本牌或即时锦囊牌时,若其牌名未记录则你记录之并视为使用或打出此牌; <br/>而后你增加一点体力上限并将手牌补至体力上限. <br/>(<font color="22FF00">X为每回合开始时你的体力上限</font> / 因【显魄】使用的牌不记入次数限制)',
                        xianjue_chuli: '陷绝',
                        xianjue_chuli_info: '<b>锁定技:</b> <br/>每当你脱离濒死后,你将体力上限调整为1,而后摸等同记录数的牌并复原【显魄】记录',
                        xin_xianpo_chuli: '显魄',
                        xin_xianpo_chuli_info: '当你需要使用或打出牌时,你可:<br/><font color="01FF00">废除</font> / <font color="FFC000">回复</font>一种装备栏,而后<font color="01FF00">增加</font> / <font color="FFC000">减少</font>一点体力上限;<br/>视为使用或打出对应<font color="01FF00">基本牌</font> / <font color="FFC000">锦囊牌</font>',
                        xin_kunjue_chuli: '困绝',
                        xin_kunjue_chuli_info: '<b>锁定技:</b> <br/>❶你始终跳过摸牌阶段且受到自己为来源的伤害时取消之;<br/>❷每局游戏限一次,当你进入濒死状态后,若未脱离濒死状态,则弃置场上一张武器牌回复至一体力;<br/>❸每当你的体力上限 / 装备栏变化时,你摸一张牌且本回合手牌上限+1',
                        chuli_xingyun: '星陨',
                        chuli_xingyun_info: '<b>锁定技:</b> <br/>❶当你对其他角色造成伤害时,若其的<font color="F7FF00">『星』</font>不大于其体力值,则令其获得等同伤害值的<font color="F7FF00">『星』</font>并取消伤害; <br/>当你受到伤害时,你选择移除一名角色所有的<font color="F7FF00">『星』</font>并抵消伤害; <br/>❷当有角色获得<font color="F7FF00">『星』</font>时,你令一名角色回复一点体力或摸一张牌;<br/>当有角色被移除<font color="F7FF00">『星』</font>时,其失去等量体力,你摸等量的牌',
                        chuli_jueze: '抉择',
                        chuli_jueze_info: '<b>出牌阶段开始时:</b> 你选择一项:<li>生:你选择至多A名其他角色,令其回复一点体力值,而后你受到等量伤害;<li>死:你选择至多<span style="opacity:0.5;">B</span>名其他角色,令其受到一点伤害,而后其于自身回合结束前无法打出或使用锦囊牌,其在弃牌阶段每弃置一张锦囊牌你便获得一张锦囊牌. <br/>(A为你的体力值 / <span style="opacity:0.5;">B为你的已损体力值</span>)',
                        wanshen_chuli: '万神',
                        wanshen_chuli_info: '❶游戏开始时,你展示五张武将牌并从中选择获得两项技能称为『殿』;<br/>❷出牌阶段限一次,你可将X定为当前『殿』的数量,而后弃置任意『殿』获得等量『殿』,若你因【万神❷】弃置所有『殿』,则额外获得一项『殿』',
                        funie_chuli: '福涅',
                        funie_chuli_info: '❶你因【万神❷/福涅❷】失去『殿』后,摸等量的牌;<br/>❷回合结束时,若『殿』大于X,你可失去一点体力上限令X+1,否则将『殿』调整至X',
                        yaping_chuli: '雅评',
                        yaping_chuli_info: '<b>每回合开始时:</b> <br/>你可展示<font color="00FFA2">X</font>张与当前回合角色势力相同的武将牌,而后选择一项: <li>①弃置其的<font color="00FFA2">『客』</font>并从中选择获得一项技能称为『邀』,若已拥有该势力『邀』则移除之并摸一张牌;  <li>②弃置与之势力相同角色的<font color="00FFA2">『客』</font>,而后获得一张武将牌上的所有技能,若如此做,该势力角色无法再获得<font color="00FFA2">『客』</font>.<br/>(<font color="00FFA2">X为『客』的数量</font>)',
                        yaofu_chuli: '邀赴',
                        yaofu_chuli_info: '❶游戏开始时,你令所有角色获得<font color="00FFA2">『客』</font>; <br/>❷每轮结束时,你移除所有『邀』并令没有<font color="00FFA2">『客』</font>的角色获得<font color="00FFA2">『客』</font>',
                        kuanglei_chuli: '擎擂',
                        kuanglei_chuli_info: '❶出牌阶段,你可弃置<font color="FFCE00">X</font>张牌令下一张牌: <li>①无距离限制; <li>②无次数限制; <li>③无法被响应; <br/>❷每当你使用或打出牌后,获得一枚<font color="00FFAB">『咚』</font>; <br/>每回合结束后,你移除所有<font color="00FFAB">『咚』</font>,若失去<font color="00FFAB">『咚』</font>不少于场上角色数,你执行一个称为『雷云』的额外回合并于其中令【擎擂】失效; <br/>否则你摸等量的牌. <br/>(<font color="FFCE00">X为本回合【擎擂❶】发动次数</font> / <font color="00FFAB">『咚』不大于场上角色数</font>)',
                        fuming_chuli: '鸣霄',
                        fuming_chuli_info: '❶你于『雷云』开始时将手牌数摸至唯一最多; <br/>❷当你指定一名上回合已指定本回合未指定的角色为目标时,对其造成一点雷电伤害; <br/>若其装备区不为空,则对其相邻的角色各造成一点雷电伤害而后弃置其各一张牌',
                        re_wanshen_chuli: '缝合',
                        re_wanshen_chuli_info: '出牌阶段限一次,你可将任意『灵感』置入『废案』中,而后选择一项: <li>①将『灵感』补至X; <li>②从『废案』中选择获得技能至X',
                        zhongye_chuli: '灵感',
                        zhongye_chuli_info: '❶游戏开始时,你展示五张武将牌,而后失去任意体力上限从中选择获得等量技能,并将此技能数记录为X; <br/>❷你的武将牌上非自身技能均称为『灵感』; <br/>❸每当你的『废案』发生变化时,你摸等量的牌',
                        white_gqliangyi: '寡言',
                        white_gqliangyi_info: '魔王喵不爱说话喵',
                        white_tichun: '谦虚',
                        white_tichun_info: '魔王喵很谦虚喵',
                        chuli_fuhai: '覆海',
                        chuli_fuhai_info: '❶出牌阶段限一次,你可展示牌堆<font color="FB00FF">顶</font> / <font color="FF0000">底</font>各X张牌,并从中使用一张且令一名角色<font color="FB00FF">摸</font> / <font color="FF0000">弃</font>X张牌,而后你<font color="FB00FF">失去</font> / <font color="FF0000">回复</font>一点体力; <br/>❷若牌堆<font color="FB00FF">顶</font> / <font color="FF0000">底</font>X张牌颜色相同且二者颜色互不同则重置【覆海❶】的发动次数. <br/>(X为你的<font color="FB00FF">体力值</font> / <font color="FF0000">已损体力值</font>)',
                        duanliu_chuli: '断流',
                        duanliu_chuli_info: '回合开始时,你可以失去一点体力,观看牌堆顶与牌堆底各Y张牌,而后你可任意交换二者.<br/>(Y为你的体力上限)',
                        zhanhuo_chuli: '斩祸',
                        zhanhuo_chuli_info: '❶你<font color="F3FF00">对其他角色造成</font> / <font color="92FF00">受到其他角色造成</font>的伤害后,可弃置自身与其区域内一种类型牌; <br/>❷因【斩祸❶】弃置牌数最多的一方回复一点体力并对另一方造成一点伤害',
                        zhaozhang_chuli: '昭彰',
                        zhaozhang_chuli_info: '❶出牌阶段开始时,你可令【昭彰❷】中的『<font color="F3FF00">-1</font>/<font color="92FF00">+1</font>』互换;<br/> ❷每回合限一次,每当你使用牌后可展示手牌并将X定为当前字数之和,若此时X与上个X相比有所<font color="F3FF00">增加</font> / <font color="92FF00">减少</font>,则你选择获得一张牌名字数为此牌字数<font color="F3FF00">-1</font> / <font color="92FF00">+1</font>的牌;<br/>若该X为本回合首次展示,则重置【昭彰❷】的使用次数',
                        chuli_chuhai: '除害',
                        chuli_chuhai_info: '出牌阶段限一次,你可令①体力上限②手牌上限③装备栏数中的任意项-1并移除等量个<彰名>记录.回合结束时,若你的武将牌上有技能失效,你可回复一项',
                        chuli_zhangming: '彰名',
                        chuli_zhangming_info: '当你使用牌后,你可以获得一张牌名字数差为1的牌并记录至回合结束;若<彰名>记录中有同字数牌,则本回合此技能失效',
                    },
                };
                lib.config.all.characters.add('魔王');
                lib.config.characters.add('魔王');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:魔王/image/${i}.jpg`)
                }
                lib.translate['魔王_character_config'] = `魔王`;
                return QQQ;
            });
        },
        config: {
            mowang_gengxin: {
                name: '扩展版本:无',
                init: '1',
                intro: '点击查看此版本的更新内容',
                item: {
                    1: '<font color=green>更新内容</font>',
                    2: '<br>很遗憾的宣告大家,魔王正式解体',
                },
            },
            about2: {
                name: '<img style=width:238px src=extension/魔王/image/title.jpg>',
                init: '1',
                intro: '¿',
                item: {
                    1: ' ',
                },
            },
            blank1: {
                name: ' ',
                init: '1',
                intro: '¿',
                item: {
                    1: ' ',
                },
            },
            blank2: {
                name: ' ',
                init: '1',
                intro: '',
                item: {
                    1: ' ',
                },
            },
        },
        package: {
            intro: "于10月10日正式解体<br/><img style=width:238px src=extension/魔王/image/qq.jpg><br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
            author: '废柴魔王',
            version: '无',
        },
    };
});
