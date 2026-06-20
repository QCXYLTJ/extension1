'use strict';
qyhcCL.jiangeBoss = {
    cljg_liedixuande: ['male', 'shu', 4, ['cljg_lingfeng', 'lizhan', 'cljg_jizhen'], ['jiangeboss', 'hiddenboss', 'bossallowed'], 'shu'],
    cljg_gongshenyueying: ['female', 'shu', 4, ['cljg_gongshen', 'cljg_zhinang', 'cljg_jingmiao'], ['jiangeboss', 'hiddenboss', 'bossallowed'], 'shu'],
    cljg_tianhoukongming: ['male', 'shu', 4, ['cljg_biantian', 'tiandu', 'cljg_qizhen'], ['jiangeboss', 'hiddenboss', 'bossallowed'], 'shu'],
    cljg_yuhuoshiyuan: ['male', 'shu', 4, ['cljg_qiwu', 'cljg_yuhuo', 'cljg_tianyu'], ['jiangeboss', 'hiddenboss', 'bossallowed'], 'shu'],
    cljg_yihanyunchang: ['male', 'shu', 4, ['cljg_xiaorui', 'cljg_huchen', 'cljg_tianjiang'], ['jiangeboss', 'hiddenboss', 'bossallowed'], 'shu'],
    cljg_fuweizilong: ['male', 'shu', 4, ['cljg_keding', 'cljg_fengjian', 'cljg_longwei'], ['jiangeboss', 'hiddenboss', 'bossallowed'], 'shu'],
    cljg_jileibaihu: ['male', 'shu', 3, ['cljg_jiguan', 'cljg_zhenwei', 'cljg_benlei'], ['jiangemech', 'hiddenboss', 'bossallowed'], 'shu'],
    cljg_yunpingqinglong: ['male', 'shu', 3, ['cljg_jiguan', 'cljg_jinlin', 'cljg_huijian'], ['jiangemech', 'hiddenboss', 'bossallowed'], 'shu'],
    cljg_lingjiaxuanwu: ['female', 'shu', 3, ['cljg_jiguan', 'cljg_xuankai', 'cljg_lingyu'], ['jiangemech', 'hiddenboss', 'bossallowed'], 'shu'],
    cljg_chiyuzhuque: ['female', 'shu', 3, ['cljg_jiguan', 'cljg_yuhuo', 'cljg_tianyun'], ['jiangemech', 'hiddenboss', 'bossallowed'], 'shu'],
    cljg_qiaokuijunyi: ['male', 'wei', 4, ['cljg_jueji', 'cljg_jixian', 'cljg_huodi'], ['jiangeboss', 'hiddenboss', 'bossallowed'], 'wei'],
    cljg_jiarenzidan: ['male', 'wei', 4, ['cljg_jingfan', 'lizhan', 'cljg_chiying'], ['jiangeboss', 'hiddenboss', 'bossallowed'], 'wei'],
    cljg_duanyuzhongda: ['male', 'wei', 4, ['cljg_konghun', 'clyl_fankui', 'cljg_xuanlei'], ['jiangeboss', 'hiddenboss', 'bossallowed'], 'wei'],
    cljg_juechenmiaocai: ['male', 'wei', 4, ['cljg_fengxing', 'cljg_leili', 'cljg_chuanyun'], ['jiangeboss', 'hiddenboss', 'bossallowed'], 'wei'],
    cljg_kumuyuanrang: ['male', 'wei', 4, ['cljg_bashi', 'cljg_danjing', 'cljg_tongjun'], ['jiangeboss', 'hiddenboss', 'bossallowed'], 'wei'],
    cljg_baijiwenyuan: ['male', 'wei', 4, ['cljg_jiaoxie', 'olduorui', 'cljg_diaoling'], ['jiangeboss', 'hiddenboss', 'bossallowed'], 'wei'],
    cljg_fudibian: ['male', 'wei', 3, ['cljg_jiguan', 'yifa', 'cljg_kunlao'], ['jiangemech', 'hiddenboss', 'bossallowed'], 'wei'],
    cljg_tuntianchiwen: ['male', 'wei', 3, ['cljg_jiguan', 'cljg_biyan', 'cljg_tunshi'], ['jiangemech', 'hiddenboss', 'bossallowed'], 'wei'],
    cljg_shihuosuanni: ['male', 'wei', 3, ['cljg_jiguan', 'cljg_yuhuo', 'cljg_yanliao'], ['jiangemech', 'hiddenboss', 'bossallowed'], 'wei'],
    cljg_lieshiyazi: ['male', 'wei', 3, ['cljg_jiguan', 'clyl_enyuan', 'cljg_nailuo'], ['jiangemech', 'hiddenboss', 'bossallowed'], 'wei'],
    cljg_anbangqingluan: ['female', 'wu', 3, ['cljg_jiguan', 'clyl_suoxue', 'cljg_beijiang'], ['jiangemech', 'hiddenboss', 'bossallowed'], 'wu'],
    cljg_hujiangqilin: ['male', 'wu', 3, ['cljg_jiguan', 'cljg_runjiang', 'cljg_xiangxing'], ['jiangemech', 'hiddenboss', 'bossallowed'], 'wu'],
    cljg_guyupixiu: ['male', 'wu', 3, ['cljg_jiguan', 'olhongyuan', 'lanjiang'], ['jiangemech', 'hiddenboss', 'bossallowed'], 'wu'],
    cljg_shouchiqianjiao: ['male', 'wu', 3, ['cljg_jiguan', 'cljg_huchi', 'cljg_tengchuo'], ['jiangemech', 'hiddenboss', 'bossallowed'], 'wu'],
    cljg_ximengzijing: ['male', 'wu', 4, ['cljg_yege', 'cljg_poli', 'cljg_shameng'], ['jiangeboss', 'hiddenboss', 'bossallowed'], 'wu'],
    cljg_baohubofu: ['male', 'wu', 4, ['cljg_douhun', 'lizhan', 'cljg_angyang'], ['jiangeboss', 'hiddenboss', 'bossallowed'], 'wu'],
    cljg_yingjungongjin: ['male', 'wu', 4, ['cljg_yeyan', 'cljg_yuhuo', 'cljg_xiongzi'], ['jiangeboss', 'hiddenboss', 'bossallowed'], 'wu'],
    cljg_wuxiaameng: ['male', 'wu', 4, ['cljg_tanjiang', 'cljg_poxi', 'cljg_shenju'], ['jiangeboss', 'hiddenboss', 'bossallowed'], 'wu'],
    cljg_zhechongxingba: ['male', 'wu', 4, ['cljg_xihun', 'olduorui', 'cljg_huiwan'], ['jiangeboss', 'hiddenboss', 'bossallowed'], 'wu'],
    cljg_yuhuoboyan: ['male', 'wu', 4, ['cljg_cuilin', 'qyhc_qianjie', 'cljg_yibei'], ['jiangeboss', 'hiddenboss', 'bossallowed'], 'wu']
}
for (var x in qyhcCL.jiangeBoss) {
    qyhcCL.jiangeBoss[x][4].push('ext:群英荟萃乀摧林/jiange/image/' + x + '.jpg');
    qyhcCL.jiangeBoss[x][4].push('die:ext:群英荟萃乀摧林/' + (x == 'cljg_fuweizilong' ? 'audio/die/qyhc_zhaoyun' : ('jiange/die/' + x)));
}
qyhcCL.arenaReady.push((lib, game, ui, get, ai, _status, config) => {
    if (config.jiangechange) {
        game.phaseLoopJiange = function () {
            var next = game.createEvent('phaseLoop');
            next.player = _status.qyhcjiange_firstAct;
            next.setContent('phaseLoop');
            if (qyhcCL.beOwned10)
                for (var i of game.players) {
                    if (!i.node.seat) i.node.seat = decadeUI.element.create('seat', i);
                    i.seat = i.seatNum;
                    i.node.seat.innerHTML = get.cnNumber(i.seat, true);
                }
        };
        qyhcCL.jiange_eventMap = {
            s_dabaiergui: ["new_rejianxiong", "lianying", "zhiheng"],
            s_yalianghuoran: ["spyajun", "yashi", "reyingzi"],
            s_lindongjiangzhi: ["qyhc_yunshen", "yingyuan", "zhiren"],
            s_zhuribuhui: ["olqiangxi", "wushen", 'tianyi'],
            s_fengyuntubian: ["dcjianzheng", "olsbzhuri", 'olqiejian'],
            s_bingfengsanlu: ["qigong", "xinfu_bijing", 'heji'],
            s_duanbingxiangjie: ["rezaiqi", "olxiaosi", 'reduanbing'],
            s_juedifanji: ["dzkanpo", "oldaili", 'xinfu_youdi'],
            s_wanfumokai: ["jixian", "xinkuanggu", 'yongjin'],
            s_hushidandan: ["clyl_yushou", "weijing", 'jiang'],
            s_baidujiuzhe: ['olhuiqi', 'dczhizhe', 'sbhunzi'],
            s_gongqibubei: ['new_retuxi', 'lianying', 'refenyin'],
            s_duanliangjiezi: ['sbduanliang', 'reqimou', 'hongyuan'],
            s_dibengshancui: ['refankui', 'youyan', 'xindanshou'],
            s_gushouchengbang: ['xinfencheng', 'rerende', 'dcquanshou'],
            s_shirupozhu: ["olduorui", "olpaoxiao", "decadepojun"],
            s_chuqibuyi: ["nzry_feijun", "longdan", "yingjian"],
            s_bingjiaojiangao: ["aocai", "sbqicai", "dczhangcai"],
            s_liangjunxiangchi: ["changbiao", "wusheng", "dcshexue"],
            s_touduyinping: ["dccuixin", "olzhenying", "dujin"],
            s_ceyiyuhui: ["zlhuji", "xinfu_langxi", "olcuipo"]
        };
        qyhcCL.jiange_eventTrans = {
            s_zhuribuhui: "逐日不悔",
            s_fengyuntubian: "风云突变",
            s_bingfengsanlu: "兵分三路",
            s_duanbingxiangjie: "短兵相接",
            s_juedifanji: "绝地反击",
            s_wanfumokai: "万夫莫开",
            s_hushidandan: "虎视眈眈",
            s_baidujiuzhe: "百步九折",
            s_gongqibubei: "攻其不备",
            s_duanliangjiezi: "断粮截辎",
            s_dibengshancui: "地崩山摧",
            s_gushouchengbang: "固守城邦",
            s_shirupozhu: "势如破竹",
            s_chuqibuyi: "出其不意",
            s_bingjiaojiangao: "兵骄将傲",
            s_liangjunxiangchi: "两军相持",
            s_touduyinping: "偷渡阴平",
            s_ceyiyuhui: "侧翼迂回",
            s_lindongjiangzhi: "凛冬将至",
            s_dabaiergui: "大败而归",
            s_yalianghuoran: "雅量霍然",
            a_baiguiyexing: '百鬼夜行',
            b_cljg_shenguiwuqian: '虎牢再现',
            a_yuanshenqidong: '袁神,启动!'
        };
        qyhcCL.isJianger = function (player) {
            var config = get.config('jiange_eventer');
            if (typeof player == 'string') {
                if (player[0] == 's') {
                    player = '本局游戏内,魏势力角色获得技能〖' + get.translation(qyhcCL.jiange_eventMap[player][0]) + '〗,蜀势力角色获得技能〖' + get.translation(qyhcCL.jiange_eventMap[player][1]) + '〗,吴势力角色获得技能〖' + get.translation(qyhcCL.jiange_eventMap[player][2]) + '〗.已拥有则改为获得〖重生〗.';
                } else player = get.translation('qyhcCL_jiange_event_' + player);
                if (config == 'ME') return player.replace(/势力角色/g, '势力的主视角');
                if (config == 'F') return player.replace(/势力角色/g, '势力己方角色');
                return player;
            }
            if (config == 'ME') return player == game.me;
            if (config == 'F') return player.identity == game.me.identity;
            return true;
        };
        qyhcCL.jiange_event = function (name) {
            var baseMap = { wei: 0, shu: 1, wu: 2 };
            if (name[0] == 's') {
                for (var i of game.players) if (qyhcCL.isJianger(i)) {
                    var skill = qyhcCL.jiange_eventMap[name][baseMap[i.identity]];
                    if (!i.hasSkill(skill, null, false, false)) i.addSkill(skill); else i.addSkill('clyl_dengjie_chongsheng');
                }
            } else if (name[0] == 'b') {
                var bossname = name.slice(2);
                var i = game.filterPlayer((current) => (current != game.me)).randomGet();
                _status.jiange_eventlogger = i;
                i.init(bossname);
                i.dengjie = 6;
                i.type = 'boss';
                switch (get.config('jiange_dengjieND')) {
                    case '3': i.maxHp = 32; i.hp = 32; break;
                    case '2': i.maxHp = 25; i.hp = 25; break;
                    default: i.maxHp = 18; i.hp = 18; break;
                }
                for (var j of game.players) j.side = true;
                i.side = false;
                i.identity = 'enemy';
                _status.qyhcjiange_firstAct = i;
                i.update();
            } else if (name[0] == 'a') {
                if (name == 'a_baiguiyexing') {
                    var i = game.filterPlayer((current) => (current != game.me)).randomGet();
                    _status.jiange_eventlogger = i;
                    i.init(qyhcCL.BOSSname.randomGet(), qyhcCL.XIAOname.randomGet());
                    i.dengjie = 6;
                    i.type = 'boss';
                    switch (get.config('jiange_dengjieND')) {
                        case '3': i.maxHp = 25; i.hp = 25; break;
                        case '2': i.maxHp = 18; i.hp = 18; break;
                        default: i.maxHp = 10; i.hp = 10; break;
                    }
                    for (var j of game.players) j.side = true;
                    i.side = false;
                    i.identity = 'enemy';
                    _status.qyhcjiange_firstAct = i.previous.previous.previous;
                    i.addSkill('clyl_dengjie_boss_4');
                    i.update();
                } else if (name == 'a_yuanshenqidong') {
                    _status.jiange_eventlogger = game.me;
                    game.me.type = 'boss';
                    switch (get.config('jiange_dengjieND')) {
                        case '3': game.me.maxHp = 1; game.me.hp = 1; game.me.dengjie = 1; break;
                        case '2': game.me.maxHp = 4; game.me.hp = 4; game.me.dengjie = 3; break;
                        default: game.me.maxHp = 10; game.me.hp = 10; game.me.dengjie = 6; break;
                    }
                    for (var j of game.players) j.side = true;
                    game.me.side = false;
                    game.me.identity = 'enemy';
                    _status.qyhcjiange_firstAct = game.me;
                    game.me.addSkill(['xinfu_tushe', 'luanji']);
                    game.me.update();
                }
            }
        }
        qyhcCL.$jiange_event = function (name, logger) {
            var baseMap = { wei: 0, shu: 1, wu: 2 };
            if (!logger) logger = game.me;
            logger.$skill(get.translation(name));
            if (name[0] == 's') {
                var skill = qyhcCL.jiange_eventMap[name][baseMap[logger.identity]];
                game.me.logSkill_qyhccl(skill);
            } else if (name[0] == 'b') {
                switch (name) {
                    case 'b_cljg_shenguiwuqian':
                        game.trySkillAudio('cljg_shenqu', logger, true);
                        break;
                }
            } else if (name == 'a_baiguiyexing') game.trySkillAudio(lib.character[logger.name][3].randomGet(), logger, true); else if (name == 'a_yuanshenqidong') game.trySkillAudio('luanji', logger, true);
        }
        for (var i in qyhcCL.jiange_eventTrans) lib.translate[i] = qyhcCL.jiange_eventTrans[i];
        qyhcCL.jiangetemp = lib.mode.versus.config.update;
        lib.mode.versus.config.update = function (config, map) {
            qyhcCL.jiangetemp(config, map);
            if (config.versus_mode == 'three') map.reset_character_three.show(); else map.reset_character_three.hide();
            if (config.versus_mode == 'jiange') {
                map.jiange_moshi.show();
                map.jiange_shili.show();
                map.jiange_zhen.show();
                map.jiange_event.show();
                if (config.jiange_event == 'NONE') map.jiange_eventer.hide(); else map.jiange_eventer.show();
                map.jiange_dengjieND.show();
                map.jiange_dengjieFr.show();
                map.jiange_freegroup.show();
                map.jiange_xjsx.show();
                map.jiange_spkj.show();
                map.jiange_dengjieFj.show();
                if (lib.config.mode_config.versus && lib.config.mode_config.versus.double_character_jiange) lib.config.mode_config.versus.double_character_jiange = false;
                map.double_character_jiange.hide();
                map.change_choice.hide();
                map.jiange_qxjiaxue.show();
                map.jiange_yljiaxue.show();
            } else {
                map.jiange_qxjiaxue.hide();
                map.jiange_yljiaxue.hide();
                if (config.versus_mode != 'guandu') map.change_choice.show();
                map.jiange_moshi.hide();
                map.jiange_shili.hide();
                map.jiange_zhen.hide();
                map.jiange_event.hide();
                map.jiange_eventer.hide();
                map.jiange_freegroup.hide();
                map.jiange_dengjieND.hide();
                map.jiange_xjsx.hide();
                map.jiange_spkj.hide();
                map.jiange_dengjieFr.hide();
                map.jiange_dengjieFj.hide();
            }
        }
        lib.mode.versus.config.jiange_shili = {
            name: '游戏势力',
            init: 'RANWEIHAN',
            intro: '设置参与游戏的势力和敌我情况',
            item: {
                WEIHAN: '己魏敌蜀',
                HANWEI: '己蜀敌魏',
                RANWEIHAN: "魏蜀随机",
                WEIWU: '己魏敌吴',
                WUWEI: '己吴敌魏',
                RANWEIWU: "魏吴随机",
                HANWU: '己蜀敌吴',
                WUHAN: '己吴敌蜀',
                RANHANWU: "吴蜀随机",
                MEWEI: "己魏敌随机",
                MESHU: "己蜀敌随机",
                MEWU: "己吴敌随机",
                DIWEI: "己随机敌魏",
                DISHU: "己随机敌蜀",
                DIWU: "己随机敌吴",
                RAN: "完全随机"
            }
        }
        lib.mode.versus.config.jiange_moshi = {
            name: '游戏模式',
            init: 'OL',
            intro: '设置游戏模式(现OL式:己方2玩家+1英灵+1器械VS敌方2英灵+2器械;古早式:己方2玩家+1英灵+1器械VS敌方2玩家+1英灵+1器械;仅器械英灵:己方2英灵+2器械VS敌方2英灵+2器械)',
            item: {
                OL: '现OL式',
                PVP: "古早式",
                EVE: "仅器械英灵",
                RAN: "随机"
            }
        }
        lib.mode.versus.config.jiange_event = {
            name: '游戏事件',
            init: 'NONE',
            intro: '设置游戏事件(官方事件:逐日不悔、风云突变、兵分三路、短兵相接、绝地反击、万夫莫开、虎视眈眈、百步九折、攻其不备、断粮截辎、地崩山摧、固守城邦、势如破竹、出其不意、兵骄将傲、两军相持、偷渡阴平、侧翼迂回,部分事件有一定改动)',
            item: {
                RAN: '随机',
                guanfang: '官方事件随机',
                ...qyhcCL.jiange_eventTrans,
                NONE: "无"
            }
        }
        lib.mode.versus.config.jiange_eventer = {
            name: '游戏事件生效目标',
            init: 'A',
            intro: '设置游戏事件生效的目标',
            item: {
                ME: '玩家本人',
                F: '玩家势力角色',
                A: '所有角色'
            }
        }
        lib.mode.versus.config.jiange_zhen = {
            name: '游戏阵型',
            intro: '设置阵型(从左到右依次为一至八号位)',
            init: 'A',
            item: {
                A: '己己己己敌敌敌敌',
                B: '己己敌敌敌敌己己',
                C: "己敌己敌己敌己敌",
                D: "敌己敌己敌己敌己",
                E: "己敌敌己己敌敌己",
                F: "随机"
            }
        }
        lib.mode.versus.config.jiange_spkj = {
            name: '队内手牌互相可见',
            intro: '可在牌局内右键单击队友武将牌查看其手牌',
            init: false
        }
        lib.mode.versus.config.jiange_xjsx = {
            name: '选将顺序',
            intro: '设置选择武将的顺序(从左到右优先级依次降低,友表示队友,敌表示对手,我表示自己)',
            init: 'FEM',
            item: {
                FEM: '友敌我',
                FME: '友我敌',
                EMF: '敌我友',
                MEF: '我敌友',
                RAN: '随机'
            }
        }
        lib.mode.versus.config.jiange_freegroup = {
            name: '势力自由',
            init: false,
            intro: '武将不必选同势力将'
        }
        lib.mode.versus.config.jiange_yljiaxue = {
            name: '英灵加血',
            init: '1',
            intro: '由于伤害较高,英灵血低会导致先手优势过大',
            item: {
                0: '不加',
                1: "加1点",
                2: "加2点",
                3: "加3点",
                4: "加4点"
            }
        }
        lib.mode.versus.config.jiange_qxjiaxue = {
            name: '器械加血',
            init: '3',
            intro: '由于伤害较高,器械血低会导致先手优势过大',
            item: {
                0: '不加',
                1: "加1点",
                2: "加2点",
                3: "加3点",
                4: "加4点"
            }
        }
        lib.mode.versus.config.jiange_dengjieND = {
            name: '游戏难度',
            intro: '普通模式中,敌方所有武将一阶;进阶模式中,敌方所有武将随机2~4阶(60%,30%,10%);困难模式中,敌方所有武将随机3~5阶(30%,50%,20%)<br>关于等阶说明,请查看选项-其他-帮助-等阶细则中的内容',
            init: '1',
            item: {
                1: '普通',
                2: "进阶",
                3: "困难"
            }
        }
        lib.mode.versus.config.jiange_dengjieFr = {
            name: '己方英灵器械等阶',
            intro: '设置己方英灵和器械的等阶(进阶式随机:武将随机2~4阶(60%,30%,10%);困难式随机:武将随机3~5阶(30%,50%,20%))<br>关于等阶说明,请查看选项-其他-帮助-等阶细则中的内容',
            init: '1',
            item: {
                1: '一阶',
                2: "二阶",
                3: "三阶",
                4: "四阶",
                5: "五阶",
                RANB: "进阶式随机",
                RANC: "困难式随机"
            }
        }
        lib.mode.versus.config.jiange_dengjieFj = {
            name: '自己和己方武将等阶',
            intro: '设置自己(game.me)和己方武将的等阶<br>关于等阶说明,请查看选项-其他-帮助-等阶细则中的内容',
            init: '5',
            item: {
                1: '一阶',
                2: "二阶",
                3: "三阶",
                4: "四阶",
                5: "五阶"
            }
        }
    }
    qyhcCL.jiangeSkills = {
        cljg_Draw: {
            trigger: { player: 'phaseDrawBegin2', global: 'gameDrawBegin' },
            filter(event, player, name) {
                if (name == 'gameDrawBegin') return player.dengjie && player.dengjie > 2;
                return !event.numFixed && player.dengjie && player.dengjie > 3;
            },
            charlotte: true,
            forced: true,
            content() {
                if (trigger.name == 'phaseDraw') {
                    trigger.num++;
                    if (player.dengjie == 6) trigger.num++;
                } else {
                    player.directgain(get.cards(1));
                    if (player.dengjie > 3) player.directgain(get.cards(1));
                }
            }
        },
        cljg_shaEquip: {
            trigger: { global: 'skillStart' },
            filter(event, player) {
                return player.dengjie && player.dengjie > 1;
            },
            charlotte: true,
            forced: true,
            ruleSkill: true,
            content() {
                var equip = get.cardPile(function (card) {
                    return get.type(card) == 'equip' && player.hasUseTarget(card);
                });
                if (equip) player.chooseUseTarget(equip, true, 'nopopup', 'noanimate', 'noTargetDelay');
            },
            mod: {
                cardUsable(card, player, num) {
                    if (player.dengjie && player.dengjie > 2 && card.name == 'sha') return num + 1;
                }
            }
        },
        cljg_niepan: {
            enable: 'chooseToUse',
            mark: true,
            limited: true,
            init(player, skill) {
                if (!player.storage.cljg_niepan) player.storage.cljg_niepan = false;
            },
            filter(event, player) {
                return event.type == 'dying' && player == event.dying;
            },
            content() {
                'step 0'
                player.awakenSkill('cljg_niepan');
                player.storage.cljg_niepan = true;
                player.discard(player.getCards('hej'));
                'step 1'
                player.link(false);
                'step 2'
                player.turnOver(false);
                'step 3'
                player.draw(3);
                'step 4'
                if (player.hp < 3) player.recover(3 - player.hp);
            },
            ai: {
                order() {
                    var player = _status.event.player;
                    if (player.hp < -1) return 10;
                    if (player.countCards('he') <= 1 || player.countCards('j') > 0) return 10;
                    return 1;
                },
                skillTagFilter(player, arg, target) {
                    if (player != target || player.storage.oldniepan) return false;
                },
                save: true,
                result: {
                    player(player) {
                        if (player.hp <= 0) return 10;
                        return -1;
                    }
                },
                threaten(player, target) {
                    if (!target.storage.cljg_niepan) return 0.6;
                }
            },
            intro: {
                content: 'limited'
            }
        },
        cljg_xiaorui: {
            forced: true,
            audio: 'cljg2',
            logTarget: 'player',
            trigger: { global: 'useCardAfter' },
            filter(event, player) {
                var target = event.player;
                return event.addCount !== false && target && target.isIn() && event.card.name == 'sha' && target.isFriendsOf(player) && target.getHistory('sourceDamage', function (evt) {
                    return evt.card == event.card && evt.parent.type == 'card';
                }).length > 0;
            },
            content() {
                trigger.NotAddCount(0);
            }
        },
        cljg_huchen: {
            trigger: {
                global: 'dieAfter'
            },
            forced: true,
            audio: 'cljg2',
            filter(event, player) {
                return event.player != player;
            },
            logTarget: (event, player) => (player.getFriends(true)),
            content() {
                game.asyncDraw(qyhcCL.getLogTargets(event).sortBySeat(_status.currentPhase), (player) => {
                    if (player == _status.currentPhase) return 3;
                    return 1;
                });
            }
        },
        cljg_fengjian: {
            trigger: { source: 'damageEnd' },
            forced: true,
            audio: 'cljg2',
            global: 'cljg_fengjian2',
            mark: true,
            filter(event, player, name) {
                player.trymarkAutoSkill('cljg_fengjian');
                return event.player != player && event.player.isIn() && !event.player.hasSkill('cljg_fengjian', null, false, false);
            },
            logTarget: 'player',
            content() {
                trigger.player.addTempSkill('cljg_fengjian', { player: 'phaseAfter' });
            },
            intro: {
                content(storage, player) {
                    var str = '<center>造成伤害后后令受到伤害的角色获得〖封缄〗直到伤者回合结束';
                    if (player.group != 'shu') str += '<br>由于势力不为蜀,其的敌方角色计算与其的距离为1、对其使用的牌不计入次数限制且不能被响应';
                    return str + '</center>';
                }
            },
            mod: {
                globalTo(from, to) {
                    if (to.group != 'shu' && from.isEnemiesOf(to)) return -Infinity;
                }
            },
            ai: {
                threaten() {
                    var player = _status.event.player;
                    if (player.group != 'shu') return 3;
                    return 1;
                }
            }
        },
        cljg_fengjian2: {
            trigger: {
                player: 'useCard1'
            },
            firstDo: true,
            priority: Infinity,
            forced: true,
            silent: true,
            filter(event, player) {
                for (var i of event.targets) if (i.group != 'shu' && i.isEnemiesOf(player) && i.hasSkill('cljg_fengjian')) return true;
                return false;
            },
            content() {
                if (trigger.addCount !== false) {
                    trigger.NotAddCount(0, 0);
                    game.log(trigger.card, '因', '#g〖封缄〗', '不计入次数限制且不能被响应');
                    trigger.directHit.addArray(game.players.concat(game.dead));
                } else {
                    game.log(trigger.card, '因', '#g〖封缄〗', '不能被响应');
                    trigger.directHit.addArray(game.players.concat(game.dead));
                }
            },
            ai: {
                directHit_ai: true,
                skillTagFilter(player, tag, arg) {
                    if (arg && arg.card && arg.card.targets); else return false;
                    for (var i of arg.card.targets) if (i.group != 'shu' && i.isEnemiesOf(player) && i.hasSkill('cljg_fengjian')) return true;
                    return false;
                }
            }
        },
        cljg_keding: {
            mod: {
                targetInRange(card) {
                    if (card.name == 'sha') return true;
                },
                selectTarget(card, player, range) {
                    if (typeof card == 'object' && card.name == 'sha' && range[1] != -1) range[1]++;
                }
            },
            silent: true,
            audio: 'cljg2',
            trigger: {
                player: 'useCard1'
            },
            firstDo: true,
            forced: true,
            filter(event, player) {
                return event.card.name == 'sha';
            },
            content() {
                player.logSkill_qyhccl('cljg_keding');
            },
            forced: true,
            ai: {
                unequip: true,
                skillTagFilter(player, tag, arg) {
                    if (!arg || !arg.card || arg.card.name != 'sha') return false;
                }
            }
        },
        cljg_danjing: {
            audio: 'cljg2',
            content() {
                'step 0'
                player.useCard({ name: 'tao' }, target).set('delay', false);
                'step 1'
                player.loseHp();
                'step 2'
                player.turnOver(false);
            },
            enable: 'chooseToUse',
            filter(event, player) {
                if (player.hp <= 1 || event.type != 'dying') return false;
                var dying = event.dying;
                return dying && dying.isIn() && event.dying.hp <= 0 && dying.isFriendsOf(player) && lib.filter.cardSavable({ name: 'tao' }, player, dying);
            },
            filterTarget(event, player, target) {
                return _status.event.dying == target && lib.filter.cardSavable({ name: 'tao' }, player, target);
            },
            selectTarget: [-1, -1],
            ai: {
                order: 11,
                skillTagFilter(player, arg, target) {
                    return player.hp > 1 && target.isFriendsOf(player);
                },
                save: true,
                result: {
                    player: -1,
                    target(player, target) {
                        return get.effect(target, { name: 'tao' }, player, target);
                    }
                },
                threaten(target, player) {
                    if (target.isEnemiesOf(player) && player.hp > 1) return 114514;
                    return 3;
                }
            }
        },
        cljg_jiaoxie: {
            audioname2: {
                clgd_zhangliao: 'ziqu'
            },
            enable: 'phaseUse',
            usable: 1,
            selectTarget() {
                var player = _status.event.player;
                var players = game.countPlayer(function (current) {
                    return lib.skill.cljg_jiaoxie.filterTarget(null, player, current);
                });
                if (players >= 2) return [1, 2];
                return 1;
            },
            audio: 'cljg2',
            prompt: '<center>选择至多两名有牌的敌方角色<br>若其为器械,你获得其一张牌,否则其交给你一张牌</center>',
            filter(event, player) {
                return game.hasPlayer(function (current) {
                    return lib.skill.cljg_jiaoxie.filterTarget(null, player, current);
                });
            },
            filterTarget(card, player, target) {
                return target.isEnemiesOf(player) && target.countCards('he') > 0;
            },
            content() {
                'step 0'
                var he = target.getCards('he');
                if (!he.length) event.finish();
                else if (target.type == 'mech') {
                    player.gainPlayerCard('he', true, '获得' + get.translation(target) + '一张牌', target);
                    event.finish();
                } else {
                    if (he.length > 1) target.chooseCard('he', true, '###' + get.translation(player) + '对你发动了〖缴械〗###<center>请将一张牌交给其</center>'); else event._result = { bool: true, cards: he };
                }
                'step 1'
                if (result.bool) target.give(result.cards, player);
            },
            ai: {
                order: 11,
                result: {
                    player(player, target) {
                        if (target.type == 'mech') {
                            if (target.countGainableCards(player, 'he') == 0) return 0;
                            return 1;
                        }
                        return 0.2;
                    },
                    target(player, target) {
                        if (target.type == 'mech') {
                            return get.effect_use(target, { name: 'shunshou_copy2' }, player, target) / 2;
                        }
                        return get.yanzhuEffect(target);
                    }
                }
            }
        },
        cljg_diaoling: {
            enable: 'phaseUse',
            usable: 1,
            selectTarget() {
                if (ui.selected.targets.length == 2) qyhcCL.diaolingtargets = ui.selected.targets.slice(0);
                return 2;
            },
            audio: 'cljg2',
            soulSkill: true,
            categories: () => (['英灵技']),
            creatTrigger: true,
            prompt: '移动场上一张牌',
            complexTarget: true,
            targetprompt: ['被移走', '移动目标'],
            filter(event, player) {
                for (var i of game.players) if (!i.hasSkill('qyhc_bediaohulishaned')) i.classList.remove('unselectable2');
                return player.canMoveCard(null, false);
            },
            filterTarget(card, player, target) {
                if (ui.selected.targets.length) {
                    var from = ui.selected.targets[0];
                    var js = from.getCards('j');
                    for (var i = 0; i < js.length; i++) if (target.canAddJudge(js[i])) return true;
                    if (target.isMin()) return false;
                    var es = from.getCards('e');
                    for (var i = 0; i < es.length; i++) if (target.canEquip(es[i])) return true;
                    return false;
                }
                else return target.canBeMoved('ej');
            },
            chooseButton: {
                dialog(event, player) {
                    if (!qyhcCL.diaolingtargets || !qyhcCL.diaolingtargets[0] || !qyhcCL.diaolingtargets[1]) return ui.create.dialog('群英荟萃乀摧林扩展出错!请联系作者修复BUG!');
                    if (!_status.auto && player == game.me) {
                        qyhcCL.diaolingtargets[0].line(qyhcCL.diaolingtargets[1]);
                        for (var i of game.players) if (!qyhcCL.diaolingtargets.includes(i)) i.classList.add('unselectable2');
                    }
                    var carde = qyhcCL.diaolingtargets[0].getCards('e');
                    var cardj = qyhcCL.diaolingtargets[0].getCards('j');
                    var dialog = ui.create.dialog('〖调令〗请选择以下一张牌');
                    dialog.addText('你将' + get.translation(qyhcCL.diaolingtargets[0]) + '场上的此牌移动给' + get.translation(qyhcCL.diaolingtargets[1]));
                    if (carde.length) dialog.addText('装备区'), dialog.add(carde);
                    if (cardj.length) dialog.addText('判定区'), dialog.add(cardj);
                    return dialog;
                },
                check(button) {
                    var player = _status.event.player;
                    var targets0 = qyhcCL.diaolingtargets[0];
                    var targets1 = qyhcCL.diaolingtargets[1];
                    if (get.attitude(player, targets0) > 0 && get.attitude(player, targets1) < 0) {
                        if (get.position(button.link) == 'j') return 12;
                        if (get.value(button.link, targets0) < 0 && get.effect(targets1, button.link, player, targets1) > 0) return 10;
                        return 0;
                    }
                    else {
                        if (get.position(button.link) == 'j') return -10;
                        return get.value(button.link) * get.effect(targets1, button.link, player, targets1);
                    }
                },
                filter(button) {
                    var targets1 = qyhcCL.diaolingtargets[1];
                    if (get.position(button.link) == 'j') return targets1.canAddJudge(button.link);
                    else return targets1.canEquip(button.link);
                },
                backup(links, player) {
                    for (var i of game.players) i.classList.remove('unselectable2');
                    var next = {
                        audio: 'cljg_diaoling',
                        filterTarget(card, player, target) {
                            return qyhcCL.diaolingtargets.includes(target);
                        },
                        multitarget: true,
                        selectTarget: [-1, -1],
                        content() {
                            var link = lib.skill.cljg_diaoling_backup.link;
                            var T = [];
                            if (qyhcCL.diaolingtargets[0] != targets[0]) T[0] = targets[1], T[1] = targets[0];
                            else T[0] = targets[0], T[1] = targets[1];
                            T[0].line(T[1]);
                            if (get.position(link) == 'e') T[1].equip(link);
                            else if (link.viewAs) T[1].addJudge({ name: link.viewAs }, [link]);
                            else T[1].addJudge(link);
                            T[0].$give(link, T[1], false);
                            game.log(T[0], '的', link, '被移动给了', T[1]);
                        }
                    };
                    lib.translate.cljg_diaoling_backup = '调令';
                    next.link = links[0];
                    return next;
                }
            },
            ai: {
                order: 12,
                result: {
                    player(player, target) {//摘自官方移动牌
                        var att = get.attitude(player, target);
                        var sgnatt = get.sgn(att);
                        if (ui.selected.targets.length == 0) {
                            if (att > 0) {
                                if (target.countCards('j', function (card) {
                                    return game.hasPlayer(function (current) {
                                        return current != target && current.canAddJudge(card) && get.attitude(player, current) < 0;
                                    })
                                })) return 14;
                                if (target.countCards('e', function (card) {
                                    return get.value(card, target) < 0 && game.hasPlayer(function (current) {
                                        return current != target && get.attitude(player, current) < 0 && current.canEquip(card) && get.effect(target, card, player, player) < 0;
                                    });
                                }) > 0) return 9;
                            }
                            else if (att < 0) if (game.hasPlayer(function (current) {
                                if (current != target && get.attitude(player, current) > 0) {
                                    var es = target.getCards('e');
                                    for (var i = 0; i < es.length; i++) if (get.value(es[i], target) > 0 && current.canEquip(es[i]) && get.effect(current, es[i], player, player) > 0) return true;
                                }
                            })) return -att;
                            return 0;
                        }
                        var es = ui.selected.targets[0].getCards('e');
                        var i;
                        var att2 = get.sgn(get.attitude(player, ui.selected.targets[0]));
                        for (i = 0; i < es.length; i++)
                            if (sgnatt != 0 && att2 != 0 && sgnatt != att2 && get.sgn(get.value(es[i], ui.selected.targets[0])) == -att2 && get.sgn(get.effect(target, es[i], player, target)) == sgnatt && target.canEquip(es[i])) return Math.abs(att);
                        if (i == es.length && (!ui.selected.targets[0].countCards('j', function (card) {
                            return target.canAddJudge(card);
                        }) || att2 <= 0)) return 0;
                        return -att * att2;
                    }
                }
            }
        },
        cljg_yege: {
            enable: 'phaseUse',
            usable: 1,
            audio: 'cljg2',
            selectTarget() {
                var player = _status.event.player;
                if (player.storage.cljg_yege) return [1, player.storage.cljg_yege];
                return 114514;
            },
            creatTrigger: true,
            filter(event, player) {
                if (player.storage.cljg_yege === undefined) player.storage.cljg_yege = 3;
                if (!player.storage.cljg_yege) return false;
                return game.hasPlayer((current) => {
                    return current.countDiscardableCards(player, 'e') > 0;
                });
            },
            filterTarget(card, player, target) {
                return target.countDiscardableCards(player, 'e');
            },
            content() {
                target.discard(target.getDiscardableCards(player, 'e'), player).set('delay', false);
            },
            prompt() {
                var player = _status.event.player;
                if (player.storage.cljg_yege) {
                    var num = player.storage.cljg_yege;
                    if (num > 1) return '请选择至多<span class=greentext>' + num + '</span>名角色,你依次弃置这些角色装备区内所有牌<br>某名己方角色的某空装备栏会置入一张装备';
                    return '请选择<span class=greentext>1</span>名角色,你弃置其装备区内所有牌<br>某名己方角色的某空装备栏会置入一张装备';
                }
                return '';
            },
            contentAfter() {
                var arr = [];
                for (var x of player.getFriends(true)) {
                    for (var i = 1; i < 6; i++) {
                        var count = x.countEmptySlot(i);
                        for (var u = 0; u < count; u++) arr.push([x, i]);
                    }
                }
                if (arr.length) {
                    arr = arr.randomGet();
                    var equips = [];
                    switch (arr[1]) {
                        case 1:
                            for (var i of ["bintieshuangji", "changandajian_equip1", "chixueqingfeng", "chiyanzhenhunqin", "cixiong", "dagongche", "fangtian", "feilongduofeng", "guanshi", "guding", "guilongzhanyuedao", "gx_lingbaoxianhu", "gx_taijifuchen", "hanbing", "liannu", "longfenghemingjian", "meiyingqiang", "piliche", "pilitoushiche", "pyzhuren_club", "pyzhuren_diamond", "pyzhuren_heart", "pyzhuren_shandian", "pyzhuren_spade", "qibaodao", "qilin", "qinggang", "qinglong", "qinnu", "rewrite_zhuge", "sanjian", "taipingyaoshu", "toushiche", "wuliu", "wushuangfangtianji", "wutiesuolian", "wuxinghelingshan", "xingtianpojunfu", "xiuluolianyuji", "yajiaoqiang", "yinyueqiang", "yitianjian", "zhangba", "zhenlongchangjian", "zhuge", "zhungangshuo", "zhuque"]) if (lib.card[i]) equips.push(i);
                            break;
                        case 2:
                            for (var i of ["bagua", "baiyin", "changandajian_equip2", "guofengyupao", "gx_chongyingshenfu", "heiguangkai", "hongmianbaihuapao", "huxinjing", "lanyinjia", "linglongshimandai", "minguangkai", "qimenbagua", "renwang", "rewrite_bagua", "rewrite_baiyin", "rewrite_lanyinjia", "rewrite_renwang", "rewrite_tengjia", "suolianjia", "yexingyi", "diqi", "yinfengjiacl"]) if (lib.card[i]) equips.push(i);
                            break;
                        case 3:
                            for (var i of ["changandajian_equip3", "dilu", "hualiu", "juechenjinge", "jueying", "zhuahuang"]) if (lib.card[i]) equips.push(i);
                            break;
                        case 4:
                            for (var i of ["changandajian_equip4", "chitu", "dawan", "jingfanma", "qicaishenlu", "yuzhui", "zixin"]) if (lib.card[i]) equips.push(i);
                            break;
                        case 5:
                            for (var i of ["changandajian_equip5", "cheliji_feilunzhanyu", "cheliji_sichengliangyu", "cheliji_tiejixuanyu", "chuanguoyuxi", "dinglanyemingzhu", "lingsheji", "muniu", "sanlve", "shanrangzhaoshu", "shufazijinguan", "taigongyinfu", "tianjitu", "xinge", "xuwangzhimian", "yuxi", "zhaogujing", "zhuangshu_basic", "zhuangshu_equip", "zhuangshu_trick"]) if (lib.card[i]) equips.push(i);
                            break;
                    }
                    if (equips.length) {
                        player.line(arr[0]);
                        arr[0].equip(game.createCard2(equips.randomGet()));
                        if (player.storage.cljg_yege) player.storage.cljg_yege--;
                    }
                }
            },
            ai: {
                order: 10,
                result: {
                    target(player, target) {
                        var ans = 0;
                        var es = target.getDiscardableCards(player, 'e');
                        for (var i of es) ans -= get.value(i, target);
                        if (ans >= 0) return -es.length / 2;
                        if (target.hasSkillTag('noe')) ans /= 2;
                        return ans;
                    }
                }
            }
        },
        cljg_kunlao: {
            trigger: { player: 'phaseJieshuBegin' },
            forced: true,
            audio: 'cljg',
            content() {
                "step 0"
                player.chooseTarget('〖困牢〗你可以令一名敌方角色翻面', lib.filter.enemies).set('ai', ai.turnoverEffect);
                "step 1"
                if (result.bool) {
                    result.targets[0].turnOver();
                }
            },
            ai: {
                threaten: 1.7
            }
        },
        cljg_suwei: { audio: 'cljg' },
        cljg_bashi: {
            trigger: { global: 'useCardToPlayered' },
            filter(event, player) {
                if (event.parent.triggeredTargets3.length != 1) return false;
                if (event.card && (event.card.name == 'sha' || get.type(event.card) == 'trick') && !player.isTurnedOver()); else return false;
                if (qyhcCL.willAutoCancel(player, 'cljg_bashi', true) && lib.skill.cljg_bashi.check(event, player, 'notAI')) return false;
                return true;
            },
            audio: 'cljg2',
            prompt2(event, player) {
                return '<center>翻面并令此牌对己方角色' + get.translation(player.getFriends(true)) + '无效<br>己方角色各摸一张牌' + (_status.currentPhase ? (",你对" + get.translation(_status.currentPhase) + "造成2点伤害") : "") + '</center>'
            },
            check(event, player, check3) {
                var eff = 0;
                var evt = event.parent;
                var resSha = get.tag(event.card, 'respondSha');
                var resShan = get.tag(event.card, 'respondShan');
                var isDamage = get.tag(event.card, 'damage');
                for (var i of event.targets) {
                    if (evt.excluded.includes(i)) continue;
                    if (i.isEnemiesOf(player)) continue;
                    var subeff = get.effect(i, event.card, event.player, player);
                    if (subeff < 0 && check3 === 'notAI') return false;
                    if (resSha && !player.hasCard('sha', 'hes')) eff += subeff;
                    else if (resShan && !player.hasCard('shan', 'hes')) eff += subeff;
                    else if (isDamage) {
                        if (event.card.name == 'shuiyanqijunx') eff += (player.countCards('e') < 2) ? subeff : 0;
                        else if (event.card.name == 'huogong') eff += subeff / 3;
                        else eff += subeff;
                    }
                }
                if (check3 === 'notAI') return true;
                if (_status.currentPhase && get.damageEffect(_status.currentPhase, player, player) < 0) return false;
                if (_status.currentPhase && _status.currentPhase.isFriendsOf(player) && _status.currentPhase.hasSkill('cljg_huodi')) return eff < 0;
                if (player.storage.Fskills && player.storage.Fskills.cljg_huodi) return eff < -2;
                return eff < -4;
            },
            content() {
                'step 0'
                player.turnOver(true);
                player.line(player.getFriends(true));
                trigger.parent.excluded.addArray(player.getFriends(true));
                'step 1'
                game.asyncDraw(player.getFriends(true).sortBySeat(_status.currentPhase));
                'step 2'
                if (_status.currentPhase) {
                    player.line(_status.currentPhase);
                    _status.currentPhase.damage(player, 2);
                }
            }
        },
        cljg_yanliao: {
            trigger: { player: 'phaseJieshuBegin' },
            forced: true,
            filter(event, player) {
                return player.getEnemies().length;
            },
            logTarget: (event, player) => (player.getEnemies()),
            audio: 'cljg',
            content() {
                "step 0"
                event.players = qyhcCL.getLogTargets(event);
                "step 1"
                if (event.players.length) {
                    event.players.sortBySeat(_status.currentPhase);
                    var current = event.players.shift();
                    current.damage('fire');
                    event.redo();
                }
            },
            ai: {
                threaten: 2
            }
        },
        cljg_huijian: {
            trigger: { player: 'phaseUseBegin' },
            forced: true,
            filter(event, player) {
                return player.getEnemies().length;
            },
            audio: 'cljg',
            content() {
                'step 0'
                for (var i of player.getEnemies()) i.addTempSkill('cljg_huijian_effect', 'phaseUseAfter');
                'step 1'
                player.chooseUseTarget({ name: 'wanjian' }, true, player.getEnemies());
            },
            ai: {
                threaten: 1.8
            },
            subSkill: {
                effect: {
                    charlotte: true,
                    mark: true,
                    marktext: "慧箭",
                    intro: {
                        content: "<center>不能使用牌,所有技能和防具失效</center>"
                    },
                    inherit: "baiban",
                    mod: {
                        cardEnabled: () => (false),
                        cardSavable: () => (false)
                    },
                    ai: { unequip2: true }
                }
            }
        },
        cljg_qiwu: {
            audio: 'cljg2',
            trigger: { player: 'useCard' },
            forced: true,
            filter(event, player) {
                if (event.card.suit == 'heart') return true;
                if (event.card.suit == 'club') return game.hasPlayer(function (current) {
                    return current.isDamaged();
                });
                return false;
            },
            content() {
                "step 0"
                if (trigger.card.suit == 'heart') {
                    player.chooseTarget('〖栖梧〗你可以对一名角色造成1点火焰伤害', function (card, player, target) {
                        return target.isEnemiesOf(player);
                    }).set('ai', ai.fireEffect);
                    event.goto(2);
                } else player.chooseTarget('〖栖梧〗你可以令一名角色回复1点体力', function (card, player, target) {
                    return target.isDamaged() && target.isFriendsOf(player);
                }).set('ai', ai.recoverEffect);
                "step 1"
                if (result.bool) {
                    result.targets[0].recover();
                }
                event.finish();
                "step 2"
                if (result.bool) {
                    result.targets[0].damage('fire');
                }
            },
            ai: {
                expose: 0.3,
                threaten: 1.5
            }
        },
        cljg_tianyu: {
            audio: 'cljg2',
            trigger: { player: ['phaseJieshuBegin'/*,'phaseZhunbeiBegin'*/] },
            forced: true,
            soulSkill: true,
            categories: () => (['英灵技']),
            filter(event, player) {
                return player.getEnemies((current) => (!current.isLinked())).length;
            },
            logTarget: (event, player) => (player.getEnemies()),
            content() {
                "step 0"
                event.targets = qyhcCL.getLogTargets(event);
                "step 1"
                if (event.targets.length) {
                    event.targets.sortBySeat(_status.currentPhase);
                    var current = event.targets.shift();
                    if (current && current.isIn()) if (!current.isLinked()) current.link(); else current.chooseToDiscard(true, '〖天狱〗请弃置一张牌');
                    event.redo();
                }
            }
        },
        cljg_jueji: {
            audio: 'cljg2',
            trigger: { global: 'phaseDrawBegin2' },
            filter(event, player) {
                return event.player.isEnemiesOf(player) && event.num > 0 && event.player.isDamaged();
            },
            forced: true,
            logTarget: 'player',
            content() {
                trigger.num--;
            },
            ai: {
                threaten: 1.4
            }
        },
        cljg_poxi: {
            audio: 'cljg2',
            trigger: { global: 'phaseDrawBegin2', source: 'damageSource' },
            filter(event, player, name) {
                if (name == 'damageSource') return event.player.isIn();
                return event.player.isEnemiesOf(player) && event.num > 0 && event.player.getHandcardLimit() == 0;
            },
            forced: true,
            logTarget: 'player',
            content() {
                if (trigger.name == 'damage') trigger.player.qyhc_moveMaxhand('cljg_poxi', -1);
                else trigger.num--;
                trigger.player.update();
            },
            ai: {
                threaten: 2.1
            }
        },
        cljg_shenju: {
            audio: 'cljg2',
            trigger: { global: 'phaseDiscardBegin' },
            filter(event, player) {
                return event.player.isFriendsOf(player) && event.player.countCards('h') > event.player.hp;
            },
            forced: true,
            logTarget: 'player',
            content() {
                trigger.player.qyhc_moveMaxhand('cljg_shenju');
            },
            ai: {
                threaten: 1.8
            }
        },
        cljg_tengchuo: {
            trigger: { global: ['phaseJieshuBegin'] },
            logTarget: 'player',
            forced: true,
            audio: 'cljg',
            filter(event, fromer) {
                var player = event.player;
                if (player.isEnemiesOf(fromer)) return false;
                return lib.filter.targetEnabled2({ name: 'dongzhuxianji' }, player, event.player);
            },
            content() {
                'step 0'
                player.useCard({ name: 'dongzhuxianji' }, trigger.player).set('audio', false).set('nopopup', true);
                'step 1'
                if (trigger.player.countCards('he') > 0) {
                    trigger.player.chooseCard('he', '〖腾踔〗请将一张牌置于牌堆顶', true).set('ai', ai.choosecardtop);
                } else event.finish();
                'step 2'
                if (result.bool) {
                    trigger.player.$gainLog('throwtop', result.cards);
                    trigger.player.lose(result.cards, ui.cardPile, 'insert');
                } else event.finish();
                'step 3'
                game.updateRoundNumber();
            }
        },
        cljg_xiangxing: {
            audio: 'cljg',
            trigger: { global: 'phaseDrawBegin2' },
            filter(event, player) {
                return event.player.isFriendsOf(player) && !event.numFixed;
            },
            forced: true,
            logTarget: 'player',
            content() {
                trigger.num++;
            },
            ai: {
                threaten: 1.4
            }
        },
        cljg_xiongzi: {
            audio: 'cljg2',
            trigger: { player: 'phaseDrawEnd' },
            filter(event, player) {
                return player.getFriends().length;
            },
            logTarget: (event, player) => (player.getFriends()),
            forced: true,
            soulSkill: true,
            categories: () => (['英灵技']),
            content() {
                game.asyncDraw(qyhcCL.getLogTargets(event).sortBySeat(_status.currentPhase));
            }
        },
        cljg_huodi: {
            audio: 'cljg2',
            soulSkill: true,
            categories: () => (['英灵技']),
            trigger: { player: 'phaseJieshuBegin' },
            forced: true,
            filter(event, player) {
                return game.hasPlayer(function (current) {
                    return current.isFriendsOf(player) && current.isTurnedOver();
                });
            },
            content() {
                "step 0"
                player.chooseTarget('〖惑敌〗你可以令一名敌方角色翻面', lib.filter.enemies).set('ai', ai.turnoverEffect);
                "step 1"
                if (result.bool) {
                    result.targets[0].turnOver();
                }
            },
            ai: {
                expose: 0.2
            }
        },
        cljg_jixian: {
            audio: 'cljg2',
            audioname2: {
                sp_zhanghe: 'spolzhouxuan'
            },
            trigger: { global: 'phaseBegin' },
            juexingji: true,
            limited: true,
            intro: {
                content: 'limited'
            },
            forced: true,
            logTarget: 'player',
            filter(event, player) {
                return event.player.isEnemiesOf(player);
            },
            content() {
                "step 0"
                player.awakenSkill('cljg_jixian');
                player.phase('nodelay');
                "step 1"
                trigger.cancel();
            },
            ai: {
                expose: 0.2
            }
        },
        cljg_chuanyun: {
            audio: 'cljg2',
            soulSkill: true,
            categories: () => (['英灵技']),
            trigger: { player: 'phaseJieshuBegin' },
            forced: true,
            filter(event, player) {
                return player.getEnemies().length > 0;
            },
            content() {
                "step 0"
                player.chooseTarget('〖穿云〗你可以对一名敌方角色造成1点伤害', lib.filter.enemies).set('ai', ai.damageEffect);
                "step 1"
                if (result.bool) {
                    result.targets[0].damage();
                }
            }
        },
        cljg_longwei: {
            audio: 'cljg2',
            soulSkill: true,
            categories: () => (['英灵技']),
            trigger: { global: ['dying', 'dyingEnd'] },
            forced: true,
            logTarget: 'player',
            filter(event, player) {
                return event.player.isFriendsOf(player);
            },
            content() {
                trigger.player.draw();
            }
        },
        cljg_leili: {
            trigger: { source: 'damageEnd' },
            forced: true,
            audio: 'cljg2',
            audioname2: {
                clgd_zhuling: 'dczhanyi'
            },
            filter(event, player) {
                return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && player.getEnemies((current) => (current != event.player)).length;
            },
            content() {
                "step 0"
                player.chooseTarget('〖' + get.translation(event.name) + '〗由于你使用的【' + get.translation(trigger.card.name) + '】对' + get.translation(trigger.player) + '造成伤害', function (card, player, target) {
                    if (target == _status.event.notPlayer) return false;
                    return target.isEnemiesOf(player);
                }).set('ai', ai.thunderEffect).set('prompt2', '<center>你可以对不为其的一名敌方角色造成1点雷电伤害</center>').set('notPlayer', trigger.player);
                "step 1"
                if (result.bool) {
                    result.targets[0].damage('thunder');
                }
            },
            ai: {
                expose: 0.2,
                threaten: 1.3,
                effect: {
                    player(card, player, target) {
                        if ((card.name == 'sha' || card.name == 'juedou') && player.getEnemies((current) => (current != target)).length) return 1.5;
                    }
                }
            }
        },
        cljg_fengxing: {
            trigger: { player: 'phaseZhunbeiBegin' },
            audio: 'cljg2',
            audioname2: {
                clgd_zhuling: 'jixian'
            },
            forced: true,
            filter(event, player) {
                return player.getEnemies((current) => (player.canUse('sha', current, false))).length;
            },
            content() {
                player.chooseUseTarget({ name: 'sha' }, player.getEnemies(), false, '〖' + get.translation('cljg_fengxing') + '〗你可以无距离限制地视为对一名敌方角色使用一张【杀】', 'nodistance')
            },
            ai: {
                expose: 0.2,
                threaten: 1.3
            }
        },
        cljg_tanjiang: {
            trigger: { player: 'phaseUseBegin' },
            audio: 'cljg2',
            forced: true,
            content() {
                'step 0'
                player.chooseUseTarget({ name: 'sha' }, false, '〖探江〗视为对所有距离为1的敌方角色(' + get.translation(player.getEnemies((current) => (get.distance(player, current) == 1 && player.canUse('sha', current, false)))) + ')使用一张【杀】', 'nodistance').set('prompt2', '或点取消令你计算与其他角色的距离-1').set('filterTarget', (event, player, current) => (get.distance(player, current) == 1 && current.isEnemiesOf(player))).selectTarget = [-1, -1];
                'step 1'
                if (!result.bool) {
                    player.removeSkill('cljg_tanjiang2');
                    player.addSkill('cljg_tanjiang2');
                }
            },
            ai: {
                expose: 0.2,
                threaten: 1.3
            }
        },
        cljg_tanjiang2: {
            charlotte: true,
            intro: {
                content(storage, player) {
                    return '<center>计算与其他角色的距离-' + storage + '</center>';
                },
                markcount(storage, player) {
                    if (storage) return storage;
                }
            },
            init(player, skill) {
                player.qyhc_firstGain(0, 'storage', skill);
                player.storage[skill]++;
                player.trymarkAutoSkill(skill);
            },
            mod: {
                globalFrom(from, to, num) {
                    if (from != to) return num - from.storage.cljg_tanjiang2;
                }
            }
        },
        cljg_cuilin: {
            trigger: { player: 'phaseUseBegin' },
            forced: true,
            audio: 'cljg2',
            prompt2: '<center>横置所有敌方角色且视为使用一张【火烧连营】</center>',
            content() {
                'step 0'
                event.targets = player.getEnemies((current) => (!current.isLinked()));
                player.line(event.targets);
                'step 1'
                if (event.targets.length) {
                    event.targets.sortBySeat(_status.currentPhase);
                    var current = event.targets.shift();
                    if (current && current.isIn()) if (!current.isLinked()) {
                        current.link();
                    }
                    event.redo();
                }
                'step 2'
                player.chooseUseTarget({ name: 'huoshaolianying' }, '〖摧林〗视为使用一张【火烧连营】').set('forced', true);
            },
            ai: {
                expose: 0.2,
                threaten: 1.3
            }
        },
        cljg_xuanlei: {
            audio: 'cljg2',
            trigger: { player: 'phaseJieshuBegin' },
            forced: true,
            soulSkill: true,
            categories: () => (['英灵技']),
            filter(event, player) {
                return player.getEnemies(function (current) {
                    return current.countCards('j');
                }).length;
            },
            content() {
                "step 0"
                player.chooseTarget('〖玄雷〗你可以选择一名判定区内有牌的敌方角色', function (card, player, target) {
                    return target.countCards('j') && target.isEnemiesOf(player);
                }).set('ai', ai.thunderEffect).set('prompt2', '<center>对其造成1点雷电伤害</center>');
                "step 1"
                if (result.bool) {
                    result.targets[0].damage('thunder');
                }
            }
        },
        cljg_konghun: {
            audio: 'cljg2',
            trigger: { player: 'phaseZhunbeiBegin' },
            forced: true,
            filter(event, player) {
                return player.getEnemies().length;
            },
            logTarget: (event, player) => (player.getEnemies()),
            content() {
                'step 0'
                event.targets = qyhcCL.getLogTargets(event);
                'step 1'
                if (event.targets.length) {
                    event.targets.sortBySeat(_status.currentPhase);
                    var current = event.targets.shift();
                    if (current && current.isIn()) current.damage('thunder');
                    event.redo();
                }
                'step 2'
                event.targets = player.getEnemies();
                if (player.hp <= event.targets.length) {
                    player.recover();
                    event.finish();
                }
                'step 3'
                if (event.targets.length) {
                    event.targets.sortBySeat(_status.currentPhase);
                    var current = event.targets.shift();
                    if (current && current.isIn()) {
                        current.line(player);
                        player.damage(current, 'fire');
                    }
                    event.redo();
                }
            },
            ai: {
                threaten(player, target) {
                    if (target.hp == 1) return 20;
                    if (target.hp == 2) return 6;
                    return 0.1;
                }
            }
        },
        cljg_chiying: {
            audio: 'cljg2',
            trigger: { global: 'damageEnd' },
            forced: true,
            global: 'cljg_chiying_g',
            logTarget: 'player',
            categories: () => (['英灵技']),
            soulSkill: true,
            filter(event, player) {
                if (event.num <= 1) return false;
                return event.player.isIn() && event.player.isFriendsOf(player) && event.player.isDamaged();
            },
            content() {
                trigger.player.recover();
            }
        },
        cljg_chiying_g: {
            ai: {
                filterDamage: true,
                skillTagFilter(player) {
                    return player.hp > 1 && player.countFriends((current) => (current.hasSkill('cljg_chiying')));
                }
            }
        },
        cljg_jingfan: {
            global: 'cljg_jingfan2',
            locked: true
        },
        cljg_jingfan2: {
            mod: {
                globalFrom(from, to, distance) {
                    if (to.isFriendsOf(from)) return;
                    return distance - from.countFriends((current) => (current.hasSkill('cljg_jingfan')));
                }
            }
        },
        cljg_beijiang: {
            trigger: { global: 'damageEnd' },
            forced: true,
            audio: 'cljg',
            filter(event, player) {
                return event.player && event.player.isIn() && event.player.isFriendsOf(player) && (event.player.isDamaged() || event.player.countCards('he', lib.filter.cardRecastable) > 0);
            },
            delay: false,
            logTarget: 'player',
            content() {
                'step 0'
                trigger.player.chooseCard('〖悲江〗请重铸一张牌', 'he', true, lib.filter.cardRecastable).set('ai', function (card) {
                    if (card.name == 'tao') return -30;
                    return -get.value(card) - get.useful(card);
                }).set('delay', false);
                'step 1'
                if (result.bool) trigger.player.recast(result.cards);
                else trigger.player.recover();
            },
            ai: {
                threaten: 1.3
            }
        },
        cljg_lingyu: {
            trigger: {
                player: ['phaseJieshuBegin']
            },
            forced: true,
            audio: 'cljg',
            forced: true,
            filter(event, player) {
                return player.getEnemies().length;
            },
            content() {
                "step 0"
                player.chooseUseTarget({ name: "taoyuan" }, true, player.getFriends(true), 'notargetDelay')
                "step 1"
                var players = player.getFriends((current) => (current.isHealthy()));
                if (player.isHealthy()) players.add(player);
                players.sortBySeat(_status.currentPhase);
                game.asyncDraw(players);
            },
            ai: {
                threaten: 1.5
            }
        },
        cljg_xuankai: {
            trigger: { global: 'shaBefore' },
            forced: true,
            audio: 'cljg',
            filter(event, player) {
                return event.card.name == 'sha' && (event.target.hp == 1 || !event.target.hasCard()) && event.target.isFriendsOf(player);
            },
            logTarget: 'target',
            content() {
                trigger.cancel();
            }
        },
        cljg_zhenwei: {
            global: 'cljg_zhenwei2',
            audioname2: {
                clgd_caohong: 'daWu2'
            },
            audio: 'cljg',
            ai: {
                threaten: 1.5
            }
        },
        cljg_zhenwei2: {
            mod: {
                globalTo(from, to, distance) {
                    if (to.isFriendsOf(from)) return;
                    return distance + to.countFriends((current) => (current.hasSkill('cljg_zhenwei')));
                }
            }
        },
        cljg_tongjun: {
            global: 'cljg_tongjun2',
            soulSkill: true,
            categories: () => (['英灵技']),
            mod: {
                globalTo(from, to, dis) {
                    if (from.isEnemiesOf(to) && to.isTurnedOver()) return dis + 2;
                }
            }
        },
        cljg_tongjun2: {
            mod: {
                attackRange(player, distance) {
                    return distance + player.countFriends((current) => (current.isTurnedOver() && current.hasSkill('cljg_tongjun'))) * 2;
                }
            }
        },
        cljg_benlei: {
            trigger: { player: 'phaseZhunbeiBegin' },
            forced: true,
            audio: 'cljg',
            content() {
                "step 0"
                player.chooseTarget('你可以发动〖奔雷〗选择一名敌方角色', lib.filter.enemies).set('ai', function (target) {
                    if (get.attitude(player, target) > -3) return 0;
                    var eff = get.damageEffect(target, player, player, 'thunder');
                    if (!target.hasSkillTag('filterDamage')) eff *= 1.8;
                    return eff;
                }).set('prompt2', '<center>对其造成2点雷电伤害<br>你对一名敌方器械造成1点雷电伤害</center>');
                "step 1"
                if (result.bool) {
                    event.target = result.targets[0];
                    event.target.damage(2, 'thunder');
                } else event.finish();
                "step 2"
                player.chooseTarget('〖奔雷〗请对一名敌方器械造成1点雷电伤害', true, (card, player, target) => (target.isEnemiesOf(player) && target.type == 'mech')).set('ai', ai.thunderEffect);
                "step 3"
                if (result.bool) {
                    player.line(result.targets);
                    result.targets[0].damage('thunder');
                }
            },
            ai: {
                threaten: 2
            }
        },
        cljg_nailuo: {
            trigger: { player: 'phaseJieshuBegin' },
            audio: 'cljg',
            forceDie: true,
            check(event, player) {
                var num = 0, players = player.getEnemies();
                for (var i of players) {
                    if (i.hp == 1) num += 2;
                    if (i.hp == 2) num += 0.5;
                    var es = i.getDiscardableCards(player, 'e');
                    for (var j = 0; j < es.length; j++) {
                        switch (get.equiptype(es[j])) {
                            case 1: num += 1; break;
                            case 2: num += 2; break;
                            case 3: num += 2; break;
                            case 4: num += 1; break;
                            case 5: num += 1.5; break;
                        }
                    }
                }
                return num + players.length > player.countCards('e') + (+(player.hp > 1));
            },
            prompt: '是否发动〖奈落〗？',
            prompt2: '<center>与所有敌方角色各失去1点体力并弃置装备区内所有牌</center>',
            filter(event, player) {
                return player.isIn();
            },
            logTarget: (event, player) => (player.getEnemies().concat([player])),
            content() {
                'step 0'
                event.targets = qyhcCL.getLogTargets(event);
                'step 1'
                if (event.targets.length) {
                    event.targets.sortBySeat(_status.currentPhase);
                    var current = event.targets.shift();
                    if (current && current.isIn()) {
                        current.loseHp();
                        var es = current.getDiscardableCards(player, 'e');
                        if (es.length) current.discard(es, player);
                    }
                    event.redo();
                }
            }
        },
        cljg_poli: {
            trigger: { player: 'phaseJieshuBegin' },
            audio: 'cljg2',
            check(event, player) {
                var num = 0;
                for (var i of game.filterPlayer((current) => (current.countCards('e') > 0))) num += get.drawEffect(i, 1, player);
                return num > 0;
            },
            prompt: '是否发动〖魄立〗？',
            prompt2() {
                return '<center>令所有装备区内有牌的角色(' + get.translation(game.filterPlayer((current) => (current.countCards('e') > 0))) + ')各摸一张牌</center>';
            },
            filter() {
                return game.hasPlayer((current) => (current.countCards('e') > 0));
            },
            logTarget: () => (game.filterPlayer((current) => (current.countCards('e') > 0))),
            content() {
                game.asyncDraw(qyhcCL.getLogTargets(event).sortBySeat(_status.currentPhase));
            }
        },
        cljg_yibei: {
            trigger: { global: 'roundStart' },
            audio: 'cljg2',
            forced: true,
            soulSkill: true,
            categories: () => (['英灵技']),
            content() {
                var ccC = 'yiyi';
                player.chooseUseTarget({ name: ccC }, '〖逸备〗是否视为对所有己方角色使用一张【' + get.translation(ccC) + '】？', 'nodistance', 'notargetDelay').set('filterTarget', (event, player, current) => (current.isFriendsOf(player))).set('forced', !lib.config.autoskilllist.includes('cljg_yibei')).selectTarget = [-1, -1];
            }
        },
        cljg_enyuan: { audio: 'cljg' },
        cljg_suoxue: { audio: 'cljg' },
        cljg_fankui: { audio: 'cljg2' },
        cljg_lizhan: { audio: 'cljg2' },
        cljg_lizhanzd: { audio: 'cljg2' },
        cljg_qianjie: { audio: 'cljg2' },
        cljg_lizhansc: { audio: 'cljg2' },
        cljg_qizhen: {
            audio: 'cljg2',
            prompt2: () => ('<center>进行判定,若结果为红色,视为' + get.translation(_status.event.parent.player) + '使用或打出了一张【闪】</center>'),
            usable: 1,
            creatTrigger: true,
            trigger: { global: ['chooseToRespondBegin', 'chooseToUseBegin'] },
            filter(event, player) {
                if (event.responded) return false;
                if (event.player.isEnemiesOf(player)) return false;
                if (!event.filterCard || !event.filterCard({ name: 'shan' }, event.player, event)) return false;
                if (event.name == 'chooseToRespond' && !lib.filter.cardRespondable({ name: 'shan' }, event.player, event)) return false;
                return true;
            },
            check(event, player) {
                if (event && (event.ai || event.ai1)) {
                    var ai = event.ai || event.ai1;
                    var tmp = _status.event;
                    _status.event = event;
                    var result = ai({ name: 'shan' }, _status.event.player, event);
                    _status.event = tmp;
                    return result >= 0;
                }
                return true;
            },
            soulSkill: true,
            categories: () => (['英灵技']),
            logTarget: 'player',
            global: 'cljg_qizhen_ai',
            content() {
                "step 0"
                player.logSkill_qyhccl(['bagua_skill', null]);
                player.judge('cljg_qizhen', (result) => { return result.color == 'red' ? 1.5 : -0.5 }).set('judge2', (result) => (result.bool));
                "step 1"
                if (result.bool) {
                    trigger.untrigger();
                    trigger.set('responded', true);
                    trigger.result = { bool: true, card: { name: 'shan' } }
                }
            },
            ai: {
                respondShan: true
            },
            subSkill: {
                ai: {
                    charlotte: true,
                    ai: {
                        respondShan: true,
                        skillTagFilter(player, arg) {
                            return player.countFriends((current) => (current.hasSkill('cljg_qizhen')));
                        }
                    }
                }
            }
        },
        cljg_tiandu: { audio: 'cljg2' },
        cljg_hongyuan: { audio: 'cljg' },
        cljg_lanjiang: { audio: 'cljg' },
        cljg_duorui: { audio: 'cljg2' },
        cljg_duoruign: { audio: 'cljg2' },
        cljg_biyan: {
            trigger: { player: ['phaseJieshuBegin'] },
            forced: true,
            audio: 'cljg',
            filter(event, player) {
                var cards = player.getCards('hs');
                for (var i of cards) {
                    if (lib.filter.cardEnabled(i, player, 'forceEnable')) for (var x of player.getEnemies()) if (player.canUse({ name: 'sha', nature: 'ice', cards: [i] }, x, false)) return true;
                }
                return false;
            },
            content() {
                'step 0'
                player.chooseToUse(true, function (card, player) {
                    if (card.name != 'sha' || get.nature(card) != 'ice') return false;
                    return lib.filter.cardEnabled(card, player, 'forceEnable');
                }, (event, player, target) => (target.isEnemiesOf(player) && lib.filter.targetEnabledx(event, player, target))).set('addCount', false).set('openskilldialog', '〖避炎〗请将一张手牌当冰【杀】使用<br><span class=text>目标为所有能合法成为此【杀】目标的敌方角色(' + get.translation(game.filterPlayer((target) => (target.isEnemiesOf(_status.event.player) && _status.event.player.canUse({ name: 'sha', nature: 'ice' }, target, false)))) + ')</span>').set('norestore', true).set('_backupevent', 'cljg_biyanx').set('custom', {
                    add: {},
                    replace: { window() { } }
                }).set('ai1', function (card) {
                    return 20 - get.value(card) - get.useful(card);
                }).set('ai2', function (target, card, player, player2, isLink) {
                    if (get.itemtype(card) == 'card') return get.effect_use(target, { name: 'sha', cards: [card], nature: 'ice' }, player, player2, isLink);
                    if (get.itemtype(card) == 'cards') return get.effect_use(target, { name: 'sha', cards: card, nature: 'ice' }, player, player2, isLink);
                    return get.effect_use(target, { name: 'sha', nature: 'ice' }, player, player2, isLink);
                }).set('selectTarget', [-1, -1]).backup('cljg_biyanx');
            },
            mod: {
                aiOrder(player) {
                    if (player.getCards('h') == 1) return 0.4 - Math.random();
                }
            }
        },
        cljg_biyanx: {
            viewAs: { name: 'sha', nature: 'ice' },
            filterCard(card, player) {
                return get.itemtype(card) == 'card';
            },
            position: 'hs',
            selectCard: 1,
            check(card) { return -get.value(card) }
        },
        cljg_tunshi: {
            trigger: { player: 'phaseZhunbeiBegin' },
            forced: true,
            audio: 'cljg',
            filter(event, player) {
                var nh = player.countCards('h');
                return player.getEnemies(function (current) {
                    return current.countCards('h') >= nh;
                }).length;
            },
            logTarget(event, player) {
                var nh = player.countCards('h');
                return player.getEnemies(function (current) {
                    return current.countCards('h') >= nh;
                });
            },
            content() {
                'step 0'
                event.targets = qyhcCL.getLogTargets(event);
                'step 1'
                if (event.targets.length) {
                    event.targets.sortBySeat(_status.currentPhase);
                    var current = event.targets.shift();
                    if (current && current.isIn()) current.damage();
                    event.redo();
                }
            }
        },
        /*cljg_jiguan:{
            mod:{
                targetEnabled:function(card,player,target){
                    if(game.getGlobalHistory('useCard',(evt)=>(evt.card!=card)).length==0&&get.tag(card,'damage')) return false;
                }
            }
        },*/
        cljg_jiguan: {
            trigger: {
                global: 'roundStart'
            },
            forced: true,
            content() {
                player.changeHujia(1, null, true);
            }
        },
        cljg_gongshen: {
            audio: 'cljg2',
            trigger: { player: 'phaseJieshuBegin' },
            forced: true,
            filter(event, player) {
                return player.getEnemies((current) => (current.type == 'mech')).length > 0 || player.countFriends((current) => (current.type == 'mech' && current.isDamaged())) > 0;
            },
            content() {
                'step 0'
                player.chooseTarget('〖工神〗请令一名己方器械回复1点体力', true, (card, player, target) => {
                    return target.type == 'mech' && target.isFriendsOf(player) && target.isDamaged();
                }).set('ai', ai.recoverEffect);
                'step 1'
                if (result.bool && Array.isArray(result.targets) && result.targets.length) {
                    player.line(result.targets[0]);
                    result.targets[0].recover();
                }
                'step 2'
                player.chooseTarget('〖工神〗请对一名敌方器械造成1点火焰伤害', true, (card, player, target) => {
                    return target.type == 'mech' && target.isEnemiesOf(player);
                }, true).set('ai', ai.fireEffect);
                'step 3'
                if (result.bool && Array.isArray(result.targets) && result.targets.length) {
                    player.line(result.targets[0]);
                    result.targets[0].damage('fire');
                }
            }
        },
        cljg_runjiang: {
            audio: 'cljg',
            trigger: { player: 'phaseJieshuBegin' },
            forced: true,
            filter(event, player) {
                return player.getEnemies().length > 0 || player.getFriends((current) => (current.isDamaged())).length > 0;
            },
            content() {
                'step 0'
                player.chooseTarget('〖润江〗请令一名己方角色回复1点体力', true, (card, player, target) => {
                    return target.isFriendsOf(player) && target.isDamaged();
                }).set('ai', ai.recoverEffect);
                'step 1'
                if (result.bool && Array.isArray(result.targets) && result.targets.length) {
                    player.line(result.targets[0]);
                    result.targets[0].recover();
                }
                'step 2'
                player.chooseTarget('〖润江〗请令一名敌方角色失去1点体力', true, (card, player, target) => {
                    return target.isEnemiesOf(player);
                }, true).set('ai', ai.losehpEffect);
                'step 3'
                if (result.bool && Array.isArray(result.targets) && result.targets.length) {
                    player.line(result.targets[0]);
                    result.targets[0].loseHp();
                }
            }
        },
        cljg_jingmiao: {
            trigger: { global: 'useCard' },
            filter(event, player) {
                return (get.type2(event.card) == 'trick') && (!event.targets || !event.targets.length) && (event.player.isEnemiesOf(player) || event.player.isDamaged());
            },
            soulSkill: true,
            categories: () => (['英灵技']),
            logTarget: 'player',
            audio: 'cljg2',
            forced: true,
            content() {
                trigger.player[trigger.player.isEnemiesOf(player) ? "loseHp" : "recover"]();
            },
            ai: {
                threaten: 1.3
            }
        },
        cljg_zhinang: {
            trigger: { player: 'phaseZhunbeiBegin' },
            forced: true,
            audio: 'cljg2',
            content() {
                player.chooseUseTarget({ name: 'wugu' }, true).set('oncard', (card, player) => {
                    _status.event.excluded.addArray(player.getEnemies());
                })
            },
            ai: {
                threaten: 1.3
            }
        },
        cljg_biantian: {
            trigger: { global: 'roundFinish' },
            forced: true,
            audio: 'cljg2',
            content() {
                'step 0'
                player.judge(function (card) {
                    var color = card.suit;
                    var player = _status.event.player;
                    if (color == 'spade') return 10;
                    if (color == 'club') return +(player.countFriends((current) => (current.hp + 1 < current.maxHp)) > 0);
                    if (color == 'diamond') return 1;
                    if (color == 'heart') return 2;
                    return -1;
                }).set('judge2', (result) => (result.bool));
                'step 1'
                switch (result.suit) {
                    case 'heart':
                        event.thing = 'damage';
                        player.chooseTarget('〖变天〗请对一名敌方角色造成2点火焰伤害', lib.filter.enemies, true).set('ai', ai.fireEffect);
                        break;
                    case 'diamond':
                        player.line(player.getEnemies());
                        for (var i of player.getEnemies()) if (!i.hasSkill('kuangFeng2', null, null, false)) i.addTempSkill('kuangFeng2', 'roundFinish');
                        event.finish();
                        break;
                    case 'spade':
                        player.line(player.getFriends(true));
                        for (var i of player.getFriends(true)) if (!i.hasSkill('daWu2', null, null, false)) i.addTempSkill('daWu2', 'roundFinish');
                        event.finish();
                        break;
                    case 'club':
                        event.thing = 'recover';
                        player.chooseTarget('〖变天〗请令一名己方角色回复2点体力', (card, player, target) => {
                            return player.isFriendsOf(target) && target.isDamaged();
                        }, true).set('ai', ai.recoverEffect);
                        break;
                    default:
                        event.finish();
                        break;
                }
                'step 2'
                if (result.bool) {
                    player.line(result.targets[0]);
                    result.targets[0][event.thing](2, 'fire');
                }
            }
        },
        cljg_jizhen: {
            audio: 'cljg2',
            soulSkill: true,
            categories: () => (['英灵技']),
            delay: false,
            forced: true,
            silent: true,
            forced: true,
            priority: 2010,
            trigger: {
                global: ['useCard1', 'respond']
            },
            filter(event, player) {
                return event.player.beOn() && event.card.name == 'sha' && event.card.nature == 'fire' && event.cards && event.cards.length == 1 && event.player.isFriendsOf(player) && event.cards[0].name == 'shan' && !event.bejizhenaudio;
            },
            content() {
                player.logSkill_qyhccl('cljg_jizhen', trigger.player);
                trigger.bejizhenaudio = true;
            },
            global: 'cljg_jizhen2',
            ai: {
                threaten: 1.4
            }
        },
        cljg_jizhen2: {
            mod: {
                cardname(card, player) {
                    if (card.name == 'shan' && player.beOn()) if (player.countFriends((current) => (current.hasSkill('cljg_jizhen')))) return 'sha';
                },
                cardnature(card, player) {
                    if (card.name == 'shan' && player.beOn()) if (player.countFriends((current) => (current.hasSkill('cljg_jizhen')))) return 'fire';
                }
            }
        },
        cljg_tianjiang: {
            audio: 'cljg2',
            soulSkill: true,
            categories: () => (['英灵技']),
            forced: true,
            logTarget: 'source',
            trigger: { global: 'damageSource' },
            filter(event, player) {
                var target = event.source;
                if (target && target.isIn() && target.isFriendsOf(player) && event.card) var evt = event.getParent('useCard', true); else return false;
                return evt && evt.phaseFirst;
            },
            content() {
                trigger.source.draw();
            }
        },
        cljg_shameng: {
            audio: 'cljg2',
            soulSkill: true,
            categories: () => (['英灵技']),
            frequent: 'check',
            prompt: '是否发动〖歃盟〗？',
            prompt2(event, player) {
                return '<center>防止' + get.translation(event.source) + '对' + get.translation(event.player) + '造成的伤害</center>';
            },
            logTarget: 'player',
            trigger: { global: 'damageBegin2' },
            check(event, player) {
                return get.damageEffect(event.player, event.source, player, event.nature) <= 0;
            },
            filter(event, player) {
                return event.source && event.player.isIn() && event.source.isIn() && event.player.isFriendsOf(player) && event.source.isFriendsOf(player);
            },
            content() {
                trigger.cancel();
            }
        },
        cljg_lingfeng: {
            audio: 'cljg2',
            trigger: { player: 'phaseZhunbeiBegin' },
            prompt: '是否发动〖灵锋〗？',
            prompt2: '<center>展示牌堆顶两张牌,颜色相同,令一名敌方角色失去1点体力,否则获得其中一张牌</center>',
            content() {
                "step 0"
                event.cards = get.cards(2);
                player.showCards('〖灵锋〗展示', event.cards);
                "step 1"
                if (get.color(event.cards[0]) != get.color(event.cards[1])) {
                    player.chooseTarget('〖灵锋〗请令一名敌方角色失去1点体力', lib.filter.enemies, true).set('ai', ai.losehpEffect);
                } else player.chooseCardButton(event.cards, '〖灵锋〗请获得以下一张牌', true).set('ai', (button) => {
                    var player = _status.event.player, js = player.getCards('j'), val = get.buttonValue(button) / 114;
                    if (js.length) {
                        var judge = get.judge(js[0]);
                        if (judge) return -judge(button.link) * 2 + val;
                    }
                    return val;
                });
                "step 2"
                if (result.bool && result.targets && result.targets.length) {
                    player.line(result.targets);
                    result.targets[0].loseHp();
                }
                if (result.bool && result.links && result.links.length) {
                    player.gain(result.links[0], 'gain2');
                    event.cards.remove(result.links[0]);
                }
                "step 3"
                while (event.cards.length) ui.cardPile.insertBefore(event.cards.pop(), ui.cardPile.firstChild);
                game.updateRoundNumber();
            },
            ai: {
                threaten: 1.4
            }
        },
        cljg_jinlin: {
            audio: 'cljg',
            trigger: { player: 'damageBegin2' },
            filter(event) {
                return event.hasNature('thunder');
            },
            forced: true,
            content() {
                trigger.cancel();
            },
            ai: {
                nothunder: true,
                effect: {
                    target(card) {
                        if (get.tag(card, 'thunderDamage')) return 'zerotarget';
                    }
                }
            }
        },
        cljg_yuhuo: {
            audio: 'cljg2',
            audioname2: {
                cljg_chiyuzhuque: 'cljg_yuhuozq',
                cljg_shihuosuanni: 'cljg_yuhuosn',
                cljg_yingjungongjin: 'cljg_yuhuozy'
            },
            trigger: { player: 'damageBegin2' },
            filter(event) {
                return event.hasNature('fire');
            },
            forced: true,
            content() {
                trigger.cancel();
            },
            ai: {
                nofire: true,
                effect: {
                    target(card) {
                        if (get.tag(card, 'fireDamage')) return 'zerotarget';
                    }
                }
            }
        },
        cljg_yuhuozq: { audio: 'cljg' },
        cljg_yuhuosn: { audio: 'cljg' },
        cljg_yuhuozy: { audio: 'cljg' },
        cljg_tianyun: {
            trigger: { player: 'phaseJieshuBegin' },
            forced: true,
            audio: 'cljg',
            content() {
                "step 0"
                player.chooseTarget('你可以发动〖天陨〗选择一名敌方角色', lib.filter.enemies).set('ai', function (target) {
                    if (get.attitude(player, target) > -3) return 0;
                    var eff = get.damageEffect(target, player, player, 'fire');
                    if (!target.hasSkillTag('filterDamage')) eff *= 1.8;
                    if (player.hp <= 1) eff -= 6;
                    if (eff >= 0) return eff + target.countCards('e') / 2;
                    return 0;
                }).set('prompt2', '<center>对其造成2点火焰伤害且弃置其装备区内所有牌<br>你与一名敌方角色各失去1点体力</center>');
                "step 1"
                if (result.bool) {
                    event.target = result.targets[0];
                    event.target.damage(2, 'fire');
                } else event.finish();
                "step 2"
                var target = event.target;
                var es = target.getCards('e');
                if (es.length) target.discard(es, player);
                "step 3"
                player.chooseTarget('〖天陨〗请选择一名敌方角色,其与你依次失去1点体力', true, lib.filter.enemies).set('ai', ai.losehpEffect);
                "step 4"
                if (result.bool) {
                    player.line(result.targets);
                    result.targets[0].loseHp();
                } else event.finish();
                "step 5"
                player.loseHp();
            },
            ai: {
                threaten: 2
            }
        },
        cljg_yeyan: {
            enable: 'phaseUse',
            usable: 1,
            audio: 'cljg2',
            creatTrigger: true,
            filterTarget: true,
            selectTarget() {
                var player = _status.event.player;
                if (player.storage.cljg_yeyan) return [1, player.storage.cljg_yeyan];
                return 114514;
            },
            prompt() {
                var player = _status.event.player;
                if (player.storage.cljg_yeyan) {
                    var num = player.storage.cljg_yeyan;
                    if (num > 1) return '请选择至多<span class=firetext>' + num + '</span>名角色,你对这些角色各造成1点火焰伤害';
                    return '请选择<span class=firetext>1</span>名角色对其造成1点火焰伤害';
                }
                return '';
            },
            filter(event, player) {
                if (player.storage.cljg_yeyan === undefined) player.storage.cljg_yeyan = 3;
                return player.storage.cljg_yeyan;
            },
            content() {
                target.damage('fire');
            },
            contentAfter() {
                if (player.storage.cljg_yeyan) player.storage.cljg_yeyan--;
            },
            ai: {
                order: 6,
                result: {
                    target(player, target) {
                        var targets = [];
                        if (ui.selected.targets.length) targets.addArray(ui.selected.targets);
                        if (!targets.length) return get.damageEffect(target, player, target, 'fire');
                        targets.add(target);
                        targets.sortBySeat(_status.currentPhase);
                        if (targets[0] == target) return get.damageEffect(target, player, target, 'fire');
                        if (!target.hasSkillTag('nofire')) return get.damageEffect(target, player, target);
                        return 0;
                    }
                }
            }
        },
        cljg_zhanyan: {
            enable: 'phaseUse',
            audio: 'cljg2',
            filterTarget: true,
            prompt: '请选择一名角色,你对其造成3点火焰伤害',
            content() {
                player.awakenSkill('cljg_zhanyan');
                target.damage('fire', 3);
            },
            intro: {
                content: 'limited'
            },
            ai: {
                order: 7,
                result: {
                    target(player, target) {
                        var eff = get.damageEffect(target, player, target, 'fire');
                        if (get.attitude(player, target) >= 0) return -114;
                        if (get.attitude(target, player) >= 0) return 1;
                        if (eff >= 0) return 1;
                        if (target.hasSkillTag('filterDamage')) return 0;
                        if (target.hasSkillTag('noDirectDamage')) return 0;
                        return eff;
                    }
                }
            }
        },
        cljg_huchi: {
            everyOnce: 1,
            audio: 'cljg',
            global: 'cljg_huchi2'
        },
        cljg_huchi2: {
            enable: 'chooseToUse',
            filterTarget(event, player, target) {
                return player.isFriendsOf(target) && target.hasSkill('cljg_huchi') && target.getEveryOnce('cljg_huchi', player);
            },
            filter(event, player) {
                return event.type == 'dying' && event.dying == player && player.hp <= 0 && player.countFriends((current) => (current.hasSkill('cljg_huchi') && current.getEveryOnce('cljg_huchi', player)));
            },
            selectTarget() {
                if (game.countPlayer(current => {
                    return lib.skill.cljg_huchi2.filterTarget(null, _status.event.player, current);
                }) == 1) return -1;
                return 1;
            },
            prompt: '<center>选择一名仍可以对你发动〖护池〗的己方角色,发动其〖护池〗<br>你弃置区域内所有牌、回复体力至2点并摸两张牌</center>',
            contentBefore() {
                targets[0].addCountNum('cljg_huchi', player);
                targets[0].trymarkAutoSkill('cljg_huchi');
            },
            forced: true,
            content() {
                'step 0'
                player.discard(player.getCards('hej'));
                'step 1'
                if (player.hp < 2) player.recover(2 - player.hp);
                'step 2'
                player.draw(2);
            },
            ai: {
                order() {
                    var player = _status.event.player;
                    if (player.hp < -1) return 10;
                    if (player.countCards('he') <= 1 || player.countCards('j') > 0) return 10;
                    return 1;
                },
                skillTagFilter(player, arg, target) {
                    if (player != target || target.countFriends((current) => (current.hasSkill('cljg_huchi') && current.getEveryOnce('cljg_huchi', target))) == 0) return false;
                },
                save: true,
                result: {
                    player(player) {
                        if (player.hp <= 0) return 10;
                        return -1;
                    }
                },
                threaten(player, target) {
                    if (target.countFriends((current) => (current.hasSkill('cljg_huchi') && current.getEveryOnce('cljg_huchi', target)))) return 0.6;
                }
            }
        },
        cljg_angyang: {
            trigger: { player: 'phaseUseBegin' },
            forced: true,
            soulSkill: true,
            categories: () => (['英灵技']),
            audio: 'cljg2',
            content() {
                player.chooseUseTarget('〖昂扬〗请视为使用一张【决斗】', { name: 'juedou' }, true)
            }
        },
        /*{
            audio:'cljg2',
            trigger:{
                global:['useCardToPlayered','useCardToTargeted']
            },
            filter:function(event,player,name){
                if(!(event.card.name=='juedou'||(event.card.name=='sha'&&get.color(event.card)=='red'))) return false;
                if(name=='useCardToPlayered'&&event.player.isFriendsOf(player)) return true;
                if(name=='useCardToTargeted'&&event.target.isFriendsOf(player)) return true;
                return false;
            },
            prompt:function(event){
                var target;
                if(!event.parent.triggeredTargets4||!event.parent.triggeredTargets4.length) target=event.player;else target=event.target;
                return '是否发动〖昂扬〗令'+get.translation(target)+'摸一张牌？';
            },
            logTarget:function(event){
                if(!event.parent.triggeredTargets4||!event.parent.triggeredTargets4.length) return event.player;else return event.target;
            },
            frequent:true,
            content:function(){
                qyhcCL.getLogTargets(event).draw();
            }
        }*/
        cljg_douhun: {
            audio: 'cljg2',
            derivation: ['cljg_yingzi', 'cljg_jiang'],
            trigger: { global: 'phaseBegin' },
            filter(event, player) {
                return event.player.hp <= 1 && event.player.isFriendsOf(player);
            },
            forced: true,
            logTarget: 'player',
            content() {
                'step 0'
                trigger.player.addTempSkill('cljg_yingzi');
                trigger.player.addTempSkill('cljg_jiang');
                game.log(trigger.player, '获得技能', '#g〖英姿〗', '和', '#g〖英魂〗', '直到当前回合结束');
            }
        },
        cljg_yingzi: {
            inherit: 'yingzi',
            audio: 'cljg_douhun',
            audioname: []
        },
        cljg_jiang: {
            inherit: 'jiang',
            audio: 'cljg_douhun',
            audioname: []
        },
        cljg_xihun: {
            enable: 'phaseUse',
            usable: 1,
            audio: 'cljg2',
            selectTarget() {
                var player = _status.event.player;
                if (player.storage.cljg_xihun) return [1, player.storage.cljg_xihun];
                return 114514;
            },
            creatTrigger: true,
            multitarget: true,
            multiline: true,
            filter(event, player) {
                if (player.storage.cljg_xihun === undefined) player.storage.cljg_xihun = 3;
                if (!player.storage.cljg_xihun) return false;
                return game.hasPlayer((current) => {
                    return current.countCards('h');
                });
            },
            filterTarget(card, player, target) {
                return target.countCards('h');
            },
            content() {
                'step 0'
                var dialog = [];
                dialog.push('〖袭魂〗你可以弃置以下牌中四张花色各不相同的牌');
                targets.slice(0).sortBySeat(_status.currentPhase).forEach(target => {
                    if (target.countDiscardableCards(player, 'h') <= 0) return false;
                    var name = (target == player ? '你' : get.translation(target));
                    if (target.countCards('h')) {
                        dialog.push('<div class="text center">' + name + '的手牌</div>');
                        dialog.push(target.getCards('h'));
                    }
                });
                player.chooseButton(4).set('createDialog', dialog).set('filterButton', (button) => {
                    for (var i of ui.selected.buttons) if (button.link.suit == i.link.suit) return false;
                    return lib.filter.canBeDiscarded(button.link, _status.event.player, get.owner(button.link));
                }).set('ai', (button) => {
                    return -get.buttonValue(button) * get.attitude2(target);
                });
                'step 1'
                if (result.bool) {
                    var links = result.links;
                    var lose_list = [];
                    for (var target of game.players) {
                        var cards = links.filter(card => get.owner(card) == target);
                        if (cards.length) lose_list.push([target, cards]);
                    }
                    player.line(lose_list.map(i => i[0]));
                    if (player.storage.cljg_xihun) player.storage.cljg_xihun--;
                    if (lose_list[0].length == 1) lose_list[0][0].discard(lose_list[0][1]); else game.loseAsync({
                        lose_list: lose_list,
                        discarder: player
                    }).setContent('discardMultiple');
                }
            },
            prompt() {
                var player = _status.event.player;
                if (player.storage.cljg_xihun) {
                    var num = player.storage.cljg_xihun;
                    if (num > 1) return '请选择至多<span class=bluetext>' + num + '</span>名有手牌的角色,你同时观看这些角色的手牌并可以弃置这些牌中四张花色各不相同的牌令蓝色数字-1';
                    return '请选择<span class=bluetext>1</span>名角色,你观看其手牌并可以弃置其中四张花色各不相同的牌令蓝色数字-1';
                }
                return '';
            },
            ai: {
                order: 10,
                result: {
                    target(player, target) {
                        return -qyhcCL.suits(target.getDiscardableCards(player, 'h'), target);
                    }
                }
            }
        },
        cljg_huiwan: {
            audio: 'cljg2',
            soulSkill: true,
            categories: () => (['英灵技']),
            enable: ["chooseToRespond", "chooseToUse"],
            selectCard: 0,
            viewAs: { name: "sha" },
            usable: 1,
            creatTrigger: true,
            prompt() {
                return "视为" + (_status.event.name == 'chooseToUse' ? '使用' : '打出') + "一张【杀】(每回合限一次)";
            },
            ai: {
                respondSha: true,
                order() {
                    if (qyhcCL.temporder) return 9;
                    qyhcCL.temporder = true;
                    var order = get.order({ name: 'sha' });
                    if (qyhcCL.temporder) delete qyhcCL.temporder;
                    return order + 3;
                }
            }
        }
    };
    for (var i in qyhcCL.jiangeSkills) {
        if (qyhcCL.jiangeSkills[i].audio == 'cljg') qyhcCL.jiangeSkills[i].audio = 'ext:群英荟萃乀摧林/jiange/audio:true';
        if (qyhcCL.jiangeSkills[i].audio == 'cljg2') qyhcCL.jiangeSkills[i].audio = 'ext:群英荟萃乀摧林/jiange/audio:2';
    }
    qyhcCL.jiangeTrans = {
        WEIqixie: '剑阁决战·魏国器械',
        WEIyingling: '剑阁决战·魏国英灵',
        HANqixie: '剑阁决战·蜀国器械',
        HANyingling: '剑阁决战·蜀国英灵',
        WUqixie: '剑阁决战·吴国器械',
        WUyingling: '剑阁决战·吴国英灵',
        jiangemech: '器械',
        jiangeboss: '英灵',
        enemy: 'BOSS',
        enemy_win_option: '<span>击杀所有<br>其他角色</span>',
        cljg_niepan: '涅槃',
        cljg_niepan_info: '限定技,当你处于濒死状态时,你可以弃置区域内所有牌并复原,摸三张牌并回复体力至3点.',
        cljg_liedixuande: '烈帝玄德',
        cljg_gongshenyueying: '工神月英',
        cljg_tianhoukongming: '天侯孔明',
        cljg_yuhuoshiyuan: '浴火士元',
        cljg_yihanyunchang: '翊汉云长',
        cljg_fuweizilong: '扶危子龙',
        cljg_qiaokuijunyi: '巧魁儁乂',
        cljg_jiarenzidan: '佳人子丹',
        cljg_duanyuzhongda: '断狱仲达',
        cljg_juechenmiaocai: '绝尘妙才',
        cljg_kumuyuanrang: '枯目元让',
        cljg_baijiwenyuan: '百计文远',
        cljg_ximengzijing: '系盟子敬',
        cljg_baohubofu: '暴虎伯符',
        cljg_wuxiaameng: '吴下阿蒙',
        cljg_yingjungongjin: '英隽公瑾',
        cljg_yuhuoboyan: '驭火伯言',
        cljg_zhechongxingba: '折冲兴霸',
        cljg_jileibaihu: '机雷白虎',
        cljg_yunpingqinglong: '云屏青龙',
        cljg_lingjiaxuanwu: '灵甲玄武',
        cljg_chiyuzhuque: '炽羽朱雀',
        cljg_fudibian: '缚地狴犴',
        cljg_tuntianchiwen: '吞天螭吻',
        cljg_shihuosuanni: '食火狻猊',
        cljg_lieshiyazi: '裂石睚眦',
        cljg_anbangqingluan: '安邦青鸾',
        cljg_shouchiqianjiao: '守池潜蛟',
        cljg_hujiangqilin: '护疆麒麟',
        cljg_guyupixiu: '固域貔貅',
        qyhcCL_jiange_event_b_cljg_shenguiwuqian: '分发起始手牌前,随机一名其他角色变身为神鬼无前,且其改为一号位,游戏胜利条件改为击杀神鬼无前,失败条件仍为己方角色全部阵亡,且除神鬼无前外,其余角色均为同一阵营.',
        qyhcCL_jiange_event_a_baiguiyexing: '分发起始手牌前,随机一名其他角色变身为一位主将为十殿阎罗·主帅,副将为十殿阎罗·阴兵的角色,且其改为四号位,游戏胜利条件改为击杀其,失败条件仍为己方角色全部阵亡,且除其外,其余角色均为同一阵营.<br>特殊机制:每轮开始时,其获得一个额外回合,若其有「魅」,其移去所有「魅」,否则随机一名非其角色翻面;其翻至背面时获得1枚「魅」并取消之.',
        qyhcCL_jiange_event_a_yuanshenqidong: '你成为一号位BOSS并为一独立阵营,其余角色均为同一阵营,你获得〖乱击〗和〖图射〗.',
        cljg_xiaorui: '骁锐',
        cljg_xiaorui_info: '锁定技,己方角色使用的【杀】结算结束后,若之造成过伤害,之不计入次数限制.',
        cljg_huchen: '虎臣',
        cljg_huchen_info: '锁定技,其他角色死亡后,己方角色各摸一张牌,其中的当前回合角色多摸两张牌.',
        cljg_tianjiang: '天将',
        cljg_tianjiang_info: '英灵技,锁定技,己方角色每回合使用的第一张牌造成伤害后,其摸一张牌.',
        cljg_fengjian: '封缄',
        cljg_fengjian_info: '锁定技,其他角色受到你造成的伤害后,其获得〖封缄〗直到其回合结束;若你势力不为蜀,敌方角色计算与你的距离为1、对你使用的牌不计入次数限制且不能被响应.',
        cljg_keding: '克定',
        cljg_keding_info: '锁定技,你使用【杀】无距离限制、无视防具且目标上限+1.',
        cljg_longwei: '龙威',
        cljg_longwei_info: '英灵技,锁定技,己方角色进入或脱离濒死状态时,其摸一张牌.',
        cljg_bashi: '拔矢',
        cljg_bashi_info: '当【杀】或普通锦囊牌确定目标后,你可以翻至背面令此牌对己方角色无效,己方角色各摸一张牌,你对当前回合角色造成2点伤害.',
        cljg_danjing: '啖睛',
        cljg_danjing_info: '己方角色处于濒死状态时,若你体力大于1,你可以视为使用一张【桃】,失去1点体力且翻至正面.',
        cljg_tongjun: '统军',
        cljg_tongjun_info: '英灵技,锁定技,若你背面朝上,己方角色的攻击范围+2,敌方角色计算与你的距离+2.',
        cljg_jiaoxie: '缴械',
        cljg_jiaoxie_info: '出牌阶段限一次,你可以选择至多两名有牌的敌方角色,这些角色依次执行:若其为器械,你获得其一张牌,否则其交给你一张牌.',
        cljg_diaoling: '调令',
        cljg_diaoling_info: '英灵技,出牌阶段限一次,你可以移动场上一张牌.',
        cljg_yanliao: '烟燎',
        cljg_yanliao_info: '锁定技,结束阶段,你对所有敌方角色造成1点火焰伤害.',
        cljg_kunlao: '困牢',
        cljg_kunlao_info: '结束阶段,你可以令一名敌方角色翻面.',
        cljg_huijian: '慧箭',
        cljg_huijian_info: '锁定技,出牌阶段开始时,你令此阶段敌方角色不能使用牌且防具和所有技能失效,你视为对敌方角色使用一张【万箭齐发】.',
        cljg_jinlin: '金鳞',
        cljg_jinlin_info: '锁定技,防止你受到的雷电伤害.',
        cljg_jiguan: '机关',
        //cljg_jiguan_info:'锁定技,为伤害牌的每回合被使用的第一张牌不能指定你为目标.',
        cljg_jiguan_info: '锁定技,每轮开始时,你获得1点护甲.',
        cljg_lingyu: '灵愈',
        cljg_lingyu_info: '锁定技,结束阶段,你视为对己方角色使用一张【桃园结义】,所有未受伤的己方角色摸一张牌.',
        cljg_beijiang: '悲江',
        cljg_beijiang_info: '锁定技,己方角色受到伤害后,若其:能重铸一张牌,其须如此做;否则其回复1点体力.',
        cljg_xuankai: '玄铠',
        cljg_xuankai_info: '锁定技,【杀】对体力为1或没有手牌的己方角色无效.',
        cljg_tianyun: '天陨',
        cljg_tianyun_info: '结束阶段,你可以对一名敌方角色造成2点火焰伤害且弃置其装备区内所有牌,你选择一名敌方角色,其与你依次失去1点体力.',
        cljg_zhenwei: '镇卫',
        cljg_zhenwei_info: '锁定技,敌方角色计算与己方角色的距离+1.',
        cljg_benlei: '奔雷',
        cljg_benlei_info: '准备阶段,你可以对一名敌方角色造成2点雷电伤害,你对一名敌方器械造成1点雷电伤害.',
        cljg_nailuo: '奈落',
        cljg_nailuo_info: '结束阶段,你可以与所有敌方角色依次失去1点体力且弃置装备区内所有牌.',
        cljg_biyan: '避炎',
        cljg_biyan_info: '锁定技,结束阶段,你将一张手牌当冰【杀】对所有敌方角色使用.',
        cljg_tunshi: '吞噬',
        cljg_tunshi_info: '锁定技,准备阶段,你对手牌数不小于你的敌方角色各造成1点伤害.',
        cljg_yuhuo: '浴火',
        cljg_yuhuo_info: '锁定技,防止你受到的火焰伤害.',
        cljg_qiwu: '栖梧',
        cljg_qiwu_info: '当你使用〈♥️️／♣️️〉牌时,你可以〈对一名敌方角色造成1点火焰伤害／令一名己方角色回复1点体力〉.',
        cljg_tianyu: '天狱',
        cljg_tianyu_info: '英灵技,锁定技,结束阶段,所有敌方角色依次执行:若其重置,其横置,否则其弃置一张牌.',
        cljg_gongshen: '工神',
        cljg_gongshen_info: '锁定技,结束阶段,你依次执行:令一名己方器械回复1点体力;对一名敌方器械造成1点火焰伤害.',
        cljg_runjiang: '润江',
        cljg_runjiang_info: '锁定技,结束阶段,你依次执行:令一名己方角色回复1点体力;令一名敌方角色失去1点体力.',
        cljg_zhinang: '智囊',
        cljg_zhinang_info: '锁定技,准备阶段,你视为使用一张对敌方角色无效的【五谷丰登】.',
        cljg_jingmiao: '精妙',
        cljg_jingmiao_info: '英灵技,锁定技,目标角色数为0的锦囊牌被使用时,若使用者为:敌方角色,其失去1点体力;否则其回复1点体力.',
        cljg_biantian: '变天',
        cljg_biantian_info: '锁定技,每轮结束时,你判定,若结果为:♥️️,你对一名敌方角色造成2点火焰伤害;♦️️,敌方所有角色进入狂风状态直到有轮结束;♠️️,己方所有角色进入大雾状态直到有轮结束;♣️️,你令一名己方角色回复2点体力.',
        cljg_qizhen: '奇阵',
        cljg_qizhen_info: '英灵技,每回合限一次,当己方角色需要使用或打出【闪】时,你可以判定,若结果为红色,视为其使用或打出了一张【闪】.',
        cljg_lingfeng: '灵锋',
        cljg_lingfeng_info: '准备阶段,你可以展示牌堆顶两张牌,若这两张牌颜色相同,你令一名敌方角色失去1点体力;否则你获得其中一张牌.',
        cljg_jizhen: '激阵',
        cljg_jizhen_info: '英灵技,锁定技,己方角色的回合内,其【闪】视为火【杀】.',
        cljg_huodi: '惑敌',
        cljg_huodi_info: '英灵技,结束阶段,若有己方角色背面朝上,你可以令一名敌方角色翻面.',
        cljg_jueji: '绝汲',
        cljg_jueji_info: '锁定技,已受伤的敌方角色摸牌阶段少摸一张牌.',
        cljg_xiangxing: '祥兴',
        cljg_xiangxing_info: '锁定技,己方角色摸牌阶段多摸一张牌.',
        cljg_jixian: '机先',
        cljg_jixian_info: '觉醒技,敌方角色的回合开始时,你获得一个回合并结束当前回合.',
        cljg_chuanyun: '穿云',
        cljg_chuanyun_info: '英灵技,结束阶段,你可以对一名敌方角色造成1点伤害.',
        cljg_leili: '雷厉',
        cljg_leili_info: '当【杀】或【决斗】对一名角色造成伤害后,若来源为你,你可以对另一名敌方角色造成1点雷电伤害.',
        cljg_fengxing: '风行',
        cljg_fengxing_info: '准备阶段,你可以无距离限制地视为对一名敌方角色使用一张【杀】.',
        cljg_konghun: '控魂',
        cljg_konghun_info: '锁定技,准备阶段,你对所有敌方角色各造成1点雷电伤害,若:你体力不大于敌方角色数,你回复1点体力;否则所有敌方角色依次对你造成1点火焰伤害.',
        cljg_xuanlei: '玄雷',
        cljg_xuanlei_info: '英灵技,结束阶段,你可以对一名判定区内有牌的敌方角色造成1点雷电伤害.',
        cljg_chiying: '持盈',
        cljg_chiying_info: '英灵技,锁定技,己方角色受到大于1点的伤害后,其回复1点体力.',
        cljg_jingfan: '惊帆',
        cljg_jingfan_info: '锁定技,己方角色计算与敌方角色的距离-1.',
        cljg_yege: '曳戈',
        cljg_yege_info: '出牌阶段限一次,你可以弃置至多<span class=greentext>3</span>名角色装备区内所有牌,随机一名己方角色的一个空装备栏内置入一张铸造的随机装备牌并令绿色数字-1.',
        cljg_poli: '魄立',
        cljg_poli_info: '结束阶段,你可以令装备区内有牌的角色各摸一张牌.',
        cljg_shameng: '歃盟',
        cljg_shameng_info: '英灵技,己方角色对己方角色造成伤害时,你可以防止此伤害.',
        cljg_yeyan: '业焱',
        cljg_yeyan_info: '出牌阶段限一次,你可以对至多<span class=firetext>3</span>名角色各造成1点火焰伤害,橙色数字-1.',
        cljg_xiongzi: '雄姿',
        cljg_xiongzi_info: '英灵技,锁定技,摸牌阶段结束时,其他己方角色各摸一张牌.',
        cljg_tanjiang: '探江',
        cljg_tanjiang2: '探江',
        cljg_tanjiang_info: '锁定技,出牌阶段开始时,你选择一项:1.视为对所有距离为1的敌方角色使用一张【杀】;2.令你计算与其他角色的距离-1.',
        cljg_poxi: '迫袭',
        cljg_poxi_info: '锁定技,当你造成伤害后,伤者手牌上限-1;手牌上限为0的敌方角色摸牌阶段少摸一张牌.',
        cljg_shenju: '慎拒',
        cljg_shenju_info: '英灵技,锁定技,己方角色的弃牌阶段开始时,若其手牌数大于体力,其手牌上限+1.',
        cljg_huchi: '护池',
        cljg_huchi2: '护池',
        cljg_huchi_info: '每名角色限一次,己方角色处于濒死状态时,其可以弃置区域内所有牌,回复体力至2点并摸两张牌.',
        cljg_tengchuo: '腾踔',
        cljg_tengchuo_info: '锁定技,己方角色的结束阶段,你视为对其使用一张【洞烛先机】,其将一张牌置于牌堆顶.',
        cljg_cuilin: '摧林',
        cljg_cuilin_info: '出牌阶段开始时,你可以横置所有敌方角色且视为使用一张【火烧连营】.',
        cljg_zhanyan: '绽火',
        cljg_zhanyan_info: '限定技,出牌阶段,你可以对一名角色造成3点火焰伤害.',
        cljg_yibei: '逸备',
        cljg_yibei_info: '英灵技,每轮开始时,你可以视为对所有己方角色使用一张【以逸待劳】.',
        cljg_douhun: '斗魂',
        cljg_douhun_info: '锁定技,己方角色的回合开始时,若其体力不大于1,其获得〖英姿〗和〖英魂〗直到有回合开始或结束.',
        cljg_angyang: '猘昂',
        cljg_angyang_info: '英灵技,锁定技,出牌阶段开始时,你视为使用一张【决斗】.',
        cljg_xihun: '袭魂',
        cljg_xihun_info: '出牌阶段限一次,你可以选择至多<span class=bluetext>3</span>名有手牌的角色,你同时观看这些角色的手牌并可以弃置这些牌中四张花色各不相同的牌令蓝色数字-1.',
        cljg_huiwan: '会挽',
        cljg_huiwan_info: '英灵技,每回合限一次,你可以视为使用或打出一张【杀】.'
    };
    qyhcCL.jiangeInfos = {
        cljg_shihuosuanni: '　　狻猊,中国古代神话中的神兽,<龙生九子>中的第五子,为龙和狮所生,形似狮子,喜静不喜动,好坐,喜烟火,常被用于装饰香炉脚部.',
        cljg_fudibian: '　　狴犴,中国古代神话中的神兽,<龙生九子>中的第七子,为龙和虎所生,形似虎,平生好讼,又有威力,常用于装饰狱门上部,既是牢狱的象征,又是黎民百姓的守护神.',
        cljg_tuntianchiwen: '　　螭吻,中国古代神话中的神兽,<龙生九子>中的第九子,为龙和鱼所生,龙头鱼身,平生好吞,喜欢东张西望,常被用于装饰宫殿建筑的屋脊.',
        cljg_lieshiyazi: '　　睚眦,中国古代神话中的神兽,<龙生九子>中的第二子,为龙和豺所生,豺身龙首,好勇擅斗,嗜血嗜杀,为克杀一切邪恶的化身.<br>　　<睚眦>意为瞪眼怒视,<睚眦必报>则指连被瞪一眼都要报复,形容极小的怨恨也一定要报复.',
        cljg_chiyuzhuque: '　　朱雀,中国古代神话中的神明,天之四灵(即四大神兽)之一,源于远古星宿崇拜,代表炎帝与南方七宿的南方之神,于八卦为离,于五行主火,于四季生夏,于四象为老阳.<br>　　朱雀的图腾往往属于太阳崇拜.朱,此处意为<大红色>.',
        cljg_lingjiaxuanwu: '　　玄武,中国古代神话中的神明,天之四灵(即四大神兽)之一,源于远古星宿崇拜,代表颛顼和北方七宿的北方之神,于八卦为坎,于五行主水,于四季生冬,于四象为老阴.<br>　　玄武是由龟和蛇组合成的灵物.玄,此处意为<赤黑色>.',
        cljg_jileibaihu: '　　白虎,中国古代神话中的神明,天之四灵(即四大神兽)之一,源于远古星宿崇拜,代表少昊和西方七宿的西方之神,于八卦为乾、兑,于五行主金,于四季生秋,于四象为少阴.<br>　　白虎形象全身如雪,无杂毛.',
        cljg_yunpingqinglong: '　　青龙,中国古代神话中的神明,天之四灵(即四大神兽)之一,源于远古星宿崇拜,代表太昊和东方七宿的东方之神,于八卦为震、巽,于五行主木,于四季生春,于四象为少阳.<br>　　青龙又称苍龙、孟章.青,此处意为<绿色>.',
        cljg_liedixuande: '　　汉昭烈帝刘备(161～223/6/10),字玄德,涿郡涿县(今河北省涿州市大树楼桑村)人,西汉中山靖王刘胜之后,三国时期蜀汉开国皇帝(221/5/15～223/6/10在位)、政治家.史家多称其为先主.<br>　　刘备少年时拜卢植为师,而后参与镇压黄巾起义.因为自身实力有限,刘备在诸侯混战过程中屡遭失败,先后依附公孙瓒、陶谦、曹操、袁绍、刘表等多个诸侯.但因其始终坚持以德服人的行为准则,受到了四方名士的尊敬,至有陶谦、刘表等放弃让自己的儿子继承基业,而是选择将自己的领地徐州、荆州让给刘备统领.<br>　　通过坚持不懈的努力,刘备于赤壁之战后,先后拿下荆州、益州,建立了蜀汉政权.而后因为关羽被东吴所害,刘备不听群臣劝阻,执意发动对吴国的战争,结果兵败夷陵,最终于223年病逝于白帝城,终年六十三岁,谥号昭烈皇帝,<晋书·王弥传>称之为烈祖,葬惠陵.<br>　　刘备弘毅宽厚,知人待士,百折不挠,其临死前举国托付给诸葛亮的行为被陈寿赞为<古今之盛轨>,后世众多文艺作品以刘备为主角.成都武侯祠有汉昭烈庙为之纪念.',
        cljg_fuweizilong: qyhcCL.characterIntro.zhaoyun,
        cljg_gongshenyueying: '　　黄氏,本名不详,沔南名士黄承彦之女,诸葛亮之妻.传说名为黄月英(最早或出自袁阔成的评书<三国演义>).<br>　　其人记载见<襄阳耆旧记>,其父称其长相丑陋、黄头发、黑皮肤,但才华却与诸葛亮相称 .乡间有<莫作孔明择妇,正得阿承丑女>的谚语流传.',
        cljg_tianhoukongming: '　　诸葛亮(181～234/10/8),字孔明,号卧龙,琅琊阳都(今山东省临沂市沂南县)人,三国时期蜀汉丞相,中国古代杰出的政治家、军事家、发明家、文学家.<br>　　诸葛亮早年随叔父诸葛玄到荆州,诸葛玄死后,诸葛亮就在隆中隐居.刘备依附荆州刘表时三顾茅庐,诸葛亮向刘备提出占据荆州、益州,联合孙权共同对抗曹操的<草庐对策>(一说隆中对),刘备根据诸葛亮的策略,成功建立蜀汉政权,与孙权、曹操形成三足鼎立之势.221年,刘备称帝,任命诸葛亮为丞相,伐吴失败后,刘备于永安举国托付于诸葛亮.刘禅继位后,封诸葛亮为武乡侯,领益州牧.勤勉谨慎,大小政事必亲自处理,赏罚严明;与东吴联盟,改善和西南各族的关系;实行屯田政策,加强战备.前后五次北伐中原,未能实现兴复汉室的目标.终因积劳成疾,于234年病逝于五丈原(今陕西省宝鸡市岐山境内),享年五十四岁.后主刘禅追谥为忠武侯,后世常以武侯尊称.东晋桓温追封为武兴王.<br>　　诸葛亮散文代表作有<出师表><诫子书>等.曾发明木牛流马、孔明灯等,并改造连弩,叫做诸葛连弩,可一弩十矢俱发.诸葛亮一生<鞠躬尽瘁,死而后已>,是中国传统文化中忠臣与智者的代表人物.',
        cljg_yihanyunchang: '　　关羽(？～220),字云长,本字长生,河东郡解县(今山西省运城市盐湖区解州镇)人.东汉末年名将.<br>　　汉末亡命涿郡,与张飞从刘备起兵.刘备得徐州后,使关羽行太守事.200年,曹操东进,击破刘备,关羽被俘,遂随曹操于官渡迎击袁绍军,刺袁绍大将颜良于万众之中,封汉寿亭侯,不久辞归刘备,后随刘备依附荆州牧刘表.<br>　　208年,曹操入荆州,刘备率众南逃,关羽与之共至夏口.及曹操败于赤壁,刘备收江南诸郡,任命关羽为襄阳太守、荡寇将军.刘备西定益州,使关羽镇守荆州.215年,关羽尽逐孙权所置长沙、零陵、桂阳三郡长吏.219年,拜为前将军,围攻曹操将征南将军曹仁于樊城,时值汉水泛滥,左将军于禁所督七军皆被淹没,又斩将军庞德,自许(今河南许昌)以南往往遥应,威震华夏.曹操派平寇将军徐晃往救,而吴乘机袭取江陵,关羽遂败走麦城(今湖北当阳东南),与儿子关平同为吴军俘杀.追谥壮缪侯.好<左传>,善待卒伍而骄于士大夫,以忠义见称于后世.<br>　　关羽去世后,民间尊为<关公>,历代朝廷多有褒封.清朝雍正时期,尊为<武圣>,与<文圣>孔子地位等同.在小说<三国演义>中,名列<五虎上将>之首,使用青龙偃月刀.毛宗岗称其为<演义>三绝中的<义绝>.在宗教文化方面,关羽被儒家尊为文衡帝君,被佛教尊为护法伽蓝菩萨(伽蓝神)、盖天古佛,被道教尊为协天大帝、翔汉天神等.',
        cljg_yuhuoshiyuan: '　　庞统(179～214),字士元,号凤雏,襄阳(治今湖北襄阳)人.东汉末年刘备帐下重要谋士,与诸葛亮同拜为军师中郎将.<br>　　庞统初任郡功曹,后跟随周瑜,被周瑜任以大事,周瑜逝世于巴丘,庞统为其吊丧至东吴,与陆绩、顾劭、全琮等人结交而还.南郡借给刘备后,从事署理,继守耒阳令,不治理公务而被免职.鲁肃、诸葛亮以庞统<非百里之才>力荐,刘备十分器重,委以治中从事重任.后与刘备一同入川,于刘备与刘璋决裂之际,献上中下三条计策,刘备用其中计.进围雒县时,庞统率众攻城,不幸中流矢而亡,年仅三十六岁,追赐统为关内侯,谥曰靖侯.葬于落凤坡.',
        cljg_baijiwenyuan: '　　张辽(169～222),字文远,雁门马邑(今山西省朔州市)人.汉末三国时期曹魏名将,聂壹的后人.<br>　　起初,担任雁门郡吏.又先后跟随丁原、何进、董卓、吕布,恪尽职守,历尽坎坷.吕布败亡后,张辽归属曹操.此后,立下众多显赫的功勋.洞察敌情而劝降昌豨.攻袁氏而转战河北.在白狼山之战率领先锋大破乌桓并斩杀乌桓单于蹋顿.驱逐辽东大将柳毅.以静制动平定军中谋反.进军江淮击灭陈兰、梅成.此后,长期镇守合肥.<br>　　215年,合肥之战,张辽率领八百将士,袭击东吴十万大军,一直冲杀到孙权的主帅旗下,令东吴军队皆披靡.在东吴撤军时,张辽率领追兵,大破孙权、甘宁、凌统等,差点活捉孙权.经此一役,张辽威震江东. <张辽止啼>成为流传千古的典故.<br>　　220年,张辽进封晋阳侯.染病之后,依旧令孙权非常忌惮.222年,张辽抱病击破吴将吕范.同年,病逝于江都,谥曰刚侯.张辽为历代所推崇,成为古今六十四名将之一.',
        cljg_duanyuzhongda: '　　司马懿(179～251/9/7),字仲达,河内郡温县孝敬里(今河南省焦作市温县)人.三国时期曹魏政治家、军事谋略家、权臣,西晋王朝的奠基人之一.<br>　　司马懿自幼聪明多大略,博学洽闻,伏膺儒教.因汉室被曹氏所控制,司马懿一度拒绝曹操授予的官职,但208年,曹操任丞相后,强行辟司马懿为文学掾.因司马懿曾支持曹操称帝,所以逐渐赢得了曹操的信任.曹操封魏王后,以司马懿为太子中庶子以佐助曹丕,帮助曹丕在储位之争中获得胜利.曹丕临终时,令司马懿与曹真等为辅政大臣,辅佐魏明帝曹叡.明帝时,司马懿屡迁抚军大将军、大将军、太尉等重职.明帝崩,托孤幼帝曹芳于司马懿和曹爽.曹芳继位后,司马懿遭到曹爽排挤,升官为无实权的太傅.249年,司马懿趁曹爽陪曹芳离洛阳至高平陵祭陵,起兵政变并控制京都洛阳.自此,曹魏的军政权力落入司马氏手中,史称高平陵事变.司马懿善谋奇策,多次征伐有功,曾率军擒斩孟达,两次率大军成功抵御诸葛亮北伐,远征平定辽东.对屯田、水利等农耕经济发展有重要贡献.<br>　　251年,司马懿病逝,享年七十三岁,辞郡公和殊礼,葬于首阳山,谥号宣文.其次子司马昭封晋王后,追谥司马懿为宣王;其孙司马炎称帝后,追尊司马懿为宣皇帝,庙号高祖.',
        cljg_jiarenzidan: '　　曹真(？～231),字子丹,曹操族子(一说原姓秦),其父战死后,曹操收为养子.沛国谯县(今安徽省亳州市)人,三国时期曹魏名将.<br>　　曹真幼年丧父,被曹操收养,力大勇猛,授虎豹骑.因讨伐灵丘的贼寇,封为灵寿亭侯.历任偏将军、中领军、征蜀护军等职,参与汉中之战.曹丕继位后,拜为镇西将军,都督雍凉诸军事,负责镇守西北边境,进封东乡侯.迁使持节、上军大将军,都督中外诸军事,成为曹魏军队的最高统帅之一.大破羌胡联军,平定河西地区.率军包围江陵,击破吴国将领孙盛,迁中军大将军、给事中.曹丕病重时,接受遗诏,成为辅政大臣之一.魏明帝曹叡即位后,拜大将军,进封邵陵侯.后率军抵御蜀国诸葛亮进攻,迁大司马.<br>　　231年,曹真因病去世,谥号为元,配享太祖(曹操)庙庭.',
        cljg_jiarenzidan: '　　曹真(？～231),字子丹,曹操族子(一说原姓秦),其父战死后,曹操收为养子.沛国谯县(今安徽省亳州市)人,三国时期曹魏名将.<br>　　曹真幼年丧父,被曹操收养,力大勇猛,授虎豹骑.因讨伐灵丘的贼寇,封为灵寿亭侯.历任偏将军、中领军、征蜀护军等职,参与汉中之战.曹丕继位后,拜为镇西将军,都督雍凉诸军事,负责镇守西北边境,进封东乡侯.迁使持节、上军大将军,都督中外诸军事,成为曹魏军队的最高统帅之一.大破羌胡联军,平定河西地区.率军包围江陵,击破吴国将领孙盛,迁中军大将军、给事中.曹丕病重时,接受遗诏,成为辅政大臣之一.魏明帝曹叡即位后,拜大将军,进封邵陵侯.后率军抵御蜀国诸葛亮进攻,迁大司马.<br>　　231年,曹真因病去世,谥号为元,配享太祖(曹操)庙庭.',
        cljg_juechenmiaocai: '　　夏侯渊(？～219),字妙才,沛国谯县(今安徽亳州市谯城区)人.东汉末年名将,太仆夏侯婴后代.<br>　　夏侯渊早年跟随曹操征伐四方,先后任骑都尉和陈留、颍川二郡太守.参加官渡之战,负责督运粮草.擅长千里奔袭,作战出其不意,先后平定昌豨、徐和、雷绪、商曜等叛乱.渭南之战后,夏侯渊率军剿灭关陇地区的韩遂余部以及羌、氐部落,威震关右地区.凭借功勋,累迁征西将军,受封博昌亭侯.张鲁投降曹操后,夏侯渊负责镇守汉中.建安二十四年,刘备率军进攻汉中,夏侯渊被黄忠袭杀.死后谥号为愍,配享太祖(曹操)庙庭.',
        cljg_kumuyuanrang: '　　夏侯惇(？～220/6/13),字元让,沛国谯县(今安徽省亳州市)人.汉末三国时期曹魏名将,西汉开国元勋夏侯婴的后代.<br>　　少年时以勇气闻名于乡里.曹操起兵,夏侯惇是其最早的将领之一.与吕布军交战时,曾一度被擒为人质,又被流矢射瞎左眼.多次为曹操镇守后方,曾率军民阻断太寿河水,筑陂塘灌溉农田,使百姓受益,功勋卓著.官至大将军,封高安乡侯.追谥忠侯(<史记·谥法解>云:<危身奉上曰忠.险不辞难.>).233年,得以配享太祖(曹操)庙庭.<br>　　夏侯惇一生多在军旅,仍不忘治学.他常亲自迎师,虚心求教.他为人俭朴,所得赏赐全部分给将士.一生不置产业,至死家无余财.',
        cljg_qiaokuijunyi: '　　张郃(？～231),字儁乂,河间郡鄚县(今河北省任丘市)人.汉末三国时期魏国名将.<br>　　早年参与镇压黄巾起义.归属袁绍后,击破公孙瓒有功,迁宁国中郎将.参加官渡之战,攻曹洪不下,随后投降曹操,授偏将军.<br>　　跟随曹操攻河北,跟随张辽定淮南,跟随夏侯渊平凉州,跟随曹操夺汉中,屡建战功.215年,进军巴西,迁徙民众到汉中,后被蜀将张飞击败.接任荡寇将军.218年,跟随夏侯渊进入汉中定军山迎战刘备.夏侯渊战死,代理主帅,率部安全撤退.后屯陈仓.<br>　　曹丕称帝后,迁左将军,受封鄚县侯,跟随曹真击平安定羌胡,又随夏侯尚围攻江陵.228年,以特进、右将军的身份随曹真抵御诸葛亮北伐.在街亭之战中大破马谡,迫使诸葛亮退回汉中,迁征西车骑将军.<br>　　231年,司马懿不听张郃劝告,张郃迫不得已领兵追击蜀军,追至木门,中箭身亡,谥曰壮侯.张郃用兵巧变,善列营阵,善估形势,善用地形.蜀汉的诸葛亮等都忌惮张郃.',
        cljg_ximengzijing: '　　鲁肃(172～217),字子敬,汉族,临淮郡东城县(今安徽省滁州市定远县人),东汉末年杰出战略家、外交家.<br>　　鲁肃出生于一士族家庭.幼年丧父,由祖母抚养长大.他体貌魁伟,性格豪爽,喜读书、好骑射.东汉末年,他眼见朝廷昏庸,官吏腐败,社会动荡,常召集乡里青少年练兵习武.他还仗义疏财,深得乡人敬慕.当时,周瑜为居巢长,因缺粮向鲁肃求助,鲁肃将一仓三千斛粮食慷慨赠给周瑜.从此,二人结为好友,共谋大事.<br>　　200年,在周瑜的引荐下,鲁肃率领部属投奔孙权,为其提出鼎足江东的战略规划,因此得到孙权的赏识.208年,曹操率大军南下.孙权部下多主降,而鲁肃与周瑜力排众议,坚决主战.结果,孙刘联军大败曹军于赤壁,从此,奠定了三国鼎立格局.<br>　　赤壁大战后,鲁肃常被孙权比作东汉开国元勋之首——邓禹.孙权专门为鲁肃而设立赞军校尉一职.周瑜逝世后,孙权采纳周瑜生前建议,令鲁肃代周瑜职务领兵四千人,因鲁肃治军有方,军队很快发展到万余人.孙权根据当时政治军事形势需要,又任命鲁肃为汉昌太守,授偏将军;鲁肃随从孙权破皖城后,被授为横江将军,守陆口.此后,东吴夺取了荆州三郡,鲁肃率兵抵御关羽,并邀荆州守将关羽相见.在单刀赴会时,鲁肃口若悬河,令关羽无言以对.<br>　　217年,鲁肃去世,终年46岁,孙权亲自为鲁肃发丧,诸葛亮亦为其发哀.',
        cljg_baohubofu: '　　孙策(175～200/5/5),字伯符,吴郡富春(今浙江省杭州市富阳区)人.破虏将军孙坚长子、吴大帝孙权长兄.东汉末年割据江东一带的军阀,汉末群雄之一,孙吴政权的奠基者之一.<三国演义>称其武勇犹如霸王项羽,绰号<小霸王>.<br>　　孙坚在北方参与平定黄巾、董卓之乱等军事活动,年少的孙策携母迁居舒(今安徽庐江西南),与当地豪族名士周瑜等交友,收合士大夫,深得江、淮人心,颇有声誉.孙坚死后,孙策为继承父亲孙坚未完成的事业而屈事袁术.在庐江血战两年,最终破城,却遭袁术的失信.195年,孙策征得袁术许可,东渡长江,周瑜将兵迎之,进攻樊能、于糜,又在当利口袭击张英,并以曲阿为据点,与扬州刺史刘繇进行决战,大败刘繇.196年,率兵进攻会稽王朗和吴郡严白虎.197年,袁术僭越称帝后,孙策与袁术决裂;同年夏,被朝廷任命为骑都尉,袭父爵乌程侯,兼任会稽太守.198年,朝廷任命孙策为讨逆将军,并封为吴侯.199年,孙策击败庐江太守刘勋及刘表部将黄祖.<br>　　200年初,孙策在夺取豫章郡后统一江东.同年四月,正当孙策准备发兵北上之际,在丹徒狩猎时为许贡三门客所伤,不久后身亡,年仅二十六岁.其弟孙权接掌孙策势力,并于称帝后追谥孙策为长沙桓王.',
        cljg_yingjungongjin: '　　周瑜(175～210),字公瑾,庐江舒县(今安徽庐江县西南)人.东汉末年军事家、政治家、谋略家、东吴名将.出身庐江周氏,洛阳令周异之子,从祖周景、从父周忠,都官至太尉,位列三公.周瑜身材高大,容貌俊美,精音律,当时有<曲有误周郎顾>之语.<br>　　周瑜少与孙策交好,兴平二年,助孙策于曲阿之战中击败刘繇.建安三年起随孙策平定江东.建安五年,孙策遇刺身亡,孙权继任,周瑜将兵赴丧,以中护军的身份与长史张昭共掌众事.建安七年,曹操责权送质,周瑜谏阻纳质,建议孙权占据江南,拥兵观变,确立了割据江东、独立建国的战略方针.建安十三年,曹军兵临江东,周瑜分析曹操兵行四患,力主抗曹,并亲率吴军,以火攻大败曹军于赤壁.赤壁之战是中国历史上著名的以少胜多的战役之一,此役奠定了汉末<三分天下>的基础.建安十四年,周瑜又率军于南郡之战中大破曹仁、徐晃联军,成功夺取军事重镇江陵,拜偏将军领南郡太守.建安十五年提出<取蜀,并张鲁,联马超,再以襄阳为根据地蚕食曹操,北方可图>的战略.在整装取蜀途中病逝于巴丘,年仅三十六岁.<br>　　正史上周瑜<性度恢廓>、<雅量高致>、<实奇才也>,他文武兼备,有雄才大略,是东吴势力取得军事成功和割据地位的主要功臣之一.被赞誉为<世间豪杰英雄士,江左风流美丈夫>.',
        cljg_wuxiaameng: '　　吕蒙(178～220),字子明,汝南郡富陂县(今安徽省阜南县王化镇吕家岗)人.东汉末年名将.<br>　　早年依附姊夫邓当,跟随孙策征战,以胆气著称.邓当死后,吕蒙统领其部众,拜别部司马.孙权统事后,吕蒙渐受重用,从破黄祖作先登,封横野中郎将.从破曹仁于南郡,从破朱光于皖城,累功拜庐江太守.进占荆州南部三郡,并计擒郝普.在逍遥津之战掩护孙权逃生.在濡须抵御魏军.官拜左护军、虎威将军.鲁肃去世后,吕蒙代守陆口,袭取荆州西部三郡,彻底击败蜀汉名将关羽,拜南郡太守,封孱陵侯,受勋殊隆.<br>　　219年末(一说220年初),因病去世,享年四十二岁.<br>　　吕蒙是东吴攻灭关羽的最早倡议者.吕蒙针对于关羽所督的荆州,215年夺取三郡,219年再夺三郡,最终使得东吴国土面积大增,实现了<全据长江>的宿愿.其发愤勤学的事迹,成为中国古代将勤补拙、笃志力学的代表,相关典故<士别三日>、<刮目相待>、<吴下阿蒙>等.',
        cljg_yuhuoboyan: '　　陆逊(183～245/3/19),本名陆议,字伯言,吴郡吴县人.三国时期吴国政治家、军事家.<br>　　出身吴郡陆氏.203年,入孙权幕府,历任海昌屯田都尉、定威校尉、帐下右部督.219年,陆逊参与袭取荆州.222年,孙权命陆逊为东吴大都督,在夷陵之战中火烧连营击败刘备,领荆州牧.228年,陆逊取得石亭之战的胜利.229年,孙权称帝后,以陆逊为上大将军、右都护,辅佐太子孙登并掌管陪都武昌事宜.244年拜为丞相、总领三公事务,领武昌事.孙和、孙霸<二宫之争>时卷入孙权父子相争中,次年去世,终年六十三岁,追谥<昭>.<br>　　陆逊跟随孙权四十余年,统领吴国军政二十余年.其为人深谋远虑,忠诚耿直.一生出将入相,被赞为<社稷之臣>.',
        cljg_zhechongxingba: '　　甘宁(？～215),字兴霸,三国时巴郡临江(今重庆忠县)人,孙吴将领.<br>　　甘宁少有气力,好游侠,在地方上为非作歹,组成渠师抢夺船只财物,崇尚奢华,人称锦帆贼.青年时停止抢劫,熟读诸子.曾任蜀郡丞,先投靠刘表,但未被重用,后归依孙权,孙权加以重用.曾随周瑜在乌林击败曹操在南郡攻打曹仁夺取夷陵.随鲁肃镇守益阳(今湖南境内)拒关羽,以功升任西陵(今湖北麻城县)太守,折冲将军.曹操出兵濡须,甘宁任前都督迎战,率兵百余,夜袭曹营,曹兵败退,创造了<百人闯曹营>的有名战例.207年,合肥战役中,甘宁与吕蒙、凌统等人随孙权过逍遥津北上,率部千余人,大战魏将张辽.215年,再次攻打合肥时战死,归葬于故里万县甘宁乡贯风村.<br>　　甘宁虽然粗野凶狠,暴躁嗜杀,甚至违反承诺、违抗命令,但是,开朗豪爽,有勇有谋,轻视钱财,敬重士人,厚待士卒,并深得士卒拥戴.陈寿在史书中将他列为<江表之虎臣>.',
        cljg_hujiangqilin: '　　麒麟,中国古代神话中的神兽,<五大瑞兽>之一,羊头、狼蹄、圆顶,身有五彩,高一丈二尺,有送子、辟邪的象征.',
        cljg_guyupixiu: '　　貔貅(pí xiū),别称百解,俗称貔大虎,中国古代神话中的神兽,<五大瑞兽>之一,形如虎豹,首尾似龙,色亦金亦玉,肩有双翼不可展,头生犄角向后仰(分一角或两角的,一角称为<天禄>,两角称为<辟邪>,以一角较为多见).',
        cljg_anbangqingluan: '　　青鸾,中国古代神话中的神兽,<五凤>之一,体表似孔雀,如鸡般大小,羽色华丽,可代指信使、镜子、女子、天子车架,是祥和、喜庆的瑞兆.另有青鸾可代指悲伤的爱情的说法.',
        cljg_shouchiqianjiao: '　　蛟,是古代中国传说中能发水的广义龙类,又称蛟龙,但并非龙.蛟栖息在湖渊等聚水处,也会悄悄地隐居在离民家很远的池塘或河流的水底.隐栖在池塘与河川的蛟龙,一般会被称作<蛟龙>.相传蛟龙得水即能兴云作雾,腾踔太空,在古文中常用<蛟龙得水>来比喻有才能的人获得施展的机会,<潜蛟>则常被用于描绘被埋没的贤才.'
    };
    lib.skill.lizhan.frequent = true;
    lib.skill.lizhan.filter = function (event, player) {
        return game.hasPlayer((current) => (current.isDamaged()));
    };
    lib.skill.lizhan.content = function () {
        'step 0'
        if (!_status.auto && player == game.me && game.hasPlayer((current) => (current.isDamaged() && current.isFriendsOf(player)))) {
            if (!lib.config.autoskilllist.includes('lizhan')) event._result = { bool: true, targets: [] };
            else player.chooseTarget('你可以发动〖励战〗选择任意名已受伤的角色', [1, Infinity], lib.filter.isDamaged).set('ai', ai.drawEffect).set('prompt2', '<center>这些角色各摸一张牌</center>').set('prompt2', '<center>这些角色各摸一张牌<br><span class=greentext>直接点确定则默认令所有己方角色各摸一张牌</span></center>').set('selectTarget', [0, Infinity]);
        } else {
            if (!_status.auto && player == game.me && !lib.config.autoskilllist.includes('lizhan')) event.finish();
            else player.chooseTarget('你可以发动〖励战〗选择任意名已受伤的角色', [1, Infinity], lib.filter.isDamaged).set('ai', ai.drawEffect).set('prompt2', '<center>这些角色各摸一张牌</center>');
        }
        'step 1'
        if (result.bool) {
            if (!result.targets || !result.targets.length) result.targets = game.filterPlayer((current) => (current.isDamaged() && current.isFriendsOf(player)));
            if (result.targets.length) {
                game.asyncDraw(result.targets.sortBySeat(_status.currentPhase));
            }
        }
    }
    lib.qyhc_firstGain({}, 'skill', 'olduorui', 'audioname2');
    lib.skill.olduorui.audioname2.cljg_baijiwenyuan = 'cljg_duorui';
    lib.skill.olduorui.audioname2.cljg_zhechongxingba = 'cljg_duoruign';
    lib.qyhc_firstGain({}, 'skill', 'tiandu', 'audioname2');
    lib.skill.tiandu.audioname2.cljg_tianhoukongming = 'cljg_tiandu';
    lib.qyhc_firstGain({}, 'skill', 'olhongyuan', 'audioname2');
    lib.skill.olhongyuan.audioname2.cljg_guyupixiu = 'cljg_hongyuan';
    lib.qyhc_firstGain({}, 'skill', 'lanjiang', 'audioname2');
    lib.skill.lanjiang.audioname2.cljg_guyupixiu = 'cljg_lanjiang';
    lib.qyhc_firstGain({}, 'skill', 'yifa', 'audioname2');
    lib.skill.yifa.audioname2.cljg_fudibian = 'cljg_suwei';
    lib.qyhc_firstGain({}, 'skill', 'lizhan', 'audioname2');
    lib.skill.lizhan.audioname2.cljg_liedixuande = 'cljg_lizhan';
    lib.skill.lizhan.audioname2.cljg_jiarenzidan = 'cljg_lizhanzd';
    lib.skill.lizhan.audioname2.cljg_baohubofu = 'cljg_lizhansc';
    for (var i in qyhcCL.jiangeSkills) lib.skill[i] = qyhcCL.jiangeSkills[i];
    for (var i in qyhcCL.jiangeTrans) lib.translate[i] = qyhcCL.jiangeTrans[i];
    for (var i in qyhcCL.jiangeInfos) lib.characterIntro[i] = qyhcCL.jiangeInfos[i];
    if (config.jiangechange) {
        if (config.boss_init) {
            lib.characterSort.qyhc_boss.WEIyingling = ['cljg_juechenmiaocai', 'cljg_baijiwenyuan', 'cljg_kumuyuanrang', 'cljg_duanyuzhongda', 'cljg_jiarenzidan', 'cljg_qiaokuijunyi'];
            lib.characterSort.qyhc_boss.WEIqixie = ['cljg_lieshiyazi', 'cljg_shihuosuanni', 'cljg_fudibian', 'cljg_tuntianchiwen'];
            lib.characterSort.qyhc_boss.HANyingling = ['cljg_liedixuande', 'cljg_yihanyunchang', 'cljg_fuweizilong', 'cljg_tianhoukongming', 'cljg_gongshenyueying', 'cljg_yuhuoshiyuan'];
            lib.characterSort.qyhc_boss.HANqixie = ['cljg_yunpingqinglong', 'cljg_chiyuzhuque', 'cljg_jileibaihu', 'cljg_lingjiaxuanwu'];
            lib.characterSort.qyhc_boss.WUyingling = ['cljg_baohubofu', 'cljg_yuhuoboyan', 'cljg_wuxiaameng', 'cljg_yingjungongjin', 'cljg_ximengzijing', 'cljg_zhechongxingba'];
            lib.characterSort.qyhc_boss.WUqixie = ['cljg_shouchiqianjiao', 'cljg_anbangqingluan', 'cljg_hujiangqilin', 'cljg_guyupixiu'];
            lib.characterPack.qyhc_boss = {
                ...lib.characterPack.qyhc_boss,
                ...qyhcCL.jiangeBoss
            }
            if (lib.config.characters.includes('qyhc_boss')) {
                for (var i in lib.character) {
                    if (Array.isArray(lib.character[i]) && Array.isArray(lib.character[i][4])) if (lib.character[i][4].includes('jiangeboss') || lib.character[i][4].includes('jiangemech')) {
                        delete lib.character[i];
                    }
                }
                for (var i in qyhcCL.jiangeBoss) {
                    if (lib.config.forbidai_user && lib.config.forbidai_user.includes(i)) lib.config.forbidai.add(i);
                    lib.character[i] = qyhcCL.jiangeBoss[i].slice(0);
                    lib.characterTitle[i] = get.translation(lib.character[i][1] + '2') + get.translation(lib.character[i][4][0]);
                }
            }
        }
        game.chooseCharacterJiange = function () {
            game.removeGlobalSkill('_doublegroup_choice');
            delete lib.characterPack.mode_versus;
            var idx = game.players.indexOf(game.me);
            var sls = get.config('jiange_shili');
            var obj = {
                WEIHAN: ['wei', 'shu'],
                HANWEI: ['shu', 'wei'],
                RANWEIHAN: [['shu', 'wei'], ['wei', 'shu']].randomGet(),
                WEIWU: ['wei', 'wu'],
                WUWEI: ['wu', 'wei'],
                RANWEIWU: [['wu', 'wei'], ['wei', 'wu']].randomGet(),
                HANWU: ['shu', 'wu'],
                WUHAN: ['wu', 'shu'],
                RANHANWU: [['wu', 'shu'], ['shu', 'wu']].randomGet(),
                RAN: [['shu', 'wei'], ['wei', 'shu'], ['wu', 'wei'], ['wei', 'wu'], ['wu', 'shu'], ['shu', 'wu']].randomGet(),
                MEWEI: ['wei', ['shu', 'wu'].randomGet()],
                MESHU: ['shu', ['wei', 'wu'].randomGet()],
                MEWU: ['wu', ['shu', 'wei'].randomGet()],
                DIWEI: [['shu', 'wu'].randomGet(), 'wei'],
                DISHU: [['wei', 'wu'].randomGet(), 'shu'],
                DIWU: [['shu', 'wei'].randomGet(), 'wu']
            }
            _status.Shis = obj[sls];
            _status.meShi = obj[sls][0];
            _status.diShi = obj[sls][1];
            var jiange_zhen = get.config('jiange_zhen');
            if (jiange_zhen == 'F') jiange_zhen = ['A', 'B', 'C', 'D', 'E'].randomGet();
            var jiange_moshi = get.config('jiange_moshi');
            if (jiange_moshi == 'RAN') jiange_moshi = ['OL', 'PVP', 'EVE'].randomGet();
            switch (jiange_moshi) {
                case 'PVP':
                    var zhens = [_status.meShi, _status.diShi];
                    switch (jiange_zhen) {
                        case 'A': var list = [zhens[0] + 'mech1', zhens[0], zhens[0] + 'boss', zhens[0], zhens[1] + 'mech', zhens[1], zhens[1] + 'boss', zhens[1]]; break;
                        case 'B': var list = [zhens[0] + 'mech1', zhens[0], zhens[1] + 'boss', zhens[1], zhens[1] + 'mech', zhens[1], zhens[0] + 'boss', zhens[0]]; break;
                        case 'C': var list = [zhens[0] + 'mech1', zhens[1] + 'mech', zhens[0], zhens[1], zhens[0] + 'boss', zhens[1] + 'boss', zhens[0], zhens[1]]; break;
                        case 'D': var list = [zhens[1] + 'mech1', zhens[0] + 'mech', zhens[1], zhens[0], zhens[1] + 'boss', zhens[0] + 'boss', zhens[1], zhens[0]]; break;
                        default: var list = [zhens[0] + '1', zhens[1], zhens[1] + 'mech', zhens[0] + 'mech', zhens[0], zhens[1], zhens[1] + 'boss', zhens[0] + 'boss']; break;
                    }
                    while (list[idx].indexOf(zhens[0]) == -1) {
                        var current = list.shift();
                        list.push(current);
                    }
                    var RAN = Math.random() * 4;
                    for (var i = 1; i <= RAN; i++) {
                        do {
                            var current = list.shift();
                            list.push(current);
                        } while (list[idx].indexOf(zhens[0]) == -1);
                    }
                    break;
                case 'EVE':
                    var zhens = [_status.meShi, _status.diShi];
                    switch (jiange_zhen) {
                        case 'A': var list = [zhens[0] + 'mech1', zhens[0] + 'boss', zhens[0] + 'boss', zhens[0] + 'mech', zhens[1] + 'mech', zhens[1] + 'boss', zhens[1] + 'boss', zhens[1] + 'mech']; break;
                        case 'B': var list = [zhens[0] + 'boss1', zhens[0] + 'mech', zhens[1] + 'mech', zhens[1] + 'boss', zhens[1] + 'boss', zhens[1] + 'mech', zhens[0] + 'mech', zhens[0] + 'boss']; break;
                        case 'C': var list = [zhens[0] + 'mech1', zhens[1] + 'boss', zhens[0] + 'boss', zhens[1] + 'mech', zhens[0] + 'mech', zhens[1] + 'boss', zhens[0] + 'boss', zhens[1] + 'mech']; break;
                        case 'D': var list = [zhens[1] + 'mech1', zhens[0] + 'boss', zhens[1] + 'boss', zhens[0] + 'mech', zhens[1] + 'mech', zhens[0] + 'boss', zhens[1] + 'boss', zhens[0] + 'mech']; break;
                        default: var list = [zhens[0] + 'mech1', zhens[1] + 'boss', zhens[1] + 'mech', zhens[0] + 'boss', zhens[0] + 'mech', zhens[1] + 'boss', zhens[1] + 'mech', zhens[0] + 'boss']; break;
                    }
                    while (list[idx].indexOf(zhens[0]) == -1) {
                        var current = list.shift();
                        list.push(current);
                    }
                    var RAN = Math.random() * 4;
                    for (var i = 1; i <= RAN; i++) {
                        do {
                            var current = list.shift();
                            list.push(current);
                        } while (list[idx].indexOf(zhens[0]) == -1);
                    }
                    break;
                default:
                    switch (jiange_zhen) {
                        case 'A': var list = [_status.meShi + '1', _status.meShi + 'boss', _status.meShi, _status.meShi + 'mech', _status.diShi + 'mech', _status.diShi + 'boss', _status.diShi + 'boss', _status.diShi + 'mech']; break;
                        case 'B': var list = [_status.meShi + '1', _status.meShi + 'mech', _status.diShi + 'mech', _status.diShi + 'boss', _status.diShi + 'boss', _status.diShi + 'mech', _status.meShi, _status.meShi + 'boss']; break;
                        case 'C': var list = [_status.meShi + '1', _status.diShi + 'boss', _status.meShi + 'boss', _status.diShi + 'mech', _status.meShi, _status.diShi + 'boss', _status.meShi + 'mech', _status.diShi + 'mech']; break;
                        case 'D': var list = [_status.diShi + 'boss1', _status.meShi, _status.diShi + 'mech', _status.meShi + 'boss', _status.diShi + 'boss', _status.meShi, _status.diShi + 'mech', _status.meShi + 'mech']; break;
                        default: var list = [_status.meShi + 'mech1', _status.diShi + 'mech', _status.diShi + 'boss', _status.meShi, _status.meShi, _status.diShi + 'boss', _status.diShi + 'mech', _status.meShi + 'boss']; break;
                    }
                    while (list[idx] != _status.meShi && list[idx] != _status.meShi + '1') {
                        var current = list.shift();
                        list.push(current);
                    }
                    if (Math.random() < 0.5) {
                        do {
                            var current = list.shift();
                            list.push(current);
                        } while (list[idx] != _status.meShi && list[idx] != _status.meShi + '1');
                    }
                    break;
            }
            for (var i of game.players) {
                var j = list.shift();
                if (j.includes('1')) _status.qyhcjiange_firstAct = i;
                if (j[1] == 'e') {
                    i.side = true;
                    i.setIdentity('wei');
                    i.identity = 'wei';
                } else if (j[1] == 'h') {
                    i.side = _status.meShi != 'wei' && _status.diShi != 'wei';
                    i.setIdentity('shu');
                    i.identity = 'shu';
                } else {
                    i.side = false;
                    i.setIdentity('wu');
                    i.identity = 'wu';
                }
                if (j.includes('mech')) i.type = 'mech';
                else if (j.includes('boss')) i.type = 'boss';
                else i.type = 'human';
                i.getId();
                if (i.identity != _status.meShi) {
                    switch (get.config('jiange_dengjieND')) {
                        case '3': i.dengjie = [3, 3, 3, 4, 4, 4, 4, 4, 6, 6].randomGet(); break;
                        case '2': i.dengjie = [2, 2, 2, 2, 2, 2, 3, 3, 3, 4].randomGet(); break;
                        default: i.dengjie = 1; break;
                    }
                } else {
                    if (i == game.me || i.type == 'human') {
                        i.dengjie = +get.config('jiange_dengjieFj');
                        if (!i.dengjie) i.dengjie = 1;
                    } else {
                        i.dengjie = get.config('jiange_dengjieFr');
                        if (i.dengjie == 'RANB') i.dengjie = [2, 2, 2, 2, 2, 2, 3, 3, 3, 4].randomGet();
                        if (i.dengjie == 'RANC') i.dengjie = [3, 3, 3, 4, 4, 4, 4, 4, 5, 5].randomGet();
                        i.dengjie = +i.dengjie;
                    }
                }
                if (i.type == 'mech') i.jiaxue = +get.config('jiange_qxjiaxue');
                if (i.type == 'boss') i.jiaxue = +get.config('jiange_yljiaxue');
                i.dieAfter = function () {
                    var me = game.me._trueMe || game.me;
                    if (get.population(me.identity) == 0) game.over(false);
                    for (var i of game.players) if (i.side != me.side) return;
                    game.over(true);
                }
            }
            lib.translate[game.me.identity + '_win_option'] = '<span>击败所有<br>' + get.colorful(_status.diShi) + '势力角色</span>';
            game.ui_identityShow_init();
            game.ui_identityShow_update();
            var next = game.createEvent('chooseCharacter', false);
            next.showConfig = true;
            next.setContent(function () {
                'step 0'
                for (var i of ['wei', 'shu', 'wu'])
                    for (var j of [1, 2, 3, 4, 5, 6, 7, 8]) {
                        var x = 'qyhcCL_hiddenJG_' + i + j;
                        lib.character[x] = ['none', i, 0, [], ['ext:群英荟萃乀摧林/image/asset/seat_' + j + '.jpg', 'unseen']];
                    }
                var num = 1;
                var current = _status.qyhcjiange_firstAct;
                var jiange_trans = function (type) {
                    switch (type) {
                        case 'boss': return '英灵';
                        case 'mech': return '器械';
                        default: return '武将';
                    }
                }
                while (!current.name1) {
                    var utc = 'qyhcCL_hiddenJG_' + current.identity + num;
                    lib.translate[utc] = get.cnNumber(num, true) + '号位' + jiange_trans(current.type);
                    current.init(utc);
                    num++;
                    var current = current.next;
                }
                var jiange_event = get.config('jiange_event');
                if (jiange_event != 'NONE') {
                    if (jiange_event == 'RAN') {
                        var jiange_list = [];
                        for (var i in qyhcCL.jiange_eventTrans) jiange_list.push(i);
                        jiange_event = jiange_list.randomGet();
                    }
                    if (jiange_event == 'guanfang') {
                        jiange_event = ["s_zhuribuhui", "s_fengyuntubian", "s_bingfengsanlu", "s_duanbingxiangjie", "s_juedifanji", "s_wanfumokai", "s_hushidandan", "s_baidujiuzhe", "s_gongqibubei", "s_duanliangjiezi", "s_dibengshancui", "s_gushouchengbang", "s_shirupozhu", "s_chuqibuyi", "s_bingjiaojiangao", "s_liangjunxiangchi", "s_touduyinping", "s_ceyiyuhui"].randomGet();
                    }
                    _status.jiange_event = jiange_event;
                    ui.jiange_event = ui.create.system('本局事件:' + get.translation(jiange_event), function () {
                        qyhcCL.$jiange_event(_status.jiange_event, _status.jiange_eventlogger);
                    }, true);
                    lib.setPopped(ui.jiange_event, function () {
                        var uiintro = ui.create.dialog('hidden');
                        uiintro.listen(function (e) {
                            e.stopPropagation();
                        });
                        var info = qyhcCL.isJianger(_status.jiange_event);
                        uiintro.addText(info);
                        return uiintro;
                    }, 230);
                }
                'step 1'
                ui.arena.classList.add('choose-character');
                'step 2'
                var list = {
                    weihuman: [], shuhuman: [], wuhuman: [], globalhunam: [],
                    weimech: [], shumech: [], wumech: [],
                    weiboss: [], shuboss: [], wuboss: []
                }
                event.list = list;
                for (var i in lib.character) if (Array.isArray(lib.character[i]) && Array.isArray(lib.character[i][4])) if (lib.character[i][4].includes('jiangeboss') || lib.character[i][4].includes('jiangemech')) lib.character[i][4] = [];
                for (var i in qyhcCL.jiangeBoss) {
                    lib.character[i] = qyhcCL.jiangeBoss[i].slice(0);
                    lib.characterTitle[i] = get.translation(lib.character[i][1] + '2') + get.translation(lib.character[i][4][0]);
                }
                for (var i in qyhcCL.jiangeSkills) lib.skill[i] = qyhcCL.jiangeSkills[i];
                for (var i in qyhcCL.jiangeTrans) lib.translate[i] = qyhcCL.jiangeTrans[i];
                for (var i in qyhcCL.jiangeInfos) lib.characterIntro[i] = qyhcCL.jiangeInfos[i];
                for (var i in lib.character) {
                    if (lib.character[i][4]) {
                        if (lib.character[i][4].includes('jiangeboss')) {
                            list[lib.character[i][1] + 'boss'].push(i); continue;
                        }
                        else if (lib.character[i][4].includes('jiangemech')) {
                            list[lib.character[i][1] + 'mech'].push(i); continue;
                        }
                    }
                    if (lib.filter.characterDisabled(i)) continue;
                    if (lib.character[i][1] == 'wei') {
                        list.weihuman.push(i);
                    } else if (lib.character[i][1] == 'shu') {
                        list.shuhuman.push(i);
                    } else if (lib.character[i][1] == 'wu') {
                        list.wuhuman.push(i);
                    }
                    list.globalhunam.push(i);
                }
                var jiange_xjsx = get.config('jiange_xjsx');
                if (jiange_xjsx == "RAN") jiange_xjsx = ['FEM', 'FME', 'EMF', 'MEF'].randomGet();
                var indexM = jiange_xjsx.indexOf('M');
                for (var i of game.players) if (i != game.me && (indexM == 2 || (indexM == 1 && ((jiange_xjsx[0] == 'F') ^ (i.identity == _status.diShi))))) {
                    i.init(list[i.identity + i.type].randomRemove());
                    game.addRecentCharacter(i.name1);
                    if (!i.dengjie) i.dengjie = 1;
                    if (!i.jiaxue) i.jiaxue = 0;
                    i.maxHp += Math.floor(i.dengjie / 2) + i.jiaxue;
                    i.hp += Math.floor(i.dengjie / 2) + i.jiaxue;
                    i.changeGroup(i.identity, false);
                    i.update();
                }
                if (get.config('jiange_freegroup')) {
                    for (var i of game.players) if (i.name1) list.globalhunam.remove(i);
                    list[game.me.identity + 'human'] = list.globalhunam;
                }
                else list.globalhunam = [];
                var dialog;
                switch (game.me.type) {
                    case 'human':
                        dialog = ui.create.dialog('选择角色', [list[game.me.identity + 'human'].randomGets(8), 'character']);
                        ui.create.cheat = function () {
                            _status.createControl = ui.cheat2;
                            ui.cheat = ui.create.control('更换', function () {
                                if (ui.cheat2 && ui.cheat2.dialog == _status.event.dialog) {
                                    return;
                                }
                                if (game.changeCoin) {
                                    game.changeCoin(-3);
                                }
                                var buttons = ui.create.div('.buttons');
                                var node = _status.event.dialog.buttons[0].parentNode;
                                _status.event.dialog.buttons = ui.create.buttons(list[game.me.identity + 'human'].randomGets(8), 'character', buttons);
                                _status.event.dialog.content.insertBefore(buttons, node);
                                buttons.addTempClass('start');
                                node.remove();
                                game.uncheck();
                                game.check();
                            });
                            delete _status.createControl;
                        }
                        var createCharacterDialog = function () {
                            event.dialogxx = ui.create.characterDialog('heightset', function (name) {
                                if (lib.character[name][4]) {
                                    if (lib.character[name][4].includes('jiangeboss')) return true;
                                    if (lib.character[name][4].includes('jiangemech')) return true;
                                }
                                return !get.config('jiange_freegroup') && lib.character[name][1] != game.me.identity && !lib.character[name][4].includes(game.me.identity);
                            });
                            if (ui.cheat2) {
                                ui.cheat2.addTempClass('controlpressdownx', 500);
                                ui.cheat2.classList.remove('disabled');
                            }
                        };
                        if (lib.onfree) lib.onfree.push(createCharacterDialog);
                        else createCharacterDialog();
                        ui.create.cheat2 = function () {
                            ui.cheat2 = ui.create.control('自由选将', function () {
                                if (this.dialog == _status.event.dialog) {
                                    if (game.changeCoin) {
                                        game.changeCoin(50);
                                    }
                                    this.dialog.close();
                                    _status.event.dialog = this.backup;
                                    this.backup.open();
                                    delete this.backup;
                                    game.uncheck();
                                    game.check();
                                    if (ui.cheat) {
                                        ui.cheat.addTempClass('controlpressdownx', 500);
                                        ui.cheat.classList.remove('disabled');
                                    }
                                }
                                else {
                                    if (game.changeCoin) {
                                        game.changeCoin(-10);
                                    }
                                    this.backup = _status.event.dialog;
                                    _status.event.dialog.close();
                                    _status.event.dialog = _status.event.parent.dialogxx;
                                    this.dialog = _status.event.dialog;
                                    this.dialog.open();
                                    game.uncheck();
                                    game.check();
                                    if (ui.cheat) {
                                        ui.cheat.classList.add('disabled');
                                    }
                                }
                            });
                            if (lib.onfree) {
                                ui.cheat2.classList.add('disabled');
                            }
                        }
                        if (!_status.brawl || !_status.brawl.chooseCharacterFixed) {
                            if (!ui.cheat && get.config('change_choice')) ui.create.cheat();
                            if (!ui.cheat2 && get.config('free_choose')) ui.create.cheat2();
                        }
                        break;
                    case 'mech':
                        dialog = ui.create.dialog('选择角色', [list[game.me.identity + 'mech'], 'character']);
                        break;
                    case 'boss':
                        dialog = ui.create.dialog('选择角色', [list[game.me.identity + 'boss'], 'character']);
                        break;
                }
                game.me.chooseButton(dialog, true, [1, 1]).set('onfree', true);
                'step 3'
                if (ui.cheat) {
                    ui.cheat.close();
                    delete ui.cheat;
                }
                if (ui.cheat2) {
                    ui.cheat2.close();
                    delete ui.cheat2;
                }
                game.me.init(result.links[0]);
                game.addRecentCharacter(game.me.name1);
                if (!game.me.dengjie) game.me.dengjie = 1;
                if (!game.me.jiaxue) game.me.jiaxue = 0;
                game.me.maxHp += Math.floor(game.me.dengjie / 2) + game.me.jiaxue;
                game.me.hp += Math.floor(game.me.dengjie / 2) + game.me.jiaxue;
                game.me.changeGroup(game.me.identity, false);
                for (var i in event.list) event.list[i].remove(game.me.name1);
                for (var i of game.players) if (!i.name1 || i.name.includes('qyhcCL_hiddenJG_')) {
                    i.init(event.list[i.identity + i.type].randomRemove());
                    game.addRecentCharacter(i.name1);
                    if (!i.dengjie) i.dengjie = 1;
                    if (!i.jiaxue) i.jiaxue = 0;
                    i.maxHp += Math.floor(i.dengjie / 2) + i.jiaxue;
                    i.hp += Math.floor(i.dengjie / 2) + i.jiaxue;
                    i.changeGroup(i.identity, false);
                    i.update();
                }
                for (var i of game.players) if (i.dengjie == 5) i.addSkill('cljg_niepan');
                if (get.config('jiange_spkj')) game.addGlobalSkill('versus_viewHandcard');
                game.addGlobalSkill('cljg_shaEquip');
                game.addGlobalSkill('cljg_Draw');
                setTimeout(function () {
                    ui.arena.classList.remove('choose-character');
                }, 500);
                game.me.update();
                'step 4'
                var players = get.players(lib.sort.position);
                var info = [];
                for (var i = 0; i < players.length; i++) {
                    info.push({
                        name: players[i].name1,
                        name2: players[i].name2,
                        identity: players[i].node.identity.firstChild.innerHTML,
                        color: players[i].node.identity.dataset.color
                    });
                }
                _status.videoInited = true;
                info.push(false);
                game.addVideo('init', null, info);
                if (_status.jiange_event) {
                    qyhcCL.jiange_event(_status.jiange_event);
                    qyhcCL.$jiange_event(_status.jiange_event, _status.jiange_eventlogger);
                }
                event.trigger('gameStart');
                'step 5'
                game.gameDraw(_status.qyhcjiange_firstAct);
                game.phaseLoopJiange();
            });
        }
    }
    return [lib, game, ui, get, ai, _status];
});