import { lib, game, ui, get, ai, _status } from '../../noname.js';
const extensionInfo = await lib.init.promises.json(`extension/寰宇兴衰/info.json`);
game.import('extension', function (lib, game, ui, get, ai, _status) {
    window.ziye = {
        name: '寰宇兴衰',
        url: 'extension/寰宇兴衰',
        SS_smz_fadongjineng: {
            name: '../../../寰宇兴衰/effect/animation/司马昭/SS_smz_fadongjineng',
        },
        SS_cmskill: {
            name: '../../../寰宇兴衰/effect/animation/曹髦/SS_cmskill',
        },
    };
    return {
        name: '寰宇兴衰',
        content(config, pack) { },
        precontent() {
            lib.skill._skilltairan = {
                forced: true,
                charlotte: true,
                firstDo: true,
                silent: true,
                filter(event, player) {
                    return lib.config.extension_寰宇兴衰_hy_skilltairan == 'on' && get.mode() == 'boss' && player == game.me && (event.name !== 'phase' || game.phaseNumber === 0);
                },
                trigger: {
                    player: 'enterGame',
                    global: 'phaseBefore',
                },
                async content(event, trigger, player) {
                    var { result } = await player.chooseTarget('选择任意名角色获得【泰然】', [1, Infinity]).set('ai', function (target) {
                        return get.attitude(_status.event.player, target);
                    });
                    if (!result.bool) return;
                    var targets = result.targets;
                    for (const i of targets) i.addSkills('tairan');
                },
            };
            lib.group.push('daqin');
            lib.translate.daqin = '秦';
            lib.translate.daqin2 = '秦';
            lib.dynamicTranslate.gui_niyuan = function (player) {
                var num = player.storage.gui_niyuan1;
                return '转换技,每轮游戏开始时,你获得以下加成直到游戏结束:阳:你摸' + get.cnNumber(num) + '张牌,本轮你造成的伤害+' + get.cnNumber(num) + ';阴:你回复' + get.cnNumber(num) + '点体力值,本轮你受到的伤害-' + get.cnNumber(num) + '';
            };
            lib.dynamicTranslate.yesongwei = function (player) {
                if (player.storage.yesongwei_delete) return '主公技.出牌阶段开始时,你获得Y个<颂>标记(Y为场上其他魏势力角色数的两倍)';
                return '主公技.①出牌阶段开始时,你获得Y个<颂>标记(Y为场上其他魏势力角色数的两倍).②限定技,每局游戏限一次,出牌阶段,你可以令一名其他角色将势力更改为魏并失去所有其武将牌上的技能';
            };
            lib.characterSort.mode_extension_寰宇兴衰 = {
                guanjiangtiaozheng: ['yecaomao', 'yewu_zhugeliang', 'yecaopi', 'yeshen_simayi', 'ye_simazhao', 'hy_caorui'],
                guanfangboss: ['yewolong', 'ye_xiuluozhinu', 'ye_lihuofutux'],
                huanyuxingshuai: ['xshen_guizang', 'ceshi_lv', 'kaaosi', 'yeli', 'teleixiya'],
                bossmogai: ['yehejin', 'yehetaihou', 'yexuannv', 'ye_lihuofutu', 'hy_yingzheng'],
                wolonggongfang: ['hy_caocao', 'hy_mo_lvbu', 'hy_mo_zhugeliang', 'hy_mo_zhouyu', 'hy_xuannv'],
                hy_yidong: ['hy_shen_caocao'],
                nuyanban: ['hy_ny_caomao'],
            };
            //—————————————————————————————————————————————————————————————————————————————武将包
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '寰宇兴衰',
                    connect: true,
                    character: {
                        hy_ny_caomao: ['male', 'wei', 6, ['hy_ny_qianlong', 'hy_ny_fensi', 'hy_ny_juejin', 'hy_ny_bilei', 'hy_ny_longyuan'], []],
                        hy_shen_caocao: ['male', 'shen', 3, ['hy_guixin', 'feiying'], ['wei']],
                        hy_yingzheng: ['male', 'daqin', 20, ['hy_yitong', 'hy_shihuang', 'hy_zulong', 'hy_fenshu'], ['des:秦始皇,赢姓,赵氏,名政,秦庄襄王之子.秦始皇22岁时,在雍城举行国君成人加冕仪式,开始<亲理朝政>.后除掉吕不韦,嫪毐等人,重用李斯,尉缭.自公元前230年至前221年,采取由近及远,集中力量,各个击破的策略,先后灭六国,完成统一中国的大业.同时建立起历史上第一个书同文,度同制,车同轨,行同伦的中央集权国家——秦朝']],
                        hy_caorui: ['male', 'wei', 3, ['hy_huituo', 'hy_mingjian', 'hy_xingshuai'], ['zhu']],
                        ye_lihuofutu: ['male', 'shen', 99, ['ye_wushuang', 'mashu', 'ye_baguan', 'ye_zhanjia', 'ye_xuli', 'hy_jingang', 'hy_shenjian', 'hy_fumo', 'hy_liezhu'], ['des:字奉先,五原郡九原县人.三国第一猛将,曾独力战刘关张三人,其武力世之无双.时人语曰:<人中有吕布,马中有赤兔']],
                        ye_lihuofutux: ['male', 'shen', 27, ['ye_wushuang', 'mashu', 'ye_baguan', 'ye_zhanjiax', 'ye_xulix'], ['des:字奉先,五原郡九原县人.三国第一猛将,曾独力战刘关张三人,其武力世之无双.时人语曰:<人中有吕布,马中有赤兔']],
                        yexuannv: ['female', 'shen', 108, ['hy_dishi', 'yejiutian', 'yexuanlie', 'yeshenqu'], ['des:玄女,或称九天娘娘、九天玄女.道教神仙之一.人头鸟身.道教谓黄帝与蚩尤战于涿鹿,帝不能胜,叹于太山之阿,感于王母,乃命九天玄女下降,授帝以遁甲、兵、符、图、策、印、剑等物,并为制夔牛鼓八十面,遂大破蚩尤而定天下.玄女,原为中国古代神话中的女神,后经道教增奉为女仙.汉魏时期,玄女在社会上特别是道教之中有很大影响']],
                        hy_xuannv: ['female', 'shen', 4, ['hy_dishi', 'hy_jiutian', 'hy_xuanlie', 'hy_shenqu'], ['des:玄女,或称九天娘娘、九天玄女.道教神仙之一.人头鸟身.道教谓黄帝与蚩尤战于涿鹿,帝不能胜,叹于太山之阿,感于王母,乃命九天玄女下降,授帝以遁甲、兵、符、图、策、印、剑等物,并为制夔牛鼓八十面,遂大破蚩尤而定天下.玄女,原为中国古代神话中的女神,后经道教增奉为女仙.汉魏时期,玄女在社会上特别是道教之中有很大影响']],
                        hy_mo_zhouyu: ['male', 'shen', 4, ['hy_liaoyuan', 'hy_luojin', 'hy_yinyan'], []],
                        hy_mo_zhugeliang: ['male', 'shen', 3, ['hy_tianlei', 'hy_dihuo', 'hy_zhanxing'], []],
                        hy_mo_lvbu: ['male', 'shen', 4, ['ye_wushuang', 'hy_lingsha', 'hy_hanzhan'], []],
                        hy_caocao: ['male', 'shen', 4, ['hy_shouhun', 'hy_mowei'], []],
                        ye_xiuluozhinu: ['male', 'shen', 30, ['mashu', 'ye_wushuang', 'ye_xiuluo'], ['des:字奉先,五原郡九原县人.三国第一猛将,曾独力战刘关张三人,其武力世之无双.时人语曰:<人中有吕布,马中有赤兔']],
                        ye_simazhao: ['male', 'wei', 4, ['ye_qiantun', 'ye_xiezheng', 'ye_zhaoxiong'], ['des:司马昭,字子上,早年受荫庇于父兄,不慕霸业.及父兄殂谢,昭承继家业、负谋魏自立之责,野心渐起,虽心气才学不及父兄,仍弹竭经营大业 笼人心,除异己,欲令百官贵胃俯首.<br>唯诸葛诞拥兵自重,独据淮南、昭恐其不利手宗族大业、欲除之以建战功,威服四方.昭乃使计逼反诸葛诞,又担忧曹髦为乱后方,乃挟之以同征淮南,临戎除逆.<br>昭惯施权谋,建高墙于寿春城外,围而不攻,为彰显恩德,围城期间每有归降者,皆宽救旧罪.昭收服叛逃倒戈者众,诞、安等屡次突围皆大败而归.<br>昭自觉宗族夙愿将成之际,雷声滚滚,大雨倾盆,围墙塌落,魏军困于泥沼,诸葛诞趁势突围、文鸯乘乱欲劫天子.昭恐宗族大业尽毁于己手,积怨缠身,方寸惊乱,亲率三军攻城、誓荡平淮南,讨灭天下不臣,成大业,慰父兄']],
                        yeshen_simayi: ['male', 'shen', 4, ['yerenjie', 'yebaiyin', 'yelianpo'], ['wei', 'name:司马|懿', 'des:晋宣帝,字仲达,河内温人.曾任职过曹魏的大都督,太尉,太傅.少有奇节,聪明多大略,博学洽闻,伏膺儒教,世之鬼才也']],
                        yeli: ['female', 'shen', 4, ['yejiahe', 'yekurong', 'yefengrao', 'yechangqing'], ['des:黍,炎国农业天师,天师府授业天师.曾于炎国北部农业基地大荒城从事农业研究多年且已有丰富的科研成果.现因访问亲属,以访客身份暂驻罗德岛']],
                        yehetaihou: ['female', 'qun', 90, ['yezunqin', 'yechuhuan', 'yenongquan', 'yeshexie'], ['des:大将军何进的妹妹,汉灵帝刘宏第二任皇后,汉少帝刘辩的生母.何氏出身于屠户家庭,后选入掖庭,得到汉灵帝临幸,生下皇子刘辩,并受封贵人.光和三年(180年),立为皇后.中平六年(189年),汉灵帝去世,刘辩继位,尊何氏为皇太后.董卓进京,废黜刘辩,不久毒杀刘辩及何氏']],
                        yecaopi: ['male', 'wei', 3, ['yexingshang', 'yesbfangzhu', 'yesongwei'], ['zhu', 'des:字子桓,三国时期著名的政治家、文学家,曹魏的开国皇帝,公元220－226年在位.沛国谯人,魏武帝曹操与武宣卞皇后的长子.去世后庙号高祖,谥为文皇帝,葬于首阳陵']],
                        yewu_zhugeliang: ['male', 'shu', '4/7', ['dcjincui', 'yezhizhe', 'yeqingshi'], ['des:字孔明,号卧龙,琅琊阳都人,蜀汉丞相.在世时被封为武乡侯,谥曰忠武侯.著有<出师表>、<诫子书>等.怀不世之才,以空城戏司马,能观星象而通鬼神']],
                        teleixiya: ['female', 'shen', 3, ['yechenai'], ['des:特蕾西娅,卡兹戴尔移动城市的建立者,卡兹戴尔军事委员会创始人之一,巴别塔组织的创立者,曾是卡兹戴尔的最高领袖.执政期间,她致力于推进医疗、教育、城市基础建设等事业,多次带领萨卡兹击退了外敌的入侵,并且在外交工作中颇有建树.后于卡兹戴尔与维多利亚的战争中身亡.该人事档案留存在罗德岛人事部封存的资料库中']],
                        ceshi_lv: ['female', 'shen', 3, ['ceshi_moran', 'ceshi_jielv', 'ceshi_huisu'], ['des:不生不灭的律,肩负将银河兴亡的文明记录成律法的职责——亿万年时光就这样过去,律已经无聊到没事杀自己几次.一切在律眼里都是如此令人厌倦…除了——小说!不错,小说——律受够了所有高级的文学,只想看…小说!可律能记录下的、接触到…全是枯燥无聊的律法与历史…无——聊——无聊无聊!怎样才能让日子重新有意义？一日,律发现了一个奇怪的种族…拥有传承记忆力量的种族,这引起了律兴趣!也许这也会成为另一个『奇迹』的契机也说不定…不如介入其中,将历史写成小说？!律将目光投入银河之中.那…谁来做这小说的主角呢？']],
                        kaaosi: ['male', 'shen', 9, ['ka_ji', 'ka_chenji', 'ka_yingshe', 'ka_shenshi', 'ka_dengchang'], ['des:在混沌灭世之际,众人前往世界之门.只为见到那在预言中可以给予逆宇宙希望的神明.面对众人的到来,神明的眼中有玩味,也有些许惊喜.终于,在彼岸阶梯之上,众人见到了混沌的主宰——卡奥斯.卡奥斯早已对一切都兴致缺缺,因为已经很久没有出现让他感兴趣的事物了.但在某个存在体内,卡奥斯见到了关于毁灭与新生的潜能.于是,卡奥斯赐予其以混沌的力量,让他不断经历撕扯又不断重生.在极致的痛苦中,给予他无上的力量.唯有毁灭,才会带来新生,才能于新生中诞生最强的力量.混沌将会带来毁灭,卡奥斯便从中汲取全新的力量.若卡奥斯最终得到了他想得到的答案,或许他会赐予众人一个转机']],
                        yewolong: ['male', 'qun', 17, ['yeleiji', 'yemozun', 'yelianyu', 'yexieyu'], ['des:字孔明,号卧龙居士,琅琊阳都人.刘备曾<三顾茅庐>得见卧龙.卧龙以一篇<隆中对>分析天下形势,提出先取荆州,再取益州成鼎足之势的说法.<三国演义>中的诸葛亮善用<火攻>,曾用火攻战术赢得多场战役,如<火烧赤壁>、<火烧博望坡>、<火烧藤甲兵>等']],
                        xshen_guizang: ['male', 'shen', 4, ['gui_niyuan', 'gui_jiaocuo', 'gui_pozhen'], ['des:一切自有命数.天道不灭,万物自会轮回.这是归藏自鸿蒙清中诞生起,便一直坚守的准则.但混沌突起,万道泯灭,宇宙陷入一片无序之中.归藏睁开双眼,义无反顾地走入了这片混沌.他会让宇宙重回正轨,他这般坚信着.最终,他成为了逆宇宙间唯一的至高神——逆元之主.同时,他也因那从永恒之火中诞生的存在,拥有了从未有过的情感.关于人性,关于道,关于生命,一切都拥有了全新的解读']],
                        yehejin: ['male', 'qun', 120, ['yezhenmou', 'yeguiluan', 'yewaixi', 'yequanba'], ['des:何进(？~189年),字遂高,南阳郡宛县(今河南南阳市宛城区)人.东汉时期外戚大臣,灵思皇后之兄.初以妹妹有宠,拜为郎中,出任虎贲中郎将、颍川太守,迁侍中、将作大匠、河南尹.黄巾起义时,拜为大将军,总镇京师,发现并镇压马元义的密谋,封为慎侯.为张大威望,在京师讲武结营,置西园八校尉.汉灵帝驾崩后,粉碎了中常侍蹇硕拥立皇子刘协的图谋,听从袁绍之言,博征智谋之士,内借元舅之资,外据辅政之权,独揽朝中大权.中平六年(189),不纳陈琳和曹操劝谏,阴结军阀董卓,联合袁绍谋诛宦竖.事情败露后,为中常侍张让等人损害,其后代是魏晋高门士族南阳何氏']],
                        yecaomao: ['male', 'wei', 3, ['yeqianlong', 'yeweitong'], ['zhu', 'des:曹髦(241年11月15日－260年6月2日),字彦士,沛国谯县(今安徽省亳州市)人,魏文帝曹丕之孙,东海王曹霖之子,曹魏第四位皇帝(254年11月1日－260年6月2日).正始二年(241年),生于东海王宫,自幼聪明好学,才慧早成,正始五年(244年),封为高贵乡公,嘉平六年(254年),大将军司马师废除齐王曹芳后,拥立为帝,年号正元,曹髦文才武略,崇拜少康,不满司马氏专权秉政,甘露五年(260年),亲自讨伐司马昭,为太子舍人成济所弑,年仅十九岁,以王礼葬于洛阳西北.曹髦擅长诗文,创制了九言诗,传世文章有<伤魂赋并序><颜子论>等.爱好儒学,亲赴太学论道,著有<春秋左氏传音>(失传).精通绘画,一说为中国第一位成为画家的皇帝,唐张彦远<历代名画记>目曹髦为中品']],
                    },
                    skill: {
                        taixu_linglu: {
                            global: ['taixu_linglu_jilu', 'taixu_linglu_clear'],
                            group: 'taixu_linglu_die',
                            init(player) {
                                player.storage.taixu_linglu = [];
                            },
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return !game.hasPlayer(function (current1) {
                                        return current1.hasSkill('taixu_linglu') && current1.storage.taixu_linglu.includes(current);
                                    });
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('对一名角色发布【令戮】强令', function (card, player, target) {
                                        return !game.hasPlayer(function (current) {
                                            return current.hasSkill('taixu_linglu') && current.storage.taixu_linglu.includes(target);
                                        });
                                    })
                                    .set('ai', function (target) {
                                        if (
                                            target.countCards('hs') > 4 &&
                                            target.hp >= 3 &&
                                            game.countPlayer(function (current) {
                                                return get.attitude(target, current) < 0 && current.inRangeOf(target);
                                            }) > 0 &&
                                            !target.hasUnknown()
                                        )
                                            return get.attitude(_status.event.player, target) > 0;
                                        return get.attitude(_status.event.player, target) < 0;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets[0]);
                                    player.storage.taixu_linglu.add(result.targets[0]);
                                    result.targets[0].markSkill('taixu_linglu_jilu');
                                    player.update();
                                }
                            },
                            subSkill: {
                                jilu: {
                                    marktext: '令戮',
                                    mark: true,
                                    intro: {
                                        content(storage, player, skill) {
                                            var num = player.storage.taixu_linglu_jilu;
                                            if (num == undefined) num = 0;
                                            return (
                                                '<li>任务目标:于你下回合结束前造成2点伤害<br><li>发布者:' +
                                                get.translation(
                                                    game
                                                        .filterPlayer(function (current) {
                                                            return current.hasSkill('taixu_linglu') && current.storage.taixu_linglu.includes(player);
                                                        })
                                                        .randomGet()
                                                ) +
                                                '<br><li>已造成' +
                                                num +
                                                '点伤害'
                                            );
                                        },
                                    },
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    filter(event, player) {
                                        return game.hasPlayer(function (current) {
                                            return current.hasSkill('taixu_linglu') && current.storage.taixu_linglu.includes(player);
                                        });
                                    },
                                    charlotte: true,
                                    forced: true,
                                    silent: true,
                                    forced: true,
                                    content() {
                                        if (player.storage.taixu_linglu_jilu == '' || player.storage.taixu_linglu_jilu == undefined) player.storage.taixu_linglu_jilu = 0;
                                        player.storage.taixu_linglu_jilu += trigger.num;
                                        player.update();
                                    },
                                },
                                clear: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    filter(event, player) {
                                        return game.hasPlayer(function (current) {
                                            return current.hasSkill('taixu_linglu') && current.storage.taixu_linglu.includes(player);
                                        });
                                    },
                                    charlotte: true,
                                    forced: true,
                                    silent: true,
                                    forced: true,
                                    content() {
                                        if (player.storage.taixu_linglu_jilu >= 2) {
                                            player.popup('强令成功');
                                            event.list = game
                                                .filterPlayer(function (current) {
                                                    return current.hasSkill('taixu_linglu') && current.storage.taixu_linglu.includes(player);
                                                })
                                                .randomGet();
                                            game.log(player, '成功完成了', event.list, '发布的', '#g【令戮】', '强令');
                                            game.countPlayer(function (current) {
                                                if (current.hasSkill('taixu_yishi') && (event.list == current || event.list.getFriends().includes(current))) {
                                                    current.draw();
                                                }
                                            });
                                            player.draw(2);
                                        } else {
                                            player.popup('强令失败');
                                            event.list = game
                                                .filterPlayer(function (current) {
                                                    return current.hasSkill('taixu_linglu') && current.storage.taixu_linglu.includes(player);
                                                })
                                                .randomGet();
                                            game.log(player, '未完成', event.list, '发布的', '#g【令戮】', '强令');
                                            game.countPlayer(function (current) {
                                                if (current.hasSkill('taixu_yishi') && (event.list == current || event.list.getFriends().includes(current))) {
                                                    current.discardPlayerCard(player, 'he', 1, true);
                                                }
                                            });
                                            player.loseHp();
                                        }
                                        player.storage.taixu_linglu_jilu = 0;
                                        player.unmarkSkill('taixu_linglu_jilu');
                                        player.update();
                                        event.list = game
                                            .filterPlayer(function (current) {
                                                return current.hasSkill('taixu_linglu') && current.storage.taixu_linglu.includes(player);
                                            })
                                            .randomGet();
                                        event.list.storage.taixu_linglu.remove(player);
                                        event.list.update();
                                    },
                                },
                                die: {
                                    trigger: {
                                        player: 'dieBegin',
                                    },
                                    charlotte: true,
                                    forced: true,
                                    silent: true,
                                    forced: true,
                                    filter(event, player) {
                                        return (
                                            player.storage.taixu_linglu &&
                                            game.hasPlayer(function (current) {
                                                return player.storage.taixu_linglu.includes(current);
                                            })
                                        );
                                    },
                                    content() {
                                        game.countPlayer(function (current) {
                                            if (player.storage.taixu_linglu.includes(current)) {
                                                player.storage.taixu_linglu.remove(current);
                                                current.storage.taixu_linglu_jilu = 0;
                                                current.unmarkSkill('taixu_linglu_jilu');
                                                current.update();
                                            }
                                        });
                                        player.update();
                                    },
                                },
                            },
                        },
                        taixu_mouqiang: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 1 && event.source && event.source.isIn() && event.source != player && event.source.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                var num = Math.floor(trigger.num / 2);
                                player.gainPlayerCard('he', trigger.source, num, true);
                                event.num1 = 0;
                                event.num2 = 0;
                                ('step 1');
                                if (result.bool && result.links && result.links.length) {
                                    for (const i of result.links) {
                                        if (get.type(i) == 'basic') event.num1++;
                                        else event.num2++;
                                    }
                                }
                                ('step 2');
                                if (event.num1 > 0) player.recover(event.num1);
                                if (event.num2 > 0) trigger.source.damage(event.num2);
                            },
                        },
                        taixu_zhuosheng: {
                            global: ['taixu_zhuosheng_jilu', 'taixu_zhuosheng_clear'],
                            group: 'taixu_zhuosheng_die',
                            init(player) {
                                player.storage.taixu_zhuosheng = [];
                            },
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return (
                                    player.countCards('he') > 0 &&
                                    game.hasPlayer(function (current) {
                                        return (
                                            current != player &&
                                            !game.hasPlayer(function (current1) {
                                                return current1.hasSkill('taixu_zhuosheng') && current1.storage.taixu_zhuosheng.includes(current);
                                            })
                                        );
                                    })
                                );
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseToDiscard(1, 'he')
                                    .set('prompt', '是否弃置一张牌,然后对一名其他角色发布【擢升】强令')
                                    .set('ai', function (card) {
                                        if (
                                            game.countPlayer(function (current) {
                                                return current != player && get.attitude(player, current) > 0;
                                            }) > 0
                                        )
                                            return 4 - get.value(card);
                                        return 0;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player
                                        .chooseTarget(true, '令一名其他角色执行【擢升】强令任务', function (card, player, target) {
                                            return (
                                                target != player &&
                                                !game.hasPlayer(function (current) {
                                                    return current.hasSkill('taixu_zhuosheng') && current.storage.taixu_zhuosheng.includes(target);
                                                })
                                            );
                                        })
                                        .set('ai', function (target) {
                                            return get.attitude(_status.event.player, target) > 0;
                                        });
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    player.line(result.targets[0]);
                                    player.storage.taixu_zhuosheng.add(result.targets[0]);
                                    result.targets[0].markSkill('taixu_zhuosheng_jilu');
                                    player.update();
                                }
                            },
                            subSkill: {
                                jilu: {
                                    marktext: '擢升',
                                    mark: true,
                                    intro: {
                                        content(storage, player, skill) {
                                            var num = player.storage.taixu_zhuosheng_jilu;
                                            if (num == undefined) num = 0;
                                            return (
                                                '<li>任务目标:于你回合结束前获得至少五张牌<br><li>发布者:' +
                                                get.translation(
                                                    game
                                                        .filterPlayer(function (current) {
                                                            return current.hasSkill('taixu_zhuosheng') && current.storage.taixu_zhuosheng.includes(player);
                                                        })
                                                        .randomGet()
                                                ) +
                                                '<br><li>已获得' +
                                                num +
                                                '张牌'
                                            );
                                        },
                                    },
                                    trigger: {
                                        player: 'gainEnd',
                                    },
                                    filter(event, player) {
                                        return (
                                            event.cards &&
                                            event.cards.length &&
                                            game.hasPlayer(function (current) {
                                                return current.hasSkill('taixu_zhuosheng') && current.storage.taixu_zhuosheng.includes(player);
                                            })
                                        );
                                    },
                                    charlotte: true,
                                    forced: true,
                                    silent: true,
                                    forced: true,
                                    content() {
                                        if (player.storage.taixu_zhuosheng_jilu == '' || player.storage.taixu_zhuosheng_jilu == undefined) player.storage.taixu_zhuosheng_jilu = 0;
                                        player.storage.taixu_zhuosheng_jilu += trigger.cards.length;
                                        player.update();
                                    },
                                },
                                clear: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    filter(event, player) {
                                        return game.hasPlayer(function (current) {
                                            return current.hasSkill('taixu_zhuosheng') && current.storage.taixu_zhuosheng.includes(player);
                                        });
                                    },
                                    charlotte: true,
                                    forced: true,
                                    silent: true,
                                    forced: true,
                                    content() {
                                        'step 0';
                                        if (player.storage.taixu_zhuosheng_jilu >= 5) {
                                            player.popup('强令成功');
                                            event.list = game
                                                .filterPlayer(function (current) {
                                                    return current.hasSkill('taixu_zhuosheng') && current.storage.taixu_zhuosheng.includes(player);
                                                })
                                                .randomGet();
                                            game.log(player, '成功完成了', event.list, '发布的', '#g【擢升】', '强令');
                                            game.countPlayer(function (current) {
                                                if (current.hasSkill('taixu_yishi') && (event.list == current || event.list.getFriends().includes(current))) {
                                                    current.draw();
                                                }
                                            });
                                            player.gainMaxHp();
                                            player.recover();
                                            event.list = game
                                                .filterPlayer(function (current) {
                                                    return current.hasSkill('taixu_zhuosheng') && current.storage.taixu_zhuosheng.includes(player);
                                                })
                                                .randomGet();
                                            if (
                                                event.list &&
                                                player.countCards('he', function (card) {
                                                    return get.type(card) != 'basic';
                                                }) > 0
                                            ) {
                                                player
                                                    .chooseCard('〖擢升〗交给' + get.translation(event.list) + '一张非基本牌', 'he', true, function (card) {
                                                        return get.type(card) != 'basic';
                                                    })
                                                    .set('ai', function (card) {
                                                        return 7 - get.value(card);
                                                    });
                                            } else event.goto(2);
                                        } else {
                                            player.popup('强令失败');
                                            event.list = game
                                                .filterPlayer(function (current) {
                                                    return current.hasSkill('taixu_zhuosheng') && current.storage.taixu_zhuosheng.includes(player);
                                                })
                                                .randomGet();
                                            game.log(player, '未完成', event.list, '发布的', '#g【擢升】', '强令');
                                            game.countPlayer(function (current) {
                                                if (current.hasSkill('taixu_yishi') && (event.list == current || event.list.getFriends().includes(current))) {
                                                    current.discardPlayerCard(player, 'he', 1, true);
                                                }
                                            });
                                            event.goto(2);
                                        }
                                        ('step 1');
                                        if (result.bool) {
                                            event.list.gain(result.cards, player, 'giveAuto');
                                        }
                                        ('step 2');
                                        player.storage.taixu_zhuosheng_jilu = 0;
                                        player.unmarkSkill('taixu_zhuosheng_jilu');
                                        player.update();
                                        event.list = game
                                            .filterPlayer(function (current) {
                                                return current.hasSkill('taixu_zhuosheng') && current.storage.taixu_zhuosheng.includes(player);
                                            })
                                            .randomGet();
                                        event.list.storage.taixu_zhuosheng.remove(player);
                                        event.list.update();
                                    },
                                },
                                die: {
                                    trigger: {
                                        player: 'dieBegin',
                                    },
                                    charlotte: true,
                                    forced: true,
                                    silent: true,
                                    forced: true,
                                    filter(event, player) {
                                        return (
                                            player.storage.taixu_zhuosheng &&
                                            game.hasPlayer(function (current) {
                                                return player.storage.taixu_zhuosheng.includes(current);
                                            })
                                        );
                                    },
                                    content() {
                                        game.countPlayer(function (current) {
                                            if (player.storage.taixu_zhuosheng.includes(current)) {
                                                player.storage.taixu_zhuosheng.remove(current);
                                                current.storage.taixu_zhuosheng_jilu = 0;
                                                current.unmarkSkill('taixu_zhuosheng_jilu');
                                                current.update();
                                            }
                                        });
                                        player.update();
                                    },
                                },
                            },
                        },
                        taixu_mouzhu: {
                            audio: 'mouzhu',
                            init(player) {
                                player.storage.taixu_mouzhu = 0;
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                'step 0';
                                event.mubiao = game.filterPlayer(function (current) {
                                    return current != player && current != target && current.hp <= player.hp;
                                });
                                ('step 1');
                                if (event.mubiao.length) event.count = 0;
                                else event.finish();
                                ('step 2');
                                if (!event.mubiao[event.count].countCards('he')) event.goto(4);
                                else
                                    event.mubiao[event.count].chooseCard('he', '交给' + get.translation(player) + '一张牌').set('ai', function (card) {
                                        if (get.attitude(_status.event.player, player) > 0) return true;
                                        return false;
                                    });
                                ('step 3');
                                if (result.bool) {
                                    event.mubiao[event.count].give(result.cards, player) && player.storage.taixu_mouzhu++;
                                    if (typeof event.mubiao[event.count].ai.shown == 'number' && event.mubiao[event.count].ai.shown < 0.95) {
                                        event.mubiao[event.count].ai.shown += 0.3;
                                        if (event.mubiao[event.count].ai.shown > 0.95) event.mubiao[event.count].ai.shown = 0.95;
                                    }
                                    player.update();
                                }
                                ('step 4');
                                event.count++;
                                ('step 5');
                                if (event.count < event.mubiao.length) event.goto(2);
                                ('step 6');
                                if (player.storage.taixu_mouzhu == 0) {
                                    game.countPlayer(function (current) {
                                        if (current == player || (current != player && current != target && current.hp <= player.hp)) {
                                            current.loseHp();
                                        }
                                    });
                                    event.finish();
                                } else {
                                    var list = ['sha', 'juedou'];
                                    if (!player.canUse('sha', target, false)) list.remove('sha');
                                    if (!player.canUse('juedou', target, false)) list.remove('juedou');
                                    if (!list.length) event.goto(8);
                                    else if (list.length == 1) event._result = { control: list[0] };
                                    else
                                        target.chooseControl(list, true).set('prompt', '' + get.translation(player) + '视为对' + get.translation(target) + '使用一张【杀】或【决斗】.').ai = function () {
                                            return get.effect(target, { name: 'sha' }, player, player) >= get.effect(target, { name: 'juedou' }, player, player) ? 'sha' : 'juedou';
                                        };
                                }
                                ('step 7');
                                var next = player.useCard({ name: result.control }, target, 'noai');
                                var num = Math.min(player.storage.taixu_mouzhu, 4);
                                next.baseDamage = num;
                                ('step 8');
                                if (player.storage.taixu_mouzhu > 0) player.storage.taixu_mouzhu = 0;
                                player.update();
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 2,
                                order: 8,
                                result: {
                                    player(card, player, target, current) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return current != player && current.hp <= player.hp && get.attitude(current, player) > 0 && current.countCards('he') > 0;
                                            }) ||
                                            (game.countPlayer(function (current) {
                                                return current != player && current.hp <= player.hp && get.attitude(current, player) <= 0;
                                            }) >
                                                game.countPlayer(function (current) {
                                                    return current == player || (current != player && current.hp <= player.hp && get.attitude(current, player) > 0);
                                                }) &&
                                                !game.hasPlayer(function (current) {
                                                    return current != player && current.hp <= player.hp && get.attitude(current, player) > 0 && current.countCards('he') == 0;
                                                }))
                                        )
                                            return 1;
                                        return -1;
                                    },
                                    target: -1,
                                },
                            },
                        },
                        hy_wenming_skill: {
                            forced: true,
                            trigger: {
                                player: 'useCard',
                            },
                            equipSkill: true,
                            filter(event, player) {
                                return !get.tag(event.card, 'damage');
                            },
                            content() {
                                trigger.directHit.addArray(game.filterPlayer());
                            },
                        },
                        hy_ny_qianlong: {
                            forced: true,
                            audio: 'ext:寰宇兴衰/audio:4',
                            persevereSkill: true,
                            trigger: {
                                player: 'damageEnd',
                            },
                            content() {
                                'step 0';
                                var num = 3;
                                if (player.hasSkill('hy_ny_longyuan') && player.storage.hy_ny_longyuan > 0) {
                                    num += 2;
                                }
                                var cards = get.cards(num);
                                event.cards = cards;
                                game.cardsGotoOrdering(cards);
                                game.log(player, '展示了', event.cards);
                                event.videoId = lib.status.videoId++;
                                game.broadcastAll(
                                    function (player, id, cards) {
                                        if (player == game.me || player.isUnderControl()) return;
                                        var str = get.translation(player) + '发动了【潜龙】';
                                        var dialog = ui.create.dialog(str, cards);
                                        dialog.videoId = id;
                                    },
                                    player,
                                    event.videoId,
                                    event.cards
                                );
                                game.addVideo('showCards', player, [get.translation(player) + '发动了【潜龙】', get.cardsInfo(event.cards)]);
                                player.chooseButton(['获得其中任意张牌,并将其余牌标记为<鳞>并随机置于牌堆中', cards], [1, Infinity], false).set('ai', (button) => {
                                    const player = get.player();
                                    return get.value(button.link, player);
                                });
                                ('step 1');
                                game.broadcastAll('closeDialog', event.videoId);
                                game.addVideo('cardDialog', null, event.videoId);
                                if (result.bool) {
                                    var cardx = result.links;
                                    if (cardx.length) {
                                        event.cards.removeArray(cardx);
                                        player.gain(cardx, 'gain2');
                                    }
                                }
                                if (player.hasSkill('hy_ny_longyuan') && player.storage.hy_ny_longyuan > 0) {
                                    player.storage.hy_ny_longyuan--;
                                    player.changeHujia(6, null, false);
                                }
                                ('step 2');
                                if (event.cards.length) {
                                    for (const i of event.cards) {
                                        i.storage.hy_ny_qianlong = true;
                                    }
                                    game.cardsGotoPile(event.cards, () => {
                                        return ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length - 1)];
                                    });
                                } else event.finish();
                                ('step 3');
                                game.updateRoundNumber();
                            },
                            group: 'hy_ny_qianlong_gain',
                            subSkill: {
                                lose: { audio: 'ext:寰宇兴衰/audio:true' },
                                tag: {},
                                gain: {
                                    persevereSkill: true,
                                    forced: true,
                                    sourceSkill: 'hy_ny_qianlong',
                                    audio: 'ext:寰宇兴衰/audio:true',
                                    trigger: {
                                        global: ['gainAfter', 'loseAsyncAfter'],
                                    },
                                    filter(event, player) {
                                        return game.hasPlayer(function (current) {
                                            if (!event.getg(current).length) return false;
                                            return event.getg(current).some((card) => card.storage.hy_ny_qianlong);
                                        });
                                    },
                                    content() {
                                        'step 0';
                                        var cards = trigger.getg(trigger.player).filter((card) => card.storage.hy_ny_qianlong);
                                        event.cards = cards;
                                        if (cards.length) {
                                            trigger.player.addGaintag(cards, 'hy_ny_qianlong_tag');
                                            player
                                                .chooseBool('是否令' + get.translation(trigger.player) + '受到' + cards.length + '点雷电伤害,否则其获得一点护甲')
                                                .set('ai', () => {
                                                    var player = _status.event.player;
                                                    if (get.damageEffect(trigger.player, player, player) < 0) return 0;
                                                    return 1;
                                                })
                                                .set('target', trigger.player);
                                        }
                                        ('step 1');
                                        if (result.bool) {
                                            trigger.player.damage(event.cards.length, 'thunder', player);
                                        } else {
                                            trigger.player.changeHujia(1, null, false);
                                        }
                                    },
                                },
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return;
                                            if (!target.hasFriend()) return;
                                            var num = 1;
                                            if (!player.needsToDiscard() && target.isDamaged()) {
                                                num = 0.7;
                                            } else {
                                                num = 0.5;
                                            }
                                            if (target.hp >= 4) return [1, num * 2];
                                            if (target.hp == 3) return [1, num * 1.5];
                                            if (target.hp == 2) return [1, num * 0.5];
                                        }
                                    },
                                },
                            },
                        },
                        hy_ny_fensi1: { audio: 'ext:寰宇兴衰/audio:2' },
                        hy_ny_fensi2: { audio: 'ext:寰宇兴衰/audio:2' },
                        hy_ny_fensi: {
                            forced: true,
                            audio: 'ext:寰宇兴衰/audio:4',
                            forced: true,
                            trigger: {
                                player: 'changeHujiaAfter',
                            },
                            filter(event, player) {
                                return event.num > 0;
                            },
                            async content(event, trigger, player) {
                                if (
                                    !game.hasPlayer(function (current) {
                                        return current != player && current.hp >= player.hp;
                                    })
                                ) {
                                    await player.damage(2);
                                    return;
                                } else {
                                    var targets = game.filterPlayer((c) => player.hp <= c.hp).sortBySeat();
                                    if (targets.length) {
                                        var { result } = await player
                                            .chooseTarget(true, '选择一名体力不小于你的角色对其造成2点伤害', function (card, player, target) {
                                                return target.hp >= player.hp;
                                            })
                                            .set('ai', function (target) {
                                                var player = _status.event.player;
                                                return get.damageEffect(target, player, player);
                                            });
                                        if (result.bool) {
                                            var target = result.targets[0];
                                            player.line(target, 'green');
                                            await target.damage(2, player);
                                            if (target != player) {
                                                if (target.isIn() && target.canUse('sha', player, false)) {
                                                    await target.useCard({ name: 'sha' }, player, false, 'noai');
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                        },
                        hy_ny_juejin: {
                            limited: true,
                            audio: 'ext:寰宇兴衰/audio:true',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return player.isMinHp() && game.hasPlayer((c) => c != player);
                            },
                            async content(event, trigger, player) {
                                await player.awakenSkill(event.name);
                                var { result } = await player.chooseTarget(false, '选择一名其他角色令其本局游戏受到伤害+1', lib.filter.notMe).set('ai', function (target) {
                                    return -get.attitude(_status.event.player, target);
                                });
                                if (result.bool) {
                                    var target = result.targets[0];
                                    target.addSkill('hy_ny_juejin2');
                                    player.addTempSkill('hy_ny_juetao');
                                }
                            },
                            derivation: 'hy_ny_juetao',
                        },
                        hy_ny_juejin2: {
                            charlotte: true,
                            forced: true,
                            mark: true,
                            marktext: '决',
                            intro: {
                                content: '本局游戏受到伤害+1',
                            },
                            trigger: {
                                player: 'damageBegin4',
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        hy_ny_juetao: {
                            audio: 'ext:寰宇兴衰/audio:true',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return game.hasPlayer((c) => c != player && player.canCompare(c));
                            },
                            filterTarget(card, player, target) {
                                return target != player && player.canCompare(target);
                            },
                            content() {
                                'step 0';
                                player.loseHp();
                                ('step 1');
                                player.chooseToCompare(target);
                                ('step 2');
                                if (result.bool) {
                                    target.damage(1, player);
                                } else target.draw(1);
                            },
                            ai: {
                                order: 9,
                                result: {
                                    player(player, target) {
                                        if (player.hp > 1) return 1;
                                        return -1;
                                    },
                                    target: -1,
                                },
                            },
                        },
                        hy_ny_bilei: {
                            audio: 'ext:寰宇兴衰/audio:true',
                            groupSkill: 'wei',
                            forced: true,
                            trigger: {
                                global: 'phaseBegin',
                            },
                            content() {
                                player.changeHujia(1, null, false);
                            },
                            group: 'hy_ny_bilei_lo',
                            subSkill: {
                                lo: {
                                    audio: 'hy_ny_bilei',
                                    forced: true,
                                    groupSkill: 'wei',
                                    sourceSkill: 'hy_ny_bilei',
                                    trigger: {
                                        player: 'loseHpBegin',
                                    },
                                    filter(event, player) {
                                        return player.hujia > player.maxHp && Math.random() <= 0.9;
                                    },
                                    content() {
                                        player.changeHujia(-1);
                                        trigger.cancel();
                                    },
                                },
                            },
                        },
                        hy_ny_longyuan: {
                            forced: true,
                            audio: 'ext:寰宇兴衰/audio:2',
                            init(player) {
                                if (!player.storage.hy_ny_longyuan) player.storage.hy_ny_longyuan = 6;
                            },
                        },
                        hy_guixin: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            inherit: 'guixin',
                        },
                        hy_fenshu: {
                            audio: 'ext:寰宇兴衰/audio:true',
                            trigger: {
                                global: 'useCard',
                            },
                            filter(event, player) {
                                if (player == event.player || event.player != _status.currentPhase) return false;
                                var num = Math.max(1, player.getFriends().length);
                                return (
                                    get.type(event.card) == 'trick' &&
                                    event.player
                                        .getHistory('useCard', function (evt) {
                                            return get.type(evt.card) == 'trick';
                                        })
                                        .indexOf(event) < num
                                );
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseBool('是否令此牌无效').set('ai', function () {
                                    var player = _status.event.player;
                                    return get.attitude(player, trigger.player) < 0;
                                });
                                ('step 1');
                                if (result.bool) {
                                    trigger.targets.length = 0;
                                    trigger.all_excluded = true;
                                }
                            },
                        },
                        hy_zulong: {
                            audio: 'ext:寰宇兴衰/audio:true',
                            group: 'hy_zulong_zhunbei',
                            subSkill: {
                                zhunbei: {
                                    forced: true,
                                    audio: 'hy_zulong',
                                    derivation: ['hy_chuanguoyuxi_skill', 'hy_zhenlongchangjian_skill'],
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    content() {
                                        var list = [];
                                        var card1 = get.cardPile2(function (card) {
                                            return card.name == 'hy_zhenlongchangjian';
                                        });
                                        var card2 = get.cardPile2(function (card) {
                                            return card.name == 'hy_chuanguoyuxi';
                                        });
                                        if (card1) list.push(card1);
                                        else {
                                            var target1 = game.findPlayer(function (current) {
                                                return (
                                                    current != player &&
                                                    current.countCards('hesjx', function (card) {
                                                        return card.name == 'hy_zhenlongchangjian';
                                                    })
                                                );
                                            });
                                            if (target1)
                                                player.gain(
                                                    target1.getCards('hesjx', function (card) {
                                                        return card.name == 'hy_zhenlongchangjian';
                                                    }),
                                                    target1,
                                                    'give'
                                                );
                                        }
                                        if (card2) list.push(card2);
                                        else {
                                            var target2 = game.findPlayer(function (current) {
                                                return (
                                                    current != player &&
                                                    current.countCards('hesjx', function (card) {
                                                        return card.name == 'hy_chuanguoyuxi';
                                                    })
                                                );
                                            });
                                            if (target2)
                                                player.gain(
                                                    target2.getCards('hesjx', function (card) {
                                                        return card.name == 'hy_chuanguoyuxi';
                                                    }),
                                                    target2,
                                                    'give'
                                                );
                                        }
                                        if (list.length) player.gain(list, 'gain2');
                                        if (list.length == 0 && !target1 && !target2) player.draw(4);
                                    },
                                },
                            },
                            forced: true,
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                game.broadcastAll(function () {
                                    lib.inpile.add('hy_chuanguoyuxi');
                                    lib.inpile.add('hy_zhenlongchangjian');
                                });
                                game.updateRoundNumber();
                                game.log('传国玉玺和真龙长剑已加入牌堆');
                                var cards = [];
                                cards.push(game.createCard('hy_chuanguoyuxi', 'heart', 7));
                                cards.push(game.createCard('hy_zhenlongchangjian', 'heart', 2));
                                if (cards.length) {
                                    game.cardsGotoPile(cards, () => {
                                        return ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length - 1)];
                                    });
                                }
                            },
                        },
                        hy_shihuang: {
                            group: 'hy_shihuang_me',
                            subSkill: {
                                me: {
                                    forced: true,
                                    silent: true,
                                    popup: false,
                                    _priority: 90,
                                    trigger: {
                                        global: 'phaseAfter',
                                    },
                                    filter(event, player) {
                                        return player.storage.hy_shihuang == false && event.player.isFriendsOf(player);
                                    },
                                    content() {
                                        player.storage.hy_shihuang = true;
                                    },
                                },
                            },
                            audio: 'ext:寰宇兴衰/audio:true',
                            trigger: {
                                global: 'phaseAfter',
                            },
                            init(player) {
                                if (!player.storage.hy_shihuang) player.storage.hy_shihuang = false;
                            },
                            forced: true,
                            filter(event, player) {
                                var num = player.storage.hy_shihuang == true ? 12 * (game.roundNumber / 100) : 6 * (game.roundNumber / 100);
                                if (num > 1) num = 1;
                                return event.player != player && Math.random() <= num;
                            },
                            content() {
                                'step 0';
                                player.storage.hy_shihuang = false;
                                ('step 1');
                                player.phase('nodelay');
                            },
                        },
                        hy_yitong: {
                            audio: 'ext:寰宇兴衰/audio:true',
                            forced: true,
                            group: 'hy_yitong_mod',
                            forced: true,
                            trigger: {
                                player: 'useCard1',
                            },
                            filter(event, player) {
                                var info = get.info(event.card);
                                if (!info.selectTarget || info.selectTarget == -1) return false;
                                return (get.type(event.card) == 'trick' || event.card.name == 'sha') && event.card.name != 'wuxie';
                            },
                            content() { },
                            subSkill: {
                                mod: {
                                    mod: {
                                        targetInRange(card, player, target) {
                                            if (get.type(card) == 'trick' || card.name == 'sha') return true;
                                        },
                                        selectTarget(card, player, range) {
                                            if (card.name == 'wuzhong') {
                                                range[0] = 1;
                                                range[1] += 999;
                                            }
                                            if (Array.isArray(range) && range[1] == -1) return;
                                            if (get.type(card) == 'trick' || card.name == 'sha') range[1] += 999;
                                        },
                                        playerEnabled(card, player, target) {
                                            let info = get.info(card);
                                            if (info.type != 'trick' && card.name != 'sha') {
                                                return;
                                            }
                                            if (info.selectTarget && info.selectTarget !== -1) {
                                                return true;
                                            }
                                            if (info.modTarget) {
                                                if (typeof info.modTarget == 'boolean') return info.modTarget;
                                                if (typeof info.modTarget == 'function') return Boolean(info.modTarget(card, player, target));
                                            }
                                        },
                                    },
                                },
                            },
                        },
                        hy_chuanguoyuxi_skill: {
                            equipSkill: true,
                            group: 'hy_chuanguoyuxi_skill_use',
                            subSkill: {
                                use: {
                                    trigger: {
                                        player: 'phaseUseBegin',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var list = [],
                                            names = [];
                                        for (let i = 0; i < 500; i++) {
                                            var card = get.cardPile((card) => lib.skill.xunshi.isXunshi(card) && !list.includes(card) && !names.includes(card.name));
                                            if (card) {
                                                names.push(card.name);
                                                list.push(card);
                                            } else {
                                                continue;
                                            }
                                        }
                                        player.chooseButton([get.prompt(event.name), [names, 'vcard']]).ai = function (button) {
                                            var player = _status.event.player;
                                            var recover = 0,
                                                lose = 1,
                                                players = game.filterPlayer();
                                            for (const i of players) {
                                                if (i.hp == 1 && get.damageEffect(i, player, player) > 0) {
                                                    if (!i.hasSha()) return button.link[2] == 'nanman' ? 2 : -1;
                                                    return button.link[2] == 'wanjian' ? 2 : -1;
                                                }
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
                                            if (lose > recover && lose > 0) return button.link[2] == 'nanman' || button.link[2] == 'wanjian' ? 1 : -1;
                                            if (lose < recover && recover > 0) return button.link[2] == 'taoyuan' ? 1 : -1;
                                            return button.link[2] == 'wugu' ? 1 : -1;
                                        };
                                        ('step 1');
                                        if (result.bool) {
                                            player.chooseUseTarget(result.links[0][2], true, false);
                                        }
                                    },
                                },
                            },
                        },
                        hy_zhenlongchangjian_skill: {
                            group: 'hy_zhenlongchangjian_skill_wuxie',
                            subSkill: {
                                wuxie: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return (
                                            get.type(event.card) == 'trick' &&
                                            player
                                                .getHistory('useCard', function (evt) {
                                                    return get.type(evt.card) == 'trick';
                                                })
                                                .indexOf(event) == 0
                                        );
                                    },
                                    content() {
                                        trigger.nowuxie = true;
                                    },
                                },
                            },
                        },
                        hy_xingshuai: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            trigger: {
                                player: 'dying',
                            },
                            zhuSkill: true,
                            filter(event, player) {
                                if (player.hp > 0) return false;
                                if (!player.hasZhuSkill('hy_xingshuai')) return false;
                                return game.hasPlayer(function (current) {
                                    return current != player && current.group == 'wei';
                                });
                            },
                            mark: true,
                            limited: true,
                            content() {
                                'step 0';
                                player.awakenSkill('hy_xingshuai');
                                var targets = game.filterPlayer();
                                targets.remove(player);
                                event.targets = targets;
                                event.damages = [];
                                ('step 1');
                                if (event.targets.length) {
                                    var current = event.targets.shift();
                                    if (current.group == 'wei') {
                                        current
                                            .chooseBool('是否令' + get.translation(player) + '回复1点体力？')
                                            .set('ai', function () {
                                                return get.attitude(_status.event.player, _status.event.target) > 2;
                                            })
                                            .set('target', player);
                                        event.current = current;
                                    } else {
                                        event.redo();
                                    }
                                } else {
                                    event.goto(3);
                                }
                                ('step 2');
                                if (result.bool) {
                                    event.damages.push(event.current);
                                    event.current.line(player, 'green');
                                    game.log(event.current, '令', player, '回复1点体力');
                                    player.recover();
                                }
                                if (event.targets.length) {
                                    event.goto(1);
                                }
                                ('step 3');
                                if (event.damages.length) {
                                    var next = game.createEvent('hy_xingshuaI_next');
                                    event.next.remove(next);
                                    trigger.after.push(next);
                                    next.targets = event.damages;
                                    next.setContent(function () {
                                        targets.shift().damage('nosource', 'nocard');
                                        if (targets.length) event.redo();
                                    });
                                }
                            },
                            intro: {
                                content: 'limited',
                            },
                            init: (player, skill) => (player.storage[skill] = false),
                        },
                        hy_mingjian: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: true,
                            selectCard: [1, Infinity],
                            position: 'h',
                            filterTarget: lib.filter.notMe,
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            discard: false,
                            lose: false,
                            delay: false,
                            content() {
                                player.give(cards, target);
                                target.addTempSkill('hy_mingjian_buff', { player: 'phaseAfter' });
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('nogain')) return 0;
                                        if (player.countCards('h') == player.countCards('h', 'du')) return -1;
                                        if (target.hasJudge('lebu')) return 0;
                                        if (get.attitude(player, target) > 3) {
                                            var basis = get.threaten(target);
                                            if (
                                                player == get.zhu(player) &&
                                                player.hp <= 2 &&
                                                player.countCards('h', 'shan') &&
                                                !game.hasPlayer(function (current) {
                                                    return get.attitude(current, player) > 3 && current.countCards('h', 'tao') > 0;
                                                })
                                            )
                                                return 0;
                                            if (target.countCards('h') + player.countCards('h') > target.hp + 2) return basis * 0.8;
                                            return basis;
                                        }
                                        return 0;
                                    },
                                },
                            },
                            subSkill: {
                                buff: {
                                    charlotte: true,
                                    forced: true,
                                    mark: true,
                                    intro: {
                                        content: '跳过下一个弃牌阶段且使用牌无距离和次数限制',
                                    },
                                    trigger: {
                                        player: 'phaseDiscardBefore',
                                    },
                                    content() {
                                        trigger.cancel();
                                    },
                                    mod: {
                                        targetInRange: () => true,
                                        cardUsable(card, player) {
                                            return Infinity;
                                        },
                                    },
                                },
                            },
                        },
                        hy_huituo: {
                            persevereSkill: true,
                            forced: true,
                            audio: 'ext:寰宇兴衰/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                event.num = Math.min(trigger.num, 9);
                                ('step 1');
                                player.chooseTarget(get.prompt('hy_huituo'), '令一名角色进行判定,若结果是红色,该角色回复体力,否则该角色摸牌', false).set('ai', function (target) {
                                    var player = _status.event.player;
                                    if (get.attitude(player, target) > 0) {
                                        return get.recoverEffect(target, player, player) + 1;
                                    }
                                    return 0;
                                });
                                ('step 2');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    target.judge(function (card) {
                                        return 1;
                                    });
                                } else event.finish();
                                ('step 3');
                                switch (result.color) {
                                    case 'red':
                                        var num = event.target.maxHp - event.target.hp,
                                            num1,
                                            num2;
                                        if (trigger.num > num) {
                                            num2 = trigger.num - num;
                                            num1 = num;
                                        } else {
                                            num2 = 0;
                                            num1 = trigger.num;
                                        }
                                        if (num1) event.target.recover(num1);
                                        if (num2) event.target.draw(num2);
                                        break;
                                    case 'black':
                                    case 'none':
                                        event.target.draw(2 * trigger.num);
                                        break;
                                    default:
                                        break;
                                }
                                ('step 4');
                                event.num--;
                                if (event.num > 0) event.goto(1);
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                            },
                        },
                        ye_zhankai: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            mod: {
                                maxHandcardBase(player, num) {
                                    return 12;
                                },
                            },
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.num > 0;
                            },
                            forced: true,
                            logTarget: 'source',
                            content() {
                                'step 0';
                                event.cishu = trigger.num;
                                ('step 1');
                                if (trigger.source) {
                                    if (trigger.source.countCards('e') > 0) {
                                        var cards = trigger.source.getCards('e');
                                        trigger.source.discard(cards);
                                    } else {
                                        if (trigger.source.countCards('h') > 0) {
                                            var cards = trigger.source.getCards('h').randomGets(3);
                                            trigger.source.discard(cards);
                                        }
                                    }
                                }
                                ('step 2');
                                player.draw(3);
                                var card = get.discardPile(function (card) {
                                    return card.name == 'sha';
                                });
                                if (card) player.gain(card, 'gain2');
                                event.cishu--;
                                ('step 3');
                                if (event.cishu > 0) {
                                    event.goto(1);
                                }
                            },
                            ai: {
                                maixie_defend: true,
                            },
                        },
                        ye_zhankaix: {
                            audio: 'ye_zhankai',
                            mod: {
                                maxHandcardBase(player, num) {
                                    return 12;
                                },
                            },
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.num > 0;
                            },
                            forced: true,
                            logTarget: 'source',
                            content() {
                                'step 0';
                                event.cishu = trigger.num;
                                ('step 1');
                                if (trigger.source) {
                                    if (trigger.source.countCards('e') > 0) {
                                        var cards = trigger.source.getCards('e');
                                        trigger.source.discard(cards);
                                    } else {
                                        if (trigger.source.countCards('h') > 0) {
                                            var cards = trigger.source.getCards('h').randomGets(2);
                                            trigger.source.discard(cards);
                                        }
                                    }
                                }
                                ('step 2');
                                player.draw(2);
                                var card = get.discardPile(function (card) {
                                    return card.name == 'sha';
                                });
                                if (card) player.gain(card, 'gain2');
                                event.cishu--;
                                ('step 3');
                                if (event.cishu > 0) {
                                    event.goto(1);
                                }
                            },
                            ai: {
                                maixie_defend: true,
                            },
                        },
                        ye_yangwu: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            trigger: {
                                global: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getEnemies().includes(event.player) && event.card.name == 'wuxie' && event.player != player && event.player.countCards('he') > 0;
                            },
                            logTarget(event) {
                                return event.player;
                            },
                            content() {
                                event.cards = trigger.player.getCards('he').randomGets(3);
                                if (event.cards.length) trigger.player.discard(event.cards);
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        ye_yangwux: {
                            audio: 'ye_yangwu',
                            trigger: {
                                global: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getEnemies().includes(event.player) && event.card.name == 'wuxie' && event.player != player && event.player.countCards('he') > 0;
                            },
                            logTarget(event) {
                                return event.player;
                            },
                            content() {
                                event.cards = trigger.player.getCards('he').randomGets(2);
                                if (event.cards.length) trigger.player.discard(event.cards);
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        ye_shenji: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            group: ['ye_shenji_draw', 'ye_shenji_use'],
                            trigger: {
                                player: 'phaseJudgeBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('j') && player.countCards('he') > 1;
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard(get.prompt('ye_shenji'), '<center>弃置两张牌并弃置自己判定区的所有牌？</center>', 2, 'eh').set('ai', function (card) {
                                    return 6 - get.value(card);
                                });
                                ('step 1');
                                if (result.bool) player.discard(player.getCards('j'));
                            },
                            subSkill: {
                                use: {
                                    trigger: { player: ['useCard2', 'useCardToPlayer'] },
                                    forced: true,
                                    audio: 'ye_shenji',
                                    filter(event, player) {
                                        if (event.card.ye_shenji || 'sha' != event.card.name) return false;
                                        return game.hasPlayer(function (current) {
                                            return !event.targets.includes(current) && lib.filter.filterTarget(event.card, player, current);
                                        });
                                    },
                                    content() {
                                        'step 0';
                                        trigger.card.ye_shenji = true;
                                        var num = game.countPlayer(function (current) {
                                            return !trigger.targets.includes(current) && lib.filter.filterTarget(trigger.card, player, current);
                                        });
                                        player
                                            .chooseTarget(get.prompt('ye_shenji'), '是否为' + get.translation(trigger.card) + '增加至多三个目标？', [1, 3], function (card, player, target) {
                                                var evt = _status.event.getTrigger();
                                                return !evt.targets.includes(target) && lib.filter.filterTarget(evt.card, player, target);
                                            })
                                            .set('ai', function (target) {
                                                var evt = _status.event.getTrigger(),
                                                    eff = get.effect(target, evt.card, evt.player, evt.player);
                                                return eff;
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            event.targets = result.targets;
                                        } else event.finish();
                                        ('step 2');
                                        trigger.targets.addArray(targets);
                                    },
                                },
                                draw: {
                                    audio: 'ye_shenji',
                                    trigger: {
                                        player: 'phaseDrawBegin2',
                                    },
                                    filter(event, player) {
                                        return !event.numFixed;
                                    },
                                    forced: true,
                                    content() {
                                        trigger.num += 3;
                                    },
                                },
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 3;
                                },
                            },
                        },
                        ye_shenjix: {
                            audio: 'ye_shenji',
                            group: ['ye_shenjix_draw', 'ye_shenjix_use'],
                            trigger: {
                                player: 'phaseJudgeBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('j') && player.countCards('he') > 1;
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard(get.prompt('ye_shenjix'), '<center>弃置两张牌并弃置自己判定区的所有牌？</center>', 2, 'eh').set('ai', function (card) {
                                    return 6 - get.value(card);
                                });
                                ('step 1');
                                if (result.bool) player.discard(player.getCards('j'));
                            },
                            subSkill: {
                                use: {
                                    trigger: { player: ['useCard2', 'useCardToPlayer'] },
                                    forced: true,
                                    audio: 'ye_shenjix',
                                    filter(event, player) {
                                        if (event.card.ye_shenjix || 'sha' != event.card.name) return false;
                                        return game.hasPlayer(function (current) {
                                            return !event.targets.includes(current) && lib.filter.filterTarget(event.card, player, current);
                                        });
                                    },
                                    content() {
                                        'step 0';
                                        trigger.card.ye_shenjix = true;
                                        var num = game.countPlayer(function (current) {
                                            return !trigger.targets.includes(current) && lib.filter.filterTarget(trigger.card, player, current);
                                        });
                                        player
                                            .chooseTarget(get.prompt('ye_shenjix'), '是否为' + get.translation(trigger.card) + '增加至多两个目标？', [1, 2], function (card, player, target) {
                                                var evt = _status.event.getTrigger();
                                                return !evt.targets.includes(target) && lib.filter.filterTarget(evt.card, player, target);
                                            })
                                            .set('ai', function (target) {
                                                var evt = _status.event.getTrigger(),
                                                    eff = get.effect(target, evt.card, evt.player, evt.player);
                                                return eff;
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            event.targets = result.targets;
                                        } else event.finish();
                                        ('step 2');
                                        trigger.targets.addArray(targets);
                                    },
                                },
                                draw: {
                                    audio: 'ye_shenjix',
                                    trigger: {
                                        player: 'phaseDrawBegin2',
                                    },
                                    filter(event, player) {
                                        return !event.numFixed;
                                    },
                                    forced: true,
                                    content() {
                                        trigger.num += 2;
                                    },
                                },
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 2;
                                },
                            },
                        },
                        ye_xuli: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            trigger: {
                                player: ['damageEnd'],
                            },
                            filter(event, player) {
                                return player.getDamagedHp() > player.hp;
                            },
                            juexingji: true,
                            derivation: ['ye_shenji', 'ye_zhankai', 'ye_yangwu'],
                            forced: true,
                            content() {
                                'step 0';
                                player.awakenSkill(event.name);
                                player.node.avatar.setBackgroundImage('extension/寰宇兴衰/image/ye_lihuofutu2.jpg');
                                player.maxHp = player.hp;
                                player.update();
                                if (player.countCards('h') < player.hp) player.drawTo(player.hp);
                                ui.clear();
                                player.update();
                                ('step 1');
                                player.addSkills(['ye_shenji', 'ye_zhankai', 'ye_yangwu']);
                                const evt = _status.event.getParent('phase');
                                if (evt && evt.name) {
                                    evt.finish();
                                }
                                player.phase('nodelay');
                            },
                        },
                        ye_xulix: {
                            audio: 'ye_xuli',
                            trigger: {
                                player: ['damageEnd'],
                            },
                            filter(event, player) {
                                return player.getDamagedHp() > player.hp;
                            },
                            juexingji: true,
                            derivation: ['ye_shenjix', 'ye_zhankaix', 'ye_yangwux'],
                            forced: true,
                            content() {
                                'step 0';
                                player.awakenSkill(event.name);
                                player.removeSkills('ye_baguan');
                                player.removeSkills('ye_zhanjiax');
                                player.node.avatar.setBackgroundImage('extension/寰宇兴衰/image/ye_lihuofutu2.jpg');
                                player.maxHp = player.hp;
                                player.update();
                                if (player.countCards('h') < player.hp) player.drawTo(player.hp);
                                ui.clear();
                                player.update();
                                ('step 1');
                                player.addSkills(['ye_shenjix', 'ye_zhankaix', 'ye_yangwux']);
                                const evt = _status.event.getParent('phase');
                                if (evt && evt.name) {
                                    evt.finish();
                                }
                                player.phase('nodelay');
                            },
                        },
                        ye_zhanjia: {
                            trigger: {
                                player: 'damageBegin4',
                            },
                            audio: 'ext:寰宇兴衰/audio:2',
                            filter(event, player) {
                                return event.num > 2;
                            },
                            forced: true,
                            content() {
                                trigger.num = 2;
                                player.draw(2);
                            },
                        },
                        ye_zhanjiax: {
                            trigger: {
                                player: 'damageBegin4',
                            },
                            audio: 'ye_zhanjia',
                            filter(event, player) {
                                return event.num > 2;
                            },
                            usable: 1,
                            forced: true,
                            content() {
                                trigger.num = 2;
                                player.draw(2);
                            },
                        },
                        ye_baguan: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                player.addTempSkill('ye_baguan_yz', { player: 'phaseAfter' });
                                player.phase('nodelay');
                            },
                            subSkill: {
                                yz: {
                                    audio: 'ye_baguan',
                                    trigger: {
                                        player: 'phaseDrawBegin2',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !event.numFixed;
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                },
                            },
                        },
                        yeshenqu: {
                            audio: 'hy_shenqu',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            logTarget: 'source',
                            content() {
                                'step 0';
                                event.num = Math.min(trigger.num, 9);
                                ('step 1');
                                event.card = get.bottomCards(1);
                                var card = event.card.pop();
                                if (card) player.gain(card, 'gain2');
                                if (get.color(card) == 'red') {
                                    player.draw();
                                    if (trigger.source != undefined) {
                                        if (trigger.source.countCards('he') > 0) trigger.source.chooseToDiscard('请弃置一张牌', 'he', true);
                                    }
                                }
                                ('step 2');
                                event.card = get.bottomCards(1);
                                var card = event.card.pop();
                                card.fix();
                                ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
                                game.updateRoundNumber();
                                ('step 3');
                                player.judge(function (card) {
                                    if (get.color(card) == 'red') return 2;
                                    if (get.color(card) != 'red') return 1;
                                });
                                ('step 4');
                                if (result.color == 'red') {
                                    player.draw();
                                }
                                if (result.color == 'black' && trigger.source != undefined) {
                                    if (trigger.source.countCards('he') > 0) trigger.source.chooseToDiscard('请弃置一张牌', 'he', true);
                                }
                                ('step 5');
                                event.num--;
                                ('step 6');
                                if (event.num > 0) {
                                    event.goto(1);
                                }
                            },
                        },
                        yexuanlie: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            audio: 'hy_xuanlie',
                            filter(event, player, source) {
                                return game.hasPlayer(function (current) {
                                    return (
                                        player.getEnemies().includes(current) &&
                                        current != player &&
                                        player.getHistory('gain', function (evt) {
                                            return evt.source == current;
                                        }).length
                                    );
                                });
                            },
                            logTarget(event, player) {
                                return game.filterPlayer(function (current) {
                                    return (
                                        player.getEnemies().includes(current) &&
                                        current != player &&
                                        player.getHistory('gain', function (evt) {
                                            return evt.source == current;
                                        }).length
                                    );
                                });
                            },
                            content() {
                                var targets = game.filterPlayer(function (current) {
                                    return (
                                        player.getEnemies().includes(current) &&
                                        current != player &&
                                        player.getHistory('gain', function (evt) {
                                            return evt.source == current;
                                        }).length
                                    );
                                });
                                for (var target of targets) {
                                    var cards = [];
                                    player.getHistory('gain', function (evt) {
                                        if (evt.source == target) cards.addArray(evt.cards);
                                    });
                                    target.loseHp(cards.length);
                                }
                            },
                            ai: {
                                expose: 0.3,
                            },
                        },
                        yejiutian: {
                            audio: 'hy_jiutian',
                            forced: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return game.hasPlayer((c) => player.getEnemies().includes(c) && c != player && c.countCards('h'));
                            },
                            async content(event, trigger, player) {
                                var targets = game.filterPlayer((c) => player.getEnemies().includes(c) && c != player && c.countCards('h')).sortBySeat();
                                for (const i of targets) {
                                    var { result } = await player.gainPlayerCard(i, 'h', Math.min(2, i.countCards('h')), true);
                                    if (result.bool) {
                                        var cards = result.cards;
                                        var color = [],
                                            suit = [];
                                        for (var c of cards) {
                                            color.add(get.color(c));
                                            suit.add(c.suit);
                                        }
                                        if (color.length > 1) await i.damage(2);
                                        i.loseHp(suit.length);
                                    }
                                }
                            },
                        },
                        hy_dishi: {
                            audio: 'ext:寰宇兴衰/audio:1',
                            trigger: {
                                global: 'useCardToTarget',
                            },
                            filter(event, player) {
                                if (event.card.hy_dishi) return false;
                                return (
                                    (event.targets && event.targets.length > 1) ||
                                    (event.targets.length == 1 &&
                                        (event.card.name == 'sha' || get.type(event.card) == 'trick') &&
                                        game.hasPlayer(function (current) {
                                            return !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, event.player, current) && lib.filter.targetInRange(event.card, event.player, current);
                                        }))
                                );
                            },
                            forced: true,
                            content() {
                                'step 0';
                                trigger.card.hy_dishi = true;
                                var prompt2 = trigger.targets && trigger.targets.length > 1 ? '为' + get.translation(trigger.card) + '减少一个目标' : '为' + get.translation(trigger.card) + '增加一个目标';
                                player
                                    .chooseTarget(get.prompt('hy_dishi'), function (card, player, target) {
                                        var player = _status.event.player;
                                        if (trigger.targets && trigger.targets.length > 1) return _status.event.targets.includes(target);
                                        return !_status.event.targets.includes(target) && lib.filter.targetEnabled2(_status.event.card, trigger.player, target) && lib.filter.targetInRange(_status.event.card, trigger.player, target);
                                    })
                                    .set('prompt2', prompt2)
                                    .set('ai', function (target) {
                                        var trigger = _status.event.getTrigger();
                                        var player = _status.event.player;
                                        return get.effect(target, trigger.card, player, player) * (_status.event.targets.includes(target) ? -1 : 1);
                                    })
                                    .set('targets', trigger.targets)
                                    .set('card', trigger.card);
                                ('step 1');
                                if (result.bool) {
                                    event.targets = result.targets;
                                } else event.finish();
                                ('step 2');
                                if (event.targets) {
                                    if (trigger.targets.includes(event.targets[0])) trigger.targets.removeArray(event.targets);
                                    else trigger.targets.addArray(event.targets);
                                }
                            },
                        },
                        hy_jiutian: {
                            audio: 'ext:寰宇兴衰/audio:1',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    var suits = [],
                                        hs = current.getCards('h');
                                    for (const i of hs) suits.add(i.suit);
                                    return current != player && player.getEnemies().includes(current) && current.countCards('h') > 0 && suits.length > 2;
                                });
                            },
                            forced: true,
                            logTarget(event, player) {
                                return game.filterPlayer(function (current) {
                                    var suits = [],
                                        hs = current.getCards('h');
                                    for (const i of hs) suits.add(i.suit);
                                    return current != player && player.getEnemies().includes(current) && current.countCards('h') > 0 && suits.length > 2;
                                });
                            },
                            content() {
                                'step 0';
                                event.mubiao2 = [];
                                event.huodepai = [];
                                event.huaseshu = [];
                                event.mubiao = game.filterPlayer(function (current) {
                                    var suits = [],
                                        hs = current.getCards('h');
                                    for (const i of hs) suits.add(i.suit);
                                    return current != player && player.getEnemies().includes(current) && current.countCards('h') > 0 && suits.length > 2;
                                });
                                if (event.mubiao.length) event.count = 0;
                                else event.finish();
                                ('step 1');
                                event.cards = event.mubiao[event.count].getCards('h').randomGet();
                                event.huodepai.push(event.cards);
                                event.mubiao2.push(event.mubiao[event.count]);
                                if (!event.huaseshu.includes(event.cards.suit)) event.huaseshu.push(event.cards.suit);
                                ('step 2');
                                event.count++;
                                ('step 3');
                                if (event.count < event.mubiao.length) event.goto(1);
                                ('step 4');
                                if (event.mubiao2.length && event.huodepai.length) {
                                    for (let i = 0; i < event.mubiao2.length; i++) {
                                        player.gain(event.huodepai[i], event.mubiao2[i], 'giveAuto');
                                    }
                                } else event.finish();
                                ('step 5');
                                if (event.huaseshu.length == event.mubiao2.length) {
                                    for (let i = 0; i < event.mubiao2.length; i++) {
                                        event.mubiao2[i].damage('nocard');
                                    }
                                }
                            },
                            ai: {
                                threaten: 1.5,
                                expose: 0.3,
                            },
                        },
                        hy_xuanlie: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            audio: 'ext:寰宇兴衰/audio:1',
                            filter(event, player, source) {
                                return game.hasPlayer(function (current) {
                                    return (
                                        player.getEnemies().includes(current) &&
                                        current != player &&
                                        player.getHistory('gain', function (evt) {
                                            return evt.source == current;
                                        }).length
                                    );
                                });
                            },
                            logTarget(event, player) {
                                return game.filterPlayer(function (current) {
                                    return (
                                        player.getEnemies().includes(current) &&
                                        current != player &&
                                        player.getHistory('gain', function (evt) {
                                            return evt.source == current;
                                        }).length
                                    );
                                });
                            },
                            content() {
                                var targets = game.filterPlayer(function (current) {
                                    return (
                                        player.getEnemies().includes(current) &&
                                        current != player &&
                                        player.getHistory('gain', function (evt) {
                                            return evt.source == current;
                                        }).length
                                    );
                                });
                                for (var target of targets) {
                                    target.damage(1);
                                }
                            },
                            ai: {
                                expose: 0.3,
                            },
                        },
                        hy_shenqu: {
                            audio: 'ext:寰宇兴衰/audio:1',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            logTarget: 'source',
                            content() {
                                'step 0';
                                event.num = Math.min(trigger.num, 9);
                                ('step 1');
                                event.card = get.bottomCards(1);
                                var card = event.card.pop();
                                card.fix();
                                ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
                                game.updateRoundNumber();
                                ('step 2');
                                player.judge(function (card) {
                                    if (get.color(card) == 'red') return 2;
                                    return -1;
                                });
                                ('step 3');
                                if (result.color == 'red') {
                                    player.draw();
                                    if (trigger.source != undefined) {
                                        if (player.getEnemies().includes(trigger.source) && trigger.source.countCards('he') > 0) trigger.source.chooseToDiscard('请弃置一张牌', 'he', true);
                                    }
                                }
                                ('step 4');
                                event.num--;
                                ('step 5');
                                if (event.num > 0) {
                                    event.goto(1);
                                }
                            },
                        },
                        hy_yinyan: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            forced: true,
                            trigger: {
                                global: 'phaseEnd',
                            },
                            filter(event, player) {
                                var cards = [];
                                game.checkGlobalHistory('cardMove', (evt) => {
                                    if (evt.name == 'lose') {
                                        if (evt.position !== ui.discardPile) return false;
                                    } else if (evt.name !== 'cardsDiscard') return false;
                                    if (lib.skill.hy_yinyan.notUseOrRespond(evt, player)) {
                                        cards.addArray(
                                            evt.cards.filter((card) => {
                                                return get.position(card) === 'd';
                                            })
                                        );
                                    }
                                });
                                return cards.length > 1;
                            },
                            notUseOrRespond(event, player) {
                                if (event.name !== 'cardsDiscard') return true;
                                const evtx = event.parent;
                                if (evtx.name !== 'orderingDiscard') return true;
                                const evt2 = evtx.relatedEvent || evtx.parent;
                                return !['useCard', 'respond'].includes(evt2.name);
                            },
                            async content(event, trigger, player) {
                                var { result } = await player.chooseTarget('请选择一名角色对其造成一点火属性伤害', true).set('ai', function (target) {
                                    var player = _status.event.player;
                                    return get.damageEffect(target, player, player, 'fire');
                                });
                                if (result?.bool) {
                                    var target1 = result.targets[0];
                                    target1.damage('fire');
                                }
                                var { result: result1 } = await player
                                    .chooseTarget('请选择一名角色令其回复一点体力', false, function (card, player, target) {
                                        return target != target1;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (target.isDamaged()) return get.recoverEffect(target, player, player);
                                        return get.attitude(player, target);
                                    });
                                if (result1?.bool) {
                                    var target2 = result1?.targets[0];
                                    if (target2.maxHp != target2.hp) target2.recover();
                                    else target2.draw();
                                }
                                var { result: result2 } = await player
                                    .chooseTarget('请选择一名角色令其流失一点体力', false, function (card, player, target) {
                                        return target != target1 && target != target2;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return -get.attitude(player, target);
                                    });
                                if (!result2?.bool) return;
                                var target3 = result2?.targets[0];
                                target3.loseHp();
                            },
                        },
                        hy_luojin: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return game.hasPlayer((c) => c.hasMark('hy_liaoyuan') && c.countCards('he'));
                            },
                            filterTarget(card, player, target) {
                                return target.hasMark('hy_liaoyuan') && target.countCards('he');
                            },
                            content() {
                                player.discardPlayerCard(target, Math.min(2, target.countCards('he')), true);
                            },
                        },
                        hy_liaoyuan: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            forced: true,
                            marktext: '星火',
                            intro: {
                                content: '当前拥有#个标记',
                            },
                            trigger: {
                                global: 'damageEnd',
                            },
                            filter(event, player) {
                                return player != event.player && event.hasNature('fire');
                            },
                            content() {
                                trigger.player.addMark('hy_liaoyuan', 1);
                            },
                            group: ['hy_liaoyuan_round'],
                            subSkill: {
                                round: {
                                    forced: true,
                                    audio: 'hy_liaoyuan',
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    _priority: -1,
                                    filter(event, player) {
                                        return game.hasPlayer((c) => c.hasMark('hy_liaoyuan'));
                                    },
                                    logTarget(event, player) {
                                        return game.filterPlayer(function (current) {
                                            return current.hasMark('hy_liaoyuan');
                                        });
                                    },
                                    async content(event, trigger, player) {
                                        var targets = lib.skill.hy_liaoyuan_round.logTarget(trigger, player).sortBySeat();
                                        for (var target of targets) {
                                            var num = target.countMark('hy_liaoyuan');
                                            for (let i = 0; i < num; i++) {
                                                var { result } = await target.judge();
                                                if (result.color == 'red') target.loseHp();
                                                if (result.color == 'black' && target.countCards('he')) target.discard(target.getCards('he').randomGet());
                                            }
                                            if (game.roundNumber % 2 == 0) {
                                                target.clearMark('hy_liaoyuan');
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        hy_zhanxing: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            forced: true,
                            trigger: {
                                global: 'phaseEnd',
                            },
                            filter(event, player) {
                                return (
                                    game.countPlayer2((c) =>
                                        c.hasHistory('damage', (evt) => {
                                            return evt.hasNature();
                                        })
                                    ) > 0
                                );
                            },
                            content() {
                                'step 0';
                                var card = get.cards()[0];
                                game.cardsGotoOrdering(card);
                                event.cards = [card];
                                event.num = card.number;
                                player.showCards(card, get.translation(player) + '发动了【占星】');
                                ('step 1');
                                var str = get.strNumber(num);
                                player
                                    .chooseControl('大于' + str, '小于' + str)
                                    .set('prompt', '占星:猜测下一张牌的点数')
                                    .set('choice', num < 7 ? 0 : 1)
                                    .set('ai', () => _status.event.choice);
                                ('step 2');
                                var card = get.cards()[0];
                                game.cardsGotoOrdering(card);
                                event.cards.push(card);
                                var num = card.number;
                                player.showCards(card);
                                if ((num > event.num && result.index == 0) || (num < event.num && result.index == 1)) {
                                    player.gain(cards, 'gain2');
                                    player.recover();
                                    event.finish();
                                } else {
                                    game.cardsGotoOrdering(event.cards);
                                    var next = player.chooseToMove();
                                    next.set('list', [['牌堆顶', cards], ['牌堆底']]);
                                    next.set('prompt', '点化:点击将牌移动到牌堆顶或牌堆底');
                                    next.processAI = function (list) {
                                        var cards = list[0][1],
                                            player = _status.event.player;
                                        const target = trigger.player.next;
                                        const att = get.attitude(player, target);
                                        const top = [], bottom = cards;
                                        for (const i of target.getCards('j')) {
                                            const judge = get.judge(i);
                                            bottom.sort((a, b) => (judge(b) - judge(a)) * att); //态度大于0价值高的牌放前面
                                            if (bottom.length) {
                                                top.push(bottom.shift());
                                            }
                                        }
                                        bottom.sort((a, b) => (get.value(b) - get.value(a)) * att); //态度大于0价值高的牌放前面
                                        while (bottom.length) {
                                            top.push(bottom.shift());
                                        }
                                        return [top, bottom];
                                    };
                                }
                                ('step 3');
                                var top = result.moved[0];
                                var bottom = result.moved[1];
                                top.reverse();
                                for (let i = 0; i < top.length; i++) {
                                    ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                                }
                                for (let i = 0; i < bottom.length; i++) {
                                    ui.cardPile.appendChild(bottom[i]);
                                }
                                player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(bottom.length) + '下');
                                game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
                                game.updateRoundNumber();
                            },
                            ai: {
                                threaten: 2.2,
                            },
                        },
                        hy_dihuo: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                let card = ui.cardPile.lastChild;
                                return card;
                            },
                            async content(event, trigger, player) {
                                var card = ui.cardPile.lastChild;
                                if (card) {
                                    player.gain(card);
                                    player.$drawAuto([card]);
                                    await player.showCards(card);
                                }
                                var num = get.cardNameLength(card);
                                if (!num) return;
                                var { result } = await player
                                    .chooseTarget(true, [1, num], '选择视为对至多' + num + '名角色使用一张火攻', function (card, player, target) {
                                        return player.canUse({ name: 'huogong' }, target);
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return -get.attitude(player, target);
                                    });
                                if (result.bool) {
                                    var targets = result.targets.sortBySeat();
                                    player.line('fire', targets);
                                    var baseDamage = 1;
                                    if (num > targets.length) baseDamage += num - targets.length;
                                    player.useCard({ name: 'huogong' }, targets).baseDamage = baseDamage;
                                }
                            },
                            ai: {
                                fireAttack: true,
                                order() {
                                    return get.order({ name: 'huogong' }) + 0.5;
                                },
                            },
                        },
                        hy_tianlei: {
                            trigger: {
                                global: 'phaseZhunbeiBegin',
                            },
                            audio: 'ext:寰宇兴衰/audio:2',
                            filter(event, player) {
                                return player != event.player && player.countCards('h');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseToDiscard('h', false, '弃置一张手牌令其判定').set('ai', function (card) {
                                    var player = _status.event.player;
                                    if (get.attitude(player, trigger.player) < 0) return 8 - get.value(card);
                                    return 0;
                                });
                                ('step 1');
                                if (result.bool) {
                                    var card = result.cards[0];
                                    var s = card.suit,
                                        n = card.number;
                                    (event.s = s), (event.n = n);
                                    trigger.player.judge(function (card) {
                                        var suit = card.suit,
                                            num = card.number;
                                        if (suit == s || num == n) return -10;
                                        return 0;
                                    }).judge2 = function (result) {
                                        return result.suit == s || result.number == n ? true : false;
                                    };
                                } else event.finish();
                                ('step 2');
                                event.judgeResult = get.copy(result);
                                if (result.suit == event.s && result.number == event.n) trigger.player.damage('thunder', 3, player);
                                else if (result.suit == event.s || result.number == event.n) trigger.player.damage('thunder', 1, player);
                                else if (get.position(event.judgeResult.card, true) == 'd') player.gain(event.judgeResult.card, 'gain2');
                            },
                        },
                        hy_hanzhan: {
                            forced: true,
                            audio: 'ext:寰宇兴衰/audio:2',
                            trigger: {
                                global: 'phaseEnd',
                            },
                            filter(event, player) {
                                var card1 = { name: 'sha' },
                                    card2 = { name: 'juedou' };
                                if (player == event.player) {
                                    return game.hasPlayer((c) => player.canUse(card1, c, false) || player.canUse(card2, c, false)) && event.player.isIn() && game.countPlayer((c) => c.getHistory('damage').length) > 1;
                                } else {
                                    return event.player.isIn() && game.countPlayer((c) => c.getHistory('damage').length) > 1 && (player.canUse(card1, event.player, false) || player.canUse(card2, event.player, false));
                                }
                            },
                            async content(event, trigger, player) {
                                var prompt = player != trigger.player ? '对' + get.translation(trigger.player) + '使用一张【杀】或【决斗】' : '选择任意名其他角色对其分别使用一张【杀】或【决斗】';
                                if (player != trigger.player) {
                                    var list = [];
                                    var card1 = { name: 'sha' },
                                        card2 = { name: 'juedou' };
                                    if (player.canUse(card1, trigger.player, false)) list.push('sha');
                                    if (player.canUse(card2, trigger.player, false)) list.push('juedou');
                                    if (list.length) {
                                        var { result } = await player
                                            .chooseControl(list)
                                            .set('prompt', prompt)
                                            .set('ai', () => list.randomGet());
                                        player.useCard({ name: result.control }, trigger.player);
                                    }
                                    return;
                                } else {
                                    if (game.players.length) {
                                        var { result } = await player.chooseTarget([1, Infinity], true, prompt, lib.filter.notMe).set('ai', function (target) {
                                            var player = _status.event.player;
                                            return -get.attitude(player, target);
                                        });
                                        if (result.bool) {
                                            var targets = result.targets.sortBySeat();
                                            for (var target of targets) {
                                                var list = [];
                                                var card1 = { name: 'sha' },
                                                    card2 = { name: 'juedou' };
                                                if (player.canUse(card1, target, false)) list.push('sha');
                                                if (player.canUse(card2, target, false)) list.push('juedou');
                                                if (list.length) {
                                                    var { result } = await player
                                                        .chooseControl(list)
                                                        .set('prompt', '对' + get.translation(target) + '使用一张【杀】或【决斗】')
                                                        .set('ai', () => list.randomGet());
                                                    player.useCard({ name: result.control }, target);
                                                }
                                            }
                                        }
                                    }
                                    return;
                                }
                            },
                        },
                        hy_lingsha: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            forced: true,
                            trigger: {
                                player: 'damageEnd',
                                source: 'damageSource',
                            },
                            filter(event, player) {
                                return event.card && event.notLink() && (event.card.name == 'sha' || event.card.name == 'juedou');
                            },
                            async content(event, trigger, player) {
                                var { result } = await player.chooseTarget(false, lib.filter.notMe, '选择一名其他角色对其造成一点伤害').set('ai', function (target) {
                                    var player = _status.event.player;
                                    return get.damageEffect(target, player, player);
                                });
                                if (result.bool) {
                                    var target = result.targets[0];
                                    target.damage(player);
                                }
                            },
                        },
                        hy_lingqu: {
                            forced: true,
                            trigger: {
                                player: 'damageEnd',
                            },
                            content() {
                                player.draw();
                                player.addSkill('hy_lingqu_hand');
                                player.addMark('hy_lingqu_hand');
                                player.addTempSkill('hy_lingqu_dam');
                            },
                            subSkill: {
                                hand: {
                                    charlotte: true,
                                    forced: true,
                                    mark: true,
                                    intro: {
                                        content: '手牌上限+#',
                                    },
                                    mod: {
                                        maxHandcard: (player, num) => (num += player.countMark('hy_lingqu_hand')),
                                    },
                                },
                                dam: {
                                    charlotte: true,
                                    forced: true,
                                    mark: true,
                                    intro: {
                                        content: '本回合防止受到大于1点的伤害',
                                    },
                                    trigger: {
                                        player: 'damageBegin4',
                                    },
                                    filter(event, player) {
                                        return event.num > 1;
                                    },
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                            },
                        },
                        hy_xuankai: {
                            forced: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            content() {
                                var cards = [];
                                for (let i = 0; i < 3; i++) {
                                    var card = get.cardPile((c) => !cards.includes(c) && ['shan', 'tao', 'jiu'].includes(c.name));
                                    if (card) {
                                        cards.push(card);
                                    }
                                }
                                if (cards.length) player.gain(cards, 'gain2');
                            },
                        },
                        hy_fenhuo: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                var suits = player.getStorage('hy_fenhuo_suit') || [];
                                return player.getCards('he').filter((c) => !suits.includes(c.suit)).length;
                            },
                            filterCard(card, player) {
                                if (player.getStorage('hy_fenhuo_suit').includes(card.suit)) return false;
                                return true;
                            },
                            check(card) {
                                return 6 - get.value(card);
                            },
                            filterTarget(card, player, target) {
                                return game
                                    .filterPlayer(function (current) {
                                        return lib.skill.lztunjiang.filtery({ player: current }, player);
                                    })
                                    .includes(target);
                            },
                            multitarget: true,
                            multiline: true,
                            selectTarget: [1, 2],
                            content() {
                                player.addTempSkill('hy_fenhuo_suit');
                                player.markAuto('hy_fenhuo_suit', [cards[0].suit]);
                                var targets = targets.sortBySeat();
                                for (const i of targets) i.damage('fire', player);
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                            },
                            subSkill: {
                                suit: {
                                    charlotte: true,
                                    intro: {
                                        content: '本回合已弃置过$花色的牌',
                                    },
                                },
                            },
                        },
                        hy_zhuyu: {
                            forced: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            content() {
                                var cards = [],
                                    suits = [];
                                for (let i = 0; i < 4; i++) {
                                    var card = get.cardPile((c) => !cards.includes(c) && !suits.includes(c.suit));
                                    if (card) {
                                        suits.push(card.suit);
                                        cards.push(card);
                                    }
                                }
                                if (cards.length) player.gain(cards, 'gain2');
                            },
                        },
                        hy_tianxiao: {
                            forced: true,
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                if (event.card.name != 'sha') return false;
                                return game.hasPlayer(function (current) {
                                    return lib.skill.lztunjiang.filtery({ player: current }, player) && !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, player, current);
                                });
                            },
                            logTarget(event, player) {
                                return game.filterPlayer(function (current) {
                                    return lib.skill.lztunjiang.filtery({ player: current }, player) && !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, player, current);
                                });
                            },
                            content() {
                                trigger.targets.addArray(lib.skill.yeguiluan.logTarget(trigger, player));
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                                targetInRange(card, player, target, now) {
                                    if (card.name == 'sha') return true;
                                },
                            },
                        },
                        hy_huwei: {
                            forced: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            content() {
                                var cards = [];
                                for (let i = 0; i < 3; i++) {
                                    var card = get.cardPile((c) => c.name == 'sha' && !cards.includes(c));
                                    if (card) cards.push(card);
                                }
                                if (cards.length) player.gain(cards, 'gain2');
                            },
                        },
                        hy_longlin: {
                            forced: true,
                            trigger: {
                                player: 'damageBegin4',
                                source: 'damageBegin2',
                            },
                            filter(event, player, name) {
                                return event.card && get.type2(event.card) == 'trick' && get.tag(event.card, 'damage');
                            },
                            content() {
                                var name = event.triggername;
                                if (name == 'damageBegin2') trigger.num++;
                                else trigger.cancel();
                            },
                        },
                        hy_longhui: {
                            forced: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            content() {
                                var cards = [];
                                for (let i = 0; i < 3; i++) {
                                    var card = get.cardPile((c) => get.type2(c) == 'trick' && !cards.includes(c));
                                    if (card) cards.push(card);
                                }
                                if (cards.length) player.gain(cards, 'gain2');
                            },
                        },
                        hy_mowei: {
                            forced: true,
                            audio: 'ext:寰宇兴衰/audio:2',
                            trigger: {
                                global: 'phaseEnd',
                            },
                            filter(event, player) {
                                if (player.hasSkill('hy_shouhun')) {
                                    var s = player.storage.hy_shouhun.length;
                                    return (
                                        s > 0 &&
                                        player.hasSkill('hy_shouhun') &&
                                        game.hasPlayer((c) => c != player) &&
                                        player.hasHistory('gain', (evtx) => {
                                            return true;
                                        })
                                    );
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                event.num = player.storage.hy_shouhun.length;
                                player.chooseTarget(true, '选择一名其他角色对其造成' + event.num + '点伤害', lib.filter.notMe).set('ai', function (target) {
                                    var player = _status.event.player;
                                    return -get.attitude(player, target);
                                });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    target.damage(event.num, player);
                                }
                            },
                        },
                        hy_shouhun: {
                            forced: true,
                            intro: {
                                content: '当前已获得的兽魂:$',
                            },
                            audio: 'ext:寰宇兴衰/audio:2',
                            trigger: {
                                global: 'phaseBefore',
                                player: ['enterGame', 'phaseBegin'],
                            },
                            derivation: ['hy_longhui', 'hy_longlin', 'hy_huwei', 'hy_tianxiao', 'hy_zhuyu', 'hy_fenhuo', 'hy_xuankai', 'hy_lingqu'],
                            filter(event, player, name) {
                                if (name == 'phaseBegin') return true;
                                return (name != 'phaseBefore' || game.phaseNumber == 0) && player.storage.hy_shouhun.length < 4;
                            },
                            init(player) {
                                if (!player.storage.hy_shouhun) player.storage.hy_shouhun = [];
                            },
                            content() {
                                'step 0';
                                var name = event.triggername;
                                var hun = ['青龙之魂', '白虎之魂', '朱雀之魂', '玄武之魂'];
                                hun.removeArray(player.storage.hy_shouhun);
                                if (hun.length) {
                                    var gainhun = hun.randomGet();
                                    if (gainhun) {
                                        player.storage.hy_shouhun.push(gainhun);
                                        player.markAuto('hy_shouhun', [gainhun]);
                                    }
                                }
                                if (name == 'phaseBefore') event.finish();
                                ('step 1');
                                var list = player.storage.hy_shouhun;
                                player
                                    .chooseControl(list)
                                    .set('ai', function () {
                                        return list.randomGet();
                                    })
                                    .set('prompt', get.prompt('hy_shouhun'))
                                    .set('prompt2', '请选择获得一个魂的技能并失去上次以此法获得的技能');
                                ('step 2');
                                var c = result.control;
                                player.removeSkill(lib.skill.hy_shouhun.derivation);
                                if (c == '青龙之魂') {
                                    player.addSkills('hy_longhui');
                                    player.addSkills('hy_longlin');
                                } else if (c == '白虎之魂') {
                                    player.addSkills('hy_huwei');
                                    player.addSkills('hy_tianxiao');
                                } else if (c == '朱雀之魂') {
                                    player.addSkills('hy_zhuyu');
                                    player.addSkills('hy_fenhuo');
                                } else {
                                    player.addSkills('hy_xuankai');
                                    player.addSkills('hy_lingqu');
                                }
                            },
                        },
                        hy_qiantun: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.group == 'wei';
                            },
                            filterTarget(card, player, target) {
                                return player.canCompare(target) && target.countCards('h') && target != player;
                            },
                            async content(event, trigger, player) {
                                const target = event.target,
                                    cards = target.getCards('h').sort((a, b) => a.number - b.number);
                                const result = await target
                                    .chooseCard('展示任意张手牌,只能用这些牌拼点', [1, Infinity], 'h', true)
                                    .set('maxNum', cards[cards.length - 1].number)
                                    .set('minNum', cards[0].number)
                                    .set('ai', (card) => {
                                        const { player, maxNum, minNum } = get.event();
                                        if (maxNum > 12) return 2;
                                        if (minNum < 2) {
                                            if (card.number == minNum) return 2;
                                            return 0;
                                        }
                                        if ([minNum, maxNum].some((num) => card.number == num)) return 1;
                                        return Math.random() - 0.5;
                                    })
                                    .forResult();
                                if (!result.bool) return;
                                await target.showCards(result.cards);
                                target.addGaintag(result.cards, 'hy_qiantun_tag');
                                const next = player.chooseToCompare(target);
                                next.set('filterCard', (card, player) => {
                                    const bool = (cardx) => cardx.hasGaintag('hy_qiantun_tag');
                                    return !player?.countCards('h', bool) || bool(card);
                                });
                                if (target.countCards('h') + 1 > result.cards.length * 2) next.set('small', true);
                                const result3 = await next.forResult();
                                target.removeGaintag('hy_qiantun_tag');
                                if (result3.winner == player) {
                                    const cards = target.getCards('h', (card) => result.cards.includes(card));
                                    if (cards.length) await target.give(cards, player);
                                } else {
                                    const cards = target.getCards('h', (card) => !result.cards.includes(card));
                                    if (cards.length) await target.give(cards, player);
                                }
                                await player.showHandcards(get.translation(player) + '发动了【谦吞】');
                            },
                            ai: {
                                order: 8,
                                result: {
                                    target: -1,
                                },
                            },
                        },
                        hy_xiezheng: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                return game.hasPlayer((current) => current.countCards('h'));
                            },
                            async cost(event, trigger, player) {
                                event.result = await player
                                    .chooseTarget(get.prompt2('hy_xiezheng'), function (card, player, target) {
                                        return target.countCards('h');
                                    })
                                    .set(
                                        'goon',
                                        (function () {
                                            return (
                                                player.hasValueTarget({ name: 'binglinchengxiax' }) &&
                                                (player.hp > 2 ||
                                                    !player.hasAllHistory('useSkill', (evt) => {
                                                        return evt.skill == 'hy_xiezheng';
                                                    }))
                                            );
                                        })()
                                    )
                                    .set('ai', (target) => {
                                        const { player, goon } = get.event();
                                        if (!goon) return 0;
                                        let val = 0;
                                        if (ui.selected.targets.length) val -= get.sgnAttitude(player, target);
                                        val += get.sgnAttitude(player, target);
                                        if (target.mayHaveSha(player, null, null, 'odds') > 0.5) val *= 2;
                                        return val;
                                    })
                                    .forResult();
                            },
                            async content(event, trigger, player) {
                                for (const target of event.targets.sortBySeat()) {
                                    if (!target.countCards('h')) continue;
                                    const card = target.getCards('h').randomGet();
                                    target.$throw(1, 1000);
                                    game.log(target, '将', '#y一张手牌', '置于了牌堆顶');
                                    await target.lose(card, ui.cardPile, 'insert');
                                    game.updateRoundNumber();
                                }
                                const card = { name: 'binglinchengxiax', xiezheng: true };
                                if (player.hasUseTarget(card)) await player.chooseUseTarget(card, true);
                                if (
                                    !game.hasPlayer2((current) => {
                                        return current.getHistory('damage', (evt) => evt.getParent(card.name)?.card?.xiezheng).length;
                                    })
                                )
                                    await player.loseHp();
                            },
                        },
                        hy_zhaoxiong: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            trigger: { player: 'phaseZhunbeiBegin' },
                            limited: true,
                            init(player) {
                                if (!player.storage.hy_zhaoxiong) player.storage.hy_zhaoxiong = false;
                            },
                            filter(event, player) {
                                return player.isDamaged();
                            },
                            async content(event, trigger, player) {
                                player.awakenSkill('hy_zhaoxiong');
                                player.storage.hy_zhaoxiong = true;
                                player.node.avatar.setBackgroundImage('extension/寰宇兴衰/image/hy_simazhao2.jpg');
                                await player.changeGroup('jin');
                                await player.changeSkills(['hy_weisi', 'hy_dangyi'], ['hy_qiantun']);
                            },
                            derivation: ['hy_weisi', 'hy_dangyi'],
                        },
                        hy_weisi: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.group == 'jin';
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            async content(event, trigger, player) {
                                const target = event.target;
                                if (target.countCards('he')) {
                                    const result = await target
                                        .chooseCard('将任意张手牌移出游戏直到本回合结束', [1, Infinity], 'h')
                                        .set('ai', (card) => {
                                            const { numx, player } = get.event();
                                            if (player.countCards('h', 'sha') <= numx) return 9;
                                            if (card.name == 'sha') return 0;
                                            return 5;
                                        })
                                        .set('numx', player.countCards('h') / 4)
                                        .forResult();
                                    if (result.bool) {
                                        const next = target.addToExpansion(result.cards, 'giveAuto', target);
                                        next.gaintag.add('hy_weisi');
                                        await next;
                                        target
                                            .when({
                                                global: ['phaseBefore', 'phaseAfter'],
                                            })
                                            .then(() => {
                                                const cards = player.getExpansions('hy_weisi');
                                                if (cards.length) {
                                                    player.gain(cards, 'draw');
                                                    game.log(player, '收回了' + get.cnNumber(cards.length) + '张<威肆>牌');
                                                }
                                            });
                                    }
                                }
                                const card = { name: 'juedou' };
                                player
                                    .when({
                                        source: 'damageSource',
                                    })
                                    .filter((evt) => evt.getParent(event.name) == event)
                                    .then(() => {
                                        const cards = trigger.player.getCards('h');
                                        if (cards.length) {
                                            trigger.player.give(cards, player);
                                        }
                                    });
                                if (player.canUse(card, target)) await player.useCard(card, target);
                            },
                            intro: {
                                markcount: 'expansion',
                                mark(dialog, storage, player) {
                                    var cards = player.getExpansions('hy_weisi');
                                    if (player.isUnderControl(true)) dialog.addAuto(cards);
                                    return '共有' + get.cnNumber(cards.length) + '张牌';
                                },
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target: -1,
                                },
                            },
                        },
                        hy_dangyi: {
                            init(player, skill) {
                                player.setMark(skill, 2, false);
                            },
                            zhuSkill: true,
                            usable: 1,
                            trigger: {
                                source: 'damageBegin1',
                            },
                            check(event, player) {
                                return (
                                    get.attitude(player, event.player) < 0 &&
                                    !event.player.hasSkillTag('filterDamage', null, {
                                        player: player,
                                        card: event.card,
                                    })
                                );
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                return player.hasMark('hy_dangyi');
                            },
                            async content(event, trigger, player) {
                                player.removeMark('hy_dangyi', 1, false);
                                trigger.num++;
                            },
                            audio: 'ext:寰宇兴衰/audio:2',
                            mark: true,
                            intro: {
                                content: '剩余可发动次数为$',
                            },
                        },
                        ye_wushuang: {
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
                                    var id = (player == trigger.player ? trigger.target : trigger.player).playerid;
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
                                    if ((arg.card && arg.card.name != 'juedou') || Math.floor(arg.target.countCards('h', 'sha') / 2) > player.countCards('h', 'sha')) return false;
                                    if ((arg.card && arg.card.name != 'sha') || arg.target.countCards('h', 'shan') > 1) return false;
                                },
                            },
                            audio: 'ext:寰宇兴衰/audio:2',
                        },
                        ye_xiuluo: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            forced: true,
                            trigger: {
                                player: ['enterGame', 'changeHpAfter', 'gainMaxHpAfter', 'loseMaxHpAfter'],
                                global: 'phaseBefore',
                            },
                            derivation: ['ye_shenjian', 'ye_liezhu', 'ye_fumo', 'ye_jingang', 'ye_kuangji'],
                            init(player) {
                                if (!player.storage.ye_xiuluo2) player.storage.ye_xiuluo2 = 0;
                                if (!player.storage.ye_xiuluo) player.storage.ye_xiuluo = ['ye_jingang', 'ye_fumo', 'ye_shenjian', 'ye_liezhu'];
                            },
                            filter(event, player, name) {
                                if (name == 'changeHpAfter' || name == 'gainMaxHpAfter' || name == 'loseMaxHpAfter') return (player.storage.ye_xiuluo2 == 0 && player.hp <= (Math.floor(player.maxHp) / 3) * 2) || (player.storage.ye_xiuluo2 == 1 && player.hp <= Math.floor(player.maxHp) / 3);
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                var name = event.triggername;
                                if (name == 'changeHpAfter' || name == 'gainMaxHpAfter' || name == 'loseMaxHpAfter') {
                                    const evt = _status.event.getParent('phase');
                                    if (evt && evt.name) {
                                        evt.finish();
                                    }
                                    if (player.storage.ye_xiuluo2 == 0 && player.hp <= (Math.floor(player.maxHp) / 3) * 2) {
                                        player.storage.ye_xiuluo2++;
                                        var skills = player.storage.ye_xiuluo;
                                        skills.removeArray(player.getSkills());
                                        var skill = skills.randomGet();
                                        if (skill) player.addSkills(skill);
                                    }
                                    if (player.storage.ye_xiuluo2 == 1 && player.hp <= Math.floor(player.maxHp) / 3) {
                                        player.storage.ye_xiuluo2++;
                                        player.addSkills('ye_kuangji');
                                    }
                                    player.phase('nodelay');
                                } else {
                                    var skills = player.storage.ye_xiuluo;
                                    skills.removeArray(player.getSkills());
                                    var skill = skills.randomGet();
                                    if (skill) player.addSkills(skill);
                                }
                            },
                        },
                        ye_kuangji: {
                            group: 'ye_kuangji_dis',
                            subSkill: {
                                dis: {
                                    forced: true,
                                    audio: 'ye_kuangji',
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    filter(event, player) {
                                        return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && event.player && event.player.isIn() && player.getEnemies().includes(event.player) && event.player.countCards('h');
                                    },
                                    content() {
                                        var target = trigger.player,
                                            card = trigger.player.getCards('h').randomGet();
                                        if (card) target.discard(card).discarder = player;
                                    },
                                },
                            },
                            audio: 'ext:寰宇兴衰/audio:2',
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 1;
                                },
                                selectTarget(card, player, range) {
                                    if (Array.isArray(range) && range[1] == -1) return;
                                    if (card.name == 'sha' || card.name == 'juedou') range[1] += 2;
                                },
                            },
                            trigger: {
                                player: 'phaseDrawAfter',
                            },
                            prompt: '是否发动【狂戟】:弃置所有手牌,然后将手牌摸至10',
                            content() {
                                'step 0';
                                player.discard(player.getCards('h'));
                                ('step 1');
                                player.drawTo(10);
                            },
                        },
                        ye_jingang: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            forced: true,
                            group: 'ye_jingang_cl',
                            subSkill: {
                                cl: {
                                    forced: true,
                                    silent: true,
                                    popup: false,
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    content() {
                                        for (const i of game.players) {
                                            i.storage.ye_jingang = [];
                                        }
                                    },
                                },
                            },
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.source && event.source.isIn() && player != event.source;
                            },
                            async content(event, trigger, player) {
                                var target = trigger.source;
                                var cards = target.getCards('he'),
                                    suits = [];
                                if (!target.storage.ye_jingang) target.storage.ye_jingang = [];
                                for (const i of cards) {
                                    if (!target.storage.ye_jingang.includes(i.suit)) suits.push(i.suit);
                                }
                                if (!target.countCards('he') || !suits.length) {
                                    target.damage(player);
                                    return;
                                } else
                                    var { result } = await target
                                        .chooseCard('he', '交给' + get.translation(player) + '一张符合条件的牌,否则受到来自其的一点伤害', (card) => suits.includes(card.suit))
                                        .set('ai', function (card) {
                                            return 5 - get.value(card);
                                        });
                                if (result.bool) {
                                    var card = result.cards[0];
                                    target.storage.ye_jingang.push(card.suit);
                                    target.give(card, player);
                                } else target.damage(player);
                            },
                        },
                        hy_jingang: {
                            audio: 'ye_jingang',
                            forced: true,
                            group: 'hy_jingang_cl',
                            subSkill: {
                                cl: {
                                    forced: true,
                                    silent: true,
                                    popup: false,
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    content() {
                                        for (const i of game.players) {
                                            i.storage.ye_jingang = [];
                                        }
                                    },
                                },
                            },
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.source && event.source.isIn() && player != event.source;
                            },
                            getIndex(event, player) {
                                return event.num;
                            },
                            async content(event, trigger, player) {
                                var target = trigger.source;
                                const cards = target.getCards('he'),
                                    suits = [];
                                if (!target.storage.hy_jingang) target.storage.hy_jingang = [];
                                for (const i of cards) {
                                    if (!target.storage.hy_jingang.includes(i.suit)) suits.push(i.suit);
                                }
                                if (!target.countCards('he') || !suits.length) {
                                    target.damage(player);
                                } else {
                                    var { result } = await target
                                        .chooseCard('he', '交给' + get.translation(player) + '一张符合条件的牌,否则受到来自其的一点伤害', (card) => suits.includes(card.suit))
                                        .set('ai', function (card) {
                                            return 5 - get.value(card);
                                        });
                                    if (result.bool) {
                                        var card = result.cards[0];
                                        target.storage.hy_jingang.push(card.suit);
                                        target.give(card, player);
                                    } else target.damage(player);
                                }
                            },
                        },
                        ye_fumo: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            forced: true,
                            trigger: {
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            filter(event, player) {
                                const evt = event.getl(player);
                                if (player == _status.currentPhase) return false;
                                if (evt && evt.es && evt.es.length) return true;
                                return false;
                            },
                            async content(event, trigger, player) {
                                var num = trigger.getl(player).es.length || 0;
                                while (num > 0) {
                                    num--;
                                    var targets = player.getEnemies().sortBySeat();
                                    for (const i of targets) {
                                        var cards = [];
                                        if (i.countCards('e')) cards.addArray(i.getCards('e').randomGets(2));
                                        var oo = cards.length;
                                        if (i.countCards('h') && cards.length < 2) cards.addArray(i.getCards('h').randomGets(2 - oo));
                                        if (cards.length) i.discard(cards).discarder = player;
                                    }
                                }
                            },
                        },
                        hy_fumo: {
                            audio: 'ye_fumo',
                            forced: true,
                            trigger: {
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            filter(event, player) {
                                const evt = event.getl(player);
                                if (evt && evt.es && evt.es.length) return true;
                                return false;
                            },
                            async content(event, trigger, player) {
                                var num = trigger.getl(player).es.length || 0;
                                while (num > 0) {
                                    num--;
                                    var targets = player.getEnemies().sortBySeat();
                                    for (const i of targets) {
                                        var cards = [];
                                        if (i.countCards('e')) cards.addArray(i.getCards('e').randomGets(3));
                                        var oo = cards.length;
                                        if (i.countCards('h') && cards.length < 3) cards.addArray(i.getCards('h').randomGets(3 - oo));
                                        if (cards.length) i.discard(cards).discarder = player;
                                    }
                                }
                            },
                        },
                        ye_liezhu: {
                            subSkill: {
                                cl: {
                                    charlotte: true,
                                },
                            },
                            forced: true,
                            audio: 'ext:寰宇兴衰/audio:2',
                            trigger: {
                                source: 'damageSource',
                            },
                            filter(event, player) {
                                return event.card && ((event.card.name == 'sha' && !player.getStorage('ye_liezhu_cl').includes('sha')) || (event.card.name == 'juedou' && !player.getStorage('ye_liezhu_cl').includes('juedou')));
                            },
                            content() {
                                player.addTempSkill('ye_liezhu_cl');
                                player.markAuto('ye_liezhu_cl', trigger.card.name);
                                var cards = get.cards(5),
                                    cardx = [];
                                game.cardsGotoOrdering(cards);
                                for (const i of cards) {
                                    if (get.type(i) == 'basic' || get.type(i) == 'equip') cardx.push(i);
                                }
                                if (cardx.length) player.gain(cardx, 'gain2');
                            },
                        },
                        hy_liezhu: {
                            subSkill: {
                                cl: {
                                    charlotte: true,
                                },
                            },
                            forced: true,
                            audio: 'ye_liezhu',
                            trigger: {
                                source: 'damageSource',
                            },
                            filter(event, player) {
                                return event.card && ((event.card.name == 'sha' && !player.getStorage('hy_liezhu_cl').includes('sha')) || (event.card.name == 'juedou' && !player.getStorage('hy_liezhu_cl').includes('juedou')));
                            },
                            content() {
                                player.addTempSkill('hy_liezhu_cl');
                                player.markAuto('hy_liezhu_cl', trigger.card.name);
                                var cards = get.cards(10),
                                    cardx = [];
                                game.cardsGotoOrdering(cards);
                                for (const i of cards) {
                                    if (get.type(i) == 'basic' || get.type(i) == 'equip') cardx.push(i);
                                }
                                if (cardx.length) player.gain(cardx, 'gain2');
                            },
                        },
                        ye_shenjian: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            forced: true,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return (event.card.name == 'sha' || event.card.name == 'juedou') && event.target && event.target.isIn();
                            },
                            content() {
                                trigger.target.damage();
                            },
                        },
                        hy_shenjian: {
                            audio: 'ye_shenjian',
                            forced: true,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return (event.card.name == 'sha' || event.card.name == 'juedou') && event.target && event.target.isIn();
                            },
                            content() {
                                trigger.target.damage(2);
                            },
                        },
                        ye_qiantun4: { audio: 'ext:寰宇兴衰/audio:true' },
                        ye_qiantun3: { audio: 'ext:寰宇兴衰/audio:true' },
                        hy_qiantun4: { audio: 'ext:寰宇兴衰/audio:true' },
                        hy_qiantun3: { audio: 'ext:寰宇兴衰/audio:true' },
                        ye_qiantun: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player.canCompare(target) && target.countCards('h') && target != player;
                            },
                            async content(event, trigger, player) {
                                const target = event.target,
                                    cards = target.getCards('h').sort((a, b) => a.number - b.number);
                                const result = await target
                                    .chooseCard('展示任意张手牌,只能用这些牌拼点', [1, Infinity], 'h', true)
                                    .set('maxNum', cards[cards.length - 1].number)
                                    .set('minNum', cards[0].number)
                                    .set('ai', (card) => {
                                        const { player, maxNum, minNum } = get.event();
                                        if (maxNum > 12) return 2;
                                        if (minNum < 2) {
                                            if (card.number == minNum) return 2;
                                            return 0;
                                        }
                                        if ([minNum, maxNum].some((num) => card.number == num)) return 1;
                                        return Math.random() - 0.5;
                                    })
                                    .forResult();
                                if (!result.bool) return;
                                await target.showCards(result.cards);
                                target.addGaintag(result.cards, 'ye_qiantun_tag');
                                const next = player.chooseToCompare(target);
                                next.set('filterCard', (card, player) => {
                                    const bool = (cardx) => cardx.hasGaintag('ye_qiantun_tag');
                                    return !player?.countCards('h', bool) || bool(card);
                                });
                                if (target.countCards('h') + 1 > result.cards.length * 2) next.set('small', true);
                                const result3 = await next.forResult();
                                target.removeGaintag('ye_qiantun_tag');
                                if (result3.winner == player) {
                                    const cards = target.getCards('h', (card) => result.cards.includes(card));
                                    if (cards.length) await target.give(cards, player);
                                } else {
                                    const cards = target.getCards('h', (card) => !result.cards.includes(card));
                                    if (cards.length) await target.give(cards, player);
                                }
                                await player.showHandcards(get.translation(player) + '发动了【谦吞】');
                            },
                            ai: {
                                order: 8,
                                result: {
                                    target: -1,
                                },
                            },
                            group: 'ye_qiantun_m',
                            subSkill: {
                                m: {
                                    trigger: {
                                        player: 'compare',
                                        target: 'compare',
                                    },
                                    filter(event, player) {
                                        return !event.iwhile;
                                    },
                                    forced: true,
                                    preHidden: true,
                                    content() {
                                        'step 0';
                                        var num = player.maxHp;
                                        event.num = num;
                                        player
                                            .chooseControl('点数+' + num + '', '点数-' + num + '', 'cancel2')
                                            .set('prompt', get.prompt2('ye_qiantun'))
                                            .set('ai', function () {
                                                if (_status.event.small) return 1;
                                                return 0;
                                            })
                                            .set('small', trigger.small);
                                        ('step 1');
                                        if (result.index != 2) {
                                            if (result.index == 0) {
                                                game.log(player, '拼点牌点数+' + num + '');
                                                if (player == trigger.player) {
                                                    trigger.num1 += num;
                                                    if (trigger.num1 > 13) trigger.num1 = 13;
                                                } else {
                                                    trigger.num2 += num;
                                                    if (trigger.num2 > 13) trigger.num2 = 13;
                                                }
                                            } else {
                                                game.log(player, '拼点牌点数-' + num + '');
                                                if (player == trigger.player) {
                                                    trigger.num1 -= num;
                                                    if (trigger.num1 < 1) trigger.num1 = 1;
                                                } else {
                                                    trigger.num2 -= num;
                                                    if (trigger.num2 < 1) trigger.num2 = 1;
                                                }
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        hy_xiezheng2: { audio: 'ext:寰宇兴衰/audio:2' },
                        hy_xiezheng3: { audio: 'ext:寰宇兴衰/audio:2' },
                        ye_xiezheng2: { audio: 'ext:寰宇兴衰/audio:2' },
                        ye_xiezheng3: { audio: 'ext:寰宇兴衰/audio:2' },
                        ye_xiezheng: {
                            audio: 'ye_xiezheng2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                return game.hasPlayer((current) => current.countCards('h'));
                            },
                            async cost(event, trigger, player) {
                                event.result = await player
                                    .chooseTarget(get.prompt2('ye_xiezheng'), [1, 3], function (card, player, target) {
                                        return target.countCards('h');
                                    })
                                    .set(
                                        'goon',
                                        (function () {
                                            return (
                                                player.hasValueTarget({ name: 'binglinchengxiax' }) &&
                                                (player.hp > 2 ||
                                                    !player.hasAllHistory('useSkill', (evt) => {
                                                        return evt.skill == 'ye_xiezheng';
                                                    }))
                                            );
                                        })()
                                    )
                                    .set('ai', (target) => {
                                        const { player, goon } = get.event();
                                        if (!goon) return 0;
                                        let val = 0;
                                        if (ui.selected.targets.length) val -= get.sgnAttitude(player, target);
                                        val += get.sgnAttitude(player, target);
                                        if (target.mayHaveSha(player, null, null, 'odds') > 0.5) val *= 2;
                                        return val;
                                    })
                                    .forResult();
                            },
                            async content(event, trigger, player) {
                                for (const target of event.targets.sortBySeat()) {
                                    if (!target.countCards('h')) continue;
                                    const result = await target
                                        .chooseCard('h', true, '将一张手牌置于牌堆顶')
                                        .set('targetx', player)
                                        .set('ai', (card) => {
                                            const { player, targetx } = get.event();
                                            let att = 0;
                                            if (player && target) att = get.sgnAttitude(player, targetx);
                                            let val = 7 - get.value(card);
                                            if (card.name == 'sha') val += att * 4;
                                            return val;
                                        })
                                        .forResult();
                                    if (result.bool) {
                                        target.$throw(1, 1000);
                                        game.log(target, '将', '#y一张手牌', '置于了牌堆顶');
                                        await target.lose(result.cards, ui.cardPile, 'insert');
                                        game.updateRoundNumber();
                                    }
                                }
                                const card = { name: 'binglinchengxiax', xiezheng: true };
                                if (player.hasUseTarget(card)) await player.chooseUseTarget(card, true);
                                if (
                                    !game.hasPlayer2((current) => {
                                        return current.getHistory('damage', (evt) => evt.getParent(card.name)?.card?.xiezheng).length;
                                    })
                                ) {
                                    if (!player.countCards('he')) {
                                        await player.loseHp();
                                        await player.draw(3);
                                    }
                                    var { result } = await player.chooseBool('失去一点体力并摸三张牌,否则弃置一张牌并回复一点体力').set('ai', function () {
                                        var player = get.player();
                                        if (player.hp > 2) return 1;
                                        return 0;
                                    });
                                    if (result.bool) {
                                        await player.loseHp();
                                        await player.draw(3);
                                    } else {
                                        var { result } = await player.chooseToDiscard(true, 'he', '弃置一张牌并回复一点体力').set('ai', function (card) {
                                            return -get.value(card);
                                        });
                                        if (result.bool) await player.recover();
                                    }
                                }
                            },
                        },
                        ye_zhaoxiong: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            persevereSkill: true,
                            trigger: { player: 'phaseZhunbeiBegin' },
                            limited: true,
                            init(player) {
                                if (!player.storage.ye_zhaoxiong) player.storage.ye_zhaoxiong = false;
                            },
                            filter(event, player) {
                                return player.isDamaged();
                            },
                            async content(event, trigger, player) {
                                if (lib.config.extension_寰宇兴衰_hy_texiao == 'on') {
                                    dcdAnim.loadSpine(ziye.SS_smz_fadongjineng.name, 'skel', function () {
                                        game.playAudio('../extension/寰宇兴衰/effect/audio/effect_simazhao_skill.mp3');
                                        dcdAnim.playSpine(ziye.SS_smz_fadongjineng, {
                                            scale: 0.9,
                                            speed: 1,
                                        });
                                    });
                                }
                                player.awakenSkill('ye_zhaoxiong');
                                player.node.avatar.setBackgroundImage('extension/寰宇兴衰/image/ye_simazhao2.jpg');
                                player.storage.ye_zhaoxiong = true;
                                await player.changeGroup('jin');
                                await player.changeSkills(['ye_weisi', 'ye_dangyi'], ['ye_qiantun']);
                            },
                            derivation: ['ye_weisi', 'ye_dangyi'],
                        },
                        ye_weisi3: { audio: 'ext:寰宇兴衰/audio:true' },
                        hy_weisi3: { audio: 'ext:寰宇兴衰/audio:true' },
                        ye_weisi: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            init(player) {
                                if (!player.storage.ye_weisi) player.storage.ye_weisi = false;
                            },
                            async content(event, trigger, player) {
                                const target = event.target;
                                if (target.countCards('he')) {
                                    const result = await target
                                        .chooseCard('将任意张手牌移出游戏直到本回合结束', [1, Infinity], 'h')
                                        .set('ai', (card) => {
                                            if (card.name == 'sha') return 0;
                                            return get.value(card) - 6;
                                        })//QQQ
                                        .forResult();
                                    if (result.bool) {
                                        const next = target.addToExpansion(result.cards, 'giveAuto', target);
                                        next.gaintag.add('ye_weisi');
                                        await next;
                                        target
                                            .when({
                                                global: ['phaseBefore', 'phaseAfter'],
                                            })
                                            .then(() => {
                                                const cards = player.getExpansions('ye_weisi');
                                                if (cards.length) {
                                                    player.gain(cards, 'draw');
                                                    game.log(player, '收回了' + get.cnNumber(cards.length) + '张<威肆>牌');
                                                }
                                            });
                                    }
                                }
                                var card = { name: 'juedou', weisi: true };
                                player
                                    .when({
                                        source: 'damageSource',
                                    })
                                    .filter((evt) => evt.getParent(event.name) == event)
                                    .then(() => {
                                        const cards = trigger.player.getCards('h');
                                        if (cards.length) {
                                            trigger.player.give(cards, player);
                                            player.storage.ye_weisi = true;
                                        }
                                    });
                                if (player.canUse(card, target)) await player.useCard(card, target);
                                const num = target.getExpansions('ye_weisi').length;
                                if (!player.storage.ye_weisi) await player.draw(num);
                                player.storage.ye_weisi = false;
                            },
                            intro: {
                                markcount: 'expansion',
                                mark(dialog, storage, player) {
                                    var cards = player.getExpansions('ye_weisi');
                                    if (player.isUnderControl(true)) dialog.addAuto(cards);
                                    return '共有' + get.cnNumber(cards.length) + '张牌';
                                },
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target: -1,
                                },
                            },
                        },
                        ye_dangyi: {
                            persevereSkill: true,
                            trigger: {
                                source: 'damageBegin1',
                            },
                            check(event, player) {
                                return (
                                    get.attitude(player, event.player) < 0 &&
                                    !event.player.hasSkillTag('filterDamage', null, {
                                        player: player,
                                        card: event.card,
                                    })
                                );
                            },
                            logTarget: 'player',
                            async content(event, trigger, player) {
                                trigger.num++;
                            },
                            audio: 'ext:寰宇兴衰/audio:2',
                            mark: true,
                        },
                        yebianzhi: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            persevereSkill: true,
                            forced: true,
                            charlotte: true,
                            superCharlotte: true,
                            firstDo: true,
                            fixed: true,
                            forced: true,
                            trigger: {
                                global: 'phaseEnd',
                            },
                            filter(event, player) {
                                return (
                                    !game.getGlobalHistory('everything', (evt) => {
                                        return evt.name == 'dying' && evt.player == player;
                                    }).length && game.hasPlayer((c) => c.hp < c.maxHp)
                                );
                            },
                            async content(event, trigger, player) {
                                var { result } = await player
                                    .chooseTarget('选择一名角色令其回复体力至体力上限', (card, player, target) => {
                                        return target.hp < target.maxHp;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(_status.event.player, target);
                                    });
                                if (!result.bool) return;
                                var target = result.targets[0];
                                await target.recoverTo(target.maxHp);
                            },
                        },
                        yehuixiang: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            persevereSkill: true,
                            forced: true,
                            charlotte: true,
                            superCharlotte: true,
                            firstDo: true,
                            fixed: true,
                            trigger: {
                                player: 'dieBefore',
                            },
                            filter(event, player) {
                                return player.hp > 0;
                            },
                            content() {
                                trigger.cancel();
                            },
                            init(player) {
                                if (!player.storage.yehuixiang) player.storage.yehuixiang = 0;
                            },
                            mark: true,
                            intro: {
                                content: '本轮已发动过#次',
                            },
                            group: 'yehuixiang_fuhuo',
                            subSkill: {
                                fuhuo: {
                                    trigger: {
                                        global: 'dying',
                                    },
                                    filter(event, player) {
                                        return player.storage.yehuixiang < game.countPlayer() && player.countMark('yechenai') >= event.player.maxHp;
                                    },
                                    prompt2(event, player) {
                                        return '弃置' + get.cnNumber(event.player.maxHp) + '枚<微尘>标记令' + get.translation(event.player) + '回复体力至体力上限';
                                    },
                                    check(event, player) {
                                        if (get.attitude(event.player, player) > 0) return true;
                                        return false;
                                    },
                                    content() {
                                        player.removeMark('yechenai', trigger.player.maxHp);
                                        trigger.player.recoverTo(trigger.player.maxHp);
                                        player.storage.yehuixiang++;
                                        player
                                            .when({
                                                global: 'roundStart',
                                            })
                                            .then(() => {
                                                player.storage.yehuixiang = 0;
                                            });
                                    },
                                },
                            },
                        },
                        yejinzhi: {
                            group: 'yejinzhi_cl',
                            subSkill: {
                                cl: {
                                    forced: true,
                                    silent: true,
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    filter(event, player) {
                                        var num = 0;
                                        for (const i of game.players) {
                                            if (i.hasSkill('yejinzhi_no')) num++;
                                        }
                                        return num > 0;
                                    },
                                    content() {
                                        for (const i of game.players) {
                                            if (i.hasSkill('yejinzhi_no')) i.removeSkill('yejinzhi_no');
                                        }
                                    },
                                },
                                no: {
                                    charlotte: true,
                                    forced: true,
                                    mod: {
                                        cardEnabled(card, player) {
                                            return false;
                                        },
                                        cardRespondable(card, player) {
                                            return false;
                                        },
                                        cardSavable(card, player) {
                                            return false;
                                        },
                                        cardDiscardable(card, player) {
                                            return false;
                                        },
                                    },
                                    intro: {
                                        name: '束缚',
                                        content: '不能使用,打出或弃置牌',
                                    },
                                    marktext: '束缚',
                                    mark: true,
                                },
                            },
                            audio: 'ext:寰宇兴衰/audio:2',
                            persevereSkill: true,
                            forced: true,
                            charlotte: true,
                            superCharlotte: true,
                            silent: true,
                            firstDo: true,
                            fixed: true,
                            trigger: {
                                player: ['damageEnd', 'loseHpAfter'],
                            },
                            filter(event, player) {
                                var target = event.source || event.parent.player;
                                return target?.isIn() && !target.hasSkill('yejinzhi_no');
                            },
                            async content(event, trigger, player) {
                                var target = trigger.source || trigger.parent.player;
                                if (target?.isIn()) {
                                    var { result } = await player
                                        .chooseBool('令' + get.translation(target) + '获得【束缚】直到你的回合结束')
                                        .set('ai', function () {
                                            if (get.attitude(_status.event.player, _status.event.target) < 0) return 1;
                                            return 0;
                                        })
                                        .set('target', target);
                                    if (!result.bool) return;
                                    target.addSkill('yejinzhi_no');
                                }
                            },
                        },
                        yechenai: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            persevereSkill: true,
                            forced: true,
                            charlotte: true,
                            superCharlotte: true,
                            silent: true,
                            firstDo: true,
                            fixed: true,
                            marktext: '微尘',
                            intro: {
                                name: '微尘',
                                content: '共有#个<微尘>标记',
                            },
                            trigger: {
                                global: ['useCardAfter', 'respondAfter', 'loseAfter', 'loseAsyncAfter', 'changeHpAfter', 'gainMaxHpAfter', 'loseMaxHpAfter'],
                            },
                            filter(event, player, name) {
                                if (['loseAfter', 'loseAsyncAfter'].includes(name)) return event.type == 'discard' && event.getl(event.player).cards2.length;
                                return true;
                            },
                            async content(event, trigger, player) {
                                var name = event.triggername,
                                    num = 1;
                                if (['loseAfter', 'loseAsyncAfter'].includes(name)) num = trigger.getl(trigger.player).cards2.length;
                                else if (['changeHp', 'loseMaxHpAfter', 'gainMaxHpAfter'].includes(name)) num = Math.abs(trigger.num);
                                player.addMark('yechenai', num);
                            },
                            group: ['yechenai_buff'],
                            derivation: ['yehuixiang', 'yejinzhi', 'yebianzhi'],
                            init(player) {
                                player.addSkills('yehuixiang');
                                player.addSkills('yejinzhi');
                                player.addSkills('yebianzhi');
                            },
                            subSkill: {
                                buff: {
                                    audio: 'yechenai',
                                    persevereSkill: true,
                                    fixed: true,
                                    forced: true,
                                    charlotte: true,
                                    superCharlotte: true,
                                    firstDo: true,
                                    trigger: {
                                        player: ['loseMaxHpBefore', 'judgeBefore', 'damageBegin4', 'loseHpBegin'],
                                    },
                                    _priority: '-999',
                                    filter(event, player, name) {
                                        if (name == 'loseMaxHpBefore' || name == 'judgeBefore') return true;
                                        return event.num > 1;
                                    },
                                    content() {
                                        var name = event.triggername;
                                        if (name == 'judgeBefore') trigger.cancel();
                                        else if (name == 'loseMaxHpBefore') trigger.cancel();
                                        else trigger.num = 1;
                                    },
                                    ai: {
                                        noCompareTarget: true,
                                    },
                                },
                            },
                        },
                        yejilve: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            group: ['yejilve_guicai', 'yejilve_fangzhu', 'yejilve_zhws', 'yejilve_jizhi'],
                            ai: { combo: 'yerenjie' },
                            subSkill: {
                                no: { charlotte: true },
                                jizhi: {
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    audio: 'yejilve',
                                    filter(event, player) {
                                        return player.hasMark('yerenjie') && !player.hasSkill('yjizhi') && !player.hasSkill('yejilve_no');
                                    },
                                    forced: true,
                                    content() {
                                        player.removeMark('yerenjie', 1);
                                        player.addTempSkill('yjizhi', 'roundStart');
                                        player.addTempSkill('yejilve_no', 'roundStart');
                                    },
                                },
                                zhws: {
                                    audio: 'yejilve',
                                    enable: 'phaseUse',
                                    usable: 1,
                                    forced: true,
                                    filter(event, player) {
                                        return player.hasMark('yerenjie') && (!player.hasSkill('yzhiheng') || !player.hasSkill('ywansha'));
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseBool('是否弃置一枚<忍>并于本回合获得【制衡】和【完杀】').set('ai', () => 1);
                                        ('step 1');
                                        if (result.bool) {
                                            player.removeMark('yerenjie', 1);
                                            player.addTempSkill('yzhiheng');
                                            player.addTempSkill('ywansha');
                                        } else {
                                            player.getStat('skill').yejilve_zhws--;
                                        }
                                    },
                                    ai: {
                                        order: 10,
                                        result: {
                                            player: 1,
                                        },
                                    },
                                },
                                fangzhu: {
                                    audio: 'yfangzhu',
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        return player.hasMark('yerenjie') && !player.hasSkill('yfangzhu');
                                    },
                                    content() {
                                        'step 0';
                                        'step 0';
                                        player.chooseTarget(get.prompt2('yfangzhu'), function (card, player, target) {
                                            return player != target;
                                        }).ai = function (target) {
                                            if (target.hasSkillTag('noturn')) return 0;
                                            var player = _status.event.player;
                                            if (get.attitude(_status.event.player, target) == 0) return 0;
                                            if (get.attitude(_status.event.player, target) > 0) {
                                                return 0;
                                            } else {
                                                if (target.classList.contains('turnedover')) return -1;
                                                return 1 + target.countCards('h');
                                            }
                                        };
                                        ('step 1');
                                        if (result.bool) {
                                            player.removeMark('yerenjie', 1);
                                            event.target = result.targets[0];
                                            var num = player.maxHp - player.hp;
                                            player.chooseBool('令' + get.translation(event.target) + '翻面并摸' + get.cnNumber(num) + '张牌,否则其弃置' + get.cnNumber(num) + '张牌并流失一点体力').set('ai', function () {
                                                var player = _status.event.player,
                                                    targe = event.target;
                                                if (get.attitude(player, targe) > 0) {
                                                    return 1;
                                                } else {
                                                    if (targe.classList.contains('turnedover')) return 0;
                                                    if (player.maxHp - player.hp > 1) return 0;
                                                    return 1;
                                                }
                                            });
                                        } else event.finish();
                                        ('step 2');
                                        if (result.bool) {
                                            if (player.isDamaged()) event.target.draw(player.getDamagedHp());
                                            event.target.turnOver();
                                        } else {
                                            if (player.isDamaged()) event.target.chooseToDiscard(true, 'he', player.getDamagedHp());
                                            event.target.loseHp();
                                        }
                                    },
                                    ai: {
                                        maixie: true,
                                        maixie_hp: true,
                                        effect: {
                                            target(card, player, target) {
                                                if (get.tag(card, 'damage')) {
                                                    if (player.hasSkillTag('jueqing', false, target)) return [1, -1.5];
                                                    if (target.hp <= 1) return;
                                                    if (!target.hasFriend()) return;
                                                    var hastarget = false;
                                                    var turnfriend = false;
                                                    var players = game.filterPlayer();
                                                    for (let i = 0; i < players.length; i++) {
                                                        if (get.attitude(target, players[i]) < 0 && !players[i].isTurnedOver()) {
                                                            hastarget = true;
                                                        }
                                                        if (get.attitude(target, players[i]) > 0 && players[i].isTurnedOver()) {
                                                            hastarget = true;
                                                            turnfriend = true;
                                                        }
                                                    }
                                                    if (get.attitude(player, target) > 0 && !hastarget) return;
                                                    if (turnfriend || target.hp == target.maxHp) return [0.5, 1];
                                                    if (target.hp > 1) return [1, 0.5];
                                                }
                                            },
                                        },
                                    },
                                },
                                guicai: {
                                    audio: 'yguicai',
                                    trigger: { global: 'judge' },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countCards('hes') > 0 && player.hasMark('yerenjie') && !player.hasSkill('yguicai');
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseCard('是否弃置一枚<忍>,并发动〖鬼才〗？', 'hes', function (card) {
                                            var player = _status.event.player;
                                            var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                            if (mod2 != 'unchanged') return mod2;
                                            var mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
                                            if (mod != 'unchanged') return mod;
                                            return true;
                                        }).ai = function (card) {
                                            var trigger = _status.event.parent._trigger;
                                            var player = _status.event.player;
                                            var result = trigger.judge(card) - trigger.judge(trigger.player.judging[0]);
                                            var attitude = get.attitude(player, trigger.player);
                                            let val = get.value(card);
                                            if (get.subtype(card) == 'equip2') val /= 2;
                                            else val /= 4;
                                            if (attitude == 0 || result == 0) return 0;
                                            if (attitude > 0) {
                                                return result - val;
                                            }
                                            return -result - val;
                                        };
                                        ('step 1');
                                        if (result.bool) {
                                            player.respond(result.cards, 'highlight', 'yejilve_guicai', 'noOrdering');
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        if (result.bool) {
                                            player.removeMark('yerenjie', 1);
                                            if (trigger.player.judging[0].clone) {
                                                trigger.player.judging[0].clone.delete();
                                                game.addVideo('deletenode', player, get.cardsInfo([trigger.player.judging[0].clone]));
                                            }
                                            game.cardsDiscard(trigger.player.judging[0]);
                                            trigger.player.judging[0] = result.cards[0];
                                            trigger.orderingCards.addArray(result.cards);
                                            game.log(trigger.player, '的判定牌改为', result.cards[0]);
                                        }
                                    },
                                    ai: {
                                        rejudge: true,
                                        tag: {
                                            rejudge: 1,
                                        },
                                    },
                                },
                            },
                        },
                        yguicai: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            audioname: ['new_simayi'],
                            trigger: { global: 'judge' },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('hes') > 0;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('yguicai'), 'hes', function (card) {
                                        var player = _status.event.player;
                                        var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                        if (mod2 != 'unchanged') return mod2;
                                        var mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
                                        if (mod != 'unchanged') return mod;
                                        return true;
                                    })
                                    .set('ai', function (card) {
                                        var trigger = _status.event.getTrigger();
                                        var player = _status.event.player;
                                        var judging = _status.event.judging;
                                        var result = trigger.judge(card) - trigger.judge(judging);
                                        var attitude = get.attitude(player, trigger.player);
                                        let val = get.value(card);
                                        if (get.subtype(card) == 'equip2') val /= 2;
                                        else val /= 4;
                                        if (attitude == 0 || result == 0) return 0;
                                        if (attitude > 0) {
                                            return result - val;
                                        }
                                        return -result - val;
                                    })
                                    .set('judging', trigger.player.judging[0]);
                                ('step 1');
                                if (result.bool) {
                                    player.respond(result.cards, 'yguicai', 'highlight', 'noOrdering');
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
                                    game.cardsDiscard(trigger.player.judging[0]);
                                    trigger.player.judging[0] = result.cards[0];
                                    trigger.orderingCards.addArray(result.cards);
                                    game.log(trigger.player, '的判定牌改为', result.cards[0]);
                                }
                            },
                            ai: {
                                rejudge: true,
                                tag: {
                                    rejudge: 1,
                                },
                            },
                        },
                        yzhiheng: {
                            audio: 'ext:寰宇兴衰/audio:1',
                            mod: {
                                aiOrder(player, card, num) {
                                    if (num <= 0 || get.itemtype(card) !== 'card' || get.type(card) !== 'equip') return num;
                                    let eq = player.getEquip(get.subtype(card));
                                    if (eq && get.equipValue(card) - get.equipValue(eq) < Math.max(1.2, 6 - player.hp)) return 0;
                                },
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            position: 'he',
                            filterCard: lib.filter.cardDiscardable,
                            discard: false,
                            lose: false,
                            delay: false,
                            selectCard: [1, Infinity],
                            check(card) {
                                let player = _status.event.player;
                                if (
                                    get.position(card) == 'h' &&
                                    !player.countCards('h', 'du') &&
                                    (player.hp > 2 ||
                                        !player.countCards('h', (i) => {
                                            return get.value(i) >= 8;
                                        }))
                                )
                                    return 1;
                                if (get.position(card) == 'e') {
                                    let subs = get.subtypes(card);
                                    if (subs.includes('equip2') || subs.includes('equip3')) return player.getHp() - get.value(card);
                                }
                                return 6 - get.value(card);
                            },
                            content() {
                                'step 0';
                                player.discard(cards);
                                event.num = 1;
                                var hs = player.getCards('h');
                                if (!hs.length) event.num = 0;
                                for (let i = 0; i < hs.length; i++) {
                                    if (!cards.includes(hs[i])) {
                                        event.num = 0;
                                        break;
                                    }
                                }
                                ('step 1');
                                player.draw(event.num + cards.length);
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                                threaten: 1.5,
                            },
                        },
                        yfangzhu: {
                            audio: 'ext:寰宇兴衰/audio:1',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                'step 0';
                                player.chooseTarget(get.prompt2('yfangzhu'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    if (target.hasSkillTag('noturn')) return 0;
                                    var player = _status.event.player;
                                    if (get.attitude(_status.event.player, target) == 0) return 0;
                                    if (get.attitude(_status.event.player, target) > 0) {
                                        return 0;
                                    } else {
                                        if (target.classList.contains('turnedover')) return -1;
                                        return 1 + target.countCards('h');
                                    }
                                };
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    var num = player.maxHp - player.hp;
                                    player.chooseBool('令' + get.translation(event.target) + '翻面并摸' + get.cnNumber(num) + '张牌,否则其弃置' + get.cnNumber(num) + '张牌并流失一点体力').set('ai', function () {
                                        var player = _status.event.player,
                                            targe = event.target;
                                        if (get.attitude(player, targe) > 0) {
                                            return 1;
                                        } else {
                                            if (targe.classList.contains('turnedover')) return 0;
                                            if (player.maxHp - player.hp > 1) return 0;
                                            return 1;
                                        }
                                    });
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    if (player.isDamaged()) event.target.draw(player.getDamagedHp());
                                    event.target.turnOver();
                                } else {
                                    if (player.isDamaged()) event.target.chooseToDiscard(true, 'he', player.getDamagedHp());
                                    event.target.loseHp();
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -1.5];
                                            if (target.hp <= 1) return;
                                            if (!target.hasFriend()) return;
                                            var hastarget = false;
                                            var turnfriend = false;
                                            var players = game.filterPlayer();
                                            for (let i = 0; i < players.length; i++) {
                                                if (get.attitude(target, players[i]) < 0 && !players[i].isTurnedOver()) {
                                                    hastarget = true;
                                                }
                                                if (get.attitude(target, players[i]) > 0 && players[i].isTurnedOver()) {
                                                    hastarget = true;
                                                    turnfriend = true;
                                                }
                                            }
                                            if (get.attitude(player, target) > 0 && !hastarget) return;
                                            if (turnfriend || target.hp == target.maxHp) return [0.5, 1];
                                            if (target.hp > 1) return [1, 0.5];
                                        }
                                    },
                                },
                            },
                        },
                        yjizhi: {
                            audio: 'ext:寰宇兴衰/audio:1',
                            trigger: { player: 'useCard' },
                            forced: true,
                            preHidden: true,
                            filter(event) {
                                return get.type(event.card) == 'trick' && event.card.isCard;
                            },
                            async content(event, trigger, player) {
                                player.draw();
                            },
                            ai: {
                                threaten: 1.4,
                                noautowuxie: true,
                            },
                        },
                        ywansha: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            global: 'ywansha_global',
                            trigger: { global: 'dyingBegin' },
                            forced: true,
                            logTarget: 'player',
                            filter(event, player) {
                                return player == _status.currentPhase;
                            },
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player && current != trigger.player) current.addSkillBlocker('ywansha_fengyin');
                                });
                                player.addTempSkill('ywansha_clear');
                            },
                            subSkill: {
                                global: {
                                    mod: {
                                        cardEnabled(card, player) {
                                            var source = _status.currentPhase;
                                            if (card.name == 'tao' && source && source != player && source.hasSkill('ywansha') && !player.isDying()) return false;
                                        },
                                        cardSavable(card, player) {
                                            var source = _status.currentPhase;
                                            if (card.name == 'tao' && source && source != player && source.hasSkill('ywansha') && !player.isDying()) return false;
                                        },
                                    },
                                },
                                fengyin: {
                                    inherit: 'fengyin',
                                },
                                clear: {
                                    trigger: { global: 'dyingAfter' },
                                    forced: true,
                                    charlotte: true,
                                    popup: false,
                                    filter(event, player) {
                                        return !_status.dying.length;
                                    },
                                    content() {
                                        player.removeSkill('ywansha_clear');
                                    },
                                    onremove() {
                                        game.countPlayer2(function (current) {
                                            current.removeSkillBlocker('ywansha_fengyin');
                                        });
                                    },
                                },
                            },
                        },
                        yelianpo: {
                            subSkill: {
                                beishui: { charlotte: true },
                                zhun: {
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    forced: true,
                                    content() {
                                        'step 0';
                                        if (player.hasSkill('yelianpo_beishui')) {
                                            player.draw(3);
                                            player.gainMaxHp();
                                            player.removeSkill('yelianpo_zhun');
                                            player.removeSkill('yelianpo_beishui');
                                            event.finish();
                                        } else player.chooseBool('摸三张牌,否则你增加一点体力上限').set('ai', () => 1);
                                        ('step 1');
                                        if (result.bool) {
                                            player.draw(3);
                                        } else player.gainMaxHp();
                                        player.removeSkill('yelianpo_zhun');
                                    },
                                },
                            },
                            audio: 'ext:寰宇兴衰/audio:2',
                            trigger: { global: 'phaseAfter' },
                            forced: true,
                            filter(event, player) {
                                return player.getStat('kill') > 0;
                            },
                            content() {
                                'step 0';
                                var list = [],
                                    choiceList = ['永久获得【极略】中至多三个技能并取消其<忍>标记限制', '进行一个额外回合并且于下个准备阶段开始时摸三张牌或增加一点体力上限', '移去所有<忍>标记并执行所有选项'];
                                var num = 0;
                                for (const i of lib.skill.yebaiyin.derivation) {
                                    if (!player.hasSkill(i)) {
                                        list.push('选项一');
                                        num++;
                                        break;
                                    }
                                }
                                if (num <= 0) choiceList[0] = '<span style="opacity:0.5; ">' + choiceList[0] + '(没有可获得的技能)</span>';
                                list.push('选项二');
                                list.push('背水');
                                list.push('cancel2');
                                player
                                    .chooseControl(list)
                                    .set('prompt', get.prompt('yelianpo'))
                                    .set('ai', () => {
                                        var player = _status.event.player;
                                        if (list.includes('选项一')) return '选项一';
                                        return '选项二';
                                    })
                                    .set('choiceList', choiceList);
                                ('step 1');
                                if (result.control == 'cancel2') {
                                    event.finish();
                                }
                                if (result.control == '背水') player.clearMark('yerenjie');
                                if (result.control == '选项二' || result.control == '背水') {
                                    player.addSkill('yelianpo_beishui');
                                    player.phase('nodelay');
                                    player.addSkill('yelianpo_zhun');
                                }
                                if (result.control == '选项一' || result.control == '背水') {
                                    var skills = [],
                                        list = [];
                                    for (const i of lib.skill.yebaiyin.derivation) {
                                        if (!player.hasSkill(i)) {
                                            skills.push(i);
                                        }
                                    }
                                    var switchToAuto = function () {
                                        _status.imchoosing = false;
                                        event._result = {
                                            bool: true,
                                            skills: skills.randomGets(3),
                                        };
                                        if (event.dialog) event.dialog.close();
                                        if (event.control) event.control.close();
                                    };
                                    var chooseButton = function (list, skills) {
                                        var event = _status.event;
                                        if (!event._result) event._result = {};
                                        event._result.skills = [];
                                        var rSkill = event._result.skills;
                                        var dialog = ui.create.dialog('请选择获得至多三个技能并取消其<忍>标记限制', [list], 'hidden');
                                        event.dialog = dialog;
                                        var table = document.createElement('div');
                                        table.classList.add('add-setting');
                                        table.style.margin = '0';
                                        table.style.width = '100%';
                                        table.style.position = 'relative';
                                        for (let i = 0; i < skills.length; i++) {
                                            var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                            td.link = skills[i];
                                            table.appendChild(td);
                                            td.innerHTML = '<span>' + get.translation(skills[i]) + '</span>';
                                            td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                                if (_status.dragged) return;
                                                if (_status.justdragged) return;
                                                _status.tempNoButton = true;
                                                setTimeout(function () {
                                                    _status.tempNoButton = false;
                                                }, 500);
                                                var link = this.link;
                                                if (!this.classList.contains('bluebg')) {
                                                    if (rSkill.length >= 3) return;
                                                    rSkill.add(link);
                                                    this.classList.add('bluebg');
                                                } else {
                                                    this.classList.remove('bluebg');
                                                    rSkill.remove(link);
                                                }
                                            });
                                        }
                                        dialog.content.appendChild(table);
                                        dialog.add('　　');
                                        dialog.open();
                                        event.switchToAuto = function () {
                                            event.dialog.close();
                                            event.control.close();
                                            game.resume();
                                            _status.imchoosing = false;
                                        };
                                        event.control = ui.create.control('ok', function (link) {
                                            event.dialog.close();
                                            event.control.close();
                                            game.resume();
                                            _status.imchoosing = false;
                                        });
                                        for (let i = 0; i < event.dialog.buttons.length; i++) {
                                            event.dialog.buttons[i].classList.add('selectable');
                                        }
                                        game.pause();
                                        game.countChoose();
                                    };
                                    if (event.isMine()) {
                                        chooseButton(list, skills);
                                    } else if (event.isOnline()) {
                                        event.player.send(chooseButton, list, skills);
                                        event.player.wait();
                                        game.pause();
                                    } else {
                                        switchToAuto();
                                    }
                                }
                                ('step 2');
                                var map = event.result || result;
                                if (map && map.skills && map.skills.length) {
                                    for (const i of map.skills) player.addSkills(i);
                                }
                            },
                        },
                        yebaiyin: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            inherit: 'sbaiyin',
                            filter(event, player) {
                                return player.countMark('yerenjie') >= 4;
                            },
                            init(player) {
                                player.storage.yebaiyin = false;
                            },
                            async content(event, trigger, player) {
                                player.awakenSkill('yebaiyin');
                                player.storage.yebaiyin = true;
                                await player.loseMaxHp();
                                await player.addSkills('yejilve');
                            },
                            derivation: ['yejilve', 'yguicai', 'yfangzhu', 'yjizhi', 'yzhiheng', 'ywansha'],
                            ai: {
                                combo: 'yerenjie',
                            },
                        },
                        yerenjie: {
                            init(player) {
                                if (!player.storage.yerenjie2) player.storage.yerenjie2 = 0;
                            },
                            mod: {
                                maxHandcard: (player, num) => (num += player.countMark('yerenjie')),
                            },
                            group: ['yerenjie_p', 'yerenjie_dam', 'yerenjie_cl'],
                            subSkill: {
                                cl: {
                                    forced: true,
                                    silent: true,
                                    _priority: -90990,
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    filter(event, player) {
                                        return player.storage.yerenjie2 > 0;
                                    },
                                    content() {
                                        player.storage.yerenjie2 = 0;
                                    },
                                },
                                dam: {
                                    forced: true,
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    audio: 'yerenjie',
                                    filter(event, player) {
                                        return player.storage.yebaiyin && player.storage.yerenjie2 < 4;
                                    },
                                    content() {
                                        for (let i = 0; i < trigger.num; i++) {
                                            if (player.storage.yerenjie2 < 4) {
                                                player.storage.yerenjie2++;
                                                player.addMark('yerenjie', 1);
                                            } else continue;
                                        }
                                    },
                                },
                                p: {
                                    forced: true,
                                    trigger: {
                                        player: ['chooseToUseAfter', 'chooseToRespondAfter'],
                                    },
                                    audio: 'yerenjie',
                                    filter(event, player) {
                                        return event.respondTo && !event.result.bool && player.storage.yerenjie2 < 4;
                                    },
                                    async content(event, trigger, player) {
                                        player.storage.yerenjie2 += 1;
                                        player.addMark('yerenjie', 1);
                                    },
                                },
                            },
                            audio: 'ext:寰宇兴衰/audio:2',
                            trigger: { global: ['loseAfter', 'cardsDiscardAfter', 'loseAsyncAfter', 'equipAfter'] },
                            forced: true,
                            filter(event, player) {
                                if (player.storage.yerenjie2 >= 4) return false;
                                if (event.name.indexOf('lose') == 0) {
                                    if (event.getlx === false || event.position != ui.discardPile) return false;
                                } else {
                                    var evt = event.parent;
                                    if (evt.relatedEvent && evt.relatedEvent.name == 'useCard') return false;
                                }
                                var cards = event.getd();
                                for (const i of cards) {
                                    var owner = false;
                                    if (event.hs && event.hs.includes(i)) owner = event.player;
                                    var type = get.type(i, null, owner);
                                    if (type) return true;
                                }
                                return false;
                            },
                            content() {
                                var num = 0;
                                var cards = trigger.getd();
                                for (const i of cards) {
                                    var owner = false;
                                    if (trigger.hs && trigger.hs.includes(i)) owner = trigger.player;
                                    var type = get.type(i, null, owner);
                                    if (type) num++;
                                }
                                for (let i = 0; i < num; i++) {
                                    if (player.storage.yerenjie2 < 4) {
                                        player.storage.yerenjie2++;
                                        player.addMark('yerenjie', 1);
                                    } else continue;
                                }
                            },
                            intro: {
                                name2: '忍',
                                content: 'mark',
                            },
                            marktext: '忍',
                            hiddenCard: (player) => player.countMark('yerenjie_used') < 4,
                            ai: {
                                combo: 'yejilve',
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (player.countMark('yerenjie_used') >= 4) return false;
                                },
                            },
                        },
                        yejiahe: {
                            audio: 'ext:寰宇兴衰/audio:1',
                            trigger: {
                                global: 'phaseBefore',
                                player: ['enterGame', 'phaseDiscardBefore'],
                            },
                            persevereSkill: true,
                            forced: true,
                            filter(event, player) {
                                if (event.name == 'phaseDiscard') return player.countCards('h') > 0;
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            intro: {
                                markcount: 'expansion',
                                mark(dialog, content, player) {
                                    var content = player.getExpansions('yejiahe');
                                    if (content && content.length) {
                                        if (player == game.me || player.isUnderControl()) {
                                            dialog.addAuto(content);
                                        } else {
                                            return '共有' + get.cnNumber(content.length) + '张禾';
                                        }
                                    }
                                },
                                content(content, player) {
                                    var content = player.getExpansions('yejiahe');
                                    if (content && content.length) {
                                        if (player == game.me || player.isUnderControl()) {
                                            return get.translation(content);
                                        }
                                        return '共有' + get.cnNumber(content.length) + '张禾';
                                    }
                                },
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.getExpansions('yejiahe').length;
                                },
                            },
                            content() {
                                'step 0';
                                if (trigger.name != 'phaseDiscard') player.draw(12);
                                ('step 1');
                                if (trigger.name != 'phaseDiscard') {
                                    var num = player.countCards('h') - 4;
                                    player.chooseCard(num, true, 'h', '将' + num + '张牌置于武将牌上,称为<禾>').set('ai', function (card) {
                                        return 7 - get.value(card);
                                    });
                                } else
                                    player.chooseCard([1, Infinity], 'he', '是否将任意张牌置于武将牌上,称为<禾>？').set('ai', function (card) {
                                        return 3 - get.value(card);
                                    });
                                ('step 2');
                                if (result.bool) {
                                    player.addToExpansion(result.cards, 'giveAuto', player).gaintag.add('yejiahe');
                                }
                            },
                            group: ['yejiahe_draw'],
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: 'phaseDrawAfter',
                                    },
                                    persevereSkill: true,
                                    forced: true,
                                    filter(event, player) {
                                        return player.getExpansions('yejiahe').length && player.countCards('h') > 0;
                                    },
                                    content() {
                                        'step 0';
                                        var cards = player.getExpansions('yejiahe');
                                        if (!cards.length || !player.countCards('h')) {
                                            event.finish();
                                            return;
                                        }
                                        var next = player.chooseToMove('嘉禾:是否交换<禾>和手牌？');
                                        next.set('list', [
                                            [get.translation(player) + '(你)的禾', cards],
                                            ['手牌区', player.getCards('h')],
                                        ]);
                                        next.set('filterMove', function (from, to) {
                                            return typeof to != 'number';
                                        });
                                        next.set('processAI', function (list) {
                                            var player = _status.event.player,
                                                cards = list[0][1].concat(list[1][1]).sort(function (a, b) {
                                                    return get.value(a) - get.value(b);
                                                }),
                                                cards2 = cards.splice(0, player.getExpansions('yejiahe').length);
                                            return [cards2, cards];
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            var pushs = result.moved[0],
                                                gains = result.moved[1];
                                            pushs.removeArray(player.getExpansions('yejiahe'));
                                            gains.removeArray(player.getCards('h'));
                                            if (!pushs.length || pushs.length != gains.length) return;
                                            player.addToExpansion(pushs, player, 'giveAuto').gaintag.add('yejiahe');
                                            game.log(player, '将', pushs, '作为<禾>置于武将牌上');
                                            player.gain(gains, 'draw');
                                        }
                                    },
                                },
                            },
                        },
                        yekurong: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            persevereSkill: true,
                            intro: {
                                content(storage) {
                                    return '受到伤害/失去体力+1';
                                },
                            },
                            filter(event, player) {
                                return player.getExpansions('yejiahe').length;
                            },
                            content() {
                                'step 0';
                                var num = Math.min(game.countPlayer(), player.getExpansions('yejiahe').length);
                                player.chooseTarget(get.prompt('yekurong'), '令至多' + get.cnNumber(num) + '名角色受到伤害增加', [1, num]).set('ai', function (target) {
                                    if (ui.selected.targets) return 0;
                                    return -1;
                                });
                                ('step 1');
                                if (result.bool) {
                                    var targets = result.targets.sortBySeat();
                                    var length = targets.length;
                                    targets.forEach((target) => {
                                        target.markAuto('yekurong', [player]);
                                    });
                                    player.addTempSkill('yekurong_effect', { player: 'phaseBeginStart' });
                                    player.storage.yekurong_effect.addArray(targets);
                                    player.chooseCardButton('选择弃置' + get.cnNumber(length) + '张<禾>', length, player.getExpansions('yejiahe'), true);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                player.loseToDiscardpile(result.links);
                            },
                            subSkill: {
                                effect: {
                                    audio: 'yekurong',
                                    trigger: {
                                        global: ['damageBegin3', 'loseHpBegin'],
                                    },
                                    charlotte: true,
                                    persevereSkill: true,
                                    forced: true,
                                    init(player, skill) {
                                        player.storage[skill] = [];
                                    },
                                    onremove(player, skill) {
                                        for (const i of player.storage[skill]) {
                                            i.unmarkSkill('yekurong');
                                        }
                                        player.storage[skill] = [];
                                    },
                                    filter(event, player) {
                                        return player.storage.yekurong_effect.includes(event.player) && event.num > 0;
                                    },
                                    content() {
                                        trigger.num++;
                                        var next = game.createEvent('changqing', false);
                                        next.player = trigger.player;
                                        next.setContent(function () {
                                            event.trigger('changqing');
                                        });
                                    },
                                },
                            },
                        },
                        yefengrao: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            persevereSkill: true,
                            forced: true,
                            filter(event, player) {
                                return player.getExpansions('yejiahe').length;
                            },
                            intro: {
                                content(storage) {
                                    return '防止受到的伤害';
                                },
                            },
                            content() {
                                'step 0';
                                var num = Math.min(game.countPlayer(), player.getExpansions('yejiahe').length);
                                player
                                    .chooseTarget(get.prompt('yefengrao'), '令至多' + get.cnNumber(num) + '名角色防止受到的伤害', [1, num])
                                    .set('ai', function (target) {
                                        if (target.isMin()) return 0;
                                        if (target.hasSkill('biantian2') || target.hasSkill('dawu2')) return 0;
                                        var att = get.attitude(player, target);
                                        if (att >= 4) {
                                            if (target.hp > 2 && (target.isHealthy() || target.hasSkillTag('maixie'))) return 0;
                                            if (_status.event.allUse) return att;
                                            if (target.hp == 1) return att;
                                            if (target.hp == 2 && target.countCards('he') <= 2) return att * 0.7;
                                            return 0;
                                        }
                                        return -1;
                                    })
                                    .set(
                                        'allUse',
                                        player.getExpansions('yejiahe').length >=
                                        game.countPlayer(function (current) {
                                            return get.attitude(player, current) > 4;
                                        }) *
                                        2
                                    );
                                ('step 1');
                                if (result.bool) {
                                    var targets = result.targets.sortBySeat();
                                    var length = targets.length;
                                    targets.forEach((target) => {
                                        target.markAuto('yefengrao', [player]);
                                    });
                                    player.addTempSkill('yefengrao_effect', { player: 'phaseBeginStart' });
                                    player.storage.yefengrao_effect.addArray(targets);
                                    player.chooseCardButton('选择弃置' + get.cnNumber(length) + '张<禾>', length, player.getExpansions('yejiahe'), true);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                player.loseToDiscardpile(result.links);
                            },
                            subSkill: {
                                effect: {
                                    audio: 'yefengrao',
                                    trigger: {
                                        global: ['damageBegin4', 'phaseEnd'],
                                    },
                                    charlotte: true,
                                    persevereSkill: true,
                                    forced: true,
                                    init(player, skill) {
                                        player.storage[skill] = [];
                                    },
                                    onremove(player, skill) {
                                        for (const i of player.storage[skill]) {
                                            i.unmarkSkill('yefengrao');
                                        }
                                        player.storage[skill] = [];
                                    },
                                    filter(event, player) {
                                        return player.storage.yefengrao_effect.includes(event.player);
                                    },
                                    content() {
                                        if (trigger.name == 'phase') {
                                            var num = [1, 2, 3].randomGet();
                                            trigger.player.recover(num);
                                        } else trigger.cancel();
                                        var next = game.createEvent('changqing', false);
                                        next.player = trigger.player;
                                        next.setContent(function () {
                                            event.trigger('changqing');
                                        });
                                    },
                                    ai: {
                                        nofire: true,
                                        nodamage: true,
                                        nothunder: true,
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.tag(card, 'damage')) return 'zeroplayertarget';
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        yechangqing: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            trigger: {
                                global: 'changqing',
                            },
                            persevereSkill: true,
                            forced: true,
                            content() {
                                player.draw();
                                if (trigger.player == player) player.draw(3);
                            },
                        },
                        yeshexie: {
                            audio: 'ext:寰宇兴衰/audio:true',
                            forced: true,
                            trigger: {
                                global: 'dying',
                            },
                            content() {
                                'step 0';
                                if (!trigger.player.countCards('he')) {
                                    player.draw(3);
                                    event.finish();
                                }
                                player.chooseBool('是否随机获得' + get.translation(trigger.player) + '三张牌并令其获得等量的<毒>,否则你摸三张牌').set('ai', () => {
                                    var player = _status.event.player;
                                    var cards = trigger.player.getCards('h');
                                    for (const i of cards) {
                                        if (i.name == 'du') return 0;
                                    }
                                    if (get.attitude(player, trigger.player) < 0) return 1;
                                    return 0;
                                });
                                ('step 1');
                                if (!result.bool) {
                                    player.draw(3);
                                } else {
                                    var cards = trigger.player.getCards('he').randomGets(Math.min(3, trigger.player.countCards('he')));
                                    if (cards.length) {
                                        player.gain(cards, 'gain2');
                                        var cardx = [];
                                        for (let i = 0; i < cards.length; i++) {
                                            var suit = ['heart', 'diamond', 'club', 'spade'].randomGet();
                                            var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].randomGet();
                                            var card = game.createCard2('du', suit, num);
                                            cardx.push(card);
                                        }
                                        trigger.player.gain(cardx, 'gain2');
                                    }
                                }
                            },
                        },
                        yenongquan: {
                            audio: 'ext:寰宇兴衰/audio:true',
                            forced: true,
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return lib.skill.lztunjiang.filtery({ player: current }, player);
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('选择任意名敌方角色对其造成伤害', true, [1, Infinity], function (card, player, target) {
                                        return lib.skill.lztunjiang.filtery({ player: target }, player);
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(player, target);
                                    });//QQQ
                                ('step 1');
                                if (result.bool) {
                                    var targets = result.targets;
                                    targets.sortBySeat();
                                    for (var target of targets) {
                                        var num = target.maxHp;
                                        target.damage(num);
                                        if (target.countCards('he')) target.discard(target.getCards('he').randomGets(Math.min(3, target.countCards('he')))).discarder = player;
                                    }
                                }
                            },
                        },
                        yechuhuan: {
                            group: 'yechuhuan_be',
                            subSkill: {
                                be: {
                                    forced: true,
                                    audio: 'yechuhuan',
                                    trigger: {
                                        target: 'useCardToTargeted',
                                    },
                                    filter(event, player) {
                                        if (player == event.player) return false;
                                        return (event.card && event.card.name == 'sha') || (get.type2(event.card) == 'trick' && get.tag(event.card, 'damage'));
                                    },
                                    content() {
                                        trigger.player.loseHp();
                                    },
                                },
                            },
                            audio: 'ext:寰宇兴衰/audio:true',
                            forced: true,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                trigger.target.loseHp();
                            },
                        },
                        //何太后
                        minizhendu: {
                            audio: 'zhendu',
                            trigger: { global: 'phaseUseBegin' },
                            filter(event, player) {
                                return event.player.isIn() && player.countCards('he') && event.player.hasUseTarget({ name: 'jiu' }, null, true);
                            },
                            forced: true,
                            preHidden: true,
                            content() {
                                'step 0';
                                var nono = Math.abs(get.attitude(player, trigger.player)) < 3;
                                if (player == trigger.player || get.damageEffect(trigger.player, player, player) <= 0 || !trigger.player.hasUseTarget({ name: 'jiu' }, null, true)) nono = true;
                                if (trigger.player.hp > 2) nono = true;
                                if (trigger.player.hp > 1 && player.countCards('h') < 3 && trigger.player.canUse('sha', player) && !player.countCards('h', 'shan') && trigger.player.countCards('h') >= 3) nono = true;
                                var next = player.chooseToDiscard(get.prompt2('minizhendu', trigger.player), 'he');
                                next.set('ai', function (card) {
                                    if (_status.event.nono) return -1;
                                    return 7 - get.useful(card);
                                });
                                next.set('nono', nono);
                                next.setHiddenSkill('minizhendu');
                                ('step 1');
                                if (result.bool) trigger.player.chooseUseTarget({ name: 'jiu' }, true, 'noTargetDelay', 'nodelayx');
                                else event.finish();
                                ('step 2');
                                if (result.bool && trigger.player != player) {
                                    trigger.player.damage();
                                    trigger.player.addTempSkill('minizhendu2');
                                    trigger.player.addMark('minizhendu2', 1, false);
                                }
                            },
                            ai: { expose: 0.3 },
                        },
                        minizhendu2: {
                            mark: true,
                            marktext: '毒',
                            charlotte: true,
                            intro: { content: '计算与其他角色的距离+#' },
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance + from.countMark('minizhendu2');
                                },
                            },
                        },
                        miniqiluan: {
                            group: 'miniqiluan_draw',
                            audio: 'qiluan2',
                            trigger: { global: 'dying' },
                            prompt: '是否发动【戚乱】摸一张牌？',
                            preHidden: true,
                            forced: true,
                            content() {
                                player.draw();
                            },
                            subfrequent: ['use'],
                            subSkill: {
                                draw: {
                                    audio: 'qiluan2',
                                    trigger: { source: 'dieAfter' },
                                    prompt: '是否发动【戚乱】摸两张牌？',
                                    forced: true,
                                    preHidden: true,
                                    content() {
                                        player.draw(2);
                                    },
                                },
                            },
                        },
                        yezunqin: {
                            forced: true,
                            audio: 'ext:寰宇兴衰/audio:true',
                            group: ['yezunqin_gain', 'zhendu', 'minizhendu', 'qiluan', 'miniqiluan'],
                            derivation: ['zhendu', 'minizhendu', 'qiluan', 'miniqiluan'],
                            subSkill: {
                                gain: {
                                    audio: 'yezunqin',
                                    trigger: {
                                        global: ['loseAfter', 'cardsDiscardAfter', 'loseAsyncAfter', 'equipAfter'],
                                    },
                                    forced: true,
                                    usable: 4,
                                    filter(event, player) {
                                        var cards = event.getd();
                                        for (const i of cards) {
                                            if (get.position(i, true) == 'd' && i.storage.yezunqin) return true;
                                        }
                                        return false;
                                    },
                                    content() {
                                        var cardx = [];
                                        var cards = trigger.getd();
                                        for (const i of cards) {
                                            if (get.position(i, true) == 'd' && i.storage.yezunqin) {
                                                cardx.push(i);
                                                i.storage.yezunqin = false;
                                            }
                                        }
                                        player.gain(cardx, 'gain2');
                                    },
                                },
                            },
                            forced: true,
                            trigger: {
                                global: 'useCardToTarget',
                            },
                            filter(event, player) {
                                return get.type2(event.card) == 'trick' && event.targets.includes(player);
                            },
                            content() {
                                for (const i of trigger.cards) {
                                    i.storage.yezunqin = true;
                                }
                            },
                        },
                        yexingshang: {
                            getLimit: 9,
                            getList: [
                                {
                                    cost: 2,
                                    prompt: () => '令一名角色复原武将牌',
                                    filter: () => game.hasPlayer((target) => target.isLinked() || target.isTurnedOver()),
                                    filterTarget: (card, player, target) => target.isLinked() || target.isTurnedOver(),
                                    async content(player, target) {
                                        if (target.isLinked()) await target.link(false);
                                        if (target.isTurnedOver()) await target.turnOver(false);
                                    },
                                    ai: {
                                        result: {
                                            target(player, target) {
                                                let res = 0;
                                                if (target.isLinked()) res = 0.3;
                                                if (target.isTurnedOver()) res += 3.5 * get.threaten(target, player);
                                                return res;
                                            },
                                        },
                                    },
                                },
                                {
                                    cost: 2,
                                    prompt: () => '令一名角色摸' + get.cnNumber(3) + '张牌',
                                    filter: () => true,
                                    filterTarget: true,
                                    async content(player, target) {
                                        await target.draw(3);
                                    },
                                    ai: {
                                        result: {
                                            target(player, target) {
                                                return 3;
                                            },
                                        },
                                    },
                                },
                                {
                                    cost: 3,
                                    prompt: () => '令一名体力上限小于10的角色回复1点体力,增加1点体力上限,选择回复一个废除的装备栏',
                                    filter: () => game.hasPlayer((target) => target.maxHp < 10),
                                    filterTarget(card, player, target) {
                                        return target.maxHp < 10;
                                    },
                                    async content(player, target) {
                                        await target.recover();
                                        await target.gainMaxHp();
                                        let list = Array.from({ length: 13 }).map((_, i) => 'equip' + parseFloat(i + 1));
                                        list = list.filter((i) => target.hasDisabledSlot(i));
                                        if (list.length) await target.chooseToEnable();
                                    },
                                    ai: {
                                        result: {
                                            target(player, target) {
                                                let res = 0.2;
                                                if (target.isHealthy()) res += 0.4;
                                                if (
                                                    Array.from({ length: 5 })
                                                        .map((_, i) => 'equip' + parseFloat(i + 1))
                                                        .some((i) => target.hasDisabledSlot(i))
                                                )
                                                    res += 0.3;
                                                return res + get.recoverEffect(target, target, target) / 16;
                                            },
                                        },
                                    },
                                },
                                {
                                    cost: 4,
                                    prompt: () => '获得一名已阵亡角色的武将牌上的除主公技的所有技能,然后失去〖行殇〗〖放逐〗〖颂威〗',
                                    filter: () => game.dead.some((target) => target.getStockSkills(true, true).some((i) => get.info(i) && !get.info(i).charlotte && !get.info(i).zhuSkill)),
                                    filterTarget(card, player, target) {
                                        if (!target.isDead()) return false;
                                        return target.getStockSkills(true, true).some((i) => get.info(i) && !get.info(i).charlotte && !get.info(i).zhuSkill);
                                    },
                                    deadTarget: true,
                                    async content(player, target) {
                                        await player.changeSkills(
                                            target.getStockSkills(true, true).filter((i) => get.info(i) && !get.info(i).charlotte && !get.info(i).zhuSkill),
                                            ['yexingshang', 'yesbfangzhu', 'yesongwei']
                                        );
                                    },
                                    ai: {
                                        result: {
                                            player(player, target) {
                                                return ['name', 'name1', 'name2'].reduce((sum, name) => {
                                                    if (!target[name] || !lib.character[target[name]] || (name == 'name1' && target.name1 == target.name)) return sum;
                                                    return sum + get.rank(target[name], true);
                                                }, 0);
                                            },
                                        },
                                    },
                                },
                            ],
                            marktext: '颂',
                            intro: {
                                name: '颂',
                                content: 'mark',
                            },
                            audio: 'sbxingshang',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return get.info('yexingshang').getList.some((effect) => {
                                    return player.countMark('yexingshang') >= effect.cost && effect.filter(player);
                                });
                            },
                            usable: 2,
                            chooseButton: {
                                dialog() {
                                    let dialog = ui.create.dialog('行殇:请选择一项', 'hidden');
                                    const list = get.info('yexingshang').getList.slice();
                                    dialog.add([
                                        list.map((effect) => {
                                            return [effect, '移去' + effect.cost + '个<颂>标记,' + effect.prompt()];
                                        }),
                                        'textbutton',
                                    ]);
                                    return dialog;
                                },
                                filter(button, player) {
                                    const effect = button.link;
                                    return player.countMark('yexingshang') >= effect.cost && effect.filter(player);
                                },
                                check(button) {
                                    const player = get.event().player,
                                        effect = button.link;
                                    return Math.max(
                                        ...game
                                            .filterPlayer((target) => {
                                                const filterTarget = effect.filterTarget;
                                                if (!filterTarget) return target == player;
                                                if (typeof filterTarget == 'function') return filterTarget(null, player, target);
                                                return true;
                                            })
                                            .map((target) => {
                                                game.broadcastAll((effect) => (lib.skill.yexingshang_aiSkill.ai = effect.ai), effect);
                                                return get.effect(target, 'yexingshang_aiSkill', player, player);
                                            })
                                    );
                                },
                                backup(links, player) {
                                    const effect = links[0];
                                    return {
                                        effect: effect,
                                        audio: 'yexingshang',
                                        filterCard: () => false,
                                        selectCard: -1,
                                        filterTarget: effect.filterTarget,
                                        deadTarget: effect.deadTarget,
                                        async content(event, trigger, player) {
                                            const target = event.targets[0],
                                                effect = lib.skill.yexingshang_backup.effect;
                                            player.removeMark('yexingshang', effect.cost);
                                            await effect.content(player, target);
                                        },
                                        ai: effect.ai,
                                    };
                                },
                                prompt(links, player) {
                                    const effect = links[0],
                                        str = '###行殇###';
                                    return str + '<div class="text center">移去' + effect.cost + '个<颂>标记,' + effect.prompt() + '</div>';
                                },
                            },
                            ai: {
                                order: 6.5,
                                result: {
                                    player(player) {
                                        const list = get.info('yexingshang').getList.filter((effect) => {
                                            return player.countMark('yexingshang') >= effect.cost && effect.filter(player);
                                        });
                                        return Math.max(
                                            ...list.map((effect) => {
                                                return Math.max(
                                                    ...game
                                                        .filterPlayer((target) => {
                                                            const filterTarget = effect.filterTarget;
                                                            if (!filterTarget) return target == player;
                                                            if (typeof filterTarget == 'function') return filterTarget(null, player, target);
                                                            return true;
                                                        })
                                                        .map((target) => {
                                                            game.broadcastAll((effect) => (lib.skill.yexingshang_aiSkill.ai = effect.ai), effect);
                                                            return get.effect(target, 'yexingshang_aiSkill', player, player);
                                                        })
                                                );
                                            })
                                        );
                                    },
                                },
                            },
                            group: 'yexingshang_gain',
                            subSkill: {
                                aiSkill: {},
                                backup: {},
                                gain: {
                                    audio: 'yexingshang',
                                    trigger: { global: ['die', 'damageEnd'] },
                                    filter(event, player) {
                                        if (player.countMark('yexingshang') >= get.info('yexingshang').getLimit) return false;
                                        return event.name == 'die' || player.getHistory('custom', (evt) => evt.yexingshang).length < 2;
                                    },
                                    forced: true,
                                    async content(event, trigger, player) {
                                        player.addMark('yexingshang', Math.min(2, get.info('yexingshang').getLimit - player.countMark('yexingshang')));
                                        if (trigger.name == 'damage') player.getHistory('custom').push({ yexingshang: true });
                                    },
                                },
                            },
                        },
                        yesbfangzhu: {
                            getList: [
                                {
                                    cost: 1,
                                    prompt: () => '令一名其他角色于手牌中只能使用基本牌直到其回合结束',
                                    filter: (player) => game.hasPlayer((target) => target != player && !target.getStorage('yesbfangzhu_ban').includes('basic')),
                                    filterTarget: (card, player, target) => target != player && !target.getStorage('yesbfangzhu_ban').includes('basic'),
                                    async content(player, target) {
                                        target.addTempSkill('yesbfangzhu_ban', { player: 'phaseEnd' });
                                        target.markAuto('yesbfangzhu_ban', ['basic']);
                                        lib.skill.yesbfangzhu_ban.init(target, 'yesbfangzhu_ban');
                                    },
                                    ai: {
                                        result: {
                                            target(player, target) {
                                                return -(target.countCards('hs') + 2) / 3;
                                            },
                                        },
                                    },
                                },
                                {
                                    cost: 2,
                                    prompt: () => '令一名其他角色于手牌中只能使用锦囊牌直到其回合结束',
                                    filter: (player) => game.hasPlayer((target) => target != player && !target.getStorage('yesbfangzhu_ban').includes('trick')),
                                    filterTarget: (card, player, target) => target != player && !target.getStorage('yesbfangzhu_ban').includes('trick'),
                                    async content(player, target) {
                                        target.addTempSkill('yesbfangzhu_ban', { player: 'phaseEnd' });
                                        target.markAuto('yesbfangzhu_ban', ['trick']);
                                        lib.skill.yesbfangzhu_ban.init(target, 'yesbfangzhu_ban');
                                    },
                                    ai: {
                                        result: {
                                            target(player, target) {
                                                return -(target.countCards('hs') + 2) / 2;
                                            },
                                        },
                                    },
                                },
                                {
                                    cost: 3,
                                    prompt: () => '令一名其他角色于手牌中只能使用装备牌直到其回合结束',
                                    filter: (player) => game.hasPlayer((target) => target != player && !target.getStorage('yesbfangzhu_ban').includes('equip')),
                                    filterTarget: (card, player, target) => target != player && !target.getStorage('yesbfangzhu_ban').includes('equip'),
                                    async content(player, target) {
                                        target.addTempSkill('yesbfangzhu_ban', { player: 'phaseEnd' });
                                        target.markAuto('yesbfangzhu_ban', ['equip']);
                                        lib.skill.yesbfangzhu_ban.init(target, 'yesbfangzhu_ban');
                                    },
                                    ai: {
                                        result: {
                                            target(player, target) {
                                                return -target.countCards('hs') - 2;
                                            },
                                        },
                                    },
                                },
                                {
                                    cost: 2,
                                    prompt: () => '令一名其他角色的非Charlotte技能失效直到其回合结束',
                                    filter: (player) => game.hasPlayer((target) => target != player),
                                    filterTarget: lib.filter.notMe,
                                    async content(player, target) {
                                        target.addTempSkill('yesbfangzhu_baiban', { player: 'phaseEnd' });
                                    },
                                    ai: {
                                        result: {
                                            target(player, target) {
                                                return -target.getSkills(null, false).filter((i) => get.info(i) && !get.info(i).charlotte).length * get.threaten(target, player);
                                            },
                                        },
                                    },
                                },
                                {
                                    cost: 2,
                                    prompt: () => '令一名其他角色不能响应除其外的角色使用的牌直到其回合结束',
                                    filter: (player) => game.hasPlayer((target) => target != player && !target.hasSkill('yesbfangzhu_kill')),
                                    filterTarget: lib.filter.notMe,
                                    async content(player, target) {
                                        target.addTempSkill('yesbfangzhu_kill', { player: 'phaseEnd' });
                                    },
                                    ai: {
                                        result: {
                                            target(player, target) {
                                                return -(target.countCards('hs') + 2) / target.hp;
                                            },
                                        },
                                    },
                                },
                                {
                                    cost: 3,
                                    prompt: () => '令一名其他角色将武将牌翻面',
                                    filter: (player) => game.hasPlayer((target) => target != player),
                                    filterTarget: lib.filter.notMe,
                                    async content(player, target) {
                                        await target.turnOver();
                                    },
                                    ai: {
                                        result: {
                                            target(player, target) {
                                                return target.isTurnedOver() ? 3.5 : -3.5;
                                            },
                                        },
                                    },
                                },
                            ],
                            audio: 'sbfangzhu',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return get.info('yesbfangzhu').getList.some((effect) => {
                                    return player.countMark('yexingshang') >= effect.cost && effect.filter(player);
                                });
                            },
                            usable: 1,
                            chooseButton: {
                                dialog() {
                                    let dialog = ui.create.dialog('放逐:请选择一项', 'hidden');
                                    const list = get.info('yesbfangzhu').getList.slice();
                                    dialog.add([
                                        list.map((effect) => {
                                            return [effect, '移去' + effect.cost + '个<颂>标记,' + effect.prompt()];
                                        }),
                                        'textbutton',
                                    ]);
                                    return dialog;
                                },
                                filter(button, player) {
                                    const effect = button.link;
                                    return player.countMark('yexingshang') >= effect.cost && effect.filter(player);
                                },
                                check(button) {
                                    const player = get.event().player,
                                        effect = button.link;
                                    return Math.max(
                                        ...game
                                            .filterPlayer((target) => {
                                                const filterTarget = effect.filterTarget;
                                                if (!filterTarget) return target == player;
                                                if (typeof filterTarget == 'function') return filterTarget(null, player, target);
                                                return true;
                                            })
                                            .map((target) => {
                                                game.broadcastAll((effect) => (lib.skill.yexingshang_aiSkill.ai = effect.ai), effect);
                                                return get.effect(target, 'yexingshang_aiSkill', player, player);
                                            })
                                    );
                                },
                                backup(links, player) {
                                    const effect = links[0];
                                    return {
                                        effect: effect,
                                        audio: 'yesbfangzhu',
                                        audioname: ['mb_caomao'],
                                        filterCard: () => false,
                                        selectCard: -1,
                                        filterTarget: effect.filterTarget,
                                        async content(event, trigger, player) {
                                            const target = event.targets[0],
                                                effect = lib.skill.yesbfangzhu_backup.effect;
                                            player.removeMark('yexingshang', effect.cost);
                                            await effect.content(player, target);
                                        },
                                        ai: effect.ai,
                                    };
                                },
                                prompt(links, player) {
                                    const effect = links[0],
                                        str = '###放逐###';
                                    return str + '<div class="text center">移去' + effect.cost + '个<颂>标记,' + effect.prompt() + '</div>';
                                },
                            },
                            ai: {
                                combo: 'yexingshang',
                                order: 7,
                                result: {
                                    player(player) {
                                        const list = get.info('yesbfangzhu').getList.filter((effect) => {
                                            return player.countMark('yexingshang') >= effect.cost && effect.filter(player);
                                        });
                                        return Math.max(
                                            ...list.map((effect) => {
                                                return Math.max(
                                                    ...game
                                                        .filterPlayer((target) => {
                                                            const filterTarget = effect.filterTarget;
                                                            if (!filterTarget) return target == player;
                                                            if (typeof filterTarget == 'function') return filterTarget(null, player, target);
                                                            return true;
                                                        })
                                                        .map((target) => {
                                                            game.broadcastAll((effect) => (lib.skill.yexingshang_aiSkill.ai = effect.ai), effect);
                                                            return get.effect(target, 'yexingshang_aiSkill', player, player);
                                                        })
                                                );
                                            })
                                        );
                                    },
                                },
                            },
                            subSkill: {
                                backup: {},
                                baiban: {
                                    init(player, skill) {
                                        player.addSkillBlocker(skill);
                                        player.addTip(skill, '放逐 技能失效');
                                    },
                                    onremove(player, skill) {
                                        player.removeSkillBlocker(skill);
                                        player.removeTip(skill);
                                    },
                                    inherit: 'baiban',
                                    marktext: '逐',
                                },
                                kill: {
                                    charlotte: true,
                                    mark: true,
                                    marktext: '禁',
                                    intro: { content: '不能响应其他角色使用的牌' },
                                    trigger: { global: 'useCard1' },
                                    filter(event, player) {
                                        return event.player != player;
                                    },
                                    forced: true,
                                    popup: false,
                                    async content(event, trigger, player) {
                                        trigger.directHit.add(player);
                                    },
                                    init(player, skill) {
                                        player.addTip(skill, '放逐 无法响应');
                                    },
                                    onremove(player, skill) {
                                        player.removeTip(skill);
                                    },
                                },
                                ban: {
                                    charlotte: true,
                                    mark: true,
                                    marktext: '禁',
                                    intro: {
                                        markcount: () => 0,
                                        content(storage) {
                                            if (storage.length > 1) return '不能使用手牌';
                                            return '于手牌中只能使用' + get.translation(storage[0]) + '牌';
                                        },
                                    },
                                    init(player, skill) {
                                        let storage = player.getStorage(skill);
                                        if (storage.length) {
                                            player.addTip(skill, '放逐 限' + (storage.length === 1 ? get.translation(storage[0])[0] : '手牌'));
                                        }
                                    },
                                    onremove(player, skill) {
                                        player.removeTip(skill);
                                        delete player.storage[skill];
                                    },
                                    mod: {
                                        cardEnabled(card, player) {
                                            const storage = player.getStorage('yesbfangzhu_ban');
                                            const hs = player.getCards('h'),
                                                cards = [card];
                                            if (Array.isArray(card.cards)) cards.addArray(card.cards);
                                            if (cards.containsSome(...hs) && (storage.length > 1 || !storage.includes(get.type2(card)))) return false;
                                        },
                                        cardSavable(card, player) {
                                            const storage = player.getStorage('yesbfangzhu_ban');
                                            const hs = player.getCards('h'),
                                                cards = [card];
                                            if (Array.isArray(card.cards)) cards.addArray(card.cards);
                                            if (cards.containsSome(...hs) && (storage.length > 1 || !storage.includes(get.type2(card)))) return false;
                                        },
                                    },
                                },
                            },
                        },
                        yesongwei: {
                            audio: 'sbsongwei',
                            trigger: { player: 'phaseUseBegin' },
                            filter(event, player) {
                                if (player.countMark('yexingshang') >= get.info('yexingshang').getLimit) return false;
                                return game.hasPlayer((target) => target.group == 'wei' && target != player);
                            },
                            zhuSkill: true,
                            forced: true,
                            async content(event, trigger, player) {
                                player.addMark('yexingshang', Math.min(get.info('yexingshang').getLimit - player.countMark('yexingshang'), 2 * game.countPlayer((target) => target.group == 'wei' && target != player)));
                            },
                            group: 'yesongwei_delete',
                            subSkill: {
                                delete: {
                                    audio: 'yesongwei',
                                    enable: 'phaseUse',
                                    filter(event, player) {
                                        if (player.storage.yesongwei_delete) return false;
                                        return game.hasPlayer((target) => lib.skill.yesongwei.subSkill.delete.filterTarget(null, player, target));
                                    },
                                    filterTarget(card, player, target) {
                                        return target != player && target.getStockSkills(false, true).length;
                                    },
                                    limited: true,
                                    content() {
                                        target.changeGroup('wei');
                                        player.storage.yesongwei_delete = true;
                                        player.awakenSkill('yesongwei_delete');
                                        target.removeSkills(event.target.getStockSkills(false, true));
                                    },
                                    ai: {
                                        order: 13,
                                        result: {
                                            target(player, target) {
                                                return -target.getStockSkills(false, true).length;
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        yeqingshi: {
                            audio: 'dcqingshi',
                            trigger: { player: 'useCard' },
                            filter(event, player) {
                                if (!player.isPhaseUsing()) return false;
                                if (
                                    player.hasCard((card) => {
                                        return card.name == event.card.name;
                                    })
                                )
                                    return true;
                                return false;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var choices = [];
                                var choiceList = ['令' + get.translation(trigger.card) + '对其中一个目标角色造成的伤害+1', '令任意名角色各摸一张牌', '摸' + get.translation(player.hp) + '张牌,然后〖情势〗于本回合失效'];
                                if (trigger.targets && trigger.targets.length) choices.push('选项一');
                                else choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + '(无目标角色)</span>';
                                if (game.players.length) choices.push('选项二');
                                else choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + '</span>';
                                if (player.hp > 0) choices.push('选项三');
                                else choiceList[2] = '<span style="opacity:0.5">' + choiceList[1] + '(体力值为0)</span>';
                                player
                                    .chooseControl(choices, 'cancel2')
                                    .set('choiceList', choiceList)
                                    .set('prompt', get.prompt('yeqingshi'))
                                    .set('ai', () => {
                                        return _status.event.choice;
                                    })
                                    .set(
                                        'choice',
                                        (() => {
                                            var choicesx = choices.slice();
                                            var cards = player.getCards('hs');
                                            var bool1 =
                                                get.tag(trigger.card, 'damage') &&
                                                choicesx.includes('选项一') &&
                                                trigger.targets.some((current) => {
                                                    return get.attitude(player, current) < 0;
                                                }),
                                                bool2 = choicesx.includes('选项二');
                                            if (bool2)
                                                bool2 = game.countPlayer(function (current) {
                                                    return get.attitude(player, current) > 0;
                                                });
                                            else bool2 = 0;
                                            if (bool1 || bool2) {
                                                for (let i = 0; i < cards.length; i++) {
                                                    var name = cards[i].name;
                                                    if (player.getStorage('yeqingshi_clear').includes(name)) continue;
                                                    for (var j = i + 1; j < cards.length; j++) {
                                                        if (name === cards[j].name && get.position(cards[i]) + get.position(cards[j]) !== 'ss' && player.hasValueTarget(cards[i])) {
                                                            choicesx.remove('选项三');
                                                            break;
                                                        }
                                                    }
                                                }
                                            }
                                            if (bool2 > 2) return '选项二';
                                            if (choicesx.includes('选项三')) return '选项三';
                                            if (bool2 === 2) return '选项二';
                                            if (bool1) return '选项一';
                                            if (bool2) return '选项二';
                                            return 'cancel2';
                                        })()
                                    );
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    game.log(player, '选择了', '#y' + result.control);
                                    var index = ['选项一', '选项二', '选项三'].indexOf(result.control) + 1;
                                    var next = game.createEvent('yeqingshi_after');
                                    next.player = player;
                                    next.card = trigger.card;
                                    next.setContent(lib.skill.yeqingshi['content' + index]);
                                }
                            },
                            content1() {
                                'step 0';
                                player
                                    .chooseTarget('令' + get.translation(card) + '对其中一个目标造成的伤害+1', true, (card, player, target) => {
                                        return _status.event.targets.includes(target);
                                    })
                                    .set('ai', (target) => {
                                        return 2 - get.attitude(_status.event.player, target);
                                    })
                                    .set('targets', event.parent.getTrigger().targets);
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.line(target);
                                    player.addTempSkill('yeqingshi_ex');
                                    if (!player.storage.yeqingshi_ex) player.storage.yeqingshi_ex = [];
                                    player.storage.yeqingshi_ex.push([target, card]);
                                }
                            },
                            content2() {
                                'step 0';
                                player.chooseTarget('令任意名角色各摸一张牌', [1, Infinity], true).set('ai', (target) => {
                                    return get.attitude(_status.event.player, target);
                                });
                                ('step 1');
                                if (result.bool) {
                                    var targets = result.targets;
                                    targets.sortBySeat();
                                    player.line(targets);
                                    game.asyncDraw(targets);
                                }
                            },
                            content3() {
                                'step 0';
                                player.draw(player.hp);
                                player.tempBanSkill('yeqingshi');
                            },
                            subSkill: {
                                ex: {
                                    trigger: { source: 'damageBegin1' },
                                    filter(event, player) {
                                        return (
                                            player.storage.yeqingshi_ex &&
                                            player.storage.yeqingshi_ex.some((info) => {
                                                return info[0] == event.player && info[1] == event.card;
                                            })
                                        );
                                    },
                                    forced: true,
                                    charlotte: true,
                                    popup: false,
                                    content() {
                                        trigger.num++;
                                        for (let i = 0; i < player.storage.yeqingshi_ex.length; i++) {
                                            if (player.storage.yeqingshi_ex[i][1] == trigger.card) player.storage.yeqingshi_ex.splice(i--, 1);
                                        }
                                    },
                                },
                                clear: {
                                    charlotte: true,
                                },
                            },
                            ai: {
                                threaten: 6,
                            },
                        },
                        yezhizhe: {
                            audio: 'dczhizhe',
                            enable: 'phaseUse',
                            limited: true,
                            filterCard: true,
                            position: 'h',
                            discard: false,
                            lose: false,
                            delay: false,
                            check(card) {
                                if (get.type(card) != 'basic' && get.type(card) != 'trick') return 0;
                                return get.value(card) - 7.5;
                            },
                            content() {
                                'step 0';
                                var card = cards[0];
                                player.awakenSkill('yezhizhe');
                                var cardx = game.createCard2(card.name, card.suit, card.number, card.nature);
                                player.gain(cardx).gaintag.add('yezhizhe');
                                player.addSkill('yezhizhe_effect');
                            },
                            ai: {
                                order: 15,
                                result: {
                                    player: 1,
                                },
                            },
                            subSkill: {
                                effect: {
                                    mod: {
                                        ignoredHandcard(card, player) {
                                            if (card.hasGaintag('yezhizhe')) {
                                                return true;
                                            }
                                        },
                                        cardDiscardable(card, player, name) {
                                            if (name == 'phaseDiscard' && card.hasGaintag('yezhizhe')) {
                                                return false;
                                            }
                                        },
                                        aiOrder(player, card, num) {
                                            if (num > 0 && get.itemtype(card) === 'card' && card.hasGaintag('yezhizhe')) return num + 0.16;
                                        },
                                        aiValue(player, card, num) {
                                            if (num > 0 && get.itemtype(card) === 'card' && card.hasGaintag('yezhizhe')) return 2 * num;
                                        },
                                        aiUseful(player, card, num) {
                                            if (num > 0 && !player._yezhizhe_mod && get.itemtype(card) === 'card' && card.hasGaintag('yezhizhe')) {
                                                if (player.canIgnoreHandcard(card)) return Infinity;
                                                player._yezhizhe_mod = true;
                                                if (
                                                    player.hp < 3 &&
                                                    player.needsToDiscard(0, (i, player) => {
                                                        return !player.canIgnoreHandcard(i) && get.useful(i) > 6;
                                                    })
                                                )
                                                    return num * 1.5;
                                                return num * 10;
                                            }
                                        },
                                    },
                                    trigger: { player: ['useCardAfter', 'respondAfter'] },
                                    charlotte: true,
                                    forced: true,
                                    filter(event, player) {
                                        return player.hasHistory('lose', function (evt) {
                                            if (evt.parent != event) return false;
                                            for (var i in evt.gaintag_map) {
                                                if (evt.gaintag_map[i].includes('yezhizhe')) {
                                                    if (
                                                        event.cards.some((card) => {
                                                            return get.position(card, true) == 'o' && card.cardid == i;
                                                        })
                                                    )
                                                        return true;
                                                }
                                            }
                                            return false;
                                        });
                                    },
                                    content() {
                                        'step 0';
                                        var cards = [];
                                        player.getHistory('lose', function (evt) {
                                            if (evt.parent != trigger) return false;
                                            for (var i in evt.gaintag_map) {
                                                if (evt.gaintag_map[i].includes('yezhizhe')) {
                                                    var cardsx = trigger.cards.filter((card) => {
                                                        return get.position(card, true) == 'o' && card.cardid == i;
                                                    });
                                                    if (cardsx.length) cards.addArray(cardsx);
                                                }
                                            }
                                        });
                                        if (cards.length) {
                                            player.addTempSkill('yezhizhe_clear');
                                            player.gain(cards, 'gain2').gaintag.addArray(['yezhizhe', 'yezhizhe_clear']);
                                        }
                                    },
                                },
                                clear: {
                                    charlotte: true,
                                    onremove(player) {
                                        player.removeGaintag('yezhizhe_clear');
                                    },
                                    mod: {
                                        cardEnabled2(card, player) {
                                            var cards = [];
                                            if (card.cards) cards.addArray(cards);
                                            if (get.itemtype(card) == 'card') cards.push(card);
                                            for (var cardx of cards) {
                                                if (cardx.hasGaintag('yezhizhe_clear')) return false;
                                            }
                                        },
                                        cardRespondable(card, player) {
                                            var cards = [];
                                            if (card.cards) cards.addArray(cards);
                                            if (get.itemtype(card) == 'card') cards.push(card);
                                            for (var cardx of cards) {
                                                if (cardx.hasGaintag('yezhizhe_clear')) return false;
                                            }
                                        },
                                        cardSavable(card, player) {
                                            var cards = [];
                                            if (card.cards) cards.addArray(cards);
                                            if (get.itemtype(card) == 'card') cards.push(card);
                                            for (var cardx of cards) {
                                                if (cardx.hasGaintag('yezhizhe_clear')) return false;
                                            }
                                        },
                                    },
                                },
                            },
                        },
                        ceshi_moran: {
                            persevereSkill: true,
                            audio: 'ext:寰宇兴衰/audio:1',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h') < player.maxHp || (get.type(event.card) != 'equip' && get.type(event.card) != 'delay' && event.card.name != 'shan' && event.card.name != 'wuxie');
                            },
                            content() {
                                'step 0';
                                var list = [];
                                var choiceList = ['将手牌摸至体力上限', '令此牌额外结算一次'];
                                if (player.countCards('h') < player.maxHp) list.push('摸牌');
                                else choiceList[0] = '<span style="opacity:0.5; ">' + choiceList[0] + '(不满足条件)</span>';
                                if (get.type(trigger.card) != 'equip' && get.type(trigger.card) != 'delay' && trigger.card.name != 'shan' && trigger.card.name != 'wuxie') list.push('双发');
                                else choiceList[1] = '<span style="opacity:0.5; ">' + choiceList[1] + '(不满足条件)</span>';
                                list.push('cancel');
                                player
                                    .chooseControl(list)
                                    .set('prompt', get.prompt('ceshi_moran'))
                                    .set('ai', () => {
                                        var choices = _status.event.controls.slice().remove('cancel2');
                                        if (!choices.length) return 'cancel2';
                                        var player = _status.event.player;
                                        if (get.tag(trigger.card, 'norepeat')) return '双发';
                                        return '摸牌';
                                    })
                                    .set('choiceList', choiceList);
                                ('step 1');
                                if (result.control == 'cancel2') {
                                    event.finish();
                                    return;
                                }
                                if (result.control == '摸牌') {
                                    player.draw(player.maxHp - player.countCards('h'));
                                } else {
                                    trigger.effectCount++;
                                    game.log(trigger.card, '额外结算一次');
                                }
                            },
                        },
                        ceshi_huisu: {
                            persevereSkill: true,
                            audio: 'ext:寰宇兴衰/audio:1',
                            forced: true,
                            trigger: {
                                player: 'loseMaxHpBefore',
                            },
                            content() {
                                trigger.cancel();
                            },
                            group: ['ceshi_huisu_re', 'ceshi_huisu_die'],
                            subSkill: {
                                die: {
                                    persevereSkill: true,
                                    audio: 'ceshi_huisu',
                                    forced: true,
                                    trigger: {
                                        player: 'dieBefore',
                                    },
                                    filter(event, player) {
                                        return !event.source;
                                    },
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                                re: {
                                    persevereSkill: true,
                                    audio: 'ceshi_huisu',
                                    forced: true,
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    filter(event, player) {
                                        return (
                                            player.hp < player.maxHp &&
                                            player.getHistory('damage', function (evt) {
                                                return evt._dyinged;
                                            }).length <= 0
                                        );
                                    },
                                    content() {
                                        var num = player.maxHp - player.hp;
                                        if (num > 0) {
                                            player.recover(num);
                                            player.draw(num);
                                        }
                                    },
                                },
                            },
                        },
                        ceshi_jielv: {
                            group: 'ceshi_jielv_dam',
                            subSkill: {
                                dam: {
                                    audio: 'ceshi_jielv',
                                    persevereSkill: true,
                                    forced: true,
                                    trigger: {
                                        source: 'damageBegin2',
                                    },
                                    filter(event, player) {
                                        return event.player.countMark('ceshi_jielv') >= 1;
                                    },
                                    content() {
                                        trigger.player.loseHp(trigger.num);
                                        trigger.player.removeMark('ceshi_jielv');
                                    },
                                },
                            },
                            persevereSkill: true,
                            audio: 'ext:寰宇兴衰/audio:1',
                            forced: true,
                            trigger: {
                                source: 'damageEnd',
                            },
                            marktext: '戒律',
                            intro: {
                                content: '当前拥有#个标记',
                            },
                            filter(event, player) {
                                return event.player && event.player.isIn();
                            },
                            content() {
                                trigger.player.addMark('ceshi_jielv');
                            },
                        },
                        ka_dengchang: {
                            charlotte: true,
                            forced: true,
                            audio: 'ext:寰宇兴衰/audio:2',
                            trigger: {
                                global: 'gameDrawBegin',
                            },
                            content() { },
                        },
                        ka_shenshi: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            subSkill: {
                                yes: { charlotte: true },
                                zhongmuaile: {
                                    trigger: {
                                        global: ['loseAfter', 'equipAfter', 'loseAsyncAfter', 'cardsDiscardAfter'],
                                    },
                                    audio: 'ka_shenshi',
                                    forced: true,
                                    silent: true,
                                    firstDo: true,
                                    filter(event, player) {
                                        const nameList = ['shan'];
                                        return event.getd().some((card) => {
                                            return nameList.includes(card.name) || (get.tag(card, 'recover') && get.position(card, true) === 'd');
                                        });
                                    },
                                    async content(event, trigger, player) {
                                        const nameList = ['shan'];
                                        const cards = trigger.getd().filter((card) => {
                                            return nameList.includes(card.name) || (get.tag(card, 'recover') && get.position(card, true) === 'd');
                                        });
                                        await game.cardsGotoSpecial(cards);
                                        game.log(cards, '被移出了游戏');
                                    },
                                },
                            },
                            juexingji: true,
                            forced: true,
                            trigger: {
                                player: ['phaseZhunbeiBegin', 'dieBegin'],
                            },
                            filter(event, player, name) {
                                if (name == 'phaseZhunbeiBegin') return player.hp < 3;
                                return true;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('ka_shenshi');
                                player.addSkill('ka_shenshi_yes');
                                var name = event.triggername;
                                if (name == 'dieBegin') trigger.cancel();
                                ('step 1');
                                player.$fullscreenpop('终幕哀乐!', 'thunder');
                                game.addGlobalSkill('ka_shenshi_zhongmuaile');
                                var cards = [];
                                for (let i = 0; i <= 500; i++) {
                                    const cardx = get.cardPile(function (cardx) {
                                        return (['shan'].includes(cardx.name) || get.tag(cardx, 'recover')) && !cards.includes(cardx);
                                    });
                                    if (cardx) cards.push(cardx);
                                }
                                for (let i of game.players) {
                                    for (let y of i.getCards('hesj')) {
                                        if (['shan'].includes(y.name) || get.tag(y, 'recover')) cards.push(y);
                                    }
                                }
                                game.cardsGotoSpecial(cards);
                                game.log(cards, '被移出了游戏');
                                ('step 2');
                                for (var target of game.players) {
                                    const delt = target.getHp(true) - 1,
                                        num = Math.abs(delt);
                                    if (delt != 0) {
                                        if (delt > 0) {
                                            const next = target.changeHp(-delt);
                                            next._triggered = null;
                                        } else target.recover(num);
                                    }
                                    if (num > 0 && player != target) target.changeHujia(num, null, true);
                                    else if (num > 0 && player == target) target.changeHujia(num + 3, null, false);
                                    else if (player == target) target.changeHujia(3, null, false);
                                }
                            },
                        },
                        ka_yingshe: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            group: 'ka_yingshe_dam',
                            subSkill: {
                                dam: {
                                    audio: 'ka_yingshe',
                                    forced: true,
                                    usable: 1,
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        return player.hp < 6 && !player.hasSkill('ka_yingshe_num2') && event.num > 0;
                                    },
                                    content() {
                                        player.changeHujia(trigger.num);
                                        player.recover(trigger.num);
                                        player.addSkill('ka_yingshe_num2');
                                    },
                                },
                                num1: {
                                    forced: true,
                                    silent: true,
                                    charlotte: true,
                                    popup: false,
                                    content() {
                                        if (!player.storage.ka_yingshe_num1) player.storage.ka_yingshe_num1 = true;
                                        else player.removeSkill('ka_yingshe_num1');
                                    },
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                },
                                num2: {
                                    forced: true,
                                    silent: true,
                                    charlotte: true,
                                    popup: false,
                                    content() {
                                        if (!player.storage.ka_yingshe_num2) player.storage.ka_yingshe_num2 = true;
                                        else player.removeSkill('ka_yingshe_num2');
                                    },
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                },
                            },
                            forced: true,
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                return event.player != player && get.tag(event.card, 'damage') && player.hp < 6 && !player.hasSkill('ka_yingshe_num1');
                            },
                            content() {
                                player.addSkill('ka_yingshe_num1');
                                trigger.excluded.push(player);
                            },
                        },
                        ka_chenji: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            group: 'ka_chenji_dam',
                            persevereSkill: true,
                            forced: true,
                            trigger: {
                                source: 'damageBegin2',
                            },
                            filter(event, player) {
                                var num = player.maxHp - player.hp;
                                return num >= 3;
                            },
                            content() {
                                var num = Math.min(2, Math.floor((player.maxHp - player.hp) / 3));
                                trigger.num += num;
                            },
                            global: 'ka_chenji_dying',
                            subSkill: {
                                dam: {
                                    audio: 'ka_chenji',
                                    forced: true,
                                    persevereSkill: true,
                                    trigger: {
                                        player: 'damageBegin4',
                                    },
                                    filter(event, player) {
                                        return player.hujia <= 0 && event.num > 0 && player.hp < player.maxHp && player.hasSkill('ka_shenshi_yes');
                                    },
                                    content() {
                                        trigger.cancel();
                                        player.loseMaxHp();
                                    },
                                },
                                dying: {
                                    persevereSkill: true,
                                    forced: true,
                                    mod: {
                                        cardSavable(card, player) {
                                            if (player.isAlive() && !player.hasSkill('ka_chenji')) {
                                                if (!player.isDying() && get.tag(card, 'recover') && get.type(card) == 'basic') return false;
                                            }
                                        },
                                        cardEnabled(card, player) {
                                            if (player.isAlive() && !player.hasSkill('ka_chenji')) {
                                                if (!player.isDying() && get.tag(card, 'recover') && get.type(card) == 'basic') return false;
                                            }
                                        },
                                    },
                                },
                            },
                        },
                        ka_ji: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            persevereSkill: true,
                            forced: true,
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return get.tag(event.card, 'damage');
                            },
                            content() {
                                'step 0';
                                var list = [];
                                if (player.countCards('h') < player.hp) list.push('选项一');
                                list.push('选项二');
                                player
                                    .chooseControl(list)
                                    .set('choiceList', ['将手牌摸至当前体力值', '令此牌额外结算一次'])
                                    .set('prompt', get.prompt('ka_ji', player))
                                    .set('ai', function () {
                                        return '选项二';
                                    });
                                ('step 1');
                                if (result.control == '选项一') {
                                    player.draw(player.hp - player.countCards('h'));
                                } else {
                                    trigger.effectCount++;
                                    game.log(trigger.card, '额外结算一次');
                                }
                            },
                        },
                        yexieyu: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            group: ['yexieyu_dam', 'yexieyu_dam2'],
                            subSkill: {
                                dam2: {
                                    audio: 'yexieyu',
                                    forced: true,
                                    trigger: {
                                        player: 'damageBefore',
                                    },
                                    filter(event, player) {
                                        if (!player.storage.yexieyu) return event.nature != 'thunder';
                                        return event.nature != 'fire';
                                    },
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                                dam: {
                                    audio: 'yexieyu',
                                    forced: true,
                                    trigger: {
                                        global: 'damageBegin3',
                                    },
                                    filter(event, player) {
                                        if (!player.storage.yexieyu) return event.nature == 'thunder';
                                        return event.nature == 'fire';
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                },
                            },
                            forced: true,
                            zhuanhuanji: true,
                            mark: true,
                            marktext: '☯',
                            intro: {
                                content(storage, player) {
                                    if (!storage) return '转换技,锁定技.所有角色受到雷属性伤害+1,防止你受到所有雷属性伤害以外的伤害';
                                    return '转换技,锁定技.所有角色受到火属性伤害+1,防止你受到所有火属性伤害以外的伤害';
                                },
                            },
                            trigger: {
                                global: 'roundStart',
                            },
                            content() {
                                if (Math.random() > 0.5) player.changeZhuanhuanji('yexieyu');
                            },
                        },
                        yemozun: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            trigger: {
                                player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
                            },
                            forced: true,
                            _priority: 50,
                            content() {
                                var name = event.triggername;
                                if (name == 'phaseZhunbeiBegin') {
                                    var cardx = [];
                                    cardx.addArray(ui.discardPile.childNodes);
                                    cardx.addArray(ui.cardPile.childNodes);
                                    for (const i of game.players) {
                                        cardx.addArray(i.getCards('hej'));
                                    }
                                    for (let i = cardx.length - 1; i > 0; i--) {
                                        const j = Math.floor(Math.random() * (i + 1));
                                        [cardx[i], cardx[j]] = [cardx[j], cardx[i]];
                                    }
                                    var cards = [],
                                        name = [];
                                    for (const i of cardx) {
                                        if (!name.includes(i.name) && (get.type(i) == 'basic' || get.type2(i) == 'trick')) {
                                            cards.add(i);
                                            name.add(i.name);
                                        }
                                    }
                                    if (cards) player.gain(cards, 'gain2').gaintag = ['yemozun'];
                                } else {
                                    var cards = player.getCards('h', (card) => card.hasGaintag('yemozun') && lib.filter.cardDiscardable(card, player, 'yemozun'));
                                    if (cards.length) player.discard(cards);
                                }
                            },
                        },
                        yeleiji: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            trigger: { player: ['useCard', 'respond'] },
                            filter(event, player) {
                                return event.card && event.card.name == 'shan';
                            },
                            line: 'thunder',
                            async cost(event, trigger, player) {
                                const next = player.chooseTarget(get.prompt2('yeleiji'), function (card, player, target) {
                                    return target != player;
                                });
                                next.ai = function (target) {
                                    if (target.hasSkill('hongyan')) return 0;
                                    return get.damageEffect(target, _status.event.player, _status.event.player, 'thunder');
                                };
                                event.result = await next.forResult();
                            },
                            async content(event, trigger, player) {
                                const [target] = event.targets;
                                const next = target.judge(function (card) {
                                    const suit = card.suit;
                                    if (suit == 'spade') return -4;
                                    if (suit == 'club') return -2;
                                    return 0;
                                });
                                next.judge2 = function (result) {
                                    return result.bool == false;
                                };
                                const { suit } = await next.forResult();
                                if (suit == 'club') {
                                    await player.recover();
                                    await target.damage('thunder');
                                } else if (suit == 'spade') {
                                    await target.damage(2, 'thunder');
                                }
                            },
                            ai: {
                                useShan: true,
                                effect: {
                                    target_use(card, player, target, current) {
                                        if (
                                            get.tag(card, 'respondShan') &&
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
                                            let club = 0,
                                                spade = 0;
                                            if (
                                                game.hasPlayer(function (current) {
                                                    return get.attitude(target, current) < 0 && get.damageEffect(current, target, target, 'thunder') > 0;
                                                })
                                            ) {
                                                club = 2;
                                                spade = 4;
                                            }
                                            if (!target.isHealthy()) club += 2;
                                            if (!club && !spade) return 1;
                                            if (card.name === 'sha') {
                                                if (
                                                    !target.mayHaveShan(
                                                        player,
                                                        'use',
                                                        target.getCards('h', (i) => {
                                                            return i.hasGaintag('sha_notshan');
                                                        })
                                                    )
                                                )
                                                    return;
                                            } else if (!target.mayHaveShan(player)) return 1 - 0.1 * Math.min(5, target.countCards('hs'));
                                            if (!target.hasSkillTag('rejudge')) return [1, (club + spade) / 4];
                                            let pos = player.hasSkillTag('viewHandcard', null, target, true) ? 'hes' : 'e',
                                                better = club > spade ? 'club' : 'spade',
                                                max = 0;
                                            target.hasCard(function (cardx) {
                                                if (cardx.suit === better) {
                                                    max = 2;
                                                    return true;
                                                }
                                                if (spade && get.color(cardx) === 'black') max = 1;
                                            }, pos);
                                            if (max === 2) return [1, Math.max(club, spade)];
                                            if (max === 1) return [1, Math.min(club, spade)];
                                            if (pos === 'e') return [1, Math.min((Math.max(1, target.countCards('hs')) * (club + spade)) / 4, Math.max(club, spade))];
                                            return [1, (club + spade) / 4];
                                        }
                                    },
                                },
                            },
                        },
                        yelianyu: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            trigger: { player: 'phaseJieshuBegin' },
                            forced: true,
                            content() {
                                'step 0';
                                event.players = get.players(player);
                                ('step 1');
                                if (event.players.length) {
                                    var current = event.players.shift();
                                    if (current.isEnemiesOf(player)) {
                                        player.line(current, 'fire');
                                        current.damage('fire');
                                    }
                                    event.redo();
                                }
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        gui_wanxiangx: { charlotte: true },
                        gui_wanxiang: {
                            audio: 'ext:寰宇兴衰/audio:true',
                            group: 'gui_wanxiang_die',
                            subSkill: {
                                die: {
                                    forced: true,
                                    charlotte: true,
                                    trigger: {
                                        global: 'dieAfter',
                                    },
                                    filter(event, player) {
                                        return event.player.hasSkill('gui_pozhen');
                                    },
                                    content() {
                                        player.removeSkill('gui_wanxiang');
                                    },
                                },
                            },
                            persevereSkill: true,
                            forced: true,
                            charlotte: true,
                            persevereSkill: true,
                            forced: true,
                            trigger: {
                                player: ['gainMaxHpBegin', 'loseMaxHpBegin', 'recoverBegin', 'loseHpBegin'],
                                source: 'damageBegin2',
                            },
                            filter(event, player, name) {
                                if (name == 'damageBegin2' || name == 'recoverBegin' || name == 'loseHpBegin') return event.num > 1;
                                return event.num > 0;
                            },
                            content() {
                                var name = event.triggername;
                                if (name == 'damageBegin2' || name == 'recoverBegin' || name == 'loseHpBegin') {
                                    trigger.num = 1;
                                } else trigger.cancel();
                            },
                        },
                        gui_pozhen: {
                            audio: 'ext:寰宇兴衰/audio:true',
                            juexingji: true,
                            forced: true,
                            derivation: 'gui_wanxiang',
                            trigger: {
                                player: ['gainAfter', 'loseAfter'],
                                global: ['loseAsyncAfter', 'roundStart'],
                            },
                            filter(event, player) {
                                return player.countCards('h') == game.roundNumber && player.hasSkill('gui_niyuan');
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('gui_pozhen');
                                player.gainMaxHp(2);
                                ('step 1');
                                player.hp = player.maxHp;
                                for (const i of game.players) {
                                    if (i != player) {
                                        i.addSkill('gui_wanxiang');
                                    }
                                }
                                player.addSkill('gui_wanxiangx');
                                player.storage.gui_niyuan1 = 1;
                            },
                        },
                        gui_jiaocuo: {
                            audio: 'ext:寰宇兴衰/audio:true',
                            group: ['gui_jiaocuo_begin', 'gui_jiaocuo_die'],
                            subSkill: {
                                die: {
                                    audio: 'gui_jiaocuo',
                                    forced: true,
                                    trigger: {
                                        global: 'dieBegin',
                                    },
                                    filter(event, player) {
                                        return player.storage.gui_jiaocuo[0].includes(event.player) && event.player != player && player.storage.gui_jiaocuo && player.storage.gui_jiaocuo.length;
                                    },
                                    content() {
                                        var st = player.storage.gui_jiaocuo;
                                        for (let i = 0; i < st[0].length; i++) {
                                            var target = st[0][i],
                                                hp = st[1][i];
                                            if (target == trigger.player) {
                                                player.gainMaxHp(hp);
                                                player.recover(hp);
                                                player.draw(hp);
                                                player.storage.gui_niyuan1++;
                                            }
                                        }
                                    },
                                },
                                begin: {
                                    trigger: {
                                        player: 'enterGame',
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.name != 'phase' || game.phaseNumber == 0;
                                    },
                                    content() {
                                        var targets = game.filterPlayer();
                                        if (!player.storage.gui_jiaocuo) player.storage.gui_jiaocuo = [[], []];
                                        for (var targetx of targets) {
                                            if (targetx != player) {
                                                player.storage.gui_jiaocuo[0].push(targetx);
                                                player.storage.gui_jiaocuo[1].push(targetx.maxHp);
                                            }
                                        }
                                    },
                                },
                            },
                            forced: true,
                            trigger: {
                                player: 'damageBegin4',
                            },
                            filter(event, player) {
                                return game.roundNumber == 1 && event.num > 0;
                            },
                            content() {
                                player.draw(trigger.num);
                                trigger.cancel();
                            },
                        },
                        gui_niyuan: {
                            audio: 'ext:寰宇兴衰/audio:true',
                            subSkill: {
                                dam1: {
                                    audio: 'gui_niyuan',
                                    forced: true,
                                    trigger: {
                                        source: 'damageBegin2',
                                    },
                                    filter(event, player) {
                                        return event.num > 0;
                                    },
                                    content() {
                                        trigger.num += player.storage.gui_niyuan1;
                                    },
                                },
                                dam2: {
                                    audio: 'gui_niyuan',
                                    forced: true,
                                    trigger: {
                                        player: 'damageBegin4',
                                    },
                                    filter(event, player) {
                                        return event.num > 0;
                                    },
                                    content() {
                                        trigger.num -= player.storage.gui_niyuan1;
                                    },
                                },
                            },
                            forced: true,
                            zhuanhuanji: true,
                            mark: true,
                            marktext: '☯',
                            trigger: {
                                global: 'roundStart',
                            },
                            init(player, skill) {
                                if (!player.storage.gui_niyuan1) player.storage.gui_niyuan1 = 1;
                            },
                            intro: {
                                content(storage, player, skill) {
                                    if (player.storage.gui_niyuan == false) return '锁定技,一轮游戏开始时,你回复' + get.cnNumber(player.storage.gui_niyuan1) + '点体力上限,然后本轮内你收到的伤害-' + get.cnNumber(player.storage.gui_niyuan1) + '';
                                    return '锁定技,一轮游戏开始时,你摸' + get.cnNumber(player.storage.gui_niyuan1) + '张牌,然后本轮内你造成的伤害+' + get.cnNumber(player.storage.gui_niyuan1) + '';
                                },
                            },
                            content() {
                                'step 0';
                                player.changeZhuanhuanji('gui_niyuan');
                                if (player.storage.gui_niyuan != false) {
                                    player.draw(player.storage.gui_niyuan1);
                                } else {
                                    player.recover(player.storage.gui_niyuan1);
                                }
                                ('step 1');
                                if (player.storage.gui_niyuan != false) {
                                    player.addTempSkill('gui_niyuan_dam1', { global: 'roundStart' });
                                } else {
                                    player.addTempSkill('gui_niyuan_dam2', { global: 'roundStart' });
                                }
                            },
                        },
                        yejuejin: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            persevereSkill: true,
                            enable: 'phaseUse',
                            limited: true,
                            filterCard: () => false,
                            selectCard: [-1, -2],
                            filterTarget: true,
                            selectTarget: -1,
                            multiline: true,
                            async contentBefore(event, trigger, player) {
                                if (lib.config.extension_寰宇兴衰_hy_texiao == 'on') {
                                    dcdAnim.loadSpine(ziye.SS_cmskill.name, 'skel', function () {
                                        dcdAnim.playSpine(ziye.SS_cmskill, { speed: 1, scale: 1 });
                                        game.playAudio('../extension/寰宇兴衰/effect/audio/effect_caomao_skill.mp3');
                                    });
                                }
                                player.awakenSkill('yejuejin');
                            },
                            async content(event, trigger, player) {
                                const target = event.target;
                                const delt = target.getHp(true) - 1,
                                    num = Math.abs(delt);
                                if (delt != 0) {
                                    if (delt > 0) {
                                        const next = target.changeHp(-delt);
                                        next._triggered = null;
                                        await next;
                                    } else await target.recover(num);
                                }
                                if (num > 0) await target.changeHujia(num + (player == target ? 2 : 0), null, true);
                                else if (player == target) await target.changeHujia(2, null, true);
                            },
                            async contentAfter(event, trigger, player) {
                                player.node.avatar.setBackgroundImage('extension/寰宇兴衰/image/yecaomao_shadow.jpg');
                                game.addGlobalSkill('yejuejin_xiangsicunwei');
                                player.$fullscreenpop('向死存魏!', 'thunder');
                                const cards = ['cardPile', 'discardPile'].map((pos) => Array.from(ui[pos].childNodes)).flat();
                                const filter = (card) => ['shan', 'tao', 'jiu'].includes(card.name);
                                const cardx = cards.filter(filter);
                                if (cardx.length) {
                                    await game.cardsGotoSpecial(cardx);
                                    game.log(cardx, '被移出了游戏');
                                }
                                for (const target of game.filterPlayer()) {
                                    const sishis = target.getCards('hej', filter);
                                    if (sishis.length) {
                                        target.$throw(sishis);
                                        game.log(sishis, '被移出了游戏');
                                        await target.lose(sishis, ui.special);
                                    }
                                }
                            },
                            ai: {
                                order: 0.1,
                                result: {
                                    player(player) {
                                        let eff = 1;
                                        game.countPlayer((current) => {
                                            const att = get.attitude(player, current),
                                                num = Math.abs(current.getHp(true) - 1);
                                            const delt = Math.max(0, num + current.hujia - 5);
                                            eff -= att * delt;
                                        });
                                        return eff > 0 ? 1 : 0;
                                    },
                                },
                            },
                            subSkill: {
                                xiangsicunwei: {
                                    trigger: {
                                        global: ['loseAfter', 'equipAfter', 'loseAsyncAfter', 'cardsDiscardAfter'],
                                    },
                                    forced: true,
                                    silent: true,
                                    firstDo: true,
                                    filter(event, player) {
                                        const nameList = ['shan', 'tao', 'jiu'];
                                        return event.getd().some((card) => {
                                            return nameList.includes(card.name) && get.position(card, true) === 'd';
                                        });
                                    },
                                    async content(event, trigger, player) {
                                        const nameList = ['shan', 'tao', 'jiu'];
                                        const cards = trigger.getd().filter((card) => {
                                            return nameList.includes(card.name) && get.position(card, true) === 'd';
                                        });
                                        await game.cardsGotoSpecial(cards);
                                        game.log(cards, '被移出了游戏');
                                    },
                                },
                            },
                        },
                        yefangzhu: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            persevereSkill: true,
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('yefangzhu'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    if (target.hasSkillTag('noturn')) return 0;
                                    var player = _status.event.player;
                                    if (get.attitude(_status.event.player, target) == 0) return 0;
                                    if (get.attitude(_status.event.player, target) > 0) {
                                        return 0;
                                    } else {
                                        if (target.classList.contains('turnedover')) return -1;
                                        return 1 + target.countCards('h');
                                    }
                                };
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    var num = player.maxHp - player.hp;
                                    player.chooseBool('令' + get.translation(event.target) + '翻面并摸' + get.cnNumber(num) + '张牌,否则其弃置' + get.cnNumber(num) + '张牌并流失一点体力').set('ai', function () {
                                        var player = _status.event.player,
                                            targe = event.target;
                                        if (get.attitude(player, targe) > 0) {
                                            return 1;
                                        } else {
                                            if (targe.classList.contains('turnedover')) return 0;
                                            if (player.maxHp - player.hp > 1) return 0;
                                            return 1;
                                        }
                                    });
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    if (player.isDamaged()) event.target.draw(player.getDamagedHp());
                                    event.target.turnOver();
                                } else {
                                    if (player.isDamaged()) event.target.chooseToDiscard(true, 'he', player.getDamagedHp());
                                    event.target.loseHp();
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -1.5];
                                            if (target.hp <= 1) return;
                                            if (!target.hasFriend()) return;
                                            var hastarget = false;
                                            var turnfriend = false;
                                            var players = game.filterPlayer();
                                            for (let i = 0; i < players.length; i++) {
                                                if (get.attitude(target, players[i]) < 0 && !players[i].isTurnedOver()) {
                                                    hastarget = true;
                                                }
                                                if (get.attitude(target, players[i]) > 0 && players[i].isTurnedOver()) {
                                                    hastarget = true;
                                                    turnfriend = true;
                                                }
                                            }
                                            if (get.attitude(player, target) > 0 && !hastarget) return;
                                            if (turnfriend || target.hp == target.maxHp) return [0.5, 1];
                                            if (target.hp > 1) return [1, 0.5];
                                        }
                                    },
                                },
                            },
                        },
                        yejiushi: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            inherit: 'rejiushi',
                            persevereSkill: true,
                            group: ['yejiushi_use', 'yejiushi_turnback', 'yejiushi_gain'],
                            subSkill: {
                                use: {
                                    hiddenCard(player, name) {
                                        if (name == 'jiu') return !player.isTurnedOver();
                                        return false;
                                    },
                                    audio: 'yejiushi',
                                    enable: 'chooseToUse',
                                    filter(event, player) {
                                        if (player.classList.contains('turnedover')) return false;
                                        return event.filterCard({ name: 'jiu' }, player, event);
                                    },
                                    content() {
                                        if (_status.event.getParent(2).type == 'dying') {
                                            event.dying = player;
                                            event.type = 'dying';
                                        }
                                        player.turnOver();
                                        player.useCard({ name: 'jiu' }, player);
                                    },
                                    ai: {
                                        order: 5,
                                        result: {
                                            player(player) {
                                                if (_status.event.parent.name == 'phaseUse') {
                                                    if (player.countCards('h', 'jiu') > 0) return 0;
                                                    if (player.getEquip('zhuge') && player.countCards('h', 'sha') > 1) return 0;
                                                    if (!player.countCards('h', 'sha')) return 0;
                                                    var targets = [];
                                                    var target;
                                                    var players = game.filterPlayer();
                                                    for (let i = 0; i < players.length; i++) {
                                                        if (get.attitude(player, players[i]) < 0) {
                                                            if (player.canUse('sha', players[i], true, true)) {
                                                                targets.push(players[i]);
                                                            }
                                                        }
                                                    }
                                                    if (targets.length) {
                                                        target = targets[0];
                                                    } else {
                                                        return 0;
                                                    }
                                                    var num = get.effect(target, { name: 'sha' }, player, player);
                                                    for (let i = 1; i < targets.length; i++) {
                                                        var num2 = get.effect(targets[i], { name: 'sha' }, player, player);
                                                        if (num2 > num) {
                                                            target = targets[i];
                                                            num = num2;
                                                        }
                                                    }
                                                    if (num <= 0) return 0;
                                                    var e2 = target.getEquip(2);
                                                    if (e2) {
                                                        if (e2.name == 'tengjia') {
                                                            if (!player.countCards('h', { name: 'sha', nature: 'fire' }) && !player.getEquip('zhuque')) return 0;
                                                        }
                                                        if (e2.name == 'renwang') {
                                                            if (!player.countCards('h', { name: 'sha', color: 'red' })) return 0;
                                                        }
                                                        if (e2.name == 'baiyin') return 0;
                                                    }
                                                    if (player.getEquip('guanshi') && player.countCards('he') > 2) return 1;
                                                    return target.countCards('h') > 3 ? 0 : 1;
                                                }
                                                if (player == _status.event.dying || player.isTurnedOver()) return 3;
                                            },
                                        },
                                        effect: {
                                            target(card, player, target) {
                                                if (target.isTurnedOver()) {
                                                    if (get.tag(card, 'damage')) {
                                                        if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                                        if (target.hp == 1) return;
                                                        return [1, target.countCards('h') / 2];
                                                    }
                                                }
                                            },
                                        },
                                    },
                                },
                                turnback: {
                                    audio: 'yejiushi',
                                    persevereSkill: true,
                                    trigger: { player: 'damageEnd' },
                                    check(event, player) {
                                        return player.isTurnedOver();
                                    },
                                    filter(event, player) {
                                        if (
                                            player.hasHistory('useCard', (evt) => {
                                                if (evt.card.name != 'jiu' || evt.parent.name != 'yejiushi_use') return false;
                                                return evt.getParent('damage', true) == event;
                                            })
                                        )
                                            return false;
                                        return player.isTurnedOver();
                                    },
                                    prompt(event, player) {
                                        return '是否发动【酒诗】,将武将牌翻面？';
                                    },
                                    content() {
                                        player.turnOver();
                                    },
                                },
                                gain: {
                                    audio: 'yejiushi',
                                    persevereSkill: true,
                                    trigger: { player: 'turnOverAfter' },
                                    forced: true,
                                    prompt: '是否发动【酒诗】,获得牌堆中的一张牌？',
                                    content() {
                                        var card = get.cardPile2(function (card) {
                                            return true;
                                        });
                                        if (card) player.gain(card, 'draw');
                                    },
                                },
                            },
                        },
                        ye_qingzheng: {
                            audio: 'ext:寰宇兴衰/audio:2',
                            persevereSkill: true,
                            trigger: { player: 'phaseUseBegin' },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            forced: true,
                            async content(event, trigger, player) {
                                await Promise.all(event.next);
                                event.videoId = lib.status.videoId++;
                                if (player.isUnderControl()) game.swapPlayerAuto(player);
                                function chooseOneSuitCard(player, target, force = false, limit, str = '请选择一个花色的牌', ai = { bool: false }) {
                                    const { promise, resolve } = Promise.withResolvers();
                                    const event = _status.event;
                                    event.selectedCards = [];
                                    event.selectedButtons = [];
                                    let suitCards = Object.groupBy(target.getCards('h'), (c) => c.suit);
                                    suitCards.heart ??= [];
                                    suitCards.diamond ??= [];
                                    suitCards.spade ??= [];
                                    suitCards.club ??= [];
                                    let dialog = (event.dialog = ui.create.dialog());
                                    dialog.classList.add('fullheight');
                                    event.control_ok = ui.create.control('ok', (link) => {
                                        _status.imchoosing = false;
                                        event.dialog.close();
                                        event.control_ok?.close();
                                        event.control_cancel?.close();
                                        event._result = {
                                            bool: true,
                                            cards: event.selectedCards,
                                        };
                                        resolve(event._result);
                                        game.resume();
                                    });
                                    event.control_ok.classList.add('disabled');
                                    if (!force) {
                                        event.control_cancel = ui.create.control('cancel', (link) => {
                                            _status.imchoosing = false;
                                            event.dialog.close();
                                            event.control_ok?.close();
                                            event.control_cancel?.close();
                                            event._result = {
                                                bool: false,
                                            };
                                            resolve(event._result);
                                            game.resume();
                                        });
                                    }
                                    event.switchToAuto = function () {
                                        _status.imchoosing = false;
                                        event.dialog?.close();
                                        event.control_ok?.close();
                                        event.control_cancel?.close();
                                        event._result = ai;
                                        resolve(event._result);
                                        game.resume();
                                    };
                                    dialog.addNewRow(str);
                                    let keys = Object.keys(suitCards).sort((a, b) => {
                                        let arr = ['spade', 'heart', 'club', 'diamond', 'none'];
                                        return arr.indexOf(a) - arr.indexOf(b);
                                    });
                                    while (keys.length) {
                                        let key1 = keys.shift();
                                        let cards1 = suitCards[key1];
                                        let key2 = keys.shift();
                                        let cards2 = suitCards[key2];
                                        const clickItemContainer = function (container, item, allContainer) {
                                            if (!item?.length || item.some((card) => !lib.filter.cardDiscardable(card, player, event.name))) return;
                                            if (event.selectedButtons.includes(container)) {
                                                container.classList.remove('selected');
                                                event.selectedButtons.remove(container);
                                                event.selectedCards.removeArray(item);
                                            } else {
                                                if (event.selectedButtons.length >= limit) {
                                                    let precontainer = event.selectedButtons[0];
                                                    precontainer.classList.remove('selected');
                                                    event.selectedButtons.remove(precontainer);
                                                    let suit = event.selectedCards[0].suit,
                                                        cards = target.getCards('h', { suit: suit });
                                                    event.selectedCards.removeArray(cards);
                                                }
                                                container.classList.add('selected');
                                                event.selectedButtons.add(container);
                                                event.selectedCards.addArray(item);
                                            }
                                            event.control_ok.classList[event.selectedButtons.length === limit ? 'remove' : 'add']('disabled');
                                        };
                                        function createCustom(suit, count) {
                                            return function (itemContainer) {
                                                function formatStr(str) {
                                                    return str.replace(/[♥️️️︎♦️️️︎]/g, '<span style="color: red; ">$&</span>');
                                                }
                                                let div = ui.create.div(itemContainer);
                                                if (count) {
                                                    div.innerHTML = formatStr(`${get.translation(suit)}牌${count}张`);
                                                } else {
                                                    div.innerHTML = formatStr(`没有${get.translation(suit)}牌`);
                                                }
                                                div.css({
                                                    position: 'absolute',
                                                    width: '100%',
                                                    bottom: '1%',
                                                    height: '35%',
                                                    background: '#352929bf',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    fontSize: '1.2em',
                                                    zIndex: '2',
                                                });
                                            };
                                        }
                                        let itemContainerCss = {
                                            border: 'solid #c6b3b3 2px',
                                            minHeight: '100px',
                                        };
                                        if (key2) {
                                            dialog.addNewRow(
                                                {
                                                    item: cards1,
                                                    ItemNoclick: true,
                                                    clickItemContainer,
                                                    custom: createCustom(key1, cards1.length),
                                                    itemContainerCss,
                                                },
                                                {
                                                    item: cards2,
                                                    ItemNoclick: true,
                                                    clickItemContainer,
                                                    custom: createCustom(key2, cards2.length),
                                                    itemContainerCss,
                                                }
                                            );
                                        } else {
                                            dialog.addNewRow({
                                                item: cards1,
                                                ItemNoclick: true,
                                                clickItemContainer,
                                                custom: createCustom(key1, cards1.length),
                                                itemContainerCss,
                                            });
                                        }
                                    }
                                    game.pause();
                                    dialog.open();
                                    _status.imchoosing = true;
                                    return promise;
                                }
                                let limit = 1;
                                let next,
                                    str = get.prompt(event.name) + '(弃置' + get.cnNumber(limit) + '种花色的所有牌)<div class="text center">' + lib.translate[event.name + '_info'] + '</div>';
                                let ai = function () {
                                    let suits = lib.suits.slice().filter((suit) => {
                                        let cards = player.getCards('h', { suit: suit });
                                        if (!cards.length || cards.filter((card) => lib.filter.cardDiscardable(card, player, event.name)).length !== cards.length) return false;
                                        return 15 - cards.map((i) => get.value(i)).reduce((p, c) => p + c, 0) > 0;
                                    });
                                    if (suits.length < limit) return { bool: false };
                                    suits.sort((a, b) => {
                                        return (
                                            player
                                                .getCards('h', { suit: a })
                                                .map((i) => get.value(i))
                                                .reduce((p, c) => p + c, 0) -
                                            player
                                                .getCards('h', { suit: b })
                                                .map((i) => get.value(i))
                                                .reduce((p, c) => p + c, 0)
                                        );
                                    });
                                    return { bool: true, cards: suits.slice(0, limit).reduce((list, suit) => list.addArray(player.getCards('h', { suit: suit })), []) };
                                };
                                if (event.isMine()) {
                                    next = chooseOneSuitCard(player, player, null, limit, str, ai);
                                } else if (player.isOnline()) {
                                    let { promise, resolve } = Promise.withResolvers();
                                    player.send(chooseOneSuitCard, player, player, null, limit, str, ai);
                                    player.wait((result) => {
                                        if (result == 'ai') result = ai();
                                        resolve(result);
                                    });
                                    next = promise;
                                } else next = Promise.resolve(ai());
                                let result1 = await next;
                                if (!result1.bool) return;
                                let cards1 = result1.cards;
                                let result2 = await player
                                    .chooseTarget('清正:观看一名其他角色的手牌并弃置其中一种花色的所有牌', (card, player, target) => {
                                        return target != player && target.countCards('h');
                                    })
                                    .set('ai', (target) => {
                                        var player = _status.event.player,
                                            att = get.attitude(player, target);
                                        if (att >= 0) return 0;
                                        return 1 - att / 2 + Math.sqrt(target.countCards('h'));
                                    })
                                    .forResult();
                                if (!result2.bool) return;
                                let target = result2.targets[0];
                                await player.discard(cards1);
                                let next2,
                                    str2 = `清正:弃置${get.translation(target)}一种花色的所有牌`;
                                let ai2 = function () {
                                    let list = lib.suits.slice().filter((i) => target.hasCard({ suit: i }, 'h'));
                                    let getv = (cards) => cards.map((i) => get.value(i)).reduce((p, c) => p + c, 0);
                                    return {
                                        bool: true,
                                        cards: target.getCards('h', {
                                            suit: list.sort((a, b) => {
                                                return getv(target.getCards('h', { suit: b })) - getv(target.getCards('h', { suit: a }));
                                            })[0],
                                        }),
                                    };
                                };
                                if (event.isMine()) {
                                    next2 = chooseOneSuitCard(player, target, true, 1, str2, ai2);
                                } else if (player.isOnline()) {
                                    let { promise, resolve } = Promise.withResolvers();
                                    player.send(chooseOneSuitCard, player, target, true, 1, str2, ai2);
                                    player.wait((result) => {
                                        if (result == 'ai') result = ai2();
                                        resolve(result);
                                    });
                                    next2 = promise;
                                } else next2 = Promise.resolve(ai2());
                                let result3 = await next2;
                                let cards2 = result3.cards.slice().filter((card) => lib.filter.canBeDiscarded(card, player, target));
                                if (cards2.length) await target.discard(cards2, 'notBySelf');
                                if (cards1.length > cards2.length) await target.damage(player);
                            },
                        },
                        yeqianlong: {
                            audio: 'ext:寰宇兴衰/audio:6',
                            persevereSkill: true,
                            trigger: {
                                player: ['yeqianlong_beginAfter', 'yeqianlong_addAfter', 'yeweitongAfter'],
                            },
                            filter(event, player) {
                                let skills = [];
                                let current = player.additionalSkills?.yeqianlong?.length ?? 0;
                                let target = player.countMark('yeqianlong') == lib.skill.yeqianlong.maxMarkCount ? lib.skill.yeqianlong.derivation.length : Math.floor(player.countMark('yeqianlong') / 25);
                                return target > current;
                            },
                            forced: true,
                            popup: false,
                            beginMarkCount: 20,
                            maxMarkCount: 99,
                            derivation: ['ye_qingzheng', 'yejiushi', 'yefangzhu', 'yejuejin'],
                            addMark(player, num) {
                                num = Math.min(num, lib.skill.yeqianlong.maxMarkCount - player.countMark('yeqianlong'));
                                player.addMark('yeqianlong', num);
                            },
                            group: ['yeqianlong_begin', 'yeqianlong_add', 'yeqianlong_die'],
                            async content(event, trigger, player) {
                                const derivation = lib.skill.yeqianlong.derivation,
                                    skills = player.countMark('yeqianlong') == lib.skill.yeqianlong.maxMarkCount ? derivation : derivation.slice(0, Math.floor(player.countMark('yeqianlong') / 25));
                                player.addAdditionalSkill('yeqianlong', skills);
                            },
                            marktext: '道',
                            intro: {
                                name: '道心(潜龙)',
                                name2: '道心',
                                content: '当前道心数为#',
                            },
                            subSkill: {
                                begin: {
                                    audio: 'yeqianlong',
                                    persevereSkill: true,
                                    trigger: {
                                        global: 'phaseBefore',
                                        player: 'enterGame',
                                    },
                                    filter(event, player) {
                                        return event.name != 'phase' || game.phaseNumber == 0;
                                    },
                                    forced: true,
                                    async content(event, trigger, player) {
                                        const num = game.hasPlayer((current) => {
                                            return current !== player && current.group === 'wei' && player.hasZhuSkill('yeweitong', current);
                                        })
                                            ? 70
                                            : lib.skill.yeqianlong.beginMarkCount;
                                        lib.skill.yeqianlong.addMark(player, num);
                                    },
                                },
                                add: {
                                    audio: 'yeqianlong',
                                    persevereSkill: true,
                                    trigger: {
                                        player: ['gainAfter', 'damageEnd', 'recoverEnd'],
                                        source: 'damageSource',
                                        global: 'loseAsyncAfter',
                                    },
                                    filter(event, player) {
                                        if (player.countMark('yeqianlong') >= lib.skill.yeqianlong.maxMarkCount) return false;
                                        if (event.name === 'damage' || event.name === 'recover') return event.num > 0;
                                        return event.getg(player).length;
                                    },
                                    getIndex(event, player, triggername) {
                                        if (event.name === 'damage') return event.num;
                                        return 1;
                                    },
                                    forced: true,
                                    async content(event, trigger, player) {
                                        let toAdd = 5 * (1 + (trigger.name === 'gain') + (trigger.name === 'damage') + (trigger.name === 'damage') + (event.triggername === 'damageSource'));
                                        lib.skill.yeqianlong.addMark(player, toAdd);
                                    },
                                },
                                die: {
                                    trigger: {
                                        player: 'dieBefore',
                                    },
                                    audio: 'ext:寰宇兴衰/audio:1',
                                    charlotte: true,
                                    firstDo: true,
                                    forced: true,
                                    popup: false,
                                    forceDie: true,
                                    async content(event, trigger, player) {
                                        game.playAudio('../extension/寰宇兴衰/effect/audio/effect_caomao_dead.mp3');
                                    },
                                },
                            },
                        },
                        yeweitong: {
                            audio: 'ext:寰宇兴衰/audio:1',
                            persevereSkill: true,
                            zhuSkill: true,
                            trigger: {
                                player: 'yeqianlong_beginBegin',
                            },
                            forced: true,
                            content() { },
                            ai: {
                                combo: 'yeqianlong',
                            },
                        },
                        lztunjiang: {
                            audio: 'sptunjiang',
                            trigger: { global: 'phaseJieshuBegin' },
                            filter(event, player) {
                                return event.player.isIn() && !event.player.getStat('damage') && lib.skill.lztunjiang.filterx(event, player);
                            },
                            filterx(event, player) {
                                if (get.mode() == 'identity') return get.attitude(player, event.player) > 0;
                                return event.player.isFriendsOf(player);
                            },
                            filtery(event, player) {
                                if (get.mode() == 'identity') return get.attitude(player, event.player) < 0;
                                return event.player.isEnemiesOf(player);
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(function (card, player, target) {
                                        return target == player || target == _status.event.source;
                                    }, '屯江:请选择一个目标令其摸两张牌')
                                    .set('ai', function (target) {
                                        return 999 - target.countCards();
                                    })
                                    .set('source', trigger.player);
                                ('step 1');
                                if (result.targets.length) {
                                    result.targets[0].draw(2);
                                }
                            },
                        },
                        yezhenmou: {
                            group: ['mouzhu', 'spmouzhu', 'twmouzhu', 'jsrgzhaobing', 'jsrgzhuhuan', 'taixu_mouzhu', 'taixu_linglu', 'taixu_zhuosheng', 'taixu_mouqiang'],
                            audio: 'ext:寰宇兴衰/audio:true',
                            derivation: ['mouzhu', 'spmouzhu', 'twmouzhu', 'jsrgzhaobing', 'jsrgzhuhuan', 'taixu_mouzhu', 'taixu_zhuosheng', 'taixu_linglu', 'taixu_mouqiang'],
                            trigger: { global: 'useCard' },
                            filter(event, player) {
                                if (!lib.skill.lztunjiang.filtery(event, player) || !event.player.isPhaseUsing()) return false;
                                var evt = event.getParent('phaseUse');
                                var history = event.player.getHistory('useCard', function (evt2) {
                                    return evt2.getParent('phaseUse') == evt && get.type2(evt2.card) == 'trick';
                                }),
                                    num = history.indexOf(event);
                                return num != -1 && num < 3;
                            },
                            forced: true,
                            logTarget: 'player',
                            content() {
                                'step 0';
                                trigger.player
                                    .chooseToDiscard('he', 3, '镇谋:弃置三张非锦囊牌', function (card, player) {
                                        return get.type2(card) != 'trick';
                                    })
                                    .set('ai', (card) => lib.skill.zhiheng.check(card));
                                ('step 1');
                                if (!result.bool) {
                                    trigger.cancel();
                                    game.broadcastAll(ui.clear);
                                } else event.finish();
                                ('step 2');
                            },
                        },
                        yeguiluan: {
                            audio: 'ext:寰宇兴衰/audio:true',
                            trigger: { player: 'useCard' },
                            filter(event, player) {
                                if (!['sha', 'juedou', 'guohe', 'shunshou', 'zhujinqiyuan'].includes(event.card.name)) return false;
                                return game.hasPlayer(function (current) {
                                    return lib.skill.lztunjiang.filtery({ player: current }, player) && !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, player, current);
                                });
                            },
                            forced: true,
                            logTarget(event, player) {
                                return game.filterPlayer(function (current) {
                                    return lib.skill.lztunjiang.filtery({ player: current }, player) && !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, player, current);
                                });
                            },
                            content() {
                                trigger.targets.addArray(lib.skill.yeguiluan.logTarget(trigger, player));
                            },
                        },
                        yewaixi: {
                            audio: 'ext:寰宇兴衰/audio:true',
                            trigger: { source: 'damageSource' },
                            filter(event, player) {
                                return _status.currentPhase && _status.currentPhase == player;
                            },
                            forced: true,
                            usable: 4,
                            content() {
                                'step 0';
                                player.draw(4);
                                ('step 1');
                                var targets = game.filterPlayer((current) => current.countCards('h') < player.countCards('h') && lib.skill.lztunjiang.filtery({ player: current }, player));
                                if (targets.length) {
                                    for (var target of targets) player.gainPlayerCard(target, 'he', true);
                                }
                            },
                        },
                        yequanba: {
                            audio: 'ext:寰宇兴衰/audio:true',
                            trigger: { global: 'useCardToPlayered' },
                            filter(event, player) {
                                if (!lib.skill.lztunjiang.filtery(event, player) || !_status.currentPhase || _status.currentPhase != event.player) return false;
                                return event.isFirstTarget && event.player.getHistory('useCard', (evt) => evt.card.name == 'sha' || (get.type(evt.card) == 'trick' && get.tag(evt.card, 'damage'))).length >= 2;
                            },
                            forced: true,
                            logTarget: 'player',
                            content() {
                                trigger.player.loseHp();
                            },
                        },
                    },
                    translate: {
                        wolonggongfang: '卧龙工坊',
                        nuyanban: '怒焰版',
                        hy_caocao: '魔曹操',
                        huanyuxingshuai: '寰宇兴衰',
                        bossmogai: 'BOSS魔改',
                        hy_yidong: '移动版',
                        guanfangboss: '官方BOSS',
                        guanjiangtiaozheng: '官将调整',
                        hy_mo_lvbu: '魔吕布',
                        hy_mo_zhugeliang: '魔诸葛亮',
                        hy_mo_zhouyu: '魔周瑜',
                        ceshi_lv: '律',
                        kaaosi: '卡奥斯',
                        hy_ny_caomao: '曹髦',
                        hy_caorui: '曹叡',
                        ye_simazhao: '司马昭',
                        hy_xuannv: '玄女',
                        yexuannv: '玄女',
                        ye_lihuofutu: '戾火浮屠',
                        ye_lihuofutux: '戾火浮屠',
                        yeli: '黍',
                        teleixiya: '特蕾西娅',
                        yewolong: '魔卧龙诸葛',
                        yehejin: '何进',
                        yehetaihou: '何太后',
                        hy_shen_caocao: '神曹操',
                        yecaomao: '曹髦',
                        xshen_guizang: '归藏',
                        yeshen_simayi: '神司马懿',
                        hy_yingzheng: '嬴政',
                        yezhenmou: '镇谋',
                        yezhenmou_info: '锁定技.①敌方角色于其出牌阶段使用前三张锦囊牌时,其需弃置三张非锦囊牌,否则此牌无效.②你视为拥有同名武将除【延祸】外的所有技能',
                        yeguiluan: '贵乱',
                        yeguiluan_info: '锁定技,当你使用【杀】、【决斗】、【过河拆桥】、【顺手牵羊】和【逐近弃远】时,若场上有未成为目标的敌方角色,你令这些角色也成为此牌目标',
                        yewaixi: '外檄',
                        yewaixi_info: '锁定技,每回合限四次,你的回合内,当你造成伤害后,你摸四张牌,然后依次获得所有手牌数小于你的敌方角色的各一张牌',
                        yequanba: '权霸',
                        yequanba_info: '锁定技,敌方角色于其回合内使用牌指定目标后,若其本回合使用【杀】和伤害类锦囊牌的次数不小于2,其失去1点体力',
                        yeqianlong: '潜龙',
                        yeqianlong_info: '持恒技,①游戏开始时,你获得20枚<道心>值.②当你回复体力/得到牌/受到1点伤害/造成1点伤害后,你获得5/10/15/20枚<道心>值(上限为99枚).③若你的<道心>值不小于25/50/75/99,你视为拥有【清正】/【酒诗】/【放逐】/【决进】',
                        yeweitong: '卫统',
                        yeweitong_info: '持恒技,主公技,游戏开始时,若你有【潜龙】且场上有其他魏势力角色,你因【潜龙】于游戏开始时获得的<道心>值修改为70枚',
                        ye_qingzheng: '清正',
                        ye_qingzheng_info: '持恒技,出牌阶段开始时,你可以弃置一种花色的所有手牌,并观看一名有手牌的其他角色的手牌,你弃置其中一种花色的所有牌.若被弃置的牌数小于你以此法弃置的牌数,你对其造成1点伤害',
                        yejiushi: '酒诗',
                        yejiushi_info: '持恒技,①当你需要使用【酒】时,若你的武将牌正面向上,你可以翻面,视为使用一张【酒】.②当你受到伤害后,若你的武将牌于受到伤害时背面向上,则你翻回正面.③当你翻面后,你随机获得牌堆里的一张牌',
                        yefangzhu: '放逐',
                        yefangzhu_info: '持恒技,当你受到伤害后,你可以选择一项令一名其他角色执行:摸X张牌并将武将牌翻面,或弃置X张牌并失去1点体力(X为你已损失的体力值)',
                        yejuejin: '决进',
                        yejuejin_info: '持恒技,限定技,出牌阶段,你可以令所有角色依次将体力值调整至1并获得Y点护甲(Y为一名角色以此法变化的体力值且你以此法获得的护甲数额外+2).然后你将牌堆,弃牌堆,场上及所有角色区域内的【闪】、【桃】和【酒】移出游戏且增加如下<向死存魏>光环:当有【闪】、【桃】和【酒】进入弃牌堆后立即移出游戏',
                        gui_niyuan: '逆元',
                        gui_niyuan_info: '锁定技,转换技,每轮游戏开始时,你获得以下加成直到游戏结束:阳:你摸一张牌,本轮你造成的伤害+1;阴:你回复1点体力值,本轮你受到的伤害-1',
                        gui_jiaocuo: '交错',
                        gui_jiaocuo_info: '锁定技.①防止你受到首轮的所有伤害并摸等量的牌;②每有一名角色死亡时,你增加等同于其游戏开始时的体力上限,回复等同于其体力上限的体力值并摸等量的牌,之后【逆元】的各项属性+1',
                        gui_pozhen: '破阵',
                        gui_pozhen_info: '觉醒技.当你的手牌数等于当前轮次且拥有技能【逆元】时,你增加2点体力上限,将体力值回复至体力上限并重置【逆元】的各项属性,获得技能【万象】',
                        gui_wanxiang: '万象',
                        gui_wanxiang_info: '持恒技.全场其他角色的所有进阶属性失效直到你死亡或游戏结束',
                        gui_wanxiangx: '万象',
                        gui_wanxiangx_info: '持恒技.全场其他角色的所有进阶属性失效直到你死亡或游戏结束',
                        yelianyu: '炼狱',
                        yelianyu_info: '结束阶段,你可以对所有敌方角色造成1点火焰伤害',
                        yeleiji: '雷击',
                        yeleiji_info: '当你使用或打出一张【闪】时,你可令一名其他角色进行一次判定:若结果为♣️️️️,你回复1点体力,并对其造成1点雷电伤害;若结果为♠️️️️,你对其造成2点雷电伤害',
                        yemozun: '魔尊',
                        yemozun_info: '锁定技,准备阶段,你从牌堆,弃牌堆,所有角色区域内随机获得不同牌名的所有基本牌和锦囊牌各一张;结束阶段,你将以此法获得的牌置入弃牌堆',
                        yexieyu: '邪域',
                        yexieyu_info: '转换技,锁定技,每轮开始时,技能状态随机转换为阳或阴.阳:所有角色受到的火焰伤害+1,防止你受到的火焰伤害以外的伤害;阴:所有角色受到的雷电伤害+1,防止你受到的雷电伤害以外的伤害',
                        ka_ji: '寂灭',
                        ka_ji_info: '持恒技,当你使用伤害牌时,你选择一项:1.将手牌摸至当前体力值;2.令此伤害牌额外结算一次',
                        ka_chenji: '沉寂',
                        ka_chenji_info: '持恒技.①其他角色只有濒死时才能使用回复类实体基本牌.②你每损失3点体力值则你造成的伤害+1(至多+2).③当你受到伤害时若你没有护甲且已受伤则你减少一点体力上限防止此伤害(觉醒后生效)',
                        ka_yingshe: '映射',
                        ka_yingshe_info: '冷却技(体力值低于6可发动,每两回合限一次),当有角色使用伤害类牌指定你为目标时你令此牌无效.当你受到伤害后,若此伤害为当前回合第一次受到伤害则你获得等量护甲并回复等量体力值',
                        ka_shenshi: '神蚀',
                        ka_shenshi_info: '觉醒技,准备阶段开始时若体力值<3或即将死亡时取消之并将体力回复至3并开启终幕哀乐光环(移除牌堆,弃牌堆和场上中描述带<回复>的牌和【闪】且当有【闪】和<回复>类卡牌进入弃牌堆时移除之),全场其他角色的体力值调整至1并获得调整体力数的护甲(其他角色获得护甲上限为5,自身额外获得3点护甲)',
                        ceshi_moran: '墨染',
                        ceshi_moran_info: '持恒技,当你使用牌时你选择一项:①将手牌补至体力上限.②令此牌额外结算一次',
                        ceshi_huisu: '回溯',
                        ceshi_huisu_info: '持恒技,①你的体力上限不会因任何技能效果减少.②每回合结束时若自身在该回合内未进入过一次濒死状态,则将体力值回复至体力上限并摸等量的牌.③当你未进入濒死状态而即将死亡时取消之并将体力值回复至1',
                        ceshi_jielv: '戒律',
                        ceshi_jielv_info: '持恒技,①当你造成伤害后,该角色获得一枚<戒律>印记.②当该角色在下次受到你造成的伤害后移去一枚<戒律>印记令其失去X点体力值(X为造成伤害值)',
                        yewu_zhugeliang: '武诸葛亮',
                        yewu_zhugeliang_prefix: '武',
                        yeqingshi: '情势',
                        yeqingshi_info: '当你于出牌阶段使用牌时,若你手牌中有同名牌,你可以选择一项:1.令此牌对其中一个目标角色造成的伤害+1;2.令任意名角色各摸一张牌;3.摸X张牌,然后〖情势〗于本回合无效(X为你的体力值)',
                        yezhizhe: '智哲',
                        yezhizhe_clear: ' ',
                        yezhizhe_info: '限定技.出牌阶段,你可以选择一张手牌并复制之.此牌不计入你的手牌上限.当你使用或打出此复制牌结算结束后,你获得之,然后你本回合不能再使用或打出此牌',
                        yecaopi: '谋曹丕',
                        yecaopi_prefix: '谋',
                        yexingshang: '行殇',
                        yexingshang_info: '①当一名角色受到伤害后(每回合限两次)或死亡时,你获得2个<颂>标记(你至多拥有9个<颂>标记).②出牌阶段限两次,你可以:1.移去2个<颂>标记,令一名角色复原武将牌;2.移去2个<颂>标记,令一名角色摸3张牌;3.移去3个<颂>标记,令一名体力上限小于10的角色回复1点体力,增加1点体力上限,选择回复一个已废除的装备栏;4.移去4个<颂>标记,获得一名阵亡角色武将牌上的除主公技外的所有技能,然后你失去〖行殇〗〖放逐〗〖颂威〗',
                        yesbfangzhu: '放逐',
                        yesbfangzhu_info: '出牌阶段限一次,你可以:1.移去1个<颂>标记,令一名其他角色于手牌中只能使用基本牌直到其回合结束;2.移去2个<颂>标记,令一名其他角色于手牌中只能使用锦囊牌直到其回合结束.3.移去3个<颂>标记,令一名其他角色于手牌中只能使用装备牌直到其回合结束;4.移去2个<颂>标记,令一名其他角色的非Charlotte技能失效直到其回合结束;5.移去2个<颂>标记,令一名其他角色不能响应除其以外的角色使用的牌直到其回合结束;6.移去3个<颂>标记,令一名其他角色将武将牌翻面;',
                        yesongwei: '颂威',
                        yesongwei_info: '主公技.①出牌阶段开始时,你获得Y个<颂>标记(Y为场上其他魏势力角色数的两倍).②限定技,每局游戏限一次,出牌阶段,你可以令一名其他角色将势力更改为魏并失去所有其武将牌上的技能',
                        minizhendu: '鸩毒',
                        minizhendu2: '鸩毒',
                        minizhendu_info: '一名角色的出牌阶段开始时,你可以弃置一张牌,令该角色视为使用一张【酒】;若该角色不是你,你对其造成1点伤害,且本回合其计算与他人的距离时+1.',
                        miniqiluan: '戚乱',
                        miniqiluan_info: '①一名角色进入濒死状态时,你可以摸一张牌.②当你击杀一名角色后,你摸两张牌.',
                        yezunqin: '尊亲',
                        yezunqin_info: '锁定技,①每回合限四次,以你为目标的锦囊牌进入弃牌堆后,你获得之.②你视为拥有同名武将的所有技能',
                        yechuhuan: '除患',
                        yechuhuan_info: '锁定技,①你使用【杀】指定目标后,该目标失去1点体力.②其他角色使用伤害类锦囊牌或【杀】指定你为目标后,使用者失去1点体力',
                        yenongquan: '弄权',
                        yenongquan_info: '锁定技,当你受到伤害后,你对任意名敌方角色造成X点伤害,然后你随机弃置其三张牌【X为其体力上限】',
                        yeshexie: '蛇蝎',
                        yeshexie_info: '锁定技,一名角色进入濒死状态后,你选择一项:1.随机获得其三张牌并令其获得等量的【毒】;2.摸三张牌',
                        yejiahe: '嘉禾',
                        yejiahe_info: '持恒技,①游戏开始时你摸12张牌,然后选择4张手牌作为起始手牌,其余的牌置于你的武将牌上,称为<禾>.②摸牌阶段结束时,你可以用任意张手牌交换等量的<禾>.③弃牌阶段开始时,你可以将任意张牌置入<禾>.④你的手牌上限+X(X为你的<禾>数)',
                        yekurong: '枯荣',
                        yekurong_info: '持恒技,结束阶段开始时,你可以弃置任意张<禾>并选择等量角色,这些角色受到的伤害和失去的体力值+1',
                        yefengrao: '丰饶',
                        yefengrao_info: '持恒技,结束阶段开始时,你可以弃置任意张<禾>并选择等量角色,防止这些角色受到的所有伤害直到你的下个回合开始,且其回合结束时回复1~3点体力',
                        yechangqing: '长青',
                        yechangqing_info: '持恒技,一名角色触发【枯荣】或【丰饶】的效果时,你摸一张牌;若触发的对象为你,你摸三张牌',
                        yerenjie: '忍戒',
                        yerenjie_info: '锁定技,①每有一张牌未因使用而进入弃牌堆或当你未响应牌时,你获得等量的<忍>标记(每回合至多获得4个).②当你受到伤害时,你获得等量的<忍>标记(该效果觉醒后生效).③你的手牌上限+X【X为你的<忍>标记数量】',
                        yebaiyin: '拜印',
                        yebaiyin_info: '觉醒技,准备阶段开始时,若你的<忍>标记数量不小于4,你减1点体力上限,然后获得【极略】',
                        yelianpo: '连破',
                        yelianpo_info: '一名角色的回合结束时,若你本回合内击杀过角色,则你可以选择一项:①永久获得【极略】中的其中至多三项技能并取消<忍>标记消耗限制.②进行一个额外的回合且于准备阶段开始时摸三张牌或增加1点体力上限.③背水,弃置所有<忍>标记',
                        yejilve: '极略',
                        yejilve_info: '①当一名角色的判定牌生效之前,你可以弃1枚<忍>标记并发动【鬼才】.②每当你受到伤害后,你可以弃1枚<忍>标记并发动【放逐】.③出牌阶段限一次,你可以弃1枚<忍>标记,本回合你视为拥有【制衡】、【完杀】.④每轮限一次,每轮开始时你可以弃1枚<忍>标记,本轮你视为拥有【集智】',
                        yguicai: '鬼才',
                        yguicai_info: '在任意角色的判定牌生效前,你可以打出一张牌代替之',
                        yzhiheng: '制衡',
                        yzhiheng_info: '出牌阶段限一次,你可以弃置任意张牌并摸等量的牌,若你在发动〖制衡〗时弃置了所有手牌,则你多摸一张牌',
                        yjizhi: '集智',
                        yjizhi_info: '当你使用非转化的普通锦囊牌时,你可以摸一张牌',
                        yfangzhu: '放逐',
                        yfangzhu_info: '当你受到伤害后,你可以选择一项令一名其他角色执行:摸X张牌并将武将牌翻面,或弃置X张牌并失去1点体力(X为你已损失的体力值)',
                        ywansha: '完杀',
                        ywansha_info: '锁定技.①你的回合内,不处于濒死状态的其他角色不能使用【桃】.②当有角色于你的回合内进入濒死状态时,你令其以外的所有其他角色的非锁定技失效直到此濒死状态结算结束',
                        yechenai: '尘埃',
                        yechenai_info: "<span style='color: #ff00ff'>永恒技</span>,①当有角色体力值,体力上限值和区域牌数发生变化时,你获得等量<微尘>.②当自身体力上限减少时防止之,受到的伤害与失去的体力值锁定为1且不能成为判定和拼点目标.",
                        yejinzhi: '禁制',
                        yejinzhi_info: "<span style='color: #ff00ff'>永恒技</span>,一名角色令你受到伤害或失去体力值时,你可以令其获得<束缚>状态直到你的回合结束.",
                        yehuixiang: '回响',
                        yehuixiang_info: "<span style='color: #ff00ff'>永恒技</span>,①自身未进入濒死状态而即将死亡时取消之.②每轮限存活人数次,当有角色进入濒死状态时,你可以弃置体力上限枚<微尘>将体力值回复至上限值.",
                        yebianzhi: '编织',
                        yebianzhi_info: "<span style='color: #ff00ff'>永恒技</span>,每回合结束时,若你未进入过濒死状态,则你可以令一名角色将体力值回复至体力上限值.",
                        ye_xiezheng: '挟征',
                        ye_xiezheng_info: '结束阶段,你可令至多三名角色依次将一张手牌置于牌堆顶,然后视为你使用一张【兵临城下】;此牌结算后若未造成伤害,你选择一项:失去1点体力摸三张牌或弃置一张牌回复1点体力',
                        ye_qiantun: '谦吞',
                        ye_qiantun_tag: 'invisible',
                        hy_qiantun_tag: 'invisible',
                        ye_qiantun_info: '出牌阶段限一次,你可以令一名其他角色展示至少一张手牌,然后与其拼点,其本次拼点只能从展示牌中选择.若你赢,你获得其展示的手牌;若你没赢,你获得其未展示的手牌,然后你展示手牌.拼点时你可令此牌点数+X或-X【X为你的体力上限】',
                        ye_zhaoxiong: '昭凶',
                        ye_zhaoxiong_info: '持恒技,限定技,准备阶段,若你已受伤,你可以变更势力为晋,失去【谦吞】并获得【威肆】和【荡异】',
                        ye_weisi: '威肆',
                        ye_weisi_info: '出牌阶段限一次,你可以选择一名其他角色,令其将任意张手牌移出游戏直到回合结束,然后视为对其使用一张【决斗】;此牌对其造成伤害后,你获得其所有手牌,否则你摸被移出游戏的牌数的牌',
                        ye_dangyi: '荡异',
                        ye_dangyi_info: '持恒技,你造成伤害时可以令此伤害+1',
                        ye_xiuluozhinu: '修罗之怒',
                        ye_xiuluo: '修罗',
                        ye_xiuluo_info: '锁定技,游戏开始时,你随机获得下列技能中的一个:【神剑】、【烈杵】、【伏魔】、【金刚】.当你体力值首次降至三分之二及以下后,再随机获得上述四个技能中的一个,并进行一个额外的回合.当你体力值首次降至三分之一及以下后,获得【狂戟】,并在当前结算完毕后,立即进行一个额外回合',
                        ye_shenjian: '神剑',
                        ye_shenjian_info: '锁定技,你的【杀】和【决斗】指定目标后,对其造成1点伤害',
                        hy_shenjian: '神剑',
                        hy_shenjian_info: '锁定技,你的【杀】和【决斗】指定目标后,对其造成2点伤害',
                        ye_liezhu: '烈杵',
                        ye_liezhu_info: '锁定技,你每回合使用的第一张【杀】和第一张【决斗】造成伤害后,获得牌堆顶五张牌中的所有装备牌和基本牌',
                        hy_liezhu: '烈杵',
                        hy_liezhu_info: '锁定技,你每回合使用的第一张【杀】和第一张【决斗】造成伤害后,获得牌堆顶十张牌中的所有装备牌和基本牌',
                        ye_fumo: '伏魔',
                        ye_fumo_info: '锁定技,当你在回合外失去装备区里的牌后,随机弃置每名敌方角色两张牌,优先弃置装备区里的牌',
                        hy_fumo: '伏魔',
                        hy_fumo_info: '锁定技,当你失去装备区里的牌后,随机弃置每名敌方角色三张牌,优先弃置装备区里的牌',
                        ye_jingang: '金刚',
                        ye_jingang_info: '锁定技,当你受到其他角色造成的伤害后,伤害来源选择交给你一张牌或受到1点伤害.伤害来源选择交给你牌时,每回合每种花色的牌限一次',
                        hy_jingang: '金刚',
                        hy_jingang_info: '锁定技,当你受到其他角色造成的一点伤害后,伤害来源选择交给你一张牌或受到1点伤害.伤害来源选择交给你牌时,每回合每种花色的牌限一次',
                        ye_kuangji: '狂戟',
                        ye_kuangji_info: '摸牌阶段,你可以弃置所有手牌,然后将手牌数摸至十张.你使用【杀】的次数+1,你的【杀】和【决斗】可以多指定两个目标.当你使用【杀】和【决斗】对敌方角色造成伤害后,随机弃置其一张手牌',
                        ye_wushuang: '无双',
                        ye_wushuang_info: '锁定技,当你使用【杀】或【决斗】指定目标后,你令此牌需要依次使用或打出两张【闪】或【杀】响应',
                        hy_simazhao: '牢司马昭',
                        hy_simazhao_prefix: '牢',
                        hy_xiezheng: '挟征',
                        hy_xiezheng_info: '结束阶段,你可以令一名角色将随机一张手牌置于牌堆顶,然后你视为使用一张【兵临城下】,结算后若未造成过伤害,你失去1点体力',
                        hy_qiantun: '谦吞',
                        hy_qiantun_info: '出牌阶段限一次,你可以令一名其他角色展示至少一张手牌,然后你与其拼点,其本次拼点牌只能从展示牌中选择,若你:赢,你获得其展示的手牌;没赢,你获得其未展示的手牌.最后你展示手牌',
                        hy_zhaoxiong: '昭凶',
                        hy_zhaoxiong_info: '持恒技,限定技,准备阶段,若你已受伤,你可以变更势力至晋,失去<谦吞>,然后获得<威肆>和<荡异>',
                        hy_weisi: '威肆',
                        hy_weisi_info: '出牌阶段限一次,你可以令一名其他角色将任意张手牌移出游戏直到回合结束,然后视为对其使用一张【决斗】,此牌对其造成伤害后,你获得其所有手牌',
                        hy_dangyi: '荡异',
                        hy_dangyi_info: '持恒技,主公技,每局限两次,每回合限一次,当你造成伤害时,你可以令此伤害+1',
                        hy_shouhun: '兽魂',
                        hy_shouhun_info: '锁定技,游戏开始时,你随机获得一个兽魂.回合开始时,你随机获得一个兽魂,然后你可以更换兽魂',
                        hy_mowei: '魔威',
                        hy_mowei_info: '锁定技,每个回合结束时,若你本回合获得过手牌,你对一名其他角色造成X点伤害.(X为你拥有的可更换兽魂数)',
                        hy_longhui: '龙慧',
                        hy_longhui_info: '【青龙之魂】:锁定技,准备阶段,你从牌堆或弃牌堆中随机获得三张锦囊牌',
                        hy_longlin: '龙鳞',
                        hy_longlin_info: '【青龙之魂】:锁定技,当你受到伤害类锦囊造成的伤害时,防止该伤害;你使用锦囊牌造成伤害时,伤害+1',
                        hy_huwei: '虎威',
                        hy_huwei_info: '【白虎之魂】:锁定技,准备阶段,你从牌堆或弃牌堆中随机三张【杀】',
                        hy_tianxiao: '天啸',
                        hy_tianxiao_info: '【白虎之魂】:锁定技,你使用【杀】没有距离及次数限制且指定所有敌方角色为目标',
                        hy_zhuyu: '朱羽',
                        hy_zhuyu_info: '【朱雀之魂】:锁定技,准备阶段,你从牌堆或弃牌堆中获得四张不同花色的牌',
                        hy_fenhuo: '焚火',
                        hy_fenhuo_info: '【朱雀之魂】:出牌阶段每种花色限一次,你可以弃置一张牌,对至多两名敌方角色造成1点火焰伤害',
                        hy_xuankai: '玄铠',
                        hy_xuankai_info: '【玄武之魂】:锁定技,准备阶段,你从牌堆或弃牌堆中获得三张【闪】、【桃】或【酒】',
                        hy_lingqu: '灵躯',
                        hy_lingqu_info: '【玄武之魂】:锁定技,当你受到伤害后,你摸一张牌且手牌上限+1,然后本回合防止你受到的大于1点的伤害',
                        hy_lingsha: '灵煞',
                        hy_lingsha_info: '当你造成或受到伤害后,若是由【杀】或【决斗】造成的伤害,你可以对一名其他角色造成1点伤害',
                        hy_hanzhan: '酣战',
                        hy_hanzhan_info: '锁定技,每个回合结束时,若本回合有至少两名角色受到过伤害,你视为对当前回合角色使用一张【杀】或【决斗】(若当前回合角色是你则改为你视为依次对任意名其他角色使用一张【杀】或【决斗】)',
                        hy_tianlei: '天雷',
                        hy_tianlei_info: '其他角色的准备阶段,你可以弃置一张手牌,令其进行判定,若结果的点数或花色与你弃置的牌相同,你对其造成1点雷电伤害,若均相同,此雷电伤害+2,若均不同则你获得判定牌',
                        hy_dihuo: '地火',
                        hy_dihuo_info: '出牌阶段限一次,你可以展示牌堆底的一张牌并获得之,然后视为依次对至多X名角色使用一张【火攻】(X为你以此法获得的牌名称字数),每少选一个目标,此【火攻】的伤害+1',
                        hy_zhanxing: '占星',
                        hy_zhanxing_info: '锁定技,每个回合结束时,若有角色于本回合受到属性伤害,你展示牌堆顶的牌,猜测牌堆顶的下一张牌点数大于或小于此牌,然后展示之,若猜对则你获得这两张牌并回复1点体力,否则你将这两张牌以任意顺序置于牌堆顶或牌堆底',
                        hy_liaoyuan: '燎原',
                        hy_liaoyuan_info: '锁定技,其他角色受到火焰伤害后,你令其获得1个<星火>标记.每轮结束时,每名有<星火>标记的角色依次进行X次判定(X为其拥有的<星火>标记数),若结果为:红色,其失去1点体力;黑色,其随机弃置一张牌,然后若游戏轮次为偶数,你移去所有角色的<星火>标记',
                        hy_luojin: '落烬',
                        hy_luojin_info: '出牌阶段限一次,你可以弃置一名有<星火>标记的角色的两张牌',
                        hy_yinyan: '音焰',
                        hy_yinyan_info: '锁定技,每个回合结束时,若本回合有至少两张牌不因使用或打出而进入弃牌堆,你依次选择至多三名角色,第一名角色受到你造成的火焰伤害,第二名角色回复1点体力(若其未受伤则改为摸一张牌),第三名角色失去1点体力',
                        hy_dishi: '帝师',
                        hy_dishi_info: '当有角色使用【杀】或普通锦囊牌指定目标时,如果目标数为1,你可以为其增加一个目标;如果目标数大于1,你可以为其减少一个目标',
                        hy_jiutian: '九天',
                        hy_jiutian_info: '锁定技,准备阶段,若敌方角色有超过两种不同花色的手牌,则你获得其一张手牌.若你以此法获得的所有牌花色均不同,则对所有你以此法获得其牌的敌方角色造成1点伤害',
                        hy_xuanlie: '玄烈',
                        hy_xuanlie_info: '锁定技,回合结束时,对所有本回合你获得过其牌的敌方角色依次造成1点伤害',
                        hy_shenqu: '神躯',
                        hy_shenqu_info: '锁定技,当你受到1点伤害后,使用牌堆底的牌进行判定:若结果为红色,你摸一张牌,伤害来源弃置一张牌',
                        yejiutian: '九天',
                        yejiutian_info: '锁定技,准备阶段,你获得所有敌方角色各两张手牌.若你以此法获得的牌包含两种颜色,则对所有你以此法获得其牌的敌方角色造成2点伤害.若这些牌里每有一种花色,这些角色再额外失去1点体力',
                        yexuanlie: '玄烈',
                        yexuanlie_info: '锁定技,每回合结束时,令所有本回合你获得过其牌的敌方角色依次失去X点体力(X为你于该回合内所获得其的牌数)',
                        yeshenqu: '神躯',
                        yeshenqu_info: '锁定技,当你受到1点伤害后,你获得牌堆底的一张牌.若此牌为红色,你摸一张牌,伤害来源随机弃置一张牌.然后你使用牌堆底的牌进行判定:若结果为红色,你摸一张牌,否则伤害来源弃置一张牌',
                        ye_baguan: '霸关',
                        ye_baguan_info: '锁定技,其他角色的回合结束后,你进行一个额外的回合.此额外回合的摸牌阶段,你视为拥有技能【英姿】',
                        ye_zhanjia: '战甲',
                        ye_zhanjia_info: '锁定技,当你受到大于2点的伤害时,将此伤害减至2点,然后摸两张牌',
                        ye_zhanjiax: '战甲',
                        ye_zhanjiax_info: '锁定技,每回合一次,当你受到大于2点的伤害时,将此伤害减至2点,然后摸两张牌',
                        ye_xuli: '蓄力',
                        ye_xuli_info: '觉醒技,当你受到伤害后,若你的损失体力值大于当前体力值,当前事件结算完毕后,你将体力上限与手牌数调整至当前体力值,获得技能【神戟】、【战铠】、【扬武】,结束当前回合并进行一个额外回合',
                        ye_xulix: '蓄力',
                        ye_xulix_info: '觉醒技,当你受到伤害后,若你的损失体力值大于当前体力值,当前事件结算完毕后,你失去【战甲】和【霸关】并将体力上限与手牌数调整至当前体力值,获得技能【神戟】、【战铠】、【扬武】,结束当前回合并进行一个额外回合',
                        ye_shenji: '神戟',
                        ye_shenji_info: '判定阶段,你可以弃置两张牌,然后弃置你判定区里的牌.摸牌阶段,你多摸三张牌;出牌阶段,你可以多使用三张【杀】,你的【杀】可以多指定三名角色为目标',
                        ye_shenjix: '神戟',
                        ye_shenjix_info: '判定阶段,你可以弃置两张牌,然后弃置你判定区里的牌.摸牌阶段,你多摸两张牌;出牌阶段,你可以多使用两张【杀】,你的【杀】可以多指定两名角色为目标',
                        ye_zhankai: '战铠',
                        ye_zhankai_info: '锁定技,你的手牌上限为12.当你受到1点伤害后,伤害来源弃置装备区里的所有牌(没有装备则随机弃置三张手牌).然后你摸三张牌并从弃牌堆里获得一张【杀】',
                        ye_zhankaix: '战铠',
                        ye_zhankaix_info: '锁定技,你的手牌上限为12.当你受到1点伤害后,伤害来源弃置装备区里的所有牌(没有装备则随机弃置两张手牌).然后你摸两张牌并从弃牌堆里获得一张【杀】',
                        ye_yangwu: '扬武',
                        ye_yangwu_info: '锁定技,敌方角色使用【无懈可击】时,该角色随机弃置三张牌',
                        ye_yangwux: '扬武',
                        ye_yangwux_info: '锁定技,敌方角色使用【无懈可击】时,该角色随机弃置两张牌',
                        hy_huituo: '恢拓',
                        hy_huituo_info: '持恒技,当你受到1点伤害后,你可以令一名角色进行一次判定,若结果为红色,该角色回复X点体力并摸Y张牌;否则该角色摸2X张牌(X为受到的伤害值,Y为溢出的回复值)',
                        hy_mingjian: '明鉴',
                        hy_mingjian_info: '出牌阶段限一次,你可以将任意张手牌交给一名其他角色,然后该角色于其下个回合跳过弃牌阶段,且使用牌时无距离次数限制',
                        hy_xingshuai: '兴衰',
                        hy_xingshuai_info: '主公技,限定技,当你进入濒死状态时,其他魏势力角色可依次令你回复1点体力,然后这些角色依次受到1点无来源伤害',
                        hy_yitong: '一统',
                        hy_yitong_info: '锁定技,你使用【杀】和非延时锦囊无距离限制且可以指定任意名角色为目标',
                        hy_shihuang: '始皇',
                        hy_shihuang_info: '锁定技,其他角色的回合结束后,你有X%的几率进行一个额外的回合,若上个回合的是友方角色,则概率翻倍(X为当前轮数*6,且X最大为100)',
                        hy_zulong: '祖龙',
                        hy_zulong_info: '锁定技,①游戏开始时你将【真龙长剑】和【传国玉玺】加入牌堆.②准备阶段,若本局游戏中有【传国玉玺】或【真龙长剑】且不在弃牌堆,你获得之;否则你摸四张牌',
                        hy_fenshu: '焚书',
                        hy_fenshu_info: '锁定技,其他角色于其回合内使用前Y张普通锦囊牌时,你可令此牌无效(Y为友方角色数且至少为1)',
                        hy_ny_qianlong: '潜龙',
                        hy_ny_qianlong_info: '持恒技,①你受到伤害后,可以展示牌堆顶的三张牌,然后将其中任意张牌附加<鳞>标记并随机置于牌堆中,你获得其余牌.②当一名角色获得<鳞>牌后,你选择一项:1,令其受到X点雷电伤害(X为此次获得的<鳞>牌数);2,令其获得1点护甲',
                        hy_ny_fensi: '轻躁忿肆',
                        hy_ny_fensi_info: '锁定技,当你获得护甲后,你对一名体力值大于等于你的角色造成2点伤害,若目标不为你,视为其对你使用一张无距离次数限制的【杀】',
                        hy_ny_juejin: '决进讨逆',
                        hy_ny_juejin2: '决进',
                        hy_ny_juejin_info: '限定技,准备阶段,若你的体力值最小,你可以令一名其他角色本局受到的伤害+1.然后你获得【决讨】直到回合结束',
                        hy_ny_juetao: '决讨',
                        hy_ny_juetao_info: '出牌阶段,你可以失去1点体力并与一名其他角色拼点,若你赢,你对其造成1点伤害;否则其摸一张牌',
                        hy_ny_bilei: '铜墙铁壁',
                        hy_ny_bilei_info: '魏势力技,锁定技,每个回合开始时,你获得1点护甲,当你失去体力时,若你护甲值大于体力上限,你有90%概率可以失去1点护甲,然后防止之',
                        hy_ny_longyuan: '龙渊',
                        hy_ny_longyuan_info: '锁定技,每局限六次,你发动【潜龙】时,额外展示两张牌,然后你获得6点护甲',
                        taixu_mouzhu: '谋诛',
                        taixu_mouzhu_info: '出牌阶段限一次,你可以选择一名其他角色,令除其外体力值小于等于你的其他角色依次选择是否交给你一张牌.若你未因此获得牌,则你与这些角色依次失去1点体力;否则其选择视为你对其使用一张伤害基数为X的【杀】或【决斗】(X为你以此法获得的牌数目至多为4)',
                        taixu_linglu: '令戮',
                        taixu_linglu_info: '强令:令一名角色于其下回合结束前造成2点伤害.成功:其摸两张牌;失败:其失去1点体力',
                        taixu_zhuosheng: '擢升',
                        taixu_zhuosheng_info: '强令:弃置一张牌,然后令一名其他角色于其回合结束前获得至少五张牌.成功:其加1点体力上限并回复1点体力,然后交给你一张非基本牌',
                        taixu_mouqiang: '谋强',
                        taixu_mouqiang_info: '锁定技,当你受到大于1点的伤害后,你获得来源X张牌(X为伤害值一半,向下取整),每有一张基本牌,你回复1点体力,每有一张非基本牌,你对其造成1点伤害',
                    },
                };
                for (const i in QQQ.character) {
                    const info = QQQ.character[i];
                    info[4].push(`ext:寰宇兴衰/image/${i}.jpg`);
                    info[4].push(`die:ext:寰宇兴衰/audio/${i}.mp3`);
                }
                lib.config.all.characters.add('寰宇兴衰');
                lib.config.characters.add('寰宇兴衰');
                lib.translate['寰宇兴衰_character_config'] = `寰宇兴衰`;
                return QQQ;
            });
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
                }; //true转为1,false转为-1
                window.numberq0 = function (num) {
                    if (isNaN(Number(num))) return 0;
                    return Math.abs(Number(num));
                }; //始终返回正数(取绝对值)
                window.numberq1 = function (num) {
                    if (isNaN(Number(num))) return 1;
                    return Math.max(Math.abs(Number(num)), 1);
                }; //始终返回正数且至少为1(取绝对值)
                window.number0 = function (num) {
                    if (isNaN(Number(num))) return 0;
                    return Math.max(Number(num), 0);
                }; //始终返回正数
                window.number1 = function (num) {
                    if (isNaN(Number(num))) return 1;
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
            //—————————————————————————————————————————————————————————————————————————————卡牌包
            game.import('card', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '寰宇兴衰',
                    connect: true,
                    card: {
                        hy_wenming: {
                            type: 'equip',
                            subtype: 'equip5',
                            fullskin: true,
                            image: 'ext:寰宇兴衰/image/hy_wenming.jpg',
                            ai: {
                                basic: {
                                    equipValue: 8.5,
                                },
                            },
                            skills: ['hy_wenming_skill'],
                            enable: true,
                            fullimage: true,
                        },
                        hy_zhenlongchangjian: {
                            type: 'equip',
                            subtype: 'equip1',
                            fullskin: true,
                            image: 'ext:寰宇兴衰/image/hy_zhenlongchangjian.jpg',
                            distance: {
                                attackFrom: -3,
                            },
                            ai: {
                                basic: {
                                    equipValue: 4,
                                },
                            },
                            skills: ['hy_zhenlongchangjian_skill'],
                            enable: true,
                            fullimage: true,
                        },
                        hy_chuanguoyuxi: {
                            type: 'equip',
                            subtype: 'equip5',
                            fullskin: true,
                            image: 'ext:寰宇兴衰/image/hy_zhenlongchangjian.jpg',
                            ai: {
                                basic: {
                                    equipValue: 8.5,
                                },
                            },
                            skills: ['hy_chuanguoyuxi_skill'],
                            enable: true,
                            fullimage: true,
                        },
                    },
                    translate: {
                        hy_wenming: '文明的存续',
                        hy_wenming_info: '锁定技,你使用的非伤害牌不可被响应',
                        hy_wenming_skill: '文明的存续',
                        hy_wenming_skill_info: '锁定技,你使用的非伤害牌不可被响应',
                        hy_chuanguoyuxi: '传国玉玺',
                        hy_zhenlongchangjian: '真龙长剑',
                        hy_zhenlongchangjian_info: '锁定技,每回合你使用的第一张非延时锦囊无法被【无懈可击】响应',
                        hy_chuanguoyuxi_info: '出牌阶段开始时,你可以选择使用一张多目标锦囊牌',
                        hy_zhenlongchangjian_skill: '真龙长剑',
                        hy_zhenlongchangjian_skill_info: '锁定技,每回合你使用的第一张非延时锦囊无法被【无懈可击】响应',
                        hy_chuanguoyuxi_skill: '传国玉玺',
                        hy_chuanguoyuxi_skill_info: '出牌阶段开始时,你可以选择使用一张多目标锦囊牌',
                    },
                };
                for (const i in QQQ.card) {
                    const info = QQQ.card[i];
                    if (!info.image) {
                        if (info.fullskin) {
                            info.image = `ext:寰宇兴衰/image/${i}.png`;
                        }
                        else {
                            info.image = `ext:寰宇兴衰/image/${i}.jpg`;
                        }
                    }
                    lib.inpile.add(i);
                    if (info.mode && !info.mode.includes(lib.config.mode)) continue;
                    lib.card.list.push([lib.suits.randomGet(), lib.number.randomGet(), i]);
                }
                lib.config.all.cards.add('寰宇兴衰');
                lib.config.cards.add('寰宇兴衰');
                lib.translate.寰宇兴衰_card_config = '寰宇兴衰';
                return QQQ;
            });
        },
        config: {
            hy_texiao: {
                name: '特效开关',
                init: 'off',
                item: {
                    on: '开启',
                    off: '关闭',
                },
            },
            hy_skilltairan: {
                name: '获得泰然',
                intro: '挑战模式可选择任意名角色获得【泰然】',
                init: 'off',
                item: {
                    on: '开启',
                    off: '关闭',
                },
            },
        },
        package: extensionInfo,
    };
});
