import { lib, game, ui, get, ai, _status } from '../../noname.js'
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '武将新生',
        content(config, pack) {
            lib.translate.fuce_yuzhouguo_backup = '付策';
            lib.translate.qingxue_moulvmeng_append = '<li>明武:锁定技,当你使用或打出一张基本牌结算后,你进行一次判定:黑色,你摸一张牌;红色,你从弃牌堆中获得此牌</li><li>习谋:锁定技,当你使用或打出一张锦囊牌时,你令至多两名角色摸一张牌</li><li>观心:每回合限一次,当你使用或打出一张牌时,你可以进行一次判定:黑色,你观看一名角色的手牌并弃置其中一张牌;红色,你从弃牌堆中获得一张同花色的牌</li>';
            lib.dynamicTranslate.wushuang_wjxs = function (player) {
                var list = player.storage.wushuang_wjxs;
                var str = '';
                for (var i = 0; i < list.length; i++) {
                    if (str == '') str = get.translation(list[i]) + '/';
                    else str = str + get.translation(list[i]) + '/';
                }
                return `<li>①当你于回合外成为一张牌的目标时,你可进行一次判定:若为${str},此牌对你无效,否则你摸一张牌</li><li>②出牌阶段你可以将一张锦囊牌当作【决斗】使用.若你以此法造成了伤害,则你回复一点体力</li>`;
            };
            lib.dynamicTranslate.pinjian_wjxs = function (player) {
                if (player.storage.bihuo_wjxs) return '你可以于以下时机发动<评荐>:准备阶段;出牌阶段限X次;结束阶段;当你受到伤害后.若如此做,从所有武将中随机出现5张拥有此时机可发动技能的武将牌,你选择其中一个武将并发动其技能.每个技能只能发动一次(X为已损失体力值,且至少为一)';
                else return '你可以于以下时机发动<评荐>:准备阶段;出牌阶段限X次;结束阶段;当你受到伤害后.若如此做,从所有武将中随机出现3张拥有此时机可发动技能的武将牌,你选择其中一个武将并发动其技能.每个技能只能发动一次(X为已损失体力值,且至少为一)';
            };
            lib.dynamicTranslate.shehun_wjxs = function (player) {
                return `本局游戏限${get.cnNumber(player.storage.shehun_wjxs)}次,当一名角色死亡后,你可以选择其中一项<li>①获得其一个技能</li><li>②展示三张拥有限定技的武将牌,选择其中一个限定技并获得之</li><li>③展示五张拥有觉醒技的武将牌,选择其中一个觉醒技并获得之</li>当你进入濒死状态后,此技能次数加一`;
            };
        },
        precontent() {
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '武将新生',
                    connect: true,
                    character: {
                        guojia_yuzhou: ['male', 'wei', 4, ['jingji_yuzhouguo', 'fuce_yuzhouguo', 'jizhiyuzhouguo'], []],
                        张梁: ['male', 'qun', 4, ['fangjun_spzhangliang', 'rengong_spzhangliang', 'hantian_spzhangliang'], []],
                        界刘琦: ['male', 'qun', 4, ['问计', '屯江', '嗣祸'], []],
                        审配: ['male', 'qun', '3/5', ['sisho_Angel', 'fushe_Angel', 'mianbei_Angel'], []],
                        辉马超: ['male', 'shen', 5, ['HUI_weichi', 'HUI_shenshou', 'HUI_liju'], []],
                        魂貂蝉: ['female', 'shen', 3, ['傀将', '娇魅', '迷魂'], []],
                        傀儡董卓: ['male', 'qun', 5, ['肉林', '酒池'], []],
                        傀儡吕布: ['male', 'qun', 3, ['纵横', '无双'], []],
                        moulvmeng_fqsg: ['male', 'wu', 4, ['qingxue_moulvmeng'], []],
                        zuoci_jiere: ['male', 'qun', 4, ['huashen_rejie', 'xinshen_rejie'], []],
                        wujiangxinshen_lvbu: ['male', 'qun', 5, ['jiangshou', 'wushuang_wjxs', 'sheji_wjxs'], []],
                        xushao_re: ['male', 'qun', 4, ['pinjian_wjxs', 'bihuo_wjxs'], []],
                        wjxs_caiwenji: ['female', 'qun', '3/4', ['aigewjxs', 'qinyin_wjxs'], []],
                        wjxs_liuyan: ['male', 'qun', 3, ['limu_wjxs', 'luanzong_wjxs', 're_tushe'], []],
                        sunshiwan_wjxs: ['male', 'wu', '4/6', ['gujiang_shiwan', 'quanhen_shiwan', 'tayang_sunshiwan'], []],
                        libai_wjxs: ['male', 'qun', 4, ['shixian_wjxs', 'zuishu_wjxs'], []],
                        niumalaoxian_wjxs: ['male', 'qun', '3/6', ['shehun_wjxs', 'nixing_wjxs'], []],
                        caorui_fqsg: ['male', 'wei', 3, ['wenyu_fqsg', 'zhudian_fqsg', 'fayuan_fqsg', 'tuliao_fqsg'], []],
                        曹丕: ['male', 'wei', 4, ['放逐', '颂威', '行殇'], []],
                        wjxsnew_xushao: ['male', 'qun', 4, ['zengming_wjxs', 'binan_wjxs'], []],
                        re_caoang: ['male', 'wei', 4, ['re_kangkai', 'jinwei_jing_main'], []],
                        shendongzhuo: ['male', 'shen', 6, ['yuquan_sdz', 'luanshi_sdz'], []],
                        'H-machao': ['male', 'shen', 4, ['H-shichou', 'H-tieji', 'H-mashu'], []],
                        zhangfei_Angel: ['male', 'qun', 4, ['zengcai_Angel', 'jieyi_Angel'], []],
                        wjxs_zhanghe: ['female', 'wei', 4, ['zhuiyuanwjxs', 'qiaobianwjxs'], []],
                        wjxs_miheng: ['female', 'qun', 3, ['kuangcaiwjxs', 'shejianwjxs'], []],
                        wenji_wjxs: ['female', 'qun', 4, ['zhizuo_xishan', 'zhizuo_xidao'], []],
                        wjxsmou_lvbu: ['male', 'qun', 6, ['moulvbu_wushuang', 'moulvbu_zhengmeng'], []],
                    },
                    translate: {
                        guojia_yuzhou: '郭嘉',
                        张梁: '张梁',
                        界刘琦: '界刘琦',
                        审配: '审配',
                        辉马超: '辉马超',
                        魂貂蝉: '魂貂蝉',
                        傀儡董卓: '傀儡董卓',
                        傀儡吕布: '傀儡吕布',
                        moulvmeng_fqsg: '谋吕蒙',
                        zuoci_jiere: '界左慈',
                        wujiangxinshen_lvbu: '吕布',
                        xushao_re: '界许劭',
                        wjxs_caiwenji: '蔡文姬',
                        wjxs_liuyan: '刘焉',
                        sunshiwan_wjxs: '神孙权',
                        libai_wjxs: '李白',
                        niumalaoxian_wjxs: '南华老仙',
                        caorui_fqsg: '曹睿',
                        曹丕: '曹丕',
                        wjxsnew_xushao: '☆许劭',
                        re_caoang: '曹昂',
                        shendongzhuo: '神董卓',
                        'H-machao': '马超',
                        zhangfei_Angel: '张飞',
                        wjxs_zhanghe: '张郃',
                        wjxs_miheng: '祢衡',
                        wenji_wjxs: '问计一万箭',
                        wjxsmou_lvbu: '谋吕布',
                        jingji_yuzhouguo: '锦计',
                        jingji_yuzhouguo_info: '锁定技,准备阶段你须展示牌堆顶的三张牌,你将其中的红色牌至于武将牌上,称为<锦计>.',
                        fuce_yuzhouguo: '付策',
                        fuce_yuzhouguo_info: "①锁定技,当你于回合外发动【胜策】时,你摸一张牌②出牌阶段限一次,你可以将一张<锦计>交给一名角色并称为'锦',你从牌堆中获得一张指定类型的牌,你的'锦'不计入手牌上限且使用不限次数",
                        shengce_yuzhouguo: '胜策',
                        shengce_yuzhouguo_info: '你可以将一张手牌中的<锦>当作无懈可击/诱敌深入/任意基本牌使用或打出',
                        jizhiyuzhouguo: '集智',
                        jizhiyuzhouguo_info: '游戏开始时,你令所有角色获得【胜策】',
                        fangjun_spzhangliang: '方军',
                        fangjun_spzhangliang_info: '准备阶段你获得a-b枚<方>.出牌阶段你可以弃置一枚<方>并选择以下一项:①摸c/d张牌(向下取整)2对一名角色造成e点伤害③本回合手牌上限加f/0(向上取整)(每个选项每回合只能选一次,若计算为负数则视为零.a为场上人数,b为全场最低体力值,c为全场最高体力值,d为全场体力值总和,e为你失去体力值,f为全场手牌数)',
                        fangjun_spzhangliang2: '方军',
                        fangjun_spzhangliang2_info: '',
                        rengong_spzhangliang: '人公',
                        rengong_spzhangliang_info: '每回合限一次,你可以弃置x枚<方>,令一名角色弃置y-Z张牌(X为你失去体力值的二次方,未失去则不用置.,y为场上技能数,z为场上人数)',
                        hantian_spzhangliang: '撼天',
                        hantian_spzhangliang_info: '觉醒技,准备阶段若场上人数小于4,则你更改<方军>',
                        屯江: '屯江',
                        屯江_info: '一名角色的结束阶段开始时,若该角色未跳过本回合的出牌阶段,且其于本回合出牌阶段内未对其他角色造成过伤害,则你可以令其摸X张牌,下回合出牌阶段其出杀次数＋1(X为全场势力数).',
                        问计: '问计',
                        嗣祸: '嗣祸',
                        嗣祸_info: '一名角色的准备阶段,其可以与你进行拼点:若你赢,你摸X张牌且其成为你下次发动<问计>的额外目标;若你没赢,其本回合使用红色【杀】无次数限制.(X为全场势力数)',
                        问计_info: '出牌阶段开始时,你可以令至多两名其他角色交给你一张牌:若两张牌类型相同,你于本回合内使用与该类型的牌不能被其他角色响应且伤害＋1;若两张牌类型不同,你于本回合内使用与这两张⺁牌类型相同的牌不能被其他角色响应',
                        折梯: '折梯',
                        折梯_info: '出牌阶段限一次,你可令一名角色选择:①本回合不可使用或打出牌②交给你两张牌',
                        sisho_Angel: '死守',
                        sisho_Angel_info: '准备阶段你可以失去一点体力, 本回合摸牌阶段你额外摸X张牌,本回合你将手牌上限调整为X (X为你已损失体力值)',
                        fushe_Angel: '伏射',
                        fushe_Angel_info: '出牌阶段限一次,你可以减一点体力上限视为使用一张【万箭齐发】.若你以此法造成了Y点伤害,则你将体力上限调整至5(Y为你的体力上限)',
                        mianbei_Angel: '面北',
                        mianbei_Angel_info: '①当你进入濒死状态时,你可令一名不为你的角色回复一点体力②当你死亡后,你可令一名角色增加一-点体力上限',
                        HUI_zhuhan: '助汉',
                        HUI_zhuhan_info: '出牌阶段你的出杀次数上限+1,且你的杀可以额外指定一名目标',
                        HUI_weichi: '威驰',
                        HUI_weichi_info: '当你用杀指定一名目标时,你可以进行判定:若结果不为♥️️,则令其非锁定技失效且不可响应此杀;若为♥️️,则你视为拥有【助汉】直至下回合开始).',
                        HUI_shenshou: '神狩',
                        HUI_shenshou_info: '锁定技;①当场上装备数量出现变动时,你摸一张牌,②当你使用或打出牌时,若你没有该花色的手牌,你摸X张牌(X为场上与此牌颜色相同的装备数量).',
                        HUI_liju: '利驹',
                        HUI_liju_info: '游戏开始时,你废除装备栏,获得【飞影】【马术】且可以重铸坐骑牌.',
                        傀将: '傀将',
                        傀将_info: '本局游戏限两次,若你的魂标记大于等于二,则你可以弃置两枚〈魂〉标记或两张牌在你的下家或上家制造一个〈傀儡.吕布〉/〈傀儡.董卓〉;锁定技,傀儡的回合由你操控',
                        娇魅: '娇魅',
                        娇魅_info: '锁定技,摸牌阶段你多摸x张牌,手牌上限加y(X为场上男性人数Y为场上女性人数)',
                        迷魂: '迷魂',
                        迷魂_info: '锁定技,每当你成为一张牌的目标时你获得一枚〈魂〉标记并摸一张牌',
                        纵横: '纵横',
                        纵横_info: '你可以将一张基本牌当杀使用或打出,你可以将一张锦囊牌当决斗使用',
                        无双: '无双',
                        无双_info: '锁定技,当你使用【杀】或【决斗】指定目标后,你令此牌需要依次使用或打出两张【闪】或【杀】响应.锁定技,当你造成伤害的时候,你和貂蝉各摸一张牌.',
                        肉林: '肉林',
                        肉林_info: '锁定技.你对女性角色、女性角色对你使用【杀】时,都需连续使用两张【闪】才能抵消.你对女性角色伤害造成伤害加一.',
                        酒池: '酒池',
                        酒池_info: '你可以将一张黑色手牌当作【酒】使用.锁定技,你使用酒没有次数限制',
                        qingxue_moulvmeng: '勤学',
                        qingxue_moulvmeng_info: '锁定技,①准备阶段你获得一枚护甲,你的手牌上限+X(X为你的护甲数)②你使用牌时,若花色未被记录,记录此花色.当你记录四枚花色时,你清除记录的花色并选择以下一个技能获得之,若已获得所有技能则改为摸四张牌',
                        minwu_fqsg: '明武',
                        minwu_fqsg_info: '锁定技,当你使用或打出一张基本牌结算后,你进行一次判定:黑色,你摸一张牌;红色,你从弃牌堆中获得此牌',
                        ximou_fqsg: '习谋',
                        ximou_fqsg_info: '锁定技,当你使用或打出一张锦囊牌时,你令至多两名角色摸一张牌',
                        guanxin_fqsg: '观心',
                        guanxin_fqsg_info: '每回合限一次,当你使用或打出一张牌时,你可以进行一次判定:黑色,你观看一名角色的手牌并弃置其中一张牌;红色,你从弃牌堆中获得一张同花色的牌',
                        huashen_rejie: '化身',
                        huashen_rejie_info: '游戏开始时,你获得五张武将牌,亮出其中一张.你获得亮出<化身>的一个技能且性别和势力视为与<化身>相同.回合开始或结束时,你可以选择一项:1、更改亮出的<化身>;2、移去任意张<化身>并获得等量新的<化身>.',
                        huashen_rejie_init: 'huashen_rejie_init',
                        huashen_rejie_init_info: '',
                        xinshen_rejie: '新生',
                        xinshen_rejie_info: '当你受到1点伤害后,你可以获得一张新的<化身>,摸一张牌.',
                        jiangshou: '将首',
                        jiangshou_info: '游戏开始时,若你的身份为主公或地主,你失去一点体力上限,并使你每个准备阶段从牌堆获得一张杀',
                        wushuang_wjxs: '无双',
                        wushuang_wjxs_info: '<li>①当你于回合外成为一张牌的目标时,你可进行一次判定:若为J/Q/K,此牌对你无效,否则你摸一张牌</li><li>②出牌阶段你可以将一张锦囊牌当作【决斗】使用.若你以此法造成了伤害,则你回复一点体力</li>',
                        sheji_wjxs: '射戟',
                        sheji_wjxs_info: '锁定技,出牌阶段你使用的第一张杀无距离限制且不计入次数.若此杀造成了伤害,则你增加<无双①>的一个点数',
                        pinjian_wjxs: '评荐',
                        pinjian_wjxs_info: '你可以于以下时机发动<评荐>:准备阶段;出牌阶段限X次;结束阶段;当你受到伤害后.若如此做,从所有武将中随机出现三张拥有此时机可发动技能的武将牌,你选择其中一个武将并发动其技能.每个技能只能发动一次(X为已损失体力值,且至少为一)',
                        pinjian_re_use: '评荐',
                        pinjian_re_use_info: '',
                        bihuo_wjxs: '避祸',
                        bihuo_wjxs_info: '觉醒技,当你进入濒死状态时,你失去一点体力上限并回复所有体力,你将<评荐>的描述改为<五张拥有此时机可发动技能的武将牌>',
                        aige_wjxs1: '哀歌',
                        aige_wjxs1_info: '',
                        aigewjxs: '哀歌',
                        aigewjxs_info: '准备阶段你可以选择X种花色.本回合你使用此颜色的牌无次数距离限制;使用此花色的牌时你摸一张牌(X为你已损失体力值,且至少为一)',
                        qinyin_wjxs: '琴音',
                        qinyin_wjxs_info: '出牌阶段当你首次使用了四张不同花色的手牌时,你可以选择X项:<li>①发动一次<哀歌></li><li>②摸X张牌</li><li>③令一名角色非锁定技失效直至回合结束</li><li>④弃置一名角色X张牌</li>',
                        limu_wjxs: '立牧',
                        limu_wjxs_info: '出牌阶段限一次,你可以将一张牌当作任意延时锦囊牌对自己使用,你回复所有体力;你的判定区内有牌时,你使用牌无次数距离限制.',
                        luanzong_wjxs: '乱宗',
                        luanzong_wjxs_info: '出牌阶段限x次,你可以将2张牌当作【杀】使用或打出.若你以此法造成了伤害,你从牌堆中获得一张锦囊牌(X为你的体力值)',
                        luanzong_wjxs1: '乱宗',
                        luanzong_wjxs1_info: '',
                        gujiang_shiwan: '固江',
                        gujiang_shiwan_info: '准备阶段你可以进入横置状态,若如此做,本回合发动<驭衡>后你使用与选择颜色不同的牌无次数限制.',
                        quanhen_shiwan: '驭衡',
                        quanhen_shiwan_info: '出牌阶段限一次,你可以选择一种颜色,弃置所有该颜色的手牌并摸等量的牌,且本回合你计算与其他角色的距离-X.(X为以此法弃置牌数)',
                        tayang_sunshiwan: '踏洋',
                        tayang_sunshiwan_info: '转换技,出牌阶段限一次.阳,你可以回复一点体力并摸两张牌.阴,你可以失去一点体力并视为对你攻击范围内的所有角色使用一张【杀】.',
                        gujiang_shiwan1: '固江',
                        gujiang_shiwan1_info: '',
                        quanhen_shiwan1: '驭衡',
                        quanhen_shiwan1_info: '',
                        quanhen_shiwan2: '驭衡',
                        quanhen_shiwan2_info: '',
                        re_tushe: '图射',
                        re_tushe_info: '当你使用非装备牌指定目标后,若你没有基本牌,则你可以摸X张牌.(X为此牌指定的目标数)',
                        shixian_wjxs: '诗仙',
                        shixian_wjxs_info: '锁定技,出牌阶段当你使用一张牌时,若你本回合未使用过此花色的牌,你摸一张牌并获得一枚 <诗>.当你使用[杀]指定一-名目标时,你可以移去至多四枚<诗>并依次执行以下效果:<li>①不小于一枚:弃置其一张牌</li><li>②不小于两枚:获得其一张牌</li><li>③不小于三枚:此[杀]不计入次数</li><li>④四枚:此[杀]需要使用X张[闪]抵消</li>(X为你与其手牌差,且至少为一)',
                        zuishu_wjxs: '醉书',
                        zuishu_wjxs_info: '你可以跳过你的摸牌阶段.若如此做,你随机获得两张黑色牌并使你本回合你使用[酒]无次数限制,且当你使用黑色牌时视为使用一张[酒].',
                        shehun_wjxs: '摄魂',
                        shehun_wjxs_info: '本局游戏限一次,当一名角色死亡后,你可以选择其中一项 <li>①获得其一个技能</li> <li>②展示三张拥有限定技的武将牌,选择其中一个限定技并获得之</li> <li>③展示五张拥有觉醒技的武将牌,选择其中一个觉醒技并获得之</li> 当你进入濒死状态后,此技能次数加一',
                        nixing_wjxs: '匿形',
                        nixing_wjxs_info: '锁定技,准备阶段,或当你即将受到一点伤害时,你随机获得"看破","鬼才","集智","天妒","雷击","遗计","英姿","急救","火计","连营","连环","伤逝","智迟","矢北","无言","反馈","放逐","刚烈","制衡","克己","攻心","观星"中的一个技能直至你的下回合结束.',
                        wenyu_fqsg: '稳御',
                        wenyu_fqsg_info: '锁定技,当你受到一点伤害后,你进行一次判定:<li>黑色,增加一点体力上限(不可超过10)</li><li>回复一点体力</li>',
                        zhudian_fqsg: '筑殿',
                        zhudian_fqsg_info: '出牌阶段限一次,你可以弃置任意张牌并选择至多三名角色,你与其各受到一点伤害,各摸X张牌(X为弃牌数-选择数,小于0则不摸)',
                        fayuan_fqsg: '伐渊',
                        fayuan_fqsg_info: '本局游戏限2次,结束阶段你可以弃置所有手牌并指定一名目标,你展示牌堆顶X张牌,并依次对其使用其中可使用的牌,你获得剩下的牌(X为你的体力上限,且至少为六)',
                        tuliao_fqsg: '图辽',
                        tuliao_fqsg_info: '主公技,当你发动<伐渊>时,x加2',
                        放逐: '放逐',
                        放逐_info: '当你受到一点伤害后,你选择X项: ①令一名角色翻面 ②发动一次<颂威> ③视为使用X张【杀】(无视距离) (X为你已损失体力值)',
                        颂威: '颂威',
                        颂威_info: '出牌阶段限一次,你令所有角色选择交给你一张牌或弃置一张牌.',
                        行殇: '行殇',
                        行殇_info: '锁定技,当一名角色死亡时,你选择一项: ①增加一点体力上限并回复一点体力 ②获得其一个技能 ③获得其所有牌',
                        zengming_wjxs: '赠名',
                        zengming_wjxs_info: '出牌阶段限一次,你可以摸一张牌并交给一名其他角色一张牌,若此牌点数为: <li>1~5,你与其各摸一-张牌</li> <li>6~10,你与其各摸两张牌</li> <li>J、Q、K,你与其各摸三张牌.</li> 你展示六张与其同势力的武将牌,你选择其中至多X张并获得对应的所有技能直至你下一次发动此技能(X为本回合你以此法摸牌数)',
                        binan_wjxs: '避南',
                        binan_wjxs_info: '锁定技,当你受到伤害后,其他角色与你计算距离+X直至你的回合开始.若不为本轮第一次发动此技能,你选择移动场上一张牌或摸两张牌(X为场上人数)',
                        re_kangkai: '慷慨',
                        re_kangkai_info: '当一名角色成为【杀】的目标后,若你至该角色的距离为1,你可以摸一张牌.若如此做,你交给其一张牌并展示之,该角色可以使用此牌.',
                        jinwei_jing_main: '佑父',
                        jinwei_jing_main_info: '准备阶段,你可以选择一名角色令你与其距离始终为1直至你的下回合开始',
                        jinwei_jing_add: '掌控',
                        jinwei_jing_add_info: '',
                        luanshi_sdz: '乱世',
                        luanshi_sdz_info: '限定技,出牌阶段,或当你死亡时,你可以将所有角色的胜利条件改为<击杀除你以外的所有角色>',
                        yuquan_sdz: '御权',
                        yuquan_sdz_info: '锁定技,一名其他角色的回合结束后,你进行一个额外的回合',
                        嗣祸3: 'undefined',
                        嗣祸3_info: 'undefined',
                        'H-shichou': '誓仇',
                        'H-shichou_info': '游戏开始时,你获得一枚【仇】.出牌阶段你可以交给一名其他角色一枚【仇】你摸三张牌,你对有此标记的角色造成的伤害改为减少等量体力上限.当有【仇】的其他角色死亡后,你获得一枚【仇】',
                        'H-tieji': '铁骑',
                        'H-tieji_info': '当你使用【杀】指定目标时,可以使其非锁定技失效且不可响应此【杀】,若其有【仇】标记,则此伤害加一',
                        'H-mashu': '马术',
                        'H-mashu_info': '锁定技;准备阶段开始时,你选择一项:<br>①从牌堆中获得一张坐骑牌,<br>②从牌堆中获得一张【杀】',
                        zengcai_Angel: '赠财',
                        zengcai_Angel_info: '准备阶段你可以摸X张牌,若你手牌数大于体力上限,你需交给至多两名角色至少共两张牌.若你发动此技能后手牌数小于等于体力上限,你从牌堆中随机获得一张装备牌 (X为场上人数,且至多为五)',
                        jieyi_Angel: '结义',
                        jieyi_Angel_info: '觉醒技,结束阶段若你于本局游戏因<赠财>获得了至少三张装备牌,则你失去<赠财>并获得<招兵>,你进行一个额外的回合',
                        zhaobing_Angel: '招兵',
                        zhaobing_Angel_info: '锁定技,你的【杀】不计入手牌上限;当你于出牌阶段使用一张【杀】时,若你的手牌数大于体力上限,则此【杀】不计入次数,否则你摸一张牌',
                        zhuiyuanwjxs: '援追',
                        zhuiyuanwjxs_info: '当一名其他角色受到伤害后,你可以交给其一张牌并将伤害来源的至多X张牌置于你的武将牌上,称为<援>.准备阶段,若你的<援>数大于体力值,你失去一点体力并视为使用一张【杀】.',
                        qiaobianwjxs: '巧变',
                        qiaobianwjxs_info: '出牌阶段,你可以交给一名手牌上限不为一的角色一张<援>,其手牌上限-1直至下回合开始.结束阶段,你可以令一名本回合成为过此技能目标的角色额外进行一个由你选择的阶段',
                        kuangcaiwjxs: '狂才',
                        kuangcaiwjxs_info: '出牌阶段开始时,你可以选择本回合使用牌无次数距离限制,且当你失去牌时你摸一张牌.若如此做,结束阶段,所有本回合受到过伤害的角色可以弃一张牌并对你造成一点伤害.',
                        shejianwjxs: '舌剑',
                        shejianwjxs_info: '1你的拼点牌点数+X(X为本回合你造成伤害数)2当你受到伤害后,你摸一张牌,可以与伤害来源拼点:你赢,你回复一点体力并获得其的拼点牌;你没赢,你弃置其一张牌.',
                        zhizuo_xishan: '喜膳',
                        zhizuo_xishan_info: '当一名其他角色使用非伤害类牌时,你可以将此牌的目标改为你,若不为本回合首次发动此技能,你选择失去一点体力或交给其一张牌.',
                        zhizuo_xidao: '檄刀',
                        zhizuo_xidao_info: '出牌阶段限三次,你可以摸一张牌并将一张牌置于一名其他角色的武将牌上(称为<檄>),其不可以使用或打出与<檄>类型相同的牌,若其武将牌上有至少三张不同类型<檄>,则其非锁定技失效.一名角色的准备阶段,若其武将牌上有<檄>,则其可以交给你任意张牌并移去等量的<檄>.',
                        moulvbu_wushuang: '无双',
                        moulvbu_wushuang_info: '当你使用【杀】指定一名目标后,你可以选择获得目标角色一张手牌或摸一张牌,若获得的牌为【杀】,你可以使用之(无次数距离限制);当你成为【杀】的目标后,你可以获得此牌来源一张牌,你可以使用一张牌,若造成了伤害,则此【杀】对你无效.',
                        moulvbu_zhengmeng: '震盟',
                        moulvbu_zhengmeng_info: '准备阶段,你可以选择本回合摸牌阶段多摸x张牌(X为你的攻击距离,且至多为四),使用【杀】次数+1且可以额外指定两名目标;出牌阶段结束时,若本回合没有角色死亡,你跳过弃牌阶段并失去体力至仅剩一点.',
                    },
                    skill: {
                        jingji_yuzhouguo: {
                            audio: 'shuishi',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            forced: true,
                            content() {
                                var card = get.cards(3);
                                var list = [];
                                player.showCards(card);
                                for (var i = 0; i < card.length; i++) {
                                    if (get.color(card[i]) == 'red') list.push(card[i]);
                                }
                                player.addToExpansion(list, 'give').gaintag.add('jingji_yuzhouguo');
                            },
                        },
                        fuce_yuzhouguo: {
                            audio: 'sghuishi',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.getExpansions('jingji_yuzhouguo').length;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    return ui.create.dialog('付策', player.getExpansions('jingji_yuzhouguo'), 'hidden');
                                },
                                backup(links, player) {
                                    return {
                                        filterTarget: true,
                                        filterCard() {
                                            return false;
                                        },
                                        selectCard: -1,
                                        card: links[0],
                                        delay: false,
                                        content: lib.skill.fuce_yuzhouguo.contentx,
                                        ai: {
                                            order: 10,
                                            result: {
                                                target(player, target) {
                                                    if (get.attitude(player, target) < 0) return 0;
                                                },
                                            },
                                        },
                                    };
                                },
                                prompt() {
                                    return '请选择〖付策〗的目标';
                                },
                            },
                            contentx() {
                                'step 0';
                                var card = lib.skill.fuce_yuzhouguo_backup.card;
                                target.gain(card, 'give').gaintag.add('jingji_yuzhouguo');
                                ('step 1');
                                player
                                    .chooseControl('basic', 'trick', 'equip')
                                    .set('prompt', '选择获得一种类型的牌')
                                    .set('ai', function () {
                                        var player = _status.event.player;
                                        if (player.hp <= 3 && !player.countCards('h', { name: ['shan', 'tao'] })) return 'basic';
                                        if (player.countCards('he', { type: 'equip' }) < 2) return 'equip';
                                        return 'trick';
                                    });
                                ('step 2');
                                var card = get.cardPile2(function (card) {
                                    return get.type(card, 'trick') == result.control;
                                });
                                if (card) player.gain(card, 'gain2', 'log');
                            },
                            group: ['fuce_yuzhouguo_1', 'fuce_yuzhouguo_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'shengce_yuzhouguoAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player != _status.currentPhase;
                                    },
                                    content() {
                                        player.darw();
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.hasHistory('lose', function (evt) {
                                            if (evt.parent != event) return false;
                                            for (var i in evt.gaintag_map) {
                                                if (evt.gaintag_map[i].includes('jingji_yuzhouguo')) return true;
                                            }
                                            return false;
                                        });
                                    },
                                    content() {
                                        'step 0';
                                        trigger.addCount = false;
                                        var cardname = trigger.card.name;
                                        if (player.stat[player.stat.length - 1].card[cardname] > 0) {
                                            player.stat[player.stat.length - 1].card[cardname]--;
                                        }
                                    },
                                },
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                            },
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (card.hasGaintag('jingji_yuzhouguo')) {
                                        return true;
                                    }
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && card.hasGaintag('jingji_yuzhouguo')) {
                                        return false;
                                    }
                                },
                            },
                            forced: true,
                            popup: false,
                        },
                        shengce_yuzhouguo: {
                            audio: 'stianyi',
                            hiddenCard(player, name) {
                                return ['sha', 'tao', 'jiu', 'wuxie'].includes(name) && player.countCards('h') > 0;
                            },
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filter(event, player) {
                                var card1 = player.getCards('h');
                                for (var i = 0; i < card1.length; i++) {
                                    if (card1[i].hasGaintag('jingji_yuzhouguo')) {
                                        card1 = 1;
                                        break;
                                    }
                                }
                                for (var i of lib.inpile) {
                                    var type = get.type2(i);
                                    if ((type == 'basic' || type == 'trick') && lib.filter.filterCard({ name: i }, player, event) && card1 == 1) return true;
                                }
                                return false;
                            },
                            contentx() {
                                player.draw();
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
                                    if (event.filterCard && event.filterCard({ name: 'shan' }, player, event)) {
                                        list.push(['基本', '', 'shan']);
                                    }
                                    if (event.filterCard && event.filterCard({ name: 'wuxie' }, player, event)) {
                                        list.push(['锦囊', '', 'wuxie']);
                                    }
                                    if (event.filterCard && event.filterCard({ name: '诱敌深入' }, player, event)) {
                                        list.push(['锦囊', '', '诱敌深入']);
                                    }
                                    return ui.create.dialog('胜策', [list, 'vcard'], 'hidden');
                                },
                                backup(links, player) {
                                    return {
                                        filterCard(card) {
                                            return card.hasGaintag('jingji_yuzhouguo');
                                        },
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        popname: true,
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张‘锦’当做' + get.translation(links[0][3] || '') + get.translation(links[0][2]) + '使用';
                                },
                            },
                        },
                        jizhiyuzhouguo: {
                            audio: 'zuoxing',
                            trigger: {
                                global: ['gameDrawBefore'],
                            },
                            forced: true,
                            content() {
                                var players = game.filterPlayer();
                                for (var i of players) {
                                    i.addSkill('shengce_yuzhouguo');
                                }
                            },
                        },
                        fangjun_spzhangliang: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            marktext: '方',
                            intro: {
                                content: '你拥有#个标记',
                            },
                            content() {
                                'step 0';
                                var players = game.filterPlayer();
                                var dplayers = game.dead.length;
                                var minhp = player.hp;
                                var num = 0;
                                for (var i of players) {
                                    if (i.hp < minhp) minhp = i.hp;
                                }
                                num = players.length - minhp;
                                if (player.hasSkill('fangjun_spzhangliang_5')) {
                                    num = dplayers - player.getDamagedHp();
                                }
                                if (num > 0) player.addMark('fangjun_spzhangliang', num);
                            },
                            group: ['fangjun_spzhangliang2'],
                            subSkill: {
                                1: {
                                    mod: {
                                        maxHandcard(player, num, storage) {
                                            return (num += player.countMark('fangjun_spzhangliang_1'));
                                        },
                                    },
                                },
                                2: {},
                                3: {},
                                4: {},
                                5: {
                                    marktext: '改',
                                    intro: {
                                        content: '你修改了方军',
                                    },
                                    mark: true,
                                },
                            },
                        },
                        fangjun_spzhangliang2: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (player.hasMark('fangjun_spzhangliang')) {
                                    return !(player.hasSkill('fangjun_spzhangliang_2') && player.hasSkill('fangjun_spzhangliang_3') && player.hasSkill('fangjun_spzhangliang_4'));
                                }
                            },
                            content() {
                                'step 0';
                                player.removeMark('fangjun_spzhangliang');
                                var list = [];
                                if (!player.hasSkill('fangjun_spzhangliang_2')) list.push('摸牌');
                                if (!player.hasSkill('fangjun_spzhangliang_3')) list.push('造成伤害');
                                if (!player.hasSkill('fangjun_spzhangliang_4')) list.push('本回合加手牌上限');
                                player.chooseControl(list).set('prompt', '你选择');
                                ('step 1');
                                var players = game.filterPlayer();
                                var maxhp1 = player.hp;
                                var minhp = player.hp;
                                var allcard = 0;
                                var allhp = 0;
                                for (var i of players) {
                                    if (i.hp < minhp) minhp = i.hp;
                                    if (i.hp > maxhp1) maxhp1 = i.hp;
                                    allcard = +i.countCards('h');
                                    allhp = +i.hp;
                                }
                                if (result.control == '摸牌') {
                                    if (!player.hasSkill('fangjun_spzhangliang_5')) {
                                        player.draw(Math.floor(maxhp1 / allhp));
                                    } else {
                                        player.draw(Math.floor(allhp / minhp));
                                    }
                                    player.addTempSkill('fangjun_spzhangliang_2');
                                } else if (result.control == '本回合加手牌上限') {
                                    if (!player.hasSkill('fangjun_spzhangliang_5')) {
                                        player.addMark('fangjun_spzhangliang_1', Math.ceil(allcard / 10));
                                    } else {
                                        player.addMark('fangjun_spzhangliang_1', Math.ceil(allcard / 5));
                                    }
                                    player.addTempSkill('fangjun_spzhangliang_1');
                                    player.addTempSkill('fangjun_spzhangliang_4');
                                } else {
                                    player.addTempSkill('fangjun_spzhangliang_3');
                                    player.chooseTarget('选择一名角色造成伤害', true, function (card, player, target) {
                                        return true;
                                    });
                                }
                                ('step 2');
                                if (result.bool && result.targets && result.targets.length) {
                                    if (!player.hasSkill('fangjun_spzhangliang_5')) {
                                        result.targets[0].damage(player.getDamagedHp());
                                    } else {
                                        result.targets[0].damage(game.filterPlayer().length);
                                    }
                                }
                            },
                        },
                        rengong_spzhangliang: {
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countMark('fangjun_spzhangliang') > player.getDamagedHp() * player.getDamagedHp();
                            },
                            content() {
                                'step 0';
                                player.removeMark('fangjun_spzhangliang', player.getDamagedHp() * player.getDamagedHp());
                                var num = 0;
                                var players = game.filterPlayer();
                                for (var i of players) {
                                    num += i.skills.length;
                                }
                                num -= players.length;
                                if (num > 0) target.chooseCard('he', num, true);
                                ('step 1');
                                target.discard(result.cards);
                            },
                            ai: {
                                order: 8.5,
                                result: {
                                    target(player, target) {
                                        if (!ui.selected.cards.length) {
                                            if (player.hp < 2) return 0;
                                            if (target.hp >= player.hp) return 0;
                                        }
                                        return get.damageEffect(target, player);
                                    },
                                },
                            },
                        },
                        hantian_spzhangliang: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            juexingji: true,
                            derivation: 'hantian_spzhangliang',
                            init(player) {
                                player.storage.hantian_spzhangliang = false;
                            },
                            filter(event, player) {
                                return game.filterPlayer().length < 4;
                            },
                            content() {
                                'step 0';
                                player.storage.hantian_spzhangliang = true;
                                player.awakenSkill('hantian_spzhangliang');
                                ('step 1');
                                player.addSkill('fangjun_spzhangliang_5');
                            },
                        },
                        屯江: {
                            audio: 'ext:武将新生/audio:2',
                            trigger: {
                                global: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                return (
                                    event.player.getHistory('sourceDamage', function (evt) {
                                        return evt.player != event.player;
                                    }).length == 0 && !event.player.getHistory('skipped').includes('phaseUse')
                                );
                            },
                            content() {
                                trigger.player.draw(game.countGroup());
                                trigger.player.addTempSkill('屯江_1', { player: 'phaseUseEnd' });
                            },
                            subSkill: {
                                1: {
                                    mod: {
                                        cardUsable(card, player, num) {
                                            if (card.name == 'sha') return (num += 1);
                                        },
                                    },
                                },
                            },
                        },
                        问计: {
                            audio: 'ext:武将新生/audio:2',
                            trigger: {
                                player: 'phaseUseBefore',
                            },
                            mark: true,
                            intro: {
                                content(storage, player, skill) {
                                    return '问计记录的类型:' + get.translation(player.storage.问计_1);
                                },
                            },
                            init(player, skill) {
                                player.storage.问技_target = [];
                                player.storage.问计_1 = [];
                            },
                            async content(event, trigger, player) {
                                //QQQ
                                player.addTempSkill('问计_1');
                                const result = await player.chooseTarget('你可以令至多两名其他角色交给你一张牌', [1, 2], function (card, player, target) {
                                    return target != player && target.countCards('he') > 0;
                                }).forResult();
                                if (result.targets && result.targets[0]) {
                                    for (var i of result.targets.concat(player.storage.问技_target)) {
                                        const { result: result1 } = await i.chooseCard(`交给${get.translation(player)}1张牌`, true, 'he').set('ai', (card) => get.attitude(player, i) * get.value(card));
                                        if (result1.cards && result1.cards[0]) {
                                            player.storage.问计_1.add(get.type(result.cards[0]));
                                            player.gain(result1.cards, i, 'giveAuto');
                                        }
                                    }
                                    player.storage.问技_target = [];
                                    if (player.storage.问计_1.length > 2) {
                                        player.storage.问计_1.pop();
                                    }
                                }
                            },
                            ai: {
                                order() {
                                    return get.order({ name: 'sha' }) - 0.4;
                                },
                                result: {
                                    target(player, target) {
                                        var eff = get.effect(target, { name: 'sha' }, player, target);
                                        var damageEff = get.damageEffect(target, player, player);
                                        if (eff > 0) return damageEff > 0 ? 0 : eff;
                                        if (target.hasSkill('bagua_skill') || target.hasSkill('rw_bagua_skill') || target.hasSkill('bazhen')) return 0;
                                        return eff;
                                    },
                                },
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player, storage) {
                                        return player.storage.问计_1.includes(get.type(event.card));
                                    },
                                    content() {
                                        trigger.directHit.addArray(game.filterPlayer());
                                        if (get.tag(trigger.card, 'damage') && player.storage.问计_1.length == 1) {
                                            trigger.baseDamage++;
                                        }
                                    },
                                },
                            },
                        },
                        嗣祸: {
                            global: '嗣祸2',
                            audio: 'ext:武将新生/audio:2',
                            ai: {
                                combo: '嗣祸',
                            },
                        },
                        嗣祸2: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            check(event, player) {
                                if (player.countCards('h') < 1) return false;
                                var have = game.filterPlayer((current) => current.hasSkill('嗣祸'));
                                for (var i = 0; i < have.length; i++) {
                                    if (-get.attitude(player, have[i]) && have[i].countCards('h')) return true;
                                }
                                return false;
                            },
                            frequent: 'check',
                            filter(event, player) {
                                if (player.countCards('h') < 1) return false;
                                var have = game.filterPlayer((current) => current.hasSkill('嗣祸'));
                                var list = [...have];
                                for (var i = 0; i < have.length; i++) {
                                    if (have[i].storage.问技_target.includes(player)) {
                                        list.remove(have[i]);
                                    }
                                }
                                return list.length && !have.includes(player);
                            },
                            prompt() {
                                var have = game.filterPlayer((current) => current.hasSkill('嗣祸'));
                                var str = get.translation(have);
                                if (have.length > 1) str += '中的一人';
                                return `是否与${str}进行拼点,若其赢,你成为其下次使用问技的额外目标,若其没赢,则你本回合使用红色杀无次数限制`;
                            },
                            content() {
                                'step 0';
                                var targets = game.filterPlayer((current) => current.hasSkill('嗣祸'));
                                if (targets.length == 1) {
                                    event.target = targets[0];
                                    event.goto(2);
                                } else if (targets.length) {
                                    player
                                        .chooseTarget(true, '选择拼点的目标', function (card, player, target) {
                                            return _status.event.list.includes(target) && !target.storage.问技_target.includes(player);
                                        })
                                        .set('list', targets)
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            return -get.attitude(player, target);
                                        });
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                if (result.bool && result.targets.length) {
                                    event.target = result.targets[0];
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.target) {
                                    event.target.chooseToCompare(player);
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (result.bool) {
                                    event.target.draw(game.countGroup());
                                    if (!event.target.storage.问技_target) event.target.storage.问技_target = [];
                                    event.target.storage.问技_target.push(player);
                                } else {
                                    player.addTempSkill('嗣祸3');
                                }
                            },
                            ai: {
                                result: {
                                    player(player) {
                                        if (player.countCards('h', 'sha') > 2) return 0.6;
                                        var num = player.countCards('h');
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
                            },
                        },
                        嗣祸3: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha' && get.color(card) == 'red') return Infinity;
                                },
                            },
                            charlotte: true,
                        },
                        折梯: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                'step 0';
                                target.chooseCard(`交给${get.translation(player)}两张牌或本回合不能打出牌`, 2).set('ai', function (card) {
                                    if (get.attitude(_status.event.player, _status.event.parent.player) > 0) {
                                        return 11 - get.value(card);
                                    } else {
                                        return 7 - get.value(card);
                                    }
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.gain(result.cards, target, 'giveAuto');
                                } else {
                                    target.addTempSkill('折梯_1');
                                }
                            },
                            subSkill: {
                                1: {
                                    mark: true,
                                    intro: {
                                        content: '无法使用或打出牌',
                                    },
                                    mod: {
                                        cardEnabled2(card, player, storage) {
                                            return false;
                                        },
                                    },
                                },
                            },
                        },
                        sisho_Angel: {
                            audio: 'ext:武将新生/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            content() {
                                player.loseHp();
                                player.addTempSkill('sisho_Angel_1');
                            },
                            subSkill: {
                                1: {
                                    mod: {
                                        maxHandcardBase(player) {
                                            return player.getDamagedHp();
                                        },
                                    },
                                    audio: 'sisho_Angel', //QQQ
                                    trigger: {
                                        player: 'phaseDrawBegin',
                                    },
                                    content() {
                                        trigger.num += player.maxHp - player.hp;
                                    },
                                    forced: true,
                                },
                            },
                        },
                        fushe_Angel: {
                            usable: 1,
                            mark: true,
                            marktext: '伏射',
                            intro: {
                                content(event, player, storage) {
                                    if (!player.storage.Angelsh) player.storage.Angelsh = 0;
                                    var fs = '已因【伏射】造成伤害数:';
                                    fs += get.translation(player.storage.Angelsh);
                                    return fs;
                                },
                            },
                            enable: 'phaseUse',
                            audio: 'ext:武将新生/audio:2',
                            content() {
                                player.loseMaxHp();
                                player.chooseUseTarget({ name: 'wanjian' }, true, 'nodistance');
                            },
                            group: 'fushe_Angel_1',
                            subSkill: {
                                1: {
                                    forced: true,
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'wanjian' && event.skill.name == 'fushe_Angel';
                                    },
                                    content() {
                                        if (!player.storage.Angelsh) player.storage.Angelsh = 0;
                                        player.storage.Angelsh += trigger.num;
                                        if (player.storage.Angelsh > 4) {
                                            player.gainMaxHp(5 - player.maxHp);
                                            if (5 - player.maxHp < 1) player.loseMaxHp(player.maxHp - 5);
                                            player.storage.Angelsh = 0;
                                        }
                                    },
                                },
                            },
                        },
                        mianbei_Angel: {
                            group: 'mianbei_Angel_1',
                            trigger: {
                                player: 'dying',
                            },
                            audio: 'ext:武将新生/audio:2',
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('令一名角色回复1点体力', function (card, player, target) {
                                        return target.isDamaged();
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.recoverEffect(target, player, player) && target != player;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    target.recover();
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'die',
                                    },
                                    audio: 'mianbei_Angel',
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget('令一名角色增加1点体力上限', function (card, player, target) {
                                                return target.isDamaged();
                                            })
                                            .set('ai', function (target) {
                                                var player = _status.event.player;
                                                return get.recoverEffect(target, player, player) && target != player;
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            var target = result.targets[0];
                                            target.gainMaxHp();
                                        }
                                    },
                                },
                            },
                        },
                        HUI_zhuhan: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 1;
                                },
                                selectTarget(card, player, range) {
                                    if (card.name == 'sha' && Array.isArray(range) && range[1] != -1) {
                                        range[1]++;
                                    }
                                },
                            },
                        },
                        HUI_weichi: {
                            shaRelated: true,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            logTarget: 'target',
                            preHidden: true,
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    if (card.suit == 'heart') return 2;
                                    return -2;
                                }).judge2 = function (result) {
                                    return result.bool;
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.addTempSkill('HUI_zhuhan', { player: 'phaseBegin' });
                                } else {
                                    if (!trigger.target.hasSkill('fengyin')) {
                                        trigger.target.addTempSkill('fengyin');
                                    }
                                    trigger.parent.directHit.add(trigger.target);
                                }
                            },
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if (get.attitude(player, arg.target) > 0 || arg.card.name != 'sha' || !ui.cardPile.firstChild || ui.cardPile.firstChild.suit != 'heart') return false;
                                },
                            },
                        },
                        HUI_shenshou: {
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (typeof event.card.suit != 'string') return false;
                                for (var i of player.getCards('h')) {
                                    if (i.suit == event.card.suit) return false;
                                }
                                var num = 0;
                                for (var i of game.players) {
                                    if (i.countCards('e') == 0) continue;
                                    for (var j of i.getCards('e')) {
                                        if (get.color(j) == get.color(event.card)) num++;
                                    }
                                }
                                return num > 0;
                            },
                            forced: true,
                            content() {
                                var num = 0;
                                for (var i of game.players) {
                                    if (i.countCards('e') == 0) continue;
                                    for (var j of i.getCards('e')) {
                                        if (get.color(j) == get.color(trigger.card)) num++;
                                    }
                                }
                                player.draw(num);
                            },
                            group: ['HUI_shenshou_draw1', 'HUI_shenshou_draw2'],
                            subSkill: {
                                draw1: {
                                    trigger: {
                                        global: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return get.type(event.card) == 'equip';
                                    },
                                    content() {
                                        player.draw('nodelay');
                                    },
                                },
                                draw2: {
                                    trigger: {
                                        global: 'loseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (Array.isArray(event.cards))
                                            for (var i of event.cards) {
                                                if (i.original == 'e') return true;
                                            }
                                        return false;
                                    },
                                    content() {
                                        player.draw(1);
                                    },
                                },
                            },
                        },
                        HUI_liju: {
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            content() {
                                player.disableEquip('equip3');
                                player.disableEquip('equip4');
                                player.addSkill('feiying');
                                player.addSkill('mashu');
                            },
                            group: ['HUI_liju_draw'],
                            subSkill: {
                                draw: {
                                    audio: 'ext:武将新生/audio:2',
                                    enable: 'phaseUse',
                                    position: 'he',
                                    filterCard(card) {
                                        return get.subtype(card) == 'equip3' || get.subtype(card) == 'equip4';
                                    },
                                    filter(event, player) {
                                        return player.getCards('he', { subtype: ['equip3', 'equip4'] }).length;
                                    },
                                    content() {
                                        player.draw();
                                    },
                                    discard: false,
                                    visible: true,
                                    loseTo: 'discardPile',
                                    prompt: '将一张坐骑牌置入弃牌堆并摸一张牌',
                                    delay: 0.5,
                                    prepare(cards, player) {
                                        player.$throw(cards, 1000);
                                        game.log(player, '将', cards, '置入了弃牌堆');
                                    },
                                    ai: {
                                        order: 10,
                                        result: {
                                            player: 1,
                                        },
                                    },
                                },
                            },
                        },
                        傀将: {
                            nobracket: true,
                            silent: true,
                            enable: 'phaseUse',
                            forced: true,
                            filter(event, player) {
                                return player.countMark('迷魂_2') >= 2;
                            },
                            init(player) {
                                player.storage.傀将_1 = ['傀儡董卓', '傀儡吕布'];
                            },
                            content() {
                                'step 0';
                                player.chooseControlList(['移除两枚魂标记', '弃置两张牌'], true);
                                ('step 1');
                                if (result.index == 0) {
                                    player.removeMark('迷魂_2', 2);
                                } else {
                                    player.chooseToDiscard(2);
                                }
                                ('step 2');
                                var list = [];
                                var list1 = player.storage.傀将_1;
                                for (var i = 0; i < list1.length; i++) {
                                    list.push(list1[i]);
                                }
                                if (list != []) player.chooseControl(list).set('prompt', '你的选择为');
                                ('step 3');
                                var list = player.storage.傀将_1;
                                if (result.control) {
                                    event.Q = result.control; //QQQ
                                    list.remove(result.control);
                                }
                                ('step 4');
                                var list = ['上家', '下家'];
                                player.chooseControl(list).set('prompt', '你的选择为');
                                ('step 5');
                                var players = game.players.concat(game.dead);
                                var num = player.dataset.position;
                                if (result.control == '上家') {
                                    var players = game.players.concat(game.dead);
                                    if (num == 0) num = players.length;
                                    num--;
                                }
                                var fellow = game.addFellow(num, event.Q);
                                fellow.style.left = 'calc(65% - 600px)';
                                if (result.control == '上家') {
                                    fellow.style.top = 'calc(25%)';
                                    fellow.side = player.side;
                                }
                                if (result.control != '上家') {
                                    fellow.style.top = 'calc(50%)';
                                    fellow.side = player.side;
                                }
                                fellow.classList.add('minskin');
                                fellow.identity = player.identity;
                                fellow.showIdentity();
                                fellow.node.identity.dataset.color = 'nei';
                                fellow.draw(4)._triggered = null;
                            },
                            ai: {
                                threaten: 2,
                            },
                            popup: false,
                        },
                        娇魅: {
                            mod: {
                                maxHandcard(player, num) {
                                    return num + game.countPlayer((current) => current.sex == 'female');
                                },
                            },
                            forced: true,
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            content() {
                                trigger.num += game.countPlayer((current) => current.sex == 'male');
                            },
                        },
                        迷魂: {
                            group: ['迷魂_1', '迷魂_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        target: 'useCardToTargeted',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player != event.player;
                                    },
                                    content() {
                                        player.draw();
                                        player.addMark('迷魂_2');
                                    },
                                },
                                2: {
                                    marktext: '魂',
                                    mark: true,
                                    intro: {
                                        name: '迷魂',
                                    },
                                },
                            },
                        },
                        纵横: {
                            audio: 'liyu',
                            enable: 'chooseToUse',
                            viewAs: {
                                name: 'juedou',
                            },
                            viewAsFilter(player) {
                                return true;
                            },
                            filterCard(card, player) {
                                if (get.type(card) == 'trick') {
                                    return true;
                                } else {
                                    return false;
                                }
                            },
                            precontent() { },
                            ai: {
                                wuxie(target, card, player, viewer) {
                                    if (player == game.me && get.attitude(viewer, player) > 0) {
                                        return 0;
                                    }
                                },
                                basic: {
                                    order: 5,
                                    useful: 1,
                                    value: 5.5,
                                },
                                result: {
                                    target: -1.5,
                                    player(player, target, card) {
                                        if (
                                            player.hasSkillTag(
                                                'directHit_ai',
                                                true,
                                                {
                                                    target: target,
                                                    card: card,
                                                },
                                                true
                                            )
                                        ) {
                                            return 0;
                                        }
                                        if (get.damageEffect(target, player, target) > 0 && get.attitude(player, target) > 0 && get.attitude(target, player) > 0) {
                                            return 0;
                                        }
                                        var hs1 = target.getCards('h', 'sha');
                                        var hs2 = player.getCards('h', 'sha');
                                        if (hs1.length > hs2.length + 1) {
                                            return -2;
                                        }
                                        var hsx = target.getCards('h');
                                        if (hsx.length > 2 && hs2.length == 0 && hsx[0].number < 6) {
                                            return -2;
                                        }
                                        if (hsx.length > 3 && hs2.length == 0) {
                                            return -2;
                                        }
                                        if (hs1.length > hs2.length && (!hs2.length || hs1[0].number > hs2[0].number)) {
                                            return -2;
                                        }
                                        return -0.5;
                                    },
                                },
                                tag: {
                                    respond: 2,
                                    respondSha: 2,
                                    damage: 1,
                                },
                            },
                            group: '纵横_sha',
                            subSkill: {
                                sha: {
                                    enable: ['chooseToUse'],
                                    viewAs: {
                                        name: 'sha',
                                    },
                                    viewAsFilter(player) {
                                        return true;
                                    },
                                    filterCard(card, player) {
                                        if (get.type(card) == 'basic') {
                                            return true;
                                        } else {
                                            return false;
                                        }
                                    },
                                    precontent() { },
                                    ai: {
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
                            },
                        },
                        无双: {
                            shaRelated: true,
                            audio: 'rewushuang',
                            audioname: ['re_lvbu', 'shen_lvbu', 'lvlingqi'],
                            forced: true,
                            group: ['wushuang1', 'wushuang2', '无双_1'],
                            preHidden: ['wushuang1', 'wushuang2'],
                            subSkill: {
                                1: {
                                    forced: true,
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    content() {
                                        player.draw();
                                        game.asyncDraw(
                                            game.filterPlayer((current) => current.name == '貂蝉'),
                                            1
                                        );
                                    },
                                },
                            },
                        },
                        肉林: {
                            audio: 'roulin',
                            trigger: {
                                player: 'useCardToPlayered',
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.card.name != 'sha') return false;
                                if (player == event.player) {
                                    return event.target.hasSex('female');
                                }
                                return event.player.hasSex('female');
                            },
                            check(event, player) {
                                return player == event.player;
                            },
                            content() {
                                var id = (player == trigger.player ? trigger.target : player).playerid;
                                var map = trigger.parent.customArgs;
                                if (!map[id]) map[id] = {};
                                if (typeof map[id].shanRequired == 'number') {
                                    map[id].shanRequired++;
                                } else {
                                    map[id].shanRequired = 2;
                                }
                            },
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if ((arg && arg.card.name != 'sha') || !arg.target.hasSex('female') || arg.target.countCards('h', 'shan') > 1) return false;
                                },
                            },
                            group: '肉林_da',
                            subSkill: {
                                da: {
                                    trigger: {
                                        source: 'damageBefore',
                                    },
                                    filter(event, player) {
                                        if (player == event.player) {
                                            return event.player.hasSex('female');
                                        } //QQQ
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                },
                            },
                        },
                        酒池: {
                            audio: 'jiuchi',
                            enable: 'chooseToUse',
                            filterCard(card) {
                                return get.color(card) == 'black';
                            },
                            viewAs: {
                                name: 'jiu',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('hs', { color: 'black' })) return false;
                                return true;
                            },
                            prompt: '将一张黑色手牌当酒使用',
                            check(card) {
                                if (_status.event.type == 'dying') return 1 / Math.max(0.1, get.value(card));
                                return 4 - get.value(card);
                            },
                            ai: {
                                threaten: 1.5,
                                basic: {
                                    useful(card, i) {
                                        if (_status.event.player.hp > 1) {
                                            if (i == 0) return 4;
                                            return 1;
                                        }
                                        if (i == 0) return 7.3;
                                        return 3;
                                    },
                                    value(card, player, i) {
                                        if (player.hp > 1) {
                                            if (i == 0) return 5;
                                            return 1;
                                        }
                                        if (i == 0) return 7.3;
                                        return 3;
                                    },
                                },
                                order() {
                                    return get.order({ name: 'sha' }) + 0.2;
                                },
                                result: {
                                    target(player, target) {
                                        if (target && target.isDying()) return 2;
                                        if (target && !target.isPhaseUsing()) return 0;
                                        if (lib.config.mode == 'stone' && !player.isMin()) {
                                            if (player.getActCount() + 1 >= player.actcount) return 0;
                                        }
                                        var shas = player.getCards('h', 'sha');
                                        if (shas.length > 1 && (player.getCardUsable('sha') > 1 || player.countCards('h', 'zhuge'))) {
                                            return 0;
                                        }
                                        shas.sort(function (a, b) {
                                            return get.order(b) - get.order(a);
                                        });
                                        var card;
                                        if (shas.length) {
                                            for (var i = 0; i < shas.length; i++) {
                                                if (lib.filter.filterCard(shas[i], target)) {
                                                    card = shas[i];
                                                    break;
                                                }
                                            }
                                        } else if (player.hasSha() && player.needsToDiscard()) {
                                            if (player.countCards('h', 'hufu') != 1) {
                                                card = { name: 'sha' };
                                            }
                                        }
                                        if (card) {
                                            if (
                                                game.hasPlayer(function (current) {
                                                    return (
                                                        get.attitude(target, current) < 0 &&
                                                        target.canUse(card, current, true, true) &&
                                                        !current.hasSkillTag('filterDamage', null, {
                                                            player: player,
                                                            card: card,
                                                            jiu: true,
                                                        }) &&
                                                        get.effect(current, card, target) > 0
                                                    );
                                                })
                                            ) {
                                                return 1;
                                            }
                                        }
                                        return 0;
                                    },
                                },
                                tag: {
                                    save: 1,
                                    recover: 0.1,
                                },
                            },
                            group: '酒池_nu',
                            subSkill: {
                                nu: {
                                    firstDo: true,
                                    trigger: {
                                        player: 'useCard1',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !event.audioed && event.card.name == 'jiu' && player.countUsed('jiu', true) > 1 && event.parent.type == 'phase';
                                    },
                                    content() {
                                        trigger.audioed = true;
                                    },
                                    mod: {
                                        cardUsable(card, player, num) {
                                            if (card.name == 'jiu') return Infinity;
                                        },
                                    },
                                },
                            },
                        },
                        qingxue_moulvmeng: {
                            audio: 'ext:风起三国/audio:2',
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.hujia;
                                },
                            },
                            init(player) {
                                player.storage.qingxue_moulvmeng = [];
                            },
                            intro: {
                                content(storage) {
                                    var str = '记录花色:';
                                    str += get.translation(storage);
                                    return str;
                                },
                            },
                            mark: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                player.changeHujia(1);
                            },
                            group: 'qingxue_moulvmeng_1',
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card.suit != undefined && event.card.suit != 'none' && !player.storage.qingxue_moulvmeng.includes(event.card.suit);
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.qingxue_moulvmeng.push(trigger.card.suit);
                                        ('step 1');
                                        var sto = player.storage.qingxue_moulvmeng;
                                        if (sto.length < 4) event.finish();
                                        ('step 2');
                                        player.storage.qingxue_moulvmeng = [];
                                        var list = ['minwu_fqsg', 'ximou_fqsg', 'guanxin_fqsg'];
                                        var list1 = [];
                                        for (var i = 0; i < list.length; i++) {
                                            if (!player.hasSkill(list[i])) list1.push(list[i]);
                                        }
                                        if (list1.length)
                                            player
                                                .chooseControl(list1)
                                                .set(
                                                    'choiceList',
                                                    list1.map((i) => {
                                                        return '<div class="skill">【' + get.translation(lib.translate[`${i}_ab`] || get.translation(i).slice(0, 2)) + `】</div><div>${get.skillInfoTranslation(i, player)}</div>`;
                                                    })
                                                )
                                                .set('prompt', '你选择获得');
                                        ('step 3');
                                        if (result.control) {
                                            player.addSkill(result.control);
                                        } else {
                                            player.draw(4);
                                        }
                                    },
                                },
                            },
                        },
                        minwu_fqsg: {
                            audio: 'ext:风起三国/audio:2',
                            trigger: {
                                player: ['useCardAfter', 'respondAfter'],
                            },
                            filter(event, player) {
                                return get.type(event.card) == 'basic';
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.judge();
                                ('step 1');
                                if (result.color == 'black') {
                                    player.draw();
                                } else if (result.color == 'red') {
                                    player.gain(trigger.cards.filterInD(), 'gain2', 'log');
                                }
                            },
                        },
                        ximou_fqsg: {
                            audio: 'ext:风起三国/audio:2',
                            trigger: {
                                player: ['useCardAfter', 'respondAfter'],
                            },
                            filter(event, player) {
                                return get.type(event.card) == 'trick';
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget('选择至多两名角色', [1, 2], true, function (card, player, target) {
                                    return true;
                                });
                                ('step 1');
                                if (result.bool && result.targets && result.targets.length) {
                                    var targ = result.targets;
                                    for (var i = 0; i < targ.length; i++) targ[i].draw();
                                }
                            },
                        },
                        guanxin_fqsg: {
                            audio: 'ext:风起三国/audio:2',
                            usable: 1,
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            content() {
                                'step 0';
                                player.judge();
                                ('step 1');
                                if (result.color == 'black') {
                                    event.goto(5);
                                }
                                ('step 2');
                                event.togain = [];
                                var suit = trigger.card.suit;
                                for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
                                    var current = ui.discardPile.childNodes[i];
                                    if (!trigger.cards.includes(current) && current.suit == suit) event.togain.push(current);
                                }
                                ('step 3');
                                player.chooseButton(['是否获得其中的一张牌？', event.togain]).ai = function (button) {
                                    return get.value(button.link);
                                };
                                ('step 4');
                                if (result.bool) {
                                    player.gain(result.links[0], 'gain2');
                                }
                                event.finish();
                                ('step 5');
                                player.chooseTarget('选择一名角色', true, function (card, player, target) {
                                    return true;
                                });
                                ('step 6');
                                if (result.bool && result.targets && result.targets.length) {
                                    player.discardPlayerCard(result.targets[0], 'h', true, 'visible');
                                }
                            },
                        },
                        huashen_rejie: {
                            audio: 'ext:风起三国/audio:2',
                            forced: true,
                            content() {
                                'step 0';
                                _status.noclearcountdown = true;
                                event.videoId = lib.status.videoId++;
                                var cards = player.storage.huashen_rejie.character.slice(0);
                                var skills = [];
                                var sto = player.storage.huashen_rejie;
                                for (var i in player.storage.huashen_rejie.map) {
                                    skills.addArray(player.storage.huashen_rejie.map[i]);
                                }
                                var cond = 'out';
                                if (event.triggername == 'phaseBegin') {
                                    cond = 'in';
                                }
                                skills.randomSort();
                                skills.sort(function (a, b) {
                                    return get.skillRank(b, cond) - get.skillRank(a, cond);
                                });
                                event.aiChoice = skills[0];
                                var choice = '更换技能';
                                if (event.aiChoice == player.storage.huashen_rejie.current2 || get.skillRank(event.aiChoice, cond) < 1) choice = '弃置化身';
                                if (player.isOnline2()) {
                                    player.send(
                                        function (cards, id) {
                                            var dialog = ui.create.dialog('是否发动【化身】？', [cards, 'character']);
                                            dialog.videoId = id;
                                        },
                                        cards,
                                        event.videoId
                                    );
                                }
                                event.dialog = ui.create.dialog(get.prompt('huashen_rejie'), [cards, 'character']);
                                event.dialog.videoId = event.videoId;
                                if (!event.isMine()) {
                                    event.dialog.style.display = 'none';
                                }
                                if (event.triggername == 'huashen_rejie') event._result = { control: '更换技能' };
                                else
                                    player
                                        .chooseControl('弃置化身', '更换技能', 'cancel2')
                                        .set('ai', function () {
                                            return _status.event.choice;
                                        })
                                        .set('choice', choice);
                                ('step 1');
                                event.control = result.control;
                                if (event.control == 'cancel2') {
                                    if (player.isOnline2()) {
                                        player.send('closeDialog', event.videoId);
                                    }
                                    delete _status.noclearcountdown;
                                    if (!_status.noclearcountdown) {
                                        game.stopCountChoose();
                                    }
                                    event.dialog.close();
                                    event.finish();
                                    return;
                                }
                                var next = player.chooseButton(true).set('dialog', event.videoId);
                                if (event.control == '弃置化身') {
                                    next.set('selectButton', [1, player.storage.huashen_rejie.character.length]);
                                    next.set('filterButton', function (button) {
                                        return button.link != _status.event.current;
                                    });
                                    next.set('current', player.storage.huashen_rejie.current);
                                } else {
                                    next.set('ai', function (button) {
                                        return player.storage.huashen_rejie.map[button.link].includes(_status.event.choice) ? 2.5 : 1 + Math.random();
                                    });
                                    next.set('choice', event.aiChoice);
                                }
                                var prompt = event.control == '弃置化身' ? '选择弃置任意张化身' : '选择要切换的化身';
                                var func = function (id, prompt) {
                                    var dialog = get.idDialog(id);
                                    if (dialog) {
                                        dialog.content.childNodes[0].innerHTML = prompt;
                                    }
                                };
                                if (player.isOnline2()) {
                                    player.send(func, event.videoId, prompt);
                                } else if (event.isMine()) {
                                    func(event.videoId, prompt);
                                }
                                ('step 2');
                                if (result.bool && event.control != '弃置化身') {
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
                                    var list = player.storage.huashen_rejie.map[event.card].slice(0);
                                    list.push('返回');
                                    player
                                        .chooseControl(list)
                                        .set('choice', event.aiChoice)
                                        .set('ai', function () {
                                            return _status.event.choice;
                                        });
                                } else {
                                    lib.skill.huashen_rejie.removeHuashen(player, result.links.slice(0));
                                    lib.skill.huashen_rejie.addHuashens(player, result.links.length);
                                }
                                ('step 3');
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
                                    event._result = { control: '更换化身' };
                                    event.goto(1);
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
                                if (event.control == '弃置化身') return;
                                if (player.storage.huashen_rejie.current != event.card) {
                                    player.storage.huashen_rejie.current = event.card;
                                    game.broadcastAll(
                                        function (character, player) {
                                            player.sex = lib.character[character][0];
                                            player.group = lib.character[character][1];
                                            player.node.name.dataset.nature = get.groupnature(player.group);
                                        },
                                        event.card,
                                        player
                                    );
                                }
                                var link = result.control;
                                player.storage.huashen_rejie.current2 = link;
                                if (!player.additionalSkills.huashen_rejie || !player.additionalSkills.huashen_rejie.includes(link)) {
                                    player.addAdditionalSkill('huashen_rejie', link);
                                    player.flashAvatar('huashen_rejie', event.card);
                                    game.log(player, '获得技能', `#g【${get.translation(link)}】`);
                                    player.popup(link);
                                }
                            },
                            init(player, skill) {
                                if (!player.storage[skill])
                                    player.storage[skill] = {
                                        character: [],
                                        map: {},
                                    };
                            },
                            group: 'huashen_rejie_init',
                            trigger: {
                                player: ['phaseBegin', 'phaseEnd', 'huashen_rejie'],
                            },
                            filter(event, player, name) {
                                //if(name=='phaseBegin'&&game.phaseNumber==1) return false;
                                return player.storage.huashen_rejie && player.storage.huashen_rejie.character.length;
                            },
                            banned: ['lisu', 'sp_xiahoudun', 'xushao', 'zhoutai', 'old_zhoutai'],
                            addHuashen(player) {
                                if (!player.storage.huashen_rejie) return;
                                if (!_status.characterlist) {
                                    if (_status.connectMode) var list = get.charactersOL();
                                    else {
                                        var list = [];
                                        for (var i in lib.character) {
                                            if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
                                            list.push(i);
                                        }
                                    }
                                    game.countPlayer2(function (current) {
                                        list.remove(current.name);
                                        list.remove(current.name1);
                                        list.remove(current.name2);
                                        if (current.storage.huashen_rejie && current.storage.huashen_rejie.character) list.removeArray(current.storage.huashen_rejie.character);
                                    });
                                    _status.characterlist = list;
                                }
                                _status.characterlist.randomSort();
                                var bool = false;
                                for (var i = 0; i < _status.characterlist.length; i++) {
                                    var name = _status.characterlist[i];
                                    if (name.includes('zuoci') || name.indexOf('key') == 0 || lib.skill.huashen_rejie.banned.includes(name) || player.storage.huashen_rejie.character.includes(name)) continue;
                                    var skills = lib.character[name][3];
                                    for (var j = 0; j < skills.length; j++) {
                                        var info = lib.skill[skills[j]];
                                        if (info.charlotte || (info.unique && !info.gainable) || info.juexingji || info.limited || info.zhuSkill || info.hiddenSkill || info.dutySkill) skills.splice(j--, 1);
                                    }
                                    if (skills.length) {
                                        player.storage.huashen_rejie.character.push(name);
                                        player.storage.huashen_rejie.map[name] = skills;
                                        _status.characterlist.remove(name);
                                        return name;
                                    }
                                }
                            },
                            addHuashens(player, num) {
                                var list = [];
                                for (var i = 0; i < num; i++) {
                                    var name = lib.skill.huashen_rejie.addHuashen(player);
                                    if (name) list.push(name);
                                }
                                if (list.length) {
                                    game.log(player, '获得了', get.cnNumber(list.length) + '张', '#g化身');
                                    lib.skill.huashen_rejie.drawCharacter(player, list);
                                }
                            },
                            removeHuashen(player, links) {
                                player.storage.huashen_rejie.character.removeArray(links);
                                _status.characterlist.addArray(links);
                                game.log(player, '移去了', get.cnNumber(links.length) + '张', '#g化身');
                            },
                            drawCharacter(player, list) {
                                game.broadcastAll(
                                    function (player, list) {
                                        if (player.isUnderControl(true)) {
                                            var cards = [];
                                            for (var i = 0; i < list.length; i++) {
                                                var cardname = 'huashen_card_' + list[i];
                                                lib.card[cardname] = {
                                                    fullimage: true,
                                                    image: 'character:' + list[i],
                                                };
                                                lib.translate[cardname] = get.rawName2(list[i]);
                                                cards.push(game.createCard(cardname, '', ''));
                                            }
                                            player.$draw(cards, 'nobroadcast');
                                        }
                                    },
                                    player,
                                    list
                                );
                            },
                            intro: {
                                onunmark(storage, player) {
                                    _status.characterlist.addArray(storage.character);
                                    storage.character = [];
                                },
                                mark(dialog, storage, player) {
                                    if (storage && storage.current) dialog.addSmall([[storage.current], 'character']);
                                    if (storage && storage.current2) dialog.add('<div><div class="skill">【' + get.translation(lib.translate[`${storage.current2}_ab`] || get.translation(storage.current2).slice(0, 2)) + `】</div><div>${get.skillInfoTranslation(storage.current2, player)}</div></div>`);
                                    if (storage && storage.character.length) {
                                        if (player.isUnderControl(true)) {
                                            dialog.addSmall([storage.character, 'character']);
                                        } else {
                                            dialog.addText(`共有${get.cnNumber(storage.character.length)}张<化身>`);
                                        }
                                    } else {
                                        return '没有化身';
                                    }
                                },
                                content(storage, player) {
                                    return `共有${get.cnNumber(storage.character.length)}张<化身>`;
                                },
                                markcount(storage, player) {
                                    if (storage && storage.character) return storage.character.length;
                                    return 0;
                                },
                            },
                        },
                        huashen_rejie_init: {
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                lib.skill.huashen_rejie.addHuashens(player, 5);
                                player.markSkill('huashen_rejie');
                                var next = game.createEvent('huashen_rejie');
                                next.player = player;
                                next._trigger = trigger;
                                next.triggername = 'huashen_rejie';
                                next.setContent(lib.skill.huashen_rejie.content);
                            },
                        },
                        xinshen_rejie: {
                            audio: 'ext:风起三国/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                lib.skill.huashen_rejie.addHuashens(player, 1);
                                player.markSkill('huashen_rejie');
                                player.draw();
                            },
                            ai: {
                                maixie_hp: true,
                            },
                        },
                        jiangshou: {
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                if (player.identity == 'zhu') return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                player.loseMaxHp();
                                player.addSkill('jiangshou_1');
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    forced: true,
                                    content() {
                                        var card = get.cardPile2(function (card) {
                                            return card.name == 'sha';
                                        });
                                        if (card) player.gain(card, 'gain2');
                                    },
                                },
                            },
                        },
                        wushuang_wjxs: {
                            init(player) {
                                player.storage.wushuang_wjxs = [13, 12, 11];
                            },
                            enable: ['chooseToUse'],
                            filter(event, player) {
                                return player.isPhaseUsing();
                            },
                            filterCard(card, player) {
                                return get.type(card) == 'trick';
                            },
                            position: 'h',
                            viewAs: {
                                name: 'juedou',
                                wushuang: true,
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('h', { type: 'trick' })) return false;
                            },
                            prompt: '将一张锦囊当做决斗使用',
                            check(card) {
                                var val = get.value(card);
                                return 5 - val;
                            },
                            ai: {
                                wuxie(target, card, player, viewer) {
                                    if (player == game.me && get.attitude(viewer, player) > 0) {
                                        return 0;
                                    }
                                },
                                basic: {
                                    order: 5,
                                    useful: 1,
                                    value: 5.5,
                                },
                                result: {
                                    target: -1.5,
                                    player(player, target, card) {
                                        if (
                                            player.hasSkillTag(
                                                'directHit_ai',
                                                true,
                                                {
                                                    target: target,
                                                    card: card,
                                                },
                                                true
                                            )
                                        ) {
                                            return 0;
                                        }
                                        if (get.damageEffect(target, player, target) > 0 && get.attitude(player, target) > 0 && get.attitude(target, player) > 0) {
                                            return 0;
                                        }
                                        var hs1 = target.getCards('h', 'sha');
                                        var hs2 = player.getCards('h', 'sha');
                                        if (hs1.length > hs2.length + 1) {
                                            return -2;
                                        }
                                        var hsx = target.getCards('h');
                                        if (hsx.length > 2 && hs2.length == 0 && hsx[0].number < 6) {
                                            return -2;
                                        }
                                        if (hsx.length > 3 && hs2.length == 0) {
                                            return -2;
                                        }
                                        if (hs1.length > hs2.length && (!hs2.length || hs1[0].number > hs2[0].number)) {
                                            return -2;
                                        }
                                        return -0.5;
                                    },
                                },
                                tag: {
                                    damage: 1,
                                    respond: 2,
                                    respondSha: 2,
                                },
                            },
                            group: ['wushuang_wjxs_1', 'wushuang_wjxs_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        target: 'useCardToTargeted',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !player.isPhaseUsing();
                                    },
                                    content() {
                                        'step 0';
                                        player.judge();
                                        ('step 1');
                                        var list = player.storage.wushuang_wjxs;
                                        if (list.includes(result.number)) {
                                            trigger.parent.targets.remove(player);
                                        } else {
                                            player.draw();
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return event.card && event.card.wushuang == true;
                                    },
                                    content() {
                                        player.recover();
                                    },
                                },
                            },
                        },
                        sheji_wjxs: {
                            mod: {
                                targetInRange(card, player) {
                                    if (card.name == 'sha' && player.countUsed('sha', true) == 0) return true;
                                },
                            },
                            trigger: {
                                player: 'useCard2',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.card.name != 'sha') return false;
                                var evt = event.getParent('phaseUse');
                                return (
                                    evt &&
                                    evt.player == player &&
                                    player.getHistory('useCard', function (evtx) {
                                        return evtx.card.name == 'sha' && evtx.getParent('phaseUse') == evt;
                                    })[0] == event
                                );
                            },
                            logTarget: 'target',
                            content() {
                                trigger.addCount = false;
                                if (player.stat[player.stat.length - 1].card.sha > 0) {
                                    player.stat[player.stat.length - 1].card.sha--;
                                }
                                trigger.card.sheji = true;
                            },
                            group: ['sheji_wjxs_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return event.card && event.card.sheji == true && player.storage.wushuang_wjxs.length < 13;
                                    },
                                    content() {
                                        'step 0';
                                        var list = [];
                                        var info = player.storage.wushuang_wjxs;
                                        for (var i = 1; i <= 13; i++) {
                                            if (!info.includes(i)) list.push(i);
                                        }
                                        player.chooseControl(list).set('prompt', '你选择点数');
                                        ('step 1');
                                        player.storage.wushuang_wjxs.push(result.control);
                                    },
                                },
                            },
                        },
                        pinjian_wjxs: {
                            audio: 'ext:武将新生/audio:2',
                            trigger: {
                                player: ['damageEnd', 'phaseJieshuBegin', 'phaseZhunbeiBegin'],
                            },
                            initList() {
                                var list = [];
                                if (_status.connectMode) var list = get.charactersOL();
                                else {
                                    var list = [];
                                    for (var i in lib.character) {
                                        if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
                                        list.push(i);
                                    }
                                }
                                game.countPlayer2(function (current) {
                                    list.remove(current.name);
                                    list.remove(current.name1);
                                    list.remove(current.name2);
                                    if (current.storage.rehuashen && current.storage.rehuashen.character) list.removeArray(current.storage.rehuashen.character);
                                });
                                _status.characterlist = list;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (!player.storage.pinjian_wjxs) player.storage.pinjian_wjxs = [];
                                event._result = { bool: true };
                                ('step 1');
                                if (result.bool) {
                                    if (!_status.characterlist) {
                                        lib.skill.pinjian_wjxs.initList();
                                    }
                                    var list = [];
                                    var skills = [];
                                    var map = [];
                                    _status.characterlist.randomSort();
                                    var name2 = event.triggername;
                                    for (var i = 0; i < _status.characterlist.length; i++) {
                                        var name = _status.characterlist[i];
                                        if (name.includes('zuoci') || name.includes('xushao')) continue;
                                        var skills2 = lib.character[name][3];
                                        for (var j = 0; j < skills2.length; j++) {
                                            if (player.storage.pinjian_wjxs.includes(skills2[j])) continue;
                                            if (skills.includes(skills2[j])) {
                                                list.add(name);
                                                if (!map[name]) map[name] = [];
                                                map[name].push(skills2[j]);
                                                skills.add(skills2[j]);
                                                continue;
                                            }
                                            var list2 = [skills2[j]];
                                            game.expandSkills(list2);
                                            for (var k = 0; k < list2.length; k++) {
                                                var info = lib.skill[list2[k]];
                                                if (!info || !info.trigger || !info.trigger.player || info.silent || info.limited || info.juexingji || info.zhuanhuanji || info.hiddenSkill || info.dutySkill) continue;
                                                if (info.trigger.player == name2 || (Array.isArray(info.trigger.player) && info.trigger.player.includes(name2))) {
                                                    if (info.init || (info.ai && (info.ai.combo || info.ai.notemp || info.ai.neg))) continue;
                                                    if (info.filter) {
                                                        try {
                                                            var bool = info.filter(trigger, player, name2);
                                                            if (!bool) continue;
                                                        } catch (e) {
                                                            continue;
                                                        }
                                                    }
                                                    list.add(name);
                                                    if (!map[name]) map[name] = [];
                                                    map[name].push(skills2[j]);
                                                    skills.add(skills2[j]);
                                                    break;
                                                }
                                            }
                                        }
                                        var num = 2;
                                        if (player.storage.bihuo_wjxs) num = 4;
                                        if (list.length > num) break;
                                    }
                                    if (!skills.length) {
                                        //player.draw();
                                        event.finish();
                                    } else {
                                        //skills.unshift('摸一张牌');
                                        player
                                            .chooseControl(skills)
                                            .set('dialog', ['请选择要发动的技能', [list, 'character']])
                                            .set('ai', function () {
                                                return 0;
                                            });
                                    }
                                } else event.finish();
                                ('step 2');
                                if (result.control == '摸一张牌') {
                                    player.draw();
                                    return;
                                }
                                player.storage.pinjian_wjxs.add(result.control);
                                var triggername = 'damageEnd';
                                if (event.triggername == 'phaseZhunbeiBegin') triggername = 'phaseZhunbei';
                                else if (event.triggername == 'damageEnd') triggername = 'damageAfter';
                                else triggername = 'phaseJieshu';
                                player.addTempSkill(result.control, triggername);
                            },
                            group: 'pinjian_re_use',
                            phaseUse_special: ['xinfu_lingren'],
                        },
                        pinjian_re_use: {
                            audio: 'pingjian',
                            enable: 'phaseUse',
                            position: 'he',
                            filter(event, player) {
                                return !player.getStat('skill').pinjian_re_use || player.getStat('skill').pinjian_re_use < Math.max(player.getDamagedHp(), 1);
                            },
                            content() {
                                'step 0';
                                if (!player.storage.pinjian_wjxs) player.storage.pinjian_wjxs = [];
                                event._result = { bool: true };
                                ('step 1');
                                if (result.bool) {
                                    var list = [];
                                    var skills = [];
                                    var map = [];
                                    if (!_status.characterlist) {
                                        lib.skill.pinjian_wjxs.initList();
                                    }
                                    _status.characterlist.randomSort();
                                    for (var i = 0; i < _status.characterlist.length; i++) {
                                        var name = _status.characterlist[i];
                                        if (name.includes('zuoci') || name.includes('xushao')) continue;
                                        var skills2 = lib.character[name][3];
                                        for (var j = 0; j < skills2.length; j++) {
                                            if (player.storage.pinjian_wjxs.includes(skills2[j])) continue;
                                            if (skills.includes(skills2[j]) || lib.skill.pingjian.phaseUse_special.includes(skills2[j])) {
                                                list.add(name);
                                                if (!map[name]) map[name] = [];
                                                map[name].push(skills2[j]);
                                                skills.add(skills2[j]);
                                                continue;
                                            }
                                            var list2 = [skills2[j]];
                                            game.expandSkills(list2);
                                            for (var k = 0; k < list2.length; k++) {
                                                var info = lib.skill[list2[k]];
                                                if (!info || !info.enable || info.viewAs || info.limited || info.juexingji || info.zhuanhuanji || info.hiddenSkill || info.dutySkill) continue;
                                                if (info.enable == 'phaseUse' || (Array.isArray(info.enable) && info.enable.includes('phaseUse'))) {
                                                    if (info.init || info.onChooseToUse || (info.ai && (info.ai.combo || info.ai.notemp || info.ai.neg))) continue;
                                                    if (info.filter) {
                                                        try {
                                                            var bool = info.filter(event.getParent(2), player);
                                                            if (!bool) continue;
                                                        } catch (e) {
                                                            continue;
                                                        }
                                                    }
                                                    list.add(name);
                                                    if (!map[name]) map[name] = [];
                                                    map[name].push(skills2[j]);
                                                    skills.add(skills2[j]);
                                                    break;
                                                }
                                            }
                                        }
                                        var num = 2;
                                        if (player.storage.bihuo_wjxs) num = 4;
                                        if (list.length > num) break;
                                    }
                                    if (!skills.length) {
                                        //player.draw();
                                        event.finish();
                                    } else {
                                        player
                                            .chooseControl(skills)
                                            .set('dialog', ['请选择要发动的技能', [list, 'character']])
                                            .set('ai', function () {
                                                return 0;
                                            });
                                    }
                                } else event.finish();
                                ('step 2');
                                if (result.control == '摸一张牌') {
                                    player.draw();
                                    return;
                                }
                                player.storage.pinjian_wjxs.add(result.control);
                                player.addTempSkill(result.control, 'phaseUseEnd'); //QQQ
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        bihuo_wjxs: {
                            trigger: {
                                player: 'dying',
                            },
                            _priority: 6,
                            forced: true,
                            mark: true,
                            init(player) {
                                player.storage.bihuo_wjxs = false;
                            },
                            filter(event, player) {
                                if (player.hp > 0) return false;
                                if (player.storage.byuhuo) return false;
                                return true;
                            },
                            content() {
                                player.storage.bihuo_wjxs = true;
                                player.awakenSkill('bihuo_wjxs');
                                player.loseMaxHp();
                                player.hp = player.maxHp;
                            },
                        },
                        aige_wjxs1: {
                            mod: {
                                cardUsable(card, player) {
                                    var cards = player.storage.aige_wjxs1;
                                    if (Array.isArray(cards))
                                        for (var i of cards) {
                                            if (i == card.suit) return Infinity;
                                        }
                                },
                                targetInRange(card, player) {
                                    var cards = player.storage.aige_wjxs1;
                                    if (Array.isArray(cards))
                                        for (var i of cards) {
                                            if (i == card.suit) return true;
                                        }
                                },
                            },
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player, storage) {
                                var suits = player.storage.aige_wjxs1;
                                if (suits) return event.card && suits.includes(event.card.suit);
                            },
                            content() {
                                player.draw();
                            },
                        },
                        aigewjxs: {
                            audio: 'ext:武将新生/audio:2',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            mark: true,
                            forced: true,
                            intro: {
                                content(storage, player, skill) {
                                    var str = '';
                                    if (player.storage.aige_wjxs1) {
                                        str += '<br><li>当前花色:';
                                        str += get.translation(player.storage.aige_wjxs1);
                                    }
                                    return str;
                                },
                            },
                            content() {
                                'step 0';
                                var list = [
                                    ['花色', '-', 'heart'],
                                    ['花色', '-', 'diamond'],
                                    ['花色', '-', 'spade'],
                                    ['花色', '-', 'club'],
                                ];
                                player.chooseButton(['你选择的花色为', [list, 'vcard']], [1, Math.max(player.getDamagedHp(), 1)]);
                                ('step 1');
                                var links = result.links;
                                var suit = [];
                                if (result.bool) {
                                    player.addTempSkill('aige_wjxs1');
                                    for (var i = 0; i < links.length; i++) {
                                        suit.push(links[i][2]);
                                    }
                                    player.storage.aige_wjxs1 = suit;
                                }
                            },
                        },
                        qinyin_wjxs: {
                            trigger: {
                                player: 'useCard',
                            },
                            usable: 1,
                            audio: 'ext:武将新生/audio:2',
                            forced: true,
                            filter(event, player) {
                                if (!player.isPhaseUsing()) return false;
                                if (player.hasSkill('qinyin_wjxs_1')) return false;
                                var evt = event.getParent('phaseUse');
                                var cards = player.getHistory('useCard', function (evtx) {
                                    if (evtx.getParent('phaseUse') == evt) return evtx.card;
                                });
                                var suits = [];
                                if (Array.isArray(cards))
                                    for (var i of cards) {
                                        suits.add(i.suit);
                                    }
                                return suits.length == 4;
                            },
                            content() {
                                'step 0';
                                event.videoId = lib.status.videoId++;
                                var num = Math.max(player.getDamagedHp(), 1);
                                var func = function (id) {
                                    var list = ['发动一次<哀歌>', `摸${num}张牌`, '令一名角色非锁定技失效直至回合结束', `弃置一名角色${num}张牌`];
                                    var choiceList = ui.create.dialog(`【琴音】:请选择至多${num}项`, 'forcebutton');
                                    choiceList.videoId = id;
                                    for (var i = 0; i < list.length; i++) {
                                        var str = '<div class="popup text" style="width:calc(100% - 10px);display:inline-block">';
                                        str += list[i];
                                        str += '</div>';
                                        var next = choiceList.add(str);
                                        next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                                        next.firstChild.link = i;
                                        Object.setPrototypeOf(next, lib.element.Button.prototype); //QQQ
                                        choiceList.buttons.add(next.firstChild);
                                    }
                                    return choiceList;
                                };
                                if (player.isOnline2()) {
                                    player.send(func, event.videoId);
                                }
                                event.dialog = func(event.videoId);
                                if (player != game.me || _status.auto) {
                                    event.dialog.style.display = 'none';
                                }
                                var next = player.chooseButton();
                                next.set('dialog', event.videoId);
                                next.set('forced', true);
                                next.set('selectButton', [1, num]);
                                ('step 1');
                                if (player.isOnline2()) {
                                    player.send('closeDialog', event.videoId);
                                }
                                event.dialog.close();
                                var list = [];
                                for (var i of result.links) {
                                    game.log(player, '选择了', '#g【琴音】', '的', '#y选项' + get.cnNumber(i + 1, true));
                                    list.push(i + 1);
                                }
                                event.cos = list;
                                ('step 2');
                                if (event.cos.includes(1)) player.useSkill('aigewjxs');
                                ('step 3');
                                if (event.cos.includes(2)) player.draw(Math.max(player.getDamagedHp(), 1));
                                ('step 4');
                                if (event.cos.includes(3))
                                    player
                                        .chooseTarget('请选择1名角色.', 1, true, function (card, player, target) {
                                            return true;
                                        })
                                        .set('ai', function (target) {
                                            return -get.attitude(_status.event.player, target) + 0.5;
                                        });
                                ('step 5');
                                if (result.targets && result.targets[0]) {
                                    //QQQ
                                    result.targets[0].addTempSkill('fengyin');
                                }
                                ('step 6');
                                if (event.cos.includes(4))
                                    player
                                        .chooseTarget('请选择1名有牌的其他角色.', 1, true, function (card, player, target) {
                                            return target != player && target.countCards('he') > 0;
                                        })
                                        .set('ai', function (target) {
                                            return -get.attitude(_status.event.player, target) + 0.5;
                                        });
                                ('step 7');
                                //出牌阶段当你首次使用了四张不同花色的手牌时,你可以选择X项:<li>①发动一次<哀歌></li><li>②摸X张牌</li><li>③令一名角色非锁定技失效直至回合结束</li><li>④弃置一名角色X张牌
                                if (result.targets && result.targets[0]) {
                                    //QQQ
                                    player.discardPlayerCard(result.targets[0], Math.max(player.getDamagedHp(), 1), true, 'he');
                                }
                            },
                        },
                        limu_wjxs: {
                            usable: 1,
                            audio: 'ext:武将新生/audio:2',
                            mod: {
                                targetInRange(card, player, target) {
                                    if (player.countCards('j')) {
                                        return true;
                                    }
                                },
                                cardUsableTarget(card, player, target) {
                                    if (player.countCards('j')) return true;
                                },
                            },
                            hiddenCard(player, name) {
                                return player.countCards('he') > 0;
                            },
                            enable: 'chooseToUse',
                            filter(event, player) {
                                for (var i in lib.card) {
                                    var info = lib.card[i];
                                    if (info.mode && !info.mode.includes(lib.config.mode)) continue;
                                    if (!info.content) continue;
                                    if (info.type == 'delay' && event.filterCard({ name: i }, player, event)) {
                                        return true;
                                    }
                                }
                            }, //QQQ
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    for (var i in lib.card) {
                                        var info = lib.card[i];
                                        if (info.mode && !info.mode.includes(lib.config.mode)) continue;
                                        if (!info.content) continue;
                                        if (info.type == 'delay' && event.filterCard({ name: i }, player, event)) {
                                            list.push(i);
                                        }
                                    }
                                    return ui.create.dialog('立牧', [list, 'vcard'], 'hidden');
                                },
                                backup(links, player) {
                                    return {
                                        audio: 'limu',
                                        filterCard(card, player, target) {
                                            return true;
                                        },
                                        check(card, player, target) {
                                            return 9 - get.value(card);
                                        },
                                        selectTarget: -1,
                                        filterTarget(card, player, target) {
                                            return player == target;
                                        },
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        position: 'hs',
                                        popname: true,
                                        onuse(links, player) {
                                            player.hp = player.maxHp;
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张牌当做' + get.translation(links[0][3] || '') + get.translation(links[0][2]) + '使用';
                                },
                            },
                            ai: {
                                order() {
                                    var player = _status.event.player;
                                    var event = _status.event;
                                    if (event.filterCard && event.filterCard({ name: 'jiu' }, player, event) && get.effect(player, { name: 'jiu' }) > 0 && player.countCards('hs', { type: 'basic' }) >= 2) {
                                        return 3.3;
                                    }
                                    return 3.1;
                                },
                                respondSha: true,
                                skillTagFilter(player, tag, arg) {
                                    if (
                                        player.hasCard(function (card) {
                                            return get.type(card) == 'basic';
                                        }, 'hs')
                                    ) {
                                        if (tag == 'respondSha') {
                                            if (arg != 'use') return false;
                                        }
                                    } else {
                                        return false;
                                    }
                                },
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        luanzong_wjxs: {
                            audio: 'ext:武将新生/audio:2',
                            enable: 'chooseToUse',
                            viewAs: {
                                name: 'sha',
                                storage: {
                                    luanzong: true,
                                },
                            },
                            filter(event, player) {
                                return player.countCards('he') && (!player.getStat('skill').luanzong_wjxs || player.getStat('skill').luanzong_wjxs < player.hp) && player.isPhaseUsing();
                            },
                            viewAsFilter(player) {
                                return player.countCards('hs') > 0;
                            },
                            selectCard: 2,
                            complexCard: true,
                            filterCard(card) {
                                return true;
                            },
                            check(card) {
                                var player = _status.event.player,
                                    card = { name: 'sha' };
                                if (
                                    game.countPlayer(function (current) {
                                        return get.effect_use(current, card, player, player) > 0;
                                    }) <= ui.selected.cards.length
                                )
                                    return 0;
                                return 5 - get.value(card);
                            },
                            position: 'he',
                            ai: {
                                order: () => get.order({ name: 'sha' }) + 0.2,
                                respondSha: true,
                                skillTagFilter(player, tag, arg) {
                                    return player.countCards('hs') > 0;
                                },
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
                            group: ['luanzong_wjxs1'],
                        },
                        luanzong_wjxs1: {
                            trigger: {
                                source: 'damageSource',
                            },
                            forced: true,
                            charlotte: true,
                            filter(event, player) {
                                if (event.card && event.card.storage && event.card.storage.luanzong) return true;
                            }, //QQQ
                            content() {
                                var card = get.cardPile2(function (card) {
                                    return get.type(card) == 'trick';
                                });
                                if (card) player.gain(card, 'gain2');
                            },
                        },
                        gujiang_shiwan: {
                            trigger: {
                                player: 'phaseZhunbei',
                            },
                            audio: 'ext:武将新生/audio:2',
                            content() {
                                'step 0';
                                if (!player.isLinked()) player.link();
                                player.addTempSkill('gujiang_shiwan1');
                            },
                        },
                        quanhen_shiwan: {
                            usable: 1,
                            audio: 'ext:武将新生/audio:2',
                            enable: 'phaseUse',
                            content() {
                                'step 0';
                                player.chooseControl('红色', '黑色').set('ai', function () {
                                    var player = _status.event.player;
                                    if (player.countCards('h', { color: 'red' }) == 1 && player.countCards('h', { color: 'black' }) > 1) return '红色';
                                    return '黑色';
                                });
                                ('step 1');
                                if (result.control == '红色') {
                                    event.control = 'red';
                                } else {
                                    event.control = 'black';
                                }
                                ('step 2');
                                var cards = player.getCards('h');
                                var list = [];
                                if (Array.isArray(cards))
                                    for (var i of cards) {
                                        if (get.color(i) == event.control) list.push(i);
                                    }
                                player.discard(list);
                                player.draw(list.length);
                                player.addTempSkill('quanhen_shiwan2');
                                player.storage.quanhen_shiwan2 = list.length;
                                if (player.hasSkill('gujiang_shiwan1')) {
                                    player.addTempSkill('quanhen_shiwan1');
                                    player.storage.quanhen_shiwan1 = event.control;
                                }
                            },
                        },
                        tayang_sunshiwan: {
                            mark: true,
                            zhuanhuanji: true,
                            marktext: '☯',
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'ext:武将新生/audio:2',
                            intro: {
                                content(storage, player) {
                                    if (storage) return '当前为阴';
                                    else return '当前为阳';
                                },
                            },
                            content() {
                                'step 0';
                                if (player.storage.tayang_sunshiwan != true) {
                                    player.draw(2);
                                    player.recover();
                                } else {
                                    player.loseHp();
                                    var list = game.filterPlayer(function (current) {
                                        return current != player && player.inRange(current);
                                    });
                                    for (var i = 0; i < list.length; i++) player.useCard({ name: 'sha' }, true, list[i]);
                                }
                                player.changeZhuanhuanji('tayang_sunshiwan');
                            },
                        },
                        gujiang_shiwan1: {},
                        quanhen_shiwan1: {
                            mod: {
                                cardUsable(card, player) {
                                    var cards = player.storage.quanhen_shiwan1;
                                    if (cards != get.color(card)) return Infinity;
                                },
                            },
                        },
                        quanhen_shiwan2: {
                            mod: {
                                globalFrom(from, to, distance, storage) {
                                    return distance - from.storage.quanhen_shiwan2;
                                },
                            },
                        },
                        re_tushe: {
                            audio: 'ext:武将新生/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                if (get.type(event.card) == 'equip') return false;
                                if (event.parent.triggeredTargets3.length > 1) return false;
                                return event.targets.length && !player.countCards('h', { type: 'basic' });
                            },
                            content() {
                                player.draw(trigger.targets.length + 1);
                            },
                            ai: {
                                presha: true,
                                pretao: true,
                                threaten: 1.8,
                            },
                        },
                        shixian_wjxs: {
                            trigger: {
                                player: 'useCard',
                            },
                            marktext: '诗',
                            intro: {
                                content: '你有#个标记',
                            },
                            audio: 'ext:武将新生/audio:2',
                            forced: true,
                            filter(event, player) {
                                if (!player.isPhaseUsing()) return false;
                                var evt = event.getParent('phaseUse');
                                var cards = player.getHistory('useCard', function (evtx) {
                                    if (evtx.getParent('phaseUse') == evt && evtx.card != event.card) return evtx.card;
                                });
                                var suits = [];
                                if (Array.isArray(cards))
                                    for (var i of cards) {
                                        suits.add(i.suit);
                                    }
                                return !suits.includes(event.card.suit) && event.card.suit;
                            },
                            content() {
                                player.draw();
                                player.addMark('shixian_wjxs');
                            },
                            group: ['shixian_wjxs_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha' && player.hasMark('shixian_wjxs');
                                    },
                                    content() {
                                        'step 0';
                                        var choiceList = ['①不小于一枚:弃置其一张牌', '②不小于两枚:获得其一张牌', '③不小于三枚:此[杀]不计入次数', '④四枚:此[杀]需要使用X张[闪]抵消'];
                                        var list = [];
                                        var num = Math.min(player.countMark('shixian_wjxs'), 4);
                                        for (var i = 1; i <= num; i++) {
                                            list.push(i);
                                        }
                                        player.chooseControl(list).set('prompt', '你选择弃置').set('choiceList', choiceList);
                                        ('step 1');
                                        player.removeMark('shixian_wjxs', result.control);
                                        if (result.control >= 1) player.discardPlayerCard(trigger.target, 'he', true);
                                        if (result.control >= 2) player.gainPlayerCard(trigger.target, 'he', true);
                                        if (result.control >= 3) {
                                            trigger.addCount = false;
                                            if (player.stat[player.stat.length - 1].card.sha > 0) {
                                                player.stat[player.stat.length - 1].card.sha--;
                                            }
                                        }
                                        if (result.control == 4) {
                                            var num = Math.max(Math.abs(player.countCards('h') - trigger.target.countCards('h')), 1);
                                            var id = trigger.target.playerid;
                                            var map = trigger.parent.customArgs;
                                            if (!map[id]) map[id] = {};
                                            map[id].shanRequired = num;
                                        }
                                    },
                                },
                            },
                        },
                        zuishu_wjxs: {
                            trigger: {
                                player: 'phaseDrawBefore',
                            },
                            audio: 'ext:武将新生/audio:2',
                            content() {
                                'step 0';
                                trigger.cancel();
                                ('step 1');
                                var cards = [];
                                var card1 = get.cardPile2(function (card) {
                                    return get.color(card, false) == 'black';
                                });
                                if (card1) cards.push(card1);
                                var card2 = get.cardPile2(function (card) {
                                    return get.color(card, false) == 'black' && card != card1;
                                });
                                if (card2) cards.push(card2);
                                if (cards.length) player.gain(cards, 'gain2');
                                player.addTempSkill('zuishu_wjxs_1');
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return event.card && get.color(event.card) == 'black';
                                    },
                                    content() {
                                        player.useCard({ name: 'jiu' }, false, player);
                                    },
                                    mod: {
                                        cardUsable(card, player, num) {
                                            if (card.name == 'jiu') return Infinity;
                                        },
                                    },
                                },
                            },
                        },
                        shehun_wjxs: {
                            init(player) {
                                if (!player.storage.shehun_wjxs) player.storage.shehun_wjxs = 1;
                            },
                            trigger: {
                                global: ['dieAfter'],
                            },
                            filter(event, player) {
                                return player.storage.shehun_wjxs > 0;
                            },
                            group: ['shehun_wjxs_add'],
                            content() {
                                'step 0';
                                var list = ['获得随机限定技', '获得随机觉醒技'];
                                var list1 = trigger.player.skills;
                                event.ski = [];
                                _status.characterlist.randomSort();
                                for (var i = 0; i < list1.length; i++) {
                                    if (get.skillInfoTranslation(list1[i], trigger.player)) event.ski.push(list1[i]);
                                }
                                if (event.ski.length) list.push('获得其一个技能');
                                if (list.length) player.chooseControl(list);
                                ('step 1');
                                if (result.control == '获得随机限定技') event.goto(3);
                                if (result.control == '获得随机觉醒技') event.goto(4);
                                if (result.control == '获得其一个技能') event.goto(2);
                                ('step 2');
                                player
                                    .chooseControl(event.ski)
                                    .set(
                                        'choiceList',
                                        event.ski.map((i) => {
                                            return '<div class="skill">【' + get.translation(lib.translate[`${i}_ab`] || get.translation(i).slice(0, 2)) + `】</div><div>${get.skillInfoTranslation(i, player)}</div>`;
                                        })
                                    )
                                    .set('prompt', '你选择获得');
                                event.goto(5);
                                ('step 3');
                                var charat = [];
                                var skills1 = [];
                                for (var i = 0; i < _status.characterlist.length; i++) {
                                    var name = _status.characterlist[i];
                                    var skills2 = lib.character[name][3];
                                    for (var j = 0; j < skills2.length; j++) {
                                        if (lib.skill[skills2[j]].limited) {
                                            charat.push(name);
                                            break;
                                        }
                                    }
                                    if (charat.length == 3) break;
                                }
                                for (var i = 0; i < charat.length; i++) {
                                    var ski = lib.character[charat[i]][3];
                                    for (var j = 0; j < ski.length; j++) {
                                        if (lib.skill[ski[j]].limited) skills1.push(ski[j]);
                                    }
                                }
                                player.chooseControl(skills1).set('dialog', ['请选择要获得的技能', [charat, 'character']]);
                                event.goto(5);
                                ('step 4');
                                var charat = [];
                                var skills1 = [];
                                for (var i = 0; i < _status.characterlist.length; i++) {
                                    var name = _status.characterlist[i];
                                    var skills2 = lib.character[name][3];
                                    for (var j = 0; j < skills2.length; j++) {
                                        if (lib.skill[skills2[j]].juexingji) {
                                            charat.push(name);
                                            break;
                                        }
                                    }
                                    if (charat.length == 5) break;
                                }
                                for (var i = 0; i < charat.length; i++) {
                                    var ski = lib.character[charat[i]][3];
                                    for (var j = 0; j < ski.length; j++) {
                                        if (lib.skill[ski[j]].juexingji) skills1.push(ski[j]);
                                    }
                                }
                                player.chooseControl(skills1).set('dialog', ['请选择要获得的技能', [charat, 'character']]);
                                ('step 5');
                                player.addSkill(result.control);
                                player.storage.shehun_wjxs--;
                            },
                            subSkill: {
                                add: {
                                    trigger: {
                                        player: ['dying'],
                                    },
                                    forced: true,
                                    content() {
                                        player.storage.shehun_wjxs++;
                                    },
                                },
                            },
                        },
                        nixing_wjxs: {
                            trigger: {
                                player: ['damageBefore', 'phaseZhunbei'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var list = ['kanpo', 'guicai', 'jizhi', 'tiandu', 'leiji', 'yiji', 'yingzi', 'jijiu', 'huoji', 'lianying', 'lianhuan', 'shangshi', 'zhichi', 'shibei', 'wuyan', 'fankui', 'fangzhu', 'ganglie', 'zhiheng', 'keji', 'gongxin', 'guanxing'];
                                for (var i in list) {
                                    if (player.hasSkill(i)) list.remove(i);
                                }
                                event.ski = list.randomGets(1);
                                ('step 1');
                                player.addTempSkill(event.ski, { player: 'dieAfter' });
                                if (player == _status.currentPhase) player.storage.nixing_wjxs_add.push([event.ski, true]);
                                else player.storage.nixing_wjxs_add.push([event.ski, false]); //QQQ
                            },
                            group: 'nixing_wjxs_add',
                            subSkill: {
                                add: {
                                    init(player) {
                                        player.storage.nixing_wjxs_add = [];
                                    },
                                    trigger: {
                                        player: ['phaseAfter'],
                                    },
                                    forced: true,
                                    silent: true,
                                    content() {
                                        var list = player.storage.nixing_wjxs_add;
                                        for (var j = 0; j < list.length; j++) {
                                            var i = list[j];
                                            if (!i[1]) {
                                                player.removeSkill(i[0]);
                                                player.storage.nixing_wjxs_add.remove(i);
                                                game.log(player, '失去了', '#y' + i[0]);
                                            } else {
                                                i[1] = false;
                                            }
                                        }
                                    },
                                    popup: false,
                                },
                            },
                        },
                        wenyu_fqsg: {
                            audio: 'ext:风起三国/audio:2',
                            trigger: {
                                player: ['damageEnd'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.count = Math.min(trigger.num, 9);
                                ('step 1');
                                player.judge();
                                ('step 2');
                                if (result.color == 'black') {
                                    if (player.maxHp < 10) player.gainMaxHp();
                                } else if (result.color == 'red') {
                                    player.recover();
                                }
                                event.count--;
                                ('step 3');
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
                                            for (var i of players) {
                                                if (get.attitude(target, i) > 0) {
                                                    max = Math.max(Math.min(5, i.hp) - i.countCards('h'), max);
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
                        zhudian_fqsg: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: true,
                            selectCard: [1, Infinity],
                            selectTarget: [1, 3],
                            discard: true,
                            multitarget: true,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            delay: false,
                            content() {
                                var list = targets;
                                list.push(player);
                                var num = cards.length - targets.length;
                                for (var i = 0; i < list.length; i++) {
                                    list[i].damage();
                                }
                                for (var i = 0; i < list.length; i++) {
                                    list[i].draw(num);
                                }
                            },
                        },
                        fayuan_fqsg: {
                            init(player) {
                                player.storage.fayuan_fqsg = 2;
                            },
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                return player.storage.fayuan_fqsg > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget('选择一名角色', true, function (card, player, target) {
                                    return true;
                                });
                                ('step 1');
                                if (result.targets) event.target = result.targets[0];
                                ('step 2');
                                event.num = Math.max(player.maxHp, 6);
                                if (player.identity == 'zhu' && player.hasSkill('tuliao_fqsg')) {
                                    event.num += 2;
                                }
                                event.num1 = 0;
                                player.discard(player.getCards('h'));
                                var card = get.cards(event.num);
                                game.cardsGotoOrdering(card);
                                player.showCards(card);
                                event.card = card;
                                event.card1 = [];
                                ('step 3');
                                var card = event.card[event.num1];
                                if (player.canUse(card, event.target)) player.useCard(card, event.target);
                                else event.card1.push(card);
                                ('step 4');
                                event.num1++;
                                if (event.num1 < event.num) event.goto(3);
                                ('step 5');
                                player.gain(event.card1);
                                player.storage.fayuan_fqsg--;
                            },
                        },
                        tuliao_fqsg: {
                            zhuSkill: true,
                        },
                        放逐: {
                            audio: 'ext:武将新生/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            preHidden: true,
                            filter(event, player) {
                                return player.getDamagedHp() && event.num;
                            },
                            content() {
                                'step 0';
                                event.count = Math.min(trigger.num, 9);
                                ('step 1');
                                event.num = player.getDamagedHp();
                                event.list = ['令一名角色翻面', '发动一次颂威', `视为使用${player.getDamagedHp()}张【杀】`];
                                ('step 2');
                                if (event.list.length) {
                                    if (!event.list.includes('取消')) event.list.push('取消');
                                    player
                                        .chooseControl(event.list, function () {
                                            if (event.list.includes('令一名角色翻面')) return '令一名角色翻面';
                                            if (event.list.includes('发动一次颂威')) return '发动一次颂威';
                                            if (event.list.includes(`视为使用${player.getDamagedHp()}张【杀】`)) return `视为使用${player.getDamagedHp()}张【杀】`;
                                        })
                                        .set('prompt', get.prompt2('放逐'));
                                }
                                ('step 3');
                                event.control = result.control;
                                if (result.control == '取消') event.goto(7);
                                if (result.control == `视为使用${player.getDamagedHp()}张【杀】`) {
                                    event.list.remove(`视为使用${player.getDamagedHp()}张【杀】`);
                                    player.chooseTarget(`请选择${player.getDamagedHp()}张【杀】的目标`, function (card, player, target) {
                                        return target != player;
                                    }).ai = function (target2) {
                                        return get.effect(target2, { name: 'sha' }, player, player);
                                    };
                                }
                                if (result.control == '发动一次颂威') {
                                    event.list.remove('发动一次颂威');
                                    var targets = game.filterPlayer();
                                    targets.remove(player);
                                    targets.sort(lib.sort.seat);
                                    event.targets = targets;
                                    event.order = 0;
                                }
                                if (result.control == '令一名角色翻面') {
                                    event.list.remove('令一名角色翻面');
                                    player.chooseTarget(get.prompt('放逐'), '令一名其他角色将武将牌翻面', function (card, player, target) {
                                        return player != target;
                                    }).ai = function (target) {
                                        var player = _status.event.player;
                                        if (get.attitude(_status.event.player, target) <= 0) {
                                            if (!target.classList.contains('turnedover')) return 1000;
                                        }
                                        if (get.attitude(_status.event.player, target) > 0) {
                                            if (target.classList.contains('turnedover')) return 1000;
                                        }
                                        return -1;
                                    };
                                }
                                ('step 4');
                                if (event.control == `视为使用${player.getDamagedHp()}张【杀】`) {
                                    var target = result.targets[0];
                                    for (var i = 0; i < player.getDamagedHp(); i++) {
                                        player.line(target, 'green');
                                        player.useCard({ name: 'sha' }, target);
                                    }
                                }
                                if (event.control == '发动一次颂威') {
                                    event.targets[event.order].chooseControl(`令${get.translation(player)}摸一张牌`, '弃一张牌', function () {
                                        var att = get.attitude(event.targets[event.order], player);
                                        if (att <= 0) {
                                            return '弃一张牌';
                                        } else return `令${get.translation(player)}摸一张牌`;
                                    });
                                }
                                if (event.control == '令一名角色翻面') {
                                    var target = result.targets[0];
                                    target.turnOver();
                                }
                                ('step 5');
                                if (event.control == '发动一次颂威') {
                                    if (result.control == '弃一张牌') {
                                        event.targets[event.order].chooseToDiscard(true, 'he');
                                    } else {
                                        player.line(event.targets[event.order], 'green');
                                        player.draw();
                                    }
                                    event.order++;
                                    if (event.order < event.targets.length) {
                                        event.goto(4);
                                    }
                                }
                                ('step 6');
                                event.num--;
                                if (event.num > 0) event.goto(2);
                                ('step 7');
                                event.count--;
                                if (event.count > 0) event.goto(1);
                            },
                        },
                        颂威: {
                            audio: 'ext:武将新生/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                var targets = game.filterPlayer();
                                targets.remove(player);
                                targets.sort(lib.sort.seat);
                                player.line(targets, 'green');
                                event.targets = targets;
                                event.order = 0;
                                ('step 1');
                                event.targets[event.order].chooseControl(`令${get.translation(player)}摸一张牌`, '弃一张牌', function () {
                                    var att = get.attitude(event.targets[event.order], player);
                                    if (att <= 0) {
                                        return '弃一张牌';
                                    } else return `令${get.translation(player)}摸一张牌`;
                                });
                                ('step 2');
                                if (result.control == '弃一张牌') {
                                    event.targets[event.order].chooseToDiscard(true, 'he');
                                } else {
                                    player.line(event.targets[event.order], 'green');
                                    player.draw();
                                }
                                ('step 3');
                                event.order++;
                                if (event.order < event.targets.length) {
                                    event.goto(1);
                                }
                            },
                            ai: {
                                order: 9.1,
                                basic: {
                                    order: 1,
                                },
                                result: {
                                    player(player) {
                                        return 1;
                                    },
                                },
                            },
                        },
                        行殇: {
                            audio: 'ext:武将新生/audio:2',
                            trigger: {
                                global: 'die',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var target = trigger.player;
                                var list = [];
                                var listm = [];
                                var listv = [];
                                if (target.name1 != undefined) listm = lib.character[target.name1][3];
                                else listm = lib.character[target.name][3];
                                if (target.name2 != undefined) listv = lib.character[target.name2][3];
                                listm = listm.concat(listv);
                                var func = function (skill) {
                                    var info = get.info(skill);
                                    if (!info || info.hiddenSkill || info.zhuSkill || info.juexingji || info.dutySkill || lib.skill.drlt_duorui.bannedList.includes(skill)) return false;
                                    return true;
                                };
                                for (var i = 0; i < listm.length; i++) {
                                    if (func(listm[i])) list.add(listm[i]);
                                }
                                event.skills = list;
                                var choice = ['增加一点体力上限并回复一点体力'];
                                if (list.length) choice.push('获得其一项技能');
                                if (trigger.player.countCards('he')) choice.push('获得牌');
                                choice.push('cancel2');
                                player
                                    .chooseControl(choice)
                                    .set('prompt', get.prompt2('行殇'))
                                    .set('ai', function () {
                                        if (choice.length == 2) return 1;
                                        if (get.value(trigger.player.getCards('he')) > 8) return 2;
                                        return 0;
                                    });
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    if (result.control == '获得牌') {
                                        event.togain = trigger.player.getCards('he');
                                        player.gain(event.togain, trigger.player, 'giveAuto');
                                    }
                                    if (result.control == '增加一点体力上限并回复一点体力') {
                                        player.gainMaxHp();
                                        player.recover();
                                    }
                                    if (result.control == '获得其一项技能') {
                                        if (event.skills.length) {
                                            player
                                                .chooseControl(event.skills)
                                                .set('prompt', '请选择要获得的技能')
                                                .set('ai', function () {
                                                    return event.skills.randomGet();
                                                });
                                        }
                                    }
                                } else event.finish();
                                ('step 2');
                                player.addSkill(result.control);
                                game.log(player, '获得了技能', `#g【${get.translation(result.control)}】`);
                                event.finish();
                            },
                        },
                        zengming_wjxs: {
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                player.chooseTarget('选择一名其他角色', true, function (card, player, target) {
                                    return target != player;
                                });
                                ('step 2');
                                if (result.bool && result.targets && result.targets.length) {
                                    event.tar = result.targets[0];
                                } else event.finish();
                                ('step 3');
                                player.chooseCard('he', true);
                                ('step 4');
                                var target = event.tar;
                                target.gain(result.cards, player, 'giveAuto');
                                var num = result.cards[0].number;
                                if (num < 6 && num > 0) {
                                    player.draw(1);
                                    event.tar.draw(1);
                                    event.num1 = 1;
                                } else if (num >= 6 && num <= 10) {
                                    player.draw(2);
                                    event.tar.draw(2);
                                    event.num1 = 2;
                                } else if ([11, 12, 13].includes(num)) {
                                    player.draw(3);
                                    event.tar.draw(3);
                                    event.num1 = 3;
                                }
                                ('step 5');
                                _status.characterlist.randomSort();
                                var charat = [];
                                for (var i = 0; i < _status.characterlist.length; i++) {
                                    var name = _status.characterlist[i];
                                    if (lib.character[name][1] == event.tar.group) charat.push(name);
                                    if (charat.length == 6) break;
                                }
                                var num1 = event.num1;
                                player.chooseButton(['你选择', [charat, 'character']], [1, num1], true);
                                ('step 6');
                                var link = result.links;
                                for (var i = 0; i < link.length; i++) {
                                    var ski = lib.character[link[i]][3];
                                    for (var j = 0; j < ski.length; j++) player.addTempSkill(ski[j], 'zengming_wjxsBefore');
                                }
                            },
                        },
                        binan_wjxs: {
                            init(player) {
                                if (!player.storage.binan_wjxs) player.storage.binan_wjxs = 0;
                            },
                            trigger: {
                                player: 'damageEnd',
                            },
                            mod: {
                                globalTo(from, to, current) {
                                    if (to.storage.binan_wjxs > 0) return current + to.storage.binan_wjxs;
                                },
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (!player.hasSkill('binan_wjxs_2')) event.finish();
                                player.storage.binan_wjxs += game.countPlayer();
                                player.addTempSkill('binan_wjxs_2', 'roundStart');
                                ('step 1');
                                var list = ['摸两张牌'];
                                if (player.canMoveCard()) list.push('移动场上的一张牌');
                                player.chooseControl(list);
                                ('step 2');
                                if (result.control == '摸两张牌') {
                                    player.draw(2);
                                } else player.moveCard(true);
                            },
                            group: 'binan_wjxs_1',
                            subSkill: {
                                1: {
                                    forced: true,
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    content() {
                                        player.storage.binan_wjxs = 0;
                                    },
                                },
                                2: {},
                            },
                        },
                        re_kangkai: {
                            audio: 'ext:武将新生/audio:2',
                            trigger: {
                                global: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                return get.tag(event.card, 'damage') && get.distance(player, event.target) <= 1 && event.target.isIn();
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
                                trigger.target.gain(result.cards, player, 'give');
                                event.card = result.cards[0];
                                ('step 2');
                                trigger.target.chooseUseTarget(card);
                            },
                            ai: {
                                threaten: 1.1,
                            },
                        },
                        jinwei_jing_main: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(false, '令一名武将与你距离始终为1直至你的下回合开始', function (card, player, target) {
                                    return player != target;
                                    //&&!player.storage.jinwei_jing_add.includes(target);
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.addTempSkill('jinwei_jing_add', { player: 'phaseBeginStart' });
                                    player.storage.jinwei_jing_add.add(result.targets[0]);
                                    player.markSkill('jinwei_jing_add');
                                }
                            },
                        },
                        jinwei_jing_add: {
                            mod: {
                                globalTo(from, to, distance) {
                                    if (to.storage.jinwei_jing_add.includes(from)) return -Infinity;
                                },
                                globalFrom(from, to, distance) {
                                    if (from.storage.jinwei_jing_add.includes(to)) return -Infinity;
                                },
                            },
                            marktext: '掌控',
                            intro: {
                                name: '掌控',
                                content: '已选中$为技能目标',
                            },
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = [];
                            },
                        },
                        luanshi_sdz: {
                            audio: 'ext:武将新生/audio:2',
                            trigger: {
                                player: 'die',
                            },
                            enable: 'phaseUse',
                            forceDie: true,
                            mark: true,
                            limited: true,
                            async content(event, trigger, player) {
                                player.awakenSkill('luanshi_sdz');
                                player.storage.luanshi_sdz = true;
                                game.checkResult = function () {
                                    var me = game.me._trueMe || game.me;
                                    if (game.players.length == 1) {
                                        if (me.isAlive()) game.over(true);
                                        else game.over(false);
                                    }
                                };
                            },
                            ai: {
                                expose: 0.25,
                            },
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        yuquan_sdz: {
                            audio: 'ext:武将新生/audio:2',
                            trigger: {
                                global: 'phaseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player != event.player;
                            },
                            content() {
                                player.phase('nodelay');
                            },
                        },
                        'H-shichou': {
                            marktext: '仇',
                            intro: {
                                name2: '誓仇',
                                content: 'mark',
                            },
                            audio: 'ol_shichou',
                            trigger: {
                                global: 'gameStart',
                                player: 'enterGame',
                            },
                            forced: true,
                            content() {
                                player.addMark('H-shichou', 1);
                            },
                            group: ['H-shichou_1', 'H-shichou_2', 'H-shichou_3'],
                            subSkill: {
                                1: {
                                    audio: 'ol_shichou',
                                    enable: 'phaseUse',
                                    filter(event, player) {
                                        return event.player.countMark('H-shichou') > 0;
                                    },
                                    filterTarget(card, player, target) {
                                        if (target.hasMark('H-shichou')) return false;
                                        return player != target > 0;
                                    },
                                    prompt: '选择一名角色获得【仇】标记',
                                    content() {
                                        player.removeMark('H-shichou', 1);
                                        target.addMark('H-shichou', 1);
                                        player.draw(3);
                                    },
                                },
                                2: {
                                    audio: 'ol_shichou',
                                    trigger: {
                                        source: 'damageBegin2',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.countMark('H-shichou') > 0;
                                    },
                                    content() {
                                        trigger.cancel();
                                        trigger.player.loseMaxHp(trigger.num);
                                    },
                                },
                                3: {
                                    audio: 'ol_shichou',
                                    trigger: {
                                        global: 'dieAfter',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    forceDie: true,
                                    filter(event, player) {
                                        return event.player.countMark('H-shichou') > 0;
                                    },
                                    content() {
                                        player.addMark('H-shichou', 1);
                                    },
                                },
                            },
                        },
                        'H-tieji': {
                            audio: 'retieji',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            logTarget: 'target',
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                'step 0';
                                if (!trigger.target.hasSkill('fengyin')) {
                                    trigger.target.addTempSkill('fengyin');
                                }
                                ('step 1');
                                trigger.parent.directHit.add(trigger.target);
                            },
                            group: 'H-tieji_1',
                            subSkill: {
                                1: {
                                    audio: 'ol_shichou',
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha' && event.player.countMark('H-shichou') > 0;
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                },
                            },
                        },
                        'H-mashu': {
                            audio: 'tieji',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var list = ['坐骑', '【杀】', '取消'];
                                player.chooseControl(list).set('prompt', get.prompt2('H-mashu'));
                                ('step 1');
                                if (result.control == '坐骑') {
                                    var card = get.cardPile2(function (card) {
                                        var type = get.subtype(card);
                                        if (type != 'equip3' && type != 'equip4' && type != 'equip6') return false;
                                        return true;
                                    });
                                    if (card) player.gain(card, 'gain2');
                                    else game.log('但是狗卡已经没有马了!');
                                } else if (result.control == '【杀】') {
                                    var card = get.cardPile2(function (card) {
                                        return card.name == 'sha';
                                    });
                                    if (card) player.gain(card, 'gain2');
                                    else game.log('但是牌堆里已经没有杀了!');
                                }
                            },
                        },
                        zengcai_Angel: {
                            marktext: '赠财',
                            mark: true,
                            intro: {
                                content(storage, player) {
                                    if (!player.storage.zengcai) player.storage.zengcai = 0;
                                    var str = '<li>';
                                    if (player.storage.zengcai == 0) str += '你未因赠财获得过装备';
                                    else str += `你已因赠财获得过${get.translation(player.storage.zengcai)}次装备`;
                                    return str;
                                },
                            },
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            content() {
                                'step 0';
                                var num = Math.min(game.countPlayer(), 5);
                                player.draw(num);
                                ('step 1');
                                if (player.countCards('h') > player.maxHp) player.chooseCard('he', true, [2, player.countCards('he')], '选择需要分配的牌');
                                else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    event.card = result.cards;
                                    player.chooseTarget(true, '选择需要交给牌的角色', (event, player, target) => {
                                        return target != player;
                                    });
                                }
                                ('step 3');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    player.chooseCard('he', true, [1, event.card.length], `选择需要为${get.translation(result.targets[0])}分配的牌`, function (card) {
                                        if (event.card.includes(card)) return true;
                                        return false;
                                    });
                                }
                                ('step 4');
                                if (result.bool) {
                                    event.target.gain(result.cards, player, 'giveAuto');
                                    for (var i of result.cards) event.card.remove(i);
                                }
                                ('step 5');
                                if (event.card.length)
                                    player.chooseTarget(true, '选择需要交给牌的角色', (event, player, target) => {
                                        return target != player;
                                    });
                                else event.goto(7);
                                ('step 6');
                                if (result.bool) result.targets[0].gain(event.card, player, 'giveAuto');
                                ('step 7');
                                if (player.countCards('h') < player.maxHp) {
                                    var card = get.cardPile2(function (card) {
                                        return get.type2(card) == 'equip';
                                    });
                                    if (card) player.gain(card, 'gain2', 'log');
                                    if (!player.storage.zengcai) player.storage.zengcai = 0;
                                    player.storage.zengcai++;
                                }
                            },
                        },
                        jieyi_Angel: {
                            derivation: 'jieyi_Angel',
                            forced: true,
                            juexingji: true,
                            trigger: {
                                player: 'phaseAfter',
                            },
                            filter(event, player) {
                                return player.storage.zengcai > 3;
                            },
                            content() {
                                player.removeSkill('zengcai_Angel');
                                player.addSkill('zhaobing_Angel');
                                player.phase('nodelay');
                                player.awakenSkill('jieyi_Angel');
                            },
                        },
                        zhaobing_Angel: {
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (card.name == 'sha') return true;
                                },
                                cardDiscardable(card, player, name) {
                                    if (!player.storage.gongting) player.storage.gongting = [];
                                    if (name == 'phaseDiscard' && card.name == 'sha') return false;
                                },
                            },
                            trigger: {
                                player: 'useCardEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && _status.currentPhase == player;
                            },
                            content() {
                                if (player.countCards('h') > player.maxHp) player.getStat().card.sha--;
                                else player.darw();
                            },
                        },
                        zhuiyuanwjxs: {
                            trigger: {
                                global: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.player != player && player.countCards('he') > 0;
                            },
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            check: (event, player) => event.player.isFriendsOf(player),
                            async content(event, trigger, player) {
                                //QQQ
                                const result = await player.chooseCard('he', true).forResult();
                                if (result.cards && result.cards[0]) {
                                    trigger.player.gain(result.cards, 'giveAuto');
                                    if (trigger.source && trigger.source.countCards('he')) {
                                        const { result: result1 } = await player
                                            .choosePlayerCard(trigger.source, 'he', [1, Math.min(trigger.player.getDamagedHp(), trigger.source.countCards('he'))])
                                            .set('ai', function (button) {
                                                return get.value(button.link) * -get.attitude(player, trigger.source);
                                            })
                                            .set('forceAuto', true);
                                        if (result1.cards && result1.cards[0]) {
                                            player.addToExpansion('giveAuto', result1.cards, player).gaintag.add('zhuiyuanwjxs');
                                        }
                                    }
                                }
                            },
                            group: 'zhuiyuanwjxs_lose',
                            subSkill: {
                                lose: {
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    forced: true,
                                    filter(event, player, name) {
                                        return player.getExpansions('zhuiyuanwjxs').length > player.hp;
                                    },
                                    content() {
                                        'step 0';
                                        player.loseHp();
                                        ('step 1');
                                        player.chooseUseTarget({ name: 'sha' }, '是否视为使用一张【杀】？', false, 'nodistance');
                                    },
                                },
                            },
                        },
                        qiaobianwjxs: {
                            subSkill: {
                                card: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    content() {
                                        player.removeSkill('qiaobianwjxs_card');
                                    },
                                    mod: {
                                        maxHandcard(player, num) {
                                            return num - player.storage.qiaobianwjxs_card;
                                        },
                                    },
                                },
                                tar: {},
                                use: {
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    filter(event, player) {
                                        return player.storage.qiaobianwjxs_tar && player.storage.qiaobianwjxs_tar.length;
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseTarget('选择一名角色', true, function (card, player, target) {
                                            return target.hasSkill('qiaobianwjxs_tar');
                                        });
                                        ('step 1');
                                        if (result.bool && result.targets && result.targets.length) {
                                            event.tar = result.targets[0];
                                            var list = ['摸牌阶段', '出牌阶段', '弃牌阶段', '准备阶段', '结束阶段'];
                                            player.chooseControl(list).set('prompt', '你选择令其执行一个');
                                        }
                                        ('step 2');
                                        if (result.control != 'cancel2') {
                                            var tar = event.tar;
                                            var list1 = ['phaseDraw', 'phaseUse', 'phaseDiscard', 'phaseZhunbei', 'phaseJieshu'][result.index];
                                            var next = tar[list1]();
                                            event.next.remove(next);
                                            trigger.next.push(next);
                                        }
                                    },
                                },
                            },
                            group: 'qiaobianwjxs_use',
                            audio: 'ext:武将新生/audio:2',
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return target.getHandcardLimit() > 0;
                            },
                            filter(event, player, name) {
                                return player.getExpansions('zhuiyuanwjxs').length;
                            },
                            content() {
                                'step 0';
                                player.chooseCardButton('令其获得一张', player.getExpansions('zhuiyuanwjxs'), true);
                                ('step 1');
                                target.gain(result.links);
                                target.addTempSkill('qiaobianwjxs_card', 'die');
                                if (!target.storage.qiaobianwjxs_card) target.storage.qiaobianwjxs_card = 0;
                                target.storage.qiaobianwjxs_card++;
                                ('step 2');
                                target.addTempSkill('qiaobianwjxs_tar');
                            },
                        },
                        kuangcaiwjxs: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            content() {
                                player.addTempSkill('kuangcaiwjxs_use');
                                player.addTempSkill('kuangcaiwjxs_end');
                            },
                            subSkill: {
                                use: {
                                    mod: {
                                        cardUsable(card) {
                                            if (get.info(card) && get.info(card).forceUsable) return;
                                            return Infinity;
                                        },
                                        targetInRange() {
                                            return true;
                                        },
                                    },
                                    trigger: {
                                        player: ['loseAfter'],
                                    },
                                    forced: true,
                                    charlotte: true,
                                    silent: true,
                                    popup: false,
                                    content() {
                                        player.draw();
                                    },
                                },
                                end: {
                                    trigger: {
                                        player: ['phaseJieshuBegin'],
                                    },
                                    forced: true,
                                    charlotte: true,
                                    silent: true,
                                    popup: false,
                                    filter(event, player) {
                                        return game.hasPlayer(function (current) {
                                            return current.getHistory('damage').length;
                                        });
                                    },
                                    content() {
                                        'step 0';
                                        event.tar = game.filterPlayer(function (current) {
                                            return current.getHistory('damage').length;
                                        });
                                        event.num = 0;
                                        ('step 1');
                                        event.tar[event.num].chooseToDiscard('是否弃置一张牌对其造一点伤害', false).set('ai', function (card) {
                                            return 7 - get.useful(card);
                                        });
                                        ('step 2');
                                        if (result.bool) player.damage(event.tar[event.num]);
                                        ('step 3');
                                        event.num++;
                                        if (event.num <= event.tar.length - 1) event.goto(1);
                                    },
                                },
                            },
                            ai: {
                                threaten: 4.5,
                            },
                        },
                        shejianwjxs: {
                            audio: 'ext:武将新生/audio:2',
                            trigger: {
                                player: 'compare',
                                target: 'compare',
                            },
                            filter(event, player) {
                                if (player.getHistory('sourceDamage').length) return !event.iwhile;
                            },
                            content() {
                                var num = player.getHistory('sourceDamage').length;
                                if (player == trigger.player) {
                                    trigger.num1 += num;
                                    if (trigger.num1 > 13) trigger.num1 = 13;
                                } else {
                                    trigger.num2 += num;
                                    if (trigger.num2 > 13) trigger.num2 = 13;
                                }
                                game.log(player, '的拼点牌点数+' + num);
                            },
                            group: 'shejianwjxs_pd',
                            subSkill: {
                                pd: {
                                    trigger: {
                                        player: ['damageEnd'],
                                    },
                                    filter(event, player) {
                                        return event.source && player.canCompare(event.source);
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseToCompare(trigger.source);
                                        ('step 1');
                                        if (result.bool) {
                                            player.recover();
                                            var card = result.target;
                                            if (get.position(card) == 'd') player.gain(card, 'gain2');
                                        } else player.discardPlayerCard('he', trigger.source, true);
                                    },
                                },
                            },
                        },
                        zhizuo_xishan: {
                            trigger: {
                                global: ['useCardToPlayered'],
                            },
                            filter(event, player) {
                                if (get.tag(event.card, 'damage') || event.player == player || event.target == player) return false;
                                return true;
                            },
                            logTarget: 'target',
                            content() {
                                'step 0';
                                game.log(trigger.card, '的目标由', trigger.target, '改为', player);
                                for (var i = 0; i < trigger.targets.length; i++) if (trigger.targets[i] == trigger.target) trigger.targets[i] = player;
                                if (!player.hasSkill('zhizuo_xishan_cishu')) {
                                    player.addTempSkill('zhizuo_xishan_cishu', 'phaseEnd');
                                    event.finish();
                                }
                                ('step 1');
                                player.chooseCard('he', false).set('prompt', `〖喜膳〗:交给${get.translation(trigger.player)}一张牌或点取消流失一点体力值`);
                                ('step 2');
                                if (result.cards && result.cards.length) trigger.player.gain(result.cards, player, 'giveAuto');
                                else player.loseHp();
                            },
                            subSkill: {
                                cishu: {},
                            },
                        },
                        zhizuo_xidao: {
                            enable: 'phaseUse',
                            usable: 3,
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                if (player.countCards('he') == 0) event.finish();
                                ('step 2');
                                player.chooseCardTarget(true, {
                                    filterCard: true,
                                    selectCard: 1,
                                    position: 'he',
                                    filterTarget: true,
                                    prompt: '选择一张牌,置于一名角色的武将牌上,称为<檄>',
                                });
                                ('step 3');
                                if (result.bool) {
                                    event.player1 = result.targets[0];
                                    result.targets[0].addSkill('zhizuo_xidao_mark');
                                    result.targets[0].addToExpansion(player, 'give', result.cards).gaintag.add('zhizuo_xidao_mark');
                                } else event.finish();
                                ('step 4');
                                var cards = event.player1.getExpansions('zhizuo_xidao_mark');
                                var list = [];
                                if (Array.isArray(cards)) for (var i of cards) if (!list.includes(get.type(i)) || list.length == 0) list.push(get.type(i));
                                //game.log(list,list.length);
                                var list1 = ['fengyin'];
                                if (list.length >= 3) event.player1.addAdditionalSkill('zhizuo_xidao_mark', list1);
                            },
                            group: 'zhizuo_xidao_pai',
                            subSkill: {
                                mark: {
                                    mark: true,
                                    marktext: '檄',
                                    intro: {
                                        content: 'expansion',
                                        markcount: 'expansion',
                                    },
                                    onremove(player, skill) {
                                        var cards = player.getExpansions(skill);
                                        if (cards.length) player.loseToDiscardpile(cards);
                                    },
                                    mod: {
                                        cardEnabled2(card, player) {
                                            var cards = player.getExpansions('zhizuo_xidao_mark');
                                            var type1 = get.type(card);
                                            if (Array.isArray(cards)) for (var i of cards) if (get.type(i) == type1) return false;
                                        },
                                    },
                                },
                                pai: {
                                    trigger: {
                                        global: ['phaseZhunbeiBegin'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var cards = event.player.getExpansions('zhizuo_xidao_mark');
                                        return cards.length && event.player.countCards('he') > 0;
                                    },
                                    content() {
                                        'step 0';
                                        event.cards = trigger.player.getExpansions('zhizuo_xidao_mark');
                                        event.i = 0;
                                        ('step 1');
                                        trigger.player.chooseCard('he', false, [1, event.cards.length], `将至多${event.cards.length}张牌交给${get.translation(player)}之后移除等量的‘檄’`);
                                        ('step 2');
                                        if (result.bool && result.cards.length) {
                                            event.i = result.cards.length;
                                            trigger.player.give(result.cards, player, true);
                                        }
                                        ('step 3');
                                        if (event.i != 0) trigger.player.chooseButton([`移除${event.i}张‘檄’`, event.cards], event.i, true);
                                        else event.goto(5);
                                        ('step 4');
                                        if (result.bool) {
                                            trigger.player.loseToDiscardpile(result.links);
                                        }
                                        ('step 5');
                                        var list = [];
                                        var cards = trigger.player.getExpansions('zhizuo_xidao_mark');
                                        if (Array.isArray(cards)) for (var i of cards) if (!list.includes(get.type(i))) list.push(get.type(i));
                                        var list1 = ['fengyin'];
                                        game.log(list, list.length);
                                        if (list.length < 3) trigger.player.removeAdditionalSkill('zhizuo_xidao_mark', list1);
                                    },
                                },
                            },
                        },
                        moulvbu_wushuang: {
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            check(event, player) {
                                if (event.target.countCards('he') <= 0) return false;
                                return get.attitude(player, event.target) < 0;
                            },
                            logTarget: 'target',
                            content() {
                                'step 0';
                                player.gainPlayerCard(trigger.target, false, 'h');
                                ('step 1');
                                if (result.bool) {
                                    event.card = result.cards[0];
                                } else {
                                    player.draw('visible');
                                }
                                ('step 2');
                                if (!event.card) event.card = result[0];
                                ('step 3');
                                if (event.card) {
                                    if (event.card.name == 'sha') player.chooseUseTarget('使用' + get.translation(trigger.cards), event.card, false, 'nodistance');
                                }
                            },
                            group: ['moulvbu_wushuang_use'],
                            subSkill: {
                                use: {
                                    trigger: {
                                        target: 'useCardToTargeted',
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha';
                                    },
                                    content() {
                                        'step 0';
                                        player.gainPlayerCard(trigger.player, true, 'he');
                                        ('step 1');
                                        player.chooseToUse(function (card) {
                                            if (!lib.filter.cardEnabled(card, _status.event.player, _status.event)) {
                                                return false;
                                            }
                                            return card;
                                        }, '是否使用一张牌？');
                                        ('step 2');
                                        var bool = player.hasHistory('sourceDamage', function (evt) {
                                            var card = evt.card;
                                            if (!card) return false;
                                            return get.translation(result.card) == get.translation(card);
                                        });
                                        if (bool) trigger.parent.excluded.add(player);
                                    },
                                },
                            },
                        },
                        moulvbu_zhengmeng: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            content() {
                                player.addTempSkill('moulvbu_zhengmeng_use');
                                player.addTempSkill('moulvbu_zhengmeng_draw');
                                player.addTempSkill('moulvbu_zhengmeng_end', 'die');
                            },
                            subSkill: {
                                use: {
                                    mod: {
                                        selectTarget(card, player, range) {
                                            if (Array.isArray(range) && range[1] == -1) return;
                                            if (card.name == 'sha') range[1] += 2;
                                        },
                                        cardUsable(card, player, num) {
                                            if (card.name == 'sha') return num + 1;
                                        },
                                    },
                                },
                                draw: {
                                    trigger: {
                                        player: 'phaseDrawBegin2',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !event.numFixed;
                                    },
                                    content() {
                                        trigger.num += Math.min(player.getAttackRange());
                                    },
                                },
                                end: {
                                    trigger: {
                                        player: 'phaseUseEnd',
                                    },
                                    forced: true,
                                    content() {
                                        player.skip('phaseDiscard');
                                        if (player.hp - 1 > 0) player.loseHp(player.hp - 1);
                                    },
                                },
                            },
                        },
                    },
                };
                lib.config.all.characters.add('武将新生');
                lib.config.characters.add('武将新生');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:武将新生/image/${i}.jpg`)
                }
                lib.translate['武将新生_character_config'] = `武将新生`;
                return QQQ;
            });
        },
        package: {
            card: {
                card: {
                    诱敌深入: {
                        audio: true,
                        type: 'trick',
                        enable: true,
                        filterTarget(card, player, target) {
                            if (player != game.me) return false;
                            return target != player;
                        },
                        content() {
                            'step 0';
                            target.useCard({ name: 'sha' }, true, player);
                            ('step 1');
                            player.discardPlayerCard(target, true);
                            player.discardPlayerCard(target, true);
                        },
                        ai: {
                            basic: {
                                order: 4,
                                value: 100,
                                useful: 1,
                            },
                            wuxie(target, card, player, current, state) {
                                if (get.attitude(current, player) >= 0 && state > 0) return false;
                            },
                            result: {
                                player(player) {
                                    var nh = player.countCards('h');
                                    if (nh <= player.hp && nh <= 4 && _status.event.name == 'chooseToUse') {
                                        if (typeof _status.event.filterCard == 'function' && _status.event.filterCard({ name: 'huogong' }, player, _status.event)) {
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
                                    if (target.hasSkill('huogong2') || target.countCards('h') == 0) return 0;
                                    if (player.countCards('h') <= 1) return 0;
                                    if (target == player) {
                                        if (typeof _status.event.filterCard == 'function' && _status.event.filterCard({ name: 'huogong' }, player, _status.event)) {
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
                        selectTarget: 1,
                        fullskin: true,
                    },
                },
                translate: {
                    诱敌深入: '诱敌深入',
                    诱敌深入_info: '你可选择一名其他角色,其视为对你使用一张杀,弃置其2张牌',
                },
            },
            intro: "<br><br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br><br></span>设计:问计一万箭、池雨思故渊;制作:池雨思故渊、辉烬贺流年、Angel",
            author: '池雨思故渊、辉烬贺流年、Angel',
            version: '1.0',
        },
    };
});
