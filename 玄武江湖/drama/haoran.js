window.xwImportJuqing(function (lib, game, ui, get, ai, _status, drama) {
    drama.juqing = {
        name: '何巍浩然',
        characters: [{
            name: '宇文星城 傅金来',
            group: ['xwjh_yuwenxingcheng', 'xwjh_fujinlai'],
        }, {
            name: '血刀少主 阴无缺',
            group: ['xwjh_xuedaoshaozhu', 'xwjh_yinwuque'],
        }],
        chats: {
            'enter_scenes_1': {
                begin: {
                    exec() {
                        game.switchXwBgm('xiongyongantao');
                    },
                    next(state) {
                        if (state.groupId == 0) {
                            return 1;
                        } else if (state.groupId == 1) {
                            return 12;
                        }
                        return 'end';
                    }
                },
                1: {
                    character: 'xwjh_yuwenxingcheng',
                    content: ['想不到在这浩然山庄地下,竟然是别有洞天啊!', '喝的确实多了些,难不成这茅房长在地下？你怎么带的路？'],
                },
                2: {
                    character: 'xwjh_fujinlai',
                    content: ['算了,随处解决一下就是了!', "……", '小哥,听到了吗？', '前面好像有动静,黑漆漆的,还真有点瘆得慌.'],
                },
                3: {
                    character: 'xwjh_yuwenxingcheng',
                    content: ['我也听到了,似乎是……女人的哭声？'],
                },
                4: {
                    character: 'xwjh_fujinlai',
                    content: ['若是不小心误闯入了盟主的藏功室,倒是失了礼数,不好解释.', '不如先回去问个清楚,盟主一身侠气,岂会做那下三滥的勾当？']
                },
                5: {
                    character: 'xwjh_yuwenxingcheng',
                    content: ['也好……确实是我等多想了,等回去再向盟主问个明白……', '等等!小心暗器!'],
                    exec() {
                        game.playXwAudio('xwjh_voc_lihuazhen');
                    }
                },
                6: {
                    character: 'xwjh_fujinlai',
                    content: ['好狠毒的暗器,是谁!给爷爷出来!'],
                },
                7: {
                    skip: false,
                    exec() {
                        var arr = [game.addPlayer(2, 'xwjh_juqing_gongzhuzhuaya'),
                        game.addPlayer(3, 'xwjh_juqing_gongzhuxinfu'),
                        game.addPlayer(4, 'xwjh_juqing_wuma'),
                        game.addPlayer(5, 'xwjh_juqing_weiyang'),
                        game.addPlayer(6, 'xwjh_juqing_gongzhuermu'),
                        game.addPlayer(7, 'xwjh_juqing_gongzhuzhuaya')];
                        for (var m of arr) {
                            m.side = 'enemy';
                        }
                    },
                    next(state) {
                        if (state.groupId == 0) {
                            return 8;
                        } else if (state.groupId == 1) {
                            return 17;
                        }
                        return 'end';
                    }
                },
                8: {
                    character: 'xwjh_juqing_weiyang',
                    content: ['嘤嘤嘤,不是人家干的.'],
                },
                9: {
                    character: 'xwjh_juqing_wuma',
                    content: ['好了好了,别装了.', '不是吵着饿着肚子吗,正好今日的餐食还没送来.', '这两个呆子,正好敲死了,饱餐一顿.'],
                },
                10: {
                    character: 'xwjh_juqing_weiyang',
                    content: ['嘻嘻嘻,姐姐不要拆穿人家嘛.', '两位小哥哥,你们再凑近一点嘛,人家看不清你们的脸.'],
                },
                11: {
                    character: 'xwjh_fujinlai',
                    content: ['小哥!来者不善!准备应战!'],
                    next: 'end',
                },
                12: {
                    character: 'xwjh_yinwuque',
                    content: ['大哥!那天魔殿鸦堂的娘们,把我们哄到这地儿来作甚？',
                        '上次来时还不知道,这狗屁浩然山庄下头,还有这么一个地方.', '却不知为何这次要偷偷前来？莫不是那西门老狗有什么图谋？'],
                },
                13: {
                    character: 'xwjh_xuedaoshaozhu',
                    content: ['哼!有图谋又如何!', '难不成我堂堂血刀门少主,还会怕了那西门老狗,和这狗屁浩然山庄的何老儿不成？', '此番前来,自然有我的道理.'],
                },
                14: {
                    character: 'xwjh_yinwuque',
                    content: ['既然如此,任凭大哥吩咐就好!', '……', '不对劲,大哥,这里是不是有什么声音？'],
                    exec() {
                        game.playXwAudio('xwjh_voc_femalecry');
                    }
                },
                15: {
                    character: 'xwjh_xuedaoshaozhu',
                    content: ['嗯？女人的哭声？', '想不到那何老儿看上去道貌岸然,居然也干我血刀门的勾当!', '……', '不好,有暗器!快闪开!'],
                    exec() {
                        game.playXwAudio('xwjh_voc_lihuazhen');
                    }
                },
                16: {
                    character: 'xwjh_yinwuque',
                    content: ['好狠毒的暗器!是谁!敢暗算你阴爷爷!给老子滚出来!'],
                    next: 7,
                },
                17: {
                    character: 'xwjh_juqing_weiyang',
                    content: ['嘤嘤嘤,不是人家干的.'],
                },
                18: {
                    character: 'xwjh_juqing_wuma',
                    content: ['好了好了,别装了.', '不是吵着饿着肚子吗,正好今日的餐食还没送来.', '这两个不知哪里来的莽撞汉子,正好敲死了,饱餐一顿.'],
                },
                19: {
                    character: 'xwjh_juqing_weiyang',
                    content: ['嘻嘻嘻,姐姐不要拆穿人家嘛.', '两位大侠,你们再凑近一点嘛,人家看不清你们的脸.'],
                },
                20: {
                    character: 'xwjh_xuedaoshaozhu',
                    content: ['想不到何老儿居然好这一口!', '好,正好抓回去当鼎炉,就让老子也享受享受!'],
                },
                21: {
                    character: 'xwjh_yinwuque',
                    content: ['大哥,这娘们不一般,小心!'],
                    next: 'end',
                },
            },
            'enter_scenes_2': {
                begin: {
                    exec() {
                        game.switchXwBgm('xiongyongantao');
                    },
                    next(state) {
                        if (state.groupId == 0) {
                            return 'yuwen';
                        } else if (state.groupId == 1) {
                            return 'xuedao';
                        }
                        return 'end';
                    }
                },
                yuwen: {
                    character: 'xwjh_yuwenxingcheng',
                    content: ['呼,总算搞定了,这帮女人的实力好生强悍!'],
                    next: 2,
                },
                2: {
                    character: 'xwjh_fujinlai',
                    content: ['谁说不是呢!小哥啊,这何盟主为何在在山庄地下关着这么多的小娘皮呢？'],
                },
                3: {
                    character: 'xwjh_yuwenxingcheng',
                    content: ['我观方才那身形矫健的女子,举手抬足间有那么几分玄济大师的感觉,使的似乎是……少林武功的路数？'],
                },
                4: {
                    character: 'xwjh_fujinlai',
                    content: ['不然不然,小哥,你看旁边那小娘皮,一双媚眼勾魂的紧呐.', '邪里邪气的,打昏她们还真是费了好大功夫!'],
                },
                5: {
                    character: 'xwjh_yuwenxingcheng',
                    content: ['听!这下面的牢门好像……开了？'],
                },
                6: {
                    character: 'xwjh_fujinlai',
                    content: ['走走走!小哥,休整了许久,且再探上一探!'],
                },
                7: {
                    skip: false,
                    next(state) {
                        if (state.groupId == 0) {
                            return 'yuwenbk2';
                        } else if (state.groupId == 1) {
                            return 'xuedaobk2';
                        }
                        return 'end';
                    },
                    exec() {
                        for (var player of game.players) {
                            player.hp = player.maxHp;
                            player.draw(3);
                            player.xwRestore();
                        }
                    }
                },
                yuwenbk2: {
                    character: 'xwjh_yuwenxingcheng',
                    content: ['好!我们便往下走走!'],
                    next: 8,
                },
                8: {
                    skip: false,
                    exec() {
                        var arr = [game.addPlayer(2, 'xwjh_juqing_gongzhuzhuaya'),
                        game.addPlayer(3, 'xwjh_juqing_gongzhuxinfu'),
                        game.addPlayer(4, 'xwjh_juqing_shenhou'),
                        game.addPlayer(5, 'xwjh_juqing_youji'),
                        game.addPlayer(6, 'xwjh_juqing_gongzhuermu'),
                        game.addPlayer(7, 'xwjh_juqing_gongzhuzhuaya')];
                        for (var m of arr) {
                            m.side = 'enemy';
                        }
                        game.asyncDraw(arr, 4);
                    },
                    next(state) {
                        if (state.groupId == 0) {
                            return 'yuwenbk3';
                        } else if (state.groupId == 1) {
                            return 'xuedaobk3';
                        }
                        return 'end';
                    }
                },
                'yuwenbk3': {
                    character: 'xwjh_juqing_shenhou',
                    content: ['生人的气息!是谁？给姑奶奶出来!'],
                    next: 9,
                },
                9: {
                    character: 'xwjh_juqing_youji',
                    content: ['有人来救我们啦!哈哈哈哈哈!', '快!救救我!我什么都肯答应你!'],
                },
                10: {
                    character: 'xwjh_juqing_shenhou',
                    content: ['不许相信他们,保不齐又是何老儿派来打探消息的杂碎!', '杀了他们!杀了他们!'],
                },
                11: {
                    character: 'xwjh_yuwenxingcheng',
                    content: ['几位……姑娘？有话好说!且慢动手!'],
                },
                12: {
                    character: 'xwjh_fujinlai',
                    content: ['小哥,她们已经疯了,没办法,先打了再说罢!'],
                },
                13: {
                    character: 'xwjh_yuwenxingcheng',
                    content: ['唉……只依上一层打昏了便是,万万不可伤其性命!'],
                },
                14: {
                    character: 'xwjh_fujinlai',
                    content: ['得咧!等的就是小哥你这句话.', '小娘皮!看剑!'],
                    next: 'end',
                },
                xuedao: {
                    character: 'xwjh_yinwuque',
                    content: ['大哥,搞定了,这帮娘们儿不难对付.就是我下手重了些,可能……'],
                    next: 15,
                },
                15: {
                    character: 'xwjh_xuedaoshaozhu',
                    content: ['罢了罢了,这几个娘们的姿色,比起我血刀门抓的差远了.', '死了就死了吧,何老儿的眼光,看来也不怎么样.'],
                },
                16: {
                    character: 'xwjh_yinwuque',
                    content: ['大哥,刚才那个拿大刀的,使的好像是少林派秃驴的金刚伏魔刀法？'],
                },
                17: {
                    character: 'xwjh_xuedaoshaozhu',
                    content: ['同是武林正派,何老儿还会抓少林派的俗家娘们儿？', '倒是另外一个娘们,除了那双勾人的眼不知是哪里学的之外,心法内功全是恒山那群俏尼姑的路数.'],
                },
                18: {
                    character: 'xwjh_yinwuque',
                    content: ['好一个藏污纳垢的浩然山庄啊!'],
                },
                19: {
                    character: 'xwjh_yinwuque',
                    content: ['慢着,听声音,下面那个牢门打开了？'],
                },
                20: {
                    character: 'xwjh_xuedaoshaozhu',
                    content: ['且稍作休整,待会儿我们下去!'],
                    next: 7,
                },
                xuedaobk2: {
                    character: 'xwjh_yinwuque',
                    content: ['大哥,我先探探路!'],
                    next: 8,
                },
                xuedaobk3: {
                    character: 'xwjh_juqing_shenhou',
                    content: ['生人的气息!是谁？给姑奶奶出来!'],
                    next: 22,
                },
                22: {
                    character: 'xwjh_juqing_youji',
                    content: ['有人来救我们啦!哈哈哈哈哈!', '快!救救我!我什么都肯答应你!'],
                },
                23: {
                    character: 'xwjh_juqing_shenhou',
                    content: ['不许相信他们,保不齐又是何老儿派来打探消息的杂碎!', '杀了他们!杀了他们!'],
                },
                24: {
                    character: 'xwjh_yinwuque',
                    content: ['大哥!这些娘皮就跟疯了一样!'],
                },
                25: {
                    character: 'xwjh_xuedaoshaozhu',
                    content: ['不用留手!利落点解决吧!'],
                    next: 'end',
                }
            },
            'enter_scenes_3': {
                begin: {
                    exec() {
                        game.switchXwBgm('xiongyongantao');
                    },
                    next(state) {
                        if (state.groupId == 0) {
                            return 'yuwen';
                        } else if (state.groupId == 1) {
                            return 'xuedao';
                        }
                        return 'end';
                    }
                },
                yuwen: {
                    character: 'xwjh_yuwenxingcheng',
                    content: ['傅兄!你怎么了？'],
                    next: 1,
                },
                1: {
                    character: 'xwjh_fujinlai',
                    content: ['咳……没事……', '小哥……这两个女子……好生厉害……', '尤其是那声音凄惨的女子……那声音对我的内功干扰极大……', '……', '等等……为什么你没事？'],
                },
                2: {
                    character: 'xwjh_yuwenxingcheng',
                    content: ['……这等邪功墨家典籍里也未曾记述.', '不过我听说,曾经有个正道门派天音阁有类似的功法.', '可是天音阁早在十数年前就举门覆灭了.'],
                },
                3: {
                    character: 'xwjh_fujinlai',
                    content: ['是了,天音阁!方才那女子的名字好像叫什么……落儿？', '多年前我初干这活计时,听闻楚州官府曾经通缉过一位女子,据说正是覆灭天音阁的凶手.她的名字里也有个落字.', '莫非真的是她？'],
                },
                4: {
                    character: 'xwjh_yuwenxingcheng',
                    content: ['浩然山庄既然擒住了这等歹人,为何不向官府领赏,反而囚禁于此呢？']
                },
                5: {
                    character: 'xwjh_fujinlai',
                    content: ['谁知道呢？可能何盟主看不上这点赏钱？也可能朝廷早就忘了这事儿了.', '不过小哥,我有点懂了.'],
                },
                6: {
                    character: 'xwjh_yuwenxingcheng',
                    content: ['懂什么？'],
                },
                7: {
                    character: 'xwjh_fujinlai',
                    content: ['那被通缉女子的功法,据说对未经人事之人无效.', '真想不到小哥仪表堂堂,居然至今都未……', '嘿,嘿嘿……']
                },
                8: {
                    character: 'xwjh_yuwenxingcheng',
                    content: ['……', '傅兄,你若再调笑,我便将你的那些个破事全告诉周姑娘.'],
                },
                9: {
                    character: 'xwjh_fujinlai',
                    content: ['别!别!千万别!小哥,有话好说有话好说!', '欸,小哥你看,这下一层的门也开了!我们去看看？'],
                },
                10: {
                    character: 'xwjh_yuwenxingcheng',
                    content: ['哼.'],
                },
                11: {
                    skip: false,
                    exec() {
                        for (var player of game.players) {
                            player.hp = player.maxHp;
                            player.draw(3);
                            player.xwRestore();
                        }
                    }
                },
                12: {
                    skip: false,
                    exec() {
                        var arr = [game.addPlayer(2, 'xwjh_juqing_gongzhuzhuaya'),
                        game.addPlayer(3, 'xwjh_juqing_gongzhuzhuaya'),
                        game.addPlayer(4, 'xwjh_juqing_yinhu'),
                        game.addPlayer(5, 'xwjh_juqing_maotu'),
                        game.addPlayer(6, 'xwjh_juqing_gongzhuzhuaya'),
                        game.addPlayer(7, 'xwjh_juqing_gongzhuzhuaya')];
                        for (var m of arr) {
                            m.side = 'enemy';
                        }
                        game.asyncDraw(arr, 4);
                    },
                    next(state) {
                        if (state.groupId == 0) {
                            return 'yuwenbk';
                        } else if (state.groupId == 1) {
                            return 'xuedaobk';
                        }
                        return 'end';
                    },
                },
                yuwenbk: {
                    character: 'xwjh_juqing_yinhu',
                    content: ['两位大哥哥,快救我们出去!'],
                    next: 13,
                },
                13: {
                    character: 'xwjh_yuwenxingcheng',
                    content: ['小孩？!'],
                },
                14: {
                    character: 'xwjh_fujinlai',
                    content: ['小哥,不要信她!'],
                },
                15: {
                    character: 'xwjh_juqing_maotu',
                    content: ['呵呵,警惕性蛮高的嘛.', '看来,你们已经见过我那几个不成器的师姐了.'],
                },
                16: {
                    character: 'xwjh_yuwenxingcheng',
                    content: ['(她还没有疯？)', '你们是什么人？'],
                },
                17: {
                    character: 'xwjh_juqing_maotu',
                    content: ['呵呵,沦落到此,是什么人又有什么分别呢？', '你既然能在我师姐的音波功下安然无恙,看来不是个多情的狗男人.', '这样吧!你一剑杀了这小子,我可以考虑,饶你一条命哦.'],
                },
                18: {
                    character: 'xwjh_juqing_yinhu',
                    content: ['不行不行!动了我地支宫的人,只有死!', '不能放过他们!'],
                },
                19: {
                    character: 'xwjh_fujinlai',
                    content: ['地支宫？'],
                },
                20: {
                    character: 'xwjh_juqing_maotu',
                    content: ['你这笨蛋,多嘴什么!', '多说无益,那就开战吧!'],
                    next: 'end',
                },
                xuedao: {
                    character: 'xwjh_yinwuque',
                    content: ['大哥!你怎么了,面色好像有点不对!'],
                    next: 21,
                },
                21: {
                    character: 'xwjh_xuedaoshaozhu',
                    content: ['怪也!那哭的凄惨的娘皮,功法怎么专门跟老子作对？', '还好我运血海魔功,勉强能与之相抗.'],
                },
                22: {
                    character: 'xwjh_yinwuque',
                    content: ['这世间还有专门和大哥作对的功法？'],
                },
                23: {
                    character: 'xwjh_xuedaoshaozhu',
                    content: ['头又开始痛起来了……', '……忘掉的事情……到底是什么……'],
                },
                24: {
                    character: 'xwjh_yinwuque',
                    content: ['大哥？'],
                },
                25: {
                    character: 'xwjh_xuedaoshaozhu',
                    content: ['……没事了', '我们接着下去吧.'],
                    next: 11,
                },
                xuedaobk: {
                    character: 'xwjh_juqing_yinhu',
                    content: ['两位大哥哥,快救我们出去!'],
                    next: 26,
                },
                26: {
                    character: 'xwjh_xuedaoshaozhu',
                    content: ['跟老子耍什么花样!都给我滚出来!'],
                },
                27: {
                    character: 'xwjh_juqing_maotu',
                    content: ['呵呵,警惕性蛮高的嘛.', '……', "不对……你……"],
                },
                28: {
                    character: 'xwjh_xuedaoshaozhu',
                    content: ['别想跑!'],
                },
                29: {
                    character: 'xwjh_juqing_maotu',
                    content: ['少主……怎么会在……这里？'],
                },
                30: {
                    character: 'xwjh_juqing_yintu',
                    content: ['混账男人,放开我师妹!'],
                },
                31: {
                    character: 'xwjh_yinwuque',
                    content: ['大哥,这娘们儿你认识？'],
                },
                32: {
                    character: 'xwjh_xuedaoshaozhu',
                    content: ['血杀令发了数年,你都渺无音信.老子还以为你这小贱人早就死了!', '却原来是躲在这个鬼地方!'],
                },
                33: {
                    character: 'xwjh_juqing_maotu',
                    content: ['呵……呵呵……少主这么多年,还真是一点都没变呢!'],
                },
                34: {
                    character: 'xwjh_xuedaoshaozhu',
                    content: ['唔!', '可恶!挣脱了!', '小贱人,我可不记得当年教过你这等脱身的功夫!'],
                },
                35: {
                    character: 'xwjh_juqing_yinhu',
                    content: ['不要欺负师妹!'],
                    next: 'end',
                },
            },
            'enter_scenes_4': {
                begin: {
                    exec() {
                        game.switchXwBgm('xiongyongantao');
                    },
                    next(state) {
                        if (state.groupId == 0) {
                            return 'yuwen';
                        } else if (state.groupId == 1) {
                            return 'xuedao';
                        }
                        return 'end';
                    }
                },
                yuwen: {
                    character: 'xwjh_yuwenxingcheng',
                    content: ['这这这!方才那小丫头!', '为何给我的感觉如此熟悉!'],
                    next: 1,
                },
                1: {
                    character: 'xwjh_fujinlai',
                    content: ['小哥莫不是忘了群仙宴上的紫阴老魔？'],
                },
                2: {
                    character: 'xwjh_yuwenxingcheng',
                    content: ['是了!是了!', '那小丫头说话的语气便不像孩童,再看那眼中的杀气,也不知造过多少杀孽!', '只不过她比紫阴老魔少了一样东西.'],
                },
                3: {
                    character: 'xwjh_fujinlai',
                    content: ['小哥,少了甚什么东西？'],
                },
                4: {
                    character: 'xwjh_yuwenxingcheng',
                    content: ['少了尸气,这一小丫头只带着杀气,却无紫阴门那股尸气,倒也奇怪.'],
                },
                5: {
                    character: 'xwjh_fujinlai',
                    content: ['还有那粉衣打扮的小娘皮,身上好香!几次闻过都是目眩神迷,使剑只觉得身上软酥酥的.'],
                },
                6: {
                    character: 'xwjh_yuwenxingcheng',
                    content: ['那女子战时似乎言过<少主>二字,莫不是那血刀门的少主？'],
                },
                7: {
                    character: 'xwjh_fujinlai',
                    content: ['这帮淫僧作恶多端,倘若真个是血刀一脉的弟子,如此被关来,不是正好？'],
                },
                8: {
                    character: 'xwjh_yuwenxingcheng',
                    content: ['这话倒是有理.', '说起来也走好久了,这下面最深处究竟是什么呢？'],
                },
                9: {
                    character: 'xwjh_fujinlai',
                    content: ['小爷倒是理解了,盟主将这般大奸大恶之徒关在此处,说不定就是怕这帮家伙危害武林.'],
                },
                10: {
                    character: 'xwjh_yuwenxingcheng',
                    content: ['傅兄弟说的有理.', '如若是大奸大恶之徒,我们贸然闯进来惊动了此地开关,怕是这些歹人逃出,江湖上又将再起波澜.'],
                },
                11: {
                    character: 'xwjh_fujinlai',
                    content: ['江湖早就开始不太平了……', '小哥,那我们还要不要下去？'],
                },
                12: {
                    character: 'xwjh_yuwenxingcheng',
                    execNotSkip: true,
                    content: ['既来之则安之.搞清楚这里的秘密,若真的都是大奸大恶之徒,帮盟主收拾了,也算有个交代.', '走吧.'],
                    exec() {
                        for (var player of game.players) {
                            player.hp = player.maxHp;
                            player.draw(3);
                            player.xwRestore();
                        }
                    }
                },
                13: {
                    character: 'xwjh_fujinlai',
                    content: ['这石门可真是烂到家了,小哥,闪开点儿,看我一剑给它劈开!'],
                },
                14: {
                    character: 'xwjh_fujinlai',
                    content: ['喝啊!'],
                    execNotSkip: true,
                    exec() {
                        game.playXwAudio('xwjh_voc_break');
                    },
                    next: 'enemyAppear',
                },
                'bkcombine': {
                    character: 'xwjh_juqing_xugou',
                    content: ['笔墨……用尽了,之后的文字……只能用某的血来撰写了……咳咳……'],
                    next: 15,
                },
                15: {
                    character: 'xwjh_juqing_haizhu',
                    content: ['姐姐好生糊涂,地支宫,早已不复存在了!你又何苦!'],
                },
                16: {
                    character: 'xwjh_juqing_xugou',
                    content: ['能为宫主大人撰写完毕这本<地支秘史>,已经是玉哮如今唯一能做的了.'],
                },
                17: {
                    character: 'xwjh_juqing_haizhu',
                    content: ['不行!要用就用我的!', '姐姐身体已经虚弱到这般程度了,何苦还要糟践自己的身子!'],
                },
                18: {
                    character: 'xwjh_juqing_xugou',
                    content: ['只不过……偶感风寒而已……咳咳……是不是有人来了？', '远道是客,请恕……招待不周……无有茶水.'],
                    next(state) {
                        if (state.groupId == 0) {
                            return 'yuwenbk';
                        } else if (state.groupId == 1) {
                            return 'xuedaobk';
                        }
                        return 'end';
                    },
                },
                enemyAppear: {
                    skip: false,
                    exec() {
                        var arr = [game.addPlayer(2, 'xwjh_juqing_gongzhuxinfu'),
                        game.addPlayer(3, 'xwjh_juqing_gongzhuermu'),
                        game.addPlayer(4, 'xwjh_juqing_haizhu'),
                        game.addPlayer(5, 'xwjh_juqing_xugou'),
                        game.addPlayer(6, 'xwjh_juqing_gongzhuermu'),
                        game.addPlayer(7, 'xwjh_juqing_gongzhuxinfu')];
                        for (var m of arr) {
                            m.side = 'enemy';
                        }
                        game.asyncDraw(arr, 4);
                    },
                    next: 'bkcombine',
                },
                yuwenbk: {
                    character: 'xwjh_fujinlai',
                    content: ['小哥,这几个小娘皮,看着倒是有礼数,不似之前那几个性子那么烈,嘿嘿.'],
                    next: 19,
                },
                19: {
                    character: 'xwjh_yuwenxingcheng',
                    content: ['诶!不可无礼!'],
                },
                20: {
                    character: 'xwjh_juqing_haizhu',
                    content: ['前面的姐妹？你们!你们都做了什么!'],
                },
                21: {
                    character: 'xwjh_juqing_xugou',
                    content: ['咳……原来是浩然山庄的……伪君子!', '来人!扶……我……起……来!'],
                },
                22: {
                    character: 'xwjh_juqing_haizhu',
                    content: ['玉哮姐姐……你的伤……？'],
                },
                23: {
                    character: 'xwjh_juqing_xugou',
                    content: ['不……碍事!', '贼子接剑!'],
                },
                24: {
                    character: 'xwjh_juqing_haizhu',
                    content: ['哼!既然如此,你们两个小贼,看锤!'],
                },
                25: {
                    character: 'xwjh_yuwenxingcheng',
                    content: ['傅兄,我真想把你的嘴用天蚕丝缝上.'],
                },
                26: {
                    character: 'xwjh_fujinlai',
                    content: ['诶!这怎么能怪小爷我呢!'],
                    next: 'end',
                },
                xuedao: {
                    character: 'xwjh_xuedaoshaozhu',
                    content: ['哈哈,这些婊子,场面话说的倒是好听!'],
                    next: 27,
                },
                27: {
                    character: 'xwjh_yinwuque',
                    content: ['大哥,刚才为何留手啊,这叛徒私自盗取你门中秘籍,不如就此一刀砍死,清理门户!'],
                },
                28: {
                    character: 'xwjh_xuedaoshaozhu',
                    content: ['呵呵呵,老子改主意了!', '这婊子,现在让她死了,岂不解脱？'],
                },
                29: {
                    character: 'xwjh_yinwuque',
                    content: ['那大哥的意思是？'],
                },
                30: {
                    character: 'xwjh_xuedaoshaozhu',
                    content: ['在这种地方,莫说是人了,就是放只耗子,关上三天三夜,怕是早就疯了!', '老子正要她在这里求生不得,求死不能!'],
                },
                31: {
                    character: 'xwjh_yinwuque',
                    content: ['原来如此,可是大哥你为何又将来时的路全部劈开,还留了银两和几壶酒？'],
                },
                32: {
                    character: 'xwjh_xuedaoshaozhu',
                    content: ['哼,看在她伺候过本少主的份上,给她留条生路,她要是能提前醒过来,自己跑出去,那也是她的造化!'],
                },
                33: {
                    character: 'xwjh_yinwuque',
                    content: ['大哥仁义,胜过那浩然山庄的老东西百倍!'],
                },
                34: {
                    character: 'xwjh_xuedaoshaozhu',
                    content: ['少拍马屁,等回了北域,你与三弟的武功还要继续修炼,不可荒废!力战西门老儿的日子可不远了!'],
                },
                35: {
                    character: 'xwjh_yinwuque',
                    content: ['放心吧大哥,届时我们三兄弟,点齐人马;踏平东山,血洗中原武林!'],
                },
                36: {
                    character: 'xwjh_xuedaoshaozhu',
                    content: ['那一天不会太久的,老子向来是有恩必偿,睚眦必报!到时候老子要亲手斩下西门的狗头!', '我们走!还有正事要办.'],
                },
                37: {
                    character: 'xwjh_yinwuque',
                    execNotSkip: true,
                    content: ['大哥,这后边有动静,看我一刀劈开这狗屁石门!', '喝啊!'],
                    exec() {
                        game.playXwAudio('xwjh_voc_break');
                        for (var player of game.players) {
                            if (player.side == 'zhu') {
                                player.hp = player.maxHp;
                                player.draw(3);
                                player.xwRestore();
                            }
                        }
                    },
                    next: 'enemyAppear',
                },
                xuedaobk: {
                    character: 'xwjh_xuedaoshaozhu',
                    content: ['呵呵呵呵,不,你们的身体就是最好的招待!'],
                    next: 38,
                },
                38: {
                    character: 'xwjh_yinwuque',
                    content: ['哈哈,正好抓回去让大哥练功!'],
                },
                39: {
                    character: 'xwjh_juqing_haizhu',
                    content: ['无耻下流!'],
                },
                40: {
                    character: 'xwjh_juqing_xugou',
                    content: ['咳……好浓的血腥味儿……难道是!', '来人!扶……我……起……来!'],
                },
                41: {
                    character: 'xwjh_juqing_haizhu',
                    content: ['玉哮姐姐……你的伤……？'],
                },
                42: {
                    character: 'xwjh_juqing_xugou',
                    content: ['不……不要在意……来者血刀门的人!'],
                },
                43: {
                    character: 'xwjh_juqing_haizhu',
                    content: ['血刀门!', '听夜纤提起过……那里……夜纤当初花了好多年才逃脱出来……', '太惨了……实在是太惨了……'],
                },
                44: {
                    character: 'xwjh_xuedaoshaozhu',
                    content: ['有什么惨的,跟着佛爷我吃香喝辣,岂不美哉？'],
                },
                45: {
                    character: 'xwjh_yinwuque',
                    content: ['一堆废话,婆婆妈妈的,还是杀了干净,哈哈哈哈哈哈哈哈!'],
                    next: 'end'
                }
            },
            'enter_scenes_5': {
                begin: {
                    exec() {
                        game.switchXwBgm('xiongyongantao');
                    },
                    next(state) {
                        if (state.groupId == 0) {
                            return 'yuwen';
                        } else if (state.groupId == 1) {
                            return 'xuedao';
                        }
                        return 'end';
                    }
                },
                yuwen: {
                    character: 1,
                    content: ['呼!险些就折在这里了!'],
                    next: 1,
                },
                1: {
                    character: 2,
                    content: ['还是多亏了小哥你的机关术啊,佩服佩服,佩服的紧!'],
                },
                2: {
                    character: 1,
                    content: ['呼……这世上,经我墨家机关术引爆而不死的,除了紫阴老魔,便是这紫衣姑娘了.'],
                },
                3: {
                    character: 2,
                    content: ['切,那算什么.', '小哥,就算这小娘皮一对花锤使的勇猛,能比得过我的剑快？'],
                },
                4: {
                    character: 1,
                    content: ['有沈兄快吗？'],
                },
                5: {
                    character: 2,
                    content: ['这……小哥,这就是你的不是了', '我可是自学成才,一刀一枪在江湖里杀出来的.', '哪有这小杂种运气好,蒙丐帮的孟老爷子的赏识,一步登天.'],
                },
                6: {
                    character: 1,
                    content: ['废话少说,看我捡到了什么,接着.'],
                    next: 'gaindzgmz'
                },
                gaindzgmz: {
                    exec() {
                        window.xwShowBanner('获得:地支宫密传');
                        game.log('获得:地支宫密传');
                    },
                    next: {
                        0: 7,
                        1: 35,
                    }
                },
                7: {
                    character: 2,
                    content: ['这!这是那病殃殃的小娘皮写的？'],
                },
                8: {
                    character: 1,
                    content: ['这一路之上,捡到了不少残页,貌似均是以前遗落的', '而这位蓝衣姑娘,恰恰因为少了这些残页才想要弥补.'],
                },
                9: {
                    character: 2,
                    content: ['小哥,照你说的,只要我们俩把这些残页补全,这里的一切秘密也都迎刃而解了？'],
                },
                10: {
                    character: 1,
                    content: ['呵,也许吧……', '疯掉的姑娘,残缺的秘传、真是越来越好奇了.'],
                },
                11: {
                    character: 2,
                    content: ['小哥,上一次光顾着耍威风,差点将我自己的剑给震断了,这次你开路好了.'],
                },
                12: {
                    character: 1,
                    content: ['好,瞧我的吧,你先退后些.', '七巧锁……炸!'],
                    execNotSkip: true,
                    exec() {
                        game.playXwAudio('xwjh_voc_baozha2');
                        for (var player of game.players) {
                            player.hp = player.maxHp;
                            player.draw(3);
                            player.xwRestore();
                        }
                    },
                    next: 'enemyAppear',
                },
                enemyAppear: {
                    skip: false,
                    exec() {
                        var arr = [game.addPlayer(2, 'xwjh_juqing_gongzhuzhuaya'),
                        game.addPlayer(3, 'xwjh_juqing_gongzhuxinfu'),
                        game.addPlayer(4, 'xwjh_juqing_zishu'),
                        game.addPlayer(5, 'xwjh_juqing_chouniu'),
                        game.addPlayer(6, 'xwjh_juqing_gongzhuermu'),
                        game.addPlayer(7, 'xwjh_juqing_gongzhuzhuaya')];
                        for (var m of arr) {
                            m.side = 'enemy';
                        }
                        game.asyncDraw(arr, 4);
                    },
                    next: {
                        0: 'yuwenbk',
                        1: 'xuedaobk'
                    }
                },
                yuwenbk: {
                    character: 2,
                    content: ['咳咳……小哥,我后悔了,下次还是我来开门吧.'],
                    next: 13,
                },
                13: {
                    character: 1,
                    content: ['这次可不许再多嘴了!'],
                },
                14: {
                    character: 'xwjh_juqing_zishu',
                    content: ['哦吼,这么大的洞!终于可以出去啦!', '早知有人相救,本姑娘又何苦白白修炼这四年的缩骨神功!', '喂!你们两个是谁？为什么要炸开这里？'],
                },
                15: {
                    character: 'xwjh_juqing_chouniu',
                    content: ['杀……杀……杀!'],
                },
                16: {
                    character: 'xwjh_juqing_zishu',
                    content: ['姐姐先不要动他们～先盘问一番嘛.'],
                },
                17: {
                    character: 1,
                    content: ['两位姑娘,我兄弟二人无意冒犯.', '在下乃墨家子弟,身边这一位乃是……'],
                },
                18: {
                    character: 2,
                    content: ['乃是响当当的魔教克星琮州大侠玉树临风貌比潘安英俊潇洒风流无双一身正气百姓青天傅金来是也!', '哪个敢与我朝铁律王法作对,只要上了榜,小爷我一剑便割了他的项上人头.', '拿去向官老爷领赏啊,哈哈哈哈哈哈哈!', '妈呀,累死小爷了.'],
                },
                19: {
                    character: 1,
                    content: ['……'],
                },
                20: {
                    character: 'xwjh_juqing_zishu',
                    content: ['……'],
                },
                21: {
                    character: 'xwjh_juqing_chouniu',
                    content: ['杀……杀……杀!'],
                },
                22: {
                    character: 1,
                    content: ['……', '好浓的杀气.'],
                },
                23: {
                    character: 'xwjh_juqing_zishu',
                    content: ['嗯!官府的人？', '姐姐!可以动手了!'],
                },
                24: {
                    character: 'xwjh_juqing_chouniu',
                    content: ['杀杀杀!'],
                },
                25: {
                    character: 1,
                    content: ['傅兄……你……', '你这张嘴……你是怎么活到今天的？'],
                },
                26: {
                    character: 2,
                    content: ['小爷怎么知道这两个疯婆娘与官府有过节啊!'],
                },
                27: {
                    character: 1,
                    content: ['二位姑娘,既然不肯听我们解释,我们兄弟二人便得罪了.'],
                },
                28: {
                    character: 'xwjh_juqing_zishu',
                    content: ['哼!朝廷鹰犬!', '一个个吃得脑满肠肥,视我们百姓的性命如蝼蚁!还我乡亲的命来!'],
                    next: 'end',
                },
                xuedao: {
                    character: 1,
                    content: ['好刚烈的娘们儿!'],
                    next: 29,
                },
                29: {
                    character: 2,
                    content: ['是啊,大哥,想不到这蓝衣娘们儿看起来病殃殃的,豆芽儿菜一般,骨头倒是真硬!'],
                },
                30: {
                    character: 1,
                    content: ['若不是我手中神兵锋利,倒是真容易着了她们的道.', '悍不畏死,姐妹情深,妙极,妙极', '如此情谊就连本少主也要敬佩上几分!'],
                },
                31: {
                    character: 2,
                    content: ['大哥以为此二人武功如何？'],
                },
                32: {
                    character: 1,
                    content: ['嗯……不逊色于昔日阎罗殿的无常鬼使.'],
                },
                33: {
                    character: 2,
                    content: ['哈哈哈,倒是小弟多想了', '管它甚么鸟人,一刀砍翻了便是,为哥哥杀出一条血路,才是正理!', '也亏得我阴风谷的独门锻体之术,否则光靠与那紫衣小娘们儿硬碰硬,少说也得再砍七刀才能将其拿下.'],
                },
                34: {
                    character: 1,
                    content: ['无缺,这是从她们胸前翻出来的.'],
                    next: 'gaindzgmz',
                },
                35: {
                    character: 2,
                    content: ['这……大哥,俺不识得这中原文字,还是你念吧.'],
                },
                36: {
                    character: 1,
                    content: ['老子一路杀穿到这里,途中倒是见到过不少残页', '其中支离破碎之处,刚好与这本吻合,想来方才进入之时,这批人便是在补注这本东西了.'],
                },
                37: {
                    character: 2,
                    content: ['大哥,这上面写的究竟是啥？'],
                },
                38: {
                    character: 1,
                    content: ['这上面只说了这地支宫是如何如何兴起,官逼民反.', '如此看来,哼,倒也是性情中人', '只不过其中少了很多关键的部分,也也只能看个一知半解.'],
                },
                39: {
                    character: 2,
                    content: ['大哥……我感觉到了杀气,即使是隔着这层石门', '这种感觉不会错的,似我这般,手上的人命没有一千也有八百,绝对感觉得出来!', '这杀气狂躁无比……不会错的,这石门之后的人物,所杀戮之人不比我少!', '嘿嘿嘿,老子开始期待了!'],
                },
                40: {
                    character: 1,
                    content: ['这石门厚重无比,非神兵利器不能破之', '无缺,你且退后些.', '让老子试试这一掌!'],
                    next: 'enemyAppear',
                    exec() {
                        game.playXwAudio('xwjh_voc_baozha2');
                        for (var player of game.players) {
                            player.hp = player.maxHp;
                            player.draw(3);
                            player.xwRestore();
                        }
                    },
                    execNotSkip: true,
                },
                xuedaobk: {
                    character: 2,
                    content: ['恭喜大哥!你这一招<催心裂脏>原来已经修至圆满,倒是瞒的我们好苦!'],
                    next: 41,
                },
                41: {
                    character: 1,
                    content: ['抓了这么多的蝼蚁,用他们的性命练功,一步登天何其容易,哈哈,不足挂齿尔!'],
                },
                42: {
                    character: 'xwjh_juqing_zishu',
                    content: ['哦吼,这么大的洞!终于可以出去啦!', '早知有人相救,本姑娘又何苦白白修炼这四年的缩骨神功!', '喂!你们两个是谁？为什么要砸开这里？'],
                },
                43: {
                    character: 'xwjh_juqing_chouniu',
                    content: ['杀……杀……杀!'],
                },
                44: {
                    character: 'xwjh_juqing_zishu',
                    content: ['姐姐先不要动他们～先盘问一番嘛.'],
                },
                45: {
                    character: 2,
                    content: ['好强,这身披重甲的女子,杀气不逊于我!大哥,这可是场硬仗!'],
                },
                46: {
                    character: 1,
                    content: ['阿弥陀佛,善哉善哉!', '小僧不知深浅,冲撞了两位女施主.还请二位女施主不要见怪.'],
                },
                45: {
                    character: 2,
                    content: ['喂喂喂,你们算什么东西？也敢盘问我大哥!嫌命长了是吗？'],
                },
                46: {
                    character: 1,
                    content: ['二位姑娘要走,可这江湖之大,走又能走到哪里去呢？', '不如乖乖的做贫僧的鼎炉,不然的话……哼哼哼.'],
                },
                47: {
                    character: 'xwjh_juqing_zishu',
                    content: ['登徒子,不然怎样？'],
                },
                48: {
                    character: 1,
                    content: ['不然要你们人头落地!祭我的血刀!'],
                },
                49: {
                    character: 'xwjh_juqing_zishu',
                    content: ['血刀门……血刀门重出江湖了？', '姐姐小心,这是血刀门的淫僧!', '其所修炼功法专克制我等女子,不要大意,倘若此战败,我二人可就真的生不如死了!'],
                },
                50: {
                    character: 'xwjh_juqing_chouniu',
                    content: ['血刀门……重出江湖？', '没听说过,喂,那个穿黑衣服的,杀气那么重,敢与我杀上一番吗？'],
                },
                51: {
                    character: 2,
                    content: ['你的杀气始终弱我三分,此生怕是再难精进了,不过爷爷我可是很乐意送你一程的!'],
                },
                52: {
                    character: 1,
                    content: ['呵呵,既然二位女施主已经知道了,看来此事便不能用寻常手段解决了.'],
                },
                53: {
                    character: 'xwjh_juqing_zishu',
                    content: ['先抓得到我再说吧!', '还有,小心点,本姑娘～看上你的刀了!'],
                    next: "end",
                }
            },
            'enter_scenes_6': {
                begin: {
                    exec() {
                        game.switchXwBgm('xiongyongantao');
                    },
                    next(state) {
                        if (state.groupId == 0) {
                            return 'yuwen';
                        } else if (state.groupId == 1) {
                            return 'xuedao';
                        }
                        return 'end';
                    }
                },
                yuwen: {
                    character: 1,
                    content: ['这杀气外露的姑娘练的居然铁牯教的蛮血牯牛功!', '此等功法早该绝于世间了!怎么会……出现在这里!'],
                    next: 1,
                },
                1: {
                    character: 2,
                    content: ['小哥,这一路走过来,什么样的小娘皮没见识过？我都见怪不怪了.'],
                },
                2: {
                    character: 1,
                    content: ['……还不是你乱说话,害得我们连番苦战.'],
                },
                3: {
                    character: 2,
                    content: ['小哥呀小哥,不让我讲,岂不是要闷击杀我了!', '这鸟地方黑漆漆的,也不知道什么走到时候是个头.', '不让我讲话,呐,脖子就在这,小哥你砍吧.'],
                },
                4: {
                    character: 1,
                    content: ['那我就不客气了.'],
                    exec() {
                        window.xwShowBanner('宇文星城手摁住了剑');
                        game.log('宇文星城手摁住了剑');
                    },
                },
                5: {
                    character: 2,
                    content: ['别别别,小哥有话好说!', '你看这一路之上没有功劳也有苦劳,剑都要砍钝了,你就行行好放我一马吧!',
                        '你是不知道,刚才那浑身恶臭的小娘皮,一身缩骨功,还真像只耗子,怎么砍都砍不中.',
                        '啊,这一战打完,小爷的腿都要累折了,反正都累成这样了,真是怕了你了!不讲就不讲!'
                    ],
                },
                6: {
                    character: 1,
                    content: ['嗯,这还差不多～', '我观此处有个机关,只要按下便可开启下一层的密道,倘若再遇到生人,只由我讲便是,你就好生歇息,切不可再招惹是非.'],
                    next: 'bk',
                    execNotSkip: true,
                    exec() {
                        game.playXwAudio('xwjh_voc_opendoor');
                        for (var player of game.players) {
                            if (player.side == 'zhu') {
                                player.hp = player.maxHp;
                                player.draw(3);
                                player.xwRestore();
                            }
                        }
                    }
                },
                bk: {
                    skip: false,
                    exec() {
                        var arr = [game.addPlayer(2, 'xwjh_juqing_gongzhuermu'),
                        game.addPlayer(3, 'xwjh_juqing_gongzhuxinfu'),
                        game.addPlayer(4, 'xwjh_juqing_sishe'),
                        game.addPlayer(5, 'xwjh_juqing_chenlong'),
                        game.addPlayer(6, 'xwjh_juqing_gongzhuxinfu'),
                        game.addPlayer(7, 'xwjh_juqing_gongzhuermu')];
                        for (var m of arr) {
                            m.side = 'enemy';
                        }
                        game.asyncDraw(arr, 4);
                    },
                    next: {
                        0: 'yuwenbk',
                        1: 'xuedaobk'
                    }
                },
                yuwenbk: {
                    next: 7,
                },
                7: {
                    character: 2,
                    content: ['这密道怎么忽冷忽热的,好奇怪啊.', '小哥,这下边到底是什么地方？'],
                },
                8: {
                    character: 1,
                    content: ['似乎是一处修炼之地,嘿!傅兄小心脚下!'],
                },
                9: {
                    character: 2,
                    content: ['我的个亲娘,这地方也太破了!'],
                },
                10: {
                    character: 'xwjh_juqing_chenlong',
                    content: ['来者何人!'],
                },
                11: {
                    character: 'xwjh_juqing_sishe',
                    content: ['来者何人!'],
                },
                12: {
                    character: 2,
                    content: ['……'],
                },
                13: {
                    character: 1,
                    content: ['二位姑娘,在下乃是墨家子弟宇文星城,只因一时酒醉,与结义兄弟误入此地,本不想侵扰二位姑娘清修,只是此等地方太过蹊跷,故而……'],
                },
                14: {
                    character: 'xwjh_juqing_chenlong',
                    content: ['这人说话文绉绉的,便好似当年那些个虚伪至极的富家公子.'],
                },
                15: {
                    character: 'xwjh_juqing_sishe',
                    content: ['嘶～姐姐,似这等人口中没一句真话,倒是旁边的那小贼眼睛滴溜溜的转,似乎有什么话要说.'],
                },
                16: {
                    character: 'xwjh_juqing_chenlong',
                    content: ['旁边的小子,你来说说,为何擅闯此地!说不出来便杀了你们!'],
                },
                17: {
                    character: 'xwjh_juqing_sishe',
                    content: ['还有其他几个姐妹,说!你们将我等师妹怎么了？'],
                },
                18: {
                    character: 2,
                    content: ['……'],
                },
                19: {
                    character: 1,
                    content: ['二位姑娘,我等并未下杀手,只因你们师妹拦路,不得已出手相伤,在下已备好疗伤之药,倘若二位姑娘仍是动怒,在下先向姑娘陪个不是.'],
                },
                20: {
                    character: 2,
                    content: ['……'],
                },
                21: {
                    character: 'xwjh_juqing_sishe',
                    content: ['嘶～好个油嘴滑舌的墨家小子!', '旁边那个小子,你兄弟说的都是真的吗？'],
                },
                22: {
                    character: 2,
                    content: ['……'],
                },
                23: {
                    character: 'xwjh_juqing_chenlong',
                    content: ['我姐妹一而再再而三的问你,你却只一副目中无人之态,默不作声,地支宫虽已没落,却也不是你这一个江湖小辈可以折辱的!'],
                },
                24: {
                    character: 'xwjh_juqing_sishe',
                    content: ['嘶～我等奉命护卫宫主大人,本不欲在此地动武,你既如此无理,也休怪我们姐妹俩剑下无情了!那个墨家小子,闪开!'],
                },
                25: {
                    character: 'xwjh_juqing_chenlong',
                    content: ['我们只要这目中无人的小子的人头!此事与你无关!'],
                },
                26: {
                    character: 2,
                    content: ['……诶？不对!'],
                },
                27: {
                    character: 1,
                    content: ['不对什么啊!傅兄弟,小心啊!'],
                },
                28: {
                    character: 2,
                    content: ['小哥!你害我!'],
                },
                29: {
                    character: 'xwjh_juqing_chenlong',
                    content: ['受死吧!'],
                },
                30: {
                    character: 'xwjh_juqing_sishe',
                    content: ['受死吧!'],
                    next: 'end',
                },
                xuedao: {
                    character: 2,
                    content: ['哈哈哈,不堪一击!不堪一击!'],
                    next: 31,
                },
                31: {
                    character: 1,
                    content: ['哼,想不到竟然是失传多年的蛮血牯牛功,难怪像个疯子!'],
                },
                32: {
                    character: 2,
                    content: ['大哥!这功法……'],
                },
                33: {
                    character: 1,
                    content: ['你要是嫌命长,随便修炼!', '此功法,若只得其诀不得其意,便会像这丫头似的,走火入魔,最后变成一具只知杀戮的行尸走肉!'],
                },
                34: {
                    character: 2,
                    content: ['只知杀戮,却不能喝酒纵马,快意江湖？', '那可当真是不快活!哼,不练也罢!'],
                },
                35: {
                    character: 1,
                    content: ['却也不能小看了这帮小婊子,你看那矮个子的小婊子,一身恶臭,武功也不高,却愣是凭着天赋修出了缩骨神功,倘若换成你我,怕是再修炼十年,也达不到这般境界!'],
                },
                36: {
                    character: 2,
                    content: ['大哥!任这些小婊子天赋再高,到了你的手上,还不是被采补的命,大哥技高一筹,小弟佩服!'],
                },
                37: {
                    character: 1,
                    content: ['哼,话虽中听,只是无缺,你可是个直性子,怎么如今说话也如下边的人这般圆滑.', '你我兄弟大可不必如此!莫非是有事相求？'],
                },
                38: {
                    character: 2,
                    content: ['这一路之上全仗大哥破敌,杀出一条血路……', '小弟并无寸功,既然大哥都这么说了,那小弟就不客气了!'],
                },
                39: {
                    character: 1,
                    content: ['但说无妨!'],
                },
                40: {
                    character: 2,
                    content: ['小弟能感知到,此处下方,有两股气息,其中一股气息,冰寒彻骨,定是有人修炼了什么极阴之功,此功正配我阴风谷的锻体之术.', '还望大哥能够成全小弟,夺此功法!'],
                },
                41: {
                    character: 1,
                    content: ['此等小事何足挂齿,放心便是.', '按下此处机关,想必就能通往下一层了,无缺,且跟紧了!'],
                },
                42: {
                    execNotSkip: true,
                    exec() {
                        game.playXwAudio('xwjh_voc_opendoor');
                        for (var player of game.players) {
                            if (player.side == 'zhu') {
                                player.hp = player.maxHp;
                                player.draw(3);
                                player.xwRestore();
                            }
                        }
                    },
                    character: 2,
                    content: ['好!'],
                    next: 'bk',
                },
                xuedaobk: {
                    character: 'xwjh_juqing_chenlong',
                    content: ['来者何人!'],
                    next: 43,
                },
                43: {
                    character: 'xwjh_juqing_sishe',
                    content: ['来者何人!'],
                },
                44: {
                    character: 2,
                    content: ['呵呵呵,小贱人们,快把那修炼极阴之功的秘籍交出来,不然阴大爷将你们斩成肉酱!'],
                },
                45: {
                    character: 1,
                    content: ['哟,这两位小娘子,真是俊俏的紧呢!'],
                },
                46: {
                    character: 'xwjh_juqing_chenlong',
                    content: ['呸!不要脸的登徒子,你若再往前进一步,本姑娘手中的剑便不客气了!'],
                },
                47: {
                    character: 'xwjh_juqing_sishe',
                    content: ['嘶～好浓的血腥味,还有其他姐妹的气息!姐姐小心,切不可让他们打扰宫主清修!'],
                },
                48: {
                    character: 1,
                    content: ['凭几个婊子废物也想拦住老子？你们也不例外,识相的还可免受皮肉之苦,倘若不降,就送你们见阎王!'],
                },
                49: {
                    character: 'xwjh_juqing_chenlong',
                    content: ['单凭两个人就能闯到这里？!', '不过也到此为止了!从此刻开始……你们休想再前进一步!'],
                },
                50: {
                    character: 'xwjh_juqing_sishe',
                    content: ['嘶～想夺功法,只怕你们有命来没命取!'],
                },
                51: {
                    character: 1,
                    content: ['两位小娘子没听过血刀门的大名吗!'],
                },
                52: {
                    character: 'xwjh_juqing_sishe',
                    content: ['嘶～我们的命只属于宫主大人!', '就算是血刀门的四代掌门在此,也要先踏过我们的尸体才能过去!'],
                },
                53: {
                    character: 1,
                    content: ['如此看来,你们那个什么狗屁宫主也不过是个虚伪至极的婊子.', '为了什么狗屁修炼,竟连手下姐妹的死活也不顾了？'],
                },
                54: {
                    character: 'xwjh_juqing_sishe',
                    content: ['嘶～混账!竟敢羞辱宫主大人!'],
                },
                55: {
                    character: 2,
                    content: ['大哥说的在理!倘若你们宫主当真在意你们死活,为何不敢现身？反倒做起了缩头王八？'],
                },
                56: {
                    character: 'xwjh_juqing_chenlong',
                    content: ['你们住口!'],
                },
                57: {
                    character: 2,
                    content: ['我再给你们一次机会,交出功法,你们姐妹再侍奉老子十年,老子便放过你们上面的十位姐妹.',
                        '否则以她们的伤势,恐怕过不了几天,必死无疑!'],
                },
                58: {
                    character: 'xwjh_juqing_chenlong',
                    content: ['宫主安危重若泰山,我们姐妹便是粉身碎骨又如何？不必再言,要战便战吧!'],
                },
                59: {
                    character: 'xwjh_juqing_sishe',
                    content: ['嘶～血刀门的邪功专克我等女子,姐姐务必小心!'],
                },
                60: {
                    character: 1,
                    content: ['已经晚了!看刀!'],
                },
                61: {
                    character: 2,
                    content: ['哼!看来这次也不必手下留情了!'],
                },
                62: {
                    character: 'xwjh_juqing_chenlong',
                    content: ['受死吧!'],
                },
                63: {
                    character: 'xwjh_juqing_sishe',
                    content: ['受死吧!'],
                    next: 'end',
                },
            },
            'enter_scenes_7': {
                begin: {
                    exec() {
                        game.switchXwBgm('xiongyongantao');
                    },
                    next(state) {
                        if (state.groupId == 0) {
                            return 'yuwen';
                        } else if (state.groupId == 1) {
                            return 'xuedao';
                        }
                        return 'end';
                    }
                },
                yuwen: {
                    character: 2,
                    content: ['嘿,打昏了不就安静了,真是吵闹.', '哈哈,小哥,这是方才那红衣小姑娘袖中掉出来的,瞧瞧是本什么东西？'],
                    next: 1,
                },
                1: {
                    character: 1,
                    content: ['又是一本书籍……嗯,赤阳剑诀？'],
                },
                2: {
                    character: 2,
                    content: ['哇,好大的石头,差一点就要把英俊潇洒的傅大侠砸成英俊潇洒的傅大侠肉饼了.'],
                },
                3: {
                    character: 1,
                    content: ['可恶,方才打斗太过激烈……这一层地牢早已经承受不住.'],
                },
                4: {
                    character: 2,
                    content: ['不好,这里马上就要坍塌了,小哥快走!'],
                },
                5: {
                    character: 1,
                    content: ['傅兄弟速速助我一臂之力,将这两位姑娘以内力推入上一层!', '这两位姑娘也不过是听命行事,若是因为打斗引起的坍塌,平白丢了性命,倒是我们的过失了!'],
                },
                6: {
                    character: 2,
                    content: ['小哥,这样一来,强行损耗内力送她们二人,咱俩可就上不去了,到时候我们可就没有退路了!想清楚了？'],
                },
                7: {
                    character: 1,
                    content: ['嗯!动手吧!'],
                },
                8: {
                    character: 2,
                    content: ['好!只是不知这下方还有什么魑魅魍魉,走一步看一步,一路拼杀下去,没准也能找到一条出口,也只能这样了! '],
                },
                9: {
                    character: 1,
                    content: ['喝啊!'],
                },
                10: {
                    character: 2,
                    content: ['姑娘们,是死是活全凭你们造化了!', '小哥快跳!'],
                },
                11: {
                    character: 1,
                    content: ['咳咳咳……那两位姑娘终于安全了!只差一步,我们就要被埋在下面了!'],
                },
                12: {
                    character: 2,
                    content: ['如今退路已断,出口又不知道在什么鸟地方,苦也苦也!'],
                    next: 'bk',
                },
                bk: {
                    exec() {
                        for (var player of game.players) {
                            player.hp = player.maxHp;
                            player.draw(3);
                            player.xwRestore();
                        }
                    },
                    next: 'enemyAppear',
                    skip: false,
                },
                enemyAppear: {
                    skip: false,
                    exec() {
                        var arr = [game.addPlayer(2, 'xwjh_juqing_gongzhuzhuaya'),
                        game.addPlayer(3, 'xwjh_juqing_gongzhuxinfu'),
                        game.addPlayer(4, 'xwjh_juqing_yanjianqing'),
                        game.addPlayer(5, 'xwjh_juqing_gongzhuermu'),
                        game.addPlayer(6, 'xwjh_juqing_gongzhuzhuaya')];
                        for (var m of arr) {
                            m.side = 'enemy';
                        }
                        game.asyncDraw(arr, 4);
                        _status.xwPoxiuRound = _status.xwRoundCount;
                    },
                    next: {
                        0: 'yuwenbk',
                        1: 'xuedaobk'
                    }
                },
                yuwenbk: {
                    character: 'xwjh_juqing_yanjianqing',
                    content: ['本宫不是吩咐过,剑法大成之前,任何人都不许闯入吗？', '嗯？男人的声音？'],
                    next: 13,
                },
                13: {
                    character: 2,
                    content: ['小哥……你有没有感受到？'],
                },
                14: {
                    character: 1,
                    content: ['好凌厉的剑风!想必这便是那帮姑娘们口中的宫主了. '],
                },
                15: {
                    character: 'xwjh_juqing_yanjianqing',
                    content: ['又是何老儿？又是他派来的人!简直是没完没了!真好! ',
                        '还从未有人连破我十二堂主,以至于本宫都差点忘了,男人长什么样子……呵呵……本事当真不小!',
                        '不过既然来了,那就陪那些被何老儿派过来的糊涂鬼们一起做伴吧!', '本宫,先让你们三招!'],
                },
                16: {
                    character: 2,
                    content: ['哼,好大的口气!小哥我们上!'],
                    next: 'end',
                },
                xuedao: {
                    character: 1,
                    content: ['嘿嘿,早点妥协不就好了吗,凭这些微末伎俩,也敢挡本少主的路!'],
                    next: 17,
                },
                17: {
                    character: 2,
                    content: ['嗯？玄阴寒诀……有意思!习练此等功法,定可助我功力大增!'],
                },
                18: {
                    character: 1,
                    content: ['碍事的人已经打倒了,功法也拿到了,无缺,你该回去了!'],
                },
                19: {
                    character: 2,
                    content: ['大哥莫非是赶我走？'],
                },
                20: {
                    character: 1,
                    content: ['前路凶险,倘若真有个三长两短的,也自然有该我这个做大哥的开路!怎会让自家兄弟置于险地？'],
                },
                21: {
                    character: 2,
                    content: ['哼!看我阴风刀法!'],
                },
                22: {
                    character: 1,
                    content: ['无缺!你为何要毁了此处! '],
                },
                23: {
                    character: 2,
                    content: ['我们兄弟三人当初结拜同生共死,如今我已经把后路给断了,就算要出去,大哥你也只能带着我一直往下走.', '哈哈,来不及解释了,这里马上就要坍塌了,下方应该就是那两个小婊子口中的什么宫主大人了!', '小弟先为大哥开路!我先下去了!'],
                },
                24: {
                    character: 1,
                    content: ['唉……无缺性情如此猖狂傲慢,将来怕是会吃大亏啊,算了,先下去再说!'],
                    next: 'bk',
                },
                xuedaobk: {
                    character: 1,
                    content: ['怎么会有打斗的痕迹？人呢？ ', '嗯？阴老二？你捂着胸口干什么？'],
                    next: 25,
                },
                25: {
                    character: 2,
                    content: ['咳……方才先跳下来的时候,本想探探路,不料被前面这个小婊子暗中偷袭!'],
                },
                26: {
                    character: 1,
                    content: ['妈的!你是什么人？竟敢伤我义弟!没听说过血刀门的名号吗!就不怕老子把你五马分尸,千刀万剐!'],
                },
                27: {
                    character: 'xwjh_juqing_yanjianqing',
                    content: ['原来是血刀门的六代掌教,呵呵呵,少主大人.'],
                },
                28: {
                    character: 1,
                    content: ['竟然认识我!既如此……也不多废话,该明白自己是什么下场了吧？'],
                },
                29: {
                    character: 'xwjh_juqing_yanjianqing',
                    content: ['本宫当年为了创建地支宫,你可知受过多少苦难与冷眼!', '看着门派一天一天的壮大起来,无数的江湖姐妹也终于有了一个温暖的家,不必再受那些个臭男人的侮辱!', '可是这一切……这一切都被那个畜生何老儿给毁了!'],
                },
                30: {
                    character: 1,
                    content: ['莫非你手上有那畜生的……不为人知的秘密么!说下去!', '只要你把那伪君子的秘密交给我,我保你和那些个姐妹不死!'],
                },
                31: {
                    character: 'xwjh_juqing_yanjianqing',
                    content: ['少主大人的话,我自然肯相信,只不过妾身虽一介女流,若是只因为少主大人的一番话……就全交了底;少主是不是太小看妾身了？'],
                },
                32: {
                    character: 2,
                    content: ['哼!我大哥给你面子,你可别不识抬举! '],
                },
                33: {
                    character: 'xwjh_juqing_yanjianqing',
                    content: ['还从未有人连破我十二堂主,你血刀门的功法专克我等女流,我心中自是不服,谁说女子不如男!',
                        '今日便要替诸位姐妹讨个公道!倘若你们胜了,我便亲口告诉你们这个秘密!',
                        '倘若你们败了,就永远留在这里吧!', '本宫……要出招了!'],
                },
                34: {
                    character: 1,
                    content: ['你这女人,当真是螳臂挡车,不自量力!'],
                    next: 'end',
                }
            },
        },
        scenes: {
            0: {
                name: 'wumaweiyang',
                enemys: ['xwjh_juqing_gongzhuzhuaya', 'xwjh_juqing_gongzhuxinfu', 'xwjh_juqing_wuma', 'xwjh_juqing_weiyang', 'xwjh_juqing_gongzhuermu', 'xwjh_juqing_gongzhuzhuaya'],
                boss: ['xwjh_juqing_wuma', 'xwjh_juqing_weiyang'],
                enter() {
                    game.xwPlayDramaChats('enter_scenes_1');
                },
                next: 1,
            },
            1: {
                name: 'shenhouyouji',
                boss: ['xwjh_juqing_youji', 'xwjh_juqing_shenhou'],
                enemys: ['xwjh_juqing_gongzhuzhuaya', 'xwjh_juqing_gongzhuxinfu', 'xwjh_juqing_youji', 'xwjh_juqing_shenhou', 'xwjh_juqing_gongzhuermu', 'xwjh_juqing_gongzhuzhuaya'],
                enter() {
                    game.xwPlayDramaChats('enter_scenes_2');
                },
                next: 2,
            },
            2: {
                name: 'yinhumaotu',
                boss: ['xwjh_juqing_yinhu', 'xwjh_juqing_maotu'],
                enemys: ['xwjh_juqing_gongzhuzhuaya', 'xwjh_juqing_yinhu', 'xwjh_juqing_maotu'],
                enter() {
                    game.xwPlayDramaChats('enter_scenes_3');
                },
                next: 3,
            },
            3: {
                name: 'xugouhaizhu',
                boss: ['xwjh_juqing_haizhu', 'xwjh_juqing_xugou'],
                enemys: ['xwjh_juqing_gongzhuzhuaya', 'xwjh_juqing_yinhu', 'xwjh_juqing_maotu'],
                enter() {
                    game.xwPlayDramaChats('enter_scenes_4');
                },
                next: 4,
            },
            4: {
                name: 'zishuchouniu',
                boss: ['xwjh_juqing_zishu', 'xwjh_juqing_chouniu'],
                enemys: ['xwjh_juqing_gongzhuzhuaya', 'xwjh_juqing_gongzhuxinfu', 'xwjh_juqing_gongzhuermu', 'xwjh_juqing_zishu', 'xwjh_juqing_chouniu'],
                enter() {
                    game.xwPlayDramaChats('enter_scenes_5');
                },
                next: 5,
            },
            5: {
                name: 'sishechenlong',
                boss: ['xwjh_juqing_chenlong', 'xwjh_juqing_sishe'],
                enemys: ['xwjh_juqing_gongzhuermu', 'xwjh_juqing_gongzhuxinfu', 'xwjh_juqing_gongzhuermu', 'xwjh_juqing_zishu', 'xwjh_juqing_chouniu'],
                enter() {
                    game.xwPlayDramaChats('enter_scenes_6');
                },
                next: 6,
            },
            6: {
                name: 'yanjianqing',
                boss: ['xwjh_juqing_yanjianqing'],
                enemys: ['xwjh_juqing_gongzhuermu'],
                enter() {
                    game.xwPlayDramaChats('enter_scenes_7');
                },
                end() {
                    game.over(true);
                },
            },
        },
    };
    drama.onload();
});