import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '虚界',
        content(config, pack) {
            //S武将
            lib.rank.rarity.rare.addArray(['dz_jdxb_sb_sunquan']);
            //SS武将
            lib.rank.rarity.epic.addArray(['xu_lingtong', 'xu_wanglang', 'xu_dongzhuo', 'xu_xuyou', 'xu_caoang', 'xu_yuanshen', 'xu_quyi', 'xu_liangxing', 'xu_zhuran', 'xu_dongyun']);
            //SSS武将
            lib.rank.rarity.legend.addArray(['xu_szhoutai', 'xu_slvbu', 'xu_sunce', 'xu_szhangjiao', 'xu_guanning']);
            //名词解释
            lib.arenaReady.push(() => {
                lib.translate.xu_fuqi_info = '锁定技,你使用牌无次数限制且不可响应;你可以将一张黑色' + get.TL_InformX('即时牌', '<即时牌>指的是基本牌和普通锦囊牌') + '当做【杀】使用';
                lib.translate.xu_jiang_info = '当你使用目标唯一的红色' + get.TL_InformX('即时牌', '<即时牌>指的是基本牌和普通锦囊牌') + '指定目标/成为目标后,你可以摸一张牌.';
                lib.translate.xu_baonue_info = '出牌阶段限一次,你令所有其他角色选择一项:①交给你一张手牌并令你增加一点体力上限;②本回合被赋予' + get.TL_InformX('即死', '<即死>指的是进入濒死状态时直接死亡不进行结算') + '效果并弃置一张牌<br>若选择①的角色少于选择②的角色,你跳过本回合结束阶段,反之你发动一次【崩坏】';
                lib.translate.xu_cunmu_info = '每回合限一次,若你的体力值/手牌数是全场最小,你可以将一张牌当做' + get.TL_InformX('即使牌', '<即时牌>指的是基本牌和普通锦囊牌') + '使用/打出';
            });
            get.TL_InformX = function (str1, str2) {
                var temp = '',
                    numx = 1;
                while (numx != 10000) {
                    temp += get.rand(1, 9) / numx;
                    numx = numx * 10;
                }
                return "<a id='" + temp + "' style='color:unset' href=\"javascript:get.TL_skillTips('" + str2 + "','" + temp + '\');">' + str1 + '※</a>';
            };
            //死亡语音
            game.X_playDieAudio = function (playerID) {
                if (lib.config.background_speak) {
                    game.playAudio('../extension/虚界/die', playerID + '.mp3');
                }
            };
            lib.skill._xdieaudio = {
                trigger: {
                    player: 'dieBegin',
                },
                _priority: 2,
                forced: true,
                content() {
                    game.X_playDieAudio(trigger.player.name);
                },
            };
            //武将前缀隐藏
            for (var i in lib.character) {
                if (lib.config['extension_虚界_xujie_wjname'] && ['℘'].includes(lib.translate[i][0])) lib.translate[i] = lib.translate[i].substring(1, lib.translate[i].length);
            }
        },
        precontent() {
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '虚界',
                    connect: true,
                    character: {
                        xu_caoang: ['male', 'wei', 4, ['xu_kangkai'], []],
                        // "xu_wangshuang":["male","wei","4/5",["xu_zhuilie","xu_feilie","xu_liedan"],[]],
                        xu_yuanshen: ['male', 'shen', 4, ['xu_luanji', 'xu_yuanli', 'xu_xueyi'], []],
                        xu_wanglang: ['male', 'wei', 4, ['xu_gushe', 'xu_quanxiang', 'xu_jici'], []],
                        xu_szhoutai: ['male', 'shen', 2, ['xu_bumie', 'xu_chongsheng'], []],
                        xu_slvbu: ['male', 'shen', 4, ['xu_shenwu', 'xu_wumou', 'xu_shenji', 'xu_jieao'], []],
                        xu_lingtong: ['male', 'wu', 4, ['xu_xuanfeng'], []],
                        dz_jdxb_sb_sunquan: ['male', 'wu', 4, ['dz_jdxb_zhiheng', 'dz_jdxb_tongye'], []],
                        xu_sunce: ['male', 'wu', 4, ['xu_baiban', 'xu_jiang'], []],
                        xu_dongzhuo: ['male', 'qun', 6, ['xu_jiuchi', 'xu_baonue', 'xu_benghuai'], []],
                        xu_xuyou: ['male', 'qun', 3, ['xu_chenglue', 'xu_shicai', 'xu_cunmu'], []],
                        xu_quyi: ['male', 'qun', 5, ['xu_fuqi', 'xu_xiandeng'], []],
                        xu_szhangjiao: ['male', 'shen', 3, ['xu_tiandao', 'xu_tianjie'], []],
                        xu_guanning: ['male', 'qun', 5, ['xu_dunshi'], []],
                        xu_liangxing: ['male', 'qun', 4, ['xu_zhuixi', 'xu_lulve'], []],
                        xu_zhuran: ['male', 'wu', 4, ['xu_danshou'], []],
                        xu_kami: ['male', 'shen', 1, ['xu_jxqd'], ['boss', 'bossallowed']],
                        xu_xiahouyuan: ['male', 'wei', 4, ['xu_shensu', 'xu_shebian'], []],
                        xu_dongyun: ['male', 'shu', 4, ['xu_bingzheng', 'xu_sheyan'], []],
                        xu_guanyu: ['male', 'shu', 4, ['xu_wusheng'], []],
                        xu_szhangliao: ['male', 'shen', 4, ['xu_duorui', 'xu_zhiti'], []],
                    },
                    characterIntro: {
                        xu_wangshuang: '王双,三国时期曹魏将领.蜀汉建兴六年(228年)冬,诸葛亮出散关,攻陈仓,后粮尽而退.王双率领骑兵追击蜀军,但在与蜀军的交战中被击败,王双也被蜀军所斩.在<三国演义>中,王双,字子全,是陇西郡狄道县人,身长九尺,面黑睛黄,熊腰虎背.使六十斤大刀,骑千里征宛马,开两石铁胎弓,暗藏三个流星锤,百发百中,有万夫不当之勇,是曹真的部将.在诸葛亮第二次北伐时,由曹真向魏明帝举荐后,担任先锋出战,魏明帝还御赐他锦袍和金铠,任命为虎威将军.',
                        xu_yuanshen: '袁绍,字本初,汉族,汝南汝阳人,出身名门望族,自曾祖父起四代有五人位居三公,自己也居三公之上,其家族也因此有<四世三公>之称.曾于初平元年被推举为反董卓联合军的盟主,联军瓦解后,在汉末群雄割据的过程中,袁绍先占据冀州,又先后夺青、并二州,并于建安四年击败了割据幽州的军阀公孙瓒,势力达到顶点;但在建安五年的官渡之战中败于曹操.在平定冀州叛乱之后,于建安七年病死.',
                        dz_jdxb_sb_sunquan: "作者江东小白,代码作者鬼神易<br><span style='color: red'>已经作者授权",
                    },
                    characterSort: {
                        //分栏
                        虚界: {
                            shenhuazailin: ['xu_yuanshen', 'xu_szhoutai', 'xu_slvbu', 'xu_szhangjiao'],
                            weiwubaye: ['xu_wangshuang', 'xu_wanglang', 'xu_caoang'],
                            hujujiangdong: ['dz_jdxb_sb_sunquan', 'xu_lingtong', 'xu_sunce', 'xu_zhuran'],
                            qunxiongzhulu: ['xu_dongzhuo', 'xu_xuyou', 'xu_quyi', 'xu_guanning', 'xu_liangxing'],
                        },
                    },
                    characterTitle: {
                        //称号
                        xu_wanglang: '凤鹛',
                        xu_wangshuang: '遏北的悍锋',
                        xu_yuanshen: '高贵的名门',
                        xu_szhoutai: '不灭神躯',
                        xu_slvbu: '监兵噬魅',
                        dz_jdxb_sb_sunquan: '年轻的贤君',
                        xu_lingtong: '豪情烈胆',
                        xu_sunce: '江东小王八',
                        xu_xuyou: '朝奏暮楚',
                        xu_quyi: '竞驹伏骊',
                        xu_szhangjiao: '符祝太平',
                    },
                    translate: {
                        shenhuazailin: "<span style='color: yellow'>神话再临",
                        weiwubaye: "<span style='color: blue'>魏武霸业",
                        hujujiangdong: "<span style='color: green'>虎踞江东",
                        qunxiongzhulu: '群雄逐鹿',
                        xu_caoang: '℘曹昂',
                        xu_wangshuang: '℘王双',
                        xu_yuanshen: '℘袁神',
                        xu_wanglang: '℘王朗',
                        xu_szhoutai: '℘神周泰',
                        xu_slvbu: '℘神吕布',
                        dz_jdxb_sb_sunquan: '℘谋孙权',
                        xu_lingtong: '℘凌统',
                        xu_sunce: '℘孙策',
                        xu_dongzhuo: '℘董卓',
                        xu_xuyou: '℘许攸',
                        xu_quyi: '℘麴义',
                        xu_szhangjiao: '℘神张角',
                        xu_guanning: '℘管宁',
                        xu_liangxing: '℘梁兴',
                        xu_zhuran: '℘朱然',
                        xu_kami: '伊什塔尔',
                        xu_xiahouyuan: '℘夏侯渊',
                        xu_dongyun: '℘董允',
                        xu_guanyu: '℘关羽',
                        xu_szhangliao: '℘神张辽',
                        xu_kangkai: '慷忾',
                        xu_kangkai_info: '锁定技,当一名角色成为一张伤害牌的目标后,你可摸一张牌并可将一张牌(或对其使用一张牌)交给其,其可以使用此牌(若此时你的手牌颜色均相同,你回复一点体力)',
                        xu_feilie: '飞猎',
                        xu_feilie_info: '①结束阶段,你可以视为使用一张任意属性的【杀】.若此【杀】造成伤害,你增加一点体力上限(至多增加至8点;若增加至8,你回复一点体力)<br>②你使用【杀】指定的目标数+x(x为你已损体力)',
                        xu_feilie1: '飞猎',
                        xu_zhuilie: '追猎',
                        xu_zhuilie_info: '锁定技,你使用【杀】无距离限制;当你使用【杀】指定目标后,此【杀】不计入使用次数限制且你判定.若判定结果为装备牌,此【杀】的伤害基数改为X(X为其体力值)',
                        xu_luanji: '乱击',
                        xu_luanji_info: '<br>①出牌阶段,你可以将两张花色相同的牌当做【万箭齐发】使用;你因此使用的万箭齐发被响应时,你令该角色不可响应下一张【万箭齐发】<br>②每有角色受到【万箭齐发】的伤害后,你摸一张牌',
                        xu_luanji_respond: '乱击',
                        xu_luanji_add: '乱击',
                        xu_xueyi: '血裔',
                        xu_xueyi_info: '限定技,当你处于濒死状态时,你可以将手牌摸至y张并视为使用一张【万箭齐发】,你将体力回复至y点(y为你的体力上限)',
                        xu_yuanli: '袁力',
                        xu_yuanli_info: '出牌阶段限一次,你可以从牌堆和弃牌堆中随机获得一种颜色的牌.',
                        xu_liedan: '猎胆',
                        xu_liedan_info: '你可以将一张【杀】当做【闪】、【闪】当做【杀】、【酒】当做【桃】、【桃】当做【酒】使用或打出.',
                        xu_gushe: '鼓舌',
                        xu_gushe_info: '①出牌阶段,你可以与任意名角色拼点,没赢的角色选择一项:1.弃置一张牌;2.令你摸一张牌.<br>②若你没赢,你获得一枚<饶>(当你的<饶>数为7时,你移去所有<饶>并有一定概率失去所有体力<br>③当你的手牌数达到7的倍数时,你弃置所有手牌',
                        xu_quanxiang: '劝降',
                        xu_quanxiang_info: '当你拼点赢时,你可令一名其他角色失去一点体力',
                        xu_jici: '激词',
                        xu_jici_info: '锁定技,当你展示拼点牌后获得此次拼点中原点数最大的拼点牌',
                        xu_jici: '激词',
                        xu_bumie: '不灭',
                        xu_bumie_info: '锁定技,<br>①当你进入濒死状态时,你摸一张牌并展示:若此牌不为❤️牌,你将体力回复至上限并复原武将牌,你对一名其他角色造成一点伤害<br>②当你横置时,取消之.你不能成为延时类锦囊的目标.你不能成为其他角色拼点的目标<br>③当一名角色受到伤害后,若你的手牌数小于13,你摸一张牌<br>④你的手牌上限+3',
                        xu_bumie_say: '不灭',
                        xu_bumie_2: '神躯',
                        xu_bumie_1: '不灭',
                        xu_bumie_3: '不灭',
                        xu_bumie1: '不灭',
                        xu_bumie1_info: '锁定技,你造成的伤害+1',
                        xu_chongsheng: '重生',
                        xu_chongsheng_info: '限定技,当你处于濒死状态时你复原武将牌并回复体力至上限(x为你的体力上限).',
                        xu_shenwu: '神武',
                        xu_shenwu_info: '锁定技,你使用不大于/小于5的【杀】无次数限制/无距离限制;你使用点数为5的【杀】不可被响应且无视防具',
                        xu_wumou: '无谋',
                        xu_wumou_info: '锁定技,你的锦囊牌均视为点数为5的【杀】',
                        xu_shenji: '神戟',
                        xu_shenji_info: '锁定技, 一名其他角色受到伤害后,若其:没有<戟>,你将其一张牌置于其武将牌上,称为<戟>;有<戟>且<戟>数量等于2,你获得所有<戟>并对其造成等同与其体力值的神圣伤害',
                        xu_shenji1: '神戟',
                        xu_jieao: '桀骜',
                        xu_jieao_info: '锁定技,当你受到伤害时,你终止当前所有结算并失去一点体力,你将手牌摸至5张并执行一个出牌阶段(你因此失去体力后可以获得一名其他角色的<戟>)',
                        dz_jdxb_zhiheng: '制衡',
                        dz_jdxb_zhiheng_info: '出牌阶段限一次,你可弃置任意张牌,若此时你手牌颜色均相同,且为黑色/红色,你可将手牌弃置至每种花色各一张并摸等同你此时手牌花色种数数量张牌于此阶段/结束阶段,你摸等量张牌,否则,你摸等量张牌',
                        dz_jdxb_tongye: '统业',
                        dz_jdxb_tongye_info: '当你发动〖制衡〗后,若你区域的牌包含:1,三种类型,你摸一张牌;2,四种花色,你可弃置两张相同花色的牌,视为使用一张不计入次数的基本牌',
                        xu_xuanfeng: '旋风',
                        xu_xuanfeng_info: '锁定技,<br>①当你不因使用而失去牌后,你弃置至多x名其他角色1张牌,获得一枚<旋风>并可令一名角色使用中央区的一张牌;当你依次法选择的角色数等于你的体力值,你可以移动场上的一张牌<br>②当<旋风>数等于你的体力值时,你移去所有<旋风>并对至多x名其他角色各造成一点伤害(x为你的体力值)',
                        xu_xuanfeng1: '旋风',
                        xu_baiban: '白板',
                        xu_baiban_info: '游戏开始时,你令所有其他角色所有技能失效且这些角色减少体力上限至3点(若体力上限不小于100该角色死亡)',
                        xu_baiban1: '白板',
                        xu_jiang: '激昂',
                        xu_jiang_info: '当你使用目标唯一的红色即时牌指定目标/成为目标后,你可以摸一张牌.',
                        xu_jiuchi: '酒池',
                        xu_jiuchi_info: '锁定技,你使用【酒】无次数限制;你可将黑色牌当做【酒】使用且你使用【酒】后回复一点体力',
                        xu_jiuchi1: '酒池',
                        xu_jiuchi2: '酒池',
                        xu_baonue: '暴虐',
                        xu_baonue_info: '出牌阶段限一次,你令所有其他角色选择一项:①交给你一张手牌并令你增加一点体力上限;②本回合被赋予即死效果并弃置一张牌<br>若选择①的角色少于选择②的角色,你跳过本回合结束阶段,反之你发动一次【崩坏】',
                        xu_baonue1: '暴虐',
                        xu_benghuai: '崩坏',
                        xu_benghuai_info: '锁定技,结束阶段,若你体力不为全场最小,你减少2点体力上限或失去2点体力',
                        xu_chenglue: '成略',
                        xu_chenglue_info: '转换技,锁定技,摸牌阶段你改为观看,阴:牌堆底(【恃才】效果颠倒).阳:牌堆顶.的三张牌并获得其中两张牌,直到本回合结束,你使用与此牌花色相同的牌无距离和次数限制且你从另一端摸牌直至下次此发动技能.',
                        xu_chenglue1: '成略',
                        xu_shicai: '恃才',
                        xu_shicai_info: '当你使用牌时,若此牌与你本回合使用的牌花色均不同,你可以将此牌置于牌堆顶,摸一张牌.',
                        xu_shicai1: '恃才',
                        xu_cunmu: '寸目',
                        xu_cunmu_info: '每回合限一次,若你的体力值/手牌数是全场最小,你可以将一张牌当做即使牌使用/打出',
                        xu_fuqi: '伏骑',
                        xu_fuqi_info: '锁定技,你使用牌无次数限制且不可响应;你可以将一张黑色即时牌当做【杀】使用',
                        xu_fuqi1: '伏骑',
                        xu_xiandeng: '先登',
                        xu_xiandeng_info: '锁定技,一名其他角色的回合开始,若你座次小于其,你与其交换座位.若如此做,你摸x张牌并将此回合改为你的回合且其所有技能失效直到下个回合结束,否则你失去一点体力(x为其座次)',
                        xu_tiandao: '天道',
                        xu_tiandao_info: '锁定技,<br>①当你受到伤害/失去体力/减少上限时,你展示牌堆顶一张牌和一名其他角色的一张手牌,若两张牌颜色相同,你获得前一张牌,该角色弃置后一张牌,你防止之,否则你摸x张牌(x为后一张牌名字数)<br>②当你造成/受到伤害后,你获得一枚<天><br>③其他角色的出牌阶段开始时,你可以移去一枚<天>,若如此做,你观看其手牌<br>④一名角色进入或脱离横置状态时,你令其本回合非锁定技失效',
                        xu_tiandao1: '天道',
                        xu_tiandao2: '天道',
                        xu_tiandao2_info: '你可以移去一枚<天>并观看其手牌',
                        xu_tiandao3: '天道',
                        xu_tianjie: '天劫',
                        xu_tianjie_info: '轮次开始时,若你的<天>不小于6,你可以横置所有未横置的其他角色并对其中一名角色造成x点伤害,你移去所有<天>(x为你拥有<天>的数量,向下取整)并废除你的判定区',
                        xu_dunshi: '遁世',
                        xu_dunshi_info: '<br>①回合技,当你需要使用或打出【杀】/【闪】/【桃】/【酒】时,你可以视为使用/打出之<br>②游戏开始时,你获得等同于场上势力数的<席>;一名角色进入濒死状态时,你移去1枚<席>并展示三张武将牌从中选择一个技能获得之',
                        xu_zhuixi: '追袭',
                        xu_zhuixi_info: '锁定技,你使用的第奇数张伤害牌不计入次数且额外结算一次',
                        xu_lulve: '掳掠',
                        xu_lulve_info: '❶出牌阶段限一次,你可翻面并令一名敌方角色选择一项:<br>①交给你所有牌并令你获得一张伤害牌<br>②令你夺取其一点体力上限并令你翻回正面<br>③本回合不能使用/打出牌并令你回复一点体力<br>❷一名其他角色武将牌的状态发生变化时,你可展示其手牌并获得其中一张牌,可以使用此牌(无限制)',
                        xu_lulve1: '掳掠',
                        xu_lulve_show_info: '你可展示其手牌并获得其中一张牌,可以使用此牌(无限制)',
                        xu_danshou: '胆守',
                        xu_danshou_info: '锁定技,<br>①当你成为一张基本牌/锦囊牌的目标后,你可以摸x张牌(x为你本回合成为此种牌目标次数且至多为三)若此时你的手牌数为最值你调整至均值(向上取整),若此牌目标数大于一,你令使用者代替你成为目标.<br>②当你一次性获得至少两张牌后,你本回合手牌上限加一,若y大于3改为对至多y名角色造成一点伤害(y为你本回合【胆守②】发动次数)',
                        xu_jxqd: '金星驱动',
                        xu_jxqd_info: '锁定技,<br>①当一名其他角色发动技能后,你展示五张未登场的武将牌,可获得其中一个武将的所有技能并将体力与上限调整至与其相同<br>②你的手牌上限无限;每回合限一次,当你进入濒死状态时,你将体力回复至上限,你摸一张牌且你的牌不可被弃置',
                        xu_shensu: '神速',
                        xu_shensu_info: '你的次要阶段开始时,你可以用一个主要阶段替换之并视为使用一张无距离限制的【杀】,若此阶段为:<br>判定:此【杀】不可响应且不计入次数,你将随机一张延时锦囊牌置入判定区并翻面<br>摸牌:此【杀】可多指定一个目标<br>出牌:此【杀】伤害基数加一,你翻至背面<br>弃牌:使用此【杀】指定目标后,可弃置其区域内一张牌且此【杀】不计入次数',
                        xu_shebian: '设变',
                        xu_shebian_info: '当一名角色翻面/横置后,你可摸一张牌或令其回复一点体力',
                        xu_sheyan: '舍宴',
                        xu_sheyan_info: '每回合限一次,一名角色不因技能使用即使牌后,你可为此牌增加/减少一个目标;因技能失去牌后,你可视为使用一张目标为x的【五谷丰登】(x为此次失去牌数)',
                        xu_bingzheng: '秉正',
                        xu_bingzheng_info: '每回合限一次,当一名其他角色发动非锁定技后,你可以令一名友方角色获得之直至你的回合结束(若你的体力为最值,你可以尝试发动武将牌上的一个技能)',
                        xu_wusheng: '武圣',
                        xu_wusheng_info: '<br>①每轮限一次,当你使用一张伤害牌时/成为伤害牌目标后,你随机获得一个关于伤害的技能直至下次发动此技能<br>②你可将一张红色手牌当【杀】使用且你使用的转化【杀】无次数限制',
                        xu_duorui: '夺锐',
                        xu_duorui_info: '当你对其他角色造成伤害后,你可令其一个技能失效并获得之发动',
                        xu_zhiti: '止啼',
                        xu_zhiti_info: '锁定技,已受伤的其他角色使用牌时弃置一张牌',
                    },
                    skill: {
                        xu_kangkai: {
                            audio: 'kaikang',
                            trigger: {
                                global: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.tag(event.card, 'damage') > 0;
                            },
                            logTarget: 'target',
                            content() {
                                'step 0';
                                player.draw();
                                if (trigger.target != player) {
                                    player
                                        .chooseControl('给牌', '不给', function (event, player) {
                                            if (player.countCards('h') == 0) return '不给';
                                            return '给牌';
                                        })
                                        .set('prompt', '是否交给' + get.translation(trigger.target) + '一张牌');
                                }
                                ('step 1');
                                if (result.control == '给牌') {
                                    player.chooseCard('he', true, '交给' + get.translation(trigger.target) + '一张牌').set('ai', function (card) { });
                                } else {
                                    player.chooseToUse('慷忾:你可以对' + get.translation(trigger.target) + '使用一张牌', trigger.target);
                                    event.finish();
                                }
                                ('step 2');
                                player.give(result.cards, trigger.target, 'give');
                                event.card = result.cards[0];
                                ('step 3');
                                trigger.target.chooseUseTarget(card);
                                ('step 4');
                                var cards = player.getCards('h');
                                var color = get.color(cards, player);
                                for (var i = 1; i < cards.length; i++) {
                                    if (get.color(cards[i], player) != color) return;
                                }
                                player.recover();
                            },
                        },
                        xu_feilie: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            content() {
                                'step 0';
                                player.chooseTarget('请选择一名其他角色作为【杀】的目标', lib.filter.notMe);
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                var list = [];
                                for (var i = 0; i < lib.inpile.length; i++) {
                                    var name = lib.inpile[i];
                                    if (name == 'sha') {
                                        list.push(['基本', '', 'sha']);
                                        for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
                                    }
                                }
                                player
                                    .chooseButton(['请选择一个属性', [list, 'vcard'], true])
                                    .set('filterButton', function (button) {
                                        return true;
                                    })
                                    .set('ai', function (button) {
                                        var effect = player.getUseValue(button.link[2]);
                                        if (effect > 0) return effect;
                                        return 0;
                                    });
                                ('step 3');
                                if (result.bool) {
                                    var name = result.links[0][2];
                                } else {
                                    event.finish();
                                }
                                ('step 4');
                                player.useCard(false, { name: result.links[0][2], nature: result.links[0][3] }, event.target);
                                player.addTempSkill('xu_feilie1');
                            },
                            ai: {
                                order: 10,
                            },
                        },
                        xu_feilie1: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                if (player.maxHp < 8) {
                                    player.gainMaxHp();
                                } else player.recover();
                            },
                            mod: {
                                selectTarget(card, player, range) {
                                    if (card.name == 'sha' && Array.isArray(range) && range[1] != -1) range[1] += player.maxHp - player.hp;
                                },
                            },
                        },
                        xu_zhuilie: {
                            mod: {
                                targetInRange(card) {
                                    if (card.name == 'sha') return true;
                                },
                            },
                            audio: 'ext:虚界/audio:2',
                            trigger: {
                                player: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                return event.card.name == 'sha';
                            },
                            forced: true,
                            logTarget: 'target',
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    var type = get.type(card);
                                    return ['equip'].includes(type) ? 6 : -6;
                                    switch (type) {
                                        case 'equip':
                                            return 4;
                                        case 'trick':
                                            return -4;
                                        default:
                                            return 0;
                                    }
                                }).judge2 = function (result) {
                                    return result.bool;
                                };
                                ('step 1');
                                if (trigger.parent.addCount !== false) {
                                    trigger.parent.addCount = false;
                                    var stat = player.getStat();
                                    if (stat && stat.card && stat.card.sha) stat.card.sha--;
                                }
                                if (result.bool === true) {
                                    var map = trigger.customArgs;
                                    var id = trigger.target.playerid;
                                    if (!map[id]) map[id] = {};
                                    if (typeof map[id].extraDamage != 'number') map[id].extraDamage = 0;
                                    map[id].extraDamage += trigger.target.hp - 1;
                                }
                            },
                        },
                        xu_luanji: {
                            audio: 'luanji',
                            group: ['xu_luanji_respond', 'xu_luanji_damage'],
                            enable: 'phaseUse',
                            position: 'hs',
                            viewAs: { name: 'wanjian' },
                            filterCard(card, player) {
                                if (ui.selected.cards.length) {
                                    return card.suit == ui.selected.cards[0].suit;
                                }
                                var cards = player.getCards('hs');
                                for (var i = 0; i < cards.length; i++) {
                                    if (card != cards[i]) {
                                        if (card.suit == cards[i].suit) return true;
                                    }
                                }
                                return false;
                            },
                            selectCard: 2,
                            complexCard: true,
                            check(card) {
                                var player = _status.event.player;
                                var targets = game.filterPlayer(function (current) {
                                    return player.canUse('wanjian', current);
                                });
                                var num = 0;
                                for (var i = 0; i < targets.length; i++) {
                                    var eff = get.sgn(get.effect(targets[i], { name: 'wanjian' }, player, player));
                                    if (targets[i].hp == 1) {
                                        eff *= 1.5;
                                    }
                                    num += eff;
                                }
                                if (!player.needsToDiscard(-1)) {
                                    if (targets.length >= 7) {
                                        if (num < 2) return 0;
                                    } else if (targets.length >= 5) {
                                        if (num < 1.5) return 0;
                                    }
                                }
                                return 6 - get.value(card);
                            },
                            ai: {
                                basic: {
                                    order: 8.5,
                                },
                            },
                        },
                        /*xu_luanji_remove:{
                            trigger:{global:'useCard2'},
                            direct:true,
                            filter:function(event,player){
                                return event.card.name=='wanjian'&&event.targets.length>0;
                            },
                            line:false,
                            content:function(){
                                'step 0'
                                player.chooseTarget(get.prompt('xu_luanji'),'为'+get.translation(trigger.card)+'减少任意个目标',[1,Infinity],function(card,player,target){
                                    return _status.event.targets.includes(target)
                                }).set('targets',trigger.targets).set('ai',function(target){
                                    var player=_status.event.player;
                                    return -get.effect(target,_status.event.getTrigger().card,player,player)
                                });
                                'step 1'
                                if(result.bool){		
                        event.targets=result.targets.slice(0).sortBySeat();
                    }
                    else{
                        event.finish();
                    }
                    'step 2'
                            if(event.targets&&event.targets.length){
                      event.targets.remove(event.targets.shift());
                        event.redo();
                            }
                            },
                        },*/
                        xu_luanji_respond: {
                            trigger: {
                                global: 'respond',
                            },
                            forced: true,
                            marktext: '乱击',
                            intro: {
                                name: '乱击',
                                content: '不可响应下一张【万箭齐发】',
                            },
                            filter(event, player) {
                                return event.getParent(2).skill == 'xu_luanji';
                            },
                            content() {
                                trigger.player.addSkill('xu_luanji_add');
                                if (trigger.player.countMark('xu_luanji_respond') < 1) {
                                    trigger.player.addMark('xu_luanji_respond');
                                }
                            },
                        },
                        xu_luanji_damage: {
                            trigger: { global: 'damageSource' },
                            logTarget: 'source',
                            forced: true,
                            filter(event, player) {
                                var target = event.source;
                                return target && target == _status.currentPhase && target.isAlive() && event.card && event.card.name == 'wanjian' && event.parent.type == 'card';
                            },
                            content() {
                                player.draw();
                            },
                        },
                        xu_luanji_add: {
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'wanjian';
                            },
                            content() {
                                trigger.directHit.add(player);
                                player.removeMark('xu_luanji_respond');
                                player.removeSkill('xu_luanji_add');
                            },
                        },
                        xu_xueyi: {
                            audio: 'xueyi',
                            enable: 'chooseToUse',
                            mark: true,
                            limited: true,
                            init(player) {
                                player.storage.xu_xueyi = false;
                            },
                            filter(event, player) {
                                if (player.storage.xu_xueyi) return false;
                                if (event.type == 'dying') {
                                    if (player != event.dying) return false;
                                    return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.storage.xu_xueyi = true;
                                player.awakenSkill('xu_xueyi');
                                ('step 1');
                                player.turnOver(false);
                                ('step 2');
                                player.drawTo(player.maxHp);
                                ('step 3');
                                player.chooseUseTarget({ name: 'wanjian' }, false);
                                ('step 4');
                                var num = player.maxHp;
                                player.hp = num;
                            },
                            ai: {
                                order: 1,
                                skillTagFilter(player, arg, target) {
                                    if (player != target || player.storage.xu_xueyi) return false;
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
                                    if (!target.storage.xu_xueyi) return 0.6;
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        xu_yuanli: {
                            audio: 'ext:虚界/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                var cards = [];
                                while (cards.length < 1) {
                                    var card = get.cardPile(function (card) {
                                        return (get.color(card, false) == 'black' || get.color(card, false) == 'red') && !cards.includes(card);
                                    });
                                    if (!card) break;
                                    else cards.push(card);
                                }
                                if (cards.length) player.gain(cards, 'gain2');
                            },
                            ai: {
                                order: 10,
                            },
                        },
                        xu_gushe: {
                            group: ['xu_gushe_gain'],
                            audio: 'gushe',
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return player.canCompare(target);
                            },
                            selectTarget: [1, Infinity],
                            multitarget: true,
                            multiline: true,
                            content() {
                                player.chooseToCompare(targets).callback = lib.skill.xu_gushe.callback;
                            },
                            intro: {
                                name: '饶舌',
                                content: 'mark',
                            },
                            callback() {
                                'step 0';
                                if (event.num1 <= event.num2) {
                                    target.chat(lib.skill.gushe.chat[player.countMark('xu_gushe')]);
                                    player.addMark('xu_gushe', 1);
                                }
                                ('step 1');
                                if (event.num1 >= event.num2) {
                                    target
                                        .chooseToDiscard('he', '弃置一张牌,或令' + get.translation(player) + '摸一张牌')
                                        .set('ai', function (card) {
                                            if (_status.event.goon) return 6 - get.value(card);
                                            return 0;
                                        })
                                        .set('goon', get.attitude(target, player) < 0);
                                } else event.goto(3);
                                ('step 2');
                                if (!result.bool) {
                                    player.draw();
                                }
                                ('step 3');
                                if (event.num1 <= event.num2) {
                                    player.chooseToDiscard('he', '弃置一张牌,或摸一张牌').set('ai', function () {
                                        return -1;
                                    });
                                } else event.finish();
                                ('step 4');
                                if (!result.bool) player.draw();
                                ('step 5');
                                if (player.countMark('xu_gushe') == 7) {
                                    player.removeMark('xu_gushe', 7);
                                    player.loseHp(player.hp);
                                }
                            },
                            ai: {
                                order: 7,
                                result: {
                                    target(player, target) {
                                        var num = ui.selected.targets.length + 1;
                                        if (num + player.countMark('xu_gushe') <= 6) return -1;
                                        var hs = player.getCards('h');
                                        for (var i = 0; i < hs.length; i++) {
                                            if (get.value(hs[i]) <= 6) {
                                                switch (hs[i].number) {
                                                    case 13:
                                                        return -1;
                                                    case 12:
                                                        if (player.countMark('xu_gushe') + num <= 8) return -1;
                                                        break;
                                                    case 11:
                                                        if (player.countMark('xu_gushe') + num <= 7) return -1;
                                                        break;
                                                    default:
                                                        if (hs[i].number > 5 && player.countMark('xu_gushe') + num <= 6) return -1;
                                                }
                                            }
                                        }
                                        return 0;
                                    },
                                },
                            },
                            marktext: '饶',
                            subSkill: {
                                gain: {
                                    trigger: {
                                        player: 'gainAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countCards('h') % 7 == 0;
                                    },
                                    content() {
                                        player.chooseToDiscard(true, player.countCards('h'));
                                    },
                                },
                            },
                        },
                        xu_jici: {
                            audio: 'ext:虚界/audio:2',
                            trigger: {
                                player: 'compare',
                                target: 'compare',
                            },
                            forced: true,
                            content() {
                                var cards = [];
                                if (trigger.num1 > trigger.num2) cards.push(trigger.card1);
                                if (trigger.num1 < trigger.num2) cards.push(trigger.card2);
                                cards = cards.filterInD();
                                if (cards.length) player.gain(cards, 'gain2');
                            },
                        },
                        xu_quanxiang: {
                            trigger: {
                                player: 'compare',
                                target: 'compare',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (trigger.num1 > trigger.num2) {
                                    player.chooseTarget(get.prompt('xu_quanxiang'), '令一名其他角色失去一点体力', lib.filter.notMe).set('ai', function (target) {
                                        return target != player;
                                    });
                                }
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].loseHp();
                                }
                            },
                        },
                        xu_bumie: {
                            group: ['xu_bumie_1', 'xu_bumie_2', 'xu_bumie_3', 'xu_bumie_say', 'xu_bumie1_1', 'xu_bumie1_2', 'xu_bumie1_3'],
                            audio: 'buqu',
                            trigger: {
                                player: 'dying',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.draw('visible');
                                ('step 1');
                                if (get.color(result[0]) == 'black' || get.color(result[1]) == 'black' || result[0].suit == 'diamond' || result[1].suit == 'diamond') {
                                    player.hp = player.maxHp;
                                    player.turnOver(false);
                                    player.chooseTarget(get.prompt2('xu_bumie'), lib.filter.notMe).set('ai', function (target) {
                                        return target != player;
                                    });
                                }
                                ('step 2');
                                if (result.bool) {
                                    result.targets[0].damage('nocard');
                                } else event.finish();
                            },
                        },
                        xu_bumie_1: {
                            ai: {
                                effect: {
                                    target(card) {
                                        if (card.name == 'tiesuo') return 'zeroplayertarget';
                                    },
                                },
                            },
                        },
                        xu_bumie1_1: {
                            audio: 'buqu',
                            trigger: {
                                player: 'linkBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.isLinked();
                            },
                            content() {
                                trigger.cancel();
                            },
                        },
                        xu_bumie1_2: {
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (get.type(card) == 'delay') return false;
                                },
                            },
                        },
                        xu_bumie1_3: {
                            ai: {
                                noCompareTarget: true,
                            },
                        },
                        xu_bumie_2: {
                            trigger: {
                                global: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                if (player.countCards('h') < 13) {
                                    player.draw();
                                }
                            },
                        },
                        xu_bumie_3: {
                            mod: {
                                maxHandcard(player, num) {
                                    return 2 + num + 1;
                                },
                            },
                            content() { },
                        },
                        xu_bumie_say: {
                            trigger: {
                                player: 'dyingAfter',
                            },
                            filter(event, player) {
                                if (player.hasSkill('xu_bumie')) return true;
                                return false;
                            },
                            forced: true,
                            content() {
                                player.say(['哈哈!!我是不灭的'].randomGet());
                            },
                        },
                        xu_chongsheng: {
                            enable: 'chooseToUse',
                            mark: true,
                            limited: true,
                            init(player) {
                                player.storage.xu_chongsheng = false;
                            },
                            filter(event, player) {
                                if (player.storage.xu_xueyi) return false;
                                if (event.type == 'dying') {
                                    if (player != event.dying) return false;
                                    return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.storage.xu_chongsheng = true;
                                player.awakenSkill('xu_chongsheng');
                                ('step 1');
                                player.turnOver(false);
                                ('step 2');
                                if (player.hp < player.maxHp) {
                                    player.hp = player.maxHp;
                                }
                            },
                            ai: {
                                order: 1,
                                skillTagFilter(player, arg, target) {
                                    if (player != target || player.storage.xu_chongsheng) return false;
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
                                    if (!target.storage.xu_chongsheng) return 0.6;
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        xu_shenwu: {
                            audio: 'ext:虚界/audio:2',
                            group: 'xu_shenwu2',
                            mod: {
                                targetInRange(card, player) {
                                    if (card.name == 'sha' && card.number > 5) return true;
                                    if (card.name == 'sha' && card.number == 5) return true;
                                },
                                cardUsable(card, player) {
                                    if (card.name == 'sha' && card.number < 5) return Infinity;
                                    if (card.name == 'sha' && card.number == 5) return Infinity;
                                },
                            },
                            trigger: {
                                player: 'useCard1',
                            },
                            forced: true,
                            firstDo: true,
                            content() { },
                        },
                        xu_shenwu2: {
                            trigger: {
                                player: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                var num = event.card.number;
                                if (num != 5) return false;
                                if (event.card.name != 'sha') return false;
                                return true;
                            },
                            content() {
                                trigger.parent.directHit.push(trigger.target);
                                trigger.target.addSkill('qinggang2');
                                player.when('useCardAfter').then(() => game.players.forEach((Q) => Q.removeSkill('qinggang2')));
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (arg && arg.name == 'sha') return true;
                                    return false;
                                },
                            },
                        },
                        xu_wumou: {
                            mod: {
                                cardname(card, player) {
                                    if (['trick', 'delay'].includes(lib.card[card.name].type)) return 'sha';
                                },
                                cardnumber(card, player) {
                                    if (['trick', 'delay'].includes(lib.card[card.name].type)) return 5;
                                },
                            },
                            content() { },
                        },
                        xu_shenji: {
                            trigger: {
                                global: 'damageEnd',
                            },
                            audio: 'ext:虚界/audio:2',
                            charlotte: true,
                            forced: true,
                            logTarget: 'target',
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                'step 0';
                                if (trigger.player.countCards('he') == 0) event.finish();
                                else player.choosePlayerCard(trigger.player, 'he'), true, '选择一张牌置于' + get.translation(trigger.player) + '的武将牌上作为「戟」';
                                ('step 1');
                                trigger.player.addToExpansion(result.cards, trigger.player, 'give').gaintag.add('xu_shenji');
                                ('step 2');
                                if (trigger.player.getExpansions('xu_shenji').length == 2) {
                                    player.gain(trigger.player.getExpansions('xu_shenji'), 'gain2', 'fromStorage');
                                    trigger.player.damage('notrigger', trigger.player.hp);
                                } else event.finish();
                            },
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            marktext: '戟',
                        },
                        xu_jieao: {
                            audio: 'ext:虚界/audio:2',
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            check(event, player) {
                                return get.attitude(player, event.player) > 3;
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                                player.loseHp();
                                ('step 1');
                                var evt = _status.event.getParent('phase');
                                if (evt && evt.name) {
                                    evt.finish();
                                }
                                player.drawTo(5);
                                var next = player.phaseUse();
                                event.next.remove(next);
                                trigger.next.push(next);
                            },
                        },
                        dz_jdxb_zhiheng: {
                            enable: 'phaseUse',
                            audio: 'ext:虚界/audio:2',
                            usable: 1,
                            position: 'he',
                            filterCard(card, player, event) {
                                event = event || _status.event;
                                if (typeof event != 'string') event = event.parent.name;
                                var mod = game.checkMod(card, player, event, 'unchanged', 'cardDiscardable', player);
                                if (mod != 'unchanged') return mod;
                                return true;
                            },
                            discard: false,
                            lose: false,
                            delay: false,
                            selectCard: [1, Infinity],
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
                                player.discard(cards);
                                ('step 1');
                                var cardxs = player.getCards('h');
                                if (['red', 'black'].includes(get.color(cardxs, player))) {
                                    var num = 0,
                                        suits = [];
                                    event.colorx = get.color(cardxs, player);
                                    player.getCards('h', (card) => suits.add(card.suit));
                                    num = suits.length;
                                    if (player.countCards('h') == num) {
                                        player.chooseBool('制衡:您是否要于相应时机触发摸牌效果？');
                                    } else {
                                        player
                                            .chooseCard('制衡:你可以保留每种花色的牌各一张并于相应时机摸牌', 'h', num, function (card, player) {
                                                return !ui.selected.cards.filter(function (i) {
                                                    return i.suit == card.suit;
                                                }).length;
                                            })
                                            .set('complexCard', true);
                                    }
                                } else event.goto(3);
                                ('step 2');
                                if (result.bool) {
                                    if (result.cards?.length) {
                                        var cardsx = player.getCards('h', function (card) {
                                            return lib.filter.cardDiscardable(card, player, 'dz_jdxb_zhiheng') && !result.cards.includes(card);
                                        });
                                        if (cardsx.length) player.discard(cardsx);
                                    }
                                    var suits = [];
                                    player.getCards('h', (card) => suits.add(card.suit));
                                    if (event.colorx == 'black') {
                                        player.draw(suits.length);
                                    } else {
                                        player.storage.dz_jdxb_zhiheng_red = suits.length;
                                        player.addTempSkill('dz_jdxb_zhiheng_' + event.colorx);
                                    }
                                }
                                ('step 3');
                                player.draw(cards.length);
                            },
                            subSkill: {
                                red: {
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    silent: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return player.countCards('h');
                                    },
                                    content() {
                                        player.draw(player.storage.dz_jdxb_zhiheng_red);
                                        player.removeSkill(event.name);
                                    },
                                    forced: true,
                                    popup: false,
                                },
                                black: {
                                    silent: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return player.countCards('h');
                                    },
                                    content() {
                                        var suits = [];
                                        player.getCards('h', (card) => suits.add(card.suit));
                                        player.draw(suits.length);
                                        player.removeSkill(event.name);
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                            ai: {
                                order: 5,
                                result: {
                                    player: 1,
                                },
                                threaten: 1.5,
                            },
                        },
                        dz_jdxb_tongye: {
                            trigger: {
                                player: 'dz_jdxb_zhihengEnd',
                            },
                            filter(event, player) {
                                var suits = [],
                                    types = [];
                                player.getCards('hej', function (card) {
                                    suits.add(card.suit);
                                    types.add(get.type2(card));
                                });
                                return (suits.length >= 4 && player.countCards('he') >= 2) || types.length >= 3;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.loged = false;
                                ('step 1');
                                var suits = [],
                                    types = [];
                                player.getCards('hej', function (card) {
                                    suits.add(card.suit);
                                    types.add(get.type2(card));
                                });
                                event.countX = suits.length;
                                event.countY = types.length;
                                ('step 2');
                                if (event.countY >= 3) {
                                    player.chooseBool(get.prompt('dz_jdxb_tongye')).set('prompt2', '摸一张牌');
                                } else event.goto(4);
                                ('step 3');
                                if (result.bool) {
                                    event.loged = true;
                                    player.draw();
                                }
                                ('step 4');
                                if (event.countX >= 4) {
                                    var next = player
                                        .chooseToDiscard(get.prompt('dz_jdxb_tongye'), '弃置两张花色相同的牌视为你使用一张无次数限制的基本牌', 'he', 2, function (card, player) {
                                            if (!ui.selected.cards.length) return true;
                                            return card.suit == ui.selected.cards[0].suit;
                                        })
                                        .set('complexCard', true);
                                    if (!event.loged) next
                                } else event.finish();
                                ('step 5');
                                if (result.bool) {
                                    var vcard = [];
                                    for (var i of lib.inpile) {
                                        var type = get.type(i);
                                        if (type == 'basic' && player.hasUseTarget(i)) vcard.add(i);
                                        if (i == 'sha') {
                                            for (var j of lib.inpile_nature) {
                                                if (player.hasUseTarget({ name: i, nature: j })) vcard.push(['基本', '', 'sha', j]);
                                            }
                                        }
                                    }
                                    if (vcard.length) {
                                        player.chooseButton(['选择要使用的牌', [vcard, 'vcard']], true);
                                    } else event.finish();
                                } else event.finish();
                                ('step 6');
                                if (result.bool) {
                                    var card = { name: result.links[0][2], nature: result.links[0][3] };
                                    player.chooseUseTarget(card, false);
                                }
                            },
                        },
                        xu_xuanfeng: {
                            audio: 'ext:虚界/audio:2',
                            group: 'xu_xuanfeng_damage',
                            trigger: {
                                player: 'loseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (
                                    !game.hasPlayer(function (current) {
                                        return current != player && current.countCards('he') > 0;
                                    })
                                )
                                    return false;
                                var list = [];
                                game.getGlobalHistory('cardMove', function (evt) {
                                    if (evt.name == 'lose') {
                                        if (evt.position == ui.discardPile) {
                                            for (var i of evt.cards) list.add(i);
                                        }
                                    } else {
                                        if (evt.name == 'cardsDiscard') {
                                            for (var i of evt.cards) list.add(i);
                                        }
                                    }
                                });
                                //return list.length;
                                if (event.name == 'lose') {
                                    var evt = event.parent;
                                    return evt.name != 'useCard';
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('弃置至多' + get.cnNumber(player.hp) + '名其他角色的1张牌', [1, player.hp], function (card, player, target) {
                                        if (player == target) return false;
                                        return target.countDiscardableCards(player, 'he');
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    event.targets = result.targets;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.targets.length == player.hp) {
                                    player.moveCard();
                                }
                                ('step 3');
                                if (event.targets && event.targets.length) {
                                    player.discardPlayerCard(event.targets.shift(), 'he', true);
                                    event.redo();
                                }
                                ('step 4');
                                var list = [];
                                game.getGlobalHistory('cardMove', function (evt) {
                                    if (evt.name == 'lose') {
                                        if (evt.position == ui.discardPile) {
                                            for (var i of evt.cards) {
                                                if (get.position(i, true) == 'd') list.add(i);
                                            }
                                        }
                                    } else {
                                        if (evt.name == 'cardsDiscard') {
                                            for (var i of evt.cards) {
                                                if (get.position(i, true) == 'd') list.add(i);
                                            }
                                        }
                                    }
                                });
                                if (list.length) {
                                    player.chooseCardButton(list, '请选择要使用的牌').set('filterButton', function (button) {
                                        return _status.event.player.hasUseTarget({ name: button.link.name });
                                    });
                                } else event.goto(7);
                                ('step 5');
                                if (result.bool) {
                                    event.card = result.links[0];
                                    player.line(result.targets, 'green');
                                    player.chooseTarget('请选择一名角色使用此牌', true);
                                } else event.goto(7);
                                ('step 6');
                                if (result.bool) {
                                    result.targets[0].chooseUseTarget(event.card, true);
                                } else event.goto(7);
                                ('step 7');
                                player.addMark('xu_xuanfeng');
                                if (player.countMark('xu_xuanfeng') == player.hp) {
                                    player.removeMark('xu_xuanfeng', player.hp);
                                    player
                                        .chooseTarget(get.prompt('xu_xuanfeng'), '对至多' + get.cnNumber(player.hp) + '名其他角色造成一点伤害', [1, player.hp], function (card, player, target) {
                                            return target != player;
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            return get.damageEffect(target, player, player);
                                        });
                                } else event.finish();
                                ('step 8');
                                if (result.bool) {
                                    event.target = result.targets.slice(0).sortBySeat();
                                } else {
                                    event.finish();
                                }
                                ('step 9');
                                if (event.target && event.target.length) {
                                    event.target.shift().damage();
                                    event.redo();
                                }
                            },
                            intro: {
                                name: '旋风',
                                content: 'mark',
                            },
                            subSkill: {
                                damage: {
                                    forced: true,
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    content() {
                                        'step 0';
                                        var num = player.countMark('xu_xuanfeng') - player.hp;
                                        if (player.countMark('xu_xuanfeng') > player.hp) {
                                            player.removeMark('xu_xuanfeng', num);
                                        }
                                        if (player.countMark('xu_xuanfeng') == player.hp) {
                                            player.removeMark('xu_xuanfeng', player.hp);
                                            player
                                                .chooseTarget('对至多' + get.cnNumber(player.hp) + '名其他角色造成一点伤害', [1, player.hp], function (card, player, target) {
                                                    return target != player;
                                                })
                                                .set('ai', function (target) {
                                                    var player = _status.event.player;
                                                    return get.damageEffect(target, player, player);
                                                });
                                        }
                                        ('step 1');
                                        if (result.bool) {
                                            event.targets = result.targets.slice(0).sortBySeat();
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        if (event.targets && event.targets.length) {
                                            event.targets.shift().damage();
                                            event.redo();
                                        }
                                    },
                                },
                            },
                        },
                        xu_xuanfeng1: {
                            forced: true,
                            trigger: {
                                global: 'phaseEnd',
                            },
                            filter(event, player) {
                                var list = [];
                                game.getGlobalHistory('cardMove', function (evt) {
                                    if (evt.name == 'lose') {
                                        if (evt.position == ui.discardPile) {
                                            for (var i of evt.cards) list.add(i);
                                        }
                                    } else {
                                        if (evt.name == 'cardsDiscard') {
                                            for (var i of evt.cards) list.add(i);
                                        }
                                    }
                                });
                                return list.length;
                            },
                            content() {
                                'step 0';
                                var list = [];
                                game.getGlobalHistory('cardMove', function (evt) {
                                    if (evt.name == 'lose') {
                                        if (evt.position == ui.discardPile) {
                                            for (var i of evt.cards) {
                                                if (get.position(i, true) == 'd') list.add(i);
                                            }
                                        }
                                    } else {
                                        if (evt.name == 'cardsDiscard') {
                                            for (var i of evt.cards) {
                                                if (get.position(i, true) == 'd') list.add(i);
                                            }
                                        }
                                    }
                                });
                                if (list.length) {
                                    player.chooseCardButton(list, '请选择要使用的牌').set('filterButton', function (button) {
                                        return _status.event.player.hasUseTarget({ name: button.link.name });
                                    });
                                } else event.finish();
                                ('step 1');
                                if (result.bool) {
                                    event.card = result.links[0];
                                    player.line(result.targets, 'green');
                                    player.chooseTarget('请选择一名角色使用此牌', true);
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    result.targets[0].chooseUseTarget(event.card, true);
                                } else event.finish();
                            },
                        },
                        xu_baiban: {
                            trigger: {
                                global: 'gameStart',
                            },
                            firstDo: true,
                            forced: true,
                            content() {
                                'step 0';
                                event.targets = game.filterPlayer();
                                event.targets.remove(player);
                                event.targets.sort(lib.sort.seat);
                                player.line(event.targets, 'green');
                                event.targets2 = event.targets.slice(0);
                                ('step 1');
                                if (event.targets2.length) {
                                    var target = event.targets2.shift();
                                    event.target = target;
                                    target.addSkill('xu_baiban1');
                                    target.loseMaxHp(target.maxHp - 3);
                                    event.redo();
                                }
                                ('step 2');
                                if (target.maxHp >= 100) {
                                    target.die();
                                    event.redo();
                                }
                            },
                        },
                        xu_baiban1: {
                            init(player, skill) {
                                player.addSkillBlocker(skill);
                            },
                            onremove(player, skill) {
                                player.removeSkillBlocker(skill);
                            },
                            charlotte: true,
                            skillBlocker(skill, player) {
                                return true;
                            },
                            mark: true,
                            intro: {
                                content(storage, player, skill) {
                                    var list = player.getSkills(null, false, false).filter(function (i) {
                                        //return lib.skill.xu_baiban1.skillBlocker(i,player);
                                    });
                                    if (list.length) return '失效技能:' + get.translation(list);
                                    return '所有技能已失效';
                                },
                            },
                        },
                        xu_jiang: {
                            audio: 'jiang',
                            trigger: {
                                player: 'useCardToPlayered',
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                if (get.color(event.card) != 'red') return false;
                                var type = get.type(event.card);
                                if (type != 'basic' && type != 'trick') return false;
                                if (event.targets.length != 1) return false;
                                return true;
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                        },
                        xu_jiuchi: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'jiu') return Infinity;
                                },
                            },
                            group: ['xu_jiuchi1', 'xu_jiuchi2'],
                            audio: 'jiuchi',
                            enable: 'chooseToUse',
                            forced: true,
                            filterCard(card) {
                                return get.color(card) == 'black';
                            },
                            viewAs: {
                                name: 'jiu',
                            },
                            position: 'hes',
                            viewAsFilter(player) {
                                if (!player.countCards('he', { color: 'black' })) return false;
                                return true;
                            },
                            check(cardx, player) {
                                if (player && player == cardx.player) return true;
                                if (_status.event.type == 'dying') return 1;
                                var player = _status.event.player;
                                var shas = player.getCards('hs', function (card) {
                                    return card != cardx && card.name == 'sha';
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
                                        if (shas[i] != cardx && lib.filter.filterCard(shas[i], player)) {
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
                                        return 4 - get.value(cardx);
                                    }
                                }
                                return -1;
                            },
                            prompt: '将一张黑色牌当酒使用',
                        },
                        xu_jiuchi1: {
                            trigger: {
                                player: 'useCard',
                            },
                            marktext: '酒池',
                            intro: {
                                name: '酒池',
                                content: '你喝了$桶酒',
                            },
                            filter(event, player) {
                                if (event.card.name == 'jiu') return true;
                                return false;
                            },
                            forced: true,
                            content() {
                                player.recover();
                                player.addMark('xu_jiuchi1', 1, false);
                                player.say(['此酒,甚烈!', '此酒,些许清淡'].randomGet());
                            },
                        },
                        xu_jiuchi2: {
                            trigger: {
                                global: 'phaseAfter',
                            },
                            forced: true,
                            content() {
                                player.removeMark('xu_jiuchi1', player.countMark('xu_jiuchi1'));
                            },
                        },
                        xu_baonue: {
                            audio: 'ext:虚界/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            contentBefore() {
                                event.parent._xu_baonue_count = [0, 0];
                            },
                            content() {
                                'step 0';
                                target.chooseCard('h', '暴虐:将一张手牌交给' + get.translation(player) + '或本回合赋予即死效果并弃置一张牌');
                                ('step 1');
                                if (result.bool) {
                                    target.give(result.cards, player);
                                    player.gainMaxHp();
                                    event.parent._xu_baonue_count[0]++;
                                } else {
                                    target.addTempSkill('xu_baonue1');
                                    target.chooseToDiscard('he', true);
                                    event.parent._xu_baonue_count[1]++;
                                }
                            },
                            contentAfter() {
                                var list = event.parent._xu_baonue_count;
                                if (list[0] < list[1]) {
                                    player.skip('phaseJieshu');
                                    player.addMark('xu_baonue_mark');
                                    player.addTempSkill('xu_baonue_mark');
                                } else player.useSkill('xu_benghuai');
                            },
                            subSkill: {
                                mark: {
                                    marktext: '暴虐',
                                    intro: {
                                        content: '跳过你本回合的结束阶段<br>已跳过#个结束阶段',
                                    },
                                },
                            },
                            ai: {
                                order: '10',
                                result: {
                                    player: 9,
                                    target: 1.5,
                                },
                            },
                        },
                        xu_baonue1: {
                            trigger: {
                                player: 'dyingBefore',
                            },
                            forced: true,
                            content() {
                                player.die();
                            },
                        },
                        xu_benghuai: {
                            audio: 'ext:虚界/audio:2',
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
                                player
                                    .chooseControl('失去体力', '减少上限', function (event, player) {
                                        if (player.hp == player.maxHp) return '失去体力';
                                        if (player.hp < player.maxHp - 1 || player.hp <= 2) return '减少上限';
                                        return '失去体力';
                                    })
                                    .set('prompt', '崩坏:失去2点体力或减2点体力上限');
                                ('step 1');
                                if (result.control == '失去体力') {
                                    player.loseHp(2);
                                } else {
                                    player.loseMaxHp(true, 2);
                                }
                            },
                            ai: {
                                threaten: 0.5,
                                neg: true,
                            },
                        },
                        xu_chenglue: {
                            mark: true,
                            forced: true,
                            zhuanhuanji: true,
                            marktext: '☯',
                            intro: {
                                content(storage, player, skill) {
                                    var str = player.storage.xu_chenglue ? '摸牌阶段你改为观看牌堆底三张牌并获得其中两张牌,直到本回合结束,你使用与此牌花色相同的牌无距离和次数限制且你从另一端摸牌直至下次发动此技能' : '摸牌阶段你改为观看牌堆顶三张牌并获得其中两张牌,直到本回合结束,你使用与此牌花色相同的牌无距离和次数限制且你从另一端摸牌直至下次发动此技能';
                                    if (player.storage.xu_chenglue1) {
                                        str += '<br><li>当前花色:';
                                        str += get.translation(player.storage.xu_chenglue1);
                                    }
                                    return str;
                                },
                            },
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            audio: 'ext:虚界/audio:2',
                            content() {
                                'step 0';
                                trigger.cancel();
                                ('step 1');
                                if (player.storage.xu_chenglue == true) {
                                    var card = get.bottomCards(3);
                                    player.chooseButton(['成略(牌堆底):选择获得两张牌', card.slice(0)], true, 2).set('ai', function (button) {
                                        return get.value(button.link, _status.event.player);
                                    });
                                    while (card.length) {
                                        ui.cardPile.appendChild(card.pop(), ui.cardPile.firstChild);
                                    }
                                    player.addSkill('xu_shicai_mark');
                                    player.removeSkill('xu_chenglue_draw');
                                } else if (!player.hasSkill('xu_chenglue_draw')) {
                                    var cards = get.cards(3);
                                    player.chooseButton(['成略(牌堆顶):选择获得两张牌', cards.slice(0)], true, 2).set('ai', function (button) {
                                        return get.value(button.link, _status.event.player);
                                    });
                                    while (cards.length) {
                                        ui.cardPile.insertBefore(cards.pop(), ui.cardPile.firstChild);
                                    }
                                    player.addSkill('xu_chenglue_draw');
                                    player.removeSkill('xu_shicai_mark');
                                }
                                player.changeZhuanhuanji('xu_chenglue');
                                ('step 2');
                                if (result.bool) {
                                    player.gain(result.links, 'gain2').gaintag.add('xu_chenglue');
                                    player.storage.xu_chenglue1 = [];
                                    for (var i = 0; i < result.links.length; i++) {
                                        player.storage.xu_chenglue1.add(result.links[i].suit);
                                    }
                                    player.markSkill('xu_chenglue');
                                    player.addTempSkill('xu_chenglue1');
                                }
                            },
                            ai: {
                                order: 2.7,
                                result: {
                                    player(player) {
                                        if (!player.storage.xu_chenglue && player.countCards('h') < 3) return 0;
                                        return 1;
                                    },
                                },
                            },
                        },
                        xu_chenglue_draw: {
                            trigger: {
                                player: 'drawBegin',
                            },
                            forced: true,
                            content() {
                                trigger.bottom = true;
                            },
                        },
                        xu_chenglue1: {
                            mod: {
                                cardUsable(card, player) {
                                    var cards = player.storage.xu_chenglue1;
                                    for (var i = 0; i < cards.length; i++) {
                                        if (cards[i] == card.suit) return Infinity;
                                    }
                                },
                                targetInRange(card, player) {
                                    var cards = player.storage.xu_chenglue1;
                                    for (var i = 0; i < cards.length; i++) {
                                        if (cards[i] == card.suit) return true;
                                    }
                                },
                            },
                        },
                        xu_shicai: {
                            audio: 'nzry_shicai_2',
                            trigger: {
                                player: ['useCardAfter'],
                                target: 'useCardToTargeted',
                            },
                            filter(event, player, name) {
                                if (event.cards.filterInD().length <= 0) return false;
                                var history = player.getHistory('useCard');
                                var evt = name == 'useCardAfter' ? event : event.parent;
                                for (var i = 0; i < history.length; i++) {
                                    if (history[i] != evt && history[i].card.suit == event.card.suit) return false;
                                    else if (history[i] == evt) return true;
                                }
                                return false;
                            },
                            prompt2(event, player) {
                                var str = '',
                                    storage = player.getStorage('xu_shicai');
                                /*for(var i=0;i<storage.length;i++){
                                    str+=get.translation(storage[i]);
                                }*/
                                if (player.hasSkill('xu_shicai_mark')) {
                                    str += '将' + get.translation(event.card) + '置于牌堆底';
                                } else str += '将' + get.translation(event.card) + '置于牌堆顶';
                                return str;
                            },
                            check(event, player) {
                                if (get.type(event.card) == 'equip') {
                                    if (get.subtype(event.card) == 'equip6') return true;
                                    if (get.equipResult(player, event.target, event.card.name) <= 0) return true;
                                    var eff1 = player.getUseValue(event.card);
                                    var subtype = get.subtype(event.card);
                                    return (
                                        player.countCards('h', function (card) {
                                            return get.subtype(card) == subtype && player.getUseValue(card) >= eff1;
                                        }) > 0
                                    );
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                player.addTempSkill('xu_shicai_clear');
                                event.cards = trigger.cards.filterInD();
                                if (event.cards.length > 1) {
                                    var next = player.chooseToMove('恃才:将牌按顺序置于牌堆顶');
                                    next.set('list', [['牌堆顶', event.cards]]);
                                    next.set('reverse', _status.currentPhase && _status.currentPhase.next ? get.attitude(player, _status.currentPhase.next) > 0 : false);
                                    next.set('processAI', function (list) {
                                        var cards = list[0][1].slice(0);
                                        cards.sort(function (a, b) {
                                            return (_status.event.reverse ? 1 : -1) * (get.value(b) - get.value(a));
                                        });
                                        return [cards];
                                    });
                                }
                                ('step 1');
                                if (result.bool && result.moved && result.moved[0].length) cards = result.moved[0].slice(0);
                                if (!player.hasSkill('xu_shicai_mark')) {
                                    while (cards.length) {
                                        var card = cards.pop();
                                        if (get.position(card, true) == 'o') {
                                            card.fix();
                                            ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
                                            game.log(player, '将', card, '置于牌堆顶');
                                        }
                                    }
                                } else {
                                    while (cards.length) {
                                        var car = cards.pop();
                                        car.fix();
                                        ui.cardPile.appendChild(car, ui.cardPile.firstChild);
                                        player.popup('一下', 'wood');
                                        game.log(player, '将一张牌置于了牌堆底');
                                    }
                                }
                                game.updateRoundNumber();
                                player.draw();
                            },
                            intro: {
                                content: '已记录花色:$',
                            },
                            group: 'xu_shicai_count',
                            subSkill: {
                                mark: {},
                                clear: {
                                    trigger: { global: 'phaseUseAfter' },
                                    forced: true,
                                    charlotte: true,
                                    popup: false,
                                    content() {
                                        player.unmarkSkill('xu_shicai');
                                        player.removeMark('xu_chenglue_mark', 4);
                                    },
                                },
                                count: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player, name) {
                                        if (name != 'useCard' && player == event.player) return false;
                                        var suit = event.card.suit;
                                        if (!lib.suit.includes(suit)) return false;
                                        //if(player.storage.xu_chenglue&&player.storage.xu_chenglue.includes(suit)) return false;
                                        return true;
                                    },
                                    content() {
                                        player.markAuto('xu_shicai', [trigger.card.suit]);
                                    },
                                },
                            },
                        },
                        xu_cunmu: {
                            enable: ['chooseToUse', 'chooseToRespond'],
                            audio: 'ext:虚界/audio:2',
                            usable: 1,
                            filter(event, player) {
                                return (player.countCards('hes') > 0 && player.isMinHp()) || player.isMinHandcard();
                            },
                            hiddenCard() {
                                return true;
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
                                    return ui.create.dialog('将一张牌当做即使牌使用', [list, 'vcard']);
                                },
                                filter(button, player) {
                                    return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    if (player.countCards('hs', button.link[2]) > 0) return 0;
                                    if (button.link[2] == 'wugu') return;
                                    var effect = player.getUseValue(button.link[2]);
                                    if (effect > 0) return effect;
                                    return 0;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard: true,
                                        audio: 'xu_cunmu',
                                        selectCard: 1,
                                        popname: true,
                                        check(card) {
                                            return 6 - get.value(card);
                                        },
                                        position: 'hes',
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                                },
                            },
                            ai: {
                                order: 5,
                                result: {
                                    player(player) {
                                        if (_status.event.type == 'dying') {
                                            return get.attitude(player, _status.event.dying);
                                        }
                                        return 1;
                                    },
                                },
                                threaten: 1.9,
                            },
                        },
                        xu_fuqi: {
                            audio: 'ext:虚界/audio:2',
                            group: 'xu_fuqi1',
                            mod: {
                                cardUsable(card, player) {
                                    return Infinity;
                                },
                            },
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return (
                                    event.card &&
                                    (get.type(event.card) == 'trick' || (get.type(event.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(event.card.name))) &&
                                    game.hasPlayer(function (current) {
                                        return true;
                                    })
                                );
                            },
                            content() {
                                trigger.directHit.addArray(
                                    game.filterPlayer(function (current) {
                                        return true;
                                    })
                                );
                            },
                        },
                        xu_fuqi1: {
                            enable: 'chooseToUse',
                            filterCard(card) {
                                if (get.type(card) != 'basic' && get.type(card) != 'trick') return false;
                                return get.color(card) == 'black';
                            },
                            viewAs: {
                                name: 'sha',
                            },
                            viewAsFilter(player) {
                                return player.hasCard(function (card) {
                                    return get.color(card) == 'black' && (get.type(card) == 'trick' || get.type(card) == 'basic');
                                }, 'he');
                            },
                            position: 'he',
                            prompt: '将一张黑色即时牌当做【杀】使用',
                        },
                        xu_xiandeng: {
                            trigger: {
                                global: 'phaseBegin',
                            },
                            audio: 'ext:虚界/audio:2',
                            forced: true,
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                'step 0';
                                var tar = _status.currentPhase;
                                if (player.seatNum < tar.seatNum) {
                                    game.broadcastAll(
                                        function (target1, target2) {
                                            game.swapSeat(target1, target2);
                                        },
                                        player,
                                        tar
                                    );
                                    player.draw(tar.seatNum);
                                    tar.addTempSkill('xu_baiban1', 'phaseAfter');
                                } else {
                                    player.loseHp();
                                    event.finish();
                                }
                                ('step 1');
                                var evt = _status.event.getParent('phase');
                                if (evt && evt.name) {
                                    evt.finish();
                                }
                            },
                        },
                        //锁定技,<br>①当你受到伤害/失去体力/减少上限时,你展示牌堆顶一张牌和一名其他角色的一张手牌,若两张牌颜色相同,你获得前一张牌,
                        //该角色弃置后一张牌,你防止之,否则你摸x张牌(x为后一张牌名字数)<br>
                        //②当你造成/受到伤害后,你获得一枚<天><br>③其他角色的出牌阶段开始时,你可以移去一枚<天>,若如此做,你观看其手牌<br>
                        //④一名角色进入或脱离横置状态时,你令其本回合非锁定技失效
                        xu_tiandao: {
                            audio: 'ext:虚界/audio:2',
                            trigger: {
                                player: ['damageBegin', 'loseHpBegin', 'loseMaxHpBegin'],
                            },
                            group: ['xu_tiandao1', 'xu_tiandao2', 'xu_tiandao3'],
                            forced: true,
                            filter(event, player) {
                                if (
                                    !game.hasPlayer(function (current) {
                                        return current != player && current.countCards('h') > 0;
                                    })
                                )
                                    return false;
                                return true;
                            },
                            async content(event, trigger, player) {
                                //QQQ
                                var cards = player.showCards(get.cards(1));
                                const result = await player.chooseTarget('展示一名其他角色的一张手牌', true, (card, player, target) => target != player && target.countCards('h')).set('ai', (target) => target.isEnemiesOf(player)).forResult();
                                if (result.targets?.length) {
                                    const { result: result1 } = await player.choosePlayerCard('h', result.targets[0], true);
                                    if (result1.cards && result1.cards[0]) {
                                        if (get.color(result1.cards[0]) == get.color(cards[0])) {
                                            player.gain(cards, 'gain2');
                                            result.targets[0].discard(result1.cards);
                                        }
                                    }
                                }
                            },
                        },
                        xu_tiandao1: {
                            trigger: {
                                player: 'damageEnd',
                                source: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                player.addMark('xu_tiandao1');
                            },
                            marktext: '天',
                            intro: {
                                name: '天道',
                                content: '你拥有#枚<天>',
                            },
                        },
                        xu_tiandao2: {
                            trigger: {
                                global: 'phaseUseBefore',
                            },
                            audio: 'xu_tiandao',
                            check(event, player) {
                                return false;
                            },
                            filter(event, player) {
                                if (player.countMark('xu_tiandao1') == 0) return false;
                                if (player == event.player) return false;
                                if (event.player.countCards('h') == 0) return false;
                                return true;
                            },
                            content() {
                                player.removeMark('xu_tiandao1');
                                player.viewHandcards(trigger.player);
                            },
                        },
                        xu_tiandao3: {
                            trigger: {
                                global: 'linkBegin',
                            },
                            forced: true,
                            content() {
                                trigger.player.addTempSkill('fengyin');
                            },
                        },
                        xu_tianjie: {
                            audio: 'ext:虚界/audio:2',
                            trigger: {
                                global: 'roundStart',
                            },
                            mark: true,
                            filter(event, player) {
                                if (player.countMark('xu_tiandao1') < 6) return false;
                                return game.hasPlayer(function (current, player) {
                                    return !current.isLinked();
                                    return player != current;
                                });
                                return true;
                            },
                            content() {
                                'step 0';
                                player.say(['审判之时已至!'].randomGet());
                                /*event.targets=game.filterPlayer();
                                        event.targets.remove(player);
                                        event.targets.sort(lib.sort.seat);
                                        player.line(event.targets,'green');
                                        event.targets2=event.targets.slice(0);*/
                                event.targets = game.filterPlayer();
                                event.targets.remove(player);
                                event.targets.sort(lib.sort.seat);
                                ('step 1');
                                if (event.targets.length) {
                                    var target = event.targets.shift();
                                    if (!target.isLinked()) {
                                        player.line(target, 'green');
                                        target.link();
                                    }
                                    event.redo();
                                }
                                /*if(event.targets2.length){
                                var targets=event.targets2.shift();
                                event.targets=targets;
                                targets.link(true)
                                event.redo()}*/
                                //var num=game.countPlayer(function(current){return get.attitude(player,current)<0&&!current.isLinked()&&player!=current})
                                ('step 2');
                                var num = Math.floor(player.countMark('xu_tiandao1') / 2);
                                event.num = num;
                                player.chooseTarget('对一名目标角色造成' + get.cnNumber(num) + '点雷电伤害', true, lib.filter.notMe);
                                ('step 3');
                                if (result.bool) {
                                    result.targets[0].damage('thunder', num);
                                    player.removeMark('xu_tiandao1', player.countMark('xu_tiandao1'));
                                    player.disableJudge();
                                }
                            },
                        },
                        xu_dunshi: {
                            audio: 'ext:虚界/audio:2',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            usable: 1,
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = [['sha', 'shan', 'tao', 'jiu'], 0];
                            },
                            hiddenCard(player, name) {
                                if (player.storage.xu_dunshi && player.storage.xu_dunshi[0].includes(name) && !player.getStat('skill').xu_dunshi) return true;
                                return false;
                            },
                            group: ['xu_dunshi_skill', 'xu_dunshi_mark'],
                            filter(event, player) {
                                if (event.type == 'wuxie') return false;
                                var storage = player.storage.xu_dunshi;
                                if (!storage || !storage[0].length) return false;
                                for (var i of storage[0]) {
                                    var card = { name: i };
                                    if (event.filterCard(card, player, event)) return true;
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    var storage = player.storage.xu_dunshi;
                                    for (var i of storage[0]) list.push(['基本', '', i]);
                                    return ui.create.dialog('遁世', [list, 'vcard'], 'hidden');
                                },
                                filter(button, player) {
                                    var evt = _status.event.parent;
                                    return evt.filterCard && evt.filterCard({ name: button.link[2] }, player, evt);
                                },
                                check(button) {
                                    var card = { name: button.link[2] },
                                        player = _status.event.player;
                                    if (_status.event.parent.type != 'phase') return 1;
                                    if (card.name == 'jiu') return 0;
                                    if (card.name == 'sha' && player.hasSkill('jiu')) return 0;
                                    return player.getUseValue(card, null, true);
                                },
                                backup(links, player) {
                                    return {
                                        audio: 'xu_dunshi',
                                        filterCard() {
                                            return false;
                                        },
                                        popname: true,
                                        viewAs: {
                                            name: links[0][2],
                                        },
                                        selectCard: -1,
                                        precontent() { },
                                    };
                                },
                                prompt(links, player) {
                                    return '选择【' + get.translation(links[0][2]) + '】的目标';
                                },
                            },
                            ai: {
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player, tag, arg) {
                                    var storage = player.storage.dunshi;
                                    if (!storage || !storage[0].length) return false;
                                    if (player.getStat('skill').dunshi) return false;
                                    switch (tag) {
                                        case 'respondSha':
                                            return (_status.event.type != 'phase' || player == game.me || player.isUnderControl() || player.isOnline()) && storage[0].includes('sha');
                                        case 'respondShan':
                                            return storage[0].includes('shan');
                                        case 'save':
                                            if (arg == player && storage[0].includes('jiu')) return true;
                                            return storage[0].includes('tao');
                                    }
                                },
                                order: 4,
                                result: {
                                    player(player) {
                                        if (_status.event.type == 'dying') {
                                            return get.attitude(player, _status.event.dying);
                                        }
                                        return 1;
                                    },
                                },
                            },
                            subSkill: {
                                mark: {
                                    trigger: {
                                        global: 'phaseBefore',
                                        player: 'enterGame',
                                    },
                                    forced: true,
                                    audio: 'xu_dunshi',
                                    filter(event, player) {
                                        return event.name != 'phase' || game.phaseNumber == 0;
                                    },
                                    content() {
                                        var num = game.countGroup();
                                        player.addMark('xu_dunshi_mark', num);
                                    },
                                    marktext: '席',
                                    intro: {
                                        content: '可以获得#个技能',
                                    },
                                },
                                skill: {
                                    trigger: {
                                        global: 'dying',
                                    },
                                    audio: 'xu_dunshi',
                                    forced: true,
                                    filter(event, player) {
                                        return player.countMark('xu_dunshi_mark') > 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.removeMark('xu_dunshi_mark');
                                        lib.skill.pingjian.initList();
                                        var list = _status.characterlist.randomGets(3);
                                        var skills = [];
                                        for (var i of list) {
                                            skills.addArray(lib.character[i][3].slice(0));
                                        }
                                        var skillsx = skills.slice(0);
                                        for (var i = 0; i < skills.length; i++) {
                                            skills[i] = [skills[i], get.translation(skills[i])];
                                        }
                                        player
                                            .chooseButton(['遁世', [list, 'character'], [skills, 'tdnodes']], true)
                                            .set('filterButton', function (button) {
                                                return _status.event.skillsx.includes(button.link);
                                            })
                                            .set('skillsx', skillsx);
                                        ('step 1');
                                        if (result.bool) {
                                            game.log(player, '获得了技能', '#g【' + get.translation(result.links) + '】');
                                            player.addAdditionalSkill('xu_dunshi', result.links, true);
                                            player.markSkill('xu_dunshi');
                                        }
                                    },
                                },
                            },
                        },
                        xu_zhuixi: {
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            popup: false,
                            audio: 'ext:虚界/audio:2',
                            filter(event, player) {
                                return event.getParent(2).skill != 'xu_zhuixi_use' && event.getParent(2).skill != 'xu_zhuixi_used';
                            },
                            content() {
                                player.storage.xu_zhuixi++;
                            },
                            init(player) {
                                if (!player.storage.xu_zhuixi) player.storage.xu_zhuixi = [];
                            },
                            marktext: '追袭',
                            mark: true,
                            intro: {
                                markcount: () => undefined,
                                content(storage) {
                                    if (storage % 2 == 0) {
                                        return '下一张是奇数';
                                    }
                                    if (storage % 2 == 1) {
                                        return '下一张是偶数';
                                    }
                                    return '未使用牌';
                                },
                            },
                            group: ['xu_zhuixi_use', 'xu_zhuixi_used'],
                            subSkill: {
                                /*clear:{
                                    trigger:{
                                    global:'phaseUseAfter'    
                                    },
                                    forced:true,
                                                    charlotte:true,
                                                    direct:true,
                                                    content:function(){
                                                        player.unmarkSkill('xu_zhuixi')
                                                    },
                                },*/
                                use: {
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    audio: 'xu_zhuixi',
                                    forced: true,
                                    filter(event, player) {
                                        if (event.parent.name == 'xu_zhuixi_use') return false;
                                        if (!event.targets || !event.card) return false;
                                        if (!get.tag(event.card, 'damage') > 0) return false;
                                        if (player.getAllHistory('useCard').indexOf(event) % 2 != 0) return false;
                                        var card = game.createCard(event.card.name, event.card.suit, event.card.number, event.card.nature);
                                        for (var i = 0; i < event.targets.length; i++) {
                                            if (event.targets[i].isAlive() && player.canUse({ name: event.card.name }, event.targets[i], false, false)) return true;
                                        }
                                        return false;
                                    },
                                    content() {
                                        var card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number, trigger.card.nature);
                                        var next = player.useCard(card, trigger.targets, false, 'noai');
                                        next.set('addCount', false);
                                        next.set('animate', false);
                                        next.set('audio', false);
                                        next.set('nopopup', true);
                                        player.actionHistory[player.actionHistory.length - 1].useCard.pop();
                                    },
                                },
                                used: {
                                    trigger: {
                                        player: 'useCard1',
                                    },
                                    popup: false,
                                    firstDo: true,
                                    forced: true,
                                    filter(event, player) {
                                        if (!get.tag(event.card, 'damage') > 0) return false;
                                        if (player.getAllHistory('useCard').indexOf(event) % 2 != 0) return false;
                                        return true;
                                    },
                                    content() {
                                        var name = trigger.card.name;
                                        trigger.addCount = false;
                                        if (player.stat[player.stat.length - 1].card[name] > 0) {
                                            player.stat[player.stat.length - 1].card[name]--;
                                        }
                                    },
                                },
                            },
                        },
                        xu_lulve: {
                            enable: 'phaseUse',
                            audio: 'ext:虚界/audio:2',
                            usable: 1,
                            group: 'xu_lulve_show',
                            subfrequent: ['xu_lulve_show'],
                            filterTarget(card, player, target) {
                                return player != target && player.isEnemiesOf(target);
                            },
                            content() {
                                'step 0';
                                player.turnOver();
                                var list = ['交给' + get.translation(player) + '所有牌并令其获得一张伤害牌', '令' + get.translation(player) + '夺取你一点体力上限并令' + get.translation(player) + '翻回正面', '本回合不能使用/打出牌,并令' + get.translation(player) + '回复一点体力'];
                                if (!target.countCards('he')) list.remove('交给' + get.translation(player) + '所有牌并令其获得一张伤害牌');
                                target
                                    .chooseControl()
                                    .set('choiceList', list)
                                    .set('prompt', '请选择一项')
                                    .set('ai', () => {
                                        var choices = _status.event.controls.slice();
                                        if (!target.countCards('he')) choices.remove('选项一');
                                        if (target.maxHp < 3) choices.remove('选项二');
                                        return choices.randomGet();
                                    });
                                ('step 1');
                                if (result.control == '选项一') {
                                    target.give(target.getCards('he'), player);
                                    var card = get.cardPile2((card) => {
                                        return get.tag(card, 'damage');
                                    });
                                    if (card) player.gain(card, 'gain2');
                                    event.finish();
                                }
                                if (result.control == '选项二') {
                                    target.loseMaxHp();
                                    player.gainMaxHp();
                                    player.turnOver(false);
                                    event.finish();
                                }
                                if (result.control == '选项三') {
                                    target.addTempSkill('xu_lulve1');
                                    game.log(target, '本回合不能使用/打出牌');
                                    player.recover();
                                    event.finish();
                                }
                            },
                            ai: {
                                order: 9,
                                result: {
                                    player: 8,
                                },
                            },
                            subSkill: {
                                show: {
                                    trigger: {
                                        global: ['turnOverEnd', 'linkEnd', 'showCharacterEnd', 'hideCharacterEnd', 'removeCharacterEnd'],
                                    },
                                    audio: 'xu_lulve',
                                    forced: true,
                                    filter(event, player) {
                                        return player != event.player && event.player.countCards('h') > 0;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.player.showHandcards();
                                        var cards = trigger.player.getCards('h');
                                        event.cards = cards;
                                        ('step 1');
                                        player.chooseCardButton(event.cards, true, '掳掠:你获得' + get.translation(trigger.player) + '手牌中的一张牌并可使用之').set('ai', function (button) {
                                            return get.value(button.link, _status.event.player);
                                        });
                                        ('step 2');
                                        if (result.bool) {
                                            player.gain(result.links, 'gain2');
                                            player.chooseUseTarget(result.links, false, 'nodistance');
                                        } else event.finish();
                                    },
                                },
                            },
                        },
                        xu_lulve1: {
                            mark: true,
                            mod: {
                                cardEnabled() {
                                    return false;
                                },
                                cardRespondable() {
                                    return false;
                                },
                                cardSavable() {
                                    return false;
                                },
                            },
                            intro: {
                                content: '不能使用或打出牌',
                            },
                        },
                        xu_danshou: {
                            trigger: {
                                global: ['gainEnd', 'loseEnd'],
                            },
                            popup: false,
                            forced: true,
                            group: ['xu_danshou_card', 'xu_danshou_damage', 'xu_danshou_clear'],
                            audio: 'ext:虚界/audio:2',
                            content() { },
                            marktext: '胆守',
                            mark: true,
                            intro: {
                                content(num) {
                                    var num = 0;
                                    game.countPlayer(function (current) {
                                        num += current.countCards('h');
                                    });
                                    var num1 = Math.ceil(num / game.filterPlayer().length);
                                    var target = game.countPlayer(function (current) {
                                        return current.isMaxHandcard();
                                    });
                                    var str = '<li>当前均值:';
                                    str += num1;
                                    return str;
                                },
                            },
                            subSkill: {
                                card: {
                                    trigger: {
                                        target: 'useCardToTargeted',
                                    },
                                    audio: 'xu_danshou',
                                    forced: true,
                                    filter(event, player) {
                                        return event.targets && event.targets.includes(player) && ['basic', 'trick'].includes(get.type(event.card, 'trick'));
                                    },
                                    content() {
                                        'step 0';
                                        var num = 0;
                                        game.countPlayer2(function (current) {
                                            var history = current.getHistory('useCard');
                                            for (var j = 0; j < history.length; j++) {
                                                if (['basic', 'trick'].includes(get.type(history[j].card, 'trick')) && history[j].targets && history[j].targets.includes(player)) num++;
                                            }
                                        });
                                        event.num = num;
                                        if (num > 3) {
                                            event.num = 3;
                                        }
                                        player.chooseBool(get.prompt('xu_danshou') + '(可摸' + get.cnNumber(event.num) + '张牌)', true, '若目标数大于一则使用者代替你成为目标').set('ai', () => get.attitude(trigger.player, player) < 0); //QQQ
                                        ('step 1');
                                        if (result.bool) {
                                            player.draw(num);
                                        } else event.finish();
                                        ('step 2');
                                        if (trigger.targets && trigger.targets.length > 1) {
                                            trigger.targets.remove(player);
                                            trigger.parent.targets.push(trigger.player);
                                            game.log(trigger.player, '代替', player, '成为', '#g【' + get.translation(trigger.card) + '】', '的目标');
                                        }
                                        var num1 = 0;
                                        game.countPlayer(function (current) {
                                            num1 += current.countCards('h');
                                        });
                                        var num2 = Math.ceil(num1 / game.filterPlayer().length);
                                        game.log(num2);
                                        var num3 = player.countCards('h') - num2;
                                        if (player.isMinHandcard()) {
                                            player.drawTo(num2);
                                        }
                                        if (player.isMaxHandcard() && num3 > 0) {
                                            player.chooseToDiscard(true, num3);
                                        }
                                    },
                                    ai: {
                                        threaten: 0.7,
                                        effect: {
                                            target(card, player, target, current) {
                                                if (typeof card != 'object' || !['basic', 'trick'].includes(get.type(card, 'trick'))) return;
                                                var num = 0;
                                                game.countPlayer2(function (current) {
                                                    var history = current.getHistory('useCard');
                                                    for (var j = 0; j < history.length; j++) {
                                                        if (['basic', 'trick'].includes(get.type(history[j].card, 'trick')) && history[j].targets && history[j].targets.includes(player)) num++;
                                                    }
                                                });
                                                if (player == target && current > 0) return [1.1, num];
                                                return [0.9, num];
                                            },
                                        },
                                    },//QQQ
                                },
                                damage: {
                                    trigger: {
                                        player: 'gainAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.getParent(2).skill == 'xu_danshou_card') return false;
                                        if (event.getg(player).length < 2) return false;
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.addMark('xu_danshou_damage');
                                        var num = player.getHistory('useSkill', (evt) => evt.skill == 'xu_danshou_damage').length;
                                        event.num = num;
                                        if (num > 2) {
                                            player
                                                .chooseTarget(true, [1, num], function (card, player, target) {
                                                    return target != player;
                                                })
                                                .set('ai', function (target) {
                                                    return -get.attitude(_status.event.player, target);
                                                });
                                        } else event.finish();
                                        ('step 1');
                                        if (result.bool) {
                                            event.targets = result.targets.slice(0).sortBySeat();
                                        } else event.finish();
                                        ('step 2');
                                        if (event.targets && event.targets.length) {
                                            event.targets.shift().damage('nocard');
                                            event.redo();
                                        }
                                    },
                                    mod: {
                                        maxHandcard(player, num) {
                                            return num + player.countMark('xu_danshou_damage');
                                        },
                                    },
                                    marktext: '胆守',
                                    intro: {
                                        content: '本回合手牌上限+$',
                                    },
                                },
                                clear: {
                                    trigger: {
                                        global: 'phaseAfter',
                                    },
                                    silent: true,
                                    forced: true,
                                    content() {
                                        player.removeMark('xu_danshou_damage', player.countMark('xu_danshou_damage'));
                                    },
                                },
                            },
                        },
                        xu_jxqd: {
                            trigger: {
                                global: ['logSkill', 'useSkillAfter'],
                            },
                            forced: true,
                            charlotte: true,
                            audio: 'ext:虚界/audio:3',
                            group: ['xu_jxqd_view', 'xu_jxqd_discard'],
                            filter(event, player) {
                                if (player == event.player) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                lib.skill.pingjian.initList();
                                var list = _status.characterlist.randomGets(5);
                                var skills = [];
                                for (var i of list) {
                                    skills.addArray(lib.character[i][3].slice(0));
                                }
                                var skillsx = skills.slice(0);
                                for (var i = 0; i < skills.length; i++) {
                                    skills[i] = [skills[i], get.translation(skills[i])];
                                }
                                player.chooseButton(['金星驱动:请选择一个武将获得其全部技能', [list, 'character']]);
                                ('step 1');
                                if (result.bool) {
                                    var name = result.links[0];
                                    if (name && lib.character[name]) {
                                        var skills = lib.character[name][3];
                                        player.maxHp = get.infoMaxHp(lib.character[name][2]); //QQQ
                                        player.hp = get.infoHp(lib.character[name][2]);
                                        player.node.name.dataset.nature = get.groupnature(player.group);
                                        player.update();
                                        player.addAdditionalSkill('xu_shenquan', skills);
                                        game.log(player, '获得了', '#g【' + get.translation(result.links) + '】', '的全部技能');
                                        game.playAudio('../extension/虚界/audio/xu_jxqd.mp3');
                                    }
                                } else event.finish();
                            },
                            subSkill: {
                                view: {
                                    firstDo: true,
                                    forced: true,
                                    trigger: {
                                        player: 'dying',
                                    },
                                    usable: 1,
                                    content() {
                                        player.hp = player.maxHp;
                                    },
                                },
                                discard: {
                                    trigger: {
                                        player: 'loseBegin',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return event.type == 'discard';
                                    },
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                                /*recover:{
                                 trigger:{
                                  player:'recoverBegin'  
                                 },   
                                 content:function(){
                                  trigger.num+=2;  
                                 },
                                },*/
                            },
                        },
                        xu_shensu: {
                            trigger: {
                                player: ['phaseZhunbeiBefore', 'phaseJieshuBefore'],
                            },
                            audio: 'ext:虚界/audio:2',
                            firstDo: true,
                            content() {
                                'step 0';
                                var list = [];
                                list.push('判定');
                                list.push('摸牌');
                                list.push('出牌');
                                list.push('弃牌');
                                player
                                    .chooseControl(list)
                                    .set('prompt', '神速:请选择替换的阶段')
                                    .set('ai', () => {
                                        var choices = _status.event.controls.slice();
                                        return choices.randomGet();
                                    });
                                ('step 1');
                                var map = {
                                    phaseZhunbei: '准备阶段',
                                    phaseJieshu: '结束阶段',
                                };
                                switch (result.control) {
                                    case '判定':
                                        trigger.cancel();
                                        next = player.phaseJudge();
                                        event.next.remove(next);
                                        trigger.next.push(next);
                                        game.log(player, '将', map[trigger.name], '#g', '改为', '#g' + result.control, '#g阶段');
                                        player.addTempSkill('xu_shensu_respond');
                                        player.chooseUseTarget({ name: 'sha' }, true, false, 'nodistance');
                                        var list = get.inpile('delay');
                                        var card = game.createCard(list.randomGet());
                                        player.addJudge(card);
                                        player.turnOver();
                                        break;
                                    case '摸牌':
                                        trigger.cancel();
                                        next = player.phaseDraw();
                                        event.next.remove(next);
                                        trigger.next.push(next);
                                        game.log(player, '将', map[trigger.name], '#g', '改为', '#g' + result.control, '#g阶段');
                                        player.addMark('xu_shensu');
                                        player.addTempSkill('xu_shensu_clear');
                                        player.chooseUseTarget({ name: 'sha' }, true, 'nodistance');
                                        break;
                                    case '出牌':
                                        trigger.cancel();
                                        next = player.phaseUse();
                                        event.next.remove(next);
                                        trigger.next.push(next);
                                        game.log(player, '将', map[trigger.name], '#g', '改为', '#g' + result.control, '#g阶段');
                                        player.addTempSkill('xu_shensu_add');
                                        player.chooseUseTarget({ name: 'sha' }, true, 'nodistance');
                                        player.turnOver(true);
                                        break;
                                    case '弃牌':
                                        trigger.cancel();
                                        next = player.phaseDiscard();
                                        event.next.remove(next);
                                        trigger.next.push(next);
                                        game.log(player, '将', map[trigger.name], '#g', '改为', '#g' + result.control, '#g阶段');
                                        player.addSkill('xu_shensu_lose');
                                        player.chooseUseTarget({ name: 'sha' }, true, false, 'nodistance');
                                        break;
                                }
                            },
                            mod: {
                                selectTarget(card, player, range) {
                                    if (Array.isArray(range) && range[1] == -1) return;
                                    if (card.name == 'sha' && player.hasMark('xu_shensu')) range[1]++;
                                },
                            },
                            subSkill: {
                                lose: {
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    logTarget: 'target',
                                    filter(event, player) {
                                        if (event.card.name != 'sha') return false;
                                        return true;
                                    },
                                    silent: true,
                                    forced: true,
                                    content() {
                                        player.discardPlayerCard('hej', trigger.target);
                                        player.removeSkill('xu_shensu_lose');
                                    },
                                },
                                add: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    filter(event, player) {
                                        if (event.card.name != 'sha') return false;
                                        return true;
                                    },
                                    silent: true,
                                    forced: true,
                                    content() {
                                        trigger.baseDamage++;
                                        player.removeSkill('xu_shensu_add');
                                    },
                                },
                                clear: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    filter(event, player) {
                                        if (event.card.name != 'sha') return false;
                                        return true;
                                    },
                                    firstDo: true,
                                    silent: true,
                                    forced: true,
                                    content() {
                                        player.removeMark('xu_shensu', player.countMark('xu_shensu'));
                                    },
                                },
                                respond: {
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    logTarget: 'target',
                                    filter(event, player) {
                                        if (event.card.name != 'sha') return false;
                                        return true;
                                    },
                                    silent: true,
                                    forced: true,
                                    content() {
                                        trigger.directHit.addArray(
                                            game.filterPlayer(function (current) {
                                                return current != player;
                                            })
                                        );
                                        player.removeSkill('xu_shensu_respond');
                                    },
                                },
                            },
                        },
                        xu_shebian: {
                            trigger: {
                                global: ['turnOverEnd', 'linkEnd'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var list = ['摸牌', '回血'];
                                if (trigger.player.isHealthy()) list.remove('回血');
                                player
                                    .chooseControl(list)
                                    .set('prompt', '神速:摸一张牌或令' + get.translation(trigger.player) + '回复一点体力')
                                    .set('ai', () => {
                                        var choices = _status.event.controls.slice();
                                        if (trigger.player.isHealthy()) choices.remove('选项二');
                                        return choices.randomGet();
                                    });
                                ('step 1');
                                if (result.control == '摸牌') {
                                    player.draw();
                                } else trigger.player.recover();
                            },
                        },
                        xu_sheyan: {
                            trigger: {
                                global: 'useCardToTarget',
                            },
                            forced: true,
                            group: ['xu_sheyan_lose', 'xu_sheyan_remove'],
                            firstDo: true,
                            check(event, player) {
                                //QQQ
                                return get.attitude(player, event.player) < 0;
                            },
                            prompt: '是否发动【舍宴】？',
                            prompt2(event) {
                                return '为' + get.translation(event.player) + '使用的【' + get.translation(event.card) + '】增加/减少一个目标';
                            },
                            content() {
                                'step 0';
                                var bool1 = trigger.targets.length;
                                var bool2 = game.hasPlayer(function (current) {
                                    return !trigger.targets.includes(current) && lib.filter.targetEnabled2(trigger.card, trigger.player, current);
                                });
                                if (bool1 && bool2) {
                                    player.addMark('xu_sheyan');
                                    player
                                        .chooseControlList(get.prompt('xu_sheyan'), ['为【' + get.translation(trigger.card) + '】增加一个目标', '为【' + get.translation(trigger.card) + '】减少一个目标'], function (event, player) {
                                            if (_status.event.add) return 0;
                                            return 1;
                                        })
                                        .set('add', get.effect(player, trigger.card, trigger.player, player) >= 0);
                                } else if (bool2) {
                                    player.addMark('xu_sheyan');
                                    event.type = 'add';
                                    event.goto(2);
                                    event.unchosen = true;
                                } else {
                                    player.addMark('xu_sheyan');
                                    event.type = 'remove';
                                    event.goto(2);
                                    event.unchosen = true;
                                }
                                ('step 1');
                                if (result.control == 'cancel2') {
                                    player.removeMark('xu_sheyan', false, player.countMark('xu_sheyan'));
                                    event.finish();
                                } else if (result.index == 1) {
                                    event.type = 'remove';
                                } else {
                                    event.type = 'add';
                                }
                                ('step 2');
                                if (event.type == 'add') {
                                    player
                                        .chooseTarget(event.unchosen ? get.prompt('xu_sheyan') : null, '为【' + get.translation(trigger.card) + '】增加一个目标', function (card, player, target) {
                                            var trigger = _status.event.getTrigger();
                                            return !trigger.targets.includes(target) && lib.filter.targetEnabled2(trigger.card, trigger.player, target);
                                        })
                                        .set('ai', function (target) {
                                            var trigger = _status.event.getTrigger();
                                            return get.effect(target, trigger.card, trigger.player, _status.event.player);
                                        });
                                } else {
                                    player
                                        .chooseTarget(event.unchosen ? get.prompt('xu_sheyan') : null, '为【' + get.translation(trigger.card) + '】减少一个目标', function (card, player, target) {
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
                            subSkill: {
                                remove: {
                                    trigger: {
                                        global: ['phaseUseAfter', 'phaseJieshuAfter'],
                                    },
                                    silent: true,
                                    firstDo: true,
                                    forced: true,
                                    content() {
                                        player.removeMark('xu_sheyan', false, player.countMark('xu_sheyan'));
                                    },
                                },
                                lose: {
                                    trigger: {
                                        global: 'loseAfter',
                                    },
                                    usable: 1,
                                    filter(event, player) {
                                        var skills = event.player.getSkills(null, false, false);
                                        var info = event.getParent(2).name;
                                        for (var i of skills) {
                                            if (info.includes(i)) return true;
                                        }
                                        return false;
                                    },
                                    prompt: '是否发动【舍宴】？',
                                    prompt2(event) {
                                        return '使用一张目标为' + get.translation(event.num) + '【五谷丰登】';
                                    },
                                    content() {
                                        'step 0';
                                        var num = trigger.num;
                                        if (num > 0) {
                                            player
                                                .chooseTarget(
                                                    [1, num],
                                                    function (card, player, target) {
                                                        return player.canUse({ name: 'wugu' }, target);
                                                    },
                                                    '舍宴:请选择【五谷丰登】的目标',
                                                    true
                                                )
                                                .set('ai', function (target) {
                                                    var player = _status.event.player;
                                                    return get.effect(target, { name: 'wugu' }, player, player);
                                                });
                                        } else event.finish();
                                        ('step 1');
                                        if (result.bool) {
                                            player.useCard({ name: 'wugu' }, result.targets);
                                        }
                                    },
                                },
                            },
                            ai: {
                                order: 7.5,
                                expose: 0.2,
                            },
                        },
                        xu_bingzheng: {
                            trigger: {
                                global: ['useSkillAfter', 'logSkill'],
                            },
                            logTarget: 'target',
                            usable: 1,
                            filter(event, player) {
                                //     if(event.type!='player') return false;
                                if (
                                    game.countPlayer(function (current) {
                                        return !current.hasSkill(event.skill) && player.hasSkill(event.skill);
                                    })
                                )
                                    return false;
                                if (event.player == player) return false;
                                var skill = event.skill;
                                var info = get.info(skill);
                                if (!info) return false;
                                if (info.forced) return false;
                                var skills = event.player.getOriginalSkills();
                                if (skills.includes(skill)) return true;
                                for (var s of skills) {
                                    var info = get.info(s);
                                    if (info && info.subSkill) {
                                        for (var i in info.subSkill) {
                                            if (s + '_' + i == skill) {
                                                return true;
                                            }
                                        }
                                    }
                                }
                                return false;
                            },
                            prompt: '是否发动【秉正】？',
                            prompt2(event) {
                                return '令一名友方角色获得【' + get.translation(event.skill) + '】';
                            },
                            content() {
                                'step 0';
                                player.chooseTarget('选择一名友方角色,令其获得【' + get.translation(trigger.skill) + '】', function (card, player, target) {
                                    if (target.hasSkill(trigger.skill)) return false;
                                    return player.isFriendsOf(target);
                                });
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].addTempSkill(trigger.skill, { player: 'phaseAfter' });
                                    event.target = result.targets[0];
                                    _status.imchoosing = true;
                                } else event.finish();
                                ('step 2');
                                var skills = target.getSkills(null, false, false).filter((skill) => {
                                    var info = get.info(skill);
                                    if (info.equipResult && target.awakenedSkills.includes(skill)) return false;
                                    return true;
                                });
                                skills.remove('xu_bingzheng');
                                skills.remove('xu_sheyan');
                                player
                                    .chooseControl(skills, 'cancel')
                                    .set('dialog', ['<div class="text center">请选择要发动的技能</div>'])
                                    .set('ai', function () {
                                        return skills.randomGet();
                                    });
                                ('step 3');
                                var skill = result.control;
                                event.skill = skill;
                                var info = get.info(event.skill);
                                if (info && info.filterTarget) {
                                    if (info.filterCard) {
                                        var next = target.chooseCardTarget();
                                        next.selectTarget = info.selectTarget;
                                        if (info.filterTarget == true) next.filterTarget = () => true;
                                        else next.filterTarget = info.filterTarget;
                                        next.selectCard = info.selectCard;
                                        if (info.filterCard == true) next.filterCard = () => true;
                                        else next.filterCard = info.filterCard;
                                    } else {
                                        var next = target.chooseTarget();
                                        next.selectTarget = info.selectTarget;
                                        if (info.filterTarget == true) next.filterTarget = () => true;
                                        else next.filterTarget = info.filterTarget;
                                    }
                                } else {
                                    if (info.filterCard) {
                                        var next = target.chooseCard();
                                        next.selectCard = info.selectCard;
                                        if (info.filterCard == true) next.filterCard = () => true;
                                        else next.filterCard = info.filterCard;
                                    }
                                }
                                ('step 4');
                                if (result.bool) {
                                    event.cards = result.cards;
                                    event.targets = result.targets;
                                } else event.finish();
                                ('step 5');
                                var next = game.createEvent(event.skill, false);
                                next.player = target;
                                if (event.cards) next.cards = event.cards;
                                if (event.targets) {
                                    next.targets = event.targets;
                                    next.target = event.targets[0];
                                }
                                next.setContent(lib.skill[event.skill].content);
                            },
                        },
                        xu_wusheng: {
                            trigger: {
                                player: 'useCard',
                                target: 'useCardToTargeted',
                            },
                            round: 1,
                            group: 'xu_wusheng_sha',
                            filter(event, player) {
                                return get.tag(event.card, 'damage') > 0;
                            },
                            forced: true,
                            init(player) {
                                var check = function (list) {
                                    for (var i = 0; i < list.length; i++) {
                                        var info = lib.skill[list[i]];
                                        if (info && info.shaRelated) return true;
                                        if (info && info.trigger) {
                                            for (var j in info.trigger) {
                                                var cond = info.trigger[j];
                                                if (typeof cond == 'string') {
                                                    cond = [cond];
                                                }
                                                if (j == 'player' || j == 'global') {
                                                    if (cond.includes('shaBefore')) return true;
                                                    if (cond.includes('shaBegin')) return true;
                                                    if (cond.includes('shaEnd')) return true;
                                                    if (cond.includes('shaAfter')) return true;
                                                }
                                                if (j == 'source' || j == 'global') {
                                                    if (cond.includes('damageBefore')) return true;
                                                    if (cond.includes('damageBegin')) return true;
                                                    if (cond.includes('damageBegin1')) return true;
                                                    if (cond.includes('damageBegin2')) return true;
                                                    if (cond.includes('damageEnd')) return true;
                                                    if (cond.includes('damageSource')) return true;
                                                    if (cond.includes('damageAfter')) return true;
                                                }
                                            }
                                        }
                                    }
                                    return false;
                                };
                                player.storage.xu_wusheng = get.gainableSkills(function (info, skill) {
                                    var list = [skill];
                                    game.expandSkills(list);
                                    return check(list);
                                }, player);
                            },
                            content() {
                                var list = player.storage.xu_wusheng.slice(0);
                                var link = list.randomGet();
                                player.addAdditionalSkill('xu_wusheng', link);
                                trigger.xu_wusheng = true;
                                player.popup(link);
                                game.log(player, '获得了技能', '【' + get.translation(link) + '】');
                            },
                            subSkill: {
                                sha: {
                                    mod: {
                                        cardUsable(card, player, num) {
                                            if (card.name == 'sha' && !card.isCard) return Infinity;
                                        },
                                    },
                                    enable: ['chooseToRespond', 'chooseToUse'],
                                    filterCard(card, player) {
                                        if (get.zhu(player, 'shouyue')) return true;
                                        return get.color(card) == 'red';
                                    },
                                    position: 'h',
                                    viewAs: {
                                        name: 'sha',
                                    },
                                    viewAsFilter(player) {
                                        if (get.zhu(player, 'shouyue')) {
                                            if (!player.countCards('h')) return false;
                                        } else {
                                            if (!player.countCards('h', { color: 'red' })) return false;
                                        }
                                    },
                                    prompt: '将一张红色手牌当杀使用或打出',
                                    check(card) {
                                        var val = get.value(card);
                                        if (_status.event.name == 'chooseToRespond') return 1 / Math.max(0.1, val);
                                        return 5 - val;
                                    },
                                    ai: {
                                        respondSha: true,
                                        skillTagFilter(player) {
                                            if (get.zhu(player, 'shouyue')) {
                                                if (!player.countCards('h')) return false;
                                            } else {
                                                if (!player.countCards('h', { color: 'red' })) return false;
                                            }
                                        },
                                    },
                                },
                            },
                        },
                        xu_duorui: {
                            trigger: {
                                source: 'damageSource',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.player == player) return false;
                                if (event.player.isDead()) return false;
                                var list = event.player.getSkills(null, false, false);
                                var list1 = [];
                                for (var i of list) {
                                    if (list.includes(i) && !event.player.awakenedSkills.includes(i)) list1.add(i);
                                }
                                if (list1.length < 1) return false;
                                return true;
                            },
                            content() {
                                //QQQ
                                'step 0';
                                var list1 = trigger.player.getSkills(null, false, false);
                                var list2 = [];
                                for (var i of list1) {
                                    if (list1.includes(i) && !trigger.player.awakenedSkills.includes(i)) list2.add(i);
                                }
                                if (list2.length)
                                    player
                                        .chooseControl(list2)
                                        .set('prompt', '选择' + get.translation(trigger.player) + '武将牌上的一个技能并令其失效')
                                        .set('ai', function () {
                                            return list2.randomGet();
                                        });
                                else event.finish();
                                ('step 1');
                                var skill = result.control;
                                trigger.player.disableSkill('xu_duorui_' + player.playerid, skill);
                                player.addSkill(skill);
                                game.log(player, '获得了', trigger.player, '#g【' + get.translation(skill) + '】');
                            },
                        },
                        xu_zhiti: {
                            trigger: { global: ['respond', 'useCard'] },
                            forced: true,
                            filter(event, player) {
                                if (player == event.player) return false;
                                if (!event.player.isDamaged()) return false;
                                if (event.player.countCards('he') < 0) return false;
                                return true;
                            },
                            content() {
                                trigger.player.chooseToDiscard(true, 'he');
                            },
                        },
                    },
                };
                lib.config.all.characters.add('虚界');
                lib.config.characters.add('虚界');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:虚界/image/${i}.jpg`);
                }
                lib.translate['虚界_character_config'] = `虚界`;
                return QQQ;
            });
        },
        config: {
            //Q群复制
            copyQq: {
                name: "<span style='font-family: yuanli'>交流群:105822182</span>   <span style='font-family: yuanli'>点击复制</span></font>",
                clear: true,
                onclick() {
                    const textarea = document.createElement('textarea');
                    textarea.setAttribute('readonly', 'readonly');
                    textarea.value = '105822182';
                    document.body.appendChild(textarea);
                    textarea.select();
                    if (document.execCommand('copy')) {
                        document.execCommand('copy');
                        alert('已复制到剪贴板');
                    } else alert('复制失败,再试试');
                    document.body.removeChild(textarea);
                },
            },
            GXNR: {
                name: '<div class="langqintianque">更新内容「查看」',
                clear: true,
                onclick() {
                    if (this.GXNR == undefined) {
                        var more = ui.create.div('.GXNR', '<div style="border:2px solid gray"><P align=left>2023.8.28<br>新增武将:管宁,梁兴,朱然<br>调整武将:凌统,许攸<b></b><P align=left>ps:管宁只是充数的<br>本扩展现已停更,此版本为九月多的开发版本新角色都处于未完全状态,如有bug请用之前的版本');
                        this.parentNode.insertBefore(more, this.nextSibling);
                        this.GXNR = more;
                        this.innerHTML = '<div class="langqintianque">更新内容「关闭」<font size="4px">';
                    } else {
                        this.parentNode.removeChild(this.GXNR);
                        delete this.GXNR;
                        this.innerHTML = '<div class="langqintianque">更新内容「已读」<font size="4px">';
                    }
                },
            },
            KZJS: {
                name: '<div class="langqintianque">扩展介绍「查看」',
                clear: true,
                onclick() {
                    if (this.KZJS == undefined) {
                        var more = ui.create.div('.KZJS', '<div style="border:2px solid gray"><P align=left>作者:虚<br>扩展版本:1.81？<br><li>本扩展部分将强度可能偏高,导致不太平衡,想要玩到平衡的将,加群下载联机包(？');
                        this.parentNode.insertBefore(more, this.nextSibling);
                        this.KZJS = more;
                        this.innerHTML = '<div class="langqintianque">扩展介绍「关闭」<font size="4px">';
                    } else {
                        this.parentNode.removeChild(this.KZJS);
                        delete this.KZJS;
                        this.innerHTML = '<div class="langqintianque">扩展介绍「已读」<font size="4px">';
                    }
                },
            },
            xujie_wjname: {
                name: '<b><font color="#DCDCDC">前缀隐藏',
                intro: '<b><font color="#DCDCDC">是隐藏武将前缀',
                init: false,
            },
        },
        package: {
            intro: "<span style='font-family: yuanli'>鸣谢:@www 为本扩展提供的露头素材</span><br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
            author: "<span style='color: white'>虚虚仙人",
            version: '1.30',
        },
    };
});
