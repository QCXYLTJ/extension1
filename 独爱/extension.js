import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '独爱',
        content(config, pack) {
            //技能修改
            lib.skill.mashu = {
                mod: {
                    globalFrom(from, to, distance) {
                        return distance - 1;
                    },
                },
                usable: 1,
                trigger: {
                    player: ['useCard', 'respond'],
                },
                forced: true,
                filter(event, player) {
                    return event.card && event.card.name == 'sha';
                },
                content() {
                    player.draw();
                },
            };
            lib.translate.mashu_info = '锁定技,一. 你距离其他角色-1.<br/>二. 每回合限一次,你使用或打出【杀】时,摸1张牌.';
        },
        precontent() {
            game.import('character', function () {
                var duai = {
                    name: 'duai',
                    connect: true,
                    characterSort: {
                        duai: {},
                    },
                    character: {
                        sy_caomao: ['male', 'wei', 3, ['sy_suhui'], ['ext:独爱/image/sy_caomao.jpg', 'zhu']],
                        ua_ganning: ['male', 'wu', 4, ['ua_qixi'], ['ext:独爱/image/甘宁.jpg']],
                        ua_diaochan: ['female', 'qun', 3, ['ua_lijian', 'ua_biyue'], ['ext:独爱/image/貂蝉.jpg']],
                        ua_liuxie: ['male', 'qun', 3, ['ua_tianming', 'ua_mizhao'], ['ext:独爱/image/刘协.jpg']],
                        ua_zhanghe: ['male', 'wei', 4, ['ua_qiaobian'], ['ext:独爱/image/张郃.jpg']],
                        ua_weiyan: ['male', 'shu', 4, ['ua_kuanggu', 'ua_qimou'], ['ext:独爱/image/魏延.jpg']],
                        ua_zhangfei: ['male', 'shu', 4, ['ua_paoxiao'], ['ext:独爱/image/张飞.jpg']],
                        ua_huangzu: ['male', 'qun', 4, ['ua_jinggong', 'ua_xiaojuan'], ['ext:独爱/image/黄祖.jpg']],
                        ua_zhangmiao: ['male', 'qun', 4, ['ua_mouni', 'ua_zongfan'], ['ext:独爱/image/张邈.jpg']],
                        ua_guanyu: ['male', 'shu', 4, ['ua_wusheng', 'ua_yijue'], ['ext:独爱/image/关羽.jpg']],
                        ua_shen_taishici: ['male', 'shen', 4, ['ua_dulie', 'ua_powei', 'ua_tiandan'], ['ext:独爱/image/神太史慈.jpg']],
                        ua_luxun: ['male', 'wu', 3, ['ua_qianxun', 'ua_lianying'], ['ext:独爱/image/陆逊.jpg']],
                        ua_machao: ['male', 'shu', 4, ['ua_tieqi', 'mashu'], ['ext:独爱/image/马超.jpg']],
                        ua_xiahouyuan: ['male', 'wei', 4, ['ua_shensu'], ['ext:独爱/image/夏侯渊.jpg']],
                        ua_zhouyu: ['male', 'wu', 3, ['ua_yingzi', 'ua_fanjian'], ['ext:独爱/image/周瑜.jpg']],
                        ua_sunqian: ['male', 'shu', 3, ['ua_qianya', 'ua_shuimeng'], ['ext:独爱/image/孙乾.jpg']],
                        ua_simayi: ['male', 'wei', 3, ['ua_guicai', 'ua_fankui'], ['ext:独爱/image/司马懿.jpg']],
                        ua_sunjian: ['male', 'wu', 4, ['ua_yinghun'], ['ext:独爱/image/孙坚.jpg']],
                        ua_bianfuren: ['female', 'wei', 3, ['ua_fuwei', 'ua_yuejian'], ['ext:独爱/image/卞夫人.jpg']],
                        ua_caoang: ['male', 'wei', 4, ['ua_kangkai'], ['ext:独爱/image/曹昂.jpg']],
                        ua_sunce: ['male', 'wu', 4, ['ua_jiang', 'ua_hunzi', 'ua_zhiba'], ['ext:独爱/image/孙策.jpg']],
                        ua_caohong: ['male', 'wei', 4, ['ua_yuanhu'], ['ext:独爱/image/曹洪.jpg']],
                        ua_caoren: ['male', 'wei', 4, ['ua_kuiwei', 'ua_jiewei'], ['ext:独爱/image/曹仁.jpg']],
                        ua_caoxiu: ['male', 'wei', 4, ['ua_qianju', 'ua_qingxi'], ['ext:独爱/image/曹休.jpg']],
                        ua_caozhang: ['male', 'wei', 4, ['ua_jiangchi'], ['ext:独爱/image/曹彰.jpg']],
                        ua_sp_caiwenji: ['female', 'wei', 3, ['ua_mozhi', 'ua_chenqing'], ['ext:独爱/image/魏蔡文姬.jpg']],
                        ua_caorui: ['male', 'wei', 3, ['ua_huituo', 'ua_mingjian', 'ua_xingshuai'], ['ext:独爱/image/曹叡.jpg', 'zhu']],
                        ua_caozhi: ['male', 'wei', 3, ['ua_luoying', 'ua_jiushi'], ['ext:独爱/image/曹植.jpg']],
                        ua_caopi: ['male', 'wei', 3, ['ua_xingshang', 'ua_fangzhu', 'ua_songwei'], ['ext:独爱/image/曹丕.jpg', 'zhu']],
                        ua_chenqun: ['male', 'wei', 3, ['ua_pindi', 'ua_faen'], ['ext:独爱/image/陈群.jpg']],
                        ua_dengai: ['male', 'wei', 4, ['ua_tuntian', 'ua_zaoxian'], ['ext:独爱/image/邓艾.jpg']],
                        ua_dianwei: ['male', 'wei', 4, ['ua_qiangxi'], ['ext:独爱/image/典韦.jpg']],
                        ua_caojinyu: ['female', 'wei', 3, ['ua_yuqi', 'ua_xianjing'], ['ext:独爱/image/曹金玉.jpg']],
                        ua_caocao: ['male', 'wei', 4, ['ua_xionglue', 'ua_hujia'], ['ext:独爱/image/曹操.jpg']],
                        ua_guohuai: ['male', 'wei', 4, ['ua_jingce'], ['ext:独爱/image/郭淮.jpg']],
                        ua_guanqiujian: ['male', 'wei', 4, ['ua_zhengrong', 'ua_hongju'], ['ext:独爱/image/毌丘俭.jpg']],
                        ua_caimao: ['male', 'wei', 4, ['ua_lianzhou', 'ua_jinglian'], ['ext:独爱/image/蔡瑁.jpg']],
                        ua_yujin: ['male', 'wei', 4, ['ua_zhenjun'], ['ext:独爱/image/于禁.jpg']],
                        ua_guojia: ['male', 'wei', 3, ['ua_chouyun', 'ua_yiji'], ['ext:独爱/image/郭嘉.jpg']],
                        ua_guohuanghou: ['female', 'wei', 3, ['ua_jiaozhao', 'ua_danxin'], ['ext:独爱/image/郭皇后.jpg']],
                        ua_caoanmin: ['male', 'wei', 4, ['ua_xianwei'], ['ext:独爱/image/曹安民.jpg']],
                        ua_caomao: ['male', 'wei', 3, ['ua_qianlong', 'ua_fensi', 'ua_juetao', 'ua_zhushi'], ['ext:独爱/image/曹髦.jpg']],
                        ua_zhangliao: ['male', 'wei', 4, ['ua_tuxi', 'ua_zhengbing'], ['ext:独爱/image/张辽.jpg']],
                        ua_caochong: ['male', 'wei', 3, ['ua_chengxiang', 'ua_renxin'], ['ext:独爱/image/曹冲.jpg']],
                        ua_chengyu: ['male', 'wei', 3, ['ua_shefu', 'ua_benyu'], ['ext:独爱/image/程昱.jpg']],
                        ua_caochun: ['male', 'wei', 4, ['ua_shanjia'], ['ext:独爱/image/曹纯.jpg']],
                        ua_caoying: ['female', 'wei', 4, ['ua_lingren', 'ua_fujian'], ['ext:独爱/image/曹婴.jpg']],
                        ua_caozhen: ['male', 'wei', 4, ['ua_sidi'], ['ext:独爱/image/曹真.jpg']],
                        ua_xunyu: ['male', 'wei', 3, ['ua_quhu', 'ua_jieming'], ['ext:独爱/image/荀彧.jpg']],
                        ua_xiahoudun: ['male', 'wei', 4, ['ua_ganglie', 'ua_fenyong'], ['ext:独爱/image/夏侯惇.jpg']],
                        ua_zhangchunhua: ['female', 'wei', 3, ['ua_jueqing', 'ua_shangshi'], ['ext:独爱/image/张春华.jpg']],
                        ua_zhenji: ['female', 'wei', 3, ['ua_luoshen', 'ua_qingguo'], ['ext:独爱/image/甄姬.jpg']],
                        ua_zhonghui: ['male', 'wei', 4, ['ua_quanji', 'ua_paiyi'], ['ext:独爱/image/钟会.jpg']],
                        ua_caiyang: ['male', 'wei', 4, ['ua_xunji', 'ua_jiaofeng'], ['ext:独爱/image/蔡阳.jpg']],
                        ua_zhangchangpu: ['female', 'wei', 3, ['ua_yanjiao', 'ua_xingshen'], ['ext:独爱/image/张昌蒲.jpg']],
                        ua_xinxianying: ['female', 'wei', 3, ['ua_zhongjian', 'ua_caishi'], ['ext:独爱/image/辛宪英.jpg']],
                        ua_yangxiu: ['male', 'wei', 3, ['ua_danlao', 'ua_jilei'], ['ext:独爱/image/杨修.jpg']],
                        ua_duji: ['male', 'wei', 3, ['ua_andong', 'ua_yingshi'], ['ext:独爱/image/杜畿.jpg']],
                        ua_lidian: ['male', 'wei', 3, ['ua_xunxun', 'ua_wangxi'], ['ext:独爱/image/李典.jpg']],
                        ua_xuhuang: ['male', 'wei', 4, ['ua_duanliang'], ['ext:独爱/image/徐晃.jpg']],
                        ua_xuchu: ['male', 'wei', 4, ['ua_luoyi'], ['ext:独爱/image/许褚.jpg']],
                        ua_xizhicai: ['male', 'wei', 3, ['ua_tiandu', 'ua_xianfu', 'ua_chouce'], ['ext:独爱/image/戏志才.jpg']],
                        ua_wangyi: ['male', 'wei', 4, ['ua_zhenlie', 'ua_miji'], ['ext:独爱/image/王异.jpg']],
                        ua_zhongyao: ['male', 'wei', 3, ['ua_huomo', 'ua_zuoding'], ['ext:独爱/image/钟繇.jpg']],
                        ua_zhuling: ['male', 'wei', 4, ['ua_zhanyi'], ['ext:独爱/image/朱灵.jpg']],
                        ua_zhouxuan: ['male', 'wei', 3, ['ua_wumei', 'ua_zhanmeng'], ['ext:独爱/image/周宣.jpg']],
                        ua_chenlin: ['male', 'wei', 3, ['ua_bifa', 'ua_songci'], ['ext:独爱/image/陈琳.jpg']],
                        ua_bianxi: ['male', 'wei', 4, ['ua_dunxi'], ['ext:独爱/image/卞喜.jpg']],
                        ua_caizhenji: ['female', 'wei', 3, ['ua_sheyi', 'ua_tianyin'], ['ext:独爱/image/蔡贞姬.jpg']],
                        ua_caohua: ['female', 'wei', 3, ['ua_caiyi', 'ua_guili'], ['ext:独爱/image/曹华.jpg']],
                        ua_cuiyan: ['male', 'wei', 3, ['ua_yawang', 'ua_xunzhi'], ['ext:独爱/image/崔琰.jpg']],
                        ua_huaxin: ['male', 'wei', 3, ['ua_wanggui', 'ua_xibing'], ['ext:独爱/image/华歆.jpg']],
                        ua_caozhao: ['male', 'wei', 4, ['ua_fuzuan', 'ua_chongqi'], ['ext:独爱/image/曹肇.jpg']],
                        ua_zhugedan: ['male', 'wei', 4, ['ua_gongao', 'ua_juyi'], ['ext:独爱/image/诸葛诞.jpg']],
                        ua_chenjiao: ['male', 'wei', 3, ['ua_xieshou', 'ua_qingyan', 'ua_qizi'], ['ext:独爱/image/陈矫.jpg']],
                        ua_chentai: ['male', 'wei', 4, ['ua_weiyuan', 'ua_juxian'], ['ext:独爱/image/陈泰.jpg']],
                        ua_caoshuang: ['male', 'wei', 4, ['ua_jiebei', 'ua_duoquan'], ['ext:独爱/image/曹爽.jpg']],
                        ua_hanlong: ['male', 'wei', 4, ['ua_siji', 'ua_ciqiu'], ['ext:独爱/image/韩龙.jpg']],
                        ua_dengzhong: ['male', 'wei', 4, ['ua_kanpo', 'ua_gengzhan'], ['ext:独爱/image/邓忠.jpg']],
                        ua_haozhao: ['male', 'wei', 5, ['ua_zhengu'], ['ext:独爱/image/郝昭.jpg']],
                        ua_zhanghu: ['male', 'wei', 4, ['ua_cuijian', 'ua_tongyuan'], ['ext:独爱/image/张虎.jpg']],
                        ua_zangba: ['male', 'wei', 4, ['ua_hengjiang'], ['ext:独爱/image/臧霸.jpg']],
                        //英雄
                    },
                    /*魏
                    'ua_:'<b><font color=#0343df></font></b>',
                    蜀
                  ua_:"<b><font color=#CC0000></font></b>",
                     吴
                  ua_:"<b><font color=#008000></font></b>",
                    群
                  ua_:"<b><font color=#333333></font></b>",
                    */
                    characterTitle: {
                        //	'ua_:'<span style="font-size: 23px font-family: xingkai"><b><font color=#0343df></font></b></span>',
                        ua_caomao: '<span style="font-size: 23px font-family: xingkai"><b><font color=#0343df>霸业终耀</font></b></span>',
                        ua_caoanmin: '<span style="font-size: 23px font-family: xingkai"><b><font color=#0343df>履薄临深</font></b></span>',
                        ua_guohuanghou: '<span style="font-family: huangcao"><span style="font-size: 23px"><b><font color=#0343df>月华驱霾</font></b></span></span>',
                        ua_guojia: '<span style="font-family: huangcao"><span style="font-size: 23px"><b><font color=#0343df>早终先知</font></b></span></span>',
                        ua_yujin: '<b><font color=#0343df>讨暴坚垒</font></b>',
                        ua_ganning: '<span style="font-family: xingkai"><span style="font-family: xingkai"><b><font color=#008000><li>锦帆游侠</font></b></span>',
                        ua_diaochan: '<b><font color=#333333>絶世舞姬</font></b>',
                        ua_weiyan: '<b><font color=#CC0000>嗜血蜀狼</font></b>',
                        ua_liuxie: '<b><font color=#333333></font>漢末龍裔</b>',
                        ua_zhanghe: '<b><font color=#0343df>料敵机先</font></b>',
                        ua_zhangfei: '<b><font color=#CC0000>万夫不當</font></b>',
                        ua_huangzu: '<b><font color=#333333>遮山扼江</font></b>',
                        ua_zhangmiao: '<b><font color=#333333>苔岑往却</font></b>',
                        ua_guanyu: '<b><font color=#CC0000>美髯公</font></b>',
                        ua_shen_taishici: '<b><font color=#FFFF33>義信天武</font></b>',
                        ua_luxun: '<b><font color=#008000>儒生雄才</font></b>',
                        ua_machao: '<b><font color=#CC0000>一騎當千</font></b>',
                        ua_xiahouyuan: '<b><font color=#0343df>疾行獵豹</font></b>',
                        ua_zhouyu: '<b><font color=#008000>大都督</font></b>',
                        ua_sunqian: '<b><font color=#CC0000>折冲樽俎</font></b>',
                        ua_simayi: '<b><font color=#0343df>狼顧之鬼</font></b>',
                        ua_sunjian: '<b><font color=#008000>武烈帝</font></b>',
                        ua_bianfuren: '<b><font color=#0343df>奕世雍容</font></b>',
                        ua_caoang: '<b><font color=#0343df>取義成仁</font></b>',
                        ua_sunce: '<b><font color=#008000>江東小霸王</font></b>',
                        ua_caohong: '<b><font color=#0343df>福將</font></b>',
                        ua_caoren: '<b><font color=#0343df>大將軍</font></b>',
                        ua_caoxiu: '<b><font color=#0343df>千里騏驥</font></b>',
                        ua_caozhang: '<b><font color=#0343df>黃須儿</font></b>',
                        ua_caorui: '<b><font color=#0343df>天姿明君</font></b>',
                        ua_caozhi: '<b><font color=#0343df>八斗之才</font></b>',
                        ua_chenqun: '<b><font color=#0343df>萬世臣表</font></b>',
                        ua_dengai: '<b><font color=#0343df>矯然壯士</font></b>',
                        ua_dianwei: '<b><font color=#0343df>古之惡來</font></b>',
                        ua_caojinyu: '<b><font color=#0343df>金鄉公主</font></b>',
                        ua_caocao: '<b><font color=#0343df>山河彀中</font></b>',
                        ua_guohuai: '<b><font color=#0343df>垂問秦雍</font></b>',
                        ua_guanqiujian: '<b><font color=#0343df>鐫功高句麗</font></b>',
                        ua_caimao: '<b><font color=#0343df>乘雷潜狡</font></b>',
                    },
                    skill: {
                        sy_suhui: {
                            trigger: { global: 'phaseBegin' }, //触发器 全场 回合开始时
                            content() {
                                //技能效果
                                'step 0';
                                if (player.hp != 1) player.loseHp(1); //失去1点体力
                                ('step 1');
                                player.draw(2); //摸两张牌
                                if (player == _status.currentPhase) player.addTempSkill('sy_suhui2');
                                else player.addTempSkill('sy_suhui3'); //获得后面效果
                            },
                        },
                        sy_suhui2: {
                            trigger: { global: 'phaseUseEnd' },
                            forced: true, //强制执行
                            content() {
                                'step 0';
                                player.recover(1); //回复体力
                                ('step 1');
                                var history = player.getHistory('useCard'); //检查player当前回合使用过的牌,数组类型
                                var nouse = true; //先默认没对自己使用过,没使用牌必然没对自己使用过
                                for (var i = 0; i < history.length; i++) {
                                    //循环遍历history
                                    if (!history[i].targets) continue; //history的第i个元素(player本回合使用的第i张牌)不存在目标(targets)直接跳过
                                    //continue是循环里用的,会直接不执行循环里后面的语句,提前进入下次循环
                                    for (var j = 0; j < history[i].targets.length; j++) {
                                        //遍历history的第i个元素的目标,也是一个数组
                                        if (history[i].targets[j] == player) {
                                            //如果history的第i个元素的第j个目标等于player,说明是player,对自己使用过牌,修改nouse
                                            nouse = false; //对自己使用过牌
                                            break; //终止循环,强行退出循环,不再执行此循环任何语句,包括j++
                                        }
                                    }
                                    if (nouse == false)
                                        //相当于if(!nouse),即如果nouse不为真成立
                                        break; //已经找到了,强行退出循环
                                }
                                if (nouse == true)
                                    //相当于if(nouse),即如果nouse为真成立
                                    player.chooseToDiscard('he', 2, true); //弃牌:'h'手牌 'e'装备区牌 'j'判定区牌 2弃牌数 true必须弃牌,不足则全弃,无牌则不弃
                            },
                        },
                        sy_suhui3: {
                            trigger: { global: 'phaseUseEnd' }, //出牌阶段结束时
                            forced: true, //强制执行
                            content() {
                                'step 0';
                                player.recover(1); //回复体力
                                ('step 1');
                                if (player.getHistory('damage').length == 0)
                                    //检查player当前回合受到伤害的记录
                                    player.chooseToDiscard('he', 2, true); //弃牌:'h'手牌 'e'装备区牌 'j'判定区牌 2弃牌数 true必须弃牌,不足则全弃,无牌则不弃
                            },
                        },
                        //甘宁
                        ua_qixi: {
                            enable: 'chooseToUse',
                            filterCard(card) {
                                return get.color(card) == 'black';
                            },
                            audio: 'qixi',
                            position: 'hes',
                            intro: {
                                content(countMark, player) {
                                    return 'x为' + player.countMark('ua_qixi');
                                },
                            },
                            viewAs: { name: 'guohe' },
                            viewAsFilter(player) {
                                if (!player.countCards('hes', { color: 'black' })) return false;
                            },
                            prompt: '将一张黑色牌转化为【过河拆桥】',
                            group: ['ua_qixi2', 'ua_qixi3', 'ua_qixi4'],
                        },
                        ua_qixi2: {
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'guohe';
                            },
                            forced: true,
                            content() {
                                if (player.countMark('ua_qixi') <= 2) player.addMark('ua_qixi', 1);
                            },
                        },
                        ua_qixi3: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            audio: 'qixi',
                            forced: true,
                            filter(event, player) {
                                return player.countMark('ua_qixi') > 1;
                            },
                            content() {
                                player.draw(player.countMark('ua_qixi') - 1);
                            },
                        },
                        ua_qixi4: {
                            trigger: {
                                player: 'phaseAfter',
                            },
                            forced: true,
                            content() {
                                player.removeMark('ua_qixi', player.countMark('ua_qixi'));
                            },
                        },
                        //貂蝉
                        ua_lijian: {
                            audio: 'lijian',
                            audioname: ['re_diaochan'],
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return (
                                    game.countPlayer(function (current) {
                                        return current != player;
                                    }) > 1
                                );
                            },
                            filterCard: true,
                            position: 'he',
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                if (ui.selected.targets.length == 1) {
                                    return target.canUse({ name: 'juedou' }, ui.selected.targets[0]);
                                }
                                return true;
                            },
                            targetprompt: ['先出杀', '后出杀'],
                            selectTarget: 2,
                            multitarget: true,
                            content() {
                                targets[1].useCard({ name: 'juedou' }, targets[0], 'noai').animate = false;
                            },
                        },
                        ua_biyue: {
                            audio: 'rebiyue',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            prompt: '你可摸两张牌,若你没有手牌,改为摸至手牌上限张',
                            content() {
                                if (player.countCards('h')) player.draw(2);
                                else player.drawTo(player.maxHp - player.countCards('h'));
                            },
                            audioname2: {
                                sp_diaochan: 'biyue_sp_diaochan',
                            },
                        },
                        //郭嘉
                        ua_chouyun: {
                            audio: 'ext:独爱/audio:2',
                            audioname: ['re_guojia', 'xizhicai', 'gz_nagisa'],
                            trigger: {
                                global: 'judgeEnd',
                            },
                            filter(event, player) {
                                return get.position(event.result.card, true) == 'o';
                            },
                            content() {
                                trigger.player.gain(trigger.result.card, 'gain2');
                                if (get.type2(trigger.result.card) != 'trick') player.damage('nosource', 'nocard', 'thunder');
                            },
                        },
                        ua_yiji: {
                            audio: 'reyiji',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                event.count = Math.min(trigger.num, 9);
                                ('step 1');
                                player.draw(2);
                                event.count--;
                                event.given_map = {};
                                event.num = Infinity;
                                ('step 2');
                                player.chooseCardTarget({
                                    filterCard(card) {
                                        return get.itemtype(card) == 'card' && !card.hasGaintag('ua_yiji_tag');
                                    },
                                    filterTarget: lib.filter.notMe,
                                    selectCard: [1, Infinity],
                                    prompt: '请选择给一名其他角色的牌',
                                });
                                ('step 3');
                                if (result.bool) {
                                    var res = result.cards,
                                        target = result.targets[0].playerid;
                                    player.addGaintag(res, 'ua_yiji_tag');
                                    event.num -= res.length;
                                    if (!event.given_map[target]) event.given_map[target] = [];
                                    event.given_map[target].addArray(res);
                                    if (event.num > 0) event.goto(2);
                                } else if (event.num == 2) {
                                    event.goto(5);
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
                                game.loseAsync({
                                    gain_list: map,
                                    player: player,
                                    cards: cards,
                                    giver: player,
                                    animate: 'giveAuto',
                                }).setContent('gaincardMultiple');
                                ('step 5');
                                if (event.count > 0) {
                                    player.chooseBool(get.prompt2('ua_yiji'));
                                } else event.finish();
                                ('step 6');
                                if (result.bool) {
                                    event.goto(1);
                                }
                            },
                        },
                        //蔡瑁张允
                        ua_lianzhou: {
                            audio: 'ext:独爱/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!player.isLinked()) return true;
                                return game.hasPlayer(function (current) {
                                    return current != player && current.hp == player.hp && !current.isLinked();
                                });
                            },
                            content() {
                                'step 0';
                                if (!player.isLinked()) player.link();
                                ('step 1');
                                var num = game.countPlayer(function (current) {
                                    return current != player && current.hp == player.hp && !current.isLinked();
                                });
                                if (num > 0) {
                                    player
                                        .chooseTarget([1, num], '选择横置任意名体力值等于你的角色', function (card, player, current) {
                                            return current != player && current.hp == player.hp && !current.isLinked();
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            return get.effect(target, { name: 'tiesuo' }, player, player);
                                        });
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    var targets = result.targets.sortBySeat();
                                    player.line(targets, 'green');
                                    for (var i of targets) i.link();
                                }
                            },
                            ai: {
                                halfneg: true,
                            },
                        },
                        ua_jinglian: {
                            audio: 'ext:独爱/audio:2',
                            trigger: {
                                source: 'damageSource',
                            },
                            forced: true,
                            content() {
                                var delta = player.countCards('h') - player.hp;
                                if (delta > 0) player.chooseToDiscard('h', 3, true);
                                else if (delta == 0) {
                                    player.chooseToDiscard('h', true);
                                    player.recover();
                                } else {
                                    player.damage('fire', 'nosource');
                                    player.draw(4);
                                }
                            },
                            ai: {
                                halfneg: true,
                            },
                        },
                        //刘协
                        ua_tianming: {
                            trigger: { target: 'useCardToTargeted' },
                            filter(event, player) {
                                return (event.card && event.card.name == 'sha') || event.card.name == 'juedou';
                            },
                            content() {
                                player.draw(2);
                                if (player.countCards('h') >= 2) player.chooseToDiscard(2, true, 'he');
                            },
                        },
                        ua_mizhao: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            filterCard: true,
                            selectCard: -1,
                            position: 'h',
                            discard: false,
                            lose: false,
                            delay: false,
                            multitarget: true,
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectTarget: 2,
                            targetprompt: ['给其所有牌', '其与之拼点'],
                            content() {
                                'step 0';
                                player.give(cards, targets[0], 'giveAuto');
                                ('step 1');
                                if (targets[0].canCompare(targets[1])) targets[0].chooseToCompare(targets[1]);
                                else event.finish();
                                ('step 2');
                                if (result.tie) event.finish();
                                else {
                                    event.winner = targets[1];
                                    if (result.bool) event.winner = targets[0];
                                    event.loser = targets[0];
                                    if (result.bool) event.loser = targets[1];
                                }
                                ('step 3');
                                let list = lib.inpile_nature.slice(0); //lib.inpile_nature:牌堆中的属性伤害类型,数组 slice():数组方法,slice(0)就是把数组从第0个下标开始切片得到的数组,和原数组相等,如果slice(1)就会舍弃第0号元素
                                list.unshift(null);
                                let vcards = [];
                                if (event.winner.hasSkill('ayato_zenshen')) list.add('kami');
                                for (var i of list) {
                                    if (event.winner.canUse({ name: 'sha', nature: i }, event.loser, false)) vcards.push(['基本', '', 'sha', i]);
                                }
                                if (event.winner.canUse({ name: 'juedou' }, event.loser, false)) vcards.push(['锦囊', '', 'juedou']);
                                if (!vcards.length) event.finish();
                                else if (vcards.length == 1) event._result = { links: vcards, bool: true };
                                else
                                    event.winner.chooseButton([`请选择要对${get.translation(event.loser)}使用的牌`, [vcards, 'vcard']], true).set('ai', function (button) {
                                        return get.effect(event.loser, { name: button.link[2], nature: button.link[3] }, event.winner, event.winner);
                                    });
                                ('step 4');
                                if (result.bool) event.winner.useCard({ name: result.links[0][2], nature: result.links[0][3] }, false, event.loser);
                            },
                        },
                        //张郃
                        ua_qiaobian: {
                            trigger: {
                                player: 'phaseJudgeBefore',
                            },
                            intro: {
                                content(countMark, player) {
                                    return 'x为' + player.countMark('ua_qiaobian');
                                },
                            },
                            group: ['ua_qiaobian2', 'ua_qiaobian3', 'ua_qiaobian4', 'ua_qiaobian5'],
                            prompt: '你可跳过判定阶段.',
                            prompt2: '',
                            content() {
                                trigger.cancel();
                                player.addMark('ua_qiaobian', 1);
                            },
                        },
                        ua_qiaobian2: {
                            trigger: {
                                player: 'phaseDrawBefore',
                            },
                            prompt: '你可跳过摸牌阶段,获得至多两名角色各1张牌.',
                            content() {
                                'step 0';
                                trigger.cancel();
                                ('step 1');
                                player.chooseTarget([1, 2], '获得至多两名角色各一张手牌', function (card, player, target) {
                                    return target != player && target.countCards('h');
                                });
                                ('step 2');
                                if (result.bool) {
                                    player.gainMultiple(result.targets);
                                    player.addMark('ua_qiaobian', 1);
                                }
                            },
                        },
                        ua_qiaobian3: {
                            trigger: {
                                player: 'phaseUseBefore',
                            },
                            prompt: '你可跳过出牌阶段,移动场上1张牌,回复1点体力.',
                            content() {
                                'step 0';
                                trigger.cancel();
                                ('step 1');
                                if (player.canMoveCard) player.moveCard();
                                ('step 2');
                                player.addMark('ua_qiaobian', 1);
                                player.recover();
                            },
                        },
                        ua_qiaobian4: {
                            trigger: {
                                player: 'phaseDiscardBefore',
                            },
                            prompt: '你可跳过弃牌阶段,将手牌弃至手牌上限张,重铸任意张牌.',
                            content() {
                                'step 0';
                                trigger.cancel();
                                player.addMark('ua_qiaobian', 1);
                                ('step 1');
                                if (player.countCards('h') - player.getHandcardLimit() > 0) player.chooseToDiscard('h', player.countCards('h') - player.getHandcardLimit(), true);
                                ('step 2');
                                player.chooseCard('he', [1, Infinity], true);
                                ('step 3');
                                if (result.bool) {
                                    player.loseToDiscardpile(result.cards);
                                    player.draw(result.cards.length);
                                }
                            },
                        },
                        ua_qiaobian5: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                if (player.countMark('ua_qiaobian') > 1) player.chooseToDiscard('he', player.countMark('ua_qiaobian') - 1, true);
                                player.removeMark('ua_qiaobian', player.countMark('ua_qiaobian'));
                            },
                        },
                        //魏延
                        ua_kuanggu: {
                            trigger: {
                                source: 'damageSource',
                            },
                            filter(event, player) {
                                return get.distance(player, event.player) <= 1;
                            },
                            forced: true,
                            content() {
                                let num = trigger.num;
                                while (num > 0) {
                                    num--;
                                    player.chooseDrawRecover();
                                }
                            },
                            group: 'ua_kuanggu2',
                        },
                        ua_kuanggu2: {
                            trigger: {
                                source: 'damageSource',
                            },
                            usable: 1,
                            _priority: -1,
                            filter(event, player) {
                                return get.distance(player, event.player) <= 1;
                            },
                            forced: true,
                            content() {
                                player.chooseDrawRecover();
                            },
                        },
                        ua_qimou: {
                            limited: true,
                            audio: 'ext:独爱/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return !player.storage.ua_qimou;
                            },
                            init(player) {
                                player.storage.ua_qimou = false;
                            },
                            intro: {
                                content: 'limited',
                            },
                            content() {
                                'step 0';
                                var num = player.hp - 1;
                                if (player.countCards('hs', { name: ['tao', 'jiu'] })) {
                                    num = player.hp;
                                }
                                var map = {};
                                var list = [];
                                for (var i = 1; i <= player.hp; i++) {
                                    var cn = get.cnNumber(i, true);
                                    map[cn] = i;
                                    list.push(cn);
                                }
                                event.map = map;
                                player.awakenSkill('ua_qimou');
                                player.storage.ua_qimou = true;
                                player
                                    .chooseControl(list, function () {
                                        return get.cnNumber(_status.event.goon, true);
                                    })
                                    .set('prompt', '失去至少1点体力')
                                    .set('goon', num);
                                ('step 1');
                                var num = event.map[result.control] || 1;
                                player.storage.reqimou2 = num;
                                player.loseHp(num);
                                player.addTempSkill('reqimou2');
                            },
                        },
                        //张飞
                        ua_paoxiao: {
                            trigger: {
                                source: 'damageBefore',
                            },
                            forced: true,
                            content() {
                                trigger.audioed = true;
                                trigger.num++;
                            },
                            mod: {
                                globalFrom(from, to, distance) {
                                    if (from.next == to || from.previous == to) return -Infinity;
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && get.color(event.card) == 'red';
                            },
                        },
                        //黄祖
                        ua_jinggong: {
                            audio: 'ext:独爱/audio:2',
                            enable: 'chooseToUse',
                            mod: {
                                targetInRange(card) {
                                    if (card.storage && card.storage.ua_jinggong) return true;
                                },
                            },
                            viewAsFilter(player) {
                                return player.hasCard(function (card) {
                                    return get.type(card) == 'equip';
                                }, 'hes');
                            },
                            position: 'hes',
                            filterCard: { type: 'equip' },
                            viewAs: {
                                name: 'sha',
                                storage: { ua_jinggong: true },
                            },
                            check(card) {
                                return 6 - get.value(card);
                            },
                            ai: {
                                respondSha: true,
                                skillTagFilter(player) {
                                    return player.hasCard(function (card) {
                                        return get.type(card) == 'equip';
                                    }, 'hes');
                                },
                            },
                            group: 'ua_jinggong_base',
                            subSkill: {
                                base: {
                                    trigger: { player: 'useCard1' },
                                    forced: true,
                                    popup: false,
                                    firstDo: true,
                                    filter(event, player) {
                                        return event.skill == 'ua_jinggong' && event.targets.length;
                                    },
                                    content() {
                                        trigger.baseDamage = Math.min(3, get.distance(player, trigger.targets[0]));
                                    },
                                },
                            },
                        },
                        ua_xiaojuan: {
                            audio: 'ext:独爱/audio:2',
                            trigger: { player: 'useCardToPlayered' },
                            logTarget: 'target',
                            filter(event, player) {
                                return event.targets.length == 1 && player != event.target && event.target.countCards('h') > 1;
                            },
                            check(event, player) {
                                var target = event.target;
                                if (get.attitude(player, target) >= 0) return false;
                                if (get.color(event.card) == 'none') return true;
                                return Math.floor(target.countCards('h') / 2) >= Math.floor(player.countCards('h') / 2);
                            },
                            content() {
                                'step 0';
                                var target = trigger.target;
                                event.target = target;
                                var num = Math.floor(target.countCards('h') / 2);
                                if (num > 0) player.discardPlayerCard(target, 'h', num, true);
                                else event.finish();
                                ('step 1');
                                var suit = trigger.card.suit;
                                if (result.bool && lib.suit.includes(suit) && player.countCards('h') > 1) {
                                    var bool = false;
                                    for (var i of result.cards) {
                                        if (i.suit == suit) {
                                            bool = true;
                                            break;
                                        }
                                    }
                                    if (!bool) event.finish();
                                } else event.finish();
                                ('step 2');
                                var num = Math.floor(player.countCards('h') / 2);
                                if (num > 0) player.chooseToDiscard('h', num, true);
                            },
                        },
                        //神太史慈
                        ua_tiandan: {
                            audio: 'ext:独爱/audio:2',
                            trigger: { target: 'useCardToTarget' },
                            forced: true,
                            logTarget: 'player',
                            filter(event, player) {
                                return event.player.hasMark('ua_powei') && get.tag(event.card, 'damage');
                            },
                            content() {
                                'step 0';
                                player.draw();
                                player.judge(function (result) {
                                    if (result.suit == 'heart') return 2;
                                    return -1;
                                }).judge2 = function (result) {
                                    return result.bool;
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.gain(trigger.cards, 'gain2');
                                    trigger.targets.remove(player);
                                    trigger.parent.triggeredTargets2.remove(player);
                                    trigger.untrigger();
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current, isLink) {
                                        if (card.name == 'sha' && !isLink && player.hp > target.hp) return 0.5;
                                    },
                                },
                            },
                        },
                        ua_dulie: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            marktext: '笃烈',
                            intro: {
                                name: '笃烈',
                                name2: '笃烈',
                                content(countMark, player) {
                                    return '你使用【杀】的次数+' + player.countMark('ua_dulie') + ',攻击距离+' + player.countMark('ua_dulie') + ',使用【杀】或【决斗】可指定的目标+' + player.countMark('ua_dulie') + '.';
                                },
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.hasMark('ua_powei');
                            },
                            content() {
                                'step 0';
                                trigger.player.removeMark('ua_powei', 1);
                                ('step 1');
                                if (player == _status.currentPhase) {
                                    player.addMark('ua_dulie', 1);
                                    player.addTempSkill('ua_dulie2', 'phaseUseAfter');
                                }
                            },
                            group: 'ua_dulie3',
                        },
                        ua_dulie2: {
                            trigger: {
                                player: 'useCard2',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && player.countMark('ua_dulie') && (event.card.name == 'sha' || event.card.name == 'juedou');
                            },
                            content() {
                                'step 0';
                                var num = player.countMark('ua_dulie');
                                player
                                    .chooseTarget('是否发动【笃烈】？', `为${get.translation(trigger.card)}添加至多${get.cnNumber(num)}个目标`, [1, num], function (card, player, target) {
                                        var evt = _status.event.getTrigger();
                                        return target != player && !evt.targets.includes(target) && lib.filter.targetEnabled2(evt.card, player, target) && lib.filter.targetInRange(evt.card, player, target);
                                    })
                                    .set('ai', function (target) {
                                        return get.effect(target, _status.event.getTrigger().card, _status.event.player);
                                    });
                                ('step 1');
                                if (result.bool && result.targets && result.targets.length) {
                                    var targets = result.targets;
                                    player.line(targets, trigger.card.nature);
                                    trigger.targets.addArray(targets);
                                }
                            },
                            mod: {
                                attackRange(player, num) {
                                    return num + player.countMark('ua_dulie');
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + player.countMark('ua_dulie');
                                },
                            },
                        },
                        ua_dulie3: {
                            trigger: {
                                player: 'phaseUseAfter',
                            },
                            forced: true,
                            content() {
                                player.removeMark('ua_dulie', player.countMark('ua_dulie'));
                            },
                        },
                        ua_powei: {
                            marktext: '围',
                            intro: {
                                name: '破围(围)',
                                name2: '围',
                                content: 'mark',
                            },
                            audio: 'ext:独爱/audio:2',
                            dutySkill: true,
                            logTarget: 'player',
                            audio: 'tspowei',
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            logTarget(event, player) {
                                return game.filterPlayer((current) => current != player && !current.hasMark('ua_powei'));
                            },
                            content() {
                                var list = game.filterPlayer((current) => current != player && !current.hasMark('ua_powei')).sortBySeat();
                                for (var i of list) i.addMark('ua_powei', 1, false);
                            },
                            derivation: 'ua_shenzhu',
                            group: ['ua_powei_achieve', 'ua_powei_fail'],
                            subSkill: {
                                achieve: {
                                    audio: 'tspowei1',
                                    trigger: { player: 'phaseZhunbeiBegin' },
                                    forced: true,
                                    filter(event, player) {
                                        return !game.hasPlayer(function (current) {
                                            return current.hasMark('ua_powei');
                                        });
                                    },
                                    content() {
                                        game.log(player, '使命成功');
                                        player.awakenSkill('ua_powei');
                                        player.addSkillLog('ua_shenzhu');
                                    },
                                },
                                fail: {
                                    audio: 'tspowei2',
                                    trigger: { player: 'dyingEnd' },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        game.log(player, '使命失败');
                                        player.loseMaxHp();
                                        player.awakenSkill('ua_powei');
                                        ('step 1');
                                        var num = player.countCards('e');
                                        if (num > 0) player.chooseToDiscard('e', true, num);
                                        player.awakenSkill('ua_dulie');
                                    },
                                },
                            },
                        },
                        ua_shenzhu: {
                            audio: 'ext:独爱/audio:2',
                            trigger: { player: 'useCard' },
                            forced: true,
                            filter(event, player) {
                                return get.tag(event.card, 'damage');
                            },
                            content() {
                                player.draw();
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                            },
                        },
                        //陆逊
                        ua_qianxun: {
                            audio: 'ext:独爱/audio:2',
                            trigger: {
                                target: 'useCardToTargeted',
                                player: ['useCard', 'judgeBefore'],
                            },
                            filter(event, player) {
                                if (player.getExpansions('ua_qianxun2').length >= 3) return false;
                                if (player.countCards('h') == 0) return false;
                                if (event.parent.name == 'phaseJudge') {
                                    return true;
                                }
                                if (event.name == 'judge') return false;
                                if (get.type(event.card, 'trick') == 'trick') return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                let num = Math.max(1, 3 - player.getExpansions('ua_qianxun2').length);
                                player.chooseCard('he', [1, num], `扣置至多${get.cnNumber(num)}张牌`);
                                ('step 1');
                                var cards = result.cards;
                                if (player.getExpansions('ua_qianxun2').length <= 5) player.addToExpansion(cards, 'giveAuto', player).gaintag.add('ua_qianxun2');
                                player.addSkill('ua_qianxun2');
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
                        ua_qianxun2: {
                            trigger: { global: 'phaseEnd' },
                            forced: true,
                            content() {
                                var cards = player.getExpansions('ua_qianxun2');
                                if (cards.length) player.gain(cards, 'draw');
                                player.removeSkill('ua_qianxun2');
                            },
                            intro: {
                                mark(dialog, storage, player) {
                                    var cards = player.getExpansions('ua_qianxun2');
                                    if (player.isUnderControl(true)) dialog.addAuto(cards);
                                    else return `共有${get.cnNumber(cards.length)}张<连营>牌`;
                                },
                                markcount: 'expansion',
                            },
                        },
                        ua_lianying: {
                            audio: 'ext:独爱/audio:2',
                            trigger: {
                                player: 'loseAfter',
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.countCards('h')) return false;
                                var evt = event.getl(player);
                                return evt && evt.hs && evt.hs.length;
                            },
                            content() {
                                'step 0';
                                if (player.getExpansions('ua_qianxun2').length) var cards = player.getExpansions('ua_qianxun2').length;
                                else var cards = 1;
                                player.chooseTarget(get.prompt('ua_lianying'), `令至多${get.cnNumber(cards)}名角色各摸1张牌`, [1, cards]).ai = function (target) {
                                    var player = _status.event.player;
                                    if (player == target) return get.attitude(player, target) + 10;
                                    return get.attitude(player, target);
                                };
                                ('step 1');
                                if (result.bool) {
                                    game.asyncDraw(result.targets);
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
                        //张邈
                        ua_mouni: {
                            trigger: { player: 'phaseZhunbeiBegin' },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h', 'sha') > 0;
                            },
                            content() {
                                'step 0';
                                player.addSkill('ua_mouni2');
                                player.chooseTarget(get.prompt2('ua_mouni'), lib.filter.notMe).set('ai', function (target) {
                                    var player = _status.event.player,
                                        cards = player.getCards('h', 'sha');
                                    if (
                                        get.attitude(player, target) >= 0 ||
                                        !player.canUse(cards[0], target, false) ||
                                        (!player.hasJudge('lebu') &&
                                            target.mayHaveShan() &&
                                            !player.hasSkillTag(
                                                'directHit_ai',
                                                true,
                                                {
                                                    target: target,
                                                    card: cards[0],
                                                },
                                                true
                                            ))
                                    )
                                        return 0;
                                    return get.effect(target, cards[0], player, player);
                                });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    event.cards = player.getCards('h', 'sha');
                                } else event.finish();
                                ('step 2');
                                if (event.ua_mouni_dying) return;
                                var hs = player.getCards('h');
                                cards = cards.filter(function (card) {
                                    return (
                                        hs.includes(card) &&
                                        card.name == 'sha' &&
                                        player.canUse(
                                            {
                                                name: 'sha',
                                                nature: get.nature(card, player),
                                                cards: [card],
                                            },
                                            target,
                                            false
                                        )
                                    );
                                });
                                if (cards.length) {
                                    var card = cards.randomRemove(1)[0];
                                    player.useCard(target, false, card);
                                    event.redo();
                                }
                                ('step 3');
                                if (
                                    player.getHistory('useCard', function (evt) {
                                        return (
                                            evt.parent == event &&
                                            !player.getHistory('sourceDamage', function (evt2) {
                                                return evt.card == evt2.card;
                                            }).length
                                        );
                                    }).length
                                ) {
                                    player.skip('phaseUse');
                                    player.skip('phaseDiscard');
                                }
                                player.removeSkill('ua_mouni2');
                            },
                        },
                        ua_mouni2: {
                            charlotte: true,
                            trigger: { global: 'dying' },
                            forced: true,
                            firstDo: true,
                            popup: false,
                            filter(event, player) {
                                var evt = event.getParent('ua_mouni');
                                return evt && evt.player == player && evt.target == event.player;
                            },
                            content() {
                                trigger.getParent('ua_mouni').ua_mouni_dying = true;
                            },
                        },
                        ua_zongfan: {
                            derivation: 'ua_zhangu',
                            trigger: { player: 'phaseJieshuBegin' },
                            juexingji: true,
                            forced: true,
                            filter(event, player) {
                                return (
                                    !player.getHistory('skipped').includes('phaseUse') &&
                                    player.getHistory('useCard', function (evt) {
                                        return evt.parent.name == 'ua_mouni';
                                    }).length
                                );
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('ua_zongfan');
                                var num = player.countCards('he');
                                if (num > 0) {
                                    player.chooseCardTarget({
                                        prompt: '是否将任意张牌交给一名其他角色？',
                                        selectCard: [1, num],
                                        filterCard: true,
                                        filterTarget: lib.filter.notMe,
                                        position: 'he',
                                        ai1(card) {
                                            if (card.name == 'du') return 10;
                                            else if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') return 0;
                                            var player = _status.event.player;
                                            if (
                                                ui.selected.cards.length > 4 ||
                                                !game.hasPlayer(function (current) {
                                                    return get.attitude(player, current) > 0 && !current.hasSkillTag('nogain');
                                                })
                                            )
                                                return 0;
                                            return 1 / Math.max(0.1, get.value(card));
                                        },
                                        ai2(target) {
                                            var player = _status.event.player,
                                                att = get.attitude(player, target);
                                            if (ui.selected.cards[0].name == 'du') return -att;
                                            if (target.hasSkillTag('nogain')) att /= 6;
                                            return att;
                                        },
                                    });
                                } else event.goto(2);
                                ('step 1');
                                if (result.bool) {
                                    var cards = result.cards,
                                        target = result.targets[0],
                                        num = Math.min(5, cards.length);
                                    player.give(cards, target);
                                    player.gainMaxHp(num);
                                    player.recover(num);
                                }
                                ('step 2');
                                player.removeSkill('ua_mouni');
                                player.addSkill('ua_zhangu');
                            },
                        },
                        ua_zhangu: {
                            trigger: { player: 'phaseZhunbeiBegin' },
                            forced: true,
                            content() {
                                var cards = [],
                                    types = [];
                                for (var i = 0; i < 3; i++) {
                                    var card = get.cardPile2(function (card) {
                                        return !cards.includes(card) && !types.includes(get.type2(card, false));
                                    });
                                    if (card) {
                                        cards.push(card);
                                        types.push(get.type2(card, false));
                                    } else break;
                                }
                                if (cards.length) player.gain(cards, 'gain2');
                                player.loseMaxHp();
                            },
                        },
                        //马超
                        ua_tieqi: {
                            audio: 'ext:独爱/audio:2',
                            shaRelated: true,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            logTarget: 'target',
                            preHidden: true,
                            content() {
                                trigger.parent.directHit.add(trigger.target);
                                if (!trigger.target.hasSkill('fengyin')) {
                                    trigger.target.addTempSkill('fengyin');
                                }
                            },
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if (get.attitude(player, arg.target) > 0 || arg.card.name != 'sha' || !ui.cardPile.firstChild || get.color(ui.cardPile.firstChild, player) != 'red') return false;
                                },
                            },
                        },
                        //关羽
                        ua_wusheng: {
                            mod: {
                                targetInRange(card) {
                                    if (get.color(card) == 'red' && card.name == 'sha') return true;
                                },
                            },
                            audio: 'wusheng',
                            audioname: ['re_guanyu', 'guanzhang', 'jsp_guanyu', 'guansuo', 're_guanzhang'],
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
                            prompt: '你的红色牌可转化为【杀】',
                            check(card) {
                                var val = get.value(card);
                                if (_status.event.name == 'chooseToRespond') return 1 / Math.max(0.1, val);
                                return 5 - val;
                            },
                            ai: {
                                respondSha: true,
                                skillTagFilter(player) {
                                    if (get.zhu(player, 'shouyue')) {
                                        if (!player.countCards('hes')) return false;
                                    } else {
                                        if (!player.countCards('hes', { color: 'red' })) return false;
                                    }
                                },
                            },
                        },
                        ua_yijue: {
                            audio: 'yijue',
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
                                if (!target.countCards('h')) {
                                    event.finish();
                                    return;
                                } else
                                    target.chooseCard(true, 'h').set('ai', function (card) {
                                        var player = _status.event.player;
                                        if ((player.hasShan() || player.hp < 3) && get.color(card) == 'black') return 0.5;
                                        return Math.max(1, 20 - get.value(card));
                                    });
                                ('step 1');
                                target.showCards(result.cards);
                                event.card2 = result.cards[0];
                                if (get.color(event.card2) == 'black') {
                                    if (!target.hasSkill('fengyin')) {
                                        target.addTempSkill('fengyin');
                                    }
                                    target.addTempSkill('ua_yijue2');
                                    event.finish();
                                } else {
                                    player.gain(event.card2, target, 'give', 'bySelf');
                                }
                                ('step 2');
                                player.chooseBool('是否与目标各摸1张牌,并让目标回复1点体力？').ai = function (event, player) {
                                    return get.recoverEffect(target, player, player) > 0;
                                };
                                ('step 3');
                                if (result.bool) {
                                    target.draw();
                                    player.draw();
                                    target.recover();
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
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if (!arg.target.hasSkillTag('ua_yijue2')) return false;
                                },
                            },
                        },
                        ua_yijue2: {
                            trigger: {
                                player: 'damageBegin1',
                            },
                            filter(event, player) {
                                return event.source && event.source == _status.currentPhase && event.card && event.card.name == 'sha' && event.card.suit == 'heart' && event.notLink();
                            },
                            popup: false,
                            forced: true,
                            ai: {
                                unequip2: true,
                            },
                            charlotte: true,
                            content() {
                                trigger.num++;
                            },
                            mark: true,
                            mod: {
                                cardEnabled2(card) {
                                    if (get.position(card) == 'h') return false;
                                },
                            },
                            intro: {
                                content: '本回合不能使用打出手牌,装备失效',
                            },
                        },
                        //夏侯渊夏侯渊夏侯渊夏侯渊夏侯渊夏侯渊夏侯渊夏侯渊夏侯渊夏侯渊夏侯渊夏侯渊
                        ua_shensu: {
                            audio: 'shensu1',
                            audioname: ['xiahouba', 're_xiahouyuan', 'ol_xiahouyuan'],
                            group: ['ua_shensu1', 'ua_shensu2', 'ua_shensu4'],
                        },
                        ua_shensu1: {
                            audio: 'ext:独爱/audio:2',
                            audioname: ['xiahouba', 're_xiahouyuan', 'ol_xiahouyuan'],
                            trigger: { player: 'phaseJudgeBefore' },
                            prompt: '你可跳过判定阶段和摸牌阶段,视为对一名其他角色使用一张【杀】.',
                            content() {
                                'step 0';
                                trigger.cancel();
                                player.skip('phaseDraw');
                                var check = player.countCards('h') > 2;
                                player
                                    .chooseTarget(get.prompt('ua_shensu'), function (card, player, target) {
                                        if (player == target) return false;
                                        return player.canUse({ name: 'sha' }, target, false);
                                    })
                                    .set('check', check)
                                    .set('ai', function (target) {
                                        if (!_status.event.check) return 0;
                                        return get.effect(target, { name: 'sha' }, _status.event.player);
                                    })
                                    .setHiddenSkill('ua_shensu1');
                                ('step 1');
                                if (result.bool) {
                                    player.useCard({ name: 'sha' }, result.targets[0], false);
                                }
                            },
                        },
                        ua_shensu2: {
                            audio: 'ua_shensu1',
                            audioname: ['xiahouba', 're_xiahouyuan', 'ol_xiahouyuan'],
                            trigger: { player: 'phaseUseBefore' },
                            prompt: '你可跳过出牌阶段,视为对一名其他角色使用一张【杀】.',
                            content() {
                                'step 0';
                                trigger.cancel();
                                player
                                    .chooseTarget({
                                        prompt: get.prompt('ua_shensu'),
                                        filterTarget(card, player, target) {
                                            if (player == target) return false;
                                            return player.canUse({ name: 'sha' }, target, false);
                                        },
                                    })
                                    .setHiddenSkill('ua_shensu2');
                                ('step 1');
                                if (result.bool) {
                                    player.useCard({ name: 'sha' }, result.targets[0], false);
                                }
                            },
                        },
                        ua_shensu4: {
                            audio: 'shensu1',
                            audioname: ['xiahouba', 're_xiahouyuan', 'ol_xiahouyuan'],
                            trigger: { player: 'phaseDiscardBefore' },
                            prompt: '你可跳过弃牌阶段并将武将牌翻面,视为对一名其他角色使用一张【杀】.',
                            content() {
                                'step 0';
                                trigger.cancel();
                                player.turnOver();
                                /*	let num=player.getDamagedHp();
                                    player.draw(num);*/
                                ('step 1');
                                var check = player.needsToDiscard() || player.isTurnedOver() || (player.hasSkill('shebian') && player.canMoveCard(true, true));
                                player
                                    .chooseTarget(get.prompt('ua_shensu'), function (card, player, target) {
                                        if (player == target) return false;
                                        return player.canUse({ name: 'sha' }, target, false);
                                    })
                                    .set('check', check)
                                    .set('ai', function (target) {
                                        if (!_status.event.check) return 0;
                                        return get.effect(target, { name: 'sha' }, _status.event.player, _status.event.player);
                                    });
                                ('step 2');
                                if (result.bool) {
                                    player.useCard({ name: 'sha' }, result.targets[0], false);
                                }
                            },
                        },
                        //周瑜周瑜周瑜周瑜周瑜周瑜周瑜周瑜周瑜周瑜周瑜周瑜周瑜周瑜
                        ua_yingzi: {
                            trigger: { player: 'phaseZhunbeiBegin' },
                            forced: true,
                            audio: 'yingzi',
                            content() {
                                'step 0';
                                var cards = [];
                                for (var i = 1; i <= 2; i++) {
                                    var card = get.cardPile2(function (card) {
                                        return !cards.includes(card) && get.type(card) == 'basic';
                                    });
                                    if (card) cards.push(card);
                                }
                                for (var i = 1; i <= 2; i++) {
                                    var card = get.cardPile2(function (card) {
                                        return !cards.includes(card) && get.type(card) != 'basic';
                                    });
                                    if (card) cards.push(card);
                                }
                                player.gain(cards);
                                ('step 1');
                                player.skip('phaseDraw');
                            },
                        },
                        ua_fanjian: {
                            audio: 'ext:独爱/audio:2',
                            enable: 'phaseUse',
                            usable: 2,
                            filter(event, player) {
                                if (player.hasSkill('ua_fanjian_ban')) return false;
                                return player.countCards('h') > 0;
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            filterCard: true,
                            selectCard: 1,
                            position: 'he',
                            discard: false,
                            lose: false,
                            delay: false,
                            multitarget: true,
                            selectTarget: 1,
                            log: false,
                            targetprompt: ['给其此牌'],
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
                                target.chat('我选' + get.translation(event.choice));
                                player.give(cards, target, 'giveauto');
                                ('step 2');
                                var list = ['对其造成1点伤害', '令其失去1点体力'];
                                if (cards[0].suit + '2' != event.choice) player.chooseControl(list);
                                else event.finish();
                                ('step 3');
                                if (result.control == '对其造成1点伤害') {
                                    target.damage();
                                    player.addTempSkill('ua_fanjian_ban', 'phaseUseAfter');
                                } else {
                                    target.loseHp();
                                    player.addTempSkill('ua_fanjian_ban', 'phaseUseAfter');
                                }
                            },
                        },
                        ua_fanjian_ban: {
                            content() { },
                        },
                        //黄权黄权黄权
                        /*    ua_dianhu: {
                      audio:2,
                      trigger:{
                          global:"phaseBefore",
                          player:"enterGame",
                      },
                      forced:true,
                      filter:function(event){
                          return game.players.length>1&&(event.name!='phase'||game.phaseNumber==0);
                      },
                      content:function(){
                          'step 0'
                          player.chooseTarget('选择【点虎】的目标',lib.translate.xinfu_dianhu_info,true,function(card,player,target){
                              return target!=player&&!target.hasSkill('xinfu_dianhu2');
                          }).set('ai',function(target){
                              var att=get.attitude(_status.event.player,target);
                              if(att<0) return -att+3;
                              return Math.random();
                          });
                          'step 1'
                          if(result.bool){
                              var target=result.targets[0];
                              player.line(target,'green');
                              game.log(target,'成为了','【点虎】','的目标');
                              target.storage.xinfu_dianhu2=player;
                              target.addTempSkill('xinfu_dianhu2',{player:'die'});
                          }
                      },
                                                                          },
                            ua_jianji:{
                      audio:2,
                      enable:"phaseUse",
                      usable:1,
                      content:function(){
                          'step 0'
                          target.draw();
                          'step 1'
                          if(card&&game.hasPlayer(function(current){
                              return target.canUse(card,current);
                          })&&get.owner(card)==target){
                              target.chooseToUse({
                                  prompt:'是否使用1张牌？',
                                  });
                          };
                              },
                      ai:{
                          order:7.5,
                          result:{
                              target:1,
                          },
                      },
                  },*/
                        //孙乾
                        ua_qianya: {
                            audio: 'ext:独爱/audio:2',
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card, 'trick') == 'trick' && player.countCards('he');
                            },
                            content() {
                                'step 0';
                                var nh = player.countCards('he');
                                player.chooseCardTarget({
                                    filterCard: true,
                                    position: 'he',
                                    filterTarget(card, player, target) {
                                        return target != player;
                                    },
                                    selectCard: [1, nh],
                                    ai1(card) {
                                        var player = _status.event.player;
                                        var cardname = _status.event.cardname;
                                        if (_status.event.du) return -get.value(card, player, 'raw');
                                        else if (_status.event.shuimeng) {
                                            if (cardname == 'wuzhong') {
                                                if (player.needsToDiscard(2 - ui.selected.cards.length)) {
                                                    return 10 - get.value(card, player, 'raw');
                                                }
                                            } else if (cardname == 'guohe') {
                                                if (player.needsToDiscard(-1 - ui.selected.cards.length)) {
                                                    return 10 - get.value(card, player, 'raw');
                                                }
                                            }
                                            return 0;
                                        } else if (cardname == 'lebu') {
                                            if (player.needsToDiscard(1 - ui.selected.cards.length)) {
                                                return 8 - get.value(card, player, 'raw');
                                            } else {
                                                if (!ui.selected.cards.length) {
                                                    return 6 - get.value(card, player, 'raw');
                                                }
                                                return 0;
                                            }
                                        } else if (cardname == 'shunshou') {
                                            if (_status.event.nh <= 2) return get.value(card, player, 'raw');
                                        } else if (cardname == 'huogong') {
                                            if (player.hp == 1) return get.value(card, player, 'raw');
                                        }
                                        if (ui.selected.cards.length) return 0;
                                        return 7 - get.value(card, player, 'raw');
                                    },
                                    ai2(target) {
                                        var att = get.attitude(_status.event.player, target);
                                        var nh2 = target.countCards('he');
                                        var num = Math.sqrt(1 + nh2);
                                        var cardname = _status.event.cardname;
                                        if (_status.event.du) return 0.5 - att;
                                        else if (_status.event.shuimeng) {
                                            return att / num;
                                        } else if (cardname == 'lebu') {
                                            return att / num;
                                        } else if (cardname == 'shunshou') {
                                            if (_status.event.nh <= 2) return att / num;
                                        } else if (cardname == 'huogong') {
                                            if (_status.event.player.hp == 1) return att / num;
                                        }
                                        if (_status.event.nh > nh2 + 1) {
                                            return att / num;
                                        }
                                        return 0;
                                    },
                                    du: player.hasCard(function (card) {
                                        return get.value(card, player, 'raw') < 0;
                                    }),
                                    shuimeng: trigger.getParent(2).name == 'shuimeng',
                                    nh: nh,
                                    cardname: trigger.card.name,
                                    prompt: get.prompt2('ua_qianya'),
                                });
                                ('step 1');
                                if (result.bool) {
                                    prompt2: '';
                                    player.give(result.cards, result.targets[0], 'giveAuto');
                                    if (result.cards.length >= player.hp) player.addTempSkill('ua_qianya2');
                                }
                            },
                            group: ['ua_qianya3', 'ua_qianya4'],
                        },
                        ua_qianya2: {
                            trigger: {
                                global: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                if (player.storage.ua_qianya2 > 0) player.draw(player.storage.ua_qianya2);
                            },
                        },
                        ua_qianya3: {
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            content() {
                                if (!player.storage.ua_qianya2) player.storage.ua_qianya2 = 0;
                                player.storage.ua_qianya2++;
                            },
                        },
                        ua_qianya4: {
                            trigger: { global: 'phaseAfter' },
                            forced: true,
                            content() {
                                player.storage.ua_qianya2 = 0;
                            },
                        },
                        ua_shuimeng: {
                            audio: true,
                            enable: 'phaseUse',
                            usable: 1,
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h');
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('ua_shuimeng'), function (card, player, target) {
                                        return player.canCompare(target);
                                    })
                                    .set('ai', function (target) {
                                        if (!_status.event.goon) return 0;
                                        return -get.attitude(_status.event.player, target);
                                    })
                                    .set(
                                        'goon',
                                        player.needsToDiscard() ||
                                        player.hasCard(function (card) {
                                            var val = get.value(card);
                                            if (val < 0) return true;
                                            if (val <= 5) {
                                                return card.number >= 11;
                                            }
                                            if (val <= 6) {
                                                return card.number >= 12;
                                            }
                                            return false;
                                        })
                                    );
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    player.chooseToCompare(event.target);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) player.chooseUseTarget({ name: 'wuzhong' }, true);
                                else event.goto(5);
                                ('step 3');
                                player.chooseBool('是否令目标使用一张无中生有？');
                                ('step 4');
                                if (result.bool) event.target.chooseUseTarget({ name: 'wuzhong' }, true);
                                event.finish();
                                ('step 5');
                                event.target.chooseCard(
                                    'h',
                                    true,
                                    function (card) {
                                        return event.target.canUse({ name: 'guohe' }, player, false);
                                    },
                                    `选择一张手牌当做【过河拆桥】对${get.translation(player)}使用`
                                );
                                ('step 6');
                                if (result.bool) event.target.useCard({ name: 'guohe' }, result.cards, player, false);
                            },
                        },
                        //司马懿
                        ua_guicai: {
                            mark: true,
                            intro: {
                                mark(dialog, storage, player) {
                                    var cards = [];
                                    let ass = player.getDamagedHp() - 1;
                                    if (ass < 0) ass = 0;
                                    let num = Math.min(ui.cardPile.childNodes.length, ass);
                                    for (var i = 0; i <= num; i++) {
                                        cards.push(ui.cardPile.childNodes[i]);
                                    }
                                    if (player.isUnderControl(true)) dialog.addAuto(cards);
                                    else return `司马懿可见牌堆顶前${get.cnNumber(cards.length)}张牌`;
                                },
                            },
                            audio: 'ext:独爱/audio:2',
                            trigger: {
                                global: 'judge',
                            },
                            preHidden: true,
                            content() {
                                'step 0';
                                var cards = [];
                                let ass = player.getDamagedHp() - 1;
                                if (ass < 0) ass = 0;
                                let num = Math.min(ui.cardPile.childNodes.length, ass);
                                for (var i = 0; i <= num; i++) {
                                    cards.push(ui.cardPile.childNodes[i]);
                                }
                                cards.addArray(player.getCards('hes')); //添加手牌
                                player.chooseButton(['鬼才:选择要用于改判的牌', cards]).set('ai', function (button) {
                                    return get.value(button.link, _status.event.player, 'raw');
                                });
                                ('step 1');
                                var card = result.links[0];
                                event.card = card;
                                if (get.owner(card) == player) {
                                    event.goto(3);
                                } else {
                                    game.cardsGotoOrdering(card).relatedEvent = trigger;
                                }
                                ('step 2');
                                player.$throw(event.card);
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
                                trigger.player.judging[0] = event.card;
                                game.log(trigger.player, '的判定牌改为', event.card);
                                event.finish();
                                ('step 3');
                                player.respond([event.card], 'ua_guicai', 'highlight', 'noOrdering');
                                ('step 4');
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
                                    trigger.player.judging[0] = event.card;
                                    trigger.orderingCards.add(event.card);
                                    game.log(trigger.player, '的判定牌改为', event.card);
                                }
                            },
                            ai: {
                                rejudge: true,
                                tag: {
                                    rejudge: 1,
                                },
                            },
                        },
                        ua_fankui: {
                            trigger: { player: 'damageEnd' },
                            content() {
                                'step 0';
                                event.count = Math.min(trigger.num, 9);
                                ('step 1');
                                event.cards = [];
                                let ass = player.getDamagedHp() - 1;
                                if (ass < 0) ass = 0;
                                let num = Math.min(ui.cardPile.childNodes.length, ass);
                                for (var i = 0; i <= num; i++) {
                                    event.cards.push(ui.cardPile.childNodes[i]);
                                }
                                event.count--;
                                let ast = ass + 1;
                                const list = [`获得牌堆顶前${ast}张牌中的1张牌`];
                                if (trigger.source) {
                                    list.add(`获得${get.translation(trigger.source)}1张牌`);
                                }
                                player.chooseControl(list);
                                ('step 2');
                                if (result.index == 0) {
                                    player.chooseButton(['反馈:选择要获得的牌', cards]).set('ai', (button) => get.value(button.link));
                                } else {
                                    player.gainPlayerCard(get.prompt('ua_fankui', trigger.source), trigger.source, get.buttonValue, trigger.source != player ? 'he' : 'e');
                                } //QQQ
                                ('step 3');
                                if (result.bool) player.gain(result.links, 'draw');
                                game.updateRoundNumber();
                                ('step 4');
                                if (event.count > 0) event.goto(1);
                            },
                        },
                        ua_yinghun: {
                            audio: 'ext:独爱/audio:2',
                            audioname: ['re_sunjian', 'sunce', 're_sunben', 're_sunce', 'ol_sunjian', 're_sunyi'],
                            trigger: { player: 'phaseZhunbeiBegin' },
                            preHidden: true,
                            content() {
                                'step 0';
                                player.chooseTarget().set('prompt', '选择一名角色').set('prompt2', '');
                                ('step 1');
                                if (result.bool) {
                                    event.num = player.getDamagedHp();
                                    if (event.num < 1) event.num = 1;
                                    event.target = result.targets[0];
                                    var str1 = `摸${event.num}张牌,弃1张牌`;
                                    var str2 = `摸1张牌,弃${event.num}张牌`;
                                    if (event.num == 1) player.chooseControl(str1);
                                    else player.chooseControl(str1, str2);
                                    event.str = str1;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.control == event.str) {
                                    event.target.draw(event.num);
                                    event.target.chooseToDiscard(true, 'he');
                                } else {
                                    event.target.draw();
                                    event.target.chooseToDiscard(event.num, true, 'he');
                                }
                                ('step 3');
                                if (event.target == _status.currentPhase) {
                                    event.target.addSkill('ua_yinghun2');
                                    for (var i of result.cards) {
                                        if (!event.target.storage.ua_yinghun2.includes(i.suit)) event.target.storage.ua_yinghun2.add(i.suit);
                                    }
                                } else {
                                    event.target.addSkill('ua_yinghun3');
                                    for (var i of result.cards) {
                                        if (!event.target.storage.ua_yinghun3.includes(i.suit)) event.target.storage.ua_yinghun3.add(i.suit);
                                    }
                                }
                            },
                        },
                        ua_yinghun2: {
                            trigger: { source: 'damageBefore' },
                            forced: true,
                            mark: true,
                            marktext: '英魂',
                            intro: {
                                name: '英魂',
                                content(storage, player) {
                                    let str = '当你使用';
                                    for (var i = 0; i < player.storage.ua_yinghun2.length; i++) {
                                        let suit = player.storage.ua_yinghun2[i];
                                        if (suit) str += lib.translate[suit];
                                    }
                                    str += '的牌造成的伤害+1,触发后移除对应花色,效果持续到下个回合结束时.';
                                    return str;
                                },
                            },
                            init(player) {
                                if (!player.storage.ua_yinghun2) player.storage.ua_yinghun2 = [];
                            },
                            content() {
                                trigger.audioed = true;
                                trigger.num++;
                                player.storage.ua_yinghun2.remove(trigger.card.suit);
                                if (player.storage.ua_yinghun2.length == 0) player.removeSkill('ua_yinghun2');
                            },
                            filter(event, player) {
                                return player.storage.ua_yinghun2.includes(event.card.suit);
                            },
                            onremove(player) {
                                delete player.storage.ua_yinghun2;
                            },
                            group: 'ua_yinghun2_ban',
                        },
                        ua_yinghun2_ban: {
                            trigger: { player: 'phaseAfter' },
                            forced: true,
                            content() {
                                player.storage.ua = true;
                                player.addSkill('ua_yinghun3');
                                player.storage.ua_yinghun3.addArray(player.storage.ua_yinghun2);
                                player.removeSkill('ua_yinghun2');
                            },
                        },
                        ua_yinghun3: {
                            trigger: { source: 'damageBefore' },
                            forced: true,
                            mark: true,
                            marktext: '英魂',
                            intro: {
                                name: '英魂',
                                content(storage, player) {
                                    let str = '当你使用';
                                    for (var i = 0; i < player.storage.ua_yinghun3.length; i++) {
                                        let suit = player.storage.ua_yinghun3[i];
                                        if (suit) str += lib.translate[suit];
                                    }
                                    str += '的牌造成的伤害+1,触发后移除对应花色,效果持续到下个回合结束时.';
                                    return str;
                                },
                            },
                            init(player) {
                                if (!player.storage.ua_yinghun3) player.storage.ua_yinghun3 = [];
                            },
                            content() {
                                trigger.audioed = true;
                                trigger.num++;
                                player.storage.ua_yinghun3.remove(trigger.card.suit);
                                if (player.storage.ua_yinghun3.length == 0) player.removeSkill('ua_yinghun3');
                            },
                            filter(event, player) {
                                return player.storage.ua_yinghun3.includes(event.card.suit);
                            },
                            onremove(player) {
                                delete player.storage.ua_yinghun3;
                            },
                            group: 'ua_yinghun3_ban',
                        },
                        ua_yinghun3_ban: {
                            trigger: { player: 'phaseAfter' },
                            forced: true,
                            _priority: 1,
                            content() {
                                if (!player.storage.ua) player.removeSkill('ua_yinghun3');
                                else delete player.storage.ua;
                            },
                        },
                        //卞夫人
                        ua_fuwei: {
                            audio: 'wanwei',
                            trigger: {
                                player: 'loseAfter',
                                global: 'gainAfter',
                            },
                            filter(event, player) {
                                var evt = event;
                                if (event.name == 'lose') {
                                    if (event.type != 'discard') return false;
                                    evt = event.parent;
                                }
                                if (evt[event.name == 'gain' ? 'bySelf' : 'notBySelf'] != true) return false;
                                var evtx = event.getl(player);
                                return evtx && evtx.cards2 && evtx.cards2.length;
                            },
                            prompt2(event, player) {
                                var evt = event.getl(player),
                                    origins = evt.cards2.map(function (i) {
                                        return get.name(i, evt.hs.includes(i) ? player : false);
                                    });
                                return `从牌堆中获得${get.translation(origins)};若没有则改为摸一张牌`;
                            },
                            usable: 1,
                            content() {
                                var num = 0,
                                    cards = [],
                                    evt = trigger.getl(player),
                                    origins = evt.cards2.map(function (i) {
                                        return get.name(i, evt.hs.includes(i) ? player : false);
                                    });
                                for (var i of origins) {
                                    var card = get.cardPile2(function (card) {
                                        return card.name == i && !cards.includes(card);
                                    });
                                    if (card) cards.push(card);
                                    else num++;
                                }
                                if (cards.length) player.gain(cards, 'gain2');
                                if (num > 0) player.draw(num);
                            },
                        },
                        ua_yuejian: {
                            audio: 'ext:独爱/audio:2',
                            trigger: { global: 'useCardAfter' },
                            filter(event, player) {
                                return player != event.player && event.targets && event.targets.includes(player) && player.countCards('h') > 0;
                            },
                            prompt2(event, player) {
                                var suit = event.card.suit,
                                    hs = player.getCards('h'),
                                    cards = event.cards.filterInD();
                                if (!lib.suit.includes(suit) || !cards.length) {
                                    return '你可展示所有手牌';
                                }
                                for (var i of hs) {
                                    if (i.suit == suit) {
                                        return '你可展示所有手牌';
                                    }
                                }
                                return `你可展示所有手牌,<span class="yellowtext">获得${get.translation(cards)}</span>`;
                            },
                            check(event, player) {
                                var suit = event.card.suit,
                                    hs = player.getCards('h'),
                                    cards = event.cards.filterInD();
                                if (!lib.suit.includes(suit) || !cards.length) {
                                    return false;
                                }
                                for (var i of hs) {
                                    if (i.suit == suit) {
                                        return false;
                                    }
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                player.showHandcards(get.translation(player) + '发动了<b><约俭></b>');
                                var suit = trigger.card.suit,
                                    hs = player.getCards('h');
                                if (!lib.suit.includes(suit)) {
                                    event.finish();
                                    return;
                                }
                                for (var i of hs) {
                                    if (i.suit == suit) {
                                        event.finish();
                                        return;
                                    }
                                }
                                ('step 1');
                                var cards = trigger.cards.filterInD();
                                if (cards.length) player.gain(cards, 'gain2');
                            },
                        },
                        //曹昂
                        ua_kangkai: {
                            audio: 'ext:独爱/audio:2',
                            trigger: { global: 'useCardToTargeted' },
                            filter(event, player) {
                                if ((event.card.name == 'sha' || event.card.name == 'juedou') && get.distance(player, event.target) <= 1 && event.target.isIn()) return true;
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) >= 0;
                            },
                            logTarget: 'target',
                            content() {
                                'step 0';
                                player.draw();
                                if (trigger.target != player) {
                                    player.chooseCard(true, 'he', `交给${get.translation(trigger.target)}一张牌`).set('ai', function (card) {
                                        if (get.position(card) == 'e') return -1;
                                        if (card.name == 'shan') return 1;
                                        if (get.type(card) == 'equip') return 0.5;
                                        return 0;
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                player.give(result.cards, trigger.target, 'give');
                                event.card = result.cards[0];
                                ('step 2');
                                if (trigger.target.getCards('h').includes(card) && get.type(card) == 'equip') {
                                    trigger.target.chooseUseTarget(card);
                                }
                            },
                            ai: {
                                threaten: 1.1,
                            },
                            mod: {
                                globalFrom(from, to, distance) {
                                    if (to.hasSkill('ua_kangkai2_ban')) return -Infinity;
                                },
                            },
                            global: 'ua_kangkai2',
                        },
                        ua_kangkai2: {
                            trigger: { player: 'useCard' },
                            filter(event, player) {
                                if (player.hasSkill('ua_kangkai2_ban')) return false;
                                let target = game.findPlayer(function (target) {
                                    return target.hasSkill('ua_kangkai');
                                });
                                return get.type(event.card) == 'equip' && get.distance(target, player) == 1;
                            },
                            content() {
                                player.addSkill('ua_kangkai2_ban');
                            },
                        },
                        ua_kangkai2_ban: {
                            mark: true,
                            marktext: '慷忾',
                            intro: {},
                            trigger: {
                                player: 'loseAfter',
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.countCards('e')) return false;
                                var evt = event.getl(player);
                                return evt && evt.es && evt.es.length;
                            },
                            content() {
                                player.removeSkill('ua_kangkai2_ban');
                            },
                        },
                        //孙策
                        ua_jiang: {
                            shaRelated: true,
                            audio: 'ext:独爱/audio:2',
                            preHidden: true,
                            audioname: ['sp_lvmeng', 're_sunben', 're_sunce'],
                            trigger: {
                                player: 'useCardToPlayered',
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                if (!(event.card.name == 'juedou' || (event.card.name == 'sha' && get.color(event.card) == 'red'))) return false;
                                return player == event.target || event.parent.triggeredTargets3.length == 1;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var str1 = '摸1张牌';
                                var str2 = '失去1点体力,摸2张牌';
                                player.chooseControl(str1, str2);
                                event.str = str1;
                                ('step 1');
                                if (result.control == event.str) {
                                    player.draw();
                                } else {
                                    player.loseHp();
                                    player.draw(2);
                                }
                            },
                        },
                        ua_hunzi: {
                            //audioname:['re_sunben'],
                            audio: 'ext:独爱/audio:2',
                            juexingji: true,
                            derivation: ['ua_yingzi', 'ua_yinghun'],
                            trigger: { player: ['loseHpEnd', 'damageEnd', 'recoverAfter'] },
                            filter(event, player) {
                                return player.hp <= 1 && !player.storage.ua_hunzi;
                            },
                            forced: true,
                            //_priority:3,
                            content() {
                                player.loseMaxHp();
                                player.addSkill('ua_spsx');
                                player.addSkill('ua_yingzi');
                                player.addSkill('ua_yinghun');
                                game.log(player, '获得了技能', '#g<b><英姿></b>和<b><英魂></b>');
                                player.awakenSkill(event.name);
                                player.storage[event.name] = true;
                            },
                            ai: {
                                threaten(player, target) {
                                    if (target.hp == 1) return 2;
                                    return 0.5;
                                },
                                maixie: true,
                                effect: {
                                    target(card, player, target) {
                                        if (!target.hasFriend()) return;
                                        if (get.tag(card, 'damage') == 1 && target.hp == 2 && !target.isTurnedOver() && _status.currentPhase != target && get.distance(_status.currentPhase, target, 'absolute') <= 3) return [0.5, 1];
                                    },
                                },
                            },
                        },
                        ua_spsx: {
                            forced: true,
                            mod: {
                                maxHandcardBase(player, num) {
                                    return player.maxHp;
                                },
                            },
                        },
                        ua_zhiba: {
                            global: 'zhiba_global',
                            audioname: ['re_sunben'],
                            audio: 'zhiba_global',
                            zhuSkill: true,
                        },
                        ua_zhiba2: {
                            audio: 'ext:独爱/audio:2',
                            audioname: ['re_sunben'],
                            //forceaudio:true,
                            enable: 'phaseUse',
                            prompt() {
                                var player = _status.event.player;
                                var list = game.filterPlayer(function (target) {
                                    return target.hasZhuSkill('ua_zhiba', player) && player.canCompare(target);
                                });
                                var str = '和' + get.translation(list);
                                if (list.length > 1) str += '中的一人';
                                str += '进行拼点.若你没赢,孙策可获得2张拼点牌.';
                                return str;
                            },
                            filter(event, player) {
                                if (player.group != 'wu' || player.countCards('h') == 0) return false;
                                return game.hasPlayer(function (target) {
                                    return target.hasZhuSkill('ua_zhiba', player) && player.canCompare(target);
                                });
                            },
                            filterTarget(card, player, target) {
                                return target.hasZhuSkill('ua_zhiba', player) && player.canCompare(target);
                            },
                            forced: true,
                            clearTime: true,
                            prepare(cards, player, targets) {
                            },
                            usable: 1,
                            content() {
                                'step 0';
                                if (target.storage.ua_hunzi) {
                                    target
                                        .chooseControl('拒绝', '不拒绝')
                                        .set('prompt', '是否拒绝制霸拼点？')
                                        .set('choice', get.attitude(target, player) <= 0);
                                } else {
                                    event.forced = true;
                                }
                                ('step 1');
                                if (!event.forced && result.control == '拒绝') {
                                    game.log(target, '拒绝了拼点');
                                    target.chat('拒绝');
                                    event.finish();
                                    return;
                                }
                                player
                                    .chooseToCompare(target, function (card) {
                                        if (card.name == 'du') return 20;
                                        var player = get.owner(card);
                                        var target = _status.event.parent.target;
                                        if (player != target && get.attitude(player, target) > 0) {
                                            return -card.number;
                                        }
                                        return card.number;
                                    })
                                    .set('preserve', 'lose');
                                ('step 2');
                                if (result.bool == false) {
                                    var list = [];
                                    if (get.position(result.player) == 'd') list.push(result.player);
                                    if (get.position(result.target) == 'd') list.push(result.target);
                                    if (!list.length) event.finish();
                                    else {
                                        event.list = list;
                                        target.chooseBool(`是否获得${get.translation(list)}？`).ai = function () {
                                            return get.value(list) > 0;
                                        };
                                    }
                                } else event.finish();
                                ('step 3');
                                if (result.bool) target.gain(event.list, 'gain2');
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                },
                                expose: 0.2,
                                result: {
                                    target(player, target) {
                                        if (player.countCards('h', 'du') && get.attitude(player, target) < 0) return -1;
                                        if (player.countCards('h') <= player.hp) return 0;
                                        var maxnum = 0;
                                        var cards2 = target.getCards('h');
                                        for (var i = 0; i < cards2.length; i++) {
                                            if (cards2[i].number > maxnum) {
                                                maxnum = cards2[i].number;
                                            }
                                        }
                                        if (maxnum > 10) maxnum = 10;
                                        if (maxnum < 5 && cards2.length > 1) maxnum = 5;
                                        var cards = player.getCards('h');
                                        if (Array.isArray(cards))
                                            for (var i of cards) {
                                                if (i.number < maxnum) return 1;
                                            }
                                        return 0;
                                    },
                                },
                            },
                        },
                        //于禁
                        ua_zhenjun: {
                            audio: 'ext:独爱/audio:2',
                            trigger: {
                                player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
                            },
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current.countCards('he') > 0;
                                });
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('decadezhenjun'), function (card, player, target) {
                                        return target.countCards('he') > 0;
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target) * (target.countCards('e') + 1);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    var num = Math.max(target.countCards('h') - target.hp, 1);
                                    player.discardPlayerCard(num, target, true);
                                }
                                ('step 2');
                                if (result.cards && result.cards.length) {
                                    if (Array.isArray(result.cards))
                                        for (var i of result.cards) {
                                            if (get.type(i) == 'equip') {
                                                event.finish();
                                                return;
                                            }
                                        }
                                    event.num = result.cards.length;
                                    if (event.num > 0) {
                                        var prompt = `弃置一张牌,或令${get.translation(event.target)}摸1张牌`;
                                        player.chooseToDiscard(prompt, 'he').ai = function (card) {
                                            return 7 - get.value(card);
                                        };
                                    } else event.finish();
                                } else event.finish();
                                ('step 3');
                                if (!result.bool) {
                                    event.target.draw(1);
                                }
                            },
                        },
                        //曹洪
                        ua_yuanhu: {
                            audio: 'yuanhu',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.hasCard({ type: 'equip' }, 'eh');
                            },
                            filterCard: { type: 'equip' },
                            filterTarget(card, player, target) {
                                var card = ui.selected.cards[0];
                                return !target.isDisabled(get.subtype(card));
                            },
                            discard: false,
                            lose: false,
                            prepare: 'give',
                            position: 'he',
                            check(card) {
                                if (get.position(card) == 'h') return 9 - get.value(card);
                                return 7 - get.value(card);
                            },
                            content() {
                                'step 0';
                                target.equip(cards[0]);
                                ('step 1');
                                var str1 = '弃置其上下家区域内的共计2张牌.';
                                var str2 = '令其摸2张牌';
                                var str3 = '令其回复1点体力';
                                var list = [str1, str2];
                                if (target.isDamaged()) list.push(str3);
                                player.chooseControl().set('choiceList', list);
                                ('step 2');
                                if (result.index == 0) {
                                    event.count = 2;
                                    event.targets = [];
                                }
                                if (result.index == 1) {
                                    target.draw(2);
                                    event.finish();
                                }
                                if (result.index == 2) {
                                    target.recover();
                                    event.finish();
                                }
                                ('step 3');
                                event.count--;
                                player.chooseTarget('选择上家或下家,依次弃置其区域内共计2张牌', function (card, player, u) {
                                    return u == target.next || u == target.previous;
                                    return u.countDiscardableCards(player, 'he');
                                });
                                ('step 4');
                                if (result.bool) {
                                    player.line(result.targets[0], 'water');
                                    targets.add(result.targets[0]);
                                    player.discardPlayerCard(result.targets[0], 'hej', true);
                                } else if (!targets.length) event.finish();
                                ('step 5');
                                if (event.count) event.goto(3);
                            },
                            group: 'ua_yuanhu_end',
                        },
                        ua_yuanhu_end: {
                            trigger: { player: 'phaseJieshuBegin' },
                            filter(event, player) {
                                return player.hasCard({ type: 'equip' }, 'eh');
                            },
                            content() {
                                'step 0';
                                player.chooseCardTarget({
                                    prompt: '',
                                    prompt2: '你可将一张装备牌置入一名角色的装备区',
                                    filterCard: lib.skill.ua_yuanhu.filterCard,
                                    filterTarget: lib.skill.ua_yuanhu.filterTarget,
                                    position: 'he',
                                });
                                ('step 1');
                                if (result.bool) {
                                    result.skill = 'ua_yuanhu';
                                    player.useResult(result, event);
                                }
                            },
                        },
                        //曹仁
                        ua_kuiwei: {
                            audio: 'ext:独爱/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            check(event, player) {
                                if (player.isTurnedOver()) return true;
                                var num = game.countPlayer(function (current) {
                                    return current.getEquip(1);
                                });
                                return num > 1;
                            },
                            content() {
                                'step 0';
                                player.turnOver();
                                ('step 1');
                                var num = game.countPlayer(function (current) {
                                    return current.getEquip(1);
                                });
                                player.draw(2 + num);
                                player.addSkill('ua_kuiwei2');
                            },
                            ai: {
                                effect: {
                                    target(card) {
                                        if (card.name == 'guiyoujie') return [0, 2];
                                    },
                                },
                            },
                        },
                        ua_kuiwei2: {
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            content() {
                                var num = game.countPlayer(function (current) {
                                    return current.getEquip(1);
                                });
                                if (num >= player.countCards('he')) {
                                    player.discard(player.getCards('he'));
                                } else if (num > 0) {
                                    player.chooseToDiscard('he', num, true);
                                }
                                player.removeSkill('ua_kuiwei2');
                            },
                        },
                        ua_jiewei: {
                            trigger: { player: 'turnOverEnd' },
                            //direct:true,
                            forced: true,
                            audio: 'xinjiewei',
                            content() {
                                'step 0';
                                player.draw();
                                player.chooseToUse(function (card) {
                                    if (!lib.filter.cardEnabled(card, _status.event.player, _status.event)) {
                                        return false;
                                    }
                                    var type = get.type(card, 'trick');
                                    return type == 'trick' || type == 'equip';
                                }, '是否使用1张锦囊牌或装备牌？');
                                ('step 1');
                                if (result.bool) {
                                    var type = get.type(result.card || result.cards[0]);
                                    if (
                                        game.hasPlayer(function (current) {
                                            if (type == 'equip') {
                                                return current.countCards('e');
                                            } else {
                                                return current.countCards('j');
                                            }
                                        })
                                    ) {
                                        var next = player.chooseTarget(`是否弃置场上的1张${get.translation(type)}牌？`, function (card, player, target) {
                                            if (_status.event.type == 'equip') {
                                                return target.countCards('e') > 0;
                                            } else {
                                                return target.countCards('j') > 0;
                                            }
                                        });
                                        next.set('ai', function (target) {
                                            if (type == 'equip') {
                                                return -get.attitude(player, target);
                                            } else {
                                                return get.attitude(player, target);
                                            }
                                        });
                                        next.set('type', type);
                                        event.type = type;
                                    } else {
                                        event.finish();
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.type && result.bool && result.targets && result.targets.length) {
                                    player.line(result.targets, 'green');
                                    if (event.type == 'equip') {
                                        player.discardPlayerCard(result.targets[0], 'e', true);
                                    } else {
                                        player.discardPlayerCard(result.targets[0], 'j', true);
                                    }
                                }
                            },
                        },
                        //曹休
                        ua_qianju: {
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - from.getDamagedHp();
                                },
                            },
                        },
                        ua_qingxi: {
                            audio: 'ext:独爱/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return (event.card && event.card.name == 'sha') || event.card.name == 'juedou';
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) < 0;
                            },
                            logTarget: 'target',
                            content() {
                                'step 0';
                                var num = Math.min(
                                    game.countPlayer(function (current) {
                                        return player.inRange(current);
                                    }),
                                    player.getEquip(1) ? 4 : 2
                                );
                                if (trigger.target.countCards('h') < num) {
                                    event.directfalse = true;
                                } else {
                                    trigger.target.chooseToDiscard(num, `弃置${get.cnNumber(num)}张手牌,或令${get.translation(trigger.card)}的伤害+1`).set('ai', function (card) {
                                        var player = _status.event.player;
                                        if (player.hp == 1) {
                                            if (get.type(card) == 'basic') {
                                                return 8 - get.value(card);
                                            } else {
                                                return 10 - get.value(card);
                                            }
                                        } else {
                                            if (num > 2) {
                                                return 0;
                                            }
                                            return 8 - get.value(card);
                                        }
                                    });
                                }
                                ('step 1');
                                if (!event.directfalse && result.bool) {
                                    var e1 = player.getEquip(1);
                                    if (e1) {
                                        player.discard(e1, 'notBySelf');
                                    }
                                    event.finish();
                                } else {
                                    var id = trigger.target.playerid;
                                    var map = trigger.customArgs;
                                    if (!map[id]) map[id] = {};
                                    if (!map[id].extraDamage) map[id].extraDamage = 0;
                                    map[id].extraDamage++;
                                    player.judge(function (card) {
                                        if (get.color(card) == 'red') return 1;
                                        return 0;
                                    }).judge2 = function (result) {
                                        return result.bool;
                                    };
                                }
                                ('step 2');
                                if (result.color == 'red') trigger.directHit.add(trigger.target);
                            },
                        },
                        ua_jiangchi: {
                            audio: 'jiangchi',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var list = ['摸一张牌,直到你的下个回合开始,受到伤害后摸一张牌', '摸三张牌,本回合内不能使用或打出【杀】且手牌上限+2', '本回合可以多使用一张【杀】且无距离限制'];
                                player
                                    .chooseControl('cancel2')
                                    .set('prompt', get.prompt('ua_jiangchi'))
                                    .set('choiceList', list)
                                    .set('ai', function () {
                                        var player = _status.event.player;
                                        var num = player.countCards('hs', function (card) {
                                            return card.name == 'sha' && player.hasValueTarget(card, false);
                                        });
                                        if (num == 0) return 1;
                                        if (num > 1) return 2;
                                        return 0;
                                    });
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    switch (result.index) {
                                        case 0: {
                                            player.draw();
                                            player.addTempSkill('ua_jiangchi_draw', { player: 'phaseBegin' });
                                            break;
                                        }
                                        case 1: {
                                            player.draw(3);
                                            player.addTempSkill('ua_jiangchi_hand');
                                            break;
                                        }
                                        case 2: {
                                            player.addTempSkill('ua_jiangchi_more');
                                            break;
                                        }
                                    }
                                }
                            },
                            subSkill: {
                                draw: {
                                    charlotte: true,
                                    audio: 'jiangchi',
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    forced: true,
                                    content() {
                                        player.draw();
                                    },
                                },
                                hand: {
                                    charlotte: true,
                                    mod: {
                                        maxHandcard(player, num) {
                                            return num + 2;
                                        },
                                        cardEnabled(card) {
                                            if (card.name == 'sha') return false;
                                        },
                                    },
                                },
                                more: {
                                    //QQQ
                                    mod: {
                                        targetInRange(card, player, target, now) {
                                            if (card.name == 'sha') return true;
                                        },
                                        cardUsable(card, player, num) {
                                            if (card.name == 'sha') return num + 1;
                                        },
                                    },
                                },
                            },
                        },
                        //蔡文姬
                        ua_chenqing: {
                            audio: 'ext:独爱/audio:2',
                            trigger: {
                                global: 'dying',
                            },
                            filter(event, player) {
                                return event.player.hp <= 0 && !player.hasSkill('ua_chenqing2');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('ua_chenqing'), function (card, player, target) {
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
                                    player.addTempSkill('ua_chenqing2', 'roundStart');
                                    event.target = result.targets[0];
                                    event.target.draw(4);
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
                                            if (Array.isArray(ui.selected.cards))
                                                for (var i of ui.selected.cards) {
                                                    if (i.suit == suit) {
                                                        return -4 - get.value(card);
                                                    }
                                                }
                                        }
                                        if (att < 0 && ui.selected.cards.length == 3) {
                                            var suit = card.suit;
                                            if (Array.isArray(ui.selected.cards))
                                                for (var i of ui.selected.cards) {
                                                    if (i.suit == suit) {
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
                                    if (Array.isArray(result.cards))
                                        for (var i of result.cards) {
                                            suits.add(i.suit);
                                        }
                                    if (suits.length == 4) {
                                        trigger.player.recover(1 - trigger.player.hp);
                                    }
                                }
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 1.5,
                            },
                        },
                        ua_chenqing2: {},
                        ua_mozhi: {
                            audio: 'ext:独爱/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return (
                                    player.getHistory('useCard', function (evt) {
                                        return evt.isPhaseUsing() && ['basic', 'trick'].includes(get.type(evt.card));
                                    }).length && player.countCards('hs') > 0
                                );
                            },
                            content() {
                                'step 0';
                                event.count = 2;
                                event.history = player.getHistory('useCard', function (evt) {
                                    return evt.isPhaseUsing() && ['basic', 'trick'].includes(get.type(evt.card));
                                });
                                ('step 1');
                                event._result = {};
                                if (event.count && event.history.length && player.countCards('hs')) {
                                    event.count--;
                                    var card = event.history.shift().card;
                                    card = { name: card.name, nature: card.nature };
                                    if (card.name != 'jiu' && lib.filter.cardEnabled(card)) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return player.canUse(card, current);
                                            })
                                        ) {
                                            lib.skill.ua_mozhix.viewAs = card;
                                            var next = player.chooseToUse();
                                            if (next.isOnline()) {
                                                player.send(function (card) {
                                                    lib.skill.ua_mozhix.viewAs = card;
                                                }, card);
                                            }
                                            next.set('openskilldialog', `默识:将1张手牌当${get.translation(card)}使用`);
                                            next.set('norestore', true);
                                            next.set('_backupevent', 'ua_mozhix');
                                            next.set('custom', {
                                                add: {},
                                                replace: { window() { } },
                                            });
                                            next.backup('ua_mozhix');
                                        }
                                    }
                                }
                                ('step 2');
                                if (result && result.bool) event.goto(1);
                            },
                        },
                        ua_mozhix: {
                            filterCard(card) {
                                return get.itemtype(card) == 'card';
                            },
                            selectCard: 1,
                            position: 'hs',
                            popname: true,
                        },
                        chenqing2: { charlotte: true },
                        //曹叡
                        ua_huituo: {
                            audio: 'ext:独爱/audio:2',
                            trigger: { player: 'damageEnd' },
                            content() {
                                'step 0';
                                player.judge();
                                ('step 1');
                                if (result.color) {
                                    if (result.color == 'red') {
                                        player.chooseTarget(get.prompt2('ua_huituo'));
                                        event.goto(2);
                                    } else {
                                        player.chooseTarget(get.prompt2('ua_huituo'));
                                        event.goto(3);
                                    }
                                }
                                ('step 2');
                                result.targets[0].recover();
                                event.finish();
                                ('step 3');
                                result.targets[0].draw(2);
                            },
                        },
                        ua_mingjian: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            filterCard: true,
                            selectCard: -1,
                            discard: false,
                            lose: false,
                            delay: false,
                            content() {
                                player.give(cards, target);
                                target.addTempSkill('ua_mingjian2', { player: 'phaseAfter' });
                                target.storage.ua_mingjian2++;
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
                        },
                        ua_mingjian2: {
                            charlotte: true,
                            mark: true,
                            intro: {
                                content: '手牌上限+#,出杀次数+#',
                            },
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = 0;
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.storage.ua_mingjian2;
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + player.storage.ua_mingjian2;
                                },
                            },
                        },
                        ua_xingshuai: {
                            audio: 'ext:独爱/audio:2',
                            trigger: { player: 'dying' },
                            //_priority:6,
                            zhuSkill: true,
                            filter(event, player) {
                                if (player.storage.ua_xingshuai) return false;
                                if (player.hp > 0) return false;
                                if (!player.hasZhuSkill('ua_xingshuai')) return false;
                                return game.hasPlayer(function (current) {
                                    return current != player && current.group == 'wei';
                                });
                            },
                            init(player) {
                                if (player.hasZhuSkill('ua_xingshuai')) {
                                    player.markSkill('ua_xingshuai');
                                    player.storage.ua_xingshuai = false;
                                }
                            },
                            intro: {
                                content: 'limited',
                            },
                            limited: true,
                            mark: false,
                            content() {
                                'step 0';
                                player.storage.ua_xingshuai = true;
                                player.awakenSkill('ua_xingshuai');
                                var targets = game.filterPlayer();
                                targets.remove(player);
                                event.targets = targets;
                                event.damages = [];
                                ('step 1');
                                if (event.targets.length) {
                                    var current = event.targets.shift();
                                    if (current.group == 'wei') {
                                        current
                                            .chooseBool(`是否令${get.translation(player)}回复一点体力？`)
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
                                    game.log(event.current, '令', player, '回复一点体力');
                                    player.recover();
                                }
                                if (event.targets.length) {
                                    event.goto(1);
                                }
                                ('step 3');
                                if (event.damages.length) {
                                    var next = game.createEvent('ua_xingshuai_next');
                                    event.next.remove(next);
                                    trigger.after.push(next);
                                    next.targets = event.damages;
                                    next.setContent(function () {
                                        targets.shift().damage();
                                        if (targets.length) event.redo();
                                    });
                                }
                            },
                        },
                        //曹植
                        ua_luoying: {
                            audio: 'ext:独爱/audio:2',
                            forced: true,
                            audioname: ['dc_caozhi'],
                            group: ['ua_luoying_discard', 'ua_luoying_judge'],
                            subfrequent: ['judge'],
                            subSkill: {
                                discard: {
                                    audio: 'reluoying',
                                    audioname: ['dc_caozhi'],
                                    trigger: { global: ['loseAfter', 'loseAsyncAfter'] },
                                    filter(event, player) {
                                        if (event.type != 'discard' || event.getlx === false) return false;
                                        var cards = event.cards.slice(0);
                                        var evt = event.getl(player);
                                        if (evt && evt.cards) cards.removeArray(evt.cards);
                                        if (Array.isArray(cards))
                                            for (var i of cards) {
                                                if (i.original != 'j' && i.suit == 'club' && get.position(i, true) == 'd') {
                                                    return true;
                                                }
                                            }
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        var cards = [],
                                            cards2 = trigger.cards.slice(0),
                                            evt = trigger.getl(player);
                                        if (evt && evt.cards) cards2.removeArray(evt.cards);
                                        for (var i = 0; i < cards2.length; i++) {
                                            if (cards2[i].original != 'j' && cards2[i].suit == 'club' && get.position(cards2[i], true) == 'd') {
                                                cards.push(cards2[i]);
                                            }
                                        }
                                        if (cards.length) {
                                            player.chooseButton(['落英:选择要获得的牌', cards], [1, cards.length]).set('ai', function (button) {
                                                return get.value(button.link, _status.event.player, 'raw');
                                            });
                                        }
                                        ('step 1');
                                        if (result.bool) {
                                            player.gain(result.links, 'gain2', 'log');
                                        }
                                    },
                                },
                                judge: {
                                    audio: 'reluoying',
                                    audioname: ['dc_caozhi'],
                                    trigger: { global: 'cardsDiscardAfter' },
                                    forced: true,
                                    filter(event, player) {
                                        var evt = event.parent.relatedEvent;
                                        if (!evt || evt.name != 'judge') return;
                                        if (evt.player == player) return false;
                                        if (get.position(event.cards[0], true) != 'd') return false;
                                        return event.cards[0].suit == 'club';
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseButton(['落英:选择要获得的牌', trigger.cards], [1, trigger.cards.length]).set('ai', function (button) {
                                            return get.value(button.link, _status.event.player, 'raw');
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            player.gain(result.links, 'gain2', 'log');
                                        }
                                    },
                                },
                            },
                        },
                        ua_jiushi: {
                            audio: 'ext:独爱/audio:2',
                            trigger: {
                                player: 'useCardAfter',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'jiu';
                            },
                            forced: true,
                            content() {
                                player.addTempSkill('ua_jiushi_sha', { player: 'phaseEnd' });
                                player.addMark('ua_jiushi_sha', 1, false);
                            },
                            group: ['ua_jiushi_use', 'ua_jiushi_record', 'ua_jiushi_damage'],
                            subSkill: {
                                use: {
                                    audio: 'dcjiushi',
                                    enable: 'chooseToUse',
                                    prompt: '是否发动【酒诗】,将武将牌翻面,视为使用1张【酒】.',
                                    hiddenCard(player, name) {
                                        if (name == 'jiu') return !player.isTurnedOver();
                                        return false;
                                    },
                                    filter(event, player) {
                                        if (player.isTurnedOver()) return false;
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
                                                    for (var i of players) {
                                                        if (get.attitude(player, i) < 0) {
                                                            if (player.canUse('sha', i, true, true)) {
                                                                targets.push(i);
                                                            }
                                                        }
                                                    }
                                                    if (targets.length) {
                                                        target = targets[0];
                                                    } else {
                                                        return 0;
                                                    }
                                                    var num = get.effect(target, { name: 'sha' }, player, player);
                                                    for (var i = 1; i < targets.length; i++) {
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
                                                if (card.name == 'guiyoujie') return [0, 0.5];
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
                                record: {
                                    trigger: { player: 'damageBegin3' },
                                    silent: true,
                                    firstDo: true,
                                    filter(event, player) {
                                        return player.isTurnedOver();
                                    },
                                    content() {
                                        trigger.ua_jiushi = true;
                                    },
                                },
                                damage: {
                                    audio: 'dcjiushi',
                                    trigger: { player: 'damageEnd' },
                                    check(event, player) {
                                        return player.isTurnedOver();
                                    },
                                    prompt: '是否发动【酒诗】,将武将牌翻面？',
                                    filter(event, player) {
                                        if (event.ua_jiushi) {
                                            return true;
                                        }
                                        return false;
                                    },
                                    content() {
                                        delete trigger.ua_jiushi;
                                        player.turnOver();
                                    },
                                },
                                sha: {
                                    charlotte: true,
                                    mod: {
                                        cardUsable(card, player, num) {
                                            if (card.name == 'sha') return num + player.countMark('ua_jiushi_sha');
                                        },
                                    },
                                },
                            },
                        },
                        ua_xingshang: {
                            audio: 'ext:独爱/audio:2',
                            trigger: { global: 'die' },
                            preHidden: true,
                            init(player) {
                                player.storage.ua_xingshang = 0;
                            },
                            content() {
                                'step 0';
                                event.togain = trigger.player.getCards('hej');
                                player.gain(event.togain, trigger.player, 'giveAuto', 'bySelf');
                                let s1 = '令x+1';
                                let s2 = '令x-1';
                                player.chooseControl(s1, s2);
                                ('step 1');
                                if (result.index == 0) player.storage.ua_xingshang += 1;
                                else player.storage.ua_xingshang -= 1;
                            },
                        },
                        ua_fangzhu: {
                            audio: 'ext:独爱/audio:2',
                            trigger: { player: 'damageEnd' },
                            forced: true,
                            preHidden: true,
                            content() {
                                'step 0';
                                player.storage.ua_fangzhu = player.getDamagedHp() + player.storage.ua_xingshang;
                                player
                                    .chooseTarget(`令一名其他角色翻面,该角色摸${player.storage.ua_fangzhu}张牌`, function (card, player, target) {
                                        return player != target;
                                    })
                                    .setHiddenSkill('ua_fangzhu').ai = function (target) {
                                        if (target.hasSkillTag('noturn')) return 0;
                                        var player = _status.event.player;
                                        if (get.attitude(_status.event.player, target) == 0) return 0;
                                        if (get.attitude(_status.event.player, target) > 0) {
                                            if (target.classList.contains('turnedover')) return 1000 - target.countCards('h');
                                            if (player.getDamagedHp() < 3) return -1;
                                            return 100 - target.countCards('h');
                                        } else {
                                            if (target.classList.contains('turnedover')) return -1;
                                            if (player.getDamagedHp() >= 3) return -1;
                                            return 1 + target.countCards('h');
                                        }
                                    };
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].draw(player.storage.ua_fangzhu);
                                    result.targets[0].turnOver();
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                            if (target.hp <= 1) return;
                                            if (!target.hasFriend()) return;
                                            var hastarget = false;
                                            var turnfriend = false;
                                            var players = game.filterPlayer();
                                            for (var i of players) {
                                                if (get.attitude(target, i) < 0 && !i.isTurnedOver()) {
                                                    hastarget = true;
                                                }
                                                if (get.attitude(target, i) > 0 && i.isTurnedOver()) {
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
                        ua_songwei: {
                            group: 'ua_songwei2',
                            audioname: ['re_caopi'],
                            audio: 'songwei2',
                            zhuSkill: true,
                        },
                        ua_songwei2: {
                            audio: 'ext:独爱/audio:2',
                            audioname: ['re_caopi'],
                            forceaudio: true,
                            trigger: { global: 'judgeEnd' },
                            filter(event, player) {
                                if (event.player == player || event.player.group != 'wei') return false;
                                if (event.result.color != 'black') return false;
                                return player.hasZhuSkill('ua_songwei', event.player);
                            },
                            forced: true,
                            content() {
                                'step 0';
                                trigger.player.chooseBool(`是否发动【颂威】,令${get.translation(player)}摸一张牌？`).set('choice', get.attitude(trigger.player, player) > 0);
                                ('step 1');
                                if (result.bool) {
                                    trigger.player.line(player, 'green');
                                    player.draw();
                                }
                            },
                        },
                        //陈群
                        ua_pindi: {
                            audio: 'ext:独爱/audio:2',
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return !player.getStorage('ua_pindi_target').includes(target);
                            },
                            filterCard(card, player) {
                                return !player.getStorage('ua_pindi_type').includes(get.type2(card));
                            },
                            check(card) {
                                var num = _status.event.player.getStat('skill').ua_pindi || 0;
                                return 6 + num - get.value(card);
                            },
                            position: 'he',
                            content() {
                                'step 0';
                                player.addTempSkill('ua_pindi_clear', ['phaseUseAfter', 'phaseAfter']);
                                player.markAuto('ua_pindi_target', [target]);
                                player.markAuto('ua_pindi_type', [get.type2(cards[0], cards[0].original == 'h' ? player : false)]);
                                event.num = player.getStat('skill').ua_pindi;
                                if (target.countCards('he') == 0) event._result = { index: 0 };
                                else {
                                    player
                                        .chooseControlList([`令${get.translation(target)}摸${get.cnNumber(event.num)}张牌`, `令${get.translation(target)}弃置${get.cnNumber(event.num)}张牌`], function () {
                                            return _status.event.choice;
                                        })
                                        .set('choice', get.attitude(player, target) > 0 ? 0 : 1);
                                }
                                ('step 1');
                                if (result.index == 0) {
                                    target.draw(event.num);
                                } else {
                                    target.chooseToDiscard(event.num, 'he', true);
                                }
                                ('step 2');
                                if (target.isDamaged()) {
                                    player.link();
                                }
                            },
                            subSkill: {
                                clear: {
                                    charlotte: true, //QQQ
                                    onremove(player) {
                                        delete player.storage.ua_pindi_target;
                                        delete player.storage.ua_pindi_type;
                                    },
                                },
                            },
                            ai: {
                                order: 8,
                                threaten: 1.9,
                                result: {
                                    target(player, target) {
                                        var att = get.attitude(player, target);
                                        var num = (player.getStat('skill').ua_pindi || 0) + 1;
                                        if (att <= 0 && target.countCards('he') < num) return 0;
                                        return get.sgn(att);
                                    },
                                },
                            },
                        },
                        ua_faen: {
                            audio: 'ext:独爱/audio:2',
                            audioname: ['dc_chenqun'],
                            trigger: {
                                global: ['turnOverAfter', 'linkAfter'],
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                if (event.name == 'link') return event.player.isLinked();
                                return !event.player.isTurnedOver();
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) > 0;
                            },
                            content() {
                                trigger.player.draw();
                            },
                        },
                        //邓艾
                        ua_tuntian: {
                            audio: 'ext:独爱/audio:2',
                            marktext: '田',
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            trigger: {
                                player: 'loseAfter',
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (player == _status.currentPhase) {
                                    if (event.type != 'discard') return false;
                                    var evt = event.getl(player);
                                    return (
                                        evt &&
                                        evt.cards2 &&
                                        evt.cards2.filter(function (i) {
                                            return get.name(i, evt.hs.includes(i) ? player : false) == 'sha';
                                        }).length
                                    );
                                }
                                if (event.name == 'gain' && event.player == player) return false;
                                var evt = event.getl(player);
                                return evt && evt.cards2 && evt.cards2.length;
                            },
                            content() {
                                player.judge(function (card) {
                                    return 1;
                                }).callback = lib.skill.ua_tuntian.callback;
                            },
                            callback() {
                                'step 0';
                                if (event.judgeResult.suit == 'heart') {
                                    player.gain(card, 'gain2');
                                    event.finish();
                                } else player.addToExpansion(card, 'gain2').gaintag.add('ua_tuntian');
                            },
                            group: 'ua_tuntian_dist',
                            subSkill: {
                                dist: {
                                    mod: {
                                        globalFrom(from, to, distance) {
                                            var num = distance - from.getExpansions('ua_tuntian').length;
                                            if (_status.event.skill == 'jixi_backup' || _status.event.skill == 'ua_jixi_backup') num++;
                                            return num;
                                        },
                                    },
                                },
                            },
                        },
                        ua_zaoxian: {
                            audio: 'ext:独爱/audio:2',
                            audioname: ['re_dengai'],
                            juexingji: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getExpansions('ua_tuntian').length >= 3;
                            },
                            derivation: 'ua_jixi',
                            content() {
                                player.awakenSkill('ua_zaoxian');
                                player.loseMaxHp();
                                player.recover();
                                player.addSkill('ua_jixi');
                            },
                        },
                        ua_jixi: {
                            audio: 'ext:独爱/audio:2',
                            audioname: ['re_dengai', 'gz_dengai', 'ol_dengai'],
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.getExpansions('ua_tuntian').length && event.filterCard({ name: 'shunshou' }, player, event);
                            },
                            async content(event, trigger, player) {
                                const result = await player.chooseButton(['你的<田>可转化为【顺手牵羊】', player.getExpansions('ua_tuntian')]).set('ai', (button) => 2).forResult();
                                if (result.links?.length) {
                                    await player.chooseUseTarget({ name: 'shunshou' }, result.links, true, false);
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player(player) {
                                        return player.getExpansions('ua_tuntian').length - 1;
                                    },
                                },
                            },
                        },
                        //典韦
                        ua_qiangxi: {
                            group: 'ua_qiangxi_qiangxi',
                            audio: 'qiangxi',
                            trigger: {
                                global: 'damageBegin2',
                            },
                            filter(event, player) {
                                return event.player != player;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseToDiscard('he', '弃1张装备牌,令此伤害+1', function (card) {
                                        return get.type(card) == 'equip';
                                    })
                                    .set('goon', get.damageEffect(trigger.player, player, player) > 0)
                                    .set('ai', function (card) {
                                        if (_status.event.goon) return 12 - get.value(card);
                                        return 0;
                                    });
                                ('step 1');
                                if (result.bool) trigger.num++;
                            },
                            ai: {
                                expose: 0.25,
                            },
                            subSkill: {
                                qiangxi: {
                                    audio: 'qiangxi',
                                    enable: 'phaseUse',
                                    prompt: '失去1点体力,摸1张牌,',
                                    content() {
                                        'step 0';
                                        player.loseHp();
                                        player.draw();
                                        player.chooseTarget('对一名本回合未成为此技能目标的其他角色造成伤害.', function (card, player, target) {
                                            if (player == target) return false;
                                            if (target.hasSkill('ua_qiangxi_off')) return false;
                                            return player.inRange(target);
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            result.targets[0].addTempSkill('ua_qiangxi_off');
                                            result.targets[0].damage();
                                        }
                                    },
                                },
                            },
                        },
                        ua_qiangxi_off: {},
                        //曹操
                        ua_xionglue: {
                            trigger: {
                                player: 'damageEnd',
                                source: 'damageEnd',
                            },
                            filter(event, player) {
                                if (player.storage.ua_xionglue == 2) return false;
                                return !player.hasSkill('ua_xionglue_ban');
                            },
                            content() {
                                'step 0';
                                event.videoId = lib.status.videoId++;
                                var func = function (player, id) {
                                    var list = ['选项一:摸1张牌', '选项二:获得造成伤害的牌'];
                                    var choiceList = ui.create.dialog('雄略:请选择一至两项'); //选项标题
                                    choiceList.videoId = id;
                                    for (var i = 0; i < list.length; i++) {
                                        var str = `<div class="popup text" style="width:calc(100% - 10px);display:inline-block">${list[i]}</div>`;
                                        var next = choiceList.add(str);
                                        next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                                        next.firstChild.link = i;
                                        Object.setPrototypeOf(next, lib.element.Button.prototype); //QQQ
                                        choiceList.buttons.add(next.firstChild);
                                    }
                                    return choiceList;
                                };
                                if (player.isOnline2()) {
                                    player.send(func, player, event.videoId);
                                }
                                event.dialog = func(player, event.videoId);
                                if (player != game.me || _status.auto) {
                                    event.dialog.style.display = 'none';
                                }
                                var next = player.chooseButton();
                                next.set('dialog', event.videoId);
                                next.set('forced', true);
                                next.set('ai', function (button) {
                                    if (button.link == 0) return 1; //button.link对应第button.link+1个选项,return返回一个数值,值<=0不选,值大于0选较大的那几项
                                });
                                next.set('selectButton', [1, 2]); //这是可以选择1～2项,有需要自己调整
                                ('step 1');
                                if (player.isOnline2()) {
                                    player.send('closeDialog', event.videoId);
                                }
                                event.dialog.close();
                                //后面用result.links接收选择的是哪几项
                                //比如这样:
                                if (result.links.includes(0)) player.draw(); //还是对应选项下标(从0开始)
                                if (result.links.includes(1)) {
                                    if (trigger.cards) player.gain(trigger.cards, 'gain2');
                                }
                                //有些需要跨步骤选择,后面步骤再对event.links做类似判断
                                event.links = result.links;
                                ('step 2');
                                if (!player.storage.ua_xionglue) player.storage.ua_xionglue = 0;
                                player.storage.ua_xionglue++;
                                if ((event.links.includes(1) && player == trigger.source) || event.links.length == 2 || player.storage.ua_xionglue == 2) player.addTempSkill('ua_xionglue_ban');
                            },
                        },
                        ua_xionglue_ban: {
                            trigger: { global: 'phaseEnd' },
                            forced: true,
                            onremove(player) {
                                player.storage.ua_xionglue = 0;
                            },
                            content() {
                                player.chooseToUse('是否使用1张牌？');
                            },
                        },
                        ua_hujia: {
                            audio: 'ext:独爱/audio:2',
                            audioname: ['re_caocao'],
                            zhuSkill: true,
                            trigger: {
                                player: ['chooseToRespondBefore', 'chooseToUseBefore'],
                            },
                            filter(event, player) {
                                if (event.responded) return false;
                                if (player.storage.ua_hujiaing) return false;
                                if (!player.hasZhuSkill('ua_hujia')) return false;
                                if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
                                return game.hasPlayer(function (current) {
                                    return current != player && current.group == 'wei';
                                });
                            },
                            check(event, player) {
                                if (get.damageEffect(player, event.player, player) >= 0) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                if (event.current == undefined) event.current = player.next;
                                if (event.current == player) {
                                    event.finish();
                                } else if (event.current.group == 'wei') {
                                    if ((event.current == game.me && !_status.auto) || get.attitude(event.current, player) > 2 || event.current.isOnline()) {
                                        player.storage.ua_hujiaing = true;
                                        var next = event.current.chooseToRespond(`是否替${get.translation(player)}打出一张闪？`, { name: 'shan' });
                                        next.set('ai', function () {
                                            var event = _status.event;
                                            return get.attitude(event.player, event.source) - 2;
                                        });
                                        next.set('skillwarn', `替${get.translation(player)}打出一张闪`);
                                        next.autochoose = lib.filter.autoRespondShan;
                                        next.set('source', player);
                                    }
                                }
                                ('step 1');
                                player.storage.ua_hujiaing = false;
                                if (result.bool) {
                                    event.finish();
                                    trigger.result = { bool: true, card: { name: 'shan' } };
                                    trigger.responded = true;
                                    trigger.animate = false;
                                } else {
                                    event.current = event.current.next;
                                    event.goto(0);
                                }
                            },
                            ai: {
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (player.storage.ua_hujiaing) return false;
                                    if (!player.hasZhuSkill('ua_hujia')) return false;
                                    return game.hasPlayer(function (current) {
                                        return current != player && current.group == 'wei';
                                    });
                                },
                            },
                        },
                        //曹金玉
                        ua_yuqi: {
                            audio: 'ext:独爱/audio:2',
                            trigger: {
                                global: 'damageEnd',
                            },
                            init(player) {
                                if (!player.storage.ua_yuqi) player.storage.ua_yuqi = [0, 2, 1, 1];
                            },
                            getInfo(player) {
                                if (!player.storage.ua_yuqi) player.storage.ua_yuqi = [0, 2, 1, 1];
                                return player.storage.ua_yuqi;
                            },
                            filter(event, player) {
                                var list = lib.skill.ua_yuqi.getInfo(player);
                                return event.player.isIn() && get.distance(player, event.player) <= list[0];
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                event.list = lib.skill.ua_yuqi.getInfo(player);
                                var cards = get.cards(event.list[1]);
                                event.cards = cards;
                                game.cardsGotoOrdering(cards);
                                var next = player.chooseToMove(true, '隅泣');
                                next.set('list', [['牌堆顶的牌', cards], [`交给至多${get.cnNumber(event.list[2])}张)`], [`你获得(至多${get.cnNumber(event.list[3])}张)`]]);
                                next.set('filterMove', function (from, to, moved) {
                                    var info = lib.skill.ua_yuqi.getInfo(_status.event.player);
                                    if (to == 1) return moved[1].length < info[2];
                                    if (to == 2) return moved[2].length < info[3];
                                    return true;
                                });
                                next.set('processAI', function (list) {
                                    var cards = list[0][1].slice(0).sort(function (a, b) {
                                        return get.value(b, 'raw') - get.value(a, 'raw');
                                    }),
                                        player = _status.event.player,
                                        target = _status.event.getTrigger().player;
                                    var info = lib.skill.ua_yuqi.getInfo(_status.event.player);
                                    var cards1 = cards.splice(0, Math.min(info[3], cards.length - 1));
                                    var card2;
                                    if (get.attitude(player, target) > 0) card2 = cards.shift();
                                    else card2 = cards.pop();
                                    return [cards, [card2], cards1];
                                });
                                ('step 1');
                                if (result.bool) {
                                    var moved = result.moved;
                                    cards.removeArray(moved[1]);
                                    cards.removeArray(moved[2]);
                                    while (cards.length) {
                                        ui.cardPile.insertBefore(cards.pop().fix(), ui.cardPile.firstChild);
                                    }
                                    var list = [[trigger.player, moved[1]]];
                                    if (moved[2].length) list.push([player, moved[2]]);
                                    game.loseAsync({
                                        gain_list: list,
                                        giver: player,
                                        animate: 'gain2',
                                    }).setContent('gaincardMultiple');
                                }
                            },
                        },
                        ai: {
                            threaten: 8.8,
                        },
                        ua_xianjing: {
                            audio: 'ext:独爱/audio:2',
                            trigger: {
                                player: ['phaseJieshuBegin', 'phaseZhunbeiBegin', 'damageEnd'],
                            },
                            filter(event, player) {
                                if (event.name != 'phaseJieshu') return true;
                                return (
                                    player.getHistory('useCard', function (evt) {
                                        return (
                                            evt.targets &&
                                            evt.targets.filter(function (i) {
                                                return i != player;
                                            }).length
                                        );
                                    }).length == 0
                                );
                            },
                            content() {
                                'step 0';
                                var info = lib.skill.ua_yuqi.getInfo(player);
                                player
                                    .chooseControl('选项一', '选项二', '选项三', '选项四')
                                    .set('choiceList', [`当你距离其≤<b><font color=#00FFFF>${info[0]}</font></b>的一名角色受到伤害后`, `你可观看牌堆顶的<b><font color=#00FFFF>${info[1]}</font></b>张牌`, `你将其中至多<b><font color=#00FFFF>${info[2]}</font></b>张牌给受伤角色`, `获得其中至多<b><font color=#00FFFF>${info[3]}</font></b>张牌`])
                                    .set('prompt', '令<b><隅泣></b>中的一个阿拉伯数字+1(每个数字最多为3)');
                                ('step 1');
                                var list = lib.skill.ua_yuqi.getInfo(player);
                                list[result.index] = Math.min(3, list[result.index] + 1);
                                game.log(player, '将', result.control, '数字改为', '#y' + list[result.index]);
                            },
                        },
                        //郭淮
                        ua_jingce: {
                            audio: 'ext:独爱/audio:2',
                            trigger: {
                                global: 'phaseEnd',
                            },
                            mark: true,
                            intro: {
                                content(storage, player) {
                                    let str = '你本回合已使用' + player.getHistory('useCard').length + '张牌,';
                                    if (player.getHistory('useCard').length >= player.hp) str += '<b><font color=#0343df>可</font></b>发动<b><精策></b>.';
                                    else str += '<b><font color=#0343df>不可</font></b>发动<b><精策></b>.';
                                    return str;
                                },
                            },
                            filter(event, player) {
                                return player.getHistory('useCard').length >= player.hp;
                            },
                            content() {
                                var next = player.phaseDraw();
                                event.next.remove(next);
                                trigger.parent.next.push(next);
                                var next = player.phaseUse();
                                event.next.remove(next);
                                trigger.parent.next.push(next);
                            },
                        },
                        //毌丘俭
                        ua_zhengrong: {
                            marktext: '荣',
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            audio: 'ext:独爱/audio:2',
                            trigger: {
                                source: 'damageSource',
                            },
                            filter(event, player) {
                                return event.player != player && event.player.countCards('hej') > 0 && (event.player.countCards('h') > player.countCards('h') || event.player.countCards('e') > player.countCards('e') || get.distance(player, event.player) != 1);
                            },
                            content() {
                                'step 0';
                                event.count = 0;
                                if (trigger.player.countCards('h') > player.countCards('h')) event.count++;
                                if (trigger.player.countCards('e') > player.countCards('e')) event.count++;
                                if (get.distance(player, trigger.player) != 1) event.count++;
                                ('step 1');
                                if (event.count > 0) {
                                    event.count--;
                                } else event.finish();
                                ('step 2');
                                player.choosePlayerCard('hej', '选择1张牌扣置,此牌将称为<荣>', trigger.player);
                                ('step 3');
                                if (result.links?.length) {
                                    player.line(player, trigger.player);
                                    player.addToExpansion(result.links, trigger.player, 'give', 'log').gaintag.add('ua_zhengrong');
                                }
                                ('step 4');
                                if (event.count > 0) event.goto(1);
                            },
                        },
                        ua_hongju: {
                            audio: 'ext:独爱/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            juexingji: true,
                            derivation: ['ua_qingce'],
                            filter(event, player) {
                                return player.getExpansions('ua_zhengrong').length && game.dead.length;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('ua_hongju');
                                player.addSkillLog('ua_qingce');
                                player.loseMaxHp();
                                let num = player.maxHp - player.hp;
                                if (num > 0) player.recover(num);
                            },
                        },
                        ua_qingce: {
                            trigger: {
                                player: 'gainEnd',
                                global: ['loseAsyncEnd', 'showCardsEnd'],
                            },
                            filter(event, player) {
                                if (!player.getExpansions('ua_zhengrong').length) return false;
                                if (event.name == 'showCards') {
                                    if (player == event.player) return false;
                                    return event.cards && event.cards.length;
                                }
                                if (event.name == 'gain') {
                                    //if(event.giver||event.parent.name=='_yongjian_zengyu') return false;
                                    let gs = event.getg(event.player);
                                    if (!gs.length) return false;
                                    return game.hasPlayer(function (current) {
                                        if (current == event.player) return false;
                                        let cs = event.getl(current).cards;
                                        for (var i of cs) {
                                            if (gs.includes(i)) return true;
                                        }
                                        return false;
                                    });
                                }
                                if (event.type == 'gain') {
                                    //if(event.giver) return false;
                                    if (!event.player || !event.player.isIn()) return false;
                                    let cs = event.getl(event.player).cards;
                                    let gs = event.getg(player);
                                    for (var i of gs) {
                                        if (cs.includes(i)) return true;
                                    }
                                }
                                return false;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                let suits = [],
                                    cards = [];
                                event.target = trigger.player;
                                if (trigger.name == 'showCards') cards = trigger.cards;
                                else if (trigger.name == 'gain') {
                                    //if(trigger.giver||trigger.parent.name=='_yongjian_zengyu') return false;
                                    let gs = trigger.getg(trigger.player);
                                    game.countPlayer(function (current) {
                                        if (current == trigger.player) return false;
                                        let cs = trigger.getl(current).cards;
                                        for (var i of cs) {
                                            if (gs.includes(i)) {
                                                cards.push(i);
                                                event.target = current;
                                            }
                                        }
                                    });
                                } else if (trigger.type == 'gain') {
                                    //if(trigger.giver) return false;
                                    if (!trigger.player || !trigger.player.isIn()) return false;
                                    let cs = trigger.getl(trigger.player).cards;
                                    let gs = trigger.getg(player);
                                    for (var i of gs) {
                                        if (cs.includes(i)) cards.push(i);
                                    }
                                }
                                for (var i of cards) {
                                    let suit = i.suit;
                                    if (!suits.includes(suit)) suits.add(suit);
                                }
                                if (!suits.length) event.finish();
                                else
                                    player.chooseCardButton(get.prompt('ua_qingce'), `弃置一张同花色的<荣>并对${get.translation(event.target)}造成1点伤害`, player.getExpansions('ua_zhengrong')).set('filterButton', function (button) {
                                        return suits.includes(button.link.suit);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.loseToDiscardpile(result.links);
                                    event.target.damage(player, 'nocard');
                                }
                            },
                        },
                        //郭皇后
                        ua_jiaozhao: {
                            audio: 'ext:独爱/audio:2',
                            enable: 'phaseUse',
                            group: 'ua_jiaozhao_base',
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (player == target && card.storage && card.storage.ua_jiaozhao) return false;
                                },
                            },
                            filter(event, player) {
                                return player.storage.ua_danxin && player.countCards('h') && player.getStorage('ua_jiaozhao_clear').length < player.storage.ua_danxin;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [],
                                        storage = player.getStorage('ua_jiaozhao_clear');
                                    for (var name of lib.inpile) {
                                        var type = get.type(name);
                                        if ((type == 'basic' || type == 'trick') && !storage.includes(type)) {
                                            list.push([type, '', name]);
                                            if (name == 'sha') {
                                                for (var nature of lib.inpile_nature) list.push([type, '', name, nature]);
                                            }
                                        }
                                    }
                                    return ui.create.dialog('惮心', [list, 'vcard']);
                                },
                                filter(button, player) {
                                    var card = { name: button.link[2], nature: button.link[3] };
                                    if (player.storage.ua_danxin < 2) card.storage = { ua_jiaozhao: true };
                                    var evt = _status.event.parent;
                                    return evt.filterCard(card, player, evt);
                                },
                                backup(links, player) {
                                    var next = {
                                        audio: 'ua_danxin',
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        filterCard: true,
                                        position: 'h',
                                        popname: true,
                                        onuse(result, player) {
                                            player.addTempSkill('ua_jiaozhao_clear', 'phaseUseAfter');
                                            player.markAuto('ua_jiaozhao_clear', [get.type(result.card)]);
                                        },
                                    };
                                    if (player.storage.ua_danxin < 2) next.viewAs.storage = { ua_jiaozhao: true };
                                    return next;
                                },
                                prompt(links) {
                                    return '将一张手牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                                },
                            },
                            subSkill: {
                                clear: { onremove: true },
                                base: {
                                    audio: 'ua_jiaozhao',
                                    enable: 'phaseUse',
                                    usable: 1,
                                    filter(event, player) {
                                        if (player.storage.ua_danxin) return false;
                                        return player.countCards('h') > 0 && game.hasPlayer((current) => current != player);
                                    },
                                    filterCard: true,
                                    position: 'h',
                                    discard: false,
                                    lose: false,
                                    prompt: '出牌阶段限一次,你可展示1张手牌,令你距离其最近的角色声明一张基本牌或非延时锦囊牌,本回合你可将此牌转化为声明的牌使用(不能对自己使用).',
                                    content() {
                                        'step 0';
                                        player.showCards(cards);
                                        ('step 1');
                                        var targets = game.filterPlayer();
                                        targets.remove(player);
                                        targets.sort(function (a, b) {
                                            return Math.max(1, get.distance(player, a)) - Math.max(1, get.distance(player, b));
                                        });
                                        var distance = Math.max(1, get.distance(player, targets[0]));
                                        for (var i = 1; i < targets.length; i++) {
                                            if (Math.max(1, get.distance(player, targets[i])) > distance) {
                                                targets.splice(i);
                                                break;
                                            }
                                        }
                                        player
                                            .chooseTarget('请选择【矫诏】的目标', true, function (card, player, target) {
                                                return _status.event.targets.includes(target);
                                            })
                                            .set('targets', targets);
                                        ('step 2');
                                        if (!result.bool) {
                                            event.finish();
                                            return;
                                        }
                                        var target = result.targets[0];
                                        event.target = target;
                                        var list = [];
                                        for (var i = 0; i < lib.inpile.length; i++) {
                                            var name = lib.inpile[i];
                                            if (name == 'sha') {
                                                list.push(['基本', '', 'sha']);
                                                for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
                                            } else if (get.type(name) == 'basic') list.push(['基本', '', name]);
                                            else if (get.type(name) == 'trick') list.push(['锦囊', '', name]);
                                        }
                                        target.chooseButton(['矫诏', [list, 'vcard']], true);
                                        ('step 3');
                                        var chosen = result.links[0][2];
                                        var nature = result.links[0][3];
                                        var fakecard = {
                                            name: chosen,
                                            storage: { ua_jiaozhao: true },
                                        };
                                        if (nature) fakecard.nature = nature;
                                        event.target.showCards(
                                            game.createCard({
                                                name: chosen,
                                                nature: nature,
                                                suit: cards[0].suit,
                                                number: cards[0].number,
                                            }),
                                            get.translation(event.target) + '声明了' + get.translation(chosen)
                                        );
                                        player.storage.ua_jiaozhao_viewas = fakecard;
                                        cards[0].addGaintag('ua_jiaozhao');
                                        player.addTempSkill('ua_jiaozhao_viewas', 'phaseUseEnd');
                                    },
                                },
                                backup: { audio: 'ua_jiaozhao' },
                                viewas: {
                                    enable: 'phaseUse',
                                    mod: {
                                        targetEnabled(card, player, target) {
                                            if (player == target && card.storage && card.storage.ua_jiaozhao) return false;
                                        },
                                    },
                                    filter(event, player) {
                                        if (!player.storage.ua_jiaozhao_viewas) return false;
                                        var cards = player.getCards('h', function (card) {
                                            return card.hasGaintag('ua_jiaozhao');
                                        });
                                        if (!cards.length) return false;
                                        if (!game.checkMod(cards[0], player, 'unchanged', 'cardEnabled2', player)) return false;
                                        var card = player.storage.ua_jiaozhao_viewas;
                                        return event.filterCard(card, player, event);
                                    },
                                    viewAs(cards, player) {
                                        return player.storage.ua_jiaozhao_viewas;
                                    },
                                    filterCard(card) {
                                        return card.hasGaintag('ua_jiaozhao');
                                    },
                                    selectCard: -1,
                                    position: 'h',
                                    popname: true,
                                    prompt() {
                                        return `将<矫诏>牌当做${get.translation(_status.event.player.storage.ua_jiaozhao_viewas)}使用`;
                                    },
                                    onremove(player) {
                                        player.removeGaintag('ua_jiaozhao');
                                        delete player.storage.ua_jiaozhao_viewas;
                                    },
                                },
                            },
                        },
                        ua_danxin: {
                            audio: 'ext:独爱/audio:2',
                            init(player) {
                                player.storage.ua_danxin = 0;
                            },
                            trigger: { player: 'damageEnd' },
                            content() {
                                player.draw();
                                if (player.storage.ua_danxin < 2) player.storage.ua_danxin++;
                            },
                        },
                        //曹安民
                        ua_xianwei: {
                            audio: 'ext:独爱/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countDisabled() < 5;
                            },
                            content() {
                                'step 0';
                                player.chooseToDisable().ai = function (event, player, list) {
                                    var getVal = function (num) {
                                        var card = player.getEquip(num);
                                        if (card) {
                                            var val = get.value(card);
                                            if (val > 0) return 0;
                                            return 5 - val;
                                        }
                                        switch (num) {
                                            case 'equip3':
                                                return 4.5;
                                                break;
                                            case 'equip4':
                                                return 4.4;
                                                break;
                                            case 'equip5':
                                                return 4.3;
                                                break;
                                            case 'equip2':
                                                return (3 - player.hp) * 1.5;
                                                break;
                                            case 'equip1': {
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        return (get.realAttitude || get.attitude)(player, current) < 0 && get.distance(player, current) > 1;
                                                    })
                                                )
                                                    return 0;
                                                return 3.2;
                                            }
                                        }
                                    };
                                    list.sort(function (a, b) {
                                        return getVal(b) - getVal(a);
                                    });
                                    return list[0];
                                };
                                ('step 1');
                                var cardType = result.control;
                                event.cardType = cardType;
                                var num = player.countDisabled();
                                if (num < 5) player.draw(5 - num);
                                player
                                    .chooseTarget(lib.filter.notMe, `是否令一名其他角色从牌堆中使用一张${get.translation(cardType)}牌？`)
                                    .set('ai', function (target) {
                                        var player = _status.event.player,
                                            type = _status.event.cardType;
                                        var card = get.cardPile2(function (card) {
                                            return get.subtype(card) == type && target.canUse(card, target);
                                        });
                                        if (!card) return 0;
                                        return get.effect(target, card, target, player);
                                    })
                                    .set('cardType', event.cardType);
                                ('step 2');
                                if (!result.bool) return;
                                var target = result.targets[0];
                                player.line(target, 'green');
                                var card = get.cardPile2(function (card) {
                                    return get.subtype(card) == event.cardType && target.canUse(card, target);
                                });
                                if (card) target.chooseUseTarget(card, 'nopopup', true);
                                else target.draw();
                            },
                            group: 'xianwei_all',
                            subSkill: {
                                all: {
                                    trigger: {
                                        player: 'disableEquipAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countDisabled() >= 5;
                                    },
                                    content() {
                                        player.gainMaxHp(2);
                                        player.addSkill('xianwei_effect');
                                    },
                                },
                                effect: {
                                    charlotte: true,
                                    mark: true,
                                    intro: {
                                        content: '和其他角色视为在彼此的攻击范围内',
                                    },
                                    mod: {
                                        inRange: () => true,
                                        inRangeOf: () => true,
                                    },
                                },
                            },
                        },
                        //曹髦
                        ua_qianlong: {
                            audio: 'ext:独爱/audio:2',
                            trigger: { player: 'damageEnd' },
                            forced: true,
                            content() {
                                'step 0';
                                var cards = get.cards(3);
                                event.cards = cards;
                                game.cardsGotoOrdering(cards);
                                //展示牌
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
                                //选牌
                                var next = player.chooseToMove(`潜龙:获得至多${get.cnNumber(Math.min(3, player.getDamagedHp()))}张牌并将其余牌置于牌堆底`);
                                next.set('list', [['置于牌堆底', cards], ['自己获得']]);
                                next.set('filterMove', function (from, to, moved) {
                                    if (moved[0].includes(from.link)) {
                                        if (typeof to == 'number') {
                                            if (to == 1) {
                                                if (moved[1].length >= _status.event.player.getDamagedHp()) return false;
                                            }
                                            return true;
                                        }
                                    }
                                    return true;
                                });
                                next.set('processAI', function (list) {
                                    var cards = list[0][1].slice(0).sort(function (a, b) {
                                        if (b.name == 'sha') return 1;
                                        return get.value(b) - get.value(a);
                                    });
                                    return [cards, cards.splice(0, _status.event.player.getDamagedHp())];
                                });
                                ('step 1');
                                game.broadcastAll('closeDialog', event.videoId);
                                game.addVideo('cardDialog', null, event.videoId);
                                var moved = result.moved;
                                if (moved[0].length) {
                                    for (var i of moved[0]) {
                                        i.fix();
                                        ui.cardPile.appendChild(i);
                                    }
                                }
                                if (moved[1].length) player.gain(moved[1], 'gain2');
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
                        ua_fensi: {
                            audio: 'ext:独爱/audio:2',
                            trigger: { player: 'phaseZhunbeiBegin' },
                            forced: true,
                            content() {
                                'step 0';
                                if (
                                    !game.hasPlayer(function (current) {
                                        return current != player && current.hp >= player.hp;
                                    })
                                ) {
                                    player.damage();
                                    event.finish();
                                    return;
                                } else {
                                    player
                                        .chooseTarget(true, '忿肆:对一名体力值不小于你的角色造成1点伤害', function (card, player, target) {
                                            return target.hp >= player.hp;
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            return get.damageEffect(target, player, player);
                                        });
                                }
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    player.line(target, 'green');
                                    target.damage();
                                } else event.finish();
                                ('step 2');
                                if (target.isIn() && target.canUse('sha', player, false)) target.useCard({ name: 'sha' }, player, false, 'noai');
                            },
                        },
                        ua_juetao: {
                            audio: 'ext:独爱/audio:2',
                            trigger: { player: 'phaseUseBegin' },
                            forced: true,
                            limited: true,
                            filter(event, player) {
                                return player.hp == 1;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('ua_juetao'), lib.filter.notMe).set('ai', function (target) {
                                    return -get.attitude(_status.event.player, target);
                                });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    player.awakenSkill('ua_juetao');
                                } else event.finish();
                                ('step 2');
                                var card = get.bottomCards()[0];
                                game.cardsGotoOrdering(card);
                                player.showCards(card);
                                player
                                    .chooseUseTarget(card, true, false, 'nodistance')
                                    .set('filterTarget', function (card, player, target) {
                                        var evt = _status.event;
                                        if (_status.event.name == 'chooseTarget') evt = evt.parent;
                                        if (target != player && target != evt.ua_juetao_target) return false;
                                        return lib.filter.targetEnabledx(card, player, target);
                                    })
                                    .set('ua_juetao_target', target);
                                ('step 3');
                                if (result.bool && target.isIn()) event.goto(2);
                            },
                        },
                        ua_zhushi: {
                            audio: 'ext:独爱/audio:2',
                            usable: 1,
                            trigger: { global: 'recoverEnd' },
                            forced: true,
                            zhuSkill: true,
                            filter(event, player) {
                                return player != event.player && event.player.group == 'wei' && event.player == _status.currentPhase && event.player.isIn() && player.hasZhuSkill('ua_zhushi', event.player);
                            },
                            content() {
                                'step 0';
                                var str = get.translation(player);
                                trigger.player
                                    .chooseBool(`是否响应${get.translation(player)}的主公技【助势】？`, `令${get.translation(player)}摸一张牌`)
                                    .set('goon', get.attitude(trigger.player, player) > 0)
                                    .set('ai', () => _status.event.goon);
                                ('step 1');
                                if (result.bool) {
                                    trigger.player.line(player, 'thunder');
                                    player.draw();
                                } else player.getStat('triggerSkill').ua_zhushi--;
                            },
                        },
                        //张辽
                        ua_tuxi: {
                            audio: 'retuxi',
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            filter(event, player) {
                                return (
                                    event.num > 0 &&
                                    !event.numFixed &&
                                    game.hasPlayer(function (target) {
                                        return target.countCards('h') > 0 && player != target;
                                    })
                                );
                            },
                            content() {
                                'step 0';
                                var num = get.copy(trigger.num);
                                player
                                    .chooseTarget(
                                        get.prompt('ua_tuxi'),
                                        `获得至多${get.translation(num)}名角色的各一张手牌,少摸等量的牌`,
                                        [1, num],
                                        function (card, player, target) {
                                            return target.countCards('h') > 0 && player != target;
                                        },
                                        function (target) {
                                            var att = get.attitude(_status.event.player, target);
                                            if (target.hasSkill('tuntian')) return att / 10;
                                            return 1 - att;
                                        }
                                    )
                                    .setHiddenSkill('ua_tuxi');
                                ('step 1');
                                if (result.bool) {
                                    result.targets.sortBySeat();
                                    player.gainMultiple(result.targets);
                                    trigger.num -= result.targets.length;
                                }
                            },
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (card.hasGaintag('ua_tuxi_mark')) return true;
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && card.hasGaintag('ua_tuxi_mark')) return false;
                                },
                            },
                            group: 'ua_tuxi_mark',
                            subSkill: {
                                mark: {
                                    charlotte: true,
                                    trigger: {
                                        player: 'gainBegin',
                                    },
                                    filter(event, player) {
                                        return lib.translate[event.getParent(3).name] == '突袭';
                                    },
                                    //||( event.source && event.source!=player && event.cards.length)
                                    forced: true,
                                    firstDo: true,
                                    content() {
                                        trigger.gaintag.add('ua_tuxi_mark');
                                    },
                                },
                            },
                        },
                        ua_zhengbing: {
                            group: 'ua_zhengbing_mark',
                            audio: 'ext:活动武将/audio/skill:true',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('h', function (card) {
                                    return card.hasGaintag('ua_zhengbing');
                                });
                            },
                            filterCard(card) {
                                return card.hasGaintag('ua_zhengbing');
                            },
                            prepare(cards, player) {
                                player.$throw(cards, 1000);
                                game.log(player, '将', cards, '置入了弃牌堆');
                            },
                            discard: false,
                            loseTo: 'discardPile',
                            visible: true,
                            delay: 0.5,
                            content() {
                                player.draw(
                                    player.countCards('h', function (card) {
                                        return card.hasGaintag('ua_zhengbing');
                                    })
                                        ? 1
                                        : 2
                                );
                            },
                            subSkill: {
                                mark: {
                                    charlotte: true,
                                    trigger: {
                                        player: 'gainBegin',
                                    },
                                    filter(event, player) {
                                        return lib.translate[event.getParent(3).name] == '突袭' || (event.source && event.source != player && event.cards.length);
                                    },
                                    forced: true,
                                    firstDo: true,
                                    content() {
                                        trigger.gaintag.add('ua_zhengbing');
                                    },
                                },
                            },
                        },
                        ua_chengxiang: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            audio: 'ext:独爱/audio:2',
                            content() {
                                'step 0';
                                event.cards = get.cards(4);
                                game.cardsGotoOrdering(event.cards);
                                event.videoId = lib.status.videoId++;
                                game.broadcastAll(
                                    function (player, id, cards, num) {
                                        var str;
                                        if (player == game.me && !_status.auto) {
                                            str = `称象:选择任意张点数不大于${num}的牌`;
                                        } else {
                                            str = '称象';
                                        }
                                        var dialog = ui.create.dialog(str, cards);
                                        dialog.videoId = id;
                                    },
                                    player,
                                    event.videoId,
                                    event.cards,
                                    event.name == 'ua_chengxiang' ? 13 : 12
                                );
                                event.time = get.utc();
                                game.addVideo('showCards', player, ['称象', get.cardsInfo(event.cards)]);
                                game.addVideo('delay', null, 2);
                                ('step 1');
                                var next = player.chooseButton([0, 4]);
                                next.set('dialog', event.videoId);
                                next.set('filterButton', function (button) {
                                    var num = 0;
                                    for (var i = 0; i < ui.selected.buttons.length; i++) {
                                        num += ui.selected.buttons[i].link.number;
                                    }
                                    return num + button.link.number <= _status.event.maxNum;
                                });
                                next.set('maxNum', event.name == 'ua_chengxiang' ? 13 : 12);
                                ('step 2');
                                if (result.bool && result.links) {
                                    var cards2 = [];
                                    for (var i of result.links) {
                                        cards2.push(i);
                                        cards.remove(i);
                                    }
                                    event.cards2 = cards2;
                                } else {
                                    event.finish();
                                }
                                var time = 1000 - (get.utc() - event.time);
                                if (time > 0) {
                                }
                                ('step 3');
                                game.broadcastAll('closeDialog', event.videoId);
                                var cards2 = event.cards2;
                                player.gain(cards2, 'log', 'gain2');
                            },
                        },
                        ua_renxin: {
                            audio: 'renxin',
                            trigger: {
                                global: 'damageBegin4',
                            },
                            usable: 1,
                            filter(event, player) {
                                return event.player != player && event.player.hp <= event.num && player.countCards('he');
                            },
                            checkx(event, player) {
                                if (get.attitude(player, event.player) < 0) return false;
                                var num = player.countCards('h', function (card) {
                                    var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                    if (mod2 != 'unchanged') return mod2;
                                    var mod = game.checkMod(card, player, event.player, 'unchanged', 'cardSavable', player);
                                    if (mod != 'unchanged') return mod;
                                    var savable = get.info(card).savable;
                                    if (typeof savable == 'function') savable = savable(card, player, event.player);
                                    return savable;
                                });
                                if (num >= 1 + event.num - event.player.hp) return false;
                                return player.hp + num - event.num > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseToDiscard('he', get.prompt2('ua_renxin', trigger.player)).set('goon', lib.skill.ua_renxin.checkx(trigger, player));
                                ('step 1');
                                if (result.bool) {
                                    trigger.player = player;
                                }
                            },
                        },
                        //程昱
                        ua_shefu: {
                            trigger: { player: 'phaseJieshuBegin' },
                            forced: true,
                            audio: 'ext:独爱/audio:2',
                            init(player) {
                                if (!player.storage.shefu) player.storage.shefu = [];
                                if (!player.storage.shefu2) player.storage.shefu2 = [];
                            },
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            intro: {
                                content: 'cards',
                                onunmark(storage, player) {
                                    player.storage.shefu = [];
                                    player.storage.shefu2 = [];
                                },
                                mark(dialog, content, player) {
                                    if (content && content.length) {
                                        dialog.addAuto(content);
                                        if (player.isUnderControl(true)) {
                                            var str = '';
                                            for (var i = 0; i < player.storage.shefu2.length; i++) {
                                                str += get.translation(player.storage.shefu2[i]);
                                                if (i < player.storage.shefu2.length - 1) {
                                                    str += '、';
                                                }
                                            }
                                            dialog.add(`<div class="text center">${str}</div>`);
                                        }
                                    }
                                },
                            },
                            content() {
                                'step 0';
                                var list1 = [],
                                    list2 = [],
                                    list3 = [];
                                for (var i = 0; i < lib.inpile.length; i++) {
                                    var type = get.type(lib.inpile[i]);
                                    if (type == 'basic') {
                                        list1.push(['基本', '', lib.inpile[i]]);
                                    } else if (type == 'trick') {
                                        list2.push(['锦囊', '', lib.inpile[i]]);
                                    } else if (type == 'delay') {
                                        list3.push(['锦囊', '', lib.inpile[i]]);
                                    }
                                }
                                player
                                    .chooseButton([get.prompt('shefu'), [list1.concat(list2).concat(list3), 'vcard']])
                                    .set('filterButton', function (button) {
                                        var player = _status.event.player;
                                        if (player.storage.shefu2 && player.storage.shefu2.includes(button.link[2])) return false;
                                        return true;
                                    })
                                    .set('ai', function (button) {
                                        var rand = _status.event.rand;
                                        switch (button.link[2]) {
                                            case 'sha':
                                                return 5 + rand[1];
                                            case 'tao':
                                                return 4 + rand[2];
                                            case 'lebu':
                                                return 3 + rand[3];
                                            case 'shan':
                                                return 4.5 + rand[4];
                                            case 'wuzhong':
                                                return 4 + rand[5];
                                            case 'shunshou':
                                                return 3 + rand[6];
                                            case 'nanman':
                                                return 2 + rand[7];
                                            case 'wanjian':
                                                return 2 + rand[8];
                                            default:
                                                return rand[0];
                                        }
                                    })
                                    .set('rand', [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()]);
                                ('step 1');
                                if (result.bool) {
                                    event.cardname = result.links[0][2];
                                    player.chooseCard('he', '选择一张牌作为<伏兵>', true);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    var card = result.cards[0];
                                    event.card = card;
                                    player.addToExpansion(card, player, 'give').gaintag.add('shefu');
                                }
                                ('step 3');
                                if (player.getExpansions('shefu').includes(event.card)) {
                                    player.storage.shefu.push(card);
                                    player.storage.shefu2.push(event.cardname);
                                    if (player.isOnline2()) {
                                        player.send(function (storage) {
                                            game.me.storage.shefu2 = storage;
                                        }, player.storage.shefu2);
                                    }
                                    player.markSkill('shefu');
                                }
                            },
                            group: ['shefu2'],
                        },
                        shefu2: {
                            trigger: { global: ['useCard'] },
                            //_priority:15,
                            audio: 'shefu',
                            filter(event, player) {
                                if (event.player == player) return false;
                                return (
                                    player.storage.shefu2 &&
                                    player.storage.shefu2.includes(event.card.name) &&
                                    event.player.getHistory('lose', function (evt) {
                                        return evt.parent == event && evt.hs && evt.hs.length == event.cards.length;
                                    }).length
                                );
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var effect = 0;
                                if (trigger.card.name == 'wuxie' || trigger.card.name == 'shan') {
                                    if (get.attitude(player, trigger.player) < -1) {
                                        effect = -1;
                                    }
                                } else if (trigger.targets && trigger.targets.length) {
                                    for (var i = 0; i < trigger.targets.length; i++) {
                                        effect += get.effect(trigger.targets[i], trigger.card, trigger.player, player);
                                    }
                                }
                                var str = '设伏:是否令' + get.translation(trigger.player);
                                if (trigger.targets && trigger.targets.length) {
                                    str += '对' + get.translation(trigger.targets);
                                }
                                str += `使用的${get.translation(trigger.card)}失效？`;
                                var next = player.chooseBool(str, function () {
                                    var player = _status.event.player;
                                    var trigger = _status.event.getTrigger();
                                    if (_status.event.effect < 0) {
                                        if (trigger.card.name == 'sha') {
                                            var target = trigger.targets[0];
                                            if (target == player) {
                                                return !player.countCards('h', 'shan');
                                            } else {
                                                return target.hp == 1 || (target.countCards('h') <= 2 && target.hp <= 2);
                                            }
                                        } else {
                                            return true;
                                        }
                                    }
                                    return false;
                                });
                                next.set('effect', effect);
                                ('step 1');
                                if (result.bool) {
                                    var index = player.storage.shefu2.indexOf(trigger.card.name);
                                    if (index != -1) {
                                        var card = player.storage.shefu[index];
                                        player.loseToDiscardpile(card);
                                        player.storage.shefu.splice(index, 1);
                                        player.storage.shefu2.splice(index, 1);
                                        if (player.storage.shefu.length == 0) {
                                            player.unmarkSkill('shefu');
                                        } else {
                                            player.markSkill('shefu');
                                            if (player.isOnline2()) {
                                                player.send(function (storage) {
                                                    game.me.storage.shefu2 = storage;
                                                }, player.storage.shefu2);
                                            }
                                        }
                                    }
                                    trigger.targets.length = 0;
                                    trigger.all_excluded = true;
                                    trigger.player.addTempSkill('baiban');
                                }
                            },
                            ai: {
                                threaten: 1.8,
                                expose: 0.3,
                            },
                        },
                        ua_benyu: {
                            audio: 'ext:独爱/audio:2',
                            trigger: { player: 'damageEnd' },
                            filter(event, player) {
                                if (!event.source) return false;
                                var nh1 = player.countCards('h');
                                var nh2 = event.source.countCards('h');
                                var eh = player.countCards('e');
                                if (nh1 + eh > nh2 && event.source.isAlive()) return true;
                                if (nh1 < Math.min(5, nh2)) return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var num1 = player.countCards('h');
                                var num2 = trigger.source.countCards('h');
                                var eh = player.countCards('he', function (card) {
                                    return lib.filter.cardDiscardable(card, player, 'benyu');
                                });
                                var bool1 = false,
                                    bool2 = false;
                                if (num1 < Math.min(num2, 5)) bool1 = true;
                                if (eh > num2 && trigger.source.isAlive()) bool2 = true;
                                if (bool1 && bool2) {
                                    event.chosen = true;
                                    player
                                        .chooseControl('cancel2')
                                        .set('prompt', get.prompt('benyu', trigger.source))
                                        .set('choiceList', [`摸至${Math.min(num2, 5)}张`, `弃至少${num2 + 1}张牌,对伤害来源造成1点伤害`]);
                                } else if (bool2) event.goto(3);
                                ('step 1');
                                if (event.chosen) {
                                    if (result.control == 'cancel2') event.finish();
                                    else if (result.index == 1) event.goto(3);
                                    else event._result = { bool: true };
                                } else player.chooseBool(get.prompt('benyu', trigger.source), '摸至' + get.cnNumber(Math.min(trigger.source.countCards('h'), 5)) + '张');
                                ('step 2');
                                if (result.bool) {
                                    player.drawTo(Math.min(trigger.source.countCards('h'), 5));
                                }
                                event.finish();
                                ('step 3');
                                var num = trigger.source.countCards('h') + 1;
                                var args = [[num, player.countCards('he')], 'he'];
                                if (event.chosen) {
                                    args.push(true);
                                } else {
                                    args.push(get.prompt('benyu', trigger.source));
                                    args.push(`弃${get.cnNumber(num)}张牌,对伤害来源造成1点伤害`);
                                }
                                var next = player.chooseToDiscard.apply(player, args);
                                next.set('ai', function (card) {
                                    var trigger = _status.event.getTrigger();
                                    var player = _status.event.player;
                                    if (ui.selected.cards.length >= _status.event.num) {
                                        return -1;
                                    }
                                    if (get.damageEffect(trigger.source, player, player) > 0 && (get.value(card, player) < 0 || _status.event.num <= 2)) {
                                        return 8 - get.value(card);
                                    }
                                    return -1;
                                });
                                next.set('num', num);
                                ('step 4');
                                if (result.bool) trigger.source.damage();
                            },
                        },
                        //曹纯
                        ua_shanjia: {
                            audio: 'ext:独爱/audio:2',
                            mark: true,
                            intro: {
                                content(storage, player) {
                                    return `发动<b><缮甲></b>可摸弃${player.storage.ua_shanjia}张牌`;
                                },
                            },
                            init(player) {
                                player.storage.ua_shanjia = 1;
                            },
                            group: 'ua_shanjia2',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.draw(player.storage.ua_shanjia);
                                ('step 1');
                                player.chooseToDiscard('he', player.storage.ua_shanjia, true);
                                ('step 2');
                                if (result.bool && result.cards) {
                                    if (Array.isArray(result.cards))
                                        for (var i of result.cards) {
                                            if (get.type(i) == 'equip') {
                                                if (!event.num) event.num = 0;
                                                event.num++;
                                            }
                                        }
                                }
                                ('step 3');
                                if (event.num > 0) {
                                    event.num--;
                                    player.chooseUseTarget({ name: 'sha' }, false, '是否视为使用1张【杀】？', 'nodistance');
                                }
                                ('step 4');
                                if (event.num > 0) event.goto(3);
                            },
                        },
                        ua_shanjia2: {
                            trigger: { player: 'equipAfter' },
                            silent: true,
                            filter(event, player) {
                                return get.type(event.card) == 'equip';
                            },
                            content() {
                                if (player.storage.ua_shanjia < 7) player.storage.ua_shanjia++;
                            },
                        },
                        //曹婴
                        ua_lingren: {
                            usable: 1,
                            audio: 'ext:独爱/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.parent.triggeredTargets3.length > 1) return false;
                                if (!player.isPhaseUsing()) return false;
                                if (!['basic', 'trick'].includes(get.type(event.card))) return false;
                                if (get.tag(event.card, 'damage')) return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('选择一名目标,猜测其有哪些类别的手牌', function (card, player, target) {
                                        return _status.event.targets.includes(target);
                                    })
                                    .set('ai', function (target) {
                                        return 2 - get.attitude(_status.event.player, target);
                                    })
                                    .set('targets', trigger.targets);
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    event.choice = {
                                        basic: false,
                                        trick: false,
                                        equip: false,
                                    };
                                    player.chooseButton(['凌人:猜测其有哪些类别的手牌', [['basic', 'trick', 'equip'], 'vcard']], [0, 3], true);
                                } else {
                                    player.getStat('triggerSkill').ua_lingren--;
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    var choices = result.links.map((i) => i[2]);
                                    var list = [];
                                    event.num = 0;
                                    ['basic', 'trick', 'equip'].forEach((type) => {
                                        if (choices.includes(type) == target.hasCard({ type: type }, 'h')) event.num++;
                                    });
                                }
                                ('step 3');
                                player.popup('对' + event.num);
                                game.log(player, '对' + event.num);
                                if (event.num > 0) {
                                    trigger.parent.baseDamage++;
                                }
                                if (event.num > 1) player.draw(2);
                                if (event.num > 2) {
                                    player.addTempSkill('ua_xionglue', { player: 'phaseBegin' });
                                    player.addTempSkill('ua_xingshang', { player: 'phaseBegin' });
                                }
                            },
                        },
                        ua_fujian: {
                            audio: 'ext:独爱/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                return !game.hasPlayer(function (current) {
                                    return current.countCards('h') == 0;
                                });
                            },
                            forced: true,
                            content() {
                                event.num = 0;
                                var list = game.filterPlayer(function (target) {
                                    if (target.isMinHandcard()) event.num = target.countCards('h');
                                    return player != target;
                                });
                                if (event.num < 1) {
                                    event.finish();
                                } else {
                                    var target = list.randomGet();
                                    var cards = target.getCards('h').randomGets(event.num);
                                    player.line(target);
                                    var content = [get.translation(target) + '的部分手牌', cards];
                                    game.log(player, '观看了', target, '的部分手牌');
                                    player.chooseControl('ok').set('dialog', content);
                                }
                            },
                        },
                        //曹真
                        ua_sidi: {
                            audio: 'ext:独爱/audio:2',
                            trigger: {
                                global: ['useCard', 'respond'],
                            },
                            filter(event, player) {
                                if (!Array.isArray(event.respondTo) || event.respondTo[0] == event.player || ![event.respondTo[0], event.player].includes(player)) return false;
                                if (player == _status.currentPhase && event.player != player) return true;
                                if (player != _status.currentPhase && event.player == player) return true;
                                return false;
                            },
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            content() {
                                player.addToExpansion(get.cards(), 'gain2').gaintag.add('ua_sidi');
                            },
                            group: 'ua_sidi2',
                        },
                        ua_sidi2: {
                            trigger: { global: 'phaseUseBegin' },
                            filter(event, player) {
                                if (event.player == player || event.player.isDead()) return false;
                                if (!player.getExpansions('ua_sidi').length) return false;
                                return true;
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                var cards = player.getExpansions('ua_sidi');
                                player.chooseCardButton([1, Infinity], '弃置任意张<司敌>', cards, true);
                                ('step 1');
                                if (result.bool) {
                                    player.loseToDiscardpile(result.links);
                                    trigger.player.addTempSkill('ua_sidi3', 'phaseUseAfter');
                                    trigger.player.addMark('ua_sidi3', result.links.length);
                                    if (result.links.length >= 2) trigger.player.addTempSkill('ua_sidi4', 'phaseUseAfter');
                                }
                            },
                        },
                        ua_sidi3: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            mark: true,
                            intro: {
                                content(Mark, player) {
                                    return '本阶段你前' + player.countMark('ua_sidi3') + '次造成的伤害-1.';
                                },
                            },
                            filter(event, player) {
                                return player.hasMark('ua_sidi3');
                            },
                            forced: true,
                            content() {
                                player.removeMark('ua_sidi3', 1);
                                trigger.num--;
                            },
                            onremove(player) {
                                player.removeMark('ua_sidi3', Infinity);
                            },
                        },
                        ua_sidi4: {
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return player.countUsed(null, true) == 1;
                            },
                            forced: true,
                            content() {
                                trigger.targets = 0;
                                trigger.all_excluded = true;
                            },
                        },
                        //荀彧
                        ua_quhu: {
                            audio: 'ext:独爱/audio:2',
                            audioname: ['re_xunyu', 'ol_xunyu'],
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                if (player.countCards('h') == 0) return false;
                            },
                            filterTarget(card, player, target) {
                                return player.canCompare(target);
                            },
                            content() {
                                'step 0';
                                player.chooseToCompare(target);
                                ('step 1');
                                if (result.bool) {
                                    if (
                                        game.hasPlayer(function (player) {
                                            return player != target && target.inRange(player);
                                        })
                                    ) {
                                        player
                                            .chooseTarget(function (card, player, target) {
                                                var source = _status.event.source;
                                                return target != source && source.inRange(target);
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
                                    result.targets[0].damage(target);
                                }
                            },
                        },
                        ua_jieming: {
                            audio: 'ext:独爱/audio:2',
                            trigger: {
                                player: ['damageEnd', 'dieAfter'],
                            },
                            forced: true,
                            forceDie: true,
                            filter(event, player) {
                                if (event.name == 'die') return true;
                                return player.isAlive();
                            },
                            content() {
                                'step 0';
                                event.count = trigger.num || 1;
                                ('step 1');
                                event.count--;
                                player
                                    .chooseTarget(get.prompt2('oljieming'), function (card, player, target) {
                                        return target.maxHp > 0;
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        var draw = Math.min(5, target.maxHp) - target.countCards('h');
                                        if (draw >= 0) {
                                            if (target.hasSkillTag('nogain')) att /= 6;
                                            if (att > 2) {
                                                return Math.sqrt(draw + 1) * att;
                                            }
                                            return att / 3;
                                        }
                                        if (draw < -1) {
                                            if (target.hasSkillTag('nogain')) att *= 6;
                                            if (att < -2) {
                                                return -Math.sqrt(1 - draw) * att;
                                            }
                                        }
                                        return 0;
                                    });
                                ('step 2');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    target.draw(Math.min(5, target.maxHp));
                                } else event.finish();
                                ('step 3');
                                var num = target.countCards('h') - Math.min(5, target.maxHp);
                                if (num > 0) target.chooseToDiscard('h', true, num);
                                ('step 4');
                                if (event.count > 0 && player.isAlive()) event.goto(1);
                            },
                        },
                        //夏侯惇
                        ua_ganglie: {
                            audio: 'ext:独爱/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.source != undefined && event.num > 0;
                            },
                            logTarget: 'source',
                            preHidden: true,
                            content() {
                                'step 0';
                                event.num = Math.min(trigger.num, 9);
                                ('step 1');
                                player.addMark('ua_fenyong', 1);
                                player.judge(function (card) {
                                    if (card.suit == 'heart') return -2;
                                    return 2;
                                }).judge2 = function (result) {
                                    return result.bool;
                                };
                                ('step 2');
                                if (result.judge < 2) {
                                    event.finish();
                                    return;
                                }
                                trigger.source.chooseToDiscard(2, `弃2张手牌,或受到${get.translation(player)}造成的1点伤害.`);
                                ('step 3');
                                if (result.bool == false) {
                                    trigger.source.damage();
                                }
                                event.num--;
                                if (event.num > 0) {
                                    player.chooseBool(get.prompt2('ua_ganglie'));
                                } else {
                                    event.finish();
                                }
                                ('step 4');
                                if (result.bool) {
                                    event.goto(1);
                                }
                            },
                        },
                        ua_fenyong: {
                            audio: 'ext:独爱/audio:2',
                            trigger: {
                                global: 'phaseJieshuBegin',
                            },
                            init(player) {
                                player.unmarkSkill('ua_fenyong');
                            },
                            mark: true,
                            intro: {
                                content(Mark, player) {
                                    return '你有' + player.countMark('ua_fenyong') + '枚<愤勇>.';
                                },
                            },
                            filter(event, player) {
                                return player.hasMark('ua_fenyong');
                            },
                            content() {
                                'step 0';
                                player.removeMark('ua_fenyong', 1);
                                let ua = player.maxHp - player.hp;
                                if (player.countMark('ua_fenyong') == 0) player.unmarkSkill('ua_fenyong');
                                player
                                    .chooseControl('弃牌', '出杀', function () {
                                        var player = _status.event.player;
                                        var trigger = _status.event.getTrigger();
                                        if (get.attitude(player, trigger.player) < 0) {
                                            var he = trigger.player.countCards('he');
                                            if (he < 2) return '出杀';
                                            if (player.maxHp - player.hp >= 2 && he <= 3) {
                                                return '弃牌';
                                            }
                                            if (player.maxHp - player.hp >= 3 && he <= 5) {
                                                return '弃牌';
                                            }
                                            if (player.maxHp - player.hp > 3) {
                                                return '弃牌';
                                            }
                                            return '出杀';
                                        }
                                        return '出杀';
                                    })
                                    .set('prompt', `弃${get.translation(trigger.player) + ua}张牌,或对任意一名角色使用一张杀`);
                                ('step 1');
                                if (result.control == '弃牌') {
                                    player.line(trigger.player, 'green');
                                    if (player.hp < player.maxHp && trigger.player.countCards('he')) {
                                        player.discardPlayerCard(trigger.player, true, 'he', player.maxHp - player.hp);
                                    }
                                } else {
                                    player.chooseUseTarget({ name: 'sha' }, true, false, 'nodistance');
                                }
                            },
                        },
                        //钟会
                        ua_quanji: {
                            audio: 'ext:独爱/audio:2',
                            trigger: {
                                player: ['damageEnd', 'phaseUseEnd'],
                            },
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            forced: true,
                            notemp: true,
                            filter(event, player) {
                                if (event.name == 'phaseUse') return player.countCards('h') > player.hp;
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                event.count = trigger.num || 1;
                                ('step 1');
                                event.count--;
                                player.draw();
                                ('step 2');
                                if (player.countCards('h')) {
                                    player.chooseCard('将1张手牌扣置,此牌称为<权>', true);
                                } else {
                                    event.goto(4);
                                }
                                ('step 3');
                                if (result.cards && result.cards.length) {
                                    player.addToExpansion(result.cards, player, 'give').gaintag.add('ua_quanji');
                                }
                                ('step 4');
                                if (event.count > 0) {
                                    player.chooseBool(get.prompt2('ua_quanji')).set('frequentSkill', 'ua_quanji');
                                } else event.finish();
                                ('step 5');
                                if (result.bool) {
                                    event.goto(1);
                                }
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.getExpansions('ua_quanji').length;
                                },
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions('ua_quanji');
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                        },
                        ua_zili: {
                            audio: 'ext:独爱/audio:2',
                            audioname: ['re_zhonghui'],
                            juexingji: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.hasSkill('ua_paiyi') && player.getExpansions('ua_quanji').length >= 3;
                            },
                            content() {
                                player.loseMaxHp();
                                player.recover();
                                player.draw(2);
                                player.addSkill('ua_paiyi');
                                player.awakenSkill('ua_zili');
                            },
                        },
                        ua_paiyi: {
                            enable: 'phaseUse',
                            audio: 'ext:独爱/audio:2',
                            audioname: ['re_zhonghui'],
                            filterx(event, player) {
                                if (
                                    event.player.hasCard(function (card) {
                                        return get.tag(card, 'damage');
                                    }, 'hs')
                                )
                                    return true;
                                return false;
                            },
                            filter(event, player) {
                                return (
                                    player.getExpansions('ua_quanji').length &&
                                    game.countPlayer() > 2 &&
                                    game.countPlayer(function (current) {
                                        if (!current.storage.ua_paiyi) return true;
                                    })
                                );
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    return ui.create.dialog('排异', player.getExpansions('ua_quanji'), 'hidden');
                                },
                                backup(links, player) {
                                    return {
                                        audio: 'paiyi',
                                        audioname: ['re_zhonghui'],
                                        filterTarget(card, player, target) {
                                            return player != target;
                                        },
                                        filterCard() {
                                            return false;
                                        },
                                        selectCard: -1,
                                        card: links[0],
                                        delay: false,
                                        content: lib.skill.ua_paiyi.contentx,
                                    };
                                },
                                prompt() {
                                    return '请选择〖排异〗的目标';
                                },
                            },
                            contentx() {
                                'step 0';
                                card = lib.skill.ua_paiyi_backup.card;
                                player.loseToDiscardpile(card);
                                ('step 1');
                                event.target = target;
                                event.videoId = lib.status.videoId++;
                                var func = function (card, id, bool) {
                                    var list = [`选项一:由${get.translation(player)}声明一名角色,你使用1张伤害牌仅指定其声明的角色为目标,若造成伤害,其可对声明角色发动<b><排异>`, `选项二:令${get.translation(player)}摸2张牌,你受到${get.translation(player)}造成的1点伤害`];
                                    var choiceList = ui.create.dialog('<b><排异></b>:请选择一项', 'forcebutton');
                                    choiceList.videoId = id;
                                    for (var i = 0; i < list.length; i++) {
                                        list[i] = list[i].replace(/XXX/g, card);
                                        var str = '<div class="popup text" style="width:calc(100% - 10px);display:inline-block">';
                                        if (i == 0 && !bool) str += '<div style="opacity:0.5">';
                                        str += list[i];
                                        if (i == 0 && !bool) str += '</div>';
                                        str += '</div>';
                                        var next = choiceList.add(str);
                                        next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                                        next.firstChild.link = i;
                                        Object.setPrototypeOf(next, lib.element.Button.prototype); //QQQ
                                        choiceList.buttons.add(next.firstChild);
                                    }
                                    return choiceList;
                                };
                                if (event.target.isOnline2()) {
                                    event.target.send(func, get.translation(card), event.videoId, lib.skill.ua_paiyi.filterx(_status.event, player));
                                }
                                event.dialog = func(get.translation(card), event.videoId, lib.skill.ua_paiyi.filterx(_status.event, player));
                                var next = event.target.chooseButton();
                                next.set('dialog', event.videoId);
                                next.set('forced', true);
                                next.set('selectButton', 1);
                                next.set('filterButton', function (button) {
                                    if (button.link == 0) {
                                        // 判断目标角色是否有伤害牌
                                        return (
                                            _status.event.bool1 &&
                                            event.target.hasCard(function (card) {
                                                return get.tag(card, 'damage');
                                            }, 'h')
                                        );
                                    }
                                    return true;
                                });
                                //  next.set('bool1', lib.skill.ua_paiyi.filterx(_status.event, player));
                                ('step 2');
                                if (event.target.isOnline2()) {
                                    event.target.send('closeDialog', event.videoId);
                                }
                                event.target.storage.ua_paiyi;
                                event.dialog.close();
                                for (var i of result.links) {
                                    game.log(event.target, '选择了', '#g<b><排异></b>', '的', '#y选项' + get.cnNumber(i + 1, true));
                                }
                                if (result.links.includes(0)) {
                                    //还是对应选项下标(从0开始)
                                    player.chooseTarget(function (card, player, target) {
                                        if (target == player || target == event.target) return false;
                                        return true;
                                    }, true);
                                }
                                if (result.links.includes(1)) {
                                    player.draw(2);
                                    event.target.damage();
                                    event.finish();
                                }
                                ('step 3');
                                event.target
                                    .chooseToUse(function (card) {
                                        return get.tag(card, 'damage');
                                    }, '排异:使用一张伤害牌')
                                    .set('filterTarget', function (card, player, target) {
                                        if (target != result.targets[0]) return false;
                                        return true;
                                    });
                                event.result = result.targets[0];
                                ('step 4');
                                if (
                                    event.result.hasHistory('damage', function (evt) {
                                        return evt.getParent(2) == event;
                                    })
                                ) {
                                    player.chooseTarget(`是否对${get.translation(event.result)}发动<b><排异></b>？`, function (card, player, target) {
                                        return target == event.result;
                                    });
                                } else event.finish();
                                ('step 5');
                                if (result.bool) {
                                    var next = player.chooseButton(true);
                                    next.set('dialog', lib.skill.ua_paiyi_backup.chooseButton.dialog(event, player));
                                    next.set('backup', lib.skill.ua_paiyi_backup.chooseButton.backup);
                                    next.set('prompt', lib.skill.ua_paiyi_backup.chooseButton.prompt);
                                    next.set('target', event.result);
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        //张春华
                        ua_jueqing2: {
                            audio: 'ext:独爱/audio:2',
                            trigger: {
                                source: 'damageBefore',
                            },
                            prompt2(event, player) {
                                var num = get.cnNumber(2 * event.num, true);
                                return `,你失去${event.num}点体力,令本次伤害翻倍`;
                            },
                            logTarget: 'player',
                            content() {
                                player.loseHp(trigger.num);
                                trigger.num *= 2;
                                player.unmarkSkill('ua_jueqing');
                                player.removeSkill('ua_jueqing2');
                            },
                        },
                        ua_jueqing: {
                            group: 'ua_jueqing2',
                            trigger: {
                                source: 'damageBefore',
                            },
                            mark: true,
                            marktext: '绝情',
                            intro: {
                                content: '伤害翻倍未发动过',
                            },
                            forced: true,
                            audio: 'rejueqing',
                            content() {
                                'step 0';
                                trigger.cancel();
                                trigger.player.loseHp(trigger.num);
                                event.num = Math.min(trigger.num, 9);
                                ('step 1');
                                player.chooseToDiscard(1, '你可弃1张牌', 'he');
                                ('step 2');
                                if (result.bool) {
                                    event.num--;
                                    if (event.num > 0) event.goto(1);
                                } else event.finish();
                            },
                        },
                        ua_shangshi: {
                            audio: 'ext:独爱/audio:2',
                            trigger: {
                                player: ['loseAfter', 'changeHp', 'gainMaxHpAfter', 'loseMaxHpAfter'],
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            filter(event, player) {
                                if (event.getl && !event.getl(player)) return false;
                                return player.countCards('h') < player.getDamagedHp();
                            },
                            content() {
                                player.draw(player.getDamagedHp() - player.countCards('h'));
                            },
                        },
                        //甄姬
                        ua_luoshen: {
                            audio: 'luoshen',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            content() {
                                'step 0';
                                event.cards = [];
                                ('step 1');
                                var next = player.judge(function (card) {
                                    var color = get.color(card);
                                    var evt = _status.event.getParent('ua_luoshen');
                                    if (evt && evt.name == 'ua_luoshen') {
                                        if (!evt.color) evt.color = color;
                                        else if (evt.color != color) return -1;
                                    }
                                    return 1;
                                });
                                next.judge2 = function (result) {
                                    return result.bool;
                                };
                                if (get.mode() != 'guozhan' && !player.hasSkillTag('rejudge'))
                                    next.set('callback', function () {
                                        if (get.position(card, true) == 'o') player.gain(card, 'gain2');
                                    });
                                else
                                    next.set('callback', function () {
                                        event.parent.orderingCards.remove(card);
                                    });
                                ('step 2');
                                if (result.judge > 0) {
                                    event.cards.push(result.card);
                                    player.chooseBool('是否再次发动【洛神】？');
                                } else {
                                    event.cards = event.cards.filter((i) => get.position(i, true) == 'o');
                                    if (event.cards.length) {
                                        player.gain(event.cards, 'gain2');
                                    }
                                    event.finish();
                                }
                                ('step 3');
                                if (result.bool) {
                                    event.goto(1);
                                } else {
                                    if (event.cards.length) {
                                        player.gain(event.cards, 'gain2');
                                    }
                                }
                            },
                        },
                        ua_qingguo: {
                            audio: 'ext:独爱/audio:2',
                            audioname: ['sb_zhenji'],
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard(card) {
                                return get.color(card) == 'black';
                            },
                            viewAs: {
                                name: 'shan',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('hes', { color: 'black' })) return false;
                            },
                            position: 'hes',
                            prompt: '你的黑色牌可转化为【闪】',
                        },
                        //张昌蒲
                        ua_yanjiao: {
                            audio: 'ext:独爱/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                'step 0';
                                var num = 4;
                                if (player.storage.ua_xingshen) {
                                    num += player.storage.ua_xingshen;
                                    player.storage.ua_xingshen = 0;
                                    player.unmarkSkill('ua_xingshen');
                                }
                                event.cards = get.cards(num);
                                game.cardsGotoOrdering(event.cards);
                                player.showCards(event.cards);
                                event.num = num;
                                ('step 1');
                                event.getedResult = lib.skill.ua_yanjiao.getResult(cards);
                                if (!event.getedResult.length) {
                                    player.addTempSkill('ua_yanjiao2');
                                    player.storage.ua_yanjiao += event.num;
                                    event.finish();
                                }
                                ('step 2');
                                target.chooseControl('自动分配', '手动分配').set('prompt', '【严教】:是否让系统自动分配方案？').ai = function () {
                                    return 0;
                                };
                                ('step 3');
                                if (result.control == '手动分配') {
                                    event.goto(8);
                                } else if (!_status.connectMode) {
                                    var choiceList = ui.create.dialog('请选择一种方案', 'hidden', 'forcebutton');
                                    for (var i = 0; i < event.getedResult.length; i++) {
                                        var str = '<div class="popup text" style="width:calc(100% - 10px);display:inline-block">方案' + get.cnNumber(i + 1, true);
                                        str += '<br>第一组:';
                                        var current = event.getedResult[i];
                                        str += get.translation(current[0]);
                                        str += '<br>第二组:';
                                        str += get.translation(current[1]);
                                        if (current[2].length) {
                                            str += '<br>剩余:';
                                            str += get.translation(current[2]);
                                        }
                                        str += '</div>';
                                        var next = choiceList.add(str);
                                        next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                                        next.firstChild.link = i;
                                        Object.setPrototypeOf(next, lib.element.Button.prototype); //QQQ
                                        choiceList.buttons.add(next.firstChild);
                                    }
                                    event.choiceList = choiceList;
                                    target.chooseButton(choiceList, true);
                                }
                                ('step 4');
                                if (result.bool && result.links) event.index = result.links[0];
                                else event.index = 0;
                                event.togain = event.getedResult[event.index];
                                target.showCards(event.togain[0], get.translation(target) + '分出的第一份牌');
                                ('step 5');
                                target.showCards(event.togain[1], get.translation(target) + '分出的第二份牌');
                                ('step 6');
                                target.chooseControl().set('choiceList', ['获得' + get.translation(event.togain[0]), '获得' + get.translation(event.togain[1])]).ai = function () {
                                    return Math.random() < 0.5 ? 1 : 0;
                                };
                                ('step 7');
                                var list = [
                                    [target, event.togain[result.index]],
                                    [player, event.togain[1 - result.index]],
                                ];
                                game.loseAsync({
                                    gain_list: list,
                                    giver: target,
                                    animate: 'gain2',
                                }).setContent('gaincardMultiple');
                                if (event.togain[2].length) {
                                    player.addTempSkill('ua_yanjiao2');
                                    player.storage.ua_yanjiao += event.togain[2].length;
                                }
                                event.finish();
                                ('step 8');
                                var next = target.chooseToMove('严教:分出点数相等的两组牌');
                                next.set('chooseTime', (cards.length * 4).toString());
                                next.set('list', [
                                    [
                                        '未分配',
                                        cards,
                                        function (list) {
                                            var num = 0;
                                            for (var i of list) num += i.number;
                                            return `未分配(点数和${num})`;
                                        },
                                    ],
                                    [
                                        '第一组',
                                        [],
                                        function (list) {
                                            var num = 0;
                                            for (var i of list) num += i.number;
                                            return `第一组(点数和${num})`;
                                        },
                                    ],
                                    [
                                        '第二组',
                                        [],
                                        function (list) {
                                            var num = 0;
                                            for (var i of list) num += i.number;
                                            return `第二组(点数和${num})`;
                                        },
                                    ],
                                ]);
                                next.set('filterOk', function (moved) {
                                    var num1 = 0;
                                    for (var i of moved[1]) num1 += i.number;
                                    if (num1 == 0) return false;
                                    var num2 = 0;
                                    for (var i of moved[2]) num2 += i.number;
                                    return num1 == num2;
                                });
                                next.set('processAI', () => false);
                                ('step 9');
                                if (result.bool) {
                                    var moved = result.moved;
                                    event.getedResult = [[moved[1], moved[2], moved[0]]];
                                    event.goto(4);
                                } else {
                                    player.addTempSkill('ua_yanjiao2');
                                    player.storage.ua_yanjiao += num;
                                }
                            },
                            getResult(cards) {
                                var cl = cards.length;
                                var maxmium = Math.pow(3, cl);
                                var filter = function (list) {
                                    if (!list[1].length || !list[0].length) return false;
                                    var num1 = 0;
                                    for (var i = 0; i < list[1].length; i++) {
                                        num1 += list[1][i].number;
                                    }
                                    var num2 = 0;
                                    for (var j = 0; j < list[0].length; j++) {
                                        num2 += list[0][j].number;
                                    }
                                    return num1 == num2;
                                };
                                var results = [];
                                for (var i = 0; i < maxmium; i++) {
                                    var result = [[], [], []];
                                    for (var j = 0; j < cl; j++) {
                                        result[Math.floor((i % Math.pow(3, j + 1)) / Math.pow(3, j))].push(cards[j]);
                                    }
                                    if (filter(result)) results.push(result);
                                }
                                var filterSame = function (list1, list2) {
                                    if (list1[1].length == list2[0].length && list1[0].length == list2[1].length) {
                                        for (var i = 0; i < list1[0].length; i++) {
                                            if (!list2[1].includes(list1[0][i])) return false;
                                        }
                                        for (var i = 0; i < list1[1].length; i++) {
                                            if (!list2[0].includes(list1[1][i])) return false;
                                        }
                                        return true;
                                    }
                                    return false;
                                };
                                for (var i = 0; i < results.length; i++) {
                                    for (var j = i + 1; j < results.length; j++) {
                                        if (filterSame(results[i], results[j])) results.splice(j--, 1);
                                    }
                                }
                                results.sort(function (a, b) {
                                    return a[2].length - b[2].length;
                                });
                                return results.slice(0, 50);
                            },
                        },
                        ua_yanjiao2: {
                            marktext: '严教',
                            mark: true,
                            init(player) {
                                player.storage.ua_yanjiao = 0;
                            },
                            intro: {
                                name: '严教',
                                content(storage, player) {
                                    return `本回合你手牌上限-${player.storage.ua_yanjiao}.`;
                                },
                            },
                            onremove(player) {
                                delete player.storage.ua_yanjiao;
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    let num1 = player.storage.ua_yanjiao;
                                    return num - num1;
                                },
                            },
                        },
                        ua_xingshen: {
                            audio: 'ext:独爱/audio:2',
                            intro: {
                                content(storage, player) {
                                    return `下一次发动<b><严教></b>时,多展示${player.storage.ua_xingshen}张牌`;
                                },
                            },
                            trigger: {
                                player: 'damageEnd',
                            },
                            content() {
                                player.draw(1);
                                if (!player.storage.ua_xingshen) player.storage.ua_xingshen = 0;
                                player.storage.ua_xingshen += 2;
                                player.markSkill('ua_xingshen');
                            },
                        },
                        //蔡阳
                        ua_xunji: {
                            audio: 'ext:独爱/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target != player && !player.getStorage('ua_xunji_effect').includes(target);
                            },
                            content() {
                                player.markAuto('ua_xunji_effect', [target]);
                                player.addTempSkill('ua_xunji_effect', { player: 'die' });
                                target.markSkill('ua_xunji_mark');
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player, target) {
                                        if (player.hp < 2) return 0;
                                        return get.effect(target, { name: 'juedou' }, player, player);
                                    },
                                },
                            },
                            subSkill: {
                                mark: {
                                    trigger: { player: 'phaseJieshuBegin' },
                                    content() {
                                        player.unmarkSkill('ua_xunji_mark');
                                    },
                                    marktext: '嫉',
                                    intro: {
                                        content(storage, player) {
                                            let list = [];
                                            game.countPlayer(function (current) {
                                                if (current.hasSkill('ua_xunji')) list.push(get.translation(current));
                                            });
                                            return `<font color=#CC0000>你已经被盯上了!</font></b>当你下个回合结束时,若你于回合内造成过伤害,${list}视为对你使用1张【决斗】,此【决斗】对你造成伤害后,${list}失去等量体力.`;
                                        },
                                    },
                                },
                                effect: {
                                    audio: 'dcxunji',
                                    charlotte: true,
                                    trigger: {
                                        global: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return player.getStorage('ua_xunji_effect').includes(event.player);
                                    },
                                    content() {
                                        'step 0';
                                        var target = trigger.player;
                                        event.target = target;
                                        if (target.getHistory('sourceDamage').length && player.canUse('juedou', target)) {
                                            player.useCard({ name: 'juedou' }, target, 'ua_xunji_effect');
                                        }
                                        ('step 1');
                                        player.unmarkAuto('ua_xunji_effect', [target]);
                                        if (!player.storage.ua_xunji_effect.length) player.removeSkill('ua_xunji_effect');
                                    },
                                    group: 'ua_xunji_loseHp',
                                },
                                loseHp: {
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'juedou' && event.parent.skill == 'ua_xunji_effect';
                                    },
                                    content() {
                                        player.loseHp(trigger.num);
                                    },
                                },
                            },
                        },
                        ua_jiaofeng: {
                            audio: 'ext:独爱/audio:2',
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.isDamaged();
                            },
                            content() {
                                var num = player.getDamagedHp();
                                if (num > 0) player.draw();
                                if (num > 1) trigger.num++;
                                if (num > 2) player.recover();
                            },
                        },
                        //辛宪英
                        ua_zhongjian: {
                            audio: 'zhongjian',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            filterTarget(event, player, target) {
                                return target != player && target.countCards('h') > 0;
                            },
                            filterCard: true,
                            selectCard() {
                                return _status.event.player.hasSkill('ua_caishi_duo') ? [1, 2] : [1, 1];
                            },
                            check() {
                                return 1;
                            },
                            discard: false,
                            lose: false,
                            content() {
                                'step 0';
                                event.suits = [];
                                event.nums = [];
                                if (Array.isArray(cards))
                                    for (var i of cards) {
                                        event.suits.push(i.suit);
                                        event.nums.push(i.number);
                                    }
                                player.showCards(cards);
                                ('step 1');
                                player.choosePlayerCard(target, 'h', [1, player.hasSkill('ua_caishi_duo') ? 4 : 3], '请选择要展示的牌', true).ai = function () {
                                    return Math.random();
                                };
                                ('step 2');
                                event.cards2 = result.cards.slice(0);
                                target.showCards(event.cards2);
                                ('step 3');
                                var card = event.cards2.shift();
                                var bool = false;
                                if (event.suits.includes(card.suit)) {
                                    bool = true;
                                    player.draw();
                                }
                                if (event.nums.includes(card.number)) {
                                    bool = true;
                                    target.damage(2, 'nocard');
                                }
                                if (!bool && player.countCards('h')) player.chooseToDiscard('h', true);
                                ('step 4');
                                if (event.cards2.length) event.goto(3);
                            },
                            ai: {
                                result: {
                                    target(player, target) {
                                        return -target.countCards('h');
                                    },
                                },
                            },
                        },
                        ua_caishi: {
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            audio: 'caishi',
                            forced: true,
                            content() {
                                'step 0';
                                var choiceList = ['本回合发动<b><忠鉴></b>可多展示你和一名其他角色的各1张手牌'];
                                if (!trigger.numFixed) {
                                    choiceList.push('本摸牌阶段多摸2张牌.');
                                }
                                var next = player.chooseControl('cancel2');
                                next.set('choiceList', choiceList);
                                next.set('prompt', get.prompt('ua_caishi'));
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    if (result.index == 0) player.addTempSkill('ua_caishi_duo');
                                    if (result.index == 1) trigger.num += 2;
                                }
                            },
                            subSkill: {
                                duo: {
                                    mark: true,
                                    intro: {
                                        content: '本回合发动<b><忠鉴></b>可多展示你和一名其他角色的各1张手牌',
                                    },
                                },
                            },
                        },
                        //杨修
                        ua_danlao: {
                            audio: 'ext:独爱/audio:2',
                            filter(event, player) {
                                return (event.card.name == 'sha' || get.type(event.card) == 'trick') && event.targets && event.targets.length > 1;
                            },
                            check(event, player) {
                                return event.parent.excluded.includes(player) || get.tag(event.card, 'multineg') || get.effect(player, event.card, event.player, player) <= 0;
                            },
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            content() {
                                trigger.parent.excluded.add(player);
                                player.draw();
                            },
                        },
                        ua_jilei2: {
                            charlotte: true,
                            intro: {
                                content(storage) {
                                    return `不能使用、打出或弃置${get.translation(storage)}牌`;
                                },
                            },
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = [];
                            },
                            mark: true,
                            mod: {
                                cardDiscardable(card, player) {
                                    if (player.storage.ua_jilei2.includes(get.type(card, 'trick'))) return false;
                                },
                                cardEnabled(card, player) {
                                    if (player.storage.ua_jilei2.includes(get.type(card, 'trick'))) {
                                        var hs = player.getCards('h'),
                                            cards = [card];
                                        if (Array.isArray(card.cards)) cards.addArray(card.cards);
                                        for (var i of cards) {
                                            if (hs.includes(i)) return false;
                                        }
                                    }
                                },
                                cardRespondable(card, player) {
                                    if (player.storage.ua_jilei2.includes(get.type(card, 'trick'))) {
                                        var hs = player.getCards('h'),
                                            cards = [card];
                                        if (Array.isArray(card.cards)) cards.addArray(card.cards);
                                        for (var i of cards) {
                                            if (hs.includes(i)) return false;
                                        }
                                    }
                                },
                                cardSavable(card, player) {
                                    if (player.storage.ua_jilei2.includes(get.type(card, 'trick'))) {
                                        var hs = player.getCards('h'),
                                            cards = [card];
                                        if (Array.isArray(card.cards)) cards.addArray(card.cards);
                                        for (var i of cards) {
                                            if (hs.includes(i)) return false;
                                        }
                                    }
                                },
                            },
                        },
                        ua_jilei: {
                            audio: 'jilei',
                            trigger: {
                                player: 'damageEnd',
                            },
                            content() {
                                'step 0';
                                player.chooseControl('basic', 'trick', 'equip', 'cancel2', function () {
                                    const source = trigger.source;
                                    var list = ['basic', 'trick', 'equip'];
                                    if (source) {
                                        list = list.filter(function (name) {
                                            return !source.storage.ua_jilei2 || !source.storage.ua_jilei2.includes(name);
                                        });
                                        if (!list.length) return 'cancel2';
                                        if (
                                            list.includes('trick') &&
                                            source.countCards('h', function (card) {
                                                return get.type(card, source) == 'trick' && source.hasValueTarget(card);
                                            }) > 1
                                        )
                                            return 'trick';
                                    }
                                    return list[0];
                                });
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    player.popup(get.translation(result.control) + '牌');
                                    var card = get.cardPile2(function (card) {
                                        return get.type2(card) == result.control;
                                    });
                                    if (card) player.gain(card, 'gain2');
                                    if (trigger.source) {
                                        //QQQ
                                        trigger.source.addTempSkill('ua_jilei2', { player: 'phaseBegin' });
                                        trigger.source.storage.ua_jilei2.add(result.control);
                                    }
                                }
                            },
                        },
                        //杜畿
                        ua_andong: {
                            audio: 'ext:独爱/audio:2',
                            trigger: {
                                player: 'damageBegin2',
                            },
                            filter(event, player) {
                                return event.source && event.source.isIn();
                            },
                            logTarget: 'source',
                            content() {
                                'step 0';
                                var target = trigger.source,
                                    str = get.translation(player);
                                var bool = player.storage.ua_andong;
                                if (bool) str = '自己';
                                var choiceList = [`防止${str}即将受到的伤害,且本回合内♥️️牌不计入` + (bool ? get.translation(target) : '自己') + '的手牌上限.'];
                                if (!target.countCards('h')) choiceList.push(`令${str}下次发动〖安东〗时,改为自行选择`);
                                else choiceList.push(`令${str}观看你的手牌并获得所有♥️️牌`);
                                if (bool) {
                                    delete player.storage.ua_andong;
                                    player.chooseControl().set('choiceList', choiceList).set('prompt', '安东:请选择一项');
                                } else {
                                    target
                                        .chooseControl()
                                        .set('choiceList', choiceList)
                                        .set('prompt', '安东:请选择一项')
                                        .set('ai', function (event, player) {
                                            var target = _status.event.parent.player;
                                            var player = _status.event.player;
                                            if (get.attitude(player, target) > 0) return 0;
                                            return 1;
                                        });
                                }
                                ('step 1');
                                var target = trigger.source;
                                if (result.index == 0) {
                                    target.addTempSkill('ua_andong_ignore');
                                    trigger.cancel();
                                } else {
                                    player.storage.ua_andong = true;
                                    player.viewHandcards(target);
                                    var cards = target.getCards('h', function (card) {
                                        return card.suit == 'heart';
                                    });
                                    if (cards.length) player.gain(cards, target, 'give', 'bySelf');
                                }
                            },
                            subSkill: {
                                ignore: {
                                    mod: {
                                        ignoredHandcard(card, player) {
                                            if (card.suit == 'heart') {
                                                return true;
                                            }
                                        },
                                        cardDiscardable(card, player, name) {
                                            if (name == 'phaseDiscard' && card.suit == 'heart') return false;
                                        },
                                    },
                                    charlotte: true,
                                    marktext: '安东',
                                    intro: '♥️️牌于本回合内不计入手牌上限',
                                },
                            },
                        },
                        ua_yingshi: {
                            audio: 'xinfu_yingshi',
                            trigger: {
                                player: 'phaseDrawEnd',
                            },
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                event.given_map = {};
                                event.num = Infinity;
                                ('step 1');
                                player.chooseCardTarget({
                                    filterCard(card) {
                                        return get.itemtype(card) == 'card' && !card.hasGaintag('ua_yingshi_tag');
                                    },
                                    filterTarget: lib.filter.notMe,
                                    selectCard: [1, player.countCards('he')],
                                    position: 'he',
                                    prompt: get.prompt('ua_yingshi'),
                                    prompt2: '将任意张牌扣置在任意名其他角色区域作为<酬>',
                                    ai1(card) {
                                        return 1 - player.getUseValue(card);
                                    },
                                    ai2(target) {
                                        var player = _status.event.player;
                                        return (
                                            (1 +
                                                game.countPlayer(function (current) {
                                                    return get.attitude(player, current) > 0 && current.inRange(target) && get.damageEffect(target, current, player) > 0;
                                                })) *
                                            -get.attitude(player, target)
                                        );
                                    },
                                });
                                ('step 2');
                                if (result.bool) {
                                    var res = result.cards,
                                        target = result.targets[0].playerid;
                                    player.addGaintag(res, 'ua_yingshi_tag');
                                    event.num -= res.length;
                                    if (!event.given_map[target]) event.given_map[target] = [];
                                    event.given_map[target].addArray(res);
                                    if (event.num > 0) event.goto(1);
                                }
                                ('step 3');
                                /*  if(_status.connectMode){
                                      game.broadcastAll(function(){delete _status.noclearcountdown;game.stopCountChoose()});
                                  }
                                  var map=[],cards=[];
                                  for(var i in event.given_map){
                                      var source=(_status.connectMode?lib.playerOL:game.playerMap)[i];
                                      player.line(source,'green');
                                      map.push([source,event.given_map[i]]);
                                      cards.addArray(event.given_map[i]);
                                  }
                                  game.loseAsync({
                                      gain_list:map,
                                      player:player,
                                      cards:cards,
                                      giver:player,
                                      animate:'giveAuto',
                                  }).setContent('gaincardMultiple');
                                  //将这串代码的效果从给目标牌改成置于目标武将牌上,置于武将牌上的代码是addToExpansion(player,'give',cards)
                                  //修改后的代码如下:
                                  for(var i=0;i<map.length;i++){
                                      var target=map[i][0];
                                      var cards=map[i][1];
                                      target.addToExpansion(target,'gain2',cards).gaintag.add('ua_yingshi_cards'); //将牌置于目标武将牌上
                                      target.addSkill('ua_yingshi_cards');
                                      target.storage.ua_yingshi_source=player;
                                  }*/
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
                                for (var i = 0; i < map.length; i++) {
                                    var target = map[i][0];
                                    var cards = map[i][1];
                                    target.addToExpansion(target, 'give', cards).gaintag.add('ua_yingshi_cards'); //将牌直接置于目标武将牌上
                                    target.addSkill('ua_yingshi_cards');
                                    target.storage.ua_yingshi_source = player;
                                }
                                /*  'step 1'
                                  if(result.bool){
                                      var target=result.targets[0],cards=result.cards;
                                      target.addSkill('ua_yingshi_cards');
                                      target.addToExpansion(player,'give',cards).gaintag.add('ua_yingshi_cards');
                                      target.storage.ua_yingshi_source=player;
                                  }*/
                            },
                            subSkill: {
                                cards: {
                                    trigger: {
                                        player: 'damageSource',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return event.source && event.source.isIn() && player.getExpansions('ua_yingshi_cards').length;
                                    },
                                    logTarget: 'source',
                                    content() {
                                        'step 0';
                                        event.target = trigger.source;
                                        event.target.chooseButton(['应势:请选择你的赏金', player.getExpansions('ua_yingshi_cards')]);
                                        ('step 1');
                                        if (result.bool) {
                                            var cards = [result.links[0]];
                                            for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                                                var card = ui.cardPile.childNodes[i];
                                                if (card.number == cards[0].number && card.suit == cards[0].suit) cards.push(card);
                                            }
                                            player.$give(cards[0], target);
                                            if (cards.length > 1) {
                                                setTimeout(
                                                    function () {
                                                        target.$gain2(cards.slice(1));
                                                    },
                                                    get.delayx(200, 200)
                                                );
                                                game.log(target, '从牌堆获得了', cards.slice(1));
                                            }
                                            target.gain(cards);
                                        }
                                        ('step 2');
                                        if (!player.getExpansions('ua_yingshi_cards').length) player.removeSkill('ua_yingshi_cards');
                                    },
                                    marktext: '酬',
                                    intro: {
                                        content: 'expansion',
                                        markcount: 'expansion',
                                    },
                                    ai: {
                                        threaten: 3,
                                    },
                                    group: 'ua_yingshi_regain',
                                    onremove(player, skill) {
                                        var cards = player.getExpansions(skill);
                                        if (cards.length) player.loseToDiscardpile(cards);
                                        delete player.storage.ua_yingshi_source;
                                    },
                                },
                                regain: {
                                    trigger: {
                                        player: 'die',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    forceDie: true,
                                    filter(event, player) {
                                        return player.storage.ua_yingshi_source && player.storage.ua_yingshi_source.isIn() && player.getExpansions('ua_yingshi_cards').length;
                                    },
                                    content() {
                                        let sou = player.storage.ua_yingshi_source;
                                        sou.draw(sou.hp);
                                        let num = sou.maxHp - sou.hp;
                                        if (num > 0) sou.recover(num);
                                    },
                                },
                            },
                        },
                        //李典
                        ua_wangxi: {
                            audio: 'wangxi',
                            trigger: {
                                player: 'damageEnd',
                                source: 'damageSource',
                            },
                            content() {
                                'step 0';
                                event.count = Math.min(trigger.num, 9);
                                event.target = trigger.player == player ? trigger.source : trigger.player;
                                ('step 1');
                                player.draw(2);
                                event.count--;
                                ('step 2');
                                if (event.target && event.target.isAlive() && event.target != player && player.countCards('he')) {
                                    player.chooseCard('he', `忘隙:给${get.translation(event.target)}1张牌`, true).set('ai', function (card) {
                                        return get.value(card, target) - get.value(card, player);
                                    });
                                } else event.goto(4);
                                ('step 3');
                                if (result.bool && result.cards && result.cards.length) player.give(result.cards, event.target);
                                if (event.count > 0) {
                                    player.chooseBool(get.prompt2('ua_wangxi', event.target));
                                } else event.finish();
                                ('step 4');
                                if (result.bool) {
                                    event.goto(1);
                                }
                            },
                        },
                        ua_xunxun: {
                            audio: 'ext:独爱/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin1',
                            },
                            //摸牌阶段开始时,你可观看牌堆顶的4张牌,将其中的2张牌置于牌堆顶,将其余的牌置于牌堆底
                            async content(event, trigger, player) {
                                //QQQ
                                var cards = get.cards(4);
                                game.cardsGotoOrdering(cards);
                                const result = await player
                                    .chooseToMove()
                                    .set('list', [['牌堆顶', cards], ['牌堆底']])
                                    .set('prompt', '将牌移动到牌堆顶或牌堆底')
                                    .set('processAI', function (list) {
                                        var cards = list[0][1];
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
                                    }).forResult(); //自己观星
                                result.moved[0].reverse();
                                for (var i of result.moved[0]) {
                                    ui.cardPile.insertBefore(i, ui.cardPile.firstChild);
                                }
                                for (var i of result.moved[1]) {
                                    ui.cardPile.appendChild(i);
                                }
                                player.popup(get.cnNumber(result.moved[0].length) + `上${get.cnNumber(result.moved[1].length)}下`);
                                game.log(player, `将${get.cnNumber(result.moved[0].length)}张牌置于牌堆顶`);
                                game.updateRoundNumber();
                            },
                        },
                        //徐晃
                        ua_duanliang: {
                            audio: 1,
                            enable: 'phaseUse',
                            //usable:1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseToDuiben(target)
                                    .set('title', '谋弈')
                                    .set('namelist', ['固守城池', '突出重围', '围城断粮', '擂鼓进军'])
                                    .set('ai', (button) => {
                                        var source = _status.event.parent.player,
                                            target = _status.event.parent.target;
                                        if (get.effect(target, { name: 'juedou' }, source, source) >= 10 && button.link[1] == 'db_def2' && Math.random() < 0.5) return 10;
                                        return 1 + Math.random();
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var card = { name: 'juedou' };
                                    var hasBingliang = target.hasJudge('bingliang');
                                    if (result.player) {
                                        if (result.player == 'db_def2') {
                                            if (player.canUse(card, target)) {
                                                player.useCard(card, target);
                                                target.addTempSkill('ua_duanliang_discard', 'damageAfter');
                                                target.storage.ua_duanliang_discard = player;
                                            } else {
                                                event.finish();
                                            }
                                        } else {
                                            player.gainPlayerCard(target, 'he', true, 2);
                                            if (!hasBingliang) {
                                                if (ui.cardPile.childNodes.length) {
                                                    var bingliang = { name: 'bingliang' };
                                                    if (player.canUse(bingliang, target, false)) {
                                                        player.useCard({ name: 'bingliang' }, target, get.cards());
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            subSkill: {
                                true1: {
                                    audio: true,
                                },
                                true2: {
                                    audio: true,
                                },
                                false: {
                                    audio: true,
                                },
                                discard: {
                                    trigger: { player: 'damageEnd' },
                                    // 修改这里,增加一个条件,判断伤害来源是否是存储的玩家
                                    filter(event, player) {
                                        return event.source && event.source == player.storage.ua_duanliang_discard;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        // 修改这里,弃置所有牌而不是一张
                                        player.discard(player.getCards('hej'));
                                        ('step 1');
                                        delete player.storage.ua_duanliang_discard;
                                    },
                                },
                            },
                        },
                        //许褚
                        ua_luoyi: {
                            trigger: {
                                source: 'damageBefore',
                            },
                            forced: true,
                            content() {
                                trigger.audioed = true;
                                trigger.num++;
                            },
                            filter(event, player) {
                                return event.card && (event.card.name == 'sha' || event.card.name == 'juedou');
                            },
                        },
                        //戏志才
                        ua_tiandu: {
                            audio: 'ext:独爱/audio:2',
                            audioname: ['re_guojia', 'xizhicai', 'gz_nagisa'],
                            trigger: {
                                player: 'judgeEnd',
                            },
                            filter(event, player) {
                                return get.position(event.result.card, true) == 'o';
                            },
                            content() {
                                player.gain(trigger.result.card, 'gain2');
                            },
                        },
                        ua_xianfu: {
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.players.length > 1 && (event.name != 'phase' || game.phaseNumber == 0);
                            },
                            audio: 6,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('请选择【先辅】的目标', lib.translate.ua_xianfu_info, true, function (card, player, target) {
                                        return target != player && (!player.storage.ua_xianfu2 || !player.storage.ua_xianfu2.includes(target));
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (att > 0) return att + 1;
                                        if (att == 0) return Math.random();
                                        return att;
                                    }).animate = false;
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    if (!player.storage.ua_xianfu2) player.storage.ua_xianfu2 = [];
                                    player.storage.ua_xianfu2.push(target);
                                    player.addSkill('ua_xianfu2');
                                }
                            },
                        },
                        ua_xianfu2: {
                            audio: 'xianfu',
                            charlotte: true,
                            trigger: { global: ['damageEnd', 'recoverEnd'] },
                            forced: true,
                            filter(event, player) {
                                if (event.player.isDead() || !player.storage.ua_xianfu2 || !player.storage.ua_xianfu2.includes(event.player) || event.num <= 0) return false;
                                if (event.name == 'damage') return true;
                                return player.isDamaged();
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                var target = trigger.player;
                                if (!target.storage.xianfu_mark) target.storage.xianfu_mark = [];
                                target.storage.xianfu_mark.add(player);
                                target.storage.xianfu_mark.sortBySeat();
                                target.markSkill('xianfu_mark');
                                ('step 1');
                                player[trigger.name](trigger.num, 'nosource');
                            },
                            onremove(player) {
                                if (!player.storage.ua_xianfu2) return;
                                game.countPlayer(function (current) {
                                    if (player.storage.ua_xianfu2.includes(current) && current.storage.xianfu_mark) {
                                        current.storage.xianfu_mark.remove(player);
                                        if (!current.storage.xianfu_mark.length) current.unmarkSkill('xianfu_mark');
                                        else current.markSkill('xianfu_mark');
                                    }
                                });
                                delete player.storage.ua_xianfu2;
                            },
                        }, //QQQ
                        ua_chouce: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            content() {
                                'step 0';
                                event.num = Math.min(trigger.num, 9);
                                ('step 1');
                                player.judge();
                                ('step 2');
                                event.color = result.color;
                                if (event.color == 'black') {
                                    if (
                                        game.hasPlayer(function (current) {
                                            return current.countDiscardableCards(player, 'hej') > 0;
                                        })
                                    )
                                        player
                                            .chooseTarget(
                                                '弃置一名角色区域内的一张牌',
                                                function (card, player, target) {
                                                    return target.countDiscardableCards(player, 'hej');
                                                },
                                                true
                                            )
                                            .set('ai', function (target) {
                                                var player = _status.event.player;
                                                var att = get.attitude(player, target);
                                                if (att < 0) {
                                                    att = -Math.sqrt(-att);
                                                } else {
                                                    att = Math.sqrt(att);
                                                }
                                                return att * lib.card.guohe.ai.result.target(player, target);
                                            });
                                    else event.finish();
                                } else {
                                    var next = player.chooseTarget('令一名角色摸1张牌');
                                    if (player.storage.ua_xianfu2 && player.storage.ua_xianfu2.length) {
                                        next.set('prompt2', `(若目标为${get.translation(player.storage.ua_xianfu2)},改为摸2张牌)`);
                                    }
                                    next.set('ai', function (target) {
                                        var player = _status.event.player;
                                        var att = get.attitude(player, target) / Math.sqrt(1 + target.countCards('h'));
                                        if (target.hasSkillTag('nogain')) att /= 10;
                                        if (player.storage.ua_xianfu2 && player.storage.ua_xianfu2.includes(target)) return att * 2;
                                        return att;
                                    });
                                }
                                ('step 3');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.line(target, 'green');
                                    if (event.color == 'black') {
                                        player.discardPlayerCard(target, 'hej', true);
                                    } else {
                                        if (player.storage.ua_xianfu2 && player.storage.ua_xianfu2.includes(target)) {
                                            if (!target.storage.ua_xianfu_mark) target.storage.ua_xianfu_mark = [];
                                            target.storage.ua_xianfu_mark.add(player);
                                            target.storage.ua_xianfu_mark.sortBySeat();
                                            target.markSkill('ua_xianfu_mark');
                                            target.draw(2);
                                        } else {
                                            target.draw();
                                        }
                                    }
                                }
                                ('step 4');
                                if (--event.num > 0) {
                                    player.chooseBool(get.prompt2('ua_chouce'));
                                } else {
                                    event.finish();
                                }
                                ('step 5');
                                if (result.bool) {
                                    event.goto(1);
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                            if (!target.hasFriend()) return;
                                            if (target.hp >= 4) return [1, get.tag(card, 'damage') * 1.5];
                                            if (target.hp == 3) return [1, get.tag(card, 'damage') * 1];
                                            if (target.hp == 2) return [1, get.tag(card, 'damage') * 0.5];
                                        }
                                    },
                                },
                            },
                        },
                        //王异
                        ua_zhenlie: {
                            audio: 'ext:独爱/audio:2',
                            /*    init:function(player){
                                    if(!player.storage.ua_zhenlie) player.storage.ua_zhenlie=0;
                                    player.unmarkSkill("ua_zhenlie");
                                    },*/
                            intro: {
                                content(storage, player) {
                                    return '下' + player.countMark('ua_zhenlie') + '次发动<b><秘计></b>时,改为直接看牌给牌.';
                                },
                            },
                            filter(event, player) {
                                return event.player != player && event.card;
                            },
                            logTarget: 'player',
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            content() {
                                'step 0';
                                player.loseHp();
                                //   player.storage.ua_zhenlie=(player.storage.ua_zhenlie||0)+1;
                                player.addMark('ua_zhenlie');
                                ('step 1');
                                trigger.parent.excluded.add(player);
                                ('step 2');
                                if (trigger.player.countCards('he')) {
                                    player.discardPlayerCard(trigger.player, 'he', true);
                                }
                            },
                        },
                        ua_miji: {
                            trigger: {
                                player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
                            },
                            audio: 'ext:独爱/audio:2',
                            content() {
                                'step 0';
                                if (player.countMark('ua_zhenlie') > 0) event.goto(1);
                                else {
                                    player.judge(function (card) {
                                        return get.color(card) == 'black' ? 1 : -1;
                                    }).judge2 = function (result) {
                                        return result.bool;
                                    };
                                }
                                ('step 1');
                                if (result.bool) {
                                    event.num = Math.max(player.getDamagedHp(), 1);
                                    event.cards = get.cards(event.num);
                                    player.chooseTarget(true).set('createDialog', ['请选择一名角色获得这些牌', event.cards]);
                                } else {
                                    if (player.countMark('ua_zhenlie') > 0) {
                                        player.removeMark('ua_zhenlie', 1);
                                        // if(player.storage.ua_zhenlie==0) player.unmarkSkill('ua_zhenlie');
                                        event.num = Math.max(player.getDamagedHp(), 1);
                                        event.cards = get.cards(event.num);
                                        player.chooseTarget(true).set('createDialog', ['请选择一名角色获得这些牌', event.cards]);
                                    } else event.finish();
                                }
                                ('step 2');
                                player.line(result.targets);
                                result.targets[0].gain(event.cards, 'gain2');
                            },
                        },
                        //钟繇
                        ua_huomo: {
                            audio: 'ext:独爱/audio:2',
                            audioname: ['huzhao'],
                            enable: 'chooseToUse',
                            hiddenCard(player, name) {
                                if (get.type(name) != 'basic') return false;
                                return player.hasCard(function (card) {
                                    return get.color(card) == 'black' && get.type(card) != 'basic';
                                }, 'eh');
                            },
                            filter(event, player) {
                                if (
                                    !player.hasCard(function (card) {
                                        return get.color(card) == 'black' && get.type(card) != 'basic';
                                    }, 'eh')
                                )
                                    return false;
                                for (var name of lib.inpile) {
                                    if (get.type(name) != 'basic') continue;
                                    var card = { name: name };
                                    if (event.filterCard && event.filterCard(card, player, event)) return true;
                                    if (name == 'sha') {
                                        for (var nature of lib.inpile_nature) {
                                            card.nature = nature;
                                            if (event.filterCard && event.filterCard(card, player, event)) return true;
                                        }
                                    }
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var vcards = [];
                                    for (var name of lib.inpile) {
                                        if (get.type(name) != 'basic') continue;
                                        var card = { name: name };
                                        if (event.filterCard && event.filterCard(card, player, event)) vcards.push(['基本', '', name]);
                                        if (name == 'sha') {
                                            for (var nature of lib.inpile_nature) {
                                                card.nature = nature;
                                                if (event.filterCard && event.filterCard(card, player, event)) vcards.push(['基本', '', name, nature]);
                                            }
                                        }
                                    }
                                    return ui.create.dialog('活墨', [vcards, 'vcard'], 'hidden');
                                },
                                backup(links, player) {
                                    return {
                                        filterCard(card) {
                                            return get.type(card) != 'basic' && get.color(card) == 'black';
                                        },
                                        viewAs: {
                                            name: links[0][2],
                                            nature: links[0][3],
                                            suit: 'none',
                                            number: null,
                                        },
                                        position: 'he',
                                        popname: true,
                                        ignoreMod: true,
                                        precontent() {
                                            'step 0';
                                            var card = event.result.cards[0];
                                            event.card = card;
                                            player.$throw(card, 1000);
                                            game.log(player, '将', card, '置于牌堆顶');
                                            event.result.card = { name: event.result.card.name, nature: event.result.card.nature };
                                            event.result.cards = [];
                                            player.lose(card, ui.cardPile, 'visible', 'insert');
                                            ('step 1');
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '将1张黑色非基本牌置于牌堆顶并视为使用1张' + get.translation(links[0][3] || '') + get.translation(links[0][2]);
                                },
                            },
                        },
                        ua_zuoding: {
                            trigger: {
                                global: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                if (event.parent.triggeredTargets3.length > 1) return false;
                                return (
                                    get.color(event.card) == 'black' &&
                                    _status.currentPhase == event.player &&
                                    event.targets &&
                                    event.targets.length &&
                                    event.player != player &&
                                    game.countPlayer2(function (current) {
                                        return current.getHistory('damage').length;
                                    }) == 0
                                );
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('ua_zuoding'), '令一名目标角色摸1张牌', function (card, player, target) {
                                        return _status.event.targets.includes(target);
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(_status.event.player, target);
                                    })
                                    .set('targets', trigger.targets);
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].draw();
                                }
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        //朱灵
                        ua_zhanyi: {
                            audio: 'zhanyi',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            usable: 1,
                            content() {
                                'step 0';
                                player.chooseToDiscard();
                                player.loseHp();
                                event.videoId = lib.status.videoId++;
                                var func = function (player, id) {
                                    var list = ['选项一:你的基本牌可转化为任意基本牌使用直到你下个回合开始,因此转化的牌基础数值+1', '选项二:你摸2张牌,你使用牌无距离限制、你使用的锦囊牌不能被抵消直到你下个回合开始', '选项三:每回合每类牌限一次,你使用牌指定目标后,弃置目标各2张牌.'];
                                    var choiceList = ui.create.dialog('雄略:请选择一项'); //选项标题
                                    choiceList.videoId = id;
                                    for (var i = 0; i < list.length; i++) {
                                        var str = `<div class="popup text" style="width:calc(100% - 10px);display:inline-block">${list[i]}</div>`;
                                        var next = choiceList.add(str);
                                        next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                                        next.firstChild.link = i;
                                        Object.setPrototypeOf(next, lib.element.Button.prototype); //QQQ
                                        choiceList.buttons.add(next.firstChild);
                                    }
                                    return choiceList;
                                };
                                if (player.isOnline2()) {
                                    player.send(func, player, event.videoId);
                                }
                                event.dialog = func(player, event.videoId);
                                if (player != game.me || _status.auto) {
                                    event.dialog.style.display = 'none';
                                }
                                var next = player.chooseButton();
                                next.set('dialog', event.videoId);
                                next.set('forced', true);
                                next.set('selectButton', 1); //这是可以选择1～2项,有需要自己调整
                                ('step 1');
                                if (player.isOnline2()) {
                                    player.send('closeDialog', event.videoId);
                                }
                                event.dialog.close();
                                //后面用result.links接收选择的是哪几项
                                //比如这样:
                                if (result.links.includes(0)) player.addTempSkill('ua_zhanyi_basic', { player: 'phaseBegin' }); //还是对应选项下标(从0开始)
                                if (result.links.includes(1)) {
                                    player.draw(2);
                                    player.addTempSkill('ua_zhanyi_trick', { player: 'phaseBegin' });
                                }
                                if (result.links.includes(2)) player.addTempSkill('ua_zhanyi_equip', { player: 'phaseBegin' });
                                //有些需要跨步骤选择,后面步骤再对event.links做类似判断
                            },
                        },
                        ua_zhanyi_basic1: {
                            trigger: { player: 'useCard' },
                            filter(event, player) {
                                return event.skill == 'ua_zhanyi_basic_backup';
                            },
                            forced: true,
                            silent: true,
                            popup: false,
                            content() {
                                if (!trigger.baseDamage) trigger.baseDamage = 1;
                                trigger.baseDamage++;
                            },
                        },
                        ua_zhanyi_basic: {
                            group: ['ua_zhanyi_basic1'],
                            hiddenCard(player, name) {
                                return ['sha', 'tao', 'jiu'].includes(name) && player.countCards('h', { type: 'basic' }) > 0;
                            },
                            enable: 'chooseToUse',
                            filter(event, player) {
                                if ((event.filterCard && event.filterCard({ name: 'sha' }, player, event)) || event.filterCard({ name: 'jiu' }, player, event) || event.filterCard({ name: 'tao' }, player, event)) {
                                    return player.hasCard(function (card) {
                                        return get.type(card) == 'basic';
                                    }, 'hs');
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    if (event.filterCard && event.filterCard({ name: 'sha' }, player, event)) {
                                        list.push(['基本', '', 'sha']);
                                        for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
                                    }
                                    if (event.filterCard && event.filterCard({ name: 'tao' }, player, event)) {
                                        list.push(['基本', '', 'tao']);
                                    }
                                    if (event.filterCard && event.filterCard({ name: 'jiu' }, player, event)) {
                                        list.push(['基本', '', 'jiu']);
                                    }
                                    return ui.create.dialog('战意', [list, 'vcard'], 'hidden');
                                },
                                backup(links, player) {
                                    return {
                                        audio: 'zhanyi',
                                        filterCard(card, player, target) {
                                            return get.type(card) == 'basic';
                                        },
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        position: 'hs',
                                        popname: true,
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张基本牌转化为' + get.translation(links[0][3] || '') + get.translation(links[0][2]) + '使用';
                                },
                            },
                        },
                        equip: {
                            audio: 'zhanyi',
                            trigger: {
                                player: 'useCardToPlayer',
                            },
                            filter(event, player) {
                                return !player.hasHistory('useSkill', (evt) => evt.skill == 'ua_zhanyi_equip' && evt.event._trigger.card.name == event.card.name) && event.target != player && event.target.countDiscardableCards(player, 'he');
                            },
                            logTarget: 'target',
                            check(event, player) {
                                return -get.attitude(player, event.target);
                            },
                            content() {
                                player.discardPlayerCard(trigger.target, 2, true, 'he');
                            },
                        },
                        ua_zhanyi_equip: {
                            audio: 'zhanyi',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return event.isFirstTarget && !player.hasHistory('useSkill', (evt) => evt.skill == 'ua_zhanyi_equip' && get.type2(evt.event._trigger.card) == get.type2(event.card)) && event.targets.some((target) => target.countDiscardableCards(player, 'he'));
                            },
                            logTarget: 'target',
                            content() {
                                'step 0';
                                event.targets = trigger.targets.filter((target) => target.countDiscardableCards(player, 'he')).sortBySeat();
                                ('step 1');
                                if (targets.length) {
                                    player.discardPlayerCard(targets.shift(), 2, true, 'he');
                                    event.redo();
                                }
                            },
                        },
                        ua_zhanyi_trick: {
                            mod: {
                                wuxieRespondable() {
                                    return false;
                                },
                                targetInRange(card, player, target) {
                                    return true;
                                },
                            },
                        },
                        //周宣
                        ua_wumei: {
                            audio: 'ext:独爱/audio:2',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return !player.hasSkill('ua_wumei_used');
                            },
                            _priority: 10,
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('ua_wumei')).set('ai', (target) => {
                                    return get.attitude(_status.event.player, target);
                                });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.addTempSkill('ua_wumei_used', 'roundStart');
                                    target.phase('nodelay');
                                    target.addTempSkill('ua_wumei_wake');
                                    var targets = game.filterPlayer();
                                    if (!target.storage.ua_wumei_wake) target.storage.ua_wumei_wake = [[], []];
                                    for (var targetx of targets) {
                                        target.storage.ua_wumei_wake[0].push(targetx);
                                        target.storage.ua_wumei_wake[1].push(targetx.hp);
                                    }
                                    target.markSkill('ua_wumei_wake');
                                    if (!trigger._finished) {
                                        trigger.finish();
                                        trigger.untrigger(true);
                                        trigger._triggered = 5;
                                        player.phase('nodelay');
                                    }
                                }
                            },
                            subSkill: {
                                used: {
                                    charlotte: true,
                                },
                                wake: {
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    charlotte: true,
                                    popup: false,
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.ua_wumei_wake && player.storage.ua_wumei_wake.length;
                                    },
                                    content() {
                                        var storage = player.storage.ua_wumei_wake;
                                        for (var i = 0; i < storage[0].length; i++) {
                                            var target = storage[0][i];
                                            if (target && target.isIn()) {
                                                if (target.hp != storage[1][i]) {
                                                    game.log(target, '将体力从', get.cnNumber(target.hp, true), '改为', get.cnNumber(storage[1][i], true));
                                                    target.changeHp(storage[1][i] - target.hp)._triggered = null;
                                                }
                                            }
                                        }
                                        player.removeSkill('ua_wumei_wake');
                                    },
                                    marktext: '寐',
                                    intro: {
                                        markcount(storage, player) {
                                            if (!storage || !storage.length) return 0;
                                            return storage[0].length;
                                        },
                                        content(storage, player) {
                                            if (!storage || !storage.length) return '无信息';
                                            var str = '所有角色于回合开始时的体力值:<br>';
                                            for (var i = 0; i < storage[0].length; i++) {
                                                var str2 = get.translation(storage[0][i]) + ':' + storage[1][i];
                                                if (!storage[0][i].isIn()) str2 = `<span style="opacity:0.5">${str2}(已故)</span>`;
                                                str += '<li>' + str2;
                                            }
                                            return str;
                                        },
                                    },
                                    ai: {
                                        effect: {
                                            player_use(card, player, target) {
                                                if (get.tag(card, 'damage')) return 0.5;
                                            },
                                            target(card, player, target) {
                                                var tri = _status.event.getTrigger();
                                                if (get.tag(card, 'recover') && target.hp > 0) {
                                                    if (card.name != 'jiu') return 'zeroplayertarget';
                                                }
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        ua_zhanmeng: {
                            audio: 'ext:独爱/audio:2',
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return (
                                    !player.hasSkill('ua_zhanmeng_choice1') ||
                                    !player.hasSkill('ua_zhanmeng_choice2') ||
                                    (!player.hasSkill('ua_zhanmeng_choice0') &&
                                        !game.hasPlayer2((current) => {
                                            var history = current.actionHistory;
                                            if (history.length < 2) return false;
                                            var list = history[history.length - 2].useCard.map((evt) => evt.card.name);
                                            if (list.includes(event.card.name)) return true;
                                            return false;
                                        }))
                                );
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var list = [];
                                var choiceList = ['上回合若没有同名牌被使用过,你获得一张非伤害牌', '下回合当同名牌首次被使用后,你获得一张伤害牌', '令一名其他角色弃置两张牌,若点数之和大于10,你对其造成1点火焰伤害'];
                                var used = game.hasPlayer2((current) => {
                                    var history = current.actionHistory;
                                    if (history.length < 2) return false;
                                    var list = history[history.length - 2].useCard.map((evt) => evt.card.name);
                                    if (list.includes(trigger.card.name)) return true;
                                    return false;
                                });
                                if (!player.hasSkill('ua_zhanmeng_choice0') && !used) list.push('选项一');
                                else choiceList[0] = '<span style="opacity:0.5; ">' + choiceList[0] + (used ? '(同名牌被使用过)' : '(已选择)') + '</span>';
                                if (!player.hasSkill('ua_zhanmeng_choice1')) list.push('选项二');
                                else choiceList[1] = `<span style="opacity:0.5">${choiceList[1]}(已选择)</span>`;
                                if (!player.hasSkill('ua_zhanmeng_choice2')) list.push('选项三');
                                else choiceList[2] = `<span style="opacity:0.5">${choiceList[2]}(已选择)</span>`;
                                list.push('cancel2');
                                player
                                    .chooseControl(list)
                                    .set('prompt', get.prompt('ua_zhanmeng'))
                                    .set('ai', () => {
                                        var choices = _status.event.controls.slice().remove('cancel2');
                                        var player = _status.event.player,
                                            evt = _status.event.getTrigger();
                                        if (!game.hasPlayer((current) => get.attitude(player, current) < 0)) choices.remove('选项三');
                                        else if (choices.includes('选项三')) return '选项三';
                                        if (choices.includes('选项二')) {
                                            if (evt.card.name == 'sha') return '选项二';
                                            if (get.type(evt.card, null, false) == 'equip') choices.remove('选项二');
                                        }
                                        if (!choices.length) return 'cancel2';
                                        return choices.randomGet();
                                    })
                                    .set('choiceList', choiceList);
                                ('step 1');
                                if (result.control == 'cancel2') {
                                    event.finish();
                                    return;
                                }
                                if (result.control == '选项一') {
                                    game.log(player, '选择了', '#y' + result.control);
                                    player.addTempSkill('ua_zhanmeng_choice0');
                                    var card = get.cardPile2((card) => {
                                        return !get.tag(card, 'damage');
                                    });
                                    if (card) player.gain(card, 'gain2');
                                    event.finish();
                                } else if (result.control == '选项二') {
                                    game.log(player, '选择了', '#y' + result.control);
                                    player.addTempSkill('ua_zhanmeng_choice1');
                                    trigger['ua_zhanmeng_' + player.playerid] = true;
                                    player.addSkill('ua_zhanmeng_delay');
                                    event.finish();
                                } else {
                                    player.addTempSkill('ua_zhanmeng_choice2');
                                    player.chooseTarget('占梦:令一名其他角色弃置两张牌', lib.filter.notMe, true).set('ai', (target) => {
                                        var player = _status.event.player;
                                        var eff1 = get.effect(target, { name: 'guohe_copy2' }, player, player) + 0.1;
                                        var eff2 = get.damageEffect(target, player, player, 'fire') + 0.1;
                                        if (eff1 < 0 && eff2 < 0) return -eff1 * eff2;
                                        return eff1 * eff2;
                                    });
                                }
                                ('step 2');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    game.log(player, '选择了', '#y选项三');
                                    target.chooseToDiscard(2, 'he', true);
                                } else event.finish();
                                ('step 3');
                                if (result.bool) {
                                    var cards = result.cards;
                                    var num = 0;
                                    for (var card of cards) {
                                        num += card.number;
                                    }
                                    if (num > 10) {
                                        player.line(target, 'fire');
                                        target.damage('fire');
                                    }
                                }
                            },
                            ai: {
                                threaten: 8,
                            },
                            subSkill: {
                                delay: {
                                    trigger: {
                                        global: ['useCardAfter', 'phaseBeginStart'],
                                    },
                                    charlotte: true,
                                    forced: true,
                                    popup: false,
                                    filter(event, player, name) {
                                        var history = player.actionHistory;
                                        if (history.length < 2) return false;
                                        var list = history[history.length - 2].useCard;
                                        if (name == 'phaseBeginStart') {
                                            return !list.some((evt) => evt['ua_zhanmeng_' + player.playerid]);
                                        }
                                        for (var evt of list) {
                                            if (
                                                evt['ua_zhanmeng_' + player.playerid] &&
                                                event.card.name == evt.card.name &&
                                                game
                                                    .getGlobalHistory('useCard', (evtx) => {
                                                        return evtx.card.name == event.card.name;
                                                    })
                                                    .indexOf(event) == 0
                                            )
                                                return true;
                                        }
                                        return false;
                                    },
                                    content() {
                                        if (event.triggername != 'phaseBeginStart') {
                                            var card = get.cardPile2((card) => {
                                                return get.tag(card, 'damage');
                                            });
                                            if (card) player.gain(card, 'gain2');
                                        } else player.removeSkill('ua_zhanmeng_delay');
                                    },
                                },
                                choice0: {
                                    charlotte: true,
                                },
                                choice1: {
                                    charlotte: true,
                                },
                                choice2: {
                                    charlotte: true,
                                },
                            },
                        },
                        //陈琳
                        ua_bifa: {
                            enable: 'phaseUse',
                            audio: 'ext:独爱/audio:2',
                            filter(event, player) {
                                if (player.hasSkill('ua_bifa_b')) return false;
                                return player.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseCardTarget({
                                    filterCard: true,
                                    position: 'he',
                                    filterTarget(card, player, target) {
                                        return player != target && !target.getExpansions('ua_bifa2').length;
                                    },
                                    prompt: '将1张牌扣置在一名没有<檄>的其他角色区域,此牌称为<檄>.',
                                });
                                ('step 1');
                                if (result.bool) {
                                    event.forceDie = true;
                                    var target = result.targets[0];
                                    event.target = target;
                                    event.card = result.cards[0];
                                    target.storage.ua_bifa2_source = player;
                                    target.storage.ua_bifa2 = [result.cards[0], player];
                                    if (!_status.connectMode && player.isUnderControl(true)) player.$giveAuto(result.cards[0], target, false);
                                    else player.$give(1, target, false);
                                    target.addToExpansion(result.cards[0]).gaintag.add('ua_bifa2');
                                } else event.finish();
                                ('step 2');
                                if (target.getExpansions('ua_bifa2').includes(card)) {
                                    target.addSkill('ua_bifa2');
                                } else delete target.storage.ua_bifa2;
                            },
                        },
                        ua_bifa2: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            charlotte: true,
                            filter(event, player) {
                                return player.storage.ua_bifa2 && player.getExpansions('ua_bifa2').includes(player.storage.ua_bifa2[0]);
                            },
                            content() {
                                'step 0';
                                let cl = player.storage.ua_bifa2_source;
                                if (player.storage.ua_bifa2[1].isAlive() && player.countCards('h')) {
                                    player
                                        .chooseCard('你的<檄>为:', function (card) {
                                            return get.type(card, 'trick') == _status.event.type;
                                        })
                                        .set('ai', function (card) {
                                            return 8 - get.value(card);
                                        })
                                        .set('type', get.type(player.storage.ua_bifa2[0], 'trick'))
                                        .set('promptx', [[player.storage.ua_bifa2[0]], `请交给${get.translation(cl)}一张与此牌类别相同的手牌,本局游戏${get.translation(cl)}可对你发动<b><颂词></b>的次数+1,否则你失去1点体力,令${get.translation(cl)}下个回合不能发动<b><笔伐></b>`]);
                                } else {
                                    event.directfalse = true;
                                }
                                ('step 1');
                                if (result.bool && !event.directfalse) {
                                    player.give(result.cards, player.storage.ua_bifa2[1]);
                                    player.storage.ua_songci++;
                                } else {
                                    player.loseHp();
                                    for (var i of game.players) {
                                        if (i.hasSkill('ua_bifa')) i.addSkill('ua_bifa_b');
                                    }
                                }
                                ('step 2');
                                player.removeSkill('ua_bifa2');
                            },
                            marktext: '檄',
                            intro: {
                                markcount: () => 1,
                                name: '笔伐',
                                content: '你要被讨伐了!',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                                delete player.storage[skill];
                                delete player.storage.ua_bifa2_source;
                            },
                        },
                        ua_bifa_b: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            content() {
                                player.removeSkill('ua_bifa_b');
                            },
                            forced: true,
                            mark: true,
                            marktext: '禁',
                            intro: {
                                name: '笔伐',
                                content: '你下回合不能发动<b><笔伐></b>',
                            },
                        },
                        ua_songci: {
                            audio: 'ext:独爱/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current.storage.ua_songci > 0;
                                });
                            },
                            init(player) {
                                player.markSkill('ua_songci');
                                for (var i of game.players) i.storage.ua_songci = 1;
                            },
                            filterTarget(card, player, target) {
                                return target.storage.ua_songci > 0;
                            },
                            content() {
                                'step 0';
                                target.storage.ua_songci--;
                                if (!target.storage.ua_bifa2) {
                                    if (target.countCards('h') > target.hp) {
                                        target.chooseToDiscard(2, 'he', true);
                                        event.finish();
                                    } else {
                                        target.draw(2);
                                        event.finish();
                                    }
                                } else {
                                    player.chooseControl('摸牌', '弃牌');
                                }
                                ('step 1');
                                if (result.index == 0) target.draw(2);
                                else target.chooseToDiscard(2, 'he', true);
                            },
                            intro: {
                                content(storage, player) {
                                    let str = '<b><笔伐></b>可发动次数如下:<br/>';
                                    for (var i of game.players) {
                                        str += get.translation(i);
                                        str += `,${i.storage.ua_songci}次<br/>`;
                                    }
                                    return str;
                                },
                            },
                        },
                        ua_dunxi: {
                            audio: 'ext:独爱/audio:2',
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!get.tag(event.card, 'damage')) return false;
                                for (var i of event.targets) {
                                    if (i != player && i.isIn()) return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                var targets = trigger.targets.filter(function (current) {
                                    return current != player && current.isIn();
                                });
                                if (targets.length == 1) {
                                    event.target = targets[0];
                                    player
                                        .chooseBool(get.prompt('ua_dunxi', event.target), `令${get.translation(event.target)}获得一枚<钝>标记`)
                                        .set('goon', get.attitude(player, event.target) < 0)
                                        .set('ai', () => _status.event.goon);
                                } else {
                                    player
                                        .chooseTarget(get.prompt('ua_dunxi'), '选择一名目标角色获得一枚<钝>标记', function (card, player, target) {
                                            return target != player && _status.event.getTrigger().targets.includes(target);
                                        })
                                        .set('ai', function (target) {
                                            var att = get.attitude(_status.event.player, target);
                                            if (att >= 0) return 0;
                                            return -att / (1 + target.hasMark('ua_dunxi'));
                                        });
                                }
                                ('step 1');
                                if (result.bool) {
                                    var target = event.target || result.targets[0];
                                    target.addMark('ua_dunxi', 1);
                                }
                            },
                            intro: {
                                content: 'mark',
                                name2: '钝',
                            },
                            group: 'ua_dunxi_random',
                            subSkill: {
                                random: {
                                    audio: 'ua_dunxi',
                                    trigger: {
                                        global: 'useCardToPlayer',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!event.player.hasMark('ua_dunxi') || event.targets.length != 1 || event.parent._ua_dunxi) return false;
                                        var type = get.type2(event.card, false);
                                        return type == 'basic' || type == 'trick';
                                    },
                                    logTarget: 'player',
                                    line: 'fire',
                                    content() {
                                        'step 0';
                                        trigger.parent._ua_dunxi = true;
                                        trigger.player.removeMark('ua_dunxi', 1);
                                        var target = trigger.target;
                                        event.target = target;
                                        trigger.targets.remove(target);
                                        trigger.parent.triggeredTargets1.remove(target);
                                        trigger.untrigger();
                                        ('step 1');
                                        var list;
                                        if (get.type(event.card) != 'delay')
                                            list = game.filterPlayer(function (current) {
                                                return lib.filter.targetEnabled2(trigger.card, trigger.player, current);
                                            });
                                        else
                                            list = game.filterPlayer(function (current) {
                                                return current.canAddJudge(event.card);
                                            });
                                        if (list.length) target = list.randomGet();
                                        trigger.targets.push(target);
                                        trigger.player.line(target, 'fire');
                                        game.log(trigger.card, '的目标被改为', target);
                                        if (target == event.target) {
                                            trigger.player.loseHp();
                                            var evt = trigger.getParent('phaseUse');
                                            if (evt && evt.player == trigger.player) evt.skipped = true;
                                        }
                                    },
                                },
                            },
                        },
                        ua_sheyi: {
                            audio: 'ext:独爱/audio:2',
                            trigger: {
                                global: 'damageBegin4',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.hasSkill('ua_sheyi2') && player != event.player && event.player.hp <= player.hp && player.countCards('he') >= Math.max(1, player.hp);
                            },
                            content() {
                                'step 0';
                                var num = Math.max(1, player.hp),
                                    target = trigger.player;
                                player
                                    .chooseCard('he', get.prompt('ua_sheyi', target), `交给其至少${get.cnNumber(num)}张牌,防止即将受到的伤害(${trigger.num}点)`, [num, player.countCards('he')])
                                    .set(
                                        'goon',
                                        (function () {
                                            if (get.attitude(player, target) < 0) return false;
                                            if (trigger.num < target.hp && get.damageEffect(target, trigger.source, player, trigger.nature) >= 0) return false;
                                            if (trigger.num < 2 && target.hp > trigger.num) return 6 / Math.sqrt(num);
                                            if (target == get.zhu(player)) return 9;
                                            return 8 / Math.sqrt(num);
                                        })()
                                    )
                                    .set('ai', function (card) {
                                        if (ui.selected.cards.length >= Math.max(1, _status.event.player.hp)) return 0;
                                        if (typeof _status.event.goon == 'number') return _status.event.goon - get.value(card);
                                        return 0;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = trigger.player;
                                    player.addTempSkill('ua_sheyi2', 'roundStart');
                                    player.give(result.cards, target);
                                    trigger.cancel();
                                }
                            },
                        },
                        ua_tianyin: {
                            audio: 'ext:独爱/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                var list = [];
                                player.getHistory('useCard', function (evt) {
                                    list.add(get.type2(evt.card, false));
                                });
                                for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                                    if (!list.includes(get.type2(ui.cardPile.childNodes[i], false))) return true;
                                }
                                return false;
                            },
                            content() {
                                var list = [],
                                    cards = [];
                                player.getHistory('useCard', function (evt) {
                                    list.add(get.type2(evt.card, false));
                                });
                                for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                                    var type = get.type2(ui.cardPile.childNodes[i], false);
                                    if (!list.includes(type)) {
                                        list.push(type);
                                        cards.push(ui.cardPile.childNodes[i]);
                                    }
                                }
                                player.gain(cards, 'gain2');
                            },
                        },
                        //曹华
                        ua_caiyi: {
                            audio: 'ext:独爱/audio:2',
                            zhuanhuanji: true,
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            onremove(player) {
                                delete player.storage.ua_caiyi;
                                delete player.storage.ua_caiyi_info;
                            },
                            filter(event, player) {
                                if (player.storage.ua_caiyi_info) {
                                    if (player.storage.ua_caiyi_info[player.storage.ua_caiyi ? 1 : 0].length >= 4) return false;
                                }
                                return true;
                            },
                            choices: [
                                ['回复x点体力', '摸x张牌', '复原武将牌', '随机执行一个已经移除过的选项'],
                                ['受到x点伤害', '弃x张牌', '翻面并横置', '随机执行一个已经移除过的选项'],
                            ],
                            filterx: [
                                [(player) => player.isDamaged(), () => true, (player) => player.isTurnedOver() || player.isLinked(), () => true],
                                [
                                    () => true,
                                    (player) =>
                                        player.hasCard(function (card) {
                                            return lib.filter.cardDiscardable(card, player, 'ua_caiyi');
                                        }, 'he'),
                                    (player) => !player.isTurnedOver() || !player.isLinked(),
                                    () => true,
                                ],
                            ],
                            content() {
                                'step 0';
                                if (!player.storage.ua_caiyi_info) player.storage.ua_caiyi_info = [[], []];
                                var index = player.storage.ua_caiyi ? 1 : 0;
                                event.index = index;
                                var list = player.storage.ua_caiyi_info[index],
                                    choices = lib.skill.ua_caiyi.choices[index],
                                    numbers = ['①', ' ②', ' ③', ' ④'];
                                event.num = 4 - list.length;
                                var str = '令一名角色选择执行其中一项:';
                                for (var i = 0; i < 4; i++) {
                                    if (list.includes(i)) continue;
                                    if (i == 3 && !list.length) continue;
                                    str += numbers.shift();
                                    str += choices[i];
                                }
                                str += '.';
                                str = str.replace(/X/g, get.cnNumber(event.num));
                                player.chooseTarget(get.prompt('ua_caiyi') + '(当前状态:' + (index ? '阴' : '阳') + ')', str).set('ai', function (target) {
                                    var player = _status.event.player;
                                    return (player.storage.ua_caiyi ? -1 : 1) * get.attitude(player, target);
                                });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    player.changeZhuanhuanji('ua_caiyi');
                                    event.goto(event.index == 1 ? 5 : 2);
                                } else event.finish();
                                ('step 2');
                                var list = [];
                                var choiceList = [`回复${num}点体力.`, `摸${num}张牌.`, '将武将牌翻至正面且重置.', '随机执行一个已经被移除的选项.'];
                                var storage = player.storage.ua_caiyi_info[event.index];
                                for (var i = 0; i < 4; i++) {
                                    if (storage.includes(i)) {
                                        choiceList[i] = `<span style="text-decoration:line-through; opacity:0.5; ">${choiceList[i]}</span>`;
                                    } else if (!lib.skill.ua_caiyi.filterx[event.index][i](target) || (i == 3 && !storage.length)) {
                                        choiceList[i] = `<span style="opacity:0.5;">${choiceList[i]}</span>`;
                                    } else list.push('选项' + get.cnNumber(i + 1, true));
                                }
                                if (!list.length) {
                                    event.finish();
                                    return;
                                }
                                target
                                    .chooseControl(list)
                                    .set('choiceList', choiceList)
                                    .set('ai', function () {
                                        var evt = _status.event,
                                            player = evt.player;
                                        var list = evt.controls.slice(0);
                                        var gett = function (choice) {
                                            if (choice == 'cancel2') return 0.1;
                                            var max = 0,
                                                func = {
                                                    选项一(current) {
                                                        max = get.recoverEffect(current, player, player) * Math.min(evt.parent.num, player.getDamagedHp());
                                                    },
                                                    选项二(target) {
                                                        max = (get.effect(target, { name: 'wuzhong' }, player, player) / 2) * evt.parent.num;
                                                    },
                                                    选项三(target) {
                                                        if (player.isTurnedOver()) max += 25;
                                                        if (player.isLinked()) max += get.effect(player, { name: 'tiesuo' }, player, player);
                                                    },
                                                    选项四(target) {
                                                        max = 3;
                                                    },
                                                }[choice];
                                            func(player);
                                            return max;
                                        };
                                        return list.sort(function (a, b) {
                                            return gett(b) - gett(a);
                                        })[0];
                                    });
                                ('step 3');
                                var index2 = ['选项一', '选项二', '选项三', '选项四'].indexOf(result.control);
                                player.storage.ua_caiyi_info[event.index].push(index2);
                                if (index2 == 3) {
                                    var list = player.storage.ua_caiyi_info[event.index].filter(function (i) {
                                        return i != 3 && lib.skill.ua_caiyi.filterx[event.index][i](target);
                                    });
                                    if (!list.length) {
                                        event.finish();
                                        return;
                                    }
                                    index2 = list.randomGet();
                                }
                                switch (index2) {
                                    case 0:
                                        target.recover(num);
                                        break;
                                    case 1:
                                        target.draw(num);
                                        break;
                                    case 2:
                                        !target.isTurnedOver() || target.turnOver();
                                        break;
                                }
                                if (index2 != 2) event.finish();
                                ('step 4');
                                !target.isLinked() || target.link();
                                event.finish();
                                ('step 5');
                                var list = [];
                                var choiceList = [`受到${num}点伤害.`, `弃置${num}张牌.`, '将武将牌翻至背面并横置.', '随机执行一个已经被移除的选项.'];
                                var storage = player.storage.ua_caiyi_info[event.index];
                                for (var i = 0; i < 4; i++) {
                                    if (storage.includes(i)) {
                                        choiceList[i] = `<span style="text-decoration:line-through; opacity:0.5; ">${choiceList[i]}</span>`;
                                    } else if (!lib.skill.ua_caiyi.filterx[event.index][i](target) || (i == 3 && !storage.length)) {
                                        choiceList[i] = `<span style="opacity:0.5;">${choiceList[i]}</span>`;
                                    } else list.push('选项' + get.cnNumber(i + 1, true));
                                }
                                if (!list.length) {
                                    event.finish();
                                    return;
                                }
                                target
                                    .chooseControl(list)
                                    .set('choiceList', choiceList)
                                    .set('ai', function () {
                                        var evt = _status.event,
                                            player = evt.player;
                                        var list = evt.controls.slice(0);
                                        var gett = function (choice) {
                                            if (choice == 'cancel2') return 0.1;
                                            var max = 0,
                                                func = {
                                                    选项一(current) {
                                                        max = get.effect(current, { name: 'damage' }, player, player) * evt.parent.num;
                                                    },
                                                    选项二(target) {
                                                        max = get.effect(target, { name: 'guohe_copy2' }, player, player) * Math.min(player.countCards('he'), evt.parent.num);
                                                    },
                                                    选项三(target) {
                                                        if (!player.isTurnedOver()) max -= 5;
                                                        if (!player.isLinked()) max += get.effect(player, { name: 'tiesuo' }, player, player);
                                                    },
                                                    选项四(target) {
                                                        max = -3;
                                                    },
                                                }[choice];
                                            func(player);
                                            return max;
                                        };
                                        return list.sort(function (a, b) {
                                            return gett(b) - gett(a);
                                        })[0];
                                    });
                                ('step 6');
                                var index2 = ['选项一', '选项二', '选项三', '选项四'].indexOf(result.control);
                                player.storage.ua_caiyi_info[event.index].push(index2);
                                if (index2 == 3) {
                                    var list = player.storage.ua_caiyi_info[event.index].filter(function (i) {
                                        return i != 3 && lib.skill.ua_caiyi.filterx[event.index][i](target);
                                    });
                                    if (!list.length) {
                                        event.finish();
                                        return;
                                    }
                                    index2 = list.randomGet();
                                }
                                switch (index2) {
                                    case 0:
                                        target.damage(num);
                                        break;
                                    case 1:
                                        target.chooseToDiscard(num, true, 'he');
                                        break;
                                    case 2:
                                        target.isTurnedOver() || target.turnOver();
                                        break;
                                }
                                if (index2 != 2) event.finish();
                                ('step 7');
                                target.isLinked() || target.link();
                                event.finish();
                            },
                            mark: true,
                            marktext: '☯',
                            intro: {
                                content(storage) {
                                    if (storage) return '转换技,回合结束时,设x为该状态剩余选项数量,你可令一名角色选择一项执行,本技能移除选择项:<br/><b>阴</b>:①受到x点伤害 ②弃x张牌 ③翻面并横置 ④随机执行一个已移除的<b>阴</b>选项.';
                                    return '转换技,回合结束时,设x为该状态剩余选项数量,你可令一名角色选择一项执行,本技能移除选择项:<br/><b>阳</b>:①回复x点体力 ②摸x张牌 ③复原武将牌 ④随机执行一个已移除的<b>阳</b>选项.';
                                },
                            },
                        },
                        ua_guili: {
                            audio: 'ext:独爱/audio:2',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.phaseNumber == 1 && game.hasPlayer((current) => current != player);
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(lib.filter.notMe, true, '请选择【归离】的目标', lib.translate.ua_guili_info).set('ai', function (target) {
                                    return -get.threaten(target);
                                });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.line(target, 'green');
                                    game.log(player, '选择了', target);
                                    player.storage.ua_guili_insert = target;
                                    player.addSkill('ua_guili_insert');
                                }
                            },
                            subSkill: {
                                insert: {
                                    trigger: {
                                        global: 'phaseAfter',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    logTarget: 'player',
                                    filter(event, player) {
                                        if (event.player != player.storage.ua_guili_insert) return false;
                                        if (event.player.getHistory('sourceDamage').length) return false;
                                        var history = event.player.actionHistory;
                                        if (history[history.length - 1].isRound) return true;
                                        for (var i = history.length - 2; i >= 0; i--) {
                                            if (history[i].isMe) return false;
                                            if (history[i].isRound) return true;
                                        }
                                        return false;
                                    },
                                    content() {
                                        player.phase('nodelay');
                                    },
                                },
                            },
                        },
                        ua_xunzhi: {
                            audio: 'ext:独爱/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            init(player) {
                                player.storage.ua_xuzhi = 0;
                            },
                            content() {
                                'step 0';
                                event.videoId = lib.status.videoId++;
                                var func = function (player, id) {
                                    var list = ['选项一:你失去1点体力,令手牌上限+2', '选项二:你回复1点体力,令手牌上限-2'];
                                    var choiceList = ui.create.dialog('殉志:请选择一项'); //选项标题
                                    choiceList.videoId = id;
                                    for (var i = 0; i < list.length; i++) {
                                        var str = `<div class="popup text" style="width:calc(100% - 10px);display:inline-block">${list[i]}</div>`;
                                        var next = choiceList.add(str);
                                        next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                                        next.firstChild.link = i;
                                        Object.setPrototypeOf(next, lib.element.Button.prototype); //QQQ
                                        choiceList.buttons.add(next.firstChild);
                                    }
                                    return choiceList;
                                };
                                if (player.isOnline2()) {
                                    player.send(func, player, event.videoId);
                                }
                                event.dialog = func(player, event.videoId);
                                if (player != game.me || _status.auto) {
                                    event.dialog.style.display = 'none';
                                }
                                var next = player.chooseButton();
                                next.set('dialog', event.videoId);
                                next.set('forced', true);
                                next.set('selectButton', 1); //这是可以选择1～2项,有需要自己调整
                                ('step 1');
                                if (player.isOnline2()) {
                                    player.send('closeDialog', event.videoId);
                                }
                                event.dialog.close();
                                //后面用result.links接收选择的是哪几项
                                //比如这样:
                                if (result.links.includes(0)) {
                                    player.loseHp();
                                    player.storage.ua_xuzhi += 2; //还是对应选项下标(从0开始)
                                }
                                if (result.links.includes(1)) {
                                    player.recover();
                                    player.storage.ua_xuzhi -= 2;
                                }
                            },
                            mark: true,
                            intro: {
                                content(storage, player) {
                                    return '手牌上限+' + player.storage.ua_xuzhi;
                                },
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    if (typeof player.storage.ua_xuzhi == 'number') {
                                        return num + player.storage.ua_xuzhi;
                                    }
                                },
                            },
                        },
                        ua_yawang: {
                            audio: 'ext:独爱/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin1',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            content() {
                                player.markSkill('ua_yawang');
                                trigger.changeToZero();
                                var num = game.countPlayer(function (target) {
                                    return target.hp == player.hp;
                                });
                                if (num > 0) {
                                    player.draw(2 + num);
                                }
                                player.storage.ua_yawang = num;
                                player.addTempSkill('ua_yawang2');
                            },
                            intro: {
                                content(storage, player) {
                                    return `出牌阶段,你至多可使用${player.storage.ua_yawang}张牌.`;
                                },
                            },
                        },
                        ua_yawang2: {
                            silent: true,
                            forced: true,
                            charlotte: true,
                            trigger: { player: 'phaseJieshuBefore' },
                            content() {
                                player.unmarkSkill('ua_yawang');
                            },
                            mod: {
                                cardEnabled(card, player) {
                                    if (_status.currentPhase != player) return;
                                    if (player.countUsed() >= player.storage.ua_yawang) return false;
                                },
                                cardSavable(card, player) {
                                    if (_status.currentPhase != player) return;
                                    if (player.countUsed() >= player.storage.ua_yawang) return false;
                                },
                            },
                        },
                        ua_wanggui: {
                            audio: 'wanggui',
                            trigger: {
                                source: 'damageSource',
                            },
                            forced: true,
                            usable: 1,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current.group != player.group;
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('ua_wanggui'), '对一名势力不同的其他角色造成1点伤害', function (card, player, target) {
                                        return target.group != player.group;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    target.damage();
                                } else player.getStat('triggerSkill').ua_wanggui--;
                            },
                            group: 'ua_wanggui_draw',
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget(get.prompt('ua_wanggui'), '令自己摸一张牌,或和一名势力相同的其他角色各摸一张牌', function (card, player, target) {
                                                return target.group == player.group;
                                            })
                                            .set('ai', function (target) {
                                                var player = _status.event.player,
                                                    att = get.attitude(player, target);
                                                if (target != player) att *= 2;
                                                if (target.hasSkillTag('nogain')) att /= 1.7;
                                                return att;
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            var target = result.targets[0];
                                            if (player == target) {
                                                player.draw();
                                                event.finish();
                                            } else {
                                                var list = [player, target].sortBySeat();
                                                game.asyncDraw(list);
                                            }
                                        } else event.finish();
                                        ('step 2');
                                    },
                                },
                            },
                        },
                        ua_wanggui2: {},
                        ua_xibing: {
                            audio: 'ext:独爱/audio:2',
                            trigger: { global: 'useCardToPlayered' },
                            filter(event, player) {
                                if (event.targets.length != 1 || event.player.countCards('h') >= event.player.hp) return false;
                                var bool = function (card) {
                                    return (card.name == 'sha' || get.type(card, false) == 'trick') && get.color(card, false) == 'black';
                                };
                                if (!bool(event.card)) return false;
                                var evt = event.getParent('phaseUse');
                                if (evt.player != event.player) return false;
                                return (
                                    get.mode() != 'guozhan' ||
                                    event.player.getHistory('useCard', function (evtx) {
                                        return bool(evtx.card) && evtx.getParent('phaseUse') == evt;
                                    })[0] == event.parent
                                );
                            },
                            logTarget: 'player',
                            check(event, player) {
                                var target = event.player;
                                var att = get.attitude(player, target);
                                var num2 = Math.min(5, target.hp - target.countCards('h'));
                                if (num2 <= 0) return att <= 0;
                                var num = target.countCards('h', function (card) {
                                    return target.hasValueTarget(card, null, true);
                                });
                                if (!num) return att > 0;
                                return num > num2;
                            },
                            preHidden: true,
                            content() {
                                'step 0';
                                var num = Math.min(5, trigger.player.hp - trigger.player.countCards('h'));
                                if (num > 0) trigger.player.draw(num);
                                ('step 1');
                                trigger.player.addTempSkill('ua_xibing2');
                                player._ua_xibing = true;
                                if (get.mode() != 'guozhan' || player.isUnseen(2) || trigger.player.isUnseen(2)) event.finish();
                                ('step 2');
                                var target = trigger.player;
                                var players1 = [player.name1, player.name2];
                                var players2 = [target.name1, target.name2];
                                player
                                    .chooseButton(2, [`是否暗置自己和${get.translation(target)}的各一张武将牌？`, '<div class="text center">你的武将牌</div>', [players1, 'character'], `<div class="text center">${get.translation(target)}的武将牌</div>`, [players2, 'character']])
                                    .set('players', players1)
                                    .set('complexSelect', true)
                                    .set('filterButton', function (button) {
                                        return !get.is.jun(button.link) && (ui.selected.buttons.length == 0) == _status.event.players.includes(button.link);
                                    });
                                ('step 3');
                                if (result.bool) {
                                    var target = trigger.player;
                                    player.hideCharacter(player.name1 == result.links[0] ? 0 : 1);
                                    target.hideCharacter(target.name1 == result.links[1] ? 0 : 1);
                                    player.addTempSkill('ua_xibing3');
                                    target.addTempSkill('ua_xibing3');
                                }
                            },
                        },
                        ua_xibing2: {
                            mod: {
                                cardEnabled2(card) {
                                    if (get.position(card) == 'h') return false;
                                },
                            },
                        },
                        ua_xibing3: {
                            ai: { nomingzhi: true },
                        },
                        ua_fuzuan: {
                            audio: 'ext:独爱/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current.getSkills(null, false, false).filter(function (i) {
                                        var info = get.info(i);
                                        return info && info.zhuanhuanji;
                                    }).length;
                                });
                            },
                            filterTarget(card, player, target) {
                                return target.getSkills(null, false, false).filter(function (i) {
                                    var info = get.info(i);
                                    return info && info.zhuanhuanji;
                                }).length;
                            },
                            content() {
                                'step 0';
                                var list = target.getSkills(null, false, false).filter(function (i) {
                                    var info = get.info(i);
                                    return info && info.zhuanhuanji;
                                });
                                if (list.length == 1) {
                                    event._result = { control: list[0] };
                                } else
                                    player
                                        .chooseControl(list)
                                        .set('prompt', `选择变更${get.translation(target)}一个技能的状态`)
                                        .set('choice', list.includes('ua_feifu') ? 'ua_feifu' : 0)
                                        .set('ai', () => _status.event.choice);
                                ('step 1');
                                var skill = result.control;
                                target.changeZhuanhuanji(skill);
                                target.popup(skill, 'wood');
                                game.log(target, '的', `#g【${get.translation(skill)}】`, '发生了状态变更');
                            },
                            ai: {
                                order: 8,
                                result: {
                                    target(player, target) {
                                        if (!target.hasSkill('ua_feifu')) return 0;
                                        return target.storage.ua_feifu ? -1 : 1;
                                    },
                                },
                            },
                            group: 'ua_fuzuan_damage',
                            subSkill: {
                                damage: {
                                    audio: 'ua_fuzuan',
                                    trigger: {
                                        player: 'damageEnd',
                                        source: 'damageSource',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return game.hasPlayer(function (current) {
                                            return current.getSkills(null, false, false).filter(function (i) {
                                                var info = get.info(i);
                                                return info && info.zhuanhuanji;
                                            }).length;
                                        });
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseTarget(lib.skill.ua_fuzuan.filterTarget, get.prompt('ua_fuzuan'), '变更一名角色的一个转换技的状态').set('ai', function (target) {
                                            var player = _status.event.player;
                                            return get.effect(target, 'ua_fuzuan', player, player);
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            var target = result.targets[0];
                                            var next = game.createEvent('ua_fuzuan');
                                            next.player = player;
                                            next.target = target;
                                            next.setContent(lib.skill.ua_fuzuan.content);
                                        }
                                    },
                                },
                            },
                        },
                        ua_chongqi: {
                            audio: 'ext:独爱/audio:2',
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            logTarget: () => game.filterPlayer().sortBySeat(),
                            content() {
                                'step 0';
                                game.countPlayer(function (current) {
                                    current.addSkill('ua_feifu');
                                });
                                game.log(player, '令所有其他角色获得了技能', '#g【非服】');
                                ('step 1');
                                player.chooseTarget('是否减1点体力上限,并令一名其他角色获得技能【复纂】？', lib.filter.notMe).set('ai', function (target) {
                                    var player = _status.event.player;
                                    if (player.hasUnknown() && !target.isZhu) return 0;
                                    if (player.getEnemies().includes(target)) return 0;
                                    return get.attitude(player, target);
                                });
                                ('step 2');
                                if (result.bool) {
                                    player.loseMaxHp();
                                    var target = result.targets[0];
                                    player.line(target, 'fire');
                                    target.addSkillLog('ua_fuzuan');
                                }
                            },
                            derivation: 'ua_feifu',
                        },
                        ua_feifu: {
                            audio: 'ext:独爱/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                                target: 'useCardToTargeted',
                            },
                            zhuanhuanji: true,
                            forced: true,
                            mark: true,
                            marktext: '☯',
                            intro: {
                                content(storage, player) {
                                    return (storage ? '当你使用【杀】指定唯一目标后' : '当你成为【杀】的唯一目标后') + '目标角色须交给使用者一张牌.若此牌为装备牌,则使用者可使用此牌.';
                                },
                            },
                            filter(event, player, name) {
                                return event.card && event.card.name == 'sha' && event.targets.length == 1 && event.player.isIn() && event.target.countCards('he') > 0 && (name == 'useCardToPlayered') == Boolean(player.storage.ua_feifu);
                            },
                            logTarget(event, player) {
                                return player.storage.ua_feifu ? event.target : event.player;
                            },
                            content() {
                                'step 0';
                                player.changeZhuanhuanji('ua_feifu');
                                trigger.target.chooseCard('he', true, `非服:交给${get.translation(trigger.player)}一张牌`, '若选择装备牌,则其可以使用此牌');
                                ('step 1');
                                if (result.bool) {
                                    var card = result.cards[0];
                                    event.card = card;
                                    trigger.target.give(card, trigger.player);
                                } else event.finish();
                                ('step 2');
                                var target = trigger.player;
                                if (target.getCards('h').includes(card) && get.type(card, target) == 'equip' && target.hasUseTarget(card)) target.chooseUseTarget(card, 'nopopup');
                            },
                        },
                        ua_gongao: {
                            audio: 'ext:独爱/audio:2',
                            trigger: { global: 'dieAfter' },
                            forced: true,
                            content() {
                                player.draw();
                                player.gainMaxHp();
                                player.recover();
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        ua_juyi: {
                            audio: true,
                            derivation: ['ua_benghuai', 'ua_weizhong'],
                            trigger: { player: 'phaseZhunbeiBegin' },
                            filter(event, player) {
                                return player.maxHp > game.players.length && !player.storage.juyi;
                            },
                            forced: true,
                            juexingji: true,
                            content() {
                                player.draw(player.maxHp - player.countCards('h'));
                                player.addSkill('ua_benghuai');
                                player.addSkill('ua_weizhong');
                                player.storage.ua_juyi = true;
                                player.awakenSkill('ua_juyi');
                            },
                        },
                        ua_weizhong: {
                            audio: true,
                            trigger: { player: ['gainMaxHpEnd', 'loseMaxHpEnd', 'changeHp'] },
                            forced: true,
                            content() {
                                player.draw(1);
                            },
                        },
                        ua_benghuai: {
                            audio: 'ext:独爱/audio:2',
                            audioname: ['zhugedan', 're_dongzhuo', 'ol_dongzhuo'],
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            check() {
                                return false;
                            },
                            filter(event, player) {
                                return !player.isMinHp() && !player.hasSkill('rejiuchi_air') && !player.hasSkill('oljiuchi_air');
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseControl('baonue_hp', 'baonue_maxHp', function (event, player) {
                                        if (player.hp == player.maxHp) return 'baonue_hp';
                                        if (player.hp < player.maxHp - 1 || player.hp <= 2) return 'baonue_maxHp';
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
                        ua_xieshou: {
                            trigger: {
                                global: 'damageEnd',
                            },
                            usable: 1,
                            filter(event, player) {
                                return get.distance(player, event.player) <= 2 && event.player.isIn();
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) > 4;
                            },
                            logTarget: 'player',
                            change(player, num) {
                                player.addSkill('ua_xieshoux');
                                if (typeof player.storage.ua_xieshoux !== 'number') player.storage.ua_xieshoux = 0;
                                if (!num) return;
                                player.storage.ua_xieshoux += num;
                                if (player.storage.ua_xieshoux != 0) player.markSkill('ua_xieshoux');
                                else player.unmarkSkill('ua_xieshoux');
                                game.log(player, '的手牌上限', (num > 0 ? '+' : '') + num);
                            },
                            content() {
                                'step 0';
                                lib.skill.ua_xieshou.change(player, -1);
                                ('step 1');
                                var list = [],
                                    target = trigger.player;
                                event.target = target;
                                var choiceList = ['回复1点体力', '复原,摸两张牌'];
                                if (target.getDamagedHp() == 0) choiceList[0] = `<span style="opacity:0.5; ">${choiceList[0]}</span>`;
                                else list.push('选项一');
                                list.push('选项二');
                                target
                                    .chooseControl(list)
                                    .set('choiceList', choiceList)
                                    .set('prompt', get.translation(player) + '对你发动了<b><协守></b>,请选择一项');
                                ('step 2');
                                if (result.control == '选项一') {
                                    target.recover();
                                } else {
                                    target.link(false);
                                    target.draw(2);
                                }
                            },
                            ai: {
                                expose: 0.3,
                            },
                        },
                        ua_xieshoux: {
                            markimage: 'image/card/handcard.png',
                            intro: {
                                content(storage, player) {
                                    var num = player.storage.ua_xieshoux;
                                    return '手牌上限' + (num >= 0 ? '+' : '') + num;
                                },
                            },
                            charlotte: true,
                            mod: {
                                maxHandcard(player, num) {
                                    return num + (player.storage.ua_xieshoux || 0);
                                },
                            },
                        },
                        ua_qingyan: {
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                return event.player != player && get.color(event.card) == 'black';
                            },
                            usable: 2,
                            forced: true,
                            content() {
                                'step 0';
                                if (player.countCards('h') < player.hp) {
                                    player.chooseBool(get.prompt('ua_qingyan'), '将手牌摸至体力上限(摸' + get.cnNumber(player.maxHp - player.countCards('h')) + '张牌)').set('ai', () => 1);
                                } else {
                                    player
                                        .chooseToDiscard(get.prompt('ua_qingyan'), '弃置一张手牌令你的手牌上限+1')
                                        .set('ai', (card) => 6 - get.value(card))
                                }
                                ('step 1');
                                if (result.bool) {
                                    if (result.cards && result.cards.length) {
                                        lib.skill.ua_xieshou.change(player, 1);
                                    } else {
                                        player.drawTo(player.maxHp);
                                    }
                                } else player.getStat('triggerSkill').ua_qingyan--;
                            },
                        },
                        ua_qizi: {
                            mod: {
                                playerEnabled(card, player, target) {
                                    if (get.distance(player, target) > 2 && card.name == 'tao' && target == _status.event.dying) return false;
                                },
                            },
                        },
                        //陈泰
                        ua_weiyuan: {
                            trigger: { player: 'useCardToTargeted' },
                            filter(event, player) {
                                return (
                                    player != event.target &&
                                    event.targets &&
                                    event.targets.length == 1 &&
                                    event.target.isAlive() &&
                                    player.isPhaseUsing() &&
                                    !player.hasSkill('ua_weiyuan2') &&
                                    game.hasPlayer(function (current) {
                                        return current != player && current != event.target;
                                    })
                                );
                            },
                            content() {
                                'step 0';
                                // 选择一个目标
                                player
                                    .chooseTarget(get.prompt2('ua_weiyuan'), (card, player, target) => {
                                        return target != player && target != _status.event.getTrigger().target;
                                    })
                                    .set('ai', (target) => {
                                        return Math.max(Math.random(), get.attitude(player, target));
                                    });
                                ('step 1');
                                event.target = result.targets[0];
                                event.videoId = lib.status.videoId++;
                                // 创建一个选择框
                                var func = (player, id) => {
                                    var list = [`选项一:受到${get.translation(player)}造成的1点伤害`, `选项二:令${get.translation(player)}摸1张牌,此出牌阶段${get.translation(player)}可将1张牌转化为本回合使用过的1张基本牌或非延时锦囊牌使用(无次数距离限制).`];
                                    var choiceList = ui.create.dialog('雄略:请选择一至两项'); //选项标题
                                    choiceList.videoId = id;
                                    for (var i = 0; i < list.length; i++) {
                                        var str = '<div class="popup text" style="width:calc(100% - 10px);display:inline-block">' + list[i] + '</div>';
                                        var next = choiceList.add(str);
                                        next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                                        next.firstChild.link = i;
                                        Object.setPrototypeOf(next, lib.element.Button.prototype); //QQQ
                                        choiceList.buttons.add(next.firstChild);
                                    }
                                    return choiceList;
                                };
                                if (event.target.isOnline2()) {
                                    event.target.send(func, player, event.videoId);
                                }
                                event.dialog = func(player, event.videoId);
                                var next = event.target.chooseButton();
                                next.set('dialog', event.videoId);
                                next.set('forced', true);
                                next.set('ai', (button) => {
                                    if (button.link == 0) return 1; //button.link对应第button.link+1个选项,return返回一个数值,值<=0不选,值大于0选较大的那几项
                                });
                                next.set('selectButton', [1]); //这是可以选择1～2项,有需要自己调整
                                ('step 2');
                                if (event.target.isOnline2()) {
                                    event.target.send('closeDialog', event.videoId);
                                }
                                event.dialog.close();
                                if (result.links.includes(0)) {
                                    //还是对应选项下标(从0开始)
                                    player.addTempSkill('ua_weiyuan2', 'phaseUseAfter');
                                    event.target.damage();
                                }
                                if (result.links.includes(1)) {
                                    player.addTempSkill('ua_weiyuan2', 'phaseUseAfter');
                                    player.draw();
                                    player.addTempSkill('ua_weiyuan_use');
                                }
                            },
                        },
                        ua_weiyuan2: { charlotte: true },
                        ua_weiyuan_use_backup: {},
                        ua_weiyuan_use: {
                            enable: 'phaseUse',
                            charlotte: true,
                            mod: {
                                cardUsable() {
                                    if (_status.event.skill == 'ua_weiyuan_use_backup') return Infinity;
                                },
                                targetInRange() {
                                    if (_status.event.skill == 'ua_weiyuan_use_backup') return true;
                                },
                            },
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
                                event.set('ua_weiyuan_list', list);
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0 && event.ua_weiyuan_list && event.ua_weiyuan_list.length;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    return ui.create.dialog('围援', [
                                        event.ua_weiyuan_list.map(function (i) {
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
                                        position: 'he',
                                        filterCard: true,
                                        ai1(card) {
                                            return 7 - get.value(card);
                                        },
                                        viewAs: {
                                            name: links[0][2],
                                            nature: links[0][3],
                                        },
                                        onuse(links, player) {
                                            player.removeSkill('ua_weiyuan_use');
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张牌当做' + get.translation(links[0][3] || '') + get.translation(links[0][2]) + '使用';
                                },
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        ua_juxian: {
                            trigger: { player: 'damageBegin2' },
                            filter(event, player) {
                                return !player.hasSkill('ua_juxian2');
                            },
                            check(event, player) {
                                if (player.countCards('h') + 2 >= player.maxHp) return !event.source || !event.source.countCards('he') || get.attitude(player, event.source) > 0;
                                return true;
                            },
                            content() {
                                'step 0';
                                player.addSkill('ua_juxian2');
                                player.draw(2);
                                ('step 1');
                                var target = trigger.source;
                                player.chooseControl('①防止此伤害', '②弃置伤害来源2张牌');
                                ('step 2');
                                if (result.bool) {
                                    if (result.index == 0) trigger.cancel();
                                    if (result.index == 1) {
                                        player.line(target, 'green');
                                        player.discardPlayerCard(target, 2, true, 'he');
                                    }
                                }
                            },
                        },
                        ua_juxian2: {
                            trigger: { player: 'phaseDrawBefore' },
                            forced: true,
                            charlotte: true,
                            content() {
                                player.removeSkill('ua_juxian2');
                                trigger.cancel();
                                game.log(player, '跳过了', '#y摸牌阶段');
                            },
                        },
                        ua_kanpo: {
                            audio: 'ext:独爱/audio:2',
                            trigger: { source: 'damageSource' },
                            filter(event, player) {
                                return event.parent.type == 'card' && event.card && event.card.name == 'sha' && event.player.countCards('he') > 0;
                            },
                            logTarget: 'player',
                            content() {
                                var suit = trigger.card.suit;
                                var next = player.gainPlayerCard(trigger.player, 'h', 'visible');
                                next.set('suit', suit);
                                next.set('filterButton', function (button) {
                                    var evt = _status.event;
                                    return button.link.suit == evt.suit;
                                });
                            },
                            group: 'ua_kanpo_sha',
                            subSkill: {
                                sha: {
                                    enable: 'chooseToUse',
                                    usable: 1,
                                    viewAs: { name: 'sha' },
                                    viewAsFilter(player) {
                                        return player.countCards('hs') > 0;
                                    },
                                    filterCard: true,
                                    position: 'hs',
                                    prompt: '将一张手牌当做【杀】使用',
                                    check(card) {
                                        return 6 - get.value(card);
                                    },
                                    ai: {
                                        respondSha: true,
                                        skillTagFilter(player) {
                                            if (player.getStat('skill').ua_kanpo_sha) return false;
                                            if (!player.countCards('hs')) return false;
                                        },
                                    },
                                },
                            },
                        },
                        ua_gengzhan: {
                            audio: 'ext:独爱/audio:2',
                            trigger: {
                                global: ['loseAfter', 'loseAsyncAfter'],
                            },
                            usable: 1,
                            filter(event, player) {
                                if (event.type != 'discard' || event.getlx === false || player == _status.currentPhase || !event.isPhaseUsing()) return false;
                                for (var card of event.cards) {
                                    if (get.position(card, true) == 'd' && get.name(card, event.hs && event.hs.includes(card) ? event.player : false) == 'sha') return true;
                                }
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var cards = trigger.cards.filter(function (card) {
                                    return get.position(card, true) == 'd' && get.name(card, trigger.hs && trigger.hs.includes(card) ? trigger.player : false) == 'sha';
                                });
                                player.chooseButton(['是否发动<b><更战></b>获得一张杀？', cards]).set('ai', function (button) {
                                    return get.value(button.link, _status.event.player);
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.gain(result.links, 'gain2');
                                } else player.getStat('triggerSkill').ua_gengzhan--;
                            },
                            group: 'ua_gengzhan_add',
                            subSkill: {
                                add: {
                                    audio: 'ua_gengzhan',
                                    trigger: { global: 'phaseJieshuBegin' },
                                    forced: true,
                                    filter(event, player) {
                                        return (
                                            player != event.player &&
                                            !event.player.hasHistory('useCard', function (evt) {
                                                return evt.card.name == 'sha';
                                            })
                                        );
                                    },
                                    //logTarget:'player',
                                    content() {
                                        player.addTempSkill('ua_gengzhan_effect', { player: 'phaseUseAfter' });
                                        player.addMark('ua_gengzhan_effect', 1, false);
                                    },
                                },
                                effect: {
                                    charlotte: true,
                                    mod: {
                                        cardUsable(card, player, num) {
                                            if (card.name == 'sha') return num + player.countMark('ua_gengzhan_effect');
                                        },
                                    },
                                    intro: { content: '下个出牌阶段可使用【杀】的次数+#' },
                                },
                            },
                        },
                        ua_jiebei: {
                            group: ['ua_jiebei2', 'ua_jiebei3'],
                            forced: true,
                            init(player) {
                                player.storage.ua_jiebei = 5;
                            },
                            mark: true,
                            intro: {
                                content: '戒备值:#',
                            },
                        },
                        ua_jiebei3: {
                            trigger: {
                                player: ['loseBefore', 'equipBefore', 'loseAsyncBefore'],
                                global: 'gainBefore',
                            },
                            forced: true,
                            filter(event, player, name) {
                                if (event.name == 'gain') {
                                    if (event.player != player) {
                                        var evt = event.getl(player);
                                        return evt && evt.cards2 && evt.cards2.length;
                                    } else {
                                        return false;
                                    }
                                } else {
                                    return event.getParent(2).player != player;
                                }
                            },
                            content() {
                                trigger.cancel();
                            },
                        },
                        ua_jiebei2: {
                            trigger: { player: 'judgeBefore' },
                            forced: true,
                            silent: true,
                            content() {
                                trigger.noJudgeTrigger = true;
                            },
                        },
                        ua_duoquan: {
                            enable: 'phaseUse',
                            usable: 2,
                            filter(event, player) {
                                return !player.hasSkill('ua_duoquan2');
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('ua_duoquan'), (card, player, target) => {
                                    return target != player && target.countCards('he') > 0;
                                });
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    player.gainPlayerCard(event.target, 'he');
                                    event.target.chooseBool(`是否失去1点体力,弃2张牌,令${get.translation(player)}戒备值-1,本回合<b><夺权></b>失效,此回合结束后,你回复1点体力,摸2张牌.`);
                                }
                                ('step 2');
                                if (result.bool) {
                                    event.target.loseHp();
                                    event.target.chooseToDiscard(2, 'he', true);
                                    event.target.addTempSkill('ua_duoquan_hf');
                                    player.storage.ua_jiebei--;
                                    if (player.storage.ua_jiebei == 2 || player.storage.ua_jiebei == 1) {
                                        player.removeSkill('ua_jiebei3');
                                        player.addSkill('ua_fulin');
                                    }
                                    if (player.storage.ua_jiebei == 0) {
                                        player.removeSkill('ua_jiebei2');
                                        player.removeSkill('ua_fulin');
                                        player.addSkill('ua_jiebei4');
                                    }
                                    player.addTempSkill('ua_duoquan2');
                                }
                            },
                        },
                        ua_jiebei4: {
                            trigger: {
                                global: 'gainAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.player != player) {
                                    var evt = event.getl(player);
                                    return evt && evt.hs && evt.hs.length && event.getParent(3).name != 'ua_jiebei4';
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.chooseCard(`给${get.translation(trigger.player)}1张牌`, 'he');
                                ('step 1');
                                trigger.player.gain(result.cards);
                            },
                        },
                        ua_duoquan2: {},
                        ua_duoquan_hf: {
                            trigger: { global: 'phaseJieshuBefore' },
                            forced: true,
                            filter(event, player) {
                                return !player.hasSkill('ua_duoquan2');
                            },
                            content() {
                                player.recover();
                                player.draw(2);
                            },
                        },
                        //韩龙
                        ua_siji: {
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            mod: {
                                targetInRange(card, player, target) {
                                    if (_status.event.parent.name == 'ua_siji') return true;
                                },
                            },
                            filter(event, player) {
                                if (!Array.isArray(event.respondTo) || event.respondTo[0] == event.player || ![event.respondTo[0], event.player].includes(player)) return false;
                                return event.player == player;
                            },
                            content() {
                                'step 0';
                                if (player.countCards('h', 'sha') ? false : true) player.chooseControl('弃杀');
                                else player.chooseControl('弃杀', '出杀');
                                ('step 1');
                                if (result.index == 0) {
                                    let ua = player.countCards('h', 'sha');
                                    player.chooseToDiscard([1, ua], '弃任意张【杀】,摸两倍弃置量张牌', function (card) {
                                        return card.name == 'sha';
                                    });
                                    event.goto(3);
                                } else {
                                    player.chooseToUse(function (card) {
                                        return card.name == 'sha';
                                    }, '使用1张【杀】');
                                }
                                ('step 2');
                                if (player.hasHistory('sourceDamage', (evt) => evt.getParent(4) == event)) {
                                    player.draw(2);
                                }
                                event.finish();
                                ('step 3');
                                if (result.bool) {
                                    var num = 0;
                                    if (Array.isArray(result.cards))
                                        for (var i of result.cards) {
                                            if (i.name == 'sha') num++;
                                        }
                                    player.draw(2 * num);
                                }
                            },
                        },
                        ua_ciqiu: {
                            trigger: {
                                source: 'damageBegin1',
                            },
                            group: 'ua_ciqiu2',
                            forced: true,
                            filter(event, player) {
                                return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && event.player.isHealthy();
                            },
                            content() {
                                'step 0';
                                trigger.num *= 2;
                            },
                        },
                        ua_ciqiu2: {
                            trigger: {
                                source: 'damageBegin2',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num >= event.player.hp;
                            },
                            content() {
                                trigger.player.addTempSkill('ciqiu_dying');
                                player.removeSkill('ua_ciqiu');
                            },
                        },
                        ua_ciqiu_dying: {
                            trigger: {
                                player: 'dyingBegin',
                            },
                            forced: true,
                            silent: true,
                            firstDo: true,
                            content() {
                                player.die();
                            },
                            popup: false,
                        },
                        ua_fulin: {
                            trigger: { player: 'phaseDiscardBegin' },
                            audio: 'ext:独爱/audio:2',
                            forced: true,
                            content() {
                                player.addTempSkill('ua_fulin2', 'phaseDiscardAfter');
                            },
                            group: ['ua_fulin_count', 'ua_fulin_reset'],
                            subSkill: {
                                reset: {
                                    trigger: { player: ['phaseBefore', 'phaseAfter'] },
                                    silent: true,
                                    _priority: 10,
                                    content() {
                                        player.removeGaintag('ua_fulin');
                                    },
                                },
                                count: {
                                    trigger: { player: 'gainBegin' },
                                    audio: 'ua_fulin',
                                    forced: true,
                                    silent: true,
                                    filter(event, player) {
                                        return _status.currentPhase == player;
                                    },
                                    content() {
                                        trigger.gaintag.add('ua_fulin');
                                    },
                                },
                            },
                            onremove(player) {
                                player.removeGaintag('ua_fulin');
                            },
                        },
                        ua_fulin2: {
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (card.hasGaintag('ua_fulin')) {
                                        return true;
                                    }
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && card.hasGaintag('ua_fulin')) {
                                        return false;
                                    }
                                },
                            },
                        },
                        //郝昭
                        ua_zhengu: {
                            audio: 'ext:独爱/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('ua_zhengu'), function (card, player, target) {
                                        //if(target.storage.ua_zhengu_mark&&target.storage.ua_zhengu_mark.includes(player)) return false;
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        //if(target.storage.ua_zhengu_mark&&target.storage.ua_zhengu_mark.includes(player)) return 0;
                                        var num = Math.min(5, player.countCards('h')) - target.countCards('h');
                                        var att = get.attitude(player, target);
                                        return num * att;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.addSkill('ua_zhengu2');
                                    target.addSkill('ua_zhengu_mark');
                                    target.storage.ua_zhengu_mark.push(player);
                                    target.markSkill('ua_zhengu_mark');
                                    lib.skill.ua_zhengu.sync(player, target);
                                }
                            },
                            sync(player, target) {
                                var num = player.countCards('h');
                                var num2 = target.countCards('h');
                                if (num < num2) {
                                    target.chooseToDiscard(num2 - num, true, 'h');
                                } else target.drawTo(Math.min(5, num));
                            },
                        },
                        //张虎
                        ua_cuijian: {
                            audio: 'ext:独爱/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return game.hasPlayer((current) => lib.skill.ua_cuijian.filterTarget(null, player, current));
                            },
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                if (player.hasMark('ua_tongyuan_trick')) player.draw(2);
                                var hs = target.getCards('h', 'shan');
                                if (hs.length) {
                                    hs.addArray(
                                        target.getCards('he', function (card) {
                                            return get.subtype(card) == 'equip2';
                                        })
                                    );
                                    player.gain(hs, target, 'give', 'bySelf');
                                    if (player.hasMark('ua_tongyuan_basic')) event.finish();
                                    else event.num = hs.length;
                                }
                                ('step 1');
                                var hs = player.getCards('he');
                                if (!hs.length || !target.isIn()) event.finish();
                                else if (hs.length <= num) event._result = { bool: true, cards: hs };
                                else player.chooseCard('he', true, `选择交给${get.translation(target) + get.cnNumber(num)}张牌`, num);
                                ('step 2');
                                if (result.bool && result.cards && result.cards.length) player.give(result.cards, target);
                            },
                        },
                        tongyuan: { audio: 2 },
                        ua_tongyuan: {
                            audio: 'tongyuan',
                            trigger: { player: ['useCardAfter', 'respondAfter'] },
                            forced: true,
                            mark: true,
                            intro: {
                                content(storage, player) {
                                    let str = '';
                                    if (!player.hasMark('ua_tongyuan_trick') && !player.hasMark('ua_tongyuan_basic')) str += '未触发';
                                    if (player.hasMark('ua_tongyuan_trick')) str += '发动<b><摧坚></b>时,摸2张牌.';
                                    if (player.hasMark('ua_tongyuan_basic')) str += '发动<b><摧坚></b>无须再还牌.';
                                    if (player.hasMark('ua_tongyuan_trick') && player.hasMark('ua_tongyuan_basic')) str += '使用红色普通锦囊牌无法被响应、使用红色基本牌可额外指定一个目标.';
                                    return str;
                                },
                            },
                            filter(event, player) {
                                var type = get.type2(event.card, false);
                                return (type == 'basic' || type == 'trick') && get.color(event.card, false) == 'red' && !player.hasMark('ua_tongyuan_' + type);
                            },
                            content() {
                                var type = get.type2(trigger.card, false);
                                if (!player.hasMark('ua_tongyuan_' + type)) {
                                    player.addMark('ua_tongyuan_' + type, 1, false);
                                    //	game.log(player,'修改了技能','#g【摧坚】');
                                }
                            },
                            group: ['ua_tongyuan_basic', 'ua_tongyuan_trick'],
                            subSkill: {
                                basic: {
                                    trigger: { player: 'useCard2' },
                                    forced: true,
                                    filter(event, player) {
                                        if (!player.hasMark('ua_tongyuan_basic') || !player.hasMark('ua_tongyuan_trick')) return false;
                                        var card = event.card;
                                        if (get.color(card, false) != 'red' || get.type(card, null, true) != 'basic') return false;
                                        var info = get.info(card);
                                        if (info.allowMultiple == false) return false;
                                        if (event.targets && !info.multitarget) {
                                            if (
                                                game.hasPlayer(function (current) {
                                                    return !event.targets.includes(current) && lib.filter.targetEnabled2(card, player, current);
                                                })
                                            ) {
                                                return true;
                                            }
                                        }
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        var prompt2 = `为${get.translation(trigger.card)}增加一个目标`;
                                        player
                                            .chooseTarget(get.prompt('ua_tongyuan'), function (card, player, target) {
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
                                            event.targets = result.targets;
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        if (event.targets) {
                                            trigger.targets.addArray(event.targets);
                                        }
                                    },
                                },
                                trick: {
                                    audio: 'ua_tongyuan',
                                    trigger: { player: 'useCard' },
                                    forced: true,
                                    filter(event, player) {
                                        if (!player.hasMark('ua_tongyuan_basic') || !player.hasMark('ua_tongyuan_trick')) return false;
                                        var card = event.card;
                                        return get.color(card, false) == 'red' && get.type(card, null, false) == 'trick';
                                    },
                                    content() {
                                        trigger.directHit.addArray(game.filterPlayer());
                                        game.log(trigger.card, '不可被响应');
                                    },
                                },
                            },
                        },
                        //臧霸
                        ua_hengjiang: {
                            audio: 'hengjiang',
                            trigger: { player: 'damageEnd' },
                            group: ['ua_hengjiang_zd', 'ua_hengjiang_q', 'ua_hengjiang3'],
                            filter(event, player) {
                                return _status.currentPhase && _status.currentPhase.isIn() && event.num > 0;
                            },
                            init(player) {
                                player.storage.ua_hengjiang = 0;
                            },
                            preHidden: true,
                            //当你受到1点伤害后,设x为本回合你发动<横江>的次数,可令一名其他角色手牌上限-x直到其下个弃牌阶段结束,(1)若其下个弃牌阶段没有弃牌,你令x+1.(2)若有弃牌,你摸2张牌
                            async content(event, trigger, player) {
                                //QQQ
                                var count = trigger.num;
                                while (count-- > 0) {
                                    player.storage.ua_hengjiang++;
                                    const result = await player
                                        .chooseTarget(function (card, player, target) {
                                            return target != player;
                                        })
                                        .set('ai', (t) => -get.attitude(player, t)).forResult();
                                    if (result.targets?.length) {
                                        result.targets[0].addSkill('ua_hengjiang2');
                                        let ua = player.storage.ua_hengjiang + player.countMark('ua_hengjiang_zd');
                                        result.targets[0].addMark('ua_hengjiang2', ua);
                                    }
                                }
                            },
                        },
                        ua_hengjiang_q: {
                            trigger: { global: 'phaseEnd' },
                            silent: true,
                            forced: true,
                            filter(event, player) {
                                if (player.storage.ua_hengjiang > 0) return true;
                            },
                            content() {
                                player.storage.ua_hengjiang = 0;
                            },
                        },
                        ua_hengjiang2: {
                            mark: true,
                            marktext: '横江',
                            charlotte: true,
                            //onremove:true,
                            trigger: { player: 'phaseDiscardAfter' },
                            forced: true,
                            content() {
                                player.removeSkill('ua_hengjiang2');
                            },
                            intro: {
                                name: '横江',
                                content: '手牌上限-#',
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num - player.storage.ua_hengjiang2;
                                },
                            },
                        },
                        ua_hengjiang3: {
                            audio: 'hengjiang',
                            trigger: { global: 'phaseDiscardEnd' },
                            forced: true,
                            charlotte: true,
                            filter(event, player) {
                                if (!event.player.countMark('ua_hengjiang2')) return false;
                                return true;
                            },
                            //logTarget:'player',
                            content() {
                                if (
                                    trigger.player.hasHistory('lose', function (evt) {
                                        return evt.type == 'discard' && evt.cards2.length && evt.getParent('phaseDiscard').player == trigger.player;
                                    })
                                )
                                    player.draw(2);
                                else player.addMark('ua_hengjiang_zd', 1);
                            },
                        },
                        ua_hengjiang_zd: {
                            audio: 'hengjiang',
                            trigger: {
                                player: 'useCardToPlayer',
                            },
                            intro: {
                                name: '横江',
                                content: 'x基数改为1',
                            },
                            filter(event, player) {
                                return event.isFirstTarget && event.targets.some((target) => target != player);
                            },
                            content() {
                                player.damage('nosource', 'nocard');
                                player.draw();
                            },
                        },
                        //胡班
                        /*	ua_huiyun:{
                    audio:2,
                    group:'ua_huiyun_after',
                    enable:"chooseToUse",
                    viewAs:{
                        name:"huogong",
                        storage:{
                            ua_huiyun:true,
                        },
                    },
                    filterCard:true,
                    position:"hes",
                    onuse:function(links,player){
                        player.addTempSkill('ua_huiyun_record');
                    },
                    subSkill:{
                        "1":{
                            charlotte:true,
                            sub:true,
                        },
                        "2":{
                            charlotte:true,
                            sub:true,
                        },
                        "3":{
                            charlotte:true,
                            sub:true,
                        },
                        after:{
                            audio:"olhuiyun",
                            trigger:{
                                global:"useCardAfter",
                            },
                            filter:function(event,player){
                                return event.card && event.card.name=='huogong'&&event.card.storage&&event.card.storage.ua_huiyun&&event.targets.some(i=>i.isIn());
                            },
                            content:function(){
                                'step 0'
                                var choices=[];
                                var choiceList=[
                                    '目标使用展示的牌,重铸所有手牌,若展示牌不能使用,你摸1张牌',
                                    '目标使用1张手牌,重铸展示牌,若其没有可使用的牌,你摸1张牌',
                                    '目标和你各摸1张牌'
                                ];
                                for(var i=1;i<=3;i++){
                                    if(!player.hasSkill('ua_huiyun_'+i)) choices.push('选项'+get.cnNumber(i,true));
                                    else choiceList[i-1]=`<span style="opacity:0.5">${choiceList[i-1]}</span>`;
                                }
                                if(!choices.length) event.finish();
                                else{
                                    player.chooseControl(choices).set('choiceList',choiceList).set('prompt',`晖云:选择一项,令${get.translation(trigger.targets)}执行`).set('ai',()=>{
                                        return _status.event.choice;
                                    }).set('choice',function(){
                                        if(choices.length==1) return choices[0];
                                        var choicesx=choices.slice();
                                        if(get.attitude(player,trigger.targets[0])>0&&choices.includes('选项三')) return '选项三';
                                        choicesx.remove('选项三');
                                        return choicesx.randomGet();
                                    }());
                                }
                                'step 1'
                                if(result.control!='cancel2'){
                                    var index=['选项一','选项二','选项三'].indexOf(result.control)+1;
                                    event.index=index;
                                    game.log(player,'选择了','#y'+result.control);
                                    player.addTempSkill('ua_huiyun_'+index,'roundStart');
                                    event.targets=trigger.targets.slice(0);
                                }
                                else event.finish();
                                'step 2'
                                var target=targets.shift();
                                event.target=target;
                                if(target.isIn()){
                                    var cards=target.getCards('h',card=>card.hasGaintag('ua_huiyun_tag'));
                                    if(event.index==3){
                                        target.draw();
                                        player.draw();
                                    }
                                    else if(event.index==1&&cards.length&&target.canUse(cards,false)){                         
                                            target.chooseToUse({
                                            filterCard:function(card){
                                                if(get.itemtype(card)!='card'||!card.hasGaintag('ua_huiyun_tag')) return false;
                                                return lib.filter.filterCard.apply(this,arguments);
                                            },
                                            prompt:'使用展示牌,重铸所有手牌'
                                        },true);
                                    }
                                    else 
                                    if(event.index==2&&target.canUse((,false)){
                                        target.chooseToUse({
                                            filterCard:function(card){
                                                if(get.itemtype(card)!='card'||get.position(card)!='h'&&get.position(card)!='s') return false;
                                                return lib.filter.filterCard.apply(this,arguments);
                                            },
                                            prompt:'使用1张手牌,重铸展示牌'
                                        },true);
                                        event.goto(4);
                                    }
                                    else event.goto(6);
                                }
                                else event.goto(6);
                                'step 3'
                                if(result.bool){
                                    var hs=target.getCards('h',card=>{
                                        var mod=game.checkMod(card,player,'unchanged','cardChongzhuable',player);
                                        if(mod!='unchanged') return mod;
                                        return true;
                                    });
                                    if(hs.length){
                                        target.loseToDiscardpile(hs);
                                        target.draw(hs.length);
                                    }
                                }
                                event.goto(6);
                                'step 4'
                                if(result.bool){
                                    var hs=target.getCards('h',card=>{
                                        if(!card.hasGaintag('ua_huiyun_tag')) return false;
                                        var mod=game.checkMod(card,player,'unchanged','cardChongzhuable',player);
                                        if(mod!='unchanged') return mod;
                                        return true;
                                    });
                                    if(hs.length){
                                        target.loseToDiscardpile(hs);
                                        target.draw(hs.length);
                                    }
                                }
                                event.goto(6);
                                'step 5'
                                if(result.bool){
                                }
                                'step 6'
                                if(targets.length) event.goto(2);
                            },
                            sub:true,
                        },
                        record:{
                            trigger:{
                                global:"showCardsEnd",
                            },
                            forced:true,
                            charlotte:true,
                            popup:false,
                            firstDo:true,
                            filter:function(event,player){
                                if(event.parent.name!='huogong') return false;
                                var card=event.getParent(2).card;
                                if(card&&card.storage&&card.storage.ua_huiyun) return true;
                                return false;
                            },
                            content:function(){
                                game.broadcastAll(function(cards){
                                    cards.forEach(card=>card.addGaintag('ua_huiyun_tag'));
                                },trigger.cards);
                            },
                            sub:true,
                        },
                    },
                },*/
                    },
                    dynamicTranslate: {
                        ua_yuqi(player) {
                            var info = lib.skill.ua_yuqi.getInfo(player);
                            return `当你距离其≤<b><font color=#00FFFF>${info[0]}</font></b>的一名角色受到伤害后,你可观看牌堆顶的<b><font color=#00FFFF>${info[1]}</font></b>张牌,你将其中至多<b><font color=#00FFFF>${info[2]}</font></b>张牌给受伤角色,获得其中至多<b><font color=#00FFFF>${info[3]}</font></b>张牌,剩余的牌以原顺序放回牌堆顶.(每个阿拉伯数字最多为3)`;
                        },
                        ua_jiaozhao(player) {
                            let str = '';
                            if (player.storage.ua_danxin == 0) str += '<font color=#00FFFF>出牌阶段限一次</font>,你可展示1张手牌,<font color=#00FFFF>令你距离其最近的角色</font>声明一张基本牌或非延时锦囊牌,本回合你可将此牌转化为声明的牌使用<font color=#00FFFF>(不能对自己使用)</font>.';
                            if (player.storage.ua_danxin == 1) str += '<font color=#00FFFF>出牌阶段限一次</font>,你可展示1张手牌,声明一张基本牌或非延时锦囊牌,本回合可将此牌转化为声明的牌使用<font color=#00FFFF>(不能对自己使用)</font>.';
                            if (player.storage.ua_danxin == 2) str += '出牌阶段每类牌限声明一次,你可展示1张手牌,声明一张基本牌或非延时锦囊牌,本回合可将此牌转化为声明的牌使用.';
                            return str;
                        },
                        ua_caiyi(player) {
                            var current = player.storage.ua_caiyi,
                                list = player.storage.ua_caiyi_info || [[], []];
                            var str = '转换技,回合结束时,设x为该状态剩余选项数量,你可令一名角色选择一项执行,本技能移除选择项:';
                            var list1 = ['①回复x点体力 ', '②摸x张牌 ', '③复原武将牌 ', '④随机执行一个已移除的<b>阳</b>选项.'],
                                list2 = ['①受到x点伤害 ', '②弃x张牌 ', '③翻面并横置 ', '④随机执行一个已移除的<b>阴</b>选项.'],
                                str1 = '<br/><b>阳</b>:',
                                str2 = '<br/><b>阴</b>:';
                            for (var i = 0; i < 4; i++) {
                                var clip1 = list1[i],
                                    clip2 = list2[i];
                                if (list[0].includes(i)) clip1 = `<span style="text-decoration:line-through;">${clip1}</span>`;
                                if (list[1].includes(i)) clip2 = `<span style="text-decoration:line-through;">${clip2}</span>`;
                                str1 += clip1;
                                str2 += clip2;
                            }
                            if (current) str2 = `<span class="bluetext">${str2}</span>`;
                            else str1 = `<span class="bluetext">${str1}</span>`;
                            return str + str1 + str2;
                        },
                    },
                    translate: {
                        /*
                          ua_:"",
                            */
                        ua_caomao: '曹髦',
                        //"sy_caomao":"曹髦",
                        ua_ganning: '甘宁',
                        ua_diaochan: '貂蝉',
                        ua_weiyan: '魏延',
                        ua_liuxie: '刘协',
                        ua_zhanghe: '张郃',
                        ua_zhangfei: '张飞',
                        ua_huangzu: '黄祖',
                        ua_zhangmiao: '张邈',
                        ua_guanyu: '关羽',
                        ua_shen_taishici: '神太史慈',
                        ua_luxun: '陆逊',
                        ua_machao: '马超',
                        ua_xiahouyuan: '夏侯渊',
                        ua_zhouyu: '周瑜',
                        ua_sunqian: '孙乾',
                        ua_simayi: '司马懿',
                        ua_sunjian: '孙坚',
                        ua_bianfuren: '卞夫人',
                        ua_caoang: '曹昂',
                        ua_sunce: '孙策',
                        ua_caohong: '曹洪',
                        ua_caoren: '曹仁',
                        ua_caoxiu: '曹休',
                        ua_caozhang: '曹彰',
                        ua_sp_caiwenji: '魏蔡文姬',
                        ua_caorui: '曹叡',
                        ua_caozhi: '曹植',
                        ua_caopi: '曹丕',
                        ua_chenqun: '陈群',
                        ua_dengai: '邓艾',
                        ua_dianwei: '典韦',
                        ua_caojinyu: '曹金玉',
                        ua_caocao: '曹操',
                        ua_guohuai: '郭淮',
                        ua_guanqiujian: '毌丘俭',
                        ua_caimao: '蔡瑁张允',
                        ua_yujin: '于禁',
                        ua_guojia: '郭嘉',
                        ua_guohuanghou: '郭皇后',
                        ua_caoanmin: '曹安民',
                        ua_zhangliao: '张辽',
                        ua_chengyu: '程昱',
                        ua_caochong: '曹冲',
                        ua_caochun: '曹纯',
                        ua_caoying: '曹婴',
                        ua_caozhen: '曹真',
                        ua_xunyu: '荀彧',
                        ua_xiahoudun: '夏侯惇',
                        ua_zhangchunhua: '张春华',
                        ua_zhenji: '甄姬',
                        ua_zhonghui: '钟会',
                        ua_caiyang: '蔡阳',
                        ua_zhangchangpu: '张昌蒲',
                        ua_xinxianying: '辛宪英',
                        ua_yangxiu: '杨修',
                        ua_duji: '杜畿',
                        ua_lidian: '李典',
                        ua_xuhuang: '徐晃',
                        ua_xuchu: '许褚',
                        ua_xizhicai: '戏志才',
                        ua_wangyi: '王异',
                        ua_zhongyao: '钟繇',
                        ua_zhuling: '朱灵',
                        ua_zhouxuan: '周宣',
                        ua_chenlin: '陈琳',
                        ua_bianxi: '卞喜',
                        ua_caizhenji: '蔡贞姬',
                        ua_caohua: '曹华',
                        ua_cuiyan: '崔琰',
                        ua_huaxin: '华歆',
                        ua_caozhao: '曹肇',
                        ua_zhugedan: '诸葛诞',
                        ua_chenjiao: '陈矫',
                        ua_chentai: '陈泰',
                        ua_caoshuang: '曹爽',
                        ua_hanlong: '韩龙',
                        ua_dengzhong: '邓忠',
                        ua_haozhao: '郝昭',
                        ua_zhanghu: '张虎',
                        ua_zangba: '臧霸',
                        ua_tuxi_mark: '突袭',
                        sy_suhui: '夙慧',
                        sy_suhui2: '夙慧',
                        sy_suhui3: '夙慧',
                        ua_qixi: '奇袭',
                        qixi3: '奇袭',
                        ua_lijian: '离间',
                        ua_biyue: '闭月',
                        ua_tianming: '天命',
                        ua_mizhao: '密诏',
                        ua_qiaobian: '巧变',
                        ua_kuanggu: '狂骨',
                        ua_qimou: '奇谋',
                        ua_paoxiao: '咆哮',
                        ua_jinggong: '精弓',
                        ua_xiaojuan: '骁隽',
                        ua_mouni: '谋逆',
                        ua_zhangu: '战孤',
                        ua_zongfan: '纵反',
                        ua_wusheng: '武圣',
                        ua_yijue: '义绝',
                        ua_yijue2: '义绝',
                        ua_powei: '破围',
                        ua_dulie: '笃烈',
                        ua_tiandan: '天胆',
                        ua_shenzhu: '神著',
                        ua_qianxun: '谦逊',
                        ua_qianxun2: '连营',
                        ua_lianying: '连营',
                        ua_tieqi: '铁骑',
                        ua_shensu: '神速',
                        ua_yingzi: '英姿',
                        ua_fanjian: '反间',
                        ua_qianya: '谦雅',
                        ua_shuimeng: '说盟',
                        ua_guicai: '鬼才',
                        ua_fankui: '反馈',
                        ua_yinghun: '英魂',
                        ua_fuwei: '扶危',
                        ua_yuejian: '约俭',
                        ua_kangkai: '慷忾',
                        ua_kangkai2: '慷忾',
                        ua_kangkai2_ban: '慷忾',
                        ua_jiang: '激昂',
                        ua_hunzi: '魂姿',
                        ua_zhiba: '制霸',
                        ua_zhiba2: '制霸',
                        ua_yuanhu: '援护',
                        ua_yuanhu_end: '援护',
                        ua_kuiwei: '溃围',
                        ua_kuiwei2: '溃围',
                        ua_qianju: '千驹',
                        ua_qingxi: '倾袭',
                        ua_jiangchi: '将驰',
                        ua_mozhi: '默识',
                        ua_chenqing: '陈情',
                        ua_huituo: '恢拓',
                        ua_huituo2: '恢拓',
                        ua_mingjian: '明鉴',
                        ua_xingshuai: '兴衰',
                        ua_luoying: '落英',
                        ua_jiushi: '酒诗',
                        ua_xingshang: '行殇',
                        ua_fangzhu: '放逐',
                        ua_songwei: '颂威',
                        ua_pindi: '品第',
                        ua_faen: '法恩',
                        ua_jixi: '急袭',
                        ua_zaoxian: '凿险',
                        ua_tuntian: '屯田',
                        ua_qiangxi: '强袭',
                        ua_yuqi: '隅泣',
                        ua_xianjing_end: '娴静',
                        ua_xianjing: '娴静',
                        ua_xionglue: '雄略',
                        ua_hujia: '护驾',
                        ua_jingce: '精策',
                        ua_zhengrong: '征荣',
                        ua_hongju: '鸿举',
                        ua_qingce: '清侧',
                        ua_lianzhou: '连舟',
                        ua_jinglian: '惊澜',
                        ua_zhenjun: '镇军',
                        ua_chouyun: '筹运',
                        ua_yiji: '遗计',
                        ua_yiji_tag: '已分配',
                        ua_yingshi_tag: '已选择',
                        ua_jiaozhao: '矫诏',
                        ua_danxin: '殚心',
                        ua_xianwei: '险卫',
                        ua_qianlong: '潜龙',
                        ua_fensi: '忿肆',
                        ua_juetao: '决讨',
                        ua_zhushi: '助势',
                        ua_tuxi: '突袭',
                        ua_zhengbing: '整兵',
                        ua_chengxiang: '称象',
                        ua_renxin: '仁心',
                        ua_shefu: '设伏',
                        ua_benyu: '贲育',
                        ua_shanjia: '缮甲',
                        ua_lingren: '凌人',
                        ua_fujian: '伏间',
                        ua_sidi: '司敌',
                        ua_sidi2: '司敌',
                        ua_sidi3: '司敌•弱化',
                        ua_sidi4: '司敌•无效',
                        ua_quhu: '驱虎',
                        ua_jieming: '节命',
                        ua_ganglie: '刚烈',
                        ua_fenyong: '愤勇',
                        ua_jueqing: '绝情',
                        ua_jueqing2: '伤害翻倍',
                        ua_shangshi: '伤逝',
                        ua_luoshen: '洛神',
                        ua_qingguo: '倾国',
                        ua_quanji: '权计',
                        ua_paiyi: '排异',
                        ua_paiyi_backup: '排异',
                        ua_xunji: '寻嫉',
                        ua_xunji_loseHp: '寻嫉',
                        ua_jiaofeng: '交锋',
                        ua_yanjiao: '严教',
                        ua_xingshen: '省身',
                        ua_zili: '自立',
                        ua_zhongjian: '忠鉴',
                        ua_caishi: '才识',
                        ua_danlao: '啖酪',
                        ua_jilei: '鸡肋',
                        ua_andong: '安东',
                        ua_yingshi: '应势',
                        ua_xunxun: '恂恂',
                        ua_wangxi: '忘隙',
                        ua_duanliang: '断粮',
                        ua_luoyi: '裸衣',
                        ua_tiandu: '天妒',
                        ua_chouce: '筹策',
                        ua_xianfu: '先辅',
                        ua_zhenlie: '贞烈',
                        ua_miji: '秘计',
                        ua_zuoding: '佐定',
                        ua_huomo: '活墨',
                        ua_zhanyi: '战意',
                        ua_zhanyi_basic: '战意',
                        ua_zhanyi_equip: '战意',
                        ua_wumei: '寤寐',
                        ua_zhanmeng: '占梦',
                        ua_bifa: '笔伐',
                        ua_songci: '颂词',
                        ua_dunxi: '钝袭',
                        ua_tianyin: '天音',
                        ua_sheyi: '舍裔',
                        ua_caiyi: '彩翼',
                        ua_guili: '归离',
                        ua_xunzhi: '殉志',
                        ua_yawang: '雅望',
                        ua_wanggui: '望归',
                        ua_xibing: '息兵',
                        ua_fuzuan: '复纂',
                        ua_chongqi: '宠齐',
                        ua_feifu: '非服',
                        ua_gongao: '功獒',
                        ua_juyi: '举义',
                        ua_benghuai: '崩坏',
                        ua_weizhong: '威重',
                        ua_xieshou: '协守',
                        ua_qingyan: '清严',
                        ua_qizi: '弃子',
                        ua_weiyuan: '围援',
                        ua_juxian: '据险',
                        ua_jiebei: '戒备',
                        ua_jiebei2: '戒备',
                        ua_jiebei3: '戒备',
                        ua_jiebei4: '戒备',
                        ua_duoquan: '夺权',
                        ua_siji: '伺机',
                        ua_ciqiu: '刺酋',
                        ua_fulin: '腹鳞',
                        ua_fulin2: '腹鳞',
                        ua_kanpo: '勘破',
                        ua_gengzhan: '更战',
                        ua_zhengu: '镇骨',
                        ua_cuijian: '摧坚',
                        ua_tongyuan: '同援',
                        ua_hengjiang: '横江',
                        ua_hengjiang_zd: '横江',
                        ua_hengjiang_info: '一. 当你受到1点伤害后,设x为本回合你发动<b><横江></b>的次数,可令一名其他角色手牌上限-x直到其下个弃牌阶段结束,(1)若其下个弃牌阶段没有弃牌,你令x+1.(2)若有弃牌,你摸2张牌.<br/>二. 当你使用牌指定其他角色为目标时,你可受到1点无来源伤害,摸1张牌.',
                        ua_cuijian_info: '出牌阶段限一次,你可选择一名有手牌的角色,若其手牌中有【闪】,其将其所有【闪】和防具牌给你,你给其等量张牌.',
                        ua_tongyuan_info: '锁定技,一. 当你使用红色锦囊牌后,本局游戏发动<b><摧坚></b>时,摸2张牌.<br/>二. 当你使用或打出红色基本牌后,本局游戏发动<b><摧坚></b>无须再还牌.<br/>三. 若以上两个分支都已触发,本局游戏你使用红色普通锦囊牌无法被响应、使用红色基本牌可额外指定一个目标.',
                        ua_zhengu_info: '回合结束时,你可选择一名其他角色,该角色将手牌摸至或弃至与你手牌数相同(最多摸至5张),其下个回合结束时,再执行一次此效果.',
                        ua_kanpo_info: '一. 当你使用【杀】造成伤害后,可观看目标角色所有手牌,获得其中一张与此【杀】花色相同的牌.<br/>二. 每回合限一次,你可将1张手牌转化为【杀】使用.',
                        ua_gengzhan_info: '一. 其他角色的出牌阶段限一次,当有【杀】因弃置而进入弃牌堆后,你可获得这些【杀】.<br/>二. 其他角色的回合结束时,若其本回合未使用过【杀】,你下个出牌阶段可使用【杀】的次数+1',
                        ua_fulin_info: '锁定技,你在你回合内获得的牌,本回合不计入手牌上限.',
                        ua_siji_info: '当你响应其他角色牌后,你可选择一项:①弃任意张【杀】,摸两倍弃置量张牌 ②使用1张无距离限制的【杀】,若造成伤害,摸2张牌.',
                        ua_ciqiu_info: '当你使用【杀】造成伤害时,(1)若目标因此进入濒死,你令其死亡,你失去此技能.(2)若其未受伤,你令此伤害翻倍.',
                        ua_jiebei_info: '锁定技,游戏开始时,你获得5点戒备值,(1)若戒备值为5至3:你不能被动失去牌,你的判定牌不能改变.(2)若为2至1,你视为拥有<b><腹鳞></b>.(3)若为0,你失去<b><夺权></b>,一名其他角色不因此获得你的手牌后,你给其1张牌.',
                        ua_duoquan_info: '出牌阶段限两次,你可获得一名其他角色1张牌,若如此做,该角色可失去1点体力,弃2张牌,令你戒备值-1,本回合<b><夺权></b>失效,此回合结束后,其回复1点体力,摸2张牌.',
                        ua_weiyuan_info: '出牌阶段限一次,当你使用牌指定唯一目标后,你可令一名除目标外的其他角色选择一项:①受到你造成1点伤害 ②令你摸1张牌,此出牌阶段你可将1张牌转化为本回合使用过的1张基本牌或非延时锦囊牌使用(无次数距离限制).',
                        ua_juxian_info: '当你受到伤害时,你可摸2张牌,跳过下个摸牌阶段,你选择一项:①防止此伤害 ②弃置伤害来源2张牌.直到在你下个摸牌阶段前不能再次发动<b><据险></b>.',
                        ua_xieshou_info: '每回合限一次,当一名角色受到伤害后,若你距离其≤2,可令你手牌上限-1,其选择一项:①回复1点体力 ②复原武将牌并摸2张牌.',
                        ua_qingyan_info: '每回合限两次,当你成为其他角色黑色牌的目标后,若你的手牌数小于体力值,你可选择一项:①将手牌摸至体力上限 ②弃1张手牌,令你的手牌上限+1.',
                        ua_qizi_info: '锁定技,你不能对你距离其>2且处于濒死的其他角色使用【桃】.',
                        ua_weizhong_info: '锁定技,当你的体力上限或体力值变化时,你摸1张牌.',
                        ua_gongao_info: '锁定技,当其他角色死亡后,你摸1张牌,加1点体力上限,回复1点体力.',
                        ua_juyi_info: '觉醒技,准备阶段,若你已受伤且体力上限大于全场角色数,你将手牌摸至体力上限张,获得<b><崩坏></b>、<b><威重></b>(锁定技,当你的体力上限或体力值变化时,你摸1张牌).',
                        ua_benghuai_info: '锁定技,回合结束时,若你体力值不是最小,你失去1点体力或减1点体力上限.',
                        ua_fuzuan_info: '出牌阶段限一次,或你对其他角色造成伤害后,或你受到伤害后,你可调整一名角色的一个转换技的阴阳状态:',
                        ua_chongqi_info: '锁定技,一. 所有角色视为拥有<b><非服></b>.二. 游戏开始时,你选择是否减1点体力上限,令其他一名角色获得<b><复纂></b>(<b><非服></b>:锁定技,转换技,<b>阳</b>:当你成为【杀】的唯一目标后,你给对方1张牌,若为装备牌,对方可使用之.<b>阴</b>:当你使用【杀】指定唯一目标后,对方给你一张牌,若为装备牌,你可使用之).',
                        ua_feifu_info: '锁定技,转换技,<b>阳</b>:当你成为【杀】的唯一目标后,你给对方1张牌,若为装备牌,对方可使用之.<b>阴</b>:当你使用【杀】指定唯一目标后,对方给你一张牌,若为装备牌,你可使用之.',
                        ua_wanggui_info: '一. 每回合限一次,当你造成伤害后,你可对与你势力不同的一名角色造成1点伤害.<br/>二. 当你受到伤害后,你可令与你势力相同的一名角色摸1张牌,若该角色不是你,你摸1张牌.',
                        ua_xibing_info: '每回合限一次,当一名角色于其出牌阶段内使用黑色【杀】或黑色非延时锦囊牌指定唯一目标后,你可令该角色将手牌摸至体力值(至多摸至5张),其本回合不能再使用牌.',
                        ua_yawang_info: '锁定技,设x为与你体力值相等的角色数,一. 摸牌阶段,你改为摸x张牌.<br/>二. 出牌阶段,你至多可使用x张牌.',
                        ua_xunzhi_info: '回合开始时,你可选择一项:①失去1点体力,手牌上限+2 ②回复1点体力,手牌上限-2.',
                        ua_caiyi_info: '转换技,回合结束时,设x为该状态剩余选项数量,你可令一名角色选择一项执行,本技能移除选择项:<br/><b>阳</b>:①回复x点体力 ②摸x张牌 ③复原武将牌 ④随机执行一个已移除的<b>阳</b>选项.<br/><b>阴</b>:①受到x点伤害 ②弃x张牌 ③翻面并横置 ④随机执行一个已移除的<b>阴</b>选项.',
                        ua_guili_info: '一. 锁定技,你的第一个回合开始时,你选择一名其他角色.二. 该角色每轮第一个回合结束后,若其本回合未造成伤害,你执行一个额外回合.',
                        ua_sheyi_info: '每轮限一次,当一名其他角色受到伤害时,设x为你体力值,若其体力值≤x,你可将至少x张牌给该角色,防止此伤害.',
                        ua_tianyin_info: '锁定技,回合结束时,你从牌堆获得本回合你未使用过的种类的牌各1张.',
                        ua_dunxi_info: '一. 当你使用伤害牌时,你可今其中一个目标获得1个<钝>.<br/>二. 有<钝>的角色使用基本牌或锦囊牌指定单一目标后,移去1个<钝>,将目标改为随机一名角色,若随机的目标与原本目标相同,该角色失去1点体力,结束其出牌阶段.',
                        ua_songci_info: '每名角色限一次,出牌阶段,你可选择一名角色,(1)若其无<檄>,①若其手牌数小于等于体力值,其摸2张牌.②若其手牌数大于体力值,其弃2张牌.(2)若其有<檄>,你可令其摸或弃2张牌.',
                        ua_bifa_info: '一. 出牌阶段,你可将1张牌扣置在一名没有<檄>的其他角色区域,此牌称为<檄>.<br/>二. 有<檄>的角色回合开始时,选择一项:①给你1张与<檄>类别相同的手牌,本局游戏你可对其发动<b><颂词></b>的次数+1 ②将<檄>置入弃牌堆,其失去1点体力,你下回合不能发动<b><笔伐></b>.',
                        ua_zhanmeng_info: '当你使用牌时,可选择一项(每回合每项各限一次):①上1回合内,若没有同名牌被使用,你获得一张非伤害牌 ②下1回合内,当同名牌被使用时,你获得一张伤害牌 ③令一名角色弃2张牌,若点数之和大于10,对其造成1点火焰伤害.',
                        ua_wumei_info: '每轮限1次,回合开始前,你可令一名角色执行一个额外的回合,该回合结束时,将所有存活角色的体力值调整为此额外回合开始时的数值.',
                        ua_zhanyi_info: '出牌阶段限一次,你可弃1张牌,失去1点体力,选择一项:①你的基本牌可转化为任意基本牌直到你下个回合开始,因此转化的牌基础数值+1 ②你摸2张牌,你使用牌无距离限制、你使用的锦囊牌不能被抵消直到你下个回合开始 ③每回合每类牌限一次,你使用牌指定目标后,你可弃置目标各2张牌.',
                        ua_huomo_info: '当你需要使用基本牌时,可将1张黑色非基本牌置于牌堆顶,视为使用此基本牌.',
                        ua_zuoding_info: '当其他角色于其出牌阶段内使用黑色牌指定目标后,若本阶段没有角色受到过伤害,你可以令其中一名目标角色摸1张牌.',
                        ua_miji_info: '回合开始或结束时,设x为你已损体力值(x≥1),你可进行1次判定,若结果为黑色,你观看牌堆顶x张牌,将这些牌给一名角色.',
                        ua_zhenlie_info: '当你成为其他角色牌的目标后,你可失去1点体力,令此牌对你无效,弃置此牌使用者1张牌,下次发动<b><秘计></b>时,改为直接看牌给牌(可叠加).',
                        ua_xianfu_info: '锁定技,一. 游戏开始时,你选择一名其他角色.<br/>二. 当该角色受到伤害或回复体力后,你受到等量的伤害或回复等量的体力.',
                        ua_chouce_info: '当你受到1点伤害后,可进行1次判定,(1)若判定结果为黑色,你弃置一名角色区域里的1张牌.(2)若为红色,你令一名角色摸1张牌,若该角色为你<b><先辅></b>选择的角色,改为其摸2张牌.',
                        ua_tiandu_info: '当你的判定牌生效后,你可获得之.',
                        ua_luoyi_info: '锁定技,当你使用【杀】或【决斗】造成伤害时,此伤害+1.',
                        ua_duanliang_info: '出牌阶段限一次,你可与一名其他角色进行<b>谋弈</b><i>(该角色有2个选项「突出重围」「固守城池」,你有2个选项「围城断粮」「擂鼓进军」,你们同时作出选择</i> ).<br/>(1)若你选择「围城断粮」,其选择「固守城池」,获得其2张牌,若其判定区没有【兵粮寸断】,将牌堆顶的牌转化为【兵粮寸断】对其使用.(2)若你选择「擂鼓进军」,其选择「突出重围」,你视为对其使用1张【决斗】,若造成伤害,弃置目标区域所有牌.',
                        ua_wangxi_info: '当你造成或受到1点伤害后,可摸2张牌,(1)若是你造成伤害,将1张牌给受到伤害的角色.(2)若是你受到伤害,将1张牌给伤害来源.',
                        ua_xunxun_info: '摸牌阶段开始时,你可观看牌堆顶的4张牌,将其中的2张牌置于牌堆顶,将其余的牌置于牌堆底.',
                        ua_yingshi_info: '一. 摸牌阶段结束时,你可将任意张牌扣置在任意名其他角色区域,这些牌称为<酬>.<br/>二. 当有<酬>的角色受到伤害后,伤害来源可获得1张<酬>和牌堆中所有与此<酬>花色点数均相同的牌.<br/>三. 当有<酬>的角色死亡时,你摸你体力值张牌,回满体力.',
                        ua_andong_info: '当你受到其他角色造成的伤害时,可令伤害来源选择一项:①防止此伤害,伤害来源♥️️牌不计入其本回合的手牌上限 ②你观看其手牌,获得其中的所有♥️️牌,下次发动<b><安东></b>时,改为自己选择.',
                        ua_jilei_info: '当你受到伤害后,你可声明一种牌,从牌堆中获得1张此种类的牌,令伤害来源不能使用、打出或弃置此种类的手牌,持续到其下个回合开始.',
                        ua_danlao_info: '当你成为【杀】或非延时锦囊牌的目标后,若此牌的目标数>1,你可摸1张牌,令此牌对你无效.',
                        ua_caishi_info: '摸牌阶段开始时,你可选择一项:①本回合发动<b><忠鉴></b>可多展示你和一名其他角色的各1张手牌 ②本摸牌阶段多摸2张牌.',
                        ua_zhongjian_info: '出牌阶段限一次,你可展示你的1张手牌和一名其他角色的至多3张手牌,将展示的其他角色的牌依次与展示的你的牌比对,(1)若与展示的你的牌花色有相同的,你摸1张牌.(2)若点数有相同的,你对其造成1点伤害.(3)若均不同,你弃1张牌.',
                        ua_xingshen_info: '当你受到伤害后,可摸1张牌,下一次发动<b><严教></b>亮出的牌数+2.',
                        ua_yanjiao_info: '出牌阶段限一次,你可以选择一名其他角色,从牌堆顶亮出4张牌,该角色将这些牌分成点数之和相等的两组,你与其各获得其中一组,将剩余未分组的牌置入弃牌堆,每有1张未分组的牌,你本回合手牌上限-1.',
                        ua_jiaofeng_info: '锁定技,当你造成伤害时,(1)若你已损失体力值大于0,你摸一张牌.(2)若大于1,此伤害+1.(3)若大于2,你回复1点体力.',
                        ua_xunji_info: '出牌阶段限一次,你可标记一名其他角色.当其下个回合结束时,若其于回合内造成过伤害,你视为对其使用1张【决斗】,此【决斗】对其造成伤害后,你失去等量体力.',
                        ua_quanji_info: '一,出牌阶段结束时,若你的手牌数大于体力值,或当你受到点伤害后,可摸1张牌,扣置1张手牌,此牌称为<权>.二,设×为你的<权>数,你的手牌上限+x.',
                        ua_zili_info: '觉醒技,准备阶段,若你的<权>数≥3,你减1点体力上限,回复1点体力,摸2张牌,获得<b><排异></b>(<i>出牌阶段,你可弃置1张<权>,令一名未成为过<排异>目标的角色选择一项:①由你声明另一名其他角色,其对你声明角色使用1张牌(此牌目标仅为声明角色),若造成伤害,你可对声明角色发动<b><排异></b> ②令你摸2张牌,其受到你造成的1点伤害 </i>).',
                        ua_paiyi_info: '出牌阶段,你可弃置1张<权>,选择一名未成为过<b><排异></b>目标的角色,称为b,令b选择一项:①由你声明另一名其他角色,称为a,b对a使用1张牌(此牌目标仅为a),若造成伤害,你可对a发动<b><排异></b> ②令你摸2张牌,b受到你造成的1点伤害.',
                        ua_qingguo_info: '你的黑色牌可转化为【闪】.',
                        ua_luoshen_info: '回合开始时,你可进行1次判定,获得判定牌,若判定结果和本回合上次发动的花色相同,你可重复发动此技能.',
                        ua_jueqing_info: '一. 限定技,当你造成伤害时,你可令本次伤害结算中本技能分支二失效,你失去等伤害值点体力,令此伤害翻倍.<br/>二. 锁定技,当你造成伤害时,改为令目标失去等量体力.',
                        ua_shangshi_info: '设x为你已损体力值,当你的手牌数小于x时,你可弃1张牌,可将手牌摸至x张.',
                        ua_fenyong_info: ' 一名角色的回合结束时,你可移除1枚<愤勇>,选择一项:①设x为你已损失体力值,弃当前回合角色x张牌 ②视为对一名其他角色使用1张【杀】.',
                        ua_ganglie_info: '当你受到1点伤害时,你获得1枚<愤勇>,可进行1次判定,若判定结果不为♥️️,令伤害来源选择一项:①弃2张手牌,  ②受到你造成的1点伤害.',
                        ua_jieming_info: '当你受到1点伤害后或当你死亡时,设x为目标体力上限(x≤5),你可令一名角色摸x张牌,该角色将手牌弃至x张.',
                        ua_quhu_info: '出牌阶段限一次,你可一名角色拼点,(1)若你赢,其对其攻击范围内你选择的一名角色造成1点伤害.(2)若你没赢,其对你造成1点伤害.',
                        ua_sidi_info: '一. 回合外,当你响应其他角色的牌或回合内,当其他角色响应你的牌时,你可将牌堆顶1张牌扣置,此牌称为<司敌>.<br/>二. 其他角色出牌阶段开始时,你可弃置任意张<司敌>,设x为此次弃置的<司敌>数,令该角色本阶段造成的前x次伤害-1,若x≥2,其本阶段使用的第一张牌无效.',
                        ua_fujian_info: '锁定技,回合结束时,设x为手牌数最少的角色的手牌数,你随机观看一名其他角色的x张手牌.',
                        ua_lingren_info: '出牌阶段限一次,当你使用非延时伤害牌指定其他角色为目标后,你可猜测其中一个目标有哪些类别的手牌,(1)若猜对的类数≥1,此牌对其伤害+1.(2)若猜对的类数≥2,你摸2张牌.(3)若猜对的类数≥3则>,你获得<b><雄略></b>和<b><行殇></b>持续到你下回合开始.',
                        ua_shanjia_info: '出牌阶段开始时,设x为你装备牌区进入过的牌数(1≤x≤7),你可摸x张牌,弃x张牌,每弃1张装备,你可视为使用1张【杀】.',
                        ua_benyu_info: '当你受到伤害后,可选择一项:①摸至伤害来源手牌数(最多摸至5) ②弃大于伤害来源手牌数张牌,对其造成1点伤害.',
                        ua_shefu_info: '一. 回合结束时,你可选择一个基本牌或锦囊牌,扣置1张手牌,将扣置牌命名为选择的牌的牌名,此扣置牌称为<伏兵>.<br/>二. 当其他角色使用手牌时,你可移去一张与使用牌名称相同的<伏兵>,令此牌无效,其本回合所有技能失效.',
                        ua_renxin_info: '每回合限一次,当一名其他角色受到大于等于其体力值的伤害时,你可弃1张牌,将伤害转移给你.',
                        ua_chengxiang_info: '当你受到伤害后,可亮出牌堆顶4张牌,获得其中任意张点数之和≤13的牌.',
                        ua_zhengbing_info: '一. 你获得的其他角色的牌,称为<整兵>.<br/>二. 出牌阶段,你可重铸<整兵>,若这是你最后1张<整兵>,额外摸1张牌.',
                        ua_tuxi_info: '摸牌阶段,你可少摸任意张牌,获得等量名其他角色各一张手牌,如此获得的牌不计入你的手牌上限.',
                        ua_zhushi_info: '主公技,每名其他魏势力的角色的回合限一次,当该角色回复体力时,你可令其选择是否令你摸1张牌.',
                        ua_juetao_info: '限定技,出牌阶段开始时,若你体力值为1,可选择一名角色,你依次使用牌堆底的牌,此牌只能指定你或该角色为目标,直至第一张不能使用的牌.',
                        ua_fensi_info: '锁定技,准备阶段,你对一名体力值不小于你的角色造成1点伤害,若该角色不为你,其视为对你使用一张【杀】.',
                        ua_qianlong_info: '当你受到伤害后,可亮出牌堆顶的3张牌,设x为你已损失体力值,你可获得其中至多x张牌,将剩余的牌以任意顺序置于牌堆底.',
                        ua_xianwei_info: '锁定技,一. 准备阶段,你废除一个装备栏,摸你未废除的装备栏个数张牌,令一名其他角色使用牌堆中第一张对应装备栏的装备牌,若牌堆中没有,改为摸1张牌.<br/>二. 当你所有装备栏均废除后,你加2点体力上限,你和其他角色视为在对方攻击范围内.',
                        ua_jiaozhao_info: '<b><font color=#0343df>出牌阶段限一次</font></b>,你可展示1张手牌,<b><font color=#0343df>令你距离其最近的角色</font></b>声明一张基本牌或非延时锦囊牌,本回合你可将此牌转化为声明的牌使用<b><font color=#0343df>(不能对自己使用)</font></b>.',
                        ua_danxin_info: '当你受到伤害后,你可摸1张牌,修改一次<b><矫诏></b>(第一次修改;将<令你距离其最近的角色>改为<你>.第二次修改:删去<不能指定自己为目标>,将<出牌阶段限一次>改为<出牌阶段每类牌限声明一次>).',
                        ua_yiji_info: '当你受到1点伤害后,可摸2张牌,可将任意张手牌给任意名其他角色.',
                        ua_chouyun_info: '当一名角色判定牌生效后,你可令其获得判定牌,若此牌不为锦囊牌,你受到1点无伤害来源雷电伤害.',
                        ua_zhenjun_info: '回合开始时或回合结束时,设x为目标手牌数减体力值(x≥1),你可弃置一名角色x张牌,若其中没有装备牌,你选择一项:①你弃一张牌 ②该角色摸1张牌.',
                        ua_jinglian_info: '锁定技,当你造成伤害后,(1)若你手牌数大于体力值,你弃3张手牌.(2)若等于体力值,你弃1张手牌,回复1点体力.(3)若小于体力值,你受到1点无来源火焰伤害,摸4张牌.',
                        ua_lianzhou_info: '锁定技,回合开始时,你横置你的武将牌,可横置任意名体力值等于你的其他角色.',
                        ua_qingce_info: '当你获得一名其他角色1张牌或一名其他角色展示1张牌时,你可弃置1张同花色的<荣>,对其造成1点伤害.',
                        ua_hongju_info: '觉醒技,准备阶段,若你有<荣>且有角色已死亡,你减1点体力上限,将体力回复至体力上限,获得<b><清侧></b>(<i>当你获得一名其他角色1张牌或一名其他角色展示1张牌时,你可弃置1张同花色的<荣>,对其造成1点伤害</i>).',
                        ua_zhengrong_info: '当你对其他角色造成伤害后,(1)若其手牌数大于你,(2)若其装备区内的牌数大于你,(3)若你距离其不为1,每满足一个条件,你可扣置其区域内的1张牌,此牌称为<荣>.',
                        ua_jingce_info: '一个回合结束时,若你本回合使用的牌数大于体力值,执行一个额外的出牌阶段和摸牌阶段.',
                        ua_hujia_info: '主公技,当你需要使用或打出【闪】时,可令其他魏势力角色代替你使用或打出【闪】.',
                        ua_xionglue_info: '当你造成伤害或受到伤害后,你可选择至多两项:①摸1张牌 ②获得造成伤害的牌.(1)若因造成伤害而选择②,(2)若选择了两项,(3)若一回合内第二次发动此技能,本回合此技能失效,此回合结束时,你可使用1张牌.',
                        ua_xianjing_info: '一. 回合开始时或你受到伤害后,你可令<b><隅泣></b>中一个阿拉伯数字+1.<br/>二. 回合结束时,若你本回合没有指定过其他角色,可令<b><隅泣></b>中一个阿拉伯数字+1.',
                        ua_yuqi_info: '当你距离其≤0的一名角色受到伤害后,你可观看牌堆顶前2张牌,将其中至多1张牌给受伤角色,你获得其中至多1张牌,剩余的牌以原顺序放回牌堆顶.(每个阿拉伯数字最多为3)',
                        ua_qiangxi_info: '一. 出牌阶段,你可失去1点体力,摸1张牌,对一名攻击范围内的本回合未成为此技能目标的其他角色造成1点伤害.<br/>二. 当一名其他角色受到伤害时,你可弃1张装备牌,令此伤害+1.',
                        ua_jixi_info: '你的<田>可转化为【顺手牵羊】',
                        ua_zaoxian_info: '觉醒技,回合开始时,若你<田>数大于等于3,你减1点体力上限,回复1点体力,获得<b><急袭></b>( <i> 你的<田>可转化为【顺手牵羊】 </i> ).',
                        ua_tuntian_info: '一. 回合外,当你失去牌后,或回合内,当你弃置【杀】后,可进行一次判定,若判定结果为♥️️,获得判定牌,若不为♥️️,扣置此牌,称为【田】.<br/>二. 锁定技,设x为你的【田】数,你距离其他角色-x.',
                        ua_faen_info: '当一名角色翻至正面或横置后,你可令其摸1张牌.',
                        ua_pindi_info: '出牌阶段每名角色限一次.你可弃1张与本阶段发动此技能弃置过的牌类型不同的牌,选择一名角色,设x为本阶段此技能发动次数,你选择一项:①令其摸x张牌 ②令其弃x张牌.若如此做,若其已受伤,你横置或重置.',
                        ua_songwei_info: '主公技,当其他魏势力角色的黑色判定牌生效后,该角色可令你摸1张牌.',
                        ua_fangzhu_info: '当你受到伤害后,设x为你已损体力值,你可令一名其他角色翻面,该角色摸x张牌.',
                        ua_xingshang_info: '当其他角色死亡时,你可获得其区域内的所有牌,可令x+1或-1.',
                        ua_jiushi_info: '①当你需要使用【酒】时,若你的武将牌正面朝上,可将武将牌翻面,视为使用1张【酒】.<br/>②当你受到伤害后,若你的武将牌背面朝上,可将武将牌翻面.<br/>③当你使用【酒】后,出牌阶段使用【杀】次数+1,持续到你的回合结束.',
                        ua_luoying_info: '一. 当其他角色的♣️️判定牌进入弃牌堆时,你可获得之.<br/>二. 当其他角色的♣️️牌被弃置后,你可获得之.',
                        ua_xingshuai_info: '主公技,限定技,当你进入濒死时,你可令其他魏势力角色依次选择一项:①令你回复1点体力.②此次濒死结算结束后受到1点伤害.',
                        ua_mingjian_info: '出牌阶段限一次,你可将所有手牌交给一名其他角色,该角色的下个回合获得以下效果:手牌上限+1,出牌阶段使用【杀】的次数上限+1.',
                        ua_huituo_info: '当你受到伤害后,可进行一次判定,(1)若结果为红色,令一名角色回复1点体力.(2)若为黑色,令一名角色摸2张牌.',
                        ua_chenqing_info: '每轮限一次,当一名角色进入濒死时,你可令另一名角色摸4张牌,弃4张牌.若其以此法弃置的四张牌花色各不相同,令该濒死角色回复至1点体力.',
                        ua_mozhi_info: '回合结束时,你可将1张手牌转化为你本回合出牌阶段内使用的第一张基本牌或普通锦囊牌使用.若如此做,你可将1张手牌当做你本回合出牌阶段内使用的第二张基本牌或普通锦囊牌使用.(你不能因此使用【酒】)',
                        ua_jiangchi_info: '出牌阶段开始时,你可选择一项:<br/>①摸1张牌,直到你下个回合开始,当你受到伤害后,摸1张牌.<br/>②摸3张牌,本回合不能使用或打出【杀】,本回合手牌上限+2.<br/>③本回合使用【杀】无距离限制,可多使用1张【杀】.',
                        ua_qianju_info: '锁定技,设x为你已损体力值,你距离其他角色-x.',
                        ua_qingxi_info: '当你使用【杀】或【决斗】指定目标时,你可令其选择一项:①设x为你攻击范围内的角色数(x≤2),其弃x张手牌.若你装备区有武器牌,改为x≤4,结算结束后,其弃置你的武器牌.②令此牌伤害+1,你进行判定,若结果为红色,其不能响应此牌.',
                        ua_kuiwei_info: '回合结束时,设x为场上武器牌数,你可翻面,摸x+2张牌.若如此做,你下个摸牌阶段开始时,弃x张牌.',
                        ua_jiewei: '解围',
                        ua_jiewei_info: '当你翻面后,摸1张牌,可使用1张锦囊牌或装备牌,此牌结算结束后,你可弃置场上1张同类牌.',
                        ua_yuanhu_info: '出牌阶段限一次或回合结束时,你可将一张装备牌置入一名角色的装备区,你选择一项:①弃置至多两名距离其为1的角色区域内的1张牌.②令其摸2张牌.③令其回复1点体力.',
                        ua_zhiba2_info: '出牌阶段限一次,你可与孙策拼点,若孙策已觉醒,其可拒绝此拼点,若拼点你没赢,孙策可获得拼点的2张牌.',
                        ua_zhiba_info: '主公技,其他吴势力角色的出牌阶段限一次,该角色可与你拼点,若你已觉醒,可拒绝此拼点,若拼点其没赢,你可获得拼点的2张牌.',
                        ua_hunzi_info: '觉醒技,当你体力值变化为1时,减1点体力上限,手牌上限改为体力上限,获得<b><英魂></b>和<b><英姿></b>.',
                        ua_jiang_info: '当你使用和被使用【决斗】或红色【杀】时,可摸1张牌或失去1点体力,摸2张牌.',
                        ua_kangkai_info: '一. 当一名角色被使用【杀】或【决斗】时,若你距离其为0或1,你可摸1张牌,正面给该角色1张牌,若此牌为装备牌,其可使用之.<br/>二.一名角色使用装备时,若你距离其为1,该角色可令你距离其为1持续到其失去装备区最后一张牌.',
                        ua_yuejian_info: '其他角色对你使用的牌置入弃牌堆时,若你有手牌,你可展示所有手牌,若手牌花色与此次对你使用的牌均不同,你获得此牌.',
                        ua_fuwei_info: '每回合限一次,当你的牌被其他角色弃置或获得后,你可从牌堆获得1张同名的牌,若无同名牌,改为摸1张牌.',
                        ua_yinghun_info: '一. 回合开始时,设x为你损体力值(x≥1),你可选择一项:①摸x张牌,弃1张牌.②弃x张牌,摸1张牌.你令一名角色执行你选定的选项,其记录其弃牌的花色,称为英魂记录.<br/>二. 当有英魂记录的角色使用牌造成伤害时,若记录中有此牌的花色,此牌伤害+1,移除英魂记录中对应的花色.<br/>三.英魂记录持续到目标角色下个回合结束时,若在持续期间再次记录,刷新对应花色的持续时间.',
                        ua_fankui_info: '当你受到1点伤害时,可获得伤害来源的1张牌或获得牌堆顶前x张牌中的1张牌.',
                        ua_guicai_info: '设你已损体力值为x(x≥1),一. 当一名角色的判定牌生效前,你可打出1张牌代替之或亮出牌堆顶前x张牌中的1张牌代替之.<br/>二. 牌堆前x张牌对你可见.',
                        ua_shuimeng_info: '出牌阶段限一次,你可与一名角色拼点,(1)若你赢,你可视为使用一张【无中生有】,可令目标也使用一张.(2)若你没赢,其可将一张手牌转化为【过河拆桥】对你使用.',
                        ua_qianya_info: '当你成为锦囊牌的目标后,你可将任意张牌交给一名其他角色,若因此给出的牌数大于等于体力值,设x为本回合你被使用牌的次数,此回合结束时,摸x张牌.',
                        ua_fanjian_info: '出牌阶段限一次,你可选择一张牌,令一名其他角色声明一个花色,背面给该角色你选择的牌,若花色不同,对其造成1点伤害或令其失去一点体力.',
                        ua_yingzi_info: '锁定技,回合开始时,你获得牌堆顶前2张基本牌和2张非基本牌.',
                        ua_shensu_info: '一. 判定阶段开始时,你可跳过判定阶段和摸牌阶段.<br/>二.出牌阶段开始时,你可跳过之.<br/>三. 弃牌阶段开始时,你可翻面,跳过之.<br/>四. 锁定技,当你以上分支执行结束后,视为使用1张【杀】.',
                        ua_tieqi_info: '当你使用【杀】指定目标时,你可令目标不能响应此【杀】,目标本回合非标签技和限定技失效.',
                        ua_qianxun_info: '一. 当你使用或被使用锦囊牌以及你判定区的一张牌开始判定前,若你扣置的牌小于等于3张,设x为你扣置的牌数,可扣置3-x张牌.<br/>二. 锁定技,一个回合结束时,你获得你扣置的牌.',
                        ua_lianying_info: '当你失去最后1张牌后,可令x名角色各摸1张牌.',
                        ua_dulie_info: '锁定技,当你造成伤害时,若目标有<围>,移除之,若此时是你的出牌阶段,本阶段:使用【杀】的次数+1,攻击距离+1,使用【杀】或【决斗】可指定的目标+1.',
                        ua_powei_info: '使命技,游戏开始时,其他角色获得<围>标记.<br/>成功条件:回合开始时,你获得<b><神著></b>(锁定技,一. 当你使用伤害牌结算完毕后,摸1张牌.二. 你使用【杀】无限制.</i>)<br/>失败条件:当你脱离濒死后,减1点体力上限,弃置区域内的装备牌,失去<b><笃烈></b>.',
                        ua_tiandan_info: '锁定技,当有<围>的角色对你使用伤害牌时,摸1张牌,判定一次,若为♥️️,此牌对你无效,你获得之.',
                        ua_shenzhu_info: '锁定技,一. 当你使用伤害牌结算完毕后,摸1张牌.<br/>二. 你使用【杀】无限制.',
                        ua_wusheng_info: '一. 锁定技,你使用红色【杀】无距离限制.<br/>二. 你的红色牌可转化为【杀】.',
                        ua_yijue_info: '出牌阶段限一次,你可弃1张牌令一名其他角色展示1张牌,(1)若展示牌为红色,你获得此牌,你可与该角色各摸1张牌,令该角色回复1点体力.(2)若为黑色,该角色本回合装备、无标签技能和限定技失效,不能使用打出手牌,你使用♥️️【杀】对其造成的伤害+1.',
                        ua_mouni_info: '回合开始时,你可对一名其他角色依次使用你手牌中所有的【杀】,直到其进入濒死为止,若未因此造成伤害,本回合跳过出牌阶段和弃牌阶段.',
                        ua_zongfan_info: '觉醒技,回合结束时,若你本回合因<b><谋逆></b>使用过【杀】且未跳过出牌阶段,你将任意张牌给一名其他角色,设X为因此给出的牌数(x≤5),加X点体力上限,回复X点体力,失去<b><谋逆></b>,获得<b><战孤></b>(<i>锁定技,回合开始时,你减1点体力上限,从牌堆中随机获得三张类别不同的牌</i>).',
                        ua_zhangu_info: '锁定技,回合开始时,你减1点体力上限,从牌堆中随机获得三张类别不同的牌',
                        ua_jinggong_info: '你的装备牌可转化为【杀】(限使用).设你距离目标为x(x≤3)此【杀】无距离限制,伤害量改为X.',
                        ua_xiaojuan_info: '你使用牌指定唯一目标后,你可弃其一半的手牌(向下取整).若其中有与你使用的牌同花色的牌,你弃置一半的手牌(向下取整).',
                        ua_paoxiao_info: '锁定技,<b>一.</b> 你使用【杀】无次数限制.<br/><b>二.</b> 你距离上下家为1.<br/><b>三.</b> 你使用的红色【杀】伤害+1.',
                        ua_kuanggu_info: '当你对你距离其为1的角色造成伤害后,回复1点体力或摸1张牌,若为本回合第一次发动此技能,回复1点体力或摸1张牌.',
                        ua_qimou_info: '限定技,出牌阶段,你可失去至少1点体力,设x为因此失去的体力数,摸x张牌,此阶段:你距离其他角色-x,可使用【杀】的次数+x.',
                        ua_qiaobian_info: '一. 当你的一个阶段开始时,可跳过之,⑴若为摸牌阶段,获得至多两名角色各1张手牌.⑵若为出牌阶段,移动场上1张牌并回复1点体力.⑶若为弃牌阶段,将手牌弃至手牌上限张,可重铸任意张牌.<br/>二. 锁定技,设x为你本回合跳过的阶段数,当你的回合结束时,弃x-1张牌.',
                        ua_mizhao_info: '出牌阶段限一次,你可选择两名其他角色,将所有手牌给其中一名角色,令其与选定的另一名角色拼点,赢家对输家使用1张任意属性【杀】或【决斗】.',
                        ua_tianming_info: '当其他角色使用【杀】或【决斗】指定你时,你可摸2张牌,若手牌数大于等于2,弃置2张牌.',
                        sy_suhui_info: '一名角色的回合开始时,你可以失去一点体力(一血则不失去)并摸两张牌,此回合出牌阶段结束时,你回复一点体力,若此回合你没有受到过伤害(你的回合则改为没有指定过你为目标),你弃两张牌.',
                        ua_qixi_info: '一. 你的黑色牌可转化为【过河拆桥】.<br/>二.锁定技,回合结束时,设x为本回合你使用【过河拆桥】的次数-1(x≤2),你摸x张牌.',
                        ua_lijian_info: '出牌阶段限一次,你可弃置1张牌,令一名其他角色视为对另一名其他角色使用1张【决斗】.',
                        ua_biyue_info: '回合结束时,你可摸2张牌,若你没有手牌,改为摸至体力上限.',
                    },
                };
                lib.config.all.characters.add('duai');
                lib.config.characters.add('duai');
                lib.translate.duai_character_config = '独爱';
                return duai;
            });
            lib.arenaReady.push(function () {
                for (var i in lib.character) {
                    if (i.indexOf('ua_') == 0) {
                        if (lib.rank) lib.rank.rarity.legend.add(i);
                    }
                }
            });
        },
        package: {
            intro: "<br><br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br><br></span>因各服描述不一,本包项目将重铸统一描述,目前有:<br/>1.主语承前省略.<br/>2.逗号连接前后效果,删去非必要的<并、、若如此做…>等等描述,若逗号前效果不执行,技能结算就此停止.<br/>3.同技能名下的分支技能,采用提行、首加中文数字序号清晰标识.<br/>4.未知数提前.",
            author: '九万里',
            version: '1.0',
        },
    };
});
