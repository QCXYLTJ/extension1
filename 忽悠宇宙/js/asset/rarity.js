'use strict';
console.log('载入asset/rarity.js');
window.hyyzImport(function (lib, game, ui, get, ai, _status) {
  //——————————————————————————————————————————强度评级——————————————————————————————————————————//
  const raritys = { //强度
    zhizhen: [//至臻
    //hyyz
    'b3_hua', 'hyyz_hyyz', 'xt_zhenliyisheng',
    //meng
    'meng_xier', 'meng_ren', 'meng_jiepade', 'meng_kelala', 'meng_shen_tingyun', 'meng_sb_xier', 'meng_alan', 'meng_naxida', 'meng_shenlilingren', 'meng_sb_jizi', 'meng_shenlilinghua', 'meng_wu_xiaogong', 'meng_naweilaite', 'meng_wendi', 'meng_sp_kafuka', 'meng_xinyanzhiluzhe', 'meng_lita', 'meng_zhipeizhiluzhe', 'meng_kaiya', 'JLP_leidianying', 'meng_diluke', 'meng_shalangbaizi', 'meng_lingke', 'meng_zhongyanzhiluzhe', 'meng_wu_jingyuan' //'meng_re_shalangbaizi',
    ],
    legend: [//传说
    //hyyz
    'xt_jingyuan', 'xt_kaituozhe', 'xt_jingliu', 'b3_jizi', 'xt_ruanmei', 'xt_ren', 'xt_huohuo', 'xt_jizi', 'xt_huahuo', 'xt_huangquan', 'xt_shajin',
    //meng
    'Ym_canghaiyisu', 'Ym_miealiei', 'Ym_menghailishang', 'Ym_daowuji', 'Ym_sp_menghailishang', 'Ym_sp_youyi', 'Ym_mushancai', 'meng_yukong', 'meng_xierde', 'meng_tingyun', 'meng_sanyueqi', 'meng_kiana', 'meng_jizi', 'meng_fuxuan', 'meng_lizhiluzhe', 'meng_lisushang', 'meng_kaiyin', 'meng_sp_shenlilinghua', 'meng_chiyuan', 'meng_laiyila', 'meng_funinna', 'meng_abeiduo', 'meng_yelianna', 'meng_zhaoxing', 'meng_aisida', 'meng_luocharen', 'meng_sb_jingyuan', 'meng_qingqizhe', 'meng_kafuka', 'meng_nuoaier', 'meng_wangxiayitong', 'meng_baizhu', 'meng_guinaifen', 'meng_sp_naxida', 'meng_luka', 'JLP_zhongli', 'meng_luocha', 'meng_natasha', 'meng_tuoma', 'JLP_huohuo', 'meng_heitiane', 'meng_jingliu', 'meng_sp_xier', 'meng_huangquan', 'Ym_sp_jiulipu', 'meng_leidianyayi', 'meng_shajin', 'meng_sp_ren', 'meng_liuying'],

    epic: [//史诗
    //hyyz
    'xt_bailu', 'xt_yinlang', 'xt_luocha', 'xt_waerte', 'b3_kaiwen', 'xt_danhengyinyue', 'xt_yinzhi', 'xt_sushang', 'xt_bronya', 'xt_qingque', 'JLP_wendy',
    //meng
    'Ym_jiulipu', 'Ym_yanfeng', 'Ym_lalalala', 'Ym_zhongshiweiyu', 'Ym_lengruohan', 'Ym_xinzhisuoxiangxingzhisuoxiang', 'Ym_miemennayou', 'Ym_re_canghaiyisu', 'Ym_sp_daowuji', 'meng_sushang', 'meng_kuisangti', 'meng_yanqing', 'meng_aierhaisen', 'meng_xiercanghai', 'meng_kalilu', 'meng_tuopa', 'meng_aiyi', 'meng_maisha', 'meng_ruanmei', 'meng_jingyuan', 'meng_hutao', 'meng_shuoyeguanxing', 'meng_sp_fuxuan', 'meng_re_zhongyanzhiluzhe', 'meng_zhenliyisheng', 'meng_jiutiao', 'meng_shaoxia', 'JLP_furina', 'JLP_nahida', 'meng_kalian', 'meng_sb_ren', 'meng_danhengbailu', 'meng_pink', 'meng_sangbo', 'meng_shiwaluo', 'meng_re_xinyanzhiluzhe', 'meng_luotianyi'],

    rare: [//精品
    //hyyz
    //meng
    'Ym_youyi', 'Ym_aizazadi', 'Ym_fushengyi', 'Ym_rijiuyangqichongsanguan', 'Ym_xilin', 'meng_bronya', 'meng_saixiliya', 'meng_wodanheng', 'meng_shanhugongxinhai', 'meng_huahuo', 'meng_leidianzhen'],

    junk: [//平凡
    //hyyz
    //meng
    'Ym_zilinggudelige']

  };
  const devise = { //设计
    hyyz_devise1: [//'鸾翔凤集|群英荟萃'粉丝
    'Ym_zilinggudelige', 'Ym_youyi', 'Ym_aizazadi', 'Ym_fushengyi', 'Ym_rijiuyangqichongsanguan', 'Ym_xilin', 'Ym_jiulipu', 'Ym_yanfeng', 'Ym_lalalala', 'Ym_zhongshiweiyu', 'Ym_lengruohan', 'Ym_canghaiyisu', 'Ym_miealiei', 'Ym_menghailishang', 'Ym_daowuji', 'Ym_sp_jiulipu', 'Ym_xinzhisuoxiangxingzhisuoxiang', 'Ym_sp_menghailishang', 'Ym_miemennayou', 'Ym_sp_youyi', 'Ym_re_canghaiyisu', 'Ym_mushancai', 'Ym_sp_daowuji'],

    hyyz_devise2: [//'掇菁撷华|一叶知秋'抽象产生深刻的思想
    'meng_zhongyanzhiluzhe', 'meng_hutao', 'meng_re_zhongyanzhiluzhe', 'meng_pink', 'meng_xinyanzhiluzhe', 'meng_re_xinyanzhiluzhe'],

    hyyz_devise3: [//'恢宏叙事|身临其境'以讲故事叙事为主导
    'JLP_leidianying', 'meng_qingqizhe', 'meng_shaoxia', 'JLP_furina', 'JLP_nahida', 'meng_lizhiluzhe', 'meng_sb_jizi', 'meng_sp_kafuka', 'meng_lita', 'JLP_zhongli', 'JLP_wendy'],

    hyyz_devise4: [//'别具一格|独辟蹊径'特殊机制为主导
    'meng_danhengbailu', 'meng_kiana', 'meng_shanhugongxinhai', 'meng_shenlilinghua', 'meng_lisushang', 'meng_saixiliya', 'meng_naxida', 'meng_aisida', 'meng_aiyi', 'meng_guinaifen', 'meng_sp_naxida', 'meng_wu_xiaogong', 'meng_kaiya', 'meng_lingke'],

    hyyz_devise5: [//'浮想联翩|别出心裁'剧情人设不存在,但是<照理来说>存在关联
    'meng_naweilaite', 'meng_sp_shenlilinghua', 'meng_baizhu', 'meng_shuoyeguanxing', 'meng_wodanheng', 'meng_wangxiayitong', 'meng_funinna', 'meng_chiyuan', 'meng_shiwaluo', 'meng_leidianzhen', 'meng_sp_xier', 'meng_leidianyayi', 'meng_luotianyi'],

    hyyz_devise6: [//'见字如晤|宛然在目'人设性格为主导
    'meng_sb_xier', 'meng_shenlilingren', 'meng_zhipeizhiluzhe', 'meng_laiyila', 'meng_abeiduo', 'meng_luocharen', 'meng_jizi', 'meng_nuoaier', 'meng_luka', 'meng_luocha', 'meng_tuoma', 'meng_aierhaisen', 'meng_xiercanghai', 'meng_tuopa', 'meng_ruanmei', 'meng_sp_fuxuan', 'meng_jiutiao', 'meng_kalian', 'meng_huahuo', 'meng_kalilu', 'meng_wendi', 'JLP_huohuo', 'meng_yanqing', 'meng_sb_jingyuan', 'meng_yelianna', 'meng_jingyuan', 'meng_heitiane', 'meng_jingliu', 'meng_sangbo', 'meng_huangquan', 'meng_shajin', 'meng_liuying'],

    hyyz_devise7: [//'如法炮制|异路同归'移植其他游戏的原技能
    'meng_ren', 'meng_jiepade', 'meng_kelala', 'meng_alan', 'meng_sp_ren', 'meng_diluke', 'meng_yukong', 'meng_xierde', 'meng_sanyueqi', 'meng_fuxuan', 'meng_kaiyin', 'meng_zhaoxing', 'meng_kafuka', 'meng_natasha', 'meng_sushang', 'meng_kuisangti', 'meng_bronya', 'meng_sb_ren', 'meng_zhenliyisheng', 'meng_shen_tingyun', 'meng_tingyun', 'meng_xier', 'meng_maisha', 'meng_wu_jingyuan', 'meng_shalangbaizi' /*'meng_re_shalangbaizi',*/]

  };
  lib.translate.zhizhen = '至臻';
  lib.translate.hyyz_devise1 = '鸾翔凤集|群英荟萃';
  lib.translate.hyyz_devise2 = '掇菁撷华|一叶知秋';
  lib.translate.hyyz_devise3 = '恢宏叙事|身临其境';
  lib.translate.hyyz_devise4 = '别具一格|独辟蹊径';
  lib.translate.hyyz_devise5 = '浮想联翩|别出心裁';
  lib.translate.hyyz_devise6 = '见字如晤|宛然在目';
  lib.translate.hyyz_devise7 = '如法炮制|异路同归';
  //自动评级
  for (let rarity in raritys) {
    if (rarity == 'zhizhen') lib.rank.rarity.legend.addArray(raritys[rarity]);else
    lib.rank.rarity[rarity].addArray(raritys[rarity]);
  };
  //分包里面混有另一个包的武将,但是如果仅仅作为观看,便无什大碍
  switch (lib.config['extension_忽悠宇宙_hyyz_sort']) {
    case 'storage':lib.characterSort.hyyz = raritys;lib.characterSort.hyyzYm = raritys;break; //强度
    case 'devise':lib.characterSort.hyyzYm = devise;break; //设计
    default:break;
  }
  //——————————————————————————————————————————异构——————————————————————————————————————————//
  const replace = {
    xt_bronya: ['xt_bronya', 'meng_bronya', 'xt_yinlang', 'meng_lizhiluzhe'], //布洛妮娅//大小鸭律者
    b3_hua: ['b3_hua', 'meng_chiyuan'], //华//赤鸢
    xt_danhengyinyue: ['xt_danhengyinyue', 'meng_wodanheng'], //丹恒
    meng_funinna: ['JLP_furina', 'meng_funinna'], //芙宁娜
    meng_fuxuan: ['meng_fuxuan', 'meng_sp_fuxuan'], //符玄
    xt_huohuo: ['xt_huohuo', 'JLP_huohuo'], //藿藿
    xt_jingyuan: ['xt_jingyuan', 'meng_sb_jingyuan', 'meng_jingyuan', 'meng_wu_jingyuan'], //景元
    xt_jizi: ['xt_jizi', 'b3_jizi', 'meng_jizi', 'meng_sb_jizi'], //姬子
    meng_kafuka: ['meng_kafuka', 'meng_sp_kafuka'], //卡夫卡
    meng_kiana: ['meng_kiana', 'meng_zhongyanzhiluzhe', 'meng_xinyanzhiluzhe', 'meng_re_xinyanzhiluzhe', 'meng_re_zhongyanzhiluzhe'], //琪亚娜//律者态
    xt_luocha: ['xt_luocha', 'meng_luocharen', 'meng_luocha'], //罗刹//奥托
    xt_sushang: ['xt_sushang', 'meng_sushang', 'meng_lisushang'], //素裳//李素裳
    meng_naxida: ['meng_naxida', 'JLP_nahida', 'meng_sp_naxida'], //纳西妲
    xt_ren: ['xt_ren', 'meng_ren', 'meng_sb_ren', 'meng_sp_ren'], //刃
    xt_ruanmei: ['xt_ruanmei', 'meng_ruanmei'], //阮·梅
    meng_shenlilinghua: ['meng_shenlilinghua', 'meng_sp_shenlilinghua'], //神里绫华
    meng_tingyun: ['meng_tingyun', 'meng_shen_tingyun'], //停云
    meng_xier: ['meng_xier', 'meng_sb_xier', 'meng_xiercanghai'], //希儿
    xt_zhenliyisheng: ['xt_zhenliyisheng', 'meng_zhenliyisheng'], //真理医生
    xt_huangquan: ['xt_huangquan', 'meng_huangquan'], //黄泉
    JLP_wendy: ['JLP_wendy', 'meng_wendi'], //温迪
    Ym_sp_jiulipu: ['Ym_sp_jiulipu', 'Ym_jiulipu'], //就离谱
    meng_leidianyayi: ['meng_leidianyayi', 'JLP_leidianying'], //芽衣影
    xt_shajin: ['xt_shajin', 'meng_shajin'] //砂金
  };
  //统一将异构录入
  if (!lib.characterReplace) lib.characterReplace = replace;else
  Object.assign(lib.characterReplace, replace);
});