import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: 'Grand包',
        content(config, pack) {
            //主代码
            /*————————————————新建势力————————————————*/
            lib.arenaReady.push(function () {
                setTimeout(() => { }, 500);
            }); //自定义势力内容结束
            /*————————————————死亡语音————————————————*/
            lib.skill._die_audio = {
                trigger: {
                    player: 'dieBegin',
                },
                _priority: 2,
                forced: true,
                content() {
                    game.playAudio('../extension/Grand包/audio/Die', trigger.player.name);
                },
            };
            //死亡语音内容结束
            /*———————————自娱自乐(搬运自搬运自用)————————————*/
            lib.skill._ziyuzile = {
                firstDo: true,
                trigger: {
                    global: ['chooseToUseBefore', 'gameStart', 'chooseButtonBefore', 'chooseControlBefore'],
                },
                forced: true,
                _priority: 100,
                forceDie: true,
                popup: false,
                filter(event, player) {
                    return lib.config.extension_Grand包_Grand_ziyuzile == true;
                },
                content() {
                    game.swapPlayerAuto(player);
                },
            };
            /*————————————————更新公告————————————————*/
            if (pack.changeLog) game.showExtensionChangeLog(pack.changeLog);
            /*———————————————宝具动画实现———————————————*/
            lib.init.css('extension/Grand包', 'extension');
            game.mp410 = async function (Q) {
                return new Promise((resolve) => {
                    const video = document.createElement('video');
                    video.src = `extension/Grand包/mp4/${Q}.mp4`;
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
            game['showauthoranimation'] = function (str, time) {
                ui.arena.hide();
                var img = window['document']['createElement']('img');
                img['setAttribute']('src', str);
                img['style']['height'] = '100%';
                img['style']['width'] = '100%';
                ui['window']['appendChild'](img);
                game['pause']();
                setTimeout(function () {
                    ui['window']['style']['transition'] = '';
                    ui['window']['removeChild'](img);
                    ui.arena.show();
                    game['resume']();
                }, time);
            };
            game.playusp6 = function (fn, dir, sex) {
                if (lib.config.background_speak) {
                    if (dir && sex) game.playAudio(dir, sex, fn);
                    else if (dir) game.playAudio(dir, fn);
                    else game.playAudio('../extension/Grand包/mp4', fn);
                }
            };
            HTMLDivElement.prototype.zymt = function (bg, pos, time, func) {
                var that = this;
                game.broadcastAll(function (that) {
                    var img = document.createElement('div');
                    img.setBackgroundImage(bg + '?' + Math.random());
                    if (pos && typeof pos == 'object') {
                        for (var i in pos) {
                            img.style[i] = pos[i];
                        }
                    }
                    img.style.backgroundSize = 'cover';
                    that.appendChild(img);
                    setTimeout(function () {
                        if (func) func(img);
                        else img.delete();
                    }, time);
                }, that);
            };
            /*————————————————角色评级————————————————*/
            //传说SSS
            lib.rank.rarity.legend.addArray([
                //珂赛特
                'Grand_Cosette',
                //伊什塔尔(仇)
                'Grand_yishentaer_avenger',
                //阎魔爱
                'Grand_yanmoai',
                //科尔努诺斯
                'Grand_keernunuosi',
                //萝拉
                'Grand_luola',
                //安吉拉
                'Grand_anjila',
                //魁扎尔·科亚特尔(骑)
                'Grand_kuizhaer_keyateer_rider',
                //赵襄
                'Grand_zhaoxiang',
                //神姜维
                'Grand_shenjiangwei',
                //符华
                'Grand_fuhua',
                //张嫙
                'Grand_zhangxuan',
            ]);
            //史诗SS
            lib.rank.rarity.epic.addArray([
                //阿尔托莉雅·潘德拉贡(剑)
                'Grand_aertuoliya_pandelagong_saber',
                //阿尔托莉雅·潘德拉贡(术)
                'Grand_aertuoliya_pandelagong_caster',
                //维尔汀
                'Grand_weierting',
                //千代田桃
                'db_Grand_qiandaitiantao',
                //早濑优香
                'Grand_zaolaiyouxiang',
                //太宰治
                'Grand_taizaizhi',
                //伊芙
                'Grand_yifu',
                //司马懿(莱妮丝)(骑)
                'Grand_simayi_lainisi_rider',
                //库·丘林(枪)
                'Grand_ku_qiulin_lancer',
                //恩奇都(枪)
                'Grand_enqidu_lancer',
                //威尔逊
                'Grand_Wilson',
                //苏芙比
                'Grand_sufubi',
                //简·薇洛
                'Grand_JaneWillow',
                //令
                'Grand_ling',
                //薇儿丹蒂
                'Grand_weierdandi',
                //三笠·阿克曼
                'Grand_sanliakeman',
                //埃尔文
                'Grand_aierwen',
                //莉央
                'Grand_liyang',
                //曹髦
                'Grand_caomao',
                //公孙渊
                'Grand_gongsunyuan',
                //曹婴
                'Grand_caoying',
                //关银屏
                'Grand_guanyinping',
                //李清照
                'Grand_liqingzhao',
                //东海帝皇
                'Grand_donghaidihuang',
                //辛弃疾
                'Grand_xinqiji',
                //十六夜野宫
                'Grand_shiliuyeyegong',
                //黑衣麻陶
                'Grand_heiyimatao',
                //散华
                'Grand_sanhua',
                //陆郁生
                'Grand_luyusheng',
                //阮瑀
                'Grand_ruanyu',
                //杰克欧
                'Grand_jack_o',
                //尼禄·克劳狄乌斯(剑)
                'Grand_nilu_kelaodiwusi_saber',
                //万年公主
                'Grand_wanniangongzhu',
                //赫拉克勒斯(狂)
                'Grand_helakelesi_basaker',
                //鹤(术)
                'Grand_he_caster',
            ]);
            //精品S
            lib.rank.rarity.rare.addArray([
                //空崎日奈
                'Grand_kongqirinai',
            ]);
            //稀有A
            lib.rank.rarity.junk.addArray([]);
        }, //新建角色
        precontent(Grand) {
            /*——————————一键导入扩展(搬运自特效测试)———————————*/
            game.Grand_daorukuozhan = function (bool) {
                var arr;
                game.getFileList('extension', function (fold, file) {
                    arr = Array.from(fold);
                    var f = function (array, ck) {
                        if (!Array.isArray(array) || array.length == 0) return;
                        var fail = [],
                            rean = false;
                        while (array.length) {
                            var obj = array.shift();
                            if (!lib.device) {
                                if (!lib.node.fs.existsSync('./resources/app/extension/' + obj + '/extension.js')) {
                                    alert('本层文件夹内缺少 extension.js 文件:\n游戏目录/extension/' + obj + '\n\r请检查扩展文件夹的文件结构是否正确!');
                                    continue;
                                }
                            } else {
                                window.resolveLocalFileSystemURL(
                                    'extension/' + obj + '/extension.js',
                                    function (entry) { },
                                    function () {
                                        alert('本层文件夹内缺少 extension.js 文件:\n游戏目录/extension/' + obj + '\n\r请检查扩展文件夹的文件结构是否正确!');
                                    }
                                );
                            }
                            if (['coin', 'boss', 'wuxing', 'cardpile'].includes(obj)) continue;
                            if (ck.indexOf(obj) == -1) {
                                fail.add(obj);
                                continue;
                            }
                            if (lib.config.extensions.indexOf(obj) > -1) continue;
                            rean = true;
                            lib.config.extensions.add(obj);
                            game.saveConfig('extension_' + obj + '_enable', true);
                        }
                        if (fail.length == 0 && rean) {
                            game.saveConfig('extensions', lib.config.extensions);
                            if (bool == true) game.reload();
                        }
                    };
                    f(arr, Array.from(fold));
                });
            };
            game.import('character', function () {
                var Grand = {
                    name: 'Grand', //武将包命名
                    connect: true, //该武将包是否可以联机:是
                    character: {
                        /*————————————————角色信息————————————————*/
                        //千代田桃
                        db_Grand_qiandaitiantao: ['female', 'jin', 4, ['Grand_wuli', 'Grand_taose_jin', 'Grand_taose_qun'], ['doublegroup:qun:jin']],
                        //早濑优香
                        Grand_zaolaiyouxiang: ['female', 'wei', 4, ['Grand_yusuan', 'Grand_xinsuan'], []],
                        //萝拉
                        Grand_luola: ['female', 'wei', 3, ['Grand_kuangbao'], []],
                        //科尔努诺斯
                        Grand_keernunuosi: ['female', 'jin', 2, ['Grand_silingshu'], []],
                        //科尔努诺斯衍生角色(死灵术角色):
                        //亡街大幽灵
                        Grand_wangjiedayouling: ['none', 'jin', 4, ['Grand_wangjiedayouling'], []],
                        //死骸突袭者
                        Grand_sihaituxizhe: ['none', 'jin', 2, ['Grand_sihaituxizhe'], []],
                        //丝捷
                        Grand_sijie: ['none', 'jin', 1, ['Grand_sijie'], []],
                        //冰霜烈焰琉璃
                        Grand_bingshuanglieyanliuli: ['none', 'jin', 3, ['Grand_bingshuanglieyanliuli'], []],
                        //永恒新娘塞蕾丝
                        Grand_yonghengxinniangsaileisi: ['female', 'jin', 2, [], []],
                        //伊芙
                        Grand_yifu: ['female', 'qun', 3, ['Grand_sihaiwenshu'], []],
                        //空崎日奈
                        Grand_kongqirinai: ['female', 'wu', 4, ['Grand_huimie', 'Grand_juewu', 'Grand_qichang'], ['zhu'], []],
                        //安吉拉
                        Grand_anjila: ['female', 'shu', 3, ['Grand_zhenlizhishu', 'Grand_tt2xieyi'], []],
                        //司马懿(莱妮丝)(骑)
                        Grand_simayi_lainisi_rider: ['female', 'qun', 3, ['Grand_yuelingsuiye', 'Grand_xuandidezhihui'], []],
                        //太宰治
                        Grand_taizaizhi: ['male', 'jin', 3, ['Grand_renjianshige'], []],
                        //维尔汀
                        Grand_weierting: ['female', 'wu', 3, ['Grand_shoutixiang', 'Grand_yubaoyuzhongxingzou'], []],
                        //阎魔爱
                        Grand_yanmoai: ['female', 'wei', 3, ['Grand_wangshi', 'Grand_wangsheng'], []],
                        //阿尔托莉雅·潘德拉贡(剑)
                        Grand_aertuoliya_pandelagong_saber: ['female', 'qun', 5, ['Grand_longzhiluxin', 'Grand_mofang_hong', 'Grand_Excalibur'], []],
                        //阿尔托莉雅·潘德拉贡(术)
                        Grand_aertuoliya_pandelagong_caster: ['female', 'qun', 3, ['Grand_huzhijiahu', 'Grand_mofang_lan', 'Grand_AroundCaliburn'], []],
                        //库·丘林(枪)
                        Grand_ku_qiulin_lancer: ['male', 'qun', 4, ['Grand_luenmoshu', 'Grand_mofang_lv', 'Grand_GaeBolg'], []],
                        //魁扎尔·科亚特尔(骑)
                        Grand_kuizhaer_keyateer_rider: ['female', 'qun', 4, ['Grand_shanshenzhihui', 'Grand_mofang_hong', 'Grand_Xiuhcoatl'], []],
                        //恩奇都(枪)
                        Grand_enqidu_lancer: ['none', 'qun', 4, ['Grand_bianrong', 'Grand_mofang_hong', 'Grand_mofang_lv'], []],
                        //伊什塔尔(仇)
                        Grand_yishentaer_avenger: ['female', 'qun', 4, ['Grand_duochongxinghuan', 'Grand_jinxingqudong'], []],
                        //珂赛特
                        Grand_Cosette: ['female', 'qun', 3, ['Grand_SymphonyofDestiny'], []],
                        //威尔逊
                        Grand_Wilson: ['male', 'qun', 4, ['Grand_gezhi', 'Grand_kaituo'], []],
                        //苏芙比
                        Grand_sufubi: ['female', 'shu', 3, ['Grand_tiancaishunv', 'Grand_nongsuojinghua'], []],
                        //简·薇洛
                        Grand_JaneWillow: ['female', 'qun', 3, ['Grand_guanghuiqizhi', 'Grand_butuizhiqi'], []],
                        //令
                        Grand_ling: ['female', 'qun', 3, ['Grand_xiaomingse', 'Grand_ningzuowu'], []],
                        //薇儿丹蒂
                        Grand_weierdandi: ['female', 'qun', 4, ['Grand_xinsuo', 'Grand_shinian'], []],
                        //三笠·阿克曼
                        Grand_sanliakeman: ['female', 'qun', 3, ['Grand_qiaoxi', 'Grand_shouhu'], []],
                        //埃尔文
                        Grand_aierwen: ['male', 'qun', 4, ['Grand_caiyi', 'Grand_zhenxiang', 'Grand_duanbi', 'Grand_chongfeng'], ['zhu'], []],
                        //莉央
                        Grand_liyang: ['female', 'qun', 3, ['Grand_jianyue', 'Grand_tigong', 'Grand_zhengshebizhong'], []],
                        //赵襄
                        Grand_zhaoxiang: ['female', 'qun', 3, ['Grand_fanghun', 'Grand_fuhan'], []],
                        //曹髦
                        Grand_caomao: ['male', 'wei', '3/4', ['Grand_qianlong', 'Grand_fensi', 'Grand_juetao', 'Grand_zhushi'], ['zhu'], []],
                        //公孙渊
                        Grand_gongsunyuan: ['male', 'qun', 4, ['Grand_huaiyi', 'Grand_xuanguo'], []],
                        //曹婴
                        Grand_caoying: ['female', 'wei', 3, ['Grand_lingren', 'Grand_fujian'], []],
                        //关银屏
                        Grand_guanyinping: ['female', 'shu', 3, ['Grand_huxiao', 'Grand_xuehen', 'Grand_wuji'], []],
                        //神姜维
                        Grand_shenjiangwei: ['male', 'shen', 4, ['Grand_tianren', 'Grand_pingxiang'], []],
                        //东海帝皇
                        Grand_donghaidihuang: ['female', 'qun', 4, ['Grand_lvzhan', 'Grand_chuanqi'], []],
                        //李清照
                        Grand_liqingzhao: ['female', 'qun', 3, ['Grand_cilun', 'Grand_cifu'], []],
                        //辛弃疾
                        Grand_xinqiji: ['male', 'qun', 4, ['Grand_shuangquan'], []],
                        //十六夜野宫
                        Grand_shiliuyeyegong: ['female', 'jin', 4, ['Grand_zhuangdan', 'Grand_lianshe'], []],
                        //黑衣麻陶
                        Grand_heiyimatao: ['female', 'wei', 3, ['Grand_heixing', 'Grand_jiban'], []],
                        //散华
                        Grand_sanhua: ['female', 'qun', 4, ['Grand_jianwu_linci', 'Grand_manlianhua', 'Grand_shuoxueyongdong'], []],
                        //陆郁生
                        Grand_luyusheng: ['female', 'wu', 3, ['Grand_zhiwei', 'Grand_zhente'], []],
                        //符华
                        Grand_fuhua: ['female', 'qun', 4, ['Grand_baibing', 'Grand_ninaiwohe'], []],
                        //张嫙
                        Grand_zhangxuan: ['female', 'wu', 3, ['Grand_tongli', 'Grand_shezang'], []],
                        //阮瑀
                        Grand_ruanyu: ['male', 'wei', 3, ['Grand_xingzuo', 'Grand_miaoxian'], []],
                        //杰克欧
                        Grand_jack_o: ['female', 'qun', 3, ['Grand_dopros', 'Grand_zhiling'], []],
                        //尼禄·克劳狄乌斯(剑)
                        Grand_nilu_kelaodiwusi_saber: ['female', 'qun', 4, ['Grand_huangditequan', 'Grand_mofang_hong', 'Grand_LausSaintClaudius'], []],
                        //万年公主
                        Grand_wanniangongzhu: ['female', 'qun', 4, ['Grand_zhenge', 'Grand_xinghan'], []],
                        //赫拉克勒斯(狂)
                        Grand_helakelesi_basaker: ['male', 'qun', 1, ['Grand_shiershilian', 'Grand_mofang_hong', 'Grand_yongwu'], []],
                        //鹤(术)
                        Grand_he_caster: ['female', 'qun', 3, ['Grand_shunvfushi', 'Grand_heenxibie', 'Grand_yiyeyuzhi', 'Grand_lingyicaizhi'], []],
                        //新建角色
                    },
                    characterIntro: {
                        //千代田桃
                        db_Grand_qiandaitiantao: '桃是夏美子觉醒后遇到的第一位魔法少女(已退役),也是目前和夏美子羁绊最深的人,身为魔法少女却比起魔法更喜欢肌肉的力量,非常喜欢肌肉锻炼.即使不依靠魔法辅助本人的肌肉能力也强到了怪力的级别',
                        //早濑优香
                        Grand_zaolaiyouxiang: '千年学园学生会,「研讨会」的会计.在理科比例较高的千年学园中,她是首屈一指的数学奇才,总揽千年学园的预算管理.专长是珠算.每当思绪混乱或有心理矛盾时,她习惯靠打算盘来平复心情',
                        //萝拉
                        Grand_luola: '战场即是舞台,那么就尝尝这万雷鸣掌般的炮击吧! 不留一片尘埃,连悲鸣的残渣也将化为灰烬! 闭幕吧,歼灭所有吧!这是场没有剧本的即兴演出,但结局早已注定. 荣誉,荣华,荣光!将以我的胜利收场! 来,结束这场表演吧!',
                        //科尔努诺斯
                        Grand_keernunuosi: '科尔努诺斯(英语:Cernunnos)或译作<塞努诺斯>,古罗马凯尔特神话神祇之一,名字为<有角者>的意思,一般认为掌管狩猎、生育、动物、植物、荒野等,并具有支配冥界的力量',
                        //伊芙
                        Grand_yifu: '最古老的幻书之一,在远古时代便以<先知>的身份传达预言,同时是守护信众、对抗文明之敌的引领者.她指引着时代的方向,维护公义,保护义人,以信仰之力向信众们传递着希望.然而在近千年的时间里,她的身影却从人类的视线中消失了,据说,这同样是因为她遵从了预言中赋予她的使命',
                        //空崎日奈
                        Grand_kongqirinai: '格黑娜学园的风纪委员会长.平常是个什么事都懒得理的懒癌少女,但在和校规有关的问题上,会表现出风纪委员会长严格的一面.虽然老是把「真麻烦」当口头禅挂在嘴上,不过在战场上却会毫不犹豫地判断情况.因此和格黑娜敌对的组织最怕她出现',
                        //安吉拉
                        Grand_anjila: '安吉拉本是脑叶公司的一台高度先进的AI秘书,她原名安吉罗斯,后改安吉拉,由脑叶公司的创建者A亲自创造.由于她为脑叶公司而生,她只能存在于脑叶公司,但在公司内部,她能出色的完成一切工作.此外,她的首要任务被设置为保护主管的安全.实际上,安吉拉是作为卡门的仿制诞生的,A希望安吉拉能像卡门一样陪伴他完成计划,却又在她诞生时便否定了她.为了完成<光之种>计划,安吉拉被迫忍受近百万年时光的煎熬,这使她产生了自我与仇恨的情感.在<光之种>完成后,安吉拉夺取了七分之四的光芒,导致了<白夜黑昼>与扭曲现象的产生',
                        //司马懿(莱妮丝)(骑)
                        Grand_simayi_lainisi_rider: '在三国志等作品中均有被描写的武人兼政治家.也是死后被追封为宣帝的三国时代胜利者.……尽管如此,却与自己仇敌的军师一样,选择了某位魔术师少女作为自己的凭依之躯.「哎呀,虽说从现代的应用角度来考虑,还是将意识交由凭依对象更为合理.但是你们几个是不是过于合理主义了？」',
                        //太宰治
                        Grand_taizaizhi: '异能力集团<武装侦探社>的一员,国木田独步的搭档,经常给国木田添麻烦,乱步称其为<我也看不透的男人>.表面上是一个开朗且神秘的青年,加入侦探社之前是港口黑手党干部,被称作<历代最年轻的干部>.因织田作之助而选择了跳槽到武装侦探社,是芥川龙之介过去的领导人.曾与中原中也是搭档,被合称为<双黑>',
                        //维尔汀
                        Grand_weierting: '人类与神秘学家共存的世界中,唯一不受<暴雨>侵袭之人.作为外界时间的记录者——<司辰>,她在时代轮转中梭巡,结识失落的神秘学家.而后,带领他们……逃离<暴雨>',
                        //阎魔爱
                        Grand_yanmoai: '阎魔爱是一个命运悲惨的少女,因为悲惨的命运,死后化为怨灵犯下罪孽,因为强大的怨念被地狱的管家(三眼蜘蛛真名叫赫卡提亚·拉碧斯拉祖利)看上,三眼蜘蛛囚禁了爱的双亲,逼迫爱化身成为地狱少女,受理人世间的地狱通信工作.不论多么不合理多么有争议的流放,爱都会去做,尽管本人并不愿意.由于最终爱将受诅咒的人通过小船带进地狱,所以也有经典的恶搞Nice Boat',
                        //阿尔托莉雅·潘德拉贡(剑)
                        Grand_aertuoliya_pandelagong_saber: '</b><br><b><font color=#CD7F32><br>能力值</font></b><br><center>筋力B<br>耐久B<br>敏捷B<br>魔力A<br>幸运A+<br>宝具A++</center><br><b><font color=#CD7F32></center>个人资料</font></b>不列颠传说中的王.也被誉为骑士王.阿尔托莉雅是幼名,自从当上国王之后,就开始被称为亚瑟王了.在骑士道凋零的时代,手持圣剑,给不列颠带来了短暂的和平与最后的繁荣.史实上虽为男性,但在这个世界内却似乎是男装丽人.<br><b><font color=#CD7F32>特性</font></b>骑乘、龙、阿尔托莉雅脸、天地从者、亚瑟、王、人科、圆桌骑士、持有灵衣之人',
                        //阿尔托莉雅·潘德拉贡(术)
                        Grand_aertuoliya_pandelagong_caster: '</b><br><b><font color=#CD7F32><br>能力值</font></b><br><center>筋力B<br>耐久D<br>敏捷B<br>魔力A<br>幸运B<br>宝具A++</center><br><b><font color=#CD7F32></center>个人资料</font></b>携『选定之杖』被选中的预言之子.是终将抵达卡美洛的余暇、途中与间隙的模样.<br>「太棒了,终于轮到我出场了吧!Caster·阿尔托莉雅,会在力所能及的范围内努力!」<br><b><font color=#CD7F32>特性</font></b>阿尔托莉雅脸、亚瑟、圆桌骑士、妖精',
                        //库·丘林(枪)
                        Grand_ku_qiulin_lancer: '</b><br><b><font color=#CD7F32><br>能力值</font></b><br><center>筋力B<br>耐久C<br>敏捷A<br>魔力C<br>幸运E<br>宝具B</center><br><b><font color=#CD7F32></center>个人资料</font></b>不喜欢装饰,爱好维持野性战斗的枪兵.工作时,是个为了封口会不惜杀害平民的无情人物,但相反,业余时性情粗犷.是个很会照顾人的大哥.<br><b><font color=#CD7F32>特性</font></b>神性、天地从者、所爱之人、人科',
                        //魁扎尔·科亚特尔(骑)
                        Grand_kuizhaer_keyateer_rider: '</b><br><b><font color=#CD7F32><br>能力值</font></b><br><center>筋力B<br>耐久B<br>敏捷B+<br>魔力EX<br>幸运A+<br>宝具EX</center><br><b><font color=#CD7F32></center>个人资料</font></b>中南美阿兹特克神话中的至高存在之一.看上去自由奔放,实际却是善良而充满知性的女神.厌恶活祭仪式,深爱人类.生命与丰收之神、文化之神、风雨之神.曾经有一段时期还有过司掌太阳的传说.最高存在(通过分灵)的现界.在如此异常事态中,魁札尔·科亚特尔表现出了谁人都不知道的崭新的一面.那就是作为深爱兴盛于现代墨西哥的自由斗争——深爱墨西哥摔角的神.……她并没有被人奉为摔角之神.只是本人很喜欢摔角而已.<br><b><font color=#CD7F32>特性</font></b>神性、骑乘、天地从者、王、人科、神灵',
                        //恩奇都(枪)
                        Grand_enqidu_lancer: '</b><br><b><font color=#CD7F32><br>能力值</font></b><br><center>筋力？<br>耐久？<br>敏捷？<br>魔力？<br>幸运？<br>宝具A++</center><br><b><font color=#CD7F32></center>个人资料</font></b>安定的语调,温和的举止,却具备了难以想象超强战斗能力的<拥有意识的宝具>.曾被英雄王吉尔伽美什誉为最强之人,连接天与地之锁.既是由众神之手所造的人偶,亦是自然与调和一体化的大地分身.作为英雄王唯一的友人,曾与其经历许多冒险,获得人之心之后,却最终以人偶之躯归于尘土的可悲兵器.<br><b><font color=#CD7F32>特性</font></b>天地从者、持有灵衣之人',
                        //伊什塔尔(仇)
                        Grand_yishentaer_avenger: '</b><br><b><font color=#CD7F32><br>能力值</font></b><br><center>筋力B<br>耐久EX<br>敏捷B<br>魔力EX<br>幸运C+<br>宝具EX</center><br><b><font color=#CD7F32></center>个人资料</font></b>来自从者宇宙,自由奔放,对生存充满热忱的神灵从者.本人自命Archer,但不知为何职阶却是Avenger.基于某些原因,与简组成搭档追捕恶徒,过着从早到晚的赏金猎人(Bounty hunter)生活.<br>「我是伊什塔尔.女神伊什塔尔.<br>哎？容易搞混,让我加上太空这个前缀？<br>我拒绝,太空听上去一点也不可爱啦!」<br><b><font color=#CD7F32>特性</font></b>神性、神灵、浮游着的、持有灵衣之人',
                        //珂赛特
                        Grand_Cosette: '从贝多芬作品第五交响曲C小调Op.67(命运交响曲)中诞生的奏者,附身于珂赛特·施耐德.命运不具有珂赛特原有的人格和记忆,最初不具有任何情感,在与朝雏磔人的合作战斗中逐渐获得了情感.命运与其他奏者诞生方式不同,她在战斗时以朝雏磔人的生命力为代价,战斗时会令磔人的手臂消失,比其他奏者有更强感知D2的能力.命运平时以珂赛特形象示人,喜欢甜食,并且食量巨大',
                        //威尔逊
                        Grand_Wilson: '暂无简介',
                        //苏芙比
                        Grand_sufubi: '苏芙比小姐研制的魔药大多配方昂贵、工序讲究,且如同她双眼中扑闪的热情,富含古怪离奇的妙想.但饮用她交予你的液体之前,请务必小心检查.视情况,你的肚子或许会发光……一整天!',
                        //简·薇洛
                        Grand_JaneWillow: '在维多利亚,一名普通士兵想要成为仪仗兵,往往需要经过严苛的选拔.因此,许多人第一眼看到琴柳小姐,都会被她出色的外表与仪态吸引.但干员们最喜欢的,还是她极具亲和力的性格.琴柳小姐会不厌其烦地将自己的护肤和美发秘诀分享给感兴趣的干员,并在好奇的孩子们面前表演过好几次掌旗行进.除此之外,她迅速加入了由古米等人发起的烹饪爱好小组,亲手制作了一大批维多利亚特色点心,在随后的美食节上收获了诸多好评',
                        //令
                        Grand_ling: '<这姐们是练过的!酒品也好!>星熊如此评价.所谓<酒品好>,大概是指令从不强拉旁人作陪,有人主动坐下时她会笑着递过酒杯,独身一人时也能自酌自饮悠然半日.她也从未耍过酒疯造成不良影响,醉后唯一的出格之举便是放声作歌,并将歌词用尾巴写在墙上,墨意淋漓,像是某种行为艺术,不过相比时不时就大张旗鼓筹拍特效大电影的某人与一言不合就将干员诳进画中的某人,这实在不算什么,可露希尔也就未对她过多限制.不少干员对令所作之歌表示出相当兴趣,他们将歌词全部誊录下来加以整理,那些句子古意盎然,声律复杂,且格式极有讲究,或对仗工整,但语意跳跃无序,或长短错落,铺陈开来洋洋洒洒……据说是名为<诗词赋>的炎国古文体,历经数百年流变,具有较高的艺术性.当然,诗词中陌生的炎国古地名和某些令人心惊的描述,真假难辨,无疑更值得研究.但大家显然低估了这些诗词的理解成本,短时间内,掌握那一套解读规律并不现实.<希望令小姐能在本舰多留一段时间>,人事部收到了多份这样的申请',
                        //薇儿丹蒂
                        Grand_weierdandi: '<旧誓>是新人小队成员薇儿丹蒂的第二权钥,原本是从源层打捞起的上古权钥,剑柄和剑身都已经被乱流腐蚀,只剩下剑身上的铭石还保留着应有的权限.铭石上刻着有<命运>之意的古卢恩文.后铭石被隐科组改造成一面防护盾牌,同时还配备了一套可以承担巨大压力的剑式泄能装置,可以有效地将铭石吸收的能量导出到特定区域.即便不启动铭石,这个盾本来也具有很强的抗击能力',
                        //三笠·阿克曼
                        Grand_sanliakeman: '沉默寡言、表情稀少的美少女,拥有东洋与阿克曼的血统.拥有八块腹肌的女汉子,艾伦和阿明的青梅竹马与挚友,三人经常一起行动.拥有优秀的身体能力与战斗技术,一人的表现就足以与100名士兵匹敌.为了保护艾伦,加入调查兵团.第104期训练兵团毕业生首席,被教官评价为史无前例的天才.因为幼年时失去双亲,十分重视家人.平时沉着冷静,但是艾伦陷入危险时容易失去理智',
                        //埃尔文
                        Grand_aierwen: '调查兵团第13任团长.拥有过人的判断力以及指挥能力.行动及考虑总是想得比任何人还要深远,就连兵团里资历深的老兵也没能理解太多.可以为了墙内全人类的生存以及自己的私心:探寻墙外世界的真相,选择舍弃100个同伴的性命,是可以舍弃最重要东西之人.虽然看似冷酷无情实际上也确实冷酷无情,可以毫不在乎地命令部下、甚至自己去送死,只为达到战略目标,但正因如此才可以被以里维为首的部下们深深信赖.发明的长距离索敌阵型大大降低了调查兵团的死亡率.曾在首都地下街将相当出名的混混利威尔·阿克曼拉入调查兵团',
                        //莉央
                        Grand_liyang: '19M-RFT41 (莉央)的冷冷冰冷的外表,由于她直截了当的讲话方式,她在弓道俱乐部的其他学生0中经常有诸如她仅仅因为她的熟练而自大之类的言论.但是,事实是,与他人交往时,她只是很笨拙.她想与其他人融洽相处,但她常常担心她做不好.19M-RFT41(莉央)由于父母的职业,在她年轻的时候就不得不经常换学校.作为转学生,自然会引起同学的注意,但由于她的外表冷酷,没人敢接近她.由于没有机会结交朋友或与忙碌的家人聊天,她长大了,还是不知道该如何与他人交往',
                        //赵襄
                        Grand_zhaoxiang: '襄者,辅也.云生女名襄,一意为忠心辅汉,二意为不做主,希望女儿平淡渡过一生.东汉中平四年(公元187年),探望夫君赵云而来辽西大营的马氏,生下一女婴.这虽然是赵云的第三个孩子,但也是唯一一名一出生能见到父亲的孩子.赵云非常高兴,给她起名叫襄',
                        //曹髦
                        Grand_caomao: '曹髦(241年11月15日-260年6月2日) ,字彦士,沛国谯县人,魏文帝曹丕之孙,东海王曹霖之子.正始二年,生于东海王宫,自幼聪明好学,才慧早成,正始五年,封为高贵乡公,嘉平六年,大将军司马师废除齐王曹芳后,拥立为帝,年号正元, 曹髦文才武略,崇拜少康,不满司马氏专权秉政,甘露五年,亲自讨伐司马昭,为太子舍人成济所弑,年仅十九岁,以王礼葬于洛阳西北.曹髦擅长诗文,创制了九言诗, 传世文章有<伤魂赋并序><颜子论>等.爱好儒学,亲赴太学论道,著有<春秋左氏传音>.精通绘画,一说为中国第一位成为画家的皇帝 ,唐张彦远<历代名画记>目曹髦为中品',
                        //公孙渊
                        Grand_gongsunyuan: '公孙渊,字文懿,三国时辽东地方割据军阀.在击败前来讨伐的毌丘俭等后叛魏,自立为燕王,建年号绍汉,并置百官有司',
                        //曹婴
                        Grand_caoying: '曹婴作为曹操的孙女,文武双全,弓马娴熟,深得曹操兵道和攻心之术.诸葛亮北伐,以赵云为先锋作饵,实则图谋魏国凉州六郡.于凤鸣山一战中担任魏军大都督阻止诸葛亮北伐并因罗平安的告密而全歼关兴、张苞、赵云率领的蜀军部队.这是<常胜将军>赵云少有的败绩,曹婴因此成名',
                        //关银屏
                        Grand_guanyinping: '关银屏(202——？),河东郡解县(今山西省运城市)人,三国时期名将关羽之女在民间传说中的名字,该名不见史书记载,仅在民间传说中出现,因在关羽的四个子女中排行第三,故又被称作<关三小姐>、<关氏三姐>或<关家三小姐>.在传说中她是黄月英的弟子、并随同诸葛亮平定南蛮,嫁给蜀国名臣李恢之子李遗',
                        //神姜维
                        Grand_shenjiangwei: '姜维,字伯约,天水冀人.三国时期蜀汉著名将领、军事统帅.原为曹魏天水郡的中郎将,后降蜀汉,官至凉州刺史、大将军.诸葛亮去世后继承诸葛亮的遗志,继续率领蜀汉军队北伐曹魏,与曹魏名将陈泰、郭淮、邓艾等多次交手',
                        //东海帝皇
                        Grand_donghaidihuang: '从小憧憬着<皇帝>鲁道夫象征的辉煌的东海帝王,以<无败的三冠马娘>作为自己的目标.在东海帝王先后获得皋月赏和日本德比冠军,正处于意气风发之时,却在德比之后查出骨折,虽然与训练员、麦昆、Spica的大家的一起努力回复,但依然未能在经典三冠的第三冠菊花赏前完全康复,无缘参加菊花赏.菊花赏当天在东海帝王作为观众观看了参赛者们的奋斗,即使没参赛的情况下,其它参赛者却都在以帝王参赛的预想情况下拼命奔跑,所有马娘如同她真正地在赛场上奔跑一样追逐她的身影.帝王逐渐解开心结,认识到不甘心的不只有自己,还有不能和她一较高下的众马娘,赛后重新振作并把<无败马娘>作为新的目标',
                        //李清照
                        Grand_liqingzhao: '李清照,号易安居士,齐州章丘人.宋代婉约派代表词人,有<千古第一才女>之称.李清照出生于书香门第,生活优裕,其父李格非藏书甚富,她小时候就在良好的家庭环境中打下文学基础',
                        //辛弃疾
                        Grand_xinqiji: '辛弃疾,原字坦夫,后改字幼安,中年后号稼轩,山东东路济南府历城县人.南宋官员、将领、文学家,豪放派词人,有<词中之龙>之称;与苏轼合称<苏辛>,与李清照并称<济南二安>',
                        //十六夜野宫
                        Grand_shiliuyeyegong: '阿拜多斯高中所属,对策委员会的一员.感情丰富且品性善良,是让有着许多极端性格成员的对策委员会团结一致的精神支柱.虽然没有怎么表露出来,但她是富裕人家的千金,大部分的对策委员会零食费都来自她的零用钱',
                        //黑衣麻陶
                        Grand_heiyimatao: '黑岩射手(BRS)是现实世界中黑衣麻陶所对应的里世界角色,曾在OVA开篇被黑金锯手的巨剑贯穿腹部以至于在腹部肚脐周围留下刀伤疤痕,至今未能痊愈,进而导致BRS的肚脐成为致命弱点.对BRS身体其它任何部位的攻击均无法造成有效伤害,但是BRS在战斗中腹部完全裸露,而肚脐更是十分脆弱,是BRS的软肋',
                        //散华
                        Grand_sanhua: '龙主近卫,如冰雪一般清冷.在她眼中,世间万物都会扭曲成怪异的形状,仅有寥寥数人維持着正常而纯粹的真实',
                        //陆郁生
                        Grand_luyusheng: '陆郁生,三国时期吴国官员陆绩之女.因为当时陆绩正赴任郁林,因此取名郁生,13岁成为张白之妻.号为义姑.陆郁生年少的时候就定下坚贞的志向.建安二十四年(219年),陆绩早亡,她与两个兄弟陆宏、陆睿当时都只有几岁,一起返回吴县,被他们的从兄陆瑁接回抚养.13周岁的陆郁生嫁给同郡出身的张白为妻.出嫁3个月后,张白因为其兄张温一族的案件遭到连坐,被处以流刑,后死于流放地,陆郁生成为了寡妇,其后公开宣言不再改嫁,困难于生计但拒绝了所有提亲,在艰苦中从未停止服侍、照顾张白的姐妹.事情传到朝廷,皇帝褒奖陆郁生,号其为<义姑>.她的表侄姚信在文集中称赞她的义举',
                        //符华
                        Grand_fuhua: '在天命之战中,奥托对着符华的脑袋开了一枪.情急之下,符华将自己的意识转移到了一片羽渡尘内.这使得她原本的身体成为了一具没有灵魂的残躯.这具融合战士的躯体健康而强大,还拥有优秀的崩坏能适应性,崩坏意志自然不会放过这个天上掉的馅饼,它将一个全新的意识放入了这具躯体内.这就是<识之律者>的诞生.但令崩坏意志没有想到的是,这具身体的大脑中蕴含了数千年、甚至数万年的记忆.浩瀚的记忆轻而易举地淹没了新生的崩坏人格,使得<识之律者>苏醒时,反而认为自己就是记忆的主人:符华',
                        //张嫙
                        Grand_zhangxuan: '张嫙,三国时期孙吴将领张布之女,孙皓后妃张媱的姐姐.初为卫尉冯朝之子冯纯的妻子,后为孙皓后妃,册封左夫人.因孙皓诛灭张布,张媱口吐怨言,被暴怒的孙皓下令棒杀.后来孙皓怀念她的容颜,于是询问侍从:<张布还有女儿吗？>侍从回答:<张布的大女儿嫁给了已故卫尉冯朝的儿子冯纯.>于是孙皓夺走了冯纯的妻子张嫙,纳入宫中.孙皓颇为宠爱张嫙,册封其为左夫人.昼夜嬉戏,纸醉金迷,不理朝政.后来张嫙也去世了,孙皓非常悲伤,下令以最高的规格埋葬张嫙.因为悲伤过度,孙皓一度半年都不出宫门,甚至由于葬礼太过奢华被宫外之人认为孙皓已经死了',
                        //阮瑀
                        Grand_ruanyu: '阮瑀(约165—212年),字元瑜,东汉末年文学家,<建安七子>之一.阮瑀所作章表书记很出色,当时军国书檄文字,多为阮瑀与陈琳所拟.年轻时曾受学于蔡邕,蔡邕称他为<奇才>.后徙为丞相仓曹掾属.诗歌语言朴素,往往能反映出一般的社会问题.阮瑀的音乐修养颇高,他的儿子阮籍,孙子阮咸皆当时名人,位列<竹林七贤>,妙于音律.明人辑有<阮元瑜集>',
                        //杰克欧
                        Grand_jack_o: '2073 年,佛莱迪克·布尔萨拉(索尔·巴得凯)的未婚妻亚莉亚·海尔转变为Gear——迦斯堤,并获得了控制所有其他Gear的能力,因此她可以阻止Gear作为战争武器的部署.然而,在2074年的激活测试中,迦斯堤的身体和意识受到了宇宙意志的损害.该实体试图接管迦斯堤,但在失败时,它使日本人发生变异,以便从<后院>内部实体化.为了阻止破坏神迦斯堤以该实体复活,<那个男人>——飞鸟·R·克鲁兹下令将迦斯堤的控制系统的指挥权转移给自己,通过强制与阿里亚的灵魂融合阻止了迦斯堤的觉醒[1] ,并迫使她发射伽马射线摧毁岛屿',
                        //尼禄·克劳狄乌斯(剑)
                        Grand_nilu_kelaodiwusi_saber: '</b><br><b><font color=#CD7F32><br>能力值</font></b><br><center>筋力D<br>耐久D<br>敏捷A<br>魔力B<br>幸运A<br>宝具B</center><br><b><font color=#CD7F32></center>个人资料</font></b>自称男装丽人.虽然是个自我至上主义者且擅自妄为,但由于其开朗豁达,如同孩童般天真无邪,因此成了被万民爱戴的万能任性皇帝.本名是尼禄·克劳狄乌斯·恺撒·奥古斯都·日耳曼尼库斯.罗马帝政的第5代皇帝.一生被阴谋与毒药所妆点的恶名昭彰的暴君.<br><b><font color=#CD7F32>特性</font></b>罗马、阿尔托莉雅脸、骑乘、王、人科、持有灵衣之人',
                        //万年公主
                        Grand_wanniangongzhu: '刘氏(生卒年不详),河南郡雒阳县(今河南省洛阳市)人,汉灵帝刘宏之女,汉少帝刘辩与汉献帝刘协的姐妹,封万年公主',
                        //赫拉克勒斯(狂)
                        Grand_helakelesi_basaker: '</b><br><b><font color=#CD7F32><br>能力值</font></b><br><center>筋力A+<br>耐久A<br>敏捷A<br>魔力A<br>幸运B<br>宝具A</center><br><b><font color=#CD7F32></center>个人资料</font></b>希腊神话中的两大英雄之一.主神宙斯与人类女性所生,半神半人的英雄.因与女神赫拉的恩怨而开始了诸多冒险,并最终全部予以克服的超人.<br><b><font color=#CD7F32>特性</font></b>神性、天地从者、希腊神话系男性、阿耳戈船相关人员、人科',
                        //鹤(术)
                        Grand_he_caster: '</b><br><b><font color=#CD7F32><br>能力值</font></b><br><center>筋力E<br>耐久E<br>敏捷D<br>魔力C+<br>幸运D<br>宝具EX</center><br><b><font color=#CD7F32></center>个人资料</font></b>「由我来为你裁一件衣服吧.但是,请先向我保证.在我工作时,绝对不能偷看哦.」喀啦喀啦,嘶嘶地纺着线.咚唰咚唰,吱吱地织着机.用这样织好的布匹,剪裁成漂亮的衣服吧.现代的晚会礼服？绅士般的三件套？时尚前卫的也没问题.无论什么样的衣服,都随您吩咐.因为,这就是我的报恩.是用来回报您的,我鞠躬尽瘁的报恩…….<br><b><font color=#CD7F32>特性</font></b>天地从者、童话特性的从者、兽科',
                        //新建角色
                    },
                    characterTitle: {
                        /*————————————————角色称号————————————————*/
                        //千代田桃
                        db_Grand_qiandaitiantao: '<font color=#CD7F32>光之魔法少女',
                        //早濑优香
                        Grand_zaolaiyouxiang: '<font color=#CD7F32>没包人',
                        //萝拉
                        Grand_luola: '<font color=#CD7F32>狂暴的司令官',
                        //科尔努诺斯
                        Grand_keernunuosi: '<font color=#CD7F32>亡者召还者',
                        //伊芙
                        Grand_yifu: '<font color=#CD7F32>死海文书',
                        //空崎日奈
                        Grand_kongqirinai: '<font color=#CD7F32>委员长',
                        //安吉拉
                        Grand_anjila: '<font color=#CD7F32>真理之书',
                        //司马懿(莱妮丝)(骑)
                        Grand_simayi_lainisi_rider: '<font color=#CD7F32>月灵髓液',
                        //阎魔爱
                        Grand_yanmoai: '<font color=#CD7F32>地狱少女',
                        //太宰治
                        Grand_taizaizhi: '<font color=#CD7F32>无赖派作家',
                        //维尔汀
                        Grand_weierting: '<font color=#CD7F32>神秘学家',
                        //阿尔托莉雅·潘德拉贡(剑)
                        Grand_aertuoliya_pandelagong_saber: '<font color=#CD7F32>骑士王',
                        //阿尔托莉雅·潘德拉贡(术)
                        Grand_aertuoliya_pandelagong_caster: '<font color=#CD7F32>预言之子',
                        //库·丘林(枪)
                        Grand_ku_qiulin_lancer: '<font color=#CD7F32>光之子',
                        //魁扎尔·科亚特尔(骑)
                        Grand_kuizhaer_keyateer_rider: '<font color=#CD7F32>羽蛇神',
                        //恩奇都
                        Grand_enqidu_lancer: '<font color=#CD7F32>天之锁',
                        //伊什塔尔(仇)
                        Grand_yishentaer_avenger: '<font color=#CD7F32>最明亮的天体',
                        //珂赛特
                        Grand_Cosette: '<font color=#CD7F32>命运',
                        //威尔逊
                        Grand_Wilson: '<font color=#CD7F32>希望的开拓者',
                        //苏芙比
                        Grand_sufubi: '<font color=#CD7F32>天才淑女',
                        //简·薇洛
                        Grand_JaneWillow: '<font color=#CD7F32>琴柳',
                        //令
                        Grand_ling: '<font color=#CD7F32>重进酒',
                        //薇儿丹蒂
                        Grand_weierdandi: '<font color=#CD7F32>旧誓',
                        //三笠·阿克曼
                        Grand_sanliakeman: '<font color=#CD7F32>三爷',
                        //埃尔文
                        Grand_aierwen: '<font color=#CD7F32>人类的希望',
                        //莉央
                        Grand_liyang: '<font color=#CD7F32>19M-RFT41',
                        //赵襄
                        Grand_zhaoxiang: '<font color=#CD7F32>拾梅鹊影',
                        //曹髦
                        Grand_caomao: '<font color=#CD7F32>高贵乡公',
                        //公孙渊
                        Grand_gongsunyuan: '<font color=#CD7F32>恣睢海外',
                        //曹婴
                        Grand_caoying: '<font color=#CD7F32>锋芒毕露',
                        //关银屏
                        Grand_guanyinping: '<font color=#CD7F32>武姬',
                        //神姜维
                        Grand_shenjiangwei: '<font color=#CD7F32>天水麒麟',
                        //东海帝皇
                        Grand_donghaidihuang: '<font color=#CD7F32>不败的帝皇',
                        //李清照
                        Grand_liqingzhao: '<font color=#CD7F32>易安居士',
                        //辛弃疾
                        Grand_xinqiji: '<font color=#CD7F32>天山挂斾',
                        //十六夜野宫
                        Grand_shiliuyeyegong: '<font color=#CD7F32>富家千金',
                        //黑衣麻陶
                        Grand_heiyimatao: '<font color=#CD7F32>黑岩射手',
                        //散华
                        Grand_sanhua: '<font color=#CD7F32>雪舞芳华',
                        //陆郁生
                        Grand_luyusheng: '<font color=#CD7F32>义姑',
                        //符华
                        Grand_fuhua: '<font color=#CD7F32>识之律者',
                        //张嫙
                        Grand_zhangxuan: '<font color=#CD7F32>玉宇嫁蔷',
                        //阮瑀
                        Grand_ruanyu: '<font color=#CD7F32>斐章雅律',
                        //杰克欧
                        Grand_jack_o: '<font color=#CD7F32>华伦泰',
                        //尼禄·克劳狄乌斯(剑)
                        Grand_nilu_kelaodiwusi_saber: '<font color=#CD7F32>蔷薇皇帝',
                        //万年公主
                        Grand_wanniangongzhu: '<font color=#CD7F32>剑心汉胆',
                        //赫拉克勒斯(狂)
                        Grand_helakelesi_basaker: '<font color=#CD7F32>不屈不挠',
                        //鹤(术)
                        Grand_he_caster: '<font color=#CD7F32>天衣无缝',
                        //新建角色
                        //       <font color=#CD7F32>
                    },
                    characterSort: {
                        /*————————————————角色分类————————————————*/
                        Grand: {
                            //英灵殿
                            Grand_yinglingdian: ['Grand_aertuoliya_pandelagong_saber', 'Grand_aertuoliya_pandelagong_caster', 'Grand_ku_qiulin_lancer', 'Grand_kuizhaer_keyateer_rider', 'Grand_enqidu_lancer', 'Grand_nilu_kelaodiwusi_saber', 'Grand_simayi_lainisi_rider', 'Grand_helakelesi_basaker', 'Grand_he_caster'],
                            //自制武将
                            Grand_zizhiwujiang: ['Grand_yifu', 'Grand_yanmoai', 'Grand_luola', 'Grand_weierting', 'Grand_taizaizhi', 'Grand_sufubi', 'Grand_JaneWillow', 'Grand_ling', 'Grand_weierdandi', 'Grand_Wilson', 'Grand_donghaidihuang', 'Grand_sanhua', 'Grand_Cosette', 'Grand_fuhua', 'Grand_yishentaer_avenger'],
                            //群友设计
                            Grand_qunyousheji: ['Grand_zaolaiyouxiang', 'Grand_keernunuosi', 'db_Grand_qiandaitiantao', 'Grand_anjila', 'Grand_kongqirinai', 'Grand_sanliakeman', 'Grand_aierwen', 'Grand_liyang', 'Grand_shiliuyeyegong', 'Grand_heiyimatao', 'Grand_jack_o'],
                            //本体武将
                            Grand_bentiwujiang: ['Grand_zhaoxiang', 'Grand_caomao', 'Grand_gongsunyuan', 'Grand_caoying', 'Grand_guanyinping', 'Grand_shenjiangwei', 'Grand_luyusheng', 'Grand_zhangxuan', 'Grand_ruanyu', 'Grand_wanniangongzhu'],
                            //大宋风雅
                            Grand_dasongfengya: ['Grand_liqingzhao', 'Grand_xinqiji'],
                            //新建角色
                        },
                    },
                    characterReplace: {
                        /*————————————————角色切换————————————————*/
                        //阿尔托莉雅·潘德拉贡(剑)=阿尔托莉雅·潘德拉贡(术)
                        Grand_aertuoliya_pandelagong_saber: ['Grand_aertuoliya_pandelagong_saber', 'Grand_aertuoliya_pandelagong_caster'],
                        //新建角色
                    },
                    skill: {
                        /*————————————————技能代码————————————————*/
                        /*—————————————————物理—————————————————*/
                        Grand_wuli: {
                            //技能名称:物理
                            //技能类型:通用技能
                            //持有角色:千代田桃
                            //技能效果:出牌阶段限一次,你可以进行一次判定.若结果为♥️️️,则你选择一名角色,你与其各回复一点体力,若其体力值为至最大体力值,你重复此流程.若结果为♠️️️,则你选择一名其他角色,你对其造成一点伤害,并摸1张牌,若其死亡,你再摸两张牌并重复此流程
                            audio: 'ext:Grand包/audio/skill:2',
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '是否发动【物理】',
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    if (card.suit == 'heart') return 4;
                                    if (card.suit == 'spade') return 1;
                                    return -1;
                                });
                                ('step 1');
                                if (result.judge == 4) {
                                    event.goto(5);
                                } else if (result.judge == 1) {
                                    event.goto(2);
                                } else if (result.judge == -1) {
                                    event.finish();
                                }
                                ('step 2');
                                player.chooseTarget(get.prompt('Grand_wuli'), '对一名其他角色造成1点伤害,并摸1张牌', lib.filter.notMe).set('ai', function (target) {
                                    var player = _status.event.player;
                                    return get.damageEffect(target, player, player) * (target.hp == 1 ? 2 : 1);
                                });
                                ('step 3');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    player.line(target);
                                    target.damage(1);
                                    player.draw(1);
                                } else event.finish();
                                ('step 4');
                                if (target.isDead()) {
                                    player.draw(2);
                                    event.goto(1);
                                } else event.finish();
                                ('step 5');
                                player
                                    .chooseTarget(get.prompt('Grand_wuli'), '令你与一名角色回复一点体力', function (card, player, target) {
                                        return target.hp < target.maxHp;
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        var delta = target.maxHp - target.hp;
                                        if (get.attitude(player, target) <= 0) return -1;
                                        if (Math.abs(delta) == 1 && get.sgn(delta) == get.sgn(att)) return 3 * Math.abs(att);
                                        if (att > 0 || target.hp > 0) return Math.abs(att);
                                        return -1;
                                    });
                                ('step 6');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    player.line(target, 'green');
                                } else event.finish();
                                ('step 7');
                                target.recover(1);
                                player.recover(1);
                                ('step 8'); //第九步
                                if (target.hp == target.maxHp) event.goto(5);
                                else event.finish();
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                },
                                result: {
                                    player: 1,
                                },
                            },
                        }, //此技能结束
                        /*—————————————————心算—————————————————*/
                        Grand_xinsuan: {
                            //技能名称:心算
                            //技能类型:通用技能
                            //持有角色:早濑优香
                            //技能效果:锁定技,你的【乐不思蜀】和【兵粮寸断】的判定必定失效
                            mod: {
                                judge(player, result) {
                                    if (_status.event.cardname == 'lebu') result.bool = true;
                                    if (_status.event.cardname == 'bingliang') result.bool = true;
                                },
                            },
                        }, //此技能结束
                        /*—————————————————预算—————————————————*/
                        Grand_yusuan: {
                            //技能名称:预算
                            //技能类型:通用技能
                            //持有角色:早濑优香
                            //技能效果:准备阶段,你可以声明0-5之间的一个整数X,获得如下效果直至回合结束:①出牌阶段,当你使用手牌时,若你本回合使用牌的次数不大于X,你摸一张牌.②结束阶段,若你本回合使用牌的次数等于X,你摸5-X张牌
                            audio: 'ext:Grand包/audio/skill:2',
                            marktext: '预算',
                            forced: true,
                            intro: {
                                name: '预算',
                                content: '预算:#',
                            },
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            prompt: '是否发动【预算】',
                            content() {
                                'step 0';
                                var list = [0, 1, 2, 3, 4, 5];
                                player
                                    .chooseControl(list, 'cancel')
                                    .set('ai', function () {
                                        var player = _status.event.player;
                                        if (player.countCards('h') < 3) return list[0];
                                        if (player.countCards('h') == 3) return list[1];
                                        if (player.countCards('h') > 3 && player.countCards('h') <= 5) return list[3];
                                        if (player.countCards('h') > 5 && player.countCards('h') <= 7) return list[4];
                                        if (player.countCards('h') > 7) return list[5];
                                    })
                                    .set('prompt', '预算:请选择一个数字');
                                ('step 1');
                                if (result.control != 'cancel') {
                                    if (!player.storage.Grand_yusuan_use) player.storage.Grand_yusuan_use = 0;
                                    player.storage.Grand_yusuan_use += result.index;
                                    player.addTempSkill('Grand_yusuan_use');
                                    player.markSkill('Grand_yusuan_use');
                                }
                            },
                            ai: {
                                effect: {
                                    player(card, player) {
                                        if (player.storage.Grand_yusuan < 5) {
                                            if (player.countUsed(null, true) == player.storage.Grand_yusuan_use) return 'zeroplayertarget';
                                        } else {
                                            return 1;
                                        }
                                    },
                                },
                            },
                            subSkill: {
                                use: {
                                    //子技能识别名:Grand_yusuan_use
                                    audio: 'Grand_yusuan',
                                    marktext: '预算',
                                    intro: {
                                        name: '预算',
                                        content: '预算:#',
                                    },
                                    charlotte: true,
                                    onremove(player, skill) {
                                        if (player.countUsed(null, true) == player.storage.Grand_yusuan_use) player.draw(5 - player.storage.Grand_yusuan_use);
                                        player.unmarkSkill('Grand_yusuan_use');
                                        delete player.storage.Grand_yusuan_use;
                                    },
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    filter(event, player) {
                                        return player.countUsed(null, true) <= player.storage.Grand_yusuan_use;
                                    },
                                    forced: true,
                                    content() {
                                        player.draw(1);
                                    },
                                }, //子技能use结束
                            },
                        }, //此技能结束
                        /*———————————————桃色(晋)———————————————*/
                        Grand_taose_jin: {
                            //技能名称:桃色晋
                            //技能类型:通用技能,势力技
                            //持有角色:千代田桃
                            //技能效果:锁定技,晋势力技,你区域内的♦️️️牌和♦️️️判定牌均视为♥️️️.当一名角色因『物理』回复体力时,你令其下次造成伤害+1
                            audio: 'ext:Grand包/audio/skill:2',
                            trigger: {
                                global: 'recoverBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.group != 'jin' || event.player.hasSkill('Grand_taose_jin_damage')) return false;
                                return event.getParent(1).name == 'Grand_wuli';
                            },
                            content() {
                                trigger.player.addSkill('Grand_taose_jin_damage');
                            },
                            mod: {
                                suit(card, suit) {
                                    if (suit == 'diamond' && _status.currentPhase.group == 'jin' && _status.currentPhase.name == 'db_Grand_qiandaitiantao') return 'heart';
                                    return suit;
                                },
                            },
                            subSkill: {
                                damage: {
                                    //子技能识别名:Grand_taose_jin_damage
                                    marktext: '桃色♥️️️',
                                    intro: {
                                        name: '桃色♥️️️',
                                        content: '下次造成伤害+1',
                                        markcount() {
                                            return 0;
                                        },
                                    },
                                    mark: true,
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    forced: true,
                                    content() {
                                        trigger.num++;
                                        player.removeMark('Grand_taose_jin');
                                        player.removeSkill('Grand_taose_jin');
                                    },
                                }, //子技能damage结束
                            },
                        }, //此技能结束
                        /*———————————————桃色(群)———————————————*/
                        Grand_taose_qun: {
                            //技能名称:桃色群
                            //技能类型:通用技能,势力技
                            //持有角色:千代田桃
                            //技能效果:锁定技,群势力技,你区域内的♣️️️牌和♣️️️判定牌均视为♠️️️.每当你因『物理』摸一张牌时,你获得1枚<桃色♠️️️>印记.出牌阶段,你可以弃置2枚<桃色♠️️️>印记并对一名其他角色造成一点伤害,若其因此死亡,则你发动一次【物理】
                            audio: 'ext:Grand包/audio/skill:2',
                            marktext: '桃色♠️️️',
                            intro: {
                                name: '桃色♠️️️',
                                content: '已因物理摸#张牌',
                            },
                            prompt: '是否发动【桃色】？对一名角色造成一点伤害',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countMark('Grand_taose_qun') >= 2 && player.group == 'qun';
                            },
                            filterTarget(event, player, target) {
                                return player != target;
                            },
                            content() {
                                'step 0';
                                target.damage(1);
                                player.removeMark('Grand_taose_qun', 2);
                                ('step 1');
                                if (target.isDead()) player.useSkill('Grand_wuli');
                            },
                            mod: {
                                suit(card, suit) {
                                    if (suit == 'club' && _status.currentPhase.group == 'qun') return 'spade';
                                    return suit;
                                },
                            },
                            ai: {
                                order: 8.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                            },
                            group: ['Grand_taose_qun_draw'],
                            subSkill: {
                                draw: {
                                    //子技能识别名:Grand_taose_qun_draw
                                    trigger: {
                                        player: 'gainBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (player.group != 'qun') return false;
                                        return event.getParent(2).name == 'Grand_wuli';
                                    },
                                    content() {
                                        player.addMark('Grand_taose_qun', trigger.cards.length);
                                    },
                                }, //子技能draw结束
                            },
                        }, //此技能结束
                        /*—————————————————狂暴—————————————————*/
                        Grand_kuangbao: {
                            //技能名称:狂暴
                            //技能类型:通用技能
                            //持有角色:萝拉
                            //技能效果:出牌阶段,你可以对自己造成一点火属性伤害并摸一张牌,根据本回合此技能的使用次数执行以下效果:为1:你摸两张牌,本回合手牌上限视为无限.为2:你视为使用一张铁索连环,获得如下效果直到回合结束:①本回合使用牌无距离限制.②结束阶段,你摸等同于你本回合造成伤害数的牌.大于等于3:你选择一名其他角色,你与其各弃置两张牌,其失去一点体力
                            audio: 'ext:Grand包/audio/skill:2',
                            enable: 'phaseUse',
                            prompt: '是否发动【狂暴】',
                            content() {
                                'step 0';
                                player.damage(1, 'fire');
                                player.draw(1);
                                ('step 1');
                                player.addTempSkill('Grand_kuangbao_use');
                                if (!player.storage.Grand_kuangbao_use) player.storage.Grand_kuangbao_use = 0;
                                player.storage.Grand_kuangbao_use++;
                                player.markSkill('Grand_kuangbao_use');
                                ('step 2');
                                var num = player.countSkill('Grand_kuangbao');
                                if (player.isAlive()) {
                                    if (num == 1) {
                                        player.draw(2);
                                    } else if (num == 2) {
                                        player.chooseUseTarget('tiesuo', true);
                                    } else if (num >= 3) {
                                        player.chooseTarget(lib.filter.notMe, true, '选择一名其他角色,你与其各弃置两张牌,其失去一点体力.').set('ai', function (target) {
                                            var player = _status.event.player;
                                            return get.attitude(player, target) <= 0;
                                        });
                                    }
                                }
                                ('step 3');
                                var num = player.countSkill('Grand_kuangbao');
                                if (player.isAlive()) {
                                    if (num >= 3) {
                                        var target = result.targets[0];
                                        target.randomDiscard(2);
                                        player.chooseToDiscard(2, true, 'he');
                                        target.loseHp(1);
                                    }
                                } else event.finish();
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                },
                                result: {
                                    player(player) {
                                        if (player.hp < 2) return -1;
                                        return 1;
                                    },
                                },
                                effect: {
                                    player_use(card, player) {
                                        if (card.name == 'tengjia') return [0, -2];
                                    },
                                },
                            },
                            subSkill: {
                                use: {
                                    //子技能识别名:Grand_kuangbao_use
                                    onremove(player, skill) {
                                        if (player.storage.Grand_kuangbao_use >= 2) player.draw(player.getStat('damage'));
                                        delete player.storage.Grand_kuangbao_use;
                                    },
                                    charlotte: true,
                                    intro: {
                                        content: '本回合使用狂暴次数为#',
                                    },
                                    mod: {
                                        maxHandcard(player, num) {
                                            if (player.storage.Grand_kuangbao_use >= 1) return Infinity;
                                        },
                                        targetInRange(card, player, target, now) {
                                            if (player.storage.Grand_kuangbao_use >= 2) return true;
                                        },
                                    },
                                }, //子技能use结束
                            },
                        }, //此技能结束
                        /*————————————————死灵术————————————————*/
                        Grand_silingshu: {
                            //技能名称:死灵术
                            //技能类型:通用技能
                            //持有角色:科尔努诺斯
                            //技能效果:锁定技,你的手牌上限+2.出牌阶段限一次,你可以从已开启的<死灵术>角色中选择一名,获得其武将牌上的所有技能,并获得等同于其最大体力值的护盾,直至你下次发动『死灵术』.死灵术角色:①丝捷②永恒新娘塞蕾斯.当你第三次发动『死灵术』时,<死灵术>角色中添加[冰霜烈焰琉璃],[死骸骨突袭者];当你第五次发动『死灵术』时,<死灵术>角色中添加[亡街大幽灵].当你失去一名<死灵术>角色附带的全部护盾时,你移除该角色所附带的技能,若其不为丝捷或永恒新娘赛蕾丝,你于<死灵术>角色中移除该角色
                            usable: 1,
                            audio: 'ext:Grand包/audio/skill:2',
                            intro: {
                                content: '本局已使用#次',
                            },
                            prompt: '是否发动【死灵术】',
                            enable: 'phaseUse',
                            derivation: ['Grand_yonghengxinniangsaileisi', 'Grand_sijie', 'Grand_sihaituxizhe', 'Grand_bingshuanglieyanliuli', 'Grand_wangjiedayouling'],
                            content() {
                                'step 0';
                                player.removeMark('Grand_silingshu_hudun', player.countMark('Grand_silingshu_hudun'));
                                if (!player.storage.Grand_silingshu) player.storage.Grand_silingshu = 0;
                                player.storage.Grand_silingshu++;
                                player.markSkill('Grand_silingshu');
                                ('step 1');
                                var skills = ['Grand_yonghengxinniangsaileisi', 'Grand_sijie', 'Grand_sihaituxizhe', 'Grand_bingshuanglieyanliuli', 'Grand_wangjiedayouling'];
                                for (var i = 0; skills.length > i; i++) {
                                    player.removeSkill(skills[i]);
                                }
                                ('step 2');
                                var list = ['Grand_yonghengxinniangsaileisi', 'Grand_sijie'];
                                if (player.storage.Grand_silingshu >= 3) {
                                    if (!player.storage.Grand_bingshuanglieyanliuli) list.push('Grand_bingshuanglieyanliuli');
                                    if (!player.storage.Grand_sihaituxizhe) list.push('Grand_sihaituxizhe');
                                }
                                if (!player.storage.Grand_wangjiedayouling && player.storage.Grand_silingshu >= 5) list.push('Grand_wangjiedayouling');
                                var result = player.chooseButton(['死灵术:请选择一名角色', [list, 'character']]).set('ai', function () {
                                    return list.randomGet();
                                });
                                ('step 3');
                                player.flashAvatar('twhuashen', result.links[0]);
                                player.addSkill(result.links[0]);
                                player.addMark('Grand_silingshu_hudun', lib.character[result.links[0]][2]);
                            },
                            ai: {
                                basic: {
                                    order: 7,
                                },
                                result: {
                                    player(player) {
                                        return 1;
                                    },
                                },
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return (num += 2);
                                },
                            },
                            group: ['Grand_silingshu_hudun'],
                            subSkill: {
                                hudun: {
                                    //子技能识别名:Grand_silingshu_hudun
                                    marktext: '护盾',
                                    intro: {
                                        name: '护盾',
                                        charlotte: true,
                                        content: 'mark',
                                    },
                                    trigger: {
                                        player: 'damageBegin',
                                    },
                                    filter(event, player) {
                                        return player.hasMark('Grand_silingshu_hudun') && event.num > 0;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.removeMark('Grand_silingshu_hudun');
                                        trigger.num--;
                                        ('step 1');
                                        if (trigger.num > 0 && player.countMark('Grand_silingshu_hudun') > 0) {
                                            event.goto(0);
                                        } else if (player.countMark('Grand_silingshu_hudun') <= 0) {
                                            if (player.hasSkill('Grand_wangjiedayouling') && !player.storage.Grand_wangjiedayouling) player.storage.Grand_wangjiedayouling = true;
                                            if (player.hasSkill('Grand_sihaituxizhe') && !player.storage.Grand_sihaituxizhe) player.storage.Grand_sihaituxizhe = true;
                                            if (player.hasSkill('Grand_bingshuanglieyanliuli') && !player.storage.Grand_bingshuanglieyanliuli) player.storage.Grand_bingshuanglieyanliuli = true;
                                            var skills = ['Grand_yonghengxinniangsaileisi', 'Grand_sijie', 'Grand_sihaituxizhe', 'Grand_bingshuanglieyanliuli', 'Grand_wangjiedayouling'];
                                            for (var i = 0; skills.length > i; i++) {
                                                player.removeSkill(skills[i]);
                                            }
                                        }
                                    },
                                }, //子技能hudun结束
                            },
                        }, //此技能结束
                        /*———————————————死骸突袭者————————————————*/
                        Grand_sihaituxizhe: {
                            //技能名称:死骸突袭者
                            //技能类型:衍生技能
                            //持有角色:科尔努诺斯(死骸突袭者)
                            //技能效果:锁定技,你的回合内,当一名角色死亡时,你对所有角色造成一点雷属性伤害
                            audio: 'ext:Grand包/audio/skill:2',
                            intro: {
                                content: '锁定技,你的回合内,当一名角色死亡时,你对所有角色造成一点雷属性伤害',
                            },
                            trigger: {
                                global: 'die',
                            },
                            filter(event, player) {
                                return player == _status.currentPhase;
                            },
                            forced: true,
                            content() {
                                player.flashAvatar('twhuashen', 'Grand_sihaituxizhe');
                                game.countPlayer(function (current) {
                                    current.damage(1, 'thunder');
                                });
                            },
                        },
                        /*———————————————亡街大幽灵———————————————*/
                        Grand_wangjiedayouling: {
                            //技能名称:亡街大幽灵
                            //技能类型:衍生技能
                            //持有角色:科尔努诺斯(亡街大幽灵)
                            //技能效果:出牌阶段限一次,你可以令所有角色的非锁定技失效,直到你的回合结束
                            audio: 'ext:Grand包/audio/skill:2',
                            intro: {
                                content: '出牌阶段限一次,你可以令所有角色的非锁定技失效,直到你的回合结束',
                            },
                            usable: 1,
                            enable: 'phaseUse',
                            prompt: '是否发动【亡街大幽灵】',
                            content() {
                                player.flashAvatar('twhuashen', 'Grand_wangjiedayouling');
                                game.countPlayer(function (current) {
                                    if (current != player) current.addTempSkill('fengyin', 'phaseJieshuBegin');
                                });
                            },
                            ai: {
                                basic: {
                                    order: 10,
                                },
                                result: {
                                    player(player) {
                                        return 10;
                                    },
                                },
                            },
                        }, //此技能结束
                        /*—————————————————丝捷—————————————————*/
                        Grand_sijie: {
                            //技能名称:丝捷
                            //技能类型:衍生技能
                            //持有角色:科尔努诺斯(丝捷)
                            //技能效果:锁定技,你于出牌阶段内造成的伤害+1
                            audio: 'ext:Grand包/audio/skill:2',
                            intro: {
                                //标记内容
                                content: '锁定技,你于出牌阶段内造成的伤害+1',
                            },
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return player == _status.currentPhase;
                            },
                            forced: true,
                            content() {
                                player.flashAvatar('twhuashen', 'Grand_sijie');
                                trigger.num++;
                            },
                        }, //此技能结束
                        /*————————————————冰霜烈焰琉璃——————————————*/
                        Grand_bingshuanglieyanliuli: {
                            //技能名称:冰霜烈焰琉璃
                            //技能类型:衍生技能
                            //持有角色:科尔努诺斯(冰霜烈焰琉璃)
                            //技能效果:出牌阶段限一次,你可以令一名角色弃置三张牌
                            audio: 'ext:Grand包/audio/skill:2',
                            intro: {
                                content: '出牌阶段限一次,你可以令一名角色弃置三张牌',
                            },
                            usable: 1,
                            filterTarget(card, player, target) {
                                //目标筛选
                                if (player == target) return false;
                                return true;
                            },
                            enable: 'phaseUse',
                            prompt: '是否发动【冰霜烈焰琉璃】',
                            content() {
                                //技能效果
                                player.flashAvatar('twhuashen', 'Grand_bingshuanglieyanliuli');
                                target.randomDiscard(3);
                            },
                            ai: {
                                order: 8.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                            },
                        }, //此技能结束
                        /*——————————————永恒新娘塞蕾丝——————————————*/
                        Grand_yonghengxinniangsaileisi: {
                            //技能名称:永恒新娘塞蕾丝
                            //技能类型:衍生技能
                            //持有角色:科尔努诺斯(永恒新娘塞蕾丝)
                            //技能效果:无效果
                            audio: 'ext:Grand包/audio/skill:2',
                            intro: {
                                content: '无效果',
                            },
                            forced: true,
                            trigger: {
                                global: 'damage',
                            },
                            content() {
                                player.flashAvatar('twhuashen', 'Grand_yonghengxinniangsaileisi');
                            },
                        }, //此技能结束
                        /*————————————————死海文书————————————————*/
                        Grand_sihaiwenshu: {
                            //技能名称:死海文书
                            //技能类型:通用技能
                            //持有角色:伊芙
                            //技能效果:锁定技,当一名其他角色使用一张非转化的基本牌或锦囊牌时,你将牌堆顶的一张牌置于武将牌上,称为<死海文书>.你的手牌上限增加你武将牌上<死海文书>的数量.若你的<死海文书>同时满足以下条件:①花色包含:<♥️️️>,<♦️️️>,<♠️️️>,<♣️️️>.②种类包含:<基本牌>,<锦囊牌>,<装备牌>.你移除<死海文书>中最先满足以上条件的牌,并将其添加至你的手牌
                            audio: 'ext:Grand包/audio/skill:2',
                            forced: true,
                            trigger: {
                                global: 'useCard',
                            },
                            filter(event, player) {
                                return get.type(event.card) != 'equip' && event.player != player;
                            },
                            content() {
                                'step 0';
                                player.addToExpansion(get.cards(), 'gain2').gaintag.add('Grand_sihaiwenshu');
                                ('step 1');
                                var list = [],
                                    discard = [],
                                    cards = player.getExpansions('Grand_sihaiwenshu');
                                for (var i = 0; i < cards.length; i++) {
                                    var card = cards[i],
                                        suit = card.suit,
                                        type = get.type2(card);
                                    if (!list.includes(suit)) {
                                        list.push(suit);
                                        discard.push(card);
                                    }
                                    if (!list.includes(type)) {
                                        list.push(type);
                                        for (var j = 0; j < discard.length; j++) {
                                            if (!discard.includes(card)) {
                                                discard.push(card);
                                            }
                                        }
                                    }
                                }
                                if (list.length == 7) {
                                    ui.backgroundMusic.volume = 0;
                                    var audio = game.playAudio('../extension/Grand包/audio/expand/Grand_sihaiwenshu.mp3');
                                    audio.addEventListener('ended', function () {
                                        ui.backgroundMusic.volume = 0.3;
                                    });
                                    player.gain(discard, 'give', player, 'bySlef');
                                    player.showCards(discard, '死海文书');
                                }
                            },
                            marktext: '文书',
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return (num += player.getExpansions('Grand_sihaiwenshu').length);
                                },
                            },
                            ai: {
                                noe: true,
                                reverseEquip: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) return [1, 3];
                                    },
                                },
                            },
                        }, //此技能结束
                        /*—————————————————气场—————————————————*/
                        Grand_qichang: {
                            //技能名称:气场
                            //技能类型:通用技能
                            //持有角色:空崎日奈
                            //技能效果:主公技,每回合限一次,当一名<吴>势力角色受到伤害时,你可以弃置伤害来源的两张牌
                            audio: 'ext:Grand包/audio/skill:2',
                            zhuSkill: true,
                            usable: 1,
                            trigger: {
                                global: 'damageEnd',
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            prompt: '是否发动【气场】',
                            filter(event, player) {
                                return event.player.group == 'wu' && player.hasZhuSkill('Grand_qichang', event.player);
                            },
                            content() {
                                'step 0';
                                trigger.source.chooseToDiscard(2, 'he', true).set('ai', function (card) {
                                    if (card.name == 'tao') return -10;
                                    if (card.name == 'jiu' && _status.event.player.hp == 1) return -10;
                                    return get.unuseful(card) + 2.5 * (5 - get.owner(card).hp);
                                });
                            },
                        },
                        /*—————————————————毁灭—————————————————*/
                        Grand_huimie: {
                            //技能名称:毁灭
                            //技能类型:通用技能
                            //持有角色:空崎日奈
                            //技能效果:锁定技,你的【杀】可以且必须指定三名角色(若场上除你以外的存活角色低于3则须指定全部角色),且你使用【杀】无次数和距离限制
                            audio: 'ext:Grand包/audio/skill:2',
                            firstDo: true,
                            trigger: {
                                player: 'useCard1',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.audioed && event.card.name == 'sha' && player.countUsed('sha', true) > 1 && event.parent.type == 'phase';
                            },
                            content() {
                                trigger.audioed = true;
                            },
                            mod: {
                                targetInRange(card, player, target, now) {
                                    if (card.name == 'sha') return true;
                                },
                                selectTarget(card, player, range) {
                                    if (card.name == 'sha') {
                                        if (game.players.length > 4) {
                                            if (range[1] != 3) range[1] = 3;
                                            range[0] = 3;
                                            if (range[0] != range[1]) return false;
                                        } else {
                                            if (range[1] != -1) range[1] = -1;
                                            range[0] = -1;
                                            if (range[0] != range[1]) return false;
                                        }
                                    }
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                            },
                            ai: {
                                skillTagFilter(player, tag, arg) {
                                    if (arg && arg.name == 'sha') return true;
                                    return false;
                                },
                            },
                        }, //此技能结束
                        /*—————————————————觉悟—————————————————*/
                        Grand_juewu: {
                            //技能名称:觉悟
                            //技能类型:通用技能
                            //持有角色:空崎日奈
                            //技能效果:出牌阶段限一次,你可以弃一张牌,视为使用一张【酒】
                            audio: 'ext:Grand包/audio/skill:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: true,
                            check(card) {
                                return 8 - get.value(card);
                            },
                            prompt: '是否发动【觉悟】',
                            filter(event, player) {
                                if (player.countCards('he') < 1) {
                                    return false;
                                }
                                return event.filterCard({ name: 'jiu' }, player, event);
                            },
                            position: 'he',
                            content() {
                                player.chooseUseTarget('jiu', true);
                            },
                            ai: {
                                order: 5,
                                result: {
                                    player(player) {
                                        if (_status.event.parent.name == 'phaseUse') {
                                            if (player.countCards('h', 'jiu') > 0) return 0;
                                            if (player.countCards('h', 'sha') > 1) return 0;
                                            if (!player.countCards('h', 'sha')) return 0;
                                            var targets = [];
                                            var target;
                                            var players = game.filterPlayer();
                                            for (var i = 0; i < players.length; i++) {
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
                        }, //此技能结束
                        /*————————————————真理之书————————————————*/
                        Grand_zhenlizhishu: {
                            //技能名称:真理之书
                            //技能类型:通用技能
                            //持有角色:安吉拉
                            //技能效果:当一名角色濒死时,若你未因其发动过『真理之书』,则你可以选择其武将牌上的一个技能,并选择一名角色获得此技能.若该角色不为你,你回复一点体力(若你未受伤,则改为加1点体力上限)并摸x张牌(x为你本局游戏内发动『真理之书』的次数)
                            audio: 'ext:Grand包/audio/skill:2',
                            trigger: {
                                global: 'dying',
                            },
                            intro: {
                                content: '本局游戏已发动#次',
                            },
                            filter(event, player) {
                                return !player.storage.Grand_zhenlizhishu1 || !player.storage.Grand_zhenlizhishu1.includes(event.player);
                            },
                            prompt: '是否发动【真理之书】',
                            content() {
                                'step 0';
                                if (!player.storage.Grand_zhenlizhishu) player.storage.Grand_zhenlizhishu = 0;
                                if (!player.storage.Grand_zhenlizhishu1) player.storage.Grand_zhenlizhishu1 = [];
                                player.storage.Grand_zhenlizhishu1.add(trigger.player);
                                ('step 1');
                                var target = trigger.player;
                                var skills = [];
                                if (lib.character[target.name]) skills.addArray(lib.character[target.name][3]);
                                if (lib.character[target.name1]) skills.addArray(lib.character[target.name1][3]);
                                if (lib.character[target.name2]) skills.addArray(lib.character[target.name2][3]);
                                if (skills.length) {
                                    player
                                        .chooseControl(skills.concat('cancel2'))
                                        .set('prompt', '『真理之书』')
                                        .set('prompt2', '选择一项技能')
                                        .set('ai', function () {
                                            var o = 0;
                                            for (var i = 0; game.filterPlayer().length > i; i++) {
                                                if (game.filterPlayer()[i].hasSkill('Grand_zhenlizhishu')) o++;
                                            }
                                            if (o < 2 && skills.includes('Grand_zhenlizhishu')) {
                                                return 'Grand_zhenlizhishu';
                                            }
                                            return skills.randomGet();
                                        });
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.control && result.control != 'cancel2') {
                                    game.log(player, '选择了', get.translation(result.control));
                                    player.storage.Grand_zhenlizhishu++;
                                    player.markSkill('Grand_zhenlizhishu');
                                    player.chooseTarget('选择一名角色获得【' + get.translation(result.control) + '】', true, lib.filter).set('ai', function (target) {
                                        if (target.hasSkill(result.control)) return -1;
                                        return get.attitude(_status.event.player, target);
                                    });
                                    event.skill = result.control;
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                var num = player.storage.Grand_zhenlizhishu;
                                var target = result.targets[0];
                                player.line(target);
                                target.popup(event.skill, 'thunder');
                                game.log(target, '获得了技能', '【' + get.translation(event.skill) + '】');
                                target.addSkill(event.skill);
                                if (target != player) {
                                    player.draw(num);
                                    if (player.isDamaged()) {
                                        player.recover(1);
                                    } else player.gainMaxHp(1);
                                    //
                                }
                            },
                        }, //此技能结束
                        /*————————————————TT2协议————————————————*/
                        Grand_tt2xieyi: {
                            //技能名称:TT2协议
                            //技能类型:通用技能
                            //持有角色:安吉拉
                            //技能效果:锁定技,当你使用或打出牌时,若你本局游戏内使用或打出过的牌数和为3的倍数,你摸一张牌
                            intro: {
                                content(num) {
                                    var str = '';
                                    str += '<center><br>还需使用 [ ';
                                    str += 3 - (num % 3);
                                    str += ' ] 张牌';
                                    return str;
                                },
                            },
                            popup: false, //是否显示技能提示:否
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            content() {
                                player.markSkill('Grand_tt2xieyi');
                                var num = player.getAllHistory('useCard').length + player.getAllHistory('respond').length;
                                if (num % 3 == 0) {
                                    player.draw(1);
                                    player.popup('Grand_tt2xieyi');
                                    game.playAudio('../extension/Grand包/audio/expand/Grand_tt2xieyi.mp3');
                                }
                                if (!player.storage.Grand_tt2xieyi) player.storage.Grand_tt2xieyi = 0;
                                player.storage.Grand_tt2xieyi++;
                            },
                        }, //此技能结束
                        /*————————————————月灵髓液————————————————*/
                        Grand_yuelingsuiye: {
                            //技能名称:月灵髓液
                            //技能类型:通用技能
                            //持有角色:司马懿(莱妮丝)(骑)
                            //技能效果:锁定技,当你的手牌数大于你的手牌上限时,你将一张手牌置于武将牌上,称为<月灵髓液>.你的手牌上限+X(X为<月灵髓液>的数量).当你受到伤害时,你摸一张牌.摸牌阶段,你的额定摸牌数+1
                            audio: 'ext:Grand包/audio/skill:2',
                            marktext: '月灵髓液',
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            trigger: {
                                player: ['changeHp', 'gainMaxHpAfter', 'loseMaxHpAfter', 'enterGame'],
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'phaseBefore'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getHandcardLimit() < player.countCards('h');
                            },
                            content() {
                                'step 0';
                                var num = player.getHandcardLimit() - player.countCards('h');
                                event.count = num;
                                ('step 1');
                                event.count--;
                                ('step 2');
                                if (player.getHandcardLimit() < player.countCards('h')) {
                                    player.chooseCard('将一张手牌置于武将牌上作为<月灵髓液>', true);
                                } else {
                                    event.goto(4);
                                }
                                ('step 3');
                                if (result.cards?.length) {
                                    player.addToExpansion(result.cards[0], player, 'give').gaintag.add('Grand_yuelingsuiye');
                                }
                                ('step 4');
                                if (event.count > 0) {
                                    event.goto(1);
                                } else {
                                    event.finish();
                                }
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.getExpansions('Grand_yuelingsuiye').length;
                                },
                            },
                            group: ['Grand_yuelingsuiye_damagedraw', 'Grand_yuelingsuiye_drawbegin'],
                            subSkill: {
                                damagedraw: {
                                    //子技能识别名:Grand_yuelingsuiye_damagedraw
                                    audio: 'Grand_yuelingsuiye',
                                    trigger: {
                                        player: 'damageBegin',
                                    },
                                    forced: true,
                                    content() {
                                        player.draw(1);
                                    },
                                    ai: {
                                        nokeep: true,
                                        maixie: true,
                                        maixie_hp: true,
                                        effect: {
                                            target(card, player, target) {
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
                                                    if (target.hp >= 4) return [1, num * 2];
                                                    if (target.hp == 3) return [1, num * 1.5];
                                                    if (target.hp == 2) return [1, num * 0.5];
                                                }
                                            },
                                        },
                                    },
                                }, //子技能damagedraw结束
                                drawbegin: {
                                    //子技能识别名:Grand_yuelingsuiye_drawbegin
                                    trigger: {
                                        player: 'phaseDrawBegin2',
                                    },
                                    forced: true,
                                    content() {
                                        trigger.num++;
                                    },
                                }, //子技能drawbegin结束
                            },
                        }, //此技能结束
                        /*———————————————宣帝的指挥———————————————*/
                        Grand_xuandidezhihui: {
                            //技能名称:宣帝的指挥
                            //技能类型:通用技能
                            //持有角色:司马懿(莱妮丝)(骑)
                            //技能效果:出牌阶段</b> 你可以移去一张<月灵髓液>并将手牌摸至你的手牌上限
                            audio: 'ext:Grand包/audio/skill:2',
                            prompt: '出牌阶段,你可以移去一张<月灵髓液>并将手牌摸至你的手牌上限',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.getHandcardLimit() - 1 > player.countCards('h') && player.getExpansions('Grand_yuelingsuiye').length;
                            },
                            content() {
                                'step 0';
                                player.chooseCardButton('弃置一枚月灵髓液,并将手牌摸至' + (player.getHandcardLimit() - 1), player.getExpansions('Grand_yuelingsuiye'), true);
                                ('step 1');
                                if (result.links?.length) {
                                    player.loseToDiscardpile(result.links);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                player.draw(player.getHandcardLimit() - player.countCards('h'));
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                },
                                result: {
                                    player(player) {
                                        if (player.getHandcardLimit() - 1 <= player.countCards('h')) return -1;
                                        return 1;
                                    },
                                },
                            },
                        }, //此技能结束
                        /*————————————————人间失格————————————————*/
                        Grand_renjianshige: {
                            //技能名称:人间失格
                            //技能类型:通用技能
                            //持有角色:太宰治
                            //技能效果:当你成为一名角色使用【杀】或非延时锦囊的目标时,你可以将一张牌置于牌堆顶,并选择一名除你以外的其他角色,令其展示一张牌,若:①两张牌的类型相同,你获得其展示的牌②两张牌的花色相同,你与其各从牌堆底摸一张牌③两张牌的点数相同,你弃置目标来源的一张牌.若满足的条件数量:①≥2:此牌对你无效②≤2:其成为此牌的额外目标③均不满足:你摸一张牌",
                            audio: 'ext:Grand包/audio/skill:2',
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            prompt: '是否发动【人间失格】',
                            filter(event, player) {
                                if (!player.countCards('he')) return false;
                                if (!event.targets.includes(player)) return false;
                                return event.card.name == 'sha' || get.type(event.card) == 'trick';
                            },
                            content() {
                                'step 0';
                                player.chooseCard('he', '请将一张牌置于牌堆顶').set('ai', function (card) {
                                    var player = _status.event.player;
                                    if (
                                        !game.filterPlayer(function (current) {
                                            var player = _status.event.player;
                                            return ![player, trigger.player].includes(current) && current.countCards('h');
                                        }).length
                                    )
                                        return -1;
                                    if (get.effect(player, trigger.card, trigger.player, player) > 0 && !player.hasFriend()) return -1;
                                    if (card.name == 'du') return 10;
                                    if (player.hp == 1 && ['tao', 'jiu'].includes(card.name)) return 10 - get.value(card);
                                    return 8 - get.value(card);
                                });
                                ('step 1');
                                if (result.cards?.length) {
                                    var card = result.cards[0];
                                    player.lose(card, ui.cardPile, 'visible', 'insert');
                                    player.$throw(card, 1000);
                                    game.log(player, '将', card, '置于牌堆顶');
                                    event.map = {
                                        type: get.type(card),
                                        suit: card.suit,
                                        number: card.number || 0,
                                    };
                                    player
                                        .chooseTarget('令一名其他角色展示手牌', function (card, player, target) {
                                            return target != player && target.countCards('h');
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            var att = get.attitude(player, target);
                                            if (att == 0) att = -Math.floor(Math.random() * 10 + 1);
                                            if (!player.hasFriend()) {
                                                if (att < 0 && get.effect(target, trigger.card) <= 0) return -1;
                                                return target.countCards('h');
                                            }
                                            if (att < 0 && get.tag(trigger.card, 'damage')) att -= 7;
                                            if (att > 0 && get.effect(player, trigger.card) > 0 && get.effect(target, trigger.card) > 0) att = -20 - (target.isZhu ? 5 : 0);
                                            if (att > 0 && target.countCards('h') > 4 && target.hp > 1) att = -att;
                                            return -att;
                                        });
                                } else event.finish();
                                ('step 2');
                                if (result.targets?.length) {
                                    event.target = result.targets[0];
                                    event.count = 0;
                                    event.target.chooseCard('h', '请展示一张牌', true).set('ai', function (card) {
                                        var target = _status.event.player;
                                        var att = get.attitude(target, player);
                                        var val = 6 - get.value(card);
                                        if (att > 0) {
                                            if (['wugu', 'wuzhong', 'taoyuan'].includes(trigger.card.name) || get.effect(player, trigger.card, player, player) > 0) {
                                                if (get.type(card, target) != event.map.type) val += 3;
                                                if (card.suit != event.map.suit) val += 3;
                                                if (card.number != event.map.number) val += 3;
                                                return val;
                                            } else {
                                                if (get.type(card) == event.map.type) val += 3;
                                                if (card.suit == event.map.suit) val += 3;
                                                if (card.number == event.map.number) val += 3;
                                                return val;
                                            }
                                        } else {
                                            if (get.type(card, target) != event.map.type) val += 3;
                                            if (card.suit != event.map.suit) val += 3;
                                            if (card.number != event.map.number) val += 3;
                                            return val;
                                        }
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                event.card = result.cards[0];
                                target.showCards(event.card);
                                ('step 4');
                                if (get.type(event.card) == event.map.type) {
                                    game.log('展示牌类型相同');
                                    player.gain(event.card);
                                    game.log(player, '获得了', event.card);
                                    event.count++;
                                } else {
                                    game.log('展示牌类型不同');
                                }
                                if (event.card.suit == event.map.suit) {
                                    game.log('展示牌花色相同');
                                    player.draw('bottom');
                                    event.target.draw('bottom');
                                    event.count++;
                                } else {
                                    game.log('展示牌花色不同');
                                }
                                if (event.card.number == event.map.number) {
                                    game.log('展示牌点数相同');
                                    player.discardPlayerCard(trigger.player, 'hej', true);
                                    event.count++;
                                } else {
                                    game.log('展示牌点数不同');
                                }
                                ('step 5');
                                if (event.count >= 2) {
                                    trigger.parent.excluded.add(player);
                                    game.log(trigger.card, '对', player, '无效');
                                }
                                if (event.count <= 2) {
                                    trigger.parent.targets.add(target);
                                    trigger.parent.triggeredTargets3.add(target);
                                    game.log(target, '成为了', trigger.card, '的额外目标');
                                }
                                if (event.count == 0) {
                                    player.draw(1);
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (target.countCards('h')) return [1, 0.7];
                                    },
                                },
                            },
                        }, //此技能结束
                        /*————————————————手提箱————————————————*/
                        Grand_shoutixiang: {
                            //技能名称:手提箱
                            //技能类型:通用技能
                            //持有角色:维尔汀
                            //技能效果:锁定技,结束阶段,你将所有存活角色的当前体力值记录在『手提箱』内.准备阶段,你将所有存活角色的当前体力值变为『手提箱』内记录的值
                            //以下技能来自周宣的子技能内容,看不懂.
                            audio: 'ext:Grand包/audio/skill:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            charlotte: true,
                            forced: true,
                            filter(event, player) {
                                return player.storage.Grand_shoutixiang && player.storage.Grand_shoutixiang.length;
                            },
                            content() {
                                var storage = player.storage.Grand_shoutixiang;
                                for (var i = 0; i < storage[0].length; i++) {
                                    var target = storage[0][i];
                                    if (target && target.isIn()) {
                                        if (target.hp != storage[1][i]) {
                                            game.log(target, '将体力从', get.cnNumber(target.hp, true), '改为', get.cnNumber(storage[1][i], true));
                                            target.changeHp(storage[1][i] - target.hp)._triggered = null;
                                        }
                                    }
                                }
                                delete player.storage.Grand_shoutixiang;
                                player.unmarkSkill('Grand_shoutixiang');
                            },
                            marktext: '手提箱',
                            intro: {
                                markcount(storage, player) {
                                    if (!storage || !storage.length) return 0;
                                    return storage[0].length;
                                },
                                content(storage, player) {
                                    if (!storage || !storage.length) return '无信息';
                                    var str = '手提箱记录的体力值:<br>';
                                    for (var i = 0; i < storage[0].length; i++) {
                                        var str2 = get.translation(storage[0][i]) + ':' + storage[1][i];
                                        if (!storage[0][i].isIn()) str2 = '<span style="opacity:0.5">' + str2 + '(已故)</span>';
                                        str += '<li>' + str2 + '</li>';
                                    }
                                    return str;
                                },
                            },
                            group: ['Grand_shoutixiang_jieshu'],
                            //群组技能:Grand_shoutixiang的子技能jieshu
                            subSkill: {
                                jieshu: {
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    _priority: 10,
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var targets = game.filterPlayer();
                                        if (!player.storage.Grand_shoutixiang) player.storage.Grand_shoutixiang = [[], []];
                                        for (var targettx of targets) {
                                            player.storage.Grand_shoutixiang[0].push(targettx);
                                            player.storage.Grand_shoutixiang[1].push(targettx.hp);
                                        }
                                        player.markSkill('Grand_shoutixiang');
                                    },
                                },
                            },
                        }, //此技能结束
                        /*———————————————于暴雨中行走———————————————*/
                        Grand_yubaoyuzhongxingzou: {
                            //技能名称:于暴雨中行走
                            //技能类型:通用技能
                            //持有角色:维尔汀
                            //技能效果:每回合限一次,当一名角色使用【杀】指定一名角色为目标时,你可以视为对目标角色使用一张无距离限制的【杀】.若此【杀】造成了伤害,你摸一张牌
                            audio: 'ext:Grand包/audio/skill:2',
                            trigger: {
                                global: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return event.card.name == 'sha';
                            },
                            usable: 1,
                            check(event, player) {
                                if (get.attitude(player, event.player) < 0) return false;
                                return get.attitude(player, event.target) <= 0;
                            },
                            prompt: '是否发动【于暴雨中行走】',
                            prompt2(event, player) {
                                return '是否视为对' + get.translation(event.target) + '使用一张无距离限制的【杀】';
                            },
                            content() {
                                'step 0';
                                player.useCard({ name: 'sha' }, trigger.target, false);
                                ('step 1');
                                if (
                                    player.hasHistory('sourceDamage', function (evt) {
                                        var card = evt.card;
                                        if (!card || card.name != 'sha') return false;
                                        var evtx = evt.getParent('useCard');
                                        return evtx.card == card && evtx.parent == event;
                                    })
                                ) {
                                    player.draw(1);
                                }
                            },
                        }, //此技能结束
                        /*—————————————————往世—————————————————*/
                        Grand_wangshi: {
                            //技能名称:往世
                            //技能类型:通用技能
                            //持有角色:阎魔爱
                            //技能效果:锁定技,游戏开始,你将牌堆顶的三张牌置于武将牌上,称为<阴世牌>,你的手牌区内的牌称为<阳世牌>.你可以如手牌一样使用或打出<阴世牌>.当你使用或打出<阳/阴世牌>时,你摸一张<阴/阳世牌>.当你于回合内使用或打出<阴世牌>时,你失去一点体力;当你于回合外使用或打出<阳世牌>时,你回复一点体力.
                            audio: 'ext:Grand包/audio/skill:2',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            prompt: '是否发动【往世】',
                            filter(event, player) {
                                return player.hasCard((card) => card.hasGaintag('Grand_wangshi_yin'), 'x') && !event.Grand_wangshi;
                            },
                            delay: false,
                            log: false,
                            hiddenCard(player, name) {
                                var cards = player.getExpansions('Grand_wangshi_yin');
                                return _status.currentPhase != player && cards.filter((i) => i.name == name).length >= 1;
                            },
                            onremove(player, skill) {
                                var cards = [];
                                cards.addArray(player.getExpansions('Grand_wangshi_yin'));
                                cards.addArray(player.getCards('s', (card) => card.hasGaintag('阴世')));
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            content() {
                                var evt = event.getParent(2);
                                evt.goto(0);
                                evt.set('Grand_wangshi', true);
                                player.addSkill('Grand_wangshi_uninit');
                                var cards = player.getExpansions('Grand_wangshi_yin');
                                var next = player.loseToSpecial(cards, '阴世');
                                next._triggered = null;
                                next.visible = true;
                                player.storage.Grand_wangshi_yin = true;
                            },
                            intro: {
                                mark(dialog, storage, player) {
                                    dialog.addAuto(
                                        player.getCards('s', function (card) {
                                            return card.hasGaintag('阴世');
                                        })
                                    );
                                },
                                markcount(storage, player) {
                                    return player.getCards('s', function (card) {
                                        return card.hasGaintag('阴世');
                                    }).length;
                                },
                                onunmark(storage, player) {
                                    var cards = player.getCards('s', function (card) {
                                        return card.hasGaintag('阴世');
                                    });
                                    if (cards.length) {
                                        player.lose(cards, ui.discardPile);
                                        player.$throw(cards, 1000);
                                        game.log(cards, '进入了弃牌堆');
                                    }
                                },
                            },
                            ai: {
                                order: 99,
                                result: {
                                    player: 1,
                                },
                            },
                            group: ['Grand_wangshi_init', 'Grand_wangshi_draw', 'Grand_wangshi_yin', 'Grand_wangshi_mark'],
                            subSkill: {
                                mark: {
                                    trigger: {
                                        player: 'gainBegin',
                                    },
                                    forced: true,
                                    popup: false,
                                    silent: true,
                                    lastDo: true,
                                    content() {
                                        trigger.gaintag.add('阳世');
                                    },
                                },
                                yin: {
                                    marktext: '阴世',
                                    intro: {
                                        name: '阴世',
                                        content: 'expansion',
                                        markcount: 'expansion',
                                    },
                                },
                                uninit: {
                                    trigger: {
                                        player: ['useCard1', 'respond', 'chooseToUseEnd', 'chooseTorRspondEnd'],
                                    },
                                    forced: true,
                                    silent: true,
                                    _priority: 11,
                                    delay: false,
                                    charlotte: true,
                                    filter(event, player) {
                                        return player.hasCard((card) => card.hasGaintag('阴世'), 's');
                                    },
                                    content() {
                                        var cards = player.getCards('s', (card) => card.hasGaintag('阴世'));
                                        delete player.storage.Grand_wangshi;
                                        player.addToExpansion(cards).gaintag.add('Grand_wangshi_yin')._triggered = null;
                                    },
                                    popup: false,
                                },
                                draw: {
                                    trigger: {
                                        player: ['useCard', 'respond'],
                                    },
                                    forced: true,
                                    delay: false,
                                    filter(event, player) {
                                        return player.hasHistory('lose', function (evt) {
                                            if (evt.parent != event) return false;
                                            for (var i of evt.ss) {
                                                var id = i.cardid;
                                                if (evt.gaintag_map && evt.gaintag_map[id] && evt.gaintag_map[id].includes('阴世')) return true;
                                            }
                                            for (var i of evt.xs) {
                                                var id = i.cardid;
                                                if (evt.gaintag_map && evt.gaintag_map[id] && evt.gaintag_map[id].includes('Grand_wangshi_yin')) return true;
                                            }
                                            if (evt.hs && evt.hs.length >= 1) return true;
                                            return false;
                                        });
                                    },
                                    content() {
                                        if (
                                            player.hasHistory('lose', function (evt) {
                                                if (evt.parent != trigger) return false;
                                                if (evt.hs && evt.hs.length >= 1) return true;
                                                return false;
                                            })
                                        ) {
                                            var cards = get.cards();
                                            player.addToExpansion(cards, 'gain2').gaintag.add('Grand_wangshi_yin');
                                            if (player != _status.currentPhase) player.recover(1);
                                            if (player.storage.Grand_wangshi_yin) {
                                                var next = player.loseToSpecial(cards, '阴世');
                                                next.visible = true;
                                                next._triggered = null;
                                            }
                                        }
                                        if (
                                            player.hasHistory('lose', function (evt) {
                                                if (evt.parent != trigger) return false;
                                                for (var i of evt.ss) {
                                                    var id = i.cardid;
                                                    if (evt.gaintag_map && evt.gaintag_map[id] && evt.gaintag_map[id].includes('阴世')) return true;
                                                }
                                                for (var i of evt.xs) {
                                                    var id = i.cardid;
                                                    if (evt.gaintag_map && evt.gaintag_map[id] && evt.gaintag_map[id].includes('Grand_wangshi_yin')) return true;
                                                }
                                                return false;
                                            })
                                        ) {
                                            player.draw();
                                            if (player == _status.currentPhase) player.loseHp(1);
                                        }
                                    },
                                },
                                init: {
                                    trigger: {
                                        global: 'phaseBefore',
                                        player: 'enterGame',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.name != 'phase' || game.phaseNumber == 0;
                                    },
                                    content() {
                                        var hs = player.getCards('h');
                                        if (hs.length) player.addGaintag(hs, '阳世');
                                        var cards = get.cards(3);
                                        player.addToExpansion(cards, 'gain2').gaintag.add('Grand_wangshi_yin');
                                        if (player.storage.Grand_wangshi) {
                                            var next = player.loseToSpecial(cards, '阴世');
                                            next.visible = true;
                                            next._triggered = null;
                                        }
                                    },
                                },
                            },
                        }, //此技能结束
                        /*—————————————————往生—————————————————*/
                        Grand_wangsheng: {
                            //技能名称:往生
                            //技能类型:通用技能
                            //持有角色:阎魔爱
                            //技能效果:准备阶段,你可以任意调换<阴世牌>与<阳世牌>
                            audio: 'ext:Grand包/audio/skill:2',
                            prompt: '是否发动【往生】',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return player.hasCard((card) => card.hasGaintag('Grand_wangshi_yin'), 'x') && player.countCards('h');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var cards = player.getExpansions('Grand_wangshi_yin');
                                var next = player.chooseToMove('往生:是否更换阴世牌与阳世牌？');
                                next.set('list', [
                                    ['阴世牌', cards, 'Grand_wangsheng_tag1'],
                                    ['阳世牌', player.getCards('h'), 'Grand_wangsheng_tag'],
                                ]);
                                next.set('filterMove', function (from, to) {
                                    return typeof to != 'number';
                                });
                                next.set('processAI', function (list) {
                                    var player = _status.event.player,
                                        cards = list[0][1].concat(list[1][1]).sort(function (a, b) {
                                            var name = a.name;
                                            var name2 = b.name;
                                            var map = {
                                                sha: 1,
                                                shan: 2,
                                                tao: 3,
                                                wuxie: 4,
                                            };
                                            var num1 = map[name] || 0.5;
                                            var num2 = map[name2] || 0.5;
                                            return num2 - num1;
                                        }),
                                        cards2 = cards.splice(0, player.getExpansions('Grand_wangshi_yin').length);
                                    return [cards2, cards];
                                });
                                ('step 1');
                                if (result.bool) {
                                    var pushs = result.moved[0],
                                        gains = result.moved[1];
                                    pushs.removeArray(player.getExpansions('Grand_wangshi_yin'));
                                    gains.removeArray(player.getCards('h'));
                                    if (!pushs.length || pushs.length != gains.length) return;
                                    player.addToExpansion(pushs, player, 'give').gaintag.add('Grand_wangshi_yin');
                                    player.gain(gains, 'give', player);
                                }
                            },
                            subSkill: {
                                tag: {
                                    name: '阳世牌',
                                },
                                tag1: {
                                    name: '阴世牌',
                                },
                            },
                        }, //此技能结束
                        /*————————————————魔放红————————————————*/
                        Grand_mofang_hong: {
                            //技能名:魔放红
                            //技能类型:通用技能
                            //持有角色:****
                            //技能效果:锁定技,出牌阶段开始时,你从牌堆获得一张基本牌
                            audio: 'ext:Grand包/audio/skill:2',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var card = get.cardPile(function (card) {
                                    if (get.type(card) == 'basic') return true;
                                    return false;
                                }, 'cardPile');
                                player.gain(card, 'gain2');
                            },
                        }, //此技能结束
                        /*————————————————魔放绿————————————————*/
                        Grand_mofang_lv: {
                            //技能名:魔放绿
                            //技能类型:通用技能
                            //持有角色:****
                            //技能效果:锁定技,结束阶段,你从牌堆获得一张基本牌
                            audio: 'ext:Grand包/audio/skill:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var card = get.cardPile(function (card) {
                                    if (get.type(card) == 'basic') return true;
                                    return false; //否则无效
                                }, 'cardPile');
                                player.gain(card, 'gain2');
                            },
                        }, //此技能结束
                        /*————————————————魔放蓝————————————————*/
                        Grand_mofang_lan: {
                            //技能名:魔放蓝
                            //技能类型:通用技能
                            //持有角色:****
                            //技能效果:锁定技,摸牌阶段,你少摸一张牌,从牌堆获得一张锦囊牌
                            audio: 'ext:Grand包/audio/skill:2',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                trigger.num--;
                                ('step 1');
                                var card = get.cardPile(function (card) {
                                    if (get.type(card) == 'trick') return true;
                                    return false;
                                }, 'cardPile');
                                player.gain(card, 'gain2');
                            },
                        }, //此技能结束
                        /*————————————————龙之炉心————————————————*/
                        Grand_longzhiluxin: {
                            //技能名:龙之炉心
                            //技能类型:固有技能
                            //持有角色:阿尔托莉雅·潘德拉贡(剑)
                            //技能效果:锁定技,当你受到无属性伤害时,你免疫之,从以下选项中选择一项:①受到一点火属性伤害并从牌堆获得一张锦囊牌;②失去一点体力并从牌堆获得一张基本牌
                            audio: 'ext:Grand包/audio/skill:2',
                            trigger: {
                                player: 'damageBegin',
                            },
                            filter(event, player) {
                                return !event.nature;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                trigger.cancel();
                                ('step 1');
                                player
                                    .chooseControl('受到一点火属性伤害', '失去一点体力', true)
                                    .set('ai', function () {
                                        if (player.hp >= 3) return '受到一点火属性伤害';
                                        else return '失去一点体力';
                                    })
                                    .set('prompt', '龙之炉心:请选择一项:<br>①受到一点火属性伤害并从牌堆获得一张锦囊牌;<br>②失去一点体力并从牌堆获得一张基本牌.');
                                ('step 2');
                                if (result.control && result.control == '受到一点火属性伤害') {
                                    player.damage(1, 'fire');
                                    var card = get.cardPile(function (card) {
                                        if (get.type(card) == 'trick') return true;
                                        return false;
                                    }, 'cardPile');
                                    player.gain(card, 'gain2');
                                } else {
                                    player.loseHp(1);
                                    var card = get.cardPile(function (card) {
                                        if (get.type(card) == 'basic') return true;
                                        return false;
                                    }, 'cardPile');
                                    player.gain(card, 'gain2');
                                }
                            },
                        }, //此技能结束
                        /*————————————————Excalibur————————————————*/
                        Grand_Excalibur: {
                            //技能名:Excalibur
                            //技能类型:宝具
                            //持有角色:阿尔托莉雅·潘德拉贡(剑)
                            //技能效果:限定技,出牌阶段,你可以令除你以外的所有角色依次弃置三张牌,并受到你造成的一点火属性伤害
                            limited: true,
                            audio: 'ext:Grand包/audio/skill:2',
                            enable: 'phaseUse',
                            prompt: '是否发动【Excalibur】',
                            content() {
                                player.awakenSkill(event.name);
                                game.countPlayer(function (current) {
                                    if (current != player) {
                                        player.line(current);
                                        current.chooseToDiscard(3, 'he', true);
                                        current.damage(1, 'fire');
                                    }
                                });
                            },
                            ai: {
                                order: 2,
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
                        }, //此技能结束
                        /*————————————————湖之加护————————————————*/
                        Grand_huzhijiahu: {
                            //技能名:湖之加护
                            //技能类型:固有技能
                            //持有角色:阿尔托莉雅·潘德拉贡(术)
                            //技能效果:当你使用或打出一张牌时,你可以摸一张牌并交给一名其他角色一张牌.若如此做,本回合结束阶段,你弃置X张牌(X为你本回合发动此技能的次数),若X大于3,你失去一点体力,并摸三张牌.
                            audio: 'ext:Grand包/audio/skill:2',
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            check(event, player) {
                                return game.filterPlayer(function (current) {
                                    return get.attitude(player, current) > 1;
                                }).length;
                            },
                            content() {
                                'step 0';
                                player.draw(1);
                                player.chooseCardTarget({
                                    prompt: '请选择【湖之加护】的牌和目标',
                                    prompt2: '将一张牌交给一名其他角色',
                                    filterCard: true,
                                    position: 'he',
                                    forced: true,
                                    filterTarget: lib.filter.notMe,
                                    ai1(card) {
                                        return 6 - get.useful(card);
                                    },
                                    ai2(target) {
                                        return get.attitude(player, target);
                                    },
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.line(target, 'green');
                                    player.give(result.cards, result.targets[0]);
                                }
                            },
                            group: ['Grand_huzhijiahu_discard'],
                            subSkill: {
                                discard: {
                                    //子技能识别名:Grand_huzhijiahu_discard
                                    trigger: {
                                        global: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    audio: 'Grand_huzhijiahu',
                                    filter(event, player) {
                                        var num = player.getHistory('useSkill', function (evt) {
                                            return evt.skill == 'Grand_huzhijiahu';
                                        }).length;
                                        return num > 0;
                                    },
                                    content() {
                                        'step 0';
                                        var num = player.getHistory('useSkill', function (evt) {
                                            return evt.skill == 'Grand_huzhijiahu';
                                        }).length;
                                        event.num = num;
                                        player.chooseToDiscard(num, 'he', true);
                                        ('step 1');
                                        if (event.num >= 3) {
                                            player.loseHp(1);
                                            player.draw(3);
                                        }
                                    },
                                }, //子技能discard结束
                            },
                        }, //此技能结束
                        /*—————————————环抱着你的希望之星—————————————*/
                        Grand_AroundCaliburn: {
                            //技能名:环抱着你的希望之星
                            //技能类型:宝具
                            //持有角色:阿尔托莉雅·潘德拉贡(术)
                            //技能效果:限定技,出牌阶段,你可以获得如下效果直至你的下个回合开始:①一名角色受到伤害时,取消之;②一名角色失去体力时,取消之;③一名角色回复体力时,取消之
                            limited: true,
                            audio: 'ext:Grand包/audio/skill:2',
                            prompt: '是否发动【环抱着你的希望之星】',
                            enable: 'phaseUse',
                            content() {
                                player.addTempSkill('Grand_AroundCaliburn_suzheng', { player: 'phaseZhunbeiBegin' });
                                player.awakenSkill(event.name);
                            },
                            global: 'Grand_AroundCaliburn_ai',
                            ai: {
                                order: 2,
                                result: {
                                    player(player) {
                                        var friends = game.filterPlayer((i) => i.isFriendsOf(player));
                                        var enemies = game.filterPlayer((i) => i.isEnemiesOf(player));
                                        var recover = (lose = 0);
                                        if (!game.hasPlayer((i) => i.isDamaged() || i.hp < 2)) return 0;
                                        if (game.players.length == 2 && player.isDamaged() && player.hp < 2 && player.countCards('hs', { name: ['tao', 'jiu'] })) return 1;
                                        if (friends.length) {
                                            for (var i = 0; i < friends.length; i++) {
                                                if (friends[i].hp <= 2) {
                                                    if (friends[i].isZhu) recover += 3;
                                                    recover += 2;
                                                }
                                            }
                                        }
                                        if (!friends.length) {
                                            if (player.hp < 2 && !player.countCards('hs', { name: 'tao' })) recover += 2;
                                            if (get.mode() == 'identity' && player.identity == 'fan' && game.findPlayer((z) => z.isZhu && z.hp < 2)) recover += 2;
                                        }
                                        for (var i = 0; i < enemies.length; i++) {
                                            if (enemies[i].hp <= 2) {
                                                if (enemies[i].isZhu) {
                                                    if (enemies[i].countCards('h') > 3) return 1;
                                                    else lose += 3;
                                                }
                                                if (enemies[i].countCards('h') > 4) lose += 2;
                                            }
                                        }
                                        if (recover >= (friends.length || 0)) return 1;
                                        if (lose >= enemies.length) return 1;
                                        return 0;
                                    },
                                },
                            },
                            subSkill: {
                                suzheng: {
                                    //子技能识别名:Grand_AroundCaliburn_suzheng
                                    trigger: {
                                        global: ['damageBegin', 'loseHpBegin', 'recoverBegin'],
                                    },
                                    marktext: '对肃正防御',
                                    intro: {
                                        content: '一名角色受到伤害时,取消之<br>一名角色失去体力时,取消之<br>一名角色回复体力时,取消之',
                                    },
                                    mark: true,
                                    forced: true,
                                    charlotte: true,
                                    content() {
                                        trigger.cancel();
                                    },
                                }, //子技能suzheng结束
                            },
                        }, //此技能结束
                        Grand_AroundCaliburn_ai: {
                            //ai内容
                            mod: {},
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (game.hasPlayer((i) => i.hasSkill('Grand_AroundCaliburn_suzheng')) && get.tag(card, 'damage')) return 'zeroplayertarget';
                                        if (game.hasPlayer((i) => i.hasSkill('Grand_AroundCaliburn_suzheng')) && get.tag(card, 'recover')) return 'zeroplayertarget';
                                    },
                                },
                            },
                        }, //此技能结束
                        /*————————————————卢恩魔术————————————————*/
                        Grand_luenmoshu: {
                            //技能名:卢恩魔术
                            //技能类型:固有技能
                            //持有角色:库·丘林(枪)
                            //技能效果:出牌阶段限三次,你可以将手牌摸至/弃至你的体力上限,根据你摸牌或弃牌的数量执行以下效果:①若摸牌数≥2:此技能失效直至你的回合结束.②若弃牌数≥2:你获得『龙胆』直至你的下个回合开始.若弃牌数≥3:你摸等同于你弃至牌数量的牌
                            enable: 'phaseUse',
                            usable: 3,
                            marktext: '卢恩魔术',
                            prompt: '是否发动【卢恩魔术】',
                            prompt2(event, player) {
                                if (player.countCards('h') > player.maxHp) {
                                    var num = player.countCards('h') - player.maxHp;
                                    return '弃置' + num + '张手牌';
                                } else {
                                    var num = player.maxHp - player.countCards('h');
                                    return '摸' + num + '张牌';
                                }
                            },
                            audio: 'ext:Grand包/audio/skill:2',
                            filter(event, player) {
                                return player.countCards('h') != player.maxHp && !player.hasSkill('Grand_luenmoshu_stop');
                            },
                            content() {
                                if (!player.storage.Grand_luenmoshu_use) player.storage.Grand_luenmoshu_use = 0;
                                player.storage.Grand_luenmoshu_use++;
                                player.addTempSkill('Grand_luenmoshu_use');
                                player.markSkill('Grand_luenmoshu_use');
                                if (player.countCards('h') > player.maxHp) {
                                    var num = player.countCards('h') - player.maxHp;
                                    player.chooseToDiscard(num, 'h', true).set('ai', (card) => 8 - get.useful(card));
                                    if (num >= 2) player.addTempSkill('longdan', { player: 'phaseZhunbeiBegin' });
                                    if (num >= 3) player.draw(num);
                                } else {
                                    var num = player.maxHp - player.countCards('h');
                                    player.draw(num);
                                    if (num >= 2) player.addTempSkill('Grand_luenmoshu_stop');
                                }
                            },
                            ai: {
                                order() {
                                    var player = _status.event.player;
                                    var num = player.getStat().skill.Grand_luenmoshu; //QQQ
                                    if (!num || (num < 3 && player.countCards('h') > player.maxHp)) return 2;
                                    return 1;
                                },
                                result: {
                                    player(player) {
                                        var num = 0;
                                        var cards = player.countCards('h');
                                        var abs = Math.abs(cards - player.maxHp);
                                        if (abs < 2 && cards > player.maxHp) return 0;
                                        if (cards < player.maxHp) return (player.maxHp - cards) / 2;
                                        for (var i of player.getCards('h')) {
                                            if (get.value(i) < 6) num++;
                                        }
                                        game.log(num);
                                        if (num < player.needsToDiscard() && player.needsToDiscard()) num = player.needsToDiscard();
                                        game.log(num);
                                        if (num >= 2 && cards > player.maxHp) {
                                            if (num >= abs && abs > 2) return 2;
                                            else if (abs == 2 && num >= 2) player.hasSkill('longdan') ? 0 : 0.2;
                                            if (player.needsToDiscard() && cards > player.maxHp) return player.needsToDiscard() - 1;
                                        }
                                        if (cards.length < player.maxHp && player.getStat().skill.Grand_luenmoshu) return 1;
                                        return 0.4;
                                    },
                                },
                            },
                            subSkill: {
                                stop: {
                                    //子技能识别名:Grand_luenmoshu_stop
                                }, //子技能stop结束
                                use: {
                                    //子技能识别名:Grand_luenmoshu_use
                                    marktext: '卢恩魔术',
                                    intro: {
                                        name: '卢恩魔术',
                                        content: '本回合已发动#次',
                                    },
                                    onremove(player, skill) {
                                        player.unmarkSkill('Grand_luenmoshu_use');
                                        delete player.storage.Grand_luenmoshu_use;
                                    },
                                }, //子技能use结束
                            },
                        }, //此技能结束
                        /*———————————————穿刺死荆之枪———————————————*/
                        Grand_GaeBolg: {
                            //技能名:穿刺死荆之枪
                            //技能类型:宝具
                            //持有角色:库·丘林(枪)
                            //技能效果:限定技,出牌阶段,你可以对一名其他角色造成两点伤害
                            enable: 'phaseUse',
                            limited: true,
                            audio: 'ext:Grand包/audio/skill:1',
                            prompt: '是否发动【穿刺死荆之枪】',
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill(event.name);
                                if (!_status.connectMode) {
                                    game.mp410('Grand_GaeBolg'); //QQQ
                                }
                                target.damage(2);
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                            },
                        }, //此技能结束
                        /*————————————————善神智慧————————————————*/
                        Grand_shanshenzhihui: {
                            //技能名:善神智慧
                            //技能类型:固有技能
                            //持有角色:魁扎尔·科亚特尔(骑)
                            //技能效果:当你造成伤害时,你可以取消之,并摸X张牌(X为伤害值).若你未使用『炽焰,亦焚尽神灵』,你获得X枚善神印记;若你已使用『炽焰,亦焚尽神灵』,你摸一张牌
                            trigger: {
                                source: 'damageBegin4',
                            },
                            audio: 'ext:Grand包/audio/skill:2',
                            marktext: '善神',
                            prompt: '是否发动【善神智慧】',
                            intro: {
                                name: '善神印记',
                                content: '已记录#点伤害',
                            },
                            filter(event, player) {
                                return event.getParent(1).name != 'Grand_Xiuhcoatl';
                            },
                            check(event, player) {
                                var ps = player.storage.Grand_shanshenzhihui;
                                if (!ps) ps = 0;
                                var target = event.player;
                                var eff = get.damageEffect(target, player, player, event.nature);
                                if (get.attitude(player, target) > 0) {
                                    if (eff >= 0) return false;
                                    return true;
                                }
                                if (eff <= 0) return true;
                                if (target.hp == 1) return false;
                                if (event.num > 1 && player.awakenedSkills.includes('Grand_Xiuhcoatl')) return false;
                                if (player.awakenedSkills.includes('Grand_Xiuhcoatl') && player.countCards('h') > 2) return false;
                                if (player.awakenedSkills.includes('Grand_Xiuhcoatl') && target.hasJudge('lebu')) return false;
                                if (event.num == 1 && target.hasSkillTag('maixie') && Math.random() <= 0.8) return true;
                                if (target.countCards('h') > 4 && target.hasJudge('lebu')) return false;
                                if (event.num == 1) {
                                    if (ps > game.filterPlayer((i) => i.isMaxHp())) return false;
                                    if (!player.awakenedSkills.includes('Grand_Xiuhcoatl') && player.getEquip('zhuge')) return true;
                                    if (!player.awakenedSkills.includes('Grand_Xiuhcoatl') && Math.random() <= 0.5) return true;
                                    if (Math.random() <= 0.2 + player.awakenedSkills.includes('Grand_Xiuhcoatl') ? 0.247 : 0.347 && player.countCards('h') < 6) return true;
                                }
                                if (!player.awakenedSkills.includes('Grand_Xiuhcoatl') && ps < 1 && event.num == 1 && target.countCards('h') > 4) return true;
                                if (event.num > 1 && player.awakenedSkills.includes('Grand_Xiuhcoatl')) return false;
                                return false;
                            },
                            content() {
                                var num = trigger.num;
                                trigger.cancel();
                                player.draw(num);
                                if (!player.storage.Grand_shanshenzhihui) player.storage.Grand_shanshenzhihui = 0;
                                if (!player.storage.Grand_Xiuhcoatl) {
                                    player.storage.Grand_shanshenzhihui += num;
                                    player.markSkill('Grand_shanshenzhihui');
                                } else {
                                    player.draw(1);
                                }
                            },
                            ai: {
                                effect: {
                                    player(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (target.isFriendsOf(player)) return [0, 1, 0, 0.2];
                                        }
                                    },
                                },
                            },
                            mod: {
                                aiOrder(player, card, num) {
                                    if (typeof card == 'object' && player == _status.currentPhase) {
                                        if (['naman', 'wanjian'].includes(card.name)) return (num += 10);
                                    }
                                },
                                aiValue(player, card, num) {
                                    if (['naman', 'wanjian'].includes(card.name)) return num * 2;
                                },
                            },
                        }, //此技能结束
                        /*——————————————炽焰,亦焚尽神灵——————————————*/
                        Grand_Xiuhcoatl: {
                            //技能名:炽焰,亦焚尽神灵
                            //技能类型:宝具
                            //持有角色:魁扎尔·科亚特尔(骑)
                            //技能效果:限定技,出牌阶段,你可以对一名其他角色造成X点伤害(X为你拥有的善神印记数量),并移除你所有的善神印记
                            enable: 'phaseUse',
                            limited: true, //是否为限定技:是
                            prompt: '是否发动【炽焰,亦焚尽神灵】',
                            audio: 'ext:Grand包/audio/skill:2',
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            filter(event, player) {
                                if (player.name != 'Grand_kuizhaer_keyateer_rider') return false;
                                return player.storage.Grand_shanshenzhihui;
                            },
                            content() {
                                'step 0';
                                player.unmarkSkill('Grand_shanshenzhihui');
                                player.awakenSkill(event.name);
                                ('step 1');
                                var num = player.storage.Grand_shanshenzhihui;
                                target.damage(num || 0);
                                delete player.storage.Grand_shanshenzhihui;
                            },
                            ai: {
                                order: 0.1,
                                result: {
                                    target(player, target) {
                                        var ps = player.storage.Grand_shanshenzhihui;
                                        if (!ps) ps = 0;
                                        if (ps < 1) return 0;
                                        if (player.storage.Grand_shanshenzhihui >= target.hp) return -target.hp;
                                        if (target.hasSkillTag('filterDamge')) return 0;
                                        var att = get.attitude(player, target);
                                        if (att > 0) return -1 / att;
                                        return get.damageEffect(target, player, player) * (ps >= target.hp - 1 ? 1.2 : 0);
                                    },
                                },
                            },
                        }, //此技能结束
                        /*—————————————————变容—————————————————*/
                        Grand_bianrong: {
                            //技能名:变容
                            //技能类型:固有技能
                            //持有角色:恩奇都(枪)
                            //技能效果:当你使用一张牌时,若你使用的上一张牌不为装备牌,且不为【闪】、【无懈可击】、延时锦囊,虚拟牌、转化牌.你可以取消此牌的结算并视为使用你使用的上一张牌
                            trigger: {
                                player: 'useCard',
                            },
                            mark: true,
                            prompt: '是否发动【变容】',
                            intro: {
                                content(storage, player) {
                                    var evts = player.getAllHistory('useCard');
                                    if (evts.length < 1) return '';
                                    if (evts.length >= 1) {
                                        var cardLastUsed = evts[evts.length - 1].card;
                                        if (get.type2(cardLastUsed) != 'equip' && cardLastUsed.name != 'shan' && cardLastUsed.name != 'wuxie' && cardLastUsed.isCard) return get.translation(cardLastUsed.name) + '可使用';
                                        return get.translation(cardLastUsed.name) + ' 不可使用';
                                    }
                                },
                            },
                            getLastUsed(player, event) {
                                var history = player.getAllHistory('useCard');
                                var index;
                                if (event) index = history.indexOf(event) - 1;
                                else index = history.length - 1;
                                if (index >= 0) return history[index];
                                return false;
                            },
                            audio: 'ext:Grand包/audio/skill:2',
                            check(event, player) {
                                var evt = lib.skill.Grand_bianrong.getLastUsed(player, event);
                                if (!evt || !evt.card) return false;
                                if (player.isHealthy() && evt.card.name == 'tao') return false;
                                if (!player.isPhaseUsing() && evt.card.name == 'jiu') return false;
                                if (!player.hasUseTarget({ name: evt.card.name })) return false;
                                if (player.isDying() && ['tao', 'jiu'].includes(event.card.name)) return false;
                                return player.isPhaseUsing() ? player.getUseValue(evt.card, false) > player.getUseValue(event.card, false) : get.value(evt.card) > get.value(event.card);
                            },
                            filter(event, player) {
                                var evt = lib.skill.Grand_bianrong.getLastUsed(player, event);
                                if (!evt || !evt.card) return false;
                                if (get.itemtype(evt.cards) != 'cards') return false;
                                if (get.itemtype(event.cards) != 'cards') return false;
                                if (get.type(evt.card) != 'basic' && get.type(evt.card) != 'trick') return false;
                                return evt.evt.card.name != 'shan' && evt.card.name != 'wuxie';
                            },
                            content() {
                                'step 0';
                                trigger.targets.length = 0;
                                trigger.all_excluded = true;
                                game.log(player, '取消了', trigger.card, '的结算');
                                ('step 1');
                                var evt = lib.skill.Grand_bianrong.getLastUsed(player, trigger);
                                player.chooseUseTarget({ name: evt.card.name }, true, false, 'nodistance');
                            },
                        }, //此技能结束
                        /*————————————————金星驱动————————————————*/
                        Grand_jinxingqudong: {
                            //技能名:金星驱动
                            //技能类型:固有技能
                            //持有角色:伊什塔尔(仇)
                            //技能效果:①当你造成伤害时,若你没有『阿斯塔蒂』,你可以弃置一枚<星>并令伤害值+1;②当你使用或打出一张牌后,若你没有『伊什塔尔』,你可以弃置一枚<星>并摸一张牌.③当你受到伤害后,若你没有『阿纳特』,你可以弃置一枚<星>并回复一点体力
                            trigger: {
                                source: 'damageBegin',
                            },
                            audio: 'ext:Grand包/audio/skill:2',
                            prompt: '是否发动『金星驱动』',
                            prompt2: '弃置一枚<星>并令伤害值+1',
                            filter(event, player) {
                                return !player.hasSkill('Grand_duochongxinghuan_asitadi') && player.getExpansions('Grand_duochongxinghuan').length;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0; //QQQ
                            },
                            content() {
                                'step 0';
                                player.chooseCardButton('弃置一枚星>', player.getExpansions('Grand_duochongxinghuan'), true);
                                ('step 1');
                                if (result.links?.length) {
                                    player.loseToDiscardpile(result.links);
                                    trigger.num++;
                                }
                            },
                            group: ['Grand_jinxingqudong_usecard', 'Grand_jinxingqudong_damage'],
                            subSkill: {
                                usecard: {
                                    //子技能识别名:Grand_jinxingqudong_usecard
                                    trigger: {
                                        player: ['useCardEnd', 'respond'],
                                    },
                                    audio: 'Grand_jinxingqudong',
                                    prompt: '是否发动『金星驱动』',
                                    prompt2: '弃置一枚<星>并摸一张牌',
                                    filter(event, player) {
                                        return !player.hasSkill('Grand_duochongxinghuan_yishentaer') && player.getExpansions('Grand_duochongxinghuan').length;
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseCardButton('弃置一枚星>', player.getExpansions('Grand_duochongxinghuan'), true);
                                        ('step 1');
                                        if (result.links?.length) {
                                            player.loseToDiscardpile(result.links);
                                            player.draw(1);
                                        }
                                    },
                                }, //子技能usecard结束
                                damage: {
                                    //子技能识别名:Grand_jinxingqudong_damage
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    audio: 'Grand_jinxingqudong',
                                    prompt: '是否发动『金星驱动』',
                                    prompt2: '弃置一枚<星>并回复一点体力',
                                    filter(event, player) {
                                        return !player.hasSkill('Grand_duochongxinghuan_anate') && player.getExpansions('Grand_duochongxinghuan').length;
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseCardButton('弃置一枚星>', player.getExpansions('Grand_duochongxinghuan'), true);
                                        ('step 1');
                                        if (result.links?.length) {
                                            player.loseToDiscardpile(result.links);
                                            player.recover(1);
                                        }
                                    },
                                }, //子技能damage结束
                            },
                        }, //此技能结束
                        /*————————————————多重星环————————————————*/
                        Grand_duochongxinghuan: {
                            //技能名:多重星环
                            //技能类型:固有技能
                            //持有角色:伊什塔尔(仇)
                            //技能效果:出牌阶段限两次,你可以失去一点体力,并令所有存活角色获得以下技能中你选择的一项:『阿斯塔蒂』,『伊什塔尔』,『阿纳特』.锁定技,一名角色执行以上技能中的一项时,你摸一张牌,并将一张手牌置于你的武将牌上,称之为<星>
                            audio: 'ext:Grand包/audio/skill:2',
                            enable: 'phaseUse',
                            usable: 2,
                            derivation: ['Grand_duochongxinghuan_asitadi', 'Grand_duochongxinghuan_yishentaer', 'Grand_duochongxinghuan_anate'],
                            marktext: '星',
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            prompt: '是否发动『多重星环』',
                            content() {
                                'step 0';
                                player.loseHp(1);
                                game.countPlayer(function (current) {
                                    if (current.hasSkill('Grand_duochongxinghuan_asitadi')) current.removeSkill('Grand_duochongxinghuan_asitadi');
                                    if (current.hasSkill('Grand_duochongxinghuan_yishentaer')) current.removeSkill('Grand_duochongxinghuan_yishentaer');
                                    if (current.hasSkill('Grand_duochongxinghuan_anate')) current.removeSkill('Grand_duochongxinghuan_anate');
                                });
                                player
                                    .chooseControl('阿斯塔蒂', '伊什塔尔', '阿纳特')
                                    .set('prompt', '请选择一项技能,令所有存活角色获得')
                                    .set('ai', function () {
                                        if (player.hp <= 2) return '阿纳特';
                                        if (player.countCards('h', { name: 'huogong' }) >= 1) return '阿斯塔蒂';
                                        return '伊什塔尔';
                                    });
                                ('step 1');
                                if (result.control) {
                                    game.countPlayer(function (current) {
                                        if (result.control == '阿斯塔蒂') current.addSkill('Grand_duochongxinghuan_asitadi');
                                        if (result.control == '伊什塔尔') current.addSkill('Grand_duochongxinghuan_yishentaer');
                                        if (result.control == '阿纳特') current.addSkill('Grand_duochongxinghuan_anate');
                                    });
                                }
                            },
                            ai: {
                                order() {
                                    var player = _status.event.player;
                                    if (player.countSkill('Grand_duochongxinghuan') >= 1) return 3;
                                    return 10;
                                },
                                result: {
                                    player(player) {
                                        if (player.hp <= 1) return 0;
                                        return 1;
                                    },
                                },
                            },
                            group: ['Grand_duochongxinghuan_draw'],
                            subSkill: {
                                draw: {
                                    //子技能识别名:Grand_duochongxinghuan_draw
                                    audio: 'Grand_duochongxinghuan',
                                    forced: true,
                                    trigger: {
                                        global: 'logSkill',
                                    },
                                    filter(event, player) {
                                        return event.skill == 'Grand_duochongxinghuan_asitadi' || event.skill == 'Grand_duochongxinghuan_yishentaer' || event.skill == 'Grand_duochongxinghuan_anate';
                                    },
                                    content() {
                                        'step 0';
                                        player.draw(1);
                                        ('step 1');
                                        player.chooseCard('h', true, '将一张手牌置于武将牌上');
                                        ('step 2');
                                        player.addToExpansion(result.cards, 'giveAuto', player).gaintag.add('Grand_duochongxinghuan');
                                    },
                                }, //子技能draw结束
                                asitadi: {
                                    //子技能识别名:Grand_duochongxinghuan_asitadi
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    forced: true,
                                    audio: 'ext:Grand包/audio/skill:1',
                                    filter(event, player) {
                                        return event.nature;
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                }, //子技能asitadi结束
                                yishentaer: {
                                    //子技能识别名:Grand_duochongxinghuan_yishentaer
                                    forced: true,
                                    audio: 'ext:Grand包/audio/skill:1',
                                    trigger: {
                                        player: 'useCardEnd',
                                    },
                                    filter(event, player) {
                                        return get.type2(event.card) == 'basic';
                                    },
                                    content() {
                                        player.draw(1);
                                    },
                                }, //子技能yishentaer结束
                                anate: {
                                    //子技能识别名:Grand_duochongxinghuan_anate
                                    forced: true,
                                    usable: 1,
                                    audio: 'ext:Grand包/audio/skill:1',
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    content() {
                                        player.recover(1);
                                    },
                                }, //子技能anate结束
                            },
                        }, //此技能结束
                        /*—————————————————命运—————————————————*/
                        Grand_SymphonyofDestiny: {
                            //技能名:命运
                            //技能类型:通用技能
                            //持有角色:珂赛特
                            //技能效果:当你需要使用或打出一张基本牌或锦囊牌时,你可以将1+X张手牌当做此牌使用或打出(X为你本轮此技能的使用次数);锁定技,①当你受到其他角色造成的1点伤害后,你摸X张牌,X-1;②一轮游戏结束时,你摸X张牌
                            //audio:"ext:Grand包/audio/skill:2",
                            enable: ['chooseToUse', 'chooseToRespond'],
                            hiddenCard(player, name) {
                                var type = get.type(name);
                                if ((type == 'basic' || type == 'trick') && lib.inpile.includes(name) && player.countMark('Grand_SymphonyofDestiny_mark') + 1 <= player.countCards('h')) return true;
                            },
                            filter(event, player) {
                                if (event.responded || event.Grand_SymphonyofDestiny || player.countMark('Grand_SymphonyofDestiny_mark') + 1 > player.countCards('h')) return false;
                                for (var i of lib.inpile) {
                                    var type = get.type2(i);
                                    if ((type == 'basic' || type == 'trick') && event.filterCard({ name: i }, player, event)) return true;
                                }
                                return false;
                            },
                            prompt: '是否发动【命运】',
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    for (var i = 0; i < lib.inpile.length; i++) {
                                        var name = lib.inpile[i];
                                        if (name == 'sha') {
                                            if (event.filterCard && event.filterCard({ name: name }, player, event)) list.push(['基本', '', 'sha']);
                                            for (var j of lib.inpile_nature) {
                                                if (event.filterCard && event.filterCard({ name: name, nature: j }, player, event)) list.push(['基本', '', name, j]);
                                            }
                                        } else if (get.type2(name) == 'trick' && event.filterCard({ name: name }, player, event)) list.push(['锦囊', '', name]);
                                        else if (get.type(name) == 'basic' && event.filterCard({ name: name }, player, event)) list.push(['基本', '', name]);
                                    }
                                    return ui.create.dialog('命运', [list, 'vcard'], 'hidden');
                                },
                                filter(button, player) {
                                    return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                },
                                check(button) {
                                    if (_status.event.parent.type != 'phase') return 1;
                                    if (button.link[2] == 'shan') return 2;
                                    var player = _status.event.player;
                                    if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[2])) return 0;
                                    if (button.link[2] == 'jiu') {
                                        if (player.getUseValue({ name: 'jiu' }) <= 0) return 0;
                                        if (player.countCards('h', 'sha')) return player.getUseValue({ name: 'jiu' });
                                    }
                                    return player.getUseValue({ name: button.link[2], nature: button.link[3] }) / 4;
                                },
                                backup(links, player) {
                                    return {
                                        selectCard: player.countMark('Grand_SymphonyofDestiny_mark') + 1,
                                        popname: true,
                                        filterCard: true,
                                        viewAs: {
                                            name: links[0][2],
                                            nature: links[0][3],
                                        },
                                        ignoreMod: true,
                                        check(card) {
                                            var player = _status.event.player,
                                                name = card.name;
                                            if (ui.selected.cards.length && card.name == 'tao') return 0.1;
                                            if (player.countCards('h') < player.countMark('Grand_SymphonyofDestiny_mark') + 1) return -1;
                                            if (ui.selected.cards.length > 4 || (player.isPhaseUsing() && ui.selected.cards.length && name == 'tao')) return 0;
                                            if (
                                                lib.skill.Grand_SymphonyofDestiny_backup.viewAs.name == 'jiu' &&
                                                !player.countCards('h', function (cardx) {
                                                    return card != cardx && !ui.selected.cards.includes(cardx) && cardx.name == 'sha';
                                                })
                                            )
                                                return 0;
                                            var shas = player.getCards('hs', function (card) {
                                                return card != card && card.name == 'sha';
                                            });
                                            if (!shas.length) return -1;
                                            if (shas.length > 1 && (player.getCardUsable('sha') > 1 || player.countCards('hs', 'zhuge'))) {
                                                return 0;
                                            }
                                            shas.sort(function (a, b) {
                                                return get.order(b) - get.order(a);
                                            });
                                            var card = false;
                                            if (shas.length) {
                                                for (var i = 0; i < shas.length; i++) {
                                                    if (shas[i] != card && lib.filter.filterCard(shas[i], player)) {
                                                        card = shas[i];
                                                        break;
                                                    }
                                                }
                                            }
                                            if (card) {
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        return (
                                                            get.attitude(player, current) < 0 &&
                                                            !current.hasShan() &&
                                                            current.hp + current.countCards('h', { name: ['tao', 'jiu'] }) > 1 + (player.storage.jiu || 0) &&
                                                            player.canUse(card, current, true, true) &&
                                                            !current.hasSkillTag('filterDamage', null, {
                                                                player: player,
                                                                card: card,
                                                                jiu: true,
                                                            }) &&
                                                            get.effect(current, card, player) > 0
                                                        );
                                                    })
                                                ) {
                                                    return 4 - get.value(card);
                                                }
                                            }
                                            return Math.min(0.01, 6 - get.value(card));
                                        },
                                        precontent() {
                                            player.addTempSkill('Grand_SymphonyofDestiny_mark', 'roundStart');
                                            player.addMark('Grand_SymphonyofDestiny_mark', 1, false);
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '将任意' + (1 + player.countMark('Grand_SymphonyofDestiny_mark')) + '张牌当做' + get.translation(links[0][2]) + '使用';
                                },
                            },
                            ai: {
                                order(item, player) {
                                    if (_status.event.type == 'phase' && !player.countMark('Grand_SymphonyofDestiny_mark') && player.getUseValue({ name: 'jiu' }, null, true) > 0 && player.countCards('h', 'sha')) return get.order({ name: 'jiu' }) + 1;
                                    return 1;
                                },
                                respondShan: true,
                                respondSha: true,
                                skillTagFilter(player) {
                                    if (player.countMark('Grand_SymphonyofDestiny_mark') + 1 >= player.countCards('h')) return false;
                                },
                                result: {
                                    player(player) {
                                        if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                        if (player.countMark('Grand_SymphonyofDestiny_mark') + 1 > 5) return -1;
                                        return 1.1 - (player.countMark('Grand_SymphonyofDestiny_mark') || 0) * 0.1;
                                    },
                                },
                            },
                            subSkill: {
                                mark: {
                                    //子技能识别名:Grand_SymphonyofDestiny_mark
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    onremove(player) {
                                        var num = player.countMark('Grand_SymphonyofDestiny_mark');
                                        player.draw(num);
                                        player.removeMark('Grand_SymphonyofDestiny_mark', num);
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.source != event.player;
                                    },
                                    content() {
                                        'step 0';
                                        event.count = Math.min(trigger.num, 9);
                                        ('step 1');
                                        event.count--;
                                        var num = player.countMark('Grand_SymphonyofDestiny_mark');
                                        player.draw(num);
                                        player.removeMark('Grand_SymphonyofDestiny_mark', 1, false);
                                        ('step 2');
                                        if (event.count > 0 && player.countMark('Grand_SymphonyofDestiny_mark') > 0) event.goto(1);
                                    },
                                    intro: {
                                        content: '<center>本轮已发动过#次',
                                    },
                                }, //子技能mark结束
                            },
                        }, //此技能结束
                        /*—————————————————革制—————————————————*/
                        Grand_gezhi: {
                            //技能名称:革制
                            //技能类型:通用技能
                            //持有角色:威尔逊
                            //技能效果:当你使用牌指定目标时,若此牌的目标数大于1,则你可以对其中一个目标造成1点雷属性伤害,重铸你所有与此牌花色相同的手牌.
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            //audio:"ext:Grand包/audio/skill:2",
                            filter(event, player) {
                                if (!event.isFirstTarget) return false;
                                if (event.targets.length <= 1) return false;
                                return game.hasPlayer(function (target) {
                                    return event.targets.includes(target);
                                });
                            },
                            prompt: '是否发动【革制】',
                            forced: true,
                            check: (event, player) => true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('Grand_gezhi'), '对其中一个目标造成一点雷属性伤害,重铸所有' + get.translation(trigger.card.suit) + '牌', function (card, player, target) {
                                        return _status.event.targets.includes(target);
                                    })
                                    .set('ai', function (target) {
                                        if (trigger.targets.length == 1 && get.attitude(_status.event.player, trigger.targets[0]) > 0 && get.damageEffect(target, _status.event.player, _status.event.player, 'thunder') < 0) {
                                            var cards = player.getCards('h', (card) => card.suit == trigger.card.suit);
                                            if (!cards.length) return false;
                                            for (var i = 0; i < cards.length; i++) {
                                                if (_status.event.player.getUseValue(cards[i]) > 7) return false;
                                            }
                                        }
                                        return get.damageEffect(target, _status.event.player, _status.event.player, 'thunder');
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    target.damage(1, 'thunder');
                                    var cards = player.getCards('h', (card) => card.suit == trigger.card.suit);
                                    if (cards.length) {
                                        player.loseToDiscardpile(cards);
                                        player.draw(cards.length);
                                    }
                                }
                            },
                        }, //此技能结束
                        /*—————————————————开拓—————————————————*/
                        Grand_kaituo: {
                            //技能名称:开拓
                            //技能类型:通用技能
                            //持有角色:威尔逊
                            //技能效果:锁定技,当你使用一张牌时,若你本回合没有使用过与该牌名称相同的牌,你摸一张牌
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            //audio:"ext:Grand包/audio/skill:2",
                            filter(event, player) {
                                return player.getHistory('useCard', (evt) => evt.card.name == event.card.name).indexOf(event) == 0;
                            },
                            content() {
                                player.draw(1);
                            },
                            ai: {
                                noe: true,
                                reverseEquip: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) return [1, 3];
                                    },
                                },
                            },
                        }, //此技能结束
                        /*————————————————天才淑女————————————————*/
                        Grand_tiancaishunv: {
                            //技能名称:天才淑女
                            //技能类型:通用技能
                            //持有角色:苏芙比
                            //技能效果:每名角色的回合限两次,当你成为一其他名角色使用基本牌或非延时锦囊牌的目标时,你可以摸一张牌,交给其一张牌,并获得其使用的牌.若其使用的牌与你交给其的牌:颜色相同,你摸一张牌;颜色不同,你可以将一张牌当做无距离限制的冰属性【杀】对其使用
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            audio: 'ext:Grand包/audio/skill:2',
                            usable: 2,
                            prompt: '是否发动【天才淑女】',
                            filter(event, player) {
                                return (get.type(event.card) == 'basic' || get.type(event.card) == 'trick') && event.player != player && event.targets.includes(player);
                            },
                            check(event, player) {
                                if (!player.hasHistory('useSkill', (e) => e.skill == 'Grand_tiancaishunv').length) return true;
                                if (get.attitude(player, event.player) > 0) return true;
                                return get.value(event.card) > 7;
                            },
                            content() {
                                'step 0';
                                player.draw(1);
                                var next = player.chooseCard('he', '天才淑女:交给' + get.translation(trigger.player) + '一张牌,并获得' + get.translation(trigger.cards), true);
                                next.set('ai', function (card) {
                                    var player = _status.event.player;
                                    if (
                                        get.tag(card, 'recover') &&
                                        !game.hasPlayer(function (current) {
                                            return get.attitude(current, player) > 0 && !current.hasSkillTag('nogain');
                                        })
                                    )
                                        return 0;
                                    if (get.attitude(_status.event.player, trigger.player) > 0) return trigger.player.getUseValue({ name: card.name });
                                    else if (trigger.card && get.color(trigger.card) && get.color(card) != get.color(trigger.card) && get.effect(trigger.player, { name: 'sha', nature: 'ice' }, player) > 0 && player.canUse({ name: 'sha', nature: 'ice' }, trigger.player, false)) return 10;
                                    else if (trigger.card && get.color(trigger.card) && get.color(card) == get.color(trigger.card)) return 10;
                                    return 1 / Math.max(0.1, get.value(card));
                                });
                                ('step 1');
                                if (result.cards?.length) {
                                    player.give(result.cards, trigger.player);
                                    player.gain(trigger.cards, 'gain2');
                                    if (get.color(result.cards) == get.color(trigger.cards)) {
                                        player.draw(1);
                                    } else {
                                        //否则
                                        player
                                            .chooseCard('he', get.prompt('Grand_tiancaishunv', trigger.player), '将一张牌当做冰【杀】对其使用')
                                            .set('target', trigger.player)
                                            .set('ai', (card) => 10 - get.value(card));
                                    }
                                }
                                ('step 2');
                                if (result.cards?.length) {
                                    player.useCard({ name: 'sha', nature: 'ice' }, result.cards, false, trigger.player, 'Grand_tiancaishunv');
                                }
                            },
                        }, //此技能结束
                        /*————————————————浓缩精华————————————————*/
                        Grand_nongsuojinghua: {
                            //技能名称:浓缩精华
                            //技能类型:通用技能
                            //持有角色:苏芙比
                            //技能效果:你的回合外:当你造成伤害后,你可以令一名角色回复一点体力;当有伤害被取消时,你摸两张牌.
                            trigger: {
                                source: 'damageEnd',
                            },
                            audio: 'ext:Grand包/audio/skill:2',
                            filter(event, player) {
                                return player != _status.currentPhase;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('Grand_nongsuojinghua'), '令一名角色回复一点体力', function (card, player, target) {
                                        return target.hp < target.maxHp;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    //如果玩家在上一步做出了选择
                                    var target = result.targets[0];
                                    target.recover(1);
                                }
                            },
                            group: ['Grand_nongsuojinghua_draw'],
                            subSkill: {
                                draw: {
                                    //子技能识别名:Grand_nongsuojinghua_draw
                                    trigger: {
                                        global: 'damageCancelled',
                                    },
                                    forced: true,
                                    audio: 'Grand_nongsuojinghua',
                                    filter(event, player, name) {
                                        return player != _status.currentPhase;
                                    },
                                    content() {
                                        player.draw(2);
                                    },
                                }, //子技能draw结束
                            },
                        }, //此技能结束
                        /*————————————————光辉旗帜————————————————*/
                        Grand_guanghuiqizhi: {
                            //技能名称:光辉旗帜
                            //技能类型:通用技能
                            //持有角色:简·薇洛
                            //技能效果:准备阶段,你可以跳过本回合的任意个阶段,摸X张牌(X为你跳过的阶段数).若你因此技能跳过了摸牌阶段,你可以令至多X名角色摸一张牌;若你因此技能跳过了出牌阶段,你可以对至多X名角色造成一点伤害
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            audio: 'ext:Grand包/audio/skill:4',
                            prompt: '是否发动【光辉旗帜】',
                            content() {
                                //技能内容
                                'step 0';
                                var list = ['判定阶段', '摸牌阶段', '出牌阶段', '弃牌阶段', '结束阶段'];
                                var result = player.chooseButton([1, 5], ['光辉旗帜', [list, 'tdnodes']]);
                                result.set('ai', function (button) {
                                    var player = _status.event.player,
                                        num = 1,
                                        numx = 0;
                                    var value = player
                                        .getCards('h')
                                        .map((card) => player.getUseValue(card))
                                        .reduce((pre, cur) => pre + cur);
                                    while (num < 6) {
                                        if (player.isEmpty(num) && player.countCards('h', { type: 'equip' + num })) numx += 0.1;
                                        num++;
                                    }
                                    switch (button.link) {
                                        case '出牌阶段':
                                            if (player.hasJudge('lebu') && !player.countCards('h', { name: 'wuxie' })) return 2;
                                            if (
                                                game.hasPlayer(function (current) {
                                                    return player.canUse('sha', current, false);
                                                })
                                            ) {
                                                if (player.countCards('h', { name: 'zhuge' }) && player.countCards('h', { name: 'sha' }) > 3) return 0;
                                                if (player.countCards('h', { name: ['nanman', 'wnajian'] }) > 2) return 0;
                                                if (value > 75) return 0;
                                                if (numx > 0.75) return 0;
                                            }
                                            return 1;
                                            break;
                                        default:
                                            return 2;
                                            break;
                                    }
                                });
                                ('step 1');
                                event.links = result.links;
                                player.draw(result.links.length);
                                if (result.links.includes('判定阶段')) player.skip('phaseJudge');
                                if (result.links.includes('摸牌阶段')) {
                                    player.skip('phaseDraw');
                                    player.chooseTarget([0, result.links.length], get.prompt('Grand_guanghuiqizhi'), '令至多' + result.links.length + '名角色摸一张牌').ai = function (target) {
                                        return get.attitude(player, target);
                                    };
                                }
                                if (result.links.includes('弃牌阶段')) player.skip('phaseDiscard');
                                if (result.links.includes('结束阶段')) player.skip('phaseJieshu');
                                ('step 2');
                                if (result.bool) {
                                    game.log(player, '跳过了', event.links);
                                    var targets = result.targets.sortBySeat();
                                    game.asyncDraw(targets);
                                }
                                ('step 3');
                                if (event.links.includes('出牌阶段')) {
                                    player.skip('phaseUse');
                                    player.chooseTarget([0, event.links.length], get.prompt('Grand_guanghuiqizhi'), '对至多' + event.links.length + '名角色造成一点伤害').set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    });
                                }
                                ('step 4');
                                if (result.targets?.length) {
                                    var targets = result.targets.sortBySeat();
                                    for (var i = 0; i < targets.length; i++) {
                                        targets[i].damage(1);
                                    }
                                }
                            },
                        }, //此技能结束
                        /*————————————————不退之旗————————————————*/
                        Grand_butuizhiqi: {
                            //技能名称:不退之旗
                            //技能类型:通用技能
                            //持有角色:简·薇洛
                            //技能效果:锁定技,当你受到伤害时,若你的手牌数为全场唯一最多,你须选择一项:<br>伤害值+1;②弃置X张牌(X为你的手牌中超出体力上限的部分),并回复一点体力,若你因此技能弃置了至少4张牌,你免疫此伤害
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            audio: 'ext:Grand包/audio/skill:2',
                            filter(event, player) {
                                return player.isMaxHandcard(true);
                            },
                            content() {
                                'step 0';
                                var list = [],
                                    num = player.countCards('h') - player.maxHp;
                                event.num = num;
                                list.push('伤害值+1');
                                if (num >= 1) list.push('弃置' + num + '张牌');
                                player.chooseControl(list).set('ai', function () {
                                    var player = _status.event.player;
                                    var num1 = trigger.num + 1;
                                    num1 -= player.countCards('h', { name: 'tao' });
                                    num1 -= player.countCards('h', { name: 'jiu' });
                                    if (player.hp > num1) return list[0];
                                    else return list[1];
                                });
                                ('step 1');
                                if (result.control == '伤害值+1') {
                                    trigger.num++;
                                } else {
                                    player.chooseToDiscard(event.num, 'h', true);
                                    if (event.num >= 4) trigger.cancel();
                                    player.recover(1);
                                }
                            },
                        }, //此技能结束
                        /*————————————————笑鸣瑟————————————————*/
                        Grand_xiaomingse: {
                            //技能名称:笑鸣瑟
                            //技能类型:通用技能
                            //持有角色:令
                            //技能效果:锁定技,当你造成伤害时,若此伤害不为雷属性,则改为雷属性;否则此伤害+1.你对攻击范围内不包含你的角色使用牌无距离和次数限制.当你处于横置状态时,其他玩家计算与你的距离+1
                            trigger: {
                                source: 'damageBegin',
                            },
                            audio: 'ext:Grand包/audio/skill:4',
                            forced: true,
                            content() {
                                if (trigger.nature != 'thunder') trigger.nature = 'thunder';
                                else trigger.num++;
                            },
                            mod: {
                                targetInRange(card, player, target, now) {
                                    if (get.distance(target, player, 'attack') > 1) return true;
                                },
                                cardUsableTarget(card, player, target, now) {
                                    if (get.distance(target, player, 'attack') > 1) return true;
                                },
                                globalTo(from, to, distance) {
                                    if (to.isLinked()) return distance + 1;
                                },
                            },
                        }, //此技能结束
                        /*————————————————宁作吾————————————————*/
                        Grand_ningzuowu: {
                            //技能名称:宁作吾
                            //技能类型:通用技能
                            //持有角色:令
                            //技能效果:出牌阶段限一次,你可以弃置任意张牌,并可以选择至多等量名其他角色.你横置这些角色,摸与你弃置牌数相等的牌.若你因此技能选择了三名或更多的角色,你横置并摸与选择的角色数等量的牌
                            audio: 'ext:Grand包/audio/skill:2',
                            enable: 'phaseUse',
                            usable: 1,
                            multitarget: true,
                            selectCard: [1, Infinity],
                            prompt: '是否发动【宁作吾】',
                            selectTarget() {
                                return [Math.min(0), Math.max(ui.selected.cards.length)];
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            check(card) {
                                return 7 - get.value(card);
                            },
                            position: 'he',
                            filterCard: true,
                            multiline: true,
                            delay: 0.5,
                            contentBefore() {
                                if (targets.length) targets.sortBySeat();
                            },
                            content() {
                                if (target) {
                                    for (var i = 0; i < targets.length; i++) {
                                        targets[i].link();
                                    }
                                }
                            },
                            contentAfter() {
                                'step 0';
                                player.draw(cards.length);
                                ('step 1');
                                if (targets.length >= 3) {
                                    player.link();
                                    player.draw(targets.length);
                                }
                            },
                            ai: {
                                order: 2,
                                result: {
                                    player: 1,
                                    target(player, target) {
                                        if (target.isLinked()) return 0;
                                        return get.damageEffect(target, player);
                                    },
                                },
                            },
                        }, //此技能结束
                        /*—————————————————心锁—————————————————*/
                        Grand_xinsuo: {
                            //技能名称:心锁
                            //技能类型:通用技能
                            //持有角色:薇儿丹蒂
                            //技能效果:锁定技,当你的手牌数小于X时,你将手牌摸至X(X为你装备区内的装备牌数＋1)
                            trigger: {
                                player: ['loseAfter', 'changeHp', 'gainMaxHpAfter', 'loseMaxHpAfter', 'enterGame'],
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter', 'phaseBefore'],
                            },
                            audio: 'ext:Grand包/audio/skill:2',
                            filter(event, player) {
                                return player.countCards('h') < Math.max(player.countCards('e') + 1) && (event.name != 'phase' || game.phaseNumber == 0);
                            },
                            forced: true,
                            content() {
                                player.draw(Math.max(player.countCards('e') + 1) - player.countCards('h'));
                            },
                        }, //此技能结束
                        /*—————————————————誓念—————————————————*/
                        Grand_shinian: {
                            //技能名称:誓念
                            //技能类型:通用技能
                            //持有角色:薇儿丹蒂
                            //技能效果:当你使用牌指定一名角色为目标,或你成为其他角色使用牌的目标时,若你的装备区存在与该牌花色相同的牌,你可以弃置你与其中一名角色区域内的一张牌
                            trigger: {
                                global: 'useCardToTargeted',
                            },
                            audio: 'ext:Grand包/audio/skill:2',
                            filter(event, player) {
                                if (!player.countCards('e')) return false;
                                if (event.player != player && event.target != player) return false;
                                if (event.player == player && event.target == player) return false;
                                var suit = event.card.suit;
                                if (suit == 'none') return false;
                                return player.hasCard(function (card) {
                                    return card.suit == suit;
                                }, 'e');
                            },
                            forced: true,
                            prompt: '是否发动【誓念】',
                            content() {
                                'step 0';
                                player.chooseControl('弃置' + get.translation(trigger.player) + '一张牌', '弃置' + get.translation(trigger.target) + '一张牌', 'cancel2').set('ai', function () {
                                    var player = _status.event.player;
                                    if ((trigger.player == player && get.attitude(player, trigger.target) > 0) || (trigger.target == player && get.attitude(player, trigger.target) > 0)) return 'cancel2';
                                    if (player == trigger.target) return '弃置' + get.translation(trigger.player) + '一张牌';
                                    else return '弃置' + get.translation(trigger.target) + '一张牌';
                                });
                                ('step 1');
                                if (result.control == '弃置' + get.translation(trigger.player) + '一张牌') player.discardPlayerCard(trigger.player, 'hej', true);
                                if (result.control == '弃置' + get.translation(trigger.target) + '一张牌') player.discardPlayerCard(trigger.target, 'hej', true);
                                if (result.control == 'cancel2') event.finish();
                            },
                        }, //此技能结束
                        /*—————————————————巧袭—————————————————*/
                        Grand_qiaoxi: {
                            //技能名称:巧袭
                            //技能类型:通用技能
                            //持有角色:三笠·阿克曼
                            //技能效果:当你使用或打出牌时,你可以摸1张牌并弃置1张牌.若如此做,本回合的结束阶段,你每因此技能弃置一种花色的牌,便从牌堆获得一张该花色的牌
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            prompt: '是否发动【巧袭】',
                            audio: 'ext:Grand包/audio/skill:2',
                            content() {
                                'step 0';
                                player.draw(1);
                                player.chooseToDiscard(1, 'he', true).set('ai', function (card) {
                                    var suit = card.suit;
                                    var cards = [];
                                    var suits = [];
                                    player.getHistory('lose', function (evtx) {
                                        if (evtx.getParent(2).name != 'Grand_qiaoxi' || evt.type != 'discard') return false;
                                        for (var card of evtx.cards) {
                                            if (get.position(card, true) == 'd') cards.add(card);
                                        }
                                    });
                                    for (var i = 0; cards.length > i; i++) {
                                        suits.add(cards[i].suit);
                                    }
                                    if (!suits.includes(suit)) {
                                        return 3 - get.value(card);
                                    } else {
                                        return 7 - get.value(card);
                                    }
                                });
                                ('step 1');
                                var suit = result.cards[0].suit;
                                if (!player.hasMark('Grand_qiaoxi_' + suit)) player.addMark('Grand_qiaoxi_' + suit);
                                player.markSkill('Grand_qiaoxi_' + suit);
                            },
                            group: ['Grand_qiaoxi_draw', 'Grand_qiaoxi_spade', 'Grand_qiaoxi_heart', 'Grand_qiaoxi_club', 'Grand_qiaoxi_diamond'],
                            subSkill: {
                                draw: {
                                    //子技能识别名:Grand_qiaoxi_draw
                                    trigger: {
                                        global: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countMark('Grand_qiaoxi_spade') || player.countMark('Grand_qiaoxi_heart') || player.countMark('Grand_qiaoxi_club') || player.countMark('Grand_qiaoxi_diamond');
                                    },
                                    content() {
                                        var cards = [];
                                        if (player.countMark('Grand_qiaoxi_spade')) {
                                            var card = get.cardPile(function (card) {
                                                if (card.suit == 'spade') return true;
                                                return false;
                                            }, 'cardPile');
                                            cards.push(card);
                                            player.unmarkSkill('Grand_qiaoxi_spade');
                                            player.removeMark('Grand_qiaoxi_spade', 1);
                                        }
                                        if (player.countMark('Grand_qiaoxi_heart')) {
                                            var card = get.cardPile(function (card) {
                                                if (card.suit == 'heart') return true;
                                                return false;
                                            }, 'cardPile');
                                            cards.push(card);
                                            player.unmarkSkill('Grand_qiaoxi_heart');
                                            player.removeMark('Grand_qiaoxi_heart', 1);
                                        }
                                        if (player.countMark('Grand_qiaoxi_club')) {
                                            var card = get.cardPile(function (card) {
                                                if (card.suit == 'club') return true;
                                                return false;
                                            }, 'cardPile');
                                            cards.push(card);
                                            player.unmarkSkill('Grand_qiaoxi_club');
                                            player.removeMark('Grand_qiaoxi_club', 1);
                                        }
                                        if (player.countMark('Grand_qiaoxi_diamond')) {
                                            var card = get.cardPile(function (card) {
                                                if (card.suit == 'diamond') return true;
                                                return false;
                                            }, 'cardPile');
                                            cards.push(card);
                                            player.unmarkSkill('Grand_qiaoxi_diamond');
                                            player.removeMark('Grand_qiaoxi_diamond', 1);
                                        }
                                        player.gain(cards, 'gain2');
                                    },
                                }, //子技能draw结束
                                spade: {
                                    //子技能识别名:Grand_qiaoxi_spade
                                    marktext: '♠️️️',
                                    intro: {
                                        name: '♠️️️',
                                        content: '♠️️️',
                                    },
                                }, //子技能spade结束
                                heart: {
                                    //子技能识别名:Grand_qiaoxi_heart
                                    marktext: '♥️️️',
                                    intro: {
                                        name: '♥️️️',
                                        content: '♥️️️',
                                    },
                                }, //子技能heart结束
                                club: {
                                    //子技能识别名:Grand_qiaoxi_club
                                    marktext: '♣️️️',
                                    intro: {
                                        name: '♣️️️',
                                        content: '♣️️️',
                                    },
                                }, //子技能club结束
                                diamond: {
                                    //子技能识别名:Grand_qiaoxi_diamond
                                    marktext: '♦️️️',
                                    intro: {
                                        name: '♦️️️',
                                        content: '♦️️️',
                                    },
                                }, //子技能diamond结束
                            },
                        }, //此技能结束
                        /*—————————————————守护—————————————————*/
                        Grand_shouhu: {
                            //技能名称:守护
                            //技能类型:通用技能
                            //持有角色:三笠·阿克曼
                            //技能效果:每名角色限一次,当有角色受到致命伤害时,你可以弃置4张牌并防止此伤害.若你弃置的牌花色各不相同,则你摸4张牌
                            trigger: {
                                global: 'damageBegin4',
                            },
                            prompt: '是否发动【守护】',
                            audio: 'ext:Grand包/audio/skill:2',
                            filter(event, player) {
                                if (event.num < event.player.hp || player.countCards('he') < 4) return false;
                                return !player.storage.Grand_shouhu || !player.storage.Grand_shouhu.includes(event.player);
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) > 1;
                            },
                            content() {
                                'step 0';
                                if (!player.storage.Grand_shouhu) player.storage.Grand_shouhu = [];
                                player.storage.Grand_shouhu.add(trigger.player);
                                player.chooseToDiscard(4, 'he', true).set('ai', function (card) {
                                    var suit = card.suit;
                                    var suits = [];
                                    if (ui.selected.cards.length) {
                                        for (var i = 0; i < ui.selected.cards.length; i++) {
                                            suits.add(ui.selected.cards[i].suit);
                                        }
                                        if (!suits.includes(suit)) {
                                            return get.value(card);
                                        }
                                        return 7 - get.value(card);
                                    }
                                    return 7 - get.value(card);
                                });
                                ('step 1');
                                if (result.cards && result.cards.length == 4) {
                                    var suits4 = [];
                                    trigger.cancel();
                                    for (var i = 0; i < result.cards.length; i++) {
                                        suits4.add(result.cards[i].suit);
                                    }
                                    if (suits4.length == 4) player.draw(4);
                                }
                            },
                        }, //此技能结束
                        /*—————————————————猜疑—————————————————*/
                        Grand_caiyi: {
                            //技能名称:猜疑
                            //技能类型:通用技能
                            //持有角色:埃尔文
                            //技能效果:准备阶段,你可以弃置1张牌,并选择一名除主公外未选择过的其他角色,猜测其的身份.若猜对,你摸3张牌;否则你失去一点体力
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            audio: 'ext:Grand包/audio/skill:2',
                            prompt: '是否发动【猜疑】',
                            filter(event, player) {
                                return player.countCards('he') && game.countPlayer((current) => current != player && current != game.zhu && !player.storage.Grand_caiyi.includes(current));
                            },
                            init: (player) => (player.storage.Grand_caiyi = []),
                            async content(event, trigger, player) {
                                //QQQ
                                const result = await player.chooseCardTarget({
                                    prompt: '弃置一张牌并选择一名其他角色,猜测其的身份',
                                    filterCard: true,
                                    position: 'he',
                                    filterTarget: (card, player, target) => !player.storage.Grand_caiyi.includes(target) && target != player && target != game.zhu,
                                    ai1: (card) => 7 - get.value(card),
                                    ai2(target) {
                                        return target.maxHp - target.hp || 1;
                                    },
                                }).forResult();
                                if (result.cards && result.targets && result.targets[0]) {
                                    player.discard(result.cards);
                                    player.storage.Grand_caiyi.add(result.targets[0]);
                                    const result1 = await player.chooseControl('zhong', 'fan', 'nei').set('ai', () => result.targets[0].identity).forResult();
                                    if (result.targets[0].identity == result1.control) {
                                        game.log(result.targets[0], '的身份是', result.targets[0].identity);
                                        player.draw(3);
                                    } else {
                                        player.loseHp(1);
                                        game.log(result.targets[0], '的身份不为', result1.control);
                                    }
                                }
                            },
                        }, //此技能结束
                        /*—————————————————真相—————————————————*/
                        Grand_zhenxiang: {
                            //技能名称:真相
                            //技能类型:通用技能
                            //持有角色:埃尔文
                            //技能效果:锁定技,当你失去体力后,你的手牌上限+1.若你本局游戏内失去体力的次数:①大于等于3:你摸两张牌;②小于3:你摸一张牌
                            trigger: {
                                player: 'loseHpEnd',
                            },
                            audio: 'ext:Grand包/audio/skill:2',
                            marktext: '真相',
                            intro: {
                                content: '本局游戏已失去#点体力',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (!player.storage.Grand_zhenxiang) player.storage.Grand_zhenxiang = 0;
                                player.storage.Grand_zhenxiang++;
                                player.markSkill('Grand_zhenxiang');
                                ('step 1');
                                if (player.storage.Grand_zhenxiang >= 3) {
                                    player.draw(2);
                                } else {
                                    player.draw(1);
                                }
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return (num += player.storage.Grand_zhenxiang || 0);
                                },
                            },
                        }, //此技能结束
                        /*—————————————————冲锋—————————————————*/
                        Grand_chongfeng: {
                            //技能名称:冲锋
                            //技能类型:通用技能
                            //持有角色:埃尔文
                            //技能效果:主公技,限定技,当你进入濒死状态时,你可以令其他群雄势力角色依次选择是否令你回复1点体力.若其选择是,其失去一点体力
                            trigger: {
                                player: 'dying',
                            },
                            audio: 'ext:Grand包/audio/skill:2',
                            zhuSkill: true,
                            prompt: '是否发动【冲锋】',
                            filter(event, player) {
                                if (player.storage.Grand_chongfeng) return false;
                                if (player.hp > 0) return false;
                                if (!player.hasZhuSkill('Grand_chongfeng')) return false;
                                return game.hasPlayer(function (current) {
                                    return current != player && current.group == 'qun';
                                });
                            },
                            init(player) {
                                if (player.hasZhuSkill('Grand_chongfeng')) {
                                    player.markSkill('Grand_chongfeng');
                                    player.storage.Grand_chongfeng = false;
                                }
                            },
                            intro: {
                                content: 'limited',
                            },
                            limited: true,
                            mark: false,
                            content() {
                                'step 0';
                                player.storage.Grand_chongfeng = true;
                                player.awakenSkill('Grand_chongfeng');
                                var targets = game.filterPlayer();
                                targets.remove(player);
                                event.targets = targets;
                                event.damages = [];
                                ('step 1');
                                if (event.targets.length) {
                                    var current = event.targets.shift();
                                    if (current.group == 'qun') {
                                        current
                                            .chooseBool('是否令' + get.translation(player) + '回复1点体力？')
                                            .set('ai', function () {
                                                return get.attitude(_status.event.player, _status.event.target) > 2;
                                            })
                                            .set('target', player);
                                        event.current = current;
                                    } else event.redo();
                                } else event.goto(3);
                                ('step 2');
                                if (result.bool) {
                                    event.damages.push(event.current);
                                    event.current.line(player, 'green');
                                    game.log(event.current, '令', player, '回复1点体力');
                                    player.recover();
                                }
                                if (event.targets.length) event.goto(1);
                                ('step 3');
                                if (event.damages.length) {
                                    var next = game.createEvent('Grand_chongfeng_next');
                                    event.next.remove(next);
                                    trigger.after.push(next);
                                    next.targets = event.damages;
                                    next.setContent(function () {
                                        for (var target of targets) {
                                            target.loseHp(1);
                                        }
                                    });
                                }
                            },
                        }, //此技能结束
                        /*—————————————————断臂—————————————————*/
                        Grand_duanbi: {
                            //技能名称:断臂
                            //技能类型:通用技能
                            //持有角色:埃尔文
                            //技能效果:每回合限一次,当你成为一名其他角色使用牌的目标后,你可以进行一次判定.若判定的结果为红色,你失去一点体力并从牌堆中获得一张红色基本牌;若判定结果为黑色,你可以弃置其区域内的一张牌
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            audio: 'ext:Grand包/audio/skill:2',
                            prompt: '是否发动【断臂】',
                            filter(event, player) {
                                return event.player != player && event.targets.includes(player);
                            },
                            usable: 1,
                            check(event, player) {
                                if (player.countCards('h') <= 1) return true;
                                return player.hp >= 2;
                            },
                            content() {
                                'step 0';
                                player.judge();
                                ('step 1');
                                if (result.color == 'red') {
                                    player.loseHp(1);
                                    var card = get.cardPile(function (card1) {
                                        return get.type(card1, false) == 'basic' && get.color(card1, false) == 'red';
                                    }, 'cardPile');
                                    player.gain(card, 'gain2');
                                } else {
                                    player.discardPlayerCard(trigger.player, 'hej').set('ai', function () {
                                        var player = _status.event.player;
                                        return get.attitude(player, trigger.player) < 0;
                                    });
                                }
                            },
                        }, //此技能结束
                        /*—————————————————箭越—————————————————*/
                        Grand_jianyue: {
                            //技能名称:箭越
                            //技能类型:通用技能
                            //持有角色:莉央
                            //技能效果:出牌阶段限X次,你可以将手牌中的一张伤害牌标记为<箭>并令你本回合使用【杀】的次数+1,你摸X张牌并弃置一张牌(X为你已损失的体力值且X至少为1)
                            audio: 'ext:Grand包/audio/skill:2',
                            enable: 'phaseUse',
                            position: 'h',
                            prompt: '是否发动【箭越】',
                            discard: false,
                            lose: false,
                            delay: false,
                            check(card) {
                                return get.value(card);
                            },
                            filterCard(card) {
                                return get.tag(card, 'damage') && !card.hasGaintag('箭');
                            },
                            filter(event, player) {
                                var num = 0;
                                var numhp = player.maxHp - player.hp;
                                if (numhp >= 1) {
                                    num += numhp;
                                } else {
                                    num += 1;
                                }
                                if (player.countSkill('Grand_jianyue') >= num) return false;
                                return player.getCards('h', function (card) {
                                    return get.tag(card, 'damage') && !card.hasGaintag('箭');
                                }).length;
                            },
                            content() {
                                'step 0';
                                player.addGaintag(cards, '箭');
                                ('step 1');
                                player.draw(player.maxHp - player.hp || 1);
                                player.chooseToDiscard('he', 1, true);
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + (player.countSkill('Grand_jianyue') || 0);
                                },
                            },
                        }, //此技能结束
                        /*————————————————正射必中————————————————*/
                        Grand_zhengshebizhong: {
                            //技能名称:正射必中
                            //技能类型:通用技能
                            //持有角色:莉央
                            //技能效果:锁定技,出牌阶段开始时,你将手牌中的所有伤害牌标记为<箭>;你的<箭>不计入手牌上限;当你失去<箭>后,你摸一张牌.你的攻击范围+X;你使用牌时,若X小于你的其他手牌数,此牌不可被响应;你造成伤害时,若X大于你的体力值,此牌造成伤害+1(X为你手牌中<箭>的数量)
                            audio: 'ext:Grand包/audio/skill:2',
                            forced: true,
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            content() {
                                var cards = player.getCards('h', function (card) {
                                    return get.tag(card, 'damage');
                                });
                                player.addGaintag(cards, '箭');
                            },
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (card.hasGaintag('箭')) {
                                        return true;
                                    }
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && card.hasGaintag('箭')) {
                                        return false;
                                    }
                                },
                                attackRange(from, distance) {
                                    return (distance += from.getCards('h', function (card) {
                                        return card.hasGaintag('箭');
                                    }).length);
                                },
                            },
                            group: ['Grand_zhengshebizhong_usecard', 'Grand_zhengshebizhong_sourcedamage', 'Grand_zhengshebizhong_lose'],
                            subSkill: {
                                usecard: {
                                    //子技能识别名:Grand_zhengshebizhong_usecard
                                    forced: true,
                                    audio: 'Grand_zhengshebizhong',
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    filter(event, player) {
                                        return (
                                            player.getCards('h', function (card) {
                                                return card.hasGaintag('箭');
                                            }).length <
                                            player.getCards('h', function (card) {
                                                return !card.hasGaintag('箭');
                                            }).length
                                        );
                                    },
                                    content() {
                                        trigger.directHit.addArray(
                                            game.filterPlayer(function (current) {
                                                return current != player;
                                            })
                                        );
                                    },
                                }, //子技能usecard结束
                                sourcedamage: {
                                    //子技能识别名:Grand_zhengshebizhong_sourcedamage
                                    forced: true,
                                    audio: 'Grand_zhengshebizhong',
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    filter(event, player) {
                                        return (
                                            player.getCards('h', function (card) {
                                                return card.hasGaintag('箭');
                                            }).length > player.hp
                                        );
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                }, //子技能sourcedamage结束
                                lose: {
                                    //子技能识别名:Grand_zhengshebizhong_lose
                                    forced: true,
                                    audio: 'Grand_zhengshebizhong',
                                    trigger: {
                                        player: 'loseAfter',
                                    },
                                    filter(event, player) {
                                        for (var i in event.gaintag_map) {
                                            if (event.gaintag_map[i].includes('箭')) return true;
                                        }
                                        return false;
                                    },
                                    content() {
                                        player.draw(1);
                                    },
                                }, //子技能lose结束
                            },
                        }, //此技能结束
                        /*—————————————————替弓—————————————————*/
                        Grand_tigong: {
                            //技能名称:替弓
                            //技能类型:通用技能
                            //持有角色:莉央
                            //技能效果:转换技,当你使一张<箭>指定目标时.阳:你可以视为对目标额外使用一次此牌.阴:你可以为此牌增加/减少一名目标
                            zhuanhuanji: true,
                            mark: true,
                            audio: 'ext:Grand包/audio/skill:2',
                            intro: {
                                content(storage, player) {
                                    if (storage) return '转换技,当你使一张<箭>指定目标时,你可以为此牌增加/减少一名目标';
                                    return '转换技,当你使一张<箭>指定目标时,你可以视为对目标额外使用一次此牌.';
                                },
                            },
                            prompt() {
                                var player = _status.event.player;
                                if (player.storage.Grand_tigong) return '是否发动【替弓】？为此牌增加/减少一名目标';
                                return '是否发动【替弓】？对目标额外使用一次此牌.';
                            },
                            check(event, player) {
                                if (!player.storage.Grand_tigong) {
                                    if (get.attitude(player, event.target) <= 0) return true;
                                    return false;
                                }
                                return true;
                            },
                            trigger: {
                                player: 'useCardToPlayer',
                            },
                            filter(event, player) {
                                if (!event.isFirstTarget) return false;
                                return player.hasHistory('lose', function (evt) {
                                    if (evt.parent == event.parent && evt.hs && evt.hs.length) {
                                        for (var i of evt.hs) {
                                            var id = i.cardid;
                                            if (evt.gaintag_map && evt.gaintag_map[id] && evt.gaintag_map[id].includes('箭')) return true;
                                        }
                                    }
                                    return false;
                                });
                            },
                            content() {
                                'step 0';
                                if (!player.storage.Grand_tigong) {
                                    var targets = [];
                                    for (var i = 0; trigger.targets.length > i; i++) {
                                        targets.add(trigger.targets[i]);
                                    }
                                    player.useCard({ name: trigger.card.name, nature: trigger.card.nature }, targets, false);
                                } else {
                                    var bool1 = trigger.targets.length > 1;
                                    var bool2 = game.hasPlayer(function (current) {
                                        return !trigger.targets.includes(current) && lib.filter.targetEnabled2(trigger.card, trigger.player, current);
                                    });
                                    if (bool1 && bool2) {
                                        player
                                            .chooseControlList(get.prompt('Grand_tigong'), ['为' + get.translation(trigger.card) + '增加一个目标', '为' + get.translation(trigger.card) + '减少一个目标'], function (event, player) {
                                                if (_status.event.add) return 0;
                                                return 1;
                                            })
                                            .set('add', get.effect(player, trigger.card, trigger.player, player) >= 0);
                                    } else if (bool2) {
                                        event.type = 'add';
                                        event.goto(2);
                                        event.unchosen = true;
                                    } else {
                                        event.type = 'remove';
                                        event.goto(2);
                                        event.unchosen = true;
                                    }
                                }
                                player.changeZhuanhuanji('Grand_tigong');
                                ('step 1');
                                if (!result.control) event.finish();
                                else {
                                    if (result.control == 'cancel2') {
                                        event.finish();
                                    } else if (result.index == 1) {
                                        event.type = 'remove';
                                    } else {
                                        event.type = 'add';
                                    }
                                }
                                ('step 2');
                                if (event.type == 'add') {
                                    player
                                        .chooseTarget(event.unchosen ? get.prompt('Grand_tigong') : null, '为' + get.translation(trigger.card) + '增加一个目标', function (card, player, target) {
                                            var trigger = _status.event.getTrigger();
                                            return !trigger.targets.includes(target) && lib.filter.targetEnabled2(trigger.card, trigger.player, target);
                                        })
                                        .set('ai', function (target) {
                                            var trigger = _status.event.getTrigger();
                                            return get.effect(target, trigger.card, trigger.player, _status.event.player);
                                        });
                                } else {
                                    player
                                        .chooseTarget(event.unchosen ? get.prompt('Grand_tigong') : null, '为' + get.translation(trigger.card) + '减少一个目标', function (card, player, target) {
                                            return _status.event.targets.includes(target);
                                        })
                                        .set('ai', function (target) {
                                            var trigger = _status.event.getTrigger();
                                            return -get.effect(target, trigger.card, trigger.player, _status.event.player);
                                        })
                                        .set('targets', trigger.targets);
                                }
                                ('step 3');
                                if (result.bool) {
                                    if (!event.isMine() && !event.isOnline()) game.delayx();
                                    event.target = result.targets[0];
                                } else {
                                    event.finish();
                                }
                                ('step 4');
                                if (event.type == 'add') {
                                    trigger.targets.push(event.target);
                                } else {
                                    trigger.parent.excluded.add(event.target);
                                }
                            },
                        }, //此技能结束
                        /*—————————————————芳魂—————————————————*/
                        Grand_fanghun: {
                            //技能名称:芳魂
                            //技能类型:通用技能
                            //持有角色:Grand赵襄
                            //技能效果:你可以将一张【杀】当做【闪】,【闪】当做【杀】使用或打出;当你因[芳魂]使用或打出【杀】或【闪】时,你可以获得对方的一张牌
                            audio: 'ext:Grand包/audio/skill:2',
                            mod: {
                                aiValue(player, card, num) {
                                    if (card.name != 'sha' && card.name != 'shan') return;
                                    var geti = function () {
                                        var cards = player.getCards('hs', function (card) {
                                            return card.name == 'sha' || card.name == 'shan';
                                        });
                                        if (cards.includes(card)) {
                                            return cards.indexOf(card);
                                        }
                                        return cards.length;
                                    };
                                    return Math.max(num, [7, 5, 5, 3][Math.min(geti(), 3)]);
                                },
                                aiUseful() {
                                    return lib.skill.ollongdan.mod.aiValue.apply(this, arguments);
                                },
                            },
                            enable: ['chooseToUse', 'chooseToRespond'],
                            position: 'hs',
                            prompt: '将杀当做闪,或将闪当做杀',
                            viewAs(cards, player) {
                                var name;
                                switch (cards[0]?.name) {
                                    case 'sha':
                                        name = 'shan';
                                        break;
                                    case 'shan':
                                        name = 'sha';
                                        break;
                                }
                                if (name) return { name: name };
                                return null;
                            }, //QQQ
                            check: () => 1,
                            filterCard(card, player, event) {
                                event = event || _status.event;
                                var filter = event._backup.filterCard;
                                var name = card.name;
                                if (name == 'sha' && filter({ name: 'shan', cards: [card] }, player, event)) return true;
                                if (name == 'shan' && filter({ name: 'sha', cards: [card] }, player, event)) return true;
                                return false;
                            },
                            filter(event, player) {
                                var filter = event.filterCard;
                                if (filter({ name: 'sha' }, player, event) && player.countCards('hs', 'shan')) return true;
                                if (filter({ name: 'shan' }, player, event) && player.countCards('hs', 'sha')) return true;
                                return false;
                            },
                            ai: {
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player, tag) {
                                    var name;
                                    switch (tag) {
                                        case 'respondSha':
                                            name = 'shan';
                                            break;
                                        case 'respondShan':
                                            name = 'sha';
                                            break;
                                    }
                                    if (!player.countCards('hs', name)) return false;
                                },
                                order(item, player) {
                                    if (player && _status.event.type == 'phase') {
                                        var max = 0;
                                        var list = ['sha'];
                                        var map = {
                                            sha: 'shan',
                                        };
                                        for (var i = 0; i < list.length; i++) {
                                            var name = list[i];
                                            if (
                                                player.countCards('hs', map[name]) > (name == 'jiu' ? 1 : 0) &&
                                                player.getUseValue({
                                                    name: name,
                                                }) > 0
                                            ) {
                                                var temp = get.order({
                                                    name: name,
                                                });
                                                if (temp > max) max = temp;
                                            }
                                        }
                                        if (max > 0) max += 0.3;
                                        return max;
                                    }
                                    return 4;
                                },
                            },
                            group: ['Grand_fanghun_respond', 'Grand_fanghun_usecard'],
                            subSkill: {
                                respond: {
                                    //子技能识别名:Grand_fanghun_respond
                                    trigger: {
                                        player: 'respond',
                                    },
                                    filter(event, player) {
                                        if (event.skill != 'Grand_fanghun') return false;
                                        return event.source && event.source.countGainableCards(player, 'hej') > 0;
                                    },
                                    logTarget: 'source',
                                    forced: true,
                                    content() {
                                        player.gainPlayerCard(trigger.source, 'hej');
                                    },
                                }, //子技能respond结束
                                usecard: {
                                    //子技能识别名:Grand_fanghun_usecard
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if ((event.card.name != 'sha' && event.card.name != 'shan') || event.skill != 'Grand_fanghun') return false;
                                        var target = lib.skill.chongzhen.logTarget(event, player);
                                        return target && target.countGainableCards(player, 'hej') > 0; //QQQ
                                    },
                                    logTarget(event, player) {
                                        if (event.card.name == 'sha') return event.targets[0];
                                        return event.respondTo[0];
                                    },
                                    content() {
                                        var target = lib.skill.chongzhen.logTarget(trigger, player);
                                        player.gainPlayerCard(target, 'hej');
                                    },
                                }, //子技能usecard结束
                            },
                        }, //此技能结束
                        /*—————————————————扶汉—————————————————*/
                        Grand_fuhan: {
                            //技能名称:扶汉
                            //技能类型:通用技能
                            //持有角色:Grand赵襄
                            //技能效果:当你使用或打出一张转化牌后,你可以随机获得一名已开启且势力与你相同的武将的一个你未拥有的技能,你可以变更自己的势力
                            trigger: {
                                player: ['useCardEnd', 'respond'],
                            },
                            audio: 'ext:Grand包/audio/skill:2',
                            usable: 1,
                            filter(event, player) {
                                return !event.card.isCard;
                            },
                            prompt: '是否发动【扶汉】',
                            prompt2(event, player) {
                                return '随机获得一个<' + get.translation(player.group) + '>势力武将的技能？';
                            },
                            content() {
                                'step 0';
                                var list;
                                if (_status.characterlist) {
                                    list = [];
                                    for (var i = 0; i < _status.characterlist.length; i++) {
                                        var name = _status.characterlist[i];
                                        if (lib.character[name][1] == player.group) list.push(name);
                                    }
                                } else if (_status.connectMode) {
                                    list = get.charactersOL(function (i) {
                                        return lib.character[i][1] != player.group;
                                    });
                                } else {
                                    list = get.gainableCharacters(function (info) {
                                        return info[1] == player.group;
                                    });
                                }
                                list = list.randomGets(Math.max(1));
                                var skills = [];
                                for (var i of list) {
                                    skills.addArray(
                                        (lib.character[i][3] || []).filter(function (skill) {
                                            var info = get.info(skill);
                                            return info && !info.charlotte && !player.hasSkill(skill);
                                        })
                                    );
                                }
                                var skill = skills.randomGets(Math.max(1));
                                player.addSkillLog(skill);
                                player.flashAvatar('twhuashen', list);
                                ('step 1');
                                if (result.control != 'cancel') {
                                    var list = [];
                                    var map = {};
                                    for (var i = 0; lib.group.length > i; i++) {
                                        var cn = get.translation(lib.group[i], true);
                                        map[cn] = lib.group[i];
                                        list.push(cn);
                                    }
                                    list.remove(player.group);
                                    list.remove('死灵术');
                                    event.map = map;
                                    list.remove(get.translation(player.group));
                                    var result = player.chooseButton(['扶汉:选择你要变更的势力', [list, 'tdnodes']]).set('ai', function () {
                                        return list.randomGet();
                                    });
                                }
                                ('step 2');
                                if (result.links?.length) {
                                    player.changeGroup(event.map[result.links[0]]);
                                }
                            },
                        }, //此技能结束
                        /*—————————————————潜龙—————————————————*/
                        Grand_qianlong: {
                            //技能名称:潜龙
                            //技能类型:通用技能
                            //持有角色:Grand曹髦
                            //技能效果:一名角色的出牌阶段开始时,若其手牌数不小于你,你可以令其将一张手牌置于你的武将牌上,称之为<潜龙>;当一名其他角色使用牌指定你为目标时,你可以失去一点体力,获得<潜龙>中的全部牌.
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            audio: 'ext:Grand包/audio/skill:2',
                            filter(event, player) {
                                if (event.player.countCards('h') == 0) return false;
                                return event.player.countCards('h') >= player.countCards('h');
                            },
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            check(event, player) {
                                if (event.player == player && player.countCards('h') > player.getHandcardLimit()) return true; //QQQ
                                return get.attitude(player, event.player) <= 0;
                            },
                            prompt: '是否发动【潜龙】',
                            prompt2(event, player) {
                                return '令' + get.translation(event.player) + '将一张牌置于你的武将牌上';
                            },
                            content() {
                                'step 0';
                                trigger.player.chooseCard('h', true, '将一张牌置于' + get.translation(player) + '的武将牌上');
                                ('step 1');
                                player.addToExpansion(result.cards, 'giveAuto', trigger.player).gaintag.add('Grand_qianlong');
                                player.markSkill('Grand_qianlong');
                            },
                            group: ['Grand_qianlong_losehp'],
                            subSkill: {
                                losehp: {
                                    //子技能识别名:Grand_qianlong_losehp
                                    trigger: {
                                        target: 'useCardToTargeted',
                                    },
                                    audio: 'Grand_qianlong',
                                    prompt: '是否发动【潜龙】？',
                                    prompt2: '获得<潜龙>中的所有牌',
                                    check(event, player) {
                                        return player.hp > 1 && player.getExpansions('Grand_qianlong').length > player.countCards('h') + 2;
                                    },
                                    filter(event, player) {
                                        return player.getExpansions('Grand_qianlong').length && event.player != player;
                                    },
                                    content() {
                                        player.loseHp(1);
                                        var cards = player.getExpansions('Grand_qianlong');
                                        list = [];
                                        for (var i = 0; i < cards.length; i++) {
                                            list.push(cards[i]);
                                        }
                                        player.gain(list, 'give', player, 'bySlef');
                                        player.showCards(list, '潜龙');
                                    },
                                }, //子技能losehp结束
                            },
                        }, //此技能结束
                        /*—————————————————忿肆—————————————————*/
                        Grand_fensi: {
                            //技能名称:忿肆
                            //技能类型:通用技能
                            //持有角色:Grand曹髦
                            //技能效果:出牌阶段,你可以获得一张<潜龙>中的牌,并将一张手牌置于<潜龙>中.若你<潜龙>中的牌花色相同,你重置『决讨』
                            audio: 'ext:Grand包/audio/skill:2',
                            enable: 'phaseUse',
                            prompt: '是否发动【忿肆】',
                            filter(event, player) {
                                return player.getExpansions('Grand_qianlong').length;
                            },
                            content() {
                                'step 0';
                                player.chooseCardButton('获得一张<潜龙>', player.getExpansions('Grand_qianlong'), true);
                                ('step 1');
                                player.gain(result.links[0], 'give', player, 'bySlef');
                                player.chooseCard('h', true, '将一张手牌置于<潜龙>中').set('ai', function (card) {
                                    var player = _status.event.player;
                                    var cards = player.getExpansions('Grand_qianlong');
                                    list = [];
                                    for (var i = 0; i < cards.length; i++) {
                                        var suit = cards[i].suit;
                                        if (!list.includes(suit)) {
                                            list.push(suit);
                                        }
                                    }
                                    if (list.includes(card.suit)) return 10;
                                    return 7 - get.value(card);
                                });
                                ('step 2');
                                player.addToExpansion(result.cards[0], 'giveAuto', player).gaintag.add('Grand_qianlong');
                                ('step 3');
                                var cards = player.getExpansions('Grand_qianlong');
                                list = [];
                                for (var i = 0; i < cards.length; i++) {
                                    var card = cards[i],
                                        suit = card.suit;
                                    if (!list.includes(suit)) {
                                        list.push(suit);
                                    }
                                }
                                if (list.length == 1 && player.storage.Grand_juetao) {
                                    player.restoreSkill('Grand_juetao');
                                }
                            },
                            ai: {
                                order: 3,
                                result: {
                                    player(player) {
                                        if ((player.countSkill('Grand_fensi') || 0) >= 3) return 0;
                                        return 5 - player.getExpansions('Grand_qianlong').length;
                                    },
                                },
                            },
                        }, //此技能结束
                        /*—————————————————决讨—————————————————*/
                        Grand_juetao: {
                            //技能名称:决讨
                            //技能类型:通用技能
                            //持有角色:Grand曹髦
                            //技能效果:限定技,准备阶段,若你的体力值为1,或你<潜龙>中的牌数大于游戏内的玩家数,你可以选择一名其他角色,对其使用<潜龙>中最后一张牌,若<潜龙>中的上一张牌可以被使用,你重复此流程
                            audio: 'ext:Grand包/audio/skill:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            limited: true,
                            prompt: '是否发动【决讨】',
                            prompt2: '对一名角色使用<潜龙>中的牌',
                            filter(event, player) {
                                if (player.getExpansions('Grand_qianlong').length > game.filterPlayer().length) return true;
                                return player.hp == 1 && player.getExpansions('Grand_qianlong').length;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('Grand_juetao'), lib.filter.notMe).set('ai', function (target) {
                                    return -get.attitude(_status.event.player, target);
                                });
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    player.awakenSkill('Grand_juetao');
                                } else event.finish();
                                ('step 2');
                                var card = player.getExpansions('Grand_qianlong')[0];
                                event.card = card;
                                game.cardsGotoOrdering(card);
                                player.showCards(card);
                                player
                                    .chooseUseTarget(card, true, false, 'nodistance')
                                    .set('filterTarget', function (card, player, target) {
                                        var evt = _status.event;
                                        if (_status.event.name == 'chooseTarget') evt = evt.parent;
                                        if (target != player && target != evt.Grand_juetao_target) return false;
                                        return lib.filter.targetEnabledx(card, player, target);
                                    })
                                    .set('Grand_juetao_target', target);
                                ('step 3');
                                if (result.bool && target.isIn() && player.getExpansions('Grand_qianlong').length) event.goto(2);
                            },
                        }, //此技能结束
                        /*—————————————————助势—————————————————*/
                        Grand_zhushi: {
                            //技能名称:助势
                            //技能类型:通用技能
                            //持有角色:Grand曹髦
                            //技能效果:主公技,当你对一名魏势力角色发动『潜龙』①后,你可以将一张手牌置于<潜龙>中.
                            audio: 'ext:Grand包/audio/skill:2',
                            zhuSkill: true,
                            trigger: {
                                player: 'logSkill',
                            },
                            prompt: '是否发动【助势】',
                            prompt: '将一张手牌置于武将牌上',
                            check(event, player) {
                                return player.countCards('h') > 2;
                            },
                            filter(event, player) {
                                if (event.skill != 'Grand_qianlong') return false;
                                if (_status.currentPhase.group != 'wei') return false;
                                return event.player.group == 'wei' && player.hasZhuSkill('Grand_zhushi', event.player) && player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseCard('h', true, '将一张手牌置于武将牌上');
                                ('step 1');
                                player.addToExpansion(result.cards, 'giveAuto', player).gaintag.add('Grand_qianlong');
                            },
                        }, //此技能结束
                        /*—————————————————怀异—————————————————*/
                        Grand_huaiyi: {
                            //技能名称:怀异
                            //技能类型:通用技能
                            //持有角色:Grand公孙渊
                            //技能效果:出牌阶段限一次,你可以展示任意张手牌,若这些牌的颜色:全部相同,你回复一点体力,你可以令至多X名角色摸一张牌;不全部相同,你可以获得至多X名角色的一张牌(X为你展示的牌的数量)
                            audio: 'ext:Grand包/audio/skill:2',
                            enable: 'phaseUse',
                            prompt: '是否发动【怀异】',
                            prompt2: '展示任意张手牌',
                            usable: 1,
                            position: 'h',
                            filterCard: true,
                            selectCard: [1, Infinity],
                            discard: false,
                            lose: false,
                            content() {
                                'step 0';
                                player.showCards(cards);
                                ('step 1');
                                if (get.color(cards) != 'none') {
                                    player.recover();
                                    player.chooseTarget([0, cards.length], get.prompt('Grand_huaiyi'), '令至多' + cards.length + '名角色摸一张牌').ai = function (target) {
                                        var player = _status.event.player;
                                        return get.attitude(player, target);
                                    };
                                } else {
                                    player
                                        .chooseTarget([0, cards.length], get.prompt('Grand_huaiyi'), '获得至多' + cards.length + '名角色的一张牌', function (card, player, target) {
                                            return target != player;
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            return get.attitude(player, target) <= 0;
                                        });
                                }
                                ('step 2');
                                if (result.bool) {
                                    if (get.color(cards) != 'none') {
                                        for (var i = 0; result.targets.length > i; i++) {
                                            result.targets[i].draw(1);
                                        }
                                    } else {
                                        for (var i = 0; result.targets.length > i; i++) {
                                            player.gainPlayerCard(result.targets[i], 'he', true);
                                        }
                                    }
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player: 10,
                                },
                            },
                        }, //此技能结束
                        /*—————————————————旋国—————————————————*/
                        Grand_xuanguo: {
                            //技能名称:旋国
                            //技能类型:通用技能
                            //持有角色:Grand公孙渊
                            //技能效果:一名其他角色的出牌阶段开始时,你可以令其选择是否交给你一张手牌.若其选择是,你须视为使用一张【杀】.
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return event.player != player;
                            },
                            audio: 'ext:Grand包/audio/skill:2',
                            prompt: '是否发动【旋国】',
                            prompt2(event, player) {
                                return '令' + get.translation(event.player) + '选择是否交给你一张牌？';
                            },
                            content() {
                                'step 0';
                                _status.currentPhase
                                    .chooseCard('h', '是否交给' + get.translation(player) + '一张牌？')
                                    .set('goon', get.attitude(_status.currentPhase, player) > 0)
                                    .set('ai', function (card) {
                                        return _status.event.goon ? 1 : 0;
                                    });
                                ('step 1');
                                if (result.cards?.length) {
                                    trigger.player.give(result.cards[0], player);
                                    player.chooseUseTarget({ name: 'sha' }, true, false);
                                }
                            },
                        }, //此技能结束
                        /*—————————————————凌人—————————————————*/
                        Grand_lingren: {
                            //技能名称:凌人
                            //技能类型:通用技能
                            //持有角色:Grand曹婴
                            //技能效果:蓄力技(1/2),当你使用伤害牌指定其他角色目标时,你可以消耗所有蓄力点数并摸等量的牌,令其中一个目标不可响应此牌,与其选择1至X中的一个数字(X为你消耗的蓄力点数).若你与其选择的数字:相同:你令此伤害增加X,并获得『奸雄』,『行殇』直到下回合开始;不同:①你令此伤害增加Y(Y为你与其选择数字的差的绝对值);②若Y＞=2,你获得『奸雄』,『行殇』直到下回合开始
                            audio: 'ext:Grand包/audio/skill:2',
                            chargeSkill: true,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!event.isFirstTarget) return false;
                                return player.hasMark('charge') && get.tag(event.card, 'damage');
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('Grand_lingren'), '摸' + player.countMark('charge') + '张牌,并令一名目标角色无法响应' + get.translation(trigger.card), function (card, player, target) {
                                        return _status.event.targets.includes(target);
                                    })
                                    .set('ai', function (target) {
                                        return 2 - get.attitude(_status.event.player, target);
                                    })
                                    .set('targets', trigger.targets);
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    trigger.directHit.add(target);
                                    event.num = player.countMark('charge');
                                    player.draw(event.num);
                                    player.removeMark('charge', player.countMark('charge'));
                                    var map = {};
                                    var list = [];
                                    for (var i = 1; i <= event.num; i++) {
                                        var cn = get.cnNumber(i, true);
                                        map[cn] = i;
                                        list.push(cn);
                                    }
                                    event.map = map;
                                    event.list = list;
                                    target
                                        .chooseControl(list)
                                        .set('ai', function () {
                                            return list.randomGet();
                                        })
                                        .set('prompt', '凌人:请选择一个数字');
                                }
                                ('step 2');
                                if (result.control) {
                                    var num1 = event.map[result.control];
                                    event.num1 = num1;
                                    player
                                        .chooseControl(event.list)
                                        .set('ai', function () {
                                            return event.list.randomGet();
                                        })
                                        .set('prompt', '凌人:请选择一个数字');
                                }
                                ('step 3');
                                if (result.control) {
                                    var num2 = event.map[result.control];
                                    event.target.addTempSkill('Grand_lingren_damage');
                                    event.target.storage.Grand_lingren_card = {
                                        card: trigger.card,
                                    };
                                    if (num2 == event.num1) {
                                        if (!event.target.storage.Grand_lingren_damage) event.target.storage.Grand_lingren_damage = num2;
                                        player.addTempSkill('lingren_jianxiong', { player: 'phaseBegin' });
                                        player.addTempSkill('lingren_xingshang', { player: 'phaseBegin' });
                                    } else {
                                        var num3 = Math.abs(num2 - event.num1);
                                        if (!event.target.storage.Grand_lingren_damage) event.target.storage.Grand_lingren_damage = num3;
                                        if (num3 >= 2) {
                                            player.addTempSkill('lingren_jianxiong', { player: 'phaseBegin' });
                                            player.addTempSkill('lingren_xingshang', { player: 'phaseBegin' });
                                        }
                                    }
                                }
                            },
                            group: ['Grand_lingren_init'],
                            subSkill: {
                                init: {
                                    //子技能识别名:Grand_lingren_init
                                    trigger: {
                                        global: 'phaseBefore',
                                        player: 'enterGame',
                                    },
                                    forced: true,
                                    audio: 'Grand_lingren',
                                    filter(event, player) {
                                        return event.name != 'phase' || game.phaseNumber == 0;
                                    },
                                    content() {
                                        player.addMark('charge', 1);
                                    },
                                }, //子技能init结束
                                damage: {
                                    //子技能识别名:Grand_lingren_damage
                                    onremove(player) {
                                        delete player.storage.Grand_lingren_damage;
                                        delete player.storage.Grand_lingren_card;
                                    },
                                    trigger: {
                                        player: 'damageBegin3',
                                    },
                                    filter(event, player) {
                                        var info = player.storage.Grand_lingren_card;
                                        return event.card && event.card == info.card;
                                    },
                                    silent: true,
                                    popup: false,
                                    forced: true,
                                    charlotte: true,
                                    content() {
                                        trigger.num += player.storage.Grand_lingren_damage;
                                    },
                                }, //子技能damage结束
                            },
                        }, //此技能结束
                        /*—————————————————伏间—————————————————*/
                        Grand_fujian: {
                            //技能名称:伏间
                            //技能类型:通用技能
                            //持有角色:Grand曹婴
                            //技能效果:锁定技,①结束阶段,你获得等同于你手牌数的『凌人』蓄力点数;②一名角色死亡时,你获得1点『凌人』蓄力点数,并增加1点『凌人』蓄力点的上限
                            audio: 'ext:Grand包/audio/skill:2',
                            trigger: {
                                global: 'die',
                            },
                            forced: true,
                            content() {
                                if (player.countMark('charge') < (player.storage.Grand_lingren || 0) + 2) player.addMark('charge');
                                if (!player.storage.Grand_lingren) player.storage.Grand_lingren = 0;
                                player.storage.Grand_lingren++;
                            },
                            group: ['Grand_fujian_phasejieshu'],
                            subSkill: {
                                phasejieshu: {
                                    //子技能识别名:Grand_fujian_phasejieshu
                                    audio: 'Grand_fujian',
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countCards('h') > 0 && player.countMark('charge') < (player.storage.Grand_lingren || 0) + 2;
                                    },
                                    content() {
                                        var num1 = (player.storage.Grand_lingren || 0) + 2;
                                        var num = Math.min(player.countCards('h'), num1 - player.countMark('charge'));
                                        player.addMark('charge', num);
                                    },
                                }, //子技能phasejieshu结束
                            },
                        }, //此技能结束
                        /*—————————————————虎啸—————————————————*/
                        Grand_huxiao: {
                            //技能名称:虎啸
                            //技能类型:通用技能
                            //持有角色:Grand关银屏
                            //技能效果:锁定技,当你对一名角色造成火属性伤害时,你与其各摸一张牌,你对其使用牌无距离和次数限制直到回合结束
                            trigger: {
                                source: 'damageSource',
                            },
                            forced: true,
                            audio: 'ext:Grand包/audio/skill:2',
                            filter(event, player) {
                                return event.nature == 'fire';
                            },
                            logTarget: 'player',
                            content() {
                                if (!player.storage.Grand_huxiao_usecard) {
                                    player.storage.Grand_huxiao_usecard = [];
                                }
                                player.storage.Grand_huxiao_usecard.add(trigger.player);
                                trigger.player.draw(1);
                                player.draw(1);
                                player.addTempSkill('Grand_huxiao_usecard');
                            },
                            subSkill: {
                                usecard: {
                                    //子技能识别名:Grand_huxiao_usecard
                                    charlotte: true,
                                    mark: true,
                                    intro: {
                                        content: 'players',
                                    },
                                    mod: {
                                        cardUsableTarget(card, player, target) {
                                            if (player.storage.Grand_huxiao_usecard && player.storage.Grand_huxiao_usecard.includes(target)) return true;
                                        },
                                        targetInRange(card, player, target, now) {
                                            if (player.storage.Grand_huxiao_usecard && player.storage.Grand_huxiao_usecard.includes(target)) return true;
                                        },
                                    },
                                }, //子技能usecard结束
                            },
                        }, //此技能结束
                        /*—————————————————雪恨—————————————————*/
                        Grand_xuehen: {
                            //技能名称:雪恨
                            //技能类型:通用技能
                            //持有角色:Grand关银屏
                            //技能效果:出牌阶段限一次,你可以选择至多X名角色,横置这些角色并依次对其造成1点火属性伤害(X为你已损失体力值且X至少为1)
                            audio: 'ext:Grand包/audio/skill:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget: true,
                            selectTarget() {
                                var player = _status.event.player;
                                return [1, Math.max(1, player.getDamagedHp())];
                            },
                            multitarget: true,
                            multiline: true,
                            line: 'fire',
                            content() {
                                'step 0';
                                for (var i = 0; i < targets.length; i++) {
                                    if (!targets[i].isLinked()) {
                                        targets[i].link(true);
                                    }
                                }
                                ('step 1');
                                for (var i = 0; i < targets.length; i++) {
                                    targets[i].damage(1, 'fire');
                                }
                            },
                            ai: {
                                damage: true,
                                fireAttack: true,
                                threaten: 1.5,
                                order: 7,
                                result: {
                                    target(player, target) {
                                        var eff = get.damageEffect(target, player, target, 'fire');
                                        if (target.isLinked()) {
                                            return eff / 10;
                                        } else {
                                            return eff;
                                        }
                                    },
                                },
                            },
                        }, //此技能结束
                        /*—————————————————武继—————————————————*/
                        Grand_wuji: {
                            //技能名称:武继
                            //技能类型:通用技能
                            //持有角色:Grand关银屏
                            //技能效果:觉醒技,结束阶段,若你已损失体力值≥2,你增加一点体力上限,回复一点体力,并获得每名其他角色区域内的一张牌.你从牌堆或弃牌堆获得一张青龙偃月刀,并执行一个额外的回合,你于此回合的出牌阶段内造成的伤害均视为火属性伤害
                            audio: 'ext:Grand包/audio/skill:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            juexingji: true,
                            filter(event, player) {
                                return player.maxHp - player.hp >= 2;
                            },
                            content() {
                                'step 0';
                                player.gainMaxHp(1);
                                player.recover(1);
                                player.awakenSkill(event.name);
                                ('step 1');
                                var targets = game.filterPlayer();
                                targets.remove(player);
                                targets.sort(lib.sort.seat);
                                player.line(targets, 'green');
                                for (var i = 0; targets.length > i; i++) {
                                    player.gainPlayerCard(targets[i], true, 'hej');
                                }
                                ('step 2');
                                var card = get.cardPile('qinglong', 'field');
                                if (card) player.gain(card, 'gain2', 'log');
                                ('step 3');
                                player.phase('nodelay');
                                player.addTempSkill('Grand_wuji_damage', { player: 'phaseDiscardBefore' });
                            },
                            subSkill: {
                                damage: {
                                    //子技能识别名:Grand_wuji_damage
                                    audio: 'Grand_wuji',
                                    charlotte: true,
                                    forced: true,
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    filter(event, player) {
                                        return event.nature != 'fire';
                                    },
                                    content() {
                                        trigger.nature = 'fire';
                                    },
                                }, //子技能damage结束
                            },
                        }, //此技能结束
                        /*—————————————————天任—————————————————*/
                        Grand_tianren: {
                            //技能名称:天任
                            //技能类型:通用技能
                            //持有角色:Grand神姜维
                            //技能效果:使命技.游戏开始时,你获得X点体力上限(X为场上势力数).使命:一名角色死亡时,若其势力所在人数不大于1,你获得『九伐』,并将势力替换为该角色的势力.失败:当你进入濒死状态时,你回复体力至1.你摸等同于你已损失体力值数量的牌,并获得『困奋』
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            audio: 'ext:Grand包/audio/skill:2',
                            logTarget: 'player',
                            derivation: ['Grand_jiufa', 'kunfen'],
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                var num = game.countGroup();
                                player.gainMaxHp(num);
                            },
                            group: ['Grand_tianren_achieve', 'Grand_tianren_fail'],
                            subSkill: {
                                achieve: {
                                    //子技能识别名:Grand_tianren_achieve
                                    trigger: {
                                        global: 'dieAfter',
                                    },
                                    forced: true,
                                    audio: 'Grand_tianren',
                                    filter(event, player) {
                                        if (!lib.group.includes(event.player.group)) return false;
                                        return (
                                            game.filterPlayer(function (current) {
                                                return current.group == event.player.group;
                                            }).length <= 1
                                        );
                                    },
                                    content() {
                                        'step 0';
                                        game.log(player, '使命成功');
                                        player.awakenSkill('Grand_tianren');
                                        player.changeGroup(trigger.player.group);
                                        player.addSkillLog('Grand_jiufa');
                                        game.broadcastAll() + player.node.avatar.setBackgroundImage('extension/Grand包/image/skill/character/achieve_shenjiangwei.jpg');
                                    },
                                }, //子技能achieve结束
                                fail: {
                                    //子技能识别名:Grand_tianren_fail
                                    trigger: {
                                        player: 'dying',
                                    },
                                    forced: true,
                                    audio: 'Grand_tianren',
                                    content() {
                                        'step 0';
                                        game.log(player, '使命失败');
                                        player.awakenSkill('Grand_tianren');
                                        game.broadcastAll() + player.node.avatar.setBackgroundImage('extension/Grand包/image/skill/character/fail_shenjiangwei.jpg');
                                        ('step 1');
                                        var num = 1 - player.hp;
                                        player.recover(num);
                                        ('step 2');
                                        var num = player.maxHp - player.hp;
                                        player.draw(num);
                                        ('step 3');
                                        player.addSkillLog('kunfen');
                                    },
                                }, //子技能fail结束
                            },
                        }, //此技能结束
                        /*—————————————————平襄—————————————————*/
                        Grand_pingxiang: {
                            //技能名称:平襄
                            //技能类型:通用技能
                            //持有角色:Grand神姜维
                            //技能效果:一名角色受到不为你造成伤害后,你可以失去一点体力上限并视为对其伤害来源使用一张火属性【杀】,你摸X张牌(X为你本局游戏内发动『平襄』的次数
                            trigger: {
                                global: 'damageEnd',
                            },
                            audio: 'ext:Grand包/audio/skill:2',
                            filter(event, player) {
                                if (player.maxHp <= 1) return false;
                                if (!event.source) return false;
                                return event.source != player;
                            },
                            prompt: '是否发动【平襄】',
                            prompt2(event, player) {
                                return '失去一点体力上限,并视为对' + get.translation(event.source) + '使用一张火【杀】';
                            },
                            check(event, player) {
                                var num = player.hp;
                                num += player.countCards('h', { name: 'tao' });
                                if (player.maxHp - num <= 0) return false;
                                return get.attitude(player, event.source) < 0;
                            },
                            content() {
                                player.loseMaxHp(1);
                                player.useCard({ name: 'sha', nature: 'fire' }, trigger.source, false);
                                var num = player.getAllHistory('useSkill', function (evt) {
                                    return evt.skill == 'Grand_pingxiang';
                                }).length;
                                player.draw(num);
                            },
                        }, //此技能结束
                        /*—————————————————九伐—————————————————*/
                        Grand_jiufa: {
                            //技能名称:九伐
                            //技能类型:通用技能
                            //持有角色:Grand神姜维
                            //技能效果:锁定技,准备阶段,你增加一点体力上限,回复一点体力并须选择至少一名势力相同的其他角色,你摸等同于你选择角色数牌,你依次对这些角色造成一点伤害,并受到其对你造成的一点伤害
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            audio: 'ext:Grand包/audio/skill:2',
                            content() {
                                'step 0';
                                player.gainMaxHp(1);
                                player.recover(1);
                                player
                                    .chooseTarget([1, game.filterPlayer().length], true, get.prompt('Grand_jiufa'), '选择任意名势力相同的其他角色,对这些角色造成一点伤害,并受到这些角色对你造成的一点伤害', function (card, player, target) {
                                        if (target == player) return false;
                                        var group = [];
                                        for (var i = 0; ui.selected.targets.length > i; i++) {
                                            group.push(ui.selected.targets[i].group);
                                        }
                                        return group.includes(target.group) || group.length == 0;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(_status.event.player, target) < 0;
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    player.draw(result.targets.length);
                                    for (var i = 0; result.targets.length > i; i++) {
                                        result.targets[i].damage(1);
                                        player.damage(1, result.targets[i]);
                                    }
                                }
                            },
                        }, //此技能结束
                        /*—————————————————词论—————————————————*/
                        Grand_cilun: {
                            //技能名称:词论
                            //技能类型:通用技能
                            //持有角色:李清照
                            //技能效果:出牌阶段限三次,你可以用一张手牌与至多三名角色同时拼点,依次结算拼点结果.若你没赢,你于回合结束时失去一点体力并摸两张牌,且『词论』无效直到回合结束;否则你摸一张牌且本回合使用牌无距离和次数限制
                            audio: 'ext:Grand包/audio/skill:1',
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return player.canCompare(target);
                            },
                            selectTarget: [1, 3],
                            usable: 3,
                            filter(event, player) {
                                return player.countCards('h') > 0 && !player.hasSkill('Grand_cilun_off');
                            },
                            multitarget: true,
                            multiline: true,
                            content() {
                                player.chooseToCompare(targets).callback = lib.skill.Grand_cilun.callback;
                            },
                            callback() {
                                'step 0';
                                if (event.num1 <= event.num2) {
                                    player.addTempSkill('Grand_cilun_off');
                                } else {
                                    player.draw(1);
                                    player.addTempSkill('Grand_cilun_use');
                                }
                            },
                            ai: {
                                order: 7,
                                result: {
                                    player(player, target, card) {
                                        var num = player.countCards('h');
                                        var numsha = player.countCards('h', { name: 'sha' });
                                        if (num <= 2) return 0;
                                        if (num - numsha <= 2) return 0;
                                        return num - numsha;
                                    },
                                    target(player, target, card) {
                                        return get.attitude(player, target) < 0;
                                    },//QQQ
                                },
                            },
                            subSkill: {
                                use: {
                                    //子技能识别名:Grand_cilun_use
                                    charlotte: true,
                                    mod: {
                                        targetInRange(card, player, target, now) {
                                            return true;
                                        },
                                        cardUsable(card, player, num) {
                                            return Infinity;
                                        },
                                    },
                                }, //子技能use结束
                                off: {
                                    //子技能识别名:Grand_cilun_use
                                    onremove(player, skill) {
                                        player.loseHp(1);
                                        player.draw(2);
                                    },
                                }, //子技能off结束
                            },
                        }, //此技能结束
                        /*—————————————————词赋—————————————————*/
                        Grand_cifu: {
                            //技能名称:词赋
                            //技能类型:通用技能
                            //持有角色:李清照
                            //技能效果:每回合限一次,当你成为一名角色使用非延时锦囊牌的目标时,你可以进行一次判定.若判定牌的花色与该牌花色不同,则你获得判定牌与该牌对应的所有实体牌.
                            audio: 'ext:Grand包/audio/skill:2',
                            usable: 1,
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            check(event, player) {
                                return event.card.isCard;
                            },
                            filter(event, player) {
                                return get.type(event.card) == 'trick';
                            },
                            content() {
                                'step 0';
                                player.judge();
                                ('step 1');
                                if (result.card.suit != trigger.card.suit) {
                                    player.gain(result.card);
                                    var cards = trigger.cards.filterInD();
                                    if (cards.length) player.gain(cards, 'gain2', 'log');
                                }
                            },
                        }, //此技能结束
                        /*—————————————————双全—————————————————*/
                        Grand_shuangquan: {
                            //技能名称:双全
                            //技能类型:通用技能
                            //持有角色:辛弃疾
                            //技能效果:锁定技,当你使用或打出一张锦囊牌/基本牌后,你从牌堆获得一张基本牌/锦囊牌
                            forced: true,
                            audio: 'ext:Grand包/audio/skill:2',
                            trigger: {
                                player: ['useCardEnd', 'respond'],
                            },
                            filter(event, player) {
                                return get.type2(event.card) != 'equip';
                            },
                            content() {
                                var type = get.type2(trigger.card);
                                if (type == 'trick') var type2 = 'basic';
                                if (type == 'basic') var type2 = 'trick';
                                var card = get.cardPile(function (card) {
                                    if (get.type2(card) == type2) return true;
                                    return false;
                                }, 'cardPile');
                                player.gain(card, 'gain2');
                            },
                        }, //此技能结束
                        /*—————————————————传奇—————————————————*/
                        Grand_chuanqi: {
                            //技能名称:传奇
                            //技能类型:通用技能
                            //持有角色:东海帝皇
                            //技能效果:锁定技,①游戏开始时,你废除你的坐骑栏;②其他角色计算与你之间的距离+1,你计算与其他角色之间的距离-1;③你始终跳过你的准备阶段,判定阶段,摸牌阶段,弃牌阶段,结束阶段
                            popup: false,
                            trigger: {
                                player: ['phaseZhunbeiBefore', 'phaseJudgeBefore', 'phaseDrawBefore', 'phaseDiscardBefore', 'phaseJieshuBefore'],
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                            group: ['Grand_chuanqi_gamestar'],
                            subSkill: {
                                gamestar: {
                                    //子技能识别名:Grand_chuanqi_gamestar
                                    forced: true,
                                    audio: 'ext:Grand包/audio/skill:1',
                                    trigger: {
                                        global: 'phaseBefore',
                                        player: 'enterGame',
                                    },
                                    filter(event, player) {
                                        return event.name != 'phase' || game.phaseNumber == 0;
                                    },
                                    content() {
                                        player.disableEquip('equip3');
                                        player.disableEquip('equip4');
                                    },
                                    mod: {
                                        globalFrom(from, to, current) {
                                            return current - 1;
                                        },
                                        globalTo(from, to, current) {
                                            return current + 1;
                                        },
                                    },
                                }, //子技能gamestar结束
                            },
                        }, //此技能结束
                        /*—————————————————屡战—————————————————*/
                        Grand_lvzhan: {
                            //技能名称:屡战
                            //技能类型:通用技能
                            //持有角色:东海帝皇
                            //技能效果:出牌阶段开始时,你可以摸X张牌(X为4-本轮你发动『屡战』的次数),若如此做,此次出牌阶段结束后:若你造成过伤害,你弃置所有手牌,并执行一个额外的出牌阶段;否则你将手牌调整至体力上限
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            audio: 'ext:Grand包/audio/skill:2',
                            content() {
                                if (!player.storage.Grand_lvzhan_storage) player.storage.Grand_lvzhan_storage = 0;
                                var num = player.storage.Grand_lvzhan_storage;
                                player.draw(4 - num);
                                player.storage.Grand_lvzhan_storage++;
                                player.addTempSkill('Grand_lvzhan_storage', 'roundStart');
                                player.addSkill('Grand_lvzhan_phase');
                                player.addTempSkill('Grand_lvzhan_damage', { player: 'phaseUseBefore' });
                            },
                            subSkill: {
                                storage: {
                                    //子技能识别名:Grand_lvzhan_storage
                                    onremove(player, skill) {
                                        delete player.storage.Grand_lvzhan_storage;
                                    },
                                    marktext: '屡战',
                                    intro: {
                                        name: '屡战',
                                        content: '本轮已发动过#次',
                                    },
                                    mark: true,
                                }, //子技能storage结束
                                phase: {
                                    //子技能识别名:Grand_lvzhan_phase
                                    trigger: {
                                        player: 'phaseUseEnd',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    audio: 'Grand_lvzhan',
                                    content() {
                                        if (player.storage.Grand_lvzhan_damage == true) {
                                            var cards = player.getCards('h');
                                            player.discard(cards);
                                            var next = player.phaseUse();
                                            event.next.remove(next);
                                            trigger.next.push(next);
                                        } else {
                                            var num = player.maxHp - player.countCards('h');
                                            if (num > 0) {
                                                player.draw(num);
                                            }
                                            if (num < 0) {
                                                var num1 = player.countCards('h') - player.maxHp;
                                                player.chooseToDiscard(num1, true, 'h');
                                            }
                                        }
                                        player.removeSkill('Grand_lvzhan_phase');
                                    },
                                }, //子技能phase结束
                                damage: {
                                    onremove(player, skill) {
                                        delete player.storage.Grand_lvzhan_damage;
                                    },
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    popup: false,
                                    forced: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        if (event.num < 1) return false;
                                        return !player.storage.Grand_lvzhan_damage;
                                    },
                                    content() {
                                        if (!player.storage.Grand_lvzhan_damage) player.storage.Grand_lvzhan_damage = true;
                                    },
                                }, //子技能damage结束
                            },
                        }, //此技能结束
                        /*—————————————————装弹—————————————————*/
                        Grand_zhuangdan: {
                            //技能名称:装弹
                            //技能类型:通用技能
                            //持有角色:十六夜野宫
                            //技能效果:出牌阶段限一次,你可以摸三张牌.直到回合结束为止,若你未击杀过角色,则你不可使用或打出【杀】以外的牌
                            audio: 'ext:Grand包/audio/skill:2',
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                player.draw(3);
                                player.addTempSkill('Grand_zhuangdan_unuse');
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                            },
                            subSkill: {
                                unuse: {
                                    //子技能识别名:Grand_zhuangdan_unuse
                                    trigger: {
                                        source: 'dieAfter',
                                    },
                                    forced: true,
                                    popup: false,
                                    content() {
                                        player.removeSkill('Grand_zhuangdan_unuse');
                                    },
                                    charlotte: true,
                                    mod: {
                                        cardEnabled(card) {
                                            if (card.name != 'sha') return false;
                                        },
                                        cardRespondable(card) {
                                            if (card.name != 'sha') return false;
                                        },
                                    },
                                }, //子技能unuse结束
                            },
                        }, //此技能结束
                        /*—————————————————连射—————————————————*/
                        Grand_lianshe: {
                            //技能名称:连射
                            //技能类型:通用技能
                            //持有角色:十六夜野宫
                            //技能效果:锁定技,你使用【杀】无距离和次数限制,且额外结算一次
                            audio: 'ext:Grand包/audio/skill:2',
                            trigger: {
                                player: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.isFirstTarget && event.card.name == 'sha';
                            },
                            content() {
                                trigger.parent.targets = trigger.parent.targets.concat(trigger.targets);
                                trigger.parent.triggeredTargets4 = trigger.parent.triggeredTargets4.concat(trigger.targets);
                            },
                            mod: {
                                targetInRange(card) {
                                    if (card.name == 'sha') return true;
                                },
                                cardUsable(card) {
                                    if (card.name == 'sha') return Infinity;
                                },
                            },
                        }, //此技能结束
                        /*—————————————————黑星—————————————————*/
                        Grand_heixing: {
                            //技能名称:黑星
                            //技能类型:通用技能
                            //持有角色:黑衣麻陶
                            //技能效果:出牌阶段限一次/当你受到1点其他角色造成的伤害后,你可以对一名其他角色/伤害来源造成一点伤害,你可以选择是否令其回复一点体力、获得一枚<星>印记,并获得其一张牌
                            audio: 'ext:Grand包/audio/skill:2',
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '是否发动『黑星』,对一名其他角色造成一点伤害',
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectTarget: 1,
                            content() {
                                'step 0';
                                target.damage(1);
                                ('step 1');
                                if (target.isAlive()) {
                                    player.chooseBool('是否令' + get.translation(target) + '回复一点体力并获得一枚<星>,你获得其一张牌').set('ai', function () {
                                        return trigger.source.hp <= 1;
                                    });
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    target.recover(1);
                                    target.addMark('Grand_heixing_mark');
                                    player.gainPlayerCard(target, 1, true, 'he');
                                }
                            },
                            ai: {
                                result: {
                                    player: 7,
                                    target(player, target, card) {
                                        return get.attitude(player, target) < 0;
                                    },
                                }
                            },
                            group: ['Grand_heixing_damage'],
                            subSkill: {
                                damage: {
                                    //子技能识别名:Grand_heixing_damage
                                    audio: 'Grand_heixing',
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    prompt: '是否发动『黑星』',
                                    prompt2(event, player) {
                                        return '对' + get.translation(event.source) + '造成一点伤害';
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.source) <= 0;
                                    },
                                    filter(event, player) {
                                        if (!event.source) return false;
                                        return event.source != player;
                                    },
                                    content() {
                                        'step 0';
                                        event.num = Math.min(trigger.num, 9);
                                        ('step 1');
                                        trigger.source.damage(1);
                                        ('step 2');
                                        if (trigger.source.isAlive()) {
                                            player.chooseBool('是否令' + get.translation(trigger.source) + '回复一点体力并获得一枚<星>,你获得其一张牌').set('ai', function () {
                                                return trigger.source.hp <= 1;
                                            });
                                        } else event.finish();
                                        ('step 3');
                                        event.num--;
                                        if (result.bool) {
                                            trigger.source.recover(1);
                                            trigger.source.addMark('Grand_heixing_mark');
                                            player.gainPlayerCard(trigger.source, 1, true, 'he');
                                        }
                                        ('step 4');
                                        if (event.num > 0) event.goto(1);
                                    },
                                }, //子技能damage结束
                                mark: {
                                    //子技能识别名:Grand_heixing_mark
                                    marktext: '星',
                                    intro: {
                                        name: '星',
                                        content: '已拥有#枚星',
                                    },
                                    mark: true,
                                }, //子技能mark结束
                            },
                        }, //此技能结束
                        /*—————————————————羁绊—————————————————*/
                        Grand_jiban: {
                            //技能名称:羁绊
                            //技能类型:通用技能
                            //持有角色:黑衣麻陶
                            //技能效果:一名拥有<星>印记的角色不因『黑星』受到伤害时/回合结束时,你可以移去其武将牌上的任意枚<星>,并令此伤害增加X/回复X点体力并获得其X张牌(X为其被移除的<星>的数量)
                            audio: 'ext:Grand包/audio/skill:2',
                            trigger: {
                                global: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                return event.player.hasMark('Grand_heixing_mark');
                            },
                            prompt: '是否发动『羁绊』',
                            prompt2(event, player) {
                                return '回复1—' + event.player.countMark('Grand_heixing_mark') + '点体力,并获得' + get.translation(event.player) + '等量张牌？';
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            content() {
                                'step 0';
                                var map = {};
                                var list = [];
                                for (var i = 1; trigger.player.countMark('Grand_heixing_mark') >= i; i++) {
                                    var cn = get.cnNumber(i, true);
                                    map[cn] = i;
                                    list.push(cn);
                                }
                                player
                                    .chooseControl(list, function () {
                                        return get.cnNumber(_status.event.goon, true);
                                    })
                                    .set('prompt', '移去任意枚<星>,并回复等量体力,获得' + get.translation(trigger.player) + '等量张牌')
                                    .set('ai', function () {
                                        return list.randomGet();
                                    });
                                event.map = map;
                                ('step 1');
                                if (result.control) {
                                    var num = event.map[result.control];
                                    trigger.player.removeMark('Grand_heixing_mark', num);
                                    player.recover(num);
                                    player.gainPlayerCard(trigger.player, num, true, 'he');
                                }
                            },
                            group: ['Grand_jiban_damage'],
                            subSkill: {
                                damage: {
                                    //子技能识别名:Grand_jiban_damage
                                    trigger: {
                                        global: 'damageBegin',
                                    },
                                    audio: 'Grand_jiban',
                                    prompt: '是否发动『羁绊』',
                                    prompt2(event, player) {
                                        return '令此伤害增加1—' + event.player.countMark('Grand_heixing_mark') + '点';
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.source) > 0;
                                    },
                                    filter(event, player) {
                                        if (event.getParent(1).name == 'Grand_heixing' || event.getParent(1).name == 'Grand_heixing_damage') return false;
                                        return event.player.hasMark('Grand_heixing_mark');
                                    },
                                    content() {
                                        'step 0';
                                        var map = {};
                                        var list = [];
                                        for (var i = 1; trigger.player.countMark('Grand_heixing_mark') >= i; i++) {
                                            var cn = get.cnNumber(i, true);
                                            map[cn] = i;
                                            list.push(cn);
                                        }
                                        player
                                            .chooseControl(list, function () {
                                                return get.cnNumber(_status.event.goon, true);
                                            })
                                            .set('prompt', '移去任意枚<星>,并为此伤害增加等量的值')
                                            .set('ai', function () {
                                                return list.randomGet();
                                            });
                                        event.map = map;
                                        ('step 1');
                                        if (result.control) {
                                            var num = event.map[result.control];
                                            trigger.player.removeMark('Grand_heixing_mark', num);
                                            trigger.num += num;
                                        }
                                    },
                                }, //子技能damage结束
                            },
                        }, //此技能结束
                        /*———————————————剑舞·凛刺————————————————*/
                        Grand_jianwu_linci: {
                            //技能名称:剑舞·凛刺
                            //技能类型:通用技能
                            //持有角色:散华
                            //技能效果:一名角色一次性弃置至少两张牌后,你可以失去一点体力,摸X张牌,并令其视为对一名角色使用一张无距离限制的【杀】(X为你已损失的体力值)
                            trigger: {
                                global: 'discardEnd',
                            },
                            audio: 'ext:Grand包/audio/skill:3',
                            filter(event, player) {
                                if (event.parent.name == 'die') return false;
                                return event.cards.length >= 2;
                            },
                            prompt: '是否发动『剑舞·凛刺』',
                            prompt2(event, player) {
                                var num;
                                if (player.hp == 1) num = player.maxHp - 1;
                                else num = player.maxHp - player.hp + 1;
                                return '失去一点体力,摸' + num + '张牌,并令' + get.translation(event.player) + '视为对一名角色使用一张无距离限制的【杀】';
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) <= 0) return false;
                                var num = player.hp - 1;
                                num += player.countCards('h', { name: 'tao' });
                                num += player.countCards('h', { name: 'jiu' });
                                return num >= 1;
                            },
                            content() {
                                'step 0';
                                player.loseHp(1);
                                ('step 1');
                                var num = player.maxHp - player.hp;
                                player.draw(num);
                                trigger.player.chooseUseTarget({ name: 'sha' }, true, false, 'nodistance');
                            },
                        }, //此技能结束
                        /*—————————————————曼莲华————————————————*/
                        Grand_manlianhua: {
                            //技能名称:曼莲华
                            //技能类型:通用技能
                            //持有角色:散华
                            //技能效果:一名角色受到【杀】造成的伤害后,你可以弃置X张牌,并回复一点体力(X为你的体力值)
                            trigger: {
                                global: 'damageEnd',
                            },
                            prompt: '是否发动『曼莲华』',
                            prompt2(event, player) {
                                return '弃置' + player.hp + '张牌,并回复一点体力';
                            },
                            filter(event, player) {
                                if (player.countCards('he') < player.hp) return false;
                                if (player.maxHp - player.hp <= 0) return false;
                                if (!event.card) return false;
                                return event.card.name == 'sha';
                            },
                            audio: 'ext:Grand包/audio/skill:2',
                            content() {
                                'step 0';
                                player.chooseToDiscard(player.hp, true, 'he');
                                ('step 1');
                                player.recover(1);
                            },
                        }, //此技能结束
                        /*————————————————朔雪永冻————————————————*/
                        Grand_shuoxueyongdong: {
                            //技能名称:朔雪永冻
                            //技能类型:通用技能
                            //持有角色:散华
                            //技能效果:锁定技,当你成为其他角色使用牌的目标时,你获得一枚<冰痕>.若你拥有至少两枚<冰痕>,你可以移去所有<冰痕>并弃置其等量的牌
                            forced: true,
                            trigger: {
                                global: 'useCardToPlayer',
                            },
                            audio: 'ext:Grand包/audio/skill:2',
                            filter(event, player) {
                                return event.player != player && event.target == player;
                            },
                            marktext: '冰痕',
                            intro: {
                                name: '冰痕',
                                content: '已积累#',
                            },
                            content() {
                                'step 0';
                                player.addMark('Grand_shuoxueyongdong');
                                player.markSkill('Grand_shuoxueyongdong');
                                ('step 1');
                                if (player.countMark('Grand_shuoxueyongdong') >= 2) {
                                    player.chooseBool('是否发动『朔雪永冻』,令' + get.translation(trigger.player) + '弃置' + player.countMark('Grand_shuoxueyongdong') + '张牌').set('ai', function () {
                                        var player = _status.event.player;
                                        return get.attitude(player, trigger.player) < 0;
                                    });
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.unmarkSkill('Grand_shuoxueyongdong');
                                    trigger.player.chooseToDiscard(player.countMark('Grand_shuoxueyongdong'), true, 'he');
                                    player.removeMark('Grand_shuoxueyongdong', player.countMark('Grand_shuoxueyongdong'));
                                }
                            },
                        }, //此技能结束
                        /*—————————————————至微—————————————————*/
                        Grand_zhiwei: {
                            //技能名称:至微
                            //技能类型:通用技能
                            //持有角色:Grand陆郁生
                            //技能效果:锁定技,一名角色的回合开始时,若场上没有因此法被选择的角色存活,则你须选择一名角色,令其获得如下效果:①摸牌阶段摸牌数+1;②出牌阶段内使用【杀】次数+1;③其造成伤害时,你摸一张牌
                            audio: 'ext:Grand包/audio/skill:2',
                            trigger: {
                                global: 'phaseBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.hasSkill('Grand_zhiwei_draw');
                            },
                            content() {
                                'step 0';
                                player.chooseTarget('请选择【至微】的目标', '选择一名角色.令其获得如下效果:①摸牌阶段摸牌数+1;②出牌阶段内使用【杀】次数+1;③其造成伤害时,你摸一张牌.', true).set('ai', function (target) {
                                    var att = get.attitude(_status.event.player, target);
                                    if (att > 0) return 1 + att;
                                    return Math.random();
                                });
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    player.storage.Grand_zhiwei_draw = target;
                                    player.addSkill('Grand_zhiwei_draw');
                                    player.markSkill('Grand_zhiwei_draw', '', '至微 ' + get.translation(target));
                                    target.addSkill('Grand_zhiwei_target');
                                    target.markSkill('Grand_zhiwei_target');
                                }
                            },
                            group: ['Grand_zhiwei_die'],
                            subSkill: {
                                draw: {
                                    //子技能识别名:Grand_zhiwei_draw
                                    audio: 'Grand_zhiwei',
                                    trigger: {
                                        global: 'damageSource',
                                    },
                                    intro: {
                                        content: 'players',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.source == player.storage.Grand_zhiwei_draw;
                                    },
                                    logTarget: 'source',
                                    content() {
                                        player.draw();
                                    },
                                }, //子技能draw结束
                                target: {
                                    //子技能识别名:Grand_zhiwei_target
                                    forced: true,
                                    charlotte: true,
                                    trigger: {
                                        player: 'phaseDrawBegin2',
                                    },
                                    intro: {
                                        content: '①摸牌阶段摸牌数+1;<br>②出牌阶段内使用【杀】次数+1;<br>③造成伤害时,Grand陆郁生摸一张牌',
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                    mod: {
                                        cardUsable(card, player, num) {
                                            if (card.name == 'sha') return (num += 1);
                                        },
                                    },
                                }, //子技能target结束
                                die: {
                                    //子技能识别名:Grand_zhiwei_die
                                    forced: true,
                                    trigger: {
                                        global: 'die',
                                    },
                                    filter(event, player) {
                                        return event.player.hasSkill('Grand_zhiwei_target') && player.hasSkill('Grand_zhiwei_draw');
                                    },
                                    content() {
                                        player.removeSkill('Grand_zhiwei_draw');
                                        player.unmarkSkill('Grand_zhiwei_draw');
                                    },
                                }, //子技能die结束
                            },
                        }, //此技能结束
                        /*—————————————————贞特—————————————————*/
                        Grand_zhente: {
                            //技能名称:贞特
                            //技能类型:通用技能
                            //持有角色:Grand陆郁生
                            //技能效果:锁定技,当你受到1点伤害后,若场上有因『至微』被选择的角色存活,则其摸一张牌,否则你摸两张牌
                            audio: 'ext:Grand包/audio/skill:2',
                            forced: true,
                            trigger: {
                                player: 'damageEnd',
                            },
                            content() {
                                'step 0';
                                event.num = Math.min(trigger.num, 9);
                                ('step 1');
                                if (
                                    game.hasPlayer(function (current) {
                                        return current.hasSkill('Grand_zhiwei_target');
                                    })
                                ) {
                                    game.countPlayer(function (current) {
                                        if (current.hasSkill('Grand_zhiwei_target')) current.draw(1);
                                    });
                                } else player.draw(2);
                                event.num--;
                                ('step 2');
                                if (event.num >= 1) event.goto(1);
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
                        }, //此技能结束
                        /*————————————————你奈我何————————————————*/
                        Grand_ninaiwohe: {
                            //技能名称:你奈我何
                            //技能类型:通用技能
                            //持有角色:符华
                            //技能效果:觉醒技,准备阶段开始时,若除你以外的所有角色均受到过伤害,你失去一点体力上限,回复一点体力并摸两张牌,你获得技能『凡间俗世皆苦海』
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            juexingji: true,
                            audio: 'ext:Grand包/audio/skill:2',
                            forced: true,
                            derivation: ['Grand_fanjiansushijiekuhai'],
                            filter(event, player) {
                                var list = [];
                                game.countPlayer(function (current) {
                                    if (current != player && current.getAllHistory('damage').length) list.push(current);
                                });
                                return list.length >= game.filterPlayer().length - 1;
                            },
                            content() {
                                player.awakenSkill(event.name);
                                player.loseMaxHp(1);
                                player.recover(1);
                                player.draw(2);
                                player.addSkill('Grand_fanjiansushijiekuhai');
                            },
                        },
                        /*———————————————凡间俗世皆苦海——————————————*/
                        Grand_fanjiansushijiekuhai: {
                            //技能名称:凡间俗世皆苦海
                            //技能类型:通用技能
                            //持有角色:符华
                            //技能效果:出牌阶段限一次,你可以与一名随机的其他角色交换位置,并获得如下效果直至回合结束:①你使用牌无次数限制;②与你距离为1的角色无法响应你使用的牌;③除你以外的所有玩家始终横置
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'ext:Grand包/audio/skill:1',
                            prompt: '是否发动【凡间俗世皆苦海】',
                            prompt2(event, player) {
                                return '与一名随机的其他角色交换位置';
                            },
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player && !current.isLinked()) current.link(true);
                                    if (!current.hasSkill('Grand_fanjiansushijiekuhai_link') && current != player) current.addTempSkill('Grand_fanjiansushijiekuhai_link', 'phaseJieshuBegin');
                                });
                                var target = game
                                    .filterPlayer(function (current) {
                                        return current != player;
                                    })
                                    .randomGet();
                                game.broadcastAll(
                                    function (target1, target2) {
                                        game.swapSeat(target1, target2);
                                    },
                                    player,
                                    target
                                );
                                player.addTempSkill('Grand_fanjiansushijiekuhai_use');
                                if (!_status.connectMode) {
                                    game.mp410('Grand_fanjiansushijiekuhai'); //QQQ
                                    game.broadcastAll() + player.node.avatar.setBackgroundImage('extension/Grand包/image/skill/character/lvzhe_Grand_fuhua.jpg');
                                    ui.background.setBackgroundImage('extension/Grand包/image/skill/expand/Grand_fuhua.jpg');
                                }
                            },
                            ai: {
                                basic: {
                                    order: 10,
                                },
                                result: {
                                    player(player) {
                                        return 1;
                                    },
                                },
                            },
                            subSkill: {
                                use: {
                                    //子技能识别名:Grand_fanjiansushijiekuhai_use
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    audio: 'ext:Grand包/audio/skill:2',
                                    filter(event, player) {
                                        return (
                                            event.card &&
                                            (get.type(event.card) == 'trick' || (get.type(event.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(event.card.name))) &&
                                            game.hasPlayer(function (current) {
                                                return current != player && get.distance(current, player) <= 1;
                                            })
                                        );
                                    },
                                    content() {
                                        trigger.directHit.addArray(
                                            game.filterPlayer(function (current) {
                                                return current != player && get.distance(current, player) <= 1;
                                            })
                                        );
                                    },
                                    mod: {
                                        cardUsable(card, player, num) {
                                            return Infinity;
                                        },
                                    },
                                    onremove(player, skill) {
                                        if (!_status.connectMode) {
                                            game.playAudio('../extension/Grand包/audio/expand/Grand_fuhua.mp3');
                                            game.broadcastAll() + player.node.avatar.setBackgroundImage('extension/Grand包/image/character/Grand_fuhua.jpg');
                                            ui.background.setBackgroundImage('image/background/' + lib.config.image_background + '.jpg');
                                        }
                                    },
                                }, //子技能use结束
                                link: {
                                    //子技能识别名:
                                    forced: true,
                                    popup: false,
                                    trigger: {
                                        global: 'damageBegin',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    onremove(player, skill) {
                                        if (player.isLinked()) player.link();
                                    },
                                    filter(event, player) {
                                        return !player.isLinked();
                                    },
                                    content() {
                                        player.link(true);
                                    },
                                    ai: {
                                        effect: {
                                            target(card) {
                                                if (card.name == 'tiesuo') return 'zeroplayertarget';
                                            },
                                        },
                                    },
                                }, //子技能link结束
                            },
                        }, //此技能结束
                        /*—————————————————百兵—————————————————*/
                        Grand_baibing: {
                            //技能名称:百兵
                            //技能类型:通用技能
                            //持有角色:符华
                            //技能效果:锁定技,当你造成伤害时/受到伤害时,若你本局游戏内发动『百兵』的次数:①能被3整除:伤害值+1/-1;②不能被3整除:你摸1张牌
                            audio: 'ext:Grand包/audio/skill:2',
                            trigger: {
                                player: 'damageBegin1',
                                source: 'damageBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (!player.storage.Grand_baibing) player.storage.Grand_baibing = 0;
                                player.storage.Grand_baibing++;
                                player.unmarkSkill('Grand_baibing');
                                ('step 1');
                                if (player.storage.Grand_baibing % 3 == 0) {
                                    if (event.triggername != 'damageBegin1') trigger.num++;
                                    else trigger.num--;
                                } else player.draw(1);
                                var num = player.storage.Grand_baibing + 1;
                                if (num % 3 == 0) player.markSkill('Grand_baibing');
                            },
                            intro: {
                                content: '伤害增加/减少(可触发)',
                                markcount() {
                                    return 0;
                                },
                            },
                        }, //此技能结束
                        /*—————————————————同礼—————————————————*/
                        Grand_tongli: {
                            //技能名称:同礼
                            //技能类型:通用技能
                            //持有角色:Grand张嫙
                            //技能效果:出牌阶段开始时,你可以弃置至多等同于你的体力上限张手牌,若如此做,本回合内你使用的前X张牌额外结算X-Y次(X为你因此弃置的牌的数量,Y为本回合『同礼』剩余的额外结算次数)
                            audio: 'tongli',
                            forced: true,
                            trigger: {
                                player: 'phaseUseBefore',
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            check(event, player) {
                                return player.countCards('h') > 2;
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard([1, player.maxHp], 'h', get.prompt('Grand_tongli'), '弃置1——' + player.maxHp + '张牌').set('ai', function (card) {
                                    if (ui.selected.cards.length >= player.countCards('h') / 2) return false;
                                    return 3 - get.value(card);
                                });
                                ('step 1');
                                if (result.cards?.length) {
                                    player.addTempSkill('Grand_tongli_use');
                                    player.storage.Grand_tongli_use += result.cards.length;
                                    player.markSkill('Grand_tongli_use');
                                }
                            },
                            subSkill: {
                                use: {
                                    //子技能识别名:Grand_tongli_use
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    init(player) {
                                        if (!player.storage.Grand_tongli_use) player.storage.Grand_tongli_use = 0;
                                    },
                                    filter(event, player) {
                                        return player.storage.Grand_tongli_use > 0;
                                    },
                                    forced: true,
                                    charlotte: true,
                                    audio: 'tongli',
                                    marktext: '同礼',
                                    intro: {
                                        name: '同礼',
                                        content: '同礼:还可发动#次',
                                    },
                                    onremove(player, skill) {
                                        delete player.storage.Grand_tongli_use;
                                    },
                                    content() {
                                        trigger.effectCount += player.storage.Grand_tongli_use;
                                        game.log(trigger.card, '额外结算' + player.storage.Grand_tongli_use + '次');
                                        player.storage.Grand_tongli_use--;
                                        if (player.storage.Grand_tongli_use <= 0) player.unmarkSkill('Grand_tongli_use');
                                    },
                                },
                            },
                        }, //此技能结束
                        /*—————————————————奢葬—————————————————*/
                        Grand_shezang: {
                            //技能名称:奢葬
                            //技能类型:通用技能
                            //持有角色:Grand张嫙
                            //技能效果:锁定技,每回合限一次,当你使用牌造成伤害/受到来自牌造成的伤害时,你摸X张牌(X为此牌牌名字数)
                            audio: 'shezang',
                            usable: 1,
                            forced: true,
                            trigger: {
                                player: 'damageBegin',
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.card;
                            },
                            content() {
                                if (trigger.card) player.draw(get.cardNameLength(trigger.card));
                            },
                        }, //此技能结束
                        /*—————————————————兴作—————————————————*/
                        Grand_xingzuo: {
                            //技能名称:兴作
                            //技能类型:通用技能
                            //持有角色:Grand阮瑀
                            //技能效果:出牌阶段,你可以观看牌堆顶的1+X张牌(X为你本回因『兴作』使用牌的次数).你可以使用其中一张牌(无距离和次数限制),并须选择一项:①弃置一张牌;②失去一点体力,并令『兴作』本回合失效
                            audio: 'ext:Grand包/audio/skill:2',
                            enable: 'phaseUse',
                            prompt: '是否发动【兴作】',
                            marktext: '兴作',
                            intro: {
                                name: '兴作',
                                content: '兴作:本回合已发动#次',
                            },
                            filter(event, player) {
                                return !player.hasSkill('Grand_xingzuo_off');
                            },
                            content() {
                                'step 0';
                                if (!player.storage.Grand_xingzuo) player.storage.Grand_xingzuo = 0;
                                var cards = get.cards(1 + player.storage.Grand_xingzuo);
                                event.cards = cards;
                                game.cardsGotoOrdering(cards);
                                player.chooseButton(['兴作:使用其中的一张牌', cards]).set('filterButton', (button) => {
                                    var player = _status.event.player;
                                    var card = button.link;
                                    var cardx = {
                                        name: get.name(card, get.owner(card)),
                                        nature: get.nature(card, get.owner(card)),
                                        cards: [card],
                                    };
                                    return player.hasUseTarget(cardx, null, false);
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.addTempSkill('Grand_xingzuo_use');
                                    var card = result.links[0];
                                    event.cards.remove(card);
                                    player.chooseUseTarget(card, true, false, 'nodistance');
                                    while (cards.length) {
                                        var card = cards.pop();
                                        card.fix();
                                        ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
                                    }
                                    game.updateRoundNumber();
                                    player.storage.Grand_xingzuo++;
                                    player.markSkill('Grand_xingzuo');
                                } else {
                                    while (cards.length) {
                                        var card = cards.pop();
                                        card.fix();
                                        ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
                                    }
                                    game.updateRoundNumber();
                                    event.finish();
                                }
                                ('step 2');
                                if (player.countCards('h') > 0) {
                                    player.chooseBool('是否弃置一张牌？否则失去一点体力并令『兴作』本回合失效').set('ai', function () {
                                        var player = _status.event.player;
                                        return player.countCards('h') >= 2;
                                    });
                                } else {
                                    player.loseHp(1);
                                    player.addTempSkill('Grand_xingzuo_off');
                                    event.finish();
                                }
                                ('step 3');
                                if (result.bool) {
                                    player.chooseToDiscard('h', 1, true);
                                } else {
                                    player.loseHp(1);
                                    player.addTempSkill('Grand_xingzuo_off');
                                }
                            },
                            ai: {
                                order(item, player) {
                                    return 3 + (player.storage.Grand_miaoxian * 2 || 0);
                                },
                                result: {
                                    player(player, target) {
                                        if (!player.storage.Grand_xingzuo) player.storage.Grand_xingzuo = 0;
                                        var cards = get.cards(1 + player.storage.Grand_xingzuo);
                                        game.cardsGotoOrdering(cards);
                                        for (var i = 0; cards.length > i; i++) {
                                            if (player.hasUseTarget(cards[i], null, false)) return 10;
                                            return 0;
                                        }
                                    },
                                },
                            },
                            subSkill: {
                                off: {
                                    //子技能识别名:Grand_xingzuo_off
                                    charlotte: true,
                                }, //子技能off结束
                                use: {
                                    //子技能识别名:Grand_xingzuo_use
                                    charlotte: true,
                                    onremove(player, skill) {
                                        player.unmarkSkill('Grand_xingzuo');
                                        delete player.storage.Grand_xingzuo;
                                    },
                                }, //子技能use结束
                            },
                        }, //此技能结束
                        /*—————————————————妙弦—————————————————*/
                        Grand_miaoxian: {
                            //技能名称:妙弦
                            //技能类型:通用技能
                            //持有角色:Grand阮瑀
                            //技能效果:每名其他角色的出牌阶段限一次,其可以交给你一张牌,并视为使用一张无次数限制的基本牌
                            audio: 'ext:Grand包/audio/skill:2',
                            trigger: {
                                global: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                trigger.player.addTempSkill('Grand_miaoxian_use');
                            },
                            subSkill: {
                                use: {
                                    //子技能识别名:Grand_miaoxian_use
                                    enable: 'phaseUse',
                                    audio: 'Grand_miaoxian',
                                    charlotte: true,
                                    usable: 1,
                                    prompt() {
                                        var player = _status.event.player;
                                        var list = game.filterPlayer(function (current) {
                                            return current.hasSkill('Grand_miaoxian');
                                        });
                                        var str = '将一张牌交给' + get.translation(list);
                                        if (list.length > 1) str += '中的一人';
                                        str += ',并视为使用一张基本牌';
                                        return str;
                                    },
                                    filter(event, player) {
                                        return (
                                            player.countCards('h') >= 2 &&
                                            game.hasPlayer(function (current) {
                                                return current.hasSkill('Grand_miaoxian');
                                            })
                                        );
                                    },
                                    content() {
                                        'step 0';
                                        var targets = game.filterPlayer(function (current) {
                                            return current.hasSkill('Grand_miaoxian');
                                        });
                                        if (targets.length == 1) {
                                            event.target = targets[0];
                                            event.goto(2);
                                        } else if (targets.length)
                                            player
                                                .chooseTarget(true, '选择【妙弦】的目标', function (card, player, target) {
                                                    return _status.event.list.includes(target);
                                                })
                                                .set('list', targets)
                                                .set('ai', function (target) {
                                                    var player = _status.event.player;
                                                    return get.attitude(player, target);
                                                });
                                        else event.finish();
                                        ('step 1');
                                        if (result.targets?.length) event.target = result.targets[0];
                                        else event.finish();
                                        ('step 2');
                                        player.chooseCard('h', 1, true);
                                        ('step 3');
                                        if (result.cards.length >= 1) {
                                            event.target.gain(result.cards);
                                            var list = [];
                                            list.push(['基本', '', 'sha']);
                                            for (var i of lib.inpile_nature) {
                                                list.push(['基本', '', 'sha', i]);
                                            }
                                            if (
                                                lib.filter.cardUsable({ name: 'tao' }, player, event.getParent('chooseToUse')) &&
                                                game.hasPlayer(function (current) {
                                                    return player.canUse('tao', current);
                                                })
                                            ) {
                                                list.push(['基本', '', 'tao']);
                                            }
                                            list.push(['基本', '', 'jiu']);
                                            if (list.length) {
                                                player.chooseButton(['是否视为使用一张基本牌？', [list, 'vcard']]).set('ai', function (button) {
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
                                                                return get.effect(current, card, player, player) > 0;
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
                                            }
                                        } else event.finish();
                                        ('step 4');
                                        if (result.links?.length) {
                                            var card = { name: result.links[0][2], nature: result.links[0][3] };
                                            player.chooseUseTarget(card, true, false);
                                        }
                                    },
                                    ai: {
                                        order(item, player) {
                                            var target = game.findPlayer(function (current) {
                                                return current.hasSkill('Grand_miaoxian');
                                            });
                                            if (target) {
                                                return 3 + get.attitude(player, target);
                                            }
                                        },
                                        result: {
                                            player(player, target) {
                                                var target = game.findPlayer(function (current) {
                                                    return current.hasSkill('Grand_miaoxian');
                                                });
                                                if (target) {
                                                    return 1 + get.attitude(player, target);
                                                }
                                            },
                                        },
                                    },
                                }, //子技能use结束
                            },
                        }, //此技能结束
                        /*————————————————Dopros—————————————————*/
                        Grand_dopros: {
                            //技能名称:Dopros
                            //技能类型:通用技能
                            //持有角色:杰克欧
                            //技能效果:出牌阶段限一次,你可以选择任意张不同类别的手牌,并选择等量名角色.令其获得这些牌,称之为<令>;一名角色失去<令>时,你摸两张牌
                            audio: 'ext:Grand包/audio/skill:2',
                            enable: 'phaseUse',
                            usable: 1,
                            position: 'h',
                            selectCard() {
                                if (ui.selected.targets.length) return [ui.selected.targets.length, 3];
                                return [1, 3];
                            },
                            selectTarget() {
                                return ui.selected.cards.length;
                            },
                            filterTarget: true,
                            discard: false,
                            lose: false,
                            multitarget: true,
                            multiline: true,
                            filterCard(card) {
                                if (ui.selected.cards.length) {
                                    var type = get.type2(card);
                                    for (var i of ui.selected.cards) {
                                        if (get.type2(i) == type) return false;
                                    }
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                for (var i = 0; targets.length > i; i++) {
                                    targets[i].gain(cards[i], player).gaintag.add('令');
                                    player.$giveAuto(cards[i], targets[i]);
                                    targets[i].addSkill('Grand_dopros_lose');
                                    targets[i].markSkill('Grand_dopros_lose');
                                }
                                ('step 1');
                                player.addGaintag(cards, '令');
                            },
                            ai: {
                                basic: {
                                    order: 10,
                                },
                                result: {
                                    player: 1,
                                },
                            },
                            subSkill: {
                                lose: {
                                    //子技能识别名:Grand_dopros_lose
                                    forced: true,
                                    charlotte: true,
                                    popup: false,
                                    marktext: '指令',
                                    intro: {
                                        name: '指令',
                                        content: '可对其下达指令',
                                    },
                                    trigger: {
                                        player: 'loseAfter',
                                    },
                                    filter(event, player) {
                                        for (var i in event.gaintag_map) {
                                            if (event.gaintag_map[i].includes('令')) return true;
                                        }
                                        return false;
                                    },
                                    content() {
                                        var target = game.findPlayer(function (current) {
                                            return current.hasSkill('Grand_dopros');
                                        });
                                        if (target) target.draw(2);
                                        if (
                                            player.getCards('h', function (card) {
                                                return card.hasGaintag('令');
                                            }).length < 1
                                        ) {
                                            player.unmarkSkill('Grand_dopros_lose');
                                            player.removeSkill('Grand_dopros_lose');
                                        }
                                    },
                                }, //子技能lose结束
                            },
                        }, //此技能结束
                        /*————————————————指令——————————————————*/
                        Grand_zhiling: {
                            //技能名称:指令
                            //技能类型:通用技能
                            //持有角色:杰克欧
                            //技能效果:一名拥有<令>的角色的准备阶段/你的准备阶段,你可以发布一种[指令],本回合的结束阶段,结算其是否完成该[指令],并执行对应的效果.①[进攻]:造成两点伤害 成功:[摸X张牌(X为其本回合造成的伤害)];失败:[失去一点体力].②[防御]:使用一张装备牌 成功:[回复X点体力(X为其本回合使用装备牌的数量)];失败:[弃置两张牌].③[自爆]:立即执行 对他人:[弃置一枚<令>并失去一点体力];对自己:[回复一点体力,并摸两张牌]
                            trigger: {
                                global: 'phaseZhunbeiBegin',
                            },
                            audio: 'ext:Grand包/audio/skill:2',
                            forced: true,
                            filter(event, player) {
                                if (event.player == player) return true;
                                return event.player.getCards('h', function (card) {
                                    return card.hasGaintag('令');
                                }).length;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseControl('[进攻]', '[防御]', '[自爆]', 'cancel')
                                    .set('prompt', '请对' + get.translation(trigger.player) + '下达[指令]')
                                    .set('ai', function () {
                                        var player = _status.event.player;
                                        if (get.attitude(player, trigger.player) < 0 || trigger.player == player) return '[自爆]';
                                        else if (trigger.player.countCards('h') <= 3) return 'cancel';
                                        return ['[进攻]', '[防御]'].randomGet();
                                    });
                                ('step 1');
                                if (result.control != 'cancel') {
                                    game.log(player, '对', get.translation(trigger.player), '下达了', result.control, '指令');
                                    if (result.control == '[进攻]') {
                                        trigger.player.addTempSkill('Grand_zhiling_jingong');
                                        trigger.player.markSkill('Grand_zhiling_jingong');
                                    }
                                    if (result.control == '[防御]') {
                                        trigger.player.addTempSkill('Grand_zhiling_fangyu');
                                        trigger.player.markSkill('Grand_zhiling_fangyu');
                                    }
                                    if (result.control == '[自爆]') {
                                        if (trigger.player != player) {
                                            trigger.player.chooseToDiscard(true, 1, 'h', function (card) {
                                                return card.hasGaintag('令');
                                            });
                                            trigger.player.loseHp(1);
                                        } else {
                                            player.recover(1);
                                            player.draw(2);
                                        }
                                    }
                                }
                            },
                            subSkill: {
                                jingong: {
                                    //子技能识别名:Grand_zhiling_jingong
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    popup: false,
                                    marktext: '指令 进攻',
                                    intro: {
                                        name: '指令',
                                        content: '已被下达进攻指令',
                                    },
                                    content() {
                                        if (!player.storage.Grand_zhiling_jingong) player.storage.Grand_zhiling_jingong = 0;
                                        player.storage.Grand_zhiling_jingong += trigger.num;
                                    },
                                    onremove(player, skill) {
                                        player.unmarkSkill('Grand_zhiling_jingong');
                                        var num = player.storage.Grand_zhiling_jingong;
                                        delete player.storage.Grand_zhiling_jingong;
                                        if (num >= 2) player.draw(num);
                                        else player.loseHp(1);
                                    },
                                }, //子技能jingong结束
                                fangyu: {
                                    //子技能识别名:Grand_zhiling_fangyu
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    popup: false,
                                    marktext: '指令 防御',
                                    intro: {
                                        name: '指令',
                                        content: '已被下达防御指令',
                                    },
                                    filter(event, player) {
                                        return get.type2(event.card) == 'equip';
                                    },
                                    content() {
                                        if (!player.storage.Grand_zhiling_fangyu) player.storage.Grand_zhiling_fangyu = 0;
                                        player.storage.Grand_zhiling_fangyu++;
                                    },
                                    onremove(player, skill) {
                                        player.unmarkSkill('Grand_zhiling_fangyu');
                                        if (!player.storage.Grand_zhiling_fangyu) player.chooseToDiscard(2, 'he', true);
                                        else player.recover(player.storage.Grand_zhiling_fangyu);
                                        delete player.storage.Grand_zhiling_fangyu;
                                    },
                                }, //子技能fangyu结束
                            },
                        }, //此技能结束
                        /*———————————————皇帝特权—————————————————*/
                        Grand_huangditequan: {
                            //技能名称:皇帝特权
                            //技能类型:通用技能
                            //持有角色:尼禄·克劳狄乌斯(剑)
                            //技能效果:出牌阶段限一次,你可以于以下效果中随机执行一项:①摸两张牌②回复一点体力(若你未受伤,则改为加一点体力上限)③[头痛宿疾]:失去一点体力,本次出牌阶段结束时,你执行一个额外的出牌阶段;锁定技,你于摸牌阶段的摸牌数+X(X为你本局游戏内发动『皇帝特权』的次数)
                            //『皇帝特权·改』:出牌阶段限一次,你可以于以下效果中随机执行两项:①摸两张牌②回复一点体力(若你未受伤,则改为加一点体力上限)③[头痛宿疾]:失去一点体力,本次出牌阶段结束时,你执行一个额外的出牌阶段;锁定技:你于出牌阶段内使用杀次数+X(X为你本回合发动『皇帝特权』的次数)
                            audio: 'ext:Grand包/audio/skill:2',
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                var num;
                                if (!player.storage.Grand_LausSaintClaudius) {
                                    if (!player.storage.Grand_huangditequan_storage) player.storage.Grand_huangditequan_storage = 0;
                                    player.storage.Grand_huangditequan_storage++;
                                    player.addSkill('Grand_huangditequan_storage');
                                    player.markSkill('Grand_huangditequan_storage');
                                    num = [1, 2, 3].randomGet();
                                } else {
                                    if (!player.storage.Grand_huangditequan_storage) player.storage.Grand_huangditequan_storage = 0;
                                    player.storage.Grand_huangditequan_storage++;
                                    player.addTempSkill('Grand_huangditequan_storage', { player: 'phaseUseAfter' });
                                    player.markSkill('Grand_huangditequan_storage');
                                    num = [1, 2, 3].randomGets(2);
                                }
                                event.num = num;
                                ('step 1');
                                if (!player.storage.Grand_LausSaintClaudius) {
                                    if (event.num == 1) player.draw(2);
                                    if (event.num == 2) {
                                        if (player.isDamaged()) {
                                            player.recover(1);
                                        } else player.gainMaxHp(1);
                                    }
                                    if (event.num == 3) {
                                        game.log(player, '头痛宿疾');
                                        player.loseHp(1);
                                        player.addSkill('Grand_huangditequan_toutongsuji');
                                    }
                                } else {
                                    if (event.num.includes(1)) player.draw(2);
                                    if (event.num.includes(2)) {
                                        if (player.isDamaged()) {
                                            player.recover(1);
                                        } else player.gainMaxHp(1);
                                    }
                                    if (event.num.includes(3)) {
                                        game.log(player, '头痛宿疾');
                                        player.loseHp(1);
                                        player.addSkill('Grand_huangditequan_toutongsuji');
                                    }
                                }
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (player.storage.Grand_LausSaintClaudius == true && card.name == 'sha') return (num += player.storage.Grand_huangditequan_storage || 0);
                                },
                            },
                            ai: {
                                basic: {
                                    order: 10,
                                },
                                result: {
                                    player: 1,
                                },
                            },
                            group: ['Grand_huangditequan_draw'],
                            subSkill: {
                                toutongsuji: {
                                    //子技能识别名:Grand_huangditequan_toutongsuji
                                    trigger: {
                                        player: 'phaseUseEnd',
                                    },
                                    forced: true,
                                    popup: false,
                                    content() {
                                        var next = player.phaseUse();
                                        event.next.remove(next);
                                        trigger.next.push(next);
                                        player.removeSkill('Grand_huangditequan_toutongsuji');
                                    },
                                }, //子技能toutongsuji结束
                                storage: {
                                    //子技能识别名:Grand_huangditequan_storage
                                    marktext: '皇帝特权',
                                    intro: {
                                        name: '皇帝特权',
                                        content(storage, player) {
                                            if (!player.storage.Grand_LausSaintClaudius) {
                                                return '本局游戏内已发动' + player.storage.Grand_huangditequan_storage + '次';
                                            } else {
                                                return '本回合已发动' + player.storage.Grand_huangditequan_storage + '次';
                                            }
                                        },
                                    },
                                    onremove(player, skill) {
                                        player.unmarkSkill('Grand_huangditequan_storage');
                                        delete player.storage.Grand_huangditequan_storage;
                                    },
                                }, //子技能storage结束
                                draw: {
                                    //子技能识别名:Grand_huangditequan_draw
                                    trigger: {
                                        player: 'phaseDrawBegin',
                                    },
                                    forced: true,
                                    audio: 'Grand_huangditequan',
                                    content() {
                                        trigger.num += player.storage.Grand_huangditequan || 0;
                                    },
                                }, //子技能draw结束
                            },
                        }, //此技能结束
                        /*————————————童女讴歌的荣华帝政———————————————*/
                        Grand_LausSaintClaudius: {
                            //技能名称:童女讴歌的荣华帝政
                            //技能类型:宝具
                            //持有角色:尼禄·克劳狄乌斯(剑)
                            //技能效果:觉醒技,出牌阶段开始时,若你本局游戏内发动『皇帝特权』的次数不小于3,你失去一点体力上限,你修改『皇帝特权』
                            audio: 'ext:Grand包/audio/skill:2',
                            juexingji: true,
                            forced: true,
                            trigger: {
                                player: 'phaseUseBefore',
                            },
                            filter(event, player) {
                                if (player.name != 'Grand_nilu_kelaodiwusi_saber') return false;
                                return player.storage.Grand_huangditequan_storage >= 3;
                            },
                            content() {
                                player.awakenSkill(event.name);
                                if (!player.storage.Grand_LausSaintClaudius) player.storage.Grand_LausSaintClaudius = true;
                                player.loseMaxHp(1);
                                player.removeSkill('Grand_huangditequan_storage');
                                lib.translate['Grand_huangditequan'] = '皇帝特权·改';
                                lib.translate['Grand_huangditequan_info'] = '出牌阶段限一次,你可以于以下效果中随机执行两项:①摸两张牌②回复一点体力(若你未受伤,则改为加一点体力上限)③[头痛宿疾]:失去一点体力,本次出牌阶段结束时,你执行一个额外的出牌阶段;<br>锁定技:你于出牌阶段内使用杀次数+X(X为你本回合发动『皇帝特权』的次数).';
                                player.unmarkSkill('Grand_huangditequan_storage');
                                delete player.storage.Grand_huangditequan_storage;
                            },
                        }, //此技能结束
                        /*————————————————枕戈——————————————————*/
                        Grand_zhenge: {
                            //技能名称:枕戈
                            //技能类型:通用技能
                            //持有角色:Grand万年公主
                            //技能效果:昂扬技,出牌阶段,你可以失去一点体力,并从牌堆获得一张指定类型的牌.若你的体力不大于2,你本回合使用基本牌造成伤害+1(可叠加).昂扬:使用一张伤害牌
                            //枕戈·改:昂扬技,出牌阶段,你可以失去一点体力,并从牌堆获得一张指定类型的牌.若你的体力不大于2,你本回合使用基本牌造成伤害+1(可叠加).昂扬:使用一张牌
                            audio: 'ext:Grand包/audio/skill:2',
                            enable: 'phaseUse',
                            limited: true,
                            content() {
                                'step 0';
                                player.awakenSkill(event.name);
                                player.loseHp(1);
                                player
                                    .chooseControl(['basic', 'trick', 'delay', 'equip'])
                                    .set('ai', function () {
                                        if (player.countCards('he', { name: 'zhuge' }) >= 1) return 'basic';
                                        if (player.countCards('h', { name: 'sha' }) >= 3 && player.countCards('he', { name: 'zhuge' }) == 0) return 'equip';
                                        return ['trick', 'delay'].randomGet();
                                    })
                                    .set('prompt', '请选择『枕戈』获得牌的类型');
                                player.addSkill('Grand_zhenge_restore');
                                ('step 1');
                                if (result.control) {
                                    var card = get.cardPile2(function (card) {
                                        return get.type(card) == result.control;
                                    });
                                    if (!card) {
                                        player.say('没有可以获得的牌');
                                        game.log('枕戈:没有可以获得的牌');
                                    } else player.gain(card, 'gain2');
                                }
                                ('step 2');
                                if (player.hp <= 2) {
                                    if (!player.storage.Grand_zhenge_damage) player.storage.Grand_zhenge_damage = 0;
                                    player.storage.Grand_zhenge_damage++;
                                    player.addTempSkill('Grand_zhenge_damage');
                                    player.markSkill('Grand_zhenge_damage');
                                }
                            },
                            ai: {
                                basic: {
                                    order: 4,
                                },
                                result: {
                                    player(player) {
                                        if (player.hp < 2) return -1;
                                        return 1;
                                    },
                                },
                            },
                            subSkill: {
                                restore: {
                                    //子技能识别名:Grand_zhenge_restore
                                    forced: true,
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    filter(event, player) {
                                        if (!player.storage.Grand_xinghan) return get.tag(event.card, 'damage');
                                        else return true;
                                    },
                                    content() {
                                        player.restoreSkill('Grand_zhenge');
                                        player.removeSkill('Grand_zhenge_restore');
                                    },
                                }, //子技能restore结束
                                damage: {
                                    //子技能识别名:Grand_zhenge_damage
                                    forced: true,
                                    intro: {
                                        content: '基本牌造成伤害+#',
                                    },
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    filter(event, player) {
                                        return event.card && get.type(event.card) == 'basic';
                                    },
                                    content() {
                                        trigger.num += player.storage.Grand_zhenge_damage;
                                    },
                                    onremove(player) {
                                        player.unmarkSkill('Grand_zhenge_damage');
                                        delete player.storage.Grand_zhenge_damage;
                                    },
                                }, //子技能damage结束
                            },
                        }, //此技能结束
                        /*————————————————兴汉——————————————————*/
                        Grand_xinghan: {
                            //技能名称:兴汉
                            //技能类型:通用技能
                            //持有角色:Grand万年公主
                            //技能效果:觉醒技,一名角色的结束阶段,若你本回合进入过濒死状态,你减少一点体力上限,并将体力回复至体力上限,你修改『枕戈』
                            audio: 'ext:Grand包/audio/skill:2',
                            juexingji: true,
                            forced: true,
                            trigger: {
                                global: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                return game.getGlobalHistory('changeHp', (evt) => {
                                    return evt.player == player && evt.parent._dyinged;
                                }).length;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill(event.name);
                                if (!player.storage.Grand_xinghan) player.storage.Grand_xinghan = true;
                                player.loseMaxHp(1);
                                player.hp = player.maxHp;
                                ('step 1');
                                lib.translate['Grand_zhenge'] = '枕戈·改';
                                lib.translate['Grand_zhenge_info'] = '昂扬技,出牌阶段,你可以失去一点体力,并从牌堆获得一张指定类型的牌.若你的体力不大于2,你本回合使用基本牌造成伤害+1(可叠加).<br>昂扬:使用一张牌.';
                            },
                        }, //此技能结束
                        /*———————————————十二试炼—————————————————*/
                        Grand_shiershilian: {
                            //技能名称:十二试炼
                            //技能类型:通用技能
                            //持有角色:赫拉克勒斯(狂)
                            //技能效果:锁定技,游戏开始时,你将牌堆顶的十二张非装备且名称各不相同的牌置于你的武将牌上,称为<试炼>;当你进入濒死状态时,若你的武将牌上拥有<试炼>,你获得一张<试炼>,增加一点体力上限,并将体力回复至1点;当你成为其他角色使用牌的目标时,若你的武将牌上拥有<试炼>,则你不可响应此牌;你的手牌上限+X(X为你武将牌上<试炼>的数量)
                            forced: true,
                            audio: 'ext:Grand包/audio/skill:2',
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            marktext: '试炼',
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                var names = [];
                                var cards = [];
                                while (cards.length < 12) {
                                    var card = get.cardPile2(function (card) {
                                        return !cards.includes(card) && !names.includes(card.name) && get.type2(card) != 'equip';
                                    });
                                    if (card) {
                                        cards.push(card);
                                        names.push(card.name);
                                    } else break;
                                }
                                player.addToExpansion(cards, 'draw').gaintag.add('Grand_shiershilian');
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return (num += player.getExpansions('Grand_shiershilian').length || 0);
                                },
                            },
                            group: ['Grand_shiershilian_dying', 'Grand_shiershilian_usecard'],
                            subSkill: {
                                dying: {
                                    //子技能识别名:Grand_shiershilian_dying
                                    forced: true,
                                    audio: 'ext:Grand包/audio/skill:1',
                                    trigger: {
                                        player: 'dying',
                                    },
                                    filter(event, player) {
                                        return player.getExpansions('Grand_shiershilian').length;
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseCardButton('获得一张<试炼>', player.getExpansions('Grand_shiershilian'), true);
                                        ('step 1');
                                        if (result.links?.length) {
                                            player.gain(result.links, 'gain2');
                                            player.gainMaxHp(1);
                                            player.recover(1 - player.hp);
                                        }
                                    },
                                }, //子技能dying结束
                                usecard: {
                                    //子技能识别名:Grand_shiershilian_usecard
                                    forced: true,
                                    audio: 'ext:Grand包/audio/skill:1',
                                    trigger: {
                                        global: 'useCardToPlayer',
                                    },
                                    filter(event, player) {
                                        return event.player != player && event.target == player;
                                    },
                                    content() {
                                        trigger.directHit.addArray(
                                            game.filterPlayer(function (current) {
                                                return current == player;
                                            })
                                        );
                                    },
                                }, //子技能usecard结束
                            },
                        }, //此技能结束
                        /*————————————————勇武——————————————————*/
                        Grand_yongwu: {
                            //技能名称:勇武
                            //技能类型:通用技能
                            //持有角色:赫拉克勒斯(狂)
                            //技能效果:锁定技,你每回合使用的前X张牌无距离和次数限制且不可被响应(X为你已损失的体力值)
                            audio: 'ext:Grand包/audio/skill:2',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getHistory('useCard').length <= player.getDamagedHp();
                            },
                            content() {
                                trigger.directHit.addArray(game.filterPlayer());
                            },
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    return player.countUsed() < player.getDamagedHp();
                                },
                            },
                            mod: {
                                targetInRange(card, player) {
                                    if (player.countUsed() < player.getDamagedHp()) return true;
                                },
                                cardUsable(card, player) {
                                    if (player.countUsed() < player.getDamagedHp()) return Infinity;
                                },
                                aiOrder(player, card, num) {
                                    if (player.countUsed() >= player.getDamagedHp()) return;
                                    var numx = get.info(card).usable;
                                    if (typeof numx == 'function') numx = num(card, player);
                                    if (typeof numx == 'number') return num + 10;
                                },
                            },
                        }, //此技能结束
                        /*———————————————鹤恩惜别—————————————————*/
                        Grand_heenxibie: {
                            //技能名称:鹤恩惜别
                            //技能类型:通用技能
                            //持有角色:鹤(术)
                            //技能效果:出牌阶段,你可以将一张牌当作不计入次数限制的随机属性的【杀】对攻击范围内的一名角色使用,若此【杀】造成了伤害,你摸X张牌.(X为此技能于你所有技能中的顺序)
                            audio: 'ext:Grand包/audio/skill:2',
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return target != player && player.inRange(target);
                            },
                            filterCard: true,
                            discard: false,
                            delay: false,
                            position: 'he',
                            prompt: '是否发动【鹤恩惜别】',
                            prompt2: '将一张牌不计入次数限制的随机属性【杀】对一名角色使用',
                            content() {
                                'step 0';
                                var nature = ['thunder', 'fire', 'none', 'ice'].randomGet();
                                event.nature = nature;
                                player.useCard({ name: 'sha', nature: nature }, card, false, target, 'Grand_heenxibie');
                                var num;
                                var skills = player.getSkills(null, false, false).filter((skill) => {
                                    var info = get.info(skill);
                                    if (!info || info.charlotte || get.skillInfoTranslation(skill, player).length == 0) return false;
                                    return true;
                                });
                                for (var i = 0; skills.length > i; i++) {
                                    if (skills[i] == 'Grand_heenxibie') num = i + 1;
                                }
                                event.num = num;
                                ('step 1');
                                if (
                                    player.hasHistory('sourceDamage', function (evt) {
                                        var card = evt.card;
                                        if (!card || card.name != 'sha' || card.nature != event.nature) return false;
                                        var evtx = evt.getParent('useCard');
                                        return evtx.card == card && evtx.parent == event;
                                    })
                                ) {
                                    if (player.hasSkill('Grand_heenxibie')) player.draw(event.num);
                                }
                            },
                        }, //此技能结束
                        /*———————————————一夜羽织—————————————————*/
                        Grand_yiyeyuzhi: {
                            //技能名称:一夜羽织
                            //技能类型:通用技能
                            //持有角色:鹤(术)
                            //技能效果:锁定技,当你造成/受到伤害时,你失去此技能外的首个技能并摸一张牌.本回合结束时,你依次获得最后失去的技能
                            trigger: {
                                player: 'damageBegin4',
                                source: 'damageBegin4',
                            },
                            forced: true,
                            audio: 'ext:Grand包/audio/skill:2',
                            filter(event, player) {
                                var skills = player.getSkills(null, false, false).filter((skill) => {
                                    var info = get.info(skill);
                                    if (!info || info.charlotte || get.skillInfoTranslation(skill, player).length == 0) return false;
                                    return true;
                                });
                                skills.remove('Grand_yiyeyuzhi');
                                return skills.length;
                            },
                            content() {
                                if (!player.storage.Grand_yiyeyuzhi) player.storage.Grand_yiyeyuzhi = [];
                                var skills = player.getSkills(null, false, false).filter((skill) => {
                                    var info = get.info(skill);
                                    if (!info || info.charlotte || get.skillInfoTranslation(skill, player).length == 0) return false;
                                    return true;
                                });
                                skills.remove('Grand_yiyeyuzhi');
                                player.storage.Grand_yiyeyuzhi.push(skills[0]);
                                player.removeSkill(skills[0]);
                                game.log(player, '失去了【', get.translation(skills[0]), '】');
                                player.addTempSkill('Grand_yiyeyuzhi_recover');
                                player.draw(1);
                            },
                            subSkill: {
                                recover: {
                                    //子技能识别名:Grand_yiyeyuzhi_recover
                                    onremove(player) {
                                        var skills = player.storage.Grand_yiyeyuzhi.reverse();
                                        for (var i = 0; skills.length > i; i++) {
                                            player.addSkill(skills[i]);
                                            game.log(player, '获得了【', get.translation(skills[i]), '】');
                                        }
                                        delete player.storage.Grand_yiyeyuzhi;
                                    },
                                }, //子技能recover结束
                            },
                        }, //此技能结束
                        /*———————————————淑女服饰—————————————————*/
                        Grand_shunvfushi: {
                            //技能名称:淑女服饰
                            //技能类型:通用技能
                            //持有角色:鹤(术)
                            //技能效果:锁定技,你于摸牌阶段的摸牌数+X(X为此技能于你所有技能中的顺序)
                            audio: 'ext:Grand包/audio/skill:2',
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            content() {
                                var num;
                                var skills = player.getSkills(null, false, false).filter((skill) => {
                                    var info = get.info(skill);
                                    if (!info || info.charlotte || get.skillInfoTranslation(skill, player).length == 0) return false;
                                    return true;
                                });
                                for (var i = 0; skills.length > i; i++) {
                                    if (skills[i] == 'Grand_shunvfushi') num = i + 1;
                                }
                                trigger.num += num;
                            },
                        }, //此技能结束
                        /*———————————————灵衣裁制—————————————————*/
                        Grand_lingyicaizhi: {
                            //技能名称:灵衣裁制
                            //技能类型:通用技能
                            //持有角色:鹤(术)
                            //技能效果:锁定技,当你发动其他技能时,你随机更换一个皮肤.你的手牌上限+X(X为此技能于你所有技能中的顺序)
                            trigger: {
                                player: ['logSkill', 'useSkillBegin'],
                            },
                            filter(event, player) {
                                var skills = player.getSkills(null, false, false).filter((skill) => {
                                    var info = get.info(skill);
                                    if (!info || info.charlotte || get.skillInfoTranslation(skill, player).length == 0) return false;
                                    return true;
                                });
                                return skills.includes(event.skill) && event.skill != 'Grand_lingyicaizhi';
                            },
                            forced: true,
                            content() {
                                var skin = ['灵基I', '灵基II', '灵基III', '皮肤I', '皮肤II', '皮肤III'].randomGet();
                                game.broadcastAll() + player.node.avatar.setBackgroundImage('extension/Grand包/skin/standard/Grand_he_caster/' + skin + '.jpg');
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    var num1;
                                    var skills = player.getSkills(null, false, false).filter((skill) => {
                                        var info = get.info(skill);
                                        if (!info || info.charlotte || get.skillInfoTranslation(skill, player).length == 0) return false;
                                        return true;
                                    });
                                    for (var i = 0; skills.length > i; i++) {
                                        if (skills[i] == 'Grand_lingyicaizhi') num1 = i + 1;
                                    }
                                    return (num += num1);
                                },
                            },
                        }, //此技能结束
                        //新的技能写在这条信息之前,注意格式不要写错
                        //新建角色
                    },
                    translate: {
                        /*————————————————翻译信息————————————————*/
                        //分类内容翻译
                        Grand_yinglingdian: '英灵殿',
                        Grand_zizhiwujiang: '自制武将',
                        Grand_qunyousheji: '群友设计',
                        Grand_bentiwujiang: '本体武将',
                        Grand_dasongfengya: '大宋风雅',
                        /*————————————————角色名称————————————————*/
                        Grand_aertuoliya_pandelagong_saber: '阿尔托莉雅·潘德拉贡(剑)',
                        Grand_aertuoliya_pandelagong_saber_ab: '阿尔托莉雅·潘德拉贡',
                        Grand_aertuoliya_pandelagong_caster: '阿尔托莉雅·潘德拉贡(术)',
                        Grand_aertuoliya_pandelagong_caster_ab: '阿尔托莉雅·潘德拉贡',
                        Grand_ku_qiulin_lancer: '库·丘林(枪)',
                        Grand_ku_qiulin_lancer_ab: '库·丘林',
                        Grand_kuizhaer_keyateer_rider: '魁扎尔·科亚特尔(骑)',
                        Grand_kuizhaer_keyateer_rider_ab: '魁扎尔·科亚特尔',
                        Grand_enqidu_lancer: '恩奇都(枪)',
                        Grand_enqidu_lancer_ab: '恩奇都',
                        db_Grand_qiandaitiantao: '千代田桃',
                        Grand_zaolaiyouxiang: '早濑优香',
                        Grand_luola: '萝拉',
                        Grand_keernunuosi: '科尔努诺斯', //科尔努诺斯衍生角色(死灵术):
                        Grand_wangjiedayouling: '亡街大幽灵',
                        Grand_sihaituxizhe: '死骸突袭者',
                        Grand_bingshuanglieyanliuli: '冰霜烈焰·琉璃',
                        Grand_yonghengxinniangsaileisi: '永恒新娘赛蕾丝',
                        Grand_sijie: '丝捷',
                        Grand_yifu: '伊芙',
                        Grand_kongqirinai: '空崎日奈',
                        Grand_anjila: '安吉拉',
                        Grand_simayi_lainisi_rider: '司马懿(莱妮丝)(骑)',
                        Grand_simayi_lainisi_rider_ab: '莱妮丝',
                        Grand_taizaizhi: '太宰治',
                        Grand_weierting: '维尔汀',
                        Grand_yanmoai: '阎魔爱',
                        Grand_sufubi: '苏芙比',
                        Grand_JaneWillow: '简·薇洛',
                        Grand_ling: '令',
                        Grand_weierdandi: '薇儿丹蒂',
                        Grand_sanliakeman: '三笠·阿克曼',
                        Grand_aierwen: '埃尔文',
                        Grand_yishentaer_avenger: '伊什塔尔(仇)',
                        Grand_yishentaer_avenger_ab: '伊什塔尔',
                        Grand_Cosette: '珂赛特',
                        Grand_Wilson: '威尔逊',
                        Grand_liyang: '莉央',
                        Grand_zhaoxiang: 'Grand赵襄',
                        Grand_zhaoxiang_ab: '赵襄',
                        Grand_caomao: 'Grand曹髦',
                        Grand_caomao_ab: '曹髦',
                        Grand_gongsunyuan: 'Grand公孙渊',
                        Grand_gongsunyuan_ab: '公孙渊',
                        Grand_caoying: 'Grand曹婴',
                        Grand_caoying_ab: '曹婴',
                        Grand_guanyinping: 'Grand关银屏',
                        Grand_guanyinping_ab: '关银屏',
                        Grand_shenjiangwei: 'Grand神姜维',
                        Grand_shenjiangwei_ab: '神姜维',
                        Grand_donghaidihuang: '东海帝皇',
                        Grand_liqingzhao: '李清照',
                        Grand_xinqiji: '辛弃疾',
                        Grand_shiliuyeyegong: '十六夜野宫',
                        Grand_heiyimatao: '黑衣麻陶',
                        Grand_sanhua: '散华',
                        Grand_luyusheng: 'Grand陆郁生',
                        Grand_luyusheng_ab: '陆郁生',
                        Grand_fuhua: '符华',
                        Grand_fuhua_ab: '识之律者',
                        Grand_zhangxuan: 'Grand张嫙',
                        Grand_zhangxuan_ab: '张嫙',
                        Grand_ruanyu: 'Grand阮瑀',
                        Grand_ruanyu_ab: '阮瑀',
                        Grand_jack_o: '杰克欧',
                        Grand_nilu_kelaodiwusi_saber: '尼禄·克劳狄乌斯(剑)',
                        Grand_nilu_kelaodiwusi_saber_ab: '尼禄·克劳狄乌斯',
                        Grand_wanniangongzhu: 'Grand万年公主',
                        Grand_wanniangongzhu_ab: '万年公主',
                        Grand_helakelesi_basaker: '赫拉克勒斯(狂)',
                        Grand_helakelesi_basaker_ab: '赫拉克勒斯',
                        Grand_he_caster: '鹤(术)',
                        Grand_he_caster_ab: '鹤',
                        //新建角色
                        /*————————————————技能名称————————————————*/
                        Grand_wuli: '物理',
                        Grand_xinsuan: '心算',
                        Grand_yusuan: '预算',
                        Grand_taose_jin: '桃色',
                        Grand_taose_qun: '桃色',
                        Grand_kuangbao: '狂暴',
                        Grand_silingshu: '死灵术',
                        //死灵术衍生技能
                        Grand_sihaituxizhe: '死骸突袭者',
                        Grand_wangjiedayouling: '亡街大幽灵',
                        Grand_sijie: '丝捷',
                        Grand_bingshuanglieyanliuli: '冰霜烈焰·琉璃',
                        Grand_yonghengxinniangsaileisi: '永恒新娘塞蕾丝',
                        Grand_sihaiwenshu: '死海文书',
                        Grand_qichang: '气场',
                        Grand_huimie: '毁灭',
                        Grand_juewu: '觉悟',
                        Grand_zhenlizhishu: '真理之书',
                        Grand_tt2xieyi: 'TT2协议',
                        Grand_yuelingsuiye: '月灵髓液',
                        Grand_xuandidezhihui: '宣帝的指挥',
                        Grand_renjianshige: '人间失格',
                        Grand_shoutixiang: '手提箱',
                        Grand_yubaoyuzhongxingzou: '于暴雨中行走',
                        Grand_wangshi: '往世',
                        Grand_wangsheng: '往生',
                        Grand_mofang_hong: '魔放红',
                        Grand_mofang_lv: '魔放绿',
                        Grand_mofang_lan: '魔放蓝',
                        Grand_longzhiluxin: '龙之炉心',
                        Grand_Excalibur: 'Excalibur',
                        Grand_huzhijiahu: '湖之加护',
                        Grand_AroundCaliburn: '环抱着你的希望之星',
                        Grand_luenmoshu: '卢恩魔术',
                        Grand_GaeBolg: '穿刺死荆之枪',
                        Grand_shanshenzhihui: '善神智慧',
                        Grand_Xiuhcoatl: '炽焰,亦焚尽神灵',
                        Grand_bianrong: '变容',
                        Grand_jinxingqudong: '金星驱动',
                        Grand_duochongxinghuan: '多重星环',
                        //多重星环衍生技能
                        Grand_duochongxinghuan_asitadi: '阿斯塔蒂',
                        Grand_duochongxinghuan_yishentaer: '伊什塔尔',
                        Grand_duochongxinghuan_anate: '阿纳特',
                        Grand_SymphonyofDestiny: '命运',
                        Grand_gezhi: '革制',
                        Grand_kaituo: '开拓',
                        Grand_tiancaishunv: '天才淑女',
                        Grand_nongsuojinghua: '浓缩精华',
                        Grand_guanghuiqizhi: '光辉旗帜',
                        Grand_xiaomingse: '笑鸣瑟',
                        Grand_ningzuowu: '宁作吾',
                        Grand_butuizhiqi: '不退之旗',
                        Grand_xinsuo: '心锁',
                        Grand_shinian: '誓念',
                        Grand_qiaoxi: '巧袭',
                        Grand_shouhu: '守护',
                        Grand_caiyi: '猜疑',
                        Grand_zhenxiang: '真相',
                        Grand_chongfeng: '冲锋',
                        Grand_duanbi: '断臂',
                        Grand_jianyue: '箭越',
                        Grand_tigong: '替弓',
                        Grand_zhengshebizhong: '正射必中',
                        Grand_fanghun: '芳魂',
                        Grand_fuhan: '扶汉',
                        Grand_qianlong: '潜龙',
                        Grand_fensi: '忿肆',
                        Grand_juetao: '决讨',
                        Grand_zhushi: '助势',
                        Grand_huaiyi: '怀异',
                        Grand_xuanguo: '旋国',
                        Grand_lingren: '凌人',
                        Grand_fujian: '伏间',
                        Grand_huxiao: '虎啸',
                        Grand_xuehen: '雪恨',
                        Grand_wuji: '武继',
                        Grand_tianren: '天任',
                        Grand_pingxiang: '平襄',
                        Grand_jiufa: '九伐',
                        Grand_cilun: '词论',
                        Grand_cifu: '词赋',
                        Grand_shuangquan: '双全',
                        Grand_chuanqi: '传奇',
                        Grand_lvzhan: '屡战',
                        Grand_zhuangdan: '装弹',
                        Grand_lianshe: '连射',
                        Grand_heixing: '黑星',
                        Grand_jiban: '羁绊',
                        Grand_jianwu_linci: '剑舞·凛刺',
                        Grand_manlianhua: '曼莲华',
                        Grand_shuoxueyongdong: '朔雪永冻',
                        Grand_zhiwei: '至微',
                        Grand_zhente: '贞特',
                        Grand_fanjiansushijiekuhai: '凡间俗世皆苦海',
                        Grand_baibing: '百兵',
                        Grand_ninaiwohe: '你奈我何',
                        Grand_tongli: '同礼',
                        Grand_shezang: '奢葬',
                        Grand_xingzuo: '兴作',
                        Grand_miaoxian: '妙弦',
                        Grand_dopros: 'Dopros',
                        Grand_zhiling: '指令',
                        Grand_huangditequan: '皇帝特权',
                        Grand_LausSaintClaudius: '童女讴歌的荣华帝政',
                        Grand_zhenge: '枕戈',
                        Grand_xinghan: '兴汉',
                        Grand_shiershilian: '十二试炼',
                        Grand_heenxibie: '鹤恩惜别',
                        Grand_yiyeyuzhi: '一夜羽织',
                        Grand_shunvfushi: '淑女服饰',
                        Grand_lingyicaizhi: '灵衣裁制',
                        Grand_yongwu: '勇武',
                        //新建角色
                        /*————————————————技能描述————————————————*/
                        //物理
                        Grand_wuli_info: '出牌阶段限一次,你可以进行一次判定.<br>若结果为♥️️️,则你选择一名角色,你与其各回复一点体力,若其体力值为至最大体力值,你重复此流程.<br>若结果为♠️️️,则你选择一名其他角色,你对其造成一点伤害,并摸1张牌,若其死亡,你再摸两张牌并重复此流程',
                        //心算
                        Grand_xinsuan_info: '<b>锁定技</b>,你的【乐不思蜀】和【兵粮寸断】的判定必定失效',
                        //预算
                        Grand_yusuan_info: '准备阶段,你可以声明0-5之间的一个整数X,获得如下效果直至回合结束:<br>①出牌阶段,当你使用手牌时,若你本回合使用牌的次数不大于X,你摸一张牌.<br>②结束阶段,若你本回合使用牌的次数等于X,你摸5-X张牌',
                        //桃色晋
                        Grand_taose_jin_info: '<b>锁定技</b>,晋势力技,你区域内的♦️️️牌和♦️️️判定牌均视为♥️️️.<br>当一名角色因『物理』回复体力时,你令其下次造成伤害+1',
                        //桃色群
                        Grand_taose_qun_info: '<b>锁定技</b>,群势力技,你区域内的♣️️️牌和♣️️️判定牌均视为♠️️️.<br>每当你因『物理』摸一张牌时,你获得1枚<桃色♠️️️>印记.<br><b>出牌阶段</b>,你可以弃置2枚<桃色♠️️️>印记并对一名其他角色造成一点伤害,若其因此死亡,则你发动一次【物理】',
                        //狂暴
                        Grand_kuangbao_info: '出牌阶段,你可以对自己造成一点火属性伤害并摸一张牌,根据本回合此技能的使用次数执行以下效果:<br>为1:你摸两张牌,本回合手牌上限视为无限.<br>为2:你视为使用一张铁索连环,获得如下效果直到回合结束:<br>①本回合使用牌无距离限制.<br>②结束阶段,你摸等同于你本回合造成伤害数的牌.<br>大于等于3:你选择一名其他角色,你与其各弃置两张牌,其失去一点体力',
                        //死灵术
                        Grand_silingshu_info: '<b>锁定技</b>,你的手牌上限+2.<br>出牌阶段限一次,你可以从已开启的<死灵术>角色中选择一名.你获得其武将牌上的所有技能,并获得等同于其最大体力值的护盾,直至你下次发动『死灵术』.<br>死灵术角色:①丝捷②永恒新娘塞蕾斯.<br>当你第三次发动『死灵术』时,<死灵术>角色中添加[冰霜烈焰琉璃],[死骸骨突袭者];当你第五次发动『死灵术』时,<死灵术>角色中添加[亡街大幽灵].<br>当你失去一名<死灵术>角色附带的全部护盾时,你移除该角色所附带的技能,若其不为丝捷或永恒新娘赛蕾丝,你于<死灵术>角色中移除该角色',
                        //死灵术衍生技能
                        //死骸突袭者
                        Grand_sihaituxizhe_info: '<b>锁定技</b>,你的回合内,当一名角色死亡时,你对所有角色造成一点雷属性伤害',
                        //亡街大幽灵
                        Grand_wangjiedayouling_info: '出牌阶段限一次,你可以令所有角色的非锁定技失效,直到你的回合结束',
                        //丝捷
                        Grand_sijie_info: '<b>锁定技</b> ,你于出牌阶段内造成的伤害+1',
                        //冰霜烈焰琉璃
                        Grand_bingshuanglieyanliuli_info: '出牌阶段限一次,你可以令一名其他角色弃置3张牌',
                        //永恒新娘塞蕾丝
                        Grand_yonghengxinniangsaileisi_info: '无效果',
                        //死海文书
                        Grand_sihaiwenshu_info: '<b>锁定技</b>,当一名其他角色使用一张非转化的基本牌或锦囊牌时,你将牌堆顶的一张牌置于武将牌上,称为<死海文书>.你的手牌上限增加你武将牌上<死海文书>的数量.若你的<死海文书>同时满足以下条件:<br>①花色包含:<♥️️️>,<♦️️️>,<♠️️️>,<♣️️️>.<br>②种类包含:<基本牌>,<锦囊牌>,<装备牌>.<br>你移除<死海文书>中最先满足以上条件的牌,并将其添加至你的手牌',
                        //气场
                        Grand_qichang_info: '<b>主公技</b>,每回合限一次,当一名<吴>势力角色受到伤害时,你可以弃置伤害来源的两张牌',
                        //毁灭
                        Grand_huimie_info: '<b>锁定技</b>,你的【杀】可以且必须指定三名角色(若场上除你以外的存活角色低于3则须指定全部角色),且你使用【杀】无次数和距离限制',
                        //觉悟
                        Grand_juewu_info: '出牌阶段限一次,你可以弃一张牌,视为使用一张【酒】',
                        //真理之书
                        Grand_zhenlizhishu_info: '当一名角色濒死时,若你未因其发动过『真理之书』,则你可以选择其武将牌上的一个技能,并选择一名角色获得此技能.若该角色不为你,你回复一点体力(若你未受伤,则改为加1点体力上限)并摸x张牌(x为你本局游戏内发动『真理之书』的次数)',
                        //TT2协议
                        Grand_tt2xieyi_info: '<b>锁定技</b>,当你使用或打出牌时,若你本局游戏内使用或打出过的牌数和为3的倍数,你摸一张牌',
                        //月灵髓液
                        Grand_yuelingsuiye_info: '<b>锁定技</b>,当你的手牌数大于你的手牌上限时,你将一张手牌置于武将牌上,称为<月灵髓液>.<br>你的手牌上限+X(X为<月灵髓液>的数量).<br>当你受到伤害时,你摸一张牌.<br>摸牌阶段,你的额定摸牌数+1',
                        //宣帝的指挥
                        Grand_xuandidezhihui_info: '出牌阶段,你可以移去一张<月灵髓液>并将手牌摸至你的手牌上限',
                        //人间失格
                        Grand_renjianshige_info: '当你成为一名角色使用【杀】或非延时锦囊的目标时,你可以将一张牌置于牌堆顶,并选择一名除你以外的其他角色,令其展示一张牌,若:<br>①两张牌的类型相同,你获得其展示的牌<br>②两张牌的花色相同,你与其各从牌堆底摸一张牌<br>③两张牌的点数相同,你弃置目标来源的一张牌. <br>若满足的条件数量:<br>①≥2:此牌对你无效<br>②≤2:其成为此牌的额外目标<br>③均不满足:你摸一张牌',
                        //手提箱
                        Grand_shoutixiang_info: '<b>锁定技</b>,结束阶段,你将所有存活角色的当前体力值记录在『手提箱』内.准备阶段,你将所有存活角色的当前体力值变为『手提箱』内记录的值',
                        //于暴雨中行走
                        Grand_yubaoyuzhongxingzou_info: '每回合限一次,当一名角色使用【杀】指定一名角色为目标时,你可以视为对目标角色使用一张无距离限制的【杀】.若此【杀】造成了伤害,你摸一张牌',
                        //往世
                        Grand_wangshi_info: '<b>锁定技</b>,游戏开始,你将牌堆顶的三张牌置于武将牌上,称为<阴世牌>,你的手牌区内的牌称为<阳世牌>.<br>你可以如手牌一样使用或打出<阴世牌>.<br>当你使用或打出<阳/阴世牌>时,你摸一张<阴/阳世牌>.<br>当你于回合内使用或打出<阴世牌>时,你失去一点体力;当你于回合外使用或打出<阳世牌>时,你回复一点体力',
                        //往生
                        Grand_wangsheng_info: '准备阶段,你可以任意调换<阴世牌>与<阳世牌>',
                        //魔放红
                        Grand_mofang_hong_info: '<b>锁定技</b>,出牌阶段开始时,你从牌堆获得一张基本牌',
                        //魔放绿
                        Grand_mofang_lv_info: '<b>锁定技</b>,结束阶段,你从牌堆获得一张基本牌',
                        //魔放蓝
                        Grand_mofang_lan_info: '<b>锁定技</b>,摸牌阶段,你少摸一张牌,从牌堆获得一张锦囊牌',
                        //龙之炉心
                        Grand_longzhiluxin_info: '<b>锁定技</b>,当你受到无属性伤害时,你免疫之,从以下选项中选择一项:<br>①受到一点火属性伤害并从牌堆获得一张锦囊牌;<br>②失去一点体力并从牌堆获得一张基本牌',
                        //Excalibur
                        Grand_Excalibur_info: '<b>限定技</b>,出牌阶段,你可以令除你以外的所有角色依次弃置三张牌,并受到你造成的一点火属性伤害',
                        //湖之加护
                        Grand_huzhijiahu_info: '当你使用或打出一张牌时,你可以摸一张牌并交给一名其他角色一张牌.若如此做,本回合结束阶段,你弃置X张牌(X为你本回合发动此技能的次数);若X大于3,你失去一点体力,并摸三张牌',
                        //环抱着你的希望之星
                        Grand_AroundCaliburn_info: '<b>限定技</b>,出牌阶段,你可以获得如下效果直至你的下个回合开始:<br>①一名角色受到伤害时,取消之;<br>②一名角色失去体力时,取消之;<br>③一名角色回复体力时,取消之',
                        //卢恩魔术
                        Grand_luenmoshu_info: '出牌阶段限三次,你可以将手牌摸至/弃至你的体力上限,根据你摸牌或弃牌的数量执行以下效果:<br>①若摸牌数≥2:此技能失效直至你的回合结束.<br>②若弃牌数≥2:你获得『龙胆』直至你的下个回合开始.<br>若弃牌数≥3:你摸等同于你弃至牌数量的牌',
                        //穿刺死荆之枪
                        Grand_GaeBolg_info: '<b>限定技</b>,出牌阶段,你可以对一名其他角色造成两点伤害',
                        //善神智慧
                        Grand_shanshenzhihui_info: '当你造成伤害时,你可以取消之,并摸X张牌(X为伤害值).<br>若你未使用『炽焰,亦焚尽神灵』,你获得X枚善神印记;<br>若你已使用『炽焰,亦焚尽神灵』,你摸一张牌',
                        //炽焰,亦焚尽神灵
                        Grand_Xiuhcoatl_info: '<b>限定技</b>,出牌阶段,你可以对一名其他角色造成X点伤害(X为你拥有的善神印记数量),并移除你所有的善神印记',
                        //变容
                        Grand_bianrong_info: '当你使用一张牌时,若你使用的上一张牌不为装备牌,且不为【闪】、【无懈可击】、延时锦囊,虚拟牌、转化牌.你可以取消此牌的结算并视为使用你使用的上一张牌',
                        //金星驱动
                        Grand_jinxingqudong_info: '①当你造成伤害时,若你没有『阿斯塔蒂』,你可以弃置一枚<星>并令伤害值+1;<br>②当你使用或打出一张牌后,若你没有『伊什塔尔』,你可以弃置一枚<星>并摸一张牌;<br>③当你受到伤害后,若你没有『阿纳特』,你可以弃置一枚<星>并回复一点体力',
                        //多重星环
                        Grand_duochongxinghuan_info: '出牌阶段限两次,你可以失去一点体力,并令所有存活角色获得以下技能中你选择的一项:『阿斯塔蒂』,『伊什塔尔』,『阿纳特』.<br><b>锁定技</b>,一名角色执行以上技能中的一项时,你摸一张牌,并将一张手牌置于你的武将牌上,称之为<星>',
                        //多重星环衍生技能
                        //阿斯塔蒂
                        Grand_duochongxinghuan_asitadi_info: '<b>锁定技</b>,当你造成属性伤害时,伤害值+1',
                        //伊什塔尔
                        Grand_duochongxinghuan_yishentaer_info: '<b>锁定技</b>,你使用一张基本牌后,你摸一张牌',
                        //阿纳特
                        Grand_duochongxinghuan_anate_info: '<b>锁定技</b>,每回合限一次,当你受到伤害后,你回复一点体力',
                        //命运
                        Grand_SymphonyofDestiny_info: '当你需要使用或打出一张基本牌或锦囊牌时,你可以将1+X张手牌当做此牌使用或打出(X为你本轮此技能的使用次数);<br><b>锁定技</b>,①当你受到其他角色造成的1点伤害后,你摸X张牌,X-1;②一轮游戏结束时,你摸X张牌',
                        //革制
                        Grand_gezhi_info: '当你使用牌指定目标时,若此牌的目标数大于1,则你可以对其中一个目标造成1点雷属性伤害,重铸你所有与此牌花色相同的手牌',
                        //开拓
                        Grand_kaituo_info: '<b>锁定技</b>,当你使用一张牌时,若你本回合没有使用过与该牌名称相同的牌,你摸一张牌',
                        //天才淑女
                        Grand_tiancaishunv_info: '每名角色的回合限两次,当你成为一其他名角色使用基本牌或非延时锦囊牌的目标时,你可以摸一张牌,交给其一张牌,并获得其使用的牌.<br>若其使用的牌与你交给其的牌:<br>颜色相同,你摸一张牌;<br>颜色不同,你可以将一张牌当做无距离限制的冰属性【杀】对其使用',
                        //浓缩精华
                        Grand_nongsuojinghua_info: '你的回合外:<br>①当你造成伤害后,你可以令一名角色回复一点体力;<br>②当有伤害被放止时,你摸两张牌',
                        //光辉旗帜
                        Grand_guanghuiqizhi_info: '准备阶段,你可以跳过本回合的任意个阶段,摸X张牌(X为你跳过的阶段数).<br>若你因此技能跳过了摸牌阶段,你可以令至多X名角色摸一张牌;<br>若你因此技能跳过了出牌阶段,你可以对至多X名角色造成一点伤害',
                        //不退之旗
                        Grand_butuizhiqi_info: '<b>锁定技</b>,当你受到伤害时,若你的手牌数为全场唯一最多,你须选择一项:<br>①令伤害值+1;<br>②弃置X张牌(X为你的手牌中超出体力上限的部分),并回复一点体力,若你因此技能弃置了至少4张牌,你免疫此伤害',
                        //笑鸣瑟
                        Grand_xiaomingse_info: '<b>锁定技</b>,当你造成伤害时,若此伤害不为雷属性,则改为雷属性;否则此伤害+1.<br>你对攻击范围内不包含你的角色使用牌无距离和次数限制.<br>当你处于横置状态时,其他玩家计算与你的距离+1',
                        //宁作吾
                        Grand_ningzuowu_info: '出牌阶段限一次,你可以弃置任意张牌,并可以选择至多等量名其他角色.你横置这些角色,摸与你弃置牌数相等的牌.<br>若你因此技能选择了三名或更多的角色,你横置并摸与选择的角色数等量的牌',
                        //心锁
                        Grand_xinsuo_info: '<b>锁定技</b>,当你的手牌数小于X时,你将手牌摸至X(X为你装备区内的装备牌数＋1)',
                        //誓念
                        Grand_shinian_info: '当你使用牌指定一名角色为目标,或你成为其他角色使用牌的目标时,若你的装备区存在与该牌花色相同的牌,你可以弃置你与其中一名角色区域内的一张牌',
                        //巧袭
                        Grand_qiaoxi_info: '当你使用或打出牌时,你可以摸1张牌并弃置1张牌.若如此做,本回合的结束阶段,你每因此技能弃置一种花色的牌,便从牌堆获得一张该花色的牌',
                        //守护
                        Grand_shouhu_info: '每名角色限一次,当有角色受到致命伤害时,你可以弃置4张牌并防止此伤害.若你弃置的牌花色各不相同,则你摸4张牌',
                        //猜疑
                        Grand_caiyi_info: '准备阶段,你可以弃置1张牌,并选择一名除主公外未选择过的其他角色,猜测其的身份.<br>若猜对,你摸3张牌;否则你失去一点体力',
                        //真相
                        Grand_zhenxiang_info: '<b>锁定技</b>,当你失去体力后,你的手牌上限+1.<br>若你本局游戏内失去体力的次数:<br>①大于等于3:你摸两张牌;<br>②小于3:你摸一张牌',
                        //冲锋
                        Grand_chongfeng_info: '<b>主公技</b>,<b>限定技</b>,当你进入濒死状态时,你可以令其他群雄势力角色依次选择是否令你回复1点体力.若其选择是,其失去一点体力',
                        //断臂
                        Grand_duanbi_info: '每回合限一次,当你成为一名其他角色使用牌的目标后,你可以进行一次判定.<br>若判定的结果为红色,你失去一点体力并从牌堆中获得一张红色基本牌;<br>若判定结果为黑色,你可以弃置其区域内的一张牌',
                        //箭越
                        Grand_jianyue_info: '出牌阶段限X次,你可以将手牌中的一张伤害牌标记为<箭>并令你本回合使用【杀】的次数+1,你摸X张牌并弃置一张牌(X为你已损失的体力值且X至少为1)',
                        //替弓
                        Grand_tigong_info: '<b>转换技</b>,当你使一张<箭>指定目标时.<br>阳:你可以视为对目标额外使用一次此牌.<br>阴:你可以为此牌增加/减少一名目标',
                        //正射必中
                        Grand_zhengshebizhong_info: '<b>锁定技</b>,出牌阶段开始时,你将手牌中的所有伤害牌标记为<箭>;<br>你的<箭>不计入手牌上限;<br>当你失去<箭>后,你摸一张牌;<br>你的攻击范围+X;<br>你使用牌时,若X小于你的其他手牌数,此牌不可被响应;<br>你造成伤害时,若X大于你的体力值,此伤害+1(X为你手牌中<箭>的数量)',
                        //芳魂
                        Grand_fanghun_info: '你可以将一张【杀】当做【闪】,【闪】当做【杀】使用或打出;<br>当你因『芳魂』使用或打出【杀】或【闪】时,你可以获得对方的一张牌',
                        //扶汉
                        Grand_fuhan_info: '当你使用或打出一张转化牌后,你可以随机获得一名已开启且势力与你相同的武将的一个你未拥有的技能,你可以变更自己的势力',
                        //潜龙
                        Grand_qianlong_info: '①一名角色的出牌阶段开始时,若其手牌数不小于你,你可以令其将一张手牌置于你的武将牌上,称之为<潜龙>;<br>②当一名其他角色使用牌指定你为目标时,你可以失去一点体力,获得<潜龙>中的全部牌',
                        //忿肆
                        Grand_fensi_info: '出牌阶段,你可以获得一张<潜龙>中的牌,并将一张手牌置于<潜龙>中.若你<潜龙>中的牌花色相同,你重置『决讨』',
                        //决讨
                        Grand_juetao_info: '<b>限定技</b>,准备阶段,若你的体力值为1,或你<潜龙>中的牌数大于游戏内的玩家数,你可以选择一名其他角色,对其使用<潜龙>中最后一张牌,若<潜龙>中的上一张牌可以被使用,你重复此流程',
                        //助势
                        Grand_zhushi_info: '<b>主公技</b>,当你对一名魏势力角色发动『潜龙』①后,你可以将一张手牌置于<潜龙>中',
                        //怀异
                        Grand_huaiyi_info: '出牌阶段限一次,你可以展示任意张手牌,若这些牌的颜色:<br>全部相同,你回复一点体力,你可以令至多X名角色摸一张牌;<br>不全部相同,你可以获得至多X名角色的一张牌(X为你展示的牌的数量)',
                        //旋国
                        Grand_xuanguo_info: '一名其他角色的出牌阶段开始时,你可以令其选择是否交给你一张手牌.若其选择是,你须视为使用一张【杀】',
                        //凌人
                        Grand_lingren_info: '<b>蓄力技(1/2)</b>,当你使用伤害牌指定其他角色目标时,你可以消耗所有蓄力点数并摸等量的牌,令其中一个目标不可响应此牌,与其选择1至X中的一个数字(X为你消耗的蓄力点数).若你与其选择的数字:<br>相同:你令此伤害增加X,并获得『奸雄』,『行殇』直到下回合开始;<br>不同:①你令此伤害增加Y(Y为你与其选择数字的差的绝对值);<br>②若Y＞=2,你获得『奸雄』,『行殇』直到下回合开始',
                        //伏间
                        Grand_fujian_info: '<b>锁定技</b>,①结束阶段,你获得等同于你手牌数的『凌人』蓄力点数;<br>②一名角色死亡时,你获得1点『凌人』蓄力点数,并增加1点『凌人』蓄力点的上限',
                        //虎啸
                        Grand_huxiao_info: '<b>锁定技</b>,当你对一名角色造成火属性伤害时,你与其各摸一张牌,你对其使用牌无距离和次数限制直到回合结束',
                        //雪恨
                        Grand_xuehen_info: '出牌阶段限一次,你可以选择至多X名角色,横置这些角色并依次对其造成1点火属性伤害(X为你已损失体力值且X至少为1)',
                        //武继
                        Grand_wuji_info: '<b>觉醒技</b>,结束阶段,若你已损失体力值≥2,你增加一点体力上限,回复一点体力,并获得每名其他角色区域内的一张牌.你从牌堆或弃牌堆获得一张青龙偃月刀,并执行一个额外的回合,你于此回合的出牌阶段内造成的伤害均视为火属性伤害',
                        //天任
                        Grand_tianren_info: '<b>使命技</b>.游戏开始时,你获得X点体力上限(X为场上势力数).<br>使命:一名角色死亡时,若其势力所在人数不大于1,你获得『九伐』,并将势力替换为该角色的势力.<br>失败:当你进入濒死状态时,你回复体力至1.你摸等同于你已损失体力值数量的牌,并获得『困奋』',
                        //平襄
                        Grand_pingxiang_info: '一名角色受到不为你造成伤害后,你可以失去一点体力上限并视为对其伤害来源使用一张火属性【杀】,你摸X张牌(X为你本局游戏内发动『平襄』的次数',
                        //九伐
                        Grand_jiufa_info: '<b>锁定技</b>,准备阶段,你增加一点体力上限,回复一点体力并须选择至少一名势力相同的其他角色,你摸等同于你选择角色数牌,你依次对这些角色造成一点伤害,并受到其对你造成的一点伤害',
                        //词论
                        Grand_cilun_info: '出牌阶段限三次,你可以用一张手牌与至多三名角色同时拼点,依次结算拼点结果.<br>若你没赢,你于回合结束时失去一点体力并摸两张牌,且『词论』无效直到回合结束;<br>否则你摸一张牌且本回合使用牌无距离和次数限制',
                        //词赋
                        Grand_cifu_info: '每回合限一次,当你成为一名角色使用非延时锦囊牌的目标时,你可以进行一次判定.<br>若判定牌的花色与该牌花色不同,则你获得判定牌与该牌对应的所有实体牌',
                        //双全
                        Grand_shuangquan_info: '<b>锁定技</b>,当你使用或打出一张锦囊牌/基本牌后,你从牌堆获得一张基本牌/锦囊牌',
                        //传奇
                        Grand_chuanqi_info: '<b>锁定技</b>,①游戏开始时,你废除你的坐骑栏;②其他角色计算与你之间的距离+1,你计算与其他角色之间的距离-1;③你始终跳过你的准备阶段,判定阶段,摸牌阶段,弃牌阶段,结束阶段',
                        //屡战
                        Grand_lvzhan_info: '出牌阶段开始时,你可以摸X张牌(X为4-本轮你发动『屡战』的次数),若如此做,此次出牌阶段结束后:若你造成过伤害,你弃置所有手牌,并执行一个额外的出牌阶段;否则你将手牌调整至体力上限',
                        //装弹
                        Grand_zhuangdan_info: '出牌阶段限一次,你可以摸三张牌.直到回合结束为止,若你未击杀过角色,则你不可使用或打出【杀】以外的牌',
                        //连射
                        Grand_lianshe_info: '<b>锁定技</b>,你使用【杀】无距离和次数限制,且额外结算一次',
                        //黑星
                        Grand_heixing_info: '出牌阶段限一次/当你受到1点其他角色造成的伤害后,你可以对一名其他角色/伤害来源造成一点伤害,你可以选择是否令其回复一点体力、获得一枚<星>印记,并获得其一张牌',
                        //羁绊
                        Grand_jiban_info: '一名拥有<星>印记的角色不因『黑星』受到伤害时/回合结束时,你可以移去其武将牌上的任意枚<星>,并令此伤害增加X/回复X点体力并获得其X张牌(X为其被移除的<星>的数量)',
                        //剑舞·凛刺
                        Grand_jianwu_linci_info: '一名角色一次性弃置至少两张牌后,你可以失去一点体力,摸X张牌,并令其视为对一名角色使用一张无距离限制的【杀】(X为你已损失的体力值)',
                        //曼莲华
                        Grand_manlianhua_info: '一名角色受到【杀】造成的伤害后,你可以弃置X张牌,并回复一点体力(X为你的体力值)',
                        //朔雪永冻
                        Grand_shuoxueyongdong_info: '锁定技,当你成为其他角色使用牌的目标时,你获得一枚<冰痕>.若你拥有至少两枚<冰痕>,你可以移去所有<冰痕>并弃置其等量的牌',
                        //至微
                        Grand_zhiwei_info: '<b>锁定技</b>,一名角色的回合开始时,若场上没有因此法被选择的角色存活,则你须选择一名角色,令其获得如下效果:①摸牌阶段摸牌数+1;②出牌阶段内使用【杀】次数+1;③其造成伤害时,你摸一张牌',
                        //贞特
                        Grand_zhente_info: '<b>锁定技</b>,当你受到1点伤害后,若场上有因『至微』被选择的角色存活,则其摸一张牌,否则你摸两张牌',
                        //你奈我何
                        Grand_ninaiwohe_info: '<b>觉醒技</b>,准备阶段开始时,若除你以外的所有角色均受到过伤害,你失去一点体力上限,回复一点体力并摸两张牌,你获得技能『凡间俗世皆苦海』',
                        //凡间俗世皆苦海
                        Grand_fanjiansushijiekuhai_info: '出牌阶段限一次,你可以与一名随机的其他角色交换位置,并获得如下效果直至回合结束:<br>①你使用牌无次数限制;<br>②与你距离为1的角色无法响应你使用的牌;<br>③除你以外的所有玩家始终横置',
                        //百兵
                        Grand_baibing_info: '<b>锁定技</b>,当你造成伤害时/受到伤害时,若你本局游戏内发动『百兵』的次数:<br>①能被3整除:伤害值+1/-1;<br>②不能被3整除:你摸1张牌',
                        //同礼
                        Grand_tongli_info: '出牌阶段开始时,你可以弃置至多等同于你的体力上限张手牌,若如此做,本回合内你使用的前X张牌额外结算X-Y次(X为你因此弃置的牌的数量,Y为本回合『同礼』剩余的额外结算次数)',
                        //奢葬
                        Grand_shezang_info: '<b>锁定技</b>,每回合限一次,当你使用牌造成伤害/受到来自牌造成的伤害时,你摸X张牌(X为此牌牌名字数)',
                        //兴作
                        Grand_xingzuo_info: '出牌阶段,你可以观看牌堆顶的1+X张牌(X为你本回因『兴作』使用牌的次数).你可以使用其中一张牌(无距离和次数限制),并须选择一项:①弃置一张牌;②失去一点体力,并令『兴作』本回合失效',
                        //妙弦
                        Grand_miaoxian_info: '每名其他角色的出牌阶段限一次,其可以交给你一张牌,并视为使用一张无次数限制的基本牌',
                        //Dopros
                        Grand_dopros_info: '出牌阶段限一次,你可以选择任意张不同类别的手牌,并选择等量名角色.令其获得这些牌,称之为<令>;一名角色失去<令>时,你摸两张牌',
                        //指令
                        Grand_zhiling_info: '一名拥有<令>的角色的准备阶段/你的准备阶段,你可以发布一种[指令],本回合的结束阶段,结算其是否完成该[指令],并执行对应的效果.<br>①<b>[进攻]</b>:造成两点伤害<br>成功:[摸X张牌(X为其本回合造成的伤害)];<br>失败:[失去一点体力].<br>②<b>[防御]</b>:使用一张装备牌<br>成功:[回复X点体力(X为其本回合使用装备牌的数量)];<br>失败:[弃置两张牌].<br>③<b>[自爆]</b>:立即执行<br>对他人:[弃置一枚<令>并失去一点体力];<br>对自己:[回复一点体力,并摸两张牌]',
                        //皇帝特权
                        Grand_huangditequan_info: '出牌阶段限一次,你可以于以下效果中随机执行一项:①摸两张牌②回复一点体力(若你未受伤,则改为加一点体力上限)③[头痛宿疾]:失去一点体力,本次出牌阶段结束时,你执行一个额外的出牌阶段;<br>锁定技,你于摸牌阶段的摸牌数+X(X为你本局游戏内发动『皇帝特权』的次数)',
                        //童女讴歌的荣华帝政
                        Grand_LausSaintClaudius_info: '<b>觉醒技</b>,出牌阶段开始时,若你本局游戏内发动『皇帝特权』的次数不小于3,你失去一点体力上限,你修改『皇帝特权』',
                        //枕戈
                        Grand_zhenge_info: '<b>昂扬技</b>,出牌阶段,你可以失去一点体力,并从牌堆获得一张指定类型的牌.若你的体力不大于2,你本回合使用基本牌造成伤害+1(可叠加).<br>昂扬:使用一张伤害牌',
                        //兴汉
                        Grand_xinghan_info: '觉醒技,一名角色的结束阶段,若你本回合进入过濒死状态,你减少一点体力上限,并将体力回复至体力上限,你修改『枕戈』',
                        //十二试炼
                        Grand_shiershilian_info: '<b>锁定技</b>,①游戏开始时,你将牌堆顶的十二张非装备且名称各不相同的牌置于你的武将牌上,称为<试炼>;<br>②当你进入濒死状态时,若你的武将牌上拥有<试炼>,你获得一张<试炼>,增加一点体力上限,并将体力回复至1点;<br>③当你成为其他角色使用牌的目标时,若你的武将牌上拥有<试炼>,则你不可响应此牌;<br>④你的手牌上限+X(X为你武将牌上<试炼>的数量)',
                        //鹤恩惜别
                        Grand_heenxibie_info: '出牌阶段,你可以将一张牌当作不计入次数限制的随机属性的【杀】对攻击范围内的一名角色使用,若此【杀】造成了伤害,你摸X张牌.(X为此技能于你所有技能中的顺序)',
                        //一夜羽织
                        Grand_yiyeyuzhi_info: '<b>锁定技</b>,当你造成/受到伤害时,你失去此技能外的首个技能并摸一张牌.本回合结束时,你依次获得最后失去的技能',
                        //淑女服饰
                        Grand_shunvfushi_info: '锁定技,你于摸牌阶段的摸牌数+X(X为此技能于你所有技能中的顺序)',
                        //灵衣裁制
                        Grand_lingyicaizhi_info: '锁定技,当你发动其他技能时,你随机更换一个皮肤.你的手牌上限+X(X为此技能于你所有技能中的顺序)',
                        //勇武
                        Grand_yongwu_info: '<b>锁定技</b>,你每回合使用的前X张牌无距离和次数限制且不可被响应(X为你已损失的体力值)',
                        //新建角色
                    },
                    perfectPair: {}, //珠联璧合武将(选填)
                };
                for (var i in Grand.character) {
                    Grand.character[i][4].push('ext:Grand包/image/character/' + i + '.jpg');
                }
                lib.config.all.characters.add('Grand');
                lib.config.characters.add('Grand');
                lib.translate['Grand_character_config'] = 'Grand包'; // 包名翻译
                return Grand;
            });
        },
        config: {
            Grand_daorukuozhan: {
                name: "①<span style='text-decoration: underline;'>一键导入扩展并重启</span>",
                clear: true,
                onclick() {
                    if (confirm('是否执行『一键导入扩展并重启』？(此按键会清除extension中没有js的文件夹)')) {
                        game.Grand_daorukuozhan(true);
                    }
                },
            },
            Grand_ziyuzile: {
                name: '④自娱自乐',
                init: false,
                intro: '开启后玩家将代替所有角色行动(即时生效)',
            },
            Grand包_更新: {
                name: '<b>点击查看此版本更新内容</b>',
                clear: true,
                onclick() {
                    if (this.Grand包_更新 == undefined) {
                        var more = ui.create.div('Grand包_更新', '<b>版本号:正式版(v1.0.9)</b><br><div style="text-align: left;">1.添加了新角色:赫拉克勒斯(剑),鹤(术).<br>2.修复了已知bug.<br>3.修复了部分技能的描述错误.</div>');
                        this.parentNode.insertBefore(more, this.nextSibGrand_ling);
                        this.Grand包_更新 = more;
                        this.innerHTML = '<b>点此关闭更新公告</b>';
                    } else {
                        this.parentNode.removeChild(this.Grand包_更新);
                        delete this.Grand包_更新;
                        this.innerHTML = '<b>点击查看此版本更新内容</b>';
                    }
                },
            },
            Grand_重启: {
                name: "<Center><b><span style='text-decoration: underline;'>点击重启</span></b>",
                clear: true,
                intro: '重启游戏',
                onclick() {
                    if (confirm('是否重新启动游戏？')) {
                        game.reload();
                    }
                },
            },
        },
        package: {
            intro: "<b><Center>Grand包正式版(v1.0.9)[支持联机]</Center><br><br><br>『一键导入扩展并重启』:点击后自动识别未万能导入但已在extension中存在文件夹的扩展,并在游戏内导入该扩展.或清除extension内的空白文件夹(无js内容的文件夹),若成功执行了以上操作,游戏将会自动重启.<br><Center><b>扩展功能</b></Center><br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
            author: '珂赛特',
            version: '1.0.9', //更新内容
            changeLog: `<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>`,
        },
    };
});
