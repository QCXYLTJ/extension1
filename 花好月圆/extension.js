import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '花好月圆',
        content(config, pack) {
            //击杀特效(群英会)
            if (config.xjstxjishatexiao) {
                lib.skill._xxjstx_jisha = {
                    trigger: {
                        source: 'dieBegin',
                    },
                    forced: true,
                    _priority: 2021,
                    content() {
                        //QQQ
                        player.storage.xxjstx_jisha = player.storage.xxjstx_jisha + 1 || 1;
                        if (player.storage.xxjstx_jisha == 1) {
                            player.$skill('一破·卧龙出山', 'fire', 'fire', 'avatar');
                            game.playxjstx('xjstx_jisha1');
                        }
                        if (player.storage.xxjstx_jisha == 2) {
                            player.$skill('双连·一战成名', 'fire', 'fire', 'avatar');
                            game.playxjstx('xjstx_jisha2');
                        }
                        if (player.storage.xxjstx_jisha == 3) {
                            player.$skill('三连·举世皆惊', 'fire', 'fire', 'avatar');
                            game.playxjstx('xjstx_jisha3');
                        }
                        if (player.storage.xxjstx_jisha == 4) {
                            player.$skill('四连·天下无敌', 'fire', 'fire', 'avatar');
                            game.playxjstx('xjstx_jisha4');
                        }
                        if (player.storage.xxjstx_jisha == 5) {
                            player.$skill('五连·诛天灭地', 'fire', 'fire', 'avatar');
                            game.playxjstx('xjstx_jisha5');
                        }
                        if (player.storage.xxjstx_jisha == 6) {
                            player.$skill('六连·诛天灭地', 'fire', 'fire', 'avatar');
                            game.playxjstx('xjstx_jisha6');
                        }
                        if (player.storage.xxjstx_jisha == 7) {
                            player.$skill('七连·诛天灭地', 'fire', 'fire', 'avatar');
                            game.playxjstx('xjstx_jisha7');
                        }
                        if (player.storage.xxjstx_jisha == 8) {
                            player.$skill('无双·万军取首', 'fire', 'fire', 'avatar');
                            game.playxjstx('xjstx_jisha8');
                        }
                        if (player.storage.xxjstx_jisha >= 9) {
                            player.$skill('无双·万军取首', 'fire', 'fire', 'avatar');
                            game.playxjstx('xjstx_jisha9');
                        }
                    },
                };
                lib.skill._onDead = {
                    trigger: {
                        player: 'dieBegin',
                    },
                    _priority: 66,
                    forced: true,
                    charlotte: true,
                    fixed: true,
                    silent: true,
                    onremove(player) {
                        player.addSkill('onDead');
                    },
                    global: 'onDead',
                    content() {
                        game.broadcastAll(function () {
                            game.playAudio('../extension/花好月圆/audio/dead.mp3');
                        });
                    },
                };
                game.playxjstx = function (fn, dir, sex) {
                    if (lib.config.background_speak) {
                        if (dir && sex) game.playAudio(dir, sex, fn);
                        else if (dir) game.playAudio(dir, fn);
                        else game.playAudio('../extension/花好月圆/audio', fn);
                    }
                };
            }
            if (config.xzhiliaotexiao) {
                lib.skill._xxmiaoshouhuichun = {
                    trigger: { global: 'xmiaoshou' },
                    filter(event, player) {
                        return event.player == player;
                    },
                    _priority: 100,
                    forced: true,
                    content() {
                        trigger.player.$fullscreenpop('妙手回春', 'wood');
                        game.playxjstx('xxmiaoshouhuichun');
                    },
                };
                lib.skill._xxyishugaochao = {
                    trigger: { global: 'xyishu' },
                    filter(event, player) {
                        return event.player == player;
                    },
                    _priority: 100,
                    forced: true,
                    content() {
                        trigger.player.$fullscreenpop('医术高超', 'wood');
                        game.playxjstx('xxyishugaochao');
                    },
                };
                lib.skill._recovertrigger = {
                    trigger: { global: 'recoverEnd' },
                    filter(event, player) {
                        if (_status.currentPhase != player) {
                            return event.player != event.source && event.source == player;
                        }
                        return true;
                    },
                    forced: true,
                    content() {
                        if (_status.currentPhase != player) {
                            _status.event.trigger('xmiaoshou');
                        } else {
                            if (player.storage.xxyishugaochao == undefined) {
                                player.storage.xxyishugaochao = trigger.num;
                            } else {
                                player.storage.xxyishugaochao += trigger.num;
                            }
                            if (player.storage.xxyishugaochao >= 3) {
                                player.storage.xxyishugaochao -= 3;
                                _status.event.trigger('xyishu');
                            }
                        }
                    },
                    group: '_recovertrigger_Delete',
                    subSkill: {
                        Delete: {
                            trigger: { player: 'phaseEnd' },
                            forced: true,
                            content() {
                                delete player.storage.xxyishugaochao;
                            },
                        },
                    },
                };
                game.playxjstx = function (fn, dir, sex) {
                    if (lib.config.background_speak) {
                        if (dir && sex) game.playAudio(dir, sex, fn);
                        else if (dir) game.playAudio(dir, fn);
                        else game.playAudio('../extension/花好月圆/audio', fn);
                    }
                };
            }
            if (config.xgaoshangtexiao) {
                var gstx = lib.config['extension_花好月圆_gstx'];
                lib.skill._onCause3Damage = {
                    trigger: {
                        source: 'damageBegin4',
                    },
                    forced: true,
                    lastDo: true,
                    silent: true,
                    _priority: -666,
                    onremove(player) {
                        player.addSkill('onCause3Damage');
                    },
                    global: 'onCause3Damage',
                    filter(event, player) {
                        if (gstx) return false;
                        return event.num == 3;
                    },
                    content() {
                        game.broadcastAll(function () {
                            {
                                player.$skill('癫狂屠戮', 'fire', 'fire', 'avatar');
                                game.playAudio('../extension/花好月圆/audio/癫狂屠戮.mp3');
                            }
                        });
                    },
                };
                lib.skill._onCause4Damage = {
                    trigger: {
                        source: 'damageBegin4',
                    },
                    forced: true,
                    silent: true,
                    lastDo: true,
                    _priority: -666,
                    onremove(player) {
                        player.addSkill('onCause4Damage');
                    },
                    global: 'onCause4Damage',
                    filter(event, player) {
                        if (gstx) return false;
                        return event.num >= 4;
                    },
                    content() {
                        game.broadcastAll(function () {
                            {
                                player.$skill('万军取首', 'fire', 'fire', 'avatar');
                                game.playAudio('../extension/花好月圆/audio/万军取首.mp3');
                            }
                        });
                    },
                };
                game.playxjstx = function (fn, dir, sex) {
                    if (lib.config.background_speak) {
                        if (dir && sex) game.playAudio(dir, sex, fn);
                        else if (dir) game.playAudio(dir, fn);
                        else game.playAudio('../extension/花好月圆/audio', fn);
                    }
                };
            }
            // ---------------------------------------武将评级------------------------------------------//
            if (lib.rank) {
                lib.rank.rarity.rare.addArray(['qita_sunquan']);
                lib.rank.rarity.epic.addArray(['qita_zhangchunhua', 'mdtx_xunyu', 'wdqk_guanyu', 'wdqk_taishici', 'qita_zuoci', 'qita_xiaowu', 'wdqk_huanggai', 'mdtx_zgwolong', 'wdqk_lvbu', 'wdqk_dianwei']);
                lib.rank.rarity.legend.addArray(['hhyy_fanxing', 'wdqk_wuhu', 'hhyy_wangyi', 'hhyy_mayunlu', 'hhyy_caiwenji', 'hhyy_huangyueying', 'hhyy_zhenji', 'hhyy_diaochan', 'hhyy_daqiao', 'hhyy_xiaoqiao', 'hhyy_sunshangxiang', 'mdtx_simayi', 'mdtx_jiaxu', 'mdtx_lusu', 'mdtx_guojia', 'mdtx_zhouyu', 'mdtx_pangtong', 'mdtx_luxun', 'wdqk_zhaoyun', 'wdqk_huangzhong', 'wdqk_machao', 'wdqk_ganning', 'qita_wuhu', 'qita_caopi', 'wdqk_zhangliao', 'wdqk_zhangfei', 'wdqk_xuchu', 'qita_shenzhaoyun', 'qita_zhaoxiang']);
            }
            lib.group.push('shen');
            lib.translate.shenColor = '#FFFF00';
            lib.translate.shen = '神';
            lib.group.push('key');
            (lib.translate.keyColor = '#c9b1fd'), (lib.translate.key = '键');
            // ---------------------------------------伤害配音,铁锁解锁配音(引自特效测试)------------------------------------------//
            if (config.txcs_peiyin3) {
                if (lib.skill.qilin_skill) lib.skill.qilin_skill.audio = 'ext:花好月圆/audio:true';
                var CAFst = lib.element.content.link.toString();
                var ins = function (str) {
                    return str.replaceAll("game.playAudio('effect','link');", "if(!player.isLinked())game['playAudio']('effect','link');else game.playAudio('../extension/花好月圆/audio/tiesuo2');");
                };
                eval('lib.element.content.link=function(){' + CAFst.newFedit(ins) + '}');
                var CAFst = lib.element.content.damage.toString();
                var ins = function (str) {
                    return str.replaceAll("game.playAudio('effect','damage'+(num>1?'2':''));", "if(event.card&&event.card.name=='shandian')game.playAudio('../extension/花好月圆/audio/lightning');else if(['fire','thunder','ice'].includes(event.nature))game.playAudio('../extension/花好月圆/audio/damage_'+event.nature+(num>1?'2':''));else game.playAudio('effect','damage'+((num>1)?'2':''));");
                };
                eval('lib.element.content.damage=function(){' + CAFst.newFedit(ins) + '}');
            }
            // ---------------------------------------open boss------------------------------------------//
            if (config.hhyy_normalize) {
                lib.arenaReady.push(function () {
                    var hhyy_boss = lib.characterPack['huahaoyueyuan'];
                    for (var i in hhyy_boss) {
                        var hhyy_xu = hhyy_boss[i][4];
                        if (hhyy_xu.indexOf('boss') >= 0) {
                            hhyy_xu[hhyy_xu.indexOf('boss')] = '';
                            hhyy_xu[hhyy_xu.indexOf('bossallowed')] = '';
                        }
                    }
                });
            }
            lib.translate.unknown8 = '九号位';
            lib.translate.unknown9 = '十号位';
            lib.translate.unknown10 = '十一号位';
            lib.translate.unknown11 = '十二号位';
            lib.translate.unknown12 = '十三号位';
            _status.maximumNumberOfPlayers = 13; //QQQ
            get.fxCardNameArray = function (cards) {
                var array = [];
                for (var m of cards) {
                    array.add(m.name);
                }
                return array;
            };
            //自动整理手牌
            if (config.fx_zhenglishoupai) {
                lib.skill._zhenglishoupai_fx = {
                    trigger: {
                        player: ['gainAfter', 'enterGame'],
                        global: 'gameDrawAfter',
                    },
                    filter(event, player) {
                        return player.countCards('h') > 0;
                    },
                    forced: true,
                    charlotte: true,
                    firstDo: true,
                    content() {
                        var hs = player.getCards('h');
                        game.addVideo('lose', player, [get.cardsInfo(hs), [], []]);
                        for (var i = 0; i < hs.length; i++) {
                            hs[i].goto(ui.special);
                        }
                        hs.sort(function (b, a) {
                            if (a.name != b.name) return lib.sort.card(a.name, b.name);
                            else if (a.suit != b.suit) return lib.suit.indexOf(a) - lib.suit.indexOf(b);
                            else return a.number - b.number;
                        });
                        player.directgain(hs, false);
                    },
                };
            }
            // ---------------------------------------武将阵亡配音------------------------------------------//
            lib.skill._花好月圆_dieaudio = {
                trigger: {
                    global: 'dieBegin',
                },
                _priority: 100,
                forced: true,
                charlotte: true,
                forced: true,
                content() {
                    game.playAudio('../extension/花好月圆/audio', trigger.player.name);
                },
            };
        },
        precontent(hhyy) {
            game.import('character', function () {
                const huahaoyueyuan = {
                    name: 'huahaoyueyuan',
                    characterSort: {
                        huahaoyueyuan: {
                            hhyy_zuozhe: ['hhyy_fanxing'],
                            hhyy_hhyy: ['hhyy_wangyi', 'hhyy_mayunlu', 'hhyy_caiwenji', 'hhyy_huangyueying', 'hhyy_zhenji', 'hhyy_diaochan', 'hhyy_daqiao', 'hhyy_xiaoqiao', 'hhyy_sunshangxiang'],
                            hhyy_mdtx: ['mdtx_xunyu', 'mdtx_simayi', 'mdtx_jiaxu', 'mdtx_lusu', 'mdtx_guojia', 'mdtx_zhouyu', 'mdtx_zgwolong', 'mdtx_pangtong', 'mdtx_luxun'],
                            hhyy_wdqk: ['wdqk_guanyu', 'wdqk_taishici', 'wdqk_zhaoyun', 'wdqk_huangzhong', 'wdqk_machao', 'wdqk_ganning', 'wdqk_zhangfei', 'wdqk_zhangliao', 'wdqk_xuchu', 'wdqk_huanggai', 'wdqk_lvbu', 'wdqk_dianwei'],
                            hhyy_qita: ['qita_shenzhaoyun', 'wdqk_wuhu', 'qita_wuhu', 'qita_zhangchunhua', 'qita_caopi', 'qita_sunquan', 'qita_zuoci', 'qita_xiaowu', 'qita_zhaoxiang'],
                        },
                    },
                    character: {
                        hhyy_fanxing: ['none', 'shen', 4, ['hhyy_zuozheji', 'qita_hhyy', 'fx_mdtx', 'fx_wdqk'], ['boss']],
                        hhyy_wangyi: ['female', 'wei', 5, ['hua_zhenlie', 'hua_miji', 'hua_xianji', 'qita_hhyy'], []],
                        hhyy_mayunlu: ['female', 'shu', 4, ['hua_fengpo', '马术', 'hua_shuyou', 'qita_hhyy'], []],
                        hhyy_caiwenji: ['female', 'wei', 4, ['hua_beige', 'duanchang', 'hua_chenqing', 'hua_moshi', 'qita_hhyy'], []],
                        hhyy_huangyueying: ['female', 'shu', 4, ['hua_jiqiao', 'hua_linglong', 'hua_jizhi', '奇才', 'qita_hhyy'], []],
                        hhyy_zhenji: ['female', 'wei', 4, ['hua_luoshen', 'hua_qingguo', 'hua_huaqiu', 'qita_hhyy'], []],
                        hhyy_diaochan: ['female', 'qun', 4, ['hua_lihun', 'hua_tianzi', 'hua_biyue', 'hua_lijian', 'qita_hhyy'], []],
                        hhyy_daqiao: ['female', 'wu', 4, ['hua_fangxin', 'hua_guose', 'hua_liuli', 'hua_wanrou', 'qita_hhyy'], []],
                        hhyy_xiaoqiao: ['female', 'wu', 4, ['hua_jiaohua', 'hua_hongyan', 'hua_tianxiang', 'qita_hhyy'], []],
                        hhyy_sunshangxiang: ['female', 'shu', '3/4', ['hua_haowu', 'hua_tongxin', 'hua_fanxiang', 'qita_hhyy'], []],
                        qita_wuhu: ['none', 'shen', 4, ['hua_wusheng', 'hua_paoxiao', 'hua_longdan', 'hua_tieqi', 'hua_liegong', '马术', 'qita_wdqk', 'wdqk_juexing'], ['shu', 'boss']],
                        qita_zhangchunhua: ['female', 'wei', '3/4', ['hua_jueqing', 'hua_shangshi', 'qita_hhyy'], []],
                        qita_caopi: ['male', 'wei', 3, ['hua_fangzhu', 'hua_xingshang', 'hua_songwei', 'hua_wendi'], []],
                        mdtx_xunyu: ['male', 'wei', 4, ['mou_quhu', 'mou_jieming', 'qita_mdtx'], []],
                        mdtx_simayi: ['male', 'wei', 3, ['mou_fankui', 'mou_guicai', 'mou_lianpo', 'mou_renjie', 'mou_baiyin', 'qita_mdtx'], []],
                        qita_sunquan: ['male', 'wu', 4, ['mou_zhiheng', 'qita_mdtx'], []],
                        mdtx_jiaxu: ['male', 'qun', 4, ['mou_weimu', 'mou_wansha', 'mou_luanwu', 'mou_yongdi', 'mou_jianshu', 'qita_mdtx'], []],
                        mdtx_lusu: ['male', 'wu', 4, ['mou_haoshi', 'mou_dimeng', 'qita_mdtx'], []],
                        mdtx_guojia: ['male', 'wei', 3, ['mou_tiandu', 'mou_yiji', 'mou_yice', 'qita_mdtx'], []],
                        mdtx_zhouyu: ['male', 'wu', 4, ['mou_yingzi', 'mou_fanjian', 'mou_yeyan', 'mou_qinyin', 'qita_mdtx'], []],
                        wdqk_guanyu: ['male', 'shu', '4/4/3', ['wu_wusheng', 'wu_yijue', '马术', 'qita_wdqk'], []],
                        mdtx_zgwolong: ['male', 'shu', 3, ['mou_huoji', 'mou_kanpo', 'mou_bazhenx', 'mou_xuming', 'qita_mdtx'], []],
                        wdqk_taishici: ['male', 'wu', '4/4/3', ['wu_tianyi', 'wu_hanzhan', 'qita_wdqk'], []],
                        wdqk_zhaoyun: ['male', 'shu', '4/4/4', ['wu_longdan', 'wu_yajiao', 'qita_wdqk'], []],
                        mdtx_pangtong: ['male', 'shu', 4, ['mou_lianhuan', 'mou_niepan', 'qita_mdtx'], []],
                        wdqk_huangzhong: ['male', 'shu', '4/4/2', ['wu_liegong', 'qita_wdqk'], []],
                        mdtx_luxun: ['male', 'wu', 4, ['mou_qianxun', 'mou_lianying', 'qita_mdtx'], []],
                        wdqk_machao: ['male', 'shu', '4/4/1', ['wu_tieqi', 'wu_shichou', 'qita_wdqk'], []],
                        wdqk_ganning: ['male', 'wu', '4/4/1', ['wu_qixi', 'wu_fenwei', 'qita_wdqk'], []],
                        wdqk_zhangfei: ['male', 'shu', '4/4/1', ['wu_paoxiao', 'wu_liyong', 'wu_tishen', 'qita_wdqk'], []],
                        wdqk_wuhu: ['male', 'shen', '2/2/2', ['wu_wusheng', 'wu_paoxiao', 'wu_liegong', 'wu_longdan', 'wu_tieqi', '马术', 'qita_wdqk'], ['shu', 'hiddenboss', 'bossallowed']],
                        wdqk_zhangliao: ['male', 'wei', '3/4/1', ['wu_tuxi', 'wu_duorui', 'wu_zhiti', 'qita_wdqk'], []],
                        qita_zuoci: ['female', 'shen', '3/4/1', ['qita_huansheng', 'qita_dunshu', 'qita_mdtx'], []],
                        wdqk_xuchu: ['male', 'wei', '4/4/1', ['wu_luoyi', 'wu_chandou', 'qita_wdqk'], []],
                        qita_xiaowu: ['female', 'shen', 3, ['qita_zhuyuan', 'qita_duocai'], ['key']],
                        wdqk_huanggai: ['male', 'wu', '4/4/1', ['wu_kurou', 'wu_zhaxiang', 'wu_zhouyan', 'qita_wdqk'], []],
                        wdqk_lvbu: ['male', 'qun', '4/4/2', ['wu_wushuang', 'wu_shenji', 'wu_aozhan', 'qita_wdqk'], []],
                        qita_shenzhaoyun: ['male', 'shen', '1/2/2', ['qita_juejing', 'relonghun', 'qita_zhanjiang'], ['shu']],
                        qita_zhaoxiang: ['female', 'shu', 4, ['sp_fanghun', 'zx_fuhan', 'zx_queshi'], []],
                        wdqk_dianwei: ['male', 'wei', '3/4/2', ['wu_qiangxi', 'wu_chongzhuang', 'wu_sizhan', 'qita_wdqk'], []],
                    },
                    perfectPair: {
                        hhyy_huangyueying: ['mdtx_zgwolong'],
                        hhyy_zhenji: ['qita_caopi'],
                        hhyy_mayunlu: ['wdqk_zhaoyun'],
                        hhyy_daqiao: ['hhyy_xiaoqiao'],
                        mdtx_simayi: ['qita_zhangchunhua'],
                        mdtx_zhouyu: ['hhyy_xiaoqiao', 'wdqk_huanggai'],
                        mdtx_zgwolong: ['mdtx_pangtong'],
                        hhyy_diaochan: ['wdqk_lvbu'],
                    },
                    characterIntro: {
                        hhyy_wangyi: '王异,或作士异(胡三省所做<三国志>及<资治通鉴>注解称皇甫谧<列女传>原文为"士氏女"而非"王氏女"),东汉末年曹操所置羌道令、益州刺史赵昂之妻,赵英、赵月之母.  马超作乱凉州时,王异协助丈夫守城,多有功勋,自马超攻冀城至祁山坚守,赵昂曾出奇计九条,王异皆有参与.在小说<三国演义>较通行的三个版本中毛本和嘉靖本均只言王氏,而黄正甫本<三国志传>中则言明其姓名王异.',
                        hhyy_mayunlu: '马云騄,是周大荒的小说--<反三国演义>中的虚构人物.在小说里她是马腾之女,马超之妹,赵云之妻.该人物曾在游戏<真·三国无双3 帝国>里作为自创武将出现,但是4代开始在非帝国系列里都难觅其踪.日本光荣游戏<三国志>系列9代及之后的版本中都以女武将身份出场,最新的三国志12里将其删除,但在PSV版中再次作为附加武将登场.',
                        hhyy_caiwenji: '蔡琰,字文姬,又字昭姬 .生卒年不详.东汉陈留郡圉县(今河南开封杞县)人,东汉大文学家蔡邕的女儿.初嫁于卫仲道,丈夫死去而回到自己家里,后值因匈奴入侵,蔡琰被匈奴左贤王掳走,嫁给匈奴人,并生育了两个孩子.十二年后,曹操统一北方,用重金将蔡琰赎回,并将其嫁给董祀.  蔡琰同时擅长文学、音乐、书法.<隋书·经籍志>著录有<蔡文姬集>一卷,但已经失传.现在能看到的蔡文姬作品只有<悲愤诗>二首和<胡笳十八拍>.  历史上记载蔡琰的事迹并不多,但"文姬归汉"的故事却在历朝历代被广为流传.',
                        hhyy_huangyueying: '黄夫人,本名不详,传说名为黄月英(最早或出自袁阔成的评书<三国演义> ,经日本光荣公司2003年的游戏<真三国无双3>、<三国志9>推广而广为人知)、黄阿丑、黄婉贞.三国时荆州沔南白水(今湖北襄阳)人,沔阳名士黄承彦之女,诸葛亮之妻.  史称其长相丑陋,黄头发,黑皮肤,但才华却与诸葛亮相当 .并小说<三国演义>里,罗贯中也对其进行了描述.后世流传诸葛亮与黄月英的动人传说,不过并未有史书证实,为美好的臆想罢了.',
                        hhyy_zhenji: '文昭甄皇后(183年1月26日－221年8月4日),名不明 ,又称甄夫人.中山无极(今河北省无极县)人,上蔡令甄逸之女.魏文帝曹丕的妾室,魏明帝曹叡之生母.曹叡即位后追尊甄氏为文昭皇后.',
                        hhyy_diaochan: '貂蝉,甘肃临洮人,是民间传说古代四大美女之一的<闭月>.貂蝉的生活年代约在东汉末年,出生年月均不可考.貂蝉的事迹大多出现在说书话本的故事当中,最后由<三国演义>作者罗贯中整理创作出一个完整的形象.  民间传说中,貂蝉为东汉末年司徒王允家的义女,为拯救汉朝,由王允授意施行连环计,使董卓、吕布两人反目成仇,最终借吕布之手除掉了恶贼董卓.之后貂蝉成为吕布的妾,董卓部将李傕击败吕布后,她随吕布来到徐州.下邳一役后,吕布被曹操所杀,貂蝉跟随吕布家眷前往许昌,从此不知所踪.  一般认为,<貂蝉>并非本名,元代杂曲<连环计>中说她的真实姓名叫任红昌.历史研究者对此人物的真实性存有争议.',
                        hhyy_daqiao: '大乔(?-200年?),庐江郡皖县人(今安徽省安庆市潜山市),中国东汉末的女性,系乔公之女、孙策之妾、小乔之姊.  在中国长篇古典名著<三国演义>中称大乔.与其妹小乔并称为"江东二乔",传说为绝世美女.',
                        hhyy_xiaoqiao: '小桥(180年代-?),本姓桥(小乔为后世误传).中国东汉末年时期的美女,庐江皖县(今安徽潜山)人.桥公的次女,汉末名将周瑜之妾.  周瑜风度翩翩的才子形象,与堪称国色的小桥可称天作之合,由此成为后世文艺作品的对象.唐代著名诗人杜牧激发想象,一句"东风不与周郎便,铜雀春深锁二乔"将小桥与赤壁之战联系起来.而令""二桥""闻名于世.',
                        hhyy_sunshangxiang: '孙夫人,相传名为孙尚香,吴郡富春(今浙江杭州富阳)人,东汉末年讨虏将军孙权之妹,曾为左将军刘备之妻.<三国志>称之为孙夫人.  为巩固孙刘联盟,孙夫人嫁给刘备三年,后来大归回吴,之后事迹不详.史料并无生育记载.夹在两国之间,有着与传统女性截然不同的桀骜不驯的个性.孙夫人在许多小说,戏剧和影视里被不断描绘.',
                        qita_zhangchunhua: '张春华(189年-247年),河内平皋(今河南温县)人,曹魏粟邑令张汪之女,晋宣帝司马懿之妻,晋景帝司马师和晋文帝司马昭的母亲. 张氏少有德行,智慧过人.司马懿不愿屈服于曹操而装病,她为免装病之事泄露,击杀了知情的婢女.年老后,司马懿不再宠爱张氏,称呼她<老东西>,她怒而绝食,司马懿恐而道歉.247年,张氏去世,时年59岁,葬于洛阳高原陵,追赠广平县君.264年追谥为宣穆妃;265年,晋武帝追谥她为宣穆皇后.',
                        qita_caopi: '曹丕(187年冬—226年6月29日),字子桓,三国时期著名的政治家、文学家,曹魏的开国皇帝,公元220至226年在位.沛国谯(今安徽省亳州市)人,魏武帝曹操与卞夫人的长子.曹丕文武双全,八岁能提笔为文,善骑射,好击剑,博览古今经传,通晓诸子百家学说.220年正月,曹操逝世,曹丕继任丞相、魏王.之后曹丕受禅登基,以魏代汉,结束了汉朝四百多年统治.魏文帝在位期间,平定边患.击退鲜卑,和匈奴、氐、羌等外夷修好,回复汉朝在西域的建置.除军政以外,曹丕自幼好文学,于诗、赋、文学皆有成就,尤擅长于五言诗,与其父曹操和弟曹植,并称<三曹>,今存<魏文帝集>二卷.另外,曹丕著有<典论>,当中的<论文>是中国文学史上第一部有系统的文学批评专论作品.黄初七年(226年)五月病逝于洛阳,时年40岁.去世后庙号高祖(<资治通鉴>作世祖),谥为文皇帝,葬于首阳陵.',
                        mdtx_xunyu: '荀彧(xún yù)(163年－212年),字文若.颍川郡颍阴县(今河南许昌)人.东汉末年政治家、战略家,曹操统一北方的首席谋臣和功臣.荀彧早年被称为<王佐之才>,初举孝廉,任守宫令.后弃官归乡,又率宗族避难冀州,被袁绍待为上宾.其后投奔曹操.官至侍中,守尚书令,封万岁亭侯.因其任尚书令,居中持重达十数年,处理军国事务,被人敬称为<荀令君>.后因反对曹操称魏公而为其所忌,调离中枢,在寿春忧郁成病而亡(一说服毒自尽),年五十.获谥为<敬>,后追赠太尉.',
                        mdtx_simayi: '司马懿(179年—251年9月7日[1]),字仲达,河内郡温县孝敬里(今河南省焦作市温县)人.三国时期曹魏政治家、军事谋略家、权臣,西晋王朝的奠基人之一.',
                        qita_zuoxci: '改自<上兵伐谋>的兵谋左慈.',
                        qita_xiaowu: '无名杀吉祥物 <br>设计:李木子 <br>画师:空城 <br>技能设计:李木子 苏婆玛丽奥<br>现武将代码:苏婆玛丽奥 <br>修改版代码:繁星 <br>设计思路:多姿多彩的无名杀百家争鸣、百花齐放的扩展,被放在无名杀里这就是<多彩>的设计 祝愿所有无名杀玩家玩的开心,至于铁骑激昂,懂得都懂.',
                    },
                    characterTitle: {
                        qita_xiaowu: '无名杀吉祥物',
                    },
                    skill: {
                        hua_jizhi: {
                            audio: 'ext:花好月圆/audio:2',
                            group: ['hua_jizhi2', 'hua_jizhi3'],
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card, 'trick') == 'trick' || get.type(event.card, 'delay') == 'delay';
                            },
                            content() {
                                var chat = ['一计,再连一计.', '神智泉涌,取之不绝.'].randomGet();
                                player.say(chat);
                                player.draw();
                            },
                            ai: {
                                threaten: 1.4,
                                noautowuxie: true,
                            },
                        },
                        hua_jizhi2: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                global: 'useCardAfter',
                            },
                            filter(event, player) {
                                return event.card.name == 'wuxie' && event.player != player && get.itemtype(event.cards) == 'cards' && get.position(event.cards[0]) == 'd';
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) > 2;
                            },
                            content() {
                                trigger.player.draw();
                                player.gain(trigger.cards, 'gain2');
                            },
                        },
                        hua_jizhi3: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                player: 'judgeEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.result.card, 'trick') == 'trick' || get.type(event.result.card, 'delay') == 'delay';
                            },
                            content() {
                                player.gain(trigger.result.card);
                                player.$gain2(trigger.result.card);
                                game.log(player, '获得了' + get.translation(trigger.result.card));
                            },
                        },
                        hua_tongxin: {
                            audio: 'ext:花好月圆/audio:2',
                            init(player) {
                                if (!player.storage.hua_tongxin) player.storage.hua_tongxin = 0;
                            },
                            marktext: '心',
                            intro: {
                                content: '已发动过#次【同心】',
                            },
                            mark: true,
                            trigger: {
                                global: 'recoverAfter',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) > 2;
                            },
                            logTarget: 'player',
                            content() {
                                player.storage.hua_tongxin++;
                                game.log(player, '获得了一枚<同心>标记');
                                trigger.player.draw();
                                trigger.player.changeHujia();
                                player.draw();
                                player.changeHujia();
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        hua_fanxiang: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                player: 'hua_tongxinAfter',
                            },
                            forced: true,
                            juexingji: true,
                            derivation: ['hua_xiaoji', 'hua_jianwu'],
                            mark: true,
                            marktext: '返',
                            intro: {
                                content: 'limited',
                            },
                            init(player) {
                                player.storage.hua_fanxiang = false;
                            },
                            filter(event, player) {
                                return player.storage.hua_tongxin >= 4 && !player.storage.hua_fanxiang;
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                player.storage.hua_fanxiang = true;
                                player.awakenSkill('hua_fanxiang');
                                player.gainMaxHp();
                                player.recover();
                                player.addSkill('hua_xiaoji');
                                player.addSkill('hua_jianwu');
                            },
                        },
                        hua_xiaoji: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                player: 'loseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (i.original == 'e') return true;
                                    }
                                return false;
                            },
                            forced: true,
                            content() {
                                var num = 0;
                                for (var i = 0; i < trigger.cards.length; i++) {
                                    if (trigger.cards[i].original == 'e') num += 2;
                                    if (_status.currentPhase == player) num++;
                                }
                                player.draw(num);
                            },
                            ai: {
                                noe: true,
                                reverseEquip: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.type(card) == 'equip') return [1, 3];
                                    },
                                },
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha' && player.getEquip(1)) return Infinity;
                                },
                            },
                        },
                        奇才: {
                            group: '奇才_1',
                            mod: {
                                targetInRange(card, player, target, now) {
                                    var type = get.type(card);
                                    if (type == 'trick' || type == 'delay') return true;
                                },
                                wuxieRespondable() {
                                    return false;
                                },
                            },
                            ai: { forceYingbian: true },
                        },
                        奇才_1: {
                            trigger: {
                                player: 'phaseDiscardBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.parent.name == 'phaseDiscard' && player.countCards('h', { type: 'basic' }) < player.countCards('h');
                            },
                            content() { },
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (get.type(card) != 'basic') {
                                        return true;
                                    }
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && get.type(card) != 'basic') return false;
                                },
                            },
                        },
                        hua_wusheng: {
                            audio: 'ext:花好月圆/audio:2',
                            group: ['hua_wusheng_fangkuai', 'hua_wusheng_hongtao', 'hua_wusheng_heise', 'hua_wusheng_wusheng'],
                            subSkill: {
                                fangkuai: {
                                    audio: 'ext:花好月圆/audio:2',
                                    trigger: {
                                        player: 'shaBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && event.card.suit == 'diamond';
                                    },
                                    content() {
                                        trigger.directHit = true;
                                    },
                                },
                                hongtao: {
                                    audio: 'ext:花好月圆/audio:2',
                                    trigger: {
                                        player: 'shaBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && event.card.suit == 'heart';
                                    },
                                    content() {
                                        if (typeof trigger.extraDamage != 'number') {
                                            trigger.extraDamage = 0;
                                        }
                                        trigger.extraDamage++;
                                    },
                                },
                                heise: {
                                    audio: 'ext:花好月圆/audio:2',
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha' && get.color(event.card) == 'black';
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                                wusheng: {
                                    audio: 'ext:花好月圆/audio:2',
                                    trigger: {
                                        player: 'shaBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha';
                                    },
                                    content() {
                                        player.addTempSkill('unequip', 'shaAfter');
                                    },
                                },
                            },
                        },
                        hua_paoxiao: {
                            audio: 'ext:花好月圆/audio:4',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return event.card.name == 'sha' && event.target.countCards('he') > 0;
                            },
                            _priority: 400,
                            logTarget: 'target',
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            content() {
                                player.discardPlayerCard(trigger.target, 'he', true);
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                            },
                        },
                        hua_longdan: {
                            audio: 'ext:花好月圆/audio:4',
                            enable: 'phaseUse',
                            usable: 2,
                            filter(event, player) {
                                return player.countCards('hes') > 0;
                            },
                            filterCard: true,
                            position: 'hes',
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            check: (card) => 8 - get.value(card), //QQQ
                            content() {
                                player.addTempSkill('hua_longdan_miss', 'shaAfter');
                                player.addTempSkill('hua_longdan_damage', 'shaAfter');
                                player.useCard({ name: 'sha', suit: 'heart' }, target, false);
                            },
                            subSkill: {
                                miss: {
                                    audio: 'ext:花好月圆/audio:2',
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha';
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                                damage: {
                                    audio: 'ext:花好月圆/audio:2',
                                    trigger: {
                                        player: 'shaMiss',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha';
                                    },
                                    content() {
                                        player.gainPlayerCard('he', trigger.target, true);
                                    },
                                },
                            },
                            ai: {
                                order: 8,
                                expose: 0.2,
                                result: {
                                    player: 1,
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                            },
                        },
                        hua_tieqi: {
                            audio: 'ext:花好月圆/audio:4',
                            trigger: {
                                source: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.player.countCards('he');
                            },
                            content() {
                                'step 0';
                                player.discardPlayerCard(trigger.player, 'he', true);
                                ('step 1');
                                var card = result.cards[0];
                                if (get.color(card) == 'black') player.useCard({ name: 'sha' }, trigger.player, false);
                                if (get.color(card) == 'red') player.draw();
                            },
                        },
                        hua_liegong: {
                            audio: 'ext:花好月圆/audio:4',
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            content() {
                                if (!player.hasSkill('hua_liegong_hit')) {
                                    trigger.directHit = true;
                                    player.addTempSkill('hua_liegong_hit');
                                } else {
                                    if (typeof trigger.extraDamage != 'number') {
                                        trigger.extraDamage = 0;
                                    }
                                    trigger.extraDamage++;
                                }
                            },
                            subSkill: {
                                hit: {
                                },
                            },
                            ai: {
                                shaHit: true,
                                threaten: 2,
                            },
                        },
                        hua_wanrou: {
                            audio: 'ext:花好月圆/audio:2',
                            srlose: true,
                            trigger: {
                                player: ['useCardAfter', 'respondAfter', 'discardAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.cards) {
                                    if (Array.isArray(event.cards))
                                        for (var i of event.cards) {
                                            if (i.suit == 'diamond' && i.original != 'j' && get.position(i) == 'd') return true;
                                        }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget('婉柔:选择1名目标令其摸1张牌').ai = function (target) {
                                    return get.attitude(player, target);
                                };
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].draw();
                                }
                            },
                            ai: {
                                threaten: 0.7,
                            },
                            group: 'hua_wanrou2',
                        },
                        hua_wanrou2: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                player: 'loseEnd',
                            },
                            filter(event, player) {
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (i.original == 'j') return true;
                                    }
                                return false;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget('婉柔:选择1名目标令其摸1张牌').ai = function (target) {
                                    return get.attitude(player, target);
                                };
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].draw();
                                }
                            },
                        },
                        马术: {
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 1;
                                },
                            },
                        },
                        hua_tianxiang: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                player: 'damageBegin4',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h', { suit: 'heart' }) > 0 && event.num > 0;
                            },
                            content() {
                                'step 0';
                                player.draw(),
                                    player.chooseCardTarget({
                                        filterCard(card, player) {
                                            return card.suit == 'heart' && lib.filter.cardDiscardable(card, player);
                                        },
                                        filterTarget(card, player, target) {
                                            return player != target;
                                        },
                                        // position:'he',
                                        ai1(card) {
                                            return 10 - get.value(card);
                                        },
                                        ai2(target) {
                                            var att = get.attitude(_status.event.player, target);
                                            var trigger = _status.event.getTrigger();
                                            var da = 0;
                                            if (_status.event.player.hp == 1) {
                                                da = 10;
                                            }
                                            var eff = get.damageEffect(target, trigger.source, target);
                                            if (att == 0) return 0.1 + da;
                                            if (eff >= 0 && att > 0) {
                                                return att + da;
                                            }
                                            if (att > 0 && target.hp > 1) {
                                                if (target.maxHp - target.hp >= 3) return att * 1.1 + da;
                                                if (target.maxHp - target.hp >= 2) return att * 0.9 + da;
                                            }
                                            return -att + da;
                                        },
                                        prompt: get.prompt('hua_tianxiang'),
                                        prompt2: lib.translate.hua_tianxiang_info,
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.discard(result.cards);
                                    var target = result.targets[0];
                                    player
                                        .chooseControlList(
                                            true,
                                            function (event, player) {
                                                var target = _status.event.target;
                                                var att = get.attitude(player, target);
                                                if (target.hasSkillTag('maihp')) att = -att;
                                                if (att > 0) {
                                                    return 0;
                                                } else {
                                                    return 1;
                                                }
                                            },
                                            ['令' + get.translation(target) + '受到伤害来源对其造成的X点伤害,摸Y张牌(Y为其已损失体力值)', '令' + get.translation(target) + '失去X点体力,获得' + get.translation(result.cards)]
                                        )
                                        .set('target', target);
                                    trigger.cancel();
                                    event.target = target;
                                    event.card = result.cards[0];
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (typeof result.index == 'number') {
                                    event.index = result.index;
                                    if (result.index) {
                                        event.related = event.target.loseHp(trigger.num);
                                    } else {
                                        event.related = event.target.damage(trigger.num, trigger.source || 'nosource', 'nocard');
                                    }
                                } else event.finish();
                                ('step 3');
                                if (event.related.cancelled || target.isDead()) return;
                                if (event.index && card.isInPile()) target.gain(card, 'gain2');
                                else if (target.getDamagedHp()) target.draw(target.getDamagedHp());
                            },
                            ai: {
                                maixie_defend: true,
                                effect: {
                                    target(card, player, target) {
                                        if (player.hasSkillTag('jueqing', false, target)) return;
                                        if (get.tag(card, 'damage') && target.countCards('he') > 1) return 0.7;
                                    },
                                },
                            },
                        },
                        hua_beige: {
                            audio: 'ext:花好月圆/audio:4',
                            trigger: {
                                global: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.source && event.player.classList.contains('dead') == false && player.countCards('he');
                            },
                            forced: true,
                            checkx(event, player) {
                                var att1 = get.attitude(player, event.player);
                                var att2 = get.attitude(player, event.source);
                                return att1 > 0 && att2 <= 0;
                            },
                            content() {
                                'step 0';
                                player.draw();
                                var next = player.chooseToDiscard('he', get.prompt2('hua_beige', trigger.player));
                                var check = lib.skill.hua_beige.checkx(trigger, player);
                                next.set('ai', function (card) {
                                    if (_status.event.goon) return 8 - get.value(card);
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
                                switch (result.suit) {
                                    case 'heart':
                                        trigger.player.recover(trigger.num);
                                        break;
                                    case 'diamond':
                                        trigger.player.draw(3);
                                        break;
                                    case 'club':
                                        trigger.source.chooseToDiscard('he', 3, true);
                                        break;
                                    case 'spade':
                                        trigger.source.turnOver(true);
                                        trigger.source.loseHp();
                                        break;
                                }
                            },
                            ai: {
                                expose: 0.3,
                            },
                        },
                        hua_moshi: {
                            audio: 'ext:花好月圆/audio:5',
                            intro: {
                                content: 'cards',
                            },
                            init(player) {
                                player.storage.hua_moshi = [];
                            },
                            trigger: {
                                player: 'phaseEnd',
                            },
                            popup: false,
                            forced: true,
                            filter(event, player) {
                                return player.storage.hua_moshi.length && player.countCards('h') > 0;
                            },
                            content() {
                                if (player.storage.hua_moshi.length && player.countCards('h')) {
                                    var card = player.storage.hua_moshi.shift();
                                    card = { name: card.name, nature: card.nature, suit: card.suit, number: card.number };
                                    if (card.name != 'jiu' && lib.filter.cardEnabled(card)) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return player.canUse(card, current);
                                            })
                                        ) {
                                            lib.skill.hua_moshi_3.viewAs = card;
                                            var next = player.chooseToUse();
                                            if (next.isOnline()) {
                                                player.send(function (card) {
                                                    lib.skill.hua_moshi_3.viewAs = card;
                                                }, card);
                                            }
                                            next.set('openskilldialog', '默识:将一张手牌当' + get.translation(card) + '使用');
                                            next.set('norestore', true);
                                            next.set('bagua_skill', true);
                                            next.set('_backupevent', 'hua_moshi_3');
                                            next.backup('hua_moshi_3');
                                        }
                                    }
                                    event.redo();
                                }
                            },
                            group: ['hua_moshi_1', 'hua_moshi_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseAfter',
                                    },
                                    silent: true,
                                    content() {
                                        player.storage.hua_moshi.length = 0;
                                        player.unmarkSkill('hua_moshi');
                                    },
                                    forced: true,
                                    popup: false,
                                },
                                2: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    silent: true,
                                    filter(event, player) {
                                        if (_status.currentPhase != player) return false;
                                        if (event.parent.parent.name != 'phaseUse') return false;
                                        var type = get.type(event.card);
                                        return type == 'basic' || type == 'trick';
                                    },
                                    content() {
                                        player.storage.hua_moshi.add(trigger.card);
                                        if (player.hasSkill('hua_moshi')) player.markSkill('hua_moshi');
                                    },
                                    forced: true,
                                    popup: false,
                                },
                                3: {
                                    filterCard: true,
                                    selectCard: 1,
                                    popname: true,
                                },
                            },
                        },
                        hua_chenqing: {
                            audio: 'ext:花好月圆/audio:4',
                            trigger: {
                                global: 'dying',
                            },
                            _priority: 6,
                            filter(event, player) {
                                return event.player.hp <= 0;
                            },
                            forced: true,
                            popup: false,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('hua_chenqing'), function (card, player, target) {
                                        return target != _status.event.getTrigger().player;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        var trigger = _status.event.getTrigger();
                                        if (get.attitude(player, trigger.player) > 0) {
                                            var att1 = get.attitude(target, player);
                                            var att2 = get.attitude(target, trigger.player);
                                            var att3 = get.attitude(player, target);
                                            if (att3 < 0) return 0;
                                            return att1 / 2 + att2 + att3;
                                        } else {
                                            return 0;
                                            // return get.attitude(player,target);
                                        }
                                    });
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    event.target.draw(6);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                var target = event.target;
                                var tosave = trigger.player;
                                var att = get.attitude(target, tosave);
                                var hastao = target.countCards('h', 'tao');
                                target
                                    .chooseToDiscard(4, true, 'he')
                                    .set('ai', function (card) {
                                        var hastao = _status.event.hastao;
                                        var att = _status.event.att;
                                        if (!hastao && att > 0) {
                                            var suit = card.suit;
                                            for (var i = 0; i < ui.selected.cards.length; i++) {
                                                if (ui.selected.cards[i].suit == suit) {
                                                    return -4 - get.value(card);
                                                }
                                            }
                                        }
                                        if (att < 0 && ui.selected.cards.length == 3) {
                                            var suit = card.suit;
                                            for (var i = 0; i < ui.selected.cards.length; i++) {
                                                if (ui.selected.cards[i].suit == suit) {
                                                    return -get.value(card);
                                                }
                                            }
                                            return -10 - get.value(card);
                                        }
                                        return -get.value(card);
                                    })
                                    .set('hastao', hastao)
                                    .set('att', att);
                                ('step 3');
                                if (result.cards && result.cards.length == 4) {
                                    var suits = [];
                                    for (var i = 0; i < result.cards.length; i++) {
                                        suits.add(result.cards[i].suit);
                                    }
                                    if (suits.length == 4) {
                                        event.target.useCard({ name: 'tao' }, trigger.player);
                                    }
                                }
                            },
                        },
                        hua_hongyan: {
                            audio: 'ext:花好月圆/audio:2',
                            mod: {
                                suit(card, suit) {
                                    if (suit == 'club') return 'heart';
                                    if (suit == 'spade') return 'heart';
                                },
                            },
                            trigger: {
                                player: 'loseEnd',
                            },
                            filter(event, player) {
                                if (player == _status.currentPhase || !event.visible) return false;
                                for (var i = 0; i < event.cards2.length; i++) {
                                    if (event.cards2[i].suit == 'heart') return true;
                                }
                                return false;
                            },
                            forced: true,
                            content() {
                                player.draw(2);
                            },
                        },
                        hua_lijian: {
                            audio: 'ext:花好月圆/audio:4',
                            enable: 'phaseUse',
                            usable: 2,
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                return target.countCards('h') > 0;
                            },
                            selectTarget: 2,
                            multitarget: true,
                            multiline: true,
                            filter(event, player) {
                                return player.countCards('hes') > 0;
                            },
                            filterCard: true,
                            check(card) {
                                return 6 - get.value(card);
                            },
                            content() {
                                'step 0';
                                if (targets[0].countCards('h') && targets[1].countCards('h')) {
                                    targets[0].chooseToCompare(targets[1]);
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                if (result.bool) {
                                    targets[1].damage(targets[0]);
                                    targets[1].chooseToDiscard(1, 'he', true);
                                    targets[0].chooseToDiscard(1, 'he', true);
                                } else {
                                    targets[0].damage(targets[1]);
                                    targets[0].chooseToDiscard(1, 'he', true);
                                    targets[1].chooseToDiscard(1, 'he', true);
                                }
                            },
                            ai: {
                                expose: 0.3,
                                threaten: 2,
                                order: 9,
                                result: {
                                    target: -1,
                                },
                            },
                        },
                        hua_qingguo: {
                            mod: {
                                targetInRange(card, player, target, now) {
                                    if (get.color(card) == 'black') return true;
                                },
                            },
                            audio: 'ext:花好月圆/audio:4',
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard(card) {
                                return get.color(card) == 'black';
                            },
                            position: 'hes',
                            viewAs: {
                                name: 'shan',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('hes', { color: 'black' })) return false;
                            },
                            prompt: '将一张黑色牌当闪打出',
                            check() {
                                return 1;
                            },
                            ai: {
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (!player.countCards('hes', { color: 'black' })) return false;
                                },
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'respondShan') && current < 0) return 0.6;
                                    },
                                },
                                order: 3,
                                basic: {
                                    useful: [7, 2],
                                    value: [7, 2],
                                },
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        reluoshen: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: { player: 'phaseZhunbeiBegin' },
                            forced: true,
                            content() {
                                'step 0';
                                player.addTempSkill('reluoshen_add');
                                event.cards = [];
                                ('step 1');
                                var next = player.judge(function (card) {
                                    if (get.color(card) == 'black') return 1.5;
                                    return -1.5;
                                });
                                next.judge2 = function (result) {
                                    return result.bool;
                                };
                                if (get.mode() != 'guozhan' && !player.hasSkillTag('rejudge'))
                                    next.set('callback', function () {
                                        if (event.judgeResult.color == 'black' && get.position(card, true) == 'o') {
                                            player.gain(card, 'gain2').gaintag.add('reluoshen');
                                        }
                                    });
                                else
                                    next.set('callback', function () {
                                        if (event.judgeResult.color == 'black') event.parent.orderingCards.remove(card);
                                    });
                                ('step 2');
                                if (result.bool) {
                                    event.cards.push(result.card);
                                    player.chooseBool('是否再次发动【洛神】？').set('frequentSkill', 'reluoshen');
                                } else {
                                    event.cards = event.cards.filter((i) => get.position(i, true) == 'o');
                                    if (event.cards.length) {
                                        player.gain(event.cards, 'gain2').gaintag.add('reluoshen');
                                    }
                                    event.finish();
                                }
                                ('step 3');
                                if (result.bool) {
                                    event.goto(1);
                                } else {
                                    event.cards = event.cards.filter((i) => get.position(i, true) == 'o');
                                    if (event.cards.length) {
                                        player.gain(event.cards, 'gain2').gaintag.add('reluoshen');
                                    }
                                }
                            },
                            subSkill: {
                                add: {
                                    mod: {
                                        ignoredHandcard(card, player) {
                                            if (card.hasGaintag('reluoshen')) {
                                                return true;
                                            }
                                        },
                                        cardDiscardable(card, player, name) {
                                            if (name == 'phaseDiscard' && card.hasGaintag('reluoshen')) {
                                                return false;
                                            }
                                        },
                                    },
                                    onremove(player) {
                                        player.removeGaintag('reluoshen');
                                    },
                                },
                            },
                        },
                        hua_luoshen: {
                            audio: 'ext:花好月圆/audio:4',
                            group: 'hua_luoshen_1',
                            trigger: {
                                player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.addTempSkill('hua_luoshen_add');
                                event.cards = [];
                                ('step 1');
                                var next = player.judge(function (card) {
                                    if (get.color(card) == 'red') return 1.5;
                                    return -1.5;
                                });
                                next.judge2 = function (result) {
                                    return result.bool;
                                };
                                if (get.mode() != 'guozhan' && !player.hasSkillTag('rejudge'))
                                    next.set('callback', function () {
                                        if (event.judgeResult.color == 'red' && get.position(card, true) == 'o') {
                                            player.gain(card, 'gain2').gaintag.add('hua_luoshen');
                                        }
                                    });
                                else
                                    next.set('callback', function () {
                                        if (event.judgeResult.color == 'red') event.parent.orderingCards.remove(card);
                                    });
                                ('step 2');
                                if (result.bool) {
                                    event.cards.push(result.card);
                                    player.chooseBool('是否再次发动【洛神】？').set('frequentSkill', 'hua_luoshen');
                                } else {
                                    event.cards = event.cards.filter((i) => get.position(i, true) == 'o');
                                    if (event.cards.length) {
                                        player.gain(event.cards, 'gain2').gaintag.add('hua_luoshen');
                                    }
                                    event.finish();
                                }
                                ('step 3');
                                if (result.bool) {
                                    event.goto(1);
                                } else {
                                    event.cards = event.cards.filter((i) => get.position(i, true) == 'o');
                                    if (event.cards.length) {
                                        player.gain(event.cards, 'gain2').gaintag.add('hua_luoshen');
                                    }
                                }
                            },
                            subSkill: {
                                add: {
                                    mod: {
                                        ignoredHandcard(card, player) {
                                            if (card.hasGaintag('hua_luoshen')) {
                                                return true;
                                            }
                                        },
                                        cardDiscardable(card, player, name) {
                                            if (name == 'phaseDiscard' && card.hasGaintag('hua_luoshen')) {
                                                return false;
                                            }
                                        },
                                    },
                                    onremove(player) {
                                        player.removeGaintag('hua_luoshen');
                                    },
                                },
                                1: {
                                    trigger: {
                                        player: 'judge',
                                    },
                                    _priority: -1,
                                    filter(event, player) {
                                        player.addTempSkill('hua_luoshen_2', 'judgeAfter');
                                        return get.color(player.judging[0]) == 'black';
                                    },
                                    content() {
                                        player.gain(player.judging[0]);
                                        player.$gain2(player.judging[0]);
                                    },
                                },
                                2: {
                                    mod: {
                                        suit(card, suit) {
                                            if (suit == 'club') return 'heart';
                                        },
                                    },
                                },
                            },
                        },
                        hua_fengpo: {
                            audio: 'ext:花好月圆/audio:3',
                            trigger: {
                                player: ['shaBegin', 'juedouBegin'],
                            },
                            forced: true,
                            popup: false,
                            content() {
                                'step 0';
                                player.chooseControl('draw_card', '加伤害', 'cancel2').set('prompt', get.prompt('hua_fengpo'));
                                ('step 1');
                                if (result.control && result.control != 'cancel2') {
                                    var nd = player.countCards('h', { color: 'red' });
                                    if (result.control == 'draw_card') {
                                        player.draw(nd);
                                    } else {
                                        var trigger2 = trigger.parent;
                                        if (typeof trigger2.baseDamage != 'number') {
                                            trigger2.baseDamage = 1;
                                        }
                                        trigger.baseDamage += nd;
                                    }
                                }
                            },
                        },
                        hua_guose: {
                            audio: 'ext:花好月圆/audio:2',
                            group: 'hua_guose2',
                            enable: 'phaseUse',
                            discard: false,
                            filter(event, player) {
                                return player.countCards('hes', { suit: 'diamond' }) > 0;
                            },
                            prepare: 'throw',
                            position: 'hes',
                            filterCard: {
                                suit: 'diamond',
                            },
                            filterTarget(card, player, target) {
                                if (target.hasJudge('lebu')) return true;
                                return lib.filter.targetEnabled({ name: 'lebu' }, player, target);
                            },
                            check(card) {
                                return 7 - get.value(card);
                            },
                            content() {
                                if (target.hasJudge('lebu')) {
                                    target.discard(target.getJudge('lebu'));
                                } else {
                                    var next = player.useCard({ name: 'lebu' }, target, cards);
                                    next.animate = false;
                                    next.audio = false;
                                }
                                player.draw();
                            },
                            ai: {
                                result: {
                                    target(player, target) {
                                        if (target.hasJudge('lebu')) return -get.effect(target, { name: 'lebu' }, player, target);
                                        return get.effect(target, { name: 'lebu' }, player, target);
                                    },
                                },
                                order: 9,
                            },
                        },
                        hua_haowu: {
                            audio: 'ext:花好月圆/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                var he = player.getCards('he');
                                var num = 0;
                                for (var i = 0; i < he.length; i++) {
                                    var info = lib.card[he[i].name];
                                    if (info.type == 'equip' && !info.nomod && !info.unique && lib.inpile.includes(he[i].name)) {
                                        num++;
                                        if (num >= 2) return true;
                                    }
                                }
                            },
                            filterCard(card) {
                                if (ui.selected.cards.length && card.name == ui.selected.cards[0].name) return false;
                                var info = get.info(card);
                                return info.type == 'equip' && !info.nomod && !info.unique && lib.inpile.includes(card.name);
                            },
                            selectCard: 2,
                            position: 'hes',
                            check(card) {
                                return get.value(card);
                            },
                            content() {
                                var name = cards[0].name + '_' + cards[1].name;
                                var info1 = get.info(cards[0]),
                                    info2 = get.info(cards[1]);
                                if (!lib.card[name]) {
                                    var info = {
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
                                    for (var i in info1.distance) {
                                        info.distance[i] = info1.distance[i];
                                    }
                                    for (var i in info2.distance) {
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
                                    if (info.onEquip.length == 0) delete info.onEquip;
                                    if (info.onLose.length == 0) delete info.onLose;
                                    lib.card[name] = info;
                                    lib.translate[name] = get.translation(cards[0].name, 'skill') + get.translation(cards[1].name, 'skill');
                                    var str = lib.translate[cards[0].name + '_info'];
                                    if (str[str.length - 1] == '.' || str[str.length - 1] == '.') {
                                        str = str.slice(0, str.length - 1);
                                    }
                                    lib.translate[name + '_info'] = str + ';' + lib.translate[cards[1].name + '_info'];
                                    try {
                                        game.addVideo('newcard', null, {
                                            name: name,
                                            translate: lib.translate[name],
                                            info: lib.translate[name + '_info'],
                                            card: cards[0].name,
                                            legend: true,
                                        });
                                    } catch (e) {
                                    }
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
                        hua_shuyou: {
                            audio: 'ext:花好月圆/audio:4',
                            trigger: {
                                player: 'phaseUseBefore',
                            },
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('hes') > 0;
                            },
                            forced: true,
                            popup: false,
                            check(card) {
                                return 10 - get.value(card);
                            },
                            content() {
                                'step 0';
                                player.chooseControl('关羽', '张飞', '赵云', '马超', '黄忠');
                                ('step 1');
                                if (result.control == '关羽') {
                                    player.addTempSkill('hua_wusheng', { player: 'phaseBefore' });
                                    var list = ['qinglong'];
                                    player.equip(game.createCard(list.randomGet()));
                                }
                                if (result.control == '张飞') {
                                    player.addTempSkill('hua_paoxiao', { player: 'phaseBefore' });
                                    var list = ['zhangba'];
                                    player.equip(game.createCard(list.randomGet()));
                                }
                                if (result.control == '赵云') {
                                    player.addTempSkill('hua_longdan', { player: 'phaseBefore' });
                                    var list = ['yinyueqiang'];
                                    player.equip(game.createCard(list.randomGet()));
                                }
                                if (result.control == '马超') {
                                    player.addTempSkill('hua_tieqi', { player: 'phaseBefore' });
                                    var list = ['baiyin'];
                                    player.equip(game.createCard(list.randomGet()));
                                }
                                if (result.control == '黄忠') {
                                    player.addTempSkill('hua_liegong', { player: 'phaseBefore' });
                                    var list = ['qilin'];
                                    player.equip(game.createCard(list.randomGet()));
                                }
                                ('step 2');
                                var list = ['sha'];
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
                        hua_jianwu: {
                            audio: 'ext:花好月圆/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target.hasCard(function (card) {
                                    return !get.info(card).unique;
                                }, 'e');
                            },
                            check(card) {
                                return 6 - get.value(card);
                            },
                            filterCard(card) {
                                var info = lib.card[card.name];
                                if (!info) return false;
                                return !info.image && !info.fullimage;
                            },
                            discard: false,
                            lose: false,
                            content() {
                                'step 0';
                                var next = player.choosePlayerCard(target, 'e', true);
                                next.ai = get.buttonValue;
                                next.filterButton = function (button) {
                                    return !get.info(button.link).unique;
                                };
                                ('step 1');
                                if (result.links[0]) {
                                    cards[0].init([result.links[0].suit, result.links[0].number, result.links[0].name, result.links[0].nature]);
                                    event.card = cards[0];
                                    player.chooseTarget('选择一个角色装备' + get.translation(result.links), function (card, player, target) {
                                        return !target.isMin();
                                    }).ai = function (target) {
                                        if (!target.countCards('e', { subtype: get.subtype(event.card) })) {
                                            return get.attitude(player, target);
                                        }
                                        return 0;
                                    };
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.targets && result.targets[0] && event.card) {
                                    player.$give(event.card, result.targets[0]);
                                    event.toequip = result.targets[0];
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (event.toequip) {
                                    event.toequip.equip(event.card);
                                }
                            },
                            ai: {
                                order: 9,
                                threaten: 1.5,
                                result: {
                                    player(player) {
                                        if (player.countCards('e') < 3) return 1;
                                        return 0;
                                    },
                                },
                            },
                        },
                        hua_jiaohua: {
                            group: 'hua_jiaohua_1',
                            audio: 'ext:花好月圆/audio:2',
                            enable: 'phaseUse',
                            usable: 2,
                            viewAsFilter(player) {
                                return player.countCards('hs', { suit: 'heart' }) > 0;
                            },
                            viewAs: {
                                name: 'wuzhong',
                            },
                            filterCard: {
                                suit: 'heart',
                            },
                            check(card) {
                                return 8 - get.value(card);
                            },
                            ai: {
                                basic: {
                                    order: 7.2,
                                    useful: 4.5,
                                    value: 9.2,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 2,
                                },
                            },
                        },
                        hua_jiaohua_1: {
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'wuzhong';
                            },
                            content() {
                                trigger.nowuxie = true;
                            },
                        },
                        hua_tianzi: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                player: 'phaseDrawBefore',
                            },
                            check(event, player) {
                                if (game.players.length < 3) return 0;
                            },
                            content() {
                                'step 0';
                                trigger.finish();
                                trigger.untrigger();
                                event.current = player.next;
                                ('step 1');
                                event.current.chooseCard('交给' + get.translation(player) + '一张手牌或令其摸一张牌').ai = function (card) {
                                    if (get.attitude(event.current, player) > 0) {
                                        return -1;
                                    } else {
                                        return 3 - get.value(card);
                                    }
                                };
                                ('step 2');
                                if (result.bool == false) {
                                    event.current.line(player, 'green');
                                    game.log(get.translation(event.current) + '让' + get.translation(player) + '摸了一张牌');
                                    player.draw();
                                } else {
                                    player.gain(result.cards[0]);
                                    event.current.$give(1, player);
                                }
                                if (event.current.next != player) {
                                    event.current = event.current.next;
                                    event.goto(1);
                                }
                            },
                        },
                        hua_fangxin: {
                            audio: 'ext:花好月圆/audio:2',
                            srlose: true,
                            enable: 'chooseToUse',
                            discard: false,
                            prepare(cards, player) {
                                player.$give(cards, player);
                            },
                            filter(event, player) {
                                if (event.type == 'dying') {
                                    return event.filterCard && event.filterCard({ name: 'tao' }, player) && ((!player.hasJudge('lebu') && player.countCards('hes', { suit: 'diamond' })) || (!player.hasJudge('bingliang') && player.countCards('hes', { suit: 'club' })));
                                }
                                if (event.parent.name != 'phaseUse') return false;
                                if (!lib.filter.filterCard({ name: 'tao' }, player, event)) {
                                    return false;
                                }
                                return player.isDamaged() && ((!player.hasJudge('lebu') && player.countCards('hes', { suit: 'diamond' })) || (!player.hasJudge('bingliang') && player.countCards('hes', { suit: 'club' })));
                            },
                            position: 'hes',
                            filterCard(card, player, target) {
                                return (card.suit == 'diamond' && !player.hasJudge('lebu')) || (card.suit == 'club' && !player.hasJudge('bingliang'));
                            },
                            filterTarget(card, player, target) {
                                if (_status.event.type == 'dying') {
                                    return target == _status.event.dying;
                                }
                                return player == target;
                            },
                            selectTarget: -1,
                            check(card) {
                                return 8 - get.value(card);
                            },
                            content() {
                                if (cards[0].suit == 'diamond') {
                                    player.addJudge('lebu', cards[0]);
                                } else {
                                    player.addJudge('bingliang', cards[0]);
                                }
                                player.useCard({ name: 'tao' }, targets).delayx = false;
                            },
                            ai: {
                                threaten: 1.5,
                                save: true,
                                order: 9,
                                result: {
                                    player(player) {
                                        return ai.get.effect(player, { name: 'lebu' }, player, player);
                                    },
                                    target(player, target) {
                                        return ai.get.effect(target, { name: 'tao' }, player, target);
                                    },
                                },
                            },
                        },
                        hua_liuli: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                target: 'shaBefore',
                            },
                            forced: true,
                            _priority: 5,
                            filter(event, player) {
                                if (player.countCards('hes') == 0) return false;
                                return game.hasPlayer(function (current) {
                                    return current != event.player && current != player && lib.filter.targetEnabled(event.card, event.player, current);
                                });
                            },
                            content() {
                                'step 0';
                                player.draw();
                                var next = player.chooseCardTarget({
                                    position: 'hes',
                                    filterCard: lib.filter.cardDiscardable,
                                    filterTarget(card, player, target) {
                                        var trigger = _status.event.getTrigger();
                                        if (target != trigger.player && target != player) {
                                            if (player.canUse(trigger.card, target)) return true;
                                        }
                                        return false;
                                    },
                                    ai1(card) {
                                        return ai.get.unuseful(card) + 9;
                                    },
                                    ai2(target) {
                                        if (_status.event.player.countCards('h', 'shan')) {
                                            return -get.attitude(_status.event.player, target);
                                        }
                                        if (get.attitude(_status.event.player, target) < 5) {
                                            return 6 - get.attitude(_status.event.player, target);
                                        }
                                        if (_status.event.player.hp == 1 && player.countCards('h', 'shan') == 0) {
                                            return 10 - get.attitude(_status.event.player, target);
                                        }
                                        if (_status.event.player.hp == 2 && player.countCards('h', 'shan') == 0) {
                                            return 8 - get.attitude(_status.event.player, target);
                                        }
                                        return -1;
                                    },
                                    prompt: get.prompt('hua_liuli'),
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.discard(result.cards);
                                    trigger.target = result.targets[0];
                                    trigger.targets.remove(player);
                                    trigger.targets.push(result.targets[0]);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                trigger.untrigger();
                                trigger.trigger('useCardToBefore');
                                trigger.trigger('shaBefore');
                            },
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 999;
                                },
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (target.countCards('he') == 0) return;
                                        if (card.name != 'sha') return;
                                        var min = 1;
                                        var friend = get.attitude(player, target) > 0;
                                        var vcard = { name: 'shacopy', nature: card.nature, suit: card.suit };
                                        var players = game.filterPlayer();
                                        for (var i = 0; i < players.length; i++) {
                                            if (player != players[i] && get.attitude(target, players[i]) < 0 && target.canUse(card, players[i])) {
                                                if (!friend) return 0;
                                                if (ai.get.effect(players[i], vcard, player, player) > 0) {
                                                    if (!player.canUse(card, players[0])) {
                                                        return [0, 0.1];
                                                    }
                                                    min = 0;
                                                }
                                            }
                                        }
                                        return min;
                                    },
                                },
                            },
                        },
                        hua_biyue: {
                            audio: 'ext:花好月圆/audio:4',
                            trigger: {
                                player: ['phaseJieshuBegin', 'phaseBegin'],
                            },
                            forced: true,
                            content() {
                                var num = 1;
                                if (!player.countCards('e')) {
                                    num = 2;
                                }
                                player.draw(num);
                            },
                        },
                        hua_huaqiu: {
                            group: 'qixian',
                            audio: 'ext:花好月圆/audio:4',
                            trigger: {
                                target: 'useCardToBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && get.color(event.card) == 'red';
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                            ai: {
                                effect(card, player, target) {
                                    if (get.color(card) == 'red') return [1, 1];
                                },
                            },
                        },
                        hua_jiqiao: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('he', { type: 'equip' }) > 0;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseToDiscard(get.prompt2('jiqiao'), [1, player.countCards('he', { type: 'equip' })], 'he', function (card) {
                                        return get.type(card) == 'equip';
                                    })
                                    .set('ai', function (card) {
                                        if (card.name == 'bagua') return 10;
                                        return 7 - get.value(card);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    event.cards = get.cards(2 * result.cards.length);
                                    player.showCards(event.cards);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                var gained = [];
                                var tothrow = [];
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (get.type(i) != 'equip') {
                                            gained.push(i);
                                        } else {
                                            tothrow.push(i);
                                        }
                                    }
                                player.gain(gained, 'gain2');
                                game.cardsDiscard(tothrow);
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        hua_linglong: {
                            audio: 'ext:花好月圆/audio:2',
                            inherit: 'bagua_skill',
                            filter(event, player) {
                                if (!lib.skill.bagua_skill.filter(event, player)) return false;
                                if (!player.isEmpty(2)) return false;
                                return true;
                            },
                            ai: {
                                respondShan: true,
                                effect: {
                                    target(card, player, target) {
                                        if (player == target && get.subtype(card) == 'equip2') {
                                            if (get.equipValue(card) <= 7.5) return 0;
                                        }
                                        if (target.getEquip(2)) return;
                                        return lib.skill.bagua_skill.ai.effect.target.apply(this, arguments);
                                    },
                                },
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha' && !player.getEquip(1)) return num + 1;
                                },
                                globalFrom(from, to, distance) {
                                    if (!from.getEquip(5)) return distance - 1;
                                },
                                maxHandcard(player, num) {
                                    if (player.getEquip(3) || player.getEquip(4) || player.getEquip(6)) return;
                                    return num + 1;
                                },
                                canBeDiscarded(card, source, player) {
                                    if (player.getEquip(5)) return;
                                    if (get.position(card) == 'e' && ['equip2', 'equip5'].includes(get.subtype(card))) return false;
                                },
                            },
                            equipSkill: true,
                            trigger: {
                                player: ['chooseToRespondBegin', 'chooseToUseBegin'],
                            },
                            check(event, player) {
                                if (event && (event.ai || event.ai1)) {
                                    var ai = event.ai || event.ai1;
                                    var tmp = _status.event;
                                    _status.event = event;
                                    var result = ai({ name: 'shan' }, _status.event.player, event);
                                    _status.event = tmp;
                                    return result > 0;
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                trigger.bagua_skill = true;
                                player.judge('bagua', function (card) {
                                    return get.color(card) == 'red' ? 1.5 : -0.5;
                                });
                                ('step 1');
                                if (result.judge > 0) {
                                    trigger.untrigger();
                                    trigger.set('responded', true);
                                    trigger.result = { bool: true, card: { name: 'shan' } };
                                }
                            },
                        },
                        hua_guose2: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                global: ['phaseUseSkipped', 'phaseUseCancelled'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                var chat = ['没天过,气不气啊？', '∠( ᐛ 」∠)_你出牌阶段没了.'].randomGet();
                                player.say(chat);
                                player.draw();
                            },
                        },
                        hua_lihun: {
                            audio: 'ext:花好月圆/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            filterCard: true,
                            position: 'hes',
                            content() {
                                player.gain(target.getCards('he'), target, 'giveAuto');
                                player.turnOver();
                                player.addSkill('hua_lihun2');
                                player.storage.hua_lihun = target;
                            },
                            check(card) {
                                return 8 - get.value(card);
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player(player) {
                                        if (player.classList.contains('turnedover')) return 10;
                                        return 0;
                                    },
                                    target(player, target) {
                                        if (target.countCards('h') > target.hp) return target.hp - target.countCards('h');
                                        return 0;
                                    },
                                },
                                threaten: 1.5,
                                effect: {
                                    target(card) {
                                        if (card.name == 'guiyoujie') return [0, 2];
                                    },
                                },
                            },
                        },
                        hua_lihun2: {
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            forced: true,
                            popup: false,
                            content() {
                                'step 0';
                                var cards = player.getCards('he');
                                player.removeSkill('hua_lihun2');
                                if (player.storage.hua_lihun.classList.contains('dead') || player.storage.hua_lihun.hp <= 0 || cards.length == 0) {
                                    event.finish();
                                } else {
                                    if (cards.length < player.storage.hua_lihun.hp) event._result = { bool: true, cards: cards };
                                    else player.chooseCard('he', true, player.storage.hua_lihun.hp, '离魂:选择要交给' + get.translation(player.storage.hua_lihun) + '的牌');
                                }
                                ('step 1');
                                player.storage.hua_lihun.gain(result.cards, player);
                                player.$give(result.cards.length, player.storage.hua_lihun);
                            },
                        },
                        qita_hhyy_1: {
                            audioname2: {
                                hhyy_huangyueying: 'hua_jizhi',
                                hhyy_zhenji: 'hua_qingguo',
                                hhyy_caiwenji: 'hua_moshi',
                                hhyy_mayunlu: 'hua_fengpo',
                                hhyy_wangyi: 'hua_zhenlie',
                                hhyy_sunshangxiang: 'hua_xiaoji',
                                hhyy_daqiao: 'hua_guose',
                                hhyy_xiaoqiao: 'hua_jiaohua',
                                hhyy_diaochan: 'hua_biyue',
                                qita_zhangchunhua: 'hua_shangshi2',
                                qita_caopi: 'hua_songwei',
                            },
                            trigger: {
                                target: 'useCardToBegin',
                            },
                            _priority: -1,
                            filter(event, player) {
                                var hhyyb = new RegExp('hhyy');
                                var qitab = new RegExp('qita');
                                return get.color(event.card) == 'red' && player.isDamaged() && (hhyyb.test(player.name) || hhyyb.test(player.name2) || qitab.test(player.name) || qitab.test(player.name2));
                            },
                            content() {
                                player.recover();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.color(card) == 'red' && target.isDamaged()) return [1, 1];
                                    },
                                },
                            },
                        },
                        qita_hhyy: {
                            nobracket: true,
                            fixed: true,
                            charlotte: true,
                            audioname2: {
                                hhyy_huangyueying: 'hua_jiqiao',
                                hhyy_zhenji: 'hua_huaqiu',
                                hhyy_caiwenji: 'hua_chenqing',
                                hhyy_mayunlu: 'hua_shuyou',
                                hhyy_wangyi: 'hua_miji',
                                hhyy_sunshangxiang: 'hua_jianwu',
                                hhyy_daqiao: 'hua_guose2',
                                hhyy_xiaoqiao: 'hua_hongyan',
                                hhyy_diaochan: 'hua_tianzi',
                                qita_zhangchunhua: 'hua_jueqing_1',
                                qita_caopi: 'hua_wendi',
                            },
                            group: 'qita_hhyy_1',
                            trigger: {
                                player: 'phaseDiscardBefore',
                            },
                            frequent(event, player) {
                                return !player.needsToDiscard();
                            },
                            forced: true,
                            filter(event, player) {
                                var hhyyb = new RegExp('hhyy');
                                var qitab = new RegExp('qita');
                                return player.countUsed() <= player.hp && (hhyyb.test(player.name) || hhyyb.test(player.name2) || qitab.test(player.name) || qitab.test(player.name2));
                            },
                            content() {
                                player.addTempSkill('qita_qipai');
                                player.draw(player.maxHp - player.hp + 1);
                            },
                        },
                        qita_qipai: {
                            mod: {
                                maxHandcard(player, num) {
                                    return num * 4;
                                },
                            },
                        },
                        hua_zhenlie: {
                            audio: 'ext:花好月圆/audio:2',
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.maxHp;
                                },
                            },
                            filter(event, player) {
                                return event.player != player && event.card;
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) > 0) {
                                    return false;
                                }
                                if (get.tag(event.card, 'respondSha')) {
                                    if (player.countCards('hs', { name: 'sha' }) == 0) {
                                        return true;
                                    }
                                } else if (get.tag(event.card, 'respondShan')) {
                                    if (player.countCards('hs', { name: 'shan' }) == 0) {
                                        return true;
                                    }
                                } else if (get.tag(event.card, 'damage')) {
                                    if (player.countCards('hs') < 2) return true;
                                } else if (event.card.name == 'shunshou' && player.hp > 2) {
                                    return true;
                                }
                                return false;
                            },
                            _priority: 10,
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            content() {
                                'step 0';
                                player.loseHp(2);
                                player.recover(1);
                                player.draw(1);
                                ('step 1');
                                trigger.untrigger();
                                trigger.finish();
                                ('step 2');
                                if (trigger.player.countCards('he')) {
                                    player.discardPlayerCard(2, trigger.player, 'he', true);
                                }
                            },
                            ai: {
                                expose: 0.3,
                            },
                        },
                        hua_miji: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
                            },
                            filter(event, player) {
                                return player.hp < player.maxHp;
                            },
                            content() {
                                'step 0';
                                event.num = player.getDamagedHp();
                                player.draw(event.num);
                                ('step 1');
                                var check = player.countCards('h') - event.num;
                                player
                                    .chooseCardTarget({
                                        selectCard: event.num,
                                        filterTarget(card, player, target) {
                                            return player != target;
                                        },
                                        ai1(card) {
                                            var player = _status.event.player;
                                            if (player.maxHp - player.hp == 1 && card.name == 'du') return 30;
                                            var check = _status.event.check;
                                            if (check < 1) return 0;
                                            if (player.hp > 1 && check < 2) return 0;
                                            return get.unuseful(card) + 9;
                                        },
                                        ai2(target) {
                                            var att = get.attitude(_status.event.player, target);
                                            if (ui.selected.cards.length == 1 && ui.selected.cards[0].name == 'du') return 1 - att;
                                            return att - 2;
                                        },
                                        prompt: '将' + get.cnNumber(event.num) + '张手牌交给一名其他角色',
                                    })
                                    .set('check', check);
                                ('step 2');
                                if (result.bool) {
                                    result.targets[0].gain(result.cards, event.player, 'giveAuto');
                                    player.line(result.targets, 'green');
                                }
                            },
                            ai: {
                                threaten(player, target) {
                                    if (target.hp == 1) return 3;
                                    if (target.hp == 2) return 1.5;
                                    return 0.5;
                                },
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'recover') && player.hp >= player.maxHp - 1) return [0, 0];
                                    },
                                },
                            },
                        },
                        hua_xianji: {
                            group: 'hua_xianji2',
                            trigger: {
                                global: 'phaseBefore',
                            },
                            check(event, player) {
                                return player.hp > 3;
                            },
                            audio: 'ext:花好月圆/audio:4',
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                player.loseHp();
                                var list = ['nanman', 'wanjian', 'lebu', 'bingliang', 'guohe', 'shunshou', 'wuzhong', 'tao', 'jiu', 'liangyuan', 'wuxie'];
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                            },
                        },
                        hua_xianji2: {
                            trigger: {
                                global: 'loseHpBegin',
                            },
                            audio: 'ext:花好月圆/audio:2',
                            forced: true,
                            content() {
                                player.draw();
                            },
                        },
                        hua_jueqing: {
                            group: ['hua_jueqing_1', 'hua_jueqing_2'],
                            trigger: {
                                source: 'damageBefore',
                            },
                            audio: 'ext:花好月圆/audio:2',
                            _priority: 50,
                            charlotte: true,
                            check() {
                                return true;
                            },
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                                var ex = 0;
                                if (trigger.card && trigger.card.name == 'sha') {
                                    if (player.hasSkill('jiu')) ex++;
                                    if (player.hasSkill('luoyi2')) ex++;
                                    if (player.hasSkill('reluoyi2')) ex++;
                                }
                                trigger.player.loseHp(trigger.num + ex);
                            },
                            subSkill: {
                                1: {
                                    audio: 'ext:花好月圆/audio:2',
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    content() {
                                        trigger.source.damage();
                                        game.broadcastAll() + player.node.avatar.setBackgroundImage('extension/花好月圆/image/qita_zhangchunhua1.jpg');
                                    },
                                },
                                2: {
                                    audio: 'ext:花好月圆/audio:2',
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var target = event.player;
                                        return target != player && !target.storage.nohp && player.countCards('he') > 0 && player.canUse({ name: 'sha', nature: 'ice' }, target, false);
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseCard('he', get.prompt('hua_jueqing_2', trigger.player), '将一张牌当做冰【杀】对其使用', function (card, player) {
                                                return player.canUse({ name: 'sha', nature: 'ice' }, _status.event.target, false);
                                            })
                                            .set('target', trigger.player)
                                            .set('ai', function (card) {
                                                if (get.effect(_status.event.target, { name: 'sha', nature: 'ice' }, player) <= 0) return false;
                                                return 6 - get.value(card);
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            player.useCard({ name: 'sha', nature: 'ice' }, result.cards, false, trigger.player, 'hua_jueqing_2');
                                        }
                                    },
                                    ai: {
                                        unequip: true,
                                        skillTagFilter(player, tag, arg) {
                                            if (arg && arg.name == 'sha' && arg.card.nature == 'ice') return true;
                                            return false;
                                        },
                                    },
                                },
                            },
                        },
                        hua_shangshi: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                player: ['loseAfter', 'changeHp', 'gainMaxHpAfter', 'loseMaxHpAfter'],
                                source: 'gainAfter',
                                global: ['equipAfter', 'addJudgeAfter'],
                            },
                            forced: true,
                            charlotte: true,
                            forced: true,
                            prompt(event, player) {
                                return '是否发动【伤逝】将手牌摸至' + get.cnNumber(player.getDamagedHp()) + '张？';
                            },
                            prompt2: false,
                            filter(event, player) {
                                if (event.getl && !event.getl(player)) return false;
                                return player.countCards('h') < Math.max(player.getDamagedHp() + 2);
                            },
                            content() {
                                player.drawTo(Math.max(player.getDamagedHp() + 2));
                            },
                            ai: {
                                noh: true,
                                skillTagFilter(player, tag) {
                                    if (tag == 'noh' && player.maxHp - player.hp < player.countCards('h')) {
                                        return false;
                                    }
                                },
                            },
                            group: ['hua_shangshi2', 'huashangshi'],
                        },
                        hua_shangshi2: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: { player: 'damageBegin3' },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            content() {
                                player
                                    .chooseToDiscard(get.prompt2('hua_shangshi'), 'he', [1, player.countCards('he')])
                                    .set('ai', function (card) {
                                        var player = _status.event.player;
                                        if (player.countCards('h') > player.getDamagedHp() + _status.event.getTrigger().num) return 1;
                                        if (player.isPhaseUsing()) return 0.1 - player.getUseValue(card, null, true) / Math.max(0.1, get.value(card));
                                        return (get.position(card) == 'h' ? 5 : 0.1) - get.value(card);
                                    });
                            },
                        },
                        huashangshi: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: { player: 'phaseZhunbeiBegin' },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h') > player.hp;
                            },
                            content() {
                                player.addTempSkill('huashangshi_paoxiao');
                            },
                        },
                        huashangshi_paoxiao: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                            },
                        },
                        hua_xingshang: {
                            audio: 'ext:花好月圆/audio:4',
                            trigger: {
                                global: 'dieAfter',
                            },
                            forced: true,
                            content() {
                                player.draw(3);
                                player.recover();
                            },
                        },
                        hua_wendi: {
                            trigger: {
                                global: 'dieAfter',
                            },
                            audio: 'ext:花好月圆/audio:2',
                            forced: true,
                            content() {
                                player.draw(3);
                                player.gainMaxHp();
                                player.uninit;
                                player.init(player.name, 'hhyy_zhenji');
                                player.removeSkill('hua_wendi');
                            },
                        },
                        hua_fangzhu: {
                            audio: 'ext:花好月圆/audio:2',
                            audioname2: {
                                mdtx_simayi: 'mou_fangzhu',
                            },
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.source != undefined;
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            content() {
                                'step 0';
                                trigger.source.turnOver();
                                trigger.source.judge(function (card) {
                                    player.storage.hua_fangzhu = get.color(card);
                                    var num = 0;
                                    if (player.storage.hua_fangzhu == 'red') player.draw(2) && player.recover();
                                });
                                ('step 1');
                                if (player.storage.hua_fangzhu == 'black') trigger.source.loseHp(trigger.num);
                            },
                        },
                        hua_songwei: {
                            audio: 'ext:花好月圆/audio:2',
                            forceaudio: true,
                            trigger: {
                                global: 'judgeEnd',
                            },
                            filter(event, player) {
                                if (event.player == player) return false;
                                if (event.result.color != 'black') return false;
                                return player.hasSkill('hua_songwei', event.player);
                            },
                            forced: true,
                            content() {
                                'step 0';
                                trigger.player.chooseBool('是否发动【颂威】,令' + get.translation(player) + '摸一张牌？').set('choice', get.attitude(trigger.player, player) > 0);
                                ('step 1');
                                if (result.bool) {
                                    trigger.player.line(player, 'green');
                                    player.draw();
                                }
                            },
                        },
                        qita_mdtx: {
                            nobracket: true,
                            audioname2: {
                                mdtx_xunyu: 'mou_quhu',
                                mdtx_jiaxu: 'mou_weimu',
                                mdtx_simayi: 'mou_guicai',
                                mdtx_lusu: 'mou_haoshi',
                                qita_sunquan: 'rezhiheng',
                                mdtx_guojia: 'mou_yice',
                                mdtx_zgwolong: 'mou_xingxiang',
                                mdtx_pangtong: 'mou_lianhuan5',
                                mdtx_luxun: 'mou_qianxun',
                            },
                            group: 'qita_mdtx_1',
                            charlotte: true,
                            fixed: true,
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            _priority: -1,
                            popup: false,
                            forced: true,
                            filter(event, player) {
                                var mdtxb = new RegExp('mdtx');
                                var qitab = new RegExp('qita');
                                return get.type(event.card) == 'trick' && (mdtxb.test(player.name) || mdtxb.test(player.name) || qitab.test(player.name) || qitab.test(player.name2));
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.type(card) == 'trick') return [1, 1];
                                        if (card.name == 'tiesuo') return [1, 0.6];
                                    },
                                },
                            },
                        },
                        qita_mdtx_1: {
                            audioname2: {
                                mdtx_xunyu: 'mou_jieming',
                                mdtx_jiaxu: 'mou_luanwu',
                                mdtx_simayi: 'mou_renjie',
                                mdtx_lusu: 'mou_haoshi2',
                                qita_sunquan: 'rezhiheng',
                                mdtx_guojia: 'mou_yice',
                                mdtx_zgwolong: 'mou_weiwo',
                                mdtx: 'mou_lianhuan',
                                mdtx_luxun: 'mou_lianying',
                            },
                            trigger: {
                                player: 'phaseDiscardBefore',
                            },
                            frequent(event, player) {
                                return !player.needsToDiscard();
                            },
                            forced: true,
                            filter(event, player) {
                                var mdtxb = new RegExp('mdtx');
                                var qitab = new RegExp('qita');
                                return player.countUsed() <= player.hp && (mdtxb.test(player.name) || mdtxb.test(player.name2) || qitab.test(player.name) || qitab.test(player.name2));
                            },
                            content() {
                                player.addTempSkill('qita_qipai');
                                player.draw(player.maxHp - player.hp + 1);
                            },
                        },
                        mou_quhu: {
                            audio: 'ext:花好月圆/audio:2',
                            enable: 'phaseUse',
                            usable: 3,
                            filter(event, player) {
                                if (player.countCards('h') == 0) return false;
                                for (var i = 0; i < game.players.length; i++) {
                                    if (game.players[i].hp != player.hp && game.players[i].countCards('h')) return true;
                                }
                                return false;
                            },
                            filterTarget(card, player, target) {
                                return target.hp != player.hp && target.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseToCompare(target);
                                ('step 1');
                                if (result.bool) {
                                    if (
                                        game.hasPlayer(function (player) {
                                            return player != target;
                                        })
                                    ) {
                                        player
                                            .chooseTarget(function (card, player, target) {
                                                var source = _status.event.source;
                                                return target != source;
                                            }, true)
                                            .set('ai', function (target) {
                                                return get.damageEffect(target, _status.event.source, player);
                                            })
                                            .set('source', target);
                                    } else {
                                        event.finish();
                                    }
                                } else {
                                    player.damage(target);
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool && result.targets && result.targets.length) {
                                    target.line(result.targets[0], 'green');
                                    result.targets[0].damage(2, target);
                                }
                            },
                            ai: {
                                order: 0.5,
                                result: {
                                    target(player, target) {
                                        var att = get.attitude(player, target);
                                        var oc = target.countCards('h') == 1;
                                        if (att > 0 && oc) return 0;
                                        for (var i = 0; i < game.players.length; i++) {
                                            if (game.players[i] != target && game.players[i] != player && get.distance(target, game.players[i], 'attack') <= 1) {
                                                if (get.damageEffect(game.players[i], target, player) > 0) {
                                                    return att > 0 ? att / 2 : att - (oc ? 5 : 0);
                                                }
                                            }
                                        }
                                        return 0;
                                    },
                                    player(player, target) {
                                        if (target.hasSkill('jueqing')) return -10;
                                        var mn = 1;
                                        var hs = player.getCards('h');
                                        for (var i = 0; i < hs.length; i++) {
                                            mn = Math.max(mn, hs[i].number);
                                        }
                                        if (mn <= 11 && player.hp < 2) return -20;
                                        var max = player.maxHp - hs.length;
                                        for (var i = 0; i < game.players.length; i++) {
                                            if (get.attitude(player, game.players[i]) > 2) {
                                                max = Math.max(Math.min(5, game.players[i].hp) - game.players[i].countCards('h'), max);
                                            }
                                        }
                                        switch (max) {
                                            case 0:
                                                return mn == 13 ? 0 : -20;
                                            case 1:
                                                return mn >= 12 ? 0 : -15;
                                            case 2:
                                                return 0;
                                            case 3:
                                                return 1;
                                            default:
                                                return max;
                                        }
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        mou_jieming: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                player: ['damageEnd', 'loseHpAfter'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.count = Math.min(trigger.num, 9);
                                ('step 1');
                                player.chooseTarget(get.prompt('rejieming'), '令一名角色摸三张牌.若其手牌数少于体力上限,你摸一张牌,获得一点体力上限并回复两点体力').set('ai', function (target) {
                                    var att = get.attitude(_status.event.player, target);
                                    if (att > 2) {
                                        if (target.maxHp - target.countCards('h') > 2) return 2 * att;
                                        return att;
                                    }
                                    return att / 3;
                                });
                                ('step 2');
                                if (result.bool) {
                                    event.current = result.targets[0];
                                    player.line(event.current, 'thunder');
                                    event.current.draw(3);
                                    event.count--;
                                } else event.finish();
                                ('step 3');
                                if (event.current.countCards('h') < event.current.maxHp) {
                                    player.draw() && player.gainMaxHp() && player.recover(2);
                                }
                                if (event.count > 0) event.goto(1);
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'damage') && target.hp > 1) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                            var max = 0;
                                            var players = game.filterPlayer();
                                            for (var i = 0; i < players.length; i++) {
                                                if (get.attitude(target, players[i]) > 0) {
                                                    max = Math.max(Math.min(5, players[i].hp) - players[i].countCards('h'), max);
                                                }
                                            }
                                            switch (max) {
                                                case 0:
                                                    return 2;
                                                case 1:
                                                    return 1.5;
                                                case 2:
                                                    return [1, 2];
                                                default:
                                                    return [0, max];
                                            }
                                        }
                                        if ((card.name == 'tao' || card.name == 'caoyao') && target.hp > 1 && target.countCards('h') <= target.hp) return [0, 0];
                                    },
                                },
                            },
                        },
                        mou_fankui: {
                            audio: 'ext:花好月圆/audio:4',
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.source && event.source.countGainableCards(player, 'hej') && event.num > 0 && event.source != player;
                            },
                            content() {
                                'step 0';
                                event.count = Math.min(trigger.num, 9);
                                ('step 1');
                                var num = 0;
                                if (trigger.source.countCards('h')) num++;
                                if (trigger.source.countCards('e')) num++;
                                if (trigger.source.countCards('j')) num++;
                                if (num > 0) {
                                    player.gainPlayerCard(trigger.source, num, 'hej', true).set('filterButton', function (button) {
                                        for (var i = 0; i < ui.selected.buttons.length; i++) {
                                            if (get.position(button.link) == get.position(ui.selected.buttons[i].link)) return false;
                                        }
                                        return true;
                                    });
                                }
                                trigger.source.loseHp();
                                player.draw();
                                event.count--;
                                if (event.count > 0) {
                                    player.chooseBool(get.prompt2('mou_fankui'));
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    event.goto(1);
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (player.countCards('he') > 1 && get.tag(card, 'damage')) {
                                            if (player.hasSkill('jueqing')) return [1, -1.5];
                                            if (get.attitude(target, player) < 0) return [1, 1];
                                        }
                                    },
                                },
                            },
                        },
                        mou_guicai: {
                            audio: 'ext:花好月圆/audio:4',
                            trigger: {
                                global: 'judge',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('hes') > 0;
                            },
                            content() {
                                'step 0';
                                player.draw();
                                player
                                    .chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('mou_guicai'), 'he')
                                    .set('ai', function (card) {
                                        var trigger = _status.event.getTrigger();
                                        var player = _status.event.player;
                                        var judging = _status.event.judging;
                                        var result = trigger.judge(card) - trigger.judge(judging);
                                        var attitude = get.attitude(player, trigger.player);
                                        if (attitude == 0 || result == 0) return 0;
                                        if (attitude > 0) {
                                            return result - get.value(card) / 2;
                                        } else {
                                            return -result - get.value(card) / 2;
                                        }
                                    })
                                    .set('judging', trigger.player.judging[0]);
                                ('step 1');
                                if (result.bool) {
                                    player.respond(result.cards, 'highlight');
                                } else {
                                    event.finish();
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
                                    ui.discardPile.appendChild(trigger.player.judging[0]);
                                    trigger.player.judging[0] = result.cards[0];
                                    if (!get.owner(result.cards[0], 'judge')) {
                                        trigger.position.appendChild(result.cards[0]);
                                    }
                                    game.log(trigger.player, '的判定牌改为', result.cards[0]);
                                }
                            },
                            ai: {
                                tag: {
                                    rejudge: 1,
                                },
                            },
                        },
                        mou_guicai1: {
                            audio: 'ext:花好月圆/audio:4',
                            trigger: {
                                global: 'judge',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('hes') > 0;
                            },
                            content() {
                                'step 0';
                                player.draw();
                                player
                                    .chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('mou_guicai1'), 'he')
                                    .set('ai', function (card) {
                                        var trigger = _status.event.getTrigger();
                                        var player = _status.event.player;
                                        var judging = _status.event.judging;
                                        var result = trigger.judge(card) - trigger.judge(judging);
                                        var attitude = get.attitude(player, trigger.player);
                                        if (attitude == 0 || result == 0) return 0;
                                        if (attitude > 0) {
                                            return result - get.value(card) / 2;
                                        } else {
                                            return -result - get.value(card) / 2;
                                        }
                                    })
                                    .set('judging', trigger.player.judging[0]);
                                ('step 1');
                                if (result.bool) {
                                    player.respond(result.cards, 'highlight');
                                } else {
                                    event.finish();
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
                                    ui.discardPile.appendChild(trigger.player.judging[0]);
                                    trigger.player.judging[0] = result.cards[0];
                                    if (!get.owner(result.cards[0], 'judge')) {
                                        trigger.position.appendChild(result.cards[0]);
                                    }
                                    game.log(trigger.player, '的判定牌改为', result.cards[0]);
                                }
                            },
                            ai: {
                                tag: {
                                    rejudge: 1,
                                },
                            },
                        },
                        mou_lianpo: {
                            audio: 'ext:花好月圆/audio:4',
                            trigger: {
                                global: 'phaseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getStat('kill') > 0;
                            },
                            content() {
                                player.draw(3);
                                player.phase('nodelay');
                            },
                        },
                        mou_baiyin: {
                            juexingji: true,
                            derivation: ['mou_jizhi', 'mou_zhiheng', 'qita_wansha', 'hua_fangzhu'],
                            trigger: {
                                player: ['phaseZhunbeiBegin', 'damageEnd'],
                            },
                            forced: true,
                            audio: 'ext:花好月圆/audio:2',
                            filter(event, player) {
                                return player.countMark('mou_renjie') >= 4;
                            },
                            content() {
                                var chat = ['忍无可忍,无须再忍', '忍到最后的才是赢家'].randomGet();
                                player.say(chat);
                                game.broadcastAll() + player.node.avatar.setBackgroundImage('extension/花好月圆/image/mdtx_simayi1.jpg');
                                player.draw(player.storage.mou_renjie);
                                player.gainMaxHp();
                                player.addSkill('mou_jizhi');
                                player.addSkill('mou_zhiheng');
                                player.addSkill('qita_wansha');
                                player.addSkill('hua_fangzhu');
                                player.addSkill('mou_guicai1');
                                player.removeSkill('mou_renjie');
                                player.removeSkill('mou_guicai');
                                player.removeSkill('mou_fankui');
                                player.awakenSkill('mou_baiyin');
                            },
                        },
                        mou_renjie: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            group: 'mou_renjie2',
                            notemp: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                var chat = ['忍一时风平浪静.', '退一步海阔天空.'].randomGet();
                                player.say(chat);
                                player.addMark('mou_renjie', trigger.num);
                            },
                            intro: {
                                name2: '忍',
                                content: 'mark',
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                            },
                        },
                        mou_renjie2: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: { player: 'loseAfter' },
                            forced: true,
                            filter(event, player) {
                                if (event.type != 'discard' || !event.cards2) return false;
                                var evt = event.getParent('phaseDiscard');
                                return evt && evt.name == 'phaseDiscard' && evt.player == player;
                            },
                            content() {
                                var chat = ['忍一时越想越气.', '退一步越想越亏.'].randomGet();
                                player.say(chat);
                                player.addMark('mou_renjie', trigger.cards2.length);
                            },
                        },
                        mou_zhiheng: {
                            selectCard: [1, Infinity],
                            prompt() {
                                return '你可以弃置任意张牌,观看牌堆顶双倍数量的牌,你获得其中的X＋1张牌(X为你弃置的牌数),将其余的牌置于牌堆底.若你装备区有牌,你额外观看并获得等量的牌.';
                            },
                            audio: 'ext:花好月圆/audio:2',
                            audioname2: {
                                mdtx_simayi: 'smy_zhiheng',
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            position: 'he',
                            filterCard: true,
                            check(card) {
                                if (get.position(card) == 'e') return -1;
                                return 8 - get.value(card);
                            },
                            content() {
                                'step 0';
                                var num1 = cards.length + 1;
                                var num2 = cards.length + cards.length;
                                var num3 = player.countCards('e');
                                c = num2 + num3;
                                v = num1 + num3;
                                ('step 1');
                                event.cards = get.cards(c);
                                player.chooseCardButton(event.cards, v, true, '选择并获得' + v + '张牌').set('ai', get.buttonValue);
                                ('step 2');
                                if (result.bool) {
                                    var choice = [];
                                    for (var i = 0; i < result.links.length; i++) {
                                        choice.push(result.links[i]);
                                        cards.remove(result.links[i]);
                                    }
                                    for (var i = 0; i < cards.length; i++) {
                                        ui.cardPile.appendChild(cards[i]);
                                    }
                                    player.gain(choice, 'draw');
                                    game.log(player, '获得' + v + '张牌');
                                }
                            },
                            ai: {
                                order: 3.3,
                                result: {
                                    player: 4,
                                },
                                threaten: 1.55,
                            },
                            prepare(cards, player) {
                                player.$throw(cards, 1000);
                            },
                            discard: false,
                            delay: 0.5,
                        },
                        mou_fangzhu: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                player: ['damageEnd', 'loseHpAfter'],
                            },
                            forced: true,
                            content() {
                                game.countPlayer(function (current) {
                                    if (player.getEnemies().includes(current)) {
                                        player.line(current, 'white');
                                        if (current.countCards('h')) {
                                            current.chooseToDiscard('h', true);
                                        } else {
                                            current.turnOver(true);
                                        }
                                    }
                                });
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
                                        if (get.tag(card, 'damage')) return [1, 0.55];
                                    },
                                },
                            },
                        },
                        qita_wansha: {
                            audio: 'ext:花好月圆/audio:2',
                            global: 'qita_wansha2',
                            trigger: {
                                global: 'dying',
                            },
                            _priority: 15,
                            forced: true,
                            filter(event, player, name) {
                                return _status.currentPhase == player && event.player != player;
                            },
                            content() { },
                        },
                        qita_wansha2: {
                            mod: {
                                cardSavable(card, player) {
                                    if (!_status.currentPhase) return;
                                    if (_status.currentPhase.isAlive() && _status.currentPhase.hasSkill('qita_wansha') && _status.currentPhase != player) {
                                        if (card.name == 'tao' && !player.isDying()) return false;
                                    }
                                },
                                cardEnabled(card, player) {
                                    if (!_status.currentPhase) return;
                                    if (_status.currentPhase.isAlive() && _status.currentPhase.hasSkill('qita_wansha') && _status.currentPhase != player) {
                                        if (card.name == 'tao' && !player.isDying()) return false;
                                    }
                                },
                            },
                        },
                        mou_jizhi: {
                            audio: 'ext:花好月圆/audio:2',
                            group: 'mou_jizhi2',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card, 'trick') == 'trick' || get.type(event.card, 'delay') == 'delay';
                            },
                            content() {
                                player.draw();
                            },
                            ai: {
                                threaten: 1.4,
                                noautowuxie: true,
                            },
                        },
                        mou_jizhi2: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                player: 'judgeEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.result.card, 'trick') == 'trick' || get.type(event.result.card, 'delay') == 'delay';
                            },
                            content() {
                                player.gain(trigger.result.card);
                                player.$gain2(trigger.result.card);
                                game.log(player, '获得了' + get.translation(trigger.result.card));
                            },
                        },
                        smy_zhiheng: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: { player: 'useCard1' },
                            forced: true,
                            filter(event, player) {
                                return !event.audioed && event.parent.type == 'phase';
                            },
                            content() {
                                trigger.audioed = true;
                            },
                        },
                        mou_weimu: {
                            audio: 'ext:花好月圆/audio:2',
                            group: ['mou_weimu2', 'mou_weimu3'],
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            _priority: 7,
                            forced: true,
                            filter(event, player) {
                                return get.color(event.card) == 'black' && event.player != player;
                            },
                            content() {
                                trigger.target = trigger.player;
                                trigger.player = player;
                                trigger.untrigger();
                                trigger.trigger('useCardToBefore');
                            },
                            ai: {
                                result: {
                                    target: -1,
                                    player: 1,
                                },
                            },
                        },
                        mou_weimu3: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: { player: ['damageBegin2', 'loseHp'] },
                            forced: true,
                            filter(event, player) {
                                return player == _status.currentPhase;
                            },
                            content() {
                                trigger.cancel();
                            },
                        },
                        mou_wansha: {
                            audio: 'ext:花好月圆/audio:2',
                            group: 'mou_wansha1',
                            trigger: {
                                global: 'dying',
                            },
                            filter(event, player) {
                                return event.player.hp <= 0 && event.player != player;
                            },
                            forced: true,
                            content() {
                                if (trigger.parent.name == 'damage' && get.itemtype(trigger.parent.cards) == 'cards' && get.position(trigger.parent.cards[0], true) == 'o') {
                                    player.gain(trigger.parent.cards, 'gain2');
                                }
                            },
                        },
                        mou_wansha1: {
                            audio: 'ext:花好月圆/audio:2',
                            global: 'mou_wansha2',
                            trigger: {
                                global: 'dying',
                            },
                            _priority: 15,
                            forced: true,
                            filter(event, player, name) {
                                return _status.currentPhase == player && event.player != player;
                            },
                            content() { },
                        },
                        mou_wansha2: {
                            mod: {
                                cardSavable(card, player) {
                                    if (!_status.currentPhase) return;
                                    if (_status.currentPhase.isAlive() && _status.currentPhase.hasSkill('mou_wansha1') && _status.currentPhase != player) {
                                        if (card.name == 'tao' || (card.name == 'jiu' && !player.isDying())) return false;
                                    }
                                },
                                cardEnabled(card, player) {
                                    if (!_status.currentPhase) return;
                                    if (_status.currentPhase.isAlive() && _status.currentPhase.hasSkill('mou_wansha1') && _status.currentPhase != player) {
                                        if (card.name == 'tao' || (card.name == 'jiu' && !player.isDying())) return false;
                                    }
                                },
                            },
                        },
                        mou_weimu2: {
                            audioname2: {
                                mdtx_jiaxu: 'mou_weimu',
                            },
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card) == 'trick';
                            },
                            content() {
                                trigger.nowuxie = true;
                            },
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (get.type(card) == 'delay') {
                                        return false;
                                    }
                                },
                            },
                        },
                        mou_jianshu: {
                            audio: 'ext:花好月圆/audio:2',
                            limited: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return !player.storage.mou_jianshu && player.countCards('h', { color: 'black' }) > 0;
                            },
                            init(player) {
                                player.storage.mou_jianshu = false;
                            },
                            filterTarget(card, player, target) {
                                if (target == player) return false;
                                if (ui.selected.targets.length) {
                                    return ui.selected.targets[0] != target && !ui.selected.targets[0].hasSkillTag('noCompareSource') && target.countCards('h') && !target.hasSkillTag('noCompareTarget');
                                }
                                return true;
                            },
                            filterCard: {
                                color: 'black',
                            },
                            mark: true,
                            discard: false,
                            delay: false,
                            check(card) {
                                if (_status.event.player.hp == 1) return 8 - get.value(card);
                                return 6 - get.value(card);
                            },
                            selectTarget: 2,
                            multitarget: true,
                            content() {
                                'step 0';
                                player.awakenSkill('mou_jianshu');
                                player.storage.mou_jianshu = true;
                                targets[0].gain(cards, player, 'give');
                                ('step 1');
                                targets[0].chooseToCompare(targets[1]);
                                ('step 2');
                                if (result.bool) {
                                    targets[0].chooseToDiscard('he', 2, true);
                                    targets[0].loseHp();
                                    targets[1].loseMaxHp();
                                } else if (result.tie) {
                                    targets[0].loseMaxHp();
                                    targets[0].loseHp();
                                    targets[1].loseMaxHp();
                                    targets[1].loseHp();
                                } else {
                                    targets[1].chooseToDiscard('he', 2, true);
                                    targets[1].loseHp();
                                    targets[0].loseMaxHp();
                                }
                            },
                            intro: {
                                content: 'limited',
                            },
                            ai: {
                                expose: 0.4,
                                order: 4,
                                result: {
                                    target(player, target) {
                                        if (player.hasUnknown()) return 0;
                                        if (ui.selected.targets.length) return -1;
                                        return -0.5;
                                    },
                                },
                            },
                        },
                        mou_yongdi: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('mou_yongdi'))
                                    .set('ai', function (target) {
                                        if (!_status.event.goon) return 0;
                                        var player = _status.event.player;
                                        var att = get.attitude(player, target);
                                        if (att <= 1) return 0;
                                        var mode = get.mode();
                                        if (mode == 'identity' || (mode == 'versus' && _status.mode == 'four')) {
                                            if (target.name && lib.character[target.name]) {
                                                for (var i = 0; i < lib.character[target.name][3].length; i++) {
                                                    if (lib.skill[lib.character[target.name][3][i]].zhuSkill) {
                                                        return att * 2;
                                                    }
                                                }
                                            }
                                        }
                                        return att;
                                    })
                                    .set('goon', !player.hasUnknown());
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    target.gainMaxHp(true);
                                    target.recover();
                                    var mode = get.mode();
                                    if (mode == 'identity' || (mode == 'versus' && _status.mode == 'four')) {
                                        if (target.name && lib.character[target.name]) {
                                            var skills = lib.character[target.name][3];
                                            target.storage.zhuSkill_mou_yongdi = [];
                                            for (var i = 0; i < skills.length; i++) {
                                                var info = lib.skill[skills[i]];
                                                if (info.zhuSkill) {
                                                    target.storage.zhuSkill_mou_yongdi.push(skills[i]);
                                                    if (info.init) {
                                                        info.init(target);
                                                    }
                                                    if (info.init2) {
                                                        info.init2(target);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        mou_luanwu: {
                            audio: 'ext:花好月圆/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectTarget: -1,
                            multitarget: true,
                            multiline: true,
                            content() {
                                'step 0';
                                event.current = player.next;
                                event.currented = [];
                                ('step 1');
                                event.currented.push(event.current);
                                event.current.addTempClass('target');
                                event.current.chooseToUse('乱武:使用一张黑杀或流失一点体力', { name: 'sha', color: 'black' }, function (card, player, target) {
                                    if (player == target) return false;
                                    if (!player.canUse('sha', target)) return false;
                                    if (get.distance(player, target) <= 1) return true;
                                    if (
                                        game.hasPlayer(function (current) {
                                            return current != player && get.distance(player, current) < get.distance(player, target);
                                        })
                                    ) {
                                        return false;
                                    }
                                    return true;
                                });
                                ('step 2');
                                if (result.bool == false) event.current.loseHp();
                                event.current = event.current.next;
                                if (event.current != player && !event.currented.includes(event.current)) {
                                    event.goto(1);
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player) {
                                        if (lib.config.mode == 'identity' && game.zhu.isZhu && player.identity == 'fan') {
                                            if (game.zhu.hp == 1 && game.zhu.countCards('h') <= 2) return 1;
                                        }
                                        var num = 0;
                                        var players = game.filterPlayer();
                                        for (var i = 0; i < players.length; i++) {
                                            var att = get.attitude(player, players[i]);
                                            if (att > 0) att = 1;
                                            if (att < 0) att = -1;
                                            if (players[i] != player && players[i].hp <= 3) {
                                                if (players[i].countCards('h') == 0) num += att / players[i].hp;
                                                else if (players[i].countCards('h') == 1) num += att / 2 / players[i].hp;
                                                else if (players[i].countCards('h') == 2) num += att / 4 / players[i].hp;
                                            }
                                            if (players[i].hp == 1) num += att * 1.5;
                                        }
                                        if (player.hp == 1) {
                                            return -num;
                                        }
                                        if (player.hp == 2) {
                                            return -game.players.length / 4 - num;
                                        }
                                        return -game.players.length / 3 - num;
                                    },
                                },
                            },
                        },
                        mou_dimeng: {
                            audio: 'ext:花好月圆/audio:2',
                            enable: 'phaseUse',
                            delay: 0,
                            forced: true,
                            content() {
                                'step 0';
                                var dialog = ui.create.dialog('缔盟');
                                for (var i = 0; i < game.players.length; i++) {
                                    if (game.players[i] == player) continue;
                                    if (game.players[i].countCards('h')) {
                                        dialog.add(get.translation(game.players[i]) + '的手牌');
                                        var hs = game.players[i].getCards('h');
                                        dialog.add(hs);
                                    }
                                }
                                event.dialog = dialog;
                                if (player == game.me) {
                                    if (event.isMine()) {
                                        game.pause();
                                        ui.create.confirm('o');
                                        game.countChoose();
                                        event.choosing = true;
                                    } else {
                                        event.finish();
                                        event.result = 'viewed';
                                        setTimeout(function () {
                                            event.dialog.close();
                                        }, 2 * lib.config.duration);
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                event.result = 'viewed';
                                _status.imchoosing = false;
                                event.choosing = false;
                                if (event.dialog) event.dialog.close();
                            },
                            group: ['mou_dimeng2', 'mou_dimeng3'],
                        },
                        mou_dimeng2: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(
                                        '缔盟:选择两名角色置换他们的手牌',
                                        function (card, player, target) {
                                            return target.countCards('h') >= 0;
                                        },
                                        2
                                    )
                                    .set('ai', function (target) {
                                        if (!ui.selected.targets.length) return -get.attitude(player, target) + target.countCards('h');
                                        if (ui.selected.targets.length) {
                                            var num = ui.selected.targets[0].countCards('h') - target.countCards('h');
                                            if (num > 0) return get.attitude(player, target);
                                            return 0;
                                        }
                                    });
                                ('step 1');
                                if (result.bool) {
                                    event.cards0 = result.targets[0].getCards('h');
                                    event.cards1 = result.targets[1].getCards('h');
                                    result.targets[0].lose(event.cards0, ui.special);
                                    result.targets[1].lose(event.cards1, ui.special);
                                    result.targets[0].gain(event.cards1, result.targets[1]);
                                    result.targets[1].gain(event.cards0, result.targets[0]);
                                    result.targets[0].$give(event.cards0.length, result.targets[1]);
                                    result.targets[1].$give(event.cards1.length, result.targets[0]);
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                maixie: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkill('jueqing')) return [1, -2];
                                            if (!target.hasFriend()) return;
                                            if (target.hp >= 4 && player.countCards('h') > target.countCards('h')) return [1, get.tag(card, 'damage') * 2];
                                            if (target.hp == 3 && player.countCards('h') > target.countCards('h')) return [1, get.tag(card, 'damage') * 1.5];
                                            if (target.hp == 2 && player.countCards('h') > target.countCards('h')) return [1, get.tag(card, 'damage') * 0.5];
                                        }
                                    },
                                },
                            },
                        },
                        mou_dimeng3: {
                            audio: 'ext:花好月圆/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(
                                        '缔盟:选择两名角色置换他们的手牌',
                                        function (card, player, target) {
                                            return target.countCards('h') >= 0;
                                        },
                                        2
                                    )
                                    .set('ai', function (target) {
                                        if (!ui.selected.targets.length) return -get.attitude(player, target) + target.countCards('h');
                                        if (ui.selected.targets.length) {
                                            var num = ui.selected.targets[0].countCards('h') - target.countCards('h');
                                            if (num > 0) return get.attitude(player, target);
                                            return 0;
                                        }
                                    });
                                ('step 1');
                                if (result.bool) {
                                    event.cards0 = result.targets[0].getCards('h');
                                    event.cards1 = result.targets[1].getCards('h');
                                    result.targets[0].lose(event.cards0, ui.special);
                                    result.targets[1].lose(event.cards1, ui.special);
                                    result.targets[0].gain(event.cards1, result.targets[1]);
                                    result.targets[1].gain(event.cards0, result.targets[0]);
                                    result.targets[0].$give(event.cards0.length, result.targets[1]);
                                    result.targets[1].$give(event.cards1.length, result.targets[0]);
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkill('jueqing')) return [1, -2];
                                            if (!target.hasFriend()) return;
                                            if (target.hp >= 4 && player.countCards('h') > target.countCards('h')) return [1, get.tag(card, 'damage') * 2];
                                            if (target.hp == 3 && player.countCards('h') > target.countCards('h')) return [1, get.tag(card, 'damage') * 1.5];
                                            if (target.hp == 2 && player.countCards('h') > target.countCards('h')) return [1, get.tag(card, 'damage') * 0.5];
                                        }
                                    },
                                },
                            },
                        },
                        mou_haoshi: {
                            audio: 'ext:花好月圆/audio:2',
                            group: ['mou_haoshi2', 'mou_haoshi3'],
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            content() {
                                trigger.num += 2;
                                player.recover();
                            },
                            ai: {
                                threaten: 1,
                            },
                        },
                        mou_haoshi2: {
                            audio: 'ext:花好月圆/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            changeSeat: true,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                target.gain(player.getCards('h'));
                                target.$give(player.countCards('h'), target);
                                player.draw(2);
                            },
                        },
                        mou_haoshi3: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            content() {
                                player.draw(3);
                            },
                        },
                        mou_tiandu: {
                            audio: 'ext:花好月圆/audio:2',
                            group: 'mou_tiandu2',
                            trigger: {
                                player: 'phaseJudgeBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.player == player) return true;
                                return event.player.isAlive();
                            },
                            content() {
                                'step 0';
                                event.judgestr = '闪电';
                                trigger.player.judge(function (card) {
                                    if (card.suit == 'spade' && card.number > 1 && card.number < 10) return -6;
                                    return 0;
                                }, event.judgestr);
                                ('step 1');
                                if (result.card.suit == 'spade' && result.card.number > 1 && result.card.number < 10) {
                                    trigger.player.damage(3, 'thunder', 'nosource');
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        mou_tiandu2: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                player: 'judgeEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (get.owner(event.result.card)) {
                                    return false;
                                }
                                if (event.nogain && event.nogain(event.result.card)) {
                                    return false;
                                }
                                return true;
                            },
                            content() {
                                player.gain(trigger.result.card);
                                player.$gain2(trigger.result.card);
                                player.draw(player.maxHp - player.hp);
                            },
                        },
                        mou_yice: {
                            trigger: {
                                player: 'dying',
                            },
                            group: 'mou_yice2',
                            audio: 'ext:花好月圆/audio:2',
                            _priority: 7,
                            forced: true,
                            charlotte: true,
                            filter(event, player) {
                                return player.hp <= 0;
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    return card.suit == 'heart' ? -1 : 1;
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.recover(1 - player.hp);
                                }
                            },
                            ai: {
                                threaten: 0.8,
                            },
                        },
                        mou_yice2: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            audio: 'ext:花好月圆/audio:2',
                            content() {
                                'step 0';
                                event.cards = get.cards(2);
                                player.chooseCardButton(event.cards, 1, true, '选择获得一张牌').ai = ai.get.buttonValue;
                                ('step 1');
                                var choice = result.links[0];
                                for (var i = 0; i < cards.length; i++) {
                                    ui.cardPile.appendChild(cards[i]);
                                }
                                player.showCards(choice);
                                player.gain(choice);
                                game.log(player, '发动遗策');
                                if (get.type(choice) == 'basic') {
                                    player.addTempSkill('mou_yice2_1', 'phaseAfter');
                                    player.addTempSkill('mashu', 'phaseAfter');
                                } else {
                                    player.discard(player.getCards('j'));
                                    player.draw();
                                }
                            },
                            subSkill: {
                                1: {
                                    mod: {
                                        cardUsable(card, player, num) {
                                            if (card.name == 'sha') return num + 1;
                                        },
                                    },
                                },
                            },
                        },
                        mou_yiji: {
                            audio: 'ext:花好月圆/audio:4',
                            mod: {
                                maxHandcard(player, num) {
                                    return num * 10;
                                },
                            },
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                event.count = 1;
                                ('step 1');
                                player.draw(3);
                                event.given = 0;
                                ('step 2');
                                player.chooseCardTarget({
                                    filterCard: true,
                                    selectCard: [1, Infinity],
                                    filterTarget(card, player, target) {
                                        return player != target && target != event.temp;
                                    },
                                    ai1(card) {
                                        if (ui.selected.cards.length) return -1;
                                        if (card.name == 'du') return 20;
                                        return _status.event.player.countCards('h') - _status.event.player.hp;
                                    },
                                    ai2(target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                                            if (target.hasSkillTag('nodu')) return 0;
                                            return 1 - att;
                                        }
                                        return att - 4;
                                    },
                                    prompt: '请选择要送人的卡牌',
                                });
                                ('step 3');
                                if (result.bool) {
                                    player.line(result.targets, 'green');
                                    result.targets[0].gain(result.cards, player, 'giveAuto');
                                    event.given += result.cards.length;
                                    if (event.given < 2) {
                                        event.temp = result.targets[0];
                                        event.goto(2);
                                    } else if (event.count < trigger.num) {
                                        delete event.temp;
                                        event.count++;
                                        player.chooseBool(get.prompt2(event.name)).set('frequentSkill', event.name);
                                    } else event.finish();
                                } else if (event.count < trigger.num) {
                                    delete event.temp;
                                    event.count++;
                                    player.chooseBool(get.prompt2(event.name)).set('frequentSkill', event.name);
                                } else event.finish();
                                ('step 4');
                                if (result.bool) {
                                    event.goto(1);
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                result: {
                                    effect(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                            if (!target.hasFriend()) return;
                                            var num = 1;
                                            if (get.attitude(player, target) > 0) {
                                                if (player.needsToDiscard()) {
                                                    num = 0.7;
                                                } else {
                                                    num = 0.5;
                                                }
                                            }
                                            if (player.hp >= 4) return [1, num * 2];
                                            if (target.hp == 3) return [1, num * 1.5];
                                            if (target.hp == 2) return [1, num * 0.5];
                                        }
                                    },
                                },
                                threaten: 0.6,
                            },
                        },
                        mou_yingzi: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                player: 'drawBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                threaten: 1.5,
                            },
                            mod: {
                                maxHandcardBase(player, num) {
                                    return num + player.maxHp;
                                },
                            },
                        },
                        mou_fanjian: {
                            audio: 'ext:花好月圆/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: true,
                            discard: false,
                            prepare: 'give',
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('he');
                            },
                            check(card) {
                                return 7 - get.value(card);
                            },
                            content() {
                                'step 0';
                                target.gain(cards, player);
                                event.card = cards[0];
                                event.suit = cards[0].suit;
                                ('step 1');
                                var hs = target.getCards('h');
                                var num1 = 0;
                                var num2 = 0;
                                for (var i = 0; i < hs.length; i++) {
                                    if (hs[i].suit == event.suit) {
                                        num1++;
                                    } else {
                                        num2++;
                                    }
                                }
                                event.num1 = num1;
                                event.num2 = num2;
                                var list = ['将手牌中的' + get.translation(event.suit) + '牌交给' + get.translation(player), '弃置手牌中的非' + get.translation(event.suit) + '牌', '失去一点体力'];
                                if (num1 && num2) {
                                    target.chooseControlList(list, true, function () {
                                        if (num1 > 2 && num2 > 3) {
                                            return 2;
                                        }
                                        if (num1 > num2 / 2) {
                                            return 1;
                                        } else if (num1 < num2 / 2) {
                                            return 0;
                                        }
                                        return get.rand(2);
                                    });
                                } else if (num1) {
                                    list.splice(1, 1);
                                    target.chooseControlList(list, true, function () {
                                        if (num1 > 2) return 1;
                                        return 0;
                                    });
                                } else if (num2) {
                                    list.splice(0, 1);
                                    target.chooseControlList(list, true, function () {
                                        if (num2 > 3) return 1;
                                        return 0;
                                    });
                                } else {
                                    target.loseHp();
                                    event.finish();
                                }
                                ('step 2');
                                var index = result.index;
                                var cards1 = target.getCards('he', function (card) {
                                    return card.suit == event.suit;
                                });
                                var cards2 = target.getCards('he', function (card) {
                                    return card.suit != event.suit;
                                });
                                if (typeof index == 'number') {
                                    if (event.num1 && event.num2) {
                                        if (index == 0) {
                                            target.give(cards1, player);
                                        } else if (index == 1) {
                                            target.discard(cards2);
                                        } else {
                                            target.loseHp();
                                        }
                                    } else {
                                        if (index == 1) {
                                            target.loseHp();
                                        } else if (event.num1) {
                                            target.give(cards1, player);
                                        } else {
                                            target.discard(cards2);
                                        }
                                    }
                                }
                            },
                            ai: {
                                threaten: 1.5,
                                order: 9,
                                result: {
                                    target(player, target) {
                                        return -Math.sqrt(target.countCards('h'));
                                    },
                                },
                            },
                        },
                        mou_yeyan: {
                            forceDie: true,
                            enable: 'phaseUse',
                            usable: 1,
                            round: 1,
                            audio: 'ext:花好月圆/audio:4',
                            filterTarget(card, player, target) {
                                var length = ui.selected.cards.length;
                                return length == 0 || length == 4;
                            },
                            filterCard(card) {
                                var suit = card.suit;
                                for (var i = 0; i < ui.selected.cards.length; i++) {
                                    if (ui.selected.cards[i].suit == suit) return false;
                                }
                                return true;
                            },
                            complexCard: true,
                            selectCard: [0, 4],
                            line: 'fire',
                            check() {
                                return -1;
                            },
                            selectTarget() {
                                if (ui.selected.cards.length == 4) return [1, 2];
                                if (ui.selected.cards.length == 0) return [1, 3];
                                game.uncheck('target');
                                return [1, 3];
                            },
                            multitarget: true,
                            multiline: true,
                            content() {
                                'step 0';
                                player.awakenSkill('yeyan');
                                event.num = 0;
                                ('step 1');
                                if (cards.length == 4) event.goto(2);
                                else {
                                    if (event.num < targets.length) {
                                        targets[event.num].damage('fire', 1, 'nocard');
                                        event.num++;
                                    }
                                    if (event.num == targets.length) event.finish();
                                    else event.redo();
                                }
                                ('step 2');
                                player.loseHp(2);
                                if (targets.length == 1) event.goto(4);
                                else {
                                    player
                                        .chooseTarget('请选择受到2点伤害的角色', true, function (card, player, target) {
                                            return _status.event.targets.includes(target);
                                        })
                                        .set('ai', function (target) {
                                            return 1;
                                        })
                                        .set('forceDie', true)
                                        .set('targets', targets);
                                }
                                ('step 3');
                                if (event.num < targets.length) {
                                    var dnum = 1;
                                    if (result.bool && result.targets && targets[event.num] == result.targets[0]) dnum = 2;
                                    targets[event.num].damage('fire', dnum, 'nocard');
                                    event.num++;
                                }
                                if (event.num == targets.length) event.finish();
                                else event.redo();
                                ('step 4');
                                player
                                    .chooseControl('2点', '3点')
                                    .set('prompt', '请选择伤害点数')
                                    .set('ai', function () {
                                        return '3点';
                                    })
                                    .set('forceDie', true);
                                ('step 5');
                                targets[0].damage('fire', result.control == '2点' ? 2 : 3, 'nocard');
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('nofire')) return 0;
                                        if (lib.config.mode == 'versus') return -1;
                                        if (player.hasUnknown()) return 0;
                                        return get.damageEffect(target, player);
                                    },
                                },
                            },
                        },
                        mou_qinyin: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                player: 'phaseDiscardEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                var cards = [];
                                player.getHistory('lose', function (evt) {
                                    if (evt.type == 'discard' && evt.getParent('phaseDiscard') == event) cards.addArray(evt.cards2);
                                });
                                return cards.length > 1;
                            },
                            content() {
                                'step 0';
                                event.forceDie = true;
                                if (typeof event.count != 'number') {
                                    // event.count=trigger.cards.length-1;
                                    event.count = 1;
                                }
                                var recover = 0,
                                    lose = 0,
                                    players = game.filterPlayer();
                                for (var i = 0; i < players.length; i++) {
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
                                var prompt = get.prompt('mou_qinyin') + '(剩余' + get.cnNumber(event.count) + '次)';
                                player.chooseControl('失去体力', '回复体力', 'cancel2', ui.create.dialog(get.prompt('mou_qinyin'), 'hidden')).ai = function () {
                                    if (lose > recover && lose > 0) return 0;
                                    if (lose < recover && recover > 0) return 1;
                                    return 2;
                                };
                                ('step 1');
                                if (result.control == 'cancel2') {
                                    event.finish();
                                } else {
                                    event.bool = result.control == '回复体力';
                                    event.num = 0;
                                    event.players = game.filterPlayer();
                                }
                                ('step 2');
                                if (event.num < event.players.length) {
                                    var target = event.players[event.num];
                                    if (event.bool) {
                                        player.changeHujia();
                                        target.recover();
                                    } else {
                                        player.recover();
                                        target.loseHp();
                                    }
                                    event.num++;
                                    event.redo();
                                }
                                ('step 3');
                                if (event.count > 1) {
                                    event.count--;
                                    event.goto(0);
                                }
                            },
                            ai: {
                                expose: 0.1,
                                threaten: 2,
                            },
                        },
                        wu_wusheng: {
                            mod: {
                                targetInRange(card) {
                                    if (card.suit == 'diamond' && (_status.event.skill == 'wu_wusheng' || card.name == 'sha')) return true;
                                },
                            },
                            audio: 'ext:花好月圆/audio:2',
                            group: ['hua_wusheng_fangkuai', 'hua_wusheng_hongtao', 'hua_wusheng_heise', 'hua_wusheng_wusheng'],
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
                                    if (!player.countCards('hes', { color: 'red' })) return false;
                                }
                            },
                            prompt: '将一张红色牌当杀使用或打出',
                            check(card) {
                                return 4 - get.value(card);
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (get.zhu(player, 'shouyue')) {
                                        if (!player.countCards('he')) return false;
                                    } else {
                                        if (!player.countCards('he', { color: 'red' })) return false;
                                    }
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
                        wu_yijue: {
                            audio: 'ext:花好月圆/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            position: 'he',
                            filterTarget(card, player, target) {
                                return player != target && target.countCards('h');
                            },
                            filterCard: true,
                            check(card) {
                                return 8 - get.value(card);
                            },
                            content() {
                                'step 0';
                                target.chooseCard(true).ai = function (card) {
                                    var player = _status.event.player;
                                    if ((player.hasShan() || player.hp < 3) && get.color(card) == 'black') return 0.5;
                                    return Math.max(1, 20 - get.value(card));
                                };
                                ('step 1');
                                target.showCards(result.cards);
                                event.card2 = result.cards[0];
                                if (get.color(event.card2) == 'black') {
                                    if (!target.hasSkill('fengyin')) {
                                        target.addTempSkill('fengyin');
                                    }
                                    target.addTempSkill('wu_yijue2');
                                    event.finish();
                                } else {
                                    player.gain(event.card2, target, 'give', 'bySelf') && player.draw();
                                    if (target.hp < target.maxHp) {
                                        player.chooseBool('是否让目标回复一点体力？').ai = function (event, player) {
                                            return get.recoverEffect(target, player, player) > 0;
                                        };
                                    }
                                }
                                ('step 2');
                                if (result.bool) {
                                    target.recover();
                                    player.draw();
                                }
                            },
                            ai: {
                                result: {
                                    target(player, target) {
                                        var hs = player.getCards('h');
                                        if (hs.length < 3) return 0;
                                        if (target.countCards('h') > target.hp + 1 && get.recoverEffect(target) > 0) {
                                            return 1;
                                        }
                                        if (player.canUse('sha', target) && (player.countCards('h', 'sha') || player.countCards('he', { color: 'red' }))) {
                                            return -2;
                                        }
                                        return -0.5;
                                    },
                                },
                                order: 9,
                            },
                        },
                        wu_yijue2: {
                            trigger: {
                                player: 'damageBegin1',
                            },
                            filter(event, player) {
                                return event.source && event.source.hasSkill('wu_yijue') && event.card && event.card.name == 'sha' && event.notLink();
                            },
                            silent: true,
                            popup: false,
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                            mark: true,
                            mod: {
                                cardEnabled2(card) {
                                    if (get.position(card) == 'hs') return false;
                                },
                            },
                            intro: {
                                content: '不能使用或打出手牌(木马里的牌也不能使用或打出)',
                            },
                        },
                        mou_huoji: {
                            group: 'mou_huoji2',
                            position: 'hes',
                            audio: 'ext:花好月圆/audio:2',
                            audioname2: {
                                mdtx_pangtong: 'pt_huoji',
                            },
                            enable: 'chooseToUse',
                            filterCard(card) {
                                return get.color(card) == 'red';
                            },
                            viewAs: {
                                name: 'huogong',
                                nature: 'fire',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('hes', { color: 'red' })) return false;
                            },
                            prompt: '将一张红色牌当火攻使用',
                            check(card) {
                                var player = _status.currentPhase;
                                if (player.countCards('hs') > player.hp) {
                                    return 6 - get.value(card);
                                }
                                return 4 - get.value(card);
                            },
                            ai: {
                                basic: {
                                    order: 4,
                                    value: [3, 1],
                                    useful: 1,
                                },
                                wuxie(target, card, player, current, state) {
                                    if (get.attitude(current, player) >= 0 && state > 0) return false;
                                },
                                result: {
                                    player(player) {
                                        var nh = player.countCards('h');
                                        if (nh <= player.hp && nh <= 4 && _status.event.name == 'chooseToUse') {
                                            if (typeof _status.event.filterCard == 'function' && _status.event.filterCard && _status.event.filterCard({ name: 'huogong' }, player, _status.event)) {
                                                return -10;
                                            }
                                            if (_status.event.skill) {
                                                var viewAs = get.info(_status.event.skill).viewAs;
                                                if (viewAs == 'huogong') return -10;
                                                if (viewAs && viewAs.name == 'huogong') return -10;
                                            }
                                        }
                                        return 0;
                                    },
                                    target(player, target) {
                                        if (target.hasSkill('huogong2') || target.countCards('hs') == 0) return 0;
                                        if (player.countCards('h') <= 1) return 0;
                                        if (target == player) {
                                            if (typeof _status.event.filterCard == 'function' && _status.event.filterCard && _status.event.filterCard({ name: 'huogong' }, player, _status.event)) {
                                                return -1.5;
                                            }
                                            if (_status.event.skill) {
                                                var viewAs = get.info(_status.event.skill).viewAs;
                                                if (viewAs == 'huogong') return -1.5;
                                                if (viewAs && viewAs.name == 'huogong') return -1.5;
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
                        },
                        mou_huoji2: {
                            trigger: {
                                source: 'damageBegin1',
                            },
                            filter(event, player) {
                                return !event.nature;
                            },
                            audio: 'ext:花好月圆/audio:2',
                            audioname2: {
                                mdtx_pangtong: 'pt_huoji',
                            },
                            check(event, player) {
                                //QQQ
                                var eff = 0;
                                eff += get.damageEffect(event.player, player, player, 'fire');
                                eff -= get.damageEffect(event.player, player, player);
                                return eff >= 0;
                            },
                            content() {
                                trigger.nature = 'fire';
                            },
                        },
                        mou_kanpo: {
                            audio: 'ext:花好月圆/audio:2',
                            audioname2: {
                                mdtx_pangtong: 'pt_kanpo',
                            },
                            group: 'mou_kanpo2',
                            position: 'hes',
                            enable: 'chooseToUse',
                            filterCard(card) {
                                return get.color(card) == 'black';
                            },
                            viewAsFilter(player) {
                                return player.countCards('he', { color: 'black' }) > 0;
                            },
                            viewAs: {
                                name: 'wuxie',
                            },
                            prompt: '将一张黑色牌当无懈可击使用',
                            check(card) {
                                return 8 - get.value(card);
                            },
                            threaten: 1.2,
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
                        mou_kanpo2: {
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card) == 'trick' && get.color(event.card) == 'black';
                            },
                            content() {
                                trigger.nowuxie = true;
                            },
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (get.type(card) == 'delay') {
                                        return false;
                                    }
                                },
                            },
                        },
                        mou_bazhenx: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            filter(event, player) {
                                return event.card && get.tag(event.card, 'damage') && event.player != player;
                            },
                            content() {
                                'step 0';
                                player.judge(function () {
                                    return 0;
                                });
                                ('step 1');
                                if (result.color == 'red') {
                                    trigger.cancel();
                                }
                                if (result.color == 'black') {
                                    player.draw();
                                }
                                if (result.suit == 'heart') {
                                    player.recover();
                                }
                                if (result.suit == 'diamond') {
                                    player.draw();
                                    player.gain(result.card);
                                    player.$gain2(result.card);
                                }
                                if (result.suit == 'spade') {
                                    player.useCard({ name: 'sha' }, trigger.player, false);
                                }
                                if (result.suit == 'club') {
                                    if (trigger.player.countDiscardableCards(player, 'he') > 0) player.discardPlayerCard(trigger.player, 'he', true);
                                }
                            },
                            ai: {
                                result: {
                                    player: 2,
                                },
                            },
                        },
                        mou_bazhen: {
                            audio: 'ext:花好月圆/audio:2',
                            audioname2: {
                                mdtx_pangtong: 'pt_bazhen',
                            },
                            group: 'mou_bagua',
                        },
                        mou_bagua: {
                            audio: 'bagua_skill',
                            equipSkill: true,
                            noHidden: true,
                            inherit: 'bagua_skill',
                            filter(event, player) {
                                if (!lib.skill.bagua_skill.filter(event, player)) return false;
                                if (!player.isEmpty(2)) return false;
                                return true;
                            },
                            ai: {
                                respondShan: true,
                                effect: {
                                    target(card, player, target) {
                                        if (player == target && get.subtype(card) == 'equip2') {
                                            if (get.equipValue(card) <= 7.5) return 0;
                                        }
                                        if (!target.isEmpty(2)) return;
                                        return lib.skill.bagua_skill.ai.effect.target.apply(this, arguments);
                                    },
                                },
                            },
                            trigger: {
                                player: ['chooseToRespondBegin', 'chooseToUseBegin'],
                            },
                            check(event, player) {
                                if (event && (event.ai || event.ai1)) {
                                    var ai = event.ai || event.ai1;
                                    var tmp = _status.event;
                                    _status.event = event;
                                    var result = ai({ name: 'shan' }, _status.event.player, event);
                                    _status.event = tmp;
                                    return result > 0;
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                trigger.bagua_skill = true;
                                player.judge('mou_bagua', function (card) {
                                    return card.suit !== 'spade' ? 1.5 : -0.5;
                                });
                                ('step 1');
                                if (result.judge > 0) {
                                    trigger.untrigger();
                                    trigger.set('responded', true);
                                    trigger.result = { bool: true, card: { name: 'shan' } };
                                }
                            },
                        },
                        mou_kuangfeng: {
                            group: ['mou_kuangfeng_damage', 'mou_kuangfeng_begin', 'mou_kuangfeng_init', 'mou_kuangfeng_damage1'],
                            subSkill: {
                                begin: {
                                    forced: true,
                                    trigger: {
                                        player: 'dieBegin',
                                    },
                                    filter(event, player) {
                                        return event.player.countMark('mou_kuangfeng') > 0 && event.player != player;
                                    },
                                    content() {
                                        trigger.player.removeMark('mou_kuangfeng', trigger.player.countMark('mou_kuangfeng'));
                                    },
                                },
                                damage: {
                                    audio: 'ext:花好月圆/audio:2',
                                    forced: true,
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    filter(event, player) {
                                        return event.player.countMark('mou_kuangfeng') > 0 && event.nature == 'fire';
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                },
                                init: {
                                    audio: 'ext:花好月圆/audio:2',
                                    trigger: {
                                        global: 'gameDrawAfter',
                                        player: 'enterGame',
                                    },
                                    forced: true,
                                    content() {
                                        player.addMark('mou_kuangfeng', 3);
                                    },
                                },
                                damage1: {
                                    audio: 'ext:花好月圆/audio:2',
                                    trigger: {
                                        global: 'dying',
                                    },
                                    filter(event, player) {
                                        return event.player.hp < 0 && event.player != player;
                                    },
                                    forced: true,
                                    content() {
                                        if (trigger.parent.nature == 'fire') {
                                            player.addMark('mou_kuangfeng', 1);
                                        }
                                    },
                                },
                            },
                            audio: 'ext:花好月圆/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countMark('mou_kuangfeng') > 0;
                            },
                            filterTarget(card, player, target) {
                                if (target.hasMark('mou_kuangfeng')) return false;
                                return player != target > 0;
                            },
                            content() {
                                player.removeMark('mou_kuangfeng', 1);
                                target.addMark('mou_kuangfeng', 1);
                            },
                            ai: {
                                order: 11,
                                result: {
                                    target(player, target) {
                                        var mark = player.countMark('mou_kuangfeng');
                                        if (mark > 2) return -1;
                                        return Math.min(-(1 + mark - target.hp), 0);
                                    },
                                },
                                threaten: 1.1,
                            },
                            intro: {
                                name: '狂风',
                                content: 'mark',
                            },
                            marktext: '风',
                        },
                        mou_dawu2: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            _priority: 1,
                            forced: true,
                            filter(event, player) {
                                return player.storage.mou_dawu && player.storage.mou_dawu.length;
                            },
                            audio: 'ext:花好月圆/audio:2',
                            content() {
                                'step 0';
                                player.chooseTarget('选择角色获得大雾标记', [1, Math.min(game.players.length, player.storage.mou_dawu.length)]).ai = function (target) {
                                    if (target.isMin()) return 0;
                                    if (target.hasSkill('biantian2')) return 0;
                                    var att = get.attitude(player, target);
                                    if (att >= 4) {
                                        if (target.hp == 1 && target.maxHp > 2) return att;
                                        if (target.hp == 2 && target.maxHp > 3 && target.countCards('he') == 0) return att * 0.7;
                                        return 0;
                                    }
                                    return -1;
                                };
                                ('step 1');
                                if (result.bool) {
                                    var length = result.targets.length;
                                    for (var i = 0; i < length; i++) {
                                        result.targets[i].addSkill('mou_dawu3');
                                        //result.targets[i].popup('mou_dawu2');
                                    }
                                    game.log(player, '对', result.targets, '发动了大雾');
                                    player.chooseCardButton('弃置' + get.cnNumber(length) + '枚雾', length, player.storage.mou_dawu, true);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                for (var i = 0; i < result.links.length; i++) {
                                    player.storage.mou_dawu.remove(result.links[i]);
                                }
                                if (player.storage.mou_dawu.length == 0) {
                                    player.unmarkSkill('mou_dawu');
                                }
                                game.addVideo('storage', player, ['mou_dawu', get.cardsInfo(player.storage.mou_dawu), 'cards']);
                                player.discard(result.links);
                            },
                        },
                        mou_dawu: {
                            group: ['mou_dawu2', 'mou_dawu4'],
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                global: 'damageEnd',
                            },
                            forced: true,
                            notemp: true,
                            init(player) {
                                if (!player.storage.mou_dawu) player.storage.mou_dawu = [];
                            },
                            filter(event, player) {
                                return event.num > 0 && event.nature == 'thunder';
                            },
                            content() {
                                'step 0';
                                event.count = Math.min(trigger.num, 9);
                                ('step 1');
                                event.count--;
                                player.draw();
                                ('step 2');
                                if (player.countCards('h')) {
                                    player.chooseCard('将一张手牌置于武将牌上作为<雾>', true);
                                } else {
                                    event.goto(4);
                                }
                                ('step 3');
                                if (result.cards && result.cards.length) {
                                    player.lose(result.cards, ui.special, 'toStorage');
                                    player.storage.mou_dawu = player.storage.mou_dawu.concat(result.cards);
                                    player.markSkill('mou_dawu');
                                    game.log(player, '将', result.cards, '置于武将牌上作为<雾>');
                                }
                                ('step 4');
                                if (event.count > 0) {
                                    player.chooseBool(get.prompt2('mou_dawu')).set('frequentSkill', 'mou_dawu');
                                } else event.finish();
                                ('step 5');
                                if (result.bool) {
                                    event.goto(1);
                                }
                            },
                            intro: {
                                name: '大雾',
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
                                maixie: true,
                                maixie_hp: true,
                                threaten: 0.8,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'thunderDamage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                            if (!target.hasFriend()) return;
                                            if (target.hp >= 4) return [0.5, get.tag(card, 'thunderDamage') * 2];
                                            if (target.hp == 3) return [0.5, get.tag(card, 'thunderDamage') * 1.5];
                                            if (target.hp == 2) return [1, get.tag(card, 'thunderDamage') * 0.5];
                                        }
                                    },
                                },
                            },
                            marktext: '雾',
                        },
                        mou_dawu4: {
                            trigger: {
                                player: ['phaseBegin', 'dieBegin'],
                            },
                            forced: true,
                            popup: false,
                            silent: true,
                            content() {
                                for (var i = 0; i < game.players.length; i++) {
                                    if (game.players[i].hasSkill('mou_dawu3')) {
                                        game.players[i].removeSkill('mou_dawu3');
                                        //game.players[i].popup('mou_dawu3');
                                    }
                                }
                            },
                        },
                        mou_dawu3: {
                            trigger: {
                                player: 'damageBegin4',
                            },
                            filter(event, player) {
                                if (event.nature != 'thunder') return true;
                                return false;
                            },
                            mark: true,
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                            ai: {
                                nofire: true,
                                nodamage: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'damage') && !get.tag(card, 'thunderDamage')) return [0, 0];
                                    },
                                },
                            },
                            intro: {
                                content: '已获得大雾标记',
                            },
                        },
                        mou_xingxiang: {
                            group: 'mou_xingxiang2',
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.nature == 'fire';
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                        },
                        mou_xingxiang2: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            notemp: true,
                            init(player) {
                                if (!player.storage.mou_dawu) player.storage.mou_dawu = [];
                            },
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                event.count = Math.min(trigger.num, 9);
                                ('step 1');
                                event.count--;
                                player.draw();
                                ('step 2');
                                if (player.countCards('h')) {
                                    player.chooseCard('将一张手牌置于武将牌上作为<雾>', true);
                                } else {
                                    event.goto(4);
                                }
                                ('step 3');
                                if (result.cards && result.cards.length) {
                                    player.lose(result.cards, ui.special, 'toStorage');
                                    player.storage.mou_dawu = player.storage.mou_dawu.concat(result.cards);
                                    player.markSkill('mou_dawu');
                                    game.log(player, '将', result.cards, '置于武将牌上作为<雾>');
                                }
                                ('step 4');
                                if (event.count > 0) {
                                    player.chooseBool(get.prompt2('mou_dawu')).set('frequentSkill', 'mou_dawu');
                                } else event.finish();
                                ('step 5');
                                if (result.bool) {
                                    event.goto(1);
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
                                maixie: true,
                                maixie_hp: true,
                                threaten: 0.8,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                            if (!target.hasFriend()) return;
                                            if (target.hp >= 4) return [0.5, get.tag(card, 'damage') * 2];
                                            if (target.hp == 3) return [0.5, get.tag(card, 'damage') * 1.5];
                                            if (target.hp == 2) return [1, get.tag(card, 'damage') * 0.5];
                                        }
                                    },
                                },
                            },
                        },
                        mou_xuming: {
                            juexingji: true,
                            audio: 'ext:花好月圆/audio:2',
                            derivation: ['reguanxing', 'mou_weiwo'],
                            trigger: {
                                player: 'dying',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.gainMaxHp();
                                player.draw(3);
                                ('step 1');
                                if (player.hp < 2) {
                                    player.recover(2 - player.hp);
                                }
                                ('step 2');
                                player.addSkill('reguanxing');
                                player.addSkill('mou_weiwo');
                                player.awakenSkill('mou_xuming');
                            },
                        },
                        mou_weiwo: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                player: 'phaseDiscardBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.parent.name == 'phaseDiscard' && player.countCards('h', { type: 'basic' && 'equip' }) < player.countCards('h');
                            },
                            content() { },
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (get.type(card, 'trick') == 'trick') {
                                        return true;
                                    }
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && get.type(card, 'trick') == 'trick') return false;
                                },
                            },
                        },
                        qita_wdqk: {
                            nobracket: true,
                            group: 'qita_wdqk_1',
                            audioname2: {
                                wdqk_guanyu: 'hua_wusheng',
                                wdqk_taishici: 'wu_tianyi',
                                wdqk_zhaoyun: 'wu_longdan',
                                wdqk_huangzhong: 'wu_liegong',
                                wdqk_machao: 'wu_tieqi_2',
                                wdqk_ganning: 'wu_qixi3',
                                wdqk_zhangfei: 'wu_liyong3',
                                wdqk_zhangliao: 'wu_zhiti',
                                wdqk_xuchu: 'wu_luoyi',
                            },
                            trigger: {
                                player: 'useCard',
                                target: 'useCardToTargeted',
                            },
                            _priority: -1,
                            popup: false,
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            filter(event, player) {
                                var wdqkb = new RegExp('wdqk');
                                var qitab = new RegExp('qita');
                                return (event.card.name == 'sha' || event.card.name == 'juedou') && (wdqkb.test(player.name) || wdqkb.test(player.name2) || qitab.test(player.name) || qitab.test(player.name2));
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (card.name == 'sha' || card.name == 'juedou') return [1, 0.6];
                                    },
                                    player(card, player, target, current) {
                                        if (card.name == 'sha' || card.name == 'juedou') return [1, 1];
                                    },
                                },
                            },
                        },
                        qita_wdqk_1: {
                            audioname2: {
                                wdqk_guanyu: 'yijue',
                                wdqk_taishici: 'wu_hanzhan',
                                wdqk_zhaoyun: 'wu_yajiao_1',
                                wdqk_huangzhong: 'wu_liegong_3',
                                wdqk_machao: 'wu_shichou',
                                wdqk_ganning: 'wu_fenwei',
                                wdqk_zhangfei: 'wu_paoxiao2',
                                wdqk_zhangliao: 'wu_tuxi2',
                                wdqk_xuchu: 'wu_chandou',
                            },
                            trigger: {
                                player: 'phaseDiscardBefore',
                            },
                            frequent(event, player) {
                                return !player.needsToDiscard();
                            },
                            forced: true,
                            filter(event, player) {
                                var wdqkb = new RegExp('wdqk');
                                var qitab = new RegExp('qita');
                                return player.countUsed() <= player.hp && (wdqkb.test(player.name) || wdqkb.test(player.name2) || qitab.test(player.name) || qitab.test(player.name2));
                            },
                            content() {
                                player.addTempSkill('qita_qipai');
                                player.draw(player.maxHp - player.hp + 1);
                            },
                        },
                        wu_tianyi: {
                            audio: 'ext:花好月圆/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target && target.countCards('h') > 0;
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseToCompare(target);
                                ('step 1');
                                if (result.bool) {
                                    target.addTempSkill('fengyin');
                                    player.addTempSkill('wu_tianyi2', 'phaseAfter');
                                    var card = get.cardPile(function (card) {
                                        return card.name == 'sha';
                                    });
                                    if (card) player.gain(card, 'gain2');
                                } else {
                                    player.draw(2);
                                    player.recover();
                                }
                            },
                            ai: {
                                order(name, player) {
                                    var cards = player.getCards('h');
                                    if (player.countCards('h', 'sha') == 0) {
                                        return 1;
                                    }
                                    for (var i = 0; i < cards.length; i++) {
                                        if (cards[i].name != 'sha' && cards[i].number > 11 && get.value(cards[i]) < 7) {
                                            return 9;
                                        }
                                    }
                                    return ai.get.order({ name: 'sha' }) - 1;
                                },
                                result: {
                                    player(player) {
                                        if (player.countCards('h', 'sha') > 0) return 0.6;
                                        var num = player.countCards('h');
                                        if (num > player.hp) return 0;
                                        if (num == 1) return -2;
                                        if (num == 2) return -1;
                                        return -0.7;
                                    },
                                    target(player, target) {
                                        var num = target.countCards('h');
                                        if (num == 1) return -1;
                                        if (num == 2) return -0.7;
                                        return -0.5;
                                    },
                                },
                                threaten: 1.3,
                            },
                        },
                        wu_tianyi2: {
                            mod: {
                                targetInRange(card, player, target, now) {
                                    if (card.name == 'sha') return true;
                                },
                                selectTarget(card, player, range) {
                                    if (card.name == 'sha' && Array.isArray(range) && range[1] != -1) range[1] += 99;
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 1;
                                },
                            },
                        },
                        wu_hanzhan: {
                            group: 'wu_hanzhan2',
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                global: 'chooseToCompareBegin',
                            },
                            filter(event, player) {
                                if (player == event.player) return true;
                                if (event.targets) return event.targets.includes(player);
                                return player == event.target;
                            },
                            logTarget(event, player) {
                                if (player != event.player) return event.player;
                                return event.targets || event.target;
                            },
                            check(trigger, player) {
                                var num = 0;
                                var targets = player == trigger.player ? (trigger.targets ? trigger.targets.slice(0) : [trigger.target]) : [trigger.player];
                                while (targets.length) {
                                    var target = targets.shift();
                                    if (target.getCards('h').length > 1) num -= get.attitude(player, target);
                                }
                                return num > 0;
                            },
                            content() {
                                var targets = player == trigger.player ? (trigger.targets ? trigger.targets.slice(0) : [trigger.target]) : [trigger.player];
                                if (!trigger.fixedResult) trigger.fixedResult = {};
                                while (targets.length) {
                                    var target = targets.shift();
                                    var hs = target.getCards('h');
                                    if (hs.length) trigger.fixedResult[target.playerid] = hs.randomGet();
                                }
                            },
                        },
                        wu_hanzhan2: {
                            trigger: {
                                player: 'compare',
                                target: 'compare',
                            },
                            filter(event, player) {
                                return !event.iwhile;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseControl('点数+3', '点数-3', 'cancel2')
                                    .set('prompt', get.prompt2('wu_hanzhan2'))
                                    .set('ai', function () {
                                        if (_status.event.small) return 1;
                                        else return 0;
                                    })
                                    .set('small', trigger.small);
                                ('step 1');
                                if (result.index != 2) {
                                    if (result.index == 0) {
                                        game.log(trigger.target, '拼点牌点数+3');
                                        if (player == trigger.target) {
                                            trigger.num1 += 3;
                                            if (trigger.num1 > 13) trigger.num1 = 13;
                                        } else {
                                            trigger.num2 += 3;
                                            if (trigger.num2 > 13) trigger.num2 = 13;
                                        }
                                    } else {
                                        game.log(trigger.target, '拼点牌点数-3');
                                        if (player == trigger.target) {
                                            trigger.num1 -= 3;
                                            if (trigger.num1 < 1) trigger.num1 = 1;
                                        } else {
                                            trigger.num2 -= 3;
                                            if (trigger.num2 < 1) trigger.num2 = 1;
                                        }
                                    }
                                }
                            },
                        },
                        wu_longdan: {
                            audio: 'ext:花好月圆/audio:2',
                            group: ['wu_longdan_1', 'wu_longdan_draw', 'wu_longdan_shamiss', 'wu_longdan_shanafter', 'hua_longdan_damage', 'hua_longdan_miss'],
                            subSkill: {
                                shanafter: {
                                    audio: 'longdan_sha',
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    filter(event, player) {
                                        return event.skill == 'wu_longdan_1' && event.getParent(2).name == 'sha';
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget('是否发动【龙胆】令一名角色回复1点体力？', function (card, player, target) {
                                                return target != _status.event.source && target.isDamaged();
                                            })
                                            .set('ai', function (target) {
                                                return get.attitude(_status.event.player, target);
                                            })
                                            .set('source', trigger.getParent(2).player);
                                        ('step 1');
                                        if (result.bool && result.targets && result.targets.length) {
                                            player.line(result.targets[0], 'green');
                                            result.targets[0].recover();
                                        }
                                    },
                                },
                                shamiss: {
                                    audio: 'longdan_sha',
                                    trigger: {
                                        player: 'shaMiss',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.skill == 'wu_longdan_1';
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget('是否发动【龙胆】对一名其他角色造成1点伤害？', function (card, player, target) {
                                                return target != _status.event.target && target != player;
                                            })
                                            .set('ai', function (target) {
                                                return -get.attitude(_status.event.player, target);
                                            })
                                            .set('target', trigger.target);
                                        ('step 1');
                                        if (result.bool && result.targets && result.targets.length) {
                                            player.line(result.targets[0], 'green');
                                            result.targets[0].damage();
                                        }
                                    },
                                },
                                draw: {
                                    trigger: {
                                        player: ['useCard', 'respond'],
                                    },
                                    audio: 'longdan_sha',
                                    forced: true,
                                    filter(event, player) {
                                        if (!get.zhu(player, 'shouyue')) return false;
                                        return event.skill == 'wu_longdan_1';
                                    },
                                    content() {
                                        player.draw();
                                        //player.storage.fanghun2++;
                                    },
                                },
                            },
                        },
                        wu_longdan_1: {
                            audio: 'ext:花好月圆/audio:2',
                            audioname: ['re_zhaoyun'],
                            enable: ['chooseToUse', 'chooseToRespond'],
                            prompt: '将杀当做闪,或将闪当做杀,或将桃当做酒,或将酒当做桃使用或打出',
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
                                var filter = event.filterCard;
                                if (filter({ name: 'sha' }, player, event) && player.countCards('hs', 'shan')) return true;
                                if (filter({ name: 'shan' }, player, event) && player.countCards('hs', 'sha')) return true;
                                if (filter({ name: 'tao' }, player, event) && player.countCards('hs', 'jiu')) return true;
                                if (filter({ name: 'jiu' }, player, event) && player.countCards('hs', 'tao')) return true;
                                return false;
                            },
                            ai: {
                                respondSha: true,
                                respondShan: true,
                                save: true,
                                skillTagFilter(player, tag) {
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
                                    if (!player.countCards('hs', name)) return false;
                                },
                                order(item, player) {
                                    if (player && _status.event.type == 'phase') {
                                        var max = 0;
                                        var list = ['sha', 'tao', 'jiu'];
                                        var map = { sha: 'shan', tao: 'jiu', jiu: 'tao' };
                                        for (var i = 0; i < list.length; i++) {
                                            var name = list[i];
                                            if (player.countCards('hs', map[name]) > (name == 'jiu' ? 1 : 0) && player.getUseValue({ name: name }) > 0) {
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
                        wu_yajiao_1: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                player: 'loseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player != _status.currentPhase && event.hs && event.hs.length && ['useCard', 'respond'].includes(event.parent.name);
                            },
                            content() {
                                'step 0';
                                event.card = get.cards()[0];
                                game.cardsGotoOrdering(event.card);
                                event.videoId = lib.status.videoId++;
                                var judgestr = get.translation(player) + '发动了【涯角】';
                                game.addVideo('judge1', player, [get.cardInfo(event.card), judgestr, event.videoId]);
                                game.broadcastAll(
                                    function (player, card, str, id, cardid) {
                                        var event;
                                        if (game.online) {
                                            event = {};
                                        } else {
                                            event = _status.event;
                                        }
                                        if (game.chess) {
                                            event.node = card.copy('thrown', 'center', ui.arena).addTempClass('start');
                                        } else {
                                            event.node = player.$throwordered(card.copy(), true);
                                        }
                                        if (lib.cardOL) lib.cardOL[cardid] = event.node;
                                        event.node.cardid = cardid;
                                        event.node.classList.add('thrownhighlight');
                                        ui.arena.classList.add('thrownhighlight');
                                        event.dialog = ui.create.dialog(str);
                                        event.dialog.classList.add('center');
                                        event.dialog.videoId = id;
                                    },
                                    player,
                                    event.card,
                                    judgestr,
                                    event.videoId,
                                    get.id()
                                );
                                game.log(player, '展示了', event.card);
                                if (get.type(event.card, 'trick') == get.type(trigger.parent.card, 'trick')) {
                                    player
                                        .chooseTarget('选择获得此牌的角色')
                                        .set('ai', function (target) {
                                            var att = get.attitude(_status.event.player, target);
                                            if (_status.event.du) {
                                                if (target.hasSkillTag('nodu')) return 0;
                                                return -att;
                                            }
                                            if (att > 0) {
                                                return att + Math.max(0, 5 - target.countCards('h'));
                                            }
                                            return att;
                                        })
                                        .set('du', event.card.name == 'du');
                                } else {
                                    event.disbool = true;
                                    player
                                        .chooseTarget('是否弃置场上一名角色区域内的一张牌？', function (card, player, target) {
                                            return target.countDiscardableCards(player, 'hej') > 0;
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            return get.effect(target, { name: 'guohe' }, player, player);
                                        });
                                }
                                ('step 1');
                                if (event.disbool) {
                                    if (result.bool) {
                                        player.line(result.targets[0], 'green');
                                        player.discardPlayerCard(result.targets[0], 'hej', true);
                                    }
                                    event.dialog.close();
                                    game.addVideo('judge2', null, event.videoId);
                                    ui.arena.classList.remove('thrownhighlight');
                                } else if (result.targets) {
                                    event.dialog.close();
                                    game.addVideo('judge2', null, event.videoId);
                                    player.line(result.targets, 'green');
                                    result.targets[0].gain(event.card, 'log');
                                    ui.arena.classList.remove('thrownhighlight');
                                } else {
                                    event.dialog.close();
                                    game.addVideo('judge2', null, event.videoId);
                                    ui.arena.classList.remove('thrownhighlight');
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'respond') && target.countCards('h') > 1) return [1, 0.2];
                                    },
                                },
                            },
                        },
                        wu_yajiao: {
                            group: 'wu_yajiao_1',
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.cardCount(true, player) > 0;
                            },
                            content() {
                                player.draw(get.cardCount(true, player));
                            },
                            ai: {
                                threaten: 1.3,
                            },
                        },
                        mou_lianhuan: {
                            audio: 'ext:花好月圆/audio:2',
                            forced: true,
                            group: ['mou_lianhuan2', 'mou_lianhuan3', 'mou_lianhuan5', 'mou_lianhuan4', 'mou_lianhuan6', 'mou_lianhuan7'],
                        },
                        mou_lianhuan5: {
                            audio: 'ext:花好月圆/audio:2',
                            position: 'hes',
                            filter(event, player) {
                                return player.countCards('he', { suit: 'club' }) > 0;
                            },
                            popup: 'lianhuan',
                            enable: 'phaseUse',
                            filterCard(card) {
                                return card.suit == 'club';
                            },
                            check(card) {
                                return 5 - get.useful(card);
                            },
                            content() {
                                player.draw();
                                player.recover();
                            },
                            discard: false,
                            loseTo: 'discardPile',
                            prompt: '将一张♣️️牌置入弃牌堆并摸一张牌,回复一点体力',
                            delay: 0.5,
                            prepare(cards, player) {
                                player.$throw(cards, 1000);
                                game.log(player, '将', cards, '置入了弃牌堆');
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                },
                                result: {
                                    player: 1,
                                },
                            },
                            visible: true,
                        },
                        mou_lianhuan3: {
                            audio: 'ext:花好月圆/audio:2',
                            enable: 'chooseToUse',
                            filter(event, player) {
                                return player.countCards('he', { suit: 'club' }) > 0;
                            },
                            filterCard: {
                                suit: 'club',
                            },
                            viewAs: {
                                name: 'tiesuo',
                            },
                            prompt: '将一张♣️️牌当铁锁连环使用',
                            check(card) {
                                return 6 - get.value(card);
                            },
                            position: 'hes',
                            ai: {
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
                            },
                        },
                        mou_lianhuan4: {
                            mod: {
                                selectTarget(card, player, range) {
                                    if (card.name == 'tiesuo' && Array.isArray(range) && range[1] != -1) range[1] += 99;
                                },
                                suit(card, suit) {
                                    if (suit == 'spade') return 'club';
                                },
                            },
                        },
                        mou_lianhuan7: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                player: 'recoverEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hp >= 3;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('mou_lianhuan7'), '是否对一名角色造成一点火焰伤害', function (card, player, target) {
                                        return target.isLinked();
                                    })
                                    .set('targets', targets).ai = function () {
                                        return 1;
                                    };
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].damage('fire', 'nocard');
                                }
                            },
                        },
                        mou_niepan: {
                            audio: 'ext:花好月圆/audio:2',
                            enable: 'chooseToUse',
                            derivation: ['mou_kanpo', 'mou_huoji', 'mou_bazhen'],
                            mark: true,
                            limited: true,
                            init(player) {
                                player.storage.mou_niepan = false;
                            },
                            filter(event, player) {
                                if (player.storage.mou_niepan) return false;
                                if (event.type == 'dying') {
                                    if (player != event.dying) return false;
                                    return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('mou_niepan');
                                player.storage.mou_niepan = true;
                                player.discard(player.getCards('hej'));
                                ('step 1');
                                player.link(false);
                                ('step 2');
                                player.turnOver(false);
                                ('step 3');
                                player.draw(3);
                                ('step 4');
                                if (player.hp < 3) {
                                    player.recover(3 - player.hp);
                                }
                                ('step 5');
                                player.chooseControl('mou_bazhen', 'mou_huoji', 'mou_kanpo').set('prompt', '选择获得一个技能').ai = function () {
                                    return ['mou_huoji', 'mou_bazhen'].randomGet();
                                };
                                ('step 6');
                                player.addSkillLog(result.control);
                            },
                            ai: {
                                order: 1,
                                skillTagFilter(player) {
                                    if (player.storage.mou_niepan) return false;
                                    if (player.hp > 0) return false;
                                },
                                save: true,
                                result: {
                                    player(player) {
                                        if (player.hp <= 0) return 10;
                                        if (player.hp <= 2 && player.countCards('he') <= 1) return 10;
                                        return 0;
                                    },
                                },
                                threaten(player, target) {
                                    if (!target.storage.mou_niepan) return 0.6;
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        mou_lianhuan2: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                player: 'phaseBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.countPlayer(function (current) {
                                    return !current.isLinked();
                                });
                            },
                            content() {
                                'step 0';
                                var num = game.countPlayer(function (current) {
                                    return !current.isLinked();
                                });
                                player
                                    .chooseTarget(get.prompt('mou_lianhuan2'), '横置至多2名未横置的角色', [1, 2], function (card, player, target) {
                                        return !target.isLinked();
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
                            ai: {
                                expose: 0.3,
                            },
                        },
                        mou_lianhuan6: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return !current.isLinked();
                                });
                            },
                            content() {
                                'step 0';
                                var num = game.countPlayer(function (current) {
                                    return !current.isLinked();
                                });
                                player.chooseTarget(get.prompt('mou_lianhuan6'), [1, num], function (card, player, target) {
                                    return !target.isLinked();
                                }).ai = function (target) {
                                    return -get.attitude(player, target);
                                };
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
                        pt_kanpo: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: { player: 'useCard1' },
                            forced: true,
                            filter(event, player) {
                                return !event.audioed && event.parent.type == 'phase';
                            },
                            content() {
                                trigger.audioed = true;
                            },
                        },
                        pt_huoji: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: { player: 'useCard1' },
                            forced: true,
                            filter(event, player) {
                                return !event.audioed && event.parent.type == 'phase';
                            },
                            content() {
                                trigger.audioed = true;
                            },
                        },
                        pt_bazhen: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: { player: 'useCard1' },
                            forced: true,
                            filter(event, player) {
                                return !event.audioed && event.parent.type == 'phase';
                            },
                            content() {
                                trigger.audioed = true;
                            },
                        },
                        jlsg_lvezhen: {
                            shaRelated: true,
                            audio: 'ext:极略/audio:2',
                            trigger: { player: 'shaBegin' },
                            filter(event, player) {
                                return event.target.countDiscardableCards(player, 'he');
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) < 0;
                            },
                            content() {
                                'step 0';
                                event.cards = get.cards(3);
                                game.cardsGotoOrdering(cards);
                                player.showCards(event.cards);
                                ('step 1');
                                event.numx = 0;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (get.type(i) != 'basic') event.numx++;
                                    }
                                // player.$throw(event.cards);
                                if (event.numx) {
                                    player.discardPlayerCard('请选择想要弃置的牌', trigger.target, [1, Math.min(event.numx, trigger.target.countDiscardableCards(player, 'he'))], 'he').set('forceAuto', true);
                                }
                            },
                        },
                        wu_liegong: {
                            shaRelated: true,
                            mod: {
                                targetInRange(card, player, target) {
                                    if (card.name == 'sha' && typeof card.number == 'number') {
                                        if (get.distance(player, target) <= card.number) return true;
                                    }
                                },
                            },
                            trigger: {
                                player: ['phaseEnd', 'phaseBegin'],
                            },
                            audio: 'ext:花好月圆/audio:2',
                            filter(event, player) {
                                return player.countCards('hej') > 0;
                            },
                            content() {
                                'step 0';
                                player.discardPlayerCard(player, 'hej', true);
                                player
                                    .chooseTarget(get.prompt('wu_liegong'), function (card, player, target) {
                                        return lib.filter.targetEnabled({ name: 'sha' }, player, target);
                                    })
                                    .set('ai', function (target) {
                                        return get.effect(target, { name: 'sha' }, _status.event.player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.useCard({ name: 'sha' }, result.targets, false);
                                }
                            },
                            ai: {
                                threaten(player, target) {
                                    return 1.6;
                                },
                            },
                            group: ['wu_liegong_1', 'wu_liegong_2', 'wu_liegong_3', 'wu_liegong_4'],
                            subSkill: {
                                1: {
                                    audio: 'ext:花好月圆/audio:2',
                                    trigger: {
                                        player: 'shaAfter',
                                    },
                                    filter(event, player) {
                                        return event.target.isAlive() && event.getParent(2).name != 'wu_liegong_1';
                                    },
                                    content() {
                                        'step 0';
                                        event.cards = get.cards(3);
                                        game.cardsGotoOrdering(cards);
                                        player.showCards(event.cards);
                                        ('step 1');
                                        event.num = 0;
                                        if (Array.isArray(event.cards))
                                            for (var i of event.cards) {
                                                if (get.type(i) == 'basic') event.num++;
                                            }
                                        if (event.num && trigger.target.isAlive()) {
                                            player.useCard(trigger.card, trigger.target, false);
                                            event.num--;
                                            event.redo();
                                        }
                                    },
                                    ai: {
                                        doubleSha: true,
                                        threaten: 1.5,
                                    },
                                },
                                2: {
                                    audio: 'ext:花好月圆/audio:2',
                                    trigger: {
                                        player: 'shaBegin',
                                    },
                                    forced: true,
                                    content() {
                                        if (!player.hasSkill('hua_liegong_hit')) {
                                            trigger.directHit = true;
                                            player.addTempSkill('hua_liegong_hit');
                                        } else {
                                            if (typeof trigger.extraDamage != 'number') {
                                                trigger.extraDamage = 0;
                                            }
                                            trigger.extraDamage++;
                                        }
                                    },
                                },
                                3: {
                                    trigger: {
                                        global: 'recoverAfter',
                                    },
                                    forced: true,
                                    audio: 'ext:花好月圆/audio:2',
                                    filter(event, player) {
                                        return event.player != player;
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                                4: {
                                    audio: 'ext:花好月圆/audio:2',
                                    trigger: {
                                        player: 'shaBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha';
                                    },
                                    content() {
                                        player.addTempSkill('unequip', 'shaAfter');
                                    },
                                },
                            },
                        },
                        fx_wdqk: {
                            charlotte: true,
                            group: 'fx_wdqk1',
                            nobracket: true,
                            trigger: {
                                source: 'damageBefore',
                            },
                            filter(event, player) {
                                return event.player != player && (player.name == 'hhyy_fanxing' || player.name2 == 'hhyy_fanxing');
                            },
                            forced: true,
                            content() {
                                trigger.num += trigger.num;
                            },
                            mod: {
                                targetInRange() {
                                    return true;
                                },
                            },
                            ai: {
                                unequip: true,
                            },
                        },
                        fx_wdqk1: {
                            trigger: {
                                target: 'shaBefore',
                                player: 'shaBegin',
                            },
                            _priority: -1,
                            popup: false,
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'sha' && (player.name == 'hhyy_fanxing' || player.name2 == 'hhyy_fanxing');
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (card.name == 'sha') return [1, 1];
                                    },
                                },
                            },
                        },
                        fx_mdtx: {
                            nobracket: true,
                            charlotte: true,
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card, 'trick') == 'trick' && (player.name == 'hhyy_fanxing' || player.name2 == 'hhyy_fanxing');
                            },
                            init(player) {
                                player.storage.fx_mdtx = 0;
                            },
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                event.card = result[0];
                                if (get.type(event.card) == 'basic') {
                                    player
                                        .chooseBool('是否弃置' + get.translation(event.card) + '并令本回合手牌上限+1？')
                                        .set('ai', function (evt, player) {
                                            return _status.currentPhase == player && player.needsToDiscard(-3) && _status.event.value < 6;
                                        })
                                        .set('value', get.value(event.card, player));
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.discard(event.card);
                                    player.storage.fx_mdtx += 2;
                                    if (_status.currentPhase == player) {
                                        player.markSkill('fx_mdtx');
                                    }
                                }
                            },
                            ai: {
                                threaten: 1.4,
                                noautowuxie: true,
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.storage.fx_mdtx * 2;
                                },
                            },
                            intro: {
                                content: '本回合手牌上限+#',
                            },
                            group: ['fx_mdtx_clear', 'hua_jizhi2', 'hua_jizhi3', 'fx_mdtx_1'],
                            subSkill: {
                                clear: {
                                    trigger: {
                                        global: 'phaseAfter',
                                    },
                                    silent: true,
                                    content() {
                                        player.storage.fx_mdtx = 0;
                                        player.unmarkSkill('fx_mdtx');
                                    },
                                    forced: true,
                                    popup: false,
                                },
                                1: {
                                    trigger: {
                                        target: 'useCardToBegin',
                                    },
                                    _priority: -1,
                                    popup: false,
                                    forced: true,
                                    filter(event, player) {
                                        return get.type(event.card) == 'trick' && (player.name == 'hhyy_fanxing' || player.name2 == 'hhyy_fanxing');
                                    },
                                    forced: true,
                                    content() {
                                        player.draw();
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.type(card) == 'trick') return [1, 1];
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        hhyy_zuozheji: {
                            group: ['hhyy_zuozheji2', 'hhyy_zuozheji3'],
                            nobracket: true,
                            charlotte: true,
                            fixed: true,
                            trigger: {
                                player: ['phaseBegin', 'phaseAfter'],
                            },
                            audio: ['huashen2', 2],
                            forced: true,
                            filter(event, player) {
                                if (!lib.characterSort.huahaoyueyuan) return false;
                                return player.storage.hhyy_zuozheji.length < lib.characterSort.huahaoyueyuan.hhyy_hhyy.length - 1 && (player.name == 'hhyy_fanxing' || player.name2 == 'hhyy_fanxing');
                            },
                            init(player) {
                                //QQQ
                                player.storage.hhyy_zuozheji = [];
                                player.storage.zhuSkill_hhyy_zuozheji = [];
                            },
                            intro: {
                                content: 'characters',
                            },
                            content() {
                                'step 0';
                                var list = lib.characterSort.huahaoyueyuan.hhyy_hhyy.slice(0);
                                list.randomSort();
                                list.removeArray(player.storage.hhyy_zuozheji);
                                var name = list[0];
                                player.storage.hhyy_zuozheji.push(name);
                                var skills = lib.character[name][3];
                                skills.removeArray(['hua_jizhi', 'qita_hhyy', '马术', 'hua_fanxiang', 'hua_qingguo', 'hua_lijian', 'duanchang', 'hua_jiqiao']);
                                var skill = skills.randomGet();
                                player.addSkill(skill);
                                player.flashAvatar('hhyy_zuozheji', skill);
                                if (lib.skill[skill].zhuSkill) player.storage.zhuSkill_hhyy_zuozheji.push(skill);
                                player.markSkill('hhyy_zuozheji');
                                /*player.mark(skill,{
                                    name:get.translation(skill),
                                    content:lib.translate[skill+'_info']
                                });*/
                                game.log(player, '获得技能', '【' + get.translation(skill) + '】');
                                event.dialog = ui.create.dialog('<div class="text center">你获得了' + get.translation(name) + '的一个随机技能【' + get.translation(skill) + '】', [[name], 'character']);
                                ('step 1');
                                event.dialog.close();
                            },
                            ai: {
                                order: 9,
                            },
                        },
                        hhyy_zuozheji2: {
                            nobracket: true,
                            charlotte: true,
                            fixed: true,
                            trigger: {
                                player: 'damageEnd',
                                source: 'damageEnd',
                            },
                            audio: ['huashen2', 2],
                            forced: true,
                            filter(event, player) {
                                if (!lib.characterSort.huahaoyueyuan) return false;
                                return player.storage.hhyy_zuozheji2.length < lib.characterSort.huahaoyueyuan.hhyy_mdtx.length - 1 && (player.name == 'hhyy_fanxing' || player.name2 == 'hhyy_fanxing');
                            },
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = [];
                                if (!player.storage['zhuSkill_' + skill]) player.storage['zhuSkill_' + skill] = [];
                            },
                            intro: {
                                content: 'characters',
                            },
                            content() {
                                'step 0';
                                var list = lib.characterSort.huahaoyueyuan.hhyy_mdtx.slice(0);
                                list.randomSort();
                                list.removeArray(player.storage.hhyy_zuozheji2);
                                var name = list[0];
                                player.storage.hhyy_zuozheji2.push(name);
                                var skills = lib.character[name][3];
                                skills.removeArray(['qita_mdtx', 'mou_baiyin', 'mou_renjie', 'mou_jianshu', 'mou_tiandu', 'mou_yiji', 'mou_luanwu', 'mou_yongdi', 'mou_qianxun', 'mou_fanjian', 'mou_yeyan', 'mou_quhu', 'mou_kuangfeng', 'mou_dawu', 'mou_xuming']);
                                var skill = skills.randomGet();
                                player.addSkill(skill);
                                player.flashAvatar('hhyy_zuozheji2', skill);
                                if (lib.skill[skill].zhuSkill) player.storage.zhuSkill_hhyy_zuozheji2.push(skill);
                                player.markSkill('hhyy_zuozheji2');
                                /*player.mark(skill,{
                                    name:get.translation(skill),
                                    content:lib.translate[skill+'_info']
                                });*/
                                game.log(player, '获得技能', '【' + get.translation(skill) + '】');
                                event.dialog = ui.create.dialog('<div class="text center">你获得了' + get.translation(name) + '的一个随机技能【' + get.translation(skill) + '】', [[name], 'character']);
                                ('step 1');
                                event.dialog.close();
                            },
                            ai: {
                                order: 9,
                            },
                        },
                        hhyy_zuozheji3: {
                            nobracket: true,
                            charlotte: true,
                            fixed: true,
                            trigger: {
                                global: 'roundStart',
                            },
                            audio: ['huashen2', 2],
                            forced: true,
                            filter(event, player) {
                                if (!lib.characterSort.huahaoyueyuan) return false;
                                return player.storage.hhyy_zuozheji3.length < lib.characterSort.huahaoyueyuan.hhyy_wdqk.length - 1 && (player.name == 'hhyy_fanxing' || player.name2 == 'hhyy_fanxing');
                            },
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = [];
                                if (!player.storage['zhuSkill_' + skill]) player.storage['zhuSkill_' + skill] = [];
                            },
                            intro: {
                                content: 'characters',
                            },
                            content() {
                                'step 0';
                                var list = lib.characterSort.huahaoyueyuan.hhyy_wdqk.slice(0);
                                list.randomSort();
                                list.removeArray(player.storage.hhyy_zuozheji3);
                                var name = list[0];
                                player.storage.hhyy_zuozheji3.push(name);
                                var skills = lib.character[name][3];
                                skills.removeArray(['qita_wdqk', '马术', 'wu_hanzhan', 'wu_yajiao', 'wu_yijue', 'wu_shichou', 'wu_tishen', 'wu_liyong', 'wu_kurou', 'wu_zhouyan']);
                                var skill = skills.randomGet();
                                player.addSkill(skill);
                                player.flashAvatar('hhyy_zuozheji3', skill);
                                if (lib.skill[skill].zhuSkill) player.storage.zhuSkill_hhyy_zuozheji3.push(skill);
                                player.markSkill('hhyy_zuozheji3');
                                /*player.mark(skill,{
                                    name:get.translation(skill),
                                    content:lib.translate[skill+'_info']
                                });*/
                                game.log(player, '获得技能', '【' + get.translation(skill) + '】');
                                event.dialog = ui.create.dialog('<div class="text center">你获得了' + get.translation(name) + '的一个随机技能【' + get.translation(skill) + '】', [[name], 'character']);
                                ('step 1');
                                event.dialog.close();
                            },
                            ai: {
                                order: 9,
                            },
                        },
                        mou_qianxun: {
                            group: 'mou_qianxun2',
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                target: 'useCardToTarget',
                                player: 'addJudgeBefore',
                            },
                            forced: true,
                            _priority: 15,
                            check(event, player) {
                                return event.name == 'addJudge' || get.effect(event.target, event.card, event.player, player) < 0;
                            },
                            filter(event, player) {
                                return event.card.name == 'shunshou' || get.type(event.card) == 'delay';
                            },
                            content() {
                                if (trigger.name == 'addJudge') {
                                    trigger.cancel();
                                } else trigger.parent.targets.remove(player);
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (card.name == 'shunshou' || get.type(card) == 'delay') return 'zeroplayertarget';
                                    },
                                },
                            },
                        },
                        mou_qianxun2: {
                            init(player) {
                                if (!player.storage.mou_qianxun3) player.storage.mou_qianxun3 = [];
                            },
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                target: 'useCardToBegin',
                                player: 'judgeBefore',
                            },
                            filter(event, player) {
                                if (player.countCards('h') == 0) return false;
                                if (event.parent.name == 'phaseJudge') {
                                    if (lib.skill.mou_qianxun.trigger.player == 'judgeBefore') {
                                        return true;
                                    }
                                    return event.result && event.result.judge != 0;
                                }
                                if (event.name == 'judge') return false;
                                if (event.card && get.type(event.card) == 'trick' && event.player != player) return true;
                            },
                            content() {
                                player.storage.mou_qianxun3 = player.storage.mou_qianxun3.concat(player.getCards('h'));
                                game.addVideo('storage', player, ['mou_qianxun3', get.cardsInfo(player.storage.mou_qianxun3), 'cards']);
                                player.lose(player.getCards('h'), ui.special, 'toStorage');
                                player.addSkill('mou_qianxun3');
                            },
                            ai: {
                                effect(card, player, target) {
                                    if (!target.hasFriend()) return;
                                    if (player == target) return;
                                    var type = get.type(card);
                                    var nh = target.countCards();
                                    if (type == 'trick') {
                                        if (!get.tag(card, 'multitarget') || get.info(card).singleCard) {
                                            if (get.tag(card, 'damage')) {
                                                if (nh < 3 || target.hp <= 2) return 0.8;
                                            }
                                            return [1, nh];
                                        }
                                    } else if (type == 'delay') {
                                        return [0.5, 0.5];
                                    }
                                },
                            },
                        },
                        mou_qianxun3: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: { global: 'phaseEnd' },
                            forced: true,
                            content() {
                                player.gain(player.storage.mou_qianxun3, 'fromStorage', 'draw');
                                player.storage.mou_qianxun3.length = 0;
                                player.removeSkill('mou_qianxun3');
                                game.addVideo('storage', player, ['mou_qianxun3', get.cardsInfo(player.storage.mou_qianxun3), 'cards']);
                            },
                            mark: true,
                            intro: {
                                content: 'cardCount',
                                onunmark(storage, player) {
                                    if (storage && storage.length) {
                                        player.$throw(storage, 1000);
                                        game.cardsDiscard(storage);
                                        game.log(storage, '被置入了弃牌堆');
                                        player.storage.mou_qianxun3.length = 0;
                                    }
                                },
                            },
                        },
                        mou_lianying: {
                            audio: 'ext:花好月圆/audio:2',
                            group: ['mou_lianying2', 'mou_lianying1'],
                            trigger: {
                                player: 'loseAfter',
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.countCards('h')) return false;
                                var evt = event.getl(player);
                                return evt && evt.hs && evt.hs.length;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('mou_lianying'), '令任意名角色摸x张牌(x为其体力上限且最多为5)', [1, Infinity]).ai = function (target) {
                                    var player = _status.event.player;
                                    if (player == target) return get.attitude(player, target) + 10;
                                    return get.attitude(player, target);
                                };
                                ('step 1');
                                if (result.bool) {
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].draw(Math.min(5, result.targets[i].maxHp));
                                    }
                                } else event.finish();
                                ('step 2');
                            },
                            ai: {
                                threaten: 0.8,
                                effect: {
                                    target(card) {
                                        if (card.name == 'guohe' || card.name == 'liuxinghuoyu') return 0.5;
                                    },
                                },
                                noh: true,
                            },
                        },
                        mou_lianying1: {
                            audio: 'ext:花好月圆/audio:true',
                            trigger: { player: 'phaseUseBefore' },
                            forced: true,
                            filter(event, player) {
                                return (
                                    game.countPlayer(function (current) {
                                        return current.isLinked();
                                    }) > 0
                                );
                            },
                            content() {
                                player.addTempSkill('huashangshi_paoxiao');
                            },
                        },
                        mou_lianying2: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            popup: false,
                            forced: true,
                            filter(event, player) {
                                return event.nature && event.player.isLinked();
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        hhyy_fengyin: {
                            init(player, skill) {
                                var skills = player.getSkills(true, false);
                                for (var i = 0; i < skills.length; i++) {
                                    if (lib.skill[skills[i]].charlotte) {
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
                        wu_tieqi: {
                            group: ['wu_tieqi_2', 'hua_tieqi'],
                            shaRelated: true,
                            charlotte: true,
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            filter(event, player) {
                                return event.card.name == 'sha';
                            },
                            logTarget: 'target',
                            content() {
                                'step 0';
                                player.judge(function () {
                                    return 0;
                                });
                                if (!trigger.target.hasSkill('hhyy_fengyin')) {
                                    trigger.target.addTempSkill('hhyy_fengyin');
                                }
                                ('step 1');
                                var suit = result.suit;
                                if (result.suit == 'spade') {
                                    var id = trigger.target.playerid;
                                    var map = trigger.customArgs;
                                    if (!map[id]) map[id] = {};
                                    if (!map[id].extraDamage) map[id].extraDamage = 0;
                                    map[id].extraDamage++;
                                }
                                ('step 2');
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
                            ai: {
                                ignoreSkill: true,
                                skillTagFilter(player, tag, arg) {
                                    if (tag == 'directHit_ai') {
                                        return get.attitude(player, arg.target) <= 0;
                                    }
                                    if (!arg || arg.isLink || !arg.card || arg.card.name != 'sha') return false;
                                    if (!arg.target || get.attitude(player, arg.target) >= 0) return false;
                                    if (!arg.skill || !lib.skill[arg.skill] || lib.skill[arg.skill].charlotte || !arg.target.getSkills(true, false).includes(arg.skill)) return false;
                                },
                                directHit_ai: true,
                            },
                        },
                        wu_tieqi_2: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            popup: false,
                            content() {
                                var chat = ['马超就是神.', '棘手,摧毁,怀念.'].randomGet();
                                player.say(chat);
                                var card = get.cardPile(function (card) {
                                    return card.name == 'sha';
                                });
                                if (card) player.gain(card, 'gain2');
                            },
                        },
                        wu_shichou: {
                            mod: {
                                globalFrom(from, to) {
                                    if (from.hp >= to.hp) return -Infinity;
                                },
                            },
                            audio: 'ext:花好月圆/audio:2',
                            group: '马术',
                            trigger: {
                                player: 'useCard2',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha'; //&&player.isDamaged();
                            },
                            content() {
                                'step 0';
                                var num = Math.max(1, player.getDamagedHp());
                                player.chooseTarget('是否发动【誓仇】,令至多' + num + '名其他角色也成为此【杀】的目标？', [1, num], function (card, player, target) {
                                    return target != player && !trigger.targets.includes(target) && player.canUse({ name: 'sha' }, target);
                                }).ai = function (target) {
                                    return get.effect(target, { name: 'sha' }, _status.event.player);
                                };
                                ('step 1');
                                if (result.bool && result.targets && result.targets.length) {
                                    var targets = result.targets;
                                    player.line(targets, trigger.card.nature);
                                    trigger.targets.addArray(targets);
                                }
                            },
                        },
                        wu_qixi2: {
                            audio: 'ext:花好月圆/audio:2',
                            audioname: ['re_ganning', 're_heqi'],
                            enable: 'chooseToUse',
                            filterCard: true,
                            position: 'hes',
                            viewAs: {
                                name: 'guohe',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('hes')) return false;
                            },
                            prompt: '将一张牌当过河拆桥使用',
                            check(card) {
                                return 4 - get.value(card);
                            },
                            ai: {
                                basic: {
                                    order: 9,
                                    useful: 1,
                                    value: 5,
                                },
                                result: {
                                    target(player, target) {
                                        var att = get.attitude(player, target);
                                        var nh = target.countCards('h');
                                        if (att > 0) {
                                            var js = target.getCards('j');
                                            if (js.length) {
                                                var jj = js[0].viewAs ? { name: js[0].viewAs } : js[0];
                                                if (jj.name == 'guohe' || js.length > 1 || get.effect(target, jj, target, player) < 0) {
                                                    return 3;
                                                }
                                            }
                                            if (target.getEquip('baiyin') && target.isDamaged() && get.recoverEffect(target, player, player) > 0) {
                                                if (target.hp == 1 && !target.hujia) return 1.6;
                                                if (target.hp == 2) return 0.01;
                                                return 0;
                                            }
                                        }
                                        var es = target.getCards('e');
                                        var noe = es.length == 0 || target.hasSkillTag('noe');
                                        var noe2 =
                                            es.filter(function (esx) {
                                                return get.value(esx, target) > 0;
                                            }).length == 0;
                                        var noh = nh == 0 || target.hasSkillTag('noh');
                                        if (noh && (noe || noe2)) return 0;
                                        if (att <= 0 && !target.countCards('he')) return 1.5;
                                        return -1.5;
                                    },
                                    player(player, target) {
                                        if (get.distance(player, target) > 1) return 0;
                                        if (
                                            get.attitude(player, target) < 0 &&
                                            !target.countCards('he', function (card) {
                                                return get.value(card, target) > 0 && card != target.getEquip('jinhe');
                                            })
                                        ) {
                                            return 0;
                                        }
                                        if (get.attitude(player, target) > 1) {
                                            var js = target.getCards('j');
                                            if (js.length) {
                                                var jj = js[0].viewAs ? { name: js[0].viewAs } : js[0];
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
                                    discard: 1,
                                    gain: 1,
                                },
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, player) > 0 && get.attitude(viewer, target) > 0) {
                                        return 0;
                                    }
                                },
                                yingbian(card, player, targets, viewer) {
                                    if (get.attitude(viewer, player) <= 0) return 0;
                                    if (
                                        targets.filter(function (current) {
                                            var att = get.attitude(player, current);
                                            if (att <= 0)
                                                return (
                                                    current.countCards('he', function (card) {
                                                        return get.value(card, current) > 0;
                                                    }) > 1
                                                );
                                            return (
                                                current.countCards('ej', function (card) {
                                                    return get.position(card) == 'j' || get.value(card, current) <= 0;
                                                }) > 1
                                            );
                                        }).length
                                    )
                                        return 6;
                                    return 0;
                                },
                            },
                        },
                        wu_qixi: {
                            group: ['wu_qixi1', 'wu_qixi2', 'wu_qixi3'],
                            audio: 'ext:花好月圆/audio:2',
                            enable: 'phaseUse',
                            usable: 2,
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                            filter(event, player) {
                                return !player.storage.gzfenweix;
                            },
                            content() {
                                'step 0';
                                var num = game.countPlayer() - 1;
                                player.chooseTarget(get.prompt('wu_qixi'), [1, num], function (card, player, target) {
                                    return target.countCards('h') && target != player;
                                }).ai = function (target) {
                                    return 0.5 - get.attitude(player, target);
                                };
                                ('step 1');
                                if (result.bool) {
                                    event.cards = [];
                                    event.list = result.targets.slice(0);
                                    event.list.sort(lib.sort.seat);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.list.length) {
                                    event.list.shift().chooseToDiscard('h', true);
                                } else {
                                    event.goto(4);
                                }
                                ('step 3');
                                if (result.bool && result.cards.length) {
                                    event.cards.push(result.cards[0]);
                                }
                                event.goto(2);
                                ('step 4');
                                if (event.cards.length) {
                                    player.chooseCardButton('选择一张加入手牌', event.cards).ai = function (button) {
                                        return get.value(button.link);
                                    };
                                } else {
                                    event.finish();
                                }
                                ('step 5');
                                if (result.bool) {
                                    player.gain(result.links, 'gain2');
                                }
                            },
                            ai: {
                                order: 7,
                                result: {
                                    player(player) {
                                        if (player.hp < 2) return 9;
                                        if (
                                            game.countPlayer(function (current) {
                                                return current.hp == 1;
                                            }) > 0 &&
                                            player.countCards('h', 'sha') > 0
                                        )
                                            return 7;
                                        return -1;
                                    },
                                },
                                threaten: 0.9,
                            },
                        },
                        wu_qixi1: {
                            audio: 'ext:花好月圆/audio:2',
                            enable: 'phaseUse',
                            usable: 4,
                            filterCard(card) {
                                return get.color(card) == 'red';
                            },
                            position: 'hes',
                            viewAs: {
                                name: 'zhujinqiyuan',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('hes', { color: 'red' })) return false;
                            },
                            prompt: '将一张红色牌当【逐近弃远】使用',
                            check(card) {
                                return 8 - get.value(card);
                            },
                            ai: {
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, player) > 0 && get.attitude(viewer, target) > 0) {
                                        return 0;
                                    }
                                },
                                basic: {
                                    order: 10,
                                    threaten: 1.6,
                                    useful: 4,
                                    value: 9,
                                },
                                result: {
                                    target(player, target) {
                                        if (get.attitude(player, target) <= 0) return target.countCards('hes') > 0 ? -1.5 : 1.5;
                                        var js = target.getCards('j');
                                        if (js.length) {
                                            var jj = js[0].viewAs ? { name: js[0].viewAs } : js[0];
                                            if (jj.name == 'zhujinqiyuan') return 3;
                                            if (js.length == 1 && ai.get.effect(target, jj, target, player) >= 0) {
                                                return -1.5;
                                            }
                                            return 3;
                                        }
                                        return -1.5;
                                    },
                                    player(player, target) {
                                        if (get.attitude(player, target) < 0 && !target.countCards('hes')) {
                                            //QQQ
                                            return 0;
                                        }
                                        if (get.attitude(player, target) > 1) {
                                            var js = target.getCards('j');
                                            if (js.length) {
                                                var jj = js[0].viewAs ? { name: js[0].viewAs } : js[0];
                                                if (jj.name == 'zhujinqiyuan') return 1;
                                                if (js.length == 1 && ai.get.effect(target, jj, target, player) >= 0) {
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
                        wu_fenwei: {
                            group: 'wu_fenwei2',
                            audio: 'ext:花好月圆/audio:2',
                            charlotte: true,
                            mark: true,
                            trigger: {
                                global: 'useCard',
                            },
                            _priority: 5,
                            filter(event, player) {
                                if (get.type(event.card) != 'trick') return false;
                                if (get.info(event.card).multitarget) return false;
                                if (event.targets.length < 2) return false;
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('wu_fenwei'), [1, trigger.targets.length], function (card, player, target) {
                                        return _status.event.getTrigger().targets.includes(target);
                                    })
                                    .set('ai', function (target) {
                                        var trigger = _status.event.getTrigger();
                                        if (game.phaseNumber > game.players.length * 2 && trigger.targets.length >= game.players.length - 1) {
                                            return -ai.get.effect(target, trigger.card, trigger.player, _status.event.player);
                                        }
                                        return -1;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    for (var i = 0; i < result.targets.length; i++) {
                                        trigger.targets.remove(result.targets[i]);
                                    }
                                }
                            },
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (get.type(card) == 'delay') {
                                        return false;
                                    }
                                },
                            },
                        },
                        wu_fenwei2: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current != player && current.getHistory('lose').length;
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('wu_fenwei'), '对一名本回合失去过牌的其他角色造成1点伤害', function (card, player, target) {
                                        return _status.event.targets.includes(target);
                                    })
                                    .set(
                                        'targets',
                                        game.filterPlayer(function (current) {
                                            return current != player && current.getHistory('lose').length;
                                        })
                                    )
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    target.damage();
                                }
                            },
                        },
                        wu_qixi3: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: { source: 'damageBegin1' },
                            filter(event, player) {
                                if (event.player.countCards('h') == 0) return true;
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (target.getCards('h').length == 0) return [1, -2];
                                    },
                                },
                            },
                        },
                        wu_paoxiao: {
                            audio: 'ext:花好月圆/audio:2',
                            group: ['wu_paoxiao1', 'hua_paoxiao'],
                            firstDo: true,
                            trigger: {
                                player: 'useCard1',
                            },
                            forced: true,
                            filter(event, player) {
                                return (!event.audioed || !player.hasSkill('hua_repaoxiao2')) && event.card.name == 'sha';
                            },
                            content() {
                                trigger.audioed = true;
                                player.addTempSkill('hua_repaoxiao2');
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'jiu') return num + (player.getStat('damage') || 0);
                                },
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (!get.zhu(player, 'shouyue')) return false;
                                    if (arg && arg.name == 'sha') return true;
                                    return false;
                                },
                            },
                        },
                        hua_repaoxiao2: {
                            charlotte: true,
                            mod: {
                                targetInRange(card, player) {
                                    if (card.name == 'sha') return true;
                                },
                            },
                        },
                        wu_paoxiao1: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                player: 'shaMiss',
                            },
                            forced: true,
                            content() {
                                player.addSkill('wu_paoxiao2');
                                player.addMark('wu_paoxiao2', 1);
                            },
                        },
                        wu_paoxiao2: {
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            audio: 'ext:花好月圆/audio:2',
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && player.countMark('wu_paoxiao2') > 0;
                            },
                            content() {
                                trigger.num += player.countMark('wu_paoxiao2');
                                player.removeSkill('wu_paoxiao2');
                            },
                            intro: {
                                content: '下一次使用【杀】造成伤害时令伤害值+#',
                            },
                        },
                        wu_tishen: {
                            audio: 'ext:花好月圆/audio:2',
                            mark: true,
                            limited: true,
                            trigger: {
                                player: ['phaseZhunbeiBegin', 'dying'],
                            },
                            filter(event, player) {
                                if (player.storage.wu_tishen) return false;
                                return player.isDamaged();
                            },
                            check(event, player) {
                                if (player.hp <= 2 || player.getDamagedHp() > 2) return true;
                                if (player.getDamagedHp() <= 1) return false;
                                return player.getDamagedHp() < game.roundNumber;
                            },
                            content() {
                                player.awakenSkill('wu_tishen');
                                player.hp = player.maxHp;
                                player.draw(player.maxHp - player.hp);
                            },
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        wu_liyong: {
                            audio: 'ext:花好月圆/audio:2',
                            group: ['wu_liyong2', 'wu_liyong3'],
                            trigger: {
                                player: 'phaseAfter',
                            },
                            forced: true,
                            _priority: 10,
                            filter(event, player) {
                                return !player.getStat('damage');
                            },
                            content() {
                                var card = get.cardPile(function (card) {
                                    return card.name == 'jiu';
                                });
                                if (card) player.gain(card, 'gain2');
                            },
                        },
                        wu_liyong2: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: { player: 'phaseEnd' },
                            forced: true,
                            filter(event, player) {
                                var stat = player.getStat();
                                return stat.damage && stat.damage > 0;
                            },
                            content() {
                                player.draw(player.getStat().damage);
                            },
                        },
                        wu_liyong3: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: { source: 'dieAfter' },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return !get.is.altered('gzqinyin');
                            },
                            content() {
                                'step 0';
                                'step 1';
                                player.restoreSkill('wu_tishen');
                                //player.addSkill('wu_tishen');
                                player.update();
                            },
                        },
                        wdqk_juexing: {
                            charlotte: true,
                            juexingji: true,
                            audio: 'boss_baonu',
                            trigger: {
                                player: 'dying',
                            },
                            forced: true,
                            content() {
                                player.init('wdqk_wuhu');
                                player.hp = player.maxHp;
                                player.drawTo(5);
                                player.awakenSkill('wdqk_juexing');
                            },
                        },
                        //张辽
                        wu_tuxi: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                global: ['useCard', 'respondEnd'],
                            },
                            _priority: 99,
                            forced: true,
                            usable: 3,
                            group: 'wu_tuxi2',
                            filter(event, player) {
                                var num = game.countPlayer(function (current) {
                                    return current.isDamaged();
                                });
                                return num >= 1 && event.player != player;
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                trigger.player.showCards(ui.cardPile.firstChild);
                                ('step 1');
                                if (get.color(ui.cardPile.firstChild) != get.color(trigger.card) && Math.random() <= 0.75) {
                                    if (trigger.name == 'respond') {
                                        if (trigger.parent.result) {
                                            trigger.parent.result.bool = false;
                                        }
                                        game.log(trigger.player, '打出的', trigger.card, '无效');
                                    } else {
                                        trigger.untrigger();
                                        trigger.finish();
                                        game.log(trigger.player, '使用的', trigger.card, '无效');
                                    }
                                }
                            },
                        },
                        wu_tuxi2: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                global: 'phaseDiscardBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player && event.player.isAlive();
                            },
                            content() {
                                'step 0';
                                if (trigger.player.getStat('damage') > 0) {
                                    player.chooseBool('是否要令' + get.translation(trigger.player) + '跳过下个摸牌阶段？').set('choice', get.attitude(player, trigger.player) <= 0);
                                } else {
                                    trigger.player.$give(Math.floor(trigger.player.countCards('h') / 2), player);
                                    player.gain(trigger.player.getCards('h').randomGets(Math.floor(trigger.player.countCards('h') / 2)));
                                    event.finish();
                                }
                                ('step 1');
                                if (result.bool) {
                                    trigger.player.skip('phaseDraw');
                                }
                            },
                        },
                        wu_duorui: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                source: 'damage',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                return event.player.isAlive();
                            },
                            prompt: '<br><br><br><br>是否发动【夺锐】废除目标武将牌上的一项技能？',
                            content() {
                                'step 0';
                                var list = [];
                                var listm = [];
                                var listv = [];
                                if (trigger.player.name1 != undefined) listm = lib.character[trigger.player.name1][3];
                                else listm = lib.character[trigger.player.name][3];
                                if (trigger.player.name2 != undefined) listv = lib.character[trigger.player.name2][3];
                                listm = listm.concat(listv);
                                var func = function (skill) {
                                    var info = get.info(skill);
                                    if (!info || info.charlotte) return false;
                                    return true;
                                };
                                for (var i = 0; i < listm.length; i++) {
                                    if (func(listm[i])) list.add(listm[i]);
                                }
                                event.skills = list;
                                player.chooseControl(list).set('prompt', '选择' + get.translation(trigger.player) + '武将牌上的一个技能并令其失效');
                                ('step 1');
                                var list = [];
                                for (var i = 1; i < 6; i++) {
                                    if ((i == 3 || i == 4) && event.horse) continue;
                                    if (trigger.player.isDisabled(i)) continue;
                                    list.push('equip' + i);
                                }
                                if (!list.length) {
                                    event.finish();
                                } else {
                                    player.line(trigger.player);
                                    trigger.player.disableEquip(list.randomGet());
                                }
                                ('step 2');
                                trigger.player.disableSkill('wu_duoruia', result.control);
                                trigger.player.addTempSkill('wu_duoruia', { player: 'phaseAfter' });
                                game.log(player, '选择了', trigger.player, '的技能', '#g【' + get.translation(result.control) + '】');
                            },
                        },
                        wu_duoruia: {
                            onremove(player, skill) {
                                player.enableSkill(skill);
                            },
                            mark: true,
                            charlotte: true,
                            intro: {
                                content(storage, player, skill) {
                                    let list = Object.keys(player.disabledSkills);
                                    if (list.length) {
                                        var str = '失效技能:';
                                        for (var i = 0; i < list.length; i++) {
                                            if (lib.translate[list[i] + '_info']) str += get.translation(list[i]) + '、';
                                        }
                                        return str.slice(0, str.length - 1);
                                    }
                                },
                            },
                        },
                        wu_zhiti: {
                            audio: 'ext:花好月圆/audio:2',
                            mark: true,
                            marktext: '啼',
                            group: ['wu_zhitia', 'wu_zhitib', 'wu_zhitic'],
                            intro: {
                                content(storage, player) {
                                    var num = game.countPlayer(function (current) {
                                        return current.isDamaged();
                                    });
                                    var str = '未发动';
                                    if (num >= 1) {
                                        str = '<li>摸牌数加一,使用杀次数加一,手牌上限加一';
                                    }
                                    if (num >= 3) {
                                        str += '<li>跳过判定阶段,使用牌没有距离限制';
                                    }
                                    if (num >= 5) {
                                        str += '<li>使用牌的目标+1或-1,造成的伤害+1';
                                    }
                                    return str;
                                },
                            },
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                var num = game.countPlayer(function (current) {
                                    return current.isDamaged();
                                });
                                return num >= 1;
                            },
                            content() {
                                trigger.num += Math.min(
                                    game.countPlayer(function (current) {
                                        return current.isDamaged();
                                    }),
                                    1
                                );
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return (
                                        num +
                                        Math.min(
                                            game.countPlayer(function (current) {
                                                return current.isDamaged();
                                            }),
                                            1
                                        )
                                    );
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha')
                                        return (
                                            num +
                                            Math.min(
                                                game.countPlayer(function (current) {
                                                    return current.isDamaged();
                                                }),
                                                1
                                            )
                                        );
                                },
                                targetInRange(card, player) {
                                    var num = game.countPlayer(function (current) {
                                        return current.isDamaged();
                                    });
                                    if (num >= 3) return true;
                                },
                            },
                        },
                        wu_zhitia: {
                            trigger: {
                                player: 'phaseJudgeBefore',
                            },
                            audio: 'ext:花好月圆/audio:2',
                            forced: true,
                            popup: false,
                            _priority: 15,
                            filter(event, player) {
                                var num = game.countPlayer(function (current) {
                                    return current.isDamaged();
                                });
                                return num >= 3;
                            },
                            content() {
                                trigger.cancel();
                                game.log(player, '跳过了判定阶段');
                            },
                        },
                        wu_zhitib: {
                            trigger: { player: 'useCard2' },
                            audio: 'ext:花好月圆/audio:2',
                            forced: true,
                            filter(event, player) {
                                var type = get.type(event.card);
                                var num = game.countPlayer(function (current) {
                                    return current.isDamaged();
                                });
                                return num >= 5 && (type == 'basic' || type == 'trick');
                            },
                            content() {
                                'step 0';
                                var goon = false;
                                var info = get.info(trigger.card);
                                if (trigger.targets && !info.multitarget) {
                                    var players = game.filterPlayer();
                                    for (var i = 0; i < players.length; i++) {
                                        if (lib.filter.targetEnabled2(trigger.card, player, players[i]) && !trigger.targets.includes(players[i])) {
                                            goon = true;
                                            break;
                                        }
                                    }
                                }
                                if (goon) {
                                    player
                                        .chooseTarget('止啼:是否额外指定一名' + get.translation(trigger.card) + '的目标？', function (card, player, target) {
                                            var trigger = _status.event;
                                            if (trigger.targets.includes(target)) return false;
                                            return lib.filter.targetEnabled2(trigger.card, _status.event.player, target);
                                        })
                                        .set('ai', function (target) {
                                            var trigger = _status.event.getTrigger();
                                            var player = _status.event.player;
                                            return get.effect(target, trigger.card, player, player);
                                        })
                                        .set('targets', trigger.targets)
                                        .set('card', trigger.card);
                                } else {
                                    if (!info.multitarget && trigger.targets && trigger.targets.length > 1) {
                                        event.goto(3);
                                    }
                                }
                                ('step 1');
                                if (result.bool) {
                                    if (!event.isMine()) game.delayx();
                                    event.target = result.targets[0];
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.target) {
                                    trigger.targets.add(event.target);
                                }
                                event.finish();
                                ('step 3');
                                player
                                    .chooseTarget('止啼:是否减少一名' + get.translation(trigger.card) + '的目标？', function (card, player, target) {
                                        return _status.event.targets.includes(target);
                                    })
                                    .set('ai', function (target) {
                                        var trigger = _status.event.getTrigger();
                                        return -get.effect(target, trigger.card, trigger.player, _status.event.player);
                                    })
                                    .set('targets', trigger.targets);
                                ('step 4');
                                if (result.bool) {
                                    event.targets = result.targets;
                                    if (event.isMine()) {
                                        event.finish();
                                    }
                                    for (var i = 0; i < result.targets.length; i++) {
                                        trigger.targets.remove(result.targets[i]);
                                    }
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        wu_zhitic: {
                            trigger: { source: 'damageBegin1' },
                            forced: true,
                            filter(event, player) {
                                var num = game.countPlayer(function (current) {
                                    return current.isDamaged();
                                });
                                return num >= 5 && event.parent.type == 'card';
                            },
                            logTarget: 'player',
                            content() {
                                trigger.num++;
                            },
                        },
                        //左慈
                        // 改自上兵伐谋的兵谋左慈
                        qita_huansheng: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                global: 'gameDrawAfter',
                                player: ['phaseBefore', 'enterGame', 'phaseAfter'],
                            },
                            fixed: true,
                            forced: true,
                            _priority: 2019,
                            group: 'qita_huansheng_2',
                            content() {
                                'step 0';
                                var chat = ['哼,肉眼凡胎,岂能窥视,仙人变幻？', '万物苍生,幻化由心.'].randomGet();
                                player.say(chat);
                                var list = get.gainableCharacters(function (info) {
                                    return info[2] >= 0;
                                });
                                var players = game.players.concat(game.dead);
                                for (var i = 0; i < players.length; i++) {
                                    list.remove(players[i].name);
                                    list.remove(players[i].name1);
                                    list.remove(players[i].name2);
                                }
                                var dialog = ui.create.dialog('选择一张幻化牌', 'hidden');
                                dialog.add([list.randomGets(5), 'character']);
                                player.chooseButton(dialog).ai = function (button) {
                                    return get.rank(button.link, true);
                                };
                                ('step 1');
                                if (result.bool) {
                                    var chat = ['吐故纳新,师法天地.', '眼之所见,皆为幻象.', '为仙之道,飘渺莫测.', '仙人之力,昭于世间.', '感觉到了新的魂魄.'].randomGet();
                                    player.say(chat);
                                    player.unmark(player.storage.qita_huansheng + '_charactermark');
                                    var name = result.links[0];
                                    var list = [];
                                    var skills = lib.character[result.links[0]][3];
                                    for (var j = 0; j < skills.length; j++) {
                                        if (lib.translate[skills[j] + '_info'] && lib.skill[skills[j]] && !player.hasSkill(skills[j] && !lib.skill[skills[j]].zhuSkill)) {
                                            list.push(skills[j]);
                                        }
                                    }
                                    player.addAdditionalSkill('qita_huansheng', list);
                                    player.markCharacter(name, null, true, true);
                                    game.addVideo('markCharacter', player, {
                                        name: '幻生',
                                        content: '',
                                        id: 'qita_huansheng',
                                        target: name,
                                    });
                                    player.storage.qita_huansheng = name;
                                    player.update();
                                }
                            },
                            subSkill: {
                                2: {
                                    audio: 'ext:花好月圆/audio:2',
                                    trigger: {
                                        global: 'gameDrawAfter',
                                        player: ['phaseAfter', 'enterGame'],
                                    },
                                    _priority: 999,
                                    forced: true,
                                    filter(event, player) {
                                        return player.name == 'qita_zuoci' || player.name2 == 'qita_zuoci';
                                    },
                                    init(player) {
                                        player.storage.qita_huansheng_2 = [];
                                        // player.storage.qita_huansheng=0;
                                    },
                                    intro: {
                                        content: 'characters',
                                    },
                                    content() {
                                        'step 0';
                                        // if(player.storage.qita_huansheng<1){
                                        //     player.storage.qita_huansheng++;
                                        //     event.finish();
                                        // }
                                        // else{
                                        //     player.storage.qita_huansheng=0;
                                        // }
                                        'step 1';
                                        var list = [];
                                        var list2 = [];
                                        var players = game.players.concat(game.dead);
                                        for (var i = 0; i < players.length; i++) {
                                            list2.add(players[i].name);
                                            list2.add(players[i].name1);
                                            list2.add(players[i].name2);
                                        }
                                        for (var i in lib.character) {
                                            if (player.storage.qita_huansheng_2.includes(i)) continue;
                                            if (list2.includes(i)) continue;
                                            list.push(i);
                                        }
                                        var name = list.randomGet();
                                        player.storage.qita_huansheng_2.push(name);
                                        player.markSkill('qita_huansheng_2');
                                        var skills = lib.character[name][3];
                                        for (var i = 0; i < skills.length; i++) {
                                            player.addSkill(skills[i]);
                                        }
                                        event.dialog = ui.create.dialog('<div class="text center">' + get.translation(player) + '发动了【幻生】', [[name], 'character']);
                                        ('step 2');
                                        event.dialog.close();
                                    },
                                },
                            },
                        },
                        qita_dunshu: {
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 1;
                                },
                                globalTo(from, to, distance) {
                                    return distance + 1;
                                },
                            },
                            group: ['qita_dunshu_lose', 'qita_dunshu_max', 'qita_dunshu_begin', 'qita_dunshu_damage'],
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            usable: 1,
                            _priority: 7,
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            filter(event, player) {
                                if (player.getEquip(2)) return false;
                                return event.card.name == 'sha' && (player.name1 == 'qita_zuoci' || player.name2 == 'qita_zuoci');
                            },
                            content() {
                                var chat = ['治人者握权,治于人者失命.', '止兵止战,休养生息.'].randomGet();
                                player.say(chat);
                                trigger.cancel();
                            },
                            subSkill: {
                                lose: {
                                    audio: 'ext:花好月圆/audio:true',
                                    audioname2: { qita_zhaoxiang: 'audiofuhan' },
                                    trigger: {
                                        player: 'loseMaxHpBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (player.maxHp <= 3) return true;
                                        return false;
                                    },
                                    content() {
                                        var chat = ['死而复生,生生死死', '死生存亡,命之行也.'].randomGet();
                                        player.say(chat);
                                        trigger.cancel();
                                    },
                                },
                                max: {
                                    audio: 'ext:花好月圆/audio:true',
                                    audioname2: { qita_zhaoxiang: 'audiofuhan' },
                                    trigger: {
                                        global: ['useCard', 'useSkill', 'changeHp', 'gainMaxHpAfter', 'loseMaxHpAfter', 'addJudgeAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (player.maxHp <= 3) return true;
                                        return false;
                                    },
                                    content() {
                                        var chat = ['神光不灭,仙力不绝.', '放下俗念,为道为仙.'].randomGet();
                                        player.say(chat);
                                        player.maxHp = 4;
                                        player.recover(4 - player.hp);
                                        player.update();
                                    },
                                },
                                begin: {
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countDisabled() > 2 || player.isDisabled(2);
                                    },
                                    content() {
                                        var list = ['equip1', 'equip2', 'equip3', 'equip4', 'equip5'];
                                        for (var i = 0; i < list.length; i++) {
                                            if (!player.isDisabled(list[i])) list.splice(i--, 1);
                                            else player.enableEquip(list[i]);
                                        }
                                    },
                                },
                                damage: {
                                    trigger: {
                                        player: ['damageEnd', 'changeHp', 'gainMaxHpAfter', 'loseMaxHpAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countDisabled() > 2 || player.isDisabled(2);
                                    },
                                    content() {
                                        var list = ['equip1', 'equip2', 'equip3', 'equip4', 'equip5'];
                                        for (var i = 0; i < list.length; i++) {
                                            if (!player.isDisabled(list[i])) list.splice(i--, 1);
                                            else player.enableEquip(list[i]);
                                        }
                                    },
                                },
                            },
                        },
                        //许诸(待修改)
                        wu_luoyi: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin1',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            content() {
                                'step 0';
                                var cards = get.cards(5);
                                game.cardsGotoOrdering(cards);
                                player.showCards(cards, '裸衣');
                                var cardsx = [];
                                for (var i = 0; i < cards.length; i++) {
                                    if (get.type(cards[i]) == 'basic' || get.type(cards[i]) !== 'basic') {
                                        cardsx.push(cards[i]);
                                    }
                                }
                                event.cards = cardsx;
                                player.chooseBool('是否放弃摸牌' + (cardsx.length ? ',改为获得' + get.translation(cardsx) : '') + '？').ai = function () {
                                    var num = 5;
                                    return cardsx.length >= trigger.num;
                                };
                                ('step 1');
                                if (result.bool) {
                                    if (cards.length) player.gain(cards, 'gain2');
                                    //game.cardsDiscard(cards2);
                                    player.addTempSkill('wu_luoyi2', { player: 'phaseBefore' });
                                    player.addTempSkill('wu_luoyi1');
                                    trigger.changeToZero();
                                }
                                //else game.cardsDiscard(cards);
                            },
                        },
                        wu_luoyi1: {
                            mod: {
                                cardname(card, player, name) {
                                    if (lib.card[card.name].type != 'basic' && lib.card[card.name].type != 'equip') return 'juedou';
                                },
                            },
                        },
                        wu_luoyi2: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: { source: 'damageBegin1' },
                            filter(event, player) {
                                return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && event.notLink();
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                damageBonus: true,
                            },
                        },
                        wu_chandou: {
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (card.name == 'bingliang' || card.name == 'lebu' || card.name == 'shandian' || card.name == 'guohe' || card.name == 'shunshou') return false;
                                },
                                globalFrom(player, target, distance) {
                                    return distance - 1;
                                },
                            },
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            audio: 'ext:花好月圆/audio:2',
                            group: 'wu_chandou2',
                            filter(event, player) {
                                return event.source != player && event.source != undefined;
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    if (card.name == 'sha' || card.name == 'juedou') return -2;
                                    return 2;
                                });
                                ('step 1');
                                if (result.judge == 2) {
                                    player.useCard({ name: 'juedou' }, trigger.source, false, 'noai');
                                }
                            },
                        },
                        wu_chandou2: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: {
                                player: 'judgeEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.result.card, 'basic') == 'basic' || get.type(event.result.card, 'equip') == 'equip' || event.result.card.name == 'juedou';
                            },
                            content() {
                                player.recover();
                                player.gain(trigger.result.card);
                                player.$gain2(trigger.result.card);
                                game.log(player, '获得了' + get.translation(trigger.result.card));
                            },
                        },
                        //小无
                        //初版小无(但是本人代码稀烂,只能靠苏婆的削弱版后增伤)
                        qita_zhuyuan: {
                            enable: 'phaseUse',
                            position: 'he',
                            selectCard: 4,
                            complexCard: true,
                            charlotte: true,
                            prompt: '<br>将4张花色各不同的牌交一名角色并令你与其获得【铁骑】和【激昂】直到各自回合结束',
                            check(card) {
                                if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') return 0;
                                if (!ui.selected.cards.length && card.name == 'du') return 20;
                                var player = get.owner(card);
                                if (ui.selected.cards.length >= Math.max(2, player.countCards('h') - player.hp)) return 0;
                                if (player.hp == player.maxHp || player.countCards('h') <= 1) {
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
                            filterCard(card, player) {
                                var suit = card.suit;
                                for (var i = 0; i < ui.selected.cards.length; i++) {
                                    if (ui.selected.cards[i].suit == suit) return false;
                                }
                                return true;
                            },
                            filter(event, player) {
                                var suits = [];
                                player.countCards('he', function (card) {
                                    if (suits.length < 4) suits.add(card.suit);
                                });
                                if (suits.length < 4) return false;
                                var stat = player.getStat();
                                if (!stat.qita_zhuyuan) return true;
                                return game.hasPlayer(function (current) {
                                    return current != player && !stat.qita_zhuyuan.includes(current);
                                });
                            },
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                var stat = player.getStat();
                                if (!stat.qita_zhuyuan) return true;
                                return !stat.qita_zhuyuan.includes(target);
                            },
                            discard: false,
                            lose: false,
                            delay: false,
                            content() {
                                'step 0';
                                var stat = player.getStat();
                                if (!stat.qita_zhuyuan) stat.qita_zhuyuan = [];
                                stat.qita_zhuyuan.push(target);
                                target.gain(cards, player, 'giveAuto');
                                ('step 1');
                                game.log(player, '获得了技能', '#g【铁骑】');
                                player.addTempSkill('qita_zhuyuan_retieji', { player: 'phaseAfter' });
                                game.log(player, '获得了技能', '#g【激昂】');
                                player.addTempSkill('qita_zhuyuan_jiang', { player: 'phaseAfter' });
                                game.log(target, '获得了技能', '#g【铁骑】');
                                target.addTempSkill('qita_zhuyuan_retieji', { player: 'phaseAfter' });
                                game.log(target, '获得了技能', '#g【激昂】');
                                target.addTempSkill('qita_zhuyuan_jiang', { player: 'phaseAfter' });
                            },
                            mod: {
                                targetInRange(card, player) {
                                    var stat = player.getStat();
                                    if (!stat.qita_zhuyuan) return true;
                                },
                                cardUsable(card, player) {
                                    var stat = player.getStat();
                                    if (stat.qita_zhuyuan) return Infinity;
                                },
                            },
                            ai: {
                                order: 5,
                                result: {
                                    target: 10,
                                },
                            },
                        },
                        qita_duocai: {
                            trigger: {
                                global: 'loseAfter',
                            },
                            filter(event, player) {
                                if (event.type != 'discard' || event.player == player) return false;
                                return event.cards && event.cards.filterInD('d').length;
                            },
                            forced: true,
                            charlotte: true,
                            content() {
                                'step 0';
                                if (trigger.delay == false && player != game.me && !player.isOnline()) game.delay();
                                var cards = trigger.cards.filterInD('d');
                                player.chooseButton([get.prompt('qita_duocai'), cards], [1, cards.length]);
                                ('step 1');
                                if (result.bool) {
                                    player.gain(result.links, 'gain2');
                                    if (result.links.length > 2) {
                                        var filterTarget = function (card, player, target) {
                                            return target != player && target.countDiscardableCards(player, 'hej') > 0;
                                        };
                                        if (
                                            game.hasPlayer(function (current) {
                                                return filterTarget(null, player, current);
                                            })
                                        ) {
                                            player.chooseTarget('弃置一名其他角色区域内的一张牌', true, filterTarget).set('ai', function (target) {
                                                var player = _status.event.player;
                                                return get.effect(target, { name: 'guohe' }, player, player);
                                            });
                                        } else event.finish();
                                    } else {
                                        if (result.links.length == 2) player.recover();
                                        else player.draw();
                                        event.finish();
                                    }
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.line(target, 'green');
                                    player.discardPlayerCard(target, 'hej', true);
                                }
                            },
                        },
                        qita_zhuyuan_retieji: {
                            group: 'retieji',
                            mark: true,
                            markimage: 'extension/花好月圆/image/qita_xiaowu_machao.jpg',
                            intro: {
                                name: '小无·铁骑',
                                content: '你使用【杀】指定一名角色为目标后,可以进行一次判定并令该角色的非锁定技失效直到回合结束,除非该角色弃置一张与判定结果花色相同的牌,否则不能使用【闪】抵消此【杀】.',
                            },
                        },
                        qita_zhuyuan_jiang: {
                            group: 'jiang',
                            mark: true,
                            markimage: 'extension/花好月圆/image/qita_xiaowu_sunce.jpg',
                            intro: {
                                name: '小无·激昂',
                                content: '每当你使用(指定目标后)或被使用(成为目标后)一张【决斗】或红色的【杀】时,你可以摸一张牌.',
                            },
                        },
                        //黄盖
                        wu_kurou: {
                            audio: 'ext:花好月圆/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            derivation: 'wu_zha',
                            prompt: '失去一点体力并摸一张牌,令一名其他角色横置并获得【诈】标记',
                            filterTarget(card, player, target) {
                                return player != target > 0;
                            },
                            check(event, player) {
                                return player.hp > 1;
                            },
                            content() {
                                'step 0';
                                player.loseHp(1);
                                ('step 1');
                                player.draw();
                                target.link(true);
                                target.addSkill('wu_zha');
                                target.addMark('wu_zha', 1);
                            },
                            ai: {
                                order: 8,
                                result: {
                                    target(player, target) {
                                        if (
                                            !game.hasPlayer(function (current) {
                                                return current != player && get.attitude(player, current) < 0 && current.hasMark('wu_zha');
                                            }) &&
                                            player.countCards('h', function (card) {
                                                return (
                                                    get.tag(card, 'damage') &&
                                                    player.canUse(card, target, null, true) &&
                                                    player.getUseValue(card) > 0 &&
                                                    get.effect_use(target, card, player) > 0 &&
                                                    target.hasSkillTag('filterDamage', null, {
                                                        player: player,
                                                        card: card,
                                                    })
                                                );
                                            })
                                        )
                                            return 3 / Math.max(1, target.hp);
                                        if (
                                            !player.hasUnknown() &&
                                            game.countPlayer(function (current) {
                                                return get.attitude(player, current) < 0;
                                            }) <= 1
                                        ) {
                                            return -1;
                                        }
                                        return 0;
                                    },
                                    player(player) {
                                        if (player.hp <= 2) return player.countCards('h') == 0 ? 1 : 0;
                                        if (player.countCards('h', { name: 'sha', color: 'red' })) return 1;
                                        return player.countCards('h') <= player.hp ? 1 : 0;
                                    },
                                },
                                effect(card, player, target) {
                                    if (get.tag(card, 'damage')) {
                                        if (player.hasSkillTag('jueqing', false, target)) return [1, 1];
                                        return 1.2;
                                    }
                                    if (get.tag(card, 'loseHp')) {
                                        if (player.hp <= 1) return;
                                        return [0, 0];
                                    }
                                },
                            },
                        },
                        wu_zha: {
                            marktext: '诈',
                            mark: true,
                            intro: {
                                name: '诈',
                                content: '锁定技,若你没有技能【诈降】(武动乾坤)且处于横置状态,当你的武将牌重置时,横置之.',
                            },
                            trigger: {
                                player: 'linkBegin',
                            },
                            forced: true,
                            audio: 'ext:花好月圆/audio:2',
                            filter(event, player) {
                                return player.isLinked() == (event.name == 'link') && player.hasSkill('wu_zha') && !player.hasSkill('wu_zhaxiang');
                            },
                            content() {
                                if (trigger.name != 'link') player.link(true);
                                else trigger.cancel();
                            },
                            ai: {
                                effect: {
                                    target(card) {
                                        if (card.name == 'tiesuo') return 'zeroplayertarget';
                                    },
                                },
                            },
                        },
                        wu_zhouyan1: {
                            audio: 'ext:花好月圆/audio:true',
                            trigger: {
                                player: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.source != player && event.source != undefined && event.source.hasSkill('wu_zha');
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                                player.loseHp();
                            },
                        },
                        wu_zhaxiang: {
                            trigger: {
                                player: 'loseHpEnd',
                            },
                            forced: true,
                            audio: 'ext:花好月圆/audio:2',
                            content() {
                                var num = trigger.num;
                                player.draw(3 * num);
                                if (_status.currentPhase == player) {
                                    if (!player.storage.wu_zhaxiang2) player.storage.wu_zhaxiang2 = 0;
                                    player.storage.wu_zhaxiang2 += num;
                                    player.addTempSkill('wu_zhaxiang2', { player: 'phaseAfter' });
                                } else {
                                    game.trySkillAudio('wu_zhaxiang', player);
                                }
                            },
                            ai: {
                                maihp: true,
                            },
                        },
                        wu_zhaxiang2: {
                            mod: {
                                targetInRange(card, player, target, now) {
                                    if (get.color(card) == 'red') return true;
                                },
                                cardUsable(card, player, num) {
                                    if (get.color(card) == 'black') return Infinity;
                                    if (card.name == 'sha') return num + player.storage.wu_zhaxiang2;
                                },
                            },
                            trigger: {
                                player: 'useCard',
                            },
                            audio: 'ext:花好月圆/audio:2',
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && get.color(event.card) == 'red';
                            },
                            content() {
                                trigger.directHit.addArray(game.players);
                            },
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    return arg.card.name == 'sha' && get.color(arg.card) == 'red';
                                },
                            },
                        },
                        wu_zhouyan2: {
                            audio: 'ext:花好月圆/audio:true',
                        },
                        wu_zhouyan3: {
                            audio: 'ext:花好月圆/audio:true',
                        },
                        wu_zhouyan4: {
                            trigger: {
                                global: ['damageAfter', 'damageCancelled', 'damageZero'],
                                player: 'dieBegin',
                            },
                            forced: true,
                            popup: false,
                            charlotte: true,
                            filter(event, player) {
                                return player.hasMark('wu_zha') && (event.name == 'die' || event.wu_zhouyan_player == player);
                            },
                            content() {
                                player.removeMark('wu_zha', player.countMark('wu_zha'));
                                if (!player.storage.wu_zha) player.removeSkill('wu_zha');
                                player.removeSkill('wu_zhouyan2');
                            },
                        },
                        wu_zhouyan: {
                            audio: 'ext:花好月圆/audio:3',
                            group: ['wu_zhouyan2', 'wu_zhouyan3', 'wu_zhouyan1'],
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.hasMark('wu_zha') && !event.player.hasSkill('wu_zhaxiang');
                            },
                            content() {
                                'step 0';
                                var target = get.translation(trigger.player);
                                player
                                    .chooseControl()
                                    .set('prompt', '舟焰:请选择一项')
                                    .set('choiceList', ['令即将对' + target + '造成的伤害+x', '弃置一名角色区域内的一张牌并令其获得一个<诈<标记,并回复x点体力', '依次执行以上所有选项,并移去' + target + '的<诈>标记'])
                                    .set('ai', function () {
                                        var evt = _status.event.getTrigger();
                                        var player = _status.event.player;
                                        var target = evt.player;
                                        var bool1 = !target.hasSkillTag('filterDamage', null, {
                                            player: player,
                                            card: evt.card,
                                        });
                                        var bool2 = get.effect(target, { name: 'guohe' }, player, player) > 0;
                                        if (bool1 && bool2 && target.hp <= evt.num + 1) return 2;
                                        if (bool1) return 0;
                                        return 1;
                                    });
                                ('step 1');
                                if (result.index == 2) {
                                    trigger.wu_zhouyan_player = trigger.player;
                                    trigger.player.addTempSkill('wu_zhouyan4');
                                }
                                if (result.index != 1) {
                                    trigger.wu_zhouyan_player = trigger.player;
                                    trigger.num += trigger.player.countMark('wu_zha');
                                }
                                if (result.index != 0) {
                                    trigger.wu_zhouyan_player = trigger.player;
                                    player.recover(trigger.player.countMark('wu_zha'));
                                    player
                                        .chooseTarget('是否弃置场上一名角色区域内的一张牌？', function (card, player, target) {
                                            return target.countDiscardableCards(player, 'hej') > 0;
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            return get.effect(target, { name: 'guohe' }, player, player);
                                        });
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.line(target);
                                    player.discardPlayerCard(target, 'hej', true);
                                    target.addMark('wu_zha', 1);
                                    target.addSkill('wu_zha');
                                }
                            },
                            ai: {
                                effect: {
                                    player(card, player, target) {
                                        if (target && get.tag(card, 'damage') && target.hasMark('wu_zha')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return;
                                            if (get.attitude(player, target) > 0) {
                                                return 0.7;
                                            }
                                            return 1.2;
                                        }
                                    },
                                },
                            },
                        },
                        //吕布
                        wu_wushuang2: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            _priority: 55,
                            filter: (event, player) => event.card && event.card.name == 'sha', //QQQ
                            content() {
                                var list = ['juedou'];
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                            },
                        },
                        wu_wushuang3: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            _priority: 55,
                            filter: (event, player) => event.card && event.card.name == 'juedou', //QQQ
                            content() {
                                var list = ['sha'];
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                            },
                        },
                        wu_wushuang: {
                            audio: 'ext:花好月圆/audio:2',
                            group: ['wu_wushuang2', 'wu_wushuang3'],
                            trigger: {
                                player: 'useCardToPlayered',
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            logTarget(trigger, player) {
                                return player == trigger.player ? trigger.target : trigger.player;
                            },
                            filter(event, player) {
                                if (event.card.name == 'juedou') return true;
                                if (event.card.name == 'sha' && event.player == player) return true;
                                return false;
                            },
                            content() {
                                if (trigger.card.name == 'juedou') {
                                    var id = (player == trigger.player ? trigger.target : trigger.player)['playerid'];
                                    var idt = trigger.target.playerid;
                                    var map = trigger.parent.customArgs;
                                    if (!map[idt]) map[idt] = {};
                                    if (!map[idt].shaReq) map[idt].shaReq = {};
                                    if (!map[idt].shaReq[id]) map[idt].shaReq[id] = 1;
                                    map[idt].shaReq[id]++;
                                } else {
                                    var id = trigger.target.playerid;
                                    var map = trigger.parent.customArgs;
                                    if (!map[id]) map[id] = {};
                                    if (typeof map[id].shanRequired == 'number') {
                                        map[id].shanRequired++;
                                    } else {
                                        map[id].shanRequired = 2;
                                    }
                                }
                            },
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if ((arg && arg.card.name != 'juedou') || (arg && Math.floor(arg.target.countCards('h', 'sha') / 2) > player.countCards('h', 'sha'))) return false;
                                    if ((arg && arg.card.name != 'sha') || (arg && arg.target.countCards('h', 'shan') > 1)) return false;
                                },
                            },
                        },
                        wu_aozhan: {
                            forced: true,
                            charlotte: true,
                            group: ['wu_aozhan_wuqi', 'wu_aozhan_fangju', 'wu_aozhan_zuoji', 'wu_aozhan_baowu'],
                            subSkill: {
                                wuqi: {
                                    mod: {
                                        cardUsable(card, player, num) {
                                            if (player.getEquip(1) && card.name == 'sha') return num + 1;
                                        },
                                    },
                                },
                                fangju: {
                                    trigger: {
                                        player: 'damageBegin4',
                                    },
                                    forced: true,
                                    audio: 'ext:花好月圆/audio:2',
                                    filter(event, player) {
                                        return event.num > 1;
                                    },
                                    content() {
                                        trigger.num = 1;
                                    },
                                },
                                zuoji: {
                                    mod: {
                                        attackRange(player, num) {
                                            return num + player.hp;
                                        },
                                    },
                                },
                                baowu: {
                                    trigger: {
                                        player: 'phaseJudgeBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.getEquip(5);
                                    },
                                    content() {
                                        trigger.cancel();
                                        game.log(player, '跳过了判定阶段');
                                    },
                                },
                            },
                        },
                        wu_shenji2: {
                            trigger: { player: 'damageEnd' },
                            forced: true,
                            popup: false,
                            content() {
                                if (trigger.xiuluolianyuji) player.recover();
                                player.removeSkill('wu_shenji2');
                            },
                        },
                        wu_shenji: {
                            mod: {
                                selectTarget(card, player, range) {
                                    if (card.name != 'sha') return;
                                    if (range[1] == -1) return;
                                    range[1] += 2;
                                },
                            },
                            trigger: { source: 'damageBegin1' },
                            forced: true,
                            audio: 'ext:花好月圆/audio:2',
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                trigger.num++;
                                trigger.xiuluolianyuji = true;
                                trigger.player.addSkill('wu_shenji2');
                            },
                        },
                        //神赵云
                        qita_juejing1: {
                            audio: 'ext:花好月圆/audio:2',
                            trigger: { player: ['dying', 'dyingAfter'] },
                            forced: true,
                            content() {
                                player.draw();
                            },
                        },
                        qita_juejing: {
                            trigger: { player: 'phaseDrawBefore' },
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                            ai: {
                                noh: true,
                            },
                            group: ['qita_juejing2', 'qita_juejing1'],
                        },
                        qita_juejing2: {
                            trigger: {
                                player: 'loseAfter',
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.name == 'gain' && event.player == player) return player.countCards('h') > 4;
                                var evt = event.getl(player);
                                if (!evt || !evt.hs || evt.hs.length == 0 || player.countCards('h') >= 4) return false;
                                var evt = event;
                                for (var i = 0; i < 4; i++) {
                                    evt = evt.getParent('qita_juejing2');
                                    if (evt.name != 'qita_juejing2') return true;
                                }
                                return false;
                            },
                            content() {
                                var num = 4 - player.countCards('h');
                                if (num > 0) player.draw(num);
                                else player.chooseToDiscard('h', true, -num);
                            },
                        },
                        qita_zhanjiang: {
                            group: ['qita_zhanjiang1'],
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.discardPile('longdanqiang') ? true : false;
                            },
                            content() {
                                var card = get.discardPile('longdanqiang');
                                if (card) {
                                    player.equip(card);
                                    player.$gain2(card);
                                }
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    if (player.getEquip('longdanqiang')) return num + 3;
                                },
                            },
                        },
                        qita_zhanjiang1: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                var players = game.filterPlayer();
                                for (var i = 0; i < players.length; i++) {
                                    if (players[i] != player && players[i].getEquip('longdanqiang')) {
                                        return true;
                                    }
                                }
                            },
                            content() {
                                var players = game.filterPlayer();
                                for (var i = 0; i < players.length; i++) {
                                    if (players[i] != player) {
                                        var e = players[i].getEquip('longdanqiang');
                                        if (e) {
                                            player.line(players[i], 'green');
                                            players[i].give(e, player);
                                        }
                                    }
                                }
                            },
                        },
                        longdanqiang_skill: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.player.countCards('e');
                            },
                            forced: true,
                            logTarget: 'player',
                            content() {
                                player.discardPlayerCard(trigger.player, 'e', get.prompt('longdanqiang_skill', trigger.player));
                            },
                            ai: {
                                expose: 0.3,
                            },
                        },
                        longdanqiang_skill1: {
                            mod: {
                                selectTarget(card, player, range) {
                                    if (card.name == 'sha' && Array.isArray(range) && range[1] != -1) range[1]++;
                                },
                            },
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && get.color(event.card) == 'red' && event.card.name == 'sha' && (player.name == 'qita_shenzhaoyun' || player.name2 == 'qita_shenzhaoyun');
                            },
                            content() {
                                trigger.directHit.addArray(game.players);
                            },
                        },
                        //赵襄
                        //感谢诗笺的代码提供
                        sp_fanghun: {
                            audio: 'ext:花好月圆/audio:2',
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
                            init(player, skill) {
                                if (!player.storage[skill]) {
                                    player.storage[skill] = true;
                                } else {
                                    return;
                                }
                                player.addMark('sp_fanghun', 1);
                            },
                            content() {
                                player.addMark('sp_fanghun', 1);
                            },
                            group: ['sp_fanghun_sha', 'sp_fanghun_draw', 'sp_fanghun_lose'],
                            subSkill: {
                                lose: {
                                    audio: 'ext:花好月圆/audio:2',
                                    trigger: {
                                        player: 'loseAfter',
                                        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.getl) {
                                            var evt = event.getl(player);
                                            return evt && get.fxCardNameArray(evt.es).includes('meiyingqiang');
                                        }
                                        return false;
                                        //return event.card&&event.card.name=="meiyingqiang";
                                    },
                                    content() {
                                        var field = undefined;
                                        if (Math.random() > 0.5) {
                                            field = 'discardPile';
                                        }
                                        var card = get.cardPile(function (card) {
                                            return get.type(card) == 'basic' && card.name != 'du';
                                        }, field);
                                        if (!card) {
                                            if (!field) {
                                                card = get.cardPile(function (card) {
                                                    return get.type(card) == 'basic' && card.name != 'du';
                                                }, 'discardPile');
                                            } else {
                                                card = get.cardPile(function (card) {
                                                    return get.type(card) == 'basic' && card.name != 'du';
                                                });
                                            }
                                        }
                                        if (card) {
                                            player.gain(card, 'gain2');
                                            game.log(player, '从' + (field == undefined ? '' : '弃') + '牌堆获得了', card);
                                        }
                                    },
                                },
                                draw: {
                                    trigger: {
                                        player: ['useCard', 'respond'],
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return event.skill == 'sp_fanghun_sha' || event.skill == 'sp_fanghun_shan';
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
                                    audio: 'ext:花好月圆/audio:2',
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
                                        if (!player.storage.sp_fanghun || player.storage.sp_fanghun < 0) return false;
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
                                        player.removeMark('sp_fanghun', 1);
                                    },
                                    ai: {
                                        respondSha: true,
                                        respondShan: true,
                                        save: true,
                                        skillTagFilter(player, tag) {
                                            if (!player.storage.sp_fanghun || player.storage.sp_fanghun < 0) return false;
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
                        zxfuhan_lose: {
                            audio: 'ext:花好月圆/audio:true',
                            trigger: {
                                player: 'loseMaxHpBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.maxHp <= 3) return true;
                                return false;
                            },
                            content() {
                                var chat = ['我也不会输给先辈们.', '继续,战斗!'].randomGet();
                                player.say(chat);
                                trigger.cancel();
                            },
                        },
                        zxfuhan_max: {
                            audio: 'ext:花好月圆/audio:true',
                            trigger: {
                                global: ['useCard', 'useSkill', 'changeHp', 'gainMaxHpAfter', 'loseMaxHpAfter', 'addJudgeAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.maxHp <= 3) return true;
                                return false;
                            },
                            content() {
                                var chat = ['我是龙魂的继承者.', '先辈们,赐予我力量吧.'].randomGet();
                                player.say(chat);
                                player.maxHp = 4;
                                player.recover(4 - player.hp);
                                player.update();
                            },
                        },
                        zx_fuhan: {
                            audio: 'fuhan',
                            group: ['zx_fuhan1', 'zxfuhan_lose', 'zxfuhan_max'],
                            initList() {
                                if (!_status.characterlist) {
                                    lib.skill.pingjian.initList();
                                }
                                _status.zx_fuhan_list = [];
                                for (var c of _status.characterlist) {
                                    _status.zx_fuhan_list.addArray(lib.character[c][3].filter((s) => lib.skill[s] && lib.translate[s] && lib.translate[s + '_info']));
                                }
                            },
                            trigger: {
                                global: 'gameDrawAfter',
                                player: 'enterGame',
                            },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            /*filter (event, player) {
                              return event.name != 'phase' || game.phaseNumber == 0;
                            },*/
                            content() {
                                if (!_status.zx_fuhan_list) {
                                    lib.skill.zx_fuhan.initList();
                                }
                                var skills = Object.keys(lib.character)
                                    .filter((v) => lib.character[v] && (lib.character[v][1] == 'shu' || lib.character[v][1] == 'shen') && Array.isArray(lib.character[v][3]) && lib.character[v][3].length)
                                    .map((v) =>
                                        lib.character[v][3].filter((n) => {
                                            var info = lib.skill[n];
                                            return info && !info.juexingji && !info.zhuSkill;
                                        })
                                    )
                                    .flat(Infinity)
                                    .filter((v) => !player.hasSkill(v) && !['马术', 'spfangzong', 'fanghun', 'spxizhan', 'refanghun', 'refuhan', 'ollongdan', 'longdan', 'xswuyan', 'wumou'].includes(v))
                                    .randomGets(2);
                                //skills.removeArray(["马术","spfangzong","spxizhan","fanghun","refanghun","refuhan","ollongdan","longdan"]);
                                for (var i of skills) player.addSkillLog(i);
                            },
                        },
                        zx_fuhan1: {
                            audio: 'fuhan',
                            initList() {
                                if (!_status.characterlist) {
                                    lib.skill.pingjian.initList();
                                }
                                _status.zx_fuhan_list = [];
                                for (var c of _status.characterlist) {
                                    _status.zx_fuhan_list.addArray(lib.character[c][3].filter((s) => lib.skill[s] && lib.translate[s] && lib.translate[s + '_info']));
                                }
                            },
                            trigger: {
                                global: 'phaseBefore',
                            },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            filter(event, player) {
                                return event.player.group == 'shen' || event.player.group == 'shu' || event.player == player;
                            },
                            content() {
                                if (!_status.zx_fuhan_list) {
                                    lib.skill.zx_fuhan.initList();
                                }
                                var skills = Object.keys(lib.character)
                                    .filter((v) => lib.character[v] && (lib.character[v][1] == 'shu' || lib.character[v][1] == 'shen') && Array.isArray(lib.character[v][3]) && lib.character[v][3].length)
                                    .map((v) =>
                                        lib.character[v][3].filter((n) => {
                                            var info = lib.skill[n];
                                            return info && !info.juexingji && !info.zhuSkill;
                                        })
                                    )
                                    .flat(Infinity)
                                    .filter((v) => !player.hasSkill(v) && !['马术', 'spfangzong', 'fanghun', 'spxizhan', 'refanghun', 'refuhan', 'ollongdan', 'longdan', 'xswuyan', 'wumou'].includes(v))
                                    .randomGets(2);
                                if (game.countPlayer((v) => v.group == 'shu') > 1) {
                                    player.addSkillLog(skills[0]);
                                } else {
                                    player.addSkillLog(skills[0]);
                                    player.addSkillLog(skills[1]);
                                }
                                //skills.removeArray(["马术","spfangzong","fanghun","spxizhan","refanghun","refuhan","ollongdan","longdan"]);
                                //for (var i of skills) player.addSkillLog(i);
                            },
                        },
                        zx_queshi: {
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            audio: 'ext:花好月圆/audio:1',
                            group: 'zx_queshi2',
                            filter(event, player) {
                                return (event.name != 'phase' || game.phaseNumber == 0) && !player.isDisabled(1);
                            },
                            content() {
                                if (!lib.inpile.includes('meiyingqiang')) {
                                    lib.inpile.push('meiyingqiang');
                                    player.equip(game.createCard('meiyingqiang', 'diamond', 12));
                                } else {
                                    var card = get.cardPile(function (card) {
                                        return card.name == 'meiyingqiang' && card != player.getEquip(1);
                                    }, 'field');
                                    if (card) player.equip(card);
                                }
                            },
                        },
                        zx_queshi1: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            audio: 'ext:花好月圆/audio:2',
                            filter(event, player) {
                                var players = game.filterPlayer();
                                for (var i = 0; i < players.length; i++) {
                                    if (players[i] != player && players[i].getEquip('meiyingqiang')) {
                                        return true;
                                    }
                                }
                            },
                            content() {
                                var players = game.filterPlayer();
                                for (var i = 0; i < players.length; i++) {
                                    if (players[i] != player) {
                                        var e = players[i].getEquip('meiyingqiang');
                                        if (e) {
                                            player.line(players[i], 'green');
                                            players[i].give(e, player);
                                        }
                                    }
                                }
                            },
                        },
                        zx_queshi2: {
                            audio: 'ext:花好月圆/audio:1',
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard(card) {
                                return card.name != 'meiyingqiang' && get.color(card) == 'red';
                            },
                            position: 'he',
                            check(card) {
                                return 6 - get.value(card);
                            },
                            onChooseToUse(event) {
                                if (game.online) return;
                                event.set(
                                    'zx_queshi2',
                                    (function () {
                                        for (var i = 0; i < ui.discardPile.childElementCount; i++) {
                                            if (ui.discardPile.childNodes[i].name == 'meiyingqiang') return true;
                                        }
                                        return game.hasPlayer(function (current) {
                                            return current.countCards('ej', 'meiyingqiang');
                                        });
                                    })()
                                );
                            },
                            filter(event, player) {
                                return event.zx_queshi2 == true;
                            },
                            content() {
                                var list = [];
                                for (var i = 0; i < ui.discardPile.childElementCount; i++) {
                                    if (ui.discardPile.childNodes[i].name == 'meiyingqiang') {
                                        list.add(ui.discardPile.childNodes[i]);
                                    }
                                }
                                game.countPlayer(function (current) {
                                    var ej = current.getCards('ej', 'meiyingqiang');
                                    if (ej.length) {
                                        list.addArray(ej);
                                    }
                                });
                                if (list.length) {
                                    var card = list.randomGet();
                                    var owner = get.owner(card);
                                    if (owner) {
                                        player.gain(card, owner, 'give');
                                        player.line(owner, 'green');
                                    } else {
                                        player.gain(card, 'log');
                                        player.$draw(card);
                                    }
                                }
                            },
                            ai: {
                                order: 8.5,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        wu_chongzhuang1: {
                            audio: 'ext:花好月圆/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            multitarget: true,
                            multiline: true,
                            filter(event, player, target) {
                                return game.players.length > 2;
                            },
                            prompt: '是否选择一名其他角色交换座次？',
                            content() {
                                'step 0';
                                game.broadcastAll(
                                    function (target1, target2) {
                                        game.swapSeat(target1, target2);
                                    },
                                    player,
                                    target
                                );
                                ('step 1');
                                player
                                    .chooseTarget('是否对一名目标角色造成1点伤害', function (card, player, target) {
                                        return _status.event.targets.includes(target);
                                    })
                                    .set('targets', targets)
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 2');
                                if (result.bool) {
                                    player.line(result.targets[0], 'thunder');
                                    result.targets[0].damage();
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (player.hasUnknown() && target != player.next && target != player.previous) return 0;
                                        var distance = Math.pow(get.distance(player, target, 'absolute'), 2);
                                        if (!ui.selected.targets.length) return distance;
                                        var distance2 = Math.pow(get.distance(player, ui.selected.targets[0], 'absolute'), 2);
                                        return Math.min(0, distance - distance2);
                                    },
                                },
                            },
                        },
                        wu_sizhan: {
                            mod: {
                                attackRange(player, num) {
                                    return num + 2;
                                },
                                maxHandcardBase(player, num) {
                                    return num + player.hujia;
                                },
                            },
                            trigger: {
                                source: 'damageBegin2',
                            },
                            forced: true,
                            audio: 'ext:花好月圆/audio:2',
                            group: 'wu_sizhan1',
                            filter(event, player) {
                                return event.player == player.next || event.player == player.previous;
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        wu_sizhan1: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            audio: 'ext:花好月圆/audio:2',
                            filter(event, player) {
                                return event.num > 1;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('wu_sizhan1'), '对一名其他角色造成x点伤害伤害', lib.filter.notMe).set('ai', function (target) {
                                    var player = _status.event.player;
                                    return get.damageEffect(target, player, player);
                                });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    target.damage(trigger.num);
                                }
                            },
                        },
                        wu_chongzhuang: {
                            trigger: {
                                player: 'useCard',
                            },
                            audio: 'ext:花好月圆/audio:2',
                            forced: true,
                            mark: true,
                            marktext: '袭',
                            init(player) {
                                player.storage.wu_chongzhuang = 0;
                                player.markSkill('wu_chongzhuang');
                            },
                            filter(event, player) {
                                return _status.currentPhase == player;
                            },
                            content() {
                                'step 0';
                                player.storage.wu_chongzhuang += 1;
                                ('step 1');
                                var num = Math.min(5, player.hujia + player.hp);
                                if (player.storage.wu_chongzhuang > num) {
                                    player.chooseTarget(
                                        '选择攻击距离内任意名其他角色对其造成1点伤害',
                                        [1, Infinity],
                                        function (card, player, target) {
                                            return target != player && get.distance(player, target, 'attack') <= 1;
                                        },
                                        function (target) {
                                            return -get.attitude(_status.event.player, target);
                                        }
                                    );
                                }
                                ('step 2');
                                if (result.bool) {
                                    event.targets = result.targets;
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (targets && targets.length) {
                                    player.line(targets, 'fire');
                                    for (var i = 0; i < targets.length; i++) {
                                        targets[i].damage();
                                    }
                                }
                            },
                            group: ['wu_chongzhuang_1', 'wu_chongzhuang1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    popup: false,
                                    filter(event, player) {
                                        return player.storage.wu_chongzhuang > 0;
                                    },
                                    forced: true,
                                    _priority: 20,
                                    content() {
                                        var nh = player.storage.wu_chongzhuang;
                                        player.storage.wu_chongzhuang -= nh;
                                    },
                                },
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        wu_qiangxi: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            audio: 'ext:花好月圆/audio:2',
                            group: 'wu_qiangxi1',
                            usable: 3,
                            forced: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                player.changeHujia(trigger.num);
                            },
                            ai: {
                                damageBonus: true,
                            },
                        },
                        wu_qiangxi1: {
                            audio: 'ext:花好月圆/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.hujia ? true : false;
                            },
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                return player.inRange(target);
                            },
                            selectTarget() {
                                return [1, _status.event.player.hujia];
                            },
                            contentBefore() {
                                player.changeHujia(-targets.length);
                            },
                            prompt: '选择至多护甲数的角色对其造成一点伤害',
                            content() {
                                target.damage();
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        var eff = get.damageEffect(target, player, target) + 0.5;
                                        if (eff > 0 && eff <= 0.5) return 0;
                                        return eff;
                                    },
                                },
                            },
                        },
                    },
                    translate: {
                        hua_jizhi: '集智',
                        hua_jizhi_info: '<li>锁定技,每当你使用或打出一张非转化锦囊牌,你摸一张牌;<li>当其他角色使用的【无懈可击】结算完成后,你可以令其摸一张牌,你获得该【无懈可击】;<li>锁定技,当你进行判定后,若判定结果为锦囊牌,你立即获得该牌.',
                        hua_jizhi2: '集智',
                        hua_jizhi2_info: '',
                        hua_jizhi3: '集智',
                        hua_jizhi3_info: '',
                        hua_tongxin: '同心',
                        hua_tongxin_info: '当一名角色回复体力后,你可以获得一枚<同心>标记,你与其各摸一张牌并各获得一点护甲.',
                        hua_fanxiang: '返乡',
                        hua_fanxiang_info: '觉醒技,当你发动【同心】后,若你的<同心>标记数不小于4,你增加一点体力上限,回复一点体力,获得技能和【枭姬】和【剑舞】.',
                        hua_xiaoji: '枭姬',
                        hua_xiaoji_info: '锁定技,每当你失去一张装备牌,你可以摸两张牌,若此时在你的回合内,你额外摸一张牌.锁定技,若你装备了武器牌,你的回合内使用杀没有次数限制.',
                        奇才: '奇才',
                        奇才_info: '<li>锁定技,你的锦囊牌无视距离且不能被【无懈可击】响应;<li>锁定技,弃牌阶段,你的非基本牌不计入手牌上限;<li>锁定技,你使用带有【应变】标签的牌可以无视条件直接生效.',
                        hua_wusheng: '武圣',
                        hua_wusheng_info: '锁定技,你使用的【杀】无视防具且♥️️【杀】伤害＋1,♦️️【杀】不可被闪避,黑色【杀】造成伤害后你摸一张牌.',
                        hua_paoxiao: '咆哮',
                        hua_paoxiao_info: '锁定技,出牌阶段每你使用【杀】无次数限制;你使用【杀】指定目标时,若目标角色有牌,你可以弃置其一张牌.',
                        hua_longdan: '龙胆',
                        hua_longdan_info: '出牌阶段限两次,你可以弃置一张牌并指定一名其他角色,你视为对其使用了一张无视距离的♥️️【杀】,若此杀对其造成了伤害,你摸一张牌;若此杀被闪抵消,你获得其一张牌.',
                        hua_tieqi: '铁骑',
                        hua_tieqi_info: '锁定技,当你使用【杀】造成伤害后,你弃置受到伤害的角色的一张牌,若你弃置的牌为黑色,你视为对其再使用一张【杀】;若为红色你摸一张牌.',
                        hua_liegong: '烈弓',
                        hua_liegong_info: '锁定技,每回合你的第一张【杀】不可被闪避,之后每张【杀】的伤害＋1.',
                        hua_wanrou: '婉柔',
                        hua_wanrou_info: '当你失去♦️️牌或你判定区内的延迟锦囊离开你的判定区时,你可以令1名角色摸1张牌.',
                        hua_wanrou2: '婉柔',
                        hua_wanrou2_info: '',
                        马术: '马术',
                        马术_info: '锁定技,你计算与其他角色的距离时-1.',
                        hua_tianxiang: '天香',
                        hua_tianxiang_info: '当你受到伤害时,你摸一张牌,你可以弃置一张♥️️手牌,防止此次伤害并选择一名其他角色,你选择一项:1.令其受到伤害来源对其造成的X点伤害,摸Y张牌(Y为其已损失体力值);2.令其失去X点体力,获得你弃置的牌.(X为本次伤害点数)',
                        hua_beige: '悲歌',
                        hua_beige_info: '当有角色受到【杀】造成的伤害后你摸一张牌,你可以弃一张牌,并令其进行一次判定,若判定结果为:♥️️该角色回复X点体力(X为伤害点数);♦️️︎该角色摸三张牌;♣️️伤害来源弃三张牌;♠️️伤害来源将其武将牌翻至背面并失去一点体力',
                        hua_moshi: '默识',
                        hua_moshi_info: '结束阶段开始时,你可以将一张手牌当你本回合出牌阶段使用的基本牌(不包括酒)或非延时类锦囊牌使用.',
                        hua_chenqing: '陈情',
                        hua_chenqing_info: '当一名角色处于濒死状态时,你可以令一名角色(非濒死)摸六张牌,弃置四张牌.若其以此法弃置的四张牌花色各不相同,则视为该角色对濒死的角色使用一张【桃】',
                        hua_hongyan: '红颜',
                        hua_hongyan_info: '锁定技,你区域内的黑色牌和黑色判定牌均视为♥️️.当你于回合外正面朝上失去♥️️牌后,你摸两张牌.',
                        hua_lijian: '离间',
                        hua_lijian_info: '出牌阶段限两次,你可以弃置一张手牌并指定两名角色进行拼点,拼点赢的角色对没赢的角色造成一点伤害,之后各弃置一张牌',
                        hua_qingguo: '倾国',
                        hua_qingguo_info: '锁定技,你使用或打出黑色牌没有距离限制.你可以将一张黑色牌当做【闪】使用或打出.',
                        hua_luoshen: '洛神',
                        hua_luoshen_info: '准备和结束阶段,你可以进行判定,若为红色则可以继续判定,直到出现黑色.你获得所有红色的判定牌.锁定技,你判定结果的♣️️牌均视为♥️️,你可以立即获得你的黑色判定牌,你通过〖洛神〗获得的牌,不计入当前回合的手牌上限.',
                        hua_fengpo: '凤魄',
                        hua_fengpo_info: '当你使用杀或决斗指定目标时,你可以选择以下一项:1.令本次伤害+Z 2.摸Z张牌(Z=你手中红色牌的数量)',
                        hua_guose: '国色',
                        hua_guose_info: '出牌阶段,你可以选择一项:将一张♦️️牌当做【乐不思蜀】使用;或弃置一张♦️️牌并弃置场上的一张【乐不思蜀】.选择完成后,你摸一张牌.锁定技,当其他角色跳过出牌阶段后,你摸一张牌.',
                        hua_haowu: '好武',
                        hua_haowu_info: '可以将两张装备合成一件装备(保留原来两张装备的效果).',
                        hua_shuyou: '蜀佑',
                        hua_shuyou_info: '锁定技.回合开始前声明一个五虎将,获得其相应的技能(技能详情见五虎蜀魂)、相应的装备和一张【杀】.',
                        hua_jianwu: '剑舞',
                        hua_jianwu_info: '出牌阶段限一次,你可以选定场上任意一名角色的装备区的非特殊牌,出自己的一张手牌复制该装备,可以选择装备上自己或者别的角色的装备区',
                        hua_jiaohua: '娇花',
                        hua_jiaohua_info: '出牌阶段限两次,你的♥️️手牌可以当做无中生有使用;锁定技,你使用的无中生有无法被无懈可击响应.',
                        hua_tianzi: '天姿',
                        hua_tianzi_info: '摸牌阶段,你可以放弃摸牌,令所有其他角色依次选择一项:1、交给你一张牌;2、令你摸一张牌.',
                        hua_fangxin: '芳馨',
                        hua_fangxin_info: '当你需要使用一张【桃】时,你可以将一张♣️️牌当【兵粮寸断】或将一张♦️️牌当【乐不思蜀】对自己使用,若如此做,视为你使用一张【桃】.',
                        hua_liuli: '流离',
                        hua_liuli_info: '当你成为[杀]的目标时你摸一张牌,可以弃置一张牌将其转移给一名其他角色(此角色不能是[杀]的使用者);锁定技,你计算与其他角色距离为1',
                        hua_biyue: '闭月',
                        hua_biyue_info: '准备和结束阶段,你可以摸一张牌,若你的装备区没有牌,则改为摸两张牌.',
                        hua_huaqiu: '华秋',
                        hua_huaqiu_info: '锁定技,每当你成为红色牌的目标,你可以摸一张牌.锁定技,你的手牌上限始终为7.',
                        hua_jiqiao: '机巧',
                        hua_jiqiao_info: '出牌阶段开始时,你可以弃置任意张装备牌,亮出牌堆顶两倍数量的牌并获得其中的非装备牌.',
                        hua_linglong: '玲珑',
                        hua_linglong_info: '锁定技,若你的装备区没有武器牌,则你使用【杀】的次数上限+1;若你的装备区没有防具牌,视为你装备着【八卦阵】;若你的装备区没有坐骑牌,你的手牌上限+1;若你的装备区没有宝物牌,你计算与其他角色的距离-1.',
                        hua_guose2: '国色',
                        hua_guose2_info: '',
                        hua_lihun: '离魂',
                        hua_lihun_info: '出牌阶段限一次,你可以弃置一张牌并选择一名其他角色.若如此做,你将武将牌翻面并获得其所有手牌和装备区的所有牌.出牌阶段结束时,你交给其X张牌.(X为该角色的体力值)',
                        qita_hhyy: '花好月圆',
                        qita_hhyy_info: '扩展技,此技能不会失效且主将或副将为武将系列【花好月圆】或【娱乐武将】或【繁星】时才能发动.<li>锁定技,在你成为红色牌的目标后,你可以回复一点体力.<li>锁定技,若你于出牌阶段使用的牌数不大于你的体力值,则你本回合的手牌上限为你的体力值的4倍并摸x+1张牌.(x为你已损失的体力值.)',
                        qita_hhyy_1: '花好月圆',
                        qita_hhyy_1_info: '',
                        hua_zhenlie: '贞烈',
                        hua_zhenlie_info: '锁定技,每当你成为其他角色的卡牌的目标时,你可以失去2点体力摸一张牌回复1点体力取消之,弃置对方2张牌;锁定技,你的手牌上限为体力值与体力上限之和',
                        hua_miji: '秘计',
                        hua_miji_info: '准备和结束阶段开始时,若你已受伤,则可以摸X张牌,可以将等量的牌交给一名其他角色(X为你已损失的体力值).',
                        hua_xianji: '险计',
                        hua_xianji_info: '其他角色回合开始时,你可以获得1张随机桃/酒/南蛮入侵/万箭齐发/兵粮寸断/乐不思蜀/顺手牵羊/过河拆桥/无中生有/无懈可击/良缘,若如此做你失去1点体力.锁定技,当场上有角色失去体力后,你摸一张牌.',
                        hua_xianji2: '险计',
                        hua_xianji2_info: '',
                        hua_shangshi: '伤势',
                        hua_shangshi_info: '<li>锁定技,当你的手牌数小于X时,你立即将手牌补至X张(X为你已损失的体力值+2);<li>每当你受到伤害,你可以弃置任意张牌.<li>锁定技,你的回合开始时,若你的手牌数大于你的体力值,那本回合你使用杀没有次数限制.',
                        hua_shangshi_2nd: '伤势',
                        hua_shangshi_2nd_info: '',
                        huashangshi: '伤势',
                        hua_jueqing: '绝情',
                        hua_jueqing_info: '<li>锁定技,你造成的伤害可以视为体力流失.<li>锁定技,当你受到伤害后,你可以对伤害来源造成1点伤害.<li>其他角色的回合结束后,你可以将你的一张牌当做无视距离的冰属性【杀】对其使用.<li>锁定技,你使用或打出的冰属性【杀】无视防具.',
                        hua_jueqing_1: '绝情',
                        hua_jueqing_1_info: '',
                        hua_jueqing_2: '绝情',
                        hua_jueqing_2_info: '',
                        hua_xingshang: '行殇',
                        hua_xingshang_info: '锁定技,当其他角色死亡后,你摸3张牌并回复1点体力',
                        hua_wendi: '文帝',
                        hua_wendi_info: '锁定技,当其他角色死亡后,你增加副将甄姬并摸三张牌增加一点体力上限,失去此技能',
                        hua_fangzhu: '放逐',
                        hua_fangzhu_info: '每当你受到伤害时,你可令伤害来源翻面,之后令伤害来源进行判定,若为黑色其失去x点体力(x为伤害点数),若为红色,你摸2张牌回复一点体力',
                        hua_songwei: '颂威',
                        hua_songwei_info: '其他角色判定结果若为黑色,可让你摸一张牌',
                        qita_mdtx: '谋定天下',
                        qita_mdtx_info: '扩展技,此技能不会失效且主将或副将为武将系列【谋定天下】或【娱乐武将】时才能发动.<li>锁定技,在你成为普通锦囊牌的目标后,你摸一张牌.<li>锁定技,若你于出牌阶段使用的牌数不大于你的体力值,则你本回合的手牌上限为体力值的4倍并摸x+1张牌.(x为你已损失的体力值.)',
                        qita_mdtx_1: '谋定天下',
                        qita_mdtx_1_info: '',
                        mou_quhu: '驱虎',
                        mou_quhu_info: '出牌阶段限三次,你可以与一名体力不等于你的角色拼点,若你赢,则该角色对另一名由你指定的角色造成两点伤害.若你没赢,该角色对你造成一点伤害.',
                        mou_jieming: '节命',
                        mou_jieming_info: '当你受到1点伤害或流失体力后,你可以令一名角色摸三张牌.若其手牌数小于体力上限,则你摸一张牌,增加一点体力上限并回复两点体力.',
                        mou_fankui: '反馈',
                        mou_fankui_info: '每当你受到1点伤害后,你可以获得伤害来源区域内的各1张牌并令其失去一点体力,你摸一张牌.',
                        mou_guicai: '鬼才',
                        mou_guicai_info: '在任意角色的判定牌生效前,你摸一张牌,可以打出一张牌代替之',
                        mou_guicai1: '鬼才',
                        mou_guicai1_info: '在任意角色的判定牌生效前,你摸一张牌,可以打出一张牌代替之',
                        mou_lianpo: '连破',
                        mou_lianpo_info: '一名角色的回合结束时,若你本回合内击杀过角色,则你可以摸3张牌并进行一个额外的回合.',
                        mou_baiyin: '拜印',
                        mou_baiyin_info: '觉醒技,当你受到伤害或准备阶段开始时,若你的<忍>标记数不小于4,你摸等量<忍>数量的牌并增加1点体力上限,获得〖集智〗〖制衡〗〖完杀〗〖放逐〗,失去〖忍戒〗〖反馈〗',
                        mou_renjie: '忍戒',
                        mou_renjie_info: '锁定技,当你受到1点伤害后,你获得一枚<忍>标记;锁定技,当你于弃牌阶段内弃置牌后,你获得等同于失去的牌数量的<忍>标记.',
                        mou_rejie2: '忍戒',
                        mou_rejie2_info: '',
                        mou_zhiheng: '制衡',
                        mou_zhiheng_info: '出牌阶段限一次,你可以弃置任意张牌,观看牌堆顶双倍数量的牌,你获得其中的X＋1张牌,最后将其余的牌置于牌堆底(X为你弃置的牌数).若你的装备区有牌,你额外展示等同于你装备区牌数的牌并额外获得等量的牌.',
                        mou_fangzhu: '放逐',
                        mou_fangzhu_info: '锁定技,当你受到伤害或流失体力后,你令所有敌方角色:有手牌的弃置一张手牌,无手牌的翻面.',
                        qita_wansha: '完杀',
                        qita_wansha_info: '锁定技,你的回合内,除你以外,不处于濒死状态的角色不能使用【桃】.',
                        qita_wansha2: '完杀',
                        qita_wansha2_info: '',
                        mou_jizhi: '集智',
                        mou_jizhi_info: '锁定技,每当你使用或打出一张锦囊牌,你可以摸一张牌;锁定技,当你进行判定后,若判定结果为锦囊牌,你立即获得该牌.',
                        mou_jizhi2: '集智',
                        mou_jizhi2_info: '',
                        mou_weimu: '帷幕',
                        mou_weimu_info: '锁定技,当你成为其他角色的黑色牌的目标后,你令使用者与目标对调.锁定技,你使用的普通锦囊牌不能被【无懈可击】响应;你不能成为延时锦囊牌的目标;防止你回合内受到的伤害、体力流失.',
                        mou_wansha: '完杀',
                        mou_wansha_info: '锁定技,其他角色进入濒死状态时,你获得使其进入濒死状态的牌.锁定技,你的回合内,除你以外,不处于濒死状态的角色不能使用【桃】和【酒】.',
                        mou_wansha1: '完杀',
                        mou_wansha2: '完杀',
                        mou_weimu2: '帷幕',
                        mou_weimu3: '帷幕',
                        mou_weimu2_info: '',
                        mou_jianshu: '间书',
                        mou_jianshu_info: '限定技,出牌阶段,你可以将一张黑色手牌交给一名其他角色,并选择另一名其他角色,令这两名角色拼点.赢的角色弃置两张牌并失去一点体力,没赢的角色失去一点体力上限.',
                        mou_yongdi: '拥嫡',
                        mou_yongdi_info: '当你受到伤害时,你可令一名角色增加一点体力上限并回复1点体力,若该角色的武将牌上有主公技且其不为主公,其获得此主公技.',
                        mou_luanwu: '乱武',
                        mou_luanwu_info: '出牌阶段限一次,你可令除你外的所有角色依次对与其距离最近的另一名角色使用一张黑色的【杀】,否则失去1点体力.',
                        mou_dimeng: '缔盟',
                        mou_dimeng_info: '锁定技,你的回合内,其他角色的手牌对你可见;出牌阶段限一次或当你受到伤害时,你可以置换任意两名角色的手牌',
                        mou_dimeng2: '缔盟',
                        mou_dimeng2_info: '',
                        mou_dimeng3: '缔盟',
                        mou_dimeng3_info: '',
                        mou_haoshi: '好施',
                        mou_haoshi_info: '锁定技,摸牌阶段你额外摸两张牌并回复一点体力.出牌阶段限一次,你可以令一名角色获得你的全部手牌,你摸2张牌;回合结束后你可以摸3张牌',
                        mou_haoshi2: '好施',
                        mou_haoshi2_info: '',
                        mou_haoshi3: '好施',
                        mou_haoshi3_info: '',
                        mou_tiandu: '天妒',
                        mou_tiandu_info: '锁定技,你的判定阶段开始时,你进行一次额外的【闪电】判定;你可以立即获得你的判定牌,摸x张牌(x为你已损失的体力且至少为1)',
                        mou_tiandu2: '天妒',
                        mou_tiandu2_info: '',
                        mou_yice: '遗策',
                        mou_yice_info: '锁定技,当你进入濒死状态时,你进行一次判定,若结果不为♥️️,你将体力回复至1;回合开始时,你可以观看牌堆顶两张牌,获得其中一张牌,并展示之,若该牌为基本牌,你获得技能<马术>直到回合结束,且本回合你可以多使用一张杀;若不为基本牌,你弃置你武将上的判定牌,摸一张牌',
                        mou_yice2: '遗策',
                        mou_yice2_info: '',
                        mou_yiji: '遗计',
                        mou_yiji_info: '锁定技,当你受到一点伤害后,你可以摸三张牌,可以将任意张手牌交给其他角色;锁定技,你的手牌上限为体力值的10倍',
                        mou_yingzi: '英姿',
                        mou_yingzi_info: '锁定技,当你摸牌时,你额外摸一张牌;锁定技,你的手牌上限为你的体力上限和体力值之和.',
                        mou_fanjian: '反间',
                        mou_fanjian_info: '出牌阶段限一次,你可以交给一名有手牌的其他角色一张手牌,令其选择一项:1. 将手牌和装备区中与此牌花色相同的牌(至少一张)交给你;2. 弃置手牌和装备区中与此牌花色不同的牌(至少一张);3. 失去一点体力',
                        mou_yeyan: '业炎',
                        mou_yeyan_info: '每轮出牌阶段限一次,你可以对一至三名角色造成至多共3点火焰伤害(你可以任意分配每名目标角色受到的伤害点数),若你将对一名角色分配2点或更多的火焰伤害,你须先弃置四张不同花色的手牌再失去2点体力.',
                        mou_qinyin: '琴音',
                        mou_qinyin_info: '弃牌阶段结束时,若你于此阶段内弃置过两张或更多的牌,则你可以选择一项:1. 你令所有角色各回复1点体力你获得场上人数的护甲;2. 你令所有角色各失去1点体力你回复场上人数的体力.',
                        wu_wusheng: '武圣',
                        wu_wusheng_info: '你可以将一张红色牌当做【杀】使用或打出.锁定技,你使用的【杀】无视防具且♥️️【杀】伤害＋1,♦️️【杀】无视距离且不可被闪避,黑色【杀】造成伤害后你摸一张牌.',
                        wu_yijue: '义绝',
                        wu_yijue_info: '出牌阶段限一次,你可以弃置一张牌并令一名有手牌的其他角色展示一张手牌.若此牌为黑色,则该角色不能使用或打出牌,非锁定技失效且受到来自你的【杀】的伤害+1直到回合结束.若此牌为红色,则你可以获得此牌摸一张牌,并可以令其回复一点体力(若令其回复了体力你摸一张牌).',
                        wu_yijue2: '义绝',
                        wu_yijue2_info: '',
                        mou_huoji: '火计',
                        mou_huoji_info: '出牌阶段,你可将一张红色牌当作【火攻】使用;你可以将你所造成的非属性伤害变为火焰伤害.',
                        mou_huoji2: '火计',
                        mou_huoji2_info: '',
                        mou_kanpo: '看破',
                        mou_kanpo_info: '你可以将你的黑色牌当【无懈可击】使用.锁定技,你使用或打出的黑色锦囊不能被无懈可击响应且你不能成为其他角色延迟锦囊的目标',
                        mou_kanpo2: '看破',
                        mou_kanpo2_info: '',
                        mou_bazhenx: '玄阵',
                        mou_bazhenx_info: '锁定技,当你成为其他角色带有伤害标签的牌的目标时你进行一次判定,根据判定结果获得效果:红色,此牌对你无效;黑色,你摸一张牌;♠️️,视为对使用者使用了一张【杀】;♣️️,你弃置使用者的一张牌;♦️️,你摸一张牌并获得判定牌;♥️️,你回复一点体力.',
                        mou_bazhen: '八阵',
                        mou_bazhen_info: '锁定技,若你的防具栏内没有牌且没有被废除,则你视为装备着【先天八卦阵】.',
                        mou_bagua: '先天八卦',
                        mou_bagua_info: '',
                        mou_kuangfeng: '狂风',
                        mou_kuangfeng_info: '游戏开始时,你获得3个<狂风>标记.出牌阶段,你可以交给一名其他角色一个<狂风>标记,你对有<狂风>标记的角色造成火焰伤害时,此伤害+1.锁定技,其他角色因火焰伤害进入濒死状态,若其体力值小于0,你获得一个【狂风】标记',
                        mou_dawu2: '大雾',
                        mou_dawu2_info: '',
                        mou_dawu: '大雾',
                        mou_dawu_info: '锁定技,当场上有角色受到1点雷电伤害后,你摸一张牌,将一张手牌置于武将牌上,称为<雾>;结束阶段开始时,你可以将至少一张<雾>置入弃牌堆并选择等量的角色,若如此做,其于你的下回合开始之前受到的非雷电伤害结算开始时,你防止此伤害.',
                        mou_dawu3: '大雾',
                        mou_dawu3_info: '',
                        mou_dawu4: '大雾',
                        mou_dawu4_info: '',
                        mou_xingxiang: '星象',
                        mou_xingxiang_info: '锁定技,当你造成火焰伤害时,你摸一张牌.锁定技,当你受到伤害后,你摸一张牌将一张手牌置于武将牌上,称为<雾>.',
                        mou_xingxiang2: '星象',
                        mou_xingxiang2_info: '',
                        mou_xuming: '续命',
                        mou_xuming_info: '觉醒技,当你进入濒死时,你摸三张牌并增加一点体力上限,并将体力回复至2,获得【观星】和【帷幄】.',
                        mou_weiwo: '帷幄',
                        mou_weiwo_info: '锁定技,弃牌阶段,你的锦囊牌不计入手牌上限.',
                        qita_wdqk: '武动乾坤',
                        qita_wdqk_info: '扩展技,此技能不会失效且主将或副将为武将系列【武动乾坤】或【娱乐武将】时才能发动.<li>锁定技,当你使用【杀】、【决斗】指定目标或成为的【杀】、【决斗】目标时你摸一张牌.<br>锁定技,若你于出牌阶段使用的牌数不大于你的体力值,则你本回合的手牌上限为体力值的4倍并摸x+1张牌.(x为你已损失的体力值.)',
                        qita_wdqk_1: '武动乾坤',
                        qita_wdqk_1_info: '',
                        wu_tianyi: '天义',
                        wu_tianyi_info: '出牌阶段限一次,你可以和一名角色拼点,若你赢,该角色的非锁定技失效直到你的回合结束,你获得一张杀并获得以下技能效果直到回合结束:你使用杀没有距离限制;可额外使用一张【杀】;使用【杀】时可额外指定任意名目标,若你没赢,你摸2张牌并回复1点体力.',
                        wu_tianyi2: '天义',
                        wu_tianyi2_info: '锁定技,你使用杀没有距离限制,出牌阶段可以多出一张杀,使用杀时可以额外指定任意名目标.',
                        wu_hanzhan: '酣战',
                        wu_hanzhan_info: '<li>当你发起拼点时,或成为拼点的目标时,你可以令对方选择拼点牌的方式改为随机选择一张手牌.<br><li>当其他角色与你拼点的牌亮出后,你可以令此牌的点数+3或-3.(至多为K,至少为1).',
                        wu_hanzhan2: '酣战',
                        wu_hanzhan2_info: '',
                        wu_longdan: '龙胆',
                        wu_longdan_info: '<li>你可以将【杀】当【闪】,【闪】当【杀】、【酒】当做【桃】、【桃】当做【酒】使用或打出.<li>当你发动〖龙胆〗使用的【杀】被【闪】抵消时,你可以对另一名角色造成1点伤害;当你发动〖龙胆〗使用的【闪】抵消了【杀】时,你可以令一名角色回复1点体力(不能是【杀】的使用者).<li>你使用【杀】造成伤害时,你摸一张牌;当你使用的【杀】被【闪】抵消时,你获得对方一张牌.',
                        wu_longdan_1: '龙胆',
                        wu_longdan_1_info: '你可以将一张【杀】当做【闪】、【闪】当做【杀】、【酒】当做【桃】、【桃】当做【酒】使用或打出',
                        wu_yajiao: '涯角',
                        wu_yajiao_info: '<li>锁定技,回合结束时,你摸x张牌(x为你回合内使用的牌数).<li>当你于回合外因使用或打出而失去手牌后,你可以展示牌堆顶的一张牌.若这两张牌的类别相同,你可以将展示的牌交给一名角色;若类别不同,你可弃置场上一名角色区域里的一张牌.',
                        wu_yajiao_1: '涯角',
                        wu_yajiao_1_info: '',
                        mou_lianhuan: '连环',
                        mou_lianhuan_info: '<li>回合开始时,你可以横置至多2名未横置角色的武将牌<li>你可以将一张♣️️牌当做【铁锁连环】使用,你可以将一张♣️️牌置入弃牌堆并摸一张牌,你回复一点体力;<li>锁定技,你使用的【铁锁连环】没有指定数量限制,你♠️️牌的花色均视为♣️️.<li>当你受到伤害,你令任意名未横置角色进入连环状态,你回复体力时若你的体力值大于或等于3则你可以对一名横置角色造成1点火焰伤害',
                        mou_lianhuan3: '连环',
                        mou_niepan: '涅槃',
                        mou_niepan_info: '限定技,当你处于濒死状态时,你可以弃置你区域内的所有牌并复原你的武将牌,摸三张牌并将体力回复至3点.你选择获得以下技能中的一个:〖八阵〗/〖火计〗/〖看破〗',
                        mou_lianhuan2: '连环',
                        mou_lianhuan2_info: '',
                        mou_lianhuan4: '连环',
                        mou_lianhuan4_info: '',
                        mou_lianhuan7: '连环',
                        mou_lianhuan7_info: '',
                        mou_lianhuan6: '连环',
                        mou_lianhuan6_info: '',
                        mou_lianhuan5: '连铸',
                        mou_lianhuan5_info: '',
                        wu_liegong: '烈弓',
                        wu_liegong_info: '<li>锁定技,你使用【杀】无视防具且可以选择你距离不大于此【杀】点数的角色为目标<li>你的回合开始和结束你可以弃置你区域内的一张牌,视为打出一张无视距离的【杀】<li>每当你不因为此效果使用【杀】指定目标结算后,你可以展示牌堆顶的三张牌,并将这三张牌弃置,若其中有基本牌则视为你对目标再出一张【杀】.<li>锁定技,每当其他角色回复体力后都会使你摸一张牌.你获得此技能开始每回合的首张【杀】不可被闪避,之后的每张【杀】造成的伤害+1',
                        fx_wdqk: '武动乾坤',
                        fx_wdqk_info: '作者技,此技能当【繁星】为主将或者副将时才能发动.<li>锁定技,你对其他角色造成的伤害翻倍,你使用牌无距离限制且无视目标防具.<li>锁定技,当你成为杀的目标或者当你用杀指定目标时,你摸一张牌',
                        fx_mdtx: '谋定天下',
                        fx_mdtx_info: '作者技,此技能当【繁星】为主将或者副将时才能发动.<li>锁定技,当你使用锦囊牌时,你可以摸一张牌.若此牌为基本牌,则你可以弃置之,令本回合手牌上限+2.<li>当其他角色使用的【无懈可击】结算完成后,你可以令其摸一张牌,你获得该【无懈可击】;<li>锁定技,当你进行判定后,若判定结果为锦囊牌,你立即获得该牌.<li>锁定技,当你成为锦囊牌的目标时,你摸一张牌.',
                        hhyy_zuozheji: '作者技·花好月圆',
                        hhyy_zuozheji_info: '锁定技,此技能当【繁星】为主将或者副将时才能发动.<li>锁定技,你的回合开始或者回合结束,你随机获得扩展【花好月圆】武将分类【花好月圆】未获得过的武将的一个技能(部分技能除外).<li>锁定技,当你造成伤害后或受到伤害后,你随机获得扩展【花好月圆】武将分类【谋定天下】一个未获得过的武将的一个技能(部分技能除外).<li>锁定技,每轮开始时,你随机获得扩展【花好月圆】武将分类【武动乾坤】一个未获得过的武将的一个技能(部分技能除外).',
                        hhyy_zuozheji2: '作者技·谋定天下',
                        hhyy_zuozheji2_info: '',
                        hhyy_zuozheji3: '作者技·武动乾坤',
                        hhyy_zuozheji3_info: '',
                        mou_qianxun: '谦逊',
                        mou_qianxun_info: '<li>锁定技,当你成为【顺手牵羊】或延时锦囊牌的目标时,取消之.<li>每当一张延时类锦囊牌或其他角色使用的普通锦囊牌生效时,若你是此牌的目标,你可以将所有手牌置于你的武将牌上,若如此做,此回合结束时,你获得你武将牌上的所有牌.',
                        mou_qianxun2: '谦逊',
                        mou_qianxun2_info: '',
                        mou_qianxun3: '谦逊',
                        mou_qianxun3_info: '',
                        mou_lianying: '连营',
                        mou_lianying_info: '<li>锁定技,你的出牌阶段开始前,若场上有处于横置状态的角色,则本回合你使用或打出杀没有数量限制.<li>锁定技,你对已横置角色造成的属性伤害+1.<li>当你失去最后的手牌时,你可以使任意名角色摸x张牌(x为其体力上限).',
                        mou_lianying2: '连营',
                        mou_lianying1: '连营',
                        mou_lianying2_info: '',
                        hhyy_fengyin: '封印·神',
                        wu_tieqi: '铁骑',
                        wu_tieqi_info: '<li>锁定技,出牌阶段开始时,你获得一张【杀】.<li>当你使用【杀】指定一名角色为目标后,你可以进行一次判定并令该角色的技能失效(带charlotte标签的除外)直到回合结束,如果该角色拥有与判定花色相同的手牌,则该角色弃置所有与判定结果花色相同的牌,否则不能使用【闪】抵消此【杀】.若判定结果为♠️️️,则此伤害+1.<li>当你的杀造成伤害后,你可以弃置受到你【杀】伤害的角色的一张牌,若弃置的牌为黑色,则视为你对其再用一张【杀】,若弃置的牌为红色,则你摸一张牌.',
                        wu_tieqi_2: '铁骑',
                        wu_shichou: '誓仇',
                        wu_shichou_info: '<li>锁定技,你计算与其他角色距离时-1.<li>锁定技,你与体力值不大于你的角色的距离视为1.<li>当你使用【杀】时,你可以令至多X名角色也成为此【杀】的目标.(X为你已损失的体力值且至少为1)',
                        wu_qixi: '奇袭',
                        wu_qixi_info: '<li>你可以将一张牌当做【过河拆桥】使用.<li>出牌阶段限4次,你可以将一张红色牌当【逐近弃远】使用.<li>出牌阶段限2次,你可以令任意名其他角色各弃置一张手牌,你可以从弃置的牌中选择一张加入手牌.<li>锁定技,你造成伤害时,若受到伤害的角色没有手牌,则此伤害+1.',
                        wu_qixi1: '奇袭·逐',
                        wu_qixi1_info: '',
                        wu_qixi2: '奇袭·拆',
                        wu_qixi2_info: '',
                        wu_fenwei: '奋威',
                        wu_fenwei_info: '<li>当一名角色使用的锦囊牌指定了至少两名角色为目标时,你可以令此牌对其中任意名角色无效.<li>锁定技,你不能被延迟类锦囊选中.<li>结束阶段,你可以对一名本回合内失去过牌的角色造成1点伤害.',
                        wu_fenwei2: '奋威',
                        wu_fenwei2_info: '',
                        wu_qixi3: '奇袭',
                        wu_qixi3_info: '',
                        wu_paoxiao: '咆哮',
                        wu_paoxiao_info: '<li>锁定技,你使用【杀】无次数限制,你使用【酒】的次数+x(x为回合内造成的伤害数).<li>锁定技,若你在此出牌阶段使用过【杀】,则你本回合内使用【杀】没有距离限制.<li>当你使用【杀】指定目标时,你可以弃置目标一张牌.<li>锁定技,当你使用的【杀】被【闪】抵消时,你获得一枚<咆>(→)当你因【杀】造成伤害时,你弃置所有<咆>并令伤害值+X(X为<咆>数).',
                        wu_paoxiao2: '咆哮',
                        wu_paoxiao1: '咆哮',
                        wu_tishen: '替身',
                        wu_tishen_info: '限定技,准备阶段或当你濒死时,你可以将体力回复至上限,摸X张牌(X为你回复的体力值).',
                        wu_liyong: '厉勇',
                        wu_liyong_info: '锁定技,回合结束时,若你本回合造成过伤害,你摸X张牌;否则,你获得一张【酒】(X为你此回合造成的伤害数).锁定技,当你击杀一名角色时,若【替身】已经发动,你重置技能【替身】.',
                        wu_liyong2: '厉勇',
                        wu_liyong3: '厉勇',
                        wdqk_juexing: '觉醒',
                        wdqk_juexing_info: '锁定技,当你进入濒死时,将武将替换为【真·五虎将魂】,并将手牌摸至5张.',
                        wu_tuxi: '突袭',
                        wu_tuxi_info: '锁定技,每回合三次,若场上有受伤角色,其他角色每使用或打出一张牌时,展示牌堆顶一张牌,若此牌颜色和其使用或打出的牌颜色不同,则其使用或打出的牌有四分之三的几率失效.其他角色弃牌阶段开始时,若其本回合未造成过伤害,则你可获得其一半的手牌,否则你可令其跳过下回合的摸牌阶段. ',
                        wu_tuxi2: '突袭',
                        wu_tuxi2_info: '',
                        wu_duorui: '夺锐',
                        wu_duorui_info: '当你造成伤害时,可随机废除受到你伤害的角色的一个装备栏,并选择其武将牌上的一个技能无效直到其回合结束.',
                        wu_duoruia: '夺锐',
                        wu_zhitia: '止啼',
                        wu_zhitib: '止啼',
                        wu_zhitic: '止啼',
                        wu_zhiti: '止啼',
                        wu_zhiti_info: '锁定技:若场上受伤角色一名以上:你摸牌阶段额外摸一张牌,出牌阶段额外使用一张【杀】,手牌上限额外加一;三名以上:你跳过判定阶段,且你使用牌没有距离限制.;五名以上:你使用牌的目标可以+1或-1,你使用牌造成的伤害+1.',
                        qita_huansheng: '幻生',
                        qita_huansheng_info: '<li>锁定技,游戏开始时,或你的回合开始前、回合结束后,你随机观看5张武将牌,你可以选择其中一张,获得其所有技能直到你的下一次变化(不可获得主公技).<li>锁定技,你在游戏开始时、回合结束时随机获得一个势力角色的所有技能',
                        qita_huansheng_2: '幻生',
                        qita_huansheng_2_info: '',
                        qita_dunshu: '遁书',
                        qita_dunshu_info: '<li>锁定技,其他角色计算与你的距离＋1;你计算与其他角色的距离－1;<li>每个回合限一次,当你成为【杀】的目标时,若你装备区没有防具牌,你可以令此【杀】对你无效;<li>锁定技,你的体力上限最少为4,任何时候,当你的体力上限低于4时,你将体力上限改为4,将体力值回复至4.<li>锁定技,准备阶段开始时/当你受到伤害时/当你体力发生变化时,若你的防具栏已废除或你已废除的装备栏数大于2,则你回复这些装备栏.',
                        wu_luoyi: '裸衣',
                        wu_luoyi_info: '摸牌阶段开始时,你展示牌堆顶的5张牌.你可以放弃摸牌.若如此做,你可以获得这五张牌,本回合你的锦囊牌均视为【决斗】,且直到你的下回合开始,你使用的【杀】或【决斗】造成伤害时,此伤害+1.否则,你将这些牌置入弃牌堆.',
                        wu_chandou: '缠斗',
                        wu_chandou_info: '<li>锁定技,你不能成为[兵粮寸断],[乐不思蜀],[过河拆桥],[闪电],[顺手牵羊]的目标<li>锁定技,你计算与其他角色的距离-1,当你受到伤害(有伤害来源)后,你进行判定,若结果不为【杀】或【决斗】,视为你对伤害来源使用一张【决斗】.<li>锁定技,当你进行判定时,若判定结果为基本牌,装备牌或者决斗,你回复一点体力并立即获得之.',
                        wu_luoyi1: '裸衣',
                        wu_luoyi2: '裸衣',
                        wu_chandou2: '缠斗',
                        qita_zhuyuan: '祝愿',
                        qita_zhuyuan_info: '每回合出牌阶段每人限一次,你可以交给一名角色四张花色各不相同的牌,并令你与其获得(界)【铁骑】【激昂】直到各自回合结束.<li>锁定技,若你本回合内未发动过【祝愿】,则你使用牌没有距离限制;若你已经发动了【祝愿】,则你本回合使用牌没有次数限制.',
                        qita_duocai: '多彩',
                        qita_duocai_info: '当其他角色区域内的牌,因弃置而进入弃牌堆时,你可以获得之.<li>锁定技,当你以此法获得的牌数:若大于2,你弃置场上一名角色区域内的一张牌;若小于2,你摸一张牌;若等于2,你回复一点体力.',
                        wu_kurou: '苦肉',
                        wu_kurou_info: '出牌阶段限一次,你可以失去一点体力并摸一张牌,选择一名其他角色横置并获得一个【诈】标记.',
                        wu_zha: '诈',
                        wu_zha_info: '锁定技,若你没有技能【诈降】(武动乾坤)且处于横置状态,当你的武将牌重置时,横置之.',
                        wu_zhaxiang: '诈降',
                        wu_zhaxiang_info: '锁定技 每当你失去1点体力后,你摸三张牌.若此时是你的出牌阶段,则直到回合结束:①你使用红色牌无距离限制且红色【杀】不能被【闪】响应;②你使用黑色牌没有次数限制.③出牌阶段你可以额外使用一张杀',
                        wu_zhouyan2: '舟焰',
                        wu_zhouyan2_info: '',
                        wu_zhouyan: '舟焰',
                        wu_zhouyan_info: '锁定技,有【诈】标记的角色对你造成伤害时,改为令你流失一点体力.锁定技,当你对有<诈>标记且没有技能【诈降】(武动乾坤)的角色造成伤害时,选择一项:1. 此伤害+x;2. 你选择场上一名区域内有牌的角色,弃置其区域内的一张牌并令其获得一个<诈>标记,你回复x点体力;3. 依次执行前两项并于伤害结算后弃置受到你伤害的那名角色所有的<诈>标记(x为发动此技能前该角色的<诈>标记数).',
                        wu_wushuang: '无双',
                        wu_wushuang_info: '<li>锁定技,当你使用【杀】指定一个目标后,该角色需依次使用两张【闪】才能抵消此【杀】;当你使用【决斗】指定一个目标后,或成为一名角色使用【决斗】的目标后,该角色每次响应此【决斗】需依次打出两张【杀】.<li>锁定技,当你使用【杀】/【决斗】造成伤害后,你随机获得一张【决斗】/【杀】.',
                        wu_wushuang2: '无双',
                        wu_wushuang3: '无双',
                        wu_shenji: '神戟',
                        wu_shenji_info: '锁定技,你使用的【杀】可以额外指定攻击范围内的2名角色为目标;锁定技,你的【杀】造成的伤害+1,令受到伤害的角色回复一点体力',
                        wu_aozhan: '鏖战',
                        wu_aozhan_info: '锁定技,你受到的伤害始终为1,你的攻击范围+x(x为你的体力值);锁定技,当你装备了武器时,你出牌阶段使用【杀】的次数+1,当你装备了宝物时,你跳过判定阶段.',
                        qita_juejing1: '绝境',
                        qita_juejing: '绝境',
                        qita_juejing2: '绝境',
                        qita_juejing_info: '锁定技,摸牌阶段开始前,你跳过此阶段.锁定技,当你获得牌/失去手牌后,若你的手牌数大于4/小于4,则你将手牌摸至4张/弃置至4张.锁定技,当你进入或者脱离濒死状态时,你摸一张牌.',
                        qita_zhanjiang: '斩将',
                        qita_zhanjiang_info: '锁定技,准备阶段,若弃牌堆中有【龙胆亮银枪】,你装备之;当你的装备区内有【龙胆亮银枪】时,你的手牌上限+3.准备阶段开始时,如果其他角色的装备区内有【龙胆亮银枪】,你可以获得之.',
                        qita_zhanjiang1: '斩将',
                        sp_fanghun: '芳魂',
                        sp_fanghun_info: '<li>锁定技,游戏开始时,你获得1个<梅影>标记,当你使用【杀】或成为【杀】的目标后,你获得1个<梅影>标记.<br><li>你可以移去1个<梅影>标记来发动(界)〖龙胆〗并摸x张牌.(x为1或2);<br><li>锁定技,当你失去装备区里的【梅影枪】时,你从牌堆或弃牌堆获得一张不为【毒】的基本牌',
                        zx_fuhan1: '扶汉',
                        zx_fuhan1_info: '锁定技,你、神势力或蜀势力武将的回合开始前,根据场上的蜀势力武将个数获得技能(限神和蜀武将技能):≥2,随机获得1个技能,＜2,随机获得2个技能',
                        zx_fuhan: '扶汉',
                        zx_fuhan_info: '<li>锁定技,游戏开始时,你随机获得2个未拥有的技能(限神势力和蜀势力武将牌上的技能).<br><li>锁定技,你、神或蜀势力武将的回合开始前,若场上的蜀势力武将人数小于2,你随机获得2个未拥有的技能;否则你将获取的技能数改为1(限神势力和蜀势力武将牌上的技能)<br><li>锁定技,你的体力上限不会低于4,当你的体力上限低于4时,你将体力上限调整为4,并将体力回复至4.',
                        zx_queshi: '鹊拾',
                        zx_queshi_info: '锁定技,游戏开始时,你将【梅影枪】置入你的装备区.出牌阶段限一次,你可以弃置一张不为【梅影枪】的红色牌,获得场上或者弃牌堆里的【梅影枪】.',
                        zx_queshi1: '鹊拾',
                        zx_queshi2: '鹊拾',
                        wu_sizhan: '死战',
                        wu_sizhan_info: '<li>锁定技,你对相邻座位的角色造成的伤害+1,你的攻击范围+2,你的手牌上限+z(z为你的护甲数);<br><li>锁定技,当你收到大于1的伤害时,你选择一名其他角色,对其造成本次受到的伤害数.',
                        wu_sizhan1: '死战',
                        wu_qiangxi: '强袭',
                        wu_qiangxi_info: '<li>锁定技,每回合三次,当你造成伤害时,你获得等量伤害数的护甲.<br><li>出牌阶段限一次,若你有护甲,你可以选择至多x名其他角色(x为你的护甲数),对其造成1点伤害,你失去等量的护甲',
                        wu_qiangxi1: '强袭',
                        wu_chongzhuang1: '冲撞',
                        wu_chongzhuang: '冲撞',
                        wu_chongzhuang_info: '<li>锁定技,每当你于回合内使用牌的数量达到X时(X为你的体力值和护甲数之和,至多为5),你每使用1张牌,你选择对攻击距离内任意名其他角色各造成1点伤害.<br><li>出牌阶段限一次,你可以选择和一名其他角色互换位置,并可以对其造成一点伤害.',
                        hhyy_fanxing: '繁星',
                        qita_xiaowu: '小无',
                        hhyy_wangyi: '王异',
                        hhyy_mayunlu: '马云騄',
                        hhyy_caiwenji: '蔡文姬',
                        hhyy_huangyueying: '黄月英',
                        hhyy_zhenji: '甄姬',
                        hhyy_diaochan: '貂蝉',
                        hhyy_daqiao: '大乔',
                        hhyy_xiaoqiao: '小乔',
                        hhyy_sunshangxiang: '孙尚香',
                        qita_wuhu: '五虎将魂',
                        qita_zhangchunhua: '张春华',
                        qita_caopi: '曹丕',
                        mdtx_xunyu: '荀彧',
                        mdtx_simayi: '司马懿',
                        qita_sunquan: '孙权',
                        mdtx_jiaxu: '贾诩',
                        mdtx_lusu: '鲁肃',
                        mdtx_guojia: '郭嘉',
                        mdtx_zhouyu: '周瑜',
                        wdqk_guanyu: '关羽',
                        mdtx_zgwolong: '卧龙诸葛亮',
                        wdqk_taishici: '太史慈',
                        wdqk_zhaoyun: '赵云',
                        mdtx_pangtong: '庞统',
                        wdqk_huangzhong: '黄忠',
                        mdtx_luxun: '陆逊',
                        wdqk_machao: '马超',
                        wdqk_ganning: '甘宁',
                        wdqk_zhangfei: '张飞',
                        wdqk_zhangliao: '张辽',
                        wdqk_wuhu: '真·五虎将魂',
                        qita_zuoci: '左慈',
                        wdqk_xuchu: '许褚',
                        wdqk_huanggai: '黄盖',
                        wdqk_lvbu: '吕布',
                        qita_shenzhaoyun: 'sp神赵云',
                        qita_zhaoxiang: '赵襄',
                        wdqk_dianwei: '典韦',
                        hhyy_zuozhe: '作者(boss)',
                        hhyy_hhyy: '花好月圆',
                        hhyy_mdtx: '谋定天下',
                        hhyy_wdqk: '武动乾坤',
                        hhyy_qita: '娱乐武将',
                        xxjstx_jisha: '击杀',
                    },
                };
                for (var i in huahaoyueyuan.character) {
                    huahaoyueyuan.character[i][4].push('ext:花好月圆/image/' + i + '.jpg');
                }
                lib.config.all.characters.add('huahaoyueyuan');
                lib.config.characters.add('huahaoyueyuan');
                lib.translate['huahaoyueyuan_character_config'] = '花好月圆';
                return huahaoyueyuan;
            });
            if (!''.replaceAll) {
                String.prototype.replaceAll = function (from, to) {
                    var str = this;
                    while (str.indexOf(from) > -1) {
                        str = str.replace(from, to);
                    }
                    return str;
                };
            }
            String.prototype.newFedit = function (ins) {
                var CAFst = this;
                var CAFstr = CAFst.slice(CAFst.indexOf('{') + 1).slice(0, -1);
                return ins(CAFstr);
            };
        },
        config: {
            xjstxjishatexiao: {
                name: '击杀特效',
                init: false,
            },
            xzhiliaotexiao: {
                name: '治疗特效',
                init: false,
            },
            xgaoshangtexiao: {
                name: '高伤特效',
                init: false,
            },
            hhyy_normalize: {
                name: 'boss降临',
                intro: '开启后重启游戏生效.本扩展中的BOSS挑战武将能在非<挑战>模式下被选用',
                init: false,
            },
            fx_zhenglishoupai: {
                name: '自动整理手牌',
                intro: '获得牌后将会自动整理手牌排序.默认开启.',
                init: true,
            },
            txcs_peiyin3: {
                name: '其他配音',
                init: true,
                intro: '伤害配音、闪电配音、铁索解锁配音、麒麟弓配音',
            },
        },
        package: {
            card: {
                closeable: true,
                card: {
                    liangyuan: {
                        image: 'ext:花好月圆/image/liangyuan.png',
                        audio: 'ext:花好月圆/audio:true',
                        fullskin: true,
                        type: 'trick',
                        enable: true,
                        selectTarget: -1,
                        cardcolor: 'red',
                        toself: true,
                        filterTarget(card, player, target) {
                            return target == player;
                        },
                        yingbian_prompt: '当你使用此牌选择目标后,你可为此牌增加一个目标',
                        yingbian_tags: ['add'],
                        yingbian(event) {
                            event.yingbian_addTarget = true;
                        },
                        modTarget: true,
                        content() {
                            if (get.is.versus()) {
                                if (game.friend.includes(target)) {
                                    if (game.friend.length < game.enemy.length) {
                                        target.draw(3);
                                        return;
                                    }
                                } else {
                                    if (game.friend.length > game.enemy.length) {
                                        target.draw(3);
                                        return;
                                    }
                                }
                            }
                            target.draw(2 + Math.min(2, target.getDamagedHp()));
                        },
                        ai: {
                            basic: {
                                order: 6.2,
                                useful: 4.1,
                                value: 5,
                            },
                            result: {
                                target: 2,
                            },
                            tag: {
                                draw: 2,
                            },
                        },
                    },
                    longdanqiang: {
                        image: 'ext:花好月圆/image/longdanqiang.png',
                        audio: 'ext:花好月圆/audio:true',
                        type: 'equip',
                        subtype: 'equip1',
                        distance: {
                            attackFrom: -2,
                        },
                        ai: {
                            basic: {
                                equipValue: 2,
                                order: 2,
                                useful: 2,
                                value: 2,
                            },
                            result: {
                                target(player, target) {
                                    return get.equipResult(player, target, name);
                                },
                            },
                        },
                        skills: ['longdanqiang_skill', 'longdanqiang_skill1'],
                        enable: true,
                        selectTarget: -1,
                        filterTarget(card, player, target) {
                            return target == player;
                        },
                        modTarget: true,
                        allowMultiple: false,
                        toself: true,
                        fullskin: true,
                    },
                },
                translate: {
                    liangyuan: '金玉良缘',
                    liangyuan_info: '出牌阶段,对你使用.你摸2+x张牌(x为你已损失体力值,最大为2).',
                    longdanqiang_skill: '龙胆亮银枪',
                    longdanqiang_skill1: '龙胆亮银枪',
                    longdanqiang: '龙胆亮银枪',
                    longdanqiang_info: '每当你造成一次伤害,可以弃置受到伤害角色的一张装备牌.锁定技,你的杀可以额外指定一个目标,当你的主将或副将为【sp神赵云】时,你的红杀不可被响应.',
                },
                list: [
                    //牌堆
                    ['heart', '1', 'liangyuan', null, ['yingbian_zhuzhan', 'yingbian_add']],
                    ['heart', '13', 'liangyuan', null, ['yingbian_fujia', 'yingbian_add']],
                    ['heart', '1', 'liangyuan', null, ['yingbian_canqu', 'yingbian_add']],
                    ['heart', '13', 'liangyuan', null, ['yingbian_zhuzhan', 'yingbian_add']],
                    ['spade', '6', 'longdanqiang'],
                    ['heart', '12', 'longdanqiang'],
                ],
            },
            intro: '<li>当前版本v3.3.8【完结版】 <br>【若有侵权或bug反馈请＋官方群②<span style="color: #1688F2">348943983</span>找作者,在线更新请在玄武镜像切换路径后更新】<br><li>限定皮肤系列武将,新人在前人的部分基础上进行了大部分改动,并对大部分技能进行了加强,扩展强度高,并且配音齐全,本扩展及无名杀都是免费的,请勿相信收费购买.(由于本人第一次写扩展,部分技能可能有bug,请见谅).<li>扩展分类【花好月圆】(已完结)【谋定天下】(已完结)【武动乾坤】(已完结)【娱乐武将】<br>★十人局请在<选项——外观——界面缩放>手动调整比例为80%或90%<br>★<span style="color: #1688F2">删除本扩展时请将游戏人数调回8,否则会导致游戏重置</span> <li>更新日志:<br>①新增武动乾坤系列武将:典韦,娱乐武将:赵襄<br>②新增十人局(默认开启)③本扩展的卡牌已有彩色卡牌,请自行将其移动至【十周年UI】卡牌目录下.<br><li>【boss降临】开启后重启游戏生效.本扩展中的BOSS挑战武将能在非<挑战>模式下被选用.<br><li>本扩展击杀特效建议开启【十周年UI】的游戏动画特效<br><span style=\'color: gold\'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>',
            author: '繁星',
            version: 'v3.3.8(6.13)',
        },
    };
});
