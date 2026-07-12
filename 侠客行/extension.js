import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    //QQQ
    return {
        name: '侠客行',
        content(config, pack) {
            // 导入Victoryvoice.js
            lib.init.js(
                'extension/侠客行/Victoryvoice.js',
                null,
                function () {
                    // 导入成功
                },
                function () {
                    alert('error Victoryvoice.js导入失败');
                }
            );
            game.VictoryVoice = function (fn, dir, sex) {
                if (lib.config.background_speak) {
                    if (dir && sex) game.playAudio(dir, sex, fn);
                    else if (dir) game.playAudio(dir, fn);
                    else game.playAudio('../extension/侠客行', fn);
                }
            };
            if (!localStorage.getItem('update_alert_shown')) {
                alert('侠客行更新公告\n本扩展目前版本为0.2版本\n更新公告\n野势力新武将 上官宫阙和玄 增加两个新机制 格挡值与附属武将,可以在扩展页面查看\n扩展作者Angel      点击确定后本公告则不会再次显示');
                localStorage.setItem('update_alert_shown', true);
            }
            //史诗
            lib.rank.rarity.epic.addArray(['kugu_Angel', 'songyao_Angel', 'songxing_Angel', 'zhangqingjing_Angel', 'lvcheng_Angel', 'xuan_Angel']);
            //精品
            lib.rank.rarity.rare.addArray(['xuanxia_Angel', 'jiangxin_Angel', 'sunyan_Angel']);
            //传说
            lib.rank.rarity.legend.addArray(['sunya_Angel', 'shenxin_Angel', 'xuamabao_Angel', 'shangguangonque_Angel']);
            //格挡值
            lib.element.player.addGedang = function (num, log) {
                if (typeof num != 'number' || !num) num = 1;
                let name = lib.inpile
                    .filter((card) => {
                        const tagValue = get.tag({ name: card }, 'damage');
                        return tagValue !== undefined;
                    })
                    .randomGets(1);
                if (!this.Gedang)
                    this.Gedang = {
                        num: 0,
                        mingmen: name,
                        bool: false,
                    };
                if (this.Gedang.jueduiGedang) {
                    this.markSkill('gedang_mark');
                    this.Gedang.num += num;
                    this.update();
                    if (log) game.log(log);
                    else game.log(this, '获得了', get.cnNumber(num), '个', '#g<格挡值>');
                } else {
                    while (this.Gedang.num + num > 3) {
                        num--;
                    }
                    if (this.Gedang.num < 3 && this.Gedang.num + num < 4) {
                        this.markSkill('gedang_mark');
                        this.Gedang.num += num;
                        this.update();
                        if (log) game.log(log);
                        else game.log(this, '获得了', get.cnNumber(num), '个', '#g<格挡值>');
                    }
                }
            };
            lib.skill.gedang_mark = {
                mark: true,
                markimage: 'extension/侠客行/png/Gedangzhi.png',
                intro: {
                    mark(dialog, content, player) {
                        if (player.isUnderControl(true)) {
                            if (player.Gedang.jueduiGedang) {
                                var text = '你当前的格挡值为' + player.Gedang.num + '/无上限<br>当前的命门牌名为:<br><b>无命门</b>';
                                dialog.addText(text);
                            } else {
                                var text = '你当前的格挡值为' + player.Gedang.num + '/3<br>当前的命门牌名为:';
                                dialog.addText(text);
                                dialog.addSmall([player.Gedang.mingmen, 'vcard']);
                            }
                        } else {
                            if (player.Gedang.jueduiGedang) {
                                var list = '' + get.translation(player) + '当前的格挡值为' + player.Gedang.num + '/无上限<br>当前的命门牌名为:<br><b>无命门</b>';
                                dialog.addText(list);
                            } else {
                                var list = '' + get.translation(player) + '当前的格挡值为' + player.Gedang.num + '/3';
                                if (player.Gedang.bool) {
                                    list += '<br>当前的命门牌名为:';
                                    dialog.addText(list);
                                    dialog.addSmall([player.Gedang.mingmen, 'vcard']);
                                } else {
                                    dialog.addText(list);
                                }
                            }
                        }
                    },
                    markcount(event, player) {
                        return player.Gedang.num;
                    },
                },
            };
            lib.skill._Gedang_infn = {
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                forced: true,
                filter(event, player) {
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                content() {
                    let name = lib.inpile
                        .filter((card) => {
                            const tagValue = get.tag({ name: card }, 'damage');
                            return tagValue !== undefined;
                        })
                        .randomGets(1);
                    if (!player.Gedang)
                        player.Gedang = {
                            jueduiGedang: false,
                            num: 0,
                            mingmen: name,
                            bool: false,
                        };
                },
            };
            lib.skill._Gedang = {
                trigger: {
                    player: 'damageBegin',
                },
                forced: true,
                _priority: 100,
                filter(event, player) {
                    if (!player.Gedang) return false;
                    return player.Gedang.num > 0;
                },
                content() {
                    game.playAudio('../extension/侠客行/audio/Gedang.mp3');
                    player.popup('格挡伤害');
                    if (trigger.card && trigger.card.name == player.Gedang.mingmen) {
                        trigger.cancel();
                        player.Gedang.num = 0;
                        player.unmarkSkill('gedang_mark');
                        player.loseHp();
                        player.Gedang.bool = true;
                    } else {
                        trigger.cancel();
                        player.Gedang.num--;
                        if (player.Gedang.num == 0) player.unmarkSkill('gedang_mark');
                    }
                    player.update();
                    event.trigger('gedangDamageEnd');
                    //格挡伤害后
                    event.num = Math.min(trigger.num, 9);
                    event.source = trigger.source;
                },
            };
            //格挡值截止
            //附属角色
            lib.element.player.addXinPlayer = function (target) {
                if (!target) alert('注:addXinPlayer 无目标不可运行,请加上目标');
                else {
                    if (!this.XinPlayer) {
                        this.XinPlayer = {
                            Zhu: {
                                name: this.name,
                                Hp: 0,
                                MaxHp: 0,
                                Gedang: 0,
                            },
                        };
                        this.XinPlayer[target] = {};
                        this.XinPlayer[target].Hp = lib.character[target][2];
                        this.XinPlayer[target].MaxHp = lib.character[target][2];
                        this.XinPlayer[target].Gedang = 0;
                    } else {
                        this.XinPlayer[target] = {};
                        this.XinPlayer[target].Hp = lib.character[target][2];
                        this.XinPlayer[target].MaxHp = lib.character[target][2];
                        this.XinPlayer[target].Gedang = 0;
                    }
                    this.markSkill('XinPlayer_mark');
                    this.update();
                }
            };
            lib.skill.XinPlayer_mark = {
                intro: {
                    mark(dialog, content, player) {
                        var list = [];
                        for (var i in player.XinPlayer) list.add(i);
                        list.remove('Zhu');
                        if (list.length) {
                            for (var i of list) {
                                var character = [];
                                character.add(i);
                                dialog.addSmall([character, 'character']);
                                var o = '附属武将名:' + get.translation(i) + '<br>当前体力值' + player.XinPlayer[i].Hp + '<br>当前的格挡值';
                                if (!player.XinPlayer[i].Gedang) o += '0/3';
                                else o += '' + player.XinPlayer[i][1] + '/3';
                                dialog.addText(o);
                            }
                        } else dialog.addText('你当前没有附属角色');
                    },
                    markcount(event, player) {
                        return Object.keys(player.XinPlayer).length - 1;
                    },
                },
            };
            lib.skill._XinPlayer_B = {
                trigger: {
                    player: 'phaseEnd',
                },
                _priority: 10,
                forced: true,
                filter(event, player) {
                    if (!player.XinPlayer) return false;
                    return true;
                },
                content() {
                    'step 0';
                    if (player.XinPlayer.Zhu.name != player.name) {
                        player.chooseBool('是否切换为主角色');
                        event.fushu = 1;
                    } else {
                        event.fushu = 0;
                        if (Object.keys(player.XinPlayer).length == 2) {
                            for (var i in player.XinPlayer) {
                                if (i != 'Zhu') {
                                    player.popup(get.translation(i));
                                    player.XinPlayer.Zhu.Hp = player.hp;
                                    player.XinPlayer.Zhu.MaxHp = player.maxHp;
                                    player.XinPlayer.Zhu.Gedang = player.Gedang.num;
                                    player.reinit(player.name, i);
                                    player.hp = player.XinPlayer[i].Hp;
                                    player.maxHp = player.XinPlayer[i].MaxHp;
                                    player.Gedang.num = player.XinPlayer[i].Gedang;
                                    if (player.Gedang.num == 0) player.unmarkSkill('gedang_mark');
                                    else player.markSkill('gedang_mark');
                                    player.phase('nodelay');
                                    player.update();
                                }
                            }
                        } else {
                            var list = [];
                            for (var i in player.XinPlayer) list.add(i);
                            list.remove('Zhu');
                            player.chooseButton(['选择需要更换的附属角色', [list, 'character']]);
                        }
                    }
                    ('step 1');
                    if (result.bool && event.fushu == 1) {
                        player.popup(get.translation(player.XinPlayer.Zhu.name));
                        player.XinPlayer[player.name].Hp = player.hp;
                        player.XinPlayer[player.name].MaxHp = player.maxHp;
                        if (player.Gedang) player.XinPlayer[player.name].Gedang = player.Gedang.num;
                        else
                            player.Gedang = {
                                num: 0,
                                mingmen: name,
                                bool: false,
                            };
                        player.reinit(player.name, player.XinPlayer.Zhu.name);
                        player.hp = player.XinPlayer.Zhu.Hp;
                        player.maxHp = player.XinPlayer.Zhu.MaxHp;
                        if (!player.Gedang)
                            player.Gedang = {
                                num: 0,
                                mingmen: name,
                                bool: false,
                            };
                        player.Gedang.num = player.XinPlayer.Zhu.Gedang;
                        if (player.Gedang.num == 0) player.unmarkSkill('gedang_mark');
                        else player.markSkill('gedang_mark');
                        player.update();
                    }
                    if (result.bool && event.fushu == 0) {
                        var i = result.links[0];
                        player.popup(get.translation(i));
                        player.XinPlayer.Zhu.Hp = player.hp;
                        player.XinPlayer.Zhu.MaxHp = player.maxHp;
                        if (player.Gedang) player.XinPlayer.Zhu.Gedang = player.Gedang.num;
                        else
                            player.Gedang = {
                                num: 0,
                                mingmen: name,
                                bool: false,
                            };
                        player.reinit(player.name, i);
                        player.hp = player.XinPlayer[i].Hp;
                        player.maxHp = player.XinPlayer[i].MaxHp;
                        player.Gedang.num = player.XinPlayer[i].Gedang;
                        if (player.Gedang.num == 0) player.unmarkSkill('gedang_mark');
                        else player.markSkill('gedang_mark');
                        player.phase('nodelay');
                        player.update();
                    }
                },
            };
            lib.skill._XinPlayer_C = {
                trigger: {
                    player: 'dying',
                },
                forced: true,
                filter(event, player) {
                    if (!player.XinPlayer) return false;
                    if (player.XinPlayer.Zhu.name != player.name) return true;
                },
                content() {
                    player.popup(get.translation(player.XinPlayer.Zhu.name));
                    delete player.XinPlayer[player.name];
                    trigger.cancel();
                    player.reinit(player.name, player.XinPlayer.Zhu.name);
                    player.hp = player.XinPlayer.Zhu.Hp;
                    player.maxHp = player.XinPlayer.Zhu.MaxHp;
                    player.Gedang.num = player.XinPlayer.Zhu.Gedang;
                    if (player.Gedang.num == 0) player.unmarkSkill('gedang_mark');
                    else player.markSkill('gedang_mark');
                    player.update();
                },
            };
            //附属角色截止
            lib.skill._VictoryVoice = {
                trigger: {
                    global: ['phaseBefore', 'damageEnd'],
                    player: 'enterGame',
                },
                forced: true,
                filter(event, player) {
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                content() {
                    localStorage.setItem('VictoryVoice', game.me.name);
                },
            };
        },
        precontent(character) {
            game.import('character', function () {
                var 侠客行 = {
                    name: '侠客行',
                    connect: true,
                    characterSort: {
                        侠客行: {
                            huangqinguoqie: ['sunyan_Angel'],
                            yiguozhijub: ['shenxin_Angel'],
                            sanrenyeshi: ['kugu_Angel', 'zhangqingjing_Angel', 'jiangxin_Angel', 'xuamabao_Angel', 'sunya_Angel', 'xuanxia_Angel', 'shangguangonque_Angel', 'xuan_Angel'],
                            guanchangfengyun: ['lvcheng_Angel', 'songyao_Angel', 'songxing_Angel'],
                            yishilvren: ['seti_Angel'],
                        },
                    },
                    character: {
                        // stone_zhongshi:['male','wei',1,.stone_zhongshi1,['minskin','stone'],[]],
                        // "laigebao_Angel":['male','ye_xkx',3,.shuihuan_Angel,[]],
                        seti_Angel: ['male', 'yi_xkx', Infinity, ['jixie_Angel', 'haoyi_Angel', 'hongquan_Angel'], ['des:异世界的一个穿越者.穿越地点记录为山谷,在其表面的蓝色微光消逝后突然消失不见']],
                        shangguangonque_Angel: ['famale', 'ye_xkx', 4, ['zhujian_Angel', 'lingyong_Angel'], ['des:待定']],
                        xuan_Angel: ['male', 'ye_xkx', '3/4', ['zhongzhao_Angel', 'faxiang_Angel'], ['des:玄,是一位云游武僧,出身于一座偏僻的山寺.他从小就被视为天才,很快就掌握了许多高深的武功,以及各种禅宗课程.在经历了数年的严格训练和修行后,他终于成为了一位独当一面的武僧.  玄有一项强大的技能,叫做法相真身,是一种基于身心合一的境界,能够使他不动如山,无坚不摧.每当他发挥这项技能时,他的全身会散发出强烈的气场. 尽管他是一位武僧,但是他并不是一个冷血的杀手.相反,他是一个非常仁慈和义气的人.他往往会侠义地伸出援手,帮助那些需要帮助的人.他的品德和行为对于所有周围的人来说都是一个榜样.玄的信条是<万物随缘,万事随心>.这意味着他不会过分地关注那些他无法控制的事情,而是会放心地让它们自然发展.他作为一名武僧,使用他丰富的知识和技能来帮助别人,并尽可能地为和平与和谐而奋斗.他的云游往迹五湖四海,四处拜访道观寺庙,与陌生人相识,在经历了无数的险阻与苦难,也收获了深厚的人情世故.他的旅程化作了一条长河,流淌在人间世事,洗净心灵,更能洞导修禅途径.']],
                        zhangqingjing_Angel: ['male', 'ye_xkx', 3, ['sheying_Angel', 'huanzhang_Angel'], ['des:张清净,三玄教主,是一位擅长幻境制造的高手.他的能力包括重影三境和幻身瘴气,能够将远处的景物搬到自己的方位,并隐身躲避敌人的追踪.他的性格冷静理性,善于分析和思考,但也有一定的冷漠和孤独感.三玄教的幻境制造正好迎合了他的个性,让他能够将自己的想象力和创造力发挥到极致.虽然他只会两玄,但他的能力已经足够强大,可以轻松应对大多数的挑战.然而,他始终无法掌握三玄之力,因为这需要教主的传授和指引.不幸的是,上一任教主在传授前就不幸去世,让张清净一直无法达到真正的巅峰.但他仍然坚持着自己的信仰和追求,带领三玄教走向更加辉煌的未来.']],
                        xuamabao_Angel: ['male', 'ye_xkx', 3, ['ancha_Angel', 'qianmian_Angel'], ['des:玄马鸨,这是一个神秘又充满杀气的名字.他被称为<背后杀人刀>,因为他总是潜伏在暗处,用各种手段击杀他的目标,而且从来没有留下过任何证据.他的身份和背景是一个谜,没有人知道他的真实面貌和来历.有人说他是一个刺客,有人说他是一个间谍,还有人说他是一个黑帮老大.但是,没有人能够证实这些传言的真实性.玄马鸨的存在让许多人感到恐惧和不安,因为他总是突然出现,在瞬间击杀他的目标,又像鬼魅一样消失在黑暗中.他的千面术和其他变化技巧让他成为了一个无法捉摸和预测的敌人.然而,玄马鸨的真实目的是什么,没有人知道.有人说他是一个复仇者,有人说他是一个政治家,还有人说他是一个疯狂的杀手.但是,他的真实动机和计划,只有他自己知道.']],
                        jiangxin_Angel: ['male', 'ye_xkx', 3, ['qingzhou_Angel'], ['des:白衣赤子江心出生在一个刺客家族,从小就接受了严格的训练.他的父亲是聂颂的弟子,母亲则是刺客中的佼佼者.江心从小就展现出了惊人的天赋,他很快就学会了父母所教授的所有技能.然而,江心并不喜欢刺杀,他觉得这种行为太过残忍.他渴望自由和平静的生活,但他的家族却不允许他离开.为了逃脱束缚,江心开始了漫长的修行之旅.他走遍了大江南北,学习了各种武术和技能.他的修行之路异常孤独,但他从未放弃.他不断地挑战自己,不断地突破自己的极限.最终,江心修炼到了极致,他的身体和心灵都达到了一种境界.他的容貌也因此变得年轻,长相俊美,仿佛是一个白衣赤子.江心回到了家族,但他已经不再是一个刺客.他拒绝了家族的安排,选择了自己的道路.他成为了一个流浪武者,行走江湖,帮助需要帮助的人.江心的名声渐渐传开,人们开始称他为<白衣赤子>.他的武艺高强,但他从不以暴力解决问题.他用自己的方式,为世界带来了一丝和平和温暖.江心的故事传颂开来,他成为了江湖中的传奇人物.他的人生道路虽然孤独,但他却走出了一条属于自己的路.']],
                        shenxin_Angel: ['male', 'jun_xkx', 4, ['huanyue_Angel'], ['des:幽心君出生在幻国的皇室中,是幻国的王子.他从小就展现出了惊人的幻术天赋,很快就成为了幻国中最强的幻术师之一.在他的幻术之下,任何事物都可以被改变,他的幻月之力更是无人能及.年轻的幽心君非常渴望掌握更多的幻术技能,他不断地学习和练习,希望将幻术发挥到极致.他的努力得到了回报,他的幻术之力越来越强大,甚至可以改变整个幻国的景象.幽心君很快成为了幻国的国王,他的幻术之力让他成为了实力为尊的国家的君主.他用自己的能力保护着幻国的安全和繁荣,让幻国成为了一个强大的国家.然而,幽心君并不是一个冷酷无情的君主.他十分关心自己的子民,时常会亲自前往各地视察,听取百姓的意见.他的幻术之力也被用来改善百姓的生活,让他们过上更加美好的生活.幽心君的称号<幽心>来源于他的内心深处.他虽然是一个强大的国王,但他的内心却十分孤独和寂寞.他常常独自思考,沉浸在自己的幻术之中.他的内心深处也是他最强大的武器,他的幻术之力源自于他内心深处的力量.幽心君的统治为幻国带来了一个黄金时代,他的名字也被记载在了幻国的历史中.']],
                        sunyan_Angel: ['male', 'jun_xkx', 4, ['sancan_Angel', 'yuyao_Angel'], ['des:孙宴作为堰国公孙圣君的第三个儿子,从小就接受了严格的教育.他不仅精通武艺,而且对政治和经济也有深刻的理解.在他的努力下,堰国的经济繁荣了起来,人民的生活水平也得到了大幅提高.因此,他被国民尊称为<白马公子>.然而,堰国的繁荣并没有持续太久.一群强盗趁机入侵了堰国,掠夺了大量的财富和粮食,并杀害了大量的平民百姓.孙宴深感愧疚,他决定亲自带领士兵去追捕强盗.在追捕的过程中,孙宴遇到了一位年轻的女孩,她名叫莫雨,是一名孤儿.莫雨告诉孙宴,她曾经是一个强盗的女儿,但她非常反感父亲的所作所为,于是逃离了家庭.孙宴感受到了莫雨的善良和正义感,于是决定收养她.在孙宴的带领下,士兵们终于成功地追捕了强盗,并将他们绳之以法.孙宴也因此得到了更多的人民的爱戴和尊敬.尽管堰国经历了一次危机,但是在孙宴的努力下,国家很快就回复了过来.他也因此成为了堰国的一位杰出君主,被人们称为<白马公子>的名号也因此更加响亮.']],
                        songxing_Angel: ['male', 'guan_xkx', 3, ['yingmo_Angel', 'yacho_Angel'], ['des:宋星出生于堰国的一个名门望族,自幼聪慧过人,善于思考和分析.他在年轻时就被看作是家族的未来希望,但是他的性格却让人有些忧虑.宋星心思缜密,善于算计,但是他也有着极强的报复心理,对所有侮辱和伤害他的人都会进行报复.这种性格让他在堰国的政治圈子中声名狼藉,但也让他在一些阴暗的角落里拥有了不少支持者.在堰国的政治斗争中,宋星展现出了他的才华.他不仅善于谋划,而且能够在关键时刻做出果断的决策.他的计谋让堰国在一些关键的战争中取得了胜利,让他成为了国家的重要谋士.然而,宋星的报复心理也让他在政治斗争中犯下了不少过错.他曾经因为一些小事和一些政敌展开了激烈的争斗,结果导致了一些无辜的人受到了牵连.这些错误让他在政治圈子中的声誉越来越差,但也让他更加坚定了自己的信念:只有强大才能保护自己和家族.现在,宋星已经成为了堰国的顶尖谋士之一,虽然他的性格让很多人望而却步,但是他的才华也让很多人敬佩.他依然在政治斗争中扮演着重要的角色,但是他也明白,只有改变自己的性格,才能真正地让自己成为一个伟大的人物.']],
                        xuanxia_Angel: ['male', 'ye_xkx', 3, ['shefu_Angel', 'fugui_Angel'], ['des:玄夏是一个老道士,已经过古稀之年,但仍然心怀天下.他出身贫苦,因为家境拮据,不得不被亲人抛弃.幸运的是,他在青龙山的一位老道士的帮助下得以幸存,从此开始了他的道士生涯.在老道士的带领下,玄夏开始学习道法,掌握了符箓技术.他忠于自己的职责,担负起了保护天下百姓的重任,平息妖魔鬼怪的横行.他的行为得到了人们的尊敬和崇拜,被称为<玄道士>.时光荏苒,岁月如梭,但玄夏的心仍然始终向着天下.即使年纪已经大了,他仍然一直坚守着自己的职责,为人类的安宁和平和幸福努力.他的师兄弟们听到他的话总是如教条般的遵守,因为他的成功虽说来得稍迟,但却无人可以否定他所取得的成就.寒来暑往,玄夏身经百战,已见满头白发,但他的心和他的信念始终年轻.他对道的理解也愈发深刻,在修行途中不断摸索并进步.他的存在给予了人们安全感和信心,让人们相信即使天下大乱,也不失希望.']],
                        kugu_Angel: ['male', 'ye_xkx', 4, ['yayun_Angel', 'juefeng_Angel', 'puzhu_Angel'], ['des:枯骨,嗜血的剑魔,是武林中最为可怕的存在之一.他的出现意味着大量的人命将会被夺去.他的本名已经被他丧心病狂的行径所埋没,没有人知道他真正的身份.他曾是一个天下无双的武痴,近乎癫狂的剑客,但一次意外却让他失去了他的武器——玄铁剑,实力骤减,声威一落千丈.在被各门派围攻时,枯骨被打落山崖,从此迷失自我,四十年来他一直寻找着他失去的剑.他性格古怪,喜怒无常,没有人愿意与他交流.在武林中没有人敢轻易挑战他,因为这意味着死亡.在当代武林的实力排名中,如果有玄铁剑,枯骨的实力仅次于江心,但在没有这件宝贝的情况下,他的实力立即大打折扣.枯骨是一个独行侠,不属于任何门派,也不曾谋求过什么权力,他只是沉浸在他的剑术之中,寻找他失去的玄铁剑,同时为了维护自己的荣誉和声望,不断杀戮着追杀他的敌人,让他成为武林中的一朵毒瘤,也让人们对他充满了恐惧.他成为了武林闻风丧胆的剑魔,嗜血成性,让人望风丧胆.']],
                        sunya_Angel: ['male', 'ye_xkx', 3, ['xuanhu_Angel', 'renxin_Angel', 'jishi_Angel'], ['des:孙哑,无垠大陆的杏林圣手,是一位医术高超的名医.他出生在一个医家世家,从小就展现出了对医学的浓厚兴趣.他最初是在家族的传承下学习医术,但是很快就发现了自己的天赋和热情,决定踏上行医之路,以挽救更多的人们的生命.孙哑行医多年,他的名声渐渐传开,成为无垠大陆上的一颗璀璨明珠.他行医无数,不分贵贱贫富,悬壶济世,奔走于世界各地,所到之处皆尽力医治.他的医术高超,常常可以在别人束手无策之际,给出有效的治疗方案,并且取得令人惊叹的疗效.因此,无论是一国之君,还是穷凶极恶的劫匪,都非常尊敬他,他奔走期间不仅不会被拦截,还会被好生招待.孙哑深知医者仁心的道理,他悲天悯人,深深地爱着这个世界上的每一个人.他常常不惜自己的生命,为了挽救他人的生命而奋不顾身.因此,他被后人尊称为<杏林圣手>,成为了无垠大陆医学史上不可或缺的一位重要人物.']],
                        songyao_Angel: ['male', 'guan_xkx', 3, ['qiji', 'yice'], ['des:宋耀,是一位出生于堰国显赫世家的贵族子弟,自幼聪颖过人,喜好读书.在年少时,他就被人誉为<堰国未来的谋士之星>.宋耀虽然出身名门,但他却不满足于享受家族的荣耀与财富,而是一直心怀国家兴旺的愿望.在他年少成名后,便开始了一系列的政治活动和军事策略的研究,他通过自己的努力和不懈的追求,成为了当时堰国最杰出的谋士之一.在堰国历史上最为重要的时刻,宋耀的才华得到了充分的发挥.当时大堰国内部存在着许多的矛盾和纷争,国家的未来充满了不确定性.宋耀基于自己的见解和对国家的深刻理解,提出了一系列的政治建议,并且亲自主持实施.他的计划成功地化解了国内矛盾,挽救了大堰国的危局,为国家的未来奠定了坚实的基础.由于他的卓越才华和杰出表现,宋耀被封为<宋丞相>,成为大堰国的顶尖谋士之一.他凭借自己的才能和勇气,为国家建立了崭新的局面,被誉为<大堰国的国士之才>.在他晚年时,宋耀依然不断地为国家的未来发展而奋斗.最后,他在为自己死后的大堰国国运下了一步很大的旗,成为了堰国历史上一个不可磨灭的传奇.']],
                        lvcheng_Angel: ['male', 'guan_xkx', 4, ['yanzhen_Angel', 'fanjiao_Angel'], ['des:吕秤,生于圣策国军人世家,自幼习武,后成为圣策国军队中的护国大将,被封为<无双守将>.他是圣策国的忠实卫士,为国家保卫边疆和平而不懈努力.作为一名出色的将领,吕秤曾经在一次千载难逢的战争中,带领一千三百名精锐士兵,抵御了堰国十万部队的进攻,成功守住了圣策国的边境.这场战争让吕秤成为了圣策国历史上的传奇人物,被堰国二代国君孙宴称之为<守城之无双,千古之奇才>.吕秤是一名非常值得尊敬的人物,他的忠诚、勇气和聪明才智,是圣策国的骄傲和荣耀.']],
                    },
                    characterTitle: {
                        seti_Angel: '异世界穿越者',
                        laigebao_Angel: '水之毒蟾',
                        shangguangonque_Angel: '玉剑仙子',
                        xuan_Angel: '不动武僧',
                        lvcheng_Angel: '无双守将',
                        songyao_Angel: '宋丞相',
                        xuanxia_Angel: '玄道士',
                        zhangqingjing_Angel: '三玄教主',
                        songxing_Angel: '睚眦之怨',
                        xuamabao_Angel: '背后杀人刀',
                        jiangxin_Angel: '白衣赤子',
                        shenxin_Angel: '幽心君',
                        sunyan_Angel: '白马公子',
                        kugu_Angel: '嗜血的剑魔',
                        sunya_Angel: '杏林圣手',
                    },
                    card: {},
                    skill: {
                        hongquan_Angel: {
                            round: 3,
                            audio: 'ext:侠客行/audio:2',
                            enable: 'phaseUse',
                            filterTarget(event, player, target) {
                                return target != player && get.distance(player, target) < 2;
                            },
                            prompt() {
                                var i = '';
                                var num = 1 + Math.floor(_status.event.player.countMark('haoyi_Angel') / 2);
                                i += '你可对一名角色造成' + num + '点伤害<br>对其上家与下家的其他角色目标造成' + Math.max(0, Math.ceil(num - 2 / num)) + '点伤害<br>你获得' + Math.max(_status.event.player.countMark('haoyi_Angel') - 1, 1) + '点格挡值';
                                return i;
                            },
                            content() {
                                var num = 1 + Math.floor(player.countMark('haoyi_Angel') / 2);
                                target.damage(1 + Math.floor(player.countMark('haoyi_Angel') / 2));
                                if (target.previous != player) target.previous.damage(Math.max(0, num - Math.ceil(2 / num)));
                                if (target.next != player) target.next.damage(Math.max(0, num - Math.ceil(2 / num)));
                                player.addGedang(Math.max(player.countMark('haoyi_Angel') - 1, 1));
                                player.removeMark('haoyi_Angel', player.countMark('haoyi_Angel'));
                                player.node.avatar.setBackgroundImage('extension/侠客行/character/seti_Angel.jpg');
                            },
                        },
                        jixie_Angel: {
                            audio: 'ext:侠客行/audio:2',
                            init(player) {
                                if (!player.Gedang)
                                    player.Gedang = {
                                        jueduiGedang: false,
                                        num: 0,
                                        mingmen: name,
                                        bool: false,
                                    };
                                player.Gedang.jueduiGedang = true;
                                player.addGedang(4);
                            },
                            forceDie: true,
                            trigger: {
                                player: 'gedangDamageEnd',
                            },
                            forced: true,
                            filter: (event, player) => player.Gedang.num == 0,
                            content() {
                                'step 0';
                                player.$fullscreenpop('貌似穿越之旅结束了', 'thunder');
                                ('step 1');
                                player.die();
                                ('step 2');
                                game.removePlayer(player);
                            },
                        },
                        haoyi_Angel: {
                            audio: 'ext:侠客行/audio:2',
                            trigger: {
                                player: 'gedangDamageEnd',
                            },
                            forced: true,
                            filter: (event, player) => player.countMark('haoyi_Angel') < 4,
                            content() {
                                player.addMark('haoyi_Angel', 1);
                                if (player.countMark('haoyi_Angel') == 4) {
                                    player.node.avatar.setBackgroundImage('extension/侠客行/character/seti_Angel_manhaoyi.jpg');
                                }
                            },
                            intro: {
                                content: '豪意进度#/4',
                            },
                        },
                        yanzhen_Angel: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h') > 0 && player.getExpansions('yanzhen_Angel').length < 4;
                            },
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            marktext: '精兵',
                            content() {
                                'step 0';
                                player
                                    .chooseCard(
                                        '是否发动【严阵】？:选择任意张点数相邻且未扣置点数的手牌置于武将牌上',
                                        (card, player) => {
                                            if (player.getExpansions('yanzhen_Angel')) {
                                                if (
                                                    player
                                                        .getExpansions('yanzhen_Angel')
                                                        .map((card) => card.number)
                                                        .includes(card.number)
                                                )
                                                    return false;
                                            }
                                            if (ui.selected.cards.length) {
                                                var maxNumber = Math.max(...ui.selected.cards.map((card) => card.number));
                                                game.log(maxNumber);
                                                return card.number == maxNumber + 1;
                                            }
                                            return true;
                                        },
                                        [1, Infinity]
                                    )
                                    .set('complexCard', true);
                                ('step 1');
                                if (result.bool) {
                                    player.addToExpansion(result.cards, player, 'give').gaintag.add('yanzhen_Angel');
                                }
                            },
                            ai: {
                                noh: true,
                                skillTagFilter(player, tag) {
                                    if (tag == 'noh') {
                                        if (player.countCards('h') != 0) return false;
                                    }
                                },
                            },
                            group: 'yanzhen_Angel_player',
                            subSkill: {
                                player: {
                                    trigger: {
                                        target: 'useCardToTarget',
                                    },
                                    filter(event, player) {
                                        if (event.card.name != 'sha' && get.type(event.card) != 'trick') return false;
                                        return player.getExpansions('yanzhen_Angel').length && event.player != player;
                                    },
                                    forced: true,
                                    check(event, player) {
                                        return event.parent.excluded.includes(player) || get.tag(event.card, 'multineg') || get.effect(player, event.card, event.player, player) <= 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseButton(['是否发动【精兵】?:弃置一张点数最低的<精兵>牌,令' + get.translation(trigger.card) + '对你无效', player.getExpansions('yanzhen_Angel')]).set('filterButton', function (button) {
                                            var maxNumber = Math.min(...player.getExpansions('yanzhen_Angel').map((card) => card.number));
                                            return button.link.number == maxNumber;
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            trigger.targets.remove(player);
                                            trigger.parent.triggeredTargets2.remove(player);
                                            trigger.untrigger();
                                            player.discard(result.links[0]);
                                            player.judge(function (card) {
                                                return card.number <= result.links[0].number ? 1 : -1;
                                            });
                                        }
                                        ('step 2');
                                        if (result.bool) {
                                            player.gain(result.card, 'draw', 'log');
                                        }
                                    },
                                    ai: {
                                        effect: {
                                            target(card) {
                                                if (card.name == 'tiesuo') return [0, 0];
                                                if (card.name == 'yihuajiemu') return [0, 1];
                                                if (get.tag(card, 'multineg')) return [0, 2];
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        fanjiao_Angel: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            init: (player) => (player.storage.fanjiao_Angel = false),
                            filter: (event, player) => player.countCards('h') > 0 && player != _status.currentPhase,
                            content() {
                                player.storage.fanjiao_Angel = true;
                                player.useCard({ name: 'sha' }, trigger.source, player.getCards('h'));
                            },
                            ai: {
                                maixie_defend: true,
                                expose: 0.4,
                            },
                            group: 'fanjiao_Angel_damage',
                            subSkill: {
                                damage: {
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.cards && player.storage.fanjiao_Angel;
                                    },
                                    content() {
                                        player.draw(trigger.cards.length);
                                        player.storage.fanjiao_Angel = false;
                                    },
                                },
                            },
                        },
                        qiji: {
                            trigger: {
                                player: ['damageEnd', 'useCardEnd'],
                            },
                            filter(event, player) {
                                if (event.name == 'useCard' && get.type(event.card) != 'equip') return false;
                                return true;
                            },
                            round: 1,
                            content() {
                                player.moveCard();
                                player.draw();
                            },
                            group: 'qiji_1',
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'dying',
                                    },
                                    filter(event, player) {
                                        return !player.isTurnedOver();
                                    },
                                    prompt2: '翻面并弃置所有牌,并回复一点体力值',
                                    content() {
                                        player.recover();
                                        player.discard(player.countCards('he'));
                                        player.turnOver();
                                    },
                                },
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                            if (player.hasSkillTag('fugui_Angel', false, target)) return [1, -2];
                                            if (!target.hasFriend()) return;
                                            var num = 1;
                                            if (get.attitude(player, target) > 0) {
                                                if (player.needsToDiscard()) {
                                                    num = 0.7;
                                                } else {
                                                    num = 0.5;
                                                }
                                            }
                                            if (target.hp >= 4) return [1, num * 2];
                                            if (target.hp == 3) return [1, num * 1.5];
                                            if (target.hp == 2) return [1, num * 0.5];
                                        }
                                    },
                                },
                            },
                        },
                        yice: {
                            trigger: {
                                player: 'die',
                            },
                            forceDie: true,
                            filter: (event, player) => ui.discardPile.childNodes.length,
                            content() {
                                'step 0';
                                event.togain = [];
                                for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
                                    var current = ui.discardPile.childNodes[i];
                                    event.togain.push(current);
                                }
                                ('step 1');
                                var cards = event.togain;
                                var name = cards.randomGets(1)[0].name;
                                player.chooseButton(['选择一张牌', event.togain], true).set('ai', function (button) {
                                    var player = _status.event.player;
                                    var card = { name: button.link[2], nature: button.link[3] };
                                    var containsKuguAngel = player.getFriends().some(function (item) {
                                        return item.name === 'kugu_Angel';
                                    });
                                    var containcardAngel = cards.some(function (item) {
                                        return item.name === 'xuantiejian_Angel';
                                    });
                                    if (containsKuguAngel && containcardAngel) {
                                        if (card.name == 'xuantiejian_Angel') return 10;
                                    } else {
                                        if (card.name == name) return 10;
                                    }
                                    if (card.name == name) return 10;
                                    return 0;
                                });
                                ('step 2');
                                if (result.bool) {
                                    event.cards = result.links[0];
                                    player.chooseTarget('选择一名角色获得' + get.translation(event.cards) + '并增加一点体力上限且回复一点体力值', true).ai = function (target) {
                                        if (result.links[0].name == 'xuantiejian_Angel') {
                                            if (target.name == 'kugu_Angel') return 10;
                                        }
                                        return get.attitude(_status.event.player, target);
                                    };
                                }
                                ('step 3');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.line(target, 'green');
                                    target.gain(event.cards, 'gain2');
                                    target.gainMaxHp();
                                    target.recover();
                                }
                            },
                        },
                        xuantiejian_skill: {
                            equipSkill: true,
                            forced: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.card.nature;
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        yayun_Angel: {
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                var cards = game.createCard2({ name: 'xuantiejian_Angel' });
                                game.cardsGotoOrdering(cards);
                                game.log(player, '将' + get.translation(cards) + '加入弃牌堆');
                            },
                        },
                        juefeng_Angel: {
                            trigger: {
                                player: 'shaBegin',
                            },
                            filter: (event, player) => player.countCards('he') > 0,
                            content() {
                                'step 0';
                                var dis = trigger.target.countCards('he', 'shan') || trigger.target.getEquip('bagua') || trigger.target.countCards('h') > 2;
                                var next = player.chooseToDiscard(get.prompt('juefeng_Angel', trigger.target), true);
                                next.ai = function (card) {
                                    if (dis) return 7 - get.value(card);
                                    return 0;
                                };
                                ('step 1');
                                if (result.bool) {
                                    trigger.directHit = true;
                                }
                            },
                        },
                        puzhu_Angel: {
                            trigger: {
                                player: 'useCard',
                            },
                            derivation: 'yanmie_Angel',
                            juexingji: true,
                            forced: true,
                            filter: (event, player) => event.card.name == 'xuantiejian_Angel',
                            content() {
                                player.gainMaxHp();
                                player.recover();
                                player.addSkill('yanmie_Angel');
                            },
                        },
                        yanmie_Angel: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter: (event, player) => event.filterCard({ name: 'sha', nature: 'fire' }, player, event),
                            viewAs: {
                                name: 'sha',
                                nature: 'fire',
                            },
                            filterCard() {
                                return false;
                            },
                            selectCard: -1,
                            position: 'hes',
                            precontent() {
                                event.parent.addCount = false;
                            },
                            group: 'yanmie_Angel_1',
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.parent.skill == 'yanmie_Angel';
                                    },
                                    content() {
                                        player.getStat('skill').yanmie_Angel--;
                                    },
                                },
                            },
                            ai: {
                                threaten: 10,
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
                                    if (player.hasSkillTag('presha', true, null, true)) return 10;
                                    if (lib.linked.includes(get.nature(item))) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return current != player && current.isLinked() && player.canUse(item, current, null, true) && get.effect(current, item, player, player) > 0 && lib.card.sha.ai.canLink(player, current, item);
                                            }) &&
                                            game.countPlayer(function (current) {
                                                return current.isLinked() && get.damageEffect(current, player, player, get.nature(item)) > 0;
                                            }) > 1
                                        )
                                            return 3.1;
                                        return 3;
                                    }
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
                        qingzhou_Angel: {
                            trigger: {
                                player: 'loseAfter',
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter', 'phaseBefore'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.name == 'phase' && player.countCards('h') != 2) return true;
                                if (event.name != 'phase') {
                                    if (event.name == 'gain' && event.player == player) return player.countCards('h') > 2;
                                    var evt = event.getl(player);
                                    if (!evt || !evt.hs || evt.hs.length == 0 || player.countCards('h') >= 2) return false;
                                    var evt = event;
                                    for (var i = 0; i < 1; i++) {
                                        evt = evt.getParent('qingzhou_Angel');
                                        if (evt.name != 'qingzhou_Angel') return true;
                                    }
                                    return false;
                                }
                                return false;
                            },
                            content() {
                                var num = 2 - player.countCards('h');
                                if (num > 0) player.draw(num);
                                else
                                    player.chooseToDiscard('h', true, -num).set('ai', function (card) {
                                        if (_status.currentPhase == player) {
                                            if (_status.event.filterCard({ name: card.name }, player, _status.event) || card.name == 'tao') return 10;
                                        } else return 7 - get.value(card);
                                    });
                            },
                            ai: {
                                order: 1,
                                save: true,
                                skillTagFilter(player) {
                                    return player.countCards('h') > 0;
                                },
                                result: {
                                    player(player) {
                                        if (player.countCards('h') == 2) {
                                            return 0;
                                        }
                                        return 1;
                                    },
                                },
                            },
                            group: 'qingzhou_Angel_1',
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'useCardEnd',
                                    },
                                    forced: true,
                                    content() {
                                        player.draw();
                                    },
                                },
                            },
                        },
                        huanyue_Angel: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            init: (player) => (player.storage.huanyue_Angel = []),
                            forced: true,
                            filter: (event, player, storage) => player.countCards('h') > 0 && player.storage.huanyue_Angel.length == 0,
                            marktext: '幻影',
                            mark: true,
                            intro: {
                                content(event, player, storage) {
                                    var o = '幻影记录牌:<br><b>';
                                    o += get.translation(player.storage.huanyue_Angel[0]);
                                    o += '</b><br>幻影牌原牌名:';
                                    o += '<br><b>';
                                    o += get.translation(player.storage.huanyue_Angel[1]);
                                    return o;
                                },
                            },
                            content() {
                                'step 0';
                                player.chooseCard('是否发动【幻月】:<br>将一张牌施加幻术', 1, true).set('ai', function (card) {
                                    // AI认为应该选择价值最低的牌
                                    return 7 - get.value(card);
                                });
                                ('step 1');
                                if (result.bool) {
                                    event.cardd = result.cards[0];
                                    var list = [];
                                    for (var i of lib.inpile) {
                                        if (get.type(i) != 'delay') list.add(i);
                                    }
                                    var io = player;
                                    player
                                        .chooseButton([
                                            '选择需要改为的牌名',
                                            [
                                                list.map(function (name) {
                                                    return [get.type(name), '', name];
                                                }),
                                                'vcard',
                                            ],
                                        ])
                                        .set('ai', function (button) {
                                            var player = _status.event.player;
                                            var card = { name: button.link[2], nature: button.link[3] };
                                            if (card.name == 'tao' && player.hp < 3) return 5;
                                            if (card.name == 'wuzhong' && game.countPlayer() > 2 && game.countPlayer() < 5) return 2.9;
                                            else {
                                                if (card.name == 'shunsho' && game.countPlayer() == 2) return 2;
                                                else {
                                                    if (card.name == 'nanman') return 1;
                                                }
                                            }
                                            return 0;
                                        });
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.storage.huanyue_Angel = [event.cardd, event.cardd.name];
                                    event.cardd.name = result.links[0][2];
                                    player.update();
                                }
                            },
                            ai: {
                                threaten: 1.5,
                            },
                            group: 'huanyue_Angel_1',
                            subSkill: {
                                1: {
                                    audio: 2,
                                    trigger: {
                                        global: ['loseAsyncAfter', 'loseAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        for (var i of event.cards) {
                                            if (get.type(i) == 'equip' && event.type == 'use') return false;
                                            if (get.type(i) == 'delay' && event.type == 'use') return false;
                                            return event.cards && get.position(i) == 'd' && player.storage.huanyue_Angel && player.storage.huanyue_Angel[0] == i;
                                        }
                                        return false;
                                    },
                                    preHidden: true,
                                    content() {
                                        for (var i of trigger.cards) {
                                            if (player.storage.huanyue_Angel[0] == i) i.name = player.storage.huanyue_Angel[1];
                                        }
                                        player.draw();
                                        player.storage.huanyue_Angel = [];
                                    },
                                },
                            },
                        },
                        lizheng: {
                            enable: 'phaseUse',
                            content() {
                                var cards = gameDiv.getElementsByClassName('card'); // 获取所有卡牌
                                var cardNum = cards.length; // 卡牌数量
                                var firstCard = null; // 第一张被选中的卡牌
                                var secondCard = null; // 第二张被选中的卡牌
                                // 定义卡牌点击事件
                                function cardClick(event) {
                                    var card = event.target;
                                    if (!card.classList.contains('selected')) {
                                        card.classList.add('selected');
                                        if (firstCard == null) {
                                            firstCard = card;
                                        } else if (secondCard == null) {
                                            secondCard = card;
                                            // 判断是否匹配成功
                                            if (firstCard.getAttribute('name') == secondCard.getAttribute('name')) {
                                                firstCard.style.display = 'none';
                                                secondCard.style.display = 'none';
                                                cardNum -= 2;
                                                if (cardNum == 0) {
                                                    success = true;
                                                }
                                            } else {
                                                setTimeout(function () {
                                                    firstCard.classList.remove('selected');
                                                    secondCard.classList.remove('selected');
                                                    firstCard = null;
                                                    secondCard = null;
                                                }, 500);
                                            }
                                        }
                                    }
                                }
                                // 绑定卡牌点击事件
                                for (var i = 0; i < cardNum; i++) {
                                    cards[i].addEventListener('click', cardClick);
                                }
                                // 定义倒计时函数
                                function countdown() {
                                    var currentTime = new Date().getTime();
                                    var remainingTime = 10 - Math.floor((currentTime - startTime) / 1000);
                                    if (remainingTime >= 0) {
                                        gameDiv.getElementsByClassName('timer')[0].innerHTML = '剩余时间:' + remainingTime + '秒';
                                        setTimeout(countdown, 1000);
                                    } else {
                                        gameDiv.getElementsByClassName('timer')[0].innerHTML = '时间到!';
                                        // 移除卡牌点击事件
                                        for (var i = 0; i < cardNum; i++) {
                                            cards[i].removeEventListener('click', cardClick);
                                        }
                                        if (success) {
                                            player.draw(3);
                                        }
                                        game.resume();
                                    }
                                }
                                // 开始游戏
                                game.pause();
                                countdown();
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player(player) {
                                        if (player.countCards('h') < 2) {
                                            return 0;
                                        }
                                        return 1;
                                    },
                                },
                            },
                        },
                        sancan_Angel: {
                            enable: 'phaseUse',
                            init: (player) => (player.storage.sancan_Angel_times = 0),
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            filterCard(card, player) {
                                var num = ui.selected.cards.length;
                                var times = player.storage.sancan_Angel_times || 0;
                                if (num <= times) {
                                    return true;
                                } else {
                                    return false;
                                }
                            },
                            check(card) {
                                return 4 - get.value(card);
                            },
                            selectCard(card, player) {
                                return [1, Infinity];
                            },
                            position: 'h',
                            prompt: '你可以亮出至多你发动过此技能的次数张手牌并交给一名其他角色,你获得等量的<名>标记',
                            lose: false,
                            discard: false,
                            content() {
                                'step 0';
                                player.storage.sancan_Angel_times = (player.storage.sancan_Angel_times || 0) + 1;
                                var num = cards.length;
                                if (num > 0) {
                                    player.showCards(cards);
                                    target.gain(cards, player, 'give', player);
                                    player.addMark('ming', cards.length);
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                if (player.countMark('ming') > 12) {
                                    player.draw(cards.length);
                                }
                            },
                            ai: {
                                order(skill, player) {
                                    if (player.countCards('h') > 1) {
                                        return 10;
                                    }
                                    return 1;
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
                        ming: {
                            mark: true,
                            intro: {
                                content: '你已获得#枚名标记',
                            },
                        },
                        yuyao_Angel: {
                            intro: {
                                content: '你当前视为装备$',
                            },
                            trigger: {
                                global: 'phaseBegin',
                            },
                            mark: true,
                            forced: true,
                            filter: (event, player) => player.getEquip(2),
                            content() {
                                var list = [];
                                for (var i of lib.inpile) {
                                    if (get.subtype(i) == 'equip2') list.add(i);
                                }
                                if (list.length) {
                                    (player.storage.yuyao_Angel = list.randomGets(1)), event.trigger('yuyao_Angel');
                                    for (var i of lib.card[player.storage.yuyao_Angel[0]].skills) player.addTempSkill(i, 'yuyao_Angel');
                                    player.popup('' + get.translation(player.storage.yuyao_Angel[0]) + '');
                                    game.log('' + get.translation(player) + '获得技能<b>' + get.translation(lib.card[player.storage.yuyao_Angel[0]].skills) + '<b/>');
                                }
                            },
                        },
                        ancha_Angel: {
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.getHistory('damage').length && !event.player.isMin() && event.player != player;
                            },
                            content() {
                                player.draw();
                                var phasePlayerName = _status.currentPhase === player ? '你' : _status.currentPhase.name;
                                game.log('你观看了当前回合角色' + get.translation(phasePlayerName) + '的手牌');
                                player.viewHandcards(_status.currentPhase, true);
                            },
                            ai: {
                                threaten: 3,
                            },
                            group: 'ancha_Angel_1',
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'damageBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.source && event.source != player && !player.isMin() && event.source != _status.currentPhase && player != _status.currentPhase;
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.source) < 0;
                                    },
                                    content() {
                                        trigger.cancel();
                                        player.popup('无效');
                                    },
                                },
                            },
                        },
                        qianmian_Angel: {
                            trigger: {
                                source: 'die',
                            },
                            intro: {
                                content(event, player) {
                                    if (game.zhu == player) return '该技能此身份不可用';
                                    var p = '秘术区<br>';
                                    for (var i of player.storage.qianmian_Angel) {
                                        p += '<b>[<br>武将名称:';
                                        p += get.translation(i[0]);
                                        p += '<b/><br>武将体力值:<b>';
                                        p += i[1];
                                        p += '/';
                                        p += i[2];
                                        p += '<b/><br>武将身份:<b>';
                                        p += get.translation(i[3]);
                                        p += '<b/><br>武将手牌:<b>';
                                        p += get.translation(i[4]);
                                        p += '<br>]<b/>';
                                    }
                                    return p;
                                },
                            },
                            init(player) {
                                if (!player.storage.qianmian_Angel) player.storage.qianmian_Angel = [];
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player && event.player != player && game.zhu != player;
                            },
                            content() {
                                player.storage.qianmian_Angel.add([trigger.player.name, trigger.player.maxHp, trigger.player.maxHp, trigger.player.identity, trigger.player.getCards('h')]);
                                player.addToExpansion(trigger.player.getCards('h'), player, 'giveAuto').gaintag.add('qianmian_Angel');
                                player.markSkill('qianmian_Angel');
                                game.log(player, '将', trigger.player, '的信息保存进了<秘术>');
                            },
                            group: 'qianmian_Angel_change',
                            ai: {
                                threaten: 1.5,
                            },
                            subSkill: {
                                change: {
                                    trigger: {
                                        global: 'phaseBegin',
                                    },
                                    filter(event, player) {
                                        return player.storage.qianmian_Angel && event.player != player && player.storage.qianmian_Angel.length;
                                    },
                                    content() {
                                        'step 0';
                                        var list = [];
                                        var skills = player.storage.qianmian_Angel;
                                        if (!skills.length) {
                                            event.finish();
                                            return;
                                        }
                                        if (player.isUnderControl()) {
                                            game.swapPlayerAuto(player);
                                        }
                                        var switchToAuto = function () {
                                            _status.imchoosing = false;
                                            event._result = {
                                                bool: true,
                                                skills: skills.randomGets(1),
                                            };
                                            if (event.dialog) event.dialog.close();
                                            if (event.control) event.control.close();
                                        };
                                        var chooseButton = function (list, skills) {
                                            var event = _status.event;
                                            if (!event._result) event._result = {};
                                            event._result.skills = [];
                                            var rSkill = event._result.skills;
                                            var dialog = ui.create.dialog('请选择变换的信息', [list, 'character'], 'hidden');
                                            event.dialog = dialog;
                                            var table = document.createElement('div');
                                            table.classList.add('add-setting');
                                            table.style.margin = '0';
                                            table.style.width = '100%';
                                            table.style.position = 'relative';
                                            for (var i = 0; i < skills.length; i++) {
                                                var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                                td.link = skills[i];
                                                table.appendChild(td);
                                                var o = skills[i];
                                                var p = '<b>武将名称:';
                                                p += get.translation(o[0]);
                                                p += '<b/><br>武将体力值:<b>';
                                                p += o[1];
                                                p += '/';
                                                p += o[2];
                                                p += '<b/><br>武将身份:<b>';
                                                p += get.translation(o[3]);
                                                p += '<b/><br>武将手牌:<b>';
                                                p += get.translation(o[4]);
                                                p += '<b/>';
                                                td.innerHTML = '<span>' + p + '</span>';
                                                td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                                    if (_status.dragged) return;
                                                    if (_status.justdragged) return;
                                                    _status.tempNoButton = true;
                                                    setTimeout(function () {
                                                        _status.tempNoButton = false;
                                                    }, 500);
                                                    var link = this.link;
                                                    if (!this.classList.contains('bluebg')) {
                                                        if (rSkill.length >= 1) return;
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
                                            for (var i = 0; i < event.dialog.buttons.length; i++) {
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
                                        ('step 1');
                                        var map = event.result || result;
                                        event.Q = map.skills;
                                        if (map && map.skills && map.skills.length) {
                                            if (player.name2 != undefined) {
                                                player.chooseControl(target.name1, target.name2).set('prompt', '请选择要更换的武将牌');
                                            } else event._result = { control: player.name1 };
                                        } else event.finish();
                                        ('step 2');
                                        if (event.Q && event.Q.length) {
                                            player.storage.qianmian_Angel.add([player.name, player.maxHp, player.hp, player.identity, player.getCards('h')]);
                                            player.addToExpansion(player.getCards('h'), player, 'giveAuto').gaintag.add('qianmian_Angel');
                                            player.markSkill('qianmian_Angel');
                                            game.log(player, '将', player, '的信息保存进了<秘术>');
                                            var k = 0;
                                            for (var i of player.storage.qianmian_Angel) {
                                                if (i == event.Q[0]) {
                                                    k++;
                                                    game.log(player, '使用了<千面>更换了信息');
                                                    player.reinit(result.control, i[0]);
                                                    player.hp = i[2];
                                                    player.maxHp = i[1];
                                                    player.identity = i[3];
                                                    player.showIdentity();
                                                    player.gain(i[4], 'draw');
                                                    player.addSkill('qianmian_Angel');
                                                    player.markSkill('qianmian_Angel');
                                                }
                                            }
                                        }
                                        ('step 3');
                                        player.storage.qianmian_Angel.splice(player.storage.qianmian_Angel.indexOf(event.Q[0]), 1);
                                    },
                                    ai: {
                                        threaten: 3,
                                        order: 5,
                                        result: {
                                            player: 1,
                                        },
                                    },
                                },
                            },
                        },
                        yingmo_Angel: {
                            enable: 'phaseUse',
                            mark: true,
                            intro: {
                                content(event, player) {
                                    var p = '谋者,应时而变<br>此标记为应谋可使用次数<br><b>已使用花色:';
                                    var history = player.getHistory('useCard', function (evt) {
                                        return evt.isPhaseUsing();
                                    });
                                    var suits = [];
                                    for (var i = 0; i < history.length; i++) {
                                        var suit = history[i].card.suit;
                                        if (suit) suits.add(suit);
                                    }
                                    p += get.translation(suits);
                                    p += '<b/>';
                                    return p;
                                },
                                markcount(event, player) {
                                    var history = player.getHistory('useCard', function (evt) {
                                        return evt.isPhaseUsing();
                                    });
                                    var suits = [];
                                    for (var i = 0; i < history.length; i++) {
                                        var suit = history[i].card.suit;
                                        if (suit) suits.add(suit);
                                    }
                                    return (suits.length || 0) - (player.getStat().skill.yingmo_Angel || 0);
                                },
                            },
                            filter(event, player) {
                                var history = player.getHistory('useCard', function (evt) {
                                    return evt.isPhaseUsing();
                                });
                                var suits = [];
                                for (var i = 0; i < history.length; i++) {
                                    var suit = history[i].card.suit;
                                    if (suit) suits.add(suit);
                                }
                                return (player.getStat().skill.yingmo_Angel || 0) < (suits.length || 0);
                            },
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                var cards = get.bottomCards(3);
                                event.cards2 = cards;
                                game.cardsGotoOrdering(cards);
                                var next = player.chooseToMove('应谋:将一张牌置于牌堆顶', true);
                                var list = [['牌堆底', cards]];
                                list.push(['牌堆顶', []]);
                                next.set('list', list); //
                                next.set('selectButton', function (buttons) {
                                    // 设置选择的按钮,即只能选择一张牌
                                    return buttons.slice(0, 1);
                                });
                                next.set('filterOk', function (moved) {
                                    return moved[1].length == 1;
                                });
                                next.set('processAI', function (list) {
                                    var allcards = list[0][1].concat(list[1][1]),
                                        canchoose = allcards.slice(0),
                                        cards = [];
                                    var player = _status.event.player;
                                    var getv = function (button) {
                                        if (
                                            button.name == 'sha' &&
                                            allcards.filter(function (card) {
                                                return (
                                                    card.name == 'sha' &&
                                                    !cards.filter(function () {
                                                        return button == card;
                                                    }).length
                                                );
                                            }).length > player.getCardUsable({ name: 'sha' })
                                        )
                                            return 10;
                                        return -player.getUseValue(button, player);
                                    };
                                    while (cards.length < 2) {
                                        canchoose.sort(function (a, b) {
                                            return getv(b) - getv(a);
                                        });
                                        cards.push(canchoose.shift());
                                    }
                                    return [cards, canchoose];
                                });
                                ('step 2');
                                var top = result.moved[1];
                                var bottom = result.moved[0];
                                top.reverse();
                                for (var i = 0; i < top.length; i++) {
                                    ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                                }
                                for (var i = 0; i < bottom.length; i++) {
                                    ui.cardPile.appendChild(bottom[i]);
                                }
                                player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(bottom.length) + '下');
                                game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
                                game.updateRoundNumber();
                            },
                            ai: {
                                order: 9,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        yacho_Angel: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.source && event.source != player && event.source.isAlive();
                            },
                            content() {
                                'step 0';
                                event.num = Math.min(trigger.num, 9);
                                ('step 1');
                                var att = get.attitude(player, trigger.source);
                                trigger.source.chooseToDiscard('弃置一张牌,否则失去一点体力', 1, 'he').set('ai', function (card) {
                                    if (att > 0) {
                                        return 7 - get.value(card);
                                    } else {
                                        return 11 - get.value(card);
                                    }
                                });
                                ('step 2');
                                if (!result.bool) {
                                    trigger.source.loseHp();
                                }
                                event.num--;
                                if (event.num > 0) {
                                    event.goto(1);
                                }
                            },
                            ai: {
                                maixie: true,
                                effect: {
                                    target(card, player, target) {
                                        if (player.hasSkillTag('jueqing', false, target)) return [1, -1.5];
                                        if (!target.hasFriend()) return;
                                        if (get.tag(card, 'damage')) {
                                            return [1, 0, 0, -0.7];
                                        }
                                    },
                                },
                            },
                        },
                        sheying_Angel: {
                            enable: 'phaseUse',
                            usable: 3,
                            init: (player) => (player.storage.xuni = []),
                            ai: {
                                order: 9,
                                result: {
                                    player(player) {
                                        if (player.countCards('h') <= 1) return 0;
                                        return 1;
                                    },
                                },
                            },
                            content() {
                                'step 0';
                                var cards = get.cards(5);
                                event.cards = cards;
                                var cards1 = get.bottomCards(5);
                                game.log(player, '观看了牌堆顶的' + get.cnNumber(cards.length) + '张牌', '并且观看了牌堆底的' + get.cnNumber(cards1.length) + '张牌');
                                event.cards1 = cards1;
                                var dialog = ['选择要设置的【虚拟】牌'];
                                if (cards.length) {
                                    dialog.push('<div class="text center">牌堆顶</div>');
                                    dialog.push([cards, 'vcard']);
                                }
                                if (cards1.length) {
                                    dialog.push('<div class="text center">牌堆底</div>');
                                    dialog.push([cards1, 'vcard']);
                                }
                                player.chooseButton(dialog, true).set('filterButton', function (button) {
                                    return get.tag(button.link, 'damage') > 0;
                                });
                                ('step 1');
                                if (result.links?.length) {
                                    //QQQ
                                    if (result.links[0].nature) {
                                        var card = game.createCard(result.links[0].name, result.links[0].suit, result.links[0].number, result.links[0].nature);
                                        player.gain(card, 'draw').gaintag.add('虚拟');
                                    } else {
                                        var card = game.createCard(result.links[0].name, result.links[0].suit, result.links[0].number);
                                        player.gain(card, 'draw').gaintag.add('虚拟');
                                    }
                                    player.storage.xuni.add(card);
                                }
                                var top = event.cards;
                                var bottom = event.cards1;
                                top.reverse();
                                for (var i = 0; i < top.length; i++) {
                                    ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                                }
                                for (var i = 0; i < bottom.length; i++) {
                                    ui.cardPile.appendChild(bottom[i]);
                                }
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (player.storage.xuni.map((item) => item.cardid).includes(card.cardid)) return Infinity;
                                },
                            },
                            group: ['sheying_Angel_discard', 'sheying_Angel_damage'],
                            subSkill: {
                                damage: {
                                    trigger: {
                                        source: 'damageBegin',
                                        player: 'damageBegin',
                                    },
                                    _priority: 10,
                                    forced: true,
                                    filter(event, player) {
                                        if (!event.card) return false;
                                        if (event.cards.length) {
                                            for (var i of player.storage.xuni) {
                                                for (var o of event.cards) {
                                                    if (i == o) return true;
                                                }
                                            }
                                        }
                                        return false;
                                    },
                                    content() {
                                        trigger.num = 0;
                                        game.log(trigger.player, '并未受到任何伤害');
                                    },
                                },
                                discard: {
                                    forced: true,
                                    trigger: {
                                        player: ['useCardEnd', 'phaseUseEnd'],
                                    },
                                    filter(event, player) {
                                        if (event.name == 'useCard') {
                                            if (event.cards.length) {
                                                for (var i of player.storage.xuni) {
                                                    for (var o of event.cards) {
                                                        if (i == o) return true;
                                                    }
                                                }
                                            }
                                            return false;
                                        } else return player.storage.xuni.length;
                                    },
                                    content() {
                                        if (trigger.name == 'useCard') {
                                            if (trigger.cards.length) {
                                                for (var i of player.storage.xuni) {
                                                    for (var o of trigger.cards) {
                                                        if (i == o) {
                                                            if (i.name == 'sha') {
                                                                if (trigger.addCount !== false) {
                                                                    trigger.addCount = false;
                                                                    player.getStat().card.sha--;
                                                                }
                                                            }
                                                            o.delete();
                                                            player.storage.xuni.remove(o);
                                                        }
                                                    }
                                                }
                                            }
                                        } else {
                                            game.log('幻化时间结束,销毁<b>', player.storage.xuni, '<b/>');
                                            for (var i of player.storage.xuni) {
                                                i.delete();
                                            }
                                            player.storage.xuni = [];
                                        }
                                    },
                                },
                            },
                        },
                        huanzhang_Angel: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            marktext: '瘴气',
                            filter: (event, player) => player.countCards('h') > 0,
                            content() {
                                player.addToExpansion(player.getCards('h'), player, 'give').gaintag.add('huanzhang_Angel');
                            },
                            group: 'huanzhang_Angel_1',
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: ['damageEnd', 'phaseBegin'],
                                    },
                                    forced: true,
                                    mod: {
                                        targetEnabled(card, player, target, now) {
                                            if (card.name == 'sha' && target.getExpansions('huanzhang_Angel').length) return false;
                                        },
                                    },
                                    filter: (event, player) => player.getExpansions('huanzhang_Angel').length,
                                    content() {
                                        player.gain(player.getExpansions('huanzhang_Angel'), 'draw');
                                        game.log(player, '收回了幻障牌');
                                    },
                                },
                            },
                        },
                        shefu_Angel: {
                            enable: 'phaseUse',
                            usable: 1,
                            position: 'he',
                            audio: 'ext:侠客行:2',
                            filterTarget: (event, player, target) => target != player,
                            filterCard: true,
                            check(card) {
                                return 6 - get.value(card);
                            },
                            discard: false,
                            lose: false,
                            content() {
                                'step 0';
                                // 定义 list 数组,将牌堆中所有牌名添加到其中
                                var list = [];
                                for (var i of lib.inpile) {
                                    list.add(i);
                                }
                                // 玩家选择需要绑定的牌名
                                player
                                    .chooseButton([
                                        '选择与此<符>绑定的牌名',
                                        [
                                            list.map(function (name) {
                                                return [get.type(name), '', name];
                                            }),
                                            'vcard',
                                        ],
                                    ])
                                    .set('ai', function (button) {
                                        // 定义 card 对象,表示当前选择的牌(牌名与属性)
                                        var card = { name: button.link[2], nature: button.link[3] };
                                        if (target.hp > 2 && card.name == 'sha') return 10;
                                        if (target.hp < 2 && card.name == 'tao') return 10;
                                        if (card.name == 'shan') return 10;
                                        return 0;
                                    });
                                ('step 1');
                                // 如果选择的牌是有效的,则将其与目标角色绑定
                                if (result.bool) {
                                    target.addToExpansion(cards, player, 'giveAuto').gaintag.add('shefu_Angel');
                                    if (!target.storage.shefu) {
                                        target.storage.shefu = [];
                                    }
                                    target.storage.shefu.add([result.links[0][2], cards[0]]);
                                }
                            },
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            group: 'shefu_Angel_useCard',
                            subSkill: {
                                useCard: {
                                    trigger: {
                                        global: 'useCard',
                                    },
                                    audio: 'shufu_Angel',
                                    forced: true,
                                    filter(event, player) {
                                        // 遍历被使用牌的角色是否存在绑定关系
                                        if (event.player.storage.shefu) {
                                            for (var i of event.player.storage.shefu) {
                                                // 如果被使用的牌与一种数组内的小数组存在绑定关系
                                                if (i[0] == event.card.name && event.player.getExpansions('shefu_Angel').includes(i[1])) {
                                                    return true;
                                                }
                                            }
                                        }
                                        return false;
                                    },
                                    content() {
                                        // 触发该技能的角色失去一点体力值
                                        trigger.player.loseHp();
                                        // 定义 card 和 cardname 变量,表示被使用的牌
                                        var card;
                                        var cardname;
                                        for (var i of trigger.player.storage.shefu) {
                                            // 如果被使用的牌与数组内小数组存在绑定关系,则记录相关信息
                                            if (i[0] == trigger.card.name && trigger.player.getExpansions('shefu_Angel').includes(i[1])) {
                                                var card = i[1];
                                                var cardname = i[0];
                                            }
                                            trigger.player.storage.shefu.remove([cardname, card]);
                                        }
                                        // 触发该技能的角色将被使用的牌弃置
                                        trigger.player.discard(card);
                                    },
                                },
                            },
                            ai: {
                                order: 8,
                                result: {
                                    target: -1,
                                },
                            },
                        },
                        fugui_Angel: {
                            trigger: {
                                source: 'damageBefore',
                            },
                            forced: true,
                            check() {
                                return false;
                            },
                            content() {
                                trigger.cancel();
                                trigger.player.loseHp(trigger.num);
                            },
                            ai: {
                                jueqing: true,
                            },
                            group: 'fugui_Angel_1',
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    forced: true,
                                    usable: 1,
                                    content() {
                                        trigger.directHit.addArray(game.filterPlayer());
                                    },
                                },
                            },
                        },
                        xuanhu_Angel: {
                            mark: true,
                            intro: {
                                content(event, player) {
                                    var p = '出牌阶段限【' + player.storage.xuanhuskill + '】次<br>';
                                    p += '获得该角色【' + player.storage.xuanhucard + '】张牌<br>';
                                    p += '其回合结束回复【' + player.storage.xuanhurecover + '】点体力值';
                                    return p;
                                },
                            },
                            enable: 'phaseUse',
                            init(player) {
                                player.storage.xuanhuskill = 1;
                                player.storage.xuanhucard = 1;
                                player.storage.xuanhurecover = 1;
                            },
                            filter: (event, player) => (player.getStat().skill.xuanhu_Angel || 0) < player.storage.xuanhuskill,
                            filterTarget(event, player, target) {
                                return target != player && get.distance(player, target) <= 1 && target.countCards('he') > 0;
                            },
                            content() {
                                var list = player.storage.xuanhucard == 1 ? player.storage.xuanhucard : [1, player.storage.xuanhucard];
                                player.gainPlayerCard(target, list, '选择需要获得的牌', true);
                                target.storage.recoverxuanhu = player.storage.xuanhurecover;
                                target.addTempSkill('xuanhu_Angel_1', { player: 'phaseJieshuBegin' });
                            },
                            subSkill: {
                                1: {
                                    onremove(player) {
                                        player.recover(player.storage.recoverxuanhu);
                                    },
                                },
                            },
                            ai: {
                                order: 5,
                                result: {
                                    target(player, target) {
                                        if (target.hp < 2) return 5;
                                        if (player.storage.xuanhucard > 1) return -5;
                                        else return 1;
                                    },
                                },
                            },
                        },
                        renxin_Angel: {
                            trigger: {
                                global: 'dying',
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) < 4) return false;
                                if (
                                    player.countCards('h', function (card) {
                                        var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                        if (mod2 != 'unchanged') return mod2;
                                        var mod = game.checkMod(card, player, event.player, 'unchanged', 'cardSavable', player);
                                        if (mod != 'unchanged') return mod;
                                        var savable = get.info(card).savable;
                                        if (typeof savable == 'function') savable = savable(card, player, event.player);
                                        return savable;
                                    }) >=
                                    1 - event.player.hp
                                )
                                    return false;
                                if (event.player == player || event.player == get.zhu(player)) return true;
                                if (_status.currentPhase && get.damageEffect(_status.currentPhase, player, player) < 0) return false;
                                return !player.hasUnknown();
                            },
                            filter(event, player) {
                                return event.player.hp <= 0 && !player.isTurnedOver() && player.countCards('he') > 0;
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                var hs = player.getCards('he');
                                if (hs.length) player.discard(hs);
                                player.turnOver();
                                ('step 1');
                                var num = 1 - trigger.player.hp;
                                if (num > 0) trigger.player.recover(num);
                            },
                        },
                        jishi_Angel: {
                            trigger: {
                                global: 'recoverEnd',
                            },
                            forced: true,
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            marktext: '功德',
                            content() {
                                'step 0';
                                var card = get.cards(1);
                                player.addToExpansion(card, player, 'give').gaintag.add('jishi_Angel');
                                ('step 1');
                                if (player.getExpansions('jishi_Angel').length == 5 || player.getExpansions('jishi_Angel').length == 15 || player.getExpansions('jishi_Angel').length == 30) {
                                    var choiceList = ['出牌阶段限【' + player.storage.xuanhuskill + '】次', '获得该角色【' + player.storage.xuanhucard + '】张牌', '其回合结束回复【' + player.storage.xuanhurecover + '】点体力值'];
                                    player
                                        .chooseControl()
                                        .set('choiceList', choiceList)
                                        .set('prompt', '选择需要增加的数值')
                                        .set('ai', function () {
                                            var player = _status.event.player;
                                            if (player.storage.xuanhuskill < 2) return 0;
                                            else {
                                                if (player.storage.xuanhurecover < 2) return 1;
                                                else {
                                                    if (player.storage.xuanhucard < 2) return 2;
                                                }
                                            }
                                            return 0;
                                        });
                                }
                                ('step 2');
                                if (result.index == 0) player.storage.xuanhuskill++;
                                if (result.index == 1) player.storage.xuanhucard++;
                                if (result.index == 2) player.storage.xuanhurecover++;
                                if (player.getExpansions('jishi_Angel').length == 40) {
                                    player.gainMaxHp();
                                    player.recover();
                                    player.discard(player.getExpansions('jishi_Angel'));
                                    player.awakenSkill('jishi_Angel');
                                }
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                        },
                        zhongzhao_Angel: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            content() {
                                player.addGedang();
                            },
                        },
                        faxiang_Angel: {
                            trigger: {
                                player: 'damageBegin',
                            },
                            filter: (event, player) => player.hp <= event.num,
                            limited: true,
                            forced: true,
                            content() {
                                player.awakenSkill('faxiang_Angel');
                                trigger.cancel();
                                player.maxHp = player.hp;
                                player.update();
                                lib.character.budongmingwang_Angel = ['male', 'shen', 8, ['shengjie_Angel'], ['ext:侠客行/character/budongmingwang_Angel.jpg']];
                                player.addXinPlayer('budongmingwang_Angel');
                            },
                        },
                        shengjie_Angel: {
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'phaseBegin',
                                    },
                                    forced: true,
                                    content() {
                                        player.loseHp();
                                    },
                                },
                            },
                            group: 'shengjie_Angel_1',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                return player.inRange(target);
                            },
                            selectTarget: [1, 3],
                            content() {
                                'step 0';
                                if (targets[0] == target) {
                                    player.loseHp(2);
                                }
                                ('step 1');
                                target.damage('thunder');
                            },
                        },
                        zhujian_Angel: {
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                lib.card.yuanshijianpei_Angel = {
                                    image: 'ext:侠客行/png/yuanshijianpei_Angel.png',
                                    fullskin: true,
                                    type: 'equip',
                                    subtype: 'equip1',
                                    distance: {
                                        attackFrom: -1,
                                    },
                                    ai: {
                                        order() {
                                            return 10;
                                        },
                                        equipValue(card, player) {
                                            if (player._zhuge_temp) return 1;
                                            player._zhuge_temp = true;
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
                                            delete player._zhuge_temp;
                                            return result;
                                        },
                                        basic: {
                                            equipValue: 5,
                                            order: 5,
                                            useful: 2,
                                            value: 5,
                                        },
                                        tag: {
                                            valueswap: 1,
                                        },
                                        result: {
                                            target(player, target, card) {
                                                return get.equipResult(player, target, card.name);
                                            },
                                        },
                                    },
                                    skills: [],
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
                                };
                                player.Zhujian = {
                                    JIhuo: [],
                                    name: '原始剑胚',
                                    trigger: [],
                                    skills: {},
                                    num: 0,
                                    translate: ' 当前技能为:<br>',
                                    translate1: '暂无',
                                    translate2: '暂无',
                                    translate3: '暂无',
                                    1: '①:',
                                    2: ' ②:',
                                    3: ' ③:',
                                };
                                lib.translate.yuanshijianpei_Angel = player.Zhujian.name;
                                lib.translate.yuanshijianpei_Angel_info = '' + player.Zhujian.translate + '' + player.Zhujian[1] + '' + player.Zhujian.translate1 + '<br>' + player.Zhujian[2] + '' + player.Zhujian.translate2 + '<br>' + player.Zhujian[3] + '' + player.Zhujian.translate3;
                                var card = game.createCard2({ name: 'yuanshijianpei_Angel' });
                                player.Zhujian.card = card;
                                player.markSkill('duanzaoqu');
                                /*var dialog = ui.create.dialog(false);
                                var inputContainer = document.createElement('div');
                                var input = inputContainer.appendChild(document.createElement('input'));
                                dialog.addText('请输入原始剑胚的新名')
                                dialog.add(inputContainer);
                                dialog.open
                                game.pause()
*/
                            },
                            triggerx: {
                                jingong: ['当你使用本回合第一张牌时', '当你使用一张【杀】指定目标后', '当你使用一张非锦囊牌指定一名其他角色后', '当你使用锦囊牌后', '当你造成属性伤害后', '当你造成非属性伤害后', '当你击杀一名角色时', '每轮限一次,当你使用一张牌时', '出牌阶段限一次,当你使用一张基本牌时', '出牌阶段内,当你使用【杀】指定一名角色后', '当你的【杀】被闪避后', '当你使用【杀】造成伤害后', '出牌阶段限一次,当你使用一张锦囊牌时', '当你使用一张【决斗】指定目标后', '当你使用一张【杀】指定一名体力值不大于你且其攻击距离不等于你的一名其他角色时', '当你使用一张【杀】指定一名体力值大于你且其攻击距离不等于你的一名其他角色时', '当你使用一张【杀】指定一名体力值小于你且其攻击距离不等于你的一名其他角色时', '当你使用一张【杀】指定一名攻击范围内有你的角色时', '当你使用一张【杀】指定一名攻击范围内没有你的角色时'],
                                jingong_daima: {
                                    当你使用本回合第一张牌时: {
                                        trigger: {
                                            player: 'useCard',
                                        },
                                        usable: 1,
                                    },
                                    '当你使用【杀】指定目标后': {
                                        trigger: {
                                            player: 'useCardToPlayered',
                                        },
                                        filter(event, player) {
                                            return event.card.name == 'sha';
                                        },
                                    },
                                    当你使用一张非锦囊牌指定一名其他角色后: {
                                        trigger: {
                                            player: 'useCardToPlayered',
                                        },
                                        filter(event, player) {
                                            return event.card.name == 'sha' && event.target != player && get.type(event.card);
                                        },
                                    },
                                    当你使用锦囊牌后: {
                                        trigger: {
                                            player: 'useCardEnd',
                                        },
                                        filter(event, player) {
                                            return get.type(event.card) == 'trick';
                                        },
                                    },
                                    当你造成属性伤害后: {
                                        trigger: {
                                            source: 'damageEnd',
                                        },
                                        filter: (event, player) => event.nature,
                                    },
                                    当你造成非属性伤害后: {
                                        trigger: {
                                            source: 'damageEnd',
                                        },
                                        filter: (event, player) => !event.nature,
                                    },
                                    当你击杀一名角色时: {
                                        trigger: {
                                            source: 'die',
                                        },
                                    },
                                    '每轮限一次,当你使用一张牌时': {
                                        round: 1,
                                        trigger: {
                                            player: 'useCard',
                                        },
                                    },
                                    '出牌阶段限一次,当你使用一张基本牌时': {
                                        usable: 1,
                                        trigger: {
                                            player: 'useCard',
                                        },
                                        filter: (event, player) => get.type(event.card) == 'basic',
                                    },
                                    '出牌阶段内,当你使用【杀】指定一名角色后': {
                                        trigger: {
                                            player: 'useCardToTarget',
                                        },
                                        filter(event, player) {
                                            if (!player.isPhaseUsing()) return false;
                                            return event.card.name == 'sha';
                                        },
                                    },
                                    '当你的【杀】被闪避后': {
                                        trigger: {
                                            player: 'shaMiss',
                                        },
                                    },
                                    '当你使用【杀】造成伤害后': {
                                        trigger: {
                                            source: 'damageSource',
                                        },
                                        filter(event, player) {
                                            return event.parent == 'sha';
                                        },
                                    },
                                    '出牌阶段限一次,当你使用一张锦囊牌时': {
                                        usable: 1,
                                        trigger: {
                                            player: 'useCard',
                                        },
                                        filter(event, player) {
                                            if (!player.isPhaseUsing()) return false;
                                            return get.type(event.card) == 'trick';
                                        },
                                    },
                                    '当你使用一张【决斗】指定目标后': {
                                        trigger: {
                                            player: 'useCardToTarget',
                                        },
                                        filter(event, player) {
                                            if (!player.isPhaseUsing()) return false;
                                            return event.card.name == 'juedou';
                                        },
                                    },
                                    '当你使用一张【杀】指定一名体力值不大于你且其攻击距离不等于你的一名其他角色时': {
                                        trigger: {
                                            player: 'useCardToTarget',
                                        },
                                        filter(event, player) {
                                            if (event.target.hp > player.hp) return false;
                                            if (event.target.getAttackRange() == player.getAttackRange()) return false;
                                            return event.card.name == 'sha';
                                        },
                                    },
                                    '当你使用一张【杀】指定一名体力值大于你且其攻击距离不等于你的一名其他角色时': {
                                        trigger: {
                                            player: 'useCardToTarget',
                                        },
                                        filter(event, player) {
                                            if (event.target.hp <= player.hp) return false;
                                            if (event.target.getAttackRange() == player.getAttackRange()) return false;
                                            return event.card.name == 'sha';
                                        },
                                    },
                                    '当你使用一张【杀】指定一名体力值小于你且其攻击距离不等于你的一名其他角色时': {
                                        trigger: {
                                            player: 'useCardToTarget',
                                        },
                                        filter(event, player) {
                                            if (event.target.hp >= player.hp) return false;
                                            if (event.target.getAttackRange() == player.getAttackRange()) return false;
                                            return event.card.name == 'sha';
                                        },
                                    },
                                    '当你使用一张【杀】指定一名攻击范围内有你的角色时': {
                                        trigger: {
                                            player: 'useCardToTarget',
                                        },
                                        filter(event, player) {
                                            if (!event.target.inRange(player)) return false;
                                            return event.card.name == 'sha';
                                        },
                                    },
                                    '当你使用一张【杀】指定一名攻击范围内没有你的角色时': {
                                        trigger: {
                                            player: 'useCardToTarget',
                                        },
                                        filter(event, player) {
                                            if (event.target.inRange(player)) return false;
                                            return event.card.name == 'sha';
                                        },
                                    },
                                },
                                fangyu: ['准备阶段开始时', '准备阶段结束时', '准备阶段时', '判定阶段开始时', '判定阶段结束时', '出牌阶段开始时', '每轮限一次,一名角色的准备阶段开始时', '每轮限一次,一名角色的判定阶段开始时', '每轮限一次,一名角色的出牌阶段开始时', '每轮限一次,一名角色的弃牌阶段开始时', '每轮限一次,一名角色的结束阶段开始时', '当你受到一点伤害时', '每轮限一次,当一名角色受到一点伤害时', '每局限一次,当你进入濒死状态时', '当你失去一点体力时', '当你失去一次体力时', '当你受到一次伤害时', '每轮限一次,当你失去最后一张手牌时'],
                                fangyu_daima: {
                                    准备阶段开始时: {
                                        trigger: { player: 'phaseZhunbeiBegin' },
                                    },
                                    准备阶段结束时: {
                                        trigger: { player: 'phaseZhunbeiEnd' },
                                    },
                                    准备阶段时: {
                                        trigger: { player: 'phaseZhunbei' },
                                    },
                                    判定阶段开始时: {
                                        trigger: { player: 'phaseJudgeBegin' },
                                    },
                                    判定阶段结束时: {
                                        trigger: { player: 'phaseJudgeEnd' },
                                    },
                                    出牌阶段开始时: {
                                        trigger: { player: 'phaseUseBegin' },
                                    },
                                    '每轮限一次,一名角色的准备阶段开始时': {
                                        round: 1,
                                        trigger: { global: 'phaseZhunbeiBegin' },
                                    },
                                    '每轮限一次,一名角色的判定阶段开始时': {
                                        round: 1,
                                        trigger: { global: 'phaseJudgeBegin' },
                                    },
                                    '每轮限一次,一名角色的出牌阶段开始时': {
                                        round: 1,
                                        trigger: { global: 'phaseUseBegin' },
                                    },
                                    '每轮限一次,一名角色的弃牌阶段开始时': {
                                        round: 1,
                                        trigger: { global: 'phaseDiscardBegin' },
                                    },
                                    '每轮限一次,一名角色的结束阶段开始时': {
                                        round: 1,
                                        trigger: { global: 'phaseJieshuBegin' },
                                    },
                                    当你受到一点伤害时: {
                                        trigger: { player: 'damageBegin4' },
                                        filter(event, player) {
                                            return event.num > 0;
                                        },
                                        subnum: 'trigger.num',
                                    },
                                    '每轮限一次,当一名角色受到一点伤害时': {
                                        trigger: { global: 'damageBegin4' },
                                        round: 1,
                                    },
                                    '每局限一次,当你进入濒死状态时': {
                                        trigger: { player: 'dying' },
                                        xinding: true,
                                    },
                                    当你失去一点体力时: {
                                        trigger: { player: 'loseHp' },
                                        filter(event, player) {
                                            return event.num > 0;
                                        },
                                        subnum: 'trigger.num',
                                    },
                                    当你失去一次体力时: {
                                        trigger: { player: 'loseHp' },
                                    },
                                    当你受到一次伤害时: {
                                        trigger: { player: 'damageBegin4' },
                                    },
                                    '每轮限一次,当你失去最后一张手牌时': {
                                        round: 1,
                                        trigger: {
                                            player: 'loseAfter',
                                            global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                                        },
                                        filter(event, player) {
                                            if (player.countCards('h')) return false;
                                            var evt = event.getl(player);
                                            return evt && evt.player == player && evt.hs && evt.hs.length;
                                        },
                                    },
                                },
                                zhudong: [
                                    '出牌阶段限一次',
                                    '每轮限一次,当你需要使用或打出一张牌时',
                                    '每轮限一次,当一名角色濒死状态时',
                                    '每轮限一次,出牌阶段内',
                                    '每轮限一次,当你拼点时',
                                    '每轮限一次,当你需要选择牌时',
                                    '出牌阶段限两次',
                                    // '每轮限两次,出牌阶段内',
                                    // '每轮限两次,当你拼点时',
                                    '每回合限一次,当一名角色濒死状态时',
                                    '出牌阶段内限一次,你可以弃置所有手牌',
                                ],
                                zhudong_daima: {
                                    出牌阶段限一次: {
                                        enable: 'phaseUse',
                                        usable: 1,
                                    },
                                    '每轮限一次,当你需要使用或打出一张牌时': {
                                        round: 1,
                                        enable: ['chooseToUse', 'chooseToRespond'],
                                    },
                                    '每轮限一次,当一名角色濒死状态时': {
                                        //吐槽:分明是濒死求桃时
                                        round: 1,
                                        enable: 'chooseToUse',
                                        filter(event, player) {
                                            if (event.type == 'dying') {
                                                return true;
                                            }
                                            return false;
                                        },
                                    },
                                    '每轮限一次,出牌阶段内': {
                                        enable: 'phaseUse',
                                        round: 1,
                                    },
                                    '每轮限一次,当你拼点时': {
                                        enable: 'chooseCard',
                                        filter(event) {
                                            return event.type == 'compare' && !event.directresult;
                                        },
                                    },
                                    '每轮限一次,当你需要选择牌时': {
                                        enable: 'chooseCard',
                                    },
                                    出牌阶段限两次: {
                                        enable: 'phaseUse',
                                        usable: 2,
                                    },
                                    // '每轮限两次,出牌阶段内':{},
                                    // '每轮限两次,当你拼点时':{},
                                    '每回合限一次,当一名角色濒死状态时': {
                                        usable: 1,
                                        enable: 'chooseToUse',
                                        filter(event, player) {
                                            if (event.type == 'dying') {
                                                return true;
                                            }
                                            return false;
                                        },
                                    },
                                    '出牌阶段内限一次,你可以弃置所有手牌': {
                                        enable: 'phaseUse',
                                        usable: 1,
                                        filter(event, player) {
                                            return player.countCards('h') > 0;
                                        },
                                        position: 'h',
                                        selectCard: -1,
                                        filterCard: true,
                                    },
                                },
                                xiaoguo: ['摸一张牌', '回复体力至一点', '若有来源,则来源受到一点伤害', '若当前回合为你的回合,则你摸一张牌', '你可以选择一名其他角色,令其选择是否交给你一张牌,若其交给了你牌,则其回复一点体力值', '若你有牌,则你弃置一张牌并回复一点体力值', '你失去一点体力值并摸两张牌', '若你手牌中有杀,则你可以重铸一张杀,令你本回合下一张基本牌执行数值+1', '你可以弃置任意张牌,并摸等量的牌', '若你为来源,则你获得目标一张牌', '若有来源且你不为来源,则你摸一张牌', '将手牌摸至体力值,若摸牌数大于2则失去一点体力值', '将体力值回复至满,并失去一点体力上限', '摸两张牌并弃置一张牌', '弃置任意张牌,并选择一名其他角色,令其弃置等量的牌', '弃置任意张牌,并选择一名其他角色,令其摸等量的牌', '若有目标,且此技能不是关于伤害的时机,则对其造成一点伤害'],
                                xiaoguo_daima: {
                                    摸一张牌: {
                                        content() {
                                            'step 0';
                                            event.count = eval(lib.skill[event.name].subnum) || 1;
                                            ('step 1');
                                            event.count--;
                                            player.draw();
                                            ('step 2');
                                            if (event.count > 0) {
                                                player.chooseBool(get.prompt2(event.name));
                                            } else event.finish();
                                            ('step 3');
                                            if (result.bool) {
                                                event.goto(1);
                                            }
                                        },
                                    },
                                    回复体力至一点: {
                                        content() {
                                            'step 0';
                                            event.count = eval(lib.skill[event.name].subnum) || 1;
                                            ('step 1');
                                            event.count--;
                                            if (player.hp < 1) {
                                                player.recover(1 - player.hp);
                                            }
                                            ('step 2');
                                            if (event.count > 0) {
                                                player.chooseBool(get.prompt2(event.name));
                                            } else event.finish();
                                            ('step 3');
                                            if (result.bool) {
                                                event.goto(1);
                                            }
                                        },
                                    },
                                    '若有来源,则来源受到一点伤害': {
                                        content() {
                                            'step 0';
                                            event.count = eval(lib.skill[event.name].subnum) || 1;
                                            ('step 1');
                                            event.count--;
                                            var sou = trigger.source || source;
                                            if (sou) {
                                                sou.damage('nocard');
                                            }
                                            ('step 2');
                                            if (event.count > 0) {
                                                player.chooseBool(get.prompt2(event.name));
                                            } else event.finish();
                                            ('step 3');
                                            if (result.bool) {
                                                event.goto(1);
                                            }
                                        },
                                    },
                                    '若当前回合为你的回合,则你摸一张牌': {
                                        content() {
                                            'step 0';
                                            event.count = eval(lib.skill[event.name].subnum) || 1;
                                            ('step 1');
                                            event.count--;
                                            if (_status.currentPhase == player) player.draw();
                                            ('step 2');
                                            if (event.count > 0) {
                                                player.chooseBool(get.prompt2(event.name));
                                            } else event.finish();
                                            ('step 3');
                                            if (result.bool) {
                                                event.goto(1);
                                            }
                                        },
                                    },
                                    '你可以选择一名其他角色,令其选择是否交给你一张牌,若其交给了你牌,则其回复一点体力值': {
                                        content() {
                                            'step 0';
                                            event.count = eval(lib.skill[event.name].subnum) || 1;
                                            ('step 1');
                                            event.count--;
                                            ('step 2');
                                            player.chooseTarget(1).set('prompt', '请选择一名其他角色,令其选择是否选择交给你一张牌<br>若其交给你牌,则其回复一点体力.'); //ai自己补吧
                                            ('step 3');
                                            if (result.targets) {
                                                event.tar = result.targets[0];
                                                result.targets[0].chooseCard().set('prompt', '是否交给' + get.translation(player) + '一张牌,回复一点体力？'); //ai自己补吧
                                            } else event.finish();
                                            ('step 4');
                                            if (result.cards) {
                                                event.tar.give(result.cards, player);
                                                event.tar.recover();
                                            }
                                            ('step 5');
                                            if (event.count > 0) {
                                                player.chooseBool(get.prompt2(event.name));
                                            } else event.finish();
                                            ('step 6');
                                            if (result.bool) {
                                                event.goto(1);
                                            }
                                        },
                                    },
                                    '若你有牌,则你弃置一张牌并回复一点体力值': {
                                        content() {
                                            'step 0';
                                            event.count = eval(lib.skill[event.name].subnum) || 1;
                                            ('step 1');
                                            event.count--;
                                            if (player.countDiscardableCards(player, 'he')) {
                                                player.chooseToDiscard('he', true);
                                                player.recover();
                                            }
                                            ('step 2');
                                            if (event.count > 0) {
                                                player.chooseBool(get.prompt2(event.name));
                                            } else event.finish();
                                            ('step 3');
                                            if (result.bool) {
                                                event.goto(1);
                                            }
                                        },
                                    },
                                    你失去一点体力值并摸两张牌: {
                                        content() {
                                            'step 0';
                                            event.count = eval(lib.skill[event.name].subnum) || 1;
                                            ('step 1');
                                            event.count--;
                                            player.loseHp();
                                            player.draw(2);
                                            ('step 2');
                                            if (event.count > 0) {
                                                player.chooseBool(get.prompt2(event.name));
                                            } else event.finish();
                                            ('step 3');
                                            if (result.bool) {
                                                event.goto(1);
                                            }
                                        },
                                    },
                                    '若你手牌中有杀,则你可以重铸一张杀,令你本回合下一张基本牌执行数值+1': {
                                        content() {
                                            'step 0';
                                            event.count = eval(lib.skill[event.name].subnum) || 1;
                                            ('step 1');
                                            event.count--;
                                            ('step 2');
                                            if (player.countCards('h', 'sha')) {
                                                player.chooseCard('h', function (card) {
                                                    return card.name == 'sha';
                                                });
                                            }
                                            ('step 3');
                                            if (result.bool) {
                                                var cards = result.cards[0];
                                                player.loseToDiscardpile(cards);
                                                player.draw();
                                            }
                                            ('step 4');
                                            player.addTempSkill('North_damageUp_Angel');
                                            ('step 5');
                                            if (event.count > 0) {
                                                player.chooseBool(get.prompt2(event.name));
                                            } else event.finish();
                                            ('step 6');
                                            if (result.bool) {
                                                event.goto(1);
                                            }
                                        },
                                    },
                                    '你可以弃置任意张牌,并摸等量的牌': {
                                        content() {
                                            'step 0';
                                            event.count = eval(lib.skill[event.name].subnum) || 1;
                                            ('step 1');
                                            event.count--;
                                            ('step 2');
                                            if (player.countDiscardableCards(player, 'he')) {
                                                player.chooseToDiscard('he', [1, Infinity]);
                                            }
                                            ('step 3');
                                            if (result.cards) {
                                                player.draw(result.cards.length);
                                            }
                                            ('step 4');
                                            if (event.count > 0) {
                                                player.chooseBool(get.prompt2(event.name));
                                            } else event.finish();
                                            ('step 5');
                                            if (result.bool) {
                                                event.goto(1);
                                            }
                                        },
                                    },
                                    '若你为来源,则你获得目标一张牌': {
                                        content() {
                                            'step 0';
                                            event.count = eval(lib.skill[event.name].subnum) || 1;
                                            ('step 1');
                                            event.count--;
                                            var tar = trigger.target || target;
                                            var sou = trigger.source || source;
                                            if (player == sou && tar) {
                                                player.gainPlayerCard(trigger.target, true, 'he', 'visibleMove');
                                            }
                                            ('step 2');
                                            if (event.count > 0) {
                                                player.chooseBool(get.prompt2(event.name));
                                            } else event.finish();
                                            ('step 3');
                                            if (result.bool) {
                                                event.goto(1);
                                            }
                                        },
                                    },
                                    '若有来源且你不为来源,则你摸一张牌': {
                                        content() {
                                            'step 0';
                                            event.count = eval(lib.skill[event.name].subnum) || 1;
                                            ('step 1');
                                            event.count--;
                                            var sou = trigger.source || source;
                                            if (sou && player != sou) {
                                                player.draw();
                                            }
                                            ('step 2');
                                            if (event.count > 0) {
                                                player.chooseBool(get.prompt2(event.name));
                                            } else event.finish();
                                            ('step 3');
                                            if (result.bool) {
                                                event.goto(1);
                                            }
                                        },
                                    },
                                    '将手牌摸至体力值,若摸牌数大于2则失去一点体力值': {
                                        content() {
                                            'step 0';
                                            event.count = eval(lib.skill[event.name].subnum) || 1;
                                            ('step 1');
                                            event.count--;
                                            ('step 2');
                                            if (player.countCards('h') < player.hp) {
                                                event.num = player.hp - player.countCards('h');
                                                player.draw(event.num);
                                            }
                                            ('step 3');
                                            if (event.num > 2) {
                                                player.loseHp();
                                            }
                                            ('step 4');
                                            if (event.count > 0) {
                                                player.chooseBool(get.prompt2(event.name));
                                            } else event.finish();
                                            ('step 5');
                                            if (result.bool) {
                                                event.goto(1);
                                            }
                                        },
                                    },
                                    '将体力值回复至满,并失去一点体力上限': {
                                        content() {
                                            'step 0';
                                            event.count = eval(lib.skill[event.name].subnum) || 1;
                                            ('step 1');
                                            event.count--;
                                            player.recover(player.damageHp);
                                            player.loseMaxHp();
                                            ('step 2');
                                            if (event.count > 0) {
                                                player.chooseBool(get.prompt2(event.name));
                                            } else event.finish();
                                            ('step 3');
                                            if (result.bool) {
                                                event.goto(1);
                                            }
                                        },
                                    },
                                    摸两张牌并弃置一张牌: {
                                        content() {
                                            'step 0';
                                            event.count = eval(lib.skill[event.name].subnum) || 1;
                                            ('step 1');
                                            event.count--;
                                            ('step 2');
                                            player.draw(2);
                                            ('step 3');
                                            if (player.countDiscardableCards(player, 'he')) {
                                                player.chooseToDiscard('he', true);
                                            }
                                            ('step 4');
                                            if (event.count > 0) {
                                                player.chooseBool(get.prompt2(event.name));
                                            } else event.finish();
                                            ('step 5');
                                            if (result.bool) {
                                                event.goto(1);
                                            }
                                        },
                                    },
                                    '弃置任意张牌,并选择一名其他角色,令其弃置等量的牌': {
                                        content() {
                                            'step 0';
                                            event.count = eval(lib.skill[event.name].subnum) || 1;
                                            ('step 1');
                                            event.count--;
                                            ('step 2');
                                            if (player.countDiscardableCards(player, 'he')) {
                                                player.chooseCardTarget({
                                                    position: 'he',
                                                    filterTarget(card, player, target) {
                                                        return target != player;
                                                    },
                                                    ai1(card) {
                                                        return 6 - get.value(card);
                                                    },
                                                    ai2(target) {
                                                        return get.attitude(_status.event.player, target) - 3;
                                                    },
                                                    selectCard: [1, Infinity],
                                                    prompt: get.prompt2('North_ssx_lieyuanxx'),
                                                });
                                            }
                                            ('step 3');
                                            if (result.cards) {
                                                player.discard(result.cards);
                                                reslut.targets[0].chooseToDiscard(result.cards.length, true, 'he');
                                            }
                                            ('step 4');
                                            if (event.count > 0) {
                                                player.chooseBool(get.prompt2(event.name));
                                            } else event.finish();
                                            ('step 5');
                                            if (result.bool) {
                                                event.goto(1);
                                            }
                                        },
                                    },
                                    '弃置任意张牌,并选择一名其他角色,令其摸等量的牌': {
                                        content() {
                                            'step 0';
                                            event.count = eval(lib.skill[event.name].subnum) || 1;
                                            ('step 1');
                                            event.count--;
                                            ('step 2');
                                            if (player.countDiscardableCards(player, 'he')) {
                                                player.chooseCardTarget({
                                                    position: 'he',
                                                    filterTarget(card, player, target) {
                                                        return target != player;
                                                    },
                                                    ai1(card) {
                                                        return 6 - get.value(card);
                                                    },
                                                    ai2(target) {
                                                        return get.attitude(_status.event.player, target) - 3;
                                                    },
                                                    selectCard: [1, Infinity],
                                                    prompt: get.prompt2('North_ssx_lieyuanxx'),
                                                });
                                            }
                                            ('step 3');
                                            if (result.cards) {
                                                player.discard(result.cards);
                                                reslut.targets[0].draw(result.cards.length);
                                            }
                                            ('step 4');
                                            if (event.count > 0) {
                                                player.chooseBool(get.prompt2(event.name));
                                            } else event.finish();
                                            ('step 5');
                                            if (result.bool) {
                                                event.goto(1);
                                            }
                                        },
                                    },
                                    '若有目标,且此技能不是关于伤害的时机,则对其造成一点伤害': {
                                        content() {
                                            'step 0';
                                            event.count = eval(lib.skill[event.name].subnum) || 1;
                                            ('step 1');
                                            event.count--;
                                            var tar = trigger.target || target;
                                            if (tar) {
                                                if (trigger.name != 'damage') {
                                                    tar.damage('nocard');
                                                }
                                            }
                                            ('step 2');
                                            if (event.count > 0) {
                                                player.chooseBool(get.prompt2(event.name));
                                            } else event.finish();
                                            ('step 3');
                                            if (result.bool) {
                                                event.goto(1);
                                            }
                                        },
                                    },
                                },
                            },
                            group: ['zhujian_Angel_trigger', 'zhujian_Angel_content'],
                            subSkill: {
                                trigger: {
                                    trigger: {
                                        player: 'dyingAfter',
                                        source: 'die',
                                        global: 'roundStart',
                                    },
                                    forced: true,
                                    filter(event, player, name) {
                                        if (!player.Zhujian) return false;
                                        if (!player.Zhujian.card) return false;
                                        if (name == 'dyingAfter' && !player.Zhujian.trigger.includes(name)) {
                                            return true;
                                        } else {
                                            if (name == 'die' && !player.Zhujian.trigger.includes(name)) {
                                                return true;
                                            } else {
                                                if (name == 'roundStart' && !player.Zhujian.trigger.includes(name) && game.roundNumber == 3) {
                                                    return true;
                                                }
                                            }
                                        }
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        if (trigger.name == 'die') {
                                            player.Zhujian.trigger.add('die');
                                            var list = lib.skill.zhujian_Angel.triggerx.jingong.randomGets(3);
                                            event.Q = 'jingong';
                                            player.chooseControl().set('choiceList', list);
                                        } else if (trigger.name == 'dying') {
                                            player.Zhujian.trigger.add('dyingAfter');
                                            var list = lib.skill.zhujian_Angel.triggerx.fangyu.randomGets(3);
                                            event.Q = 'fangyu';
                                            player.chooseControl().set('choiceList', list);
                                        } else {
                                            player.Zhujian.trigger.add('roundStart');
                                            var list = lib.skill.zhujian_Angel.triggerx.zhudong.randomGets(3);
                                            event.Q = 'zhudong';
                                            player.chooseControl().set('choiceList', list);
                                        }
                                        event.list = list;
                                        ('step 1');
                                        player.Zhujian.num++;
                                        var transaction = event.list[result.index];
                                        player.Zhujian['translate' + player.Zhujian.num] = '' + transaction;
                                        lib.translate.yuanshijianpei_Angel_info = '' + player.Zhujian.translate + '' + player.Zhujian[1] + '' + player.Zhujian.translate1 + '<br>' + player.Zhujian[2] + '' + player.Zhujian.translate2 + '<br>' + player.Zhujian[3] + '' + player.Zhujian.translate3;
                                        lib.skill['jianpei' + player.Zhujian.num] = {};
                                        player.Zhujian.skills['jianpei' + player.Zhujian.num] = lib.skill.zhujian_Angel.triggerx[event.Q + '_daima'][transaction];
                                        lib.translate['jianpei' + player.Zhujian.num] = '' + player.Zhujian.name + '技能' + player.Zhujian.num;
                                        lib.translate['jianpei' + player.Zhujian.num + '_info'] = player.Zhujian['translate' + player.Zhujian.num];
                                        player.recover(3 - player.hp);
                                        player.Zhujian.JIhuo.add('jianpei' + player.Zhujian.num);
                                    },
                                },
                                content: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!player.Zhujian) return false;
                                        if (!player.Zhujian.card) return false;
                                        return player.Zhujian.JIhuo.length;
                                    },
                                    content() {
                                        'step 0';
                                        if (player.Zhujian.JIhuo.length == 1) {
                                            var list = lib.skill.zhujian_Angel.triggerx.xiaoguo.randomGets(3);
                                            event.list = list;
                                            var pattern = /(\d)\D*$/;
                                            var str = player.Zhujian.JIhuo[0];
                                            var num = pattern.exec(str);
                                            player
                                                .chooseControl()
                                                .set('choiceList', list)
                                                .set('prompt', '发动【铸剑】为【' + lib.translate[player.Zhujian.JIhuo[0]] + '】指定一个技能效果<br>当前技能的时机为' + player.Zhujian['translate' + num[1]]);
                                        } else {
                                            var list = [];
                                            if (player.Zhujian.translate1 != '暂无') list.add(player.Zhujian.translate1);
                                            if (player.Zhujian.translate2 != '暂无') list.add(player.Zhujian.translate2);
                                            if (player.Zhujian.translate3 != '暂无') list.add(player.Zhujian.translate3);
                                            player.chooseControl().set('choiceList', list).set('prompt', '选择【铸剑】需要增加技能效果的时机');
                                        }
                                        ('step 1');
                                        if (result.control) {
                                            if (event.list) {
                                                var transaction = event.list[result.index];
                                                var pattern = /(\d)\D*$/;
                                                var str = player.Zhujian.JIhuo[0];
                                                var num = pattern.exec(str);
                                                player.Zhujian.skills['jianpei' + num[1]] = { ...player.Zhujian.skills['jianpei' + num[1]], ...lib.skill.zhujian_Angel.triggerx.xiaoguo_daima[transaction] };
                                                player.Zhujian['translate' + num[1]] += ',' + transaction;
                                                lib.translate.yuanshijianpei_Angel_info = '' + player.Zhujian.translate + '' + player.Zhujian[1] + '' + player.Zhujian.translate1 + '<br>' + player.Zhujian[2] + '' + player.Zhujian.translate2 + '<br>' + player.Zhujian[3] + '' + player.Zhujian.translate3;
                                                lib.translate['jianpei' + num[1] + '_info'] += player.Zhujian['translate' + player.Zhujian.num];
                                                player.Zhujian.JIhuo.remove(player.Zhujian.JIhuo[0]);
                                                for (var i in player.Zhujian.skills) {
                                                    if (lib.skill[i]) {
                                                        lib.skill[i] = player.Zhujian.skills[i];
                                                        lib.card.yuanshijianpei_Angel.skills.add(i);
                                                    }
                                                }
                                                if (lib.card.yuanshijianpei_Angel.skills.length == 3) {
                                                }
                                                event.finish();
                                            } else {
                                                var list = lib.skill.zhujian_Angel.triggerx.xiaoguo.randomGets(3);
                                                event.list = list;
                                                event.number = result.index;
                                                player
                                                    .chooseControl()
                                                    .set('choiceList', list)
                                                    .set('prompt', '发动【铸剑】为【' + lib.translate[player.Zhujian.JIhuo[result.index]] + '】指定一个技能效果<br>当前技能的时机为<br>' + player.Zhujian['translate' + result.index]);
                                            }
                                        }
                                        ('step 2');
                                        if (result.control) {
                                            if (event.list) {
                                                var transaction = event.list[result.index];
                                                var pattern = /(\d)\D*$/;
                                                var str = player.Zhujian.JIhuo[event.number];
                                                var num = pattern.exec(str);
                                                player.Zhujian.skills['jianpei' + num[1]] = { ...player.Zhujian.skills['jianpei' + num[1]], ...lib.skill.zhujian_Angel.triggerx.xiaoguo_daima[transaction] };
                                                player.Zhujian['translate' + num[1]] += ',' + transaction;
                                                lib.translate.yuanshijianpei_Angel_info = '' + player.Zhujian.translate + '' + player.Zhujian[1] + '' + player.Zhujian.translate1 + '<br>' + player.Zhujian[2] + '' + player.Zhujian.translate2 + '<br>' + player.Zhujian[3] + '' + player.Zhujian.translate3;
                                                lib.translate['jianpei' + num[1] + '_info'] += player.Zhujian['translate' + player.Zhujian.num];
                                                player.Zhujian.JIhuo.remove(player.Zhujian.JIhuo[event.number]);
                                                for (var i in player.Zhujian.skills) {
                                                    if (lib.skill[i]) {
                                                        lib.skill[i] = player.Zhujian.skills[i];
                                                        lib.card.yuanshijianpei_Angel.skills.add(i);
                                                    }
                                                }
                                                event.finish();
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        duanzaoqu: {
                            mark: true,
                            marktext: '锻造区',
                            intro: {
                                mark(dialog, event, player) {
                                    if (player.Zhujian.card) {
                                        dialog.addText('锻造区卡牌<br>');
                                        dialog.addSmall(player.Zhujian.card);
                                        dialog.addText('<br>右键单击卡牌则可以查看具体信息');
                                    } else {
                                        dialog.addText('暂无卡牌');
                                    }
                                },
                            },
                        },
                        North_damageUp_Angel: {
                            trigger: { player: 'useCard' },
                            filter(event, player) {
                                if (!event.baseDamage) return false;
                                return get.type(event.card) == 'basic' && !player.storage.xinzhanyi_basic1;
                            },
                            forced: true,
                            silent: true,
                            popup: false,
                            content() {
                                if (!trigger.baseDamage) trigger.baseDamage = 1;
                                trigger.baseDamage++;
                                player.storage.xinzhanyi_basic1 = true;
                                player.removeSkill('North_damageUp_Angel');
                            },
                            mark: true,
                            marktext: '剑',
                            intro: {
                                content: '下次使用基本牌效果加一',
                            },
                        },
                        lingyong_Angel: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (!player.Zhujian) return false;
                                if (!player.Zhujian.card) return false;
                                return true;
                            },
                            content() {
                                player.recover(2);
                                player.gain(player.Zhujian.card, 'draw', 'log');
                                delete player.Zhujian.card;
                            },
                            group: 'lingyong_Angel_1',
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'dying',
                                    },
                                    filter(event, player) {
                                        if (!player.Zhujian) return false;
                                        if (!player.Zhujian.card) return false;
                                        return true;
                                    },
                                    content() {
                                        player.recover(2);
                                        player.gain(player.Zhujian.card, 'draw', 'log');
                                        delete player.Zhujian.card;
                                    },
                                },
                            },
                        },
                        shuihuan_Angel: {
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                var card = game.createCard2({ name: 'stone_zhongshi_stonecharacter' });
                                player.gain(card, 'draw');
                            },
                        },
                    },
                    translate: {
                        // 武将名
                        seti_Angel: '瑟提',
                        laigebao_Angel: '赖格宝',
                        shangguangonque_Angel: '上官宫阙',
                        budongmingwang_Angel: '不动明王',
                        xuan_Angel: '玄',
                        lvcheng_Angel: '吕秤',
                        sunya_Angel: '孙哑',
                        songyao_Angel: '宋耀',
                        huangqinguoqie: '皇亲国戚',
                        yishilvren: '番外(异世旅人篇)<br>需任务解锁对应角色',
                        yiguozhijub: '一国之君',
                        sanrenyeshi: '散人野士',
                        guanchangfengyun: '官场风云',
                        xuanxia_Angel: '玄夏',
                        zhangqingjing_Angel: '张清净',
                        songxing_Angel: '宋星',
                        xuamabao_Angel: '玄马鸨',
                        jiangxin_Angel: '江心',
                        sunyan_Angel: '孙晏',
                        shenxin_Angel: '沈昕',
                        kugu_Angel: '枯骨',
                        //技能
                        jixie_Angel: '机械',
                        jixie_Angel_info: '锁定技,游戏开始时,你获得4点格挡值.你的格挡值无命门且无上限.当你格挡值为0时你将自己移出游戏.',
                        haoyi_Angel: '豪意',
                        haoyi_Angel_info: '当你格挡伤害后,若此时你的<豪意>标记数量小于4,则你获得一枚<豪意>标记.',
                        hongquan_Angel: '轰拳',
                        hongquan_Angel_info: '每三轮限一次,出牌阶段内,你可以选择一名你与其距离为1的角色,对其造成X点伤害,随后对其上家和下家的其他角色造成Y点伤害,且你获得Z点格挡值.如此做,此技能结束时,你移除所有<豪意>.(X为1+你的豪意值标记数量/2(向下取整) Y为X-(2/X(向上取整))且至少为0.Z为你的豪意标记数量-1且至少为1)',
                        shuihuan_Angel: '水幻',
                        shuihuan_Angel_info: '准备阶段开始时,你可以将任意张牌扣置与武将牌上,称之为<水魂>.每轮每种水灵限一次,若需要召唤的水灵未存在与场上,则出牌阶段内,你可以释放【龙灵】(需3张水魂),【虎灵】(需2张水魂),【鹰灵】(需2张水魂),你的回合外,当你即将受到伤害时,你可以释放【熊灵】(需所有水魂且至少为1).',
                        lingyong_Angel: '灵涌',
                        lingyong_Angel_info: '出牌阶段内/当你进入濒死状态时,你可以将【锻造区】内的牌拿出,并回复两点体力值.',
                        zhujian_Angel: '铸剑',
                        zhujian_Angel_info: '锁定技,游戏开始时,你将一张【原始剑胚】置入【锻造区】.当你击杀一名角色/脱离濒死状态/获得剑胚后的第三轮后(每个时机仅限触发一次),你为【锻造区】内剑胚指定一个【进攻类/防御类/主动类】技能时机(特定时机三选一).在指定时机后,你将体力值回复至三点.若你的【锻造区】内【剑胚】有未指定效果的技能,则在你回合开始时,则你为一个未指定技能效果的技能时机指定一个技能效果(为铸剑技能效果库内三选一).若所有技能均指定完毕,则你可以为此【原始剑胚】定义一个名字.',
                        duanzaoqu: '锻造区',
                        shengjie_Angel: '圣戒',
                        shengjie_Angel_info: '出牌阶段限一次,你可以失去两点体力值并对至多三名距离内角色造成一点雷电伤害.每名角色回合开始时失去一点体力值.',
                        faxiang_Angel: '法相',
                        faxiang_Angel_info: '限定技,当你即将受到致命伤害时,你免疫此伤害并将体力上限改为当前体力值,并获得【不动明王】作为附属角色.',
                        gedang_mark: '格挡值',
                        XinPlayer_mark: '附属角色',
                        zhongzhao_Angel: '钟罩',
                        zhongzhao_Angel_info: '回合结束时,你可以获得一点格挡值.',
                        fanjiao_Angel: '反剿',
                        fanjiao_Angel_info: '你的回合外,当你受到伤害后,你可以将所有手牌当做【杀】对伤害来源使用,若此【杀】造成了伤害,则你摸与此【杀】实体牌等量的牌.',
                        yanzhen_Angel: '严阵',
                        yanzhen_Angel_info: '结束阶段开始时,若你<精兵>牌数不大于3,则你可以将任意张点数相邻且与<精兵>所有牌点数均不同的牌置于武将牌上,称之为<精兵>.当你成为其他角色使用【杀】或普通锦囊牌的目标时,你可以弃置<精兵>中一张点数最小的牌并令此牌对你无效,随后进行一次判定,若判定牌点数不大于弃置牌点数,则你获得此判定牌.',
                        jishi_Angel: '济世',
                        jishi_Angel_info: '锁定技,当场上角色回复体力值时,你将牌堆顶一张牌置于武将牌上称之为<功德>.当你<功德>数到达5、15、30档位时,你将【悬壶】【】内的一个数字+1.当你<功德>数为40时,则你增加一点体力上限并回复一点体力值,随后弃置所有<功德>牌,此技能本局游戏内失效.',
                        renxin_Angel: '仁心',
                        renxin_Angel_info: '一名角色进入濒死状态后,你可以弃置所有牌(需至少有一张)并翻面(需正面朝上),令其回复至1点体力值.',
                        xuanhu_Angel: '悬壶',
                        xuanhu_Angel_info: '出牌阶段限【1】次,你可以获得一名与你距离为一的其他角色至多【1】(最少为1)张牌并令其于其回合结束时回复【1】点体力值.',
                        qiji: '奇计',
                        qiji_info: '每轮限一次,当你受到伤害后或当你使用装备牌后,你可以移动场上一张牌并摸一张牌.当你进入濒死状态时,若你正面朝上,则你可以弃置所有牌,回复一点体力值并翻面.',
                        yice: '遗策',
                        yice_info: '当你死亡后,若弃牌堆有牌,则你可以选择其中一张牌交给一名其他角色,若如此做,其增加一点体力上限并回复一点体力值.',
                        xuantiejian_skill: '玄铁剑',
                        xuantiejian_skill_info: '锁定技,当你使用属性【杀】造成伤害后,你令此【杀】伤害+1.',
                        yayun_Angel: '涯陨',
                        yayun_Angel_info: '锁定技,游戏开始时,你将一张【玄铁剑】加入游戏并置入弃牌堆.',
                        juefeng_Angel: '绝锋',
                        juefeng_Angel_info: '当你使用一张【杀】指定一名角色后,你可以弃置一张牌并令此【杀】无法响应.',
                        puzhu_Angel: '浦珠',
                        puzhu_Angel_info: '觉醒技,当你使用【玄铁剑】后,你获得一点体力上限并回复一点体力值,并获得技能【湮灭】.',
                        yanmie_Angel: '湮灭',
                        yanmie_Angel_info: '出牌阶段限一次,若你武器栏有【玄铁剑】,则你可以视为使用一张不计入出牌阶段次数的【火杀】,若此【杀】造成了伤害,则将此技能本回合使用次数+1.',
                        fugui_Angel: '伏鬼',
                        fugui_Angel_info: '锁定技,你造成伤害均视为体力流失.你每回合使用的第一张牌不可被响应.',
                        shefu_Angel: '设符',
                        shefu_Angel_info: '出牌阶段限一次,你可以选择一名角色并将一张牌置于其武将牌上称为<符箓>,为此<符箓>指定一个牌名.当一名角色使用与其符箓记录牌名相同牌名牌时,其失去一点体力值并移除对应<符箓>.',
                        huanzhang_Angel: '幻障',
                        huanzhang_Angel_info: '你的回合结束时,你可以将所有手牌置于武将牌上称之为<瘴气>.当你受到伤害后或你的回合开始时,若你武将牌上有<瘴气>,则你获得<瘴气>牌.你武将牌上有<瘴气>牌时,你不能被其他角色使用【杀】指定.',
                        sheying_Angel: '设影',
                        sheying_Angel_info: '出牌阶段限三次, 你可以观看牌堆顶和牌堆底各五张牌,并选择一张带有伤害标签的牌,复制至手牌,并称之为< 虚拟>.当你使用牌时,若其对应实体牌中有< 虚拟>牌,则此牌伤害为0,你的<虚拟>无次数限制,并且不计入次数限制,若此牌进入弃牌堆后或者你出牌阶段结束后移除.',
                        yacho_Angel: '睚仇',
                        yacho_Angel_info: '锁定技,当你受到一点伤害后,你令伤害来源弃置一张牌,否则其失去一点体力值.',
                        yingmo_Angel: '应谋',
                        yingmo_Angel_info: '出牌阶段限X次,你可以摸一张牌并观看牌堆底三张牌,并选择一张置于牌堆顶.(X为本回合内你使用过的牌的花色数)',
                        ancha_Angel: '暗查',
                        ancha_Angel_info: '每名其他角色回合结束时,若本回合内你未受到伤害,你可以摸一张牌并观看其手牌.当你于回合外受到伤害时,若伤害来源不为当前回合角色,则此伤害无效.',
                        qianmian_Angel: '千面',
                        qianmian_Angel_info: '非主公技,当你击杀一名角色后,你可以将其的武将牌 体力值(为其体力上限) 身份牌与其区域内所有的牌计为一套信息保存进<秘术>内.其他角色回合开始时,你可以将<秘术>中的信息与你信息更换并将你的信息置入<秘术>区.',
                        yuyao_Angel: '昱耀',
                        yuyao_Angel_info: '锁定技,每回合开始时,若你防具栏有牌,则你视为装备一张随机防具牌直到再次发动此技能时.',
                        ming: '名',
                        sancan_Angel: '散财',
                        sancan_Angel_info: '出牌阶段限一次,你可以亮出至多X张手牌并交给一名其他角色.如此做,你获得等量的<名>标记,且若你的<名>标记大于12,则你摸与本次给出牌数量等量的牌.(X为你发动过技能的次数且至少为1)',
                        qingzhou_Angel: '轻舟',
                        qingzhou_Angel_info: '锁定技,你的手牌数恒为2,且当你使用一张牌后,你摸一张牌.',
                        huanyue_Angel: '幻月',
                        huanyue_Angel_info: '准备阶段,若场上没有<幻影>牌,你可以将一张手牌的牌名改为任意一张非延迟锦囊牌的牌名并称之为<幻影>,当<幻影>牌置入弃牌堆后,你将此牌牌名改为原牌名,并摸一张牌.',
                        North_damageUp_Angel: '增益',
                    },
                };
                for (var i in 侠客行.character) {
                    侠客行.character[i][4].push('ext:侠客行/character/' + i + '.jpg');
                }
                lib.config.all.characters.add('侠客行');
                lib.config.characters.add('侠客行');
                lib.translate.侠客行_character_config = '侠客行';
                return 侠客行;
            });
            lib.onover.push((resultbool) => {
                game.VictoryVoice('VictoryVoice/' + localStorage.getItem('VictoryVoice') + '.mp3');
            });
            var styleyi = document.createElement('style');
            styleyi.innerHTML = '.player .identity[data-color="yi_xkx"],';
            styleyi.innerHTML += 'div[data-nature="yi_xkx"],';
            styleyi.innerHTML += 'span[data-nature="yi_xkx"] {text-shadow: black 0 0 1px,rgba(128,0,128) 0 0 2px,rgba(139,0,139) 0 0 5px,rgba(139,0,139) 0 0 10px,rgba(139,0,139) 0 0 10px}';
            styleyi.innerHTML += 'div[data-nature="yi_xkxm"],';
            styleyi.innerHTML += 'span[data-nature="yi_xkxm"] {text-shadow: black 0 0 1px,rgba(128,0,128) 0 0 2px,rgba(139,0,139) 0 0 5px,rgba(139,0,139) 0 0 5px,rgba(139,0,139) 0 0 5px,black 0 0 1px;}';
            styleyi.innerHTML += 'div[data-nature="yi_xkxmm"],';
            styleyi.innerHTML += 'span[data-nature="yi_xkxmm"] {text-shadow: black 0 0 1px,rgba(128,0,128) 0 0 2px,rgba(139,0,139) 0 0 2px,rgba(139,0,139) 0 0 2px,rgba(139,0,139) 0 0 2px,black 0 0 1px;}';
            var stylejun = document.createElement('style');
            stylejun.innerHTML = '.player .identity[data-color="jun_xkx"],';
            stylejun.innerHTML += 'div[data-nature="jun_xkx"],';
            stylejun.innerHTML += 'span[data-nature="jun_xkx"] {text-shadow: black 0 0 1px,rgba(255,215,0) 0 0 2px,rgba(255,215,0) 0 0 5px,rgba(255,215,0) 0 0 10px,rgba(255,215,0) 0 0 10px}';
            stylejun.innerHTML += 'div[data-nature="jun_xkxm"],';
            stylejun.innerHTML += 'span[data-nature="jun_xkxm"] {text-shadow: black 0 0 1px,rgba(255,215,0) 0 0 2px,rgba(255,215,0) 0 0 5px,rgba(255,215,0) 0 0 5px,rgba(255,215,0) 0 0 5px,black 0 0 1px;}';
            stylejun.innerHTML += 'div[data-nature="jun_xkxmm"],';
            stylejun.innerHTML += 'span[data-nature="jun_xkxmm"] {text-shadow: black 0 0 1px,rgba(255,215,0) 0 0 2px,rgba(255,215,0) 0 0 2px,rgba(255,215,0) 0 0 2px,rgba(255,215,0) 0 0 2px,black 0 0 1px;}';
            var styleguan = document.createElement('style');
            styleguan.innerHTML = '.player .identity[data-color="guan_xkx"],';
            styleguan.innerHTML += 'div[data-nature="guan_xkx"],';
            styleguan.innerHTML += 'span[data-nature="guan_xkx"] {text-shadow: black 0 0 1px,rgba(127,255,212) 0 0 2px,rgba(127,255,212) 0 0 5px,rgba(127,255,212) 0 0 10px,rgba(127,255,212) 0 0 10px}';
            styleguan.innerHTML += 'div[data-nature="guan_xkxm"],';
            styleguan.innerHTML += 'span[data-nature="guan_xkxm"] {text-shadow: black 0 0 1px,rgba(127,255,212) 0 0 2px,rgba(127,255,212) 0 0 5px,rgba(127,255,212) 0 0 5px,rgba(127,255,212) 0 0 5px,black 0 0 1px;}';
            styleguan.innerHTML += 'div[data-nature="guan_xkxmm"],';
            styleguan.innerHTML += 'span[data-nature="guan_xkxmm"] {text-shadow: black 0 0 1px,rgba(127,255,212) 0 0 2px,rgba(127,255,212) 0 0 2px,rgba(127,255,212) 0 0 2px,rgba(127,255,212) 0 0 2px,black 0 0 1px;}';
            var styleye = document.createElement('style');
            styleye.innerHTML = '.player .identity[data-color="ye_xkx"],';
            styleye.innerHTML += 'div[data-nature="ye_xkx"],';
            styleye.innerHTML += 'span[data-nature="ye_xkx"] {text-shadow: black 0 0 1px,rgba(192,192,192) 0 0 2px,rgba(192,192,192) 0 0 5px,rgba(192,192,192) 0 0 10px,rgba(192,192,192) 0 0 10px}';
            styleye.innerHTML += 'div[data-nature="ye_xkxm"],';
            styleye.innerHTML += 'span[data-nature="ye_xkxm"] {text-shadow: black 0 0 1px,rgba(192,192,192) 0 0 2px,rgba(192,192,192) 0 0 5px,rgba(192,192,192) 0 0 5px,rgba(192,192,192) 0 0 5px,black 0 0 1px;}';
            styleye.innerHTML += 'div[data-nature="ye_xkxmm"],';
            styleye.innerHTML += 'span[data-nature="ye_xkxmm"] {text-shadow: black 0 0 1px,rgba(192,192,192) 0 0 2px,rgba(192,192,192) 0 0 2px,rgba(192,192,192) 0 0 2px,rgba(192,192,192) 0 0 2px,black 0 0 1px;}';
            document.head.appendChild(styleye);
            document.head.appendChild(styleyi);
            document.head.appendChild(stylejun);
            document.head.appendChild(styleguan);
            lib.group.push('yi_xkx');
            lib.translate.yi_xkx = '异';
            lib.group.push('jun_xkx');
            lib.translate.jun_xkx = '君';
            lib.group.push('ye_xkx');
            lib.translate.ye_xkx = '野';
            lib.group.push('guan_xkx');
            lib.translate.guan_xkx = '官';
            lib.groupnature.yi_xkx = 'yi_xkx';
            lib.groupnature.jun_xkx = 'jun_xkx';
            lib.groupnature.guan_xkx = 'guan_xkx';
            lib.groupnature.ye_xkx = 'ye_xkx';
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
            game.import('card', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '侠客行',
                    connect: true,
                    card: {
                        xuantiejian_Angel: {
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -2,
                            },
                            ai: {
                                basic: {
                                    equipValue: 3,
                                    order: 3,
                                    useful: 2,
                                    value: 3,
                                },
                                result: {
                                    target(player, target, card) {
                                        return get.equipResult(player, target, card.name);
                                    },
                                },
                            },
                            skills: ['xuantiejian_skill'],
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
                    },
                    translate: {
                        xuantiejian_Angel: '玄铁剑',
                        xuantiejian_Angel_info: '锁定技,当你使用属性【杀】造成伤害后,你令此【杀】伤害+1.',
                    },
                };
                for (const i in QQQ.card) {
                    const info = QQQ.card[i];
                    lib.inpile.add(i);
                    if (info.mode && !info.mode.includes(lib.config.mode)) continue;
                    lib.card.list.push([lib.suits.randomGet(), lib.number.randomGet(), i]);
                }
                lib.config.all.cards.add('侠客行');
                lib.config.cards.add('侠客行');
                lib.translate.侠客行_card_config = '侠客行';
                return QQQ;
            });
        },
        config: {
            Jizhixiangjie: {
                name: '<span class="yellowtext">查看新机制规则</span><span style="color: #AFEEEE"><font size="3px">展开</font></span>',
                clear: true,
                onclick() {
                    if (this.help == undefined) {
                        var log = ["<span class='yellowtext'>格挡值:</span><span style='color: #FFFFFF'><b>格挡值的上限为3,当你受到伤害时,你消耗一点格挡值抵消伤害</b><br></span></span><span style='color: #9370DB'>游戏开始时,你会随机定义一个伤害类牌名称之为<命门>,当你的格挡值抵消<命门>牌名造成的伤害时,你会损失所有格挡值并失去一点体力值<br>你的格挡值命门在暴露之前仅可以自己看见.暴露后所有角色均可见</span>", "<span class='yellowtext'>附属角色:</span><span style='color: #FFFFFF'><b>当你拥有附属角色后,你的主角色回合结束时会选择切换武将成一个附属角色并额外执行一个新的回合(如果仅有一个附属角色则无需选择),当你附属角色回合结束时,你可切换回主角色</b><br></span></span><span style='color: #9370DB'>当你附属角色的体力值清零后,你强制切换回主角色并移除当前附属角色</span>"];
                        var more = ui.create.div('.help', '<div style="border:2px solid gray"><P align=left>' + log.join('<br>') + '</P>');
                        this.parentNode.insertBefore(more, this.nextSibling);
                        this.help = more;
                        this.innerHTML = '<span class="yellowtext">查看新机制规则</span><span style="color: #AFEEEE"><font size="3px">关闭</font></span>';
                    } else {
                        this.parentNode.removeChild(this.help);
                        delete this.help;
                        this.innerHTML = '<span class="yellowtext">查看新机制规则</span><span style="color: #AFEEEE"><font size="3px">展开</font></span>';
                    }
                },
            },
        },
        package: {
            intro: "<p style='color: rgb(210,210,000); font-size:12px; line-height:14px; text-shadow: 0 0 8px black;'>作者QQ 3371152010<br>作者:Angel <br>代码撰写:Angel与Angel</p><b>同时Angel也是一个长期的代码接单手</b><br><img style=width:250px src=extension/侠客行/Angel_1.jpg><br><img style=width:250px src=extension/侠客行/Angel_2.jpg><br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
            author: 'Angel',
            version: '1.0',
        },
    };
});
