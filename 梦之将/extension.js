import { lib, game, ui, get, ai, _status } from '../../noname.js'
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '梦之将',
        content(config, pack) { },
        precontent() {
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '梦之将',
                    connect: true,
                    character: {
                        genm_meng_wenyang: ['male', 'jin', 5, ['膂力', '仇决', 'genn_beishui'], ['ext:梦之将/image/genm_meng_wenyang.jpg', 'die:ext:梦之将/audio/die/genm_meng_wenyang.mp3']], //QQQ
                        genm_meng_xiahoujie: ['male', 'wei', 5, ['裂胆'], ['ext:梦之将/image/genm_meng_xiahoujie.jpg', 'die:ext:梦之将/audio/die/genm_meng_xiahoujie.mp3']],
                        genm_meng_chenshi: ['male', 'shu', 4, ['genm_qingbei'], ['ext:梦之将/image/genm_meng_chenshi.jpg', 'die:ext:梦之将/audio/die/genm_meng_chenshi.mp3']],
                        genm_meng_dingyuan: ['male', 'qun', 4, ['genm_panshi', 'xianshuai', 'genn_cixiao'], ['ext:梦之将/image/genm_meng_dingyuan.jpg', 'die:ext:梦之将/audio/die/genm_meng_dingyuan.mp3']],
                        genm_meng_sunce: ['male', 'wu', 4, ['genm_hunzi', 'genm_meng_zhiba', 'genm_meng_jiang'], ['zhu', 'ext:梦之将/image/genm_meng_sunce.jpg', 'die:ext:梦之将/audio/die/genm_meng_sunce.mp3']],
                        genm_meng_luotong: ['male', 'wu', 4, ['game_meng_qinzheng'], ['ext:梦之将/image/genm_meng_luotong.jpg', 'die:ext:梦之将/audio/die/genm_meng_luotong.mp3']],
                        genm_meng_zhangliao: ['male', 'wei', 4, ['genm_meng_tuxi', 'genm_meng_挫锐', 'genm_meng_zhiti'], ['ext:梦之将/image/genm_meng_zhangliao.jpg', 'die:ext:梦之将/audio/die/genm_meng_zhangliao.mp3']],
                        genm_meng_liufeng: ['male', 'shu', 4, ['genm_meng_xiansi'], ['ext:梦之将/image/genm_meng_liufeng.jpg', 'die:ext:梦之将/audio/die/genm_meng_liufeng.mp3']],
                        genm_meng_liubei: ['male', 'shu', 7, ['genm_meng_zhangwu', 'genm_meng_jijiang', 'genm_meng_rende'], ['des:六阴耀帝', 'ext:梦之将/image/genm_meng_liubei.jpg', 'die:ext:梦之将/audio/die/genm_meng_liubei.mp3']],
                        genm_meng_liuli: ['male', 'shu', 3, ['genm_meng_fanfu', 'genm_meng_shuhuan'], ['ext:梦之将/image/genm_meng_liuli.jpg', 'die:ext:梦之将/audio/die/genm_meng_liuli.mp3']],
                        genm_meng_liyou: ['male', 'shu', 3, ['genm_meng_zezhu', 'genm_meng_dongmou', 'genm_meng_zuoce'], ['ext:梦之将/image/genm_meng_liyou.jpg', 'die:ext:梦之将/audio/die/genm_meng_liyou.mp3']],
                        genm_meng_guanyu: ['male', 'shu', '4/4/3', ['genm_meng_wusheng', 'genm_meng_yijue', 'genm_meng_wuwei'], ['ext:梦之将/image/genm_meng_guanyu.jpg', 'die:ext:梦之将/audio/die/genm_meng_guanyu.mp3']],
                        genm_meng_zhonghui: ['male', 'wei', 4, ['genm_meng_quanji', 'genm_meng_zili'], ['ext:梦之将/image/genm_meng_zhonghui.jpg', 'die:ext:梦之将/audio/die/genm_meng_zhonghui.mp3']],
                        genm_jiu_wuzhugeliang: ['male', 'shu', '3/7', ['genm_jiu_qingshi', 'genm_jiu_jincui', 'genm_jiu_zhizhe'], ['ext:梦之将/image/genm_jiu_wuzhugeliang.jpg', 'die:ext:梦之将/audio/die/genm_jiu_wuzhugeliang.mp3']],
                        genm_meng_xushao: ['male', 'qun', 4, ['genm_meng_pingjian', 'genm_meng_yaping'], ['des:千变万化神左慈', 'ext:梦之将/image/genm_meng_xushao.jpg', 'die:ext:梦之将/audio/die/genm_meng_xushao.mp3']],
                        genm_meng_duyu: ['male', 'jin', 4, ['genm_meng_shulv', 'genm_meng_qingshi'], ['ext:梦之将/image/genm_meng_duyu.jpg', 'die:ext:梦之将/audio/die/genm_meng_duyu.mp3']],
                        genm_meng_sp_weiyan: ['male', 'qun', 4, ['genm_meng_yangu', 'genm_meng_kuangao'], ['ext:梦之将/image/genm_meng_sp_weiyan.jpg', 'die:ext:梦之将/audio/die/genm_meng_sp_weiyan.mp3']],
                        genm_meng_sp_liyou: ['male', 'shu', 4, ['genm_meng_sp_huizhu', 'genm_meng_sp_chace'], ['ext:梦之将/image/genm_meng_sp_liyou.jpg', 'die:ext:梦之将/audio/die/genm_meng_sp_liyou.mp3']],
                        genm_meng_caochun: ['male', 'wei', 4, ['genm_meng_shanjia', 'genm_meng_xiaorui'], ['ext:梦之将/image/genm_meng_caochun.jpg', 'die:ext:梦之将/audio/die/genm_meng_caochun.mp3']],
                        genm_meng_zhaoxiang: ['female', 'shu', 4, ['genm_meng_fanghun', 'genm_meng_fuhan'], ['ext:梦之将/image/genm_meng_zhaoxiang.jpg', 'die:ext:梦之将/audio/die/genm_meng_zhaoxiang.mp3']],
                        genm_meng_caorui: ['male', 'wei', 3, ['genm_meng_huituo', 'genm_meng_mingjian', 'genm_meng_xingshuai'], ['zhu', 'ext:梦之将/image/genm_meng_caorui.jpg', 'die:ext:梦之将/audio/die/genm_meng_caorui.mp3']],
                        genm_meng_caochong: ['male', 'wei', 3, ['genm_meng_chengxiang', 'genm_meng_renxin'], ['zhu', 'ext:梦之将/image/genm_meng_caochong.jpg', 'die:ext:梦之将/audio/die/genm_meng_caochong.mp3']],
                        genm_meng_shen_yuanshao: ['male', 'shen', 5, ['genm_meng_qishe', 'genm_meng_mingmen', 'genm_meng_libo'], ['zhu', 'ext:梦之将/image/genm_meng_shen_yuanshao.jpg', 'die:ext:梦之将/audio/die/genm_meng_shen_yuanshao.mp3']],
                        genm_meng_guanxingzhangbao: ['male', 'shu', 4, ['genm_meng_fuhun', 'genm_meng_tongxin'], ['zhu', 'ext:梦之将/image/genm_meng_guanxingzhangbao.jpg', 'die:ext:梦之将/audio/die/genm_meng_guanxingzhangbao.mp3']],
                        genm_meng_zhangji: ['male', 'wei', 3, ['genm_meng_huiji', 'genm_meng_zhuoxun'], ['zhu', 'ext:梦之将/image/genm_meng_zhangji.jpg', 'die:ext:梦之将/audio/die/genm_meng_zhangji.mp3']],
                        genm_meng_shen_jiangwei: ['male', 'shen', 3, ['genm_tianren', 'genm_pingxiang', '九伐'], ['ext:梦之将/image/genm_meng_shen_jiangwei.jpg', 'die:ext:梦之将/audio/die/genm_meng_shen_jiangwei.mp3']],
                        genm_meng_xusheng: ['male', 'wu', 4, ['genm_pojun', 'genm_baodao', 'baodao_gudingdao'], ['ext:梦之将/image/genm_meng_xusheng.jpg', 'die:ext:梦之将/audio/die/genm_meng_xusheng.mp3']],
                        genm_meng_baoshen: ['male', 'shen', 4, ['baoshen_pojun', 'genm_baodao', 'kuangcai'], ['ext:梦之将/image/genm_meng_baoshen.jpg', 'die:ext:梦之将/audio/die/genm_meng_baoshen.mp3']],
                        genm_meng_shenzhangfei: ['male', 'shen', 4, ['genm_shencai', 'genm_xunshi'], ['ext:梦之将/image/genm_meng_shenzhangfei.jpg', 'die:ext:梦之将/audio/die/genm_meng_shenzhangfei.mp3']],
                        genm_meng_caiwenji: ['female', 'qun', 4, ['genm_shuangjia', 'genm_beifen'], ['ext:梦之将/image/genm_meng_caiwenji.jpg', 'die:ext:梦之将/audio/die/genm_meng_caiwenji.mp3']],
                        genm_meng_caoang: ['male', 'wei', 4, ['genm_kangkai'], ['ext:梦之将/image/genm_meng_caoang.jpg', 'die:ext:梦之将/audio/die/genm_meng_caoang.mp3']],
                        genm_meng_lukang: ['male', 'wu', 5, ['genm_jueyan', 'genm_qianjie', 'genm_poshi'], ['ext:梦之将/image/genm_meng_lukang.jpg', 'die:ext:梦之将/audio/die/genm_meng_lukang.mp3']],
                        genm_meng_liuchen: ['male', 'shu', 4, ['genm_qinwang', 'genm_zhanjue'], ['ext:梦之将/image/genm_meng_liuchen.jpg', 'die:ext:梦之将/audio/die/genm_meng_liuchen.mp3']],
                        genm_shenjiang: ['male', 'shen', 5, ['qiaosi', 'olshengong', 'olqisi', 'pytianjiang', 'pyzhuren'], ['ext:梦之将/image/genm_shenjiang.jpg', 'die:ext:梦之将/audio/die/genm_shenjiang.mp3']],
                        genm_meng_shenjiang: ['male', 'shen', 5, ['shenjiang_shengong'], ['ext:梦之将/image/genm_meng_shenjiang.jpg', 'die:ext:梦之将/audio/die/genm_meng_shenjiang.mp3']],
                        genm_meng_huanggai: ['male', 'wu', 4, ['meng_kurou'], ['ext:梦之将/image/genm_meng_huanggai.jpg', 'die:ext:梦之将/audio/die/genm_meng_huanggai.mp3']],
                    },
                    translate: {
                        genm_meng_wenyang: '梦文鸯',
                        genm_meng_xiahoujie: '梦夏侯杰',
                        genm_meng_chenshi: '梦陈式',
                        genm_meng_dingyuan: '梦丁原',
                        genm_meng_sunce: '梦孙策',
                        genm_meng_luotong: '梦骆统',
                        genm_meng_zhangliao: '梦张辽',
                        genm_meng_liufeng: '梦刘封',
                        genm_meng_liubei: '梦刘备',
                        genm_meng_liuli: '梦刘理',
                        genm_meng_liyou: '梦李忧',
                        genm_meng_guanyu: '梦关羽',
                        genm_meng_zhonghui: '梦钟会',
                        genm_jiu_wuzhugeliang: '旧武诸葛亮',
                        genm_meng_xushao: '梦许邵',
                        genm_meng_duyu: '梦杜预',
                        genm_meng_sp_weiyan: '梦sp魏延',
                        genm_meng_sp_liyou: '梦sp李忧',
                        genm_meng_caochun: '梦曹纯',
                        genm_meng_zhaoxiang: '梦赵襄',
                        genm_meng_caorui: '梦曹叡',
                        genm_meng_caochong: '梦曹冲',
                        genm_meng_shen_yuanshao: '梦神袁绍',
                        genm_meng_guanxingzhangbao: '梦关兴张苞',
                        genm_meng_zhangji: '梦张既',
                        genm_meng_shen_jiangwei: '梦神姜维',
                        genm_meng_xusheng: '梦徐盛',
                        genm_meng_baoshen: '宝神',
                        genm_meng_shenzhangfei: '梦神张飞',
                        genm_meng_caiwenji: '梦乐蔡文姬',
                        genm_meng_caoang: '梦曹昂',
                        genm_meng_lukang: '梦陆抗',
                        genm_meng_liuchen: '梦刘谌',
                        genm_shenjiang: '神匠',
                        genm_meng_shenjiang: '神匠二号',
                        genm_meng_huanggai: '梦黄盖',
                        膂力: '膂力',
                        膂力_info: '每回合限一次,当你造成伤害后,你可选择:1,若你的体力值大于你的手牌数,你摸Ｘ张牌;2,若你的手牌数大于你的体力值且你已受伤,你回复Ｘ点体力(Ｘ为你的手牌数与体力值之差).',
                        仇决: '仇决',
                        仇决_info: '觉醒技,一名角色的回合结束时,若你的手牌数和体力值相差3或更多,你减1点体力上限并获得技能〖背水〗,将〖膂力〗改为<在自己的回合时每回合限两次>.',
                        genn_beishui: '背水',
                        genn_beishui_info: '',
                        genn_qingjiao: '清剿',
                        genn_qingjiao_info: '',
                        genm_panshi: '叛弑',
                        genm_panshi_info: '',
                        genn_cixiao: '慈孝',
                        genn_cixiao_info: '准备阶段,若场上没有<义子>标记,你可令一名其他角色获得一个<义子>标记;若场上有<义子>标记,你可以弃置一张牌移动<义子>标记.拥有<义子>标记的角色获得技能<叛弑>.',
                        genm_qingbei: '擎北',
                        genm_qingbei_info: '一轮游戏开始时,你可以选择任意种花色,你不能于本轮内使用这些花色的牌.当你于本轮使用牌结算结束后,你摸等同于你上一次〖擎北〗选择过的花色数的牌.你选择的花色本回合不计入手牌上限',
                        裂胆: '裂胆',
                        裂胆_info: '锁定技,其他角色的准备阶段开始时,若X大于0,则你摸X张牌.若X等于3,则你加1点体力上限(至多加到8).若X为0,则你失去1点体力并获得一枚<裂>(X为你的手牌数,体力值,装备区牌数中大于其的数量).准备阶段,若<裂>数大于4,则你死亡.',
                        genm_hunzi: '魂姿',
                        genm_hunzi_info: '觉醒技.当你脱离濒死状态后,你减1点体力上限,获得1点护甲,摸三张牌.你获得〖英姿〗,〖英魂〗,〖制衡〗,〖激峭〗和〖枭姬〗.',
                        game_meng_qinzheng: '勤政',
                        game_meng_qinzheng_info: '锁定技,每当有角色使用牌时,每4张摸一张,每6张摸两张,每八张摸三张.',
                        genm_meng_tuxi: '突袭',
                        genm_meng_tuxi_info: '摸牌阶段摸牌时,你可以少摸任意张牌,获得等量的角色的各一张手牌.',
                        genm_meng_挫锐: '挫锐',
                        genm_meng_挫锐_info: '你对拥有<止啼>的角色造成的伤害+1且当你对其造成伤害后其减少等量的手牌上限直到其下个弃牌阶段后.',
                        genm_meng_zhiti: '止啼',
                        genm_meng_zhiti_info: '拥有<止啼>的角色摸牌阶段摸牌数-1且其摸牌阶段结束后你获得其区域内一张牌并清除其<止啼>标记并视为对其使用一张杀.',
                        genm_meng_zhiba: '制霸',
                        genm_meng_zhiba_info: '主公技,限定技.当你进入濒死状态时,你可以回复X-1点体力并修改〖激昂③〗为<出牌阶段限X次>(X为场上其他吴势力角色数+1).其他吴势力角色依次受到1点无来源伤害,且当有角色因此死亡后,你摸三张牌.',
                        genm_meng_xiansi: '陷嗣',
                        genm_meng_xiansi_info: '①准备阶段开始时,你可以将一至两名角色的各一张牌置于你的武将牌上,称为<逆>若<逆>的颜色均相同则你可重复此步骤.②当一名角色需要对你使用【杀】时,其可以弃置一张基本牌并移去两张<逆>,视为对你使用一张【杀】.③若你的<逆>数大于二,则你可以将一张<逆>当做任意一张【杀】使用或打出.',
                        genm_meng_zhangwu: '彰武',
                        genm_meng_zhangwu_info: '出牌阶段限一次,你可以弃置任意张牌,从以下武将牌中选择至多两张武将牌并选择该武将牌上x个技能( [武诸葛亮] [承关羽] [谋黄忠] [神张飞][线下神马超] [神赵云] )获得之,你本轮选择的武将不能与上轮选择过的武将相同(x为你弃置的牌数)直到你的下个回合开始,你的回合结束时你选择一个你本回合选择过的技能永久获得之',
                        genm_meng_jijiang: '激将',
                        genm_meng_jijiang_info: '主公技.出牌阶段结束时,你可以选择一名体力值不小于你的其他蜀势力角色A和一名在A攻击范围内的角色B.A选择一项:1.视为对B使用一张【杀】;2.下一个出牌阶段开始前,跳过此阶段.',
                        genm_meng_rende: '仁德',
                        genm_meng_rende_info: '出牌阶段每名角色限一次.你可以获得一名其他角色两张手牌,视为使用一张基本牌.',
                        genm_meng_fanfu: '番辅',
                        genm_meng_fanfu_info: '每回合每项各限一次,当你造成或受到伤害时,你可以选择一项:1.摸一张牌并交给一名角色任意张牌,若交出的牌数不小于二则你视为使用或打出一张非延时锦囊牌或一张基本牌(以此法使用的基本牌不计入次数限制).2.你令一名角色弃置一张牌且你回复一点体力.',
                        genm_meng_shuhuan: '疏宦',
                        genm_meng_shuhuan_info: '锁定技,当有角色不在弃牌阶段且不因疏宦弃置牌时,你选择一名其他角色使其弃置X张牌或摸一张牌并回复一点体力(X为你已损失体力值且至少为一).',
                        genm_meng_zezhu: '择主',
                        genm_meng_zezhu_info: '锁定技,游戏开始时,你选择一名其他角色,当其受到伤害时你选择一项:1弃置所有手牌防止此伤害,2令其摸一张牌将伤害转移至你.(每回合每项限一次)',
                        genm_meng_dongmou: '洞谋',
                        genm_meng_dongmou_info: '当你于摸牌阶段外获得牌后你可令一名手牌数小于你的角色将手牌调整至与你一致(至多摸至五张)该角色可重铸任意张手牌,若重铸了全部手牌其跳过下一个弃牌阶段,若其为【择主】选择的角色则你也可以重铸任意张手牌.',
                        genm_meng_zuoce: '佐策',
                        genm_meng_zuoce_info: '准备阶段,你可流失一点令一名角色下个出牌阶段开始时获得三张牌名各不相同的锦囊牌或基本牌,若你选择的是【择主】选择的角色则你下个回合开始时回复一点体力.',
                        genm_meng_wusheng: '武圣',
                        genm_meng_wusheng_info: '你可以将一张红色牌当【杀】使用或打出;你使用♦️️【杀】无距离限制且造成伤害后获得一点护甲;你使用♥️️【杀】伤害值+1.你使用杀指定目标时你可以无视其护甲',
                        genm_meng_yijue: '义绝',
                        genm_meng_yijue_info: '出牌阶段限一次,你可以弃置一张牌,令一名其他角色展示一张手牌.若此牌为黑色,则其本回合所有技能失效且不能使用或打出手牌,你获得其展示的牌;若此牌为红色,则你获得之,你可令该角色回复1点体力或获得一点护甲.',
                        genm_meng_wuwei: '武威',
                        genm_meng_wuwei_info: '出牌阶段开始时,你可以失去任意点护甲并失去1点体力,你摸x张牌且你本回合出杀次数+x(x为此次失去的护甲值)',
                        genm_meng_quanji: '权计',
                        genm_meng_quanji_info: '出牌阶段结束时,若你的手牌数大于体力值,或当你受到1点伤害后,你可以摸一张牌,将一张手牌置于武将牌上,称为<权>;你的手牌上限+X(X为<权>的数量).',
                        genm_meng_zili: '自立',
                        genm_meng_zili_info: '觉醒技.准备阶段,若你的<权>数大于2,则你回复1点体力并摸两张牌,减1点体力上限并获得〖排异〗.',
                        genm_jiu_qingshi: '情势',
                        genm_jiu_qingshi_info: '当你于出牌阶段使用牌时,若你手牌中有同名牌且你本回合未因此牌名的牌发动过该技能,你可以选择一项:1.令此牌对其中一个目标角色造成的伤害+1;2.令任意名其他角色各摸一张牌;3.摸三张牌,〖情势〗于本回合无效.',
                        genm_jiu_jincui: '尽瘁',
                        genm_jiu_jincui_info: '锁定技.①游戏开始时,你将手牌摸至七张.②准备阶段,你将体力值回复或失去至等同于牌堆中点数为7的牌数(你的体力值最低因此调整至1).你观看牌堆顶X张牌,将这些牌以任意顺序置于牌堆顶或牌堆底(X为你的体力值).',
                        genm_jiu_zhizhe: '智哲',
                        genm_jiu_zhizhe_info: '限定技.出牌阶段,你可以选择一张手牌并复制之.当你使用或打出此复制牌结算结束后,你获得之,你本回合不能再使用或打出此牌.',
                        genm_meng_pingjian: '评鉴',
                        genm_meng_pingjian_info: '结束阶段开始时/出牌阶段开始时/当你受到1点伤害后/出牌阶段限一次,你可以令系统随机从剩余武将牌堆中检索出三张拥有发动时机为结束阶段开始时/当你受到伤害后/出牌阶段的技能的武将牌.你可以选择尝试发动其中一个技能.每个技能每局只能选择一次.',
                        genm_meng_yaping: '雅评',
                        genm_meng_yaping_info: '当你造成或受到1点伤害时你可令评鉴于本轮内出牌阶段的使用次数+1.当你发动【评鉴】后若无可用技能则你可失去【雅评】并重置【评鉴】技能池获得至多两项评鉴发动过的技能并修改【评鉴】',
                        genm_meng_shulv: '束律',
                        genm_meng_shulv_info: '出牌阶段限一次,你可以令一名角色将手牌调整至于你相同,若其因此摸牌则你本回合可额外发动一次【束律】(每回合限一次);若其因此弃牌则你可将该角色弃置的牌交给一名角色.',
                        genm_meng_qingshi: '倾势',
                        genm_meng_qingshi_info: '出牌阶段限一次,你可将手牌调整至体力上限视为使用一张基本牌或普通锦囊牌且此牌结算次数为你因此获得或失去的牌数(至少为一至多为五).',
                        genm_meng_yangu: '炎骨',
                        genm_meng_yangu_info: '出牌阶段限一次,你可弃置任意张牌执行以下的前X项:1,对一名其他角色造成一点火属性伤害;2,移动场上一张牌;3,弃置一名其他角色至多X张牌;4,摸X张牌.(X为本次的弃牌数)',
                        genm_meng_kuangao: '狂傲',
                        genm_meng_kuangao_info: '每回合限一次,当你造成或受到非属性伤害时你可摸两张牌并交换【炎骨】的两项令炎骨本回合使用次数+1.',
                        genm_meng_sp_huizhu: '慧珠',
                        genm_meng_sp_huizhu_info: '出牌阶段限一次,你可以交给一名其他角色一张牌获得该角色武将牌上的一个技能知道下回合开始,若你的下回合开始时该角色未对你造成伤害则你永久获得该技能.(主公技和隐匿技除外)',
                        genm_meng_sp_chace: '察策',
                        genm_meng_sp_chace_info: '每轮限一次,一名其他角色的摸牌阶段结束时,你可以观看其x张牌,若其中有锦囊牌,你摸x张牌,武器牌,你下个回合使用牌无距离限制,若均不满足,则你流失一点体力( x为场上存活人数且至多为五)',
                        genm_meng_fanghun: '芳魂',
                        genm_meng_fanghun_info: '当你使用【杀】或成为【杀】的目标后,你获得1个<梅影>标记;你可以移去1个<梅影>标记来发动〖龙胆〗并摸一张牌.',
                        genm_meng_fuhan: '扶汉',
                        genm_meng_fuhan_info: '限定技,回合开始时,你可以移去所有"梅影"标记并摸等量的牌,从X张蜀势力武将牌中选择并获得至多两个技能(限定技、觉醒技、隐匿技、使命技、主公技除外).若此时你是体力值最低的角色,你回复1点体力(X为场上角色数,且X∈[4,+∞)).',
                        genm_meng_xiaorui: '骁锐',
                        genm_meng_xiaorui_info: '每回合每名角色限两次,当你对一名角色造成伤害时你可获得其Y张牌,若你获得的牌中没有与你造成伤害的牌同名的牌则你发动一次【缮甲】.',
                        genm_meng_shanjia: '缮甲',
                        genm_meng_shanjia_info: '出牌阶段开始时,你可以摸三张牌,弃置3-X张牌(X为你本局游戏内不因使用而失去过的装备牌的数目且至多为3).若你没有以此法弃置:基本牌,此阶段你使用【杀】的次数上限+1;锦囊牌,此阶段你使用牌无距离限制;基本牌或锦囊牌,你可以视为使用一张【杀】.',
                        genm_meng_qishe: '齐射',
                        genm_meng_qishe_info: '出牌阶段开始时,你可以选择一种花色并令你本回合该花色的牌均视为[万箭齐发]',
                        genm_meng_mingmen: '名门',
                        genm_meng_mingmen_info: '每回合限一次, 当你使用非转化牌指定目标时,你可以摸x张牌并令本回合手牌上限+x令下一回合齐射选择花色数+1 ( x为场上存活人数)',
                        genm_meng_libo: '厉薄',
                        genm_meng_libo_info: '锁定技,转换技,出牌阶段开始时,阳:每当你造成一次伤害, 你选择一名角色你与其随机弃置一张牌或失去 一点体力.阴:你每受到一点伤害或被其他角色弃置牌时,你摸一张牌,且其本轮使用杀的次数减一',
                        genm_meng_chengxiang: '称象',
                        genm_meng_chengxiang_info: '当你受到1点伤害后,你可以亮出牌堆顶的四张牌.获得其中任意数量点数之和不大于13的牌.若你得到的牌点数之和为13,你复原武将牌.',
                        genm_meng_renxin: '仁心',
                        genm_meng_renxin_info: '当体力值不小于你的一名其他角色受到伤害时,你可以将武将牌翻面并弃置一张非基本牌,防止此伤害.',
                        genm_meng_fuhun: '父魂',
                        genm_meng_fuhun_info: '你可将两张手牌当做【杀】使用或打出,若你于出牌阶段内以此法造成了伤害则你获得【咆哮】和【武圣】;当你对一名攻击范围外的角色造成伤害时此伤害+1.',
                        genm_meng_tongxin: '同心',
                        genm_meng_tongxin_info: '锁定技,你的攻击范围基数为3.当你使用一张转化杀时你摸一张牌并令你使用的下一张非转化杀伤害+1且不可响应;当你击杀一名角色后你摸等同于其体力上限张牌且至多为五.',
                        genm_meng_huituo: '恢拓',
                        genm_meng_huituo_info: '当你受到一点伤害后,你可以令一名角色进行一次判定并获得判定牌,若结果为红色,该角色回复1点体力;若结果为黑色,该角色摸X张牌(X为此次伤害的伤害点数)',
                        genm_meng_mingjian: '明鉴',
                        genm_meng_mingjian_info: '出牌阶段限一次,你可以将所有手牌交给一名其他角色,若如此做,该角色于其下个回合的手牌上限+1,且使用【杀】的次数上限+1且当该角色造成一点伤害后你与其各摸一张牌.',
                        genm_meng_xingshuai: '兴衰',
                        genm_meng_xingshuai_info: '主公技,限定技.当你进入濒死状态时,你可令其他魏势力角色依次选择是否令你回复1点体力.这些角色依次受到1点伤害.有〖明鉴〗效果的角色于其回合内击杀角色后,你重置〖兴衰〗.',
                        genm_meng_huiji: '会击',
                        genm_meng_huiji_info: '游戏开始时你随机亮出未登场的X+1张武将牌并获得这些武将的X个技能,当你处于濒死时你失去一个以此法获得的技能摸X张牌并将体力回复至一你的手牌上限+X.(X为你的体力上限)',
                        genm_meng_zhuoxun: '卓勋',
                        genm_meng_zhuoxun_info: '一名角色的结束阶段开始时你可令其获得其本回合未使用过的类型的牌各一张,若其本回合使用过三种类型的牌你选择一个锁定技令其获得直到其下个结束阶段开始.',
                        genm_tianren: '天任',
                        genm_tianren_info: '锁定技.①当有一张基本牌或普通锦囊牌不因使用而进入弃牌堆后,你获得一枚<天任>标记.②当你获得<天任>标记或体力上限变化后,若你的<天任>数不小于X,则你移去X枚<天任>,加1点体力上限并摸两张牌(X为你的体力上限).',
                        genm_pingxiang: '平襄',
                        genm_pingxiang_info: '限定技.出牌阶段,若你的体力上限大于⑨,则你可减⑨点体力上限,视为使用至多⑨张火【杀】,失去〖九伐〗并获得〖挑衅〗,〖困奋〗,〖威重〗,〖观星〗和〖崩坏〗,并将手牌上限基数改为体力上限直到游戏结束.',
                        九伐: '九伐',
                        九伐_info: '①当你声明使用牌后或打出牌时,你记录此牌的牌名.②当你使用或打出的牌结算结束后,若你的〖九伐〗记录中包含至少⑨种不同的牌名,则你可以展示牌堆顶的⑨张牌,选择并获得其中任意张点数各不相同且{这九张牌中存在未被选择且和已选择的牌点数相同}的牌,清除所有的记录,将其余牌置入弃牌堆.',
                        genm_zhuri: '逐日',
                        genm_zhuri_info: '你的阶段结束时,若你本阶段失去或得到过牌,则你可以与一名角色拼点.若你赢,你可以使用其中一张拼点牌;若你没赢,你失去1点体力或令此技能于本回合无效.',
                        genm_ranji: '燃己',
                        genm_ranji_info: '限定技,结束阶段.若你本回合使用过牌的阶段数大于等于/小于等于体力值,你可以获得技能〖困奋〗/〖诈降〗(同时满足则都获得).若如此做,你将手牌数调整至手牌上限或将体力值回复至体力上限,你不能回复体力直到你击杀角色.',
                        genm_baodao: '宝刀',
                        genm_baodao_info: '锁定技,你始终视为装备着【古锭刀】.',
                        genm_pojun: '破军',
                        genm_pojun_info: '①当你使用【杀】指定目标时,你可以将其至多X张牌移出游戏直至回合结束(X为其体力值),若其中有:装备牌,你弃置其中的一张;每有【闪】,你摸一张牌.②你使用【杀】对手牌数和装备区牌数均不大于你的角色造成的伤害+1.',
                        baodao_gudingdao: '古锭刀',
                        baodao_gudingdao_info: '',
                        baodao_zhuge: '诸葛连弩',
                        baodao_zhuge_info: '',
                        genm_meng_jiang: '激昂',
                        genm_meng_jiang_info: '①当你使用【决斗】或红色【杀】指定目标后,或当你成为【决斗】或红色【杀】的目标后,你摸一张牌.②当你使用【决斗】时,你可以额外指定一名目标,你失去1点体力.③出牌阶段限一次.你可以将所有手牌当【决斗】使用.',
                        baoshen_pojun: '破军',
                        baoshen_pojun_info: '当你使用【杀】指定目标后,你可以获得其所有手牌,当你因执行【杀】的效果而对一名角色造成伤害时,若该角色的手牌数和装备区内的牌数均不大于你,则此伤害+1.',
                        genm_shencai: '神裁',
                        genm_shencai_info: '出牌阶段限一次,你可以令一名其他角色进行判定.你获得此判定牌,若此判定牌:包含以下要素中的任意一个,则其失去已有的下列效果,并获得对应的效果:{⒈体力:当其受到伤害后,其失去等量的体力、⒉武器:其不能使用牌响应【杀】、⒊打出:当其失去手牌后,其再随机弃置一张手牌(不嵌套触发)、⒋距离:其的结束阶段开始时,其翻面};若均不包含,你获得其区域里的一张牌,其获得一枚<死>并获得如下效果:其的角色手牌上限-X、其的回合结束时,若X大于场上存活人数,则其死亡(X为其<死>标记数).',
                        genm_xunshi: '巡使',
                        genm_xunshi_info: '锁定技.①你手牌区内所有的多目标锦囊牌均视为花色为none的普【杀】.②你使用颜色为none的牌无距离和次数限制.③当你使用🃏的牌选择目标后,你令你的〖神裁〗的发动次数上限+1(至多为5),可以为此牌增加任意个目标.',
                        genm_shuangjia: '霜笳',
                        genm_shuangjia_info: '锁定技,每轮开始时,你的所有手牌增加<胡笳>标记且不计入手牌上限.你每拥有一张<胡笳>,其他角色与你计算距离+1(最多+5).',
                        genm_beifen: '悲愤',
                        genm_beifen_info: '锁定技.①当你失去牌后,若这些牌中有<胡笳>牌,你获得与你手牌中<胡笳>牌花色均不同的每种花色的牌各一张.②若你手牌中<胡笳>牌数小于不为<胡笳>牌的牌数,你使用牌无距离和次数限制.',
                        genm_zhanjue: '战绝',
                        genm_zhanjue_info: '出牌阶段,若你本阶段内因〖战绝〗获得过的牌数小于3,则你可以将所有手牌当做【决斗】使用.此【决斗】使用结算结束后,你摸一张牌,所有因此【决斗】受到过伤害的角色也各摸一张牌.若你因此【决斗】受到过伤害,则你可以弃置伤害来源的一张牌.',
                        genm_qinwang: '勤王',
                        genm_qinwang_info: '主公技.出牌阶段限一次,你可以令所有其他蜀势力角色依次选择是否交给你一张基本牌,你可以令选择是的角色摸一张牌(以此法获得的牌本回合不计算在〖战绝〗使用的牌中).',
                        genm_kangkai: '慷忾',
                        genm_kangkai_info: '当一名角色成为牌的目标后,若你至该角色的距离为1,你可以摸一张牌.若如此做,你交给其一张牌并展示之.若为装备牌,该角色可以使用此牌.',
                        shenjiang_qimen: '奇门',
                        shenjiang_qimen_info: '',
                        shenjiang_xiantian: '先天',
                        shenjiang_xiantian_info: '',
                        genm_jueyan: '决堰',
                        genm_jueyan_info: '出牌阶段限两次,你可以废除你装备区里的一个装备栏并回复一点体力,获得对应的效果:武器栏,你可以多使用三张【杀】;防具栏,摸三张牌并修改防具栏效果;2个坐骑栏,你使用牌无距离限制;宝物栏,获得<集智>. 决堰•防具修改:准备阶段你摸三张牌且手牌上限加三.',
                        genm_qianjie: '谦节',
                        genm_qianjie_info: '锁定技,当你横置时,取消之.你不能成为延时类锦囊的目标.你不能成为其他角色拼点的目标.',
                        genm_poshi: '破势',
                        genm_poshi_info: '觉醒技,准备阶段,若你的装备栏均被废除或体力值为1,你增加1点体力上限并回复一点体力,将手牌补至体力上限,失去<决堰>并获得<怀柔>且本局游戏你造成的伤害+1.你回复所有被废除的装备栏',
                        shenjiang_zijin: '紫金',
                        shenjiang_zijin_info: '',
                        shenjiang_shuibo: '水波',
                        shenjiang_shuibo_info: '',
                        shenjiang_liecui: '烈淬',
                        shenjiang_liecui_info: '',
                        shenjiang_tianlei: '天雷',
                        shenjiang_tianlei_info: '',
                        shenjiang_hundu: '混毒',
                        shenjiang_hundu_info: '',
                        shenjiang_hongduan: '红缎',
                        shenjiang_hongduan_info: '',
                        shenjiang_shengong: '神工',
                        shenjiang_shengong_info: '',
                        shenjiang_chixue: '赤血',
                        shenjiang_chixue_info: '',
                        shenjiang_xuwang: '虚妄',
                        shenjiang_xuwang_info: '',
                        shenjiang_zhaogu: '照骨',
                        shenjiang_zhaogu_info: '',
                        shenjiang_yupao: '玉袍',
                        shenjiang_yupao_info: '',
                        jueyan_fangju: '决堰•防具',
                        jueyan_fangju_info: '',
                        poshi2: '破势',
                        poshi2_info: '',
                        meng_huairou: '怀柔',
                        meng_huairou_info: '出牌阶段,你可以重铸装备牌,并从牌堆或弃牌堆中选择一种基本牌或锦囊牌获得之(每个牌名每回合限一次).',
                        meng_kurou: '苦肉',
                        meng_kurou_info: '',
                    },
                    skill: {
                        膂力: {
                            audio: 'lvli',
                            trigger: {
                                player: 'damageEnd',
                                source: 'damageSource',
                            },
                            filter(event, player, name) {
                                var stat = player.getStat().skill;
                                if (!stat.xinlvli) stat.xinlvli = 0;
                                if (name == 'damageEnd' && !player.storage.beishui) return false;
                                if (stat.xinlvli > 1) return false;
                                if (stat.xinlvli > 0 && (player != _status.currentPhase || !player.storage.choujue)) return false;
                                if (player.hp == player.countCards('h')) return false;
                                if (player.hp < player.countCards('h') && player.isHealthy()) return false;
                                return true;
                            },
                            content() {
                                var stat = player.getStat().skill;
                                stat.xinlvli++;
                                var num = player.hp - player.countCards('h');
                                if (num > 0) player.draw(num);
                                else player.recover(-num);
                            },
                        },
                        仇决: {
                            derivation: ['beishui', 'qingjiao'],
                            trigger: {
                                global: 'phaseAfter',
                            },
                            audio: 'choujue',
                            juexingji: true,
                            forced: true,
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = false;
                            },
                            filter(event, player) {
                                if (player.storage.choujue) return false;
                                return Math.abs(player.hp - player.countCards('h')) >= 3;
                            },
                            content() {
                                player.awakenSkill('choujue');
                                player.storage.choujue = true;
                                player.gainMaxHp();
                                player.addSkill('genn_beishui');
                            },
                        },
                        genn_beishui: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            audio: 'beishui',
                            juexingji: true,
                            forced: true,
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = false;
                            },
                            filter(event, player) {
                                if (player.storage.beishui) return false;
                                return Math.min(player.hp, player.countCards('h')) < 2;
                            },
                            content() {
                                player.awakenSkill('beishui');
                                player.storage.beishui = true;
                                player.gainMaxHp();
                                player.addSkill('genn_qingjiao');
                            },
                            intro: {
                                content() {
                                    return get.translation(skill + '_info');
                                },
                            },
                        },
                        genn_qingjiao: {
                            audio: 'qingjiao',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                if (!ui.cardPile.hasChildNodes() && !ui.discardPile.hasChildNodes());
                                return true;
                            },
                            content() {
                                'step 0';
                                'step 2';
                                var list = [];
                                var typelist = [];
                                var getType = function (card) {
                                    var sub = get.subtype(card);
                                    if (sub) return sub;
                                    return card.name;
                                };
                                for (var i = 0; i < ui.cardPile.childElementCount; i++) {
                                    var node = ui.cardPile.childNodes[i];
                                    var typex = getType(node);
                                    if (!typelist.includes(typex)) {
                                        list.push(node);
                                        typelist.push(typex);
                                        if (list.length >= 8) break;
                                    }
                                }
                                if (list.length < 8) {
                                    for (var i = 0; i < ui.discardPile.childElementCount; i++) {
                                        var node = ui.discardPile.childNodes[i];
                                        var typex = getType(node);
                                        if (!typelist.includes(typex)) {
                                            list.push(node);
                                            typelist.push(typex);
                                            if (list.length >= 8) break;
                                        }
                                    }
                                }
                                player.gain(list, 'gain2');
                            },
                            intro: {
                                content() {
                                    return get.translation(skill + '_info');
                                },
                            },
                        },
                        genm_panshi: {
                            audio: 'chengxiang',
                            mark: true,
                            marktext: '子',
                            intro: {
                                content: '我是儿子',
                            },
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return (
                                    player.countCards('h') > 0 &&
                                    game.hasPlayer(function (current) {
                                        return current != player && current.hasSkill('genn_cixiao');
                                    })
                                );
                            },
                            content() {
                                'step 0';
                                var targets = game.filterPlayer(function (current) {
                                    return current != player && current.hasSkill('genn_cixiao');
                                });
                                if (targets.length == 1) {
                                    event.target = targets[0];
                                    player.chooseCard('h', true, '叛弑:将一张手牌交给' + get.translation(targets));
                                } else
                                    player.chooseCardTarget({
                                        prompt: `叛弑:将一张手牌交给${get.translation(targets)}中的一名角色`,
                                        filterCard: true,
                                        position: 'h',
                                        targets: targets,
                                        forced: true,
                                        filterTarget(card, player, target) {
                                            return _status.event.targets.includes(target);
                                        },
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    if (!target) target = result.targets[0];
                                    player.line(target);
                                    player.give(result.cards, target);
                                }
                            },
                            group: 'panshi_damage',
                        },
                        genn_cixiao: {
                            audio: 'ext:梦之将/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (
                                    !game.hasPlayer(function (current) {
                                        return current.hasSkill('genm_panshi');
                                    })
                                )
                                    return true;
                                return (
                                    player.countCards('he') >= 1 &&
                                    game.hasPlayer(function (current) {
                                        return current != player && !current.hasSkill('genm_panshi');
                                    })
                                );
                            },
                            content() {
                                game.countPlayer((c) => c.addSkill('genm_panshi'));
                            },
                        },
                        genm_qingbei: {
                            audio: 'qingbei',
                            trigger: {
                                global: 'roundStart',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var next = player.chooseButton(['###擎北:是否选择任意种花色？###<div class="text center">你不能于本轮能使用这些花色,且使用牌后摸等同于选择花色数的牌</div>', [lib.suit.map((i) => ['', '', 'lukai_' + i]), 'vcard']], [1, 4]);
                                next.set('ai', (button) => {
                                    var player = _status.event.player;
                                    var suit = button.link[2].slice(6);
                                    var val = player
                                        .getCards('hs', { suit: suit })
                                        .map((card) => {
                                            return get.value(card) + player.getUseValue(card) / 3;
                                        })
                                        .reduce((p, c) => {
                                            return p + c;
                                        }, 0);
                                    if (val > 10 && ui.selected.buttons.length) return -1;
                                    if (val > 6 && ui.selected.buttons.length == 2) return -1;
                                    if (ui.selected.buttons.length == 3) return -1;
                                    return 1 + 1 / val;
                                });
                                ('step 1');
                                if (result.links?.length) {
                                    var suits = result.links.map((i) => i[2].slice(6));
                                    player.addTempSkill('genm_qingbei_effect', 'roundStart');
                                    player.setStorage('genm_qingbei_effect', suits);
                                    player.markSkill('genm_qingbei_effect');
                                }
                            },
                            ai: {
                                threaten: 2.3,
                            },
                            subSkill: {
                                effect: {
                                    audio: 'qingbei',
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return player.getStorage('genm_qingbei_effect').length;
                                    },
                                    content() {
                                        player.draw(player.getStorage('genm_qingbei_effect').length);
                                    },
                                    mark: true,
                                    intro: {
                                        content: (storage) => `本轮内不能使用${get.translation(storage)}花色的牌,且使用牌后摸${get.cnNumber(storage.length)}张牌`,
                                    },
                                    mod: {
                                        cardEnabled(card, player) {
                                            if (player.getStorage('genm_qingbei_effect').includes(card.suit)) return false;
                                        },
                                        cardSavable(card, player) {
                                            if (player.getStorage('genm_qingbei_effect').includes(card.suit)) return false;
                                        },
                                        ignoredHandcard(card, player) {
                                            if (player.getStorage('genm_qingbei_effect').includes(card.suit)) {
                                                return true;
                                            }
                                        },
                                        cardDiscardable(card, player, name) {
                                            if (name == 'phaseDiscard' && card.hasGaintag('genm_qingbei_effect').includes(card.suit)) {
                                                return false;
                                            }
                                        },
                                    },
                                },
                            },
                        },
                        裂胆: {
                            audio: 'liedan',
                            trigger: {
                                global: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return (player != event.player || player.countMark('liedan') > 4) && !player.hasSkill('zhuangdan_mark');
                            },
                            logTarget: 'player',
                            content() {
                                if (player == trigger.player) {
                                    player.die();
                                    return;
                                }
                                var num = 0;
                                if (player.hp > trigger.player.hp) num++;
                                if (player.countCards('h') > trigger.player.countCards('h')) num++;
                                if (player.countCards('e') > trigger.player.countCards('e')) num++;
                                if (num > 0) {
                                    player.draw(num);
                                    if (num == 3 && player.maxHp < 999) player.gainMaxHp();
                                    player.recover();
                                } else {
                                    player.addMark('liedan', 1);
                                    player.loseHp();
                                }
                            },
                            intro: {
                                content: 'mark',
                            },
                        },
                        genm_hunzi: {
                            audio: 'sbhunzi',
                            trigger: {
                                player: 'dyingAfter',
                            },
                            juexingji: true,
                            forced: true,
                            derivation: ['sbyingzi', 'gzyinghun', 'rezhiheng', 'syjiqiao'],
                            content() {
                                'step 0';
                                player.awakenSkill('genm_hunzi');
                                player.gainMaxHp();
                                ('step 1');
                                player.changeHujia(1, null, true);
                                ('step 2');
                                player.draw(3);
                                ('step 3');
                                player.addSkill('sbyingzi');
                                player.addSkill('rezhiheng');
                                player.addSkill('syjiqiao');
                                player.addSkill('gzyinghun');
                                player.addSkill('sbxiaoji');
                            },
                            ai: {
                                threaten(player, target) {
                                    if (target.hp == 1) return 2;
                                    return 0.5;
                                },
                                maixie: true,
                                effect: {
                                    target(card, player, target) {
                                        if (!target.hasFriend() || target.hp > 1) return;
                                        if (get.tag(card, 'damage') == 1 && ((target.hasZhuSkill('genm_meng_zhiba') && game.countPlayer((current) => current != target && current.group == 'wu')) || player.countCards('hs', (card) => player.canSaveCard(card, target)) + target.countCards('hs', (card) => target.canSaveCard(card, target)) > 0) && !target.isTurnedOver() && _status.currentPhase != target && get.distance(_status.currentPhase, target, 'absolute') <= 3) return [0.5, 1];
                                    },
                                },
                            },
                        },
                        game_meng_qinzheng: {
                            audio: 'qinzheng',
                            trigger: {
                                global: ['useCard', 'respond'],
                            },
                            forced: true,
                            filter(event, player) {
                                var num = 0;
                                for (var i of game.players) num += i.getAllHistory('useCard').length + i.getAllHistory('respond').length;
                                return num % 4 == 0 || num % 6 == 0 || num % 8 == 0;
                            },
                            content() {
                                var drawnum = {
                                    4: 1,
                                    6: 2,
                                    8: 3,
                                };
                                var num = 0,
                                    numx = 0;
                                for (var i of game.players) num += i.getAllHistory('useCard').length + i.getAllHistory('respond').length;
                                for (var i of [4, 6, 8]) if (num % i == 0) numx += drawnum[i];
                                if (numx > 0) player.draw(numx);
                            },
                        },
                        genm_meng_tuxi: {
                            audio: 'retuxi',
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            preHidden: true,
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
                                player.chooseTarget(
                                    get.prompt('genmtuxi'),
                                    `获得${get.translation(2)}名角色的各一张手牌,或获得一名角色的一张手牌并摸一张牌这些角色获得止啼标记`,
                                    [1, 2],
                                    function (card, player, target) {
                                        return target.countCards('h') > 0 && player != target;
                                    },
                                    function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (target.hasSkill('tuntian')) return att / 10;
                                        return 1 - att;
                                    }
                                );
                                ('step 1');
                                if (result.targets?.length) {
                                    result.targets.sortBySeat();
                                    player.gainMultiple(result.targets);
                                    if (result.targets.length == 1) player.draw();
                                    for (var i of result.targets) i.addMark('genm_meng_zhiti', 1);
                                    trigger.changeToZero();
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                threaten: 1.6,
                                expose: 0.2,
                            },
                        },
                        genm_meng_挫锐: {
                            audio: 'drlt_duorui',
                            subSkill: {
                                mh: {
                                    trigger: {
                                        player: 'phaseDiscardAfter',
                                    },
                                    content() {
                                        player.removeSkill(event.name);
                                    },
                                    charlotte: true,
                                    marktext: '-',
                                    intro: {
                                        content: '手牌上限-#',
                                    },
                                    mod: {
                                        maxHandcard(player, num) {
                                            return num - player.countMark('genm_meng_挫锐_mh'); //QQQ
                                        },
                                    },
                                },
                            },
                            forced: true,
                            trigger: {
                                source: ['damageBegin1', 'damageEnd'],
                            },
                            filter(event, player) {
                                return event.player.countMark('genm_meng_zhiti') > 0 && event.player != player;
                            },
                            content() {
                                if (event.triggername == 'damageBegin1') trigger.num++;
                                else {
                                    trigger.player.addSkill('genm_meng_挫锐_mh');
                                    trigger.player.addMark('genm_meng_挫锐_mh', trigger.num);
                                }
                            },
                        },
                        genm_meng_zhiti: {
                            audio: 'drlt_zhiti',
                            marktext: '止',
                            intro: {
                                name: '止啼',
                                name2: '止啼',
                                content: '当前有#个<止啼>',
                            },
                            trigger: {
                                global: ['phaseDrawBegin2', 'phaseDrawEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (!event.player.hasMark('genm_meng_zhiti')) return false;
                                if (event.triggername == 'phaseDrawBegin2') return !event.numFixed;
                                return event.player.hasMark('genm_meng_zhiti'); //QQQ
                            },
                            content() {
                                if (event.triggername == 'phaseDrawBegin2') trigger.num--;
                                else {
                                    trigger.player.removeMark(event.name);
                                    if (trigger.player.countCards('hej') > 0) player.gainPlayerCard(trigger.player, 'hej');
                                    if (player.canUse({ name: 'sha' }, trigger.player, false)) player.useCard({ name: 'sha' }, trigger.player);
                                }
                            },
                        },
                        genm_meng_zhiba: {
                            audio: 'sbzhiba',
                            trigger: {
                                player: 'dying',
                            },
                            filter(event, player) {
                                if (!player.hasZhuSkill('genm_meng_zhiba')) return false;
                                return player.hp <= 0;
                            },
                            zhuSkill: true,
                            limited: true,
                            mark: true,
                            content() {
                                'step 0';
                                player.awakenSkill('genm_meng_zhiba');
                                event.targets = game
                                    .filterPlayer((current) => {
                                        return current.group == 'wu' && current != player;
                                    })
                                    .sortBySeat(_status.currentPhase);
                                var num = event.targets.length;
                                if (num > 0) player.recover(num);
                                player.addMark('genm_meng_jiang', 1, false);
                                player.addTempSkill('genm_meng_zhiba_draw');
                                if (!event.targets.length) event.finish();
                                ('step 1');
                                var target = targets.shift();
                                target.damage('nosource');
                                if (targets.length) event.redo();
                            },
                            subSkill: {
                                draw: {
                                    trigger: {
                                        global: 'dieAfter',
                                    },
                                    filter(event, player) {
                                        return event.getParent(3).name == 'genm_meng_zhiba';
                                    },
                                    forced: true,
                                    charlotte: true,
                                    content() {
                                        player.draw(3);
                                    },
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                            init: (player, skill) => (player.storage[skill] = false),
                        },
                        genm_meng_xiansi: {
                            audio: 'xiansi',
                            subSkill: {
                                x: {},
                                use: {
                                    enable: ['chooseToUse', 'chooseToRespond'],
                                    filter(event, player) {
                                        return player.getExpansions('genm_meng_xiansi').length > 2 && event.filterCard({ name: 'sha' }, player, event);
                                    },
                                    hiddenCard(player, name) {
                                        if (player.getExpansions('genm_meng_xiansi').length < 3) return false;
                                        return name == 'sha';
                                    },
                                    chooseButton: {
                                        dialog(event, player) {
                                            var list = [];
                                            for (var name of lib.inpile) {
                                                if (name != 'sha') continue;
                                                if (event.filterCard && event.filterCard({ name: name }, player, event)) {
                                                    list.push(['基本', '', name]);
                                                }
                                                if (name == 'sha') {
                                                    for (var nature of lib.inpile_nature) {
                                                        if (event.filterCard && event.filterCard({ name: name, nature: nature }, player, event)) list.push(['基本', '', 'sha', nature]);
                                                    }
                                                }
                                            }
                                            var dialog = ui.create.dialog('陷嗣', 'hidden');
                                            dialog.add('要转换的牌');
                                            dialog.add([list, 'vcard']);
                                            dialog.add('被转换的牌');
                                            dialog.add(player.getExpansions('genm_meng_xiansi'));
                                            return dialog;
                                        },
                                        select: 2,
                                        complexSelect: true,
                                        filter(button, player) {
                                            if (
                                                Array.isArray(button.link) &&
                                                !_status.event.parent.filterCard(
                                                    {
                                                        name: button.link[2],
                                                    },
                                                    player,
                                                    _status.event.parent
                                                )
                                            )
                                                return false;
                                            if (ui.selected.buttons.length) {
                                                return Array.isArray(button.link) != Array.isArray(ui.selected.buttons[0].link);
                                            }
                                            return true;
                                        },
                                        backup(links, player) {
                                            if (Array.isArray(links[1])) links.reverse();
                                            return {
                                                filterCard(card, player) {
                                                    return [links[1]].includes(card);
                                                },
                                                selectCard: -1,
                                                position: 'x',
                                                viewAs: {
                                                    name: links[0][2],
                                                    nature: links[0][3],
                                                    cards: [links[1]],
                                                },
                                                card: links[1],
                                            };
                                        },
                                        prompt(links, player) {
                                            return `将${get.translation([links[1]])}当做` + get.translation(links[0][3] || '') + get.translation(links[0][2]) + '使用';
                                        },
                                    },
                                },
                                global: {
                                    enable: 'chooseToUse',
                                    audio: 'ext:梦之将/audio:2',
                                    viewAs: {
                                        name: 'sha',
                                    },
                                    filter(event, player) {
                                        return (
                                            game.hasPlayer(function (current) {
                                                return current.hasSkill('genm_meng_xiansi_x') && current.getExpansions('genm_meng_xiansi').length > 1 && event.filterTarget({ name: 'sha' }, player, current);
                                            }) && player.countCards('h', { type: 'basic' })
                                        );
                                    },
                                    filterTarget(card, player, target) {
                                        var bool = false;
                                        var players = ui.selected.targets.slice(0);
                                        for (var i of players) {
                                            if (i.hasSkill('genm_meng_xiansi_x') && i.getExpansions('genm_meng_xiansi').length > 1) bool = true;
                                            break;
                                        }
                                        if (!bool && (!target.hasSkill('genm_meng_xiansi_x') || target.getExpansions('genm_meng_xiansi').length <= 1)) return false;
                                        return _status.event._backup.filterTarget.apply(this, arguments);
                                    },
                                    complexSelect: true,
                                    selectCard: -1,
                                    filterCard() {
                                        return false;
                                    },
                                    forceaudio: true,
                                    prompt: '弃置一名有【逆】的角色的两张【逆】,视为对包含其在内的角色使用【杀】.',
                                    delay: false,
                                    log: false,
                                    precontent() {
                                        'step 0';
                                        player.chooseToDiscard('h', { type: 'basic' }, true);
                                        var targets = event.result.targets.filter(function (current) {
                                            return current.getExpansions('genm_meng_xiansi').length > 1 && current.hasSkill('genm_meng_xiansi_x');
                                        });
                                        if (targets.length == 1) {
                                            event.target = targets[0];
                                            event.goto(2);
                                        } else if (targets.length) {
                                            player
                                                .chooseTarget(true, '选择弃置【陷嗣】牌的目标', function (card, player, target) {
                                                    return _status.event.list.includes(target);
                                                })
                                                .set('list', targets)
                                                .set('ai', function (target) {
                                                    var player = _status.event.player;
                                                    return get.attitude(player, target);
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
                                            if (event.target.getExpansions('xiansi').length == 2) {
                                                event.directresult = event.target.getExpansions('genm_meng_xiansi').slice(0);
                                            } else {
                                                player.chooseCardButton('移去两张<逆>', 2, event.target.getExpansions('genm_meng_xiansi'), true);
                                            }
                                        } else {
                                            event.finish();
                                        }
                                        ('step 3');
                                        if (event.directresult || result.bool) {
                                            var links = event.directresult || result.links;
                                            target.loseToDiscardpile(links);
                                        }
                                    },
                                    ai: {
                                        order() {
                                            return get.order({ name: 'sha' }) + 0.05;
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
                                },
                            },
                            audioname: ['re_liufeng'],
                            group: ['genm_meng_xiansi_use', 'genm_meng_xiansi_x'],
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(
                                    get.prompt2(event.name),
                                    [1, 2],
                                    function (card, player, target) {
                                        return target.countCards('he') > 0;
                                    },
                                    function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    }
                                );
                                ('step 1');
                                if (result.targets?.length) {
                                    result.targets.sortBySeat();
                                    event.targets = result.targets;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.targets.length) {
                                    var target = event.targets.shift();
                                    event.current = target;
                                    player.choosePlayerCard(target, true);
                                } else {
                                    event.goto(4);
                                }
                                ('step 3');
                                if (result.cards?.length) {
                                    player.addToExpansion(result.cards, event.current, 'give').gaintag.add('genm_meng_xiansi');
                                    event.goto(2);
                                }
                                ('step 4');
                                var bool = true,
                                    cards = player.getExpansions('genm_meng_xiansi');
                                var color = get.color(cards[0]);
                                for (var i of cards) if (get.color(i) != color) bool = false;
                                if (bool) event.goto(0);
                                else event.finish();
                            },
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player) {
                                var cards = player.getExpansions('xiansi');
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            ai: {
                                threaten: 2,
                            },
                            global: 'genm_meng_xiansi_global',
                        },
                        genm_meng_zhangwu: {
                            audio: 'sbzhangwu',
                            subSkill: {
                                add: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    silent: true,
                                    content() {
                                        'step 0';
                                        var list = player.storage[event.name];
                                        player
                                            .chooseControl(list)
                                            .set(
                                                'choiceList',
                                                list.map(function (i) {
                                                    return '<div class="skill">【' + get.translation(lib.translate[`${i}_ab`] || get.translation(i).slice(0, 2)) + `】</div><div>${get.skillInfoTranslation(i, player)}</div>`;
                                                })
                                            )
                                            .set('displayIndex', false)
                                            .set('prompt', '彰武:请选择你要获得的技能')
                                            .set('ai', () => {
                                                var list = _status.event.controls.slice();
                                                return list.sort((a, b) => {
                                                    return get.skillRank(b, 'in') - get.skillRank(a, 'in');
                                                })[0];
                                            });
                                        ('step 1');
                                        player.addSkillLog(result.control);
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: 1,
                                },
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: true,
                            selectCard: [1, Infinity],
                            position: 'he',
                            filter(event, player) {
                                if (!player.storage.genm_zhangwu) player.storage.genm_zhangwu = [];
                                return player.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                event.num = cards.length;
                                var character = ['wu_zhugeliang', 'ps_shen_machao', 'shen_zhangfei', 'boss_zhaoyun', 'jsrg_guanyu', 'sb_huangzhong'];
                                if (player.storage.genm_zhangwu) character.removeArray(player.storage.genm_zhangwu);
                                var dialog = ui.create.dialog('选择至多两名角色的技能获得', 'hidden');
                                dialog.add([character, 'character']);
                                var next = (player.chooseButton(dialog, [1, 2], true).ai = function (button) {
                                    return get.rank(button.link, true);
                                });
                                ('step 1');
                                player.storage.genm_zhangwu = [];
                                player.storage.genm_zhangwu.addArray(result.links);
                                var list = result.links;
                                var skills = [];
                                for (var i of list) {
                                    skills.addArray(lib.character[i][3] || []);
                                }
                                if (!list.length || !skills.length) {
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
                                        skills: skills.randomGets(event.num),
                                    };
                                    if (event.dialog) event.dialog.close();
                                    if (event.control) event.control.close();
                                };
                                var num = event.num;
                                var chooseButton = function (list, skills, num) {
                                    var event = _status.event;
                                    if (!event._result) event._result = {};
                                    event._result.skills = [];
                                    var rSkill = event._result.skills;
                                    var dialog = ui.create.dialog(`请选择获得至多${get.cnNumber(num)}个技能`, [list, 'character'], 'hidden');
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
                                        td.innerHTML = `<span>${get.translation(skills[i])}</span>`;
                                        td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                            if (_status.dragged) return;
                                            if (_status.justdragged) return;
                                            _status.tempNoButton = true;
                                            setTimeout(function () {
                                                _status.tempNoButton = false;
                                            }, 500);
                                            var link = this.link;
                                            if (!this.classList.contains('bluebg')) {
                                                if (rSkill.length >= num) return;
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
                                    chooseButton(list, skills, num);
                                } else if (event.isOnline()) {
                                    event.player.send(chooseButton, list, skills, num);
                                    event.player.wait();
                                    game.pause();
                                } else {
                                    switchToAuto();
                                }
                                ('step 2');
                                var map = event.result || result;
                                if (map && map.skills && map.skills.length) {
                                    player.addSkill('genm_zhangwu_add');
                                    player.storage.genm_zhangwu_add = map.skills;
                                    for (var i of map.skills) player.addTempSkill(i, { player: 'phaseBegin' });
                                }
                            },
                        },
                        genm_meng_jijiang: {
                            audio: 'ext:梦之将/audio:2',
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            zhuSkill: true,
                            forced: true,
                            filter(event, player) {
                                if (!player.hasZhuSkill('sbjijiang')) return false;
                                return game.hasPlayer((current) => {
                                    if (current.group != 'shu' || player == current || current.hp < player.hp) return false;
                                    return game.hasPlayer((currentx) => current.inRange(currentx));
                                });
                            },
                            content() {
                                'step 0';
                                var next = player.chooseTarget(get.prompt2('sbjijiang'), 2);
                                next.set('filterTarget', (card, player, target) => {
                                    if (!ui.selected.targets.length) return true;
                                    var current = ui.selected.targets[0];
                                    if (current.group == 'shu' && current.hp >= player.hp && current != player) {
                                        return current.inRange(target);
                                    } else {
                                        return target.group == 'shu' && target.hp >= player.hp && target.inRange(current) && target != player;
                                    }
                                });
                                next.set('targetprompt', (target) => {
                                    var player = _status.event.player;
                                    if (
                                        target.group == 'shu' &&
                                        target.hp >= player.hp &&
                                        target != player &&
                                        !ui.selected.targets.some((i) => {
                                            return i != target && i.hp >= player.hp && i.group == 'shu';
                                        })
                                    )
                                        return '进行选择';
                                    return '出杀对象';
                                });
                                next.set('ai', (target) => {
                                    var player = _status.event.player;
                                    if (ui.selected.targets.length) {
                                        var current = ui.selected.targets[0];
                                        if (current.group == 'shu' && current.hp >= player.hp && current != player) {
                                            return -get.attitude(player, target);
                                        }
                                        return Math.abs(get.attitude(player, current));
                                    } else {
                                        if (
                                            target.group == 'shu' &&
                                            target.hp >= player.hp &&
                                            target != player &&
                                            game.hasPlayer((current) => {
                                                return get.attitude(player, current) < 0;
                                            })
                                        )
                                            return 10;
                                        return 1;
                                    }
                                });
                                ('step 1');
                                if (result.targets?.length) {
                                    var targets = result.targets;
                                    event.targets = targets;
                                    if (targets[0].group != 'shu' || targets[0].hp < player.hp || targets[0] == player) targets.reverse();
                                    player.line2(targets);
                                    var choiceList = [`视为对${get.translation(targets[1])}使用一张【杀】`, '你的下一个出牌阶段开始前,跳过此阶段'];
                                    targets[0]
                                        .chooseControl()
                                        .set('choiceList', choiceList)
                                        .set('ai', () => {
                                            return _status.event.choice;
                                        })
                                        .set('choice', get.effect(targets[1], { name: 'sha' }, targets[0], targets[0]) > get.effect(targets[0], { name: 'lebu' }, targets[0], targets[0]) ? 0 : 1);
                                } else event.finish();
                                ('step 2');
                                if (result.index == 0) {
                                    targets[0].useCard({ name: 'sha' }, targets[1], false);
                                } else {
                                    targets[0].addSkill('sbjijiang_skip');
                                }
                            },
                            subSkill: {
                                skip: {
                                    trigger: {
                                        player: 'phaseUseBefore',
                                    },
                                    charlotte: true,
                                    forced: true,
                                    content() {
                                        trigger.cancel();
                                        player.removeSkill('sbjijiang_skip');
                                    },
                                },
                            },
                        },
                        genm_meng_rende: {
                            audio: 'rerende',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return game.hasPlayer((current) => {
                                    return lib.skill.dcrende.filterTarget(null, player, current);
                                });
                            },
                            discard: false,
                            lose: false,
                            delay: false,
                            filterTarget(card, player, target) {
                                if (player.getStorage('dcrende_targeted').includes(target)) return false;
                                return player != target && target.countGainableCards(player, 'h') > 1;
                            },
                            content() {
                                'step 0';
                                player.addTempSkill('dcrende_targeted', 'phaseUseAfter');
                                player.markAuto('dcrende_targeted', [target]);
                                player.gainPlayerCard(target, 'h', true, 2);
                                ('step 1');
                                var list = [];
                                for (var name of lib.inpile) {
                                    if (get.type(name) != 'basic') continue;
                                    var card = { name: name };
                                    if (
                                        lib.filter.cardUsable(card, player, event.getParent('chooseToUse')) &&
                                        game.hasPlayer((current) => {
                                            return player.canUse(card, current);
                                        })
                                    ) {
                                        list.push(['基本', '', name]);
                                    }
                                    if (name == 'sha') {
                                        for (var nature of lib.inpile_nature) {
                                            card.nature = nature;
                                            if (
                                                lib.filter.cardUsable(card, player, event.getParent('chooseToUse')) &&
                                                game.hasPlayer((current) => {
                                                    return player.canUse(card, current);
                                                })
                                            ) {
                                                list.push(['基本', '', name, nature]);
                                            }
                                        }
                                    }
                                }
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
                                                    return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
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
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result && result.bool && result.links[0]) {
                                    var card = { name: result.links[0][2], nature: result.links[0][3] };
                                    player.chooseUseTarget(card, true);
                                }
                            },
                            subSkill: {
                                targeted: {
                                    charlotte: true,
                                },
                            },
                            ai: {
                                fireAttack: true,
                                order(skill, player) {
                                    return 10;
                                },
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('noh')) return -0.1;
                                        return -2;
                                    },
                                },
                                threaten: 3,
                            },
                        },
                        genm_meng_fanfu: {
                            audio: 'fuhan', //QQQ
                            trigger: {
                                global: 'damageEnd',
                            },
                            forced: true,
                            init(player) {
                                player.storage.genm_meng_fanfu = ['摸牌', '弃牌'];
                            },
                            filter(event, player) {
                                return (event.player == player || event.source == player) && player.storage.genm_meng_fanfu && player.storage.genm_meng_fanfu.length;
                            },
                            content() {
                                'step 0';
                                event.videoId = lib.status.videoId++;
                                var list = [];
                                if (player.storage.genm_meng_fanfu.includes('摸牌')) list.push('摸牌:摸一张牌并交给一名角色任意张牌,若交出的牌数不小于二则你视为使用或打出一张非延时锦囊牌或一张基本牌(以此法使用的基本牌不计入次数限制)');
                                if (player.storage.genm_meng_fanfu.includes('弃牌')) list.push('弃牌:令一名角色弃置一张牌且你回复一点体力');
                                if (list.length) {
                                    event.list = list;
                                    var func = function (card, id, card2, card3) {
                                        var choiceList = ui.create.dialog('蕃辅:请选择一项');
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
                                    next.set('selectButton', 1);
                                    next.set('ai', function () {
                                        return [0, 1].randomGet();
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                if (result.links?.length) {
                                    if (player.isOnline2()) {
                                        player.send('closeDialog', event.videoId);
                                    }
                                    event.dialog.close();
                                    result.control = event.list[result.links[0]];
                                    var list = ['摸', '弃'];
                                    for (var i = 0; i < list.length; i++) {
                                        if (result.control.includes(list[i])) {
                                            event.links = i;
                                            break;
                                        }
                                    }
                                } else {
                                    if (player.isOnline2()) {
                                        player.send('closeDialog', event.videoId);
                                    }
                                    event.dialog.close();
                                    event.finish();
                                }
                                ('step 2');
                                if (event.links == 0) {
                                    player.storage.genm_meng_fanfu.remove('摸牌');
                                    player.draw();
                                    player.chooseCardTarget({
                                        prompt: '请选择【蕃辅】的牌和目标',
                                        prompt2: '将任意张牌交给一名角色,若交出的牌数不小于二则你视为使用或打出一张非延时锦囊牌或一张基本牌(以此法使用基本牌不计入次数限制)',
                                        filterCard: true,
                                        position: 'he',
                                        selectCard: [1, Infinity],
                                        forced: true,
                                        filterTarget: true,
                                        ai1(card) {
                                            if (ui.selected.cards.length < 2) return 99 - get.value(card);
                                            if (ui.selected.cards.length == 2) return 0;
                                            return 7 - get.value(card);
                                        },
                                        ai2(target) {
                                            var player = _status.event.player;
                                            return get.attitude(player, target) > 0;
                                        },
                                    });
                                }
                                ('step 3');
                                if (event.links == 0 && result.bool) {
                                    var target = result.targets[0];
                                    player.line(target, 'green');
                                    player.give(result.cards, target);
                                    if (result.cards.length >= 2) {
                                        var list = [];
                                        for (var i = 0; i < lib.inpile.length; i++) {
                                            var name = lib.inpile[i];
                                            if (name == 'sha') {
                                                if (
                                                    lib.filter.cardUsable({ name: name }, player, event) &&
                                                    game.hasPlayer(function (current) {
                                                        return player.canUse({ name: name }, current);
                                                    })
                                                )
                                                    list.push(['基本', '', 'sha']);
                                                for (var j of lib.inpile_nature) {
                                                    if (
                                                        lib.filter.cardUsable({ name: name, nature: j }, player, event) &&
                                                        game.hasPlayer(function (current) {
                                                            return player.canUse({ name: name, nature: j }, current);
                                                        })
                                                    )
                                                        list.push(['基本', '', 'sha', j]);
                                                }
                                            } else if (
                                                get.type(name) == 'trick' &&
                                                lib.filter.cardUsable({ name: name }, player, event) &&
                                                game.hasPlayer(function (current) {
                                                    return player.canUse({ name: name }, current);
                                                })
                                            )
                                                list.push(['锦囊', '', name]);
                                            else if (
                                                get.type(name) == 'basic' &&
                                                lib.filter.cardUsable({ name: name }, player, event) &&
                                                game.hasPlayer(function (current) {
                                                    return player.canUse({ name: name }, current);
                                                })
                                            )
                                                list.push(['基本', '', name]);
                                        }
                                        if (list.length) {
                                            player.chooseButton(['蕃辅:请视为使用一张非延时锦囊牌或一张基本牌？', [list, 'vcard']]).set('forced', true);
                                        }
                                    }
                                }
                                ('step 4');
                                if (event.links == 0 && result && result.bool && result.links[0]) {
                                    var card = { name: result.links[0][2], nature: result.links[0][3] };
                                    if (get.type(card) == 'basic') {
                                        player.chooseUseTarget(card, false, true);
                                    } else {
                                        player.chooseUseTarget(card, true);
                                    }
                                    event.finish();
                                }
                                ('step 5');
                                if (
                                    event.links == 1 &&
                                    game.hasPlayer(function (current) {
                                        return current.countCards('he') > 0;
                                    })
                                ) {
                                    player.storage.genm_meng_fanfu.remove('弃牌');
                                    player
                                        .chooseTarget('蕃辅:请选择一名角色,令其弃置一张牌.')
                                        .set('forced', true)
                                        .set('filterTarget', function (card, player, target) {
                                            return target.countCards('he') > 0;
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            return get.attitude(player, target) < 0;
                                        });
                                }
                                ('step 6');
                                if (event.links == 1 && result.bool) {
                                    var target = result.targets[0];
                                    target.chooseToDiscard('蕃辅:请弃置一张牌.', 'he', true);
                                    player.recover();
                                    event.finish();
                                }
                            },
                            group: ['genm_meng_fanfu_init'],
                            subSkill: {
                                init: {
                                    forced: true,
                                    silent: true,
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    content() {
                                        player.storage.genm_meng_fanfu = ['摸牌', '弃牌'];
                                    },
                                    popup: false,
                                    _priority: 1,
                                },
                            },
                        },
                        genm_meng_shuhuan: {
                            audio: 'ext:梦之将/audio:2', //QQQ
                            forced: true,
                            trigger: {
                                global: 'discardAfter',
                            },
                            filter(event, player) {
                                return event.cards && event.cards.length >= 1 && event.getParent(2).name != 'phaseDiscard' && event.getParent(2).name != 'genm_meng_shuhuan';
                            },
                            content() {
                                'step 0';
                                player.chooseTarget('疏宦:选择一名其他角色使其弃置X张牌或摸一张牌并回复一点体力(X为你已损失体力值且至少为一).', true).set('filterTarget', function (card, player, target) {
                                    return target != player;
                                });
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    var list = [];
                                    list.push(`令${get.translation(target)}摸一牌并回复一点体力`);
                                    if (target.countCards('he') > 0) list.push(`令${get.translation(target)}弃置${get.cnNumber(player.maxHp - player.hp)}张牌`);
                                    event.num = player.maxHp - player.hp;
                                    if (list.length) {
                                        event.list = list;
                                        var func = function (card, id, card2, card3) {
                                            var choiceList = ui.create.dialog('疏宦:请选择一项');
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
                                        next.set('selectButton', 1);
                                        next.set('ai', function () {
                                            if (get.attitude(player, target) > 0) return 0;
                                            return 1;
                                        });
                                    } else {
                                        event.finish();
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (player.isOnline2()) {
                                    player.send('closeDialog', event.videoId);
                                }
                                event.dialog.close();
                                result.control = event.list[result.links[0]];
                                var list = ['摸', '弃'];
                                for (var i = 0; i < list.length; i++) {
                                    if (result.control.includes(list[i])) {
                                        event.links = i;
                                        break;
                                    }
                                }
                                ('step 3');
                                if (event.links == 0) {
                                    event.target.draw();
                                    event.target.recover();
                                } else if (event.links == 1) {
                                    if (event.num < 1) event.num = 1;
                                    event.target.chooseToDiscard(`疏宦:弃置${get.cnNumber(player.maxHp - player.hp)}张牌`, 'he', event.num, true);
                                }
                            },
                        },
                        genm_meng_zezhu: {
                            audio: 'ext:梦之将/audio:6',
                            subSkill: {
                                effect: {
                                    trigger: {
                                        global: 'damageBegin',
                                    },
                                    filter(event, player) {
                                        if (!player.storage.ly_zezhu_effect.includes(event.player)) return false;
                                        for (var i of ['转移', '防止']) {
                                            if (
                                                player.getHistory('custom', function (evt) {
                                                    return evt.index == i;
                                                }).length == 0
                                            )
                                                return true;
                                        }
                                        return false;
                                    },
                                    logTarget: 'player',
                                    content() {
                                        'step 0';
                                        var choice = [],
                                            list = ['弃置所有手牌防止此次伤害', `令${get.translation(trigger.player)}摸一张牌将伤害转移给你`];
                                        for (var i of ['转移', '防止']) {
                                            if (i == '防止') {
                                                if (player.countCards('h')) choice.push('选项一');
                                            } else choice.push('选项二');
                                        }
                                        if (choice.length) player.chooseControl(choice).set('choiceList', list);
                                        else event.finish();
                                        ('step 1');
                                        if (result.control == '选项一') {
                                            player.discard(player.getCards('h'));
                                            trigger.cancel();
                                            player.getHistory('custom').push({ index: '防止' });
                                        } else {
                                            trigger.player.draw();
                                            trigger.player = player;
                                            player.getHistory('custom').push({ index: '转移' });
                                        }
                                    },
                                },
                            },
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.hasPlayer((current) => current != player) && (event.name != 'phase' || game.phaseNumber == 0);
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('请选择【先辅】的目标', lib.translate.xianfu_info, true, function (card, player, target) {
                                        return target != player && (!player.storage.ly_zezhu_effect || !player.storage.ly_zezhu_effect.includes(target));
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (att > 0) return att + 1;
                                        if (att == 0) return Math.random();
                                        return att;
                                    }).animate = false;
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    if (!player.storage.ly_zezhu_effect) player.storage.ly_zezhu_effect = [];
                                    player.storage.ly_zezhu_effect.push(target); //QQQ
                                }
                            },
                        },
                        genm_meng_dongmou: {
                            trigger: {
                                player: 'gainAfter',
                            },
                            forced: true,
                            usable: 1,
                            filter(event, player) {
                                var evt = event.getParent('phaseDraw');
                                if (evt && evt.player == player) return false;
                                return event.getg(player).length;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2(event.name), function (card, player, target) {
                                        return target.countCards('h') < player.countCards('h'); //target.countCards('h')<Math.min(target.maxHp,5);
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (target.hasSkillTag('nogain')) att /= 6;
                                        if (att > 2) {
                                            return Math.max(0, Math.min(5, target.maxHp) - target.countCards('h'));
                                        }
                                        return att / 3;
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].drawTo(Math.min(5, player.countCards('h')));
                                    }
                                    event.target = result.targets[0];
                                } else event.finish();
                                ('step 2');
                                event.target.chooseCard('h', '是否重铸任意张牌', [1, Infinity]);
                                ('step 3');
                                var skip = true;
                                var hs = player.getCards('h');
                                if (!hs.length) skip = false;
                                for (var i = 0; i < hs.length; i++) {
                                    if (!result.cards.includes(hs[i])) {
                                        skip = false;
                                        break;
                                    }
                                }
                                if (skip) event.target.skip('phaseDiscard');
                                if (result.cards) event.target.recast(result.cards);
                                else {
                                    if (!player.storage.ly_zezhu_effect.includes(event.target)) event.finish;
                                }
                                ('step 4');
                                player.chooseCard('h', [1, Infinity], '重铸任意张牌');
                                ('step 5');
                                if (result.cards) player.recast(result.cards);
                            },
                        },
                        genm_meng_zuoce: {
                            subSkill: {
                                recover: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    silent: true,
                                    content() {
                                        player.recover();
                                        player.removeSkill(event.name);
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: 1,
                                },
                                effect: {
                                    trigger: {
                                        player: 'phaseUseBegin',
                                    },
                                    silent: true,
                                    content() {
                                        'step 0';
                                        var list = [],
                                            typelist = [];
                                        var getType = function (card) {
                                            return card.name;
                                        };
                                        for (var i = 0; i < ui.cardPile.childElementCount; i++) {
                                            var node = ui.cardPile.childNodes[i];
                                            var typex = getType(node);
                                            if (!typelist.includes(typex) && ['basic', 'trick'].includes(get.type(node))) {
                                                list.push(node);
                                                typelist.push(typex);
                                                if (list.length >= 3) break;
                                            }
                                        }
                                        player.gain(list, 'gain2');
                                        ('step 1');
                                        player.removeSkill(event.name);
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: 1,
                                },
                            },
                            audio: 'ext:梦之将/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            _priority: 10,
                            check(event, player) {
                                return player.hp > 1;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2(event.name)).set('ai', (target) => {
                                    if (_status.event.player.storage.ly_zezhu_effect.includes(target)) return 10;
                                    return get.attitude(_status.event.player, target);
                                });
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    player.loseHp();
                                    target.addSkill(event.name + '_effect');
                                    if (player.storage.ly_zezhu_effect.includes(target)) player.addSkill(event.name + '_recover');
                                }
                            },
                            _priority: 1000,
                        },
                        genm_meng_wusheng: {
                            mod: {
                                targetInRange(card) {
                                    if (card.suit == 'diamond' && card.name == 'sha') return true;
                                },
                            },
                            audio: 'new_rewusheng',
                            audioname: ['re_guanyu', 'guanzhang'],
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
                            audioname2: {
                                ol_guansuo: 'wusheng_guansuo',
                            },
                            group: ['genm_meng_wusheng_diamond', 'genm_meng_wusheng_heart', 'genm_meng_wusheng_pojia'],
                            subSkill: {
                                diamond: {
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha' && event.card.suit == 'diamond' && event.num > 0;
                                    },
                                    forced: true,
                                    preHidden: true,
                                    content() {
                                        player.changeHujia(1);
                                    },
                                },
                                heart: {
                                    trigger: {
                                        player: 'useCard1',
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha' && event.card.suit == 'heart';
                                    },
                                    forced: true,
                                    preHidden: true,
                                    content() {
                                        if (!trigger.baseDamage) trigger.baseDamage = 1;
                                        trigger.baseDamage += 1;
                                    },
                                },
                                pojia: {
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha';
                                    },
                                    logTarget: 'target',
                                    content() {
                                        trigger.target.addTempSkill('genm_meng_wusheng_pojia2');
                                        trigger.target.storage.genm_meng_wusheng_pojia2.add(trigger.card);
                                        trigger.target.markSkill('genm_meng_wusheng_pojia2');
                                    },
                                },
                                pojia2: {
                                    firstDo: true,
                                    ai: {
                                        nohujia: true,
                                    },
                                    init(player, skill) {
                                        if (!player.storage[skill]) player.storage[skill] = [];
                                    },
                                    trigger: {
                                        player: ['damage', 'damageCancelled', 'damageZero'],
                                        source: ['damage', 'damageCancelled', 'damageZero'],
                                        target: ['shaMiss', 'useCardToExcluded', 'useCardToEnd', 'eventNeutralized'],
                                        global: ['useCardEnd'],
                                    },
                                    charlotte: true,
                                    filter(event, player) {
                                        return player.storage.genm_meng_wusheng_pojia2 && event.card && player.storage.genm_meng_wusheng_pojia2.includes(event.card) && (event.name != 'damage' || event.notLink());
                                    },
                                    silent: true,
                                    forced: true,
                                    popup: false,
                                    _priority: 12,
                                    content() {
                                        player.storage.genm_meng_wusheng_pojia2.remove(trigger.card);
                                        if (!player.storage.genm_meng_wusheng_pojia2.length) player.removeSkill('genm_meng_wusheng_pojia2');
                                    },
                                    marktext: '破甲',
                                    intro: {
                                        content: '当前护甲已失效',
                                    },
                                    _priority: 1201,
                                },
                            },
                        },
                        genm_meng_yijue: {
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
                                    target.addTempSkill('genm_meng_yijue_cardEnabled2');
                                    player.gain(event.card2, target, 'give', 'bySelf');
                                    event.finish();
                                } else {
                                    player.gain(event.card2, target, 'give', 'bySelf');
                                    player.chooseBool('是否让目标获得一点护甲？').ai = function (event, player) {
                                        return get.recoverEffect(target, player, player) > 0;
                                    };
                                }
                                ('step 2');
                                if (result.bool) {
                                    target.changeHujia(1);
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
                                    if (!arg.target.hasSkillTag('genm_memg_yijue_cardEnabled2')) return false;
                                },
                            },
                            subSkill: {
                                cardEnabled2: {
                                    mark: true,
                                    mod: {
                                        cardEnabled2(card) {
                                            if (get.position(card) == 'h') return false;
                                        },
                                    },
                                    intro: {
                                        content: '不能使用或打出手牌',
                                    },
                                },
                            },
                        },
                        genm_meng_wuwei: {
                            audio: 'wushen',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return player.hujia > 0;
                            },
                            content() {
                                'step 0';
                                if (player.hujia > 0) {
                                    var num = player.hujia;
                                    var map = {};
                                    var list = [];
                                    for (var i = 1; i <= player.hujia; i++) {
                                        var cn = get.cnNumber(i, true);
                                        map[cn] = i;
                                        list.push(cn);
                                    }
                                    event.map = map;
                                    player
                                        .chooseControl(list, function () {
                                            return get.cnNumber(_status.event.goon, true);
                                        })
                                        .set('prompt', '失去任意点护甲')
                                        .set('goon', num);
                                }
                                ('step 1');
                                var num1 = event.map[result.control] || 1;
                                player.changeHujia(-num1);
                                player.loseHp();
                                player.draw(num1);
                                player.addTempSkill('genm_meng_wuwei_sha');
                                player.addMark('genm_meng_wuwei_sha', num1, false);
                            },
                            subSkill: {
                                sha: {
                                    mod: {
                                        cardUsable(card, player, num) {
                                            if (card.name == 'sha') return num + player.countMark('genm_meng_wuwei_sha');
                                        },
                                    },
                                    charlotte: true,
                                    mark: true,
                                    marktext: '武威',
                                    intro: {
                                        content: '出杀次数+#',
                                    },
                                },
                            },
                        },
                        genm_meng_quanji: {
                            audio: 'requanji',
                            trigger: {
                                player: ['damageEnd', 'phaseUseEnd'],
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
                                    player.chooseCard('将一张手牌置于武将牌上作为<权>', true);
                                } else {
                                    event.goto(4);
                                }
                                ('step 3');
                                if (result.cards?.length) {
                                    player.addToExpansion(result.cards, player, 'give').gaintag.add('xinquanji');
                                }
                                ('step 4');
                                if (event.count > 0) {
                                    player.chooseBool(get.prompt2('xinquanji')).set('frequentSkill', 'xinquanji');
                                } else event.finish();
                                ('step 5');
                                if (result.bool) {
                                    event.goto(1);
                                }
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.getExpansions('xinquanji').length;
                                },
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions('xinquanji');
                                if (cards.length) player.loseToDiscardpile(cards);
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
                                            if (!target.hasSkill('paiyi') && target.hp > 1) return [0.5, get.tag(card, 'damage') * 1.5];
                                            if (target.hp == 3) return [0.5, get.tag(card, 'damage') * 1.5];
                                            if (target.hp == 2) return [1, get.tag(card, 'damage') * 0.5];
                                        }
                                    },
                                },
                            },
                        },
                        genm_meng_zili: {
                            derivation: 'xinpaiyi',
                            audio: 'rezili',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            juexingji: true,
                            filter(event, player) {
                                return player.getExpansions('xinquanji').length > 2;
                            },
                            content() {
                                player.awakenSkill('xinzili');
                                player.recover();
                                player.draw(2);
                                player.loseMaxHp();
                                player.addSkill('xinpaiyi');
                            },
                        },
                        genm_jiu_qingshi: {
                            audio: 'ext:梦之将/audio:2', //QQQ
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                if (!player.isPhaseUsing() || player.hasSkill('genm_jiu_qingshi_blocker')) return false;
                                if (player.getStorage('genm_jiu_qingshi_clear').includes(event.card.name)) return false;
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
                                var choiceList = [`令${get.translation(trigger.card)}对其中一个目标角色造成的伤害+1`, '令任意名其他角色各摸一张牌', '摸七张牌,〖情势〗于本回合失效'];
                                if (trigger.targets && trigger.targets.length) choices.push('选项一');
                                else choiceList[0] = `<span style="opacity:0.5">${choiceList[0]}(无目标角色)</span>`;
                                if (game.countPlayer((i) => i != player)) choices.push('选项二');
                                else choiceList[1] = `<span style="opacity:0.5">${choiceList[1]}</span>`;
                                if (player.hp > 0) choices.push('选项三');
                                else choiceList[2] = `<span style="opacity:0.5">${choiceList[1]}(体力值为0)</span>`;
                                player
                                    .chooseControl(choices, 'cancel2')
                                    .set('choiceList', choiceList)
                                    .set('prompt', get.prompt('dcqingshi'))
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
                                                bool2 = choicesx.includes('选项二') && game.countPlayer((current) => get.attitude(player, current) > 0) >= 1;
                                            if (!bool1 && !bool2) {
                                                if (Array.isArray(cards))
                                                    for (var i of cards) {
                                                        var name = i.name;
                                                        if (player.getStorage('genm_jiu_qingshi_clear').includes(name)) continue;
                                                        for (var j = i + 1; j < cards.length; j++) {
                                                            if (name == cards[j].name && get.position(i) + get.position(cards[j]) != 'ss' && player.hasValueTarget(i)) {
                                                                choicesx.remove('选项三');
                                                                break;
                                                            }
                                                        }
                                                    }
                                            }
                                            if (choicesx.includes('选项三')) return '选项三';
                                            if (bool1) return '选项一';
                                            if (bool2) return '选项二';
                                            return 'cancel2';
                                        })()
                                    );
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    game.log(player, '选择了', '#y' + result.control);
                                    var index = ['选项一', '选项二', '选项三'].indexOf(result.control) + 1;
                                    player.markAuto('genm_jiu_qingshi_clear', [trigger.card.name]); //QQQ
                                    var next = game.createEvent('genm_jiu_qingshi_after');
                                    next.player = player;
                                    next.card = trigger.card;
                                    next.setContent(lib.skill.genm_jiu_qingshi[`content${index}`]);
                                }
                            },
                            content1() {
                                'step 0';
                                player
                                    .chooseTarget(`令${get.translation(card)}对其中一个目标造成的伤害+1`, true, (card, player, target) => {
                                        return _status.event.targets.includes(target);
                                    })
                                    .set('ai', (target) => {
                                        return 2 - get.attitude(_status.event.player, target);
                                    })
                                    .set('targets', event.parent.getTrigger().targets);
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    player.line(target);
                                    player.addTempSkill('genm_jiu_qingshi_ex');
                                    if (!player.storage.genm_jiu_qingshi_ex) player.storage.genm_jiu_qingshi_ex = [];
                                    player.storage.genm_jiu_qingshi_ex.push([target, card]);
                                }
                            },
                            content2() {
                                'step 0';
                                player.chooseTarget('令任意名其他角色各摸一张牌', [1, Infinity], true, lib.filter.notMe).set('ai', (target) => {
                                    return get.attitude(_status.event.player, target);
                                });
                                ('step 1');
                                if (result.targets?.length) {
                                    var targets = result.targets;
                                    targets.sortBySeat();
                                    player.line(targets);
                                    game.asyncDraw(targets);
                                    game.delayex();
                                }
                            },
                            content3() {
                                'step 0';
                                player.draw(7);
                                player.addTempSkill('genm_jiu_qingshi_blocker');
                            },
                            subSkill: {
                                ex: {
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    filter(event, player) {
                                        return (
                                            player.storage.dcqingshi_ex &&
                                            player.storage.dcqingshi_ex.some((info) => {
                                                return info[0] == event.player && info[1] == event.card;
                                            })
                                        );
                                    },
                                    forced: true,
                                    charlotte: true,
                                    popup: false,
                                    content() {
                                        trigger.num++;
                                        for (var i = 0; i < player.storage.genm_jiu_qingshi_ex.length; i++) {
                                            if (player.storage.genm_jiu_qingshi_ex[i][1] == trigger.card) player.storage.genm_jiu_qingshi_ex.splice(i--, 1);
                                        }
                                    },
                                },
                                clear: {
                                    charlotte: true,
                                },
                                blocker: {
                                    charlotte: true,
                                },
                            },
                            ai: {
                                threaten: 6,
                            },
                        },
                        genm_jiu_jincui: {
                            audio: 'ext:梦之将/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            //准备阶段,你将体力值回复或失去至等同于牌堆中点数为7的牌数(你的体力值最低因此调整至1).你观看牌堆顶X张牌,将这些牌以任意顺序置于牌堆顶或牌堆底
                            async content(event, trigger, player) {
                                //QQQ
                                const num = Array.from(ui.cardPile.childNodes).filter((q) => q.number == 7).length;
                                player.hp = num;
                                var cards = get.cards(num);
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
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (!get.tag(card, 'damage')) return;
                                        var num = 0,
                                            bool = false;
                                        for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                                            var card = ui.cardPile.childNodes[i];
                                            if (card.number == 7) {
                                                num++;
                                                if (num >= target.hp) {
                                                    bool = true;
                                                    break;
                                                }
                                            }
                                        }
                                        if (bool) return 0.2;
                                    },
                                },
                                threaten: 0.6,
                            },
                            group: 'dcjincui_advent',
                            subSkill: {
                                advent: {
                                    audio: 'dcjincui',
                                    trigger: {
                                        global: 'phaseBefore',
                                        player: 'enterGame',
                                    },
                                    filter(event, player) {
                                        return (event.name != 'phase' || game.phaseNumber == 0) && player.countCards('h') < 7;
                                    },
                                    forced: true,
                                    content() {
                                        player.drawTo(7);
                                    },
                                },
                            },
                        },
                        genm_jiu_zhizhe: {
                            audio: 'ext:梦之将/audio:2',
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
                                player.awakenSkill('dczhizhe');
                                var cardx = game.createCard2(card.name, card.suit, card.number, card.nature);
                                player.gain(cardx).gaintag.add('dczhizhe');
                                player.addSkill('dczhizhe_effect');
                            },
                            ai: {
                                order: 15,
                                result: {
                                    player: 1,
                                },
                            },
                            subSkill: {
                                effect: {
                                    trigger: {
                                        player: ['useCardAfter', 'respondAfter'],
                                    },
                                    charlotte: true,
                                    forced: true,
                                    filter(event, player) {
                                        return player.hasHistory('lose', function (evt) {
                                            if (evt.parent != event) return false;
                                            for (var i in evt.gaintag_map) {
                                                if (evt.gaintag_map[i].includes('dczhizhe')) {
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
                                                if (evt.gaintag_map[i].includes('dczhizhe')) {
                                                    var cardsx = trigger.cards.filter((card) => {
                                                        return get.position(card, true) == 'o' && card.cardid == i;
                                                    });
                                                    if (cardsx.length) cards.addArray(cardsx);
                                                }
                                            }
                                        });
                                        if (cards.length) {
                                            player.gain(cards, 'gain2').gaintag.addArray(['dczhizhe', 'dczhizhe_clear']);
                                            player.addTempSkill('dczhizhe_clear');
                                        }
                                    },
                                },
                                clear: {
                                    charlotte: true,
                                    onremove(player) {
                                        player.removeGaintag('dczhizhe_clear');
                                    },
                                    mod: {
                                        cardEnabled2(card, player) {
                                            var cards = [];
                                            if (card.cards) cards.addArray(cards);
                                            if (get.itemtype(card) == 'card') cards.push(card);
                                            for (var cardx of cards) {
                                                if (cardx.hasGaintag('dczhizhe_clear')) return false;
                                            }
                                        },
                                        cardRespondable(card, player) {
                                            var cards = [];
                                            if (card.cards) cards.addArray(cards);
                                            if (get.itemtype(card) == 'card') cards.push(card);
                                            for (var cardx of cards) {
                                                if (cardx.hasGaintag('dczhizhe_clear')) return false;
                                            }
                                        },
                                        cardSavable(card, player) {
                                            var cards = [];
                                            if (card.cards) cards.addArray(cards);
                                            if (get.itemtype(card) == 'card') cards.push(card);
                                            for (var cardx of cards) {
                                                if (cardx.hasGaintag('dczhizhe_clear')) return false;
                                            }
                                        },
                                    },
                                },
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init: (player, skill) => (player.storage[skill] = false),
                        },
                        genm_meng_pingjian: {
                            audio: 'pingjian',
                            phaseUse_special: [],
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
                            trigger: {
                                global: 'judge',
                                player: ['damageEnd', 'phaseJieshuBegin', 'phaseUseBegin', 'phaseDrawBegin2', 'phaseZhunbeiBegin', 'phaseJudgeBegin'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (event.triggername == 'damageEnd') event.count = Math.min(trigger.num, 9);
                                if (!player.storage.genm_meng_pingjian) player.storage.genm_meng_pingjian = [];
                                ('step 1');
                                if (!_status.characterlist) lib.skill.pingjian.initList();
                                var list = [];
                                var skills = [];
                                var map = [];
                                _status.characterlist.randomSort();
                                var name2 = event.triggername;
                                for (var i = 0; i < _status.characterlist.length; i++) {
                                    var name = _status.characterlist[i];
                                    if (name.includes('zuoci') || name.includes('xushao') || name.includes('shixie')) continue;
                                    var skills2 = lib.character[name][3];
                                    for (var j = 0; j < skills2.length; j++) {
                                        if (player.storage.genm_meng_pingjian.includes(skills2[j])) continue;
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
                                            if (!info || !info.trigger || !info.trigger.player || info.silent || info.limited || info.juexingji || info.hiddenSkill || info.dutySkill || info.groupSkill || (info.priority && typeof info.priority == 'number') || info.firstDo || info.lastDo) continue;
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
                                    if (list.length > 2) break;
                                }
                                if (skills.length) player.chooseControl(skills).set('dialog', ['请选择要发动的技能', [list, 'character']]);
                                else {
                                    player.storage.genm_meng_pingjian_trigger_all = true;
                                    if (player.storage.genm_meng_pingjian_use_all) event.trigger('genm_pingjian_wake');
                                    event.finish();
                                }
                                ('step 2');
                                if (!player.storage.genm_meng_pingjian_wake) player.storage.genm_meng_pingjian.add(result.control);
                                event.tr = {
                                    phaseJieshuBegin: { player: 'phaseJieshuAfter' },
                                    phaseZhunbeiBegin: { player: 'phaseZhunbeiAfter' },
                                    damageEnd: { player: 'damageAfter' },
                                    phaseUseBegin: { player: 'phaseUseAfter' },
                                    phaseJudgeBegin: { player: 'phaseJudgeAfter' },
                                    phaseDrawBegin2: { player: 'phaseDrawAfter' },
                                    judge: { global: 'judgeAfter' },
                                };
                                player.addTempSkill(result.control, event.tr[event.triggername]);
                                game.log(player, '选择了', `#g【${get.translation(result.control)}】`);
                                if (trigger.name == 'damage' && (lib.translate[`${result.control}_info`].includes('1点伤害') || lib.translate[`${result.control}_info`].includes('一点伤害'))) trigger.num = 1;
                                event.count--;
                                ('step 3');
                                if (event.count > 0) event.goto(1);
                            },
                            group: 'genm_meng_pingjian_use',
                            subSkill: {
                                clear: {
                                    onremove(player) {
                                        player.removeMark('genm_meng_pingjian_use', player.countMark('genm_meng_pingjian_use'));
                                    },
                                },
                                count: {
                                },
                                temp: {
                                    charlotte: true,
                                    trigger: {
                                        player: ['useSkillBegin', 'useCard1', 'respond'],
                                    },
                                    filter(event, player) {
                                        var skill = event._bol_useSkillTemp ? event._bol_useSkillTemp : event.sourceSkill || event.skill;
                                        if (!skill) return false;
                                        var info = lib.skill[skill];
                                        if (skill == player.storage.genm_meng_pingjian_temp) return true;
                                        if (info.sourceSkill && info.sourceSkill == player.storage.genm_meng_pingjian_temp) return true;
                                        if (info.group) {
                                            if (info.group == player.storage.genm_meng_pingjian_temp) return true;
                                            if (Array.isArray(info.group) && info.group.includes(player.storage.ggenm_meng_pingjian_temp)) return true;
                                        }
                                        var info2 = lib.skill[player.storage.genm_meng_pingjian_temp];
                                        if (info2.sourceSkill && info2.sourceSkill == skill) return true;
                                        if (info2.group) {
                                            if (info2.group == skill) return true;
                                            if (Array.isArray(info2.group) && info2.group.includes(skill)) return true;
                                        }
                                        return false;
                                    },
                                    silent: true,
                                    firstDo: true,
                                    content() {
                                        player.removeSkill(player.storage.genm_meng_pingjian_temp);
                                        player.removeSkill('genm_meng_pingjian_temp');
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: 1,
                                },
                                use: {
                                    audio: 'pingjian',
                                    enable: 'phaseUse',
                                    usable: 4,
                                    filter(event, player) {
                                        return player.getStat('skill').genm_meng_pingjian_use <= player.countMark('genm_meng_pingjian_count') || !player.getStat('skill').genm_meng_pingjian_use;
                                    },
                                    content() {
                                        'step 0';
                                        if (!player.storage.genm_meng_pingjian) player.storage.genm_meng_pingjian = [];
                                        ('step 1');
                                        player.addTempSkill('genm_meng_pingjian_clear');
                                        player.addMark('genm_meng_pingjian_use', 1, false);
                                        var list = [];
                                        var skills = [];
                                        var map = [];
                                        if (!_status.characterlist) lib.skill.pingjian.initList();
                                        _status.characterlist.randomSort();
                                        for (var i = 0; i < _status.characterlist.length; i++) {
                                            var name = _status.characterlist[i];
                                            if (name.includes('zuoci') || name.includes('xushao') || name.includes('shixie')) continue;
                                            var skills2 = lib.character[name][3];
                                            for (var j = 0; j < skills2.length; j++) {
                                                if (player.storage.genm_meng_pingjian.includes(skills2[j])) continue;
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
                                                    if (list2[k] == 'flappybird' || list2[k] == 'QieShuiGuo' || !info || !info.enable || info.limited || info.juexingji || info.hiddenSkill || info.dutySkill || info.groupSkill) continue;
                                                    if (info.enable == 'phaseUse' || (Array.isArray(info.enable) && info.enable.includes('phaseUse')) || info.enable == 'chooseToUse' || (Array.isArray(info.enable) && info.enable.includes('chooseToUse'))) {
                                                        if (info.init || info.onChooseToUse || (info.ai && (info.ai.combo || info.ai.notemp || info.ai.neg))) continue;
                                                        if (info.filter) {
                                                            try {
                                                                var bool = info.filter(event.getParent(2), player);
                                                                if (!bool) continue;
                                                            } catch (e) {
                                                                continue;
                                                            }
                                                        }
                                                        if (info.viewAs) {
                                                            if (!info.viewAsFilter) continue;
                                                            var namex = info.viewAs.name,
                                                                bool = false;
                                                            if (player.hasUseTarget({ name: namex })) bool = true;
                                                            if (Array.isArray(namex)) {
                                                                for (var i of namex) {
                                                                    if (player.hasUseTarget({ name: i })) bool = true;
                                                                }
                                                            }
                                                            if (!bool) continue;
                                                        }
                                                        list.add(name);
                                                        if (!map[name]) map[name] = [];
                                                        map[name].push(skills2[j]);
                                                        skills.add(skills2[j]);
                                                        break;
                                                    }
                                                }
                                            }
                                            if (list.length > 2) break;
                                        }
                                        if (skills.length) player.chooseControl(skills).set('dialog', ['请选择要发动的技能', [list, 'character']]);
                                        else {
                                            player.storage.genm_meng_pingjian_use_all = true;
                                            if (player.storage.genm_meng_pingjian_trigger_all) event.trigger('genm_meng_pingjian_wake');
                                            event.finish();
                                        }
                                        ('step 2');
                                        if (!player.storage.genm_meng_pingjian_wake) player.storage.genm_meng_pingjian.add(result.control);
                                        player.addTempSkill(result.control, 'phaseUseAfter');
                                        game.log(player, '选择了', `#g【${get.translation(result.control)}】`);
                                        player.addTempSkill('genm_meng_pingjian_temp', 'phaseUseAfter');
                                        player.storage.genm_meng_pingjian_temp = result.control;
                                    },
                                    ai: {
                                        order: 12,
                                        result: {
                                            player: 1,
                                        },
                                    },
                                },
                            },
                        },
                        genm_meng_yaping: {
                            trigger: {
                                global: ['damageBegin', 'genm_meng_pingjian_wake'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.name == 'genm_meng_pingjian_wake') return true;
                                else return (event.player == player || event.source == player) && player.countMark('genm_meng_pingjian_count') < 3;
                            },
                            content() {
                                'step 0';
                                if (event.triggername == 'genm_meng_pingjian_wake') {
                                    player.storage.genm_meng_pingjian_wake = true;
                                    player.removeSkill('genm_meng_yaping');
                                    var list = player.storage.genm_meng_pingjian;
                                    if (list.length) {
                                        var dialog = ui.create.dialog(get.prompt(event.name), 'hidden');
                                        dialog.forcebutton = true;
                                        for (var i = 0; i < list.length; i++) {
                                            var node = ui.create.caption(`<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【${get.translation(list[i])}】</div><div>` + lib.translate[`${list[i]}_info`] + '</div></div>', dialog.content);
                                            dialog.buttons.add(node);
                                            var click = lib.config.touchscreen ? 'touchend' : 'click';
                                            node.addEventListener(click, ui.click.button);
                                            node.style.width = 'calc(100% - 30px)';
                                            node.style.position = 'unset';
                                            node.link = list[i];
                                        }
                                        player.chooseButton(dialog, [1, 2]);
                                    }
                                    player.storage.genm_meng_pingjian = [];
                                } else {
                                    var num = Math.min(trigger.num, 3 - player.countMark('genm_meng_pingjian_count'));
                                    player.addTempSkill('genm_meng_pingjian_count', 'roundStart');
                                    player.addMark('genm_meng_pingjian_count', num);
                                    event.finish();
                                }
                                ('step 1');
                                if (result.bool) player.addSkill(result.links);
                            },
                        },
                        genm_meng_shulv: {
                            audio: 'sanchen',
                            enable: 'phaseUse',
                            usable: 2,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                'step 0';
                                if (target.countCards('h') == player.countCards('h')) event.finish();
                                else {
                                    if (target.countCards('h') < player.countCards('h')) {
                                        target.drawTo(player.countCards('h'));
                                        event.finish();
                                    } else {
                                        player.getStat('skill')[event.name]++;
                                        target.chooseToDiscard(true, target.countCards('h') - player.countCards('h'));
                                    }
                                }
                                ('step 1');
                                event.cards = result.cards;
                                player
                                    .chooseTarget(get.prompt(event.name), `将${get.translation(result.cards)}交给一名其他角色`, function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        if (target.hasJudge('lebu')) return 0;
                                        var att = get.attitude(_status.event.player, target);
                                        if (att < 3) return 0;
                                        if (target.hasSkillTag('nogain')) att /= 10;
                                        return att / (1 + get.distance(player, target, 'absolute'));
                                    });
                                ('step 2');
                                if (result.targets?.length) {
                                    result.targets[0].gain(event.cards, 'gain2');
                                }
                            },
                            ai: {
                                order: 9,
                                threaten: 1.7,
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('nogain')) return 0.1;
                                        return Math.sqrt(target.countCards('he'));
                                    },
                                },
                            },
                        },
                        genm_meng_qingshi: {
                            audio: 'dcdyqingshi',
                            group: 'genm_meng_qingshi_exeffect',
                            subSkill: {
                                exeffect: {
                                    forced: true,
                                    silent: true,
                                    trigger: {
                                        player: 'useCard2',
                                    },
                                    filter: (event, player) => event.card.genm_meng_qingshi,
                                    content() {
                                        trigger.effectCount = player.storage.genm_meng_qingshi;
                                        delete player.storage.genm_meng_qingshi;
                                    },
                                    popup: false,
                                    _priority: 1,
                                },
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                event.exeffect = Math.abs(player.countCards('h') - player.maxHp);
                                if (player.maxHp > player.countCards('h')) player.drawTo(player.maxHp);
                                if (player.maxHp < player.countCards('h')) player.chooseToDiscard('h', player.countCards('h') - player.maxHp, true);
                                var list = [];
                                for (var name of lib.inpile) {
                                    var type = get.type(name);
                                    if (type != 'basic' && type != 'trick') continue;
                                    var card = { name: name };
                                    if (player.hasUseTarget(card)) {
                                        list.push([type, '', name]);
                                    }
                                    if (name == 'sha') {
                                        for (var i of lib.inpile_nature) {
                                            card.nature = i;
                                            if (player.hasUseTarget(card)) list.push([type, '', name, i]);
                                        }
                                    }
                                }
                                if (list.length) {
                                    player.chooseButton(['是否视为使用一张牌？', [list, 'vcard']]).set('ai', function (button) {
                                        return _status.event.player.getUseValue({ name: button.link[2] });
                                    });
                                } else event.finish();
                                ('step 1');
                                if (result.bool) {
                                    player.storage.genm_meng_qingshi = event.exeffect == 0 ? 1 : Math.min(5, event.exeffect);
                                    var card = { name: result.links[0][2], nature: result.links[0][3], genm_meng_qingshi: true };
                                    player.chooseUseTarget(card, true, false);
                                }
                            },
                        },
                        genm_meng_yangu: {
                            usable: 1,
                            audio: 'ext:梦之将/audio:2', //QQQ
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            filterCard: true,
                            position: 'he',
                            selectCard: [1, Infinity],
                            check(card) {
                                var player = _status.event.player;
                                return 7 - ui.selected.cards.length - get.value(card);
                            },
                            init(player, skill) {
                                if (!player.storage[skill]) {
                                    player.storage[skill] = [
                                        [
                                            '对一名其他角色造成一点火属性伤害',
                                            function () {
                                                'step 0';
                                                var bool = game.hasPlayer(function (c) {
                                                    return c != player;
                                                });
                                                if (bool) player.chooseTarget('对一名其他角色造成一火属性伤害', lib.filter.notMe, true);
                                                else event.finish();
                                                ('step 1');
                                                result.targets[0].damage('fire');
                                            },
                                        ],
                                        [
                                            '移动场上一张牌',
                                            function () {
                                                if (player.canMoveCard(true)) player.moveCard(true);
                                            },
                                        ],
                                        [
                                            '弃置一名角色X张牌',
                                            function () {
                                                'step 0';
                                                var bool = game.hasPlayer(function (c) {
                                                    return c != player && c.countCards('he');
                                                });
                                                if (bool)
                                                    player.chooseTarget(
                                                        `弃置一名其他角色至多${get.cnNumber(cards.length)}张牌`,
                                                        function (card, player, target) {
                                                            return target != player && target.countCards('he');
                                                        },
                                                        true
                                                    );
                                                else event.finish();
                                                ('step 1');
                                                player.discardPlayerCard(result.targets[0], 'he', [1, cards.length], true);
                                            },
                                        ],
                                        [
                                            '摸X张牌',
                                            function () {
                                                player.draw(cards.length);
                                            },
                                        ],
                                    ];
                                }
                            },
                            content() {
                                var num = Math.min(cards.length, 3);
                                for (var i = 0; i <= num; i++) {
                                    var next = game.createEvent('genm_meng_yangu', false);
                                    next.player = player;
                                    next.cards = cards;
                                    next.setContent(player.storage[event.name][i][1]);
                                }
                            },
                            ai: {
                                order: 2,
                                result: {
                                    player(player, target) {
                                        return 1;
                                    },
                                },
                            },
                        },
                        genm_meng_kuangao: {
                            usable: 1,
                            audio: 'mbaosi',
                            trigger: {
                                source: 'damageSource',
                                player: 'damageAfter',
                            },
                            usable: 1,//QQQ
                            filter(event, player) {
                                return !event.nature;
                            },
                            content() {
                                'step 0';
                                player.draw(2);
                                var list = [];
                                for (var i = 0; i < player.storage.genm_meng_yangu.length; i++) {
                                    list.push([player.storage.genm_meng_yangu[i][0], `第${get.cnNumber(i + 1)}项:` + player.storage.genm_meng_yangu[i][0]]);
                                }
                                var next = player.chooseButton(['交换其中两项', [list, 'textbutton']]);
                                next.set('forced', true);
                                next.set('selectButton', [1, 2]);
                                ('step 1');
                                var control = result.links,
                                    index1 = control[0],
                                    index2 = control[1],
                                    storage = player.storage.genm_meng_yangu;
                                for (var i of storage) {
                                    if (i[0] == index1) var change1 = i;
                                    else if (i[0] == index2) var change2 = i;
                                }
                                for (var j = 0; j < player.storage.genm_meng_yangu.length; j++) {
                                    if (player.storage.genm_meng_yangu[j][0] == index1) player.storage.genm_meng_yangu[j] = change2;
                                    else if (player.storage.genm_meng_yangu[j][0] == index2) player.storage.genm_meng_yangu[j] = change1;
                                }
                                player.getStat('skill').genm_meng_yangu--;
                            },
                        },
                        genm_meng_sp_huizhu: {
                            usable: 1,
                            subSkill: {
                                damage: {
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    silent: true,
                                    firstDo: true,
                                    filter(event, player) {
                                        return event.source == player.storage.genm_meng_sp_huizhu_target[0];
                                    },
                                    content() {
                                        player.storage[event.name] = true;
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: 1,
                                },
                                remove: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    silent: true,
                                    onremove: ['genm_meng_sp_huizhu', 'genm_meng_sp_huizhu_target'],
                                    content() {
                                        'step 0';
                                        if (player.storage.genm_meng_sp_huizhu_damage) {
                                            player.removeSkill(player.storage.genm_meng_sp_huizhu);
                                            player.removeSkill(event.name);
                                        } else {
                                            player.removeSkill(event.name);
                                        }
                                        ('step 1');
                                        player.removeSkill('genm_meng_sp_huizhu_damage');
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: 1,
                                },
                            },
                            enable: 'phaseUse',
                            filterCard: true,
                            position: 'he',
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            filterTarget(card, player, target) {
                                var names = [];
                                if (target.name && !target.isUnseen(0)) names.add(target.name);
                                if (target.name1 && !target.isUnseen(0)) names.add(target.name1);
                                if (target.name2 && !target.isUnseen(1)) names.add(target.name2);
                                var pss = player.getSkills();
                                for (var i = 0; i < names.length; i++) {
                                    var info = lib.character[names[i]];
                                    if (info) {
                                        var skills = info[3].filter(function (skill) {
                                            var info = get.info(skill);
                                            return info && !info.zhuSkill && !info.hiddenSkill;
                                        });
                                        for (var j = 0; j < skills.length; j++) {
                                            if (lib.translate[skills[j] + '_info'] && lib.skill[skills[j]] && !pss.includes(skills[j])) {
                                                return true;
                                            }
                                        }
                                    }
                                    return false;
                                }
                            },
                            createDialog(player, target, onlylist) {
                                var names = [];
                                var list = [];
                                if (target.name && !target.isUnseen(0)) names.add(target.name);
                                if (target.name1 && !target.isUnseen(0)) names.add(target.name1);
                                if (target.name2 && !target.isUnseen(1)) names.add(target.name2);
                                var pss = player.getSkills();
                                for (var i = 0; i < names.length; i++) {
                                    var info = lib.character[names[i]];
                                    if (info) {
                                        var skills = info[3].filter(function (skill) {
                                            var info = get.info(skill);
                                            return info && !info.zhuSkill && !info.hiddenSkill;
                                        });
                                        for (var j = 0; j < skills.length; j++) {
                                            if (lib.translate[skills[j] + '_info'] && lib.skill[skills[j]] && !pss.includes(skills[j])) {
                                                list.push(skills[j]);
                                            }
                                        }
                                    }
                                }
                                if (onlylist) return list;
                                var dialog = ui.create.dialog('forcebutton');
                                dialog.add('选择获得一项技能');
                                _status.event.list = list;
                                var clickItem = function () {
                                    _status.event._result = this.link;
                                    game.resume();
                                };
                                for (var i = 0; i < list.length; i++) {
                                    if (lib.translate[list[i] + '_info']) {
                                        var translation = get.translation(list[i]);
                                        if (translation[0] == '新' && translation.length == 3) {
                                            translation = translation.slice(1, 3);
                                        } else {
                                            translation = translation.slice(0, 2);
                                        }
                                        var item = dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + translation + '】</div><div>' + lib.translate[`${list[i]}_info`] + '</div></div>');
                                        item.firstChild.addEventListener('click', clickItem);
                                        item.firstChild.link = list[i];
                                    }
                                }
                                dialog.add(ui.create.div('.placeholder'));
                                return dialog;
                            },
                            check(card) {
                                return 5 - get.value(card);
                            },
                            content() {
                                'step 0';
                                event.skillai = function (list) {
                                    return get.max(list, get.skillRank, 'item');
                                };
                                if (event.isMine()) {
                                    event.dialog = lib.skill.genm_meng_sp_huizhu.createDialog(player, target);
                                    event.switchToAuto = function () {
                                        event._result = event.skillai(event.list);
                                        game.resume();
                                    };
                                    _status.imchoosing = true;
                                    game.pause();
                                } else {
                                    event._result = event.skillai(lib.skill.swdtianshu.createDialog(player, target, true));
                                }
                                ('step 1');
                                _status.imchoosing = false;
                                if (event.dialog) {
                                    event.dialog.close();
                                }
                                var link = result;
                                player.addSkill(link);
                                player.markAuto(event.name, link);
                                player.addSkill(event.name + '_remove');
                                player.addSkill(event.name + '_damage');
                                player.popup(link);
                                player.markAuto(event.name + '_target', targets);
                                game.log(player, '获得了技能', `【${get.translation(link)}】`);
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player, target) {
                                        if (player.countCards('h') > player.hp) return 1;
                                        return 0;
                                    },
                                },
                            },
                        },
                        genm_meng_sp_chace: {
                            round: 1,
                            subSkill: {
                                use: {
                                    charlotte: true,
                                    mod: {
                                        targetInRange(card, player) {
                                            if (player == _status.currentPhase) return true;
                                        },
                                    },
                                },
                            },
                            trigger: {
                                global: 'phaseDrawEnd',
                            },
                            filter(event, player) {
                                return player != event.player;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var num = Math.min(trigger.player.countCards('h'), Math.min(5, game.countPlayer()));
                                player.choosePlayerCard(trigger.player, 'h', num, true);
                                ('step 1');
                                event.cards = result.cards;
                                var content = [get.translation(trigger.player) + '的部分手牌', result.cards];
                                game.log(player, '观看了', trigger.player, '的部分手牌');
                                player.chooseControl('ok').set('dialog', content);
                                ('step 2');
                                var bool1 = false,
                                    bool2 = false;
                                if (event.cards) {
                                    if (Array.isArray(event.cards))
                                        for (var i of event.cards) {
                                            var type = get.type2(i),
                                                subtype = get.subtype(i);
                                            if (subtype == 'equip1') bool1 = true;
                                            if (type == 'trick') bool2 = true;
                                        }
                                }
                                if (bool1) player.addTempSkill('genm_meng_sp_chace_use', 'phaseEnd');
                                if (bool2) player.draw(Math.min(5, game.countPlayer()));
                                if (!bool1 && !bool2) {
                                    player.loseHp();
                                }
                            },
                            ai: {
                                threaten: 3,
                            },
                            group: ['genm_meng_sp_chace_roundcount'],
                        },
                        genm_meng_fanghun: {
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
                            },
                            audio: 'fanghun',
                            inherit: 'genm_meng_fanghun',
                            trigger: {
                                player: 'useCard',
                                target: 'useCardToTargeted',
                            },
                            hiddenCard(player, name) {
                                if (!player.storage.fanghun || player.storage.fanghun <= 0) return false;
                                if (name == 'tao') return player.countCards('hs', 'jiu') > 0;
                                if (name == 'jiu') return player.countCards('hs', 'tao') > 0;
                                return false;
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
                            content() {
                                player.addMark('genm_meng_fanghun', trigger.num || 1);
                                player.addMark('genm_meng_fanghun2', trigger.num || 1, false);
                            },
                            group: ['genm_meng_fanghun_sha', 'genm_meng_fanghun_draw'],
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: ['useCardAfter', 'respondAfter'],
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return event.skill == 'genm_meng_fanghun_sha' || event.skill == 'genm_meng_fanghun_shan';
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                                sha: {
                                    audio: 'fanghun',
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
                                    position: 'hs',
                                    check(card) {
                                        var player = _status.event.player;
                                        if (_status.event.type == 'phase') {
                                            var max = 0;
                                            var name2;
                                            var list = ['sha', 'tao', 'jiu'];
                                            var map = { sha: 'shan', tao: 'jiu', jiu: 'tao' };
                                            for (var i = 0; i < list.length; i++) {
                                                var name = list[i];
                                                if (player.countCards('hs', map[name]) > (name == 'jiu' ? 1 : 0) && player.getUseValue({ name: name }) > 0) {
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
                                        if (!player.storage.genm_meng_fanghun || player.storage.genm_meng_fanghun <= 0) return false;
                                        var filter = event.filterCard;
                                        if (filter({ name: 'sha' }, player, event) && player.countCards('hs', 'shan')) return true;
                                        if (filter({ name: 'shan' }, player, event) && player.countCards('hs', 'sha')) return true;
                                        if (filter({ name: 'tao' }, player, event) && player.countCards('hs', 'jiu')) return true;
                                        if (filter({ name: 'jiu' }, player, event) && player.countCards('hs', 'tao')) return true;
                                        return false;
                                    },
                                    onrespond() {
                                        return this.onuse.apply(this, arguments);
                                    },
                                    onuse(result, player) {
                                        player.removeMark('genm_meng_fanghun', 1);
                                    },
                                    ai: {
                                        respondSha: true,
                                        respondShan: true,
                                        skillTagFilter(player, tag) {
                                            if (!player.storage.genm_meng_fanghun || player.storage.genm_meng_fanghun < 0) return false;
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
                                                var list = ['sha', 'tao', 'jiu'];
                                                var map = { sha: 'shan', tao: 'jiu', jiu: 'tao' };
                                                for (var i = 0; i < list.length; i++) {
                                                    var name = list[i];
                                                    if (player.countCards('hs', map[name]) > (name == 'jiu' ? 1 : 0) && player.getUseValue({ name: name }) > 0) {
                                                        var temp = get.order({ name: name });
                                                        if (temp > max) max = temp;
                                                    }
                                                }
                                                if (max > 0) max += player.storage.genm_meng_fuhan || player.storage.genm_meng_fuhan ? 0.3 : -0.3;
                                                return max;
                                            }
                                            if (!player) player = _status.event.player;
                                            return player.storage.genm_meng_fuhan || player.storage.genm_meng_fuhan ? 4 : 1;
                                        },
                                    },
                                },
                            },
                        },
                        genm_meng_fuhan: {
                            audio: 'fuhan',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            limited: true,
                            filter(event, player) {
                                return player.countMark('genm_meng_fanghun') > 0;
                            },
                            content() {
                                'step 0';
                                if (player.storage.genm_meng_fanghun) player.draw(player.storage.genm_meng_fanghun);
                                player.removeMark('genm_meng_fanghun', player.storage.genm_meng_fanghun);
                                player.awakenSkill('genm_meng_fuhan');
                                ('step 1');
                                var list;
                                if (_status.characterlist) {
                                    list = [];
                                    for (var i = 0; i < _status.characterlist.length; i++) {
                                        var name = _status.characterlist[i];
                                        if (lib.character[name][1] == 'shu') list.push(name);
                                        if (lib.character[name][1] == 'wu') list.push(name);
                                        if (lib.character[name][1] == 'wei') list.push(name);
                                        if (lib.character[name][1] == 'qun') list.push(name);
                                        if (lib.character[name][1] == 'jin') list.push(name);
                                        if (lib.character[name][1] == 'shen') list.push(name);
                                    }
                                } else if (_status.connectMode) {
                                    list = get.charactersOL(function (i) {
                                        return lib.character[i][1] != 'shu';
                                    });
                                } else {
                                    list = get.gainableCharacters(function (info) {
                                        return info[1] == 'shu';
                                    });
                                }
                                var players = game.players.concat(game.dead);
                                for (var i of players) {
                                    list.remove(i.name);
                                    list.remove(i.name1);
                                    list.remove(i.name2);
                                }
                                list.remove('zhaoyun');
                                list.remove('re_zhaoyun');
                                list.remove('ol_zhaoyun');
                                list = list.randomGets(Math.max(8, game.countPlayer()));
                                var skills = [];
                                for (var i of list) {
                                    skills.addArray(
                                        (lib.character[i][3] || []).filter(function (skill) {
                                            var info = get.info(skill);
                                            return info && !info.zhuSkill;
                                        })
                                    );
                                }
                                if (!list.length || !skills.length) {
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
                                        skills: skills.randomGets(8),
                                    };
                                    if (event.dialog) event.dialog.close();
                                    if (event.control) event.control.close();
                                };
                                var chooseButton = function (list, skills) {
                                    var event = _status.event;
                                    if (!event._result) event._result = {};
                                    event._result.skills = [];
                                    var rSkill = event._result.skills;
                                    var dialog = ui.create.dialog('请选择获得至多八个技能', [list, 'character'], 'hidden');
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
                                        td.innerHTML = `<span>${get.translation(skills[i])}</span>`;
                                        td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                            if (_status.dragged) return;
                                            if (_status.justdragged) return;
                                            _status.tempNoButton = true;
                                            setTimeout(function () {
                                                _status.tempNoButton = false;
                                            }, 500);
                                            var link = this.link;
                                            if (!this.classList.contains('bluebg')) {
                                                if (rSkill.length >= 8) return;
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
                                ('step 2');
                                var map = event.result || result;
                                if (map && map.skills && map.skills.length) {
                                    for (var i of map.skills) player.addSkillLog(i);
                                } else player.restoreSkill('genm_meng_fuhan');
                                ('step 3');
                                if (player.isMinHp()) player.recover();
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init: (player, skill) => (player.storage[skill] = false),
                        },
                        genm_meng_xiaorui: {
                            subSkill: {
                                limite: {
                                    charlotte: true,
                                    init(player, skill) {
                                        if (!player.storage[skill]) player.storage[skill] = 0;
                                    },
                                },
                            },
                            audio: 'ext:梦之将/audio:2',
                            trigger: {
                                source: 'damageBegin2',
                            },
                            check(event, player) {
                                return get.attitude(event.player, player) < 0;
                            },
                            filter(event, player) {
                                var storage = event.player.storage.genm_meng_xiaorui_limite;
                                return event.player.countGainableCards(player, 'he') && (!event.player.hasSkill('genm_meng_xiaorui_limite') || storage < 2);
                            },
                            logTarget: 'player',
                            //当你对一名角色造成伤害时你可获得其Y张牌,若你获得的牌中没有与你造成伤害的牌同名的牌则你发动一次【缮甲】
                            content() {
                                'step 0';
                                trigger.player.addTempSkill('genm_meng_xiaorui_limite');
                                var storage = trigger.player.storage.genm_meng_xiaorui_limite;
                                trigger.player.storage.genm_meng_xiaorui_limite++;
                                var num = Math.max(trigger.player.getDamagedHp() + 1, 1);
                                player.gainPlayerCard(num, trigger.player, 'he', true);
                                ('step 1');
                                var bool = false;
                                if (trigger.card) {
                                    for (var i of result.links) {
                                        if (i.name != trigger.card.name) {
                                            bool = true;
                                        }
                                    }
                                } //QQQ
                                if (bool) {
                                    var next = game.createEvent('genm_meng_shanjia', false);
                                    next.player = player;
                                    next.setContent(lib.skill.xinshanjia.content);
                                }
                            },
                        },
                        genm_meng_shanjia: {
                            group: ['genm_meng_shanjia_count'],
                            mod: {
                                aiValue(player, card, num) {
                                    if ((player.storage.xinshanjia || 0) < 3 && get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) {
                                        return num / player.hp;
                                    }
                                },
                            },
                            audio: 'shanjia',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            intro: {
                                content: '本局游戏内已失去过#张装备牌',
                            },
                            forced: true,
                            sync(player) {
                                var history = player.actionHistory;
                                var num = 0;
                                for (var i = 0; i < history.length; i++) {
                                    for (var j = 0; j < history[i].lose.length; j++) {
                                        if (history[i].lose[j].parent.name == 'useCard') continue;
                                        num += history[i].lose[j].cards2.filter(function (card) {
                                            return get.type(card, false) == 'equip';
                                        }).length;
                                    }
                                }
                                player.storage.genm_meng_shanjia = num;
                                if (num > 0) player.markSkill('genm_meng_shanjia');
                            },
                            content() {
                                'step 0';
                                player.draw(3);
                                ('step 1');
                                lib.skill.genm_meng_shanjia.sync(player);
                                var num = 3 - player.storage.genm_meng_shanjia;
                                if (num > 0) {
                                    player.chooseToDiscard('he', true, num).ai = get.disvalue;
                                }
                                ('step 2');
                                var bool1 = true,
                                    bool2 = true;
                                if (result.cards?.length) {
                                    var cards = result.cards;
                                    if (Array.isArray(result.cards))
                                        for (var i of result.cards) {
                                            var type = get.type(i, 'trick', i.original == 'h' ? player : false);
                                            if (type == 'basic') bool1 = false;
                                            if (type == 'trick') bool2 = false;
                                        }
                                }
                                if (bool1) player.addTempSkill('genm_meng_shanjia_sha', 'phaseUseAfter');
                                if (bool2) player.addTempSkill('genm_meng_shanjia_nodis', 'phaseUseAfter');
                                if (bool1 && bool2) {
                                    player.chooseUseTarget({ name: 'sha' }, '是否视为使用一张【杀】？', false);
                                }
                            },
                            ai: {
                                threaten: 3,
                                noe: true,
                                reverseOrder: true,
                                skillTagFilter(player) {
                                    if (player.storage.genm_meng_shanjia > 2) return false;
                                },
                                effect: {
                                    target(card, player, target) {
                                        if (player.storage.genm_meng_shanjia < 3 && get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) return [1, 3];
                                    },
                                },
                            },
                            subSkill: {
                                count: {
                                    forced: true,
                                    silent: true,
                                    popup: false,
                                    trigger: {
                                        player: 'loseEnd',
                                    },
                                    filter(event, player) {
                                        return event.cards2 && event.cards2.length;
                                    },
                                    content() {
                                        lib.skill.genm_meng_shanjia.sync(player);
                                    },
                                    _priority: 1,
                                },
                                sha: {
                                    mark: true,
                                    charlotte: true,
                                    intro: {
                                        content: '使用【杀】的次数上限+1',
                                    },
                                    mod: {
                                        cardUsable(card, player, num) {
                                            if (card.name == 'sha') return num + 1;
                                        },
                                    },
                                },
                                nodis: {
                                    mark: true,
                                    charlotte: true,
                                    intro: {
                                        content: '使用牌无距离限制',
                                    },
                                    mod: {
                                        targetInRange: () => true,
                                    },
                                },
                            },
                        },
                        genm_meng_qishe: {
                            audio: 'sbluanji',
                            subSkill: {
                                suits: {
                                    charlotte: true,
                                    mod: {
                                        cardname(card, player, name) {
                                            if (player.getStorage('genm_meng_qishe_suits').includes(card.suit)) return 'wanjian';
                                        },
                                    },
                                },
                            },
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                var num = 1 + player.countMark('genm_meng_mingmen');
                                var prompt = '###' + get.prompt('genm_meng_qishe') + `###弃置${get.cnNumber(num)}种花色的所有牌`;
                                var next = player.chooseButton([prompt, [lib.suit.map((i) => ['', '', 'lukai_' + i]), 'vcard']], num);
                                next.set('filterButton', (button) => {
                                    var player = _status.event.player;
                                    var cards = player.getCards('h', { suit: button.link[2].slice(6) });
                                    return cards.length && cards.filter((card) => lib.filter.cardDiscardable(card, player, 'sbqingzheng')).length == cards.length;
                                });
                                next.set('ai', (button) => {
                                    var player = _status.event.player;
                                    return (
                                        player.countMark('sbjianxiong') * 15 -
                                        player
                                            .getCards('h', { suit: button.link[2].slice(6) })
                                            .map((i) => get.value(i))
                                            .reduce((p, c) => p + c, 0)
                                    );
                                });
                                next.set('custom', {
                                    replace: {
                                        button(button) {
                                            if (!_status.event.isMine()) return;
                                            if (button.classList.contains('selectable') == false) return;
                                            var cards = _status.event.player.getCards('h', { suit: button.link[2].slice(6) });
                                            if (cards.length) {
                                                var chosen = cards.filter((i) => ui.selected.cards.includes(i)).length == cards.length;
                                                if (chosen) {
                                                    ui.selected.cards.removeArray(cards);
                                                    cards.forEach((card) => {
                                                        card.classList.remove('selected');
                                                        card.updateTransform(false);
                                                    });
                                                } else {
                                                    ui.selected.cards.addArray(cards);
                                                    cards.forEach((card) => {
                                                        card.classList.add('selected');
                                                        card.updateTransform(true);
                                                    });
                                                }
                                            }
                                            if (button.classList.contains('selected')) {
                                                ui.selected.buttons.remove(button);
                                                button.classList.remove('selected');
                                                if (_status.multitarget || _status.event.complexSelect) {
                                                    game.uncheck();
                                                    game.check();
                                                }
                                            } else {
                                                button.classList.add('selected');
                                                ui.selected.buttons.add(button);
                                            }
                                            var custom = _status.event.custom;
                                            if (custom && custom.add && custom.add.button) {
                                                custom.add.button();
                                            }
                                            game.check();
                                        },
                                    },
                                    add: next.custom.add,
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.addTempSkill('genm_meng_qishe_suits');
                                    var suits = result.links.map((i) => i[2].slice(6));
                                    player.markAuto('genm_meng_qishe_suits', suits);
                                }
                                ('step 2');
                            },
                        },
                        genm_meng_mingmen: {
                            audio: 'sbxueyi',
                            subSkill: {
                                mh: {
                                    charlotte: true,
                                    mod: {
                                        maxHandCard(player, num) {
                                            return (num += player.countMark('genm_meng_mingmen_mh'));
                                        },
                                    },
                                },
                            },
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            preHidden: true,
                            usable: 1,
                            filter(event, player) {
                                return event.card.isCard;
                            },
                            content() {
                                var num = game.countPlayer();
                                player.draw(num);
                                player.addTempSkill('genm_meng_mingmen_mh');
                                player.addMark(event.name, 1);
                                player.addMark(event.name + '_mh', num, false);
                            },
                        },
                        genm_meng_libo: {
                            mark: true,
                            zhuanhuanji: true,
                            marktext: '☯',
                            intro: {
                                content(storage, player, skill) {
                                    if (player.storage.genm_meng_libo == true) return '当你造成伤害后你选择一名其他角色与其各失去一点体力或弃置一张牌';
                                    return '当你受到一点伤害后/被其他角色弃置牌后,你摸一张牌伤害来源/该角色本轮使用杀的次数-1';
                                },
                            },
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            content() {
                                player.changeZhuanhuanji(event.name);
                            },
                            group: ['genm_meng_libo_1', 'genm_meng_libo_2'],
                            subSkill: {
                                1: {
                                    audio: 'ext:梦之将/audio:2',
                                    trigger: {
                                        player: ['loseAfter', 'damageEnd'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (player.storage.genm_meng_libo) return false;
                                        if (event.name != 'damage') {
                                            var evt = event;
                                            if (event.name == 'lose') {
                                                if (event.type != 'discard') return false;
                                                evt = event.parent;
                                            }
                                            if (evt.notBySelf != true) return false;
                                            var evtx = event.getl(player);
                                            return evtx && evtx.cards2 && evtx.cards2.length;
                                        } else return event.num > 0 && event.source;
                                    },
                                    content() {
                                        'step 0';
                                        var num = trigger.name == 'damage' ? trigger.num : 1;
                                        var target = trigger.name == 'damage' ? trigger.source : trigger.discarder;
                                        player.draw(num);
                                        if (target) {
                                            target.addTempSkill('genm_meng_libo_sha', 'roundStart');
                                            target.addMark('genm_meng_libo_sha', num, false);
                                        } //QQQ
                                    },
                                },
                                2: {
                                    audio: 'ext:梦之将/audio:2',
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.genm_meng_libo == true;
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseTarget('选择一名其他角色你与其各失去一点体力或弃置一张牌', lib.filter.notMe, true);
                                        ('step 1');
                                        var target = result.targets[0];
                                        event.target = target;
                                        if (target.countCards('he') < 1) {
                                            event.goto(3);
                                            target.loseHp();
                                        } else target.chooseBool('是否失去一点体力或点取消随机弃置一张牌');
                                        ('step 2');
                                        if (result.bool) event.target.loseHp();
                                        else event.target.randomDiscard('he');
                                        ('step 3');
                                        if (player.countCards('he') < 1) {
                                            player.loseHp();
                                            event.finish();
                                        } else player.chooseBool('是否失去一点体力或点取消随机弃置一张牌');
                                        ('step 4');
                                        if (result.bool) player.loseHp();
                                        else player.randomDiscard('he');
                                    },
                                },
                                sha: {
                                    mod: {
                                        cardUsable(card, player, num) {
                                            if (player.hasMark('genm_meng_libo_sha') && card.name == 'sha') return (num -= player.countMark('genm_meng_libo_sha'));
                                        },
                                    },
                                },
                            },
                        },
                        genm_meng_chengxiang: {
                            audio: 'chengxiang',
                            group: 'genm_meng_chengxiang_gain',
                            trigger: {
                                player: 'genm_meng_chengxiang_gainEnd',
                            },
                            forced: true,
                            subfrequent: ['gain'],
                            filter(event, player) {
                                return (
                                    event.cards2 &&
                                    event.cards2
                                        .map((card) => {
                                            return card.number;
                                        })
                                        .reduce((sum, num) => {
                                            return (sum += num);
                                        }, 0) == 13
                                );
                            },
                            content() {
                                'step 0';
                                player.link(false);
                                ('step 1');
                                player.turnOver(false);
                            },
                            subSkill: {
                                gain: {
                                    inherit: 'chengxiang',
                                    audio: 'rechengxiang',
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
                                        event.count--;
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
                                            event.name == 'oldchengxiang' ? 12 : 13
                                        );
                                        event.time = get.utc();
                                        game.addVideo('showCards', player, ['称象', get.cardsInfo(event.cards)]);
                                        game.addVideo('delay', null, 2);
                                        ('step 2');
                                        var next = player.chooseButton([0, 4]);
                                        next.set('dialog', event.videoId);
                                        next.set('filterButton', function (button) {
                                            var num = 0;
                                            for (var i = 0; i < ui.selected.buttons.length; i++) {
                                                num += ui.selected.buttons[i].link.number;
                                            }
                                            return num + button.link.number <= _status.event.maxNum;
                                        });
                                        next.set('maxNum', event.name == 'oldchengxiang' ? 12 : 13);
                                        next.set('ai', function (button) {
                                            return get.value(button.link, _status.event.player);
                                        });
                                        ('step 3');
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
                                        ('step 4');
                                        game.broadcastAll('closeDialog', event.videoId);
                                        var cards2 = event.cards2;
                                        player.gain(cards2, 'log', 'gain2');
                                        ('step 5');
                                        if (event.count > 0 && player.hasSkill('genm_meng_chengxiang')) {
                                            player.chooseBool(get.prompt2('genm_meng_chengxiang'));
                                        } else event.finish();
                                        ('step 6');
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
                                                    if (target.hp >= 4) return [1, 2];
                                                    if (target.hp == 3) return [1, 1.5];
                                                    if (target.hp == 2) return [1, 0.5];
                                                }
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        genm_meng_renxin: {
                            trigger: {
                                global: 'damageBegin4',
                            },
                            audio: 'renxin',
                            audioname: ['re_caochong'],
                            filter(event, player) {
                                return (
                                    event.player != player &&
                                    event.player.hp <= player.hp &&
                                    player.countCards('he', function (c) {
                                        return get.type(c) != 'basic';
                                    }) > 0
                                );
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard(
                                    get.prompt('genm_meng_renxin', trigger.player),
                                    `弃置一张非基本牌并将武将牌翻面,防止${get.translation(trigger.player)}受到的伤害`,
                                    function (c) {
                                        return get.type(c) != 'basic';
                                    },
                                    'he'
                                );
                                next.set('ai', function (card) {
                                    var player = _status.event.player;
                                    if (get.attitude(player, _status.event.getTrigger().player) > 3) {
                                        return 11 - get.value(card);
                                    }
                                    return -1;
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.turnOver();
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                trigger.cancel();
                            },
                            ai: {
                                expose: 0.5,
                            },
                        },
                        genm_meng_fuhun: {
                            audio: 'fuhun',
                            group: ['genm_meng_fuhun_damage', 'genm_meng_fuhun_skill'],
                            subSkill: {
                                3: {},
                                damage: {
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    silent: true,
                                    filter(event, player) {
                                        return !player.inRange(event.player);
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: 1,
                                },
                                skill: {
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    forced: true,
                                    silent: true,
                                    filter(event, player) {
                                        if (player.hasSkill('genm_meng_fuhun_3')) return false;
                                        return event.card && event.card.meng_fuhun && player.isPhaseUsing();
                                    },
                                    content() {
                                        player.addTempSkill('genm_meng_wusheng');
                                        player.addTempSkill('sbpaoxiao');
                                        player.addTempSkill('genm_meng_fuhun_3');
                                    },
                                    popup: false,
                                    _priority: 1,
                                },
                            },
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filterCard: true,
                            selectCard: 2,
                            position: 'hs',
                            derivation: ['genm_meng_wusheng', 'sbpaoxiao'],
                            viewAs: {
                                name: 'sha',
                                meng_fuhun: true,
                            },
                            prompt: '将两张手牌当杀使用或打出',
                            viewAsFilter(player) {
                                return player.countCards('hs') > 1;
                            },
                            check(card) {
                                if (_status.event.player.hasSkill('new_rewusheng') && get.color(card) == 'red') return 0;
                                if (_status.event.name == 'chooseToRespond') {
                                    if (card.name == 'sha') return 0;
                                    return 6 - get.useful(card);
                                }
                                if (_status.event.player.countCards('hs') < 4) return 6 - get.useful(card);
                                return 7 - get.useful(card);
                            },
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
                        genm_meng_tongxin: {
                            group: 'genm_meng_tongxin_die',
                            subSkill: {
                                2: {
                                    silent: true,
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha' && event.cards.length == 1;
                                    },
                                    content() {
                                        trigger.baseDamage++;
                                        trigger.directHit.addArray(trigger.targets);
                                        player.removeSkill(event.name);
                                    },
                                    popup: false,
                                    _priority: 1,
                                },
                                die: {
                                    trigger: {
                                        source: 'dieAfter',
                                    },
                                    forced: true,
                                    silent: true,
                                    content() {
                                        player.draw(Math.min(trigger.player.maxHp, 5));
                                    },
                                    popup: false,
                                    _priority: 1,
                                },
                            },
                            mod: {
                                attackRange: (player, num) => (num = 3),
                            },
                            trigger: {
                                player: 'useCardBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && (event.cards.length > 1);
                            },
                            content() {
                                player.draw();
                                player.addSkill('genm_meng_tongxin_2');
                            },
                        },
                        genm_meng_huituo: {
                            audio: 'huituo',
                            audioname: ['re_caorui'],
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
                                player.chooseTarget(get.prompt2('genm_meng_huituo')).set('ai', function (target) {
                                    var player = _status.event.player;
                                    if (get.attitude(player, target) > 0) {
                                        return get.recoverEffect(target, player, player) + 1;
                                    }
                                    return 0;
                                });
                                ('step 2');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    event.count--;
                                    event.target = target;
                                    target.judge(function (card) {
                                        if (target.hp == target.maxHp) {
                                            if (get.color(card) == 'red') return -1;
                                        }
                                        if (get.color(card) == 'red') return 1;
                                        return 0;
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                event.card = result.card;
                                if (result.color) {
                                    if (result.color == 'red') {
                                        if (event.target.hp < event.target.maxHp) event.target.recover();
                                    } else {
                                        event.target.draw(trigger.num);
                                    }
                                }
                                ('step 4');
                                player.gain(event.card, 'gain2');
                                if (event.count > 0) event.goto(1);
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                            },
                        },
                        genm_meng_mingjian: {
                            subSkill: {
                                effect: {
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    content() {
                                        var targets = [player],
                                            storage = player.storage.genm_meng_mingjian_target;
                                        for (var i of game.players) if (storage.includes(i)) targets.push(i);
                                        for (var i of targets) i.draw(trigger.num);
                                    },
                                    charlotte: true,
                                    mark: true,
                                    intro: {
                                        content: '手牌上限+#,出杀次数+#',
                                    },
                                    init(player, skill) {
                                        if (!player.storage[skill]) player.storage[skill] = 0;
                                    },
                                    onremove: ['genm_meng_mingjian_effect', 'genm_meng_mingjian_target'],
                                    mod: {
                                        maxHandcard(player, num) {
                                            return num + player.storage.genm_meng_mingjian_effect;
                                        },
                                        cardUsable(card, player, num) {
                                            if (card.name == 'sha') return num + player.storage.genm_meng_mingjian_effect;
                                        },
                                    },
                                },
                            },
                            audio: 'mingjian',
                            audioname: ['re_caorui'],
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
                                target.addTempSkill('genm_meng_mingjian_effect', { player: 'phaseAfter' });
                                target.storage.genm_meng_mingjian_effect++;
                                target.markAuto('genm_meng_mingjian_target', [player]);
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
                        genm_meng_xingshuai: {
                            audio: 'xingshuai',
                            audioname: ['re_caorui'],
                            trigger: {
                                player: 'dying',
                            },
                            zhuSkill: true,
                            filter(event, player) {
                                if (player.hp > 0) return false;
                                if (!player.hasZhuSkill('genm_meng_xingshuai')) return false;
                                return game.hasPlayer(function (current) {
                                    return current != player && current.group == 'wei';
                                });
                            },
                            init(player) {
                                if (player.hasZhuSkill('genm_meng_xingshuai')) {
                                    player.markSkill('genm_meng_xingshuai');
                                    player.storage.genm_meng_xingshuai = false;
                                }
                            },
                            intro: {
                                content: 'limited',
                            },
                            limited: true,
                            mark: false,
                            content() {
                                'step 0';
                                player.awakenSkill(event.name);
                                var targets = game.filterPlayer();
                                targets.sortBySeat(_status.currentPhase);
                                targets.remove(player);
                                event.targets = targets;
                                event.damages = [];
                                player.addSkill('genm_meng_xingshuai_restore');
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
                                    var next = game.createEvent('genm_meng_xingshuai_next');
                                    event.next.remove(next);
                                    trigger.after.push(next);
                                    next.targets = event.damages;
                                    next.setContent(function () {
                                        targets.shift().damage();
                                        if (targets.length) event.redo();
                                    });
                                }
                            },
                            subSkill: {
                                restore: {
                                    trigger: {
                                        global: 'dieAfter',
                                    },
                                    charlotte: true,
                                    forced: true,
                                    filter(event, player) {
                                        return event.source && event.source.isIn() && event.source.hasSkill('genm_meng_mingjian_effect');
                                    },
                                    content() {
                                        player.restoreSkill('genm_meng_xingshuai');
                                        game.log(player, '重置了', '#g【兴衰】');
                                    },
                                },
                            },
                        },
                        genm_meng_huiji: {
                            group: 'genm_meng_huiji_dying',
                            mod: {
                                maxHandCard(player, num) {
                                    return num + player.maxHp;
                                },
                            },
                            subSkill: {
                                dying: {
                                    trigger: {
                                        player: 'dyingBegin',
                                    },
                                    filter(event, player) {
                                        var skills = player.getSkills(null, false, false).filter((skill) => {
                                            var info = get.info(skill);
                                            if (!info || !player.storage.huiji.includes(skill) || get.skillInfoTranslation(skill, player).length == 0) return false;
                                            return true;
                                        });
                                        return skills.length;
                                    },
                                    forced: true,
                                    clanSkill: true,
                                    content() {
                                        'step 0';
                                        var skills = player.getSkills(null, false, false).filter((skill) => {
                                            var info = get.info(skill);
                                            if (!info || !player.storage.genm_meng_huiji.includes(skill) || get.skillInfoTranslation(skill, player).length == 0) return false;
                                            return true;
                                        });
                                        player
                                            .chooseControl(skills)
                                            .set(
                                                'choiceList',
                                                skills.map((i) => {
                                                    return '<div class="skill">【' + get.translation(lib.translate[`${i}_ab`] || get.translation(i).slice(0, 2)) + `】</div><div>${get.skillInfoTranslation(i, player)}</div>`;
                                                })
                                            )
                                            .set('displayIndex', false)
                                            .set('prompt', '会击:失去其中一个技能')
                                            .set('ai', () => {
                                                var player = _status.event.player,
                                                    choices = _status.event.controls.slice();
                                                var negs = choices.filter((i) => {
                                                    var info = get.info(i);
                                                    if (!info || !info.ai) return false;
                                                    return info.ai.neg || info.ai.halfneg;
                                                });
                                                if (negs.length) return negs.randomGet();
                                                return choices.randomGet();
                                            });
                                        ('step 1');
                                        if (result.control != 'cancel2') {
                                            player.removeSkill(result.control);
                                            player.popup(result.control);
                                            game.log(player, '失去了技能', `#g【${get.translation(result.control)}】`);
                                            player.draw(Math.min(player.maxHp, 20));
                                            player.recover(1 - player.hp);
                                        }
                                    },
                                },
                            },
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = [];
                            },
                            content() {
                                'step 0';
                                'step 1';
                                var list;
                                if (_status.characterlist) {
                                    list = [];
                                    for (var i = 0; i < _status.characterlist.length; i++) {
                                        var name = _status.characterlist[i];
                                        if (lib.character[name][1] == 'wei') list.push(name);
                                    }
                                } else if (_status.connectMode) {
                                    list = get.charactersOL(function (i) {
                                        return lib.character[i][1] != 'wei';
                                    });
                                } else {
                                    list = get.gainableCharacters(function (info) {
                                        return info[1] == 'wei';
                                    });
                                }
                                var players = game.players.concat(game.dead);
                                for (var i of players) {
                                    list.remove(i.name);
                                    list.remove(i.name1);
                                    list.remove(i.name2);
                                }
                                list = list.randomGets(player.maxHp + 1);
                                var skills = [];
                                for (var i of list) {
                                    skills.addArray(lib.character[i][3] || []);
                                }
                                if (!list.length || !skills.length) {
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
                                        skills: skills.randomGets(1), //QQQ
                                    };
                                    if (event.dialog) event.dialog.close();
                                    if (event.control) event.control.close();
                                };
                                var chooseButton = function (list, skills) {
                                    var event = _status.event;
                                    if (!event._result) event._result = {};
                                    event._result.skills = [];
                                    var rSkill = event._result.skills;
                                    var dialog = ui.create.dialog(`请选择获得至多${get.cnNumber(event.player.maxHp)}技能`, [list, 'character'], 'hidden');
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
                                        td.innerHTML = `<span>${get.translation(skills[i])}</span>`;
                                        td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                            if (_status.dragged) return;
                                            if (_status.justdragged) return;
                                            _status.tempNoButton = true;
                                            setTimeout(function () {
                                                _status.tempNoButton = false;
                                            }, 500);
                                            var link = this.link;
                                            if (!this.classList.contains('bluebg')) {
                                                if (rSkill.length >= event.player.maxHp) return;
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
                                ('step 2');
                                var map = event.result || result;
                                if (map && map.skills && map.skills.length) {
                                    for (var i of map.skills) player.addSkillLog(i);
                                }
                                player.storage[event.name].addArray(map.skills);
                            },
                        },
                        genm_meng_zhuoxun: {
                            audio: 'ext:梦之将/audio:2',
                            initList(player) {
                                var list,
                                    skills = [];
                                if (get.mode() == 'guozhan') {
                                    list = [];
                                    for (var i in lib.characterPack.mode_guozhan) list.push(i);
                                } else if (_status.connectMode) list = get.charactersOL();
                                else {
                                    list = [];
                                    for (var i in lib.character) {
                                        if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
                                        list.push(i);
                                    }
                                }
                                for (var i of list) {
                                    if (i.indexOf('gz_jun') == 0) continue;
                                    for (var j of lib.character[i][3]) {
                                        var skill = lib.skill[j];
                                        if (!skill || skill.juexingji || skill.hiddenSkill || skill.zhuSkill || skill.dutySkill || skill.chargeSkill || lib.skill.bolan.banned.includes(j)) continue;
                                        if (skill.init || (skill.ai && (skill.ai.combo || skill.ai.notemp || skill.ai.neg))) continue;
                                        var info = lib.translate[`${j}_info`];
                                        if (info && info.includes('锁定技')) skills.add(j);
                                    }
                                }
                                player.storage.genm_meng_zhuoxun = skills;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) > 0;
                            },
                            trigger: {
                                global: 'phaseJieshuBegin',
                            },
                            forced: true,
                            preHidden: true,
                            content() {
                                'step 0';
                                var list = [];
                                trigger.player.getHistory('useCard', function (evt) {
                                    if (!list.includes(get.type2(evt.card, false))) list.add(get.type2(evt.card, false));
                                });
                                var list2 = [],
                                    cards = [];
                                list2.addArray(list);
                                for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                                    var type = get.type2(ui.cardPile.childNodes[i], false);
                                    if (!list2.includes(type)) {
                                        list2.push(type);
                                        cards.push(ui.cardPile.childNodes[i]);
                                    }
                                }
                                trigger.player.gain(cards, 'gain2');
                                if (list.length >= 3) {
                                    if (player.isIn()) {
                                        if (!player.storage.genm_meng_zhuoxun) lib.skill.genm_meng_zhuoxun.initList(player);
                                        var list = player.storage.genm_meng_zhuoxun.randomGets(3);
                                        if (!list.length) {
                                            event.finish();
                                            return;
                                        }
                                        player
                                            .chooseControl(list)
                                            .set(
                                                'choiceList',
                                                list.map(function (i) {
                                                    return '<div class="skill">【' + get.translation(lib.translate[`${i}_ab`] || get.translation(i).slice(0, 2)) + `】</div><div>${get.skillInfoTranslation(i, player)}</div>`;
                                                })
                                            )
                                            .set('displayIndex', false)
                                            .set('prompt', `卓勋:选择一项技能令${get.translation(trigger.player)}获得`)
                                            .set('ai', () => {
                                                var list = _status.event.controls.slice();
                                                return list.sort((a, b) => {
                                                    return get.skillRank(b, 'in') - get.skillRank(a, 'in');
                                                })[0];
                                            });
                                    } else event.finish();
                                } else event.finish();
                                ('step 1');
                                trigger.player.addTempSkill(result.control, 'phaseJieshuBefore');
                                trigger.player.popup(result.control);
                                game.log(trigger.player, '获得了', `#g【${get.translation(result.control)}】`);
                            },
                        },
                        genm_tianren: {
                            audio: 'tianren',
                            trigger: {
                                global: ['loseAfter', 'cardsDiscardAfter', 'loseAsyncAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.name.indexOf('lose') == 0) {
                                    if (event.getlx === false || event.position != ui.discardPile) return false;
                                } else {
                                    var evt = event.parent;
                                    if (evt.relatedEvent && evt.relatedEvent.name == 'useCard') return false;
                                }
                                for (var i of event.cards) {
                                    var owner = false;
                                    if (event.hs && event.hs.includes(i)) owner = event.player;
                                    var type = get.type(i, null, owner);
                                    if (type == 'basic' || type == 'trick') return true;
                                }
                                return false;
                            },
                            content() {
                                var num = 0;
                                for (var i of trigger.cards) {
                                    var owner = false;
                                    if (trigger.hs && trigger.hs.includes(i)) owner = trigger.player;
                                    var type = get.type(i, null, owner);
                                    if (type == 'basic' || type == 'trick') num++;
                                }
                                player.addMark('genm_tianren', num);
                            },
                            group: 'genm_tianren_maxHp',
                            intro: {
                                content: 'mark',
                            },
                            subSkill: {
                                maxHp: {
                                    trigger: {
                                        player: ['genm_tianrenAfter', 'gainMaxHpAfter', 'loseMaxHpAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countMark('genm_tianren') >= player.maxHp;
                                    },
                                    content() {
                                        player.removeMark('genm_tianren', player.maxHp);
                                        player.gainMaxHp();
                                        player.recover();
                                        player.draw(2);
                                    },
                                },
                            },
                        },
                        genm_pingxiang: {
                            audio: 'pingxiang',
                            enable: 'phaseUse',
                            limited: true,
                            filter(event, player) {
                                return player.maxHp > 9;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('genm_pingxiang');
                                player.loseMaxHp(9);
                                event.num = 0;
                                ('step 1');
                                event.num++;
                                player.chooseUseTarget(
                                    {
                                        name: 'sha',
                                        nature: 'fire',
                                    },
                                    '请选择火【杀】的目标(' + (event.num == 9 ? '⑨' : event.num) + '/9)',
                                    false
                                );
                                ('step 2');
                                if (result.bool && event.num < 9) event.goto(1);
                                else {
                                    player.removeSkill('jiufa');
                                    player.addSkill('genm_pingxiang_effect');
                                    ('step 3');
                                    player.addSkill('benghuai');
                                    player.addSkill('kunfen');
                                    player.addSkill('zhaxiang');
                                    player.addSkill('oltiaoxin');
                                    player.addSkill('genm_zhuri');
                                    player.addSkill('weizhong');
                                    player.addSkill('reguanxing');
                                    player.awakenSkill(event.name);
                                    player.storage[event.name] = true;
                                }
                            },
                            ai: {
                                order() {
                                    return get.order({
                                        name: 'sha',
                                        nature: 'fire',
                                    });
                                },
                                result: {
                                    player(player) {
                                        if (
                                            player.hasValueTarget({
                                                name: 'sha',
                                                nature: 'fire',
                                            })
                                        )
                                            return 1;
                                        return 0;
                                    },
                                },
                            },
                            subSkill: {
                                effect: {
                                    marktext: '襄',
                                    intro: {
                                        content: '手牌上限基数改为体力上限',
                                    },
                                    mod: {
                                        maxHandcardBase(player) {
                                            return player.maxHp;
                                        },
                                    },
                                },
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init: (player, skill) => (player.storage[skill] = false),
                        },
                        九伐: {
                            audio: 'ext:梦之将/audio:2',
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.jiufa_counted && player.getStorage('jiufa').length >= 9;
                            },
                            content() {
                                'step 0';
                                player.unmarkSkill('jiufa');
                                event.cards = get.cards(9);
                                event.cards.sort(function (a, b) {
                                    return b.number - a.number;
                                });
                                game.cardsGotoOrdering(event.cards);
                                event.videoId = lib.status.videoId++;
                                game.broadcastAll(
                                    function (player, id, cards) {
                                        var str;
                                        if (player == game.me && !_status.auto) {
                                            str = '九伐:选择任意张点数满足条件的牌';
                                        } else {
                                            str = '九伐';
                                        }
                                        var dialog = ui.create.dialog(str, cards);
                                        dialog.videoId = id;
                                    },
                                    player,
                                    event.videoId,
                                    event.cards
                                );
                                event.time = get.utc();
                                game.addVideo('showCards', player, ['涉猎', get.cardsInfo(event.cards)]);
                                game.addVideo('delay', null, 2);
                                ('step 1');
                                var next = player.chooseButton([0, 9], true);
                                next.set('dialog', event.videoId);
                                next.set('filterButton', function (button) {
                                    var num = button.link.number,
                                        cards = _status.event.parent.cards;
                                    for (var i of ui.selected.buttons) {
                                        if (i.link.number == num) return false;
                                    }
                                    for (var i of cards) {
                                        if (i != button.link && i.number == num) return true;
                                    }
                                    return false;
                                });
                                next.set('ai', function (button) {
                                    return get.value(button.link, _status.event.player);
                                });
                                ('step 2');
                                if (result.links?.length) {
                                    event.cards2 = result.links;
                                }
                                var time = 1000 - (get.utc() - event.time);
                                if (time > 0) {
                                }
                                ('step 3');
                                game.broadcastAll('closeDialog', event.videoId);
                                var cards2 = event.cards2;
                                if (cards2 && cards2.length) player.gain(cards2, 'log', 'gain2');
                            },
                            marktext: '九伐',
                            intro: {
                                content: '已记录牌名:$',
                            },
                            group: 'jiufa_count',
                            subSkill: {
                                count: {
                                    trigger: {
                                        player: 'useCard1',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    popup: false,
                                    firstDo: true,
                                    filter(event, player) {
                                        return !player.getStorage('jiufa').includes(event.card.name);
                                    },
                                    content() {
                                        trigger.jiufa_counted = true;
                                        player.markAuto('jiufa', [trigger.card.name]);
                                    },
                                },
                            },
                        },
                        genm_zhuri: {
                            audio: 'ext:梦之将/audio:2',
                            trigger: {
                                player: ['phaseZhunbeiEnd', 'phaseJudgeEnd', 'phaseDrawEnd', 'phaseUseEnd', 'phaseDiscardEnd', 'phaseJieshuEnd'],
                            },
                            filter(event, player) {
                                if (player.hasSkill('genm_zhuri_block')) return false;
                                if (!game.hasPlayer((target) => player.canCompare(target))) return false;
                                return player.getHistory('gain', (evt) => evt.getParent(event.name) == event).length + player.getHistory('lose', (evt) => evt.getParent(event.name) == event).length;
                            },
                            forced: true,
                            async content(event, map) {
                                var player = map.player;
                                var trigger = map.trigger;
                                var result = await player
                                    .chooseTarget(get.prompt('genm_zhuri'), '与一名角色进行拼点,若你赢,你可以使用其中的一张拼点牌;若你没赢,你失去1点体力或令此技能于本回合失效', (card, player, target) => {
                                        return player.canCompare(target);
                                    })
                                    .set('ai', (target) => {
                                        var player = _status.event.player;
                                        var ts = target.getCards('h').sort((a, b) => a.number - b.number);
                                        if (get.attitude(player, target) < 0) {
                                            if (get.effect(player, { name: 'losehp' }, player, player) > 0) return Math.random() * 0.8;
                                            var hs = player.getCards('h').sort((a, b) => b.number - a.number);
                                            var ts = target.getCards('h').sort((a, b) => b.number - a.number);
                                            if (get.value(hs[0]) > 6) return 0;
                                            if (hs[0].number > ts[0].number) return 1;
                                            return Math.random() + 0.2;
                                        }
                                        return 0;
                                    });
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    var result2 = await player.chooseToCompare(target);
                                    if (result2.bool) {
                                        var cards = [result2.player, result2.target].filterInD('d');
                                        cards = cards.filter((card) => player.hasUseTarget(card));
                                        if (cards.length) {
                                            var result3 = await player.chooseButton(['是否使用其中的牌？', cards]).set('ai', (button) => _status.event.player.getUseValue(button.link));
                                            if (result3.bool) {
                                                var card = result3.links[0];
                                                player.$gain2(card, false);
                                                player.chooseUseTarget(true, card, false);
                                            }
                                        }
                                    } else {
                                        var list = lib.skill.genm_ranji.getList(trigger);
                                        var result3 = await player
                                            .chooseControl('失去体力', '技能失效')
                                            .set('prompt', '逐日:失去1点体力,或令此技能于本回合失效')
                                            .set('ai', () => {
                                                var player = _status.event.player;
                                                if (player.getHp > 2) {
                                                    var list = _status.event.list;
                                                    list.removeArray(player.skipList);
                                                    if (list.includes('phaseDraw') || list.includes('phaseUse')) return '失去体力';
                                                }
                                                if (get.effect(player, { name: 'losehp' }, player, player) > 0) return '失去体力';
                                                return '技能失效';
                                            })
                                            .set('list', list.slice(trigger.parent.num, list.length));
                                        player[result3.control == '失去体力' ? 'loseHp' : 'addTempSkill'](result3.control == '失去体力' ? 1 : 'genm_zhuri_block');
                                    }
                                }
                            },
                            subSkill: {
                                block: {
                                    charlotte: true,
                                    mark: true,
                                    marktext: '<span style="text-decoration: line-through;">日</span>',
                                    intro: {
                                        content: '追不动太阳了',
                                    },
                                },
                            },
                        },
                        genm_ranji: {
                            audio: 'ext:梦之将/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            prompt2(event, player) {
                                var str = '获得技能';
                                var num = lib.skill.genm_ranji.getNum(event, player);
                                if (num >= player.getHp()) str += '【困奋】';
                                if (num == player.getHp()) str += '和';
                                if (num <= player.getHp()) str += '【诈降】';
                                str += ',';
                                var num1 = player.countCards('h') - player.getHandcardLimit();
                                if (num1 || player.isDamaged()) {
                                    if (num1) str += num1 < 0 ? `摸${get.cnNumber(-num1)}张牌` : `弃置${get.cnNumber(num1)}张牌`;
                                    if (num1 && player.isDamaged()) str += '或';
                                    if (player.isDamaged()) str += `回复${player.getDamagedHp()}点体力`;
                                    str += ',最后';
                                }
                                str += '你不能回复体力直到你击杀角色.';
                                return str;
                            },
                            check(event, player) {
                                var num = lib.skill.genm_ranji.getNum(event, player);
                                if (num == player.getHp()) return true;
                                return player.getHandcardLimit() - player.countCards('h') >= 3 && player.getDamagedHp() >= 2;
                            },
                            async content(event, map) {
                                var player = map.player;
                                var trigger = map.trigger;
                                player.awakenSkill('genm_ranji');
                                var num = lib.skill.mxranji.getNum(trigger, player);
                                if (num >= player.getHp()) player.addSkillLog('kunfen');
                                if (num <= player.getHp()) player.addSkillLog('zhaxiang');
                                if (player.countCards('h') != player.getHandcardLimit() || player.isDamaged()) {
                                    var result,
                                        num1 = player.countCards('h') - player.getHandcardLimit();
                                    if (!num1) result = { index: 1 };
                                    else if (player.isHealthy()) result = { index: 0 };
                                    else {
                                        result = await player
                                            .chooseControl('手牌数', '体力值')
                                            .set('choiceList', [num1 < 0 ? `摸${get.cnNumber(-num1)}张牌` : `弃置${get.cnNumber(num1)}张牌`, `回复${player.getDamagedHp()}点体力`])
                                            .set('ai', () => {
                                                var player = _status.event.player;
                                                var list = _status.event.list;
                                                var num1 = get.effect(player, { name: 'wuzhong' }, player, player) / 2;
                                                var num2 = get.recoverEffect(player, player, player);
                                                return num1 * list[0] > num2 * list[1] ? 0 : 1;
                                            })
                                            .set('list', [-num1, player.getDamagedHp()]);
                                    }
                                    if (result.index == 0) {
                                        if (num1 < 0) player.drawTo(player.getHandcardLimit());
                                        else player.chooseToDiscard(num1, 'h', true);
                                    } else {
                                        player.hp = player.maxHp;
                                    }
                                }
                                player.when('genm_ranjiAfter').then(() => player.addSkill('genm_ranji_norecover'));
                                player.when({ source: 'dieAfter' }).then(() => player.removeSkill('genm_ranji_norecover'));
                            },
                            derivation: ['kunfen', 'zhaxiang'],
                            getList(event) {
                                return event.parent.phaseList.map((list) => list.split('|')[0]);
                            },
                            getNum(event, player) {
                                return lib.skill.genm_ranji
                                    .getList(event)
                                    .slice(0, event.parent.num)
                                    .filter((name) => player.getHistory('useCard', (evt) => evt.getParent(name).name == name).length).length;
                            },
                            subSkill: {
                                norecover: {
                                    charlotte: true,
                                    mark: true,
                                    intro: {
                                        content: '不能回复体力',
                                    },
                                    trigger: {
                                        player: 'recoverBefore',
                                    },
                                    forced: true,
                                    firstDo: true,
                                    content() {
                                        trigger.cancel();
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target) {
                                                if (get.tag(card, 'recover')) return 'zeroplayertarget';
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        genm_baodao: {
                            audio: 'ext:梦之将/audio:2',
                            audioname: ['re_sp_zhugeliang', 'ol_sp_zhugeliang', 'ol_pangtong'],
                            group: ['baodao_gudingdao'],
                        },
                        genm_pojun: {
                            inherit: 'genm_pojun',
                            group: 'genm_pojun_damage',
                            subSkill: {
                                damage: {
                                    audio: 'repojun',
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    forced: true,
                                    logTarget: 'player',
                                    filter(event, player) {
                                        var target = event.player;
                                        return event.parent.name == 'sha' && player.countCards('h') >= target.countCards('h') && player.countCards('e') >= target.countCards('e');
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                },
                            },
                            shaRelated: true,
                            audio: 'repojun',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.target.hp > 0 && event.target.countCards('he');
                            },
                            content() {
                                'step 0';
                                var next = player.choosePlayerCard(trigger.target, 'he', [1, Math.min(trigger.target.hp, trigger.target.countCards('he'))], get.prompt(event.name, trigger.target));
                                next.set('ai', function (button) {
                                    if (!_status.event.goon) return 0;
                                    var val = get.value(button.link);
                                    if (_status.event.target.getEquips(2).some((i) => i == button.link)) return 2 * (val + 3);
                                    return val;
                                });
                                next.set('goon', get.attitude(player, trigger.target) <= 0);
                                next.set('forceAuto', true);
                                ('step 1');
                                if (result.cards?.length) {
                                    event.cards = result.cards;
                                    var target = trigger.target;
                                    target.addToExpansion(result.cards, 'giveAuto', target).gaintag.add('genm_pojun'); //QQQ
                                } else event.finish();
                                ('step 2');
                                var discard = false,
                                    shan = 0;
                                for (var i of cards) {
                                    var type = get.type2(i);
                                    if (type == 'equip') discard = true;
                                    if (i.name == 'shan') shan++;
                                }
                                if (discard) {
                                    event.equip = true;
                                    player
                                        .chooseButton(
                                            [
                                                '选择一张装备牌置入弃牌堆',
                                                cards.filter(function (card) {
                                                    return get.type(card) == 'equip';
                                                }),
                                            ],
                                            true
                                        )
                                        .set('ai', function (button) {
                                            return get.value(button.link, _status.event.getTrigger().target);
                                        });
                                }
                                if (shan > 0) event.draw = shan;
                                ('step 3');
                                if (event.equip && result.links && result.links.length) {
                                    trigger.target.loseToDiscardpile(result.links);
                                }
                                if (event.draw) player.draw(event.draw);
                            },
                            ai: {
                                unequip: true,
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if (get.attitude(player, arg.target) > 0) return false;
                                    if (tag == 'directHit_ai') return arg.target.hp >= Math.max(1, arg.target.countCards('h') - 1);
                                    if (arg && arg.name == 'sha' && arg.target.getEquips(2).length) return true;
                                    return false;
                                },
                            },
                        },
                        baodao_gudingdao: {
                            audio: 'bazhen',
                            audioname: ['re_sp_zhugeliang', 'ol_sp_zhugeliang', 'ol_pangtong'],
                            equipSkill: true,
                            noHidden: true,
                            inherit: 'guding_skill',
                            content() {
                                trigger.num++;
                            },
                            trigger: {
                                source: 'damageBegin1',
                            },
                            filter(event, player) {
                                if (event.parent.name == '_lianhuan' || event.parent.name == '_lianhuan2') return false;
                                if (event.card && event.card.name == 'sha') {
                                    if (event.player.countCards('h') == 0) return true;
                                }
                                return false;
                            },
                            forced: true,
                            ai: {
                                effect: {
                                    player(card, player, target, current, isLink) {
                                        if (
                                            card.name == 'sha' &&
                                            !isLink &&
                                            target.countCards('h') == 0 &&
                                            !target.hasSkillTag('filterDamage', null, {
                                                player: player,
                                                card: card,
                                            })
                                        )
                                            return [1, 0, 1, -3];
                                    },
                                },
                            },
                            _priority: -25,
                        },
                        baodao_zhuge: {
                            audio: 'xinfu_jingxie',
                            audioname: ['re_sp_zhugeliang', 'ol_sp_zhugeliang', 'ol_pangtong'],
                            equipSkill: true,
                            noHidden: true,
                            inherit: 'zhuge_skill',
                            content() {
                                trigger.num++;
                            },
                            trigger: {
                                source: 'damageBegin1',
                            },
                            filter(event, player) {
                                if (event.parent.name == '_lianhuan' || event.parent.name == '_lianhuan2') return false;
                                if (event.card && event.card.name == 'sha') {
                                    if (event.player.countCards('h') == 0) return true;
                                }
                                return false;
                            },
                            forced: true,
                            ai: {
                                effect: {
                                    player(card, player, target, current, isLink) {
                                        if (
                                            card.name == 'sha' &&
                                            !isLink &&
                                            target.countCards('h') == 0 &&
                                            !target.hasSkillTag('filterDamage', null, {
                                                player: player,
                                                card: card,
                                            })
                                        )
                                            return [1, 0, 1, -3];
                                    },
                                },
                            },
                            _priority: -25,
                            firstDo: true,
                            mod: {
                                cardUsable(card, player, num) {
                                    var cards = player.getEquips('zhuge');
                                    if (card.name == 'sha') {
                                        if (!cards.length || player.hasSkill('zhuge_skill', null, false) || cards.some((card) => card != _status.zhuge_temp && !ui.selected.cards.includes(card))) {
                                            if (get.is.versus() || get.is.changban()) {
                                                return num + 3;
                                            }
                                            return Infinity;
                                        }
                                    }
                                },
                                cardEnabled2(card, player) {
                                    if (!_status.event.addCount_extra || player.hasSkill('zhuge_skill', null, false)) return;
                                    var cards = player.getEquips('zhuge');
                                    if (card && cards.includes(card)) {
                                        try {
                                            var cardz = get.card();
                                        } catch (e) {
                                            return;
                                        }
                                        if (!cardz || cardz.name != 'sha') return;
                                        _status.zhuge_temp = card;
                                        var bool = lib.filter.cardUsable({ name: 'sha' }, player);
                                        delete _status.zhuge_temp;
                                        if (!bool) return false;
                                    }
                                },
                            },
                        },
                        genm_meng_jiang: {
                            audio: 'jiang',
                            trigger: {
                                player: 'useCardToPlayered',
                                target: 'useCardToTargeted',
                            },
                            shaRelated: true,
                            filter(event, player) {
                                if (!(event.card.name == 'juedou' || (event.card.name == 'sha' && get.color(event.card) == 'red'))) return false;
                                return true;
                            },
                            forced: true,
                            group: ['sbjiang_add', 'sbjiang_qiben'],
                            content() {
                                player.draw();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (card.name == 'sha' && get.color(card) == 'red') return [1, 0.6];
                                    },
                                    player(card, player, target) {
                                        if (card.name == 'sha' && get.color(card) == 'red') return [1, 1];
                                    },
                                },
                            },
                            subSkill: {
                                add: {
                                    audio: 'sbjiang',
                                    trigger: {
                                        player: 'useCard2',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.card.name != 'juedou') return false;
                                        var info = get.info(event.card);
                                        if (info.allowMultiple == false) return false;
                                        if (event.targets && !info.multitarget) {
                                            if (
                                                game.hasPlayer(function (current) {
                                                    return !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, player, current) && lib.filter.targetInRange(event.card, player, current);
                                                })
                                            ) {
                                                return true;
                                            }
                                        }
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        var prompt2 = `为${get.translation(trigger.card)}额外指定一个目标,失去1点体力`;
                                        player
                                            .chooseTarget(get.prompt('sbjiang_add'), function (card, player, target) {
                                                var player = _status.event.player;
                                                if (_status.event.targets.includes(target)) return false;
                                                return lib.filter.targetEnabled2(_status.event.card, player, target);
                                            })
                                            .set('prompt2', prompt2)
                                            .set('ai', function (target) {
                                                var trigger = _status.event.getTrigger();
                                                var player = _status.event.player;
                                                var eff = get.effect(target, trigger.card, player, player);
                                                if (player.hasZhuSkill('sbzhiba') && !player.hasMark('sbjiang')) return eff;
                                                if (eff + get.effect(player, { name: 'losehp' }, player) / 8 > 0) return eff;
                                                return 0;
                                            })
                                            .set('targets', trigger.targets)
                                            .set('card', trigger.card);
                                        ('step 1');
                                        if (result.targets?.length) {
                                            event.targets = result.targets;
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        if (event.targets) {
                                            trigger.targets.addArray(event.targets);
                                            player.loseHp();
                                        }
                                    },
                                },
                                qiben: {
                                    audio: 'sbjiang',
                                    enable: 'phaseUse',
                                    viewAs: {
                                        name: 'juedou',
                                    },
                                    filterCard: true,
                                    position: 'h',
                                    selectCard: -1,
                                    prompt() {
                                        var player = _status.event.player;
                                        var limit = player.hasMark('sbjiang')
                                            ? game.countPlayer((current) => {
                                                return current.group == 'wu' && current != player;
                                            }) + 1
                                            : 1;
                                        return `出牌阶段限${get.cnNumber(limit)}次.你可以将所有手牌当【决斗】使用`;
                                    },
                                    filter(event, player) {
                                        var limit = player.hasMark('sbjiang')
                                            ? game.countPlayer((current) => {
                                                return current.group == 'wu' && current != player;
                                            }) + 1
                                            : 1;
                                        if ((player.getStat('skill').sbjiang_qiben || 0) >= limit) return false;
                                        var hs = player.getCards('h');
                                        if (!hs.length) return false;
                                        for (var i = 0; i < hs.length; i++) {
                                            var mod2 = game.checkMod(hs[i], player, 'unchanged', 'cardEnabled2', player);
                                            if (mod2 === false) return false;
                                        }
                                        return event.filterCard({ name: 'juedou' }, player);
                                    },
                                    ai: {
                                        order: 0.001,
                                        skillTagFilter(player, tag, arg) {
                                            if (tag == 'usetao') {
                                                let limit = player.hasMark('sbjiang')
                                                    ? game.countPlayer((current) => {
                                                        return current.group == 'wu' && current != player;
                                                    }) + 1
                                                    : 1;
                                                return player.isPhaseUsing() && (player.getStat('skill').sbjiang_qiben || 0) < limit && player.hasCard((card) => card.name != 'tao', 'h');
                                            }
                                        },
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
                                                )
                                                    return 0;
                                                if (get.damageEffect(target, player, target) > 0 && get.attitude(player, target) > 0) return 0;
                                                var hs1 = target.countCards('hs', 'sha');
                                                var hs2 = player.countCards('hs', 'sha');
                                                if (hs1 > hs2 + 1) {
                                                    return -2;
                                                }
                                                if (player.hp == 1 && hs2 == 0 && hs1 >= 1) {
                                                    return -2;
                                                }
                                                var hsx1 = target.countCards('hs');
                                                var hsx2 = player.countCards('hs');
                                                if (hsx1.length == 0) {
                                                    return 0;
                                                }
                                                if (hsx1 > 3 && hs2 == 0) {
                                                    return -2;
                                                }
                                                if (hs2 >= 3 && hsx1 <= hsx2) {
                                                    return 0;
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
                                },
                            },
                        },
                        baoshen_pojun: {
                            shaRelated: true,
                            audio: 'ext:梦之将/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.target.hp > 0 && event.target.countCards('he') > 0;
                            },
                            content() {
                                player.gain(trigger.target.getCards('h'));
                            },
                            ai: {
                                unequip: true,
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if (get.attitude(player, arg.target) > 0) return false;
                                    if (tag == 'directHit_ai') return arg.target.hp >= Math.max(1, arg.target.countCards('h') - 1);
                                    if (arg && arg.name == 'sha' && arg.target.getEquip(2)) return true;
                                    return false;
                                },
                            },
                            group: 'repojun3',
                        },
                        genm_shencai: {
                            audio: 'shencai',
                            usable: null,
                            enable: 'phaseUse',
                            filter(event, player) {
                                var count = player.getStat('skill').genm_shencai;
                                if (count && count > player.countMark('genm_shencai')) return false;
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            prompt: '选择一名其他角色进行地狱审判',
                            content() {
                                var next = target.judge();
                                next.callback = lib.skill.genm_shencai.contentx;
                            },
                            ai: {
                                order: 8,
                                result: {
                                    target: -1,
                                },
                            },
                            contentx() {
                                var card = event.judgeResult.card;
                                var player = event.getParent(2).player;
                                var target = event.getParent(2).target;
                                if (get.position(card, true) == 'o') player.gain(card, 'gain2');
                                var list = [],
                                    str = lib.skill.genm_shencai.getStr(card);
                                for (var i in lib.skill.genm_shencai.filterx) {
                                    if (str.includes(lib.skill.genm_shencai.filterx[i])) list.push('genm_shencai_' + i);
                                }
                                if (list.length) {
                                    if (target.isIn()) {
                                        for (var i of list) {
                                            target.addSkill(i);
                                            target.addMark(i, 1);
                                        }
                                    }
                                } else if (target.isIn()) {
                                    player.gainPlayerCard(target, true, 'hej');
                                    target.addMark('genm_shencai_death', 1);
                                    target.addSkill('genm_shencai_death');
                                }
                            },
                            filterx: {
                                losehp: '体力',
                                weapon: '武器',
                                respond: '打出',
                                distance: '距离',
                            },
                            getStr(node) {
                                var str = '',
                                    name = node.name;
                                if (lib.translate[`${name}_info`]) {
                                    if (lib.card[name].type && lib.translate[lib.card[name].type]) str += `${get.translation(lib.card[name].type)}牌|`;
                                    if (get.subtype(name)) {
                                        str += `${get.translation(get.subtype(name))}|`;
                                    }
                                    if (lib.card[name] && lib.card[name].addinfomenu) {
                                        str += `${lib.card[name].addinfomenu}|`;
                                    }
                                    if (get.subtype(name) == 'equip1') {
                                        var added = false;
                                        if (lib.card[node.name] && lib.card[node.name].distance) {
                                            var dist = lib.card[node.name].distance;
                                            if (dist.attackFrom) {
                                                added = true;
                                                str += `攻击范围:${-dist.attackFrom + 1}|`;
                                            }
                                        }
                                        if (!added) {
                                            str += '攻击范围:1|';
                                        }
                                    }
                                }
                                if (lib.card[name].cardPrompt) {
                                    str += `${lib.card[name].cardPrompt(node)}|`;
                                } else if (lib.translate[`${name}_info`]) {
                                    str += '' + lib.translate[`${name}_info`] + '|';
                                }
                                if (get.is.yingbianConditional(node)) {
                                    const yingbianEffects = get.yingbianEffects(node);
                                    if (!yingbianEffects.length) {
                                        const defaultYingbianEffect = get.defaultYingbianEffect(node);
                                        if (lib.yingbian.prompt.has(defaultYingbianEffect)) yingbianEffects.push(defaultYingbianEffect);
                                    }
                                    if (yingbianEffects.length) str += `应变:${yingbianEffects.map((value) => lib.yingbian.prompt.get(value)).join(';')}|`;
                                }
                                return str;
                            },
                            subSkill: {
                                losehp: {
                                    charlotte: true,
                                    marktext: '笞',
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    forced: true,
                                    content() {
                                        player.loseHp(trigger.num);
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.tag(card, 'damage') && current < 0) return 1.6;
                                            },
                                        },
                                    },
                                    intro: {
                                        name: '神裁 - 体力',
                                        name2: '笞',
                                        content: '锁定技.当你受到伤害后,你失去等量的体力.',
                                    },
                                },
                                weapon: {
                                    charlotte: true,
                                    marktext: '杖',
                                    trigger: {
                                        target: 'useCardToTargeted',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha';
                                    },
                                    content() {
                                        trigger.directHit.add(player);
                                        game.log(player, '不可响应', trigger.card);
                                    },
                                    intro: {
                                        name: '神裁 - 武器',
                                        name2: '杖',
                                        content: '锁定技.当你成为【杀】的目标后,你不能使用牌响应此【杀】.',
                                    },
                                    global: 'genm_shencai_weapon_ai',
                                },
                                ai: {
                                    ai: {
                                        directHit_ai: true,
                                        skillTagFilter(player, tag, arg) {
                                            if (!arg || !arg.card || arg.card.name != 'sha') return false;
                                            if (!arg.target || !arg.target.hasSkill('genm_shencai_weapon')) return false;
                                            return true;
                                        },
                                    },
                                },
                                respond: {
                                    charlotte: true,
                                    marktext: '徒',
                                    trigger: {
                                        player: 'loseAfter',
                                        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (
                                            !player.hasCard(function (card) {
                                                return lib.filter.cardDiscardable(card, player, 'genm_shencai_respond');
                                            }, 'h')
                                        )
                                            return false;
                                        var evt = event.getParent('genm_shencai_respond');
                                        if (evt && evt.player == player) return false;
                                        evt = event.getl(player);
                                        return evt && evt.hs && evt.hs.length;
                                    },
                                    content() {
                                        var cards = player.getCards('h', function (card) {
                                            return lib.filter.cardDiscardable(card, player, 'genm_shencai_respond');
                                        });
                                        if (cards.length) player.discard(cards.randomGet());
                                    },
                                    intro: {
                                        name: '神裁 - 打出',
                                        name2: '徒',
                                        content: '锁定技.当你失去手牌后,你随机弃置一张手牌(不嵌套触发).',
                                    },
                                },
                                distance: {
                                    charlotte: true,
                                    marktext: '流',
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    content() {
                                        player.turnOver();
                                    },
                                    intro: {
                                        name: '神裁 - 距离',
                                        name2: '流',
                                        content: '锁定技.结束阶段开始时,你翻面.',
                                    },
                                },
                                death: {
                                    charlotte: true,
                                    marktext: '死',
                                    mod: {
                                        maxHandcard(player, num) {
                                            return num - player.countMark('genm_shencai_death');
                                        },
                                    },
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countMark('genm_shencai_death') > game.countPlayer();
                                    },
                                    content() {
                                        player.die();
                                    },
                                    intro: {
                                        name: '神裁 - 死',
                                        name2: '死',
                                        content: '锁定技.你的角色手牌上限-#;回合结束时,若场上存活人数小于#,则你死亡.',
                                    },
                                },
                            },
                            intro: {
                                markcount: (storage, player) => player.countMark('genm_shencai') + 1,
                                content: (storage, player) => '当前最大发动次数:' + (player.countMark('genm_shencai') + 1),
                            },
                            init: (player) => player.markSkill('genm_shencai'),
                        },
                        genm_xunshi: {
                            audio: 'xunshi',
                            mod: {
                                cardname(card) {
                                    if (lib.skill.genm_xunshi.isgenm_xunshi(card)) return 'sha';
                                },
                                cardnature(card) {
                                    if (lib.skill.genm_xunshi.isgenm_xunshi(card)) return false;
                                },
                                suit(card) {
                                    if (lib.skill.genm_xunshi.isgenm_xunshi(card)) return 'none';
                                },
                                targetInRange(card) {
                                    if (get.color(card) == 'none') return true;
                                },
                                cardUsable(card) {
                                    if (get.color(card) == 'none') return Infinity;
                                },
                            },
                            isgenm_xunshi(card) {
                                var info = lib.card[card.name];
                                if (!info || (info.type != 'trick' && info.type != 'delay')) return false;
                                if (info.notarget) return false;
                                if (info.selectTarget != undefined) {
                                    if (Array.isArray(info.selectTarget)) {
                                        if (info.selectTarget[0] < 0) return !info.toself;
                                        return info.selectTarget[0] != 1 || info.selectTarget[1] != 1;
                                    } else {
                                        if (info.selectTarget < 0) return !info.toself;
                                        return info.selectTarget != 1;
                                    }
                                }
                                return false;
                            },
                            trigger: {
                                player: 'useCard2',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.color(event.card) == 'none';
                            },
                            content() {
                                'step 0';
                                {
                                    player.addMark('genm_shencai', 1, false);
                                    game.log(player, '#g【神裁】', '发动次数', '#y+1');
                                }
                                if (trigger.addCount !== false) {
                                    trigger.addCount = false;
                                    var stat = player.getStat().card,
                                        name = trigger.card.name;
                                    if (typeof stat[name] == 'number') stat[name]--;
                                }
                                var info = get.info(trigger.card);
                                if (info.allowMultiple == false) event.finish();
                                else if (trigger.targets && !info.multitarget) {
                                    if (
                                        !game.hasPlayer(function (current) {
                                            return !trigger.targets.includes(current) && lib.filter.targetEnabled2(trigger.card, player, current);
                                        })
                                    )
                                        event.finish();
                                } else event.finish();
                                ('step 1');
                                var prompt2 = `为${get.translation(trigger.card)}增加任意个目标`;
                                player
                                    .chooseTarget(
                                        get.prompt('genm_xunshi'),
                                        function (card, player, target) {
                                            var player = _status.event.player;
                                            return !_status.event.targets.includes(target) && lib.filter.targetEnabled2(_status.event.card, player, target);
                                        },
                                        [1, Infinity]
                                    )
                                    .set('prompt2', prompt2)
                                    .set('ai', function (target) {
                                        var trigger = _status.event.getTrigger();
                                        var player = _status.event.player;
                                        return get.effect(target, trigger.card, player, player);
                                    })
                                    .set('card', trigger.card)
                                    .set('targets', trigger.targets);
                                ('step 2');
                                if (result.targets?.length) {
                                    event.targets = result.targets;
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (event.targets) {
                                    player.line(event.targets, 'fire');
                                    trigger.targets.addArray(event.targets);
                                }
                            },
                        },
                        genm_shuangjia: {
                            audio: 'dcshuangjia',
                            trigger: {
                                global: 'roundStart',
                                player: 'enterGame',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var cards = player.getCards('h');
                                player.addGaintag(cards, 'dcshuangjia_tag');
                            },
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (card.hasGaintag('dcshuangjia_tag')) {
                                        return true;
                                    }
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && card.hasGaintag('dcshuangjia_tag')) {
                                        return false;
                                    }
                                },
                                globalTo(from, to, distance) {
                                    return (
                                        distance +
                                        Math.min(
                                            5,
                                            to.countCards('h', (card) => card.hasGaintag('dcshuangjia_tag'))
                                        )
                                    );
                                },
                            },
                        },
                        genm_beifen: {
                            audio: 'dcbeifen',
                            trigger: {
                                player: ['loseAfter'],
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            filter(event, player) {
                                var evt = event.getl(player);
                                if (!evt || !evt.hs || !evt.hs.length) return false;
                                if (event.name == 'lose') {
                                    for (var i in event.gaintag_map) {
                                        if (event.gaintag_map[i].includes('dcshuangjia_tag')) return true;
                                    }
                                    return false;
                                }
                                return player.hasHistory('lose', (evt) => {
                                    if (event != evt.parent) return false;
                                    for (var i in evt.gaintag_map) {
                                        if (evt.gaintag_map[i].includes('dcshuangjia_tag')) return true;
                                    }
                                    return false;
                                });
                            },
                            forced: true,
                            content() {
                                var suits = lib.suit.slice();
                                player.countCards('h', (card) => {
                                    if (!card.hasGaintag('dcshuangjia_tag')) return false;
                                    suits.remove(card.suit);
                                });
                                var cards = [];
                                while (suits.length) {
                                    var suit = suits.shift();
                                    var card = get.cardPile((cardx) => {
                                        return cardx.suit == suit;
                                    });
                                    if (card) cards.push(card);
                                }
                                if (cards.length) {
                                    player.gain(cards, 'gain2');
                                }
                            },
                            mod: {
                                cardUsable(card, player) {
                                    var len = player.countCards('h');
                                    var cnt = player.countCards('h', (card) => card.hasGaintag('dcshuangjia_tag'));
                                    if (2 * cnt < len) return Infinity;
                                },
                                targetInRange(card, player) {
                                    var len = player.countCards('h');
                                    var cnt = player.countCards('h', (card) => card.hasGaintag('dcshuangjia_tag'));
                                    if (2 * cnt < len) return true;
                                },
                                aiOrder(player, card, num) {
                                    if (get.itemtype(card) == 'card' && card.hasGaintag('dcshuangjia_tag')) {
                                        var suits = lib.suit.slice();
                                        player.countCards('h', (cardx) => {
                                            if (!cardx.hasGaintag('dcshuangjia_tag')) return false;
                                            if (card == cardx) return false;
                                            suits.remove(cardx.suit);
                                        });
                                        if (suits.length) return num + suits.length * 2.5;
                                    }
                                },
                            },
                        },
                        genm_zhanjue: {
                            audio: 'zhanjue',
                            enable: 'phaseUse',
                            filterCard(card) {
                                return !card.hasGaintag('genm_qinwang');
                            },
                            selectCard: -1,
                            position: 'h',
                            filter(event, player) {
                                var hs = player.getCards('h', function (card) {
                                    return !card.hasGaintag('genm_qinwang');
                                });
                                if (!hs.length) return false;
                                for (var i = 0; i < hs.length; i++) {
                                    var mod2 = game.checkMod(hs[i], player, 'unchanged', 'cardEnabled2', player);
                                    if (mod2 === false) return false;
                                }
                                return event.filterCard({ name: 'juedou' }, player);
                            },
                            viewAs: {
                                name: 'juedou',
                            },
                            onuse(links, player) {
                                player.addTempSkill('genm_zhanjue_effect', 'phaseUseEnd');
                            },
                            ai: {
                                order: 1,
                                tag: {
                                    respond: 2,
                                    respondSha: 2,
                                    damage: 1,
                                },
                                result: {
                                    target: -1.5,
                                    player(player, target) {
                                        if (
                                            player.hasSkillTag(
                                                'directHit_ai',
                                                true,
                                                {
                                                    target: target,
                                                    card: { name: 'juedou' },
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
                                        var hs2 = player.getCards('h', function (card) {
                                            return card.hasGaintag('genm_qinwang') && card.name == 'sha';
                                        });
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
                            },
                            subSkill: {
                                effect: {
                                    charlotte: true,
                                    onremove(player) {
                                        delete player.getStat().skill.genm_zhanjue_draw;
                                    },
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    filter(event, player) {
                                        return event.skill == 'genm_zhanjue';
                                    },
                                    forced: true,
                                    popup: false,
                                    content() {
                                        'step 0';
                                        var stat = player.getStat().skill;
                                        if (!stat.genm_zhanjue_draw) stat.genm_zhanjue_draw = 0;
                                        stat.genm_zhanjue_draw++;
                                        player.draw('nodelay');
                                        var list = game.filterPlayer(function (current) {
                                            if (
                                                current.getHistory('damage', function (evt) {
                                                    return evt.card == trigger.card;
                                                }).length
                                            ) {
                                                if (current == player) {
                                                    stat.genm_zhanjue_draw++;
                                                }
                                                return true;
                                            }
                                            return false;
                                        });
                                        if (list.length) {
                                            list.sortBySeat();
                                            game.asyncDraw(list);
                                        }
                                        ('step 1');
                                        ('step 2');
                                        if (
                                            player.getHistory('damage', function (evt) {
                                                return evt.card == trigger.card;
                                            }).length
                                        ) {
                                            for (var i of game.filterPlayer().filter(function (target) {
                                                return (
                                                    target.getHistory('sourceDamage', function (evt) {
                                                        return evt.card == trigger.card && evt.player == player;
                                                    }).length &&
                                                    target.isIn() &&
                                                    target.countCards('he')
                                                );
                                            }))
                                                player.discardPlayerCard(i, 'he');
                                        }
                                    },
                                },
                            },
                        },
                        genm_qinwang: {
                            audio: 'qinwang1',
                            enable: 'phaseUse',
                            usable: 1,
                            zhuSkill: true,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current != player && current.group == 'shu' && player.hasZhuSkill('genm_qinwang', current);
                                });
                            },
                            filterTarget(card, player, current) {
                                return current != player && current.group == 'shu' && player.hasZhuSkill('genm_qinwang', current);
                            },
                            selectTarget: -1,
                            content() {
                                'step 0';
                                if (
                                    target.hasCard(function (card) {
                                        return _status.connectMode || card.name == 'sha';
                                    }, 'h')
                                ) {
                                    target
                                        .chooseCard(
                                            `是否交给${get.translation(player)}一张基本牌？`,
                                            function (card, player) {
                                                return get.type(card) == 'basic';
                                            },
                                            'h'
                                        )
                                        .set('goon', get.attitude(target, player) > 0)
                                        .set('ai', function (card) {
                                            return _status.event.goon ? 1 : 0;
                                        });
                                } else event.finish();
                                ('step 1');
                                if (result.cards?.length) {
                                    var card = result.cards[0];
                                    target.give(card, player).gaintag.add('genm_qinwang');
                                    player.addTempSkill('miniqinwang_clear');
                                    player.chooseBool(`是否令${get.translation(target)}摸一张牌？`);
                                } else event.finish();
                                ('step 2');
                                if (result.bool) target.draw();
                            },
                            ai: {
                                order: 5,
                                result: {
                                    player: 1,
                                },
                            },
                            subSkill: {
                                clear: {
                                    charlotte: true,
                                    onremove(player) {
                                        player.removeGaintag('genm_qinwang');
                                    },
                                },
                            },
                        },
                        genm_kangkai: {
                            audio: 'kaikang',
                            trigger: {
                                global: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                return get.distance(player, event.target) <= 1 && event.target.isIn();
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
                        },
                        shenjiang_qimen: {
                            audio: 'olshengong',
                            audioname: ['re_sp_zhugeliang', 'ol_sp_zhugeliang', 'ol_pangtong'],
                            equipSkill: true,
                            noHidden: true,
                            inherit: 'qimenbagua',
                            _priority: -25,
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.card.name != 'sha') return false;
                                if (player.hasSkillTag('unequip2')) return false;
                                if (
                                    event.player.hasSkillTag('unequip', false, {
                                        name: event.card ? event.card.name : null,
                                        target: player,
                                        card: event.card,
                                    })
                                )
                                    return false;
                                return true;
                            },
                            content() {
                                trigger.cancel();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (card.name != 'sha') return;
                                        if (
                                            target.hasSkillTag('unequip2') ||
                                            player.hasSkillTag('unequip', false, {
                                                name: card ? card.name : null,
                                                target: player,
                                                card: card,
                                            }) ||
                                            player.hasSkillTag('unequip', false, {
                                                name: card ? card.name : null,
                                                target: player,
                                                card: card,
                                            })
                                        )
                                            return;
                                        return 'zerotarget';
                                    },
                                },
                            },
                        },
                        shenjiang_xiantian: {
                            audio: 'xinfu_jingxie',
                            audioname: ['re_sp_zhugeliang', 'ol_sp_zhugeliang', 'ol_pangtong'],
                            equipSkill: true,
                            noHidden: true,
                            inherit: 'rw_bagua_skill',
                            _priority: -25,
                            content() {
                                'step 0';
                                player.judge('shenjiang_xiantian', function (card) {
                                    return card.suit != 'spade' ? 1.5 : -0.5;
                                }).judge2 = function (result) {
                                    return result.bool;
                                };
                                ('step 1');
                                if (result.judge > 0) {
                                    trigger.untrigger();
                                    trigger.set('responded', true);
                                    trigger.result = { bool: true, card: { name: 'shan' } };
                                }
                            },
                            trigger: {
                                player: ['chooseToRespondBegin', 'chooseToUseBegin'],
                            },
                            filter(event, player) {
                                if (event.responded) return false;
                                if (event.bagua_skill) return false;
                                if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
                                if (event.name == 'chooseToRespond' && !lib.filter.cardRespondable({ name: 'shan' }, player, event)) return false;
                                if (player.hasSkillTag('unequip2')) return false;
                                var evt = event.parent;
                                if (
                                    evt.player &&
                                    evt.player.hasSkillTag('unequip', false, {
                                        name: evt.card ? evt.card.name : null,
                                        target: player,
                                        card: evt.card,
                                    })
                                )
                                    return false;
                                return true;
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
                            ai: {
                                respondShan: true,
                                effect: {
                                    target(card, player, target, effect) {
                                        if (target.hasSkillTag('unequip2')) return;
                                        if (
                                            player.hasSkillTag('unequip', false, {
                                                name: card ? card.name : null,
                                                target: target,
                                                card: card,
                                            }) ||
                                            player.hasSkillTag('unequip', false, {
                                                name: card ? card.name : null,
                                                target: target,
                                                card: card,
                                            })
                                        )
                                            return;
                                        if (get.tag(card, 'respondShan')) return 0.5;
                                    },
                                },
                            },
                        },
                        genm_jueyan: {
                            audio: 'drlt_jueyan',
                            enable: 'phaseUse',
                            usable: 2,
                            filter(event, player) {
                                return player.hasEnabledSlot(1) || player.hasEnabledSlot(2) || player.hasEnabledSlot(5) || player.hasEnabledSlot('horse');
                            },
                            content() {
                                'step 0';
                                player.chooseToDisable(true).set('ai', function (event, player, list) {
                                    if (list.includes('equip2')) return 'equip2';
                                    if (
                                        list.includes('equip1') &&
                                        player.countCards('h', function (card) {
                                            return card.name == 'sha' && player.hasUseTarget(card);
                                        }) -
                                        player.getCardUsable('sha') >
                                        1
                                    )
                                        return 'equip1';
                                    if (
                                        list.includes('equip5') &&
                                        player.countCards('h', function (card) {
                                            return get.type2(card, player) == 'trick' && player.hasUseTarget(card);
                                        }) > 1
                                    )
                                        return 'equip5';
                                });
                                ('step 1');
                                switch (result.control) {
                                    case 'equip1':
                                        player.recover();
                                        player.addSkill('drlt_jueyan1');
                                        break;
                                    case 'equip2':
                                        player.draw(3);
                                        player.addSkill('drlt_jueyan3');
                                        player.addSkill('jueyan_fangju');
                                        break;
                                    case 'equip3_4':
                                        player.addSkill('drlt_jueyan2');
                                        break;
                                    case 'equip5':
                                        player.addSkill('rejizhi');
                                        break;
                                }
                            },
                            ai: {
                                order: 13,
                                result: {
                                    player(player) {
                                        if (player.hasEnabledSlot('equip2')) return 1;
                                        if (
                                            player.hasEnabledSlot('equip1') &&
                                            player.countCards('h', function (card) {
                                                return card.name == 'sha' && player.hasValueTarget(card);
                                            }) -
                                            player.getCardUsable('sha') >
                                            1
                                        )
                                            return 1;
                                        if (
                                            player.hasEnabledSlot('equip5') &&
                                            player.countCards('h', function (card) {
                                                return get.type2(card, player) == 'trick' && player.hasUseTarget(card);
                                            }) > 1
                                        )
                                            return 1;
                                        return -1;
                                    },
                                },
                            },
                            derivation: 'rejizhi',
                        },
                        genm_qianjie: {
                            group: ['drlt_qianjie_1', 'drlt_qianjie_2', 'drlt_qianjie_3'],
                            ai: {
                                effect: {
                                    target(card) {
                                        if (card.name == 'tiesuo') return 'zeroplayertarget';
                                    },
                                },
                            },
                            subSkill: {
                                1: {
                                    audio: 'drlt_qianjie',
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
                                2: {
                                    mod: {
                                        targetEnabled(card, player, target) {
                                            if (get.type(card) == 'delay') return false;
                                        },
                                    },
                                },
                                3: {
                                    ai: {
                                        noCompareTarget: true,
                                    },
                                },
                            },
                        },
                        genm_poshi: {
                            audio: 'drlt_poshi',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            juexingji: true,
                            derivation: ['meng_huairou'],
                            filter(event, player) {
                                return !player.hasEnabledSlot() || player.hp == 1;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('genm_poshi');
                                player.gainMaxHp();
                                player.recover();
                                ('step 1');
                                var num = player.maxHp - player.countCards('h');
                                if (num > 0) player.draw(num);
                                player.removeSkill('genm_jueyan');
                                player.addSkill('meng_huairou');
                                player.addSkill('poshi2');
                                ('step 2');
                                var list = [],
                                    target = trigger.player;
                                for (var i = 1; i < 6; i++) {
                                    for (var j = 0; j < target.countDisabledSlot(i); j++) {
                                        list.push(i);
                                    }
                                }
                                if (list.length) target.enableEquip(list);
                            },
                        },
                        shenjiang_zijin: {
                            audio: 'olshengong',
                            audioname: ['re_sp_zhugeliang', 'ol_sp_zhugeliang', 'ol_pangtong'],
                            equipSkill: true,
                            noHidden: true,
                            inherit: 'shufazijinguan_skill',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('shenjiang_zijin'), '对一名其他角色造成1点伤害', function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    result.targets[0].damage();
                                }
                            },
                            _priority: -25,
                        },
                        shenjiang_shuibo: {
                            audio: 'pytianjiang',
                            audioname: ['re_sp_zhugeliang', 'ol_sp_zhugeliang', 'ol_pangtong'],
                            equipSkill: true,
                            noHidden: true,
                            inherit: 'pyzhuren_club',
                            trigger: {
                                player: 'useCard2',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.card.name != 'sha' && get.type(event.card) != 'trick') return false;
                                var info = get.info(event.card);
                                if (info.allowMultiple == false) return false;
                                var num = player.getHistory('useSkill', function (evt) {
                                    return evt.skill == 'shenjiang_shuibo';
                                }).length;
                                if (num >= 2) return false;
                                if (event.targets && !info.multitarget) {
                                    if (
                                        game.hasPlayer(function (current) {
                                            return lib.filter.targetEnabled2(event.card, player, current) && !event.targets.includes(current);
                                        })
                                    ) {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                var prompt2 = `为${get.translation(trigger.card)}额外指定一个目标`;
                                player
                                    .chooseTarget([1, player.storage.fumian_red], get.prompt(event.name), function (card, player, target) {
                                        var player = _status.event.player;
                                        if (_status.event.targets.includes(target)) return false;
                                        return lib.filter.targetEnabled2(_status.event.card, player, target);
                                    })
                                    .set('prompt2', prompt2)
                                    .set('ai', function (target) {
                                        var trigger = _status.event.getTrigger();
                                        var player = _status.event.player;
                                        return get.effect(target, trigger.card, player, player);
                                    })
                                    .set('targets', trigger.targets)
                                    .set('card', trigger.card);
                                ('step 1');
                                if (result.targets?.length) {
                                    event.targets = result.targets;
                                }
                                ('step 2');
                                if (event.targets) {
                                    trigger.targets.addArray(event.targets);
                                }
                            },
                            _priority: -25,
                            ai: {
                                equipValue(card, player) {
                                    if (player.getEnemies().length < 2) {
                                        if (player.isDamaged()) return 0;
                                        return 1;
                                    }
                                    return 4.5;
                                },
                                basic: {
                                    equipValue: 4.5,
                                },
                            },
                        },
                        shenjiang_liecui: {
                            audio: 'pytianjiang',
                            audioname: ['re_sp_zhugeliang', 'ol_sp_zhugeliang', 'ol_pangtong'],
                            equipSkill: true,
                            noHidden: true,
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            usable: 2,
                            mod: {
                                cardUsable(card, player, num) {
                                    var cardx = player.getEquip('shenjiang_liecui');
                                    if (card.name == 'sha' && (!cardx || player.hasSkill('shenjiang_liecui', null, false) || (!_status.pyzhuren_diamond_temp && !ui.selected.cards.includes(cardx)))) {
                                        return num + 1;
                                    }
                                },
                                cardEnabled2(card, player) {
                                    if (!_status.event.addCount_extra || player.hasSkill('shenjiang_liecui', null, false)) return;
                                    if (card && card == player.getEquip('shenjiang_liecui')) {
                                        _status.shenjiang_liecui_temp = true;
                                        var bool = lib.filter.cardUsable({ name: 'sha' }, player);
                                        delete _status.shenjiang_liecui_temp;
                                        if (!bool) return false;
                                    }
                                },
                            },
                            filter(event, player) {
                                if (event.parent.name != 'sha') return false;
                                return (
                                    player.countCards('he', function (card) {
                                        return card != player.getEquip('shenjiang_liecui');
                                    }) > 0
                                );
                            },
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard(
                                    'he',
                                    function (card, player) {
                                        return card != player.getEquip('shenjiang_liecui');
                                    },
                                    get.prompt(event.name, trigger.player),
                                    '弃置一张牌,令即将对其造成的伤害+1'
                                );
                                next.set('target', trigger.player);
                                next.ai = function (card) {
                                    if (_status.event.goon) return 30 / (1 + _status.event.target.hp) - get.value(card);
                                    return -1;
                                };
                                next.set(
                                    'goon',
                                    get.attitude(player, trigger.player) < 0 &&
                                    !trigger.player.hasSkillTag('filterDamage', null, {
                                        player: player,
                                        card: trigger.card,
                                    }) &&
                                    get.damageEffect(trigger.player, player, player, get.natureList(trigger)) > 0
                                );
                                ('step 1');
                                if (result.bool) trigger.num++;
                                else player.getStat('triggerSkill').shenjiang_liecui--;
                            },
                            ai: {
                                expose: 0.25,
                            },
                            _priority: -25,
                        },
                        shenjiang_tianlei: {
                            audio: 'pytianjiang',
                            audioname: ['re_sp_zhugeliang', 'ol_sp_zhugeliang', 'ol_pangtong'],
                            equipSkill: true,
                            noHidden: true,
                            inherit: 'pyzhuren_shandian',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha'; //&&event.targets.length==1;
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            logTarget: 'target',
                            content() {
                                'step 0';
                                trigger.target.judge(function (card) {
                                    var suit = card.suit;
                                    if (suit == 'spade') return -10;
                                    if (suit == 'club') return -5;
                                    return 0;
                                }).judge2 = function (result) {
                                    return result.color == 'black' ? true : false;
                                };
                                ('step 1');
                                if (result.suit == 'spade') {
                                    trigger.target.damage(3, 'thunder');
                                    //trigger.parent.excluded.add(trigger.target);
                                } else if (result.suit == 'club') {
                                    trigger.target.damage('thunder');
                                    player.recover();
                                    player.draw();
                                }
                            },
                            _priority: -25,
                            ai: {
                                equipValue(card, player) {
                                    if (player.isDamaged()) return 6;
                                    return 4.8;
                                },
                                basic: {
                                    equipValue: 5,
                                },
                            },
                        },
                        shenjiang_hundu: {
                            audio: 'pytianjiang',
                            audioname: ['re_sp_zhugeliang', 'ol_sp_zhugeliang', 'ol_pangtong'],
                            equipSkill: true,
                            noHidden: true,
                            inherit: 'pyzhuren_spade',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha'; //&&event.targets.length==1&&get.color(event.card)=='black';
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            logTarget: 'target',
                            content() {
                                var num = player.getHistory('useSkill', function (evt) {
                                    return evt.skill == 'shenjiang_hundu';
                                }).length;
                                trigger.target.loseHp(Math.min(num, 5)); //.set('source',player);
                            },
                            ai: {
                                jueqing: true,
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (tag == 'unequip') return arg && arg.name === 'sha';
                                },
                            },
                            _priority: -25,
                        },
                        shenjiang_hongduan: {
                            audio: 'pytianjiang',
                            audioname: ['re_sp_zhugeliang', 'ol_sp_zhugeliang', 'ol_pangtong'],
                            equipSkill: true,
                            noHidden: true,
                            inherit: 'pyzhuren_heart',
                            trigger: {
                                source: 'damageSource',
                            },
                            usable: 1,
                            filter(event, player) {
                                return event.parent.name == 'sha';
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    var player = _status.event.getParent('shenjiang_hongduan').player;
                                    if (player.isHealthy() && get.color(card) == 'red') return 0;
                                    return 2;
                                });
                                ('step 1');
                                if (result.color == 'red') player.recover();
                                else player.draw(2);
                            },
                            _priority: -25,
                            check(event, player) {
                                return true;
                            },
                            ai: {
                                equipValue(card, player) {
                                    if (player.isDamaged()) return 4.5;
                                    return 6;
                                },
                                basic: {
                                    equipValue: 4.5,
                                },
                            },
                        },
                        shenjiang_shengong: {
                            audio: 'ext:梦之将/audio:2',
                            audioname: ['re_sp_zhugeliang', 'ol_sp_zhugeliang', 'ol_pangtong'],
                            group: ['shenjiang_xiantian', 'shenjiang_yupao', 'shenjiang_qimen', 'baodao_zhuge', 'shenjiang_zijin', 'shenjiang_shuibo', 'shenjiang_liecui', 'shenjiang_tianlei', 'shenjiang_hundu', 'shenjiang_hongduan', 'shenjiang_chixue', 'shenjiang_xuwang', 'shenjiang_zhaogu'],
                        },
                        shenjiang_chixue: {
                            audio: 'olshengong',
                            audioname: ['re_sp_zhugeliang', 'ol_sp_zhugeliang', 'ol_pangtong'],
                            equipSkill: true,
                            noHidden: true,
                            inherit: 'chixueqingfeng',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            logTarget: 'target',
                            forced: true,
                            content() {
                                var target = trigger.target;
                                target.addTempSkill('chixueqingfeng2');
                                target.markAuto('chixueqingfeng2', [trigger.card]);
                            },
                            ai: {
                                unequip: true,
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if (arg && arg.card && arg.card.name == 'sha') return true;
                                    return false;
                                },
                            },
                            _priority: -25,
                        },
                        shenjiang_xuwang: {
                            audio: 'olshengong',
                            audioname: ['re_sp_zhugeliang', 'ol_sp_zhugeliang', 'ol_pangtong'],
                            equipSkill: true,
                            noHidden: true,
                            inherit: 'xuwangzhimian',
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            content() {
                                trigger.num += 2;
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num - 1;
                                },
                            },
                            _priority: -25,
                        },
                        shenjiang_zhaogu: {
                            audio: 'olshengong',
                            audioname: ['re_sp_zhugeliang', 'ol_sp_zhugeliang', 'ol_pangtong'],
                            equipSkill: true,
                            noHidden: true,
                            inherit: 'zhaogujing_skill',
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hasCard(function (card) {
                                    if (_status.connectMode) return true;
                                    var type = get.type(card, player);
                                    return type == 'basic' || type == 'trick';
                                }, 'h');
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseCard('h', get.prompt('zhaogujing_skill'), '展示并视为使用一张基本牌或普通锦囊牌', function (card, player) {
                                        var type = get.type(card, player);
                                        return type == 'basic' || type == 'trick';
                                    })
                                    .set('ai', function (card) {
                                        var player = _status.event.player,
                                            name = card.name;
                                        if (name == 'jiu') return 0;
                                        return player.getUseValue({
                                            name: name,
                                            nature: get.nature(card, player),
                                        });
                                    });
                                ('step 1');
                                if (result.cards?.length) {
                                    player.showCards(result.cards, get.translation(player) + '发动了【照骨镜】');
                                    var card = {
                                        name: result.cards[0].name,
                                        nature: get.nature(result.cards[0], player),
                                    };
                                    player.chooseUseTarget(card, true, false);
                                }
                            },
                            _priority: -25,
                        },
                        shenjiang_yupao: {
                            audio: 'olshengong',
                            audioname: ['re_sp_zhugeliang', 'ol_sp_zhugeliang', 'ol_pangtong'],
                            equipSkill: true,
                            noHidden: true,
                            inherit: 'guofengyupao',
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (player == target || get.type(card) != 'trick') return;
                                    if (target.hasSkillTag('unequip2')) return;
                                    if (
                                        player.hasSkillTag('unequip', false, {
                                            name: card ? card.name : null,
                                            target: player,
                                            card: card,
                                        })
                                    )
                                        return;
                                    return false;
                                },
                            },
                            _priority: -25,
                        },
                        jueyan_fangju: {
                            audio: 'drlt_jueyan',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            charlotte: true,
                            forced: true,
                            filter(event, player) {
                                return _status.mode != 'online' && _status.mode != 'binglin' && player == game.zhu;
                            },
                            content() {
                                player.draw(3);
                            },
                        },
                        poshi2: {
                            audio: 'drlt_poshi',
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            charlotte: true,
                            content() {
                                trigger.num++;
                            },
                            mark: true,
                            intro: {
                                content: '造成伤害时,此伤害+1',
                            },
                        },
                        meng_huairou: {
                            audio: 'drlt_huairou',
                            enable: 'phaseUse',
                            position: 'he',
                            filter: (event, player) => player.hasCard((card) => lib.skill.drlt_huairou.filterCard(card, player), lib.skill.drlt_huairou.position),
                            filterCard: (card, player) => get.type(card) == 'equip' && player.canRecast(card),
                            check(card) {
                                if (!_status.event.player.canEquip(card)) return 5;
                                return 3 - get.value(card);
                            },
                            content() {
                                'step 0';
                                player.recast(cards);
                                ('step 1');
                                var list = [];
                                for (var name of lib.inpile) {
                                    if (get.type(name) != 'basic' && get.type2(name) != 'trick') continue;
                                    var storage = player.getStorage('minihuairou_used');
                                    if (!storage.includes(name)) {
                                        list.push([get.translation(get.type2({ name: name })), '', name]);
                                        if (name == 'sha') {
                                            for (var nature of lib.inpile_nature) list.push(['基本', '', name, nature]);
                                        }
                                    }
                                }
                                player.chooseButton(['怀柔:选择获得一种基本牌或锦囊牌', [list, 'vcard']], true);
                                player.when('phaseEnd').then(() => {
                                    delete player.storage.minihuairou_used;
                                });
                                ('step 2');
                                player.markAuto('minihuairou_used', [result.links[0][2]]);
                                var card = get.cardPile(function (card) {
                                    return card.name == result.links[0][2] && (get.nature(card) == result.links[0][3] || !result.links[0][3]);
                                });
                                if (card) player.gain(card, 'gain2');
                                else {
                                    player.popup('杯具');
                                    game.log('但是牌堆中已经没有', '#y' + get.translation(result.links[0][2]), '了!');
                                }
                            },
                            discard: false,
                            lose: false,
                            delay: false,
                            prompt: '将一张装备牌置入弃牌堆并摸一张牌',
                            ai: {
                                order: 10,
                                result: {
                                    player: 1,
                                },
                            },
                            subSkill: {
                                used: {
                                    charlotte: true,
                                },
                            },
                        },
                        meng_kurou: {
                            audio: 'sbkurou',
                            enable: 'phaseUse',
                            prompt: '失去1点体力并摸两张牌',
                            content() {
                                game.countPlayer(function (c) {
                                    c.loseHp();
                                    c.draw(2);
                                });
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                },
                                result: {
                                    player(player) {
                                        if (player.countCards('h') >= player.hp - 1) return -1;
                                        if (player.hp < 3) return -1;
                                        return 1;
                                    },
                                },
                            },
                        },
                    },
                };
                lib.config.all.characters.add('梦之将');
                lib.config.characters.add('梦之将');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:梦之将/image/${i}.jpg`)
                }
                lib.translate['梦之将_character_config'] = `梦之将`;
                return QQQ;
            });
        },
        package: {
            intro: `<br><br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br><br></span>`,
            author: '爱门',
            version: '1.0',
        },
    };
});
