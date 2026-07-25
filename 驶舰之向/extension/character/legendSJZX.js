//正则完毕
import { mrfzfuc } from '../SJZXfuc.js';
import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
game.import('character', function () {
  var legendSJZX = {
    name: 'legendSJZX',
    connect: true,
    characterSort: {
      //TODO 有缘再分
    },
    characterTitle: {
      luogesimrfz: '<font color=#00868B>女妖之主</font>',
      weishidaiermrfz: '<font color=#00868B>卡兹戴尔的黎明</font>',
      mowangmrfz: '<font color=#00868B>文明的存续</font>',
      wuerbianmrfz: '<font color=#00868B>阴影中的求路人</font>',
      spyoulingshamrfz: '<font color=#00868B>未尽之美</font>',
      nifumrfz: '<font color=#00868B>耀阳映友</font>',
    },
    dynamicTranslate: {
      //TODO 有缘在搬
      tongmaimrfz(player) {
        let str = `你可以令一名深海猎人的角色回复一点体力或复原武将牌`,
          storage = player.storage.tongmaimrfz;
        if (storage.includes(0)) str = str.replace('回复一点体力', '<font color=#696969>回复一点体力</font>');
        if (storage.includes(1)) str = str.replace('复原武将牌', '<font color=#696969>复原武将牌</font>');
        return `宗族技,每轮每项限一次,当你于回合外造成伤害后,${str}.`;
      },
    },
    character: {
      ailinimrfz: ['female', 'yimrfz', 3, ['zhidengmrfz', 'shenpanmrfz', 'liechaomrfz'], []],
      hongxuemrfz: ['female', 'luomrfz', 4, ['ruibimrfz', 'sujimrfz'], []],
      xiaoyangmrfz: ['female', 'laimrfz', 3, ['qingyanmrfz', 'luanhuomrfz'], []],
      yinhuimrfz: ['male', 'xiemrfz', 4, ['xuebianmrfz', 'tonghemrfz'], []],
      lingzhimrfz: ['male', 'xiemrfz', 4, ['siyongmrfz'], []],
      liumingmrfz: ['male', 'yimrfz', 4, ['fanyuanmrfz', 'yingjimrfz', 'new_weiguangmrfz'], []],
      chizuimrfz: ['female', 'xumrfz', 4, ['newzhidianmrfz', 'newpijimrfz'], []],
      niyanmrfz: ['female', 'luomrfz', 4, ['sutumrfz', 'wotumrfz'], []],
      chengshanmrfz: ['female', 'luomrfz', 3, ['dianshanmrfz', 'shidemrfz'], []],
      wmrfz: ['female', 'bamrfz', 3, ['fukemrfz', 'zhumengmrfz3'], []],
      spsikadimrfz: ['female', 'haimrfz', 4, ['qianximrfz'], []],
      sikadimrfz: ['female', 'liemrfz', 4, ['jingliemrfz', 'shulangmrfz', 'tongmaimrfz'], ['clan:深海猎人']],
      spdegoumrfz: ['female', 'qimrfz', 4, ['laoyingmrfz', 'yushimrfz'], []],
      maennamrfz: ['male', 'kamrfz', 4, ['lianmangmrfz', 'zhanmangmrfz', 'xingyimrfz'], []],
      splinguangmrfz: ['female', 'kamrfz', 4, ['zhuguangmrfz', 'kuanmrfz', 'shuoguangmrfz'], []],
      kaierximrfz: ['female', 'luomrfz', 3, ['yuanlvemrfz', 'chonggoumrfz', 'yuanshimrfz', 'm3mrfz'], ['zhu']],
      shanmrfz: ['male', 'gemrfz', 4, ['zhefumrfz', 'yubianmrfz'], []],
      geleidiyamrfz: ['female', 'liemrfz', '3/4', ['quliemrfz', 'newxunxiangmrfz', 'xueshuomrfz', 'tongmaimrfz'], ['clan:深海猎人']],
      chenmrfz: ['female', 'longmrfz', 4, ['danweimrfz', 'hechimrfz', 'jueyingmrfz', 'newjingsimrfz'], ['zhu']],
      xingxiongmrfz: ['female', 'longmrfz', '4/5', ['xinboremrfz', 'xinyizhongmrfz'], []],
      kanielianmrfz: ['female', 'laimrfz', 3, ['shazhenmrfz', 'shacanmrfz', 'shahuanmrfz'], []],
      kuiyingmrfz: ['male', 'weimrfz', 3, ['xuyingmrfz', 'xuegemrfz', 'huanxiangmrfz'], []],
      mositimamrfz: ['female', 'lamrfz', 3, ['shishimrfz', 'huanshimrfz'], []],
      keebomrfz: ['female', 'luomrfz', 3, ['jiemimrfz', 'shihuangmrfz', 'baokemrfz'], []],
      feiyameitamrfz: ['female', 'lamrfz', 4, ['shunanmrfz'], []],
      jicimrfz: ['male', 'yimrfz', 4, ['jihumrfz', 're_jianshumrfz'], []],
      yeyingmrfz: ['female', 'shimrfz', '3/3/1', ['qiulongmrfz', 'bihumrfz', 'shengyumrfz'], []],
      helagemrfz: ['male', 'wumrfz', 4, ['yingkuimrfz', 'cangfengmrfz', 'yuexiangmrfz'], []],
      wendimrfz: ['female', 'luomrfz', 4, ['jiepimrfz', 'shuipaomrfz', 'danpaomrfz'], []],
      senranmrfz: ['female', 'samrfz', '3/5', ['juezhanmrfz', 'shanxiemrfz', 'tieyimrfz'], []],
      ashmrfz: ['female', 'orthermrfz', '3/3/1', ['baigeimrfz', 'wusumrfz', 'wutoumrfz'], []],
      kamimrfz: ['male', 'samrfz', 3, ['dianlianmrfz', 'shazumrfz', 'leibaomrfz'], []],
      nianmrfz: ['female', 'yanmrfz', 4, ['zhujimrfz', 'tongyinmrfz', 'tieyumrfz'], []],
      lingmrfz: ['female', 'yanmrfz', 3, ['shixingmrfz', 'zuimengmrfz', 'haojiumrfz'], []],
      fengdimrfz: ['female', 'weimrfz', 4, ['juntongmrfz', 'pochengmrfz'], []],
      qinliumrfz: ['female', 'weimrfz', 3, ['junqimrfz', 'butuimrfz', 'zhiqimrfz'], []],
      laolimrfz: ['male', 'limrfz', 3, ['linhuamrfz', 'mingshimrfz', 'jixiongmrfz'], []],
      amrfz: ['male', 'limrfz', '3/4/1', ['guaijiemrfz', 'guaiyaomrfz', 'qizhenmrfz'], []],
      heimrfz: ['female', 'ximrfz', 4, ['heishimrfz', 'ruitongmrfz', 'junumrfz'], []],
      chongyuemrfz: ['male', 'yanmrfz', 3, ['shubianmrfz', 'wubenmrfz', 'wowumrfz'], []],
      anjielinamrfz: ['female', 'xumrfz', 3, ['xinshimrfz', 'fanzhongmrfz'], []],
      haojiaomrfz: ['female', 'weimrfz', 4, ['xuezhanmrfz', 'dunpaomrfz', 'biaohaomrfz'], []],
      xigymrfz: ['female', 'yanmrfz', 3, ['huijuanmrfz', 'dianjingmrfz', 'cangjuanmrfz'], []],
      yanweimrfz: ['female', 'hongmrfz', 4, ['fengjianmrfz', 'hongsongmrfz'], []],
      nengtianshimrfz: ['female', 'qimrfz', '3/3/1', ['lianshemrfz', 'guozaimrfz'], []],
      yuanyamrfz: ['female', 'hongmrfz', 4, ['bingximrfz', 'ningshenmrfz', 'yuanmengmrfz'], []],
      midiexiangmrfz: ['female', 'luomrfz', 3, ['zhangyimrfz', 'chongjimrfz', 'nianshoumrfz'], []],
      spzzxpmrfz: ['female', 'luomrfz', 3, ['yuyunmrfz', 'shuiqiangmrfz', 'jianfengmrfz'], []],
      shuiyuemrfz: ['male', 'dongmrfz', 3, ['liqunmrfz', 'chuangshangmrfz', 'jinghuamrfz'], []],
      spyoulingshamrfz: ['female', 'liemrfz', 3, ['xinyongwomrfz', 'douzhengmrfz', 'shensuimrfz', 'tongmaimrfz'], ['clan:深海猎人']],
      qiubaimrfz: ['female', 'yanmrfz', 4, ['ruximrfz', 'wenxuemrfz'], []],
      baitiemrfz: ['male', 'weimrfz', 4, ['jigongmrfz', 'jiefeimrfz'], []],
      weinamrfz: ['female', 'weimrfz', 4, ['fensuimrfz', 'yuechuimrfz'], []],
      siyemrfz: ['male', 'xumrfz', 1, ['qunxingmrfz', 'langqunmrfz'], []],
      spjiaweiermrfz: ['female', 'luomrfz', 4, ['yixuemrfz', 'juximrfz', 'conghunmrfz'], []],
      semrfz: ['female', 'luomrfz', 4, ['mojianmrfz', 'huanghunmrfz', 'yujinmrfz'], []],
      linmrfz: ['female', 'yanmrfz', 3, ['zhenzamrfz', 'liuliemrfz', 'yinbimrfz'], []],
      duoluoximrfz: ['female', 'lymrfz', 3, ['newgongzhenmrfz', 'newmengxiangmrfz'], []],
      kongxianmrfz: ['female', 'lamrfz', '3/3/1', ['sanyimrfz', 'baofengmrfz', 'tiexianmrfz'], []],
      spyedaomrfz: ['female', 'orthermrfz', '3/4', ['luanwumrfz'], []],
      yineisimrfz: ['female', 'luomrfz', 3, ['yingzhimrfz', 'yingshaomrfz'], []],
      miumiumrfz: ['female', 'lymrfz', 3, ['yuanliumrfz', 'shuilingmrfz', 'xinjingshuimrfz'], []],
      heijianmrfz: ['male', 'laimrfz', 3, ['newhuangxiangmrfz', 'newjiyinmrfz'], []],
      yifulitemrfz: ['female', 'lymrfz', 3, ['yanmomrfz', 'yanbaomrfz', 'huishenmrfz'], []],
      sphemomrfz: ['female', 'lymrfz', 3, ['renbenmrfz', 'dizhumrfz'], []],
      saileiyamrfz: ['female', 'lymrfz', '3/4', ['panshimrfz', 'newgaihuamrfz'], []],
      spweicaomrfz: ['female', 'shenmrfz', 3, ['zhuohenmrfz', 'yingyaomrfz', 'minghuomrfz'], []],
      huangmrfz: ['female', 'luomrfz', '3/5', ['yanxunmrfz', 'chuchanmrfz', 'feixuemrfz'], []],
      huoerhaiyamrfz: ['female', 'gemrfz', 3, ['kuangyumrfz', 'chuangzhongmrfz'], []],
      linglanmrfz: ['female', 'xumrfz', 3, ['hualaomrfz', 'huhuomrfz', 'wuyuemrfz'], []],
      shanlingmrfz: ['female', 'shimrfz', 4, ['yubimrfz', 'jiushumrfz', 'lichangmrfz'], []],
      maizhelunmrfz: ['female', 'lymrfz', 3, ['kanchamrfz', 'longtengmrfz'], []],
      cuoemrfz: ['female', 'dongmrfz', 4, ['quanshanmrfz', 'chuemrfz'], []],
      palasimrfz: ['female', 'mimrfz', 4, ['yingzhumrfz', 'yingdanmrfz', 'yingfenmrfz'], []],
      xiaguangmrfz: ['female', 'kamrfz', 4, ['rencimrfz', 'huiguangmrfz', 'jiandunmrfz'], []],
      zaolumrfz: ['female', 'wumrfz', 4, ['zhongxiemrfz', 'rusuimrfz'], []],
      spshihuaiyamrfz: ['female', 'longmrfz', 3, ['mianzaimrfz', 'zhijinmrfz'], []],
      spsongzangrenmrfz: ['male', 'lamrfz', 3, ['chongdanmrfz', 'tianxuanmrfz', 'shengcaimrfz'], []],
      spjiexikamrfz: ['female', 'gemrfz', 4, ['yijiemrfz', 'fuhuangmrfz'], []],
      tifengmrfz: ['female', 'samimrfz', 4, ['ruiyamrfz', 'shouliemrfz'], []],
      weiweiannamrfz: ['female', 'laimrfz', 4, ['zhanjumrfz', 'zhuhuomrfz', 'yunjiaomrfz'], []],
      spxiaoyanmrfz: ['female', 'laimrfz', 3, ['lvmengmrfz', 'rechenmrfz'], []],
      suxinmrfz: ['female', 'lamrfz', 3, ['qinmingmrfz', 'kongwomrfz'], []],
      hedeleimrfz: ['male', 'luomrfz', '4/6', ['zhengrongmrfz', 'siyanmrfz'], []],
      zhisongmrfz: ['male', 'laimrfz', 4, ['kuxiumrfz', 'lirenmrfz'], []],
      jianmrfz: ['female', 'xiemrfz', 4, ['weiyamrfz', 'zhiwumrfz'], []],
      laiyimrfz: ['female', 'leimrfz', 3, ['shaobanmrfz', 'tankuangmrfz'], []],
      shumrfz: ['female', 'yanmrfz', 4, ['kenyemrfz', 'heyingmrfz', 'rancuimrfz'], []],
      zuolemrfz: ['male', 'yanmrfz', '4/5', ['qikumrfz', 'bingzhumrfz'], []],
      elamrfz: ['female', 'orthermrfz', 3, ['leimingmrfz', 'zuzhimrfz'], []],
      asikalunmrfz: ['female', 'luomrfz', 3, ['dunyingmrfz', 'niximrfz'], []],
      luogesimrfz: ['male', 'luomrfz', 3, ['baidumrfz', 'yuhuimrfz'], []],
      weishidaiermrfz: ['female', 'bamrfz', 3, ['yuximrfz', 'haolimrfz', 'shezumrfz'], []],
      mowangmrfz: ['female', 'luomrfz', 3, ['duanzhangmrfz', 'chenaimrfz', 'canxiangmrfz'], []],
      wuerbianmrfz: ['male', 'a_groupmrfz', 4, ['guqianmrfz', 'piweimrfz', 'tongmaimrfz'], ['clan:深海猎人']],
      nifumrfz: ['female', 'luomrfz', 3, ['xunxinmrfz', 'chixinmrfz', 'kuixinmrfz'], []],
    },
    characterIntro: {
      shumrfz: '黍,炎国农业天师,天师府授业天师.曾于炎国北部农业基地大荒城从事农业研究多年且已有丰富的科研成果.现因访问亲属,以访客身份暂驻罗德岛.',
      elamrfz: '艾拉是彩虹小队成员之一,独立、叛逆,适应能力强,同时具备相当的领导能力.<br>艾拉习惯用被她称为<雷鸣地雷>的装置在战斗中获取优势.这种爆炸物通过巨响和震荡干扰敌人行动,乃至使其失能,是一种极为实用的非致命性武器.',
      asikalunmrfz: '阿斯卡纶,巴别塔时期担任情报官,后作为S.W.E.E.P.负责人,为罗德岛负责反渗透工作.',
      luogesimrfz: '逻各斯,罗德岛精英术师干员,咒术大师,女妖河谷年轻的<女主人>.曾作为巴别塔核心成员参与卡兹戴尔内战,并于罗德岛建立之初成为首批精英干员之一.逻各斯着手制定了干员源石技艺适应性测试的标准及流程.这套评估系统展现了巨大的价值,令罗德岛得以准确地评估每一位干员的施术潜能.<br>现根据罗德岛决议,逻各斯继续担任外勤小队指挥,参与术师干员的测试与选拔,负责敏感情报的破译及加密工作.',
      weishidaiermrfz: '<span style="text-decoration:line-through">丁真戴尔</span>维什戴尔,萨卡兹雇佣兵领袖W,现正式更名为维什戴尔.于伦蒂尼姆战争期间,与罗德岛伦蒂尼姆特别行动队紧密合作,数度阻遏军事委员会的行动.<br>【权限记录】<br>我们紧急更新了与维什戴尔的战略合作条款,具体条目您可以考虑是否亲自一一核对.您一定已经很清楚,我们未来与她的合作只会越来越紧密.这绝不仅仅关乎她自己.',
      mowangmrfz: '特蕾西娅,卡兹戴尔移动城市的建立者,卡兹戴尔军事委员会创始人之一,巴别塔组织的创立者,曾是卡兹戴尔的最高领袖.执政期间,她致力于推进医疗、教育、城市基础建设等事业,多次带领萨卡兹击退了外敌的入侵,并且在外交工作中颇有建树.后于卡兹戴尔与维多利亚的战争中身亡.<br>该人事档案留存在罗德岛人事部封存的资料库中.',
      wuerbianmrfz: '乌尔比安,阿戈尔人,阿戈尔前技术院执政官,科研项目深海猎人计划负责人,阿戈尔军事团体<深海猎人>作战指挥官之一.登陆时间地点俱不明.在罗德岛处理海洋相关事务时提供支持.<br>经本人与相关人员确认,乌尔比安的所有档案移入高权限资料库.',
      nifumrfz: '妮芙,卡兹戴尔市民,通过罗德岛驻卡兹戴尔办事处加入罗德岛外勤部门.<br>擅长使用心灵相关的源石技艺,配合其笞心魔的天赋,可在诸多领域发挥特长.',
    },
    skill: {
      //----成就获取----//
      //崖心 耐摔王 一局内至少发动过3次【崖崩】
      _sjzxAch_naishuaiwangmrfz: {
        Ach_mrfz: true,
        trigger: {
          player: 'yabengmrfzAfter',
        },
        filter(event, player) {
          if (lib.config.isAchMode == false) return false;
          if (game.me.name != 'yaxinmrfz' || lib.config.mode != 'identity' || lib.config.AchList_mrfz.naishuaiwangmrfz == true) return false;
          return player.countMark('_sjzxAch_naishuaiwangmrfz') < 3;
        },
        content() {
          'step 0';
          player.addMark('_sjzxAch_naishuaiwangmrfz', 1, false);
          ('step 1');
          if (player.countMark('_sjzxAch_naishuaiwangmrfz') >= 3) mrfzfuc.ShowGetAch('naishuaiwangmrfz');
        },
      },
      //麦哲伦 生生不息 一局内发动过至少3次【勘查】且一回合内至少造成5点伤害
      _sjzxAch_shengshengbuximrfz: {
        Ach_mrfz: true,
        trigger: {
          player: 'phaseEnd',
        },
        filter(event, player) {
          if (lib.config.isAchMode == false) return false;
          if (game.me.name != 'maizhelunmrfz' || lib.config.mode != 'identity' || lib.config.AchList_mrfz.shengshengbuximrfz == true) return false;
          return player.countMark('kanchamrfz') == 3 && player.getStat().damage >= 5;
        },
        content() {
          mrfzfuc.ShowGetAch('shengshengbuximrfz');
        },
      },
      //银灰 难猜的人 一局游戏因雪变造成至少两次伤害
      _sjzxAch_nancaiderenmrfz: {
        Ach_mrfz: true,
        trigger: {
          player: 'xuebianmrfzAfter',
        },
        filter(event, player) {
          if (lib.config.isAchMode == false) return false;
          if (game.me.name != 'yinhuimrfz' || lib.config.mode != 'identity' || lib.config.AchList_mrfz.nancaiderenmrfz == true) return false;
          return player.countMark('xuebianmrfz') >= 2;
        },
        content() {
          mrfzfuc.ShowGetAch('nancaiderenmrfz');
        },
      },
      //艾丽妮 灯火微明 一局游戏发动过至少3次执灯且每次均有至少两名其他角色因此摸牌
      _sjzxAch_denghuoweimingmrfz: {
        Ach_mrfz: true,
        trigger: {
          player: 'zhidengmrfzAfter',
        },
        filter(event, player) {
          if (lib.config.isAchMode == false) return false;
          if (game.me.name != 'ailinimrfz' || lib.config.mode != 'identity' || lib.config.AchList_mrfz.denghuoweimingmrfz == true) return false;
          return player.storage._sjzxAch_denghuoweimingmrfz >= 3;
        },
        content() {
          mrfzfuc.ShowGetAch('denghuoweimingmrfz');
        },
      },
      //克丽斯腾 总辖之愿 作为主公开局,在死亡的情况下获胜
      _sjzxAch_zongxiazhiyuanmrfz: {
        Ach_mrfz: true,
        trigger: {
          player: 'phaseBegin',
        },
        filter(event, player) {
          if (lib.config.isAchMode == false) return false;
          if (game.me.name != 'kelisitengmrfz' || lib.config.mode != 'identity' || lib.config.AchList_mrfz.zongxiazhiyuanmrfz == true) return false;
          return game.me.identity == 'zhu' && mrfzfuc.AchData_tmp._sjzxAch_zongxiazhiyuanmrfz != true;
        },
        content() {
          mrfzfuc.AchData_tmp._sjzxAch_zongxiazhiyuanmrfz = true;
        },
      },
      //艾雅法拉 火山 一回合内至少造成5点伤害
      _sjzxAch_huoshanmrfz: {
        Ach_mrfz: true,
        trigger: {
          player: 'phaseEnd',
        },
        filter(event, player) {
          if (lib.config.isAchMode == false) return false;
          if (game.me.name != 'xiaoyangmrfz' || lib.config.mode != 'identity' || lib.config.AchList_mrfz.huoshanmrfz == true) return false;
          return player.getStat().damage >= 6;
        },
        content() {
          mrfzfuc.ShowGetAch('huoshanmrfz');
        },
      },
      //艾丽妮
      zhidengmrfz: {
        trigger: {
          player: 'phaseZhunbeiBegin',
        },
        audio: 2,
        content() {
          'step 0';
          var num = player.hp;
          player.chooseTarget(get.prompt2('zhidengmrfz'), [0, num], function (card, player, target) {
            return target.hp <= player.hp;
          });
          ('step 1');
          if (result.bool) {
            var targets;
            if (event.versus) {
              targets = game.filterPlayer(function (current) {
                return current != player && current.side == player.side;
              });
            } else {
              targets = result.targets;
              player.draw();
            }
            game.asyncDraw(targets);
            if (!player.storage._sjzxAch_denghuoweimingmrfz) player.storage._sjzxAch_denghuoweimingmrfz = 0;
            if (targets.length >= 2) player.storage._sjzxAch_denghuoweimingmrfz++;
          }
        },
      },
      shenpanmrfz: {
        audio: 2,
        enable: 'phaseUse',
        usable: 1,
        filterTarget(card, player, target) {
          return player.canCompare(target);
        },
        filter(event, player) {
          return player.countCards('h') > 0;
        },
        content() {
          'step 0';
          player.chooseToCompare(target);
          ('step 1');
          if (result.bool) {
            target.addTempSkill('shenpanmrfz2');
            player.addTempSkill('shenpanmrfz3');
            player.storage.shenpanmrfz3 = target;
          } else {
            event.finish();
          }
        },
        ai: {
          order: 10,
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
      shenpanmrfz2: {
        charlotte: true,
        mark: true,
        intro: {
          content: '伊比利亚审判庭裁决你为异端',
        },
      },
      shenpanmrfz3: {
        mod: {
          globalFrom(from, to) {
            if (to == from.storage.shenpanmrfz3) {
              return -Infinity;
            }
          },
        },
        trigger: {
          player: 'useCardToPlayered',
        },
        forced: true,
        charlotte: true,
        filter(event, player) {
          return event.target.hasSkill('shenpanmrfz2') && event.target.countCards('he') > 0;
        },
        check(event, player) {
          return get.attitude(player, event.player) < 0;
        },
        content() {
          'step 0';
          trigger.target.chooseToDiscard('he', true, 1);
          ('step 1');
          if (result.cards.length == 1) {
            event._result = {
              bool: true,
              links: result.cards.slice(0),
            };
          }
          ('step 2');
          if (result.links?.length) player.gain(result.links, 'gain2');
        },
      },
      liechaomrfz: {
        audio: 2,
        trigger: {
          source: 'damageBegin1',
        },
        filter(event, player) {
          if (event.parent.name == '_lianhuan' || event.parent.name == '_lianhuan2') return false;
          if (event.card) {
            if (event.player.countCards('he') == 0) return true;
          }
          return false;
        },
        content() {
          trigger.num++;
        },
        ai: {
          effect: {
            player(card, player, target, current) {
              if (
                card.name == 'sha' &&
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
      },
      //鸿雪
      ruibimrfz: {
        audio: 3,
        enable: 'phaseUse',
        derivation: ['dazijimrfzskill'],
        usable: 1,
        filter(event, player) {
          return (
            player.countCards('he') > 0 &&
            !player.isDisabled(1) &&
            !player.hasCard(function (card) {
              return card.name == 'dazijimrfz';
            }, 'e')
          );
        },
        filterCard: true,
        check(card) {
          return 6 - get.value(card);
        },
        content() {
          var card = game.createCard('dazijimrfz', 'heart', 2);
          player.$gain2(card);
          player.equip(card);
        },
        group: 'ruibimrfz2',
        ai: {
          order: 12,
          result: {
            player: 1,
          },
        },
      },
      ruibimrfz2: {
        trigger: {
          global: 'phaseBefore',
          player: 'enterGame',
        },
        forced: true,
        filter(event, player) {
          return !player.isDisabled(1) && (event.name != 'phase' || game.phaseNumber == 0);
        },
        content() {
          var card = game.createCard('dazijimrfz', 'heart', 2);
          player.$gain2(card);
          player.equip(card);
          player.removeSkill('ruibimrfz2');
        },
      },
      sujimrfz: {
        audio: 2,
        trigger: {
          source: 'damageSource',
        },
        forced: true,
        filter(event, player) {
          if (event.player == player) return false;
          if (event.card.name != 'sha' || !player.isPhaseUsing()) return false;
          return event.player.isAlive();
        },
        content() {
          trigger.player.addSkill('sujimrfz2');
        },
        group: ['sujimrfz_damage'],
      },
      sujimrfz2: {
        charlotte: true,
        mark: true,
        intro: {
          content: '鸿雪记住了你的弱点',
        },
      },
      sujimrfz_damage: {
        forced: true,
        trigger: { player: 'useCardToPlayered' },
        filter(event, player) {
          if (!event.card || event.card.name != 'sha' || player.hasSkill('sujimrfz_damage_ban')) return false;
          for (var i = 0; i < event.targets.length; i++) {
            var target = event.targets[i];
            if (target.hasSkill('sujimrfz2')) return true;
          }
        },
        content() {
          for (var i = 0; i < trigger.targets.length; i++) {
            var target = trigger.targets[i];
            if (target.hasSkill('sujimrfz2')) {
              target.addTempSkill('qinggang2');
              target.storage.qinggang2.add(trigger.card);
              target.markSkill('qinggang2');
              target.addTempSkill('sujimrfz_damage_add');
              target.storage.sujimrfz_damage = {
                card: trigger.card,
              };
            }
          }
          player.addTempSkill('sujimrfz_damage_ban', 'phaseEnd');
        },
        subSkill: {
          add: {
            onremove(player) {
              delete player.storage.sujimrfz_damage;
            },
            trigger: {
              player: 'damageBegin3',
            },
            filter(event, player) {
              var info = player.storage.sujimrfz_damage;
              return event.card && event.card == info.card;
            },
            silent: true,
            popup: false,
            forced: true,
            charlotte: true,
            content() {
              trigger.num++;
            },
          },
          ban: {
            charlotte: true,
          },
        },
      },
      //艾雅法拉
      cuofengmrfz: {
        group: ['cuofengmrfz_mark1', 'cuofengmrfz_mark2'],
        audio: 2,
        preHidden: true,
        trigger: {
          player: 'damageEnd',
        },
        filter(event, player) {
          var num = player.countMark('cuofengmrfz_mark1') + player.countMark('cuofengmrfz_mark2');
          if (num >= player.maxHp - 1) return false;
          return player.countCards('he') > 0;
        },
        content() {
          'step 0';
          var list = ['摸牌阶段', '结束阶段'];
          player.chooseControl(list, function () { });
          ('step 1');
          if (result.control == '摸牌阶段') {
            player.addMark('cuofengmrfz_mark1', 1, false);
          } else {
            player.addMark('cuofengmrfz_mark2', 1, false);
          }
          ('step 2');
          player.chooseToDiscard('he', true, 1);
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
      cuofengmrfz_mark1: {
        intro: {
          content: '摸牌阶段额外摸#张牌',
        },
        trigger: {
          player: 'phaseDrawBegin2',
        },
        filter(event, player) {
          return player.countMark('cuofengmrfz_mark1') > 0;
        },
        forced: true,
        content() {
          var num = player.countMark('cuofengmrfz_mark1');
          trigger.num += num;
        },
      },
      cuofengmrfz_mark2: {
        intro: {
          content: '结束阶段摸#张牌',
        },
        trigger: {
          player: 'phaseJieshuBegin',
        },
        filter(event, player) {
          return player.countMark('cuofengmrfz_mark2') > 0;
        },
        forced: true,
        content() {
          var num = player.countMark('cuofengmrfz_mark2');
          player.draw(num);
        },
      },
      chengzhimrfz: {
        audio: 2,
        juexingji: true,
        trigger: {
          player: 'phaseZhunbeiBegin',
        },
        filter(event, player) {
          var num = player.countMark('cuofengmrfz_mark1') + player.countMark('cuofengmrfz_mark2');
          if (num != player.maxHp - 1) return false;
          return !player.storage.chengzhimrfz;
        },
        forced: true,
        content() {
          player.loseMaxHp();
          player.addSkill('zhuzhimrfz');
          game.log(player, '获得了技能', '#g【逐志】');
          player.awakenSkill(event.name);
          player.storage[event.name] = true;
        },
      },
      zhuzhimrfz: {
        trigger: {
          player: 'phaseZhunbeiBegin',
        },
        audio: 2,
        filter(event, player) {
          if (player.hp == 1 && player.countCards('he') <= 0) return false;
          return true;
        },
        content() {
          'step 0';
          if (player.hp > 1) {
            player.damage('fire');
          } else {
            player.chooseToDiscard('he', true, 1);
          }
          ('step 1');
          var num1 = player.countMark('cuofengmrfz_mark1') + player.countMark('cuofengmrfz_mark2');
          var num2 = Math.floor(num1 / 2);
          player.addTempSkill('zhuzhimrfz_mark', {
            player: 'phaseAfter',
          });
          player.draw(num2);
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
        },
      },
      zhuzhimrfz_mark: {
        mark: true,
        intro: {
          content: '黑暗追着她,她追着光.',
        },
        init(player, skill) {
          if (!player.storage[skill]) player.storage[skill] = 0;
        },
        mod: {
          maxHandcard(player, num) {
            var n = player.countMark('cuofengmrfz_mark1') + player.countMark('cuofengmrfz_mark2');
            return num + n;
          },
          cardUsable(card, player, num) {
            var n = player.countMark('cuofengmrfz_mark1') + player.countMark('cuofengmrfz_mark2');
            if (card.name == 'sha') return num - 1 + n;
          },
        },
      },
      //银灰
      moucunmrfz: {
        trigger: {
          global: 'roundStart',
        },
        intro: {
          content: '【鹰视】中的X为#.',
        },
        audio: 2,
        filter(event, player) {
          return player.countCards('he') > 0;
        },
        content() {
          'step 0';
          player.line2(
            game
              .filterPlayer(function (current) {
                if (current.hasSkill('moucunmrfz3')) {
                  current.removeSkill('moucunmrfz3');
                  return true;
                }
              })
              .concat(result.targets),
            'green',
          );
          player.removeMark('moucunmrfz2', player.countMark('moucunmrfz2'));
          ('step 1');
          player.chooseCardTarget({
            prompt: '请交给一名其他角色一至两张牌',
            filterCard: true,
            filterTarget(card, player, target) {
              var group = game.me.group;
              return player != target && target.group !== group;
            },
            ai1(card) {
              return 10 - get.value(card);
            },
            ai2(target) {
              if (get.attitude(player, target) <= 0) return get.attitude(player, target);
              return get.attitude(player, target) > 0;
            },
            selectCard: [1, 2],
            position: 'he',
          });
          ('step 2');
          if (result.targets?.length) {
            result.targets[0].gain(result.cards, player, 'giveAuto');
            result.targets[0].addSkill('moucunmrfz3');
          }
        },
        group: 'moucunmrfz2',
      },
      yingshimrfz: {
        audio: 2,
        enable: 'phaseUse',
        usable: 1,
        filter(event, player) {
          return game.hasPlayer((current) => lib.skill.yingshimrfz.filterTarget(null, player, current));
        },
        check(card) {
          return 6 - get.value(card);
        },
        filterTarget(card, player, target) {
          return target != player && target.countCards('h') > 0;
        },
        content() {
          var num = player.countMark('moucunmrfz');
          if (num < 1) {
            player.viewHandcards(target);
          } else {
            var max = target.countCards('h');
            if (max > num) return player.gainPlayerCard(num, target, 'h', true, 'visible');
            if (num >= max) return player.gainPlayerCard(max, target, 'h', true, 'visible');
          }
          game.log(player, '观看了', target, '的手牌');
        },
        ai: {
          order: 6,
          result: {
            player: 0.5,
            target(player, target) {
              if (target.hasSkillTag('noh')) return 0;
              return -1;
            },
          },
        },
      },
      moucunmrfz2: {
        trigger: {
          global: 'phaseUseEnd',
        },
        forced: true,
        filter(event, player) {
          if (!event.player.hasSkill('moucunmrfz3')) return false;
          return event.player.getHistory('useCard', function (evt) {
            return evt.getParent('phaseUse') == event;
          }).length;
        },
        content() {
          var list = [];
          trigger.player.getHistory('useCard', function (evt) {
            if (evt.getParent('phaseUse') == trigger) list.add(get.type2(evt.card));
          });
          player.draw(list.length);
          if (list.length > 2) {
            player.addMark('moucunmrfz', 1, false);
          } else {
            event.finish();
          }
        },
      },
      moucunmrfz3: {
        charlotte: true,
        mark: true,
        intro: {
          content: '银灰前来求学',
        },
      },
      //灵知
      siyongmrfz: {
        audio: 2,
        trigger: {
          player: 'loseEnd',
        },
        filter(event, player) {
          if (event.parent.name != 'useCard' || player != _status.currentPhase) return false;
          var list = player.getStorage('siyongmrfz2');
          for (var i of event.cards) {
            if (!list.includes(i.suit)) return true;
          }
          return false;
        },
        content() {
          'step 0';
          if (!player.storage.siyongmrfz2) player.storage.siyongmrfz2 = [];
          for (var i of trigger.cards) player.storage.siyongmrfz2.add(i.suit);
          player.storage.siyongmrfz2.sort();
          player.addTempSkill('siyongmrfz2');
          player.markSkill('siyongmrfz2');
          ('step 1');
          if (
            game.hasPlayer(function (current) {
              return current != player && current.countCards('he') > 0;
            })
          ) {
            player
              .chooseTarget('请选择一名其他角色获得其一张牌', true, function (card, player, target) {
                return target != player && target.countCards('he') > 0;
              })
              .set('ai', function (target) {
                var att = get.attitude(player, target);
                if (att >= 0) return 0;
                if (
                  target.countCards('he', function (card) {
                    return get.value(card) > 5;
                  })
                )
                  return -att;
                return Math.random();
              });
          } else {
            player.draw();
            event.finish();
          }
          ('step 2');
          if (result.targets?.length) {
            var target = result.targets[0];
            player.gainPlayerCard(1, target, 'he', true);
          }
        },
        forced: true,
      },
      siyongmrfz2: {
        intro: {
          content: '当前已使用花色:$',
        },
      },
      //旧流明
      yijianmrfz: {
        trigger: {
          player: 'damageBegin',
        },
        audio: 2,
        forced: true,
        usable: 1,
        content() {
          trigger.num--;
        },
      },
      weiguangmrfz: {
        audio: 'new_weiguangmrfz',
        trigger: {
          player: 'phaseZhunbeiBegin',
        },
        forced: true,
        global: ['weiguangmrfz_mark', 'weiguangmrfz_losemark'],
        filter(event, player) {
          return !player.hasMark('weiguangmrfz_mark');
        },
        content() {
          player.addMark('weiguangmrfz_mark', 1);
        },
        group: 'weiguangmrfz2',
      },
      weiguangmrfz_mark: {
        marktext: '火光',
        intro: {
          name: '火光',
          content: '流明希望人们能有余力擦去脸上的灰尘',
        },
        mod: {
          cardUsable(card, player, num) {
            if (card.name == 'sha') return num + player.countMark('weiguangmrfz_mark');
          },
          maxHandcard(player, num) {
            return num + player.countMark('weiguangmrfz_mark');
          },
        },
        trigger: {
          player: 'phaseDrawBegin2',
        },
        forced: true,
        filter(event, player) {
          return player.hasMark('weiguangmrfz_mark');
        },
        content() {
          trigger.num += player.countMark('weiguangmrfz_mark');
        },
      },
      weiguangmrfz_losemark: {
        trigger: {
          player: 'phaseJieshuBegin',
        },
        forced: true,
        charlotte: true,
        filter(event, player) {
          return player.hasMark('weiguangmrfz_mark');
        },
        content() {
          'step 0';
          player.drawTo(Math.min(5, player.getHandcardLimit()));
          ('step 1');
          player.removeMark('weiguangmrfz_mark', 1);
        },
      },
      weiguangmrfz2: {
        enable: 'phaseUse',
        usable: 1,
        filterTarget: 1,
        prompt: '选择一名角色令其获得一个<火光>标记并对自己造成一点伤害,若该角色是你,你流失一点体力',
        content() {
          if (target == player) {
            player.loseHp();
          }
          player.damage();
          target.addMark('weiguangmrfz_mark');
        },
        ai: {
          order: 9,
          result: {
            target(player, target) {
              if (target.countCards('h') > 2) return 5;
              if (player == target && player.getDamagedHp() == 0) return 5;
              return 2;
            },
          },
          threaten: 2,
        },
      },
      //斥罪
      zhidianmrfz: {
        audio: 2,
        trigger: {
          global: 'roundStart',
        },
        forced: true,
        content() {
          'step 0';
          var list = lib.inpile;
          var list2 = [];
          for (var i = 0; i < list.length; i++) {
            var name = list[i];
            if (name == 'shan' || name == 'wuxie') continue;
            var type = get.type(name);
            if (name == 'sha') {
              list2.push(['基本', '', 'sha']);
              list2.push(['基本', '', 'sha', 'fire']);
              list2.push(['基本', '', 'sha', 'thunder']);
            } else if (type == 'basic') {
              list2.push(['基本', '', list[i]]);
            } else if (type == 'trick') {
              list2.push(['锦囊', '', list[i]]);
            }
          }
          if (!list.length) event.finish();
          else
            player.chooseButton([get.prompt('zhidianmrfz'), [list, 'vcard']]).set('ai', function (button) {
              switch (button.link[2]) {
                case 'wuxie':
                  return 0.6 + Math.random();
                case 'wuzhong':
                case 'dongzhuxianji':
                  return 0.5 + Math.random();
                case 'guohe':
                case 'zhujinqiyuan':
                  return 0.4 + Math.random();
                case 'sha':
                  return 1 + Math.random();
                default:
                  return Math.random();
              }
            });
          ('step 1');
          if (result.links?.length) {
            var name = result.links[0][2];
            player.storage.zhidianmrfz = name;
            player.markSkill('zhidianmrfz');
            game.log(player, '声明了', '#g' + get.translation(name));
          }
        },
        intro: {
          content: '已声明【$】',
        },
        group: ['zhidianmrfz_use'],
      },
      zhidianmrfz_use: {
        trigger: {
          global: 'useCard1',
        },
        silent: true,
        forced: true,
        charlotte: true,
        popup: false,
        firstDo: true,
        filter(event, player) {
          return event.card && event.card.name == player.storage.zhidianmrfz;
        },
        content() {
          var target = trigger.player;
          ('step 0');
          if (target == player) {
            player.chooseToDiscard('he', true, 1);
          } else {
            if (target.countCards('he') == 0) event._result = { index: 1 };
            else {
              var str = get.translation(player);
              target.chooseControl().set('choiceList', [`交给${str}一张牌`, '失去一点体力']);
            }
          }
          ('step 1');
          if (target !== player) {
            if (result.index == 0) {
              target.chooseCard('he', true);
            } else {
              target.loseHp();
            }
          }
          ('step 2');
          if (target !== player) {
            if (result.cards?.length) {
              target.give(result.cards, player, true);
            }
          }
        },
      },
      pijimrfz: {
        audio: 2,
        trigger: {
          player: 'damageEnd',
        },
        filter(event, player) {
          if (event.source == player) return false;
          return event.source != undefined;
        },
        forced: true,
        logTarget: 'source',
        content() {
          var num = player.maxHp - player.hp;
          if (num < 2) trigger.source.damage();
          if (num > 1) trigger.source.damage(2);
        },
        ai: {
          maixie_defend: true,
          effect: {
            target(card, player, target) {
              if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
              return 0.8;
              // if(get.tag(card,'damage')&&get.damageEffect(target,player,player)>0) return [1,0,0,-1.5];
            },
          },
        },
      },
      //泥岩
      wotumrfz: {
        audio: 2,
        trigger: { player: 'useCard2' },
        filter(event, player) {
          if (!event.cards) return false;
          return event.cards.length == 0 && !player.hasSkill('wotumrfz_ban');
        },
        forced: true,
        content() {
          player.changeHujia();
          player.addTempSkill('wotumrfz_ban', {
            global: 'roundStart',
          });
        },
        subSkill: {
          ban: {
            charlotte: true,
          },
        },
      },
      sutumrfz: {
        audio: 2,
        trigger: {
          player: 'useCardAfter',
        },
        filter(event, player) {
          if (player.countCards('h') !== player.hp) return false;
          return event.cards && event.cards.length == 1;
        },
        content() {
          'step 0';
          var list = [];
          for (var i = 0; i < lib.inpile.length; i++) {
            var name = lib.inpile[i];
            if (name == 'sha') {
              list.push(['基本', '', 'sha']);
              for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
            } else if (get.type(name) == 'basic') list.push(['基本', '', name]);
            else if (get.type(name) == 'trick') list.push(['锦囊', '', name]);
          }
          player
            .chooseButton(['塑土', [list, 'vcard']], true)
            .set('ai', function (button) {
              var player = _status.event.parent.player,
                card = {
                  name: button.link[2],
                  nature: button.link[3],
                };
              if (
                game.hasPlayer(function (current) {
                  return current != player && get.attitude(player, current) < 0 && current.countCards('he') > 0 && get.distance(player, current) < 2;
                })
              )
                return 'shunshou';
              if (
                game.hasPlayer(function (current) {
                  return current != player && get.attitude(player, current) < 0 && current.countCards('he') == 0 && player.inRange(current);
                })
              )
                return 'sha';
              return player.getUseValue(card, null, true) * _status.event.att;
            })
            .set('att', get.attitude(event.target, player) > 0 ? 1 : -1);
          ('step 1');
          if (result.links?.length) {
            var name = result.links[0][2];
            player.chooseUseTarget({ name: name }, true);
          }
        },
      },
      //澄闪
      dianshanmrfz: {
        mark: true,
        zhuanhuanji: true,
        marktext: '☯',
        intro: {
          content(storage, player, skill) {
            if (player.storage.dianshanmrfz !== true) return '锁定技,当你成为其他角色使用的黑色牌的目标时,你对一名其他角色造成一点雷属性伤害';
            return '锁定技,当你成为其他角色使用的黑色牌的目标时,你弃置一名其他角色一张牌.';
          },
        },
        audio: 'dianyongmrfz',
        trigger: {
          target: 'useCardToTargeted',
        },
        forced: true,
        filter(event, player) {
          if (
            game.hasPlayer(function (current) {
              return current != player && !current.countCards('he');
            }) &&
            player.storage.dianshanmrfz !== true
          )
            return false;
          return player != event.player && get.color(event.card) == 'black';
        },
        content() {
          'step 0';
          player.changeZhuanhuanji('dianshanmrfz');
          if (player.storage.dianshanmrfz == true) {
            player.chooseTarget(get.prompt('dianshanmrfz'), '对一名其他角色造成一点雷属性伤害', true, function (card, player, target) {
              return target != player;
            }).ai = function (target) {
              return -get.attitude(player, target);
            };
          } else {
            player.chooseTarget(get.prompt('dianshanmrfz'), '弃置一名其他角色一张牌', true, function (card, player, target) {
              return target != player;
            }).ai = function (target) {
              return -get.attitude(player, target);
            };
          }
          ('step 1');
          if (result.bool) {
            if (player.storage.dianshanmrfz == true) {
              result.targets[0].damage('thunder');
            } else {
              player.discardPlayerCard(result.targets[0], 1, 'he', true);
            }
          }
        },
      },
      shidemrfz: {
        audio: 'fuxiemrfz',
        forced: true,
        trigger: {
          player: ['useCard', 'respond', 'loseAfter'],
        },
        filter(event, player) {
          if (event.name != 'lose') return true;
          if (event.type != 'discard') return false;
          if (event.cards2) {
            for (var i = 0; i < event.cards2.length; i++) {
              return true;
            }
          }
          return false;
        },
        forced: true,
        content() {
          if (player.isLinked()) player.link(false);
          else player.link();
        },
        group: 'shidemrfz_draw',
        subSkill: {
          draw: {
            audio: 'shidemrfz',
            forced: true,
            trigger: { player: 'linkAfter' },
            filter(event, player) {
              return !player.isLinked();
            },
            content() {
              player.draw();
            },
          },
        },
      },
      //w
      fukemrfz: {
        trigger: {
          player: 'gainAfter',
        },
        filter(event, player) {
          if (
            !game.hasPlayer(function (current) {
              return current != player && current.countCards('he') > 0;
            })
          )
            return false;
          return event.getParent(3).name != 'fukemrfz';
        },
        audio: 2,
        forced: true,
        content() {
          'step 0';
          var num = trigger.cards.length;
          player.chooseTarget(
            get.prompt('fukemrfz'),
            '获得至多' + get.translation(num) + '名角色的各一张牌,弃置等量的牌',
            [1, num],
            function (card, player, target) {
              return target.countCards('he') > 0 && player != target;
            },
            function (target) {
              var att = get.attitude(_status.event.player, target);
              if (target.hasSkill('tuntian')) return att / 10;
              return 1 - att;
            },
          );
          ('step 1');
          if (result.targets?.length) {
            var num2 = result.targets.length;
            result.targets.sortBySeat();
            player.chooseToDiscard(num2, true, 'he');
            player.gainMultiple(result.targets, 'he');
          } else {
            event.finish();
          }
        },
        ai: {
          threaten: 1.6,
          expose: 0.2,
        },
      },
      zhumengmrfz: {
        audio: 2,
        forced: true,
        trigger: {
          global: 'roundStart',
        },
        firstDo: true,
        forced: true,
        content() {
          player.removeMark('zhumengmrfz3', player.countMark('zhumengmrfz3'));
          player.unmarkSkill('zhumengmrfz2');
        },
      },
      zhumengmrfz2: {
        trigger: {
          global: 'roundStart',
        },
        intro: {
          content(storage) {
            return get.translation(storage) + '牌';
          },
        },
        audio: 2,
        content() {
          'step 0';
          player.judge();
          ('step 1');
          player.markSkill('zhumengmrfz2');
          if (get.type(result.card) !== 'delay') {
            player.storage.zhumengmrfz2 = get.type(result.card);
          } else {
            player.storage.zhumengmrfz2 = 'trick';
          }
          player.addMark('zhumengmrfz3', result.number);
        },
      },
      zhumengmrfz3: {
        marktext: '梦',
        intro: {
          name: '梦',
          content: '萨卡兹的命运应该掌握在自己手中',
        },
        audio: 'zhumengmrfz',
        trigger: {
          player: ['useCard', 'respond'],
        },
        filter(event, player) {
          if (player.storage.zhumengmrfz2 == 'trick' && get.type(event.card) == 'delay') return true;
          return get.type(event.card) == player.storage.zhumengmrfz2 && player.countMark('zhumengmrfz3') > 0;
        },
        forced: true,
        prompt: '是否摸一张牌',
        content() {
          player.removeMark('zhumengmrfz3');
          player.draw();
        },
        group: ['zhumengmrfz2', 'zhumengmrfz'],
      },
      //浊心斯卡蒂
      qianximrfz: {
        audio: 2,
        trigger: {
          global: 'phaseBefore',
          player: 'enterGame',
        },
        derivation: ['qianximrfz_ban'],
        forced: true,
        filter(event, player) {
          return event.name != 'phase' || game.phaseNumber == 0;
        },
        content() {
          'step 0';
          var characterlist = [];
          for (var i of game.players) {
            var players = i;
            if (players == player) continue;
            characterlist.push(players.name);
          }
          if (!lib.config.isNoLimted_mrfz) {
            characterlist.remove('amiyamrfz');
            characterlist.remove('baocunzhemrfz');
          }
          var skills = [];
          for (var i of characterlist) {
            skills.addArray(lib.character[i][3]);
          }
          if (!characterlist.length || !skills.length) {
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
              skills: skills.randomGets(2),
            };
            if (event.dialog) event.dialog.close();
            if (event.control) event.control.close();
          };
          var chooseButton = function (list, skills) {
            var event = _status.event;
            if (!event._result) event._result = {};
            event._result.skills = [];
            var rSkill = event._result.skills;
            var dialog = ui.create.dialog('请获得两个技能', [list, 'character'], 'hidden');
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
                  if (rSkill.length >= 2) return;
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
            chooseButton(characterlist, skills);
          } else if (event.isOnline()) {
            event.player.send(chooseButton, characterlist, skills);
            event.player.wait();
            game.pause();
          } else {
            switchToAuto();
          }
          ('step 1');
          var map = event.result || result;
          if (map && map.skills && map.skills.length) {
            for (var i of map.skills) player.addSkillLog(i);
          }
        },
      },
      //斯卡蒂
      geyaomrfz: {
        audio: 2,
        trigger: {
          player: 'phaseZhunbeiBegin',
        },
        content() {
          'step 0';
          player.draw('visible');
          ('step 1');
          var card = result.cards[0];
          if (get.type(card) == 'equip') {
            player.addTempSkill('geyaomrfz_e');
          }
          if (get.type(card) == 'trick' || get.type(card) == 'delay') {
            player.addTempSkill('geyaomrfz_t');
          }
          if (get.type(card) == 'basic') {
            player.addTempSkill('geyaomrfz_b');
          }
          game.log(player, '展示了一张', get.type(card), '牌');
        },
      },
      geyaomrfz_e: {
        mod: {
          targetInRange(card, player, target, now) {
            if (card.name == 'sha') return true;
          },
          selectTarget(card, player, range) {
            if (card.name == 'sha' && range[1] != -1) range[1] = Infinity;
          },
        },
        charlotte: true,
      },
      geyaomrfz_t: {
        trigger: {
          player: 'useCard',
        },
        forced: true,
        charlotte: true,
        filter(event, player) {
          return event.card && event.card.name == 'sha';
        },
        content() {
          trigger.directHit.addArray(
            game.filterPlayer(function (current) {
              return current != player;
            }),
          );
        },
        ai: {
          directHit_ai: true,
        },
      },
      geyaomrfz_b: {
        trigger: {
          player: 'useCardToPlayered',
        },
        forced: true,
        filter(event, player) {
          return event.card.name == 'sha' && event.target.countCards('h') > 0;
        },
        check(event, player) {
          return get.attitude(player, event.target) < 0;
        },
        content() {
          var color = get.color(trigger.card);
          player
            .gainPlayerCard(trigger.target, 'h', 'visible')
            .set('color', color)
            .set('filterButton', function (button) {
              var evt = _status.event;
              return get.color(button.link, evt.target) != evt.color;
            });
        },
      },
      zhangenmrfz: {
        audio: 2,
        trigger: {
          player: 'useCardAfter',
        },
        filter(event, player) {
          if (player.countCards('h') == 0) return false;
          return event.card.name == 'sha' && player.getHistory('sourceDamage').length;
        },
        check(event, player) {
          return (
            player.getCardUsable('sha') == 0 &&
            player.countCards('h', function (card) {
              return card.name == 'sha';
            }) > 0
          );
        },
        content() {
          player.chooseToDiscard('h', 1, true);
          trigger.addCount = false;
          if (player.stat[player.stat.length - 1].card.sha > 0) {
            player.stat[player.stat.length - 1].card.sha--;
          }
        },
      },
      //缄默德克萨斯
      yushimrfz: {
        audio: 2,
        forced: true,
        trigger: { player: 'phaseDrawBegin2' },
        content() {
          var num = 8 - game.roundNumber;
          trigger.num = Math.max(3, num);
        },
      },
      laoyingmrfz: {
        audio: 2,
        usable: 1,
        trigger: { source: 'damageEnd' },
        filter(event, player) {
          return event.card && event.getParent('phaseUse') && event.getParent('phaseUse').player == player && get.itemtype(event.cards) == 'cards' && get.position(event.cards[0], true) == 'o';
        },
        content() {
          player.gain(trigger.cards, 'gain2');
          var cardu = { name: trigger.card.name };
          if (get.type(cardu) == 'basic') player.addTempSkill('laoyingmrfz_basic');
          else player.addTempSkill('laoyingmrfz_trick');
        },
        subSkill: {
          basic: {
            charlotte: true,
            mod: {
              cardUsable(card, player, num) {
                if (card.name == 'sha') return num + 1;
              },
            },
          },
          trick: {
            audio: 'laoyingmrfz',
            trigger: { player: 'useCard' },
            filter(event, player) {
              return get.type2(event.card) == 'trick';
            },
            forced: true,
            charlotte: true,
            content() {
              trigger.directHit.addArray(
                game.filterPlayer(function (current) {
                  return current != player;
                }),
              );
              player.removeSkill('laoyingmrfz_trick');
            },
            ai: {
              directHit_ai: true,
              skillTagFilter(player, tag, arg) {
                return get.type2(arg.card) == 'trick';
              },
            },
          },
        },
      },
      //玛恩纳
      xunlumrfz: {
        audio: 2,
        group: ['xunlumrfz_draw', 'xunlumrfz_sha', 'xunlumrfz_h'],
        intro: {
          content(storage, player, skill) {
            return '数字:<span class=thundertext>' + player.storage.xunlumrfz_draw + '</span> <span class=firetext>' + player.storage.xunlumrfz_sha + '</span> <span class=greentext>' + player.storage.xunlumrfz_h + '</span></br>本回合杀的数量:' + player.storage.xunlumrfz_sha2 + '</br>本回合手牌上限:' + player.storage.xunlumrfz_h2 + (player.storage.xunlumrfz2 ? '</br>已修改【寻路】' : '');
          },
        },
        mark: true,
        trigger: { source: 'damageEnd' },
        filter(event, player) {
          if (player.storage.xunlumrfz_draw + player.storage.xunlumrfz_sha + player.storage.xunlumrfz_h < 12) return true;
          return false;
        },
        content() {
          'step 0';
          var list = ['蓝色', '红色', '绿色'];
          player
            .chooseControl(list, 'cancel2')
            .set('prompt', get.prompt('xunlumrfz'))
            .set('prompt2', '令〖寻路〗中的一个数字+1</br>数字:<span class=thundertext>' + player.storage.xunlumrfz_draw + '</span> <span class=firetext>' + player.storage.xunlumrfz_sha + '</span> <span class=greentext>' + player.storage.xunlumrfz_h + '</span>')
            .set('ai', function () {
              if (player.storage.xunlumrfz_draw < 4) return 0;
              if (player.storage.xunlumrfz_draw == 4 && player.xunlumrfz_sha < 4) return 1;
              if (player.storage.xunlumrfz_h < 4) return 2;
              return 3;
            });
          ('step 1');
          if (result.control != 'cancel2') {
            if (result.control == '蓝色') {
              if (player.storage.xunlumrfz_draw < 4) {
                player.storage.xunlumrfz_draw++;
              }
            }
            if (result.control == '红色') {
              if (player.storage.xunlumrfz_sha < 4) {
                player.storage.xunlumrfz_sha++;
              }
            }
            if (result.control == '绿色') {
              if (player.storage.xunlumrfz_h < 4) {
                player.storage.xunlumrfz_h++;
              }
            }
            if (result.control == '修改【寻路】') {
              if (!player.storage.xunlumrfz2) {
                player.storage.xunlumrfz2 = true;
              }
            }
            player.markSkill('xunlumrfz');
          }
        },
      },
      //m-n
      //Math.random()*(n-m)+m;
      xunlumrfz_draw: {
        init(player) {
          player.storage.xunlumrfz_draw = 1;
        },
        audio: 2,
        trigger: { player: 'phaseDrawBegin2' },
        forced: true,
        content() {
          var num = game.RDNbet(player.storage.xunlumrfz_draw, 6);
          trigger.num = Math.min(num, 6);
          player.chat('可出' + player.storage.xunlumrfz_sha2 + '张杀</br>手牌上限为:' + player.storage.xunlumrfz_h2);
        },
      },
      xunlumrfz_sha: {
        init(player) {
          player.storage.xunlumrfz_sha = 0;
        },
        trigger: { player: 'phaseZhunbeiBegin' },
        forced: true,
        charlotte: true,
        firstDo: true,
        content() {
          player.addTempSkill('xunlumrfz_sha2', {
            player: 'phaseZhunbeiBegin',
          });
          player.storage.xunlumrfz_sha2 = game.RDNbet(player.storage.xunlumrfz_sha, 5);
        },
      },
      xunlumrfz_sha2: {
        init(player) {
          player.storage.xunlumrfz_sha2 = 0;
        },
        mod: {
          cardUsable(card, player, num) {
            if (card.name == 'sha') return (num = Math.min(player.storage.xunlumrfz_sha2, 5));
          },
        },
      },
      xunlumrfz_h: {
        init(player) {
          player.storage.xunlumrfz_h = 3;
        },
        trigger: { player: 'phaseZhunbeiBegin' },
        forced: true,
        charlotte: true,
        content() {
          player.addTempSkill('xunlumrfz_h2', {
            player: 'phaseZhunbeiBegin',
          });
          player.storage.xunlumrfz_h2 = game.RDNbet(player.storage.xunlumrfz_h, 8);
        },
      },
      xunlumrfz_h2: {
        init(player) {
          player.storage.xunlumrfz_h2 = 0;
        },
        mod: {
          maxHandcard(player, num) {
            return (num = player.storage.xunlumrfz_h2);
          },
        },
      },
      xunlumrfz2: {
        charlotte: true,
      },
      //耀骑士临光
      zhuguangmrfz: {
        derivation: 'zhuguangmrfz_rewrite',
        audio: 2,
        audioname: ['linguangmrfz'],
        trigger: { player: 'phaseZhunbeiAfter' },
        filter(event, player) {
          return !player.storage.zhuguangmrfz_change;
        },
        content() {
          'step 0';
          player
            .chooseTarget('选择一名其他角色,视为对其使用【决斗】', function (card, player, target) {
              return target != player;
            })
            .set('ai', function (target) {
              return -get.attitude(_status.event.player, target);
            });
          ('step 1');
          player.addSkill('zhuguangmrfz2');
          if (result.targets?.length) {
            var target = result.targets[0];
            player.useCard({ name: 'juedou' }, true, target);
          }
          ('step 2');
          if (player.hasSkill('zhuguangmrfz2')) player.removeSkill('zhuguangmrfz2');
        },
        group: 'zhuguangmrfz_change',
      },
      zhuguangmrfz2: {
        silent: true,
        trigger: { source: 'damageBegin2' },
        filter(event, player, card) {
          return event.card && event.card.name == 'juedou';
        },
        prompt(event, player) {
          if (!player.storage.zhuguangmrfz_change) return '是否防止此伤害并选择一项';
          return '是否发动【逐光】';
        },
        frequent(event, player) {
          if (!player.storage.zhuguangmrfz_change) return false;
          return true;
        },
        content() {
          'step 0';
          if (!player.storage.zhuguangmrfz_change) trigger.cancel();
          var list = [];
          if (!player.storage.kuanmrfz && player.hasSkill('kuanmrfz')) list.add('修改【苦暗】');
          if (!player.storage.zhuguangmrfz_change) list.add('修改【逐光】');
          //if(player.countDisabled()>0) list.add('回复装备栏');
          if (!player.storage.zhuguangmrfz_change) list.add('摸一张牌');
          if (player.storage.zhuguangmrfz_change) list.add('摸两张牌');
          //判断是否只剩余一个选项
          if (list.length == 1) {
            player.draw(player.storage.zhuguangmrfz_change ? 2 : 1);
            event.finish();
          } else {
            list.add('cancel2');
            player
              .chooseControl(list)
              .set('prompt', get.prompt('zhuguangmrfz'))
              .set('prompt2', '选择一项')
              .set('ai', function () {
                if (!player.storage.zhuguangmrfz_change) return 1;
                if (!player.storage.kuanmrfz && player.hasSkill('kuanmrfz')) return 0;
                return [0, 1].randomGet();
              });
          }
          ('step 1');
          if (result.control != 'cancel2') {
            if (result.control == '修改【苦暗】') {
              player.storage.kuanmrfz = true;
            }
            if (result.control == '修改【逐光】') {
              player.storage.zhuguangmrfz_change = true;
            }
            //if(result.control=='回复装备栏'){
            //    player.chooseToEnable();
            //}
            if (result.control == '摸一张牌') {
              player.draw();
            }
            if (result.control == '摸两张牌') {
              player.draw(2);
            }
          }
        },
      },
      zhuguangmrfz_change: {
        audio: 'zhuguangmrfz',
        trigger: { player: 'phaseZhunbeiBegin' },
        filter(event, player) {
          return player.storage.zhuguangmrfz_change;
        },
        content() {
          'step 0';
          player
            .chooseTarget('选择一名其他角色,视为对其使用【决斗】,且此决斗不可响应', function (card, player, target) {
              return target != player;
            })
            .set('ai', function (target) {
              return -get.attitude(_status.event.player, target);
            });
          ('step 1');
          player.addSkill(['zhuguangmrfz2', 'zhuguangmrfz3']);
          if (result.targets?.length) {
            var target = result.targets[0];
            player.useCard({ name: 'juedou', zhuguangmrfz: true }, true, target);
          }
          ('step 2');
          if (player.hasSkill('zhuguangmrfz2')) player.removeSkill('zhuguangmrfz2');
          if (player.hasSkill('zhuguangmrfz3')) player.removeSkill('zhuguangmrfz3');
        },
      },
      zhuguangmrfz3: {
        trigger: {
          player: 'useCard',
        },
        forced: true,
        charlotte: true,
        silent: true,
        filter(event, player) {
          return event.card.name == 'juedou' && event.card.zhuguangmrfz == true;
        },
        content() {
          trigger.directHit.addArray(
            game.filterPlayer(function (current) {
              return current != player;
            }),
          );
        },
        ai: {
          directHit_ai: true,
        },
      },
      kuanmrfz: {
        audio: 2,
        trigger: { global: 'gameDrawAfter' },
        forced: true,
        content() {
          player.disableEquip('equip1');
          player.disableEquip('equip2');
          player.disableEquip('equip3');
          player.disableEquip('equip4');
          player.disableEquip('equip5');
          player.disableJudge();
          player.draw(3);
        },
        group: ['kuanmrfz2', 'kuanmrfz5'],
        mod: {
          ignoredHandcard(card, player) {
            if (get.type(card) == 'equip') return true;
          },
          cardDiscardable(card, player, name) {
            if (name == 'phaseDiscard' && get.type(card) == 'equip') return false;
          },
        },
      },
      kuanmrfz2: {
        audio: 2,
        trigger: { player: 'phaseJudgeBefore' },
        forced: true,
        filter(event, player) {
          return !player.storage.kuanmrfz;
        },
        content() {
          'step 0';
          player.judge(function (card) {
            if (card.suit == 'heart') return -2;
            return 1;
          });
          ('step 1');
          if (result.suit !== 'heart') {
            player.skip('phaseUse');
            game.log(player, '的<span class=thundertext>【乐不思蜀】</span>判定结果为', result.suit, ',', player, '跳过出牌阶段');
          } else {
            game.log(player, '的<span class=thundertext>【乐不思蜀】</span>判定结果为', result.suit, ',判定失败');
          }
          ('step 2');
          player.judge(function (card) {
            if (card.suit == 'club') return -2;
            return 1;
          });
          ('step 3');
          if (result.suit !== 'club') {
            player.skip('phaseDraw');
            game.log(player, '的<span class=thundertext>【兵粮寸断】</span>判定结果为', result.suit, ',', player, '跳过摸牌阶段');
          } else {
            game.log(player, '的<span class=thundertext>【兵粮寸断】</span>判定结果为', result.suit, ',判定失败');
          }
        },
      },
      kuanmrfz5: {
        audio: 'kuanmrfz',
        enable: ['chooseToRespond', 'chooseToUse'],
        filter(event, player) {
          if (
            event.type == 'wuxie' ||
            player.countCards('h', function (card) {
              return get.type(card) == 'equip';
            }) == 0
          )
            return false;
          for (var name of ['sha', 'shan', 'jiu']) {
            if (event.filterCard({ name: name }, player, event)) return true;
          }
          return false;
        },
        chooseButton: {
          dialog(event, player) {
            var vcards = [];
            for (var name of ['sha', 'shan', 'jiu']) {
              var card = { name: name };
              if (event.filterCard && event.filterCard(card, player, event)) {
                vcards.push(['基本', '', name]);
              }
            }
            var dialog = ui.create.dialog('苦暗', [vcards, 'vcard'], 'hidden');
            dialog.direct = true;
            return dialog;
          },
          backup(links, player) {
            return {
              filterCard(card) {
                return get.type(card) == 'equip';
              },
              selectCard: 1,
              viewAs: {
                name: links[0][2],
              },
              popname: true,
              precontent() { },
            };
          },
          prompt(links, player) {
            return '【苦暗】:使用一张【' + get.translation(links[0][2]) + '】';
          },
        },
        ai: {
          order: 3,
          respondSha: true,
          respondShan: true,
        },
      },
      shuoguangmrfz: {
        audio: 2,
        trigger: { player: 'phaseDiscardBefore' },
        forced: true,
        filter(event, player) {
          return !player.storage.shuoguangmrfz;
        },
        content() {
          trigger.cancel();
          player.storage.shuoguangmrfz = true;
        },
      },
      //凯尔希
      yuanlvemrfz: {
        audio: 2,
        trigger: { player: 'drawBegin' },
        forced: true,
        filter(event, player) {
          return event.getParent(1).name != 'yuanlvemrfz';
        },
        content() {
          'step 0';
          if (!player.storage.yuanshimrfz || player.storage.yuanshimrfz_gain) {
            var num = trigger.num;
          } else {
            var num = trigger.num + 1;
          }
          if (trigger.parent.name !== 'phaseDraw') {
            player.chooseToGuanxing(num);
            player.draw(num);
          } else {
            player.chooseToGuanxing(num + 1);
            player.draw(num + 1);
          }
          ('step 1');
          trigger.cancel();
        },
      },
      chonggoumrfz: {
        intro: {
          content: '已修改【重构】.',
        },
        audio: 2,
        trigger: { player: 'phaseDrawBegin2' },
        filter(event, player) {
          if (player.getDamagedHp() == 0 && !player.storage.chonggoumrfz) return false;
          return player.countCards('h') >= player.hp;
        },
        content() {
          player.chooseToDiscard('h', player.countCards('h'), true);
          if (!player.storage.chonggoumrfz) {
            player.draw(player.countCards('h') - player.getDamagedHp());
          } else {
            player.draw(player.countCards('h'));
          }
          player.recover();
        },
      },
      yuanshimrfz: {
        intro: {
          content: '令【远略】中的X+1.',
        },
        trigger: {
          global: 'phaseBefore',
          player: 'enterGame',
        },
        forced: true,
        audio: 3,
        forced: true,
        filter(event, player) {
          return (event.name != 'phase' || game.phaseNumber == 0) && player.countCards('h') > 0;
        },
        content() {
          var hs = player.getCards('h');
          if (hs.length) player.addGaintag(hs, 'yuanshimrfz');
        },
        group: ['yuanshimrfz_basic', 'yuanshimrfz_equip', 'yuanshimrfz_trick', 'yuanshimrfz_gain'],
        subSkill: {
          basic: {
            trigger: {
              player: 'useCard',
            },
            prompt: '是否令此牌不可响应',
            check(event, player) {
              if (event.card.name == 'sha') return true;
              return false;
            },
            filter(event, player) {
              if (get.type(event.card) !== 'basic') return false;
              return player.hasHistory('lose', function (evt) {
                if (event != evt.parent) return false;
                for (var i in evt.gaintag_map) {
                  if (evt.gaintag_map[i].includes('yuanshimrfz')) return true;
                }
                return false;
              });
            },
            content() {
              if (!player.storage.yuanshimrfz_gain) player.storage.yuanshimrfz_gain = true;
              trigger.directHit.addArray(
                game.filterPlayer(function (current) {
                  return current != player;
                }),
              );
            },
            ai: {
              directHit_ai: true,
            },
          },
          equip: {
            trigger: { player: 'useCard' },
            prompt: '是否摸一张牌',
            filter(event, player) {
              if (get.type(event.card) !== 'equip' && get.type(event.card) !== 'delay') return false;
              return player.hasHistory('lose', function (evt) {
                if (event != evt.parent) return false;
                for (var i in evt.gaintag_map) {
                  if (evt.gaintag_map[i].includes('yuanshimrfz')) return true;
                }
                return false;
              });
            },
            content() {
              if (!player.storage.yuanshimrfz_gain) player.storage.yuanshimrfz_gain = true;
              player.draw();
            },
          },
          trick: {
            trigger: { player: 'useCard' },
            prompt(event, player) {
              return '是否令' + get.translation(event.card) + '的目标+1/-1';
            },
            filter(event, player) {
              if (get.type(event.card) !== 'trick') return false;
              return player.hasHistory('lose', function (evt) {
                if (event != evt.parent) return false;
                for (var i in evt.gaintag_map) {
                  if (evt.gaintag_map[i].includes('yuanshimrfz')) return true;
                }
                return false;
              });
            },
            content() {
              'step 0';
              if (!player.storage.yuanshimrfz_gain) player.storage.yuanshimrfz_gain = true;
              var prompt2 = '为' + get.translation(trigger.card) + '增加或减少一个目标';
              player
                .chooseTarget(get.prompt('yuanshimrfz'), function (card, player, target) {
                  var player = _status.event.player;
                  if (_status.event.targets.includes(target)) return true;
                  return lib.filter.targetEnabled2(_status.event.card, player, target) && lib.filter.targetInRange(_status.event.card, player, target);
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
              if (result.targets?.length) {
                if (!event.isMine() && !event.isOnline()) event.targets = result.targets;
              } else {
                event.finish();
              }
              ('step 2');
              if (event.targets) {
                if (trigger.targets.includes(event.targets[0])) trigger.targets.removeArray(event.targets);
                else trigger.targets.addArray(event.targets);
              }
            },
          },
          gain: {
            trigger: { player: 'loseAfter' },
            forced: true,
            filter(event, player) {
              if (player.storage.yuanshimrfz || player.storage.chonggoumrfz) return false;
              return !player.hasCard(function (card) {
                return card.hasGaintag('yuanshimrfz');
              }, 'h');
            },
            content() {
              if (!player.storage.yuanshimrfz_gain) {
                player.storage.yuanshimrfz = true;
                player.markSkill('yuanshimrfz');
              } else {
                player.storage.chonggoumrfz = true;
                player.markSkill('chonggoumrfz');
              }
            },
          },
        },
      },
      m3mrfz: {
        audio: 2,
        trigger: {
          player: 'dying',
        },
        zhuSkill: true,
        mark: true,
        limited: true,
        filter(event, player) {
          if (player.hp > 0) return false;
          return !player.storage.m3mrfz;
        },
        init: (player, skill) => (player.storage[skill] = false),
        check(event, player) {
          var num = player.countCards('h', function (card) {
            return card.name == 'tao' || card.name == 'jiu';
          });
          return player.hp + num <= 0;
        },
        content() {
          'step 0';
          player.awakenSkill('m3mrfz');
          player.removeSkill('chonggoumrfz');
          player.discard(player.getCards('hej'));
          player.recoverTo(2);
          player.storage.m3mrfz = true;
          player.loseMaxHp();
          player.turnOver(false);
          player.link(false);
          ('step 1');
          var targets = game.filterPlayer();
          event.targets = targets.remove(player);
          event.discard = [];
          event.num = 0;
          ('step 2');
          if (event.targets.length) {
            var current = event.targets.shift();
            if (current.countCards('he') > 0) {
              current
                .chooseBool('是否弃置一张牌令' + get.translation(player) + '摸一张牌')
                .set('ai', function () {
                  return get.attitude(_status.event.player, _status.event.target) > 2;
                })
                .set('target', player);
              event.current = current;
            } else {
              event.redo();
            }
          } else {
            event.goto(4);
          }
          ('step 3');
          if (result.bool) {
            event.discard.push(event.current);
            event.current.line(player, 'green');
            game.log(event.current, '令', player, '摸一张牌');
            player.draw();
          }
          if (event.targets.length) {
            event.goto(2);
          }
          ('step 4');
          if (event.discard.length) {
            var next = game.createEvent('m3mrfz_next');
            event.next.remove(next);
            trigger.after.push(next);
            next.targets = event.discard;
            next.setContent(function () {
              for (var i = 0; i < targets.length; i++) {
                if (targets[i].countCards('h') > 0) {
                  targets[i].chooseToDiscard('h', true);
                }
              }
            });
          }
        },
      },
      //山
      zhuangtimrfz: {
        intro: {
          content: '已造成#点伤害',
        },
        audio: 2,
        forced: true,
        trigger: { source: 'damageEnd' },
        filter(event, player) {
          return player.maxHp < 15;
        },
        content() {
          'step 0';
          player.addMark('zhuangtimrfz', trigger.num);
          ('step 1');
          var damage = player.countMark('zhuangtimrfz');
          if (damage > 1) {
            player.gainMaxHp(Math.floor(damage / 2));
            player.removeMark('zhuangtimrfz', Math.floor(damage / 2) * 2);
          }
        },
        group: ['zhuangtimrfz_use', 'zhuangtimrfz_draw'],
        subSkill: {
          use: {
            audio: 2,
            usable: 1,
            enable: 'phaseUse',
            filter(event, player) {
              for (var i of lib.inpile) {
                if (get.type(i) == 'trick' && event.filterCard({ name: i }, player, event)) return true;
                if (get.type(i) == 'basic' && event.filterCard({ name: i }, player, event)) return true;
              }
              return false;
            },
            chooseButton: {
              dialog(event, player) {
                var list = [];
                for (var i of lib.inpile) {
                  if (event.filterCard({ name: i }, player, event)) {
                    if (get.type(i) == 'trick') {
                      list.push(['锦囊', '', i]);
                    }
                    if (get.type(i) == 'basic') {
                      list.push(['基本', '', i]);
                    }
                  }
                }
                return ui.create.dialog('壮体', [list, 'vcard']);
              },
              check(button) {
                return _status.event.player.getUseValue({
                  name: button.link[2],
                });
              },
              backup(links, player) {
                return {
                  viewAs: {
                    name: links[0][2],
                  },
                  filterCard: () => false,
                  selectCard: -1,
                  popname: true,
                  precontent() {
                    player.loseMaxHp();
                  },
                };
              },
              prompt(links, player) {
                return '请选择' + get.translation(links[0][2]) + '的目标';
              },
            },
            ai: { order: 1, result: { player: 1 } },
          },
          draw: {
            trigger: { player: 'phaseZhunbeiBegin' },
            filter(event, player) {
              return false;
            },
            check(event, player) {
              return player.hp < 3;
            },
            promt(event, player) {
              return '是否失去' + player.getDamagedHp() + '点体力上限,摸' + Math.ceil(player.getDamagedHp() / 2) + '张牌.';
            },
            content() {
              var num = player.getDamagedHp();
              player.loseMaxHp(num);
              player.draw(Math.ceil(num / 2));
            },
          },
        },
      },
      julimrfz: {
        audio: 2,
        trigger: { source: 'damageBegin' },
        filter(event, player) {
          return player.getDamagedHp() >= event.player.hp;
        },
        check(event, player) {
          return get.attitude(player, event.player) < 0;
        },
        content() {
          'step 0';
          trigger.num++;
          ('step 1');
          var card = trigger.player.countCards('he');
          if (player.maxHp >= card) {
            player
              .chooseControl('确定', 'cancel2')
              .set('prompt', '是否失去两点体力上限,令此伤害+1')
              .set('ai', function (event, player) {
                if (get.attitude(player, event.player) < 0 && player.maxHp >= 3) return 0;
                return 1;
              });
          }
          ('step 2');
          if (result.control !== 'cancel2') {
            trigger.num++;
            player.loseMaxHp(2);
          }
        },
      },
      //歌蕾蒂亚
      xunxiangmrfz: {
        audio: 2,
        usable: 2,
        enable: 'phaseUse',
        filter(event, player) {
          if (player.hasSkill('xunxiangmrfz2')) return false;
          return game.hasPlayer((current) => current.countCards('h') > 0);
        },
        filterTarget(card, player, target) {
          return target.countCards('h') > 0;
        },
        selectTarget: -1,
        multitarget: true,
        multiline: true,
        content() {
          'step 0';
          var num = [3, 1, 2].randomGet();
          if (num == 1) player.storage.xunxiangmrfz = 'basic';
          if (num == 2) player.storage.xunxiangmrfz = 'trick';
          if (num == 3) player.storage.xunxiangmrfz = 'equip';
          game.log('<span class=thundertext>【寻相】</span>随机的类型为<span class=firetext>', player.storage.xunxiangmrfz, '牌</span>');
          player.popup(get.translation(player.storage.xunxiangmrfz) + '牌');
          targets.sortBySeat();
          var next = player
            .chooseCardOL(targets, '请选择要展示的牌', true)
            .set('ai', function (card) {
              return -get.value(card);
            })
            .set('source', player);
          next.aiCard = function (target) {
            var hs = target.getCards('h');
            return { bool: true, cards: [hs.randomGet()] };
          };
          next._args.remove('glow_result');
          ('step 1');
          var cards = [];
          var num = 0;
          event.videoId = lib.status.videoId++;
          for (var i = 0; i < targets.length; i++) {
            cards.push(result[i].cards[0]);
          }
          event.cards = cards;
          game.log(player, '展示了', targets, '的', cards);
          game.broadcastAll(
            function (targets, cards, id, player) {
              var dialog = ui.create.dialog(get.translation(player) + '发动了【寻相】</br><span class=firetext>【寻相】随机声明的类型为' + get.translation(player.storage.xunxiangmrfz) + '牌</span>', cards);
              dialog.videoId = id;
              var getName = function (target) {
                if (target._tempTranslate) return target._tempTranslate;
                var name = target.name;
                if (lib.translate[`${name}_ab`]) return lib.translate[`${name}_ab`];
                return get.translation(name);
              };
              for (var i = 0; i < targets.length; i++) {
                dialog.buttons[i].querySelector('.info').innerHTML = getName(targets[i]);
                if (get.type(result[i].cards[0]) == player.storage.xunxiangmrfz) num++;
                if (get.type(result[i].cards[0]) == 'delay' && player.storage.xunxiangmrfz == 'trick') num++;
              }
            },
            targets,
            cards,
            event.videoId,
            player,
          );
          if (num == 0) {
            player.chooseTarget('选择一名其他角色,你与其各流失一点体力', true, function (card, player, target) {
              return target != player;
            }).ai = function (target) {
              return get.attitude(player, target) < 2;
            };
            player.loseHp();
          } else {
            player.addTempSkill('xunxiangmrfz2', 'phaseUseEnd');
            player.draw(num);
          }
          ('step 2');
          game.broadcastAll('closeDialog', event.videoId);
          if (result.targets?.length) {
            var target = result.targets[0];
            target.loseHp();
          }
        },
        ai: {
          order: 12,
          result: {
            player: 5,
          },
        },
      },
      xunxiangmrfz2: {
        //检测用技能,无实际意义.
      },
      ronghangmrfz: {
        audio: 2,
        trigger: { player: 'useCard' },
        forced: true,
        getLastUsed(player, event) {
          var history = player.getAllHistory('useCard');
          var index;
          if (event) index = history.indexOf(event) - 1;
          else index = history.length - 1;
          if (index >= 0) return history[index];
          return false;
        },
        filter(event, player) {
          var evtcard = event.card;
          var evt = lib.skill.ronghangmrfz.getLastUsed(player, event);
          if (!evt.card || !evt) return false;
          return get.tag(evtcard, 'damage') > 0;
        },
        content() {
          var lastcard = lib.skill.ronghangmrfz.getLastUsed(player, trigger);
          if (get.cardNameLength(lastcard.card) < get.cardNameLength(trigger.card)) {
            trigger.baseDamage++;
            player.popup('伤害基数+1');
          } else {
            var name = trigger.card.name;
            if (name == 'sha') {
              trigger.addCount = false;
              if (player.stat[player.stat.length - 1].card.sha > 0) {
                player.stat[player.stat.length - 1].card.sha--;
              }
            } else if (name == 'jiu') {
              trigger.addCount = false;
              if (player.stat[player.stat.length - 1].card.jiu > 0) {
                player.stat[player.stat.length - 1].card.jiu--;
              }
            }
            trigger.directHit.addArray(
              game.filterPlayer(function (current) {
                return current != player;
              }),
            );
            player.popup('强中且无限制');
          }
        },
        ai: {
          directHit_ai: true,
          skillTagFilter(player, tag, arg) {
            var evtcard = lib.skill.ronghangmrfz.getLastUsed(player, event);
            return get.cardNameLength(evtcard) >= get.cardNameLength(arg.card);
          },
        },
      },
      //废弃技能,暂时无用
      caiganmrfz: {
        trigger: {
          player: 'gainAfter',
        },
        firstDo: true,
        forced: true,
        filter(event, player) {
          return event.getParent(2).name != 'caiganmrfz';
        },
        audio: 2,
        content() {
          'step 0';
          player.chooseToDiscard('h', [1, Infinity], get.prompt('caiganmrfz'), function (card) {
            return card.hasGaintag('caiganmrfz');
          });
          ('step 1');
          if (result.cards?.length) {
            var cards = result.cards;
            player.draw(cards.length);
            if (!player.storage.caiganmrfz_times) {
              player.storage.caiganmrfz_times = true;
              player.draw();
            }
          }
        },
        ai: {
          threaten: 1.6,
          expose: 0.2,
        },
        group: ['caiganmrfz_mark', 'caiganmrfz_remove', 'caiganmrfz_times'],
        subSkill: {
          mark: {
            trigger: {
              player: 'gainBegin',
            },
            silent: true,
            content() {
              trigger.gaintag.add('caiganmrfz');
            },
          },
          remove: {
            trigger: {
              player: 'gainAfter',
            },
            silent: true,
            forced: true,
            charlotte: true,
            content() {
              player.removeGaintag('caiganmrfz');
            },
          },
          times: {
            trigger: {
              global: 'phaseEnd',
            },
            silent: true,
            filter(event, player) {
              return player.storage.caiganmrfz_times;
            },
            content() {
              player.storage.caiganmrfz_times = false;
            },
          },
        },
      },
      jingsimrfz: {
        intro: { content: '已使用的牌:$' },
        trigger: { player: 'useCard' },
        audio: 2,
        forced: true,
        filter(event, player) {
          return !player.getStorage('jingsimrfz').includes(event.card.name);
        },
        content() {
          'step 0';
          player.draw();
          ('step 1');
          player.markAuto('jingsimrfz', [trigger.card.name]);
        },
      },
      //旧星熊
      banruomrfz: {
        audio: 4,
        init(player) {
          player.storage.banruomrfz = true;
        },
        intro: {
          content(storage, player, skill) {
            if (player.storage.banruomrfz) return '星熊的巨盾将会保护她和她想保护的人';
            return '盾牌破损,但她并未后退';
          },
        },
        mark: true,
        audio: 2,
        trigger: { player: 'damageBegin3' },
        filter(event, player) {
          return player.storage.banruomrfz;
        },
        prompt: '是否取消此次伤害',
        content() {
          trigger.cancel();
        },
        mod: {
          maxHandcardBase(player, num) {
            if (player.storage.banruomrfz) return player.maxHp;
          },
        },
        group: ['banruomrfz_lose', 'banruomrfz_draw', 'banruomrfz_round', 'banruomrfz_atk'],
        subSkill: {
          lose: {
            forced: true,
            trigger: { source: 'damageEnd' },
            filter(event, player) {
              return player.storage.banruomrfz;
            },
            firstDo: true,
            content() {
              player.storage.banruomrfz = false;
            },
          },
          draw: {
            forced: true,
            popup: false,
            trigger: { player: 'phaseDrawBegin2' },
            filter(event, player) {
              return player.storage.banruomrfz;
            },
            content() {
              trigger.num--;
            },
          },
          round: {
            forced: true,
            trigger: { global: 'roundStart' },
            filter(event, player) {
              return game.roundNumber > player.maxHp && player.storage.banruomrfz;
            },
            content() {
              player.storage.banruomrfz = false;
            },
          },
          atk: {
            forced: true,
            trigger: { source: 'damageEnd' },
            filter(event, player) {
              return !player.storage.banruomrfz;
            },
            content() {
              player.removeSkill('banruomrfz_atk');
              player.addSkill('banruomrfz2');
            },
          },
        },
        ai: {
          effect: {
            target(card, player, target, current) {
              if (!player.storage.banruomrfz) return;
              if (get.tag(card, 'damage')) return 'zerotarget';
              if (get.type(card) == 'trick' && get.tag(card, 'damage')) {
                return 'zeroplayertarget';
              }
            },
          },
        },
      },
      banruomrfz2: {
        mark: true,
        intro: {
          content: '星熊放下了她的盾',
        },
        mod: {
          cardUsable(card, player, num) {
            if (card.name == 'sha') return (num += 1);
          },
        },
        group: ['banruomrfz2_damage', 'banruomrfz2_lose'],
        subSkill: {
          damage: {
            forced: true,
            usable: 1,
            trigger: { source: 'damageBegin' },
            content() {
              trigger.num++;
            },
          },
          lose: {
            forced: true,
            trigger: { global: 'phaseEnd' },
            content() {
              player.removeSkill('banruomrfz2');
            },
          },
        },
      },
      yizhongmrfz: {
        audio: 2,
        trigger: { global: 'damageBegin3' },
        filter(event, player) {
          return get.distance(player, event.player) <= 1 && event.player != player && player.countCards('he') > 0;
        },
        check(event, player) {
          return get.attitude(player, event.player) > 0;
        },
        prompt(event, player) {
          return '是否弃置一张牌并为' + get.translation(event.player) + '承担伤害';
        },
        content() {
          player.chooseToDiscard(true, 'he');
          trigger.cancel();
          player.damage(trigger.num, trigger.source || 'nosource', 'nocard');
        },
        group: 'yizhongmrfz2',
      },
      yizhongmrfz2: {
        trigger: { player: 'damageEnd' },
        firstDo: true,
        filter(event, player) {
          return event.parent.name == 'yizhongmrfz';
        },
        prompt: '是否摸两张牌',
        content() {
          player.draw(2);
        },
      },
      //卡涅利安
      shazhenmrfz: {
        audio: 2,
        forced: true,
        mark: true,
        init(player) {
          player.storage.shazhenmrfz = false;
        },
        intro: {
          content(storage, player, skill) {
            if (!player.storage.shazhenmrfz || game.roundNumber == 1) return '沙暴环绕着卡涅利安</br>【沙阵】剩余次数:' + (2 - player.countMark('shazhenmrfz_damage'));
            return '沙暴散去';
          },
        },
        trigger: { player: 'damageBegin3' },
        filter(event, player) {
          return (game.roundNumber == 1 || !player.storage.shazhenmrfz) && player.countMark('shazhenmrfz_damage') < 2;
        },
        content() {
          trigger.num--;
          player.addMark('shazhenmrfz_damage', false);
        },
        mod: {
          maxHandcardBase(player, num) {
            if (!player.storage.shazhenmrfz) return (num += 2);
          },
        },
        group: ['shazhenmrfz_damage', 'shazhenmrfz_clear'],
        subSkill: {
          damage: {
            forced: true,
            silent: true,
            trigger: { source: 'damageEnd' },
            filter(event, player) {
              return !event.player.hasMark('shacanmrfz');
            },
            content() {
              player.storage.shazhenmrfz = true;
            },
          },
          clear: {
            forced: true,
            charlotte: true,
            silent: true,
            trigger: { global: 'roundStart' },
            filter(event, player) {
              return player.storage.shazhenmrfz || player.countMark('shazhenmrfz_damage') > 0;
            },
            content() {
              player.storage.shazhenmrfz = false;
              player.removeMark('shazhenmrfz_damage', player.countMark('shazhenmrfz_damage'));
            },
          },
        },
      },
      shacanmrfz: {
        marktext: '噬',
        intro: {
          name: '噬',
          content(storage, player, skill) {
            return '<span class=firetext>食噬之印</span></br>还需交给卡涅利安' + (2 - player.countMark('shacanmrfz2')) + '张牌即可消除一个‘噬’标记';
          },
        },
        trigger: { source: 'damageEnd' },
        audio: 2,
        filter(event, player) {
          return event.player.isAlive() && event.player.countMark('shacanmrfz') < 2;
        },
        prompt(event, player) {
          return '是否令' + get.translation(event.player) + '获得一个‘噬’标记';
        },
        check(event, player) {
          return get.attitude(player, event.player) <= 0;
        },
        content() {
          trigger.player.addMark('shacanmrfz');
        },
        group: ['shacanmrfz_remove', 'shacanmrfz_gain'],
        subSkill: {
          remove: {
            forced: true,
            charlotte: true,
            silent: true,
            trigger: { player: 'gainEnd' },
            filter(event, player) {
              return event.source && event.source.isAlive() && event.source != player && event.source.hasMark('shacanmrfz');
            },
            logTarget: 'source',
            content() {
              var target = trigger.source;
              var num = target.countMark('shacanmrfz2');
              ('step 0');
              target.addMark('shacanmrfz2', trigger.cards.length, false);
              ('step 1');
              if (num > 1) {
                target.removeMark('shacanmrfz', Math.floor(num / 2));
                target.removeMark('shacanmrfz2', Math.floor(num / 2) * 2);
              }
            },
          },
          gain: {
            trigger: { global: 'phaseUseBegin' },
            filter(event, player) {
              return event.player.hasMark('shacanmrfz') && (player.getDamagedHp() > 0 || event.player.countCards('he') > 0);
            },
            forced: true,
            charlotte: true,
            content() {
              var target = trigger.player;
              ('step 0');
              var list = [];
              if (player.getDamagedHp() > 0) list.add('回血');
              if (target.countCards('he') > 0) list.add('交牌');
              target
                .chooseControl(list)
                .set('prompt', '选择一项')
                .set('ai', function (player) {
                  return 0;
                });
              ('step 1');
              if (result.control == 'cancel2') event.finish();
              if (result.control == '回血') {
                player.recover();
                target.removeMark('shacanmrfz');
                event.finish();
              }
              if (result.control == '交牌') {
                if (target.countCards('he') > 1)
                  target.chooseCard(2, '展示两张牌', true, 'he').set('ai', function (card) {
                    return get.value(card);
                  });
                else target.chooseCard(1, '展示两张手牌', true, 'he');
              }
              ('step 2');
              if (result.cards?.length) {
                if (result.cards.length == 1) {
                  event._result = {
                    bool: true,
                    links: result.cards.slice(0),
                  };
                } else
                  player.chooseButton(['选择获得其中的一张牌', result.cards], true).ai = function (button) {
                    return get.value(button.link);
                  };
              }
              ('step 3');
              if (result.links?.length) {
                player.gain(result.links, target, 'give');
              }
            },
          },
        },
      },
      shacanmrfz2: {
        //检测用技能,无实际意义
      },
      shahuanmrfz: {
        audio: 2,
        enable: 'phaseUse',
        usable: 1,
        filterTarget(card, player, target) {
          return target != player && target.countMark('shacanmrfz') < 1;
        },
        content() {
          target.addMark('shacanmrfz');
        },
        ai: {
          order: 10,
          expose: 0.4,
          result: {
            target: -1,
          },
          threaten: 2,
        },
      },
      //陈
      danweimrfz: {
        intro: {
          content: '已有#个胆',
        },
        audio: 2,
        usable: 2,
        trigger: { global: ['respond', 'useCard'] },
        filter(event, player) {
          if (!event.respondTo) return false;
          if (player != event.respondTo[0]) return false;
          return event.cards && event.cards.filterInD('od').length;
        },
        logTarget: 'player',
        content() {
          var cards = trigger.cards.filterInD('od');
          player.gain(cards, 'log', 'gain2');
          player.addMark('danweimrfz');
        },
        group: ['danweimrfz_use'],
        subSkill: {
          use: {
            trigger: { player: ['respond', 'useCard'] },
            usable: 2,
            filter(event, player) {
              if (!event.respondTo) return false;
              return event.cards && event.cards.filterInD('od').length;
            },
            logTarget: 'player',
            content() {
              var cards = [];
              if (get.itemtype(trigger.respondTo[1]) == 'card') cards.push(trigger.respondTo[1]);
              else if (trigger.respondTo[1].cards) cards.addArray(trigger.respondTo[1].cards);
              cards = cards.filterInD('od');
              player.gain(cards, 'gain2', 'log');
              player.addMark('danweimrfz');
            },
          },
        },
      },
      hechimrfz: {
        audio: 2,
        enable: 'phaseUse',
        usable: 1,
        selectTarget: 1,
        filterTarget: 1,
        filter(event, player) {
          return player.countMark('danweimrfz') > 0 || player.countCards('h') > 0;
        },
        content() {
          'step 0';
          if (player.countCards('h') == 0) event._result = { index: 1 };
          if (player.countMark('danweimrfz') == 0) event._result = { index: 0 };
          if (player.countMark('danweimrfz') > 0 && player.countCards('h') > 0)
            player
              .chooseControl()
              .set('choiceList', [
                '弃置一张手牌', //0
                '失去一个‘胆’', //1
              ])
              .set('ai', function (card) {
                var player = _status.event.player;
                if (
                  player.hasCard(function (card) {
                    return get.value(card) < 7;
                  }, 'h')
                )
                  return 0;
                return 1;
              });
          ('step 1');
          if (result.index == 0) {
            player.chooseToDiscard(true, 'h', '弃置一张手牌');
          } else {
            player.removeMark('danweimrfz');
          }
          ('step 2');
          if (!target.hasSkill('hechimrfz2')) target.addSkill('hechimrfz2');
          target.addMark('hechimrfz2');
          target.draw(2);
          if (target != player) player.draw();
        },
        ai: {
          order: 13,
        },
      },
      hechimrfz2: {
        mark: true,
        marktext: '斥',
        intro: {
          name: '呵斥',
          content: '受到了陈的*龙门粗口*,手牌上限-#',
        },
        trigger: { player: 'phaseDiscardEnd' },
        forced: true,
        charlotte: true,
        silent: true,
        async content(event, trigger, player) {
          player.removeMark('hechimrfz2', player.countMark('hechimrfz2'));
          player.removeSkill('hechimrfz2');
        },
        mod: {
          maxHandcardBase(player, num) {
            return (num -= player.countMark('hechimrfz2'));
          },
        },
      },
      jueyingmrfz: {
        audio: 2,
        trigger: { player: 'phaseZhunbeiBegin' },
        filter(event, player) {
          return player.countMark('danweimrfz') >= 5;
        },
        content() {
          'step 0';
          player.removeMark('danweimrfz', 5);
          event.num = 0;
          ('step 1');
          event.num++;
          player.chooseUseTarget(
            {
              name: 'sha',
              nature: 'thunder',
            },
            '请选择雷【杀】的目标(雷【杀】:' + event.num + '/2;普通【杀】:0/1)',
            false,
            'nodistance',
          );
          ('step 2');
          if (result.bool && event.num < 2) event.goto(1);
          else
            player.chooseUseTarget(
              {
                name: 'sha',
              },
              '请选择【杀】的目标(雷【杀】:2/2;普通【杀】:1/1)',
              false,
              'nodistance',
            );
        },
      },
      chencaidanmrfz: {
        //彩蛋
        audio: 3,
      },
      newjingsimrfz: {
        audio: 2,
        zhuSkill: true,
        trigger: { global: 'useCardToTarget' },
        filter(event, player) {
          if (player.hasSkill('newjingsimrfz_ban')) return false;
          if (event.targets.length > 1) return false;
          if (event.player == player || event.target == player || event.source == player || player == _status.currentPhase) return false;
          return event.card.name == 'sha' || event.card.name == 'juedou';
        },
        forced: true,
        content() {
          'step 0';
          var target = trigger.target,
            card = trigger.card;
          target.chooseBool('【警司】:是否请求将此' + get.translation(trigger.card) + '的目标改为' + get.translation(player) + '?').set('ai', function () {
            var player = _status.event.player,
              target = _status.event.getTrigger().player;
            return get.attitude(player, target) > 2;
          });
          ('step 1');
          if (result.bool) {
            player
              .chooseBool('【警司】:是否接受' + get.translation(trigger.player) + '的请求,令' + get.translation(trigger.card) + '的目标改为你？')
              .set('ai', function () {
                var player = _status.event.player,
                  target = _status.event.getTrigger().player;
                var nametmp = _status.event.name;
                if (
                  nametmp == 'sha' &&
                  player.countCards('h', function (card) {
                    return card.name == 'shan';
                  }) < 1
                )
                  return false;
                if (
                  nametmp == 'juedou' &&
                  player.countCards('h', function (card) {
                    return card.name == 'sha';
                  }) < 2
                )
                  return false;
                if (player.hp < 3) return false;
                return get.attitude(player, target) > 2;
              })
              .set('name', trigger.card.name);
          } else event.finish();
          ('step 2');
          if (result.bool) {
            player.draw();
            player.addMark('danweimrfz');
            player.addTempSkill('newjingsimrfz_ban', 'phaseEnd');
            var target = trigger.target;
            trigger.targets.remove(target);
            trigger.parent.triggeredTargets1.remove(target);
            trigger.untrigger();
          } else event.finish();
          ('step 3');
          trigger.targets.push(player);
          trigger.player.line(player, 'fire');
          game.log(trigger.card, '的目标被改为', player);
        },
        subSkill: {
          ban: {
            charlotte: true,
          },
        },
      },
      //新艾雅法拉
      luanhuomrfz: {
        marktext: '火',
        intro: {
          name: '乱火',
          content: '本轮已执行回合数:#',
        },
        audio: 2,
        trigger: { player: 'damageBegin2' },
        filter(event, player) {
          return event.nature == 'fire';
        },
        forced: true,
        content() {
          trigger.cancel();
        },
        ai: {
          nofire: true,
          effect: {
            target(card, player, target, current) {
              if (get.tag(card, 'fireDamage')) return 'zerotarget';
            },
          },
        },
        group: ['luanhuomrfz_fire', 'luanhuomrfz_times', 'luanhuomrfz_clear', 'luanhuomrfz_damage'],
        subSkill: {
          fire: {
            trigger: { source: 'damageBegin' },
            forced: true,
            charlotte: true,
            filter(event, player) {
              return event.nature != 'fire';
            },
            content() {
              trigger.cancel();
              trigger.player.damage(trigger.num, player, 'fire');
            },
          },
          times: {
            forced: true,
            charlotte: true,
            silent: true,
            trigger: { player: 'phaseBegin' },
            content() {
              player.addMark('luanhuomrfz');
            },
          },
          clear: {
            forced: true,
            charlotte: true,
            silent: true,
            trigger: { global: 'roundStart' },
            filter(event, player) {
              return player.countMark('luanhuomrfz') > 0;
            },
            content() {
              player.removeMark('luanhuomrfz', player.countMark('luanhuomrfz'));
            },
          },
          damage: {
            trigger: { player: 'phaseZhunbeiBegin' },
            content() {
              var num = player.countMark('luanhuomrfz');
              var str1 = '对至多' + get.cnNumber(num, true) + '名其他角色造成一点伤害';
              var str2 = '对一名其他角色造成' + get.cnNumber(num, true) + '点伤害';
              ('step 0');
              if (num == 1) {
                player
                  .chooseTarget(get.prompt2('luanhuomrfz'), function (card, player, target) {
                    return player != target;
                  })
                  .set('ai', function (target) {
                    var player = _status.event.player;
                    return get.damageEffect(target, player, player);
                  });
              } else {
                player.chooseControl(str1, str2).set('ai', function (event, player) {
                  if (num > 2) return 0;
                  return 1;
                });
              }
              ('step 1');
              if (result.bool && num == 1) {
                result.targets[0].damage();
                event.finish();
              }
              if (result.control == str1 && num > 1) {
                player.storage.luanhuomrfz_damage = true;
                player
                  .chooseTarget([1, num], '对至多' + get.cnNumber(num, true) + '名其他角色造成一点伤害', function (card, player, target) {
                    return player != target;
                  })
                  .set('ai', function (target) {
                    var player = _status.event.player;
                    return get.damageEffect(target, player, player);
                  });
              } else if (result.control == str2 && num > 1) {
                player.storage.luanhuomrfz_damage = false;
                player
                  .chooseTarget('对一名其他角色造成' + get.cnNumber(num, true) + '点伤害', function (card, player, target) {
                    return player != target;
                  })
                  .set('ai', function (target) {
                    var player = _status.event.player;
                    return get.damageEffect(target, player, player);
                  });
              }
              ('step 2');
              if (result.bool && !player.storage.luanhuomrfz_damage) {
                result.targets[0].damage(num);
              } else if (result.bool && player.storage.luanhuomrfz_damage) {
                for (var i = 0; i < result.targets.length; i++) result.targets[i].damage(player);
              }
            },
          },
        },
      },
      qingyanmrfz: {
        audio: 2,
        trigger: { player: 'phaseUseEnd' },
        filter(event, player) {
          if (player.hasMark('qingyanmrfz')) return false;
          return player.getHistory('useCard', function (evt) {
            return evt.getParent('phaseUse') == event;
          }).length;
        },
        forced: true,
        content() {
          'step 0';
          var list = [];
          player.getHistory('useCard', function (evt) {
            if (evt.getParent('phaseUse') == trigger) list.add(get.type2(evt.card));
          });
          if (list.length >= 3) {
            player.chooseBool('【勤研】:是否于本回合结束后额外执行一个回合？');
          } else event.finish();
          ('step 1');
          if (result.bool) {
            player.phase('nodelay');
            player.addMark('qingyanmrfz', false);
          }
        },
        group: 'qingyanmrfz_clear',
        subSkill: {
          clear: {
            silent: true,
            charlotte: true,
            forced: true,
            trigger: { global: 'roundStart' },
            filter(event, player) {
              return player.hasMark('qingyanmrfz');
            },
            content() {
              player.removeMark('qingyanmrfz', player.countMark('qingyanmrfz'));
            },
          },
        },
      },
      //傀影
      xuyingmrfz: {
        intro: {
          content: 'expansion',
          markcount: 'expansion',
        },
        onremove(player, skill) {
          var cards = player.getExpansions(skill);
          if (cards.length) player.loseToDiscardpile(cards);
        },
        audio: 2,
        trigger: { player: 'useCard' },
        forced: true,
        notemp: true,
        filter(event, player) {
          if (event.xuyingmrfz_buff || !event.targets.length || player.hasSkill('xuyingmrfz_buff')) return false;
          var type = get.type(event.card, false);
          if (type != 'basic' && type != 'trick' && player.getExpansions('xuyingmrfz').length) return false;
          return player.getExpansions('xuyingmrfz').filter(function (magic) {
            return get.type2(magic) != get.type2(event.card);
          }).length;
        },
        content() {
          'step 0';
          var cards = player.getExpansions('xuyingmrfz').filter(function (magic) {
            return get.type2(magic) != get.type2(trigger.card);
          });
          if (cards.length) player.chooseButton(['你可以选择移去一张与你使用的牌类型不同的<虚影>,令此牌结算两次', cards]);
          else event.finish();
          ('step 1');
          if (result.links?.length) {
            player.loseToDiscardpile(result.links);
            player.addTempSkill('xuyingmrfz_buff', 'phaseUseAfter');
            trigger.xuyingmrfz_buff = player;
          }
        },
        group: ['xuyingmrfz_discard', 'xuyingmrfz_judge'],
        subSkill: {
          discard: {
            audio: 2,
            trigger: { global: 'loseAfter' },
            filter(event, player) {
              if (event.type != 'discard' || event.getlx === false) return false;
              if (player.getExpansions('xuyingmrfz').length >= 3) return false;
              var cards = event.cards.slice(0);
              var evt = event.getl(player);
              if (Array.isArray(cards))
                for (var i of cards) {
                  if (i.original != 'j' && i.suit == 'spade' && get.position(i, true) == 'd') {
                    return true;
                  }
                }
              return false;
            },
            forced: true,
            content() {
              'step 0';
              'step 1';
              var cards = [],
                cards2 = trigger.cards.slice(0),
                evt = trigger.getl(player);
              var num = player.getExpansions('xuyingmrfz').length;
              for (var i = 0; i < cards2.length; i++) {
                if (cards2[i].original != 'j' && cards2[i].suit == 'spade' && get.position(cards2[i], true) == 'd') {
                  cards.push(cards2[i]);
                }
              }
              if (cards.length && num + cards.length <= 3) {
                player.chooseButton(['虚影:选择置于武将牌上的牌', cards], [1, cards.length]).set('ai', function (button) {
                  return get.value(button.link, _status.event.player, 'raw');
                });
              } else if (cards.length) {
                player.chooseButton(['虚影:选择置于武将牌上的牌', cards], [1, 3 - num]).set('ai', function (button) {
                  return get.value(button.link, _status.event.player, 'raw');
                });
              }
              ('step 2');
              if (result.links?.length) {
                player.addToExpansion(result.links, player, 'giveAuto').gaintag.add('xuyingmrfz');
              }
            },
          },
          judge: {
            audio: 2,
            trigger: { global: 'cardsDiscardAfter' },
            forced: true,
            filter(event, player) {
              var evt = event.parent.relatedEvent;
              if (!evt || evt.name != 'judge') return;
              if (player.getExpansions('xuyingmrfz').length >= 3) return false;
              if (get.position(event.cards[0], true) != 'd') return false;
              return event.cards[0].suit == 'spade';
            },
            content() {
              'step 0';
              var card = trigger.cards.length;
              var num = player.getExpansions('xuyingmrfz').length;
              if (card + num <= 3)
                player.chooseButton(['虚影:选择置于武将牌上的牌', trigger.cards], [1, card]).set('ai', function (button) {
                  return get.value(button.link, _status.event.player, 'raw');
                });
              else
                player.chooseButton(['虚影:选择置于武将牌上的牌', trigger.cards], [1, 3 - num]).set('ai', function (button) {
                  return get.value(button.link, _status.event.player, 'raw');
                });
              ('step 1');
              if (result.links?.length) {
                player.addToExpansion(result.links, player, 'giveAuto').gaintag.add('xuyingmrfz');
              }
            },
          },
          buff: {
            trigger: { global: 'useCardToTargeted' },
            forced: true,
            charlotte: true,
            popup: false,
            lastDo: true,
            filter(event, player) {
              return event.parent.xuyingmrfz_buff == player && event.targets.length == event.parent.triggeredTargets4.length;
            },
            content() {
              trigger.parent.targets = trigger.parent.targets.concat(trigger.targets);
              trigger.parent.triggeredTargets4 = trigger.parent.triggeredTargets4.concat(trigger.targets);
              player.removeSkill('xuyingmrfz_buff');
            },
          },
        },
      },
      xuegemrfz: {
        audio: 2,
        trigger: { player: 'damageEnd' },
        filter(event, player) {
          return game.hasPlayer(function (target) {
            return target != player && player.inRange(target);
          });
        },
        check(event, player) {
          return game.hasPlayer(function (target) {
            return target != player && get.attitude(player, target) < 2 && player.inRange(target);
          });
        },
        content() {
          'step 0';
          player.chooseTarget('请选择【血歌】的目标', '对一名你的攻击范围内其他角色造成一点伤害', true, function (card, player, target) {
            return target != player && player.inRange(target);
          }).ai = function (target) {
            return -get.attitude(player, target);
          };
          ('step 1');
          if (result.targets?.length) {
            player.line(result.targets);
            result.targets[0].damage();
            if (result.targets[0].hp > player.hp || player.getExpansions('xuyingmrfz').length >= 3) event.finish();
          }
          ('step 2');
          if (player.countCards('he') && player.getExpansions('xuyingmrfz').length < 3) {
            player.chooseCard('你可以将一张牌置于武将牌上作为<虚影>', 'he');
          } else {
            event.finish();
          }
          ('step 3');
          if (result.cards?.length) {
            player.addToExpansion(result.cards, player, 'giveAuto').gaintag.add('xuyingmrfz');
          }
        },
      },
      huanxiangmrfz: {
        audio: 2,
        trigger: { player: 'useCardAfter' },
        filter(event, player) {
          return event.card && (event.card.name == 'shan' || event.card.name == 'wuxie');
        },
        forced: true,
        content() {
          player.draw();
        },
      },
      //莫斯提马
      huanshimrfz: {
        audio: 2,
        forced: true,
        trigger: { player: 'phaseEnd' },
        getNum() {
          var num = 0;
          game.getGlobalHistory('cardMove', function (evt) {
            if (evt.name == 'lose' && evt.type == 'discard') num += evt.cards2.length;
          });
          return num;
        },
        filter(event, player) {
          return (
            lib.skill.huanshimrfz.getNum() > 0 &&
            game.hasPlayer(function (target) {
              return target != player && !player.hasSkill('huanshimrfz_buff1');
            })
          );
        },
        content() {
          var num = lib.skill.huanshimrfz.getNum();
          ('step 0');
          player.chooseTarget(get.prompt('huanshimrfz'), '你可以选择至多' + get.cnNumber(num) + '名角色令其下个回合内:①其使用的第一张【杀】指定目标时,取消之,其获得这张【杀】.', [1, num], function (card, player, target) {
            return target != player && !player.hasSkill('huanshimrfz_buff1');
          }).ai = function (target) {
            return -get.attitude(player, target);
          };
          ('step 1');
          if (result.targets?.length) {
            for (var i of result.targets) {
              i.addSkill(['huanshimrfz_buff1', 'huanshimrfz_buff2']);
              player.line(i);
            }
          }
        },
        subSkill: {
          tmp: {
            silent: true,
            charlotte: true,
          },
          buff1: {
            forced: true,
            charlotte: true,
            trigger: { player: 'useCardToPlayered' },
            filter(event, player) {
              if (player.hasSkill('huanshimrfz_tmp')) return false;
              return event.card && event.card.name == 'sha';
            },
            content() {
              var cards = [];
              if (Array.isArray(trigger.cards))
                for (var i of trigger.cards) {
                  if (get.position(i, true) == 'o') {
                    cards.push(i);
                  }
                }
              player.gain(cards, 'gain2');
              trigger.parent.excluded.addArray(trigger.targets);
              player.addTempSkill('huanshimrfz_tmp', 'phaseEnd');
            },
          },
          buff2: {
            mark: true,
            marktext: '缓',
            intro: {
              name: '主观缓时',
              content: '行动受到限制',
            },
            forced: true,
            charlotte: true,
            silent: true,
            trigger: { player: 'phaseEnd' },
            filter(event, player) {
              return player.hasSkill('huanshimrfz_buff1') || player.hasSkill('huanshimrfz_buff2');
            },
            content() {
              player.removeSkill('huanshimrfz_buff1');
              player.removeSkill('huanshimrfz_buff2');
            },
          },
        },
      },
      shishimrfz: {
        audio: 2,
        trigger: { player: 'drawBegin' },
        filter(event, player) {
          return (event.getParent('phaseDraw') && event.getParent('phaseDraw').player == player) || (event.getParent('phaseUse') && event.getParent('phaseUse').player == player);
        },
        content() {
          trigger.num += player.countMark('shishimrfz') + 1;
          player.addMark('shishimrfz', false);
        },
        group: 'shishimrfz_discard',
        subSkill: {
          discard: {
            forced: true,
            trigger: { player: 'phaseDiscardBefore' },
            filter(event, player) {
              return player.hasMark('shishimrfz');
            },
            content() {
              var num = player.countMark('shishimrfz');
              player.chooseToDiscard(get.prompt('shishimrfz'), `弃置${get.cnNumber(num)}张牌`, 'he', true, num);
              player.removeMark('shishimrfz', num, false);
            },
          },
        },
      },
      jiemimrfz: {
        intro: {
          content(event, player) {
            var num = player.countMark('jiemimrfz') + 1;
            if (player != _status.currentPhase && player.countMark('jiemimrfz') % 2 == 1) return `弃置${get.cnNumber(num)}张牌`;
            if (player != _status.currentPhase && player.countMark('jiemimrfz') % 2 != 1) return `摸${get.cnNumber(num)}张牌`;
            if (player == _status.currentPhase && player.countMark('jiemimrfz') % 2 == 1) return `摸${get.cnNumber(num)}张牌`;
            if (player == _status.currentPhase && player.countMark('jiemimrfz') % 2 != 1) return `弃置${get.cnNumber(num)}张牌`;
          },
        },
        mark: true,
        charlotte: true,
        audio: 2,
        forced: true,
        trigger: { global: 'phaseEnd' },
        filter(event, player) {
          return player.hasMark('jiemimrfz');
        },
        content() {
          player.removeMark('jiemimrfz', player.countMark('jiemimrfz'));
        },
        group: ['jiemimrfz_cw', 'jiemimrfz_zd'],
        subSkill: {
          cw: {
            forced: true,
            trigger: { target: 'useCardToTargeted' },
            filter(event, player) {
              return player != _status.currentPhase;
            },
            content() {
              'step 0';
              player.addMark('jiemimrfz');
              ('step 1');
              if (player.countMark('jiemimrfz') % 2 == 1) player.draw(player.countMark('jiemimrfz'));
              else player.chooseToDiscard('弃置' + get.cnNumber(player.countMark('jiemimrfz')) + '张手牌', player.countMark('jiemimrfz'), true, 'h');
            },
          },
          zd: {
            forced: true,
            trigger: { player: 'useCardToTargeted' },
            filter(event, player) {
              if (player != _status.currentPhase) return false;
              return event.target != player && event.targets.length == 1;
            },
            content() {
              'step 0';
              player.addMark('jiemimrfz');
              ('step 1');
              if (player.countMark('jiemimrfz') % 2 == 1) player.chooseToDiscard('弃置' + get.cnNumber(player.countMark('jiemimrfz')) + '张手牌', player.countMark('jiemimrfz'), true, 'h');
              else player.draw(player.countMark('jiemimrfz'));
            },
          },
        },
      },
      shihuangmrfz: {
        audio: 2,
        usable: 2,
        trigger: { player: 'loseAfter' },
        filter(event, player) {
          if (event.type != 'discard' || event.getlx === false) return false;
          if (event.name.indexOf('lose') != 0) return event.name != 'phase' || game.phaseNumber == 0;
          var evt = event.getl(player);
          var num = 0;
          for (var i = 0; i < evt.cards2.length; i++) {
            num += evt.cards2[i].number;
          }
          return num > player.hp * 2 && !player.hasSkill('shihuangmrfz2');
        },
        content() {
          var num = 0;
          if (Array.isArray(trigger.cards))
            for (var i of trigger.cards) {
              num += i.number;
            }
          player.addSkill('shihuangmrfz2');
          player.gain(trigger.cards, 'gain2', 'log');
        },
      },
      shihuangmrfz2: {
        forced: true,
        silent: true,
        charlotte: true,
        trigger: { global: 'phaseEnd' },
        content() {
          player.removeSkill('shihuangmrfz2');
        },
      },
      baokemrfz: {
        audio: 2,
        usable: 1,
        trigger: { source: 'damageEnd' },
        filter(event, player) {
          if (event.getParent('phaseUse') && event.getParent('phaseUse').player != player) return false;
          if (event.player == player) return false;
          if (!event.player.isAlive()) return false;
          if (event.nature) return true;
          return event.player.getEquip(2);
        },
        content() {
          trigger.player.damage();
        },
      },
      //菲亚梅塔
      nanjiaomrfz: {
        init(player) {
          player.storage.nanjiaomrfz = 0;
        },
        mark: true,
        intro: {
          content(event, player) {
            for (var i of game.players) {
              if (i.isOut() || i == player) continue;
              if (i.storage.nanjiaomrfz && i.storage.nanjiaomrfz != 0) {
                var target = i;
                break;
              }
            }
            return '你的手牌上限' + (player.storage.nanjiaomrfz > 0 ? '+' : '') + Math.floor(player.storage.nanjiaomrfz / 2) + '</br>' + get.translation(target) + '的手牌上限' + (target.storage.nanjiaomrfz > 0 ? '+' : ' ') + Math.floor(target.storage.nanjiaomrfz / 2);
          },
        },
        audio: 2,
        trigger: { global: 'roundStart' },
        forced: true,
        content() {
          game.countPlayer(function (current) {
            if (current.storage.nanjiaomrfz) {
              current.storage.nanjiaomrfz = 0;
              if (current != player) current.removeSkill('nanjiaomrfz_eff');
            }
          });
          if (!player.isMaxHandCardLimit(true)) {
            for (var i of game.players) {
              if (i.isOut() || i == player) continue;
              if (i.isMaxHandCardLimit()) {
                player.storage.nanjiaomrfz = i.getHandcardLimit();
                i.storage.nanjiaomrfz = -(i.getHandcardLimit() - 1);
                i.addSkill('nanjiaomrfz_eff');
                break;
              }
            }
          } else {
            for (var i of game.players) {
              if (i.isOut() || i == player) continue;
              if (i.isMinHandCardLimit()) {
                i.storage.nanjiaomrfz = player.getHandcardLimit();
                player.storage.nanjiaomrfz = -(player.getHandcardLimit() - 1);
                i.addSkill('nanjiaomrfz_eff');
                break;
              }
            }
          }
        },
        group: ['nanjiaomrfz_eff'],
        subSkill: {
          eff: {
            charlotte: true,
            mod: {
              maxHandcard(player, num) {
                return num + Math.floor(player.storage.nanjiaomrfz / 2);
              },
            },
          },
        },
      },
      shunanmrfz: {
        audio: 2,
        forced: true,
        trigger: { player: 'phaseEnd' },
        filter(event, player) {
          return player.hp > 1 && !player.hasSkill('lvwaimrfz_ban');
        },
        content() {
          player.loseHp();
        },
        group: ['shunanmrfz_damage'],
        subSkill: {
          damage: {
            trigger: {
              source: 'damageBegin3',
              player: 'phaseDrawBegin2',
            },
            forced: true,
            filter(event, player) {
              return player.countCards('h') >= player.hp;
            },
            content() {
              if (player.getDamagedHp() <= player.maxHp / 2) trigger.num += 2;
              else trigger.num++;
            },
          },
        },
        ai: {
          threaten: 1.2,
        },
      },
      shunanmrfza: {
        audio: 2,
      },
      lvwaimrfz: {
        audio: 2,
        enable: 'phaseUse',
        mark: true,
        limited: true,
        init(player) {
          player.storage.lvwaimrfz = false;
        },
        filter(event, player) {
          return !player.storage.lvwaimrfz;
        },
        content() {
          'step 0';
          player.addSkill(['lvwaimrfz_damage', 'lvwaimrfz_ban', 'lvwaimrfz_clear', 'lvwaimrfz_sha']);
          ('step 1');
          player.chooseUseTarget({ name: 'sha' }, true, 'nodistance');
          player.storage.lvwaimrfz = true;
        },
        subSkill: {
          damage: {
            forced: true,
            trigger: { source: 'damageEnd' },
            content() {
              player.draw(trigger.num);
              player.recover(trigger.num);
              player.removeSkill('lvwaimrfz_damage');
            },
          },
          ban: {
            forced: true,
            silent: true,
            trigger: { global: 'phaseBegin' },
            content() {
              player.removeSkill('lvwaimrfz_ban');
            },
          },
          clear: {
            forced: true,
            silent: true,
            trigger: { player: 'shaAfter' },
            content() {
              player.removeSkill('lvwaimrfz_clear');
              if (player.hasSkill('lvwaimrfz_damage')) player.removeSkill('lvwaimrfz_damage');
            },
          },
          sha: {
            forced: true,
            silent: true,
            charlotte: true,
            trigger: { player: 'useCard' },
            filter(event, card) {
              return event.card && event.card.name == 'sha';
            },
            content() {
              trigger.directHit.addArray(game.players);
              player.removeSkill('lvwaimrfz_sha');
            },
          },
        },
      },
      //棘刺
      chaoshengmrfz: {
        intro: {
          content(event, player) {
            return player.countMark('chaoshengmrfz') + '/' + player.countMark('chaoshengmrfz2');
          },
        },
        mark: true,
        audio: 2,
        trigger: { player: 'phaseEnd' },
        forced: true,
        filter(event, player) {
          return player.countMark('chaoshengmrfz') >= player.countMark('chaoshengmrfz2');
        },
        content() {
          player.removeMark('chaoshengmrfz', player.countMark('chaoshengmrfz'));
          if (player.countMark('jianshumrfz') < 15) {
            player.chooseDrawRecover(2, true, function (event, player) {
              if (player.hp == 1 && player.isDamaged()) return 'recover_hp';
              return 'draw_card';
            });
          } else {
            player.draw(2);
            player.recover();
          }
        },
        group: ['chaoshengmrfz_limite', 'chaoshengmrfz_gain'],
        subSkill: {
          limite: {
            forced: true,
            charlotte: true,
            silent: true,
            trigger: {
              global: 'phaseBefore',
              player: 'enterGame',
            },
            content() {
              player.addMark('chaoshengmrfz2', 3, false);
              player.removeSkill('chaoshengmrfz_limite');
            },
          },
          gain: {
            forced: true,
            charlotte: true,
            silent: true,
            trigger: { player: 'phaseEnd' },
            firstDo: true,
            content() {
              if (!player.getStat('damage')) player.addMark('chaoshengmrfz');
              else player.removeMark('chaoshengmrfz', player.countMark('chaoshengmrfz'));
            },
          },
        },
      },
      jianshumrfz: {
        intro: {
          content(event, player) {
            var num = player.countMark('jianshumrfz');
            if (num == 15) return '【潮声】已修改</br>摸牌阶段摸牌数+1;攻击距离和【杀】的使用次数各+2';
            if (num < 15 && num > 9) return '已累计指定' + num + '次</br>摸牌阶段摸牌数+1;攻击距离和【杀】的使用次数各+2';
            if (num < 10 && num > 4) return '已累计指定' + num + '次</br>摸牌阶段摸牌数、攻击距离和【杀】的使用次数各+1';
            return `已累计指定${num}次`;
          },
        },
        audio: 3,
        forced: true,
        trigger: { player: 'useCardToTargeted' },
        filter(event, player) {
          return player.countMark('jianshumrfz') < 15;
        },
        content() {
          'step 0';
          player.addMark('jianshumrfz');
          ('step 1');
          var num = player.countMark('jianshumrfz');
          if (num % 5 == 0) {
            if (num == 5 || num == 15) player.removeMark('chaoshengmrfz2');
            if (num == 10) player.addSkill('jianshumrfz_usesha');
            if (num == 5 || 10) player.addMark('jianshumrfz_time');
            if (num == 5) player.addMark('jianshumrfz_draw');
            if (num == 5 || 10) player.addMark('jianshumrfz_range');
          }
        },
        group: ['jianshumrfz_time', 'jianshumrfz_range', 'jianshumrfz_draw'],
        subSkill: {
          time: {
            charlotte: true,
            mod: {
              cardUsable(card, player, num) {
                if (card.name == 'sha') return num + player.countMark('jianshumrfz_time');
              },
            },
          },
          range: {
            charlotte: true,
            mod: {
              attackRange(player, num) {
                return num + player.countMark('jianshumrfz_range');
              },
            },
          },
          draw: {
            silent: true,
            forced: true,
            charlotte: true,
            trigger: { player: 'phaseDrawBegin2' },
            filter(event, player) {
              return player.hasMark('jianshumrfz_draw');
            },
            content() {
              trigger.num++;
            },
          },
          usesha: {
            forced: true,
            trigger: { player: 'phaseUseBegin' },
            content() {
              'step 0';
              player.chooseTarget('选择一名其他角色视为对其使用一张【杀】', function (card, player, target) {
                return target != player && player.inRange(target);
              }).ai = function (target) {
                return -get.attitude(player, target);
              };
              ('step 1');
              if (result.targets?.length) {
                var target = result.targets[0];
                player.useCard({ name: 'sha' }, true, false, target);
              }
            },
          },
        },
      },
      //夜莺
      qiulongmrfz: {
        intro: {
          name: '笼',
          content: '你获得了白恶魔的庇护',
        },
        audio: 2,
        forced: true,
        trigger: { global: 'roundStart' },
        content() {
          'step 0';
          player.line2(
            game
              .filterPlayer(function (current) {
                if (current.hasMark('qiulongmrfz')) {
                  current.removeMark('qiulongmrfz');
                  return true;
                }
              })
              .concat(result.targets),
            'green',
          );
          ('step 1');
          player.chooseTarget('你可以选择一名角色,令其获得‘笼’标记', function (card, player, target) {
            return target != player;
          }).ai = function (target) {
            return get.attitude(player, target);
          };
          ('step 2');
          if (result.targets?.length) {
            result.targets[0].addMark('qiulongmrfz');
          }
        },
        group: ['qiulongmrfz_damage', 'qiulongmrfz_huan'],
        subSkill: {
          remove: {
            forced: true,
            charlotte: true,
            firstDo: true,
            silent: true,
            trigger: { global: 'roundStart' },
            filter(event, player) {
              return player.hasMark('qiulongmrfz');
            },
            content() {
              player.removeMark('qiulongmrfz');
            },
          },
          damage: {
            forced: true,
            charlotte: true,
            silent: true,
            trigger: { global: 'damageEnd' },
            filter(event, player) {
              return event.player.hasMark('qiulongmrfz');
            },
            content() {
              var num = trigger.num;
              trigger.player.recover(num);
              player.damage(num, 'nosource');
              player.addMark('qiulongmrfz_huan', num * 2);
            },
          },
          huan: {
            marktext: '幻影',
            intro: {
              name: '幻',
              content: '幻影',
            },
          },
        },
      },
      bihumrfz: {
        audio: 2,
        forced: true,
        trigger: { player: 'damageBegin3' },
        filter(event, player) {
          return event.nature;
        },
        content() {
          trigger.cancel();
        },
        group: 'bihumrfz_damage',
        subSkill: {
          damage: {
            forced: true,
            trigger: { player: 'damageEnd' },
            filter(event, player) {
              return event.source != undefined;
            },
            content() {
              player.addMark('qiulongmrfz_huan', trigger.num);
            },
          },
        },
        ai: {
          nofire: true,
          nothunder: true,
          effect: {
            target(card, player, target, current) {
              if (get.tag(card, 'natureDamage')) return 'zerotarget';
            },
          },
        },
      },
      shengyumrfz: {
        audio: 2,
        enable: 'phaseUse',
        forced: true,
        mark: true,
        init(player) {
          player.storage.shengyumrfz = false;
        },
        derivation: ['polongmrfz'],
        filter(event, player) {
          return !player.storage.shengyumrfz;
        },
        intro: {
          content(event, player) {
            if (!player.storage.shengyumrfz) return '圣域已准备就绪';
            return '圣域充能中:' + player.countMark('shengyumrfz_cd') + '/4';
          },
        },
        filterTarget: true,
        selectTarget: [1, 3],
        multitarget: true,
        multiline: true,
        content() {
          for (var i of targets) i.addSkill('polongmrfz');
          player.storage.shengyumrfz = true;
          player.recover(2);
        },
        group: 'shengyumrfz_cd',
        ai: {
          order: 10,
          threaten: 2,
          expose: 0.8,
          result: {
            player: 10,
            target: 10,
          },
        },
        subSkill: {
          cd: {
            silent: true,
            charlotte: true,
            forced: true,
            trigger: { global: 'roundStart' },
            filter(event, player) {
              return player.storage.shengyumrfz == true;
            },
            content() {
              'step 0';
              player.addMark('shengyumrfz_cd', false);
              ('step 1');
              if (player.countMark('shengyumrfz_cd') >= 4) {
                player.storage.shengyumrfz = false;
                player.removeMark('shengyumrfz_cd', player.countMark('shengyumrfz_cd'));
              }
            },
          },
        },
      },
      polongmrfz: {
        intro: {
          name: '破笼',
          content(event, player) {
            if (player.countMark('polongmrfz_round') >= 3) return '圣域持续时间:' + player.countMark('polongmrfz_round') + '/3</br><span class=firetext>最后一轮</span>';
            return '圣域持续时间:' + player.countMark('polongmrfz_round') + '/3';
          },
        },
        mark: true,
        audio: 2,
        enable: 'phaseUse',
        usable: 5,
        filter(event, player) {
          if (player.getDamagedHp() == 0 && player.countMark('polongmrfz_mark1') >= 3) return false;
          return game.hasPlayer(function (current) {
            return current.countMark('qiulongmrfz_huan') > 0;
          });
        },
        content() {
          'step 0';
          var list = [];
          if (player.countMark('polongmrfz_mark1') < 3) list.add('摸牌');
          if (player.countMark('polongmrfz_mark2') < 2) list.add('回血');
          if (player.getDamagedHp() != 0) {
            player.chooseControl(list, 'cancel2').set('prompt', get.prompt('polongmrfz')).set('prompt2', '回复一点体力或摸一张牌').ai = function (event, player) {
              if (player.hp == 1 && player.isDamaged()) return '回血';
              return '摸牌';
            };
          } else {
            event.finish();
            player.draw();
            player.addMark('polongmrfz_mark1', false);
            game.countPlayer(function (current) {
              current.removeMark('qiulongmrfz_huan');
            });
          }
          ('step 1');
          if (result.control != 'cancel2') {
            game.countPlayer(function (current) {
              current.removeMark('qiulongmrfz_huan');
            });
            if (result.control == '摸牌') {
              player.draw();
              player.addMark('polongmrfz_mark1', false);
            }
            if (result.control == '回血') {
              player.recover();
              player.addMark('polongmrfz_mark2', false);
            }
          }
        },
        group: ['polongmrfz_damage', 'polongmrfz_remove', 'polongmrfz_round'],
        subSkill: {
          damage: {
            trigger: { player: 'damageBegin3' },
            filter(event, player) {
              return game.hasPlayer(function (current) {
                return current.countMark('qiulongmrfz_huan') > 0;
              });
            },
            check(event, player) {
              return (
                game.hasPlayer(function (current) {
                  return current.countMark('qiulongmrfz_huan') > 3;
                }) || player.hp <= 2
              );
            },
            content() {
              trigger.num--;
              game.countPlayer(function (current) {
                current.removeMark('qiulongmrfz_huan');
              });
            },
          },
          remove: {
            forced: true,
            charlotte: true,
            silent: true,
            trigger: { player: 'phaseUseEnd' },
            filter(event, player) {
              return player.hasMark('polongmrfz_mark1') || player.hasMark('polongmrfz_mark2');
            },
            content() {
              player.removeMark('polongmrfz_mark1', player.countMark('polongmrfz_mark1'));
              player.removeMark('polongmrfz_mark2', player.countMark('polongmrfz_mark2'));
            },
          },
          round: {
            forced: true,
            charlotte: true,
            firstDo: true,
            silent: true,
            trigger: { global: 'roundStart' },
            content() {
              'step 0';
              player.addMark('polongmrfz_round', false);
              ('step 1');
              if (player.countMark('polongmrfz_round') > 3) player.removeSkill('polongmrfz');
            },
          },
          mark1: {},
          mark2: {},
        },
        ai: {
          order: 12,
          threaten: 2,
          result: {
            player: 10,
          },
        },
      },
      //赫拉格
      yingkuimrfz: {
        mod: {
          cardname(card, player) {
            if (card.name == 'tao') return 'sha';
          },
          maxHandcard(player, num) {
            return (num += 2);
          },
        },
        audio: 2,
        forced: true,
        firstDo: true,
        trigger: { player: 'useCard' },
        filter(event, player) {
          if (event.card.name != 'sha') return false;
          return event.card && event.card.cards && event.card.cards.length == 1 && event.card.cards[0].name == 'tao';
        },
        content() {
          trigger.directHit.addArray(
            game.filterPlayer(function (current) {
              return current != player;
            }),
          );
        },
        ai: {
          directHit_ai: true,
          skillTagFilter(player, tag, arg) {
            var cards = arg.card.cards;
            if (arg.card.name != 'sha' || !cards || cards.length != 1) return false;
            if (cards[0].name != 'tao') return false;
            return true;
          },
        },
      },
      yingkuimrfza: {
        audio: 2,
      },
      cangfengmrfz: {
        audio: 2,
        forced: true,
        trigger: { source: 'damageEnd' },
        intro: {
          content: '#/2',
        },
        content() {
          var mark = player.countMark('cangfengmrfz');
          ('step 0');
          player.addMark('cangfengmrfz', trigger.num, false);
          ('step 1');
          if (mark / 2 >= 1 && player.getDamagedHp() > 0) {
            player.chooseControl('摸牌', '回血').set('prompt', '摸一张牌或回一点血');
          } else if (mark / 2 < 1) event.finish();
          ('step 2');
          if (result.control == '回血') player.recover();
          else player.draw();
          player.removeMark('cangfengmrfz', 2);
          ('step 3');
          if (mark / 2 >= 1) event.goto(1);
        },
      },
      yuexiangmrfz: {
        intro: {
          content(event, player) {
            var list = [];
            if (player.getDamagedHp() >= 3) {
              list.push('<span class=firetext>满月</span> <span class=thundertext>弦月 新月</span></br>·你使用【杀】的次数+X(X=本阶段你使用杀的次数/2+1,向下取整);出牌阶段限一次,你第一次使用【杀】造成的伤害+1</br>·出牌阶段使用的第一张【杀】结算两次</br>·出牌阶段你使用的第一张【杀】目标+1;攻击距离+2');
            }
            if (player.getDamagedHp() == 2) {
              list.push('满月 <span class=firetext>弦月</span> <span class=thundertext>新月</span></br>·你使用【杀】的次数+X(X=本阶段你使用杀的次数/2+1,向下取整);出牌阶段限一次,你第一次使用【杀】造成的伤害+1</br>·出牌阶段使用的第一张【杀】结算两次');
            }
            if (player.getDamagedHp() == 1) {
              list.push('满月 弦月 <span class=firetext>新月</span></br>·你使用【杀】的次数+X(X=本阶段你使用杀的次数/2+1,向下取整);出牌阶段限一次,你第一次使用【杀】造成的伤害+1');
            }
            if (player.getDamagedHp() == 0) {
              list.push('满月 弦月 新月');
            }
            return list;
          },
        },
        audio: 3,
        trigger: { player: ['phaseBefore', 'changeHp'] },
        forced: true,
        popup: false,
        mark: true,
        init(player) {
          if (game.online) return;
          player.removeAdditionalSkill('yuexiangmrfz');
          var list = [];
          if (player.getDamagedHp() >= 3) {
            list.push('yuexiangmrfz_man');
          }
          if (player.getDamagedHp() >= 2) {
            list.push('yuexiangmrfz_xian');
          }
          if (player.getDamagedHp() >= 1) {
            list.push('yuexiangmrfz_xin');
          }
          if (list.length) {
            player.addAdditionalSkill('yuexiangmrfz', list);
          }
        },
        content() {
          player.removeAdditionalSkill('yuexiangmrfz');
          var list = [];
          if (player.getDamagedHp() >= 3) {
            list.push('yuexiangmrfz_man');
          }
          if (player.getDamagedHp() >= 2) {
            list.push('yuexiangmrfz_xian');
          }
          if (player.getDamagedHp() >= 1) {
            if (trigger.num != undefined && trigger.num < 0 && player.getDamagedHp() - trigger.num > 1) list.push('yuexiangmrfz_xin');
          }
          if (list.length) {
            player.addAdditionalSkill('yuexiangmrfz', list);
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
              if (get.tag(card, 'recover') && player.hp >= player.maxHp - 2) return [0, 0];
            },
          },
        },
        group: 'yuexiangmrfz_clear',
        subSkill: {
          clear: {
            silent: true,
            forced: true,
            charlotte: true,
            trigger: { player: 'phaseUseEnd' },
            content() {
              player.storage.yuexiangmrfz_man = false;
              if (player.hasMark('yuexiangmrfz_xin')) {
                player.removeMark('yuexiangmrfz_xin', player.countMark('yuexiangmrfz_xin'));
                player.unmarkSkill('yuexiangmrfz_xin');
              }
            },
          },
          man: {
            forced: true,
            charlotte: true,
            firstDo: true,
            trigger: { player: 'shaAfter' },
            filter(event, player) {
              return !player.storage.yuexiangmrfz_man;
            },
            content() {
              player.storage.yuexiangmrfz_man = true;
            },
            mod: {
              selectTarget(card, player, range) {
                if (card.name == 'sha' && range[1] != -1 && !player.storage.yuexiangmrfz_man) range[1]++;
              },
              attackRange(player, num) {
                return (num += 2);
              },
            },
          },
          xian: {
            trigger: { player: 'useCardToTargeted' },
            charlotte: true,
            forced: true,
            popup: false,
            lastDo: true,
            usable: 1,
            filter(event, player) {
              return event.card.name == 'sha' && event.targets.length == event.parent.triggeredTargets4.length;
            },
            content() {
              trigger.parent.targets = trigger.parent.targets.concat(trigger.targets);
              trigger.parent.triggeredTargets4 = trigger.parent.triggeredTargets4.concat(trigger.targets);
            },
          },
          xin: {
            group: 'yuexiangmrfz_xin2',
            mod: {
              cardUsable(card, player, num) {
                if (card.name == 'sha') return (num += Math.floor(player.countMark('yuexiangmrfz_xin') / 2) + 1);
              },
            },
            intro: {
              content(event, player) {
                return '本回合使用【杀】的次数+' + (Math.floor(player.countMark('yuexiangmrfz_xin') / 2) + 1);
              },
            },
            forced: true,
            trigger: { player: 'shaAfter' },
            content() {
              player.addMark('yuexiangmrfz_xin');
            },
          },
          xin2: {
            forced: true,
            trigger: { source: 'damageBegin3' },
            usable: 1,
            filter(event, player) {
              return event.card && event.card.name == 'sha';
            },
            content() {
              trigger.num++;
            },
          },
        },
      },
      //温蒂
      danpaomrfz: {
        intro: {
          content: '【氮炮】剩余次数:#',
        },
        init(player) {
          player.addMark('danpaomrfz', 2);
        },
        audio: 2,
        enable: 'phaseUse',
        usable: 1,
        filterTarget(card, player, target) {
          return target != player;
        },
        selectTarget: 1,
        filter(event, player) {
          return player.countMark('danpaomrfz') > 0 && player.countCards('he') > 0;
        },
        content() {
          'step 0';
          if (player.countCards('h') > 0) player.chooseToDiscard('h', true, player.countCards('h'));
          else player.chooseToDiscard('he', true, player.countCards('he'));
          ('step 1');
          target.damage();
          if (player.hasMark('shuipaomrfz')) {
            player.removeMark('shuipaomrfz');
            target.addSkill('danpaomrfz_plus');
          } else target.addSkill('danpaomrfz_nor');
          ('step 2');
          player.removeMark('danpaomrfz');
        },
        group: 'danpaomrfz_damage',
        subSkill: {
          plus: {
            intro: {
              content: '计算与其他角色距离+4;每使用一张牌受到一点伤害',
            },
            mark: true,
            mod: {
              globalFrom(from, to, distance) {
                return distance + 4;
              },
            },
            silent: true,
            forced: true,
            firstDo: true,
            trigger: { player: 'phaseEnd' },
            content() {
              player.removeSkill('danpaomrfz_plus');
            },
          },
          nor: {
            intro: {
              content: '计算与其他角色距离+2;每使用两张牌受到一点伤害',
            },
            mark: true,
            mod: {
              globalFrom(from, to, distance) {
                return distance + 2;
              },
            },
            silent: true,
            forced: true,
            firstDo: true,
            trigger: { player: 'phaseEnd' },
            content() {
              player.removeSkill('danpaomrfz_nor');
            },
          },
          damage: {
            forced: true,
            trigger: { global: 'useCard' },
            filter(event, player) {
              return event.player.hasSkill('danpaomrfz_nor') || event.player.hasSkill('danpaomrfz_plus');
            },
            content() {
              var target = trigger.player;
              ('step 0');
              if (target.hasSkill('danpaomrfz_nor')) {
                target.addMark('danpaomrfz_nor');
              } else {
                target.damage('player');
                event.finish();
              }
              ('step 1');
              if (target.countMark('danpaomrfz_nor') >= 2) {
                target.damage('player');
                target.removeMark('danpaomrfz_nor', 2);
              } else event.finish();
            },
          },
        },
        ai: {
          order: 1,
          result: {
            player(player, target, card) {
              var cardh = player.getCards('h'),
                carde = player.getCards('e');
              if (cardh.length == 0 && carde.length && carde.length < 2) return 1;
              if (cardh.length > 3) return -1;
              for (var i = 0; i < cardh.length; i++) {
                if (get.value(cardh[i]) > 8) return 0.5;
              }
            },
            target(player, target) {
              return get.damageEffect(target, player);
            },
          },
        },
      },
      shuipaomrfz: {
        marktext: '蓄水',
        intro: {
          name: '蓄水',
          content: '蓄水炮蓄水完毕</br>·【氮炮】中蓝色数字翻倍,红色数字-1</br>·【水炮①】中‘+1’改为‘+2’',
        },
        init(player) {
          player.storage.shuipaomrfz = true;
        },
        audio: 2,
        forced: true,
        trigger: { source: 'damageBegin3' },
        filter(event, player) {
          return player.getEquip(1) && !player.hasMark('shuipaomrfz') && event.parent.name != 'danpaomrfz';
        },
        content() {
          player.addMark('shuipaomrfz');
        },
        group: 'shuipaomrfz_j',
        subSkill: {
          j: {
            intro: {
              content(event, player) {
                if (player.hasSkill('shuipaomrfz_j2')) return '计算与其他角色的距离+2';
                return '计算与其他角色的距离+1';
              },
            },
            forced: true,
            charlotte: true,
            trigger: { source: 'damageEnd' },
            filter(event, player) {
              return !event.player.hasMark('shuipaomrfz_j') && event.player != player && event.parent.name != 'danpaomrfz';
            },
            content() {
              if (player.hasMark('shuipaomrfz')) trigger.player.addSkill('shuipaomrfz_j2');
              else trigger.player.addSkill('shuipaomrfz_j3');
              trigger.player.addMark('shuipaomrfz_j');
            },
          },
          j2: {
            charlotte: true,
            forced: true,
            silent: true,
            firstDo: true,
            trigger: { player: 'phaseEnd' },
            content() {
              player.removeMark('shuipaomrfz_j');
              player.removeSkill('shuipaomrfz_j2');
            },
            mod: {
              globalFrom(from, to, distance) {
                return distance + 1;
              },
            },
          },
          j3: {
            charlotte: true,
            forced: true,
            silent: true,
            firstDo: true,
            trigger: { player: 'phaseEnd' },
            content() {
              player.removeMark('shuipaomrfz_j');
              player.removeSkill('shuipaomrfz_j3');
            },
            mod: {
              globalFrom(from, to, distance) {
                return distance + 2;
              },
            },
          },
        },
      },
      jiepimrfz: {
        mod: {
          canBeDiscarded(card) {
            if (get.position(card) == 'e') return false;
          },
        },
        global: 'jiepimrfz2',
      },
      jiepimrfz2: {
        mod: {
          canBeDiscarded(card) {
            if (get.position(card) == 'e' && _status.currentPhase.isAlive() && _status.currentPhase.hasSkill('jiepimrfz')) return false;
          },
        },
      },
      //森蚺
      juezhanmrfz: {
        mod: {
          selectTarget(card, player, range) {
            if (lib.skill.juezhanmrfz.isJuezhan(card) && card.name != 'jiedao') range[1] = 1;
          },
        },
        isJuezhan(card) {
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
        marktext: '单挑',
        intro: {
          name: '单挑',
          content: '和森蚺决一死战吧!',
        },
        audio: 2,
        forced: true,
        trigger: { target: 'useCardToTargeted' },
        filter(event, player) {
          return event.card.name == 'sha' && !event.player.hasMark('juezhanmrfz');
        },
        content() {
          trigger.player.addMark('juezhanmrfz');
          trigger.player.addSkill('juezhanmrfz_ta');
        },
        group: 'juezhanmrfz_pl',
        subSkill: {
          ta: {
            mod: {
              playerEnabled(card, player, target) {
                if (!target.hasSkill('juezhanmrfz') && target != player) {
                  return false;
                }
              },
              inRangeOf(from, to) {
                if (from.hasSkill('juezhanmrfz')) return true;
              },
            },
            charlotte: true,
            forced: true,
            silent: true,
            trigger: {
              global: ['phaseEnd', 'die'],
            },
            filter(event, player) {
              return event.player.hasSkill('juezhanmrfz');
            },
            content() {
              player.removeMark('juezhanmrfz');
              player.removeSkill('juezhanmrfz_ta');
            },
          },
          pl: {
            mod: {
              playerEnabled(card, player, target) {
                if (
                  !target.hasMark('juezhanmrfz') &&
                  target != player &&
                  game.hasPlayer(function (current) {
                    return current.countMark('juezhanmrfz') > 0;
                  })
                ) {
                  return false;
                }
              },
              inRangeOf(from, to) {
                if (from.hasMark('juezhanmrfz')) return true;
              },
            },
          },
        },
      },
      shanxiemrfz: {
        audio: 2,
        trigger: { global: 'loseAfter' },
        filter(event, player) {
          if (player.countMark('shanxiemrfz') > player.countCards('h')) return false;
          if (event.type != 'discard' || event.getlx === false) return false;
          var cards = event.cards.slice(0);
          var evt = event.getl(player);
          if (evt && evt.cards) cards.removeArray(evt.cards);
          if (Array.isArray(cards))
            for (var i of cards) {
              if (i.original != 'j' && get.type(i, event.player) == 'equip' && get.position(i, true) == 'd') {
                return true;
              }
            }
          return false;
        },
        forced: true,
        content() {
          'step 0';
          if (player.countCards('h') >= player.countMark('shanxiemrfz') && player.countMark('shanxiemrfz') > 0) {
            player.chooseToDiscard(get.prompt('shanxiemrfz'), '你可以弃置' + get.cnNumber(player.countMark('shanxiemrfz')) + '张牌获得此装备牌', false, player.countMark('shanxiemrfz')).set('ai', function (card) {
              return 6 - get.value(card);
            });
          } else if (player.countMark('shanxiemrfz') == 0) event.goto(2);
          ('step 1');
          if (!result.cards) event.finish();
          ('step 2');
          var cards = [],
            cards2 = trigger.cards.slice(0),
            evt = trigger.getl(player);
          if (evt && evt.cards) cards2.removeArray(evt.cards);
          for (var i = 0; i < cards2.length; i++) {
            if (cards2[i].original != 'j' && get.type(cards2[i], trigger.player) == 'equip' && get.position(cards2[i], true) == 'd') {
              cards.push(cards2[i]);
            }
          }
          event.num = cards.length;
          if (cards.length) {
            player.chooseButton(['擅械:请选择获得一张牌', cards], 1).set('ai', function (button) {
              return get.value(button.link, _status.event.player, 'raw');
            });
          }
          ('step 3');
          if (result.bool) {
            event.num--;
            player.gain(result.links, 'gain2', 'log');
            player.addMark('shanxiemrfz', false);
            if (event.num > 0) event.goto(0);
          }
        },
        group: ['shanxiemrfz_sha', 'shanxiemrfz_usesha', 'shanxiemrfz_remove'],
        subSkill: {
          sha: {
            audio: 'shanxiemrfz',
            enable: ['chooseToRespond', 'chooseToUse'],
            filterCard(card, player) {
              return get.type(card) == 'equip';
            },
            position: 'hes',
            viewAs: { name: 'sha' },
            prompt: '将一张装备牌当杀使用或打出',
            check(card) {
              var val = get.value(card);
              if (_status.event.name == 'chooseToRespond') return 1 / Math.max(0.1, val);
              return 10 - val;
            },
            ai: {
              skillTagFilter(player, tag, arg) {
                if (get.type(arg.card) != 'equip') return false;
              },
              respondSha: true,
            },
          },
          usesha: {
            trigger: { source: 'damageBegin3' },
            filter(event, player) {
              return event.card && event.card.name == 'sha' && event.player.hasMark('juezhanmrfz') && get.type(event.cards[0], 'equip') == 'equip';
            },
            forced: true,
            content() {
              trigger.num++;
            },
          },
          remove: {
            silent: true,
            charlotte: true,
            forced: true,
            trigger: { global: 'roundStart' },
            content() {
              player.removeMark('shanxiemrfz', player.countMark('shanxiemrfz'));
            },
          },
        },
        ai: {
          threaten: 2,
        },
      },
      tieyimrfz: {
        audio: 2,
        enable: 'phaseUse',
        mark: true,
        limited: true,
        selectCard: [0, 3],
        filterCard: true,
        position: 'h',
        prompt: '弃置至多三张手牌,摸两倍于你弃置牌的牌',
        delay: 0,
        check(card) {
          return 6 - get.value(card) && card.name != 'sha' && get.type(card) != 'equip';
        },
        init(player) {
          player.storage.tieyimrfz = false;
        },
        filter(event, player) {
          return !player.storage.tieyimrfz;
        },
        content() {
          'step 0';
          player.node.avatar.setBackgroundImage('extension/驶舰之向/image/orther/senrantieyumrfz.jpg');
          player.node.name.innerHTML = get.translation('senrantieyumrfz');
          player.draw(cards.length * 2);
          player.recover(2);
          player.turnOver();
          player.storage.tieyimrfz = true;
          ('step 1');
          if (
            game.hasPlayer((current) => {
              return current != player && !current.hasMark('juezhanmrfz');
            })
          )
            player.chooseTarget(true, function (card, player, target) {
              return target != player && !target.hasMark('juezhanmrfz');
            }).ai = function (target) {
              return -get.attitude(player, target);
            };
          else event.goto(3);
          ('step 2');
          if (result.targets?.length) {
            var target = result.targets[0];
            target.addSkill('juezhanmrfz_ta');
            target.addMark('juezhanmrfz');
          }
          ('step 3');
          player.addTempSkill('tieyimrfz_use');
          player.addTempSkill('tieyimrfz_discard');
          player.addSkill('tieyimrfz_back');
        },
        intro: {
          content: 'limited',
        },
        subSkill: {
          back: {
            charlotte: true,
            silent: true,
            trigger: { player: ['dying', 'phaseEnd'] },
            content() {
              player.node.avatar.setBackgroundImage('extension/驶舰之向/image/senranmrfz.jpg');
              player.node.name.innerHTML = get.translation('senranmrfz');
              player.removeSkill('tieyimrfz_back');
            },
          },
          discard: {
            forced: true,
            trigger: { player: 'phaseEnd' },
            filter(event, player) {
              return player.countCards('h') > 0;
            },
            content() {
              player.chooseToDiscard(true, player.countCards('h'));
            },
          },
          use: {
            charlotte: true,
            mod: {
              cardUsableTarget(card, player, target) {
                if (target.hasMark('juezhanmrfz')) return true;
              },
            },
          },
        },
        ai: {
          order: 13,
          threaten: 3,
          expose: 0.9,
          result: {
            target(player, target) {
              var hs1 = player.countCards('h', function (card) {
                return card.name == 'sha';
              });
              var hs2 = player.countCards('he', function (card) {
                return get.type(card) == 'equip';
              });
              if (hs1 + 2 * hs2 > 4) return -1;
              return 0;
            },
          },
        },
      },
      //ASH灰烬
      wusumrfz: {
        intro: {
          content(event, player) {
            if (player.countMark('wusumrfz') == 0) return 'Ash已化身监控室大爷';
            return 'FBI突击中</br>距离ASH白给还剩' + (5 - player.countMark('wusumrfz')) + '个阶段';
          },
        },
        mark: true,
        audio: 2,
        trigger: {
          player: ['phaseZhunbeiBefore', 'phaseJudgeBefore', 'phaseDrawBefore', 'phaseDiscardBefore', 'phaseJieshuBefore'],
        },
        forced: true,
        filter(event, player) {
          return event.getParent('phase');
        },
        content() {
          trigger.cancel();
          var next = trigger.player.phaseUse();
          event.next.remove(next);
          trigger.getParent('phase').next.push(next);
          player.addMark('wusumrfz');
        },
        group: 'wusumrfz_draw',
        subSkill: {
          draw: {
            forced: true,
            trigger: { player: 'phaseUseBegin' },
            content() {
              player.draw();
            },
          },
        },
        ai: {
          effect: {
            target(card, player, target, current) {
              if (get.type(card) == 'delay') return 'zeroplayertarget';
            },
          },
        },
      },
      wutoumrfz: {
        audio: 2,
        forced: true,
        trigger: { player: 'damageBegin3' },
        filter(event, player) {
          return !player.storage.wutoumrfz;
        },
        content() {
          if (player.storage.wutoumrfz) {
            player.storage.wutoumrfz = true;
            trigger.cancel();
          }
        },
      },
      baigeimrfz: {
        audio: 2,
        forced: true,
        trigger: { player: 'phaseUseEnd' },
        filter(event, player) {
          return player.countMark('wusumrfz') >= 5;
        },
        content() {
          if (player.countMark('wusumrfz') >= 5) {
            var num = player.countCards('h') - player.getHandcardLimit();
            var chattext = ['窗下怎么会有个夹子？', '为什么会有人放站位edd!', '(Ash听到的敌方干员的声音)call a pizza!', '(狼人手枪的枪声)女鬼:"talk"', '(剃刀花的声音)', '(两个蛊声,三条枪线)', '(发射祖母榴弹->rush->火山盾炸裂的声音)', '<友军已将你击杀>'].randomGet();
            if (num > 0) {
              player.chooseToDiscard('h', num, true, `弃置${get.cnNumber(num)}张手牌`);
            }
            player.chooseToDiscard('he', 2, true, '弃置两张牌');
            player.removeMark('wusumrfz', 5);
            player.chat(chattext);
          }
        },
      },
      //异客
      shazumrfz: {
        marktext: '仇敌',
        intro: {
          name: '仇敌',
          content: '沙卒盯上你了',
        },
        audio: 2,
        enable: 'phaseUse',
        usable: 1,
        filter(event, player) {
          return player.countCards('he') > 0;
        },
        filterTarget(card, player, target) {
          return target.countCards('he') > 0 && target != player;
        },
        content() {
          'step 0';
          player.chooseCard('he', true);
          ('step 1');
          event.cardp = result.cards[0];
          if (target.countCards('e') > 0) target.chooseCard('e', true);
          else target.chooseCard('h', true);
          ('step 2');
          if (!result.bool) event.finish();
          else {
            event.cardt = result.cards[0];
          }
          ('step 3');
          player.swapHandcards(target, [event.cardp], [event.cardt]);
          ('step 4');
          var numt = target.countCards('h');
          var nump = player.countCards('h');
          if (numt == nump) event.finish();
          if (numt > nump) player.draw();
          else if (nump > numt) target.draw();
        },
        group: 'shazumrfz_damage',
        subSkill: {
          damage: {
            audio: 'shazumrfz',
            trigger: { player: 'damageEnd' },
            filter(event, player) {
              return event.source != undefined && !event.source.hasMark('shazumrfz') && event.source != player;
            },
            logTarget: 'source',
            content() {
              if (
                game.hasPlayer(function (current) {
                  return current.hasMark('shazumrfz');
                })
              ) {
                game.hasPlayer(function (current) {
                  return current.removeMark('shazumrfz');
                });
                trigger.source.addMark('shazumrfz');
              } else trigger.source.addMark('shazumrfz');
            },
          },
        },
        ai: {
          threaten: 1.1,
          order: 8,
          result: {
            player(player, target) {
              if (get.attitude(player, target) > 0) return 1.5;
              return 0.5;
            },
            target(player, target) {
              if (get.attitude(player, target) < 2 && target.countCards('e') > 0 && target.countCards('h') > player.countCards('h')) return -1;
              return 0.5;
            },
          },
        },
      },
      dianlianmrfz: {
        audio: 2,
        trigger: { source: 'damageSource' },
        filter(event, player) {
          if (event.num <= 1) return false;
          return (
            event.player != player &&
            event.player.isAlive() &&
            game.hasPlayer(function (current) {
              return current != event.player && get.distance(event.player, current) <= 1 && current != player;
            })
          );
        },
        check(event, player) {
          if (
            game.hasPlayer(function (current) {
              return current != player && get.attitude(player, current) < 0 && current != event.player;
            })
          )
            return true;
          return false;
        },
        content() {
          'step 0';
          player.chooseTarget(true, '选择一名与' + get.translation(trigger.player) + '距离为1的角色并对其造成' + (trigger.num - 1) + '点伤害', function (card, player, target) {
            var damaged = trigger.player;
            return get.distance(damaged, target) <= 1 && target != damaged && target != player;
          }).ai = function (target) {
            return -get.attitude(player, target);
          };
          ('step 1');
          var num = trigger.num - 1;
          if (result.targets?.length) {
            var target = result.targets[0];
            target.damage('player', trigger.num - 1);
          }
        },
        group: 'dianlianmrfz_damage',
        subSkill: {
          damage: {
            audio: 'dianlianmrfz',
            trigger: { source: 'damageBegin3' },
            check(event, player) {
              return get.attitude(player, event.player) < 0;
            },
            filter(event, player) {
              return event.nature == 'thunder' && !player.storage.dianlianmrfz;
            },
            prompt: '是否令此伤害+1',
            content() {
              trigger.num++;
              player.storage.dianlianmrfz = true;
              player.addSkill('dianlianmrfz_remove');
            },
          },
          remove: {
            charlotte: true,
            forced: true,
            silent: true,
            trigger: { global: 'roundStart' },
            content() {
              player.storage.dianlianmrfz = false;
              player.removeSkill('dianlianmrfz_remove');
            },
          },
        },
      },
      leibaomrfz: {
        audio: 2,
        enable: 'phaseUse',
        usable: 1,
        selectTarget: 1,
        filterTarget(card, player, target) {
          if (target == player) return false;
          return (
            !game.hasPlayer(function (current) {
              return current != player && current.hp > target.hp;
            }) || target.hasMark('shazumrfz')
          );
        },
        filter(event, player) {
          return (
            player.getCards('he', function (card) {
              return get.type(card) == 'equip';
            }).length >= 2 || player.countCards('h', 'shandian')
          );
        },
        content() {
          'step 0';
          player
            .chooseToDiscard('he', true, function (card, player) {
              if (
                player.getCards('he', function (card) {
                  return get.type(card) == 'equip';
                }).length >= 2
              )
                return get.type(card) == 'equip' || card.name == 'shandian';
              return card.name == 'shandian';
            })
            .set('prompt', '请弃置一张【闪电】,或依次弃置两张装备牌.');
          ('step 1');
          if (result.cards[0].name != 'shandian') {
            player
              .chooseToDiscard('he', true, function (card, player) {
                return get.type(card) == 'equip';
              })
              .set('prompt', '请弃置一张装备牌.');
            target.damage('player', 2);
          } else target.damage('player', 2, 'thunder');
        },
        ai: {
          threaten: 1.2,
          order: 13,
          result: {
            target: -1,
          },
        },
      },
      //年
      zhujimrfz: {
        audio: 2,
        trigger: {
          player: ['phaseDrawAfter', 'phaseJieshuAfter'],
        },
        forced: true,
        filter(event, player) {
          return player.countCards('he') > 0;
        },
        content() {
          'step 0';
          player.chooseToDiscard('he', get.prompt('zhujimrfz'), '【铸极】:你可以重铸一张牌').set('ai', function (card) {
            return 6 - get.value(card);
          });
          ('step 1');
          if (result.cards?.length) player.draw();
          if (result.cards && get.type(result.cards[0]) == 'equip') {
            player.draw();
          } else if (result.cards?.length) {
          }
        },
      },
      tongyinmrfz: {
        audio: 2,
        trigger: { player: 'damageEnd' },
        filter(event, player) {
          return event.source != undefined && event.source != player;
        },
        usable: 1,
        logTarget: 'source',
        check(event, player) {
          return get.attitude(player, event.source) < 2;
        },
        content() {
          'step 0';
          if (!trigger.source.hasSkill('fengyin')) {
            trigger.source.addTempSkill('fengyin');
          }
          ('step 1');
          trigger.source.chooseToDiscard('he', true, '【铜印】:请选择弃置一张非基本或' + get.translation(Math.min(player.getDamagedHp() + 1, 1)) + '张基本牌');
          if (player.getDamagedHp() < 2) event.finish();
          ('step 2');
          if (result.cards && get.type(result.cards[0]) == 'basic') {
            trigger.source
              .chooseToDiscard(true, '【铜印】:请选择弃置' + get.translation(player.getDamagedHp() - 1) + '张基本牌', [1, player.getDamagedHp() - 1], function (card) {
                return get.type(card) == 'basic';
              })
              .set('ai', function (card) {
                return 6 - get.value(card);
              });
          }
        },
        ai: {
          threaten: 0.5,
          expose: 0.4,
        },
      },
      tieyumrfz: {
        intro: {
          content: '使用【杀】的次数+#;可令大于一的伤害改为一#次',
        },
        audio: 2,
        trigger: { global: 'useCard' },
        filter(event, player) {
          return player.countMark('tieyumrfz_clear2') < 2 && get.type(event.card) == 'equip';
        },
        check(event, player) {
          return get.attitude(player, event.player) > 2;
        },
        content() {
          if (trigger.player.getDamagedHp() > 0) trigger.player.recover();
          else trigger.player.changeHujia();
          trigger.player.addSkill(['tieyumrfz_sha', 'tieyumrfz_damage', 'tieyumrfz_clear']);
          trigger.player.addMark('tieyumrfz');
          player.addMark('tieyumrfz_clear2', false);
        },
        group: 'tieyumrfz_clear2',
        subSkill: {
          sha: {
            charlotte: true,
            mod: {
              cardUsable(card, player, num) {
                if (card.name == 'sha') return num + player.countMark('tieyumrfz');
              },
            },
          },
          damage: {
            forced: true,
            trigger: { player: 'damageBegin3' },
            filter(event, player) {
              return event.num > 1 && player.countMark('tieyumrfz_damage') < player.countMark('tieyumrfz');
            },
            content() {
              trigger.num = 1;
              player.addMark('tieyumrfz_damage');
            },
          },
          clear: {
            silent: true,
            forced: true,
            charlotte: true,
            firstDo: true,
            trigger: { global: 'roundStart' },
            content() {
              player.removeSkill('tieyumrfz_damage');
              player.removeSkill('tieyumrfz_sha');
              player.removeSkill('tieyumrfz_clear');
              player.removeMark('tieyumrfz', player.countMark('tieyumrfz'));
              player.removeMark('tieyumrfz_damage', player.countMark('tieyumrfz_damage'));
            },
          },
          clear2: {
            silent: true,
            forced: true,
            charlotte: true,
            trigger: { global: 'roundStart' },
            filter(event, player) {
              return player.hasMark('tieyumrfz_clear2');
            },
            content() {
              player.removeMark('tieyumrfz_clear2', player.countMark('tieyumrfz_clear2'));
            },
          },
        },
        ai: {
          threaten: 1.2,
          expose: 0.8,
        },
      },
      //令
      shixingmrfz: {
        intro: {
          content: 'expansion',
          markcount: 'expansion',
        },
        onremove(player, skill) {
          var cards = player.getExpansions(skill);
          if (cards.length) player.loseToDiscardpile(cards);
        },
        mark: true,
        audio: 6,
        trigger: { player: 'phaseZhunbeiBegin' },
        filter(event, player) {
          return player.countCards('he') > 0;
        },
        check(event, player) {
          if (
            player.getExpansions('shixingmrfz').filter(function (magic) {
              return get.type2(magic) == 'equip';
            }).length &&
            player.hasCard(function (card) {
              return get.type(card) == 'equip';
            }).length
          )
            return true;
          if (player.countCards('h') < 3 && player.getExpansions('shixingmrfz').length) return false;
          return true;
        },
        content() {
          'step 0';
          //牌小于2且大于0则选择
          if (player.getExpansions('shixingmrfz').length <= 1 && player.getExpansions('shixingmrfz').length)
            player
              .chooseControl('弃置', '增加')
              .set('prompt', '选择弃置所有置于武将牌上的牌或往武将牌上放置牌')
              .set('ai', function (event, player) {
                var num = Math.random();
                if (
                  player.getExpansions('shixingmrfz').filter(function (magic) {
                    return get.type2(magic) == 'equip';
                  }).length &&
                  player.countCards('h') < 4
                )
                  return 1;
                if (num <= 0.6) return 0;
                return 1;
              });
          //牌为0则跳到第四步
          else if (player.getExpansions('shixingmrfz').length == 0) event.goto(4);
          ('step 1');
          if (result.control == '弃置' || player.getExpansions('shixingmrfz').length > 1) {
            //弦惊判定
            event.num = 0;
            //清平弃置
            if (
              player.getExpansions('shixingmrfz').filter(function (magic) {
                return get.type2(magic) == 'basic';
              }).length
            )
              player.gain(
                get.cardPile(function (card) {
                  return get.type(card) == 'basic';
                }),
                'gain2',
              );
            //弦惊选角色
            if (
              player.getExpansions('shixingmrfz').filter(function (magic) {
                return get.type2(magic) == 'equip';
              }).length
            ) {
              event.num++;
              player.chooseTarget('【诗型】:弃置一名其他角色的一张牌', false, function (card, target, player) {
                return target != player;
              }).ai = function (target) {
                return -get.attitude(_status.event.player, target);
              };
            }
            //逍遥弃置
            if (
              player.getExpansions('shixingmrfz').filter(function (magic) {
                return get.type2(magic) == 'trick';
              }).length
            ) {
              player.draw();
              player.recover();
            }
          }
          if (result.control == '增加') event.goto(4);
          ('step 2');
          //弦惊弃置
          if (result.bool && event.num == 1) {
            player.discardPlayerCard(result.targets[0], 'he', true);
          }
          ('step 3');
          player.loseToDiscardpile(player.getExpansions('shixingmrfz'));
          ('step 4');
          //放置牌到武将牌上
          if (
            !player.getExpansions('shixingmrfz').length ||
            player.hasCard(function (card) {
              return player.getExpansions('shixingmrfz').filter(function (magic) {
                return get.type2(magic) == get.type2(card);
              }).length;
            }, 'he')
          )
            player.chooseCard('he', '依次将最多两张牌至于武将牌上', function (card, player) {
              if (player.getExpansions('shixingmrfz').length)
                return player.getExpansions('shixingmrfz').filter(function (magic) {
                  return get.type2(magic) == get.type2(card);
                }).length;
              return true;
            });
          else event.finish();
          ('step 5');
          if (result.cards?.length) {
            player.addToExpansion(result.cards, player, 'giveAuto').gaintag.add('shixingmrfz');
          }
          if (result.cards && player.getExpansions('shixingmrfz').length < 1) event.goto(4);
        },
        group: ['shixingmrfz_basic', 'shixingmrfz_trick', 'shixingmrfz_equip'],
        subSkill: {
          //清平
          basic: {
            audio: 'shixingmrfz',
            trigger: { player: 'damageBegin' },
            filter(event, player) {
              return player.getExpansions('shixingmrfz').filter(function (magic) {
                return get.type2(magic) == 'basic';
              }).length;
            },
            content() {
              var cards = player.getExpansions('shixingmrfz');
              ('step 0');
              if (cards.length) player.chooseButton(['选择移去一张<清平>', cards], true);
              else event.finish();
              ('step 1');
              if (result.links?.length) player.loseToDiscardpile(result.links);
              trigger.num--;
              player.popup('清平');
              game.log(player, '移去了一张‘清平’');
              ('step 2');
              event.card = get.cardPile(function (card) {
                return get.type(card) == 'basic';
              });
              if (
                player.getExpansions('shixingmrfz').filter(function (magic) {
                  return get.type2(magic) == 'basic';
                }).length < 1
              )
                player.gain(event.card, 'gain2');
            },
          },
          //弦惊
          equip: {
            audio: 'shixingmrfz',
            forced: true,
            trigger: { player: 'phaseDrawBegin2' },
            filter(event, player) {
              return (
                player.getExpansions('shixingmrfz').filter(function (magic) {
                  return get.type2(magic) == 'equip';
                }).length > 1
              );
            },
            content() {
              trigger.num += 2;
              player.popup('弦惊');
            },
            mod: {
              maxHandcard(player, num) {
                if (
                  player.getExpansions('shixingmrfz').filter(function (magic) {
                    return get.type2(magic) == 'equip';
                  }).length
                )
                  return num + 2;
              },
              cardUsable(card, player, num) {
                if (
                  card.name == 'sha' &&
                  player.getExpansions('shixingmrfz').filter(function (magic) {
                    return get.type2(magic) == 'equip';
                  }).length > 1
                )
                  return num + 2;
              },
            },
          },
          //逍遥
          trick: {
            audio: 'shixingmrfz',
            enable: 'phaseUse',
            filter(event, player) {
              return (
                player.getExpansions('shixingmrfz').filter(function (magic) {
                  return get.type2(magic) == 'trick';
                }).length && event.filterCard({ name: 'sha' }, player, event)
              );
            },
            chooseButton: {
              dialog(event, player) {
                return ui.create.dialog('逍遥', player.getExpansions('shixingmrfz'), 'hidden');
              },
              backup(links, player) {
                return {
                  filterCard() {
                    return false;
                  },
                  selectCard: -1,
                  filterTarget(card, player, target) {
                    return target != player && player.inRange(target);
                  },
                  card: links[0],
                  content: lib.skill.shixingmrfz_trick.contentx,
                  ai: {
                    order: 8,
                    respondSha: true,
                    result: {
                      target: -1,
                    },
                  },
                };
              },
              prompt() {
                return '请选择【杀】的目标';
              },
            },
            contentx() {
              var card = lib.skill.shixingmrfz_trick_backup.card;
              ('step 0');
              player.addTempSkill('shixingmrfz_damage', 'shaEnd');
              player.addTempSkill('shixingmrfz_sha', 'useCardAfter');
              ('step 1');
              player.useCard({ name: 'sha' }, true, target);
              game.log(player, '视为对', target, '使用【杀】');
              ('step 2');
              if (!player.storage.shixingmrfz_damage) {
                player.loseToDiscardpile(card);
              } else {
                player.gain(card, 'gain2');
                player.storage.shixingmrfz_damage = false;
              }
              ('step 3');
              if (
                player.getExpansions('shixingmrfz').filter(function (magic) {
                  return get.type2(magic) == 'trick';
                }).length < 1
              ) {
                player.recover();
                player.draw();
              }
            },
            ai: {
              respondSha: true,
              order: 4,
              skillTagFilter(player, tag, arg) {
                if (
                  player.getExpansions('shixingmrfz').filter(function (magic) {
                    return get.type2(magic) == 'trick';
                  }).length < 1
                )
                  return false;
                if (arg != 'use') return false;
              },
              result: {
                player: 1,
              },
            },
          },
          damage: {
            forced: true,
            trigger: { player: 'shaMiss' },
            silent: true,
            charlotte: true,
            content() {
              player.storage.shixingmrfz_damage = true;
            },
          },
          sha: {
            forced: true,
            silent: true,
            trigger: { player: 'useCard' },
            filter(event, player) {
              return event.card && event.card.name == 'sha';
            },
            content() {
              if (trigger.addCount !== false) {
                trigger.addCount = false;
                player.getStat().card.sha--;
              }
            },
          },
        },
        ai: {
          threaten(player) {
            if (
              player.getExpansions('shixingmrfz').filter(function (magic) {
                return get.type2(magic) == 'basic';
              }).length
            )
              return 0.8;
            return 1.2;
          },
        },
      },
      zuimengmrfz: {
        audio: 2,
        enable: 'phaseUse',
        mark: true,
        limited: true,
        init(player) {
          player.storage.zuimengmrfz = false;
        },
        filter(event, player) {
          return !player.storage.zuimengmrfz && player.countCards('h', 'jiu') > 0;
        },
        content() {
          'step 0';
          player.storage.zuimengmrfz = true;
          player.chooseToUse(
            true,
            function (card, player, event) {
              return card.name == 'jiu';
            },
            '使用一张【酒】',
          );
          event.num = 0;
          ('step 1');
          if (event.num < game.countPlayer()) {
            event.num++;
            player
              .chooseTarget(true, '【醉梦' + event.num + '/' + game.countPlayer() + '】:选择一名角色,获得其区域内一张牌', function (card, player, target) {
                return target.countMark('zuimengmrfz_remove') < 2;
              })
              .set('ai', function (target) {
                var player = _status.event.player;
                var att = get.attitude(player, target);
                if (att < 0) {
                  att = -Math.sqrt(-att);
                } else {
                  att = Math.sqrt(att);
                }
                return att * lib.card.shunshou.ai.result.target(player, target);
              });
          } else {
            if (player.countCards('h') < game.countPlayer()) player.drawTo(game.countPlayer());
            event.finish();
            event.getParent('phaseUse').skipped = true;
            player.addTempSkill('zuimengmrfz_skip');
          }
          ('step 2');
          if (result.targets?.length) {
            var target = result.targets[0];
            if (!target.hasSkill('zuimengmrfz_remove')) target.addTempSkill('zuimengmrfz_remove');
            player.gainPlayerCard('hej', target, true);
            target.addMark('zuimengmrfz_remove', false);
            event.goto(1);
          }
        },
        subSkill: {
          remove: {
            silent: true,
            forced: true,
            charlotte: true,
            trigger: { global: 'phaseEnd' },
            content() {
              player.removeMark('zuimengmrfz_remove', player.countMark('zuimengmrfz_remove'));
            },
          },
          skip: {
            forced: true,
            charlotte: true,
            silent: true,
            trigger: { player: 'phaseDiscardBefore' },
            content() {
              trigger.cancel();
            },
          },
        },
        ai: {
          order: 6,
          threaten: 0.6,
          expose: 0.6,
          result: {
            player: 1,
          },
        },
      },
      haojiumrfz: {
        audio: 2,
        trigger: { player: 'useCard' },
        forced: true,
        filter(event, player) {
          return event.card.name == 'jiu' && player.getDamagedHp() > 0;
        },
        content() {
          player.recover();
        },
        mod: {
          cardUsable(card, player, num) {
            if (card.name == 'jiu') return Infinity;
          },
        },
      },
      //风笛
      juntongmrfz: {
        audio: 4,
        forced: true,
        trigger: { global: 'roundStart' },
        content() {
          player.draw(3);
        },
        mod: {
          maxHandcard(player, num) {
            return num - 1;
          },
        },
        group: ['juntongmrfz_ban', 'juntongmrfz_sha'],
        subSkill: {
          ban: {
            charlotte: true,
            forced: true,
            trigger: {
              player: ['phaseJudgeBefore', 'phaseDrawBefore'],
            },
            content() {
              trigger.cancel();
            },
          },
          sha: {
            audio: 'juntongmrfz',
            trigger: { player: 'useCard2' },
            filter(event, player) {
              return event.card && event.card.name == 'sha';
            },
            content() {
              'step 0';
              player.judge(function (card) {
                var suit = card.suit;
                if (suit == 'heart' || suit == 'diamond' || suit == 'spade') return -4;
                return 0;
              }).judge2 = function (result) {
                return result.bool == false ? true : false;
              };
              ('step 1');
              if (result.suit == 'diamond') {
                if (trigger.addCount !== false) {
                  trigger.addCount = false;
                  player.getStat().card.sha--;
                }
                event.finish();
              }
              if (result.suit == 'heart') {
                if (
                  game.hasPlayer(function (current) {
                    return !trigger.targets.includes(current) && player.canUse(trigger.card, current);
                  })
                )
                  player
                    .chooseTarget(get.prompt('juntongmrfz'), '为' + get.translation(trigger.card) + '增加一个目标', function (card, player, target) {
                      return !_status.event.sourcex.includes(target) && player.canUse(_status.event.card, target);
                    })
                    .set('sourcex', trigger.targets)
                    .set('ai', function (target) {
                      var player = _status.event.player;
                      return get.effect(target, _status.event.card, player, player);
                    })
                    .set('card', trigger.card);
                else event.finish();
              }
              if (result.suit == 'spade') {
                player.draw();
                event.finish();
              }
              if (result.suit == 'club') event.finish();
              ('step 2');
              if (result.targets?.length) {
                trigger.targets.push(result.targets[0]);
              }
            },
          },
        },
        ai: {
          effect: {
            target(card, player, target, current) {
              if (get.type(card) == 'delay') return 'zeroplayertarget';
            },
          },
        },
      },
      pochengmrfz: {
        audio: 2,
        trigger: { player: 'useCardToTargeted' },
        check(event, player) {
          return get.attitude(player, event.target) < 0;
        },
        init(player) {
          player.storage.pochengmrfz = false;
        },
        filter(event, player) {
          return event.card.name == 'sha' && game.roundNumber != 1 && !player.storage.pochengmrfz;
        },
        content() {
          'step 0';
          player.storage.pochengmrfz = true;
          event.num = 2;
          ('step 1');
          event.num--;
          trigger.parent.targets = trigger.parent.targets.concat(trigger.targets);
          trigger.parent.triggeredTargets4 = trigger.parent.triggeredTargets4.concat(trigger.targets);
          if (event.num > 0) event.goto(1);
          ('step 2');
          event.getParent('phaseUse').skipped = true;
          player.addTempSkill('pochengmrfz_one');
        },
        group: 'pochengmrfz_clear',
        subSkill: {
          clear: {
            charlotte: true,
            silent: true,
            forced: true,
            trigger: { global: 'roundStart' },
            filter(event, player) {
              return player.storage.pochengmrfz;
            },
            content() {
              player.addMark('pochengmrfz_clear', false);
              if (player.countMark('pochengmrfz_clear') >= 3) {
                player.storage.pochengmrfz = false;
                player.removeMark('pochengmrfz_clear', player.countMark('pochengmrfz_clear'));
              }
            },
          },
          one: {
            charlotte: true,
            mod: {
              maxHandcard(player, num) {
                return num + 1;
              },
            },
          },
        },
      },
      //琴柳
      junqimrfz: {
        audio: 4,
        group: ['junqimrfz_reget', 'junqimrfz_get'],
        subSkill: {
          rem: {
            silent: true,
            charlotte: true,
            trigger: { global: 'die' },
            filter(event, player) {
              return event.player.hasSkill('junqimrfz');
            },
            content() {
              var isSkillandRemove = function (str, who) {
                if (who.hasSkill(str)) who.removeSkill(str);
              };
              isSkillandRemove('junqimrfz_zhiyu', player);
              isSkillandRemove('junqimrfz_zhiyuan', player);
              isSkillandRemove('junqimrfz_jingong', player);
              isSkillandRemove('butuimrfz', player);
            },
          },
          zhiyu: {
            mark: true,
            marktext: '军旗',
            intro: {
              name: '军旗(治愈之旗)',
              content: '出牌阶段开始时,其可弃置至多三张牌,其选择等量角色,其回复一点体力并令其中手牌数最少的角色摸一张牌',
            },
            trigger: { player: 'phaseUseBegin' },
            filter(event, player) {
              return player.countCards('h') > 0;
            },
            prompt: '是否发动【军旗(治愈之旗)】',
            content() {
              'step 0';
              player.chooseToDiscard('he', true, [1, 3], '请弃置至多三张牌').set('ai', function (card) {
                return 6 - get.value(card);
              });
              ('step 1');
              if (result.cards?.length)
                player.chooseTarget(true, [1, result.cards.length], '请选择至多' + result.cards.length + '名角色').set('ai', function (target) {
                  return get.attitude(_status.event.player, target);
                });
              ('step 2');
              if (result.bool) {
                var min = player.countCards('h'),
                  min_player = player;
                for (var i = 0; i < result.targets.length; i++) result.targets[i].recover();
                for (var i of result.targets) {
                  if (i == player) continue;
                  var num = i.countCards('h');
                  if (num < min) {
                    min = num;
                    min_player = i;
                  } else if (num == min) min_player = false;
                }
                if (min_player) min_player.draw();
              }
            },
            group: 'junqimrfz_rem',
            ai: {
              expose: 0.6,
            },
          },
          jingong: {
            mark: true,
            marktext: '军旗',
            intro: {
              name: '军旗(进攻之旗)',
              content: '当与你距离不大于2的其他角色受到伤害时,你可以弃置一张牌,令此伤害+1;使用【杀】的次数+1',
            },
            trigger: { global: 'damageBegin3' },
            filter(event, player) {
              return get.distance(player, event.player) <= 2 && event.player.isIn() && event.player != player && player.countCards('he') > 0;
            },
            prompt(event, player) {
              return '【军旗(进攻之旗)】:是否弃置一张牌,令此伤害对' + get.translation(event.player) + '+1？';
            },
            check(event, player) {
              return get.attitude(player, event.player) < 0;
            },
            content() {
              player.chooseToDiscard('he', true, '弃置一张牌');
              trigger.num++;
            },
            mod: {
              cardUsable(card, player, num) {
                if (card.name == 'sha') return num + 1;
              },
            },
            group: 'junqimrfz_rem',
            ai: {
              expose: 0.8,
            },
          },
          zhiyuan: {
            mark: true,
            marktext: '军旗',
            intro: {
              name: '军旗(支援之旗)',
              content: '与其距离不大于1的角色受到伤害后,其可摸一张牌,交给受伤角色一张牌;摸牌阶段摸牌数+1',
            },
            trigger: { global: 'damageEnd' },
            filter(event, player) {
              return get.distance(player, event.player) <= 1 && event.player.isIn();
            },
            check(event, player) {
              return get.attitude(player, event.player) > 0;
            },
            prompt(event, player) {
              if (event.player == player) return '【军旗(支援之旗)】:你是否摸一张牌？';
              return '【军旗(支援之旗)】:是否摸一张牌并交给' + get.translation(event.player) + '一张牌？';
            },
            content() {
              'step 0';
              player.draw();
              if (trigger.player != player) {
                player.chooseCard(true, 'he', '交给' + get.translation(trigger.player) + '一张牌').set('ai', function (card) {
                  if (get.position(card) == 'e') return -1;
                  if (card.name == 'shan' || card.name == 'tao' || card.name == 'jiu') return 1;
                  return 0;
                });
              } else {
                event.finish();
              }
              ('step 1');
              player.give(result.cards, trigger.player, 'give');
            },
            group: ['junqimrfz_draw', 'junqimrfz_rem'],
            ai: {
              expose: 0.4,
            },
          },
          draw: {
            audio: 'junqimrfz',
            forced: true,
            trigger: { player: 'phaseDrawBegin2' },
            content() {
              trigger.num++;
            },
          },
          get: {
            audio: 'junqimrfz',
            forced: true,
            trigger: {
              global: 'phaseBefore',
              player: 'enterGame',
            },
            content() {
              var str1 = '【支援之旗】:与其距离不大于1的角色受到伤害时,其可摸一张牌,交给受伤角色一张牌;摸牌阶段摸牌数+1';
              var str2 = '【治愈之旗】:出牌阶段开始时,其可弃置至多三张牌,其选择等量角色,其回复一点体力并令其中手牌数最少的角色摸至4张';
              var str3 = '【进攻之旗】:当与你距离不大于2的角色受到伤害后,你可以弃置一张牌,令此伤害+1;使用【杀】的次数+1';
              ('step 0');
              player
                .chooseControl('支援之旗', '治愈之旗', '进攻之旗')
                .set('choiceList', [str1, str2, str3])
                .set('ai', function (event, player) {
                  return [0, 2].randomGet();
                });
              ('step 1');
              var list = ['junqimrfz_zhiyuan', 'junqimrfz_zhiyu', 'junqimrfz_jingong'];
              for (var i = 0; i < 3; i++) {
                if (result.index == i) player.addSkill(list[i]);
              }
              player.removeSkill('junqimrfz_get');
            },
          },
          reget: {
            forced: true,
            trigger: { player: 'phaseZhunbeiBegin' },
            content() {
              var list = ['junqimrfz_zhiyuan', 'junqimrfz_zhiyu', 'junqimrfz_jingong'];
              ('step 0');
              if (
                game.hasPlayer(function (current) {
                  return current.hasSkill('junqimrfz_zhiyuan') || current.hasSkill('junqimrfz_jingong') || current.hasSkill('junqimrfz_zhiyu');
                })
              ) {
                game.countPlayer(function (current) {
                  for (var i = 0; i < 3; i++) {
                    if (current.hasSkill(list[i]) && current != player) {
                      current.removeSkill(list[i]);
                      player.addSkill(list[i]);
                    }
                  }
                });
              }
              ('step 1');
              player.chooseControl('确定', 'cancel2').set('prompt', get.prompt('junqimrfz')).set('prompt2', '是否更换‘军旗’类型');
              ('step 2');
              if (result.control == 'cancel2') event.finish();
              else {
                for (var i = 0; i < 3; i++) {
                  if (player.hasSkill(list[i])) player.removeSkill(list[i]);
                }
              }
              ('step 3');
              var str1 = '【支援之旗】:与其距离不大于1的角色受到伤害时,其可摸一张牌,交给受伤角色一张牌;摸牌阶段摸牌数+1';
              var str2 = '【治愈之旗】:出牌阶段开始时,其可弃置至多三张牌,其选择等量角色,其回复一点体力并令其中手牌数最少的角色摸至4张';
              var str3 = '【进攻之旗】:当与你距离不大于2的角色受到伤害后,你可以弃置一张牌,令此伤害+1;使用【杀】的次数+1';
              player
                .chooseControl('支援之旗', '治愈之旗', '进攻之旗')
                .set('choiceList', [str1, str2, str3])
                .set('ai', function (event, player) {
                  var num = Math.random();
                  if (player.hp <= 1) return 1;
                  if (num > 0.6) return 2;
                  if (num < 0.3) return 0;
                  else return [0, 1, 2].randomGet();
                });
              ('step 4');
              for (var i = 0; i < 3; i++) {
                if (result.index == i) player.addSkill(list[i]);
              }
            },
          },
        },
      },
      zhiqimrfz: {
        audio: 2,
        enable: 'phaseUse',
        usable: 1,
        filterTarget(card, player, target) {
          return target != player;
        },
        selectTarget: 1,
        filter(event, player) {
          return player.hasSkill('junqimrfz_zhiyuan') || player.hasSkill('junqimrfz_jingong') || player.hasSkill('junqimrfz_zhiyu');
        },
        content() {
          var list = ['junqimrfz_zhiyuan', 'junqimrfz_zhiyu', 'junqimrfz_jingong'];
          for (var i = 0; i < 3; i++) {
            if (player.hasSkill(list[i])) {
              target.addSkill(list[i]);
              player.removeSkill(list[i]);
            }
          }
        },
        group: 'junqimrfz_rem',
        ai: {
          order: 1,
          expose: 0.8,
          threaten: 1.1,
          result: {
            target(player, target) {
              if (get.attitude(player, target) < 0) return 0;
              if (get.attitude(player, target) > 0) return 1;
            },
          },
        },
      },
      butuimrfz: {
        audio: 2,
        forced: true,
        trigger: { global: 'phaseBegin' },
        filter(event, player) {
          return event.player.hasSkill('junqimrfz_zhiyuan') || event.player.hasSkill('junqimrfz_jingong') || event.player.hasSkill('junqimrfz_zhiyu');
        },
        content() {
          'step 0';
          var list = ['摸一张牌'];
          if (trigger.player.countCards('he') > 0) list.add('弃两张牌并跳过判定阶段');
          trigger.player
            .chooseControl(list, 'cancel2')
            .set('prompt2', get.prompt('butuimrfz'))
            .set('prompt', '请选择一项')
            .set('ai', function () {
              var player = _status.event.playerx;
              if (player.countCards('j') > 0 && player.countCards('he') > 0) return 1;
              else return 0;
            })
            .set('playerx', trigger.player);
          ('step 1');
          if (result.control != 'cancel2') {
            if (result.control == '摸一张牌') {
              trigger.player.draw();
            } else if (trigger.player.countCards('he') > 0) {
              trigger.player.chooseToDiscard('he', true, '弃置两张牌', 2);
              trigger.player.addTempSkill('butuimrfz_skip', {
                global: 'phaseEnd',
              });
            }
          }
        },
        subSkill: {
          skip: {
            charlotte: true,
            forced: true,
            trigger: { player: 'phaseJudgeBefore' },
            content() {
              trigger.cancel();
            },
          },
        },
      },
      //老鲤
      linhuamrfz: {
        audio: 4,
        forced: true,
        trigger: { source: 'damageBegin1' },
        filter(event, player) {
          return event.source != undefined;
        },
        content() {
          trigger.cancel();
          trigger.player.damage('nosource', trigger.num);
        },
        group: ['linhuamrfz_anti', 'linhuamrfz_skip'],
        subSkill: {
          anti: {
            forced: true,
            trigger: { player: 'damageBegin3' },
            filter(event, player) {
              if (!event.nature) return false;
              return player.countCards('he') >= 2 && event.source != undefined;
            },
            logTarget: 'source',
            content() {
              'step 0';
              player.chooseToDiscard('he', false, 2, '你可以弃置两张牌将此伤害转移给' + get.translation(trigger.source));
              ('step 1');
              if (result.cards?.length) {
                trigger.cancel();
                trigger.source.damage(trigger.num, trigger.nature);
              }
            },
          },
          skip: {
            forced: true,
            trigger: { player: 'phaseJudgeBegin' },
            filter(event, player) {
              return player.countCards('h') >= 2 && player.countCards('j');
            },
            content() {
              'step 0';
              player.chooseToDiscard('h', false, 2, '你可以弃置两张牌并移动一张你判定区内的一张牌').set('ai', function (card) {
                return 6 - get.value(card);
              });
              ('step 1');
              if (result.cards?.length) {
                var card = player.getCards('j');
                player.chooseButton(['将你判定区的一张牌移动至一名角色的判定区', card]);
              } else event.finish();
              ('step 2');
              if (result.cards?.length) {
                event.card = result.links[0];
                player.chooseTarget(true, '选择' + get.translation(event.card) + '的移动目标', function (card, player, target) {
                  return target != player && target.canAddJudge(event.card);
                });
              } else event.finish();
              ('step 3');
              if (result.targets?.length) {
                var target = result.targets[0];
                player.$give(event.card, target);
                var name = card.viewAs || card.name;
                if (event.card.name != name) {
                  target.addJudge(name, event.card);
                } else {
                  target.addJudge(card);
                }
              }
            },
          },
        },
      },
      mingshimrfz: {
        audio: 2,
        enable: 'phaseUse',
        usable: 2,
        filterTarget(card, player, target) {
          return target != player && !target.hasSkill('mingshimrfz2');
        },
        selectTarget: 1,
        filter(event, player) {
          return player.countCards('he') > 0;
        },
        content() {
          'step 0';
          player.chooseCard('he', '请选择一张牌交给' + get.translation(target), true).set('ai', function (card) {
            return 6 - get.value(card);
          });
          player.addTempSkill('mingshimrfz2');
          ('step 1');
          if (result.cards?.length) {
            player.give(result.cards, target);
            target.addTempSkill('mingshimrfz2');
            player.line(target);
          }
          ('step 2');
          player.viewHandcards(target);
          game.log(player, '观看了', target, '的手牌');
          if (target.countCards('h') > 3) {
            player.discardPlayerCard(target, 'h', [1, 3]).set('forceAuto', true);
            target.addSkill('mingshimrfz_draw1');
            event.finish();
          } else {
            player
              .chooseControl('令其摸一张', '令其摸两张')
              .set('prompt', '【明事】:请选择一项')
              .set('prompt2', '你可以令其摸[2/1]张牌,于下一个准备阶段弃置[1/2]张牌')
              .set('ai', function () {
                var att = get.attitude(target, player);
                if (att > 0) return 1;
                return 0;
              }); //QQQ
          }
          ('step 3');
          if (result.index == 0) {
            target.draw();
            target.addSkill('mingshimrfz_dis2');
          } else {
            target.draw(2);
            target.addSkill('mingshimrfz_dis1');
          }
        },
        group: 'mingshimrfz_ed',
        subSkill: {
          ed: {
            charlotte: true,
            forced: true,
            trigger: { player: 'phaseJieshuBegin' },
            filter(event, player) {
              return player.hasSkill('mingshimrfz2');
            },
            content() {
              player.draw();
            },
          },
          draw1: {
            forced: true,
            charlotte: true,
            trigger: { player: 'phaseJieshuBegin' },
            content() {
              player.draw();
              player.removeSkill('mingshimrfz_draw1');
            },
          },
          dis1: {
            charlotte: true,
            forced: true,
            trigger: { player: 'phaseZhunbeiBegin' },
            filter(event, player) {
              return player.countCards('he') > 0;
            },
            content() {
              player.chooseToDiscard('he', true, '【明事】:弃置一张牌');
              player.removeSkill('mingshimrfz_dis1');
            },
          },
          dis2: {
            charlotte: true,
            forced: true,
            trigger: { player: 'phaseZhunbeiBegin' },
            filter(event, player) {
              return player.countCards('he') > 0;
            },
            content() {
              player.chooseToDiscard('he', true, 2, '【明事】:弃置两张牌');
              player.removeSkill('mingshimrfz_dis2');
            },
          },
        },
        ai: {
          order: 1,
          expose: 0.2,
          threaten: 1.2,
          result: {
            target(player, target) {
              var att = get.attitude(player, target);
              if (att > 0 && target.countCards('h') < 3) return 1;
              if (att < 0) return -1;
            },
          },
        },
      },
      mingshimrfz2: {},
      jixiongmrfz: {
        group: 'jixiongmrfz2',
        audio: 2,
        forced: true,
        trigger: { global: 'phaseZhunbeiBegin' },
        filter(event, player) {
          return event.player.hasMark('jixiongxmrfz');
        },
        content() {
          'step 0';
          trigger.player.judge(function (card) {
            var color = get.color(card);
            if (color == 'black') return 4;
            return -4;
          });
          trigger.player.removeMark('jixiongxmrfz');
          ('step 1');
          if (result.color == 'black') {
            trigger.player.chooseToDiscard('he', true, '【吉凶】:请弃置一张牌');
            trigger.player.loseHp();
          }
          if (trigger.player.hasMark('jixiongxmrfz')) event.goto(0);
          else event.finish();
          ('step 2');
          if (result.cards?.length) player.gain(result.cards, 'gain2');
          if (trigger.player.hasMark('jixiongxmrfz')) event.goto(0);
        },
        ai: {
          expose: 0.9,
        },
      },
      jixiongmrfz2: {
        trigger: { global: 'gainEnd' },
        filter(event, player) {
          return event.source && event.source.hasSkill('jixiongmrfz');
        },
        logTarget: 'source',
        forced: true,
        content() {
          'step 0';
          player
            .chooseControl('确定', '取消')
            .set('prompt', '是否发动【吉凶】？')
            .set('ai', function () {
              var att = get.attitude(trigger.source, player);
              if (att > 0) return 1;
              return 0;
            }); //QQQ
          ('step 1');
          if (result.control == '确定') {
            trigger.player.addMark('jixiongxmrfz');
          }
        },
      },
      jixiongxmrfz: {
        charlotte: true,
        intro: {
          content: '准备阶段,你进行一次判定,若判定结果为黑色,则你须弃置一张牌并流失一点体力,弃置‘符纸’标记',
        },
      },
      //阿
      guaijiemrfz: {
        audio: 2,
        forced: true,
        firstDo: true,
        trigger: { global: 'roundStart' },
        filter(event, player) {
          return !player.storage.guaijiemrfz;
        },
        content() {
          player.loseHp();
        },
        group: 'guaijiemrfz_damage',
        subSkill: {
          damage: {
            audio: 'guaijiemrfz',
            forced: true,
            trigger: { source: 'damageEnd' },
            filter(event, player) {
              return !player.storage.guaijiemrfz;
            },
            content() {
              'step 0';
              player.storage.guaijiemrfz = true;
              player.addSkill('guaijiemrfz_remove');
              player
                .chooseTarget(true, '弃置一名角色区域内的一张牌', function (card, player, target) {
                  return target.countCards('hej') > 0;
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
              ('step 1');
              if (result.targets?.length) {
                var target = result.targets[0];
                player.discardPlayerCard(target, 'hej', true);
              }
            },
          },
          remove: {
            silent: true,
            charlotte: true,
            forced: true,
            trigger: { global: 'roundStart' },
            content() {
              player.storage.guaijiemrfz = false;
              player.removeSkill('guaijiemrfz_remove');
            },
          },
        },
      },
      qizhenmrfz: {
        audio: 2,
        enable: 'phaseUse',
        filterTarget(card, player, target) {
          return target != player;
        },
        selectTarget: 1,
        usable: 1,
        content() {
          'step 0';
          if (target.countCards('he') == 0) {
            event.goto(2);
            target.damage();
          } else {
            var str1 = `令${get.translation(target)}弃置两张牌`;
            var str2 = `对${get.translation(target)}造成一点伤害`;
            player
              .chooseControl(str1, str2)
              .set('prompt', '【奇针】:请选择一项')
              .set('ai', function (target) {
                if (target.hp > 2 && target.countCards('he') < 4) return 1;
                return 0;
              });
          }
          ('step 1');
          if (result.index == 0) target.chooseToDiscard('he', true, 2, '【奇针】:请弃置两张牌');
          else target.damage();
          ('step 2');
          target.addTempSkill('qizhenmrfz_effect', {
            player: 'phaseEnd',
          });
          target.changeHujia();
        },
        subSkill: {
          effect: {
            audio: 'qizhenmrfz',
            trigger: { player: 'useCard' },
            forced: true,
            charlotte: true,
            filter(event, player) {
              return event.card.name == 'sha' || event.card.name == 'juedou';
            },
            content() {
              trigger.baseDamage++;
            },
          },
        },
      },
      guaiyaomrfz: {
        audio: 4,
        forced: true,
        trigger: { source: 'damageBegin3' },
        filter(event, player) {
          return event.player != player;
        },
        content() {
          var target = trigger.player;
          var num = Math.random();
          if (num < 0.1) {
            target.addTempSkill('guaiyaomrfz_skip', {
              player: 'phaseEnd',
            });
            player.popup('怪药·跳过');
            game.log(player, '的【怪药】结果为<span class=thundertext>【怪药·跳过】</span>');
          }
          if (num >= 0.1 && num < 0.325) {
            player.getDamagedHp() > 0 ? player.recover(2) : player.changeHujia();
            player.popup('怪药·回复');
            game.log(player, '的【怪药】结果为<span class=thundertext>【怪药·回复】</span>');
          }
          if (num >= 0.325 && num < 0.55) {
            target.chooseToDiscard('he', true, '【怪药】:请弃置一张牌');
            player.popup('怪药·弃牌');
            game.log(player, '的【怪药】结果为<span class=thundertext>【怪药·弃牌】</span>');
          }
          if (num >= 0.55 && num < 0.775) {
            target.addTempSkill('guaiyaomrfz_decrease', {
              player: 'phaseDrawAfter',
            });
            player.popup('怪药·摸牌减少');
            game.log(player, '的【怪药】结果为<span class=thundertext>【怪药·摸牌减少】</span>');
          }
          if (num >= 0.775) {
            player.draw();
            player.popup('怪药·摸牌');
            game.log(player, '的【怪药】结果为<span class=thundertext>【怪药·摸牌】</span>');
          }
        },
        subSkill: {
          skip: {
            mark: true,
            intro: {
              content: '跳过下个出牌和弃牌阶段',
            },
            audio: 'guaiyaomrfz',
            forced: true,
            charlotte: true,
            trigger: {
              player: ['phaseUseBegin', 'phaseDiscardBefore'],
            },
            content() {
              trigger.cancel();
            },
          },
          decrease: {
            mark: true,
            intro: {
              content: '下个摸牌阶段摸牌数-1',
            },
            audio: 'guaiyaomrfz',
            forced: true,
            charlotte: true,
            trigger: { player: 'phaseDrawBegin2' },
            content() {
              trigger.num--;
            },
          },
        },
      },
      //黑
      heishimrfz: {
        audio: 2,
        forced: true,
        trigger: { source: 'damageBegin1' },
        filter(event, player) {
          return (get.distance(player, event.player) <= player.hasSkill('junumrfz_effect') ? 3 : 1 || event.player.getEquip(2)) && event.card && event.card.name == 'sha';
        }, //QQQ
        content() {
          if (get.distance(player, trigger.player) <= player.hasSkill('junumrfz_effect') ? 3 : 1) trigger.num++;
          if (trigger.player.getEquip(2)) trigger.num++;
        },
        group: 'heishimrfz_wushi',
        mod: {
          playerEnabled(card, player, target) {
            if (!player.hasSkill('junumrfz_effect') && get.distance(player, target) > 2 && card.name == 'sha') return false;
          },
        },
        subSkill: {
          wushi: {
            trigger: {
              player: 'useCardToPlayered',
            },
            filter(event, player) {
              return event.card && event.card.name == 'sha';
            },
            forced: true,
            logTarget: 'target',
            content() {
              if (player.hasSkill('heishimrfz')) trigger.target.addTempSkill('heishimrfz_wushi2');
              trigger.target.storage.heishimrfz_wushi2.add(trigger.card);
              trigger.target.markSkill('heishimrfz_wushi2');
            },
            ai: {
              unequip: true,
              skillTagFilter(player, tag, arg) {
                if (arg && arg.name == 'sha') return true;
                return false;
              },
            },
          },
          wushi2: {
            firstDo: true,
            ai: { unequip2: true },
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
              return player.storage.heishimrfz_wushi2 && event.card && player.storage.heishimrfz_wushi2.includes(event.card) && (event.name != 'damage' || event.notLink());
            },
            silent: true,
            forced: true,
            popup: false,
            _priority: 12,
            content() {
              player.storage.heishimrfz_wushi2.remove(trigger.card);
              if (!player.storage.heishimrfz_wushi2.length) player.removeSkill('heishimrfz_wushi2');
            },
            marktext: '※',
            intro: { content: '当前防具技能已失效' },
          },
        },
        ai: {
          threaten: 1.2,
        },
      },
      ruitongmrfz: {
        audio: 2,
        trigger: { global: 'useCardAfter' },
        filter(event, player) {
          if (!player.hasSkill('junumrfz_effect') && get.distance(player, event.player) > 2 && player.hasSkill('heishimrfz')) return false;
          return event.player && event.player.isAlive() && event.player != player && get.subtype(event.card) == 'equip2' && player.inRange(event.player);
        },
        prompt(event, player) {
          return '是否对' + get.translation(event.player) + '视为使用一张【杀】';
        },
        check(event, player) {
          return get.attitude(player, event.player) < 0;
        },
        content() {
          player.useCard({ name: 'sha' }, true, trigger.player);
        },
        ai: {
          expose: 0.9,
          threaten: 0.8,
        },
      },
      junumrfz: {
        audio: 2,
        trigger: { player: 'phaseZhunbeiBegin' },
        mark: true,
        limited: true,
        check(event, player) {
          if (
            !game.hasPlayer(function (current) {
              return current != player && get.attitude(current, player) < 0;
            })
          )
            return false;
          return player.countCards('h', 'sha') >= 2;
        },
        init(player) {
          player.storage.junumrfz = false;
        },
        filter(event, player) {
          return !player.storage.junumrfz;
        },
        content() {
          player.storage.junumrfz = true;
          player.addTempSkill('junumrfz_effect');
        },
        subSkill: {
          effect: {
            mod: {
              targetInRange(card, player, target, now) {
                if (card.name == 'sha') return true;
              },
              selectTarget(card, player, range) {
                if (card.name == 'sha' && range[1] != -1) range[1]++;
              },
              cardUsable(card, player, num) {
                if (card.name == 'sha') return num + 1;
              },
            },
            charlotte: true,
          },
        },
        ai: {
          threaten: 1.1,
        },
      },
      //重岳
      wubenmrfz: {
        audio: 2,
        trigger: { player: 'phaseUseBegin' },
        firstDo: true,
        forced: true,
        filter(event, player) {
          if (player.countCards('h') == 0) return false;
          return (
            !player.getEquip(1) &&
            game.hasPlayer(function (target) {
              return target != player && player.inRange(target);
            })
          );
        },
        content() {
          'step 0';
          player.chooseCard('h', '你可以使用一张【杀】').set('ai', function (card) {
            if (
              game.hasPlayer(function (current) {
                return current != player && player.inRange(current) && get.attitude(player, current) < 0;
              })
            )
              return 6 - get.value(card);
            return 0;
          });
          ('step 1');
          if (result.cards?.length) {
            player.chooseUseTarget({ name: 'sha' }, result.cards, true, false);
          }
        },
        mod: {
          cardUsable(card, player, num) {
            if (card.name == 'sha' && !player.getEquip(1)) return num + 1;
          },
          maxHandcard(player, num) {
            return (num += Math.floor((5 - player.countCards('e')) / 2));
          },
        },
      },
      wowumrfz: {
        intro: {
          content(event, player) {
            if (player.countMark('wowumrfz_draw') >= 5) return '<span class=firetext>【气收秋毫平】</span></br>已使用' + player.countMark('wowumrfz') + '张牌';
            return '<span class=firetext>【劲发江潮落】</span></br>已使用' + player.countMark('wowumrfz') + '张牌</br>已发动' + player.countMark('wowumrfz_draw') + '次【我无】';
          },
        },
        derivation: 'wowumrfz_rewrite',
        audio: 4,
        trigger: { player: 'useCardAfter' },
        forced: true,
        filter(event, player) {
          if ((player != _status.currentPhase || !player.isPhaseUsing()) && player.countMark('wowumrfz_draw') < 5) return false;
          return true;
        },
        content() {
          'step 0';
          player.addMark('wowumrfz', false);
          ('step 1');
          if (player.countMark('wowumrfz') >= 3 && !player.hasMark('shubianmrfz')) {
            player.chooseTarget(false, get.prompt('wowumrfz'), '你可以对一名其他角色使用一张【杀】', function (card, player, target) {
              return player.countMark('wowumrfz_draw') >= 5 ? target != player : target != player && player.inRange(target);
            }).ai = function (target) {
              return -get.attitude(player, target);
            };
            player.removeMark('wowumrfz', 3, false);
            if (player.countMark('wowumrfz_draw') < 5) player.addMark('wowumrfz_draw', false);
          } else if (player.countMark('wowumrfz') >= 3) {
            if (player.countMark('wowumrfz_draw') < 5) player.addMark('wowumrfz_draw', false);
            player.removeMark('wowumrfz', 3, false);
          } else event.finish();
          ('step 2');
          if (result.targets?.length) {
            player.useCard({ name: 'sha' }, true, false, result.targets);
            if (player.countMark('wowumrfz_draw') >= 5) player.draw();
          }
        },
        group: 'wowumrfz_draw',
        subSkill: {
          draw: {
            forced: true,
            trigger: { source: 'damageEnd' },
            filter(event, player) {
              var evt = event.getParent(3);
              if (!event.card) return false;
              var sha = event.card.name == 'sha';
              return player.countMark('wowumrfz_draw') < 5 && evt && evt.name == 'wowumrfz' && evt.player == player && sha;
            },
            content() {
              player.draw();
            },
          },
        },
        ai: {
          threaten: 1.3,
          expose: 0.2,
        },
      },
      shubianmrfz: {
        global: 'shubianmrfz_effect',
        marktext: '息兵',
        intro: {
          name: '息兵',
          content: '战事暂缓,休养生息',
        },
        audio: 4,
        trigger: { player: 'damageEnd' },
        filter(event, player) {
          if (event.source == undefined) return false;
          return !event.source.hasMark('shubianmrfz') && event.source != player && event.source.isAlive() && event.source != undefined;
        },
        logTarget: 'source',
        content() {
          var source = trigger.source;
          ('step 0');
          source.addMark('shubianmrfz');
          if (source.getEquip(1)) {
            var next = player
              .chooseControl('确定', '取消')
              .set('prompt', get.prompt('shubianmrfz'))
              .set('prompt2', '是否弃置' + get.translation(source) + '的武器牌(' + get.translation(source.getEquip(1)) + ')');
            next.set('ai', function () {
              var source = _status.event.getTrigger().source,
                player = _status.event.player;
              if (get.attitude(player, source) < 0) return 0;
              return 1;
            });
          } else event.finish();
          ('step 1');
          if (result.control == '确定') {
            game.cardsDiscard(source.getEquip(1));
            game.log(source.getEquip(1), '进入了弃牌堆');
          }
        },
        group: ['shubianmrfz_clear', 'shubianmrfz_give', 'shubianmrfz_effect2'],
        subSkill: {
          clear: {
            silent: true,
            charlotte: true,
            forced: true,
            trigger: { global: 'phaseEnd' },
            filter(event, player) {
              return game.hasPlayer(function (current) {
                return current.countMark('shubianmrfz') > 0;
              });
            },
            content() {
              game.countPlayer(function (current) {
                current.removeMark('shubianmrfz', current.countMark('shubianmrfz'));
              });
            },
          },
          give: {
            audio: 'shubianmrfz',
            trigger: { player: 'phaseUseBegin' },
            filter(event, player) {
              return !player.hasMark('shubianmrfz');
            },
            check(event, player) {
              var num = Math.random();
              if (
                player.hasCard(function (card) {
                  return get.tag(card, 'damage');
                }).length == 0
              )
                num--;
              if (
                player.hp <= 2 &&
                player.hasCard(function (card) {
                  return get.tag(card, 'damage');
                }).length >= 2
              )
                num + 0.5;
              return num > 0.55;
            },
            content() {
              player.addMark('shubianmrfz');
              player.addTempSkill('shubianmrfz_effect2');
            },
          },
          effect: {
            charlotte: true,
            mod: {
              cardEnabled(card, player) {
                if (get.tag(card, 'damage') && player.hasMark('shubianmrfz')) return false;
              },
              maxHandcard(player, num) {
                if (player.hasMark('shubianmrfz')) return (num += 2);
              },
            },
          },
          effect2: {
            charlotte: true,
            intro: { content: '因此重铸过的牌名:$' },
            audio: 'shubianmrfz',
            enable: 'phaseUse',
            filter(event, player) {
              if (!player.hasMark('shubianmrfz')) return false;
              return player.hasCard(function (card) {
                return get.tag(card, 'damage');
              });
            },
            delay: 0,
            content() {
              'step 0';
              player.chooseToDiscard('h', [1, Infinity], false, get.prompt('shubianmrfz'), '你可以重铸任意张带有伤害类标签的手牌', function (card) {
                return get.tag(card, 'damage');
              });
              ('step 1');
              if (result.cards?.length) {
                player.draw(result.cards.length);
                if (Array.isArray(result.cards))
                  for (var i of result.cards) {
                    if (!player.getStorage('shubianmrfz_effect2').includes(i.name)) {
                      player.markAuto('shubianmrfz_effect2', [i.name]);
                      player.draw();
                    }
                  }
              } else event.finish();
            },
          },
        },
      },
      //安洁莉娜
      fanzhongmrfz: {
        intro: {
          content: '重力紊乱',
        },
        audio: 4,
        global: ['fanzhongmrfz2', 'fanzhongmrfz_gain', 'fanzhongmrfz_gain2', 'fanzhongmrfz_lose'],
        trigger: { player: 'phaseZhunbeiBegin' },
        filter(event, player) {
          return game.hasPlayer(function (target) {
            return target != player && player.inRange(target) && target.countMark('fanzhongmrfz') < 3;
          });
        },
        forced: true,
        content() {
          'step 0';
          player.chooseTarget(get.prompt('fanzhongmrfz'), '你可以选择攻击范围内的一名其他角色,令其获得‘反重’标记', function (card, player, target) {
            return target != player && player.inRange(target) && target.countMark('fanzhongmrfz') < 3;
          }).ai = function (target) {
            return -get.attitude(player, target);
          };
          ('step 1');
          if (result.targets?.length) {
            result.targets[0].addMark('fanzhongmrfz');
          }
        },
        subSkill: {
          gain: {
            forced: true,
            trigger: { player: 'useCardAfter' },
            filter(event, player) {
              return player.hasMark('fanzhongmrfz') && player.getExpansions('fanzhongmrfz2').length;
            },
            content() {
              'step 0';
              var cards = player.getExpansions('fanzhongmrfz2');
              if (cards.length) player.chooseButton(['获得一张牌', cards], true);
              else event.finish();
              ('step 1');
              if (result.links?.length) player.gain(result.links, 'gain2');
            },
          },
          gain2: {
            forced: true,
            charlotte: true,
            firstDo: true,
            trigger: { player: 'phaseDiscardBefore' },
            filter(event, player) {
              return player.hasMark('fanzhongmrfz');
            },
            content() {
              var cards = player.getExpansions('fanzhongmrfz2');
              if (cards) player.gain(cards, 'gain2');
              player.removeAllmark('fanzhongmrfz');
            },
          },
          lose: {
            silent: true,
            forced: true,
            charlotte: true,
            trigger: { player: 'die' },
            filter(event, player) {
              return player.hasMark('fanzhongmrfz');
            },
            content() {
              var cards = player.getExpansions('fanzhongmrfz2');
              player.removeAllmark('fanzhongmrfz');
              if (cards) player.loseToDiscardpile(cards);
            },
          },
        },
        ai: {
          expose: 0.6,
          threaten: 1.2,
        },
      },
      fanzhongmrfz2: {
        intro: {
          content: 'expansion',
          markcount: 'expansion',
        },
        onremove(player, skill) {
          var cards = player.getExpansions(skill);
          if (cards.length) player.loseToDiscardpile(cards);
        },
        charlotte: true,
        forced: true,
        trigger: { player: 'gainEnd' },
        filter(event, player) {
          if (event.player.getExpansions('fanzhongmrfz2').length >= 6) return false;
          return player.hasMark('fanzhongmrfz') && event.parent.name != 'fanzhongmrfz_gain' && event.parent.name != 'fanzhongmrfz_gain2';
        },
        content() {
          player.addToExpansion(trigger.cards, player, 'give').gaintag.add('fanzhongmrfz2');
          //var str='';
          //str+=get.translation(trigger)+'</br>';
          //for(var i=1;i<=10;i++) str+=get.translation(trigger.getParent(i))+'</br>';
          //game.log(str);
          //player.popup(str);
        },
      },
      xinshimrfz: {
        mod: {
          ignoredHandcard(card, player) {
            if (card.hasGaintag('xinshimrfz')) {
              return true;
            }
          },
          cardDiscardable(card, player, name) {
            if (name == 'phaseDiscard' && card.hasGaintag('xinshimrfz')) {
              return false;
            }
          },
        },
        audio: 4,
        enable: 'phaseUse',
        discard: false,
        lose: false,
        filter(event, player) {
          return player.countCards('h') > 0;
        },
        filterTarget(card, player, target) {
          return target != player && !target.tempSkills.xinshimrfz2 && !target.hasMark('xinshimrfz');
        },
        filterCard(card, player) {
          return !player.storage.xinshimrfz || !player.storage.xinshimrfz.includes(get.type(card, 'trick'));
        },
        check(card) {
          return 10 - get.value(card);
        },
        delay: 0,
        prompt: '你可以将一张本回合你未以此法交出过的类型的牌交给本回合你未以此法选择过的角色',
        content() {
          'step 0';
          if (!player.storage.xinshimrfz) player.storage.xinshimrfz = [];
          player.storage.xinshimrfz.push(get.type(cards[0], 'trick'));
          ('step 1');
          player.give(cards, target);
          target.addTempSkill('xinshimrfz2');
          ('step 2');
          var mark = player.storage.xinshimrfz.length;
          if (mark == 1) {
            player.draw();
            event.finish();
          }
          if (mark == 2) event.goto(3);
          if (mark == 3) {
            event.goto(5);
          }
          ('step 3');
          if (target.countCards('h') > 0) target.chooseCard('h', true);
          else event.finish();
          ('step 4');
          if (result.cards?.length) {
            target.give(result.cards, player);
            target.draw();
          }
          event.finish();
          ('step 5');
          if (player.storage.xinshimrfz.length == 3) {
            player.chooseTarget(true, '【信使】:请选择一名其他角色,令其获得‘反重’标记', function (card, player, target) {
              return target != player && !target.hasMark('xinshimrfz');
            }).ai = function (target) {
              return -get.attitude(player, target);
            };
          } else event.finish();
          ('step 6');
          if (result.targets?.length) {
            result.targets[0].addMark('fanzhongmrfz');
          }
        },
        ai: {
          order: 9,
          expose: 0.2,
          threaten: 1.2,
          result: {
            target(player, target) {
              if (player.countCards('h') > 2) return 1;
            },
          },
        },
        group: ['xinshimrfz_clear', 'xinshimrfz_give'],
        subSkill: {
          clear: {
            charlotte: true,
            silent: true,
            forced: true,
            trigger: { player: 'phaseEnd' },
            content() {
              player.storage.xinshimrfz = [];
              player.removeGaintag('xinshimrfz');
            },
          },
          give: {
            forced: true,
            trigger: { player: 'gainEnd' },
            filter(event, player) {
              return event.source;
            },
            logTarget: 'source',
            content() {
              'step 0';
              if (trigger.cards.length) player.addMark('xinshimrfz_give', trigger.cards.length, false);
              ('step 1');
              if (player.countMark('xinshimrfz_give') >= 2) {
                player
                  .chooseControl('basic', 'trick', 'equip', 'cancel2')
                  .set('prompt', '选择获得一种类型的牌')
                  .set('ai', function () {
                    var player = _status.event.player;
                    if (
                      player.hp <= 3 &&
                      !player.countCards('h', {
                        name: ['shan', 'tao'],
                      })
                    )
                      return 'basic';
                    if (
                      player.countCards('he', {
                        type: 'equip',
                      }) < 2
                    )
                      return 'equip';
                    return 'trick';
                  });
                player.removeMark('xinshimrfz_give', 2, false);
              } else event.finish();
              ('step 2');
              if (result.control != 'cancel2') {
                var card = get.cardPile2(function (card) {
                  return get.type(card, 'trick') == result.control;
                });
                if (card) player.gain(card, 'gain2', 'log').gaintag.add('xinshimrfz');
              }
              if (player.countMark('xinshimrfz_give') >= 2) event.goto(1);
            },
          },
        },
      },
      xinshimrfz2: {},
      //号角
      dunpaomrfz: {
        derivation: 'dunpaomrfz_rewrite',
        audio: 2,
        trigger: { player: 'phaseBegin' },
        check(event, player) {
          return (
            (game.countPlayer() <= 4 &&
              game.hasPlayer(function (current) {
                return get.attitude(player, current) < 0 && get.distance(player, current) == 1;
              })) ||
            !game.hasPlayer(function (current) {
              return get.attitude(player, current) >= 0 && current != player;
            })
          );
        },
        filter(event, player) {
          return !player.storage.dunpaomrfz;
        },
        content() {
          player.storage.dunpaomrfz = true;
        },
        mod: {
          maxHandcard(player, num) {
            if (player.storage.dunpaomrfz) return num + 2;
          },
          playerEnabled(card, player, target) {
            if (!player.storage.dunpaomrfz && get.distance(player, target) <= 1 && target != player) return false;
          },
          attackRange(player, num) {
            if (!player.storage.dunpaomrfz) return num + 5;
          },
        },
        group: 'dunpaomrfz_add',
        subSkill: {
          add: {
            audio: 'biaohaomrfz',
            forced: true,
            trigger: { source: 'damageBegin1' },
            filter(event, player) {
              if (player.storage.dunpaomrfz) return false;
              return event.card && event.card.name == 'sha' && event.player != player && get.distance(player, event.player) > 1; //QQQ
            },
            content() {
              var target = trigger.player;
              ('step 0');
              target.judge(function (card) {
                var color = get.color(card);
                if (color == 'black') return -4;
                return 0;
              }).judge2 = function (result) {
                return result.bool == false ? true : false;
              };
              ('step 1');
              if (result.color == 'black') trigger.num++;
            },
          },
        },
      },
      biaohaomrfz: {
        audio: 6,
        chargeSkill: true,
        enable: 'phaseUse',
        usable: 2,
        filter(event, player) {
          return (
            player.countMark('charge') < 4 &&
            player.hasCard(function (card) {
              return get.tag(card, 'damage');
            })
          );
        },
        filterCard(card) {
          return get.tag(card, 'damage');
        },
        position: 'he',
        check(card) {
          if (card.name == 'sha') return 1;
          if (card.name == 'nanman' || card.name == 'wanjian') return -1;
          return 10 - get.value(card);
        },
        content() {
          player.addMark('charge');
          player.draw();
        },
        group: ['biaohaomrfz_usesha', 'biaohaomrfz_allin'],
        subSkill: {
          usesha: {
            audio: 'biaohaomrfz',
            enable: 'chooseToUse',
            viewAs: { name: 'sha' },
            filterCard() {
              return false;
            },
            viewAsFilter(player) {
              if (player.countMark('charge') <= 0) return false;
            },
            selectCard: -1,
            prompt: '视为使用一张杀',
            precontent() {
              player.removeMark('charge');
            },
            ai: {
              order() {
                var player = _status.event.player;
                if (
                  !game.hasPlayer(function (current) {
                    return player.canUse('sha', current) && current.hp == 1 && get.effect(current, { name: 'sha' }, player, player) > 0;
                  })
                ) {
                  return 0;
                }
                return 2.95;
              },
              skillTagFilter(player, tag, arg) {
                if (arg != 'use') return false;
              },
              respondSha: true,
            },
          },
          allin: {
            enable: 'phaseUse',
            filter(event, player) {
              return player.countMark('charge') >= 4;
            },
            delay: 0,
            content() {
              'step 0';
              player.chooseControl('确定', '取消').set('prompt', get.prompt('biaohaomrfz')).set('prompt2', '你可以消耗4点蓄力值,视为使用三张【杀】和一张【万箭齐发】,失去3点体力.');
              ('step 1');
              if (result.control == '取消') event.finish();
              else {
                player.removeMark('charge', 4);
                event.num = 0;
              }
              ('step 2');
              event.num++;
              player.chooseUseTarget(
                {
                  name: event.num < 4 ? 'sha' : 'wanjian',
                },
                '请选择【杀】的目标(【杀】:' + (event.num < 4 ? event.num : 3) + '/3;【万箭齐发】:0/1)',
                false,
              );
              if (event.num < 4) event.redo();
              ('step 3');
              player.loseHp(3);
            },
            ai: {
              order: 3,
              result: {
                player: 1,
              },
            },
          },
        },
        ai: {
          order: 10,
          result: {
            player: 1,
          },
        },
      },
      xuezhanmrfz: {
        audio: 2,
        forced: true,
        trigger: { player: 'dieBegin' },
        filter(event, player) {
          return !player.storage.xuezhanmrfz;
        },
        content() {
          player.storage.xuezhanmrfz = true;
          player.chooseToDiscard('hej', true, player.countCards('hej'));
          trigger.cancel();
          game.log(player, '复活');
          if (player.getDamagedHp()) player.recover(player.maxHp);
          if (player.maxHp >= 2) player.loseMaxHp(player.maxHp - 2);
          else player.gainMaxHp(2 - player.maxHp);
          player.draw(4);
          player.link(false);
          player.turnOver(false);
        },
      },
      //焰尾
      fengjianmrfz: {
        intro: {
          content: '当你使用下一张非的【闪】基本牌后,你可以视为使用一张相同的基本牌.',
        },
        audio: 2,
        trigger: { player: ['respond', 'useCardAfter'] },
        forced: true,
        firstDo: true,
        filter(event, player) {
          if (!event.respondTo) return false;
          return !player.hasMark('fengjianmrfz');
        },
        content() {
          player.addMark('fengjianmrfz');
        },
        group: 'fengjianmrfz_use',
        subSkill: {
          use: {
            trigger: { player: 'useCardAfter' },
            forced: true,
            firstDo: true,
            filter(event, player) {
              if (event.card.name == 'shan') return false;
              return player.hasMark('fengjianmrfz') && get.type(event.card) == 'basic';
            },
            content() {
              var cards = trigger.card;
              player.removeMark('fengjianmrfz');
              if ((cards.name == 'tao' && player.getDamagedHp() > 0) || cards.name != 'shan') {
                player.chooseUseTarget(cards, false, get.prompt2('fengjianmrfz'), '你可以使用一张' + get.translation(cards));
              }
            },
          },
        },
      },
      hongsongmrfz: {
        intro: {
          content: '你有#个‘红松’标记</br>·有‘红松’标记的角色需要使用或打出闪时可以进行判定,若不为♥️️,视为使用一张【闪】并获得此判定牌,移除一个‘红松’标记.',
        },
        audio: 2,
        trigger: { player: ['respond', 'useCardAfter'] },
        forced: true,
        filter(event, player) {
          var num = 0;
          for (var i of game.players) {
            if (i.hasMark('hongsongmrfz')) num += i.countMark('hongsongmrfz');
          }
          if (!event.respondTo) return false;
          return num < 3;
        },
        content() {
          player.addMark('hongsongmrfz');
        },
        group: ['hongsongmrfz_shan', 'hongsongmrfz_give'],
        subSkill: {
          shan: {
            audio: 'hongsongmrfz',
            trigger: {
              global: ['chooseToRespondBegin', 'chooseToUseBegin'],
            },
            filter(event, player) {
              if (event.responded) return false;
              if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
              if (event.name == 'chooseToRespond' && !lib.filter.cardRespondable({ name: 'shan' }, player, event)) return false;
              if (event.player != player && !event.player.hasMark('hongsongmrfz')) return false;
              return true;
            },
            forced: true,
            content() {
              'step 0';
              trigger.player.chooseControl('确定', '取消').set('prompt', get.prompt('hongsongmrfz')).set('prompt2', '你可以进行判定,若不为♥️️,其视为使用或打出一张【闪】并获得判定牌');
              ('step 1');
              if (result.control == '确定') {
                trigger.player
                  .judge(function (card) {
                    return card.suit == 'heart' ? -0.5 : 1.5;
                  })
                  .set('callback', lib.skill.hongsongmrfz_shan.callback).judge2 = function (result) {
                    return result.bool;
                  };
              } else event.finish();
              ('step 2');
              if (result.judge > 0) {
                trigger.untrigger();
                trigger.set('responded', true);
                trigger.result = {
                  bool: true,
                  card: { name: 'shan' },
                };
                if (trigger.player != player) trigger.player.removeMark('hongsongmrfz');
              }
            },
            callback() {
              if (card.suit != 'heart') player.gain(card, 'gain2');
            },
            ai: {
              respondShan: true,
            },
          },
          give: {
            forced: true,
            trigger: { player: 'phaseBegin' },
            filter(event, player) {
              return player.hasMark('hongsongmrfz');
            },
            content() {
              'step 0';
              player.chooseTarget(get.prompt('hongsongmrfz'), '你可以将任意个‘红松’标记交给任意名其他角色', function (card, player, target) {
                return target != player;
              }).ai = function (target) {
                return get.attitude(player, target) > 0;
              };
              ('step 1');
              if (result.targets?.length) {
                var target = result.targets[0];
                target.addMark('hongsongmrfz');
                player.removeMark('hongsongmrfz');
                if (player.hasMark('hongsongmrfz')) event.goto(0);
              }
            },
          },
        },
        ai: {
          threaten: 0.5,
        },
      },
      //夕
      huijuanmrfz: {
        intro: { content: '记录的牌名:$' },
        audio: 2,
        forced: true,
        trigger: { global: 'useCard' },
        filter(event, player) {
          if (get.type(event.card) == 'equip') return false;
          if (get.type(event.card) == 'trick' && player.hasSkill('huijuanmrfz_trick')) return false;
          if (get.type(event.card) == 'basic' && player.hasSkill('huijuanmrfz_basic')) return false;
          if (get.type(event.card) == 'delay' && player.hasSkill('huijuanmrfz_delay')) return false;
          return !player.getStorage('huijuanmrfz').includes(event.card.name);
        },
        content() {
          player.markAuto('huijuanmrfz', [trigger.card.name]);
          if (get.type(trigger.card) == 'trick') player.addSkill('huijuanmrfz_trick');
          if (get.type(trigger.card) == 'delay') player.addSkill('huijuanmrfz_delay');
          if (get.type(trigger.card) == 'basic') player.addSkill('huijuanmrfz_basic');
        },
        group: ['huijuanmrfz_use', 'huijuanmrfz_clear'],
        subSkill: {
          //检测技能
          basic: {
            silent: true,
            forced: true,
            firstDo: true,
            charlotte: true,
            trigger: { global: 'roundStart' },
            content() {
              player.removeSkill('huijuanmrfz_basic');
            },
          },
          trick: {
            silent: true,
            forced: true,
            firstDo: true,
            charlotte: true,
            trigger: { global: 'roundStart' },
            content() {
              player.removeSkill('huijuanmrfz_trick');
            },
          },
          delay: {
            silent: true,
            forced: true,
            firstDo: true,
            charlotte: true,
            trigger: { global: 'roundStart' },
            content() {
              player.removeSkill('huijuanmrfz_delay');
            },
          },
          //非检测技能
          clear: {
            silent: true,
            forced: true,
            charlotte: true,
            firstDo: true,
            trigger: { player: 'phaseEnd' },
            filter(event, player) {
              return player.getStorage('huijuanmrfz').length;
            },
            content() {
              for (var i = 0; i < 2; i++) player.unmarkAuto('huijuanmrfz', [player.getStorage('huijuanmrfz')[0]]);
            },
          },
          use: {
            hiddenCard(player, name) {
              if (name == 'wuxie') return player.getStorage('huijianmrfz').includes(name);
            },
            enable: ['chooseToRespond', 'chooseToUse'],
            filter(event, player) {
              if (player.getStorage('huijuanmrfz').length == 0 || player.countCards('h') == 0) return false;
              for (var i = 0; i < player.getStorage('huijuanmrfz').length; i++) {
                if (
                  event.filterCard(
                    {
                      name: player.getStorage('huijuanmrfz')[i],
                    },
                    player,
                    event,
                  )
                )
                  return true;
              }
              return false;
            },
            chooseButton: {
              dialog(event, player) {
                var list = [];
                var storage = player.getStorage('huijuanmrfz');
                for (var i of lib.inpile) {
                  if (event.filterCard({ name: i }, player, event) && storage.includes(i)) list.push([get.type(i) == 'basic' ? '基本' : '锦囊', '', i]);
                }
                return ui.create.dialog('绘卷', [list, 'vcard'], 'hidden');
              },
              filter(button, player) {
                return lib.filter.cardEnabled(
                  {
                    name: button.link[2],
                  },
                  player,
                  _status.event.parent,
                );
              },
              check(button) {
                var player = _status.event.player;
                var card = {
                  name: button.link[2],
                };
                if (player.getUseValue(card) > 0) return get.order(card);
                return -1;
              },
              backup(links, player) {
                return {
                  audio: 'huijuanmrfz',
                  popname: true,
                  filterCard: true,
                  position: 'hs',
                  viewAs: {
                    name: links[0][2],
                  },
                  check(card) {
                    return 6 - get.value(card);
                  },
                  precontent() {
                    var cards = event.result.card;
                    if (cards.name == 'sha' || cards.name == 'jiu') event.parent.addCount = false;
                    player.unmarkAuto('huijuanmrfz', [cards.name]);
                  },
                };
              },
              prompt(links, player) {
                return '将一张手牌当做【' + get.translation(links[0][2]) + '】使用';
              },
            },
            ai: {
              order: 13,
              result: {
                player: 1,
              },
            },
          },
        },
        ai: {
          threaten: 1.3,
        },
      },
      dianjingmrfz: {
        mark: true,
        zhuanhuanji: true,
        marktext: '☯',
        intro: {
          content(event, player) {
            return !player.storage.dianjingmrfz ? '当你使用转化牌时,你可以从牌堆中获得与你使用的转化牌的牌名相同的牌.' : '当你使用转化牌时,你可以从牌堆中获得与你使用的转化牌的类型相同的牌.';
          },
        },
        audio: 2,
        trigger: { player: 'useCardAfter' },
        filter(event, player) {
          return !event.card.isCard;
        },
        forced: true,
        content() {
          var cardt = get.cardPile2(function (card) {
            return get.type(card, 'trick') == get.type(trigger.card);
          });
          var cardf = get.cardPile2(trigger.card.name);
          if (player.storage.dianjingmrfz == true) {
            if (cardt) player.gain(cardt, 'gain2', 'log');
            else player.chat('牌堆中没有', cardt, '牌');
          } else {
            if (cardf) player.gain(cardf, 'gain2', 'log');
            else player.chat('牌堆中没有【' + get.translation(trigger.card.name) + '】');
          }
          player.changeZhuanhuanji('dianjingmrfz');
        },
      },
      cangjuanmrfz: {
        mod: {
          ignoredHandcard(card, player) {
            if (card.hasGaintag('cangjuanmrfz')) {
              return true;
            }
          },
          cardDiscardable(card, player, name) {
            if (name == 'phaseDiscard' && card.hasGaintag('cangjuanmrfz')) return false;
          },
        },
        audio: 2,
        trigger: { player: 'gainBegin' },
        filter(event, player) {
          return player.countMark('cangjuanmrfz') < 3;
        },
        forced: true,
        content() {
          player.addMark('cangjuanmrfz', false);
          trigger.gaintag.add('cangjuanmrfz');
        },
        group: 'cangjuanmrfz_remove',
        subSkill: {
          remove: {
            silent: true,
            charlotte: true,
            forced: true,
            trigger: { global: 'roundStart' },
            content() {
              player.removeMark('cangjuanmrfz', 3);
              player.removeGaintag('cangjuanmrfz');
            },
          },
        },
      },
      //能天使
      lianshemrfz: {
        mod: {
          cardUsable(card, player, num) {
            if (card.name == 'sha') return (num = player.maxHp);
          },
        },
        audio: 2,
        trigger: { player: 'useCard' },
        forced: true,
        firstDo: true,
        filter(event, player) {
          return !event.audioed && event.card.name == 'sha' && event.parent.type == 'phase';
        },
        content() {
          trigger.audioed = true;
        },
      },
      guozaimrfz: {
        audio: 4,
        enable: 'phaseUse',
        usable: 1,
        filter(event, player) {
          return player.getCardUsable('sha') > 0;
        },
        filterTarget(card, player, target) {
          return target != player;
        },
        content() {
          'step 0';
          var cards = game.cardsGotoOrdering(get.cards(player.maxHp + 1)).cards;
          event.cards = cards;
          event.cards2 = [];
          event.cards3 = [];
          event.num = 0;
          if (!player.canUse('sha', target, false)) event.finish();
          if (Array.isArray(event.cards))
            for (var i of event.cards) {
              if (i.name == 'sha') {
                event.cards2.push(i);
                event.num++;
              } else event.cards3.push(i);
            }
          game.cardsGotoOrdering(event.cards);
          player.showCards(event.cards, get.translation(player) + '发动了【过载】');
          if (event.cards2.length == 0 || !target.isAlive()) event.goto(2);
          ('step 1');
          var cards = event.cards2[event.num - 1];
          player.showCards(cards, get.translation(player) + '发动了【过载】');
          event.num--;
          if (target.isAlive())
            player
              .chooseUseTarget(cards, true, 'nodistance')
              .set('filterTarget', function (card, player, target) {
                var evt = _status.event;
                if (_status.event.name == 'chooseTarget') evt = evt.parent;
                if (target != player && target != evt.guozaimrfz_target) return false;
                return lib.filter.targetEnabledx(card, player, target);
              })
              .set('guozaimrfz_target', target);
          if (event.num > 0 && target.isAlive() && player.getCardUsable('sha') > 0) event.redo();
          ('step 2');
          if (event.cards3.length)
            player.chooseButton(['过载:你可以获得一张牌', event.cards3]).set('ai', function (button) {
              return get.value(button.link, _status.event.player);
            });
          ('step 3');
          if (result.links?.length) player.gain(result.links, 'gain2');
        },
        ai: {
          order: 10,
          threaten: 1.1,
          expose: 0.6,
          result: {
            target: -1,
          },
        },
      },
      //远牙
      yuanmengmrfz: {
        audio: 4,
        trigger: { global: 'useCard' },
        filter(event, player) {
          if (player.inRange(event.player)) return false;
          if (!player.hasSha()) return false;
          return event.card && event.card.name == 'sha' && event.player != player;
        },
        forced: true,
        content() {
          var target = trigger.targets[0],
            source = trigger.player;
          ('step 0');
          if (target == player)
            player
              .chooseControl('确定', 'cancel2')
              .set('prompt', get.prompt('yuanmengmrfz'))
              .set('prompt2', '你可以对' + get.translation(source) + '使用【杀】')
              .set('ai', function () {
                var player = _status.event.player,
                  target = _status.event.getTrigger().player,
                  source = _status.event.getTrigger().source;
                if (get.attitude(player, target) > 2) return 1;
                return 0;
              });
          else event.goto(2);
          ('step 1');
          if (result.index == 0) {
            if (player.hasSha()) {
              player
                .chooseToUse(true, function (card, player, event) {
                  if (card.name != 'sha') return false;
                  return lib.filter.cardEnabled.apply(this, arguments);
                })
                .set('complexSelect', true)
                .set('filterTarget', function (card, player, target) {
                  if (target != _status.event.targetx && !ui.selected.targets.includes(_status.event.targetx)) return false;
                  return lib.filter.targetEnabled.apply(this, arguments);
                })
                .set('targetx', source);
              player.draw();
            }
            event.finish();
          } else event.finish();
          ('step 2');
          var next = player.chooseControl(get.translation(target), get.translation(source), 'cancel2').set('prompt', get.prompt('yuanmengmrfz')).set('prompt2', '你可以对其中一名角色使用【杀】');
          next.set('ai', function () {
            var player = _status.event.player,
              target = _status.event.getTrigger().player,
              source = _status.event.getTrigger().source;
            if (get.attitude(player, target) < 2) return 1;
            if (get.attitude(player, source) < 2) return 0;
            return 2;
          });
          ('step 3');
          if (result.index != 2) {
            var resulty = result.index == 1 ? target : source,
              resultx = result.index == 0 ? target : source;
            //player.addTempSkill('yuanmengmrfz_discard',{player:'shaAfter'});
            if (player.hasSha()) {
              player
                .chooseToUse(true, function (card, player, event) {
                  if (card.name != 'sha') return false;
                  return lib.filter.cardEnabled.apply(this, arguments);
                })
                .set('complexSelect', true)
                .set('filterTarget', function (card, player, target) {
                  if (target != _status.event.targetx && !ui.selected.targets.includes(_status.event.targetx)) return false;
                  return lib.filter.targetEnabled.apply(this, arguments);
                })
                .set('targetx', result.index == 0 ? target : source);
              player.draw();
              resulty.draw();
            } else event.finish();
          } else event.finish();
        },
        ai: {
          expose: 0.5,
          threaten: 1.2,
        },
      },
      ningshenmrfz: {
        intro: {
          content(event, player) {
            return (player.storage.ningshenmrfz_damage ? '·本轮已受到过伤害</br>' : '') + (player.countMark('ningshenmrfz') == 0 ? '·已连续0个回合没有成为其他角色使用牌的目标.' : '·已连续' + player.countMark('ningshenmrfz') + '个回合没有成为其他角色使用牌的目标.') + (player.storage.ningshenmrfz_mark != 0 ? '</br>·下一张带有伤害类标签的牌伤害基数+' + player.storage.ningshenmrfz_mark : '');
          },
        },
        mark: true,
        audio: 2,
        forced: true,
        trigger: { global: 'phaseEnd' },
        filter(event, player) {
          if (!event.player.isAlive()) return false;
          return true;
        },
        content() {
          'step 0';
          var history = trigger.player.getHistory('useCard');
          if (trigger.player != player)
            for (var i = 0; i < history.length; i++) {
              if (!history[i].targets) continue;
              for (var j = 0; j < history[i].targets.length; j++) {
                if (history[i].targets[j] == player) {
                  player.removeMark('ningshenmrfz', player.countMark('ningshenmrfz'));
                  event.finish();
                }
              }
            }
          ('step 1');
          player.addMark('ningshenmrfz');
          ('step 2');
          if (player.countMark('ningshenmrfz') >= 2) {
            player
              .chooseControl('摸牌', '获得杀')
              .set('prompt', get.prompt('ningshenmrfz'))
              .set('prompt2', '请选择一项')
              .set('ai', function (event, player) {
                if (
                  player.hp <= 2 ||
                  player.hasCard(function (card) {
                    return card.name == 'sha';
                  })
                )
                  return 0;
                return 1;
              });
            player.removeMark('ningshenmrfz', player.countMark('ningshenmrfz'));
            player.popup('ningshenmrfz');
          } else event.finish();
          ('step 3');
          var cards = get.cardPile2('sha');
          if (result.index == 0) player.draw();
          else if (cards) player.gain(cards, 'gain2', 'log');
        },
        group: ['ningshenmrfz_mark', 'ningshenmrfz_damage', 'ningshenmrfz_remove'],
        subSkill: {
          mark: {
            trigger: { player: 'useCard1' },
            forced: true,
            firstDo: true,
            charlotte: true,
            filter(event, player) {
              return get.tag(event.card, 'damage') && player.storage.ningshenmrfz_mark > 0;
            },
            content() {
              trigger.baseDamage += player.storage.ningshenmrfz_mark;
              player.storage.ningshenmrfz_mark = 0;
            },
            init(player) {
              player.storage.ningshenmrfz_mark = 0;
            },
            onremove(player) {
              delete player.storage.ningshenmrfz_mark;
            },
            ai: {
              damageBonus: true,
            },
          },
          damage: {
            silent: true,
            charlotte: true,
            popup: false,
            trigger: { global: 'roundStart' },
            content() {
              if (!player.storage.ningshenmrfz_damage) {
                player.storage.ningshenmrfz_mark++;
              } else player.storage.ningshenmrfz_damage = false;
            },
          },
          remove: {
            silent: true,
            charlotte: true,
            popup: false,
            trigger: { player: 'damageEnd' },
            content() {
              if (!player.storage.ningshenmrfz_damage) player.storage.ningshenmrfz_damage = true;
            },
          },
        },
        ai: {
          threaten: 1.1,
        },
      },
      bingximrfz: {
        mod: {
          attackRangeBase(player, num) {
            if (player != _status.currentPhase && player.hp <= player.countCards('h')) return (num = 0);
            return num;
          },
        },
      },
      //迷迭香
      nianshoumrfz: {
        markimage: 'extension/驶舰之向/image/orther/mdxnianshoumrfz.png',
        intro: {
          name: '巨剑',
          content: 'expansion',
          markcount: 'expansion',
        },
        onremove(player, skill) {
          var cards = player.getExpansions(skill);
          if (cards.length) player.loseToDiscardpile(cards);
        },
        audio: 4,
        enable: 'phaseUse',
        filter(event, player) {
          if (player.getExpansions('nianshoumrfz').length >= 2) return false;
          return player.hasCard(function (card) {
            return get.subtype(card) == 'equip1';
          });
        },
        filterCard(card) {
          return get.subtype(card) == 'equip1';
        },
        position: 'he',
        discard: false,
        content() {
          player.addToExpansion(cards, player, 'give').gaintag.add('nianshoumrfz');
        },
        group: ['nianshoumrfz_disable', 'nianshoumrfz_usesha', 'nianshoumrfz_eff1', 'nianshoumrfz_eff2', 'nianshoumrfz_eff3', 'nianshoumrfz_eff4', 'nianshoumrfz_eff5'],
        subSkill: {
          disable: {
            trigger: {
              global: 'phaseBefore',
              player: 'enterGame',
            },
            forced: true,
            charlotte: true,
            filter(event, player) {
              return event.name != 'phase' || game.phaseNumber == 0;
            },
            content() {
              var card = get.cardPile2(function (card) {
                return get.subtype(card) == 'equip1';
              });
              ('step 0');
              event.num = 0;
              player.disableEquip('equip1');
              ('step 1');
              event.num++;
              if (card) player.gain(card, 'gain2', 'log');
              else player.chat('牌堆中没有武器牌了');
              if (event.num < 2) event.redo();
            },
          },
          usesha: {
            forced: true,
            trigger: { player: 'useCardToPlayered' },
            filter(event, player) {
              var targetx = event.targets,
                num = 0;
              if (event.card.name != 'sha' || player.getExpansions('nianshoumrfz').length == 0) return false;
              if (event.parent.triggeredTargets3.length > 1) return false;
              for (var i = 0; i < targetx.length; i++) {
                if (targetx[i].getExpansions('nianshoumrfz').length < 2) num++;
              }
              return num > 0;
            },
            content() {
              'step 0';
              player.chooseBool('是否将一个‘巨剑’置于' + (trigger.targets.length == 1 ? get.translation(trigger.targets[0]) : '其中一个目标') + '的武将牌上').set('ai', function () {
                return trigger.targets.some((q) => get.attitude(player, q) < 2);
              }); //QQQ
              ('step 1');
              if (result.bool && trigger.targets.length == 1) {
                var cards = player.getExpansions('nianshoumrfz');
                if (cards.length) player.chooseButton(['选择一个‘巨剑’', cards], true);
                else event.finish();
              } else event.goto(4);
              ('step 2');
              if (result.links && result.bool && trigger.targets.length == 1) {
                player.gain(result.links, 'gain2').gaintag.add('nianshoumrfz2');
              }
              ('step 3');
              if (result.cards && trigger.targets.length == 1) {
                var cards3 = player.getCards('h', function (card) {
                  return card.hasGaintag('nianshoumrfz2');
                });
                trigger.targets[0].addToExpansion(cards3, trigger.targets[0], 'give').gaintag.add('nianshoumrfz');
              }
              event.finish();
              ('step 4');
              if (result.links && result.bool && trigger.targets.length > 1) {
                player
                  .chooseTarget(true, function (card, player, target) {
                    return _status.event.targets.includes(target);
                  })
                  .set('targets', trigger.targets)
                  .set('ai', function (target) {
                    return get.attitude(_status.event.player, target) < 2;
                  });
              } else event.finish();
              ('step 5');
              if (result.targets?.length) {
                event.target = result.targets[0];
                var cards = player.getExpansions('nianshoumrfz');
                if (cards.length) player.chooseButton(['选择一个‘巨剑’', cards], true);
                else event.finish();
              } else event.finish();
              ('step 6');
              if (result.links && result.bool) {
                player.gain(result.links, 'gain2').gaintag.add('nianshoumrfz2');
              }
              ('step 7');
              if (result.cards?.length) {
                var cards3 = player.getCards('h', function (card) {
                  return card.hasGaintag('nianshoumrfz2');
                });
                event.target.addToExpansion(cards3, event.target, 'give').gaintag.add('nianshoumrfz');
              }
            },
          },
          eff1: {
            trigger: {
              player: ['loseAfter', 'addToExpansionAfter', 'cardsGotoSpecialAfter', 'loseAsyncAfter'],
            },
            filter(event, player, name) {
              if (event.name == 'lose' || event.name == 'loseAsync') return event.getlx !== false && event.toStorage == true;
              if (event.name == 'cardGotoSpecial') return !event.notrigger;
              return true;
            },
            forced: true,
            charlotte: true,
            content() {
              for (var i = 0; i < player.getExpansions('nianshoumrfz').length; i++) {
                var names = player.getExpansions('nianshoumrfz')[i].name + '_skill';
                if (lib.skill[names]) {
                  player.addSkill(names);
                } //QQQ
              }
            },
          },
          eff2: {
            trigger: {
              player: 'gainAfter',
            },
            filter(event, player) {
              return (
                event.fromStorage == true ||
                game.hasPlayer2(function (current) {
                  var evt = event.getl(current);
                  return evt && evt.xs && evt.xs.length;
                })
              );
            },
            forced: true,
            charlotte: true,
            content() {
              if (Array.isArray(trigger.cards))
                for (var i of trigger.cards) {
                  var names = i.name + '_skill';
                  if (lib.skill[names] && player.hasSkill(names)) {
                    player.removeSkill(names);
                  } //QQQ
                }
            },
          },
          eff3: {
            forced: true,
            charlotte: true,
            trigger: { global: 'phaseDrawBegin2' },
            filter(event, player) {
              return event.player.getExpansions('nianshoumrfz').length && event.player != player;
            },
            content() {
              var target = trigger.player;
              trigger.num -= target.getExpansions('nianshoumrfz').length;
            },
          },
          eff4: {
            forced: true,
            charlotte: true,
            trigger: { player: 'damageBegin1' },
            usable: 1,
            filter(event, player) {
              if (event.source == undefined) return false;
              return event.source.getExpansions('nianshoumrfz').length;
            },
            content() {
              trigger.num -= trigger.source.getExpansions('nianshoumrfz').length;
            },
          },
          eff5: {
            forced: true,
            charlotte: true,
            trigger: { player: 'phaseZhunbeiBegin' },
            filter(event, player) {
              return game.hasPlayer(function (current) {
                return current.getExpansions('nianshoumrfz').length && current != player;
              });
            },
            content() {
              var list = ['e', 'h'];
              for (var i of game.players) {
                if (i.getExpansions('nianshoumrfz').length && i != player) {
                  for (var j = 0; j < 2; j++) {
                    if (i.countCards(list[j]) > 0) {
                      player.gain(i.getCards(list[j]).randomGet(), 'give');
                      game.log(player, '获得了', i, '的' + get.translation(i.getCards(list[j]).randomGet()));
                    }
                  }
                  player.gain(i.getExpansions('nianshoumrfz'), 'give', 'log');
                }
              }
            },
          },
        },
        ai: {
          order: 13,
          result: {
            player: 1,
          },
        },
      },
      zhangyimrfz: {
        charlotte: true,
        mod: {
          attackRange(player, num) {
            if (player.getExpansions('nianshoumrfz').length) return num + player.getExpansions('nianshoumrfz').length;
          },
        },
      },
      chongjimrfz: {
        audio: 2,
        trigger: { source: 'damageEnd' },
        forced: true,
        filter(event, player) {
          if (event.parent.name == '_lianhuan' || event.parent.name == '_lianhuan2') return false;
          if (event.card && event.card.name != 'sha') return false;
          if (game.countPlayer() <= 2) return false;
          return event.parent.name != 'chongjimrfz' && event.num > 0;
        },
        content() {
          'step 0';
          var targets = trigger.player;
          player.chooseTarget(get.prompt('chongjimrfz'), '你可以对' + get.translation(targets) + '的上家或下家造成一点伤害', function (card, player, target) {
            return (target == targets.next || target == targets.previous) && target != player;
          }).ai = function (target) {
            return -get.attitude(player, target);
          };
          ('step 1');
          if (result.targets?.length) {
            result.targets[0].damage();
            if (trigger.num > 0) result.targets[0].chooseToDiscard('h', true, get.prompt('chongjimrfz'), `请选择弃置${trigger.num}张手牌`, trigger.num);
          }
        },
      },
      //水陈 假日威龙陈
      yuyunmrfz: {
        audio: 2,
        trigger: { player: 'phaseEnd' },
        forced: true,
        content() {
          var num = player.getCardUsable('sha');
          var history = player.getHistory('useCard');
          ('step 0');
          for (var i = 0; i < history.length; i++) {
            if (history[i].card.name == 'sha') {
              player.removeMark('yuyunmrfz', player.countMark('yuyunmrfz'));
              event.finish();
            }
          }
          ('step 1');
          player.chooseBool('是否发动【余韵】？');
          ('step 2');
          if (result.bool) {
            player.draw(Math.min(num, 3));
          } else event.finish();
          ('step 3');
          player.removeMark('yuyunmrfz', player.countMark('yuyunmrfz'));
          player.addMark('yuyunmrfz', Math.min(num, 2));
        },
        mod: {
          cardUsable(card, player, num) {
            if (card.name == 'sha') return (num += player.countMark('yuyunmrfz'));
          },
        },
      },
      shuiqiangmrfz: {
        audio: 2,
        trigger: { player: 'useCardToPlayered' },
        filter(event, player) {
          if (event.parent.triggeredTargets3.length > 1) return false;
          if (event.card.name != 'sha') return false;
          return game.hasPlayer(function (current) {
            return !event.targets.includes(current) && player.canUse(event.card, current) && player.inRange(current);
          });
        },
        forced: true,
        content() {
          var list = [];
          ('step 0');
          player
            .chooseTarget([1, Infinity], get.prompt('shuiqiangmrfz'), '为' + get.translation(trigger.card) + '增加任意个目标', function (card, player, target) {
              return !_status.event.sourcex.includes(target) && player.inRange(target) && player.canUse(_status.event.card, target);
            })
            .set('sourcex', trigger.targets)
            .set('ai', function (target) {
              var player = _status.event.player;
              return get.effect(target, _status.event.card, player, player);
            })
            .set('card', trigger.card)
            .setHiddenSkill(event.name);
          ('step 1');
          if (result.targets?.length) {
            for (var i = 0; i < result.targets.length; i++) {
              trigger.targets.push(result.targets[i]);
              player.line(result.targets[i]);
            }
          } else {
            event.finish();
          }
        },
      },
      jianfengmrfz: {
        audio: 2,
        trigger: { player: 'useCardAfter' },
        filter(event, player) {
          return event.card && event.card.name == 'sha';
        },
        forced: true,
        content() {
          'step 0';
          player.judge(function (card) {
            var suit = card.suit;
            if (suit == 'spade') return -4;
            return 0;
          }).judge2 = function (result) {
            return result.bool == false ? true : false;
          };
          ('step 1');
          if (result.suit == 'spade') {
            var list = [];
            if (Array.isArray(trigger.cards))
              for (var i of trigger.cards) {
                if (get.position(i, true) == 'o') {
                  list.push(i);
                }
              }
            if (trigger.addCount !== false) {
              trigger.addCount = false;
              trigger.player.getStat().card.sha--;
            }
            player.gain(list, 'gain2');
          }
        },
      },
      //水月
      liqunmrfz: {
        audio: 2,
        trigger: { target: 'useCardToTargeted' },
        filter(event, player) {
          if (event.player == player) return false;
          return event.card.length < 2 || get.distance(player, event.target) < 2;
        },
        usable: 1,
        check(event, player) {
          if (event.card.name == 'wugu' || event.card.name == 'tao') return false;
          if (get.attitude(player, event.target) > 2 && event.card.name == 'sha') return false;
          return true;
        },
        content() {
          trigger.parent.excluded.add(player);
        },
      },
      chuangshangmrfz: {
        audio: 2,
        trigger: { source: 'damageEnd' },
        filter(event, player) {
          if (event.parent.name == 'chuangshangmrfz') return false;
          if (event.player == player) return false;
          return (
            event.player.isMinHp() ||
            game.hasPlayer(function (current) {
              return current != player && player.inRange(current) && current.maxHp / 2 >= current.hp;
            })
          );
        },
        content() {
          var target = trigger.player;
          ('step 0');
          var str1 = '摸两张牌',
            str2 = `对${get.translation(target)}造成一点伤害`;
          if (
            target.isMinHp() &&
            game.hasPlayer(function (current) {
              return current != player && player.inRange(current) && current.maxHp / 2 >= current.hp;
            })
          ) {
            player
              .chooseControl(str1, str2)
              .set('prompt', get.prompt('chuangshangmrfz'))
              .set('prompt2', '请选择一项')
              .set('ai', function (player) {
                if (player.hp < 2 && player.countCards('h') < 3) return 0;
                return 1;
              });
          } else {
            player.draw();
            event.finish();
          }
          ('step 1');
          if (result.index == 0) {
            player.draw(2);
          } else target.damage();
        },
      },
      jinghuamrfz: {
        audio: 2,
        trigger: { player: 'useCardToPlayered' },
        usable: 1,
        filter(event, player) {
          if (event.parent.triggeredTargets3.length > 1) return false;
          if (event.card.name != 'sha') return false;
          return game.hasPlayer(function (current) {
            return current != player && current != event.target;
          });
        },
        check(event, player) {
          if (player.hp < 3) return false;
          if (
            !game.hasPlayer(function (current) {
              return current != event.target && current != player && current != event.player && get.attitude(player, current) < 2;
            })
          )
            return false;
          return true;
        },
        content() {
          'step 0';
          player
            .chooseTarget(true, [1, 2], get.prompt('jinghuamrfz'), '为' + get.translation(trigger.card) + '增加至多两个目标', function (card, player, target) {
              return !_status.event.sourcex.includes(target) && player.canUse(_status.event.card, target, false);
            })
            .set('sourcex', trigger.targets)
            .set('ai', function (target) {
              var player = _status.event.player;
              return get.effect(target, _status.event.card, player, player);
            })
            .set('card', trigger.card)
            .setHiddenSkill(event.name);
          ('step 1');
          if (result.bool) {
            player.addTempSkill('jinghuamrfz2', {
              player: 'useCardAfter',
            });
            for (var i = 0; i < result.targets.length; i++) {
              trigger.targets.push(result.targets[i]);
              player.line(result.targets[i]);
            }
          }
        },
      },
      jinghuamrfz2: {
        charlotte: true,
        forced: true,
        trigger: { player: 'useCardEnd' },
        filter(event, player) {
          if (event.card.name != 'sha') return false;
          return (
            player.getHistory('sourceDamage', function (evt) {
              return evt.card == event.card;
            }).length <= 2
          );
        },
        content() {
          player.loseHp();
        },
      },
      //仇白
      ruximrfz: {
        audio: 4,
        trigger: { player: 'useCardToPlayered' },
        filter(event, player) {
          if (event.target == player) return false;
          if (event.parent.triggeredTargets3.length > 1) return false;
          return event.card && event.card.name == 'sha';
        },
        check(event, player) {
          return get.attitude(player, event.target) < 2;
        },
        subfrequent: ['link'],
        content() {
          'step 0';
          player.judge(function (card) {
            var suit = card.suit;
            if (suit == 'spade') return -2;
            if (suit == 'club') return -4;
            return 0;
          }).judge2 = function (result) {
            return result.bool == false ? true : false;
          };
          ('step 1');
          for (var i = 0; i < trigger.targets.length; i++) {
            var target = trigger.targets[i];
            if (result.color == 'black') {
              target.link(true);
            }
            if (result.suit == 'club') {
              player.addTempSkill('ruximrfz2', 'phaseEnd');
              player.addMark('ruximrfz2', false);
            }
          }
        },
        group: 'ruximrfz_link',
        subSkill: {
          link: {
            trigger: { player: 'useCardToPlayer' },
            filter(event, player) {
              if (event.target == player) return false;
              if (event.targets.length > 1) return false;
              return event.target.isLinked() || event.target.countCards('j') > 0;
            },
            forced: true,
            content() {
              'step 0';
              if (trigger.targets[0].countCards('hej') == 0) {
                event.finish();
                player.draw();
              }
              ('step 1');
              player.chooseBool(get.prompt('ruximrfz'), '【入隙】:是否摸一张牌</br>选择取消则为弃置' + get.translation(trigger.targets[0]) + '的区域内一张牌').set('ai', function (player) {
                var target = trigger.targets[0]; //QQQ
                var att = get.attitude(player, target);
                var num = Math.random();
                if (att > 2 && target.countCards('j') > 0) return false;
                return num > 0.5 ? true : false;
              });
              ('step 2');
              if (result.bool) {
                player.draw();
              } else {
                player.discardPlayerCard(trigger.targets[0], 'hej', true);
                player.line(trigger.targets[0]);
              }
            },
          },
        },
      },
      ruximrfz2: {
        charlotte: true,
        mod: {
          cardUsable(card, player, num) {
            if (card.name == 'sha') return num + player.countMark('ruximrfz2');
          },
        },
      },
      wenxuemrfz: {
        audio: 4,
        trigger: { player: 'useCard2' },
        filter(event, player) {
          if (event.card.name != 'sha') return false;
          return game.hasPlayer(function (current) {
            return !event.targets.includes(current) && player.canUse(event.card, current) && player.inRange(current) && (current.isLinked() || current.countCards('j') > 0);
          });
        },
        forced: true,
        content() {
          'step 0';
          player
            .chooseTarget([1, 2], get.prompt('wenxuemrfz'), '为' + get.translation(trigger.card) + '增加至多两个目标', function (card, player, target) {
              return !_status.event.sourcex.includes(target) && player.inRange(target) && player.canUse(_status.event.card, target) && (target.isLinked() || target.countCards('j') > 0);
            })
            .set('sourcex', trigger.targets)
            .set('ai', function (target) {
              var player = _status.event.player;
              return get.effect(target, _status.event.card, player, player);
            })
            .set('card', trigger.card)
            .setHiddenSkill(event.name);
          ('step 1');
          if (result.targets?.length) {
            for (var i = 0; i < result.targets.length; i++) {
              trigger.targets.push(result.targets[i]);
            }
          }
        },
        group: ['wenxuemrfz_sha', 'wenxuemrfz_count', 'wenxuemrfz_clear'],
        subSkill: {
          sha: {
            forced: true,
            trigger: { player: 'useCardAfter' },
            filter(event, player) {
              if (event.card.name != 'sha') return false;
              if (
                !game.hasPlayer(function (current) {
                  return current != player && player.inRange(current) && player.canUse('sha', current);
                })
              )
                return false;
              var history = player.getHistory('useCard', function (evt) {
                return evt.card.name == 'sha' && evt.cards && evt.cards.length == 1;
              });
              return history.length % 2 == 0 && event.cards && event.cards.length == 1;
            },
            content() {
              'step 0';
              //event.num=Math.floor(player.countMark('wenxuemrfz_count')/2);
              var history = player.getHistory('useCard', function (evt) {
                return evt.card.name == 'sha' && evt.cards && evt.cards.length == 1;
              });
              event.num = history.length / 2;
              player.chooseBool(get.prompt('wenxuemrfz'), `可以使用${event.num}张【杀】`);
              ('step 1');
              if (result.bool) {
                player.chooseUseTarget(
                  {
                    name: 'sha',
                  },
                  '请选择【杀】的目标(还可使用' + event.num + '张【杀】)',
                  false,
                );
                event.num--;
                if (event.num > 0) event.redo();
              }
            },
          },
          count: {
            silent: true,
            charlotte: true,
            trigger: { player: 'useCard' },
            filter(event, player) {
              if (player == _status.currentPhase) return false;
              return event.card && event.card.name == 'sha';
            },
            content() {
              player.addMark('wenxuemrfz_count', false);
            },
          },
          clear: {
            silent: true,
            charlotte: true,
            trigger: { player: 'phaseEnd' },
            content() {
              player.removeAllmark('wenxuemrfz_count', false);
            },
          },
        },
      },
      //归溟幽灵鲨
      yongwomrfz: {
        audio: 2,
        trigger: { player: 'dying' },
        forced: true,
        mark: true,
        intro: {
          content(event, player) {
            if (player.isTurnedOver()) return '复活不可用';
            if (!player.storage.yongwomrfz2 && !player.isTurnedOver()) return '复活未使用';
            return '复活已使用';
          },
        },
        filter(event, player) {
          if (player.storage.yongwomrfz2) return false;
          return !player.isTurnedOver();
        },
        content() {
          player.storage.yongwomrfz2 = true;
          player.turnOver();
          if (player.hp <= 0) player.recover(1 - player.hp);
        },
        mod: {
          globalTo(source, player, distance) {
            if (player.isTurnedOver()) return distance + 1;
          },
        },
        group: ['yongwomrfz_discard', 'yongwomrfz_change1', 'yongwomrfz_change2', 'yongwomrfz2'],
        subSkill: {
          discard: {
            trigger: { global: 'useCardAfter' },
            filter(event, player) {
              if (!player.isTurnedOver()) return false;
              if (event.player == player) return false;
              if (event.player.countCards('he') == 0) return false;
              return event.player == player.next || event.player == player.previous;
            },
            forced: true,
            content() {
              var target = trigger.player;
              ('step 0');
              target.chooseToDiscard('he', true, '【拥我】:请弃置一张牌');
              target.addMark('yongwomrfz2', false);
              ('step 1');
              if (target.countMark('yongwomrfz2') >= 2) {
                target.removeMark('yongwomrfz2', 2, false);
                target.damage();
              } else event.finish();
              ('step 2');
              player.chooseBool('【拥我】:是否翻面').set('ai', function () {
                var player = _status.event.player;
                if (player.hp < 2 && !player.storage.yongwomrfz2) return true;
                if (get.attitude(player, player.next) > 2 || get.attitude(player, player.previous) > 2) return true;
                return false;
              });
              ('step 3');
              if (result.bool) {
                player.turnOver();
              }
            },
          },
          change1: {
            forced: true,
            trigger: { player: 'turnOverAfter' },
            filter(event, player) {
              return !player.isTurnedOver();
            },
            content() {
              player.draw(2);
            },
          },
          change2: {
            forced: true,
            trigger: { global: 'phaseEnd' },
            filter(event, player) {
              if (player.isTurnedOver() || !event.player.isAlive()) return false;
              return player.getStat('damage') > 0 || player.getHistory('damage').length;
            },
            content() {
              'step 0';
              player.chooseBool('【拥我】:是否翻面').set('ai', function () {
                var num = 0.2,
                  player = _status.event.player;
                if (player.countCards('h') > 2) num + 0.3;
                if (player.hp > 1) num + 0.1;
                if (get.attitude(player, player.next) < 2 || get.attitude(player, player.previous) < 2) num + 0.3;
                if (player.isTurnedOver()) num + 0.3;
                return Math.random() + num > 0.6;
              });
              ('step 1');
              if (result.bool) {
                player.turnOver();
              }
            },
          },
        },
      },
      yongwomrfz2: {
        silent: true,
        trigger: { global: 'roundStart' },
        filter(event, player) {
          return player.storage.yongwomrfz2;
        },
        content() {
          player.storage.yongwomrfz2 = false;
        },
      },
      //白铁
      jigongmrfz: {
        derivation: ['jigongmrfz_card'],
        audio: 2,
        trigger: {
          global: 'phaseBefore',
          player: 'enterGame',
        },
        forced: true,
        filter(event, player) {
          return event.name != 'phase' || game.phaseNumber == 0;
        },
        content() {
          'step 0';
          var next = player
            .chooseControl()
            .set('choiceList', ['白铁多功能平台-攻击型:当你造成至少两点伤害时,你可以令此伤害+1.', '白铁多功能平台-支援型:锁定技,弃牌阶段开始时,你摸一张牌并额外执行一个出牌阶段.', '铁钳号原型机:出牌阶段你可以弃置X张带有伤害类标签的牌,选择一名你攻击范围内的其他角色,对其造成一点伤害(X=此技能本回合使用数+1).'])
            .set('ai', function () {
              return [0, 1, 2].randomGet();
            });
          next.set('prompt', get.prompt('jigongmrfz')).set('prompt2', '请选择一项');
          ('step 1');
          var list = ['baitiemrfzcard1', 'baitiemrfzcard2', 'baitiemrfzcard3'];
          for (var i = 0; i < 3; i++) {
            if (result.index == i) {
              event.card = game.createCard(list[i], ['heart', 'spade'].randomGet(), [1, 2, 6, 8].randomGet());
              player.gain(event.card, 'gain2');
              event.card2 = list[i];
            }
          }
          ('step 2');
          if (player.getCards('h').includes(card) && card.name == event.card2) player.chooseUseTarget(card, 'nopopup', true);
        },
        group: ['jigongmrfz_gcard', 'jigongmrfz_zb', 'jigongmrfz_discard'],
        subSkill: {
          gcard: {
            forced: true,
            trigger: { player: 'phaseEnd' },
            filter(event, player) {
              var list = ['baitiemrfzcard1', 'baitiemrfzcard2', 'baitiemrfzcard3'];
              for (var i = 0; i < 3; i++) {
                if (player.countCards('e', list[i])) return true;
              }
            },
            firstDo: true,
            content() {
              'step 0';
              player.chooseTarget('你可以将【支援装备】移动至一名其他角色的装备区', function (card, player, target) {
                return target != player && !target.getEquip(5) && !target.isDisabled(5);
              }).ai = function (target) {
                return get.attitude(player, target);
              };
              ('step 1');
              var list = ['baitiemrfzcard1', 'baitiemrfzcard2', 'baitiemrfzcard3'];
              if (result.bool) {
                for (var i = 0; i < 3; i++) {
                  if (player.countCards('e', list[i])) {
                    event.card = player.getCards('e', function (card) {
                      return card.name == list[i];
                    });
                    player.lose(event.card, ui.ordering, 'visible');
                    player.line(result.targets[0]);
                    event.target = result.targets[0];
                  }
                }
              } else event.finish();
              ('step 2');
              event.target.equip(event.card[0]);
            },
          },
          zb: {
            trigger: { player: 'phaseZhunbeiBegin' },
            filter(event, player) {
              var list = ['baitiemrfzcard1', 'baitiemrfzcard2', 'baitiemrfzcard3'];
              for (var i = 0; i < 3; i++) {
                if (player.countCards('e', list[i])) return false;
              }
              return true;
            },
            content() {
              'step 0';
              var next = player
                .chooseControl()
                .set('choiceList', ['白铁多功能平台-攻击型:当你造成至少两点伤害时,你可以令此伤害+1.', '白铁多功能平台-支援型:锁定技,弃牌阶段开始时,你额外执行一个出牌阶段和摸牌阶段.', '铁钳号原型机:出牌阶段你可以弃置X张带有伤害类标签的牌,选择一名你攻击范围内的其他角色,对其造成一点伤害(X=此技能本回合使用数+1).'])
                .set('ai', function () {
                  return [0, 1, 2].randomGet();
                });
              next.set('prompt', get.prompt('jigongmrfz')).set('prompt2', '请选择一项');
              ('step 1');
              var list = ['baitiemrfzcard1', 'baitiemrfzcard2', 'baitiemrfzcard3'];
              for (var i = 0; i < 3; i++) {
                if (result.index == i) {
                  event.card = game.createCard(list[i], ['heart', 'spade'].randomGet(), [1, 2, 6, 8].randomGet());
                  player.gain(event.card, 'gain2');
                  event.card2 = list[i];
                }
              }
              ('step 2');
              if (player.getCards('h').includes(card) && card.name == event.card2) player.chooseUseTarget(card, 'nopopup', true);
            },
          },
          discard: {
            forced: true,
            trigger: { global: 'phaseEnd' },
            filter(event, player) {
              var list = ['baitiemrfzcard1', 'baitiemrfzcard2', 'baitiemrfzcard3'];
              for (var i = 0; i < 3; i++) {
                if (event.player.countCards('e', list[i])) return true;
              }
            },
            content() {
              'step 0';
              var list = ['baitiemrfzcard1', 'baitiemrfzcard2', 'baitiemrfzcard3'];
              for (var i = 0; i < 3; i++) {
                if (trigger.player.countCards('e', list[i])) {
                  event.card = trigger.player.getCards('e', function (card) {
                    return card.name == list[i];
                  });
                  trigger.player.discard(event.card);
                }
              }
            },
          },
        },
      },
      jiefeimrfz: {
        audio: 2,
        trigger: { global: ['loseEnd', 'cardsDiscardEnd'] },
        forced: true,
        popup: false,
        filter(event, player) {
          var cs = event.cards;
          for (var i = 0; i < cs.length; i++) {
            if (cs[i].name.indexOf('baitiemrfzcard') == 0 && get.position(cs[i], true) == 'd') return true;
          }
          return false;
        },
        forceDie: true,
        content() {
          'step 0';
          if (!_status.jigongmrfz) _status.jigongmrfz = {};
          var list = [];
          var list2 = ['baitiemrfzcard1', 'baitiemrfzcard2', 'baitiemrfzcard3'];
          var cs = trigger.cards;
          for (var i = 0; i < cs.length; i++) {
            if (cs[i].name.indexOf('baitiemrfzcard') == 0 && get.position(cs[i], true) == 'd') {
              _status.jigongmrfz[cs[i].name] = false;
              list.push(cs[i]);
            }
            for (var j = 0; j < 3; j++) {
              if (cs[i].name == list2[j]) event.card = list2[j];
            }
          }
          game.log(list, '已被移出游戏');
          game.cardsGotoSpecial(list);
          event.card = game.createCard(list[0].name, ['heart', 'spade'].randomGet(), [1, 2, 6, 8].randomGet());
          player.popup('jigongmrfz');
          ('step 1');
          player.chooseBool(get.prompt('jigongmrfz'));
          ('step 2');
          if (result.bool) {
            player.judge(function (card) {
              var color = get.color(card);
              if (color == 'red') return -4;
              return 0;
            }).judge2 = function (result) {
              return result.bool == false ? true : false;
            };
          } else event.finish();
          ('step 3');
          if (result.color == 'red') {
            player.draw();
            player.chooseTarget('你可以令一名角色装备【支援装备】', function (card, player, target) {
              return !target.getEquip(5) && !target.isDisabled(5);
            }).ai = function (target) {
              return get.attitude(player, target);
            };
          } else event.finish();
          ('step 4');
          if (result.bool) {
            var cards = game.createCard(event.card, ['heart', 'spade'].randomGet(), [1, 2, 6, 8].randomGet());
            var target = result.targets[0];
            target.gain(cards, 'gain2');
            target.equip(cards);
          }
        },
      },
      //推进之王 维纳
      yuechuimrfz: {
        init(player, skill) {
          player.addMark(skill, 1, false);
        },
        audio: 2,
        trigger: {
          player: 'useCardAfter',
        },
        filter(event, player) {
          return event.card && event.card.name == 'sha';
        },
        forced: true,
        prompt2(event, player) {
          let num = player.countMark('yuechuimrfz') > 0 ? player.countMark('yuechuimrfz') : 1;
          return `是否摸${num}张牌？`;
        },
        async content(event, trigger, player) {
          await player.draw(player.countMark('yuechuimrfz') > 0 ? player.countMark('yuechuimrfz') : 1);
          if (player.countMark('yuechuimrfz') < 3 && player.countCards('he', { type: 'equip' }) > 0) {
            const { cards } = await player
              .chooseToDiscard('he', (card) => get.type(card) == 'equip')
              .set('prompt', `【跃锤】:你可以弃置一张装备牌令‘跃锤’中[]内的数字+1(当前:${player.countMark('yuechuimrfz') > 0 ? player.countMark('yuechuimrfz') : 1})`)
              .set('ai', (card) => {
                return get.value(card) < 8;
              })
              .forResult();
            if (cards) player.addMark('yuechuimrfz', 1, false);
          }
          let targets = trigger.targets,
            targetx = game.players.slice().filter((i) => {
              for (var j of targets) {
                if (get.distance(j, i) == 1 && !targets.includes(i)) return true;
              }
              return false;
            });
          if (targetx) {
            const targetscs = (
              await player
                .chooseTarget()
                .set('prompt', `【跃锤】:你可以对${get.translation(targetx)}其中一名角色造成一点伤害`)
                .set('filterTarget', (card, player, target) => {
                  return _status.event.targets.includes(target);
                })
                .set('ai', (target) => {
                  return get.damageEffect(target, get.event('player'), get.event('player')) > 0;
                })
                .set('targets', targetx)
                .forResult()
            ).targets;
            if (targetscs) {
              targetscs[0].damage(player);
            }
          }
        },
      },
      fensuimrfz: {
        audio: 2,
        trigger: { global: 'dying' },
        forced: true,
        filter(event, player) {
          return event.player != player && get.distance(player, event.player) <= 1;
        },
        content() {
          player.draw();
          player.line(trigger.player);
        },
      },
      //伺夜
      langqunmrfz: {
        mark: true,
        marktext: '狼群',
        intro: {
          name: '狼群',
          content: '有#个狼',
        },
        audio: 4,
        trigger: {
          global: 'phaseBefore',
          player: 'enterGame',
        },
        forced: true,
        filter(event, player) {
          return event.name != 'phase' || game.phaseNumber == 0;
        },
        content() {
          player.addMark('langqunmrfz', 2);
        },
        mod: {
          maxHandcard(player, num) {
            if (player.hasMark('langqunmrfz')) return num + 1;
          },
        },
        group: ['langqunmrfz_gainb', 'langqunmrfz_damage', 'langqunmrfz_discard'],
        subSkill: {
          gainb: {
            audio: 'langqunmrfz',
            trigger: {
              player: 'loseAfter',
              global: 'loseAsyncAfter',
            },
            forced: true,
            filter(event, player) {
              if (event.getlx === false) return false;
              if (player.countMark('langqunmrfz') > 2) return false;
              return !player.hasSkill('langqunmrfz2');
            },
            content() {
              player.addMark('langqunmrfz');
              player.addTempSkill('langqunmrfz2');
            },
          },
          damage: {
            audio: 'langqunmrfz',
            trigger: { target: 'useCardToTargeted' },
            filter(event, player) {
              return player.countMark('langqunmrfz') > 0 && get.tag(event.card, 'damage');
            },
            prompt(event, player) {
              return '你可以移去一个‘狼群’标记并令此牌(' + get.translation(event.card) + ')取消你为目标(剩余‘狼群’数:' + player.countMark('langqunmrfz') + ')';
            },
            content() {
              trigger.targets.remove(player);
              trigger.parent.triggeredTargets2.remove(player);
              trigger.untrigger();
              player.removeMark('langqunmrfz');
            },
          },
          discard: {
            audio: 'langqunmrfz',
            forced: true,
            trigger: { player: 'phaseDiscardEnd' },
            content() {
              var cards = [];
              game.getGlobalHistory('cardMove', function (evt) {
                if (evt.name == 'cardsDiscard') {
                  if (evt.getParent('phaseDiscard') == trigger) {
                    var moves = evt.cards.filterInD('d');
                    cards.addArray(moves);
                  }
                }
                if (evt.name == 'lose') {
                  if (evt.type != 'discard' || evt.position != ui.discardPile || evt.getParent('phaseDiscard') != trigger) return;
                  var moves = evt.cards.filterInD('d');
                  cards.addArray(moves);
                }
              });
              player.draw(Math.floor(cards.length / 2) + 1);
            },
          },
        },
      },
      langqunmrfz2: {},
      qunxingmrfz: {
        marktext: '群仇',
        intro: {
          name: '群仇',
          content: '你被狼群盯上了',
        },
        audio: 4,
        trigger: { target: 'useCardToTarget' },
        filter(event, player) {
          return event.player != player && event.player.countMark('qunxingmrfz') < 6;
        },
        prompt(event, player) {
          return '是否令' + get.translation(event.player) + '获得一个‘群仇’标记';
        },
        check(event, player) {
          return get.attitude(player, event.player) < 2;
        },
        content() {
          trigger.player.addMark('qunxingmrfz');
          player.line(trigger.player);
        },
        mod: {
          targetInRange(card, player, target) {
            if (target.hasMark('qunxingmrfz')) {
              return true;
            }
          },
        },
        group: ['qunxingmrfz_damage', 'qunxingmrfz_dirhit'],
        subSkill: {
          damage: {
            audio: 'qunxingmrfz',
            trigger: { source: 'damageEnd' },
            filter(event, player) {
              return event.player.hasMark('qunxingmrfz');
            },
            forced: true,
            content() {
              var target = trigger.player;
              player.draw(target.countMark('qunxingmrfz'));
              target.removeAllmark('qunxingmrfz');
            },
          },
          dirhit: {
            audio: 'qunxingmrfz',
            forced: true,
            trigger: { player: 'useCard' },
            filter(event, player) {
              return (
                event.card &&
                (get.type(event.card) == 'trick' || (get.type(event.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(event.card.name))) &&
                game.hasPlayer(function (current) {
                  return current != player && current.hasMark('qunxingmrfz');
                })
              );
            },
            content() {
              trigger.directHit.addArray(
                game.filterPlayer(function (current) {
                  return current != player && current.hasMark('qunxingmrfz');
                }),
              );
              player.line(
                game.filterPlayer(function (current) {
                  return current != player && current.hasMark('qunxingmrfz');
                }),
              );
            },
            ai: {
              directHit_ai: true,
              skillTagFilter(player, tag, arg) {
                return arg.target.hasMark('qunxingmrfz');
              },
            },
          },
        },
        ai: {
          expose: 0.1,
        },
      },
      //百炼嘉维尔
      yixuemrfz: {
        audio: 2,
        trigger: { player: 'recoverBegin' },
        forced: true,
        filter(event, player) {
          return !player.hasSkill('yixuemrfz2');
        },
        content() {
          trigger.num++;
          player.addSkill('yixuemrfz2');
        },
      },
      yixuemrfz2: {
        silent: true,
        firstDo: true,
        charlotte: true,
        trigger: { global: 'roundStart' },
        filter(event, player) {
          return player.hasSkill('yixuemrfz2');
        },
        content() {
          player.removeSkill('yixuemrfz2');
        },
      },
      juximrfz: {
        audio: 2,
        trigger: { player: 'useCardToPlayered' },
        filter(event, player) {
          if (event.targets.length > 1) return false;
          return event.card.name == 'sha' && event.target.countCards('he') > 0;
        },
        forced: true,
        content() {
          'step 0';
          var cards = trigger.target.getCards('hej'),
            list = [],
            num = 0;
          for (var i of cards) {
            list.add(i.suit);
          }
          for (var i of lib.suit) {
            if (list.includes(i)) num++;
          }
          player.choosePlayerCard(trigger.target, 'he', [1, Math.min(trigger.target.countCards('he'), num)], get.prompt('juximrfz', trigger.target) + '(可选' + num + '张牌)').set('forceAuto', true);
          ('step 1');
          if (result.links?.length) {
            var target = trigger.target;
            player.addToExpansion(result.cards, 'giveAuto', player).gaintag.add('juximrfz2');
            player.addSkill('juximrfz2');
          }
        },
        ai: {
          unequip: true,
          directHit_ai: true,
          skillTagFilter(player, tag, arg) {
            if (get.attitude(player, arg.target) > 0) return false;
            if (tag == 'directHit_ai') return arg.target.countCards('h') < 2;
            if (arg && arg.name == 'sha' && arg.target.getEquip(2)) return true;
            return false;
          },
        },
      },
      juximrfz2: {
        intro: {
          markcount: 'expansion',
          mark(dialog, storage, player) {
            var cards = player.getExpansions('juximrfz2');
            if (player.isUnderControl(true)) dialog.addAuto(cards);
            else return `共有${get.cnNumber(cards.length)}张牌`;
          },
        },
        trigger: { player: 'useCardAfter' },
        forced: true,
        filter(event, player) {
          if (event.card.name != 'sha') return false;
          return player.getExpansions('juximrfz2').length;
        },
        content() {
          var history = player.getHistory('sourceDamage', function (evt) {
            return evt.card == trigger.card;
          }).length;
          var cards = player.getExpansions('juximrfz2');
          ('step 0');
          if (history > 0)
            player.chooseButton(['你可以至多获得两张牌', cards], [0, Math.min(2, cards.length)], true).set('ai', function (button) {
              return get.value(button.link, _status.event.player);
            });
          else
            trigger.targets[0].chooseButton(['你可以至多获得两张牌', cards], [0, Math.min(2, cards.length)], true).set('ai', function (button) {
              return get.value(button.link, _status.event.player);
            });
          ('step 1');
          if (result.links?.length) {
            if (history > 0) player.gain(result.links, 'gain2');
            else trigger.targets[0].gain(result.links, 'gain2');
          }
          ('step 2');
          player.loseToDiscardpile(cards);
          player.removeSkill('juximrfz2');
        },
      },
      conghunmrfz: {
        marktext: '坚韧',
        intro: {
          name: '坚韧',
          content(event, player) {
            if (player.storage.conghunmrfz_lose) return '已有' + player.countMark('conghunmrfz') + '个坚韧标记</br>本轮已发动过【丛魂①】';
            return '已有' + player.countMark('conghunmrfz') + '个坚韧标记</br>本轮未发动过【丛魂①】';
          },
        },
        mark: true,
        init(player) {
          player.storage.conghunmrfza = -10;
        },
        firstDo: true,
        audio: 2,
        trigger: { global: 'roundStart' },
        filter(event, player) {
          return !player.hasMark('conghunmrfz') && player.storage.conghunmrfza <= game.roundNumber - 2;
        },
        check(event, player) {
          return player.hp < 3 || player.countCards('he') < 4 || player.countCards('h') == 0;
        },
        content() {
          player.storage.conghunmrfz_lose = true;
          player.storage.conghunmrfza = game.roundNumber;
        },
        group: ['conghunmrfz_dam', 'conghunmrfz_rem', 'conghunmrfz_lose'],
        subSkill: {
          dam: {
            audio: 'conghunmrfz',
            forced: true,
            charlotte: true,
            trigger: { player: 'damageBegin3' },
            filter(event, player) {
              return player.storage.conghunmrfz_lose;
            },
            content() {
              trigger.num--;
              player.addMark('conghunmrfz');
            },
          },
          rem: {
            silent: true,
            charlotte: true,
            trigger: { global: 'roundStart' },
            filter(event, player) {
              return player.storage.conghunmrfz_lose && player.storage.conghunmrfza <= game.roundNumber - 1;
            },
            content() {
              player.storage.conghunmrfz_lose = false;
            },
          },
          lose: {
            audio: 'conghunmrfza',
            trigger: { global: 'phaseBegin' },
            filter(event, player) {
              return player.hasMark('conghunmrfz') && player.storage.conghunmrfza <= game.roundNumber - 1;
            },
            forced: true,
            charlotte: true,
            content() {
              player.loseHp();
              player.removeMark('conghunmrfz');
            },
          },
        },
      },
      conghunmrfza: { audio: 2 },
      //史尔特尔
      yujinmrfz: {
        audio: 2,
        trigger: { player: 'dying' },
        mark: true,
        limited: true,
        init(player) {
          player.storage.yujinmrfz = false;
        },
        filter(event, player) {
          return !player.storage.yujinmrfz;
        },
        content() {
          player.storage.yujinmrfz = true;
          var next = [player.phaseZhunbei(), player.phaseJudge(), player.phaseDraw(), player.phaseUse(), player.phaseDiscard(), player.phaseJieshu()];
          for (var i = 0; i < next.length; i++) {
            event.next.remove(next[i]);
            trigger.next.push(next[i]);
          }
        },
        group: 'yujinmrfz_rec',
        subSkill: {
          rec: {
            audio: 'huanghunmrfza',
            trigger: { player: 'turnOverAfter' },
            filter(event, player) {
              return player.storage.yujinmrfz == true && !player.isTurnedOver();
            },
            forced: true,
            content() {
              player.storage.yujinmrfz = false;
            },
          },
        },
      },
      huanghunmrfza: { audio: 2 },
      huanghunmrfz: {
        audio: 2,
        trigger: { player: 'phaseZhunbeiBegin' },
        check(event, player) {
          if (player.countCards('he') < 3) return false;
          if (
            player.countCards('j') > 0 &&
            !player.hasCard(function (card) {
              return card.name == 'wuxie';
            }, 'h')
          )
            return false;
          return player.hasCard(function (card) {
            return card.name == 'sha';
          }, 'h'); //QQQ
        },
        content() {
          'step 0';
          player.chooseToDiscard('he', '【黄昏】:你可以至多弃置两张牌,增加等量的体力上限', [0, 2]).set('ai', function (card) {
            return 6 - get.value(card);
          });
          ('step 1');
          if (result.cards?.length) {
            player.gainMaxHp(result.cards.length);
          }
          ('step 2');
          player.addTempSkill('huanghunmrfz_lose');
          player.addTempSkill('huanghunmrfz_dam');
          player.turnOver();
        },
        subSkill: {
          lose: {
            forced: true,
            charlotte: true,
            trigger: { player: 'useCardAfter' },
            filter(event, player) {
              return get.tag(event.card, 'damage');
            },
            content() {
              player.loseMaxHp();
            },
          },
          dam: {
            audio: 'huanghunmrfz',
            trigger: { source: 'damageBegin' },
            forced: true,
            charlotte: true,
            filter(event, player) {
              return event.card && event.card.name == 'sha';
            },
            content() {
              trigger.num++;
            },
            mod: {
              selectTarget(card, player, range) {
                if (card.name == 'sha' && range[1] != -1) range[1] += 2;
              },
              attackRange(player, num) {
                return (num += 2);
              },
            },
          },
        },
      },
      mojianmrfz: {
        audio: 2,
        trigger: { source: 'damageEnd' },
        usable: 2,
        filter(event, player) {
          return event.nature == 'fire' && player.isPhaseUsing();
        },
        content() {
          player.draw(2);
        },
        mod: {
          cardnature(card, player) {
            if (card.nature != 'thunder' && card.name == 'sha') return 'fire';
            if (card.nature == 'thunder' && card.name == 'sha') return false;
          },
        },
      },
      //新流明
      fanyuanmrfz: {
        intro: {
          name: '凡人之愿',
          content: '<直到灯火明亮>',
        },
        audio: 2,
        trigger: { global: 'useCardToTargeted' },
        filter(event, player) {
          if (get.type(event.card) != 'delay') return false;
          return game.hasPlayer(function (current) {
            return current.hasMark('fanyuanmrfz');
          });
        },
        forced: true,
        content() { },
        global: 'fanyuanmrfz_eff',
        subSkill: {
          eff: {
            charlotte: true,
            silent: true,
            trigger: { global: 'roundStart' },
            firstDo: true,
            filter(event, player) {
              return player.hasMark('fanyuanmrfz');
            },
            content() {
              player.removeMark('fanyuanmrfz', false);
            },
            mod: {
              targetEnabled(card, player, target) {
                if (get.type(card) == 'delay' && target.hasMark('fanyuanmrfz')) return false;
              },
            },
          },
        },
      },
      new_weiguangmrfz: {
        mark: true,
        intro: {
          name: '灯火不灭',
          content(event, player) {
            return '剩余次数:' + (5 - player.countMark('new_weiguangmrfz'));
          },
        },
        audio: 4,
        trigger: {
          global: ['turnOverAfter', 'linkAfter', 'addJudgeBefore'],
        },
        filter(event, player) {
          if (player.countMark('new_weiguangmrfz') > 4) return false;
          if (event.name == 'link') return event.player.isLinked();
          if (event.name == 'turnOver') return event.player.isTurnedOver();
          return event.name == 'addJudge';
        },
        prompt(event, player) {
          return '是否对' + get.translation(event.player) + '发动【微光】(' + (5 - player.countMark('new_weiguangmrfz')) + '/5)？';
        },
        check(event, player) {
          var att = get.attitude(player, event.player);
          if (event.player.hasSkill('xinfu_limu') && att > 2 && event.name == 'addJudge' && event.player.isPhaseUsing()) return false;
          if (event.player.hasSkill('xinfu_limu') && att < 0 && event.name == 'addJudge' && event.player.isPhaseUsing()) return true;
          return att > 2;
        },
        content() {
          var target = trigger.player;
          ('step 0');
          player.addMark('new_weiguangmrfz', false);
          if (!target.hasMark('fanyuanmrfz')) target.addMark('fanyuanmrfz', false);
          ('step 1');
          var num = 3;
          if (target.isLinked()) {
            target.link(false);
            num--;
          }
          if (target.isTurnedOver()) {
            target.turnOver(false);
            num--;
          }
          if (trigger.name == 'addJudge' || target.countCards('j') > 0) {
            if (trigger.name == 'addJudge') {
              trigger.cancel();
              var owner = get.owner(trigger.card);
              if (owner && owner.getCards('hej').includes(trigger.card)) owner.lose(trigger.card, ui.discardPile);
              else game.cardsDiscard(trigger.card);
              game.log(trigger.card, '进入了弃牌堆');
            }
            target.chooseToDiscard(true, 'j', target.countCards('j'));
            num--;
          }
          target.draw(num);
        },
        group: 'new_weiguangmrfz_rem',
        subSkill: {
          rem: {
            silent: true,
            charlotte: true,
            trigger: { global: 'roundStart' },
            filter(event, player) {
              return player.countMark('new_weiguangmrfz') > 0;
            },
            content() {
              player.removeMark('new_weiguangmrfz', player.countMark('new_weiguangmrfz'), false);
            },
          },
        },
      },
      yingjimrfz: {
        audio: 2,
        trigger: { global: 'useCardToTarget' },
        filter(event, player) {
          if (event.target == player) return false;
          if (event.targets.length > 1) return false;
          return get.type(event.card) == 'delay' && !player.hasMark('yingjimrfz');
        },
        prompt(event, player) {
          return '是否令' + get.translation(event.target) + '回复一点体力并摸一张牌';
        },
        check(event, player) {
          return get.attitude(player, event.target) > 2;
        },
        content() {
          trigger.targets[0].recover();
          trigger.targets[0].draw();
          player.addMark('yingjimrfz', false);
        },
        group: 'yingjimrfz_rem',
        subSkill: {
          rem: {
            silent: true,
            charlotte: true,
            trigger: { global: 'roundStart' },
            firstDo: true,
            filter(event, player) {
              return player.hasMark('yingjimrfz');
            },
            content() {
              player.removeMark('yingjimrfz', false);
            },
          },
        },
      },
      //林
      yinbimrfz: {
        marktext: '壁',
        intro: {
          name: '壁',
          content: '·琉璃壁保护着你</br>·此琉璃壁来源【荫蔽】',
        },
        audio: 2,
        enable: 'phaseUse',
        filter(event, player) {
          return !player.storage.liuliemrfz && !player.storage.yinbimrfz;
        },
        selectTarget: [1, 2],
        filterTarget(card, player, target) {
          return target != player && !target.hasMark('yinbimrfz') && !target.hasMark('zhenzamrfz');
        },
        content() {
          player.storage.yinbimrfz = true;
          if (!player.hasSkill('liuliemrfz_rem')) player.addSkill('liuliemrfz_rem');
          for (var i = 0; i < targets.length; i++) {
            if (!targets[i].hasMark('yinbimrfz')) targets[i].addMark('yinbimrfz');
            if (!targets[i].hasSkill('yinbimrfz_rem')) targets[i].addSkill('yinbimrfz_rem');
            if (targets[i].hujia < 1) targets[i].changeHujia();
          }
        },
        subSkill: {
          rem: {
            silent: true,
            charlotte: true,
            trigger: { global: 'roundStart' },
            content() {
              if (player.hasMark('yinbimrfz')) {
                player.removeMark('yinbimrfz');
                player.changeHujia(-1);
              }
              player.removeSkill('yinbimrfz_rem');
            },
          },
        },
        ai: {
          order: 10,
          expose: 0.3,
          result: {
            player: 1,
            target: 1,
          },
        },
      },
      liuliemrfz: {
        audio: 2,
        trigger: { player: 'phaseUseBegin' },
        check(event, player) {
          if (
            game.hasPlayer(function (current) {
              return current != player && get.attitude(player, current) > 2;
            })
          )
            return Math.random() > 0.85;
          return true;
        },
        async content(event, trigger, player) {
          player.storage.liuliemrfz = true;
          player.addSkill('liuliemrfz_rem');
        },
        subSkill: {
          rem: {
            charlotte: true,
            silent: true,
            trigger: { global: 'roundStart' },
            content() {
              player.storage.liuliemrfz = false;
              player.storage.yinbimrfz = false;
            },
          },
        },
      },
      zhenzamrfz: {
        marktext: '壁',
        intro: {
          name: '壁',
          content(event, player) {
            if (player.storage.liuliemrfz) return '·琉璃壁保护着你</br>·【缜匝②】已修改</br>·【荫蔽】已失效';
            return '·琉璃壁保护着你';
          },
        },
        audio: 6,
        derivation: ['zhenzamrfz_rewrite'],
        trigger: { global: 'damageEnd' },
        forced: true,
        filter(event, player) {
          if (!event.player.hasMark('zhenzamrfz') && !event.player.hasMark('yinbimrfz')) return false;
          return (
            event.hujia &&
            !event.player.hujia &&
            event.player.isIn() &&
            game.hasPlayer(function (current) {
              return current != event.player && event.player.inRangeOf(current);
            })
          );
        },
        content() {
          var playerx = trigger.player;
          ('step 0');
          if (playerx.hasMark('zhenzamrfz')) playerx.removeMark('zhenzamrfz');
          else playerx.removeMark('yinbimrfz');
          playerx.chooseTarget(get.prompt('zhenzamrfz'), '你可以随机获得攻击范围内一名其他角色的' + (player.storage.liuliemrfz ? '两张牌' : '一张牌') + '并对其造成一点伤害', function (card, target, player) {
            return target != player && player.inRangeOf(target);
          }).ai = function (target) {
            var trigger = _status.event.getTrigger();
            var player = _status.event.player;
            return -get.attitude(trigger.player, target);
          };
          ('step 1');
          if (result.targets?.length) {
            var target = result.targets[0],
              cardg = [];
            for (var i = 0; i < (player.storage.liuliemrfz ? 2 : 1); i++) {
              var cardt = target.getCards('he').randomGet();
              if (!cardg.includes(cardt)) cardg.push(cardt);
              else if (target.countCards('he') > 1) i--;
            }
            playerx.gain(cardg, target, 'giveAuto', 'bySelf');
            target.damage(playerx || 'nosource', 'nocard');
            //playerx.gainPlayerCard(target,(player.storage.liuliemrfz?2:1),'he',true)
          }
        },
        group: ['zhenzamrfz_sta', 'zhenzamrfz_gt', 'zhenzamrfz_gt2', 'zhenzamrfz_time1'],
        subSkill: {
          sta: {
            audio: 'zhenzamrfz',
            trigger: {
              global: 'phaseBefore',
              player: 'enterGame',
            },
            forced: true,
            filter(event, player) {
              return (event.name != 'phase' || game.phaseNumber == 0) && player.countCards('h') > 0;
            },
            content() {
              player.addMark('zhenzamrfz');
              if (player.hujia < 1) player.changeHujia();
            },
          },
          gt: {
            audio: 'zhenzamrfz',
            forced: true,
            trigger: { global: 'phaseZhunbeiBegin' },
            filter(event, player) {
              if (player.countMark('zhenzamrfz_time1') > 1) return false;
              return !player.hasMark('zhenzamrfz') && !player.hasMark('yinbimrfz');
            },
            content() {
              player.addMark('zhenzamrfz');
              player.addMark('zhenzamrfz_time1', false);
              if (player.hujia < 1) player.changeHujia();
            },
          },
          gt2: {
            audio: 'zhenzamrfz',
            trigger: { global: 'dying' },
            filter(event, player) {
              if (player.countMark('zhenzamrfz_time2') > 1) return false;
              if (player.hasMark('zhenzamrfz') || player.hasMark('yinbimrfz')) return false;
              return event.player != player && event.parent.name == 'damage' && event.parent.source && event.parent.source == player;
            },
            content() {
              player.addMark('zhenzamrfz');
              player.addMark('zhenzamrfz_time2', false);
              if (player.hujia < 1) player.changeHujia();
            },
          },
          time1: {
            charlotte: true,
            silent: true,
            trigger: { global: 'roundStart' },
            firstDo: true,
            content() {
              player.removeMark('zhenzamrfz_time1', player.countMark('zhenzamrfz_time1'), false);
              player.removeMark('zhenzamrfz_time2', player.countMark('zhenzamrfz_time2'), false);
            },
          },
          time2: {},
        },
        ai: {
          threaten: 0.8,
        },
      },
      //多萝西
      gongzhenmrfz: {
        audio: 4,
        forced: true,
        trigger: { player: ['useCardAfter', 'respond'] },
        filter(event, player) {
          if (!player.isPhaseUsing()) return false;
          return event.cards && event.cards.length == 1;
        },
        content() {
          var cards = player.getCards('h'),
            list = [],
            num = 0;
          for (var i of cards) {
            list.add(i.suit);
          }
          if (!list.includes(trigger.card.suit)) player.draw();
          else if (player.countCards('h') > 0) player.chooseToDiscard('h', true, '【共振】:请弃置一张手牌');
        },
      },
      mengxiangmrfz: {
        audio: 2,
        trigger: { player: 'drawAfter' },
        filter(event, player) {
          if (!player.isPhaseUsing()) return false;
          return event.parent.name == 'gongzhenmrfz';
        },
        forced: true,
        content() {
          'step 0';
          player.addMark('mengxiangmrfz', false);
          ('step 1');
          if (player.countMark('mengxiangmrfz') % 2 == 0 && player.hasMark('mengxiangmrfz')) {
            player.addTempSkill('mengxiangmrfz_eff', {
              player: 'phaseEnd',
            });
            player.removeMark('mengxiangmrfz', 2, false);
            if (player.countMark('mengxiangmrfz') > 0) event.redo();
          }
        },
        group: 'mengxiangmrfz_rem',
        subSkill: {
          rem: {
            silent: true,
            charlotte: true,
            trigger: { player: 'phaseEnd' },
            filter(event, player) {
              return player.hasMark('mengxiangmrfz');
            },
            content() {
              player.removeMark('mengxiangmrfz', player.countMark('mengxiangmrfz'), false);
            },
          },
          eff: {
            audio: 'mengxiangmrfz',
            trigger: { player: ['useCard1', 'respond'] },
            forced: true,
            charlotte: true,
            content() {
              player.removeSkill('mengxiangmrfz_eff');
            },
            mod: {
              cardUsable(card) {
                return Infinity;
              },
              targetInRange(card) {
                return true;
              },
            },
            mark: true,
            intro: {
              content: '下一张使用或打出的牌无次数和距离限制',
            },
          },
        },
      },
      paizhangmrfz: {
        global: 'paizhangmrfz_tag4',
        audio: 4,
        trigger: { player: 'loseAfter' },
        filter(event, player) {
          if (event.type != 'discard' || event.getlx === false || event.getParent(3).name != 'gongzhenmrfz') return false;
          for (var card of event.cards) {
            if (get.position(card, true) == 'd') return true;
          }
          return false;
        },
        content() {
          'step 0';
          if (trigger.cards.length) {
            player.chooseTarget(get.prompt('paizhangmrfz'), '你可以将此牌交给一名其他角色', function (card, target, player) {
              return target != player && !target.hasSkill('paizhangmrfz2');
            }).ai = function (target) {
              return -get.attitude(player, target);
            };
          }
          ('step 1');
          if (result.targets?.length) {
            result.targets[0].gain(trigger.cards, 'gain2').gaintag = ['paizhangmrfz'];
            result.targets[0].addTempSkill('paizhangmrfz2');
          }
          ('step 2');
          for (var i of trigger.cards) {
            i.storage.paizhangmrfz = true;
          }
        },
        group: ['paizhangmrfz_tag1', 'paizhangmrfz_tag2', 'paizhangmrfz_tag3'],
        subSkill: {
          tag1: {
            forced: true,
            firstDo: true,
            charlotte: true,
            trigger: {
              global: 'useCard',
            },
            filter(event, player) {
              if (Array.isArray(event.cards))
                for (var i of event.cards) {
                  if (i.storage && i.storage.paizhangmrfz) return true;
                }
              return false;
            },
            content() {
              var cards = trigger.cards[0];
              if (trigger.cards.length > 1 || cards.number == undefined) {
                trigger.player.damage();
              } else if (cards.number > 8) {
                trigger.player.damage();
              } else {
                trigger.player.chooseToDiscard('he', Math.floor(cards.number / 3), '【排障】:请弃置' + Math.floor(cards.number / 3) + '张牌', true);
              }
            },
          },
          tag2: {
            forced: true,
            firstDo: true,
            charlotte: true,
            trigger: {
              target: 'useCardToTarget',
              player: 'addJudgeBefore',
            },
            filter(event, player) {
              if (Array.isArray(event.cards))
                for (var i of event.cards) {
                  if (i.storage && i.storage.paizhangmrfz) return true;
                }
              return false;
            },
            content() {
              'step 0';
              if (trigger.name == 'addJudge') {
                trigger.cancel();
                var owner = get.owner(trigger.card);
                if (owner && owner.getCards('hej').includes(trigger.card)) owner.lose(trigger.card, ui.discardPile);
                else game.cardsDiscard(trigger.card);
                game.log(trigger.card, '进入了弃牌堆');
              } else trigger.parent.targets.remove(player);
              ('step 1');
              var trgnext = trigger.player.next,
                trgprvs = trigger.player.previous;
              if (
                trgnext != player &&
                trgnext.hasCard(function (card) {
                  return card.storage && card.storage.paizhangmrfz;
                }, 'h')
              ) {
                var cards = trgnext.getCards('h', function (card) {
                  return card.storage && card.storage.paizhangmrfz;
                });
                trgnext.damage();
                game.cardsDiscard(cards);
                game.log(cards, '进入了弃牌堆');
              }
              if (
                trgprvs != player &&
                trgprvs.hasCard(function (card) {
                  return card.storage && card.storage.paizhangmrfz;
                }, 'h')
              ) {
                var cards = trgprvs.getCards('h', function (card) {
                  return card.storage && card.storage.paizhangmrfz;
                });
                trgprvs.damage();
                game.cardsDiscard(cards);
                game.log(cards, '进入了弃牌堆');
              }
            },
          },
          tag3: {
            forced: true,
            charlotte: true,
            trigger: { global: 'useCardToPlayered' },
            filter(event, player) {
              if (event.player == player) return false;
              if (
                !event.player.hasCard(function (card) {
                  return card.storage && card.storage.paizhangmrfz;
                }, 'h')
              )
                return false;
              if (Array.isArray(event.cards))
                for (var i of event.cards) {
                  if (i.storage && i.storage.paizhangmrfz) return false;
                }
              for (var i = 0; i < event.targets.length; i++) {
                if (event.targets[i] == player) return true;
              }
            },
            content() {
              'step 0';
              var cards = trigger.player.getCards('h', function (card) {
                return card.storage && card.storage.paizhangmrfz;
              });
              event.cards = cards;
              game.cardsDiscard(cards);
              game.log(cards, '进入了弃牌堆');
              if (trigger.name == 'addJudge') {
                trigger.cancel();
                var owner = get.owner(trigger.card);
                if (owner && owner.getCards('hej').includes(trigger.card)) owner.lose(trigger.card, ui.discardPile);
                else game.cardsDiscard(trigger.card);
                game.log(trigger.card, '进入了弃牌堆');
              } else trigger.parent.targets.remove(player);
              ('step 1');
              if (event.cards.length > 1 || event.cards.number == undefined) {
                trigger.player.damage();
              } else if (event.cards.number > 8) {
                trigger.player.damage();
              } else {
                trigger.player.chooseToDiscard('he', Math.floor(cards.number / 3), '【排障】:请弃置' + Math.floor(cards.number / 3) + '张牌', true);
              }
              ('step 2');
              var trgnext = trigger.player.next,
                trgprvs = trigger.player.previous;
              if (
                trgnext.hasCard(function (card) {
                  return card.storage && card.storage.paizhangmrfz;
                }, 'h')
              ) {
                var cards = trgnext.getCards('h', function (card) {
                  return card.storage && card.storage.paizhangmrfz;
                });
                trgnext.damage();
                game.cardsDiscard(cards);
                game.log(cards, '进入了弃牌堆');
              }
              if (
                trgprvs.hasCard(function (card) {
                  return card.storage && card.storage.paizhangmrfz;
                }, 'h')
              ) {
                var cards = trgprvs.getCards('h', function (card) {
                  return card.storage && card.storage.paizhangmrfz;
                });
                trgprvs.damage();
                game.cardsDiscard(cards);
                game.log(cards, '进入了弃牌堆');
              }
            },
          },
          tag4: {
            charlotte: true,
            mod: {
              cardDiscardable(card, player) {
                if (card.storage && card.storage.paizhangmrfz) return false;
              },
            },
          },
        },
      },
      paizhangmrfz2: { charlotte: true },
      //空弦
      tiexianmrfz: {
        mod: {
          maxHandcard(player, num) {
            if (!player.hujia) return num + 1;
          },
        },
        audio: 2,
        forced: true,
        trigger: { player: 'damageEnd' },
        filter(event, player) {
          return event.hujia;
        },
        content() {
          player.draw(3);
        },
        group: ['tiexianmrfz_draw', 'tiexianmrfz_k'],
        subSkill: {
          ban: {
            charlotte: true,
          },
          k: {
            mod: {
              cardnumber(card) {
                if (card.hasGaintag('tiexianmrfz')) return 13;
              },
            },
            charlotte: true,
            forced: true,
            trigger: { player: 'gainAfter' },
            filter(event, player) {
              return !player.hujia && !player.hasSkill('tiexianmrfz_ban');
            },
            content() {
              player.addTempSkill('tiexianmrfz_ban', {
                global: 'roundStart',
              });
              for (var i of trigger.cards) {
                i.addGaintag('tiexianmrfz');
              }
            },
          },
          draw: {
            audio: 'tiexianmrfz',
            forced: true,
            trigger: { player: 'phaseDrawBegin2' },
            filter(event, player) {
              return !player.hujia;
            },
            content() {
              trigger.num++;
            },
          },
        },
      },
      lieshimrfz: {
        audio: 2,
        usable: 3,
        trigger: { player: 'useCardToPlayered' },
        filter(event, player) {
          if (event.card.name != 'sha' || !event.targets || event.targets.length > 1) return false;
          return (
            player.countCards('he') > 0 &&
            game.hasPlayer(function (current) {
              return current != player && get.distance(event.targets[0], current) <= 1 && !event.targets.includes(current);
            })
          );
        },
        forced: true,
        content() {
          'step 0';
          player
            .chooseToDiscard('he', get.prompt('lieshimrfz'), '你可以弃置一张牌并选择一名与' + get.translation(trigger.targets[0]) + '距离为1的其他角色视为使用一张【杀】')
            .set(
              'goon',
              game.hasPlayer(function (current) {
                var target = trigger.targets[0];
                return get.distance(target, current) == 1 && get.attitude(player, current) < 2;
              }),
            )
            .set('ai', function (card) {
              if (_status.event.goon) return 6 - get.value(card);
              return 0;
            });
          ('step 1');
          if (result.cards?.length) {
            player.chooseTarget(true, '请选择一名与' + get.translation(trigger.targets[0]) + '距离为1的一名其他角色', function (card, player, target) {
              var evt = _status.event.getTrigger();
              return target != player && target != evt.targets[0] && get.distance(evt.targets[0], target) <= 1 && lib.filter.targetEnabled2(evt.card, player, target);
            }).ai = function (target) {
              return -get.attitude(player, target);
            };
          } else event.finish();
          ('step 2');
          if (result.targets?.length) {
            player.useCard({ name: 'sha' }, result.targets[0]);
          }
        },
      },
      //麒麟夜刀
      guirenmrfz: {
        audio: 2,
        trigger: { player: 'useCardToTargeted' },
        filter(event, player) {
          if (!player.isPhaseUsing()) return false;
          if (player.getHandcardLimit() == 0) return false;
          return event.card && event.card.name == 'sha';
        },
        prompt(event, player) {
          return '你可以令此【杀】额外结算一次,本回合的手牌上限-1.(当前手牌上限:' + player.getHandcardLimit() + ')';
        },
        content() {
          trigger.parent.targets = trigger.parent.targets.concat(trigger.targets);
          trigger.parent.triggeredTargets4 = trigger.parent.triggeredTargets4.concat(trigger.targets);
          if (!player.hasSkill('guirenmrfz2')) player.addTempSkill('guirenmrfz2');
          if (!player.hasSkill('guirenmrfz_lose')) player.addTempSkill('guirenmrfz_lose');
          player.storage.guirenmrfz2++;
        },
        subSkill: {
          lose: {
            silent: true,
            charlotte: true,
            trigger: { player: 'phaseUseEnd' },
            content() {
              player.removeSkill('guirenmrfz');
              player.addSkill('guiqiangmrfz');
            },
          },
        },
      },
      guirenmrfz2: {
        silent: true,
        charlotte: true,
        firstDo: true,
        trigger: { player: 'phaseAfter' },
        init(player) {
          player.storage.guirenmrfz2 = 0;
        },
        content() {
          player.storage.guirenmrfz2 = 0;
        },
        mod: {
          maxHandcard(player, num) {
            return num - player.storage.guirenmrfz2;
          },
        },
      },
      guiqiangmrfz: {
        audio: 2,
        trigger: { player: 'phaseZhunbeiBegin' },
        forced: true,
        content() {
          'step 0';
          player.drawTo(Math.min(player.maxHp, 4));
          player.chooseToDiscard(get.prompt('guiqiangmrfz'), '你可以弃置一张牌并失去此技能,获得【鬼人】', 'he').set('ai', function (card) {
            return 6 - get.value(card);
          });
          ('step 1');
          if (result.cards?.length) {
            player.removeSkill('guiqiangmrfz');
            player.addSkill('guirenmrfz');
          }
        },
      },
      luanwumrfz: {
        audio: 2,
        trigger: { player: 'phaseZhunbeiBegin' },
        derivation: ['guiqiangmrfz', 'guirenmrfz'],
        check(event, player) {
          if (
            player.countCards('h', function (card) {
              return get.type2(card) == 'trick' || get.tag(card, 'damage');
            }) > 2
          )
            return false;
          if (player.getHandcardLimit() > 2) return false;
          return game.hasPlayer(function (current) {
            return current != player && player.inRange(current) && get.attitude(player, current) < 0; //QQQ
          });
        },
        filter(event, player) {
          if (
            !game.hasPlayer(function (current) {
              return current != player && player.inRange(current);
            })
          )
            return false;
          return player.hasSkill('guirenmrfz');
        },
        content() {
          'step 0';
          player.chooseTarget(true, '【乱舞】:请选择一名其他角色,视为对其使用一张结算三次的【杀】', function (card, player, target) {
            return target != player && player.inRange(target);
          }).ai = function (target) {
            return -get.attitude(player, target);
          };
          ('step 1');
          if (result.targets?.length) {
            var target = result.targets[0];
            player.addTempSkill('luanwumrfza', {
              player: 'shaAfter',
            });
            player.useCard({ name: 'sha' }, result.targets[0]);
          }
          ('step 2');
          player.skip('phaseUse');
          player.skip('phaseDraw');
          player.skip('phaseJudge');
          if (!player.hasSkill('luanwumrfz_dam')) player.addSkill('luanwumrfz_dam');
        },
        group: 'luanwumrfz_add',
        subSkill: {
          dam: {
            mark: true,
            intro: {
              content: '受到的伤害+1',
            },
            forced: true,
            charlotte: true,
            trigger: { player: 'damageBegin' },
            content() {
              trigger.num++;
              player.removeSkill('luanwumrfz_dam');
            },
          },
          add: {
            silent: true,
            charlotte: true,
            trigger: { player: 'phaseUseBegin' },
            content() {
              player.addSkill('guirenmrfz');
              player.removeSkill('luanwumrfz_add');
            },
          },
        },
      },
      luanwumrfza: {
        audio: 2,
        forced: true,
        trigger: { player: 'useCardToTargeted' },
        filter(event, player) {
          return event.card && event.card.name == 'sha';
        },
        content() {
          'step 0';
          event.num = 2;
          ('step 1');
          event.num--;
          trigger.parent.targets = trigger.parent.targets.concat(trigger.targets);
          trigger.parent.triggeredTargets4 = trigger.parent.triggeredTargets4.concat(trigger.targets);
          if (event.num > 0) event.redo();
          ('step 2');
          player.removeSkill('luanwumrfza');
        },
      },
      //土豆雷(划掉) 伊内丝
      yingzhimrfz: {
        mark: true,
        intro: {
          content(event, player) {
            var str = '·摸牌阶段摸牌数+' + player.countMark('yingzhimrfz_draw') + '</br>·手牌上限+' + player.countMark('yingzhimrfz_mhand');
            str = str + '</br>·使用【杀】的次数+' + player.countMark('yingzhimrfz_sha');
            if (!player.hasMark('yingzhimrfz_dying')) return str;
            return str + '</br>·下次造成的伤害+1';
          },
        },
        audio: 6,
        silent: true,
        firstDo: true,
        trigger: { global: 'roundStart' },
        content() {
          game.countPlayer(function (current) {
            if (current != player) current.storage.yingzhimrfz_draw = false;
            if (current != player) current.storage.yingzhimrfz_mhand = false;
            if (current != player) current.storage.yingzhimrfz_sha = false;
            if (current != player) current.storage.yingzhimrfz_dying = false;
          });
        },
        group: ['yingzhimrfz_draw', 'yingzhimrfz_drbuff', 'yingzhimrfz_mhand', 'yingzhimrfz_sha', 'yingzhimrfz_dying', 'yingzhimrfz_dybuff'],
        subSkill: {
          //标记
          mark: {
            mark: true,
            charlotte: true,
            intro: {
              content(event, player) {
                var str = '·摸牌阶段摸牌数-' + player.countMark('yingzhimrfz_drdebuff') + '</br>·手牌上限-' + player.countMark('yingzhimrfz_mhddebuff');
                str = str + '</br>·使用【杀】的次数-' + player.countMark('yingzhimrfz_shadebuff');
                if (!player.hasSkill('yingzhimrfz_dydebuff')) return str;
                return str + '</br>·下次造成的伤害-1';
              },
            },
          },
          //非延时锦囊牌 摸牌阶段摸牌数
          draw: {
            audio: 'yingzhimrfz',
            trigger: { player: 'useCardToTargeted' },
            filter(event, player) {
              if (event.targets.length > 1) return false;
              if (event.target.storage.yingzhimrfz_draw) return false;
              return get.type(event.card) == 'trick' && event.target != player;
            },
            check(event, player) {
              return get.attitude(player, event.target) < 2;
            },
            prompt(event, player) {
              return '是否令' + get.translation(event.target) + '下个摸牌阶段摸牌数-1且你摸牌阶段摸牌数+1？';
            },
            content() {
              if (player.countMark('yingzhimrfz_draw') < 2) player.addMark('yingzhimrfz_draw', false);
              trigger.targets[0].storage.yingzhimrfz_draw = true;
              trigger.targets[0].addSkill('yingzhimrfz_drdebuff');
              trigger.targets[0].addMark('yingzhimrfz_drdebuff', false);
              trigger.targets[0].addSkill('yingzhimrfz_mark');
            },
          },
          drbuff: {
            audio: 'yingzhimrfz',
            forced: true,
            charlotte: true,
            trigger: { player: 'phaseDrawBegin' },
            filter(event, player) {
              return player.hasMark('yingzhimrfz_draw');
            },
            content() {
              trigger.num += player.countMark('yingzhimrfz_draw');
            },
          },
          drdebuff: {
            audio: 'yingzhimrfz',
            trigger: { player: 'phaseDrawBegin' },
            forced: true,
            charlotte: true,
            filter(event, player) {
              return player.hasMark('yingzhimrfz_drdebuff');
            },
            content() {
              trigger.num -= player.countMark('yingzhimrfz_drdebuff');
              player.removeMark('yingzhimrfz_drdebuff', player.countMark('yingzhimrfz_drdebuff'), false);
              player.removeSkill('yingzhimrfz_drdebuff');
              if (!player.hasMark('yingzhimrfz_mhddebuff') && !player.hasMark('yingzhimrfz_shadebuff') && !player.hasSkill('yingzhimrfz_dydebuff')) player.removeSkill('yingzhimrfz_mark');
            },
          },
          //其他角色响应你的牌 手牌上限
          mhand: {
            audio: 'yingzhimrfz',
            trigger: { global: ['respond', 'useCard'] },
            filter(event, player) {
              if (!event.respondTo) return false;
              if (event.player == player) return false;
              if (player != event.respondTo[0]) return false;
              return !event.player.storage.yingzhimrfz_mhand;
            },
            check(event, player) {
              return get.attitude(player, event.player) < 2;
            },
            prompt(event, player) {
              return '是否令' + get.translation(event.player) + '的下个回合手牌上限-1且你的手牌上限+1？';
            },
            content() {
              if (player.countMark('yingzhimrfz_mhand') < 3) player.addMark('yingzhimrfz_mhand', false);
              trigger.player.addMark('yingzhimrfz_mhddebuff', false);
              trigger.player.storage.yingzhimrfz_mhand = true;
              trigger.player.addSkill('yingzhimrfz_mhddebuff');
              trigger.player.addSkill('yingzhimrfz_mark');
            },
            mod: {
              maxHandcard(player, num) {
                return num + player.countMark('yingzhimrfz_mhand');
              },
            },
          },
          mhddebuff: {
            charlotte: true,
            silent: true,
            trigger: { player: 'phaseEnd' },
            filter(event, player) {
              return player.hasMark('yingzhimrfz_mhddebuff');
            },
            content() {
              player.removeMark('yingzhimrfz_mhddebuff', player.countMark('yingzhimrfz_mhddebuff'), false);
              player.removeSkill('yingzhimrfz_mhddebuff');
              if (!player.hasMark('yingzhimrfz_drdebuff') && !player.hasMark('yingzhimrfz_shadebuff') && !player.hasSkill('yingzhimrfz_dydebuff')) player.removeSkill('yingzhimrfz_mark');
            },
            mod: {
              maxHandcard(player, num) {
                return num - player.countMark('yingzhimrfz_mhddebuff');
              },
            },
          },
          //进入濒死 伤害+1
          dying: {
            audio: 'yingzhimrfz',
            trigger: { global: 'dying' },
            filter(event, player) {
              if (event.player.storage.yingzhimrfz_dying) return false;
              if (event.player.hasSkill('yingzhimrfz_dydebuff') && player.hasMark('yingzhimrfz_dying')) return false;
              return event.player != player && event.parent.name == 'damage' && event.parent.source && event.parent.source == player;
            },
            check(event, player) {
              return get.attitude(player, event.player) < 2;
            },
            prompt(event, player) {
              return '是否令' + get.translation(event.player) + '下次造成的伤害-1且你下次造成的伤害+1？';
            },
            content() {
              if (!player.hasMark('yingzhimrfz_dying')) player.addMark('yingzhimrfz_dying', false);
              if (!trigger.player.hasSkill('yingzhimrfz_dydebuff')) {
                trigger.player.addSkill('yingzhimrfz_dydebuff', false);
                trigger.player.addSkill('yingzhimrfz_mark');
                trigger.player.storage.yingzhimrfz_dying = true;
              }
            },
          },
          dybuff: {
            audio: 'yingzhimrfz',
            forced: true,
            charlotte: true,
            trigger: { source: 'damageBegin' },
            filter(event, player) {
              return player.hasMark('yingzhimrfz_dying');
            },
            content() {
              trigger.num++;
              player.removeMark('yingzhimrfz_dying', false);
            },
          },
          dydebuff: {
            audio: 'yingzhimrfz',
            forced: true,
            charlotte: true,
            trigger: { source: 'damageBegin' },
            content() {
              trigger.num--;
              player.removeSkill('yingzhimrfz_dydebuff');
              if (!player.hasMark('yingzhimrfz_drdebuff') && !player.hasMark('yingzhimrfz_mhddebuff') && !player.hasMark('yingzhimrfz_shadebuff')) player.removeSkill('yingzhimrfz_mark');
            },
          },
          //你响应其他角色牌 使用杀的次数
          sha: {
            audio: 'yingzhimrfz',
            trigger: { player: ['useCard', 'respond'] },
            filter(event, player) {
              if (!Array.isArray(event.respondTo)) return false;
              if (player == event.respondTo[0]) return false;
              return !event.player.storage.sha;
            },
            check(event, player) {
              return get.attitude(player, event.respondTo[0]) < 2;
            },
            prompt(event, player) {
              return '是否令' + get.translation(event.respondTo[0]) + '的下个回合使用【杀】的次数-1且你使用【杀】的次数+1？';
            },
            content() {
              var target = trigger.respondTo[0];
              target.addMark('yingzhimrfz_shadebuff', false);
              target.addSkill('yingzhimrfz_shadebuff');
              target.addSkill('yingzhimrfz_mark');
              target.storage.yingzhimrfz_sha = true;
              player.addMark('yingzhimrfz_sha', false);
              player.addSkill('yingzhimrfz_sharem');
            },
            mod: {
              cardUsable(card, player, num) {
                if (card.name == 'sha') return num + player.countMark('yingzhimrfz_sha');
              },
            },
          },
          sharem: {
            silent: true,
            charlotte: true,
            trigger: { player: 'phaseUseEnd' },
            content() {
              player.removeMark('yingzhimrfz_sha', player.countMark('yingzhimrfz_sha'), false);
              player.removeSkill('yingzhimrfz_sharem');
            },
          },
          shadebuff: {
            charlotte: true,
            silent: true,
            trigger: { player: 'phaseEnd' },
            filter(event, player) {
              return player.hasMark('yingzhimrfz_shadebuff');
            },
            content() {
              player.removeMark('yingzhimrfz_shadebuff', player.countMark('yingzhimrfz_shadebuff'), false);
              player.removeSkill('yingzhimrfz_shadebuff');
              if (!player.hasMark('yingzhimrfz_drdebuff') && !player.hasMark('yingzhimrfz_mhddebuff') && !player.hasSkill('yingzhimrfz_dydebuff')) player.removeSkill('yingzhimrfz_mark');
            },
            mod: {
              cardUsable(card, player, num) {
                if (card.name == 'sha') return num - player.countMark('yingzhimrfz_shadebuff');
              },
            },
          },
        },
        ai: {
          threaten: 1.1,
          expose: 0.1,
        },
      },
      yingshaomrfz: {
        audio: 2,
        trigger: { player: 'dyingAfter' },
        filter(event, player) {
          return event.parent.name == 'damage' && event.parent.source;
        },
        check(event, player) {
          return get.attitude(player, event.parent.source) < 2;
        },
        prompt(event, player) {
          return '是否令' + get.translation(event.parent.source) + '获得‘影哨’标记？';
        },
        content() {
          trigger.parent.source.addSkill('yingshaomrfz_ban');
        },
        group: 'yingshaomrfz_dying',
        subSkill: {
          ban2: {
            charlotte: true,
            mod: {
              cardEnabled(card) {
                if (card.name == 'sha') return false;
              },
            },
          },
          ban: {
            mark: true,
            intro: {
              content(event, player) {
                if (player.hasSkill('yingshaomrfz_ban2')) return '·手牌上限-1</br>·本出牌阶段不能使用【杀】';
                return '·手牌上限-1</br>·使用【杀】的次数至多为1';
              },
            },
            charlotte: true,
            forced: true,
            popup: false,
            trigger: { player: 'useCardAfter' },
            filter(event, player) {
              if (!player.isPhaseUsing()) return false;
              return event.card && event.card.name == 'sha';
            },
            content() {
              player.addTempSkill('yingshaomrfz_ban2', {
                player: 'phaseUseEnd',
              });
            },
            mod: {
              maxHandcard(player, num) {
                return num - 1;
              },
            },
          },
          dying: {
            audio: 'yingshaomrfz',
            forced: true,
            charlotte: true,
            trigger: { player: 'dying' },
            filter(event, player) {
              return game.hasPlayer(function (current) {
                return current.hasSkill('yingshaomrfz_ban');
              });
            },
            content() {
              game.countPlayer(function (current) {
                if (current.hasSkill('yingshaomrfz_ban')) {
                  current.removeSkill('yingshaomrfz_ban');
                  if (current.hasSkill('yingshaomrfz_ban2')) current.removeSkill('yingshaomrfz_ban2');
                  current.damage(player);
                }
              });
              player.recover(2 - player.hp);
              player.removeSkill('yingshaomrfz');
            },
          },
        },
        ai: {
          expose: 0.2,
        },
      },
      //缪尔赛思
      kaiyuanmrfz: {
        audio: 2,
        trigger: {
          global: 'roundStart',
        },
        firstDo: true,
        filter(event, player) {
          return game.roundNumber == 1;
        },
        forced: true,
        content() {
          'step 0';
          player.chooseTarget('【开源】:请选择一名角色令其摸两张牌且本局游戏使用【杀】的次数+1,若该角色是你,你摸一张牌', true).ai = function (target) {
            return get.attitude(player, target) > 0;
          };
          ('step 1');
          if (result.targets?.length) {
            var target = result.targets[0];
            target.draw(2);
            target.addSkill('kaiyuanmrfz_buff');
            if (target == player) {
              player.draw();
            }
          }
        },
        subSkill: {
          buff: {
            mark: true,
            intro: {
              content: '使用【杀】的次数+1',
            },
            charlotte: true,
            mod: {
              cardUsable(card, player, num) {
                if (card.name == 'sha') return num + 1;
              },
            },
          },
        },
      },
      jingshuimrfz: {
        mark: true,
        intro: {
          content(event, player) {
            return '·你的攻击范围:' + player.getAttackRange() + '</br>·你使用【杀】的次数:' + player.getCardUsable('sha') + '</br>·你的手牌上限:' + player.getHandcardLimit();
          },
        },
        audio: 3,
        trigger: { global: 'roundStart' },
        forced: true,
        content() {
          'step 0';
          var str = '【净水】:你可选择一名其他角色,你将你的手牌数、手牌上限、攻击范围和使用【杀】的次数调整至与其一致';
          player.chooseTarget(get.prompt('jingshuimrfz'), str, function (card, player, target) {
            return target != player;
          }).ai = function (target) {
            return target.isMaxHandcard();
          };
          ('step 1');
          if (result.targets?.length) {
            var target = result.targets[0];
            var numsha = target.getCardUsable('sha');
            var numatt = target.getAttackRange();
            var numhand = target.getHandcardLimit();
            //摸牌
            if (player.countCards('h') <= target.countCards('h')) player.drawTo(target.countCards('h'));
            //杀
            player.removeMark('jingshuimrfz_sha', player.countMark('jingshuimrfz_sha'), false);
            player.addMark('jingshuimrfz_sha', numsha, false);
            //攻击距离
            player.removeMark('jingshuimrfz_att', player.countMark('jingshuimrfz_att'), false);
            player.addMark('jingshuimrfz_att', numatt, false);
            //手牌上限
            player.removeMark('jingshuimrfz_maxhand', player.countMark('jingshuimrfz_maxhand'), false);
            player.addMark('jingshuimrfz_maxhand', numhand, false);
          }
        },
        mod: {
          cardUsable(card, player, num) {
            if (card.name == 'sha' && player.hasMark('jingshuimrfz_sha')) return (num = player.countMark('jingshuimrfz_sha'));
          },
          attackRangeBase(player, num) {
            if (player.hasMark('jingshuimrfz_att')) return (num = player.countMark('jingshuimrfz_att'));
          },
          maxHandcard(player, num) {
            if (player.hasMark('jingshuimrfz_maxhand')) return (num = player.countMark('jingshuimrfz_maxhand'));
          },
        },
        subSkill: {
          sha: {
            charlotte: true,
          },
          att: {
            charlotte: true,
          },
          maxhand: {
            charlotte: true,
          },
        },
      },
      liuxingmrfz: {
        audio: 2,
        trigger: {
          player: 'damageBegin',
        },
        usable: 1,
        forced: true,
        filter(event, player) {
          return player.countCards('h') >= player.hp && event.nature != 'thunder';
        },
        content() {
          trigger.cancel();
        },
      },
      //黑键
      yiyinmrfz: {
        audio: 2,
        chargeSkill: true,
        enable: 'phaseUse',
        filter(event, player) {
          if (player.countMark('charge') > 2) return false;
          return player.hasCard(function (card) {
            return get.tag(card, 'damage');
          }, 'h');
        },
        filterCard(card) {
          return get.tag(card, 'damage');
        },
        selectCard() {
          var player = _status.event.player;
          return [1, 3 - player.countMark('charge')];
        },
        check(card) {
          var player = _status.event.player;
          if (
            player.countCards('h', function (card) {
              return card.name == 'sha';
            }) >
            player.getCardUsable('sha') + 1
          )
            return true;
          return card.name != 'sha';
        },
        content() {
          player.addMark('charge', cards.length);
        },
        ai: {
          threaten(event, player) {
            return 0.85 + player.countMark('charge') * 0.1;
          },
          order: 13,
          result: {
            player: 1,
          },
        },
        group: ['yiyinmrfz_sha', 'yiyinmrfz_get'],
        subSkill: {
          sha: {
            audio: 'yiyinmrfz',
            trigger: { player: 'useCard' },
            filter(event, player) {
              if (player.countMark('charge') == 0) return false;
              return event.card && event.card.name == 'sha' && !player.storage.jiyinmrfz;
            },
            prompt: '你可以消耗一点蓄力值令此【杀】的伤害基数+1',
            content() {
              if (!trigger.baseDamage) trigger.baseDamage = 1;
              trigger.baseDamage++;
              player.removeMark('charge');
            },
          },
          get: {
            silent: true,
            charlotte: true,
            trigger: {
              global: 'phaseBefore',
              player: 'enterGame',
            },
            filter(event, player) {
              return event.name != 'phase' || game.phaseNumber == 0;
            },
            content() {
              player.addMark('charge');
            },
          },
        },
      },
      huangxiangmrfz: {
        audio: 2,
        trigger: { player: 'phaseDiscardEnd' },
        filter(event, player) {
          if (
            player.hasCard(function (card) {
              return card.hasGaintag('huangxiangmrfzx');
            }, 'h')
          )
            return false;
          return player.countMark('charge') > 0 && player.countCards('h') > 0;
        },
        forced: true,
        content() {
          'step 0';
          player.chooseCard(get.prompt('huangxiangmrfz'), '你可以消耗一点蓄力值并标记一张手牌', 'h').set('ai', function (card) {
            if (card.name == 'shan' && card.name == 'wuxie') return 6;
            if (card.name == 'sha' && card.name == 'tao' && card.name == 'jiu') return 5;
            return 6 - get.value(card);
          });
          ('step 1');
          if (result.cards?.length) {
            player.addGaintag(result.cards, 'huangxiangmrfzx');
            player.removeMark('charge');
          }
        },
        group: 'huangxiangmrfz_lose',
        subSkill: {
          lose: {
            trigger: {
              player: ['loseAfter', 'damageEnd'],
            },
            filter(event, player) {
              if (event.name == 'damage')
                return player.hasCard(function (card) {
                  return card.hasGaintag('huangxiangmrfzx');
                }, 'h');
              if (event.name == 'lose') {
                for (var i in event.gaintag_map) {
                  if (event.gaintag_map[i].includes('huangxiangmrfzx')) return true;
                }
                return false;
              }
              return false;
            },
            content() {
              'step 0';
              var history = game.getAllGlobalHistory('useCard');
              for (var i = history.length - 1; i > 0; i--) {
                if (!history[i].targets) continue;
                if (history[i].targets.includes(player) && history[i].player != player) {
                  event.targets = history[i].player;
                  break;
                }
              }
              player
                .chooseControl(event.targets ? ['摸牌', '对' + get.translation(event.targets) + '造成一点伤害', 'cancel2'] : ['摸牌', 'cancel2'])
                .set('ai', function () {
                  var player = _status.event.player;
                  if (event.targets) {
                    if (get.damageEffect(event.targets, player, player) > 0) return 1;
                    return 0;
                  } else return 0;
                })
                .set('prompt', '【荒响】:请选择一项');
              ('step 1');
              if (result.control != 'cancel2') {
                if (result.control == '摸牌') {
                  player.draw();
                  if (player.countMark('charge') < 3) player.addMark('charge');
                } else event.targets.damage();
              } else event.finish();
              ('step 2');
              if (
                !player.hasCard(function (card) {
                  return card.hasGaintag('huangxiangmrfzx');
                }, 'h') &&
                player.countMark('charge') > 0
              ) {
                player.chooseCard(get.prompt('huangxiangmrfz'), '你可以消耗一点蓄力值并标记一张手牌', 'h').set('ai', function (card) {
                  if (card.name == 'shan' && card.name == 'wuxie') return 6;
                  if (card.name == 'sha' && card.name == 'tao' && card.name == 'jiu') return 5;
                  return 6 - get.value(card);
                });
              }
              ('step 3');
              if (result.cards?.length) {
                player.addGaintag(result.cards, 'huangxiangmrfzx');
                player.removeMark('charge');
              }
            },
          },
        },
      },
      jiyinmrfz: {
        audio: 3,
        trigger: { player: 'phaseUseBegin' },
        filter(event, player) {
          return player.countMark('charge') > 0;
        },
        check(event, player) {
          return (
            player.hasCard(function (card) {
              return card.name == 'sha';
            }, 'h') > 0
          );
        },
        content() {
          var list = ['jiyinmrfz_eff1', 'jiyinmrfz_lose', 'jiyinmrfz_eff4', 'jiyinmrfz_eff2', 'jiyinmrfz_eff3'];
          player.storage.jiyinmrfz = true;
          for (var i of list) player.addTempSkill(i);
        },
        subSkill: {
          lose: {
            silent: true,
            charlotte: true,
            trigger: { player: 'phaseEnd' },
            content() {
              player.storage.jiyinmrfz = false;
            },
          },
          //伤害基数 目标
          eff1: {
            silent: true,
            charlotte: true,
            trigger: { player: 'useCardToPlayered' },
            filter(event, player) {
              if (!event.card) return false;
              return event.card.name == 'sha' && event.targets.length == 1;
            },
            content() {
              'step 0';
              var target = trigger.targets[0],
                buff = 0;
              if (
                !game.hasPlayer(function (current) {
                  return current != target && current.countCards('h') > target.countCards('h');
                })
              )
                buff++;
              if (
                !game.hasPlayer(function (current) {
                  return current != target && current.hp > target.hp;
                })
              )
                buff++;
              if (
                !game.hasPlayer(function (current) {
                  return current != target && current.countCards('e') > target.countCards('e');
                })
              )
                buff++;
              if (buff == 3) {
                player.storage.jiyinmrfz_eff1 = true;
                player.addTempSkill('jiyinmrfz_eff1_buff2', 'shaAfter');
              }
              ('step 1');
              player.addTempSkill('jiyinmrfz_eff1_buff', 'shaAfter');
            },
            mod: {
              playerEnabled(card, player, target) {
                if ((target.isMaxHp() || target.isMaxHandcard() || target.isMaxEquip()) && card.name == 'sha') return true;
                else if (card.name == 'sha') return false;
              },
            },
          },
          eff1_buff: {
            audio: 'huangxiangmrfz',
            trigger: { source: 'damageBegin1' },
            forced: true,
            charlotte: true,
            filter(event, player) {
              return event.card && event.card.name == 'sha';
            },
            content() {
              var target = trigger.player;
              if (player.storage.jiyinmrfz_eff1) {
                trigger.num = target.hp;
              } else trigger.num = Math.max(Math.min(target.hp - 1, player.countMark('charge')), 1);
              player.removeSkill('jiyinmrfz_eff1_buff');
            },
          },
          eff1_buff2: {
            silent: true,
            charlotte: true,
            trigger: { player: 'shaEnd' },
            content() {
              player.storage.jiyinmrfz_eff1 = false;
            },
          },
          //闪的次数
          eff2: {
            trigger: { player: 'useCardToPlayered' },
            forced: true,
            charlotte: true,
            firstDo: true,
            filter(event, player) {
              return event.card.name == 'sha' && !event.parent.directHit.includes(event.target);
            },
            logTarget: 'target',
            content() {
              var targets = trigger.target;
              var id = trigger.target.playerid;
              var map = trigger.parent.customArgs;
              if (!map[id]) map[id] = {};
              if (typeof map[id].shanRequired == 'number') {
                map[id].shanRequired += targets.hp - 1;
              } else {
                map[id].shanRequired = targets.hp;
              }
            },
            ai: {
              directHit_ai: true,
              skillTagFilter(player, tag, arg) {
                if (arg.card.name != 'sha' || arg.target.countCards('h', 'shan') > player.countMark('charge')) return false;
              },
            },
          },
          //提示
          eff3: {
            charlotte: true,
            mark: true,
            intro: {
              content(event, player) {
                var list = [];
                for (var i of game.players) {
                  if (i.isMaxHp() && i.isMaxHandcard() && i.isMaxEquip()) list.add(get.translation(i));
                }
                return '手牌最多或之一且体力值最多或之一且装备数最多或之一的角色有:</br>' + (list.length ? list : '没有满足条件的角色!');
              },
            },
          },
          //消耗蓄力值
          eff4: {
            forced: true,
            charlotte: true,
            trigger: { source: 'damageEnd' },
            filter(event, player) {
              return event.card && event.card.name == 'sha';
            },
            content() {
              player.removeMark('charge', trigger.num);
            },
          },
        },
      },
      //伊芙利特 小火龙
      yanmomrfz: {
        audio: 4,
        mod: {
          attackRange(player, num) {
            return num + 2;
          },
          playerEnabled(card, player, target) {
            var gone = [];
            for (var i of game.players) {
              var players = i;
              if (players.isAction()) gone.add(players);
            }
            if (target != player && _status.currentPhase == player) {
              if (!gone.includes(target) && player.storage.yanmomrfz == true) return false;
              if (gone.includes(target) && player.storage.yanmomrfz == false) return false;
            }
          },
        },
        trigger: { player: 'phaseBegin' },
        forced: true,
        content() {
          'step 0';
          var num = 0,
            gone = [],
            wlgo = [];
          for (var i of game.players) {
            var players = i;
            if (players.isAction()) gone.add(players);
            else wlgo.add(players);
          }
          player
            .chooseControl()
            .set('choiceList', ['只能指定本轮<font color=#f61e46>已进行</font>回合的其他角色<br>(' + get.translation(gone) + ')', '只能指定本轮<font color=#f61e46>未进行</font>回合的其他角色<br>(' + get.translation(wlgo) + ')'])
            .set('ai', function () {
              if (num > game.players.length - num) return 0;
              return 1;
            });
          ('step 1');
          if (result.index == 0) {
            player.storage.yanmomrfz = true;
          } else player.storage.yanmomrfz = false;
        },
        group: ['yanmomrfz_add'],
        subSkill: {
          gone: {
            charlotte: true,
          },
          eff: {
            init(player) {
              player.storage.yanmomrfz_eff = false;
            },
            silent: true,
            charlotte: true,
            firstDo: true,
            trigger: { player: 'phaseBegin' },
            content() {
              player.storage.yanmomrfz_eff = true;
            },
          },
          clear: {
            silent: true,
            charlotte: true,
            trigger: { global: 'roundStart' },
            content() {
              game.countPlayer(function (current) {
                current.storage.yanmomrfz_eff = false;
              });
            },
          },
          add: {
            trigger: { player: 'useCard' },
            filter(event, player) {
              if (get.type(event.card) == 'delay') return false;
              if (get.type(event.card) == 'equip') return false;
              return game.hasPlayer(function (current) {
                return !event.targets.includes(current) && player.canUse(event.card, current) && current != player;
              });
            },
            check(event, player) {
              var num = 0;
              for (var i of game.players) {
                if (i == player || event.targets.includes(i)) continue;
                if (!player.inRange(i)) continue;
                if (player.canUse(event.card, i)) {
                  num = num + get.attitude(player, i);
                }
              }
              return num > -1;
            },
            prompt(event, player) {
              var list = [];
              for (var i of game.players) {
                if (i == player || event.targets.includes(i)) continue;
                if (!player.inRange(i)) continue;
                if (player.canUse(event.card, i)) list.add(get.translation(i));
              }
              return '是否增加' + list + '为' + get.translation(event.card) + '的目标？';
            },
            content() {
              'step 0';
              var list = [],
                targets = [];
              for (var i of game.players) {
                if (i == player || trigger.targets.includes(i)) continue;
                if (!player.inRange(i)) continue;
                if (player.canUse(trigger.card, i)) {
                  targets.push(i);
                  player.line(i);
                }
              }
              if (targets.length) {
                if (!event.isMine() && !event.isOnline()) event.targets = targets;
              } else {
                event.finish();
              }
              ('step 1');
              game.log(event.targets, '成为了', trigger.card, '的目标');
              trigger.targets.addArray(event.targets);
            },
          },
        },
      },
      yanbaomrfz: {
        intro: {
          content: '<span style="text-decoration:line-through">防御力-100</span></br>本轮下次因【杀】受到的伤害+1',
        },
        audio: 2,
        trigger: { source: 'damageEnd' },
        global: ['yanbaomrfz_eff', 'yanbaomrfz_clear'],
        filter(event, player) {
          if (!event.player.isAlive()) return false;
          return !event.player.hasMark('yanbaomrfz') && event.player != player && !event.player.storage.yanbaomrfz2;
        },
        check(event, player) {
          return get.attitude(player, event.player) < 2;
        },
        content() {
          trigger.player.addMark('yanbaomrfz', false);
          trigger.player.storage.yanbaomrfz2 = true;
        },
        subSkill: {
          clear: {
            silent: true,
            charlotte: true,
            trigger: { global: 'roundStart' },
            firstDo: true,
            content() {
              player.removeMark('yanbaomrfz', false);
              player.storage.yanbaomrfz2 = false;
            },
          },
          eff: {
            silent: true,
            charlotte: true,
            trigger: { player: 'damageBegin' },
            filter(event, player) {
              if (!player.hasMark('yanbaomrfz')) return false;
              return event.card && event.card.name == 'sha';
            },
            content() {
              trigger.num++;
              player.removeMark('yanbaomrfz', false);
            },
          },
        },
        ai: {
          expose: 0.1,
        },
      },
      yanbaomrfz2: {
        charlotte: true,
      },
      huishenmrfz: {
        audio: 2,
        usable: 1,
        trigger: { player: 'useCardToPlayer' },
        filter(event, player) {
          return event.target != player;
        },
        content() {
          player.addTempSkill('huishenmrfz_eff', 'useCardAfter');
        },
        subSkill: {
          eff: {
            silent: true,
            trigger: { player: 'useCardToPlayered' },
            filter(event, player) {
              return event.target != player;
            },
            content() {
              'step 0';
              trigger.target.chooseToDiscard('弃置一张手牌,或令' + get.translation(player) + '摸一张牌').set('ai', function (card) {
                var trigger = _status.event.getTrigger();
                return -get.attitude(trigger.target, trigger.player) - get.value(card);
              });
              ('step 1');
              if (result.bool == false) player.draw();
            },
          },
        },
      },
      //淬羽赫默
      renbenmrfz: {
        mark: true,
        intro: {
          name: '<特里蒙科学伦理宣言>',
          content: '本轮游戏不能使用、打出或弃置【$】',
        },
        audio: 2,
        forced: true,
        trigger: { global: 'roundStart' },
        //_priority:-100,
        content() {
          'step 0';
          game.countPlayer(function (current) {
            if (current.hasSkill('renbenmrfz2')) current.removeSkill('renbenmrfz2');
            if (current.hasSkill('renbenmrfz3')) current.removeSkill('renbenmrfz3');
          });
          var list = lib.inpile;
          var list2 = [];
          for (var i = 0; i < list.length; i++) {
            var name = list[i];
            var type = get.type(name);
            if (name == 'sha') {
              list2.push(['基本', '', 'sha']);
            } else if (type == 'basic') {
              list2.push(['基本', '', list[i]]);
            } else if (type == 'trick') {
              list2.push(['锦囊', '', list[i]]);
            }
          }
          if (!list.length) event.finish();
          else {
            event.cards = list2;
            event.cards2 = [];
            event.num = 0;
          }
          ('step 1');
          if (event.num < game.players.length)
            game.players[event.num].chooseButton(true, ['【人本】:请声明一张牌</br>科学理应注视每一个人', [event.cards, 'vcard']]).set('ai', function (button) {
              switch (button.link[2]) {
                case 'wuxie':
                  return 0.5 + Math.random();
                case 'wuzhong':
                case 'dongzhuxianji':
                  return 0.3 + Math.random();
                case 'guohe':
                case 'zhujinqiyuan':
                  return 0.3 + Math.random();
                case 'sha':
                  return 0.3 + Math.random();
                case 'tao':
                  return 0.4 + Math.random();
                case 'shan':
                  return 0.3 + Math.random();
                default:
                  return Math.random();
              }
            });
          else event.goto(3);
          ('step 2');
          if (result.links?.length) {
            event.cards2.add(result.links[0][2]);
            game.log(game.players[event.num], '声明了', result.links[0][2]);
            if (event.num < game.players.length) {
              event.num++;
              event.goto(1);
            }
          }
          ('step 3');
          var maxCard = game.mostStr(event.cards2);
          if (maxCard.length == 1) {
            game.log('本轮游戏不能使用、打出或弃置', maxCard);
            player.popup(maxCard);
            player.storage.renbenmrfz = maxCard;
            for (var i of game.players) {
              if (i.storage.renbenmrfz != maxCard) i.storage.renbenmrfz = maxCard;
            }
            event.goto(6);
          } else event.cards3 = maxCard;
          ('step 4');
          player.chooseButton([true, '【人本】:请选择一张牌</br>科学理应注视每一个人', [event.cards3, 'vcard']]);
          ('step 5');
          if (result.links?.length) {
            game.log('本轮游戏不能使用、打出或弃置', result.links[0][2]);
            player.popup(result.links[0][2]);
            player.storage.renbenmrfz = result.links[0][2];
            for (var i of game.players) {
              if (i.storage.renbenmrfz != result.links[0][2]) i.storage.renbenmrfz = result.links[0][2];
            }
          }
          ('step 6');
          event.num2 = 0;
          ('step 7');
          if (event.num2 < game.players.length) {
            if (game.players[event.num2] != player)
              game.players[event.num2]
                .chooseControl('是', '否')
                .set('prompt', '【人本】:是否遵守协议？(不能使用或打出' + get.translation(player.storage.renbenmrfz) + ')')
                .set('ai', function () {
                  var player = _status.event.player;
                  if (!player.getEquip(1)) return 0;
                  if (
                    game.hasPlayer(function (current) {
                      return get.distance(player, current) <= 1 && player != current && get.attitude(player, current) < 0;
                    }) ||
                    (player.storage.renbenmrfz == 'sha' && Math.random() > 0.4)
                  )
                    return 1;
                  return 0;
                });
            else {
              event.num2++;
              event.redo();
            }
          } else event.finish();
          ('step 8');
          if (result.index == 0) {
            game.players[event.num2].addSkill('renbenmrfz2');
          } else if (result.index == 1) {
            game.players[event.num2].addSkill('renbenmrfz3');
          }
          if (event.num2 < game.players.length) {
            event.num2++;
            event.goto(7);
          }
        },
        global: 'renbenmrfz_use',
        subSkill: {
          use: {
            mod: {
              cardDiscardable(card, player) {
                if (card.name == player.storage.renbenmrfz && (player.hasSkill('renbenmrfz2') || player.hasSkill('renbenmrfz'))) return false;
              },
              cardEnabled2(card, player) {
                if (card.name == player.storage.renbenmrfz && (player.hasSkill('renbenmrfz2') || player.hasSkill('renbenmrfz'))) return false;
              },
              ignoredHandcard(card, player) {
                if (card.name == player.storage.renbenmrfz && player.hasSkill('renbenmrfz')) {
                  return true;
                }
              },
            },
          },
        },
      },
      renbenmrfz2: {
        mark: true,
        intro: {
          content: '接受<特里蒙科学伦理宣言>',
        },
        audio: 'renbenmrfz',
        enable: 'phaseUse',
        filterCard(card, player) {
          return card.name == player.storage.renbenmrfz;
        },
        discard: false,
        lose: false,
        filter(event, player) {
          return player.hasCard(function (card) {
            return card.name == player.storage.renbenmrfz;
          }, 'h');
        },
        filterTarget(card, player, target) {
          return target != player && target.hasSkill('renbenmrfz');
        },
        content() {
          player.draw();
          player.give(cards, target);
        },
        group: 'renbenmrfz2_lose',
        subSkill: {
          lose: {
            charlotte: true,
            silent: true,
            firstDo: true,
            _priority: 50,
            trigger: { global: 'die' },
            filter(event, player) {
              return event.player.hasSkill('renbenmrfz');
            },
            content() {
              player.removeSkill('renbenmrfz2');
            },
          },
        },
        ai: {
          order: 13,
          result: {
            player(player, target) {
              if (get.attitude(player, target) > 0) return 1;
              return -1;
            },
          },
        },
      },
      renbenmrfz3: {
        mark: true,
        markimage: 'extension/驶舰之向/image/orther/rejecthmmrfz.png',
        intro: {
          content(event, player) {
            return '不接受<特里蒙科学伦理宣言></br>当前攻击距离为' + player.getAttackRange();
          },
        },
        mod: {
          attackRange(player, num) {
            var atk = 0;
            for (var i of game.players) {
              if (i == player) continue;
              if (i.hasSkill('renbenmrfz2')) atk++;
            }
            return num - Math.max(2, atk);
          },
        },
      },
      dizhumrfz: {
        audio: 2,
        trigger: { player: 'phaseUseBegin' },
        forced: true,
        content() {
          'step 0';
          game.countPlayer(function (current) {
            current.removeSkill('dizhumrfzx');
          });
          player.chooseTarget('【砥柱】:你可以选择至多两名角色,令其获得‘夜灯’标记', [0, 2]).set('ai', function (target) {
            return get.attitude(_status.event.player, target) > 2;
          });
          ('step 1');
          if (result.targets?.length) {
            var targets = result.targets;
            for (var i of targets) {
              i.addSkill('dizhumrfzx');
              i.storage.dizhumrfz = true;
              player.line(i);
            }
          }
        },
      },
      dizhumrfzx: {
        mark: true,
        markimage: 'extension/驶舰之向/image/orther/yedengmrfz.png',
        intro: {
          content(event, player) {
            return '受到的伤害-1,若为致命伤害,则防止之';
          },
        },
        audio: 2,
        forced: true,
        trigger: { player: 'damageBegin3' },
        content() {
          if (trigger.num < player.hp) trigger.num--;
          else trigger.num = 0;
          player.removeMark('dizhumrfz');
          player.removeSkill('dizhumrfzx');
        },
      },
      //塞雷娅
      fuyuanmrfz: {
        audio: 2,
        trigger: { global: 'recoverEnd' },
        forced: true,
        filter(event, player) {
          return event.source == player && event.player != player;
        },
        content() {
          trigger.player.draw();
        },
      },
      gaihuamrfz: {
        audio: 2,
        trigger: { global: 'damageBegin' },
        filter(event, player) {
          if (event.player == player) return false;
          return event.nature && player.inRange(event.player);
        },
        forced: true,
        content() {
          'step 0';
          if (trigger.card) {
            var cards = trigger.card;
            player
              .chooseToDiscard('he', get.prompt('gaihuamrfz'), '是否弃置一张非' + get.translation(get.type(cards)) + '牌令此伤害+1', function (card) {
                return get.type(card) != get.type(cards);
              })
              .set('goon', get.attitude(player, trigger.player) < 0)
              .set('ai', function (card) {
                if (!_status.event.goon) return 0;
                return 7 - get.value(card);
              });
          } else {
            player
              .chooseToDiscard(get.prompt('gaihuamrfz'), '是否弃置一张牌令此伤害+1')
              .set('goon', get.attitude(player, trigger.player) < 0)
              .set('ai', function (card) {
                if (!_status.event.goon) return 0;
                return 7 - get.value(card);
              });
          }
          ('step 1');
          if (result.bool) {
            trigger.num++;
          }
        },
      },
      yaopeimrfz: {
        audio: 2,
        enable: 'phaseUse',
        usable: 1,
        filter(event, player) {
          return player.getCardUsable('sha') > 0 && player.countCards('he') > 0;
        },
        filterCard: true,
        position: 'he',
        prompt: '请弃置一张牌',
        content() {
          'step 0';
          var num = 0;
          var go = false;
          if (
            game.hasPlayer(function (current) {
              return get.distance(player, current) <= 1 && get.attitude(player, current) > 2 && current.getDamagedHp() > 2;
            })
          ) {
            go = true;
          } else if (
            !game.hasPlayer(function (current) {
              return get.distance(player, current) <= 1 && get.attitude(player, current) > 0 && current.getDamagedHp() > 0 && current != player;
            }) &&
            player.getDamagedHp() > 0
          ) {
            go = true;
          }
          player.addTempSkill('yaopeimrfz2', 'phaseUseAfter');
          player
            .chooseTarget('【药配】:选择一名与你距离不大于1的角色令其回血,或选择‘取消’令攻击范围内的所有角色回复一点体力', function (card, target, player) {
              return get.distance(player, target) <= 1 && target.getDamagedHp() > 0;
            })
            .set('go', go)
            .set('ai', function (target) {
              var player = _status.event.player;
              if (go) return get.attitude(player, target) > 2;
              return 0;
            });
          ('step 1');
          if (result.targets?.length) {
            var targets = result.targets[0];
            targets.recover();
            if (targets.getDamagedHp() >= 3) targets.recover();
          } else {
            for (var i of game.players) {
              var targets = game.players;
              if (player.inRange(targets[i]) || targets[i] == player) targets[i].recover();
            }
          }
        },
        ai: {
          expose: 0.1,
          threaten: 1.5,
          order: 13,
          result: {
            player(player) {
              var num = 0;
              for (var i of game.players) {
                var targetx = game.players;
                if (!player.inRange(targetx[i])) continue;
                if (get.attitude(player, targetx[i]) > 0 && targetx[i].getDamagedHp() > 0) num++;
                if (get.attitude(player, targetx[i]) <= 0 && targetx[i].getDamagedHp() > 0) num--;
                if (player.getDamagedHp() > 0) {
                  num = 1;
                  break;
                }
              }
              if (num > 0) return 1;
              return -1;
            },
          },
        },
      },
      yaopeimrfz2: {
        charlotte: true,
        mod: {
          cardUsable(card, player, num) {
            if (card.name == 'sha') return num - 1;
          },
        },
      },
      //焰影苇草
      minghuomrfz: {
        audio: 4,
        trigger: { player: 'phaseZhunbeiBegin' },
        forced: true,
        content() {
          'step 0';
          if (player.hasSkill('minghuomrfz_buff1')) player.removeSkill('minghuomrfz_buff1');
          if (player.hasSkill('minghuomrfz_buff2')) player.removeSkill('minghuomrfz_buff2');
          player
            .chooseControl()
            .set('choiceList', ['每回合你使用的第一张单一目标的普通锦囊或【杀】可以额外指定一个目标', '当有‘灼痕’标记的角色进入濒死状态时,你可以令其上家或下家获得一个‘灼痕’标记', '<span style="text-decoration:line-through">真的会有人选这个选项吗？</span>不发动此技能'])
            .set('ai', function () {
              if (
                game.countPlayer(function (current) {
                  var curnext = current.next,
                    curpre = current.previous;
                  return current != player && current.hasMark('zhuohenmrfz') && current.hp < 2 && (get.attitude(player, curnext) || get.attitude(player, curpre));
                }) > 0
              )
                return 1;
              return 0;
            });
          ('step 1');
          if (result.index != 2) {
            if (result.index == 0) player.addSkill('minghuomrfz_buff1');
            else player.addSkill('minghuomrfz_buff2');
          }
        },
        subSkill: {
          buff1: {
            trigger: { player: 'useCard2' },
            filter(event, player) {
              if (player.hasSkill('minghuomrfz_mark')) return false;
              if (event.targets.length > 1) return false;
              if (get.type(event.card) != 'trick' && event.card.name != 'sha') return false;
              return game.hasPlayer(function (current) {
                return !event.targets.includes(current) && player.canUse(event.card, current);
              });
            },
            forced: true,
            content() {
              'step 0';
              player
                .chooseTarget(get.prompt('minghuomrfz'), '为' + get.translation(trigger.card) + '增加一个目标', function (card, player, target) {
                  return !_status.event.sourcex.includes(target) && player.canUse(_status.event.card, target);
                })
                .set('sourcex', trigger.targets)
                .set('ai', function (target) {
                  var player = _status.event.player;
                  return get.effect(target, _status.event.card, player, player);
                })
                .set('card', trigger.card);
              ('step 1');
              if (result.targets?.length) {
                if (!event.isMine() && !event.isOnline()) event.target = result.targets[0];
                player.addTempSkill('minghuomrfz_mark', 'phaseEnd');
              } else {
                event.finish();
              }
              ('step 2');
              trigger.targets.push(event.target);
            },
          },
          buff2: {
            trigger: { global: 'dying' },
            forced: true,
            filter(event, player) {
              if (event.player.next.hasMark('zhuohenmrfz') && event.player.previous.hasMark('zhuohenmrfz')) return false;
              return game.players.length > 2 && event.player.hasMark('zhuohenmrfz');
            },
            content() {
              'step 0';
              var target = trigger.player;
              player
                .chooseTarget(get.prompt('minghuomrfz'), '你可以令' + get.translation(target) + '的上家或下家(不能是你)获得一个‘灼痕’标记', function (card, player, target) {
                  return !target.hasMark('zhuohenmrfz') && target != player && (target == _status.event.TriPlayer.next || target == _status.event.TriPlayer.previous);
                })
                .set('TriPlayer', trigger.player)
                .set('ai', function () {
                  if (get.attitude(player, targetx.next) > 2 && get.attitude(player, targetx.next) > 2) return 0;
                  return get.attitude(player, target) < 2;
                })
                .set('targetx', trigger.player);
              ('step 1');
              if (result.targets?.length) {
                var target = result.targets[0];
                target.addMark('zhuohenmrfz');
                if (target.countCards('h') > 0) target.chooseToDiscard('h', true, '【灼痕】:请选择弃置一张手牌');
              }
            },
          },
          mark: {
            charlotte: true,
          },
        },
      },
      yingyaomrfz: {
        intro: {
          content(event, player) {
            return '剩余使用次数:' + (game.totalmark('zhuohenmrfz') - player.countMark('yingyaomrfz'));
          },
        },
        audio: 2,
        trigger: { source: 'damageEnd' },
        filter(event, player) {
          if (game.totalmark('zhuohenmrfz') <= player.countMark('yingyaomrfz')) return false;
          return (
            event.player != player &&
            game.hasPlayer(function (current) {
              return current != player && player.inRange(current);
            })
          );
        },
        content() {
          'step 0';
          player
            .chooseTarget(true, get.prompt('yingyaomrfz'), '你可以选择一名在你攻击范围内的角色,令其回复一点体力,若其为你,你摸一张牌', function (card, player, target) {
              return (player.inRange(target) && target.getDamagedHp() > 0) || target == player;
            })
            .set('ai', function (target) {
              return get.attitude(_status.event.player, target) > 2;
            });
          ('step 1');
          if (result.targets?.length) {
            var target = result.targets[0];
            target.recover();
            player.addMark('yingyaomrfz', false);
            if (target == player) player.draw();
          }
        },
        group: 'yingyaomrfz_clear',
        subSkill: {
          clear: {
            silent: true,
            firstDo: true,
            charlotte: true,
            trigger: { global: 'roundStart' },
            content() {
              player.removeMark('yingyaomrfz', player.countMark('yingyaomrfz'), false);
            },
          },
        },
      },
      zhuohenmrfz: {
        intro: {
          content: '·被德拉克的火焰灼伤</br>·手牌上限-1</br>·受到伤害时需弃置一张手牌',
        },
        global: 'zhuohenmrfz_debuff2',
        audio: 2,
        trigger: { player: 'useCardToPlayered' },
        filter(event, player) {
          return event.target != player && !event.target.hasMark('zhuohenmrfz') && !event.target.hasSkill('zhuohenmrfz2');
        },
        check(event, player) {
          return get.attitude(player, event.target) < 0;
        },
        prompt(event, player) {
          return '是否令' + get.translation(event.target) + '获得一个‘灼痕’标记？';
        },
        content() {
          var target = trigger.target;
          target.addMark('zhuohenmrfz');
          target.addSkill('zhuohenmrfz_clear');
          target.addTempSkill('zhuohenmrfz2');
          if (target.countCards('h') > 0) target.chooseToDiscard('h', true, '【灼痕】:请选择弃置一张手牌');
        },
        mod: {
          maxHandcard(player, num) {
            return num + game.totalmark('zhuohenmrfz');
          },
        },
        group: ['zhuohenmrfz_debuff', 'zhuohenmrfz_draw'],
        subSkill: {
          draw: {
            audio: 'zhuohenmrfz',
            forced: true,
            trigger: { global: 'phaseBegin' },
            filter(event, player) {
              return event.player.hasMark('zhuohenmrfz') && !player.isMaxHandcard(true);
            },
            content() {
              player.draw();
            },
          },
          clear: {
            silent: true,
            firstDo: true,
            charlotte: true,
            trigger: { player: 'phaseEnd' },
            content() {
              player.removeMark('zhuohenmrfz');
              player.removeSkill('zhuohenmrfz_clear');
            },
          },
          debuff: {
            charlotte: true,
            forced: true,
            trigger: { global: 'damageBegin' },
            filter(event, player) {
              return event.player != player && event.player.hasMark('zhuohenmrfz') && event.player.countCards('h') > 0;
            },
            content() {
              trigger.player.chooseToDiscard('h', true, '【灼痕】:请选择弃置一张手牌');
            },
          },
          debuff2: {
            charlotte: true,
            mod: {
              maxHandcard(player, num) {
                if (player.hasMark('zhuohenmrfz')) return num - 1;
              },
            },
          },
        },
      },
      zhuohenmrfz2: {
        charlotte: true,
      },
      //霍尔海雅
      chuangzhongmrfz: {
        audio: 2,
        forced: true,
        trigger: { player: 'useCardToPlayered' },
        filter(event, player) {
          for (var i = 0; i < event.targets.length; i++) {
            if (event.targets[i].hasMark('kuangyumrfz')) {
              return true;
            }
          }
          return false;
        },
        content() {
          for (var i = 0; i < trigger.targets.length; i++) {
            if (trigger.targets[i].hasMark('kuangyumrfz')) {
              trigger.targets[i].addTempSkill('fengyin');
              trigger.targets[i].addSkill('chuangzhongmrfz_eff');
            }
          }
        },
        subSkill: {
          eff: {
            silent: true,
            charlotte: true,
            trigger: { player: 'phaseDiscardEnd' },
            content() {
              player.removeSkill('chuangzhongmrfz_eff');
            },
            mod: {
              maxHandcard(player, num) {
                if (player.hasMark('kuangyumrfz')) return num - player.hp;
              },
            },
          },
        },
      },
      kuangyumrfz: {
        intro: {
          name: '风起',
          content(event, player) {
            if (player.hasSkill('chuangzhongmrfz_eff')) return '·回合开始时,随机跳过两个阶段</br>·手牌上限-' + player.hp;
            return '·回合开始时,随机跳过两个阶段';
          },
        },
        audio: 4,
        derivation: ['kuangyumrfz_rewirte'],
        trigger: { player: 'useCardToPlayered' },
        firstDo: true,
        filter(event, player) {
          var nost = get.type(event.card) != 'trick' && get.type(event.card) != 'delay';
          var hast = get.type(event.card) != 'trick' && event.card.name != 'sha';
          if (!event.targets || event.targets.length > 1) return false;
          if (event.cards && (player.storage.kuangyumrfz ? nost : hast)) return false;
          return event.target != player && !event.target.hasMark('kuangyumrfz');
        },
        prompt(event, player) {
          return '是否令' + get.translation(event.target) + '获得一个‘风起’标记？';
        },
        content() {
          var target = trigger.target;
          target.addMark('kuangyumrfz');
          target.addSkill('kuangyumrfz_clear');
          target.addTempSkill('kuangyumrfz2');
          target.addSkill('kuangyumrfz_skip');
          if (player.inRange(target)) player.addTempSkill('kuangyumrfz_damage', 'useCardAfter');
        },
        group: 'kuangyumrfz_clear2',
        subSkill: {
          clear2: {
            silent: true,
            charlotte: true,
            trigger: { global: 'roundStart' },
            filter(event, player) {
              return player.storage.kuangyumrfz;
            },
            content() {
              player.storage.kuangyumrfz = false;
            },
          },
          clear: {
            silent: true,
            charlotte: true,
            trigger: { player: 'phaseEnd' },
            content() {
              player.removeMark('kuangyumrfz');
              player.removeSkill('kuangyumrfz_clear');
            },
          },
          skip: {
            audio: 'kuangyumrfz',
            forced: true,
            charlotte: true,
            trigger: { player: 'phaseBegin' },
            content() {
              var phase = ['phaseBegin', 'phaseJudge', 'phaseDraw', 'phaseUse', 'phaseDiscard', 'phaseJieshu'].randomGet2(2);
              for (var i = 0; i < phase.length; i++) {
                player.skip(phase[i]);
              }
              game.log(player, '因【狂语】将会跳过', get.tranPhase(phase[0]), '和', get.tranPhase(phase[1]));
              player.removeSkill('kuangyumrfz_skip');
            },
          },
          damage: {
            audio: 'kuangyumrfz',
            trigger: { source: 'damageBegin' },
            forced: true,
            filter(event, player) {
              return event.player.hasMark('kuangyumrfz');
            },
            content() {
              trigger.num++;
              player.storage.kuangyumrfz = true;
            },
          },
        },
      },
      kuangyumrfz2: {
        charlotte: true,
      },
      //新棘刺
      jihumrfz: {
        audio: 2,
        intro: {
          content: '荆棘护身',
        },
        trigger: { player: 'phaseZhunbeiBegin' },
        check(event, player) {
          if (
            player.countCards('h', function (card) {
              return get.tag(card, 'damage') || (get.type(card) == 'trick' && !get.tag(card, 'damage')) || get.type(card) == 'delay';
            }) > 1
          )
            return false;
          return true;
        },
        content() {
          if (!player.hasMark('jihumrfz')) player.addMark('jihumrfz', false);
          player.addTempSkill('zishou2');
        },
        group: ['jihumrfz_clear', 'jihumrfz_buff'],
        subSkill: {
          clear: {
            silent: true,
            charlotte: true,
            trigger: { player: 'phaseBegin' },
            filter(event, player) {
              return player.hasMark('jihumrfz');
            },
            content() {
              player.removeMark('jihumrfz', false);
            },
          },
          buff: {
            trigger: { target: 'useCardToTargeted' },
            usable: 1,
            filter(event, player) {
              if (get.type(event.card) == 'delay' || get.type(event.card) == 'equip') return false;
              if (!player.hasMark('jihumrfz')) return false;
              return (
                event.player != player &&
                (player.canUse(event.card, event.player, false) ||
                  game.hasPlayer(function (current) {
                    return current != player && get.distance(player, current) <= 1 && player.canUse(event.card, current, 'nodistance');
                  }))
              );
            },
            forced: true,
            content() {
              'step 0';
              player
                .chooseTarget(function (card, player, target) {
                  return player.canUse(trigger.card, target, false) && target != player && (get.distance(player, target) <= 1 || target == _status.event.TriPlayer);
                })
                .set('TriPlayer', trigger.player)
                .set('prompt', get.prompt('jihumrfz'))
                .set('prompt2', '【棘护】:你可以使用一张【' + get.translation(trigger.card.name) + '】').ai = function (target) {
                  return -get.attitude(player, target);
                };
              ('step 1');
              if (result.targets?.length) {
                player.useCard({ name: trigger.card.name }, result.targets[0], false);
              }
            },
          },
        },
      },
      re_jianshumrfz: {
        audio: 'jianshumrfz',
        derivation: ['re_chaoshengmrfz'],
        intro: {
          content(event, player) {
            var num = player.countMark('re_jianshumrfz');
            if (num == 20) return '出牌阶段开始时可以使用一张【杀】</br>摸牌阶段摸牌数+1;攻击距离和【杀】的使用次数各+2';
            else if (num >= 10) return '已累计指定' + num + '次</br>出牌阶段开始时可以使用一张【杀】</br>摸牌阶段摸牌数、攻击距离和【杀】的使用次数各+1';
            return `已累计指定${num}次`;
          },
        },
        forced: true,
        trigger: { player: 'useCardToTargeted' },
        filter(event, player) {
          return player.countMark('re_jianshumrfz') < 20;
        },
        content() {
          'step 0';
          player.addMark('re_jianshumrfz', false);
          ('step 1');
          var num = player.countMark('re_jianshumrfz');
          if (num % 10 == 0) {
            //--第一次使用至高之术--//
            if (num == 10) {
              player.addSkill('re_jianshumrfz_usesha');
              player.addMark('re_jianshumrfz_time', false);
              player.addMark('re_jianshumrfz_draw', false);
              player.addMark('re_jianshumrfz_range', false);
            }
            //--第二次使用至高之术--//
            if (num == 20) {
              player.addMark('re_jianshumrfz_time', false);
              player.addMark('re_jianshumrfz_range', false);
              player.removeSkill('jihumrfz');
              player.addSkill('re_chaoshengmrfz');
            }
          }
        },
        group: ['re_jianshumrfz_time', 're_jianshumrfz_range', 're_jianshumrfz_draw'],
        subSkill: {
          time: {
            charlotte: true,
            mod: {
              cardUsable(card, player, num) {
                if (card.name == 'sha') return num + player.countMark('re_jianshumrfz_time');
              },
            },
          },
          range: {
            charlotte: true,
            mod: {
              attackRange(player, num) {
                return num + player.countMark('re_jianshumrfz_range');
              },
            },
          },
          draw: {
            silent: true,
            forced: true,
            charlotte: true,
            trigger: { player: 'phaseDrawBegin2' },
            filter(event, player) {
              return player.hasMark('re_jianshumrfz_draw');
            },
            content() {
              trigger.num++;
            },
          },
          usesha: {
            forced: true,
            trigger: { player: 'phaseUseBegin' },
            content() {
              'step 0';
              player.chooseTarget('选择一名其他角色视为对其使用一张【杀】', function (card, player, target) {
                return target != player && player.inRange(target);
              }).ai = function (target) {
                return -get.attitude(player, target);
              };
              ('step 1');
              if (result.targets?.length) {
                var target = result.targets[0];
                player.useCard({ name: 'sha' }, true, false, target);
              }
            },
          },
        },
      },
      re_chaoshengmrfz: {
        audio: 'chaoshengmrfz',
        trigger: { player: 'phaseEnd' },
        filter(event, player) {
          return !player.getStat('damage');
        },
        forced: true,
        content() {
          player.draw(2);
          player.recover();
        },
      },
      //煌
      yanxunmrfz: {
        audio: 4,
        trigger: { player: 'damageBegin' },
        forced: true,
        filter(event, player) {
          return event.parent.name == '_lianhuan' || event.parent.name == '_lianhuan2';
        },
        content() {
          trigger.num--;
        },
        mod: {
          maxHandcard(player, num) {
            return num + 2;
          },
        },
        group: ['yanxunmrfz_kaishi', 'yanxunmrfz_draw', 'yanxunmrfz_use', 'yanxunmrfz_judge'],
        subSkill: {
          judge: {
            audio: 'yanxunmrfz',
            trigger: { player: 'damageBegin' },
            forced: true,
            filter(event, player) {
              return event.getParent('phaseJudge') && event.getParent('phaseJudge').player == player;
            },
            content() {
              trigger.num -= 2;
            },
          },
          kaishi: {
            forced: true,
            trigger: { global: 'roundStart' },
            popup: false,
            content() {
              'step 0';
              if (player.isLinked()) {
                player.link();
              }
              if (player.isTurnedOver()) {
                player
                  .chooseBool()
                  .set('prompt', get.prompt('yanxunmrfz'))
                  .set('prompt2', '【严训】:是否翻面并跳过下个出牌阶段？')
                  .set('ai', function () {
                    var player = _status.event.player;
                    return player.countCards('h') < player.getHandcardLimit() * 2;
                  });
              }
              ('step 1');
              if (result.bool) {
                player.turnOver();
                player.addSkill('yanxunmrfz_skipped');
              }
            },
          },
          skipped: {
            forced: true,
            mark: true,
            intro: {
              content: '跳过下个出牌阶段',
            },
            trigger: { player: 'phaseBegin' },
            content() {
              player.skip('phaseUse');
              game.log(player, '的出牌阶段将被跳过');
              player.removeSkill('yanxunmrfz_skipped');
            },
          },
          draw: {
            audio: 'yanxunmrfz',
            trigger: { player: 'phaseUseBegin' },
            filter(event, player) {
              return player.getHistory('skipped').includes('phaseDraw');
            },
            forced: true,
            prompt: '【严训】:是否摸一张牌?',
            content() {
              player.draw();
            },
          },
          use: {
            audio: 'yanxunmrfz',
            trigger: { player: 'phaseDiscardBefore' },
            filter(event, player) {
              var cardh = player.getCards('h'),
                canuse = false;
              for (var i = 0; i < cardh.length; i++) {
                if (player.canUseToAnyone(cardh[i])) {
                  canuse = true;
                  break;
                }
              }
              return player.getHistory('skipped').includes('phaseUse') && canuse == true;
            },
            prompt: '【严训】:是否使用至多两张手牌?',
            content() {
              'step 0';
              event.num = 0;
              ('step 1');
              var cardh = player.getCards('h'),
                list = [],
                cards = [];
              event.num++;
              for (var i = 0; i < cardh.length; i++) {
                cards.push(cardh[i].name);
              }
              for (var name of lib.inpile) {
                if (!cards.includes(name)) continue;
                var card = { name: name };
                if (!player.canUseToAnyone(card)) continue;
                if (get.type(card) == 'basic') {
                  list.push(['基本', '', name]);
                } else if (get.type(card) == 'trick' || get.type(card) == 'delay') {
                  list.push(['锦囊', '', name]);
                } else if (get.type(card) == 'equip') {
                  list.push(['装备', '', name]);
                }
              }
              if (list.length) player.chooseButton(['【严训】:请选择你要使用的手牌(' + event.num + '/2)', [list, 'vcard']], 'hidden');
              else event.finish();
              ('step 2');
              if (result.links?.length) {
                var name = result.links[0][2];
                player.chooseToUse(
                  function (card, player, event) {
                    return card.name == name;
                  },
                  '【严训】:你可以使用一张' + get.translation(name),
                );
                if (event.num < 2) event.goto(1);
              }
            },
          },
        },
      },
      chuchanmrfz: {
        intro: {
          content(event, player) {
            if (!player.storage.chuchanmrfz) return '未发动';
            if (player.storage.chuchanmrfz && player.hasSkill('chuchanmrfz_buff1')) return '本轮受到伤害后回复一点体力';
            return '已发动';
          },
        },
        audio: 2,
        trigger: { player: 'changeHp' },
        forced: true,
        mark: true,
        limited: true,
        init(player) {
          player.storage.chuchanmrfz = false;
        },
        filter(event, player) {
          return !player.storage.chuchanmrfz && player.hp < 2;
        },
        content() {
          player.storage.chuchanmrfz = true;
          player.recoverTo(2);
          player.addSkill('chuchanmrfz_buff1');
          player.addSkill('chuchanmrfz_buff2');
        },
        subSkill: {
          buff1: {
            audio: 'chuchanmrfz',
            trigger: { player: 'damageEnd' },
            firstDo: true,
            forced: true,
            charlotte: true,
            content() {
              player.recover();
            },
            ai: {
              effect: {
                target(card, player, target, current) {
                  if (get.tag(card, 'damage')) return 'zerotarget';
                  if (get.type(card) == 'trick' && get.tag(card, 'damage')) {
                    return 'zeroplayertarget';
                  }
                },
              },
            },
          },
          buff2: {
            charlotte: true,
            silent: true,
            trigger: { global: 'roundStart' },
            content() {
              player.removeSkill(['chuchanmrfz_buff1', 'chuchanmrfz_buff2']);
            },
          },
        },
      },
      feixuemrfz: {
        mod: {
          cardUsable(card, player, num) {
            if (card.name == 'sha') return num + player.storage.feixuemrfz;
          },
        },
        init(player) {
          player.storage.feixuemrfz = 0;
        },
        audio: 4,
        trigger: { player: ['loseHpEnd', 'damageEnd'] },
        content() {
          'step 0';
          event.num = Math.min(trigger.num, 9);
          ('step 1');
          event.num--;
          var card = get.cardPile2(function (card) {
            return card.name == 'sha' && card.nature == 'fire';
          });
          if (card) player.gain(card, 'gain2', 'log');
          else {
            player.draw();
          }
          ('step 2');
          if (trigger.source && trigger.source.countCards('e') > 0) {
            player.storage.feixuemrfz += 1;
            player.discardPlayerCard(trigger.source, 'e', false).set('forceAuto', true).boolline = true;
          }
          if (event.num > 0) event.goto(1);
        },
        group: 'feixuemrfz_clear',
        subSkill: {
          clear: {
            silent: true,
            charlotte: true,
            trigger: { player: 'phaseEnd' },
            content() {
              player.storage.feixuemrfz = 0;
            },
          },
        },
        ai: {
          expose: 0.1,
          threaten: 0.8,
        },
      },
      //铃兰
      hualaomrfz: {
        marktext: '脆弱',
        intro: {
          name: '脆弱',
          content: '下次受到的伤害+#',
        },
        audio: 2,
        trigger: { source: 'damageBegin' },
        filter(event, player) {
          return event.player != player;
        },
        check(event, player) {
          if (get.attitude(player, event.player) > 0) return false;
          if (event.num + event.player.countMark('hualaomrfz') - event.player.hp >= 0) return false;
          return true;
        },
        content() {
          var target = trigger.player;
          target.addMark('hualaomrfz', trigger.num + 1, false);
          target.addSkill('hualaomrfz_eff');
          trigger.num = 0;
        },
        subSkill: {
          eff: {
            trigger: { player: 'damageBegin2' },
            filter(event, player) {
              return player.hasMark('hualaomrfz');
            },
            charlotte: true,
            forced: true,
            content() {
              trigger.num += player.countMark('hualaomrfz');
              player.removeAllmark('hualaomrfz', false);
            },
          },
        },
        ai: {
          expose: 0.1,
          threaten: 1.2,
        },
      },
      huhuomrfz: {
        intro: {
          content: '摸牌阶段摸牌数-#,出牌阶段结束时摸#张牌',
        },
        audio: 2,
        trigger: { source: 'damageZero' },
        content() {
          trigger.player.addMark('huhuomrfz', false);
          trigger.player.addSkill('huhuomrfz2');
        },
        subSkill: {
          clear: {
            silent: true,
            charlotte: true,
            trigger: { player: 'phaseEnd' },
            filter(event, player) {
              return player.hasMark('huhuomrfz');
            },
            content() {
              player.removeAllmark('huhuomrfz', false);
              trigger.player.removeSkill('huhuomrfz2');
            },
          },
        },
      },
      huhuomrfz2: {
        forced: true,
        charlotte: true,
        trigger: { player: 'phaseDrawBegin2' },
        content() {
          trigger.num -= player.countMark('huhuomrfz');
        },
        group: ['huhuomrfz2_draw', 'huhuomrfz_clear'],
        subSkill: {
          draw: {
            charlotte: true,
            forced: true,
            trigger: { player: 'phaseUseEnd' },
            content() {
              player.draw(player.countMark('huhuomrfz'));
            },
          },
        },
      },
      wuyuemrfz: {
        mod: {
          targetInRange(card, player, target, now) {
            if (card.name == 'sha' && get.color(card) == 'black') return true;
          },
          selectTarget(card, player, range) {
            if (card.name == 'sha' && range[1] != -1 && get.color(card) == 'red') range[1]++;
          },
        },
      },
      //闪灵
      lichangmrfz: {
        marktext: '屏障',
        markimage: 'extension/驶舰之向/image/orther/slmrfzimage.png',
        intro: {
          name: '屏障',
          content: 'expansion',
          markcount: 'expansion',
        },
        onremove(player, skill) {
          var cards = player.getExpansions(skill);
          if (cards.length) player.loseToDiscardpile(cards);
        },
        audio: 6,
        enable: 'phaseUse',
        filter(event, player) {
          return (
            player.countCards('h') > 0 &&
            game.hasPlayer(function (current) {
              return !current.hasSkill('lichangmrfz2');
            })
          );
        },
        filterTarget(card, player, target) {
          return !target.hasSkill('lichangmrfz2');
        },
        filterCard: true,
        lose: false,
        discard: false,
        delay: 0,
        check(card) {
          var player = _status.event.player;
          if (
            player.countCards('h', function (card) {
              return get.type(card) == 'equip';
            }) > 0
          )
            return get.type(card) == 'equip';
          return 6 - get.value(card);
        },
        prompt: `请选择一张牌`,
        position: 'he',
        content() {
          target.addTempSkill('lichangmrfz2');
          target.addToExpansion(cards, target, 'giveAuto').gaintag.add('lichangmrfz');
          if (get.type(cards[0]) == 'equip' && target.hujia < 5) target.changeHujia();
          if (target.hujia < 5) target.changeHujia();
        },
        group: ['lichangmrfz_rem', 'lichangmrfz_dam', 'lichangmrfz_da'],
        subSkill: {
          rem: {
            audio: 'lichangmrfz',
            chargeSkill: true,
            forced: true,
            trigger: { global: 'gainAfter' },
            filter(event, player) {
              if (event.getParent(1).name != 'lichangmrfz_dam') return false;
              return (
                event.fromStorage == true ||
                game.hasPlayer2(function (current) {
                  var evt = event.getl(current);
                  return evt && evt.xs && evt.xs.length;
                })
              );
            },
            content() {
              player.addMark('charge');
              //var str='';
              //str+=get.translation(event)+'</br>';
              //for(var i=1;i<=10;i++) str+=get.translation(event.getParent(i))+'</br>';
              //game.log(str);
              //player.popup(str);
            },
          },
          dam: {
            audio: 'lichangmrfz',
            forced: true,
            trigger: { global: 'damageEnd' },
            filter(event, player) {
              return event.hujia && event.player.getExpansions('lichangmrfz').length;
            },
            content() {
              var cards = trigger.player.getExpansions('lichangmrfz');
              trigger.player.gain(cards, 'gain2');
            },
          },
          da: {
            trigger: { global: 'phaseBegin' },
            filter(event, player) {
              return player.countMark('charge') >= 3;
            },
            forced: true,
            content() {
              'step 0';
              player.chooseTarget(get.prompt('lichangmrfz'), '【力场】:你可以选择三名角色,令其各从牌堆或弃牌堆中获得一张装备牌', [1, 3]).ai = function (target) {
                return get.attitude(player, target) > 0;
              };
              ('step 1');
              if (result.bool) {
                player.removeMark('charge', player.countMark('charge'));
                event.targets = result.targets;
                event.num = 0;
                event.num2 = result.targets.length;
              } else event.finish();
              ('step 2');
              var card = get.cardPile(function (card) {
                return get.type(card) == 'equip';
              });
              event.card = card;
              var list = game.filterPlayer(function (target) {
                return target != player && target.hasSkill('lichangmrfz');
              });
              var str = '【力场】:你可以将此牌交给' + get.translation(list);
              if (list.length > 1) str += '其中一人';
              str += ',或取消自己装备此牌';
              event.targets[event.num].gain(card, 'gain');
              event.targets[event.num].chooseTarget(str, function (card, player, target) {
                return target != event.targets[event.num] && target.hasSkill('lichangmrfz');
              }).ai = function (target) {
                var player = event.targets[event.num];
                if (get.attitude(player, target) <= 0) return 0;
                return get.attitude(player, target) >= 0;
              };
              ('step 3');
              if (result.bool) {
                if (
                  event.targets[event.num].hasCard(function (card) {
                    return card == event.card;
                  }, 'h')
                )
                  event.targets[event.num].give(event.card, player);
                event.targets[event.num].recover();
              } else if (
                event.targets[event.num].hasCard(function (card) {
                  return card == event.card;
                }, 'h')
              )
                event.targets[event.num].chooseUseTarget(event.card, true);
              if (event.num < event.num2 - 1) {
                event.num++;
                event.goto(2);
              }
            },
          },
        },
        ai: {
          threaten: 1.2,
          order() {
            var player = _status.event.player;
            if (player.hp <= 2) return 13;
            return 1;
          },
          result: {
            player: 1,
            target: 1,
          },
        },
      },
      lichangmrfz2: {
        charlotte: true,
      },
      jiushumrfz: {
        audio: 2,
        enable: 'chooseToUse',
        filter(event, player) {
          if (
            player.countCards('he', function (card) {
              return get.color(card) == 'black';
            }) == 0
          )
            return false;
          return player.isPhase('phaseJudge', false) || player.isPhase('phaseZhunbei', false);
        },
        filterCard(card) {
          return get.color(card) == 'black';
        },
        viewAsFilter(player) {
          if (!player.isPhase('phaseJudge', false) && !player.isPhase('phaseZhunbei', false)) return false;
          return player.countCards('he', { color: 'black' }) > 0;
        },
        viewAs: { name: 'wuxie' },
        position: 'he',
        prompt: '将一张黑色牌当无懈可击使用',
        check(card) {
          var tri = _status.event.getTrigger();
          if (tri && tri.card && tri.card.name == 'chiling') return -1;
          return 8 - get.value(card);
        },
      },
      yubimrfz: {
        global: 'yubimrfz_eff',
        subSkill: {
          eff: {
            charlotte: true,
            mod: {
              maxHandcard(player, num) {
                return num + Math.min(player.hujia, 5);
              },
            },
          },
        },
      },
      //麦哲伦
      kanchamrfz: {
        audio: 2,
        enable: 'phaseUse',
        usable: 1,
        filter(event, player) {
          return player.countCards('h') > 0;
        },
        filterCard: true,
        intro: {
          content: '已发动#次【勘查】',
        },
        check(card) {
          var player = _status.event.player;
          if (
            player.hasCard(function (card) {
              return get.type(card) == 'equip';
            })
          )
            return get.type(card) == 'equip';
          if (
            player.hasCard(function (card) {
              return get.type(card) == 'trick';
            })
          )
            return get.type(card) == 'trick';
          return 6 - get.value(card);
        },
        content() {
          'step 0';
          event.cards2 = cards[0];
          player
            .chooseControl('顶部', '底部')
            .set('prompt', get.prompt('kanchamrfz'))
            .set('prompt2', '【勘查】:请选择展示牌堆顶还是牌堆底' + (player.countMark('kanchamrfz') + 3) + '张牌')
            .set('ai', function () {
              return [0, 1].randomGet();
            });
          ('step 1');
          var num = player.countMark('kanchamrfz') + 3;
          if (result.index == 0) {
            var cards = game.cardsGotoOrdering(get.cards(num)).cards;
            event.cards = cards;
          } else if (result.index == 1) event.cards = get.bottomCards(num);
          else event.finish();
          ('step 2');
          var list = [];
          player.showCards(event.cards, get.translation(player) + '发动了【勘查】');
          if (Array.isArray(event.cards))
            for (var i of event.cards) {
              if (get.type(event.cards2, 'trick') != get.type(i, 'trick')) list.push(i);
            }
          if (list.length) player.gain(list, 'gain2');
          ('step 3');
          if (player.countMark('kanchamrfz') < 3) player.addMark('kanchamrfz', false);
        },
        ai: {
          order: 13,
          threaten: 1.1,
          result: {
            player: 1,
          },
        },
      },
      longtengmrfz: {
        markimage: 'extension/驶舰之向/image/orther/mrfz_LTF.png',
        intro: {
          content: 'expansion',
          markcount: 'expansion',
        },
        onremove(player, skill) {
          var cards = player.getExpansions(skill);
          if (cards.length) player.loseToDiscardpile(cards);
        },
        audio: 8,
        trigger: {
          player: 'loseAfter',
          global: 'loseAsyncAfter',
        },
        filter(event, player) {
          if (player.isPhase('phaseDiscard', false)) return false;
          if (event.type != 'discard' || event.getlx === false) return;
          var evt = event.getl(player);
          for (var i = 0; i < evt.cards2.length; i++) {
            if (get.position(evt.cards2[i], evt.hs.includes(evt.cards2[i]) ? evt.player : false) == 'd') {
              return true;
            }
          }
          return false;
        },
        forced: true,
        content() {
          'step 0';
          var cards = [];
          var evt = trigger.getl(player);
          for (var i = 0; i < evt.cards2.length; i++) {
            if (get.position(evt.cards2[i]) == 'd') {
              cards.push(evt.cards2[i]);
            }
          }
          if (!cards.length) {
            event.finish();
          } else {
            if (cards.length > 1)
              player.chooseButton(['【龙腾】:请选择一张牌', cards]).set('ai', (button) => {
                var player = _status.event.player;
                if (
                  game.hasPlayer(function (current) {
                    return get.attitude(player, current) > 2;
                  })
                )
                  return get.type(button.link) == 'equip' || get.type(button.link, 'trick') == 'trick';
                return get.type(button.link) == 'basic';
              });
            else {
              event.cards = cards;
              event.goto(2);
            }
          }
          ('step 1');
          if (result.links?.length) {
            event.cards = result.links;
          }
          ('step 2');
          player.chooseTarget('【龙腾】:请选择一名角色,并将' + get.translation(event.cards) + '(' + get.translation(get.type(event.cards[0], 'trick')) + '牌)置于该角色武将牌上', function (card, player, target) {
            return target.getExpansions('longtengmrfz').length == 0;
          }).ai = function (target) {
            var player = _status.event.player;
            var type = get.type2(event.cards[0]);
            if (type == 'basic') return -get.attitude(player, target);
            else return get.attitude(player, target) > 2;
          };
          ('step 3');
          if (result.targets?.length) {
            var target = result.targets[0];
            var type = get.type2(event.cards[0]);
            target.addToExpansion(event.cards, target, 'give').gaintag.add('longtengmrfz');
            target.addSkill('longtengmrfz_changeI');
          }
        },
        group: 'longtengmrfz_clear',
        global: ['longtengmrfz_basic_1', 'longtengmrfz_basic_2', 'longtengmrfz_trick', 'longtengmrfz_equip'],
        subSkill: {
          changeI: {
            silent: true,
            charlotte: true,
            trigger: { player: 'longtengmrfzAfter' },
            content() {
              player.removeSkill('longtengmrfz_changeI');
              if (player.isTypeExpansions('longtengmrfz', 'basic')) player.changeMarkImage('longtengmrfz', 'mrfz_LTF');
              if (player.isTypeExpansions('longtengmrfz', 'trick')) player.changeMarkImage('longtengmrfz', 'mrfz_LTL');
              if (player.isTypeExpansions('longtengmrfz', 'equip')) player.changeMarkImage('longtengmrfz', 'mrfz_LTA');
            },
          },
          basic_1: {
            charlotte: true,
            forced: true,
            trigger: { player: 'phaseDrawBegin' },
            filter(event, player) {
              return player.isTypeExpansions('longtengmrfz', 'basic');
            },
            content() {
              trigger.num--;
            },
          },
          basic_2: {
            charlotte: true,
            forced: true,
            trigger: { player: 'phaseUseEnd' },
            filter(event, player) {
              return player.isTypeExpansions('longtengmrfz', 'basic');
            },
            content() {
              player.draw();
            },
          },
          trick: {
            forced: true,
            trigger: { player: 'useCard2' },
            filter(event, player) {
              if (get.type(event.card, 'trick') != 'trick') return false;
              if (player.hasSkill('longtengmrfz_trick2')) return false;
              if (player.isTypeExpansions('longtengmrfz', 'trick') == false) return false;
              var info = get.info(event.card);
              if (info.allowMultiple == false) return false;
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
              player
                .chooseTarget('【龙腾】:你可以为此牌(' + get.translation(trigger.card) + ')额外指定一个目标', function (card, player, target) {
                  var player = _status.event.player;
                  if (_status.event.targets.includes(target)) return false;
                  if (player.canUse(trigger.card, target, true) == false) return false;
                  return lib.filter.targetEnabled2(_status.event.card, player, target);
                })
                .set('ai', function (target) {
                  var trigger = _status.event.getTrigger();
                  var player = _status.event.player;
                  return get.effect(target, trigger.card, player, player);
                })
                .set('targets', trigger.targets)
                .set('card', trigger.card);
              ('step 1');
              if (result.targets?.length) {
                if (!event.isMine() && !event.isOnline()) event.targets = result.targets;
              } else {
                event.finish();
              }
              ('step 2');
              trigger.targets.addArray(event.targets);
              ('step 3');
              if (get.tag(trigger.card, 'damage')) {
                player.chooseBool('【龙腾】:是否令此牌伤害+1？');
              } else event.finish();
              ('step 4');
              trigger.baseDamage++;
              player.addTempSkill('longtengmrfz_trick2');
            },
          },
          trick2: {
            charlotte: true,
          },
          equip: {
            trigger: { player: 'useCard2' },
            firstDo: true,
            filter(event, player) {
              if (get.type(event.card) != 'basic') return false;
              if (player.isTypeExpansions('longtengmrfz', 'equip') == false) return false;
              return true;
            },
            content() {
              'step 0';
              var list = ['不计入次数限制'];
              if (
                game.hasPlayer(function (current) {
                  return !trigger.targets.includes(current) && player.canUse(trigger.card, current, false);
                })
              )
                list.add('增加目标');
              if (trigger.card.name == 'sha') list.add('伤害基数+1');
              player
                .chooseControl(list)
                .set('prompt', '【龙腾】:请选择一项')
                .set('ai', function () {
                  var player = _status.event.player,
                    num = [];
                  for (var i = 0; i < list.length; i++) {
                    num.add(i);
                  }
                  if (_status.event.TriCard.name == 'sha' && player.getCardUsable('sha') == 0 && player.countCards('h', 'sha') > 0) return 0;
                  if (_status.event.TriCard.name == 'sha' && (player.countCards('h', 'sha') == 0 || player.getCardUsable('sha') > 0)) return list.length - 1;
                  if (_status.event.TriCard.name == 'jiu') return 0;
                  return num.randomGet();
                })
                .set('TriCard', trigger.card);
              ('step 1');
              game.log(player, '选择了', result.control);
              player.popup(result.control);
              if (result.control == '不计入次数限制') {
                if (trigger.addCount !== false && (trigger.card.name == 'sha' || trigger.card.name == 'jiu')) {
                  trigger.addCount = false;
                  if (trigger.card.name == 'sha') trigger.player.getStat().card.sha--;
                  else trigger.player.getStat().card.jiu--;
                }
                event.finish();
              } else if (result.control == '增加目标') {
                player
                  .chooseTarget([1, 2], '【龙腾】:你可以为此牌(' + get.translation(trigger.card) + ')额外指定两个目标', function (card, player, target) {
                    var player = _status.event.player;
                    if (_status.event.targets.includes(target)) return false;
                    if (player.canUse(trigger.card, target, true) == false) return false;
                    return lib.filter.targetEnabled2(_status.event.card, player, target);
                  })
                  .set('ai', function (target) {
                    var trigger = _status.event.getTrigger();
                    var player = _status.event.player;
                    return get.effect(target, trigger.card, player, player);
                  })
                  .set('targets', trigger.targets)
                  .set('card', trigger.card);
              } else if (result.control == '伤害基数+1') {
                if (!trigger.baseDamage) trigger.baseDamage = 1;
                trigger.baseDamage += 1;
                event.finish();
              } else event.finish();
              ('step 2');
              if (result.targets?.length) {
                for (var i = 0; i < result.targets.length; i++) {
                  trigger.targets.push(result.targets[i]);
                  player.line(result.targets[i]);
                }
              }
            },
          },
          clear: {
            silent: true,
            charlotte: true,
            firstDo: true,
            trigger: { player: ['phaseZhunbeiBegin', 'dieBegin'] },
            content() {
              game.countPlayer(function (current) {
                var cards = current.getExpansions('longtengmrfz');
                if (current.getExpansions('longtengmrfz').length) current.loseToDiscardpile(cards);
              });
            },
          },
        },
        ai: {
          expose: 0.1,
        },
      },
      //嵯峨
      quanshanmrfz: {
        audio: 2,
        trigger: { global: 'phaseEnd' },
        filter(event, player) {
          return event.player.countCards('h') == 0 && event.player != player;
        },
        prompt(event, player) {
          return '是否令' + get.translation(event.player) + '将手牌补至3张并令其获得一些负面效果？';
        },
        check(event, player) {
          if (event.player.hp < 2 && get.attitude(player, event.player) > 0) return true;
          if (get.attitude(player, event.player) > 2 && event.player.maxHp > 2) return Math.random() > 0.6;
          if (event.player.hp < 2) return false;
          return get.attitude(player, event.player) < 2;
        },
        content() {
          var target = trigger.player;
          target.drawTo(Math.min(3, target.maxHp));
          target.addSkill('quanshanmrfz_eff');
        },
        group: ['quanshanmrfz_clear', 'quanshanmrfz_clear2'],
        subSkill: {
          clear2: {
            silent: true,
            charlotte: true,
            trigger: { global: 'phaseEnd' },
            filter(event, player) {
              return event.player.hasSkill('quanshanmrfz_eff');
            },
            content() {
              var target = trigger.player;
              target.removeMark('quanshanmrfz_eff', target.countMark('quanshanmrfz_eff'));
              target.removeSkill('quanshanmrfz_eff');
            },
          },
          clear: {
            silent: true,
            charlotte: true,
            trigger: { player: 'dieBegin' },
            filter(event, player) {
              return game.hasPlayer(function (current) {
                return current.hasMark('quanshanmrfz') || current.hasSkill('quanshanmrfz_eff');
              });
            },
            content() {
              game.countPlayer(function (current) {
                current.removeMark('quanshanmrfz_eff', current.countMark('quanshanmrfz_eff'));
                current.removeSkill('quanshanmrfz_eff');
              });
            },
          },
          eff: {
            marktext: '恶',
            intro: {
              name: '恶',
              content: '·当你造成伤害时,你获得一个‘恶’</br>·你共有#个‘恶’',
            },
            mark: true,
            trigger: { source: 'damageEnd' },
            content() {
              'step 0';
              player.addMark('quanshanmrfz_eff');
              ('step 1');
              if (player.getHandcardLimit() <= 0) {
                event.getParent('phaseUse').skipped = true;
              }
            },
            mod: {
              maxHandcard(player, num) {
                return num - player.countMark('quanshanmrfz_eff');
              },
            },
          },
        },
      },
      chuemrfz: {
        audio: 2,
        enable: 'phaseUse',
        usable: 1,
        filter(event, player) {
          return game.hasPlayer(function (current) {
            return current != player && current.countCards('h') > 0 && player.inRange(current);
          });
        },
        filterTarget(card, player, target) {
          return player.inRange(target) && target != player && target.countCards('h') > 0;
        },
        check() {
          return -1;
        },
        selectTarget: [1, 2],
        multitarget: true,
        multiline: true,
        content() {
          'step 0';
          event.num = 0;
          ('step 1');
          var target = targets[event.num];
          var hs = target.getCards('h');
          var colred = false;
          for (var i = 0; i < hs.length; i++) {
            if (get.color(hs[i]) == 'red') {
              colred = true;
              break;
            }
          }
          player.viewHandcards(target);
          game.log(player, '观看了', target, '的手牌');
          if (colred) {
            var list = [];
            for (var i = 0; i < hs.length; i++) {
              if (list.length == 2) break;
              if (hs[i].suit == 'club' && !list.includes('♣️️')) list.add('♣️️');
              if (hs[i].suit == 'spade' && !list.includes('♠️️')) list.add('♠️️');
            }
            list.add('cancel2');
            if (list.length > 1)
              player
                .chooseControl(list)
                .set('prompt', '【除恶】:请选择一个花色,其(' + get.translation(target) + ')弃置该花色的所有牌')
                .set('ai', function () {
                  var player = _status.event.player,
                    hs = target.getCards(),
                    num = 0;
                  for (var i = 0; i < hs.length; i++) {
                    if (hs[i].suit == 'club') num++;
                    if (hs[i].suit == 'spade') num--;
                  }
                  if (list.length == 1) return 0;
                  if (num > 0) return 0;
                  return 1;
                });
          } else if (!colred) {
            player.chooseBool('【除恶】:是否弃置其(' + get.translation(target) + ')所有手牌？');
            event.goto(3);
          } else event.finish();
          ('step 2');
          var target = targets[event.num];
          if (result.control != 'cancel2') {
            var hs = target.getCards();
            var dis = [];
            for (var i = 0; i < hs.length; i++) {
              if (hs[i].suit == (result.control == '♠️️' ? 'spade' : 'club')) dis.push(hs[i]);
            }
            target.discard(dis);
            player.draw(dis.length);
          }
          if (event.num < targets.length - 1) {
            event.num++;
            event.goto(1);
          } else event.finish();
          ('step 3');
          var target = targets[event.num];
          if (result.bool) {
            var dis = target.getCards();
            target.discard(dis);
            if (target.hasMark('quanshanmrfz_eff')) {
              target.damage(target.countMark('quanshanmrfz_eff'));
              target.removeMark('quanshanmrfz_eff', target.countMark('quanshanmrfz_eff'));
            } else event.goto(5);
          }
          ('step 4');
          if (event.num < targets.length - 1) {
            event.num++;
            event.goto(1);
          } else event.finish();
          ('step 5');
          var target = targets[event.num];
          if (!target.hasSkill('quanshanmrfz_eff')) {
            target.drawTo(Math.min(3, target.maxHp));
            target.addSkill('quanshanmrfz_eff');
            player.popup('劝善');
          }
          event.goto(4);
        },
        ai: {
          order: 13,
          result: {
            player: 1,
            target: -1,
          },
        },
      },
      //新银灰
      xuebianmrfz: {
        intro: {
          content: '已造成#点伤害',
        },
        audio: 2,
        usable: 1,
        enable: 'phaseUse',
        filter(event, player) {
          return (
            player.countCards('h') > 0 &&
            game.hasPlayer(function (current) {
              return current != player && current.countCards('h') > 0;
            })
          );
        },
        filterTarget(card, player, target) {
          return target != player && target.countCards('h') > 0;
        },
        selectTarget: [1, 2],
        check() {
          return -1;
        },
        multitarget: true,
        multiline: true,
        content() {
          'step 0';
          event.cards1 = [];
          event.cards2 = [];
          event.cards3 = [];
          for (var i of targets) i.addTempSkill('xuebianmrfz2', { player: 'phaseEnd' });
          targets.push(player);
          targets.sortBySeat();
          var next = player
            .chooseCardOL(targets, '请选择要展示的牌', true, [1, 3])
            .set('ai', function (card) {
              return -get.value(card);
            })
            .set('source', player);
          next.aiCard = function (target) {
            var hs = target.getCards('h');
            return { bool: true, cards: [hs.randomGet()] };
          };
          next._args.remove('glow_result');
          ('step 1');
          var cards = [];
          var num = 0;
          event.videoId = lib.status.videoId++;
          for (var i = 0; i < targets.length; i++) {
            for (var j = 0; j < result[i].cards.length; j++) {
              cards.push(result[i].cards[j]);
            }
          }
          event.cards = cards;
          game.log(player, '展示了', targets, '的', cards);
          game.broadcastAll(
            function (targets, cards, id, player) {
              var dialog = ui.create.dialog(get.translation(player) + '发动了【雪变】', cards);
              dialog.videoId = id;
              var getName = function (target) {
                if (target._tempTranslate) return target._tempTranslate;
                var name = target.name;
                if (lib.translate[`${name}_ab`]) return lib.translate[`${name}_ab`];
                return get.translation(name);
              };
              for (var i = 0; i < targets.length; i++) {
                if (i == 0) event.cards1 = result[i].cards;
                if (i == 1) event.cards2 = result[i].cards;
                if (i == 2) event.cards3 = result[i].cards;
                for (var j = 0; j < result[i].cards.length; j++) {
                  if (i == 0) dialog.buttons[j].querySelector('.info').innerHTML = getName(targets[i]);
                  else if (i == 1) dialog.buttons[j + result[i - 1].cards.length].querySelector('.info').innerHTML = getName(targets[i]);
                  else dialog.buttons[j + result[i - 2].cards.length + result[i - 1].cards.length].querySelector('.info').innerHTML = getName(targets[i]);
                  if (get.color(result[i].cards[j]) == 'red') num++;
                  else num--;
                }
              }
            },
            targets,
            cards,
            event.videoId,
            player,
          );
          //红多
          if (num > 0) {
            player
              .chooseTarget('【雪变】:你可以对其中一名角色造成一点伤害并令其弃置其展示的牌', function (card, player, target) {
                return target != player && target.hasSkill('xuebianmrfz2');
              })
              .set('ai', function (target) {
                var player = _status.event.player;
                return get.attitude(player, target) < 0;
              });
            event.targets = result;
          } else {
            for (var i = 0; i < targets.length; i++) {
              targets[i].discard(result[i].cards);
            }
          }
          ('step 2');
          var list = [event.cards1, event.cards2, event.cards3];
          game.broadcastAll('closeDialog', event.videoId);
          if (result.targets?.length) {
            result.targets[0].damage();
            for (var i = 0; i < event.targets.length; i++) {
              if (event.targets[i] == result.targets[0]) var cards = list[i];
            }
            result.targets[0].discard(cards);
          }
        },
        group: 'xuebianmrfz_dam',
        subSkill: {
          dam: {
            silent: true,
            trigger: { source: 'damageEnd' },
            filter(event, player) {
              return event.parent.name == 'xuebianmrfz';
            },
            content() {
              player.addMark('xuebianmrfz', trigger.num, false);
            },
          },
        },
        ai: {
          order: 12,
          expose: 0.1,
          result: {
            player: 1,
            target: -1,
          },
        },
      },
      xuebianmrfz2: {
        charlotte: true,
      },
      tonghemrfz: {
        audio: 2,
        derivation: ['xinyingshimrfz', 'new_xinbangmrfz'],
        juexingji: true,
        trigger: { player: 'phaseZhunbeiBegin' },
        forced: true,
        filter(event, player) {
          return player.countMark('xuebianmrfz') >= 2 || game.roundNumber > 2;
        },
        content() {
          player.addMark('xinyingshimrfz', player.countMark('xuebianmrfz'), false);
          player.removeSkill('xuebianmrfz');
          player.addSkill('xinyingshimrfz');
          player.addSkill('new_xinbangmrfz');
          player.loseMaxHp();
          player.recoverTo(player.maxHp);
          player.awakenSkill('tonghemrfz');
        },
      },
      xinyingshimrfz: {
        audio: 'yingshimrfz',
        enable: 'phaseUse',
        usable: 1,
        filter(event, player) {
          return game.hasPlayer((current) => lib.skill.xinyingshimrfz.filterTarget(null, player, current));
        },
        filterTarget(card, player, target) {
          return target != player && target.countCards('h') > 0;
        },
        content() {
          var num = player.countMark('xinyingshimrfz') + 1;
          var max = target.countCards('h');
          if (max > num) return player.discardPlayerCard(num, target, 'h', true, 'visible');
          if (num >= max) return player.discardPlayerCard(max, target, 'h', true, 'visible');
          game.log(player, '观看了', target, '的手牌');
        },
        ai: {
          order: 13,
          expose: 0.1,
          threaten: 1.1,
          result: {
            player: 1,
            target: -1,
          },
        },
      },
      xinbangmrfz: {
        audio: 2,
        trigger: {
          player: 'phaseDrawBegin2',
        },
        forced: true,
        filter(event, player) {
          return event.num > 0 && !event.numFixed;
        },
        content() {
          'step 0';
          player.storage.xinbangmrfz = [];
          var num = get.copy(trigger.num);
          player.chooseTarget(
            get.prompt('xinbangmrfz'),
            '选择至多' + get.translation(num) + '名其他角色,其选择让你定向摸牌,你少摸等量的牌',
            [1, num],
            function (card, player, target) {
              return player != target;
            },
            function (target) {
              var att = get.attitude(_status.event.player, target);
              return att > 0;
            },
          );
          ('step 1');
          if (result.targets?.length) {
            event.targets = result.targets;
            event.num = 0;
            trigger.num -= result.targets.length;
          } else {
            event.finish();
          }
          ('step 2');
          var target = event.targets[event.num];
          var att = get.attitude(target, player);
          target.addTempSkill('xinbangmrfz2', {
            player: 'phaseUseEnd',
          });
          target
            .chooseControl('basic', 'trick', 'equip')
            .set('prompt', '【兴邦】:请让' + get.translation(player) + '摸一张指定类型牌,当此牌造成伤害时,你与其各摸一张牌')
            .set('ai', function (player) {
              if (att > 0) return [1, 2].randomGet();
              return 0;
            });
          ('step 3');
          var card = get.cardPile2(function (card) {
            return get.type(card, 'trick') == result.control;
          });
          if (card) {
            player.gain(card, 'gain2').gaintag = ['xinbangmrfz'];
          } else player.chat('牌堆中没有' + get.translation(result.control) + '牌了!');
          ('step 4');
          var cards = player.getCards('h', function (card) {
            return card.hasGaintag('xinbangmrfz');
          });
          for (var i of cards) {
            i.storage.xinbangmrfz = true;
          }
          if (event.num < event.targets.length - 1) {
            event.num++;
            event.goto(2);
          }
        },
        group: ['xinbangmrfz_draw', 'xinbangmrfz_lose'],
        subSkill: {
          draw: {
            audio: 'xinbangmrfz',
            trigger: { source: 'damageEnd' },
            filter(event, player) {
              if (!event.cards || event.cards.length > 1) return false;
              return event.card.storage && event.card.storage.xinbangmrfz == true;
            },
            forced: true,
            content() {
              'step 0';
              player
                .chooseTarget('【兴邦】:请选择一名其他角色,你与其各摸一张牌', true, function (card, player, target) {
                  return target != player && target.hasSkill('xinbangmrfz2');
                })
                .set('ai', function (target) {
                  var player = _status.event.player;
                  return get.attitude(player, target) > 0;
                });
              ('step 1');
              if (result.targets?.length) {
                result.targets[0].draw();
                player.draw();
              }
            },
          },
          lose: {
            silent: true,
            trigger: { player: 'phaseUseEnd' },
            filter(event, player) {
              return (
                player.countCards('h', function (card) {
                  return card.hasGaintag('xinbangmrfz');
                }) > 0
              );
            },
            content() {
              player.removeGaintag('xinbangmrfz');
            },
          },
        },
      },
      xinbangmrfz2: {
        charlotte: true,
        silent: true,
      },
      new_xinbangmrfz: {
        audio: 'xinbangmrfz',
        forced: true,
        trigger: { player: 'useCardAfter' },
        filter(event, player) {
          if (!player.isPhaseUsing()) return false;
          var list = player.getStorage('xinbangmrfz2');
          if (!list.includes(get.type2(event.card, player))) return true;
          return false;
        },
        content() {
          'step 0';
          if (!player.storage.xinbangmrfz2) {
            player.addTempSkill('xinbangmrfz2');
            player.storage.xinbangmrfz2 = [];
          }
          player.storage.xinbangmrfz2.add(get.type2(trigger.card, player));
          player.draw();
          ('step 1');
          if (Array.isArray(result) && result.length) {
            var card = result.cards[0],
              cards = player.getCards('h'),
              list = [];
            for (var i of cards) {
              if (i == result[0]) continue;
              list.add(i.suit);
            }
            if (!list.includes(card.suit)) player.draw();
          }
        },
      },
      //帕拉斯
      yingzhumrfz: {
        audio: 2,
        trigger: { player: 'phaseBegin' },
        forced: true,
        filter(event, player) {
          return !player.storage.yingzhumrfz;
        },
        content() {
          'step 0';
          var next = player.chooseControl('准备', '判定', '摸牌', '出牌', '弃牌', '结束', 'cancel2').set('prompt', get.prompt('yingzhumrfz'));
          next.set('prompt2', '你可以令自己在任意阶段结束后额外执行一个该阶段');
          next.set('ai', function () {
            var player = _status.event.player;
            if (
              player.countCards('h', 'sha') > player.getCardUsable('sha') &&
              game.hasPlayer(function (current) {
                return current != player && player.inRange(current) && get.attitude(player, current) < 0;
              })
            )
              return 3;
            return 2;
          });
          ('step 1');
          if (result.control != 'cancel2') {
            var list = ['yingzhumrfz_Zhunbei', 'yingzhumrfz_judge', 'yingzhumrfz_draw', 'yingzhumrfz_use', 'yingzhumrfz_discard', 'yingzhumrfz_jieshu'];
            player.addTempSkill(list[result.index]);
          }
        },
        group: 'yingzhumrfz_phase',
        subSkill: {
          phase: {
            forced: true,
            trigger: { global: 'roundStart' },
            content() {
              'step 0';
              player.storage.yingzhumrfz = false;
              player
                .chooseTarget(get.prompt('yingzhumrfz'), '你可以选择一名其他角色,令其于任一阶段结束后额外执行一次此阶段', function (card, player, target) {
                  return target != player;
                })
                .set('ai', function (target) {
                  var player = _status.event.player;
                  var att = get.attitude(player, target);
                  return att > 0;
                });
              ('step 1');
              if (result.targets?.length) {
                var att = get.attitude(player, result.targets[0]);
                var next = player.chooseControl('准备', '判定', '摸牌', '出牌', '弃牌', '结束');
                next.set('prompt', '【英祝】:请选择一个阶段,' + get.translation(result.targets[0]) + '于此阶段结束后额外执行一次此阶段');
                next.set('ai', function () {
                  var target = result.targets[0];
                  return 2;
                });
                player.storage.yingzhumrfz = true;
                event.target = result.targets[0];
              } else event.finish();
              ('step 2');
              var list = ['yingzhumrfz_Zhunbei', 'yingzhumrfz_judge', 'yingzhumrfz_draw', 'yingzhumrfz_use', 'yingzhumrfz_discard', 'yingzhumrfz_jieshu'];
              event.target.addSkill(list[result.index]);
            },
            ai: {
              expose: 0.1,
            },
          },
          Zhunbei: {
            forced: true,
            trigger: { player: 'phaseZhunbeiAfter' },
            mark: true,
            intro: {
              content: '于准备阶段结束后额外执行一个准备阶段',
            },
            content() {
              event.next.remove(player.phaseZhunbei());
              trigger.next.push(player.phaseZhunbei());
              player.removeSkill('yingzhumrfz_Zhunbei');
            },
          },
          judge: {
            forced: true,
            mark: true,
            intro: {
              content: '于判定阶段结束后额外执行一个判定阶段',
            },
            trigger: { player: 'phaseJudgeAfter' },
            content() {
              event.next.remove(player.phaseJudge());
              trigger.next.push(player.phaseJudge());
              player.removeSkill('yingzhumrfz_judge');
            },
          },
          draw: {
            forced: true,
            mark: true,
            intro: {
              content: '于摸牌阶段结束后额外执行一个摸牌阶段',
            },
            trigger: { player: 'phaseDrawAfter' },
            content() {
              event.next.remove(player.phaseDraw());
              trigger.next.push(player.phaseDraw());
              player.removeSkill('yingzhumrfz_draw');
            },
          },
          use: {
            forced: true,
            mark: true,
            intro: {
              content: '于出牌阶段结束后额外执行一个出牌阶段',
            },
            trigger: { player: 'phaseUseAfter' },
            content() {
              event.next.remove(player.phaseUse());
              trigger.next.push(player.phaseUse());
              player.removeSkill('yingzhumrfz_use');
            },
          },
          discard: {
            forced: true,
            mark: true,
            intro: {
              content: '于弃牌阶段结束后额外执行一个弃牌阶段',
            },
            trigger: { player: 'phaseDiscardAfter' },
            content() {
              event.next.remove(player.phaseDiscard());
              trigger.next.push(player.phaseDiscard());
              player.removeSkill('yingzhumrfz_discard');
            },
          },
          jieshu: {
            forced: true,
            mark: true,
            intro: {
              content: '于结束阶段结束后额外执行一个结束阶段',
            },
            trigger: { player: 'phaseJieshuAfter' },
            content() {
              event.next.remove(player.phaseJieshu());
              trigger.next.push(player.phaseJieshu());
              player.removeSkill('yingzhumrfz_jieshu');
            },
          },
        },
      },
      yingdanmrfz: {
        audio: 2,
        silent: true,
        trigger: {
          global: ['phaseZhunbeiAfter', 'phaseJudgeAfter', 'phaseDrawAfter', 'phaseUseAfter', 'phaseDiscardAfter', 'phaseJieshuAfter'],
        },
        content() {
          trigger.player.addMark('yingdanmrfz', false);
        },
        group: 'yingdanmrfz_draw',
        subSkill: {
          draw: {
            forced: true,
            trigger: { global: 'phaseEnd' },
            content() {
              'step 0';
              var target = trigger.player;
              if (target.countMark('yingdanmrfz') > 6) {
                var next = player.chooseBool('【英诞】:是否令' + (target == player ? '自己' : get.translation(target)) + '摸' + (target.countMark('yingdanmrfz') - 6) + '张牌？');
                next.set('ai', function () {
                  var player = _status.event.player;
                  var target = trigger.player;
                  return get.attitude(player, target) > 0;
                });
              }
              ('step 1');
              var target = trigger.player;
              if (result.bool) {
                target.draw(target.countMark('yingdanmrfz') - 6);
              }
              target.removeMark('yingdanmrfz', target.countMark('yingdanmrfz'), false);
            },
          },
        },
        ai: {
          expose: 0.1,
        },
      },
      yingfenmrfz: {
        audio: 2,
        trigger: { player: 'useCardAfter' },
        filter(event, player) {
          if (player.storage.yingfenmrfz) return false;
          return event.card && event.card.name == 'tao';
        },
        forced: true,
        content() {
          'step 0';
          player
            .chooseTarget(get.prompt('yingfenmrfz'), '你可以令一名其他角色回复一点体力', function (card, player, target) {
              return target != player;
            })
            .set('ai', function (target) {
              var player = _status.event.player;
              return get.attitude(player, target) > 0;
            });
          ('step 1');
          if (result.bool) {
            player.storage.yingfenmrfz = true;
            result.targets[0].recover();
          }
        },
        group: 'yingfenmrfz_clear',
        subSkill: {
          clear: {
            silent: true,
            firstDo: true,
            trigger: { global: 'roundStart' },
            filter(event, player) {
              return player.storage.yingfenmrfz;
            },
            content() {
              player.storage.yingfenmrfz = false;
            },
          },
        },
        ai: {
          expose: 0.1,
        },
      },
      //瑕光
      rencimrfz: {
        audio: 2,
        trigger: {
          global: 'phaseEnd',
        },
        filter(event, player) {
          if (event.player == player || event.player.getHistory('skipped').length == 0) return false;
          return lib.filter.targetEnabled({ name: 'sha' }, player, event.player) && (player.hasSha() || (_status.connectMode && player.countCards('h') > 0));
        },
        forced: true,
        content() {
          player.addTempSkill('rencimrfz_dam', 'useCardAfter');
          player
            .chooseToUse(
              function (card, player, event) {
                if (card.name != 'sha') return false;
                return lib.filter.filterCard.apply(this, arguments);
              },
              '【仁慈】:是否对' + get.translation(trigger.player) + '使用一张杀？',
            )
            .set('complexSelect', true)
            .set('filterTarget', function (card, player, target) {
              if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
              return lib.filter.targetEnabled.apply(this, arguments);
            })
            .set('sourcex', trigger.player);
        },
        subSkill: {
          dam: {
            silent: true,
            trigger: {
              source: 'damageBegin',
              player: 'shaMiss',
            },
            filter(event, player) {
              return event.card && event.card.name == 'sha';
            },
            content() {
              if (trigger.name == 'damage') trigger.num++;
              player.removeSkill('rencimrfz_dam');
            },
          },
        },
      },
      huiguangmrfz: {
        audio: 2,
        trigger: { player: 'phaseEnd' },
        filter(event, player) {
          return player.hasMark('huiguangmrfz') && player.countMark('huiguangmrfz') <= 6;
        },
        forced: true,
        content() {
          'step 0';
          var num = player.countMark('huiguangmrfz') - 1;
          var list = ['准备', '判定', '摸牌', '出牌', '弃牌', '结束'];
          player
            .chooseTarget('【辉光】:你可以令一名其他角色跳过下个' + list[num] + '阶段', function (card, player, target) {
              return target != player && !target.hasSkill('huiguangmrfz_skip');
            })
            .set('ai', function (target) {
              var player = _status.event.player;
              var att = get.attitude(target, player),
                num = player.countMark('huiguangmrfz');
              if (num == 2 || num == 5) return att > 0;
              return att < 0;
            });
          ('step 1');
          if (result.targets?.length) {
            var target = result.targets[0],
              num = player.countMark('huiguangmrfz') - 1;
            target.addSkill('huiguangmrfz_skip');
            target.addMark('huiguangmrfz_skip', num + 1, false);
          }
          ('step 2');
          player.removeMark('huiguangmrfz', player.countMark('huiguangmrfz'), false);
        },
        ai: {
          expose: 0.1,
        },
        group: ['huiguangmrfz_mark'],
        subSkill: {
          skip: {
            markimage: 'extension/驶舰之向/image/orther/sleepmrfz.png',
            intro: {
              name: '睡眠',
              content(event, player) {
                var phase = ['phaseZhunbei', 'phaseJudge', 'phaseDraw', 'phaseUse', 'phaseDiscard', 'phaseJieshu'];
                var num = player.countMark('huiguangmrfz_skip') - 1;
                return '跳过下个' + get.tranPhase(phase[num]);
              },
            },
            silent: true,
            trigger: { player: 'phaseBegin' },
            content() {
              var phase = ['phaseZhunbei', 'phaseJudge', 'phaseDraw', 'phaseUse', 'phaseDiscard', 'phaseJieshu'];
              var num = player.countMark('huiguangmrfz_skip') - 1;
              player.skip(phase[num]);
              game.log(player, '跳过了', get.tranPhase(phase[num]));
              player.removeAllmark('huiguangmrfz_skip', false);
              player.removeSkill('huiguangmrfz_skip');
            },
          },
          mark: {
            silent: true,
            trigger: {
              player: 'useCardAfter',
            },
            filter(event, player) {
              return _status.currentPhase == player;
            },
            content() {
              player.addMark('huiguangmrfz', false);
            },
          },
        },
      },
      jiandunmrfz: {
        audio: 2,
        enable: ['chooseToRespond', 'chooseToUse'],
        hiddenCard(player, name) {
          if (get.type(name) != 'basic') return false;
          return player.hasCard(function (card) {
            return get.type2(card) == 'trick';
          }, 'hs');
        },
        filter(event, player) {
          if (
            !player.hasCard(function (card) {
              return get.type2(card) == 'trick';
            }, 'hs')
          )
            return false;
          for (var name of lib.inpile) {
            if (get.type(name) != 'basic') continue;
            if (event.filterCard && event.filterCard({ name: name }, player, event)) return true;
            if (name == 'sha') {
              for (var nature of lib.inpile_nature) {
                if (event.filterCard({ name: 'sha', nature: nature }, player, event)) return true;
              }
            }
          }
          return false;
        },
        chooseButton: {
          dialog(event, player) {
            var list = [];
            for (var name of lib.inpile) {
              if (get.type(name) != 'basic') continue;
              if (event.filterCard({ name: name }, player, event)) {
                list.push(['基本', '', name]);
                if (name == 'sha') {
                  for (var nature of lib.inpile_nature) {
                    if (event.filterCard({ name: name, nature: nature }, player, event)) list.push(['基本', '', 'sha', nature]);
                  }
                }
              }
            }
            return ui.create.dialog('剑盾', [list, 'vcard'], 'hidden');
          },
          check(button) {
            var player = _status.event.player;
            var card = {
              name: button.link[2],
              nature: button.link[3],
            };
            if (
              _status.event.parent.type != 'phase' ||
              game.hasPlayer(function (current) {
                return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
              })
            ) {
              switch (button.link[2]) {
                case 'tao':
                case 'shan':
                  return 5;
                case 'jiu': {
                  if (
                    player.countCards('hs', {
                      type: 'trick',
                    }) > 2
                  )
                    return 3;
                }
                case 'sha':
                  if (button.link[3] == 'fire') return 2.95;
                  else if (button.link[3] == 'thunder' || button.link[3] == 'ice') return 2.92;
                  else return 2.9;
              }
            }
            return 0;
          },
          backup(links, player) {
            return {
              audio: 'jiandunmrfz',
              filterCard(card, player, target) {
                return get.type2(card) == 'trick';
              },
              complexCard: true,
              selectCard: 1,
              check(card, player, target) {
                return 6 - get.value(card);
              },
              viewAs: { name: links[0][2], nature: links[0][3] },
              position: 'hes',
              popname: true,
            };
          },
          prompt(links, player) {
            return '你可以将一张锦囊牌当任意基本牌使用或打出';
          },
        },
        ai: {
          order: 3.1,
          skillTagFilter(player, tag, arg) {
            if (tag == 'fireAttack') return true;
            if (
              !player.hasCard(function (card) {
                return get.type2(card) == 'trick';
              }, 'hes')
            ) {
              return false;
            }
          },
          result: {
            player: 1,
          },
          respondSha: true,
          respondShan: true,
          fireAttack: true,
        },
      },
      //新星熊
      xinboremrfz: {
        audio: 'banruomrfz',
        mark: false,
        markimage: 'extension/驶舰之向/image/orther/xinboremrfz.png',
        intro: {
          content(player) {
            var playerhas = game.findPlayer(function (current) {
              return current.hasSkill('xinboremrfz');
            });
            return get.translation(playerhas) + '正在保护你';
          },
        },
        group: ['xinboremrfz_choose', 'xinboremrfz_card', 'xinboremrfz_betarget'],
        subSkill: {
          betarget: {
            audio: 'banruomrfz',
            trigger: {
              global: 'useCardToPlayer',
            },
            filter(event, player) {
              if (event.targets > 1 || get.type(event.card) == 'equip') return false;
              return event.target.hasMark('xinboremrfz') && player.getHandcardLimit() > 0;
            },
            prompt(event, player) {
              return '【般若】:是否令' + get.translation(event.card) + '的目标由' + get.translation(event.target) + '改为你？';
            },
            check(event, player) {
              var att = get.attitude(event.target, player);
              if ((event.card.name == 'wuzhong' || event.card.name == 'dongzhuxianji' || event.card.name == 'zenbing') && att < 0) return true;
              return att > 0 && get.tag(event.card, 'damage');
            },
            content() {
              'step 0';
              var target = trigger.target;
              trigger.targets.remove(target);
              trigger.parent.triggeredTargets1.remove(target);
              trigger.untrigger();
              ('step 1');
              trigger.targets.push(player);
              trigger.player.line(player, 'fire');
              game.log(trigger.card, '的目标被改为', player);
              player.addMark('xinboremrfz_losehdlimit', false);
            },
            ai: {
              expose: 0.1,
            },
          },
          choose: {
            forced: true,
            trigger: {
              global: 'phaseBefore',
              player: 'enterGame',
            },
            filter(event, player) {
              return event.name != 'phase' || game.phaseNumber == 0;
            },
            content() {
              'step 0';
              player.chooseTarget(true, '【般若】:请选择一名其他角色,令其获得‘般若’标记', function (card, player, target) {
                return target != player;
              }).ai = function (target) {
                return get.attitude(player, target);
              };
              ('step 1');
              if (result.targets?.length) {
                var target = result.targets[0];
                target.addMark('xinboremrfz');
                player.disableEquip('equip2');
                target.disableEquip('equip2');
                player.addSkill('xinboremrfz_handlit');
                target.addSkill('xinboremrfz_handlit');
              }
              player.addSkill('xinboremrfz_losehdlimit');
              player.removeSkill('xinboremrfz_choose');
            },
            ai: {
              expose: 0.1,
            },
          },
          card: {
            audio: 'xinboremrfz',
            enable: 'chooseToUse',
            hiddenCard(player, name) {
              if (player.hasSkill('xinboremrfz_usedwuxie') && player.hasSkill('xinboremrfz_usedsha') && player.hasSkill('xinboremrfz_usedshan')) return false;
              if (name == 'wuxie' && player.hasSkill('xinboremrfz_usedwuxie')) return false;
              if (name == 'sha' && player.hasSkill('xinboremrfz_usedsha')) return false;
              if (name == 'shan' && player.hasSkill('xinboremrfz_usedshan')) return false;
              return (name == 'wuxie' || name == 'sha' || name == 'shan') && (player.getHandcardLimit() > 0 || player.countDisabledSlot() < 5);
            },
            filter(event, player) {
              if (player.hasSkill('xinboremrfz_usedwuxie') && player.hasSkill('xinboremrfz_usedsha') && player.hasSkill('xinboremrfz_usedshan')) return false;
              return player.getHandcardLimit() > 0 || player.countDisabledSlot() < 5;
            },
            chooseButton: {
              dialog(event, player) {
                var vcards = [];
                for (var name of ['sha', 'shan', 'wuxie']) {
                  const card = { name: name };
                  if (name == 'wuxie' && player.hasSkill('xinboremrfz_usedwuxie')) continue;
                  if (name == 'shan' && player.hasSkill('xinboremrfz_usedshan')) continue;
                  if (name == 'sha' && player.hasSkill('xinboremrfz_usedsha')) continue;
                  if (event.filterCard(card, player, event)) {
                    //QQQ
                    if (name == 'sha') {
                      vcards.push(['基本', '', 'sha']);
                      for (var j of lib.inpile_nature) vcards.push(['基本', '', 'sha', j]);
                    } else if (get.type(name) == 'trick') {
                      vcards.push(['锦囊', '', name]);
                    } else if (get.type(name) == 'basic') {
                      vcards.push(['基本', '', name]);
                    }
                  }
                }
                var dialog = ui.create.dialog('般若', [vcards, 'vcard'], 'hidden');
                dialog.direct = true;
                return dialog;
              },
              filter(button, player) {
                return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
              },
              backup(links, player) {
                return {
                  filterCard: () => false,
                  selectCard: -1,
                  viewAs: {
                    name: links[0][2],
                    nature: links[0][3],
                  },
                  popname: true,
                  precontent() {
                    'step 0';
                    var card = event.result.card.name;
                    if (card == 'sha') {
                      event.parent.addCount = false;
                      player.addSkill('xinboremrfz_usedsha');
                    }
                    if (card == 'shan') player.addSkill('xinboremrfz_usedshan');
                    if (card == 'wuxie') player.addSkill('xinboremrfz_usedwuxie');
                    ('step 1');
                    var list = [];
                    if (player.getHandcardLimit() > 0) list.push('手牌上限-1');
                    if (player.countDisabledSlot() < 5) list.push('废除一个装备栏');
                    if (list.length > 1)
                      player
                        .chooseControl(list)
                        .set('prompt', '【般若】:请选择一项')
                        .set('ai', function () {
                          return 0;
                        });
                    else {
                      if (player.getHandcardLimit() == 0)
                        player.chooseToDisable().ai = function (event, player, list) {
                          if (list.includes('equip5')) return 'equip5';
                          return list.randomGet();
                        };
                      else player.addMark('xinboremrfz_losehdlimit', false);
                    }
                    ('step 2');
                    if (result.index == 0) player.addMark('xinboremrfz_losehdlimit', false);
                    else
                      player.chooseToDisable().ai = function (event, player, list) {
                        if (list.includes('equip5')) return 'equip5';
                        return list.randomGet();
                      };
                  },
                };
              },
              prompt(links, player) {
                return '【般若】:视为使用一张【' + get.translation(links[0][2]) + '】';
              },
            },
            ai: {
              order(item, player) {
                var player = _status.event.player;
                var event = _status.event;
                if (event.filterCard({ name: 'sha' }, player, event)) {
                  return 4;
                }
              },
              respondSha: true,
              respondShan: true,
              skillTagFilter(player, tag, arg) {
                if (player.hasSkill('xinboremrfz_usedwuxie') && player.hasSkill('xinboremrfz_usedsha') && player.hasSkill('xinboremrfz_usedshan')) return false;
                if (arg != 'use') return false;
              },
              result: {
                player: 1,
              },
            },
          },
          losehdlimit: {
            silent: true,
            charlotte: true,
            mod: {
              maxHandcard(player, num) {
                return num - player.countMark('xinboremrfz_losehdlimit');
              },
            },
          },
          usedshan: {
            silent: true,
            charlotte: true,
            trigger: { global: 'phaseZhunbeiBegin' },
            content() {
              player.removeSkill('xinboremrfz_usedshan');
            },
          },
          usedwuxie: {
            silent: true,
            charlotte: true,
            trigger: { global: 'phaseZhunbeiBegin' },
            content() {
              player.removeSkill('xinboremrfz_usedwuxie');
            },
          },
          usedsha: {
            silent: true,
            charlotte: true,
            trigger: { global: 'phaseZhunbeiBegin' },
            content() {
              player.removeSkill('xinboremrfz_usedsha');
            },
          },
          handlit: {
            silent: true,
            charlotte: true,
            mod: {
              maxHandcard(player, num) {
                return num + 1;
              },
            },
          },
        },
      },
      xinyizhongmrfz: {
        audio: 'yizhongmrfz',
        forced: true,
        trigger: { player: 'phaseZhunbeiBegin' },
        filter(event, player) {
          return player.hp >= player.getHandcardLimit();
        },
        content() {
          var num = 5 - player.countDisabledSlot() - 1;
          player.addMark('xinyizhongmrfz', num, false);
        },
        mod: {
          maxHandcard(player, num) {
            return num + player.countMark('xinyizhongmrfz');
          },
        },
        group: 'xinyizhongmrfz_lose',
        subSkill: {
          lose: {
            audio: 'yizhongmrfz',
            forced: true,
            charlotte: true,
            trigger: { player: 'damageEnd' },
            filter(event, player) {
              return event.source != undefined && event.num > 0 && event.source.hasMark('xinboremrfz');
            },
            content() {
              player.removeSkill('xinboremrfz');
              player.removeSkill('xinyizhongmrfz_lose');
            },
          },
        },
      },
      //新缪尔赛思
      yuanliumrfz: {
        audio: 'kaiyuanmrfz',
        trigger: {
          player: 'enterGame',
          global: 'phaseBefore',
        },
        forced: true,
        markimage: 'extension/驶舰之向/image/orther/miumiuliuxingmrfz.png',
        intro: {
          name: '流形',
          content: '#/3',
        },
        filter(event, player) {
          return event.name != 'phase' || game.phaseNumber == 0;
        },
        content() {
          'step 0';
          player
            .chooseControl()
            .set('choiceList', ['令一名角色摸两张牌', '获得一个‘流形’'])
            .set('ai', function () {
              return [0, 1].randomGet();
            });
          ('step 1');
          if (result.index == 0) {
            player.chooseTarget(true, '【源流】:令一名角色摸两张牌').ai = function (target) {
              return get.attitude(player, target) > 2;
            };
          } else {
            player.addMark('yuanliumrfz');
            event.finish();
          }
          ('step 2');
          if (result.targets?.length) {
            var target = result.targets[0];
            target.draw(2);
          }
        },
        mod: {
          maxHandcard(player, num) {
            return num + player.countMark('yuanliumrfz');
          },
        },
        group: 'yuanliumrfz_get',
        subSkill: {
          get: {
            forced: true,
            trigger: {
              player: 'phaseUseEnd',
            },
            filter(event, player) {
              return (
                player.getHistory('useCard', function (evt) {
                  return evt.getParent('phaseUse') == event;
                }).length && player.countMark('yuanliumrfz') < 3
              );
            },
            content() {
              var list = [],
                mark = player.countMark('yuanliumrfz');
              player.getHistory('useCard', function (evt) {
                if (evt.getParent('phaseUse') == trigger) list.add(get.type2(evt.card));
              });
              if (mark + list.length > 3) player.addMark('yuanliumrfz', 3 - mark);
              else player.addMark('yuanliumrfz', list.length);
            },
          },
        },
      },
      xinjingshuimrfz: {
        audio: 'jingshuimrfz',
        trigger: {
          player: 'useCardToPlayered',
        },
        usable: 1,
        filter(event, player) {
          var evt = event.getParent('phaseUse'),
            type = get.type(event.card);
          if (type != 'basic' && type != 'trick') return false;
          if (!evt || evt.player != player) return false;
          if (!player.hasMark('yuanliumrfz')) return false;
          return event.targets && event.targets.length == 1;
        },
        prompt(event, player) {
          return '是否移除所有‘源流’并令【' + get.translation(event.card.name) + '】额外结算' + player.countMark('yuanliumrfz') + '次？';
        },
        check(event, player) {
          return !get.tag(event.card, 'norepeat');
        },
        content() {
          var num = player.countMark('yuanliumrfz');
          trigger.parent.effectCount += num;
          player.removeAllmark('yuanliumrfz');
        },
      },
      shuilingmrfz: {
        audio: 'liuxingmrfz',
        forced: true,
        trigger: { player: 'damageBegin3' },
        filter(event, player) {
          if (player.hasSkill('shuilingmrfz_ban')) return false;
          return !event.nature && player.countCards('h') >= player.hp;
        },
        content() {
          trigger.num--;
          player.addTempSkill('shuilingmrfz_ban', 'phaseEnd');
        },
        subSkill: {
          ban: {
            charlotte: true,
            mark: true,
            intro: {
              content: '本回合已发动过【水灵】',
            },
          },
        },
      },
      //新归溟幽灵鲨
      xinyongwomrfz: {
        audio: 'yongwomrfz',
        zhuanhuanji: true,
        mark: true,
        marktext: '☯',
        intro: {
          content(storage, player, skill) {
            if (player.storage.xinyongwomrfz) return '阳:当你进入濒死状态时,你可以回复至一点体力';
            return '阴:当你武将牌从正面朝上至背面朝上时,你可以摸两张牌,选择一项:1.弃置你攻击范围内一名其他角色区域内各一张牌;2.对你攻击范围内的一名其他角色造成一点伤害';
          },
        },
        init(player) {
          player.storage.xinyongwomrfz = true;
        },
        trigger: { player: 'dying' },
        filter(event, player) {
          return player.storage.xinyongwomrfz;
        },
        prompt: '【拥我】:是否将体力回复至1点',
        content() {
          player.recoverTo(1);
          player.changeZhuanhuanji('xinyongwomrfz');
        },
        group: 'xinyongwomrfz_ying',
        subSkill: {
          //阴
          ying: {
            audio: 'xinyongwomrfz',
            trigger: { player: 'turnOverAfter' },
            filter(event, player) {
              return event.player.isTurnedOver() && !player.storage.xinyongwomrfz;
            },
            prompt: '【拥我】:你可以摸两张牌,选择一项:1.弃置你攻击范围内一名其他角色区域内各一张牌;2.对你攻击范围内的一名其他角色造成一点伤害.',
            check(event, player) {
              return game.hasPlayer(function (current) {
                return current != player && get.attitude(player, current) < 0;
              });
            },
            content() {
              'step 0';
              var choice = 0,
                max = 0;
              for (var i of game.players) {
                var target = i,
                  tmp1 = 0;
                if (target == player) continue;
                if (!player.inRange(target)) continue;
                if (get.attitude(player, target) > 0) continue;
                if (target.countCards('e') > 0) tmp1++;
                if (target.countCards('h') > 0) tmp1++;
                if (target.countCards('j') > 0) tmp1--;
                if (tmp1 > max) max = tmp1;
              }
              if (
                game.hasPlayer(function (current) {
                  return current != player && get.attitude(player, current) < 0 && current.hp <= 1;
                }) ||
                max < 2
              )
                choice = 1;
              player.draw(2);
              player
                .chooseControl()
                .set('choiceList', ['弃置你攻击范围内一名其他角色区域内各一张牌', '对你攻击范围内的一名其他角色造成一点伤害'])
                .set('ai', function () {
                  return choice;
                });
              event.choice = choice;
              ('step 1');
              event.index = result.index;
              if (
                game.hasPlayer(function (current) {
                  return current != player && player.inRange(current);
                })
              ) {
                player
                  .chooseTarget('【拥我】:请选择一名其他角色', true, function (rd, player, target) {
                    return target != player && player.inRange(target);
                  })
                  .set('ai', function (target) {
                    var player = _status.event.player,
                      att = get.attitude(player, target);
                    if (event.choice == 0) {
                      if (target.countCards('e') > 0) return att < 0 && target.countCards('e') > 0;
                      else return att < 0;
                    } else return get.damageEffect(target, player, player) > 0;
                  });
              } else event.finish();
              ('step 2');
              if (result.targets?.length) {
                var target = result.targets[0];
                if (event.index == 0) {
                  var num = 0;
                  if (target.countCards('h')) num++;
                  if (target.countCards('e')) num++;
                  if (target.countCards('j')) num++;
                  if (num > 0) {
                    player.discardPlayerCard(target, num, 'hej', true).set('filterButton', function (button) {
                      for (var i = 0; i < ui.selected.buttons.length; i++) {
                        if (get.position(button.link) == get.position(ui.selected.buttons[i].link)) return false;
                      }
                      return true;
                    });
                  }
                } else target.damage('player');
                player.changeZhuanhuanji('xinyongwomrfz');
              }
            },
          },
        },
      },
      douzhengmrfz: {
        audio: 2,
        trigger: { global: 'phaseEnd' },
        prompt(event, player) {
          return '【斗争】:是否失去所有体力并视为对' + get.translation(event.player) + '使用一张【杀】？';
        },
        filter(event, player) {
          return event.player != player;
        },
        check(event, player) {
          if (get.attitude(player, event.player) > 0) return false;
          return (
            player.countCards('h', function (card) {
              return card.name == 'tao' || card.name == 'jiu';
            }) > 0 || player.storage.xinyongwomrfz == true
          );
        },
        content() {
          player.loseHp(player.hp);
          player.useCard({ name: 'sha' }, false, trigger.player);
          player.turnOver();
        },
        ai: {
          expose: 0.1,
        },
      },
      shensuimrfz: {
        audio: 2,
        forced: true,
        trigger: { player: 'loseHpEnd' },
        filter(event, player) {
          return event.num > 1;
        },
        content() {
          player.changeHujia(trigger.num);
        },
        group: 'shensuimrfz_change',
        subSkill: {
          change: {
            forced: true,
            trigger: { global: 'roundStart' },
            filter(event, player) {
              return !player.storage.xinyongwomrfz;
            },
            content() {
              player.changeZhuanhuanji('xinyongwomrfz');
            },
          },
        },
      },
      //早露
      zhongxiemrfz: {
        audio: 2,
        forced: true,
        trigger: {
          player: 'useCardToPlayered',
        },
        filter(event, player) {
          if (event.card.name != 'sha' || typeof event.card.number != 'number') return false;
          return event.target.countCards('h') <= event.card.number;
        },
        content() {
          trigger.parent.directHit.add(trigger.target);
        },
        ai: {
          directHit_ai: true,
          skillTagFilter(player, tag, arg) {
            if (tag == 'directHit_ai') {
              if (arg.card.name == 'sha' && typeof arg.card.number == 'number') return arg.card.name == 'sha' && arg.target.countCards('h') <= arg.card.number;
            }
            return false;
          },
        },
        mod: {
          attackRange(player, num) {
            return (num += 2);
          },
        },
        group: ['zhongxiemrfz_damage', 'zhongxiemrfz_wushi'],
        subSkill: {
          damage: {
            audio: 'zhongxiemrfz',
            forced: true,
            trigger: { source: 'damageBegin' },
            filter(event, player) {
              return event.player.hujia > 0;
            },
            content() {
              trigger.num += trigger.player.hujia;
            },
          },
          wushi: {
            trigger: {
              player: 'useCardToPlayered',
            },
            filter(event, player) {
              return event.card && event.card.name == 'sha';
            },
            forced: true,
            logTarget: 'target',
            content() {
              trigger.target.addTempSkill('qinggang2');
              trigger.target.storage.qinggang2.add(trigger.card);
              trigger.target.markSkill('qinggang2');
            },
            ai: {
              unequip: true,
              skillTagFilter(player, tag, arg) {
                if (arg && arg.name == 'sha') return true;
                return false;
              },
            },
          },
        },
      },
      rusuimrfz: {
        audio: 2,
        trigger: { source: 'damageBegin2' },
        filter(event, player) {
          var num = 0,
            target = event.player;
          if (!event.card) return false;
          if (target.countCards('h') >= target.hp) num++;
          if (target.countCards('e') > 0) num++;
          if (target.getDamagedHp() <= target.hp) num++;
          return event.player != player && event.card.name == 'sha' && num != 0;
        },
        check(event, player) {
          return get.attitude(player, event.player) < 0;
        },
        prompt(event, player) {
          var num = 0,
            target = event.player;
          if (target.countCards('h') >= target.hp) num++;
          if (target.countCards('e') > 0) num++;
          if (target.getDamagedHp() <= target.hp) num++;
          if (num < 3) return '【入髓】:是否令' + get.translation(target) + '弃置' + num + '张牌';
          else return '【入髓】:是否令' + get.translation(target) + '弃置' + num + '张牌并令此杀伤害+1';
        },
        prompt2: false,
        content() {
          var num = 0,
            target = trigger.player;
          if (target.countCards('h') >= target.hp) num++;
          if (target.countCards('e') > 0) num++;
          if (target.getDamagedHp() <= target.hp) num++;
          target.chooseToDiscard('he', true, `【入髓】:请弃置${num}张牌`, num);
          if (num == 3) trigger.num++;
        },
      },
      //琳琅诗怀雅
      zhijinmrfz: {
        mod: {
          aiOrder(player, card, num) {
            if (typeof card == 'object' && player.isPhaseUsing()) {
              var evt = lib.skill.zhijinmrfz.getLastUsed(player);
              if (evt && evt.card && evt.card.suit && evt.card.suit == card.suit) {
                return num + 10;
              }
            }
          },
        },
        marktext: '钱',
        intro: {
          name: '钱',
          content: '共有#个钱',
        },
        audio: 4,
        trigger: { player: 'useCard' },
        forced: true,
        getLastUsed(player, event) {
          var history = player.getAllHistory('useCard');
          var index;
          if (event) index = history.indexOf(event) - 1;
          else index = history.length - 1;
          if (index >= 0) return history[index];
          return false;
        },
        filter(event, player) {
          var evt = lib.skill.dcjianying.getLastUsed(player, event);
          if (!evt || !evt.card) return false;
          return lib.suit.includes(evt.card.suit) && evt.card.suit == event.card.suit;
        },
        content() {
          player.addMark('zhijinmrfz');
        },
        group: ['zhijinmrfz_round', 'zhijinmrfz_use'],
        subSkill: {
          use: {
            audio: 'zhijinmrfz',
            enable: ['chooseToUse', 'chooseToRespond'],
            filter(event, player) {
              var vcards = [],
                list = [],
                mark = player.countMark('zhijinmrfz');
              if (mark >= 1) list.push('sha');
              if (mark >= 2) list.push('juedou');
              if (mark >= 3) list.push('wuzhong');
              if (mark >= 4) list.push('tao');
              if (mark >= 5) list.push('wanjian');
              if (!player.isPhaseUsing() || player.countMark('zhijinmrfz') == 0 || list.length == 0) return false;
              for (var name of list) {
                if (event.filterCard({ name: name }, player, event)) return true;
              }
              return false;
            },
            chooseButton: {
              dialog(event, player) {
                var vcards = [],
                  list = [],
                  mark = player.countMark('zhijinmrfz');
                if (mark >= 1) list.push('sha');
                if (mark >= 2) list.push('juedou');
                if (mark >= 3) list.push('wuzhong');
                if (mark >= 4) list.push('tao');
                if (mark >= 5) list.push('wanjian');
                for (var name of list) {
                  const card = { name: name };
                  if (event.filterCard(card, player, event)) {
                    //QQQ
                    if (name == 'sha') {
                      for (var j of lib.inpile_nature) {
                        if (j != 'fire') continue;
                        vcards.push(['基本', '', 'sha', j]);
                      }
                    } else if (get.type(name) == 'trick') {
                      vcards.push(['锦囊', '', name]);
                    } else if (get.type(name) == 'basic') {
                      vcards.push(['基本', '', name]);
                    }
                  }
                }
                var dialog = ui.create.dialog('掷金', [vcards, 'vcard'], 'hidden');
                dialog.direct = true;
                return dialog;
              },
              //锁定技,当你使用的牌与你上一张花色相同或每轮开始时,你获得一个<钱>.
              //②出牌阶段,你可以移除与选项数字相同的<钱>将一张牌按照下述规则当作一张牌使用:1.:火【杀】;2.:决斗;3.:无中生有;4.:桃;5.万箭齐发.若你因此移除了所有的<钱>,你摸一张牌
              check(button) {
                var player = _status.event.player;
                var recover = 0,
                  lose = 1,
                  players = game.filterPlayer(),
                  choose = button.link[2];
                var mark = player.countMark('zhijinmrfz');
                if (mark >= 5) {
                  if (player.hp < 3) return choose == 'tao' ? 2 : -1;
                  for (var i of players) {
                    var att = get.attitude(player, i);
                    if (i.hp == 1 && get.damageEffect(i, player, player) > 0 && !i.hasSha()) {
                      return button.link[2] == 'juedou' ? 2 : -1;
                    }
                    if (att < 0) lose++;
                    if (att > 0 && i.hp > 2) lose = lose - 0.5;
                    if (att > 0 && i.hp < 2) lose--;
                    if (att > 2 && i == 1) lose -= 3;
                  }
                  if (lose > 0) return choose == 'wanjian' ? 1 : -1;
                  if (
                    player.countCards('h', function (card) {
                      return (card.name = 'sha');
                    }) >= player.getCardUsable('sha') ||
                    player.getCardUsable('sha') == 0
                  )
                    return choose == 'wuzhong' ? 1 : -1;
                  return choose == 'sha' ? 1 : -1;
                }
                if (mark >= 4) {
                  if (player.hp < 3) return choose == 'tao' ? 1 : -1;
                  for (var i of players) {
                    var att = get.attitude(player, i);
                    if (i.hp == 1 && get.damageEffect(i, player, player) > 0 && !i.hasSha()) {
                      return button.link[2] == 'juedou' ? 2 : -1;
                    }
                  }
                  if (
                    player.countCards('h', function (card) {
                      return (card.name = 'sha');
                    }) >= player.getCardUsable('sha') ||
                    player.getCardUsable('sha') == 0
                  )
                    return choose == 'wuzhong' ? 1 : -1;
                  return choose == 'sha' ? 1 : -1;
                }
                if (mark >= 3) {
                  for (var i of players) {
                    var att = get.attitude(player, i);
                    if (i.hp == 1 && get.damageEffect(i, player, player) > 0 && !i.hasSha()) {
                      return button.link[2] == 'juedou' ? 2 : -1;
                    }
                  }
                  if (
                    player.countCards('h', function (card) {
                      return (card.name = 'sha');
                    }) >= player.getCardUsable('sha') ||
                    player.getCardUsable('sha') == 0
                  )
                    return choose == 'wuzhong' ? 1 : -1;
                  return choose == 'sha' ? 1 : -1;
                }
                if (mark >= 2) {
                  for (var i of players) {
                    var att = get.attitude(player, i);
                    if (i.hp == 1 && get.damageEffect(i, player, player) > 0 && !i.hasSha()) {
                      return button.link[2] == 'juedou' ? 2 : -1;
                    }
                  }
                  return choose == 'sha' ? 1 : -1;
                }
                return choose == 'sha' ? 1 : -1;
              },
              backup(links, player) {
                return {
                  filterCard: () => true,
                  selectCard: 1,
                  viewAs: {
                    name: links[0][2],
                    nature: links[0][3],
                  },
                  position: 'h',
                  popname: true,
                  precontent() {
                    var card = event.result.card.name,
                      mark = player.countMark('zhijinmrfz');
                    if (card == 'sha') {
                      if (mark == 1) player.draw();
                      player.removeMark('zhijinmrfz');
                    }
                    if (card == 'juedou') {
                      if (mark == 2) player.draw();
                      player.removeMark('zhijinmrfz', 2);
                    }
                    if (card == 'wuzhong') {
                      if (mark == 3) player.draw();
                      player.removeMark('zhijinmrfz', 3);
                    }
                    if (card == 'tao') {
                      if (mark == 4) player.draw();
                      player.removeMark('zhijinmrfz', 4);
                    }
                    if (card == 'wanjian') {
                      if (mark == 5) player.draw();
                      player.removeMark('zhijinmrfz', 5);
                    }
                  },
                };
              },
              prompt(links, player) {
                return '【掷金】:视为使用一张' + (links[0][3] == undefined ? '' : '火') + '【' + get.translation(links[0][2]) + '】';
              },
            },
            ai: {
              respondSha: true,
              fireAttack: true,
              order(item, player) {
                var player = _status.event.player;
                var event = _status.event;
                var mark = player.countMark('zhijinmrfz');
                if (event.filterCard({ name: 'tao' }, player, event) && mark >= 4) {
                  return 10;
                }
                if (event.filterCard({ name: 'wuzhong' }, player, event) && mark >= 3) {
                  return 13;
                }
                if (event.filterCard({ name: 'juedou' }, player, event) && mark >= 2) {
                  return 4.95;
                }
                if (event.filterCard({ name: 'sha' }, player, event) && mark >= 1) {
                  return 2.95;
                }
              },
              skillTagFilter(player, tag, arg) {
                return player.countMark('zhijinmrfz') > 0;
              },
              result: {
                player: 1,
              },
            },
          },
          round: {
            audio: 'zhijinmrfz',
            trigger: { global: 'roundStart' },
            forced: true,
            charlotte: true,
            content() {
              player.addMark('zhijinmrfz');
            },
          },
        },
      },
      mianzaimrfz: {
        markimage: 'extension/驶舰之向/image/orther/mianzaimrfz_money.png',
        intro: {
          content: '累计点数:#',
        },
        audio: 2,
        trigger: {
          player: 'dying',
        },
        forced: true,
        content() {
          var cards = game.cardsGotoOrdering(get.cards(6)).cards,
            num = 0;
          if (Array.isArray(cards))
            for (var i of cards) {
              num = num + i.number;
            }
          player.showCards(cards, get.translation(player) + '发动了【免灾】</br>点数之和为:' + num);
          if (num <= player.countMark('mianzaimrfz')) {
            player.recoverTo(3);
            player.drawTo(3);
            player.removeAllmark('mianzaimrfz', false);
          }
        },
        group: ['mianzaimrfz_number'],
        subSkill: {
          number: {
            silent: true,
            charlotte: true,
            trigger: { player: 'useCard' },
            filter(event, player) {
              return event.cards && event.cards.length == 1;
            },
            content() {
              var num = trigger.card.number;
              player.addMark('mianzaimrfz', num, false);
            },
          },
        },
      },
      //圣约送葬人
      chongdanmrfz: {
        audio: 2,
        forced: true,
        subfrequent: ['chongdanmrfz_player'],
        trigger: {
          source: 'damageSource',
        },
        filter(event, player) {
          if (player.countCards('h') == 0 && player.getDamagedHp() == 0) return false;
          return !player.storage.chongdanmrfz;
        },
        content() {
          'step 0';
          player.storage.chongdanmrfz = true;
          if (player.getDamagedHp() == 0) player.draw(Math.min(player.hp, 20));
          else {
            player
              .chooseBool(`【铳弹】:是否摸${player.hp}张牌？`)
              .set('prompt2', '选择取消则为回复' + player.countCards('h') + '点体力')
              .set('ai', function () {
                var player = _status.event.player;
                var hp = player.hp;
                if (player.countCards('h') == 0) return 0;
                if (hp < 2) return 1;
                if (player.countCards('j') > 0) return 1;
                if (
                  player.isPhaseUsing() &&
                  player.countCards('h', function (card) {
                    return card.name == 'tao';
                  }) >= player.getDamagedHp()
                )
                  return 1;
                return 0;
              });
          }
          ('step 1');
          if (result.bool) {
            player.draw(Math.min(player.hp, 20));
          } else {
            player.recover(player.countCards('h'));
          }
        },
        mod: {
          cardEnabled(card, player) {
            if (player.countMark('chongdanmrfz_lim') >= 2 * player.maxHp) return false;
          },
          cardUsable(card, player) {
            if (player.countMark('chongdanmrfz_lim') >= 2 * player.maxHp) return false;
          },
          cardSavable(card, player) {
            if (player.countMark('chongdanmrfz_lim') >= 2 * player.maxHp) return false;
          },
        },
        ai: {
          presha: true,
          pretao: true,
        },
        group: ['chongdanmrfz_clear', 'chongdanmrfz_player', 'chongdanmrfz_lim'],
        subSkill: {
          lim: {
            mark: true,
            intro: {
              content: '已使用:#张牌',
            },
            silent: true,
            charlotte: true,
            firstDo: true,
            trigger: {
              player: 'useCard',
            },
            filter(event, player) {
              return player.countMark('chongdanmrfz_lim') < 2 * player.maxHp;
            },
            content() {
              player.addMark('chongdanmrfz_lim', false);
            },
          },
          clear: {
            silent: true,
            charlotte: true,
            trigger: { global: 'roundStart' },
            content() {
              if (player.storage.chongdanmrfz_player) player.storage.chongdanmrfz_player = false;
              if (player.storage.chongdanmrfz) player.storage.chongdanmrfz = false;
              if (player.countMark('chongdanmrfz_lim') > 0) player.removeAllmark('chongdanmrfz_lim', false);
            },
          },
          player: {
            audio: 'chongdanmrfz',
            trigger: {
              player: 'damageEnd',
            },
            filter(event, player) {
              if (player.countCards('h') == 0 && player.getDamagedHp() == 0) return false;
              return !player.storage.chongdanmrfz_player;
            },
            content() {
              'step 0';
              player.storage.chongdanmrfz_player = true;
              if (player.getDamagedHp() == 0) player.draw(Math.min(player.hp, 20));
              else {
                player
                  .chooseBool('【铳弹】:是否摸' + player.hp + '张牌？')
                  .set('prompt2', '选择取消则为回复' + player.countCards('h') + '点体力')
                  .set('ai', function () {
                    var player = _status.event.player;
                    var hp = player.hp;
                    if (player.countCards('h') == 0) return 0;
                    if (hp < 3) return 1;
                    if (player.countCards('j') > 0) return 1;
                    if (
                      player.isPhaseUsing() &&
                      player.countCards('h', function (card) {
                        return card.name == 'tao';
                      }) >= player.getDamagedHp()
                    )
                      return 1;
                    return 0;
                  });
              }
              ('step 1');
              if (result.bool) {
                player.draw(Math.min(player.hp, 20));
              } else {
                player.recover(player.countCards('h'));
              }
            },
          },
        },
      },
      tianxuanmrfz: {
        audio: 2,
        mark: true,
        intro: {
          content(event, player) {
            return '已有的花色:' + get.translation(player.storage.tianxuanmrfz);
          },
        },
        trigger: {
          player: 'useCard1',
        },
        filter(event, player) {
          return get.tag(event.card, 'damage') > 0 && player.isPhaseUsing();
        },
        init(player) {
          player.storage.tianxuanmrfz = ['heart'];
        },
        prompt(event, player) {
          var list = player.storage.tianxuanmrfz;
          return '【天选】:是否进行判定,若为' + get.translation(list) + ',则' + get.translation(event.card) + '结算两次';
        },
        content() {
          'step 0';
          var list = player.storage.tianxuanmrfz;
          player.judge(function (card) {
            for (var i = 0; i < list.length; i++) {
              var suit = card.suit;
              if (suit == list[i]) return -4;
            }
            return 0;
          }).judge2 = function (result) {
            return result.bool == false ? true : false;
          };
          ('step 1');
          if (result.bool == false) {
            trigger.effectCount++;
            player.storage.tianxuanmrfz = [];
            event.finish();
          } else {
            var suit = player.storage.tianxuanmrfz,
              list = [];
            for (var i of lib.suit) {
              if (suit.includes(i)) continue;
              list.push(i);
            }
            player
              .chooseControl(list)
              .set('prompt', '【天选】:请选择为[]内增加一个花色')
              .set('ai', function () {
                if (list.includes('diamond')) return 'diamond';
                return list.randomGet();
              });
          }
          ('step 2');
          if (result.control) {
            player.storage.tianxuanmrfz.add(result.control);
            player.storage.tianxuanmrfz.sort();
          }
        },
      },
      shengcaimrfz: {
        audio: 2,
        trigger: { player: 'useCard2' },
        filter(event, player) {
          if (!get.tag(event.card, 'damage') || !player.isPhaseUsing()) return false;
          return (
            player.getHistory('useCard', function (evt) {
              return get.tag(evt.card, 'damage') > 0;
            }).length > 1
          );
        },
        prompt(event, player) {
          return '【圣裁】:是否令' + get.translation(event.card) + '伤害基数+1？';
        },
        content() {
          if (!trigger.baseDamage) trigger.baseDamage = 1;
          trigger.baseDamage++;
        },
        group: 'shengcaimrfz_damage',
        subSkill: {
          damage: {
            forced: true,
            trigger: { player: 'phaseEnd' },
            filter(event, player) {
              return (
                game.countPlayer((current) => {
                  return current != player && current.getHistory('damage').length;
                }) > 0
              );
            },
            content() {
              'step 0';
              var next = player.chooseTarget([1, Infinity], '【圣裁】:你可以对本回合造成过伤害的其他角色造成一点伤害', function (card, player, target) {
                return target != player && target.getHistory('damage').length;
              });
              next.ai = function (target) {
                return get.attitude(player, target) < 0;
              };
              ('step 1');
              if (result.targets?.length) {
                for (var i of result.targets) {
                  i.damage('player');
                  player.line(i);
                }
              }
            },
          },
        },
      },
      //澄闪废案
      fuxiemrfz: {
        mod: {
          targetInRange(card, player, target) {
            if (target.hasMark('fuxiemrfzx')) {
              return true;
            }
          },
          maxHandcard(player, num) {
            return (num += player.countMark('fuxiemrfzx'));
          },
        },
        audio: 2,
        trigger: {
          global: 'phaseBefore',
          player: 'enterGame',
        },
        forced: true,
        filter(event, player) {
          return event.name != 'phase' || game.phaseNumber == 0;
        },
        content() {
          player.addMark('fuxiemrfzx', 2);
        },
        group: ['fuxiemrfz_thu', 'fuxiemrfz_give', 'fuxiemrfz_get'],
        subSkill: {
          thu: {
            trigger: { source: 'damageBefore' },
            forced: true,
            charlotte: true,
            filter(event, player) {
              return event.nature != 'thunder';
            },
            content() {
              trigger.cancel();
              trigger.player.damage(trigger.num, player, 'thunder');
            },
          },
          give: {
            audio: 'fuxiemrfz',
            trigger: { player: 'useCardToPlayered' },
            filter(event, player) {
              if (!player.isPhaseUsing()) return false;
              if (event.targets.length > 1) return false;
              return player.countMark('fuxiemrfzx') > 0 && event.target != player;
            },
            prompt(event, player) {
              return '【浮械】:是否令' + get.translation(event.target) + '获得一个‘浮标’(剩余‘浮标’数:' + player.countMark('fuxiemrfzx') + ')';
            },
            check(event, player) {
              var att = get.attitude(player, event.target);
              if (att > 2) return false;
              return (
                !event.target.hasMark('fuxiemrfzx') ||
                game.countPlayer(function (current) {
                  return current != player && att < 2 && !current.hasMark('fuxiemrfzx');
                }) < 2
              );
            },
            content() {
              trigger.target.addMark('fuxiemrfzx');
              player.removeMark('fuxiemrfzx');
            },
          },
          get: {
            audio: 'fuxiemrfz',
            enable: 'phaseUse',
            filterCard(card) {
              return card.suit == 'diamond';
            },
            selectCard(event, player) {
              var num = game.getGlobalmark('fuxiemrfzx');
              return [1, 4 - num];
            },
            filter(event, player) {
              if (game.getGlobalmark('fuxiemrfzx') > 3) return false;
              return (
                player.countCards('he', function (card) {
                  return card.suit == 'diamond';
                }) > 0
              );
            },
            check(card) {
              return 6 - get.value(card);
            },
            position: 'he',
            prompt(event, player) {
              return '【浮械】:你可以弃置任意张♦️️的牌并获得等量的‘浮标’';
            },
            content() {
              player.addMark('fuxiemrfzx', cards.length);
            },
            ai: {
              order: 13,
              result: {
                player: 1,
              },
            },
          },
        },
      },
      fuxiemrfzx: {
        charlotte: true,
        intro: {
          content: '当前有#个‘浮标’',
        },
      },
      dianyongmrfz: {
        audio: 2,
        trigger: { player: 'phaseUseBegin' },
        filter(event, player) {
          return game.getGlobalmark('fuxiemrfzx') >= 4;
        },
        content() {
          'step 0';
          event.marknum = player.countMark('fuxiemrfzx');
          player.removeAllmark('fuxiemrfzx');
          event.num = 0;
          player.addTempSkill('dianyongmrfz_extra', 'phaseEnd');
          player.addTempSkill('dianyongmrfz_nolim', 'phaseEnd');
          ('step 1');
          if (event.num < event.marknum) {
            event.num++;
            var next = player.chooseTarget(true, '【电涌】:请选择一名其他角色,为其分配一个‘浮标’', function (card, player, target) {
              return target != player;
            });
            next.ai = function (target) {
              var att = get.attitude(player, target);
              if (!target.hasMark('fuxiemrfzx')) return att < 2;
              return att < 2;
            };
          } else {
            event.finish();
          }
          ('step 2');
          if (result.targets?.length) {
            var target = result.targets[0];
            target.addMark('fuxiemrfzx');
            event.goto(1);
          }
        },
        subSkill: {
          extra: {
            trigger: {
              player: 'useCard2',
            },
            filter(event, player) {
              if (event.targets.length > 1) return false;
              if (event.card.name == 'wuzhong') return false;
              if (event.card.name != 'sha' && get.type(event.card) != 'trick') return false;
              return game.hasPlayer(function (current) {
                return !event.targets.includes(current) && player.canUse(event.card, current) && current.hasMark('fuxiemrfzx');
              });
            },
            forced: true,
            content() {
              'step 0';
              player
                .chooseTarget([1, Infinity], get.prompt('dianyongmrfz'), '你可以额外指定任意个有‘浮标’标记的角色令其成为' + get.translation(trigger.card) + '的目标', function (card, player, target) {
                  return !_status.event.sourcex.includes(target) && player.canUse(_status.event.card, target) && target.hasMark('fuxiemrfzx') && target != player;
                })
                .set('sourcex', trigger.targets)
                .set('ai', function (target) {
                  var player = _status.event.player;
                  return get.effect(target, _status.event.card, player, player);
                })
                .set('card', trigger.card);
              ('step 1');
              if (result.targets?.length) {
                if (!event.isMine() && !event.isOnline()) event.target = result.targets;
              } else {
                event.finish();
              }
              ('step 2');
              for (var i = 0; i < event.target.length; i++) {
                var target = event.target[i];
                player.line(target);
                trigger.targets.push(target);
              }
              var cards = trigger.card;
              if (cards.name == 'sha') {
                player.chooseTarget(true, '【电涌】:请移除场上一个‘浮标’标记', function (card, player, target) {
                  return target != player && target.hasMark('fuxiemrfzx');
                });
              } else event.finish();
              ('step 3');
              if (result.targets?.length) {
                result.targets[0].removeMark('fuxiemrfzx');
              }
            },
          },
          nolim: {
            charlotte: true,
            mod: {
              cardUsableTarget(card, player, target) {
                if (target.hasMark('fuxiemrfzx') && card.name == 'sha') return true;
              },
            },
          },
        },
      },
      shizhunmrfz: {
        audio: 2,
        forced: true,
        charlotte: true,
        trigger: { global: 'phaseZhunbeiBegin' },
        filter(event, player) {
          return event.player != player && event.player.hasMark('fuxiemrfzx');
        },
        callback() {
          for (var i of game.players) {
            if (i.hasSkill('shizhunmrfz')) {
              var us = i;
              break;
            }
          }
          if (event.judgeResult.color == 'black') {
            player.damage('thunder', us);
            player.removeMark('fuxiemrfzx');
          } else us.gain(card, 'gain2');
        },
        content() {
          trigger.player
            .judge(function (card) {
              if (get.color(card) == 'red') return -4;
              return 0;
            })
            .set('callback', lib.skill.shizhunmrfz.callback);
        },
      },
      //涤火杰西卡
      yijiemrfz: {
        audio: 2,
        enable: 'phaseUse',
        usable: 1,
        filter(event, player) {
          if (player.countCards('he') == 0) return false;
          return (
            game.countPlayer(function (current) {
              return current != player && current.countCards('h') > 0;
            }) > 0
          );
        },
        filterTarget(card, player, target) {
          return target != player;
        },
        targetprompt: ['被出杀(A)', '出杀(B)', '出杀(B)'],
        selectTarget: [2, 3],
        multitarget: true,
        line: false,
        content() {
          'step 0';
          event.num = 0;
          targets.push(player);
          var frsTargets = targets[0],
            secTargets = targets.slice(1);
          for (var i of secTargets) i.line(frsTargets);
          ('step 1');
          var frsTargets = targets[0],
            secTargets = targets.slice(1);
          if (event.num < secTargets.length) {
            secTargets[event.num].storage.yijiemrfz = frsTargets;
            secTargets[event.num].addTempSkill('yijiemrfz_gain', 'shaMiss');
            secTargets[event.num]
              .chooseToUse(
                function (card, player, event) {
                  if (card.name != 'sha') return false;
                  return lib.filter.filterCard.apply(this, arguments);
                },
                '【义劫】:是否对' + get.translation(frsTargets) + '使用一张杀？',
              )
              .set('complexSelect', true)
              .set('filterTarget', function (card, player, target) {
                if (target != _status.event.frsTargets && !ui.selected.targets.includes(_status.event.frsTargets)) return false;
                return lib.filter.targetEnabled.apply(this, arguments);
              })
              .set('addCount', false)
              .set('frsTargets', frsTargets);
            event.num++;
            event.redo();
          }
        },
        ai: {
          order: 4.1,
          expose: 0.1,
          result: {
            player: 1,
            target(player, target) {
              if (ui.selected.targets.length == 0) {
                return -3;
              } else return 1;
            },
          },
        },
        //group:'tuohuangmrfz',
        subSkill: {
          gain: {
            forced: true,
            charlotte: true,
            trigger: {
              source: 'damageEnd',
            },
            onremove(player) {
              delete player.storage.yijiemrfz;
            },
            filter(event, player) {
              return event.card && event.card.name == 'sha' && event.player == player.storage.yijiemrfz;
            },
            content() {
              if (trigger.player.countCards('he') > 0) player.gainPlayerCard(trigger.player, true, 'he');
              else trigger.player.damage('player');
              player.removeSkill('yijiemrfz_gain');
              delete player.storage.yijiemrfz;
            },
          },
        },
      },
      fuhuangmrfz: {
        audio: 2,
        derivation: ['tuohuangmrfz', 'weihumrfz'],
        juexingji: true,
        forced: true,
        trigger: {
          player: 'gainAfter',
          global: 'loseAsyncAfter',
        },
        filter(event, player) {
          return player.countMark('fuhuangmrfz_mark') >= 2;
        },
        content() {
          player.removeAllmark('fuhuangmrfz_mark', false);
          player.awakenSkill('fuhuangmrfz');
          player.removeSkill('yijiemrfz');
          player.addSkill('tuohuangmrfz');
          player.addSkill('weihumrfz');
          player.draw(2);
          player.changeHujia(1);
          player.loseMaxHp(1);
        },
        group: 'fuhuangmrfz_mark',
        subSkill: {
          mark: {
            intro: {
              content: '已获得#张牌',
            },
            silent: true,
            firstDo: true,
            trigger: {
              player: 'gainAfter',
              global: 'loseAsyncAfter',
            },
            filter(event, player) {
              if (player.countMark('fuhuangmrfz_mark') >= 2) return false;
              return event.getg(player).length && event.getParent('phaseDraw').player != player;
            },
            content() {
              player.addMark('fuhuangmrfz_mark', false, trigger.num);
            },
          },
        },
      },
      tuohuangmrfz: {
        audio: 2,
        enable: 'phaseUse',
        usable: 1,
        filter(event, player) {
          return game.hasPlayer(function (current) {
            return current.countCards('he') > 0;
          });
        },
        multitarget: true,
        multiline: true,
        filterTarget(card, player, target) {
          return target.countCards('h') > 0;
        },
        selectTarget: [1, 3],
        content() {
          'step 0';
          var num = 4 - targets.length;
          var cards = game.cardsGotoOrdering(get.cards(num)).cards;
          event.cards = cards;
          player.showCards(event.cards, get.translation(player) + '发动了【拓荒】');
          event.num = 0;
          ('step 1');
          if (event.num < targets.length) {
            var suit = [];
            for (var i of event.cards) {
              if (!suit.includes(i.suit) && lib.suit.includes(i.suit)) suit.push(i.suit);
            }
            targets[event.num]
              .chooseToDiscard('h', '【拓荒】:你可以弃置' + get.translation(suit) + '花色的手牌并摸等量+1张牌', [1, Infinity], function (card) {
                var suitcard = card.suit;
                if (suit.includes('diamond') && suitcard == 'diamond') return true;
                if (suit.includes('heart') && suitcard == 'heart') return true;
                if (suit.includes('spade') && suitcard == 'spade') return true;
                if (suit.includes('club') && suitcard == 'club') return true;
              })
              .set('ai', function (card) {
                return 8 - get.value(card);
              });
          } else event.finish();
          ('step 2');
          if (result.cards?.length) {
            targets[event.num].draw(1 + result.cards.length);
          }
          event.num++;
          event.goto(1);
        },
        ai: {
          expose: 0.1,
          threaten: 1.35,
          order: 1,
          result: {
            player: 1,
            target: 1,
          },
        },
      },
      weihumrfz: {
        mod: {
          maxHandcard(player, num) {
            if (player.hujia > 0) return num + 1;
          },
        },
        audio: 2,
        trigger: { global: 'roundStart' },
        filter(event, player) {
          return player.hujia < 1;
        },
        forced: true,
        content() {
          player.changeHujia();
        },
        group: 'weihumrfz_give',
        subSkill: {
          give: {
            trigger: { player: 'phaseUseEnd' },
            filter(event, player) {
              return player.hujia > 0;
            },
            forced: true,
            content() {
              'step 0';
              player.chooseTarget([1, player.hujia + 1], '【卫护】:你可以失去至少一点护甲,令等量+1名没有护甲的其他角色获得一点护甲', function (card, player, target) {
                return target != player && target.hujia < 1;
              }).ai = function (target) {
                return get.attitude(player, target) > 2;
              };
              ('step 1');
              if (result.targets?.length) {
                player.changeHujia(Math.min(-1, -result.targets.length + 1));
                for (var i of result.targets) {
                  i.changeHujia();
                  player.line(i);
                }
              }
            },
          },
        },
      },
      //提丰 小台风
      ruiyamrfz: {
        mark: true,
        intro: {
          content(event, player) {
            return '上一个成为一唯一目标的【杀】的角色:' + (player.storage.ruiyamrfz ? get.translation(player.storage.ruiyamrfz) : '无');
          },
        },
        audio: 2,
        trigger: {
          player: 'useCard2',
        },
        filter(event, player) {
          return event.cards && event.card.name == 'sha' && event.targets && event.targets.length == 1 && event.targets[0] == player.storage.ruiyamrfz;
        }, //QQQ
        prompt: '【锐牙】:是否令此杀伤害+1？',
        check(event, player) {
          return get.attitude(player, event.targets[0]) < 2;
        }, //QQQ
        content() {
          var target = trigger.targets[0];
          target.addTempSkill('ruiyamrfz_dam');
          target.storage.ruiyamrfz_dam = {
            card: trigger.card,
          };
        },
        group: 'ruiyamrfz_mark',
        subSkill: {
          mark: {
            charlotte: true,
            silent: true,
            forced: true,
            trigger: {
              player: 'useCardToPlayered',
            },
            filter(event, player) {
              if (!event.targets || event.targets > 1) return false;
              return event.card && event.card.name == 'sha';
            },
            content() {
              player.storage.ruiyamrfz = trigger.target;
            },
          },
          dam: {
            onremove(player) {
              delete player.storage.ruiyamrfz_dam;
            },
            trigger: {
              player: 'damageBegin3',
            },
            filter(event, player) {
              var info = player.storage.ruiyamrfz_dam;
              return event.card && event.card == info.card;
            },
            silent: true,
            popup: false,
            forced: true,
            content() {
              trigger.num++;
            },
          },
        },
      },
      shouliemrfz: {
        marktext: '矢',
        intro: {
          name: '矢',
          content: 'expansion',
          markcount: 'expansion',
        },
        onremove(player, skill) {
          var cards = player.getExpansions(skill);
          if (cards.length) player.loseToDiscardpile(cards);
        },
        audio: 4,
        enable: 'phaseUse',
        filter(event, player) {
          if (player.getExpansions('shouliemrfz').length >= 3) return false;
          return (
            player.countCards('he', function (card) {
              return get.tag(card, 'damage') > 0;
            }) > 0
          );
        },
        filterCard(card) {
          return get.tag(card, 'damage');
        },
        selectCard() {
          var player = _status.event.player;
          return [1, 3 - player.getExpansions('shouliemrfz').length];
        },
        check(card) {
          return 10 - get.value(card) || card.name == 'sha';
        },
        prompt: '【狩猎】:将任意张带有伤害标签的牌置于你的武将牌上,称之为‘矢’',
        discard: false,
        lose: false,
        content() {
          player.addToExpansion(cards, player, 'giveAuto').gaintag.add('shouliemrfz');
        },
        group: ['shouliemrfz_use', 'shouliemrfz_shasha'],
        ai: {
          order: 13,
          threaten() {
            var player = _status.event.player;
            return 1.4 + player.getExpansions('shouliemrfz').length * 0.2;
          },
          result: {
            player: 1,
          },
        },
        subSkill: {
          ban: {
            charlotte: true,
          },
          use: {
            audio: 'shouliemrfz',
            enable: ['chooseToRespond', 'chooseToUse'],
            filter(event, player) {
              if (player.getExpansions('shouliemrfz').length < 1 || player.hasSkill('shouliemrfz_ban')) return false;
              return event.filterCard({ name: 'sha' }, player, event);
            },
            chooseButton: {
              dialog(event, player) {
                return ui.create.dialog('狩猎', player.getExpansions('shouliemrfz'), 'hidden');
              },
              backup(links, player) {
                return {
                  viewAs: {
                    name: 'sha',
                    nature: 'stab',
                  },
                  cards: links,
                  selectCard: -1,
                  position: 'x',
                  filterCard: (card) => lib.skill['shouliemrfz_use_backup'].cards.includes(card),
                  popname: true,
                  precontent() {
                    player.addTempSkill('shouliemrfz_ban', 'phaseEnd');
                  },
                };
              },
              prompt(links, player) {
                return '【狩猎】:将' + get.translation(links.name) + '当做一张刺【杀】使用或打出';
              },
            },
            ai: {
              order: 2.95,
              respondSha: true,
              result: {
                player: 1,
              },
              skillTagFilter(player, tag, arg) {
                if (player.getExpansions('shouliemrfz').length < 1) return false;
              },
            },
          },
          shasha: {
            markimage: 'extension/驶舰之向/image/orther/taifengmrfz.png',
            intro: {
              content(event, player) {
                return (
                  '你成为了' +
                  get.translation(
                    game.findPlayer(function (current) {
                      return current != player && current.hasSkill('shouliemrfz');
                    }),
                  ) +
                  '的猎物'
                );
              },
            },
            audio: 'shouliemrfz',
            trigger: { player: 'phaseZhunbeiBegin' },
            filter(event, player) {
              if (player.getHistory('skipped').includes('phaseUse') || player.getHistory('skipped').includes('phaseDiscard')) return false;
              return true;
            },
            check(event, player) {
              if (
                player.countCards('j', function (card) {
                  return card.name == 'lebu';
                }) > 0 &&
                player.countCards('h') + 2 > player.getHandcardLimit()
              )
                return true;
              return (
                player.getExpansions('shouliemrfz').length +
                player.countCards('h', function (card) {
                  return card.name == 'sha';
                }) >
                2
              );
            },
            prompt: '【狩猎】:是否跳过出牌阶段和弃牌阶段,选择一名其他角色,直到你的下个回合开始时,每个其他角色的结束阶段,你都可以对其使用一张【杀】？',
            content() {
              'step 0';
              player.skip('phaseUse');
              player.skip('phaseDiscard');
              player.addSkill('shouliemrfz_usesha');
              player.chooseTarget(
                '【狩猎】:请选择一名其他角色',
                function (card, player, target) {
                  return target != player;
                },
                true,
              ).ai = function (target) {
                return get.attitude(_status.event.player, target) < 0;
              };
              ('step 1');
              if (result.targets?.length) {
                var target = result.targets[0];
                player.storage.shouliemrfz_shasha = target;
                target.addMark('shouliemrfz_shasha', false);
                player.line(target);
              }
            },
            ai: {
              expose: 0.1,
            },
          },
          rem: {
            silent: true,
            charlotte: true,
            trigger: { player: 'phaseBegin' },
            content() {
              game.countPlayer(function (current) {
                if (current.hasMark('shouliemrfz_shasha')) current.removeAllmark('shouliemrfz_shasha', false);
              });
              player.removeSkill('shouliemrfz_usesha');
              delete player.storage.shouliemrfz_shasha;
            },
          },
          usesha: {
            trigger: {
              global: 'phaseJieshuBegin',
            },
            forced: true,
            filter(event, player) {
              if (event.player == player) return false;
              return event.player.isIn() && lib.filter.targetEnabled({ name: 'sha' }, player, event.player) && (player.hasSha() || _status.connectMode || player.getExpansions('shouliemrfz').length > 0);
            },
            content() {
              var target = game.findPlayer(function (current) {
                return current != player && player.storage.shouliemrfz_shasha == current;
              });
              player
                .chooseToUse(
                  function (card, player, event) {
                    if (card.name != 'sha') return false;
                    return lib.filter.filterCard.apply(this, arguments);
                  },
                  '【狩猎】:是否对' + get.translation(target) + '使用一张【杀】？',
                )
                .set('complexSelect', true)
                .set('filterTarget', function (card, player, target) {
                  if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                  return lib.filter.targetEnabled.apply(this, arguments);
                })
                .set('sourcex', target);
            },
            group: 'shouliemrfz_rem',
          },
        },
      },
      //vvan薇薇安娜
      zhanjumrfz: {
        audio: 2,
        trigger: {
          global: 'dying',
        },
        filter(event, player) {
          if (!game.checkMod({ name: 'tao' }, player, event.player, 'unchanged', 'cardSavable', player)) return false;
          return player.countCards('h') > 0 && event.player.hp <= 0;
        },
        check(event, player) {
          if (get.attitude(player, event.player) < 0) return false;
          return (
            player.countCards('h', function (card) {
              return card.name == 'tao';
            }) +
            event.player.hp <
            0
          );
        },
        prompt(event, player) {
          return '【盏菊】:你可以将所有手牌当作【桃】对' + get.translation(event.player) + '使用';
        },
        content() {
          var cards = player.getCards('h');
          trigger.player.storage.zhanjumrfz = true;
          player.useCard({ name: 'tao' }, cards, trigger.player);
        },
        group: 'zhanjumrfz_recast',
        subSkill: {
          recast: {
            silent: true,
            lastDo: true,
            trigger: { global: 'dyingAfter' },
            filter(event, player) {
              return event.player.storage.zhanjumrfz;
            },
            content() {
              'step 0';
              delete trigger.player.storage.zhanjumrfz;
              if (player.countCards('hej') == 0) event.finish();
              else {
                player.chooseCard('【盏菊】:你可以重铸一张你区域内的牌', 'hej');
              }
              ('step 1');
              if (result.cards?.length) {
                player.recast(result.cards);
              }
            },
          },
        },
      },
      zhuhuomrfz: {
        audio: 2,
        enable: 'phaseUse',
        usable: 1,
        filterCard(card, player) {
          return player.canRecast(card);
        },
        selectCard: 1,
        filter(event, player) {
          return player.countCards('he') > 0;
        },
        position: 'he',
        discard: false,
        lose: false,
        check(card) {
          return 8 - get.value(card);
        },
        content() {
          player.recast(cards);
        },
        group: 'zhuhuomrfz_draw',
        ai: {
          order: 13,
          result: {
            player: 1,
          },
        },
        subSkill: {
          reget: {
            silent: true,
            popup: false,
            lastDo: true,
            trigger: {
              global: ['phaseZhunbeiAfter', 'phaseJudgeAfter', 'phaseUseAfter', 'phaseDiscardAfter', 'phaseJieshuAfter'],
            },
            content() {
              player.addSkill('zhuhuomrfz');
              player.removeSkill('zhuhuomrfz_reget');
            },
          },
          draw: {
            forced: true,
            trigger: { player: 'loseAfter' },
            filter(event, player) {
              if (!event.cards) return false;
              return event.getParent(2).name == 'recast';
            },
            content() {
              'step 0';
              if (trigger.cards.length > 1) {
                var num = 0;
                for (var i of trigger.cards) {
                  num += get.cardNameLength(i);
                }
              } else var num = get.cardNameLength(trigger.cards[0]);
              event.num = num;
              var next = player.chooseControl('发牌', '摸牌', 'cancel2');
              next.set('prompt', '是否发动【烛火】？');
              next.set('ai', function () {
                var player = _status.event.player;
                var count = game.countPlayer(function (current) {
                  return current != player && get.attitude(current, player) > 2;
                });
                if (num == 1) return 0;
                if (count - num < 0) return 1;
                return 0;
              });
              ('step 1');
              if (result.control == 'cancel2') event.finish();
              else {
                if (result.index == 1) {
                  player.draw(Math.min(event.num, 5));
                  player.addSkill('zhuhuomrfz_reget');
                  player.removeSkill('zhuhuomrfz');
                } else {
                  var num = event.num;
                  var next = player.chooseTarget(true, '【烛火】:你可以选择至多' + num + '名角色,令其各摸一张牌', [1, num]);
                  next.ai = function (target) {
                    return get.attitude(target, player) > 2;
                  };
                }
              }
              ('step 2');
              if (result.targets?.length) {
                var targets = result.targets;
                for (var i of targets) {
                  i.draw();
                  player.line(i);
                }
              }
            },
            ai: {
              expose: 0.1,
            },
          },
        },
      },
      zhuhuo2mrfz: {
        audio: 2,
      },
      yunjiaomrfz: {
        mod: {
          aiOrder(player, card, num) {
            if (typeof card == 'object' && !get.tag(card, 'norepeat')) {
              var history = player.getAllHistory('useCard');
              if (history.length) {
                var cardx = history[history.length - 1].card;
                if (get.is.yayun(get.translation(cardx.name), get.translation(card.name))) return num + 20;
              }
            }
          },
        },
        mark: true,
        intro: {
          content(event, player) {
            var history = player.getAllHistory('useCard');
            var evt = history[history.length - 1];
            if (!evt) return '没有使用过牌';
            return '你上一张使用的牌是:' + get.translation(evt.card.name) + '(' + get.pinyin(get.translation(evt.card.name)) + ')';
          },
        },
        audio: 2,
        forced: true,
        trigger: { player: 'useCard' },
        filter(event, player) {
          var history = player.getAllHistory('useCard'),
            index = history.indexOf(event);
          if (index < 1) return false;
          var evt = history[index - 1];
          return get.is.yayun(get.translation(event.card.name), get.translation(evt.card.name)) && player.isPhaseUsing();
        },
        content() {
          var skills = player.getStockSkills(true, true);
          game.expandSkills(skills);
          var resetSkills = [];
          var suffixs = ['used', 'round', 'block', 'blocker'];
          for (var skill of skills) {
            var info = get.info(skill);
            if (typeof info.usable == 'number') {
              if (player.getStat('triggerSkill')[skill] && player.getStat('triggerSkill')[skill] >= 1) {
                delete player.getStat('triggerSkill')[skill];
                resetSkills.add(skill);
              }
              if (typeof get.skillCount(skill) == 'number' && get.skillCount(skill) >= 1) {
                delete player.getStat('skill')[skill];
                resetSkills.add(skill);
              }
            }
            if (info.round && player.storage[`${skill}_roundcount`]) {
              delete player.storage[`${skill}_roundcount`];
              resetSkills.add(skill);
            }
            if (player.awakenedSkills.includes(skill)) {
              player.restoreSkill(skill);
              resetSkills.add(skill);
            }
            for (var suffix of suffixs) {
              if (player.hasSkill(skill + '_' + suffix)) {
                player.removeSkill(skill + '_' + suffix);
                resetSkills.add(skill);
              }
            }
          }
          if (resetSkills.length) {
            var str = '';
            for (var i of resetSkills) {
              str += `【${get.translation(i)}】、`;
            }
            game.log(player, '重置了技能', '#g' + str.slice(0, -1));
          }
        },
      },
      //纯爱 纯烬艾雅法拉 我老婆涅😋
      lvmengmrfz: {
        init(player) {
          player.storage.lvmengmrfz = {
            beifeng: [],
            zhongzi: [],
            pimao: [],
          };
        },
        mark: true,
        intro: {
          content(event, player) {
            var storage = player.storage.lvmengmrfz;
            var str = '北风:' + (storage.beifeng.length ? get.translation(storage.beifeng) : '无') + '</br>种子:' + (storage.zhongzi.length ? get.translation(storage.zhongzi) : '无') + '</br>皮毛:' + (storage.pimao.length ? get.translation(storage.pimao) : '无');
            return str;
          },
        },
        audio: 4,
        forced: true,
        trigger: { global: 'roundStart' },
        content() {
          'step 0';
          if (!player.storage.lvmengmrfz)
            player.storage.lvmengmrfz = {
              beifeng: [],
              zhongzi: [],
              pimao: [],
            };
          var list = [
            ['未分配牌的类型(对话框较长,请下滑操作)', [['basic', 'trick', 'equip'], 'vcard']],
            ['北风(从牌堆中获得一张你手牌中没有的花色)', []],
            ['种子(此牌结算完毕后你可以将其交给一名其他角色)', []],
            ['皮毛(不可被其他角色响应)', []],
          ];

          var next = player.chooseToMove('【旅梦】:请分配牌的类型', true);
          next.set('list', list);
          next.set('filterMove', function (from, to, moved) {
            if (typeof to == 'number') {
              if (to == 0) return true;
            }
            return true;
          });
          next.set('processAI', function () {
            var player = _status.event.player;
            var moved = [[], [], [], []];
            var hasFriend = function (player) {
              return game.hasPlayer((current) => {
                return get.attitude(player, current) > 2 && current != player;
              });
            };
            if (!hasFriend(player)) {
              moved[1].addArray(['equip']);
              if (Math.random() < 0.5) moved[1].addArray(['trick']);
              else moved[3].addArray(['trick']);
              moved[3].addArray(['basic']);
            } else {
              moved[1].addArray(['equip']);
              if (Math.random() < 0.5) {
                moved[2].addArray(['trick']);
                moved[3].addArray(['basic']);
              } else {
                moved[2].addArray(['trick', 'basic']);
              }
            }
            return moved;
          });
          ('step 1');
          if (result.bool) {
            game.broadcastAll(
              function (moved, player) {
                var transform = function (input) {
                  return input.map((item) => {
                    if (item.length === 0) {
                      return item;
                    } else if (typeof item[0] === 'string') {
                      return item;
                    } else {
                      return item.map((subItem) => subItem[2]);
                    }
                  });
                };
                var moved = moved.slice(1);
                moved = transform(moved);
                player.storage.lvmengmrfz = {
                  beifeng: [],
                  zhongzi: [],
                  pimao: [],
                };
                var keys = Object.keys(player.storage.lvmengmrfz);
                for (var i = 0; i < moved.length; i++) {
                  for (var j = 0; j < moved[i].length; j++) {
                    player.storage.lvmengmrfz[keys[i]].add(moved[i][j]);
                  }
                }
              },
              result.moved,
              player,
            );
          }
        },
        group: ['lvmengmrfz_beifeng', 'lvmengmrfz_zhongzi', 'lvmengmrfz_pimao', 'lvmengmrfz_tag'],
        subSkill: {
          // 标签
          tag: {
            silent: true,
            charlotte: true,
            trigger: { player: ['gainEnd', 'lvmengmrfzAfter'] },
            filter(event, player) {
              return player.storage.lvmengmrfz;
            },
            content() {
              var storage = player.storage.lvmengmrfz,
                cards = trigger.name == 'gain' ? trigger.cards : player.getCards('h');
              if (trigger.name == 'lvmengmrfz') {
                for (var i of ['beifeng_lvmengmrfz', 'zhongzi_lvmengmrfz', 'pimao_lvmengmrfz']) {
                  player.removeGaintag(i);
                }
              }
              for (var key in storage) {
                for (var i of cards) {
                  if (storage[key].includes(get.type2(i))) i.addGaintag(key + '_lvmengmrfz');
                }
              }
            },
          },
          //北风
          beifeng: {
            forced: true,
            usable: 4,
            trigger: { player: 'useCardAfter' },
            filter(event, player) {
              var type = player.storage.lvmengmrfz.beifeng,
                tmp_bool = false;
              if (!type || !event.card) return false;
              for (var i = 0; i < type.length; i++) {
                if (get.type(event.card, 'trick') == type[i]) {
                  tmp_bool = true;
                  break;
                }
              }
              var cards = player.getCards('h'),
                list = [];
              for (var i of cards) {
                list.add(i.suit);
              }
              return list.length < 4 && tmp_bool;
            },
            content() {
              var cards = player.getCards('h'),
                list = [];
              for (var i of cards) {
                list.add(i.suit);
              }
              var result = lib.suit.filter((item) => !list.includes(item));
              var card = get.cardPile2((card) => {
                for (var i = 0; i < result.length; i++) {
                  return card.suit == result[i];
                }
              });
              if (card) player.gain(card, 'gain2');
              if (!trigger.audioed) {
                trigger.audioed = true;
              }
            },
          },
          //种子
          zhongzi: {
            forced: true,
            trigger: { player: 'useCardAfter' },
            filter(event, player) {
              var type = player.storage.lvmengmrfz.zhongzi,
                tmp_bool = false;
              if (!type || !event.card) return false;
              for (var i = 0; i < type.length; i++) {
                if (get.type(event.card, 'trick') == type[i]) {
                  tmp_bool = true;
                  break;
                }
              }
              return event.cards.filterInD().length && tmp_bool;
            },
            content() {
              'step 0';
              player
                .chooseTarget('【旅梦】:将' + get.translation(trigger.cards) + '交给一名其他角色', function (card, player, target) {
                  return target != player;
                })
                .set('ai', function (target) {
                  if (target.hasJudge('lebu')) return 0;
                  var att = get.attitude(_status.event.player, target);
                  if (att < 3) return 0;
                  if (target.hasSkillTag('nogain')) att /= 10;
                  if (target.hasSha() && _status.event.sha) {
                    att /= 5;
                  }
                  if (event.wuxie && target.needsToDiscard(1)) {
                    att /= 5;
                  }
                  return att / (1 + get.distance(player, target, 'absolute'));
                })
                .set('sha', trigger.cards[0].name == 'sha')
                .set('wuxie', trigger.cards[0].name == 'wuxie');
              ('step 1');
              if (result.targets?.length) {
                player.line(result.targets[0]);
                if (!trigger.audioed) {
                  trigger.audioed = true;
                }
                result.targets[0].gain(trigger.cards.filterInD(), 'gain2');
              }
            },
          },
          //皮毛
          pimao: {
            forced: true,
            trigger: { player: 'useCard' },
            filter(event, player) {
              var type = player.storage.lvmengmrfz.pimao,
                tmp_bool = false;
              if (!type || !event.card) return false;
              for (var i = 0; i < type.length; i++) {
                if (get.type(event.card, 'trick') == type[i]) {
                  tmp_bool = true;
                  break;
                }
              }
              return tmp_bool;
            },
            content() {
              if (!trigger.audioed) {
                trigger.audioed = true;
              }
              trigger.directHit.addArray(
                game.filterPlayer(function (current) {
                  return current != player;
                }),
              );
            },
          },
        },
        ai: {
          threaten: 1.6,
        },
      },
      rechenmrfz: {
        mod: {
          aiOrder(player, card, num) {
            if (typeof card == 'object' && player.isPhaseUsing()) {
              var evt = player.getLastUsed();
              if (evt && evt.card && evt.card.suit && evt.card.suit == card.suit) {
                return num + 10;
              }
            }
          },
        },
        mark: true,
        intro: {
          content(event, player) {
            var evt = player.getLastUsed();
            if (!player.isPhaseUsing()) return '不是你的出牌阶段';
            if (!evt || !evt.card) return '本回合你未使用过牌';
            return '上一张你使用的牌的花色是:' + get.translation(evt.card.suit);
          },
        },
        audio: 2,
        trigger: { player: 'useCard' },
        forced: true,
        firstDo: true,
        filter(event, player) {
          var evt = player.getLastUsed(1);
          return evt && evt.card && event.card.suit == evt.card.suit && !event.audioed;
        },
        content() {
          trigger.audioed = true;
        },
        mod: {
          cardUsable(card, player) {
            var evt = player.getLastUsed();
            if (evt && evt.card && card.suit == evt.card.suit) return Infinity;
          },
          targetInRange(card, player, target, now) {
            var evt = player.getLastUsed();
            if (evt && evt.card && card.suit == evt.card.suit) return true;
          },
        },
        group: 'rechenmrfz_del',
        subSkill: {
          del: {
            silent: true,
            charlotte: true,
            forced: true,
            trigger: { player: 'phaseUseEnd' },
            content() {
              delete player.storage.rechenmrfz;
            },
          },
        },
      },
      //塑心 阿尔图罗 2226
      qinmingmrfz: {
        audio: 2,
        usable: 1,
        enable: 'phaseUse',
        filter(event, player) {
          return game.hasPlayer((current) => {
            return current != player && current.countCards('h') > 0;
          });
        },
        filterTarget(card, player, target) {
          return target != player && target.countCards('h') > 0;
        },
        selectTarget: 1,
        content() {
          'step 0';
          var tmp_cards = target.getCards('h');
          var cards = [];
          for (var i of tmp_cards) {
            if (target.canRecast(i)) cards.push(i);
          }
          target.recast(cards);
          ('step 1');
          var cards = target.getCards('h');
          event.cards = canCards;
          target.showCards(cards, `【琴鸣】:${get.translation(target)}的手牌`);
          ('step 2');
          var cards = target.getCards('h');
          var canCards = [];
          for (var i of cards) {
            if (target.canUseToAnyone(i)) canCards.push(i);
          }
          event.cards = canCards;
          ('step 3');
          if (event.cards.length) {
            if (target.hasCard(event.cards[0].name, 'h')) target.chooseUseTarget(true, event.cards[0], false);
            event.goto(2);
          }
        },
        ai: {
          order: 8,
          expose: 0.1,
          result: {
            target(player, target) {
              var lowAtt =
                game.hasPlayer((current) => {
                  return current != player && current.inRange(target) && get.attitude(player, current) < 0;
                }) && get.attitude(player, target) < 0;
              var hightAtt =
                game.hasPlayer((current) => {
                  return current != player && current.inRange(target) && get.attitude(player, current) < 0;
                }) && get.attitude(player, target) > 0;
              if (lowAtt) return -1;
              if (hightAtt) return 1;
              return 0;
            },
          },
        },
      },
      kongwomrfz: {
        audio: 2,
        forced: true,
        trigger: { player: 'drawBegin' },
        filter(event, player) {
          return event.num > 0;
        },
        content() {
          var num = trigger.num;
          trigger.cancel();
          var cards = [],
            banCards = [];
          var loseCards = player.getHistory('lose', (evt) => {
            return evt.player == player;
          });
          for (var i of loseCards) {
            if (!i.cards) continue;
            banCards.push(i.cards);
          }
          while (cards.length < num) {
            var card = get.discardPile((card) => {
              return !cards.includes(card) && !banCards.includes(card);
            });
            if (card) cards.push(card);
            else break;
          }
          player.gain(cards, 'gain2');
        },
        group: ['kongwomrfz_get', 'kongwomrfz_clear'],
        subSkill: {
          clear: {
            silent: true,
            charlotte: true,
            forced: true,
            trigger: { player: 'phaseUseEnd' },
            content() {
              if (player.storage.kongwomrfz_get) delete player.storage.kongwomrfz_get;
            },
          },
          get: {
            audio: 'kongwomrfz',
            forced: true,
            trigger: { global: 'loseAfter' },
            filter(event, player) {
              if (event.player == player || !player.isPhaseUsing()) return false;
              if (event.parent.name != 'useCard') return false;
              var cards = event.cards2.slice(0);
              if (Array.isArray(cards))
                for (var i of cards) {
                  var type = get.type2(i);
                  if (get.position(i, true) == 'o' && type != 'equip') {
                    return true;
                  }
                }
              return true;
            },
            content() {
              'step 0';
              if (!player.storage.kongwomrfz_get) player.storage.kongwomrfz_get = [];
              ('step 1');
              var cards = [];
              for (var i = 0; i < trigger.cards2.length; i++) {
                var card = trigger.cards2[i];
                var type = get.type2(card);
                var name = player.storage.kongwomrfz_get,
                  name2 = card.name;
                if (get.position(card, true) == 'o' && type != 'equip' && !name.includes(name2)) {
                  cards.push(card);
                }
              }
              if (cards.length)
                player.chooseButton(true, ['【空我】:请选择你要获得的牌', cards], [1, Infinity]).set('ai', (button) => {
                  return cards;
                });
              else event.finish();
              ('step 2');
              if (result.links?.length) {
                var cards = result.links;
                for (var i of cards) {
                  var name = i.name;
                  if (!player.storage.kongwomrfz_get.includes(name)) player.storage.kongwomrfz_get.add(name);
                }
                player.gain(cards, 'gain2');
              }
            },
          },
        },
      },
      //赫德雷
      zhengrongmrfz: {
        init(player) {
          player.storage.zhengrongmrfz = {
            discard: false,
            losedraw: false,
            maxhp: false,
          };
        },
        audio: 2,
        trigger: {
          global: 'damageEnd',
        },
        filter(event, player) {
          var list = [],
            storage = player.storage.zhengrongmrfz;
          if (player.countCards('h') > 0 && storage.discard == false) list.push('弃牌');
          if (storage.losedraw == false) list.push('摸牌阶段摸牌数-1');
          if (storage.maxhp == false) list.push('失去体力上限');
          if (list.length == 0) return false;
          if (event.player === undefined) return false;
          if (!event.player.isAlive()) return false;
          return event.player == player || get.distance(player, event.player) <= 1;
        },
        prompt(event, player) {
          if (event.player == player) return '【征戎】:是否选择一项并回复一点体力？';
          return '【征戎】:是否选择一项并令' + get.translation(event.player) + '回复一点体力？';
        },
        check(event, player) {
          if (get.attitude(event.player, player) < 0) return false;
          return true;
        },
        content() {
          'step 0';
          var list = [],
            storage = player.storage.zhengrongmrfz;
          if (player.countCards('h') > 0 && storage.discard == false) list.push('弃牌');
          if (storage.losedraw == false) list.push('摸牌阶段摸牌数-1');
          if (storage.maxhp == false) list.push('失去体力上限');
          player
            .chooseControl(list)
            .set('ai', function () {
              return 0;
            })
            .set('prompt', '【征戎】:请选择一项');
          ('step 1');
          if (result.control) {
            var control = result.control;
            game.log(control);
            if (control == '弃牌') {
              player.chooseToDiscard('he', true, '【征戎】:请弃置一张牌');
              player.storage.zhengrongmrfz.discard = true;
            }
            if (control == '摸牌阶段摸牌数-1') {
              player.addMark('zhengrongmrfz_losedraw', false);
              player.addTempSkill('zhengrongmrfz_losedraw', {
                player: 'phaseDrawAfter',
              });
              player.storage.zhengrongmrfz.losedraw = true;
            }
            if (control == '失去体力上限') {
              player.loseMaxHp();
              player.storage.zhengrongmrfz.maxhp = true;
            }
            trigger.player.recover();
          }
        },
        group: ['zhengrongmrfz_rec', 'zhengrongmrfz_draw'],
        subSkill: {
          draw: {
            audio: 2,
            firstDo: true,
            trigger: { player: 'phaseBegin' },
            filter(event, player) {
              var allGone = Object.values(player.storage.zhengrongmrfz).every(function (value) {
                return value === true;
              });
              if (player.storage.zhengrongmrfz === undefined) return false;
              return allGone;
            },
            content() {
              player.drawTo(player.maxHp);
            },
          },
          rec: {
            silent: true,
            charlotte: true,
            lastDo: true,
            trigger: { player: 'phaseBegin' },
            content() {
              player.storage.zhengrongmrfz = {
                discard: false,
                losedraw: false,
                maxhp: false,
              };
            },
          },
          losedraw: {
            silent: true,
            charlotte: true,
            lastDo: true,
            intro: {
              content: '下个摸牌阶段摸牌数-#',
            },
            trigger: { player: 'phaseDrawBegin2' },
            filter(event, player) {
              return event.num > 0;
            },
            content() {
              trigger.num -= player.countMark('zhengrongmrfz_losedraw');
            },
          },
        },
        ai: {
          expose: 0.1,
          threaten: 0.8,
        },
      },
      siyanmrfz: {
        audio: 2,
        trigger: { player: 'useCard2' },
        filter(event, player) {
          if (event.targets.length > 1) return false;
          if (event.targets[0] == player) return false;
          if (!event.card || event.card.name != 'sha') return false;
          var history = event.targets[0].getHistory('damage');
          for (var i = 0; i < history.length; i++) {
            if (!history[i].source) continue;
            if (history[i].source == player) return true;
          }
          var seatNum = event.targets[0].seatNum;
          if (seatNum in player.storage.siyanmrfz_tol && player.storage.siyanmrfz_tol[seatNum] === true) return true;
        },
        check(event, player) {
          if (get.attitude(event.targets[0], player) > 0) return false;
          return player.hp > 1;
        },
        prompt(event, player) {
          return '【死烟】:是否失去一点体力并令' + get.translation(event.targets[0]) + '选择一项？';
        },
        content() {
          'step 0';
          player.addTempSkill('siyanmrfz_rec', {
            player: 'damageAfter',
          });
          player.storage.siyanmrfz_rec = {
            card: trigger.card,
          };
          var target = trigger.targets[0],
            list = ['无法响应' + get.translation(player) + '使用的【杀】'];
          if (target.countCards('h') > 1) list.push('弃置两张手牌');
          target.loseHp();
          player.loseHp();
          if (list.length < 2 && target.isAlive()) {
            trigger.directHit.addArray(
              game.filterPlayer(function (current) {
                return current == target;
              }),
            );
            game.log(target, '选择了无法响应', player, '使用的【杀】');
            event.finish();
          } else if (target.isAlive()) {
            target
              .chooseControl()
              .set('choiceList', list)
              .set('prompt', '【死烟】:请选择一项')
              .set('ai', function () {
                var player = _status.event.player;
                if (player.countCards('h') < 3) return 0;
                if (!player.hasShan()) return 0;
                if (
                  player.hp == 1 &&
                  player.countCards('h', (card) => {
                    return card.name == 'tao' || card.name == 'jiu';
                  }) > 0 &&
                  player.countCards('h') < 3
                )
                  return 0;
                return 1;
              });
          } else event.finish();
          ('step 1');
          if (result.control) {
            var target = trigger.targets[0];
            if (result.index == 1) {
              game.log(get.translation(target), '选择了弃置两张手牌');
              target.chooseToDiscard('h', true, 2);
            } else {
              trigger.directHit.addArray(
                game.filterPlayer(function (current) {
                  return current == target;
                }),
              );
              game.log(target, '选择了无法响应', player, '使用的【杀】');
            }
          }
        },
        group: ['siyanmrfz_tol', 'siyanmrfz_clear'],
        subSkill: {
          rec: {
            onremove(player) {
              delete player.storage.siyanmrfz_rec;
            },
            trigger: {
              source: 'damageEnd',
            },
            filter(event, player) {
              var info = player.storage.siyanmrfz_rec;
              return event.card && event.card == info.card;
            },
            silent: true,
            popup: false,
            forced: true,
            charlotte: true,
            firstDo: true,
            content() {
              if (trigger.card.suit == 'diamond') player.recover();
            },
          },
          clear: {
            silent: true,
            charlotte: true,
            firstDo: true,
            trigger: { global: 'phaseBegin' },
            filter(event, player) {
              return event.player != player;
            },
            content() {
              var seatNum = trigger.player.seatNum;
              player.storage.siyanmrfz_tol[seatNum] = false;
            },
          },
          tol: {
            init(player) {
              player.storage.siyanmrfz_tol = {};
              for (var i of game.players) {
                if (i == player) continue;
                player.storage.siyanmrfz_tol[i + 1] = false;
              }
            },
            silent: true,
            charlotte: true,
            lastDo: true,
            trigger: { player: 'damageEnd' },
            filter(event, player) {
              return event.source != undefined && player.isAlive();
            },
            content() {
              var seatNum = trigger.source.seatNum;
              if (seatNum in player.storage.siyanmrfz_tol && player.storage.siyanmrfz_tol[seatNum] === false) {
                player.storage.siyanmrfz_tol[seatNum] = true;
              }
            },
          },
        },
        ai: {
          directHit_ai: true,
          skillTagFilter(player, tag, arg) {
            var seatNum = arg.target.seatNum;
            if ((!seatNum) in player.storage.siyanmrfz_tol || player.storage.siyanmrfz_tol[seatNum] === false) return false;
            if (arg.card.name != 'sha' || arg.target.countCards('h', 'shan') > 1) return false;
          },
        },
      },
      //止颂
      kuxiumrfz: {
        mod: {
          cardUsable(card, player, num) {
            if (card.name == 'sha') return (num += player.getCards('j').length);
          },
        },
        audio: 2,
        enable: 'phaseUse',
        filter(event, player) {
          var cards = [];
          if (player.countCards('he') < 1) return false;
          for (var i of lib.inpile) {
            if (get.type(i) == 'delay') cards.push(i);
          }
          for (var name of cards) {
            if (player.canAddJudge({ name: name })) return true;
          }
          return false;
        },
        chooseButton: {
          dialog(event, player) {
            var cards = [];
            for (var i of lib.inpile) {
              if (get.type(i) == 'delay') cards.push(i);
            }
            var vcards = [];
            for (var name of cards) {
              var card = { name: name };
              if (player.canAddJudge({ name: name })) {
                vcards.push(['延时锦囊', '', name]);
              }
            }
            var dialog = ui.create.dialog('苦修', [vcards, 'vcard'], 'hidden');
            return dialog;
          },
          check(button) {
            var name = button.link[2];
            switch (name) {
              case 'lebu':
                return 1;
              case 'bingliang':
                return 2;
              case 'shandian':
                return 3;
              default:
                return 1.5;
            }
          },
          backup(links, player) {
            return {
              audio: 'kuxiumrfz',
              filterCard(card, player, event) {
                return player.canAddJudge({
                  name: links[0][2],
                  cards: [card],
                });
              },
              selectTarget: -1,
              filterTarget(card, player, target) {
                return player == target;
              },
              viewAs: {
                name: links[0][2],
              },
              position: 'he',
              popname: true,
              onuse(links, player) {
                if (!links.cards) return;
                var next = game.createEvent('kuxiumrfz_draw', false, _status.event.parent);
                next.cards = links.cards;
                next.player = player;
                next.setContent(function () {
                  if (player.getCards('j').filter((i) => cards.includes(i)).length < 1) return;
                  var num = player.getCards('j').length;
                  player.draw(num);
                });
              },
              ai: {
                result: {
                  target(player, target) {
                    return 1 + player.countCards('j') + player.hp - 4;
                  },
                },
              },
            };
          },
          prompt(links, player) {
            return '【苦修】:请选择一张牌将其当做一张【' + get.translation(links[0][2]) + '】对自己使用';
          },
        },
        ai: {
          order: 6,
          result: {
            player: 1,
          },
        },
      },
      lirenmrfz: {
        audio: 2,
        trigger: { player: 'phaseZhunbeiBegin' },
        filter(event, player) {
          return player.countCards('j') > 0;
        },
        check(event, player) {
          var cards = player.getCards('j');
          if (cards.length == 1 && cards[0] == 'shandian') return false;
          return player.hp > 1;
        },
        content() {
          var num = player.getCards('j').length;
          player.discardPlayerCard(player, num, 'j', true);
          player.loseHp();
        },
      },
      //锏
      weiyamrfz: {
        audio: 2,
        trigger: { source: 'damageEnd' },
        filter(event, player) {
          return event.player != player && !event.player.hasSkill('weiyamrfz_ban') && event.player.isAlive();
        },
        prompt(event, player) {
          return '【威压】:是否令' + get.translation(event.player) + '下个出牌阶段不能使用带有伤害类标签的牌？';
        },
        check(event, player) {
          return get.attitude(event.player, player) < 0;
        },
        content() {
          trigger.player.addTempSkill('weiyamrfz_ban', {
            player: 'phaseUseEnd',
          });
        },
        subSkill: {
          ban: {
            charlotte: true,
            mark: true,
            marktext: '战栗',
            intro: {
              content: '出牌阶段不能使用带有伤害类标签的牌',
            },
            mod: {
              cardEnabled(card, player) {
                if (get.tag(card, 'damage') > 0 && player.isPhaseUsing()) return false;
              },
            },
          },
        },
        ai: {
          expose: 0.2,
          threaten: 1.1,
        },
      },
      zhiwumrfz: {
        mod: {
          cardname(card, player) {
            if (card.cardnameCheck) return card.name;
            card.cardnameCheck = true;
            let result;
            if (get.type(card) == 'trick') result = 'sha';
            else result = card.name;
            delete card.cardnameCheck;
            return result;
          },
        },
        audio: 2,
        forced: true,
        trigger: { player: 'useCardToTargeted' },
        filter(event, player) {
          if (event.targets.length == 0) return false;
          return event.card.name == 'sha' && get.color(event.card) != undefined;
        },
        content() {
          var targets = trigger.targets;
          for (var i = 0; i < targets.length; i++) {
            if (targets[i].hasSkill('zhiwumrfz_ban')) continue;
            targets[i].addTempSkill('zhiwumrfz_ban');
            targets[i].storage.zhiwumrfz_ban = {
              player: player,
              color: get.color(trigger.card),
            };
            player.line(targets[i]);
          }
        },
        group: 'zhiwumrfz_count',
        subSkill: {
          count: {
            forced: true,
            trigger: { player: 'useCard1' },
            filter(event, player) {
              if (!player.isPhaseUsing()) return false;
              if (!event.card || event.card.name != 'sha') return false;
              if (event.addCount === false) return false;
              return event.card.cards.length > 1 || (event.card.cards.length == 1 && event.cards[0].name != event.card.name);
            },
            content() {
              trigger.addCount = false;
              if (player.stat[player.stat.length - 1].card.sha > 0) {
                player.stat[player.stat.length - 1].card.sha--;
              }
            },
          },
          ban: {
            mod: {
              cardEnabled(card, player) {
                if (get.color(card) == player.storage.zhiwumrfz_ban.color) return false;
              },
            },
            silent: true,
            charlotte: true,
            trigger: { global: 'useCardAfter' },
            filter(event, player) {
              return event.card.name == 'sha' && event.player == player.storage.zhiwumrfz_ban.player;
            },
            content() {
              delete player.storage.zhiwumrfz_ban;
              player.removeSkill('zhiwumrfz_ban');
            },
          },
        },
      },
      //莱伊
      shaobanmrfz: {
        mod: {
          inRange(from, to) {
            if (
              to.hasCard((card) => {
                return card.name == 'shadishoumrfz';
              }, 'e')
            )
              return true;
          },
        },
        audio: 2,
        enable: 'phaseUse',
        usable: 1,
        derivation: ['shadishoumrfz'],
        filter(event, player) {
          return (
            player.countCards('he') > 0 &&
            !game.hasPlayer((current) => {
              return current.hasCard((card) => {
                return card.name == 'shadishoumrfz';
              }, 'e');
            }) &&
            game.hasPlayer((current) => {
              return current != player && !current.isDisabled(2);
            })
          );
        },
        filterCard: true,
        filterTarget(card, player, target) {
          return target != player && !target.isDisabled(2);
        },
        check(card) {
          return 6 - get.value(card);
        },
        content() {
          var card = game.createCard('shadishoumrfz', 'heart', 13);
          target.$gain2(card);
          target.equip(card);
        },
        ai: {
          order: 5,
          result: {
            target: -1,
          },
        },
        group: 'shaobanmrfz_dam',
        subSkill: {
          ban: {
            charlotte: true,
          },
          dam: {
            forced: true,
            trigger: { source: 'damageBegin' },
            filter(event, player) {
              if (player.hasSkill('shaobanmrfz_ban')) return false;
              return (
                event.player != player &&
                event.player.hasCard((card) => {
                  return card.name == 'shadishoumrfz';
                }, 'e')
              );
            },
            content() {
              trigger.num++;
              player.addTempSkill('shaobanmrfz_ban', {
                global: 'phaseEnd',
              });
            },
          },
        },
      },
      tankuangmrfz: {
        mark: true,
        intro: {
          content: '剩余#次',
        },
        audio: 2,
        trigger: { player: 'useCardAfter' },
        filter(event, player) {
          return player.countMark('tankuangmrfz') > 0;
        },
        check(event, player) {
          if (player.hp < 2) return Math.random() > 0.4;
          return true;
        },
        content() {
          var card = game.cardsGotoOrdering(get.cards(1)).cards[0],
            num = 0;
          player.showCards(card, get.translation(player) + '展示了牌堆顶一张牌');
          if (get.color(card) == get.color(trigger.card)) num++;
          if (get.type(card, 'trick') == get.type(trigger.card, 'trick')) num++;
          if (card.number >= trigger.card.number) num++;
          if (num > 0) {
            player.draw(num);
            if (num == 3) player.recoverTo(player.maxHp);
          } else {
            player.loseHp();
            player.removeSkill('tankuangmrfz');
            player.addTempSkill('tankuangmrfz_re3', {
              global: 'phaseBegin',
            });
          }
          player.removeMark('tankuangmrfz', false);
        },
        group: ['tankuangmrfz_re', 'tankuangmrfz_re2'],
        subSkill: {
          re: {
            charlotte: true,
            silent: true,
            trigger: { global: 'phaseBegin' },
            content() {
              var num = Math.max(2, player.getNumberInRange());
              player.removeAllmark('tankuangmrfz', false);
              player.addMark('tankuangmrfz', num, false);
            },
          },
          re2: {
            init(player) {
              player.storage.tankuangmrfz_re2 = player.getNumberInRange();
            },
            charlotte: true,
            silent: true,
            trigger: {
              player: ['loseAfter', 'changeHp', 'gainMaxHpAfter', 'loseMaxHpAfter'],
              global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
            },
            filter(event, player) {
              return player.storage.tankuangmrfz_re2 - Math.max(2, player.getNumberInRange()) != 0;
            },
            content() {
              if (!player.storage.tankuangmrfz_re2) player.storage.tankuangmrfz_re2 = 0;
              var now = Math.max(2, player.getNumberInRange());
              var last = player.storage.tankuangmrfz_re2;
              var num = now - last;
              if (num > 0) {
                player.addMark('tankuangmrfz', num, false);
              } else player.removeMark('tankuangmrfz', Math.abs(num), false);
              player.storage.tankuangmrfz_re2 = now;
            },
          },
          re3: {
            charlotte: true,
            silent: true,
            trigger: { global: 'phaseEnd' },
            content() {
              player.addSkill('tankuangmrfz');
            },
          },
        },
      },
      //黍
      kenyemrfz: {
        init(player) {
          player.storage.kenyemrfz = [];
        },
        marktext: '黍',
        intro: {
          content: 'expansion',
          markcount: 'expansion',
        },
        onremove(player, skill) {
          var cards = player.getExpansions(skill);
          if (cards.length) player.loseToDiscardpile(cards);
        },
        audio: 2,
        trigger: { global: 'useCard' },
        filter(event, player) {
          var bool = false,
            type = get.type2(event.card);
          for (var i of ['basic', 'trick', 'equip']) {
            if (
              type == i &&
              event.player
                .getHistory('useCard', (evt) => {
                  return get.type2(evt.card) == i;
                })
                .indexOf(event) == 0
            ) {
              bool = true;
              break;
            }
          }
          if (event.cards.length < 1) return false;
          if (event.targets.length < 1) return false;
          return event.cards && event.cards.filterInD().length && bool;
        },
        prompt(event, player) {
          return `【垦野】:是否将${get.translation(event.cards)}置于${get.translation(event.player)}的武将牌上?`;
        },
        prompt2() {
          return get.skillInfoTranslation('kenyemrfz').replace(/<\/br>[\s\S]*/, '');
        },
        check(event, player) {
          if (event.card.name == 'tao' || get.attitude(event.player, player) < 0) return false;
          var num = event.player.getExpansions('kenyemrfz').length - 1;
          return get.value({ name: 'wuzhong' }) - get.value(event.card) - num > 0 || (get.value({ name: 'tao' }) - get.value(event.card) - num > 0 < 0 && event.player.isDamaged());
        },
        content() {
          var target = trigger.player;
          if (!player.storage.kenyemrfz) player.storage.kenyemrfz = [];
          if (!player.storage.kenyemrfz.includes(target)) player.storage.kenyemrfz.add(target);
          target.addToExpansion(trigger.cards, target, 'give').gaintag.add('kenyemrfz');
          trigger.targets.length = 0;
          trigger.all_excluded = true;
        },
        global: 'kenyemrfz_use',
        subSkill: {
          use: {
            trigger: { player: 'phaseEnd' },
            charlotte: true,
            forced: true,
            filter(event, player) {
              if (player.getExpansions('kenyemrfz').length < 1) return false;
              return player.canUse('wuzhong', player) || player.canUse('tao', player);
            },
            content() {
              'step 0';
              if (player.getExpansions('kenyemrfz').length) {
                var list = [];
                if (player.canUseToAnyone('tao')) list.add('tao');
                if (player.canUseToAnyone('wuzhong')) list.add('wuzhong');
                if (list.length == 1) {
                  player.useCard({ name: list[0] }, [player.getExpansions('kenyemrfz')[0]], player);
                } else {
                  event.list = list;
                  event.goto(2);
                }
              } else event.finish();
              ('step 1');
              if (player.getExpansions('kenyemrfz').length) {
                event.goto(0);
              } else event.finish();
              ('step 2');
              if (player.getExpansions('kenyemrfz').length) {
                player.chooseBool('【垦野】:选择‘确定’使用【桃】,选择‘取消’使用【无中生有】').set('ai', function () {
                  var player = _status.event.player;
                  if (player.hp < 3) return 0;
                  return [0, 1].randomGet();
                });
              } else event.finish();
              ('step 3');
              if (result.bool) {
                player.useCard({ name: 'tao' }, [player.getExpansions('kenyemrfz')[0]], player);
              } else player.useCard({ name: 'wuzhong' }, [player.getExpansions('kenyemrfz')[0]], player);
              event.goto(0);
            },
          },
        },
      },
      heyingmrfz: {
        audio: 2,
        trigger: { global: 'gainAfter' },
        filter(event, player) {
          var evt = event.getParent('phaseDraw');
          if (evt && evt.player == event.player) return false;
          if (!event.cards || event.cards.length < 2) return false;
          if (event.getParent(1).name != 'draw') return false;
          return event.player.canUseToAnyone('wugu');
        },
        usable: 1,
        forced: true,
        content() {
          'step 0';
          var target = trigger.player,
            cards = trigger.cards,
            type = [];
          for (var i of cards) {
            if (type.includes(get.type2(i))) continue;
            type.add(get.type2(i));
          }
          event.type = type;
          if (target == player) {
            player
              .chooseTarget(`【禾盈】:你可以将${get.translation(trigger.cards)}当做至多指定${get.cnNumber(type.length)}角色且结算${get.cnNumber(type.length)}次的【五谷丰登】使用`)
              .set('selectTarget', [1, type.length])
              .set('filterTarget', function (card, player, target) {
                return player.canUse('wugu', target);
              })
              .set('prompt2', get.skillInfoTranslation('heyingmrfz').replace(/<\/br>[\s\S]*/, ''))
              .set('ai', function (target) {
                var player = _status.event.player,
                  cards = _status.event.cards,
                  num = _status.event.num;
                if (cards.length >= num * 2) return false;
                if (get.value(cards) > 8) return false;
                return get.effect(target, { name: 'wugu' }, player, player);
              })
              .set('cards', trigger.cards)
              .set('num', event.type.length);
          } else event.goto(2);
          ('step 1');
          if (result.targets?.length) {
            trigger.player
              .when('useCard')
              .filter((event, player) => {
                return event.card && event.card.name == 'wugu' && event.card.storage.heyingmrfz == true;
              })
              .then(() => {
                trigger.effectCount = type.length;
              })
              // .emb({ firstDo: true })
              .vars({ type: event.type });
            trigger.player.useCard({ name: 'wugu', storage: { heyingmrfz: true } }, trigger.cards, result.targets);
            event.finish();
          } else {
            player.getStat('triggerSkill').heyingmrfz--;
            event.finish();
          }
          ('step 2');
          player
            .chooseBool(`【禾盈】:是否令${get.translation(trigger.player)}选择是否将此次摸的牌当做五谷丰登使用？`)
            .set('ai', function () {
              var player = _status.event.player,
                target = _status.event.target;
              return get.attitude(target, player) > 0;
            })
            .set('prompt2', get.skillInfoTranslation('heyingmrfz').replace(/<\/br>[\s\S]*/, ''))
            .set('target', trigger.player);
          ('step 3');
          if (result.bool) {
            trigger.player
              .chooseTarget(`【禾盈】:你可以将${get.translation(trigger.cards)}当做至多指定${get.cnNumber(event.type.length)}角色且结算${get.cnNumber(event.type.length)}次的【五谷丰登】使用`)
              .set('selectTarget', [1, event.type.length])
              .set('filterTarget', function (card, player, target) {
                return player.canUse('wugu', target);
              })
              .set('prompt2', get.skillInfoTranslation('heyingmrfz').replace(/<\/br>[\s\S]*/, ''))
              .set('ai', function (target) {
                var player = _status.event.playerx,
                  cards = _status.event.cards,
                  num = _status.event.num;
                if (cards.length >= num * 2) return false;
                if (get.value(cards) > 8) return false;
                return get.effect(target, { name: 'wugu' }, player, player);
              })
              .set('cards', trigger.cards)
              .set('playerx', trigger.player)
              .set('num', event.type.length);
          } else {
            player.getStat('triggerSkill').heyingmrfz--;
            event.finish();
          }
          ('step 4');
          if (result.targets?.length) {
            trigger.player
              .when('useCard')
              .filter((event, player) => {
                return event.card && event.card.name == 'wugu' && event.card.storage.heyingmrfz == true;
              })
              .then(() => {
                trigger.effectCount = type.length;
              })
              // .emb({ firstDo: true })
              .vars({ type: event.type });
            trigger.player.useCard({ name: 'wugu', storage: { heyingmrfz: true } }, trigger.cards, result.targets);
          } else player.getStat('triggerSkill').heyingmrfz--;
        },
      },
      rancuimrfz: {
        derivation: 'liangtianmrfz',
        audio: 2,
        trigger: {
          player: 'die',
        },
        forced: true,
        forceDie: true,
        content() {
          var list = player.storage.kenyemrfz;
          for (var i of game.players) {
            if (i == player || !list.includes(i)) continue;
            i.addSkill('liangtianmrfz');
            i.line('liangtianmrfz');
          }
        },
      },
      liangtianmrfz: {
        audio: 2,
        forced: true,
        trigger: { player: 'drawAfter' },
        filter(event, player) {
          if (player.hasSkill('liangtianmrfz_ban')) return false;
          return event.getParent(2).name != 'liangtianmrfz';
        },
        content() {
          var list = ['phaseZhunbei', 'phaseJudge', 'phaseDraw', 'phaseUse', 'phaseDiscard', 'phaseJieshu'],
            phase;
          for (var i of list) {
            var evt = trigger.getParent(i).name;
            if (evt == i) {
              phase = i;
              break;
            }
          }
          var phase = phase + 'After';
          player.draw();
          player.addTempSkill('liangtianmrfz_ban', { global: phase });
        },
        subSkill: {
          ban: {
            charlotte: true,
          },
        },
      },
      //新斥罪
      newzhidianmrfz: {
        getSkillsList(event, player) {
          var list = [];
          var listm = [];
          var listv = [];
          if (player.name1 != undefined) listm = lib.character[player.name1][3];
          else listm = lib.character[player.name][3];
          if (player.name2 != undefined) listv = lib.character[player.name2][3];
          listm = listm.concat(listv);
          var func = function (skill) {
            var info = get.info(skill);
            if (!info || info.charlotte) return false;
            return true;
          };
          for (var i = 0; i < listm.length; i++) {
            if (func(listm[i])) list.add(listm[i]);
          }
          if (player.disabledSkills) {
            for (var key in player.disabledSkills) {
              list.remove(key);
            }
          }
          return list;
        },
        init(player, skill) {
          player.storage[skill] = [];
        },
        audio: 'zhidianmrfz',
        enable: 'phaseUse',
        usable: 999,
        filter(event, player) {
          return player.countCards('he') > 0;
        },
        filterTarget(card, player, target) {
          return target != player && !player.storage.newzhidianmrfz.includes(target);
        },
        check(card) {
          return 7 - get.value(card);
        },
        position: 'he',
        filterCard: true,
        delay: false,
        lose: false,
        discard: false,
        async content(event, trigger, player) {
          let card = event.cards,
            target = event.target;
          player.give(card, target);
          let list = [],
            list2 = [];
          if (target.countCards('he') > 1) {
            list.add(`弃置三张牌,${get.translation(player)}获得其中一张牌`);
            list2.add('选项一');
          } else list.add(`<span style="opacity:0.5">弃置三张牌,${get.translation(player)}获得其中一张牌(不可选:牌数少于2)</span>`);
          list.add(`受到一点伤害且令${get.translation(player)}选择让你一个技能失效`);
          list2.add('选项二');
          if (!target.isLinked()) {
            list.add(`横置武将牌,${get.translation(player)}本回合不能再对你使用此技能`);
            list2.add('选项三');
          } else list.add(`<span style="opacity:0.5">横置武将牌,${get.translation(player)}本回合不能再对你使用此技能(不可选:已被横置)</span>`);
          var { control } = await target
            .chooseControl(list2)
            .set('choiceList', list)
            .set('ai', function () {
              var player = _status.event.target,
                list = _status.event.list,
                hs = player.getCards('he', (card) => {
                  return get.value(card) < 8;
                });
              if (player.hp < 2) list.remove('选项二');
              if (player.countCards('he') < 4 || hs.length < 3) list.remove('选项一');
              if (list.length == 0) list.push('选项二');
              return list[0];
            })
            .set('target', event.target)
            .set('list', list2)
            .forResult();
          if (!control) return;
          switch (control) {
            case '选项一':
              const { cards } = await target.chooseToDiscard(true, 'he', 3, '请弃置三张牌').forResult();
              if (!cards) return;
              for (var i of cards) {
                if (get.position(i) != 'd') cards.remove(i);
              }
              if (cards.length == 0) return;
              const links = cards.length == 1 ? cards : (await player.chooseCardButton(cards, '【执典】:请选择获得一张牌', true, 1).forResult()).links;
              player.gain(links[0], 'gain2');
              break;
            case '选项二':
              let skillList = lib.skill.newzhidianmrfz.getSkillsList(event, target);
              if (skillList.length) {
                var { control } = await player
                  .chooseControl(skillList)
                  .set('prompt', `选择${get.translation(target)}武将牌上的一个技能并令其失效`)
                  .forResult();
                target.disableSkill('newzhidianmrfz_disable', control);
                target.addTempSkill('newzhidianmrfz_disable', {
                  player: 'phaseAfter',
                });
                game.log(player, '选择了', target, '的技能', `#g【${get.translation(control)}】`);
              }
              target.damage();
              break;
            case '选项三':
              target.link(true);
              if (!player.storage.newzhidianmrfz) player.storage.newzhidianmrfz = [];
              player.storage.newzhidianmrfz.add(target);
              break;
          }
        },
        group: ['newzhidianmrfz_count', 'newzhidianmrfz_clear'],
        ai: {
          threaten: 1.2,
          order: 8,
          result: {
            target(player, target) {
              var att = get.attitude(player, target);
              if (att < 0) {
                return -(1 + target.countCards('he') * 0.1);
              }
            },
          },
        },
        subSkill: {
          clear: {
            silent: true,
            charlotte: true,
            trigger: { player: 'phaseAfter' },
            async content(event, trigger, player) {
              player.storage.newzhidianmrfz = [];
            },
          },
          count: {
            silent: true,
            charlotte: true,
            trigger: {
              global: 'phaseBefore',
              player: ['changeHp', 'enterGame'],
            },
            filter(event, player) {
              return event.name != 'phase' || game.phaseNumber == 0;
            },
            content() {
              lib.skill.newzhidianmrfz.usable = player.hp;
            },
          },
          disable: {
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
        },
      },
      newpijimrfz: {
        audio: 'pijimrfz',
        trigger: {
          player: 'useCard',
        },
        forced: true,
        filter(event, player) {
          return game.hasPlayer((current) => {
            return current != player && current.isLinked();
          });
        },
        content() {
          trigger.directHit.addArray(
            game.filterPlayer((current) => {
              return current != player && current.isLinked();
            }),
          );
        },
        ai: {
          directHit_ai: true,
          skillTagFilter(player, tag, arg) {
            return arg.target.isLinked();
          },
        },
        group: 'newpijimrfz_damage',
        subSkill: {
          damage: {
            forced: true,
            trigger: { source: 'damageEnd' },
            filter(event, player) {
              return event.player.isLinked() && event.parent.name != 'newpijimrfz_damage';
            },
            content() {
              for (var i of game.players) {
                if (player == i || !i.isLinked()) continue;
                player.line(i);
                i.damage();
              }
            },
          },
        },
      },
      //新塞雷娅
      newgaihuamrfz: {
        audio: 'gaihuamrfz',
        enable: ['chooseToUse', 'chooseToRespond'],
        hiddenCard(player, name) {
          if (lib.inpile.includes(name) && !player.hasSkill('newgaihuamrfz_ban') && get.type(name) == 'basic') return true;
        },
        filter(event, player) {
          if (event.responded || event.newgaihuamrfz || player.hasSkill('newgaihuamrfz_ban')) return false;
          for (var i of lib.inpile) {
            if (get.type(i) == 'basic' && event.filterCard({ name: i }, player, event)) return true;
          }
          return false;
        },
        forced: true,
        async content(event, trigger, player) {
          var evt = event.getParent(2),
            storage = player.storage.newgaihuamrfz_clear;
          evt.set('newgaihuamrfz', true);
          let list = ['牌堆顶三张牌'],
            list2 = ['选项一'],
            hd = [];
          if (ui.discardPile.childNodes.length > 2) {
            list.add('弃牌堆顶三张牌');
            list2.add('选项二');
          } else list.add('<span style="opacity:0.5">弃牌堆顶三张牌(不可选:弃牌堆牌数小于3)</span>');
          for (var i of game.players) {
            if (get.distance(player, i) > 1) continue;
            if (i.countCards('h') < 1) continue;
            if (i == player) continue;
            hd = hd.concat(i.getCards('h'));
          }
          if (hd.length) {
            list.add('与你距离不大于1的其他角色的手牌');
            list2.add('选项三');
          } else list.add('<span style="opacity:0.5">与你距离不大于1的其他角色的手牌(不可选:你距离不大于1的其他角色没有手牌)</span>');
          const { control } = await player
            .chooseControl(list2, 'cancel2')
            .set('choiceList', list)
            .set('ai', function () {
              var list = _status.event.list,
                player = _status.event.player,
                hd = _status.event.hd;
              if (
                game.countPlayer((current) => {
                  return player != current && get.distance(player, current) <= 1 && get.distance(player, current) < 0;
                }) < 1 ||
                hd.length < 3
              )
                list.remove('选项三');
              if (list.length == 0) return 'cancel2';
              return list.randomGet();
            })
            .set('list', list2)
            .set('hd', hd)
            .forResult();

          if (!control || control == 'cancel2') {
            evt.goto(0);
            return;
          }
          var cards = [];
          switch (control) {
            case '选项一':
              cards = get.cards(3, true);
              break;
            case '选项二':
              var num = 3;
              while (num-- > 0) {
                if (ui.discardPile.hasChildNodes() == false) {
                  break;
                }
                var cardx = ui.discardPile.removeChild(ui.discardPile.firstChild);
                cardx.original = 'd';
                cards.push(cardx);
              }
              if (Array.isArray(cards))
                for (var i of cards) {
                  ui.discardPile.insertBefore(i, ui.discardPile.firstChild);
                }
              break;
            case '选项三':
              cards = hd;
              break;
          }
          const links = (
            await player
              .chooseButton(['【钙化】:选择要' + (evt.name == 'chooseToUse' ? '使用' : '打出') + '的牌', cards])
              .set('filterButton', function (button) {
                var player = _status.event.player,
                  event = _status.event;
                return _status.event.cards.includes(button.link);
              })
              .set(
                'cards',
                cards.filter(function (card) {
                  if (get.type(card) != 'basic') return false;
                  return evt.filterCard(card, evt.player, evt);
                }),
              )
              .set('ai', function (button) {
                var evt = _status.event.getParent(3);
                if (evt && evt.ai) {
                  var tmp = _status.event;
                  _status.event = evt;
                  var result = (evt.ai || event.ai1)(button.link, _status.event.player, evt);
                  _status.event = tmp;
                  return result;
                }
                return 1;
              })
              .forResult()
          ).links;
          if (!links) {
            evt.goto(0);
            return;
          }
          var card = links[0],
            name = links[0].name;
          if (_status.currentPhase == player)
            player.addTempSkill('newgaihuamrfz_ban', {
              global: 'phaseBeginStart',
            });
          if (evt.name == 'chooseToUse') {
            game.broadcastAll(
              function (result, name) {
                lib.skill.newgaihuamrfz_backup.viewAs = {
                  name: name,
                  cards: [result],
                };
              },
              card,
              name,
            );
            var evt = event.getParent(2);
            evt.set('_backupevent', 'newgaihuamrfz_backup');
            evt.set('openskilldialog', `请选择${get.translation(card)}的目标`);
            evt.backup('newgaihuamrfz_backup');
          } else {
            delete evt.result.skill;
            delete evt.result.used;
            evt.result.card = card;
            evt.result.cards = [card];
            evt.redo();
            return;
          }
          evt.goto(0);
        },
        ai: {
          effect: {
            target(card, player, target, effect) {
              if (get.tag(card, 'respondShan')) return 0.7;
              if (get.tag(card, 'respondSha')) return 0.7;
            },
          },
          order: 11,
          respondShan: true,
          respondSha: true,
          result: {
            player(player) {
              if (_status.event.dying) return get.attitude(player, _status.event.dying);
              return 1;
            },
          },
        },
        subSkill: {
          ban: {
            charlotte: true,
          },
        },
      },
      newgaihuamrfz_backup: {
        sourceSkill: 'newgaihuamrfz',
        precontent() {
          var name = event.result.card.name,
            cards = event.result.card.cards.slice(0);
          event.result.cards = cards;
          var rcard = cards[0],
            card;
          if (rcard.name == name) card = rcard;
          else card = { name };
          event.result.card = card;
        },
        filterCard() {
          return false;
        },
        selectCard: -1,
      },
      panshimrfz: {
        mod: {
          targetEnabled(card, player, target) {
            for (var i of game.players) {
              if (i.getHistory('useCard').length) return;
            }
            return false;
          },
        },
        audio: 2,
        forced: true,
        trigger: { player: 'useCard' },
        filter(event, player) {
          if (player.getHistory('useCard').length > 1) return false;
          return event.card && (get.type2(event.card) == 'trick' || (get.type(event.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(event.card.name)));
        },
        content() {
          trigger.directHit.addArray(
            game.filterPlayer(function (current) {
              return current != player;
            }),
          );
        },
      },
      //新玛恩纳
      lianmangmrfz: {
        audio: 2,
        trigger: {
          target: 'useCardToTargeted',
        },
        filter(event, player) {
          return player.countCards('h') > 0 && event.card && event.player != player && !player.hasSkill('zhanmangmrfz_ban');
        },
        banHs(event, trigger, player) {
          player.addTempSkill('lianmangmrfz_ban');
          _status.tmpCard = trigger.card;
          player
            .when({
              global: 'useCardAfter',
              player: 'dying',
            })
            .filter((event, player) => {
              return event.card == _status.tmpCard || event.name == 'dying';
            })
            .then(() => {
              player.removeSkill('lianmangmrfz_ban');
              delete _status.tmpCard;
            });
          // .emb({ firstDo: true });
        },
        forced: true,
        async content(event, trigger, player) {
          let num = get.cardNameLength(trigger.card);
          const { cards } = await player
            .chooseCard(`【敛芒】:请重铸至多${get.cnNumber(num)}张牌`, [0, num], true)
            .set('ai', function (card) {
              if (get.tag(card, 'damage')) return 10 - get.value(card);
              return 6 - get.value(card);
            })
            .set('filterCard', (card) => player.canRecast(card))
            .forResult();
          if (!cards || cards.length == 0) {
            lib.skill.lianmangmrfz.banHs(event, trigger, player);
            return;
          }
          let hs = player.getCards('h');
          await player.recast(cards, undefined, undefined);
          if (cards.filter((i) => get.tag(i, 'damage')).length) player.draw();
          if (hs.isSubset(cards)) trigger.player.damage();
          lib.skill.lianmangmrfz.banHs(event, trigger, player);
        },
        group: ['lianmangmrfz_cancel'],
        subSkill: {
          ban: {
            charlotte: true,
            mod: {
              cardEnabled2(card, player) {
                if (get.position(card) == 'h') return false;
              },
            },
          },
          cancel: {
            forced: true,
            audio: 'lianmangmrfz',
            trigger: { source: 'damageBefore' },
            filter(event, player) {
              return !player.hasSkill('zhanmangmrfz_ban');
            },
            async content(event, trigger, player) {
              let num = trigger.num;
              trigger.cancel();
              let list = ['选项一'];
              let chooseList = [`摸${get.cnNumber(num)}张牌`, `回复${get.cnNumber(num)}点体力`];
              if (player.getDamagedHp() > 0) {
                list.push('选项二');
              } else chooseList[1] = '<span style="opacity:0.5">' + chooseList[2] + '(不可选:已损失体力值为零)</span>';
              const { control } =
                list.length == 1
                  ? player.draw(num)
                  : await player
                    .chooseControl(list)
                    .set('choiceList', chooseList)
                    .set('prompt', '【敛芒】:请选择一项')
                    .set('ai', function () {
                      var list = _status.event.list;
                      if (list.includes('选项二')) return '选项二';
                      return '选项一';
                    })
                    .set('list', list)
                    .forResult();
              if (!control) return;
              switch (control) {
                case '选项一':
                  player.draw(num);
                  break;
                case '选项二':
                  player.recover(num);
                  break;
              }
            },
          },
        },
        ai: {
          threaten: 0.8,
          effect: {
            target(card, player, target) {
              if (get.tag(card, 'damage')) return [0, -999];
            },
          },
        },
      },
      zhanmangmrfz: {
        audio: 2,
        trigger: { player: 'phaseUseBegin' },
        filter(event, player) {
          return player.countCards('h') > player.getHandcardLimit();
        },
        prompt(event, player) {
          var num = Math.min(player.maxHp, player.countCards('h') - player.getHandcardLimit());
          return `【展芒】:你可以摸${get.cnNumber(num)}张牌、本回合使用【杀】的次数+${num},且本回合【敛芒】失效`;
        },
        content() {
          var num = Math.min(player.maxHp, player.countCards('h') - player.getHandcardLimit());
          player.draw(num);
          player.addMark('zhanmangmrfz_add', num, false);
          player.addTempSkill('zhanmangmrfz_add', {
            player: 'phaseEnd',
          });
          player.addTempSkill('zhanmangmrfz_ban', {
            player: 'phaseEnd',
          });
        },
        subSkill: {
          ban: {
            charlotte: true,
            mark: true,
            intro: {
              content(event, player) {
                return `·【敛芒】失效<br>·本回合使用【杀】的次数+${player.countMark('zhanmangmrfz_add')}`;
              },
            },
          },
          add: {
            charlotte: true,
            mod: {
              cardUsable(card, player, num) {
                var count = player.countMark('zhanmangmrfz_add');
                if (card.name == 'sha') return num + count;
              },
            },
          },
        },
        ai: {
          threaten() {
            var player = _status.event.player,
              num = player.countCards('h') - player.getHandcardLimit();
            return 1 + Math.max(0.2, num * 0.2);
          },
        },
      },
      xingyimrfz: {
        audio: 2,
        trigger: { global: 'phaseJieshuBegin' },
        getDamagedTarget(event, player) {
          let list = [];
          for (var i of game.players) {
            if (player == i) continue;
            let history = i.getHistory('damage');
            for (var j = 0; j < history.length; j++) {
              let damaged = history[j].player;
              list.push(damaged);
            }
          }
          return list;
        },
        filter(event, player) {
          var list = lib.skill.xingyimrfz.getDamagedTarget(event, player);
          return list.length && _status.currentPhase != player;
        },
        forced: true,
        async content(event, trigger, player) {
          let list = lib.skill.xingyimrfz.getDamagedTarget(event, player);
          const targets = (
            await player
              .chooseTarget('【行义】:你可以受到一点伤害并令一名本回合受到过伤害的其他角色回复一点体力')
              .set('filterTarget', function (card, player, target) {
                var list = _status.event.list;
                return list.includes(target);
              })
              .set('ai', function (target) {
                var player = _status.event.player;
                if (player.hp < 2 && player.countCards('h', 'tao') + player.countCards('h', 'jiu') < 1) return 0;
                return get.attitude(target, player) > 0;
              })
              .set('list', list)
              .forResult()
          ).targets;
          if (!targets) return;
          targets[0].recover();
          player.damage('nosource');
        },
      },
      //左乐
      qikumrfz: {
        audio: 2,
        trigger: { player: 'gainBegin' },
        filter(event, player) {
          return player.countCards('h') == 0 && event.getParent(2).name != 'qikumrfz';
        },
        forced: true,
        content() {
          var num = player.maxHp - trigger.cards.length;
          player.draw(num);
        },
      },
      bingzhumrfz: {
        marktext: '司',
        intro: {
          name: '司',
          markcount: 'expansion',
          content: 'expansion',
        },
        audio: 2,
        enable: 'phaseUse',
        usable: 1,
        filter(event, player) {
          return player.countCards('h') > 0;
        },
        async content(event, trigger, player) {
          var suit = [];
          for (var i of player.getCards('h')) {
            if (suit.includes(i.suit)) continue;
            suit.push(i.suit);
          }
          if (suit.length == 0) return;
          const { control } = await player
            .chooseControl(suit, 'cancel2')
            .set('prompt', '【秉烛】:请选择一种花色')
            .set('ai', function () {
              var suit = _status.event.suit;
              return suit.randomGet();
            })
            .set('suit', suit)
            .forResult();

          if (!control || control == 'cancel2') {
            if (control == 'cancel2') player.getStat('triggerSkill').bingzhumrfz--;
            return;
          }
          var hs = player.getCards('h', (card) => {
            return card.suit == control;
          });
          if (hs.length == 0) return;
          let list = [];
          while (hs.length) {
            const { cards } = await player
              .chooseCard(true, `【秉烛】:请分配第${get.cnNumber(list.length + 1)}组手牌`)
              .set('selectCard', function () {
                var player = _status.event.player;
                var num = game.countPlayer((current) => current != player) - (list.length + 1) > 0 ? 1 : hs.length;
                return [num, Infinity];
              })
              .set('ai', function (card) {
                if (!ui.selected.cards) return 1;
                if (
                  game.countPlayer((current) => {
                    return current != player && get.attitude(current, player) < 0;
                  }) < 2
                )
                  return 1;
                for (var i of ui.selected.cards) {
                  if (i.suit == card.suit) return [-1, -1, 1, 1].randomGet();
                  return 1;
                }
              })
              .set('filterCard', (card) => {
                var hs = _status.event.hs;
                return hs.includes(card);
              })
              .set('hs', hs)
              .forResult();
            if (!cards) continue;
            list.push([cards]);
            hs.removeArray(cards);
          }
          let count = list.length,
            list2 = [];
          while (count > 0) {
            const targets = (
              await player
                .chooseTarget(true, `【秉烛】:请将${get.translation(list[list2.length])}置于一名其他角色的武将牌上`)
                .set('ai', function (target) {
                  var player = _status.event.player;
                  return get.attitude(player, target) < 0;
                })
                .set('filterTarget', lib.filter.notMe)
                .forResult()
            ).targets;
            count--;
            if (!targets) continue;
            list2.push(targets[0]);
          }
          for (var i = 0; i < list2.length; i++) {
            list2[i].addToExpansion(list[i][0], list2[i], 'giveAuto').gaintag.add('bingzhumrfz');
          }
        },
        group: ['bingzhumrfz_clear', 'bingzhumrfz_eff'],
        subSkill: {
          eff: {
            forced: true,
            trigger: { global: 'useCardToTargeted' },
            filter(event, player) {
              var cards = event.player.getExpansions('bingzhumrfz');
              if (!cards.length || !event.card) return false;
              if (get.type2(event.card) != 'trick' && get.type(event.card) != 'basic') return false;
              for (var i of cards) {
                if (i.name == event.card.name || i.suit == event.card.suit) return true;
              }
              return false;
            },
            async content(event, trigger, player) {
              var cards = trigger.player.getExpansions('bingzhumrfz').filter((i) => i.name == trigger.card.name || i.suit == trigger.card.suit);
              const { bool, links } = await player
                .chooseCardButton('【秉烛】:你可以弃置其一张‘司’并令此牌对一名目标角色无效', cards)
                .set('ai', () => {
                  var player = _status.event.player,
                    event = _status.event.getTrigger(),
                    friend = game.filterPlayer((current) => current == player || get.attitude(current, player) > 0);
                  for (var i of event.targets) {
                    if (friend.includes(i)) return 1;
                  }
                  return 0;
                })
                .forResult();
              if (!bool) return;
              const targets = (
                await player
                  .chooseTarget('【秉烛】:请选择一名目标角色,此牌对该角色无效', true)
                  .set('ai', function (target) {
                    var player = _status.event.player;
                    return get.attitude(target, player) > 0;
                  })
                  .set('filterTarget', (card, player, target) => {
                    var targets = _status.event.targets;
                    return targets.includes(target);
                  })
                  .set('targets', trigger.targets)
                  .forResult()
              ).targets;
              if (!targets) return;
              trigger.parent.excluded.add(targets[0]);
              trigger.player.loseToDiscardpile(links);
              player.draw();
            },
          },
          clear: {
            charlotte: true,
            silent: true,
            trigger: { player: 'dieAfter' },
            content() {
              for (var i of game.players) {
                var cards = i.getExpansions('bingzhumrfz');
                if (cards.length) i.loseToDiscardpile(cards);
              }
            },
          },
        },
      },
      //新山
      zhefumrfz: {
        audio: 2,
        trigger: { player: 'phaseUseBegin' },
        filter(event, player) {
          return player.countCards('h', (card) => get.tag(card, 'damage')) > 0;
        },
        prompt(event, player) {
          return `【蛰伏】:是否将手牌中所有带有伤害类标签的牌置入弃牌堆或牌堆顶并摸等量的牌？`;
        },
        async content(event, trigger, player) {
          let cards = player.getCards('h', (card) => get.tag(card, 'damage'));
          if (!cards.length) return;
          const moved = (
            await player
              .chooseToMove()
              .set('list', [['牌堆底', cards], ['弃牌堆']])
              .set('processAI', (list) => {
                var player = _status.event.player,
                  cards = list[0][1],
                  canUse = cards.filter((i) => player.canUseToAnyone(i)),
                  bottom = [],
                  disPile = [];
                var red = 0,
                  black = 0;
                for (var i of canUse) {
                  var color = get.color(i);
                  if (!color) continue;
                  else if (color == 'red') red += get.value(i);
                  else black += get.value(i);
                }
                if (red > black) bottom = canUse.slice().filter((i) => get.color(i) == 'red');
                else bottom = canUse.slice().filter((i) => get.color(i) == 'black');
                bottom.sort(function (a, b) {
                  return get.value(b, player) - get.value(a, player);
                });
                disPile = cards.slice().filter((i) => !bottom.includes(i));
                return [bottom, disPile];
              })
              .forResult()
          ).moved;
          if (!moved) return;
          var bottom = moved[0],
            disPile = moved[1];
          if (disPile.length) player.loseToDiscardpile(disPile);
          if (bottom.length) {
            game.log(player, '将', get.cnNumber(bottom.length), '置入了牌堆底');
            for (var i of bottom) ui.cardPile.appendChild(i);
            player.$throw(bottom.length, 1000);
          }
          await player.draw(cards.length);
        },
      },
      yubianmrfz: {
        audio: 2,
        trigger: { player: 'phaseJieshuBegin' },
        prompt(event, player) {
          return `【狱变】:你可以使用牌堆顶的牌(目标必须合法),若你因此使用的牌颜色均相同,你重复这个流程`;
        },
        check(event, player) {
          return game.hasPlayer((current) => {
            return current != player && player.canUse('sha', current) && get.attitude(player, current) < 0;
          });
        },
        async content(event, trigger, player) {
          let cardx = [],
            color;
          while (true) {
            var card = get.bottomCards()[0];
            player.$throw(card, null);
            if (!player.hasUseTarget(card)) return;
            const result = await player.chooseUseTarget(card, `【狱变】:请选择${get.translation(card)}的目标`);
            if (!result) return;
            var cards = result.cards;
            for (var i of cards) cardx.push(i);
            color = get.color(cards[0]);
            for (var i of cardx) {
              if (get.color(i) != color) {
                return;
              }
              color = get.color(i);
            }
          }
        },
      },
      //新空弦
      sanyimrfz: {
        audio: 'lieshimrfz',
        trigger: { player: 'useCard2' },
        filter(event, player) {
          if (!event.card) return false;
          if (event.card.name != 'sha' || event.card.number == null) return false;
          return event.targets && event.targets.length == 1;
        },
        forced: true,
        async content(event, trigger, player) {
          const targets = (
            await player
              .chooseTarget()
              .set('forced', true)
              .set('filterTarget', (card, player, target) => {
                if (target == player || _status.event.targets.includes(target) || !player.canUse(_status.event.cardx, target, false)) return false;
                var selected = ui.selected.targets,
                  base = _status.event.targetx.hp;
                var total = Object.values(selected).reduce((accumulator, currentValue) => {
                  if (Object.hasOwn(currentValue, 'hp')) {
                    return accumulator + currentValue.hp;
                  }
                  return accumulator;
                }, 0);
                return target.hp + total + base <= _status.event.cardx.number;
              })
              .set('prompt', `【散逸】:你可以额外指定任意名体力值之和不超过${trigger.card.number - trigger.targets[0].hp}的角色`)
              .set('selectTarget', [0, Infinity])
              .set('complexTarget', true)
              .set('ai', (target) => {
                return get.effect(target, _status.event.cardx, _status.event.player, _status.event.player) > 0;
              })
              .set('targets', trigger.targets)
              .set('targetx', trigger.targets[0])
              .set('cardx', trigger.card)
              .forResult()
          ).targets;
          if (!targets) return false;
          for (var i of targets) {
            trigger.targets.push(i);
            player.line(i);
          }
        },
      },
      baofengmrfz: {
        audio: 2,
        trigger: { source: 'damageEnd' },
        filter(event, player) {
          return event.card && event.card.name == 'sha' && get.color(event.card) != 'none';
        },
        forced: true,
        async content(event, trigger, player) {
          const bool = (
            await player
              .chooseUseTarget(
                {
                  name: 'sha',
                  suit: 'none',
                  number: trigger.card.number,
                },
                false,
                false,
              )
              .set('prompt', `【追矢】:你可以视为使用一张🃏且点数为${trigger.card.number}的【杀】`)
              .forResult()
          ).bool;
          if (!bool) return;
        },
      },
      //ela 艾拉
      zuzhimrfz: {
        audio: 2,
        trigger: { source: 'damageEnd' },
        filter(event, player) {
          return event.card && get.color(event.card) != 'none' && event.player && event.player.isIn() && (!event.player.storage.zuzhimrfz || !event.player.storage.zuzhimrfz.includes(get.color(event.card)));
        },
        prompt(event, player) {
          return `【阻滞】:是否令${event.player == player ? '你' : get.translation(event.player)}本回合无法使用或打出${get.translation(get.color(event.card))}的牌？`;
        },
        check(event, player) {
          return get.attitude(event.player, player) < 0;
        },
        content() {
          var target = trigger.player;
          if (!target.storage.zuzhimrfz_ban) target.storage.zuzhimrfz_ban = [];
          target.storage.zuzhimrfz_ban.add(get.color(trigger.card));
          target.addTempSkill('zuzhimrfz_ban', {
            global: 'phaseEnd',
          });
        },
        subSkill: {
          ban: {
            charlotte: true,
            mark: true,
            intro: {
              content(event, player) {
                return `本回合不能使用或打出${get.translation(player.storage.zuzhimrfz_ban)}的牌`;
              },
            },
            mod: {
              cardEnabled(card, player) {
                if (player.getStorage('zuzhimrfz_ban').includes(get.color(card))) return false;
              },
              cardRespondable(card, player) {
                if (player.getStorage('zuzhimrfz_ban').includes(get.color(card))) return false;
              },
              cardSavable(card, player) {
                if (player.getStorage('zuzhimrfz_ban').includes(get.color(card))) return false;
              },
            },
          },
        },
      },
      leimingmrfz: {
        init(player, skill) {
          player.storage[skill] = [];
        },
        mark: true,
        intro: {
          content(event, player) {
            if (game.me == player) {
              return `记录的内容:${get.translation(player.storage.leimingmrfz)}`;
            } else return `有${player.storage.leimingmrfz.length}个记录的内容`;
          },
        },
        audio: 2,
        trigger: { global: 'roundStart' },
        forced: true,
        async content(event, trigger, player) {
          player.storage.leimingmrfz = [];
          var list1 = [],
            list2 = [],
            list3 = [],
            list4 = [];
          for (var i = 0; i < lib.inpile.length; i++) {
            var type = get.type(lib.inpile[i]);
            if (type == 'basic') {
              list1.push(['基本', '', lib.inpile[i]]);
            } else if (type == 'trick') {
              list2.push(['锦囊', '', lib.inpile[i]]);
            } else if (type == 'delay') {
              list3.push(['锦囊', '', lib.inpile[i]]);
            } else if (type == 'equip') {
              list3.push(['装备', '', lib.inpile[i]]);
            }
          }
          const links = (
            await player
              .chooseButton([get.prompt('leimingmrfz'), [list1.concat(list2).concat(list3).concat(list4), 'vcard']])
              .set('filterButton', function (button) {
                var player = _status.event.player;
                if (player.storage.leimingmrfz.includes(button.link[2])) return false;
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
              .set('rand', [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()])
              .forResult()
          ).links;
          if (!links) return;
          player.storage.leimingmrfz.add(links[0][2]);
          var control = (
            await player
              .chooseControl(lib.suit)
              .set('prompt', '【雷鸣】:请选择一种花色')
              .set('ai', () => lib.suit.randomGet())
              .forResult()
          ).control;
          if (!control) return;
          player.storage.leimingmrfz.add(control);
          var control = (
            await player
              .chooseControl('basic', 'trick', 'equip')
              .set('prompt', '【雷鸣】:请选择一种类型')
              .set('ai', () => ['basic', 'basic', 'basic', 'trick', 'trick', 'equip'].randomGet())
              .forResult()
          ).control;
          if (!control) return;
          player.storage.leimingmrfz.add(control);
        },
        group: 'leimingmrfz_eff',
        subSkill: {
          eff: {
            audio: 'leimingmrfz',
            trigger: { global: 'useCard' },
            filter(event, player) {
              var storage = player.storage.leimingmrfz,
                card = event.card;
              if (player.storage.leimingmrfz_eff) return false;
              if (!storage || storage.length == 0) return false;
              if (player == event.player) return false;
              return storage.includes(card.suit) || storage.includes(card.name) || storage.includes(get.type2(card, event.player));
            },
            prompt(event, player) {
              return `【雷鸣】:是否视为对${get.translation(event.player)}使用一张任意颜色的雷【杀】？`;
            },
            check(event, player) {
              if (get.attitude(event.player, player) > 0) return false;
              return get.effect(event.player, { name: 'sha', nature: 'thunder' }, player, player) > 0;
            },
            async content(event, trigger, player) {
              player.storage.leimingmrfz_eff = true;
              player
                .when({
                  player: 'leimingmrfz_effAfter',
                })
                .then(() => {
                  delete player.storage.leimingmrfz_eff;
                });
              // .emb({ firstDo: true });
              var target = trigger.player;
              // if (target.countDiscardableCards(player, 'he')) player.discardPlayerCard('he', true, target)
              //     .set('target', target)
              //     .set('ai', lib.card.guohe.ai.button);
              if (player.canUse({ name: 'sha', nature: 'thunder' }, target, false)) {
                var control = (
                  await player
                    .chooseControl('red', 'black')
                    .set('prompt', `【雷鸣】:请选择使用雷【杀】的颜色`)
                    .set('ai', function () {
                      var player = _status.event.player,
                        target = _status.event.target;
                      var red = get.effect(
                        target,
                        {
                          name: 'sha',
                          nature: 'thunder',
                          color: 'red',
                        },
                        player,
                        player,
                      ),
                        black = get.effect(
                          target,
                          {
                            name: 'sha',
                            nature: 'thunder',
                            color: 'black',
                          },
                          player,
                          player,
                        );
                      if (red > black) return 0;
                      return 1;
                    })
                    .set('target', target)
                    .forResult()
                ).control;
                if (!control) return;
                if (
                  player.canUse(
                    {
                      name: 'sha',
                      nature: 'thunder',
                      color: control,
                    },
                    target,
                    false,
                  )
                ) {
                  player.useCard(
                    {
                      name: 'sha',
                      nature: 'thunder',
                      color: control,
                    },
                    target,
                    true,
                  );
                }
              }
              var list = [],
                storage = player.storage.leimingmrfz,
                card = trigger.card;
              if (storage.includes(card.name)) list.push(card.name);
              if (storage.includes(card.suit)) list.push(card.suit);
              if (storage.includes(get.type2(card, target))) list.push(get.type2(card, target));
              var control =
                list.length == 1
                  ? list[0]
                  : (
                    await player
                      .chooseControl(list)
                      .set('prompt', `【雷鸣】:请选择清除一个记录`)
                      .set('list', list)
                      .set('ai', function () {
                        var list = _status.event.list;
                        return list.randomGet();
                      })
                      .forResult()
                  ).control;
              if (!control) return;
              player.storage.leimingmrfz.remove(control);
            },
          },
        },
      },
      //阿斯卡纶
      dunyingmrfz: {
        mod: {
          globalTo(from, to, distance) {
            var cards = to.getCards('s', function (card) {
              return card.hasGaintag('dunyingmrfz');
            });
            if (cards.length) return distance + 1;
          },
        },
        marktext: '影',
        intro: {
          mark(dialog, storage, player) {
            var cards = player.getCards('s', function (card) {
              return card.hasGaintag('dunyingmrfz');
            });
            if (game.me == player) dialog.addAuto(cards);
            else return `共有${cards.length}张牌`;
          },
        },
        onremove(player, skill) {
          var cards = player.getCards('s', function (card) {
            return card.hasGaintag('dunyingmrfz');
          });
          if (cards.length) {
            player.lose(cards, ui.discardPile);
            player.$throw(cards, 1000);
            game.log(cards, '进入了弃牌堆');
          }
        },
        audio: 2,
        trigger: {
          player: 'phaseJieshuBegin',
        },
        filter(event, player) {
          var cards = player.getCards('s', function (card) {
            return card.hasGaintag('dunyingmrfz');
          });
          if (
            player.countCards('h', (card) => {
              return !card.hasGaintag('dunyingmrfz');
            }) < 1
          )
            return false;
          return cards.length < player.maxHp;
        },
        async content(event, trigger, player) {
          var num = player.getCards('s', function (card) {
            return card.hasGaintag('dunyingmrfz');
          }).length;
          const cards =
            player.countCards('h', (card) => {
              return !card.hasGaintag('dunyingmrfz');
            }) +
              num <=
              player.maxHp
              ? player.getCards('h')
              : (
                await player
                  .chooseCard('h', get.prompt('dunyingmrfz'), '将所有手牌置于武将牌上,称之为<影>', true)
                  .set('selectCard', () => {
                    var player = _status.event.player;
                    var num = player.getCards('s', function (card) {
                      return card.hasGaintag('dunyingmrfz');
                    }).length;
                    return player.maxHp - num;
                  })
                  .set('filterCard', (card) => {
                    return !card.hasGaintag('dunyingmrfz');
                  })
                  .set('ai', function (card) {
                    var player = _status.event.player;
                    if (player.hasUseTarget(card) && !player.hasValueTarget(card)) return 0;
                    if (['sha', 'shan', 'wuxie', 'caochuan'].includes(card.name)) return 2 + Math.random();
                    return 1 + Math.random();
                  })
                  .forResult()
              ).cards;
          if (!cards) return;
          game.log(player, '将', cards.length, '张牌置于在武将牌上');
          player.loseToSpecial(cards, 'dunyingmrfz');
          player.markSkill('dunyingmrfz');
        },
        group: ['dunyingmrfz_gain'],
        subSkill: {
          gain: {
            audio: 'dunyingmrfz',
            trigger: { player: 'useCard' },
            usable: 1,
            filter(event, player) {
              var cards = player.getCards('s', function (card) {
                return card.hasGaintag('dunyingmrfz');
              });
              if (!event.cards.length) return cards.length < player.maxHp;
              var position = event.card.cards.map((i) => i.original);
              return position.every((item) => item != 'h') && cards.length < player.maxHp;
            },
            prompt: '【遁影】:你可以将牌堆顶的一张牌置于你的武将牌上,称之为<影>',
            content() {
              var cards = get.cards();
              game.log(player, '将一张牌置于在武将牌上');
              player.loseToSpecial(cards, 'dunyingmrfz');
              player.markSkill('dunyingmrfz');
            },
          },
        },
      },
      niximrfz: {
        audio: 2,
        trigger: { global: 'phaseJieshuBegin' },
        filter(event, player) {
          return event.player.isIn() && event.player != player && player.canUse('sha', event.player, false);
        },
        forced: true,
        async content(event, trigger, player) {
          const { cards } = await player
            .chooseToUse(
              function (card, player, event) {
                if (card.name != 'sha') return false;
                return lib.filter.filterCard.apply(this, arguments);
              },
              '【匿袭】是否对' + get.translation(trigger.player) + '使用一张杀？',
            )
            .set('complexSelect', true)
            .set('filterTarget', function (card, player, target) {
              if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
              return lib.filter.targetEnabled.apply(this, arguments);
            })
            .set('sourcex', trigger.player)
            .forResult();
          if (!cards) return;
          var isDamaged = player.hasHistory('useCard', (evt) => {
            return (
              evt.getParent(2) == event &&
              evt.card &&
              evt.card.cardid &&
              player.hasHistory('sourceDamage', (evtx) => {
                return evtx.card && evt.card.cardid == evtx.card.cardid;
              })
            );
          });
          if (!isDamaged && player.isIn() && trigger.player.isIn()) {
            var target = trigger.player,
              targetx = trigger.player,
              list = [];
            if (target.next == player) return;
            const bool = (await player.chooseBool(`【匿袭】:是否将座位移到${get.translation(trigger.player)}下家？`).forResult()).bool;
            if (!bool) return;
            while (targetx.next != player) {
              targetx = targetx.next;
              list.push(targetx);
            }
            if (list.length == 0) return;
            list.reverse();
            for (var i of list) {
              await game.broadcastAll(
                function (target1, target2) {
                  game.swapSeat(target1, target2);
                },
                i,
                player,
              );
            }
          }
        },
      },
      // logos 逻格斯 李狗剩
      baidumrfz: {
        audio: 2,
        trigger: {
          global: 'damageEnd',
        },
        usable: 1,
        filter(event, player) {
          if (!event.card) return false;
          var num = get.cardNameLength(event.card);
          if (typeof num !== 'number' || num < 1) return false;
          return player.countCards('he') > 0 && event.player.isIn();
        },
        // forced: true,
        async cost(event, trigger, player) {
          let sourceCards = trigger.cards || undefined;
          const result = await player
            .chooseToDiscard('he')
            .set('prompt', get.prompt('baidumrfz'))
            .set('prompt2', `你可以弃置一张牌,${sourceCards === undefined ? '(' + get.translation(trigger.card) + '无对应的实体牌)' : '你获得' + get.translation(trigger.card) + '(' + get.translation(sourceCards) + '),'}${get.translation(trigger.player)}摸你弃置的牌与对其造成伤害的牌的字数之差的绝对值张牌.`)
            .set('ai', function (card) {
              var player = _status.event.player,
                target = _status.event.targetx,
                cardx = trigger.card,
                att = get.attitude(player, target);
              if (att > 0) {
                return Math.abs(get.cardNameLength(cardx) - get.cardNameLength(card)) - Math.floor(get.value(card) / 10);
              } else {
                if (Math.abs(get.cardNameLength(cardx) - get.cardNameLength(card)) > cardx.cards.length) return 0;
                return get.value(cardx.cards) - get.value(card);
              }
            })
            .set('targetx', trigger.player)
            .set('cardx', trigger.card)
            .forResult();
          event.result = result;
        },
        async content(event, trigger, player) {
          let sourceCards = trigger.cards || undefined;
          let cards = event.cards;
          var gaincard = [];
          for (var i of sourceCards) {
            if (get.position(i, true) == 'o') gaincard.push(i);
          }
          if (gaincard.length) player.gain(gaincard, 'gain2');
          var num = Math.abs(get.cardNameLength(trigger.card) - get.cardNameLength(cards[0]));
          if (num > 0) trigger.player.draw(num);
          player.line(trigger.player);
        },
      },
      yuhuimrfz: {
        init(player, skill) {
          player.storage[skill] = {
            del: false,
            names: [],
          };
        },
        mark: true,
        intro: {
          mark(dialog, content, player) {
            var names = player.storage.yuhuimrfz.names;
            dialog.addText(`本回合【语汇】使用过的牌:<br>${get.translation(names)}`);
          },
        },
        audio: 2,
        enable: 'chooseToUse',
        hiddenCard(player, name) {
          return player.countCards('hes') > 0 && !player.storage.yuhuimrfz.names.includes(name);
        },
        filter(event, player) {
          if (player.countCards('hes') < 1) return false;
          for (var name of lib.inpile) {
            if (player.storage.yuhuimrfz.names.includes(name)) continue;
            if (event.filterCard({ name: name }, player, event)) return true;
          }
          return false;
        },
        chooseButton: {
          dialog(event, player) {
            var list = [];
            for (var name of lib.inpile) {
              if (player.storage.yuhuimrfz.names.includes(name)) {
                continue;
              }
              if (event.filterCard({ name: name }, player, event)) {
                if (name == 'sha') {
                  list.push(['基本', '', 'sha']);
                  for (var j of lib.inpile_nature) {
                    list.push(['基本', '', 'sha', j]);
                  }
                } else if (get.type(name) == 'trick') {
                  list.push(['锦囊', '', name]);
                } else if (get.type(name) == 'basic') {
                  list.push(['基本', '', name]);
                }
              }
            } //QQQ
            return ui.create.dialog('语汇', [list, 'vcard']);
          },
          filter(button, player) {
            var cards = player.getCards('hes'),
              name = button.link[2],
              cardsx = [];
            for (var i of cards) {
              if (get.cardNameLength(i) >= get.cardNameLength(name)) cardsx.push(name);
            }
            return _status.event.parent.filterCard({ name: name }, player, _status.event.parent) && cardsx.includes(name);
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
              filterCard(card) {
                var needNumber = get.cardNameLength(links[0][2]);
                return get.cardNameLength(card) >= needNumber;
              },
              audio: 'yuhuimrfz',
              selectCard: 1,
              popname: true,
              check(card) {
                return 6 - get.value(card);
              },
              position: 'hes',
              viewAs: { name: links[0][2], nature: links[0][3] },
              precontent() {
                if (!player.storage.yuhuimrfz)
                  player.storage.yuhuimrfz = {
                    del: false,
                    names: [],
                  };
                player.storage.yuhuimrfz.names.add(lib.skill.yuhuimrfz_backup.viewAs.name);
                if (player.storage.yuhuimrfz.del != true) {
                  player.storage.yuhuimrfz.del = true;
                  player.when({ global: 'phaseEnd' }).then(() => {
                    player.storage.yuhuimrfz = {
                      del: false,
                      names: [],
                    };
                  });
                }
              },
            };
          },
          prompt(links, player) {
            return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
          },
        },
        ai: {
          save: true,
          respondSha: true,
          respondShan: true,
          skillTagFilter(player, tag, arg) {
            if (!player.countCards('hes')) return false;
            if (tag == 'respondSha' || tag == 'respondShan') {
              if (arg == 'respond') return false;
              return !player.storage.yuhuimrfz.names.includes(tag == 'respondSha' ? 'sha' : 'shan');
            }
            return true;
          },
          order: 4,
          result: {
            player: 1,
          },
          threaten: 2.8,
        },
      },
      // 维什戴尔 异格w 益达
      yuximrfz: {
        mod: {
          globalTo(from, to, distance) {
            var cards = to.getCards('s', function (card) {
              return card.hasGaintag('yuximrfzx');
            });
            if (cards.length) return distance + 2;
          },
        },
        marktext: '死魂灵',
        intro: {
          mark(dialog, storage, player) {
            var cards = player.getCards('s', function (card) {
              return card.hasGaintag('yuximrfzx');
            });
            if (cards?.length) dialog.addAuto('其他角色计算与你的距离+2');
            else return `没有‘死魂灵’`;
            if (game.me == player) dialog.addAuto(cards);
            else dialog.addAuto(`共有${cards.length}张牌`);
          },
        },
        onremove(player, skill) {
          var cards = player.getCards('s', function (card) {
            return card.hasGaintag('yuximrfzx');
          });
          if (cards.length) {
            game.cardsGotoSpecial(cards);
            player.$throw(cards, 1000);
            game.log(cards, '被销毁');
          }
        },
        audio: 2,
        forced: true,
        trigger: { global: 'roundStart' },
        async content(event, trigger, player) {
          lib.skill.yuximrfz.onremove(player, 'yuximrfz');
          var cards = [],
            nature = ['fire', 'thunder'];
          for (var i = 0; i < player.maxHp; i++) {
            var name = lib.inpile
              .filter((name) => {
                return get.type(name) == 'trick' || get.type(name) == 'basic';
              })
              .randomGet();
            cards.push(game.createCard(name, lib.suit.randomGet(), Math.floor(Math.random() * 13) + 1, name == 'sha' ? nature.randomGet() : undefined));
          }
          cards.map((card) => {
            card.storage.yuximrfzx = true;
          });
          game.log(player, '将', cards.length, '张牌置于在武将牌上');
          player.loseToSpecial(cards, 'yuximrfzx');
          player.markSkill('yuximrfz');
        },
        group: ['yuximrfz_destroy'],
        subSkill: {
          destroy: {
            trigger: {
              player: ['loseEnd', 'equipEnd', 'addJudgeEnd', 'gainEnd', 'loseAsyncEnd', 'addToExpansionEnd'],
            },
            forced: true,
            charlotte: true,
            filter(event, player) {
              var evt = event.getl(player);
              if (!evt || !evt.cards) return false;
              for (var i of evt.cards) {
                if (i.storage.yuximrfzx == true) return true;
              }
              return false;
            },
            content() {
              var cards = [];
              var evt = trigger.getl(player);
              if (evt && evt.cards) {
                for (var i of evt.cards) {
                  if (i.storage.yuximrfzx == true) cards.push(i);
                }
              }
              game.cardsGotoSpecial(cards);
              game.log(cards, '被销毁了');
            },
          },
        },
      },
      haolimrfz: {
        audio: 2,
        trigger: { player: 'useCardAfter' },
        compare(card1, card2) {
          if (card1.suit == card2.suit) return true;
          if (card1.number == card2.number) return true;
          if (card1.name == card2.name) return true;
          return false;
        },
        forced: true,
        filter(event, player) {
          var cards = player.getCards('s', function (card) {
            return card.hasGaintag('yuximrfzx');
          });
          if (cards.length < 1) return false;
          if (!player.isPhaseUsing()) return false;
          if (event.card.storage.yuximrfzx == true) return false;
          if (get.type(event.card) == 'equip' || get.type(event.card) == 'delay') return false;
          for (var i of cards) {
            if (lib.skill.haolimrfz.compare(i, event.card)) return true;
          }
          return false;
        },
        async content(event, trigger, player) {
          const { cards } = await player
            .chooseCard('s')
            .set('filterCard', (card) => lib.skill.haolimrfz.compare(card, trigger.card))
            .set('prompt', `【好礼】:你可以弃置一张‘死魂灵’,视为使用一张${get.translation(trigger.card.name)}`)
            .set('ai', (card) => get.value(trigger.card) - get.value(card))
            .forResult();
          if (!cards) return;
          player.discard(cards);
          player.chooseUseTarget({ name: trigger.card.name }, true, false);
        },
      },
      shezumrfz: {
        audio: 2,
        trigger: { source: 'damageEnd' },
        filter(event, player) {
          var cards = player.getCards('s', function (card) {
            return card.hasGaintag('yuximrfzx');
          });
          return (
            event.parent.name != 'shezumrfz' &&
            event.player.isIn() &&
            cards &&
            cards.length &&
            game.hasPlayer((current) => {
              return current != player && current != event.player && get.distance(event.player, current) <= 3;
            })
          );
        },
        forced: true,
        async content(event, trigger, player) {
          const { cards, targets } = await player
            .chooseCardTarget({
              prompt: `【射祖】:你可以弃置一张‘死魂灵’并对一名距离${get.translation(trigger.player)}不大于3的角色(不能是你或${get.translation(trigger.player)})造成一点火焰伤害`,
              filterCard(card) {
                return card.hasGaintag('yuximrfzx');
              },
              position: 's',
              filterTarget(card, player, target) {
                var damaged = _status.event.targetx;
                return target != player && target != damaged && get.distance(damaged, target) <= 3;
              },
              ai1: (card) => 8 - get.value(card),
              ai2: (target) => get.damageEffect(target, player, player, 'fire') > 0,
            })
            .set('targetx', trigger.player)
            .forResult();
          if (!cards || !targets) return;
          player.discard(cards);
          targets[0].damage(player, 'fire');
        },
      },
      // 魔王 小特同学 特蕾西娅
      duanzhangmrfz: {
        intro: {
          mark(dialog, storage, player) {
            var players = player.storage.duanzhangmrfz.slice().filter((target) => target != player);
            if (players && players.length) {
              dialog.addAuto('这一次我不会离开了...');
              players = players.map((i) => i.name);
              dialog.addSmall([players, 'character']);
            } else return '没有【断章】角色';
          },
        },
        audio: 2,
        trigger: {
          global: 'phaseBefore',
          player: 'enterGame',
        },
        forced: true,
        filter(event, player) {
          return game.hasPlayer((current) => current != player) && (event.name != 'phase' || game.phaseNumber == 0);
        },
        async content(event, trigger, player) {
          const targets = (
            await player
              .chooseTarget(true)
              .set('prompt', `【断章】:请选择【断章】目标`)
              .set('filterTarget', lib.filter.notMe)
              .set('ai', (target) => {
                var att = get.attitude(_status.event.player, target);
                if (att > 0) return att + 1;
                if (att == 0) return Math.random();
                return att;
              })
              .forResult()
          ).targets;
          if (!targets) return;
          var target = targets[0];
          if (!player.storage.duanzhangmrfz) player.storage.duanzhangmrfz = [];
          if (!target.storage.duanzhangmrfz) target.storage.duanzhangmrfz = [];
          player.storage.duanzhangmrfz.addArray([target, player]);
          target.storage.duanzhangmrfz.addArray([target, player]);
          player.markSkill('duanzhangmrfz');
          player.line(target);
          for (var i of player.storage.duanzhangmrfz) {
            if (i != player) i.addSkill('canxiangmrfz_nodelay');
            i.addSkill('duanzhangmrfz_eff1');
          }
        },
        group: ['duanzhangmrfz_clear'],
        subSkill: {
          clear: {
            silent: true,
            charlotte: true,
            trigger: { global: 'dieAfter' },
            forceDie: true,
            filter(event, player) {
              return event.player.hasSkill('duanzhangmrfz_eff1');
            },
            content() {
              for (var i of game.players) {
                if (!i.storage.duanzhangmrfz) continue;
                if (i.storage.duanzhangmrfz.includes(trigger.player)) i.storage.duanzhangmrfz.remove(trigger.player);
              }
            },
          },
          eff1: {
            silent: true,
            charlotte: true,
            trigger: {
              global: ['loseEnd', 'equipEnd', 'addJudgeEnd', 'gainEnd', 'loseAsyncEnd', 'addToExpansionEnd', 'duanzhangmrfzAfter'],
            },
            filter(event, player) {
              return (player.storage.duanzhangmrfz && player.storage.duanzhangmrfz.length > 1) ^ player.hasSkill('duanzhangmrfz_group');
            },
            async content(event, trigger, player) {
              if (player.storage.duanzhangmrfz && player.storage.duanzhangmrfz.length > 1) {
                var cards = [],
                  target = game.findPlayer((current) => {
                    return player.storage.duanzhangmrfz.includes(current);
                  });
                for (var i of target.storage.duanzhangmrfz) {
                  if (i.countCards('h') == 0) continue;
                  if (i == player) continue;
                  for (var j of i.getCards('h')) cards.push(j);
                }
                var cardsx = cards.map((card) => {
                  var cardx = ui.create.card();
                  cardx.init(get.cardInfo(card));
                  cardx._cardid = card.cardid;
                  return cardx;
                });
                if (cardsx.length < 1) return;
                player.directgains(cardsx, null, 'duanzhangmrfz');
                player.addSkill('duanzhangmrfz_group');
              } else player.removeSkill('duanzhangmrfz_group');
            },
          },
          group: {
            charlotte: true,
            group: ['duanzhangmrfz_eff_use', 'duanzhangmrfz_eff_lose'],
            trigger: {
              global: ['addJudgeAfter', 'gainAfter', 'loseAfter', 'loseAsyncAfter', 'cardsDiscardAfter', 'equipAfter'],
            },
            forced: true,
            silent: true,
            filter(event, player) {
              if (event.name == 'gain') return event.cards && event.cards.length;
              var cards = event.getd();
              return cards.length;
            },
            onremove(player) {
              var cards2 = player.getCards('s', (card) => {
                return card.hasGaintag('duanzhangmrfz');
              });
              if (player.isOnline2()) {
                player.send(
                  function (cards, player) {
                    cards.forEach((i) => i.delete());
                    if (player == game.me) ui.updatehl();
                  },
                  cards2,
                  player,
                );
              }
              cards2.forEach((i) => i.delete());
              if (player == game.me) ui.updatehl();
            },
            content() {
              var cards = [];
              var idList = player.getCards('s', (card) => card.hasGaintag('duanzhangmrfz')).map((i) => i._cardid);
              var target = game.findPlayer((current) => {
                return player.storage.duanzhangmrfz.includes(current);
              });
              for (var i of target.storage.duanzhangmrfz) {
                if (i.countCards('h') == 0) continue;
                if (i == player) continue;
                for (var j of i.getCards('h')) {
                  if (idList.includes(j.cardid)) continue;
                  cards.push(j);
                }
              }
              var cards2 = cards.map((card) => {
                var cardx = ui.create.card();
                cardx.init(get.cardInfo(card));
                cardx._cardid = card.cardid;
                return cardx;
              });
              player.directgains(cards2, null, 'duanzhangmrfz');
            },
          },
          eff_use: {
            trigger: {
              player: ['useCardBefore', 'respondBefore'],
            },
            charlotte: true,
            forced: true,
            popup: false,
            firstDo: true,
            filter(event, player) {
              var cards = player.getCards('s', (card) => card.hasGaintag('duanzhangmrfz') && card._cardid);
              return (
                event.cards &&
                event.cards.some((card) => {
                  return cards.includes(card);
                })
              );
            },
            content() {
              var idList = player.getCards('s', (card) => card.hasGaintag('duanzhangmrfz')).map((i) => i._cardid);
              var cards = [];
              var target = game.findPlayer((current) => {
                return player.storage.duanzhangmrfz.includes(current);
              });
              for (var i of target.storage.duanzhangmrfz) {
                if (i.countCards('h') == 0) continue;
                if (i == player) continue;
                for (var j of i.getCards('h')) {
                  if (!idList.includes(j.cardid)) continue;
                  cards.push(j);
                }
              }
              var cards2 = [];
              for (var card of trigger.cards) {
                var cardx = cards.find((cardx) => cardx.cardid == card._cardid);
                if (cardx) cards2.push(cardx);
              }
              var cards3 = trigger.cards.slice();
              trigger.cards = cards2;
              trigger.card.cards = cards2;
              if (player.isOnline2()) {
                player.send(
                  function (cards, player) {
                    cards.forEach((i) => i.delete());
                    if (player == game.me) ui.updatehl();
                  },
                  cards3,
                  player,
                );
              }
              cards3.forEach((i) => i.delete());
              if (player == game.me) ui.updatehl();
            },
          },
          eff_lose: {
            trigger: {
              global: ['loseEnd', 'equipEnd', 'addJudgeEnd', 'gainEnd', 'loseAsyncEnd', 'addToExpansionEnd', 'cardsGotoOrderingBegin'],
            },
            charlotte: true,
            forced: true,
            popup: false,
            firstDo: true,
            filter(event, player) {
              var idList = player.getCards('s', (card) => card.hasGaintag('duanzhangmrfz')).map((i) => i._cardid);
              return (
                event.cards &&
                event.cards.some((card) => {
                  return idList.includes(card.cardid);
                })
              );
            },
            content() {
              var cards2;
              var idList = [];
              var target = game.findPlayer((current) => {
                return player.storage.duanzhangmrfz.includes(current);
              });
              for (var i of target.storage.duanzhangmrfz) {
                if (i.countCards('h') == 0) continue;
                if (i == player) continue;
                for (var j of i.getCards('h')) {
                  idList.add(j.cardid);
                }
              }
              cards2 = player.getCards('s', (card) => {
                return card.hasGaintag('duanzhangmrfz') && !idList.includes(card._cardid);
              });
              if (player.isOnline2()) {
                player.send(
                  function (cards, player) {
                    cards.forEach((i) => i.delete());
                    if (player == game.me) ui.updatehl();
                  },
                  cards2,
                  player,
                );
              }
              cards2.forEach((i) => i.delete());
              if (player == game.me) ui.updatehl();
            },
          },
        },
      },
      chenaimrfz: {
        audio: 2,
        trigger: {
          player: ['useCardAfter', 'respondAfter'],
        },
        forced: true,
        filter(event, player) {
          if (_status.currentPhase != player) return false;
          if (
            player.getHistory('custom', function (evt) {
              return evt.chenaimrfz_type == get.type2(event.card);
            }).length
          )
            return false;
          return event.cards && event.cards.filterInD().length;
        },
        async content(event, trigger, player) {
          const targets = (
            await player
              .chooseTarget(get.prompt('chenaimrfz'), '将' + get.translation(trigger.cards) + '交给一名其他角色', function (card, player, target) {
                return target != player;
              })
              .set('ai', function (target) {
                if (target.hasJudge('lebu')) return 0;
                let att = get.attitude(_status.event.player, target),
                  name = _status.event.cards[0].name;
                if (att < 3) return 0;
                if (_status.event.player.storage.duanzhangmrfz && _status.event.player.storage.duanzhangmrfz.includes(target) && att > 0) att += 10;
                if (target.hasSkillTag('nogain')) att /= 10;
                if (name === 'sha' && target.hasSha()) att /= 5;
                if (name === 'wuxie' && target.needsToDiscard(_status.event.cards)) att /= 5;
                return att / (1 + get.distance(player, target, 'absolute'));
              })
              .set('cards', trigger.cards)
              .forResult()
          ).targets;
          if (!targets) return;
          targets[0].gain(trigger.cards.filterInD(), 'gain2');
          player.getHistory('custom').push({ chenaimrfz_type: get.type2(trigger.card) });
          if (player.storage.duanzhangmrfz && player.storage.duanzhangmrfz.includes(targets[0])) targets[0].draw();
        },
      },
      canxiangmrfz: {
        mod: {
          targetEnabled(card, player, target) {
            if (get.type(card) == 'delay') {
              return false;
            }
          },
        },
        audio: 2,
        forced: true,
        trigger: { global: 'damageBegin4' },
        filter(event, player) {
          var storage = player.storage.duanzhangmrfz;
          if (event.player != player && (!storage || !storage.includes(event.player))) return false;
          return event.hasNature();
        },
        content() {
          trigger.cancel();
        },
        group: 'canxiangmrfz_die',
        subSkill: {
          die: {
            silent: true,
            charlotte: true,
            trigger: { player: 'dieAfter' },
            firstDo: true,
            forceDie: true,
            content() {
              var storage = player.storage.duanzhangmrfz;
              for (var i of storage) {
                if (!i.storage.duanzhangmrfz) continue;
                if (i.storage.duanzhangmrfz.length <= 2) i.removeSkill('canxiangmrfz_nodelay');
                else i.storage.duanzhangmrfz.remove(player);
              }
            },
          },
          nodelay: {
            mark: true,
            intro: {
              content: '属性伤害无效;无法成为延时锦囊牌的目标',
            },
            mod: {
              targetEnabled(card, player, target) {
                if (get.type(card) == 'delay') {
                  return false;
                }
              },
            },
            ai: {
              nofire: true,
              nothunder: true,
            },
          },
        },
        ai: {
          nofire: true,
          nothunder: true,
        },
      },
      // 新多萝西
      newgongzhenmrfz: {
        mod: {
          aiOrder(player, card, num) {
            if (typeof card == 'object' && player.isPhaseUsing()) {
              var history = player.getAllHistory('useCard');
              if (history.length < 1) return num;
              var cardx = history[history.length - 1].card;
              if (cardx && get.type2(cardx) == get.type2(card)) {
                return num + 10;
              }
            }
          },
        },
        audio: 'gongzhenmrfz',
        trigger: { player: ['useCardEnd', 'respondEnd'] },
        forced: true,
        filter(event, player) {
          return player.getAllHistory(event.name).length > 1;
        },
        async content(event, trigger, player) {
          var history = player.getAllHistory(trigger.name);
          var cardx = history[history.length - 2].card;
          if (!cardx) return;
          if (get.type2(cardx) == get.type2(trigger.card)) {
            var cards = get.cards(2);
            game.cardsGotoOrdering(cards);
            const links = (
              await player
                .chooseCardButton(`【共振】:请选择获得一张牌`, true, cards)
                .set('ai', (button) => {
                  return get.value(button);
                })
                .forResult()
            ).links;
            if (!links) return;
            player.gain(links, 'gain2');
          } else
            player.chooseToDiscard(true, `【共振】:请弃置区域内的一张牌`, 'hej').set('ai', (card) => {
              if (get.position(card) == 'j') return 10;
              return -get.value(card);
            });
        },
      },
      newmengxiangmrfz: {
        getLastDiscard(event, player) {
          var history = player.getAllHistory('lose', (evt) => evt.type && evt.type == 'discard');
          if (history.length < 1) return false;
          var cards = history[history.length - 1].cards;
          if (!cards) return false;
          return cards[cards.length - 1];
        },
        mod: {
          cardUsable(card, player) {
            var cardx = lib.skill.newmengxiangmrfz.getLastDiscard(_status.event, player);
            if (cardx && get.type2(cardx) == get.type2(card)) return Infinity;
          },
          targetInRange(card, player) {
            var cardx = lib.skill.newmengxiangmrfz.getLastDiscard(_status.event, player);
            if (cardx && get.type2(cardx) == get.type2(card)) return true;
          },
        },
        audio: 'mengxiangmrfz',
        forced: true,
        trigger: { player: 'useCardBefore' },
        filter(event, player) {
          var cardx = lib.skill.newmengxiangmrfz.getLastDiscard(_status.event, player);
          if (!cardx) return false;
          return !event.audioed && get.type2(cardx) == get.type2(event.card);
        },
        content() {
          trigger.audioed = true;
        },
      },
      // 新黑键
      newhuangxiangmrfz: {
        audio: 'huangxiangmrfz',
        trigger: {
          player: 'phaseDrawAfter',
        },
        filter(event, player) {
          return player.countCards('h') > 0;
        },
        async cost(event, trigger, player) {
          const result = await player
            .chooseCard([1, 2], '【荒响】:你可以选择两张手牌将其标记为‘残影’')
            .set('ai', (card) => {
              var num = get.value(card);
              if (card.name == 'shan' || card.name == 'wuxie') num += 10;
              if (get.type2(card) == 'equip') num -= 2;
              return num;
            })
            .forResult();
          event.result = result;
        },
        async content(event, trigger, player) {
          var cards = event.cards;
          await player.removeGaintag('newhuangxiangmrfzx');
          for (var i of cards) i.addGaintag('newhuangxiangmrfzx');
        },
        group: 'newhuangxiangmrfz_lose',
        subSkill: {
          lose: {
            audio: 'huangxiangmrfz',
            trigger: {
              player: 'loseAfter',
              global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
            },
            filter(event, player) {
              if (_status.currentPhase == player) return false;
              var evt = event.getl(player);
              if (!evt || !evt.hs || !evt.hs.length) return false;
              if (event.name == 'lose') {
                for (var i in event.gaintag_map) {
                  if (event.gaintag_map[i].includes('newhuangxiangmrfzx')) return true;
                }
                return false;
              }
              return player.hasHistory('lose', function (evt) {
                if (event != evt.parent) return false;
                for (var i in evt.gaintag_map) {
                  if (evt.gaintag_map[i].includes('newhuangxiangmrfzx')) return true;
                }
                return false;
              });
            },
            async cost(event, trigger, player) {
              var list = ['选项一', '选项二', 'cancel2'],
                choicelist = ['令一名你攻击范围内的角色选择弃置一张♠️️牌或受到一点伤害', '你摸一张牌且将此牌标记为‘残影’'];
              if (!game.hasPlayer((current) => current != player && player.inRange(current))) {
                list.remove('选项一');
                choicelist[0] = '<span style="opacity:0.5; ">' + choicelist[0] + '(没有满足条件的角色)</span>';
              }
              const control = (
                await player
                  .chooseControl(list)
                  .set('choiceList', choicelist)
                  .set('prompt', '【荒响】:你可以选择一项')
                  .set('ai', () => {
                    var player = _status.event.player;
                    if (!game.hasPlayer((current) => current != player && player.inRange(current) && get.attitude(player, current) < 0)) return 1;
                    return [0, 1];
                  })
                  .forResult()
              ).control;
              var result = {};
              result.bool = true;
              result.cost_data = control;
              if (control == 'cancel2') result.bool = false;
              event.result = result;
            },
            async content(event, trigger, player) {
              var control = event.cost_data;
              if (control == '选项一') {
                const targets = (
                  await player
                    .chooseTarget()
                    .set('forced', true)
                    .set('prompt', '【荒响】:请选择一名攻击范围内的角色')
                    .set('filterTarget', (card, player, target) => {
                      return player != target && player.inRange(target);
                    })
                    .forResult()
                ).targets;
                const bool = (
                  await targets[0]
                    .chooseToDiscard('【荒响】:请弃置一张♠️️牌,否则受到一点伤害', 'he')
                    .set('ai', (card) => {
                      var player = _status.event.player;
                      if (
                        player.hp < 2 &&
                        player.countCards('hes', (card) => {
                          return card.name == 'tao' || card.name == 'jiu';
                        })
                      )
                        return 12 - get.value(card);
                      return 7 - get.value(card);
                    })
                    .set('filterCard', (card) => card.suit == 'spade')
                    .forResult()
                ).bool;
                if (bool) return;
                targets[0].damage();
              } else {
                const { cards } = await player.draw().forResult();
                cards[0].addGaintag('newhuangxiangmrfzx');
              }
            },
          },
        },
      },
      newjiyinmrfz: {
        audio: 'jiyinmrfz',
        forced: true,
        trigger: {
          player: 'useCard2',
        },
        getMeetCondition(event, player, target) {
          let num = 0;
          if (target.isMaxHandcard()) num++;
          if (target.isMaxHp()) num++;
          if (target.isMaxEquip()) num++;
          return num;
        },
        filter(event, player) {
          if (event.card.name != 'sha') return false;
          for (var target of event.targets) {
            let num = lib.skill.newjiyinmrfz.getMeetCondition(event, player, target);
            if (num > 0) return true;
          }
          return false;
        },
        async content(event, trigger, player) {
          let targets = trigger.targets;
          for (var target of targets) {
            let num = lib.skill.newjiyinmrfz.getMeetCondition(event, player, target);
            if (num == 0) continue;
            player.line(target);
            // 加伤
            if (!target.storage.newjiyinmrfz_tmp) target.storage.newjiyinmrfz_tmp = [];
            target.storage.newjiyinmrfz_tmp.push(trigger.card);
            target
              .when({
                player: 'damageBegin3',
                global: 'useCardAfter',
              })
              .filter((event, player) => {
                if (event.name == 'useCard' && player.storage.newjiyinmrfz_tmp.filter((card) => card == event.card).length) return true;
                if (!player.storage.newjiyinmrfz_tmp) return false;
                return event.card && event.card.name == 'sha' && player.storage.newjiyinmrfz_tmp.filter((card) => card == event.card).length;
              })
              .then(() => {
                if (trigger.name == 'damage') {
                  trigger.num += number;
                }
                player.storage.newjiyinmrfz_tmp.remove(trigger.card);
              })
              .vars({ number: num });
          }
        },
        group: 'newjiyinmrfz_sha',
        subSkill: {
          sha: {
            trigger: {
              player: 'useCardToPlayered',
            },
            silent: true,
            filter(event, player) {
              if (event.card.name != 'sha' || event.parent.directHit.includes(event.target)) return false;
              return lib.skill.newjiyinmrfz.getMeetCondition(event, player, event.target) > 0;
            },
            logTarget: 'target',
            content() {
              var id = trigger.target.playerid;
              var map = trigger.parent.customArgs;
              if (!map[id]) map[id] = {};
              if (typeof map[id].shanRequired == 'number') {
                map[id].shanRequired++;
              } else {
                map[id].shanRequired = 1 + lib.skill.newjiyinmrfz.getMeetCondition(event, player, trigger.target);
              }
            },
          },
        },
        ai: {
          directHit_ai: true,
          skillTagFilter(player, tag, arg) {
            let num = lib.skill.newjiyinmrfz.getMeetCondition(_status.event, player, arg.target);
            if (arg.card.name != 'sha' || arg.target.countCards('h', 'shan') > num) return false;
          },
        },
      },
      // 乌尔比安
      piweimrfz: {
        audio: 2,
        trigger: {
          player: 'turnOverAfter',
        },
        filter(event, player) {
          return player.countCards('h') > 0 && player.hasUseTarget('chuqibuyi');
        },
        async cost(event, trigger, player) {
          const result = await player
            .chooseControl('club', 'spade', 'diamond', 'heart', 'cancel2')
            .set('prompt', '你可以将一种颜色的所有手牌当做任意花色且伤害基数为2的【出其不意】使用,若此牌造成伤害,受到伤害的角色依次弃置装备区和手牌区的一张牌.')
            .set('ai', () => {
              var player = get.event('player');
              if (
                !game.hasPlayer((current) => {
                  return current != player && player.canUse('chuqibuyi', current) && get.attitude(current, player) < 0;
                })
              )
                return 'cancel2';
              return lib.suit.randomGet();
            })
            .forResult();
          event.result = {};
          if (result.control === 'cancel2') event.result.bool = false;
          else event.result.bool = true;
          event.result.cost_data = result;
        },
        async content(event, trigger, player) {
          let suit = event.cost_data.control;
          let color = new Set(player.getCards('h').map((i) => get.color(i)));
          const control =
            color.size === 1
              ? player.getCards('h')
              : (
                await player
                  .chooseControl('red', 'black')
                  .set('prompt', '请选择一种颜色')
                  .set('ai', () => {
                    var player = get.event('player'),
                      red = 0,
                      black = 0;
                    for (var i of player.getCards('h', {
                      color: 'red',
                    })) {
                      red += get.value(i);
                    }
                    for (var i of player.getCards('h', {
                      color: 'black',
                    })) {
                      black += get.value(i);
                    }
                    return red > black ? 'black' : 'red';
                  })
                  .forResult()
              ).control;
          player.chooseUseTarget(
            {
              name: 'chuqibuyi',
              suit: suit,
              piweimrfz_chuqi: true,
            },
            typeof control === 'string' ? player.getCards('h', { color: control }) : control,
          );
        },
        group: ['piweimrfz_damage', 'piweimrfz_discard'],
        subSkill: {
          discard: {
            silent: true,
            charlotte: true,
            firstDo: true,
            trigger: { source: 'damageEnd' },
            filter(event, player) {
              return event.player && event.player.isIn() && event.card && event.card.piweimrfz_chuqi == true;
            },
            async content(event, trigger, player) {
              let target = trigger.player;
              target
                .chooseToDiscard(true)
                .set('position', 'he')
                .set('prompt', `【辟纬】:请选择弃置手牌区和装备区的各一张牌`)
                .set('ai', (card) => {
                  var player = get.event('player');
                  return 7 - get.value(card);
                })
                .set('filterCard', (card) => {
                  var player = get.event('player'),
                    cards = ui.selected.cards;
                  if (cards.length == 0) return true;
                  for (var i of cards) {
                    if (get.position(i) == get.position(card)) return false;
                  }
                  return true;
                })
                .set('selectCard', () => {
                  var player = get.event('player'),
                    pos = [];
                  for (var i of player.getCards('he')) {
                    if (get.position(i) == 'h') pos.add('h');
                    else pos.add('e');
                  }
                  return [pos.length, pos.length];
                });
            },
          },
          damage: {
            silent: true,
            charlotte: true,
            firstDo: true,
            trigger: { player: 'useCard' },
            filter(event, player) {
              return event.card && event.card.piweimrfz_chuqi == true;
            },
            content() {
              trigger.baseDamage = 2;
            },
          },
        },
        ai: {
          threaten: 1.2,
        },
      },
      guqianmrfz: {
        audio: 2,
        trigger: {
          global: ['loseAfter', 'loseAsyncAfter'],
        },
        usable: 1,
        filter(event, player) {
          if (event.type != 'discard' || event.position != ui.discardPile || event.player == player) return false;
          var cards = event.getd();
          if (!cards.filter((card) => get.position(card, true) == 'd').length) return false;
          return true;
        },
        prompt2(event, player) {
          return `你可以摸一张牌,若你手牌中没有相同花色的牌,你重置此技能,反之,你将武将牌翻面.`;
        },
        async content(event, trigger, player) {
          await player.draw();
          let suitCards = player.getCards('h').map((card) => card.suit);
          let suitList = new Set(suitCards);
          if (suitCards.length != suitList.size) {
            player.turnOver();
            return;
          }
          delete player.getStat('skill').guqianmrfz;
          if (player.getStat('triggerSkill').guqianmrfz) delete player.getStat('triggerSkill').guqianmrfz;
          game.log(player, '重置了技能', `#g【孤潜】`);
        },
      },
      tongmaimrfz: {
        audio: 2,
        audioname: ['wuerbianmrfz', 'spyoulingshamrfz', 'sikadimrfz', 'geleidiyamrfz'],
        init(player, skill) {
          player.storage[skill] = [];
        },
        trigger: { source: 'damageEnd' },
        filter(event, player) {
          if (Array.isArray(player.storage.tongmaimrfz) && player.storage.tongmaimrfz.length > 1) return false;
          return (
            _status.currentPhase != player &&
            game.hasPlayer((current) => {
              return current.hasClan('深海猎人');
            })
          );
        },
        async cost(event, trigger, player) {
          let prompt2 = `你可以令一名深海猎人的角色回复一点体力或复原武将牌`,
            storage = player.storage.tongmaimrfz;
          if (storage.includes(0)) prompt2 = prompt2.replace('回复一点体力或', '');
          if (storage.includes(1)) prompt2 = prompt2.replace('或复原武将牌', '');
          const result = await player
            .chooseTarget()
            .set('prompt', get.prompt('tongmaimrfz'))
            .set('prompt2', prompt2)
            .set('filterTarget', (card, player, target) => {
              var storage = _status.event.storage;
              if (!target.hasClan('深海猎人') && target != player) return false;
              if (storage.includes(1)) return target.getDamagedHp() > 0;
              return true;
            })
            .set('ai', (target) => {
              var player = get.event('player');
              return get.attitude(target, player) > 0 && (target.getDamagedHp() > 0 || target.isTurnedOver() || target.isLinked());
            })
            .set('storage', storage)
            .forResult();
          event.result = result;
        },
        async content(event, trigger, player) {
          let target = event.targets[0];
          if (!Array.isArray(player.storage.tongmaimrfz)) player.storage.tongmaimrfz = [];
          if (player.storage.tongmaimrfz.includes(0)) {
            target.link(false);
            target.turnOver(false);
            player.storage.tongmaimrfz.add(1);
            return;
          }
          if (player.storage.tongmaimrfz.includes(1)) {
            target.recover();
            player.storage.tongmaimrfz.add(0);
            return;
          }
          if (target.getDamagedHp() == 0) {
            target.link(false);
            target.turnOver(false);
            player.storage.tongmaimrfz.add(1);
            return;
          }
          const index = (
            await player
              .chooseControl()
              .set('choiceList', [`令${get.translation(target)}回复一点体力`, `令${get.translation(target)}复原武将牌`])
              .set('prompt', '请选择一项')
              .set('ai', () => {
                var target = _status.event.targetx,
                  player = get.event('player');
                if (target.isTurnedOver()) return 1;
                return 0;
              })
              .set('targetx', target)
              .forResult()
          ).index;
          if (index === 0) target.recover();
          if (index === 1) {
            target.link(false);
            target.turnOver(false);
          }
          player.storage.tongmaimrfz.add(index);
        },
        group: 'tongmaimrfz_clear',
        subSkill: {
          clear: {
            charlotte: true,
            silent: true,
            lastDo: true,
            trigger: { global: 'roundStart' },
            content() {
              player.storage.tongmaimrfz = [];
            },
          },
        },
      },
      // 新 斯卡蒂
      jingliemrfz: {
        audio: 2,
        trigger: {
          player: 'phaseZhunbeiBegin',
        },
        filter(event, player) {
          return game.hasPlayer((current) => {
            return current != player && current.countCards('h') > 0;
          });
        },
        async cost(event, trigger, player) {
          const result = await player
            .chooseTarget()
            .set('prompt', get.prompt('shulangmrfz'))
            .set('prompt2', `你可以观看一名其他角色的手牌并选择其中一张牌,该角色选择一项:<br>①失去一点体力,令你获得此牌.<br>②令你视为使用此牌,本回合结束阶段你发动一次【鲸猎】.<br>③对你使用一张【杀】,若此杀造成伤害,你翻面,反之执行其他两项.`)
            .set('filterTarget', (card, player, target) => player != target && target.countCards('h') > 0)
            .set('ai', (target) => {
              var player = get.event('player');
              var att = get.attitude(player, target),
                num = 0;
              if (att >= 0) num += 2;
              else num += 5 + target.getDamagedHp();
              return (num += target.countCards('h') / 2);
            })
            .forResult();
          event.result = result;
        },
        async content(event, trigger, player) {
          let target = event.targets[0];
          if (target.countCards('h') == 1) player.viewHandcards(target);
          const links = (
            await player
              .choosePlayerCard(target, true, 'visible')
              .set('prompt', '【鲸猎】:请选择一张牌')
              .set('position', 'h')
              .set('ai', (button) => {
                var player = get.event('player'),
                  num = get.value(button);
                if (player.hasUseTarget(button, false)) num += 10;
                if (get.tag(button, 'damage')) num += 2;
                if (get.type2(button) == 'equip') num -= 10;
                return num;
              })
              .forResult()
          ).links;
          if (!links) return;
          let choiceList = [`失去一点体力,令${get.translation(player)}获得${get.translation(links[0])}`, `令${get.translation(player)}视为使用${get.translation(links[0])},若此牌不能被${get.translation(player)}使用,则改为摸一张牌,本回合结束阶段时${get.translation(player)}发动一次【鲸猎】`, `对${get.translation(player)}使用一张【杀】,若此杀造成伤害,${get.translation(player)}翻面,反之执行其他两项`],
            list = ['选项一', '选项二'];
          if (target.hasSha() && target.canUse({ name: 'sha' }, player, false)) list.push('选项三');
          else choiceList[2] = '<span style="opacity:0.5">' + choiceList[2] + '(没有或无法使用【杀】)' + '</span>';
          const index = (
            await target
              .chooseControl(list)
              .set('choiceList', choiceList)
              .set('ai', () => {
                var player = get.event('player'),
                  target = _status.event.targetx,
                  list = _status.event.list,
                  card = _status.event.cardx;
                if (get.attitude(player, target) > 0) return 1;
                else {
                  if (!target.hasUseTarget(card, false)) return 1;
                  if (
                    list.length > 2 &&
                    target.mayHaveShan(
                      player,
                      'use',
                      target.getCards('h', (i) => {
                        return i.hasGaintag('sha_notshan');
                      }),
                    ) &&
                    Math.random() > 0.5
                  ) {
                    for (var i of player.getCards('h', 'sha')) {
                      if (get.effect(target, i, player, player) > 0) return 2;
                    }
                  }
                  if (player.hp == 1) return 1;
                  return 0;
                }
              })
              .set('targetx', player)
              .set('list', list)
              .set('cardx', links[0])
              .forResult()
          ).index;
          if (typeof index !== 'number') return;
          var next = game.createEvent('jingliemrfz_after');
          next.player = player;
          next.target_jingliemrfz = target;
          next.card_jingliemrfz = links[0];
          next.setContent(lib.skill.jingliemrfz[`index_${index}`]);
        },
        async index_0(event, trigger, player) {
          let target = event.target_jingliemrfz,
            card = event.card_jingliemrfz;
          await player.gain(card, 'gain2');
          target.loseHp();
        },
        async index_1(event, trigger, player) {
          let target = event.target_jingliemrfz,
            card = event.card_jingliemrfz;
          if (player.hasUseTarget(card, false))
            player.chooseUseTarget(
              {
                name: card.name,
                suit: card.suit,
                number: card.number,
              },
              false,
            );
          else player.draw();
          player
            .when('phaseJieshuBegin')
            .then(() => {
              if (player.hasSkill('jingliemrfz_ban') || !game.hasPlayer((current) => lib.skill.jingliemrfz.filter(event, player))) return;
              player.addTempSkill('jingliemrfz_ban', 'phaseJieshuEnd');
              player
                .chooseTarget()
                .set('prompt', get.prompt('jingliemrfz'))
                .set('prompt2', `你可以观看一名其他角色的手牌并选择其中一张牌,该角色选择一项:<br>①失去一点体力,令你获得此牌.<br>②令你视为使用此牌,本回合结束阶段你发动一次【鲸猎】.<br>③对你使用一张【杀】,若此杀造成伤害,你翻面,反之执行其他两项.`)
                .set('filterTarget', (card, player, target) => player != target && target.countCards('h') > 0)
                .set('ai', (target) => {
                  var player = get.event('player');
                  var att = get.attitude(player, target),
                    num = 0;
                  if (att >= 0) num += 2;
                  else num += 5 + target.getDamagedHp();
                  return (num += target.countCards('h') / 2);
                });
            })
            .then(() => {
              if (result.targets?.length) {
                var target = result.targets[0];
                var next = game.createEvent('jingliemrfz_phaseJieshu');
                next.player = player;
                next.targets = result.targets;
                next.setContent(lib.skill.jingliemrfz.content);
              }
            });
        },
        async index_2(event, trigger, player) {
          let target = event.target_jingliemrfz,
            card = event.card_jingliemrfz;
          await target
            .chooseToUse(
              function (card, player, event) {
                if (card.name != 'sha') return false;
                return true;
              },
              '【鲸猎】:对' + get.translation(player) + '使用一张杀',
            )
            .set('forced', true)
            .set('targetRequired', true)
            .set('complexSelect', true)
            .set('filterTarget', function (card, player, target) {
              if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
              return player.canUse({ name: 'sha' }, target, false);
            })
            .set('sourcex', player);
          if (
            target.hasHistory('useCard', (evt) => {
              return evt.getParent(2) == event && target.hasHistory('sourceDamage', (evtx) => evt.card == evtx.card);
            })
          )
            player.turnOver();
          else {
            for (var i = 0; i < 2; i++) {
              var next = game.createEvent('jingliemrfz_noDamage');
              next.player = player;
              next.target_jingliemrfz = target;
              next.card_jingliemrfz = card;
              next.setContent(lib.skill.jingliemrfz[`index_${i}`]);
            }
          }
        },
        subSkill: {
          ban: {
            charlotte: true,
          },
        },
      },
      shulangmrfz: {
        audio: 'zhangenmrfz',
        trigger: {
          target: 'useCardToTargeted',
        },
        filter(event, player) {
          return event.card && event.card.name == 'sha' && player.hasSha() && lib.filter.targetEnabled({ name: 'sha' }, player, event.player);
        },
        check(event, player) {
          for (var i of player.getCards('hes', 'sha')) {
            if (get.effect(event.player, i, player, player) > 0 && get.attitude(player, event.player) < 0) {
              return true;
            } //QQQ
          }
          return false;
        },
        prompt2(event, player) {
          return '你可以对' + get.translation(event.player) + '使用一张杀';
        },
        async content(event, trigger, player) {
          const result = await player
            .chooseToUse(function (card, player, event) {
              if (card.name != 'sha') return false;
              return true;
            }, '请使用一张【杀】')
            .set('forced', true)
            .set('targetRequired', true)
            .set('complexSelect', true)
            .set('shulangmrfz_card', true)
            .set('filterTarget', function (card, player, target) {
              if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
              return player.canUse({ name: 'sha' }, target, false);
            })
            .set('sourcex', trigger.player)
            .forResult();
          if (
            player.hasHistory('useCard', (evt) => {
              return (
                evt &&
                evt.card &&
                evt.name == 'useCard' &&
                player.hasHistory('sourceDamage', (evtx) => {
                  return evt.card == evtx.card;
                })
              );
            })
          ) {
            trigger.parent.excluded.addArray(trigger.targets);
            if (trigger.player.countGainableCards(player, 'he')) player.gainPlayerCard('he', trigger.player, true).set('target', trigger.player).set('complexSelect', false).set('ai', lib.card.shunshou.ai.button);
          }
        },
        group: 'shulangmrfz_need',
        subSkill: {
          need: {
            trigger: { player: 'useCardToPlayered' },
            filter(event, player) {
              return event.getParent(3).name == 'shulangmrfz' && event.card && event.card.name == 'sha';
            },
            silent: true,
            async content(event, trigger, player) {
              const id = trigger.target.playerid;
              const map = trigger.parent.customArgs;
              if (!map[id]) map[id] = {};
              if (typeof map[id].shanRequired == 'number') {
                map[id].shanRequired++;
              } else {
                map[id].shanRequired = 2;
              }
            },
          },
        },
      },
      // 新 歌蕾蒂娅
      quliemrfz: {
        intro: {
          markcount: 'expansion',
          mark(dialog, storage, player) {
            var cards = player.getExpansions('quliemrfz');
            if (player.isUnderControl(true)) dialog.addAuto(cards);
            else return `共有${get.cnNumber(cards.length)}张牌`;
          },
        },
        onremove(player) {
          game.countPlayer((current) => {
            var cards = current.getExpansions('quliemrfz');
            if (cards) current.loseToDiscardpile(cards);
          });
        },
        audio: 'ronghangmrfz',
        trigger: { player: 'useCard' },
        filter(event, player) {
          return (
            get.tag(event.card, 'damage') &&
            game.hasPlayer((current) => {
              return current != player && !current.hasMark('quliemrfz_eff');
            })
          );
        },
        check(event, player) {
          return game.hasPlayer((current) => {
            return current != player && !current.hasMark('quliemrfz_eff') && get.attitude(player, current) < 0;
          });
        },
        prompt2: '当你使用带有伤害类标签的牌时,你可以令其他角色若在此牌结算完成前使用或打出牌后,其须将一半(向上取整)的牌置于武将牌上',
        async content(event, trigger, player) {
          game.countPlayer((current) => {
            if (current == player) return;
            current.addMark('quliemrfz_eff', 1, false);
          });
          if (!player.storage.newxunxiangmrfz) player.storage.newxunxiangmrfz = [];
          player.storage.newxunxiangmrfz.add(trigger.card);
          player
            .when('useCardAfter')
            .filter((event, player) => {
              return player.storage.newxunxiangmrfz.includes(event.card);
            })
            .then(() => {
              game.countPlayer((current) => {
                current.removeMark('quliemrfz_eff', 1, false);
              });
              player.storage.newxunxiangmrfz.remove(trigger.card);
            })
            .assign({ lastDo: true });
        },
        group: ['quliemrfz_eff', 'quliemrfz_die'],
        subSkill: {
          die: {
            charlotte: true,
            silent: true,
            trigger: { global: 'dieAfter' },
            forceDie: true,
            filter(event, player) {
              return event.player.getExpansions('quliemrfz').length;
            },
            content() {
              trigger.player.loseToDiscardpile(trigger.player.getExpansions('quliemrfz'));
            },
          },
          eff: {
            charlotte: true,
            silent: true,
            firstDo: true,
            trigger: {
              global: ['useCardAfter', 'respondAfter', 'phaseZhunbeiBegin'],
            },
            filter(event, player) {
              if (event.name == 'phaseZhunbei') {
                return event.player.getExpansions('quliemrfz').length;
              } else return event.player.countCards('h') > 0 && event.player != player && event.player.hasMark('quliemrfz_eff');
              return false;
            },
            async content(event, trigger, player) {
              if (trigger.name == 'phaseZhunbei') {
                var current = trigger.player;
                var cards = current.getExpansions('quliemrfz');
                const links =
                  new Set(cards.map((i) => get.type2(i, current))).size == 1
                    ? []
                    : (
                      await current
                        .chooseCardButton(cards)
                        .set('prompt', `请选择至少两张不同类型的牌`)
                        .set('selectButton', [2, Infinity])
                        .set('filterButton', (button) => {
                          var player = get.event('player'),
                            cards = ui.selected.buttons;
                          return !cards.some((cardx) => get.type2(cardx, player) == get.type2(button, player));
                        })
                        .set('ai', (button) => {
                          return get.value(button.link, _status.event.player);
                        })
                        .forResult()
                    ).links;
                if (links.length) {
                  current.gain(links, 'draw');
                  game.log(current, '收回了' + get.cnNumber(links.length) + '因【驱猎】而置于武将牌上的张牌');
                }
                if (cards.length != links.length) current.discard(cards.removeArray(links));
                current.unmarkSkill('quliemrfz');
              } else {
                let current = trigger.player;
                var num = Math.ceil(current.countCards('h') / 2);
                const { cards } = await current
                  .chooseCard(true)
                  .set('prompt', `请选择${get.cnNumber(num, false)}张牌`)
                  .set('selectCard', num)
                  .set('ai', (card) => {
                    var player = get.event('player');
                    return 6 - get.value(card);
                  })
                  .forResult();
                current.addToExpansion(cards, 'giveAuto', current).gaintag.add('quliemrfz');
                current.markSkill('quliemrfz');
              }
            },
          },
        },
      },
      newxunxiangmrfz: {
        audio: 'xunxiangmrfz',
        trigger: {
          global: 'phaseJieshuBegin',
        },
        filter(event, player) {
          var cards = lib.skill.zheqimrfz_eff2.getDiscard(event);
          return cards.length && player.canCompare(event.player);
        },
        prompt2(event, player) {
          return `你可以与${get.translation(event.player)}进行拼点,若你赢,你获得其本回合因弃置而进入弃牌堆的不同类型的牌各一张,并将拼点牌当雷【杀】对其使用`;
        },
        check(event, player) {
          return get.attitude(player, event.player) < 0;
        },
        async content(event, trigger, player) {
          const result = await player.chooseToCompare(trigger.player).forResult();
          if (result.bool) {
            var discards = lib.skill.zheqimrfz_eff2.getDiscard(trigger);
            const links =
              new Set(discards.map((i) => get.type(i))).size <= 1
                ? discards
                : (
                  await player
                    .chooseCardButton(discards)
                    .set('prompt', `请选择不同类型的牌`)
                    .set('selectButton', [0, Infinity])
                    .set('filterButton', (button) => {
                      var player = get.event('player'),
                        cards = ui.selected.buttons;
                      return !cards.some((cardx) => get.type(cardx, player) == get.type(button, player));
                    })
                    .set('ai', (button) => {
                      return get.value(button.link, _status.event.player);
                    })
                    .forResult()
                ).links;
            if (links) player.gain(links, 'gain2');
            var cards = [result.player, result.target];
            cards = cards.filter((i) => get.position(i) == 'd');
            if (
              cards.length &&
              player.canUse(
                {
                  name: 'sha',
                  cards: cards,
                  nature: 'thunder',
                },
                trigger.player,
                false,
              )
            ) {
              player.useCard({ name: 'sha', nature: 'thunder' }, cards, trigger.player);
            }
          }
        },
      },
      xueshuomrfz: {
        audio: 2,
        trigger: {
          source: 'damageBegin3',
        },
        filter(event, player) {
          return player.countCards('h') >= event.player.countCards('h');
        },
        prompt2(event, player) {
          return `你可以令${get.translation(event.player)}额外受到1点伤害`;
        },
        check(event, player) {
          return get.attitude(player, event.player) < 0;
        },
        content() {
          trigger.num++;
        },
      },
      // 妮芙
      xunxinmrfz: {
        audio: 2,
        enable: 'phaseUse',
        usable: 1,
        filter(event, player) {
          return game.hasPlayer((current) => {
            return !current.hasCard((card) => get.is.shownCard(card), 'h') && current.countCards('h') > 0;
          });
        },
        filterTarget(card, player, target) {
          return !target.hasCard((card) => get.is.shownCard(card), 'h') && target.countCards('h') > 0;
        },
        prompt: '【巡心】:请选择一名没有明置牌的角色',
        async content(event, trigger, player) {
          const target = event.targets[0];
          const { cards } = await player
            .choosePlayerCard('h', target)
            .set('prompt', `请选择明置${get.translation(target)}一张手牌`)
            .set('visible', true)
            .set('filterButton', (button) => {
              return !get.is.shownCard(button);
            })
            .set('ai', (button) => {
              let target = get.event('target'),
                player = get.player();
              let value = get.value(button);
              if (get.attitude(player, target) < 0) {
                let value = get.value(button);
                return target.hasUseTarget(button) ? value - 10 : value;
              }
              return value;
            })
            .set('target', target)
            .forResult();
          if (!cards) return;
          await target.addShownCards(cards, 'visible_xunxinmrfz');
          let showncards = [];
          for (let char of game.players) {
            let shown = char.getCards('h', (card) => get.is.shownCard(card));
            if (shown) showncards.push(...shown);
          }
          let setShown = new Set(showncards.map((i) => get.type2(i)));
          let hasTarget = game.hasPlayer((current) => {
            return !current.hasCard((card) => get.is.shownCard(card), 'h') && current.countCards('h') > 0;
          });
          if (setShown.size === showncards.map((i) => get.type2(i)).length && hasTarget) {
            const targets = (
              await player
                .chooseTarget()
                .set('prompt', `【巡心】:请选择一名没有明置牌的角色`)
                .set('ai', (target) => {
                  let player = get.player();
                  return get.attitude(player, target) < 0;
                })
                .set('filterTarget', function (card, player, target) {
                  return !target.hasCard((card) => get.is.shownCard(card), 'h') && target.countCards('h') > 0;
                })
                .forResult()
            ).targets;
            if (!targets) return;
            var next = game.createEvent('xunxinmrfz_cycle');
            next.player = player;
            next.target = targets[0];
            next.targets = targets;
            next.setContent(lib.skill.xunxinmrfz.content);
          }
        },
      },
      chixinmrfz: {
        audio: 2,
        global: 'chixinmrfz_eff',
        subSkill: {
          eff: {
            forced: true,
            silent: true,
            charlotte: true,
            mod: {
              aiOrder(player, card, num) {
                if (!player.hasCard((card) => get.is.shownCard(card), 'h')) return;
                if (!get.is.shownCard(card)) {
                  let shown = player.getCards('h', (card) => get.is.shownCard(card));
                  if (shown.length > 1) return num - 10;
                  return num + get.value({ name: card.name }) - get.value(shown[0]);
                }
                if (card.name == 'sha' && player.getCardUsable('sha') < 2) return num + 10;
                if (card.name == 'tao' && player.getDamagedHp() == 1) return num + 10;
                if (card.name == 'jiu' && player.getCardUsable('jiu') < 2 && player.isPhaseUsing()) return num + 10;
                if (card.name == 'wuxie') return num + 10;
              },
              cardname(card, player, name) {
                let shown = player.getCards('h', (card) => get.is.shownCard(card));
                if (shown && shown.length == 1 && lib.card[shown[0].name].type != 'equip') {
                  return shown[0].name;
                } else if (shown && (shown.length > 1 || (shown.length == 1 && lib.card[shown[0].name].type == 'equip'))) {
                  return 'wuxie';
                }
              },
            },
          },
        },
      },
      kuixinmrfz: {
        audio: 2,
        trigger: {
          source: 'damageEnd',
        },
        filter(event, player) {
          return event.player != player && event.player.isIn() && event.player.countCards('h') > 0;
        },
        prompt2(event, player) {
          let tran = get.translation(event.player);
          return `是否令${tran}所有的[明置/暗置]牌[暗置/明置],${tran}弃置两张暗置的牌？`;
        },
        check(event, player) {
          return get.attitude(event.player, player) < 0;
        },
        async content(event, trigger, player) {
          const target = trigger.player;
          for (let card of target.getCards('h')) {
            if (get.is.shownCard(card)) target.hideShownCards(card);
            else target.addShownCards(card, 'visible_xunxinmrfz');
          }
          let { promise, resolve } = Promise.withResolvers();
          setTimeout(() => {
            resolve();
          }, 10);
          await promise;
          if (target.countCards('h', (card) => !get.is.shownCard(card)) > 0) {
            target
              .chooseToDiscard(true, 2)
              .set('prompt', `【溃心】:请弃置两张暗置的牌`)
              .set('filterCard', (card) => !get.is.shownCard(card))
              .set('ai', (card) => get.value({ name: card.name }));
          }
        },
      },
    },
    translate: {
      //角色翻译
      ailinimrfz: '艾丽妮',
      hongxuemrfz: '鸿雪',
      xiaoyangmrfz: '艾雅法拉',
      yinhuimrfz: '银灰',
      lingzhimrfz: '灵知',
      liumingmrfz: '流明',
      chizuimrfz: '斥罪',
      niyanmrfz: '泥岩',
      chengshanmrfz: '澄闪',
      wmrfz: 'W',
      spsikadimrfz: '浊心斯卡蒂',
      spsikadimrfz_prefix: '浊心',
      sikadimrfz: '斯卡蒂',
      spdegoumrfz: '缄默德克萨斯',
      spdegoumrfz_prefix: '缄默',
      maennamrfz: '玛恩纳',
      splinguangmrfz: '耀骑士临光',
      splinguangmrfz_prefix: '耀骑士',
      kaierximrfz: '凯尔希',
      shanmrfz: '山',
      geleidiyamrfz: '歌蕾蒂娅',
      chenmrfz: '陈',
      xingxiongmrfz: '星熊',
      kanielianmrfz: '卡涅利安',
      kuiyingmrfz: '傀影',
      mositimamrfz: '莫斯提马',
      keebomrfz: '刻俄柏',
      feiyameitamrfz: '菲亚梅塔',
      jicimrfz: '棘刺',
      yeyingmrfz: '夜莺',
      helagemrfz: '赫拉格',
      wendimrfz: '温蒂',
      senranmrfz: '森蚺',
      senrantieyumrfz: '<font color=' + mrfzfuc.getRandomColor() + '>' + ['浪人', '帝王', '强力', '离子', '军团', '烈焰', '先锋'].randomGet() + '</font>森蚺',
      ashmrfz: 'ASH',
      kamimrfz: '异客',
      nianmrfz: '年',
      lingmrfz: '令',
      fengdimrfz: '风笛',
      qinliumrfz: '琴柳',
      laolimrfz: '老鲤',
      amrfz: '阿',
      heimrfz: '黑',
      chongyuemrfz: '重岳',
      anjielinamrfz: '安洁莉娜',
      haojiaomrfz: '号角',
      yanweimrfz: '焰尾',
      xigymrfz: '夕',
      nengtianshimrfz: '能天使',
      yuanyamrfz: '远牙',
      midiexiangmrfz: '迷迭香',
      spzzxpmrfz: '假日威龙陈',
      spzzxpmrfz_prefix: '假日威龙',
      shuiyuemrfz: '水月',
      qiubaimrfz: '仇白',
      spyoulingshamrfz: '归溟幽灵鲨',
      spyoulingshamrfz_prefix: '归溟',
      baitiemrfz: '白铁',
      weinamrfz: '推进之王',
      siyemrfz: '伺夜',
      spjiaweiermrfz: '百炼嘉维尔',
      spjiaweiermrfz_prefix: '百炼',
      semrfz: '史尔特尔',
      linmrfz: '林',
      duoluoximrfz: '多萝西',
      kongxianmrfz: '空弦',
      spyedaomrfz: '麒麟R夜刀',
      yineisimrfz: '伊内丝',
      miumiumrfz: '缪尔赛思',
      heijianmrfz: '黑键',
      yifulitemrfz: '伊芙利特',
      sphemomrfz: '淬羽赫默',
      sphemomrfz_prefix: '淬羽',
      saileiyamrfz: '塞雷娅',
      spweicaomrfz: '焰影苇草',
      spweicaomrfz_prefix: '焰影',
      huoerhaiyamrfz: '霍尔海雅',
      huangmrfz: '煌',
      linglanmrfz: '铃兰',
      shanlingmrfz: '闪灵',
      maizhelunmrfz: '麦哲伦',
      cuoemrfz: '嵯峨',
      palasimrfz: '帕拉斯',
      xiaguangmrfz: '瑕光',
      zaolumrfz: '早露',
      spshihuaiyamrfz: '琳琅诗怀雅',
      spshihuaiyamrfz_prefix: '琳琅',
      spsongzangrenmrfz: '圣约送葬人',
      spsongzangrenmrfz_prefix: '圣约',
      spjiexikamrfz: '涤火杰西卡',
      spjiexikamrfz_prefix: '涤火',
      tifengmrfz: '提丰',
      spxiaoyanmrfz: '纯烬艾雅法拉',
      spxiaoyanmrfz_prefix: '纯烬',
      suxinmrfz: '塑心',
      hedeleimrfz: '赫德雷',
      zhisongmrfz: '止颂',
      weiweiannamrfz: '薇薇安娜',
      laiyimrfz: '莱伊',
      shumrfz: '黍',
      zuolemrfz: '左乐',
      jianmrfz: '锏',
      elamrfz: '艾拉',
      asikalunmrfz: '阿斯卡纶',
      luogesimrfz: '逻格斯',
      weishidaiermrfz: '维什戴尔',
      mowangmrfz: '魔王',
      wuerbianmrfz: '乌尔比安',
      nifumrfz: '妮芙',
      //杂七杂八
      shixingmrfz_trick_backup: '逍遥', //令
      //技能翻译
      zhidengmrfz: '执灯',
      zhidengmrfz_info: '准备阶段,你可以令至多X名体力值不大于你的角色摸一张牌,你摸一张牌.(X=你的体力值)',
      shenpanmrfz: '审判',
      shenpanmrfz_info: '出牌阶段限一次,你可以与一名其他角色拼点,若你赢,则①本回合当其成为你使用的牌的目标时,其需弃置一张牌,当此牌进入弃牌堆时,你获得之;②本回合你与其的距离视为1.',
      shenpanmrfz2: '审判',
      shenpanmrfz2_info: '',
      shenpanmrfz3: '审判',
      shenpanmrfz3_info: '',
      liechaomrfz: '裂潮',
      liechaomrfz_info: '当你造成伤害时,若其没有牌,则你可以令此伤害+1.',
      zhidengmrfz2: '执灯',
      zhidengmrfz2_info: '',
      ruibimrfz: '锐笔',
      ruibimrfz_info: '锁定技,游戏开始时,你将【打字机】置入你的装备区;出牌阶段限一次,若你的装备区没有【打字机】,你可以弃置一张牌,将【打字机】置入你的装备区.',
      dazijimrfzskill: '打字机',
      dazijimrfzskill_info: '当你使用【杀】指定目标时,你可以令此【杀】结算两次.(此装备离开你的装备区时,销毁之)',
      ruibimrfz2: '锐笔',
      ruibimrfz2_info: '',
      sujimrfz: '速记',
      sujimrfz_info: '锁定技,出牌阶段,当你使用的【杀】对一名其他角色造成伤害后,你获得以下效果:1.你使用的【杀】无视该角色的防具;2.每回合限一次,当你使用的【杀】指定其为目标后,此杀伤害+1.',
      sujimrfz2: '速记',
      sujimrfz2_info: '',
      sujimrfz_damage: '速记',
      sujimrfz_damage_info: '',
      dazijimrfzskill2: '打字机',
      dazijimrfzskill2_info: '',
      sujimrfz_ban: '速记',
      sujimrfz_ban_info: '',
      cuofengmrfz: '挫奋',
      cuofengmrfz_info: '本局游戏限X次,当你受到伤害时,你可以弃置一张牌,你选择令你摸牌阶段额外摸一张牌或结束阶段摸一张牌.(X=你的体力上限-1)',
      cuofengmrfz_mark1: '挫奋',
      cuofengmrfz_mark1_info: '摸牌',
      cuofengmrfz_mark2: '挫奋',
      cuofengmrfz_mark2_info: '结束',
      chengzhimrfz: '承志',
      chengzhimrfz_info: '觉醒技,准备阶段,若你发动<挫奋>的次数等于你的体力上限-1,则你减少一点体力上限并获得<逐志>.',
      zhuzhimrfz: '逐志',
      zhuzhimrfz_info: '准备阶段,你可以受到一点火焰伤害(若体力值为1则改为弃置一张牌)并摸X/2(向下取整)张牌,本回合你获得以下效果:①手牌上限+X;②你使用【杀】次数的基数改为X.(X=你发动<挫奋>的次数)',
      zhuzhimrfz_mark: '逐志',
      zhuzhimrfz_mark_info: '',
      moucunmrfz: '谋存',
      yingshimrfz: '鹰视',
      moucunmrfz_info: '每轮开始时,你可以选择一名与你势力不同的角色,你须交给其一至两张牌,本轮当其出牌阶段结束时,你摸X张牌,若其使用了三种类型的牌,则你令【鹰视】中的X+1(X=其本回合使用的牌的类型数+你本轮交给该角色的牌的数量)',
      yingshimrfz_info: '出牌阶段限一次,你可以观看一名角色的手牌,你获得其中的X张牌.(X=0)',
      moucunmrfz2: '谋存',
      moucunmrfz2_info: '',
      moucunmrfz3: '谋存',
      moucunmrfz3_info: '',
      siyongmrfz: '思涌',
      siyongmrfz_info: '锁定技,出牌阶段,当你首次使用某种花色的牌时,你可以获得一名其他角色的一张牌(若除你以外的角色均没有牌,改为你摸一张牌).',
      siyongmrfz2: '思涌',
      siyongmrfz2_info: '',
      yijianmrfz: '毅坚',
      yijianmrfz_info: '锁定技,每回合第一次受到的伤害-1.',
      yijianmrfz2: '毅坚',
      yijianmrfz2_info: '',
      weiguangmrfz: '微光',
      weiguangmrfz_info: '锁定技,拥有<火光>标记的角色获得如下效果:1.摸牌阶段摸牌数、出牌阶段使用【杀】的次数、手牌上限各+1;2.结束阶段,将手牌补至手牌上限(至多为5)并失去一个<火光>标记;锁定技,准备阶段,若你没有<火光>标记,你获得一个<火光>标记;出牌阶段限一次,你可以对自己造成一点伤害,令一名角色获得一个<火光>标记,若该角色为你,你流失一点体力.',
      weiguangmrfz_mark: '微光',
      weiguangmrfz_mark_info: '',
      weiguangmrfz_losemark: '微光',
      weiguangmrfz_losemark_info: '',
      weiguangmrfz2: '微光',
      weiguangmrfz2_info: '',
      zhidianmrfz: '执典',
      zhidianmrfz_info: '锁定技,每轮开始时,你声明一张牌,若有角色使用了你声明的牌,其需交给你一张牌或流失一点体力,若该角色是你,则改为弃置一张牌(没牌则不弃).',
      zhidianmrfz_use: '执典',
      zhidianmrfz_use_info: '',
      pijimrfz: '披棘',
      pijimrfz_info: '锁定技,当其他角色对你造成伤害时,你对伤害来源造成X点伤害.(X=你已损失体力值,X∈[1,2])',
      tongganmrfz: '同感',
      tongganmrfz_info: '锁定技,每回合每项限三次:①当其他角色从牌堆摸牌后,你摸一张牌;②当其他角色有牌进入弃牌堆后,你弃置一张牌.',
      tonggan_discardmrfz: '同感',
      qinghemrfz: '亲和',
      qinghemrfz_info: '主公技,每回合限一次,当你于回合外因弃置而失去牌时,当前回合角色可以让你获得你弃置的牌中的一张牌.',
      sutumrfz: '塑土',
      sutumrfz_info: '当你使用非转化且非虚拟的牌后,若你的手牌数等于你的当前体力值,你可以视为使用一张基本牌或非延时锦囊牌.',
      wotumrfz: '沃土',
      wotumrfz_info: '每轮限一次,当你使用虚拟牌后,你可以获得一点护甲.',
      dianshanmrfz: '电闪',
      dianshanmrfz_info: '锁定技,转换技,当你成为其他角色使用的黑色牌的目标时,阳:你对一名其他角色造成一点雷属性伤害;阴:你弃置一名其他角色一张牌.',
      shidemrfz: '失得',
      shidemrfz_info: '锁定技,当你使用或打出,或因弃置失去一张牌时,若你的武将牌没有被横置,则横置之,反之重置之;当你武将牌被重置时,你摸一张牌.',
      fukemrfz: '伏客',
      fukemrfz_info: '当你不因【伏客】获得牌时,你可以选择至多X名其他角色并弃置等量的牌,获得这些角色各一张牌.(X=此次获得的牌的数量)',
      zhumengmrfz: '筑梦',
      zhumengmrfz_info: '',
      zhumengmrfz2: '筑梦',
      zhumengmrfz2_info: '',
      zhumengmrfz3: '筑梦',
      zhumengmrfz3_info: '每轮开始时,你可以进行判定,当你本轮前X次使用或打出与判定牌类别一致的牌时,你可以摸一张牌.(X=判定牌的点数)',
      qianximrfz: '迁徙',
      qianximrfz_info: '锁定技,游戏开始时,你至多获得场上武将的两个技能.',
      qianximrfz_ban: '禁止复制武将',
      qianximrfz_ban_info: '可在设置中开启或关闭禁用武将</br>阿米娅、保存者',
      geyaomrfz: '歌谣',
      geyaomrfz_info: '准备阶段,你可以展示牌堆顶一张牌并获得之,根据牌的类别你获得如下效果直到回合结束:1.基本牌:当你使用【杀】指定目标后,你可以观看其手牌并获得与此杀颜色不同的牌;2.锦囊牌:你使用得【杀】不可响应;3.装备牌:你使用的【杀】无距离限制且可指定任意个目标.',
      geyaomrfz_e: '歌谣',
      geyaomrfz_e_info: '',
      geyaomrfz_t: '歌谣',
      geyaomrfz_t_info: '',
      geyaomrfz_b: '歌谣',
      geyaomrfz_b_info: '',
      zhangenmrfz: '斩根',
      zhangenmrfz_info: '出牌阶段,当你使用的【杀】造成伤害后,你可以弃置一张手牌令此杀不计入次数限制.',
      suwangmrfz: '溯往',
      suwangmrfz_info: '锁定技,摸牌阶段,若你上回合没有造成伤害,你的摸牌数-2;准备阶段,你摸6张牌,弃置6-X张牌.(X=当前轮次数且X至多为6)',
      suwangmrfz2: '溯往',
      suwangmrfz2_info: '',
      suwangmrfz3: '溯往',
      suwangmrfz3_info: '',
      xunlumrfz: '寻路',
      xunlumrfz_info: '锁定技,摸牌阶段,你改为随机摸<span class=thundertext>1</span>至6张牌;准备阶段,你将本回合出牌阶段使用【杀】的次数随机改为<span class=firetext>0</span>至5次;你的手牌上限随机改为<span class=greentext>3</span>至8张.当你造成伤害时,你可以令一个有颜色的数字+1.(有颜色的数字的最大值至多为4,且本技能中的随机生成的随机数均符合正态分布)',
      xunlumrfz_rewirte: '寻路·修改',
      xunlumrfz_rewirte_info: '锁定技,摸牌阶段,你改为随机摸<span class=thundertext>1</span>至6张牌;准备阶段,你将本回合出牌阶段使用【杀】的次数随机改为<span class=firetext>0</span>至5次;你的手牌上限随机改为<span class=greentext>3</span>至8张.当你造成伤害时,你可以令一个有颜色的数字+1.(有颜色的数字的最大值至多为4,且本技能中的随机生成的随机数小于区间均值的概率降低)',
      kuanmrfz: '苦暗',
      kuanmrfz_info: '锁定技,游戏开始时,你废除所有装备栏和判定区并摸3张牌<span class=thundertext>;判定阶段,你依次进行【乐不思蜀】和【兵粮寸断】的判定</span>.你可以将装备牌当【杀】、【闪】或【酒】使用或打出,你的装备牌不计入手牌上限.',
      kuanmrfz2: '苦暗',
      kuanmrfz5: '苦暗',
      zhuguangmrfz: '逐光',
      zhuguangmrfz_info: '准备阶段,你可以选择一名角色,视为对其使用【决斗】,当你因此牌对其他角色造成伤害时,你可以防止此伤害,选择一项:①删除【苦暗】描述中蓝色的文字;②修改【逐光】的描述;③摸一张牌.',
      zhuguangmrfz2: '逐光',
      zhuguangmrfz3: '逐光',
      zhuguangmrfz_change: '逐光',
      zhuguangmrfz_rewrite: '逐光·修改',
      zhuguangmrfz_rewrite_info: '准备阶段,你可以选择一名角色,视为对其使用【决斗】且此牌不可被其他角色响应,当你因此牌对其他角色造成伤害时,你可以选择一项:①删除【苦暗】描述中蓝色的文字;②摸两张牌.',
      shuoguangmrfz: '烁光',
      shuoguangmrfz_info: '锁定技,你跳过你的第一个弃牌阶段.',
      yuanlvemrfz: '远略',
      yuanlvemrfz_info: '锁定技,当你不因【远略】从牌堆获得牌时,你改为卜算X,摸X张牌,若此时是摸牌阶段,则令X+1.(X=此次摸牌数)',
      chonggoumrfz: '重构',
      chonggoumrfz_info: '摸牌阶段开始时,若你的手牌数不小于你的体力值<span class=thundertext>且已受伤</span>,你可以弃置所有手牌,回复一点体力,摸X张牌.(X=弃置牌的数量<span class=thundertext>-已损失体力值</span>)',
      yuanshimrfz: '渊识',
      yuanshimrfz_info: '①当你使用你的初始手牌时,若该牌是:基本牌:你可以令此牌不可响应;普通锦囊牌:你可令此牌目标+1/-1;延时锦囊牌或装备牌:你可以摸一张牌.②锁定技,当你失去了你的所有初始手牌时,若你没有发动过【渊识①】,则你令【远略】中的X+1,否则,你删除【重构】描述中的蓝色部分.',
      m3mrfz: 'M3',
      m3mrfz_info: '主公技,限定技,当你进入濒死状态时,你可以弃置区域内所有牌并复原武将牌、失去【重构】、减少一点体力上限,将体力回复至2点,其他所有角色选择是否弃置一张牌并令你摸一张牌.',
      zhuangtimrfz: '壮体',
      zhuangtimrfz_info: '①锁定技,每当你累计造成两点伤害,你增加一点体力上限(体力上限至多为15).②出牌阶段限一次,你可以减少一点体力上限,视为使用一张基本牌或普通锦囊牌.',
      julimrfz: '巨力',
      julimrfz_info: '当你造成伤害时,若该角色的体力值不大于你已损失的体力值,则你可以令此伤害+1,若你的体力上限不小于该角色牌数之和,则你可失去2点体力上限,令此伤害再+1.',
      xunxiangmrfz: '寻相',
      xunxiangmrfz_info: '出牌阶段限一次,你随机声明一种类型的牌,你令所有角色各展示一张手牌,你摸X张牌,若你没有因此摸牌,你选择与一名其他角色各流失一点体力,将此技能于此出牌阶段内修改为出牌阶段限两次.(X=与你声明的牌类型相同的牌)',
      ronghangmrfz: '戎行',
      ronghangmrfz_info: '锁定技,当你使用的带有伤害类标签的牌时,若此牌的牌名字数大于你上一张使用的牌,此牌伤害基数+1,反之,此牌不可响应且不计入次数限制.',
      caiganmrfz: '才干',
      caiganmrfz_info: '当你不因【才干】获得牌时,你可以弃置获得的任意数量的牌,摸等量的牌,若你本回合没有发动过【才干】,则你额外摸一张牌.',
      jingsimrfz: '警司',
      jingsimrfz_info: '当你使用牌时,若你没有使用过该牌名的牌,你可以摸一张牌.',
      banruomrfz: '般若',
      banruomrfz_info: '锁定技,①游戏开始时,你获得以下效果直到你造成了伤害或游戏轮次大于你的体力上限:1.摸牌阶段,你的摸牌数-1;2.当你受到伤害时,你可以取消之;3.你的手牌上限为你的体力上限.②当你首次造成伤害后,你本回合:1.你使用【杀】的次数+1;2.下次造成的伤害+1.',
      banruomrfz2: '般若',
      yizhongmrfz: '义重',
      yizhongmrfz_info: '当一名其他角色受到伤害时,若你至该角色的距离为1,你可以弃置一张牌,令此伤害取消之,你受到等量的伤害,若你因此受到伤害,你可以摸两张牌.',
      shazhenmrfz: '沙阵',
      shazhenmrfz_info: '锁定技,若你本轮没有造成伤害或本轮为第一轮,则你本轮前两次受到的伤害-1且你的手牌上限+2.',
      shacanmrfz: '沙喰',
      shacanmrfz_info: '①你对其他角色造成伤害时,你可以令其获得一个<噬>标记(每名角色至多拥有两个<噬>).②当有<噬>的角色出牌阶段开始时,其选择一项:1.令你观看其两张牌,你获得其中一张牌;2.令你回复一点体力,移除一个<噬>.③锁定技,你对有<噬>的角色造成的伤害不计入【沙阵】;每当你累计获得有<噬>的角色的两张牌时,其移除一个<噬>.',
      shahuanmrfz: '沙环',
      shahuanmrfz_info: '出牌阶段,你可以令一名没有‘噬’标记的其他角色获得一个‘噬’.',
      danweimrfz: '胆威',
      danweimrfz_info: '每回合各限两次,当[①其他角色/②你]响应[①你/②其他角色]使用的牌时,你可以获得其[①响应你牌/②使用]的牌,你获得一个‘胆’标记.',
      hechimrfz: '呵斥',
      hechimrfz_info: "出牌阶段限一次,你可以弃置一张牌或移去一个'胆',选择一名角色,其摸两张牌,其手牌上限-1直到其回合结束,若其不为你,你摸一张牌.",
      jueyingmrfz: '赤霄',
      jueyingmrfz_info: "准备阶段,你可以移去5个'胆',你可以视为使用两张雷【杀】和一张【杀】(无距离限制).",
      newjingsimrfz: '警司',
      newjingsimrfz_info: '主公技,每回合限一次,你的回合外,当其他角色成为【杀】或【决斗】的唯一目标时且使用者不是你,其可以请求将目标转移至你,若你接受,你摸一张牌并获得一个‘胆’.',
      qingyanmrfz: '勤研',
      qingyanmrfz_info: '每轮限一次,出牌阶段结束时,若你于本阶段使用过三种类型的牌,你可以在本回合结束后额外执行一个回合.',
      luanhuomrfz: '乱火',
      luanhuomrfz_info: '①锁定技,你造成的伤害时改为你对其造成等量的火属性伤害;当你受到火属性伤害时,取消之.②准备阶段,你可以选择对X名其他角色造成一点伤害或对一名其他角色造成X点伤害(X=本轮你执行的回合数).',
      xuyingmrfz: '虚影',
      xuyingmrfz_info: '当有♠️️牌因弃置进入弃牌堆后,你可以将其置于你的武将牌上,称为‘影’(影的上限至多为3);当你使用一张基本或非延时锦囊牌时,你可以移去一张与你使用的牌类别不同的‘影’,此牌结算两次.',
      xuegemrfz: '血歌',
      xuegemrfz_info: '当你受到伤害后,你可以你攻击范围内的一名角色造成一点伤害,若该角色体力值不大于你,你可以将一张牌作为‘影’置于武将牌上.',
      huanxiangmrfz: '幻象',
      huanxiangmrfz_info: '当你使用或打出一张【闪】或【无懈可击】结算完成后,你可以摸一张牌.',
      huanshimrfz: '缓时',
      huanshimrfz_info: '回合结束阶段,你可以选择至多X名其他角色,令其每个回合内其使用的第一张【杀】指定目标时,取消之,其获得这张【杀】.(X=本回合因弃置进入弃牌堆的牌的数量)',
      shishimrfz: '时匙',
      shishimrfz_info: '当你于你的出牌阶段或摸牌阶段摸牌时,你可以令此次摸牌数+X,你于弃牌阶段开始时弃X-1张牌.(X=本回合你发动此技能的次数+1)',
      jiemimrfz: '捷敏',
      jiemimrfz_info: '锁定技,你的回合[外/内],当你[成为牌的/使用单一目标的牌指定其他角色为]目标后,若这是你本回合第[偶数/奇数]次[成为/指定其他角色为]目标,你弃置X张手牌,反之,你摸X张牌.(X=本回合此技能发动次数+1)',
      shihuangmrfz: '拾荒',
      shihuangmrfz_info: '每回合限一次,当你的牌因弃置而进入弃牌堆后,若你弃置的牌的点数之和大于你体力值的2倍,你可以获得你弃置的牌.',
      baokemrfz: '剥壳',
      baokemrfz_info: '出牌阶段限一次,当你对一名其他角色造成伤害后,若此次伤害是属性伤害或该角色防具栏不为空,你可以额外对其造成一点伤害.',
      shunanmrfz: '述难',
      shunanmrfz_info: '①锁定技,你的手牌数不小于你的体力值时,你造成的伤害+<span class=thundertext>1</span>且摸牌阶段额外摸<span class=thundertext>1</span>张牌,若你已损失的体力值不大于你体力上限的一半,有颜色的数字翻倍.②结束阶段,若你的体力值大于1,你失去一点体力.',
      nanjiaomrfz: '难交',
      nanjiaomrfz_info: '锁定技,每轮开始时,若你的手牌上限是场上角色中最多的,你的手牌上限-X,场上手牌上限最少或之一的角色手牌上限+X,反之,你的手牌上限+X,场上手牌上限最多的其他角色手牌上限-X.(X=场上手牌上限最多的角色的手牌上限的一半,向下取整;上述效果持续一轮)',
      lvwaimrfz: '律外',
      lvwaimrfz_info: '限定技,出牌阶段,你可以视为使用一张不可响应的杀(无距离限制),你回复X点体力,摸X张牌且本回合【述难②】失效.(X=因此【杀】造成的伤害)',
      chaoshengmrfz: '潮声',
      chaoshengmrfz_info: '结束阶段,若你连续<span class=thundertext>3</span>个回合没有造成过伤害,你可以选择摸两张牌或回复一点体力.</br><span class=thundertext>【潮声●修改】</span>结束阶段,若你连续<span class=thundertext>3</span>个回合没有造成过伤害,你可以摸两张牌并回复一点体力.',
      jianshumrfz: '剑术',
      jianshumrfz_info: '锁定技,每当你使用的牌指定的目标数累计达到5的整数倍时,你依次执行下列选项:①【潮声】中带颜色的数值-1;摸牌阶段摸牌数,【杀】的使用次数和攻击距离各+1.②出牌阶段开始时,你可以视为使用一张【杀】(不计入次数);【杀】的使用次数和攻击距离各+1.③【潮声】中带颜色的数值-1;修改【潮声】',
      qiulongmrfz: '囚笼',
      qiulongmrfz_info: '每轮开始时,你可以选择一名其他角色,令其获得‘笼’标记;锁定技,当有‘笼’的角色受到伤害后,其回复等量体力,你受到等量无伤害来源的伤害并获得两倍伤害值的‘幻’标记.',
      bihumrfz: '庇护',
      bihumrfz_info: '锁定技,当你受到属性伤害时,取消之;当你受到有来源的伤害时,你获得等量的‘幻’.',
      shengyumrfz: '圣域',
      shengyumrfz_info: '每四轮限一次,出牌阶段,你可以选择至多3名角色令其获得【破笼】直到你发动此技能后的第三轮结束,你回复两点体力.',
      polongmrfz: '破笼',
      polongmrfz_info: '你可以按照如下规则使用场上的‘幻’:①出牌阶段限三次,你可以移除一个‘幻’,摸一张牌;②出牌阶段限三次,你可以移除一个‘幻’,回复一点体力;③当你受到伤害时,你可以移除一个‘幻’,令此伤害-1.',
      yingkuimrfz: '盈亏',
      yingkuimrfz_info: '锁定技,你的手牌上限+2;你的【桃】均视为【杀】,你以此法转换的【杀】不可响应.',
      yingkuimrfza: '盈亏',
      cangfengmrfz: '藏锋',
      cangfengmrfz_info: '锁定技,每当你累计造成2点伤害时,你选择回复一点体力或摸一张牌.',
      yuexiangmrfz: '月相',
      yuexiangmrfz_info: '锁定技,根据你已损失的体力值,获得以下效果:①大于等于1:你使用【杀】的次数+X(X=本阶段你使用杀的次数/2+1,向下取整);出牌阶段限一次,你第一次使用【杀】造成的伤害+1;②大于等于2:出牌阶段使用的第一张【杀】结算两次;③大于等于3:出牌阶段你使用的第一张【杀】目标+1;攻击距离+2.',
      danpaomrfz: '氮炮',
      danpaomrfz_info: '整局游戏限两次,出牌阶段限一次,你可以弃置所有的手牌(没有手牌则改为弃置所有的牌),选择一名其他角色并对其造成一点伤害,若你有‘蓄水’标记,则你于此技能结算完毕后移除之,直到其回合结束:其计算与其他角色的距离+<span class=thundertext>2</span>;其每累计使用<span class=firetext>两</span>张牌时,你对其造成一点伤害.',
      shuipaomrfz: '水炮',
      shuipaomrfz_info: '①锁定技,当你不因【氮炮】而对其他角色造成伤害时,直到其回合结束其计算与其他角色的距离+1(不可叠加,若你有‘蓄水’标记,则改为+2).②锁定技,当你你不因【氮炮】而造成伤害时,若你装备区有武器牌,则你本轮获得‘蓄水’标记;当你有‘蓄水’标记时,【氮炮】中蓝色数字翻倍,红色数字-1.',
      jiepimrfz: '洁癖',
      jiepimrfz_info: '锁定技,其他角色不能弃置你装备区的牌;你的回合内,其他角色装备区的牌不能被弃置.',
      juezhanmrfz: '决战',
      juezhanmrfz_info: '锁定技,你的多目标锦囊(【借刀杀人】除外)只能指定一个目标;当你成为其他角色的【杀】的目标时,其获得<单挑>标记直到你的回合结束;[若场上有<单挑>,你/拥有<单挑>的角色]使用牌仅能指定自己或[拥有<单挑>的角色/你]为目标,你与有<单挑>的角色互相视为在其攻击范围内.',
      tieyimrfz: '铁意',
      tieyimrfz_info: '限定技,出牌阶段,你可以弃置至多三张牌并翻面,摸两倍于你弃置的牌的牌,回复两点体力,你可以令一名没有‘单挑’标记的其他角色获得‘单挑’标记,本回合你对有‘单挑’标记的角色使用牌无次数限制,且你于回合结束弃置所有牌.',
      tieyimrfz_append: '<span style="font-family: yuanli">快看,是我方的一名铁驭,我们有救了!</span>',
      shanxiemrfz: '擅械',
      shanxiemrfz_info: '①当其他角色弃置的装备牌进入弃牌堆时,你可以弃置X张牌,获得此牌.(X=本轮此技能发动的次数)②你可以将装备牌视为【杀】使用或打出,当你使用以此法转化的【杀】对有<单挑>的角色造成伤害时,此【杀】伤害+1.',
      wusumrfz: '五速',
      wusumrfz_info: '锁定技,你的准备阶段、判断阶段、摸牌阶段和弃牌阶段均视为出牌阶段;出牌阶段开始时,你摸一张牌.',
      wutoumrfz: '无头',
      wutoumrfz_info: '锁定技,每轮限一次,当你受到伤害时,若此伤害值等于你当前体力值,取消之.',
      baigeimrfz: '白给',
      baigeimrfz_info: '锁定技,出牌阶段结束时,若你已执行了五个出牌阶段,你须将手牌弃置至手牌上限,你弃置两张牌.',
      yushimrfz: '雨势',
      yushimrfz_info: '锁定技,摸牌阶段,你改为摸8-X张牌.(X=当前游戏轮数,X至多为6)',
      laoyingmrfz: '烙印',
      laoyingmrfz_info: '出牌阶段限一次,当你使用的牌造成伤害后,你可以获得此牌,若此牌是基本牌,本回合你使用【杀】的次数+1,反之,本回合你使用的下一张普通锦囊牌不可响应.',
      shazumrfz: '沙卒',
      shazumrfz_info: '①出牌阶段限一次,你可以选择一名有牌的其他角色,你与其同时选择自己的一张牌(其须优先选择装备区的牌)并交互之,手牌较少的角色摸一张牌.②当你受到其他角色造成的伤害时,你可以令其获得‘仇敌’标记(若场上有‘仇敌’标记则改为转移‘仇敌’标记至该角色).',
      dianlianmrfz: '电链',
      dianlianmrfz_info: '当你对其他角色造成伤害后,你可以对与受伤角色距离为1的角色造成X点伤害.(X=此次伤害数-1);每轮限一次,你造成雷属性伤害时,你可以令此伤害+1',
      leibaomrfz: '雷暴',
      leibaomrfz_info: '<span class=firetext>神将会降下神罚处罚冒犯神之人</span></br>出牌阶段限一次,你可以弃置[两张装备牌/一张【闪电】],选择一名除你以外的角色中体力值最高或之一,或有‘仇敌’标记的其他角色并对其造成两点[伤害/雷电伤害].',
      zhujimrfz: '铸极',
      zhujimrfz_info: '摸牌阶段和回合结束阶段结束时,你可以重铸一张牌,若你重铸的是装备牌,你摸一张牌.',
      tongyinmrfz: '铜印',
      tongyinmrfz_info: '每回合限一次,当你受到伤害后,你可以令伤害来源本回合所有非锁定技失效,其需要选择弃置X张基本牌或一张非基本牌.(X=你已损失的体力值,X至少为1)',
      tieyumrfz: '铁御',
      tieyumrfz_info: '每轮限两次,当一名其他角色使用装备牌时,你可以令其回复一点体力(若其已损失体力值为0,则改为获得一点护甲),本轮获得以下效果:使用【杀】的次数+1;受到大于1的伤害时,将此伤害改为1.',
      shixingmrfz: '诗形',
      shixingmrfz_info: '①准备阶段,你可以选择放置至多两张相同类别且与武将牌上已有的牌类别相同的牌于你的武将牌上,或弃置武将牌上因此技能放置的所有牌,选择至多两张相同类别的牌置于武将牌上,根据牌的类型称为:基本牌:"清平";锦囊牌:"逍遥";装备牌:"弦惊",并获得不同的效果:</br><span class=firetext>清平</span>:当你受到伤害时,你可以移去一张‘清平’并令此伤害-1;</br><span class=thundertext>逍遥</span>:出牌阶段,你可以选择一个‘逍遥’并选择一名其他角色,视为对其使用一张不计入次数限制的【杀】,若此【杀】没有造成伤害,你获得你选择的‘逍遥’,反之,你弃置之;</br><span class=greentext>弦惊</span>:1个‘弦惊’:手牌上限+2;2个‘弦惊’:使用【杀】的次数和摸牌阶段摸牌数+2.</br>(‘清平’、‘弦惊’和‘逍遥’标记数量均最多为2)</br>②锁定技,当你移去最后一张[‘清平’/‘逍遥’/‘弦惊’]时,你[从牌堆中获得一张基本牌/回复一点体力,摸一张牌/弃置一名其他角色的一张牌].',
      zuimengmrfz: '醉梦',
      zuimengmrfz_info: '限定技,出牌阶段,你可以使用一张【酒】并获得场上至多X张牌(最多从同一名角色处获得两张牌),将手牌补至X张,结束出牌阶段和跳过弃牌阶段.(X=场上存活人数)',
      haojiumrfz: '好酒',
      haojiumrfz_info: '锁定技,当你使用【酒】时,你回复一点体力;你使用【酒】无次数限制.',
      juntongmrfz: '军统',
      juntongmrfz_info: '①锁定技 ,你跳过判定阶段和摸牌阶段,你的手牌上限－1,你每轮开始时摸三张牌.②你使用【杀】选择目标后,可以进行一次判定,若为:♦️️,此杀不记入次数;♥️️,此杀可额外指定一个目标(目标必须合法);♠️️:摸一张牌.',
      pochengmrfz: '破城',
      pochengmrfz_info: '每三轮限一次,出牌阶段当你使用【杀】且本轮不为第一轮时,你可以令此【杀】额外结算两次,你跳过出牌阶段且本回合手牌上限+1.',
      junqimrfz: '军旗',
      junqimrfz_info: '①锁定技,游戏开始时,你选择获得‘军旗’标记;根据拥有‘军旗’标记角色的‘军旗’的类型获得不同的效果:</br><span class=thundertext>【支援之旗】</span>:与其距离不大于1的角色受到伤害后,其可摸一张牌,交给受伤角色一张牌;摸牌阶段摸牌数+1.</br><span class=greentext>【治愈之旗】</span>:出牌阶段开始时,其可弃置至多三张牌,其选择等量角色,其回复一点体力并令其中手牌数最少的角色摸至4张.</br><span class=firetext>【进攻之旗】</span>:当与你距离不大于2的角色受到伤害时,你可以弃置一张牌,令此伤害+1;使用【杀】的次数+1.</br>②锁定技,准备阶段,若[场上有‘军旗’且你没有军旗/场上没有‘军旗’],你[将‘军旗’标记转移至你/你获得‘军旗’标记],你可以改变‘军旗’的类型.',
      zhiqimrfz: '掷旗',
      zhiqimrfz_info: '出牌阶段限一次,若你有‘军旗’标记,你可以将‘军旗’标记转移给一名其他角色.',
      butuimrfz: '不退',
      butuimrfz_info: '拥有‘军旗’标记的角色回合开始时,其可以选择跳过本回合的判定阶段并弃两张牌或摸一张牌.',
      linhuamrfz: '鳞滑',
      linhuamrfz_info: '①锁定技,当你造成伤害时,改为对其造成等量的无来源伤害.②当你受到属性伤害时,你可以弃置两张牌改为你对伤害来源造成等量伤害.③准备阶段,当你的判定区有牌时,你可以弃置两张手牌移动之.',
      mingshimrfz: '明事',
      mingshimrfz_info: '出牌阶段限两次,每名角色每回合限一次,你可以交给一名其他角色一张牌,观看其手牌,若其手牌在交予牌后:①大于3:你弃置其至多三张手牌,其于下个结束阶段摸一张牌;②小于等于3:你可以令其摸[2/1]张牌,于下一个准备阶段弃置[1/2]张牌.发动该技能后,你于结束阶段摸一张牌.',
      jixiongmrfz: '吉凶',
      jixiongmrfz_info: '当有其他角色获得你的牌的时候,你可以令其获得<符纸>标记;锁定技,有‘符纸’标记的角色的准备阶段开始时,其进行一次判定且移除一个‘符纸’标记,若判定结果为黑色,则其须弃置一张牌并流失一点体力,你获得其弃置的牌,若其仍有‘符纸’标记,重复此流程.',
      jixiongmrfz2: '吉凶',
      jixiongxmrfz: '符纸',
      guaijiemrfz: '怪杰',
      guaijiemrfz_info: '①锁定技,每轮开始时,你失去一点体力.②锁定技,每轮限一次,当你造成伤害后,你令【怪杰①】下一轮失效,你弃置一名角色区域内一张牌.',
      qizhenmrfz: '奇针',
      qizhenmrfz_info: '出牌阶段限一次,你可以选择一名角色并选择弃置其两张牌或对其造成一点伤害,其获得以下效果:①获得一点护盾;②使用的【杀】和【决斗】的伤害基数+1直到其回合结束.',
      guaiyaomrfz: '怪药',
      guaiyaomrfz_info: '锁定技,当你对其他角色造成伤害时,你随机执行下列选项的一项:①回复两点体力(已损失体力值为0则改为获得一点护甲);②受伤的角色弃置一张牌;③受伤的角色下个摸牌阶段摸牌数-1;④你摸一张牌;⑤受伤角色跳过下个出牌阶段和弃牌阶段(概率最低).',
      heishimrfz: '黑矢',
      heishimrfz_info: '锁定技,你的使用的【杀】仅能指定与你距离不大于2的角色为目标,你的【杀】无视防具;你对有防具的角色造成的伤害+1,对与你距离小于等于1的角色造成的伤害+1.</br><span class=thundertext>【黑矢·修改】</span></br>锁定技,你的【杀】无视防具;你对有防具的角色造成的伤害+1,对与你距离小于等于3的角色造成的伤害+1.',
      ruitongmrfz: '锐曈',
      ruitongmrfz_info: '当有其他角色使用防具牌且其在你攻击范围内时,你可以视为对其使用一张【杀】.',
      junumrfz: '巨弩',
      junumrfz_info: '限定技,准备阶段,你可以令你本回合获得如下效果:①使用的【杀】无距离限制、使用次数和目标+1;②修改【黑矢】.',
      wubenmrfz: '武本',
      wubenmrfz_info: '锁定技,当你装备区没有武器牌时,你使用【杀】的次数+1;你的手牌上限+X(X=你装备区空余的装备栏数/2,向下取整).出牌阶段开始时,若你装备区没有武器牌,你可以选择一张手牌并视其为【杀】使用之.',
      wowumrfz: '我无',
      wowumrfz_info: '<span class=firetext>【劲发江潮落】</span></br>你的回合内,你每使用三张牌可视为使用一张不计入次数的【杀】,若此【杀】造成了伤害,你摸一张牌;锁定技,当你本局游戏累计发动5次【我无】时,修改此技能.',
      wowumrfz_rewrite: '我无·修改',
      wowumrfz_rewrite_info: '<span class=firetext>【气收秋毫平】</span></br>每当你累计使用或打出三张牌时,你可以视为使用一张无距离限制且不计入次数的【杀】,你摸一张牌.',
      shubianmrfz: '戍边',
      shubianmrfz_info: '①当你受到伤害后,若伤害来源没有‘息兵’标记,你可以令其本回合获得‘息兵’标记,若其装备区有武器牌,你可以将其置入弃牌堆;出牌阶段开始时,若你没有‘息兵’标记,你可以获得‘息兵’标记.②锁定技,拥有‘息兵’标记的角色不能使用带有伤害类标签的牌且手牌上限+2,若该角色是你,你可以重铸带有伤害类标签的牌,若你未以此法重铸过该牌名的牌,你摸一张牌.',
      fanzhongmrfz: '反重',
      fanzhongmrfz_info: '①准备阶段,你可以令你攻击范围内的一名没有‘反重’标记的其他角色获得‘反重’标记.②锁定技,拥有‘反重’标记的角色获得如下效果:1.当你不因此效果获得牌时,将牌置于武将牌上,你每使用一张牌便选择获得一张武将牌上的牌;2.弃牌阶段开始时,移除所有的‘反重’标记,其获得因此置于在武将牌上的牌.',
      fanzhongmrfz2: '紊乱',
      xinshimrfz: '信使',
      xinshimrfz_info: '①当你累计获得来自其他角色的两张牌时,你可以从牌堆中获得一张你指定类型的牌;②出牌阶段,你可以选择一张手牌并交给一名其他角色(不能选择相同类型的牌且不能指定相同的角色),当你本回合因此:1.交出一张牌,摸一张牌:2.交出两张牌,获得你牌的角色交给你一张手牌,其摸一张牌;3.交出三张牌,你分配一个‘反重’标记给任意其他角色.③锁定技,你因【信使①】获得的牌本回合不计入手牌上限.',
      dunpaomrfz: '盾炮',
      dunpaomrfz_info: '锁定技,你的攻击范围+5,你不能指定与你距离为1的角色为目标;当你使用【杀】对距离你大于1的角色造成伤害时,该角色进行判定,若不为红色,此伤害+1;回合开始时,你可以修改此技能.',
      dunpaomrfz_rewrite: '盾炮·修改',
      dunpaomrfz_rewrite_info: '锁定技,你的手牌上限+2.',
      biaohaomrfz: '飙号',
      biaohaomrfz_info: '蓄力技(0/4),出牌阶段限两次,你可以弃置一张带有伤害类标签的牌,你增加一点蓄力值;你可以按照下列规则消耗蓄力值:①你可以消耗1点蓄力值,视为使用一张【杀】;②出牌阶段,你可以消耗4点蓄力值,视为使用三张【杀】和一张【万箭齐发】,失去3点体力.',
      xuezhanmrfz: '血战',
      xuezhanmrfz_info: '锁定技,当你首次即将死亡时,取消之,你将体力值和体力上限调整至2、弃置你的区域内所有牌、摸4张牌并重置你的武将牌.',
      fengjianmrfz: '锋剑',
      fengjianmrfz_info: '锁定技,当你响应牌后,你获得如下效果:当你使用下一张非【闪】的基本牌后,你可以视为使用一张相同的基本牌(不计入使用次数).',
      hongsongmrfz: '红松',
      hongsongmrfz_info: '①锁定技,当你响应牌后,若场上‘红松’标记小于3,你获得一个‘红松’标记;拥有‘红松’标记的角色或你需要使用或打出【闪】时,其可以进行判定,若不为♥️️,其视为使用或打出一张【闪】并获得判定牌,若该角色不为你,其移除‘红松’标记.②回合开始时,若你有‘红松’标记,你可以将任意个‘红松’标记交给任意名其他角色.',
      huijuanmrfz: '绘卷',
      huijuanmrfz_info: '①锁定技,你记录每轮第一张没有被记录过的被使用的普通锦囊牌、基本牌和非延时锦囊的牌名;你的回合结束时,你删除所有被记录的牌名.②你可以将一张手牌当做你记录的牌名的牌使用或打出(此牌不计入使用次数),删除你使用的牌的牌名.',
      dianjingmrfz: '点睛',
      dianjingmrfz_info: '转换技,当你使用转化牌时,你可以从牌堆中获得与你使用的转化牌的阳:牌名相同;阴:类型相同的牌.',
      cangjuanmrfz: '藏卷',
      cangjuanmrfz_info: '锁定技,你每轮前三次获得牌于本轮不计入手牌上限.',
      guozaimrfz: '过载',
      guozaimrfz_info: '出牌阶段限一次,你可以展示牌堆顶X+1张牌,选择一名其他角色,对其使用其中的【杀】,你可以获得其中一张不是【杀】的牌,你弃置剩余的牌.(X=你的体力上限)',
      lianshemrfz: '连射',
      lianshemrfz_info: '锁定技,你使用【杀】的次数改为X.(X=你的体力上限)',
      yuanmengmrfz: '援盟',
      yuanmengmrfz_info: '当你的攻击范围外有角色A使用【杀】仅指定角色B时,你可以选择对[角色A/角色B]使用一张【杀】(若角色B为你,则你只能选择对角色A使用【杀】),你与[角色B/角色A]各摸一张牌(若角色B为你,改为你摸一张牌),若你的【杀】被【闪】抵消.',
      ningshenmrfz: '凝神',
      ningshenmrfz_info: '锁定技,当你连续两个回合没有成为当前回合角色使用的牌(你自己使用的牌除外)的目标时,你选择摸一张牌或从牌堆中获得一张【杀】;每轮开始时,若你上一轮没有受到伤害或本轮为第一轮,你下一张伤害类标签的牌伤害基数+1.',
      bingximrfz: '屏息',
      bingximrfz_info: '锁定技,你的回合外,若你手牌数不小于你的体力值,你的攻击范围视为0.',
      nianshoumrfz: '念手',
      nianshoumrfz2: '念手',
      nianshoumrfz_info: '①出牌阶段,你可以将一张武器牌置于你的武将牌上,称为‘巨剑’(上限为2),你视为装备了‘巨剑’.②当你使用【杀】指定目标后,若目标武将牌上的‘巨剑’小于等于1,你可以选择获得一张‘巨剑’并将其置于目标的武将牌上,使其摸牌阶段摸牌数和本回合第一次对你造成的伤害-X(X=其‘巨剑’标记数).③锁定技,你的准备阶段,你随机获得所有有‘巨剑’标记角色的装备区和手牌的各一张牌,你获得其武将牌上的所有‘巨剑’牌;游戏开始时,你从牌堆中获得两张武器牌并废除你的武器栏.',
      chongjimrfz: '冲击',
      chongjimrfz_info: '当你使用的【杀】造成伤害后,你可以对与受伤角色座次相邻的其他角色造成一点伤害,其弃置X张手牌.(X=本次你造成的伤害数)',
      zhangyimrfz: '胀意',
      zhangyimrfz_info: '锁定技,若你有‘巨剑’标记,你的攻击范围+X.(X=你的‘巨剑’标记的数量)',
      jianfengmrfz: '俭风',
      jianfengmrfz_info: '当你使用【杀】结算完成后,你可以进行判定,若为♠️️,你获得此杀且此杀不计入次数限制.',
      shuiqiangmrfz: '水枪',
      shuiqiangmrfz_info: '当你使用【杀】指定目标后,你可以令你攻击范围内的任意不为此【杀】目标的其他角色都成为此【杀】的目标.',
      yuyunmrfz: '余韵',
      yuyunmrfz_info: '你的回合结束时,若你本回合没有使用过【杀】,你可以摸X张牌下一回合使用【杀】的次数+X(最多为2).(X=你本回合可以使用【杀】的次数,X最大为3)',
      liqunmrfz: '离群',
      liqunmrfz_info: '每回合限一次,当你成为其他角色使用牌的目标时,若此牌目标为1或使用者与你距离大于1,取消之.',
      chuangshangmrfz: '创伤',
      chuangshangmrfz_info: '当你不因【创伤】而对其他角色造成伤害后,每满足下列一项你便可以摸一张牌,若满足所有选项,你可以放弃摸牌,对受伤角色造成一点伤害:①目标是场上体力值最少的角色;②你的攻击范围内有生命值不大于一半的其他角色.',
      jinghuamrfz: '镜花',
      jinghuamrfz2: '镜花',
      jinghuamrfz_info: '每回合限一次,当你使用【杀】时,你可以额外指定至多两个目标(无距离限制),若你造成的伤害不大于2,你流失一点体力.',
      ruximrfz: '入隙',
      ruximrfz_info: '当你使用的【杀】指定其他角色为目标后,你可以进行一次判定,若判定结果为黑色,则你横置该角色,若结果为♣️️,你本回合使用【杀】的次数+1;当你对横置的角色或判定区有牌的角色使用牌且此牌目标不大于1时,你可以弃置其区域内一张牌或者摸一张牌.',
      wenxuemrfz: '问雪',
      wenxuemrfz_info: '当你使用【杀】选择目标后,你可以令至多2名被横置的角色或判定区内有牌的角色(目标必须合法)成为此【杀】的目标;同一回合,每当你对其他角色累计使用2的X倍张的非虚拟【杀】时,你可以视为使用X张【杀】(不计入次数限制).',
      yongwomrfz: '拥我',
      yongwomrfz_info: '①锁定技,当你武将牌背面朝上时,你获得如下效果:1.当你的上家或下家使用牌后,其须弃置一张牌,其每累计因此弃置两张牌,你对其造成一点伤害,你可以选择将你的武将牌翻面;2.其他角色计算与你的距离+1.当你的武将牌正面朝上时,你获得如下效果:1.当你于一轮内首次进入濒死状态时,你将体力值回复至1,将你的武将牌翻面;2.任意角色的回合结束阶段,若你本回合受到或造成了伤害,你可以将你的武将牌翻面.②锁定技,当你翻面至正面朝上时,你摸两张牌.',
      jigongmrfz: '机工',
      jigongmrfz_info: '锁定技,游戏开始时或你的准备阶段,若你的装备区没有【支援装备】,你选择装备一个支援装备;回合结束时,若你的装备区有【支援装备】,你可以将其移动至一名其他角色的装备区(不可以替换原装备).',
      jigongmrfz_card: '支援装备',
      jigongmrfz_card_info: '锁定技,根据【支援装备】的类型获得对应的效果.</br>支援装备类型:</br>白铁多功能平台-攻击型:当你造成至少两点伤害时,你可以令此伤害+1.</br>白铁多功能平台-支援型:锁定技,弃牌阶段开始时,你摸一张牌并额外执行一个出牌阶段.</br>铁钳号原型机:出牌阶段你可以弃置X张带有伤害类标签的牌,选择一名你攻击范围内的其他角色,对其造成一点伤害(X=此技能本回合使用数+1)',
      jiefeimrfz: '节费',
      jiefeimrfz_info: '①当【支援装备】被移出游戏时,你可以进行判定,若为红色,你摸一张牌并可令一名角色装备与此次被移出游戏的【支援装备】类型相同的【支援装备】.②锁定技,[任意角色的回合结束阶段,若其装备区有【支援装备】/【支援装备】进入弃牌堆时],将此牌[置入弃牌堆/移出游戏].',
      fensuimrfz: '粉碎',
      fensuimrfz_info: '锁定技,当与你距离不大于1的其他角色进入濒死状态时,你摸一张牌.',
      yuechuimrfz: '跃锤',
      yuechuimrfz_info: '当你使用【杀】后,你可以摸[ 1 ]张牌,你可以选择依次执行下列任意个效果:<br>1.弃置一张装备牌,令[]中的数字+1(至多为3);<br>2.对与任意目标角色距离为1的一名其他角色造成一点伤害.',
      langqunmrfz: '狼群',
      langqunmrfz_info: '①锁定技,[游戏开始时/当你于此回合第一次失去牌时],若你的‘狼群’标记数不大于2,你获得[2/1]个‘狼群’标记;你的弃牌阶段结束时,你摸X+1张牌(X=本阶段进入弃牌堆的牌的数量的一半,向下取整);当你有‘狼群’标记时,你的手牌上限+1.②当你成为带有伤害类标签的牌的目标后,你可移去一个‘狼群’标记并取消之.',
      qunxingmrfz: '群性',
      qunxingmrfz_info: '①锁定技,你对有‘群仇’标记的角色使用牌无距离限制且其无法响应你使用的牌;当你对有‘群仇’的角色造成伤害后,你摸X张牌,其移去所有‘群仇’标记(X=其‘群仇’标记数).②当你成为其他角色使用牌的目标时,你可以令其获得一个‘群仇’标记(最多为6).',
      yixuemrfz: '医学',
      yixuemrfz_info: '锁定技,每轮限一次,当你回复体力时,回复值+1.',
      conghunmrfz: '丛魂',
      conghunmrfz_info: '①每轮开始时,若你没有‘坚韧’标记且上轮没有使用过【丛魂①】,你可以令你本轮受到伤害时,令此伤害-1且你获得一个‘坚韧’标记.②锁定技,任意角色的回合开始阶段,若你本轮没有使用过【丛魂①】且你的‘坚韧’标记数大于1,你失去一点体力并移去一个‘坚韧’标记.',
      juximrfz: '锯袭',
      juximrfz2: '锯袭',
      juximrfz_info: '当你使用的【杀】指定目标后且目标数不大于1,你可以将目标角色的X张牌置于你的武将牌上,若此杀造成了伤害,你可以至多获得你武将牌上的两张牌,否则,目标角色至多获得你武将牌上的两张牌,弃置你武将牌上的牌.(X=目标角色区域内牌的花色数)',
      mojianmrfz: '魔剑',
      mojianmrfz_info: '锁定技,你的非雷属性【杀】均视为火属性【杀】,你的雷属性【杀】均视为普通【杀】;出牌阶段限两次,当你造成火焰伤害后,你摸两张牌.',
      yujinmrfz: '余烬',
      yujinmrfz_info: '①锁定技,限定技,每轮限一次,当你进入濒死状态时,你执行一个额外的回合.②锁定技,当你的武将牌从背面朝上翻面至正面朝上时,【余烬①】视为没有发动过.',
      huanghunmrfz: '黄昏',
      huanghunmrfz_info: '准备阶段,你可以将你的武将牌翻面并可以弃置至多两张牌,你每弃置一张牌你的体力上限+1,本回合每使用一张带有伤害类标签的牌体力上限-1、攻击距离+2和你使用【杀】造成的伤害+1且可额外指定至多两个目标.',
      fanyuanmrfz: '凡愿',
      fanyuanmrfz_info: '锁定技,本轮成为过【微光】目标的角色不能成为延时锦囊的目标.',
      new_weiguangmrfz: '微光',
      new_weiguangmrfz_info: '每轮限五次,当有角色被横置、武将牌翻至背面朝上或成为延时锦囊的目标后,你可以令其执行满足条件的下列选项:1.被横置:解除横置状态;2.武将牌背面朝上:将武将牌翻面;3.成为延时锦囊的目标:取消之并弃置判定区内所有的牌.其摸X张牌.(X=没有执行的选项数)',
      yingjimrfz: '应急',
      yingjimrfz_info: '每轮限一次,其他角色成为延时锦囊牌的唯一目标时,你可以令其回复一点体力并摸一张牌.',
      zhenzamrfz: '缜匝',
      zhenzamrfz_info: '①锁定技,游戏开始时你获得一个‘壁’标记;当有角色获得‘壁’标记时,若其没有护甲,其获得一点护甲;每轮各限两次,每名角色的准备阶段或有其他角色因你造成的伤害而进入濒死状态时,若你没有‘壁’标记,你获得一个‘壁’标记.②有‘壁’标记的角色受到伤害后,若其因此伤害触发过护甲且没有护甲,其可以随机获得攻击范围内一名其他角色的一张牌并对其造成一点伤害.',
      zhenzamrfz_rewrite: '缜匝·修改',
      zhenzamrfz_rewrite_info: '①锁定技,游戏开始时你获得一个‘壁’标记;当有角色获得‘壁’标记时,若其没有护甲,其获得一点护甲;每轮各限两次,每名角色的准备阶段或有其他角色因你造成的伤害而进入濒死状态时,若你没有‘壁’标记,你获得一个‘壁’标记.②有‘壁’标记的角色受到伤害后,若其因此伤害触发过护甲且没有护甲,其可以随机获得攻击范围内一名其他角色的两张牌并对其造成一点伤害.',
      yinbimrfz: '荫蔽',
      yinbimrfz_info: '每轮限一次,出牌阶段,你可以令至多两名没有‘壁’标记的角色各获得一个‘壁’标记,以此法获得的‘壁’标记和护甲最多持续一轮.',
      liuliemrfz: '琉裂',
      liuliemrfz_info: '出牌阶段开始时,你可以修改【缜匝②】的描述直到本轮结束,你本轮【荫蔽】失效.',
      gongzhenmrfz: '共振',
      gongzhenmrfz_info: '锁定技,出牌阶段,当你使用或打出非转换且非虚拟牌后,若你的手牌中没有与你使用或打出的牌花色相同的牌时,你摸一张牌,反之你弃置一张手牌.',
      mengxiangmrfz: '梦想',
      mengxiangmrfz_info: '锁定技,出牌阶段限X次,你使用或打出的下一张牌无距离和次数限制.(X=本回合你因【共振】而摸牌的次数/2,向下取整)',
      paizhangmrfz: '排障',
      paizhangmrfz_info: '①当你因【共振】弃置的牌进入弃牌堆后,你可以将此牌交给一名其他角色,[当该角色使用此牌/使用牌指定你为目标后],[若此牌/因【共振】获得的牌的]点数大于8、没有点数或牌的数量大于1,其受到一点伤害,反之,其须弃置此牌点数除以3(向下取整)张牌,其使用的此牌无效,若该角色手牌中有你交给其的牌,将其置入弃牌堆,若其上家或下家手牌中有因【排障①】而获得的牌,其弃置因【排障①】而获得的牌,若其因【共振】获得的牌的点数大于8、没有点数或因【共振】获得的牌的数量大于1,受到一点伤害,反之,其须弃置此牌点数除以3(向下取整)张牌.②锁定技,其他角色不能弃置你因【排障①】交给其的牌.',
      tiexianmrfz: '铁弦',
      tiexianmrfz_info: '锁定技,当你受到伤害后,若你的护甲因此减少,你摸三张牌;当你没有护甲时,你的手牌上限和摸牌阶段额定摸牌数+1,且每轮第一次获得牌的点数均视为K.',
      lieshimrfz: '猎矢',
      lieshimrfz_info: '每回合限三次,当你使用【杀】指定唯一目标时,你可以弃置一张牌并视为对该角色距离为1的其他角色使用一张【杀】.',
      guirenmrfz: '鬼人',
      guirenmrfz_info: '出牌阶段,若你的手牌上限大于0,当你使用【杀】指定目标后,你可以令自己本回合的手牌上限－1,令此【杀】的额外结算一次,若如此做,则你于出牌阶段结束时失去【鬼人】并获得【鬼强】.',
      guiqiangmrfz: '鬼强',
      guiqiangmrfz_info: '准备阶段,你可以将手牌补至你的体力上限(至多补至4张),你可以弃置一张牌失去【鬼强】并获得【鬼人】.',
      luanwumrfza: '乱舞',
      luanwumrfz: '乱舞',
      luanwumrfz_info: '①准备阶段,若你拥有【鬼人】,你可以跳过你的判定、摸牌和出牌阶段,视为使用一张结算三次的【杀】,你下次受到的伤害+1(此效果不叠加).②锁定技,出牌阶段开始时,你获得【鬼人】,失去【乱舞②】.',
      yingzhimrfz: '影织',
      yingzhimrfz_info: '每名角色每项每轮限一次,①当你使用一张单一目标的非延时锦囊牌指定目标后,你可以令其下一个摸牌阶段摸牌数-1,你的摸牌阶段摸牌数+1(至多+2);②当一名其他角色响应你使用或打出的牌时,你可以令其下一回合手牌上限－1,你的手牌上限+1(至多+3);③当一名角色因你造成的伤害而进入濒死状态时,你可以使其下次造成的伤害－1,你下次造成的伤害+1(不可叠加);④当你使用或打出牌响应一名其他角色的牌时,你可以使其下一个出牌阶段使用【杀】的次数－1,你的下个出牌阶段使用【杀】的次数+1.',
      yingshaomrfz: '影哨',
      yingshaomrfz_info: '①当你脱离濒死状态时,若场上没有‘影哨’标记,你可以令使你进入濒死状态的角色获得一个‘影哨’标记;锁定技,拥有‘影哨’标记的角色手牌上限-1,每回合至多使用1张杀.②锁定技,当你进入濒死状态时,若场上有‘影哨’,你移去‘影哨’标记并对拥有‘影哨’标记的角色造成一点伤害,你将体力值回复至2并失去【影哨】.',
      jingshuimrfz: '净水',
      jingshuimrfz_info: '每轮开始时,你可以选择一名其他角色,将你的手牌补至与其一致并将你的手牌上限、攻击距离和使用【杀】的次数调整至与其一致.',
      kaiyuanmrfz: '源流',
      kaiyuanmrfz_info: '锁定技,第一轮游戏开始时,你令一名角色摸两张牌且其本局游戏使用【杀】的次数+1,若该角色为你,你额外摸一张牌.',
      liuxingmrfz: '流形',
      liuxingmrfz_info: '锁定技,每回合限一次,当你受到非雷属性伤害时,若你的手牌不小于你的体力值,取消之.',
      yiyinmrfz: '倚音',
      yiyinmrfz_info: '①蓄力技(1/3),出牌阶段,你可以弃置一张带有伤害类标签的牌,增加一点蓄力值.②当你使用【杀】的时,你可以消耗一点蓄力值并令此【杀】的伤害基数+1.',
      huangxiangmrfz: '荒响',
      huangxiangmrfzx: '残影',
      huangxiangmrfz_info: '弃牌阶段结束时,你可以减少一点蓄力值,标记一张手牌,此牌称之为‘残影’;当你失去‘残影’或当你受到伤害且手牌中有‘残影’时,你可以选择一项:①增加一点蓄力值并摸一张牌,若你手牌中没有‘残影’,你可以消耗一点蓄力值并将一张牌标记为‘残影’;②对上一名对你使用过牌的其他角色造成一点伤害.',
      jiyinmrfz: '寂音',
      jiyinmrfz_info: '出牌阶段开始时,若你的蓄力值不为0,你可以令你本回合使用的单一目标的【杀】需要X张【闪】才可抵消且伤害基数改为Y,你本回合获得如下效果:①每当你使用的【杀】造成一点伤害时,你失去一点蓄力值;②你使用的【杀】只能指定满足下列条件中的任意个的角色:1.体力值最大或之一;2.手牌数最多或之一;3.装备区牌最多或之一,若均满足,则Y改为目标角色的体力值;③【倚音②】失效.(X=你使用【杀】的目标的体力值;Y=你使用【杀】的目标的体力值-1和你的蓄力值两者的最小值,Y至少为1)',
      yanmomrfz: '炎魔',
      yanmomrfz_info: '①锁定技,你的攻击距离+2,你使用牌仅能指定你攻击范围内的角色;你的回合开始时,你选择一项:1.本回合你对其他角色使用牌只能指定本轮已进行回合的其他角色;2.本回合你对其他角色使用牌只能指定本轮未进行回合的其他角色.②你使用的非延时锦囊牌或基本牌可以增加你攻击范围内的所有的合法角色为目标.',
      yanbaomrfz: '炎爆',
      yanbaomrfz_info: '每轮每名角色限一次,当你对一名其他角色造成伤害时,你可以令该角色本轮内下次受到【杀】的伤害+1(效果不可叠加).',
      huishenmrfz: '毁神',
      huishenmrfz_info: '出牌阶段限一次,当你使用的牌指定其他角色为目标时,你可以令成为此牌目标的角色选择令你摸一张牌或弃置一张手牌.',
      dizhumrfz: '砥柱',
      dizhumrfzx: '夜灯',
      dizhumrfz_info: '出牌阶段开始时,你可以选择至多两名角色,其获得一个<夜灯>标记直到你的下个回合开始;锁定技,拥有<夜灯>标记的角色受到伤害时,此伤害-1,若此伤害数不小于其体力值,则改为防止此次伤害,移除‘夜灯’标记.',
      renbenmrfz: '人本',
      renbenmrfz2: '人本',
      renbenmrfz3: '人本',
      renbenmrfz_info: '锁定技,每轮开始时,每名角色各声明一张基本牌或普通锦囊牌,全部角色声明完毕后,你选择一张被声明最多或之一的牌,其他角色依次选择本轮内其是否不可弃置且不可使用或打出与声明的牌牌名相同的牌,选择‘是’的角色出牌阶段可以交给你与被声明的牌牌名相同的牌并摸一张牌,选择‘否’的角色本轮的攻击范围-X(X=本次选择‘是’的角色的数量);你手牌中的与本次被声明的牌牌名相同的牌不计入手牌上限、不可弃置且不可使用或打出.',
      fuyuanmrfz: '复元',
      fuyuanmrfz_info: '锁定技,当一名其他角色因你回复体力时,其摸一张牌.',
      gaihuamrfz: '钙化',
      gaihuamrfz_info: '当你攻击范围内有其他角色受到属性伤害时,你可以弃置一张与造成伤害的牌类型不同的牌,此伤害+1.',
      yaopeimrfz: '药配',
      yaopeimrfz_info: '出牌阶段限一次,若你本阶段还剩余使用【杀】的次数,你可以弃置一张牌并使你本回合使用【杀】的次数-1,选择以下一个选项:①选择一名与你距离为1点角色,令其回复一点体力,若其已损失的体力值大于等于3,额外为其回复一点体力;②令在你攻击范围内的角色各回复一点体力.',
      zhuohenmrfz: '灼痕',
      zhuohenmrfz_info: '①每名角色每回合限一次,当你使用牌指定一名其他角色为目标后,你可以使其获得一个‘灼痕’标记(每名角色最多拥有一个‘灼痕’标记)并令其弃置一张手牌.②锁定技,拥有‘灼痕’标记的角色获得如下效果:手牌上限-1,受到伤害时需弃置一张手牌,回合结束时移除‘灼痕’标记;你的手牌上限+X;有‘灼痕’的角色回合开始时,若你的手牌数不是全场最多或之一,你摸一张牌.(X=场上有的‘灼痕’标记数)',
      yingyaomrfz: '映耀',
      yingyaomrfz_info: '每轮限X次,当你对其他角色造成伤害后,你可以选择你攻击范围内的角色或者你,令其回复一点体力,若该角色为你,你摸一张牌.(X=场上的‘灼痕’标记数)',
      minghuomrfz: '命火',
      minghuomrfz_info: '准备阶段,你可以选择获得一个效果直到你的下个准备阶段:①每回合当你使用的第一张单一目标的普通锦囊或【杀】选择目标后,你可以额外指定一个目标;②当有‘灼痕’标记的角色进入濒死状态时,你可以令其上家或下家(不能是你)获得一个‘灼痕’标记,其弃置一张手牌.',
      kuangyumrfz: '狂语',
      kuangyumrfz_info: '每回合每名角色限一次,当你使用单一目标的普通锦囊牌或【杀】指定其他角色为目标后,若该角色没有‘风起’标志,你可以使其获得一个<风起>标记(持续到其回合结束),且令其下回合随机跳过两个阶段,若该角色在你的攻击范围内,其于此牌结算完成之前,你对有‘风起’标记的角色造成的伤害+1,若对其造成了伤害,你修改【狂语】直到下一轮开始.',
      kuangyumrfz_rewirte: '修改·狂语',
      kuangyumrfz_rewirte_info: '每回合每名角色限一次,当你使用单一目标的锦囊牌指定其他角色为目标后,若该角色没有‘风起’标志,你可以使其获得一个<风起>标记(持续到其回合结束),且令其下回合随机跳过两个阶段,若该角色在你的攻击范围内,其于此牌结算完成之前,你对有‘风起’标记的角色造成的伤害+1.',
      chuangzhongmrfz: '传终',
      chuangzhongmrfz_info: '锁定技,当你使用的牌指定目标后,若该角色有‘风起’标志,则其本回合所有非锁定技失效;拥有‘风起’标记的角色手牌上限为-X(X=其体力值).',
      jihumrfz: '棘护',
      jihumrfz_info: '准备阶段,你可以令本回合不能对其他角色使用牌,直到你下一个回合开始,你获得以下效果:每回合限一次,当你成为其他角色的基本或者非延时锦囊牌的目标后,你可以视为对该角色或与你距离为1的角色使用相同牌名的牌.',
      re_jianshumrfz: '剑术',
      re_jianshumrfz_info: '锁定技,每当你使用的牌指定的目标数累计达到10的整数倍时,你依次获得以下效果:①摸牌阶段摸牌数、【杀】的使用次数和攻击距离各+1,出牌阶段开始时,你可以视为使用一张【杀】(不计入次数)②【杀】的使用次数和攻击距离各+1,失去【棘护】并获得【潮声】.',
      re_chaoshengmrfz: '潮声',
      re_chaoshengmrfz_info: '结束阶段,若你本回合没有造成过伤害,你可以摸两张牌并回复一点体力.',
      yanxunmrfz: '严训',
      yanxunmrfz_info: '①锁定技,你的手牌上限+2;你因【铁锁连环】传导而受到伤害时,此伤害-1;当你于判定阶段受到伤害时,此伤害-2;每轮开始时,若你被横置,取消之.②[弃牌阶段/出牌阶段]开始时,若你的[出牌阶段/摸牌阶段]被跳过,你可以[至多使用两张手牌/摸一张牌];每轮开始时,若武将背面朝上,你可以翻面,你跳过你的出牌阶段.',
      chuchanmrfz: '除颤',
      chuchanmrfz_info: '锁定技,限定技,当你体力值发生变化后,若你的体力值小于2,你将体力值回复至两点且本轮当你受到伤害后你回复一点体力.',
      feixuemrfz: '沸血',
      feixuemrfz_info: '每当你受到一点伤害或流失一点体力后,你可以从牌堆中获得一张火属性的【杀】(没有则改为摸一张牌),若有伤害来源且伤害来源装备区有牌,你可以弃置伤害来源一张装备区的牌,你下回合使用【杀】的次数+1.',
      hualaomrfz: '画牢',
      hualaomrfz_info: '当你对其他角色造成伤害时,你可以令此伤害-X,其下次受到的伤害+X+1.(X=此次造成的伤害数)',
      huhuomrfz: '狐火',
      huhuomrfz2: '狐火',
      huhuomrfz_info: '当你造成伤害后,若此次造成的伤害为0,你可以令受伤角色获得以下效果直到其回合结束(效果可叠加):摸牌阶段摸牌数-1;出牌阶段结束时摸一张牌.',
      wuyuemrfz: '舞乐',
      wuyuemrfz_info: '锁定技,你红色的【杀】目标+1,黑色的【杀】无距离限制.',
      lichangmrfz: '力场',
      lichangmrfz_info: '①出牌阶段每一名角色限一次,你可以选择一名角色,你将一张牌置于其武将牌上,称为<屏障>,其获得一点护盾值(至多为5),若此牌为装备牌,其额外获得一点护盾值(至多为5);锁定技,有‘屏障’的角色受到后,若其护盾减少了,其获得其武将牌上的所有‘屏障’牌.②蓄力技(0/3),锁定技,场上的‘屏障’减少时,此技能增加一点蓄力值;一名角色回合开始时,若你有至少3点蓄力值,你可以消耗所有蓄力值并选择至多三名其他角色,被你选定的角色各从牌堆或弃牌堆中获得一张装备牌,其可以将此牌交给你并回复一点体力,否则其使用之.',
      yubimrfz: '御庇', //ubisoft(划掉)ubishit
      yubimrfz_info: '锁定技,场上所有角色的手牌上限+X.(X为其的护盾值,X至多为5)',
      jiushumrfz: '救赎',
      jiushumrfz_info: '一名角色的准备或者判定阶段,你可以将你的任意一张黑色牌当做【无懈可击】使用.',
      kanchamrfz: '勘查',
      kanchamrfz_info: '出牌阶段限一次,你可以弃置一张手牌,你展示牌堆顶或牌堆底的X+3张牌,获得与你弃置的牌类别不同的牌.(X=你发动此技能的次数,X至多为3)',
      longtengmrfz: '龙腾',
      longtengmrfz_info: '①当你不在弃牌阶段因弃置而失去牌时,你可以将其中一张牌置于一名武将牌上没有<龙腾>角色的武将牌上,此牌称之为<龙腾>;拥有<龙腾>的角色根据<龙腾>牌的类型获得对应的效果:</br>1.基本牌:锁定技,摸牌阶段摸牌数-1,出牌阶段结束时摸一张牌.</br>2.锦囊牌:当你使用一张单一目标的普通锦囊牌时,你可以令此牌的目标+1,若此牌带有伤害标签,你可以令此牌造成的伤害+1,本回合此技能失效.</br>3.装备牌:当你使用一张基本牌选择目标后,你可以令此牌的目标+2、伤害基数+1或此牌不计入使用次数.</br>②锁定技,你的准备阶段或你死亡时,你移除全场所有的<龙腾>.',
      quanshanmrfz: '劝善',
      quanshanmrfz_info: '①每名其他角色的回合结束时,若该角色没有手牌,你可以令其将手牌补至体力上限(至多补至3张),其直到其回合结束阶段,其造成伤害后,获得一个‘恶’标记.②锁定技,有‘恶’标记角色的回合结束阶段,其移除其所有的‘恶’标记;拥有‘恶’标记的角色获得如下效果:1.手牌上限-X;2.出牌阶段,若你的手牌上限为0,你立刻结束出牌阶段.(X=你的‘恶’标记数量)',
      chuemrfz: '除恶',
      chuemrfz_info: '出牌阶段限一次,你可以依次观看你攻击范围内或有‘恶’标记的至多两名其他角色的手牌,若其中有红色的牌,你可以选择弃置其手牌中所有♣️️或♠️️牌并令你摸等量的牌,反之,你可以弃置其所有手牌,若其没有‘恶’标记,你对其发动一次【劝善】,反之你移除其所有的‘恶’标记并对其造成等量的伤害.',
      xuebianmrfz: '雪变',
      xuebianmrfz_info: '出牌阶段限一次,你可以至多选择两名其他角色,你与其各展示至多三张手牌,若展示牌的颜色中红色最多,你可以选择对其中一名角色造成一点伤害并令其弃置其展示的牌,反之,所有人各弃置自己展示的牌.',
      tonghemrfz: '统合',
      tonghemrfz_info: '觉醒技,准备阶段,若你因【雪变】造成的伤害不少于2或游戏轮数大于2,你减少一点体力上限、失去【雪变】并获得【鹰视】和【兴邦】,将体力调整至体力上限.',
      xinyingshimrfz: '鹰视',
      xinyingshimrfz_info: '出牌阶段限一次,你可以观看攻击范围内一名其他角色的手牌并弃置其中的X+1张牌.(X=你因【雪变】造成的伤害数)',
      xinbangmrfz: '兴邦',
      xinbangmrfz_info: '摸牌阶段开始时,你可以少摸任意张牌并选择等量名的其他角色,令其选择让你从牌堆中获得一张一种类型的牌,你本回合使用这张牌造成伤害时,你与其各摸一张牌.',
      new_xinbangmrfz: '兴邦',
      new_xinbangmrfz_info: '出牌阶段,当你使用的牌结算完毕后,若你是于此阶段第一次使用此种类型的牌,你可以摸一张牌,若你手牌中没有与你摸的牌的花色相同的牌,你摸一张牌.',
      yingzhumrfz: '英祝',
      yingzhumrfz_info: '①回合开始时,你可以选择令自己在任一阶段结束后额外执行一次此阶段.②每轮开始时,你可以选择一名其他角色,你选择令其在任一阶段结束后额外执行一次此阶段,若此做,本轮【英祝①】失效.',
      yingdanmrfz: '英诞',
      yingdanmrfz_info: '任意角色回合结束时,你可以令其摸X-6张牌.(X=其本回合执行的阶段数)',
      yingfenmrfz: '英奋',
      yingfenmrfz_info: '每轮限一次,当你使用【桃】时,你可以令一名其他角色回复一点体力.',
      huiguangmrfz: '辉光',
      huiguangmrfz_info: '回合结束时,你可以令一名其他角色(不能是已经拥有此技能效果的角色)跳过其下个回合的第X个阶段.(X=本回合你使用的牌的数量)',
      rencimrfz: '仁慈',
      rencimrfz_info: '一名其他角色的结束阶段开始时,若其本回合跳过了任一阶段,你可以对其使用一张【杀】,此杀造成的伤害+1.',
      jiandunmrfz: '剑盾',
      jiandunmrfz_info: '你可以将锦囊牌当任意基本牌使用或打出.',
      xinboremrfz: '般若',
      xinboremrfz_info: '①锁定技,游戏开始时,你选择一名其他角色,其获得<般若>标记,你与其废除各自的防具栏并且手牌上限+1.</br>②当有<般若>标记的角色成为非装备牌的唯一目标时,你可以令你的手牌上限-1,你成为此牌的目标.</br>③每回合每项限一次,你可以令你的手牌上限-1或废除一个装备栏,视为使用一张:1.【无懈可击】;2.【闪】;3.【杀】(不计入使用次数).',
      xinyizhongmrfz: '义重',
      xinyizhongmrfz_info: '①锁定技,准备阶段,若你的手牌上限不小于你的当前体力值,你的手牌上限+X.(X=你没有被废除的装备栏数-1)</br>②锁定技,当你受到来自于有<般若>标记的角色的伤害后,你失去【般若】.',
      yuanliumrfz: '源流',
      yuanliumrfz_info: '①锁定技,游戏开始时,你选择一项:1.令一名角色摸2张牌;2.获得一个<流形>.②锁定技,出牌阶段结束时,你获得X个<流形>(至多为3).(X=出牌阶段你使用牌的类型)③锁定技,你的手牌上限+X.(X=你的<流形>数)',
      xinjingshuimrfz: '净水',
      xinjingshuimrfz_info: '当你于出牌阶段第一次使用非延时锦囊牌或基本牌指定唯一目标后,你可以令此牌额外结算X次,你移除你所有的<流形>.(X=你拥有的<流形>数)',
      shuilingmrfz: '水灵',
      shuilingmrfz_info: '锁定技,每回合限一次,若你的手牌不大于你的体力值,你受到的非属性伤害-1.',
      xinyongwomrfz: '拥我',
      xinyongwomrfz_info: '转换技,阳:当你进入濒死状态时,你可以回复至一点体力;阴:当你武将牌从正面朝上至背面朝上时,你可以摸两张牌,选择一项:1.弃置你攻击范围内一名其他角色区域内各一张牌;2.对你攻击范围内的一名其他角色造成一点伤害.',
      douzhengmrfz: '斗争',
      douzhengmrfz_info: '其他角色的回合结束阶段,你可以失去所有体力并将武将牌翻面,你可以视为对当前回合角色使用一张【杀】.',
      shensuimrfz: '深邃',
      shensuimrfz_info: '锁定技,当你流失至少两点体力后,你获得等量的护甲;每轮开始时,若你的【拥我】为阴,则你转化之',
      zhongxiemrfz: '重械',
      zhongxiemrfz_info: '①锁定技,当你造成伤害时,此伤害+X.(X=受到伤害的角色的护甲值)</br>②锁定技,当你使用的【杀】指定目标后,若此杀的点数不小于其手牌数,此杀不可被【闪】响应;你使用的【杀】无视防具.</br>③锁定技,你的攻击距离+2.',
      rusuimrfz: '入髓',
      rusuimrfz_info: '当你使用【杀】对一名其他角色造成伤害时,每满足下列一项你可令该角色弃置一张牌,若全部满足,则此【杀】伤害+1:</br>1.手牌数不小于体力值;</br>2.已损失体力不大于其体力值:</br>3.装备栏有牌.',
      mianzaimrfz: '免灾',
      mianzaimrfz_info: '锁定技,当你进入濒死阶段时,你展示牌堆顶6张牌,若其点数之和不大于你累计使用的牌的点数之和,你将体力回复至3点,手牌补至3张,重置你累计使用的牌的点数之和.',
      zhijinmrfz: '掷金',
      zhijinmrfz_info: '①锁定技,当你使用的牌与你上一张花色相同或每轮开始时,你获得一个<钱>.②出牌阶段,你可以移除与选项数字相同的<钱>将一张牌按照下述规则当作一张牌使用:1.:火【杀】;2.:决斗;3.:无中生有;4.:桃;5.万箭齐发.若你因此移除了所有的<钱>,你摸一张牌.',
      chongdanmrfz: '铳弹',
      chongdanmrfz_info: '锁定技,每轮你至多能使用2X张牌;每轮每项限一次你第一次[造成/受到]伤害后,你摸等同于你体力值张牌或回复等同你手牌数点体力.(X=你的体力上限)',
      tianxuanmrfz: '天选',
      tianxuanmrfz_info: '出牌阶段,每当你使用一张带有伤害类标签的牌时,你可以进行一次判定,若为[♥️️],此牌结算两次,你删除[]中的描述,反之你在[]内增加一种花色.',
      shengcaimrfz: '圣裁',
      shengcaimrfz_info: '①出牌阶段限一次,当你使用一张带有伤害类标签的牌选择目标后,若你本回合使用过带有伤害类标签的牌,你可以令该牌的造成的伤害+1.</br>②回合结束时,你可以对本回合受到过伤害的角色造成一点伤害.',
      dianyongmrfz: '电涌',
      fuxiemrfzx: '浮标',
      dianyongmrfz_info: '出牌阶段开始时,若场上有四个<浮标>,你可以移除所有的<浮标>,将等量依次个<浮标>分配给任意名角色,你获得以下效果直到回合结束:1.当你使用【杀】或单一目标的非延时锦囊牌(【无中生有】除外)选择目标后,你可以令任意名有<浮标>的角色成为此牌的目标,若此牌是【杀】,则你移除场上的一个<浮标>标记;2.你对有<浮标>的角色使用【杀】无次数限制.',
      fuxiemrfz: '浮械',
      fuxiemrfz_info: '①锁定技,游戏开始时,你获得两个<浮标>;你的手牌上限+X.(X=你的<浮标>数);你对有‘浮标’的角色使用牌无距离限制;你对有<浮标>的其他角色造成的伤害均视为雷属性伤害.</br>②出牌阶段,当一名其他角色成为你使用牌的唯一目标时,你可以失去一个<浮标>并令其获得一个<浮标>.</br>③出牌阶段,若场上<浮标>总数不超过3,你可以弃置一张♦️️的牌,获得一个<浮标>.',
      shizhunmrfz: '失准',
      shizhunmrfz_info: '锁定技,其他角色准备阶段,若其有<浮标>,则其进行判定,若判定结果为黑,则你对其造成一点雷电伤害,其失去一个<浮标>,反之,你获得判定牌.',
      yijiemrfz: '义劫',
      yijiemrfz_info: '出牌阶段限一次,你可以先选择一名其他角色,称为A,再选择至多两名不为A的其他角色,后选择的角色和你称为B,B可以对A使用一张【杀】(不计入次数限制),若A因此受到过伤害,B获得A一张牌(A没有牌则改为对其造成一点伤害).',
      fuhuangmrfz: '赴荒',
      fuhuangmrfz_info: '觉醒技,当你获得牌后,若你不因摸牌阶段的额定摸牌而获得了至少2张牌,你失去【义劫】,获得【卫护】和【拓荒】,摸两张牌、获得1点护甲和失去一点体力上限.',
      tuohuangmrfz: '拓荒',
      tuohuangmrfz_info: '出牌阶段限一次,你可以选择至多3名角色,展示牌堆顶4-你选择的角色数张牌,被选择的角色可以弃置任意张与其花色相同的手牌并摸等量+1张牌.',
      weihumrfz: '卫护',
      weihumrfz_info: '①锁定技,每轮开始时,若你没有护甲,你获得一点护甲;当你有护甲时,手牌上限+1.②出牌阶段结束时,你可以失去至少一点护甲,令等量+1名没有护甲的其他角色获得一点护甲.',
      ruiyamrfz: '锐牙',
      ruiyamrfz_info: '当一名其他角色成为你使用的【杀】的唯一目标后,若其是你上次使用【杀】的唯一目标,你可以令此杀伤害+1.',
      shouliemrfz: '狩猎',
      shouliemrfz_info: '①出牌阶段,你可以将任意张带有伤害标签的牌置于你的武将牌上,称之为<矢>(至多为3);每回合限一次,你可以将<矢>当做刺【杀】使用或打出.</br>②准备阶段,你可以跳过本回合的出牌阶段和弃牌阶段并选择一名其他角色,直到你下个回合开始阶段:其他角色的回合结束阶段,你可以对你选择的角色使用一张【杀】.',
      zhanjumrfz: '盏菊',
      zhanjumrfz_info: '当有角色处于濒死状态时,你可以将所有手牌当做【桃】对其使用,若其脱离濒死状态,你可以重铸你区域内的一张牌.',
      zhuhuomrfz: '烛火',
      zhuhuomrfz_info: '①出牌阶段限一次,你可以重铸一张牌.</br>②当你因重铸而失去牌后,你可以令至多X名角色摸一张牌,或令你摸X(至多为5)张牌并失去此技能直到本阶段结束.(X=此牌牌名的字数)',
      yunjiaomrfz: '韵脚',
      yunjiaomrfz_info: '锁定技,出牌阶段,当你使用牌时,若此牌的牌名与你本局游戏使用的上一张牌的牌名押韵,你重置武将牌上的技能.',
      lvmengmrfz: '旅梦',
      lvmengmrfz_info: '锁定技,每轮开始时,你可以将基本牌、锦囊牌和装备牌分配给对应的标签;你使用对应标签的牌获得对应标签的效果.</br>北风:每回合限四次,从牌堆中获得一张你手牌中没有的花色</br>种子:此牌结算完毕后你可以将其交给一名其他角色</br>皮毛:不可被其他角色响应',
      beifeng_lvmengmrfz: '北风(<font color = rgb(255,255,255)>摸牌</font>)',
      zhongzi_lvmengmrfz: '种子(<font color = #3c61ec>给牌</font>)',
      pimao_lvmengmrfz: '皮毛(<font color = #e83121>强中</font>)',
      rechenmrfz: '热忱',
      rechenmrfz_info: '锁定技,出牌阶段,当你使用的牌和你本回合上一张使用的牌的花色相同,则此牌无次数且无距离限制.',
      qinmingmrfz: '琴鸣',
      qinmingmrfz_info: '出牌阶段限一次,你可以令一名其他角色重铸所有手牌,其展示所有手牌并须使用所有手牌(必须合法).',
      kongwomrfz: '空我',
      kongwomrfz_info: '锁定技,当你摸牌时,改为从弃牌堆中随机获得等量的牌(不能是本回合你因失去而进入弃牌堆的牌);出牌阶段,当其他角色因使用而失去牌时,若此牌不是装备牌且你本阶段没有以此法获得过相同牌名的牌,你获得其中至少一张牌.',
      zhengrongmrfz: '征戎',
      zhengrongmrfz_info: "①每<span id='clickableText' style='color:blue; cursor:pointer; text-decoration: underline;' onclick='mrfzfuc.showDiv(1)'>回合轮</span>每项限一次,当你或与你距离不大于1的其他角色受到伤害后,你可以选择并在本<span id='clickableText' style='color:blue; cursor:pointer; text-decoration: underline;' onclick='mrfzfuc.showDiv(1)'>回合轮</span>删除一项,其回复一点体力:1.体力上限-1;2.弃置一张牌;3.下个摸牌阶段摸牌数-1.</br>②你的回合开始时,若【征戎①】所有选项均被删除,你可以将手牌补至体力上限.",
      siyanmrfz: '死烟',
      siyanmrfz_info: "出牌阶段,当你使用【杀】选择唯一目标后,若该角色上<span id='clickableText' style='color:blue; cursor:pointer; text-decoration: underline;' onclick='mrfzfuc.showDiv(1)'>回合轮</span>对你造成过伤害或你本回合对其造成过伤害,你可以流失一点体力,令其流失一点体力并选择一项:1.无法响应此【杀】;2.弃置两张手牌,若此牌造成了伤害且此牌花色为♦️️,你回复一点体力.",
      kuxiumrfz: '苦修',
      kuxiumrfz_info: '①出牌阶段,你可以将一张牌当做任意延时锦囊牌置入你的判定区,摸X张牌.②锁定技,你使用【杀】的次数+X.(X=你判定区牌的数量)',
      lirenmrfz: '砺刃',
      lirenmrfz_info: '准备阶段,你可以弃置你判定区的所有牌,流失一点体力.',
      weiyamrfz: '威压',
      weiyamrfz_info: '当你对其他角色造成伤害后,你可以令其下个出牌阶段不能使用或打出带有伤害类标签的牌.',
      zhiwumrfz: '至武',
      zhiwumrfz_info: '锁定技,</br>①你使用有颜色的【杀】不能被与此【杀】相同颜色的牌响应.</br>②你于出牌阶段使用的转化杀不计入次数限制.</br>③你的普通锦囊牌视为【杀】.',
      shaobanmrfz: '哨伴',
      shaobanmrfz_info: '①出牌阶段限一次,若场上没有【沙地兽】,你可以弃置一张手牌并选择一名其他角色,将【沙地兽】置入其装备区.②锁定技,装备区有【沙地兽】的其他角色视为在你的攻击范围内;你每回合对装备有【沙地兽】的其他角色造成的第一次伤害+1.',
      tankuangmrfz: '探矿',
      tankuangmrfz_info: '每回合限X次,当你使用的牌结算完毕后,你可以展示牌堆顶一张牌,每满足一项你摸一张牌:1.展示的牌与你使用的牌颜色相同;2.展示的牌与你使用的牌类型相同;3.展示的牌的点数不小于你使用的牌,若均不满足,你失去一点体力且你失去本技能直到回合结束,若均满足,你将体力回复至体力上限.(X=在你攻击范围内的其他角色数,X至少为2)',
      heyingmrfz: '禾盈',
      heyingmrfz_info: '每回合限一次,当[一名其他角色/你]于摸牌阶段外一次性从牌堆中获得两张牌后,[你可以令其选择是否/你可以]将此次摸的牌当作至多指定X名角色且结算X次的【五谷丰登】使用.(X=此次摸的牌类型的数量)</br><span style="font-family: yuanli">良田万顷岁无饥.</span>',
      rancuimrfz: '染翠',
      rancuimrfz_info: '锁定技,当你死亡后,所有被发动过【垦野】的角色获得技能【良田】.</br><span style="font-family: yuanli">寸心枯荣,百谷长青.</span>',
      liangtianmrfz: '良田',
      liangtianmrfz_info: '锁定技,每阶段限一次,当你不因此技能而摸牌后,你摸一张牌.',
      newzhidianmrfz: '执典',
      newzhidianmrfz_info: '出牌阶段限X次,你可以将一张牌交给一名其他角色,其选择一项:</br>1.弃置三张牌,你获得其中一张牌;</br>2.受到一点伤害且你令其一个技能失效直到其回合结束;</br>3.横置武将牌,本回合你不能再对其使用此技能.</br>(X=你的体力值)',
      newpijimrfz: '辟棘',
      newpijimrfz_info: '锁定技,被横置的其他角色不能响应你使用的牌;当你造成伤害后,若该角色被横置,你对所有被横置的角色造成一点伤害.',
      newgaihuamrfz: '钙化',
      newgaihuamrfz_info: '每回合限一次,当你需要使用基本牌时,你可以选择观看:</br>①牌堆顶三张牌;</br>②弃牌堆顶三张牌;</br>③与你距离不大于1的其他角色的手牌;</br>若你观看的牌中有此牌,你可以使用或打出之,若当前回合角色不为你,则视为未发动过此技能.',
      panshimrfz: '磐石',
      panshimrfz_info: '锁定技,你不能成为每回合第一张牌的目标;你每回合使用的第一张牌不可被其他角色响应.',
      lianmangmrfz: '敛芒',
      lianmangmrfz_info: '锁定技.<br>①当你成为其他角色使用牌的目标后,你重铸至多X张牌(X=此牌牌名的字数),若你:1.因此重铸了带有伤害类标签的牌,你摸一张牌;2.因此重铸了所有手牌,对使用者造成一点伤害,你不能使用或打出手牌直到此牌结算完毕或你进入濒死状态.<br>②当你造成伤害时,你改为令你回复等量体力或摸等量的牌.',
      zhanmangmrfz: '展芒',
      zhanmangmrfz_info: '出牌阶段开始时,若你的手牌数大于你的手牌上限,你可以摸X张牌且本回合使用【杀】的次数+X,本回合【敛芒】失效.(X=你的手牌数-你的手牌上限,X至多为你的体力上限)',
      xingyimrfz: '行义',
      xingyimrfz_info: '其他角色的回合结束阶段,你可以受到一点伤害,并令一名本回合受到过伤害的其他角色回复一点体力.',
      qikumrfz: '岂苦',
      qikumrfz_info: '锁定技,当你不因【岂苦】而获得牌时,若你的手牌数为0,你摸X张牌.(X=你的体力上限-此次获得的牌数)',
      bingzhumrfz: '秉烛',
      bingzhumrfz_info: '①出牌阶段限一次,你选择你手牌中一种花色的所有手牌,并将这些牌分成任意组并置于等量名其他角色的武将牌上,称为<司>.<br>②有<司>的角色使用或打出与<司>相同花色的基本或锦囊牌或相同牌名的牌指定目标后,你可以弃置其一张相同花色或相同牌名的<司>,并令此牌对一名目标角色无效,你摸一张牌.',
      sanyimrfz: '散逸',
      sanyimrfz_info: '锁定技,当你使用的单一目标的【杀】选择目标后,你额外选择任意名体力值之和(包含已经成为此杀目标的角色的体力值)不大于此杀的点数的其他角色成为此杀的目标(无距离限制).',
      baofengmrfz: '追矢',
      baofengmrfz_info: '当你使用的有色【杀】造成伤害后,你可以视为使用一张点数与此牌相同的🃏【杀】(不计入次数限制).',
      zuzhimrfz: '阻滞',
      zuzhimrfz_info: '当你造成伤害后,你可以令该角色本回合无法使用或打出与你对其造成伤害的牌颜色相同的牌.',
      leimingmrfz: '雷鸣',
      leimingmrfz_info: '每轮开始时,你可以记录一种牌名、花色和类型(仅对你可见),本轮当有其他角色使用与你记录的牌名、花色或类型相同的牌时,你可以视为对其使用一张任意颜色的雷【杀】,并清除对应的一个记录.',
      dunyingmrfz: '遁影',
      dunyingmrfz_info: '①结束阶段,你可以将所有手牌置于你的武将牌上,称之为<影>(仅对你可见,且<影>的数量不能超过你的体力上限),你可以如手牌般使用或打出<影>.<br>②每回合限一次,当你使用手牌时,若此牌对应的全部实体牌来源不为你的手牌区,你可以将牌堆顶一张牌作为<影>置于你的武将牌上.',
      niximrfz: '匿袭',
      niximrfz_info: '一名其他角色的结束阶段,你可以对其使用一张【杀】,若此【杀】没有造成伤害,你可以将你的座次移动至其下家.',
      baidumrfz: '摆渡',
      baidumrfz_info: '每回合限一次,当一名角色受到牌伤害后,你可以弃置一张牌,令你获得对其造成伤害的牌,其摸X张牌.(X=你弃置的牌与对其造成伤害的牌的字数之差的绝对值)',
      yuhuimrfz: '语汇',
      yuhuimrfz_info: '每回合每种牌名限一次,你可以将一张牌当作牌名字数不大于此牌的任意基本牌或普通锦囊牌使用.',
      yuximrfz: '余息',
      yuximrfzx: '死魂灵',
      yuximrfz_info: '锁定技.<br>①每轮开始时,你销毁所有的‘死魂灵’,你从游戏外获得等同于你体力上限张点数、花色和牌名(仅普通锦囊和基本牌)随机的牌,并将其置于你的武将牌上,称之为‘死魂灵’,你可以如手牌般使用或打出‘死魂灵’.<br>②‘死魂灵’离开你的区域后销毁之.<br>③当你有‘死魂灵’时,其他角色计算与你的距离+2.',
      haolimrfz: '好礼',
      haolimrfz_info: '出牌阶段,当你使用一张普通锦囊或基本牌后,若此牌点数、花色或牌名与‘死魂灵’相同且不是‘死魂灵’,你可以弃置一张对应的‘死魂灵’并视为使用一张与此牌牌名相同的牌(不计入次数限制).',
      shezumrfz: '射祖',
      shezumrfz_info: '当你不因此技能造成伤害后,你可以弃置一张‘死魂灵’,选择一名与受伤角色距离不大于3的角色(不能是你或受伤角色),对其造成一点火焰伤害.',
      chenaimrfz: '尘埃',
      chenaimrfz_info: '每回合每种类型的牌限一次,当你使用或打出的一张普通锦囊或基本牌结算完毕后,你可以将此牌交给一名其他角色,若该角色是你【断章】选择的角色,其摸一张牌.',
      duanzhangmrfz: '断章',
      duanzhangmrfz_info: '锁定技,游戏开始时,你选择一名其他角色,[ 你/其 ]可以如手牌般使用[ 其/你 ]的手牌.',
      canxiangmrfz: '残响',
      canxiangmrfz_info: '锁定技,你和【断章】选择的角色获得如下效果:<br>1.属性伤害对你无效;<br>2.你不能成为延时锦囊牌的目标.',
      newgongzhenmrfz: '共振',
      newgongzhenmrfz_info: '锁定技,当你使用或打出一张牌后,若此牌与上一张牌的类型相同,你观看牌堆顶两张牌并选择获得一张牌,将剩余的牌置入弃牌堆,反之你弃置你区域内的一张牌.',
      newmengxiangmrfz: '梦想',
      newmengxiangmrfz_info: '锁定技,你使用与上一次你因弃置而失去的手牌的手牌类型相同的牌无次数和距离限制.',
      newhuangxiangmrfz: '荒响',
      newhuangxiangmrfzx: '残影',
      newhuangxiangmrfz_info: '摸牌阶段结束时,你可以令你所有的牌失去‘残影’标记并选择至多两张手牌将其标记为‘残影’.你的回合外,当你失去‘残影’后,你可以选择一项:<br>①令你攻击范围的一名角色选择弃置一张♠️️牌或受到一点伤害;<br>②摸一张牌并将此牌标记为‘残影’.',
      newjiyinmrfz: '寂音',
      newjiyinmrfz_info: '锁定技,当你使用【杀】指定目标后,其每满足下列一项,其抵消此【杀】所需要的【闪】的数量+1,此【杀】对其造成的伤害+1:<br>①手牌数为全场最多;<br>②体力值为全场最多;<br>③装备区为全场最多.',
      guqianmrfz: '孤潜',
      guqianmrfz_info: '每回合限一次,当其他角色有牌因弃置而进入弃牌堆后,你可以摸一张牌,若你手牌中没有相同花色的牌,你重置此技能,反之,你将武将牌翻面.',
      piweimrfz: '辟纬',
      piweimrfz_info: '每回合限一次,当你武将牌翻面时,你可以将一种颜色的所有手牌当做任意花色且伤害基数为2的【出其不意】使用,若此牌造成伤害,受到伤害的角色依次弃置装备区和手牌区的一张牌.',
      tongmaimrfz: '同脉',
      tongmaimrfz_info: '宗族技,每轮每项限一次,当你于回合外造成伤害后,你可以令一名深海猎人角色回复一点体力或复原武将牌.',
      jingliemrfz: '鲸猎',
      jingliemrfz_info: '准备阶段,你可以观看一名其他角色的手牌并选择其中一张牌,该角色选择一项:<br>①失去一点体力,令你获得此牌.<br>②令你视为使用此牌,若你不能使用此牌,则改为摸一张牌,本回合结束阶段你发动一次【鲸猎】.<br>③对你使用一张【杀】,若此杀造成伤害,你翻面,反之执行其他两项.',
      shulangmrfz: '倏浪',
      shulangmrfz_info: '①当你成为【杀】的目标时,你可以对使用者使用一张【杀】(不计入使用次数且需要两张【闪】才可抵消),若此【杀】造成伤害,你取消此杀的所有目标并且获得其一张牌.',
      newxunxiangmrfz: '寻相',
      newxunxiangmrfz_info: '一名其他角色的结束阶段,若其本回合有牌因弃置而进入弃牌堆,你可以与其拼点,若你赢,你获得其本回合因弃置而进入弃牌堆的不同类型的牌各一张,并将拼点牌当雷【杀】对其使用.',
      quliemrfz: '驱猎',
      quliemrfz_info: '①当你使用带有伤害类标签的牌时,你可以令其他角色若在此牌结算完成前使用或打出牌后,其须将一半(向上取整)的牌置于武将牌上.<br>②每名角色的准备阶段,若其有因【驱猎①】而置于武将牌上的牌,其选择获得至少两张不同类型的牌,弃置其余的牌.',
      xueshuomrfz: '血槊',
      xueshuomrfz_info: '当你对手牌数不大于你的角色造成伤害时,你可以令此伤害+1.',
      xunxinmrfz: '巡心',
      visible_xunxinmrfz: '明置',
      xunxinmrfz_info: '出牌阶段限一次,你可以观看一名没有明置牌的角色手牌并明置其中一张牌,若场上没有相同类型的明置牌,你可以重复执行此操作.',
      chixinmrfz: '笞心',
      chixinmrfz_info: '锁定技,当一名角色有[唯一的非装备/不唯一或唯一的装备]明置牌时,其所有手牌均视为[明置牌/【无懈可击】].',
      kuixinmrfz: '溃心',
      kuixinmrfz_info: '当你对一名其他角色造成伤害后,你可以令其所有的[明置/暗置]牌[暗置/明置],其弃置两张暗置的牌.',
    },
  };
  //——————内容设置——————//
  mrfzfuc.importSJZXCharacterSet(legendSJZX);
  //————武将图片路径设置————//
  for (var i in legendSJZX.character) {
    legendSJZX.character[i][4].push(`ext:驶舰之向/image/character/${i}.jpg`);
  }
  lib.config.all.characters.add('legendSJZX');
  lib.config.characters.add('legendSJZX');
  lib.translate.legendSJZX_character_config = "<img style='width:90px;height:25px;' src=extension/驶舰之向/image/orther/SJZXStar6.png></img>";
  return legendSJZX;
});
