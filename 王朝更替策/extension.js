import { lib, game, ui, get, ai, _status } from '../../noname.js'
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '王朝更替策',
        content(config, pack) { },
        precontent() {
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '王朝更替策',
                    connect: true,
                    character: {
                        jiangwei合: ['male', 'shu', 4, ['tiaoxin', 'kunfen'], []],
                        zhaoyun合: ['male', 'qun', 4, ['longdan', 'kivaqj', 'xueyi', 'huangtian', 'kivall'], []],
                        zhugeliang合: ['male', 'shu', 4, ['kongcheng', 'kivagx', 'hujia', 'xianfu', 'buqu'], []],
                        liubei合: ['male', 'shu', 3, ['rerende', 'hongde', 'kivahy'], []],
                        fazheng合: ['male', 'shu', 3, ['kivaxh', 'xinenyuan', 'tiandu', 'xianfu', 'kivazf', 'kivacy'], []],
                        jiaxu合: ['male', 'qun', 3, ['kivapj', 'kivakl', 'wansha', 'xinjuece', 'lianpo', 'kiva104'], []],
                        xunyu合: ['male', 'wei', 3, ['kivazh', 'kivayj', 'kivayc'], []],
                        sunquan合: ['male', 'wu', 4, ['hunzi', 'zhiheng'], []],
                        lingtong合: ['male', 'wu', 4, ['xuanfeng', '援截'], []],
                        sunshangxiang孙尚香ssx: ['female', 'wu', 3, ['liangzhu', 'xiaoji', 'jieyin', '枭箭'], []],
                        zhonghui合: ['male', 'wei', 3, ['qizhi', 'tiandu', 'quanji', 'tuntian'], []],
                        sunjian合: ['male', 'wu', 5, ['kivawl', 'kivacx'], []],
                        zhangyi合: ['male', 'shu', 3, ['yizhong', 'kivawj', 'zhanjue'], []],
                        sunlubansunluyu: ['female', 'wu', 3, ['kivalb', 'kivaly', 'kivadh', 'kivaxh2', 'tiandu', 'oldzhenlie'], []],
                        xuhuang合: ['male', 'wei', 4, ['kivadl', 'qicai', 'jiezi'], []],
                        simayi合: ['male', 'wei', 3, ['kivajj', 'kivalg', 'kivays', 'bizhuan', 'zuoding'], []],
                        caocao合: ['male', 'wei', 4, ['kivatzw', 'kivalp'], []],
                        luxun合: ['male', 'wu', 3, ['kivasy', 'relianying'], []],
                        sunce合: ['male', 'wu', 4, ['kivalj', 'kivasj', 'kivabw', 'kivayx', 'shiyong'], []],
                        caoanming合: ['male', 'wei', 3, ['feiying', 'tiaoxin'], []],
                        caoang合: ['male', 'wei', 4, ['kivalz', 'kaikang'], []],
                        yuji合: ['male', 'qun', 3, ['kivagh', 'reguose', 'zhenlue'], []],
                        gongsunzan合: ['male', 'qun', 4, ['kivabm', 'kivazrs', 'qiaomeng', 'reyicong', 'kivasr'], []],//QQQ
                        liuxie合: ['male', 'qun', 4, ['longyin', 'tiandu', 'tianming', 'mizhao', 'mingjian', 'kivahy'], []],
                        machaokivashen: ['male', 'qun', 5, ['oldqianxi', 'mashu', 'retieji', 'liyu', 'fengpo', 'kivashichou', 'kivazhuiji'], []],
                        lingju合: ['female', 'qun', 4, ['jieyuan', 'fenxin', 'reqianxun', 'wushuang'], []],
                        zhugeke合: ['male', 'wu', 3, ['aocai', 'duwu', 'hongyuan', 'huanshi'], []],
                        zhouyu合: ['male', 'wu', 3, ['refanjian', 'kivahz'], []],
                        zhangheli: ['male', 'qun', 4, ['tianyi', 'jiang', 'mashu', 'kivayuanlue', 'kivaliyuan'], []],
                        guanyinpingsp: ['female', 'shu', 3, ['kivaxuj', 'kivawuj', 'huxiao'], []],
                        xushusp合: ['male', 'shu', 4, ['zhuhai', 'kivatg', 'kivayd', 'kivarc'], []],
                        caozhi合: ['male', 'wei', 4, ['luoying', 'kivaws'], []],
                        zhangxiu合: ['male', 'qun', 3, ['kivazyx', 'kivaqw', 'kivapxz', 'kivabd', 'kivahenshin'], []],
                        liubang合: ['male', 'qun', 4, ['kivagz', '神旗', 'tianming'], []],
                        baiban合: ['none', 'qun', 5, ['云岳斧3', '云岳斧'], []],
                        hanxin合: ['male', 'qun', 5, ['mashu', 'kivahcw'], []],
                        xiaohe合: ['male', 'qun', 4, ['kivahz', 'kivaxcb'], []],
                        zhangliang合: ['male', 'qun', 4, ['qixing', 'kivazzz'], []],
                        liubangyxs合: ['male', 'qun', 4, ['kivayxsyr', 'kivasxx'], []],
                        caocan合: ['male', 'qun', 3, ['tiandu', 'bazhen', 'kivacc'], []],
                        jiangwei_boss: ['male', 'qun', 3, ['tiaoxin', 'nsguanxing', 'bazhen', 'kivast'], []],
                        fazheng_bosskiva: ['male', 'shu', 3, ['xinenyuan', 'juejing', 'longhun', 'kivaffj'], []],
                        zhangxiuhenshin合: ['male', 'qun', 5, [], []],
                        guanpingzhoucang: ['male', 'shu', 4, ['kivazy'], []],
                        zhangfei合: ['male', 'shu', 3, ['paoxiao', 'kivazbsm', 'kiva2'], []],
                        guanyu合: ['male', 'shu', 3, ['wusheng', 'kivaqlyyd', 'kiva3'], []],
                        guojia一世奉孝: ['male', 'wei', 3, ['yiji', 'tiandu', 'kivazx'], []],
                        sunshangxiangshen合: ['female', 'qun', 3, ['xiaoji', 'jieyin', 'kivasxk'], []],
                        mayunlu合: ['female', 'shu', 3, ['fengpo', 'mashu', 'kivatzb'], []],
                        beimihu合: ['female', 'qun', 3, ['kivatzb', 'kivaszb', 'kivaft'], []],
                        zhaoyunshen合: ['male', 'shu', 10, ['kivaqj', 'kivazy', 'kivaxuj', 'fuhun', 'mashu', 'longdan'], []],
                        chendao合: ['male', 'shu', 4, ['longdan', 'jiang'], []],
                        liufeng合: ['male', 'shu', 3, ['jingce', 'tiandu', 'xiansi'], []],
                        yuanyuan合: ['male', 'qun', 3, ['reluanji', 'yongsi'], []],
                        simazhao合: ['male', 'qun', 3, ['nszhaoxin', 'nsxiuxin', 'kivasjj', 'gongao'], []],
                        simarui合: ['male', 'qun', 3, ['kivafj', 'kivajjjjjjj', 'kivalyw'], []],
                        liuxiu合: ['male', 'qun', 3, ['kivagwd', 'kivajww', 'fanghun', 'kivazxlx'], []],
                        liuche合: ['male', 'qun', 3, ['kivadll', 'kivaxc', 'kivayc'], []],
                        lishimin合: ['male', 'qun', 3, ['kongju', 'kivaht', 'kivasd'], []],
                        lilongji合: ['male', 'qun', 3, ['kongju', 'kivakyss'], []],
                        zhangchunhua心狠手辣: ['female', 'wei', 3, ['shangshi殇逝', 'jueqing情绝'], []],
                        chensheng合: ['male', 'qun', 3, ['kivaqyc', 'kivazzc', 'kivaqmqy'], []],
                        xiangyu合: ['male', 'qun', 3, ['renxin', 'mashu', 'kivabwxy', 'kivaxcxy'], []],
                        fusu扶苏: ['male', 'qun', 4, ['儒戍', '扶谏'], []],
                        yingzheng嬴政yyzz: ['male', 'qun', 3, ['kivash', 'kivadz'], []],
                        yangjian合: ['male', 'qun', 3, ['kivakh'], []],
                        suiyangdi合: ['male', 'qun', 3, ['shiqin', 'yaoyi', 'kivajsh'], []],
                        guojiafengxiao合: ['male', 'wei', 3, ['tiandu', 'kivayjc', 'kivaty'], []],
                        qinmi合: ['male', 'shu', 3, ['jianzheng', 'zhuandui', 'tianbian', 'jyzongshi', 'kivajyy'], []],
                        liubowen合: ['male', 'qun', 3, ['kivagy', 'kivazb'], []],
                        zhuyuanzhang合: ['male', 'qun', 3, ['kivaqy'], []],
                        zhugeliangwolong合: ['male', 'shu', 4, ['kivalm'], []],
                        zhouyucb合: ['male', 'wu', 3, ['kivayr', 'kivahz'], []],
                        huanjiqishi幻击骑士: ['male', 'qun', 8, ['kivaccjj', 'kivacclj', 'kivacccl', 'kivaccjs'], []],
                        liubangs合: ['male', 'qun', 10, ['kivasxx', '神旗', 'kivayxsyr'], []],
                        hanxinshen合: ['male', 'qun', 5, ['kivatl', 'kivags', 'kivayys', 'wushuang', 'liyu'], []],
                        shenqi神旗: ['male', 'qun', Infinity, ['神避'], ['zhu', 'boss', 'bossallowed']],
                        guangxu合: ['male', 'qun', 3, ['zongzuo', 'kivaxwx'], []],
                        chenduxiu合: ['male', 'qun', 3, ['kivadzx', 'kivadxx', 'kivatxx'], []],
                        kangxi合: ['male', 'qun', 4, ['kivakqq', 'kivakyq', 'kivakxq'], []],
                        jifa合: ['male', 'qun', 3, ['kivawwm', 'kivazsm', 'kivaxfm'], []],
                        jiangziya合: ['male', 'qun', 3, ['kivasgm', 'kivajlm'], []],
                        xwd合: ['male', 'qun', 10, ['kivaqd'], []],
                        liuyu合: ['male', 'qun', 3, ['kivassd'], []],
                        zhuquanzhong合: ['male', 'qun', 3, ['kivajjn'], []],
                        songjiang合: ['male', 'qun', 3, ['kivascl', 'kivalss'], []],
                        zhaokuangyin合: ['male', 'qun', 6, ['kivajqq'], []],
                        agdkivaa: ['male', 'qun', 7, [], []],
                        abj合: ['male', 'qun', 7, [], []],
                        liyh合: ['male', 'qun', 7, [], []],
                        tiemuzhen合: ['male', 'qun', 3, ['kivaqsj', 'kivagold'], []],
                        sgsxiaosha合: ['female', 'qun', 3, ['kivaxss', 'kivarqq'], []],
                        liubangsp合: ['male', 'qun', 3, ['kivayryr', 'kivasxsx'], []],
                        yingzheng嬴政yz: ['male', 'qun', 3, ['kivaqhh', 'kivadww'], []],
                        xiahoushi合: ['female', 'shu', 3, ['yanyu', 'kivazyy'], []],
                        wuwu合: ['none', 'shu', 3, ['benxi', 'fumian', 'daiyan'], []],
                        masu合: ['male', 'shu', 3, ['sanyao', 'zhiman', 'xinzhan', 'huilei'], []],
                        sunwukong合: ['male', 'qun', 3, ['kivadzsf', 'kivaqtds', 'kivang', 'kivahyhy2'], ['zhu', 'nei']],
                        jiabaoyu合: ['male', 'qun', 5, ['kivaby'], []],
                        Napoleon合: ['male', 'qun', 3, ['tongling', 'fanpu', 'kivawz'], []],
                        Caesar合: ['male', 'qun', 3, ['ducai', 'kivawz'], []],
                        qinqiong合: ['male', 'qun', 3, ['双锏'], []],
                        lukang合: ['male', 'wu', 3, ['kivaweiyan', 'kivadufeng'], []],
                        yanghu合: ['male', 'qun', 3, ['kivagongxin', 'kivahuairou'], []],
                        menshishi合: ['male', 'qun', 3, ['门矢', '门士4'], []],
                        惊雷引: ['none', 'qun', 4, ['kivaquka', 'jueshakiva'], []],
                        Genji: ['male', 'qun', 5, ['lianying', 'zhanlong', 'longhun', 'jiang', 'dragonkiva', 'kivajiaxi', 'juepokiva', 'kivalongyi'], []],
                        Hanzo: ['male', 'qun', 5, ['oldxuanfeng', 'kongju', 'sheshu', 'bfengshi', 'yinbo', 'sheng', 'qimou', 'manjuan', 'hunzi', 'kivayuanshe', 'longhukiva'], []],
                        simalang合: ['male', 'wei', 3, ['kivajunbing', 'kivaquji'], []],
                        'Caesar 2': ['male', 'qun', 4, ['kivazhengfu', 'kivaxiaozhan'], []],
                        xunchen合: ['male', 'qun', 3, ['kivafenglue', 'kivamoushi', 'kivamiyin'], []],
                        xunyou合: ['male', 'wei', 3, ['kivaliangmou', 'qice', 'kivashiquan'], []],
                        lvbu合: ['male', 'qun', 5, ['kivaqiongtu', 'kivabaoli'], []],
                        wangji合: ['male', 'wei', 3, ['qizhi', 'kivajinqu', 'kivacanshi'], []],
                        machaoSP马超kiva: ['male', 'qun', 4, ['kivashichou', 'kivazhuiji'], []],
                        織田信長kiva: ['male', 'qun', 3, ['kivayewang', 'kivabuwu'], []],
                        豊臣秀吉kiva: ['male', 'qun', 3, ['kivazhichen', 'kivaduoquan', 'jijiang'], []],
                        德川家康kiva: ['male', 'qun', 3, ['kivayinren', 'kivamujiang'], []],
                        liuyu2kiva: ['male', 'qun', 3, ['zhige', 'zongshi', 'kivakunzhong'], []],
                        zuliu合: ['male', 'qun', 3, ['kivabeifa', 'xinsidi', 'kivawenji'], []],
                        bubu合: ['none', 'wu', 3, ['anxu', 'zhuiyi', 'hongde', 'dingpan'], []],
                        xizhicai合: ['male', 'wei', 3, ['xianfu', 'kivatiancai', 'kivachouce', 'kivatiandu'], []],
                        xiahoudunxiahouyuan夏侯惇渊: ['male', 'wei', 4, ['fenyong', 'xuehen', 'xinshensu'], []],
                        maliang合: ['male', 'shu', 3, ['kivayingyuan3', 'kivazishu'], []],
                        huangzhong星黄忠: ['male', 'shu', 4, ['kivabeixian', 'xinliegong'], []],
                        guyong合: ['male', 'wu', 3, ['kivabingyi', 'kivashenxing'], []],
                        liubiao合: ['male', 'qun', 3, ['zishou', 'lirang'], []],
                        宮本武蔵kiva: ['male', 'qun', 4, ['kivaertian'], []],
                        liubei_魂_kiva: ['male', 'shu', 3, ['rerende', 'jijiang', 'kivacixiong_liubei'], []],
                        caocao_魂_kiva: ['male', 'wei', 3, ['hujia', 'rejianxiong', 'kivayitian'], []],
                        simayi_魂_kiva: ['male', 'wei', 5, ['kivazhabing', 'kivaguimou'], []],
                        guanyusp合: ['male', 'wei', 4, ['kivaxiaozhan', 'wusheng', 'shiyong', 'wansha'], []],
                        zhugeliangxin合: ['male', 'shu', 3, ['kivajincui', 'bazhen', 'kanpo'], []],
                        jinlongdisi金龙帝司: ['female', 'qun', 9, ['帝司'], []],
                        zhongjiajuren重甲巨人: ['male', 'qun', 4, ['重巨'], []],
                        安倍晴明kiva: ['male', 'qun', 4, ['kivayinyang', 'kivaxianji', 'kivazhanbu'], []],
                        kongrong合: ['male', 'qun', 3, ['zishu', 'lirang'], []],
                        miheng合: ['male', 'qun', 7, ['kuangcai', 'kivatiannu'], []],
                        libai诗李白: ['male', 'qun', 3, ['kivajingsi', 'kivajinqiang'], []],
                        dufu杜甫df: ['male', 'qun', 3, ['夔泊', '道唐'], []],
                    },
                    translate: {
                        hanshilisl: '<span style=color: #F0F>汉</span>',
                        hanshilislColor: '#370067',
                        rishilisl: '日',
                        yushilisl: '虞',
                        xishilisl: '<font color=#000000>西</font>',
                        sandaishilisl: '<font color=#7A4E00>夏</font><font color=#3A7A39>商</font><font color=#7A3535>周</font>',
                        sandaishilislColor: '#000000',
                        nanbeishilisl: '<font color=#F2FF31>南</font><font color=#20FF38>北</font>',
                        nanbeishilislColor: '#000000',
                        wushishilisl: '五代十国',
                        wushishilislColor: 'FFFFFF',
                        songshilisl: '<font color=#85FEFF>宋</font>',
                        songshilislColor: '#85FEFF',
                        liaoshilisl: '<font color=#588BFF>辽</font>',
                        liaoshilislColor: '#588BFF',
                        xixiashilisl: '<font color=#FFA400>西夏</font>',
                        xixiashilislColor: '#FFA400',
                        jinshilisl: '<span style=color: #4DE1FF>晋</span>',
                        jinshilislColor: '#ffe14c',
                        jin2shilisl: '<font color=#FAFF20>金</font>',
                        jin2shilislColor: '#000000',
                        yuanshilisl: '<font color=#694100>元</font>',
                        yuanshilislColor: '#694100',
                        minshilisl: '<font color=#7A7A7A>民</font>',
                        minshilislColor: '#7A7A7A',
                        qingshilisl: '<font color=#1B7F8B>清</font>',
                        qingshilislColor: '#1B7F8B',
                        zhongguoshilisl: '<font color=#FF0000>中华人民共和国</font>',
                        zhongguoshilislColor: '#FF0000',
                        tangshilisl: '<font color=#FF0000>唐</font>',
                        tangshilislColor: '#6f0000',
                        suishilisl: '<font color=#810000>隋</font>',
                        suishilislColor: '#810000',
                        qinshilisl: '<font color=#928817>秦</font>',
                        qinshilislColor: '#928817',
                        chushilisl: '<font color=#000000>楚</font>',
                        chushilislColor: '000000',
                        mingshilisl: '<font color=#E1FF0B>明</font>',
                        mingshilislColor: '#E1FF0B',
                        jiangwei合: '界姜维',
                        zhaoyun合: '界SP赵云',
                        zhugeliang合: '界诸葛亮',
                        liubei合: '界刘备',
                        fazheng合: '界法正',
                        jiaxu合: '界贾诩',
                        xunyu合: '界荀彧',
                        sunquan合: '界孙权',
                        lingtong合: '界凌统',
                        sunshangxiang孙尚香ssx: '孙尚香',
                        zhonghui合: '界钟会',
                        sunjian合: '界孙坚',
                        zhangyi合: 'SP张翼',
                        sunlubansunluyu: '孙鲁班育',
                        xuhuang合: '界徐晃',
                        simayi合: 'sp界司马懿',
                        caocao合: 'sp界曹操',
                        luxun合: 'sp界陆逊',
                        sunce合: '界孙策',
                        caoanming合: 'sp曹安民',
                        caoang合: '界曹昂',
                        yuji合: '界于吉',
                        gongsunzan合: 'sp界公孙瓒',
                        liuxie合: '神界刘协',
                        machaokivashen: '神界马超',
                        lingju合: '界灵雎',
                        zhugeke合: '界诸葛恪',
                        zhouyu合: 'sp界周瑜',
                        zhangheli: 'sp张郃',
                        guanyinpingsp: 'sp关银屏',
                        xushusp合: 'sp界徐庶',
                        caozhi合: '界曹植',
                        zhangxiu合: 'sp张绣',
                        liubang合: '大汉刘邦',
                        baiban合: 'sp5血白版',
                        hanxin合: '齐王韩信',
                        xiaohe合: '成败萧何',
                        zhangliang合: '刺秦张良',
                        liubangyxs合: '刘邦',
                        caocan合: '曹参',
                        jiangwei_boss: '乾坤姜维',
                        fazheng_bosskiva: '辅神法正',
                        zhangxiuhenshin合: '北地枪王',
                        guanpingzhoucang: 'sp关平周仓',
                        zhangfei合: 'sp界张飞',
                        guanyu合: 'sp界关羽',
                        guojia一世奉孝: '一世奉孝',
                        sunshangxiangshen合: '姬武香香',
                        mayunlu合: '界马云禄',
                        beimihu合: 'sp卑弥呼',
                        zhaoyunshen合: '苍天游龙',
                        chendao合: 'sp陈到',
                        liufeng合: '界刘封',
                        yuanyuan合: '袁绍&袁术',
                        simazhao合: '界司马昭',
                        simarui合: '界司马睿',
                        liuxiu合: '界刘秀',
                        liuche合: '界刘彻',
                        lishimin合: '界李世民',
                        lilongji合: '界李隆基',
                        zhangchunhua心狠手辣: '心狠手辣',
                        chensheng合: '界陈胜',
                        xiangyu合: '项羽',
                        fusu扶苏: '扶苏',
                        yingzheng嬴政yyzz: '嬴政',
                        yangjian合: '杨坚',
                        suiyangdi合: '隋杨广',
                        guojiafengxiao合: 'sp界郭嘉',
                        qinmi合: '界秦宓',
                        liubowen合: '刘基',
                        zhuyuanzhang合: '朱元璋',
                        zhugeliangwolong合: '界卧龙诸葛亮',
                        zhouyucb合: '界赤壁周瑜',
                        huanjiqishi幻击骑士: '幻击骑士',
                        liubangs合: '西汉高祖',
                        hanxinshen合: '国士无双',
                        shenqi神旗: '神旗',
                        guangxu合: '光绪',
                        chenduxiu合: '陈独秀',
                        kangxi合: '清帝康熙',
                        jifa合: '武王姬发',
                        jiangziya合: '吕望',
                        xwd合: '孝文帝',
                        liuyu合: '刘裕',
                        zhuquanzhong合: '朱全忠',
                        songjiang合: '宋江',
                        zhaokuangyin合: '赵匡胤',
                        agdkivaa: '阿骨打',
                        abj合: '阿保机',
                        liyh合: '李元昊',
                        tiemuzhen合: '成吉思汗',
                        sgsxiaosha合: '小杀',
                        liubangsp合: 'sp刘邦',
                        yingzheng嬴政yz: '嬴政',
                        xiahoushi合: '新夏侯氏',
                        wuwu合: '吴懿&吴苋',
                        masu合: '界马谡',
                        sunwukong合: '孙悟空',
                        jiabaoyu合: '贾宝玉',
                        Napoleon合: '拿破仑',
                        Caesar合: '凯撒大帝',
                        qinqiong合: '秦琼',
                        lukang合: '陆抗',
                        yanghu合: '羊祜',
                        menshishi合: '门矢士',
                        惊雷引: '惊雷引',
                        Genji: 'SP源氏_守望',
                        Hanzo: 'SP半藏_守望',
                        simalang合: '界司马朗',
                        'Caesar 2': '凯撒',
                        xunchen合: '荀谌',
                        xunyou合: '界荀攸',
                        lvbu合: '界吕布',
                        wangji合: '界王基',
                        machaoSP马超kiva: '界sp马超',
                        織田信長kiva: '织田信长',
                        豊臣秀吉kiva: '丰臣秀吉',
                        德川家康kiva: '德川家康',
                        liuyu2kiva: '界刘虞',
                        zuliu合: '祖逖＆刘琨',
                        bubu合: '布骘＆步练师',
                        xizhicai合: '界戏志才',
                        xiahoudunxiahouyuan夏侯惇渊: '夏侯惇渊',
                        maliang合: '界马良',
                        huangzhong星黄忠: '黄忠',
                        guyong合: '界顾雍',
                        liubiao合: '刘表',
                        宮本武蔵kiva: '宫本武藏',
                        liubei_魂_kiva: '魂_刘备',
                        caocao_魂_kiva: '魂_曹操',
                        simayi_魂_kiva: '魂_司马懿',
                        guanyusp合: '界sp关羽',
                        zhugeliangxin合: '新诸葛亮',
                        jinlongdisi金龙帝司: '金龙帝司',
                        zhongjiajuren重甲巨人: '重甲巨人',
                        安倍晴明kiva: '安倍晴明',
                        kongrong合: '孔融',
                        miheng合: '祢衡',
                        libai诗李白: '李白',
                        dufu杜甫df: '杜甫',
                        kivaqj: '千驹',
                        kivaqj_info: '觉醒技,准备阶段,若你的体力为1,你须减1点体力上限,并永久获得技能<冲阵>和<神速>.',
                        kivazj: '志继',
                        kivazj_info: '觉醒技,准备阶段,若你的体力为1,你须减1点体力上限,并永久获得技能<英姿>和<战绝>.',
                        kivagx: '观星',
                        kivagx_info: '觉醒技,准备阶段,若你的体力为1,你须减1点体力上限,并永久获得技能<无心>,"诈降"和<清捡>.',
                        kivajm: '绝谋',
                        kivajm_info: '每当你于摸牌阶段外获得牌时,你可以将其中任意牌以任意顺序交给其他角色,每回合最多发动四次',
                        kivabf: '北伐',
                        kivabf_info: '锁定技 每当你失去1点体力后,你摸三张牌.若此时是你的出牌阶段,则直到回合结束,你使用红色【杀】无距离限制且不能被【闪】响应,你可以额外使用一张【杀】.',
                        kivatc: '天策',
                        kivatc_info: '锁定技,你防止即将受到的伤害,改为流失一点体力;你不能成为其他角色的延时锦囊的目标',
                        kivall: '龙鳞',
                        kivall_info: '当你使用【杀】造成伤害后,你获得1个<梅影>标记;你可以移去1个<梅影>标记来发动<龙胆>并摸一张牌',
                        kivals: '冲阵',
                        kivals_info: '每当你发动<龙胆>使用或打出一张手牌时,你可以立即获得对方的一张手牌.',
                        kivaxh: '眩惑',
                        kivaxh_info: '觉醒技,准备阶段,若你的体力为1,你须减1点体力上限,并永久获得技能<礼让>和<诛杀>.',
                        kivazf: '智辅',
                        kivazf_info: '主公技,觉醒技,准备阶段,若你的体力是全场最少的(或之一),你须增加1点体力上限,回复1点体力,并永久获得技能<悲歌>.',
                        kivacy: '仇怨',
                        kivacy_info: '觉醒技,准备阶段,若你没有手牌,你须回复1点体力或摸两张牌,减1点体力上限,并永久获得技能<仇海>.',
                        援截: '援截',
                        援截_info: '你可以将一张黑色牌当[羊皮卷]使用',
                        kivazh: '忠汉',
                        kivazh_info: '觉醒技,当你进入濒死状态时,你减１点体力上限并将体力值回复至２点,获得技能矢北',
                        kivapj: '判决',
                        kivapj_info: '你可以将一张黑色牌当[皇家审判]使用',
                        kivakl: '开乱',
                        kivakl_info: '主公技,觉醒技,准备阶段,若你的体力是全场最少的(或之一),你须增加1点体力上限,回复1点体力,并永久获得技能<功獒>.',
                        kivawl: '武烈',
                        kivawl_info: '觉醒技,当你造成一次伤害后,若你已受伤,你须减1点体力上限,并获得技能<英魂>.',
                        kivacx: '藏玺',
                        kivacx_info: '觉醒技,准备阶段,若你的体力为1,你须减1点体力上限,并永久获得技能<不屈>和<仇海>.',
                        kivalb: '鲁班',
                        kivalb_info: '你可以将一张♦️️手牌当[闪电]使用',
                        kivaly: '鲁育',
                        kivaly_info: '你可以将一张黑色牌当[以逸待劳]使用',
                        kivadh: '大虎',
                        kivadh_info: '锁定技,击杀你的角色失去当前的所有技能直到游戏结束.',
                        kivaxh2: '小虎',
                        kivaxh2_info: '你死亡时,可以令一名其他角色(击杀你的角色除外)摸三张牌,令其回复1点体力.',
                        kivadl: '断粮',
                        kivadl_info: '出牌阶段限一次,你可以选择一项:将一张♠️️牌当做【兵粮寸断】使用;或弃置一张♠️️牌并弃置场上的一张【兵粮寸断】.选择完成后,你摸一张牌.',
                        kivays: '鹰视',
                        kivays_info: '当你受到伤害时,可以获得伤害来源的一张牌',
                        kivalg: '狼顾',
                        kivalg_info: '你可以将你的任意一张♠️️或♣️️手牌当【无懈可击】使用.',
                        kivajj: '决绝',
                        kivajj_info: '限定技.当你处于濒死状态时,你可以将手牌补至体力上限,体力回复至2点,不失去技能并获一堆技能',
                        kivagc: '鬼才',
                        kivagc_info: '任意一名角色的判定生效前,你可以打出一张红色牌替换之',
                        kivatzw: '太祖武',
                        kivatzw_info: '主公技,场上每有一名其他魏角色存活,你的手牌上限便+2.',
                        kivayx: '焰袭',
                        kivayx_info: '出牌阶段限一次,你的♦️️手牌可以当做炽羽袭使用',
                        kivalp: '雷破',
                        kivalp_info: '你可以将两张与你本回合以此法转化的花色均不相同的手牌当惊雷闪】使用,当一名已受伤的角色因响应此牌而打出【闪】时,该角色摸一张牌',
                        kivajh: '劫火',
                        kivajh_info: '你可以将一张红色牌当[趁火打劫]使用',
                        kivatj: '天劫',
                        kivatj_info: '你可以将一张黑色牌当【过河拆桥】使用;锁定技,在你的回合,其他角色因弃置或被弃置的锦囊牌,你获得之.',
                        kivasy: '烧营',
                        kivasy_info: '你可以将一张黑色牌当[火烧连营]使用',
                        kivalj: '龙杰',
                        kivalj_info: '锁定技,你的♥️️牌均视为♦️️',
                        kivasj: '逝吉',
                        kivasj_info: '当其他角色死亡后,你可以摸四张牌.若如此做,你获得负面技能中的任意一个:<崩坏>、 <无言>和<诛神>',
                        kivabw: '霸王',
                        kivabw_info: '主公技,吴势力角色可以替你打出[闪]',
                        kivazs: '诛神',
                        kivazs_info: '锁定技,当你使用锦囊牌时,你可以激昂的叫一下并失去1点体力.',
                        kivasx: '失心',
                        kivasx_info: '锁定技,每当一名角色死亡后,你失去一点体力上限,回复一点体力.',
                        kivagh: '蛊惑',
                        kivagh_info: '觉醒技,当你进入濒死状态时,你减１点体力上限并将体力值回复至２点,获得技能舍宴',
                        kivalz: '激战',
                        kivalz_info: '觉醒技,准备阶段,若你的体力为1,你须减1点体力上限,并永久获得技能<强袭>和<飞影>.',
                        kivabm: '白马',
                        kivabm_info: '周围2人拥有白马',
                        kivazrs: '战神',
                        kivazrs_info: '觉醒技,准备阶段,若你的体力为1,你须减1点体力上限,并永久获得技能<天义>,"激昂"和<替身>.',
                        kivasr: '失仁',
                        kivasr_info: '觉醒技,结束阶段,若你于此回合内造成过4点或更多伤害,失去"义从",从场上、牌堆或弃牌堆中获得【方天画戟】',
                        kivayc: '攸策',
                        kivayc_info: '出牌阶段,你可以将所有的手牌(至少一张)当做任意一张通常性锦囊牌使用,每阶段限一次.',
                        kivayj: '彧节',
                        kivayj_info: '你每受到1点伤害,可令任意一名角色将手牌补至其体力上限的张数(不能超过五张).',
                        kivahy: '汉裔',
                        kivahy_info: '主公技,限定技,当你进入濒死状态时,其他群势力角色可依次令你回复1点体力,这些角色依次受到1点伤害',
                        kivahz: '鸿姿',
                        kivahz_info: '锁定技,摸牌阶段摸牌时,你额外摸一张牌;你的手牌上限不会因体力值的减少而减少.',
                        kivahux: '虎啸',
                        kivahux_info: '锁定技,当你造成火焰伤害后,受到此伤害的角色各摸一张牌,本回合你对这些角色使用牌没有次数限制',
                        kivaxuj: '血祭',
                        kivaxuj_info: '出牌阶段限一次,你可以弃置一张红色牌,选择至多X名角色,横置这些角色并对其中一名角色造成1点火焰伤害.(X为你已损失的体力值数且至少为1)',
                        kivawuj: '武继',
                        kivawuj_info: '觉醒技,结束阶段,若你于此回合内造成过3点或更多伤害,你加1点体力上限并回复1点体力,失去"虎啸",从场上、牌堆或弃牌堆中获得【青龙偃月刀】',
                        kivayd: '隐盾',
                        kivayd_info: '你可以将一张黑色手牌当[闪]使用或打出',
                        kivatg: '天过',
                        kivatg_info: '每当你使用(指定目标后)或被使用(成为目标后)一张【无懈可击】或【闪】时,你可以摸一张牌.',
                        kivarc: '入曹',
                        kivarc_info: '觉醒技,当你造成一次伤害后,若你已受伤,你须减1点体力上限,并获得技能<无言>.',
                        kivaws: '魏诗',
                        kivaws_info: '觉醒技,准备阶段,若你的体力为1,你须减1点体力上限,并永久获得技能<行殇>和<奸雄>.',
                        kivazyx: '夜袭',
                        kivazyx_info: '每当你于回合外使用或打出一张手牌时,你可以亮出牌堆顶的一张牌,若此牌与你此次使用或打出的牌类别相同,你可以将之交给任意一名角色;若不同则你可以将之置入弃牌堆.',
                        kivaqw: '枪王',
                        kivaqw_info: '锁定技,回合开始时,若你的装备区里没有【银月枪】,你使用之;当你受到1点伤害后,若你的装备区里没有【银月枪】,你摸一张牌',
                        kivagz: '高祖',
                        kivagz_info: '锁定技,回合开始时,若你的装备区里没有【青釭剑】,你使用之;当你受到1点伤害后,若你的装备区里没有【青釭剑】,你摸一张牌',
                        神旗: '神旗',
                        神旗_info: '锁定技,你在回合结束后随机获得一个神势力角色的所有技能',
                        kivahcw: '楚王',
                        kivahcw_info: '锁定技,你在回合结束后随机获得一个蜀势力角色的所有技能',
                        kivaxcb: '成败',
                        kivaxcb_info: '锁定技,你在回合结束后随机获得一个吴势力角色的所有技能',
                        kivazzz: '择主',
                        kivazzz_info: '锁定技,你在回合结束后随机获得一个群势力角色的所有技能',
                        kivayxsyr: '驭人',
                        kivayxsyr_info: '出牌阶段,你可以弃置任意张牌并摸等量的牌,每阶段限1次',
                        kivacjsy: '神裔',
                        kivacjsy_info: '<font color=#F0F>被动技能</font>:在你的回合开始之前,你可以变身为<魏武大帝> 并摸取一张牌,失去护甲,再将体力值补满.',
                        kivacsy: '圣衣',
                        kivacsy_info: '锁定技,回合开始时,若你的装备区里没有【蓝格怪衣】,你使用之;当你受到1点伤害后,若你的装备区里没有【蓝格怪衣】,你摸一张牌',
                        kivacc: '参操',
                        kivacc_info: '觉醒技,准备阶段,若你的体力为1,永久获得技能<圣衣>和<神裔>.',
                        kivabd3: 'kivabd3',
                        kivabd3_info: '',
                        kivapxz: '破心',
                        kivapxz_info: '锁定技,你的♦️️牌均视为♣️️',
                        kivabd1: '北地',
                        kivabd1_info: '',
                        kivabd2: '北地',
                        kivabd2_info: '',
                        kivabd: '北地',
                        kivabd_info: '主动技,群势力角色可以帮你使用或打出[杀]',
                        kivast: '师徒',
                        kivast_info: '<font color=#F0F>被动技能</font>:在你的回合开始之前,你可以变身为<界诸葛亮> 并摸取一张牌,失去护甲,再将体力值补满.',
                        kivaffj: '辅将',
                        kivaffj_info: '<font color=#F0F>被动技能</font>:在你的回合开始之前,你可以变身为<高达云> 并摸取一张牌,失去护甲,再将体力值补满.',
                        kivahenshin: '变身_北地枪王',
                        kivahenshin_info: '<font color=#F0F>被动技能</font>:在你的回合开始之前,你可以变身为<北地枪王> 并摸取一张牌,失去护甲,再将体力值补满.',
                        kivazy: '忠吟',
                        kivazy_info: '摸牌阶段,你可以放弃摸牌,改为亮出牌堆顶的两张牌并获得之,若亮出的牌颜色不同,你获得技能<忠勇>、<龙吟>,直到回合结束.',
                        kivazbsm: '丈八',
                        kivazbsm_info: '锁定技,回合开始时,若你的装备区里没有【丈八蛇矛】,你使用之;当你受到1点伤害后,若你的装备区里没有【丈八蛇矛】,你摸一张牌',
                        kivaqlyyd: '青龙',
                        kivaqlyyd_info: '锁定技,回合开始时,若你的装备区里没有【青龙偃月刀】,你使用之;当你受到1点伤害后,若你的装备区里没有【青龙偃月刀】,你摸一张牌',
                        kiva3: '弟袭',
                        kiva3_info: '<font color=#F0F>被动技能</font>:在你的回合开始之前,你可以变身为<sp界张飞> 并摸取一张牌,失去护甲,再将体力值补满.',
                        kiva2: '兄谋',
                        kiva2_info: '<font color=#F0F>被动技能</font>:在你的回合开始之前,你可以变身为<sp界关羽> 并摸取一张牌,失去护甲,再将体力值补满.',
                        kivazx: '昭心',
                        kivazx_info: '<font color=#F0F>被动技能</font>:在你的回合开始之前,你可以变身为<sp界司马懿> 并摸取一张牌,失去护甲,再将体力值补满.',
                        kivasxk: '神兄',
                        kivasxk_info: '<font color=#F0F>被动技能</font>:在你的回合开始之前,你可以变身为<界孙策> 并摸取一张牌,失去护甲,再将体力值补满.',
                        kivawj: '稳极',
                        kivawj_info: '你可以将你的任意一张♠️️或♣️️手牌当【铁索连环】使用.',
                        kivazbz: '争辩',
                        kivazbz_info: '每当你使用一张【决斗】时,可以摸取一张牌.出牌阶段限一次,你可以将任意一张牌当【决斗】使用.',
                        kivatzb: '天照',
                        kivatzb_info: '你可以将你的任意一张♦️️手牌当【五谷丰登】使用.',
                        kivaszb: '泉佑',
                        kivaszb_info: '每当体力值为1的一名其他角色受到伤害时,你可以将武将牌翻面并弃置一张装备牌,防止此伤害.',
                        kivaft: '附体',
                        kivaft_info: '<font color=#F0F>被动技能</font>:在你的回合开始之前,你可以变身为<界马云禄> 并摸取一张桃,失去护甲,再将体力值补满.',
                        kivagwd: '光武',
                        kivagwd_info: '限定技,回合开始时,你可以移去所有<梅影>标记,随机观看五名未登场的漢势力角色,将武将牌替换为其中一名角色,并将体力上限数调整为本局游戏中移去<梅影>标记的数量(至多为游戏开始时的角色数),若你是体力值最低的角色,你回复1点体力',
                        kivajww: '君威',
                        kivajww_info: '锁定技,摸牌阶段摸牌时,你额外摸3张牌;你的手牌上限不会因体力值的减少而减少.',
                        kivadll: '大略',
                        kivadll_info: '结束阶段,你可以将手牌数补至X,X为现存的势力数',
                        kivaxc: '雄才',
                        kivaxc_info: '锁定技,摸牌阶段摸牌时,你额外摸一张牌;你的手牌上限不会因体力值的减少而减少.',
                        kivafj: '复晋',
                        kivafj_info: '当其他角色的♣️️牌,因弃牌或判定而进入弃牌堆时,你可以获得之.',
                        kivajjjjjjj: '晋劫',
                        kivajjjjjjj_info: '出牌阶段限一次,你可以选择一项:将一张♣️️牌当做【草木皆兵】使用;或弃置一张♣️️牌并弃置场上的一张【草木皆兵】.选择完成后,你摸一张牌.',
                        kivalyw: '琅琊王',
                        kivalyw_info: '主公技,觉醒技,准备阶段,若你的体力是全场最少的(或之一),你须增加1点体力上限,回复1点体力,并永久获得技能<王马>.',
                        kivawjsm: '王马',
                        kivawjsm_info: '锁定技,你的手牌上限为你的体力上限;当你的手牌数小于体力上限时,你不能成为过河拆桥或顺手牵羊的目标;当你的手牌数大于体力上限时,你不能成为乐不思蜀的目标',
                        kivasjj: '弑君',
                        kivasjj_info: '觉醒技,准备阶段开始时,若你已受伤且体力上限大于存活角色数,你须将手牌摸至体力上限,失去2体力,获得技能<崩坏>和<懿心>.',
                        kivayxx: '懿心',
                        kivayxx_info: '<font color=#F0F>被动技能</font>:在你的回合开始之前,你可以变身为<加强版sp界司马懿> 并摸取一张牌,失去护甲,再将体力值补满.',
                        kivazxlx: '中心',
                        kivazxlx_info: '主公技,觉醒技,准备阶段,若你的体力是全场最少的(或之一),你须增加1点体力上限,回复1点体力,并永久获得技能<篡莽>.',
                        kivazmm: '篡莽',
                        kivazmm_info: '锁定技,若你未装备武器,你使用【杀】指定的目标数上限+2,次数上限+1',
                        kivaht: '鸿态',
                        kivaht_info: '锁定技,摸牌阶段摸牌时,你额外摸一张牌;你的手牌上限不会因体力值的减少而减少.',
                        kivasd: '水得',
                        kivasd_info: '结束阶段,你可以摸两张牌',
                        kivakyss: '开元',
                        kivakyss_info: '限定技,准备阶段开始时,你可以失去技能<控局>,加1点体力上限并回复1点体力,并获得技能<鸿态><失态><水得>,最后让一名角色摸三张牌.',
                        kivastl: '失态',
                        kivastl_info: '觉醒技,准备阶段,若你的体力为1,你须增加1点体力上限,并永久获得技能<控局>和<安史>,并失去<水得>,<鸿态>.',
                        kivaaszl: '安史',
                        kivaaszl_info: '锁定技,当你受到一次黑色【杀】或【酒】【杀】造成的伤害后,须减1点体力上限',
                        kivasssssss: '伤逝',
                        kivasssssss_info: '出牌阶段限三次,你可以选择一项:将一张♦️️牌当做【乐不思蜀】使用;或弃置一张♦️️牌并弃置场上的一张【乐不思蜀】.选择完成后,你摸两张牌,并增加1体力上限和回复一点体力,如果你没有<绝情>,则获得之,如果你有<暗助>,则失去.',
                        kivalx: '乱心',
                        kivalx_info: '锁定技,当你受到一次黑色【杀】或【酒】【杀】造成的伤害后,须减2点体力上限',
                        kivaaz: '暗助',
                        kivaaz_info: '结束阶段,你可以摸四张牌',
                        kivajr1: '-1s',
                        kivajr1_info: '将一张♦️️牌当做【乐不思蜀】使用】',
                        kivaj1: '+1s',
                        kivaj1_info: '弃置一张♦️️牌并弃置场上的一张【乐不思蜀】',
                        kivayjc: '遗计',
                        kivayjc_info: '当你死亡后,你可以令一名角色随机获得<遗天鬼馈>其中一个技能,直到其下回合开始,其不能被选择为其他角色使用♣️️牌的目标',
                        kivaty: '天遗',
                        kivaty_info: '每当你受到一点伤害,可以观看牌堆顶的一张牌,并将其交给任意1名角色',
                        kivaqyc: '起义',
                        kivaqyc_info: '摸牌阶段,你可以改为从1~2名其他角色各抽取一张手牌',
                        kivazzc: '张楚',
                        kivazzc_info: '每当一名角色的武将牌翻面或横置时,你可以令其回一滴血.',
                        kivaqmqy: '秦末',
                        kivaqmqy_info: '限定技,回合结束后,你可以获得技能<恃勇>,加1点体力上限并回复1点体力,再令一名角色获得技能<吴广>.',
                        kivawgz: '吴广',
                        kivawgz_info: '出牌阶段限一次,你可以弃置至少一张手牌并选择一名其他角色,该角色需弃置一张与你弃置的牌类别均不同的手牌,否则其先将其武将牌翻面再摸X张牌(X为你以此法弃置的手牌数量).',
                        kivabwxy: '霸王',
                        kivabwxy_info: '回合开始阶段,你可以摸一张牌,并失去<仁心>,<西楚>并获得<天义>,<无双.>',
                        kivaxcxy: '西楚',
                        kivaxcxy_info: '结束阶段,你可以摸一张,并失去技能<马术>,<霸王>,并获得<激昂>,<慷慨>.',
                        kivagou: '苟...',
                        kivagou_info: '苟利国家生死以,岂因祸福趋避之.',
                        kivash: '始皇',
                        kivash_info: '结束阶段,你可以将手牌数补至X,X为现存的势力数',
                        kivadz: '帝尊',
                        kivadz_info: '摸牌阶段,你可从1~7名其他角色各抽取一张手牌,并获得一张惊雷闪',
                        kivajsh: '尽河',
                        kivajsh_info: '你死亡时,可以令一名其他角色(击杀你的角色)获得崩坏.',
                        kivakh: '开皇',
                        kivakh_info: '缘,妙不可言...',
                        扶谏: '扶谏',
                        扶谏_info: '出牌阶段,你可以交给任一其他角色一张非锦囊牌,该角色视为对其攻击范围内的另一名由你指定的角色使用一张【万箭齐发】你摸两张牌.每回合限一次.',
                        'kivaFa♂': 'FA♂',
                        'kivaFa♂_info': '',
                        kivamo: '膜',
                        kivamo_info: '',
                        kivanian: '念诗',
                        kivanian_info: '',
                        kivasxx: '生息',
                        kivasxx_info: '弃牌阶段结束后,你可以抽取1名其他角色的手牌',
                        kivajyy: '谏言',
                        kivajyy_info: '限定技,当你受到伤害后,你可令一名其他男性角色获得天义,若该角色的武将牌上有主公技且其不为主公,其获得此主公技',
                        kivagy: '归隐',
                        kivagy_info: '锁定技,当你没有手牌时,不能成为[杀]或[决斗]或[AOE]的目标',
                        kivazb: '占卜',
                        kivazb_info: '结束阶段,你可以观看牌堆顶的x张牌,并将其以任意顺序置于牌堆项或牌堆底,x为存活角色个数且不超过5',
                        kivaqy: '强运',
                        kivaqy_info: '每当你失去最后一张手牌,可摸三张牌',
                        kivalm: '亮谋',
                        kivalm_info: '锁定技,若你的体力值为3或更少,你视为拥有以下技能',
                        kivayr: '瑜燃',
                        kivayr_info: '锁定技,若你的体力值为3或更少,你视为拥有以下技能',
                        kivaccjj: '爵迹',
                        kivaccjj_info: '每当你距离4以内的角色成为杀的目标后,你可以摸三张牌.若如此做,你交给其4张牌并展示之,若该牌为装备牌,该角色可以使用此牌.',
                        kivacctc: '铁策',
                        kivacctc_info: '锁定技,你失去毒时不流失体力;你使用毒时摸牌并获得奇袭;结束阶段,你将一张随机手牌转化为毒',
                        kivacclj: '龙技',
                        kivacclj_info: '锁定技,当你受到一次红色【杀】或【酒】【杀】造成的伤害后,须加1点体力上限,并获得技能<魔血>.',
                        kivacccl: '策逻',
                        kivacccl_info: '每当你受到一次伤害,你可以将一张兵粮寸断置入伤害来源的判定区',
                        kivaccjs: '皆锁',
                        kivaccjs_info: '锁定技,结束阶段,你解除横置状态,除你之外的所有角色进入横置状态',
                        kivatl: '谈利',
                        kivatl_info: '你可以将一张装备区内的牌当作顺手牵羊使用',
                        kivags: '国士',
                        kivags_info: '锁定技,你的进攻距离+5',
                        kivayys: '因势',
                        kivayys_info: '当你没有武器时,你杀次数+1,顺手可多1目标',
                        神避: '神避',
                        神避_info: '你无法成为顺手牵羊、乐不思蜀、兵粮寸断、过河拆桥、杀、南蛮入侵、万箭齐发、决斗的目标.',
                        kivawm: '王命',
                        kivawm_info: '锁定技,游戏的第一个回合开始前,你加X点体力上限和体力(X为全场势力数);当一名角色死亡后,若没有与其势力相同的角色,你减1点体力上限',
                        kivaxwx: '维新',
                        kivaxwx_info: '<font color=#F0F>戊戌维新</font>',
                        kivaxxx: '戊戌',
                        kivaxxx_info: '结束阶段,若你的体力不是全场最少的(或之一),你须减1点体力或体力上限.',
                        kivaxbr100: '百日',
                        kivaxbr100_info: '锁定技,每当你的体力上限增加或减少时,你摸两张牌.',
                        kivadzx: '毒宗',
                        kivadzx_info: '锁定技,当你的距离内角色被杀后,你可以观看牌堆的X张牌(X为场上存活人数)并且任意移动Y张牌(Y为你当前体力值)',
                        kivadxx: '独秀',
                        kivadxx_info: '每当你受到一点伤害,可以观看牌堆顶的一张牌,并将其交给任意1名角色',
                        kivakqq: '康乾',
                        kivakqq_info: '限定技,当你受到伤害后,你可令一名其他男性角色过得技能乾隆,若该角色的武将牌上有主公技且其不为主公,其获得此主公技',
                        kivakyq: '康雍',
                        kivakyq_info: '限定技,让一名角色获得技能雍正',
                        kivakxq: '康熙',
                        kivakxq_info: '锁定技,摸牌阶段摸牌时,你额外摸一张牌;你的手牌上限不会因体力值的减少而减少.',
                        kivayzq: '雍正',
                        kivayzq_info: '出牌阶段,你使用[杀]无数量限制',
                        kivaqlq: '乾隆',
                        kivaqlq_info: '英魂突袭询询闭月战绝仇海',
                        kivawwm: '武王',
                        kivawwm_info: '锁定技,当你使用桃后,你可以观看牌堆的X张牌(X为场上存活人数)并且任意移动Y张牌(Y为你当前体力值)',
                        kivazsm: '周世',
                        kivazsm_info: '当一名角色于其出牌阶段内回复体力时,你可以选择一项:1、摸一张牌;2、令该角色摸一张牌 ',
                        kivaxfm: '雄风',
                        kivaxfm_info: '锁定技,摸牌阶段摸牌时,你额外摸一张牌;你的手牌上限不会因体力值的减少而减少.',
                        kivasgm: '神功',
                        kivasgm_info: '你可以将你的任意一张♠️️或♣️️手牌当【桃】使用.',
                        kivajlm: '聚雷',
                        kivajlm_info: '锁定技,你的♦️️,♥️️牌均视为♥️️',
                        kivaqd: '迁都',
                        kivaqd_info: '你每受到1点伤害,可令任意一名角色将手牌补至其体力上限的张数(不能超过五张).',
                        kivassd: '弑帝',
                        kivassd_info: '基本没有动的了你的',
                        kivajjn: '劫君',
                        kivajjn_info: '出牌阶段限九百九十九次,你可以展示一张黑色锦囊牌并将之置于牌堆顶,令有手牌的一名其他角色选择一项:弃置一张锦囊牌;或弃置两张非锦囊牌',
                        kivascl: '疏财',
                        kivascl_info: '仁德的疏财,明鉴全世界!',
                        kivalss: '梁山',
                        kivalss_info: '限定技,当你受到伤害后,你可令一名其他女性角色获得技能问卦,若该角色的武将牌上有主公技且其不为主公,其获得此主公技',
                        kivajqq: '集权',
                        kivajqq_info: '你不能成为♥️️或♦️️锦囊的目标.',
                        kivaqsj: '骑射',
                        kivaqsj_info: '锁定技,你的进攻距离+100',
                        kivagold: '金德',
                        kivagold_info: '【南蛮入侵】对你无效;你是任何【南蛮入侵】造成伤害的来源,并总有战绝',
                        kivaxss: '小杀',
                        kivaxss_info: '锁定技,每回合总有飞龙夺凤和太平道术,受到伤害摸1牌',
                        kivarqq: '热情',
                        kivarqq_info: '锁定技 每当你失去1点体力后,你回1血,如果你有绝情,则失去之.',
                        kivaxss1: '小杀',
                        kivaxss1_info: '锁定技,回合开始时,若你的装备区里没有【飞龙夺凤】,你使用之;当你受到1点伤害后,若你的装备区里没有【飞龙夺凤】,你如果另外武将总有绝情(张春华),则失去绝情',
                        kivaxss2: '小杀',
                        kivaxss2_info: '锁定技,回合开始时,若你的装备区里没有【太平要术】,你使用之;当你受到1点伤害后,若你的装备区里没有【八卦阵】,你摸一张牌',
                        kivaxss3: '小杀',
                        kivaxss3_info: '每当你受到一点伤害,可以观看牌堆顶的一张牌,并将其交给任意1名角色',
                        kivatxx: '天秀',
                        kivatxx_info: '1.当你受到1点伤害后,你可以将一张牌置于武将牌上,称为<秀>.2.准备阶段开始时,若你的武将牌上有<秀>,你移去所有<秀>,摸2X张牌,你于此回合的出牌阶段内使用【杀】的次数上限+X(X为你此次移去的<秀>数)',
                        kivayryr: '驭人',
                        kivayryr_info: '出牌阶段,你可以弃置任意张牌并摸等量的牌,每阶段限2次',
                        kivasxsx: '生息',
                        kivasxsx_info: '结束阶段,你可以摸一张牌并让一名角色获得【牛车】.',
                        kivaqhh: '秦皇',
                        kivaqhh_info: '出牌阶段,你可以弃置1-4牌并摸等量的牌,并让一名角色获得技能马术和飞影,每阶段限1次',
                        kivadww: '帝威',
                        kivadww_info: '结束阶段,你可以弃置一张红色牌,若如此做,你可以在下个准备阶段令一名距离1以内的角色回复一点体力或摸两张牌',
                        kivadwwshow: '帝威',
                        kivadwwshow_info: '',
                        kivazyy: '昭月',
                        kivazyy_info: '摸牌阶段开始时,你可以跳过出牌和弃牌阶段,获得若干张杀直到你的手牌数等于你的体值(最多为5)',
                        kivancnc: '牛车',
                        kivancnc_info: '锁定技,你的攻防距离+1.',
                        kivadzsf: '斗战',
                        kivadzsf_info: '出牌阶段,你可以将所有的手牌(至少一张)当做决斗或知己知彼使用,每阶段限两次;出牌阶段,你可以将所有的手牌(至少一张)当做决斗或知己知彼使用,每阶段限两次;锁定技,你不能成为[控制系]和[坑将系]的目标;锁定技,回合开始时,若你的装备区里没有【金箍棒】,你使用之;当你受到1点伤害后,若你的装备区里没有【金箍棒】,你增加一点护甲并失去一点体力;锁定技,每当你击杀一名角色,你可以多行动一个回合.',
                        kivaqtds: '齐天',
                        kivaqtds_info: '锁定技,你的【桃】均视为【杀】;结束阶段,你可以加一点护甲',
                        kivang: '闹宫',
                        kivang_info: '限定技,准备阶段开始时,你可以失去技能<齐天>,加1点体力上限并回复1点体力,再令一名角色失去一点体力.',
                        kivadzsf1: '斗战',
                        kivadzsf1_info: '出牌阶段,你可以将所有的手牌(至少一张)当做决斗或知己知彼使用,每阶段限两次.',
                        kivadzsf2: '斗战',
                        kivadzsf2_info: '锁定技,你使用的【杀】或【决斗】需要两张【闪】或【杀】响应',
                        kivaqtds1: '齐天',
                        kivaqtds1_info: '锁定技,你的【桃】均视为【杀】',
                        kivaqtds2: '齐天',
                        kivaqtds2_info: '结束阶段,你可以加一点护甲',
                        kivadzsf3: '斗战',
                        kivadzsf3_info: '锁定技,你不能成为[控制系]和[坑将系]的目标',
                        kivaswjj: '金睛',
                        kivaswjj_info: '每当你使用(指定目标后)或被使用(成为目标后)一张【决斗】或【知己知彼】时,你可以摸一张牌.',
                        kivadzsf4: '斗战(金箍)',
                        kivadzsf4_info: '锁定技,回合开始时,若你的装备区里没有【金箍棒】,你使用之;当你受到1点伤害后,若你的装备区里没有【金箍棒】,你增加一点护甲并失去一点体力',
                        kivajyjy1: '激扬',
                        kivajyjy1_info: '',
                        kivahyhy2: '火眼',
                        kivahyhy2_info: '出牌阶段,可令除你外的所有角色依次对与其距离最近的另一名角色使用一张【杀】,无法如此做者获得技能定神.',
                        kivadsdsds: '定神',
                        kivadsdsds_info: '锁定技,你始终展示手牌',
                        kivaswjj1: '金睛',
                        kivaswjj1_info: '',
                        kivaswjj2: '金睛',
                        kivaswjj2_info: '',
                        kivaby: '宝玉',
                        kivaby_info: '锁定技,回合开始时,若你的装备区里没有【女娲石】,你使用之;当你受到1点伤害后,若你的装备区里没有【女娲石】,你失去一点体力上限并回1血',
                        kivawz: '武征',
                        kivawz_info: '<font color=#000000>法</font><font color=#898936>罗马</font>出牌阶段,你可以弃置两张牌并选择1名角色,你与其各失去一至二点体力,每阶段限一次',
                        双锏: '双锏',
                        双锏_info: '锁定技,回合开始时,若你的装备区里没有【瓦面金装锏】,你使用之;当你受到1点伤害后,若你的装备区里没有【瓦面金装锏】,你摸一张牌',
                        kivawam: '瓦面',
                        kivawam_info: '锁定技:每当你的装备区有武器时,你使用【杀】指定一个目标后,该角色需要依次使用三张【闪】才能抵消此【杀】',
                        金装: '金装',
                        金装_info: '锁定技,若你的体力值为3,你视为装备<青釭剑>;若你的体力值为2;你视为装备<锐甲盾>;若你的体力值为1,你视为装备红莲护甲、近卫盾甲、反伤刺甲.',
                        秦琼: '秦琼',
                        秦琼_info: '锁定技,回合开始时,若你的装备区里没有【瓦面金装锏】,你使用之;当你受到1点伤害后,若你的装备区里没有【瓦面金装锏】,你摸一张牌;锁定技:每当你的装备区有武器时,你使用【杀】指定一个目标后,该角色需要依次使用三张【闪】才能抵消此【杀】;锁定技,若你的体力值为3,你视为拥有技能<短兵>;若你的体力值为2;你视为拥有技能<完杀>;若你的体力值为1,你视为拥有技能<英姿,突袭,马术>.',
                        kiva100: '奋竜',
                        kiva100_info: '你使用【杀】可以多选择一名距离为1的角色为目标;锁定技,你的进攻距离+1',
                        kiva102: '不悔',
                        kiva102_info: '锁定技,你不能成为[杀]和[桃]的目标',
                        kiva104: '妖主',
                        kiva104_info: '出牌阶段,你可以弃置3-无限并选择1名角色,摸X牌并使其获得不悔,铜雀,重义之证之一(X为玩家血量)',
                        kiva106: '铜雀',
                        kiva106_info: '锁定技,你不能成为[酒]和[铁索连环]的目标',
                        kiva108: '重义',
                        kiva108_info: '每当你失去最后一张手牌,可摸X张牌(X为玩家血量)',
                        测试: '测试',
                        测试_info: '每当你使用或打出一张【闪】,可令任意一名角色进行一次判定,若结果为♣️️,其受到一点雷电伤害,你回复一点体力;若结果为♠️️,其受到两点雷电伤害',
                        kiva109: '烈酒',
                        kiva109_info: '锁定技:你的酒没有次数限制',
                        kiva110: '烈酒',
                        kiva110_info: '你可以将你的任意一张♠️️或♣️️手牌当【酒】使用.',
                        kiva111: '烈酒',
                        kiva111_info: '锁定技:你的酒没有次数限制;你可以将你的任意一张♠️️或♣️️手牌当【酒】使用.',
                        kiva116: '龙剑道,来神!',
                        kiva116_info: '锁定技,你可以用1张手牌获得一点护甲,每回合限一次',
                        kiva117: '雷鸣',
                        kiva117_info: '锁定技,你造成的伤害均视为具有雷属性',
                        kivaleishen: '雷神天明闪',
                        kivaleishen_info: '当你使用杀或被杀指定,你可以判定,若结果为:黑色,你弃置一名角色区域里的一张牌;红色,你选择一名角色,其摸一张惊雷闪,若其是<先辅>选择的角色,改为其摸三张毒液循环',
                        紫晶: '紫晶',
                        紫晶_info: '结束阶段,你可以回复2点体力并翻面',
                        kivaweiyan: '围堰',
                        kivaweiyan_info: '锁定技,你的进攻距离+1',
                        kivagongxin: '攻心',
                        kivagongxin_info: '出牌阶段,你多摸一张牌并对一名角色使用知己知彼',
                        kivagongxin2: '攻心',
                        kivagongxin2_info: '',
                        kivahuairou: '怀柔',
                        kivahuairou_info: '每当你失去最后一张手牌,可回一滴血;限定技,出牌阶段,你可以对一至三名角色造成至多共3点雷电伤害(你可以任意分配每名目标角色受到的伤害点数),若你将对一名角色分配2点或更多的雷电伤害,你须先弃置四张不同花色的手牌再失去3点体力;锁定技,你视为拥有技能鬼才和鬼道',
                        kivasha_df: '都风',
                        kivasha_df_info: '锁定技,你使用杀可以摸一张牌并获得技能谦逊和连营',
                        kivajiu_df: '都风',
                        kivajiu_df_info: '锁定技,你使用酒可以摸一张牌并获得技能业炎和英姿',
                        kivatao_df: '都风',
                        kivatao_df_info: '锁定技,你使用桃可以摸一张牌并获得技能攻心',
                        kivashan_df: '都风',
                        kivashan_df_info: '锁定技,你使用闪可以摸一张牌并获得技能缔盟',
                        kivadu_df: '都风',
                        kivadu_df_info: '锁定技,你使用毒可以回复一点体力摸一张牌并获得技能围堰',
                        kivadufeng: '都风',
                        kivadufeng_info: '锁定技,你使用杀可以摸一张牌并获得技能谦逊和连营;锁定技,你使用酒可以摸一张牌并获得技能业炎和英姿;锁定技,你使用桃可以摸一张牌并获得技能攻心;锁定技,你使用闪可以摸一张牌并获得技能缔盟;锁定技,你使用毒可以回复一点体力摸一张牌并获得技能围堰.',
                        kivarecover_hr: '怀柔',
                        kivarecover_hr_info: '每当你失去最后一张手牌,可回一滴血',
                        kivadamage_hr: '怀柔',
                        kivadamage_hr_info: '限定技,出牌阶段,你可以对一至三名角色造成至多共3点雷电伤害(你可以任意分配每名目标角色受到的伤害点数),若你将对一名角色分配2点或更多的雷电伤害,你须先弃置四张不同花色的手牌再失去3点体力.',
                        kivaBlade: '剑卡',
                        kivaBlade_info: '锁定技:每当你的装备区有武器时,你使用【杀】指定一个目标后,该角色需要依次使用两张【闪】才能抵消此【杀】',
                        kivaRyuki: '龙击',
                        kivaRyuki_info: '当你对距离1以内的一名角色造成1点伤害后,你可以回复1点体力或摸一张牌',
                        门士: '门士',
                        门士_info: '出牌阶段,你可以变成惊雷引并摸一张牌,每回合限一次.',
                        门矢: '门矢',
                        门矢_info: '将一张黑色手牌当流放之诏使用,每回合限一次',
                        门士4: '门士',
                        门士4_info: '锁定技,回合开始时,若你的装备区里没有【古青铜纹】,你使用之;当你受到1点伤害后,若你的装备区里没有【古青铜纹】,你摸一张牌',
                        kivaquka: '取卡',
                        kivaquka_info: '准备阶段,你可以摸一张卡牌',
                        jueshakiva: '绝杀',
                        jueshakiva_info: '你可以令一名失去3点体力,失去50点体力上限',
                        dragonkiva: '龙斩',
                        dragonkiva_info: '若你在一回合内击杀了至少一名角色,此回合结束后,你可以进行一个额外的回合.',
                        kivajiaxi: '甲袭',
                        kivajiaxi_info: '锁定技,你根据装备区里牌的花色数获得以下技能:1种或以上-武圣;2种或以上-旋风;3种或以上-英姿;4种-神速',
                        juepokiva: '绝破',
                        juepokiva_info: '在你的回合,除你以外,只有处于濒死状态的角色才能使用【桃】.',
                        kivalongyi: '龙一文字',
                        kivalongyi_info: '每当你使用的【杀】被目标角色使用的【闪】抵消时,你可以对其使用一张【杀】(无距离限制).',
                        kivayuanshe: '远射',
                        kivayuanshe_info: '你可以将一张装备区内的牌当作万箭齐发使用',
                        longhukiva: '龙护',
                        longhukiva_info: '在你的回合,除你以外,只有处于濒死状态的角色才能使用【桃】.',
                        kivatxx3: '天秀',
                        kivatxx3_info: '',
                        kivatxx2: '天秀',
                        kivatxx2_info: '',
                        kivajunbing: '郡兵',
                        kivajunbing_info: '一名角色的结束阶段开始时,若其手牌数少于或者等于1,该角色可以摸一张牌.若如此做,该角色须将所有手牌交给你,你交给其等量的牌.',
                        kivaquji: '去疾',
                        kivaquji_info: '出牌阶段限一次,你可以弃置X张牌(X为你已损失的体力值),令至多X名已受伤的角色各回复1点体力并摸一张牌.若你以此法弃置的牌中有黑色牌,你失去一点体力并摸一张牌.',
                        kivajunbing2: '郡兵',
                        kivajunbing2_info: '',
                        kivazhengfu: '征服',
                        kivazhengfu_info: '你可以将一张红色牌当[杀]使用',
                        kivaxiaozhan: '骁战',
                        kivaxiaozhan_info: '每当你发动<征服>使用或打出一张手牌时,你可以立即获得对方的一张牌.',
                        kivaxiaozhan1: '骁战',
                        kivaxiaozhan1_info: '',
                        kivaxiaozhan2: '骁战',
                        kivaxiaozhan2_info: '',
                        kivafenglue: '锋略',
                        kivafenglue_info: '每当你受到伤害后,你可以令一名角色进行一次判定,若结果为红色,该角色摸3张牌;若结果为黑色,该角色摸2张牌,你摸1张牌',
                        kivamoushi: '谋识',
                        kivamoushi_info: '其他角色使用或打出牌响应你使用的牌时,你可令其获得你使用的牌(其本回合不能使用或打出这张牌),你获得其使用或打出的牌',
                        kivaliangmou: '良谋',
                        kivaliangmou_info: '锁定技,你造成的伤害均视为具有毒属性',
                        kivashiquan: '嗜痊',
                        kivashiquan_info: '锁定技,每当一名角色死亡后,你摸一张牌,回复一点体力,并获得一轮智愚.',
                        kivaqiongtu: '穷途',
                        kivaqiongtu_info: '锁定技,若你的体力值大于或等于3:你拥有技能"无双";若你的体力值小于或等于3:你拥有技能"酒池".',
                        kivabaoli: '暴戾',
                        kivabaoli_info: '主公技,其他群雄角色的出牌阶段限一次,可交给你一张♠️️或【杀】.',
                        kivabaoli2: '暴戾',
                        kivabaoli2_info: '',
                        kivajinqu: '进趋',
                        kivajinqu_info: '结束阶段开始时,你可以摸X张牌,若如此做,你将手牌弃置至Y张(X为你的血量,Y为你于此回合发动过<奇制>的次数)',
                        kivacanshi: '蚕食',
                        kivacanshi_info: '锁定技,出牌开始阶段,你视为使用一张诱饵',
                        kivashichou: '新誓仇',
                        kivashichou_info: '主动技,你的杀可以多指定X名目标.(X为损失血量)',
                        kivazhuiji: '新追击',
                        kivazhuiji_info: '你可以大杀四方',
                        kivazhuiji1: '追击',
                        kivazhuiji1_info: '锁定技,你的进攻距离+1',
                        kivazhuiji2: '追击',
                        kivazhuiji2_info: '锁定技,你的进攻距离+2',
                        kivazhuiji3: '追击',
                        kivazhuiji3_info: '锁定技,你的进攻距离+7',
                        kivashichou1: '誓仇',
                        kivashichou1_info: '你使用【杀】可以多选择一名距离为1的角色为目标',
                        kivashichou2: '誓仇',
                        kivashichou2_info: '你使用【杀】可以多选择一名距离为1的角色为目标',
                        kivashichou3: '誓仇',
                        kivashichou3_info: '你使用【杀】可以多选择一名距离为1的角色为目标',
                        kivamiyin: '秘隐',
                        kivamiyin_info: '你死亡时,可以让一名角色摸三张牌,令其获得技能【谋识】',
                        kivayewang: '野望',
                        kivayewang_info: '你可以立即获得对你造成伤害的牌并加上攻击力一下',
                        kivabuwu: '布武',
                        kivabuwu_info: '锁定技,你造成伤害后,你摸一张牌',
                        kivayewang1: '野望',
                        kivayewang1_info: '锁定技,你造成的伤害+1',
                        kivazhichen: '织臣',
                        kivazhichen_info: '出牌阶段,你可以将任意手牌送给其他角色,若送出的手牌不少于两张,你回复一点体力;每当你对其他角色造成1点伤害后,或受到其他角色造成的1点伤害后,你可与该角色各摸一张牌.',
                        kivaduoquan: '夺权',
                        kivaduoquan_info: '限定技.当你处于濒死状态时,你可以将手牌补至体力上限,体力回复至2点,不失去技能并获一堆技能',
                        kivafengchen: '丰臣',
                        kivafengchen_info: '出牌阶段,你可以弃置四张牌并摸四张牌,每阶段限1次',
                        kivayinren1: '隐忍',
                        kivayinren1_info: '黑色的杀对你无效',
                        kivayinren2: '隐忍',
                        kivayinren2_info: '',
                        kivayinren: '隐忍',
                        kivayinren_info: '出牌阶段,你可以将任意手牌送给其他角色,若送出的手牌不少于两张,你回复一点体力;每当你对其他角色造成1点伤害后,或受到其他角色造成的1点伤害后,你可与该角色各摸一张牌.',
                        kivamujiang: '幕将',
                        kivamujiang_info: '其他角色的结束阶段开始时,你可以弃置一张基本牌,令该角色选择一项:1.弃置一张装备牌并令你摸一张牌,失去技能隐忍并获得技能将军;2.受到你对其造成的1点伤害.',
                        kivajiangjun: '将军',
                        kivajiangjun_info: '锁定技,摸牌阶段摸牌时,你额外摸一张牌;你的手牌上限不会因体力值的减少而减少;出牌阶段,你使用[杀]无数量限制;你可以将【杀】当雷【杀】使用.',
                        云岳斧3: '云岳斧',
                        云岳斧3_info: '准备阶段,你可以视为使用一张无视距离的杀',
                        云岳斧: '云岳斧',
                        云岳斧_info: '准备阶段,你可以视为使用一张无视距离的杀,受到伤害后,你下次造成的伤害+1',
                        云岳斧2: '云岳斧',
                        云岳斧2_info: '锁定技,你造成的伤害+1',
                        kivakunzhong: '困忠',
                        kivakunzhong_info: '你死亡时,可以将所有牌交给一名其他角色,令其获得技能【天命】',
                        kivabeifa: '北伐',
                        kivabeifa_info: '摸牌阶段,你可以改为从牌堆顶亮出五张牌,你获得不同花色的牌各一张',
                        kivawenji: '闻鸡',
                        kivawenji_info: '每当你成为其他角色的红色牌的目标,可以弃置一张杀并摸两张牌',
                        kivatiancai: ' 天才',
                        kivatiancai_info: '摸牌阶段开始时,你可以选择一项:1.手牌上限+1,本回合你的牌不能对其他角色使用;2.回复1点体力,本回合你的牌不能对自己使用',
                        kivachouce: '筹策',
                        kivachouce_info: '当你受到1点伤害后,你可以判定,若结果为:黑色,你摸一张牌并弃置一名角色区域里的一张牌;红色,你选择一名角色,其摸一张牌,若其是<先辅>选择的角色,改为其回一点血',
                        kivatiandu: '天妒',
                        kivatiandu_info: '你可以立即获得你的判定牌',
                        kivayuanlue: '远略',
                        kivayuanlue_info: '锁定技,每当你造成一点伤害,你摸一张牌',
                        kivaliyuan: '离袁',
                        kivaliyuan_info: '锁定技,你的手牌上限-2',
                        kivayingyuan: '应援',
                        kivayingyuan_info: '当一名角色使用杀时,你可以被铁锁并摸一张牌',
                        kivayingyuan2: '应援',
                        kivayingyuan2_info: '每当一名角色的摸牌阶段结束时,你可以使用一张杀',
                        kivayingyuan3: '应援',
                        kivayingyuan3_info: '当一名角色使用杀时,你可以横置武将牌或者重置武将牌并摸一张牌;每当一名角色的摸牌阶段结束时,你可以使用一张杀;锁定技,你造成伤害后,你摸一张牌',
                        kivazishu: '自书',
                        kivazishu_info: '锁定技,摸牌阶段,你额外摸三张牌;你的手牌上限-4',
                        kivayingyuan4: '应援',
                        kivayingyuan4_info: '锁定技,你造成伤害后,你摸一张牌',
                        kivabeixian: '备弦',
                        kivabeixian_info: '你造成伤害后,可以摸一张杀,每回合限一次',
                        kivabingyi: '秉壹',
                        kivabingyi_info: '结束阶段开始时,你可以展示所有手牌,若均为同一颜色,则你令至多X名角色各摸一张牌,你摸一张牌(X为你的手牌数).',
                        kivashenxing: '慎行',
                        kivashenxing_info: '出牌阶段,你可以横置或重置自己,弃置一张牌并摸两张牌,每回合限一次.',
                        kivaertian: '二天',
                        kivaertian_info: '当你出杀时,你可以再使用一张杀,每回合限一次.',
                        kivacixiong_liubei: '雌雄',
                        kivacixiong_liubei_info: '游戏开始或受到伤害后,你可以获得一张雌雄双股剑',
                        kivayitian: '倚天',
                        kivayitian_info: '游戏开始或受到伤害后,你可以获得一张青釭剑',
                        kivazhabing: '诈病',
                        kivazhabing_info: '回合结束阶段,自减一滴体力,直到下一回合开始前不受任何伤害.',
                        kivaguimou: '鬼谋',
                        kivaguimou_info: '摸牌阶段,摸"X+2"张牌,X为当前损失的体力值.',
                        kivazhabing2: '诈病',
                        kivazhabing2_info: '',
                        测试2: '测试2',
                        测试2_info: '你可以将一张红色牌当[杀]使用',
                        kivazhabing3: '诈病',
                        kivazhabing3_info: '',
                        kivazhabing4: '诈病',
                        kivazhabing4_info: '',
                        kivazhabing5: '诈病',
                        kivazhabing5_info: '',
                        kivajincui: '尽瘁',
                        kivajincui_info: '当你判定时,你可以摸三张牌,获得技能鞠躬并失去一点体力',
                        kivajugong: '鞠躬',
                        kivajugong_info: '在判定牌生效前,你可以打出一张红色牌替换之,你失去此技能',
                        帝司: '帝司',
                        帝司_info: '锁定技,摸牌阶段,你额外摸损失体力+1牌获得一张木杀;你的手牌上限+3',
                        重巨: '重巨',
                        重巨_info: '锁定技,摸牌阶段,你额外摸你护甲值张牌,增加你体力值数点护甲,你的手牌上限+4',
                        kivayinyang: '阴阳',
                        kivayinyang_info: '锁定技,摸牌阶段,你可以少摸一张牌并摸一张铁锁;锁定技,出牌阶段结束时,若场上有横置角色,你摸一张【火攻】.',
                        kivaxianji: '先机',
                        kivaxianji_info: '你使用火攻时,你可以摸一张牌',
                        kivazhanbu: '占卜',
                        kivazhanbu_info: '其他角色/你的出牌阶段限一次,其可以交给你一张牌,(若当前回合角色为你,则跳过此步骤),你可以将此牌/一张牌置于牌堆顶或牌堆底,你与其/你从另一端摸一张牌',
                        kivatiannu: '天怒',
                        kivatiannu_info: '锁定技,摸牌阶段,你摸五张杀;你的手牌上限=0',
                        kivayinyang1: '阴阳',
                        kivayinyang1_info: '摸牌阶段,你可以少摸一张牌并摸一张铁锁',
                        kivayinyang2: '阴阳',
                        kivayinyang2_info: '锁定技,出牌阶段结束时,若场上有横置角色,你摸一张【火攻】.',
                        kivazhanbu2: '占卜',
                        kivazhanbu2_info: '',
                        kivajingsi: '静思',
                        kivajingsi_info: '你可以将一张♦️️手牌当[静夜思]使用',
                        kivajinqiang: '尽将',
                        kivajinqiang_info: '摸牌阶段,你可以额外摸一张酒',//QQQ
                        夔泊: '夔泊',
                        夔泊_info: '摸牌阶段,你可选择于结束阶段分牌',
                        夔泊2: '夔泊',
                        夔泊2_info: '回个结束后,你可以摸一张牌,指定至多两名其他角色各摸一张牌.',
                        道唐: '道唐',
                        道唐_info: '受到伤害后,你可以摸4张牌并可选择使用一张牌',
                        shangshi殇逝: '殇逝',
                        shangshi殇逝_info: '每当你的手牌数少于已损失体力值数,你将手牌补至已损失体力值数,并可令一名角色失去一点体力,你增加一点体力上限',
                        jueqing情绝: '情绝',
                        jueqing情绝_info: '你造成伤害后可令其失去2点体力',
                        枭箭: '枭箭',
                        枭箭_info: '出牌阶段,若你有装备牌你可弃置一张装备牌视为对全部敌方角色使用2张万箭齐发',
                        儒戍: '儒戍',
                        儒戍_info: '一名角色使用牌指定目标时,你可令其获得一张金蝉脱壳,该牌对目标角色无效',
                    },
                    skill: {
                        kivaqj: {
                            audio: 'ext:王朝更替策/audio:1',
                            derivation: ['chongzhen', 'xinshensu'],
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return player.hp == 1 && !player.storage.kivaqj;
                            },
                            forced: true,
                            _priority: 3,
                            content() {
                                player.loseMaxHp();
                                player.addSkill('chongzhen');
                                player.addSkill('xinshensu');
                                player.awakenSkill('kivaqj');
                                player.storage.kivaqj = true;
                                game.createTrigger('phaseBegin', 'yinghun', player, trigger);
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
                        kivazj: {
                            audio: 'ext:王朝更替策/audio:1',
                            derivation: ['reyingzi', 'zhanjue'],
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return player.hp == 1 && !player.storage.kivazj;
                            },
                            forced: true,
                            _priority: 3,
                            content() {
                                player.loseMaxHp();
                                player.addSkill('reyingzi');
                                player.addSkill('zhanjue');
                                player.awakenSkill('kivazj');
                                player.storage.hunzi = true;
                                game.createTrigger('phaseBegin', 'yinghun', player, trigger);
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
                        kivagx: {
                            audio: 'ext:王朝更替策/audio:2',
                            derivation: ['kivatc', 'zhaxiang', 'qingjian'],
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return player.hp == 1 && !player.storage.kivagx;
                            },
                            forced: true,
                            _priority: 3,
                            content() {
                                player.loseMaxHp();
                                player.addSkill('zhaxiang');
                                player.addSkill('kivatc');
                                player.addSkill('qingjian');
                                player.awakenSkill('kivagx');
                                player.storage.hunzi = true;
                                game.createTrigger('phaseBegin', 'yinghun', player, trigger);
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
                        kivajm: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                player: 'gainAfter',
                            },
                            forced: true,
                            usable: 4,
                            filter(event, player) {
                                if (event.parent.parent.name == 'phaseDraw') return false;
                                return event.cards && event.cards.length;
                            },
                            content() {
                                'step 0';
                                event.cards = trigger.cards.slice(0);
                                ('step 1');
                                player.chooseCardTarget({
                                    filterCard(card, player) {
                                        return _status.event.parent.cards.includes(card);
                                    },
                                    selectCard: [1, event.cards.length],
                                    filterTarget(card, player, target) {
                                        return player != target;
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
                                        if (target.countCards('h') > _status.event.player.countCards('h')) return 0;
                                        return att - 4;
                                    },
                                    prompt: '请选择要送人的卡牌',
                                });
                                ('step 2');
                                if (result.bool) {
                                    player.storage.kivajm++;
                                    result.targets[0].gain(result.cards, player);
                                    player.$give(result.cards.length, result.targets[0]);
                                    if (Array.isArray(result.cards)) for (var i of result.cards) {
                                        event.cards.remove(i);
                                    }
                                    if (event.cards.length) event.goto(1);
                                } else {
                                    player.getStat('triggerSkill').qingjian--;
                                }
                            },
                            ai: {
                                expose: 0.3,
                            },
                        },
                        kivabf: {
                            trigger: {
                                player: 'loseHpEnd',
                            },
                            forced: true,
                            audio: 'ext:王朝更替策/audio:2',
                            content() {
                                player.draw(3);
                                if (_status.currentPhase == player) {
                                    player.addTempSkill('kivabf2', { player: 'phaseAfter' });
                                } else {
                                    game.trySkillAudio('kivabf', player);
                                }
                            },
                            ai: {
                                maihp: true,
                            },
                        },
                        kivabf2: {
                            mod: {
                                targetInRange(card, player, target, now) {
                                    if (card.name == "sha" && get.color(card) == "red") return true;
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == "sha") return num + 1;
                                },
                            },
                            charlotte: true,
                            audio: "kivabf",
                            trigger: { player: "useCard" },
                            sourceSkill: "kivabf",
                            filter(event, player) {
                                return event.card && event.card.name == "sha" && get.color(event.card) == "red";
                            },
                            forced: true,
                            content() {
                                trigger.directHit.addArray(game.players);
                            },
                            intro: {
                                content: "<li>使用【杀】的次数上限+#<br><li>使用红色【杀】无距离限制且不能被【闪】响应",
                            },
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    return arg.card.name == "sha" && get.color(arg.card) == "red";
                                },
                            },
                        },//QQQ
                        kivatc: {
                            trigger: {
                                player: 'damageBefore',
                            },
                            forced: true,
                            _priority: 10,
                            content() {
                                trigger.cancel();
                                player.loseHp();
                            },
                            audio: 'ext:王朝更替策/audio:1',
                        },
                        kivall: {
                            audio: 'ext:王朝更替策/audio:4',
                            init(player) {
                                player.storage.kivall = 0;
                                player.storage.kivall2 = 0;
                            },
                            intro: {
                                content: 'mark',
                            },
                            trigger: {
                                source: 'damageAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                player.storage.kivall++;
                                player.storage.kivall2++;
                                player.markSkill('kivall');
                            },
                            group: ['kivall_sha', 'kivall_shan', 'kivall_draw'],
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: ['useCard', 'respond'],
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return event.skill == 'kivall_sha' || event.skill == 'kivall_shan';
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                                sha: {
                                    enable: ['chooseToUse', 'chooseToRespond'],
                                    filterCard: {
                                        name: 'shan',
                                    },
                                    viewAs: {
                                        name: 'sha',
                                        suit: 'diamond',
                                        number: 7,
                                        cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'diamond', number: 7, name: 'shan', cardid: '5240952392', _transform: 'translateX(174.85714285714286px)', clone: { name: 'shan', suit: 'diamond', number: 7, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, timeout: 2549 }, timeout: 2456, original: 'h' }],
                                    },
                                    viewAsFilter(player) {
                                        if (!player.storage.kivall) return false;
                                        if (!player.countCards('h', 'shan')) return false;
                                    },
                                    prompt: '将一张闪当杀使用或打出',
                                    onuse(result, player) {
                                        player.storage.kivall--;
                                        if (!player.storage.kivall) {
                                            player.unmarkSkill('kivall');
                                        } else {
                                        }
                                    },
                                    check() {
                                        return 1;
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.tag(card, 'respondSha') && current < 0) return 0.6;
                                            },
                                        },
                                        respondSha: true,
                                        skillTagFilter(player) {
                                            if (!player.storage.kivall) return false;
                                            if (!player.countCards('h', 'shan')) return false;
                                        },
                                        order() {
                                            return get.order({ name: 'sha' }) + 0.1;
                                        },
                                        useful: -1,
                                        value: -1,
                                        basic: {
                                            useful: [5, 1],
                                            value: [5, 1],
                                        },
                                        result: {
                                            target: -1,
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
                                shan: {
                                    enable: ['chooseToRespond'],
                                    filterCard: {
                                        name: 'sha',
                                    },
                                    viewAs: {
                                        name: 'shan',
                                    },
                                    prompt: '将一张杀当闪打出',
                                    viewAsFilter(player) {
                                        if (!player.storage.kivall) return false;
                                        if (!player.countCards('h', 'sha')) return false;
                                    },
                                    onrespond(result, player) {
                                        player.storage.kivall--;
                                        if (!player.storage.kivall) {
                                            player.unmarkSkill('kivall');
                                        } else {
                                        }
                                    },
                                    check() {
                                        return 1;
                                    },
                                    ai: {
                                        respondShan: true,
                                        skillTagFilter(player) {
                                            if (!player.storage.kivall) return false;
                                            if (!player.countCards('h', 'sha')) return false;
                                        },
                                        effect: {
                                            target(card, player, target, current) {
                                                if (!player.storage.kivall) return false;
                                                if (get.tag(card, 'respondShan') && current < 0) return 0.6;
                                            },
                                        },
                                        order: 4,
                                        useful: -1,
                                        value: -1,
                                        basic: {
                                            useful: [7, 2],
                                            value: [7, 2],
                                        },
                                    },
                                },
                            },
                        },
                        kivals: {
                            group: ['kivals1', 'kivals2'],
                            ai: {
                                mingzhi: false,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'respondShan') || get.tag(card, 'respondSha')) {
                                            if (get.attitude(target, player) <= 0) {
                                                if (current > 0) return;
                                                if (target.countCards('h') == 0) return 1.6;
                                                if (target.countCards('h') == 1) return 1.2;
                                                if (target.countCards('h') == 2) return [0.8, 0.2, 0, -0.2];
                                                return [0.4, 0.7, 0, -0.7];
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        kivaxh: {
                            audio: 'ext:王朝更替策/audio:1',
                            derivation: ['lirang', 'zhuhai'],
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return player.hp == 1 && !player.storage.kivaxh;
                            },
                            forced: true,
                            _priority: 3,
                            content() {
                                player.loseMaxHp();
                                player.addSkill('lirang');
                                player.addSkill('zhuhai');
                                player.awakenSkill('kivaxh');
                                player.storage.hunzi = true;
                                game.createTrigger('phaseBegin', 'yinghun', player, trigger);
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
                        kivazf: {
                            audio: 'ext:王朝更替策/audio:1',
                            zhuSkill: true,
                            keepSkill: true,
                            derivation: 'beige',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!player.hasZhuSkill('kivazf')) return false;
                                if (player.storage.ruoyu) return false;
                                return player.isMinHp();
                            },
                            content() {
                                player.storage.ruoyu = true;
                                player.maxHp++;
                                player.update();
                                player.recover();
                                if (player.hasSkill('kivazf')) {
                                    player.addSkill('beige');
                                } else {
                                    player.addAdditionalSkill('kivazf', 'beige');
                                    j;
                                }
                                if (!player.isZhu) {
                                    player.storage.zhuSkill_ruoyu = ['beige'];
                                } else {
                                    event.trigger('zhuUpdate');
                                }
                                player.awakenSkill('kivazf');
                            },
                        },
                        kivacy: {
                            audio: 'ext:王朝更替策/audio:1',
                            _priority: -10,
                            derivation: 'chouhai',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.storage.kivacy) return false;
                                return player.countCards('h') == 0;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('kivacy');
                                player.chooseControl('kivacy_recover', 'kivacy_draw', function (event, player) {
                                    if (player.hp >= 2) return 'kivacy_draw';
                                    return 'kivacy_recover';
                                });
                                ('step 1');
                                if (result.control == 'kivacy_draw') {
                                    player.draw(2);
                                } else {
                                    player.recover();
                                }
                                ('step 2');
                                player.loseMaxHp();
                                player.storage.kivacy = true;
                                if (player.hp > player.maxHp) player.hp = player.maxHp;
                                player.update();
                                player.addSkill('chouhai');
                                game.createTrigger('phaseBegin', 'chouhai', player, trigger);
                            },
                        },
                        援截: {
                            audio: 'ext:王朝更替策/audio:1',
                            enable: 'chooseToUse',
                            filterCard(card, player) {
                                return get.color(card) == 'black';
                            },
                            position: 'he',
                            viewAs: {
                                name: 'yangpijuan',
                                suit: 'club',
                                number: 13,
                                cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'club', number: 13, name: 'sha', nature: 'thunder', cardid: '6231713325', clone: { name: 'sha', suit: 'club', number: 13, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, timeout: 140 }, timeout: 119, original: 'h' }],
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('he', { color: 'black' })) return false;
                            },
                            prompt: '将一张黑色牌当羊皮卷使用',
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
                                                if (jj.name == 'yangpijuan' || js.length > 1 || get.effect(target, jj, target, player) < 0) {
                                                    return 2;
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
                                        var noe2 = es.length == 1 && es[0].name == 'baiyin' && target.isDamaged();
                                        var noh = nh == 0 || target.hasSkillTag('noh');
                                        if (noh && (noe || noe2)) return 0;
                                        if (att <= 0 && !target.countCards('he')) return 1.5;
                                        return -1.5;
                                    },
                                },
                                tag: {
                                    loseCard: 1,
                                    discard: 1,
                                },
                                order: 7,
                                value: 7,
                                useful: 4,
                            },
                        },
                        kivazh: {
                            audio: 'ext:王朝更替策/audio:1',
                            derivation: 'shibei',
                            trigger: {
                                player: 'dying',
                            },
                            _priority: 10,
                            forced: true,
                            filter(event, player) {
                                return !player.storage.kunfen;
                            },
                            content() {
                                'step 0';
                                player.loseMaxHp();
                                ('step 1');
                                if (player.hp < 2) {
                                    player.recover(2 - player.hp);
                                }
                                ('step 2');
                                player.addSkill('shibei');
                                player.storage.kunfen = true;
                                player.awakenSkill('kivazh');
                            },
                        },
                        kivapj: {
                            audio: 'ext:王朝更替策/audio:1',
                            enable: 'chooseToUse',
                            filterCard(card, player) {
                                return get.color(card) == 'black';
                            },
                            position: 'he',
                            viewAs: {
                                name: 'gw_huangjiashenpan',
                                suit: 'club',
                                number: 10,
                                cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'club', number: 10, name: 'sha', cardid: '1598414267', clone: { name: 'sha', suit: 'club', number: 10, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, timeout: 165 }, timeout: 141, original: 'h' }],
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('he', { color: 'black' })) return false;
                            },
                            prompt: '将一张黑色牌当皇家审判使用',
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
                                                if (jj.name == 'gw_huangjiashenpan' || js.length > 1 || get.effect(target, jj, target, player) < 0) {
                                                    return 2;
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
                                        var noe2 = es.length == 1 && es[0].name == 'baiyin' && target.isDamaged();
                                        var noh = nh == 0 || target.hasSkillTag('noh');
                                        if (noh && (noe || noe2)) return 0;
                                        if (att <= 0 && !target.countCards('he')) return 1.5;
                                        return -1.5;
                                    },
                                    player: 1,
                                },
                                tag: {
                                    loseCard: 1,
                                    discard: 1,
                                },
                                value: 8,
                                useful: [6, 1],
                                order: 0.1,
                            },
                        },
                        kivakl: {
                            audio: 'ext:王朝更替策/audio:1',
                            zhuSkill: true,
                            keepSkill: true,
                            derivation: 'gongao',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!player.hasZhuSkill('kivakl')) return false;
                                if (player.storage.kivakl) return false;
                                return player.isMinHp();
                            },
                            content() {
                                player.storage.kivakl = true;
                                player.maxHp++;
                                player.update();
                                player.recover();
                                if (player.hasSkill('kivakl')) {
                                    player.addSkill('gongao');
                                } else {
                                    player.addAdditionalSkill('kivakl', 'gongao');
                                }
                                if (!player.isZhu) {
                                    player.storage.zhuSkill_kivakl = ['gongao'];
                                } else {
                                    event.trigger('zhuUpdate');
                                }
                                player.awakenSkill('kivakl');
                            },
                        },
                        kivawl: {
                            audio: 'ext:王朝更替策/audio:1',
                            trigger: {
                                source: 'damageAfter',
                            },
                            forced: true,
                            derivation: 'yinghun',
                            filter(event, player) {
                                return player.hp < player.maxHp;
                            },
                            content() {
                                player.awakenSkill('kivawl');
                                player.addSkill('yinghun');
                                player.loseMaxHp();
                            },
                        },
                        kivacx: {
                            audio: 'ext:王朝更替策/audio:1',
                            derivation: ['buqu', 'chouhai'],
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return player.hp == 1 && !player.storage.kivacx;
                            },
                            forced: true,
                            _priority: 3,
                            content() {
                                player.loseMaxHp();
                                player.addSkill('buqu');
                                player.addSkill('chouhai');
                                player.awakenSkill('kivacx');
                                player.storage.hunzi = true;
                                game.createTrigger('phaseBegin', 'yinghun', player, trigger);
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
                        kivalb: {
                            audio: 'ext:王朝更替策/audio:1',
                            filter(event, player) {
                                return player.countCards('he', { suit: 'diamond' }) > 0;
                            },
                            enable: 'chooseToUse',
                            filterCard(card, player) {
                                return card.suit == 'diamond';
                            },
                            position: 'he',
                            viewAs: {
                                name: 'shandian',
                                suit: 'diamond',
                                number: 8,
                                cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'diamond', number: 8, name: 'shan', cardid: '3455925305', clone: { name: 'shan', suit: 'diamond', number: 8, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, fixed: true, _transitionEnded: true, timeout: 1241 }, original: 'h', _transform: 'translateY(0px)', viewAs: 'shandian' }],
                            },
                            prompt: '将一张♦️️牌当闪电使用',
                            check(card) {
                                return 6 - get.value(card);
                            },
                            ai: {
                                threaten: 1.5,
                                basic: {
                                    order: 1,
                                    useful: 1,
                                    value: 8,
                                },
                                result: {
                                    target(player, target) {
                                        var num = target.hp - target.countCards('h') - 2;
                                        if (num > -1) return -0.01;
                                        if (target.hp < 3) num--;
                                        if (target.isTurnedOver()) num /= 2;
                                        var dist = get.distance(player, target, 'absolute');
                                        if (dist < 1) dist = 1;
                                        return num / Math.sqrt(dist);
                                    },
                                },
                                tag: {
                                    skip: 'phaseUse',
                                },
                            },
                        },
                        kivaly: {
                            audio: 'ext:王朝更替策/audio:1',
                            enable: 'chooseToUse',
                            filterCard(card, player) {
                                return get.color(card) == 'black';
                            },
                            position: 'he',
                            viewAs: {
                                name: 'yiyi',
                                suit: 'club',
                                number: 12,
                                cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'club', number: 12, name: 'qijia', cardid: '7268685368', _transform: 'translateX(224px)', clone: { name: 'qijia', suit: 'club', number: 12, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, timeout: 2733 }, timeout: 2631, original: 'h' }],
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('he', { color: 'black' })) return false;
                            },
                            prompt: '将一张黑色牌当以逸待劳使用',
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
                                                if (jj.name == 'yiyi' || js.length > 1 || get.effect(target, jj, target, player) < 0) {
                                                    return 2;
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
                                        var noe2 = es.length == 1 && es[0].name == 'baiyin' && target.isDamaged();
                                        var noh = nh == 0 || target.hasSkillTag('noh');
                                        if (noh && (noe || noe2)) return 0;
                                        if (att <= 0 && !target.countCards('he')) return 1.5;
                                        return -1.5;
                                    },
                                },
                                tag: {
                                    loseCard: 1,
                                    discard: 1,
                                    norepeat: 1,
                                },
                                wuxie() {
                                    return 0;
                                },
                            },
                        },
                        kivadh: {
                            audio: 'ext:王朝更替策/audio:1',
                            trigger: {
                                player: 'dieBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.source && event.source.isIn();
                            },
                            content() {
                                trigger.source.clearSkills();
                            },
                            logTarget: 'source',
                            ai: {
                                threaten(player, target) {
                                    if (target.hp == 1) return 0.2;
                                    return 1.5;
                                },
                                effect: {
                                    target(card, player, target, current) {
                                        if (!target.hasFriend()) return;
                                        if (target.hp <= 1 && get.tag(card, 'damage')) return [1, 0, 0, -2];
                                    },
                                },
                            },
                        },
                        kivaxh2: {
                            audio: 'ext:王朝更替策/audio:1',
                            trigger: {
                                player: 'dieBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('kivaxh2'), function (card, player, target) {
                                        return player != target && _status.event.source != target;
                                    })
                                    .set('ai', function (target) {
                                        var num = get.attitude(_status.event.player, target);
                                        if (num > 0) {
                                            if (target.hp == 1) {
                                                num += 2;
                                            }
                                            if (target.hp < target.maxHp) {
                                                num += 2;
                                            }
                                        }
                                        return num;
                                    })
                                    .set('source', trigger.source);
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    target.recover();
                                    target.draw(3);
                                }
                            },
                            ai: {
                                expose: 0.5,
                            },
                        },
                        kivadl: {
                            audio: 'ext:王朝更替策/audio:1',
                            enable: 'phaseUse',
                            usable: 1,
                            discard: false,
                            filter(event, player) {
                                return player.countCards('he', { suit: 'spade' }) > 0;
                            },
                            prepare: 'throw',
                            position: 'he',
                            filterCard: {
                                suit: 'spade',
                            },
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                if (target.hasJudge('bingliang')) return true;
                                return lib.filter.targetEnabled({ name: 'bingliang' }, player, target);
                            },
                            check(card) {
                                return 7 - get.value(card);
                            },
                            content() {
                                if (target.hasJudge('bingliang')) {
                                    target.discard(target.getJudge('bingliang'));
                                } else {
                                    var next = player.useCard({ name: 'bingliang' }, target, cards);
                                    next.animate = false;
                                    next.audio = false;
                                }
                                player.draw();
                            },
                            ai: {
                                result: {
                                    target(player, target) {
                                        if (target.hasJudge('bingliang')) return -get.effect(target, { name: 'bingliang' }, player, target);
                                        return get.effect(target, { name: 'bingliang' }, player, target);
                                    },
                                },
                                order: 9,
                            },
                        },
                        kivays: {
                            audio: 'ext:王朝更替策/audio:1',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.source && event.source.countCards('he') && event.source != player;
                            },
                            content() {
                                player.gainPlayerCard(get.prompt('kivays', trigger.source), trigger.source, get.buttonValue, 'he')
                            },
                            ai: {
                                maixie_defend: true,
                                effect: {
                                    target(card, player, target) {
                                        if (player.countCards('he') > 1 && get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -1.5];
                                            if (get.attitude(target, player) < 0) return [1, 1];
                                        }
                                    },
                                },
                            },
                        },
                        kivalg: {
                            audio: 'ext:王朝更替策/audio:1',
                            enable: 'chooseToUse',
                            filterCard(card, player) {
                                return get.color(card) == 'black';
                            },
                            viewAsFilter(player) {
                                return player.countCards('h', { color: 'black' }) > 0;
                            },
                            viewAs: {
                                name: 'wuxie',
                                suit: 'spade',
                                number: 1,
                                cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'spade', number: 1, name: 'caomu', cardid: '6093460324', clone: { name: 'caomu', suit: 'spade', number: 1, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, timeout: 1849 }, timeout: 1820, original: 'h' }],
                            },
                            prompt: '将一张黑色手牌当无懈可击使用',
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
                        kivajj: {
                            derivation: ['xinenyuan', 'enyuan', 'kivagc'],
                            audio: 'ext:王朝更替策/audio:1',
                            enable: 'chooseToUse',
                            mark: true,
                            init(player) {
                                player.storage.kivajj = false;
                            },
                            filter(event, player) {
                                if (player.storage.kivajj) return false;
                                if (event.type == 'dying') {
                                    if (player != event.dying) return false;
                                    return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('kivajj');
                                player.storage.jizhao = true;
                                var num = player.maxHp - player.countCards('h');
                                if (num > 0) {
                                    player.draw(num);
                                }
                                ('step 1');
                                if (player.hp < 2) {
                                    player.recover(2 - player.hp);
                                }
                                ('step 2');
                                player.removeSkill('shouyue');
                                player.removeSkill('wuhujiangdaqi');
                                player.addSkill('xinenyuan');
                                player.addSkill('enyuan');
                                player.addSkill('kivagc');
                            },
                            ai: {
                                order: 1,
                                skillTagFilter(player) {
                                    if (player.storage.kivajj) return false;
                                    if (player.hp > 0) return false;
                                },
                                save: true,
                                result: {
                                    player: 10,
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        kivagc: {
                            audio: 'ext:王朝更替策/audio:1',
                            trigger: {
                                global: 'judge',
                            },
                            filter(event, player) {
                                return player.countCards('he', { color: 'red' }) > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('kivagc'), 'he', function (card) {
                                        return get.color(card) == 'red';
                                    })
                                    .set('ai', function (card) {
                                        var trigger = _status.event.getTrigger();
                                        var player = _status.event.player;
                                        var judging = _status.event.judging;
                                        var result = trigger.judge(card) - trigger.judge(judging);
                                        var attitude = get.attitude(player, trigger.player);
                                        if (attitude == 0 || result == 0) return 0;
                                        if (attitude > 0) {
                                            return result;
                                        } else {
                                            return -result;
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
                                    player.$gain2(trigger.player.judging[0]);
                                    player.gain(trigger.player.judging[0]);
                                    trigger.player.judging[0] = result.cards[0];
                                    if (!get.owner(result.cards[0], 'judge')) {
                                        trigger.position.appendChild(result.cards[0]);
                                    }
                                    game.log(trigger.player, '的判定牌改为', result.cards[0]);
                                }
                                ('step 3');
                            },
                            ai: {
                                tag: {
                                    rejudge: 1,
                                },
                            },
                        },
                        kivatzw: {
                            mod: {
                                maxHandcard(player, num) {
                                    if (player.hasZhuSkill('kivatzw')) {
                                        return (
                                            num +
                                            game.countPlayer(function (current) {
                                                if (player != current && current.group == 'wei') return 2;
                                            })
                                        );
                                    }
                                    return num;
                                },
                            },
                            zhuSkill: true,
                        },
                        kivayx: {
                            enable: 'phaseUse',
                            audio: 'ext:王朝更替策/audio:1',
                            viewAsFilter(player) {
                                return player.countCards('hej', { suit: 'diamond' }) > 0;
                            },
                            viewAs: {
                                name: 'chiyuxi',
                                suit: 'diamond',
                                number: 8,
                                cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'diamond', number: 8, name: 'shan', cardid: '5283565363', _transform: 'translateX(224px)', clone: { name: 'shan', suit: 'diamond', number: 8, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, timeout: 2758 }, timeout: 2612, original: 'h' }],
                            },
                            filterCard: {
                                suit: 'diamond',
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
                                    respond: 1,
                                    respondShan: 1,
                                    damage: 1,
                                    natureDamage: 1,
                                    fireDamage: 1,
                                    multitarget: 1,
                                    multineg: 1,
                                },
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, target) > 0 && target.countCards('h', 'shan')) {
                                        if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
                                    }
                                },
                            },
                        },
                        kivalp: {
                            audio: 'ext:王朝更替策/audio:1',
                            enable: 'phaseUse',
                            viewAs: {
                                name: 'jingleishan',
                            },
                            filterCard(card, player) {
                                if (!player.storage.kivalp) return true;
                                return !player.storage.kivalp.includes(card.suit);
                            },
                            selectCard: 2,
                            check(card) {
                                return 6 - get.value(card);
                            },
                            ai: {
                                basic: {
                                    order: 10,
                                    useful: 1,
                                    value: 5,
                                },
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, target) > 0 && target.countCards('h', 'sha')) {
                                        if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
                                    }
                                },
                                result: {
                                    target(player, target) {
                                        if (player.hasUnknown(2) && get.mode() != 'guozhan') return 0;
                                        var nh = target.countCards('h');
                                        if (get.mode() == 'identity') {
                                            if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
                                        }
                                        if (nh == 0) return -2;
                                        if (nh == 1) return -1.7;
                                        return -1.5;
                                    },
                                },
                                tag: {
                                    respond: 1,
                                    respondShan: 1,
                                    damage: 1,
                                    multitarget: 1,
                                    multineg: 1,
                                    respondSha: 1,
                                    natureDamage: 1,
                                    thunderDamage: 1,
                                },
                            },
                            group: ['kivalp_count', 'kivalp_reset', 'kivalp_respond'],
                            subSkill: {
                                reset: {
                                    trigger: {
                                        player: 'phaseAfter',
                                    },
                                    silent: true,
                                    filter(event, player) {
                                        return player.storage.kivalp ? true : false;
                                    },
                                    content() {
                                        delete player.storage.kivalp;
                                    },
                                    forced: true,
                                    popup: false,
                                },
                                count: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    silent: true,
                                    filter(event, player) {
                                        return event.skill == 'kivalp';
                                    },
                                    content() {
                                        if (!player.storage.kivalp) {
                                            player.storage.kivalp = [];
                                        }
                                        if (Array.isArray(trigger.cards)) for (var i of trigger.cards) {
                                            player.storage.kivalp.add(i.suit);
                                        }
                                    },
                                    forced: true,
                                    popup: false,
                                },
                                respond: {
                                    trigger: {
                                        global: 'respond',
                                    },
                                    silent: true,
                                    filter(event, player) {
                                        return event.getParent(2).skill == 'kivalp' && event.player.isDamaged();
                                    },
                                    content() {
                                        trigger.player.draw();
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                        },
                        kivajh: {
                            audio: 'ext:王朝更替策/audio:1',
                            enable: 'chooseToUse',
                            filterCard(card, player) {
                                return get.color(card) == 'red';
                            },
                            position: 'hej',
                            viewAs: {
                                name: 'chenhuodajie',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('hej', { color: 'red' })) return false;
                            },
                            prompt: '将一张红色牌当趁火打劫使用',
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
                                                    return 2;
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
                                        var noe2 = es.length == 1 && es[0].name == 'baiyin' && target.isDamaged();
                                        var noh = nh == 0 || target.hasSkillTag('noh');
                                        if (noh && (noe || noe2)) return 0;
                                        if (att <= 0 && !target.countCards('he')) return 1.5;
                                        return -1.5;
                                    },
                                },
                                tag: {
                                    loseCard: 1,
                                    discard: 1,
                                },
                                order: 1,
                                useful: 6,
                                value: 6,
                            },
                        },
                        kivatj: {
                            group: 'kivatj',
                            audio: 'ext:王朝更替策/audio:1',
                            enable: 'chooseToUse',
                            filterCard(card, player) {
                                return get.color(card) == 'black';
                            },
                            position: 'hej',
                            viewAs: {
                                name: 'chenhuodajie',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('hej', { color: 'black' })) return false;
                            },
                            prompt: '将一张牌当【趁火打劫】使用',
                            check(card) {
                                return 4 - get.value(card);
                            },
                            subSkill: {
                                discard: {
                                    trigger: {
                                        global: 'discardEnd',
                                    },
                                    filter(event, player) {
                                        if (_status.currentPhase != player || event.player == player) return false;
                                        if (Array.isArray(event.cards)) for (var i of event.cards) {
                                            if (get.position(i) == 'd' && (get.type(i) == 'trick' || get.type(i) == 'delay')) {
                                                return true;
                                            }
                                        }
                                        return false;
                                    },
                                    forced: true,
                                    gainable: true,
                                    popup: false,
                                    content() {
                                        player.gain(trigger.cards, 'gain2', 'log');
                                    },
                                    ai: {
                                        threaten: 1.4,
                                    },
                                },
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
                                                if (jj.name == 'chenhuodajie' || js.length > 1 || get.effect(target, jj, target, player) < 0) {
                                                    return 2;
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
                                        var noe2 = es.length == 1 && es[0].name == 'baiyin' && target.isDamaged();
                                        var noh = nh == 0 || target.hasSkillTag('noh');
                                        if (noh && (noe || noe2)) return 0;
                                        if (att <= 0 && !target.countCards('hej')) return 1.5;
                                        return -1.5;
                                    },
                                },
                                tag: {
                                    loseCard: 1,
                                    discard: 1,
                                },
                                order: 1,
                                useful: 6,
                                value: 6,
                            },
                        },
                        kivasy: {
                            audio: 'ext:王朝更替策/audio:1',
                            enable: 'chooseToUse',
                            useable: 1,
                            filterCard(card, player) {
                                return get.color(card) == 'black';
                            },
                            position: 'he',
                            viewAs: {
                                name: 'huoshaolianying',
                                suit: 'club',
                                number: 1,
                                cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'club', number: 1, name: 'baiyin', cardid: '9029572457', clone: { name: 'baiyin', suit: 'club', number: 1, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, timeout: 6408 }, original: 'e', timeout: 6386 }],
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('he', { color: 'black' })) return false;
                            },
                            prompt: '将一张黑色牌当过河拆桥使用',
                            check(card) {
                                return 4 - get.value(card);
                            },//QQQ
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
                                                    return 2;
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
                                        var noe2 = es.length == 1 && es[0].name == 'baiyin' && target.isDamaged();
                                        var noh = nh == 0 || target.hasSkillTag('noh');
                                        if (noh && (noe || noe2)) return 0;
                                        if (att <= 0 && !target.countCards('he')) return 1.5;
                                        return -1.5;
                                    },
                                },
                                tag: {
                                    loseCard: 1,
                                    discard: 1,
                                    damage: 1,
                                    natureDamage: 1,
                                    fireDamage: 1,
                                },
                                order: 5,
                                value: 6,
                            },
                        },
                        kivalj: {
                            mod: {
                                suit(card, suit) {
                                    if (suit == 'heart') return 'diamond';
                                },
                            },
                        },
                        kivasj: {
                            trigger: {
                                global: 'dieAfter',
                            },
                            audio: 'ext:王朝更替策/audio:1',//QQQ
                            forced: true,
                            content() {
                                'step 0';
                                player.draw(4);
                                var list = [];
                                if (!player.hasSkill('kivazs')) {
                                    list.push('kivazs');
                                }
                                if (!player.hasSkill('wuyan')) {
                                    list.push('wuyan');
                                }
                                if (!player.hasSkill('benghuai')) {
                                    list.push('benghuai');
                                }
                                if (list.length) {
                                    player.chooseControl(list).set('prompt', '选择获得一项技能');
                                }
                                ('step 1');
                                player.addSkill(result.control);
                                player.popup(result.control);
                                game.log(player, '获得技能', '【' + get.translation(result.control) + '】');
                            },
                            ai: {
                                threaten: 1.4,
                            },
                        },
                        kivabw: {
                            audio: 'ext:王朝更替策/audio:1',
                            zhuSkill: true,
                            trigger: {
                                player: 'chooseToRespondBegin',
                            },
                            filter(event, player) {
                                if (event.responded) return false;
                                if (player.storage.hujiaing) return false;
                                if (!player.hasZhuSkill('hujia')) return false;
                                if (event.filterCard && event.filterCard({ name: 'shan' }, player) == false) return false;
                                return game.hasPlayer(function (current) {
                                    return current != player && current.group == 'wu';
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
                                } else if (event.current.group == 'wu') {
                                    if ((event.current == game.me && !_status.auto) || get.attitude(event.current, player) > 2 || event.current.isOnline()) {
                                        player.storage.hujiaing = true;
                                        var next = event.current.chooseToRespond('是否替' + get.translation(player) + '打出一张闪？', { name: 'shan' });
                                        next.set('ai', function () {
                                            var event = _status.event;
                                            return get.attitude(event.player, event.source) - 2;
                                        });
                                        next.autochoose = lib.filter.autoRespondShan;
                                        next.set('source', player);
                                    }
                                }
                                ('step 1');
                                player.storage.hujiaing = false;
                                if (result.bool) {
                                    event.finish();
                                    trigger.result = result;
                                    trigger.responded = true;
                                    trigger.animate = false;
                                } else {
                                    event.current = event.current.next;
                                    event.goto(0);
                                }
                            },
                        },
                        kivazs: {
                            audio: 'ext:王朝更替策/audio:1',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card, 'trick') == 'trick' && event.cards[0] && event.cards[0] == event.card;
                            },
                            content() {
                                'step 0';
                                if (player.storage.kivazs > 0) {
                                    player.chooseControl('选项一', '选项二').set('prompt', '诛神<br><br><div class="text">1:激昂的叫一下~</div><br><div class="text">2:受到一点伤害</div></br>').ai = function () {
                                        if (player.storage.kivazs > 6) return '选项一';
                                        if (player.hp + player.countCards('h', 'tao') > 3) return '选项二';
                                        return '选项一';
                                    };
                                } else {
                                    player.damage('nosource');
                                    event.finish();
                                }
                                ('step 1');
                                if (result.control == '选项一') {
                                    player.storage.kivazs--;
                                } else {
                                    player.damage('nosource');
                                }
                            },
                        },
                        kivasx: {
                            audio: 'ext:王朝更替策/audio:1',
                            trigger: {
                                global: 'dieAfter',
                            },
                            forced: true,
                            content() {
                                player.lostMaxHp();
                                player.recover();
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        kivagh: {
                            audio: 'ext:王朝更替策/audio:1',
                            derivation: 'sheyan',
                            trigger: {
                                player: 'dying',
                            },
                            _priority: 10,
                            forced: true,
                            filter(event, player) {
                                return !player.storage.kunfen;
                            },
                            content() {
                                'step 0';
                                player.loseMaxHp();
                                ('step 1');
                                if (player.hp < 2) {
                                    player.recover(2 - player.hp);
                                }
                                ('step 2');
                                player.addSkill('sheyan');
                                player.storage.kunfen = true;
                                player.awakenSkill('kivagh');
                            },
                        },
                        kivalz: {
                            audio: 'ext:王朝更替策/audio:1',
                            derivation: ['qiangxi', 'feiying'],
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return player.hp == 1 && !player.storage.kivalz;
                            },
                            forced: true,
                            _priority: 3,
                            content() {
                                player.loseMaxHp();
                                player.addSkill('qiangxi');
                                player.addSkill('feiying');
                                player.awakenSkill('kivalz');
                                player.storage.hunzi = true;
                                game.createTrigger('phaseBegin', 'yinghun', player, trigger);
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
                        kivabm: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            audio: 'ext:王朝更替策/audio:1',
                            check() {
                                return false;
                            },
                            filter(event, player) {
                                return get.distance(player, event.player) <= 1;
                            },
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                                {
                                    trigger.player.addSkill('mashu');
                                }
                            },
                        },
                        kivazrs: {
                            audio: 'ext:王朝更替策/audio:1',
                            derivation: ['tianyi', 'retishen', 'jiang'],
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return player.hp == 1 && !player.storage.kivazrs;
                            },
                            forced: true,
                            _priority: 3,
                            content() {
                                player.loseMaxHp();
                                player.addSkill('tianyi');
                                player.addSkill('retishen');
                                player.addSkill('jiang');
                                player.awakenSkill('kivazrs');
                                player.storage.hunzi = true;
                                game.createTrigger('phaseBegin', 'yinghun', player, trigger);
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
                        kivasr: {
                            audio: 'ext:王朝更替策/audio:1',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getStat('damage') >= 4 && !player.storage.kivasr;
                            },
                            content() {
                                'step 0';
                                player.removeSkill('reyicong');
                                ('step 1');
                                player.recover();
                                player.awakenSkill('kivasr');
                                player.storage.wuji = true;
                                var card = get.cardPile('fangtian', 'field');
                                if (card) {
                                    player.gain(card, 'gain2', 'log');
                                }
                            },
                        },
                        kivayc: {
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'ext:王朝更替策/audio:1',
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            chooseButton: {
                                dialog() {
                                    var list = ['taoyuan', 'wugu', 'juedou', 'huogong', 'jiedao', 'tiesuo', 'guohe', 'shunshou', 'wuzhong', 'wanjian', 'nanman', 'chiyuxi', 'jingleishan', 'yiyi'];
                                    for (var i = 0; i < list.length; i++) {
                                        list[i] = ['锦囊', '', list[i]];
                                    }
                                    return ui.create.dialog([list, 'vcard']);
                                },
                                filter(button, player) {
                                    return lib.filter.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    var recover = 0,
                                        lose = 1,
                                        players = game.filterPlayer();
                                    for (var i of players) {
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
                                    if (lose > recover && lose > 0) return button.link[2] == 'nanman' ? 1 : -1;
                                    if (lose < recover && recover > 0) return button.link[2] == 'taoyuan' ? 1 : -1;
                                    return button.link[2] == 'wuzhong' ? 1 : -1;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard: true,
                                        selectCard: -1,
                                        audio: 1,
                                        popname: true,
                                        viewAs: { name: links[0][2] },
                                    };
                                },
                                prompt(links, player) {
                                    return '将全部手牌当作' + get.translation(links[0][2]) + '使用';
                                },
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player) {
                                        var num = 0;
                                        var cards = player.getCards('h');
                                        if (cards.length >= 3 && player.hp >= 3) return 0;
                                        if (Array.isArray(cards)) for (var i of cards) {
                                            num += Math.max(0, get.value(i, player, 'raw'));
                                        }
                                        num /= cards.length;
                                        num *= Math.min(cards.length, player.hp);
                                        return 12 - num;
                                    },
                                },
                                threaten: 1.6,
                            },
                        },
                        kivayj: {
                            audio: 'ext:王朝更替策/audio:1',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('kivayj'), [1, trigger.num], function (card, player, target) {
                                        return target.countCards('h') < Math.min(target.maxHp, 5);
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (att > 2) {
                                            return Math.min(5, target.maxHp) - target.countCards('h');
                                        }
                                        return att / 3;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].draw(Math.min(5, result.targets[i].maxHp) - result.targets[i].countCards('h'));
                                    }
                                }
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
                        kivahy: {
                            audio: 'ext:王朝更替策/audio:1',
                            audioname: ['liubeikiva', 'liubang'],
                            trigger: {
                                player: 'dying',
                            },
                            _priority: 6,
                            zhuSkill: true,
                            filter(event, player) {
                                if (player.storage.kivahy) return false;
                                if (player.hp > 0) return false;
                                if (!player.hasZhuSkill('kivahy')) return false;
                                return game.hasPlayer(function (current) {
                                    return current != player && current.group == 'qun';
                                });
                            },
                            init(player) {
                                if (player.hasZhuSkill('kivahy')) {
                                    player.markSkill('kivahy');
                                    player.storage.kivahy = false;
                                }
                            },
                            intro: {
                                content: 'limited',
                            },
                            content() {
                                'step 0';
                                player.storage.kivahy = true;
                                player.awakenSkill('kivahy');
                                var targets = game.filterPlayer();
                                targets.remove(player);
                                event.targets = targets;
                                event.damages = [];
                                ('step 1');
                                if (event.targets.length) {
                                    var current = event.targets.shift();
                                    if (current.group == 'qun') {
                                        current
                                            .chooseBool('是否令' + get.translation(player) + '回复一点体力？')
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
                                }
                                if (event.targets.length) {
                                    event.goto(1);
                                }
                                ('step 3');
                                if (event.damages.length) {
                                    player.recover(event.damages.length);
                                }
                                ('step 4');
                                if (event.damages.length) {
                                    event.damages.shift().damage('nosource');
                                    event.redo();
                                }
                            },
                        },
                        kivahz: {
                            audio: 'ext:王朝更替策/audio:1',
                            audioname: ['xiaohekiva'],
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                threaten: 1.5,
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    if (player.hp < player.maxHp) return num + player.maxHp - player.hp;
                                },
                            },
                        },
                        kivahux: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            audio: 'ext:王朝更替策/audio:2',
                            silent: true,
                            filter(event, player) {
                                if (event._notrigger.includes(event.player)) return false;
                                return event.nature == 'fire';
                            },
                            content() {
                                if (!player.storage.kivahux) {
                                    player.storage.kivahux = [];
                                }
                                player.storage.kivahux.add(trigger.player);
                            },
                            group: ['kivahux_draw', 'kivahux_clear'],
                            subSkill: {
                                draw: {
                                    trigger: {
                                        source: 'damageAfter',
                                    },
                                    _priority: -6,
                                    filter(event, player) {
                                        if (!player.storage.kivahux || !player.storage.kivahux.length) return false;
                                        for (var i = 0; i < player.storage.kivahux.length; i++) {
                                            if (player.storage.kivahux[i].isIn()) return true;
                                        }
                                        return false;
                                    },
                                    check() {
                                        return false;
                                    },
                                    forced: true,
                                    content() {
                                        for (var i = 0; i < player.storage.kivahux.length; i++) {
                                            if (!player.storage.kivahux[i].isIn()) {
                                                player.storage.kivahux.splice(i--, 1);
                                            }
                                        }
                                        game.asyncDraw(player.storage.kivahux);
                                        if (!player.storage.kivahux3) {
                                            player.storage.kivahux3 = [];
                                        }
                                        player.storage.kivahux3.addArray(player.storage.kivahux);
                                        player.addTempSkill('kivahux3');
                                    },
                                },
                                clear: {
                                    trigger: {
                                        source: 'damageAfter',
                                    },
                                    _priority: -7,
                                    silent: true,
                                    content() {
                                        delete player.storage.kivahux;
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                            forced: true,
                            popup: false,
                        },
                        kivaxuj: {
                            audio: 'ext:王朝更替策/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('he', { color: 'red' }) > 0;
                            },
                            filterTarget: true,
                            selectTarget() {
                                var player = _status.event.player;
                                return [1, Math.max(1, player.maxHp - player.hp)];
                            },
                            position: 'he',
                            filterCard: {
                                color: 'red',
                            },
                            check(card) {
                                return 8 - get.value(card);
                            },
                            multitarget: true,
                            multiline: true,
                            line: 'fire',
                            content() {
                                'step 0';
                                event.delay = false;
                                for (var i = 0; i < targets.length; i++) {
                                    if (!targets[i].isLinked()) {
                                        targets[i].link(true);
                                        event.delay = true;
                                    }
                                }
                                ('step 1');
                                if (event.delay) {
                                }
                                ('step 2');
                                targets[0].damage('fire');
                            },
                            ai: {
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
                        },
                        kivawuj: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getStat('damage') >= 3 && !player.storage.kivawuj;
                            },
                            content() {
                                'step 0';
                                player.removeSkill('huxiao');
                                player.gainMaxHp();
                                ('step 1');
                                player.recover();
                                player.awakenSkill('kivawuj');
                                player.storage.kivawuj = true;
                                var card = get.cardPile('qinglong', 'field');
                                if (card) {
                                    player.gain(card, 'gain2', 'log');
                                }
                            },
                        },
                        kivayd: {
                            audio: 'ext:王朝更替策/audio:1',
                            enable: ['chooseToRespond'],
                            filterCard(card, player) {
                                return get.color(card) == 'black';
                            },
                            viewAs: {
                                name: 'shan',
                                suit: 'club',
                                number: 12,
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('h', { color: 'black' })) return false;
                            },
                            prompt: '将一张黑色手牌当闪打出',
                            check() {
                                return 1;
                            },
                            ai: {
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (!player.countCards('h', { color: 'black' })) return false;
                                },
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'respondShan') && current < 0) return 0.6;
                                    },
                                },
                                basic: {
                                    useful: [7, 2],
                                    value: [7, 2],
                                },
                            },
                        },
                        kivatg: {
                            group: ['kivatg_shan', 'kivatg_wuxie'],
                            audio: 'ext:王朝更替策/audio:2',
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if ((card.name == 'shan' && get.color(card) == 'red') || card.name == 'wuxie') return [1, 0.6];
                                    },
                                    player(card, player, target) {
                                        if ((card.name == 'shan' && get.color(card) == 'red') || card.name == 'wuxie') return [1, 1];
                                    },
                                },
                            },
                            subSkill: {
                                shan: {
                                    audio: 'kivatg',
                                    _priority: -5,
                                    forced: true,
                                    trigger: {
                                        player: 'shanBefore',
                                        target: 'shanBefore',
                                    },
                                    filter(event, player) {
                                        return get.color(event.card) == 'red';
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                                wuxie: {
                                    audio: 'kivatg',
                                    _priority: 15,
                                    forced: true,
                                    trigger: {
                                        player: 'useCardToBefore',
                                        target: 'useCardToBefore',
                                    },
                                    filter(event, player) {
                                        if (event.card.name == 'wuxie') return true;
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                            },
                        },
                        kivarc: {
                            audio: 'ext:王朝更替策/audio:1',
                            trigger: {
                                source: 'damageAfter',
                            },
                            forced: true,
                            derivation: 'xinwuyan',
                            filter(event, player) {
                                return player.hp < player.maxHp;
                            },
                            content() {
                                player.awakenSkill('kivarc');
                                player.addSkill('xinwuyan');
                                player.loseMaxHp();
                            },
                        },
                        kivaws: {
                            audio: 'ext:王朝更替策/audio:1',
                            derivation: ['xingshang', 'rejianxiong'],
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return player.hp == 1 && !player.storage.kivaws;
                            },
                            forced: true,
                            _priority: 3,
                            content() {
                                player.loseMaxHp();
                                player.addSkill('xingshang');
                                player.addSkill('rejianxiong');
                                player.awakenSkill('kivaws');
                                player.storage.hunzi = true;
                                game.createTrigger('phaseBegin', 'yinghun', player, trigger);
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
                        kivazyx: {
                            audio: 'ext:王朝更替策/audio:1',
                            trigger: {
                                player: ['respond', 'useCard'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player != _status.currentPhase && get.itemtype(event.cards) == 'cards';
                            },
                            content() {
                                'step 0';
                                event.card = get.cards()[0];
                                game.broadcast(function (card) {
                                    ui.arena.classList.add('thrownhighlight');
                                    card.copy('thrown', 'center', 'thrownhighlight', ui.arena).addTempClass('start');
                                }, event.card);
                                event.node = event.card.copy('thrown', 'center', 'thrownhighlight', ui.arena).addTempClass('start');
                                ui.arena.classList.add('thrownhighlight');
                                game.addVideo('thrownhighlight1');
                                game.addVideo('centernode', null, get.cardInfo(event.card));
                                if (get.type(event.card, 'trick') == get.type(trigger.card, 'trick')) {
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
                                    player.chooseBool('是否弃置' + get.translation(event.card) + '？');
                                    event.disbool = true;
                                }
                                ('step 1');
                                if (event.disbool) {
                                    if (!result.bool) {
                                        game.log(player, '展示了', event.card);
                                        ui.cardPile.insertBefore(event.card, ui.cardPile.firstChild);
                                    } else {
                                        game.log(player, '展示并弃掉了', event.card);
                                        event.card.discard();
                                    }
                                    game.addVideo('deletenode', player, [get.cardInfo(event.node)]);
                                    event.node.delete();
                                    game.broadcast(function (card) {
                                        ui.arena.classList.remove('thrownhighlight');
                                        if (card.clone) {
                                            card.clone.delete();
                                        }
                                    }, event.card);
                                } else if (result.targets) {
                                    player.line(result.targets, 'green');
                                    result.targets[0].gain(event.card, 'log');
                                    event.node.moveDelete(result.targets[0]);
                                    game.addVideo('gain2', result.targets[0], [get.cardInfo(event.node)]);
                                    game.broadcast(
                                        function (card, target) {
                                            ui.arena.classList.remove('thrownhighlight');
                                            if (card.clone) {
                                                card.clone.moveDelete(target);
                                            }
                                        },
                                        event.card,
                                        result.targets[0]
                                    );
                                } else {
                                    game.log(player, '展示并弃掉了', event.card);
                                    event.card.discard();
                                    game.addVideo('deletenode', player, [get.cardInfo(event.node)]);
                                    event.node.delete();
                                    game.broadcast(function (card) {
                                        ui.arena.classList.remove('thrownhighlight');
                                        if (card.clone) {
                                            card.clone.delete();
                                        }
                                    }, event.card);
                                }
                                game.addVideo('thrownhighlight2');
                                ui.arena.classList.remove('thrownhighlight');
                            },
                            ai: {
                                effect: {
                                    target(card, player) {
                                        if (get.tag(card, 'respond') && player.countCards('h') > 1) return [1, 0.2];
                                    },
                                },
                            },
                        },
                        kivaqw: {
                            trigger: {
                                player: ['phaseBegin', 'damageEnd'],
                            },
                            audio: 'ext:王朝更替策/audio:1',
                            forced: true,
                            filter(event, player) {
                                return !player.getEquip('yinyueqiang');
                            },
                            content() {
                                if (trigger.name == 'phase') {
                                    player.useCard(game.createCard('yinyueqiang', 'diamond', 1), player);
                                } else {
                                    player.draw();
                                }
                            },
                        },
                        kivagz: {
                            trigger: {
                                player: ['phaseBegin', 'damageEnd'],
                            },
                            audio: 'ext:王朝更替策/audio:1',
                            forced: true,
                            filter(event, player) {
                                return !player.getEquip('qinggang');
                            },
                            content() {
                                if (trigger.name == 'phase') {
                                    player.useCard(game.createCard('qinggang', 'diamond', 1), player);
                                } else {
                                    player.draw();
                                }
                            },
                        },
                        神旗: {
                            trigger: {
                                player: 'phaseAfter',
                            },
                            audio: 'ext:王朝更替策/audio:1',
                            forced: true,
                            init(player) {
                                player.storage.神旗 = [];
                            },
                            intro: {
                                content: 'characters',
                            },
                            content() {
                                'step 0';
                                'step 1';
                                var list = [];
                                var list2 = [];
                                var players = game.players.concat(game.dead);
                                for (var i of players) {
                                    list2.add(i.name);
                                    list2.add(i.name1);
                                    list2.add(i.name2);
                                }
                                for (var i in lib.character) {
                                    if (lib.character[i][1] != 'shen') continue;
                                    if (lib.character[i][4].includes('boss')) continue;
                                    if (lib.character[i][4].includes('minskin')) continue;
                                    if (player.storage.神旗.includes(i)) continue;
                                    if (list2.includes(i)) continue;
                                    list.push(i);
                                }
                                var name = list.randomGet();
                                player.storage.神旗.push(name);
                                player.markSkill('神旗');
                                var skills = lib.character[name][3];
                                for (var i = 0; i < skills.length; i++) {
                                    player.addSkill(skills[i]);
                                }
                                event.dialog = ui.create.dialog('<div class="text center">' + get.translation(player) + '发动了【神旗】', [[name], 'character']);
                                ('step 2');
                                event.dialog.close();
                            },
                        },
                        kivahcw: {
                            trigger: {
                                player: 'phaseAfter',
                            },
                            audio: 'ext:王朝更替策/audio:1',
                            forced: true,
                            init(player) {
                                player.storage.kivahcw = [];
                            },
                            intro: {
                                content: 'characters',
                            },
                            content() {
                                'step 0';
                                'step 1';
                                var list = [];
                                var list2 = [];
                                var players = game.players.concat(game.dead);
                                for (var i of players) {
                                    list2.add(i.name);
                                    list2.add(i.name1);
                                    list2.add(i.name2);
                                }
                                for (var i in lib.character) {
                                    if (lib.character[i][1] != 'shu') continue;
                                    if (lib.character[i][4].includes('boss')) continue;
                                    if (lib.character[i][4].includes('minskin')) continue;
                                    if (player.storage.kivahcw.includes(i)) continue;
                                    if (list2.includes(i)) continue;
                                    list.push(i);
                                }
                                var name = list.randomGet();
                                player.storage.kivahcw.push(name);
                                player.markSkill('kivahcw');
                                var skills = lib.character[name][3];
                                for (var i = 0; i < skills.length; i++) {
                                    player.addSkill(skills[i]);
                                }
                                event.dialog = ui.create.dialog('<div class="text center">' + get.translation(player) + '发动了【楚王】', [[name], 'character']);
                                ('step 2');
                                event.dialog.close();
                            },
                        },
                        kivaxcb: {
                            trigger: {
                                player: 'phaseAfter',
                            },
                            audio: 'ext:王朝更替策/audio:1',
                            forced: true,
                            init(player) {
                                player.storage.kivaxcb = [];
                            },
                            intro: {
                                content: 'characters',
                            },
                            content() {
                                'step 0';
                                'step 1';
                                var list = [];
                                var list2 = [];
                                var players = game.players.concat(game.dead);
                                for (var i of players) {
                                    list2.add(i.name);
                                    list2.add(i.name1);
                                    list2.add(i.name2);
                                }
                                for (var i in lib.character) {
                                    if (lib.character[i][1] != 'wu') continue;
                                    if (lib.character[i][4].includes('boss')) continue;
                                    if (lib.character[i][4].includes('minskin')) continue;
                                    if (player.storage.kivaxcb.includes(i)) continue;
                                    if (list2.includes(i)) continue;
                                    list.push(i);
                                }
                                var name = list.randomGet();
                                player.storage.kivaxcb.push(name);
                                player.markSkill('kivaxcb');
                                var skills = lib.character[name][3];
                                for (var i = 0; i < skills.length; i++) {
                                    player.addSkill(skills[i]);
                                }
                                event.dialog = ui.create.dialog('<div class="text center">' + get.translation(player) + '发动了【成败】', [[name], 'character']);
                                ('step 2');
                                event.dialog.close();
                            },
                        },
                        kivazzz: {
                            trigger: {
                                player: 'phaseAfter',
                            },
                            audio: 'ext:王朝更替策/audio:1',
                            forced: true,
                            init(player) {
                                player.storage.kivazzz = [];
                            },
                            intro: {
                                content: 'characters',
                            },
                            content() {
                                'step 0';
                                'step 1';
                                var list = [];
                                var list2 = [];
                                var players = game.players.concat(game.dead);
                                for (var i of players) {
                                    list2.add(i.name);
                                    list2.add(i.name1);
                                    list2.add(i.name2);
                                }
                                for (var i in lib.character) {
                                    if (lib.character[i][1] != 'qun') continue;
                                    if (lib.character[i][4].includes('boss')) continue;
                                    if (lib.character[i][4].includes('minskin')) continue;
                                    if (player.storage.kivazzz.includes(i)) continue;
                                    if (list2.includes(i)) continue;
                                    list.push(i);
                                }
                                var name = list.randomGet();
                                player.storage.kivazzz.push(name);
                                player.markSkill('kivazzz');
                                var skills = lib.character[name][3];
                                for (var i = 0; i < skills.length; i++) {
                                    player.addSkill(skills[i]);
                                }
                                event.dialog = ui.create.dialog('<div class="text center">' + get.translation(player) + '发动了【择主】', [[name], 'character']);
                                ('step 2');
                                event.dialog.close();
                            },
                        },
                        kivayxsyr: {
                            audio: 'ext:王朝更替策/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            position: 'he',
                            filterCard: true,
                            selectCard: [1, Infinity],
                            prompt: '弃置任意张牌并摸等量的牌',
                            check(card) {
                                return 6 - get.value(card);
                            },
                            content() {
                                player.draw(cards.length);
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                                threaten: 1.5,
                            },
                        },
                        kivacjsy: {
                            trigger: {
                                player: 'phaseBefore',
                            },
                            content() {
                                player.init('boss_caocao');
                                player.removeSkill('kivacsy');
                                player.removeSkill('tiandu');
                                player.removeSkill('bazhen');
                                player.draw();
                                player.say('参后为操');
                            },
                        },
                        kivacsy: {
                            trigger: {
                                player: ['phaseBegin', 'damageEnd'],
                            },
                            audio: 'ext:王朝更替策/audio:1',
                            forced: true,
                            filter(event, player) {
                                return !player.getEquip('langeguaiyi');
                            },
                            content() {
                                if (trigger.name == 'phase') {
                                    player.useCard(game.createCard('langeguaiyi', 'diamond', 1), player);
                                } else {
                                    player.draw();
                                }
                            },
                        },
                        kivacc: {
                            audio: 'ext:王朝更替策/audio:1',
                            derivation: ['kivacsy', 'kivacjsy'],
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return player.hp == 1 && !player.storage.kivacc;
                            },
                            forced: true,
                            _priority: 3,
                            content() {
                                player.addSkill('kivacsy');
                                player.addSkill('kivacjsy');
                                player.awakenSkill('kivacc');
                                player.storage.kivacc = true;
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
                        kivabd3: {
                            trigger: {
                                global: ['useCardAfter', 'useSkillAfter', 'phaseAfter'],
                            },
                            silent: true,
                            filter(event, player) {
                                return event.skill != 'kivabd2' && event.skill != 'qinwang2';
                            },
                            content() {
                                player.removeSkill('kivabd3');
                            },
                            forced: true,
                            popup: false,
                        },
                        kivapxz: {
                            mod: {
                                suit(card, suit) {
                                    if (suit == 'diamond') return 'club';
                                },
                            },
                        },
                        kivabd1: {
                            audio: 'kivabd',
                            enable: 'chooseToUse',
                            filter(event, player) {
                                if (event.filterCard && !event.filterCard({ name: 'sha' }, player, event)) return false;
                                if (!player.hasZhuSkill('kivabd')) return false;
                                if (player.hasSkill('kivabd3')) return false;
                                if (!lib.filter.cardUsable({ name: 'sha' }, player)) return false;
                                return game.hasPlayer(function (current) {
                                    return current != player && current.group == 'qun';
                                });
                            },
                            filterTarget(card, player, target) {
                                if (_status.event._backup && typeof _status.event._backup.filterTarget == 'function' && !_status.event._backup.filterTarget({ name: 'sha' }, player, target)) {
                                    return false;
                                }
                                return player.canUse({ name: 'sha' }, target);
                            },
                            content() {
                                'step 0';
                                if (event.current == undefined) event.current = player.next;
                                if (event.current == player) {
                                    player.addSkill('kivabd3');
                                    event.getParent(2).step = 0;
                                    event.finish();
                                } else if (event.current.group == 'qun') {
                                    var next = event.current.chooseToRespond('是否替' + get.translation(player) + '对' + get.translation(target) + '使用一张杀', function (card, player, event) {
                                        event = event || _status.event;
                                        return card.name == 'sha' && event.source.canUse(card, event.target);
                                    });
                                    next.set('ai', function (card) {
                                        var event = _status.event;
                                        return get.effect(event.target, card, event.source, event.player);
                                    });
                                    next.set('source', player);
                                    next.set('target', target);
                                    next.autochoose = lib.filter.autoRespondSha;
                                } else {
                                    event.current = event.current.next;
                                    event.redo();
                                }
                                ('step 1');
                                if (result.bool) {
                                    event.finish();
                                    if (result.cards && result.cards.length == 1 && result.cards[0].name == 'sha') {
                                        player.useCard(result.cards[0], target).animate = false;
                                    } else {
                                        player.useCard({ name: 'sha' }, target).animate = false;
                                    }
                                } else {
                                    event.current = event.current.next;
                                    event.goto(0);
                                }
                            },
                            ai: {
                                result: {
                                    target(player, target) {
                                        if (player.hasSkill('kivabd3')) return 0;
                                        return get.effect(target, { name: 'sha' }, player, target);
                                    },
                                },
                                order() {
                                    return get.order({ name: 'sha' }) - 0.1;
                                },
                            },
                        },
                        kivabd2: {
                            audio: 'kivabd',
                            trigger: {
                                player: 'chooseToRespondBegin',
                            },
                            filter(event, player) {
                                if (event.responded) return false;
                                if (player.storage.kivabding) return false;
                                if (!player.hasZhuSkill('kivabd')) return false;
                                if (event.filterCard && event.filterCard({ name: 'sha' }, player, event) == false) return false;
                                return game.hasPlayer(function (current) {
                                    return current != player && current.group == 'qun';
                                });
                            },
                            content() {
                                'step 0';
                                if (event.current == undefined) event.current = player.next;
                                if (event.current == player) {
                                    event.finish();
                                } else if (event.current.group == 'qun') {
                                    player.storage.jijianging = true;
                                    var next = event.current.chooseToRespond('是否替' + get.translation(player) + '打出一张杀？', { name: 'sha' });
                                    next.set('ai', function () {
                                        var event = _status.event;
                                        return get.attitude(event.player, event.source) - 2;
                                    });
                                    next.set('source', player);
                                    next.autochoose = lib.filter.autoRespondSha;
                                } else {
                                    event.current = event.current.next;
                                    event.redo();
                                }
                                ('step 1');
                                player.storage.kivabding = false;
                                if (result.bool) {
                                    event.finish();
                                    trigger.result = result;
                                    trigger.responded = true;
                                    trigger.animate = false;
                                } else {
                                    event.current = event.current.next;
                                    event.goto(0);
                                }
                            },
                        },
                        kivabd: {
                            audio: 'ext:王朝更替策/audio:1',
                            group: ['kivabd2', 'kivabd1'],
                            zhuSkill: false,
                        },
                        kivast: {
                            trigger: {
                                player: 'phaseBefore',
                            },
                            audio: 'ext:王朝更替策/audio:1',
                            content() {
                                player.init('zhugelian合');
                                player.addSkill('niepan');
                                player.draw();
                                player.say('师傅,我们一起上吧!');
                            },
                        },
                        kivaffj: {
                            trigger: {
                                player: 'phaseBefore',
                            },
                            audio: 'ext:王朝更替策/audio:1',
                            content() {
                                player.init('boss_zhaoyun');
                                player.addSkill('enyuan');
                                player.draw();
                                player.say('子龙将军可立大功!');
                            },
                        },
                        kivahenshin: {
                            trigger: {
                                player: 'phaseBefore',
                            },
                            audio: 'ext:王朝更替策/audio:1',
                            zhuSkill: true,
                            content() {
                                player.init('zhangxiuhenshin合');
                                player.addSkill('fangquan');
                                player.addSkill('kongju');
                                player.addSkill('hanqiang');
                                player.addSkill('biaoqi');
                                player.draw();
                                player.say('我乃北地枪王!');
                            },
                        },
                        kivazy: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            check() {
                                return 1;
                            },
                            content() {
                                'step 0';
                                trigger.finish();
                                trigger.untrigger();
                                event.cards = get.cards(2);
                                player.showCards(event.cards);
                                ('step 1');
                                if (get.color(event.cards[0]) != get.color(event.cards[1])) {
                                    player.addTempSkill('xinzhongyong', 'phaseAfter');
                                    player.addTempSkill('longyin', 'phaseAfter');
                                }
                                player.gain(event.cards);
                            },
                        },
                        kivazbsm: {
                            trigger: {
                                player: ['phaseBegin', 'damageEnd'],
                            },
                            audio: 'ext:王朝更替策/audio:1',
                            forced: true,
                            filter(event, player) {
                                return !player.getEquip('zhangba');
                            },
                            content() {
                                if (trigger.name == 'phase') {
                                    player.useCard(game.createCard('zhangba', 'diamond', 1), player);
                                } else {
                                    player.draw();
                                }
                            },
                        },
                        kivaqlyyd: {
                            trigger: {
                                player: ['phaseBegin', 'damageEnd'],
                            },
                            audio: 'ext:王朝更替策/audio:1',
                            forced: true,
                            filter(event, player) {
                                return !player.getEquip('qinglong');
                            },
                            content() {
                                if (trigger.name == 'phase') {
                                    player.useCard(game.createCard('qinglong', 'diamond', 1), player);
                                } else {
                                    player.draw();
                                }
                            },
                        },
                        kiva3: {
                            trigger: {
                                player: 'phaseBefore',
                            },
                            content() {
                                player.init('zhangfei合');
                                player.removeSkill('zz_GY');
                                player.removeSkill('zz_ML');
                                player.draw();
                                player.say('燕人张翼德在此!');
                            },
                        },
                        kiva2: {
                            trigger: {
                                player: 'phaseBefore',
                            },
                            content() {
                                player.init('guanyu合');
                                player.removeSkill('zz_GY');
                                player.removeSkill('zz_ML');
                                player.draw();
                                player.say('关羽在此,尔等受死!');
                            },
                        },
                        kivazx: {
                            trigger: {
                                player: 'phaseBefore',
                            },
                            content() {
                                player.init('simayi合');
                                player.addSkill('yiji');
                                player.removeSkill('zz_ML');
                                player.draw();
                                player.say('那就这样吧......');
                            },
                        },
                        kivasxk: {
                            trigger: {
                                player: 'phaseBefore',
                            },
                            content() {
                                player.init('sunce合');
                                player.addSkill('suishi');
                                player.removeSkill('zz_ML');
                                player.draw();
                                player.say('哥哥,让我们一起努力吧!');
                            },
                        },
                        kivawj: {
                            audio: 'ext:王朝更替策/audio:1',
                            enable: 'chooseToUse',
                            filterCard(card, player) {
                                return get.color(card) == 'black';
                            },
                            viewAsFilter(player) {
                                return player.countCards('h', { color: 'black' }) > 0;
                            },
                            viewAs: {
                                name: 'tiesuo',
                                suit: 'club',
                                number: 6,
                                cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'club', number: 6, name: 'shuchui', cardid: '2576686405', _transform: 'translateX(112px)', clone: { name: 'shuchui', suit: 'club', number: 6, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, timeout: 4366 }, timeout: 4347, original: 'h' }],
                            },
                            prompt: '将一张黑色手牌当铁索连环使用',
                            check(card) {
                                return 8 - get.value(card);
                            },
                            threaten: 1.2,
                            ai: {
                                basic: {
                                    useful: [6, 4],
                                    value: [6, 4],
                                    order: 7,
                                },
                                result: {
                                    player: 1,
                                    target(player, target) {
                                        if (target.isLinked()) return 1;
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
                                expose: 0.2,
                                wuxie() {
                                    if (Math.random() < 0.5) return 0;
                                },
                                tag: {
                                    multitarget: 1,
                                    multineg: 1,
                                    norepeat: 1,
                                },
                            },
                        },
                        kivazbz: {
                            trigger: {
                                player: 'huogongBegin',
                            },
                            content() {
                                player.draw();
                                var chat = ['魏军士气高盛,不可轻敌!', '魏国,可徐徐图之.'].randomGet();
                                player.say(chat);
                            },
                            group: 'kivazbz',
                            subSkill: {
                                1: {
                                    enable: 'phaseUse',
                                    filterCard: true,
                                    position: 'hej',
                                    usable: 1,
                                    viewAs: {
                                        name: 'juedou',
                                        suit: 'club',
                                        number: 13,
                                        cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'club', number: 13, name: 'sha', cardid: '4536044426', clone: { name: 'sha', suit: 'club', number: 13, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, timeout: 10043 }, timeout: 9996, original: 'h' }],
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
                                                    if (typeof _status.event.filterCard == 'function' && _status.event.filterCard({ name: 'juedou' }, player)) {
                                                        return -10;
                                                    }
                                                    if (_status.event.skill) {
                                                        var viewAs = get.info(_status.event.skill).viewAs;
                                                        if (viewAs == 'juedou') return -10;
                                                        if (viewAs && viewAs.name == 'juedou') return -10;
                                                    }
                                                }
                                                return 0;
                                            },
                                            target(player, target) {
                                                if (target.hasSkill('juedou2') || target.countCards('h') == 0) return 0;
                                                if (player.countCards('h') <= 1) return 0;
                                                if (target == player) {
                                                    if (typeof _status.event.filterCard == 'function' && _status.event.filterCard({ name: 'juedou' }, player)) {
                                                        return -1.5;
                                                    }
                                                    if (_status.event.skill) {
                                                        var viewAs = get.info(_status.event.skill).viewAs;
                                                        if (viewAs == 'juedou') return -1.5;
                                                        if (viewAs && viewAs.name == 'juedou') return -1.5;
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
                                            respond: 2,
                                            respondSha: 2,
                                        },
                                    },
                                },
                            },
                        },
                        kivatzb: {
                            audio: 'ext:王朝更替策/audio:1',
                            enable: 'chooseToUse',
                            filterCard(card, player) {
                                return card.suit == 'diamond';
                            },
                            viewAsFilter(player) {
                                return player.countCards('h', { suit: 'diamond' }) > 0;
                            },
                            viewAs: {
                                name: 'wugu',
                                suit: 'diamond',
                                number: 8,
                                cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'diamond', number: 8, name: 'sha', cardid: '2767105321', clone: { name: 'sha', suit: 'diamond', number: 8, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, timeout: 709 }, timeout: 690, original: 'h' }],
                            },
                            prompt: '将一张♦️️手牌当五谷丰登使用',
                            check(card) {
                                return 8 - get.value(card);
                            },
                            threaten: 1.2,
                            ai: {
                                basic: {
                                    useful: [6, 4],
                                    value: [6, 4],
                                    order: 3,
                                },
                                result: {
                                    player: 1,
                                    target(player, target) {
                                        if (get.is.versus()) {
                                            if (target == player) return 1.5;
                                            return 1;
                                        }
                                        if (player.hasUnknown(2)) {
                                            return 0;
                                        }
                                        return 2 - (2 * get.distance(player, target, 'absolute')) / game.countPlayer();
                                    },
                                },
                                expose: 0.2,
                                wuxie() {
                                    if (Math.random() < 0.5) return 0;
                                },
                                tag: {
                                    draw: 1,
                                    multitarget: 1,
                                },
                            },
                        },
                        kivaszb: {
                            trigger: {
                                global: 'damageBefore',
                            },
                            audio: 'ext:王朝更替策/audio:1',
                            _priority: 6,
                            filter(event, player) {
                                return event.player != player && event.player.hp == 1 && player.countCards('he', { type: 'equip' }) > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard(get.prompt('kivaszb', trigger.player), { type: 'equip' }, 'he');
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
                        kivaft: {
                            trigger: {
                                player: 'phaseBefore',
                            },
                            content() {
                                player.init('mayunlu合');
                                player.removeSkill('zz_GY');
                                player.removeSkill('zz_ML');
                                player.draw('tao');
                                player.say('阿里嘎多');
                            },
                        },
                        kivagwd: {
                            trigger: {
                                player: 'phaseBefore',
                            },
                            filter(event, player) {
                                return player.storage.fanghun > 0;
                            },
                            prompt(event, player) {
                                var num = player.storage.fanghun2;
                                var mode = get.mode();
                                if (mode != 'chess' && mode != 'tafang' && mode != 'stone') {
                                    num = Math.min(num, game.players.length + game.dead.length);
                                }
                                return get.prompt('kivagwd') + '(体力上限:' + num + ')';
                            },
                            check(event, player) {
                                var num = player.storage.fanghun2;
                                if (num == 1) return false;
                                if (player.hp <= 1) return true;
                                if (num == 2) return false;
                                if (num == 3) return player.hp < 3 && player.isMinHp();
                                return true;
                            },
                            content() {
                                'step 0';
                                var list;
                                if (_status.connectMode) {
                                    list = get.charactersOL(function (i) {
                                        return lib.character[i][1] != 'hankiva';
                                    });
                                } else {
                                    list = get.gainableCharacters(function (info) {
                                        return info[1] == 'hankiva';
                                    });
                                }
                                var players = game.players.concat(game.dead);
                                for (var i of players) {
                                    list.remove(i.name);
                                    list.remove(i.name1);
                                    list.remove(i.name2);
                                }
                                var dialog = ui.create.dialog('将武将牌替换为一名角色', 'hidden');
                                dialog.add([list.randomGets(5), 'character']);
                                player.chooseButton(dialog, true).ai = function (button) {
                                    return get.rank(button.link, true) - lib.character[button.link][2];
                                };
                                player.awakenSkill('kivagwd');
                                ('step 1');
                                var num = player.storage.fanghun2;
                                var mode = get.mode();
                                if (mode != 'chess' && mode != 'tafang' && mode != 'stone') {
                                    num = Math.min(num, game.players.length + game.dead.length);
                                }
                                player.reinit('liuxiu合', result.links[0], num);
                            },
                        },
                        kivajww: {
                            audio: 'ext:王朝更替策/audio:1',
                            audioname: ['heqi', 'sunce'],
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num + 5;
                            },
                            ai: {
                                threaten: 1.5,
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    if (player.hp < player.maxHp) return num + player.maxHp - player.hp;
                                },
                            },
                        },
                        kivadll: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            audio: 'ext:王朝更替策/audio:1',
                            forced: true,
                            filter(event, player) {
                                var list = ['wei', 'shu', 'wu', 'qun', 'hankiva', 'tangkiva', 'jinkiva'];
                                var players = game.filterPlayer();
                                var num = 0;
                                for (var i = 0; i < players.length && list.length; i++) {
                                    if (list.includes(i.group)) {
                                        list.remove(i.group);
                                        num++;
                                    }
                                }
                                return player.countCards('h') < num;
                            },
                            content() {
                                var list = ['wei', 'shu', 'wu', 'qun', 'hankiva', 'tangkiva', 'jinkiva'];
                                var players = game.filterPlayer();
                                var num = 0;
                                for (var i = 0; i < players.length && list.length; i++) {
                                    if (list.includes(i.group)) {
                                        list.remove(i.group);
                                        num++;
                                    }
                                }
                                player.draw(num - player.countCards('h'));
                            },
                            ai: {
                                threaten: 1.3,
                            },
                        },
                        kivaxc: {
                            audio: 'ext:王朝更替策/audio:1',
                            audioname: ['heqi', 'sunce'],
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                threaten: 1.5,
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    if (player.hp < player.maxHp) return num + player.maxHp - player.hp;
                                },
                            },
                        },
                        kivafj: {
                            gainable: true,
                            group: ['luoying1', 'luoying2'],
                        },
                        kivajjjjjjj: {
                            audio: 'ext:王朝更替策/audio:1',
                            enable: 'phaseUse',
                            usable: 1,
                            discard: false,
                            filter(event, player) {
                                return player.countCards('he', { suit: 'club' }) > 0;
                            },
                            prepare: 'throw',
                            position: 'he',
                            filterCard: {
                                suit: 'club',
                            },
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                if (target.hasJudge('caomu')) return true;
                                return lib.filter.targetEnabled({ name: 'caomu' }, player, target);
                            },
                            check(card) {
                                return 7 - get.value(card);
                            },
                            content() {
                                if (target.hasJudge('caomu')) {
                                    target.discard(target.getJudge('caomu'));
                                } else {
                                    var next = player.useCard({ name: 'caomu' }, target, cards);
                                    next.animate = false;
                                    next.audio = false;
                                }
                                player.draw(2);
                            },
                            ai: {
                                result: {
                                    target(player, target) {
                                        if (target.hasJudge('caomu')) return -get.effect(target, { name: 'caomu' }, player, target);
                                        return get.effect(target, { name: 'caomu' }, player, target);
                                    },
                                },
                                order: 9,
                            },
                            forced: true,
                        },
                        kivalyw: {
                            audio: 'ext:王朝更替策/audio:1',
                            zhuSkill: true,
                            keepSkill: true,
                            derivation: 'kivawjsm',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!player.hasZhuSkill('kivalyw')) return false;
                                if (player.storage.kivalyw) return false;
                                return player.isMinHp();
                            },
                            content() {
                                player.storage.kivalyw = true;
                                player.maxHp++;
                                player.update();
                                player.recover();
                                if (player.hasSkill('kivalyw')) {
                                    player.addSkill('kivawjsm');
                                } else {
                                    player.addAdditionalSkill('kivalyw', 'kivawjsm');
                                }
                                if (!player.isZhu) {
                                    player.storage.zhuSkill_kivalyw = ['kivawjsm'];
                                } else {
                                    event.trigger('zhuUpdate');
                                }
                                player.awakenSkill('kivalyw');
                            },
                        },
                        kivawjsm: {
                            mod: {
                                maxHandcard(player, num) {
                                    if (player.hp < player.maxHp) return num + player.maxHp - player.hp;
                                },
                                targetEnabled(card, player, target, now) {
                                    if (target.countCards('h') < target.maxHp) {
                                        if (card.name == 'shunshou' || card.name == 'guohe') return false;
                                    } else if (target.countCards('h') > target.maxHp) {
                                        if (card.name == 'lebu') return false;
                                    }
                                },
                            },
                        },
                        kivasjj: {
                            audio: 'ext:王朝更替策/audio:true',
                            derivation: ['benghuai', 'kivayxx'],
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return player.maxHp > game.players.length && player.hp < player.maxHp && !player.storage.kivasjj;
                            },
                            forced: true,
                            content() {
                                var num = player.maxHp - player.countCards('h');
                                if (num > 0) {
                                    player.draw(num), player.lostHp++;
                                }
                                player.addSkill('benghuai');
                                player.addSkill('kivayxx');
                                player.storage.kivasjj = true;
                                player.awakenSkill('kivasjj');
                            },
                        },
                        kivayxx: {
                            trigger: {
                                player: 'phaseBefore',
                            },
                            content() {
                                player.init('simayi合');
                                player.addSkill('huaiyi');
                                player.addSkill('xinkuanggu');
                                player.removeSkill('kivajj');
                                player.maxHp++;
                                player.say('父亲,助我背水一战!');
                            },
                        },
                        kivazxlx: {
                            audio: 'ext:王朝更替策/audio:1',
                            zhuSkill: true,
                            keepSkill: true,
                            derivation: 'kivazmm',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!player.hasZhuSkill('kivazxlx')) return false;
                                if (player.storage.kivazxlx) return false;
                                return player.isMinHp();
                            },
                            content() {
                                player.storage.kivazxlx = true;
                                player.maxHp++;
                                player.update();
                                player.recover();
                                if (player.hasSkill('kivazxlx')) {
                                    player.addSkill('kivazmm');
                                } else {
                                    player.addAdditionalSkill('kivazxlx', 'kivazmm');
                                }
                                if (!player.isZhu) {
                                    player.storage.zhuSkill_kivazxlx = ['kivazmm'];
                                } else {
                                    event.trigger('zhuUpdate');
                                }
                                player.awakenSkill('kivazxlx');
                            },
                        },
                        kivazmm: {
                            mod: {
                                selectTarget(card, player, range) {
                                    if (Array.isArray(range) && range[1] == -1) return;
                                    if (player.getEquip(1)) return;
                                    if (card.name == 'sha') range[1] += 2;
                                },
                                cardUsable(card, player, num) {
                                    if (player.getEquip(1)) return;
                                    if (card.name == 'sha') return num + 1;
                                },
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.subtype(card) == 'equip1') return -1;
                                    },
                                },
                            },
                        },
                        kivaht: {
                            audio: 'ext:王朝更替策/audio:1',
                            audioname: ['heqi', 'sunce'],
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                threaten: 1.5,
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    if (player.hp < player.maxHp) return num + player.maxHp - player.hp;
                                },
                            },
                        },
                        kivasd: {
                            audio: 'ext:王朝更替策/audio:1',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                player.draw(2);
                            },
                        },
                        kivakyss: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            audio: 'ext:王朝更替策/audio:1',
                            filter(event, player) {
                                return !player.storage.kivakyss;
                            },
                            intro: {
                                content: 'limited',
                            },
                            mark: true,
                            forced: true,
                            content() {
                                'step 0';
                                var check = player.hp == 1 || (player.hp == 2 && player.countCards('h') <= 1);
                                player
                                    .chooseTarget(get.prompt('kivakyss'))
                                    .set('ai', function (target) {
                                        if (!_status.event.check) return 0;
                                        return get.attitude(_status.event.player, target);
                                    })
                                    .set('check', check);
                                ('step 1');
                                if (result.bool) {
                                    player.storage.suiren = true;
                                    player.awakenSkill('kivakyss');
                                    player.removeSkill('kongju');
                                    player.addSkill('kivastl');
                                    player.addSkill('kivasd');
                                    player.addSkill('kivaht');
                                    player.gainMaxHp();
                                    player.recover();
                                    result.targets[0].draw(3);
                                }
                            },
                        },
                        kivastl: {
                            audio: 'ext:王朝更替策/audio:1',
                            derivation: ['kongju', 'kivaaszl'],
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return player.hp == 1 && !player.storage.kivastl;
                            },
                            forced: true,
                            _priority: 3,
                            content() {
                                player.gainMaxHp();
                                player.addSkill('kivaaszl');
                                player.removeSkill('kivasd');
                                player.removeSkill('kivaht');
                                player.addSkill('kongju');
                                player.awakenSkill('kivastl');
                                player.storage.kivastl = true;
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
                        kivaaszl: {
                            audio: 'ext:王朝更替策/audio:1',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            check() {
                                return false;
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && (get.color(event.card) == 'black' || event.source.hasSkill('jiu'));
                            },
                            content() {
                                player.loseMaxHp();
                            },
                        },
                        kivasssssss: {
                            audio: 'ext:王朝更替策/audio:1',
                            enable: 'phaseUse',
                            usable: 3,
                            discard: false,
                            filter(event, player) {
                                return player.countCards('he', { suit: 'diamond' }) > 0;
                            },
                            prepare: 'throw',
                            position: 'he',
                            filterCard: {
                                suit: 'diamond',
                            },
                            filterTarget(card, player, target) {
                                if (player == target) return false;
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
                                player.draw(2);
                                player.gainMaxHp();
                                player.addSkill('jueqing');
                                player.removeSkill('kivaaz');
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
                            forced: true,
                        },
                        kivalx: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            check() {
                                return false;
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && (get.color(event.card) == 'black' || event.source.hasSkill('jiu'));
                            },
                            content() {
                                player.loseMaxHp(2);
                            },
                        },
                        kivaaz: {
                            audio: 'ext:王朝更替策/audio:1',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                player.draw(4);
                            },
                        },
                        kivajr1: {
                            audio: 'ext:王朝更替策/audio:1',
                        },
                        kivaj1: {
                            audio: 'ext:王朝更替策/audio:1',
                        },
                        kivayjc: {
                            trigger: {
                                player: 'dieBegin',
                            },
                            forced: true,
                            audio: 'ext:王朝更替策/audio:1',
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('kivayjc'), function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(_status.event.player, target) / Math.sqrt(target.hp + 1);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    target.addSkill(lib.skill.kivayjc.derivation.randomGet());
                                    target.addTempSkill('juexiang_club', { player: 'phaseBegin' });
                                }
                            },
                            derivation: ['yiji', 'tiandu', 'fankui', 'guicai'],
                            subSkill: {
                                ji: {
                                    mark: true,
                                    nopop: true,
                                    intro: {
                                        content: 'info',
                                    },
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        return event.source && event.source.isIn() && event.source != player;
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.source) < 0;
                                    },
                                    logTarget: 'source',
                                    content() {
                                        trigger.source.loseHp();
                                        var card = get.cardPile(function (card) {
                                            return get.type(card) == 'equip';
                                        });
                                        if (card) {
                                            trigger.source.equip(card, true).set('delay', true);
                                        }
                                    },
                                    ai: {
                                        maixie_defend: true,
                                    },
                                },
                                lie: {
                                    mark: true,
                                    nopop: true,
                                    intro: {
                                        content: 'info',
                                    },
                                    trigger: {
                                        player: 'recoverEnd',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget(get.prompt2('yiji'), function (card, player, target) {
                                                return target != player;
                                            })
                                            .set('ai', function (target) {
                                                return -get.attitude(player, target) / (1 + target.hp);
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            var target = result.targets[0];
                                            target.loseHp();
                                            var card = get.cardPile(function (card) {
                                                return get.type(card) == 'equip';
                                            });
                                            if (card) {
                                                target.equip(card, true).set('delay', true);
                                            }
                                        }
                                    },
                                },
                                rou: {
                                    mark: true,
                                    nopop: true,
                                    intro: {
                                        content: 'info',
                                    },
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        return event.source && event.source.isIn() && event.source != player;
                                    },
                                    check(event, player) {
                                        var att = get.attitude(player, event.source);
                                        if (player.isHealthy()) {
                                            return att < 0;
                                        } else {
                                            return att > 0;
                                        }
                                    },
                                    logTarget: 'source',
                                    content() {
                                        trigger.source.recover();
                                        if (trigger.source.countCards('he', { type: 'equip' })) {
                                            trigger.source.chooseToDiscard('he', true, '弃置一张装备牌', function (card) {
                                                return get.type(card) == 'equip';
                                            });
                                        }
                                    },
                                    ai: {
                                        maixie_defend: true,
                                    },
                                },
                                he: {
                                    mark: true,
                                    nopop: true,
                                    intro: {
                                        content: 'info',
                                    },
                                    trigger: {
                                        player: 'recoverEnd',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget(get.prompt2('tiandu'), function (card, player, target) {
                                                return target != player;
                                            })
                                            .set('ai', function (target) {
                                                var att = get.attitude(_status.event.player, target);
                                                if (target.isHealthy() && target.countCards('he')) {
                                                    return -att;
                                                } else {
                                                    return (10 * att) / (1 + target.hp);
                                                }
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            var target = result.targets[0];
                                            target.recover();
                                            if (target.countCards('he', { type: 'equip' })) {
                                                target.chooseToDiscard('he', true, '弃置一张装备牌', function (card) {
                                                    return get.type(card) == 'equip';
                                                });
                                            }
                                        }
                                    },
                                },
                                club: {
                                    mark: true,
                                    nopop: true,
                                    intro: {
                                        content: 'info',
                                    },
                                    mod: {
                                        targetEnabled(card, player, target) {
                                            if (card.suit == 'club' && player != target) {
                                                return false;
                                            }
                                        },
                                    },
                                },
                            },
                        },
                        kivaty: {
                            audio: 'ext:王朝更替策/audio:1',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                event.cards = get.cards(1 * trigger.num);
                                ('step 1');
                                if (event.cards.length > 1) {
                                    player.chooseCardButton('将<遗计>牌分配给任意角色', true, event.cards, [1, event.cards.length]).set('ai', function (button) {
                                        if (ui.selected.buttons.length == 0) return 1;
                                        return 0;
                                    });
                                } else if (event.cards.length == 1) {
                                    event._result = { links: event.cards.slice(0), bool: true };
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    for (var i of result.links) {
                                        event.cards.remove(i);
                                    }
                                    event.togive = result.links.slice(0);
                                    player
                                        .chooseTarget('将' + get.translation(result.links) + '交给一名角色', true)
                                        .set('ai', function (target) {
                                            var att = get.attitude(_status.event.player, target);
                                            if (_status.event.enemy) {
                                                return -att;
                                            } else if (att > 0) {
                                                return att / (1 + target.countCards('h'));
                                            } else {
                                                return att / 100;
                                            }
                                        })
                                        .set('enemy', get.value(event.togive[0]) < 0);
                                }
                                ('step 3');
                                if (result.targets.length) {
                                    result.targets[0].gain(event.togive, 'draw');
                                    player.line(result.targets[0], 'green');
                                    game.log(result.targets[0], '获得了' + get.cnNumber(event.togive.length) + '张牌');
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
                        kivaqyc: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                player: 'phaseDrawBefore',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var check;
                                var i,
                                    num = game.countPlayer(function (current) {
                                        return current != player && current.countCards('h') && get.attitude(player, current) <= 0;
                                    });
                                check = num >= 2;
                                player
                                    .chooseTarget(
                                        get.prompt('kivaqyc'),
                                        [1, 2],
                                        function (card, player, target) {
                                            return target.countCards('h') > 0 && player != target;
                                        },
                                        function (target) {
                                            if (!_status.event.aicheck) return 0;
                                            var att = get.attitude(_status.event.player, target);
                                            if (target.hasSkill('tuntian')) return att / 10;
                                            return 1 - att;
                                        }
                                    )
                                    .set('aicheck', check);
                                ('step 1');
                                if (result.bool) {
                                    player.gainMultiple(result.targets);
                                    trigger.cancel();
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                            },
                            ai: {
                                threaten: 2,
                                expose: 0.3,
                            },
                        },
                        kivazzc: {
                            audio: 'ext:王朝更替策/audio:1',
                            trigger: {
                                global: ['turnOverAfter', 'linkAfter'],
                            },
                            filter(event, player) {
                                if (event.name == 'link') return event.player.isLinked();
                                return true;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) > 0;
                            },
                            logTarget: 'player',
                            content() {
                                trigger.player.recover();
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        kivaqmqy: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            audio: 'ext:王朝更替策/audio:1',
                            filter(event, player) {
                                return !player.storage.kivaqmqy;
                            },
                            intro: {
                                content: 'limited',
                            },
                            mark: true,
                            forced: true,
                            content() {
                                'step 0';
                                var check = player.hp == 1 || (player.hp == 2 && player.countCards('h') <= 1);
                                player
                                    .chooseTarget(get.prompt('kivaqmqy'))
                                    .set('ai', function (target) {
                                        if (!_status.event.check) return 0;
                                        return get.attitude(_status.event.player, target);
                                    })
                                    .set('check', check);
                                ('step 1');
                                if (result.bool) {
                                    player.storage.suiren = true;
                                    player.awakenSkill('kivaqmqy');
                                    player.addSkill('shiyong');
                                    player.gainMaxHp();
                                    player.recover();
                                    result.targets[0].addSkill('kivawgz');
                                }
                            },
                        },
                        kivawgz: {
                            enable: 'phaseUse',
                            audio: 'ext:王朝更替策/audio:1',
                            usable: 1,
                            filterCard: true,
                            selectCard: [1, Infinity],
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            check(card) {
                                if (ui.selected.cards.length) return -1;
                                var val = get.value(card);
                                if (get.type(card) == 'basic') return 8 - get.value(card);
                                return 5 - get.value(card);
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                'step 0';
                                var types = [];
                                if (Array.isArray(cards)) for (var i of cards) {
                                    types.add(get.type(i, 'trick'));
                                }
                                target
                                    .chooseToDiscard(function (card) {
                                        return !_status.event.types.includes(get.type(card, 'trick'));
                                    })
                                    .set('ai', function (card) {
                                        if (_status.event.player.isTurnedOver()) return -1;
                                        return 8 - get.value(card);
                                    })
                                    .set('types', types)
                                    .set('dialog', ['弃置一张与' + get.translation(player) + '弃置的牌类别均不同的牌,或将武将牌翻面', 'hidden', cards]);
                                ('step 1');
                                if (!result.bool) {
                                    target.turnOver();
                                    target.draw(cards.length);
                                }
                            },
                            ai: {
                                order: 2,
                                expose: 0.3,
                                threaten: 1.8,
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('noturn')) return 0;
                                        if (target.isTurnedOver()) return 2;
                                        return -1 / (target.countCards('h') + 1);
                                    },
                                },
                            },
                        },
                        kivabwxy: {
                            audio: 'ext:王朝更替策/audio:1',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                player.draw();
                                player.addSkill('tianyi');
                                player.addSkill('wushuang');
                                player.removeSkill('renxin');
                                player.removeSkill('kivaxcxy');
                            },
                        },
                        kivaxcxy: {
                            audio: 'ext:王朝更替策/audio:1',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                player.draw();
                                player.addSkill('jiang');
                                player.addSkill('kaikang');
                                player.removeSkill('mashu');
                                player.removeSkill('kivabwxy');
                            },
                        },
                        kivagou: {
                            audio: 'ext:王朝更替策/audio:true',
                        },
                        kivash: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            audio: 'ext:王朝更替策/audio:1',
                            forced: true,
                            filter(event, player) {
                                var list = ['wei', 'shu', 'wu', 'qun', 'hankiva', 'tangkiva', 'jinkiva', 'suikiva', 'qinkiva', 'chukiva', 'songkiva', 'liaokiva', 'jinkiva', 'xiakiva', 'xixiakiva', 'shangkiva', 'zhoukiva', 'mingkiva', 'qingkiva', 'nankiva', 'beikiva', 'wushikiva'];
                                var players = game.filterPlayer();
                                var num = 0;
                                for (var i = 0; i < players.length && list.length; i++) {
                                    if (list.includes(i.group)) {
                                        list.remove(i.group);
                                        num++;
                                    }
                                }
                                return player.countCards('h') < num;
                            },
                            content() {
                                var list = ['wei', 'shu', 'wu', 'qun', 'hankiva', 'tangkiva', 'jinkiva', 'suikiva', 'qinkiva', 'chukiva', 'songkiva', 'liaokiva', 'jinkiva', 'xiakiva', 'xixiakiva', 'shangkiva', 'zhoukiva', 'mingkiva', 'qingkiva', 'nankiva', 'beikiva', 'wushikiva'];
                                var players = game.filterPlayer();
                                var num = 0;
                                for (var i = 0; i < players.length && list.length; i++) {
                                    if (list.includes(i.group)) {
                                        list.remove(i.group);
                                        num++;
                                    }
                                }
                                player.draw(num - player.countCards('h'));
                            },
                            ai: {
                                threaten: 1.3,
                            },
                        },
                        kivadz: {
                            audio: 'ext:王朝更替策/audio:1',
                            trigger: {
                                player: 'phaseDrawBefore',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var check;
                                var i,
                                    num = game.countPlayer(function (current) {
                                        return current != player && current.countCards('h') && get.attitude(player, current) <= 0;
                                    });
                                check = num >= 7;
                                player
                                    .chooseTarget(
                                        get.prompt('kivadz'),
                                        [1, 7],
                                        function (card, player, target) {
                                            return target.countCards('h') > 0 && player != target;
                                        },
                                        function (target) {
                                            if (!_status.event.aicheck) return 0;
                                            var att = get.attitude(_status.event.player, target);
                                            if (target.hasSkill('tuntian')) return att / 10;
                                            return 1 - att;
                                        }
                                    )
                                    .set('aicheck', check);
                                ('step 1');
                                if (result.bool) {
                                    player.gainMultiple(result.targets);
                                    player.gain(game.createCard('jingleishan'));
                                    player.$draw();
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                            },
                            ai: {
                                threaten: 7,
                                expose: 0.3,
                            },
                        },
                        kivajsh: {
                            audio: 'ext:王朝更替策/audio:1',
                            trigger: {
                                player: 'dieBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('kivajsh'), function (card, player, target) {
                                        return player != target && _status.event.source != target;
                                    })
                                    .set('ai', function (target) {
                                        var num = get.attitude(_status.event.player, target);
                                        if (num > 0) {
                                            if (target.hp == 1) {
                                                num += 2;
                                            }
                                            if (target.hp < target.maxHp) {
                                                num += 2;
                                            }
                                        }
                                        return num;
                                    })
                                    .set('source', trigger.source);
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    target.addSkill('benghuai');
                                }
                            },
                            ai: {
                                expose: 0.5,
                            },
                        },
                        kivakh: {
                            audio: 'ext:王朝更替策/audio:1',
                            trigger: {
                                global: 'shaBegin',
                            },
                            filter(event, player) {
                                return get.distance(player, event.target) <= 1;
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) >= 0;
                            },
                            content() {
                                'step 0';
                                player.draw(2);
                                player.gainMaxHp();
                                player.addSkill('rerende');
                                if (trigger.target != player) {
                                    player.chooseCard(true, 'he', '交给' + get.translation(trigger.target) + '一张牌').set('ai', function (card) {
                                        if (get.position(card) == 'e') return -1;
                                        if (card.name == 'shan') return 1;
                                        if (get.type(card) == 'equip') return 0.5;
                                        return 0;
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                trigger.target.gain(result.cards, player);
                                player.$give(result.cards, trigger.target);
                                event.card = result.cards[0];
                                if (get.type(event.card) != 'equip') event.finish();
                                ('step 2');
                                if (!trigger.target.isMin()) {
                                    trigger.target
                                        .chooseBool('是否装备' + get.translation(event.card) + '？')
                                        .set('ai', function () {
                                            var current = _status.event.player.getCards('e', { subtype: get.subtype(_status.event.card) });
                                            if (current && current.length) {
                                                return get.equipValue(event.card) > get.equipValue(current[0]);
                                            }
                                            return true;
                                        })
                                        .set('card', event.card);
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (result.bool) {
                                    trigger.target.equip(event.card);
                                }
                            },
                            ai: {
                                threaten: 1.1,
                            },
                        },
                        扶谏: {
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'ext:王朝更替策/audio:1',
                            position: 'he',
                            filterCard(card, player) {
                                return get.type(card, 'trick') != 'trick';
                            },
                            filter(event, player) {
                                return player.countCards('he', (c) => get.type(c, 'trick') != 'trick') > 0;
                            },
                            check(card) {
                                return 8 - get.value(card);
                            },
                            selectTarget: 2,
                            multitarget: true,
                            discard: false,
                            targetprompt: ['休养生息,实为良策.', '焚书坑儒,万万不可!'],
                            prepare: 'give',
                            filterTarget(card, player, target) {
                                if (ui.selected.targets.length == 0) {
                                    return player != target;
                                } else {
                                    return lib.filter.filterTarget({ name: 'wanjian' }, ui.selected.targets[0], target);
                                }
                            },
                            content() {
                                'step 0';
                                targets[0].gain(cards, player);
                                ('step 1');
                                targets[0].useCard({ name: 'wanjian' }, targets[1]);
                                targets[0].draw(2);
                            },
                            ai: {
                                result: {
                                    player(player) {
                                        var players = game.filterPlayer();
                                        for (var i of players) {
                                            if (i != player && get.attitude(player, i) > 1 && get.attitude(i, player) > 1) {
                                                return 1;
                                            }
                                        }
                                        return 0;
                                    },
                                    target(player, target) {
                                        if (ui.selected.targets.length) {
                                            return -0.1;
                                        }
                                        return 1;
                                    },
                                },
                                order: 8.5,
                                expose: 0.2,
                            },
                        },
                        'kivaFa♂': {
                            audio: 'ext:王朝更替策/audio:1',
                            trigger: {
                                player: 'damageAfter',
                                source: 'damageAfter',
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return event.parent.skill == '扶谏';
                            },
                            content() {
                                player.storage.kivamo = trigger.player;
                            },
                        },
                        kivamo: {
                            audio: 'ext:王朝更替策/audio:1',
                            trigger: {
                                player: 'phaseBefore',
                            },
                            silent: true,
                            content() {
                                player.storage.扶谏 = 0;
                            },
                            forced: true,
                            popup: false,
                        },
                        kivanian: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                player: 'loseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.countCards('h')) return false;
                                if (Array.isArray(event.cards)) for (var i of event.cards) {
                                    if (i.original == 'h') return true;
                                }
                                return false;
                            },
                            content() { },
                        },
                        kivasxx: {
                            audio: 'ext:王朝更替策/audio:1',
                            trigger: {
                                player: 'phaseDiscardEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var check;
                                var i,
                                    num = game.countPlayer(function (current) {
                                        return current != player && current.countCards('h') && get.attitude(player, current) <= 0;
                                    });
                                check = num >= 1;
                                player
                                    .chooseTarget(
                                        get.prompt('kivasxx'),
                                        [1, 1],
                                        function (card, player, target) {
                                            return target.countCards('h') > 0 && player != target;
                                        },
                                        function (target) {
                                            if (!_status.event.aicheck) return 0;
                                            var att = get.attitude(_status.event.player, target);
                                            if (target.hasSkill('tuntian')) return att / 10;
                                            return 1 - att;
                                        }
                                    )
                                    .set('aicheck', check);
                                ('step 1');
                                if (result.bool) {
                                    player.gainMultiple(result.targets);
                                    trigger.cancel();
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                            },
                            ai: {
                                threaten: 1,
                                expose: 0.3,
                            },
                        },
                        kivajyy: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return !player.storage.kivajyy;
                            },
                            init(player) {
                                player.storage.kivajyy = false;
                            },
                            mark: true,
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('kivajyy'), function (card, player, target) {
                                        return target.sex == 'male' && target != player;
                                    })
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
                                    player.awakenSkill('kivajyy');
                                    player.storage.kivajyy = true;
                                    var target = result.targets[0];
                                    target.addSkill('tianyi');
                                    var mode = get.mode();
                                    if (mode == 'identity' || (mode == 'versus' && _status.mode == 'four')) {
                                        if (target.name && lib.character[target.name]) {
                                            var skills = lib.character[target.name][3];
                                            target.storage.zhuSkill_kivajyy = [];
                                            for (var i = 0; i < skills.length; i++) {
                                                var info = lib.skill[skills[i]];
                                                if (info.zhuSkill) {
                                                    target.storage.zhuSkill_kivajyy.push(skills[i]);
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
                            intro: {
                                content: 'limited',
                            },
                        },
                        kivagy: {
                            audio: 'ext:王朝更替策/audio:2',
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (target.countCards('h') == 0) {
                                        if (card.name == 'nanman' || card.name == 'wanjian' || card.name == 'sha' || card.name == 'juedou') return false;
                                    }
                                },
                            },
                            group: 'kivanian',
                            ai: {
                                noh: true,
                                skillTagFilter(player, tag) {
                                    if (tag == 'noh') {
                                        if (player.countCards('h') != 1) return false;
                                    }
                                },
                            },
                        },
                        kivazb: {
                            audio: 'ext:王朝更替策/audio:2',
                            audioname: ['jiangwei'],
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.num = Math.min(5, game.countPlayer());
                                event.cards = get.cards(event.num);
                                event.chosen = [];
                                ('step 1');
                                var js = player.getCards('j');
                                var pos;
                                var choice = -1;
                                var getval = function (card, pos) {
                                    if (js[pos]) {
                                        return get.judge(js[pos])(card);
                                    } else {
                                        return get.value(card);
                                    }
                                };
                                for (pos = 0; pos < Math.min(event.cards.length, js.length + 2); pos++) {
                                    var max = getval(event.cards[pos], pos);
                                    for (var j = pos + 1; j < event.cards.length; j++) {
                                        var current = getval(event.cards[j], pos);
                                        if (current > max) {
                                            choice = j;
                                            max = current;
                                        }
                                    }
                                    if (choice != -1) {
                                        break;
                                    }
                                }
                                player
                                    .chooseCardButton('占卜:选择要移动的牌', event.cards)
                                    .set('filterButton', function (button) {
                                        return !_status.event.chosen.includes(button.link);
                                    })
                                    .set('chosen', event.chosen)
                                    .set('ai', function (button) {
                                        return button.link == _status.event.choice ? 1 : 0;
                                    })
                                    .set('choice', event.cards[choice]);
                                event.pos = pos;
                                ('step 2');
                                if (result.bool) {
                                    var card = result.links[0];
                                    var index = event.cards.indexOf(card);
                                    event.card = card;
                                    event.chosen.push(card);
                                    event.cards.remove(event.card);
                                    var buttons = event.cards.slice(0);
                                    player
                                        .chooseControl(function () {
                                            return _status.event.controlai;
                                        })
                                        .set('controlai', event.pos || 0)
                                        .set('sortcard', buttons)
                                        .set('tosort', card);
                                } else {
                                    event.goto(4);
                                }
                                ('step 3');
                                if (typeof result.index == 'number') {
                                    if (result.index > event.cards.length) {
                                        ui.cardPile.appendChild(event.card);
                                    } else {
                                        event.cards.splice(result.index, 0, event.card);
                                    }
                                    event.num--;
                                    if (event.num > 0) {
                                        event.goto(1);
                                    }
                                }
                                ('step 4');
                                while (event.cards.length) {
                                    ui.cardPile.insertBefore(event.cards.pop(), ui.cardPile.firstChild);
                                }
                                var js = player.getCards('j');
                                if (js.length == 1) {
                                    if (get.judge(js[0])(ui.cardPile.firstChild) < 0) {
                                        player.addTempSkill('kivazb_fail');
                                    }
                                }
                            },
                            ai: {
                                kivazb: true,
                            },
                        },
                        kivaqy: {
                            trigger: {
                                player: 'loseEnd',
                            },
                            audio: 'ext:王朝更替策/audio:2',
                            forced: true,
                            filter(event, player) {
                                if (player.countCards('h')) return false;
                                if (Array.isArray(event.cards)) for (var i of event.cards) {
                                    if (i.original == 'h') return true;
                                }
                                return false;
                            },
                            content() {
                                player.draw(3);
                            },
                            ai: {
                                effect: {
                                    target(card) {
                                        if (card.name == 'guohe' || card.name == 'liuxinghuoyu') return 0.5;
                                    },
                                },
                            },
                        },
                        kivalm: {
                            trigger: {
                                player: ['phaseBefore', 'changeHp'],
                            },
                            forced: true,
                            popup: false,
                            derivation: ['bazhen', 'gongxin', 'kanpo', 'guanxing', 'wansha', 'lianpo'],
                            content() {
                                player.removeAdditionalSkill('kivalm');
                                var list = [];
                                if (player.hp <= 3) {
                                    list.push('bazhen');
                                }
                                if (player.hp <= 3) {
                                    list.push('guanxing');
                                }
                                if (player.hp <= 2) {
                                    list.push('gongxin');
                                }
                                if (player.hp <= 2) {
                                    list.push('kanpo');
                                }
                                if (player.hp <= 1) {
                                    list.push('wansha');
                                }
                                if (player.hp <= 1) {
                                    list.push('lianpo');
                                }
                                if (list.length) {
                                    player.addAdditionalSkill('kivalm', list);
                                }
                            },
                            ai: {
                                maixie: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (!target.hasFriend()) return;
                                            if (target.hp >= 4) return [0, 1];
                                        }
                                        if (get.tag(card, 'recover') && player.hp >= player.maxHp - 1) return [0, 0];
                                    },
                                },
                            },
                        },
                        kivayr: {
                            trigger: {
                                player: ['phaseBefore', 'changeHp'],
                            },
                            forced: true,
                            popup: false,
                            derivation: ['tiaoxin', 'juejing', 'reyingzi', 'yeyan'],
                            content() {
                                player.removeAdditionalSkill('kivayr');
                                var list = [];
                                if (player.hp <= 2) {
                                    list.push('tiaoxin');
                                }
                                if (player.hp <= 1) {
                                    list.push('juejing');
                                }
                                if (player.hp <= 2) {
                                    list.push('reyingzi');
                                }
                                if (player.hp <= 1) {
                                    list.push('yeyan');
                                }
                                if (list.length) {
                                    player.addAdditionalSkill('kivayr', list);
                                }
                            },
                            ai: {
                                maixie: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (!target.hasFriend()) return;
                                            if (target.hp >= 4) return [0, 1];
                                        }
                                        if (get.tag(card, 'recover') && player.hp >= player.maxHp - 1) return [0, 0];
                                    },
                                },
                            },
                        },
                        kivaccjj: {
                            audio: 'ext:王朝更替策/audio:1',
                            trigger: {
                                global: 'shaBegin',
                            },
                            filter(event, player) {
                                return get.distance(player, event.target) <= 1;
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) >= 0;
                            },
                            content() {
                                'step 0';
                                player.draw(3);
                                if (trigger.target != player) {
                                    player.chooseCard(true, 'he', '交给' + get.translation(trigger.target) + '一张牌').set('ai', function (card) {
                                        if (get.position(card) == 'e') return -4;
                                        if (card.name == 'shan') return 4;
                                        if (get.type(card) == 'equip') return 0.5;
                                        return 0;
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                trigger.target.gain(result.cards, player);
                                player.$give(result.cards, trigger.target);
                                event.card = result.cards[0];
                                if (get.type(event.card) != 'equip') event.finish();
                                ('step 2');
                                if (!trigger.target.isMin()) {
                                    trigger.target
                                        .chooseBool('是否装备' + get.translation(event.card) + '？')
                                        .set('ai', function () {
                                            var current = _status.event.player.getCards('e', { subtype: get.subtype(_status.event.card) });
                                            if (current && current.length) {
                                                return get.equipValue(event.card) > get.equipValue(current[0]);
                                            }
                                            return true;
                                        })
                                        .set('card', event.card);
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (result.bool) {
                                    trigger.target.equip(event.card);
                                }
                            },
                            ai: {
                                threaten: 1.1,
                            },
                        },
                        kivacctc: {
                            trigger: {
                                player: 'duBegin',
                            },
                            audio: 'ext:王朝更替策/audio:1',
                            forced: true,
                            content() {
                                player.draw(1);
                                player.addTeamSkill('reqixi');
                            },
                            ai: {
                                threaten: 1.2,
                                nodu: true,
                                usedu: true,
                            },
                            group: 'moxie2',
                        },
                        kivacclj: {
                            audio: 'ext:王朝更替策/audio:1',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            check() {
                                return false;
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && (get.color(event.card) == 'red' || event.source.hasSkill('jiu'));
                            },
                            content() {
                                player.gainMaxHp();
                                player.addSkill('moxie');
                            },
                        },
                        kivacccl: {
                            audio: 'ext:王朝更替策/audio:1',
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.source && event.source.isIn() && event.source != player && !event.source.hasJudge('bingliang');
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            logTarget: 'source',
                            content() {
                                var card = game.createCard('bingliang');
                                trigger.source.addJudge(card);
                                trigger.source.$draw(card);
                            },
                            ai: {
                                maixie_defend: true,
                            },
                        },
                        kivaccjs: {
                            audio: 'ext:王朝更替策/audio:1',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.isLinked()) return true;
                                return game.hasPlayer(function (current) {
                                    return current != player && !current.isLinked();
                                });
                            },
                            content() {
                                'step 0';
                                event.targets = game.filterPlayer();
                                event.targets.remove(player);
                                event.targets.sort(lib.sort.seat);
                                if (player.isLinked()) player.link();
                                ('step 1');
                                if (event.targets.length) {
                                    var target = event.targets.shift();
                                    if (!target.isLinked()) {
                                        target.link();
                                        player.line(target, 'green');
                                    }
                                    event.redo();
                                }
                            },
                        },
                        kivatl: {
                            enable: 'chooseToUse',
                            filter(event, player) {
                                return player.countCards('e') > 0;
                            },
                            filterCard: true,
                            position: 'e',
                            viewAs: {
                                name: 'shunshou',
                            },
                            prompt: '将一张装备区内的牌当顺手牵羊使用',
                            check(card) {
                                var player = _status.currentPhase;
                                if (player.countCards('he', { subtype: get.subtype(card) }) > 1) {
                                    return 11 - get.equipValue(card);
                                }
                                if (player.countCards('h') < player.hp) {
                                    return 6 - get.value(card);
                                }
                                return 2 - get.equipValue(card);
                            },
                            ai: {
                                order: 9,
                                threaten: 1.1,
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, target) > 0 && target.countCards('h', 'sha')) {
                                        if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
                                    }
                                },
                                basic: {
                                    order: 9,
                                    useful: [5, 1],
                                    value: 5,
                                },
                                result: {
                                    target(player, target) {
                                        if (player.hasUnknown(2) && get.mode() != 'guozhan') return 0;
                                        var nh = target.countCards('h');
                                        if (get.mode() == 'identity') {
                                            if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
                                        }
                                        if (nh == 0) return -2;
                                        if (nh == 1) return -1.7;
                                        return -1.5;
                                    },
                                    player(player, target) {
                                        if (get.attitude(player, target) < 0 && !target.countCards('he')) {
                                            return 0;
                                        }
                                        if (get.attitude(player, target) > 1) {
                                            var js = target.getCards('j');
                                            if (js.length) {
                                                var jj = js[0].viewAs ? { name: js[0].viewAs } : js[0];
                                                if (jj.name == 'shunshou') return 1;
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
                                    respond: 1,
                                    respondSha: 1,
                                    damage: 1,
                                    multitarget: 1,
                                    multineg: 1,
                                    loseCard: 1,
                                    gain: 1,
                                },
                            },
                        },
                        kivags: {
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 5;
                                },
                            },
                        },
                        kivayys: {
                            mod: {
                                selectTarget(card, player, range) {
                                    if (Array.isArray(range) && range[1] == -1) return;
                                    if (player.getEquip(1)) return;
                                    if (card.name == 'shunshou') range[1] += 2;
                                },
                                cardUsable(card, player, num) {
                                    if (player.getEquip(1)) return;
                                    if (card.name == 'sha') return num + 1;
                                },
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.subtype(card) == 'equip1') return -1;
                                    },
                                },
                            },
                        },
                        神避: {
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (card.name == 'shunshou' || card.name == 'lebu' || card.name == 'bingliang' || card.name == 'guohe' || card.name == 'sha' || card.name == 'nanman' || card.name == 'wanjian' || card.name == 'juedou') return false;
                                },
                            },
                        },
                        kivawm: {
                            trigger: {
                                global: 'phaseBefore',
                            },
                            forced: true,
                            _priority: 10,
                            audio: 'ext:王朝更替策/audio:2',
                            filter(event, player) {
                                return !player.storage.kivawm;
                            },
                            content() {
                                'step 0';
                                player.storage.zongzuo = true;
                                var list = ['wei', 'shu', 'wu', 'qun', 'qinkiva', 'chukiva', 'hankiva', 'jinkiva', 'nanbeikiva', 'suikiva', 'tangkiva', 'wushikiva', 'songkiva', 'liaokiva', 'xixiakiva', 'sankiva', 'jinkiva', 'yuankiva', 'mingkiva', 'qingkiva', 'minkiva', 'zhongguokiva'];
                                var num = game.countPlayer(function (current) {
                                    if (list.includes(current.group)) {
                                        list.remove(current.group);
                                        return true;
                                    }
                                });
                                player.gainMaxHp(num);
                                event.num = num;
                                ('step 1');
                                player.hp += event.num;
                                player.update();
                            },
                            group: 'zongzuo_lose',
                            subSkill: {
                                lose: {
                                    trigger: {
                                        global: 'dieAfter',
                                    },
                                    forced: true,
                                    audio: 'zongzuo',
                                    filter(event, player) {
                                        var list = ['wei', 'shu', 'wu', 'qun', 'qinkiva', 'chukiva', 'hankiva', 'jinkiva', 'nanbeikiva', 'suikiva', 'tangkiva', 'wushikiva', 'songkiva', 'liaokiva', 'xixiakiva', 'sankiva', 'jinkiva', 'yuankiva', 'mingkiva', 'qingkiva', 'minkiva', 'zhongguokiva'];
                                        if (!list.includes(event.player.group)) return false;
                                        if (
                                            game.hasPlayer(function (current) {
                                                return current.group == event.player.group;
                                            })
                                        ) {
                                            return false;
                                        }
                                        return true;
                                    },
                                    content() {
                                        player.loseMaxHp();
                                    },
                                },
                            },
                        },
                        kivaxwx: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return !player.storage.kivaxwx;
                            },
                            intro: {
                                content: 'limited',
                            },
                            mark: true,
                            forced: true,
                            content() {
                                'step 0';
                                var check = player.hp == 1 || (player.hp == 2 && player.countCards('h') <= 1);
                                player
                                    .chooseTarget(get.prompt('kivaxwx'))
                                    .set('ai', function (target) {
                                        if (!_status.event.check) return 0;
                                        return get.attitude(_status.event.player, target);
                                    })
                                    .set('check', check);
                                ('step 1');
                                if (result.bool) {
                                    player.storage.suiren = true;
                                    player.awakenSkill('kivaxwx');
                                    result.targets[0].addSkill('kivaxbr100');
                                    result.targets[0].addSkill('kivaxxx');
                                    result.targets[0].gainMaxHp(4);
                                    result.targets[0].recover(4);
                                    player.gainMaxHp();
                                    player.recover();
                                    result.targets[0].draw(3);
                                }
                            },
                        },
                        kivaxxx: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                player: 'phaseEnd',
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
                                player.chooseControl('baonue_hp', 'baonue_maxHp', function (event, player) {
                                    if (player.hp == player.maxHp) return 'baonue_hp';
                                    if (player.hp < player.maxHp - 1 || player.hp <= 2) return 'baonue_maxHp';
                                    return 'baonue_hp';
                                });
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
                            audioname: ['zhugedan'],
                        },
                        kivaxbr100: {
                            audio: 'ext:王朝更替策/audio:true',
                            trigger: {
                                player: ['gainMaxHpEnd', 'loseMaxHpEnd'],
                            },
                            forced: true,
                            content() {
                                player.draw(2);
                            },
                        },
                        kivadzx: {
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hp > 0;
                            },
                            content() {
                                'step 0';
                                event.cards = get.cards(game.countPlayer());
                                event.chosen = [];
                                event.num = player.hp;
                                ('step 1');
                                var js = player.getCards('j');
                                var pos;
                                var choice = -1;
                                var getval = function (card, pos) {
                                    if (js[pos]) {
                                        return get.judge(js[pos])(card);
                                    } else {
                                        return get.value(card);
                                    }
                                };
                                for (pos = 0; pos < Math.min(event.cards.length, js.length + 2); pos++) {
                                    var max = getval(event.cards[pos], pos);
                                    for (var j = pos + 1; j < event.cards.length; j++) {
                                        var current = getval(event.cards[j], pos);
                                        if (current > max) {
                                            choice = j;
                                            max = current;
                                        }
                                    }
                                    if (choice != -1) {
                                        break;
                                    }
                                }
                                player
                                    .chooseCardButton('毒宗:选择要移动的牌(还能移动' + event.num + '张)', event.cards)
                                    .set('filterButton', function (button) {
                                        return !_status.event.chosen.includes(button.link);
                                    })
                                    .set('chosen', event.chosen)
                                    .set('ai', function (button) {
                                        return button.link == _status.event.choice ? 1 : 0;
                                    })
                                    .set('choice', event.cards[choice]);
                                event.pos = pos;
                                ('step 2');
                                if (result.bool) {
                                    var card = result.links[0];
                                    var index = event.cards.indexOf(card);
                                    event.card = card;
                                    event.chosen.push(card);
                                    event.cards.remove(event.card);
                                    var buttons = event.cards.slice(0);
                                    player
                                        .chooseControl(function () {
                                            return _status.event.controlai;
                                        })
                                        .set('controlai', event.pos || 0)
                                        .set('sortcard', buttons)
                                        .set('tosort', card);
                                } else {
                                    event.goto(4);
                                }
                                ('step 3');
                                if (typeof result.index == 'number') {
                                    if (result.index > event.cards.length) {
                                        ui.cardPile.appendChild(event.card);
                                    } else {
                                        event.cards.splice(result.index, 0, event.card);
                                    }
                                    event.num--;
                                    if (event.num > 0) {
                                        event.goto(1);
                                    }
                                }
                                ('step 4');
                                while (event.cards.length) {
                                    ui.cardPile.insertBefore(event.cards.pop(), ui.cardPile.firstChild);
                                }
                                var js = player.getCards('j');
                                if (js.length == 1) {
                                    if (get.judge(js[0])(ui.cardPile.firstChild) < 0) {
                                        player.addTempSkill('guanxing_fail');
                                    }
                                }
                            },
                            ai: {
                                guanxing: true,
                            },
                        },
                        kivadxx: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                event.cards = get.cards(1 * trigger.num);
                                ('step 1');
                                if (event.cards.length > 1) {
                                    player.chooseCardButton('将<独秀>牌分配给任意角色', true, event.cards, [1, event.cards.length]).set('ai', function (button) {
                                        if (ui.selected.buttons.length == 0) return 1;
                                        return 0;
                                    });
                                } else if (event.cards.length == 1) {
                                    event._result = { links: event.cards.slice(0), bool: true };
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    for (var i of result.links) {
                                        event.cards.remove(i);
                                    }
                                    event.togive = result.links.slice(0);
                                    player
                                        .chooseTarget('将' + get.translation(result.links) + '交给一名角色', true)
                                        .set('ai', function (target) {
                                            var att = get.attitude(_status.event.player, target);
                                            if (_status.event.enemy) {
                                                return -att;
                                            } else if (att > 0) {
                                                return att / (1 + target.countCards('h'));
                                            } else {
                                                return att / 100;
                                            }
                                        })
                                        .set('enemy', get.value(event.togive[0]) < 0);
                                }
                                ('step 3');
                                if (result.targets.length) {
                                    result.targets[0].gain(event.togive, 'draw');
                                    player.line(result.targets[0], 'green');
                                    game.log(result.targets[0], '获得了' + get.cnNumber(event.togive.length) + '张牌');
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
                        kivakqq: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return !player.storage.kivakqq;
                            },
                            init(player) {
                                player.storage.kivakqq = false;
                            },
                            mark: true,
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('kivakqq'), function (card, player, target) {
                                        return target.sex == 'male' && target != player;
                                    })
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
                                    player.awakenSkill('kivakqq');
                                    player.storage.kivakqq = true;
                                    var target = result.targets[0];
                                    target.addSkill('kivaqlq');
                                    var mode = get.mode();
                                    if (mode == 'identity' || (mode == 'versus' && _status.mode == 'four')) {
                                        if (target.name && lib.character[target.name]) {
                                            var skills = lib.character[target.name][3];
                                            target.storage.zhuSkill_kivakqq = [];
                                            for (var i = 0; i < skills.length; i++) {
                                                var info = lib.skill[skills[i]];
                                                if (info.zhuSkill) {
                                                    target.storage.zhuSkill_kivakqq.push(skills[i]);
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
                            intro: {
                                content: 'limited',
                            },
                        },
                        kivakyq: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return !player.storage.kivakyq;
                            },
                            intro: {
                                content: 'limited',
                            },
                            mark: true,
                            forced: true,
                            content() {
                                'step 0';
                                var check = player.hp == 1 || (player.hp == 2 && player.countCards('h') <= 1);
                                player
                                    .chooseTarget(get.prompt('kivakyq'))
                                    .set('ai', function (target) {
                                        if (!_status.event.check) return 0;
                                        return get.attitude(_status.event.player, target);
                                    })
                                    .set('check', check);
                                ('step 1');
                                if (result.bool) {
                                    player.storage.suiren = true;
                                    player.awakenSkill('kivakyq');
                                    player.draw();
                                    result.targets[0].addSkill('kivayzq');
                                }
                            },
                        },
                        kivakxq: {
                            audio: 'ext:王朝更替策/audio:2',
                            audioname: ['heqi', 'sunce'],
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                threaten: 1.5,
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    if (player.hp < player.maxHp) return num + player.maxHp - player.hp;
                                },
                            },
                        },
                        kivayzq: {
                            trigger: {
                                player: 'useCard',
                            },
                            audio: 'ext:王朝更替策/audio:2',
                            forced: true,
                            audioname: ['re_zhangfei', 'guanzhang', 'xiahouba'],
                            filter(event, player) {
                                if (_status.currentPhase != player) return false;
                                if (event.parent.parent.name != 'phaseUse') return false;
                                if (event.skill == 'qinglong_skill') return false;
                                return event.card && event.card.name == 'sha' && player.hasSkill('kivayzq') && player.getStat().card.sha > 1;
                            },
                            content() { },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
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
                        kivaqlq: {
                            gainable: true,
                            group: ['yinghun', 'xunxun', 'tuxi', 'biyue', 'zhanjue', 'chouhai'],
                        },
                        kivawwm: {
                            trigger: {
                                player: 'taoBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hp > 0;
                            },
                            content() {
                                'step 0';
                                event.cards = get.cards(game.countPlayer());
                                event.chosen = [];
                                event.num = player.hp;
                                ('step 1');
                                var js = player.getCards('j');
                                var pos;
                                var choice = -1;
                                var getval = function (card, pos) {
                                    if (js[pos]) {
                                        return get.judge(js[pos])(card);
                                    } else {
                                        return get.value(card);
                                    }
                                };
                                for (pos = 0; pos < Math.min(event.cards.length, js.length + 2); pos++) {
                                    var max = getval(event.cards[pos], pos);
                                    for (var j = pos + 1; j < event.cards.length; j++) {
                                        var current = getval(event.cards[j], pos);
                                        if (current > max) {
                                            choice = j;
                                            max = current;
                                        }
                                    }
                                    if (choice != -1) {
                                        break;
                                    }
                                }
                                player
                                    .chooseCardButton('武王:选择要移动的牌(还能移动' + event.num + '张)', event.cards)
                                    .set('filterButton', function (button) {
                                        return !_status.event.chosen.includes(button.link);
                                    })
                                    .set('chosen', event.chosen)
                                    .set('ai', function (button) {
                                        return button.link == _status.event.choice ? 1 : 0;
                                    })
                                    .set('choice', event.cards[choice]);
                                event.pos = pos;
                                ('step 2');
                                if (result.bool) {
                                    var card = result.links[0];
                                    var index = event.cards.indexOf(card);
                                    event.card = card;
                                    event.chosen.push(card);
                                    event.cards.remove(event.card);
                                    var buttons = event.cards.slice(0);
                                    player
                                        .chooseControl(function () {
                                            return _status.event.controlai;
                                        })
                                        .set('controlai', event.pos || 0)
                                        .set('sortcard', buttons)
                                        .set('tosort', card);
                                } else {
                                    event.goto(4);
                                }
                                ('step 3');
                                if (typeof result.index == 'number') {
                                    if (result.index > event.cards.length) {
                                        ui.cardPile.appendChild(event.card);
                                    } else {
                                        event.cards.splice(result.index, 0, event.card);
                                    }
                                    event.num--;
                                    if (event.num > 0) {
                                        event.goto(1);
                                    }
                                }
                                ('step 4');
                                while (event.cards.length) {
                                    ui.cardPile.insertBefore(event.cards.pop(), ui.cardPile.firstChild);
                                }
                                var js = player.getCards('j');
                                if (js.length == 1) {
                                    if (get.judge(js[0])(ui.cardPile.firstChild) < 0) {
                                        player.addTempSkill('guanxing_fail');
                                    }
                                }
                            },
                            ai: {
                                guanxing: true,
                            },
                        },
                        kivazsm: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                global: 'recoverAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return _status.currentPhase == event.player;
                            },
                            content() {
                                'step 0';
                                if (player == trigger.player) {
                                    player
                                        .chooseControl('摸一张', '摸一张', 'cancel2', function () {
                                            return '摸一张';
                                        })
                                        .set('prompt', get.prompt('kivazsm'));
                                    event.single = true;
                                } else {
                                    player
                                        .chooseTarget(get.prompt('kivazsm'), function (card, player, target) {
                                            return target == _status.event.player || target == _status.event.target;
                                        })
                                        .set('target', trigger.player)
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            if (player == target) return 1;
                                            return get.attitude(player, target) - 1.5;
                                        });
                                }
                                ('step 1');
                                if (event.single) {
                                    if (result.control != 'cancel2') {
                                        if (result.control == '摸一张') {
                                            player.draw();
                                        } else {
                                            player.draw();
                                            player.storage.kivazsm = player;
                                        }
                                    }
                                } else if (result.bool) {
                                    var target = result.targets[0];
                                    if (target == player) {
                                        target.draw();
                                    } else {
                                        target.draw();
                                        if (target.storage.kivazsm) {
                                            target.storage.kivazsm.add(player);
                                        } else {
                                            target.storage.kivazsm = [player];
                                        }
                                    }
                                }
                            },
                            ai: {
                                expose: 0.1,
                            },
                        },
                        kivaxfm: {
                            audio: 'ext:王朝更替策/audio:2',
                            audioname: ['heqi', 'sunce'],
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                threaten: 1.5,
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    if (player.hp < player.maxHp) return num + player.maxHp - player.hp;
                                },
                            },
                        },
                        kivasgm: {
                            audio: 'ext:王朝更替策/audio:2',
                            enable: 'chooseToUse',
                            filterCard(card, player) {
                                return get.color(card) == 'black';
                            },
                            viewAsFilter(player) {
                                return player.countCards('h', { color: 'black' }) > 0;
                            },
                            viewAs: {
                                name: 'tao',
                            },
                            prompt: '将一张黑色手牌当桃使用',
                            check(card) {
                                return 8 - get.value(card);
                            },
                            threaten: 1.2,
                            ai: {
                                basic: {
                                    useful: [6, 4],
                                    value: [6, 4],
                                    order(card, player) {
                                        if (player.hasSkillTag('pretao')) return 5;
                                        return 2;
                                    },
                                },
                                result: {
                                    player: 1,
                                    target(player, target) {
                                        var nd = player.needsToDiscard();
                                        var keep = false;
                                        if (nd <= 0) {
                                            keep = true;
                                        } else if (nd == 1 && target.hp >= 2 && target.countCards('h', 'tao') <= 1) {
                                            keep = true;
                                        }
                                        var mode = get.mode();
                                        if (target.hp >= 2 && keep && target.hasFriend()) {
                                            if (target.hp > 2 || nd == 0) return 0;
                                            if (target.hp == 2) {
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        if (target != current && get.attitude(target, current) >= 3) {
                                                            if (current.hp <= 1) return true;
                                                            if ((mode == 'identity' || mode == 'versus' || mode == 'chess') && current.identity == 'zhu' && current.hp <= 2) return true;
                                                        }
                                                    })
                                                ) {
                                                    return 0;
                                                }
                                            }
                                        }
                                        if (target.hp < 0 && target != player && target.identity != 'zhu') return 0;
                                        var att = get.attitude(player, target);
                                        if (att < 3 && att >= 0 && player != target) return 0;
                                        var tri = _status.event.getTrigger();
                                        if (mode == 'identity' && player.identity == 'fan' && target.identity == 'fan') {
                                            if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'fan' && tri.source != target) {
                                                var num = game.countPlayer(function (current) {
                                                    if (current.identity == 'fan') {
                                                        return current.countCards('h', 'tao');
                                                    }
                                                });
                                                if (num > 1 && player == target) return 2;
                                                return 0;
                                            }
                                        }
                                        if (mode == 'identity' && player.identity == 'zhu' && target.identity == 'nei') {
                                            if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'zhong') {
                                                return 0;
                                            }
                                        }
                                        if (mode == 'stone' && target.isMin() && player != target && tri && tri.name == 'dying' && player.side == target.side && tri.source != target.getEnemy()) {
                                            return 0;
                                        }
                                        return 2;
                                    },
                                },
                                expose: 0.2,
                                tag: {
                                    recover: 1,
                                    save: 1,
                                },
                            },
                        },
                        kivajlm: {
                            mod: {
                                suit(card, suit) {
                                    if (suit == 'heart' || suit == 'diamond') return 'spade';
                                },
                            },
                        },
                        kivaqd: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('kivaqd'), [1, trigger.num], function (card, player, target) {
                                        return target.countCards('h') < Math.min(target.maxHp, 5);
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (att > 2) {
                                            return Math.min(5, target.maxHp) - target.countCards('h');
                                        }
                                        return att / 3;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].draw(Math.min(5, result.targets[i].maxHp) - result.targets[i].countCards('h'));
                                    }
                                }
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
                        kivassd: {
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (card.name == 'shunshou' || card.name == 'lebu' || card.name == 'bingliang' || card.name == 'guohe' || card.name == 'sha' || card.name == 'nanman' || card.name == 'wanjian') return false;
                                },
                            },
                        },
                        kivajjn: {
                            audio: 'ext:王朝更替策/audio:2',
                            enable: 'phaseUse',
                            usable: 999,
                            filter(event, player) {
                                return player.countCards('h', { type: ['trick', 'delay'], color: 'black' });
                            },
                            filterCard(card, player) {
                                return get.color(card) == 'black' && get.type(card, 'trick') == 'trick';
                            },
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h') > 0;
                            },
                            discard: false,
                            delay: false,
                            check(card) {
                                return 8 - get.value(card);
                            },
                            content() {
                                'step 0';
                                player.showCards(cards);
                                ('step 1');
                                ui.cardPile.insertBefore(cards[0], ui.cardPile.firstChild);
                                var n1 = target.getCards('he', function (card) {
                                    if (!lib.filter.cardDiscardable(card, player)) return false;
                                    return get.type(card, 'trick') == 'trick';
                                });
                                var n2 = target.getCards('he', function (card) {
                                    if (!lib.filter.cardDiscardable(card, player)) return false;
                                    return get.type(card, 'trick') != 'trick';
                                });
                                if (n1.length > 1 || n2.length > 2 || (n1.length == 1 && n2.length == 2)) {
                                    target
                                        .chooseToDiscard('弃置一张锦囊牌,或两张非锦囊牌', true, 'he', function (card, player) {
                                            if (!lib.filter.cardDiscardable(card, player)) return false;
                                            if (!_status.event.nontrick) {
                                                return get.type(card, 'trick') == 'trick';
                                            }
                                            if (ui.selected.cards.length) {
                                                return get.type(card, 'trick') != 'trick';
                                            }
                                            return true;
                                        })
                                        .set('ai', function (card) {
                                            if (get.type(card, 'trick') == 'trick') {
                                                return 8 - get.value(card);
                                            }
                                            return -get.value(card);
                                        })
                                        .set('selectCard', function () {
                                            if (ui.selected.cards.length == 1 && get.type(ui.selected.cards[0], 'trick') == 'trick') {
                                                return 1;
                                            }
                                            return 2;
                                        })
                                        .set('nontrick', n2.length >= 2)
                                        .set('complexCard', true);
                                } else {
                                    if (n1.length) {
                                        target.discard(n1);
                                    } else if (n2.length) {
                                        target.discard(n2);
                                    }
                                }
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target: -1,
                                },
                            },
                        },
                        kivascl: {
                            gainable: true,
                            group: ['rerende', 'mingjian'],
                        },
                        kivalss: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return !player.storage.kivalss;
                            },
                            init(player) {
                                player.storage.kivalss = false;
                            },
                            mark: true,
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('kivalss'), function (card, player, target) {
                                        return target.sex == 'female' && target != player;
                                    })
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
                                    player.awakenSkill('kivalss');
                                    player.storage.kivalss = true;
                                    var target = result.targets[0];
                                    target.addSkill('wengua');
                                    var mode = get.mode();
                                    if (mode == 'identity' || (mode == 'versus' && _status.mode == 'four')) {
                                        if (target.name && lib.character[target.name]) {
                                            var skills = lib.character[target.name][3];
                                            target.storage.zhuSkill_kivalss = [];
                                            for (var i = 0; i < skills.length; i++) {
                                                var info = lib.skill[skills[i]];
                                                if (info.zhuSkill) {
                                                    target.storage.zhuSkill_kivalss.push(skills[i]);
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
                            intro: {
                                content: 'limited',
                            },
                        },
                        kivajqq: {
                            audio: 'ext:王朝更替策/audio:2',
                            forced: true,
                            trigger: {
                                global: 'useCard',
                            },
                            filter(event, player, card) {
                                var card = event.card;
                                if (get.color(card) != 'red') return false;
                                if (player == event.player) return false;
                                return card.name == 'nanman' || card.name == 'wanjian' || card.name == 'taoyuan' || card.name == 'wugu';
                            },
                            content() { },
                            mod: {
                                targetEnabled(card) {
                                    if ((get.type(card) == 'trick' || get.type(card) == 'delay') && get.color(card) == 'red') return false;
                                },
                            },
                        },
                        kivaqsj: {
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 100;
                                },
                            },
                        },
                        kivagold: {
                            group: ['huoshou1', 'huoshou2', 'zhanjue'],
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (card.name == 'nanman') return 0;
                                    },
                                },
                            },
                        },
                        kivaxss: {
                            gainable: true,
                            group: ['kivaxss1', 'kivaxss2', 'kivaxss3'],
                        },
                        kivarqq: {
                            trigger: {
                                player: 'loseHpEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                player.removeSkill('jueqing');
                                player.recover();
                                if (_status.currentPhase == player) {
                                } else {
                                    game.trySkillAudio('kivarqq', player);
                                }
                            },
                        },
                        kivaxss1: {
                            trigger: {
                                player: ['phaseBegin', 'damageEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.getEquip('feilongduofeng');
                            },
                            content() {
                                if (trigger.name == 'phase') {
                                    player.useCard(game.createCard('feilongduofeng', 'heart', 13), player);
                                } else {
                                    player.removeSkill('jueqing');
                                }
                            },
                        },
                        kivaxss2: {
                            trigger: {
                                player: ['phaseEnd', 'damageEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.getEquip('taipingyaoshu');
                            },
                            content() {
                                if (trigger.name == 'phase') {
                                    player.useCard(game.createCard('taipingyaoshu', 'diamond', 1), player);
                                } else {
                                    player.removeSkill('jueqing');
                                }
                            },
                        },
                        kivaxss3: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                event.cards = get.cards(1 * trigger.num);
                                ('step 1');
                                if (event.cards.length > 1) {
                                    player.chooseCardButton('将<小杀>牌分配给任意角色', true, event.cards, [1, event.cards.length]).set('ai', function (button) {
                                        if (ui.selected.buttons.length == 0) return 1;
                                        return 0;
                                    });
                                } else if (event.cards.length == 1) {
                                    event._result = { links: event.cards.slice(0), bool: true };
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    for (var i of result.links) {
                                        event.cards.remove(i);
                                    }
                                    event.togive = result.links.slice(0);
                                    player
                                        .chooseTarget('将' + get.translation(result.links) + '交给一名角色', true)
                                        .set('ai', function (target) {
                                            var att = get.attitude(_status.event.player, target);
                                            if (_status.event.enemy) {
                                                return -att;
                                            } else if (att > 0) {
                                                return att / (1 + target.countCards('h'));
                                            } else {
                                                return att / 100;
                                            }
                                        })
                                        .set('enemy', get.value(event.togive[0]) < 0);
                                }
                                ('step 3');
                                if (result.targets.length) {
                                    result.targets[0].gain(event.togive, 'draw');
                                    player.line(result.targets[0], 'green');
                                    game.log(result.targets[0], '获得了' + get.cnNumber(event.togive.length) + '张牌');
                                    event.goto(1);
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: false,
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
                        },
                        kivatxx: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            notemp: true,
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            init(player) {
                                player.storage.kivatxx = [];
                            },
                            content() {
                                'step 0';
                                player.chooseCard(get.prompt('kivatxx'), 'he', [1, trigger.num]).set('ai', function (card) {
                                    if (card.name == 'du') return 20;
                                    return 7 - get.useful(card);
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.lose(result.cards, ui.special);
                                    player.$give(result.cards, player);
                                    if (Array.isArray(result.cards)) for (var i of result.cards) {
                                        player.storage.kivatxx.push(i);
                                    }
                                    player.markSkill('kivatxx');
                                }
                            },
                            marktext: '秀',
                            intro: {
                                content: 'cards',
                            },
                            group: 'kivatxx2',
                            ai: {
                                threaten: 0.8,
                                maixie: true,
                                maixie_hp: true,
                            },
                        },
                        kivayryr: {
                            audio: 'ext:王朝更替策/audio:2',
                            enable: 'phaseUse',
                            usable: 2,
                            position: 'hej',
                            filterCard: true,
                            selectCard: [1, Infinity],
                            prompt: '弃置任意张牌并摸等量的牌',
                            check(card) {
                                return 6 - get.value(card);
                            },
                            content() {
                                player.draw(cards.length);
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                                threaten: 1.5,
                            },
                        },
                        kivasxsx: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                player.addSkill('kivancnc');
                                player.draw();
                            },
                        },
                        kivaqhh: {
                            audio: 'ext:王朝更替策/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            position: 'hej',
                            filterCard: true,
                            selectCard: [1, 4],
                            prompt: '弃置1-4牌并摸等量的牌,并让一名角色获得技能【飞影】【马术】',
                            check(card) {
                                return 6 - get.value(card);
                            },
                            content() {
                                player.draw(cards.length);
                                player.addSkill('mashu');
                                player.addSkill('feiying');
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                                threaten: 1.5,
                            },
                        },
                        kivadww: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('he', { color: 'red' }) > 0;
                            },
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard(get.prompt('kivadww'), 'he', { color: 'red' });
                                next.ai = function (card) {
                                    return 6 - get.value(card);
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.addSkill('kivadwwshow');
                                }
                            },
                        },
                        kivadwwshow: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            mark: true,
                            intro: {
                                content: '下个准备阶段令一名距离1以内的角色回复一点体力或摸两张牌',
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('kivadww'), function (card, player, target) {
                                    return get.distance(player, target) <= 1;
                                }).ai = function (target) {
                                    var att = get.attitude(player, target);
                                    if (att > 0) {
                                        if (target.hp == 1 && target.maxHp > 1) return att * 2;
                                    }
                                    return att;
                                };
                                player.removeSkill('kivadwwshow');
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].chooseDrawRecover(2, true);
                                }
                            },
                        },
                        kivazyy: {
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            filter(event, player) {
                                return Math.min(5, player.hp) > player.countCards('h') && !player.skipList.includes('phaseUse') && !player.skipList.includes('phaseDiscard');
                            },
                            check(event, player) {
                                var nh = player.countCards('h');
                                if (Math.min(5, player.hp) - nh >= 2) return true;
                                return false;
                            },
                            content() {
                                var num = Math.min(5, player.hp) - player.countCards('h');
                                var cards = [];
                                while (num-- > 0) {
                                    cards.push(game.createCard('sha'));
                                }
                                player.gain(cards, 'gain2');
                                player.skip('phaseUse');
                                player.skip('phaseDiscard');
                            },
                        },
                        kivancnc: {
                            gainable: true,
                            group: ['mashu', 'feiying'],
                        },
                        kivadzsf: {
                            gainable: true,
                            group: ['kivadzsf1', 'kivadzsf2', 'kivadzsf3', 'kivadzsf4', 'lianpo'],
                        },
                        kivaqtds: {
                            gainable: true,
                            group: ['kivaqtds1', 'kivaqtds2'],
                        },
                        kivang: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return !player.storage.kivang;
                            },
                            intro: {
                                content: 'limited',
                            },
                            mark: true,
                            forced: true,
                            content() {
                                'step 0';
                                var check = player.hp == 1 || (player.hp == 2 && player.countCards('h') <= 1);
                                player
                                    .chooseTarget(get.prompt('kivang'))
                                    .set('ai', function (target) {
                                        if (!_status.event.check) return 0;
                                        return get.attitude(_status.event.player, target);
                                    })
                                    .set('check', check);
                                ('step 1');
                                if (result.bool) {
                                    player.storage.kivang = true;
                                    player.awakenSkill('kivang');
                                    player.removeSkill('kivaqtds');
                                    player.gainMaxHp();
                                    player.recover();
                                    result.targets[0].loseHp();
                                }
                            },
                        },
                        kivadzsf1: {
                            enable: 'phaseUse',
                            usable: 2,
                            audio: 'qice_backup',
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            chooseButton: {
                                dialog() {
                                    var list = ['juedou', 'zhibi'];
                                    for (var i = 0; i < list.length; i++) {
                                        list[i] = ['火眼金睛', '', list[i]];
                                    }
                                    return ui.create.dialog([list, 'vcard']);
                                },
                                filter(button, player) {
                                    return lib.filter.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    var recover = 0,
                                        lose = 1,
                                        players = game.filterPlayer();
                                    for (var i of players) {
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
                                    if (lose > recover && lose > 0) return button.link[2] == 'nanman' ? 1 : -1;
                                    if (lose < recover && recover > 0) return button.link[2] == 'taoyuan' ? 1 : -1;
                                    return button.link[2] == 'wuzhong' ? 1 : -1;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard: true,
                                        selectCard: -1,
                                        audio: 'ext:王朝更替策/audio:2',
                                        popname: true,
                                        viewAs: { name: links[0][2] },
                                    };
                                },
                                prompt(links, player) {
                                    return '将全部手牌当作' + get.translation(links[0][2]) + '使用';
                                },
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player) {
                                        var num = 0;
                                        var cards = player.getCards('h');
                                        if (cards.length >= 3 && player.hp >= 3) return 0;
                                        if (Array.isArray(cards)) for (var i of cards) {
                                            num += Math.max(0, get.value(i, player, 'raw'));
                                        }
                                        num /= cards.length;
                                        num *= Math.min(cards.length, player.hp);
                                        return 12 - num;
                                    },
                                },
                                threaten: 1.6,
                            },
                        },
                        kivadzsf2: {
                            forced: true,
                            group: ['kivajyjy1', 'kivahyhy2'],
                            audio: 'ext:王朝更替策/audio:2',
                            audioname: ['re_lvbu'],
                        },
                        kivaqtds1: {
                            mod: {
                                cardEnabled(card, player) {
                                    if (card.name == 'tao' && _status.event.skill != 'kivaqtds1') return false;
                                },
                                cardUsable(card, player) {
                                    if (card.name == 'tao' && _status.event.skill != 'kivaqtds1') return false;
                                },
                                cardRespondable(card, player) {
                                    if (card.name == 'tao' && _status.event.skill != 'kivaqtds1') return false;
                                },
                                cardSavable(card, player) {
                                    if (card.name == 'tao' && _status.event.skill != 'kivaqtds1') return false;
                                },
                            },
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filter(event, player) {
                                return player.countCards('h', 'tao') > 0;
                            },
                            filterCard: {
                                name: 'tao',
                            },
                            viewAs: {
                                name: 'sha',
                                suit: 'heart',
                                number: 4,
                                cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'heart', number: 4, name: 'tao', cardid: '1527216369', _transform: 'translateX(112px)', clone: { name: 'tao', suit: 'heart', number: 4, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, timeout: 351 }, timeout: 316, original: 'h' }],
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('h', 'tao')) return false;
                            },
                            check() {
                                return 1;
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (!player.countCards('h', 'tao')) return false;
                                },
                                respondSha: true,
                                order: 4,
                                useful: -1,
                                value: -1,
                                basic: {
                                    useful: [5, 1],
                                    value: [5, 1],
                                },
                                result: {
                                    target(player, target) {
                                        if (player.hasSkill('tao') && !target.getEquip('baiyin')) {
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
                        kivaqtds2: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                player.changeHujia();
                            },
                        },
                        kivadzsf3: {
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (card.name == 'bingliang' || card.name == 'lebu' || card.name == 'gw_zhihuanjun' || card.name == 'gw_zumoshoukao') return false;
                                },
                            },
                        },
                        kivaswjj: {
                            group: ['kivaswjj1', 'kivaswjj2'],
                            audio: 'ext:王朝更替策/audio:2',
                            audioname: ['sp_lvmeng'],
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (card.name == 'juedou' || card.name == 'zhibi') return [1, 0.6];
                                    },
                                    player(card, player, target) {
                                        if (card.name == 'juedou' || card.name == 'zhibi') return [1, 1];
                                    },
                                },
                            },
                            subSkill: {
                                juedou: {
                                    audio: 'kivaswjj',
                                    audioname: ['sp_lvmeng'],
                                    _priority: 15,
                                    forced: true,
                                    trigger: {
                                        player: 'useCardToBefore',
                                        target: 'useCardToBefore',
                                    },
                                    filter(event, player) {
                                        if (event.card.name == 'juedou') return true;
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                                zhibi: {
                                    audio: 'kivaswjj',
                                    audioname: ['sp_lvmeng'],
                                    _priority: 15,
                                    forced: true,
                                    trigger: {
                                        player: 'useCardToBefore',
                                        target: 'useCardToBefore',
                                    },
                                    filter(event, player) {
                                        if (event.card.name == 'zhibi') return true;
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                            },
                        },
                        kivadzsf4: {
                            trigger: {
                                player: ['phaseBegin', 'damageEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.getEquip('jingukiva');
                            },
                            content() {
                                if (trigger.name == 'phase') {
                                    player.useCard(game.createCard('jingukiva', 'heart', 13), player);
                                } else {
                                    player.changeHujia();
                                    player.loseHp();
                                }
                            },
                        },
                        kivajyjy1: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                player: 'juedou',
                                target: 'juedou',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.turn != player;
                            },
                            _priority: -1,
                            content() {
                                'step 0';
                                var next = trigger.turn.chooseToRespond({ name: 'sha' }, '请打出一张杀响应决斗');
                                next.set('prompt2', '(共需打出2张杀)');
                                next.autochoose = lib.filter.autoRespondSha;
                                next.set('ai', function (card) {
                                    var player = _status.event.player;
                                    var trigger = _status.event.getTrigger();
                                    if (get.attitude(trigger.turn, player) < 0 && trigger.turn.countCards('h', 'sha') > 1) {
                                        return get.unuseful2(card);
                                    }
                                    return -1;
                                });
                                ('step 1');
                                if (result.bool == false) {
                                    trigger.directHit = true;
                                }
                            },
                            ai: {
                                result: {
                                    target(card, player, target) {
                                        if (card.name == 'juedou' && target.countCards('h') > 0) return [1, 0, 0, -1];
                                    },
                                },
                            },
                            audioname: ['re_lvbu'],
                        },
                        kivahyhy2: {
                            audio: 'ext:王朝更替策/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return !player.storage.kivahyhy2;
                            },
                            init(player) {
                                player.storage.kivahyhy2 = false;
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectTarget: -1,
                            multitarget: true,
                            multiline: true,
                            content() {
                                'step 0';
                                player.unmarkSkill('kivahyhy2');
                                player.storage.kivahyhy2 = true;
                                event.current = player.next;
                                ('step 1');
                                event.current.addTempClass('target');
                                event.current.chooseToUse('火眼:使用一张杀或获得技能定神', { name: 'sha' }, function (card, player, target) {
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
                                if (result.bool == false) event.current.addSkill('kivadsdsds');
                                if (event.current.next != player) {
                                    event.current = event.current.next;
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
                                        for (var i of players) {
                                            var att = get.attitude(player, i);
                                            if (att > 0) att = 1;
                                            if (att < 0) att = -1;
                                            if (i != player && i.hp <= 3) {
                                                if (i.countCards('h') == 0) num += att / i.hp;
                                                else if (i.countCards('h') == 1) num += att / 2 / i.hp;
                                                else if (i.countCards('h') == 2) num += att / 4 / i.hp;
                                            }
                                            if (i.hp == 1) num += att * 1.5;
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
                        kivadsdsds: {
                            mark: true,
                            intro: {
                                mark(dialog, content, player) {
                                    var hs = player.getCards('h');
                                    if (hs.length) {
                                        dialog.addSmall(hs);
                                    } else {
                                        dialog.addText('看透了');
                                    }
                                },
                                content(storage, player) {
                                    var hs = player.getCards('h');
                                    if (hs.length) {
                                        return get.translation(hs);
                                    } else {
                                        return '看透了';
                                    }
                                },
                            },
                        },
                        kivaswjj1: {
                            audio: 'kivaswjj',
                            audioname: ['sp_lvmeng'],
                            _priority: 15,
                            forced: true,
                            trigger: {
                                player: 'useCardToBefore',
                                target: 'useCardToBefore',
                            },
                            filter(event, player) {
                                if (event.card.name == 'juedou') return true;
                            },
                            content() {
                                player.draw();
                            },
                        },
                        kivaswjj2: {
                            audio: 'kivaswjj',
                            audioname: ['sp_lvmeng'],
                            _priority: 15,
                            forced: true,
                            trigger: {
                                player: 'useCardToBefore',
                                target: 'useCardToBefore',
                            },
                            filter(event, player) {
                                if (event.card.name == 'zhibi') return true;
                            },
                            content() {
                                player.draw();
                            },
                        },
                        kivaby: {
                            trigger: {
                                player: ['phaseBegin', 'damageEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.getEquip('nvwashi');
                            },
                            content() {
                                if (trigger.name == 'phase') {
                                    player.useCard(game.createCard('nvwashi', 'spade', 12), player);
                                } else {
                                    player.loseMaxHp();
                                    player.recover();
                                }
                            },
                        },
                        kivawz: {
                            audio: 'ext:王朝更替策/audio:2',
                            enable: 'phaseUse',
                            filterCard: true,
                            usable: 1,
                            selectCard: 2,
                            check(card) {
                                var player = get.owner(card);
                                if (player.countCards('h') > player.hp) return 8 - get.value(card);
                                if (player.hp < player.hp) return 6 - get.value(card);
                                return 4 - get.value(card);
                            },
                            filterTarget(card, player, target) {
                                if (target == player) return false;
                                return true;
                            },
                            content() {
                                player.loseHp(1);
                                target.loseHp(2);
                            },
                            ai: {
                                order: 5.5,
                                result: {
                                    player(player) {
                                        if (player.hp < player.hp) return 4;
                                        if (player.countCards('h') > player.hp) return 0;
                                        return -1;
                                    },
                                    target: 4,
                                },
                                threaten: 2,
                            },
                        },
                        双锏: {
                            trigger: {
                                player: ['phaseBegin', 'damageEnd'],
                            },
                            forced: true,
                            derivation: ['瓦面金装锏', '秦琼'],
                            filter(event, player) {
                                return !player.getEquip('瓦面金装锏');
                            },
                            content() {
                                if (trigger.name == 'phase') {
                                    player.useCard(game.createCard('瓦面金装锏', 'diamond', 11), player);
                                } else {
                                    player.draw();
                                }
                            },
                        },
                        kivawam: {
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.directHit && player.getEquip(1);
                            },
                            _priority: -1,
                            content() {
                                if (typeof trigger.shanRequired == 'number') {
                                    trigger.shanRequired++;
                                } else {
                                    trigger.shanRequired = 3;
                                }
                            },
                        },
                        金装: {
                            trigger: {
                                player: ['phaseBefore', 'changeHp'],
                            },
                            forced: true,
                            popup: false,
                            content() {
                                player.removeAdditionalSkill('金装');
                                var list = [];
                                if (player.hp <= 1) {
                                    list.push('honglianhujia红莲护甲');
                                }
                                if (player.hp <= 2) {
                                    list.push('ruijiadun锐甲盾');
                                }
                                if (player.hp <= 1) {
                                    list.push('jinweidunjia近卫盾甲');
                                }
                                if (player.hp <= 3) {
                                    list.push('qinggang_skill');
                                }
                                if (player.hp <= 1) {
                                    list.push('fanshangcijia反伤刺甲');
                                }
                                if (list.length) {
                                    player.addAdditionalSkill('金装', list);
                                }
                            },
                            ai: {
                                maixie: false,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (!target.hasFriend()) return;
                                            if (target.hp >= 4) return [0, 1];
                                        }
                                        if (get.tag(card, 'recover') && player.hp >= player.maxHp - 1) return [0, 0];
                                    },
                                },
                            },
                        },
                        秦琼: {
                            gainable: true,
                            group: ['金装', '双锏', 'kivawam'],
                        },
                        kiva100: {
                            gainable: true,
                            group: ['duanbing', 'mashu'],
                        },
                        kiva102: {
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (card.name == 'sha' || card.name == 'tao') return false;
                                },
                            },
                        },
                        kiva104: {
                            audio: 'ext:王朝更替策/audio:2',
                            enable: 'phaseUse',
                            filterCard: true,
                            usable: 1,
                            selectCard: [3, Infinity],
                            check(card) {
                                var player = get.owner(card);
                                if (player.countCards('h') > player.hp) return 8 - get.value(card);
                                if (player.hp < player.maxHp) return 6 - get.value(card);
                                return 4 - get.value(card);
                            },
                            filterTarget(card, player, target) {
                                if (target == player) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                event.num = player.hp;
                                player.draw(event.num);
                                ('step 1');
                                player.storage.kiva104 = true;
                                var cards = [];
                                for (var i = 0; i < 1; i++) {
                                    cards.push(game.createCard('kiva103'));
                                }
                                player.gain(cards, 'gain2');
                            },
                            ai: {
                                order: 5.5,
                                result: {
                                    player(player) {
                                        if (player.hp < player.maxHp) return 4;
                                        if (player.countCards('h') > player.hp) return 0;
                                        return -1;
                                    },
                                    target: 4,
                                },
                                threaten: 2,
                            },
                        },
                        kiva106: {
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (card.name == 'jiu' || card.name == 'tiesuo') return false;
                                },
                            },
                        },
                        kiva108: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                player: 'loseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.countCards('h')) return false;
                                if (Array.isArray(event.cards)) for (var i of event.cards) {
                                    if (i.original == 'h') return true;
                                }
                                return false;
                            },
                            content() {
                                event.num = player.hp;
                                player.draw(event.num);
                            },
                            ai: {
                                threaten: 0.8,
                                effect: {
                                    target(card) {
                                        if (card.name == 'guohe' || card.name == 'liuxinghuoyu') return 0.5;
                                    },
                                },
                                noh: true,
                                skillTagFilter(player, tag) {
                                    if (tag == 'noh') {
                                        if (player.countCards('h') != 1) return false;
                                    }
                                },
                            },
                        },
                        测试: {
                            audio: 'ext:王朝更替策/audio:2',
                            audioname: ['boss_qinglong'],
                            trigger: {
                                player: 'respond',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'shan';
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('releiji')).ai = function (target) {
                                    if (target.hasSkill('hongyan')) return 0;
                                    return get.damageEffect(target, _status.event.player, _status.event.player, 'thunder');
                                };
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    event.target.judge(function (card) {
                                        var suit = card.suit;
                                        if (suit == 'spade') return -4;
                                        if (suit == 'club') return -2;
                                        return 0;
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.suit == 'club') {
                                    event.target.damage('thunder');
                                    player.recover();
                                } else if (result.suit == 'spade') {
                                    event.target.damage(2, 'thunder');
                                }
                            },
                            ai: {
                                useShan: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'respondShan')) {
                                            var hastarget = game.hasPlayer(function (current) {
                                                return get.attitude(target, current) < 0;
                                            });
                                            var be = target.countCards('e', { color: 'black' });
                                            if (target.countCards('h', 'shan') && be) {
                                                if (!target.hasSkill('guidao')) return 0;
                                                return [0, hastarget ? target.countCards('he') / 2 : 0];
                                            }
                                            if (target.countCards('h', 'shan') && target.countCards('h') > 2) {
                                                if (!target.hasSkill('guidao')) return 0;
                                                return [0, hastarget ? target.countCards('h') / 4 : 0];
                                            }
                                            if (target.countCards('h') > 3 || (be && target.countCards('h') >= 2)) {
                                                return [0, 0];
                                            }
                                            if (target.countCards('h') == 0) {
                                                return [1.5, 0];
                                            }
                                            if (target.countCards('h') == 1 && !be) {
                                                return [1.2, 0];
                                            }
                                            if (!target.hasSkill('guidao')) return [1, 0.05];
                                            return [1, Math.min(0.5, (target.countCards('h') + be) / 4)];
                                        }
                                    },
                                },
                            },
                        },
                        kiva109: {
                            mod: {
                                cardUsable(card) {
                                    if (card.name == 'jiu') return Infinity;
                                },
                            },
                        },
                        kiva110: {
                            audio: 'ext:王朝更替策/audio:2',
                            enable: 'chooseToUse',
                            filterCard(card, player) {
                                return get.color(card) == 'black';
                            },
                            viewAsFilter(player) {
                                return player.countCards('h', { color: 'black' }) > 0;
                            },
                            viewAs: {
                                name: 'jiu',
                                suit: 'spade',
                                number: 3,
                                cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'spade', number: 3, name: 'jiu', cardid: '9384657369', clone: { name: 'jiu', suit: 'spade', number: 3, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, fixed: true, timeout: 11629 }, original: 'h', _transform: 'translateX(0px)', timeout: 11622 }],
                            },
                            prompt: '将一张黑色手牌当酒使用',
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
                                    target(player, target) {
                                        if (target && target.isDying()) return 2;
                                        if (lib.config.mode == 'stone' && !player.isMin()) {
                                            if (player.getActCount() + 1 >= player.actcount) return 0;
                                        }
                                        var shas = player.getCards('h', 'sha');
                                        if (shas.length > 1 && player.getCardUsable('sha') > 1) {
                                            return 0;
                                        }
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
                                                    return get.attitude(target, current) < 0 && target.canUse(card, current, true, true) && !current.getEquip('baiyin') && get.effect(current, card, target) > 0;
                                                })
                                            ) {
                                                return 1;
                                            }
                                        }
                                        return 0;
                                    },
                                },
                                expose: 0.2,
                                order() {
                                    return get.order({ name: 'sha' }) + 0.2;
                                },
                                tag: {
                                    save: 1,
                                },
                            },
                        },
                        kiva111: {
                            gainable: true,
                            group: ['kiva109', 'kiva110'],
                        },
                        kiva116: {
                            audio: 'ext:王朝更替策/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '你可以用1张牌获得一点护甲,每回合限一次',
                            content() {
                                'step 0';
                                player.chooseToDiscard('h');
                                ('step 1');
                                player.changeHujia();
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                },
                                result: {
                                    player(player) {
                                        if (player.countCards('h') >= 1) return -1;
                                        return 1;
                                    },
                                },
                            },
                        },
                        kiva117: {
                            trigger: {
                                source: 'damageBefore',
                            },
                            forced: true,
                            content() {
                                trigger.nature = 'thunder';
                            },
                        },
                        kivaleishen: {
                            trigger: {
                                player: 'shaBegin',
                            },
                            content() {
                                'step 0';
                                event.num = Math.min(trigger.num, 9);
                                ('step 1');
                                player.judge();
                                ('step 2');
                                event.color = result.color;
                                if (event.color == 'black') {
                                    player
                                        .chooseTarget('弃置一名角色区域内的一张牌', true, function (card, player, target) {
                                            return target.countCards('hej');
                                        })
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
                                } else {
                                    var next = player.chooseTarget('令一名角色摸一张牌', true);
                                    var xianfu = game.findPlayer(function (current) {
                                        return current.hasSkill('xianfu2') && current.storage.xianfu2 == player;
                                    });
                                    if (xianfu) {
                                        next.set('prompt2', '(若目标为' + get.translation(xianfu) + '则改为摸两张牌)');
                                    }
                                    next.set('ai', function (target) {
                                        var player = _status.event.player;
                                        var att = get.attitude(player, target) / Math.sqrt(1 + target.countCards('h'));
                                        if (target.storage.xianfu2 == player) return att * 2;
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
                                        if (target.hasSkill('xianfu2') && target.storage.xianfu2 == player) {
                                            var cards = [];
                                            for (var i = 0; i < 3; i++) {
                                                cards.push(game.createCard('kivapoison_sha'));
                                            }
                                            target.gain(cards, 'gain2');
                                        } else {
                                            var cards = [];
                                            for (var i = 0; i < 1; i++) {
                                                cards.push(game.createCard('jingleishan'));
                                            }
                                            target.gain(cards, 'gain2');
                                        }
                                    }
                                }
                                ('step 4');
                                if (--event.num > 0) {
                                    player.chooseBool('是否再次发动【雷神天明闪】？');
                                } else {
                                    event.finish();
                                }
                                ('step 5');
                                if (result.bool) {
                                    event.goto(1);
                                }
                            },
                            ai: {
                                maixie: false,
                                maixie_hp: false,
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
                        紫晶: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            content() {
                                'step 0';
                                player.recover(2);
                                ('step 1');
                                player.turnOver();
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                },
                                result: {
                                    player(player) {
                                        if ((player.hp = player.maxHp - 2)) return -1;
                                        if ((player.hp = 1)) return -1;
                                        return 1;
                                    },
                                },
                            },
                        },
                        kivaweiyan: {
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 1;
                                },
                            },
                        },
                        kivagongxin: {
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.isUnseen();
                            },
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                threaten: 1.3,
                            },
                            group: 'kivagongxin2',
                        },
                        kivagongxin2: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.isUnseen()) return false;
                                return game.hasPlayer(function (current) {
                                    return player.canUse('zhibi', current);
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(
                                        '攻心:选择知己知彼的目标',
                                        function (card, player, target) {
                                            return player.canUse({ name: 'zhibi' }, target);
                                        },
                                        true
                                    )
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.effect(target, { name: 'zhibi' }, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.useCard({ name: 'zhibi' }, result.targets);
                                }
                            },
                        },
                        kivahuairou: {
                            audio: 'ext:王朝更替策/audio:2',
                            group: ['kivarecover_hr', 'kivagc', 'guidao'],
                            mark: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                player.addSkill('kivadamage_hr');
                            },
                        },
                        kivasha_df: {
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            content() {
                                player.draw();
                                player.addSkill('qianxun');
                                player.addSkill('lianying');
                                player.removeSkill('yeyan');
                                player.removeSkill('reyingzi');
                                player.removeSkill('dimeng');
                                player.removeSkill('gongxin');
                            },
                        },
                        kivajiu_df: {
                            trigger: {
                                player: 'jiuBegin',
                            },
                            forced: true,
                            content() {
                                player.draw();
                                player.removeSkill('qianxun');
                                player.removeSkill('lianying');
                                player.addSkill('yeyan');
                                player.addSkill('reyingzi');
                                player.removeSkill('dimeng');
                                player.removeSkill('gongxin');
                            },
                        },
                        kivatao_df: {
                            trigger: {
                                player: 'taoBegin',
                            },
                            forced: true,
                            content() {
                                player.draw();
                                player.removeSkill('qianxun');
                                player.removeSkill('lianying');
                                player.removeSkill('yeyan');
                                player.removeSkill('reyingzi');
                                player.removeSkill('dimeng');
                                player.addSkill('gongxin');
                            },
                        },
                        kivashan_df: {
                            trigger: {
                                player: 'respond',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'shan';
                            },
                            forced: true,
                            content() {
                                player.draw();
                                player.removeSkill('qianxun');
                                player.removeSkill('lianying');
                                player.removeSkill('yeyan');
                                player.removeSkill('reyingzi');
                                player.addSkill('dimeng');
                                player.removeSkill('gongxin');
                            },
                        },
                        kivadu_df: {
                            trigger: {
                                player: 'duBegin',
                            },
                            forced: true,
                            content() {
                                player.recover();
                                player.draw();
                                player.addSkill('luweiyan');
                            },
                        },
                        kivadufeng: {
                            gainable: true,
                            derivation: ['zhouyu', 're_lusu', 'lvmeng', 'luxun', 'sha', 'shan', 'jiu', 'tao', 'du', 'reyingzi', 'yeyan', 'dimeng', 'gongxin', 'qianxun', 'lianying', 'luweiyan'],
                            group: ['kivasha_df', 'kivashan_df', 'kivatao_df', 'kivajiu_df', 'kivadu_df'],
                        },
                        kivarecover_hr: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                player: 'loseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.countCards('h')) return false;
                                if (Array.isArray(event.cards)) for (var i of event.cards) {
                                    if (i.original == 'h') return true;
                                }
                                return false;
                            },
                            content() {
                                player.recover();
                            },
                            ai: {
                                threaten: 0.8,
                                effect: {
                                    target(card) {
                                        if (card.name == 'guohe' || card.name == 'liuxinghuoyu') return 0.5;
                                    },
                                },
                                noh: true,
                                skillTagFilter(player, tag) {
                                    if (tag == 'noh') {
                                        if (player.countCards('h') != 1) return false;
                                    }
                                },
                            },
                        },
                        kivadamage_hr: {
                            enable: 'phaseUse',
                            audio: 'ext:王朝更替策/audio:2',
                            filter(event, player) {
                                return !player.storage.kivadamage_hr;
                            },
                            init(player) {
                                player.storage.kivadamage_hr = false;
                            },
                            filterTarget(card, player, target) {
                                var length = ui.selected.cards.length;
                                return length == 0 || length == 4;
                            },
                            filterCard(card, player) {
                                var suit = card.suit;
                                if (Array.isArray(ui.selected.cards)) for (var i of ui.selected.cards) {
                                    if (i.suit == suit) return false;
                                }
                                return true;
                            },
                            complexCard: true,
                            mark: true,
                            selectCard: [0, 4],
                            line: 'thunder',
                            check() {
                                return -1;
                            },
                            selectTarget() {
                                if (ui.selected.cards.length == 4) return 1;
                                if (ui.selected.cards.length == 0) return [1, 3];
                                game.uncheck('target');
                                return [1, 3];
                            },
                            content() {
                                player.awakenSkill('kivadamage_hr');
                                player.storage.kivadamage_hr = true;
                                if (cards.length == 4) {
                                    player.loseHp(3);
                                    target.damage('thunder', 3, 'nocard');
                                } else {
                                    target.damage('thunder', 'nocard');
                                }
                            },
                            intro: {
                                content: 'limited',
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
                        kivaBlade: {
                            trigger: {
                                player: 'shaBegin',
                            },
                            audio: 'ext:王朝更替策/audio:1',
                            forced: true,
                            filter(event, player) {
                                return !event.directHit && player.getEquip(1);
                            },
                            _priority: -1,
                            content() {
                                if (typeof trigger.shanRequired == 'number') {
                                    trigger.shanRequired++;
                                } else {
                                    trigger.shanRequired = 2;
                                }
                            },
                        },
                        kivaRyuki: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            filter(event, player) {
                                return get.distance(player, event.player) <= 1 && event.num > 0;
                            },
                            forced: true,
                            audio: 'ext:王朝更替策/audio:1',
                            content() {
                                'step 0';
                                event.num = Math.min(trigger.num, 9);
                                ('step 1');
                                player.chooseDrawRecover(get.prompt('kivaRyuki'))
                                    ('step 2');
                                if (result.control != 'cancel2') {
                                    event.num--;
                                    if (event.num > 0) {
                                        event.goto(1);
                                    }
                                }
                            },
                        },
                        门士: {
                            audio: 'ext:王朝更替策/audio:1',
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '变成惊雷引并摸一张牌',
                            content() {
                                'step 0';
                                player.init('惊雷引');
                                player.say(chat);
                                ('step 1');
                                player.draw();
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
                        门矢: {
                            audio: 'ext:王朝更替策/audio:2',
                            enable: 'chooseToUse',
                            usable: 1,
                            filterCard(card, player) {
                                return get.color(card) == 'black';
                            },
                            viewAsFilter(player) {
                                return player.countCards('h', { color: 'black' }) > 0;
                            },
                            viewAs: {
                                name: '流放之诏',
                                suit: 'club',
                                number: 3,
                                cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'club', number: 3, name: 'du', cardid: '1888660343', clone: { name: 'du', suit: 'club', number: 3, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, timeout: 2488 }, timeout: 2458, original: 'h' }],
                            },
                            prompt: '将一张黑色手牌当流放之诏使用,每回合限一次',
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
                                    target(player, target) {
                                        if (target.hasJudge('lebu')) return 0;
                                        return Math.max(1, 2 - target.countCards('h') / 10);
                                    },
                                },
                                expose: 0.2,
                                order: 7,
                                useful: 4,
                                value: 10,
                                tag: {
                                    draw: 2,
                                },
                            },
                        },
                        门士4: {
                            trigger: {
                                player: ['phaseBegin', 'damageEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.getEquip('古青铜纹');
                            },
                            content() {
                                if (trigger.name == 'phase') {
                                    player.useCard(game.createCard('古青铜纹', 'diamond', 1), player);
                                } else {
                                    player.draw();
                                }
                            },
                        },
                        kivaquka: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            content() {
                                var cards = [];
                                for (var i = 0; i < 1; i++) {
                                    cards.push(game.createCard('jianzhu剑助'));
                                }
                                player.gain(cards, 'gain2');
                            },
                        },
                        jueshakiva: {
                            audio: 'ext:王朝更替策/audio:2',
                            enable: 'phaseUse',
                            filterCard: true,
                            usable: 1,
                            selectCard: 4,
                            check(card) {
                                var player = get.owner(card);
                                if (player.countCards('h') > player.hp) return 8 - get.value(card);
                                if (player.hp < player.maxHp) return 6 - get.value(card);
                                return 4 - get.value(card);
                            },
                            filterTarget(card, player, target) {
                                if (target == player) return false;
                                return true;
                            },
                            content() {
                                player.loseMaxHp(3);
                                target.loseHp(50);
                            },
                            ai: {
                                order: 5.5,
                                result: {
                                    player(player) {
                                        if (player.hp < player.maxHp) return 4;
                                        if (player.countCards('h') > player.hp) return 0;
                                        return -1;
                                    },
                                    target: 4,
                                },
                                threaten: 2,
                            },
                        },
                        dragonkiva: {
                            audio: 'ext:王朝更替策/audio:1',
                            trigger: {
                                source: 'dieAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.hasSkill('dragonkiva2');
                            },
                            content() {
                                player.phase('nodelay');
                            },
                        },
                        kivajiaxi: {
                            trigger: {
                                player: ['phaseBefore', 'equipAfter', 'loseAfter'],
                            },
                            forced: true,
                            popup: false,
                            derivation: ['wusheng', 'xuanfeng', 'reyingzi', 'xinshensu'],
                            filter(event, player) {
                                if (player.equiping) return false;
                                var suits = [];
                                var es = player.getCards('e');
                                for (var i = 0; i < es.length; i++) {
                                    suits.add(es[i].suit);
                                }
                                if (player.additionalSkills.kivajiaxi) {
                                    return player.additionalSkills.kivajiaxi.length != suits.length;
                                } else {
                                    return suits.length;
                                }
                            },
                            content() {
                                var suits = [];
                                var es = player.getCards('e');
                                for (var i = 0; i < es.length; i++) {
                                    suits.add(es[i].suit);
                                }
                                player.removeAdditionalSkill('kivajiaxi');
                                switch (suits.length) {
                                    case 1:
                                        player.addAdditionalSkill('kivajiaxi', ['wusheng']);
                                        break;
                                    case 2:
                                        player.addAdditionalSkill('kivajiaxi', ['wusheng', 'xuanfeng']);
                                        break;
                                    case 3:
                                        player.addAdditionalSkill('kivajiaxi', ['mashu', 'xuanfeng', 'reyingzi']);
                                        break;
                                    case 4:
                                        player.addAdditionalSkill('kivajiaxi', ['mashu', 'xuanfeng', 'reyingzi', 'xinshensu']);
                                        break;
                                }
                            },
                            ai: {
                                threaten: 1.2,
                            },
                        },
                        juepokiva: {
                            audio: 'ext:王朝更替策/audio:1',
                            global: 'juepokiva2',
                            trigger: {
                                global: 'dying',
                            },
                            _priority: 15,
                            forced: true,
                            filter(event, player) {
                                return _status.currentPhase == player && event.player != player;
                            },
                            content() { },
                        },
                        kivalongyi: {
                            audio: 'ext:王朝更替策/audio:1',
                            trigger: {
                                player: 'shaMiss',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.canUse('sha', event.target) && player.hasSha();
                            },
                            content() {
                                'step 0';
                                if (player.hasSkill('jiu')) {
                                    game.broadcastAll(function (player) {
                                        player.removeSkill('jiu');
                                    }, player);
                                    event.jiu = true;
                                }
                                player.chooseToUse(get.prompt('qinglong'), { name: 'sha' }, trigger.target, -1).set('addCount', false);
                                ('step 1');
                                if (result.bool);
                                else if (event.jiu) {
                                    player.addSkill('jiu');
                                }
                            },
                        },
                        kivayuanshe: {
                            enable: 'chooseToUse',
                            audio: 'ext:王朝更替策/audio:1',
                            filter(event, player) {
                                return player.countCards('e') > 0;
                            },
                            filterCard: true,
                            position: 'e',
                            viewAs: {
                                name: 'wanjian',
                                suit: 'spade',
                                number: 1,
                                cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'spade', number: 1, name: 'baihupifeng', cardid: '4840112339', clone: { name: 'baihupifeng', suit: 'spade', number: 1, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, timeout: 595 }, original: 'e', timeout: 534 }],
                            },
                            prompt: '将一张装备区内的牌当万箭齐发使用',
                            check(card) {
                                var player = _status.currentPhase;
                                if (player.countCards('he', { subtype: get.subtype(card) }) > 1) {
                                    return 11 - get.equipValue(card);
                                }
                                if (player.countCards('h') < player.hp) {
                                    return 6 - get.value(card);
                                }
                                return 2 - get.equipValue(card);
                            },
                            ai: {
                                order: 9,
                                threaten: 1.1,
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, target) > 0 && target.countCards('h', 'sha')) {
                                        if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
                                    }
                                },
                                basic: {
                                    order: 9,
                                    useful: [5, 1],
                                    value: 5,
                                },
                                result: {
                                    target(player, target) {
                                        if (player.hasUnknown(2) && get.mode() != 'guozhan') return 0;
                                        var nh = target.countCards('h');
                                        if (get.mode() == 'identity') {
                                            if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
                                        }
                                        if (nh == 0) return -2;
                                        if (nh == 1) return -1.7;
                                        return -1.5;
                                    },
                                },
                                tag: {
                                    respond: 1,
                                    respondSha: 1,
                                    damage: 1,
                                    multitarget: 1,
                                    multineg: 1,
                                    respondShan: 1,
                                },
                            },
                        },
                        longhukiva: {
                            audio: 'ext:王朝更替策/audio:1',
                            global: 'longhukiva2',
                            trigger: {
                                global: 'dying',
                            },
                            _priority: 15,
                            forced: true,
                            filter(event, player) {
                                return _status.currentPhase == player && event.player != player;
                            },
                            content() { },
                        },
                        kivatxx3: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha' && player.storage.kivatxx3) return num + player.storage.kivatxx3;
                                },
                            },
                        },
                        kivatxx2: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.kivatxx.length;
                            },
                            content() {
                                player.draw(2 * player.storage.kivatxx.length);
                                player.addTempSkill('kivatxx3');
                                player.$throw(player.storage.kivatxx.slice(0), 1000);
                                player.storage.kivatxx3 = player.storage.kivatxx.length;
                                while (player.storage.kivatxx.length) {
                                    player.storage.kivatxx.shift().discard();
                                }
                                player.unmarkSkill('kivatxx');
                            },
                        },
                        kivajunbing: {
                            global: 'kivajunbing2',
                            audio: 'junbing',
                        },
                        kivaquji: {
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'quji',
                            position: 'he',
                            filterCard: true,
                            selectCard() {
                                var player = _status.event.player;
                                var num = game.countPlayer(function (current) {
                                    return current.isDamaged();
                                });
                                return [1, Math.min(num, player.maxHp - player.hp)];
                            },
                            filterTarget(card, player, target) {
                                return target.hp < target.maxHp;
                            },
                            filter(event, player) {
                                return player.hp < player.maxHp;
                            },
                            selectTarget() {
                                return ui.selected.cards.length;
                            },
                            check(card) {
                                var player = _status.event.player;
                                if (
                                    ui.selected.cards.length >=
                                    game.countPlayer(function (current) {
                                        return get.attitude(player, current) > 0 && current.isDamaged();
                                    })
                                ) {
                                    return -1;
                                }
                                if (get.color(card) == 'black') return -1;
                                return 9 - get.value(card);
                            },
                            content() {
                                'step 0';
                                target.recover();
                                target.draw();
                                ('step 1');
                                if (target == player) {
                                    if (Array.isArray(cards)) for (var i of cards) {
                                        if (get.color(i) == 'black') {
                                            player.loseHp();
                                            player.draw();
                                            break;
                                        }
                                    }
                                }
                            },
                            ai: {
                                result: {
                                    target: 1,
                                },
                                order: 6,
                            },
                        },
                        kivajunbing2: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            filter(event, player) {
                                if (player.countCards('h') > 1) return false;
                                return game.hasPlayer(function (current) {
                                    return current.hasSkill('kivajunbing');
                                });
                            },
                            check(event, player) {
                                var target = game.findPlayer(function (current) {
                                    return current.hasSkill('kivajunbing');
                                });
                                if (target) {
                                    var num = target.countCards('h');
                                    var att = get.attitude(player, target);
                                    if (num == 0) return true;
                                    if (num == 1) return att > -1;
                                    if (num == 2) return att > 0;
                                    return att > 1;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.draw(2);
                                player.discard();
                                if (player.hasSkill('kivajunbing')) {
                                    event.finish();
                                } else {
                                    event.target = game.findPlayer(function (current) {
                                        return current.hasSkill('kivajunbing');
                                    });
                                }
                                ('step 1');
                                var cards = player.getCards('h');
                                target.gain(cards, player);
                                event.num = cards.length;
                                player.$give(event.num, target);
                                ('step 2');
                                target.chooseCard('选择还给' + get.translation(player) + '的牌', true, event.num);
                                ('step 3');
                                player.gain(result.cards, target);
                                target.$give(result.cards.length, player);
                            },
                            forceaudio: true,
                            audio: 'junbing',
                        },
                        kivazhengfu: {
                            audio: 'ext:王朝更替策/audio:2',
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard(card, player) {
                                if (get.zhu(player, 'shouyue')) return true;
                                return get.color(card) == 'red';
                            },
                            position: 'he',
                            viewAs: {
                                name: 'sha',
                                suit: 'diamond',
                                number: 1,
                                cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'diamond', number: 1, name: 'kiva115', cardid: '3212119367', clone: { name: 'kiva115', suit: 'diamond', number: 1, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, timeout: 3839 }, original: 'e', timeout: 3788 }],
                            },
                            viewAsFilter(player) {
                                if (get.zhu(player, 'shouyue')) {
                                    if (!player.countCards('he')) return false;
                                } else {
                                    if (!player.countCards('he', { color: 'red' })) return false;
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
                            audioname: ['re_guanyu', 'guanzhang', 'jsp_guanyu', 'guansuo'],
                        },
                        kivaxiaozhan: {
                            group: ['kivaxiaozhan1', 'kivaxiaozhan2'],
                            ai: {
                                combo: 'kivazhengfu',
                                mingzhi: false,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'respondSha') || get.tag(card, 'respondSha')) {
                                            if (get.attitude(target, player) <= 0) {
                                                if (current > 0) return;
                                                if (target.countCards('h') == 0) return 1.6;
                                                if (target.countCards('h') == 1) return 1.2;
                                                if (target.countCards('h') == 2) return [0.8, 0.2, 0, -0.2];
                                                return [0.4, 0.7, 0, -0.7];
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        kivaxiaozhan1: {
                            audio: 'ducai',
                            trigger: {
                                player: 'shaBefore',
                            },
                            filter(event, player) {
                                if (event.skill != 'kivazhengfu' && event.skill != 'wusheng') return false;
                                return event.target.countCards('hej') > 0;
                            },
                            logTarget: 'target',
                            content() {
                                var card = trigger.target.getCards('hej').randomGet();
                                player.gain(card, trigger.target);
                                trigger.target.$giveAuto(card, player);
                            },
                        },
                        kivaxiaozhan2: {
                            audio: 'ducai',
                            trigger: {
                                player: 'respond',
                            },
                            filter(event, player) {
                                if (event.skill != 'kivazhengfu' && event.skill != 'kivazhengfu' && event.skill != 'wusheng' && event.skill != 'wusheng') return false;
                                return event.source && event.source.countCards('hej') > 0;
                            },
                            logTarget: 'source',
                            content() {
                                var card = trigger.source.getCards('hej').randomGet();
                                player.gain(card, trigger.source);
                                trigger.source.$giveAuto(card, player);
                            },
                        },
                        kivafenglue: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('kivafenglue')).set('ai', function (target) {
                                    var player = _status.event.player;
                                    if (get.attitude(player, target) > 0) {
                                        return get.recoverEffect(target, player, player) + 1;
                                    }
                                    return 0;
                                });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
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
                                ('step 2');
                                if (result.color) {
                                    if (result.color == 'red') {
                                        if (event.target.hp < event.target.maxHp) event.target.draw(3);
                                    } else {
                                        event.target.draw(2);
                                        event.player.draw();
                                    }
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                            },
                        },
                        kivamoushi: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                global: ['respondAfter', 'useCardAfter'],
                            },
                            filter(event, player) {
                                if (!event.respondTo) return false;
                                if (event.player == player) return false;
                                if (player != event.respondTo[0]) return false;
                                if (get.itemtype(event.cards) != 'cards') return false;
                                if (['h', 'e', 'j'].includes(get.position(event.cards[0]))) return false;
                                if (get.itemtype(event.respondTo[1]) != 'card') return false;
                                if (['h', 'e', 'j'].includes(get.position(event.respondTo[1]))) return false;
                                return true;
                            },
                            logTarget: 'player',
                            check(event, player) {
                                if (get.attitude(player, event.player) >= 0) return true;
                                if (player.hasSkill('funan_jiexun') && player.storage.funan_jiexun == event.player) return true;
                                if (event.cards.length > 1) return true;
                                return get.value(event.cards[0]) > get.value(event.respondTo[1]);
                            },
                            content() {
                                'step 0';
                                if (!player.hasSkill('funan_jiexun') || player.storage.funan_jiexun != trigger.player) {
                                    trigger.player.gain(trigger.respondTo[1], 'gain2');
                                    trigger.player.addTempSkill('funan_use');
                                    if (!trigger.player.storage.funan_use) {
                                        trigger.player.storage.funan_use = [];
                                    }
                                    trigger.player.storage.funan_use.add(trigger.respondTo[1]);
                                }
                                ('step 1');
                                player.gain(trigger.cards, 'gain2');
                            },
                            subSkill: {
                                jiexun: {
                                    intro: {
                                        content: '你发动<复难>时,无须令$获得你使用的牌',
                                    },
                                    trigger: {
                                        global: 'dieAfter',
                                    },
                                    silent: true,
                                    filter(event, player) {
                                        return player.storage.funan_jiexun == event.player;
                                    },
                                    content() {
                                        player.removeSkill('funan_jiexun');
                                    },
                                    forced: true,
                                    popup: false,
                                },
                                use: {
                                    mod: {
                                        cardEnabled(card, player) {
                                            if (player.storage.funan_use && player.storage.funan_use.includes(card)) {
                                                return false;
                                            }
                                        },
                                    },
                                },
                            },
                        },
                        kivaliangmou: {
                            trigger: {
                                source: 'damageBefore',
                            },
                            forced: true,
                            content() {
                                trigger.nature = 'poison';
                            },
                        },
                        kivashiquan: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                global: 'dieAfter',
                            },
                            forced: true,
                            content() {
                                player.draw();
                                player.recover();
                                player.addTempSkill('zhiyu', { player: 'phaseUseBegin' });
                                var chat = ['智愚百策,不便告于他人.', '静观其变,即可.'].randomGet();
                                player.say(chat);
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        kivaqiongtu: {
                            trigger: {
                                player: ['phaseBefore', 'changeHp'],
                            },
                            forced: true,
                            popup: false,
                            derivation: ['wushuang', 'jiuchi', 'kivabaoli'],
                            content() {
                                player.removeAdditionalSkill('kivaqiongtu');
                                var list = [];
                                if (player.hp >= 3) {
                                    list.push('wushuang');
                                }
                                if (player.hp <= 3) {
                                    list.push('jiuchi');
                                }
                                if (list.length) {
                                    player.addAdditionalSkill('kivaqiongtu', list);
                                }
                            },
                            ai: {
                                maixie: false,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (!target.hasFriend()) return;
                                            if (target.hp >= 4) return [0, 1];
                                        }
                                        if (get.tag(card, 'recover') && player.hp >= player.maxHp - 1) return [0, 0];
                                    },
                                },
                            },
                        },
                        kivabaoli: {
                            global: 'kivabaoli2',
                            zhuSkill: true,
                            audio: 'retieqi',
                        },
                        kivabaoli2: {
                            audio: 'retieqi',
                            enable: 'phaseUse',
                            discard: false,
                            line: true,
                            prepare: 'give',
                            filter(event, player) {
                                if (player.group != 'qun') return false;
                                if (player.countCards('h', 'sha') + player.countCards('h', 'spade') == 0) return 0;
                                return game.hasPlayer(function (target) {
                                    return target != player && target.hasZhuSkill('kivabaoli', player);
                                });
                            },
                            filterCard(card, player) {
                                return card.name == 'sha' || card.suit == 'spade';
                            },
                            filterTarget(card, player, target) {
                                return target != player && target.hasZhuSkill('kivabaoli', player);
                            },
                            usable: 1,
                            content() {
                                game.playAudio('skill', 'huangtian_' + target.name + Math.ceil(2 * Math.random()));
                                target.gain(cards, player);
                            },
                            ai: {
                                expose: 0.3,
                                order: 10,
                                result: {
                                    target: 5,
                                },
                            },
                            audioname: ['sp_zhangjiao'],
                        },
                        kivajinqu: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            audio: 'jinqu',
                            check(event, player) {
                                return player.storage.qizhi >= player.countCards('h');
                            },
                            prompt(event, player) {
                                if (typeof player.storage.qizhi != 'number') {
                                    '进趋:是否摸两张牌并将手牌弃置至' + get.cnNumber(0) + '张？';
                                }
                                return '进趋:是否摸两张牌并将手牌弃置至' + get.cnNumber(player.storage.qizhi) + '张？';
                            },
                            content() {
                                'step 0';
                                event.num = player.hp;
                                player.draw(event.num);
                                ('step 1');
                                if (typeof player.storage.qizhi != 'number') {
                                    player.storage.qizhi = 0;
                                }
                                var dh = player.countCards('h') - player.storage.qizhi;
                                if (dh > 0) {
                                    player.chooseToDiscard(dh, true);
                                }
                            },
                        },
                        kivacanshi: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.isUnseen()) return false;
                                return game.hasPlayer(function (current) {
                                    return player.canUse('gw_youer', current);
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(
                                        '蚕食:选择诱饵的目标',
                                        function (card, player, target) {
                                            return player.canUse({ name: 'gw_youer' }, target);
                                        },
                                        true
                                    )
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.effect(target, { name: 'gw_youer' }, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.useCard({ name: 'gw_youer' }, result.targets);
                                }
                            },
                        },
                        kivashichou: {
                            trigger: {
                                player: ['phaseBefore', 'changeHp'],
                            },
                            forced: true,
                            audio: 'ext:王朝更替策/audio:2',
                            popup: false,
                            content() {
                                player.removeAdditionalSkill('kivashichou');
                                var list = [];
                                if (player.hp <= 3) {
                                    list.push('kivashichou1');
                                }
                                if (player.hp <= 2) {
                                    list.push('kivashichou2');
                                }
                                if (player.hp <= 1) {
                                    list.push('kivashichou3');
                                }
                                if (list.length) {
                                    player.addAdditionalSkill('kivashichou', list);
                                }
                            },
                            ai: {
                                maixie: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (!target.hasFriend()) return;
                                            if (target.hp >= 4) return [0, 1];
                                        }
                                        if (get.tag(card, 'recover') && player.hp >= player.maxHp - 1) return [0, 0];
                                    },
                                },
                            },
                        },
                        kivazhuiji: {
                            trigger: {
                                player: ['phaseBefore', 'changeHp'],
                            },
                            forced: true,
                            popup: false,
                            content() {
                                player.removeAdditionalSkill('kivazhuiji');
                                var list = [];
                                if (player.hp <= 3) {
                                    list.push('kivazhuiji1');
                                }
                                if (player.hp <= 2) {
                                    list.push('kivazhuiji2');
                                }
                                if (player.hp <= 1) {
                                    list.push('kivazhuiji3');
                                }
                                if (list.length) {
                                    player.addAdditionalSkill('kivazhuiji', list);
                                }
                            },
                            ai: {
                                maixie: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (!target.hasFriend()) return;
                                            if (target.hp >= 4) return [0, 1];
                                        }
                                        if (get.tag(card, 'recover') && player.hp >= player.maxHp - 1) return [0, 0];
                                    },
                                },
                            },
                        },
                        kivazhuiji1: {
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 1;
                                },
                            },
                        },
                        kivazhuiji2: {
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 2;
                                },
                            },
                        },
                        kivazhuiji3: {
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 7;
                                },
                            },
                        },
                        kivashichou1: {
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                if (event.card.name != 'sha') return false;
                                return game.hasPlayer(function (current) {
                                    return !event.targets.includes(current) && get.distance(player, current) <= 1 && player.canUse('sha', current);
                                });
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('kivashichou1'), function (card, player, target) {
                                        return !_status.event.source.includes(target) && get.distance(player, target) <= 1 && player.canUse('sha', target);
                                    })
                                    .set('source', trigger.targets)
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.effect(target, { name: 'sha' }, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                trigger.targets.push(event.target);
                            },
                            ai: {
                                effect: {
                                    player(card, player, target) {
                                        if (card.name == 'sha') {
                                            if (player._duanbingtmp) return;
                                            player._duanbingtmp = true;
                                            if (get.effect(target, { name: 'sha' }, player, player) <= 0) {
                                                delete player._duanbingtmp;
                                                return;
                                            }
                                            if (
                                                game.hasPlayer(function (current) {
                                                    return current != target && get.distance(player, current) <= 1 && player.canUse('sha', current) && get.effect(current, { name: 'sha' }, player, player) > 0;
                                                })
                                            ) {
                                                delete player._duanbingtmp;
                                                return [1, 1];
                                            }
                                            delete player._duanbingtmp;
                                        }
                                    },
                                },
                            },
                            audioname: ['heqi'],
                        },
                        kivashichou2: {
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                if (event.card.name != 'sha') return false;
                                return game.hasPlayer(function (current) {
                                    return !event.targets.includes(current) && get.distance(player, current) <= 1 && player.canUse('sha', current);
                                });
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('kivashichou2'), function (card, player, target) {
                                        return !_status.event.source.includes(target) && get.distance(player, target) <= 1 && player.canUse('sha', target);
                                    })
                                    .set('source', trigger.targets)
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.effect(target, { name: 'sha' }, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                trigger.targets.push(event.target);
                            },
                            ai: {
                                effect: {
                                    player(card, player, target) {
                                        if (card.name == 'sha') {
                                            if (player._duanbingtmp) return;
                                            player._duanbingtmp = true;
                                            if (get.effect(target, { name: 'sha' }, player, player) <= 0) {
                                                delete player._duanbingtmp;
                                                return;
                                            }
                                            if (
                                                game.hasPlayer(function (current) {
                                                    return current != target && get.distance(player, current) <= 1 && player.canUse('sha', current) && get.effect(current, { name: 'sha' }, player, player) > 0;
                                                })
                                            ) {
                                                delete player._duanbingtmp;
                                                return [1, 1];
                                            }
                                            delete player._duanbingtmp;
                                        }
                                    },
                                },
                            },
                            audioname: ['heqi'],
                        },
                        kivashichou3: {
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                if (event.card.name != 'sha') return false;
                                return game.hasPlayer(function (current) {
                                    return !event.targets.includes(current) && get.distance(player, current) <= 1 && player.canUse('sha', current);
                                });
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('kivashichou3'), function (card, player, target) {
                                        return !_status.event.source.includes(target) && get.distance(player, target) <= 1 && player.canUse('sha', target);
                                    })
                                    .set('source', trigger.targets)
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.effect(target, { name: 'sha' }, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                trigger.targets.push(event.target);
                            },
                            ai: {
                                effect: {
                                    player(card, player, target) {
                                        if (card.name == 'sha') {
                                            if (player._duanbingtmp) return;
                                            player._duanbingtmp = true;
                                            if (get.effect(target, { name: 'sha' }, player, player) <= 0) {
                                                delete player._duanbingtmp;
                                                return;
                                            }
                                            if (
                                                game.hasPlayer(function (current) {
                                                    return current != target && get.distance(player, current) <= 1 && player.canUse('sha', current) && get.effect(current, { name: 'sha' }, player, player) > 0;
                                                })
                                            ) {
                                                delete player._duanbingtmp;
                                                return [1, 1];
                                            }
                                            delete player._duanbingtmp;
                                        }
                                    },
                                },
                            },
                            audioname: ['heqi'],
                        },
                        kivamiyin: {
                            audio: 'ext:王朝更替策/audio:1',
                            trigger: {
                                player: 'dieBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('kivamiyin'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return get.attitude(player, target);
                                };
                                ('step 1');
                                if (result.bool) {
                                    var cards = player.getCards('hej');
                                    var target = result.targets[0];
                                    target.draw(3);
                                    target.addSkill('kivamoushi');
                                    target.marks.changnian = target.markCharacter(player, {
                                        name: '谋识',
                                        content: '<div class="skill">【谋识】</div><div>其他角色使用或打出牌响应你使用的牌时,你可令其获得你使用的牌(其本回合不能使用或打出这张牌),你获得其使用或打出的牌</div>',
                                    });
                                    game.addVideo('markCharacter', target, {
                                        name: '谋识',
                                        content: '<div class="skill">【谋识】</div><div>其他角色使用或打出牌响应你使用的牌时,你可令其获得你使用的牌(其本回合不能使用或打出这张牌),你获得其使用或打出的牌</div>',
                                        id: 'kivamoushi',
                                        target: player.dataset.position,
                                    });
                                }
                            },
                            ai: {
                                threaten: 0.8,
                            },
                        },
                        kivayewang: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return get.itemtype(event.cards) == 'cards' && get.position(event.cards[0]) == 'd';
                            },
                            content() {
                                player.gain(trigger.cards);
                                player.$gain2(trigger.cards);
                                player.addTempSkill('kivayewang1', { source: 'damageEnd' });
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
                                        if (get.tag(card, 'damage')) return [1, 0.5];
                                    },
                                },
                            },
                        },
                        kivabuwu: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                        },
                        kivayewang1: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num += 1;
                            },
                        },
                        kivazhichen: {
                            gainable: true,
                            group: ['rende', 'wangxi'],
                        },
                        kivaduoquan: {
                            derivation: ['kivafengchen', 'jiuyuan', 'fulin'],
                            audio: 'ext:王朝更替策/audio:1',
                            enable: 'chooseToUse',
                            mark: true,
                            init(player) {
                                player.storage.kivaduoquan = false;
                            },
                            filter(event, player) {
                                if (player.storage.kivaduoquan) return false;
                                if (event.type == 'dying') {
                                    if (player != event.dying) return false;
                                    return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('kivaduoquan');
                                player.storage.kivaduoquan = true;
                                var num = player.maxHp - player.countCards('h');
                                if (num > 0) {
                                    player.draw(num);
                                }
                                ('step 1');
                                if (player.hp < 2) {
                                    player.recover(2 - player.hp);
                                }
                                ('step 2');
                                player.removeSkill('kivazhichen');
                                player.addSkill('kivafengchen');
                                player.addSkill('fulin');
                                player.addSkill('jiuyuan');
                            },
                            ai: {
                                order: 1,
                                skillTagFilter(player) {
                                    if (player.storage.kivaduoquan) return false;
                                    if (player.hp > 0) return false;
                                },
                                save: true,
                                result: {
                                    player: 10,
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        kivafengchen: {
                            audio: 'ext:王朝更替策/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            position: 'hej',
                            filterCard: true,
                            selectCard: [1, 4],
                            prompt: '弃置四张牌并摸等量的牌',
                            check(card) {
                                return 6 - get.value(card);
                            },
                            content() {
                                player.draw(cards.length);
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                                threaten: 1.5,
                            },
                        },
                        kivayinren1: {
                            trigger: {
                                target: 'shaBefore',
                            },
                            forced: true,
                            _priority: 6,
                            audio: 'renwang_skill',
                            filter(event, player) {
                                if (event.player.hasSkillTag('unequip', false, event.card)) return false;
                                return event.card && event.card.name == 'sha' && get.color(event.card) == 'black';
                            },
                            content() {
                                trigger.cancel();
                            },
                            ai: {
                                effect: {
                                    target(card, player) {
                                        if (player.hasSkillTag('unequip', false, card)) return;
                                        if (card.name == 'sha' && get.color(card) == 'black') return 'zerotarget';
                                    },
                                },
                            },
                        },
                        kivayinren2: {
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            audio: 'baiyin_skill',
                            filter(event, player) {
                                if (event.num <= 1) return false;
                                if (event.source && event.source.hasSkillTag('unequip', false, event.card)) return false;
                                return true;
                            },
                            _priority: -10,
                            content() {
                                trigger.num = 1;
                            },
                        },
                        kivayinren: {
                            gainable: true,
                            group: ['kivayinren1', 'kivayinren2'],
                        },
                        kivamujiang: {
                            derivation: ['kivajiangjun'],
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                global: 'phaseEnd',
                            },
                            filter(event, player) {
                                return event.player.isAlive() && event.player != player && player.countCards('h', { type: 'basic' });
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var nono = Math.abs(get.attitude(player, trigger.player)) < 3;
                                if (get.damageEffect(trigger.player, player, player) <= 0) {
                                    nono = true;
                                }
                                var next = player.chooseToDiscard(get.prompt('kivamujiang', trigger.player), { type: 'basic' });
                                next.set('ai', function (card) {
                                    if (_status.event.nono) return 0;
                                    return 8 - get.useful(card);
                                });
                                next.set('nono', nono);
                                ('step 1');
                                if (result.bool) {
                                    var nono = get.damageEffect(trigger.player, player, trigger.player) >= 0;
                                    trigger.player
                                        .chooseToDiscard('he', { type: 'equip' })
                                        .set('ai', function (card) {
                                            if (_status.event.nono) {
                                                return 0;
                                            }
                                            if (_status.event.player.hp == 1) return 10 - get.value(card);
                                            return 9 - get.value(card);
                                        })
                                        .set('nono', nono);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.draw();
                                    player.removeSkill('kivayinren');
                                    player.addSkill('kivajiangjun');
                                } else {
                                    trigger.player.damage();
                                }
                            },
                            ai: {
                                expose: 0.3,
                                threaten: 1.3,
                            },
                        },
                        kivajiangjun: {
                            gainable: true,
                            group: ['reyingzi', 'fulu', 'paoxiao'],
                        },
                        云岳斧3: {
                            audio: 'ext:王朝更替策/audio:1',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            nature: 'thunder',
                            content() {
                                'step 0';
                                player.say('是否云岳斧？');
                                ('step 1');
                                player.say('是否云岳斧？');
                                ('step 2');
                                player.say('是否云岳斧？');
                                ('step 3');
                                player
                                    .chooseTarget(get.prompt('云岳斧3'), function (card, player, target) {
                                        return lib.filter.targetEnabled({ name: 'sha' }, player, target);
                                    })
                                    .set('ai', function (target) {
                                        return get.effect(target, { name: 'sha' }, _status.event.player);
                                    });
                                ('step 4');
                                if (result.bool) {
                                    player.useCard({ name: 'sha' }, result.targets, false);
                                    player.say('云岳斧!');
                                }
                            },
                            ai: {
                                threaten(player, target) {
                                    return 1.6;
                                },
                            },
                        },
                        云岳斧: {
                            audio: 'ext:王朝更替策/audio:1',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                player.addTempSkill('云岳斧2', { source: 'damageEnd' });
                            },
                        },
                        云岳斧2: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num += 1;
                            },
                        },
                        kivakunzhong: {
                            trigger: {
                                player: 'dieBegin',
                            },
                            forced: true,
                            derivation: 'tianming',
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('kivakunzhong'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return get.attitude(player, target);
                                };
                                ('step 1');
                                if (result.bool) {
                                    var cards = player.getCards('hej');
                                    var target = result.targets[0];
                                    player.$give(cards, target);
                                    target.gain(cards);
                                    target.addSkill('tianming');
                                    target.removeSkill('yicong');
                                    target.removeSkill('reyicong');
                                    target.marks.changnian = target.markCharacter(player, {
                                        name: '天命',
                                        content: '<div class="skill">【天命】</div><div>在此乱世,唯独仅有天命!</div>',
                                    });
                                    game.addVideo('markCharacter', target, {
                                        name: '天命',
                                        content: '<div class="skill">【天命】</div><div>在此乱世,唯独仅有天命!</div>',
                                        id: 'kivakunzhong',
                                        target: player.dataset.position,
                                    });
                                }
                            },
                            ai: {
                                threaten: 0.8,
                            },
                        },
                        kivabeifa: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                player: 'phaseDrawBefore',
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                                ('step 1');
                                event.cards = get.cards(5);
                                if (event.isMine() == false) {
                                    event.dialog = ui.create.dialog('北伐', event.cards);
                                }
                                ('step 2');
                                if (event.dialog) event.dialog.close();
                                var dialog = ui.create.dialog('北伐', event.cards);
                                player.chooseButton([0, 5], dialog, true).set('ai', function (button) {
                                    return get.value(button.link);
                                }).filterButton = function (button) {
                                    for (var i = 0; i < ui.selected.buttons.length; i++) {
                                        if (button.link.suit == ui.selected.buttons[i].link.suit) return false;
                                    }
                                    return true;
                                };
                                ('step 3');
                                var cards2 = [];
                                for (var i = 0; i < result.buttons.length; i++) {
                                    cards2.push(result.buttons[i].link);
                                    cards.remove(result.buttons[i].link);
                                }
                                player.gain(cards2, 'log');
                                if (cards2.length) player.$gain2(cards2);
                                if (Array.isArray(cards)) for (var i of cards) {
                                    i.discard();
                                }
                            },
                            ai: {
                                threaten: 1.2,
                            },
                        },
                        kivawenji: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                target: 'useCardToBegin',
                            },
                            filter(event, player) {
                                if (get.color(event.card) != 'red') return false;
                                if (!event.player) return false;
                                if (event.player == player) return false;
                                return player.countCards('h', 'sha') > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard('闻鸡:是否弃置一张杀并摸两张牌？', { name: 'sha' });
                                next.set('ai', function (card) {
                                    return 9 - get.value(card);
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.draw(2);
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (get.color(card) == 'black' && target.countCards('h') > 0) {
                                            return [1, 0.5];
                                        }
                                    },
                                },
                            },
                        },
                        kivatiancai: {
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            init(player) {
                                player.storage.kivatiancai = 0;
                            },
                            onremove(player) {
                                player.unmarkSkill('zhongjian');
                                delete player.storage.kivatiancai;
                            },
                            intro: {
                                content(storage) {
                                    if (storage > 0) return '手牌上限+' + storage;
                                    if (storage < 0) return '手牌上限' + storage;
                                    return '手牌上限无变化';
                                },
                            },
                            content() {
                                'step 0';
                                if (player.isHealthy()) {
                                    event.type = 0;
                                    player.chooseBool(get.prompt('kivatiancai'), '手牌上限+1,本回合你的牌不能对其他角色使用', function (event, player) {
                                        return player.skipList.includes('phaseUse') || !player.needsToDiscard(1);
                                    });
                                } else {
                                    event.type = 1;
                                    player.chooseControlList(get.prompt('kivatiancai'), '手牌上限+1,本回合你的牌不能对其他角色使用', '回复1点体力,本回合你的牌不能对自己使用', function () {
                                        return 1;
                                    });
                                }
                                ('step 1');
                                if (event.type) {
                                    if (result.control != 'cancel2') {
                                        if (result.index == 0) {
                                            player.addTempSkill('caishi2');
                                            player.storage.kivatiancai++;
                                            if (player.storage.kivatiancai >= 0) {
                                                player.unmarkSkill('zhongjian');
                                                if (player.storage.kivatiancai > 0) {
                                                    player.markSkill('kivatiancai');
                                                }
                                            } else {
                                            }
                                        } else if (result.index == 1) {
                                            player.recover();
                                            player.addTempSkill('caishi3');
                                        }
                                    }
                                } else {
                                    if (result.bool) {
                                        player.addTempSkill('caishi2');
                                        player.storage.caishi++;
                                        if (player.storage.caishi >= 0) {
                                            player.unmarkSkill('zhongjian');
                                            if (player.storage.kivatiancai > 0) {
                                                player.markSkill('kivatiancai');
                                            }
                                        } else {
                                        }
                                    }
                                }
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    if (typeof player.storage.kivatiancai == 'number') return num + player.storage.kivatiancai;
                                },
                            },
                        },
                        kivachouce: {
                            audio: 'chouce',
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
                                    player.draw();
                                    player
                                        .chooseTarget('弃置一名角色区域内的一张牌', true, function (card, player, target) {
                                            return target.countCards('hej');
                                        })
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
                                } else {
                                    var next = player.chooseTarget('令一名角色摸一张牌', true);
                                    var xianfu = game.findPlayer(function (current) {
                                        return current.hasSkill('xianfu2') && current.storage.xianfu2 == player;
                                    });
                                    if (xianfu) {
                                        next.set('prompt2', '(若目标为' + get.translation(xianfu) + '则改为回复一点体力)');
                                    }
                                    next.set('ai', function (target) {
                                        var player = _status.event.player;
                                        var att = get.attitude(player, target) / Math.sqrt(1 + target.countCards('h'));
                                        if (target.storage.xianfu2 == player) return att * 2;
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
                                        if (target.hasSkill('xianfu2') && target.storage.xianfu2 == player) {
                                            target.recover();
                                        } else {
                                            target.draw();
                                        }
                                    }
                                }
                                ('step 4');
                                if (--event.num > 0) {
                                    player.chooseBool('是否再次发动【筹策】？');
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
                        kivatiandu: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                player: 'judgeEnd',
                            },
                            frequent(event) {
                                if (event.result.card.name == 'du') return false;
                                if (get.mode() == 'guozhan') return false;
                                return true;
                            },
                            check(event) {
                                if (event.result.card.name == 'du') return false;
                                return true;
                            },
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
                            },
                            audioname: ['re_guojia'],
                        },
                        kivayuanlue: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                player.draw(trigger.num);
                            },
                            ai: {
                                damageBonus: true,
                            },
                        },
                        kivaliyuan: {
                            audio: 'ext:王朝更替策/audio:1',
                            trigger: {
                                player: 'phaseDiscardBegin',
                            },
                            forced: true,
                            content() {
                                player.removeSkill('cjcjjcjcjcjjcsksklansjsolz禁断的技能ixh');
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num - 2;
                                },
                            },
                        },
                        kivayingyuan: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                global: 'shaBegin',
                            },
                            forced: true,
                            content() {
                                player.link();
                                player.draw();
                            },
                        },
                        kivayingyuan2: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                global: 'phaseDrawEnd',
                            },
                            forced: true,
                            content() {
                                player.chooseToUse({ name: 'sha' }, '应援:是否使用一张杀？');
                            },
                        },
                        kivayingyuan3: {
                            gainable: true,
                            audio: 'ext:王朝更替策/audio:2',
                            group: ['kivayingyuan', 'kivayingyuan2', 'kivayingyuan4'],
                        },
                        kivazishu: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num += 3;
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num - 4;
                                },
                            },
                        },
                        kivayingyuan4: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                        },
                        kivabeixian: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                source: 'damageEnd',
                            },
                            usable: 1,
                            content() {
                                var cards = [];
                                for (var i = 0; i < 1; i++) {
                                    cards.push(game.createCard('sha'));
                                }
                                player.gain(cards, 'gain2');
                            },
                        },
                        kivabingyi: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                player: 'phaseDiscardEnd',
                            },
                            filter(event, player) {
                                var cards = player.getCards('h');
                                if (cards.length < 1) return false;
                                var color = get.color(cards[0]);
                                for (var i = 1; i < cards.length; i++) {
                                    if (get.color(i) != color) return false;
                                }
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('kivabingyi'), [1, player.countCards('h')], function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.showHandcards(get.translation(player) + '发动了【秉壹】');
                                    event.targets = result.targets;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (targets && targets.length) {
                                    player.line(targets, 'green');
                                    game.asyncDraw(targets);
                                    player.draw();
                                }
                            },
                            ai: {
                                expose: 0.1,
                            },
                        },
                        kivashenxing: {
                            audio: 'ext:王朝更替策/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            position: 'he',
                            filterCard: true,
                            selectCard: 1,
                            prompt: '横置或重置自己,弃置一张牌并摸两张牌',
                            check(card) {
                                return 4 - get.useful(card);
                            },
                            content() {
                                player.draw(2);
                                player.link();
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        kivaertian: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                player: 'shaBegin',
                            },
                            usable: 1,
                            forced: true,
                            content() {
                                player.chooseToUse({ name: 'sha' }, '二天:是否继续使用一张杀？');
                            },
                        },
                        kivacixiong_liubei: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                player: 'damageEnd',
                                global: 'gameDarwAfter',
                            },
                            forced: true,
                            content() {
                                player.useCard(game.createCard('cixiong', 'diamond', 13), player);
                            },
                        },
                        kivayitian: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                player: 'damageEnd',
                                global: 'gameDarwAfter',
                            },
                            forced: true,
                            content() {
                                player.useCard(game.createCard('qinggang', 'spade', 13), player);
                            },
                        },
                        kivazhabing: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            content() {
                                player.loseHp();
                                player.addTempSkill('kivazhabing5', { player: 'phaseBegin' });
                            },
                        },
                        kivaguimou: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            content() {
                                player.draw(player.maxHp - player.hp);
                            },
                            ai: {
                                threaten: 1.3,
                            },
                            audioname: ['sp_lvmeng', 'sunce'],
                        },
                        kivazhabing2: {
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (card.name == 'sha' || card.name == 'juedou' || card.name == 'nanman' || card.name == 'wanjian' || card.name == 'jingleishan' || card.name == 'chiyuxi' || card.name == 'huogong' || card.name == 'bingliang') return false;
                                },
                            },
                        },
                        测试2: {
                            audio: 'ext:王朝更替策/audio:2',
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard(card, player) {
                                if (get.zhu(player, 'shouyue')) return true;
                                return get.color(card) == 'red';
                            },
                            position: 'he',
                            viewAs: {
                                name: 'sha',
                                suit: 'diamond',
                                number: 1,
                                cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'diamond', number: 1, name: 'kiva115', cardid: '3212119367', clone: { name: 'kiva115', suit: 'diamond', number: 1, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, timeout: 3839 }, original: 'e', timeout: 3788 }],
                            },
                            viewAsFilter(player) {
                                if (get.zhu(player, 'shouyue')) {
                                    if (!player.countCards('he')) return false;
                                } else {
                                    if (!player.countCards('he', { color: 'red' })) return false;
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
                            audioname: ['re_guanyu', 'guanzhang', 'jsp_guanyu', 'guansuo'],
                        },
                        kivazhabing3: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                player.recover();
                            },
                        },
                        kivazhabing4: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                player: 'LostHpEnd',
                            },
                            forced: true,
                            content() {
                                player.recover();
                            },
                        },
                        kivazhabing5: {
                            gainable: true,
                            mark: true,
                            group: ['kivazhabing2', 'kivazhabing3', 'kivazhabing4'],
                        },
                        kivajincui: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                player: 'judgeEnd',
                            },
                            frequent(event) {
                                if (event.result.card.name == 'du') return false;
                                if (get.mode() == 'guozhan') return false;
                                return true;
                            },
                            check(event) {
                                if (event.result.card.name == 'du') return false;
                                return true;
                            },
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
                                player.draw(3);
                                player.addSkill('kivajugong');
                                player.loseHp();
                            },
                            audioname: ['re_guojia'],
                        },
                        kivajugong: {
                            trigger: {
                                global: 'judge',
                            },
                            filter(event, player) {
                                return player.countCards('he', { color: 'red' }) > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('kivajugong'), 'he', function (card) {
                                        return get.color(card) == 'red';
                                    })
                                    .set('ai', function (card) {
                                        var trigger = _status.event.getTrigger();
                                        var player = _status.event.player;
                                        var judging = _status.event.judging;
                                        var result = trigger.judge(card) - trigger.judge(judging);
                                        var attitude = get.attitude(player, trigger.player);
                                        if (attitude == 0 || result == 0) return 0;
                                        if (attitude > 0) {
                                            return result;
                                        } else {
                                            return -result;
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
                                    player.$gain2(trigger.player.judging[0]);
                                    player.gain(trigger.player.judging[0]);
                                    trigger.player.judging[0] = result.cards[0];
                                    if (!get.owner(result.cards[0], 'judge')) {
                                        trigger.position.appendChild(result.cards[0]);
                                    }
                                    game.log(trigger.player, '的判定牌改为', result.cards[0]);
                                }
                                ('step 3');
                                player.removeSkill('kivajugong');
                            },
                            ai: {
                                tag: {
                                    rejudge: 1,
                                },
                            },
                        },
                        帝司: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num += player.maxHp - player.hp + 1;
                                player.gain(game.createCard('sha'));//QQQ
                                player.$draw();
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return (num += 3);
                                },
                            },
                        },
                        重巨: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num += player.hujia;
                                player.changeHujia(player.hp);
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return (num += 4);
                                },
                            },
                        },
                        kivayinyang: {
                            gainable: true,
                            group: ['kivayinyang1', 'kivayinyang2'],
                        },
                        kivaxianji: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                player: 'huogongBegin',
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                        },
                        kivazhanbu: {
                            global: 'kivazhanbu2',
                        },
                        kivatiannu: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num = 0;
                                var cards = [];
                                for (var i = 0; i < 5; i++) {
                                    cards.push(game.createCard('sha'));
                                }
                                player.gain(cards, 'gain2');
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return (num = 0);
                                },
                            },
                        },
                        kivayinyang1: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num -= 1;
                                var cards = [];
                                for (var i = 0; i < 1; i++) {
                                    cards.push(game.createCard('tiesuo'));
                                }
                                player.gain(cards, 'gain2');
                            },
                            ai: {
                                threaten: 1.3,
                            },
                            audioname: ['sp_lvmeng', 'sunce'],
                        },
                        kivayinyang2: {
                            trigger: {
                                player: ['phaseEnd', 'phaseUseEnd'],
                            },
                            forced: true,
                            alter: true,
                            filter(event, player) {
                                if (get.is.altered('kivayinyang2')) {
                                    if (event.name != 'phaseUse') return false;
                                } else {
                                    if (event.name != 'phase') return false;
                                }
                                return game.hasPlayer(function (current) {
                                    return current.isLinked();
                                });
                            },
                            content() {
                                var cards = [];
                                for (var i = 0; i < 1; i++) {
                                    cards.push(game.createCard('huogong'));
                                }
                                player.gain(cards, 'gain2');
                            },
                            ai: {
                                threaten: 1.6,
                            },
                        },
                        kivazhanbu2: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (player.hasSkill('wengua3')) return false;
                                return (
                                    player.countCards('h') &&
                                    game.hasPlayer(function (current) {
                                        return current.hasSkill('kivazhanbu');
                                    })
                                );
                            },
                            forced: true,
                            filterCard: true,
                            discard: false,
                            lose: false,
                            prompt() {
                                var player = _status.event.player;
                                var list = game.filterPlayer(function (current) {
                                    return current.hasSkill('kivazhanbu');
                                });
                                var str = '将一张手牌交给' + get.translation(list);
                                if (list.length > 1) str += '中的一人';
                                return str;
                            },
                            check(card) {
                                if (card.name == 'sha') return 5;
                                return 8 - get.value(card);
                            },
                            content() {
                                'step 0';
                                var targets = game.filterPlayer(function (current) {
                                    return current.hasSkill('kivazhanbu');
                                });
                                if (targets.length == 1) {
                                    event.target = targets[0];
                                    event.goto(2);
                                } else if (targets.length) {
                                    player
                                        .chooseTarget(true, '选择【占卜】的目标', function (card, player, target) {
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
                                    player.addTempSkill('wengua3');
                                    event.card = cards[0];
                                    if (event.target != player) {
                                        player.give(cards, event.target);
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (event.target.getCards('h').includes(event.card)) {
                                    event.target.chooseControlList('占卜', '将' + get.translation(event.card) + '置于牌堆顶', '将' + get.translation(event.card) + '置于牌堆底', true, function () {
                                        return 1;
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 4');
                                event.target.lose(event.card, ui.special);
                                event.index = result.index;
                                game.broadcastAll(function (player) {
                                    var cardx = ui.create.card();
                                    cardx.classList.add('infohidden');
                                    cardx.classList.add('infoflip');
                                    player.$throw(cardx, 1000, 'nobroadcast');
                                }, event.target);
                                ('step 5');
                                ('step 6');
                                event.card.fix();
                                if (event.index == 1) {
                                    game.log(event.target, '将获得的牌置于牌堆底');
                                    ui.cardPile.appendChild(event.card);
                                    if (ui.cardPile.childElementCount == 1 || player == event.target) {
                                        event.togain = [ui.cardPile.firstChild];
                                        ui.cardPile.firstChild.remove();
                                    } else {
                                        event.togain = get.cards(2);
                                    }
                                } else {
                                    game.log(player, '将获得的牌置于牌堆顶');
                                    ui.cardPile.insertBefore(event.card, ui.cardPile.firstChild);
                                    if (ui.cardPile.childElementCount == 1 || player == event.target) {
                                        event.togain = [ui.cardPile.lastChild];
                                        ui.cardPile.lastChild.remove();
                                    } else {
                                        event.togain = [ui.cardPile.lastChild, ui.cardPile.lastChild.previousSibling];
                                        ui.cardPile.lastChild.remove();
                                        ui.cardPile.lastChild.remove();
                                    }
                                }
                                if (event.togain.length) {
                                    player.gain(event.togain.shift());
                                    player.$draw();
                                }
                                if (event.togain.length) {
                                    event.target.gain(event.togain.shift());
                                    event.target.$draw();
                                }
                            },
                            ai: {
                                order: 2,
                                threaten: 1.5,
                                result: {
                                    player(player, target) {
                                        var target = game.findPlayer(function (current) {
                                            return current.hasSkill('kivazhanbu');
                                        });
                                        if (target) {
                                            return get.attitude(player, target);
                                        }
                                    },
                                },
                            },
                        },
                        kivajingsi: {
                            audio: 'ext:王朝更替策/audio:2',
                            filter(event, player) {
                                return player.countCards('he', { suit: 'diamond' }) > 0;
                            },
                            enable: 'chooseToUse',
                            filterCard(card, player) {
                                return card.suit == 'diamond';
                            },
                            position: 'he',
                            viewAs: {
                                name: 'jingyesi',
                                suit: 'diamond',
                                number: 12,
                                cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'diamond', number: 12, name: 'fangtian', cardid: '2354939435', clone: { name: 'fangtian', suit: 'diamond', number: 12, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, timeout: 11933 }, original: 'h', _transform: 'translateY(0px)', viewAs: 'jingyesi', timeout: 11921 }],
                            },
                            prompt: '将一张♦️️牌当静夜思使用',
                            check(card) {
                                return 6 - get.value(card);
                            },
                            ai: {
                                threaten: 1.5,
                                basic: {
                                    order: 1,
                                    useful: 1,
                                    value: 8,
                                },
                                result: {
                                    target(player, target) {
                                        var num = target.hp - target.countCards('h') - 2;
                                        if (num > -1) return -0.01;
                                        if (target.hp < 3) num--;
                                        if (target.isTurnedOver()) num /= 2;
                                        var dist = get.distance(player, target, 'absolute');
                                        if (dist < 1) dist = 1;
                                        return num / Math.sqrt(dist);
                                    },
                                },
                                tag: {
                                    skip: 'phaseDiscard',
                                },
                            },
                        },
                        kivajinqiang: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            content() {
                                var cards = [];
                                for (var i = 0; i < 1; i++) {
                                    cards.push(game.createCard('jiu'));
                                }
                                player.gain(cards, 'gain2');
                                var chat = ['君不见黄河之水天上来,奔流到海不复回.', '将进酒,杯莫停!'].randomGet();
                                player.say(chat);
                            },
                            ai: {
                                threaten: 1.3,
                            },
                            audioname: ['sp_lvmeng', 'sunce'],
                        },
                        夔泊: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            content() {
                                var div = document.createElement('div');
                                div.style['background-image'] = `url(extension/王朝更替策/image/dufu杜甫dhtx1.jpg)`;
                                div.style['background-size'] = '100% 100%';
                                div.style.height = '304px';
                                div.style.width = '539px';
                                div.style['pointer-events'] = 'none';
                                div.style.position = 'absolute';
                                div.style.top = 'calc(50% - ' + 304 / 2 + 'px)';
                                div.style.left = 'calc(50% - ' + 539 / 2 + 'px)';
                                div.style['z-index'] = 999;
                                ui.window.appendChild(div);
                                game.pause();
                                setTimeout(function () {
                                    ui.window.style.transition = '';
                                    ui.window.removeChild(div);
                                    game.resume();
                                }, 2000);
                                var chat = ['国破山河在,城春草木深.', '白头搔更短,浑欲不胜簪.'].randomGet();
                                player.say(chat);
                                player.addTempSkill('夔泊2', { player: 'phaseBegin' });
                            },
                            ai: {
                                threaten: 1.3,
                            },
                        },
                        夔泊2: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            audio: 'ext:王朝更替策/audio:2',
                            content() {
                                'step 0';
                                var check;
                                if (player.countCards('h') == 0) {
                                    check = false;
                                } else {
                                    check =
                                        game.countPlayer(function (current) {
                                            return player != current && get.attitude(player, current) > 1;
                                        }) >= 2;
                                }
                                if (get.is.versus()) {
                                    event.versus = true;
                                    player.chooseBool(get.prompt('夔泊2'));
                                } else {
                                    player
                                        .chooseTarget(
                                            get.prompt('夔泊2'),
                                            [1, 2],
                                            function (card, player, target) {
                                                return player != target;
                                            },
                                            function (target) {
                                                if (!_status.event.check) return 0;
                                                return get.attitude(_status.event.player, target);
                                            }
                                        )
                                        .set('check', check);
                                }
                                ('step 1');
                                if (result.bool) {
                                    var targets;
                                    if (event.versus) {
                                        targets = game.filterPlayer(function (current) {
                                            return current != player && current.side == player.side;
                                        });
                                    } else {
                                        targets = result.targets;
                                    }
                                    game.asyncDraw(targets);
                                    player.draw();
                                    var chat = ['剑外忽传收蓟北,初闻涕泪满衣裳.', '即从巴峡穿巫峡,便下襄阳向洛阳.'].randomGet();
                                    player.say(chat);
                                }
                            },
                        },
                        道唐: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                var div = document.createElement('div');
                                div.style['background-image'] = `url(extension/王朝更替策/image/dufu杜甫dhtx2.jpg)`;
                                div.style['background-size'] = '100% 100%';
                                div.style.height = '304px';
                                div.style.width = '539px';
                                div.style['pointer-events'] = 'none';
                                div.style.position = 'absolute';
                                div.style.top = 'calc(50% - ' + 304 / 2 + 'px)';
                                div.style.left = 'calc(50% - ' + 539 / 2 + 'px)';
                                div.style['z-index'] = 999;
                                ui.window.appendChild(div);
                                game.pause();
                                setTimeout(function () {
                                    ui.window.style.transition = '';
                                    ui.window.removeChild(div);
                                    game.resume();
                                }, 2000);
                                player.draw(4);
                                player.chooseToUse('道唐:是否使用一张牌？');
                            },
                        },
                        shangshi殇逝: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: { player: ['loseEnd', 'changeHp'] },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h') < player.maxHp - player.hp;
                            },
                            content() {
                                'step 0';
                                player.draw(player.maxHp - player.hp - player.countCards('h'));
                                player
                                    .chooseTarget(get.prompt('shangshi殇逝'), function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].loseHp();
                                }
                                player.gainMaxHp();
                            },
                        },
                        jueqing情绝: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: { source: 'damageEnd' },
                            content() {
                                trigger.player.loseHp(2);
                            },
                        },
                        枭箭: {
                            audio: 'ext:王朝更替策/audio:4',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('he', (c) => get.type(c) == 'equip');
                            },
                            content() {
                                var list = game.filterPlayer(function (current) {
                                    return current.isEnemiesOf(player);
                                });
                                player.useCard({ name: 'wanjian' }, list);
                                player.useCard({ name: 'wanjian' }, list);
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        儒戍: {
                            audio: 'ext:王朝更替策/audio:2',
                            trigger: { global: 'useCardToBegin' },
                            filter(event, player) {
                                return get.type(event.card) == 'trick';
                            },
                            content() {
                                player.gain(game.createCard('jinchan'));
                                player.$draw();
                                trigger.cancel();
                            },
                        },
                    },
                };
                lib.config.all.characters.add('王朝更替策');
                lib.config.characters.add('王朝更替策');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:王朝更替策/image/${i}.jpg`)
                }
                lib.translate['王朝更替策_character_config'] = `王朝更替策`;
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
                };//true转为1,false转为-1
                window.numberq0 = function (num) {
                    if (isNaN(Number(num))) return 0;
                    return Math.abs(Number(num));
                };//始终返回正数(取绝对值)
                window.numberq1 = function (num) {
                    if (isNaN(Number(num))) return 1;
                    return Math.max(Math.abs(Number(num)), 1);
                };//始终返回正数且至少为1(取绝对值)
                window.number0 = function (num) {
                    if (isNaN(Number(num))) return 0;
                    return Math.max(Number(num), 0);
                };//始终返回正数
                window.number1 = function (num) {
                    if (isNaN(Number(num))) return 1;
                    return Math.max(Number(num), 1);
                };//始终返回正数且至少为1
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
                        if (obj.hasOwnProperty(key)) {
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
                    name: '王朝更替策',
                    connect: true,
                    card: {
                        jingukiva: {
                            type: 'equip',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -100,
                            },
                            derivation: 'jingukiva',
                            onEquip() {
                                player.addSkill('kivaswjj');
                            },
                            ai: {
                                order: 9,
                                useful: 5,
                                value: 4,
                                basic: {
                                    order: 1,
                                    useful: 2,
                                    equipValue: 1,
                                    value: 1,
                                },
                                result: {
                                    target(player, target) {
                                        return get.equipResult(player, target, name);
                                    },
                                },
                            },
                            enable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                target.equip(card);
                            },
                            toself: true,
                            fullskin: true,
                        },
                        瓦面金装锏: {
                            type: 'equip',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -3,
                            },
                            derivation: '瓦面金装锏',
                            onEquip() {
                                player.draw();
                            },
                            ai: {
                                order: 9,
                                useful: 5,
                                value: 4,
                                basic: {
                                    order: 1,
                                    useful: 2,
                                    equipValue: 1,
                                    value: 1,
                                },
                                result: {
                                    target(player, target) {
                                        return get.equipResult(player, target, name);
                                    },
                                },
                            },
                            enable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                target.equip(card);
                            },
                            toself: true,
                            fullskin: true,
                            skills: ['秦琼'],
                        },
                        kiva101: {
                            type: 'equip',
                            subtype: 'equip1',
                            skills: ['kiva100'],
                            distance: {
                                attackFrom: -2,
                            },
                            derivation: 'kiva101',
                            onEquip() {
                                player.chooseToDiscard(2);
                                player.draw(Math.min(player.hp, 20));
                            },
                            ai: {
                                order: 9,
                                useful: 5,
                                value: 4,
                                basic: {
                                    order: 1,
                                    useful: 2,
                                    equipValue: 1,
                                    value: 1,
                                },
                                result: {
                                    target(player, target) {
                                        return get.equipResult(player, target, name);
                                    },
                                },
                            },
                            enable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                target.equip(card);
                            },
                            toself: true,
                            fullskin: true,
                        },
                        kiva103: {
                            fullskin: true,
                            enable: true,
                            type: 'trick',
                            filterTarget: true,
                            content() {
                                target.addSkill('kiva106');
                                target.addSkill('kiva108');
                                target.addSkill('kiva102');
                                target.chooseToDiscard(1);
                                target.loseMaxHp();
                            },
                            ai: {
                                order: 7,
                                useful: 4,
                                value: 10,
                                tag: {
                                    draw: 2,
                                },
                                result: {
                                    target(player, target) {
                                        if (target.hasJudge('lebu')) return 0;
                                        return Math.max(1, 2 - target.countCards('h') / 10);
                                    },
                                },
                            },
                            selectTarget: 1,
                        },
                        kiva112: {
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip5',
                            skills: ['kiva111'],
                            ai: {
                                basic: {
                                    equipValue: 7,
                                    order: 1,
                                    useful: 2,
                                    value: 1,
                                },
                                result: {
                                    target(player, target) {
                                        return get.equipResult(player, target, name);
                                    },
                                },
                            },
                            enable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                target.equip(card);
                            },
                            toself: true,
                        },
                        流放之诏: {
                            fullskin: true,
                            enable: true,
                            type: 'trick',
                            filterTarget: true,
                            content() {
                                target.turnOver();
                            },
                            selectTarget: 1,
                            image: 'ext:王朝更替策/image/流放之诏.png',
                        },
                        kiva114: {
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip5',
                            skills: ['kiva117'],
                            ai: {
                                basic: {
                                    equipValue: 7,
                                    order: 1,
                                    useful: 2,
                                    value: 1,
                                },
                                result: {
                                    target(player, target) {
                                        return get.equipResult(player, target, name);
                                    },
                                },
                            },
                            enable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                target.equip(card);
                            },
                            toself: true,
                        },
                        kiva115: {
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -1,
                            },
                            ai: {
                                basic: {
                                    equipValue: 2,
                                    order: 1,
                                    useful: 2,
                                    value: 1,
                                },
                                result: {
                                    target(player, target) {
                                        return get.equipResult(player, target, name);
                                    },
                                },
                            },
                            skills: ['qinggang_skill', 'kiva116'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                target.equip(card);
                            },
                            toself: true,
                        },
                        kivaleiyi: {
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip2',
                            skills: ['kiva117', 'kivaleishen'],
                            ai: {
                                basic: {
                                    equipValue: 7,
                                    order: 1,
                                    useful: 2,
                                    value: 1,
                                },
                                result: {
                                    target(player, target) {
                                        return get.equipResult(player, target, name);
                                    },
                                },
                            },
                            enable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                target.equip(card);
                            },
                            toself: true,
                        },
                        紫晶石: {
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip5',
                            skills: ['紫晶'],
                            ai: {
                                basic: {
                                    equipValue: 7,
                                    order: 1,
                                    useful: 2,
                                    value: 1,
                                },
                                result: {
                                    target(player, target) {
                                        return get.equipResult(player, target, name);
                                    },
                                },
                            },
                            enable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                target.equip(card);
                            },
                            toself: true,
                        },
                        kivaRyuki2: {
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip4',
                            lianheng: true,
                            skills: ['kivaRyuki'],
                            distance: {
                                globalFrom: -1,
                            },
                            enable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                target.equip(card);
                            },
                            toself: true,
                            ai: {
                                basic: {
                                    order: 1,
                                    useful: 2,
                                    equipValue: 4,
                                    value: 1,
                                },
                                result: {
                                    target(player, target) {
                                        return get.equipResult(player, target, name);
                                    },
                                },
                            },
                        },
                        kivaBlade2: {
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -1,
                            },
                            ai: {
                                basic: {
                                    equipValue: 2,
                                    order: 1,
                                    useful: 2,
                                    value: 1,
                                },
                                result: {
                                    target(player, target) {
                                        return get.equipResult(player, target, name);
                                    },
                                },
                            },
                            skills: ['kivaBlade'],
                            enable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                target.equip(card);
                            },
                            toself: true,
                        },
                        古青铜纹: {
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip5',
                            onLose() {
                                player.init('menshishi合');
                            },
                            skills: ['门士'],
                            ai: {
                                order: 9.5,
                                equipValue(card, player) {
                                    if (player.countCards('h', '门士')) return 6;
                                    return 1;
                                },
                                basic: {
                                    equipValue: 5,
                                    order: 1,
                                    useful: 2,
                                    value: 1,
                                },
                                result: {
                                    target(player, target) {
                                        return get.equipResult(player, target, name);
                                    },
                                },
                            },
                            enable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                target.equip(card);
                            },
                            toself: true,
                        },
                        jianzhu剑助: {
                            type: 'trick',
                            enable: true,
                            fullskin: true,
                            filterTarget: true,
                            content() {
                                var list = [];
                                for (var i = 0; i < 1; i++) {
                                    list.push(game.createCard('kivaBlade2'));
                                }
                                target.gain(list, 'gain2');
                                var list = [];
                                for (var i = 0; i < 1; i++) {
                                    list.push(game.createCard('kivaRyuki2'));
                                }
                                target.gain(list, 'gain2');
                            },
                            ai: {
                                order: 4.5,
                                value: [5, 1],
                                tag: {
                                    gain: 1,
                                },
                                result: {
                                    target(player, target) {
                                        if (target == player) {
                                            if (!target.hasShan()) return 2;
                                            var num = target.needsToDiscard(2);
                                            if (num == 0) return 1.5;
                                            if (num == 1) return 1;
                                            return 0.5;
                                        } else {
                                            switch (target.countCards('h')) {
                                                case 0:
                                                    return 2;
                                                case 1:
                                                    return 1.5;
                                                case 2:
                                                    return 1;
                                                default:
                                                    return 0.5;
                                            }
                                        }
                                    },
                                },
                            },
                            selectTarget: 1,
                        },
                        kivapoison_sha: {
                            fullskin: true,
                            type: 'trick',
                            enable: true,
                            selectTarget: -1,
                            reverseOrder: true,
                            cardcolor: 'black',
                            cardnature: 'poison',
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                'step 0';
                                var next = target.chooseToRespond({ name: 'shan' });
                                next.ai = function (card) {
                                    if (get.damageEffect(target, player, target, 'fire') >= 0) return 0;
                                    if (player.hasSkillTag('notricksource')) return 0;
                                    if (target.hasSkillTag('notrick')) return 0;
                                    if (target.hasSkillTag('noShan')) {
                                        return -1;
                                    }
                                    return 11 - get.value(card);
                                };
                                next.autochoose = lib.filter.autoRespondShan;
                                ('step 1');
                                if (result.bool == false) {
                                    target.damage('poison');
                                }
                            },
                            ai: {
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, target) > 0 && target.countCards('h', 'shan')) {
                                        if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
                                    }
                                },
                                basic: {
                                    order: 9,
                                    useful: 1,
                                    value: 5,
                                },
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('nopoison')) return 0;
                                        if (player.hasUnknown(2)) return 0;
                                        var nh = target.countCards('h');
                                        if (lib.config.mode == 'identity') {
                                            if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
                                        }
                                        if (nh == 0) return -2;
                                        if (nh == 1) return -1.7;
                                        return -1.5;
                                    },
                                },
                                tag: {
                                    respond: 1,
                                    respondShan: 1,
                                    damage: 1,
                                    natureDamage: 1,
                                    fireDamage: 1,
                                    multitarget: 1,
                                    multineg: 1,
                                },
                            },
                        },
                        云岳斧: {
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip5',
                            onLose() {
                                player.draw();
                            },
                            skills: ['云岳斧', '云岳斧3'],
                            ai: {
                                order: 9.5,
                                equipValue(card, player) {
                                    if (player.countCards('h', '云岳斧')) return 6;
                                    return 1;
                                },
                                basic: {
                                    equipValue: 5,
                                    order: 1,
                                    useful: 2,
                                    value: 1,
                                },
                                result: {
                                    target(player, target) {
                                        return get.equipResult(player, target, name);
                                    },
                                },
                            },
                            enable: true,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            allowMultiple: false,
                            content() {
                                target.equip(card);
                            },
                            toself: true,
                        },
                        jingyesi: {
                            audio: true,
                            fullskin: true,
                            type: 'delay',
                            filterTarget(card, player, target) {
                                return lib.filter.judge(card, player, target) && player != target;
                            },
                            judge(card) {
                                if (card.suit == 'diamond') return 0;
                                return -3;
                            },
                            effect() {
                                if (result.bool == false) {
                                    player.skip('phaseDiscard');
                                    player.draw(2);
                                }
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                    useful: 1,
                                    value: 8,
                                },
                                result: {
                                    target(player, target) {
                                        var num = target.hp - target.countCards('h') - 2;
                                        if (num > -1) return -0.01;
                                        if (target.hp < 3) num--;
                                        if (target.isTurnedOver()) num /= 2;
                                        var dist = get.distance(player, target, 'absolute');
                                        if (dist < 1) dist = 1;
                                        return num / Math.sqrt(dist);
                                    },
                                },
                                tag: {
                                    skip: 'phaseDiscard',
                                },
                            },
                            selectTarget: 1,
                            enable: true,
                            content() {
                                target.addJudge(card, cards);
                            },
                            allowMultiple: false,
                        },
                    },
                    translate: {
                        jingukiva: '金箍棒',
                        jingukiva_info: '当你装备此装备时,获得技能金睛',
                        瓦面金装锏: '瓦面金装锏',
                        瓦面金装锏_info: '当你装备此装备时,获得技能【秦琼】.',
                        kiva101: '奋竜忍刃',
                        kiva101_info: '当你装备此装备时,弃两张牌并摸X牌;主动技,你可以多杀一名你范围内的角色;锁定技,你的进攻距离加一.',
                        kiva103: '无悔证明',
                        kiva103_info: '出牌阶段,对一名角色使用.获得技能不悔,重义,铜雀并丢一张牌失去1体力上限',
                        kiva112: '景阳冈酒',
                        kiva112_info: '锁定技,你的酒没有次数限制;你可以将你的任意一张♠️️或♣️️手牌当【酒】使用.',
                        流放之诏: '流放之诏',
                        流放之诏_info: '出牌阶段,对一名角色使用,使其翻面.',
                        kiva114: '妖刀星碎',
                        kiva114_info: '锁定技,你造成的伤害均视为具有雷属性',
                        kiva115: '击龙剑',
                        kiva115_info: '每当你使用【杀】指定一名目标角色后,你无视其防具;锁定技,你可以用1张牌获得一点护甲,每回合限一次',
                        kivaleiyi: '雷伊的精元',
                        kivaleiyi_info: '当你使用杀或被杀指定,你可以判定,若结果为:黑色,你弃置一名角色区域里的一张牌;红色,你选择一名角色,其摸一张惊雷闪,若其是<先辅>选择的角色,改为其摸三张毒液循环;锁定技,你造成的伤害均视为具有雷属性.',
                        紫晶石: '紫晶石',
                        紫晶石_info: '结束阶段,你可回复2点体力并翻面',
                        kivaRyuki2: '龙骑的龙',
                        kivaRyuki2_info: '当你对距离1以内的一名角色造成1点伤害后,你可以回复1点体力或摸一张牌;你的进攻距离+1',
                        kivaBlade2: '剑的剑',
                        kivaBlade2_info: '锁定技:每当你的装备区有武器时,你使用【杀】指定一个目标后,该角色需要依次使用两张【闪】才能抵消此【杀】',
                        古青铜纹: '古青铜纹',
                        古青铜纹_info: '你可以变成惊雷引.当你失去该装备时,你变成门矢士.',
                        jianzhu剑助: '剑助',
                        jianzhu剑助_info: '出牌阶段对一名角色使用,目标获得龙骑卡和剑卡',
                        kivapoison_sha: '毒液循环',
                        kivapoison_sha_info: '出牌阶段,对所有其他角色使用.每名目标角色需打出一张【闪】,否则受到1点剧毒伤害.',
                        云岳斧: '云岳斧',
                        云岳斧_info: '准备阶段,你可以视为使用一张无视距离的杀;受到伤害后,你可以增加攻击力直到造成伤害.',
                        jingyesi: '静夜思',
                        jingyesi_info: '出牌阶段,对一名其他角色使用.若判定结果不为♦️️,跳过其弃牌阶段并摸两张牌.',
                    },
                };
                for (const i in QQQ.card) {
                    const info = QQQ.card[i];
                    if (!info.image) {
                        if (info.fullskin) {
                            info.image = `ext:王朝更替策/image/${i}.png`;
                        }
                        else {
                            info.image = `ext:王朝更替策/image/${i}.jpg`;
                        }
                    }
                    lib.inpile.add(i);
                    if (info.mode && !info.mode.includes(lib.config.mode)) continue;
                    lib.card.list.push([lib.suits.randomGet(), lib.number.randomGet(), i]);
                }
                lib.config.all.cards.add('王朝更替策');
                lib.config.cards.add('王朝更替策');
                lib.translate.王朝更替策_card_config = '王朝更替策';
                return QQQ;
            });
        },
        package: {
            intro: '<br><br><span style="color: gold">潜水的火修复版<br>『无名杀扩展大全群』:771901025</span><br><br>',
            author: ':+࿈࿆࿈࿆+:',
            version: '1.0',
        },
    };
});
