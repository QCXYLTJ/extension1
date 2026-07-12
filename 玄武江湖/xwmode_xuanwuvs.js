import { lib, game, ui, get, ai, _status } from '../../noname.js';
const modexwvs = {
    name: 'xuanwuvs',
    startBefore() {
        lib.translate['zhu'] = '主';
        lib.translate['zhong'] = '忠';
        lib.translate['fan'] = '反';
        lib.translate['nei'] = '内';
        lib.translate['zhu2'] = '盟主';
        lib.translate['zhong2'] = '侠士';
        lib.translate['fan2'] = '逆贼';
        lib.translate['nei2'] = '细作';
        for (var m in lib.xwjh_modexwvs.element.content) {
            lib.element.content[m] = lib.xwjh_modexwvs.element.content[m];
        }
    },
    start() {
        'step 0'
        _status.xuanwuvsmode = true;
        game.prepareArena(4);
        'step 1'
        var side = Math.random() < 0.5;
        _status.xwvsZhong = [];
        _status.xwvsFan = [];
        for (var cur of game.players) {
            cur.side = side;
            cur.identity = side ? 'zhong' : 'fan';
            cur.setIdentity(side ? 'zhong' : 'fan');
            cur.getId();
            if (side) {
                _status.xwvsZhong.push(cur);
                if (_status.xwvsZhong.length == 2) {
                    side = !side;
                }
            } else {
                _status.xwvsFan.push(cur);
                if (_status.xwvsFan.length == 2) {
                    side = !side;
                }
            }
        }
        //_status.xwvsZhong.sortBySeat();
        _status.firstAct = _status.xwvsZhong[1];
        _status.xwvsZhong[1].xwFriend = _status.xwvsZhong[0];
        _status.xwvsZhong[0].xwFriend = _status.xwvsZhong[1];
        _status.xwvsFan[1].xwFriend = _status.xwvsFan[0];
        _status.xwvsFan[0].xwFriend = _status.xwvsFan[1];
        if (lib.config.xwvs_control_friend) {
            game.me.xwFriend._trueMe = game.me;
            game.addGlobalSkill('autoswap');
        }
        'step 2'
        game.chooseCharacter();
        'step 3'
        var jiban = get.xwJiban(_status.xwvsZhong[0], _status.xwvsZhong[1]);
        if (jiban) {
            event.zhongJiban = jiban;
            window.xwShowBanner('红方羁绊:' + get.translation('xwvs_' + jiban), true);
            game.log(_status.xwvsZhong, "触发了羁绊:", 'xwvs_' + jiban, "!");
        }
        'step 4'
        var jiban = get.xwJiban(_status.xwvsFan[0], _status.xwvsFan[1]);
        if (jiban) {
            event.fanJiban = jiban;
            window.xwShowBanner('蓝方羁绊:' + get.translation('xwvs_' + jiban), true);
            game.log(_status.xwvsFan, "触发了羁绊:", 'xwvs_' + jiban, "!");
        }
        'step 5'
        var fanAdd = true;
        var zhongAdd = true;
        if (event.fanJiban == 'yaquewusheng') {
            zhongAdd = false;
        } else if (event.zhongJiban == 'yaquewusheng') {
            fanAdd = false;
        }
        if (zhongAdd && event.zhongJiban) {
            for (var i of _status.xwvsZhong) {
                i.addSkill('xwvs_' + event.zhongJiban);
            }
        }
        if (fanAdd && event.fanJiban) {//QQQ
            for (var i of _status.xwvsFan) {
                i.addSkill('xwvs_' + event.fanJiban);
            }
        }
        event.trigger('gameStart');
        'step 6'
        game.gameDraw(_status.firstAct, function (cur) {
            if (cur == _status.firstAct) return 3;
            return 4;
        });
        game.phaseLoop(_status.firstAct);
    },
    game: {
        syncMenu: true,
        xwGet2v2CharacterList() {
            var jiban = lib.xuanwu2v2jiban;
            var ret = [];
            for (var i in jiban) {
                ret.add(i);
                var m = jiban[i];
                for (var j in m) {
                    ret.add(j);
                }
            }
            for (var i in lib.xuanwu2v2jibanGroup) {
                for (var j of lib.xuanwu2v2jibanGroup[i]) {
                    ret.add(j);
                }
            }
            return ret;
        },
        chooseCharacter() {
            var next = game.createEvent('chooseCharacter', false);
            next.showConfig = true;
            next.setContent(function () {
                'step 0'
                event.chooseList = game.xwGet2v2CharacterList().randomSort();
                event.choosed = [];
                event.players = game.players.slice(0);
                event.players.sortBySeat(_status.firstAct);
                'step 1'
                event.current = event.players.shift();
                if (event.current) {
                    var toChoice = [];
                    if (lib.config.xwvs_all_choose && event.current.isUnderControl(true)) {
                        toChoice = event.chooseList.slice(0);
                        toChoice.sort(function (a, b) {
                            return a < b ? -1 : 1;
                        });
                    } else {
                        if (event.current.xwFriend && event.current.xwFriend.name) {
                            for (var c of event.chooseList) {
                                if (get.xwJiban(c, event.current.xwFriend.name)) {
                                    toChoice.push(c);
                                    event.chooseList.remove(c);
                                    break;
                                }
                            }
                            if (toChoice.length == 0) {
                                toChoice = event.chooseList.slice(0, 5);
                            } else {
                                var li = event.chooseList.slice(0, 4);
                                toChoice.addArray(li);
                                event.chooseList.push(toChoice[0]);
                                toChoice.randomSort();
                            }
                        } else {
                            toChoice = event.chooseList.slice(0, 5);
                        }
                    }
                    event.current.chooseButton()
                        .set('forced', true)
                        .set('createDialog', ['请选择你的角色', [toChoice, 'character']])
                        .set('ai', function (button) {
                            if (event.current.xwFriend && event.current.xwFriend.name) {
                                if (get.xwJiban(event.current.xwFriend.name, button.link)) {
                                    return 20;
                                }
                            }
                            return Math.random() * 5;
                        });
                } else {
                    event.finish();
                }
                'step 2'
                if (result.links?.length) {
                    event.chooseList.remove(result.links[0]);
                    event.chooseList.randomSort();
                    event.current.init(result.links[0]);
                    event.choosed.push(event.current);
                    event.goto(1);
                }
            });
        },
        showIdentity() {
        },
        checkResult() {
            if (game.countPlayer(function (current) {
                return current.side == game.me.side && current.isAlive();
            }) == 0) {
                game.over(false);
            }
            if (game.countPlayer(function (current) {
                return current.side != game.me.side && current.isAlive();
            }) == 0) {
                game.over(true);
            }
        }
    },
    xuanwu2v2jibanGroup: {
        langshenbiyou: ['xwjh_heerke', 'xwjh_balicha', 'xwjh_hushao'],
        junziliuyi: ['xwjh_weishengyun', 'xwjh_duling', 'xwjh_madaocheng', 'xwjh_jinjiuzhang', 'xwjh_zhuangyongxian'],
        beiyusanmo: ['xwjh_xuedaoshaozhu', 'xwjh_yinwuque', 'xwjh_jinjue'],
        wangshidongzheng: ['xwjh_hulie', 'xwjh_hance', 'xwjh_qiunanping'],
        qianshihuangzu: ['xwjh_qianyuanlong', 'xwjh_qianyuansu', 'xwjh_qianqianlong', 'xwjh_qianqiande', 'xwjh_qianlanyingdanxin', 'xwjh_qianyuantu', 'xwjh_qianyuanqi', 'xwjh_qianyuanyuejiangbailing', 'xwjh_qianyuanlu'],
    },
    xuanwu2v2jiban: {
        xwjh_yuwenxingcheng: {
            xwjh_suqiaoxin: 'baihechengxing',
            xwjh_chenfengling: 'qiaosuolinglong',
            xwjh_fujinlai: 'mojiansanjie',
            xwjh_shenyi: 'mojiansanjie',
            xwjh_chenrunyu: 'modaoshutu',
        },
        xwjh_qianyuanlong: {
            xwjh_lange: 'junchenxiangzhi',
            xwjh_xuexiuming: 'xianglongweifeng',
            xwjh_qianyuansu: 'jilinchuyuan',
            xwjh_hongying: 'daxinghuangwei',
            xwjh_bailing: 'daxinghuangwei',
            xwjh_faning: 'daxinghuangwei',
            xwjh_hulie: 'daxinghuangwei',
            xwjh_hance: 'daxinghuangwei',
            xwjh_qiunanping: "daxinghuangwei",
            xwjh_xunleping: 'daxinghuangwei',
            xwjh_zhouanxia: 'daxinghuangwei',
            xwjh_qianqianlong: 'huangshizhizheng',
            xwjh_qianyuanyuejiangbailing: "longshiqunjiao",
            xwjh_qianyuanqi: 'longshiqunjiao',
            xwjh_qianyuantu: 'longshiqunjiao',
            xwjh_qianqiande: "longshiqunjiao",
        },
        xwjh_qianqianlong: {
            xwjh_linghuqiu: 'ruyudeshui',
            xwjh_chenrunyu: 'nimoerxing',
            xwjh_qianyuanqi: 'yuhumoupi',
            xwjh_heerke: 'chuantongmiyue',
        },
        xwjh_nangongyu: {
            xwjh_suzhi: 'langbeiweijian',
        },
        xwjh_lushou: {
            xwjh_duanyun: 'yandianshalian',
        },
        xwjh_xuedaoshaozhu: {
            xwjh_jiayi: 'yuhuochangtian',
            xwjh_hexuan: 'xuzhanzhucan'
        },
        xwjh_fujinlai: {
            xwjh_shenyi: 'heibaishuangjian',
        },
        xwjh_muyelangjun: {
            xwjh_shuishu: 'tiandimingzhu',
        },
        xwjh_ximenguying: {
            xwjh_muyelangjun: 'tianmoshengdian',
            xwjh_shuishu: 'tianmoshengdian',
            xwjh_luoqi: 'tianmoshengdian',
            xwjh_duya: 'tianmoshengdian',
            xwjh_jihonglie: 'tianmoshengdian',
            xwjh_huangque: 'tianmoshengdian',
            xwjh_biian: 'tianmoshengdian',
            xwjh_wanjue: 'tianmoshengdian',
            xwjh_honggufang: 'tianmoshengdian',
        },
        xwjh_duya: {
            xwjh_jihonglie: 'yatangfengren',
            xwjh_huangque: 'yaquewusheng',
        },
        xwjh_luoqi: {
            xwjh_honggufang: 'fanghuanieyuan',
            xwjh_yuwenxingcheng: 'modaoxinsi',
        },
        xwjh_chenrunyu: {
            xwjh_chenfengling: 'shiduqingshen',
        },
        xwjh_lange: {
            xwjh_linghuqiu: 'xiaoxiangrushi',
        },
        xwjh_falixin: {
            xwjh_qinzhuguang: "xiabutongxin",
        },
        xwjh_lipichen: {
            xwjh_shuiyunshen: 'tongmingzhigu',
            xwjh_chenwu: 'zhongyihuzhu',
        },
        xwjh_huangfubanxia: {
            xwjh_chufeng: "yaowangshenzhang",
            xwjh_zhuzhenshi: 'yaowangshenzhang',
        },
        xwjh_zhuzhenshi: {
            xwjh_chufeng: "kuihenjiaozhi",
        },
        xwjh_jiangsusu: {
            xwjh_chenhanqing: 'tiancandique',
        },
        xwjh_fangqijun: {
            xwjh_huajinhuan: 'hugouyouyi',
        },
        xwjh_zhouanxia: {
            xwjh_fangqijun: 'xiaorenyizhi',
            xwjh_huajinhuan: "xiaorenyizhi",
            xwjh_fujinlai: "guanyeshangqian",
        },
    },
    //jbfy
    translate: {
        xwvs_guanyeshangqian: '官爷赏钱',
        xwvs_guanyeshangqian_info: '敌方体力值大于一时,海捕标记数因受伤而减少到的下限为一.',
        xwvs_xiaorenyizhi: "小人亦知",
        xwvs_xiaorenyizhi_info: "己方非周安夏的角色出牌阶段开始时,可以查看一名有海捕标记的敌方角色X张牌(X为海捕标记数量),并选择其中任意张♥️️牌令其重铸.",
        xwvs_chuantongmiyue: "串通密约",
        xwvs_chuantongmiyue_info: "己方使用【倾巢而出】、【谁与争锋】时,己方摸一张牌.",
        xwvs_langshenbiyou: '狼神庇佑',
        xwvs_langshenbiyou_info: "己方使用的【倾巢而出】对己方无效.",
        xwvs_qianshihuangzu: "乾氏皇族",
        xwvs_qianshihuangzu_info: "体力值大于一的非朝势力角色计算与己方距离加一.",
        xwvs_yuhumoupi: "与虎谋皮",
        xwvs_yuhumoupi_info: "乾渊棋阵亡后,乾谦隆回复三点体力.",
        xwvs_wangshidongzheng: "王师东征",
        xwvs_wangshidongzheng_info: "己方可在出牌阶段装备一张【百战甲】,每局游戏每名角色限一次.",
        xwvs_longshiqunjiao: "龙噬群蛟",
        xwvs_longshiqunjiao_info: "己方非钱渊龙的角色,结束阶段扣减一点体力上限,钱渊龙增加一点体力上限.",
        xwvs_junziliuyi: "君子六艺",
        xwvs_junziliuyi_info: '礼:出牌阶段开始时,令己方另一名角色摸一张牌.<br>乐:回合开始时,若未习得<离殇曲>,获得此秘籍.<br>御:回合开始时,召出一张坐骑.<br>射:使用🃏的【杀】后回复一点内力.<br>书:回合开始时,若未习得<妙笔生花>,获得此秘籍.<br>数:【飞珠】发动没有点数限制.',
        xwvs_hugouyouyi: "狐狗有义",
        xwvs_hugouyouyi_info: '花尽欢对己方发动【嗜赌】不触发觉醒后的伤害效果.方七君翻面后,己方各摸一张牌.',
        xwvs_tiancandique: "天残地缺",
        xwvs_tiancandique_info: "蒋素素在回合开始时触发【毁玉】觉醒.陈瀚清计算【恣谑】发动条件时,对面的角色均视为男性角色.",
        xwvs_kuihenjiaozhi: "愧恨交织",
        xwvs_kuihenjiaozhi_info: "朱针石发动【执愿】摸牌数+2.除朱针石外的角色无法触发楚奉的【愧悔】.",
        xwvs_yaowangshenzhang: "药王神章",
        xwvs_yaowangshenzhang_info: "己方准备阶段,召出一张丹药牌.",
        xwvs_zhongyihuzhu: "忠义护主",
        xwvs_zhongyihuzhu_info: "晨武获得技能【义护】.",
        xwvs_tongmingzhigu: "同命之蛊",
        xwvs_tongmingzhigu_info: '己方任何一方阵亡时,另一方随即阵亡.己方任何一方回复体力后,另一方回复等量体力(若溢出,则改为摸溢出量两倍的牌).',
        xwvs_xiabutongxin: '侠捕同心',
        xwvs_xiabutongxin_info: "秦诛光使用【杀】造成伤害的非己方角色将被横置.游戏开始时,法理心获得两张【海捕文书】.",
        xwvs_nimoerxing: "逆墨而兴",
        xwvs_nimoerxing_info: '乾谦隆装备天机枪弩车后,可以视为使用一张【杀】.',
        xwvs_xiaoxiangrushi: '潇湘入世',
        xwvs_xiaoxiangrushi_info: "令狐丘、蓝歌在准备阶段,可以弃置一张♥️️牌并装备【澜湘集♥️️5】.",
        xwvs_ruyudeshui: "如鱼得水",
        xwvs_ruyudeshui_info: '令狐丘受到伤害后,己方各摸一张牌.',
        xwvs_huangshizhizheng: '皇室之争',
        xwvs_huangshizhizheng_info: '钱渊龙、乾谦隆一人发动觉醒技时,另一人觉醒技当即失效,并摸三张牌.',
        xwvs_shiduqingshen: '舐犊情深',
        xwvs_shiduqingshen_info: '陈润玉每回合限一次,可以弃置任意张黑色牌,摸等量的牌.',
        xwvs_modaoshutu: '墨道殊途',
        xwvs_modaoshutu_info: '陈润玉获得技能【先攻】.宇文星城装备【天机枪弩车】后,弃置之并摸一张牌.',
        xwvs_daxinghuangwei: '大兴皇威',
        xwvs_daxinghuangwei_info: '钱渊龙对队友发动【帝威】后,摸一张牌.',
        xwvs_yaquewusheng: '鸦雀无声',
        xwvs_yaquewusheng_info: '对面的羁绊效果无效.',
        xwvs_yatangfengren: '鸦堂烽刃',
        xwvs_yatangfengren_info: '己方渡鸦不会因为【疯嚣】对姬鸿烈使用海捕文书.姬鸿烈在游戏开始时横置.',
        xwvs_modaoxinsi: '墨道新思',
        xwvs_modaoxinsi_info: '宇文星城发动【制械】时,装备【七巧锁】改为【拒骨凌云梯】.',
        xwvs_fanghuanieyuan: '芳华孽缘',
        xwvs_fanghuanieyuan_info: '红孤芳第一个回合结束后直接觉醒,并只能选择己方罗弃.',
        xwvs_tiandimingzhu: '天地冥烛',
        xwvs_tiandimingzhu_info: '水书只有当己方暮夜郎君阵亡时,才会触发觉醒.暮夜郎君标记策引角色后摸一张牌.',
        xwvs_tianmoshengdian: '天魔圣殿',
        xwvs_tianmoshengdian_info: '每回合限一次,己方角色造成伤害后,另一名角色摸一张牌.',
        xwvs_jilinchuyuan: "济鳞出渊",
        xwvs_jilinchuyuan_info: '每局游戏限一次,钱渊龙进入濒死状态时,其回复满体力值.',
        xwvs_xianglongweifeng: '祥龙威凤',
        xwvs_xianglongweifeng_info: '每回合限一次,己方可以把装备牌当作【大赦天下】使用.',
        xwvs_xuzhanzhucan: '续盏烛残',
        xwvs_xuzhanzhucan_info: '若本局游戏中,血刀少主未发动过【恶胁】,当鹤璇对其发动【怅盏】后,视为对其使用【把酒言欢】.',
        xwvs_heibaishuangjian: '黑白双剑',
        xwvs_heibaishuangjian_info: '沈移的【顽恶】触发时,可以自由选择效果.己方角色不能成为【海捕文书】的目标.',
        xwvs_mojiansanjie: "墨剑三杰",
        xwvs_mojiansanjie_info: '宇文星城的【械】对己方至多触发两个效果.',
        xwvs_yandianshalian: "阎殿煞链",
        xwvs_yandianshalian_info: '防止己方受到横置传导伤害.敌方被横置时,己方回复一点内力.',
        xwvs_langbeiweijian: '狼狈为奸',
        xwvs_langbeiweijian_info: '南宫羽使用苏执发动【款曲】交给的牌后,摸两张牌.',
        xwvs_junchenxiangzhi: '君臣相知',
        xwvs_junchenxiangzhi_info: '蓝歌开局的体力上限加一,钱渊龙的手牌上限+X,X为蓝歌的体力值.蓝歌对钱渊龙造成伤害后,令其摸一张牌.',
        xwvs_qiaosuolinglong: '巧锁玲珑',
        xwvs_qiaosuolinglong_info: '陈风铃在回合结束阶段,可以将场上的一个【械】标记移动至上家或下家.',
        xwvs_baihechengxing: '捭阖承星',
        xwvs_baihechengxing_info: '苏巧馨与宇文星城拼点后,双方各摸一张牌.',
        xwvs_beiyusanmo: '北域三魔',
        xwvs_beiyusanmo_info: '己方摸牌阶段结束后,召出一张【杀】.',
        xwvs_yuhuochangtian: "渔火长天",
        xwvs_yuhuochangtian_info: '血刀少主失去技能【恶胁】【长忆】【血海】,获得技能巧渔.嫁衣阵亡后,血刀少主获得失去的技能,废除防御马栏,并失去【巧渔】.',
        xuanwuvs: '风雨同舟',
    },
    get: {
        rawAttitude(a, b) {
            if (a.side == b.side) return 10;
            return -10;
        },
        xwJiban(a, b) {
            if (a == b) return false;
            var namea = (typeof a == 'string' ? a : a.name);
            var nameb = (typeof b == 'string' ? b : b.name);
            if (lib.xuanwu2v2jiban[namea]) {
                var ret = lib.xuanwu2v2jiban[namea][nameb];
                if (ret) return ret;
            }
            if (lib.xuanwu2v2jiban[nameb]) {
                var ret = lib.xuanwu2v2jiban[nameb][namea];
                if (ret) return ret;
            }
            if (lib.xuanwu2v2jibanGroup) {
                for (var m in lib.xuanwu2v2jibanGroup) {
                    var arr = lib.xuanwu2v2jibanGroup[m];
                    if (arr && arr.includes(namea) && arr.includes(nameb)) {
                        return m;
                    }
                }
            }
            return null;
        }
    },
    element: {
        content: {
            gameDraw() {
                "step 0"
                if (_status.brawl && _status.brawl.noGameDraw) {
                    event.finish();
                    return;
                }
                var end = player;
                var numx = num;
                do {
                    if (typeof num == 'function') {
                        numx = num(player);
                    }
                    if (player.getTopCards) player.directgain(player.getTopCards(numx));
                    else player.directgain(get.cards(numx));
                    if (player.singleHp === true && get.mode() != 'guozhan' && (lib.config.mode != 'doudizhu' || _status.mode != 'online')) {
                        player.doubleDraw();
                    }
                    player = player.next;
                }
                while (player != end);
                event.changeCard = (lib.config.xwvs_change_card === undefined ? 'disabled' : lib.config.xwvs_change_card);
                "step 1"
                if (event.changeCard != 'disabled' && !_status.auto) {
                    event.dialog = ui.create.dialog('是否使用手气卡？');
                    ui.create.confirm('oc');
                    event.custom.replace.confirm = function (bool) {
                        _status.event.bool = bool;
                        game.resume();
                    }
                }
                else {
                    event.finish();
                }
                "step 2"
                if (event.changeCard == 'once') {
                    event.changeCard = 'disabled';
                }
                else if (event.changeCard == 'twice') {
                    event.changeCard = 'once';
                }
                else if (event.changeCard == 'disabled') {
                    event.bool = false;
                    return;
                }
                _status.imchoosing = true;
                event.switchToAuto = function () {
                    _status.event.bool = false;
                    game.resume();
                }
                game.pause();
                "step 3"
                _status.imchoosing = false;
                if (event.bool) {
                    if (game.changeCoin) {
                        game.changeCoin(-3);
                    }
                    var hs = game.me.getCards('h');
                    game.addVideo('lose', game.me, [get.cardsInfo(hs), [], [], []]);
                    for (var i = 0; i < hs.length; i++) {
                        hs[i].discard(false);
                    }
                    game.me.directgain(get.cards(hs.length));
                    event.goto(2);
                }
                else {
                    if (event.dialog) event.dialog.close();
                    if (ui.confirm) ui.confirm.close();
                    event.finish();
                }
            },
        },
        player: {
            dieAfter() {
                game.checkResult();
            },
            dieAfter2(source) {
                if (this.xwFriend && this.xwFriend.isAlive()) {
                    var next = game.createEvent('xwvsfrienddie');
                    next.set('player', this.xwFriend);
                    next.setContent(function () {
                        'step 0'
                        var jiban = get.xwJiban(player, player.xwFriend);
                        player.removeSkill('xwvs_' + jiban);
                        game.log(player, '失去了羁绊效果', 'xwvs_' + jiban);
                        if (jiban == 'yaquewusheng') {
                            var side = (player.identity == 'zhong' ? _status.xwvsFan : _status.xwvsZhong);
                            if (side[0].isAlive() && side[1].isAlive()) {
                                var jiban = get.xwJiban(side[0], side[1]);
                                if (jiban) {
                                    side[0].addSkill('xwvs_' + jiban);
                                    side[1].addSkill('xwvs_' + jiban);
                                }
                            }
                        }
                        player.$fullscreenpop('队友阵亡', 'thunder');
                        if (player.isAlive()) {
                            player.gainMaxHp();
                        } else {
                            event.finish();
                        }
                        'step 1'
                        player.recover();
                        'step 2'
                        player.draw(2);
                    });
                }
            },
            xwGetFriend() {
                var that = this;
                return game.findPlayer(function (current) {
                    return current.side == that.side;
                });
            }
        }
    },
    skill: {
        xwvs_xiaorenyizhi: {
            charlotte: true,
            nobracket: true,
            trigger: {
                player: 'phaseUseBegin',
            },
            filter(event, player) {
                return !player.xwIs('xwjh_zhouanxia') && game.hasPlayer(function (current) {
                    return current.side != player.side && current.countMark('xwjh_publicmark_haibu') && current.countCards('h');
                });
            },
            forced: true,
            content() {
                'step 0'
                player.chooseTarget("是否选择一名敌方有海捕标记的角色,查看其手牌？", function (card, player, target) {
                    return target.side != player.side && target.countMark('xwjh_publicmark_haibu') && target.countCards('h');
                })
                    .set('ai', function (target) {
                        var r = target.countCards('h') / 2 + (5 - target.hp) + target.countMark('xwjh_publicmark_haibu');
                        return r <= 0 ? 1 : r;
                    });
                'step 1'
                if (result && result.targets && result.targets.length) {
                    event.tar = result.targets[0];
                    var num = Math.min(event.tar.countMark('xwjh_publicmark_haibu'), event.tar.countCards('h'));
                    player.choosePlayerCard(true, num, 'h', result.targets[0])
                        .set('ai', function () {
                            return Math.random() + 1;
                        });
                }
                'step 2'
                if (result && result.cards && result.cards.length) {
                    player.chooseCardButton([1, Infinity], "请选择其中的♥️️牌令其重铸", result.cards)
                        .set('filterButton', function (button) {
                            return button.link.suit == 'heart';
                        })
                        .set('ai', function (button) {
                            return get.value(button.link);
                        });
                } else {
                    event.finish();
                }
                'step 3'
                if (result.links?.length) {
                    event.tar.lose(result.links);
                    event.tar.$throw(result.links);
                    game.log(event.tar, "重铸了", result.links);
                    event.tar.draw(result.links.length);
                }
            }
        },
        xwvs_guanyeshangqian: {
            charlotte: true,
            nobracket: true,
        },
        xwvs_chuantongmiyue: {
            charlotte: true,
            nobracket: true,
            forced: true,
            trigger: {
                player: 'useCard',
            },
            filter(event, player) {
                return ['xwjh_card_sheiyuzhengfeng', 'xwjh_card_qingchaoerchu'].includes(event.card.name);
            },
            content() {
                'step 0'
                game.asyncDraw([player, player.xwFriend]);
            }
        },
        xwvs_langshenbiyou: {
            charlotte: true,
            nobracket: true,
            forced: true,
            firstDo: true,
            trigger: {
                target: "useCardToTargeted",
            },
            filter(event, player) {
                return event.card.name == 'xwjh_card_qingchaoerchu' && event.player.side == event.target.side;
            },
            content() {
                'step 0'
                trigger.langshenbiyou_done = true;
                'step 1'
                trigger.parent.excluded.add(player);
            },
            ai: {
                effect: {
                    target(card, player, target) {
                        if (card && card.name == 'xwjh_card_qingchaoerchu' && player.side == target.side) {
                            return 'zeroplayertarget';
                        }
                    }
                }
            }
        },
        xwvs_qianshihuangzu: {
            charlotte: true,
            nobracket: true,
            mod: {
                globalTo(from, to, distance) {
                    if (get.xwOriginGroup(from) != 'xwjh_chao' && from.hp > 1) {
                        return distance + 1;
                    }
                },
            }
        },
        xwvs_yuhumoupi: {
            charlotte: true,
            nobracket: true,
            forceDie: true,
            forced: true,
            trigger: {
                global: 'die',
            },
            filter(event, player) {
                return player.xwIs('xwjh_qianqianlong') && event.player.xwIs('xwjh_qianyuanqi');
            },
            content() {
                player.recover(3);
            }
        },
        xwvs_wangshidongzheng: {
            charlotte: true,
            nobracket: true,
            enable: 'phaseUse',
            filter(event, player) {
                return !player.hasSkill('xwvs_wangshidongzheng_off');
            },
            content() {
                'step 0'
                player.addSkill('xwvs_wangshidongzheng_off');
                player.equip(game.createCard('xwjh_card_baizhanjia'));
            },
            ai: {
                order: 1,
                result: {
                    player: 1,
                }
            },
            subSkill: {
                off: {
                    charlotte: true,
                }
            }
        },
        xwvs_longshiqunjiao: {
            charlotte: true,
            nobracket: true,
            forced: true,
            trigger: {
                player: 'phaseJieshuEnd'
            },
            filter(event, player) {
                return !player.xwIs('xwjh_qianyuanlong');
            },
            content() {
                'step 0'
                player.loseMaxHp();
                'step 1'
                player.xwFriend.gainMaxHp();
            }
        },
        xwvs_junziliuyi: {
            charlotte: true,
            nobracket: true,
            forced: true,
            group: ['xwvs_junziliuyi_li', 'xwvs_junziliuyi_yue', 'xwvs_junziliuyi_book', 'xwvs_junziliuyi_num', 'xwvs_junziliuyi_she', 'xwvs_junziliuyi_yu'],
            subSkill: {
                li: {
                    trigger: {
                        player: 'phaseUseBegin',
                    },
                    forced: true,
                    filter(event, player) {
                        return player.xwIs('xwjh_yangduanyi');
                    },
                    content() {
                        'step 0'
                        player.xwFriend.draw();
                    }
                },
                yue: {
                    trigger: {
                        player: 'phaseBegin',
                    },
                    forced: true,
                    filter(event, player) {
                        return player.xwIs('xwjh_weishengyun') && !player.hasSkill('xwjh_lishangqu');
                    },
                    content() {
                        'step 0'
                        player.gain(game.createCard('xwjh_card_lishangqu'), 'draw');
                    }
                },
                book: {
                    trigger: {
                        player: 'phaseBegin',
                    },
                    forced: true,
                    filter(event, player) {
                        return player.xwIs('xwjh_zhuangyongxian') && !player.hasSkill('xwjh_miaobishenghua');
                    },
                    content() {
                        'step 0'
                        player.gain(game.createCard('xwjh_card_miaobishenghua'), 'draw');
                    }
                },
                num: {
                },
                she: {
                    trigger: {
                        player: 'useCardEnd',
                    },
                    forced: true,
                    filter(event, player) {
                        return player.xwIs('xwjh_duling') && event.card.name == 'sha' && (!event.cards || event.cards.length == 0) && player.xwjhMp < player.xwjhMaxMp;
                    },
                    content() {
                        player.gainxwjhMp(1);
                    }
                },
                yu: {
                    forced: true,
                    trigger: {
                        player: 'phaseBegin',
                    },
                    filter(event, player) {
                        return player.xwIs('xwjh_madaocheng');
                    },
                    content() {
                        'step 0'
                        player.xwZhaochu(1, function (card) {
                            return get.type(card) == 'equip' && (get.subtype(card) == 'equip3' || get.subtype(card) == 'equip4');
                        });
                    }
                }
            }
        },
        xwvs_hugouyouyi: {
            charlotte: true,
            nobracket: true,
            forced: true,
            trigger: {
                player: 'turnOverEnd',
            },
            filter(event, player) {
                return player.xwIs('xwjh_fangqijun');
            },
            content() {
                'step 0'
                game.asyncDraw(game.filterPlayer(function (current) {
                    return current.side == player.side;
                }));
            }
        },
        xwvs_kuihenjiaozhi: {
            charlotte: true,
            nobracket: true,
        },
        xwvs_tiancandique: {
            charlotte: true,
            nobracket: true,
        },
        xwvs_yaowangshenzhang: {
            charlotte: true,
            nobracket: true,
            forced: true,
            trigger: {
                player: 'phaseZhunbeiBegin',
            },
            filter(event, player) {
                return true;
            },
            content() {
                player.xwZhaochu(1, function (card) {
                    return get.type(card) == 'xwjh_danyao';
                }, true);
            }
        },
        xwvs_zhongyihuzhu: {
            charlotte: true,
            nobracket: true,
            init(player) {
                if (player.xwIs('xwjh_chenwu')) {
                    player.addSkill('xwjh_yihu');
                }
            },
            onremove(player) {
                if (player.xwIs('xwjh_chenwu')) {
                    player.removeSkill('xwjh_yihu');
                }
            }
        },
        xwvs_tongmingzhigu: {
            charlotte: true,
            nobracket: true,
            trigger: {
                global: ['recoverEnd', 'die']
            },
            forceDie: true,
            forced: true,
            filter(event, player) {
                if (event.player.side != player.side) return false;
                if (event.player == player) return false;
                if (event.xwvs_linkevt) return false;
                return true;
            },
            content() {
                'step 0'
                if (trigger.name == 'recover') {
                    if (player.hp + trigger.num > player.maxHp) {
                        player.draw((player.hp + trigger.num - player.maxHp) * 2);
                    }
                    player.recover(trigger.num)
                        .set('xwvs_linkevt', true);
                } else if (trigger.name == 'die') {
                    player.die()
                        .set('xwvs_linkevt', true);
                }
            }
        },
        xwvs_xiabutongxin: {
            charlotte: true,
            nobracket: true,
            forced: true,
            trigger: {
                global: 'gameStart',
            },
            filter(event, player) {
                return player.xwIs('xwjh_falixin');
            },
            content() {
                'step 0'
                player.gain([game.createCard('xwjh_card_haibuwenshu', 'spade', 13), game.createCard('xwjh_card_haibuwenshu', 'heart', 7)], 'draw2');
            },
            group: ['xwvs_xiabutongxin_dam'],
            subSkill: {
                dam: {
                    forced: true,
                    trigger: {
                        source: 'damageSource',
                    },
                    filter(event, player) {
                        return player.xwIs('xwjh_qinzhuguang') && event.player.side != player.side && !event.player.isLinked();
                    },
                    content() {
                        'step 0'
                        trigger.player.link(true);
                    }
                }
            }
        },
        xwvs_nimoerxing: {
            charlotte: true,
            nobracket: true,
            forced: true,
            trigger: {
                player: 'equipAfter',
            },
            filter(event, player) {
                return player.xwIs('xwjh_qianqianlong') && event.card && event.card.name == 'xwjh_card_tianjiqiangnuche';
            },
            content() {
                player.chooseUseTarget({ name: 'sha' })
                    .set('addCount', false)
            }
        },
        xwvs_xiaoxiangrushi: {
            charlotte: true,
            nobracket: true,
            forced: true,
            trigger: {
                player: 'phaseZhunbeiBegin',
            },
            filter(event, player) {
                if (player.getEquip(5) && player.getEquip(5).name == 'xwjh_card_lanxiangji') return false;
                if (player.isDisabled(5)) return false;
                return player.countCards('he', function (card) {
                    if (card.suit != 'heart') return false;
                    return lib.filter.cardDiscardable(card, player);
                });
            },
            content() {
                'step 0'
                player.chooseToDiscard('he', 1, "是否弃置一张♥️️牌装备【澜湘集♥️️5】？", function (card) {
                    return card.suit == 'heart';
                })
                    .set('ai', function (card) {
                        if (card.suit != 'heart') return false;
                        if (_status.event.player.xwFriend.getEquip(5) && _status.event.player.xwFriend.getEquip(5).name == 'xwjh_card_lanxiangji') {
                            return -2;
                        }
                        return 4 - get.value(card);
                    });
                'step 1'
                if (result && result.bool) {
                    player.equip(game.createCard('xwjh_card_lanxiangji', 'heart', 5));
                }
            }
        },
        xwvs_ruyudeshui: {
            charlotte: true,
            nobracket: true,
            forced: true,
            priority: 92221,
            trigger: {
                player: 'damageEnd',
            },
            filter(event, player) {
                return player.xwIs('xwjh_linghuqiu');
            },
            content() {
                game.asyncDraw([player, player.xwFriend]);
            }
        },
        xwvs_huangshizhizheng: {
            charlotte: true,
            nobracket: true,
        },
        xwvs_shiduqingshen: {
            charlotte: true,
            nobracket: true,
            enable: 'phaseUse',
            usable: 1,
            filter(event, player) {
                if (player.xwIs('xwjh_chenrunyu')) {
                    return player.countDiscardableCards(player, 'he');
                }
                return false;
            },
            position: 'he',
            selectCard: [1, Infinity],
            filterCard(card) {
                return get.color(card) == 'black';
            },
            check(card) {
                return 7 - get.value(card);
            },
            content() {
                player.draw(cards.length);
            },
            ai: {
                order: 1,
                result: {
                    player: 1,
                }
            }
        },
        xwvs_modaoshutu: {
            charlotte: true,
            nobracket: true,
            forced: true,
            init(player) {
                if (player.xwIs('xwjh_chenrunyu')) {
                    player.addSkill('xwjh_xiangong');
                }
            },
            onremove(player) {
                if (player.xwIs('xwjh_chenrunyu')) {
                    player.removeSkill('xwjh_xiangong');
                }
            },
            trigger: {
                player: 'equipAfter',
            },
            filter(event, player) {
                if (player.xwIs('xwjh_yuwenxingcheng')) {
                    if (event.card.name == 'xwjh_card_tianjiqiangnuche' && player.getEquip(1) && player.getEquip(1).name == 'xwjh_card_tianjiqiangnuche') {
                        return true;
                    }
                }
                return false;
            },
            content() {
                'step 0'
                player.discard(player.getEquip(1));
                'step 1'
                player.draw();
            }
        },
        xwvs_daxinghuangwei: {
            charlotte: true,
            nobracket: true,
        },
        xwvs_yaquewusheng: {
            charlotte: true,
            nobracket: true,
            onremove(player, skill) {
                game.filterPlayer(function (current) {
                    if (current.hasSkill('xwvs_yaquewusheng_wu')) {
                        current.removeSkill('xwvs_yaquewusheng_wu');
                    }
                });
            },
            subSkill: {
                wu: {
                    charlotte: true,
                    init(player, skill) {
                        player.addSkillBlocker(skill);
                    },
                    onremove(player, skill) {
                        player.removeSkillBlocker(skill);
                    },
                    skillBlocker(skill, player) {
                        return skill.indexOf('xwvs_') == 0 && skill != 'xwvs_yaquewusheng_wu';
                    },
                }
            }
        },
        xwvs_yatangfengren: {
            charlotte: true,
            nobracket: true,
            forced: true,
            trigger: {
                global: 'gameStart',
            },
            filter(event, player) {
                return player.xwIs('xwjh_jihonglie');
            },
            content() {
                player.link(true);
            }
        },
        xwvs_modaoxinsi: {
            charlotte: true,
            nobracket: true,
        },
        xwvs_fanghuanieyuan: {
            charlotte: true,
            nobracket: true,
        },
        xwvs_tiandimingzhu: {
            charlotte: true,
            nobracket: true,
        },
        xwvs_tianmoshengdian: {
            charlotte: true,
            nobracket: true,
            forced: true,
            usable: 1,
            trigger: {
                global: 'damageSource',
            },
            filter(event, player) {
                return event.source && event.source == player.xwFriend;
            },
            content() {
                player.draw();
            }
        },
        xwvs_jilinchuyuan: {
            charlotte: true,
            nobracket: true,
            forced: true,
            priority: 879,
            trigger: {
                player: 'dying'
            },
            filter(event, player) {
                return player.xwIs('xwjh_qianyuanlong') && !player.storage.xwvs_jilinchuyuan;
            },
            content() {
                player.storage.xwvs_jilinchuyuan = true;
                player.hp = player.maxHp;
                player.$fullscreenpop('济鳞出渊', 'water');
            }
        },
        xwvs_xianglongweifeng: {
            charlotte: true,
            usable: 1,
            nobracket: true,
            enable: ['chooseToUse'],
            filterCard(card) {
                return get.type(card) == 'equip';
            },
            position: 'hes',
            viewAs: {
                name: 'xwjh_card_dashetianxia'
            },
            viewAsFilter(player) {
                if (!player.countCards('hes', function (card) {
                    return get.type(card) == 'equip';
                })) return false;
                return true;
            },
            prompt: '将一张装备牌当【大赦天下】使用.',
            check(card) {
                return 8 - get.value(card);
            },
        },
        xwvs_xuzhanzhucan: {
            charlotte: true,
            nobracket: true,
        },
        xwvs_heibaishuangjian: {
            charlotte: true,
            nobracket: true,
            mod: {
                targetEnabled(card, player, target) {
                    var name = card.name;
                    if (name == 'xwjh_card_haibuwenshu') {
                        return false;
                    }
                },
            }
        },
        xwvs_mojiansanjie: {
            charlotte: true,
            nobracket: true,
        },
        xwvs_yandianshalian: {
            charlotte: true,
            nobracket: true,
            forced: true,
            priority: 12,
            trigger: {
                player: 'damageBegin4',
            },
            filter(event, player) {
                return !event.notLink();
            },
            content() {
                trigger.cancel();
                game.log(player, "受到的伤害被取消.");
            },
            group: ['xwvs_yandianshalian_link'],
            subSkill: {
                link: {
                    forced: true,
                    charlotte: true,
                    trigger: {
                        global: 'linkEnd',
                    },
                    filter(event, player) {
                        return event.player != player && event.player != player.xwFriend && event.player.isLinked();
                    },
                    content() {
                        player.gainxwjhMp();
                    }
                }
            },
            ai: {
                effect: {
                    target(card, player, target, result, isLink) {
                        if (card && card.name == 'xwjh_card_gushouzhizu') {
                            return [0, 0];
                        }
                        if (get.tag(card, 'damage') && isLink) {
                            return 'zeroplayertarget';
                        }
                    }
                }
            }
        },
        xwvs_langbeiweijian: {
            charlotte: true,
            nobracket: true,
            forced: true,
            priority: 12,
            trigger: {
                player: 'useCard2',
            },
            filter(event, player) {
                if (!event.cards || event.cards.length != 1) return false;
                if (player.storage.xwjh_kuanqu_qu && player.storage.xwjh_kuanqu_qu.includes(event.cards[0])) {
                    return player.xwIs('xwjh_nangongyu');
                }
                return false;
            },
            content() {
                player.draw(2);
            }
        },
        xwvs_yuhuochangtian: {
            charlotte: true,
            nobracket: true,
            init(player) {
                if (player.xwIs('xwjh_xuedaoshaozhu')) {
                    player.node.avatar.setBackgroundImage('extension/玄武江湖/image/xwjh_xuedaoshaozhu_jiban.jpg');
                }
                if (player.xwIs('xwjh_jiayi')) {
                    player.node.avatar.setBackgroundImage('extension/玄武江湖/image/xwjh_jiayi_jiban.jpg');
                }
                if (player.hasSkill('xwjh_exie')) {
                    player.removeSkill('xwjh_exie');
                }
                if (player.hasSkill('xwjh_xuehai')) {
                    player.removeSkill('xwjh_xuehai');
                }
                if (player.hasSkill('xwjh_changyi')) {
                    player.removeSkill('xwjh_changyi');
                }
                if (!player.hasSkill('xwjh_qiaoyu')) {
                    player.addSkill('xwjh_qiaoyu');
                }
            },
            trigger: {
                global: 'die',
            },
            forced: true,
            filter(event, player) {
                if (event.player.xwIs('xwjh_jiayi') && player.xwIs('xwjh_xuedaoshaozhu') && event.player.side == player.side) {
                    return true;
                }
                return false;
            },
            content() {
                'step 0'
                player.say('不!小依!小依!');
                player.node.avatar.setBackgroundImage('extension/玄武江湖/image/xwjh_xuedaoshaozhu.jpg');
                player.addSkill('xwjh_exie');
                player.addSkill('xwjh_xuehai');
                player.addSkill('xwjh_changyi');
                player.removeSkill('xwjh_qiaoyu');
                'step 1'
                player.disableEquip(3);
            }
        },
        xwvs_baihechengxing: {
            trigger: {
                player: 'compare'
            },
            nobracket: true,
            charlotte: true,
            forced: true,
            filter(event, player) {
                if (event.player.side != event.target.side) return false;
                return event.target.xwIs('xwjh_yuwenxingcheng') || event.target.xwIs('xwjh_suqiaoxin');
            },
            content() {
                game.asyncDraw([trigger.target, player]);
            }
        },
        xwvs_junchenxiangzhi: {
            init(player) {
                if (player.xwIs('xwjh_lange')) {
                    player.maxHp = player.maxHp + 1;
                    player.hp = player.maxHp;
                    player.update();
                }
            },
            mod: {
                maxHandcard(player, num) {
                    if (player.xwIs('xwjh_qianyuanlong')) {
                        var lange = game.findPlayer(function (current) {
                            return current.side == player.side && current.xwIs('xwjh_lange');
                        });
                        if (lange) {
                            return num + lange.hp;
                        }
                    }
                },
            },
            forced: true,
            charlotte: true,
            nobracket: true,
            trigger: {
                source: 'damageSource',
            },
            filter(event, player) {
                if (player.xwIs('xwjh_lange') && event.player.xwIs('xwjh_qianyuanlong')) {
                    return player.side == event.player.side;
                }
                return false;
            },
            content() {
                trigger.player.draw();
            }
        },
        xwvs_beiyusanmo: {
            forced: true,
            nobracket: true,
            charlotte: true,
            trigger: {
                player: 'phaseDrawEnd',
            },
            filter(event, player) {
                return true;
            },
            content() {
                player.xwZhaochu(1, function (card) {
                    return card.name == 'sha';
                });
            }
        },
        xwvs_qiaosuolinglong: {
            nobracket: true,
            charlotte: true,
            trigger: {
                player: ["phaseJieshuEnd"],
            },
            forced: true,
            filter(event, player) {
                if (!player.xwIs('xwjh_chenfengling')) {
                    return false;
                }
                return game.hasPlayer(function (current) {
                    return current.countMark('xwjh_zhixie_xie') > 0;
                });
            },
            content() {
                'step 0'
                player.chooseTarget(2, "请选择是否转移一名角色的<械>.", function (card, player, target) {
                    if (ui.selected.targets.length == 0) {
                        return target.countMark('xwjh_zhixie_xie') > 0;
                    } else {
                        var m = ui.selected.targets[0];
                        return target == m.next || target == m.previous;
                    }
                })
                    .set('ai', function (target) {
                        var friend = player.xwGetFriend();
                        if (friend && friend.hasSkill('xwjh_baoyin') && !friend.storage.xwjh_baoyin) {
                            if (ui.selected.targets.length == 0) {
                                var attitude = get.attitude(player, target);
                                if (attitude > 0) {
                                    var nextCount = get.attitude(player, target.next) < 0 ? target.next.countMark('xwjh_zhixie_xie') + 1 : -3;
                                    var previousCount = get.attitude(player, target.previous) < 0 ? target.previous.countMark('xwjh_zhixie_xie') + 1 : -3;
                                    return Math.max(nextCount, previousCount);
                                }
                                return -2;
                            } else {
                                var attitude = get.attitude(player, target);
                                if (attitude > 0) {
                                    return -2;
                                } else {
                                    return target.countMark('xwjh_zhixie_xie') + 1;
                                }
                            }
                        } else {
                            var count = game.countPlayer(function (current) {
                                return current != player;
                            });
                            if (ui.selected.targets.length == 0) {
                                if (target == player && game.hasPlayer(function (current) {
                                    return current != player && current.countMark('xwjh_zhixie_xie') < 2;
                                })) {
                                    return 2;
                                }
                                if (count == 1) {
                                    if (target == player) {
                                        if (target.previous.countMark('xwjh_zhixie_xie') < 2) {
                                            return 2;
                                        }
                                        return -2;
                                    } else {
                                        return -2;
                                    }
                                }
                                return (target.countMark('xwjh_zhixie_xie') > 3 &&
                                    (target.previous.countMark('xwjh_zhixie_xie') < 2 || target.next.countMark('xwjh_zhixie_xie') < 2)) ? 2 : -2;
                            } else {
                                if (count == 1) {
                                    return 2;
                                }
                                return target.countMark('xwjh_zhixie_xie') <= 1 ? 2 : -2;
                            }
                        }
                    })
                    .set('targetprompt', ['被移走械', '获得械']);
                'step 1'
                if (result && result.targets && result.targets.length >= 2) {
                    game.log(player, '将', result.targets[0], '的械标记移动给了', result.targets[1], '.');
                    result.targets[0].removeMark('xwjh_zhixie_xie', 1);
                    result.targets[1].addMark('xwjh_zhixie_xie', 1);
                } else {
                    event.finish();
                }
            },
        }
    },
};
lib.xwjh_modexwvs = modexwvs;
game.addMode('xuanwuvs', modexwvs, {
    translate: '风雨同舟',
    config: {
        control_friend: {
            name: '控制队友',
            intro: '开启后可以控制队友操作',
            init: lib.config.xwvs_control_friend === undefined ? false : lib.config.xwvs_control_friend,
            onclick(item) {
                game.saveConfig('control_friend', item, true);
                game.saveConfig('xwvs_control_friend', item);
            },
        },
        change_card: {
            name: '开启手气卡',
            init: lib.config.xwvs_change_card === undefined ? 'disabled' : lib.config.xwvs_change_card,
            item: {
                disabled: '禁用',
                once: '一次',
                twice: '两次',
                unlimited: '无限',
            },
            onclick(item) {
                game.saveConfig('change_card', item, true);
                game.saveConfig('xwvs_change_card', item);
            },
        },
        all_choose: {
            name: '全将可选',
            intro: '开启后选将框将出现所有可选武将.',
            init: lib.config.xwvs_all_choose === undefined ? false : lib.config.xwvs_all_choose,
            onclick(item) {
                game.saveConfig('all_choose', item, true);
                game.saveConfig('xwvs_all_choose', item);
            },
        },
    },
    onremove() {
        game.clearModeConfig('xuanwuvs');
    },
});
lib.mode.xuanwuvs.splash = 'ext:玄武江湖/image/xuanwuvs.jpg';